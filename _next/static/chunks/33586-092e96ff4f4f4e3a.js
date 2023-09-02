"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [33586], {
        349921: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return a
                }
            });
            var r = n(652983),
                o = n(345094),
                i = n(305878),
                l = n(806428);

            function a(e) {
                let t = e + "CollectionProvider",
                    [n, a] = (0, o.b)(t),
                    [u, s] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    c = e + "CollectionSlot",
                    f = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o
                        } = e, a = s(c, n), u = (0, i.e)(t, a.collectionRef);
                        return r.createElement(l.g7, {
                            ref: u
                        }, o)
                    }),
                    d = e + "CollectionItemSlot",
                    p = "data-radix-collection-item",
                    m = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o,
                            ...a
                        } = e, u = r.useRef(null), c = (0, i.e)(t, u), f = s(d, n);
                        return r.useEffect(() => (f.itemMap.set(u, {
                            ref: u,
                            ...a
                        }), () => void f.itemMap.delete(u))), r.createElement(l.g7, {
                            [p]: "",
                            ref: c
                        }, o)
                    });
                return [{
                    Provider: e => {
                        let {
                            scope: t,
                            children: n
                        } = e, o = r.useRef(null), i = r.useRef(new Map).current;
                        return r.createElement(u, {
                            scope: t,
                            itemMap: i,
                            collectionRef: o
                        }, n)
                    },
                    Slot: f,
                    ItemSlot: m
                }, function(t) {
                    let n = s(e + "CollectionConsumer", t),
                        o = r.useCallback(() => {
                            let e = n.collectionRef.current;
                            if (!e) return [];
                            let t = Array.from(e.querySelectorAll(`[${p}]`)),
                                r = Array.from(n.itemMap.values()),
                                o = r.sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
                            return o
                        }, [n.collectionRef, n.itemMap]);
                    return o
                }, a]
            }
        },
        327880: function(e, t, n) {
            let r;
            n.d(t, {
                XB: function() {
                    return p
                }
            });
            var o = n(397364),
                i = n(652983),
                l = n(700579),
                a = n(600056),
                u = n(305878),
                s = n(150544),
                c = n(424479);
            let f = "dismissableLayer.update",
                d = (0, i.createContext)({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                p = (0, i.forwardRef)((e, t) => {
                    var n;
                    let {
                        disableOutsidePointerEvents: p = !1,
                        onEscapeKeyDown: g,
                        onPointerDownOutside: v,
                        onFocusOutside: y,
                        onInteractOutside: w,
                        onDismiss: b,
                        ...x
                    } = e, E = (0, i.useContext)(d), [R, A] = (0, i.useState)(null), P = null !== (n = null == R ? void 0 : R.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document, [, C] = (0, i.useState)({}), L = (0, u.e)(t, e => A(e)), S = Array.from(E.layers), [T] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), O = S.indexOf(T), W = R ? S.indexOf(R) : -1, D = E.layersWithOutsidePointerEventsDisabled.size > 0, H = W >= O, k = function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, s.W)(e),
                            r = (0, i.useRef)(!1),
                            o = (0, i.useRef)(() => {});
                        return (0, i.useEffect)(() => {
                            let e = e => {
                                    if (e.target && !r.current) {
                                        let r = {
                                            originalEvent: e
                                        };

                                        function i() {
                                            h("dismissableLayer.pointerDownOutside", n, r, {
                                                discrete: !0
                                            })
                                        }
                                        "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = i, t.addEventListener("click", o.current, {
                                            once: !0
                                        })) : i()
                                    }
                                    r.current = !1
                                },
                                i = window.setTimeout(() => {
                                    t.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
                            }
                        }, [t, n]), {
                            onPointerDownCapture: () => r.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...E.branches].some(e => e.contains(t));
                        !H || n || (null == v || v(e), null == w || w(e), e.defaultPrevented || null == b || b())
                    }, P), M = function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, s.W)(e),
                            r = (0, i.useRef)(!1);
                        return (0, i.useEffect)(() => {
                            let e = e => {
                                e.target && !r.current && h("dismissableLayer.focusOutside", n, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                        }, [t, n]), {
                            onFocusCapture: () => r.current = !0,
                            onBlurCapture: () => r.current = !1
                        }
                    }(e => {
                        let t = e.target,
                            n = [...E.branches].some(e => e.contains(t));
                        n || (null == y || y(e), null == w || w(e), e.defaultPrevented || null == b || b())
                    }, P);
                    return (0, c.e)(e => {
                        let t = W === E.layers.size - 1;
                        t && (null == g || g(e), !e.defaultPrevented && b && (e.preventDefault(), b()))
                    }, P), (0, i.useEffect)(() => {
                        if (R) return p && (0 === E.layersWithOutsidePointerEventsDisabled.size && (r = P.body.style.pointerEvents, P.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(R)), E.layers.add(R), m(), () => {
                            p && 1 === E.layersWithOutsidePointerEventsDisabled.size && (P.body.style.pointerEvents = r)
                        }
                    }, [R, P, p, E]), (0, i.useEffect)(() => () => {
                        R && (E.layers.delete(R), E.layersWithOutsidePointerEventsDisabled.delete(R), m())
                    }, [R, E]), (0, i.useEffect)(() => {
                        let e = () => C({});
                        return document.addEventListener(f, e), () => document.removeEventListener(f, e)
                    }, []), (0, i.createElement)(a.WV.div, (0, o.Z)({}, x, {
                        ref: L,
                        style: {
                            pointerEvents: D ? H ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, l.M)(e.onFocusCapture, M.onFocusCapture),
                        onBlurCapture: (0, l.M)(e.onBlurCapture, M.onBlurCapture),
                        onPointerDownCapture: (0, l.M)(e.onPointerDownCapture, k.onPointerDownCapture)
                    }))
                });

            function m() {
                let e = new CustomEvent(f);
                document.dispatchEvent(e)
            }

            function h(e, t, n, {
                discrete: r
            }) {
                let o = n.originalEvent.target,
                    i = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: n
                    });
                t && o.addEventListener(e, t, {
                    once: !0
                }), r ? (0, a.jH)(o, i) : o.dispatchEvent(i)
            }
        },
        589741: function(e, t, n) {
            n.d(t, {
                EW: function() {
                    return i
                }
            });
            var r = n(652983);
            let o = 0;

            function i() {
                (0, r.useEffect)(() => {
                    var e, t;
                    let n = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : l()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : l()), o++, () => {
                        1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), o--
                    }
                }, [])
            }

            function l() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
        },
        646337: function(e, t, n) {
            let r;
            n.d(t, {
                M: function() {
                    return d
                }
            });
            var o = n(397364),
                i = n(652983),
                l = n(305878),
                a = n(600056),
                u = n(150544);
            let s = "focusScope.autoFocusOnMount",
                c = "focusScope.autoFocusOnUnmount",
                f = {
                    bubbles: !1,
                    cancelable: !0
                },
                d = (0, i.forwardRef)((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: d,
                        onUnmountAutoFocus: v,
                        ...y
                    } = e, [w, b] = (0, i.useState)(null), x = (0, u.W)(d), E = (0, u.W)(v), R = (0, i.useRef)(null), A = (0, l.e)(t, e => b(e)), P = (0, i.useRef)({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    (0, i.useEffect)(() => {
                        if (r) {
                            function e(e) {
                                if (P.paused || !w) return;
                                let t = e.target;
                                w.contains(t) ? R.current = t : h(R.current, {
                                    select: !0
                                })
                            }

                            function t(e) {
                                P.paused || !w || w.contains(e.relatedTarget) || h(R.current, {
                                    select: !0
                                })
                            }
                            return document.addEventListener("focusin", e), document.addEventListener("focusout", t), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t)
                            }
                        }
                    }, [r, w, P.paused]), (0, i.useEffect)(() => {
                        if (w) {
                            g.add(P);
                            let e = document.activeElement,
                                t = w.contains(e);
                            if (!t) {
                                let t = new CustomEvent(s, f);
                                w.addEventListener(s, x), w.dispatchEvent(t), t.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let n = document.activeElement;
                                    for (let r of e)
                                        if (h(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(p(w).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && h(w))
                            }
                            return () => {
                                w.removeEventListener(s, x), setTimeout(() => {
                                    let t = new CustomEvent(c, f);
                                    w.addEventListener(c, E), w.dispatchEvent(t), t.defaultPrevented || h(null != e ? e : document.body, {
                                        select: !0
                                    }), w.removeEventListener(c, E), g.remove(P)
                                }, 0)
                            }
                        }
                    }, [w, x, E, P]);
                    let C = (0, i.useCallback)(e => {
                        if (!n && !r || P.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, i] = function(e) {
                                    let t = p(e),
                                        n = m(t, e),
                                        r = m(t.reverse(), e);
                                    return [n, r]
                                }(t),
                                l = r && i;
                            l ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && h(i, {
                                select: !0
                            })) : (e.preventDefault(), n && h(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, P.paused]);
                    return (0, i.createElement)(a.WV.div, (0, o.Z)({
                        tabIndex: -1
                    }, y, {
                        ref: A,
                        onKeyDown: C
                    }))
                });

            function p(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function m(e, t) {
                for (let n of e)
                    if (! function(e, {
                            upTo: t
                        }) {
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function h(e, {
                select: t = !1
            } = {}) {
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            let g = (r = [], {
                add(e) {
                    let t = r[0];
                    e !== t && (null == t || t.pause()), (r = v(r, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (r = v(r, e))[0]) || void 0 === t || t.resume()
                }
            });

            function v(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
        },
        243006: function(e, t, n) {
            n.d(t, {
                ee: function() {
                    return eS
                },
                Eh: function() {
                    return eO
                },
                VY: function() {
                    return eT
                },
                fC: function() {
                    return eL
                },
                D7: function() {
                    return ec
                }
            });
            var r = n(397364),
                o = n(652983);

            function i(e) {
                return e.split("-")[0]
            }

            function l(e) {
                return e.split("-")[1]
            }

            function a(e) {
                return ["top", "bottom"].includes(i(e)) ? "x" : "y"
            }

            function u(e) {
                return "y" === e ? "height" : "width"
            }

            function s(e, t, n) {
                let r, {
                        reference: o,
                        floating: s
                    } = e,
                    c = o.x + o.width / 2 - s.width / 2,
                    f = o.y + o.height / 2 - s.height / 2,
                    d = a(t),
                    p = u(d),
                    m = o[p] / 2 - s[p] / 2,
                    h = "x" === d;
                switch (i(t)) {
                    case "top":
                        r = {
                            x: c,
                            y: o.y - s.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: c,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        r = {
                            x: o.x + o.width,
                            y: f
                        };
                        break;
                    case "left":
                        r = {
                            x: o.x - s.width,
                            y: f
                        };
                        break;
                    default:
                        r = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (l(t)) {
                    case "start":
                        r[d] -= m * (n && h ? -1 : 1);
                        break;
                    case "end":
                        r[d] += m * (n && h ? -1 : 1)
                }
                return r
            }
            let c = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: l
                } = n, a = await (null == l.isRTL ? void 0 : l.isRTL(t)), u = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: c,
                    y: f
                } = s(u, r, a), d = r, p = {}, m = 0;
                for (let n = 0; n < i.length; n++) {
                    let {
                        name: h,
                        fn: g
                    } = i[n], {
                        x: v,
                        y: y,
                        data: w,
                        reset: b
                    } = await g({
                        x: c,
                        y: f,
                        initialPlacement: r,
                        placement: d,
                        strategy: o,
                        middlewareData: p,
                        rects: u,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    c = null != v ? v : c, f = null != y ? y : f, p = { ...p,
                        [h]: { ...p[h],
                            ...w
                        }
                    }, b && m <= 50 && (m++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (u = !0 === b.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : b.rects), {
                        x: c,
                        y: f
                    } = s(u, d, a)), n = -1)
                }
                return {
                    x: c,
                    y: f,
                    placement: d,
                    strategy: o,
                    middlewareData: p
                }
            };

            function f(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function d(e) {
                return { ...e,
                    top: e.y,
                    left: e.x,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                }
            }
            async function p(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: o,
                    platform: i,
                    rects: l,
                    elements: a,
                    strategy: u
                } = e, {
                    boundary: s = "clippingAncestors",
                    rootBoundary: c = "viewport",
                    elementContext: p = "floating",
                    altBoundary: m = !1,
                    padding: h = 0
                } = t, g = f(h), v = a[m ? "floating" === p ? "reference" : "floating" : p], y = d(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(v))) || n ? v : v.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                    boundary: s,
                    rootBoundary: c,
                    strategy: u
                })), w = d(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: "floating" === p ? { ...l.floating,
                        x: r,
                        y: o
                    } : l.reference,
                    offsetParent: await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)),
                    strategy: u
                }) : l[p]);
                return {
                    top: y.top - w.top + g.top,
                    bottom: w.bottom - y.bottom + g.bottom,
                    left: y.left - w.left + g.left,
                    right: w.right - y.right + g.right
                }
            }
            let m = Math.min,
                h = Math.max,
                g = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            element: n,
                            padding: r = 0
                        } = null != e ? e : {}, {
                            x: o,
                            y: i,
                            placement: s,
                            rects: c,
                            platform: d
                        } = t;
                        if (null == n) return {};
                        let p = f(r),
                            g = {
                                x: o,
                                y: i
                            },
                            v = a(s),
                            y = l(s),
                            w = u(v),
                            b = await d.getDimensions(n),
                            x = "y" === v ? "top" : "left",
                            E = "y" === v ? "bottom" : "right",
                            R = c.reference[w] + c.reference[v] - g[v] - c.floating[w],
                            A = g[v] - c.reference[v],
                            P = await (null == d.getOffsetParent ? void 0 : d.getOffsetParent(n)),
                            C = P ? "y" === v ? P.clientHeight || 0 : P.clientWidth || 0 : 0;
                        0 === C && (C = c.floating[w]);
                        let L = p[x],
                            S = C - b[w] - p[E],
                            T = C / 2 - b[w] / 2 + (R / 2 - A / 2),
                            O = h(L, m(T, S)),
                            W = ("start" === y ? p[x] : p[E]) > 0 && T !== O && c.reference[w] <= c.floating[w];
                        return {
                            [v]: g[v] - (W ? T < L ? L - T : S - T : 0),
                            data: {
                                [v]: O,
                                centerOffset: T - O
                            }
                        }
                    }
                }),
                v = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

            function y(e) {
                return e.replace(/left|right|bottom|top/g, e => v[e])
            }
            let w = {
                start: "end",
                end: "start"
            };

            function b(e) {
                return e.replace(/start|end/g, e => w[e])
            }
            let x = ["top", "right", "bottom", "left"];

            function E(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function R(e) {
                return x.some(t => e[t] >= 0)
            }
            x.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
            let A = function(e) {
                let {
                    strategy: t = "referenceHidden",
                    ...n
                } = void 0 === e ? {} : e;
                return {
                    name: "hide",
                    async fn(e) {
                        let {
                            rects: r
                        } = e;
                        switch (t) {
                            case "referenceHidden":
                                {
                                    let t = E(await p(e, { ...n,
                                        elementContext: "reference"
                                    }), r.reference);
                                    return {
                                        data: {
                                            referenceHiddenOffsets: t,
                                            referenceHidden: R(t)
                                        }
                                    }
                                }
                            case "escaped":
                                {
                                    let t = E(await p(e, { ...n,
                                        altBoundary: !0
                                    }), r.floating);
                                    return {
                                        data: {
                                            escapedOffsets: t,
                                            escaped: R(t)
                                        }
                                    }
                                }
                            default:
                                return {}
                        }
                    }
                }
            };

            function P(e) {
                return "x" === e ? "y" : "x"
            }

            function C(e) {
                return e && e.document && e.location && e.alert && e.setInterval
            }

            function L(e) {
                if (null == e) return window;
                if (!C(e)) {
                    let t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function S(e) {
                return L(e).getComputedStyle(e)
            }

            function T(e) {
                return C(e) ? "" : e ? (e.nodeName || "").toLowerCase() : ""
            }

            function O() {
                let e = navigator.userAgentData;
                return null != e && e.brands ? e.brands.map(e => e.brand + "/" + e.version).join(" ") : navigator.userAgent
            }

            function W(e) {
                return e instanceof L(e).HTMLElement
            }

            function D(e) {
                return e instanceof L(e).Element
            }

            function H(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof L(e).ShadowRoot || e instanceof ShadowRoot)
            }

            function k(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r
                } = S(e);
                return /auto|scroll|overlay|hidden/.test(t + r + n)
            }

            function M(e) {
                let t = /firefox/i.test(O()),
                    n = S(e);
                return "none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || ["transform", "perspective"].includes(n.willChange) || t && "filter" === n.willChange || t && !!n.filter && "none" !== n.filter
            }

            function F() {
                return !/^((?!chrome|android).)*safari/i.test(O())
            }
            let N = Math.min,
                $ = Math.max,
                z = Math.round;

            function B(e, t, n) {
                var r, o, i, l;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let a = e.getBoundingClientRect(),
                    u = 1,
                    s = 1;
                t && W(e) && (u = e.offsetWidth > 0 && z(a.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && z(a.height) / e.offsetHeight || 1);
                let c = D(e) ? L(e) : window,
                    f = !F() && n,
                    d = (a.left + (f && null != (r = null == (o = c.visualViewport) ? void 0 : o.offsetLeft) ? r : 0)) / u,
                    p = (a.top + (f && null != (i = null == (l = c.visualViewport) ? void 0 : l.offsetTop) ? i : 0)) / s,
                    m = a.width / u,
                    h = a.height / s;
                return {
                    width: m,
                    height: h,
                    top: p,
                    right: d + m,
                    bottom: p + h,
                    left: d,
                    x: d,
                    y: p
                }
            }

            function V(e) {
                return ((e instanceof L(e).Node ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function _(e) {
                return D(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function I(e) {
                return B(V(e)).left + _(e).scrollLeft
            }

            function j(e) {
                return "html" === T(e) ? e : e.assignedSlot || e.parentNode || (H(e) ? e.host : null) || V(e)
            }

            function K(e) {
                return W(e) && "fixed" !== getComputedStyle(e).position ? e.offsetParent : null
            }

            function Y(e) {
                let t = L(e),
                    n = K(e);
                for (; n && ["table", "td", "th"].includes(T(n)) && "static" === getComputedStyle(n).position;) n = K(n);
                return n && ("html" === T(n) || "body" === T(n) && "static" === getComputedStyle(n).position && !M(n)) ? t : n || function(e) {
                    let t = j(e);
                    for (H(t) && (t = t.host); W(t) && !["html", "body"].includes(T(t));) {
                        if (M(t)) return t;
                        t = t.parentNode
                    }
                    return null
                }(e) || t
            }

            function X(e) {
                if (W(e)) return {
                    width: e.offsetWidth,
                    height: e.offsetHeight
                };
                let t = B(e);
                return {
                    width: t.width,
                    height: t.height
                }
            }

            function Z(e, t) {
                var n;
                void 0 === t && (t = []);
                let r = function e(t) {
                        let n = j(t);
                        return ["html", "body", "#document"].includes(T(n)) ? t.ownerDocument.body : W(n) && k(n) ? n : e(n)
                    }(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = L(r),
                    l = o ? [i].concat(i.visualViewport || [], k(r) ? r : []) : r,
                    a = t.concat(l);
                return o ? a : a.concat(Z(l))
            }

            function U(e, t, n) {
                return "viewport" === t ? d(function(e, t) {
                    let n = L(e),
                        r = V(e),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        l = r.clientHeight,
                        a = 0,
                        u = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        let e = F();
                        (e || !e && "fixed" === t) && (a = o.offsetLeft, u = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: u
                    }
                }(e, n)) : D(t) ? function(e, t) {
                    let n = B(e, !1, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft;
                    return {
                        top: r,
                        left: o,
                        x: o,
                        y: r,
                        right: o + e.clientWidth,
                        bottom: r + e.clientHeight,
                        width: e.clientWidth,
                        height: e.clientHeight
                    }
                }(t, n) : d(function(e) {
                    var t;
                    let n = V(e),
                        r = _(e),
                        o = null == (t = e.ownerDocument) ? void 0 : t.body,
                        i = $(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        l = $(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        a = -r.scrollLeft + I(e),
                        u = -r.scrollTop;
                    return "rtl" === S(o || n).direction && (a += $(n.clientWidth, o ? o.clientWidth : 0) - i), {
                        width: i,
                        height: l,
                        x: a,
                        y: u
                    }
                }(V(e)))
            }
            let q = {
                getClippingRect: function(e) {
                    let {
                        element: t,
                        boundary: n,
                        rootBoundary: r,
                        strategy: o
                    } = e, i = [..."clippingAncestors" === n ? function(e) {
                        let t = Z(e),
                            n = ["absolute", "fixed"].includes(S(e).position) && W(e) ? Y(e) : e;
                        return D(n) ? t.filter(e => D(e) && function(e, t) {
                            let n = null == t.getRootNode ? void 0 : t.getRootNode();
                            if (e.contains(t)) return !0;
                            if (n && H(n)) {
                                let n = t;
                                do {
                                    if (n && e === n) return !0;
                                    n = n.parentNode || n.host
                                } while (n)
                            }
                            return !1
                        }(e, n) && "body" !== T(e)) : []
                    }(t) : [].concat(n), r], l = i[0], a = i.reduce((e, n) => {
                        let r = U(t, n, o);
                        return e.top = $(r.top, e.top), e.right = N(r.right, e.right), e.bottom = N(r.bottom, e.bottom), e.left = $(r.left, e.left), e
                    }, U(t, l, o));
                    return {
                        width: a.right - a.left,
                        height: a.bottom - a.top,
                        x: a.left,
                        y: a.top
                    }
                },
                convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                    let {
                        rect: t,
                        offsetParent: n,
                        strategy: r
                    } = e, o = W(n), i = V(n);
                    if (n === i) return t;
                    let l = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        a = {
                            x: 0,
                            y: 0
                        };
                    if ((o || !o && "fixed" !== r) && (("body" !== T(n) || k(i)) && (l = _(n)), W(n))) {
                        let e = B(n, !0);
                        a.x = e.x + n.clientLeft, a.y = e.y + n.clientTop
                    }
                    return { ...t,
                        x: t.x - l.scrollLeft + a.x,
                        y: t.y - l.scrollTop + a.y
                    }
                },
                isElement: D,
                getDimensions: X,
                getOffsetParent: Y,
                getDocumentElement: V,
                getElementRects: e => {
                    let {
                        reference: t,
                        floating: n,
                        strategy: r
                    } = e;
                    return {
                        reference: function(e, t, n) {
                            let r = W(t),
                                o = V(t),
                                i = B(e, r && function(e) {
                                    let t = B(e);
                                    return z(t.width) !== e.offsetWidth || z(t.height) !== e.offsetHeight
                                }(t), "fixed" === n),
                                l = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                a = {
                                    x: 0,
                                    y: 0
                                };
                            if (r || !r && "fixed" !== n) {
                                if (("body" !== T(t) || k(o)) && (l = _(t)), W(t)) {
                                    let e = B(t, !0);
                                    a.x = e.x + t.clientLeft, a.y = e.y + t.clientTop
                                } else o && (a.x = I(o))
                            }
                            return {
                                x: i.left + l.scrollLeft - a.x,
                                y: i.top + l.scrollTop - a.y,
                                width: i.width,
                                height: i.height
                            }
                        }(t, Y(n), r),
                        floating: { ...X(n),
                            x: 0,
                            y: 0
                        }
                    }
                },
                getClientRects: e => Array.from(e.getClientRects()),
                isRTL: e => "rtl" === S(e).direction
            };

            function G(e, t, n, r) {
                void 0 === r && (r = {});
                let {
                    ancestorScroll: o = !0,
                    ancestorResize: i = !0,
                    elementResize: l = !0,
                    animationFrame: a = !1
                } = r, u = o && !a, s = i && !a, c = u || s ? [...D(e) ? Z(e) : [], ...Z(t)] : [];
                c.forEach(e => {
                    u && e.addEventListener("scroll", n, {
                        passive: !0
                    }), s && e.addEventListener("resize", n)
                });
                let f, d = null;
                if (l) {
                    let r = !0;
                    d = new ResizeObserver(() => {
                        r || n(), r = !1
                    }), D(e) && !a && d.observe(e), d.observe(t)
                }
                let p = a ? B(e) : null;
                return a && function t() {
                    let r = B(e);
                    p && (r.x !== p.x || r.y !== p.y || r.width !== p.width || r.height !== p.height) && n(), p = r, f = requestAnimationFrame(t)
                }(), n(), () => {
                    var e;
                    c.forEach(e => {
                        u && e.removeEventListener("scroll", n), s && e.removeEventListener("resize", n)
                    }), null == (e = d) || e.disconnect(), d = null, a && cancelAnimationFrame(f)
                }
            }
            let J = (e, t, n) => c(e, t, {
                platform: q,
                ...n
            });
            var Q = n(63730),
                ee = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
            let et = e => {
                let {
                    element: t,
                    padding: n
                } = e;
                return {
                    name: "arrow",
                    options: e,
                    fn(e) {
                        if (Object.prototype.hasOwnProperty.call(t, "current")) {
                            if (null != t.current) return g({
                                element: t.current,
                                padding: n
                            }).fn(e)
                        } else if (t) return g({
                            element: t,
                            padding: n
                        }).fn(e);
                        return {}
                    }
                }
            };
            var en = n(600056);
            let er = (0, o.forwardRef)((e, t) => {
                let {
                    children: n,
                    width: i = 10,
                    height: l = 5,
                    ...a
                } = e;
                return (0, o.createElement)(en.WV.svg, (0, r.Z)({}, a, {
                    ref: t,
                    width: i,
                    height: l,
                    viewBox: "0 0 30 10",
                    preserveAspectRatio: "none"
                }), e.asChild ? n : (0, o.createElement)("polygon", {
                    points: "0,0 30,0 15,10"
                }))
            });
            var eo = n(305878),
                ei = n(345094),
                el = n(150544),
                ea = n(279677);
            let eu = "Popper",
                [es, ec] = (0, ei.b)(eu),
                [ef, ed] = es(eu),
                ep = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: i,
                        ...l
                    } = e, a = ed("PopperAnchor", n), u = (0, o.useRef)(null), s = (0, eo.e)(t, u);
                    return (0, o.useEffect)(() => {
                        a.onAnchorChange((null == i ? void 0 : i.current) || u.current)
                    }), i ? null : (0, o.createElement)(en.WV.div, (0, r.Z)({}, l, {
                        ref: s
                    }))
                }),
                em = "PopperContent",
                [eh, eg] = es(em),
                [ev, ey] = es(em, {
                    hasParent: !1,
                    positionUpdateFns: new Set
                }),
                ew = (0, o.forwardRef)((e, t) => {
                    var n, r, s, c, f, d, g, v, w, x, E, R, C;
                    let {
                        __scopePopper: L,
                        side: S = "bottom",
                        sideOffset: T = 0,
                        align: O = "center",
                        alignOffset: W = 0,
                        arrowPadding: D = 0,
                        collisionBoundary: H = [],
                        collisionPadding: k = 0,
                        sticky: M = "partial",
                        hideWhenDetached: F = !1,
                        avoidCollisions: N = !0,
                        onPlaced: $,
                        ...z
                    } = e, B = ed(em, L), [V, _] = (0, o.useState)(null), I = (0, eo.e)(t, e => _(e)), [j, K] = (0, o.useState)(null), Y = function(e) {
                        let [t, n] = (0, o.useState)(void 0);
                        return (0, ea.b)(() => {
                            if (e) {
                                n({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let r, o;
                                    if (!Array.isArray(t) || !t.length) return;
                                    let i = t[0];
                                    if ("borderBoxSize" in i) {
                                        let e = i.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        r = t.inlineSize, o = t.blockSize
                                    } else r = e.offsetWidth, o = e.offsetHeight;
                                    n({
                                        width: r,
                                        height: o
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            n(void 0)
                        }, [e]), t
                    }(j), X = null !== (n = null == Y ? void 0 : Y.width) && void 0 !== n ? n : 0, Z = null !== (r = null == Y ? void 0 : Y.height) && void 0 !== r ? r : 0, U = "number" == typeof k ? k : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...k
                    }, q = Array.isArray(H) ? H : [H], er = q.length > 0, ei = {
                        padding: U,
                        boundary: q.filter(eR),
                        altBoundary: er
                    }, {
                        reference: eu,
                        floating: es,
                        strategy: ec,
                        x: ef,
                        y: ep,
                        placement: eg,
                        middlewareData: ew,
                        update: eb
                    } = function(e) {
                        let {
                            middleware: t,
                            placement: n = "bottom",
                            strategy: r = "absolute",
                            whileElementsMounted: i
                        } = void 0 === e ? {} : e, l = o.useRef(null), a = o.useRef(null), u = function(e) {
                            let t = o.useRef(e);
                            return ee(() => {
                                t.current = e
                            }), t
                        }(i), s = o.useRef(null), [c, f] = o.useState({
                            x: null,
                            y: null,
                            strategy: r,
                            placement: n,
                            middlewareData: {}
                        }), [d, p] = o.useState(t);
                        ! function e(t, n) {
                            let r, o, i;
                            if (t === n) return !0;
                            if (typeof t != typeof n) return !1;
                            if ("function" == typeof t && t.toString() === n.toString()) return !0;
                            if (t && n && "object" == typeof t) {
                                if (Array.isArray(t)) {
                                    if ((r = t.length) != n.length) return !1;
                                    for (o = r; 0 != o--;)
                                        if (!e(t[o], n[o])) return !1;
                                    return !0
                                }
                                if ((r = (i = Object.keys(t)).length) !== Object.keys(n).length) return !1;
                                for (o = r; 0 != o--;)
                                    if (!Object.prototype.hasOwnProperty.call(n, i[o])) return !1;
                                for (o = r; 0 != o--;) {
                                    let r = i[o];
                                    if (("_owner" !== r || !t.$$typeof) && !e(t[r], n[r])) return !1
                                }
                                return !0
                            }
                            return t != t && n != n
                        }(null == d ? void 0 : d.map(e => {
                            let {
                                options: t
                            } = e;
                            return t
                        }), null == t ? void 0 : t.map(e => {
                            let {
                                options: t
                            } = e;
                            return t
                        })) && p(t);
                        let m = o.useCallback(() => {
                            l.current && a.current && J(l.current, a.current, {
                                middleware: d,
                                placement: n,
                                strategy: r
                            }).then(e => {
                                h.current && Q.flushSync(() => {
                                    f(e)
                                })
                            })
                        }, [d, n, r]);
                        ee(() => {
                            h.current && m()
                        }, [m]);
                        let h = o.useRef(!1);
                        ee(() => (h.current = !0, () => {
                            h.current = !1
                        }), []);
                        let g = o.useCallback(() => {
                                if ("function" == typeof s.current && (s.current(), s.current = null), l.current && a.current) {
                                    if (u.current) {
                                        let e = u.current(l.current, a.current, m);
                                        s.current = e
                                    } else m()
                                }
                            }, [m, u]),
                            v = o.useCallback(e => {
                                l.current = e, g()
                            }, [g]),
                            y = o.useCallback(e => {
                                a.current = e, g()
                            }, [g]),
                            w = o.useMemo(() => ({
                                reference: l,
                                floating: a
                            }), []);
                        return o.useMemo(() => ({ ...c,
                            update: m,
                            refs: w,
                            reference: v,
                            floating: y
                        }), [c, m, w, v, y])
                    }({
                        strategy: "fixed",
                        placement: S + ("center" !== O ? "-" + O : ""),
                        whileElementsMounted: G,
                        middleware: [eA(), {
                            name: "offset",
                            options: w = {
                                mainAxis: T + Z,
                                alignmentAxis: W
                            },
                            async fn(e) {
                                let {
                                    x: t,
                                    y: n
                                } = e, r = await async function(e, t) {
                                    let {
                                        placement: n,
                                        platform: r,
                                        elements: o
                                    } = e, u = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), s = i(n), c = l(n), f = "x" === a(n), d = ["left", "top"].includes(s) ? -1 : 1, p = u && f ? -1 : 1, m = "function" == typeof t ? t(e) : t, {
                                        mainAxis: h,
                                        crossAxis: g,
                                        alignmentAxis: v
                                    } = "number" == typeof m ? {
                                        mainAxis: m,
                                        crossAxis: 0,
                                        alignmentAxis: null
                                    } : {
                                        mainAxis: 0,
                                        crossAxis: 0,
                                        alignmentAxis: null,
                                        ...m
                                    };
                                    return c && "number" == typeof v && (g = "end" === c ? -1 * v : v), f ? {
                                        x: g * p,
                                        y: h * d
                                    } : {
                                        x: h * d,
                                        y: g * p
                                    }
                                }(e, w);
                                return {
                                    x: t + r.x,
                                    y: n + r.y,
                                    data: r
                                }
                            }
                        }, N ? {
                            name: "shift",
                            options: E = {
                                mainAxis: !0,
                                crossAxis: !1,
                                limiter: "partial" === M ? (void 0 === x && (x = {}), {
                                    options: x,
                                    fn(e) {
                                        let {
                                            x: t,
                                            y: n,
                                            placement: r,
                                            rects: o,
                                            middlewareData: l
                                        } = e, {
                                            offset: u = 0,
                                            mainAxis: s = !0,
                                            crossAxis: c = !0
                                        } = x, f = {
                                            x: t,
                                            y: n
                                        }, d = a(r), p = P(d), m = f[d], h = f[p], g = "function" == typeof u ? u({ ...o,
                                            placement: r
                                        }) : u, v = "number" == typeof g ? {
                                            mainAxis: g,
                                            crossAxis: 0
                                        } : {
                                            mainAxis: 0,
                                            crossAxis: 0,
                                            ...g
                                        };
                                        if (s) {
                                            let e = "y" === d ? "height" : "width",
                                                t = o.reference[d] - o.floating[e] + v.mainAxis,
                                                n = o.reference[d] + o.reference[e] - v.mainAxis;
                                            m < t ? m = t : m > n && (m = n)
                                        }
                                        if (c) {
                                            var y, w, b, E;
                                            let e = "y" === d ? "width" : "height",
                                                t = ["top", "left"].includes(i(r)),
                                                n = o.reference[p] - o.floating[e] + (t && null != (y = null == (w = l.offset) ? void 0 : w[p]) ? y : 0) + (t ? 0 : v.crossAxis),
                                                a = o.reference[p] + o.reference[e] + (t ? 0 : null != (b = null == (E = l.offset) ? void 0 : E[p]) ? b : 0) - (t ? v.crossAxis : 0);
                                            h < n ? h = n : h > a && (h = a)
                                        }
                                        return {
                                            [d]: m,
                                            [p]: h
                                        }
                                    }
                                }) : void 0,
                                ...ei
                            },
                            async fn(e) {
                                let {
                                    x: t,
                                    y: n,
                                    placement: r
                                } = e, {
                                    mainAxis: o = !0,
                                    crossAxis: l = !1,
                                    limiter: u = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: n
                                            } = e;
                                            return {
                                                x: t,
                                                y: n
                                            }
                                        }
                                    },
                                    ...s
                                } = E, c = {
                                    x: t,
                                    y: n
                                }, f = await p(e, s), d = a(i(r)), g = P(d), v = c[d], y = c[g];
                                if (o) {
                                    let e = "y" === d ? "bottom" : "right";
                                    v = h(v + f["y" === d ? "top" : "left"], m(v, v - f[e]))
                                }
                                l && (y = h(y + f["y" === g ? "top" : "left"], m(y, y - f["y" === g ? "bottom" : "right"])));
                                let w = u.fn({ ...e,
                                    [d]: v,
                                    [g]: y
                                });
                                return { ...w,
                                    data: {
                                        x: w.x - t,
                                        y: w.y - n
                                    }
                                }
                            }
                        } : void 0, j ? et({
                            element: j,
                            padding: D
                        }) : void 0, N ? {
                            name: "flip",
                            options: R = { ...ei
                            },
                            async fn(e) {
                                var t, n, r, o;
                                let {
                                    placement: s,
                                    middlewareData: c,
                                    rects: f,
                                    initialPlacement: d,
                                    platform: m,
                                    elements: h
                                } = e, {
                                    mainAxis: g = !0,
                                    crossAxis: v = !0,
                                    fallbackPlacements: w,
                                    fallbackStrategy: x = "bestFit",
                                    flipAlignment: E = !0,
                                    ...A
                                } = R, P = i(s), C = w || (P !== d && E ? function(e) {
                                    let t = y(e);
                                    return [b(e), t, b(t)]
                                }(d) : [y(d)]), L = [d, ...C], S = await p(e, A), T = [], O = (null == (t = c.flip) ? void 0 : t.overflows) || [];
                                if (g && T.push(S[P]), v) {
                                    let {
                                        main: e,
                                        cross: t
                                    } = function(e, t, n) {
                                        void 0 === n && (n = !1);
                                        let r = l(e),
                                            o = a(e),
                                            i = u(o),
                                            s = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                        return t.reference[i] > t.floating[i] && (s = y(s)), {
                                            main: s,
                                            cross: y(s)
                                        }
                                    }(s, f, await (null == m.isRTL ? void 0 : m.isRTL(h.floating)));
                                    T.push(S[e], S[t])
                                }
                                if (O = [...O, {
                                        placement: s,
                                        overflows: T
                                    }], !T.every(e => e <= 0)) {
                                    let e = (null != (n = null == (r = c.flip) ? void 0 : r.index) ? n : 0) + 1,
                                        t = L[e];
                                    if (t) return {
                                        data: {
                                            index: e,
                                            overflows: O
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let i = "bottom";
                                    switch (x) {
                                        case "bestFit":
                                            {
                                                let e = null == (o = O.map(e => [e, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : o[0].placement;e && (i = e);
                                                break
                                            }
                                        case "initialPlacement":
                                            i = d
                                    }
                                    if (s !== i) return {
                                        reset: {
                                            placement: i
                                        }
                                    }
                                }
                                return {}
                            }
                        } : void 0, {
                            name: "size",
                            options: C = { ...ei,
                                apply: ({
                                    elements: e,
                                    availableWidth: t,
                                    availableHeight: n
                                }) => {
                                    e.floating.style.setProperty("--radix-popper-available-width", `${t}px`), e.floating.style.setProperty("--radix-popper-available-height", `${n}px`)
                                }
                            },
                            async fn(e) {
                                let t, n;
                                let {
                                    placement: r,
                                    rects: o,
                                    platform: a,
                                    elements: u
                                } = e, {
                                    apply: s,
                                    ...c
                                } = C, f = await p(e, c), d = i(r), m = l(r);
                                "top" === d || "bottom" === d ? (t = d, n = m === (await (null == a.isRTL ? void 0 : a.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (n = d, t = "end" === m ? "top" : "bottom");
                                let g = h(f.left, 0),
                                    v = h(f.right, 0),
                                    y = h(f.top, 0),
                                    w = h(f.bottom, 0),
                                    b = {
                                        availableHeight: o.floating.height - (["left", "right"].includes(r) ? 2 * (0 !== y || 0 !== w ? y + w : h(f.top, f.bottom)) : f[t]),
                                        availableWidth: o.floating.width - (["top", "bottom"].includes(r) ? 2 * (0 !== g || 0 !== v ? g + v : h(f.left, f.right)) : f[n])
                                    },
                                    x = await a.getDimensions(u.floating);
                                null == s || s({ ...e,
                                    ...b
                                });
                                let E = await a.getDimensions(u.floating);
                                return x.width !== E.width || x.height !== E.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }, eP({
                            arrowWidth: X,
                            arrowHeight: Z
                        }), F ? A({
                            strategy: "referenceHidden"
                        }) : void 0].filter(eE)
                    });
                    (0, ea.b)(() => {
                        eu(B.anchor)
                    }, [eu, B.anchor]);
                    let ex = null !== ef && null !== ep,
                        [eL, eS] = eC(eg),
                        eT = (0, el.W)($);
                    (0, ea.b)(() => {
                        ex && (null == eT || eT())
                    }, [ex, eT]);
                    let eO = null === (s = ew.arrow) || void 0 === s ? void 0 : s.x,
                        eW = null === (c = ew.arrow) || void 0 === c ? void 0 : c.y,
                        eD = (null === (f = ew.arrow) || void 0 === f ? void 0 : f.centerOffset) !== 0,
                        [eH, ek] = (0, o.useState)();
                    (0, ea.b)(() => {
                        V && ek(window.getComputedStyle(V).zIndex)
                    }, [V]);
                    let {
                        hasParent: eM,
                        positionUpdateFns: eF
                    } = ey(em, L), eN = !eM;
                    (0, o.useLayoutEffect)(() => {
                        if (!eN) return eF.add(eb), () => {
                            eF.delete(eb)
                        }
                    }, [eN, eF, eb]), (0, ea.b)(() => {
                        eN && ex && Array.from(eF).reverse().forEach(e => requestAnimationFrame(e))
                    }, [eN, ex, eF]);
                    let e$ = {
                        "data-side": eL,
                        "data-align": eS,
                        ...z,
                        ref: I,
                        style: { ...z.style,
                            animation: ex ? void 0 : "none",
                            opacity: null !== (d = ew.hide) && void 0 !== d && d.referenceHidden ? 0 : void 0
                        }
                    };
                    return (0, o.createElement)("div", {
                        ref: es,
                        "data-radix-popper-content-wrapper": "",
                        style: {
                            position: ec,
                            left: 0,
                            top: 0,
                            transform: ex ? `translate3d(${Math.round(ef)}px, ${Math.round(ep)}px, 0)` : "translate3d(0, -200%, 0)",
                            minWidth: "max-content",
                            zIndex: eH,
                            "--radix-popper-transform-origin": [null === (g = ew.transformOrigin) || void 0 === g ? void 0 : g.x, null === (v = ew.transformOrigin) || void 0 === v ? void 0 : v.y].join(" ")
                        },
                        dir: e.dir
                    }, (0, o.createElement)(eh, {
                        scope: L,
                        placedSide: eL,
                        onArrowChange: K,
                        arrowX: eO,
                        arrowY: eW,
                        shouldHideArrow: eD
                    }, eN ? (0, o.createElement)(ev, {
                        scope: L,
                        hasParent: !0,
                        positionUpdateFns: eF
                    }, (0, o.createElement)(en.WV.div, e$)) : (0, o.createElement)(en.WV.div, e$)))
                }),
                eb = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                ex = (0, o.forwardRef)(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...i
                    } = e, l = eg("PopperArrow", n), a = eb[l.placedSide];
                    return (0, o.createElement)("span", {
                        ref: l.onArrowChange,
                        style: {
                            position: "absolute",
                            left: l.arrowX,
                            top: l.arrowY,
                            [a]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[l.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[l.placedSide],
                            visibility: l.shouldHideArrow ? "hidden" : void 0
                        }
                    }, (0, o.createElement)(er, (0, r.Z)({}, i, {
                        ref: t,
                        style: { ...i.style,
                            display: "block"
                        }
                    })))
                });

            function eE(e) {
                return void 0 !== e
            }

            function eR(e) {
                return null !== e
            }
            let eA = () => ({
                    name: "anchorCssProperties",
                    fn(e) {
                        let {
                            rects: t,
                            elements: n
                        } = e, {
                            width: r,
                            height: o
                        } = t.reference;
                        return n.floating.style.setProperty("--radix-popper-anchor-width", `${r}px`), n.floating.style.setProperty("--radix-popper-anchor-height", `${o}px`), {}
                    }
                }),
                eP = e => ({
                    name: "transformOrigin",
                    options: e,
                    fn(t) {
                        var n, r, o, i, l;
                        let {
                            placement: a,
                            rects: u,
                            middlewareData: s
                        } = t, c = (null === (n = s.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0, f = c ? 0 : e.arrowWidth, d = c ? 0 : e.arrowHeight, [p, m] = eC(a), h = {
                            start: "0%",
                            center: "50%",
                            end: "100%"
                        }[m], g = (null !== (r = null === (o = s.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r ? r : 0) + f / 2, v = (null !== (i = null === (l = s.arrow) || void 0 === l ? void 0 : l.y) && void 0 !== i ? i : 0) + d / 2, y = "", w = "";
                        return "bottom" === p ? (y = c ? h : `${g}px`, w = `${-d}px`) : "top" === p ? (y = c ? h : `${g}px`, w = `${u.floating.height+d}px`) : "right" === p ? (y = `${-d}px`, w = c ? h : `${v}px`) : "left" === p && (y = `${u.floating.width+d}px`, w = c ? h : `${v}px`), {
                            data: {
                                x: y,
                                y: w
                            }
                        }
                    }
                });

            function eC(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            let eL = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [r, i] = (0, o.useState)(null);
                    return (0, o.createElement)(ef, {
                        scope: t,
                        anchor: r,
                        onAnchorChange: i
                    }, n)
                },
                eS = ep,
                eT = ew,
                eO = ex
        },
        668778: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return a
                }
            });
            var r = n(397364),
                o = n(652983),
                i = n(63730),
                l = n(600056);
            let a = (0, o.forwardRef)((e, t) => {
                var n;
                let {
                    container: a = null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body,
                    ...u
                } = e;
                return a ? i.createPortal((0, o.createElement)(l.WV.div, (0, r.Z)({}, u, {
                    ref: t
                })), a) : null
            })
        },
        600056: function(e, t, n) {
            n.d(t, {
                WV: function() {
                    return a
                },
                jH: function() {
                    return u
                }
            });
            var r = n(397364),
                o = n(652983),
                i = n(63730),
                l = n(806428);
            let a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                let n = (0, o.forwardRef)((e, n) => {
                    let {
                        asChild: i,
                        ...a
                    } = e, u = i ? l.g7 : t;
                    return (0, o.useEffect)(() => {
                        window[Symbol.for("radix-ui")] = !0
                    }, []), (0, o.createElement)(u, (0, r.Z)({}, a, {
                        ref: n
                    }))
                });
                return n.displayName = `Primitive.${t}`, { ...e,
                    [t]: n
                }
            }, {});

            function u(e, t) {
                e && (0, i.flushSync)(() => e.dispatchEvent(t))
            }
        }
    }
]);