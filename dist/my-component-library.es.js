import { ref as Nt, readonly as Ge, getCurrentInstance as Wt, onMounted as Ye, nextTick as Ze, watch as qe, useId as Xe, mergeProps as L, createElementBlock as Ct, openBlock as G, createElementVNode as ge, renderSlot as ut, createTextVNode as Je, toDisplayString as me, resolveComponent as Ht, resolveDirective as Qe, withDirectives as tn, createBlock as xt, resolveDynamicComponent as en, withCtx as nn, createCommentVNode as Ft, normalizeClass as Gt, unref as on } from "vue";
function ct(...t) {
  if (t) {
    let e = [];
    for (let n = 0; n < t.length; n++) {
      const o = t[n];
      if (!o)
        continue;
      const r = typeof o;
      if (r === "string" || r === "number")
        e.push(o);
      else if (r === "object") {
        const a = Array.isArray(o) ? [ct(...o)] : Object.entries(o).map(([l, s]) => s ? l : void 0);
        e = a.length ? e.concat(a.filter((l) => !!l)) : e;
      }
    }
    return e.join(" ").trim();
  }
}
function rn(t, e) {
  return t ? t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) : !1;
}
function an(t, e) {
  if (t && e) {
    const n = (o) => {
      rn(t, o) || (t.classList ? t.classList.add(o) : t.className += " " + o);
    };
    [e].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(n));
  }
}
function At(t, e) {
  if (t && e) {
    const n = (o) => {
      t.classList ? t.classList.remove(o) : t.className = t.className.replace(new RegExp("(^|\\b)" + o.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(n));
  }
}
function Yt(t) {
  return t ? Math.abs(t.scrollLeft) : 0;
}
function sn(t, e) {
  return t instanceof HTMLElement ? t.offsetWidth : 0;
}
function ln(t) {
  if (t) {
    let e = t.parentNode;
    return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
  }
  return null;
}
function un(t) {
  return !!(t !== null && typeof t < "u" && t.nodeName && ln(t));
}
function kt(t) {
  return typeof Element < "u" ? t instanceof Element : t !== null && typeof t == "object" && t.nodeType === 1 && typeof t.nodeName == "string";
}
function Tt(t, e = {}) {
  if (kt(t)) {
    const n = (o, r) => {
      var a, l;
      const s = (a = t == null ? void 0 : t.$attrs) != null && a[o] ? [(l = t == null ? void 0 : t.$attrs) == null ? void 0 : l[o]] : [];
      return [r].flat().reduce((i, u) => {
        if (u != null) {
          const d = typeof u;
          if (d === "string" || d === "number")
            i.push(u);
          else if (d === "object") {
            const c = Array.isArray(u) ? n(o, u) : Object.entries(u).map(([p, b]) => o === "style" && (b || b === 0) ? `${p.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${b}` : b ? p : void 0);
            i = c.length ? i.concat(c.filter((p) => !!p)) : i;
          }
        }
        return i;
      }, s);
    };
    Object.entries(e).forEach(([o, r]) => {
      if (r != null) {
        const a = o.match(/^on(.+)/);
        a ? t.addEventListener(a[1].toLowerCase(), r) : o === "p-bind" || o === "pBind" ? Tt(t, r) : (r = o === "class" ? [...new Set(n("class", r))].join(" ").trim() : o === "style" ? n("style", r).join(";").trim() : r, (t.$attrs = t.$attrs || {}) && (t.$attrs[o] = r), t.setAttribute(o, r));
      }
    });
  }
}
function dn(t, e = {}, ...n) {
  {
    const o = document.createElement(t);
    return Tt(o, e), o.append(...n), o;
  }
}
function cn(t, e) {
  return kt(t) ? t.matches(e) ? t : t.querySelector(e) : null;
}
function pn(t, e) {
  if (kt(t)) {
    const n = t.getAttribute(e);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function Zt(t) {
  if (t) {
    let e = t.offsetHeight;
    const n = getComputedStyle(t);
    return e -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), e;
  }
  return 0;
}
function bn(t) {
  if (t) {
    const e = t.getBoundingClientRect();
    return {
      top: e.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: e.left + (window.pageXOffset || Yt(document.documentElement) || Yt(document.body) || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function fn(t, e) {
  return t ? t.offsetHeight : 0;
}
function qt(t) {
  if (t) {
    let e = t.offsetWidth;
    const n = getComputedStyle(t);
    return e -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), e;
  }
  return 0;
}
function gn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function mn(t, e = "", n) {
  kt(t) && n !== null && n !== void 0 && t.setAttribute(e, n);
}
function he() {
  const t = /* @__PURE__ */ new Map();
  return {
    on(e, n) {
      let o = t.get(e);
      return o ? o.push(n) : o = [n], t.set(e, o), this;
    },
    off(e, n) {
      const o = t.get(e);
      return o && o.splice(o.indexOf(n) >>> 0, 1), this;
    },
    emit(e, n) {
      const o = t.get(e);
      o && o.forEach((r) => {
        r(n);
      });
    },
    clear() {
      t.clear();
    }
  };
}
function nt(t) {
  return t == null || t === "" || Array.isArray(t) && t.length === 0 || !(t instanceof Date) && typeof t == "object" && Object.keys(t).length === 0;
}
function Rt(t) {
  return typeof t == "function" && "call" in t && "apply" in t;
}
function P(t) {
  return !nt(t);
}
function Z(t, e = !0) {
  return t instanceof Object && t.constructor === Object && (e || Object.keys(t).length !== 0);
}
function E(t, ...e) {
  return Rt(t) ? t(...e) : t;
}
function N(t, e = !0) {
  return typeof t == "string" && (e || t !== "");
}
function R(t) {
  return N(t) ? t.replace(/(-|_)/g, "").toLowerCase() : t;
}
function zt(t, e = "", n = {}) {
  const o = R(e).split("."), r = o.shift();
  if (r) {
    if (Z(t)) {
      const a = Object.keys(t).find((l) => R(l) === r) || "";
      return zt(E(t[a], n), o.join("."), n);
    }
    return;
  }
  return E(t, n);
}
function Lt(t, e = !0) {
  return Array.isArray(t) && (e || t.length !== 0);
}
function hn(t) {
  return P(t) && !isNaN(t);
}
function M(t, e) {
  if (e) {
    const n = e.test(t);
    return e.lastIndex = 0, n;
  }
  return !1;
}
function pt(t) {
  return t && t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function vn(t) {
  return N(t, !1) ? t[0].toUpperCase() + t.slice(1) : t;
}
function ve(t) {
  return N(t) ? t.replace(/(_)/g, "-").replace(/[A-Z]/g, (e, n) => n === 0 ? e : "-" + e.toLowerCase()).toLowerCase() : t;
}
function Xt(t) {
  return N(t) ? t.replace(/[A-Z]/g, (e, n) => n === 0 ? e : "." + e.toLowerCase()).toLowerCase() : t;
}
var Pt = {};
function yn(t = "pui_id_") {
  return Object.hasOwn(Pt, t) || (Pt[t] = 0), Pt[t]++, `${t}${Pt[t]}`;
}
var $n = Object.defineProperty, _n = Object.defineProperties, Sn = Object.getOwnPropertyDescriptors, jt = Object.getOwnPropertySymbols, ye = Object.prototype.hasOwnProperty, $e = Object.prototype.propertyIsEnumerable, Jt = (t, e, n) => e in t ? $n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, I = (t, e) => {
  for (var n in e || (e = {}))
    ye.call(e, n) && Jt(t, n, e[n]);
  if (jt)
    for (var n of jt(e))
      $e.call(e, n) && Jt(t, n, e[n]);
  return t;
}, Et = (t, e) => _n(t, Sn(e)), U = (t, e) => {
  var n = {};
  for (var o in t)
    ye.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
  if (t != null && jt)
    for (var o of jt(t))
      e.indexOf(o) < 0 && $e.call(t, o) && (n[o] = t[o]);
  return n;
}, kn = he(), T = kn;
function Qt(t, e) {
  Lt(t) ? t.push(...e || []) : Z(t) && Object.assign(t, e);
}
function wn(t) {
  return Z(t) && t.hasOwnProperty("$value") && t.hasOwnProperty("$type") ? t.$value : t;
}
function Pn(t) {
  return t.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function It(t = "", e = "") {
  return Pn(`${N(t, !1) && N(e, !1) ? `${t}-` : t}${e}`);
}
function _e(t = "", e = "") {
  return `--${It(t, e)}`;
}
function On(t = "") {
  const e = (t.match(/{/g) || []).length, n = (t.match(/}/g) || []).length;
  return (e + n) % 2 !== 0;
}
function Se(t, e = "", n = "", o = [], r) {
  if (N(t)) {
    const a = /{([^}]*)}/g, l = t.trim();
    if (On(l))
      return;
    if (M(l, a)) {
      const s = l.replaceAll(a, (d) => {
        const p = d.replace(/{|}/g, "").split(".").filter((b) => !o.some((g) => M(b, g)));
        return `var(${_e(n, ve(p.join("-")))}${P(r) ? `, ${r}` : ""})`;
      }), i = /(\d+\s+[\+\-\*\/]\s+\d+)/g, u = /var\([^)]+\)/g;
      return M(s.replace(u, "0"), i) ? `calc(${s})` : s;
    }
    return l;
  } else if (hn(t))
    return t;
}
function xn(t, e, n) {
  N(e, !1) && t.push(`${e}:${n};`);
}
function st(t, e) {
  return t ? `${t}{${e}}` : "";
}
var bt = (...t) => Cn(O.getTheme(), ...t), Cn = (t = {}, e, n, o) => {
  if (e) {
    const { variable: r, options: a } = O.defaults || {}, { prefix: l, transform: s } = (t == null ? void 0 : t.options) || a || {}, u = M(e, /{([^}]*)}/g) ? e : `{${e}}`;
    return o === "value" || nt(o) && s === "strict" ? O.getTokenValue(e) : Se(u, void 0, l, [r.excludedKeyRegex], n);
  }
  return "";
};
function Tn(t, e = {}) {
  const n = O.defaults.variable, { prefix: o = n.prefix, selector: r = n.selector, excludedKeyRegex: a = n.excludedKeyRegex } = e, l = (u, d = "") => Object.entries(u).reduce(
    (c, [p, b]) => {
      const g = M(p, a) ? It(d) : It(d, ve(p)), y = wn(b);
      if (Z(y)) {
        const { variables: h, tokens: _ } = l(y, g);
        Qt(c.tokens, _), Qt(c.variables, h);
      } else
        c.tokens.push((o ? g.replace(`${o}-`, "") : g).replaceAll("-", ".")), xn(c.variables, _e(g), Se(y, g, o, [a]));
      return c;
    },
    { variables: [], tokens: [] }
  ), { variables: s, tokens: i } = l(t, o);
  return {
    value: s,
    tokens: i,
    declarations: s.join(""),
    css: st(r, s.join(""))
  };
}
var V = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(t) {
          return { type: "class", selector: t, matched: this.pattern.test(t.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(t) {
          return { type: "attr", selector: `:root${t}`, matched: this.pattern.test(t.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(t) {
          return { type: "media", selector: `${t}{:root{[CSS]}}`, matched: this.pattern.test(t.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(t) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(t.trim()) };
        }
      },
      custom: {
        resolve(t) {
          return { type: "custom", selector: t, matched: !0 };
        }
      }
    },
    resolve(t) {
      const e = Object.keys(this.rules).filter((n) => n !== "custom").map((n) => this.rules[n]);
      return [t].flat().map((n) => {
        var o;
        return (o = e.map((r) => r.resolve(n)).find((r) => r.matched)) != null ? o : this.rules.custom.resolve(n);
      });
    }
  },
  _toVariables(t, e) {
    return Tn(t, { prefix: e == null ? void 0 : e.prefix });
  },
  getCommon({ name: t = "", theme: e = {}, params: n, set: o, defaults: r }) {
    var a, l, s, i, u, d, c;
    const { preset: p, options: b } = e;
    let g, y, h, _, k, w, f;
    if (P(p) && b.transform !== "strict") {
      const { primitive: v, semantic: C, extend: A } = p, K = C || {}, { colorScheme: W } = K, q = U(K, ["colorScheme"]), H = A || {}, { colorScheme: X } = H, J = U(H, ["colorScheme"]), F = W || {}, { dark: Q } = F, ot = U(F, ["dark"]), tt = X || {}, { dark: rt } = tt, it = U(tt, ["dark"]), z = P(v) ? this._toVariables({ primitive: v }, b) : {}, D = P(q) ? this._toVariables({ semantic: q }, b) : {}, et = P(ot) ? this._toVariables({ light: ot }, b) : {}, wt = P(Q) ? this._toVariables({ dark: Q }, b) : {}, at = P(J) ? this._toVariables({ semantic: J }, b) : {}, Mt = P(it) ? this._toVariables({ light: it }, b) : {}, Kt = P(rt) ? this._toVariables({ dark: rt }, b) : {}, [Te, je] = [(a = z.declarations) != null ? a : "", z.tokens], [Le, Ne] = [(l = D.declarations) != null ? l : "", D.tokens || []], [Ae, Ee] = [(s = et.declarations) != null ? s : "", et.tokens || []], [Ve, Ie] = [(i = wt.declarations) != null ? i : "", wt.tokens || []], [De, Be] = [(u = at.declarations) != null ? u : "", at.tokens || []], [Re, ze] = [(d = Mt.declarations) != null ? d : "", Mt.tokens || []], [Ue, Me] = [(c = Kt.declarations) != null ? c : "", Kt.tokens || []];
      g = this.transformCSS(t, Te, "light", "variable", b, o, r), y = je;
      const Ke = this.transformCSS(t, `${Le}${Ae}`, "light", "variable", b, o, r), We = this.transformCSS(t, `${Ve}`, "dark", "variable", b, o, r);
      h = `${Ke}${We}`, _ = [.../* @__PURE__ */ new Set([...Ne, ...Ee, ...Ie])];
      const He = this.transformCSS(t, `${De}${Re}color-scheme:light`, "light", "variable", b, o, r), Fe = this.transformCSS(t, `${Ue}color-scheme:dark`, "dark", "variable", b, o, r);
      k = `${He}${Fe}`, w = [.../* @__PURE__ */ new Set([...Be, ...ze, ...Me])], f = E(p.css, { dt: bt });
    }
    return {
      primitive: {
        css: g,
        tokens: y
      },
      semantic: {
        css: h,
        tokens: _
      },
      global: {
        css: k,
        tokens: w
      },
      style: f
    };
  },
  getPreset({ name: t = "", preset: e = {}, options: n, params: o, set: r, defaults: a, selector: l }) {
    var s, i, u;
    let d, c, p;
    if (P(e) && n.transform !== "strict") {
      const b = t.replace("-directive", ""), g = e, { colorScheme: y, extend: h, css: _ } = g, k = U(g, ["colorScheme", "extend", "css"]), w = h || {}, { colorScheme: f } = w, v = U(w, ["colorScheme"]), C = y || {}, { dark: A } = C, K = U(C, ["dark"]), W = f || {}, { dark: q } = W, H = U(W, ["dark"]), X = P(k) ? this._toVariables({ [b]: I(I({}, k), v) }, n) : {}, J = P(K) ? this._toVariables({ [b]: I(I({}, K), H) }, n) : {}, F = P(A) ? this._toVariables({ [b]: I(I({}, A), q) }, n) : {}, [Q, ot] = [(s = X.declarations) != null ? s : "", X.tokens || []], [tt, rt] = [(i = J.declarations) != null ? i : "", J.tokens || []], [it, z] = [(u = F.declarations) != null ? u : "", F.tokens || []], D = this.transformCSS(b, `${Q}${tt}`, "light", "variable", n, r, a, l), et = this.transformCSS(b, it, "dark", "variable", n, r, a, l);
      d = `${D}${et}`, c = [.../* @__PURE__ */ new Set([...ot, ...rt, ...z])], p = E(_, { dt: bt });
    }
    return {
      css: d,
      tokens: c,
      style: p
    };
  },
  getPresetC({ name: t = "", theme: e = {}, params: n, set: o, defaults: r }) {
    var a;
    const { preset: l, options: s } = e, i = (a = l == null ? void 0 : l.components) == null ? void 0 : a[t];
    return this.getPreset({ name: t, preset: i, options: s, params: n, set: o, defaults: r });
  },
  // @deprecated - use getPresetC instead
  getPresetD({ name: t = "", theme: e = {}, params: n, set: o, defaults: r }) {
    var a, l;
    const s = t.replace("-directive", ""), { preset: i, options: u } = e, d = ((a = i == null ? void 0 : i.components) == null ? void 0 : a[s]) || ((l = i == null ? void 0 : i.directives) == null ? void 0 : l[s]);
    return this.getPreset({ name: s, preset: d, options: u, params: n, set: o, defaults: r });
  },
  applyDarkColorScheme(t) {
    return !(t.darkModeSelector === "none" || t.darkModeSelector === !1);
  },
  getColorSchemeOption(t, e) {
    var n;
    return this.applyDarkColorScheme(t) ? this.regex.resolve(t.darkModeSelector === !0 ? e.options.darkModeSelector : (n = t.darkModeSelector) != null ? n : e.options.darkModeSelector) : [];
  },
  getLayerOrder(t, e = {}, n, o) {
    const { cssLayer: r } = e;
    return r ? `@layer ${E(r.order || "primeui", n)}` : "";
  },
  getCommonStyleSheet({ name: t = "", theme: e = {}, params: n, props: o = {}, set: r, defaults: a }) {
    const l = this.getCommon({ name: t, theme: e, params: n, set: r, defaults: a }), s = Object.entries(o).reduce((i, [u, d]) => i.push(`${u}="${d}"`) && i, []).join(" ");
    return Object.entries(l || {}).reduce((i, [u, d]) => {
      if (d != null && d.css) {
        const c = pt(d == null ? void 0 : d.css), p = `${u}-variables`;
        i.push(`<style type="text/css" data-primevue-style-id="${p}" ${s}>${c}</style>`);
      }
      return i;
    }, []).join("");
  },
  getStyleSheet({ name: t = "", theme: e = {}, params: n, props: o = {}, set: r, defaults: a }) {
    var l;
    const s = { name: t, theme: e, params: n, set: r, defaults: a }, i = (l = t.includes("-directive") ? this.getPresetD(s) : this.getPresetC(s)) == null ? void 0 : l.css, u = Object.entries(o).reduce((d, [c, p]) => d.push(`${c}="${p}"`) && d, []).join(" ");
    return i ? `<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${pt(i)}</style>` : "";
  },
  createTokens(t = {}, e, n = "", o = "", r = {}) {
    return Object.entries(t).forEach(([a, l]) => {
      const s = M(a, e.variable.excludedKeyRegex) ? n : n ? `${n}.${Xt(a)}` : Xt(a), i = o ? `${o}.${a}` : a;
      Z(l) ? this.createTokens(l, e, s, i, r) : (r[s] || (r[s] = {
        paths: [],
        computed(u, d = {}) {
          var c, p;
          return this.paths.length === 1 ? (c = this.paths[0]) == null ? void 0 : c.computed(this.paths[0].scheme, d.binding) : u && u !== "none" ? (p = this.paths.find((b) => b.scheme === u)) == null ? void 0 : p.computed(u, d.binding) : this.paths.map((b) => b.computed(b.scheme, d[b.scheme]));
        }
      }), r[s].paths.push({
        path: i,
        value: l,
        scheme: i.includes("colorScheme.light") ? "light" : i.includes("colorScheme.dark") ? "dark" : "none",
        computed(u, d = {}) {
          const c = /{([^}]*)}/g;
          let p = l;
          if (d.name = this.path, d.binding || (d.binding = {}), M(l, c)) {
            const g = l.trim().replaceAll(c, (_) => {
              var k;
              const w = _.replace(/{|}/g, ""), f = (k = r[w]) == null ? void 0 : k.computed(u, d);
              return Lt(f) && f.length === 2 ? `light-dark(${f[0].value},${f[1].value})` : f == null ? void 0 : f.value;
            }), y = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, h = /var\([^)]+\)/g;
            p = M(g.replace(h, "0"), y) ? `calc(${g})` : g;
          }
          return nt(d.binding) && delete d.binding, {
            colorScheme: u,
            path: this.path,
            paths: d,
            value: p.includes("undefined") ? void 0 : p
          };
        }
      }));
    }), r;
  },
  getTokenValue(t, e, n) {
    var o;
    const a = ((i) => i.split(".").filter((d) => !M(d.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(e), l = e.includes("colorScheme.light") ? "light" : e.includes("colorScheme.dark") ? "dark" : void 0, s = [(o = t[a]) == null ? void 0 : o.computed(l)].flat().filter((i) => i);
    return s.length === 1 ? s[0].value : s.reduce((i = {}, u) => {
      const d = u, { colorScheme: c } = d, p = U(d, ["colorScheme"]);
      return i[c] = p, i;
    }, void 0);
  },
  getSelectorRule(t, e, n, o) {
    return n === "class" || n === "attr" ? st(P(e) ? `${t}${e},${t} ${e}` : t, o) : st(t, P(e) ? st(e, o) : o);
  },
  transformCSS(t, e, n, o, r = {}, a, l, s) {
    if (P(e)) {
      const { cssLayer: i } = r;
      if (o !== "style") {
        const u = this.getColorSchemeOption(r, l);
        e = n === "dark" ? u.reduce((d, { type: c, selector: p }) => (P(p) && (d += p.includes("[CSS]") ? p.replace("[CSS]", e) : this.getSelectorRule(p, s, c, e)), d), "") : st(s ?? ":root", e);
      }
      if (i) {
        const u = {
          name: "primeui"
        };
        Z(i) && (u.name = E(i.name, { name: t, type: o })), P(u.name) && (e = st(`@layer ${u.name}`, e), a == null || a.layerNames(u.name));
      }
      return e;
    }
    return "";
  }
}, O = {
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
  update(t = {}) {
    const { theme: e } = t;
    e && (this._theme = Et(I({}, e), {
      options: I(I({}, this.defaults.options), e.options)
    }), this._tokens = V.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var t;
    return ((t = this.theme) == null ? void 0 : t.preset) || {};
  },
  get options() {
    var t;
    return ((t = this.theme) == null ? void 0 : t.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(t) {
    this.update({ theme: t }), T.emit("theme:change", t);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(t) {
    this._theme = Et(I({}, this.theme), { preset: t }), this._tokens = V.createTokens(t, this.defaults), this.clearLoadedStyleNames(), T.emit("preset:change", t), T.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(t) {
    this._theme = Et(I({}, this.theme), { options: t }), this.clearLoadedStyleNames(), T.emit("options:change", t), T.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(t) {
    this._layerNames.add(t);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(t) {
    return this._loadedStyleNames.has(t);
  },
  setLoadedStyleName(t) {
    this._loadedStyleNames.add(t);
  },
  deleteLoadedStyleName(t) {
    this._loadedStyleNames.delete(t);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(t) {
    return V.getTokenValue(this.tokens, t, this.defaults);
  },
  getCommon(t = "", e) {
    return V.getCommon({ name: t, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(t = "", e) {
    const n = { name: t, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return V.getPresetC(n);
  },
  // @deprecated - use getComponent instead
  getDirective(t = "", e) {
    const n = { name: t, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return V.getPresetD(n);
  },
  getCustomPreset(t = "", e, n, o) {
    const r = { name: t, preset: e, options: this.options, selector: n, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return V.getPreset(r);
  },
  getLayerOrderCSS(t = "") {
    return V.getLayerOrder(t, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(t = "", e, n = "style", o) {
    return V.transformCSS(t, e, o, n, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(t = "", e, n = {}) {
    return V.getCommonStyleSheet({ name: t, theme: this.theme, params: e, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(t, e, n = {}) {
    return V.getStyleSheet({ name: t, theme: this.theme, params: e, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(t) {
    this._loadingStyles.add(t);
  },
  onStyleUpdated(t) {
    this._loadingStyles.add(t);
  },
  onStyleLoaded(t, { name: e }) {
    this._loadingStyles.size && (this._loadingStyles.delete(e), T.emit(`theme:${e}:load`, t), !this._loadingStyles.size && T.emit("theme:load"));
  }
}, Y = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName: function(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName: function(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
}, jn = ({ dt: t }) => `
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
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}
`;
function ft(t) {
  "@babel/helpers - typeof";
  return ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ft(t);
}
function te(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function ee(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? te(Object(n), !0).forEach(function(o) {
      Ln(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Ln(t, e, n) {
  return (e = Nn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Nn(t) {
  var e = An(t, "string");
  return ft(e) == "symbol" ? e : e + "";
}
function An(t, e) {
  if (ft(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (ft(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function En(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  Wt() && Wt().components ? Ye(t) : e ? t() : Ze(t);
}
var Vn = 0;
function In(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Nt(!1), o = Nt(t), r = Nt(null), a = gn() ? window.document : void 0, l = e.document, s = l === void 0 ? a : l, i = e.immediate, u = i === void 0 ? !0 : i, d = e.manual, c = d === void 0 ? !1 : d, p = e.name, b = p === void 0 ? "style_".concat(++Vn) : p, g = e.id, y = g === void 0 ? void 0 : g, h = e.media, _ = h === void 0 ? void 0 : h, k = e.nonce, w = k === void 0 ? void 0 : k, f = e.first, v = f === void 0 ? !1 : f, C = e.onMounted, A = C === void 0 ? void 0 : C, K = e.onUpdated, W = K === void 0 ? void 0 : K, q = e.onLoad, H = q === void 0 ? void 0 : q, X = e.props, J = X === void 0 ? {} : X, F = function() {
  }, Q = function(rt) {
    var it = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s) {
      var z = ee(ee({}, J), it), D = z.name || b, et = z.id || y, wt = z.nonce || w;
      r.value = s.querySelector('style[data-primevue-style-id="'.concat(D, '"]')) || s.getElementById(et) || s.createElement("style"), r.value.isConnected || (o.value = rt || t, Tt(r.value, {
        type: "text/css",
        id: et,
        media: _,
        nonce: wt
      }), v ? s.head.prepend(r.value) : s.head.appendChild(r.value), mn(r.value, "data-primevue-style-id", D), Tt(r.value, z), r.value.onload = function(at) {
        return H == null ? void 0 : H(at, {
          name: D
        });
      }, A == null || A(D)), !n.value && (F = qe(o, function(at) {
        r.value.textContent = at, W == null || W(D);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, ot = function() {
    !s || !n.value || (F(), un(r.value) && s.head.removeChild(r.value), n.value = !1, r.value = null);
  };
  return u && !c && En(Q), {
    id: y,
    name: b,
    el: r,
    css: o,
    unload: ot,
    load: Q,
    isLoaded: Ge(n)
  };
}
function gt(t) {
  "@babel/helpers - typeof";
  return gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, gt(t);
}
function ne(t, e) {
  return zn(t) || Rn(t, e) || Bn(t, e) || Dn();
}
function Dn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bn(t, e) {
  if (t) {
    if (typeof t == "string") return oe(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? oe(t, e) : void 0;
  }
}
function oe(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function Rn(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, r, a, l, s = [], i = !0, u = !1;
    try {
      if (a = (n = n.call(t)).next, e !== 0) for (; !(i = (o = a.call(n)).done) && (s.push(o.value), s.length !== e); i = !0) ;
    } catch (d) {
      u = !0, r = d;
    } finally {
      try {
        if (!i && n.return != null && (l = n.return(), Object(l) !== l)) return;
      } finally {
        if (u) throw r;
      }
    }
    return s;
  }
}
function zn(t) {
  if (Array.isArray(t)) return t;
}
function re(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Vt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? re(Object(n), !0).forEach(function(o) {
      Un(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Un(t, e, n) {
  return (e = Mn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Mn(t) {
  var e = Kn(t, "string");
  return gt(e) == "symbol" ? e : e + "";
}
function Kn(t, e) {
  if (gt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (gt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Wn = function(e) {
  var n = e.dt;
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
    padding-right: `.concat(n("scrollbar.width"), `;
}
`);
}, Hn = {}, Fn = {}, x = {
  name: "base",
  css: Wn,
  style: jn,
  classes: Hn,
  inlineStyles: Fn,
  load: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(a) {
      return a;
    }, r = o(E(e, {
      dt: bt
    }));
    return P(r) ? In(pt(r), Vt({
      name: this.name
    }, n)) : {};
  },
  loadCSS: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, e);
  },
  loadStyle: function() {
    var e = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, n, function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return O.transformCSS(n.name || e.name, "".concat(r).concat(o));
    });
  },
  getCommonTheme: function(e) {
    return O.getCommon(this.name, e);
  },
  getComponentTheme: function(e) {
    return O.getComponent(this.name, e);
  },
  getDirectiveTheme: function(e) {
    return O.getDirective(this.name, e);
  },
  getPresetTheme: function(e, n, o) {
    return O.getCustomPreset(this.name, e, n, o);
  },
  getLayerOrderThemeCSS: function() {
    return O.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var o = E(this.css, {
        dt: bt
      }) || "", r = pt("".concat(o).concat(e)), a = Object.entries(n).reduce(function(l, s) {
        var i = ne(s, 2), u = i[0], d = i[1];
        return l.push("".concat(u, '="').concat(d, '"')) && l;
      }, []).join(" ");
      return P(r) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(a, ">").concat(r, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return O.getCommonStyleSheet(this.name, e, n);
  },
  getThemeStyleSheet: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = [O.getStyleSheet(this.name, e, n)];
    if (this.style) {
      var r = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), a = E(this.style, {
        dt: bt
      }), l = pt(O.transformCSS(r, a)), s = Object.entries(n).reduce(function(i, u) {
        var d = ne(u, 2), c = d[0], p = d[1];
        return i.push("".concat(c, '="').concat(p, '"')) && i;
      }, []).join(" ");
      P(l) && o.push('<style type="text/css" data-primevue-style-id="'.concat(r, '" ').concat(s, ">").concat(l, "</style>"));
    }
    return o.join("");
  },
  extend: function(e) {
    return Vt(Vt({}, this), {}, {
      css: void 0,
      style: void 0
    }, e);
  }
};
function Gn() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", e = Xe();
  return "".concat(t).concat(e.replace("v-", "").replaceAll("-", "_"));
}
var ie = x.extend({
  name: "common"
});
function mt(t) {
  "@babel/helpers - typeof";
  return mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, mt(t);
}
function Yn(t) {
  return Pe(t) || Zn(t) || we(t) || ke();
}
function Zn(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function lt(t, e) {
  return Pe(t) || qn(t, e) || we(t, e) || ke();
}
function ke() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function we(t, e) {
  if (t) {
    if (typeof t == "string") return ae(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ae(t, e) : void 0;
  }
}
function ae(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function qn(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, r, a, l, s = [], i = !0, u = !1;
    try {
      if (a = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        i = !1;
      } else for (; !(i = (o = a.call(n)).done) && (s.push(o.value), s.length !== e); i = !0) ;
    } catch (d) {
      u = !0, r = d;
    } finally {
      try {
        if (!i && n.return != null && (l = n.return(), Object(l) !== l)) return;
      } finally {
        if (u) throw r;
      }
    }
    return s;
  }
}
function Pe(t) {
  if (Array.isArray(t)) return t;
}
function se(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function $(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? se(Object(n), !0).forEach(function(o) {
      dt(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function dt(t, e, n) {
  return (e = Xn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Xn(t) {
  var e = Jn(t, "string");
  return mt(e) == "symbol" ? e : e + "";
}
function Jn(t, e) {
  if (mt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (mt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Ut = {
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
      handler: function(e) {
        T.off("theme:change", this._loadCoreStyles), e || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(e, n) {
        var o = this;
        T.off("theme:change", this._themeScopedListener), e ? (this._loadScopedThemeStyles(e), this._themeScopedListener = function() {
          return o._loadScopedThemeStyles(e);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var e, n, o, r, a, l, s, i, u, d, c, p = (e = this.pt) === null || e === void 0 ? void 0 : e._usept, b = p ? (n = this.pt) === null || n === void 0 || (n = n.originalValue) === null || n === void 0 ? void 0 : n[this.$.type.name] : void 0, g = p ? (o = this.pt) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o[this.$.type.name] : this.pt;
    (r = g || b) === null || r === void 0 || (r = r.hooks) === null || r === void 0 || (a = r.onBeforeCreate) === null || a === void 0 || a.call(r);
    var y = (l = this.$primevueConfig) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l._usept, h = y ? (s = this.$primevue) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s.originalValue : void 0, _ = y ? (i = this.$primevue) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.pt) === null || i === void 0 ? void 0 : i.value : (u = this.$primevue) === null || u === void 0 || (u = u.config) === null || u === void 0 ? void 0 : u.pt;
    (d = _ || h) === null || d === void 0 || (d = d[this.$.type.name]) === null || d === void 0 || (d = d.hooks) === null || d === void 0 || (c = d.onBeforeCreate) === null || c === void 0 || c.call(d), this.$attrSelector = Gn(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var e;
    this.rootEl = cn(kt(this.$el) ? this.$el : (e = this.$el) === null || e === void 0 ? void 0 : e.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = $({
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
    _hook: function(e) {
      if (!this.$options.hostName) {
        var n = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(e)), o = this._useDefaultPT(this._getOptionValue, "hooks.".concat(e));
        n == null || n(), o == null || o();
      }
    },
    _mergeProps: function(e) {
      for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        o[r - 1] = arguments[r];
      return Rt(e) ? e.apply(void 0, o) : L.apply(void 0, o);
    },
    _load: function() {
      Y.isStyleNameLoaded("base") || (x.loadCSS(this.$styleOptions), this._loadGlobalStyles(), Y.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var e, n;
      !Y.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (n = this.$style) !== null && n !== void 0 && n.name && (ie.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), Y.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var e = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      P(e) && x.load(e, $({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var e, n;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!O.isStyleNameLoaded("common")) {
          var o, r, a = ((o = this.$style) === null || o === void 0 || (r = o.getCommonTheme) === null || r === void 0 ? void 0 : r.call(o)) || {}, l = a.primitive, s = a.semantic, i = a.global, u = a.style;
          x.load(l == null ? void 0 : l.css, $({
            name: "primitive-variables"
          }, this.$styleOptions)), x.load(s == null ? void 0 : s.css, $({
            name: "semantic-variables"
          }, this.$styleOptions)), x.load(i == null ? void 0 : i.css, $({
            name: "global-variables"
          }, this.$styleOptions)), x.loadStyle($({
            name: "global-style"
          }, this.$styleOptions), u), O.setLoadedStyleName("common");
        }
        if (!O.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (n = this.$style) !== null && n !== void 0 && n.name) {
          var d, c, p, b, g = ((d = this.$style) === null || d === void 0 || (c = d.getComponentTheme) === null || c === void 0 ? void 0 : c.call(d)) || {}, y = g.css, h = g.style;
          (p = this.$style) === null || p === void 0 || p.load(y, $({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (b = this.$style) === null || b === void 0 || b.loadStyle($({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), h), O.setLoadedStyleName(this.$style.name);
        }
        if (!O.isStyleNameLoaded("layer-order")) {
          var _, k, w = (_ = this.$style) === null || _ === void 0 || (k = _.getLayerOrderThemeCSS) === null || k === void 0 ? void 0 : k.call(_);
          x.load(w, $({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), O.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(e) {
      var n, o, r, a = ((n = this.$style) === null || n === void 0 || (o = n.getPresetTheme) === null || o === void 0 ? void 0 : o.call(n, e, "[".concat(this.$attrSelector, "]"))) || {}, l = a.css, s = (r = this.$style) === null || r === void 0 ? void 0 : r.load(l, $({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = s.el;
    },
    _unloadScopedThemeStyles: function() {
      var e;
      (e = this.scopedStyleEl) === null || e === void 0 || (e = e.value) === null || e === void 0 || e.remove();
    },
    _themeChangeListener: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      Y.clearLoadedStyleNames(), T.on("theme:change", e);
    },
    _removeThemeListeners: function() {
      T.off("theme:change", this._loadCoreStyles), T.off("theme:change", this._load), T.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(e) {
      return e ? this.$options.hostName ? e.$.type.name === this.$options.hostName ? e : this._getHostInstance(e.$parentInstance) : e.$parentInstance : void 0;
    },
    _getPropValue: function(e) {
      var n;
      return this[e] || ((n = this._getHostInstance(this)) === null || n === void 0 ? void 0 : n[e]);
    },
    _getOptionValue: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return zt(e, n, o);
    },
    _getPTValue: function() {
      var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, l = /./g.test(o) && !!r[o.split(".")[0]], s = this._getPropValue("ptOptions") || ((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.ptOptions) || {}, i = s.mergeSections, u = i === void 0 ? !0 : i, d = s.mergeProps, c = d === void 0 ? !1 : d, p = a ? l ? this._useGlobalPT(this._getPTClassValue, o, r) : this._useDefaultPT(this._getPTClassValue, o, r) : void 0, b = l ? void 0 : this._getPTSelf(n, this._getPTClassValue, o, $($({}, r), {}, {
        global: p || {}
      })), g = this._getPTDatasets(o);
      return u || !u && b ? c ? this._mergeProps(c, p, b, g) : $($($({}, p), b), g) : $($({}, b), g);
    },
    _getPTSelf: function() {
      for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        o[r - 1] = arguments[r];
      return L(
        this._usePT.apply(this, [this._getPT(e, this.$name)].concat(o)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(o))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = "data-pc-", a = o === "root" && P((e = this.pt) === null || e === void 0 ? void 0 : e["data-pc-section"]);
      return o !== "transition" && $($({}, o === "root" && $($(dt({}, "".concat(r, "name"), R(a ? (n = this.pt) === null || n === void 0 ? void 0 : n["data-pc-section"] : this.$.type.name)), a && dt({}, "".concat(r, "extend"), R(this.$.type.name))), {}, dt({}, "".concat(this.$attrSelector), ""))), {}, dt({}, "".concat(r, "section"), R(o)));
    },
    _getPTClassValue: function() {
      var e = this._getOptionValue.apply(this, arguments);
      return N(e) || Lt(e) ? {
        class: e
      } : e;
    },
    _getPT: function(e) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, a = function(s) {
        var i, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, d = r ? r(s) : s, c = R(o), p = R(n.$name);
        return (i = u ? c !== p ? d == null ? void 0 : d[c] : void 0 : d == null ? void 0 : d[c]) !== null && i !== void 0 ? i : d;
      };
      return e != null && e.hasOwnProperty("_usept") ? {
        _usept: e._usept,
        originalValue: a(e.originalValue),
        value: a(e.value)
      } : a(e, !0);
    },
    _usePT: function(e, n, o, r) {
      var a = function(y) {
        return n(y, o, r);
      };
      if (e != null && e.hasOwnProperty("_usept")) {
        var l, s = e._usept || ((l = this.$primevueConfig) === null || l === void 0 ? void 0 : l.ptOptions) || {}, i = s.mergeSections, u = i === void 0 ? !0 : i, d = s.mergeProps, c = d === void 0 ? !1 : d, p = a(e.originalValue), b = a(e.value);
        return p === void 0 && b === void 0 ? void 0 : N(b) ? b : N(p) ? p : u || !u && b ? c ? this._mergeProps(c, p, b) : $($({}, p), b) : b;
      }
      return a(e);
    },
    _useGlobalPT: function(e, n, o) {
      return this._usePT(this.globalPT, e, n, o);
    },
    _useDefaultPT: function(e, n, o) {
      return this._usePT(this.defaultPT, e, n, o);
    },
    ptm: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, e, $($({}, this.$params), n));
    },
    ptmi: function() {
      var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = L(this.$_attrsWithoutPT, this.ptm(n, o));
      return r != null && r.hasOwnProperty("id") && ((e = r.id) !== null && e !== void 0 || (r.id = this.$id)), r;
    },
    ptmo: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(e, n, $({
        instance: this
      }, o), !1);
    },
    cx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, e, $($({}, this.$params), n));
    },
    sx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (n) {
        var r = this._getOptionValue(this.$style.inlineStyles, e, $($({}, this.$params), o)), a = this._getOptionValue(ie.inlineStyles, e, $($({}, this.$params), o));
        return [a, r];
      }
    }
  },
  computed: {
    globalPT: function() {
      var e, n = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(o) {
        return E(o, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var e, n = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(o) {
        return n._getOptionValue(o, n.$name, $({}, n.$params)) || E(o, $({}, n.$params));
      });
    },
    isUnstyled: function() {
      var e;
      return this.unstyled !== void 0 ? this.unstyled : (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.unstyled;
    },
    $id: function() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function() {
      var e, n = Object.keys(((e = this.$.vnode) === null || e === void 0 ? void 0 : e.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(o) {
        var r = lt(o, 1), a = r[0];
        return n == null ? void 0 : n.includes(a);
      }));
    },
    $theme: function() {
      var e;
      return (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.theme;
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
      var e;
      return {
        nonce: (e = this.$primevueConfig) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce
      };
    },
    $primevueConfig: function() {
      var e;
      return (e = this.$primevue) === null || e === void 0 ? void 0 : e.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var e = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: e,
          props: e == null ? void 0 : e.$props,
          state: e == null ? void 0 : e.$data,
          attrs: e == null ? void 0 : e.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var n = lt(e, 1), o = n[0];
        return o == null ? void 0 : o.startsWith("pt:");
      }).reduce(function(e, n) {
        var o = lt(n, 2), r = o[0], a = o[1], l = r.split(":"), s = Yn(l), i = s.slice(1);
        return i == null || i.reduce(function(u, d, c, p) {
          return !u[d] && (u[d] = c === p.length - 1 ? a : {}), u[d];
        }, e), e;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var n = lt(e, 1), o = n[0];
        return !(o != null && o.startsWith("pt:"));
      }).reduce(function(e, n) {
        var o = lt(n, 2), r = o[0], a = o[1];
        return e[r] = a, e;
      }, {});
    }
  }
}, Qn = `
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
`, to = x.extend({
  name: "baseicon",
  css: Qn
});
function ht(t) {
  "@babel/helpers - typeof";
  return ht = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ht(t);
}
function le(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function ue(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? le(Object(n), !0).forEach(function(o) {
      eo(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function eo(t, e, n) {
  return (e = no(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function no(t) {
  var e = oo(t, "string");
  return ht(e) == "symbol" ? e : e + "";
}
function oo(t, e) {
  if (ht(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (ht(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ro = {
  name: "BaseIcon",
  extends: Ut,
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
  style: to,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var e = nt(this.label);
      return ue(ue({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: e ? void 0 : "img",
        "aria-label": e ? void 0 : this.label,
        "aria-hidden": e
      });
    }
  }
}, Oe = {
  name: "SpinnerIcon",
  extends: ro
};
function io(t, e, n, o, r, a) {
  return G(), Ct("svg", L({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), e[0] || (e[0] = [ge("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Oe.render = io;
var ao = ({ dt: t }) => `
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    align-items: center;
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
}
`, so = {
  root: function(e) {
    var n = e.props, o = e.instance;
    return ["p-badge p-component", {
      "p-badge-circle": P(n.value) && String(n.value).length === 1,
      "p-badge-dot": nt(n.value) && !o.$slots.default,
      "p-badge-sm": n.size === "small",
      "p-badge-lg": n.size === "large",
      "p-badge-xl": n.size === "xlarge",
      "p-badge-info": n.severity === "info",
      "p-badge-success": n.severity === "success",
      "p-badge-warn": n.severity === "warn",
      "p-badge-danger": n.severity === "danger",
      "p-badge-secondary": n.severity === "secondary",
      "p-badge-contrast": n.severity === "contrast"
    }];
  }
}, lo = x.extend({
  name: "badge",
  style: ao,
  classes: so
}), uo = {
  name: "BaseBadge",
  extends: Ut,
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
  style: lo,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function vt(t) {
  "@babel/helpers - typeof";
  return vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, vt(t);
}
function de(t, e, n) {
  return (e = co(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function co(t) {
  var e = po(t, "string");
  return vt(e) == "symbol" ? e : e + "";
}
function po(t, e) {
  if (vt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (vt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var xe = {
  name: "Badge",
  extends: uo,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return ct(de(de({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, bo = ["data-p"];
function fo(t, e, n, o, r, a) {
  return G(), Ct("span", L({
    class: t.cx("root"),
    "data-p": a.dataP
  }, t.ptmi("root")), [ut(t.$slots, "default", {}, function() {
    return [Je(me(t.value), 1)];
  })], 16, bo);
}
xe.render = fo;
var Ot = he();
function yt(t) {
  "@babel/helpers - typeof";
  return yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, yt(t);
}
function ce(t, e) {
  return vo(t) || ho(t, e) || mo(t, e) || go();
}
function go() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mo(t, e) {
  if (t) {
    if (typeof t == "string") return pe(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pe(t, e) : void 0;
  }
}
function pe(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function ho(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, r, a, l, s = [], i = !0, u = !1;
    try {
      if (a = (n = n.call(t)).next, e !== 0) for (; !(i = (o = a.call(n)).done) && (s.push(o.value), s.length !== e); i = !0) ;
    } catch (d) {
      u = !0, r = d;
    } finally {
      try {
        if (!i && n.return != null && (l = n.return(), Object(l) !== l)) return;
      } finally {
        if (u) throw r;
      }
    }
    return s;
  }
}
function vo(t) {
  if (Array.isArray(t)) return t;
}
function be(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function S(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? be(Object(n), !0).forEach(function(o) {
      Dt(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : be(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Dt(t, e, n) {
  return (e = yo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function yo(t) {
  var e = $o(t, "string");
  return yt(e) == "symbol" ? e : e + "";
}
function $o(t, e) {
  if (yt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (yt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var m = {
  _getMeta: function() {
    return [Z(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], E(Z(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(e, n) {
    var o, r, a;
    return (o = (e == null || (r = e.instance) === null || r === void 0 ? void 0 : r.$primevue) || (n == null || (a = n.ctx) === null || a === void 0 || (a = a.appContext) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.globalProperties) === null || a === void 0 ? void 0 : a.$primevue)) === null || o === void 0 ? void 0 : o.config;
  },
  _getOptionValue: zt,
  _getPTValue: function() {
    var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = function() {
      var k = m._getOptionValue.apply(m, arguments);
      return N(k) || Lt(k) ? {
        class: k
      } : k;
    }, u = ((e = o.binding) === null || e === void 0 || (e = e.value) === null || e === void 0 ? void 0 : e.ptOptions) || ((n = o.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, d = u.mergeSections, c = d === void 0 ? !0 : d, p = u.mergeProps, b = p === void 0 ? !1 : p, g = s ? m._useDefaultPT(o, o.defaultPT(), i, a, l) : void 0, y = m._usePT(o, m._getPT(r, o.$name), i, a, S(S({}, l), {}, {
      global: g || {}
    })), h = m._getPTDatasets(o, a);
    return c || !c && y ? b ? m._mergeProps(o, b, g, y, h) : S(S(S({}, g), y), h) : S(S({}, y), h);
  },
  _getPTDatasets: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = "data-pc-";
    return S(S({}, n === "root" && Dt({}, "".concat(o, "name"), R(e.$name))), {}, Dt({}, "".concat(o, "section"), R(n)));
  },
  _getPT: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, r = function(l) {
      var s, i = o ? o(l) : l, u = R(n);
      return (s = i == null ? void 0 : i[u]) !== null && s !== void 0 ? s : i;
    };
    return e && Object.hasOwn(e, "_usept") ? {
      _usept: e._usept,
      originalValue: r(e.originalValue),
      value: r(e.value)
    } : r(e);
  },
  _usePT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, a = arguments.length > 4 ? arguments[4] : void 0, l = function(h) {
      return o(h, r, a);
    };
    if (n && Object.hasOwn(n, "_usept")) {
      var s, i = n._usept || ((s = e.$primevueConfig) === null || s === void 0 ? void 0 : s.ptOptions) || {}, u = i.mergeSections, d = u === void 0 ? !0 : u, c = i.mergeProps, p = c === void 0 ? !1 : c, b = l(n.originalValue), g = l(n.value);
      return b === void 0 && g === void 0 ? void 0 : N(g) ? g : N(b) ? b : d || !d && g ? p ? m._mergeProps(e, p, b, g) : S(S({}, b), g) : g;
    }
    return l(n);
  },
  _useDefaultPT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, a = arguments.length > 4 ? arguments[4] : void 0;
    return m._usePT(e, n, o, r, a);
  },
  _loadStyles: function() {
    var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, a = m._getConfig(o, r), l = {
      nonce: a == null || (e = a.csp) === null || e === void 0 ? void 0 : e.nonce
    };
    m._loadCoreStyles(n, l), m._loadThemeStyles(n, l), m._loadScopedThemeStyles(n, l), m._removeThemeListeners(n), n.$loadStyles = function() {
      return m._loadThemeStyles(n, l);
    }, m._themeChangeListener(n.$loadStyles);
  },
  _loadCoreStyles: function() {
    var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    if (!Y.isStyleNameLoaded((e = o.$style) === null || e === void 0 ? void 0 : e.name) && (n = o.$style) !== null && n !== void 0 && n.name) {
      var a;
      x.loadCSS(r), (a = o.$style) === null || a === void 0 || a.loadCSS(r), Y.setLoadedStyleName(o.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var e, n, o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
    if (!(r != null && r.isUnstyled() || (r == null || (e = r.theme) === null || e === void 0 ? void 0 : e.call(r)) === "none")) {
      if (!O.isStyleNameLoaded("common")) {
        var l, s, i = ((l = r.$style) === null || l === void 0 || (s = l.getCommonTheme) === null || s === void 0 ? void 0 : s.call(l)) || {}, u = i.primitive, d = i.semantic, c = i.global, p = i.style;
        x.load(u == null ? void 0 : u.css, S({
          name: "primitive-variables"
        }, a)), x.load(d == null ? void 0 : d.css, S({
          name: "semantic-variables"
        }, a)), x.load(c == null ? void 0 : c.css, S({
          name: "global-variables"
        }, a)), x.loadStyle(S({
          name: "global-style"
        }, a), p), O.setLoadedStyleName("common");
      }
      if (!O.isStyleNameLoaded((n = r.$style) === null || n === void 0 ? void 0 : n.name) && (o = r.$style) !== null && o !== void 0 && o.name) {
        var b, g, y, h, _ = ((b = r.$style) === null || b === void 0 || (g = b.getDirectiveTheme) === null || g === void 0 ? void 0 : g.call(b)) || {}, k = _.css, w = _.style;
        (y = r.$style) === null || y === void 0 || y.load(k, S({
          name: "".concat(r.$style.name, "-variables")
        }, a)), (h = r.$style) === null || h === void 0 || h.loadStyle(S({
          name: "".concat(r.$style.name, "-style")
        }, a), w), O.setLoadedStyleName(r.$style.name);
      }
      if (!O.isStyleNameLoaded("layer-order")) {
        var f, v, C = (f = r.$style) === null || f === void 0 || (v = f.getLayerOrderThemeCSS) === null || v === void 0 ? void 0 : v.call(f);
        x.load(C, S({
          name: "layer-order",
          first: !0
        }, a)), O.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = e.preset();
    if (o && e.$attrSelector) {
      var r, a, l, s = ((r = e.$style) === null || r === void 0 || (a = r.getPresetTheme) === null || a === void 0 ? void 0 : a.call(r, o, "[".concat(e.$attrSelector, "]"))) || {}, i = s.css, u = (l = e.$style) === null || l === void 0 ? void 0 : l.load(i, S({
        name: "".concat(e.$attrSelector, "-").concat(e.$style.name)
      }, n));
      e.scopedStyleEl = u.el;
    }
  },
  _themeChangeListener: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    Y.clearLoadedStyleNames(), T.on("theme:change", e);
  },
  _removeThemeListeners: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    T.off("theme:change", e.$loadStyles), e.$loadStyles = void 0;
  },
  _hook: function(e, n, o, r, a, l) {
    var s, i, u = "on".concat(vn(n)), d = m._getConfig(r, a), c = o == null ? void 0 : o.$instance, p = m._usePT(c, m._getPT(r == null || (s = r.value) === null || s === void 0 ? void 0 : s.pt, e), m._getOptionValue, "hooks.".concat(u)), b = m._useDefaultPT(c, d == null || (i = d.pt) === null || i === void 0 || (i = i.directives) === null || i === void 0 ? void 0 : i[e], m._getOptionValue, "hooks.".concat(u)), g = {
      el: o,
      binding: r,
      vnode: a,
      prevVnode: l
    };
    p == null || p(c, g), b == null || b(c, g);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
      o[r - 2] = arguments[r];
    return Rt(e) ? e.apply(void 0, o) : L.apply(void 0, o);
  },
  _extend: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = function(s, i, u, d, c) {
      var p, b, g, y;
      i._$instances = i._$instances || {};
      var h = m._getConfig(u, d), _ = i._$instances[e] || {}, k = nt(_) ? S(S({}, n), n == null ? void 0 : n.methods) : {};
      i._$instances[e] = S(S({}, _), {}, {
        /* new instance variables to pass in directive methods */
        $name: e,
        $host: i,
        $binding: u,
        $modifiers: u == null ? void 0 : u.modifiers,
        $value: u == null ? void 0 : u.value,
        $el: _.$el || i || void 0,
        $style: S({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, n == null ? void 0 : n.style),
        $primevueConfig: h,
        $attrSelector: (p = i.$pd) === null || p === void 0 || (p = p[e]) === null || p === void 0 ? void 0 : p.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return m._getPT(h == null ? void 0 : h.pt, void 0, function(f) {
            var v;
            return f == null || (v = f.directives) === null || v === void 0 ? void 0 : v[e];
          });
        },
        isUnstyled: function() {
          var f, v;
          return ((f = i._$instances[e]) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.unstyled) !== void 0 ? (v = i._$instances[e]) === null || v === void 0 || (v = v.$binding) === null || v === void 0 || (v = v.value) === null || v === void 0 ? void 0 : v.unstyled : h == null ? void 0 : h.unstyled;
        },
        theme: function() {
          var f;
          return (f = i._$instances[e]) === null || f === void 0 || (f = f.$primevueConfig) === null || f === void 0 ? void 0 : f.theme;
        },
        preset: function() {
          var f;
          return (f = i._$instances[e]) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.dt;
        },
        /* instance's methods */
        ptm: function() {
          var f, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return m._getPTValue(i._$instances[e], (f = i._$instances[e]) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.pt, v, S({}, C));
        },
        ptmo: function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return m._getPTValue(i._$instances[e], f, v, C, !1);
        },
        cx: function() {
          var f, v, C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (f = i._$instances[e]) !== null && f !== void 0 && f.isUnstyled() ? void 0 : m._getOptionValue((v = i._$instances[e]) === null || v === void 0 || (v = v.$style) === null || v === void 0 ? void 0 : v.classes, C, S({}, A));
        },
        sx: function() {
          var f, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return C ? m._getOptionValue((f = i._$instances[e]) === null || f === void 0 || (f = f.$style) === null || f === void 0 ? void 0 : f.inlineStyles, v, S({}, A)) : void 0;
        }
      }, k), i.$instance = i._$instances[e], (b = (g = i.$instance)[s]) === null || b === void 0 || b.call(g, i, u, d, c), i["$".concat(e)] = i.$instance, m._hook(e, s, i, u, d, c), i.$pd || (i.$pd = {}), i.$pd[e] = S(S({}, (y = i.$pd) === null || y === void 0 ? void 0 : y[e]), {}, {
        name: e,
        instance: i._$instances[e]
      });
    }, r = function(s) {
      var i, u, d, c = s._$instances[e], p = c == null ? void 0 : c.watch, b = function(h) {
        var _, k = h.newValue, w = h.oldValue;
        return p == null || (_ = p.config) === null || _ === void 0 ? void 0 : _.call(c, k, w);
      }, g = function(h) {
        var _, k = h.newValue, w = h.oldValue;
        return p == null || (_ = p["config.ripple"]) === null || _ === void 0 ? void 0 : _.call(c, k, w);
      };
      c.$watchersCallback = {
        config: b,
        "config.ripple": g
      }, p == null || (i = p.config) === null || i === void 0 || i.call(c, c == null ? void 0 : c.$primevueConfig), Ot.on("config:change", b), p == null || (u = p["config.ripple"]) === null || u === void 0 || u.call(c, c == null || (d = c.$primevueConfig) === null || d === void 0 ? void 0 : d.ripple), Ot.on("config:ripple:change", g);
    }, a = function(s) {
      var i = s._$instances[e].$watchersCallback;
      i && (Ot.off("config:change", i.config), Ot.off("config:ripple:change", i["config.ripple"]), s._$instances[e].$watchersCallback = void 0);
    };
    return {
      created: function(s, i, u, d) {
        s.$pd || (s.$pd = {}), s.$pd[e] = {
          name: e,
          attrSelector: yn("pd")
        }, o("created", s, i, u, d);
      },
      beforeMount: function(s, i, u, d) {
        var c;
        m._loadStyles((c = s.$pd[e]) === null || c === void 0 ? void 0 : c.instance, i, u), o("beforeMount", s, i, u, d), r(s);
      },
      mounted: function(s, i, u, d) {
        var c;
        m._loadStyles((c = s.$pd[e]) === null || c === void 0 ? void 0 : c.instance, i, u), o("mounted", s, i, u, d);
      },
      beforeUpdate: function(s, i, u, d) {
        o("beforeUpdate", s, i, u, d);
      },
      updated: function(s, i, u, d) {
        var c;
        m._loadStyles((c = s.$pd[e]) === null || c === void 0 ? void 0 : c.instance, i, u), o("updated", s, i, u, d);
      },
      beforeUnmount: function(s, i, u, d) {
        var c;
        a(s), m._removeThemeListeners((c = s.$pd[e]) === null || c === void 0 ? void 0 : c.instance), o("beforeUnmount", s, i, u, d);
      },
      unmounted: function(s, i, u, d) {
        var c;
        (c = s.$pd[e]) === null || c === void 0 || (c = c.instance) === null || c === void 0 || (c = c.scopedStyleEl) === null || c === void 0 || (c = c.value) === null || c === void 0 || c.remove(), o("unmounted", s, i, u, d);
      }
    };
  },
  extend: function() {
    var e = m._getMeta.apply(m, arguments), n = ce(e, 2), o = n[0], r = n[1];
    return S({
      extend: function() {
        var l = m._getMeta.apply(m, arguments), s = ce(l, 2), i = s[0], u = s[1];
        return m.extend(i, S(S(S({}, r), r == null ? void 0 : r.methods), u));
      }
    }, m._extend(o, r));
  }
}, _o = ({ dt: t }) => `
.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
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
`, So = {
  root: "p-ink"
}, ko = x.extend({
  name: "ripple-directive",
  style: _o,
  classes: So
}), wo = m.extend({
  style: ko
});
function $t(t) {
  "@babel/helpers - typeof";
  return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $t(t);
}
function Po(t) {
  return To(t) || Co(t) || xo(t) || Oo();
}
function Oo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xo(t, e) {
  if (t) {
    if (typeof t == "string") return Bt(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Bt(t, e) : void 0;
  }
}
function Co(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function To(t) {
  if (Array.isArray(t)) return Bt(t);
}
function Bt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function fe(t, e, n) {
  return (e = jo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function jo(t) {
  var e = Lo(t, "string");
  return $t(e) == "symbol" ? e : e + "";
}
function Lo(t, e) {
  if ($t(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if ($t(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var No = wo.extend("ripple", {
  watch: {
    "config.ripple": function(e) {
      e ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(e) {
    this.remove(e);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(e) {
      e.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(e) {
      e.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(e) {
      var n = this.getInk(e);
      n || (n = dn("span", fe(fe({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), e.appendChild(n), this.$el = n);
    },
    remove: function(e) {
      var n = this.getInk(e);
      n && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(e), n.removeEventListener("animationend", this.onAnimationEnd), n.remove());
    },
    onMouseDown: function(e) {
      var n = this, o = e.currentTarget, r = this.getInk(o);
      if (!(!r || getComputedStyle(r, null).display === "none")) {
        if (!this.isUnstyled() && At(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"), !Zt(r) && !qt(r)) {
          var a = Math.max(sn(o), fn(o));
          r.style.height = a + "px", r.style.width = a + "px";
        }
        var l = bn(o), s = e.pageX - l.left + document.body.scrollTop - qt(r) / 2, i = e.pageY - l.top + document.body.scrollLeft - Zt(r) / 2;
        r.style.top = i + "px", r.style.left = s + "px", !this.isUnstyled() && an(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          r && (!n.isUnstyled() && At(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(e) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && At(e.currentTarget, "p-ink-active"), e.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(e) {
      return e && e.children ? Po(e.children).find(function(n) {
        return pn(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Ao = ({ dt: t }) => `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding: ${t("button.padding.y")} ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
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
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding: ${t("button.sm.padding.y")} ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding: ${t("button.lg.padding.y")} ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}
`;
function _t(t) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _t(t);
}
function B(t, e, n) {
  return (e = Eo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Eo(t) {
  var e = Vo(t, "string");
  return _t(e) == "symbol" ? e : e + "";
}
function Vo(t, e) {
  if (_t(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (_t(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Io = {
  root: function(e) {
    var n = e.instance, o = e.props;
    return ["p-button p-component", B(B(B(B(B(B(B(B(B({
      "p-button-icon-only": n.hasIcon && !o.label && !o.badge,
      "p-button-vertical": (o.iconPos === "top" || o.iconPos === "bottom") && o.label,
      "p-button-loading": o.loading,
      "p-button-link": o.link || o.variant === "link"
    }, "p-button-".concat(o.severity), o.severity), "p-button-raised", o.raised), "p-button-rounded", o.rounded), "p-button-text", o.text || o.variant === "text"), "p-button-outlined", o.outlined || o.variant === "outlined"), "p-button-sm", o.size === "small"), "p-button-lg", o.size === "large"), "p-button-plain", o.plain), "p-button-fluid", n.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(e) {
    var n = e.props;
    return ["p-button-icon", B({}, "p-button-icon-".concat(n.iconPos), n.label)];
  },
  label: "p-button-label"
}, Do = x.extend({
  name: "button",
  style: Ao,
  classes: Io
}), Bo = {
  name: "BaseButton",
  extends: Ut,
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
  style: Do,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function St(t) {
  "@babel/helpers - typeof";
  return St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, St(t);
}
function j(t, e, n) {
  return (e = Ro(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Ro(t) {
  var e = zo(t, "string");
  return St(e) == "symbol" ? e : e + "";
}
function zo(t, e) {
  if (St(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (St(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Ce = {
  name: "Button",
  extends: Bo,
  inheritAttrs: !1,
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(e) {
      var n = e === "root" ? this.ptmi : this.ptm;
      return n(e, {
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
      return L(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
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
      return nt(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return ct(j(j(j(j(j(j(j(j(j(j({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return ct(j(j({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return ct(j(j({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: Oe,
    Badge: xe
  },
  directives: {
    ripple: No
  }
}, Uo = ["data-p"], Mo = ["data-p"];
function Ko(t, e, n, o, r, a) {
  var l = Ht("SpinnerIcon"), s = Ht("Badge"), i = Qe("ripple");
  return t.asChild ? ut(t.$slots, "default", {
    key: 1,
    class: Gt(t.cx("root")),
    a11yAttrs: a.a11yAttrs
  }) : tn((G(), xt(en(t.as), L({
    key: 0,
    class: t.cx("root"),
    "data-p": a.dataP
  }, a.attrs), {
    default: nn(function() {
      return [ut(t.$slots, "default", {}, function() {
        return [t.loading ? ut(t.$slots, "loadingicon", L({
          key: 0,
          class: [t.cx("loadingIcon"), t.cx("icon")]
        }, t.ptm("loadingIcon")), function() {
          return [t.loadingIcon ? (G(), Ct("span", L({
            key: 0,
            class: [t.cx("loadingIcon"), t.cx("icon"), t.loadingIcon]
          }, t.ptm("loadingIcon")), null, 16)) : (G(), xt(l, L({
            key: 1,
            class: [t.cx("loadingIcon"), t.cx("icon")],
            spin: ""
          }, t.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : ut(t.$slots, "icon", L({
          key: 1,
          class: [t.cx("icon")]
        }, t.ptm("icon")), function() {
          return [t.icon ? (G(), Ct("span", L({
            key: 0,
            class: [t.cx("icon"), t.icon, t.iconClass],
            "data-p": a.dataIconP
          }, t.ptm("icon")), null, 16, Uo)) : Ft("", !0)];
        }), ge("span", L({
          class: t.cx("label")
        }, t.ptm("label"), {
          "data-p": a.dataLabelP
        }), me(t.label || " "), 17, Mo), t.badge ? (G(), xt(s, {
          key: 2,
          value: t.badge,
          class: Gt(t.badgeClass),
          severity: t.badgeSeverity,
          unstyled: t.unstyled,
          pt: t.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : Ft("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[i]]);
}
Ce.render = Ko;
const Ho = {
  __name: "MyButton",
  setup(t) {
    const e = () => {
      console.log("Button clicked!");
    };
    return (n, o) => (G(), xt(on(Ce), {
      label: "Click me!",
      onClick: e
    }));
  }
};
export {
  Ho as MyButton
};
