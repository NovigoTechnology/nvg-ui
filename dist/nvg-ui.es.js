import { ref as jo, readonly as ie, getCurrentInstance as qo, onMounted as de, nextTick as le, watch as go, reactive as ce, useId as se, mergeProps as z, openBlock as G, createElementBlock as No, createElementVNode as _r, renderSlot as bo, createTextVNode as ue, toDisplayString as Rr, resolveComponent as Qo, resolveDirective as fe, withDirectives as ge, createBlock as Lo, resolveDynamicComponent as be, withCtx as pe, createCommentVNode as Jo, normalizeClass as Zo, unref as me } from "vue";
var he = Object.defineProperty, or = Object.getOwnPropertySymbols, ve = Object.prototype.hasOwnProperty, ye = Object.prototype.propertyIsEnumerable, rr = (o, r, e) => r in o ? he(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, ke = (o, r) => {
  for (var e in r || (r = {}))
    ve.call(r, e) && rr(o, e, r[e]);
  if (or)
    for (var e of or(r))
      ye.call(r, e) && rr(o, e, r[e]);
  return o;
};
function no(o) {
  return o == null || o === "" || Array.isArray(o) && o.length === 0 || !(o instanceof Date) && typeof o == "object" && Object.keys(o).length === 0;
}
function Uo(o) {
  return typeof o == "function" && "call" in o && "apply" in o;
}
function B(o) {
  return !no(o);
}
function M(o, r = !0) {
  return o instanceof Object && o.constructor === Object && (r || Object.keys(o).length !== 0);
}
function Pr(o = {}, r = {}) {
  const e = ke({}, o);
  return Object.keys(r).forEach((t) => {
    const n = t;
    M(r[n]) && n in o && M(o[n]) ? e[n] = Pr(o[n], r[n]) : e[n] = r[n];
  }), e;
}
function $e(...o) {
  return o.reduce((r, e, t) => t === 0 ? e : Pr(r, e), {});
}
function N(o, ...r) {
  return Uo(o) ? o(...r) : o;
}
function j(o, r = !0) {
  return typeof o == "string" && (r || o !== "");
}
function W(o) {
  return j(o) ? o.replace(/(-|_)/g, "").toLowerCase() : o;
}
function Yo(o, r = "", e = {}) {
  const t = W(r).split("."), n = t.shift();
  if (n) {
    if (M(o)) {
      const i = Object.keys(o).find((c) => W(c) === n) || "";
      return Yo(N(o[i], e), t.join("."), e);
    }
    return;
  }
  return N(o, e);
}
function Io(o, r = !0) {
  return Array.isArray(o) && (r || o.length !== 0);
}
function Ce(o) {
  return B(o) && !isNaN(o);
}
function H(o, r) {
  if (r) {
    const e = r.test(o);
    return r.lastIndex = 0, e;
  }
  return !1;
}
function we(...o) {
  return $e(...o);
}
function mo(o) {
  return o && o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function Se(o) {
  return j(o, !1) ? o[0].toUpperCase() + o.slice(1) : o;
}
function Or(o) {
  return j(o) ? o.replace(/(_)/g, "-").replace(/[A-Z]/g, (r, e) => e === 0 ? r : "-" + r.toLowerCase()).toLowerCase() : o;
}
function er(o) {
  return j(o) ? o.replace(/[A-Z]/g, (r, e) => e === 0 ? r : "." + r.toLowerCase()).toLowerCase() : o;
}
function Tr() {
  const o = /* @__PURE__ */ new Map();
  return {
    on(r, e) {
      let t = o.get(r);
      return t ? t.push(e) : t = [e], o.set(r, t), this;
    },
    off(r, e) {
      const t = o.get(r);
      return t && t.splice(t.indexOf(e) >>> 0, 1), this;
    },
    emit(r, e) {
      const t = o.get(r);
      t && t.forEach((n) => {
        n(e);
      });
    },
    clear() {
      o.clear();
    }
  };
}
function ho(...o) {
  if (o) {
    let r = [];
    for (let e = 0; e < o.length; e++) {
      const t = o[e];
      if (!t)
        continue;
      const n = typeof t;
      if (n === "string" || n === "number")
        r.push(t);
      else if (n === "object") {
        const i = Array.isArray(t) ? [ho(...t)] : Object.entries(t).map(([c, d]) => d ? c : void 0);
        r = i.length ? r.concat(i.filter((c) => !!c)) : r;
      }
    }
    return r.join(" ").trim();
  }
}
function xe(o, r) {
  return o ? o.classList ? o.classList.contains(r) : new RegExp("(^| )" + r + "( |$)", "gi").test(o.className) : !1;
}
function Be(o, r) {
  if (o && r) {
    const e = (t) => {
      xe(o, t) || (o.classList ? o.classList.add(t) : o.className += " " + t);
    };
    [r].flat().filter(Boolean).forEach((t) => t.split(" ").forEach(e));
  }
}
function Eo(o, r) {
  if (o && r) {
    const e = (t) => {
      o.classList ? o.classList.remove(t) : o.className = o.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [r].flat().filter(Boolean).forEach((t) => t.split(" ").forEach(e));
  }
}
function tr(o) {
  return o ? Math.abs(o.scrollLeft) : 0;
}
function _e(o, r) {
  if (o instanceof HTMLElement) {
    let e = o.offsetWidth;
    if (r) {
      const t = getComputedStyle(o);
      e += parseFloat(t.marginLeft) + parseFloat(t.marginRight);
    }
    return e;
  }
  return 0;
}
function Re(o) {
  if (o) {
    let r = o.parentNode;
    return r && r instanceof ShadowRoot && r.host && (r = r.host), r;
  }
  return null;
}
function Pe(o) {
  return !!(o !== null && typeof o < "u" && o.nodeName && Re(o));
}
function Po(o) {
  return typeof Element < "u" ? o instanceof Element : o !== null && typeof o == "object" && o.nodeType === 1 && typeof o.nodeName == "string";
}
function Do(o, r = {}) {
  if (Po(o)) {
    const e = (t, n) => {
      var i, c;
      const d = (i = o == null ? void 0 : o.$attrs) != null && i[t] ? [(c = o == null ? void 0 : o.$attrs) == null ? void 0 : c[t]] : [];
      return [n].flat().reduce((a, l) => {
        if (l != null) {
          const s = typeof l;
          if (s === "string" || s === "number")
            a.push(l);
          else if (s === "object") {
            const u = Array.isArray(l) ? e(t, l) : Object.entries(l).map(([f, g]) => t === "style" && (g || g === 0) ? `${f.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${g}` : g ? f : void 0);
            a = u.length ? a.concat(u.filter((f) => !!f)) : a;
          }
        }
        return a;
      }, d);
    };
    Object.entries(r).forEach(([t, n]) => {
      if (n != null) {
        const i = t.match(/^on(.+)/);
        i ? o.addEventListener(i[1].toLowerCase(), n) : t === "p-bind" || t === "pBind" ? Do(o, n) : (n = t === "class" ? [...new Set(e("class", n))].join(" ").trim() : t === "style" ? e("style", n).join(";").trim() : n, (o.$attrs = o.$attrs || {}) && (o.$attrs[t] = n), o.setAttribute(t, n));
      }
    });
  }
}
function Oe(o, r = {}, ...e) {
  if (o) {
    const t = document.createElement(o);
    return Do(t, r), t.append(...e), t;
  }
}
function Te(o, r) {
  return Po(o) ? o.matches(r) ? o : o.querySelector(r) : null;
}
function ze(o, r) {
  if (Po(o)) {
    const e = o.getAttribute(r);
    return isNaN(e) ? e === "true" || e === "false" ? e === "true" : e : +e;
  }
}
function nr(o) {
  if (o) {
    let r = o.offsetHeight;
    const e = getComputedStyle(o);
    return r -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom) + parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), r;
  }
  return 0;
}
function je(o) {
  if (o) {
    const r = o.getBoundingClientRect();
    return {
      top: r.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: r.left + (window.pageXOffset || tr(document.documentElement) || tr(document.body) || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function Le(o, r) {
  if (o) {
    let e = o.offsetHeight;
    if (r) {
      const t = getComputedStyle(o);
      e += parseFloat(t.marginTop) + parseFloat(t.marginBottom);
    }
    return e;
  }
  return 0;
}
function ar(o) {
  if (o) {
    let r = o.offsetWidth;
    const e = getComputedStyle(o);
    return r -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight) + parseFloat(e.borderLeftWidth) + parseFloat(e.borderRightWidth), r;
  }
  return 0;
}
function Ne() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function De(o, r = "", e) {
  Po(o) && e !== null && e !== void 0 && o.setAttribute(r, e);
}
var To = {};
function Ae(o = "pui_id_") {
  return Object.hasOwn(To, o) || (To[o] = 0), To[o]++, `${o}${To[o]}`;
}
var Ie = Object.defineProperty, Ee = Object.defineProperties, We = Object.getOwnPropertyDescriptors, Ao = Object.getOwnPropertySymbols, zr = Object.prototype.hasOwnProperty, jr = Object.prototype.propertyIsEnumerable, ir = (o, r, e) => r in o ? Ie(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, A = (o, r) => {
  for (var e in r || (r = {}))
    zr.call(r, e) && ir(o, e, r[e]);
  if (Ao)
    for (var e of Ao(r))
      jr.call(r, e) && ir(o, e, r[e]);
  return o;
}, Wo = (o, r) => Ee(o, We(r)), F = (o, r) => {
  var e = {};
  for (var t in o)
    zr.call(o, t) && r.indexOf(t) < 0 && (e[t] = o[t]);
  if (o != null && Ao)
    for (var t of Ao(o))
      r.indexOf(t) < 0 && jr.call(o, t) && (e[t] = o[t]);
  return e;
}, Me = Tr(), P = Me;
function dr(o, r) {
  Io(o) ? o.push(...r || []) : M(o) && Object.assign(o, r);
}
function Ve(o) {
  return M(o) && o.hasOwnProperty("$value") && o.hasOwnProperty("$type") ? o.$value : o;
}
function Fe(o) {
  return o.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Vo(o = "", r = "") {
  return Fe(`${j(o, !1) && j(r, !1) ? `${o}-` : o}${r}`);
}
function Lr(o = "", r = "") {
  return `--${Vo(o, r)}`;
}
function He(o = "") {
  const r = (o.match(/{/g) || []).length, e = (o.match(/}/g) || []).length;
  return (r + e) % 2 !== 0;
}
function Nr(o, r = "", e = "", t = [], n) {
  if (j(o)) {
    const i = /{([^}]*)}/g, c = o.trim();
    if (He(c))
      return;
    if (H(c, i)) {
      const d = c.replaceAll(i, (s) => {
        const f = s.replace(/{|}/g, "").split(".").filter((g) => !t.some((p) => H(g, p)));
        return `var(${Lr(e, Or(f.join("-")))}${B(n) ? `, ${n}` : ""})`;
      }), a = /(\d+\s+[\+\-\*\/]\s+\d+)/g, l = /var\([^)]+\)/g;
      return H(d.replace(l, "0"), a) ? `calc(${d})` : d;
    }
    return c;
  } else if (Ce(o))
    return o;
}
function Ue(o, r, e) {
  j(r, !1) && o.push(`${r}:${e};`);
}
function so(o, r) {
  return o ? `${o}{${r}}` : "";
}
var vo = (...o) => Ye(x.getTheme(), ...o), Ye = (o = {}, r, e, t) => {
  if (r) {
    const { variable: n, options: i } = x.defaults || {}, { prefix: c, transform: d } = (o == null ? void 0 : o.options) || i || {}, l = H(r, /{([^}]*)}/g) ? r : `{${r}}`;
    return t === "value" || no(t) && d === "strict" ? x.getTokenValue(r) : Nr(l, void 0, c, [n.excludedKeyRegex], e);
  }
  return "";
};
function Ke(o, r = {}) {
  const e = x.defaults.variable, { prefix: t = e.prefix, selector: n = e.selector, excludedKeyRegex: i = e.excludedKeyRegex } = r, c = (l, s = "") => Object.entries(l).reduce(
    (u, [f, g]) => {
      const p = H(f, i) ? Vo(s) : Vo(s, Or(f)), h = Ve(g);
      if (M(h)) {
        const { variables: m, tokens: y } = c(h, p);
        dr(u.tokens, y), dr(u.variables, m);
      } else
        u.tokens.push((t ? p.replace(`${t}-`, "") : p).replaceAll("-", ".")), Ue(u.variables, Lr(p), Nr(h, p, t, [i]));
      return u;
    },
    { variables: [], tokens: [] }
  ), { variables: d, tokens: a } = c(o, t);
  return {
    value: d,
    tokens: a,
    declarations: d.join(""),
    css: so(n, d.join(""))
  };
}
var D = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(o) {
          return { type: "class", selector: o, matched: this.pattern.test(o.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(o) {
          return { type: "attr", selector: `:root${o}`, matched: this.pattern.test(o.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(o) {
          return { type: "media", selector: `${o}{:root{[CSS]}}`, matched: this.pattern.test(o.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(o) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(o.trim()) };
        }
      },
      custom: {
        resolve(o) {
          return { type: "custom", selector: o, matched: !0 };
        }
      }
    },
    resolve(o) {
      const r = Object.keys(this.rules).filter((e) => e !== "custom").map((e) => this.rules[e]);
      return [o].flat().map((e) => {
        var t;
        return (t = r.map((n) => n.resolve(e)).find((n) => n.matched)) != null ? t : this.rules.custom.resolve(e);
      });
    }
  },
  _toVariables(o, r) {
    return Ke(o, { prefix: r == null ? void 0 : r.prefix });
  },
  getCommon({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
    var i, c, d, a, l, s, u;
    const { preset: f, options: g } = r;
    let p, h, m, y, w, S, b;
    if (B(f) && g.transform !== "strict") {
      const { primitive: k, semantic: R, extend: L } = f, U = R || {}, { colorScheme: Y } = U, J = F(U, ["colorScheme"]), K = L || {}, { colorScheme: Z } = K, oo = F(K, ["colorScheme"]), X = Y || {}, { dark: ro } = X, ao = F(X, ["dark"]), eo = Z || {}, { dark: io } = eo, lo = F(eo, ["dark"]), V = B(k) ? this._toVariables({ primitive: k }, g) : {}, I = B(J) ? this._toVariables({ semantic: J }, g) : {}, to = B(ao) ? this._toVariables({ light: ao }, g) : {}, Oo = B(ro) ? this._toVariables({ dark: ro }, g) : {}, co = B(oo) ? this._toVariables({ semantic: oo }, g) : {}, Xo = B(lo) ? this._toVariables({ light: lo }, g) : {}, Go = B(io) ? this._toVariables({ dark: io }, g) : {}, [Vr, Fr] = [(i = V.declarations) != null ? i : "", V.tokens], [Hr, Ur] = [(c = I.declarations) != null ? c : "", I.tokens || []], [Yr, Kr] = [(d = to.declarations) != null ? d : "", to.tokens || []], [Xr, Gr] = [(a = Oo.declarations) != null ? a : "", Oo.tokens || []], [qr, Qr] = [(l = co.declarations) != null ? l : "", co.tokens || []], [Jr, Zr] = [(s = Xo.declarations) != null ? s : "", Xo.tokens || []], [oe, re] = [(u = Go.declarations) != null ? u : "", Go.tokens || []];
      p = this.transformCSS(o, Vr, "light", "variable", g, t, n), h = Fr;
      const ee = this.transformCSS(o, `${Hr}${Yr}`, "light", "variable", g, t, n), te = this.transformCSS(o, `${Xr}`, "dark", "variable", g, t, n);
      m = `${ee}${te}`, y = [.../* @__PURE__ */ new Set([...Ur, ...Kr, ...Gr])];
      const ne = this.transformCSS(o, `${qr}${Jr}color-scheme:light`, "light", "variable", g, t, n), ae = this.transformCSS(o, `${oe}color-scheme:dark`, "dark", "variable", g, t, n);
      w = `${ne}${ae}`, S = [.../* @__PURE__ */ new Set([...Qr, ...Zr, ...re])], b = N(f.css, { dt: vo });
    }
    return {
      primitive: {
        css: p,
        tokens: h
      },
      semantic: {
        css: m,
        tokens: y
      },
      global: {
        css: w,
        tokens: S
      },
      style: b
    };
  },
  getPreset({ name: o = "", preset: r = {}, options: e, params: t, set: n, defaults: i, selector: c }) {
    var d, a, l;
    let s, u, f;
    if (B(r) && e.transform !== "strict") {
      const g = o.replace("-directive", ""), p = r, { colorScheme: h, extend: m, css: y } = p, w = F(p, ["colorScheme", "extend", "css"]), S = m || {}, { colorScheme: b } = S, k = F(S, ["colorScheme"]), R = h || {}, { dark: L } = R, U = F(R, ["dark"]), Y = b || {}, { dark: J } = Y, K = F(Y, ["dark"]), Z = B(w) ? this._toVariables({ [g]: A(A({}, w), k) }, e) : {}, oo = B(U) ? this._toVariables({ [g]: A(A({}, U), K) }, e) : {}, X = B(L) ? this._toVariables({ [g]: A(A({}, L), J) }, e) : {}, [ro, ao] = [(d = Z.declarations) != null ? d : "", Z.tokens || []], [eo, io] = [(a = oo.declarations) != null ? a : "", oo.tokens || []], [lo, V] = [(l = X.declarations) != null ? l : "", X.tokens || []], I = this.transformCSS(g, `${ro}${eo}`, "light", "variable", e, n, i, c), to = this.transformCSS(g, lo, "dark", "variable", e, n, i, c);
      s = `${I}${to}`, u = [.../* @__PURE__ */ new Set([...ao, ...io, ...V])], f = N(y, { dt: vo });
    }
    return {
      css: s,
      tokens: u,
      style: f
    };
  },
  getPresetC({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
    var i;
    const { preset: c, options: d } = r, a = (i = c == null ? void 0 : c.components) == null ? void 0 : i[o];
    return this.getPreset({ name: o, preset: a, options: d, params: e, set: t, defaults: n });
  },
  // @deprecated - use getPresetC instead
  getPresetD({ name: o = "", theme: r = {}, params: e, set: t, defaults: n }) {
    var i, c;
    const d = o.replace("-directive", ""), { preset: a, options: l } = r, s = ((i = a == null ? void 0 : a.components) == null ? void 0 : i[d]) || ((c = a == null ? void 0 : a.directives) == null ? void 0 : c[d]);
    return this.getPreset({ name: d, preset: s, options: l, params: e, set: t, defaults: n });
  },
  applyDarkColorScheme(o) {
    return !(o.darkModeSelector === "none" || o.darkModeSelector === !1);
  },
  getColorSchemeOption(o, r) {
    var e;
    return this.applyDarkColorScheme(o) ? this.regex.resolve(o.darkModeSelector === !0 ? r.options.darkModeSelector : (e = o.darkModeSelector) != null ? e : r.options.darkModeSelector) : [];
  },
  getLayerOrder(o, r = {}, e, t) {
    const { cssLayer: n } = r;
    return n ? `@layer ${N(n.order || "primeui", e)}` : "";
  },
  getCommonStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: n, defaults: i }) {
    const c = this.getCommon({ name: o, theme: r, params: e, set: n, defaults: i }), d = Object.entries(t).reduce((a, [l, s]) => a.push(`${l}="${s}"`) && a, []).join(" ");
    return Object.entries(c || {}).reduce((a, [l, s]) => {
      if (s != null && s.css) {
        const u = mo(s == null ? void 0 : s.css), f = `${l}-variables`;
        a.push(`<style type="text/css" data-primevue-style-id="${f}" ${d}>${u}</style>`);
      }
      return a;
    }, []).join("");
  },
  getStyleSheet({ name: o = "", theme: r = {}, params: e, props: t = {}, set: n, defaults: i }) {
    var c;
    const d = { name: o, theme: r, params: e, set: n, defaults: i }, a = (c = o.includes("-directive") ? this.getPresetD(d) : this.getPresetC(d)) == null ? void 0 : c.css, l = Object.entries(t).reduce((s, [u, f]) => s.push(`${u}="${f}"`) && s, []).join(" ");
    return a ? `<style type="text/css" data-primevue-style-id="${o}-variables" ${l}>${mo(a)}</style>` : "";
  },
  createTokens(o = {}, r, e = "", t = "", n = {}) {
    return Object.entries(o).forEach(([i, c]) => {
      const d = H(i, r.variable.excludedKeyRegex) ? e : e ? `${e}.${er(i)}` : er(i), a = t ? `${t}.${i}` : i;
      M(c) ? this.createTokens(c, r, d, a, n) : (n[d] || (n[d] = {
        paths: [],
        computed(l, s = {}) {
          var u, f;
          return this.paths.length === 1 ? (u = this.paths[0]) == null ? void 0 : u.computed(this.paths[0].scheme, s.binding) : l && l !== "none" ? (f = this.paths.find((g) => g.scheme === l)) == null ? void 0 : f.computed(l, s.binding) : this.paths.map((g) => g.computed(g.scheme, s[g.scheme]));
        }
      }), n[d].paths.push({
        path: a,
        value: c,
        scheme: a.includes("colorScheme.light") ? "light" : a.includes("colorScheme.dark") ? "dark" : "none",
        computed(l, s = {}) {
          const u = /{([^}]*)}/g;
          let f = c;
          if (s.name = this.path, s.binding || (s.binding = {}), H(c, u)) {
            const p = c.trim().replaceAll(u, (y) => {
              var w;
              const S = y.replace(/{|}/g, ""), b = (w = n[S]) == null ? void 0 : w.computed(l, s);
              return Io(b) && b.length === 2 ? `light-dark(${b[0].value},${b[1].value})` : b == null ? void 0 : b.value;
            }), h = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, m = /var\([^)]+\)/g;
            f = H(p.replace(m, "0"), h) ? `calc(${p})` : p;
          }
          return no(s.binding) && delete s.binding, {
            colorScheme: l,
            path: this.path,
            paths: s,
            value: f.includes("undefined") ? void 0 : f
          };
        }
      }));
    }), n;
  },
  getTokenValue(o, r, e) {
    var t;
    const i = ((a) => a.split(".").filter((s) => !H(s.toLowerCase(), e.variable.excludedKeyRegex)).join("."))(r), c = r.includes("colorScheme.light") ? "light" : r.includes("colorScheme.dark") ? "dark" : void 0, d = [(t = o[i]) == null ? void 0 : t.computed(c)].flat().filter((a) => a);
    return d.length === 1 ? d[0].value : d.reduce((a = {}, l) => {
      const s = l, { colorScheme: u } = s, f = F(s, ["colorScheme"]);
      return a[u] = f, a;
    }, void 0);
  },
  getSelectorRule(o, r, e, t) {
    return e === "class" || e === "attr" ? so(B(r) ? `${o}${r},${o} ${r}` : o, t) : so(o, B(r) ? so(r, t) : t);
  },
  transformCSS(o, r, e, t, n = {}, i, c, d) {
    if (B(r)) {
      const { cssLayer: a } = n;
      if (t !== "style") {
        const l = this.getColorSchemeOption(n, c);
        r = e === "dark" ? l.reduce((s, { type: u, selector: f }) => (B(f) && (s += f.includes("[CSS]") ? f.replace("[CSS]", r) : this.getSelectorRule(f, d, u, r)), s), "") : so(d ?? ":root", r);
      }
      if (a) {
        const l = {
          name: "primeui",
          order: "primeui"
        };
        M(a) && (l.name = N(a.name, { name: o, type: t })), B(l.name) && (r = so(`@layer ${l.name}`, r), i == null || i.layerNames(l.name));
      }
      return r;
    }
    return "";
  }
}, x = {
  defaults: {
    variable: {
      prefix: "p",
      selector: ":root",
      excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi
    },
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: !1
    }
  },
  _theme: void 0,
  _layerNames: /* @__PURE__ */ new Set(),
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  _loadingStyles: /* @__PURE__ */ new Set(),
  _tokens: {},
  update(o = {}) {
    const { theme: r } = o;
    r && (this._theme = Wo(A({}, r), {
      options: A(A({}, this.defaults.options), r.options)
    }), this._tokens = D.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var o;
    return ((o = this.theme) == null ? void 0 : o.preset) || {};
  },
  get options() {
    var o;
    return ((o = this.theme) == null ? void 0 : o.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(o) {
    this.update({ theme: o }), P.emit("theme:change", o);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(o) {
    this._theme = Wo(A({}, this.theme), { preset: o }), this._tokens = D.createTokens(o, this.defaults), this.clearLoadedStyleNames(), P.emit("preset:change", o), P.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(o) {
    this._theme = Wo(A({}, this.theme), { options: o }), this.clearLoadedStyleNames(), P.emit("options:change", o), P.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(o) {
    this._layerNames.add(o);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(o) {
    return this._loadedStyleNames.has(o);
  },
  setLoadedStyleName(o) {
    this._loadedStyleNames.add(o);
  },
  deleteLoadedStyleName(o) {
    this._loadedStyleNames.delete(o);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(o) {
    return D.getTokenValue(this.tokens, o, this.defaults);
  },
  getCommon(o = "", r) {
    return D.getCommon({ name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(o = "", r) {
    const e = { name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return D.getPresetC(e);
  },
  // @deprecated - use getComponent instead
  getDirective(o = "", r) {
    const e = { name: o, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return D.getPresetD(e);
  },
  getCustomPreset(o = "", r, e, t) {
    const n = { name: o, preset: r, options: this.options, selector: e, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return D.getPreset(n);
  },
  getLayerOrderCSS(o = "") {
    return D.getLayerOrder(o, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(o = "", r, e = "style", t) {
    return D.transformCSS(o, r, t, e, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(o = "", r, e = {}) {
    return D.getCommonStyleSheet({ name: o, theme: this.theme, params: r, props: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(o, r, e = {}) {
    return D.getStyleSheet({ name: o, theme: this.theme, params: r, props: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(o) {
    this._loadingStyles.add(o);
  },
  onStyleUpdated(o) {
    this._loadingStyles.add(o);
  },
  onStyleLoaded(o, { name: r }) {
    this._loadingStyles.size && (this._loadingStyles.delete(r), P.emit(`theme:${r}:load`, o), !this._loadingStyles.size && P.emit("theme:load"));
  }
}, O = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
}, Xe = ({ dt: o }) => `
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${o("disabled.opacity")};
}

.pi {
    font-size: ${o("icon.size")};
}

.p-icon {
    width: ${o("icon.size")};
    height: ${o("icon.size")};
}

.p-overlay-mask {
    background: ${o("mask.background")};
    color: ${o("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${o("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${o("mask.transition.duration")} forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${o("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${o("mask.background")};
    }
    to {
        background: transparent;
    }
}
`;
function yo(o) {
  "@babel/helpers - typeof";
  return yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, yo(o);
}
function lr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function cr(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? lr(Object(e), !0).forEach(function(t) {
      Ge(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : lr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function Ge(o, r, e) {
  return (r = qe(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function qe(o) {
  var r = Qe(o, "string");
  return yo(r) == "symbol" ? r : r + "";
}
function Qe(o, r) {
  if (yo(o) != "object" || !o)
    return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (yo(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
function Je(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  qo() && qo().components ? de(o) : r ? o() : le(o);
}
var Ze = 0;
function ot(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = jo(!1), t = jo(o), n = jo(null), i = Ne() ? window.document : void 0, c = r.document, d = c === void 0 ? i : c, a = r.immediate, l = a === void 0 ? !0 : a, s = r.manual, u = s === void 0 ? !1 : s, f = r.name, g = f === void 0 ? "style_".concat(++Ze) : f, p = r.id, h = p === void 0 ? void 0 : p, m = r.media, y = m === void 0 ? void 0 : m, w = r.nonce, S = w === void 0 ? void 0 : w, b = r.first, k = b === void 0 ? !1 : b, R = r.onMounted, L = R === void 0 ? void 0 : R, U = r.onUpdated, Y = U === void 0 ? void 0 : U, J = r.onLoad, K = J === void 0 ? void 0 : J, Z = r.props, oo = Z === void 0 ? {} : Z, X = function() {
  }, ro = function(io) {
    var lo = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (d) {
      var V = cr(cr({}, oo), lo), I = V.name || g, to = V.id || h, Oo = V.nonce || S;
      n.value = d.querySelector('style[data-primevue-style-id="'.concat(I, '"]')) || d.getElementById(to) || d.createElement("style"), n.value.isConnected || (t.value = io || o, Do(n.value, {
        type: "text/css",
        id: to,
        media: y,
        nonce: Oo
      }), k ? d.head.prepend(n.value) : d.head.appendChild(n.value), De(n.value, "data-primevue-style-id", I), Do(n.value, V), n.value.onload = function(co) {
        return K == null ? void 0 : K(co, {
          name: I
        });
      }, L == null || L(I)), !e.value && (X = go(t, function(co) {
        n.value.textContent = co, Y == null || Y(I);
      }, {
        immediate: !0
      }), e.value = !0);
    }
  }, ao = function() {
    !d || !e.value || (X(), Pe(n.value) && d.head.removeChild(n.value), e.value = !1, n.value = null);
  };
  return l && !u && Je(ro), {
    id: h,
    name: g,
    el: n,
    css: t,
    unload: ao,
    load: ro,
    isLoaded: ie(e)
  };
}
function ko(o) {
  "@babel/helpers - typeof";
  return ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ko(o);
}
function sr(o, r) {
  return nt(o) || tt(o, r) || et(o, r) || rt();
}
function rt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function et(o, r) {
  if (o) {
    if (typeof o == "string")
      return ur(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? ur(o, r) : void 0;
  }
}
function ur(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++)
    t[e] = o[e];
  return t;
}
function tt(o, r) {
  var e = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (e != null) {
    var t, n, i, c, d = [], a = !0, l = !1;
    try {
      if (i = (e = e.call(o)).next, r !== 0)
        for (; !(a = (t = i.call(e)).done) && (d.push(t.value), d.length !== r); a = !0)
          ;
    } catch (s) {
      l = !0, n = s;
    } finally {
      try {
        if (!a && e.return != null && (c = e.return(), Object(c) !== c))
          return;
      } finally {
        if (l)
          throw n;
      }
    }
    return d;
  }
}
function nt(o) {
  if (Array.isArray(o))
    return o;
}
function fr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Mo(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? fr(Object(e), !0).forEach(function(t) {
      at(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : fr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function at(o, r, e) {
  return (r = it(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function it(o) {
  var r = dt(o, "string");
  return ko(r) == "symbol" ? r : r + "";
}
function dt(o, r) {
  if (ko(o) != "object" || !o)
    return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (ko(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var lt = function(r) {
  var e = r.dt;
  return `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(e("scrollbar.width"), `;
}
`);
}, ct = {}, st = {}, _ = {
  name: "base",
  css: lt,
  style: Xe,
  classes: ct,
  inlineStyles: st,
  load: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, n = t(N(r, {
      dt: vo
    }));
    return B(n) ? ot(mo(n), Mo({
      name: this.name
    }, e)) : {};
  },
  loadCSS: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, r);
  },
  loadStyle: function() {
    var r = this, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, e, function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return x.transformCSS(e.name || r.name, "".concat(n).concat(t));
    });
  },
  getCommonTheme: function(r) {
    return x.getCommon(this.name, r);
  },
  getComponentTheme: function(r) {
    return x.getComponent(this.name, r);
  },
  getDirectiveTheme: function(r) {
    return x.getDirective(this.name, r);
  },
  getPresetTheme: function(r, e, t) {
    return x.getCustomPreset(this.name, r, e, t);
  },
  getLayerOrderThemeCSS: function() {
    return x.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var t = N(this.css, {
        dt: vo
      }) || "", n = mo("".concat(t).concat(r)), i = Object.entries(e).reduce(function(c, d) {
        var a = sr(d, 2), l = a[0], s = a[1];
        return c.push("".concat(l, '="').concat(s, '"')) && c;
      }, []).join(" ");
      return B(n) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(i, ">").concat(n, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return x.getCommonStyleSheet(this.name, r, e);
  },
  getThemeStyleSheet: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [x.getStyleSheet(this.name, r, e)];
    if (this.style) {
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = N(this.style, {
        dt: vo
      }), c = mo(x.transformCSS(n, i)), d = Object.entries(e).reduce(function(a, l) {
        var s = sr(l, 2), u = s[0], f = s[1];
        return a.push("".concat(u, '="').concat(f, '"')) && a;
      }, []).join(" ");
      B(c) && t.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(d, ">").concat(c, "</style>"));
    }
    return t.join("");
  },
  extend: function(r) {
    return Mo(Mo({}, this), {}, {
      css: void 0,
      style: void 0
    }, r);
  }
}, Q = Tr();
function $o(o) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, $o(o);
}
function gr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function zo(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? gr(Object(e), !0).forEach(function(t) {
      ut(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : gr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function ut(o, r, e) {
  return (r = ft(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function ft(o) {
  var r = gt(o, "string");
  return $o(r) == "symbol" ? r : r + "";
}
function gt(o, r) {
  if ($o(o) != "object" || !o)
    return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if ($o(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var bt = {
  ripple: !1,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: !1,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [O.STARTS_WITH, O.CONTAINS, O.NOT_CONTAINS, O.ENDS_WITH, O.EQUALS, O.NOT_EQUALS],
    numeric: [O.EQUALS, O.NOT_EQUALS, O.LESS_THAN, O.LESS_THAN_OR_EQUAL_TO, O.GREATER_THAN, O.GREATER_THAN_OR_EQUAL_TO],
    date: [O.DATE_IS, O.DATE_IS_NOT, O.DATE_BEFORE, O.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: !1,
  pt: void 0,
  ptOptions: {
    mergeSections: !0,
    mergeProps: !1
  },
  csp: {
    nonce: void 0
  }
}, pt = Symbol();
function mt(o, r) {
  var e = {
    config: ce(r)
  };
  return o.config.globalProperties.$primevue = e, o.provide(pt, e), ht(), vt(o, e), e;
}
var uo = [];
function ht() {
  P.clear(), uo.forEach(function(o) {
    return o == null ? void 0 : o();
  }), uo = [];
}
function vt(o, r) {
  var e = jo(!1), t = function() {
    var l;
    if (((l = r.config) === null || l === void 0 ? void 0 : l.theme) !== "none" && !x.isStyleNameLoaded("common")) {
      var s, u, f = ((s = _.getCommonTheme) === null || s === void 0 ? void 0 : s.call(_)) || {}, g = f.primitive, p = f.semantic, h = f.global, m = f.style, y = {
        nonce: (u = r.config) === null || u === void 0 || (u = u.csp) === null || u === void 0 ? void 0 : u.nonce
      };
      _.load(g == null ? void 0 : g.css, zo({
        name: "primitive-variables"
      }, y)), _.load(p == null ? void 0 : p.css, zo({
        name: "semantic-variables"
      }, y)), _.load(h == null ? void 0 : h.css, zo({
        name: "global-variables"
      }, y)), _.loadStyle(zo({
        name: "global-style"
      }, y), m), x.setLoadedStyleName("common");
    }
  };
  P.on("theme:change", function(a) {
    e.value || (o.config.globalProperties.$primevue.config.theme = a, e.value = !0);
  });
  var n = go(r.config, function(a, l) {
    Q.emit("config:change", {
      newValue: a,
      oldValue: l
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = go(function() {
    return r.config.ripple;
  }, function(a, l) {
    Q.emit("config:ripple:change", {
      newValue: a,
      oldValue: l
    });
  }, {
    immediate: !0,
    deep: !0
  }), c = go(function() {
    return r.config.theme;
  }, function(a, l) {
    e.value || x.setTheme(a), r.config.unstyled || t(), e.value = !1, Q.emit("config:theme:change", {
      newValue: a,
      oldValue: l
    });
  }, {
    immediate: !0,
    deep: !1
  }), d = go(function() {
    return r.config.unstyled;
  }, function(a, l) {
    !a && r.config.theme && t(), Q.emit("config:unstyled:change", {
      newValue: a,
      oldValue: l
    });
  }, {
    immediate: !0,
    deep: !0
  });
  uo.push(n), uo.push(i), uo.push(c), uo.push(d);
}
var yt = {
  install: function(r, e) {
    var t = we(bt, e);
    mt(r, t);
  }
}, kt = { transitionDuration: "{transition.duration}" }, $t = { borderWidth: "0", borderColor: "{content.border.color}" }, Ct = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", padding: "1.125rem", fontWeight: "700", borderRadius: "0", borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "1px" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, wt = { borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "1.125rem" }, St = { light: { header: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.50}", activeHoverBackground: "{surface.100}" } }, dark: { header: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.800}", activeHoverBackground: "{surface.700}" } } }, xt = { root: kt, panel: $t, header: Ct, content: wt, colorScheme: St }, Bt = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, _t = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Rt = { padding: "{list.padding}", gap: "{list.gap}" }, Pt = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Ot = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Tt = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, zt = { borderRadius: "{border.radius.sm}" }, jt = { padding: "{list.option.padding}" }, Lt = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, Nt = { root: Bt, overlay: _t, list: Rt, option: Pt, optionGroup: Ot, dropdown: Tt, chip: zt, emptyMessage: jt, colorScheme: Lt }, Dt = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, At = { size: "1rem" }, It = { borderColor: "{content.background}", offset: "-0.75rem" }, Et = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, Wt = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, Mt = { root: Dt, icon: At, group: It, lg: Et, xl: Wt }, Vt = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, Ft = { size: "0.5rem" }, Ht = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, Ut = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, Yt = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, Kt = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, Xt = { root: Vt, dot: Ft, sm: Ht, lg: Ut, xl: Yt, colorScheme: Kt }, Gt = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, qt = { transitionDuration: "0.2s", focusRing: { width: "0", style: "none", color: "transparent", offset: "0" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.625rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.5rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.75rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.5rem 0", gap: "0", header: { padding: "0.625rem 1rem 0 1rem" }, option: { padding: "0.625rem 1rem", borderRadius: "0" }, optionGroup: { padding: "0.625rem 1rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.15s" }, navigation: { list: { padding: "0.5rem 0", gap: "0" }, item: { padding: "0.625rem 1rem", borderRadius: "0", gap: "0.5rem" }, submenuLabel: { padding: "0.625rem 1rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "1rem", shadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.5rem", shadow: "0 1px 3px rgba(0, 0, 0, 0.3)" }, navigation: { shadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, focusRing: { shadow: "0 0 0 0.2rem {primary.200}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.0}", borderColor: "{surface.300}", hoverBorderColor: "{primary.color}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.500}", shadow: "none" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, focusRing: { shadow: "0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.950}", borderColor: "{surface.600}", hoverBorderColor: "{primary.color}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "none" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, Qt = { primitive: Gt, semantic: qt }, Jt = { borderRadius: "{content.border.radius}" }, Zt = { root: Jt }, on = { padding: "1.25rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, rn = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, en = { color: "{navigation.item.icon.color}" }, tn = { root: on, item: rn, separator: en }, nn = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "1rem", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.75rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3.25rem" }, label: { fontWeight: "600" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", offset: "{form.field.focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, an = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {primary.200}" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {surface.200}" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {sky.200}" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {green.200}" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {orange.200}" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {purple.200}" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {red.200}" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {surface.400}" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {sky.400}, transparent 80%)" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.400}, transparent 80%)" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {orange.400}, transparent 80%)" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {purple.400}, transparent 80%)" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.400}, transparent 80%)" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.0}, transparent 80%)" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {help.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {help.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {danger.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {danger.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, dn = { root: nn, colorScheme: an }, ln = { background: "{content.background}", borderRadius: "{border.radius.lg}", color: "{content.color}", shadow: "0 .125rem .25rem rgba(0,0,0,.075)" }, cn = { padding: "1.5rem", gap: "0.75rem" }, sn = { gap: "0.5rem" }, un = { fontSize: "1.25rem", fontWeight: "700" }, fn = { color: "{text.muted.color}" }, gn = { root: ln, body: cn, caption: sn, title: un, subtitle: fn }, bn = { transitionDuration: "{transition.duration}" }, pn = { gap: "0.25rem" }, mn = { padding: "1rem", gap: "0.5rem" }, hn = { width: "1rem", height: "1rem", borderRadius: "50", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, vn = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, yn = { root: bn, content: pn, indicatorList: mn, indicator: hn, colorScheme: vn }, kn = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, $n = { width: "2.5rem", color: "{form.field.icon.color}" }, Cn = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, wn = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1.25rem" }, Sn = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, xn = { color: "{form.field.icon.color}" }, Bn = { root: kn, dropdown: $n, overlay: Cn, list: wn, option: Sn, clearIcon: xn }, _n = { borderRadius: "{border.radius.sm}", width: "1.5rem", height: "1.5rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1.25rem", height: "1.25rem" }, lg: { width: "1.75rem", height: "1.75rem" } }, Rn = { size: "1rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1.25rem" } }, Pn = { root: _n, icon: Rn }, On = { borderRadius: "16px", paddingX: "0.875rem", paddingY: "0.625rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, Tn = { width: "2rem", height: "2rem" }, zn = { size: "1rem" }, jn = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ln = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, Nn = { root: On, image: Tn, icon: zn, removeIcon: jn, colorScheme: Ln }, Dn = { transitionDuration: "{transition.duration}" }, An = { width: "1.75rem", height: "1.75rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, In = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, En = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, Wn = { root: Dn, preview: An, panel: In, colorScheme: En }, Mn = { size: "2rem", color: "{overlay.modal.color}" }, Vn = { gap: "1rem" }, Fn = { icon: Mn, content: Vn }, Hn = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Un = { padding: "{overlay.popover.padding}", gap: "1rem" }, Yn = { size: "1.5rem", color: "{overlay.popover.color}" }, Kn = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, Xn = { root: Hn, content: Un, icon: Yn, footer: Kn }, Gn = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, qn = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Qn = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Jn = { mobileIndent: "1.25rem" }, Zn = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, oa = { borderColor: "{content.border.color}" }, ra = { root: Gn, list: qn, item: Qn, submenu: Jn, submenuIcon: Zn, separator: oa }, ea = { transitionDuration: "{transition.duration}" }, ta = { borderColor: "{datatable.border.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, na = { selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, aa = { fontWeight: "700" }, ia = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, da = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, la = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ca = { fontWeight: "700" }, sa = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ua = { color: "{primary.color}" }, fa = { width: "0.5rem" }, ga = { width: "1px", color: "{primary.color}" }, ba = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, pa = { size: "2rem" }, ma = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ha = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, va = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, ya = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, ka = { light: { root: { borderColor: "{content.border.color}" }, header: { background: "{surface.50}", color: "{text.color}" }, headerCell: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}" }, footer: { background: "{surface.50}", color: "{text.color}" }, footerCell: { background: "{surface.50}", color: "{text.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, header: { background: "{surface.800}", color: "{text.color}" }, headerCell: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}" }, footer: { background: "{surface.800}", color: "{text.color}" }, footerCell: { background: "{surface.800}", color: "{text.color}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, $a = { root: ea, header: ta, headerCell: na, columnTitle: aa, row: ia, bodyCell: da, footerCell: la, columnFooter: ca, footer: sa, dropPoint: ua, columnResizer: fa, resizeIndicator: ga, sortIcon: ba, loadingIcon: pa, rowToggleButton: ma, filter: ha, paginatorTop: va, paginatorBottom: ya, colorScheme: ka }, Ca = { borderColor: "{content.border.color}", borderWidth: "1px", borderRadius: "4px", padding: "0" }, wa = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.875rem 1.125rem", borderRadius: "5px 5px 0 0" }, Sa = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "5px" }, xa = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.875rem 1.125rem", borderRadius: "0 0 5px 5px" }, Ba = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, _a = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, Ra = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } }, Pa = { root: Ca, header: wa, content: Sa, footer: xa, paginatorTop: Ba, paginatorBottom: _a, colorScheme: Ra }, Oa = { transitionDuration: "{transition.duration}" }, Ta = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, za = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.75rem 0" }, ja = { gap: "0.5rem", fontWeight: "700" }, La = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Na = { color: "{form.field.icon.color}" }, Da = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}" }, Aa = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}" }, Ia = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, Ea = { margin: "0.75rem 0 0 0" }, Wa = { padding: "0.375rem", fontWeight: "700", color: "{content.color}" }, Ma = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", padding: "0.375rem", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Va = { margin: "0.75rem 0 0 0" }, Fa = { padding: "0.5rem", borderRadius: "{content.border.radius}" }, Ha = { margin: "0.75rem 0 0 0" }, Ua = { padding: "0.5rem", borderRadius: "{content.border.radius}" }, Ya = { padding: "0.75rem 0 0 0", borderColor: "{content.border.color}" }, Ka = { padding: "0.75rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, Xa = { light: { dropdown: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, Ga = { root: Oa, panel: Ta, header: za, title: ja, dropdown: La, inputIcon: Na, selectMonth: Da, selectYear: Aa, group: Ia, dayView: Ea, weekDay: Wa, date: Ma, monthView: Va, month: Fa, yearView: Ha, year: Ua, buttonbar: Ya, timePicker: Ka, colorScheme: Xa }, qa = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, Qa = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, Ja = { fontSize: "1.25rem", fontWeight: "600" }, Za = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, oi = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, ri = { root: qa, header: Qa, title: Ja, content: Za, footer: oi }, ei = { borderColor: "{content.border.color}" }, ti = { background: "{content.background}", color: "{text.color}" }, ni = { margin: "1.125rem 0", padding: "0 1.125rem", content: { padding: "0 0.625rem" } }, ai = { margin: "0 1.125rem", padding: "1.125rem 0", content: { padding: "0.625rem 0" } }, ii = { root: ei, content: ti, horizontal: ni, vertical: ai }, di = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.lg}" }, li = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ci = { root: di, item: li }, si = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, ui = { padding: "{overlay.modal.padding}" }, fi = { fontSize: "1.5rem", fontWeight: "600" }, gi = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, bi = { padding: "{overlay.modal.padding}" }, pi = { root: si, header: ui, title: fi, content: gi, footer: bi }, mi = { borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, hi = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, vi = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, yi = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, ki = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, $i = { light: { toolbar: { background: "{surface.50}" } }, dark: { toolbar: { background: "{surface.800}" } } }, Ci = { toolbar: mi, toolbarItem: hi, overlay: vi, overlayOption: yi, content: ki, colorScheme: $i }, wi = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0.75rem 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, Si = { borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "{content.border.color}", padding: "0.625rem 0.875rem", gap: "0.5rem", fontWeight: "700", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, xi = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, Bi = { padding: "0" }, _i = { light: { legend: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}", hoverColor: "{text.hover.color}" } }, dark: { legend: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" } } }, Ri = { root: wi, legend: Si, toggleIcon: xi, content: Bi, colorScheme: _i }, Pi = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, Oi = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", padding: "1.125rem", borderRadius: "5px 5px 0 0", gap: "0.5rem" }, Ti = { highlightBorderColor: "{primary.color}", padding: "1.125rem", gap: "1rem" }, zi = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, ji = { gap: "0.5rem" }, Li = { height: "0.25rem" }, Ni = { gap: "0.5rem" }, Di = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } }, Ai = { root: Pi, header: Oi, content: Ti, file: zi, fileList: ji, progressbar: Li, basic: Ni, colorScheme: Di }, Ii = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, Ei = { active: { top: "-1.375rem" } }, Wi = { input: { paddingTop: "1.875rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, Mi = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, Vi = { root: Ii, over: Ei, in: Wi, on: Mi }, Fi = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, Hi = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0", prev: { borderRadius: "0 12px 12px 0" }, next: { borderRadius: "12px 0 0 12px" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ui = { size: "1.5rem" }, Yi = { padding: "1rem 0.25rem" }, Ki = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xi = { size: "1rem" }, Gi = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, qi = { gap: "0.5rem", padding: "1rem" }, Qi = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ji = { background: "rgba(0, 0, 0, 0.5)" }, Zi = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, od = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, rd = { size: "1.5rem" }, ed = { light: { thumbnailsContent: { background: "{surface.50}" }, thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailsContent: { background: "{surface.800}" }, thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, td = { root: Fi, navButton: Hi, navIcon: Ui, thumbnailsContent: Yi, thumbnailNavButton: Ki, thumbnailNavButtonIcon: Xi, caption: Gi, indicatorList: qi, indicatorButton: Qi, insetIndicatorList: Ji, insetIndicatorButton: Zi, closeButton: od, closeButtonIcon: rd, colorScheme: ed }, nd = { color: "{form.field.icon.color}" }, ad = { icon: nd }, id = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, dd = { paddingTop: "1.875rem", paddingBottom: "{form.field.padding.y}" }, ld = { root: id, input: dd }, cd = { transitionDuration: "{transition.duration}" }, sd = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, ud = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "{content.border.radius}", padding: ".5rem", gap: "0.5rem" }, fd = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, gd = { root: cd, preview: sd, toolbar: ud, action: fd }, bd = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.3)", hoverBorderColor: "rgba(255,255,255,0.3)", borderWidth: "3px", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, pd = { handle: bd }, md = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, hd = { fontWeight: "500" }, vd = { size: "1.125rem" }, yd = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "color-mix(in srgb, {blue.50}, transparent 5%)", color: "{blue.600}", shadow: "none" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "color-mix(in srgb, {green.50}, transparent 5%)", color: "{green.600}", shadow: "none" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "color-mix(in srgb,{yellow.50}, transparent 5%)", color: "{yellow.600}", shadow: "none" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "color-mix(in srgb, {red.50}, transparent 5%)", color: "{red.600}", shadow: "none" }, secondary: { background: "{surface.100}", borderColor: "{surface.100}", color: "{surface.600}", shadow: "none" }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", shadow: "none" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.500}, transparent 84%)", color: "{blue.500}", shadow: "none" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.500}", shadow: "none" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.500}, transparent 84%)", color: "{yellow.500}", shadow: "none" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.500}", shadow: "none" }, secondary: { background: "{surface.800}", borderColor: "{surface.800}", color: "{surface.300}", shadow: "none" }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", shadow: "none" } } }, kd = { root: md, text: hd, icon: vd, colorScheme: yd }, $d = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, Cd = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, wd = { root: $d, display: Cd }, Sd = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, xd = { borderRadius: "{border.radius.sm}" }, Bd = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, _d = { root: Sd, chip: xd, colorScheme: Bd }, Rd = { borderRadius: "{form.field.border.radius}", padding: "0.625rem 0.5rem", minWidth: "2.75rem" }, Pd = { light: { addon: { background: "{surface.50}", borderColor: "{form.field.border.color}", color: "{text.muted.color}" } }, dark: { addon: { background: "{surface.800}", borderColor: "{form.field.border.color}", color: "{text.muted.color}" } } }, Od = { addon: Rd, colorScheme: Pd }, Td = { transitionDuration: "{transition.duration}" }, zd = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, jd = { light: { button: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { button: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.500}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, Ld = { root: Td, button: zd, colorScheme: jd }, Nd = { gap: "0.5rem" }, Dd = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, Ad = { root: Nd, input: Dd }, Id = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Ed = { root: Id }, Wd = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Md = { background: "{primary.color}" }, Vd = { background: "{content.border.color}" }, Fd = { color: "{text.muted.color}" }, Hd = { root: Wd, value: Md, range: Vd, text: Fd }, Ud = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, Yd = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Kd = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Xd = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Gd = { color: "{list.option.color}", gutterStart: "-0.5rem", gutterEnd: "0.5rem" }, qd = { padding: "{list.option.padding}" }, Qd = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, Jd = { root: Ud, list: Yd, option: Kd, optionGroup: Xd, checkmark: Gd, emptyMessage: qd, colorScheme: Qd }, Zd = { borderColor: "transparent", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.75rem 1rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, ol = { borderRadius: "{content.border.radius}", padding: "0.75rem 1rem" }, rl = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, el = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, tl = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, nl = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background.}", color: "{navigation.submenu.label.color}" }, al = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, il = { borderColor: "{content.border.color}" }, dl = { borderRadius: "50%", size: "2rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ll = { light: { root: { background: "{surface.50}" } }, dark: { root: { background: "{surface.800}" } } }, cl = { root: Zd, baseItem: ol, item: rl, overlay: el, submenu: tl, submenuLabel: nl, submenuIcon: al, separator: il, mobileButton: dl, colorScheme: ll }, sl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, ul = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, fl = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, gl = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background.}", color: "{navigation.submenu.label.color}" }, bl = { borderColor: "{content.border.color}" }, pl = { root: sl, list: ul, item: fl, submenuLabel: gl, separator: bl }, ml = { borderColor: "transparent", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem 1rem", transitionDuration: "{transition.duration}" }, hl = { borderRadius: "{content.border.radius}", padding: "0.75rem 1rem" }, vl = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, yl = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1.25rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, kl = { borderColor: "{content.border.color}" }, $l = { borderRadius: "50%", size: "2rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Cl = { light: { root: { background: "{surface.50}" } }, dark: { root: { background: "{surface.800}" } } }, wl = { root: ml, baseItem: hl, item: vl, submenu: yl, separator: kl, mobileButton: $l, colorScheme: Cl }, Sl = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, xl = { padding: "0.75rem 1rem", gap: "0.5rem", sm: { padding: "0.5rem 0.625rem" }, lg: { padding: "0.75rem 0.875rem" } }, Bl = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, _l = { size: "1.25rem", sm: { size: "1rem" }, lg: { size: "1.5rem" } }, Rl = { width: "2rem", height: "2rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Pl = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, Ol = { root: { borderWidth: "1px" } }, Tl = { content: { padding: "0" } }, zl = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "transparent", color: "{blue.600}", shadow: "none", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {blue.200}" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "transparent", color: "{green.600}", shadow: "none", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {green.200}" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "transparent", color: "{yellow.600}", shadow: "none", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {yellow.200}" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "transparent", color: "{red.600}", shadow: "none", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {red.200}" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "transparent", color: "{surface.600}", shadow: "none", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.200}" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "transparent", color: "{surface.50}", shadow: "none", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.400}" } }, outlined: { color: "{surface.900}", borderColor: "{surface.900}" }, simple: { color: "{surface.900}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "transparent", color: "{blue.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "transparent", color: "{green.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "transparent", color: "{yellow.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "transparent", color: "{red.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "transparent", color: "{surface.300}", shadow: "none", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "transparent", color: "{surface.950}", shadow: "none", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, jl = { root: Sl, content: xl, text: Bl, icon: _l, closeButton: Rl, closeIcon: Pl, outlined: Ol, simple: Tl, colorScheme: zl }, Ll = { borderRadius: "{content.border.radius}", gap: "1rem" }, Nl = { background: "{content.border.color}", size: "0.625rem" }, Dl = { gap: "0.5rem" }, Al = { size: "0.5rem" }, Il = { size: "1rem" }, El = { verticalGap: "0.5rem", horizontalGap: "1rem" }, Wl = { root: Ll, meters: Nl, label: Dl, labelMarker: Al, labelIcon: Il, labelList: El }, Ml = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Vl = { width: "2.5rem", color: "{form.field.icon.color}" }, Fl = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Hl = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Ul = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, Yl = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Kl = { color: "{form.field.icon.color}" }, Xl = { borderRadius: "{border.radius.sm}" }, Gl = { padding: "{list.option.padding}" }, ql = { root: Ml, dropdown: Vl, overlay: Fl, list: Hl, option: Ul, optionGroup: Yl, chip: Xl, clearIcon: Kl, emptyMessage: Gl }, Ql = { gap: "1.125rem" }, Jl = { gap: "0.5rem" }, Zl = { root: Ql, controls: Jl }, oc = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, rc = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "1rem 1.25rem", toggleablePadding: "1rem 1.25rem 1.5rem 1.25rem", borderRadius: "{content.border.radius}" }, ec = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, tc = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, nc = { root: oc, node: rc, nodeToggleButton: ec, connector: tc }, ac = { outline: { width: "2px", color: "{content.background}" } }, ic = { root: ac }, dc = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, lc = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, cc = { color: "{text.muted.color}" }, sc = { maxWidth: "2.5rem" }, uc = { root: dc, navButton: lc, currentPageReport: cc, jumpToPageInput: sc }, fc = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}" }, gc = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", padding: "1.125rem", borderRadius: "5px 5px 0 0" }, bc = { padding: "0.25rem 1.125rem" }, pc = { fontWeight: "700" }, mc = { padding: "1.125rem" }, hc = { padding: "1.125rem" }, vc = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } }, yc = { root: fc, header: gc, toggleableHeader: bc, title: pc, content: mc, footer: hc, colorScheme: vc }, kc = { gap: "0", transitionDuration: "{transition.duration}" }, $c = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "0", first: { borderWidth: "1px 1px 0 1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "0 1px 1px 1px", bottomBorderRadius: "{content.border.radius}" } }, Cc = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, wc = { indent: "1rem" }, Sc = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, xc = { root: kc, panel: $c, item: Cc, submenu: wc, submenuIcon: Sc }, Bc = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, _c = { color: "{form.field.icon.color}" }, Rc = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, Pc = { gap: "0.75rem" }, Oc = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, Tc = { meter: Bc, icon: _c, overlay: Rc, content: Pc, colorScheme: Oc }, zc = { gap: "1.125rem" }, jc = { gap: "0.5rem" }, Lc = { root: zc, controls: jc }, Nc = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Dc = { padding: "{overlay.popover.padding}" }, Ac = { root: Nc, content: Dc }, Ic = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.5rem" }, Ec = { background: "{primary.color}" }, Wc = { color: "{primary.contrast.color}", fontSize: "0.875rem", fontWeight: "600" }, Mc = { root: Ic, value: Ec, label: Wc }, Vc = { light: { root: { colorOne: "{pink.500}", colorTwo: "{sky.500}", colorThree: "{emerald.500}", colorFour: "{amber.500}" } }, dark: { root: { colorOne: "{pink.400}", colorTwo: "{sky.400}", colorThree: "{emerald.400}", colorFour: "{amber.400}" } } }, Fc = { colorScheme: Vc }, Hc = { width: "1.5rem", height: "1.5rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1.25rem", height: "1.25rem" }, lg: { width: "1.75rem", height: "1.75rem" } }, Uc = { size: "1rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1.25rem" } }, Yc = { root: Hc, icon: Uc }, Kc = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xc = { size: "1.25rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, Gc = { root: Kc, icon: Xc }, qc = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, Qc = { colorScheme: qc }, Jc = { transitionDuration: "{transition.duration}" }, Zc = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, os = { light: { bar: { background: "{surface.200}" } }, dark: { bar: { background: "{surface.700}" } } }, rs = { root: Jc, bar: Zc, colorScheme: os }, es = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, ts = { width: "2.5rem", color: "{form.field.icon.color}" }, ns = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, as = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, is = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, ds = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, ls = { color: "{form.field.icon.color}" }, cs = { color: "{list.option.color}", gutterStart: "-0.5rem", gutterEnd: "0.5rem" }, ss = { padding: "{list.option.padding}" }, us = { root: es, dropdown: ts, overlay: ns, list: as, option: is, optionGroup: ds, clearIcon: ls, checkmark: cs, emptyMessage: ss }, fs = { borderRadius: "{form.field.border.radius}" }, gs = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, bs = { root: fs, colorScheme: gs }, ps = { borderRadius: "{content.border.radius}" }, ms = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, hs = { root: ps, colorScheme: ms }, vs = { transitionDuration: "{transition.duration}" }, ys = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, ks = { background: "{primary.color}" }, $s = { width: "16px", height: "16px", borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", content: { borderRadius: "50%", hoverBackground: "{primary.color}", width: "12px", height: "12px", shadow: "none" }, focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Cs = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, ws = { root: vs, track: ys, range: ks, handle: $s, colorScheme: Cs }, Ss = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, xs = { root: Ss }, Bs = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, _s = { root: Bs }, Rs = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Ps = { background: "{content.border.color}" }, Os = { size: "24px", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ts = { light: { handle: { background: "{surface.400}" } }, dark: { handle: { background: "{surface.600}" } } }, zs = { root: Rs, gutter: Ps, handle: Os, colorScheme: Ts }, js = { transitionDuration: "{transition.duration}" }, Ls = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, Ns = { padding: "0.5rem", gap: "1rem" }, Ds = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, As = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Is = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2.25rem", fontSize: "1.125rem", fontWeight: "500", borderRadius: "50%", shadow: "none" }, Es = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, Ws = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, Ms = { root: js, separator: Ls, step: Ns, stepHeader: Ds, stepTitle: As, stepNumber: Is, steppanels: Es, steppanel: Ws }, Vs = { transitionDuration: "{transition.duration}" }, Fs = { background: "{content.border.color}" }, Hs = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Us = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Ys = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2.25rem", fontSize: "1.125rem", fontWeight: "500", borderRadius: "50%", shadow: "none" }, Ks = { root: Vs, separator: Fs, itemLink: Hs, itemLabel: Us, itemNumber: Ys }, Xs = { transitionDuration: "{transition.duration}" }, Gs = { borderWidth: "0", background: "{content.background}", borderColor: "{content.border.color}" }, qs = { borderWidth: "2px 0 0 0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.25rem", fontWeight: "600", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Qs = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Js = { height: "0", bottom: "0", background: "transparent" }, Zs = { light: { item: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.0}" } }, dark: { item: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.900}" } } }, ou = { root: Xs, tablist: Gs, item: qs, itemIcon: Qs, activeBar: Js, colorScheme: Zs }, ru = { transitionDuration: "{transition.duration}" }, eu = { borderWidth: "0", background: "{content.background}", borderColor: "{content.border.color}" }, tu = { borderWidth: "2px 0 0 0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.25rem", fontWeight: "700", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, nu = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, au = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, iu = { height: "0", bottom: "0", background: "transparent" }, du = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" }, tab: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.0}" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" }, tab: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.900}" } } }, lu = { root: ru, tablist: eu, tab: tu, tabpanel: nu, navButton: au, activeBar: iu, colorScheme: du }, cu = { transitionDuration: "{transition.duration}" }, su = { background: "{content.background}", borderColor: "{content.border.color}" }, uu = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, fu = { background: "{content.background}", color: "{content.color}" }, gu = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, bu = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, pu = { root: cu, tabList: su, tab: uu, tabPanel: fu, navButton: gu, colorScheme: bu }, mu = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, hu = { size: "0.75rem" }, vu = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, yu = { root: mu, icon: hu, colorScheme: vu }, ku = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, $u = { gap: "0.25rem" }, Cu = { margin: "2px 0" }, wu = { root: ku, prompt: $u, commandResponse: Cu }, Su = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, xu = { root: Su }, Bu = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, _u = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Ru = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Pu = { mobileIndent: "1.25rem" }, Ou = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Tu = { borderColor: "{content.border.color}" }, zu = { root: Bu, list: _u, item: Ru, submenu: Pu, submenuIcon: Ou, separator: Tu }, ju = { minHeight: "5rem" }, Lu = { eventContent: { padding: "1rem 0" } }, Nu = { eventContent: { padding: "0 1rem" } }, Du = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{primary.color}", content: { borderRadius: "50%", size: "0.375rem", background: "transparent", insetShadow: "none" } }, Au = { color: "{content.border.color}", size: "2px" }, Iu = { event: ju, horizontal: Lu, vertical: Nu, eventMarker: Du, eventConnector: Au }, Eu = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "0 0 0 6px", transitionDuration: "{transition.duration}" }, Wu = { size: "1.25rem" }, Mu = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, Vu = { gap: "0.5rem" }, Fu = { fontWeight: "500", fontSize: "1rem" }, Hu = { fontWeight: "500", fontSize: "0.875rem" }, Uu = { width: "2rem", height: "2rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Yu = { size: "1rem" }, Ku = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.500}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {blue.200}" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.500}", color: "{green.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {green.200}" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.500}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {yellow.200}" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.500}", color: "{red.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {red.200}" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.500}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.200}" } } }, contrast: { background: "{surface.900}", borderColor: "{primary.color}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.400}" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)" } } } } }, Xu = { root: Eu, icon: Wu, content: Mu, text: Vu, summary: Fu, detail: Hu, closeButton: Uu, closeIcon: Yu, colorScheme: Ku }, Gu = { padding: "0.625rem 1rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", hoverColor: "{form.field.color}", checkedBackground: "{highlight.background}", checkedColor: "{highlight.color}", checkedBorderColor: "{form.field.border.color}", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.5rem 0.75rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.75rem 1.25rem" } }, qu = { color: "{text.muted.color}", hoverColor: "{text.muted.color}", checkedColor: "{highlight.color}", disabledColor: "{form.field.disabled.color}" }, Qu = { checkedBackground: "transparent", checkedShadow: "none", padding: "0", borderRadius: "0", sm: { padding: "0" }, lg: { padding: "0" } }, Ju = { light: { root: { hoverBackground: "{surface.100}" } }, dark: { root: { hoverBackground: "{surface.800}" } } }, Zu = { root: Gu, icon: qu, content: Qu, colorScheme: Ju }, of = { width: "3rem", height: "1.75rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, rf = { borderRadius: "50%", size: "1.25rem" }, ef = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, tf = { root: of, handle: rf, colorScheme: ef }, nf = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, af = { light: { root: { background: "{surface.50}", color: "{content.color}" } }, dark: { root: { background: "{surface.800}", color: "{content.color}" } } }, df = { root: nf, colorScheme: af }, lf = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.625rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, cf = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, sf = { root: lf, colorScheme: cf }, uf = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, ff = { padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, gap: "0.25rem" }, gf = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, bf = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, pf = { size: "2rem" }, mf = { margin: "0 0 0.5rem 0" }, hf = { root: uf, node: ff, nodeIcon: gf, nodeToggleButton: bf, loadingIcon: pf, filter: mf }, vf = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, yf = { width: "2.5rem", color: "{form.field.icon.color}" }, kf = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, $f = { padding: "{list.padding}" }, Cf = { padding: "{list.option.padding}" }, wf = { borderRadius: "{border.radius.sm}" }, Sf = { color: "{form.field.icon.color}" }, xf = { root: vf, dropdown: yf, overlay: kf, tree: $f, emptyMessage: Cf, chip: wf, clearIcon: Sf }, Bf = { transitionDuration: "{transition.duration}" }, _f = { borderColor: "{treetable.border.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem" }, Rf = { selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, Pf = { fontWeight: "700" }, Of = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{sr.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, Tf = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, zf = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem" }, jf = { fontWeight: "700" }, Lf = { borderColor: "{treetable.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, Nf = { width: "0.5rem" }, Df = { width: "1px", color: "{primary.color}" }, Af = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, If = { size: "2rem" }, Ef = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Wf = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Mf = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Vf = { light: { root: { borderColor: "{content.border.color}" }, header: { background: "{surface.50}", color: "{text.color}" }, headerCell: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}" }, footer: { background: "{surface.50}", color: "{text.color}" }, footerCell: { background: "{surface.50}", color: "{text.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, header: { background: "{surface.800}", color: "{text.color}" }, headerCell: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}" }, footer: { background: "{surface.800}", color: "{text.color}" }, footerCell: { background: "{surface.800}", color: "{text.color}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Ff = { root: Bf, header: _f, headerCell: Rf, columnTitle: Pf, row: Of, bodyCell: Tf, footerCell: zf, columnFooter: jf, footer: Lf, columnResizer: Nf, resizeIndicator: Df, sortIcon: Af, loadingIcon: If, nodeToggleButton: Ef, paginatorTop: Wf, paginatorBottom: Mf, colorScheme: Vf }, Hf = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, Uf = { loader: Hf }, Yf = Object.defineProperty, Kf = Object.defineProperties, Xf = Object.getOwnPropertyDescriptors, br = Object.getOwnPropertySymbols, Gf = Object.prototype.hasOwnProperty, qf = Object.prototype.propertyIsEnumerable, pr = (o, r, e) => r in o ? Yf(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, mr, Qf = (mr = ((o, r) => {
  for (var e in r || (r = {}))
    Gf.call(r, e) && pr(o, e, r[e]);
  if (br)
    for (var e of br(r))
      qf.call(r, e) && pr(o, e, r[e]);
  return o;
})({}, Qt), Kf(mr, Xf({ components: { accordion: xt, autocomplete: Nt, avatar: Mt, badge: Xt, blockui: Zt, breadcrumb: tn, button: dn, datepicker: Ga, card: gn, carousel: yn, cascadeselect: Bn, checkbox: Pn, chip: Nn, colorpicker: Wn, confirmdialog: Fn, confirmpopup: Xn, contextmenu: ra, dataview: Pa, datatable: $a, dialog: ri, divider: ii, dock: ci, drawer: pi, editor: Ci, fieldset: Ri, fileupload: Ai, iftalabel: ld, floatlabel: Vi, galleria: td, iconfield: ad, image: gd, imagecompare: pd, inlinemessage: kd, inplace: wd, inputchips: _d, inputgroup: Od, inputnumber: Ld, inputotp: Ad, inputtext: Ed, knob: Hd, listbox: Jd, megamenu: cl, menu: pl, menubar: wl, message: jl, metergroup: Wl, multiselect: ql, orderlist: Zl, organizationchart: nc, overlaybadge: ic, popover: Ac, paginator: uc, password: Tc, panel: yc, panelmenu: xc, picklist: Lc, progressbar: Mc, progressspinner: Fc, radiobutton: Yc, rating: Gc, ripple: Qc, scrollpanel: rs, select: us, selectbutton: bs, skeleton: hs, slider: ws, speeddial: xs, splitter: zs, splitbutton: _s, stepper: Ms, steps: Ks, tabmenu: ou, tabs: lu, tabview: pu, textarea: xu, tieredmenu: zu, tag: yu, terminal: wu, timeline: Iu, togglebutton: Zu, toggleswitch: tf, tree: hf, treeselect: xf, treetable: Ff, toast: Xu, toolbar: df, tooltip: sf, virtualscroller: Uf } }))), q = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(r) {
    return this._loadedStyleNames.has(r);
  },
  setLoadedStyleName: function(r) {
    this._loadedStyleNames.add(r);
  },
  deleteLoadedStyleName: function(r) {
    this._loadedStyleNames.delete(r);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
};
function Jf() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", r = se();
  return "".concat(o).concat(r.replace("v-", "").replaceAll("-", "_"));
}
var hr = _.extend({
  name: "common"
});
function Co(o) {
  "@babel/helpers - typeof";
  return Co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Co(o);
}
function Zf(o) {
  return Ir(o) || og(o) || Ar(o) || Dr();
}
function og(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null)
    return Array.from(o);
}
function fo(o, r) {
  return Ir(o) || rg(o, r) || Ar(o, r) || Dr();
}
function Dr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ar(o, r) {
  if (o) {
    if (typeof o == "string")
      return vr(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? vr(o, r) : void 0;
  }
}
function vr(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++)
    t[e] = o[e];
  return t;
}
function rg(o, r) {
  var e = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (e != null) {
    var t, n, i, c, d = [], a = !0, l = !1;
    try {
      if (i = (e = e.call(o)).next, r === 0) {
        if (Object(e) !== e)
          return;
        a = !1;
      } else
        for (; !(a = (t = i.call(e)).done) && (d.push(t.value), d.length !== r); a = !0)
          ;
    } catch (s) {
      l = !0, n = s;
    } finally {
      try {
        if (!a && e.return != null && (c = e.return(), Object(c) !== c))
          return;
      } finally {
        if (l)
          throw n;
      }
    }
    return d;
  }
}
function Ir(o) {
  if (Array.isArray(o))
    return o;
}
function yr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function $(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? yr(Object(e), !0).forEach(function(t) {
      po(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : yr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function po(o, r, e) {
  return (r = eg(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function eg(o) {
  var r = tg(o, "string");
  return Co(r) == "symbol" ? r : r + "";
}
function tg(o, r) {
  if (Co(o) != "object" || !o)
    return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (Co(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var Ko = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    },
    ptOptions: {
      type: Object,
      default: void 0
    },
    unstyled: {
      type: Boolean,
      default: void 0
    },
    dt: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: !0,
      handler: function(r) {
        P.off("theme:change", this._loadCoreStyles), r || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(r, e) {
        var t = this;
        P.off("theme:change", this._themeScopedListener), r ? (this._loadScopedThemeStyles(r), this._themeScopedListener = function() {
          return t._loadScopedThemeStyles(r);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var r, e, t, n, i, c, d, a, l, s, u, f = (r = this.pt) === null || r === void 0 ? void 0 : r._usept, g = f ? (e = this.pt) === null || e === void 0 || (e = e.originalValue) === null || e === void 0 ? void 0 : e[this.$.type.name] : void 0, p = f ? (t = this.pt) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t[this.$.type.name] : this.pt;
    (n = p || g) === null || n === void 0 || (n = n.hooks) === null || n === void 0 || (i = n.onBeforeCreate) === null || i === void 0 || i.call(n);
    var h = (c = this.$primevueConfig) === null || c === void 0 || (c = c.pt) === null || c === void 0 ? void 0 : c._usept, m = h ? (d = this.$primevue) === null || d === void 0 || (d = d.config) === null || d === void 0 || (d = d.pt) === null || d === void 0 ? void 0 : d.originalValue : void 0, y = h ? (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a.value : (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 ? void 0 : l.pt;
    (s = y || m) === null || s === void 0 || (s = s[this.$.type.name]) === null || s === void 0 || (s = s.hooks) === null || s === void 0 || (u = s.onBeforeCreate) === null || u === void 0 || u.call(s), this.$attrSelector = Jf(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var r;
    this.rootEl = Te(Po(this.$el) ? this.$el : (r = this.$el) === null || r === void 0 ? void 0 : r.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = $({
      name: this.$.type.name,
      attrSelector: this.$attrSelector
    }, this.$params)), this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this._hook("onMounted");
  },
  beforeUpdate: function() {
    this._hook("onBeforeUpdate");
  },
  updated: function() {
    this._hook("onUpdated");
  },
  beforeUnmount: function() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function() {
    this._removeThemeListeners(), this._unloadScopedThemeStyles(), this._hook("onUnmounted");
  },
  methods: {
    _hook: function(r) {
      if (!this.$options.hostName) {
        var e = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(r)), t = this._useDefaultPT(this._getOptionValue, "hooks.".concat(r));
        e == null || e(), t == null || t();
      }
    },
    _mergeProps: function(r) {
      for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
        t[n - 1] = arguments[n];
      return Uo(r) ? r.apply(void 0, t) : z.apply(void 0, t);
    },
    _load: function() {
      q.isStyleNameLoaded("base") || (_.loadCSS(this.$styleOptions), this._loadGlobalStyles(), q.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var r, e;
      !q.isStyleNameLoaded((r = this.$style) === null || r === void 0 ? void 0 : r.name) && (e = this.$style) !== null && e !== void 0 && e.name && (hr.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), q.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var r = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      B(r) && _.load(r, $({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var r, e;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!x.isStyleNameLoaded("common")) {
          var t, n, i = ((t = this.$style) === null || t === void 0 || (n = t.getCommonTheme) === null || n === void 0 ? void 0 : n.call(t)) || {}, c = i.primitive, d = i.semantic, a = i.global, l = i.style;
          _.load(c == null ? void 0 : c.css, $({
            name: "primitive-variables"
          }, this.$styleOptions)), _.load(d == null ? void 0 : d.css, $({
            name: "semantic-variables"
          }, this.$styleOptions)), _.load(a == null ? void 0 : a.css, $({
            name: "global-variables"
          }, this.$styleOptions)), _.loadStyle($({
            name: "global-style"
          }, this.$styleOptions), l), x.setLoadedStyleName("common");
        }
        if (!x.isStyleNameLoaded((r = this.$style) === null || r === void 0 ? void 0 : r.name) && (e = this.$style) !== null && e !== void 0 && e.name) {
          var s, u, f, g, p = ((s = this.$style) === null || s === void 0 || (u = s.getComponentTheme) === null || u === void 0 ? void 0 : u.call(s)) || {}, h = p.css, m = p.style;
          (f = this.$style) === null || f === void 0 || f.load(h, $({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (g = this.$style) === null || g === void 0 || g.loadStyle($({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), m), x.setLoadedStyleName(this.$style.name);
        }
        if (!x.isStyleNameLoaded("layer-order")) {
          var y, w, S = (y = this.$style) === null || y === void 0 || (w = y.getLayerOrderThemeCSS) === null || w === void 0 ? void 0 : w.call(y);
          _.load(S, $({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), x.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(r) {
      var e, t, n, i = ((e = this.$style) === null || e === void 0 || (t = e.getPresetTheme) === null || t === void 0 ? void 0 : t.call(e, r, "[".concat(this.$attrSelector, "]"))) || {}, c = i.css, d = (n = this.$style) === null || n === void 0 ? void 0 : n.load(c, $({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = d.el;
    },
    _unloadScopedThemeStyles: function() {
      var r;
      (r = this.scopedStyleEl) === null || r === void 0 || (r = r.value) === null || r === void 0 || r.remove();
    },
    _themeChangeListener: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      q.clearLoadedStyleNames(), P.on("theme:change", r);
    },
    _removeThemeListeners: function() {
      P.off("theme:change", this._loadCoreStyles), P.off("theme:change", this._load), P.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(r) {
      return r ? this.$options.hostName ? r.$.type.name === this.$options.hostName ? r : this._getHostInstance(r.$parentInstance) : r.$parentInstance : void 0;
    },
    _getPropValue: function(r) {
      var e;
      return this[r] || ((e = this._getHostInstance(this)) === null || e === void 0 ? void 0 : e[r]);
    },
    _getOptionValue: function(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Yo(r, e, t);
    },
    _getPTValue: function() {
      var r, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, c = /./g.test(t) && !!n[t.split(".")[0]], d = this._getPropValue("ptOptions") || ((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.ptOptions) || {}, a = d.mergeSections, l = a === void 0 ? !0 : a, s = d.mergeProps, u = s === void 0 ? !1 : s, f = i ? c ? this._useGlobalPT(this._getPTClassValue, t, n) : this._useDefaultPT(this._getPTClassValue, t, n) : void 0, g = c ? void 0 : this._getPTSelf(e, this._getPTClassValue, t, $($({}, n), {}, {
        global: f || {}
      })), p = this._getPTDatasets(t);
      return l || !l && g ? u ? this._mergeProps(u, f, g, p) : $($($({}, f), g), p) : $($({}, g), p);
    },
    _getPTSelf: function() {
      for (var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
        t[n - 1] = arguments[n];
      return z(
        this._usePT.apply(this, [this._getPT(r, this.$name)].concat(t)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(t))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var r, e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = "data-pc-", i = t === "root" && B((r = this.pt) === null || r === void 0 ? void 0 : r["data-pc-section"]);
      return t !== "transition" && $($({}, t === "root" && $($(po({}, "".concat(n, "name"), W(i ? (e = this.pt) === null || e === void 0 ? void 0 : e["data-pc-section"] : this.$.type.name)), i && po({}, "".concat(n, "extend"), W(this.$.type.name))), {}, po({}, "".concat(this.$attrSelector), ""))), {}, po({}, "".concat(n, "section"), W(t)));
    },
    _getPTClassValue: function() {
      var r = this._getOptionValue.apply(this, arguments);
      return j(r) || Io(r) ? {
        class: r
      } : r;
    },
    _getPT: function(r) {
      var e = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 ? arguments[2] : void 0, i = function(d) {
        var a, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = n ? n(d) : d, u = W(t), f = W(e.$name);
        return (a = l ? u !== f ? s == null ? void 0 : s[u] : void 0 : s == null ? void 0 : s[u]) !== null && a !== void 0 ? a : s;
      };
      return r != null && r.hasOwnProperty("_usept") ? {
        _usept: r._usept,
        originalValue: i(r.originalValue),
        value: i(r.value)
      } : i(r, !0);
    },
    _usePT: function(r, e, t, n) {
      var i = function(h) {
        return e(h, t, n);
      };
      if (r != null && r.hasOwnProperty("_usept")) {
        var c, d = r._usept || ((c = this.$primevueConfig) === null || c === void 0 ? void 0 : c.ptOptions) || {}, a = d.mergeSections, l = a === void 0 ? !0 : a, s = d.mergeProps, u = s === void 0 ? !1 : s, f = i(r.originalValue), g = i(r.value);
        return f === void 0 && g === void 0 ? void 0 : j(g) ? g : j(f) ? f : l || !l && g ? u ? this._mergeProps(u, f, g) : $($({}, f), g) : g;
      }
      return i(r);
    },
    _useGlobalPT: function(r, e, t) {
      return this._usePT(this.globalPT, r, e, t);
    },
    _useDefaultPT: function(r, e, t) {
      return this._usePT(this.defaultPT, r, e, t);
    },
    ptm: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, r, $($({}, this.$params), e));
    },
    ptmi: function() {
      var r, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = z(this.$_attrsWithoutPT, this.ptm(e, t));
      return n != null && n.hasOwnProperty("id") && ((r = n.id) !== null && r !== void 0 || (n.id = this.$id)), n;
    },
    ptmo: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(r, e, $({
        instance: this
      }, t), !1);
    },
    cx: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, r, $($({}, this.$params), e));
    },
    sx: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e) {
        var n = this._getOptionValue(this.$style.inlineStyles, r, $($({}, this.$params), t)), i = this._getOptionValue(hr.inlineStyles, r, $($({}, this.$params), t));
        return [i, n];
      }
    }
  },
  computed: {
    globalPT: function() {
      var r, e = this;
      return this._getPT((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.pt, void 0, function(t) {
        return N(t, {
          instance: e
        });
      });
    },
    defaultPT: function() {
      var r, e = this;
      return this._getPT((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.pt, void 0, function(t) {
        return e._getOptionValue(t, e.$name, $({}, e.$params)) || N(t, $({}, e.$params));
      });
    },
    isUnstyled: function() {
      var r;
      return this.unstyled !== void 0 ? this.unstyled : (r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.unstyled;
    },
    $id: function() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function() {
      var r, e = Object.keys(((r = this.$.vnode) === null || r === void 0 ? void 0 : r.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(t) {
        var n = fo(t, 1), i = n[0];
        return e == null ? void 0 : e.includes(i);
      }));
    },
    $theme: function() {
      var r;
      return (r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.theme;
    },
    $style: function() {
      return $($({
        classes: void 0,
        inlineStyles: void 0,
        load: function() {
        },
        loadCSS: function() {
        },
        loadStyle: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function() {
      var r;
      return {
        nonce: (r = this.$primevueConfig) === null || r === void 0 || (r = r.csp) === null || r === void 0 ? void 0 : r.nonce
      };
    },
    $primevueConfig: function() {
      var r;
      return (r = this.$primevue) === null || r === void 0 ? void 0 : r.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var r = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: r,
          props: r == null ? void 0 : r.$props,
          state: r == null ? void 0 : r.$data,
          attrs: r == null ? void 0 : r.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(r) {
        var e = fo(r, 1), t = e[0];
        return t == null ? void 0 : t.startsWith("pt:");
      }).reduce(function(r, e) {
        var t = fo(e, 2), n = t[0], i = t[1], c = n.split(":"), d = Zf(c), a = d.slice(1);
        return a == null || a.reduce(function(l, s, u, f) {
          return !l[s] && (l[s] = u === f.length - 1 ? i : {}), l[s];
        }, r), r;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(r) {
        var e = fo(r, 1), t = e[0];
        return !(t != null && t.startsWith("pt:"));
      }).reduce(function(r, e) {
        var t = fo(e, 2), n = t[0], i = t[1];
        return r[n] = i, r;
      }, {});
    }
  }
}, ng = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, ag = _.extend({
  name: "baseicon",
  css: ng
});
function wo(o) {
  "@babel/helpers - typeof";
  return wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, wo(o);
}
function kr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function $r(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? kr(Object(e), !0).forEach(function(t) {
      ig(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : kr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function ig(o, r, e) {
  return (r = dg(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function dg(o) {
  var r = lg(o, "string");
  return wo(r) == "symbol" ? r : r + "";
}
function lg(o, r) {
  if (wo(o) != "object" || !o)
    return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (wo(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var cg = {
  name: "BaseIcon",
  extends: Ko,
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  style: ag,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var r = no(this.label);
      return $r($r({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: r ? void 0 : "img",
        "aria-label": r ? void 0 : this.label,
        "aria-hidden": r
      });
    }
  }
}, Er = {
  name: "SpinnerIcon",
  extends: cg
};
function sg(o, r, e, t, n, i) {
  return G(), No("svg", z({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o.pti()), r[0] || (r[0] = [_r("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Er.render = sg;
var ug = ({ dt: o }) => `
.p-badge {
    display: inline-flex;
    border-radius: ${o("badge.border.radius")};
    align-items: center;
    justify-content: center;
    padding: ${o("badge.padding")};
    background: ${o("badge.primary.background")};
    color: ${o("badge.primary.color")};
    font-size: ${o("badge.font.size")};
    font-weight: ${o("badge.font.weight")};
    min-width: ${o("badge.min.width")};
    height: ${o("badge.height")};
}

.p-badge-dot {
    width: ${o("badge.dot.size")};
    min-width: ${o("badge.dot.size")};
    height: ${o("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${o("badge.secondary.background")};
    color: ${o("badge.secondary.color")};
}

.p-badge-success {
    background: ${o("badge.success.background")};
    color: ${o("badge.success.color")};
}

.p-badge-info {
    background: ${o("badge.info.background")};
    color: ${o("badge.info.color")};
}

.p-badge-warn {
    background: ${o("badge.warn.background")};
    color: ${o("badge.warn.color")};
}

.p-badge-danger {
    background: ${o("badge.danger.background")};
    color: ${o("badge.danger.color")};
}

.p-badge-contrast {
    background: ${o("badge.contrast.background")};
    color: ${o("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${o("badge.sm.font.size")};
    min-width: ${o("badge.sm.min.width")};
    height: ${o("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${o("badge.lg.font.size")};
    min-width: ${o("badge.lg.min.width")};
    height: ${o("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${o("badge.xl.font.size")};
    min-width: ${o("badge.xl.min.width")};
    height: ${o("badge.xl.height")};
}
`, fg = {
  root: function(r) {
    var e = r.props, t = r.instance;
    return ["p-badge p-component", {
      "p-badge-circle": B(e.value) && String(e.value).length === 1,
      "p-badge-dot": no(e.value) && !t.$slots.default,
      "p-badge-sm": e.size === "small",
      "p-badge-lg": e.size === "large",
      "p-badge-xl": e.size === "xlarge",
      "p-badge-info": e.severity === "info",
      "p-badge-success": e.severity === "success",
      "p-badge-warn": e.severity === "warn",
      "p-badge-danger": e.severity === "danger",
      "p-badge-secondary": e.severity === "secondary",
      "p-badge-contrast": e.severity === "contrast"
    }];
  }
}, gg = _.extend({
  name: "badge",
  style: ug,
  classes: fg
}), bg = {
  name: "BaseBadge",
  extends: Ko,
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    severity: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    }
  },
  style: gg,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function So(o) {
  "@babel/helpers - typeof";
  return So = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, So(o);
}
function Cr(o, r, e) {
  return (r = pg(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function pg(o) {
  var r = mg(o, "string");
  return So(r) == "symbol" ? r : r + "";
}
function mg(o, r) {
  if (So(o) != "object" || !o)
    return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (So(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var Wr = {
  name: "Badge",
  extends: bg,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return ho(Cr(Cr({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, hg = ["data-p"];
function vg(o, r, e, t, n, i) {
  return G(), No("span", z({
    class: o.cx("root"),
    "data-p": i.dataP
  }, o.ptmi("root")), [bo(o.$slots, "default", {}, function() {
    return [ue(Rr(o.value), 1)];
  })], 16, hg);
}
Wr.render = vg;
function xo(o) {
  "@babel/helpers - typeof";
  return xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, xo(o);
}
function wr(o, r) {
  return Cg(o) || $g(o, r) || kg(o, r) || yg();
}
function yg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kg(o, r) {
  if (o) {
    if (typeof o == "string")
      return Sr(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Sr(o, r) : void 0;
  }
}
function Sr(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++)
    t[e] = o[e];
  return t;
}
function $g(o, r) {
  var e = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (e != null) {
    var t, n, i, c, d = [], a = !0, l = !1;
    try {
      if (i = (e = e.call(o)).next, r !== 0)
        for (; !(a = (t = i.call(e)).done) && (d.push(t.value), d.length !== r); a = !0)
          ;
    } catch (s) {
      l = !0, n = s;
    } finally {
      try {
        if (!a && e.return != null && (c = e.return(), Object(c) !== c))
          return;
      } finally {
        if (l)
          throw n;
      }
    }
    return d;
  }
}
function Cg(o) {
  if (Array.isArray(o))
    return o;
}
function xr(o, r) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    r && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function C(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? xr(Object(e), !0).forEach(function(t) {
      Fo(o, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : xr(Object(e)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return o;
}
function Fo(o, r, e) {
  return (r = wg(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function wg(o) {
  var r = Sg(o, "string");
  return xo(r) == "symbol" ? r : r + "";
}
function Sg(o, r) {
  if (xo(o) != "object" || !o)
    return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (xo(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var v = {
  _getMeta: function() {
    return [M(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], N(M(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(r, e) {
    var t, n, i;
    return (t = (r == null || (n = r.instance) === null || n === void 0 ? void 0 : n.$primevue) || (e == null || (i = e.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || t === void 0 ? void 0 : t.config;
  },
  _getOptionValue: Yo,
  _getPTValue: function() {
    var r, e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = function() {
      var w = v._getOptionValue.apply(v, arguments);
      return j(w) || Io(w) ? {
        class: w
      } : w;
    }, l = ((r = t.binding) === null || r === void 0 || (r = r.value) === null || r === void 0 ? void 0 : r.ptOptions) || ((e = t.$primevueConfig) === null || e === void 0 ? void 0 : e.ptOptions) || {}, s = l.mergeSections, u = s === void 0 ? !0 : s, f = l.mergeProps, g = f === void 0 ? !1 : f, p = d ? v._useDefaultPT(t, t.defaultPT(), a, i, c) : void 0, h = v._usePT(t, v._getPT(n, t.$name), a, i, C(C({}, c), {}, {
      global: p || {}
    })), m = v._getPTDatasets(t, i);
    return u || !u && h ? g ? v._mergeProps(t, g, p, h, m) : C(C(C({}, p), h), m) : C(C({}, h), m);
  },
  _getPTDatasets: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = "data-pc-";
    return C(C({}, e === "root" && Fo({}, "".concat(t, "name"), W(r.$name))), {}, Fo({}, "".concat(t, "section"), W(e)));
  },
  _getPT: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 ? arguments[2] : void 0, n = function(c) {
      var d, a = t ? t(c) : c, l = W(e);
      return (d = a == null ? void 0 : a[l]) !== null && d !== void 0 ? d : a;
    };
    return r && Object.hasOwn(r, "_usept") ? {
      _usept: r._usept,
      originalValue: n(r.originalValue),
      value: n(r.value)
    } : n(r);
  },
  _usePT: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, c = function(m) {
      return t(m, n, i);
    };
    if (e && Object.hasOwn(e, "_usept")) {
      var d, a = e._usept || ((d = r.$primevueConfig) === null || d === void 0 ? void 0 : d.ptOptions) || {}, l = a.mergeSections, s = l === void 0 ? !0 : l, u = a.mergeProps, f = u === void 0 ? !1 : u, g = c(e.originalValue), p = c(e.value);
      return g === void 0 && p === void 0 ? void 0 : j(p) ? p : j(g) ? g : s || !s && p ? f ? v._mergeProps(r, f, g, p) : C(C({}, g), p) : p;
    }
    return c(e);
  },
  _useDefaultPT: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
    return v._usePT(r, e, t, n, i);
  },
  _loadStyles: function() {
    var r, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0, i = v._getConfig(t, n), c = {
      nonce: i == null || (r = i.csp) === null || r === void 0 ? void 0 : r.nonce
    };
    v._loadCoreStyles(e, c), v._loadThemeStyles(e, c), v._loadScopedThemeStyles(e, c), v._removeThemeListeners(e), e.$loadStyles = function() {
      return v._loadThemeStyles(e, c);
    }, v._themeChangeListener(e.$loadStyles);
  },
  _loadCoreStyles: function() {
    var r, e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (!q.isStyleNameLoaded((r = t.$style) === null || r === void 0 ? void 0 : r.name) && (e = t.$style) !== null && e !== void 0 && e.name) {
      var i;
      _.loadCSS(n), (i = t.$style) === null || i === void 0 || i.loadCSS(n), q.setLoadedStyleName(t.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var r, e, t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (!(n != null && n.isUnstyled() || (n == null || (r = n.theme) === null || r === void 0 ? void 0 : r.call(n)) === "none")) {
      if (!x.isStyleNameLoaded("common")) {
        var c, d, a = ((c = n.$style) === null || c === void 0 || (d = c.getCommonTheme) === null || d === void 0 ? void 0 : d.call(c)) || {}, l = a.primitive, s = a.semantic, u = a.global, f = a.style;
        _.load(l == null ? void 0 : l.css, C({
          name: "primitive-variables"
        }, i)), _.load(s == null ? void 0 : s.css, C({
          name: "semantic-variables"
        }, i)), _.load(u == null ? void 0 : u.css, C({
          name: "global-variables"
        }, i)), _.loadStyle(C({
          name: "global-style"
        }, i), f), x.setLoadedStyleName("common");
      }
      if (!x.isStyleNameLoaded((e = n.$style) === null || e === void 0 ? void 0 : e.name) && (t = n.$style) !== null && t !== void 0 && t.name) {
        var g, p, h, m, y = ((g = n.$style) === null || g === void 0 || (p = g.getDirectiveTheme) === null || p === void 0 ? void 0 : p.call(g)) || {}, w = y.css, S = y.style;
        (h = n.$style) === null || h === void 0 || h.load(w, C({
          name: "".concat(n.$style.name, "-variables")
        }, i)), (m = n.$style) === null || m === void 0 || m.loadStyle(C({
          name: "".concat(n.$style.name, "-style")
        }, i), S), x.setLoadedStyleName(n.$style.name);
      }
      if (!x.isStyleNameLoaded("layer-order")) {
        var b, k, R = (b = n.$style) === null || b === void 0 || (k = b.getLayerOrderThemeCSS) === null || k === void 0 ? void 0 : k.call(b);
        _.load(R, C({
          name: "layer-order",
          first: !0
        }, i)), x.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0, t = r.preset();
    if (t && r.$attrSelector) {
      var n, i, c, d = ((n = r.$style) === null || n === void 0 || (i = n.getPresetTheme) === null || i === void 0 ? void 0 : i.call(n, t, "[".concat(r.$attrSelector, "]"))) || {}, a = d.css, l = (c = r.$style) === null || c === void 0 ? void 0 : c.load(a, C({
        name: "".concat(r.$attrSelector, "-").concat(r.$style.name)
      }, e));
      r.scopedStyleEl = l.el;
    }
  },
  _themeChangeListener: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    q.clearLoadedStyleNames(), P.on("theme:change", r);
  },
  _removeThemeListeners: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    P.off("theme:change", r.$loadStyles), r.$loadStyles = void 0;
  },
  _hook: function(r, e, t, n, i, c) {
    var d, a, l = "on".concat(Se(e)), s = v._getConfig(n, i), u = t == null ? void 0 : t.$instance, f = v._usePT(u, v._getPT(n == null || (d = n.value) === null || d === void 0 ? void 0 : d.pt, r), v._getOptionValue, "hooks.".concat(l)), g = v._useDefaultPT(u, s == null || (a = s.pt) === null || a === void 0 || (a = a.directives) === null || a === void 0 ? void 0 : a[r], v._getOptionValue, "hooks.".concat(l)), p = {
      el: t,
      binding: n,
      vnode: i,
      prevVnode: c
    };
    f == null || f(u, p), g == null || g(u, p);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var r = arguments.length > 1 ? arguments[1] : void 0, e = arguments.length, t = new Array(e > 2 ? e - 2 : 0), n = 2; n < e; n++)
      t[n - 2] = arguments[n];
    return Uo(r) ? r.apply(void 0, t) : z.apply(void 0, t);
  },
  _extend: function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = function(d, a, l, s, u) {
      var f, g, p, h;
      a._$instances = a._$instances || {};
      var m = v._getConfig(l, s), y = a._$instances[r] || {}, w = no(y) ? C(C({}, e), e == null ? void 0 : e.methods) : {};
      a._$instances[r] = C(C({}, y), {}, {
        /* new instance variables to pass in directive methods */
        $name: r,
        $host: a,
        $binding: l,
        $modifiers: l == null ? void 0 : l.modifiers,
        $value: l == null ? void 0 : l.value,
        $el: y.$el || a || void 0,
        $style: C({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, e == null ? void 0 : e.style),
        $primevueConfig: m,
        $attrSelector: (f = a.$pd) === null || f === void 0 || (f = f[r]) === null || f === void 0 ? void 0 : f.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return v._getPT(m == null ? void 0 : m.pt, void 0, function(b) {
            var k;
            return b == null || (k = b.directives) === null || k === void 0 ? void 0 : k[r];
          });
        },
        isUnstyled: function() {
          var b, k;
          return ((b = a._$instances[r]) === null || b === void 0 || (b = b.$binding) === null || b === void 0 || (b = b.value) === null || b === void 0 ? void 0 : b.unstyled) !== void 0 ? (k = a._$instances[r]) === null || k === void 0 || (k = k.$binding) === null || k === void 0 || (k = k.value) === null || k === void 0 ? void 0 : k.unstyled : m == null ? void 0 : m.unstyled;
        },
        theme: function() {
          var b;
          return (b = a._$instances[r]) === null || b === void 0 || (b = b.$primevueConfig) === null || b === void 0 ? void 0 : b.theme;
        },
        preset: function() {
          var b;
          return (b = a._$instances[r]) === null || b === void 0 || (b = b.$binding) === null || b === void 0 || (b = b.value) === null || b === void 0 ? void 0 : b.dt;
        },
        /* instance's methods */
        ptm: function() {
          var b, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return v._getPTValue(a._$instances[r], (b = a._$instances[r]) === null || b === void 0 || (b = b.$binding) === null || b === void 0 || (b = b.value) === null || b === void 0 ? void 0 : b.pt, k, C({}, R));
        },
        ptmo: function() {
          var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return v._getPTValue(a._$instances[r], b, k, R, !1);
        },
        cx: function() {
          var b, k, R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (b = a._$instances[r]) !== null && b !== void 0 && b.isUnstyled() ? void 0 : v._getOptionValue((k = a._$instances[r]) === null || k === void 0 || (k = k.$style) === null || k === void 0 ? void 0 : k.classes, R, C({}, L));
        },
        sx: function() {
          var b, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return R ? v._getOptionValue((b = a._$instances[r]) === null || b === void 0 || (b = b.$style) === null || b === void 0 ? void 0 : b.inlineStyles, k, C({}, L)) : void 0;
        }
      }, w), a.$instance = a._$instances[r], (g = (p = a.$instance)[d]) === null || g === void 0 || g.call(p, a, l, s, u), a["$".concat(r)] = a.$instance, v._hook(r, d, a, l, s, u), a.$pd || (a.$pd = {}), a.$pd[r] = C(C({}, (h = a.$pd) === null || h === void 0 ? void 0 : h[r]), {}, {
        name: r,
        instance: a._$instances[r]
      });
    }, n = function(d) {
      var a, l, s, u = d._$instances[r], f = u == null ? void 0 : u.watch, g = function(m) {
        var y, w = m.newValue, S = m.oldValue;
        return f == null || (y = f.config) === null || y === void 0 ? void 0 : y.call(u, w, S);
      }, p = function(m) {
        var y, w = m.newValue, S = m.oldValue;
        return f == null || (y = f["config.ripple"]) === null || y === void 0 ? void 0 : y.call(u, w, S);
      };
      u.$watchersCallback = {
        config: g,
        "config.ripple": p
      }, f == null || (a = f.config) === null || a === void 0 || a.call(u, u == null ? void 0 : u.$primevueConfig), Q.on("config:change", g), f == null || (l = f["config.ripple"]) === null || l === void 0 || l.call(u, u == null || (s = u.$primevueConfig) === null || s === void 0 ? void 0 : s.ripple), Q.on("config:ripple:change", p);
    }, i = function(d) {
      var a = d._$instances[r].$watchersCallback;
      a && (Q.off("config:change", a.config), Q.off("config:ripple:change", a["config.ripple"]), d._$instances[r].$watchersCallback = void 0);
    };
    return {
      created: function(d, a, l, s) {
        d.$pd || (d.$pd = {}), d.$pd[r] = {
          name: r,
          attrSelector: Ae("pd")
        }, t("created", d, a, l, s);
      },
      beforeMount: function(d, a, l, s) {
        var u;
        v._loadStyles((u = d.$pd[r]) === null || u === void 0 ? void 0 : u.instance, a, l), t("beforeMount", d, a, l, s), n(d);
      },
      mounted: function(d, a, l, s) {
        var u;
        v._loadStyles((u = d.$pd[r]) === null || u === void 0 ? void 0 : u.instance, a, l), t("mounted", d, a, l, s);
      },
      beforeUpdate: function(d, a, l, s) {
        t("beforeUpdate", d, a, l, s);
      },
      updated: function(d, a, l, s) {
        var u;
        v._loadStyles((u = d.$pd[r]) === null || u === void 0 ? void 0 : u.instance, a, l), t("updated", d, a, l, s);
      },
      beforeUnmount: function(d, a, l, s) {
        var u;
        i(d), v._removeThemeListeners((u = d.$pd[r]) === null || u === void 0 ? void 0 : u.instance), t("beforeUnmount", d, a, l, s);
      },
      unmounted: function(d, a, l, s) {
        var u;
        (u = d.$pd[r]) === null || u === void 0 || (u = u.instance) === null || u === void 0 || (u = u.scopedStyleEl) === null || u === void 0 || (u = u.value) === null || u === void 0 || u.remove(), t("unmounted", d, a, l, s);
      }
    };
  },
  extend: function() {
    var r = v._getMeta.apply(v, arguments), e = wr(r, 2), t = e[0], n = e[1];
    return C({
      extend: function() {
        var c = v._getMeta.apply(v, arguments), d = wr(c, 2), a = d[0], l = d[1];
        return v.extend(a, C(C(C({}, n), n == null ? void 0 : n.methods), l));
      }
    }, v._extend(t, n));
  }
}, xg = ({ dt: o }) => `
.p-ink {
    display: block;
    position: absolute;
    background: ${o("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`, Bg = {
  root: "p-ink"
}, _g = _.extend({
  name: "ripple-directive",
  style: xg,
  classes: Bg
}), Rg = v.extend({
  style: _g
});
function Bo(o) {
  "@babel/helpers - typeof";
  return Bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Bo(o);
}
function Pg(o) {
  return jg(o) || zg(o) || Tg(o) || Og();
}
function Og() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tg(o, r) {
  if (o) {
    if (typeof o == "string")
      return Ho(o, r);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Ho(o, r) : void 0;
  }
}
function zg(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null)
    return Array.from(o);
}
function jg(o) {
  if (Array.isArray(o))
    return Ho(o);
}
function Ho(o, r) {
  (r == null || r > o.length) && (r = o.length);
  for (var e = 0, t = Array(r); e < r; e++)
    t[e] = o[e];
  return t;
}
function Br(o, r, e) {
  return (r = Lg(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Lg(o) {
  var r = Ng(o, "string");
  return Bo(r) == "symbol" ? r : r + "";
}
function Ng(o, r) {
  if (Bo(o) != "object" || !o)
    return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (Bo(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var Dg = Rg.extend("ripple", {
  watch: {
    "config.ripple": function(r) {
      r ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(r) {
    this.remove(r);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(r) {
      r.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(r) {
      r.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(r) {
      var e = this.getInk(r);
      e || (e = Oe("span", Br(Br({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), r.appendChild(e), this.$el = e);
    },
    remove: function(r) {
      var e = this.getInk(r);
      e && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(r), e.removeEventListener("animationend", this.onAnimationEnd), e.remove());
    },
    onMouseDown: function(r) {
      var e = this, t = r.currentTarget, n = this.getInk(t);
      if (!(!n || getComputedStyle(n, null).display === "none")) {
        if (!this.isUnstyled() && Eo(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"), !nr(n) && !ar(n)) {
          var i = Math.max(_e(t), Le(t));
          n.style.height = i + "px", n.style.width = i + "px";
        }
        var c = je(t), d = r.pageX - c.left + document.body.scrollTop - ar(n) / 2, a = r.pageY - c.top + document.body.scrollLeft - nr(n) / 2;
        n.style.top = a + "px", n.style.left = d + "px", !this.isUnstyled() && Be(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          n && (!e.isUnstyled() && Eo(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(r) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && Eo(r.currentTarget, "p-ink-active"), r.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(r) {
      return r && r.children ? Pg(r.children).find(function(e) {
        return ze(e, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Ag = ({ dt: o }) => `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${o("button.primary.color")};
    background: ${o("button.primary.background")};
    border: 1px solid ${o("button.primary.border.color")};
    padding: ${o("button.padding.y")} ${o("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${o("button.transition.duration")}, color ${o("button.transition.duration")}, border-color ${o("button.transition.duration")},
            outline-color ${o("button.transition.duration")}, box-shadow ${o("button.transition.duration")};
    border-radius: ${o("button.border.radius")};
    outline-color: transparent;
    gap: ${o("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${o("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${o("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${o("button.sm.font.size")};
    padding: ${o("button.sm.padding.y")} ${o("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${o("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${o("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${o("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${o("button.lg.font.size")};
    padding: ${o("button.lg.padding.y")} ${o("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${o("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${o("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${o("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${o("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${o("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${o("button.primary.hover.background")};
    border: 1px solid ${o("button.primary.hover.border.color")};
    color: ${o("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${o("button.primary.active.background")};
    border: 1px solid ${o("button.primary.active.border.color")};
    color: ${o("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${o("button.primary.focus.ring.shadow")};
    outline: ${o("button.focus.ring.width")} ${o("button.focus.ring.style")} ${o("button.primary.focus.ring.color")};
    outline-offset: ${o("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${o("button.badge.size")};
    height: ${o("button.badge.size")};
    line-height: ${o("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${o("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${o("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${o("button.secondary.background")};
    border: 1px solid ${o("button.secondary.border.color")};
    color: ${o("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${o("button.secondary.hover.background")};
    border: 1px solid ${o("button.secondary.hover.border.color")};
    color: ${o("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${o("button.secondary.active.background")};
    border: 1px solid ${o("button.secondary.active.border.color")};
    color: ${o("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${o("button.secondary.focus.ring.color")};
    box-shadow: ${o("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${o("button.success.background")};
    border: 1px solid ${o("button.success.border.color")};
    color: ${o("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${o("button.success.hover.background")};
    border: 1px solid ${o("button.success.hover.border.color")};
    color: ${o("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${o("button.success.active.background")};
    border: 1px solid ${o("button.success.active.border.color")};
    color: ${o("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${o("button.success.focus.ring.color")};
    box-shadow: ${o("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${o("button.info.background")};
    border: 1px solid ${o("button.info.border.color")};
    color: ${o("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${o("button.info.hover.background")};
    border: 1px solid ${o("button.info.hover.border.color")};
    color: ${o("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${o("button.info.active.background")};
    border: 1px solid ${o("button.info.active.border.color")};
    color: ${o("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${o("button.info.focus.ring.color")};
    box-shadow: ${o("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${o("button.warn.background")};
    border: 1px solid ${o("button.warn.border.color")};
    color: ${o("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${o("button.warn.hover.background")};
    border: 1px solid ${o("button.warn.hover.border.color")};
    color: ${o("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${o("button.warn.active.background")};
    border: 1px solid ${o("button.warn.active.border.color")};
    color: ${o("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${o("button.warn.focus.ring.color")};
    box-shadow: ${o("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${o("button.help.background")};
    border: 1px solid ${o("button.help.border.color")};
    color: ${o("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${o("button.help.hover.background")};
    border: 1px solid ${o("button.help.hover.border.color")};
    color: ${o("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${o("button.help.active.background")};
    border: 1px solid ${o("button.help.active.border.color")};
    color: ${o("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${o("button.help.focus.ring.color")};
    box-shadow: ${o("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${o("button.danger.background")};
    border: 1px solid ${o("button.danger.border.color")};
    color: ${o("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${o("button.danger.hover.background")};
    border: 1px solid ${o("button.danger.hover.border.color")};
    color: ${o("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${o("button.danger.active.background")};
    border: 1px solid ${o("button.danger.active.border.color")};
    color: ${o("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${o("button.danger.focus.ring.color")};
    box-shadow: ${o("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${o("button.contrast.background")};
    border: 1px solid ${o("button.contrast.border.color")};
    color: ${o("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${o("button.contrast.hover.background")};
    border: 1px solid ${o("button.contrast.hover.border.color")};
    color: ${o("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${o("button.contrast.active.background")};
    border: 1px solid ${o("button.contrast.active.border.color")};
    color: ${o("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${o("button.contrast.focus.ring.color")};
    box-shadow: ${o("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${o("button.outlined.primary.border.color")};
    color: ${o("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${o("button.outlined.primary.hover.background")};
    border-color: ${o("button.outlined.primary.border.color")};
    color: ${o("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${o("button.outlined.primary.active.background")};
    border-color: ${o("button.outlined.primary.border.color")};
    color: ${o("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${o("button.outlined.secondary.border.color")};
    color: ${o("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${o("button.outlined.secondary.hover.background")};
    border-color: ${o("button.outlined.secondary.border.color")};
    color: ${o("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${o("button.outlined.secondary.active.background")};
    border-color: ${o("button.outlined.secondary.border.color")};
    color: ${o("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${o("button.outlined.success.border.color")};
    color: ${o("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${o("button.outlined.success.hover.background")};
    border-color: ${o("button.outlined.success.border.color")};
    color: ${o("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${o("button.outlined.success.active.background")};
    border-color: ${o("button.outlined.success.border.color")};
    color: ${o("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${o("button.outlined.info.border.color")};
    color: ${o("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${o("button.outlined.info.hover.background")};
    border-color: ${o("button.outlined.info.border.color")};
    color: ${o("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${o("button.outlined.info.active.background")};
    border-color: ${o("button.outlined.info.border.color")};
    color: ${o("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${o("button.outlined.warn.border.color")};
    color: ${o("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${o("button.outlined.warn.hover.background")};
    border-color: ${o("button.outlined.warn.border.color")};
    color: ${o("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${o("button.outlined.warn.active.background")};
    border-color: ${o("button.outlined.warn.border.color")};
    color: ${o("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${o("button.outlined.help.border.color")};
    color: ${o("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${o("button.outlined.help.hover.background")};
    border-color: ${o("button.outlined.help.border.color")};
    color: ${o("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${o("button.outlined.help.active.background")};
    border-color: ${o("button.outlined.help.border.color")};
    color: ${o("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${o("button.outlined.danger.border.color")};
    color: ${o("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${o("button.outlined.danger.hover.background")};
    border-color: ${o("button.outlined.danger.border.color")};
    color: ${o("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${o("button.outlined.danger.active.background")};
    border-color: ${o("button.outlined.danger.border.color")};
    color: ${o("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${o("button.outlined.contrast.border.color")};
    color: ${o("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${o("button.outlined.contrast.hover.background")};
    border-color: ${o("button.outlined.contrast.border.color")};
    color: ${o("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${o("button.outlined.contrast.active.background")};
    border-color: ${o("button.outlined.contrast.border.color")};
    color: ${o("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${o("button.outlined.plain.border.color")};
    color: ${o("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${o("button.outlined.plain.hover.background")};
    border-color: ${o("button.outlined.plain.border.color")};
    color: ${o("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${o("button.outlined.plain.active.background")};
    border-color: ${o("button.outlined.plain.border.color")};
    color: ${o("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${o("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${o("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${o("button.text.primary.active.background")};
    border-color: transparent;
    color: ${o("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${o("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${o("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${o("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${o("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${o("button.text.success.hover.background")};
    border-color: transparent;
    color: ${o("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${o("button.text.success.active.background")};
    border-color: transparent;
    color: ${o("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${o("button.text.info.hover.background")};
    border-color: transparent;
    color: ${o("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${o("button.text.info.active.background")};
    border-color: transparent;
    color: ${o("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${o("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${o("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${o("button.text.warn.active.background")};
    border-color: transparent;
    color: ${o("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${o("button.text.help.hover.background")};
    border-color: transparent;
    color: ${o("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${o("button.text.help.active.background")};
    border-color: transparent;
    color: ${o("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${o("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${o("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${o("button.text.danger.active.background")};
    border-color: transparent;
    color: ${o("button.text.danger.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${o("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${o("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${o("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${o("button.text.contrast.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${o("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${o("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${o("button.text.plain.active.background")};
    border-color: transparent;
    color: ${o("button.text.plain.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${o("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${o("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${o("button.link.active.color")};
}
`;
function _o(o) {
  "@babel/helpers - typeof";
  return _o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, _o(o);
}
function E(o, r, e) {
  return (r = Ig(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Ig(o) {
  var r = Eg(o, "string");
  return _o(r) == "symbol" ? r : r + "";
}
function Eg(o, r) {
  if (_o(o) != "object" || !o)
    return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (_o(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var Wg = {
  root: function(r) {
    var e = r.instance, t = r.props;
    return ["p-button p-component", E(E(E(E(E(E(E(E(E({
      "p-button-icon-only": e.hasIcon && !t.label && !t.badge,
      "p-button-vertical": (t.iconPos === "top" || t.iconPos === "bottom") && t.label,
      "p-button-loading": t.loading,
      "p-button-link": t.link || t.variant === "link"
    }, "p-button-".concat(t.severity), t.severity), "p-button-raised", t.raised), "p-button-rounded", t.rounded), "p-button-text", t.text || t.variant === "text"), "p-button-outlined", t.outlined || t.variant === "outlined"), "p-button-sm", t.size === "small"), "p-button-lg", t.size === "large"), "p-button-plain", t.plain), "p-button-fluid", e.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(r) {
    var e = r.props;
    return ["p-button-icon", E({}, "p-button-icon-".concat(e.iconPos), e.label)];
  },
  label: "p-button-label"
}, Mg = _.extend({
  name: "button",
  style: Ag,
  classes: Wg
}), Vg = {
  name: "BaseButton",
  extends: Ko,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPos: {
      type: String,
      default: "left"
    },
    iconClass: {
      type: [String, Object],
      default: null
    },
    badge: {
      type: String,
      default: null
    },
    badgeClass: {
      type: [String, Object],
      default: null
    },
    badgeSeverity: {
      type: String,
      default: "secondary"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    as: {
      type: [String, Object],
      default: "BUTTON"
    },
    asChild: {
      type: Boolean,
      default: !1
    },
    link: {
      type: Boolean,
      default: !1
    },
    severity: {
      type: String,
      default: null
    },
    raised: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    text: {
      type: Boolean,
      default: !1
    },
    outlined: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    plain: {
      type: Boolean,
      default: !1
    },
    fluid: {
      type: Boolean,
      default: null
    }
  },
  style: Mg,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function Ro(o) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ro(o);
}
function T(o, r, e) {
  return (r = Fg(r)) in o ? Object.defineProperty(o, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = e, o;
}
function Fg(o) {
  var r = Hg(o, "string");
  return Ro(r) == "symbol" ? r : r + "";
}
function Hg(o, r) {
  if (Ro(o) != "object" || !o)
    return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(o, r);
    if (Ro(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(o);
}
var Mr = {
  name: "Button",
  extends: Vg,
  inheritAttrs: !1,
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(r) {
      var e = r === "root" ? this.ptmi : this.ptm;
      return e(r, {
        context: {
          disabled: this.disabled
        }
      });
    }
  },
  computed: {
    disabled: function() {
      return this.$attrs.disabled || this.$attrs.disabled === "" || this.loading;
    },
    defaultAriaLabel: function() {
      return this.label ? this.label + (this.badge ? " " + this.badge : "") : this.$attrs.ariaLabel;
    },
    hasIcon: function() {
      return this.icon || this.$slots.icon;
    },
    attrs: function() {
      return z(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
    },
    asAttrs: function() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.disabled
      } : void 0;
    },
    a11yAttrs: function() {
      return {
        "aria-label": this.defaultAriaLabel,
        "data-pc-name": "button",
        "data-p-disabled": this.disabled,
        "data-p-severity": this.severity
      };
    },
    hasFluid: function() {
      return no(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return ho(T(T(T(T(T(T(T(T(T(T({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return ho(T(T({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return ho(T(T({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: Er,
    Badge: Wr
  },
  directives: {
    ripple: Dg
  }
}, Ug = ["data-p"], Yg = ["data-p"];
function Kg(o, r, e, t, n, i) {
  var c = Qo("SpinnerIcon"), d = Qo("Badge"), a = fe("ripple");
  return o.asChild ? bo(o.$slots, "default", {
    key: 1,
    class: Zo(o.cx("root")),
    a11yAttrs: i.a11yAttrs
  }) : ge((G(), Lo(be(o.as), z({
    key: 0,
    class: o.cx("root"),
    "data-p": i.dataP
  }, i.attrs), {
    default: pe(function() {
      return [bo(o.$slots, "default", {}, function() {
        return [o.loading ? bo(o.$slots, "loadingicon", z({
          key: 0,
          class: [o.cx("loadingIcon"), o.cx("icon")]
        }, o.ptm("loadingIcon")), function() {
          return [o.loadingIcon ? (G(), No("span", z({
            key: 0,
            class: [o.cx("loadingIcon"), o.cx("icon"), o.loadingIcon]
          }, o.ptm("loadingIcon")), null, 16)) : (G(), Lo(c, z({
            key: 1,
            class: [o.cx("loadingIcon"), o.cx("icon")],
            spin: ""
          }, o.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : bo(o.$slots, "icon", z({
          key: 1,
          class: [o.cx("icon")]
        }, o.ptm("icon")), function() {
          return [o.icon ? (G(), No("span", z({
            key: 0,
            class: [o.cx("icon"), o.icon, o.iconClass],
            "data-p": i.dataIconP
          }, o.ptm("icon")), null, 16, Ug)) : Jo("", !0)];
        }), _r("span", z({
          class: o.cx("label")
        }, o.ptm("label"), {
          "data-p": i.dataLabelP
        }), Rr(o.label || " "), 17, Yg), o.badge ? (G(), Lo(d, {
          key: 2,
          value: o.badge,
          class: Zo(o.badgeClass),
          severity: o.badgeSeverity,
          unstyled: o.unstyled,
          pt: o.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : Jo("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[a]]);
}
Mr.render = Kg;
const Xg = (o, r) => {
  const e = o.__vccOpts || o;
  for (const [t, n] of r)
    e[t] = n;
  return e;
}, Gg = {
  __name: "MiComponente",
  setup(o) {
    const r = () => {
      console.log("Button clicked!");
    };
    return (e, t) => (G(), Lo(me(Mr), {
      label: "Click me!",
      onClick: r
    }));
  }
}, qg = /* @__PURE__ */ Xg(Gg, [["__scopeId", "data-v-a10310ea"]]), Qg = { MiComponente: qg }, Zg = {
  /** Instala NvgUI como plugin */
  install(o, { preset: r = Qf, primevue: e = {} } = {}) {
    o._primevueInstalled || (o.use(yt, {
      theme: { preset: r },
      // genera el CSS del tema  :contentReference[oaicite:0]{index=0}
      ...e
      // le dejás pasar opciones personales
    }), o._primevueInstalled = !0), Object.entries(Qg).forEach(
      ([t, n]) => o.component(t, n)
    );
  }
};
export {
  qg as MiComponente,
  Zg as default
};
