import { createApp, h, nextTick } from 'vue';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const { callMock } = vi.hoisted(() => ({
  callMock: vi.fn().mockResolvedValue([]),
}));

vi.mock('../libs/frappe-client', () => ({
  call: callMock,
}));

import { useAutoComplete } from './useAutoComplete';

function mountComposable(props) {
  let api;
  const emit = vi.fn();
  const root = document.createElement('div');
  const app = createApp({
    setup() {
      api = useAutoComplete(props, emit);
      return () => h('div');
    },
  });

  app.mount(root);
  return { api, emit, unmount: () => app.unmount() };
}

describe('useAutoComplete compatibility contracts', () => {
  beforeEach(() => {
    callMock.mockResolvedValue([]);
    vi.stubGlobal('__', value => value);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it('keeps physician display state and provided filters in sync on selection', async () => {
    const field = {
      fieldname: 'referring_physician',
      options: 'Healthcare Practitioner',
      provideFilter: true,
    };
    const store = {
      dataForm: {},
      fullDataForm: {},
      filters: {},
      autocompleteFilter: {},
      physician: {},
    };
    const option = {
      value: 'PHY-0001',
      label: 'Jane Doe',
      description: 'License: 123',
    };
    const { api, emit, unmount } = mountComposable({ field, store, filters: {} });
    await nextTick();

    api.selectOption(option, field);

    expect(store.dataForm.referring_physician).toBe('PHY-0001');
    expect(store.fullDataForm.referring_physician).toMatchObject(option);
    expect(store.filters.referring_physician).toBe('PHY-0001');
    expect(store.autocompleteFilter).toEqual({ referring_physician: 'PHY-0001' });
    expect(store.physician).toEqual(option);
    expect(emit).toHaveBeenCalledWith('update-autocomplete-value', option, field);

    unmount();
  });

  it('supports values returned by the legacy quick-entry slot', async () => {
    const field = { fieldname: 'patient', options: 'Patient' };
    const store = { dataForm: {}, fullDataForm: {}, filters: {} };
    const { api, unmount } = mountComposable({ field, store, filters: {} });
    await nextTick();

    api.update_input({ value: 'PAT-0001', label: 'John Doe' }, field, field.fieldname);

    expect(store.dataForm.patient).toBe('PAT-0001');
    expect(store.fullDataForm.patient).toEqual({ value: 'PAT-0001', label: 'John Doe' });

    unmount();
  });
});
