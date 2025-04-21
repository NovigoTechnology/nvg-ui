import { ref as Q, readonly as ot, getCurrentInstance as Bo, onMounted as ar, nextTick as rt, watch as ae, reactive as tt, useId as nt, mergeProps as w, openBlock as C, createElementBlock as I, createElementVNode as j, renderSlot as L, createBlock as re, resolveDynamicComponent as oo, createCommentVNode as A, toDisplayString as q, Teleport as it, resolveComponent as he, Fragment as xe, renderList as ro, createVNode as Te, resolveDirective as lr, normalizeClass as ue, normalizeStyle as at, withCtx as fe, Transition as lt, createSlots as sr, createTextVNode as eo, withDirectives as dr, onUnmounted as st, unref as _o, withModifiers as dt } from "vue";
import { DataTable as ct } from "primevue";
import { DataTable as Zh } from "primevue";
var ut = Object.defineProperty, Io = Object.getOwnPropertySymbols, ft = Object.prototype.hasOwnProperty, pt = Object.prototype.propertyIsEnumerable, Po = (e, o, r) => o in e ? ut(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, gt = (e, o) => {
  for (var r in o || (o = {}))
    ft.call(o, r) && Po(e, r, o[r]);
  if (Io)
    for (var r of Io(o))
      pt.call(o, r) && Po(e, r, o[r]);
  return e;
};
function ve(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function mo(e, o, r = /* @__PURE__ */ new WeakSet()) {
  if (e === o)
    return !0;
  if (!e || !o || typeof e != "object" || typeof o != "object" || r.has(e) || r.has(o))
    return !1;
  r.add(e).add(o);
  const t = Array.isArray(e), n = Array.isArray(o);
  let i, s, l;
  if (t && n) {
    if (s = e.length, s != o.length)
      return !1;
    for (i = s; i-- !== 0; )
      if (!mo(e[i], o[i], r))
        return !1;
    return !0;
  }
  if (t != n)
    return !1;
  const a = e instanceof Date, d = o instanceof Date;
  if (a != d)
    return !1;
  if (a && d)
    return e.getTime() == o.getTime();
  const c = e instanceof RegExp, u = o instanceof RegExp;
  if (c != u)
    return !1;
  if (c && u)
    return e.toString() == o.toString();
  const f = Object.keys(e);
  if (s = f.length, s !== Object.keys(o).length)
    return !1;
  for (i = s; i-- !== 0; )
    if (!Object.prototype.hasOwnProperty.call(o, f[i]))
      return !1;
  for (i = s; i-- !== 0; )
    if (l = f[i], !mo(e[l], o[l], r))
      return !1;
  return !0;
}
function ht(e, o) {
  return mo(e, o);
}
function ao(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function R(e) {
  return !ve(e);
}
function ke(e, o) {
  if (!e || !o)
    return null;
  try {
    const r = e[o];
    if (R(r))
      return r;
  } catch {
  }
  if (Object.keys(e).length) {
    if (ao(o))
      return o(e);
    if (o.indexOf(".") === -1)
      return e[o];
    {
      const r = o.split(".");
      let t = e;
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
function mt(e, o, r) {
  return r ? ke(e, r) === ke(o, r) : ht(e, o);
}
function de(e, o = !0) {
  return e instanceof Object && e.constructor === Object && (o || Object.keys(e).length !== 0);
}
function cr(e = {}, o = {}) {
  const r = gt({}, e);
  return Object.keys(o).forEach((t) => {
    const n = t;
    de(o[n]) && n in e && de(e[n]) ? r[n] = cr(e[n], o[n]) : r[n] = o[n];
  }), r;
}
function bt(...e) {
  return e.reduce((o, r, t) => t === 0 ? r : cr(o, r), {});
}
function uo(e, o) {
  let r = -1;
  if (R(e))
    try {
      r = e.findLastIndex(o);
    } catch {
      r = e.lastIndexOf([...e].reverse().find(o));
    }
  return r;
}
function J(e, ...o) {
  return ao(e) ? e(...o) : e;
}
function U(e, o = !0) {
  return typeof e == "string" && (o || e !== "");
}
function le(e) {
  return U(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function wo(e, o = "", r = {}) {
  const t = le(o).split("."), n = t.shift();
  if (n) {
    if (de(e)) {
      const i = Object.keys(e).find((s) => le(s) === n) || "";
      return wo(J(e[i], r), t.join("."), r);
    }
    return;
  }
  return J(e, r);
}
function lo(e, o = !0) {
  return Array.isArray(e) && (o || e.length !== 0);
}
function vt(e) {
  return R(e) && !isNaN(e);
}
function pe(e, o) {
  if (o) {
    const r = o.test(e);
    return o.lastIndex = 0, r;
  }
  return !1;
}
function yt(...e) {
  return bt(...e);
}
function Le(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function $t(e) {
  return U(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function ur(e) {
  return U(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (o, r) => r === 0 ? o : "-" + o.toLowerCase()).toLowerCase() : e;
}
function Ro(e) {
  return U(e) ? e.replace(/[A-Z]/g, (o, r) => r === 0 ? o : "." + o.toLowerCase()).toLowerCase() : e;
}
function Co() {
  const e = /* @__PURE__ */ new Map();
  return {
    on(o, r) {
      let t = e.get(o);
      return t ? t.push(r) : t = [r], e.set(o, t), this;
    },
    off(o, r) {
      const t = e.get(o);
      return t && t.splice(t.indexOf(r) >>> 0, 1), this;
    },
    emit(o, r) {
      const t = e.get(o);
      t && t.forEach((n) => {
        n(r);
      });
    },
    clear() {
      e.clear();
    }
  };
}
function se(...e) {
  if (e) {
    let o = [];
    for (let r = 0; r < e.length; r++) {
      const t = e[r];
      if (!t)
        continue;
      const n = typeof t;
      if (n === "string" || n === "number")
        o.push(t);
      else if (n === "object") {
        const i = Array.isArray(t) ? [se(...t)] : Object.entries(t).map(([s, l]) => l ? s : void 0);
        o = i.length ? o.concat(i.filter((s) => !!s)) : o;
      }
    }
    return o.join(" ").trim();
  }
}
function kt(e, o) {
  return e ? e.classList ? e.classList.contains(o) : new RegExp("(^| )" + o + "( |$)", "gi").test(e.className) : !1;
}
function wt(e, o) {
  if (e && o) {
    const r = (t) => {
      kt(e, t) || (e.classList ? e.classList.add(t) : e.className += " " + t);
    };
    [o].flat().filter(Boolean).forEach((t) => t.split(" ").forEach(r));
  }
}
function fo(e, o) {
  if (e && o) {
    const r = (t) => {
      e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [o].flat().filter(Boolean).forEach((t) => t.split(" ").forEach(r));
  }
}
function to(e) {
  for (const o of document == null ? void 0 : document.styleSheets)
    try {
      for (const r of o == null ? void 0 : o.cssRules)
        for (const t of r == null ? void 0 : r.style)
          if (e.test(t))
            return { name: t, value: r.style.getPropertyValue(t).trim() };
    } catch {
    }
  return null;
}
function fr(e) {
  const o = { width: 0, height: 0 };
  return e && (e.style.visibility = "hidden", e.style.display = "block", o.width = e.offsetWidth, o.height = e.offsetHeight, e.style.display = "none", e.style.visibility = "visible"), o;
}
function pr() {
  const e = window, o = document, r = o.documentElement, t = o.getElementsByTagName("body")[0], n = e.innerWidth || r.clientWidth || t.clientWidth, i = e.innerHeight || r.clientHeight || t.clientHeight;
  return { width: n, height: i };
}
function bo(e) {
  return e ? Math.abs(e.scrollLeft) : 0;
}
function Ct() {
  const e = document.documentElement;
  return (window.pageXOffset || bo(e)) - (e.clientLeft || 0);
}
function xt() {
  const e = document.documentElement;
  return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
}
function St(e) {
  return e ? getComputedStyle(e).direction === "rtl" : !1;
}
function Ot(e, o, r = !0) {
  var t, n, i, s;
  if (e) {
    const l = e.offsetParent ? { width: e.offsetWidth, height: e.offsetHeight } : fr(e), a = l.height, d = l.width, c = o.offsetHeight, u = o.offsetWidth, f = o.getBoundingClientRect(), g = xt(), h = Ct(), v = pr();
    let b, $, k = "top";
    f.top + c + a > v.height ? (b = f.top + g - a, k = "bottom", b < 0 && (b = g)) : b = c + f.top + g, f.left + d > v.width ? $ = Math.max(0, f.left + h + u - d) : $ = f.left + h, St(e) ? e.style.insetInlineEnd = $ + "px" : e.style.insetInlineStart = $ + "px", e.style.top = b + "px", e.style.transformOrigin = k, r && (e.style.marginTop = k === "bottom" ? `calc(${(n = (t = to(/-anchor-gutter$/)) == null ? void 0 : t.value) != null ? n : "2px"} * -1)` : (s = (i = to(/-anchor-gutter$/)) == null ? void 0 : i.value) != null ? s : "");
  }
}
function Bt(e, o) {
  e && (typeof o == "string" ? e.style.cssText = o : Object.entries(o || {}).forEach(([r, t]) => e.style[r] = t));
}
function gr(e, o) {
  if (e instanceof HTMLElement) {
    let r = e.offsetWidth;
    if (o) {
      const t = getComputedStyle(e);
      r += parseFloat(t.marginLeft) + parseFloat(t.marginRight);
    }
    return r;
  }
  return 0;
}
function _t(e, o, r = !0) {
  var t, n, i, s;
  if (e) {
    const l = e.offsetParent ? { width: e.offsetWidth, height: e.offsetHeight } : fr(e), a = o.offsetHeight, d = o.getBoundingClientRect(), c = pr();
    let u, f, g = "top";
    d.top + a + l.height > c.height ? (u = -1 * l.height, g = "bottom", d.top + u < 0 && (u = -1 * d.top)) : u = a, l.width > c.width ? f = d.left * -1 : d.left + l.width > c.width ? f = (d.left + l.width - c.width) * -1 : f = 0, e.style.top = u + "px", e.style.insetInlineStart = f + "px", e.style.transformOrigin = g, r && (e.style.marginTop = g === "bottom" ? `calc(${(n = (t = to(/-anchor-gutter$/)) == null ? void 0 : t.value) != null ? n : "2px"} * -1)` : (s = (i = to(/-anchor-gutter$/)) == null ? void 0 : i.value) != null ? s : "");
  }
}
function hr(e) {
  if (e) {
    let o = e.parentNode;
    return o && o instanceof ShadowRoot && o.host && (o = o.host), o;
  }
  return null;
}
function It(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && hr(e));
}
function Xe(e) {
  return typeof Element < "u" ? e instanceof Element : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}
function no(e, o = {}) {
  if (Xe(e)) {
    const r = (t, n) => {
      var i, s;
      const l = (i = e == null ? void 0 : e.$attrs) != null && i[t] ? [(s = e == null ? void 0 : e.$attrs) == null ? void 0 : s[t]] : [];
      return [n].flat().reduce((a, d) => {
        if (d != null) {
          const c = typeof d;
          if (c === "string" || c === "number")
            a.push(d);
          else if (c === "object") {
            const u = Array.isArray(d) ? r(t, d) : Object.entries(d).map(([f, g]) => t === "style" && (g || g === 0) ? `${f.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${g}` : g ? f : void 0);
            a = u.length ? a.concat(u.filter((f) => !!f)) : a;
          }
        }
        return a;
      }, l);
    };
    Object.entries(o).forEach(([t, n]) => {
      if (n != null) {
        const i = t.match(/^on(.+)/);
        i ? e.addEventListener(i[1].toLowerCase(), n) : t === "p-bind" || t === "pBind" ? no(e, n) : (n = t === "class" ? [...new Set(r("class", n))].join(" ").trim() : t === "style" ? r("style", n).join(";").trim() : n, (e.$attrs = e.$attrs || {}) && (e.$attrs[t] = n), e.setAttribute(t, n));
      }
    });
  }
}
function Pt(e, o = {}, ...r) {
  if (e) {
    const t = document.createElement(e);
    return no(t, o), t.append(...r), t;
  }
}
function so(e, o) {
  return Xe(e) ? e.matches(o) ? e : e.querySelector(o) : null;
}
function $e(e, o) {
  e && document.activeElement !== e && e.focus(o);
}
function Rt(e, o) {
  if (Xe(e)) {
    const r = e.getAttribute(o);
    return isNaN(r) ? r === "true" || r === "false" ? r === "true" : r : +r;
  }
}
function we(e) {
  if (e) {
    let o = e.offsetHeight;
    const r = getComputedStyle(e);
    return o -= parseFloat(r.paddingTop) + parseFloat(r.paddingBottom) + parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth), o;
  }
  return 0;
}
function Tt(e) {
  if (e) {
    const o = e.getBoundingClientRect();
    return {
      top: o.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: o.left + (window.pageXOffset || bo(document.documentElement) || bo(document.body) || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function zt(e, o) {
  if (e) {
    let r = e.offsetHeight;
    if (o) {
      const t = getComputedStyle(e);
      r += parseFloat(t.marginTop) + parseFloat(t.marginBottom);
    }
    return r;
  }
  return 0;
}
function mr(e, o = []) {
  const r = hr(e);
  return r === null ? o : mr(r, o.concat([r]));
}
function Lt(e) {
  const o = [];
  if (e) {
    const r = mr(e), t = /(auto|scroll)/, n = (i) => {
      try {
        const s = window.getComputedStyle(i, null);
        return t.test(s.getPropertyValue("overflow")) || t.test(s.getPropertyValue("overflowX")) || t.test(s.getPropertyValue("overflowY"));
      } catch {
        return !1;
      }
    };
    for (const i of r) {
      const s = i.nodeType === 1 && i.dataset.scrollselectors;
      if (s) {
        const l = s.split(",");
        for (const a of l) {
          const d = so(i, a);
          d && n(d) && o.push(d);
        }
      }
      i.nodeType !== 9 && n(i) && o.push(i);
    }
  }
  return o;
}
function Ce(e) {
  if (e) {
    let o = e.offsetWidth;
    const r = getComputedStyle(e);
    return o -= parseFloat(r.paddingLeft) + parseFloat(r.paddingRight) + parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth), o;
  }
  return 0;
}
function br() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function To(e) {
  return !!(e && e.offsetParent != null);
}
function Dt() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function At(e, o = "", r) {
  Xe(e) && r !== null && r !== void 0 && e.setAttribute(o, r);
}
var Qe = {};
function jt(e = "pui_id_") {
  return Object.hasOwn(Qe, e) || (Qe[e] = 0), Qe[e]++, `${e}${Qe[e]}`;
}
function Et() {
  let e = [];
  const o = (s, l, a = 999) => {
    const d = n(s, l, a), c = d.value + (d.key === s ? 0 : a) + 1;
    return e.push({ key: s, value: c }), c;
  }, r = (s) => {
    e = e.filter((l) => l.value !== s);
  }, t = (s, l) => n(s, l).value, n = (s, l, a = 0) => [...e].reverse().find((d) => l ? !0 : d.key === s) || { key: s, value: a }, i = (s) => s && parseInt(s.style.zIndex, 10) || 0;
  return {
    get: i,
    set: (s, l, a) => {
      l && (l.style.zIndex = String(o(s, !0, a)));
    },
    clear: (s) => {
      s && (r(i(s)), s.style.zIndex = "");
    },
    getCurrent: (s) => t(s, !0)
  };
}
var po = Et(), Mt = Object.defineProperty, Nt = Object.defineProperties, Vt = Object.getOwnPropertyDescriptors, io = Object.getOwnPropertySymbols, vr = Object.prototype.hasOwnProperty, yr = Object.prototype.propertyIsEnumerable, zo = (e, o, r) => o in e ? Mt(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, oe = (e, o) => {
  for (var r in o || (o = {}))
    vr.call(o, r) && zo(e, r, o[r]);
  if (io)
    for (var r of io(o))
      yr.call(o, r) && zo(e, r, o[r]);
  return e;
}, go = (e, o) => Nt(e, Vt(o)), ce = (e, o) => {
  var r = {};
  for (var t in e)
    vr.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && io)
    for (var t of io(e))
      o.indexOf(t) < 0 && yr.call(e, t) && (r[t] = e[t]);
  return r;
}, Ft = Co(), N = Ft;
function Lo(e, o) {
  lo(e) ? e.push(...o || []) : de(e) && Object.assign(e, o);
}
function Wt(e) {
  return de(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function Kt(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function vo(e = "", o = "") {
  return Kt(`${U(e, !1) && U(o, !1) ? `${e}-` : e}${o}`);
}
function $r(e = "", o = "") {
  return `--${vo(e, o)}`;
}
function Ht(e = "") {
  const o = (e.match(/{/g) || []).length, r = (e.match(/}/g) || []).length;
  return (o + r) % 2 !== 0;
}
function kr(e, o = "", r = "", t = [], n) {
  if (U(e)) {
    const i = /{([^}]*)}/g, s = e.trim();
    if (Ht(s))
      return;
    if (pe(s, i)) {
      const l = s.replaceAll(i, (c) => {
        const f = c.replace(/{|}/g, "").split(".").filter((g) => !t.some((h) => pe(g, h)));
        return `var(${$r(r, ur(f.join("-")))}${R(n) ? `, ${n}` : ""})`;
      }), a = /(\d+\s+[\+\-\*\/]\s+\d+)/g, d = /var\([^)]+\)/g;
      return pe(l.replace(d, "0"), a) ? `calc(${l})` : l;
    }
    return s;
  } else if (vt(e))
    return e;
}
function Ut(e, o, r) {
  U(o, !1) && e.push(`${o}:${r};`);
}
function Oe(e, o) {
  return e ? `${e}{${o}}` : "";
}
var De = (...e) => Gt(T.getTheme(), ...e), Gt = (e = {}, o, r, t) => {
  if (o) {
    const { variable: n, options: i } = T.defaults || {}, { prefix: s, transform: l } = (e == null ? void 0 : e.options) || i || {}, d = pe(o, /{([^}]*)}/g) ? o : `{${o}}`;
    return t === "value" || ve(t) && l === "strict" ? T.getTokenValue(o) : kr(d, void 0, s, [n.excludedKeyRegex], r);
  }
  return "";
};
function Yt(e, o = {}) {
  const r = T.defaults.variable, { prefix: t = r.prefix, selector: n = r.selector, excludedKeyRegex: i = r.excludedKeyRegex } = o, s = (d, c = "") => Object.entries(d).reduce(
    (u, [f, g]) => {
      const h = pe(f, i) ? vo(c) : vo(c, ur(f)), v = Wt(g);
      if (de(v)) {
        const { variables: b, tokens: $ } = s(v, h);
        Lo(u.tokens, $), Lo(u.variables, b);
      } else
        u.tokens.push((t ? h.replace(`${t}-`, "") : h).replaceAll("-", ".")), Ut(u.variables, $r(h), kr(v, h, t, [i]));
      return u;
    },
    { variables: [], tokens: [] }
  ), { variables: l, tokens: a } = s(e, t);
  return {
    value: l,
    tokens: a,
    declarations: l.join(""),
    css: Oe(n, l.join(""))
  };
}
var ee = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(e) {
          return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(e) {
          return { type: "attr", selector: `:root${e}`, matched: this.pattern.test(e.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(e) {
          return { type: "media", selector: `${e}{:root{[CSS]}}`, matched: this.pattern.test(e.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(e) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(e.trim()) };
        }
      },
      custom: {
        resolve(e) {
          return { type: "custom", selector: e, matched: !0 };
        }
      }
    },
    resolve(e) {
      const o = Object.keys(this.rules).filter((r) => r !== "custom").map((r) => this.rules[r]);
      return [e].flat().map((r) => {
        var t;
        return (t = o.map((n) => n.resolve(r)).find((n) => n.matched)) != null ? t : this.rules.custom.resolve(r);
      });
    }
  },
  _toVariables(e, o) {
    return Yt(e, { prefix: o == null ? void 0 : o.prefix });
  },
  getCommon({ name: e = "", theme: o = {}, params: r, set: t, defaults: n }) {
    var i, s, l, a, d, c, u;
    const { preset: f, options: g } = o;
    let h, v, b, $, k, m, p;
    if (R(f) && g.transform !== "strict") {
      const { primitive: y, semantic: B, extend: O } = f, x = B || {}, { colorScheme: V } = x, W = ce(x, ["colorScheme"]), D = O || {}, { colorScheme: E } = D, G = ce(D, ["colorScheme"]), Y = V || {}, { dark: M } = Y, K = ce(Y, ["dark"]), X = E || {}, { dark: ge } = X, te = ce(X, ["dark"]), Z = R(y) ? this._toVariables({ primitive: y }, g) : {}, ne = R(W) ? this._toVariables({ semantic: W }, g) : {}, ye = R(K) ? this._toVariables({ light: K }, g) : {}, Ze = R(M) ? this._toVariables({ dark: M }, g) : {}, Se = R(G) ? this._toVariables({ semantic: G }, g) : {}, So = R(te) ? this._toVariables({ light: te }, g) : {}, Oo = R(ge) ? this._toVariables({ dark: ge }, g) : {}, [jr, Er] = [(i = Z.declarations) != null ? i : "", Z.tokens], [Mr, Nr] = [(s = ne.declarations) != null ? s : "", ne.tokens || []], [Vr, Fr] = [(l = ye.declarations) != null ? l : "", ye.tokens || []], [Wr, Kr] = [(a = Ze.declarations) != null ? a : "", Ze.tokens || []], [Hr, Ur] = [(d = Se.declarations) != null ? d : "", Se.tokens || []], [Gr, Yr] = [(c = So.declarations) != null ? c : "", So.tokens || []], [qr, Xr] = [(u = Oo.declarations) != null ? u : "", Oo.tokens || []];
      h = this.transformCSS(e, jr, "light", "variable", g, t, n), v = Er;
      const Zr = this.transformCSS(e, `${Mr}${Vr}`, "light", "variable", g, t, n), Qr = this.transformCSS(e, `${Wr}`, "dark", "variable", g, t, n);
      b = `${Zr}${Qr}`, $ = [.../* @__PURE__ */ new Set([...Nr, ...Fr, ...Kr])];
      const Jr = this.transformCSS(e, `${Hr}${Gr}color-scheme:light`, "light", "variable", g, t, n), et = this.transformCSS(e, `${qr}color-scheme:dark`, "dark", "variable", g, t, n);
      k = `${Jr}${et}`, m = [.../* @__PURE__ */ new Set([...Ur, ...Yr, ...Xr])], p = J(f.css, { dt: De });
    }
    return {
      primitive: {
        css: h,
        tokens: v
      },
      semantic: {
        css: b,
        tokens: $
      },
      global: {
        css: k,
        tokens: m
      },
      style: p
    };
  },
  getPreset({ name: e = "", preset: o = {}, options: r, params: t, set: n, defaults: i, selector: s }) {
    var l, a, d;
    let c, u, f;
    if (R(o) && r.transform !== "strict") {
      const g = e.replace("-directive", ""), h = o, { colorScheme: v, extend: b, css: $ } = h, k = ce(h, ["colorScheme", "extend", "css"]), m = b || {}, { colorScheme: p } = m, y = ce(m, ["colorScheme"]), B = v || {}, { dark: O } = B, x = ce(B, ["dark"]), V = p || {}, { dark: W } = V, D = ce(V, ["dark"]), E = R(k) ? this._toVariables({ [g]: oe(oe({}, k), y) }, r) : {}, G = R(x) ? this._toVariables({ [g]: oe(oe({}, x), D) }, r) : {}, Y = R(O) ? this._toVariables({ [g]: oe(oe({}, O), W) }, r) : {}, [M, K] = [(l = E.declarations) != null ? l : "", E.tokens || []], [X, ge] = [(a = G.declarations) != null ? a : "", G.tokens || []], [te, Z] = [(d = Y.declarations) != null ? d : "", Y.tokens || []], ne = this.transformCSS(g, `${M}${X}`, "light", "variable", r, n, i, s), ye = this.transformCSS(g, te, "dark", "variable", r, n, i, s);
      c = `${ne}${ye}`, u = [.../* @__PURE__ */ new Set([...K, ...ge, ...Z])], f = J($, { dt: De });
    }
    return {
      css: c,
      tokens: u,
      style: f
    };
  },
  getPresetC({ name: e = "", theme: o = {}, params: r, set: t, defaults: n }) {
    var i;
    const { preset: s, options: l } = o, a = (i = s == null ? void 0 : s.components) == null ? void 0 : i[e];
    return this.getPreset({ name: e, preset: a, options: l, params: r, set: t, defaults: n });
  },
  // @deprecated - use getPresetC instead
  getPresetD({ name: e = "", theme: o = {}, params: r, set: t, defaults: n }) {
    var i, s;
    const l = e.replace("-directive", ""), { preset: a, options: d } = o, c = ((i = a == null ? void 0 : a.components) == null ? void 0 : i[l]) || ((s = a == null ? void 0 : a.directives) == null ? void 0 : s[l]);
    return this.getPreset({ name: l, preset: c, options: d, params: r, set: t, defaults: n });
  },
  applyDarkColorScheme(e) {
    return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
  },
  getColorSchemeOption(e, o) {
    var r;
    return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? o.options.darkModeSelector : (r = e.darkModeSelector) != null ? r : o.options.darkModeSelector) : [];
  },
  getLayerOrder(e, o = {}, r, t) {
    const { cssLayer: n } = o;
    return n ? `@layer ${J(n.order || "primeui", r)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: o = {}, params: r, props: t = {}, set: n, defaults: i }) {
    const s = this.getCommon({ name: e, theme: o, params: r, set: n, defaults: i }), l = Object.entries(t).reduce((a, [d, c]) => a.push(`${d}="${c}"`) && a, []).join(" ");
    return Object.entries(s || {}).reduce((a, [d, c]) => {
      if (c != null && c.css) {
        const u = Le(c == null ? void 0 : c.css), f = `${d}-variables`;
        a.push(`<style type="text/css" data-primevue-style-id="${f}" ${l}>${u}</style>`);
      }
      return a;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: o = {}, params: r, props: t = {}, set: n, defaults: i }) {
    var s;
    const l = { name: e, theme: o, params: r, set: n, defaults: i }, a = (s = e.includes("-directive") ? this.getPresetD(l) : this.getPresetC(l)) == null ? void 0 : s.css, d = Object.entries(t).reduce((c, [u, f]) => c.push(`${u}="${f}"`) && c, []).join(" ");
    return a ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${d}>${Le(a)}</style>` : "";
  },
  createTokens(e = {}, o, r = "", t = "", n = {}) {
    return Object.entries(e).forEach(([i, s]) => {
      const l = pe(i, o.variable.excludedKeyRegex) ? r : r ? `${r}.${Ro(i)}` : Ro(i), a = t ? `${t}.${i}` : i;
      de(s) ? this.createTokens(s, o, l, a, n) : (n[l] || (n[l] = {
        paths: [],
        computed(d, c = {}) {
          var u, f;
          return this.paths.length === 1 ? (u = this.paths[0]) == null ? void 0 : u.computed(this.paths[0].scheme, c.binding) : d && d !== "none" ? (f = this.paths.find((g) => g.scheme === d)) == null ? void 0 : f.computed(d, c.binding) : this.paths.map((g) => g.computed(g.scheme, c[g.scheme]));
        }
      }), n[l].paths.push({
        path: a,
        value: s,
        scheme: a.includes("colorScheme.light") ? "light" : a.includes("colorScheme.dark") ? "dark" : "none",
        computed(d, c = {}) {
          const u = /{([^}]*)}/g;
          let f = s;
          if (c.name = this.path, c.binding || (c.binding = {}), pe(s, u)) {
            const h = s.trim().replaceAll(u, ($) => {
              var k;
              const m = $.replace(/{|}/g, ""), p = (k = n[m]) == null ? void 0 : k.computed(d, c);
              return lo(p) && p.length === 2 ? `light-dark(${p[0].value},${p[1].value})` : p == null ? void 0 : p.value;
            }), v = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, b = /var\([^)]+\)/g;
            f = pe(h.replace(b, "0"), v) ? `calc(${h})` : h;
          }
          return ve(c.binding) && delete c.binding, {
            colorScheme: d,
            path: this.path,
            paths: c,
            value: f.includes("undefined") ? void 0 : f
          };
        }
      }));
    }), n;
  },
  getTokenValue(e, o, r) {
    var t;
    const i = ((a) => a.split(".").filter((c) => !pe(c.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(o), s = o.includes("colorScheme.light") ? "light" : o.includes("colorScheme.dark") ? "dark" : void 0, l = [(t = e[i]) == null ? void 0 : t.computed(s)].flat().filter((a) => a);
    return l.length === 1 ? l[0].value : l.reduce((a = {}, d) => {
      const c = d, { colorScheme: u } = c, f = ce(c, ["colorScheme"]);
      return a[u] = f, a;
    }, void 0);
  },
  getSelectorRule(e, o, r, t) {
    return r === "class" || r === "attr" ? Oe(R(o) ? `${e}${o},${e} ${o}` : e, t) : Oe(e, R(o) ? Oe(o, t) : t);
  },
  transformCSS(e, o, r, t, n = {}, i, s, l) {
    if (R(o)) {
      const { cssLayer: a } = n;
      if (t !== "style") {
        const d = this.getColorSchemeOption(n, s);
        o = r === "dark" ? d.reduce((c, { type: u, selector: f }) => (R(f) && (c += f.includes("[CSS]") ? f.replace("[CSS]", o) : this.getSelectorRule(f, l, u, o)), c), "") : Oe(l ?? ":root", o);
      }
      if (a) {
        const d = {
          name: "primeui",
          order: "primeui"
        };
        de(a) && (d.name = J(a.name, { name: e, type: t })), R(d.name) && (o = Oe(`@layer ${d.name}`, o), i == null || i.layerNames(d.name));
      }
      return o;
    }
    return "";
  }
}, T = {
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
  update(e = {}) {
    const { theme: o } = e;
    o && (this._theme = go(oe({}, o), {
      options: oe(oe({}, this.defaults.options), o.options)
    }), this._tokens = ee.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.preset) || {};
  },
  get options() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(e) {
    this.update({ theme: e }), N.emit("theme:change", e);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(e) {
    this._theme = go(oe({}, this.theme), { preset: e }), this._tokens = ee.createTokens(e, this.defaults), this.clearLoadedStyleNames(), N.emit("preset:change", e), N.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = go(oe({}, this.theme), { options: e }), this.clearLoadedStyleNames(), N.emit("options:change", e), N.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(e) {
    this._layerNames.add(e);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(e) {
    return ee.getTokenValue(this.tokens, e, this.defaults);
  },
  getCommon(e = "", o) {
    return ee.getCommon({ name: e, theme: this.theme, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(e = "", o) {
    const r = { name: e, theme: this.theme, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return ee.getPresetC(r);
  },
  // @deprecated - use getComponent instead
  getDirective(e = "", o) {
    const r = { name: e, theme: this.theme, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return ee.getPresetD(r);
  },
  getCustomPreset(e = "", o, r, t) {
    const n = { name: e, preset: o, options: this.options, selector: r, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return ee.getPreset(n);
  },
  getLayerOrderCSS(e = "") {
    return ee.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(e = "", o, r = "style", t) {
    return ee.transformCSS(e, o, t, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(e = "", o, r = {}) {
    return ee.getCommonStyleSheet({ name: e, theme: this.theme, params: o, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(e, o, r = {}) {
    return ee.getStyleSheet({ name: e, theme: this.theme, params: o, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(e) {
    this._loadingStyles.add(e);
  },
  onStyleUpdated(e) {
    this._loadingStyles.add(e);
  },
  onStyleLoaded(e, { name: o }) {
    this._loadingStyles.size && (this._loadingStyles.delete(o), N.emit(`theme:${o}:load`, e), !this._loadingStyles.size && N.emit("theme:load"));
  }
}, F = {
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
}, qt = ({ dt: e }) => `
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
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}
`;
function Ae(e) {
  "@babel/helpers - typeof";
  return Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Ae(e);
}
function Do(e, o) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Ao(e) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Do(Object(r), !0).forEach(function(t) {
      Xt(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Do(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Xt(e, o, r) {
  return (o = Zt(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Zt(e) {
  var o = Qt(e, "string");
  return Ae(o) == "symbol" ? o : o + "";
}
function Qt(e, o) {
  if (Ae(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Ae(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
function Jt(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  Bo() && Bo().components ? ar(e) : o ? e() : rt(e);
}
var en = 0;
function on(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Q(!1), t = Q(e), n = Q(null), i = br() ? window.document : void 0, s = o.document, l = s === void 0 ? i : s, a = o.immediate, d = a === void 0 ? !0 : a, c = o.manual, u = c === void 0 ? !1 : c, f = o.name, g = f === void 0 ? "style_".concat(++en) : f, h = o.id, v = h === void 0 ? void 0 : h, b = o.media, $ = b === void 0 ? void 0 : b, k = o.nonce, m = k === void 0 ? void 0 : k, p = o.first, y = p === void 0 ? !1 : p, B = o.onMounted, O = B === void 0 ? void 0 : B, x = o.onUpdated, V = x === void 0 ? void 0 : x, W = o.onLoad, D = W === void 0 ? void 0 : W, E = o.props, G = E === void 0 ? {} : E, Y = function() {
  }, M = function(ge) {
    var te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (l) {
      var Z = Ao(Ao({}, G), te), ne = Z.name || g, ye = Z.id || v, Ze = Z.nonce || m;
      n.value = l.querySelector('style[data-primevue-style-id="'.concat(ne, '"]')) || l.getElementById(ye) || l.createElement("style"), n.value.isConnected || (t.value = ge || e, no(n.value, {
        type: "text/css",
        id: ye,
        media: $,
        nonce: Ze
      }), y ? l.head.prepend(n.value) : l.head.appendChild(n.value), At(n.value, "data-primevue-style-id", ne), no(n.value, Z), n.value.onload = function(Se) {
        return D == null ? void 0 : D(Se, {
          name: ne
        });
      }, O == null || O(ne)), !r.value && (Y = ae(t, function(Se) {
        n.value.textContent = Se, V == null || V(ne);
      }, {
        immediate: !0
      }), r.value = !0);
    }
  }, K = function() {
    !l || !r.value || (Y(), It(n.value) && l.head.removeChild(n.value), r.value = !1, n.value = null);
  };
  return d && !u && Jt(M), {
    id: v,
    name: g,
    el: n,
    css: t,
    unload: K,
    load: M,
    isLoaded: ot(r)
  };
}
function je(e) {
  "@babel/helpers - typeof";
  return je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, je(e);
}
function jo(e, o) {
  return an(e) || nn(e, o) || tn(e, o) || rn();
}
function rn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tn(e, o) {
  if (e) {
    if (typeof e == "string")
      return Eo(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Eo(e, o) : void 0;
  }
}
function Eo(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, t = Array(o); r < o; r++)
    t[r] = e[r];
  return t;
}
function nn(e, o) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var t, n, i, s, l = [], a = !0, d = !1;
    try {
      if (i = (r = r.call(e)).next, o !== 0)
        for (; !(a = (t = i.call(r)).done) && (l.push(t.value), l.length !== o); a = !0)
          ;
    } catch (c) {
      d = !0, n = c;
    } finally {
      try {
        if (!a && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (d)
          throw n;
      }
    }
    return l;
  }
}
function an(e) {
  if (Array.isArray(e))
    return e;
}
function Mo(e, o) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function ho(e) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Mo(Object(r), !0).forEach(function(t) {
      ln(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mo(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function ln(e, o, r) {
  return (o = sn(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function sn(e) {
  var o = dn(e, "string");
  return je(o) == "symbol" ? o : o + "";
}
function dn(e, o) {
  if (je(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (je(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var cn = function(o) {
  var r = o.dt;
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
}, un = {}, fn = {}, z = {
  name: "base",
  css: cn,
  style: qt,
  classes: un,
  inlineStyles: fn,
  load: function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, n = t(J(o, {
      dt: De
    }));
    return R(n) ? on(Le(n), ho({
      name: this.name
    }, r)) : {};
  },
  loadCSS: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, o);
  },
  loadStyle: function() {
    var o = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, r, function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return T.transformCSS(r.name || o.name, "".concat(n).concat(t));
    });
  },
  getCommonTheme: function(o) {
    return T.getCommon(this.name, o);
  },
  getComponentTheme: function(o) {
    return T.getComponent(this.name, o);
  },
  getDirectiveTheme: function(o) {
    return T.getDirective(this.name, o);
  },
  getPresetTheme: function(o, r, t) {
    return T.getCustomPreset(this.name, o, r, t);
  },
  getLayerOrderThemeCSS: function() {
    return T.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var t = J(this.css, {
        dt: De
      }) || "", n = Le("".concat(t).concat(o)), i = Object.entries(r).reduce(function(s, l) {
        var a = jo(l, 2), d = a[0], c = a[1];
        return s.push("".concat(d, '="').concat(c, '"')) && s;
      }, []).join(" ");
      return R(n) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(i, ">").concat(n, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return T.getCommonStyleSheet(this.name, o, r);
  },
  getThemeStyleSheet: function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [T.getStyleSheet(this.name, o, r)];
    if (this.style) {
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = J(this.style, {
        dt: De
      }), s = Le(T.transformCSS(n, i)), l = Object.entries(r).reduce(function(a, d) {
        var c = jo(d, 2), u = c[0], f = c[1];
        return a.push("".concat(u, '="').concat(f, '"')) && a;
      }, []).join(" ");
      R(s) && t.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(l, ">").concat(s, "</style>"));
    }
    return t.join("");
  },
  extend: function(o) {
    return ho(ho({}, this), {}, {
      css: void 0,
      style: void 0
    }, o);
  }
}, be = Co();
function Ee(e) {
  "@babel/helpers - typeof";
  return Ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Ee(e);
}
function No(e, o) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Je(e) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? No(Object(r), !0).forEach(function(t) {
      pn(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : No(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function pn(e, o, r) {
  return (o = gn(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function gn(e) {
  var o = hn(e, "string");
  return Ee(o) == "symbol" ? o : o + "";
}
function hn(e, o) {
  if (Ee(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Ee(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var mn = {
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
    text: [F.STARTS_WITH, F.CONTAINS, F.NOT_CONTAINS, F.ENDS_WITH, F.EQUALS, F.NOT_EQUALS],
    numeric: [F.EQUALS, F.NOT_EQUALS, F.LESS_THAN, F.LESS_THAN_OR_EQUAL_TO, F.GREATER_THAN, F.GREATER_THAN_OR_EQUAL_TO],
    date: [F.DATE_IS, F.DATE_IS_NOT, F.DATE_BEFORE, F.DATE_AFTER]
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
}, bn = Symbol();
function vn(e, o) {
  var r = {
    config: tt(o)
  };
  return e.config.globalProperties.$primevue = r, e.provide(bn, r), yn(), $n(e, r), r;
}
var Be = [];
function yn() {
  N.clear(), Be.forEach(function(e) {
    return e == null ? void 0 : e();
  }), Be = [];
}
function $n(e, o) {
  var r = Q(!1), t = function() {
    var d;
    if (((d = o.config) === null || d === void 0 ? void 0 : d.theme) !== "none" && !T.isStyleNameLoaded("common")) {
      var c, u, f = ((c = z.getCommonTheme) === null || c === void 0 ? void 0 : c.call(z)) || {}, g = f.primitive, h = f.semantic, v = f.global, b = f.style, $ = {
        nonce: (u = o.config) === null || u === void 0 || (u = u.csp) === null || u === void 0 ? void 0 : u.nonce
      };
      z.load(g == null ? void 0 : g.css, Je({
        name: "primitive-variables"
      }, $)), z.load(h == null ? void 0 : h.css, Je({
        name: "semantic-variables"
      }, $)), z.load(v == null ? void 0 : v.css, Je({
        name: "global-variables"
      }, $)), z.loadStyle(Je({
        name: "global-style"
      }, $), b), T.setLoadedStyleName("common");
    }
  };
  N.on("theme:change", function(a) {
    r.value || (e.config.globalProperties.$primevue.config.theme = a, r.value = !0);
  });
  var n = ae(o.config, function(a, d) {
    be.emit("config:change", {
      newValue: a,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = ae(function() {
    return o.config.ripple;
  }, function(a, d) {
    be.emit("config:ripple:change", {
      newValue: a,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  }), s = ae(function() {
    return o.config.theme;
  }, function(a, d) {
    r.value || T.setTheme(a), o.config.unstyled || t(), r.value = !1, be.emit("config:theme:change", {
      newValue: a,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !1
  }), l = ae(function() {
    return o.config.unstyled;
  }, function(a, d) {
    !a && o.config.theme && t(), be.emit("config:unstyled:change", {
      newValue: a,
      oldValue: d
    });
  }, {
    immediate: !0,
    deep: !0
  });
  Be.push(n), Be.push(i), Be.push(s), Be.push(l);
}
var kn = {
  install: function(o, r) {
    var t = yt(mn, r);
    vn(o, t);
  }
}, wn = { transitionDuration: "{transition.duration}" }, Cn = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" }, xn = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, Sn = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" }, On = { root: wn, panel: Cn, header: xn, content: Sn }, Bn = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, _n = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, In = { padding: "{list.padding}", gap: "{list.gap}" }, Pn = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Rn = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Tn = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, zn = { borderRadius: "{border.radius.sm}" }, Ln = { padding: "{list.option.padding}" }, Dn = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } }, An = { root: Bn, overlay: _n, list: In, option: Pn, optionGroup: Rn, dropdown: Tn, chip: zn, emptyMessage: Ln, colorScheme: Dn }, jn = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, En = { size: "1rem" }, Mn = { borderColor: "{content.background}", offset: "-0.75rem" }, Nn = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, Vn = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, Fn = { root: jn, icon: En, group: Mn, lg: Nn, xl: Vn }, Wn = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, Kn = { size: "0.5rem" }, Hn = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, Un = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, Gn = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, Yn = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, qn = { root: Wn, dot: Kn, sm: Hn, lg: Un, xl: Gn, colorScheme: Yn }, Xn = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, Zn = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.15s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } }, Qn = { primitive: Xn, semantic: Zn }, Jn = { borderRadius: "{content.border.radius}" }, ei = { root: Jn }, oi = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, ri = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ti = { color: "{navigation.item.icon.color}" }, ni = { root: oi, item: ri, separator: ti }, ii = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, ai = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, li = { root: ii, colorScheme: ai }, si = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" }, di = { padding: "1.25rem", gap: "0.5rem" }, ci = { gap: "0.5rem" }, ui = { fontSize: "1.25rem", fontWeight: "500" }, fi = { color: "{text.muted.color}" }, pi = { root: si, body: di, caption: ci, title: ui, subtitle: fi }, gi = { transitionDuration: "{transition.duration}" }, hi = { gap: "0.25rem" }, mi = { padding: "1rem", gap: "0.5rem" }, bi = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, vi = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } }, yi = { root: gi, content: hi, indicatorList: mi, indicator: bi, colorScheme: vi }, $i = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, ki = { width: "2.5rem", color: "{form.field.icon.color}" }, wi = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Ci = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, xi = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, Si = { color: "{form.field.icon.color}" }, Oi = { root: $i, dropdown: ki, overlay: wi, list: Ci, option: xi, clearIcon: Si }, Bi = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, _i = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, Ii = { root: Bi, icon: _i }, Pi = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, Ri = { width: "2rem", height: "2rem" }, Ti = { size: "1rem" }, zi = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, Li = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, Di = { root: Pi, image: Ri, icon: Ti, removeIcon: zi, colorScheme: Li }, Ai = { transitionDuration: "{transition.duration}" }, ji = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ei = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, Mi = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, Ni = { root: Ai, preview: ji, panel: Ei, colorScheme: Mi }, Vi = { size: "2rem", color: "{overlay.modal.color}" }, Fi = { gap: "1rem" }, Wi = { icon: Vi, content: Fi }, Ki = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, Hi = { padding: "{overlay.popover.padding}", gap: "1rem" }, Ui = { size: "1.5rem", color: "{overlay.popover.color}" }, Gi = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, Yi = { root: Ki, content: Hi, icon: Ui, footer: Gi }, qi = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, Xi = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Zi = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Qi = { mobileIndent: "1rem" }, Ji = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, ea = { borderColor: "{content.border.color}" }, oa = { root: qi, list: Xi, item: Zi, submenu: Qi, submenuIcon: Ji, separator: ea }, ra = { transitionDuration: "{transition.duration}" }, ta = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, na = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ia = { fontWeight: "600" }, aa = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, la = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, sa = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, da = { fontWeight: "600" }, ca = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, ua = { color: "{primary.color}" }, fa = { width: "0.5rem" }, pa = { width: "1px", color: "{primary.color}" }, ga = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, ha = { size: "2rem" }, ma = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ba = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, va = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, ya = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, $a = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, ka = { root: ra, header: ta, headerCell: na, columnTitle: ia, row: aa, bodyCell: la, footerCell: sa, columnFooter: da, footer: ca, dropPoint: ua, columnResizer: fa, resizeIndicator: pa, sortIcon: ga, loadingIcon: ha, rowToggleButton: ma, filter: ba, paginatorTop: va, paginatorBottom: ya, colorScheme: $a }, wa = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, Ca = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, xa = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, Sa = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, Oa = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Ba = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, _a = { root: wa, header: Ca, content: xa, footer: Sa, paginatorTop: Oa, paginatorBottom: Ba }, Ia = { transitionDuration: "{transition.duration}" }, Pa = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, Ra = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, Ta = { gap: "0.5rem", fontWeight: "500" }, za = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, La = { color: "{form.field.icon.color}" }, Da = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, Aa = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, ja = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, Ea = { margin: "0.5rem 0 0 0" }, Ma = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, Na = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Va = { margin: "0.5rem 0 0 0" }, Fa = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, Wa = { margin: "0.5rem 0 0 0" }, Ka = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, Ha = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, Ua = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, Ga = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, Ya = { root: Ia, panel: Pa, header: Ra, title: Ta, dropdown: za, inputIcon: La, selectMonth: Da, selectYear: Aa, group: ja, dayView: Ea, weekDay: Ma, date: Na, monthView: Va, month: Fa, yearView: Wa, year: Ka, buttonbar: Ha, timePicker: Ua, colorScheme: Ga }, qa = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, Xa = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, Za = { fontSize: "1.25rem", fontWeight: "600" }, Qa = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, Ja = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, el = { root: qa, header: Xa, title: Za, content: Qa, footer: Ja }, ol = { borderColor: "{content.border.color}" }, rl = { background: "{content.background}", color: "{text.color}" }, tl = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, nl = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, il = { root: ol, content: rl, horizontal: tl, vertical: nl }, al = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, ll = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, sl = { root: al, item: ll }, dl = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, cl = { padding: "{overlay.modal.padding}" }, ul = { fontSize: "1.5rem", fontWeight: "600" }, fl = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, pl = { padding: "{overlay.modal.padding}" }, gl = { root: dl, header: cl, title: ul, content: fl, footer: pl }, hl = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, ml = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, bl = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, vl = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, yl = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, $l = { toolbar: hl, toolbarItem: ml, overlay: bl, overlayOption: vl, content: yl }, kl = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, wl = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Cl = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, xl = { padding: "0" }, Sl = { root: kl, legend: wl, toggleIcon: Cl, content: xl }, Ol = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, Bl = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, _l = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, Il = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, Pl = { gap: "0.5rem" }, Rl = { height: "0.25rem" }, Tl = { gap: "0.5rem" }, zl = { root: Ol, header: Bl, content: _l, file: Il, fileList: Pl, progressbar: Rl, basic: Tl }, Ll = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, Dl = { active: { top: "-1.25rem" } }, Al = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, jl = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, El = { root: Ll, over: Dl, in: Al, on: jl }, Ml = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, Nl = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Vl = { size: "1.5rem" }, Fl = { background: "{content.background}", padding: "1rem 0.25rem" }, Wl = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Kl = { size: "1rem" }, Hl = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, Ul = { gap: "0.5rem", padding: "1rem" }, Gl = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Yl = { background: "rgba(0, 0, 0, 0.5)" }, ql = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, Xl = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Zl = { size: "1.5rem" }, Ql = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } }, Jl = { root: Ml, navButton: Nl, navIcon: Vl, thumbnailsContent: Fl, thumbnailNavButton: Wl, thumbnailNavButtonIcon: Kl, caption: Hl, indicatorList: Ul, indicatorButton: Gl, insetIndicatorList: Yl, insetIndicatorButton: ql, closeButton: Xl, closeButtonIcon: Zl, colorScheme: Ql }, es = { color: "{form.field.icon.color}" }, os = { icon: es }, rs = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, ts = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, ns = { root: rs, input: ts }, is = { transitionDuration: "{transition.duration}" }, as = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, ls = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" }, ss = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, ds = { root: is, preview: as, toolbar: ls, action: ss }, cs = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, us = { handle: cs }, fs = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, ps = { fontWeight: "500" }, gs = { size: "1rem" }, hs = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } }, ms = { root: fs, text: ps, icon: gs, colorScheme: hs }, bs = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, vs = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, ys = { root: bs, display: vs }, $s = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, ks = { borderRadius: "{border.radius.sm}" }, ws = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } }, Cs = { root: $s, chip: ks, colorScheme: ws }, xs = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, Ss = { addon: xs }, Os = { transitionDuration: "{transition.duration}" }, Bs = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, _s = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } }, Is = { root: Os, button: Bs, colorScheme: _s }, Ps = { gap: "0.5rem" }, Rs = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, Ts = { root: Ps, input: Rs }, zs = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Ls = { root: zs }, Ds = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, As = { background: "{primary.color}" }, js = { background: "{content.border.color}" }, Es = { color: "{text.muted.color}" }, Ms = { root: Ds, value: As, range: js, text: Es }, Ns = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, Vs = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Fs = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Ws = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Ks = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, Hs = { padding: "{list.option.padding}" }, Us = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } }, Gs = { root: Ns, list: Vs, option: Fs, optionGroup: Ws, checkmark: Ks, emptyMessage: Hs, colorScheme: Us }, Ys = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, qs = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, Xs = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, Zs = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, Qs = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, Js = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background.}", color: "{navigation.submenu.label.color}" }, ed = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, od = { borderColor: "{content.border.color}" }, rd = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, td = { root: Ys, baseItem: qs, item: Xs, overlay: Zs, submenu: Qs, submenuLabel: Js, submenuIcon: ed, separator: od, mobileButton: rd }, nd = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, id = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, ad = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, ld = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" }, sd = { borderColor: "{content.border.color}" }, dd = { root: nd, list: id, item: ad, submenuLabel: ld, separator: sd }, cd = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, ud = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, fd = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, pd = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, gd = { borderColor: "{content.border.color}" }, hd = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, md = { root: cd, baseItem: ud, item: fd, submenu: pd, separator: gd, mobileButton: hd }, bd = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, vd = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, yd = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, $d = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, kd = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, wd = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, Cd = { root: { borderWidth: "1px" } }, xd = { content: { padding: "0" } }, Sd = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, Od = { root: bd, content: vd, text: yd, icon: $d, closeButton: kd, closeIcon: wd, outlined: Cd, simple: xd, colorScheme: Sd }, Bd = { borderRadius: "{content.border.radius}", gap: "1rem" }, _d = { background: "{content.border.color}", size: "0.5rem" }, Id = { gap: "0.5rem" }, Pd = { size: "0.5rem" }, Rd = { size: "1rem" }, Td = { verticalGap: "0.5rem", horizontalGap: "1rem" }, zd = { root: Bd, meters: _d, label: Id, labelMarker: Pd, labelIcon: Rd, labelList: Td }, Ld = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, Dd = { width: "2.5rem", color: "{form.field.icon.color}" }, Ad = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, jd = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Ed = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, Md = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, Nd = { color: "{form.field.icon.color}" }, Vd = { borderRadius: "{border.radius.sm}" }, Fd = { padding: "{list.option.padding}" }, Wd = { root: Ld, dropdown: Dd, overlay: Ad, list: jd, option: Ed, optionGroup: Md, chip: Vd, clearIcon: Nd, emptyMessage: Fd }, Kd = { gap: "1.125rem" }, Hd = { gap: "0.5rem" }, Ud = { root: Kd, controls: Hd }, Gd = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, Yd = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, qd = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Xd = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, Zd = { root: Gd, node: Yd, nodeToggleButton: qd, connector: Xd }, Qd = { outline: { width: "2px", color: "{content.background}" } }, Jd = { root: Qd }, ec = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, oc = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, rc = { color: "{text.muted.color}" }, tc = { maxWidth: "2.5rem" }, nc = { root: ec, navButton: oc, currentPageReport: rc, jumpToPageInput: tc }, ic = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, ac = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" }, lc = { padding: "0.375rem 1.125rem" }, sc = { fontWeight: "600" }, dc = { padding: "0 1.125rem 1.125rem 1.125rem" }, cc = { padding: "0 1.125rem 1.125rem 1.125rem" }, uc = { root: ic, header: ac, toggleableHeader: lc, title: sc, content: dc, footer: cc }, fc = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, pc = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } }, gc = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, hc = { indent: "1rem" }, mc = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, bc = { root: fc, panel: pc, item: gc, submenu: hc, submenuIcon: mc }, vc = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" }, yc = { color: "{form.field.icon.color}" }, $c = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, kc = { gap: "0.5rem" }, wc = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } }, Cc = { meter: vc, icon: yc, overlay: $c, content: kc, colorScheme: wc }, xc = { gap: "1.125rem" }, Sc = { gap: "0.5rem" }, Oc = { root: xc, controls: Sc }, Bc = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, _c = { padding: "{overlay.popover.padding}" }, Ic = { root: Bc, content: _c }, Pc = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" }, Rc = { background: "{primary.color}" }, Tc = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" }, zc = { root: Pc, value: Rc, label: Tc }, Lc = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, Dc = { colorScheme: Lc }, Ac = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, jc = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, Ec = { root: Ac, icon: jc }, Mc = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Nc = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, Vc = { root: Mc, icon: Nc }, Fc = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } }, Wc = { colorScheme: Fc }, Kc = { transitionDuration: "{transition.duration}" }, Hc = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Uc = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } }, Gc = { root: Kc, bar: Hc, colorScheme: Uc }, Yc = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, qc = { width: "2.5rem", color: "{form.field.icon.color}" }, Xc = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, Zc = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, Qc = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, Jc = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, eu = { color: "{form.field.icon.color}" }, ou = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, ru = { padding: "{list.option.padding}" }, tu = { root: Yc, dropdown: qc, overlay: Xc, list: Zc, option: Qc, optionGroup: Jc, clearIcon: eu, checkmark: ou, emptyMessage: ru }, nu = { borderRadius: "{form.field.border.radius}" }, iu = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, au = { root: nu, colorScheme: iu }, lu = { borderRadius: "{content.border.radius}" }, su = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, du = { root: lu, colorScheme: su }, cu = { transitionDuration: "{transition.duration}" }, uu = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" }, fu = { background: "{primary.color}" }, pu = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, gu = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } }, hu = { root: cu, track: uu, range: fu, handle: pu, colorScheme: gu }, mu = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, bu = { root: mu }, vu = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, yu = { root: vu }, $u = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, ku = { background: "{content.border.color}" }, wu = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Cu = { root: $u, gutter: ku, handle: wu }, xu = { transitionDuration: "{transition.duration}" }, Su = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, Ou = { padding: "0.5rem", gap: "1rem" }, Bu = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, _u = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, Iu = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, Pu = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, Ru = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, Tu = { root: xu, separator: Su, step: Ou, stepHeader: Bu, stepTitle: _u, stepNumber: Iu, steppanels: Pu, steppanel: Ru }, zu = { transitionDuration: "{transition.duration}" }, Lu = { background: "{content.border.color}" }, Du = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, Au = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" }, ju = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" }, Eu = { root: zu, separator: Lu, itemLink: Du, itemLabel: Au, itemNumber: ju }, Mu = { transitionDuration: "{transition.duration}" }, Nu = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Vu = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Fu = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, Wu = { height: "1px", bottom: "-1px", background: "{primary.color}" }, Ku = { root: Mu, tablist: Nu, item: Vu, itemIcon: Fu, activeBar: Wu }, Hu = { transitionDuration: "{transition.duration}" }, Uu = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, Gu = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Yu = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, qu = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, Xu = { height: "1px", bottom: "-1px", background: "{primary.color}" }, Zu = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, Qu = { root: Hu, tablist: Uu, tab: Gu, tabpanel: Yu, navButton: qu, activeBar: Xu, colorScheme: Zu }, Ju = { transitionDuration: "{transition.duration}" }, ef = { background: "{content.background}", borderColor: "{content.border.color}" }, of = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, rf = { background: "{content.background}", color: "{content.color}" }, tf = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, nf = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, af = { root: Ju, tabList: ef, tab: of, tabPanel: rf, navButton: tf, colorScheme: nf }, lf = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, sf = { size: "0.75rem" }, df = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, cf = { root: lf, icon: sf, colorScheme: df }, uf = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, ff = { gap: "0.25rem" }, pf = { margin: "2px 0" }, gf = { root: uf, prompt: ff, commandResponse: pf }, hf = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, mf = { root: hf }, bf = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, vf = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, yf = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, $f = { mobileIndent: "1rem" }, kf = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, wf = { borderColor: "{content.border.color}" }, Cf = { root: bf, list: vf, item: yf, submenu: $f, submenuIcon: kf, separator: wf }, xf = { minHeight: "5rem" }, Sf = { eventContent: { padding: "1rem 0" } }, Of = { eventContent: { padding: "0 1rem" } }, Bf = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } }, _f = { color: "{content.border.color}", size: "2px" }, If = { event: xf, horizontal: Sf, vertical: Of, eventMarker: Bf, eventConnector: _f }, Pf = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, Rf = { size: "1.125rem" }, Tf = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, zf = { gap: "0.5rem" }, Lf = { fontWeight: "500", fontSize: "1rem" }, Df = { fontWeight: "500", fontSize: "0.875rem" }, Af = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, jf = { size: "1rem" }, Ef = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, Mf = { root: Pf, icon: Rf, content: Tf, text: zf, summary: Lf, detail: Df, closeButton: Af, closeIcon: jf, colorScheme: Ef }, Nf = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } }, Vf = { disabledColor: "{form.field.disabled.color}" }, Ff = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } }, Wf = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } }, Kf = { root: Nf, icon: Vf, content: Ff, colorScheme: Wf }, Hf = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" }, Uf = { borderRadius: "50%", size: "1rem" }, Gf = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } }, Yf = { root: Hf, handle: Uf, colorScheme: Gf }, qf = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, Xf = { root: qf }, Zf = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, Qf = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } }, Jf = { root: Zf, colorScheme: Qf }, ep = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, op = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, rp = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, tp = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, np = { size: "2rem" }, ip = { margin: "0 0 0.5rem 0" }, ap = { root: ep, node: op, nodeIcon: rp, nodeToggleButton: tp, loadingIcon: np, filter: ip }, lp = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, sp = { width: "2.5rem", color: "{form.field.icon.color}" }, dp = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, cp = { padding: "{list.padding}" }, up = { padding: "{list.option.padding}" }, fp = { borderRadius: "{border.radius.sm}" }, pp = { color: "{form.field.icon.color}" }, gp = { root: lp, dropdown: sp, overlay: dp, tree: cp, emptyMessage: up, chip: fp, clearIcon: pp }, hp = { transitionDuration: "{transition.duration}" }, mp = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, bp = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, vp = { fontWeight: "600" }, yp = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, $p = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, kp = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, wp = { fontWeight: "600" }, Cp = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, xp = { width: "0.5rem" }, Sp = { width: "1px", color: "{primary.color}" }, Op = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, Bp = { size: "2rem" }, _p = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, Ip = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Pp = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, Rp = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, Tp = { root: hp, header: mp, headerCell: bp, columnTitle: vp, row: yp, bodyCell: $p, footerCell: kp, columnFooter: wp, footer: Cp, columnResizer: xp, resizeIndicator: Sp, sortIcon: Op, loadingIcon: Bp, nodeToggleButton: _p, paginatorTop: Ip, paginatorBottom: Pp, colorScheme: Rp }, zp = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, Lp = { loader: zp }, Dp = Object.defineProperty, Ap = Object.defineProperties, jp = Object.getOwnPropertyDescriptors, Vo = Object.getOwnPropertySymbols, Ep = Object.prototype.hasOwnProperty, Mp = Object.prototype.propertyIsEnumerable, Fo = (e, o, r) => o in e ? Dp(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Wo, Np = (Wo = ((e, o) => {
  for (var r in o || (o = {}))
    Ep.call(o, r) && Fo(e, r, o[r]);
  if (Vo)
    for (var r of Vo(o))
      Mp.call(o, r) && Fo(e, r, o[r]);
  return e;
})({}, Qn), Ap(Wo, jp({ components: { accordion: On, autocomplete: An, avatar: Fn, badge: qn, blockui: ei, breadcrumb: ni, button: li, card: pi, carousel: yi, cascadeselect: Oi, checkbox: Ii, chip: Di, colorpicker: Ni, confirmdialog: Wi, confirmpopup: Yi, contextmenu: oa, datatable: ka, dataview: _a, datepicker: Ya, dialog: el, divider: il, dock: sl, drawer: gl, editor: $l, fieldset: Sl, fileupload: zl, floatlabel: El, galleria: Jl, iconfield: os, iftalabel: ns, image: ds, imagecompare: us, inlinemessage: ms, inplace: ys, inputchips: Cs, inputgroup: Ss, inputnumber: Is, inputotp: Ts, inputtext: Ls, knob: Ms, listbox: Gs, megamenu: td, menu: dd, menubar: md, message: Od, metergroup: zd, multiselect: Wd, orderlist: Ud, organizationchart: Zd, overlaybadge: Jd, paginator: nc, panel: uc, panelmenu: bc, password: Cc, picklist: Oc, popover: Ic, progressbar: zc, progressspinner: Dc, radiobutton: Ec, rating: Vc, ripple: Wc, scrollpanel: Gc, select: tu, selectbutton: au, skeleton: du, slider: hu, speeddial: bu, splitbutton: yu, splitter: Cu, stepper: Tu, steps: Eu, tabmenu: Ku, tabs: Qu, tabview: af, tag: cf, terminal: gf, textarea: mf, tieredmenu: Cf, timeline: If, toast: Mf, togglebutton: Kf, toggleswitch: Yf, toolbar: Xf, tooltip: Jf, tree: ap, treeselect: gp, treetable: Tp, virtualscroller: Lp } })));
function Me(e) {
  "@babel/helpers - typeof";
  return Me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Me(e);
}
function Vp(e, o) {
  if (!(e instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function Fp(e, o) {
  for (var r = 0; r < o.length; r++) {
    var t = o[r];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, Kp(t.key), t);
  }
}
function Wp(e, o, r) {
  return o && Fp(e.prototype, o), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Kp(e) {
  var o = Hp(e, "string");
  return Me(o) == "symbol" ? o : o + "";
}
function Hp(e, o) {
  if (Me(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Me(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Up = /* @__PURE__ */ function() {
  function e(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    Vp(this, e), this.element = o, this.listener = r;
  }
  return Wp(e, [{
    key: "bindScrollListener",
    value: function() {
      this.scrollableParents = Lt(this.element);
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
}(), me = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(o) {
    return this._loadedStyleNames.has(o);
  },
  setLoadedStyleName: function(o) {
    this._loadedStyleNames.add(o);
  },
  deleteLoadedStyleName: function(o) {
    this._loadedStyleNames.delete(o);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
};
function Gp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", o = nt();
  return "".concat(e).concat(o.replace("v-", "").replaceAll("-", "_"));
}
var Ko = z.extend({
  name: "common"
});
function Ne(e) {
  "@babel/helpers - typeof";
  return Ne = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Ne(e);
}
function Yp(e) {
  return xr(e) || qp(e) || Cr(e) || wr();
}
function qp(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Pe(e, o) {
  return xr(e) || Xp(e, o) || Cr(e, o) || wr();
}
function wr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cr(e, o) {
  if (e) {
    if (typeof e == "string")
      return Ho(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ho(e, o) : void 0;
  }
}
function Ho(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, t = Array(o); r < o; r++)
    t[r] = e[r];
  return t;
}
function Xp(e, o) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var t, n, i, s, l = [], a = !0, d = !1;
    try {
      if (i = (r = r.call(e)).next, o === 0) {
        if (Object(r) !== r)
          return;
        a = !1;
      } else
        for (; !(a = (t = i.call(r)).done) && (l.push(t.value), l.length !== o); a = !0)
          ;
    } catch (c) {
      d = !0, n = c;
    } finally {
      try {
        if (!a && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (d)
          throw n;
      }
    }
    return l;
  }
}
function xr(e) {
  if (Array.isArray(e))
    return e;
}
function Uo(e, o) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function _(e) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Uo(Object(r), !0).forEach(function(t) {
      ze(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uo(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function ze(e, o, r) {
  return (o = Zp(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Zp(e) {
  var o = Qp(e, "string");
  return Ne(o) == "symbol" ? o : o + "";
}
function Qp(e, o) {
  if (Ne(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Ne(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var Ie = {
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
      handler: function(o) {
        N.off("theme:change", this._loadCoreStyles), o || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(o, r) {
        var t = this;
        N.off("theme:change", this._themeScopedListener), o ? (this._loadScopedThemeStyles(o), this._themeScopedListener = function() {
          return t._loadScopedThemeStyles(o);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var o, r, t, n, i, s, l, a, d, c, u, f = (o = this.pt) === null || o === void 0 ? void 0 : o._usept, g = f ? (r = this.pt) === null || r === void 0 || (r = r.originalValue) === null || r === void 0 ? void 0 : r[this.$.type.name] : void 0, h = f ? (t = this.pt) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t[this.$.type.name] : this.pt;
    (n = h || g) === null || n === void 0 || (n = n.hooks) === null || n === void 0 || (i = n.onBeforeCreate) === null || i === void 0 || i.call(n);
    var v = (s = this.$primevueConfig) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s._usept, b = v ? (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l.originalValue : void 0, $ = v ? (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a.value : (d = this.$primevue) === null || d === void 0 || (d = d.config) === null || d === void 0 ? void 0 : d.pt;
    (c = $ || b) === null || c === void 0 || (c = c[this.$.type.name]) === null || c === void 0 || (c = c.hooks) === null || c === void 0 || (u = c.onBeforeCreate) === null || u === void 0 || u.call(c), this.$attrSelector = Gp(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var o;
    this.rootEl = so(Xe(this.$el) ? this.$el : (o = this.$el) === null || o === void 0 ? void 0 : o.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = _({
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
    _hook: function(o) {
      if (!this.$options.hostName) {
        var r = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(o)), t = this._useDefaultPT(this._getOptionValue, "hooks.".concat(o));
        r == null || r(), t == null || t();
      }
    },
    _mergeProps: function(o) {
      for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
        t[n - 1] = arguments[n];
      return ao(o) ? o.apply(void 0, t) : w.apply(void 0, t);
    },
    _load: function() {
      me.isStyleNameLoaded("base") || (z.loadCSS(this.$styleOptions), this._loadGlobalStyles(), me.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var o, r;
      !me.isStyleNameLoaded((o = this.$style) === null || o === void 0 ? void 0 : o.name) && (r = this.$style) !== null && r !== void 0 && r.name && (Ko.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), me.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var o = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      R(o) && z.load(o, _({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var o, r;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!T.isStyleNameLoaded("common")) {
          var t, n, i = ((t = this.$style) === null || t === void 0 || (n = t.getCommonTheme) === null || n === void 0 ? void 0 : n.call(t)) || {}, s = i.primitive, l = i.semantic, a = i.global, d = i.style;
          z.load(s == null ? void 0 : s.css, _({
            name: "primitive-variables"
          }, this.$styleOptions)), z.load(l == null ? void 0 : l.css, _({
            name: "semantic-variables"
          }, this.$styleOptions)), z.load(a == null ? void 0 : a.css, _({
            name: "global-variables"
          }, this.$styleOptions)), z.loadStyle(_({
            name: "global-style"
          }, this.$styleOptions), d), T.setLoadedStyleName("common");
        }
        if (!T.isStyleNameLoaded((o = this.$style) === null || o === void 0 ? void 0 : o.name) && (r = this.$style) !== null && r !== void 0 && r.name) {
          var c, u, f, g, h = ((c = this.$style) === null || c === void 0 || (u = c.getComponentTheme) === null || u === void 0 ? void 0 : u.call(c)) || {}, v = h.css, b = h.style;
          (f = this.$style) === null || f === void 0 || f.load(v, _({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (g = this.$style) === null || g === void 0 || g.loadStyle(_({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), b), T.setLoadedStyleName(this.$style.name);
        }
        if (!T.isStyleNameLoaded("layer-order")) {
          var $, k, m = ($ = this.$style) === null || $ === void 0 || (k = $.getLayerOrderThemeCSS) === null || k === void 0 ? void 0 : k.call($);
          z.load(m, _({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), T.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(o) {
      var r, t, n, i = ((r = this.$style) === null || r === void 0 || (t = r.getPresetTheme) === null || t === void 0 ? void 0 : t.call(r, o, "[".concat(this.$attrSelector, "]"))) || {}, s = i.css, l = (n = this.$style) === null || n === void 0 ? void 0 : n.load(s, _({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = l.el;
    },
    _unloadScopedThemeStyles: function() {
      var o;
      (o = this.scopedStyleEl) === null || o === void 0 || (o = o.value) === null || o === void 0 || o.remove();
    },
    _themeChangeListener: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      me.clearLoadedStyleNames(), N.on("theme:change", o);
    },
    _removeThemeListeners: function() {
      N.off("theme:change", this._loadCoreStyles), N.off("theme:change", this._load), N.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(o) {
      return o ? this.$options.hostName ? o.$.type.name === this.$options.hostName ? o : this._getHostInstance(o.$parentInstance) : o.$parentInstance : void 0;
    },
    _getPropValue: function(o) {
      var r;
      return this[o] || ((r = this._getHostInstance(this)) === null || r === void 0 ? void 0 : r[o]);
    },
    _getOptionValue: function(o) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return wo(o, r, t);
    },
    _getPTValue: function() {
      var o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, s = /./g.test(t) && !!n[t.split(".")[0]], l = this._getPropValue("ptOptions") || ((o = this.$primevueConfig) === null || o === void 0 ? void 0 : o.ptOptions) || {}, a = l.mergeSections, d = a === void 0 ? !0 : a, c = l.mergeProps, u = c === void 0 ? !1 : c, f = i ? s ? this._useGlobalPT(this._getPTClassValue, t, n) : this._useDefaultPT(this._getPTClassValue, t, n) : void 0, g = s ? void 0 : this._getPTSelf(r, this._getPTClassValue, t, _(_({}, n), {}, {
        global: f || {}
      })), h = this._getPTDatasets(t);
      return d || !d && g ? u ? this._mergeProps(u, f, g, h) : _(_(_({}, f), g), h) : _(_({}, g), h);
    },
    _getPTSelf: function() {
      for (var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
        t[n - 1] = arguments[n];
      return w(
        this._usePT.apply(this, [this._getPT(o, this.$name)].concat(t)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(t))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var o, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = "data-pc-", i = t === "root" && R((o = this.pt) === null || o === void 0 ? void 0 : o["data-pc-section"]);
      return t !== "transition" && _(_({}, t === "root" && _(_(ze({}, "".concat(n, "name"), le(i ? (r = this.pt) === null || r === void 0 ? void 0 : r["data-pc-section"] : this.$.type.name)), i && ze({}, "".concat(n, "extend"), le(this.$.type.name))), {}, ze({}, "".concat(this.$attrSelector), ""))), {}, ze({}, "".concat(n, "section"), le(t)));
    },
    _getPTClassValue: function() {
      var o = this._getOptionValue.apply(this, arguments);
      return U(o) || lo(o) ? {
        class: o
      } : o;
    },
    _getPT: function(o) {
      var r = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 ? arguments[2] : void 0, i = function(l) {
        var a, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = n ? n(l) : l, u = le(t), f = le(r.$name);
        return (a = d ? u !== f ? c == null ? void 0 : c[u] : void 0 : c == null ? void 0 : c[u]) !== null && a !== void 0 ? a : c;
      };
      return o != null && o.hasOwnProperty("_usept") ? {
        _usept: o._usept,
        originalValue: i(o.originalValue),
        value: i(o.value)
      } : i(o, !0);
    },
    _usePT: function(o, r, t, n) {
      var i = function(v) {
        return r(v, t, n);
      };
      if (o != null && o.hasOwnProperty("_usept")) {
        var s, l = o._usept || ((s = this.$primevueConfig) === null || s === void 0 ? void 0 : s.ptOptions) || {}, a = l.mergeSections, d = a === void 0 ? !0 : a, c = l.mergeProps, u = c === void 0 ? !1 : c, f = i(o.originalValue), g = i(o.value);
        return f === void 0 && g === void 0 ? void 0 : U(g) ? g : U(f) ? f : d || !d && g ? u ? this._mergeProps(u, f, g) : _(_({}, f), g) : g;
      }
      return i(o);
    },
    _useGlobalPT: function(o, r, t) {
      return this._usePT(this.globalPT, o, r, t);
    },
    _useDefaultPT: function(o, r, t) {
      return this._usePT(this.defaultPT, o, r, t);
    },
    ptm: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, o, _(_({}, this.$params), r));
    },
    ptmi: function() {
      var o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = w(this.$_attrsWithoutPT, this.ptm(r, t));
      return n != null && n.hasOwnProperty("id") && ((o = n.id) !== null && o !== void 0 || (n.id = this.$id)), n;
    },
    ptmo: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(o, r, _({
        instance: this
      }, t), !1);
    },
    cx: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, o, _(_({}, this.$params), r));
    },
    sx: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (r) {
        var n = this._getOptionValue(this.$style.inlineStyles, o, _(_({}, this.$params), t)), i = this._getOptionValue(Ko.inlineStyles, o, _(_({}, this.$params), t));
        return [i, n];
      }
    }
  },
  computed: {
    globalPT: function() {
      var o, r = this;
      return this._getPT((o = this.$primevueConfig) === null || o === void 0 ? void 0 : o.pt, void 0, function(t) {
        return J(t, {
          instance: r
        });
      });
    },
    defaultPT: function() {
      var o, r = this;
      return this._getPT((o = this.$primevueConfig) === null || o === void 0 ? void 0 : o.pt, void 0, function(t) {
        return r._getOptionValue(t, r.$name, _({}, r.$params)) || J(t, _({}, r.$params));
      });
    },
    isUnstyled: function() {
      var o;
      return this.unstyled !== void 0 ? this.unstyled : (o = this.$primevueConfig) === null || o === void 0 ? void 0 : o.unstyled;
    },
    $id: function() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function() {
      var o, r = Object.keys(((o = this.$.vnode) === null || o === void 0 ? void 0 : o.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(t) {
        var n = Pe(t, 1), i = n[0];
        return r == null ? void 0 : r.includes(i);
      }));
    },
    $theme: function() {
      var o;
      return (o = this.$primevueConfig) === null || o === void 0 ? void 0 : o.theme;
    },
    $style: function() {
      return _(_({
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
      var o;
      return {
        nonce: (o = this.$primevueConfig) === null || o === void 0 || (o = o.csp) === null || o === void 0 ? void 0 : o.nonce
      };
    },
    $primevueConfig: function() {
      var o;
      return (o = this.$primevue) === null || o === void 0 ? void 0 : o.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var o = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: o,
          props: o == null ? void 0 : o.$props,
          state: o == null ? void 0 : o.$data,
          attrs: o == null ? void 0 : o.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(o) {
        var r = Pe(o, 1), t = r[0];
        return t == null ? void 0 : t.startsWith("pt:");
      }).reduce(function(o, r) {
        var t = Pe(r, 2), n = t[0], i = t[1], s = n.split(":"), l = Yp(s), a = l.slice(1);
        return a == null || a.reduce(function(d, c, u, f) {
          return !d[c] && (d[c] = u === f.length - 1 ? i : {}), d[c];
        }, o), o;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(o) {
        var r = Pe(o, 1), t = r[0];
        return !(t != null && t.startsWith("pt:"));
      }).reduce(function(o, r) {
        var t = Pe(r, 2), n = t[0], i = t[1];
        return o[n] = i, o;
      }, {});
    }
  }
}, Jp = `
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
`, eg = z.extend({
  name: "baseicon",
  css: Jp
});
function Ve(e) {
  "@babel/helpers - typeof";
  return Ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Ve(e);
}
function Go(e, o) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Yo(e) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Go(Object(r), !0).forEach(function(t) {
      og(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Go(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function og(e, o, r) {
  return (o = rg(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function rg(e) {
  var o = tg(e, "string");
  return Ve(o) == "symbol" ? o : o + "";
}
function tg(e, o) {
  if (Ve(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Ve(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var xo = {
  name: "BaseIcon",
  extends: Ie,
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
  style: eg,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var o = ve(this.label);
      return Yo(Yo({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: o ? void 0 : "img",
        "aria-label": o ? void 0 : this.label,
        "aria-hidden": o
      });
    }
  }
}, Sr = {
  name: "ChevronDownIcon",
  extends: xo
};
function ng(e, o, r, t, n, i) {
  return C(), I("svg", w({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), o[0] || (o[0] = [j("path", {
    d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Sr.render = ng;
var co = {
  name: "SpinnerIcon",
  extends: xo
};
function ig(e, o, r, t, n, i) {
  return C(), I("svg", w({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), o[0] || (o[0] = [j("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
co.render = ig;
var Or = {
  name: "TimesCircleIcon",
  extends: xo
};
function ag(e, o, r, t, n, i) {
  return C(), I("svg", w({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), o[0] || (o[0] = [j("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Or.render = ag;
var lg = ({ dt: e }) => `
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${e("chip.background")};
    color: ${e("chip.color")};
    border-radius: ${e("chip.border.radius")};
    padding-block: ${e("chip.padding.y")};
    padding-inline: ${e("chip.padding.x")};
    gap: ${e("chip.gap")};
}

.p-chip-icon {
    color: ${e("chip.icon.color")};
    font-size: ${e("chip.icon.font.size")};
    width: ${e("chip.icon.size")};
    height: ${e("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${e("chip.image.width")};
    height: ${e("chip.image.height")};
    margin-inline-start: calc(-1 * ${e("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${e("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-block-start: calc(${e("chip.padding.y")} / 2);
    padding-block-end: calc(${e("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${e("chip.remove.icon.size")};
    width: ${e("chip.remove.icon.size")};
    height: ${e("chip.remove.icon.size")};
    color: ${e("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${e("chip.transition.duration")}, box-shadow ${e("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${e("chip.remove.icon.focus.ring.shadow")};
    outline: ${e("chip.remove.icon.focus.ring.width")} ${e("chip.remove.icon.focus.ring.style")} ${e("chip.remove.icon.focus.ring.color")};
    outline-offset: ${e("chip.remove.icon.focus.ring.offset")};
}
`, sg = {
  root: "p-chip p-component",
  image: "p-chip-image",
  icon: "p-chip-icon",
  label: "p-chip-label",
  removeIcon: "p-chip-remove-icon"
}, dg = z.extend({
  name: "chip",
  style: lg,
  classes: sg
}), cg = {
  name: "BaseChip",
  extends: Ie,
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
  style: dg,
  provide: function() {
    return {
      $pcChip: this,
      $parentInstance: this
    };
  }
}, Br = {
  name: "Chip",
  extends: cg,
  inheritAttrs: !1,
  emits: ["remove"],
  data: function() {
    return {
      visible: !0
    };
  },
  methods: {
    onKeydown: function(o) {
      (o.key === "Enter" || o.key === "Backspace") && this.close(o);
    },
    close: function(o) {
      this.visible = !1, this.$emit("remove", o);
    }
  },
  computed: {
    dataP: function() {
      return se({
        removable: this.removable
      });
    }
  },
  components: {
    TimesCircleIcon: Or
  }
}, ug = ["aria-label", "data-p"], fg = ["src"];
function pg(e, o, r, t, n, i) {
  return n.visible ? (C(), I("div", w({
    key: 0,
    class: e.cx("root"),
    "aria-label": e.label
  }, e.ptmi("root"), {
    "data-p": i.dataP
  }), [L(e.$slots, "default", {}, function() {
    return [e.image ? (C(), I("img", w({
      key: 0,
      src: e.image
    }, e.ptm("image"), {
      class: e.cx("image")
    }), null, 16, fg)) : e.$slots.icon ? (C(), re(oo(e.$slots.icon), w({
      key: 1,
      class: e.cx("icon")
    }, e.ptm("icon")), null, 16, ["class"])) : e.icon ? (C(), I("span", w({
      key: 2,
      class: [e.cx("icon"), e.icon]
    }, e.ptm("icon")), null, 16)) : A("", !0), e.label ? (C(), I("div", w({
      key: 3,
      class: e.cx("label")
    }, e.ptm("label")), q(e.label), 17)) : A("", !0)];
  }), e.removable ? L(e.$slots, "removeicon", {
    key: 0,
    removeCallback: i.close,
    keydownCallback: i.onKeydown
  }, function() {
    return [(C(), re(oo(e.removeIcon ? "span" : "TimesCircleIcon"), w({
      class: [e.cx("removeIcon"), e.removeIcon],
      onClick: i.close,
      onKeydown: i.onKeydown
    }, e.ptm("removeIcon")), null, 16, ["class", "onClick", "onKeydown"]))];
  }) : A("", !0)], 16, ug)) : A("", !0);
}
Br.render = pg;
var gg = {
  name: "BaseEditableHolder",
  extends: Ie,
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
    modelValue: function(o) {
      this.d_value = o;
    },
    defaultValue: function(o) {
      this.d_value = o;
    },
    $formName: {
      immediate: !0,
      handler: function(o) {
        var r, t;
        this.formField = ((r = this.$pcForm) === null || r === void 0 || (t = r.register) === null || t === void 0 ? void 0 : t.call(r, o, this.$formControl)) || {};
      }
    },
    $formControl: {
      immediate: !0,
      handler: function(o) {
        var r, t;
        this.formField = ((r = this.$pcForm) === null || r === void 0 || (t = r.register) === null || t === void 0 ? void 0 : t.call(r, this.$formName, o)) || {};
      }
    },
    $formDefaultValue: {
      immediate: !0,
      handler: function(o) {
        this.d_value !== o && (this.d_value = o);
      }
    },
    $formValue: {
      immediate: !1,
      handler: function(o) {
        var r;
        (r = this.$pcForm) !== null && r !== void 0 && r.getFieldState(this.$formName) && o !== this.d_value && (this.d_value = o);
      }
    }
  },
  formField: {},
  methods: {
    writeValue: function(o, r) {
      var t, n;
      this.controlled && (this.d_value = o, this.$emit("update:modelValue", o)), this.$emit("value-change", o), (t = (n = this.formField).onChange) === null || t === void 0 || t.call(n, {
        originalEvent: r,
        value: o
      });
    },
    // @todo move to @primeuix/utils
    findNonEmpty: function() {
      for (var o = arguments.length, r = new Array(o), t = 0; t < o; t++)
        r[t] = arguments[t];
      return r.find(R);
    }
  },
  computed: {
    $filled: function() {
      return R(this.d_value);
    },
    $invalid: function() {
      var o, r;
      return !this.$formNovalidate && this.findNonEmpty(this.invalid, (o = this.$pcFormField) === null || o === void 0 || (o = o.$field) === null || o === void 0 ? void 0 : o.invalid, (r = this.$pcForm) === null || r === void 0 || (r = r.getFieldState(this.$formName)) === null || r === void 0 ? void 0 : r.invalid);
    },
    $formName: function() {
      var o;
      return this.$formNovalidate ? void 0 : this.name || ((o = this.$formControl) === null || o === void 0 ? void 0 : o.name);
    },
    $formControl: function() {
      var o;
      return this.formControl || ((o = this.$pcFormField) === null || o === void 0 ? void 0 : o.formControl);
    },
    $formNovalidate: function() {
      var o;
      return (o = this.$formControl) === null || o === void 0 ? void 0 : o.novalidate;
    },
    $formDefaultValue: function() {
      var o, r;
      return this.findNonEmpty(this.d_value, (o = this.$pcFormField) === null || o === void 0 ? void 0 : o.initialValue, (r = this.$pcForm) === null || r === void 0 || (r = r.initialValues) === null || r === void 0 ? void 0 : r[this.$formName]);
    },
    $formValue: function() {
      var o, r;
      return this.findNonEmpty((o = this.$pcFormField) === null || o === void 0 || (o = o.$field) === null || o === void 0 ? void 0 : o.value, (r = this.$pcForm) === null || r === void 0 || (r = r.getFieldState(this.$formName)) === null || r === void 0 ? void 0 : r.value);
    },
    controlled: function() {
      return this.$inProps.hasOwnProperty("modelValue") || !this.$inProps.hasOwnProperty("modelValue") && !this.$inProps.hasOwnProperty("defaultValue");
    },
    // @deprecated use $filled instead
    filled: function() {
      return this.$filled;
    }
  }
}, _r = {
  name: "BaseInput",
  extends: gg,
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
      var o;
      return (o = this.variant) !== null && o !== void 0 ? o : this.$primevue.config.inputStyle || this.$primevue.config.inputVariant;
    },
    $fluid: function() {
      var o;
      return (o = this.fluid) !== null && o !== void 0 ? o : !!this.$pcFluid;
    },
    // @deprecated use $fluid instead
    hasFluid: function() {
      return this.$fluid;
    }
  }
}, hg = ({ dt: e }) => `
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.p-invalid::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`, mg = {
  root: function(o) {
    var r = o.instance, t = o.props;
    return ["p-inputtext p-component", {
      "p-filled": r.$filled,
      "p-inputtext-sm p-inputfield-sm": t.size === "small",
      "p-inputtext-lg p-inputfield-lg": t.size === "large",
      "p-invalid": r.$invalid,
      "p-variant-filled": r.$variant === "filled",
      "p-inputtext-fluid": r.$fluid
    }];
  }
}, bg = z.extend({
  name: "inputtext",
  style: hg,
  classes: mg
}), vg = {
  name: "BaseInputText",
  extends: _r,
  style: bg,
  provide: function() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
function Fe(e) {
  "@babel/helpers - typeof";
  return Fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Fe(e);
}
function yg(e, o, r) {
  return (o = $g(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function $g(e) {
  var o = kg(e, "string");
  return Fe(o) == "symbol" ? o : o + "";
}
function kg(e, o) {
  if (Fe(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Fe(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var Ir = {
  name: "InputText",
  extends: vg,
  inheritAttrs: !1,
  methods: {
    onInput: function(o) {
      this.writeValue(o.target.value, o);
    }
  },
  computed: {
    attrs: function() {
      return w(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function() {
      return se(yg({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
}, wg = ["value", "name", "disabled", "aria-invalid", "data-p"];
function Cg(e, o, r, t, n, i) {
  return C(), I("input", w({
    type: "text",
    class: e.cx("root"),
    value: e.d_value,
    name: e.name,
    disabled: e.disabled,
    "aria-invalid": e.$invalid || void 0,
    "data-p": i.dataP,
    onInput: o[0] || (o[0] = function() {
      return i.onInput && i.onInput.apply(i, arguments);
    })
  }, i.attrs), null, 16, wg);
}
Ir.render = Cg;
var xg = Co(), Pr = {
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
    this.mounted = br();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function Sg(e, o, r, t, n, i) {
  return i.inline ? L(e.$slots, "default", {
    key: 0
  }) : n.mounted ? (C(), re(it, {
    key: 1,
    to: r.appendTo
  }, [L(e.$slots, "default")], 8, ["to"])) : A("", !0);
}
Pr.render = Sg;
function We(e) {
  "@babel/helpers - typeof";
  return We = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, We(e);
}
function qo(e, o) {
  return Ig(e) || _g(e, o) || Bg(e, o) || Og();
}
function Og() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bg(e, o) {
  if (e) {
    if (typeof e == "string")
      return Xo(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Xo(e, o) : void 0;
  }
}
function Xo(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, t = Array(o); r < o; r++)
    t[r] = e[r];
  return t;
}
function _g(e, o) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var t, n, i, s, l = [], a = !0, d = !1;
    try {
      if (i = (r = r.call(e)).next, o !== 0)
        for (; !(a = (t = i.call(r)).done) && (l.push(t.value), l.length !== o); a = !0)
          ;
    } catch (c) {
      d = !0, n = c;
    } finally {
      try {
        if (!a && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (d)
          throw n;
      }
    }
    return l;
  }
}
function Ig(e) {
  if (Array.isArray(e))
    return e;
}
function Zo(e, o) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function P(e) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Zo(Object(r), !0).forEach(function(t) {
      yo(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zo(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function yo(e, o, r) {
  return (o = Pg(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Pg(e) {
  var o = Rg(e, "string");
  return We(o) == "symbol" ? o : o + "";
}
function Rg(e, o) {
  if (We(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (We(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var S = {
  _getMeta: function() {
    return [de(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], J(de(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(o, r) {
    var t, n, i;
    return (t = (o == null || (n = o.instance) === null || n === void 0 ? void 0 : n.$primevue) || (r == null || (i = r.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || t === void 0 ? void 0 : t.config;
  },
  _getOptionValue: wo,
  _getPTValue: function() {
    var o, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = function() {
      var k = S._getOptionValue.apply(S, arguments);
      return U(k) || lo(k) ? {
        class: k
      } : k;
    }, d = ((o = t.binding) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o.ptOptions) || ((r = t.$primevueConfig) === null || r === void 0 ? void 0 : r.ptOptions) || {}, c = d.mergeSections, u = c === void 0 ? !0 : c, f = d.mergeProps, g = f === void 0 ? !1 : f, h = l ? S._useDefaultPT(t, t.defaultPT(), a, i, s) : void 0, v = S._usePT(t, S._getPT(n, t.$name), a, i, P(P({}, s), {}, {
      global: h || {}
    })), b = S._getPTDatasets(t, i);
    return u || !u && v ? g ? S._mergeProps(t, g, h, v, b) : P(P(P({}, h), v), b) : P(P({}, v), b);
  },
  _getPTDatasets: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = "data-pc-";
    return P(P({}, r === "root" && yo({}, "".concat(t, "name"), le(o.$name))), {}, yo({}, "".concat(t, "section"), le(r)));
  },
  _getPT: function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 ? arguments[2] : void 0, n = function(s) {
      var l, a = t ? t(s) : s, d = le(r);
      return (l = a == null ? void 0 : a[d]) !== null && l !== void 0 ? l : a;
    };
    return o && Object.hasOwn(o, "_usept") ? {
      _usept: o._usept,
      originalValue: n(o.originalValue),
      value: n(o.value)
    } : n(o);
  },
  _usePT: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, s = function(b) {
      return t(b, n, i);
    };
    if (r && Object.hasOwn(r, "_usept")) {
      var l, a = r._usept || ((l = o.$primevueConfig) === null || l === void 0 ? void 0 : l.ptOptions) || {}, d = a.mergeSections, c = d === void 0 ? !0 : d, u = a.mergeProps, f = u === void 0 ? !1 : u, g = s(r.originalValue), h = s(r.value);
      return g === void 0 && h === void 0 ? void 0 : U(h) ? h : U(g) ? g : c || !c && h ? f ? S._mergeProps(o, f, g, h) : P(P({}, g), h) : h;
    }
    return s(r);
  },
  _useDefaultPT: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
    return S._usePT(o, r, t, n, i);
  },
  _loadStyles: function() {
    var o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0, i = S._getConfig(t, n), s = {
      nonce: i == null || (o = i.csp) === null || o === void 0 ? void 0 : o.nonce
    };
    S._loadCoreStyles(r, s), S._loadThemeStyles(r, s), S._loadScopedThemeStyles(r, s), S._removeThemeListeners(r), r.$loadStyles = function() {
      return S._loadThemeStyles(r, s);
    }, S._themeChangeListener(r.$loadStyles);
  },
  _loadCoreStyles: function() {
    var o, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (!me.isStyleNameLoaded((o = t.$style) === null || o === void 0 ? void 0 : o.name) && (r = t.$style) !== null && r !== void 0 && r.name) {
      var i;
      z.loadCSS(n), (i = t.$style) === null || i === void 0 || i.loadCSS(n), me.setLoadedStyleName(t.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var o, r, t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (!(n != null && n.isUnstyled() || (n == null || (o = n.theme) === null || o === void 0 ? void 0 : o.call(n)) === "none")) {
      if (!T.isStyleNameLoaded("common")) {
        var s, l, a = ((s = n.$style) === null || s === void 0 || (l = s.getCommonTheme) === null || l === void 0 ? void 0 : l.call(s)) || {}, d = a.primitive, c = a.semantic, u = a.global, f = a.style;
        z.load(d == null ? void 0 : d.css, P({
          name: "primitive-variables"
        }, i)), z.load(c == null ? void 0 : c.css, P({
          name: "semantic-variables"
        }, i)), z.load(u == null ? void 0 : u.css, P({
          name: "global-variables"
        }, i)), z.loadStyle(P({
          name: "global-style"
        }, i), f), T.setLoadedStyleName("common");
      }
      if (!T.isStyleNameLoaded((r = n.$style) === null || r === void 0 ? void 0 : r.name) && (t = n.$style) !== null && t !== void 0 && t.name) {
        var g, h, v, b, $ = ((g = n.$style) === null || g === void 0 || (h = g.getDirectiveTheme) === null || h === void 0 ? void 0 : h.call(g)) || {}, k = $.css, m = $.style;
        (v = n.$style) === null || v === void 0 || v.load(k, P({
          name: "".concat(n.$style.name, "-variables")
        }, i)), (b = n.$style) === null || b === void 0 || b.loadStyle(P({
          name: "".concat(n.$style.name, "-style")
        }, i), m), T.setLoadedStyleName(n.$style.name);
      }
      if (!T.isStyleNameLoaded("layer-order")) {
        var p, y, B = (p = n.$style) === null || p === void 0 || (y = p.getLayerOrderThemeCSS) === null || y === void 0 ? void 0 : y.call(p);
        z.load(B, P({
          name: "layer-order",
          first: !0
        }, i)), T.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, t = o.preset();
    if (t && o.$attrSelector) {
      var n, i, s, l = ((n = o.$style) === null || n === void 0 || (i = n.getPresetTheme) === null || i === void 0 ? void 0 : i.call(n, t, "[".concat(o.$attrSelector, "]"))) || {}, a = l.css, d = (s = o.$style) === null || s === void 0 ? void 0 : s.load(a, P({
        name: "".concat(o.$attrSelector, "-").concat(o.$style.name)
      }, r));
      o.scopedStyleEl = d.el;
    }
  },
  _themeChangeListener: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    me.clearLoadedStyleNames(), N.on("theme:change", o);
  },
  _removeThemeListeners: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    N.off("theme:change", o.$loadStyles), o.$loadStyles = void 0;
  },
  _hook: function(o, r, t, n, i, s) {
    var l, a, d = "on".concat($t(r)), c = S._getConfig(n, i), u = t == null ? void 0 : t.$instance, f = S._usePT(u, S._getPT(n == null || (l = n.value) === null || l === void 0 ? void 0 : l.pt, o), S._getOptionValue, "hooks.".concat(d)), g = S._useDefaultPT(u, c == null || (a = c.pt) === null || a === void 0 || (a = a.directives) === null || a === void 0 ? void 0 : a[o], S._getOptionValue, "hooks.".concat(d)), h = {
      el: t,
      binding: n,
      vnode: i,
      prevVnode: s
    };
    f == null || f(u, h), g == null || g(u, h);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var o = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length, t = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
      t[n - 2] = arguments[n];
    return ao(o) ? o.apply(void 0, t) : w.apply(void 0, t);
  },
  _extend: function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = function(l, a, d, c, u) {
      var f, g, h, v;
      a._$instances = a._$instances || {};
      var b = S._getConfig(d, c), $ = a._$instances[o] || {}, k = ve($) ? P(P({}, r), r == null ? void 0 : r.methods) : {};
      a._$instances[o] = P(P({}, $), {}, {
        /* new instance variables to pass in directive methods */
        $name: o,
        $host: a,
        $binding: d,
        $modifiers: d == null ? void 0 : d.modifiers,
        $value: d == null ? void 0 : d.value,
        $el: $.$el || a || void 0,
        $style: P({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, r == null ? void 0 : r.style),
        $primevueConfig: b,
        $attrSelector: (f = a.$pd) === null || f === void 0 || (f = f[o]) === null || f === void 0 ? void 0 : f.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return S._getPT(b == null ? void 0 : b.pt, void 0, function(p) {
            var y;
            return p == null || (y = p.directives) === null || y === void 0 ? void 0 : y[o];
          });
        },
        isUnstyled: function() {
          var p, y;
          return ((p = a._$instances[o]) === null || p === void 0 || (p = p.$binding) === null || p === void 0 || (p = p.value) === null || p === void 0 ? void 0 : p.unstyled) !== void 0 ? (y = a._$instances[o]) === null || y === void 0 || (y = y.$binding) === null || y === void 0 || (y = y.value) === null || y === void 0 ? void 0 : y.unstyled : b == null ? void 0 : b.unstyled;
        },
        theme: function() {
          var p;
          return (p = a._$instances[o]) === null || p === void 0 || (p = p.$primevueConfig) === null || p === void 0 ? void 0 : p.theme;
        },
        preset: function() {
          var p;
          return (p = a._$instances[o]) === null || p === void 0 || (p = p.$binding) === null || p === void 0 || (p = p.value) === null || p === void 0 ? void 0 : p.dt;
        },
        /* instance's methods */
        ptm: function() {
          var p, y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return S._getPTValue(a._$instances[o], (p = a._$instances[o]) === null || p === void 0 || (p = p.$binding) === null || p === void 0 || (p = p.value) === null || p === void 0 ? void 0 : p.pt, y, P({}, B));
        },
        ptmo: function() {
          var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return S._getPTValue(a._$instances[o], p, y, B, !1);
        },
        cx: function() {
          var p, y, B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (p = a._$instances[o]) !== null && p !== void 0 && p.isUnstyled() ? void 0 : S._getOptionValue((y = a._$instances[o]) === null || y === void 0 || (y = y.$style) === null || y === void 0 ? void 0 : y.classes, B, P({}, O));
        },
        sx: function() {
          var p, y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return B ? S._getOptionValue((p = a._$instances[o]) === null || p === void 0 || (p = p.$style) === null || p === void 0 ? void 0 : p.inlineStyles, y, P({}, O)) : void 0;
        }
      }, k), a.$instance = a._$instances[o], (g = (h = a.$instance)[l]) === null || g === void 0 || g.call(h, a, d, c, u), a["$".concat(o)] = a.$instance, S._hook(o, l, a, d, c, u), a.$pd || (a.$pd = {}), a.$pd[o] = P(P({}, (v = a.$pd) === null || v === void 0 ? void 0 : v[o]), {}, {
        name: o,
        instance: a._$instances[o]
      });
    }, n = function(l) {
      var a, d, c, u = l._$instances[o], f = u == null ? void 0 : u.watch, g = function(b) {
        var $, k = b.newValue, m = b.oldValue;
        return f == null || ($ = f.config) === null || $ === void 0 ? void 0 : $.call(u, k, m);
      }, h = function(b) {
        var $, k = b.newValue, m = b.oldValue;
        return f == null || ($ = f["config.ripple"]) === null || $ === void 0 ? void 0 : $.call(u, k, m);
      };
      u.$watchersCallback = {
        config: g,
        "config.ripple": h
      }, f == null || (a = f.config) === null || a === void 0 || a.call(u, u == null ? void 0 : u.$primevueConfig), be.on("config:change", g), f == null || (d = f["config.ripple"]) === null || d === void 0 || d.call(u, u == null || (c = u.$primevueConfig) === null || c === void 0 ? void 0 : c.ripple), be.on("config:ripple:change", h);
    }, i = function(l) {
      var a = l._$instances[o].$watchersCallback;
      a && (be.off("config:change", a.config), be.off("config:ripple:change", a["config.ripple"]), l._$instances[o].$watchersCallback = void 0);
    };
    return {
      created: function(l, a, d, c) {
        l.$pd || (l.$pd = {}), l.$pd[o] = {
          name: o,
          attrSelector: jt("pd")
        }, t("created", l, a, d, c);
      },
      beforeMount: function(l, a, d, c) {
        var u;
        S._loadStyles((u = l.$pd[o]) === null || u === void 0 ? void 0 : u.instance, a, d), t("beforeMount", l, a, d, c), n(l);
      },
      mounted: function(l, a, d, c) {
        var u;
        S._loadStyles((u = l.$pd[o]) === null || u === void 0 ? void 0 : u.instance, a, d), t("mounted", l, a, d, c);
      },
      beforeUpdate: function(l, a, d, c) {
        t("beforeUpdate", l, a, d, c);
      },
      updated: function(l, a, d, c) {
        var u;
        S._loadStyles((u = l.$pd[o]) === null || u === void 0 ? void 0 : u.instance, a, d), t("updated", l, a, d, c);
      },
      beforeUnmount: function(l, a, d, c) {
        var u;
        i(l), S._removeThemeListeners((u = l.$pd[o]) === null || u === void 0 ? void 0 : u.instance), t("beforeUnmount", l, a, d, c);
      },
      unmounted: function(l, a, d, c) {
        var u;
        (u = l.$pd[o]) === null || u === void 0 || (u = u.instance) === null || u === void 0 || (u = u.scopedStyleEl) === null || u === void 0 || (u = u.value) === null || u === void 0 || u.remove(), t("unmounted", l, a, d, c);
      }
    };
  },
  extend: function() {
    var o = S._getMeta.apply(S, arguments), r = qo(o, 2), t = r[0], n = r[1];
    return P({
      extend: function() {
        var s = S._getMeta.apply(S, arguments), l = qo(s, 2), a = l[0], d = l[1];
        return S.extend(a, P(P(P({}, n), n == null ? void 0 : n.methods), d));
      }
    }, S._extend(t, n));
  }
}, Tg = ({ dt: e }) => `
.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
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
`, zg = {
  root: "p-ink"
}, Lg = z.extend({
  name: "ripple-directive",
  style: Tg,
  classes: zg
}), Dg = S.extend({
  style: Lg
});
function Ke(e) {
  "@babel/helpers - typeof";
  return Ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Ke(e);
}
function Ag(e) {
  return Ng(e) || Mg(e) || Eg(e) || jg();
}
function jg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Eg(e, o) {
  if (e) {
    if (typeof e == "string")
      return $o(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? $o(e, o) : void 0;
  }
}
function Mg(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ng(e) {
  if (Array.isArray(e))
    return $o(e);
}
function $o(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, t = Array(o); r < o; r++)
    t[r] = e[r];
  return t;
}
function Qo(e, o, r) {
  return (o = Vg(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Vg(e) {
  var o = Fg(e, "string");
  return Ke(o) == "symbol" ? o : o + "";
}
function Fg(e, o) {
  if (Ke(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Ke(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var Rr = Dg.extend("ripple", {
  watch: {
    "config.ripple": function(o) {
      o ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(o) {
    this.remove(o);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(o) {
      o.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(o) {
      o.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(o) {
      var r = this.getInk(o);
      r || (r = Pt("span", Qo(Qo({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), o.appendChild(r), this.$el = r);
    },
    remove: function(o) {
      var r = this.getInk(o);
      r && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(o), r.removeEventListener("animationend", this.onAnimationEnd), r.remove());
    },
    onMouseDown: function(o) {
      var r = this, t = o.currentTarget, n = this.getInk(t);
      if (!(!n || getComputedStyle(n, null).display === "none")) {
        if (!this.isUnstyled() && fo(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"), !we(n) && !Ce(n)) {
          var i = Math.max(gr(t), zt(t));
          n.style.height = i + "px", n.style.width = i + "px";
        }
        var s = Tt(t), l = o.pageX - s.left + document.body.scrollTop - Ce(n) / 2, a = o.pageY - s.top + document.body.scrollLeft - we(n) / 2;
        n.style.top = a + "px", n.style.left = l + "px", !this.isUnstyled() && wt(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          n && (!r.isUnstyled() && fo(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(o) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && fo(o.currentTarget, "p-ink-active"), o.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(o) {
      return o && o.children ? Ag(o.children).find(function(r) {
        return Rt(r, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Wg = ({ dt: e }) => `
.p-virtualscroller-loader {
    background: ${e("virtualscroller.loader.mask.background")};
    color: ${e("virtualscroller.loader.mask.color")};
}

.p-virtualscroller-loading-icon {
    font-size: ${e("virtualscroller.loader.icon.size")};
    width: ${e("virtualscroller.loader.icon.size")};
    height: ${e("virtualscroller.loader.icon.size")};
}
`, Kg = `
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
`, Jo = z.extend({
  name: "virtualscroller",
  css: Kg,
  style: Wg
}), Hg = {
  name: "BaseVirtualScroller",
  extends: Ie,
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
  style: Jo,
  provide: function() {
    return {
      $pcVirtualScroller: this,
      $parentInstance: this
    };
  },
  beforeMount: function() {
    var o;
    Jo.loadCSS({
      nonce: (o = this.$primevueConfig) === null || o === void 0 || (o = o.csp) === null || o === void 0 ? void 0 : o.nonce
    });
  }
};
function He(e) {
  "@babel/helpers - typeof";
  return He = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, He(e);
}
function er(e, o) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Re(e) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? er(Object(r), !0).forEach(function(t) {
      Tr(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : er(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Tr(e, o, r) {
  return (o = Ug(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Ug(e) {
  var o = Gg(e, "string");
  return He(o) == "symbol" ? o : o + "";
}
function Gg(e, o) {
  if (He(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (He(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var zr = {
  name: "VirtualScroller",
  extends: Hg,
  inheritAttrs: !1,
  emits: ["update:numToleratedItems", "scroll", "scroll-index-change", "lazy-load"],
  data: function() {
    var o = this.isBoth();
    return {
      first: o ? {
        rows: 0,
        cols: 0
      } : 0,
      last: o ? {
        rows: 0,
        cols: 0
      } : 0,
      page: o ? {
        rows: 0,
        cols: 0
      } : 0,
      numItemsInViewport: o ? {
        rows: 0,
        cols: 0
      } : 0,
      lastScrollPos: o ? {
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
    numToleratedItems: function(o) {
      this.d_numToleratedItems = o;
    },
    loading: function(o, r) {
      this.lazy && o !== r && o !== this.d_loading && (this.d_loading = o);
    },
    items: {
      handler: function(o, r) {
        (!r || r.length !== (o || []).length) && (this.init(), this.calculateAutoSize());
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
      To(this.element) && (this.setContentEl(this.content), this.init(), this.calculateAutoSize(), this.bindResizeListener(), this.defaultWidth = Ce(this.element), this.defaultHeight = we(this.element), this.defaultContentWidth = Ce(this.content), this.defaultContentHeight = we(this.content), this.initialized = !0);
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
    scrollTo: function(o) {
      this.element && this.element.scrollTo(o);
    },
    scrollToIndex: function(o) {
      var r = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto", n = this.isBoth(), i = this.isHorizontal(), s = n ? o.every(function(O) {
        return O > -1;
      }) : o > -1;
      if (s) {
        var l = this.first, a = this.element, d = a.scrollTop, c = d === void 0 ? 0 : d, u = a.scrollLeft, f = u === void 0 ? 0 : u, g = this.calculateNumItems(), h = g.numToleratedItems, v = this.getContentPosition(), b = this.itemSize, $ = function() {
          var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, V = arguments.length > 1 ? arguments[1] : void 0;
          return x <= V ? 0 : x;
        }, k = function(x, V, W) {
          return x * V + W;
        }, m = function() {
          var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return r.scrollTo({
            left: x,
            top: V,
            behavior: t
          });
        }, p = n ? {
          rows: 0,
          cols: 0
        } : 0, y = !1, B = !1;
        n ? (p = {
          rows: $(o[0], h[0]),
          cols: $(o[1], h[1])
        }, m(k(p.cols, b[1], v.left), k(p.rows, b[0], v.top)), B = this.lastScrollPos.top !== c || this.lastScrollPos.left !== f, y = p.rows !== l.rows || p.cols !== l.cols) : (p = $(o, h), i ? m(k(p, b, v.left), c) : m(f, k(p, b, v.top)), B = this.lastScrollPos !== (i ? f : c), y = p !== l), this.isRangeChanged = y, B && (this.first = p);
      }
    },
    scrollInView: function(o, r) {
      var t = this, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
      if (r) {
        var i = this.isBoth(), s = this.isHorizontal(), l = i ? o.every(function(b) {
          return b > -1;
        }) : o > -1;
        if (l) {
          var a = this.getRenderedRange(), d = a.first, c = a.viewport, u = function() {
            var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return t.scrollTo({
              left: $,
              top: k,
              behavior: n
            });
          }, f = r === "to-start", g = r === "to-end";
          if (f) {
            if (i)
              c.first.rows - d.rows > o[0] ? u(c.first.cols * this.itemSize[1], (c.first.rows - 1) * this.itemSize[0]) : c.first.cols - d.cols > o[1] && u((c.first.cols - 1) * this.itemSize[1], c.first.rows * this.itemSize[0]);
            else if (c.first - d > o) {
              var h = (c.first - 1) * this.itemSize;
              s ? u(h, 0) : u(0, h);
            }
          } else if (g) {
            if (i)
              c.last.rows - d.rows <= o[0] + 1 ? u(c.first.cols * this.itemSize[1], (c.first.rows + 1) * this.itemSize[0]) : c.last.cols - d.cols <= o[1] + 1 && u((c.first.cols + 1) * this.itemSize[1], c.first.rows * this.itemSize[0]);
            else if (c.last - d <= o + 1) {
              var v = (c.first + 1) * this.itemSize;
              s ? u(v, 0) : u(0, v);
            }
          }
        }
      } else
        this.scrollToIndex(o, n);
    },
    getRenderedRange: function() {
      var o = function(u, f) {
        return Math.floor(u / (f || u));
      }, r = this.first, t = 0;
      if (this.element) {
        var n = this.isBoth(), i = this.isHorizontal(), s = this.element, l = s.scrollTop, a = s.scrollLeft;
        if (n)
          r = {
            rows: o(l, this.itemSize[0]),
            cols: o(a, this.itemSize[1])
          }, t = {
            rows: r.rows + this.numItemsInViewport.rows,
            cols: r.cols + this.numItemsInViewport.cols
          };
        else {
          var d = i ? a : l;
          r = o(d, this.itemSize), t = r + this.numItemsInViewport;
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
      var o = this.isBoth(), r = this.isHorizontal(), t = this.itemSize, n = this.getContentPosition(), i = this.element ? this.element.offsetWidth - n.left : 0, s = this.element ? this.element.offsetHeight - n.top : 0, l = function(f, g) {
        return Math.ceil(f / (g || f));
      }, a = function(f) {
        return Math.ceil(f / 2);
      }, d = o ? {
        rows: l(s, t[0]),
        cols: l(i, t[1])
      } : l(r ? i : s, t), c = this.d_numToleratedItems || (o ? [a(d.rows), a(d.cols)] : a(d));
      return {
        numItemsInViewport: d,
        numToleratedItems: c
      };
    },
    calculateOptions: function() {
      var o = this, r = this.isBoth(), t = this.first, n = this.calculateNumItems(), i = n.numItemsInViewport, s = n.numToleratedItems, l = function(c, u, f) {
        var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
        return o.getLast(c + u + (c < f ? 2 : 3) * f, g);
      }, a = r ? {
        rows: l(t.rows, i.rows, s[0]),
        cols: l(t.cols, i.cols, s[1], !0)
      } : l(t, i, s);
      this.last = a, this.numItemsInViewport = i, this.d_numToleratedItems = s, this.$emit("update:numToleratedItems", this.d_numToleratedItems), this.showLoader && (this.loaderArr = r ? Array.from({
        length: i.rows
      }).map(function() {
        return Array.from({
          length: i.cols
        });
      }) : Array.from({
        length: i
      })), this.lazy && Promise.resolve().then(function() {
        var d;
        o.lazyLoadState = {
          first: o.step ? r ? {
            rows: 0,
            cols: t.cols
          } : 0 : t,
          last: Math.min(o.step ? o.step : a, ((d = o.items) === null || d === void 0 ? void 0 : d.length) || 0)
        }, o.$emit("lazy-load", o.lazyLoadState);
      });
    },
    calculateAutoSize: function() {
      var o = this;
      this.autoSize && !this.d_loading && Promise.resolve().then(function() {
        if (o.content) {
          var r = o.isBoth(), t = o.isHorizontal(), n = o.isVertical();
          o.content.style.minHeight = o.content.style.minWidth = "auto", o.content.style.position = "relative", o.element.style.contain = "none";
          var i = [Ce(o.element), we(o.element)], s = i[0], l = i[1];
          (r || t) && (o.element.style.width = s < o.defaultWidth ? s + "px" : o.scrollWidth || o.defaultWidth + "px"), (r || n) && (o.element.style.height = l < o.defaultHeight ? l + "px" : o.scrollHeight || o.defaultHeight + "px"), o.content.style.minHeight = o.content.style.minWidth = "", o.content.style.position = "", o.element.style.contain = "";
        }
      });
    },
    getLast: function() {
      var o, r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, n = arguments.length > 1 ? arguments[1] : void 0;
      return this.items ? Math.min(n ? ((o = this.columns || this.items[0]) === null || o === void 0 ? void 0 : o.length) || 0 : ((r = this.items) === null || r === void 0 ? void 0 : r.length) || 0, t) : 0;
    },
    getContentPosition: function() {
      if (this.content) {
        var o = getComputedStyle(this.content), r = parseFloat(o.paddingLeft) + Math.max(parseFloat(o.left) || 0, 0), t = parseFloat(o.paddingRight) + Math.max(parseFloat(o.right) || 0, 0), n = parseFloat(o.paddingTop) + Math.max(parseFloat(o.top) || 0, 0), i = parseFloat(o.paddingBottom) + Math.max(parseFloat(o.bottom) || 0, 0);
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
      var o = this;
      if (this.element) {
        var r = this.isBoth(), t = this.isHorizontal(), n = this.element.parentElement, i = this.scrollWidth || "".concat(this.element.offsetWidth || n.offsetWidth, "px"), s = this.scrollHeight || "".concat(this.element.offsetHeight || n.offsetHeight, "px"), l = function(d, c) {
          return o.element.style[d] = c;
        };
        r || t ? (l("height", s), l("width", i)) : l("height", s);
      }
    },
    setSpacerSize: function() {
      var o = this, r = this.items;
      if (r) {
        var t = this.isBoth(), n = this.isHorizontal(), i = this.getContentPosition(), s = function(a, d, c) {
          var u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
          return o.spacerStyle = Re(Re({}, o.spacerStyle), Tr({}, "".concat(a), (d || []).length * c + u + "px"));
        };
        t ? (s("height", r, this.itemSize[0], i.y), s("width", this.columns || r[1], this.itemSize[1], i.x)) : n ? s("width", this.columns || r, this.itemSize, i.x) : s("height", r, this.itemSize, i.y);
      }
    },
    setContentPosition: function(o) {
      var r = this;
      if (this.content && !this.appendOnly) {
        var t = this.isBoth(), n = this.isHorizontal(), i = o ? o.first : this.first, s = function(c, u) {
          return c * u;
        }, l = function() {
          var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return r.contentStyle = Re(Re({}, r.contentStyle), {
            transform: "translate3d(".concat(c, "px, ").concat(u, "px, 0)")
          });
        };
        if (t)
          l(s(i.cols, this.itemSize[1]), s(i.rows, this.itemSize[0]));
        else {
          var a = s(i, this.itemSize);
          n ? l(a, 0) : l(0, a);
        }
      }
    },
    onScrollPositionChange: function(o) {
      var r = this, t = o.target, n = this.isBoth(), i = this.isHorizontal(), s = this.getContentPosition(), l = function(D, E) {
        return D ? D > E ? D - E : D : 0;
      }, a = function(D, E) {
        return Math.floor(D / (E || D));
      }, d = function(D, E, G, Y, M, K) {
        return D <= M ? M : K ? G - Y - M : E + M - 1;
      }, c = function(D, E, G, Y, M, K, X, ge) {
        if (D <= K)
          return 0;
        var te = Math.max(0, X ? D < E ? G : D - K : D > E ? G : D - 2 * K), Z = r.getLast(te, ge);
        return te > Z ? Z - M : te;
      }, u = function(D, E, G, Y, M, K) {
        var X = E + Y + 2 * M;
        return D >= M && (X += M + 1), r.getLast(X, K);
      }, f = l(t.scrollTop, s.top), g = l(t.scrollLeft, s.left), h = n ? {
        rows: 0,
        cols: 0
      } : 0, v = this.last, b = !1, $ = this.lastScrollPos;
      if (n) {
        var k = this.lastScrollPos.top <= f, m = this.lastScrollPos.left <= g;
        if (!this.appendOnly || this.appendOnly && (k || m)) {
          var p = {
            rows: a(f, this.itemSize[0]),
            cols: a(g, this.itemSize[1])
          }, y = {
            rows: d(p.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], k),
            cols: d(p.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], m)
          };
          h = {
            rows: c(p.rows, y.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], k),
            cols: c(p.cols, y.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], m, !0)
          }, v = {
            rows: u(p.rows, h.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
            cols: u(p.cols, h.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], !0)
          }, b = h.rows !== this.first.rows || v.rows !== this.last.rows || h.cols !== this.first.cols || v.cols !== this.last.cols || this.isRangeChanged, $ = {
            top: f,
            left: g
          };
        }
      } else {
        var B = i ? g : f, O = this.lastScrollPos <= B;
        if (!this.appendOnly || this.appendOnly && O) {
          var x = a(B, this.itemSize), V = d(x, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, O);
          h = c(x, V, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, O), v = u(x, h, this.last, this.numItemsInViewport, this.d_numToleratedItems), b = h !== this.first || v !== this.last || this.isRangeChanged, $ = B;
        }
      }
      return {
        first: h,
        last: v,
        isRangeChanged: b,
        scrollPos: $
      };
    },
    onScrollChange: function(o) {
      var r = this.onScrollPositionChange(o), t = r.first, n = r.last, i = r.isRangeChanged, s = r.scrollPos;
      if (i) {
        var l = {
          first: t,
          last: n
        };
        if (this.setContentPosition(l), this.first = t, this.last = n, this.lastScrollPos = s, this.$emit("scroll-index-change", l), this.lazy && this.isPageChanged(t)) {
          var a, d, c = {
            first: this.step ? Math.min(this.getPageByFirst(t) * this.step, (((a = this.items) === null || a === void 0 ? void 0 : a.length) || 0) - this.step) : t,
            last: Math.min(this.step ? (this.getPageByFirst(t) + 1) * this.step : n, ((d = this.items) === null || d === void 0 ? void 0 : d.length) || 0)
          }, u = this.lazyLoadState.first !== c.first || this.lazyLoadState.last !== c.last;
          u && this.$emit("lazy-load", c), this.lazyLoadState = c;
        }
      }
    },
    onScroll: function(o) {
      var r = this;
      if (this.$emit("scroll", o), this.delay) {
        if (this.scrollTimeout && clearTimeout(this.scrollTimeout), this.isPageChanged()) {
          if (!this.d_loading && this.showLoader) {
            var t = this.onScrollPositionChange(o), n = t.isRangeChanged, i = n || (this.step ? this.isPageChanged() : !1);
            i && (this.d_loading = !0);
          }
          this.scrollTimeout = setTimeout(function() {
            r.onScrollChange(o), r.d_loading && r.showLoader && (!r.lazy || r.loading === void 0) && (r.d_loading = !1, r.page = r.getPageByFirst());
          }, this.delay);
        }
      } else
        this.onScrollChange(o);
    },
    onResize: function() {
      var o = this;
      this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
        if (To(o.element)) {
          var r = o.isBoth(), t = o.isVertical(), n = o.isHorizontal(), i = [Ce(o.element), we(o.element)], s = i[0], l = i[1], a = s !== o.defaultWidth, d = l !== o.defaultHeight, c = r ? a || d : n ? a : t ? d : !1;
          c && (o.d_numToleratedItems = o.numToleratedItems, o.defaultWidth = s, o.defaultHeight = l, o.defaultContentWidth = Ce(o.content), o.defaultContentHeight = we(o.content), o.init());
        }
      }, this.resizeDelay);
    },
    bindResizeListener: function() {
      var o = this;
      this.resizeListener || (this.resizeListener = this.onResize.bind(this), window.addEventListener("resize", this.resizeListener), window.addEventListener("orientationchange", this.resizeListener), this.resizeObserver = new ResizeObserver(function() {
        o.onResize();
      }), this.resizeObserver.observe(this.element));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), window.removeEventListener("orientationchange", this.resizeListener), this.resizeListener = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
    },
    getOptions: function(o) {
      var r = (this.items || []).length, t = this.isBoth() ? this.first.rows + o : this.first + o;
      return {
        index: t,
        count: r,
        first: t === 0,
        last: t === r - 1,
        even: t % 2 === 0,
        odd: t % 2 !== 0
      };
    },
    getLoaderOptions: function(o, r) {
      var t = this.loaderArr.length;
      return Re({
        index: o,
        count: t,
        first: o === 0,
        last: o === t - 1,
        even: o % 2 === 0,
        odd: o % 2 !== 0
      }, r);
    },
    getPageByFirst: function(o) {
      return Math.floor(((o ?? this.first) + this.d_numToleratedItems * 4) / (this.step || 1));
    },
    isPageChanged: function(o) {
      return this.step && !this.lazy ? this.page !== this.getPageByFirst(o ?? this.first) : !0;
    },
    setContentEl: function(o) {
      this.content = o || this.content || so(this.element, '[data-pc-section="content"]');
    },
    elementRef: function(o) {
      this.element = o;
    },
    contentRef: function(o) {
      this.content = o;
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
      var o = this;
      return this.items && !this.d_loading ? this.isBoth() ? this.items.slice(this.appendOnly ? 0 : this.first.rows, this.last.rows).map(function(r) {
        return o.columns ? r : r.slice(o.appendOnly ? 0 : o.first.cols, o.last.cols);
      }) : this.isHorizontal() && this.columns ? this.items : this.items.slice(this.appendOnly ? 0 : this.first, this.last) : [];
    },
    loadedRows: function() {
      return this.d_loading ? this.loaderDisabled ? this.loaderArr : [] : this.loadedItems;
    },
    loadedColumns: function() {
      if (this.columns) {
        var o = this.isBoth(), r = this.isHorizontal();
        if (o || r)
          return this.d_loading && this.loaderDisabled ? o ? this.loaderArr[0] : this.loaderArr : this.columns.slice(o ? this.first.cols : this.first, o ? this.last.cols : this.last);
      }
      return this.columns;
    }
  },
  components: {
    SpinnerIcon: co
  }
}, Yg = ["tabindex"];
function qg(e, o, r, t, n, i) {
  var s = he("SpinnerIcon");
  return e.disabled ? (C(), I(xe, {
    key: 1
  }, [L(e.$slots, "default"), L(e.$slots, "content", {
    items: e.items,
    rows: e.items,
    columns: i.loadedColumns
  })], 64)) : (C(), I("div", w({
    key: 0,
    ref: i.elementRef,
    class: i.containerClass,
    tabindex: e.tabindex,
    style: e.style,
    onScroll: o[0] || (o[0] = function() {
      return i.onScroll && i.onScroll.apply(i, arguments);
    })
  }, e.ptmi("root")), [L(e.$slots, "content", {
    styleClass: i.contentClass,
    items: i.loadedItems,
    getItemOptions: i.getOptions,
    loading: n.d_loading,
    getLoaderOptions: i.getLoaderOptions,
    itemSize: e.itemSize,
    rows: i.loadedRows,
    columns: i.loadedColumns,
    contentRef: i.contentRef,
    spacerStyle: n.spacerStyle,
    contentStyle: n.contentStyle,
    vertical: i.isVertical(),
    horizontal: i.isHorizontal(),
    both: i.isBoth()
  }, function() {
    return [j("div", w({
      ref: i.contentRef,
      class: i.contentClass,
      style: n.contentStyle
    }, e.ptm("content")), [(C(!0), I(xe, null, ro(i.loadedItems, function(l, a) {
      return L(e.$slots, "item", {
        key: a,
        item: l,
        options: i.getOptions(a)
      });
    }), 128))], 16)];
  }), e.showSpacer ? (C(), I("div", w({
    key: 0,
    class: "p-virtualscroller-spacer",
    style: n.spacerStyle
  }, e.ptm("spacer")), null, 16)) : A("", !0), !e.loaderDisabled && e.showLoader && n.d_loading ? (C(), I("div", w({
    key: 1,
    class: i.loaderClass
  }, e.ptm("loader")), [e.$slots && e.$slots.loader ? (C(!0), I(xe, {
    key: 0
  }, ro(n.loaderArr, function(l, a) {
    return L(e.$slots, "loader", {
      key: a,
      options: i.getLoaderOptions(a, i.isBoth() && {
        numCols: e.d_numItemsInViewport.cols
      })
    });
  }), 128)) : A("", !0), L(e.$slots, "loadingicon", {}, function() {
    return [Te(s, w({
      spin: "",
      class: "p-virtualscroller-loading-icon"
    }, e.ptm("loadingIcon")), null, 16)];
  })], 16)) : A("", !0)], 16, Yg));
}
zr.render = qg;
var Xg = ({ dt: e }) => `
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    inset-inline-end: ${e("autocomplete.padding.x")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    inset-inline-end: calc(${e("autocomplete.dropdown.width")} + ${e("autocomplete.padding.x")});
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
    width: ${e("autocomplete.dropdown.width")};
    border-start-end-radius: ${e("autocomplete.dropdown.border.radius")};
    border-end-end-radius: ${e("autocomplete.dropdown.border.radius")};
    background: ${e("autocomplete.dropdown.background")};
    border: 1px solid ${e("autocomplete.dropdown.border.color")};
    border-inline-start: 0 none;
    color: ${e("autocomplete.dropdown.color")};
    transition: background ${e("autocomplete.transition.duration")}, color ${e("autocomplete.transition.duration")}, border-color ${e("autocomplete.transition.duration")}, outline-color ${e("autocomplete.transition.duration")}, box-shadow ${e("autocomplete.transition.duration")};
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: ${e("autocomplete.dropdown.hover.background")};
    border-color: ${e("autocomplete.dropdown.hover.border.color")};
    color: ${e("autocomplete.dropdown.hover.color")};
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: ${e("autocomplete.dropdown.active.background")};
    border-color: ${e("autocomplete.dropdown.active.border.color")};
    color: ${e("autocomplete.dropdown.active.color")};
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: ${e("autocomplete.dropdown.focus.ring.shadow")};
    outline: ${e("autocomplete.dropdown.focus.ring.width")} ${e("autocomplete.dropdown.focus.ring.style")} ${e("autocomplete.dropdown.focus.ring.color")};
    outline-offset: ${e("autocomplete.dropdown.focus.ring.offset")};
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: ${e("autocomplete.overlay.background")};
    color: ${e("autocomplete.overlay.color")};
    border: 1px solid ${e("autocomplete.overlay.border.color")};
    border-radius: ${e("autocomplete.overlay.border.radius")};
    box-shadow: ${e("autocomplete.overlay.shadow")};
}

.p-autocomplete-list-container {
    overflow: auto;
}

.p-autocomplete-list {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: ${e("autocomplete.list.gap")};
    padding: ${e("autocomplete.list.padding")};
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${e("autocomplete.option.padding")};
    border: 0 none;
    color: ${e("autocomplete.option.color")};
    background: transparent;
    transition: background ${e("autocomplete.transition.duration")}, color ${e("autocomplete.transition.duration")}, border-color ${e("autocomplete.transition.duration")};
    border-radius: ${e("autocomplete.option.border.radius")};
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: ${e("autocomplete.option.focus.background")};
    color: ${e("autocomplete.option.focus.color")};
}

.p-autocomplete-option-selected {
    background: ${e("autocomplete.option.selected.background")};
    color: ${e("autocomplete.option.selected.color")};
}

.p-autocomplete-option-selected.p-focus {
    background: ${e("autocomplete.option.selected.focus.background")};
    color: ${e("autocomplete.option.selected.focus.color")};
}

.p-autocomplete-option-group {
    margin: 0;
    padding: ${e("autocomplete.option.group.padding")};
    color: ${e("autocomplete.option.group.color")};
    background: ${e("autocomplete.option.group.background")};
    font-weight: ${e("autocomplete.option.group.font.weight")};
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(${e("autocomplete.padding.y")} / 2) ${e("autocomplete.padding.x")};
    gap: calc(${e("autocomplete.padding.y")} / 2);
    color: ${e("autocomplete.color")};
    background: ${e("autocomplete.background")};
    border: 1px solid ${e("autocomplete.border.color")};
    border-radius: ${e("autocomplete.border.radius")};
    width: 100%;
    transition: background ${e("autocomplete.transition.duration")}, color ${e("autocomplete.transition.duration")}, border-color ${e("autocomplete.transition.duration")}, outline-color ${e("autocomplete.transition.duration")}, box-shadow ${e("autocomplete.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("autocomplete.shadow")};
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: ${e("autocomplete.hover.border.color")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${e("autocomplete.focus.border.color")};
    box-shadow: ${e("autocomplete.focus.ring.shadow")};
    outline: ${e("autocomplete.focus.ring.width")} ${e("autocomplete.focus.ring.style")} ${e("autocomplete.focus.ring.color")};
    outline-offset: ${e("autocomplete.focus.ring.offset")};
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: ${e("autocomplete.invalid.border.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: ${e("autocomplete.filled.background")};
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${e("autocomplete.filled.hover.background")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: ${e("autocomplete.filled.focus.background")};
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: ${e("autocomplete.disabled.background")};
    color: ${e("autocomplete.disabled.color")};
}

.p-autocomplete-chip.p-chip {
    padding-block-start: calc(${e("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${e("autocomplete.padding.y")} / 2);
    border-radius: ${e("autocomplete.chip.border.radius")};
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-inline-start: calc(${e("autocomplete.padding.y")} / 2);
    padding-inline-end: calc(${e("autocomplete.padding.y")} / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: ${e("autocomplete.chip.focus.background")};
    color: ${e("autocomplete.chip.focus.color")};
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-block-start: calc(${e("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${e("autocomplete.padding.y")} / 2);
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
    color: ${e("autocomplete.placeholder.color")};
}

.p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
    color: ${e("autocomplete.invalid.placeholder.color")};
}

.p-autocomplete-empty-message {
    padding: ${e("autocomplete.empty.message.padding")};
}

.p-autocomplete-fluid {
    display: flex;
}

.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
    width: ${e("autocomplete.dropdown.sm.width")};
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
    font-size: ${e("form.field.sm.font.size")};
    width: ${e("form.field.sm.font.size")};
    height: ${e("form.field.sm.font.size")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
    width: ${e("autocomplete.dropdown.lg.width")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
    font-size: ${e("form.field.lg.font.size")};
    width: ${e("form.field.lg.font.size")};
    height: ${e("form.field.lg.font.size")};
}
`, Zg = {
  root: {
    position: "relative"
  }
}, Qg = {
  root: function(o) {
    var r = o.instance, t = o.props;
    return ["p-autocomplete p-component p-inputwrapper", {
      "p-disabled": t.disabled,
      "p-invalid": r.$invalid,
      "p-focus": r.focused,
      "p-inputwrapper-filled": r.$filled || R(r.inputValue),
      "p-inputwrapper-focus": r.focused,
      "p-autocomplete-open": r.overlayVisible,
      "p-autocomplete-fluid": r.$fluid
    }];
  },
  pcInputText: "p-autocomplete-input",
  inputMultiple: function(o) {
    var r = o.instance;
    return ["p-autocomplete-input-multiple", {
      "p-variant-filled": r.$variant === "filled"
    }];
  },
  chipItem: function(o) {
    var r = o.instance, t = o.i;
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
  option: function(o) {
    var r = o.instance, t = o.option, n = o.i, i = o.getItemOptions;
    return ["p-autocomplete-option", {
      "p-autocomplete-option-selected": r.isSelected(t),
      "p-focus": r.focusedOptionIndex === r.getOptionIndex(n, i),
      "p-disabled": r.isOptionDisabled(t)
    }];
  },
  emptyMessage: "p-autocomplete-empty-message"
}, Jg = z.extend({
  name: "autocomplete",
  style: Xg,
  classes: Qg,
  inlineStyles: Zg
}), eh = {
  name: "BaseAutoComplete",
  extends: _r,
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
  style: Jg,
  provide: function() {
    return {
      $pcAutoComplete: this,
      $parentInstance: this
    };
  }
};
function or(e, o, r) {
  return (o = oh(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function oh(e) {
  var o = rh(e, "string");
  return _e(o) == "symbol" ? o : o + "";
}
function rh(e, o) {
  if (_e(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (_e(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
function _e(e) {
  "@babel/helpers - typeof";
  return _e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _e(e);
}
function rr(e) {
  return ah(e) || ih(e) || nh(e) || th();
}
function th() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nh(e, o) {
  if (e) {
    if (typeof e == "string")
      return ko(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ko(e, o) : void 0;
  }
}
function ih(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ah(e) {
  if (Array.isArray(e))
    return ko(e);
}
function ko(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, t = Array(o); r < o; r++)
    t[r] = e[r];
  return t;
}
var Lr = {
  name: "AutoComplete",
  extends: eh,
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
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.overlay && (po.clear(this.overlay), this.overlay = null);
  },
  methods: {
    getOptionIndex: function(o, r) {
      return this.virtualScrollerDisabled ? o : r && r(o).index;
    },
    getOptionLabel: function(o) {
      return this.optionLabel ? ke(o, this.optionLabel) : o;
    },
    getOptionValue: function(o) {
      return o;
    },
    getOptionRenderKey: function(o, r) {
      return (this.dataKey ? ke(o, this.dataKey) : this.getOptionLabel(o)) + "_" + r;
    },
    getPTOptions: function(o, r, t, n) {
      return this.ptm(n, {
        context: {
          option: o,
          index: t,
          selected: this.isSelected(o),
          focused: this.focusedOptionIndex === this.getOptionIndex(t, r),
          disabled: this.isOptionDisabled(o)
        }
      });
    },
    isOptionDisabled: function(o) {
      return this.optionDisabled ? ke(o, this.optionDisabled) : !1;
    },
    isOptionGroup: function(o) {
      return this.optionGroupLabel && o.optionGroup && o.group;
    },
    getOptionGroupLabel: function(o) {
      return ke(o, this.optionGroupLabel);
    },
    getOptionGroupChildren: function(o) {
      return ke(o, this.optionGroupChildren);
    },
    getAriaPosInset: function(o) {
      var r = this;
      return (this.optionGroupLabel ? o - this.visibleOptions.slice(0, o).filter(function(t) {
        return r.isOptionGroup(t);
      }).length : o) + 1;
    },
    show: function(o) {
      this.$emit("before-show"), this.dirty = !0, this.overlayVisible = !0, this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, o && $e(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    hide: function(o) {
      var r = this, t = function() {
        var i;
        r.$emit("before-hide"), r.dirty = o, r.overlayVisible = !1, r.clicked = !1, r.focusedOptionIndex = -1, o && $e(r.multiple ? r.$refs.focusInput : (i = r.$refs.focusInput) === null || i === void 0 ? void 0 : i.$el);
      };
      setTimeout(function() {
        t();
      }, 0);
    },
    onFocus: function(o) {
      this.disabled || (!this.dirty && this.completeOnFocus && this.search(o, o.target.value, "focus"), this.dirty = !0, this.focused = !0, this.overlayVisible && (this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, this.scrollInView(this.focusedOptionIndex)), this.$emit("focus", o));
    },
    onBlur: function(o) {
      var r, t;
      this.dirty = !1, this.focused = !1, this.focusedOptionIndex = -1, this.$emit("blur", o), (r = (t = this.formField).onBlur) === null || r === void 0 || r.call(t);
    },
    onKeyDown: function(o) {
      if (this.disabled) {
        o.preventDefault();
        return;
      }
      switch (o.code) {
        case "ArrowDown":
          this.onArrowDownKey(o);
          break;
        case "ArrowUp":
          this.onArrowUpKey(o);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(o);
          break;
        case "ArrowRight":
          this.onArrowRightKey(o);
          break;
        case "Home":
          this.onHomeKey(o);
          break;
        case "End":
          this.onEndKey(o);
          break;
        case "PageDown":
          this.onPageDownKey(o);
          break;
        case "PageUp":
          this.onPageUpKey(o);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(o);
          break;
        case "Space":
          this.onSpaceKey(o);
          break;
        case "Escape":
          this.onEscapeKey(o);
          break;
        case "Tab":
          this.onTabKey(o);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this.onShiftKey(o);
          break;
        case "Backspace":
          this.onBackspaceKey(o);
          break;
      }
      this.clicked = !1;
    },
    onInput: function(o) {
      var r = this;
      if (this.typeahead) {
        this.searchTimeout && clearTimeout(this.searchTimeout);
        var t = o.target.value;
        this.multiple || this.updateModel(o, t), t.length === 0 ? (this.hide(), this.$emit("clear")) : t.length >= this.minLength ? (this.focusedOptionIndex = -1, this.searchTimeout = setTimeout(function() {
          r.search(o, t, "input");
        }, this.delay)) : this.hide();
      }
    },
    onChange: function(o) {
      var r = this;
      if (this.forceSelection) {
        var t = !1;
        if (this.visibleOptions && !this.multiple) {
          var n, i = this.multiple ? this.$refs.focusInput.value : (n = this.$refs.focusInput) === null || n === void 0 || (n = n.$el) === null || n === void 0 ? void 0 : n.value, s = this.visibleOptions.find(function(d) {
            return r.isOptionMatched(d, i || "");
          });
          s !== void 0 && (t = !0, !this.isSelected(s) && this.onOptionSelect(o, s));
        }
        if (!t) {
          if (this.multiple)
            this.$refs.focusInput.value = "";
          else {
            var l, a = (l = this.$refs.focusInput) === null || l === void 0 ? void 0 : l.$el;
            a && (a.value = "");
          }
          this.$emit("clear"), !this.multiple && this.updateModel(o, null);
        }
      }
    },
    onMultipleContainerFocus: function() {
      this.disabled || (this.focused = !0);
    },
    onMultipleContainerBlur: function() {
      this.focusedMultipleOptionIndex = -1, this.focused = !1;
    },
    onMultipleContainerKeyDown: function(o) {
      if (this.disabled) {
        o.preventDefault();
        return;
      }
      switch (o.code) {
        case "ArrowLeft":
          this.onArrowLeftKeyOnMultiple(o);
          break;
        case "ArrowRight":
          this.onArrowRightKeyOnMultiple(o);
          break;
        case "Backspace":
          this.onBackspaceKeyOnMultiple(o);
          break;
      }
    },
    onContainerClick: function(o) {
      this.clicked = !0, !(this.disabled || this.searching || this.loading || this.isDropdownClicked(o)) && (!this.overlay || !this.overlay.contains(o.target)) && $e(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    onDropdownClick: function(o) {
      var r = void 0;
      if (this.overlayVisible)
        this.hide(!0);
      else {
        var t = this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el;
        $e(t), r = t.value, this.dropdownMode === "blank" ? this.search(o, "", "dropdown") : this.dropdownMode === "current" && this.search(o, r, "dropdown");
      }
      this.$emit("dropdown-click", {
        originalEvent: o,
        query: r
      });
    },
    onOptionSelect: function(o, r) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, n = this.getOptionValue(r);
      this.multiple ? (this.$refs.focusInput.value = "", this.isSelected(r) || this.updateModel(o, [].concat(rr(this.d_value || []), [n]))) : this.updateModel(o, n), this.$emit("item-select", {
        originalEvent: o,
        value: r
      }), this.$emit("option-select", {
        originalEvent: o,
        value: r
      }), t && this.hide(!0);
    },
    onOptionMouseMove: function(o, r) {
      this.focusOnHover && this.changeFocusedOptionIndex(o, r);
    },
    onOptionSelectRange: function(o) {
      var r = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
      if (t === -1 && (t = this.findNearestSelectedOptionIndex(n, !0)), n === -1 && (n = this.findNearestSelectedOptionIndex(t)), t !== -1 && n !== -1) {
        var i = Math.min(t, n), s = Math.max(t, n), l = this.visibleOptions.slice(i, s + 1).filter(function(a) {
          return r.isValidOption(a);
        }).map(function(a) {
          return r.getOptionValue(a);
        });
        this.updateModel(o, l);
      }
    },
    onOverlayClick: function(o) {
      xg.emit("overlay-click", {
        originalEvent: o,
        target: this.$el
      });
    },
    onOverlayKeyDown: function(o) {
      switch (o.code) {
        case "Escape":
          this.onEscapeKey(o);
          break;
      }
    },
    onArrowDownKey: function(o) {
      if (this.overlayVisible) {
        var r = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
        this.multiple && o.shiftKey && this.onOptionSelectRange(o, this.startRangeIndex, r), this.changeFocusedOptionIndex(o, r), o.preventDefault();
      }
    },
    onArrowUpKey: function(o) {
      if (this.overlayVisible)
        if (o.altKey)
          this.focusedOptionIndex !== -1 && this.onOptionSelect(o, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide(), o.preventDefault();
        else {
          var r = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
          this.multiple && o.shiftKey && this.onOptionSelectRange(o, r, this.startRangeIndex), this.changeFocusedOptionIndex(o, r), o.preventDefault();
        }
    },
    onArrowLeftKey: function(o) {
      var r = o.currentTarget;
      this.focusedOptionIndex = -1, this.multiple && (ve(r.value) && this.$filled ? ($e(this.$refs.multiContainer), this.focusedMultipleOptionIndex = this.d_value.length) : o.stopPropagation());
    },
    onArrowRightKey: function(o) {
      this.focusedOptionIndex = -1, this.multiple && o.stopPropagation();
    },
    onHomeKey: function(o) {
      var r = o.currentTarget, t = r.value.length, n = o.metaKey || o.ctrlKey, i = this.findFirstOptionIndex();
      this.multiple && o.shiftKey && n && this.onOptionSelectRange(o, i, this.startRangeIndex), r.setSelectionRange(0, o.shiftKey ? t : 0), this.focusedOptionIndex = -1, o.preventDefault();
    },
    onEndKey: function(o) {
      var r = o.currentTarget, t = r.value.length, n = o.metaKey || o.ctrlKey, i = this.findLastOptionIndex();
      this.multiple && o.shiftKey && n && this.onOptionSelectRange(o, this.startRangeIndex, i), r.setSelectionRange(o.shiftKey ? 0 : t, t), this.focusedOptionIndex = -1, o.preventDefault();
    },
    onPageUpKey: function(o) {
      this.scrollInView(0), o.preventDefault();
    },
    onPageDownKey: function(o) {
      this.scrollInView(this.visibleOptions.length - 1), o.preventDefault();
    },
    onEnterKey: function(o) {
      this.typeahead ? this.overlayVisible ? (this.focusedOptionIndex !== -1 && (this.multiple && o.shiftKey ? (this.onOptionSelectRange(o, this.focusedOptionIndex), o.preventDefault()) : this.onOptionSelect(o, this.visibleOptions[this.focusedOptionIndex])), this.hide()) : (this.focusedOptionIndex = -1, this.onArrowDownKey(o)) : this.multiple && o.target.value.trim() && (this.updateModel(o, [].concat(rr(this.d_value || []), [o.target.value.trim()])), this.$refs.focusInput.value = "");
    },
    onSpaceKey: function(o) {
      this.focusedOptionIndex !== -1 && this.onEnterKey(o);
    },
    onEscapeKey: function(o) {
      this.overlayVisible && this.hide(!0), o.preventDefault();
    },
    onTabKey: function(o) {
      this.focusedOptionIndex !== -1 && this.onOptionSelect(o, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide();
    },
    onShiftKey: function() {
      this.startRangeIndex = this.focusedOptionIndex;
    },
    onBackspaceKey: function(o) {
      if (this.multiple) {
        if (R(this.d_value) && !this.$refs.focusInput.value) {
          var r = this.d_value[this.d_value.length - 1], t = this.d_value.slice(0, -1);
          this.writeValue(t, o), this.$emit("item-unselect", {
            originalEvent: o,
            value: r
          }), this.$emit("option-unselect", {
            originalEvent: o,
            value: r
          });
        }
        o.stopPropagation();
      }
    },
    onArrowLeftKeyOnMultiple: function() {
      this.focusedMultipleOptionIndex = this.focusedMultipleOptionIndex < 1 ? 0 : this.focusedMultipleOptionIndex - 1;
    },
    onArrowRightKeyOnMultiple: function() {
      this.focusedMultipleOptionIndex++, this.focusedMultipleOptionIndex > this.d_value.length - 1 && (this.focusedMultipleOptionIndex = -1, $e(this.$refs.focusInput));
    },
    onBackspaceKeyOnMultiple: function(o) {
      this.focusedMultipleOptionIndex !== -1 && this.removeOption(o, this.focusedMultipleOptionIndex);
    },
    onOverlayEnter: function(o) {
      po.set("overlay", o, this.$primevue.config.zIndex.overlay), Bt(o, {
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
    onOverlayAfterLeave: function(o) {
      po.clear(o);
    },
    alignOverlay: function() {
      var o = this.multiple ? this.$refs.multiContainer : this.$refs.focusInput.$el;
      this.appendTo === "self" ? _t(this.overlay, o) : (this.overlay.style.minWidth = gr(o) + "px", Ot(this.overlay, o));
    },
    bindOutsideClickListener: function() {
      var o = this;
      this.outsideClickListener || (this.outsideClickListener = function(r) {
        o.overlayVisible && o.overlay && o.isOutsideClicked(r) && o.hide();
      }, document.addEventListener("click", this.outsideClickListener, !0));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener, !0), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var o = this;
      this.scrollHandler || (this.scrollHandler = new Up(this.$refs.container, function() {
        o.overlayVisible && o.hide();
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var o = this;
      this.resizeListener || (this.resizeListener = function() {
        o.overlayVisible && !Dt() && o.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    isOutsideClicked: function(o) {
      return !this.overlay.contains(o.target) && !this.isInputClicked(o) && !this.isDropdownClicked(o);
    },
    isInputClicked: function(o) {
      return this.multiple ? o.target === this.$refs.multiContainer || this.$refs.multiContainer.contains(o.target) : o.target === this.$refs.focusInput.$el;
    },
    isDropdownClicked: function(o) {
      return this.$refs.dropdownButton ? o.target === this.$refs.dropdownButton || this.$refs.dropdownButton.contains(o.target) : !1;
    },
    isOptionMatched: function(o, r) {
      var t;
      return this.isValidOption(o) && ((t = this.getOptionLabel(o)) === null || t === void 0 ? void 0 : t.toLocaleLowerCase(this.searchLocale)) === r.toLocaleLowerCase(this.searchLocale);
    },
    isValidOption: function(o) {
      return R(o) && !(this.isOptionDisabled(o) || this.isOptionGroup(o));
    },
    isValidSelectedOption: function(o) {
      return this.isValidOption(o) && this.isSelected(o);
    },
    isEquals: function(o, r) {
      return mt(o, r, this.equalityKey);
    },
    isSelected: function(o) {
      var r = this, t = this.getOptionValue(o);
      return this.multiple ? (this.d_value || []).some(function(n) {
        return r.isEquals(n, t);
      }) : this.isEquals(this.d_value, this.getOptionValue(o));
    },
    findFirstOptionIndex: function() {
      var o = this;
      return this.visibleOptions.findIndex(function(r) {
        return o.isValidOption(r);
      });
    },
    findLastOptionIndex: function() {
      var o = this;
      return uo(this.visibleOptions, function(r) {
        return o.isValidOption(r);
      });
    },
    findNextOptionIndex: function(o) {
      var r = this, t = o < this.visibleOptions.length - 1 ? this.visibleOptions.slice(o + 1).findIndex(function(n) {
        return r.isValidOption(n);
      }) : -1;
      return t > -1 ? t + o + 1 : o;
    },
    findPrevOptionIndex: function(o) {
      var r = this, t = o > 0 ? uo(this.visibleOptions.slice(0, o), function(n) {
        return r.isValidOption(n);
      }) : -1;
      return t > -1 ? t : o;
    },
    findSelectedOptionIndex: function() {
      var o = this;
      return this.$filled ? this.visibleOptions.findIndex(function(r) {
        return o.isValidSelectedOption(r);
      }) : -1;
    },
    findFirstFocusedOptionIndex: function() {
      var o = this.findSelectedOptionIndex();
      return o < 0 ? this.findFirstOptionIndex() : o;
    },
    findLastFocusedOptionIndex: function() {
      var o = this.findSelectedOptionIndex();
      return o < 0 ? this.findLastOptionIndex() : o;
    },
    search: function(o, r, t) {
      r != null && (t === "input" && r.trim().length === 0 || (this.searching = !0, this.$emit("complete", {
        originalEvent: o,
        query: r
      })));
    },
    removeOption: function(o, r) {
      var t = this, n = this.d_value[r], i = this.d_value.filter(function(s, l) {
        return l !== r;
      }).map(function(s) {
        return t.getOptionValue(s);
      });
      this.updateModel(o, i), this.$emit("item-unselect", {
        originalEvent: o,
        value: n
      }), this.$emit("option-unselect", {
        originalEvent: o,
        value: n
      }), this.dirty = !0, $e(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    changeFocusedOptionIndex: function(o, r) {
      this.focusedOptionIndex !== r && (this.focusedOptionIndex = r, this.scrollInView(), this.selectOnFocus && this.onOptionSelect(o, this.visibleOptions[r], !1));
    },
    scrollInView: function() {
      var o = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      this.$nextTick(function() {
        var t = r !== -1 ? "".concat(o.$id, "_").concat(r) : o.focusedOptionId, n = so(o.list, 'li[id="'.concat(t, '"]'));
        n ? n.scrollIntoView && n.scrollIntoView({
          block: "nearest",
          inline: "start"
        }) : o.virtualScrollerDisabled || o.virtualScroller && o.virtualScroller.scrollToIndex(r !== -1 ? r : o.focusedOptionIndex);
      });
    },
    autoUpdateModel: function() {
      this.selectOnFocus && this.autoOptionFocus && !this.$filled && (this.focusedOptionIndex = this.findFirstFocusedOptionIndex(), this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], !1));
    },
    updateModel: function(o, r) {
      this.writeValue(r, o), this.$emit("change", {
        originalEvent: o,
        value: r
      });
    },
    flatOptions: function(o) {
      var r = this;
      return (o || []).reduce(function(t, n, i) {
        t.push({
          optionGroup: n,
          group: !0,
          index: i
        });
        var s = r.getOptionGroupChildren(n);
        return s && s.forEach(function(l) {
          return t.push(l);
        }), t;
      }, []);
    },
    overlayRef: function(o) {
      this.overlay = o;
    },
    listRef: function(o, r) {
      this.list = o, r && r(o);
    },
    virtualScrollerRef: function(o) {
      this.virtualScroller = o;
    },
    findNextSelectedOptionIndex: function(o) {
      var r = this, t = this.$filled && o < this.visibleOptions.length - 1 ? this.visibleOptions.slice(o + 1).findIndex(function(n) {
        return r.isValidSelectedOption(n);
      }) : -1;
      return t > -1 ? t + o + 1 : -1;
    },
    findPrevSelectedOptionIndex: function(o) {
      var r = this, t = this.$filled && o > 0 ? uo(this.visibleOptions.slice(0, o), function(n) {
        return r.isValidSelectedOption(n);
      }) : -1;
      return t > -1 ? t : -1;
    },
    findNearestSelectedOptionIndex: function(o) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = -1;
      return this.$filled && (r ? (t = this.findPrevSelectedOptionIndex(o), t = t === -1 ? this.findNextSelectedOptionIndex(o) : t) : (t = this.findNextSelectedOptionIndex(o), t = t === -1 ? this.findPrevSelectedOptionIndex(o) : t)), t > -1 ? t : o;
    }
  },
  computed: {
    visibleOptions: function() {
      return this.optionGroupLabel ? this.flatOptions(this.suggestions) : this.suggestions || [];
    },
    inputValue: function() {
      if (this.$filled)
        if (_e(this.d_value) === "object") {
          var o = this.getOptionLabel(this.d_value);
          return o ?? this.d_value;
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
      return R(this.visibleOptions) && this.overlayVisible ? this.searchMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptySearchMessageText;
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
      var o = this;
      return this.visibleOptions.filter(function(r) {
        return !o.isOptionGroup(r);
      }).length;
    },
    virtualScrollerDisabled: function() {
      return !this.virtualScrollerOptions;
    },
    panelId: function() {
      return this.$id + "_panel";
    },
    containerDataP: function() {
      return se({
        fluid: this.$fluid
      });
    },
    overlayDataP: function() {
      return se(or({}, "portal-" + this.appendTo, "portal-" + this.appendTo));
    },
    inputMultipleDataP: function() {
      return se(or({
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
    InputText: Ir,
    VirtualScroller: zr,
    Portal: Pr,
    ChevronDownIcon: Sr,
    SpinnerIcon: co,
    Chip: Br
  },
  directives: {
    ripple: Rr
  }
};
function Ue(e) {
  "@babel/helpers - typeof";
  return Ue = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Ue(e);
}
function tr(e, o) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    o && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function nr(e) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? tr(Object(r), !0).forEach(function(t) {
      lh(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tr(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function lh(e, o, r) {
  return (o = sh(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function sh(e) {
  var o = dh(e, "string");
  return Ue(o) == "symbol" ? o : o + "";
}
function dh(e, o) {
  if (Ue(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Ue(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var ch = ["data-p"], uh = ["aria-activedescendant", "data-p-has-dropdown", "data-p"], fh = ["id", "aria-label", "aria-setsize", "aria-posinset"], ph = ["id", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"], gh = ["data-p-has-dropdown"], hh = ["disabled", "aria-expanded", "aria-controls"], mh = ["id", "data-p"], bh = ["id", "aria-label"], vh = ["id"], yh = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-selected", "data-p-focused", "data-p-disabled"];
function $h(e, o, r, t, n, i) {
  var s = he("InputText"), l = he("Chip"), a = he("SpinnerIcon"), d = he("VirtualScroller"), c = he("Portal"), u = lr("ripple");
  return C(), I("div", w({
    ref: "container",
    class: e.cx("root"),
    style: e.sx("root"),
    onClick: o[11] || (o[11] = function() {
      return i.onContainerClick && i.onContainerClick.apply(i, arguments);
    }),
    "data-p": i.containerDataP
  }, e.ptmi("root")), [e.multiple ? A("", !0) : (C(), re(s, {
    key: 0,
    ref: "focusInput",
    id: e.inputId,
    type: "text",
    name: e.$formName,
    class: ue([e.cx("pcInputText"), e.inputClass]),
    style: at(e.inputStyle),
    value: i.inputValue,
    placeholder: e.placeholder,
    tabindex: e.disabled ? -1 : e.tabindex,
    fluid: e.$fluid,
    disabled: e.disabled,
    size: e.size,
    invalid: e.invalid,
    variant: e.variant,
    autocomplete: "off",
    role: "combobox",
    "aria-label": e.ariaLabel,
    "aria-labelledby": e.ariaLabelledby,
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
    unstyled: e.unstyled,
    "data-p-has-dropdown": e.dropdown,
    pt: e.ptm("pcInputText")
  }, null, 8, ["id", "name", "class", "style", "value", "placeholder", "tabindex", "fluid", "disabled", "size", "invalid", "variant", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "onFocus", "onBlur", "onKeydown", "onInput", "onChange", "unstyled", "data-p-has-dropdown", "pt"])), e.multiple ? (C(), I("ul", w({
    key: 1,
    ref: "multiContainer",
    class: e.cx("inputMultiple"),
    tabindex: "-1",
    role: "listbox",
    "aria-orientation": "horizontal",
    "aria-activedescendant": n.focused ? i.focusedMultipleOptionId : void 0,
    onFocus: o[5] || (o[5] = function() {
      return i.onMultipleContainerFocus && i.onMultipleContainerFocus.apply(i, arguments);
    }),
    onBlur: o[6] || (o[6] = function() {
      return i.onMultipleContainerBlur && i.onMultipleContainerBlur.apply(i, arguments);
    }),
    onKeydown: o[7] || (o[7] = function() {
      return i.onMultipleContainerKeyDown && i.onMultipleContainerKeyDown.apply(i, arguments);
    }),
    "data-p-has-dropdown": e.dropdown,
    "data-p": i.inputMultipleDataP
  }, e.ptm("inputMultiple")), [(C(!0), I(xe, null, ro(e.d_value, function(f, g) {
    return C(), I("li", w({
      key: "".concat(g, "_").concat(i.getOptionLabel(f)),
      id: e.$id + "_multiple_option_" + g,
      class: e.cx("chipItem", {
        i: g
      }),
      role: "option",
      "aria-label": i.getOptionLabel(f),
      "aria-selected": !0,
      "aria-setsize": e.d_value.length,
      "aria-posinset": g + 1,
      ref_for: !0
    }, e.ptm("chipItem")), [L(e.$slots, "chip", w({
      class: e.cx("pcChip"),
      value: f,
      index: g,
      removeCallback: function(v) {
        return i.removeOption(v, g);
      },
      ref_for: !0
    }, e.ptm("pcChip")), function() {
      return [Te(l, {
        class: ue(e.cx("pcChip")),
        label: i.getOptionLabel(f),
        removeIcon: e.chipIcon || e.removeTokenIcon,
        removable: "",
        unstyled: e.unstyled,
        onRemove: function(v) {
          return i.removeOption(v, g);
        },
        "data-p-focused": n.focusedMultipleOptionIndex === g,
        pt: e.ptm("pcChip")
      }, {
        removeicon: fe(function() {
          return [L(e.$slots, e.$slots.chipicon ? "chipicon" : "removetokenicon", {
            class: ue(e.cx("chipIcon")),
            index: g,
            removeCallback: function(v) {
              return i.removeOption(v, g);
            }
          })];
        }),
        _: 2
      }, 1032, ["class", "label", "removeIcon", "unstyled", "onRemove", "data-p-focused", "pt"])];
    })], 16, fh);
  }), 128)), j("li", w({
    class: e.cx("inputChip"),
    role: "option"
  }, e.ptm("inputChip")), [j("input", w({
    ref: "focusInput",
    id: e.inputId,
    type: "text",
    style: e.inputStyle,
    class: e.inputClass,
    placeholder: e.placeholder,
    tabindex: e.disabled ? -1 : e.tabindex,
    disabled: e.disabled,
    autocomplete: "off",
    role: "combobox",
    "aria-label": e.ariaLabel,
    "aria-labelledby": e.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-expanded": n.overlayVisible,
    "aria-controls": e.$id + "_list",
    "aria-activedescendant": n.focused ? i.focusedOptionId : void 0,
    "aria-invalid": e.invalid || void 0,
    onFocus: o[0] || (o[0] = function() {
      return i.onFocus && i.onFocus.apply(i, arguments);
    }),
    onBlur: o[1] || (o[1] = function() {
      return i.onBlur && i.onBlur.apply(i, arguments);
    }),
    onKeydown: o[2] || (o[2] = function() {
      return i.onKeyDown && i.onKeyDown.apply(i, arguments);
    }),
    onInput: o[3] || (o[3] = function() {
      return i.onInput && i.onInput.apply(i, arguments);
    }),
    onChange: o[4] || (o[4] = function() {
      return i.onChange && i.onChange.apply(i, arguments);
    })
  }, e.ptm("input")), null, 16, ph)], 16)], 16, uh)) : A("", !0), n.searching || e.loading ? L(e.$slots, e.$slots.loader ? "loader" : "loadingicon", {
    key: 2,
    class: ue(e.cx("loader"))
  }, function() {
    return [e.loader || e.loadingIcon ? (C(), I("i", w({
      key: 0,
      class: ["pi-spin", e.cx("loader"), e.loader, e.loadingIcon],
      "aria-hidden": "true",
      "data-p-has-dropdown": e.dropdown
    }, e.ptm("loader")), null, 16, gh)) : (C(), re(a, w({
      key: 1,
      class: e.cx("loader"),
      spin: "",
      "aria-hidden": "true",
      "data-p-has-dropdown": e.dropdown
    }, e.ptm("loader")), null, 16, ["class", "data-p-has-dropdown"]))];
  }) : A("", !0), L(e.$slots, e.$slots.dropdown ? "dropdown" : "dropdownbutton", {
    toggleCallback: function(g) {
      return i.onDropdownClick(g);
    }
  }, function() {
    return [e.dropdown ? (C(), I("button", w({
      key: 0,
      ref: "dropdownButton",
      type: "button",
      class: [e.cx("dropdown"), e.dropdownClass],
      disabled: e.disabled,
      "aria-haspopup": "listbox",
      "aria-expanded": n.overlayVisible,
      "aria-controls": i.panelId,
      onClick: o[8] || (o[8] = function() {
        return i.onDropdownClick && i.onDropdownClick.apply(i, arguments);
      })
    }, e.ptm("dropdown")), [L(e.$slots, "dropdownicon", {
      class: ue(e.dropdownIcon)
    }, function() {
      return [(C(), re(oo(e.dropdownIcon ? "span" : "ChevronDownIcon"), w({
        class: e.dropdownIcon
      }, e.ptm("dropdownIcon")), null, 16, ["class"]))];
    })], 16, hh)) : A("", !0)];
  }), e.typeahead ? (C(), I("span", w({
    key: 3,
    role: "status",
    "aria-live": "polite",
    class: "p-hidden-accessible"
  }, e.ptm("hiddenSearchResult"), {
    "data-p-hidden-accessible": !0
  }), q(i.searchResultMessageText), 17)) : A("", !0), Te(c, {
    appendTo: e.appendTo
  }, {
    default: fe(function() {
      return [Te(lt, w({
        name: "p-connected-overlay",
        onEnter: i.onOverlayEnter,
        onAfterEnter: i.onOverlayAfterEnter,
        onLeave: i.onOverlayLeave,
        onAfterLeave: i.onOverlayAfterLeave
      }, e.ptm("transition")), {
        default: fe(function() {
          return [n.overlayVisible ? (C(), I("div", w({
            key: 0,
            ref: i.overlayRef,
            id: i.panelId,
            class: [e.cx("overlay"), e.panelClass, e.overlayClass],
            style: nr(nr({}, e.panelStyle), e.overlayStyle),
            onClick: o[9] || (o[9] = function() {
              return i.onOverlayClick && i.onOverlayClick.apply(i, arguments);
            }),
            onKeydown: o[10] || (o[10] = function() {
              return i.onOverlayKeyDown && i.onOverlayKeyDown.apply(i, arguments);
            }),
            "data-p": i.overlayDataP
          }, e.ptm("overlay")), [L(e.$slots, "header", {
            value: e.d_value,
            suggestions: i.visibleOptions
          }), j("div", w({
            class: e.cx("listContainer"),
            style: {
              "max-height": i.virtualScrollerDisabled ? e.scrollHeight : ""
            }
          }, e.ptm("listContainer")), [Te(d, w({
            ref: i.virtualScrollerRef
          }, e.virtualScrollerOptions, {
            style: {
              height: e.scrollHeight
            },
            items: i.visibleOptions,
            tabindex: -1,
            disabled: i.virtualScrollerDisabled,
            pt: e.ptm("virtualScroller")
          }), sr({
            content: fe(function(f) {
              var g = f.styleClass, h = f.contentRef, v = f.items, b = f.getItemOptions, $ = f.contentStyle, k = f.itemSize;
              return [j("ul", w({
                ref: function(p) {
                  return i.listRef(p, h);
                },
                id: e.$id + "_list",
                class: [e.cx("list"), g],
                style: $,
                role: "listbox",
                "aria-label": i.listAriaLabel
              }, e.ptm("list")), [(C(!0), I(xe, null, ro(v, function(m, p) {
                return C(), I(xe, {
                  key: i.getOptionRenderKey(m, i.getOptionIndex(p, b))
                }, [i.isOptionGroup(m) ? (C(), I("li", w({
                  key: 0,
                  id: e.$id + "_" + i.getOptionIndex(p, b),
                  style: {
                    height: k ? k + "px" : void 0
                  },
                  class: e.cx("optionGroup"),
                  role: "option",
                  ref_for: !0
                }, e.ptm("optionGroup")), [L(e.$slots, "optiongroup", {
                  option: m.optionGroup,
                  index: i.getOptionIndex(p, b)
                }, function() {
                  return [eo(q(i.getOptionGroupLabel(m.optionGroup)), 1)];
                })], 16, vh)) : dr((C(), I("li", w({
                  key: 1,
                  id: e.$id + "_" + i.getOptionIndex(p, b),
                  style: {
                    height: k ? k + "px" : void 0
                  },
                  class: e.cx("option", {
                    option: m,
                    i: p,
                    getItemOptions: b
                  }),
                  role: "option",
                  "aria-label": i.getOptionLabel(m),
                  "aria-selected": i.isSelected(m),
                  "aria-disabled": i.isOptionDisabled(m),
                  "aria-setsize": i.ariaSetSize,
                  "aria-posinset": i.getAriaPosInset(i.getOptionIndex(p, b)),
                  onClick: function(B) {
                    return i.onOptionSelect(B, m);
                  },
                  onMousemove: function(B) {
                    return i.onOptionMouseMove(B, i.getOptionIndex(p, b));
                  },
                  "data-p-selected": i.isSelected(m),
                  "data-p-focused": n.focusedOptionIndex === i.getOptionIndex(p, b),
                  "data-p-disabled": i.isOptionDisabled(m),
                  ref_for: !0
                }, i.getPTOptions(m, b, p, "option")), [L(e.$slots, "option", {
                  option: m,
                  index: i.getOptionIndex(p, b)
                }, function() {
                  return [eo(q(i.getOptionLabel(m)), 1)];
                })], 16, yh)), [[u]])], 64);
              }), 128)), e.showEmptyMessage && (!v || v && v.length === 0) ? (C(), I("li", w({
                key: 0,
                class: e.cx("emptyMessage"),
                role: "option"
              }, e.ptm("emptyMessage")), [L(e.$slots, "empty", {}, function() {
                return [eo(q(i.searchResultMessageText), 1)];
              })], 16)) : A("", !0)], 16, bh)];
            }),
            _: 2
          }, [e.$slots.loader ? {
            name: "loader",
            fn: fe(function(f) {
              var g = f.options;
              return [L(e.$slots, "loader", {
                options: g
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["style", "items", "disabled", "pt"])], 16), L(e.$slots, "footer", {
            value: e.d_value,
            suggestions: i.visibleOptions
          }), j("span", w({
            role: "status",
            "aria-live": "polite",
            class: "p-hidden-accessible"
          }, e.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": !0
          }), q(i.selectedMessageText), 17)], 16, mh)) : A("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16, ch);
}
Lr.render = $h;
var kh = ({ dt: e }) => `
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    align-items: center;
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
}
`, wh = {
  root: function(o) {
    var r = o.props, t = o.instance;
    return ["p-badge p-component", {
      "p-badge-circle": R(r.value) && String(r.value).length === 1,
      "p-badge-dot": ve(r.value) && !t.$slots.default,
      "p-badge-sm": r.size === "small",
      "p-badge-lg": r.size === "large",
      "p-badge-xl": r.size === "xlarge",
      "p-badge-info": r.severity === "info",
      "p-badge-success": r.severity === "success",
      "p-badge-warn": r.severity === "warn",
      "p-badge-danger": r.severity === "danger",
      "p-badge-secondary": r.severity === "secondary",
      "p-badge-contrast": r.severity === "contrast"
    }];
  }
}, Ch = z.extend({
  name: "badge",
  style: kh,
  classes: wh
}), xh = {
  name: "BaseBadge",
  extends: Ie,
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
  style: Ch,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function Ge(e) {
  "@babel/helpers - typeof";
  return Ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Ge(e);
}
function ir(e, o, r) {
  return (o = Sh(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Sh(e) {
  var o = Oh(e, "string");
  return Ge(o) == "symbol" ? o : o + "";
}
function Oh(e, o) {
  if (Ge(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Ge(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var Dr = {
  name: "Badge",
  extends: xh,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return se(ir(ir({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, Bh = ["data-p"];
function _h(e, o, r, t, n, i) {
  return C(), I("span", w({
    class: e.cx("root"),
    "data-p": i.dataP
  }, e.ptmi("root")), [L(e.$slots, "default", {}, function() {
    return [eo(q(e.value), 1)];
  })], 16, Bh);
}
Dr.render = _h;
var Ih = ({ dt: e }) => `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding: ${e("button.padding.y")} ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
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
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding: ${e("button.sm.padding.y")} ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${e("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${e("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding: ${e("button.lg.padding.y")} ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${e("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${e("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}
`;
function Ye(e) {
  "@babel/helpers - typeof";
  return Ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Ye(e);
}
function ie(e, o, r) {
  return (o = Ph(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Ph(e) {
  var o = Rh(e, "string");
  return Ye(o) == "symbol" ? o : o + "";
}
function Rh(e, o) {
  if (Ye(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (Ye(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var Th = {
  root: function(o) {
    var r = o.instance, t = o.props;
    return ["p-button p-component", ie(ie(ie(ie(ie(ie(ie(ie(ie({
      "p-button-icon-only": r.hasIcon && !t.label && !t.badge,
      "p-button-vertical": (t.iconPos === "top" || t.iconPos === "bottom") && t.label,
      "p-button-loading": t.loading,
      "p-button-link": t.link || t.variant === "link"
    }, "p-button-".concat(t.severity), t.severity), "p-button-raised", t.raised), "p-button-rounded", t.rounded), "p-button-text", t.text || t.variant === "text"), "p-button-outlined", t.outlined || t.variant === "outlined"), "p-button-sm", t.size === "small"), "p-button-lg", t.size === "large"), "p-button-plain", t.plain), "p-button-fluid", r.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(o) {
    var r = o.props;
    return ["p-button-icon", ie({}, "p-button-icon-".concat(r.iconPos), r.label)];
  },
  label: "p-button-label"
}, zh = z.extend({
  name: "button",
  style: Ih,
  classes: Th
}), Lh = {
  name: "BaseButton",
  extends: Ie,
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
  style: zh,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function qe(e) {
  "@babel/helpers - typeof";
  return qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, qe(e);
}
function H(e, o, r) {
  return (o = Dh(o)) in e ? Object.defineProperty(e, o, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[o] = r, e;
}
function Dh(e) {
  var o = Ah(e, "string");
  return qe(o) == "symbol" ? o : o + "";
}
function Ah(e, o) {
  if (qe(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, o);
    if (qe(t) != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
var Ar = {
  name: "Button",
  extends: Lh,
  inheritAttrs: !1,
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(o) {
      var r = o === "root" ? this.ptmi : this.ptm;
      return r(o, {
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
      return w(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
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
      return ve(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return se(H(H(H(H(H(H(H(H(H(H({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return se(H(H({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return se(H(H({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: co,
    Badge: Dr
  },
  directives: {
    ripple: Rr
  }
}, jh = ["data-p"], Eh = ["data-p"];
function Mh(e, o, r, t, n, i) {
  var s = he("SpinnerIcon"), l = he("Badge"), a = lr("ripple");
  return e.asChild ? L(e.$slots, "default", {
    key: 1,
    class: ue(e.cx("root")),
    a11yAttrs: i.a11yAttrs
  }) : dr((C(), re(oo(e.as), w({
    key: 0,
    class: e.cx("root"),
    "data-p": i.dataP
  }, i.attrs), {
    default: fe(function() {
      return [L(e.$slots, "default", {}, function() {
        return [e.loading ? L(e.$slots, "loadingicon", w({
          key: 0,
          class: [e.cx("loadingIcon"), e.cx("icon")]
        }, e.ptm("loadingIcon")), function() {
          return [e.loadingIcon ? (C(), I("span", w({
            key: 0,
            class: [e.cx("loadingIcon"), e.cx("icon"), e.loadingIcon]
          }, e.ptm("loadingIcon")), null, 16)) : (C(), re(s, w({
            key: 1,
            class: [e.cx("loadingIcon"), e.cx("icon")],
            spin: ""
          }, e.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : L(e.$slots, "icon", w({
          key: 1,
          class: [e.cx("icon")]
        }, e.ptm("icon")), function() {
          return [e.icon ? (C(), I("span", w({
            key: 0,
            class: [e.cx("icon"), e.icon, e.iconClass],
            "data-p": i.dataIconP
          }, e.ptm("icon")), null, 16, jh)) : A("", !0)];
        }), j("span", w({
          class: e.cx("label")
        }, e.ptm("label"), {
          "data-p": i.dataLabelP
        }), q(e.label || " "), 17, Eh), e.badge ? (C(), re(l, {
          key: 2,
          value: e.badge,
          class: ue(e.badgeClass),
          severity: e.badgeSeverity,
          unstyled: e.unstyled,
          pt: e.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : A("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[a]]);
}
Ar.render = Mh;
const Nh = {
  key: 0,
  style: { color: "#eb9091", "margin-left": "0.5rem" }
}, Vh = {
  class: "icon icon-sm",
  style: { stroke: "var(--p-inputtext-color)" },
  "aria-hidden": "true"
}, Fh = { key: 0 }, Wh = { style: { "text-wrap": "nowrap" } }, Kh = {
  __name: "AutoComplete",
  props: {
    field: Object,
    disabled: Boolean,
    editOrCreateQuick: Function,
    size: String,
    invalid_fields: {
      type: Array,
      default: () => []
    },
    filters: {
      type: [Object, String],
      default: () => ({})
    },
    clearFilters: Boolean,
    store: Object,
    quickEntry: Boolean,
    clearInput: {
      type: Boolean,
      default: !1
    },
    needFilter: Boolean
  },
  emits: ["update-autocomplete-value", "update-filter"],
  setup(e, { emit: o }) {
    const r = e, t = o, n = r.store, i = Q({}), s = Q([]), l = Q([]), a = Q([]), d = Q({}), c = Q(!1), u = Q(!1), f = Q(null);
    ar(() => {
      n.filters[r.field.fieldname] && (i.value[r.field.fieldname] = n.filters[r.field.fieldname]), r.field.needFilter && r.filters[r.field.dependingField] ? b(r.field.options, r.filters) : b(r.field.options);
    }), ae(
      () => r.field.value,
      (m) => {
        i.value[r.field.fieldname] = m;
      },
      { deep: !0, immediate: !0 }
    ), ae(
      () => n.clear,
      () => {
        i.value[r.field.fieldname] = "";
      }
    ), ae(
      () => r.filters,
      (m) => {
        r.field.needFilter && m[r.field.dependingField] && b(r.field.options, m);
      },
      { deep: !0 }
    ), ae(
      () => r.clearFilters,
      (m) => {
        m && (i.value[r.field.fieldname] = "");
      }
    ), ae(
      () => r.clearInput,
      (m) => {
        m && h();
      }
    );
    const g = (m, p) => {
      i.value[p.fieldname] = m.label, n.dataForm[p.fieldname] = m.value, n.fullDataForm[p.fieldname] = m;
    }, h = () => {
      n.dataForm[r.field.fieldname] = null, i.value[r.field.fieldname] = null, n.filters[r.field.fieldname] = null, t("update-autocomplete-value", null, r.field), r.field.provideFilter && (d.value = {}, n.autocompleteFilter = d.value), u.value = !u.value, b(r.field.options);
    }, v = (m, p) => {
      p.fieldtype === "Table" || (n.dataForm[p.fieldname] = m.value, p.fieldname == "referring_physician" && (n.physician = m), n.fullDataForm[p.fieldname] = {
        value: m.value,
        label: m.label,
        description: m.description
      });
      const y = m.label || m.description || m.value;
      i.value[p.fieldname] = __(y), p.provideFilter && (d.value = {
        [p.fieldname]: m.value
      }, n.autocompleteFilter = d.value), n.filters[p.fieldname] = y, t("update-autocomplete-value", m, p), p.clear_input_after_selection && (i.value[p.fieldname] = null);
    }, b = (m, p = {}) => {
      r.quickEntry && r.filters && (p = r.filters), r.needFilter && r.filters && (p = r.filters), frappe.call({
        method: "frappe.desk.search.search_link",
        args: {
          doctype: m,
          txt: "",
          page_length: 0,
          filters: p
        },
        callback: (y) => {
          y.message && (s.value = y.message);
        }
      });
    }, $ = (m) => {
      let p = s.value.slice(0, 10);
      if (m.query) {
        const y = s.value.map((x) => ({
          original: x,
          translated: {
            description: x.description ? __(x.description) : x.description,
            label: x.label ? __(x.label) : x.label,
            value: x.value ? __(x.value) : x.value
          }
        })), B = m.query.toLowerCase(), O = y.filter((x) => x.translated.description && x.translated.description.toLowerCase().includes(B) || x.translated.label && x.translated.label.toLowerCase().includes(B) || x.translated.value && x.translated.value.toLowerCase().includes(B)).slice(0, 10);
        l.value = O.map((x) => x.original), a.value = O.map((x) => x.translated);
      } else
        l.value = p, a.value = p.map((y) => ({
          description: y.description ? __(y.description) : y.description,
          label: y.label ? __(y.label) : y.label,
          value: y.value ? __(y.value) : y.value
        }));
    }, k = () => {
      f.value && typeof f.value.show == "function" && f.value.show();
    };
    return st(() => {
      h();
    }), (m, p) => {
      var y, B;
      return C(), I(xe, null, [
        j("div", null, [
          j("label", null, q(m.__(r.field.label)), 1),
          r.field.required || r.field.reqd ? (C(), I("span", Nh, "*")) : A("", !0),
          j("div", {
            class: ue([{ flex: r.field.quick_entry }, "relative"])
          }, [
            (C(), re(_o(Lr), {
              modelValue: i.value[r.field.fieldname],
              "onUpdate:modelValue": p[0] || (p[0] = (O) => i.value[r.field.fieldname] = O),
              key: u.value,
              ref_key: "autoCompleteRef",
              ref: f,
              inputId: r.field.fieldname,
              suggestions: a.value,
              onComplete: $,
              placeholder: r.field.placeholder || r.field.label,
              completeOnFocus: !0,
              fluid: "",
              disabled: e.disabled,
              class: ue({ "p-inputtext:disabled": e.disabled }),
              onClear: h,
              size: r.size,
              onOptionSelect: p[1] || (p[1] = (O) => v(l.value[a.value.indexOf(O.value)], e.field)),
              optionLabel: (O) => O.label || O.value,
              dropdown: r.field.fieldtype !== "Table" && !i.value[r.field.fieldname] === "" && i.value[r.field.fieldname],
              invalid: (((y = e.invalid_fields) == null ? void 0 : y.includes(r.field.fieldname)) || ((B = e.invalid_fields) == null ? void 0 : B.includes(r.field.label))) && !i.value[r.field.fieldname],
              onClick: p[2] || (p[2] = () => {
                r.field.fieldtype === "Table" && k();
              }),
              forceSelection: ""
            }, sr({
              option: fe((O) => [
                !O.option.label && !O.option.description ? (C(), I("div", Fh, [
                  j("strong", null, q(O.option.value), 1)
                ])) : A("", !0),
                j("div", null, [
                  j("strong", null, q(m.__(O.option.label) || m.__(O.option.description)), 1),
                  j("div", null, q(m.__(O.option.description)), 1)
                ])
              ]),
              _: 2
            }, [
              r.field.fieldtype !== "Table" && !e.disabled ? {
                name: "dropdown",
                fn: fe(() => [
                  j("button", {
                    type: "button",
                    class: "p-autocomplete-dropdown",
                    onClick: dt(h, ["stop"])
                  }, [
                    (C(), I("svg", Vh, p[4] || (p[4] = [
                      j("use", { href: "#icon-close" }, null, -1)
                    ])))
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["modelValue", "inputId", "suggestions", "placeholder", "disabled", "class", "size", "optionLabel", "dropdown", "invalid"])),
            r.field.quick_entry ? (C(), re(_o(Ar), {
              key: 0,
              raised: !0,
              severity: "info",
              class: "ml-4",
              size: "small",
              onClick: p[3] || (p[3] = () => c.value = !c.value),
              id: "new_" + r.field.fieldname
            }, {
              default: fe(() => [
                j("span", Wh, q(m.__("New {0}", [m.__(r.field.placeholder)])), 1)
              ]),
              _: 1
            }, 8, ["id"])) : A("", !0)
          ], 2)
        ]),
        c.value ? L(m.$slots, "quick-entry", {
          key: 0,
          createNew: c.value,
          field: r.field,
          onUpdate: g,
          onClose: () => c.value = !1
        }) : A("", !0)
      ], 64);
    };
  }
}, Hh = { AutoComplete: Kh, DataTable: ct }, Yh = {
  /** Instala NvgUI como plugin */
  install(e, { themes: o = { light: Np }, primevue: r = {} } = {}) {
    e._primevueInstalled || (e.use(kn, {
      theme: {
        preset: o.light,
        options: {
          prefix: "p",
          darkModeSelector: '[data-theme="dark"]',
          cssLayer: !1
        }
      },
      ...r
    }), e._primevueInstalled = !0), Object.entries(Hh).forEach(
      ([t, n]) => e.component(t, n)
    );
  }
};
export {
  Kh as AutoComplete,
  Zh as DataTable,
  Yh as default
};
