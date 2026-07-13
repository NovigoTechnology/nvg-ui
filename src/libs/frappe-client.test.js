import { describe, it, expect, afterEach, vi } from 'vitest';
import { call, frappeCall } from './frappe-client';

describe('frappe-client', () => {
  afterEach(() => {
    delete window.frappe;
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  describe('call()', () => {
    it('uses window.frappe.call when available and resolves with response.message', async () => {
      window.frappe = {
        call: vi.fn(({ method, args, callback }) => {
          expect(method).toBe('my.whitelisted.method');
          expect(args).toEqual({ foo: 'bar' });
          callback({ message: { ok: true } });
        }),
      };

      const result = await call('my.whitelisted.method', { foo: 'bar' });

      expect(result).toEqual({ ok: true });
    });

    it('rejects when window.frappe.call reports an error', async () => {
      window.frappe = {
        call: vi.fn(({ error }) => error(new Error('boom'))),
      };

      await expect(call('my.method', {})).rejects.toThrow('boom');
    });

    it('falls back to fetch when window.frappe is not available', async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ message: { id: 1 } }),
      });
      vi.stubGlobal('fetch', fetchMock);

      const result = await call('my.method', { foo: 'bar', nested: { a: 1 } });

      expect(result).toEqual({ id: 1 });
      const [url, options] = fetchMock.mock.calls[0];
      expect(url).toBe('/api/method/my.method');
      expect(options.method).toBe('POST');
      const body = new URLSearchParams(options.body);
      expect(body.get('foo')).toBe('bar');
      expect(body.get('nested')).toBe(JSON.stringify({ a: 1 }));
    });

    it('omits undefined/null params instead of serializing them as literal strings', async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ message: {} }),
      });
      vi.stubGlobal('fetch', fetchMock);

      await call('my.method', { foo: 'bar', missing: undefined, absent: null });

      const [, options] = fetchMock.mock.calls[0];
      const body = new URLSearchParams(options.body);
      expect(body.get('foo')).toBe('bar');
      expect(body.has('missing')).toBe(false);
      expect(body.has('absent')).toBe(false);
    });

    it('throws when the fetch fallback gets a non-ok response', async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          ok: false,
          status: 500,
          text: () => Promise.resolve('server error'),
        })
      );

      await expect(call('my.method', {})).rejects.toThrow('HTTP error! status: 500');
    });

    it('throws when the fetch fallback response carries a Frappe exception', async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          ok: true,
          json: () => Promise.resolve({ exc: 'Traceback ...' }),
        })
      );

      await expect(call('my.method', {})).rejects.toThrow('Traceback ...');
    });
  });

  describe('frappeCall()', () => {
    it('delegates to window.frappe.call when available', () => {
      const options = { method: 'my.method' };
      window.frappe = { call: vi.fn(() => 'ok') };

      const result = frappeCall(options);

      expect(window.frappe.call).toHaveBeenCalledWith(options);
      expect(result).toBe('ok');
    });

    it('throws when window.frappe is not available', () => {
      expect(() => frappeCall({ method: 'my.method' })).toThrow('frappe.call is not available');
    });
  });
});
