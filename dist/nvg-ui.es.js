import { ref as ne, readonly as Vr, getCurrentInstance as wo, onMounted as Fr, nextTick as Wr, watch as _e, reactive as Hr, useId as Kr, mergeProps as C, openBlock as O, createElementBlock as I, createElementVNode as X, renderSlot as L, createBlock as ge, resolveDynamicComponent as so, createCommentVNode as V, toDisplayString as he, Teleport as Ur, resolveComponent as ve, Fragment as $e, renderList as Ye, createVNode as Ie, resolveDirective as Gr, normalizeClass as Oe, normalizeStyle as Yr, withCtx as be, Transition as Xr, createSlots as qr, createTextVNode as ro, withDirectives as Zr, unref as Qr, withModifiers as Jr } from "vue";
var et = Object.defineProperty, Co = Object.getOwnPropertySymbols, ot = Object.prototype.hasOwnProperty, rt = Object.prototype.propertyIsEnumerable, So = (o, e, r) => e in o ? et(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, tt = (o, e) => {
  for (var r in e || (e = {}))
    ot.call(e, r) && So(o, r, e[r]);
  if (Co)
    for (var r of Co(e))
      rt.call(e, r) && So(o, r, e[r]);
  return o;
};
function Se(o) {
  return o == null || o === "" || Array.isArray(o) && o.length === 0 || !(o instanceof Date) && typeof o == "object" && Object.keys(o).length === 0;
}
function co(o, e, r = /* @__PURE__ */ new WeakSet()) {
  if (o === e)
    return !0;
  if (!o || !e || typeof o != "object" || typeof e != "object" || r.has(o) || r.has(e))
    return !1;
  r.add(o).add(e);
  const t = Array.isArray(o), n = Array.isArray(e);
  let i, l, s;
  if (t && n) {
    if (l = o.length, l != e.length)
      return !1;
    for (i = l; i-- !== 0; )
      if (!co(o[i], e[i], r))
        return !1;
    return !0;
  }
  if (t != n)
    return !1;
  const a = o instanceof Date, d = e instanceof Date;
  if (a != d)
    return !1;
  if (a && d)
    return o.getTime() == e.getTime();
  const c = o instanceof RegExp, u = e instanceof RegExp;
  if (c != u)
    return !1;
  if (c && u)
    return o.toString() == e.toString();
  const f = Object.keys(o);
  if (l = f.length, l !== Object.keys(e).length)
    return !1;
  for (i = l; i-- !== 0; )
    if (!Object.prototype.hasOwnProperty.call(e, f[i]))
      return !1;
  for (i = l; i-- !== 0; )
    if (s = f[i], !co(o[s], e[s], r))
      return !1;
  return !0;
}
function nt(o, e) {
  return co(o, e);
}
function Qe(o) {
  return typeof o == "function" && "call" in o && "apply" in o;
}
function B(o) {
  return !Se(o);
}
function ue(o, e) {
  if (!o || !e)
    return null;
  try {
    const r = o[e];
    if (B(r))
      return r;
  } catch {
  }
  if (Object.keys(o).length) {
    if (Qe(e))
      return e(o);
    if (e.indexOf(".") === -1)
      return o[e];
    {
      const r = e.split(".");
      let t = o;
      for (let n = 0, i = r.length; n < i; ++n) {
        if (t == null)
          return null;
        t = t[r[n]];
      }
      return t;
    }
  }
  return null;
}
function it(o, e, r) {
  return r ? ue(o, r) === ue(e, r) : nt(o, e);
}
function re(o, e = !0) {
  return o instanceof Object && o.constructor === Object && (e || Object.keys(o).length !== 0);
}
function Jo(o = {}, e = {}) {
  const r = tt({}, o);
  return Object.keys(e).forEach((t) => {
    const n = t;
    re(e[n]) && n in o && re(o[n]) ? r[n] = Jo(o[n], e[n]) : r[n] = e[n];
  }), r;
}
function at(...o) {
  return o.reduce((e, r, t) => t === 0 ? r : Jo(e, r), {});
}
function to(o, e) {
  let r = -1;
  if (B(o))
    try {
      r = o.findLastIndex(e);
    } catch {
      r = o.lastIndexOf([...o].reverse().find(e));
    }
  return r;
}
function q(o, ...e) {
  return Qe(o) ? o(...e) : o;
}
function H(o, e = !0) {
  return typeof o == "string" && (e || o !== "");
}
function oe(o) {
  return H(o) ? o.replace(/(-|_)/g, "").toLowerCase() : o;
}
function ho(o, e = "", r = {}) {
  const t = oe(e).split("."), n = t.shift();
  if (n) {
    if (re(o)) {
      const i = Object.keys(o).find((l) => oe(l) === n) || "";
      return ho(q(o[i], r), t.join("."), r);
    }
    return;
  }
  return q(o, r);
}
function Je(o, e = !0) {
  return Array.isArray(o) && (e || o.length !== 0);
}
function lt(o) {
  return B(o) && !isNaN(o);
}
function ie(o, e) {
  if (e) {
    const r = e.test(o);
    return e.lastIndex = 0, r;
  }
  return !1;
}
function st(...o) {
  return at(...o);
}
function Pe(o) {
  return o && o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function dt(o) {
  return H(o, !1) ? o[0].toUpperCase() + o.slice(1) : o;
}
function er(o) {
  return H(o) ? o.replace(/(_)/g, "-").replace(/[A-Z]/g, (e, r) => r === 0 ? e : "-" + e.toLowerCase()).toLowerCase() : o;
}
function Oo(o) {
  return H(o) ? o.replace(/[A-Z]/g, (e, r) => r === 0 ? e : "." + e.toLowerCase()).toLowerCase() : o;
}
function vo() {
  const o = /* @__PURE__ */ new Map();
  return {
    on(e, r) {
      let t = o.get(e);
      return t ? t.push(r) : t = [r], o.set(e, t), this;
    },
    off(e, r) {
      const t = o.get(e);
      return t && t.splice(t.indexOf(r) >>> 0, 1), this;
    },
    emit(e, r) {
      const t = o.get(e);
      t && t.forEach((n) => {
        n(r);
      });
    },
    clear() {
      o.clear();
    }
  };
}
function we(...o) {
  if (o) {
    let e = [];
    for (let r = 0; r < o.length; r++) {
      const t = o[r];
      if (!t)
        continue;
      const n = typeof t;
      if (n === "string" || n === "number")
        e.push(t);
      else if (n === "object") {
        const i = Array.isArray(t) ? [we(...t)] : Object.entries(t).map(([l, s]) => s ? l : void 0);
        e = i.length ? e.concat(i.filter((l) => !!l)) : e;
      }
    }
    return e.join(" ").trim();
  }
}
function ct(o, e) {
  return o ? o.classList ? o.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(o.className) : !1;
}
function ut(o, e) {
  if (o && e) {
    const r = (t) => {
      ct(o, t) || (o.classList ? o.classList.add(t) : o.className += " " + t);
    };
    [e].flat().filter(Boolean).forEach((t) => t.split(" ").forEach(r));
  }
}
function no(o, e) {
  if (o && e) {
    const r = (t) => {
      o.classList ? o.classList.remove(t) : o.className = o.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e].flat().filter(Boolean).forEach((t) => t.split(" ").forEach(r));
  }
}
function Xe(o) {
  for (const e of document == null ? void 0 : document.styleSheets)
    try {
      for (const r of e == null ? void 0 : e.cssRules)
        for (const t of r == null ? void 0 : r.style)
          if (o.test(t))
            return { name: t, value: r.style.getPropertyValue(t).trim() };
    } catch {
    }
  return null;
}
function or(o) {
  const e = { width: 0, height: 0 };
  return o && (o.style.visibility = "hidden", o.style.display = "block", e.width = o.offsetWidth, e.height = o.offsetHeight, o.style.display = "none", o.style.visibility = "visible"), e;
}
function rr() {
  const o = window, e = document, r = e.documentElement, t = e.getElementsByTagName("body")[0], n = o.innerWidth || r.clientWidth || t.clientWidth, i = o.innerHeight || r.clientHeight || t.clientHeight;
  return { width: n, height: i };
}
function uo(o) {
  return o ? Math.abs(o.scrollLeft) : 0;
}
function ft() {
  const o = document.documentElement;
  return (window.pageXOffset || uo(o)) - (o.clientLeft || 0);
}
function pt() {
  const o = document.documentElement;
  return (window.pageYOffset || o.scrollTop) - (o.clientTop || 0);
}
function gt(o) {
  return o ? getComputedStyle(o).direction === "rtl" : !1;
}
function mt(o, e, r = !0) {
  var t, n, i, l;
  if (o) {
    const s = o.offsetParent ? { width: o.offsetWidth, height: o.offsetHeight } : or(o), a = s.height, d = s.width, c = e.offsetHeight, u = e.offsetWidth, f = e.getBoundingClientRect(), p = pt(), m = ft(), v = rr();
    let h, b, k = "top";
    f.top + c + a > v.height ? (h = f.top + p - a, k = "bottom", h < 0 && (h = p)) : h = c + f.top + p, f.left + d > v.width ? b = Math.max(0, f.left + m + u - d) : b = f.left + m, gt(o) ? o.style.insetInlineEnd = b + "px" : o.style.insetInlineStart = b + "px", o.style.top = h + "px", o.style.transformOrigin = k, r && (o.style.marginTop = k === "bottom" ? `calc(${(n = (t = Xe(/-anchor-gutter$/)) == null ? void 0 : t.value) != null ? n : "2px"} * -1)` : (l = (i = Xe(/-anchor-gutter$/)) == null ? void 0 : i.value) != null ? l : "");
  }
}
function ht(o, e) {
  o && (typeof e == "string" ? o.style.cssText = e : Object.entries(e || {}).forEach(([r, t]) => o.style[r] = t));
}
function tr(o, e) {
  if (o instanceof HTMLElement) {
    let r = o.offsetWidth;
    if (e) {
      const t = getComputedStyle(o);
      r += parseFloat(t.marginLeft) + parseFloat(t.marginRight);
    }
    return r;
  }
  return 0;
}
function vt(o, e, r = !0) {
  var t, n, i, l;
  if (o) {
    const s = o.offsetParent ? { width: o.offsetWidth, height: o.offsetHeight } : or(o), a = e.offsetHeight, d = e.getBoundingClientRect(), c = rr();
    let u, f, p = "top";
    d.top + a + s.height > c.height ? (u = -1 * s.height, p = "bottom", d.top + u < 0 && (u = -1 * d.top)) : u = a, s.width > c.width ? f = d.left * -1 : d.left + s.width > c.width ? f = (d.left + s.width - c.width) * -1 : f = 0, o.style.top = u + "px", o.style.insetInlineStart = f + "px", o.style.transformOrigin = p, r && (o.style.marginTop = p === "bottom" ? `calc(${(n = (t = Xe(/-anchor-gutter$/)) == null ? void 0 : t.value) != null ? n : "2px"} * -1)` : (l = (i = Xe(/-anchor-gutter$/)) == null ? void 0 : i.value) != null ? l : "");
  }
}
function nr(o) {
  if (o) {
    let e = o.parentNode;
    return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
  }
  return null;
}
function bt(o) {
  return !!(o !== null && typeof o < "u" && o.nodeName && nr(o));
}
function He(o) {
  return typeof Element < "u" ? o instanceof Element : o !== null && typeof o == "object" && o.nodeType === 1 && typeof o.nodeName == "string";
}
function qe(o, e = {}) {
  if (He(o)) {
    const r = (t, n) => {
      var i, l;
      const s = (i = o == null ? void 0 : o.$attrs) != null && i[t] ? [(l = o == null ? void 0 : o.$attrs) == null ? void 0 : l[t]] : [];
      return [n].flat().reduce((a, d) => {
        if (d != null) {
          const c = typeof d;
          if (c === "string" || c === "number")
            a.push(d);
          else if (c === "object") {
            const u = Array.isArray(d) ? r(t, d) : Object.entries(d).map(([f, p]) => t === "style" && (p || p === 0) ? `${f.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${p}` : p ? f : void 0);
            a = u.length ? a.concat(u.filter((f) => !!f)) : a;
          }
        }
        return a;
      }, s);
    };
    Object.entries(e).forEach(([t, n]) => {
      if (n != null) {
        const i = t.match(/^on(.+)/);
        i ? o.addEventListener(i[1].toLowerCase(), n) : t === "p-bind" || t === "pBind" ? qe(o, n) : (n = t === "class" ? [...new Set(r("class", n))].join(" ").trim() : t === "style" ? r("style", n).join(";").trim() : n, (o.$attrs = o.$attrs || {}) && (o.$attrs[t] = n), o.setAttribute(t, n));
      }
    });
  }
}
function yt(o, e = {}, ...r) {
  if (o) {
    const t = document.createElement(o);
    return qe(t, e), t.append(...r), t;
  }
}
function eo(o, e) {
  return He(o) ? o.matches(e) ? o : o.querySelector(e) : null;
}
function ce(o, e) {
  o && document.activeElement !== o && o.focus(e);
}
function kt(o, e) {
  if (He(o)) {
    const r = o.getAttribute(e);
    return isNaN(r) ? r === "true" || r === "false" ? r === "true" : r : +r;
  }
}
function fe(o) {
  if (o) {
    let e = o.offsetHeight;
    const r = getComputedStyle(o);
    return e -= parseFloat(r.paddingTop) + parseFloat(r.paddingBottom) + parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth), e;
  }
  return 0;
}
function $t(o) {
  if (o) {
    const e = o.getBoundingClientRect();
    return {
      top: e.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: e.left + (window.pageXOffset || uo(document.documentElement) || uo(document.body) || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function wt(o, e) {
  if (o) {
    let r = o.offsetHeight;
    if (e) {
      const t = getComputedStyle(o);
      r += parseFloat(t.marginTop) + parseFloat(t.marginBottom);
    }
    return r;
  }
  return 0;
}
function ir(o, e = []) {
  const r = nr(o);
  return r === null ? e : ir(r, e.concat([r]));
}
function Ct(o) {
  const e = [];
  if (o) {
    const r = ir(o), t = /(auto|scroll)/, n = (i) => {
      try {
        const l = window.getComputedStyle(i, null);
        return t.test(l.getPropertyValue("overflow")) || t.test(l.getPropertyValue("overflowX")) || t.test(l.getPropertyValue("overflowY"));
      } catch {
        return !1;
      }
    };
    for (const i of r) {
      const l = i.nodeType === 1 && i.dataset.scrollselectors;
      if (l) {
        const s = l.split(",");
        for (const a of s) {
          const d = eo(i, a);
          d && n(d) && e.push(d);
        }
      }
      i.nodeType !== 9 && n(i) && e.push(i);
    }
  }
  return e;
}
function pe(o) {
  if (o) {
    let e = o.offsetWidth;
    const r = getComputedStyle(o);
    return e -= parseFloat(r.paddingLeft) + parseFloat(r.paddingRight) + parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth), e;
  }
  return 0;
}
function ar() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function xo(o) {
  return !!(o && o.offsetParent != null);
}
function St() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function Ot(o, e = "", r) {
  He(o) && r !== null && r !== void 0 && o.setAttribute(e, r);
}
var Ue = {};
function xt(o = "pui_id_") {
  return Object.hasOwn(Ue, o) || (Ue[o] = 0), Ue[o]++, `${o}${Ue[o]}`;
}
function Bt() {
  let o = [];
  const e = (l, s, a = 999) => {
    const d = n(l, s, a), c = d.value + (d.key === l ? 0 : a) + 1;
    return o.push({ key: l, value: c }), c;
  }, r = (l) => {
    o = o.filter((s) => s.value !== l);
  }, t = (l, s) => n(l, s).value, n = (l, s, a = 0) => [...o].reverse().find((d) => s ? !0 : d.key === l) || { key: l, value: a }, i = (l) => l && parseInt(l.style.zIndex, 10) || 0;
  return {
    get: i,
    set: (l, s, a) => {
      s && (s.style.zIndex = String(e(l, !0, a)));
    },
    clear: (l) => {
      l && (r(i(l)), l.style.zIndex = "");
    },
    getCurrent: (l) => t(l, !0)
  };
}
var io = Bt(), _t = Object.defineProperty, It = Object.defineProperties, Rt = Object.getOwnPropertyDescriptors, Ze = Object.getOwnPropertySymbols, lr = Object.prototype.hasOwnProperty, sr = Object.prototype.propertyIsEnumerable, Bo = (o, e, r) => e in o ? _t(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, Q = (o, e) => {
  for (var r in e || (e = {}))
    lr.call(e, r) && Bo(o, r, e[r]);
  if (Ze)
    for (var r of Ze(e))
      sr.call(e, r) && Bo(o, r, e[r]);
  return o;
}, ao = (o, e) => It(o, Rt(e)), te = (o, e) => {
  var r = {};
  for (var t in o)
    lr.call(o, t) && e.indexOf(t) < 0 && (r[t] = o[t]);
  if (o != null && Ze)
    for (var t of Ze(o))
      e.indexOf(t) < 0 && sr.call(o, t) && (r[t] = o[t]);
  return r;
}, Pt = vo(), M = Pt;
function _o(o, e) {
  Je(o) ? o.push(...e || []) : re(o) && Object.assign(o, e);
}
function Tt(o) {
  return re(o) && o.hasOwnProperty("$value") && o.hasOwnProperty("$type") ? o.$value : o;
}
function zt(o) {
  return o.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function fo(o = "", e = "") {
  return zt(`${H(o, !1) && H(e, !1) ? `${o}-` : o}${e}`);
}
function dr(o = "", e = "") {
  return `--${fo(o, e)}`;
}
function Lt(o = "") {
  const e = (o.match(/{/g) || []).length, r = (o.match(/}/g) || []).length;
  return (e + r) % 2 !== 0;
}
function cr(o, e = "", r = "", t = [], n) {
  if (H(o)) {
    const i = /{([^}]*)}/g, l = o.trim();
    if (Lt(l))
      return;
    if (ie(l, i)) {
      const s = l.replaceAll(i, (c) => {
        const f = c.replace(/{|}/g, "").split(".").filter((p) => !t.some((m) => ie(p, m)));
        return `var(${dr(r, er(f.join("-")))}${B(n) ? `, ${n}` : ""})`;
      }), a = /(\d+\s+[\+\-\*\/]\s+\d+)/g, d = /var\([^)]+\)/g;
      return ie(s.replace(d, "0"), a) ? `calc(${s})` : s;
    }
    return l;
  } else if (lt(o))
    return o;
}
function Dt(o, e, r) {
  H(e, !1) && o.push(`${e}:${r};`);
}
function ye(o, e) {
  return o ? `${o}{${e}}` : "";
}
var Te = (...o) => At(R.getTheme(), ...o), At = (o = {}, e, r, t) => {
  if (e) {
    const { variable: n, options: i } = R.defaults || {}, { prefix: l, transform: s } = (o == null ? void 0 : o.options) || i || {}, d = ie(e, /{([^}]*)}/g) ? e : `{${e}}`;
    return t === "value" || Se(t) && s === "strict" ? R.getTokenValue(e) : cr(d, void 0, l, [n.excludedKeyRegex], r);
  }
  return "";
};
function Et(o, e = {}) {
  const r = R.defaults.variable, { prefix: t = r.prefix, selector: n = r.selector, excludedKeyRegex: i = r.excludedKeyRegex } = e, l = (d, c = "") => Object.entries(d).reduce(
    (u, [f, p]) => {
      const m = ie(f, i) ? fo(c) : fo(c, er(f)), v = Tt(p);
      if (re(v)) {
        const { variables: h, tokens: b } = l(v, m);
        _o(u.tokens, b), _o(u.variables, h);
      } else
        u.tokens.push((t ? m.replace(`${t}-`, "") : m).replaceAll("-", ".")), Dt(u.variables, dr(m), cr(v, m, t, [i]));
      return u;
    },
    { variables: [], tokens: [] }
  ), { variables: s, tokens: a } = l(o, t);
  return {
    value: s,
    tokens: a,
    declarations: s.join(""),
    css: ye(n, s.join(""))
  };
}
var Z = {
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
      const e = Object.keys(this.rules).filter((r) => r !== "custom").map((r) => this.rules[r]);
      return [o].flat().map((r) => {
        var t;
        return (t = e.map((n) => n.resolve(r)).find((n) => n.matched)) != null ? t : this.rules.custom.resolve(r);
      });
    }
  },
  _toVariables(o, e) {
    return Et(o, { prefix: e == null ? void 0 : e.prefix });
  },
  getCommon({ name: o = "", theme: e = {}, params: r, set: t, defaults: n }) {
    var i, l, s, a, d, c, u;
    const { preset: f, options: p } = e;
    let m, v, h, b, k, y, g;
    if (B(f) && p.transform !== "strict") {
      const { primitive: $, semantic: _, extend: z } = f, D = _ || {}, { colorScheme: j } = D, F = te(D, ["colorScheme"]), P = z || {}, { colorScheme: A } = P, K = te(P, ["colorScheme"]), U = j || {}, { dark: E } = U, W = te(U, ["dark"]), G = A || {}, { dark: ae } = G, J = te(G, ["dark"]), Y = B($) ? this._toVariables({ primitive: $ }, p) : {}, ee = B(F) ? this._toVariables({ semantic: F }, p) : {}, de = B(W) ? this._toVariables({ light: W }, p) : {}, Ke = B(E) ? this._toVariables({ dark: E }, p) : {}, me = B(K) ? this._toVariables({ semantic: K }, p) : {}, ko = B(J) ? this._toVariables({ light: J }, p) : {}, $o = B(ae) ? this._toVariables({ dark: ae }, p) : {}, [Cr, Sr] = [(i = Y.declarations) != null ? i : "", Y.tokens], [Or, xr] = [(l = ee.declarations) != null ? l : "", ee.tokens || []], [Br, _r] = [(s = de.declarations) != null ? s : "", de.tokens || []], [Ir, Rr] = [(a = Ke.declarations) != null ? a : "", Ke.tokens || []], [Pr, Tr] = [(d = me.declarations) != null ? d : "", me.tokens || []], [zr, Lr] = [(c = ko.declarations) != null ? c : "", ko.tokens || []], [Dr, Ar] = [(u = $o.declarations) != null ? u : "", $o.tokens || []];
      m = this.transformCSS(o, Cr, "light", "variable", p, t, n), v = Sr;
      const Er = this.transformCSS(o, `${Or}${Br}`, "light", "variable", p, t, n), Mr = this.transformCSS(o, `${Ir}`, "dark", "variable", p, t, n);
      h = `${Er}${Mr}`, b = [.../* @__PURE__ */ new Set([...xr, ..._r, ...Rr])];
      const jr = this.transformCSS(o, `${Pr}${zr}color-scheme:light`, "light", "variable", p, t, n), Nr = this.transformCSS(o, `${Dr}color-scheme:dark`, "dark", "variable", p, t, n);
      k = `${jr}${Nr}`, y = [.../* @__PURE__ */ new Set([...Tr, ...Lr, ...Ar])], g = q(f.css, { dt: Te });
    }
    return {
      primitive: {
        css: m,
        tokens: v
      },
      semantic: {
        css: h,
        tokens: b
      },
      global: {
        css: k,
        tokens: y
      },
      style: g
    };
  },
  getPreset({ name: o = "", preset: e = {}, options: r, params: t, set: n, defaults: i, selector: l }) {
    var s, a, d;
    let c, u, f;
    if (B(e) && r.transform !== "strict") {
      const p = o.replace("-directive", ""), m = e, { colorScheme: v, extend: h, css: b } = m, k = te(m, ["colorScheme", "extend", "css"]), y = h || {}, { colorScheme: g } = y, $ = te(y, ["colorScheme"]), _ = v || {}, { dark: z } = _, D = te(_, ["dark"]), j = g || {}, { dark: F } = j, P = te(j, ["dark"]), A = B(k) ? this._toVariables({ [p]: Q(Q({}, k), $) }, r) : {}, K = B(D) ? this._toVariables({ [p]: Q(Q({}, D), P) }, r) : {}, U = B(z) ? this._toVariables({ [p]: Q(Q({}, z), F) }, r) : {}, [E, W] = [(s = A.declarations) != null ? s : "", A.tokens || []], [G, ae] = [(a = K.declarations) != null ? a : "", K.tokens || []], [J, Y] = [(d = U.declarations) != null ? d : "", U.tokens || []], ee = this.transformCSS(p, `${E}${G}`, "light", "variable", r, n, i, l), de = this.transformCSS(p, J, "dark", "variable", r, n, i, l);
      c = `${ee}${de}`, u = [.../* @__PURE__ */ new Set([...W, ...ae, ...Y])], f = q(b, { dt: Te });
    }
    return {
      css: c,
      tokens: u,
      style: f
    };
  },
  getPresetC({ name: o = "", theme: e = {}, params: r, set: t, defaults: n }) {
    var i;
    const { preset: l, options: s } = e, a = (i = l == null ? void 0 : l.components) == null ? void 0 : i[o];
    return this.getPreset({ name: o, preset: a, options: s, params: r, set: t, defaults: n });
  },
  // @deprecated - use getPresetC instead
  getPresetD({ name: o = "", theme: e = {}, params: r, set: t, defaults: n }) {
    var i, l;
    const s = o.replace("-directive", ""), { preset: a, options: d } = e, c = ((i = a == null ? void 0 : a.components) == null ? void 0 : i[s]) || ((l = a == null ? void 0 : a.directives) == null ? void 0 : l[s]);
    return this.getPreset({ name: s, preset: c, options: d, params: r, set: t, defaults: n });
  },
  applyDarkColorScheme(o) {
    return !(o.darkModeSelector === "none" || o.darkModeSelector === !1);
  },
  getColorSchemeOption(o, e) {
    var r;
    return this.applyDarkColorScheme(o) ? this.regex.resolve(o.darkModeSelector === !0 ? e.options.darkModeSelector : (r = o.darkModeSelector) != null ? r : e.options.darkModeSelector) : [];
  },
  getLayerOrder(o, e = {}, r, t) {
    const { cssLayer: n } = e;
    return n ? `@layer ${q(n.order || "primeui", r)}` : "";
  },
  getCommonStyleSheet({ name: o = "", theme: e = {}, params: r, props: t = {}, set: n, defaults: i }) {
    const l = this.getCommon({ name: o, theme: e, params: r, set: n, defaults: i }), s = Object.entries(t).reduce((a, [d, c]) => a.push(`${d}="${c}"`) && a, []).join(" ");
    return Object.entries(l || {}).reduce((a, [d, c]) => {
      if (c != null && c.css) {
        const u = Pe(c == null ? void 0 : c.css), f = `${d}-variables`;
        a.push(`<style type="text/css" data-primevue-style-id="${f}" ${s}>${u}</style>`);
      }
      return a;
    }, []).join("");
  },
  getStyleSheet({ name: o = "", theme: e = {}, params: r, props: t = {}, set: n, defaults: i }) {
    var l;
    const s = { name: o, theme: e, params: r, set: n, defaults: i }, a = (l = o.includes("-directive") ? this.getPresetD(s) : this.getPresetC(s)) == null ? void 0 : l.css, d = Object.entries(t).reduce((c, [u, f]) => c.push(`${u}="${f}"`) && c, []).join(" ");
    return a ? `<style type="text/css" data-primevue-style-id="${o}-variables" ${d}>${Pe(a)}</style>` : "";
  },
  createTokens(o = {}, e, r = "", t = "", n = {}) {
    return Object.entries(o).forEach(([i, l]) => {
      const s = ie(i, e.variable.excludedKeyRegex) ? r : r ? `${r}.${Oo(i)}` : Oo(i), a = t ? `${t}.${i}` : i;
      re(l) ? this.createTokens(l, e, s, a, n) : (n[s] || (n[s] = {
        paths: [],
        computed(d, c = {}) {
          var u, f;
          return this.paths.length === 1 ? (u = this.paths[0]) == null ? void 0 : u.computed(this.paths[0].scheme, c.binding) : d && d !== "none" ? (f = this.paths.find((p) => p.scheme === d)) == null ? void 0 : f.computed(d, c.binding) : this.paths.map((p) => p.computed(p.scheme, c[p.scheme]));
        }
      }), n[s].paths.push({
        path: a,
        value: l,
        scheme: a.includes("colorScheme.light") ? "light" : a.includes("colorScheme.dark") ? "dark" : "none",
        computed(d, c = {}) {
          const u = /{([^}]*)}/g;
          let f = l;
          if (c.name = this.path, c.binding || (c.binding = {}), ie(l, u)) {
            const m = l.trim().replaceAll(u, (b) => {
              var k;
              const y = b.replace(/{|}/g, ""), g = (k = n[y]) == null ? void 0 : k.computed(d, c);
              return Je(g) && g.length === 2 ? `light-dark(${g[0].value},${g[1].value})` : g == null ? void 0 : g.value;
            }), v = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, h = /var\([^)]+\)/g;
            f = ie(m.replace(h, "0"), v) ? `calc(${m})` : m;
          }
          return Se(c.binding) && delete c.binding, {
            colorScheme: d,
            path: this.path,
            paths: c,
            value: f.includes("undefined") ? void 0 : f
          };
        }
      }));
    }), n;
  },
  getTokenValue(o, e, r) {
    var t;
    const i = ((a) => a.split(".").filter((c) => !ie(c.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(e), l = e.includes("colorScheme.light") ? "light" : e.includes("colorScheme.dark") ? "dark" : void 0, s = [(t = o[i]) == null ? void 0 : t.computed(l)].flat().filter((a) => a);
    return s.length === 1 ? s[0].value : s.reduce((a = {}, d) => {
      const c = d, { colorScheme: u } = c, f = te(c, ["colorScheme"]);
      return a[u] = f, a;
    }, void 0);
  },
  getSelectorRule(o, e, r, t) {
    return r === "class" || r === "attr" ? ye(B(e) ? `${o}${e},${o} ${e}` : o, t) : ye(o, B(e) ? ye(e, t) : t);
  },
  transformCSS(o, e, r, t, n = {}, i, l, s) {
    if (B(e)) {
      const { cssLayer: a } = n;
      if (t !== "style") {
        const d = this.getColorSchemeOption(n, l);
        e = r === "dark" ? d.reduce((c, { type: u, selector: f }) => (B(f) && (c += f.includes("[CSS]") ? f.replace("[CSS]", e) : this.getSelectorRule(f, s, u, e)), c), "") : ye(s ?? ":root", e);
      }
      if (a) {
        const d = {
          name: "primeui",
          order: "primeui"
        };
        re(a) && (d.name = q(a.name, { name: o, type: t })), B(d.name) && (e = ye(`@layer ${d.name}`, e), i == null || i.layerNames(d.name));
      }
      return e;
    }
    return "";
  }
}, R = {
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
    const { theme: e } = o;
    e && (this._theme = ao(Q({}, e), {
      options: Q(Q({}, this.defaults.options), e.options)
    }), this._tokens = Z.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
    this.update({ theme: o }), M.emit("theme:change", o);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(o) {
    this._theme = ao(Q({}, this.theme), { preset: o }), this._tokens = Z.createTokens(o, this.defaults), this.clearLoadedStyleNames(), M.emit("preset:change", o), M.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(o) {
    this._theme = ao(Q({}, this.theme), { options: o }), this.clearLoadedStyleNames(), M.emit("options:change", o), M.emit("theme:change", this.theme);
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
    return Z.getTokenValue(this.tokens, o, this.defaults);
  },
  getCommon(o = "", e) {
    return Z.getCommon({ name: o, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(o = "", e) {
    const r = { name: o, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Z.getPresetC(r);
  },
  // @deprecated - use getComponent instead
  getDirective(o = "", e) {
    const r = { name: o, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Z.getPresetD(r);
  },
  getCustomPreset(o = "", e, r, t) {
    const n = { name: o, preset: e, options: this.options, selector: r, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Z.getPreset(n);
  },
  getLayerOrderCSS(o = "") {
    return Z.getLayerOrder(o, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(o = "", e, r = "style", t) {
    return Z.transformCSS(o, e, t, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(o = "", e, r = {}) {
    return Z.getCommonStyleSheet({ name: o, theme: this.theme, params: e, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(o, e, r = {}) {
    return Z.getStyleSheet({ name: o, theme: this.theme, params: e, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(o) {
    this._loadingStyles.add(o);
  },
  onStyleUpdated(o) {
    this._loadingStyles.add(o);
  },
  onStyleLoaded(o, { name: e }) {
    this._loadingStyles.size && (this._loadingStyles.delete(e), M.emit(`theme:${e}:load`, o), !this._loadingStyles.size && M.emit("theme:load"));
  }
}, N = {
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
}, Mt = ({ dt: o }) => `
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
function ze(o) {
  "@babel/helpers - typeof";
  return ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ze(o);
}
function Io(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Ro(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Io(Object(r), !0).forEach(function(t) {
      jt(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : Io(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function jt(o, e, r) {
  return (e = Nt(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function Nt(o) {
  var e = Vt(o, "string");
  return ze(e) == "symbol" ? e : e + "";
}
function Vt(o, e) {
  if (ze(o) != "object" || !o)
    return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (ze(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
function Ft(o) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  wo() && wo().components ? Fr(o) : e ? o() : Wr(o);
}
var Wt = 0;
function Ht(o) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ne(!1), t = ne(o), n = ne(null), i = ar() ? window.document : void 0, l = e.document, s = l === void 0 ? i : l, a = e.immediate, d = a === void 0 ? !0 : a, c = e.manual, u = c === void 0 ? !1 : c, f = e.name, p = f === void 0 ? "style_".concat(++Wt) : f, m = e.id, v = m === void 0 ? void 0 : m, h = e.media, b = h === void 0 ? void 0 : h, k = e.nonce, y = k === void 0 ? void 0 : k, g = e.first, $ = g === void 0 ? !1 : g, _ = e.onMounted, z = _ === void 0 ? void 0 : _, D = e.onUpdated, j = D === void 0 ? void 0 : D, F = e.onLoad, P = F === void 0 ? void 0 : F, A = e.props, K = A === void 0 ? {} : A, U = function() {
  }, E = function(ae) {
    var J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s) {
      var Y = Ro(Ro({}, K), J), ee = Y.name || p, de = Y.id || v, Ke = Y.nonce || y;
      n.value = s.querySelector('style[data-primevue-style-id="'.concat(ee, '"]')) || s.getElementById(de) || s.createElement("style"), n.value.isConnected || (t.value = ae || o, qe(n.value, {
        type: "text/css",
        id: de,
        media: b,
        nonce: Ke
      }), $ ? s.head.prepend(n.value) : s.head.appendChild(n.value), Ot(n.value, "data-primevue-style-id", ee), qe(n.value, Y), n.value.onload = function(me) {
        return P == null ? void 0 : P(me, {
          name: ee
        });
      }, z == null || z(ee)), !r.value && (U = _e(t, function(me) {
        n.value.textContent = me, j == null || j(ee);
      }, {
        immediate: !0
      }), r.value = !0);
    }
  }, W = function() {
    !s || !r.value || (U(), bt(n.value) && s.head.removeChild(n.value), r.value = !1, n.value = null);
  };
  return d && !u && Ft(E), {
    id: v,
    name: p,
    el: n,
    css: t,
    unload: W,
    load: E,
    isLoaded: Vr(r)
  };
}
function Le(o) {
  "@babel/helpers - typeof";
  return Le = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Le(o);
}
function Po(o, e) {
  return Yt(o) || Gt(o, e) || Ut(o, e) || Kt();
}
function Kt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ut(o, e) {
  if (o) {
    if (typeof o == "string")
      return To(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? To(o, e) : void 0;
  }
}
function To(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++)
    t[r] = o[r];
  return t;
}
function Gt(o, e) {
  var r = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (r != null) {
    var t, n, i, l, s = [], a = !0, d = !1;
    try {
      if (i = (r = r.call(o)).next, e !== 0)
        for (; !(a = (t = i.call(r)).done) && (s.push(t.value), s.length !== e); a = !0)
          ;
    } catch (c) {
      d = !0, n = c;
    } finally {
      try {
        if (!a && r.return != null && (l = r.return(), Object(l) !== l))
          return;
      } finally {
        if (d)
          throw n;
      }
    }
    return s;
  }
}
function Yt(o) {
  if (Array.isArray(o))
    return o;
}
function zo(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function lo(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zo(Object(r), !0).forEach(function(t) {
      Xt(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : zo(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function Xt(o, e, r) {
  return (e = qt(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function qt(o) {
  var e = Zt(o, "string");
  return Le(e) == "symbol" ? e : e + "";
}
function Zt(o, e) {
  if (Le(o) != "object" || !o)
    return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Le(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var Qt = function(e) {
  var r = e.dt;
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
    padding-right: `.concat(r("scrollbar.width"), `;
}
`);
}, Jt = {}, en = {}, T = {
  name: "base",
  css: Qt,
  style: Mt,
  classes: Jt,
  inlineStyles: en,
  load: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, n = t(q(e, {
      dt: Te
    }));
    return B(n) ? Ht(Pe(n), lo({
      name: this.name
    }, r)) : {};
  },
  loadCSS: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, e);
  },
  loadStyle: function() {
    var e = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, r, function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return R.transformCSS(r.name || e.name, "".concat(n).concat(t));
    });
  },
  getCommonTheme: function(e) {
    return R.getCommon(this.name, e);
  },
  getComponentTheme: function(e) {
    return R.getComponent(this.name, e);
  },
  getDirectiveTheme: function(e) {
    return R.getDirective(this.name, e);
  },
  getPresetTheme: function(e, r, t) {
    return R.getCustomPreset(this.name, e, r, t);
  },
  getLayerOrderThemeCSS: function() {
    return R.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var t = q(this.css, {
        dt: Te
      }) || "", n = Pe("".concat(t).concat(e)), i = Object.entries(r).reduce(function(l, s) {
        var a = Po(s, 2), d = a[0], c = a[1];
        return l.push("".concat(d, '="').concat(c, '"')) && l;
      }, []).join(" ");
      return B(n) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(i, ">").concat(n, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return R.getCommonStyleSheet(this.name, e, r);
  },
  getThemeStyleSheet: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [R.getStyleSheet(this.name, e, r)];
    if (this.style) {
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = q(this.style, {
        dt: Te
      }), l = Pe(R.transformCSS(n, i)), s = Object.entries(r).reduce(function(a, d) {
        var c = Po(d, 2), u = c[0], f = c[1];
        return a.push("".concat(u, '="').concat(f, '"')) && a;
      }, []).join(" ");
      B(l) && t.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(s, ">").concat(l, "</style>"));
    }
    return t.join("");
  },
  extend: function(e) {
    return lo(lo({}, this), {}, {
      css: void 0,
      style: void 0
    }, e);
  }
}, se = vo();
function De(o) {
  "@babel/helpers - typeof";
  return De = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, De(o);
}
function Lo(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Ge(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Lo(Object(r), !0).forEach(function(t) {
      on(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : Lo(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function on(o, e, r) {
  return (e = rn(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function rn(o) {
  var e = tn(o, "string");
  return De(e) == "symbol" ? e : e + "";
}
function tn(o, e) {
  if (De(o) != "object" || !o)
    return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (De(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var nn = {
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
    text: [N.STARTS_WITH, N.CONTAINS, N.NOT_CONTAINS, N.ENDS_WITH, N.EQUALS, N.NOT_EQUALS],
    numeric: [N.EQUALS, N.NOT_EQUALS, N.LESS_THAN, N.LESS_THAN_OR_EQUAL_TO, N.GREATER_THAN, N.GREATER_THAN_OR_EQUAL_TO],
    date: [N.DATE_IS, N.DATE_IS_NOT, N.DATE_BEFORE, N.DATE_AFTER]
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
}, an = Symbol();
function ln(o, e) {
  var r = {
    config: Hr(e)
  };
  return o.config.globalProperties.$primevue = r, o.provide(an, r), sn(), dn(o, r), r;
}
var ke = [];
function sn() {
  M.clear(), ke.forEach(function(o) {
    return o == null ? void 0 : o();
  }), ke = [];
}
function dn(o, e) {
  var r = ne(!1), t = function() {
    var d;
    if (((d = e.config) === null || d === void 0 ? void 0 : d.theme) !== "none" && !R.isStyleNameLoaded("common")) {
      var c, u, f = ((c = T.getCommonTheme) === null || c === void 0 ? void 0 : c.call(T)) || {}, p = f.primitive, m = f.semantic, v = f.global, h = f.style, b = {
        nonce: (u = e.config) === null || u === void 0 || (u = u.csp) === null || u === void 0 ? void 0 : u.nonce
      };
      T.load(p == null ? void 0 : p.css, Ge({
        name: "primitive-variables"
      }, b)), T.load(m == null ? void 0 : m.css, Ge({
        name: "semantic-variables"
      }, b)), T.load(v == null ? void 0 : v.css, Ge({
        name: "global-variables"
      }, b)), T.loadStyle(Ge({
        name: "global-style"
      }, b), h), R.setLoadedStyleName("common");
    }
  };
  M.on("theme:change", function(a) {
    r.value || (o.config.globalProperties.$primevue.config.theme = a, r.value = !0);
  });
  var n = _e(e.config, function(a, d) {
    se.emit("config:change", {
      newValue: a,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = _e(function() {
    return e.config.ripple;
  }, function(a, d) {
    se.emit("config:ripple:change", {
      newValue: a,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  }), l = _e(function() {
    return e.config.theme;
  }, function(a, d) {
    r.value || R.setTheme(a), e.config.unstyled || t(), r.value = !1, se.emit("config:theme:change", {
      newValue: a,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !1
  }), s = _e(function() {
    return e.config.unstyled;
  }, function(a, d) {
    !a && e.config.theme && t(), se.emit("config:unstyled:change", {
      newValue: a,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  });
  ke.push(n), ke.push(i), ke.push(l), ke.push(s);
}
var cn = {
  install: function(e, r) {
    var t = st(nn, r);
    ln(e, t);
  }
}, un = { transitionDuration: "{transition.duration}" }, fn = { borderWidth: "0", borderColor: "{content.border.color}" }, pn = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", padding: "1.125rem", fontWeight: "700", borderRadius: "0", borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "1px" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, gn = { borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "1.125rem" }, mn = { light: { header: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.50}", activeHoverBackground: "{surface.100}" } }, dark: { header: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.800}", activeHoverBackground: "{surface.700}" } } }, hn = { root: un, panel: fn, header: pn, content: gn, colorScheme: mn }, vn = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, bn = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, yn = { padding: "{list.padding}", gap: "{list.gap}" }, kn = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, $n = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, wn = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Cn = { borderRadius: "{border.radius.sm}" }, Sn = { padding: "{list.option.padding}" }, On = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, xn = { root: vn, overlay: bn, list: yn, option: kn, optionGroup: $n, dropdown: wn, chip: Cn, emptyMessage: Sn, colorScheme: On }, Bn = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, _n = { size: "1rem" }, In = { borderColor: "{content.background}", offset: "-0.75rem" }, Rn = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, Pn = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, Tn = { root: Bn, icon: _n, group: In, lg: Rn, xl: Pn }, zn = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, Ln = { size: "0.5rem" }, Dn = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, An = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, En = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, Mn = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, jn = { root: zn, dot: Ln, sm: Dn, lg: An, xl: En, colorScheme: Mn }, Nn = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, Vn = { transitionDuration: "0.2s", focusRing: { width: "0", style: "none", color: "transparent", offset: "0" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.625rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.5rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.75rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.5rem 0", gap: "0", header: { padding: "0.625rem 1rem 0 1rem" }, option: { padding: "0.625rem 1rem", borderRadius: "0" }, optionGroup: { padding: "0.625rem 1rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.15s" }, navigation: { list: { padding: "0.5rem 0", gap: "0" }, item: { padding: "0.625rem 1rem", borderRadius: "0", gap: "0.5rem" }, submenuLabel: { padding: "0.625rem 1rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "1rem", shadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.5rem", shadow: "0 1px 3px rgba(0, 0, 0, 0.3)" }, navigation: { shadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, focusRing: { shadow: "0 0 0 0.2rem {primary.200}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.0}", borderColor: "{surface.300}", hoverBorderColor: "{primary.color}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.500}", shadow: "none" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, focusRing: { shadow: "0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.950}", borderColor: "{surface.600}", hoverBorderColor: "{primary.color}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "none" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, Fn = { primitive: Nn, semantic: Vn }, Wn = { borderRadius: "{content.border.radius}" }, Hn = { root: Wn }, Kn = { padding: "1.25rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, Un = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Gn = { color: "{navigation.item.icon.color}" }, Yn = { root: Kn, item: Un, separator: Gn }, Xn = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "1rem", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.75rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3.25rem" }, label: { fontWeight: "600" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", offset: "{form.field.focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, qn = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {primary.200}" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {surface.200}" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {sky.200}" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {green.200}" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {orange.200}" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {purple.200}" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {red.200}" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {surface.400}" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {sky.400}, transparent 80%)" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.400}, transparent 80%)" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {orange.400}, transparent 80%)" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {purple.400}, transparent 80%)" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.400}, transparent 80%)" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.0}, transparent 80%)" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {help.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {help.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {danger.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {danger.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, Zn = { root: Xn, colorScheme: qn }, Qn = { background: "{content.background}", borderRadius: "{border.radius.lg}", color: "{content.color}", shadow: "0 .125rem .25rem rgba(0,0,0,.075)" }, Jn = { padding: "1.5rem", gap: "0.75rem" }, ei = { gap: "0.5rem" }, oi = { fontSize: "1.25rem", fontWeight: "700" }, ri = { color: "{text.muted.color}" }, ti = { root: Qn, body: Jn, caption: ei, title: oi, subtitle: ri }, ni = { transitionDuration: "{transition.duration}" }, ii = { gap: "0.25rem" }, ai = { padding: "1rem", gap: "0.5rem" }, li = { width: "1rem", height: "1rem", borderRadius: "50", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, si = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, di = { root: ni, content: ii, indicatorList: ai, indicator: li, colorScheme: si }, ci = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, ui = { width: "2.5rem", color: "{form.field.icon.color}" }, fi = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, pi = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1.25rem" }, gi = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, mi = { color: "{form.field.icon.color}" }, hi = { root: ci, dropdown: ui, overlay: fi, list: pi, option: gi, clearIcon: mi }, vi = { borderRadius: "{border.radius.sm}", width: "1.5rem", height: "1.5rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1.25rem", height: "1.25rem" }, lg: { width: "1.75rem", height: "1.75rem" } }, bi = { size: "1rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1.25rem" } }, yi = { root: vi, icon: bi }, ki = { borderRadius: "16px", paddingX: "0.875rem", paddingY: "0.625rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, $i = { width: "2rem", height: "2rem" }, wi = { size: "1rem" }, Ci = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Si = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, Oi = { root: ki, image: $i, icon: wi, removeIcon: Ci, colorScheme: Si }, xi = { transitionDuration: "{transition.duration}" }, Bi = { width: "1.75rem", height: "1.75rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, _i = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, Ii = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, Ri = { root: xi, preview: Bi, panel: _i, colorScheme: Ii }, Pi = { size: "2rem", color: "{overlay.modal.color}" }, Ti = { gap: "1rem" }, zi = { icon: Pi, content: Ti }, Li = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Di = { padding: "{overlay.popover.padding}", gap: "1rem" }, Ai = { size: "1.5rem", color: "{overlay.popover.color}" }, Ei = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, Mi = { root: Li, content: Di, icon: Ai, footer: Ei }, ji = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Ni = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Vi = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Fi = { mobileIndent: "1.25rem" }, Wi = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, Hi = { borderColor: "{content.border.color}" }, Ki = { root: ji, list: Ni, item: Vi, submenu: Fi, submenuIcon: Wi, separator: Hi }, Ui = { transitionDuration: "{transition.duration}" }, Gi = { borderColor: "{datatable.border.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Yi = { selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Xi = { fontWeight: "700" }, qi = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, Zi = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Qi = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, Ji = { fontWeight: "700" }, ea = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, oa = { color: "{primary.color}" }, ra = { width: "0.5rem" }, ta = { width: "1px", color: "{primary.color}" }, na = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, ia = { size: "2rem" }, aa = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, la = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, sa = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, da = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, ca = { light: { root: { borderColor: "{content.border.color}" }, header: { background: "{surface.50}", color: "{text.color}" }, headerCell: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}" }, footer: { background: "{surface.50}", color: "{text.color}" }, footerCell: { background: "{surface.50}", color: "{text.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, header: { background: "{surface.800}", color: "{text.color}" }, headerCell: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}" }, footer: { background: "{surface.800}", color: "{text.color}" }, footerCell: { background: "{surface.800}", color: "{text.color}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, ua = { root: Ui, header: Gi, headerCell: Yi, columnTitle: Xi, row: qi, bodyCell: Zi, footerCell: Qi, columnFooter: Ji, footer: ea, dropPoint: oa, columnResizer: ra, resizeIndicator: ta, sortIcon: na, loadingIcon: ia, rowToggleButton: aa, filter: la, paginatorTop: sa, paginatorBottom: da, colorScheme: ca }, fa = { borderColor: "{content.border.color}", borderWidth: "1px", borderRadius: "4px", padding: "0" }, pa = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.875rem 1.125rem", borderRadius: "5px 5px 0 0" }, ga = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "5px" }, ma = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.875rem 1.125rem", borderRadius: "0 0 5px 5px" }, ha = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, va = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, ba = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } }, ya = { root: fa, header: pa, content: ga, footer: ma, paginatorTop: ha, paginatorBottom: va, colorScheme: ba }, ka = { transitionDuration: "{transition.duration}" }, $a = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, wa = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.75rem 0" }, Ca = { gap: "0.5rem", fontWeight: "700" }, Sa = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Oa = { color: "{form.field.icon.color}" }, xa = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}" }, Ba = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}" }, _a = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, Ia = { margin: "0.75rem 0 0 0" }, Ra = { padding: "0.375rem", fontWeight: "700", color: "{content.color}" }, Pa = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", padding: "0.375rem", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Ta = { margin: "0.75rem 0 0 0" }, za = { padding: "0.5rem", borderRadius: "{content.border.radius}" }, La = { margin: "0.75rem 0 0 0" }, Da = { padding: "0.5rem", borderRadius: "{content.border.radius}" }, Aa = { padding: "0.75rem 0 0 0", borderColor: "{content.border.color}" }, Ea = { padding: "0.75rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, Ma = { light: { dropdown: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, ja = { root: ka, panel: $a, header: wa, title: Ca, dropdown: Sa, inputIcon: Oa, selectMonth: xa, selectYear: Ba, group: _a, dayView: Ia, weekDay: Ra, date: Pa, monthView: Ta, month: za, yearView: La, year: Da, buttonbar: Aa, timePicker: Ea, colorScheme: Ma }, Na = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, Va = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, Fa = { fontSize: "1.25rem", fontWeight: "600" }, Wa = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Ha = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, Ka = { root: Na, header: Va, title: Fa, content: Wa, footer: Ha }, Ua = { borderColor: "{content.border.color}" }, Ga = { background: "{content.background}", color: "{text.color}" }, Ya = { margin: "1.125rem 0", padding: "0 1.125rem", content: { padding: "0 0.625rem" } }, Xa = { margin: "0 1.125rem", padding: "1.125rem 0", content: { padding: "0.625rem 0" } }, qa = { root: Ua, content: Ga, horizontal: Ya, vertical: Xa }, Za = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.lg}" }, Qa = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ja = { root: Za, item: Qa }, el = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, ol = { padding: "{overlay.modal.padding}" }, rl = { fontSize: "1.5rem", fontWeight: "600" }, tl = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, nl = { padding: "{overlay.modal.padding}" }, il = { root: el, header: ol, title: rl, content: tl, footer: nl }, al = { borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, ll = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, sl = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, dl = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, cl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, ul = { light: { toolbar: { background: "{surface.50}" } }, dark: { toolbar: { background: "{surface.800}" } } }, fl = { toolbar: al, toolbarItem: ll, overlay: sl, overlayOption: dl, content: cl, colorScheme: ul }, pl = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0.75rem 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, gl = { borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "{content.border.color}", padding: "0.625rem 0.875rem", gap: "0.5rem", fontWeight: "700", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ml = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, hl = { padding: "0" }, vl = { light: { legend: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}", hoverColor: "{text.hover.color}" } }, dark: { legend: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" } } }, bl = { root: pl, legend: gl, toggleIcon: ml, content: hl, colorScheme: vl }, yl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, kl = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", padding: "1.125rem", borderRadius: "5px 5px 0 0", gap: "0.5rem" }, $l = { highlightBorderColor: "{primary.color}", padding: "1.125rem", gap: "1rem" }, wl = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, Cl = { gap: "0.5rem" }, Sl = { height: "0.25rem" }, Ol = { gap: "0.5rem" }, xl = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } }, Bl = { root: yl, header: kl, content: $l, file: wl, fileList: Cl, progressbar: Sl, basic: Ol, colorScheme: xl }, _l = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, Il = { active: { top: "-1.375rem" } }, Rl = { input: { paddingTop: "1.875rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, Pl = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, Tl = { root: _l, over: Il, in: Rl, on: Pl }, zl = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, Ll = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0", prev: { borderRadius: "0 12px 12px 0" }, next: { borderRadius: "12px 0 0 12px" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Dl = { size: "1.5rem" }, Al = { padding: "1rem 0.25rem" }, El = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ml = { size: "1rem" }, jl = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, Nl = { gap: "0.5rem", padding: "1rem" }, Vl = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Fl = { background: "rgba(0, 0, 0, 0.5)" }, Wl = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, Hl = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Kl = { size: "1.5rem" }, Ul = { light: { thumbnailsContent: { background: "{surface.50}" }, thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailsContent: { background: "{surface.800}" }, thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, Gl = { root: zl, navButton: Ll, navIcon: Dl, thumbnailsContent: Al, thumbnailNavButton: El, thumbnailNavButtonIcon: Ml, caption: jl, indicatorList: Nl, indicatorButton: Vl, insetIndicatorList: Fl, insetIndicatorButton: Wl, closeButton: Hl, closeButtonIcon: Kl, colorScheme: Ul }, Yl = { color: "{form.field.icon.color}" }, Xl = { icon: Yl }, ql = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, Zl = { paddingTop: "1.875rem", paddingBottom: "{form.field.padding.y}" }, Ql = { root: ql, input: Zl }, Jl = { transitionDuration: "{transition.duration}" }, es = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, os = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "{content.border.radius}", padding: ".5rem", gap: "0.5rem" }, rs = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ts = { root: Jl, preview: es, toolbar: os, action: rs }, ns = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.3)", hoverBorderColor: "rgba(255,255,255,0.3)", borderWidth: "3px", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, is = { handle: ns }, as = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, ls = { fontWeight: "500" }, ss = { size: "1.125rem" }, ds = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "color-mix(in srgb, {blue.50}, transparent 5%)", color: "{blue.600}", shadow: "none" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "color-mix(in srgb, {green.50}, transparent 5%)", color: "{green.600}", shadow: "none" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "color-mix(in srgb,{yellow.50}, transparent 5%)", color: "{yellow.600}", shadow: "none" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "color-mix(in srgb, {red.50}, transparent 5%)", color: "{red.600}", shadow: "none" }, secondary: { background: "{surface.100}", borderColor: "{surface.100}", color: "{surface.600}", shadow: "none" }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", shadow: "none" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.500}, transparent 84%)", color: "{blue.500}", shadow: "none" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.500}", shadow: "none" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.500}, transparent 84%)", color: "{yellow.500}", shadow: "none" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.500}", shadow: "none" }, secondary: { background: "{surface.800}", borderColor: "{surface.800}", color: "{surface.300}", shadow: "none" }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", shadow: "none" } } }, cs = { root: as, text: ls, icon: ss, colorScheme: ds }, us = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, fs = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, ps = { root: us, display: fs }, gs = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, ms = { borderRadius: "{border.radius.sm}" }, hs = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, vs = { root: gs, chip: ms, colorScheme: hs }, bs = { borderRadius: "{form.field.border.radius}", padding: "0.625rem 0.5rem", minWidth: "2.75rem" }, ys = { light: { addon: { background: "{surface.50}", borderColor: "{form.field.border.color}", color: "{text.muted.color}" } }, dark: { addon: { background: "{surface.800}", borderColor: "{form.field.border.color}", color: "{text.muted.color}" } } }, ks = { addon: bs, colorScheme: ys }, $s = { transitionDuration: "{transition.duration}" }, ws = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, Cs = { light: { button: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { button: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.500}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, Ss = { root: $s, button: ws, colorScheme: Cs }, Os = { gap: "0.5rem" }, xs = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, Bs = { root: Os, input: xs }, _s = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Is = { root: _s }, Rs = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ps = { background: "{primary.color}" }, Ts = { background: "{content.border.color}" }, zs = { color: "{text.muted.color}" }, Ls = { root: Rs, value: Ps, range: Ts, text: zs }, Ds = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, As = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Es = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Ms = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, js = { color: "{list.option.color}", gutterStart: "-0.5rem", gutterEnd: "0.5rem" }, Ns = { padding: "{list.option.padding}" }, Vs = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, Fs = { root: Ds, list: As, option: Es, optionGroup: Ms, checkmark: js, emptyMessage: Ns, colorScheme: Vs }, Ws = { borderColor: "transparent", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.75rem 1rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, Hs = { borderRadius: "{content.border.radius}", padding: "0.75rem 1rem" }, Ks = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Us = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, Gs = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Ys = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background.}", color: "{navigation.submenu.label.color}" }, Xs = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, qs = { borderColor: "{content.border.color}" }, Zs = { borderRadius: "50%", size: "2rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Qs = { light: { root: { background: "{surface.50}" } }, dark: { root: { background: "{surface.800}" } } }, Js = { root: Ws, baseItem: Hs, item: Ks, overlay: Us, submenu: Gs, submenuLabel: Ys, submenuIcon: Xs, separator: qs, mobileButton: Zs, colorScheme: Qs }, ed = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, od = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, rd = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, td = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background.}", color: "{navigation.submenu.label.color}" }, nd = { borderColor: "{content.border.color}" }, id = { root: ed, list: od, item: rd, submenuLabel: td, separator: nd }, ad = { borderColor: "transparent", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem 1rem", transitionDuration: "{transition.duration}" }, ld = { borderRadius: "{content.border.radius}", padding: "0.75rem 1rem" }, sd = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, dd = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1.25rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, cd = { borderColor: "{content.border.color}" }, ud = { borderRadius: "50%", size: "2rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, fd = { light: { root: { background: "{surface.50}" } }, dark: { root: { background: "{surface.800}" } } }, pd = { root: ad, baseItem: ld, item: sd, submenu: dd, separator: cd, mobileButton: ud, colorScheme: fd }, gd = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, md = { padding: "0.75rem 1rem", gap: "0.5rem", sm: { padding: "0.5rem 0.625rem" }, lg: { padding: "0.75rem 0.875rem" } }, hd = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, vd = { size: "1.25rem", sm: { size: "1rem" }, lg: { size: "1.5rem" } }, bd = { width: "2rem", height: "2rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, yd = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, kd = { root: { borderWidth: "1px" } }, $d = { content: { padding: "0" } }, wd = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "transparent", color: "{blue.600}", shadow: "none", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {blue.200}" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "transparent", color: "{green.600}", shadow: "none", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {green.200}" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "transparent", color: "{yellow.600}", shadow: "none", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {yellow.200}" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "transparent", color: "{red.600}", shadow: "none", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {red.200}" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "transparent", color: "{surface.600}", shadow: "none", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.200}" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "transparent", color: "{surface.50}", shadow: "none", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.400}" } }, outlined: { color: "{surface.900}", borderColor: "{surface.900}" }, simple: { color: "{surface.900}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "transparent", color: "{blue.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "transparent", color: "{green.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "transparent", color: "{yellow.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "transparent", color: "{red.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "transparent", color: "{surface.300}", shadow: "none", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "transparent", color: "{surface.950}", shadow: "none", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, Cd = { root: gd, content: md, text: hd, icon: vd, closeButton: bd, closeIcon: yd, outlined: kd, simple: $d, colorScheme: wd }, Sd = { borderRadius: "{content.border.radius}", gap: "1rem" }, Od = { background: "{content.border.color}", size: "0.625rem" }, xd = { gap: "0.5rem" }, Bd = { size: "0.5rem" }, _d = { size: "1rem" }, Id = { verticalGap: "0.5rem", horizontalGap: "1rem" }, Rd = { root: Sd, meters: Od, label: xd, labelMarker: Bd, labelIcon: _d, labelList: Id }, Pd = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Td = { width: "2.5rem", color: "{form.field.icon.color}" }, zd = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Ld = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Dd = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, Ad = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Ed = { color: "{form.field.icon.color}" }, Md = { borderRadius: "{border.radius.sm}" }, jd = { padding: "{list.option.padding}" }, Nd = { root: Pd, dropdown: Td, overlay: zd, list: Ld, option: Dd, optionGroup: Ad, chip: Md, clearIcon: Ed, emptyMessage: jd }, Vd = { gap: "1.125rem" }, Fd = { gap: "0.5rem" }, Wd = { root: Vd, controls: Fd }, Hd = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, Kd = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "1rem 1.25rem", toggleablePadding: "1rem 1.25rem 1.5rem 1.25rem", borderRadius: "{content.border.radius}" }, Ud = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Gd = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, Yd = { root: Hd, node: Kd, nodeToggleButton: Ud, connector: Gd }, Xd = { outline: { width: "2px", color: "{content.background}" } }, qd = { root: Xd }, Zd = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, Qd = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Jd = { color: "{text.muted.color}" }, ec = { maxWidth: "2.5rem" }, oc = { root: Zd, navButton: Qd, currentPageReport: Jd, jumpToPageInput: ec }, rc = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}" }, tc = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", padding: "1.125rem", borderRadius: "5px 5px 0 0" }, nc = { padding: "0.25rem 1.125rem" }, ic = { fontWeight: "700" }, ac = { padding: "1.125rem" }, lc = { padding: "1.125rem" }, sc = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } }, dc = { root: rc, header: tc, toggleableHeader: nc, title: ic, content: ac, footer: lc, colorScheme: sc }, cc = { gap: "0", transitionDuration: "{transition.duration}" }, uc = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "0", first: { borderWidth: "1px 1px 0 1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "0 1px 1px 1px", bottomBorderRadius: "{content.border.radius}" } }, fc = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, pc = { indent: "1rem" }, gc = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, mc = { root: cc, panel: uc, item: fc, submenu: pc, submenuIcon: gc }, hc = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, vc = { color: "{form.field.icon.color}" }, bc = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, yc = { gap: "0.75rem" }, kc = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, $c = { meter: hc, icon: vc, overlay: bc, content: yc, colorScheme: kc }, wc = { gap: "1.125rem" }, Cc = { gap: "0.5rem" }, Sc = { root: wc, controls: Cc }, Oc = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, xc = { padding: "{overlay.popover.padding}" }, Bc = { root: Oc, content: xc }, _c = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.5rem" }, Ic = { background: "{primary.color}" }, Rc = { color: "{primary.contrast.color}", fontSize: "0.875rem", fontWeight: "600" }, Pc = { root: _c, value: Ic, label: Rc }, Tc = { light: { root: { colorOne: "{pink.500}", colorTwo: "{sky.500}", colorThree: "{emerald.500}", colorFour: "{amber.500}" } }, dark: { root: { colorOne: "{pink.400}", colorTwo: "{sky.400}", colorThree: "{emerald.400}", colorFour: "{amber.400}" } } }, zc = { colorScheme: Tc }, Lc = { width: "1.5rem", height: "1.5rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1.25rem", height: "1.25rem" }, lg: { width: "1.75rem", height: "1.75rem" } }, Dc = { size: "1rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1.25rem" } }, Ac = { root: Lc, icon: Dc }, Ec = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Mc = { size: "1.25rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, jc = { root: Ec, icon: Mc }, Nc = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, Vc = { colorScheme: Nc }, Fc = { transitionDuration: "{transition.duration}" }, Wc = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Hc = { light: { bar: { background: "{surface.200}" } }, dark: { bar: { background: "{surface.700}" } } }, Kc = { root: Fc, bar: Wc, colorScheme: Hc }, Uc = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Gc = { width: "2.5rem", color: "{form.field.icon.color}" }, Yc = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Xc = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, qc = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Zc = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Qc = { color: "{form.field.icon.color}" }, Jc = { color: "{list.option.color}", gutterStart: "-0.5rem", gutterEnd: "0.5rem" }, eu = { padding: "{list.option.padding}" }, ou = { root: Uc, dropdown: Gc, overlay: Yc, list: Xc, option: qc, optionGroup: Zc, clearIcon: Qc, checkmark: Jc, emptyMessage: eu }, ru = { borderRadius: "{form.field.border.radius}" }, tu = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, nu = { root: ru, colorScheme: tu }, iu = { borderRadius: "{content.border.radius}" }, au = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, lu = { root: iu, colorScheme: au }, su = { transitionDuration: "{transition.duration}" }, du = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, cu = { background: "{primary.color}" }, uu = { width: "16px", height: "16px", borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", content: { borderRadius: "50%", hoverBackground: "{primary.color}", width: "12px", height: "12px", shadow: "none" }, focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, fu = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, pu = { root: su, track: du, range: cu, handle: uu, colorScheme: fu }, gu = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, mu = { root: gu }, hu = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, vu = { root: hu }, bu = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, yu = { background: "{content.border.color}" }, ku = { size: "24px", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, $u = { light: { handle: { background: "{surface.400}" } }, dark: { handle: { background: "{surface.600}" } } }, wu = { root: bu, gutter: yu, handle: ku, colorScheme: $u }, Cu = { transitionDuration: "{transition.duration}" }, Su = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, Ou = { padding: "0.5rem", gap: "1rem" }, xu = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Bu = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, _u = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2.25rem", fontSize: "1.125rem", fontWeight: "500", borderRadius: "50%", shadow: "none" }, Iu = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, Ru = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, Pu = { root: Cu, separator: Su, step: Ou, stepHeader: xu, stepTitle: Bu, stepNumber: _u, steppanels: Iu, steppanel: Ru }, Tu = { transitionDuration: "{transition.duration}" }, zu = { background: "{content.border.color}" }, Lu = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Du = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Au = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2.25rem", fontSize: "1.125rem", fontWeight: "500", borderRadius: "50%", shadow: "none" }, Eu = { root: Tu, separator: zu, itemLink: Lu, itemLabel: Du, itemNumber: Au }, Mu = { transitionDuration: "{transition.duration}" }, ju = { borderWidth: "0", background: "{content.background}", borderColor: "{content.border.color}" }, Nu = { borderWidth: "2px 0 0 0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.25rem", fontWeight: "600", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Vu = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Fu = { height: "0", bottom: "0", background: "transparent" }, Wu = { light: { item: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.0}" } }, dark: { item: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.900}" } } }, Hu = { root: Mu, tablist: ju, item: Nu, itemIcon: Vu, activeBar: Fu, colorScheme: Wu }, Ku = { transitionDuration: "{transition.duration}" }, Uu = { borderWidth: "0", background: "{content.background}", borderColor: "{content.border.color}" }, Gu = { borderWidth: "2px 0 0 0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.25rem", fontWeight: "700", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, Yu = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, Xu = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, qu = { height: "0", bottom: "0", background: "transparent" }, Zu = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" }, tab: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.0}" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" }, tab: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.900}" } } }, Qu = { root: Ku, tablist: Uu, tab: Gu, tabpanel: Yu, navButton: Xu, activeBar: qu, colorScheme: Zu }, Ju = { transitionDuration: "{transition.duration}" }, ef = { background: "{content.background}", borderColor: "{content.border.color}" }, of = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, rf = { background: "{content.background}", color: "{content.color}" }, tf = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, nf = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, af = { root: Ju, tabList: ef, tab: of, tabPanel: rf, navButton: tf, colorScheme: nf }, lf = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, sf = { size: "0.75rem" }, df = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, cf = { root: lf, icon: sf, colorScheme: df }, uf = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, ff = { gap: "0.25rem" }, pf = { margin: "2px 0" }, gf = { root: uf, prompt: ff, commandResponse: pf }, mf = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, hf = { root: mf }, vf = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, bf = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, yf = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, kf = { mobileIndent: "1.25rem" }, $f = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, wf = { borderColor: "{content.border.color}" }, Cf = { root: vf, list: bf, item: yf, submenu: kf, submenuIcon: $f, separator: wf }, Sf = { minHeight: "5rem" }, Of = { eventContent: { padding: "1rem 0" } }, xf = { eventContent: { padding: "0 1rem" } }, Bf = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{primary.color}", content: { borderRadius: "50%", size: "0.375rem", background: "transparent", insetShadow: "none" } }, _f = { color: "{content.border.color}", size: "2px" }, If = { event: Sf, horizontal: Of, vertical: xf, eventMarker: Bf, eventConnector: _f }, Rf = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "0 0 0 6px", transitionDuration: "{transition.duration}" }, Pf = { size: "1.25rem" }, Tf = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, zf = { gap: "0.5rem" }, Lf = { fontWeight: "500", fontSize: "1rem" }, Df = { fontWeight: "500", fontSize: "0.875rem" }, Af = { width: "2rem", height: "2rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, Ef = { size: "1rem" }, Mf = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.500}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {blue.200}" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.500}", color: "{green.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {green.200}" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.500}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {yellow.200}" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.500}", color: "{red.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {red.200}" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.500}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.200}" } } }, contrast: { background: "{surface.900}", borderColor: "{primary.color}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.400}" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)" } } } } }, jf = { root: Rf, icon: Pf, content: Tf, text: zf, summary: Lf, detail: Df, closeButton: Af, closeIcon: Ef, colorScheme: Mf }, Nf = { padding: "0.625rem 1rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", hoverColor: "{form.field.color}", checkedBackground: "{highlight.background}", checkedColor: "{highlight.color}", checkedBorderColor: "{form.field.border.color}", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.5rem 0.75rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.75rem 1.25rem" } }, Vf = { color: "{text.muted.color}", hoverColor: "{text.muted.color}", checkedColor: "{highlight.color}", disabledColor: "{form.field.disabled.color}" }, Ff = { checkedBackground: "transparent", checkedShadow: "none", padding: "0", borderRadius: "0", sm: { padding: "0" }, lg: { padding: "0" } }, Wf = { light: { root: { hoverBackground: "{surface.100}" } }, dark: { root: { hoverBackground: "{surface.800}" } } }, Hf = { root: Nf, icon: Vf, content: Ff, colorScheme: Wf }, Kf = { width: "3rem", height: "1.75rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, Uf = { borderRadius: "50%", size: "1.25rem" }, Gf = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, Yf = { root: Kf, handle: Uf, colorScheme: Gf }, Xf = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, qf = { light: { root: { background: "{surface.50}", color: "{content.color}" } }, dark: { root: { background: "{surface.800}", color: "{content.color}" } } }, Zf = { root: Xf, colorScheme: qf }, Qf = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.625rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, Jf = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, ep = { root: Qf, colorScheme: Jf }, op = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, rp = { padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, gap: "0.25rem" }, tp = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, np = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ip = { size: "2rem" }, ap = { margin: "0 0 0.5rem 0" }, lp = { root: op, node: rp, nodeIcon: tp, nodeToggleButton: np, loadingIcon: ip, filter: ap }, sp = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, dp = { width: "2.5rem", color: "{form.field.icon.color}" }, cp = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, up = { padding: "{list.padding}" }, fp = { padding: "{list.option.padding}" }, pp = { borderRadius: "{border.radius.sm}" }, gp = { color: "{form.field.icon.color}" }, mp = { root: sp, dropdown: dp, overlay: cp, tree: up, emptyMessage: fp, chip: pp, clearIcon: gp }, hp = { transitionDuration: "{transition.duration}" }, vp = { borderColor: "{treetable.border.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem" }, bp = { selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, yp = { fontWeight: "700" }, kp = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{sr.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, $p = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, wp = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem" }, Cp = { fontWeight: "700" }, Sp = { borderColor: "{treetable.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, Op = { width: "0.5rem" }, xp = { width: "1px", color: "{primary.color}" }, Bp = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, _p = { size: "2rem" }, Ip = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Rp = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Pp = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Tp = { light: { root: { borderColor: "{content.border.color}" }, header: { background: "{surface.50}", color: "{text.color}" }, headerCell: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}" }, footer: { background: "{surface.50}", color: "{text.color}" }, footerCell: { background: "{surface.50}", color: "{text.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, header: { background: "{surface.800}", color: "{text.color}" }, headerCell: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}" }, footer: { background: "{surface.800}", color: "{text.color}" }, footerCell: { background: "{surface.800}", color: "{text.color}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, zp = { root: hp, header: vp, headerCell: bp, columnTitle: yp, row: kp, bodyCell: $p, footerCell: wp, columnFooter: Cp, footer: Sp, columnResizer: Op, resizeIndicator: xp, sortIcon: Bp, loadingIcon: _p, nodeToggleButton: Ip, paginatorTop: Rp, paginatorBottom: Pp, colorScheme: Tp }, Lp = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, Dp = { loader: Lp }, Ap = Object.defineProperty, Ep = Object.defineProperties, Mp = Object.getOwnPropertyDescriptors, Do = Object.getOwnPropertySymbols, jp = Object.prototype.hasOwnProperty, Np = Object.prototype.propertyIsEnumerable, Ao = (o, e, r) => e in o ? Ap(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, Eo, Vp = (Eo = ((o, e) => {
  for (var r in e || (e = {}))
    jp.call(e, r) && Ao(o, r, e[r]);
  if (Do)
    for (var r of Do(e))
      Np.call(e, r) && Ao(o, r, e[r]);
  return o;
})({}, Fn), Ep(Eo, Mp({ components: { accordion: hn, autocomplete: xn, avatar: Tn, badge: jn, blockui: Hn, breadcrumb: Yn, button: Zn, datepicker: ja, card: ti, carousel: di, cascadeselect: hi, checkbox: yi, chip: Oi, colorpicker: Ri, confirmdialog: zi, confirmpopup: Mi, contextmenu: Ki, dataview: ya, datatable: ua, dialog: Ka, divider: qa, dock: Ja, drawer: il, editor: fl, fieldset: bl, fileupload: Bl, iftalabel: Ql, floatlabel: Tl, galleria: Gl, iconfield: Xl, image: ts, imagecompare: is, inlinemessage: cs, inplace: ps, inputchips: vs, inputgroup: ks, inputnumber: Ss, inputotp: Bs, inputtext: Is, knob: Ls, listbox: Fs, megamenu: Js, menu: id, menubar: pd, message: Cd, metergroup: Rd, multiselect: Nd, orderlist: Wd, organizationchart: Yd, overlaybadge: qd, popover: Bc, paginator: oc, password: $c, panel: dc, panelmenu: mc, picklist: Sc, progressbar: Pc, progressspinner: zc, radiobutton: Ac, rating: jc, ripple: Vc, scrollpanel: Kc, select: ou, selectbutton: nu, skeleton: lu, slider: pu, speeddial: mu, splitter: wu, splitbutton: vu, stepper: Pu, steps: Eu, tabmenu: Hu, tabs: Qu, tabview: af, textarea: hf, tieredmenu: Cf, tag: cf, terminal: gf, timeline: If, togglebutton: Hf, toggleswitch: Yf, tree: lp, treeselect: mp, treetable: zp, toast: jf, toolbar: Zf, tooltip: ep, virtualscroller: Dp } })));
function Ae(o) {
  "@babel/helpers - typeof";
  return Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ae(o);
}
function Fp(o, e) {
  if (!(o instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Wp(o, e) {
  for (var r = 0; r < e.length; r++) {
    var t = e[r];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(o, Kp(t.key), t);
  }
}
function Hp(o, e, r) {
  return e && Wp(o.prototype, e), Object.defineProperty(o, "prototype", { writable: !1 }), o;
}
function Kp(o) {
  var e = Up(o, "string");
  return Ae(e) == "symbol" ? e : e + "";
}
function Up(o, e) {
  if (Ae(o) != "object" || !o)
    return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Ae(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(o);
}
var Gp = /* @__PURE__ */ function() {
  function o(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    Fp(this, o), this.element = e, this.listener = r;
  }
  return Hp(o, [{
    key: "bindScrollListener",
    value: function() {
      this.scrollableParents = Ct(this.element);
      for (var r = 0; r < this.scrollableParents.length; r++)
        this.scrollableParents[r].addEventListener("scroll", this.listener);
    }
  }, {
    key: "unbindScrollListener",
    value: function() {
      if (this.scrollableParents)
        for (var r = 0; r < this.scrollableParents.length; r++)
          this.scrollableParents[r].removeEventListener("scroll", this.listener);
    }
  }, {
    key: "destroy",
    value: function() {
      this.unbindScrollListener(), this.element = null, this.listener = null, this.scrollableParents = null;
    }
  }]);
}(), le = {
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
};
function Yp() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", e = Kr();
  return "".concat(o).concat(e.replace("v-", "").replaceAll("-", "_"));
}
var Mo = T.extend({
  name: "common"
});
function Ee(o) {
  "@babel/helpers - typeof";
  return Ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ee(o);
}
function Xp(o) {
  return pr(o) || qp(o) || fr(o) || ur();
}
function qp(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null)
    return Array.from(o);
}
function xe(o, e) {
  return pr(o) || Zp(o, e) || fr(o, e) || ur();
}
function ur() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fr(o, e) {
  if (o) {
    if (typeof o == "string")
      return jo(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? jo(o, e) : void 0;
  }
}
function jo(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++)
    t[r] = o[r];
  return t;
}
function Zp(o, e) {
  var r = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (r != null) {
    var t, n, i, l, s = [], a = !0, d = !1;
    try {
      if (i = (r = r.call(o)).next, e === 0) {
        if (Object(r) !== r)
          return;
        a = !1;
      } else
        for (; !(a = (t = i.call(r)).done) && (s.push(t.value), s.length !== e); a = !0)
          ;
    } catch (c) {
      d = !0, n = c;
    } finally {
      try {
        if (!a && r.return != null && (l = r.return(), Object(l) !== l))
          return;
      } finally {
        if (d)
          throw n;
      }
    }
    return s;
  }
}
function pr(o) {
  if (Array.isArray(o))
    return o;
}
function No(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function S(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? No(Object(r), !0).forEach(function(t) {
      Re(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : No(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function Re(o, e, r) {
  return (e = Qp(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function Qp(o) {
  var e = Jp(o, "string");
  return Ee(e) == "symbol" ? e : e + "";
}
function Jp(o, e) {
  if (Ee(o) != "object" || !o)
    return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Ee(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var oo = {
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
        M.off("theme:change", this._loadCoreStyles), e || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(e, r) {
        var t = this;
        M.off("theme:change", this._themeScopedListener), e ? (this._loadScopedThemeStyles(e), this._themeScopedListener = function() {
          return t._loadScopedThemeStyles(e);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var e, r, t, n, i, l, s, a, d, c, u, f = (e = this.pt) === null || e === void 0 ? void 0 : e._usept, p = f ? (r = this.pt) === null || r === void 0 || (r = r.originalValue) === null || r === void 0 ? void 0 : r[this.$.type.name] : void 0, m = f ? (t = this.pt) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t[this.$.type.name] : this.pt;
    (n = m || p) === null || n === void 0 || (n = n.hooks) === null || n === void 0 || (i = n.onBeforeCreate) === null || i === void 0 || i.call(n);
    var v = (l = this.$primevueConfig) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l._usept, h = v ? (s = this.$primevue) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s.originalValue : void 0, b = v ? (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a.value : (d = this.$primevue) === null || d === void 0 || (d = d.config) === null || d === void 0 ? void 0 : d.pt;
    (c = b || h) === null || c === void 0 || (c = c[this.$.type.name]) === null || c === void 0 || (c = c.hooks) === null || c === void 0 || (u = c.onBeforeCreate) === null || u === void 0 || u.call(c), this.$attrSelector = Yp(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var e;
    this.rootEl = eo(He(this.$el) ? this.$el : (e = this.$el) === null || e === void 0 ? void 0 : e.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = S({
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
        var r = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(e)), t = this._useDefaultPT(this._getOptionValue, "hooks.".concat(e));
        r == null || r(), t == null || t();
      }
    },
    _mergeProps: function(e) {
      for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
        t[n - 1] = arguments[n];
      return Qe(e) ? e.apply(void 0, t) : C.apply(void 0, t);
    },
    _load: function() {
      le.isStyleNameLoaded("base") || (T.loadCSS(this.$styleOptions), this._loadGlobalStyles(), le.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var e, r;
      !le.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (r = this.$style) !== null && r !== void 0 && r.name && (Mo.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), le.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var e = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      B(e) && T.load(e, S({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var e, r;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!R.isStyleNameLoaded("common")) {
          var t, n, i = ((t = this.$style) === null || t === void 0 || (n = t.getCommonTheme) === null || n === void 0 ? void 0 : n.call(t)) || {}, l = i.primitive, s = i.semantic, a = i.global, d = i.style;
          T.load(l == null ? void 0 : l.css, S({
            name: "primitive-variables"
          }, this.$styleOptions)), T.load(s == null ? void 0 : s.css, S({
            name: "semantic-variables"
          }, this.$styleOptions)), T.load(a == null ? void 0 : a.css, S({
            name: "global-variables"
          }, this.$styleOptions)), T.loadStyle(S({
            name: "global-style"
          }, this.$styleOptions), d), R.setLoadedStyleName("common");
        }
        if (!R.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (r = this.$style) !== null && r !== void 0 && r.name) {
          var c, u, f, p, m = ((c = this.$style) === null || c === void 0 || (u = c.getComponentTheme) === null || u === void 0 ? void 0 : u.call(c)) || {}, v = m.css, h = m.style;
          (f = this.$style) === null || f === void 0 || f.load(v, S({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (p = this.$style) === null || p === void 0 || p.loadStyle(S({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), h), R.setLoadedStyleName(this.$style.name);
        }
        if (!R.isStyleNameLoaded("layer-order")) {
          var b, k, y = (b = this.$style) === null || b === void 0 || (k = b.getLayerOrderThemeCSS) === null || k === void 0 ? void 0 : k.call(b);
          T.load(y, S({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), R.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(e) {
      var r, t, n, i = ((r = this.$style) === null || r === void 0 || (t = r.getPresetTheme) === null || t === void 0 ? void 0 : t.call(r, e, "[".concat(this.$attrSelector, "]"))) || {}, l = i.css, s = (n = this.$style) === null || n === void 0 ? void 0 : n.load(l, S({
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
      le.clearLoadedStyleNames(), M.on("theme:change", e);
    },
    _removeThemeListeners: function() {
      M.off("theme:change", this._loadCoreStyles), M.off("theme:change", this._load), M.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(e) {
      return e ? this.$options.hostName ? e.$.type.name === this.$options.hostName ? e : this._getHostInstance(e.$parentInstance) : e.$parentInstance : void 0;
    },
    _getPropValue: function(e) {
      var r;
      return this[e] || ((r = this._getHostInstance(this)) === null || r === void 0 ? void 0 : r[e]);
    },
    _getOptionValue: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return ho(e, r, t);
    },
    _getPTValue: function() {
      var e, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, l = /./g.test(t) && !!n[t.split(".")[0]], s = this._getPropValue("ptOptions") || ((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.ptOptions) || {}, a = s.mergeSections, d = a === void 0 ? !0 : a, c = s.mergeProps, u = c === void 0 ? !1 : c, f = i ? l ? this._useGlobalPT(this._getPTClassValue, t, n) : this._useDefaultPT(this._getPTClassValue, t, n) : void 0, p = l ? void 0 : this._getPTSelf(r, this._getPTClassValue, t, S(S({}, n), {}, {
        global: f || {}
      })), m = this._getPTDatasets(t);
      return d || !d && p ? u ? this._mergeProps(u, f, p, m) : S(S(S({}, f), p), m) : S(S({}, p), m);
    },
    _getPTSelf: function() {
      for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
        t[n - 1] = arguments[n];
      return C(
        this._usePT.apply(this, [this._getPT(e, this.$name)].concat(t)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(t))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var e, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = "data-pc-", i = t === "root" && B((e = this.pt) === null || e === void 0 ? void 0 : e["data-pc-section"]);
      return t !== "transition" && S(S({}, t === "root" && S(S(Re({}, "".concat(n, "name"), oe(i ? (r = this.pt) === null || r === void 0 ? void 0 : r["data-pc-section"] : this.$.type.name)), i && Re({}, "".concat(n, "extend"), oe(this.$.type.name))), {}, Re({}, "".concat(this.$attrSelector), ""))), {}, Re({}, "".concat(n, "section"), oe(t)));
    },
    _getPTClassValue: function() {
      var e = this._getOptionValue.apply(this, arguments);
      return H(e) || Je(e) ? {
        class: e
      } : e;
    },
    _getPT: function(e) {
      var r = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 ? arguments[2] : void 0, i = function(s) {
        var a, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = n ? n(s) : s, u = oe(t), f = oe(r.$name);
        return (a = d ? u !== f ? c == null ? void 0 : c[u] : void 0 : c == null ? void 0 : c[u]) !== null && a !== void 0 ? a : c;
      };
      return e != null && e.hasOwnProperty("_usept") ? {
        _usept: e._usept,
        originalValue: i(e.originalValue),
        value: i(e.value)
      } : i(e, !0);
    },
    _usePT: function(e, r, t, n) {
      var i = function(v) {
        return r(v, t, n);
      };
      if (e != null && e.hasOwnProperty("_usept")) {
        var l, s = e._usept || ((l = this.$primevueConfig) === null || l === void 0 ? void 0 : l.ptOptions) || {}, a = s.mergeSections, d = a === void 0 ? !0 : a, c = s.mergeProps, u = c === void 0 ? !1 : c, f = i(e.originalValue), p = i(e.value);
        return f === void 0 && p === void 0 ? void 0 : H(p) ? p : H(f) ? f : d || !d && p ? u ? this._mergeProps(u, f, p) : S(S({}, f), p) : p;
      }
      return i(e);
    },
    _useGlobalPT: function(e, r, t) {
      return this._usePT(this.globalPT, e, r, t);
    },
    _useDefaultPT: function(e, r, t) {
      return this._usePT(this.defaultPT, e, r, t);
    },
    ptm: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, e, S(S({}, this.$params), r));
    },
    ptmi: function() {
      var e, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = C(this.$_attrsWithoutPT, this.ptm(r, t));
      return n != null && n.hasOwnProperty("id") && ((e = n.id) !== null && e !== void 0 || (n.id = this.$id)), n;
    },
    ptmo: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(e, r, S({
        instance: this
      }, t), !1);
    },
    cx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, e, S(S({}, this.$params), r));
    },
    sx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (r) {
        var n = this._getOptionValue(this.$style.inlineStyles, e, S(S({}, this.$params), t)), i = this._getOptionValue(Mo.inlineStyles, e, S(S({}, this.$params), t));
        return [i, n];
      }
    }
  },
  computed: {
    globalPT: function() {
      var e, r = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(t) {
        return q(t, {
          instance: r
        });
      });
    },
    defaultPT: function() {
      var e, r = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(t) {
        return r._getOptionValue(t, r.$name, S({}, r.$params)) || q(t, S({}, r.$params));
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
      var e, r = Object.keys(((e = this.$.vnode) === null || e === void 0 ? void 0 : e.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(t) {
        var n = xe(t, 1), i = n[0];
        return r == null ? void 0 : r.includes(i);
      }));
    },
    $theme: function() {
      var e;
      return (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.theme;
    },
    $style: function() {
      return S(S({
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
        var r = xe(e, 1), t = r[0];
        return t == null ? void 0 : t.startsWith("pt:");
      }).reduce(function(e, r) {
        var t = xe(r, 2), n = t[0], i = t[1], l = n.split(":"), s = Xp(l), a = s.slice(1);
        return a == null || a.reduce(function(d, c, u, f) {
          return !d[c] && (d[c] = u === f.length - 1 ? i : {}), d[c];
        }, e), e;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var r = xe(e, 1), t = r[0];
        return !(t != null && t.startsWith("pt:"));
      }).reduce(function(e, r) {
        var t = xe(r, 2), n = t[0], i = t[1];
        return e[n] = i, e;
      }, {});
    }
  }
}, eg = `
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
`, og = T.extend({
  name: "baseicon",
  css: eg
});
function Me(o) {
  "@babel/helpers - typeof";
  return Me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Me(o);
}
function Vo(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Fo(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Vo(Object(r), !0).forEach(function(t) {
      rg(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : Vo(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function rg(o, e, r) {
  return (e = tg(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function tg(o) {
  var e = ng(o, "string");
  return Me(e) == "symbol" ? e : e + "";
}
function ng(o, e) {
  if (Me(o) != "object" || !o)
    return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Me(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var bo = {
  name: "BaseIcon",
  extends: oo,
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
  style: og,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var e = Se(this.label);
      return Fo(Fo({}, !this.isUnstyled && {
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
}, gr = {
  name: "ChevronDownIcon",
  extends: bo
};
function ig(o, e, r, t, n, i) {
  return O(), I("svg", C({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o.pti()), e[0] || (e[0] = [X("path", {
    d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
gr.render = ig;
var yo = {
  name: "SpinnerIcon",
  extends: bo
};
function ag(o, e, r, t, n, i) {
  return O(), I("svg", C({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o.pti()), e[0] || (e[0] = [X("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
yo.render = ag;
var mr = {
  name: "TimesCircleIcon",
  extends: bo
};
function lg(o, e, r, t, n, i) {
  return O(), I("svg", C({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o.pti()), e[0] || (e[0] = [X("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
mr.render = lg;
var sg = ({ dt: o }) => `
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${o("chip.background")};
    color: ${o("chip.color")};
    border-radius: ${o("chip.border.radius")};
    padding-block: ${o("chip.padding.y")};
    padding-inline: ${o("chip.padding.x")};
    gap: ${o("chip.gap")};
}

.p-chip-icon {
    color: ${o("chip.icon.color")};
    font-size: ${o("chip.icon.font.size")};
    width: ${o("chip.icon.size")};
    height: ${o("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${o("chip.image.width")};
    height: ${o("chip.image.height")};
    margin-inline-start: calc(-1 * ${o("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${o("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-block-start: calc(${o("chip.padding.y")} / 2);
    padding-block-end: calc(${o("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${o("chip.remove.icon.size")};
    width: ${o("chip.remove.icon.size")};
    height: ${o("chip.remove.icon.size")};
    color: ${o("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${o("chip.transition.duration")}, box-shadow ${o("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${o("chip.remove.icon.focus.ring.shadow")};
    outline: ${o("chip.remove.icon.focus.ring.width")} ${o("chip.remove.icon.focus.ring.style")} ${o("chip.remove.icon.focus.ring.color")};
    outline-offset: ${o("chip.remove.icon.focus.ring.offset")};
}
`, dg = {
  root: "p-chip p-component",
  image: "p-chip-image",
  icon: "p-chip-icon",
  label: "p-chip-label",
  removeIcon: "p-chip-remove-icon"
}, cg = T.extend({
  name: "chip",
  style: sg,
  classes: dg
}), ug = {
  name: "BaseChip",
  extends: oo,
  props: {
    label: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    removable: {
      type: Boolean,
      default: !1
    },
    removeIcon: {
      type: String,
      default: void 0
    }
  },
  style: cg,
  provide: function() {
    return {
      $pcChip: this,
      $parentInstance: this
    };
  }
}, hr = {
  name: "Chip",
  extends: ug,
  inheritAttrs: !1,
  emits: ["remove"],
  data: function() {
    return {
      visible: !0
    };
  },
  methods: {
    onKeydown: function(e) {
      (e.key === "Enter" || e.key === "Backspace") && this.close(e);
    },
    close: function(e) {
      this.visible = !1, this.$emit("remove", e);
    }
  },
  computed: {
    dataP: function() {
      return we({
        removable: this.removable
      });
    }
  },
  components: {
    TimesCircleIcon: mr
  }
}, fg = ["aria-label", "data-p"], pg = ["src"];
function gg(o, e, r, t, n, i) {
  return n.visible ? (O(), I("div", C({
    key: 0,
    class: o.cx("root"),
    "aria-label": o.label
  }, o.ptmi("root"), {
    "data-p": i.dataP
  }), [L(o.$slots, "default", {}, function() {
    return [o.image ? (O(), I("img", C({
      key: 0,
      src: o.image
    }, o.ptm("image"), {
      class: o.cx("image")
    }), null, 16, pg)) : o.$slots.icon ? (O(), ge(so(o.$slots.icon), C({
      key: 1,
      class: o.cx("icon")
    }, o.ptm("icon")), null, 16, ["class"])) : o.icon ? (O(), I("span", C({
      key: 2,
      class: [o.cx("icon"), o.icon]
    }, o.ptm("icon")), null, 16)) : V("", !0), o.label ? (O(), I("div", C({
      key: 3,
      class: o.cx("label")
    }, o.ptm("label")), he(o.label), 17)) : V("", !0)];
  }), o.removable ? L(o.$slots, "removeicon", {
    key: 0,
    removeCallback: i.close,
    keydownCallback: i.onKeydown
  }, function() {
    return [(O(), ge(so(o.removeIcon ? "span" : "TimesCircleIcon"), C({
      class: [o.cx("removeIcon"), o.removeIcon],
      onClick: i.close,
      onKeydown: i.onKeydown
    }, o.ptm("removeIcon")), null, 16, ["class", "onClick", "onKeydown"]))];
  }) : V("", !0)], 16, fg)) : V("", !0);
}
hr.render = gg;
var mg = {
  name: "BaseEditableHolder",
  extends: oo,
  emits: ["update:modelValue", "value-change"],
  props: {
    modelValue: {
      type: null,
      default: void 0
    },
    defaultValue: {
      type: null,
      default: void 0
    },
    name: {
      type: String,
      default: void 0
    },
    invalid: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    formControl: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    },
    $pcForm: {
      default: void 0
    },
    $pcFormField: {
      default: void 0
    }
  },
  data: function() {
    return {
      d_value: this.defaultValue || this.modelValue
    };
  },
  watch: {
    modelValue: function(e) {
      this.d_value = e;
    },
    defaultValue: function(e) {
      this.d_value = e;
    },
    $formName: {
      immediate: !0,
      handler: function(e) {
        var r, t;
        this.formField = ((r = this.$pcForm) === null || r === void 0 || (t = r.register) === null || t === void 0 ? void 0 : t.call(r, e, this.$formControl)) || {};
      }
    },
    $formControl: {
      immediate: !0,
      handler: function(e) {
        var r, t;
        this.formField = ((r = this.$pcForm) === null || r === void 0 || (t = r.register) === null || t === void 0 ? void 0 : t.call(r, this.$formName, e)) || {};
      }
    },
    $formDefaultValue: {
      immediate: !0,
      handler: function(e) {
        this.d_value !== e && (this.d_value = e);
      }
    },
    $formValue: {
      immediate: !1,
      handler: function(e) {
        var r;
        (r = this.$pcForm) !== null && r !== void 0 && r.getFieldState(this.$formName) && e !== this.d_value && (this.d_value = e);
      }
    }
  },
  formField: {},
  methods: {
    writeValue: function(e, r) {
      var t, n;
      this.controlled && (this.d_value = e, this.$emit("update:modelValue", e)), this.$emit("value-change", e), (t = (n = this.formField).onChange) === null || t === void 0 || t.call(n, {
        originalEvent: r,
        value: e
      });
    },
    // @todo move to @primeuix/utils
    findNonEmpty: function() {
      for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
        r[t] = arguments[t];
      return r.find(B);
    }
  },
  computed: {
    $filled: function() {
      return B(this.d_value);
    },
    $invalid: function() {
      var e, r;
      return !this.$formNovalidate && this.findNonEmpty(this.invalid, (e = this.$pcFormField) === null || e === void 0 || (e = e.$field) === null || e === void 0 ? void 0 : e.invalid, (r = this.$pcForm) === null || r === void 0 || (r = r.getFieldState(this.$formName)) === null || r === void 0 ? void 0 : r.invalid);
    },
    $formName: function() {
      var e;
      return this.$formNovalidate ? void 0 : this.name || ((e = this.$formControl) === null || e === void 0 ? void 0 : e.name);
    },
    $formControl: function() {
      var e;
      return this.formControl || ((e = this.$pcFormField) === null || e === void 0 ? void 0 : e.formControl);
    },
    $formNovalidate: function() {
      var e;
      return (e = this.$formControl) === null || e === void 0 ? void 0 : e.novalidate;
    },
    $formDefaultValue: function() {
      var e, r;
      return this.findNonEmpty(this.d_value, (e = this.$pcFormField) === null || e === void 0 ? void 0 : e.initialValue, (r = this.$pcForm) === null || r === void 0 || (r = r.initialValues) === null || r === void 0 ? void 0 : r[this.$formName]);
    },
    $formValue: function() {
      var e, r;
      return this.findNonEmpty((e = this.$pcFormField) === null || e === void 0 || (e = e.$field) === null || e === void 0 ? void 0 : e.value, (r = this.$pcForm) === null || r === void 0 || (r = r.getFieldState(this.$formName)) === null || r === void 0 ? void 0 : r.value);
    },
    controlled: function() {
      return this.$inProps.hasOwnProperty("modelValue") || !this.$inProps.hasOwnProperty("modelValue") && !this.$inProps.hasOwnProperty("defaultValue");
    },
    // @deprecated use $filled instead
    filled: function() {
      return this.$filled;
    }
  }
}, vr = {
  name: "BaseInput",
  extends: mg,
  props: {
    size: {
      type: String,
      default: null
    },
    fluid: {
      type: Boolean,
      default: null
    },
    variant: {
      type: String,
      default: null
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    },
    $pcFluid: {
      default: void 0
    }
  },
  computed: {
    $variant: function() {
      var e;
      return (e = this.variant) !== null && e !== void 0 ? e : this.$primevue.config.inputStyle || this.$primevue.config.inputVariant;
    },
    $fluid: function() {
      var e;
      return (e = this.fluid) !== null && e !== void 0 ? e : !!this.$pcFluid;
    },
    // @deprecated use $fluid instead
    hasFluid: function() {
      return this.$fluid;
    }
  }
}, hg = ({ dt: o }) => `
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${o("inputtext.color")};
    background: ${o("inputtext.background")};
    padding-block: ${o("inputtext.padding.y")};
    padding-inline: ${o("inputtext.padding.x")};
    border: 1px solid ${o("inputtext.border.color")};
    transition: background ${o("inputtext.transition.duration")}, color ${o("inputtext.transition.duration")}, border-color ${o("inputtext.transition.duration")}, outline-color ${o("inputtext.transition.duration")}, box-shadow ${o("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${o("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${o("inputtext.shadow")};
}

.p-inputtext:enabled:hover {
    border-color: ${o("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${o("inputtext.focus.border.color")};
    box-shadow: ${o("inputtext.focus.ring.shadow")};
    outline: ${o("inputtext.focus.ring.width")} ${o("inputtext.focus.ring.style")} ${o("inputtext.focus.ring.color")};
    outline-offset: ${o("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${o("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${o("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${o("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${o("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${o("inputtext.disabled.background")};
    color: ${o("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${o("inputtext.placeholder.color")};
}

.p-inputtext.p-invalid::placeholder {
    color: ${o("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${o("inputtext.sm.font.size")};
    padding-block: ${o("inputtext.sm.padding.y")};
    padding-inline: ${o("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${o("inputtext.lg.font.size")};
    padding-block: ${o("inputtext.lg.padding.y")};
    padding-inline: ${o("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`, vg = {
  root: function(e) {
    var r = e.instance, t = e.props;
    return ["p-inputtext p-component", {
      "p-filled": r.$filled,
      "p-inputtext-sm p-inputfield-sm": t.size === "small",
      "p-inputtext-lg p-inputfield-lg": t.size === "large",
      "p-invalid": r.$invalid,
      "p-variant-filled": r.$variant === "filled",
      "p-inputtext-fluid": r.$fluid
    }];
  }
}, bg = T.extend({
  name: "inputtext",
  style: hg,
  classes: vg
}), yg = {
  name: "BaseInputText",
  extends: vr,
  style: bg,
  provide: function() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
function je(o) {
  "@babel/helpers - typeof";
  return je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, je(o);
}
function kg(o, e, r) {
  return (e = $g(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function $g(o) {
  var e = wg(o, "string");
  return je(e) == "symbol" ? e : e + "";
}
function wg(o, e) {
  if (je(o) != "object" || !o)
    return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (je(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var br = {
  name: "InputText",
  extends: yg,
  inheritAttrs: !1,
  methods: {
    onInput: function(e) {
      this.writeValue(e.target.value, e);
    }
  },
  computed: {
    attrs: function() {
      return C(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function() {
      return we(kg({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
}, Cg = ["value", "name", "disabled", "aria-invalid", "data-p"];
function Sg(o, e, r, t, n, i) {
  return O(), I("input", C({
    type: "text",
    class: o.cx("root"),
    value: o.d_value,
    name: o.name,
    disabled: o.disabled,
    "aria-invalid": o.$invalid || void 0,
    "data-p": i.dataP,
    onInput: e[0] || (e[0] = function() {
      return i.onInput && i.onInput.apply(i, arguments);
    })
  }, i.attrs), null, 16, Cg);
}
br.render = Sg;
var Og = vo(), yr = {
  name: "Portal",
  props: {
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data: function() {
    return {
      mounted: !1
    };
  },
  mounted: function() {
    this.mounted = ar();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function xg(o, e, r, t, n, i) {
  return i.inline ? L(o.$slots, "default", {
    key: 0
  }) : n.mounted ? (O(), ge(Ur, {
    key: 1,
    to: r.appendTo
  }, [L(o.$slots, "default")], 8, ["to"])) : V("", !0);
}
yr.render = xg;
function Ne(o) {
  "@babel/helpers - typeof";
  return Ne = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ne(o);
}
function Wo(o, e) {
  return Rg(o) || Ig(o, e) || _g(o, e) || Bg();
}
function Bg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _g(o, e) {
  if (o) {
    if (typeof o == "string")
      return Ho(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ho(o, e) : void 0;
  }
}
function Ho(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++)
    t[r] = o[r];
  return t;
}
function Ig(o, e) {
  var r = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (r != null) {
    var t, n, i, l, s = [], a = !0, d = !1;
    try {
      if (i = (r = r.call(o)).next, e !== 0)
        for (; !(a = (t = i.call(r)).done) && (s.push(t.value), s.length !== e); a = !0)
          ;
    } catch (c) {
      d = !0, n = c;
    } finally {
      try {
        if (!a && r.return != null && (l = r.return(), Object(l) !== l))
          return;
      } finally {
        if (d)
          throw n;
      }
    }
    return s;
  }
}
function Rg(o) {
  if (Array.isArray(o))
    return o;
}
function Ko(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function x(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ko(Object(r), !0).forEach(function(t) {
      po(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : Ko(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function po(o, e, r) {
  return (e = Pg(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function Pg(o) {
  var e = Tg(o, "string");
  return Ne(e) == "symbol" ? e : e + "";
}
function Tg(o, e) {
  if (Ne(o) != "object" || !o)
    return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Ne(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var w = {
  _getMeta: function() {
    return [re(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], q(re(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(e, r) {
    var t, n, i;
    return (t = (e == null || (n = e.instance) === null || n === void 0 ? void 0 : n.$primevue) || (r == null || (i = r.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || t === void 0 ? void 0 : t.config;
  },
  _getOptionValue: ho,
  _getPTValue: function() {
    var e, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = function() {
      var k = w._getOptionValue.apply(w, arguments);
      return H(k) || Je(k) ? {
        class: k
      } : k;
    }, d = ((e = t.binding) === null || e === void 0 || (e = e.value) === null || e === void 0 ? void 0 : e.ptOptions) || ((r = t.$primevueConfig) === null || r === void 0 ? void 0 : r.ptOptions) || {}, c = d.mergeSections, u = c === void 0 ? !0 : c, f = d.mergeProps, p = f === void 0 ? !1 : f, m = s ? w._useDefaultPT(t, t.defaultPT(), a, i, l) : void 0, v = w._usePT(t, w._getPT(n, t.$name), a, i, x(x({}, l), {}, {
      global: m || {}
    })), h = w._getPTDatasets(t, i);
    return u || !u && v ? p ? w._mergeProps(t, p, m, v, h) : x(x(x({}, m), v), h) : x(x({}, v), h);
  },
  _getPTDatasets: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = "data-pc-";
    return x(x({}, r === "root" && po({}, "".concat(t, "name"), oe(e.$name))), {}, po({}, "".concat(t, "section"), oe(r)));
  },
  _getPT: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 ? arguments[2] : void 0, n = function(l) {
      var s, a = t ? t(l) : l, d = oe(r);
      return (s = a == null ? void 0 : a[d]) !== null && s !== void 0 ? s : a;
    };
    return e && Object.hasOwn(e, "_usept") ? {
      _usept: e._usept,
      originalValue: n(e.originalValue),
      value: n(e.value)
    } : n(e);
  },
  _usePT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, l = function(h) {
      return t(h, n, i);
    };
    if (r && Object.hasOwn(r, "_usept")) {
      var s, a = r._usept || ((s = e.$primevueConfig) === null || s === void 0 ? void 0 : s.ptOptions) || {}, d = a.mergeSections, c = d === void 0 ? !0 : d, u = a.mergeProps, f = u === void 0 ? !1 : u, p = l(r.originalValue), m = l(r.value);
      return p === void 0 && m === void 0 ? void 0 : H(m) ? m : H(p) ? p : c || !c && m ? f ? w._mergeProps(e, f, p, m) : x(x({}, p), m) : m;
    }
    return l(r);
  },
  _useDefaultPT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
    return w._usePT(e, r, t, n, i);
  },
  _loadStyles: function() {
    var e, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0, i = w._getConfig(t, n), l = {
      nonce: i == null || (e = i.csp) === null || e === void 0 ? void 0 : e.nonce
    };
    w._loadCoreStyles(r, l), w._loadThemeStyles(r, l), w._loadScopedThemeStyles(r, l), w._removeThemeListeners(r), r.$loadStyles = function() {
      return w._loadThemeStyles(r, l);
    }, w._themeChangeListener(r.$loadStyles);
  },
  _loadCoreStyles: function() {
    var e, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (!le.isStyleNameLoaded((e = t.$style) === null || e === void 0 ? void 0 : e.name) && (r = t.$style) !== null && r !== void 0 && r.name) {
      var i;
      T.loadCSS(n), (i = t.$style) === null || i === void 0 || i.loadCSS(n), le.setLoadedStyleName(t.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var e, r, t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (!(n != null && n.isUnstyled() || (n == null || (e = n.theme) === null || e === void 0 ? void 0 : e.call(n)) === "none")) {
      if (!R.isStyleNameLoaded("common")) {
        var l, s, a = ((l = n.$style) === null || l === void 0 || (s = l.getCommonTheme) === null || s === void 0 ? void 0 : s.call(l)) || {}, d = a.primitive, c = a.semantic, u = a.global, f = a.style;
        T.load(d == null ? void 0 : d.css, x({
          name: "primitive-variables"
        }, i)), T.load(c == null ? void 0 : c.css, x({
          name: "semantic-variables"
        }, i)), T.load(u == null ? void 0 : u.css, x({
          name: "global-variables"
        }, i)), T.loadStyle(x({
          name: "global-style"
        }, i), f), R.setLoadedStyleName("common");
      }
      if (!R.isStyleNameLoaded((r = n.$style) === null || r === void 0 ? void 0 : r.name) && (t = n.$style) !== null && t !== void 0 && t.name) {
        var p, m, v, h, b = ((p = n.$style) === null || p === void 0 || (m = p.getDirectiveTheme) === null || m === void 0 ? void 0 : m.call(p)) || {}, k = b.css, y = b.style;
        (v = n.$style) === null || v === void 0 || v.load(k, x({
          name: "".concat(n.$style.name, "-variables")
        }, i)), (h = n.$style) === null || h === void 0 || h.loadStyle(x({
          name: "".concat(n.$style.name, "-style")
        }, i), y), R.setLoadedStyleName(n.$style.name);
      }
      if (!R.isStyleNameLoaded("layer-order")) {
        var g, $, _ = (g = n.$style) === null || g === void 0 || ($ = g.getLayerOrderThemeCSS) === null || $ === void 0 ? void 0 : $.call(g);
        T.load(_, x({
          name: "layer-order",
          first: !0
        }, i)), R.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, t = e.preset();
    if (t && e.$attrSelector) {
      var n, i, l, s = ((n = e.$style) === null || n === void 0 || (i = n.getPresetTheme) === null || i === void 0 ? void 0 : i.call(n, t, "[".concat(e.$attrSelector, "]"))) || {}, a = s.css, d = (l = e.$style) === null || l === void 0 ? void 0 : l.load(a, x({
        name: "".concat(e.$attrSelector, "-").concat(e.$style.name)
      }, r));
      e.scopedStyleEl = d.el;
    }
  },
  _themeChangeListener: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    le.clearLoadedStyleNames(), M.on("theme:change", e);
  },
  _removeThemeListeners: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    M.off("theme:change", e.$loadStyles), e.$loadStyles = void 0;
  },
  _hook: function(e, r, t, n, i, l) {
    var s, a, d = "on".concat(dt(r)), c = w._getConfig(n, i), u = t == null ? void 0 : t.$instance, f = w._usePT(u, w._getPT(n == null || (s = n.value) === null || s === void 0 ? void 0 : s.pt, e), w._getOptionValue, "hooks.".concat(d)), p = w._useDefaultPT(u, c == null || (a = c.pt) === null || a === void 0 || (a = a.directives) === null || a === void 0 ? void 0 : a[e], w._getOptionValue, "hooks.".concat(d)), m = {
      el: t,
      binding: n,
      vnode: i,
      prevVnode: l
    };
    f == null || f(u, m), p == null || p(u, m);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var e = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length, t = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
      t[n - 2] = arguments[n];
    return Qe(e) ? e.apply(void 0, t) : C.apply(void 0, t);
  },
  _extend: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = function(s, a, d, c, u) {
      var f, p, m, v;
      a._$instances = a._$instances || {};
      var h = w._getConfig(d, c), b = a._$instances[e] || {}, k = Se(b) ? x(x({}, r), r == null ? void 0 : r.methods) : {};
      a._$instances[e] = x(x({}, b), {}, {
        /* new instance variables to pass in directive methods */
        $name: e,
        $host: a,
        $binding: d,
        $modifiers: d == null ? void 0 : d.modifiers,
        $value: d == null ? void 0 : d.value,
        $el: b.$el || a || void 0,
        $style: x({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, r == null ? void 0 : r.style),
        $primevueConfig: h,
        $attrSelector: (f = a.$pd) === null || f === void 0 || (f = f[e]) === null || f === void 0 ? void 0 : f.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return w._getPT(h == null ? void 0 : h.pt, void 0, function(g) {
            var $;
            return g == null || ($ = g.directives) === null || $ === void 0 ? void 0 : $[e];
          });
        },
        isUnstyled: function() {
          var g, $;
          return ((g = a._$instances[e]) === null || g === void 0 || (g = g.$binding) === null || g === void 0 || (g = g.value) === null || g === void 0 ? void 0 : g.unstyled) !== void 0 ? ($ = a._$instances[e]) === null || $ === void 0 || ($ = $.$binding) === null || $ === void 0 || ($ = $.value) === null || $ === void 0 ? void 0 : $.unstyled : h == null ? void 0 : h.unstyled;
        },
        theme: function() {
          var g;
          return (g = a._$instances[e]) === null || g === void 0 || (g = g.$primevueConfig) === null || g === void 0 ? void 0 : g.theme;
        },
        preset: function() {
          var g;
          return (g = a._$instances[e]) === null || g === void 0 || (g = g.$binding) === null || g === void 0 || (g = g.value) === null || g === void 0 ? void 0 : g.dt;
        },
        /* instance's methods */
        ptm: function() {
          var g, $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return w._getPTValue(a._$instances[e], (g = a._$instances[e]) === null || g === void 0 || (g = g.$binding) === null || g === void 0 || (g = g.value) === null || g === void 0 ? void 0 : g.pt, $, x({}, _));
        },
        ptmo: function() {
          var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return w._getPTValue(a._$instances[e], g, $, _, !1);
        },
        cx: function() {
          var g, $, _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (g = a._$instances[e]) !== null && g !== void 0 && g.isUnstyled() ? void 0 : w._getOptionValue(($ = a._$instances[e]) === null || $ === void 0 || ($ = $.$style) === null || $ === void 0 ? void 0 : $.classes, _, x({}, z));
        },
        sx: function() {
          var g, $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return _ ? w._getOptionValue((g = a._$instances[e]) === null || g === void 0 || (g = g.$style) === null || g === void 0 ? void 0 : g.inlineStyles, $, x({}, z)) : void 0;
        }
      }, k), a.$instance = a._$instances[e], (p = (m = a.$instance)[s]) === null || p === void 0 || p.call(m, a, d, c, u), a["$".concat(e)] = a.$instance, w._hook(e, s, a, d, c, u), a.$pd || (a.$pd = {}), a.$pd[e] = x(x({}, (v = a.$pd) === null || v === void 0 ? void 0 : v[e]), {}, {
        name: e,
        instance: a._$instances[e]
      });
    }, n = function(s) {
      var a, d, c, u = s._$instances[e], f = u == null ? void 0 : u.watch, p = function(h) {
        var b, k = h.newValue, y = h.oldValue;
        return f == null || (b = f.config) === null || b === void 0 ? void 0 : b.call(u, k, y);
      }, m = function(h) {
        var b, k = h.newValue, y = h.oldValue;
        return f == null || (b = f["config.ripple"]) === null || b === void 0 ? void 0 : b.call(u, k, y);
      };
      u.$watchersCallback = {
        config: p,
        "config.ripple": m
      }, f == null || (a = f.config) === null || a === void 0 || a.call(u, u == null ? void 0 : u.$primevueConfig), se.on("config:change", p), f == null || (d = f["config.ripple"]) === null || d === void 0 || d.call(u, u == null || (c = u.$primevueConfig) === null || c === void 0 ? void 0 : c.ripple), se.on("config:ripple:change", m);
    }, i = function(s) {
      var a = s._$instances[e].$watchersCallback;
      a && (se.off("config:change", a.config), se.off("config:ripple:change", a["config.ripple"]), s._$instances[e].$watchersCallback = void 0);
    };
    return {
      created: function(s, a, d, c) {
        s.$pd || (s.$pd = {}), s.$pd[e] = {
          name: e,
          attrSelector: xt("pd")
        }, t("created", s, a, d, c);
      },
      beforeMount: function(s, a, d, c) {
        var u;
        w._loadStyles((u = s.$pd[e]) === null || u === void 0 ? void 0 : u.instance, a, d), t("beforeMount", s, a, d, c), n(s);
      },
      mounted: function(s, a, d, c) {
        var u;
        w._loadStyles((u = s.$pd[e]) === null || u === void 0 ? void 0 : u.instance, a, d), t("mounted", s, a, d, c);
      },
      beforeUpdate: function(s, a, d, c) {
        t("beforeUpdate", s, a, d, c);
      },
      updated: function(s, a, d, c) {
        var u;
        w._loadStyles((u = s.$pd[e]) === null || u === void 0 ? void 0 : u.instance, a, d), t("updated", s, a, d, c);
      },
      beforeUnmount: function(s, a, d, c) {
        var u;
        i(s), w._removeThemeListeners((u = s.$pd[e]) === null || u === void 0 ? void 0 : u.instance), t("beforeUnmount", s, a, d, c);
      },
      unmounted: function(s, a, d, c) {
        var u;
        (u = s.$pd[e]) === null || u === void 0 || (u = u.instance) === null || u === void 0 || (u = u.scopedStyleEl) === null || u === void 0 || (u = u.value) === null || u === void 0 || u.remove(), t("unmounted", s, a, d, c);
      }
    };
  },
  extend: function() {
    var e = w._getMeta.apply(w, arguments), r = Wo(e, 2), t = r[0], n = r[1];
    return x({
      extend: function() {
        var l = w._getMeta.apply(w, arguments), s = Wo(l, 2), a = s[0], d = s[1];
        return w.extend(a, x(x(x({}, n), n == null ? void 0 : n.methods), d));
      }
    }, w._extend(t, n));
  }
}, zg = ({ dt: o }) => `
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
`, Lg = {
  root: "p-ink"
}, Dg = T.extend({
  name: "ripple-directive",
  style: zg,
  classes: Lg
}), Ag = w.extend({
  style: Dg
});
function Ve(o) {
  "@babel/helpers - typeof";
  return Ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ve(o);
}
function Eg(o) {
  return Vg(o) || Ng(o) || jg(o) || Mg();
}
function Mg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jg(o, e) {
  if (o) {
    if (typeof o == "string")
      return go(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? go(o, e) : void 0;
  }
}
function Ng(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null)
    return Array.from(o);
}
function Vg(o) {
  if (Array.isArray(o))
    return go(o);
}
function go(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++)
    t[r] = o[r];
  return t;
}
function Uo(o, e, r) {
  return (e = Fg(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function Fg(o) {
  var e = Wg(o, "string");
  return Ve(e) == "symbol" ? e : e + "";
}
function Wg(o, e) {
  if (Ve(o) != "object" || !o)
    return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Ve(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var Hg = Ag.extend("ripple", {
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
      var r = this.getInk(e);
      r || (r = yt("span", Uo(Uo({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), e.appendChild(r), this.$el = r);
    },
    remove: function(e) {
      var r = this.getInk(e);
      r && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(e), r.removeEventListener("animationend", this.onAnimationEnd), r.remove());
    },
    onMouseDown: function(e) {
      var r = this, t = e.currentTarget, n = this.getInk(t);
      if (!(!n || getComputedStyle(n, null).display === "none")) {
        if (!this.isUnstyled() && no(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"), !fe(n) && !pe(n)) {
          var i = Math.max(tr(t), wt(t));
          n.style.height = i + "px", n.style.width = i + "px";
        }
        var l = $t(t), s = e.pageX - l.left + document.body.scrollTop - pe(n) / 2, a = e.pageY - l.top + document.body.scrollLeft - fe(n) / 2;
        n.style.top = a + "px", n.style.left = s + "px", !this.isUnstyled() && ut(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          n && (!r.isUnstyled() && no(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(e) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && no(e.currentTarget, "p-ink-active"), e.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(e) {
      return e && e.children ? Eg(e.children).find(function(r) {
        return kt(r, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Kg = ({ dt: o }) => `
.p-virtualscroller-loader {
    background: ${o("virtualscroller.loader.mask.background")};
    color: ${o("virtualscroller.loader.mask.color")};
}

.p-virtualscroller-loading-icon {
    font-size: ${o("virtualscroller.loader.icon.size")};
    width: ${o("virtualscroller.loader.icon.size")};
    height: ${o("virtualscroller.loader.icon.size")};
}
`, Ug = `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}

.p-virtualscroller .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    inset-block-start: 0;
    inset-inline-start: 0;
}
`, Go = T.extend({
  name: "virtualscroller",
  css: Ug,
  style: Kg
}), Gg = {
  name: "BaseVirtualScroller",
  extends: oo,
  props: {
    id: {
      type: String,
      default: null
    },
    style: null,
    class: null,
    items: {
      type: Array,
      default: null
    },
    itemSize: {
      type: [Number, Array],
      default: 0
    },
    scrollHeight: null,
    scrollWidth: null,
    orientation: {
      type: String,
      default: "vertical"
    },
    numToleratedItems: {
      type: Number,
      default: null
    },
    delay: {
      type: Number,
      default: 0
    },
    resizeDelay: {
      type: Number,
      default: 10
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loaderDisabled: {
      type: Boolean,
      default: !1
    },
    columns: {
      type: Array,
      default: null
    },
    loading: {
      type: Boolean,
      default: !1
    },
    showSpacer: {
      type: Boolean,
      default: !0
    },
    showLoader: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: 0
    },
    inline: {
      type: Boolean,
      default: !1
    },
    step: {
      type: Number,
      default: 0
    },
    appendOnly: {
      type: Boolean,
      default: !1
    },
    autoSize: {
      type: Boolean,
      default: !1
    }
  },
  style: Go,
  provide: function() {
    return {
      $pcVirtualScroller: this,
      $parentInstance: this
    };
  },
  beforeMount: function() {
    var e;
    Go.loadCSS({
      nonce: (e = this.$primevueConfig) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce
    });
  }
};
function Fe(o) {
  "@babel/helpers - typeof";
  return Fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Fe(o);
}
function Yo(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Be(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Yo(Object(r), !0).forEach(function(t) {
      kr(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : Yo(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function kr(o, e, r) {
  return (e = Yg(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function Yg(o) {
  var e = Xg(o, "string");
  return Fe(e) == "symbol" ? e : e + "";
}
function Xg(o, e) {
  if (Fe(o) != "object" || !o)
    return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Fe(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var $r = {
  name: "VirtualScroller",
  extends: Gg,
  inheritAttrs: !1,
  emits: ["update:numToleratedItems", "scroll", "scroll-index-change", "lazy-load"],
  data: function() {
    var e = this.isBoth();
    return {
      first: e ? {
        rows: 0,
        cols: 0
      } : 0,
      last: e ? {
        rows: 0,
        cols: 0
      } : 0,
      page: e ? {
        rows: 0,
        cols: 0
      } : 0,
      numItemsInViewport: e ? {
        rows: 0,
        cols: 0
      } : 0,
      lastScrollPos: e ? {
        top: 0,
        left: 0
      } : 0,
      d_numToleratedItems: this.numToleratedItems,
      d_loading: this.loading,
      loaderArr: [],
      spacerStyle: {},
      contentStyle: {}
    };
  },
  element: null,
  content: null,
  lastScrollPos: null,
  scrollTimeout: null,
  resizeTimeout: null,
  defaultWidth: 0,
  defaultHeight: 0,
  defaultContentWidth: 0,
  defaultContentHeight: 0,
  isRangeChanged: !1,
  lazyLoadState: {},
  resizeListener: null,
  resizeObserver: null,
  initialized: !1,
  watch: {
    numToleratedItems: function(e) {
      this.d_numToleratedItems = e;
    },
    loading: function(e, r) {
      this.lazy && e !== r && e !== this.d_loading && (this.d_loading = e);
    },
    items: {
      handler: function(e, r) {
        (!r || r.length !== (e || []).length) && (this.init(), this.calculateAutoSize());
      },
      deep: !0
    },
    itemSize: function() {
      this.init(), this.calculateAutoSize();
    },
    orientation: function() {
      this.lastScrollPos = this.isBoth() ? {
        top: 0,
        left: 0
      } : 0;
    },
    scrollHeight: function() {
      this.init(), this.calculateAutoSize();
    },
    scrollWidth: function() {
      this.init(), this.calculateAutoSize();
    }
  },
  mounted: function() {
    this.viewInit(), this.lastScrollPos = this.isBoth() ? {
      top: 0,
      left: 0
    } : 0, this.lazyLoadState = this.lazyLoadState || {};
  },
  updated: function() {
    !this.initialized && this.viewInit();
  },
  unmounted: function() {
    this.unbindResizeListener(), this.initialized = !1;
  },
  methods: {
    viewInit: function() {
      xo(this.element) && (this.setContentEl(this.content), this.init(), this.calculateAutoSize(), this.bindResizeListener(), this.defaultWidth = pe(this.element), this.defaultHeight = fe(this.element), this.defaultContentWidth = pe(this.content), this.defaultContentHeight = fe(this.content), this.initialized = !0);
    },
    init: function() {
      this.disabled || (this.setSize(), this.calculateOptions(), this.setSpacerSize());
    },
    isVertical: function() {
      return this.orientation === "vertical";
    },
    isHorizontal: function() {
      return this.orientation === "horizontal";
    },
    isBoth: function() {
      return this.orientation === "both";
    },
    scrollTo: function(e) {
      this.element && this.element.scrollTo(e);
    },
    scrollToIndex: function(e) {
      var r = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto", n = this.isBoth(), i = this.isHorizontal(), l = n ? e.every(function(z) {
        return z > -1;
      }) : e > -1;
      if (l) {
        var s = this.first, a = this.element, d = a.scrollTop, c = d === void 0 ? 0 : d, u = a.scrollLeft, f = u === void 0 ? 0 : u, p = this.calculateNumItems(), m = p.numToleratedItems, v = this.getContentPosition(), h = this.itemSize, b = function() {
          var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, j = arguments.length > 1 ? arguments[1] : void 0;
          return D <= j ? 0 : D;
        }, k = function(D, j, F) {
          return D * j + F;
        }, y = function() {
          var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return r.scrollTo({
            left: D,
            top: j,
            behavior: t
          });
        }, g = n ? {
          rows: 0,
          cols: 0
        } : 0, $ = !1, _ = !1;
        n ? (g = {
          rows: b(e[0], m[0]),
          cols: b(e[1], m[1])
        }, y(k(g.cols, h[1], v.left), k(g.rows, h[0], v.top)), _ = this.lastScrollPos.top !== c || this.lastScrollPos.left !== f, $ = g.rows !== s.rows || g.cols !== s.cols) : (g = b(e, m), i ? y(k(g, h, v.left), c) : y(f, k(g, h, v.top)), _ = this.lastScrollPos !== (i ? f : c), $ = g !== s), this.isRangeChanged = $, _ && (this.first = g);
      }
    },
    scrollInView: function(e, r) {
      var t = this, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
      if (r) {
        var i = this.isBoth(), l = this.isHorizontal(), s = i ? e.every(function(h) {
          return h > -1;
        }) : e > -1;
        if (s) {
          var a = this.getRenderedRange(), d = a.first, c = a.viewport, u = function() {
            var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return t.scrollTo({
              left: b,
              top: k,
              behavior: n
            });
          }, f = r === "to-start", p = r === "to-end";
          if (f) {
            if (i)
              c.first.rows - d.rows > e[0] ? u(c.first.cols * this.itemSize[1], (c.first.rows - 1) * this.itemSize[0]) : c.first.cols - d.cols > e[1] && u((c.first.cols - 1) * this.itemSize[1], c.first.rows * this.itemSize[0]);
            else if (c.first - d > e) {
              var m = (c.first - 1) * this.itemSize;
              l ? u(m, 0) : u(0, m);
            }
          } else if (p) {
            if (i)
              c.last.rows - d.rows <= e[0] + 1 ? u(c.first.cols * this.itemSize[1], (c.first.rows + 1) * this.itemSize[0]) : c.last.cols - d.cols <= e[1] + 1 && u((c.first.cols + 1) * this.itemSize[1], c.first.rows * this.itemSize[0]);
            else if (c.last - d <= e + 1) {
              var v = (c.first + 1) * this.itemSize;
              l ? u(v, 0) : u(0, v);
            }
          }
        }
      } else
        this.scrollToIndex(e, n);
    },
    getRenderedRange: function() {
      var e = function(u, f) {
        return Math.floor(u / (f || u));
      }, r = this.first, t = 0;
      if (this.element) {
        var n = this.isBoth(), i = this.isHorizontal(), l = this.element, s = l.scrollTop, a = l.scrollLeft;
        if (n)
          r = {
            rows: e(s, this.itemSize[0]),
            cols: e(a, this.itemSize[1])
          }, t = {
            rows: r.rows + this.numItemsInViewport.rows,
            cols: r.cols + this.numItemsInViewport.cols
          };
        else {
          var d = i ? a : s;
          r = e(d, this.itemSize), t = r + this.numItemsInViewport;
        }
      }
      return {
        first: this.first,
        last: this.last,
        viewport: {
          first: r,
          last: t
        }
      };
    },
    calculateNumItems: function() {
      var e = this.isBoth(), r = this.isHorizontal(), t = this.itemSize, n = this.getContentPosition(), i = this.element ? this.element.offsetWidth - n.left : 0, l = this.element ? this.element.offsetHeight - n.top : 0, s = function(f, p) {
        return Math.ceil(f / (p || f));
      }, a = function(f) {
        return Math.ceil(f / 2);
      }, d = e ? {
        rows: s(l, t[0]),
        cols: s(i, t[1])
      } : s(r ? i : l, t), c = this.d_numToleratedItems || (e ? [a(d.rows), a(d.cols)] : a(d));
      return {
        numItemsInViewport: d,
        numToleratedItems: c
      };
    },
    calculateOptions: function() {
      var e = this, r = this.isBoth(), t = this.first, n = this.calculateNumItems(), i = n.numItemsInViewport, l = n.numToleratedItems, s = function(c, u, f) {
        var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
        return e.getLast(c + u + (c < f ? 2 : 3) * f, p);
      }, a = r ? {
        rows: s(t.rows, i.rows, l[0]),
        cols: s(t.cols, i.cols, l[1], !0)
      } : s(t, i, l);
      this.last = a, this.numItemsInViewport = i, this.d_numToleratedItems = l, this.$emit("update:numToleratedItems", this.d_numToleratedItems), this.showLoader && (this.loaderArr = r ? Array.from({
        length: i.rows
      }).map(function() {
        return Array.from({
          length: i.cols
        });
      }) : Array.from({
        length: i
      })), this.lazy && Promise.resolve().then(function() {
        var d;
        e.lazyLoadState = {
          first: e.step ? r ? {
            rows: 0,
            cols: t.cols
          } : 0 : t,
          last: Math.min(e.step ? e.step : a, ((d = e.items) === null || d === void 0 ? void 0 : d.length) || 0)
        }, e.$emit("lazy-load", e.lazyLoadState);
      });
    },
    calculateAutoSize: function() {
      var e = this;
      this.autoSize && !this.d_loading && Promise.resolve().then(function() {
        if (e.content) {
          var r = e.isBoth(), t = e.isHorizontal(), n = e.isVertical();
          e.content.style.minHeight = e.content.style.minWidth = "auto", e.content.style.position = "relative", e.element.style.contain = "none";
          var i = [pe(e.element), fe(e.element)], l = i[0], s = i[1];
          (r || t) && (e.element.style.width = l < e.defaultWidth ? l + "px" : e.scrollWidth || e.defaultWidth + "px"), (r || n) && (e.element.style.height = s < e.defaultHeight ? s + "px" : e.scrollHeight || e.defaultHeight + "px"), e.content.style.minHeight = e.content.style.minWidth = "", e.content.style.position = "", e.element.style.contain = "";
        }
      });
    },
    getLast: function() {
      var e, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, n = arguments.length > 1 ? arguments[1] : void 0;
      return this.items ? Math.min(n ? ((e = this.columns || this.items[0]) === null || e === void 0 ? void 0 : e.length) || 0 : ((r = this.items) === null || r === void 0 ? void 0 : r.length) || 0, t) : 0;
    },
    getContentPosition: function() {
      if (this.content) {
        var e = getComputedStyle(this.content), r = parseFloat(e.paddingLeft) + Math.max(parseFloat(e.left) || 0, 0), t = parseFloat(e.paddingRight) + Math.max(parseFloat(e.right) || 0, 0), n = parseFloat(e.paddingTop) + Math.max(parseFloat(e.top) || 0, 0), i = parseFloat(e.paddingBottom) + Math.max(parseFloat(e.bottom) || 0, 0);
        return {
          left: r,
          right: t,
          top: n,
          bottom: i,
          x: r + t,
          y: n + i
        };
      }
      return {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        x: 0,
        y: 0
      };
    },
    setSize: function() {
      var e = this;
      if (this.element) {
        var r = this.isBoth(), t = this.isHorizontal(), n = this.element.parentElement, i = this.scrollWidth || "".concat(this.element.offsetWidth || n.offsetWidth, "px"), l = this.scrollHeight || "".concat(this.element.offsetHeight || n.offsetHeight, "px"), s = function(d, c) {
          return e.element.style[d] = c;
        };
        r || t ? (s("height", l), s("width", i)) : s("height", l);
      }
    },
    setSpacerSize: function() {
      var e = this, r = this.items;
      if (r) {
        var t = this.isBoth(), n = this.isHorizontal(), i = this.getContentPosition(), l = function(a, d, c) {
          var u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
          return e.spacerStyle = Be(Be({}, e.spacerStyle), kr({}, "".concat(a), (d || []).length * c + u + "px"));
        };
        t ? (l("height", r, this.itemSize[0], i.y), l("width", this.columns || r[1], this.itemSize[1], i.x)) : n ? l("width", this.columns || r, this.itemSize, i.x) : l("height", r, this.itemSize, i.y);
      }
    },
    setContentPosition: function(e) {
      var r = this;
      if (this.content && !this.appendOnly) {
        var t = this.isBoth(), n = this.isHorizontal(), i = e ? e.first : this.first, l = function(c, u) {
          return c * u;
        }, s = function() {
          var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return r.contentStyle = Be(Be({}, r.contentStyle), {
            transform: "translate3d(".concat(c, "px, ").concat(u, "px, 0)")
          });
        };
        if (t)
          s(l(i.cols, this.itemSize[1]), l(i.rows, this.itemSize[0]));
        else {
          var a = l(i, this.itemSize);
          n ? s(a, 0) : s(0, a);
        }
      }
    },
    onScrollPositionChange: function(e) {
      var r = this, t = e.target, n = this.isBoth(), i = this.isHorizontal(), l = this.getContentPosition(), s = function(P, A) {
        return P ? P > A ? P - A : P : 0;
      }, a = function(P, A) {
        return Math.floor(P / (A || P));
      }, d = function(P, A, K, U, E, W) {
        return P <= E ? E : W ? K - U - E : A + E - 1;
      }, c = function(P, A, K, U, E, W, G, ae) {
        if (P <= W)
          return 0;
        var J = Math.max(0, G ? P < A ? K : P - W : P > A ? K : P - 2 * W), Y = r.getLast(J, ae);
        return J > Y ? Y - E : J;
      }, u = function(P, A, K, U, E, W) {
        var G = A + U + 2 * E;
        return P >= E && (G += E + 1), r.getLast(G, W);
      }, f = s(t.scrollTop, l.top), p = s(t.scrollLeft, l.left), m = n ? {
        rows: 0,
        cols: 0
      } : 0, v = this.last, h = !1, b = this.lastScrollPos;
      if (n) {
        var k = this.lastScrollPos.top <= f, y = this.lastScrollPos.left <= p;
        if (!this.appendOnly || this.appendOnly && (k || y)) {
          var g = {
            rows: a(f, this.itemSize[0]),
            cols: a(p, this.itemSize[1])
          }, $ = {
            rows: d(g.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], k),
            cols: d(g.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], y)
          };
          m = {
            rows: c(g.rows, $.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], k),
            cols: c(g.cols, $.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], y, !0)
          }, v = {
            rows: u(g.rows, m.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
            cols: u(g.cols, m.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], !0)
          }, h = m.rows !== this.first.rows || v.rows !== this.last.rows || m.cols !== this.first.cols || v.cols !== this.last.cols || this.isRangeChanged, b = {
            top: f,
            left: p
          };
        }
      } else {
        var _ = i ? p : f, z = this.lastScrollPos <= _;
        if (!this.appendOnly || this.appendOnly && z) {
          var D = a(_, this.itemSize), j = d(D, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, z);
          m = c(D, j, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, z), v = u(D, m, this.last, this.numItemsInViewport, this.d_numToleratedItems), h = m !== this.first || v !== this.last || this.isRangeChanged, b = _;
        }
      }
      return {
        first: m,
        last: v,
        isRangeChanged: h,
        scrollPos: b
      };
    },
    onScrollChange: function(e) {
      var r = this.onScrollPositionChange(e), t = r.first, n = r.last, i = r.isRangeChanged, l = r.scrollPos;
      if (i) {
        var s = {
          first: t,
          last: n
        };
        if (this.setContentPosition(s), this.first = t, this.last = n, this.lastScrollPos = l, this.$emit("scroll-index-change", s), this.lazy && this.isPageChanged(t)) {
          var a, d, c = {
            first: this.step ? Math.min(this.getPageByFirst(t) * this.step, (((a = this.items) === null || a === void 0 ? void 0 : a.length) || 0) - this.step) : t,
            last: Math.min(this.step ? (this.getPageByFirst(t) + 1) * this.step : n, ((d = this.items) === null || d === void 0 ? void 0 : d.length) || 0)
          }, u = this.lazyLoadState.first !== c.first || this.lazyLoadState.last !== c.last;
          u && this.$emit("lazy-load", c), this.lazyLoadState = c;
        }
      }
    },
    onScroll: function(e) {
      var r = this;
      if (this.$emit("scroll", e), this.delay) {
        if (this.scrollTimeout && clearTimeout(this.scrollTimeout), this.isPageChanged()) {
          if (!this.d_loading && this.showLoader) {
            var t = this.onScrollPositionChange(e), n = t.isRangeChanged, i = n || (this.step ? this.isPageChanged() : !1);
            i && (this.d_loading = !0);
          }
          this.scrollTimeout = setTimeout(function() {
            r.onScrollChange(e), r.d_loading && r.showLoader && (!r.lazy || r.loading === void 0) && (r.d_loading = !1, r.page = r.getPageByFirst());
          }, this.delay);
        }
      } else
        this.onScrollChange(e);
    },
    onResize: function() {
      var e = this;
      this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
        if (xo(e.element)) {
          var r = e.isBoth(), t = e.isVertical(), n = e.isHorizontal(), i = [pe(e.element), fe(e.element)], l = i[0], s = i[1], a = l !== e.defaultWidth, d = s !== e.defaultHeight, c = r ? a || d : n ? a : t ? d : !1;
          c && (e.d_numToleratedItems = e.numToleratedItems, e.defaultWidth = l, e.defaultHeight = s, e.defaultContentWidth = pe(e.content), e.defaultContentHeight = fe(e.content), e.init());
        }
      }, this.resizeDelay);
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = this.onResize.bind(this), window.addEventListener("resize", this.resizeListener), window.addEventListener("orientationchange", this.resizeListener), this.resizeObserver = new ResizeObserver(function() {
        e.onResize();
      }), this.resizeObserver.observe(this.element));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), window.removeEventListener("orientationchange", this.resizeListener), this.resizeListener = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
    },
    getOptions: function(e) {
      var r = (this.items || []).length, t = this.isBoth() ? this.first.rows + e : this.first + e;
      return {
        index: t,
        count: r,
        first: t === 0,
        last: t === r - 1,
        even: t % 2 === 0,
        odd: t % 2 !== 0
      };
    },
    getLoaderOptions: function(e, r) {
      var t = this.loaderArr.length;
      return Be({
        index: e,
        count: t,
        first: e === 0,
        last: e === t - 1,
        even: e % 2 === 0,
        odd: e % 2 !== 0
      }, r);
    },
    getPageByFirst: function(e) {
      return Math.floor(((e ?? this.first) + this.d_numToleratedItems * 4) / (this.step || 1));
    },
    isPageChanged: function(e) {
      return this.step && !this.lazy ? this.page !== this.getPageByFirst(e ?? this.first) : !0;
    },
    setContentEl: function(e) {
      this.content = e || this.content || eo(this.element, '[data-pc-section="content"]');
    },
    elementRef: function(e) {
      this.element = e;
    },
    contentRef: function(e) {
      this.content = e;
    }
  },
  computed: {
    containerClass: function() {
      return ["p-virtualscroller", this.class, {
        "p-virtualscroller-inline": this.inline,
        "p-virtualscroller-both p-both-scroll": this.isBoth(),
        "p-virtualscroller-horizontal p-horizontal-scroll": this.isHorizontal()
      }];
    },
    contentClass: function() {
      return ["p-virtualscroller-content", {
        "p-virtualscroller-loading": this.d_loading
      }];
    },
    loaderClass: function() {
      return ["p-virtualscroller-loader", {
        "p-virtualscroller-loader-mask": !this.$slots.loader
      }];
    },
    loadedItems: function() {
      var e = this;
      return this.items && !this.d_loading ? this.isBoth() ? this.items.slice(this.appendOnly ? 0 : this.first.rows, this.last.rows).map(function(r) {
        return e.columns ? r : r.slice(e.appendOnly ? 0 : e.first.cols, e.last.cols);
      }) : this.isHorizontal() && this.columns ? this.items : this.items.slice(this.appendOnly ? 0 : this.first, this.last) : [];
    },
    loadedRows: function() {
      return this.d_loading ? this.loaderDisabled ? this.loaderArr : [] : this.loadedItems;
    },
    loadedColumns: function() {
      if (this.columns) {
        var e = this.isBoth(), r = this.isHorizontal();
        if (e || r)
          return this.d_loading && this.loaderDisabled ? e ? this.loaderArr[0] : this.loaderArr : this.columns.slice(e ? this.first.cols : this.first, e ? this.last.cols : this.last);
      }
      return this.columns;
    }
  },
  components: {
    SpinnerIcon: yo
  }
}, qg = ["tabindex"];
function Zg(o, e, r, t, n, i) {
  var l = ve("SpinnerIcon");
  return o.disabled ? (O(), I($e, {
    key: 1
  }, [L(o.$slots, "default"), L(o.$slots, "content", {
    items: o.items,
    rows: o.items,
    columns: i.loadedColumns
  })], 64)) : (O(), I("div", C({
    key: 0,
    ref: i.elementRef,
    class: i.containerClass,
    tabindex: o.tabindex,
    style: o.style,
    onScroll: e[0] || (e[0] = function() {
      return i.onScroll && i.onScroll.apply(i, arguments);
    })
  }, o.ptmi("root")), [L(o.$slots, "content", {
    styleClass: i.contentClass,
    items: i.loadedItems,
    getItemOptions: i.getOptions,
    loading: n.d_loading,
    getLoaderOptions: i.getLoaderOptions,
    itemSize: o.itemSize,
    rows: i.loadedRows,
    columns: i.loadedColumns,
    contentRef: i.contentRef,
    spacerStyle: n.spacerStyle,
    contentStyle: n.contentStyle,
    vertical: i.isVertical(),
    horizontal: i.isHorizontal(),
    both: i.isBoth()
  }, function() {
    return [X("div", C({
      ref: i.contentRef,
      class: i.contentClass,
      style: n.contentStyle
    }, o.ptm("content")), [(O(!0), I($e, null, Ye(i.loadedItems, function(s, a) {
      return L(o.$slots, "item", {
        key: a,
        item: s,
        options: i.getOptions(a)
      });
    }), 128))], 16)];
  }), o.showSpacer ? (O(), I("div", C({
    key: 0,
    class: "p-virtualscroller-spacer",
    style: n.spacerStyle
  }, o.ptm("spacer")), null, 16)) : V("", !0), !o.loaderDisabled && o.showLoader && n.d_loading ? (O(), I("div", C({
    key: 1,
    class: i.loaderClass
  }, o.ptm("loader")), [o.$slots && o.$slots.loader ? (O(!0), I($e, {
    key: 0
  }, Ye(n.loaderArr, function(s, a) {
    return L(o.$slots, "loader", {
      key: a,
      options: i.getLoaderOptions(a, i.isBoth() && {
        numCols: o.d_numItemsInViewport.cols
      })
    });
  }), 128)) : V("", !0), L(o.$slots, "loadingicon", {}, function() {
    return [Ie(l, C({
      spin: "",
      class: "p-virtualscroller-loading-icon"
    }, o.ptm("loadingIcon")), null, 16)];
  })], 16)) : V("", !0)], 16, qg));
}
$r.render = Zg;
var Qg = ({ dt: o }) => `
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    inset-inline-end: ${o("autocomplete.padding.x")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    inset-inline-end: calc(${o("autocomplete.dropdown.width")} + ${o("autocomplete.padding.x")});
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${o("autocomplete.dropdown.width")};
    border-start-end-radius: ${o("autocomplete.dropdown.border.radius")};
    border-end-end-radius: ${o("autocomplete.dropdown.border.radius")};
    background: ${o("autocomplete.dropdown.background")};
    border: 1px solid ${o("autocomplete.dropdown.border.color")};
    border-inline-start: 0 none;
    color: ${o("autocomplete.dropdown.color")};
    transition: background ${o("autocomplete.transition.duration")}, color ${o("autocomplete.transition.duration")}, border-color ${o("autocomplete.transition.duration")}, outline-color ${o("autocomplete.transition.duration")}, box-shadow ${o("autocomplete.transition.duration")};
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: ${o("autocomplete.dropdown.hover.background")};
    border-color: ${o("autocomplete.dropdown.hover.border.color")};
    color: ${o("autocomplete.dropdown.hover.color")};
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: ${o("autocomplete.dropdown.active.background")};
    border-color: ${o("autocomplete.dropdown.active.border.color")};
    color: ${o("autocomplete.dropdown.active.color")};
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: ${o("autocomplete.dropdown.focus.ring.shadow")};
    outline: ${o("autocomplete.dropdown.focus.ring.width")} ${o("autocomplete.dropdown.focus.ring.style")} ${o("autocomplete.dropdown.focus.ring.color")};
    outline-offset: ${o("autocomplete.dropdown.focus.ring.offset")};
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: ${o("autocomplete.overlay.background")};
    color: ${o("autocomplete.overlay.color")};
    border: 1px solid ${o("autocomplete.overlay.border.color")};
    border-radius: ${o("autocomplete.overlay.border.radius")};
    box-shadow: ${o("autocomplete.overlay.shadow")};
}

.p-autocomplete-list-container {
    overflow: auto;
}

.p-autocomplete-list {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: ${o("autocomplete.list.gap")};
    padding: ${o("autocomplete.list.padding")};
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${o("autocomplete.option.padding")};
    border: 0 none;
    color: ${o("autocomplete.option.color")};
    background: transparent;
    transition: background ${o("autocomplete.transition.duration")}, color ${o("autocomplete.transition.duration")}, border-color ${o("autocomplete.transition.duration")};
    border-radius: ${o("autocomplete.option.border.radius")};
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: ${o("autocomplete.option.focus.background")};
    color: ${o("autocomplete.option.focus.color")};
}

.p-autocomplete-option-selected {
    background: ${o("autocomplete.option.selected.background")};
    color: ${o("autocomplete.option.selected.color")};
}

.p-autocomplete-option-selected.p-focus {
    background: ${o("autocomplete.option.selected.focus.background")};
    color: ${o("autocomplete.option.selected.focus.color")};
}

.p-autocomplete-option-group {
    margin: 0;
    padding: ${o("autocomplete.option.group.padding")};
    color: ${o("autocomplete.option.group.color")};
    background: ${o("autocomplete.option.group.background")};
    font-weight: ${o("autocomplete.option.group.font.weight")};
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(${o("autocomplete.padding.y")} / 2) ${o("autocomplete.padding.x")};
    gap: calc(${o("autocomplete.padding.y")} / 2);
    color: ${o("autocomplete.color")};
    background: ${o("autocomplete.background")};
    border: 1px solid ${o("autocomplete.border.color")};
    border-radius: ${o("autocomplete.border.radius")};
    width: 100%;
    transition: background ${o("autocomplete.transition.duration")}, color ${o("autocomplete.transition.duration")}, border-color ${o("autocomplete.transition.duration")}, outline-color ${o("autocomplete.transition.duration")}, box-shadow ${o("autocomplete.transition.duration")};
    outline-color: transparent;
    box-shadow: ${o("autocomplete.shadow")};
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: ${o("autocomplete.hover.border.color")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${o("autocomplete.focus.border.color")};
    box-shadow: ${o("autocomplete.focus.ring.shadow")};
    outline: ${o("autocomplete.focus.ring.width")} ${o("autocomplete.focus.ring.style")} ${o("autocomplete.focus.ring.color")};
    outline-offset: ${o("autocomplete.focus.ring.offset")};
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: ${o("autocomplete.invalid.border.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: ${o("autocomplete.filled.background")};
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${o("autocomplete.filled.hover.background")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: ${o("autocomplete.filled.focus.background")};
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: ${o("autocomplete.disabled.background")};
    color: ${o("autocomplete.disabled.color")};
}

.p-autocomplete-chip.p-chip {
    padding-block-start: calc(${o("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${o("autocomplete.padding.y")} / 2);
    border-radius: ${o("autocomplete.chip.border.radius")};
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-inline-start: calc(${o("autocomplete.padding.y")} / 2);
    padding-inline-end: calc(${o("autocomplete.padding.y")} / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: ${o("autocomplete.chip.focus.background")};
    color: ${o("autocomplete.chip.focus.color")};
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-block-start: calc(${o("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${o("autocomplete.padding.y")} / 2);
}

.p-autocomplete-input-chip input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-autocomplete-input-chip input::placeholder {
    color: ${o("autocomplete.placeholder.color")};
}

.p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
    color: ${o("autocomplete.invalid.placeholder.color")};
}

.p-autocomplete-empty-message {
    padding: ${o("autocomplete.empty.message.padding")};
}

.p-autocomplete-fluid {
    display: flex;
}

.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
    width: ${o("autocomplete.dropdown.sm.width")};
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
    font-size: ${o("form.field.sm.font.size")};
    width: ${o("form.field.sm.font.size")};
    height: ${o("form.field.sm.font.size")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
    width: ${o("autocomplete.dropdown.lg.width")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
    font-size: ${o("form.field.lg.font.size")};
    width: ${o("form.field.lg.font.size")};
    height: ${o("form.field.lg.font.size")};
}
`, Jg = {
  root: {
    position: "relative"
  }
}, e0 = {
  root: function(e) {
    var r = e.instance, t = e.props;
    return ["p-autocomplete p-component p-inputwrapper", {
      "p-disabled": t.disabled,
      "p-invalid": r.$invalid,
      "p-focus": r.focused,
      "p-inputwrapper-filled": r.$filled || B(r.inputValue),
      "p-inputwrapper-focus": r.focused,
      "p-autocomplete-open": r.overlayVisible,
      "p-autocomplete-fluid": r.$fluid
    }];
  },
  pcInputText: "p-autocomplete-input",
  inputMultiple: function(e) {
    var r = e.instance;
    return ["p-autocomplete-input-multiple", {
      "p-variant-filled": r.$variant === "filled"
    }];
  },
  chipItem: function(e) {
    var r = e.instance, t = e.i;
    return ["p-autocomplete-chip-item", {
      "p-focus": r.focusedMultipleOptionIndex === t
    }];
  },
  pcChip: "p-autocomplete-chip",
  chipIcon: "p-autocomplete-chip-icon",
  inputChip: "p-autocomplete-input-chip",
  loader: "p-autocomplete-loader",
  dropdown: "p-autocomplete-dropdown",
  overlay: "p-autocomplete-overlay p-component",
  listContainer: "p-autocomplete-list-container",
  list: "p-autocomplete-list",
  optionGroup: "p-autocomplete-option-group",
  option: function(e) {
    var r = e.instance, t = e.option, n = e.i, i = e.getItemOptions;
    return ["p-autocomplete-option", {
      "p-autocomplete-option-selected": r.isSelected(t),
      "p-focus": r.focusedOptionIndex === r.getOptionIndex(n, i),
      "p-disabled": r.isOptionDisabled(t)
    }];
  },
  emptyMessage: "p-autocomplete-empty-message"
}, o0 = T.extend({
  name: "autocomplete",
  style: Qg,
  classes: e0,
  inlineStyles: Jg
}), r0 = {
  name: "BaseAutoComplete",
  extends: vr,
  props: {
    suggestions: {
      type: Array,
      default: null
    },
    optionLabel: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: {
      type: String,
      default: "14rem"
    },
    dropdown: {
      type: Boolean,
      default: !1
    },
    dropdownMode: {
      type: String,
      default: "blank"
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: null
    },
    dataKey: {
      type: String,
      default: null
    },
    minLength: {
      type: Number,
      default: 1
    },
    delay: {
      type: Number,
      default: 300
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    forceSelection: {
      type: Boolean,
      default: !1
    },
    completeOnFocus: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String,
      default: null
    },
    inputStyle: {
      type: Object,
      default: null
    },
    inputClass: {
      type: [String, Object],
      default: null
    },
    panelStyle: {
      type: Object,
      default: null
    },
    panelClass: {
      type: [String, Object],
      default: null
    },
    overlayStyle: {
      type: Object,
      default: null
    },
    overlayClass: {
      type: [String, Object],
      default: null
    },
    dropdownIcon: {
      type: String,
      default: null
    },
    dropdownClass: {
      type: [String, Object],
      default: null
    },
    loader: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: null
    },
    removeTokenIcon: {
      type: String,
      default: null
    },
    chipIcon: {
      type: String,
      default: null
    },
    virtualScrollerOptions: {
      type: Object,
      default: null
    },
    autoOptionFocus: {
      type: Boolean,
      default: !1
    },
    selectOnFocus: {
      type: Boolean,
      default: !1
    },
    focusOnHover: {
      type: Boolean,
      default: !0
    },
    searchLocale: {
      type: String,
      default: void 0
    },
    searchMessage: {
      type: String,
      default: null
    },
    selectionMessage: {
      type: String,
      default: null
    },
    emptySelectionMessage: {
      type: String,
      default: null
    },
    emptySearchMessage: {
      type: String,
      default: null
    },
    showEmptyMessage: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    },
    typeahead: {
      type: Boolean,
      default: !0
    },
    ariaLabel: {
      type: String,
      default: null
    },
    ariaLabelledby: {
      type: String,
      default: null
    }
  },
  style: o0,
  provide: function() {
    return {
      $pcAutoComplete: this,
      $parentInstance: this
    };
  }
};
function Xo(o, e, r) {
  return (e = t0(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function t0(o) {
  var e = n0(o, "string");
  return Ce(e) == "symbol" ? e : e + "";
}
function n0(o, e) {
  if (Ce(o) != "object" || !o)
    return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (Ce(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
function Ce(o) {
  "@babel/helpers - typeof";
  return Ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ce(o);
}
function qo(o) {
  return s0(o) || l0(o) || a0(o) || i0();
}
function i0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a0(o, e) {
  if (o) {
    if (typeof o == "string")
      return mo(o, e);
    var r = {}.toString.call(o).slice(8, -1);
    return r === "Object" && o.constructor && (r = o.constructor.name), r === "Map" || r === "Set" ? Array.from(o) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? mo(o, e) : void 0;
  }
}
function l0(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null)
    return Array.from(o);
}
function s0(o) {
  if (Array.isArray(o))
    return mo(o);
}
function mo(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var r = 0, t = Array(e); r < e; r++)
    t[r] = o[r];
  return t;
}
var wr = {
  name: "AutoComplete",
  extends: r0,
  inheritAttrs: !1,
  emits: ["change", "focus", "blur", "item-select", "item-unselect", "option-select", "option-unselect", "dropdown-click", "clear", "complete", "before-show", "before-hide", "show", "hide"],
  inject: {
    $pcFluid: {
      default: null
    }
  },
  outsideClickListener: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  virtualScroller: null,
  searchTimeout: null,
  dirty: !1,
  startRangeIndex: -1,
  data: function() {
    return {
      clicked: !1,
      focused: !1,
      focusedOptionIndex: -1,
      focusedMultipleOptionIndex: -1,
      overlayVisible: !1,
      searching: !1
    };
  },
  watch: {
    suggestions: function() {
      this.searching && (this.show(), this.focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, this.searching = !1, !this.showEmptyMessage && this.visibleOptions.length === 0 && this.hide()), this.autoUpdateModel();
    }
  },
  mounted: function() {
    this.autoUpdateModel();
  },
  updated: function() {
    this.overlayVisible && this.alignOverlay();
  },
  beforeUnmount: function() {
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.overlay && (io.clear(this.overlay), this.overlay = null);
  },
  methods: {
    getOptionIndex: function(e, r) {
      return this.virtualScrollerDisabled ? e : r && r(e).index;
    },
    getOptionLabel: function(e) {
      return this.optionLabel ? ue(e, this.optionLabel) : e;
    },
    getOptionValue: function(e) {
      return e;
    },
    getOptionRenderKey: function(e, r) {
      return (this.dataKey ? ue(e, this.dataKey) : this.getOptionLabel(e)) + "_" + r;
    },
    getPTOptions: function(e, r, t, n) {
      return this.ptm(n, {
        context: {
          option: e,
          index: t,
          selected: this.isSelected(e),
          focused: this.focusedOptionIndex === this.getOptionIndex(t, r),
          disabled: this.isOptionDisabled(e)
        }
      });
    },
    isOptionDisabled: function(e) {
      return this.optionDisabled ? ue(e, this.optionDisabled) : !1;
    },
    isOptionGroup: function(e) {
      return this.optionGroupLabel && e.optionGroup && e.group;
    },
    getOptionGroupLabel: function(e) {
      return ue(e, this.optionGroupLabel);
    },
    getOptionGroupChildren: function(e) {
      return ue(e, this.optionGroupChildren);
    },
    getAriaPosInset: function(e) {
      var r = this;
      return (this.optionGroupLabel ? e - this.visibleOptions.slice(0, e).filter(function(t) {
        return r.isOptionGroup(t);
      }).length : e) + 1;
    },
    show: function(e) {
      this.$emit("before-show"), this.dirty = !0, this.overlayVisible = !0, this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, e && ce(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    hide: function(e) {
      var r = this, t = function() {
        var i;
        r.$emit("before-hide"), r.dirty = e, r.overlayVisible = !1, r.clicked = !1, r.focusedOptionIndex = -1, e && ce(r.multiple ? r.$refs.focusInput : (i = r.$refs.focusInput) === null || i === void 0 ? void 0 : i.$el);
      };
      setTimeout(function() {
        t();
      }, 0);
    },
    onFocus: function(e) {
      this.disabled || (!this.dirty && this.completeOnFocus && this.search(e, e.target.value, "focus"), this.dirty = !0, this.focused = !0, this.overlayVisible && (this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, this.scrollInView(this.focusedOptionIndex)), this.$emit("focus", e));
    },
    onBlur: function(e) {
      var r, t;
      this.dirty = !1, this.focused = !1, this.focusedOptionIndex = -1, this.$emit("blur", e), (r = (t = this.formField).onBlur) === null || r === void 0 || r.call(t);
    },
    onKeyDown: function(e) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(e);
          break;
        case "ArrowRight":
          this.onArrowRightKey(e);
          break;
        case "Home":
          this.onHomeKey(e);
          break;
        case "End":
          this.onEndKey(e);
          break;
        case "PageDown":
          this.onPageDownKey(e);
          break;
        case "PageUp":
          this.onPageUpKey(e);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(e);
          break;
        case "Space":
          this.onSpaceKey(e);
          break;
        case "Escape":
          this.onEscapeKey(e);
          break;
        case "Tab":
          this.onTabKey(e);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this.onShiftKey(e);
          break;
        case "Backspace":
          this.onBackspaceKey(e);
          break;
      }
      this.clicked = !1;
    },
    onInput: function(e) {
      var r = this;
      if (this.typeahead) {
        this.searchTimeout && clearTimeout(this.searchTimeout);
        var t = e.target.value;
        this.multiple || this.updateModel(e, t), t.length === 0 ? (this.hide(), this.$emit("clear")) : t.length >= this.minLength ? (this.focusedOptionIndex = -1, this.searchTimeout = setTimeout(function() {
          r.search(e, t, "input");
        }, this.delay)) : this.hide();
      }
    },
    onChange: function(e) {
      var r = this;
      if (this.forceSelection) {
        var t = !1;
        if (this.visibleOptions && !this.multiple) {
          var n, i = this.multiple ? this.$refs.focusInput.value : (n = this.$refs.focusInput) === null || n === void 0 || (n = n.$el) === null || n === void 0 ? void 0 : n.value, l = this.visibleOptions.find(function(d) {
            return r.isOptionMatched(d, i || "");
          });
          l !== void 0 && (t = !0, !this.isSelected(l) && this.onOptionSelect(e, l));
        }
        if (!t) {
          if (this.multiple)
            this.$refs.focusInput.value = "";
          else {
            var s, a = (s = this.$refs.focusInput) === null || s === void 0 ? void 0 : s.$el;
            a && (a.value = "");
          }
          this.$emit("clear"), !this.multiple && this.updateModel(e, null);
        }
      }
    },
    onMultipleContainerFocus: function() {
      this.disabled || (this.focused = !0);
    },
    onMultipleContainerBlur: function() {
      this.focusedMultipleOptionIndex = -1, this.focused = !1;
    },
    onMultipleContainerKeyDown: function(e) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      switch (e.code) {
        case "ArrowLeft":
          this.onArrowLeftKeyOnMultiple(e);
          break;
        case "ArrowRight":
          this.onArrowRightKeyOnMultiple(e);
          break;
        case "Backspace":
          this.onBackspaceKeyOnMultiple(e);
          break;
      }
    },
    onContainerClick: function(e) {
      this.clicked = !0, !(this.disabled || this.searching || this.loading || this.isDropdownClicked(e)) && (!this.overlay || !this.overlay.contains(e.target)) && ce(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    onDropdownClick: function(e) {
      var r = void 0;
      if (this.overlayVisible)
        this.hide(!0);
      else {
        var t = this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el;
        ce(t), r = t.value, this.dropdownMode === "blank" ? this.search(e, "", "dropdown") : this.dropdownMode === "current" && this.search(e, r, "dropdown");
      }
      this.$emit("dropdown-click", {
        originalEvent: e,
        query: r
      });
    },
    onOptionSelect: function(e, r) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, n = this.getOptionValue(r);
      this.multiple ? (this.$refs.focusInput.value = "", this.isSelected(r) || this.updateModel(e, [].concat(qo(this.d_value || []), [n]))) : this.updateModel(e, n), this.$emit("item-select", {
        originalEvent: e,
        value: r
      }), this.$emit("option-select", {
        originalEvent: e,
        value: r
      }), t && this.hide(!0);
    },
    onOptionMouseMove: function(e, r) {
      this.focusOnHover && this.changeFocusedOptionIndex(e, r);
    },
    onOptionSelectRange: function(e) {
      var r = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
      if (t === -1 && (t = this.findNearestSelectedOptionIndex(n, !0)), n === -1 && (n = this.findNearestSelectedOptionIndex(t)), t !== -1 && n !== -1) {
        var i = Math.min(t, n), l = Math.max(t, n), s = this.visibleOptions.slice(i, l + 1).filter(function(a) {
          return r.isValidOption(a);
        }).map(function(a) {
          return r.getOptionValue(a);
        });
        this.updateModel(e, s);
      }
    },
    onOverlayClick: function(e) {
      Og.emit("overlay-click", {
        originalEvent: e,
        target: this.$el
      });
    },
    onOverlayKeyDown: function(e) {
      switch (e.code) {
        case "Escape":
          this.onEscapeKey(e);
          break;
      }
    },
    onArrowDownKey: function(e) {
      if (this.overlayVisible) {
        var r = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
        this.multiple && e.shiftKey && this.onOptionSelectRange(e, this.startRangeIndex, r), this.changeFocusedOptionIndex(e, r), e.preventDefault();
      }
    },
    onArrowUpKey: function(e) {
      if (this.overlayVisible)
        if (e.altKey)
          this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide(), e.preventDefault();
        else {
          var r = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
          this.multiple && e.shiftKey && this.onOptionSelectRange(e, r, this.startRangeIndex), this.changeFocusedOptionIndex(e, r), e.preventDefault();
        }
    },
    onArrowLeftKey: function(e) {
      var r = e.currentTarget;
      this.focusedOptionIndex = -1, this.multiple && (Se(r.value) && this.$filled ? (ce(this.$refs.multiContainer), this.focusedMultipleOptionIndex = this.d_value.length) : e.stopPropagation());
    },
    onArrowRightKey: function(e) {
      this.focusedOptionIndex = -1, this.multiple && e.stopPropagation();
    },
    onHomeKey: function(e) {
      var r = e.currentTarget, t = r.value.length, n = e.metaKey || e.ctrlKey, i = this.findFirstOptionIndex();
      this.multiple && e.shiftKey && n && this.onOptionSelectRange(e, i, this.startRangeIndex), r.setSelectionRange(0, e.shiftKey ? t : 0), this.focusedOptionIndex = -1, e.preventDefault();
    },
    onEndKey: function(e) {
      var r = e.currentTarget, t = r.value.length, n = e.metaKey || e.ctrlKey, i = this.findLastOptionIndex();
      this.multiple && e.shiftKey && n && this.onOptionSelectRange(e, this.startRangeIndex, i), r.setSelectionRange(e.shiftKey ? 0 : t, t), this.focusedOptionIndex = -1, e.preventDefault();
    },
    onPageUpKey: function(e) {
      this.scrollInView(0), e.preventDefault();
    },
    onPageDownKey: function(e) {
      this.scrollInView(this.visibleOptions.length - 1), e.preventDefault();
    },
    onEnterKey: function(e) {
      this.typeahead ? this.overlayVisible ? (this.focusedOptionIndex !== -1 && (this.multiple && e.shiftKey ? (this.onOptionSelectRange(e, this.focusedOptionIndex), e.preventDefault()) : this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex])), this.hide()) : (this.focusedOptionIndex = -1, this.onArrowDownKey(e)) : this.multiple && e.target.value.trim() && (this.updateModel(e, [].concat(qo(this.d_value || []), [e.target.value.trim()])), this.$refs.focusInput.value = "");
    },
    onSpaceKey: function(e) {
      this.focusedOptionIndex !== -1 && this.onEnterKey(e);
    },
    onEscapeKey: function(e) {
      this.overlayVisible && this.hide(!0), e.preventDefault();
    },
    onTabKey: function(e) {
      this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide();
    },
    onShiftKey: function() {
      this.startRangeIndex = this.focusedOptionIndex;
    },
    onBackspaceKey: function(e) {
      if (this.multiple) {
        if (B(this.d_value) && !this.$refs.focusInput.value) {
          var r = this.d_value[this.d_value.length - 1], t = this.d_value.slice(0, -1);
          this.writeValue(t, e), this.$emit("item-unselect", {
            originalEvent: e,
            value: r
          }), this.$emit("option-unselect", {
            originalEvent: e,
            value: r
          });
        }
        e.stopPropagation();
      }
    },
    onArrowLeftKeyOnMultiple: function() {
      this.focusedMultipleOptionIndex = this.focusedMultipleOptionIndex < 1 ? 0 : this.focusedMultipleOptionIndex - 1;
    },
    onArrowRightKeyOnMultiple: function() {
      this.focusedMultipleOptionIndex++, this.focusedMultipleOptionIndex > this.d_value.length - 1 && (this.focusedMultipleOptionIndex = -1, ce(this.$refs.focusInput));
    },
    onBackspaceKeyOnMultiple: function(e) {
      this.focusedMultipleOptionIndex !== -1 && this.removeOption(e, this.focusedMultipleOptionIndex);
    },
    onOverlayEnter: function(e) {
      io.set("overlay", e, this.$primevue.config.zIndex.overlay), ht(e, {
        position: "absolute",
        top: "0"
      }), this.alignOverlay();
    },
    onOverlayAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onOverlayLeave: function() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.overlay = null;
    },
    onOverlayAfterLeave: function(e) {
      io.clear(e);
    },
    alignOverlay: function() {
      var e = this.multiple ? this.$refs.multiContainer : this.$refs.focusInput.$el;
      this.appendTo === "self" ? vt(this.overlay, e) : (this.overlay.style.minWidth = tr(e) + "px", mt(this.overlay, e));
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(r) {
        e.overlayVisible && e.overlay && e.isOutsideClicked(r) && e.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var e = this;
      this.scrollHandler || (this.scrollHandler = new Gp(this.$refs.container, function() {
        e.overlayVisible && e.hide();
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function() {
        e.overlayVisible && !St() && e.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    isOutsideClicked: function(e) {
      return !this.overlay.contains(e.target) && !this.isInputClicked(e) && !this.isDropdownClicked(e);
    },
    isInputClicked: function(e) {
      return this.multiple ? e.target === this.$refs.multiContainer || this.$refs.multiContainer.contains(e.target) : e.target === this.$refs.focusInput.$el;
    },
    isDropdownClicked: function(e) {
      return this.$refs.dropdownButton ? e.target === this.$refs.dropdownButton || this.$refs.dropdownButton.contains(e.target) : !1;
    },
    isOptionMatched: function(e, r) {
      var t;
      return this.isValidOption(e) && ((t = this.getOptionLabel(e)) === null || t === void 0 ? void 0 : t.toLocaleLowerCase(this.searchLocale)) === r.toLocaleLowerCase(this.searchLocale);
    },
    isValidOption: function(e) {
      return B(e) && !(this.isOptionDisabled(e) || this.isOptionGroup(e));
    },
    isValidSelectedOption: function(e) {
      return this.isValidOption(e) && this.isSelected(e);
    },
    isEquals: function(e, r) {
      return it(e, r, this.equalityKey);
    },
    isSelected: function(e) {
      var r = this, t = this.getOptionValue(e);
      return this.multiple ? (this.d_value || []).some(function(n) {
        return r.isEquals(n, t);
      }) : this.isEquals(this.d_value, this.getOptionValue(e));
    },
    findFirstOptionIndex: function() {
      var e = this;
      return this.visibleOptions.findIndex(function(r) {
        return e.isValidOption(r);
      });
    },
    findLastOptionIndex: function() {
      var e = this;
      return to(this.visibleOptions, function(r) {
        return e.isValidOption(r);
      });
    },
    findNextOptionIndex: function(e) {
      var r = this, t = e < this.visibleOptions.length - 1 ? this.visibleOptions.slice(e + 1).findIndex(function(n) {
        return r.isValidOption(n);
      }) : -1;
      return t > -1 ? t + e + 1 : e;
    },
    findPrevOptionIndex: function(e) {
      var r = this, t = e > 0 ? to(this.visibleOptions.slice(0, e), function(n) {
        return r.isValidOption(n);
      }) : -1;
      return t > -1 ? t : e;
    },
    findSelectedOptionIndex: function() {
      var e = this;
      return this.$filled ? this.visibleOptions.findIndex(function(r) {
        return e.isValidSelectedOption(r);
      }) : -1;
    },
    findFirstFocusedOptionIndex: function() {
      var e = this.findSelectedOptionIndex();
      return e < 0 ? this.findFirstOptionIndex() : e;
    },
    findLastFocusedOptionIndex: function() {
      var e = this.findSelectedOptionIndex();
      return e < 0 ? this.findLastOptionIndex() : e;
    },
    search: function(e, r, t) {
      r != null && (t === "input" && r.trim().length === 0 || (this.searching = !0, this.$emit("complete", {
        originalEvent: e,
        query: r
      })));
    },
    removeOption: function(e, r) {
      var t = this, n = this.d_value[r], i = this.d_value.filter(function(l, s) {
        return s !== r;
      }).map(function(l) {
        return t.getOptionValue(l);
      });
      this.updateModel(e, i), this.$emit("item-unselect", {
        originalEvent: e,
        value: n
      }), this.$emit("option-unselect", {
        originalEvent: e,
        value: n
      }), this.dirty = !0, ce(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    changeFocusedOptionIndex: function(e, r) {
      this.focusedOptionIndex !== r && (this.focusedOptionIndex = r, this.scrollInView(), this.selectOnFocus && this.onOptionSelect(e, this.visibleOptions[r], !1));
    },
    scrollInView: function() {
      var e = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      this.$nextTick(function() {
        var t = r !== -1 ? "".concat(e.$id, "_").concat(r) : e.focusedOptionId, n = eo(e.list, 'li[id="'.concat(t, '"]'));
        n ? n.scrollIntoView && n.scrollIntoView({
          block: "nearest",
          inline: "start"
        }) : e.virtualScrollerDisabled || e.virtualScroller && e.virtualScroller.scrollToIndex(r !== -1 ? r : e.focusedOptionIndex);
      });
    },
    autoUpdateModel: function() {
      this.selectOnFocus && this.autoOptionFocus && !this.$filled && (this.focusedOptionIndex = this.findFirstFocusedOptionIndex(), this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], !1));
    },
    updateModel: function(e, r) {
      this.writeValue(r, e), this.$emit("change", {
        originalEvent: e,
        value: r
      });
    },
    flatOptions: function(e) {
      var r = this;
      return (e || []).reduce(function(t, n, i) {
        t.push({
          optionGroup: n,
          group: !0,
          index: i
        });
        var l = r.getOptionGroupChildren(n);
        return l && l.forEach(function(s) {
          return t.push(s);
        }), t;
      }, []);
    },
    overlayRef: function(e) {
      this.overlay = e;
    },
    listRef: function(e, r) {
      this.list = e, r && r(e);
    },
    virtualScrollerRef: function(e) {
      this.virtualScroller = e;
    },
    findNextSelectedOptionIndex: function(e) {
      var r = this, t = this.$filled && e < this.visibleOptions.length - 1 ? this.visibleOptions.slice(e + 1).findIndex(function(n) {
        return r.isValidSelectedOption(n);
      }) : -1;
      return t > -1 ? t + e + 1 : -1;
    },
    findPrevSelectedOptionIndex: function(e) {
      var r = this, t = this.$filled && e > 0 ? to(this.visibleOptions.slice(0, e), function(n) {
        return r.isValidSelectedOption(n);
      }) : -1;
      return t > -1 ? t : -1;
    },
    findNearestSelectedOptionIndex: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = -1;
      return this.$filled && (r ? (t = this.findPrevSelectedOptionIndex(e), t = t === -1 ? this.findNextSelectedOptionIndex(e) : t) : (t = this.findNextSelectedOptionIndex(e), t = t === -1 ? this.findPrevSelectedOptionIndex(e) : t)), t > -1 ? t : e;
    }
  },
  computed: {
    visibleOptions: function() {
      return this.optionGroupLabel ? this.flatOptions(this.suggestions) : this.suggestions || [];
    },
    inputValue: function() {
      if (this.$filled)
        if (Ce(this.d_value) === "object") {
          var e = this.getOptionLabel(this.d_value);
          return e ?? this.d_value;
        } else
          return this.d_value;
      else
        return "";
    },
    // @deprecated use $filled instead.
    hasSelectedOption: function() {
      return this.$filled;
    },
    equalityKey: function() {
      return this.dataKey;
    },
    searchResultMessageText: function() {
      return B(this.visibleOptions) && this.overlayVisible ? this.searchMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptySearchMessageText;
    },
    searchMessageText: function() {
      return this.searchMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptySearchMessageText: function() {
      return this.emptySearchMessage || this.$primevue.config.locale.emptySearchMessage || "";
    },
    selectionMessageText: function() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText: function() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText: function() {
      return this.$filled ? this.selectionMessageText.replaceAll("{0}", this.multiple ? this.d_value.length : "1") : this.emptySelectionMessageText;
    },
    listAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : void 0;
    },
    focusedOptionId: function() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.$id, "_").concat(this.focusedOptionIndex) : null;
    },
    focusedMultipleOptionId: function() {
      return this.focusedMultipleOptionIndex !== -1 ? "".concat(this.$id, "_multiple_option_").concat(this.focusedMultipleOptionIndex) : null;
    },
    ariaSetSize: function() {
      var e = this;
      return this.visibleOptions.filter(function(r) {
        return !e.isOptionGroup(r);
      }).length;
    },
    virtualScrollerDisabled: function() {
      return !this.virtualScrollerOptions;
    },
    panelId: function() {
      return this.$id + "_panel";
    },
    containerDataP: function() {
      return we({
        fluid: this.$fluid
      });
    },
    overlayDataP: function() {
      return we(Xo({}, "portal-" + this.appendTo, "portal-" + this.appendTo));
    },
    inputMultipleDataP: function() {
      return we(Xo({
        invalid: this.$invalid,
        disabled: this.disabled,
        focus: this.focused,
        fluid: this.$fluid,
        filled: this.$variant === "filled",
        empty: !this.$filled
      }, this.size, this.size));
    }
  },
  components: {
    InputText: br,
    VirtualScroller: $r,
    Portal: yr,
    ChevronDownIcon: gr,
    SpinnerIcon: yo,
    Chip: hr
  },
  directives: {
    ripple: Hg
  }
};
function We(o) {
  "@babel/helpers - typeof";
  return We = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, We(o);
}
function Zo(o, e) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(o, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Qo(o) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Zo(Object(r), !0).forEach(function(t) {
      d0(o, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : Zo(Object(r)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return o;
}
function d0(o, e, r) {
  return (e = c0(e)) in o ? Object.defineProperty(o, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = r, o;
}
function c0(o) {
  var e = u0(o, "string");
  return We(e) == "symbol" ? e : e + "";
}
function u0(o, e) {
  if (We(o) != "object" || !o)
    return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(o, e);
    if (We(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
var f0 = ["data-p"], p0 = ["aria-activedescendant", "data-p-has-dropdown", "data-p"], g0 = ["id", "aria-label", "aria-setsize", "aria-posinset"], m0 = ["id", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"], h0 = ["data-p-has-dropdown"], v0 = ["disabled", "aria-expanded", "aria-controls"], b0 = ["id", "data-p"], y0 = ["id", "aria-label"], k0 = ["id"], $0 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-selected", "data-p-focused", "data-p-disabled"];
function w0(o, e, r, t, n, i) {
  var l = ve("InputText"), s = ve("Chip"), a = ve("SpinnerIcon"), d = ve("VirtualScroller"), c = ve("Portal"), u = Gr("ripple");
  return O(), I("div", C({
    ref: "container",
    class: o.cx("root"),
    style: o.sx("root"),
    onClick: e[11] || (e[11] = function() {
      return i.onContainerClick && i.onContainerClick.apply(i, arguments);
    }),
    "data-p": i.containerDataP
  }, o.ptmi("root")), [o.multiple ? V("", !0) : (O(), ge(l, {
    key: 0,
    ref: "focusInput",
    id: o.inputId,
    type: "text",
    name: o.$formName,
    class: Oe([o.cx("pcInputText"), o.inputClass]),
    style: Yr(o.inputStyle),
    value: i.inputValue,
    placeholder: o.placeholder,
    tabindex: o.disabled ? -1 : o.tabindex,
    fluid: o.$fluid,
    disabled: o.disabled,
    size: o.size,
    invalid: o.invalid,
    variant: o.variant,
    autocomplete: "off",
    role: "combobox",
    "aria-label": o.ariaLabel,
    "aria-labelledby": o.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-expanded": n.overlayVisible,
    "aria-controls": i.panelId,
    "aria-activedescendant": n.focused ? i.focusedOptionId : void 0,
    onFocus: i.onFocus,
    onBlur: i.onBlur,
    onKeydown: i.onKeyDown,
    onInput: i.onInput,
    onChange: i.onChange,
    unstyled: o.unstyled,
    "data-p-has-dropdown": o.dropdown,
    pt: o.ptm("pcInputText")
  }, null, 8, ["id", "name", "class", "style", "value", "placeholder", "tabindex", "fluid", "disabled", "size", "invalid", "variant", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "onFocus", "onBlur", "onKeydown", "onInput", "onChange", "unstyled", "data-p-has-dropdown", "pt"])), o.multiple ? (O(), I("ul", C({
    key: 1,
    ref: "multiContainer",
    class: o.cx("inputMultiple"),
    tabindex: "-1",
    role: "listbox",
    "aria-orientation": "horizontal",
    "aria-activedescendant": n.focused ? i.focusedMultipleOptionId : void 0,
    onFocus: e[5] || (e[5] = function() {
      return i.onMultipleContainerFocus && i.onMultipleContainerFocus.apply(i, arguments);
    }),
    onBlur: e[6] || (e[6] = function() {
      return i.onMultipleContainerBlur && i.onMultipleContainerBlur.apply(i, arguments);
    }),
    onKeydown: e[7] || (e[7] = function() {
      return i.onMultipleContainerKeyDown && i.onMultipleContainerKeyDown.apply(i, arguments);
    }),
    "data-p-has-dropdown": o.dropdown,
    "data-p": i.inputMultipleDataP
  }, o.ptm("inputMultiple")), [(O(!0), I($e, null, Ye(o.d_value, function(f, p) {
    return O(), I("li", C({
      key: "".concat(p, "_").concat(i.getOptionLabel(f)),
      id: o.$id + "_multiple_option_" + p,
      class: o.cx("chipItem", {
        i: p
      }),
      role: "option",
      "aria-label": i.getOptionLabel(f),
      "aria-selected": !0,
      "aria-setsize": o.d_value.length,
      "aria-posinset": p + 1,
      ref_for: !0
    }, o.ptm("chipItem")), [L(o.$slots, "chip", C({
      class: o.cx("pcChip"),
      value: f,
      index: p,
      removeCallback: function(v) {
        return i.removeOption(v, p);
      },
      ref_for: !0
    }, o.ptm("pcChip")), function() {
      return [Ie(s, {
        class: Oe(o.cx("pcChip")),
        label: i.getOptionLabel(f),
        removeIcon: o.chipIcon || o.removeTokenIcon,
        removable: "",
        unstyled: o.unstyled,
        onRemove: function(v) {
          return i.removeOption(v, p);
        },
        "data-p-focused": n.focusedMultipleOptionIndex === p,
        pt: o.ptm("pcChip")
      }, {
        removeicon: be(function() {
          return [L(o.$slots, o.$slots.chipicon ? "chipicon" : "removetokenicon", {
            class: Oe(o.cx("chipIcon")),
            index: p,
            removeCallback: function(v) {
              return i.removeOption(v, p);
            }
          })];
        }),
        _: 2
      }, 1032, ["class", "label", "removeIcon", "unstyled", "onRemove", "data-p-focused", "pt"])];
    })], 16, g0);
  }), 128)), X("li", C({
    class: o.cx("inputChip"),
    role: "option"
  }, o.ptm("inputChip")), [X("input", C({
    ref: "focusInput",
    id: o.inputId,
    type: "text",
    style: o.inputStyle,
    class: o.inputClass,
    placeholder: o.placeholder,
    tabindex: o.disabled ? -1 : o.tabindex,
    disabled: o.disabled,
    autocomplete: "off",
    role: "combobox",
    "aria-label": o.ariaLabel,
    "aria-labelledby": o.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-expanded": n.overlayVisible,
    "aria-controls": o.$id + "_list",
    "aria-activedescendant": n.focused ? i.focusedOptionId : void 0,
    "aria-invalid": o.invalid || void 0,
    onFocus: e[0] || (e[0] = function() {
      return i.onFocus && i.onFocus.apply(i, arguments);
    }),
    onBlur: e[1] || (e[1] = function() {
      return i.onBlur && i.onBlur.apply(i, arguments);
    }),
    onKeydown: e[2] || (e[2] = function() {
      return i.onKeyDown && i.onKeyDown.apply(i, arguments);
    }),
    onInput: e[3] || (e[3] = function() {
      return i.onInput && i.onInput.apply(i, arguments);
    }),
    onChange: e[4] || (e[4] = function() {
      return i.onChange && i.onChange.apply(i, arguments);
    })
  }, o.ptm("input")), null, 16, m0)], 16)], 16, p0)) : V("", !0), n.searching || o.loading ? L(o.$slots, o.$slots.loader ? "loader" : "loadingicon", {
    key: 2,
    class: Oe(o.cx("loader"))
  }, function() {
    return [o.loader || o.loadingIcon ? (O(), I("i", C({
      key: 0,
      class: ["pi-spin", o.cx("loader"), o.loader, o.loadingIcon],
      "aria-hidden": "true",
      "data-p-has-dropdown": o.dropdown
    }, o.ptm("loader")), null, 16, h0)) : (O(), ge(a, C({
      key: 1,
      class: o.cx("loader"),
      spin: "",
      "aria-hidden": "true",
      "data-p-has-dropdown": o.dropdown
    }, o.ptm("loader")), null, 16, ["class", "data-p-has-dropdown"]))];
  }) : V("", !0), L(o.$slots, o.$slots.dropdown ? "dropdown" : "dropdownbutton", {
    toggleCallback: function(p) {
      return i.onDropdownClick(p);
    }
  }, function() {
    return [o.dropdown ? (O(), I("button", C({
      key: 0,
      ref: "dropdownButton",
      type: "button",
      class: [o.cx("dropdown"), o.dropdownClass],
      disabled: o.disabled,
      "aria-haspopup": "listbox",
      "aria-expanded": n.overlayVisible,
      "aria-controls": i.panelId,
      onClick: e[8] || (e[8] = function() {
        return i.onDropdownClick && i.onDropdownClick.apply(i, arguments);
      })
    }, o.ptm("dropdown")), [L(o.$slots, "dropdownicon", {
      class: Oe(o.dropdownIcon)
    }, function() {
      return [(O(), ge(so(o.dropdownIcon ? "span" : "ChevronDownIcon"), C({
        class: o.dropdownIcon
      }, o.ptm("dropdownIcon")), null, 16, ["class"]))];
    })], 16, v0)) : V("", !0)];
  }), o.typeahead ? (O(), I("span", C({
    key: 3,
    role: "status",
    "aria-live": "polite",
    class: "p-hidden-accessible"
  }, o.ptm("hiddenSearchResult"), {
    "data-p-hidden-accessible": !0
  }), he(i.searchResultMessageText), 17)) : V("", !0), Ie(c, {
    appendTo: o.appendTo
  }, {
    default: be(function() {
      return [Ie(Xr, C({
        name: "p-connected-overlay",
        onEnter: i.onOverlayEnter,
        onAfterEnter: i.onOverlayAfterEnter,
        onLeave: i.onOverlayLeave,
        onAfterLeave: i.onOverlayAfterLeave
      }, o.ptm("transition")), {
        default: be(function() {
          return [n.overlayVisible ? (O(), I("div", C({
            key: 0,
            ref: i.overlayRef,
            id: i.panelId,
            class: [o.cx("overlay"), o.panelClass, o.overlayClass],
            style: Qo(Qo({}, o.panelStyle), o.overlayStyle),
            onClick: e[9] || (e[9] = function() {
              return i.onOverlayClick && i.onOverlayClick.apply(i, arguments);
            }),
            onKeydown: e[10] || (e[10] = function() {
              return i.onOverlayKeyDown && i.onOverlayKeyDown.apply(i, arguments);
            }),
            "data-p": i.overlayDataP
          }, o.ptm("overlay")), [L(o.$slots, "header", {
            value: o.d_value,
            suggestions: i.visibleOptions
          }), X("div", C({
            class: o.cx("listContainer"),
            style: {
              "max-height": i.virtualScrollerDisabled ? o.scrollHeight : ""
            }
          }, o.ptm("listContainer")), [Ie(d, C({
            ref: i.virtualScrollerRef
          }, o.virtualScrollerOptions, {
            style: {
              height: o.scrollHeight
            },
            items: i.visibleOptions,
            tabindex: -1,
            disabled: i.virtualScrollerDisabled,
            pt: o.ptm("virtualScroller")
          }), qr({
            content: be(function(f) {
              var p = f.styleClass, m = f.contentRef, v = f.items, h = f.getItemOptions, b = f.contentStyle, k = f.itemSize;
              return [X("ul", C({
                ref: function(g) {
                  return i.listRef(g, m);
                },
                id: o.$id + "_list",
                class: [o.cx("list"), p],
                style: b,
                role: "listbox",
                "aria-label": i.listAriaLabel
              }, o.ptm("list")), [(O(!0), I($e, null, Ye(v, function(y, g) {
                return O(), I($e, {
                  key: i.getOptionRenderKey(y, i.getOptionIndex(g, h))
                }, [i.isOptionGroup(y) ? (O(), I("li", C({
                  key: 0,
                  id: o.$id + "_" + i.getOptionIndex(g, h),
                  style: {
                    height: k ? k + "px" : void 0
                  },
                  class: o.cx("optionGroup"),
                  role: "option",
                  ref_for: !0
                }, o.ptm("optionGroup")), [L(o.$slots, "optiongroup", {
                  option: y.optionGroup,
                  index: i.getOptionIndex(g, h)
                }, function() {
                  return [ro(he(i.getOptionGroupLabel(y.optionGroup)), 1)];
                })], 16, k0)) : Zr((O(), I("li", C({
                  key: 1,
                  id: o.$id + "_" + i.getOptionIndex(g, h),
                  style: {
                    height: k ? k + "px" : void 0
                  },
                  class: o.cx("option", {
                    option: y,
                    i: g,
                    getItemOptions: h
                  }),
                  role: "option",
                  "aria-label": i.getOptionLabel(y),
                  "aria-selected": i.isSelected(y),
                  "aria-disabled": i.isOptionDisabled(y),
                  "aria-setsize": i.ariaSetSize,
                  "aria-posinset": i.getAriaPosInset(i.getOptionIndex(g, h)),
                  onClick: function(_) {
                    return i.onOptionSelect(_, y);
                  },
                  onMousemove: function(_) {
                    return i.onOptionMouseMove(_, i.getOptionIndex(g, h));
                  },
                  "data-p-selected": i.isSelected(y),
                  "data-p-focused": n.focusedOptionIndex === i.getOptionIndex(g, h),
                  "data-p-disabled": i.isOptionDisabled(y),
                  ref_for: !0
                }, i.getPTOptions(y, h, g, "option")), [L(o.$slots, "option", {
                  option: y,
                  index: i.getOptionIndex(g, h)
                }, function() {
                  return [ro(he(i.getOptionLabel(y)), 1)];
                })], 16, $0)), [[u]])], 64);
              }), 128)), o.showEmptyMessage && (!v || v && v.length === 0) ? (O(), I("li", C({
                key: 0,
                class: o.cx("emptyMessage"),
                role: "option"
              }, o.ptm("emptyMessage")), [L(o.$slots, "empty", {}, function() {
                return [ro(he(i.searchResultMessageText), 1)];
              })], 16)) : V("", !0)], 16, y0)];
            }),
            _: 2
          }, [o.$slots.loader ? {
            name: "loader",
            fn: be(function(f) {
              var p = f.options;
              return [L(o.$slots, "loader", {
                options: p
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["style", "items", "disabled", "pt"])], 16), L(o.$slots, "footer", {
            value: o.d_value,
            suggestions: i.visibleOptions
          }), X("span", C({
            role: "status",
            "aria-live": "polite",
            class: "p-hidden-accessible"
          }, o.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": !0
          }), he(i.selectedMessageText), 17)], 16, b0)) : V("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16, f0);
}
wr.render = w0;
const C0 = { class: "relative" }, S0 = {
  class: "icon icon-sm",
  style: { stroke: "var(--p-inputtext-color)" },
  "aria-hidden": "true"
}, O0 = {
  __name: "AutoComplete",
  setup(o) {
    const e = ne(""), r = ne([]), t = ne(!1), n = ne("Buscar..."), i = ne(null), l = () => {
      e.value = null, t.value = !t.value;
    }, s = (a) => {
      a.query && (r.value = ["Ejemplo 1", "Ejemplo 2", "Ejemplo 3"].filter(
        (d) => d.toLowerCase().includes(a.query.toLowerCase())
      ));
    };
    return (a, d) => (O(), I("div", null, [
      X("div", C0, [
        (O(), ge(Qr(wr), {
          modelValue: e.value,
          "onUpdate:modelValue": d[0] || (d[0] = (c) => e.value = c),
          key: t.value,
          ref_key: "autoCompleteRef",
          ref: i,
          suggestions: r.value,
          onComplete: s,
          placeholder: n.value,
          fluid: "",
          onClear: l,
          dropdown: !1,
          forceSelection: ""
        }, {
          dropdown: be(() => [
            X("button", {
              type: "button",
              class: "p-autocomplete-dropdown",
              onClick: Jr(l, ["stop"])
            }, [
              (O(), I("svg", S0, d[1] || (d[1] = [
                X("use", { href: "#icon-close" }, null, -1)
              ])))
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "suggestions", "placeholder"]))
      ])
    ]));
  }
}, x0 = { AutoComplete: O0 }, _0 = {
  /** Instala NvgUI como plugin */
  install(o, { themes: e = { light: Vp }, primevue: r = {} } = {}) {
    o._primevueInstalled || (o.use(cn, {
      theme: {
        preset: e.light,
        options: {
          prefix: "p",
          darkModeSelector: '[data-theme="dark"]',
          cssLayer: !1
        }
      },
      ...r
    }), o._primevueInstalled = !0), Object.entries(x0).forEach(
      ([t, n]) => o.component(t, n)
    );
  }
};
export {
  O0 as AutoComplete,
  _0 as default
};
