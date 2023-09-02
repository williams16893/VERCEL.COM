"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [14056], {
        297427: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return r
                }
            });

            function r(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (null == e || e(r), !1 === n || !r.defaultPrevented) return null == t ? void 0 : t(r)
                }
            }
        },
        417874: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return i
                },
                e: function() {
                    return a
                }
            });
            var r = n(652983);

            function i(...e) {
                return t => e.forEach(e => {
                    "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
            }

            function a(...e) {
                return r.useCallback(i(...e), e)
            }
        },
        471105: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return a
                },
                k: function() {
                    return i
                }
            });
            var r = n(652983);

            function i(e, t) {
                let n = r.createContext(t);

                function i(e) {
                    let {
                        children: t,
                        ...i
                    } = e, a = r.useMemo(() => i, Object.values(i));
                    return r.createElement(n.Provider, {
                        value: a
                    }, t)
                }
                return i.displayName = e + "Provider", [i, function(i) {
                    let a = r.useContext(n);
                    if (a) return a;
                    if (void 0 !== t) return t;
                    throw Error(`\`${i}\` must be used within \`${e}\``)
                }]
            }

            function a(e, t = []) {
                let n = [],
                    i = () => {
                        let t = n.map(e => r.createContext(e));
                        return function(n) {
                            let i = (null == n ? void 0 : n[e]) || t;
                            return r.useMemo(() => ({
                                [`__scope${e}`]: { ...n,
                                    [e]: i
                                }
                            }), [n, i])
                        }
                    };
                return i.scopeName = e, [function(t, i) {
                    let a = r.createContext(i),
                        c = n.length;

                    function o(t) {
                        let {
                            scope: n,
                            children: i,
                            ...o
                        } = t, s = (null == n ? void 0 : n[e][c]) || a, u = r.useMemo(() => o, Object.values(o));
                        return r.createElement(s.Provider, {
                            value: u
                        }, i)
                    }
                    return n = [...n, i], o.displayName = t + "Provider", [o, function(n, o) {
                        let s = (null == o ? void 0 : o[e][c]) || a,
                            u = r.useContext(s);
                        if (u) return u;
                        if (void 0 !== i) return i;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                        let n = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let i = n.reduce((t, {
                                useScope: n,
                                scopeName: r
                            }) => ({ ...t,
                                ...n(e)[`__scope${r}`]
                            }), {});
                            return r.useMemo(() => ({
                                [`__scope${t.scopeName}`]: i
                            }), [i])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(i, ...t)]
            }
        },
        709033: function(e, t, n) {
            n.d(t, {
                VY: function() {
                    return ec
                },
                aV: function() {
                    return ea
                },
                h_: function() {
                    return ei
                },
                fC: function() {
                    return er
                },
                Dx: function() {
                    return eo
                }
            });
            var r = n(932017),
                i = n(456617),
                a = n(488802),
                c = n(652983),
                o = n(118998),
                s = n(290236),
                u = (0, n(784500)._)(),
                l = function() {},
                f = c.forwardRef(function(e, t) {
                    var n = c.useRef(null),
                        r = c.useState({
                            onScrollCapture: l,
                            onWheelCapture: l,
                            onTouchMoveCapture: l
                        }),
                        i = r[0],
                        o = r[1],
                        f = e.forwardProps,
                        h = e.children,
                        d = e.className,
                        p = e.removeScrollBar,
                        m = e.enabled,
                        g = e.shards,
                        v = e.sideCar,
                        y = e.noIsolation,
                        b = e.inert,
                        R = e.allowPinchZoom,
                        O = e.as,
                        j = void 0 === O ? "div" : O,
                        P = (0, a._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        w = (0, s.q)([n, t]),
                        S = (0, a.pi)((0, a.pi)({}, P), i);
                    return c.createElement(c.Fragment, null, m && c.createElement(v, {
                        sideCar: u,
                        removeScrollBar: p,
                        shards: g,
                        noIsolation: y,
                        inert: b,
                        setCallbacks: o,
                        allowPinchZoom: !!R,
                        lockRef: n
                    }), f ? c.cloneElement(c.Children.only(h), (0, a.pi)((0, a.pi)({}, S), {
                        ref: w
                    })) : c.createElement(j, (0, a.pi)({}, S, {
                        className: d,
                        ref: w
                    }), h))
                });
            f.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, f.classNames = {
                fullWidth: o.zi,
                zeroRight: o.pF
            };
            var h = n(374274),
                d = n(457855),
                p = n(447608),
                m = !1;
            if ("undefined" != typeof window) try {
                var g = Object.defineProperty({}, "passive", {
                    get: function() {
                        return m = !0, !0
                    }
                });
                window.addEventListener("test", g, g), window.removeEventListener("test", g, g)
            } catch (e) {
                m = !1
            }
            var v = !!m && {
                    passive: !1
                },
                y = function(e) {
                    var t = window.getComputedStyle(e);
                    return "hidden" !== t.overflowY && !(t.overflowY === t.overflowX && "visible" === t.overflowY)
                },
                b = function(e) {
                    var t = window.getComputedStyle(e);
                    return "hidden" !== t.overflowX && !(t.overflowY === t.overflowX && "visible" === t.overflowX)
                },
                R = function(e, t) {
                    var n = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), O(e, n)) {
                            var r = j(e, n);
                            if (r[1] > r[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== document.body);
                    return !1
                },
                O = function(e, t) {
                    return "v" === e ? y(t) : b(t)
                },
                j = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                P = function(e, t, n, r, i) {
                    var a, c = (a = window.getComputedStyle(t).direction, "h" === e && "rtl" === a ? -1 : 1),
                        o = c * r,
                        s = n.target,
                        u = t.contains(s),
                        l = !1,
                        f = o > 0,
                        h = 0,
                        d = 0;
                    do {
                        var p = j(e, s),
                            m = p[0],
                            g = p[1] - p[2] - c * m;
                        (m || g) && O(e, s) && (h += g, d += m), s = s.parentNode
                    } while (!u && s !== document.body || u && (t.contains(s) || t === s));
                    return f && (i && 0 === h || !i && o > h) ? l = !0 : !f && (i && 0 === d || !i && -o > d) && (l = !0), l
                },
                w = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                S = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                E = function(e) {
                    return e && "current" in e ? e.current : e
                },
                F = 0,
                x = [],
                _ = (0, h.L)(u, function(e) {
                    var t = c.useRef([]),
                        n = c.useRef([0, 0]),
                        r = c.useRef(),
                        i = c.useState(F++)[0],
                        o = c.useState(function() {
                            return (0, p.Ws)()
                        })[0],
                        s = c.useRef(e);
                    c.useEffect(function() {
                        s.current = e
                    }, [e]), c.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(i));
                            var t = (0, a.ev)([e.lockRef.current], (e.shards || []).map(E), !0).filter(Boolean);
                            return t.forEach(function(e) {
                                    return e.classList.add("allow-interactivity-".concat(i))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(i)), t.forEach(function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(i))
                                    })
                                }
                        }
                    }, [e.inert, e.lockRef.current, e.shards]);
                    var u = c.useCallback(function(e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !s.current.allowPinchZoom;
                            var i, a = w(e),
                                c = n.current,
                                o = "deltaX" in e ? e.deltaX : c[0] - a[0],
                                u = "deltaY" in e ? e.deltaY : c[1] - a[1],
                                l = e.target,
                                f = Math.abs(o) > Math.abs(u) ? "h" : "v";
                            if ("touches" in e && "h" === f && "range" === l.type) return !1;
                            var h = R(f, l);
                            if (!h) return !0;
                            if (h ? i = f : (i = "v" === f ? "h" : "v", h = R(f, l)), !h) return !1;
                            if (!r.current && "changedTouches" in e && (o || u) && (r.current = i), !i) return !0;
                            var d = r.current || i;
                            return P(d, t, e, "h" === d ? o : u, !0)
                        }, []),
                        l = c.useCallback(function(e) {
                            if (x.length && x[x.length - 1] === o) {
                                var n = "deltaY" in e ? S(e) : w(e),
                                    r = t.current.filter(function(t) {
                                        var r;
                                        return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                    })[0];
                                if (r && r.should) {
                                    e.preventDefault();
                                    return
                                }
                                if (!r) {
                                    var i = (s.current.shards || []).map(E).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (i.length > 0 ? u(e, i[0]) : !s.current.noIsolation) && e.preventDefault()
                                }
                            }
                        }, []),
                        f = c.useCallback(function(e, n, r, i) {
                            var a = {
                                name: e,
                                delta: n,
                                target: r,
                                should: i
                            };
                            t.current.push(a), setTimeout(function() {
                                t.current = t.current.filter(function(e) {
                                    return e !== a
                                })
                            }, 1)
                        }, []),
                        h = c.useCallback(function(e) {
                            n.current = w(e), r.current = void 0
                        }, []),
                        m = c.useCallback(function(t) {
                            f(t.type, S(t), t.target, u(t, e.lockRef.current))
                        }, []),
                        g = c.useCallback(function(t) {
                            f(t.type, w(t), t.target, u(t, e.lockRef.current))
                        }, []);
                    c.useEffect(function() {
                        return x.push(o), e.setCallbacks({
                                onScrollCapture: m,
                                onWheelCapture: m,
                                onTouchMoveCapture: g
                            }), document.addEventListener("wheel", l, v), document.addEventListener("touchmove", l, v), document.addEventListener("touchstart", h, v),
                            function() {
                                x = x.filter(function(e) {
                                    return e !== o
                                }), document.removeEventListener("wheel", l, v), document.removeEventListener("touchmove", l, v), document.removeEventListener("touchstart", h, v)
                            }
                    }, []);
                    var y = e.removeScrollBar,
                        b = e.inert;
                    return c.createElement(c.Fragment, null, b ? c.createElement(o, {
                        styles: "\n  .block-interactivity-".concat(i, " {pointer-events: none;}\n  .allow-interactivity-").concat(i, " {pointer-events: all;}\n")
                    }) : null, y ? c.createElement(d.jp, {
                        gapMode: "margin"
                    }) : null)
                }),
                T = c.forwardRef(function(e, t) {
                    return c.createElement(f, (0, a.pi)({}, e, {
                        ref: t,
                        sideCar: _
                    }))
                });
            T.classNames = f.classNames;
            var C = n(187996),
                D = n(125115),
                N = n(959386),
                I = n(418715),
                k = n(311794),
                A = n(911273),
                H = n(269946),
                L = n(678e3),
                W = n(471105),
                Q = n(417874),
                U = n(297427),
                M = n(518249);
            let [Z, B] = (0, W.b)("Dialog"), [q, $] = Z("Dialog"), V = c.forwardRef((e, t) => {
                let {
                    forceMount: n,
                    ...r
                } = e, i = $("DialogOverlay", e.__scopeDialog);
                return i.modal ? c.createElement(N.z, {
                    present: n || i.open
                }, c.createElement(z, (0, M.Z)({}, r, {
                    ref: t
                }))) : null
            }), z = c.forwardRef((e, t) => {
                let {
                    __scopeDialog: n,
                    ...i
                } = e, a = $("DialogOverlay", n);
                return c.createElement(T, {
                    as: r.g7,
                    allowPinchZoom: a.allowPinchZoom,
                    shards: [a.contentRef]
                }, c.createElement(D.W.div, (0, M.Z)({
                    "data-state": ee(a.open)
                }, i, {
                    ref: t,
                    style: {
                        pointerEvents: "auto",
                        ...i.style
                    }
                })))
            }), J = c.forwardRef((e, t) => {
                let {
                    forceMount: n,
                    ...r
                } = e, i = $("DialogContent", e.__scopeDialog);
                return c.createElement(N.z, {
                    present: n || i.open
                }, i.modal ? c.createElement(K, (0, M.Z)({}, r, {
                    ref: t
                })) : c.createElement(Y, (0, M.Z)({}, r, {
                    ref: t
                })))
            }), K = c.forwardRef((e, t) => {
                let n = $("DialogContent", e.__scopeDialog),
                    r = c.useRef(null),
                    a = (0, Q.e)(t, n.contentRef, r);
                return c.useEffect(() => {
                    let e = r.current;
                    if (e) return (0, i.R)(e)
                }, []), c.createElement(X, (0, M.Z)({}, e, {
                    ref: a,
                    trapFocus: n.open,
                    disableOutsidePointerEvents: !0,
                    onCloseAutoFocus: (0, U.M)(e.onCloseAutoFocus, e => {
                        var t;
                        e.preventDefault(), null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                    }),
                    onPointerDownOutside: (0, U.M)(e.onPointerDownOutside, e => {
                        let t = e.detail.originalEvent,
                            n = 0 === t.button && !0 === t.ctrlKey;
                        (2 === t.button || n) && e.preventDefault()
                    }),
                    onFocusOutside: (0, U.M)(e.onFocusOutside, e => e.preventDefault())
                }))
            }), Y = c.forwardRef((e, t) => {
                let n = $("DialogContent", e.__scopeDialog),
                    r = c.useRef(!1);
                return c.createElement(X, (0, M.Z)({}, e, {
                    ref: t,
                    trapFocus: !1,
                    disableOutsidePointerEvents: !1,
                    onCloseAutoFocus: t => {
                        var i, a;
                        null === (i = e.onCloseAutoFocus) || void 0 === i || i.call(e, t), t.defaultPrevented || (r.current || null === (a = n.triggerRef.current) || void 0 === a || a.focus(), t.preventDefault()), r.current = !1
                    },
                    onInteractOutside: t => {
                        var i, a;
                        null === (i = e.onInteractOutside) || void 0 === i || i.call(e, t), t.defaultPrevented || (r.current = !0);
                        let c = t.target;
                        (null === (a = n.triggerRef.current) || void 0 === a ? void 0 : a.contains(c)) && t.preventDefault()
                    }
                }))
            }), X = c.forwardRef((e, t) => {
                let {
                    __scopeDialog: n,
                    trapFocus: r,
                    onOpenAutoFocus: i,
                    onCloseAutoFocus: a,
                    ...o
                } = e, s = $("DialogContent", n), u = c.useRef(null), l = (0, Q.e)(t, u);
                return (0, C.EW)(), c.createElement(c.Fragment, null, c.createElement(k.M, {
                    asChild: !0,
                    loop: !0,
                    trapped: r,
                    onMountAutoFocus: i,
                    onUnmountAutoFocus: a
                }, c.createElement(A.XB, (0, M.Z)({
                    role: "dialog",
                    id: s.contentId,
                    "aria-describedby": s.descriptionId,
                    "aria-labelledby": s.titleId,
                    "data-state": ee(s.open)
                }, o, {
                    ref: l,
                    onDismiss: () => s.onOpenChange(!1)
                }))), !1)
            }), G = c.forwardRef((e, t) => {
                let {
                    __scopeDialog: n,
                    ...r
                } = e, i = $("DialogTitle", n);
                return c.createElement(D.W.h2, (0, M.Z)({
                    id: i.titleId
                }, r, {
                    ref: t
                }))
            });

            function ee(e) {
                return e ? "open" : "closed"
            }
            let [et, en] = (0, W.k)("DialogTitleWarning", {
                contentName: "DialogContent",
                titleName: "DialogTitle",
                docsSlug: "dialog"
            }), er = e => {
                let {
                    __scopeDialog: t,
                    children: n,
                    open: r,
                    defaultOpen: i,
                    onOpenChange: a,
                    modal: o = !0,
                    allowPinchZoom: s
                } = e, u = c.useRef(null), l = c.useRef(null), [f = !1, h] = (0, H.T)({
                    prop: r,
                    defaultProp: i,
                    onChange: a
                });
                return c.createElement(q, {
                    scope: t,
                    triggerRef: u,
                    contentRef: l,
                    contentId: (0, L.M)(),
                    titleId: (0, L.M)(),
                    descriptionId: (0, L.M)(),
                    open: f,
                    onOpenChange: h,
                    onOpenToggle: c.useCallback(() => h(e => !e), [h]),
                    modal: o,
                    allowPinchZoom: s
                }, n)
            }, ei = e => {
                let {
                    __scopeDialog: t,
                    forceMount: n,
                    children: r,
                    container: i
                } = e, a = $("DialogPortal", t);
                return c.createElement(c.Fragment, null, c.Children.map(r, e => c.createElement(N.z, {
                    present: n || a.open
                }, c.createElement(I.c, {
                    asChild: !0,
                    container: i
                }, e))))
            }, ea = V, ec = J, eo = G
        },
        911273: function(e, t, n) {
            n.d(t, {
                XB: function() {
                    return d
                }
            });
            var r = n(731767),
                i = n(652983),
                a = n(403611);
            let c, o = 0;
            var s = n(417874),
                u = n(125115),
                l = n(297427),
                f = n(397364);
            let h = i.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                d = i.forwardRef((e, t) => {
                    let {
                        disableOutsidePointerEvents: n = !1,
                        onEscapeKeyDown: d,
                        onPointerDownOutside: g,
                        onFocusOutside: v,
                        onInteractOutside: y,
                        onDismiss: b,
                        ...R
                    } = e, O = i.useContext(h), [j, P] = i.useState(null), [, w] = i.useState({}), S = (0, s.e)(t, e => P(e)), E = Array.from(O.layers), [F] = [...O.layersWithOutsidePointerEventsDisabled].slice(-1), x = E.indexOf(F), _ = j ? E.indexOf(j) : -1, T = O.layersWithOutsidePointerEventsDisabled.size > 0, C = _ >= x, D = function(e) {
                        let t = (0, r.W)(e),
                            n = i.useRef(!1);
                        return i.useEffect(() => {
                            let e = e => {
                                    e.target && !n.current && m("dismissableLayer.pointerDownOutside", t, {
                                        originalEvent: e
                                    }), n.current = !1
                                },
                                r = window.setTimeout(() => {
                                    document.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(r), document.removeEventListener("pointerdown", e)
                            }
                        }, [t]), {
                            onPointerDownCapture: () => n.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...O.branches].some(e => e.contains(t));
                        C && !n && (null == g || g(e), null == y || y(e), e.defaultPrevented || null == b || b())
                    }), N = function(e) {
                        let t = (0, r.W)(e),
                            n = i.useRef(!1);
                        return i.useEffect(() => {
                            let e = e => {
                                e.target && !n.current && m("dismissableLayer.focusOutside", t, {
                                    originalEvent: e
                                })
                            };
                            return document.addEventListener("focusin", e), () => document.removeEventListener("focusin", e)
                        }, [t]), {
                            onFocusCapture: () => n.current = !0,
                            onBlurCapture: () => n.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...O.branches].some(e => e.contains(t)) || (null == v || v(e), null == y || y(e), e.defaultPrevented || null == b || b())
                    });
                    return function(e) {
                            let t = (0, r.W)(e);
                            i.useEffect(() => {
                                let e = e => {
                                    "Escape" === e.key && t(e)
                                };
                                return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                            }, [t])
                        }(e => {
                            _ === O.layers.size - 1 && (null == d || d(e), e.defaultPrevented || null == b || b())
                        }),
                        function({
                            disabled: e
                        }) {
                            let t = i.useRef(!1);
                            (0, a.b)(() => {
                                if (e) {
                                    function n() {
                                        0 == --o && (document.body.style.pointerEvents = c)
                                    }

                                    function r(e) {
                                        t.current = "mouse" !== e.pointerType
                                    }
                                    return 0 === o && (c = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", o++, document.addEventListener("pointerup", r), () => {
                                        t.current ? document.addEventListener("click", n, {
                                            once: !0
                                        }) : n(), document.removeEventListener("pointerup", r)
                                    }
                                }
                            }, [e])
                        }({
                            disabled: n
                        }), i.useEffect(() => {
                            j && (n && O.layersWithOutsidePointerEventsDisabled.add(j), O.layers.add(j), p())
                        }, [j, n, O]), i.useEffect(() => () => {
                            j && (O.layers.delete(j), O.layersWithOutsidePointerEventsDisabled.delete(j), p())
                        }, [j, O]), i.useEffect(() => {
                            let e = () => w({});
                            return document.addEventListener("dismissableLayer.update", e), () => document.removeEventListener("dismissableLayer.update", e)
                        }, []), i.createElement(u.W.div, (0, f.Z)({}, R, {
                            ref: S,
                            style: {
                                pointerEvents: T ? C ? "auto" : "none" : void 0,
                                ...e.style
                            },
                            onFocusCapture: (0, l.M)(e.onFocusCapture, N.onFocusCapture),
                            onBlurCapture: (0, l.M)(e.onBlurCapture, N.onBlurCapture),
                            onPointerDownCapture: (0, l.M)(e.onPointerDownCapture, D.onPointerDownCapture)
                        }))
                });

            function p() {
                let e = new Event("dismissableLayer.update");
                document.dispatchEvent(e)
            }

            function m(e, t, n) {
                let r = n.originalEvent.target,
                    i = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: n
                    });
                return t && r.addEventListener(e, t, {
                    once: !0
                }), !r.dispatchEvent(i)
            }
        },
        187996: function(e, t, n) {
            n.d(t, {
                EW: function() {
                    return a
                }
            });
            var r = n(652983);
            let i = 0;

            function a() {
                r.useEffect(() => {
                    var e, t;
                    let n = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : c()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : c()), i++, () => {
                        1 === i && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), i--
                    }
                }, [])
            }

            function c() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
        },
        311794: function(e, t, n) {
            let r;
            n.d(t, {
                M: function() {
                    return l
                }
            });
            var i = n(731767),
                a = n(125115),
                c = n(417874),
                o = n(652983),
                s = n(397364);
            let u = {
                    bubbles: !1,
                    cancelable: !0
                },
                l = o.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: l,
                        onUnmountAutoFocus: m,
                        ...g
                    } = e, [v, y] = o.useState(null), b = (0, i.W)(l), R = (0, i.W)(m), O = o.useRef(null), j = (0, c.e)(t, e => y(e)), P = o.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    o.useEffect(() => {
                        if (r) {
                            function e(e) {
                                if (P.paused || !v) return;
                                let t = e.target;
                                v.contains(t) ? O.current = t : d(O.current, {
                                    select: !0
                                })
                            }

                            function t(e) {
                                !P.paused && v && (v.contains(e.relatedTarget) || d(O.current, {
                                    select: !0
                                }))
                            }
                            return document.addEventListener("focusin", e), document.addEventListener("focusout", t), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t)
                            }
                        }
                    }, [r, v, P.paused]), o.useEffect(() => {
                        if (v) {
                            p.add(P);
                            let e = document.activeElement;
                            if (!v.contains(e)) {
                                let t = new Event("focusScope.autoFocusOnMount", u);
                                v.addEventListener("focusScope.autoFocusOnMount", b), v.dispatchEvent(t), t.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let n = document.activeElement;
                                    for (let r of e)
                                        if (d(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(f(v).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && d(v))
                            }
                            return () => {
                                v.removeEventListener("focusScope.autoFocusOnMount", b), setTimeout(() => {
                                    let t = new Event("focusScope.autoFocusOnUnmount", u);
                                    v.addEventListener("focusScope.autoFocusOnUnmount", R), v.dispatchEvent(t), t.defaultPrevented || d(null != e ? e : document.body, {
                                        select: !0
                                    }), v.removeEventListener("focusScope.autoFocusOnUnmount", R), p.remove(P)
                                }, 0)
                            }
                        }
                    }, [v, b, R, P]);
                    let w = o.useCallback(e => {
                        if (!n && !r || P.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            i = document.activeElement;
                        if (t && i) {
                            let t = e.currentTarget,
                                [r, a] = function(e) {
                                    let t = f(e),
                                        n = h(t, e),
                                        r = h(t.reverse(), e);
                                    return [n, r]
                                }(t);
                            r && a ? e.shiftKey || i !== a ? e.shiftKey && i === r && (e.preventDefault(), n && d(a, {
                                select: !0
                            })) : (e.preventDefault(), n && d(r, {
                                select: !0
                            })) : i === t && e.preventDefault()
                        }
                    }, [n, r, P.paused]);
                    return o.createElement(a.W.div, (0, s.Z)({
                        tabIndex: -1
                    }, g, {
                        ref: j,
                        onKeyDown: w
                    }))
                });

            function f(e) {
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

            function h(e, t) {
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

            function d(e, {
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
            let p = (r = [], {
                add(e) {
                    let t = r[0];
                    e !== t && (null == t || t.pause()), (r = m(r, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (r = m(r, e))[0]) || void 0 === t || t.resume()
                }
            });

            function m(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
        },
        678e3: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return s
                }
            });
            var r, i = n(403611),
                a = n(652983);
            let c = (r || (r = n.t(a, 2)))["useId".toString()] || (() => {}),
                o = 0;

            function s(e) {
                let [t, n] = a.useState(c());
                return (0, i.b)(() => {
                    e || n(e => null != e ? e : String(o++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        418715: function(e, t, n) {
            n.d(t, {
                c: function() {
                    return u
                },
                h_: function() {
                    return s
                }
            });
            var r = n(125115),
                i = n(403611),
                a = n(63730),
                c = n(652983),
                o = n(397364);
            let s = c.forwardRef((e, t) => {
                    var n, s;
                    let {
                        containerRef: u,
                        style: l,
                        ...f
                    } = e, h = null !== (n = null == u ? void 0 : u.current) && void 0 !== n ? n : null == globalThis || null === (s = globalThis.document) || void 0 === s ? void 0 : s.body, [, d] = c.useState({});
                    return (0, i.b)(() => {
                        d({})
                    }, []), h ? a.createPortal(c.createElement(r.W.div, (0, o.Z)({
                        "data-radix-portal": ""
                    }, f, {
                        ref: t,
                        style: h === document.body ? {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 2147483647,
                            ...l
                        } : void 0
                    })), h) : null
                }),
                u = c.forwardRef((e, t) => {
                    var n;
                    let {
                        container: i = null == globalThis || null === (n = globalThis.document) || void 0 === n ? void 0 : n.body,
                        ...s
                    } = e;
                    return i ? a.createPortal(c.createElement(r.W.div, (0, o.Z)({}, s, {
                        ref: t
                    })), i) : null
                })
        },
        959386: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return c
                }
            });
            var r = n(403611),
                i = n(417874),
                a = n(652983);
            let c = e => {
                let {
                    present: t,
                    children: n
                } = e, c = function(e) {
                    var t;
                    let [n, i] = a.useState(), c = a.useRef({}), s = a.useRef(e), u = a.useRef("none"), l = e ? "mounted" : "unmounted", [f, h] = (t = {
                        mounted: {
                            UNMOUNT: "unmounted",
                            ANIMATION_OUT: "unmountSuspended"
                        },
                        unmountSuspended: {
                            MOUNT: "mounted",
                            ANIMATION_END: "unmounted"
                        },
                        unmounted: {
                            MOUNT: "mounted"
                        }
                    }, a.useReducer((e, n) => {
                        let r = t[e][n];
                        return null != r ? r : e
                    }, l));
                    return a.useEffect(() => {
                        let e = o(c.current);
                        u.current = "mounted" === f ? e : "none"
                    }, [f]), (0, r.b)(() => {
                        let t = c.current,
                            n = s.current;
                        if (n !== e) {
                            let r = u.current,
                                i = o(t);
                            e ? h("MOUNT") : "none" === i || "none" === (null == t ? void 0 : t.display) ? h("UNMOUNT") : h(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
                        }
                    }, [e, h]), (0, r.b)(() => {
                        if (n) {
                            let e = e => {
                                    let t = o(c.current).includes(e.animationName);
                                    e.target === n && t && h("ANIMATION_END")
                                },
                                t = e => {
                                    e.target === n && (u.current = o(c.current))
                                };
                            return n.addEventListener("animationstart", t), n.addEventListener("animationcancel", e), n.addEventListener("animationend", e), () => {
                                n.removeEventListener("animationstart", t), n.removeEventListener("animationcancel", e), n.removeEventListener("animationend", e)
                            }
                        }
                        h("ANIMATION_END")
                    }, [n, h]), {
                        isPresent: ["mounted", "unmountSuspended"].includes(f),
                        ref: a.useCallback(e => {
                            e && (c.current = getComputedStyle(e)), i(e)
                        }, [])
                    }
                }(t), s = "function" == typeof n ? n({
                    present: c.isPresent
                }) : a.Children.only(n), u = (0, i.e)(c.ref, s.ref);
                return "function" == typeof n || c.isPresent ? a.cloneElement(s, {
                    ref: u
                }) : null
            };

            function o(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            c.displayName = "Presence"
        },
        125115: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return c
                }
            });
            var r = n(932017),
                i = n(652983),
                a = n(397364);
            let c = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => ({ ...e,
                [t]: i.forwardRef((e, n) => {
                    let {
                        asChild: c,
                        ...o
                    } = e, s = c ? r.g7 : t;
                    return i.useEffect(() => {
                        window[Symbol.for("radix-ui")] = !0
                    }, []), i.createElement(s, (0, a.Z)({}, o, {
                        ref: n
                    }))
                })
            }), {})
        },
        932017: function(e, t, n) {
            n.d(t, {
                g7: function() {
                    return c
                }
            });
            var r = n(417874),
                i = n(652983),
                a = n(397364);
            let c = i.forwardRef((e, t) => {
                let {
                    children: n,
                    ...r
                } = e;
                return i.Children.toArray(n).some(u) ? i.createElement(i.Fragment, null, i.Children.map(n, e => u(e) ? i.createElement(o, (0, a.Z)({}, r, {
                    ref: t
                }), e.props.children) : e)) : i.createElement(o, (0, a.Z)({}, r, {
                    ref: t
                }), n)
            });
            c.displayName = "Slot";
            let o = i.forwardRef((e, t) => {
                let {
                    children: n,
                    ...a
                } = e;
                return i.isValidElement(n) ? i.cloneElement(n, { ... function(e, t) {
                        let n = { ...t
                        };
                        for (let r in t) {
                            let i = e[r],
                                a = t[r];
                            /^on[A-Z]/.test(r) ? n[r] = (...e) => {
                                null == a || a(...e), null == i || i(...e)
                            } : "style" === r ? n[r] = { ...i,
                                ...a
                            } : "className" === r && (n[r] = [i, a].filter(Boolean).join(" "))
                        }
                        return { ...e,
                            ...n
                        }
                    }(a, n.props),
                    ref: (0, r.F)(t, n.ref)
                }) : i.Children.count(n) > 1 ? i.Children.only(null) : null
            });
            o.displayName = "SlotClone";
            let s = ({
                children: e
            }) => i.createElement(i.Fragment, null, e);

            function u(e) {
                return i.isValidElement(e) && e.type === s
            }
        },
        731767: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return i
                }
            });
            var r = n(652983);

            function i(e) {
                let t = r.useRef(e);
                return r.useEffect(() => {
                    t.current = e
                }), r.useMemo(() => (...e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
                }, [])
            }
        },
        269946: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return a
                }
            });
            var r = n(731767),
                i = n(652983);

            function a({
                prop: e,
                defaultProp: t,
                onChange: n = () => {}
            }) {
                let [a, c] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let n = i.useState(e),
                        [a] = n,
                        c = i.useRef(a),
                        o = (0, r.W)(t);
                    return i.useEffect(() => {
                        c.current !== a && (o(a), c.current = a)
                    }, [a, c, o]), n
                }({
                    defaultProp: t,
                    onChange: n
                }), o = void 0 !== e, s = o ? e : a, u = (0, r.W)(n);
                return [s, i.useCallback(t => {
                    if (o) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && u(n)
                    } else c(t)
                }, [o, e, c, u])]
            }
        },
        403611: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return i
                }
            });
            var r = n(652983);
            let i = (null == globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {}
        },
        361116: function(e, t, n) {
            var r = n(512999),
                i = n(219462),
                a = n(119099);

            function c(e, t, n) {
                return new r(e, t, n)
            }
            c.version = n(269348), c.AlgoliaSearchHelper = r, c.SearchParameters = i, c.SearchResults = a, e.exports = c
        },
        371986: function(e, t, n) {
            var r = n(24677);

            function i(e, t) {
                this.main = e, this.fn = t, this.lastResults = null
            }
            n(379551)(i, r), i.prototype.detach = function() {
                this.removeAllListeners(), this.main.detachDerivedHelper(this)
            }, i.prototype.getModifiedState = function(e) {
                return this.fn(e)
            }, e.exports = i
        },
        188753: function(e, t, n) {
            var r = n(206495),
                i = n(267726),
                a = n(896961),
                c = {
                    addRefinement: function(e, t, n) {
                        if (c.isRefined(e, t, n)) return e;
                        var i = "" + n,
                            a = e[t] ? e[t].concat(i) : [i],
                            o = {};
                        return o[t] = a, r({}, o, e)
                    },
                    removeRefinement: function(e, t, n) {
                        if (void 0 === n) return c.clearRefinement(e, function(e, n) {
                            return t === n
                        });
                        var r = "" + n;
                        return c.clearRefinement(e, function(e, n) {
                            return t === n && r === e
                        })
                    },
                    toggleRefinement: function(e, t, n) {
                        if (void 0 === n) throw Error("toggleRefinement should be used with a value");
                        return c.isRefined(e, t, n) ? c.removeRefinement(e, t, n) : c.addRefinement(e, t, n)
                    },
                    clearRefinement: function(e, t, n) {
                        if (void 0 === t) return a(e) ? {} : e;
                        if ("string" == typeof t) return i(e, [t]);
                        if ("function" == typeof t) {
                            var r = !1,
                                c = Object.keys(e).reduce(function(i, a) {
                                    var c = e[a] || [],
                                        o = c.filter(function(e) {
                                            return !t(e, a, n)
                                        });
                                    return o.length !== c.length && (r = !0), i[a] = o, i
                                }, {});
                            return r ? c : e
                        }
                    },
                    isRefined: function(e, t, n) {
                        var r = !!e[t] && e[t].length > 0;
                        return void 0 !== n && r ? -1 !== e[t].indexOf("" + n) : r
                    }
                };
            e.exports = c
        },
        219462: function(e, t, n) {
            var r = n(874543),
                i = n(206495),
                a = n(417158),
                c = n(515493),
                o = n(581797),
                s = n(267726),
                u = n(896961),
                l = n(476717),
                f = n(188753);

            function h(e, t) {
                return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every(function(e, n) {
                    return h(t[n], e)
                }) : e === t
            }

            function d(e) {
                var t = e ? d._parseNumbers(e) : {};
                void 0 === t.userToken || l(t.userToken) || console.warn("[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}"), this.facets = t.facets || [], this.disjunctiveFacets = t.disjunctiveFacets || [], this.hierarchicalFacets = t.hierarchicalFacets || [], this.facetsRefinements = t.facetsRefinements || {}, this.facetsExcludes = t.facetsExcludes || {}, this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}, this.numericRefinements = t.numericRefinements || {}, this.tagRefinements = t.tagRefinements || [], this.hierarchicalFacetsRefinements = t.hierarchicalFacetsRefinements || {};
                var n = this;
                Object.keys(t).forEach(function(e) {
                    var r = -1 !== d.PARAMETERS.indexOf(e),
                        i = void 0 !== t[e];
                    !r && i && (n[e] = t[e])
                })
            }
            d.PARAMETERS = Object.keys(new d), d._parseNumbers = function(e) {
                if (e instanceof d) return e;
                var t = {};
                if (["aroundPrecision", "aroundRadius", "getRankingInfo", "minWordSizefor2Typos", "minWordSizefor1Typo", "page", "maxValuesPerFacet", "distinct", "minimumAroundRadius", "hitsPerPage", "minProximity"].forEach(function(n) {
                        var r = e[n];
                        if ("string" == typeof r) {
                            var i = parseFloat(r);
                            t[n] = isNaN(i) ? r : i
                        }
                    }), Array.isArray(e.insideBoundingBox) && (t.insideBoundingBox = e.insideBoundingBox.map(function(e) {
                        return Array.isArray(e) ? e.map(function(e) {
                            return parseFloat(e)
                        }) : e
                    })), e.numericRefinements) {
                    var n = {};
                    Object.keys(e.numericRefinements).forEach(function(t) {
                        var r = e.numericRefinements[t] || {};
                        n[t] = {}, Object.keys(r).forEach(function(e) {
                            var i = r[e].map(function(e) {
                                return Array.isArray(e) ? e.map(function(e) {
                                    return "string" == typeof e ? parseFloat(e) : e
                                }) : "string" == typeof e ? parseFloat(e) : e
                            });
                            n[t][e] = i
                        })
                    }), t.numericRefinements = n
                }
                return r({}, e, t)
            }, d.make = function(e) {
                var t = new d(e);
                return (e.hierarchicalFacets || []).forEach(function(e) {
                    if (e.rootPath) {
                        var n = t.getHierarchicalRefinement(e.name);
                        n.length > 0 && 0 !== n[0].indexOf(e.rootPath) && (t = t.clearRefinements(e.name)), 0 === (n = t.getHierarchicalRefinement(e.name)).length && (t = t.toggleHierarchicalFacetRefinement(e.name, e.rootPath))
                    }
                }), t
            }, d.validate = function(e, t) {
                var n = t || {};
                return e.tagFilters && n.tagRefinements && n.tagRefinements.length > 0 ? Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.") : e.tagRefinements.length > 0 && n.tagFilters ? Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.") : e.numericFilters && n.numericRefinements && u(n.numericRefinements) ? Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : u(e.numericRefinements) && n.numericFilters ? Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : null
            }, d.prototype = {
                constructor: d,
                clearRefinements: function(e) {
                    var t = {
                        numericRefinements: this._clearNumericRefinements(e),
                        facetsRefinements: f.clearRefinement(this.facetsRefinements, e, "conjunctiveFacet"),
                        facetsExcludes: f.clearRefinement(this.facetsExcludes, e, "exclude"),
                        disjunctiveFacetsRefinements: f.clearRefinement(this.disjunctiveFacetsRefinements, e, "disjunctiveFacet"),
                        hierarchicalFacetsRefinements: f.clearRefinement(this.hierarchicalFacetsRefinements, e, "hierarchicalFacet")
                    };
                    return t.numericRefinements === this.numericRefinements && t.facetsRefinements === this.facetsRefinements && t.facetsExcludes === this.facetsExcludes && t.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && t.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements ? this : this.setQueryParameters(t)
                },
                clearTags: function() {
                    return void 0 === this.tagFilters && 0 === this.tagRefinements.length ? this : this.setQueryParameters({
                        tagFilters: void 0,
                        tagRefinements: []
                    })
                },
                setIndex: function(e) {
                    return e === this.index ? this : this.setQueryParameters({
                        index: e
                    })
                },
                setQuery: function(e) {
                    return e === this.query ? this : this.setQueryParameters({
                        query: e
                    })
                },
                setPage: function(e) {
                    return e === this.page ? this : this.setQueryParameters({
                        page: e
                    })
                },
                setFacets: function(e) {
                    return this.setQueryParameters({
                        facets: e
                    })
                },
                setDisjunctiveFacets: function(e) {
                    return this.setQueryParameters({
                        disjunctiveFacets: e
                    })
                },
                setHitsPerPage: function(e) {
                    return this.hitsPerPage === e ? this : this.setQueryParameters({
                        hitsPerPage: e
                    })
                },
                setTypoTolerance: function(e) {
                    return this.typoTolerance === e ? this : this.setQueryParameters({
                        typoTolerance: e
                    })
                },
                addNumericRefinement: function(e, t, n) {
                    var i = o(n);
                    if (this.isNumericRefined(e, t, i)) return this;
                    var a = r({}, this.numericRefinements);
                    return a[e] = r({}, a[e]), a[e][t] ? (a[e][t] = a[e][t].slice(), a[e][t].push(i)) : a[e][t] = [i], this.setQueryParameters({
                        numericRefinements: a
                    })
                },
                getConjunctiveRefinements: function(e) {
                    return this.isConjunctiveFacet(e) && this.facetsRefinements[e] || []
                },
                getDisjunctiveRefinements: function(e) {
                    return this.isDisjunctiveFacet(e) && this.disjunctiveFacetsRefinements[e] || []
                },
                getHierarchicalRefinement: function(e) {
                    return this.hierarchicalFacetsRefinements[e] || []
                },
                getExcludeRefinements: function(e) {
                    return this.isConjunctiveFacet(e) && this.facetsExcludes[e] || []
                },
                removeNumericRefinement: function(e, t, n) {
                    return void 0 !== n ? this.isNumericRefined(e, t, n) ? this.setQueryParameters({
                        numericRefinements: this._clearNumericRefinements(function(r, i) {
                            return i === e && r.op === t && h(r.val, o(n))
                        })
                    }) : this : void 0 !== t ? this.isNumericRefined(e, t) ? this.setQueryParameters({
                        numericRefinements: this._clearNumericRefinements(function(n, r) {
                            return r === e && n.op === t
                        })
                    }) : this : this.isNumericRefined(e) ? this.setQueryParameters({
                        numericRefinements: this._clearNumericRefinements(function(t, n) {
                            return n === e
                        })
                    }) : this
                },
                getNumericRefinements: function(e) {
                    return this.numericRefinements[e] || {}
                },
                getNumericRefinement: function(e, t) {
                    return this.numericRefinements[e] && this.numericRefinements[e][t]
                },
                _clearNumericRefinements: function(e) {
                    if (void 0 === e) return u(this.numericRefinements) ? {} : this.numericRefinements;
                    if ("string" == typeof e) return s(this.numericRefinements, [e]);
                    if ("function" == typeof e) {
                        var t = !1,
                            n = this.numericRefinements,
                            r = Object.keys(n).reduce(function(r, i) {
                                var a = n[i],
                                    c = {};
                                return Object.keys(a = a || {}).forEach(function(n) {
                                    var r = a[n] || [],
                                        o = [];
                                    r.forEach(function(t) {
                                        e({
                                            val: t,
                                            op: n
                                        }, i, "numeric") || o.push(t)
                                    }), o.length !== r.length && (t = !0), c[n] = o
                                }), r[i] = c, r
                            }, {});
                        return t ? r : this.numericRefinements
                    }
                },
                addFacet: function(e) {
                    return this.isConjunctiveFacet(e) ? this : this.setQueryParameters({
                        facets: this.facets.concat([e])
                    })
                },
                addDisjunctiveFacet: function(e) {
                    return this.isDisjunctiveFacet(e) ? this : this.setQueryParameters({
                        disjunctiveFacets: this.disjunctiveFacets.concat([e])
                    })
                },
                addHierarchicalFacet: function(e) {
                    if (this.isHierarchicalFacet(e.name)) throw Error("Cannot declare two hierarchical facets with the same name: `" + e.name + "`");
                    return this.setQueryParameters({
                        hierarchicalFacets: this.hierarchicalFacets.concat([e])
                    })
                },
                addFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw Error(e + " is not defined in the facets attribute of the helper configuration");
                    return f.isRefined(this.facetsRefinements, e, t) ? this : this.setQueryParameters({
                        facetsRefinements: f.addRefinement(this.facetsRefinements, e, t)
                    })
                },
                addExcludeRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw Error(e + " is not defined in the facets attribute of the helper configuration");
                    return f.isRefined(this.facetsExcludes, e, t) ? this : this.setQueryParameters({
                        facetsExcludes: f.addRefinement(this.facetsExcludes, e, t)
                    })
                },
                addDisjunctiveFacetRefinement: function(e, t) {
                    if (!this.isDisjunctiveFacet(e)) throw Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                    return f.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this : this.setQueryParameters({
                        disjunctiveFacetsRefinements: f.addRefinement(this.disjunctiveFacetsRefinements, e, t)
                    })
                },
                addTagRefinement: function(e) {
                    if (this.isTagRefined(e)) return this;
                    var t = {
                        tagRefinements: this.tagRefinements.concat(e)
                    };
                    return this.setQueryParameters(t)
                },
                removeFacet: function(e) {
                    return this.isConjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
                        facets: this.facets.filter(function(t) {
                            return t !== e
                        })
                    }) : this
                },
                removeDisjunctiveFacet: function(e) {
                    return this.isDisjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
                        disjunctiveFacets: this.disjunctiveFacets.filter(function(t) {
                            return t !== e
                        })
                    }) : this
                },
                removeHierarchicalFacet: function(e) {
                    return this.isHierarchicalFacet(e) ? this.clearRefinements(e).setQueryParameters({
                        hierarchicalFacets: this.hierarchicalFacets.filter(function(t) {
                            return t.name !== e
                        })
                    }) : this
                },
                removeFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw Error(e + " is not defined in the facets attribute of the helper configuration");
                    return f.isRefined(this.facetsRefinements, e, t) ? this.setQueryParameters({
                        facetsRefinements: f.removeRefinement(this.facetsRefinements, e, t)
                    }) : this
                },
                removeExcludeRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw Error(e + " is not defined in the facets attribute of the helper configuration");
                    return f.isRefined(this.facetsExcludes, e, t) ? this.setQueryParameters({
                        facetsExcludes: f.removeRefinement(this.facetsExcludes, e, t)
                    }) : this
                },
                removeDisjunctiveFacetRefinement: function(e, t) {
                    if (!this.isDisjunctiveFacet(e)) throw Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                    return f.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this.setQueryParameters({
                        disjunctiveFacetsRefinements: f.removeRefinement(this.disjunctiveFacetsRefinements, e, t)
                    }) : this
                },
                removeTagRefinement: function(e) {
                    if (!this.isTagRefined(e)) return this;
                    var t = {
                        tagRefinements: this.tagRefinements.filter(function(t) {
                            return t !== e
                        })
                    };
                    return this.setQueryParameters(t)
                },
                toggleRefinement: function(e, t) {
                    return this.toggleFacetRefinement(e, t)
                },
                toggleFacetRefinement: function(e, t) {
                    if (this.isHierarchicalFacet(e)) return this.toggleHierarchicalFacetRefinement(e, t);
                    if (this.isConjunctiveFacet(e)) return this.toggleConjunctiveFacetRefinement(e, t);
                    if (this.isDisjunctiveFacet(e)) return this.toggleDisjunctiveFacetRefinement(e, t);
                    throw Error("Cannot refine the undeclared facet " + e + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets")
                },
                toggleConjunctiveFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw Error(e + " is not defined in the facets attribute of the helper configuration");
                    return this.setQueryParameters({
                        facetsRefinements: f.toggleRefinement(this.facetsRefinements, e, t)
                    })
                },
                toggleExcludeFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw Error(e + " is not defined in the facets attribute of the helper configuration");
                    return this.setQueryParameters({
                        facetsExcludes: f.toggleRefinement(this.facetsExcludes, e, t)
                    })
                },
                toggleDisjunctiveFacetRefinement: function(e, t) {
                    if (!this.isDisjunctiveFacet(e)) throw Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                    return this.setQueryParameters({
                        disjunctiveFacetsRefinements: f.toggleRefinement(this.disjunctiveFacetsRefinements, e, t)
                    })
                },
                toggleHierarchicalFacetRefinement: function(e, t) {
                    if (!this.isHierarchicalFacet(e)) throw Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration");
                    var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),
                        r = {};
                    return void 0 !== this.hierarchicalFacetsRefinements[e] && this.hierarchicalFacetsRefinements[e].length > 0 && (this.hierarchicalFacetsRefinements[e][0] === t || 0 === this.hierarchicalFacetsRefinements[e][0].indexOf(t + n)) ? -1 === t.indexOf(n) ? r[e] = [] : r[e] = [t.slice(0, t.lastIndexOf(n))] : r[e] = [t], this.setQueryParameters({
                        hierarchicalFacetsRefinements: i({}, r, this.hierarchicalFacetsRefinements)
                    })
                },
                addHierarchicalFacetRefinement: function(e, t) {
                    if (this.isHierarchicalFacetRefined(e)) throw Error(e + " is already refined.");
                    if (!this.isHierarchicalFacet(e)) throw Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration.");
                    var n = {};
                    return n[e] = [t], this.setQueryParameters({
                        hierarchicalFacetsRefinements: i({}, n, this.hierarchicalFacetsRefinements)
                    })
                },
                removeHierarchicalFacetRefinement: function(e) {
                    if (!this.isHierarchicalFacetRefined(e)) return this;
                    var t = {};
                    return t[e] = [], this.setQueryParameters({
                        hierarchicalFacetsRefinements: i({}, t, this.hierarchicalFacetsRefinements)
                    })
                },
                toggleTagRefinement: function(e) {
                    return this.isTagRefined(e) ? this.removeTagRefinement(e) : this.addTagRefinement(e)
                },
                isDisjunctiveFacet: function(e) {
                    return this.disjunctiveFacets.indexOf(e) > -1
                },
                isHierarchicalFacet: function(e) {
                    return void 0 !== this.getHierarchicalFacetByName(e)
                },
                isConjunctiveFacet: function(e) {
                    return this.facets.indexOf(e) > -1
                },
                isFacetRefined: function(e, t) {
                    return !!this.isConjunctiveFacet(e) && f.isRefined(this.facetsRefinements, e, t)
                },
                isExcludeRefined: function(e, t) {
                    return !!this.isConjunctiveFacet(e) && f.isRefined(this.facetsExcludes, e, t)
                },
                isDisjunctiveFacetRefined: function(e, t) {
                    return !!this.isDisjunctiveFacet(e) && f.isRefined(this.disjunctiveFacetsRefinements, e, t)
                },
                isHierarchicalFacetRefined: function(e, t) {
                    if (!this.isHierarchicalFacet(e)) return !1;
                    var n = this.getHierarchicalRefinement(e);
                    return t ? -1 !== n.indexOf(t) : n.length > 0
                },
                isNumericRefined: function(e, t, n) {
                    if (void 0 === n && void 0 === t) return !!this.numericRefinements[e];
                    var r = this.numericRefinements[e] && void 0 !== this.numericRefinements[e][t];
                    if (void 0 === n || !r) return r;
                    var i = o(n),
                        a = void 0 !== c(this.numericRefinements[e][t], function(e) {
                            return h(e, i)
                        });
                    return r && a
                },
                isTagRefined: function(e) {
                    return -1 !== this.tagRefinements.indexOf(e)
                },
                getRefinedDisjunctiveFacets: function() {
                    var e = this,
                        t = a(Object.keys(this.numericRefinements).filter(function(t) {
                            return Object.keys(e.numericRefinements[t]).length > 0
                        }), this.disjunctiveFacets);
                    return Object.keys(this.disjunctiveFacetsRefinements).filter(function(t) {
                        return e.disjunctiveFacetsRefinements[t].length > 0
                    }).concat(t).concat(this.getRefinedHierarchicalFacets())
                },
                getRefinedHierarchicalFacets: function() {
                    var e = this;
                    return a(this.hierarchicalFacets.map(function(e) {
                        return e.name
                    }), Object.keys(this.hierarchicalFacetsRefinements).filter(function(t) {
                        return e.hierarchicalFacetsRefinements[t].length > 0
                    }))
                },
                getUnrefinedDisjunctiveFacets: function() {
                    var e = this.getRefinedDisjunctiveFacets();
                    return this.disjunctiveFacets.filter(function(t) {
                        return -1 === e.indexOf(t)
                    })
                },
                managedParameters: ["index", "facets", "disjunctiveFacets", "facetsRefinements", "hierarchicalFacets", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacetsRefinements"],
                getQueryParams: function() {
                    var e = this.managedParameters,
                        t = {},
                        n = this;
                    return Object.keys(this).forEach(function(r) {
                        var i = n[r]; - 1 === e.indexOf(r) && void 0 !== i && (t[r] = i)
                    }), t
                },
                setQueryParameter: function(e, t) {
                    if (this[e] === t) return this;
                    var n = {};
                    return n[e] = t, this.setQueryParameters(n)
                },
                setQueryParameters: function(e) {
                    if (!e) return this;
                    var t = d.validate(this, e);
                    if (t) throw t;
                    var n = this,
                        r = d._parseNumbers(e),
                        i = Object.keys(this).reduce(function(e, t) {
                            return e[t] = n[t], e
                        }, {}),
                        a = Object.keys(r).reduce(function(e, t) {
                            var n = void 0 !== e[t],
                                i = void 0 !== r[t];
                            return n && !i ? s(e, [t]) : (i && (e[t] = r[t]), e)
                        }, i);
                    return new this.constructor(a)
                },
                resetPage: function() {
                    return void 0 === this.page ? this : this.setPage(0)
                },
                _getHierarchicalFacetSortBy: function(e) {
                    return e.sortBy || ["isRefined:desc", "name:asc"]
                },
                _getHierarchicalFacetSeparator: function(e) {
                    return e.separator || " > "
                },
                _getHierarchicalRootPath: function(e) {
                    return e.rootPath || null
                },
                _getHierarchicalShowParentLevel: function(e) {
                    return "boolean" != typeof e.showParentLevel || e.showParentLevel
                },
                getHierarchicalFacetByName: function(e) {
                    return c(this.hierarchicalFacets, function(t) {
                        return t.name === e
                    })
                },
                getHierarchicalFacetBreadcrumb: function(e) {
                    if (!this.isHierarchicalFacet(e)) return [];
                    var t = this.getHierarchicalRefinement(e)[0];
                    if (!t) return [];
                    var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e));
                    return t.split(n).map(function(e) {
                        return e.trim()
                    })
                },
                toString: function() {
                    return JSON.stringify(this, null, 2)
                }
            }, e.exports = d
        },
        308346: function(e, t, n) {
            e.exports = function(e) {
                return function(t, n) {
                    var c = e.hierarchicalFacets[n],
                        u = e.hierarchicalFacetsRefinements[c.name] && e.hierarchicalFacetsRefinements[c.name][0] || "",
                        l = e._getHierarchicalFacetSeparator(c),
                        f = e._getHierarchicalRootPath(c),
                        h = e._getHierarchicalShowParentLevel(c),
                        d = a(e._getHierarchicalFacetSortBy(c)),
                        p = t.every(function(e) {
                            return e.exhaustive
                        }),
                        m = t;
                    return f && (m = t.slice(f.split(l).length)), m.reduce(function(e, t, n) {
                        var a = e;
                        if (n > 0) {
                            var c = 0;
                            for (a = e; c < n;) a = i(a && Array.isArray(a.data) ? a.data : [], function(e) {
                                return e.isRefined
                            }), c++
                        }
                        if (a) {
                            var p = Object.keys(t.data).map(function(e) {
                                return [e, t.data[e]]
                            }).filter(function(e) {
                                var t, n;
                                return t = e[0], n = a.path || f, (!f || 0 === t.indexOf(f) && f !== t) && (!f && -1 === t.indexOf(l) || f && t.split(l).length - f.split(l).length == 1 || -1 === t.indexOf(l) && -1 === u.indexOf(l) || 0 === u.indexOf(t) || 0 === t.indexOf(n + l) && (h || 0 === t.indexOf(u)))
                            });
                            a.data = r(p.map(function(e) {
                                var n, r, i, a, c = e[0];
                                return n = e[1], r = s(u), i = t.exhaustive, {
                                    name: (a = c.split(l))[a.length - 1].trim(),
                                    path: c,
                                    escapedValue: o(c),
                                    count: n,
                                    isRefined: r === c || 0 === r.indexOf(c + l),
                                    exhaustive: i,
                                    data: null
                                }
                            }), d[0], d[1])
                        }
                        return e
                    }, {
                        name: e.hierarchicalFacets[n].name,
                        count: null,
                        isRefined: !0,
                        path: null,
                        escapedValue: null,
                        exhaustive: p,
                        data: null
                    })
                }
            };
            var r = n(356019),
                i = n(515493),
                a = n(675075),
                c = n(553264),
                o = c.escapeFacetValue,
                s = c.unescapeFacetValue
        },
        119099: function(e, t, n) {
            var r = n(874543),
                i = n(206495),
                a = n(356019),
                c = n(388051),
                o = n(515493),
                s = n(632836),
                u = n(675075),
                l = n(553264),
                f = l.escapeFacetValue,
                h = l.unescapeFacetValue,
                d = n(308346);

            function p(e) {
                var t = {};
                return e.forEach(function(e, n) {
                    t[e] = n
                }), t
            }

            function m(e, t, n) {
                t && t[n] && (e.stats = t[n])
            }

            function g(e, t, n) {
                var a = t[0];
                this._rawResults = t;
                var u = this;
                Object.keys(a).forEach(function(e) {
                    u[e] = a[e]
                }), Object.keys(n || {}).forEach(function(e) {
                    u[e] = n[e]
                }), this.processingTimeMS = t.reduce(function(e, t) {
                    return void 0 === t.processingTimeMS ? e : e + t.processingTimeMS
                }, 0), this.disjunctiveFacets = [], this.hierarchicalFacets = e.hierarchicalFacets.map(function() {
                    return []
                }), this.facets = [];
                var l = e.getRefinedDisjunctiveFacets(),
                    f = p(e.facets),
                    g = p(e.disjunctiveFacets),
                    v = 1,
                    y = a.facets || {};
                Object.keys(y).forEach(function(t) {
                    var n = y[t],
                        r = o(e.hierarchicalFacets, function(e) {
                            return (e.attributes || []).indexOf(t) > -1
                        });
                    if (r) {
                        var i = r.attributes.indexOf(t),
                            c = s(e.hierarchicalFacets, function(e) {
                                return e.name === r.name
                            });
                        u.hierarchicalFacets[c][i] = {
                            attribute: t,
                            data: n,
                            exhaustive: a.exhaustiveFacetsCount
                        }
                    } else {
                        var l, h = -1 !== e.disjunctiveFacets.indexOf(t),
                            d = -1 !== e.facets.indexOf(t);
                        h && (l = g[t], u.disjunctiveFacets[l] = {
                            name: t,
                            data: n,
                            exhaustive: a.exhaustiveFacetsCount
                        }, m(u.disjunctiveFacets[l], a.facets_stats, t)), d && (l = f[t], u.facets[l] = {
                            name: t,
                            data: n,
                            exhaustive: a.exhaustiveFacetsCount
                        }, m(u.facets[l], a.facets_stats, t))
                    }
                }), this.hierarchicalFacets = c(this.hierarchicalFacets), l.forEach(function(n) {
                    var c = t[v],
                        o = c && c.facets ? c.facets : {},
                        l = e.getHierarchicalFacetByName(n);
                    Object.keys(o).forEach(function(t) {
                        var n, f = o[t];
                        if (l) {
                            n = s(e.hierarchicalFacets, function(e) {
                                return e.name === l.name
                            });
                            var d = s(u.hierarchicalFacets[n], function(e) {
                                return e.attribute === t
                            });
                            if (-1 === d) return;
                            u.hierarchicalFacets[n][d].data = r({}, u.hierarchicalFacets[n][d].data, f)
                        } else {
                            n = g[t];
                            var p = a.facets && a.facets[t] || {};
                            u.disjunctiveFacets[n] = {
                                name: t,
                                data: i({}, f, p),
                                exhaustive: c.exhaustiveFacetsCount
                            }, m(u.disjunctiveFacets[n], c.facets_stats, t), e.disjunctiveFacetsRefinements[t] && e.disjunctiveFacetsRefinements[t].forEach(function(r) {
                                !u.disjunctiveFacets[n].data[r] && e.disjunctiveFacetsRefinements[t].indexOf(h(r)) > -1 && (u.disjunctiveFacets[n].data[r] = 0)
                            })
                        }
                    }), v++
                }), e.getRefinedHierarchicalFacets().forEach(function(n) {
                    var r = e.getHierarchicalFacetByName(n),
                        a = e._getHierarchicalFacetSeparator(r),
                        c = e.getHierarchicalRefinement(n);
                    0 === c.length || c[0].split(a).length < 2 || t.slice(v).forEach(function(t) {
                        var n = t && t.facets ? t.facets : {};
                        Object.keys(n).forEach(function(t) {
                            var o = n[t],
                                l = s(e.hierarchicalFacets, function(e) {
                                    return e.name === r.name
                                }),
                                f = s(u.hierarchicalFacets[l], function(e) {
                                    return e.attribute === t
                                });
                            if (-1 !== f) {
                                var h = {};
                                if (c.length > 0) {
                                    var d = c[0].split(a)[0];
                                    h[d] = u.hierarchicalFacets[l][f].data[d]
                                }
                                u.hierarchicalFacets[l][f].data = i(h, o, u.hierarchicalFacets[l][f].data)
                            }
                        }), v++
                    })
                }), Object.keys(e.facetsExcludes).forEach(function(t) {
                    var n = e.facetsExcludes[t],
                        r = f[t];
                    u.facets[r] = {
                        name: t,
                        data: a.facets[t],
                        exhaustive: a.exhaustiveFacetsCount
                    }, n.forEach(function(e) {
                        u.facets[r] = u.facets[r] || {
                            name: t
                        }, u.facets[r].data = u.facets[r].data || {}, u.facets[r].data[e] = 0
                    })
                }), this.hierarchicalFacets = this.hierarchicalFacets.map(d(e)), this.facets = c(this.facets), this.disjunctiveFacets = c(this.disjunctiveFacets), this._state = e
            }

            function v(e, t) {
                var n = o(e, function(e) {
                    return e.name === t
                });
                return n && n.stats
            }

            function y(e, t, n, r, i) {
                var a = o(i, function(e) {
                        return e.name === n
                    }),
                    c = a && a.data && a.data[r] ? a.data[r] : 0;
                return {
                    type: t,
                    attributeName: n,
                    name: r,
                    count: c,
                    exhaustive: a && a.exhaustive || !1
                }
            }
            g.prototype.getFacetByName = function(e) {
                function t(t) {
                    return t.name === e
                }
                return o(this.facets, t) || o(this.disjunctiveFacets, t) || o(this.hierarchicalFacets, t)
            }, g.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"], g.prototype.getFacetValues = function(e, t) {
                var n, r = function(e, t) {
                    function n(e) {
                        return e.name === t
                    }
                    if (e._state.isConjunctiveFacet(t)) {
                        var r = o(e.facets, n);
                        return r ? Object.keys(r.data).map(function(n) {
                            var i = f(n);
                            return {
                                name: n,
                                escapedValue: i,
                                count: r.data[n],
                                isRefined: e._state.isFacetRefined(t, i),
                                isExcluded: e._state.isExcludeRefined(t, n)
                            }
                        }) : []
                    }
                    if (e._state.isDisjunctiveFacet(t)) {
                        var i = o(e.disjunctiveFacets, n);
                        return i ? Object.keys(i.data).map(function(n) {
                            var r = f(n);
                            return {
                                name: n,
                                escapedValue: r,
                                count: i.data[n],
                                isRefined: e._state.isDisjunctiveFacetRefined(t, r)
                            }
                        }) : []
                    }
                    if (e._state.isHierarchicalFacet(t)) return o(e.hierarchicalFacets, n)
                }(this, e);
                if (r) {
                    var c = i({}, t, {
                            sortBy: g.DEFAULT_SORT,
                            facetOrdering: !(t && t.sortBy)
                        }),
                        s = this;
                    return n = Array.isArray(r) ? [e] : s._state.getHierarchicalFacetByName(r.name).attributes,
                        function e(t, n, r, a) {
                            if (a = a || 0, Array.isArray(n)) return t(n, r[a]);
                            if (!n.data || 0 === n.data.length) return n;
                            var c = n.data.map(function(n) {
                                return e(t, n, r, a + 1)
                            });
                            return i({
                                data: t(c, r[a])
                            }, n)
                        }(function(e, t) {
                            if (c.facetOrdering) {
                                var n, r, i, o, l, f, h = s.renderingContent && s.renderingContent.facetOrdering && s.renderingContent.facetOrdering.values && s.renderingContent.facetOrdering.values[t];
                                if (h) return i = [], o = [], l = (h.order || []).reduce(function(e, t, n) {
                                    return e[t] = n, e
                                }, {}), e.forEach(function(e) {
                                    var t = e.path || e.name;
                                    void 0 !== l[t] ? i[l[t]] = e : o.push(e)
                                }), i = i.filter(function(e) {
                                    return e
                                }), "hidden" === (f = h.sortRemainingBy) ? i : (r = "alpha" === f ? [
                                    ["path", "name"],
                                    ["asc", "asc"]
                                ] : [
                                    ["count"],
                                    ["desc"]
                                ], i.concat(a(o, r[0], r[1])))
                            }
                            if (Array.isArray(c.sortBy)) {
                                var d = u(c.sortBy, g.DEFAULT_SORT);
                                return a(e, d[0], d[1])
                            }
                            if ("function" == typeof c.sortBy) return n = c.sortBy, e.sort(n);
                            throw Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function")
                        }, r, n)
                }
            }, g.prototype.getFacetStats = function(e) {
                return this._state.isConjunctiveFacet(e) ? v(this.facets, e) : this._state.isDisjunctiveFacet(e) ? v(this.disjunctiveFacets, e) : void 0
            }, g.prototype.getRefinements = function() {
                var e = this._state,
                    t = this,
                    n = [];
                return Object.keys(e.facetsRefinements).forEach(function(r) {
                    e.facetsRefinements[r].forEach(function(i) {
                        n.push(y(e, "facet", r, i, t.facets))
                    })
                }), Object.keys(e.facetsExcludes).forEach(function(r) {
                    e.facetsExcludes[r].forEach(function(i) {
                        n.push(y(e, "exclude", r, i, t.facets))
                    })
                }), Object.keys(e.disjunctiveFacetsRefinements).forEach(function(r) {
                    e.disjunctiveFacetsRefinements[r].forEach(function(i) {
                        n.push(y(e, "disjunctive", r, i, t.disjunctiveFacets))
                    })
                }), Object.keys(e.hierarchicalFacetsRefinements).forEach(function(r) {
                    e.hierarchicalFacetsRefinements[r].forEach(function(i) {
                        var a, c, s, u, l, f, h, d;
                        n.push((a = t.hierarchicalFacets, c = e.getHierarchicalFacetByName(r), s = e._getHierarchicalFacetSeparator(c), u = i.split(s), l = o(a, function(e) {
                            return e.name === r
                        }), h = (f = u.reduce(function(e, t) {
                            var n = e && o(e.data, function(e) {
                                return e.name === t
                            });
                            return void 0 !== n ? n : e
                        }, l)) && f.count || 0, d = f && f.exhaustive || !1, {
                            type: "hierarchical",
                            attributeName: r,
                            name: f && f.path || "",
                            count: h,
                            exhaustive: d
                        }))
                    })
                }), Object.keys(e.numericRefinements).forEach(function(t) {
                    var r = e.numericRefinements[t];
                    Object.keys(r).forEach(function(e) {
                        r[e].forEach(function(r) {
                            n.push({
                                type: "numeric",
                                attributeName: t,
                                name: r,
                                numericValue: r,
                                operator: e
                            })
                        })
                    })
                }), e.tagRefinements.forEach(function(e) {
                    n.push({
                        type: "tag",
                        attributeName: "_tags",
                        name: e
                    })
                }), n
            }, e.exports = g
        },
        512999: function(e, t, n) {
            var r = n(219462),
                i = n(119099),
                a = n(371986),
                c = n(478736),
                o = n(24677),
                s = n(379551),
                u = n(896961),
                l = n(267726),
                f = n(874543),
                h = n(269348),
                d = n(553264).escapeFacetValue;

            function p(e, t, n) {
                "function" == typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (" + h + ")"), this.setClient(e);
                var i = n || {};
                i.index = t, this.state = r.make(i), this.lastResults = null, this._queryId = 0, this._lastQueryIdReceived = -1, this.derivedHelpers = [], this._currentNbQueries = 0
            }

            function m(e) {
                if (e < 0) throw Error("Page requested below 0.");
                return this._change({
                    state: this.state.setPage(e),
                    isPageReset: !1
                }), this
            }

            function g() {
                return this.state.page
            }
            s(p, o), p.prototype.search = function() {
                return this._search({
                    onlyWithDerivedHelpers: !1
                }), this
            }, p.prototype.searchOnlyWithDerivedHelpers = function() {
                return this._search({
                    onlyWithDerivedHelpers: !0
                }), this
            }, p.prototype.getQuery = function() {
                var e = this.state;
                return c._getHitsSearchParams(e)
            }, p.prototype.searchOnce = function(e, t) {
                var n = e ? this.state.setQueryParameters(e) : this.state,
                    r = c._getQueries(n.index, n),
                    a = this;
                if (this._currentNbQueries++, this.emit("searchOnce", {
                        state: n
                    }), t) {
                    this.client.search(r).then(function(e) {
                        a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), t(null, new i(n, e.results), n)
                    }).catch(function(e) {
                        a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), t(e, null, n)
                    });
                    return
                }
                return this.client.search(r).then(function(e) {
                    return a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), {
                        content: new i(n, e.results),
                        state: n,
                        _originalResponse: e
                    }
                }, function(e) {
                    throw a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), e
                })
            }, p.prototype.findAnswers = function(e) {
                var t = this.state,
                    n = this.derivedHelpers[0];
                if (!n) return Promise.resolve([]);
                var r = n.getModifiedState(t),
                    i = f({
                        attributesForPrediction: e.attributesForPrediction,
                        nbHits: e.nbHits
                    }, {
                        params: l(c._getHitsSearchParams(r), ["attributesToSnippet", "hitsPerPage", "restrictSearchableAttributes", "snippetEllipsisText"])
                    }),
                    a = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
                if ("function" != typeof this.client.initIndex) throw Error(a);
                var o = this.client.initIndex(r.index);
                if ("function" != typeof o.findAnswers) throw Error(a);
                return o.findAnswers(r.query, e.queryLanguages, i)
            }, p.prototype.searchForFacetValues = function(e, t, n, r) {
                var i, a = "function" == typeof this.client.searchForFacetValues,
                    o = "function" == typeof this.client.initIndex;
                if (!a && !o && "function" != typeof this.client.search) throw Error("search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues");
                var s = this.state.setQueryParameters(r || {}),
                    u = s.isDisjunctiveFacet(e),
                    l = c.getSearchForFacetQuery(e, t, n, s);
                this._currentNbQueries++;
                var f = this;
                return a ? i = this.client.searchForFacetValues([{
                    indexName: s.index,
                    params: l
                }]) : o ? i = this.client.initIndex(s.index).searchForFacetValues(l) : (delete l.facetName, i = this.client.search([{
                    type: "facet",
                    facet: e,
                    indexName: s.index,
                    params: l
                }]).then(function(e) {
                    return e.results[0]
                })), this.emit("searchForFacetValues", {
                    state: s,
                    facet: e,
                    query: t
                }), i.then(function(t) {
                    return f._currentNbQueries--, 0 === f._currentNbQueries && f.emit("searchQueueEmpty"), (t = Array.isArray(t) ? t[0] : t).facetHits.forEach(function(t) {
                        t.escapedValue = d(t.value), t.isRefined = u ? s.isDisjunctiveFacetRefined(e, t.escapedValue) : s.isFacetRefined(e, t.escapedValue)
                    }), t
                }, function(e) {
                    throw f._currentNbQueries--, 0 === f._currentNbQueries && f.emit("searchQueueEmpty"), e
                })
            }, p.prototype.setQuery = function(e) {
                return this._change({
                    state: this.state.resetPage().setQuery(e),
                    isPageReset: !0
                }), this
            }, p.prototype.clearRefinements = function(e) {
                return this._change({
                    state: this.state.resetPage().clearRefinements(e),
                    isPageReset: !0
                }), this
            }, p.prototype.clearTags = function() {
                return this._change({
                    state: this.state.resetPage().clearTags(),
                    isPageReset: !0
                }), this
            }, p.prototype.addDisjunctiveFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, p.prototype.addDisjunctiveRefine = function() {
                return this.addDisjunctiveFacetRefinement.apply(this, arguments)
            }, p.prototype.addHierarchicalFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, p.prototype.addNumericRefinement = function(e, t, n) {
                return this._change({
                    state: this.state.resetPage().addNumericRefinement(e, t, n),
                    isPageReset: !0
                }), this
            }, p.prototype.addFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, p.prototype.addRefine = function() {
                return this.addFacetRefinement.apply(this, arguments)
            }, p.prototype.addFacetExclusion = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addExcludeRefinement(e, t),
                    isPageReset: !0
                }), this
            }, p.prototype.addExclude = function() {
                return this.addFacetExclusion.apply(this, arguments)
            }, p.prototype.addTag = function(e) {
                return this._change({
                    state: this.state.resetPage().addTagRefinement(e),
                    isPageReset: !0
                }), this
            }, p.prototype.removeNumericRefinement = function(e, t, n) {
                return this._change({
                    state: this.state.resetPage().removeNumericRefinement(e, t, n),
                    isPageReset: !0
                }), this
            }, p.prototype.removeDisjunctiveFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, p.prototype.removeDisjunctiveRefine = function() {
                return this.removeDisjunctiveFacetRefinement.apply(this, arguments)
            }, p.prototype.removeHierarchicalFacetRefinement = function(e) {
                return this._change({
                    state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
                    isPageReset: !0
                }), this
            }, p.prototype.removeFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().removeFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, p.prototype.removeRefine = function() {
                return this.removeFacetRefinement.apply(this, arguments)
            }, p.prototype.removeFacetExclusion = function(e, t) {
                return this._change({
                    state: this.state.resetPage().removeExcludeRefinement(e, t),
                    isPageReset: !0
                }), this
            }, p.prototype.removeExclude = function() {
                return this.removeFacetExclusion.apply(this, arguments)
            }, p.prototype.removeTag = function(e) {
                return this._change({
                    state: this.state.resetPage().removeTagRefinement(e),
                    isPageReset: !0
                }), this
            }, p.prototype.toggleFacetExclusion = function(e, t) {
                return this._change({
                    state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, p.prototype.toggleExclude = function() {
                return this.toggleFacetExclusion.apply(this, arguments)
            }, p.prototype.toggleRefinement = function(e, t) {
                return this.toggleFacetRefinement(e, t)
            }, p.prototype.toggleFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().toggleFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, p.prototype.toggleRefine = function() {
                return this.toggleFacetRefinement.apply(this, arguments)
            }, p.prototype.toggleTag = function(e) {
                return this._change({
                    state: this.state.resetPage().toggleTagRefinement(e),
                    isPageReset: !0
                }), this
            }, p.prototype.nextPage = function() {
                var e = this.state.page || 0;
                return this.setPage(e + 1)
            }, p.prototype.previousPage = function() {
                var e = this.state.page || 0;
                return this.setPage(e - 1)
            }, p.prototype.setCurrentPage = m, p.prototype.setPage = m, p.prototype.setIndex = function(e) {
                return this._change({
                    state: this.state.resetPage().setIndex(e),
                    isPageReset: !0
                }), this
            }, p.prototype.setQueryParameter = function(e, t) {
                return this._change({
                    state: this.state.resetPage().setQueryParameter(e, t),
                    isPageReset: !0
                }), this
            }, p.prototype.setState = function(e) {
                return this._change({
                    state: r.make(e),
                    isPageReset: !1
                }), this
            }, p.prototype.overrideStateWithoutTriggeringChangeEvent = function(e) {
                return this.state = new r(e), this
            }, p.prototype.hasRefinements = function(e) {
                return !!u(this.state.getNumericRefinements(e)) || (this.state.isConjunctiveFacet(e) ? this.state.isFacetRefined(e) : this.state.isDisjunctiveFacet(e) ? this.state.isDisjunctiveFacetRefined(e) : !!this.state.isHierarchicalFacet(e) && this.state.isHierarchicalFacetRefined(e))
            }, p.prototype.isExcluded = function(e, t) {
                return this.state.isExcludeRefined(e, t)
            }, p.prototype.isDisjunctiveRefined = function(e, t) {
                return this.state.isDisjunctiveFacetRefined(e, t)
            }, p.prototype.hasTag = function(e) {
                return this.state.isTagRefined(e)
            }, p.prototype.isTagRefined = function() {
                return this.hasTagRefinements.apply(this, arguments)
            }, p.prototype.getIndex = function() {
                return this.state.index
            }, p.prototype.getCurrentPage = g, p.prototype.getPage = g, p.prototype.getTags = function() {
                return this.state.tagRefinements
            }, p.prototype.getRefinements = function(e) {
                var t = [];
                this.state.isConjunctiveFacet(e) ? (this.state.getConjunctiveRefinements(e).forEach(function(e) {
                    t.push({
                        value: e,
                        type: "conjunctive"
                    })
                }), this.state.getExcludeRefinements(e).forEach(function(e) {
                    t.push({
                        value: e,
                        type: "exclude"
                    })
                })) : this.state.isDisjunctiveFacet(e) && this.state.getDisjunctiveRefinements(e).forEach(function(e) {
                    t.push({
                        value: e,
                        type: "disjunctive"
                    })
                });
                var n = this.state.getNumericRefinements(e);
                return Object.keys(n).forEach(function(e) {
                    var r = n[e];
                    t.push({
                        value: r,
                        operator: e,
                        type: "numeric"
                    })
                }), t
            }, p.prototype.getNumericRefinement = function(e, t) {
                return this.state.getNumericRefinement(e, t)
            }, p.prototype.getHierarchicalFacetBreadcrumb = function(e) {
                return this.state.getHierarchicalFacetBreadcrumb(e)
            }, p.prototype._search = function(e) {
                var t = this.state,
                    n = [],
                    r = [];
                e.onlyWithDerivedHelpers || (r = c._getQueries(t.index, t), n.push({
                    state: t,
                    queriesCount: r.length,
                    helper: this
                }), this.emit("search", {
                    state: t,
                    results: this.lastResults
                }));
                var i = this.derivedHelpers.map(function(e) {
                        var r = e.getModifiedState(t),
                            i = c._getQueries(r.index, r);
                        return n.push({
                            state: r,
                            queriesCount: i.length,
                            helper: e
                        }), e.emit("search", {
                            state: r,
                            results: e.lastResults
                        }), i
                    }),
                    a = Array.prototype.concat.apply(r, i),
                    o = this._queryId++;
                this._currentNbQueries++;
                try {
                    this.client.search(a).then(this._dispatchAlgoliaResponse.bind(this, n, o)).catch(this._dispatchAlgoliaError.bind(this, o))
                } catch (e) {
                    this.emit("error", {
                        error: e
                    })
                }
            }, p.prototype._dispatchAlgoliaResponse = function(e, t, n) {
                if (!(t < this._lastQueryIdReceived)) {
                    this._currentNbQueries -= t - this._lastQueryIdReceived, this._lastQueryIdReceived = t, 0 === this._currentNbQueries && this.emit("searchQueueEmpty");
                    var r = n.results.slice();
                    e.forEach(function(e) {
                        var t = e.state,
                            n = e.queriesCount,
                            a = e.helper,
                            c = r.splice(0, n),
                            o = a.lastResults = new i(t, c);
                        a.emit("result", {
                            results: o,
                            state: t
                        })
                    })
                }
            }, p.prototype._dispatchAlgoliaError = function(e, t) {
                e < this._lastQueryIdReceived || (this._currentNbQueries -= e - this._lastQueryIdReceived, this._lastQueryIdReceived = e, this.emit("error", {
                    error: t
                }), 0 === this._currentNbQueries && this.emit("searchQueueEmpty"))
            }, p.prototype.containsRefinement = function(e, t, n, r) {
                return e || 0 !== t.length || 0 !== n.length || 0 !== r.length
            }, p.prototype._hasDisjunctiveRefinements = function(e) {
                return this.state.disjunctiveRefinements[e] && this.state.disjunctiveRefinements[e].length > 0
            }, p.prototype._change = function(e) {
                var t = e.state,
                    n = e.isPageReset;
                t !== this.state && (this.state = t, this.emit("change", {
                    state: this.state,
                    results: this.lastResults,
                    isPageReset: n
                }))
            }, p.prototype.clearCache = function() {
                return this.client.clearCache && this.client.clearCache(), this
            }, p.prototype.setClient = function(e) {
                return this.client === e || ("function" == typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (" + h + ")"), this.client = e), this
            }, p.prototype.getClient = function() {
                return this.client
            }, p.prototype.derive = function(e) {
                var t = new a(this, e);
                return this.derivedHelpers.push(t), t
            }, p.prototype.detachDerivedHelper = function(e) {
                var t = this.derivedHelpers.indexOf(e);
                if (-1 === t) throw Error("Derived helper already detached");
                this.derivedHelpers.splice(t, 1)
            }, p.prototype.hasPendingRequests = function() {
                return this._currentNbQueries > 0
            }, e.exports = p
        },
        388051: function(e) {
            e.exports = function(e) {
                return Array.isArray(e) ? e.filter(Boolean) : []
            }
        },
        206495: function(e) {
            e.exports = function() {
                var e = Array.prototype.slice.call(arguments);
                return e.reduceRight(function(e, t) {
                    return Object.keys(Object(t)).forEach(function(n) {
                        void 0 !== t[n] && (void 0 !== e[n] && delete e[n], e[n] = t[n])
                    }), e
                }, {})
            }
        },
        553264: function(e) {
            e.exports = {
                escapeFacetValue: function(e) {
                    return "string" != typeof e ? e : String(e).replace(/^-/, "\\-")
                },
                unescapeFacetValue: function(e) {
                    return "string" != typeof e ? e : e.replace(/^\\-/, "-")
                }
            }
        },
        515493: function(e) {
            e.exports = function(e, t) {
                if (Array.isArray(e)) {
                    for (var n = 0; n < e.length; n++)
                        if (t(e[n])) return e[n]
                }
            }
        },
        632836: function(e) {
            e.exports = function(e, t) {
                if (!Array.isArray(e)) return -1;
                for (var n = 0; n < e.length; n++)
                    if (t(e[n])) return n;
                return -1
            }
        },
        675075: function(e, t, n) {
            var r = n(515493);
            e.exports = function(e, t) {
                var n = (t || []).map(function(e) {
                    return e.split(":")
                });
                return e.reduce(function(e, t) {
                    var i = t.split(":"),
                        a = r(n, function(e) {
                            return e[0] === i[0]
                        });
                    return i.length > 1 || !a ? (e[0].push(i[0]), e[1].push(i[1])) : (e[0].push(a[0]), e[1].push(a[1])), e
                }, [
                    [],
                    []
                ])
            }
        },
        379551: function(e) {
            e.exports = function(e, t) {
                e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }
        },
        417158: function(e) {
            e.exports = function(e, t) {
                return e.filter(function(n, r) {
                    return t.indexOf(n) > -1 && e.indexOf(n) === r
                })
            }
        },
        874543: function(e) {
            function t(e) {
                return "function" == typeof e || Array.isArray(e) || "[object Object]" === Object.prototype.toString.call(e)
            }
            e.exports = function(e) {
                t(e) || (e = {});
                for (var n = 1, r = arguments.length; n < r; n++) {
                    var i = arguments[n];
                    t(i) && function e(n, r) {
                        if (n === r) return n;
                        for (var i in r)
                            if (Object.prototype.hasOwnProperty.call(r, i) && "__proto__" !== i) {
                                var a = r[i],
                                    c = n[i];
                                (void 0 === c || void 0 !== a) && (t(c) && t(a) ? n[i] = e(c, a) : n[i] = "object" == typeof a && null !== a ? e(Array.isArray(a) ? [] : {}, a) : a)
                            }
                        return n
                    }(e, i)
                }
                return e
            }
        },
        896961: function(e) {
            e.exports = function(e) {
                return e && Object.keys(e).length > 0
            }
        },
        267726: function(e) {
            e.exports = function(e, t) {
                if (null === e) return {};
                var n, r, i = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }
        },
        356019: function(e) {
            e.exports = function(e, t, n) {
                if (!Array.isArray(e)) return [];
                Array.isArray(n) || (n = []);
                var r = e.map(function(e, n) {
                    return {
                        criteria: t.map(function(t) {
                            return e[t]
                        }),
                        index: n,
                        value: e
                    }
                });
                return r.sort(function(e, t) {
                    for (var r = -1; ++r < e.criteria.length;) {
                        var i = function(e, t) {
                            if (e !== t) {
                                var n = void 0 !== e,
                                    r = null === e,
                                    i = void 0 !== t,
                                    a = null === t;
                                if (!a && e > t || r && i || !n) return 1;
                                if (!r && e < t || a && n || !i) return -1
                            }
                            return 0
                        }(e.criteria[r], t.criteria[r]);
                        if (i) {
                            if (r >= n.length) return i;
                            if ("desc" === n[r]) return -i;
                            return i
                        }
                    }
                    return e.index - t.index
                }), r.map(function(e) {
                    return e.value
                })
            }
        },
        581797: function(e) {
            e.exports = function e(t) {
                if ("number" == typeof t) return t;
                if ("string" == typeof t) return parseFloat(t);
                if (Array.isArray(t)) return t.map(e);
                throw Error("The value should be a number, a parsable string or an array of those.")
            }
        },
        478736: function(e, t, n) {
            var r = n(874543);

            function i(e) {
                return Object.keys(e).sort(function(e, t) {
                    return e.localeCompare(t)
                }).reduce(function(t, n) {
                    return t[n] = e[n], t
                }, {})
            }
            var a = {
                _getQueries: function(e, t) {
                    var n = [];
                    return n.push({
                        indexName: e,
                        params: a._getHitsSearchParams(t)
                    }), t.getRefinedDisjunctiveFacets().forEach(function(r) {
                        n.push({
                            indexName: e,
                            params: a._getDisjunctiveFacetSearchParams(t, r)
                        })
                    }), t.getRefinedHierarchicalFacets().forEach(function(r) {
                        var i = t.getHierarchicalFacetByName(r),
                            c = t.getHierarchicalRefinement(r),
                            o = t._getHierarchicalFacetSeparator(i);
                        if (c.length > 0 && c[0].split(o).length > 1) {
                            var s = c[0].split(o).slice(0, -1).reduce(function(e, t, n) {
                                return e.concat({
                                    attribute: i.attributes[n],
                                    value: 0 === n ? t : [e[e.length - 1].value, t].join(o)
                                })
                            }, []);
                            s.forEach(function(r, c) {
                                var o = a._getDisjunctiveFacetSearchParams(t, r.attribute, 0 === c);

                                function u(e) {
                                    return i.attributes.some(function(t) {
                                        return t === e.split(":")[0]
                                    })
                                }
                                var l = (o.facetFilters || []).reduce(function(e, t) {
                                        if (Array.isArray(t)) {
                                            var n = t.filter(function(e) {
                                                return !u(e)
                                            });
                                            n.length > 0 && e.push(n)
                                        }
                                        return "string" != typeof t || u(t) || e.push(t), e
                                    }, []),
                                    f = s[c - 1];
                                c > 0 ? o.facetFilters = l.concat(f.attribute + ":" + f.value) : o.facetFilters = l.length > 0 ? l : void 0, n.push({
                                    indexName: e,
                                    params: o
                                })
                            })
                        }
                    }), n
                },
                _getHitsSearchParams: function(e) {
                    var t = e.facets.concat(e.disjunctiveFacets).concat(a._getHitsHierarchicalFacetsAttributes(e)),
                        n = a._getFacetFilters(e),
                        c = a._getNumericFilters(e),
                        o = a._getTagFilters(e),
                        s = {
                            facets: t.indexOf("*") > -1 ? ["*"] : t,
                            tagFilters: o
                        };
                    return n.length > 0 && (s.facetFilters = n), c.length > 0 && (s.numericFilters = c), i(r({}, e.getQueryParams(), s))
                },
                _getDisjunctiveFacetSearchParams: function(e, t, n) {
                    var c = a._getFacetFilters(e, t, n),
                        o = a._getNumericFilters(e, t),
                        s = a._getTagFilters(e),
                        u = {
                            hitsPerPage: 0,
                            page: 0,
                            analytics: !1,
                            clickAnalytics: !1
                        };
                    s.length > 0 && (u.tagFilters = s);
                    var l = e.getHierarchicalFacetByName(t);
                    return l ? u.facets = a._getDisjunctiveHierarchicalFacetAttribute(e, l, n) : u.facets = t, o.length > 0 && (u.numericFilters = o), c.length > 0 && (u.facetFilters = c), i(r({}, e.getQueryParams(), u))
                },
                _getNumericFilters: function(e, t) {
                    if (e.numericFilters) return e.numericFilters;
                    var n = [];
                    return Object.keys(e.numericRefinements).forEach(function(r) {
                        var i = e.numericRefinements[r] || {};
                        Object.keys(i).forEach(function(e) {
                            var a = i[e] || [];
                            t !== r && a.forEach(function(t) {
                                if (Array.isArray(t)) {
                                    var i = t.map(function(t) {
                                        return r + e + t
                                    });
                                    n.push(i)
                                } else n.push(r + e + t)
                            })
                        })
                    }), n
                },
                _getTagFilters: function(e) {
                    return e.tagFilters ? e.tagFilters : e.tagRefinements.join(",")
                },
                _getFacetFilters: function(e, t, n) {
                    var r = [],
                        i = e.facetsRefinements || {};
                    Object.keys(i).forEach(function(e) {
                        (i[e] || []).forEach(function(t) {
                            r.push(e + ":" + t)
                        })
                    });
                    var a = e.facetsExcludes || {};
                    Object.keys(a).forEach(function(e) {
                        (a[e] || []).forEach(function(t) {
                            r.push(e + ":-" + t)
                        })
                    });
                    var c = e.disjunctiveFacetsRefinements || {};
                    Object.keys(c).forEach(function(e) {
                        var n = c[e] || [];
                        if (e !== t && n && 0 !== n.length) {
                            var i = [];
                            n.forEach(function(t) {
                                i.push(e + ":" + t)
                            }), r.push(i)
                        }
                    });
                    var o = e.hierarchicalFacetsRefinements || {};
                    return Object.keys(o).forEach(function(i) {
                        var a, c, s = (o[i] || [])[0];
                        if (void 0 !== s) {
                            var u = e.getHierarchicalFacetByName(i),
                                l = e._getHierarchicalFacetSeparator(u),
                                f = e._getHierarchicalRootPath(u);
                            if (t === i) {
                                if (-1 === s.indexOf(l) || !f && !0 === n || f && f.split(l).length === s.split(l).length) return;
                                f ? (c = f.split(l).length - 1, s = f) : (c = s.split(l).length - 2, s = s.slice(0, s.lastIndexOf(l))), a = u.attributes[c]
                            } else c = s.split(l).length - 1, a = u.attributes[c];
                            a && r.push([a + ":" + s])
                        }
                    }), r
                },
                _getHitsHierarchicalFacetsAttributes: function(e) {
                    return e.hierarchicalFacets.reduce(function(t, n) {
                        var r = e.getHierarchicalRefinement(n.name)[0];
                        if (!r) return t.push(n.attributes[0]), t;
                        var i = e._getHierarchicalFacetSeparator(n),
                            a = r.split(i).length,
                            c = n.attributes.slice(0, a + 1);
                        return t.concat(c)
                    }, [])
                },
                _getDisjunctiveHierarchicalFacetAttribute: function(e, t, n) {
                    var r = e._getHierarchicalFacetSeparator(t);
                    if (!0 === n) {
                        var i = e._getHierarchicalRootPath(t),
                            a = 0;
                        return i && (a = i.split(r).length), [t.attributes[a]]
                    }
                    var c = (e.getHierarchicalRefinement(t.name)[0] || "").split(r).length - 1;
                    return t.attributes.slice(0, c + 1)
                },
                getSearchForFacetQuery: function(e, t, n, c) {
                    var o = c.isDisjunctiveFacet(e) ? c.clearRefinements(e) : c,
                        s = {
                            facetQuery: t,
                            facetName: e
                        };
                    return "number" == typeof n && (s.maxFacetHits = n), i(r({}, a._getHitsSearchParams(o), s))
                }
            };
            e.exports = a
        },
        476717: function(e) {
            e.exports = function(e) {
                return null !== e && /^[a-zA-Z0-9_-]{1,64}$/.test(e)
            }
        },
        269348: function(e) {
            e.exports = "3.11.1"
        },
        467095: function(e) {
            var t = String.prototype.replace,
                n = /%20/g,
                r = {
                    RFC1738: "RFC1738",
                    RFC3986: "RFC3986"
                };
            e.exports = {
                default: r.RFC3986,
                formatters: {
                    RFC1738: function(e) {
                        return t.call(e, n, "+")
                    },
                    RFC3986: function(e) {
                        return String(e)
                    }
                },
                RFC1738: r.RFC1738,
                RFC3986: r.RFC3986
            }
        },
        441310: function(e, t, n) {
            var r = n(392575),
                i = n(848038),
                a = n(467095);
            e.exports = {
                formats: a,
                parse: i,
                stringify: r
            }
        },
        848038: function(e, t, n) {
            var r = n(1170),
                i = Object.prototype.hasOwnProperty,
                a = Array.isArray,
                c = {
                    allowDots: !1,
                    allowPrototypes: !1,
                    arrayLimit: 20,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    comma: !1,
                    decoder: r.decode,
                    delimiter: "&",
                    depth: 5,
                    ignoreQueryPrefix: !1,
                    interpretNumericEntities: !1,
                    parameterLimit: 1e3,
                    parseArrays: !0,
                    plainObjects: !1,
                    strictNullHandling: !1
                },
                o = function(e, t) {
                    return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
                },
                s = function(e, t) {
                    var n = {},
                        s = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                        u = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                        l = s.split(t.delimiter, u),
                        f = -1,
                        h = t.charset;
                    if (t.charsetSentinel)
                        for (d = 0; d < l.length; ++d) 0 === l[d].indexOf("utf8=") && ("utf8=%E2%9C%93" === l[d] ? h = "utf-8" : "utf8=%26%2310003%3B" === l[d] && (h = "iso-8859-1"), f = d, d = l.length);
                    for (d = 0; d < l.length; ++d)
                        if (d !== f) {
                            var d, p, m, g = l[d],
                                v = g.indexOf("]="),
                                y = -1 === v ? g.indexOf("=") : v + 1; - 1 === y ? (p = t.decoder(g, c.decoder, h, "key"), m = t.strictNullHandling ? null : "") : (p = t.decoder(g.slice(0, y), c.decoder, h, "key"), m = r.maybeMap(o(g.slice(y + 1), t), function(e) {
                                return t.decoder(e, c.decoder, h, "value")
                            })), m && t.interpretNumericEntities && "iso-8859-1" === h && (m = m.replace(/&#(\d+);/g, function(e, t) {
                                return String.fromCharCode(parseInt(t, 10))
                            })), g.indexOf("[]=") > -1 && (m = a(m) ? [m] : m), i.call(n, p) ? n[p] = r.combine(n[p], m) : n[p] = m
                        }
                    return n
                },
                u = function(e, t, n, r) {
                    for (var i = r ? t : o(t, n), a = e.length - 1; a >= 0; --a) {
                        var c, s = e[a];
                        if ("[]" === s && n.parseArrays) c = [].concat(i);
                        else {
                            c = n.plainObjects ? Object.create(null) : {};
                            var u = "[" === s.charAt(0) && "]" === s.charAt(s.length - 1) ? s.slice(1, -1) : s,
                                l = parseInt(u, 10);
                            n.parseArrays || "" !== u ? !isNaN(l) && s !== u && String(l) === u && l >= 0 && n.parseArrays && l <= n.arrayLimit ? (c = [])[l] = i : "__proto__" !== u && (c[u] = i) : c = {
                                0: i
                            }
                        }
                        i = c
                    }
                    return i
                },
                l = function(e, t, n, r) {
                    if (e) {
                        var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                            c = /(\[[^[\]]*])/g,
                            o = n.depth > 0 && /(\[[^[\]]*])/.exec(a),
                            s = o ? a.slice(0, o.index) : a,
                            l = [];
                        if (s) {
                            if (!n.plainObjects && i.call(Object.prototype, s) && !n.allowPrototypes) return;
                            l.push(s)
                        }
                        for (var f = 0; n.depth > 0 && null !== (o = c.exec(a)) && f < n.depth;) {
                            if (f += 1, !n.plainObjects && i.call(Object.prototype, o[1].slice(1, -1)) && !n.allowPrototypes) return;
                            l.push(o[1])
                        }
                        return o && l.push("[" + a.slice(o.index) + "]"), u(l, t, n, r)
                    }
                },
                f = function(e) {
                    if (!e) return c;
                    if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw TypeError("Decoder has to be a function.");
                    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var t = void 0 === e.charset ? c.charset : e.charset;
                    return {
                        allowDots: void 0 === e.allowDots ? c.allowDots : !!e.allowDots,
                        allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : c.allowPrototypes,
                        arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : c.arrayLimit,
                        charset: t,
                        charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : c.charsetSentinel,
                        comma: "boolean" == typeof e.comma ? e.comma : c.comma,
                        decoder: "function" == typeof e.decoder ? e.decoder : c.decoder,
                        delimiter: "string" == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : c.delimiter,
                        depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : c.depth,
                        ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : c.interpretNumericEntities,
                        parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : c.parameterLimit,
                        parseArrays: !1 !== e.parseArrays,
                        plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : c.plainObjects,
                        strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : c.strictNullHandling
                    }
                };
            e.exports = function(e, t) {
                var n = f(t);
                if ("" === e || null == e) return n.plainObjects ? Object.create(null) : {};
                for (var i = "string" == typeof e ? s(e, n) : e, a = n.plainObjects ? Object.create(null) : {}, c = Object.keys(i), o = 0; o < c.length; ++o) {
                    var u = c[o],
                        h = l(u, i[u], n, "string" == typeof e);
                    a = r.merge(a, h, n)
                }
                return r.compact(a)
            }
        },
        392575: function(e, t, n) {
            var r = n(1170),
                i = n(467095),
                a = Object.prototype.hasOwnProperty,
                c = {
                    brackets: function(e) {
                        return e + "[]"
                    },
                    comma: "comma",
                    indices: function(e, t) {
                        return e + "[" + t + "]"
                    },
                    repeat: function(e) {
                        return e
                    }
                },
                o = Array.isArray,
                s = String.prototype.split,
                u = Array.prototype.push,
                l = function(e, t) {
                    u.apply(e, o(t) ? t : [t])
                },
                f = Date.prototype.toISOString,
                h = i.default,
                d = {
                    addQueryPrefix: !1,
                    allowDots: !1,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    delimiter: "&",
                    encode: !0,
                    encoder: r.encode,
                    encodeValuesOnly: !1,
                    format: h,
                    formatter: i.formatters[h],
                    indices: !1,
                    serializeDate: function(e) {
                        return f.call(e)
                    },
                    skipNulls: !1,
                    strictNullHandling: !1
                },
                p = function e(t, n, i, a, c, u, f, h, p, m, g, v, y, b) {
                    var R, O, j = t;
                    if ("function" == typeof f ? j = f(n, j) : j instanceof Date ? j = m(j) : "comma" === i && o(j) && (j = r.maybeMap(j, function(e) {
                            return e instanceof Date ? m(e) : e
                        })), null === j) {
                        if (a) return u && !y ? u(n, d.encoder, b, "key", g) : n;
                        j = ""
                    }
                    if ("string" == typeof(R = j) || "number" == typeof R || "boolean" == typeof R || "symbol" == typeof R || "bigint" == typeof R || r.isBuffer(j)) {
                        if (u) {
                            var P = y ? n : u(n, d.encoder, b, "key", g);
                            if ("comma" === i && y) {
                                for (var w = s.call(String(j), ","), S = "", E = 0; E < w.length; ++E) S += (0 === E ? "" : ",") + v(u(w[E], d.encoder, b, "value", g));
                                return [v(P) + "=" + S]
                            }
                            return [v(P) + "=" + v(u(j, d.encoder, b, "value", g))]
                        }
                        return [v(n) + "=" + v(String(j))]
                    }
                    var F = [];
                    if (void 0 === j) return F;
                    if ("comma" === i && o(j)) O = [{
                        value: j.length > 0 ? j.join(",") || null : void 0
                    }];
                    else if (o(f)) O = f;
                    else {
                        var x = Object.keys(j);
                        O = h ? x.sort(h) : x
                    }
                    for (var _ = 0; _ < O.length; ++_) {
                        var T = O[_],
                            C = "object" == typeof T && void 0 !== T.value ? T.value : j[T];
                        c && null === C || l(F, e(C, o(j) ? "function" == typeof i ? i(n, T) : n : n + (p ? "." + T : "[" + T + "]"), i, a, c, u, f, h, p, m, g, v, y, b))
                    }
                    return F
                },
                m = function(e) {
                    if (!e) return d;
                    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw TypeError("Encoder has to be a function.");
                    var t = e.charset || d.charset;
                    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var n = i.default;
                    if (void 0 !== e.format) {
                        if (!a.call(i.formatters, e.format)) throw TypeError("Unknown format option provided.");
                        n = e.format
                    }
                    var r = i.formatters[n],
                        c = d.filter;
                    return ("function" == typeof e.filter || o(e.filter)) && (c = e.filter), {
                        addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : d.addQueryPrefix,
                        allowDots: void 0 === e.allowDots ? d.allowDots : !!e.allowDots,
                        charset: t,
                        charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : d.charsetSentinel,
                        delimiter: void 0 === e.delimiter ? d.delimiter : e.delimiter,
                        encode: "boolean" == typeof e.encode ? e.encode : d.encode,
                        encoder: "function" == typeof e.encoder ? e.encoder : d.encoder,
                        encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : d.encodeValuesOnly,
                        filter: c,
                        format: n,
                        formatter: r,
                        serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : d.serializeDate,
                        skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : d.skipNulls,
                        sort: "function" == typeof e.sort ? e.sort : null,
                        strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : d.strictNullHandling
                    }
                };
            e.exports = function(e, t) {
                var n, r, i = e,
                    a = m(t);
                "function" == typeof a.filter ? i = (0, a.filter)("", i) : o(a.filter) && (n = a.filter);
                var s = [];
                if ("object" != typeof i || null === i) return "";
                r = t && t.arrayFormat in c ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
                var u = c[r];
                n || (n = Object.keys(i)), a.sort && n.sort(a.sort);
                for (var f = 0; f < n.length; ++f) {
                    var h = n[f];
                    a.skipNulls && null === i[h] || l(s, p(i[h], h, u, a.strictNullHandling, a.skipNulls, a.encode ? a.encoder : null, a.filter, a.sort, a.allowDots, a.serializeDate, a.format, a.formatter, a.encodeValuesOnly, a.charset))
                }
                var d = s.join(a.delimiter),
                    g = !0 === a.addQueryPrefix ? "?" : "";
                return a.charsetSentinel && ("iso-8859-1" === a.charset ? g += "utf8=%26%2310003%3B&" : g += "utf8=%E2%9C%93&"), d.length > 0 ? g + d : ""
            }
        },
        1170: function(e, t, n) {
            var r = n(467095),
                i = Object.prototype.hasOwnProperty,
                a = Array.isArray,
                c = function() {
                    for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                    return e
                }(),
                o = function(e) {
                    for (; e.length > 1;) {
                        var t = e.pop(),
                            n = t.obj[t.prop];
                        if (a(n)) {
                            for (var r = [], i = 0; i < n.length; ++i) void 0 !== n[i] && r.push(n[i]);
                            t.obj[t.prop] = r
                        }
                    }
                },
                s = function(e, t) {
                    for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) void 0 !== e[r] && (n[r] = e[r]);
                    return n
                };
            e.exports = {
                arrayToObject: s,
                assign: function(e, t) {
                    return Object.keys(t).reduce(function(e, n) {
                        return e[n] = t[n], e
                    }, e)
                },
                combine: function(e, t) {
                    return [].concat(e, t)
                },
                compact: function(e) {
                    for (var t = [{
                            obj: {
                                o: e
                            },
                            prop: "o"
                        }], n = [], r = 0; r < t.length; ++r)
                        for (var i = t[r], a = i.obj[i.prop], c = Object.keys(a), s = 0; s < c.length; ++s) {
                            var u = c[s],
                                l = a[u];
                            "object" == typeof l && null !== l && -1 === n.indexOf(l) && (t.push({
                                obj: a,
                                prop: u
                            }), n.push(l))
                        }
                    return o(t), e
                },
                decode: function(e, t, n) {
                    var r = e.replace(/\+/g, " ");
                    if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                        return decodeURIComponent(r)
                    } catch (e) {
                        return r
                    }
                },
                encode: function(e, t, n, i, a) {
                    if (0 === e.length) return e;
                    var o = e;
                    if ("symbol" == typeof e ? o = Symbol.prototype.toString.call(e) : "string" != typeof e && (o = String(e)), "iso-8859-1" === n) return escape(o).replace(/%u[0-9a-f]{4}/gi, function(e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                    });
                    for (var s = "", u = 0; u < o.length; ++u) {
                        var l = o.charCodeAt(u);
                        if (45 === l || 46 === l || 95 === l || 126 === l || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || a === r.RFC1738 && (40 === l || 41 === l)) {
                            s += o.charAt(u);
                            continue
                        }
                        if (l < 128) {
                            s += c[l];
                            continue
                        }
                        if (l < 2048) {
                            s += c[192 | l >> 6] + c[128 | 63 & l];
                            continue
                        }
                        if (l < 55296 || l >= 57344) {
                            s += c[224 | l >> 12] + c[128 | l >> 6 & 63] + c[128 | 63 & l];
                            continue
                        }
                        u += 1, s += c[240 | (l = 65536 + ((1023 & l) << 10 | 1023 & o.charCodeAt(u))) >> 18] + c[128 | l >> 12 & 63] + c[128 | l >> 6 & 63] + c[128 | 63 & l]
                    }
                    return s
                },
                isBuffer: function(e) {
                    return !!e && "object" == typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                },
                isRegExp: function(e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e)
                },
                maybeMap: function(e, t) {
                    if (a(e)) {
                        for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]));
                        return n
                    }
                    return t(e)
                },
                merge: function e(t, n, r) {
                    if (!n) return t;
                    if ("object" != typeof n) {
                        if (a(t)) t.push(n);
                        else {
                            if (!t || "object" != typeof t) return [t, n];
                            (r && (r.plainObjects || r.allowPrototypes) || !i.call(Object.prototype, n)) && (t[n] = !0)
                        }
                        return t
                    }
                    if (!t || "object" != typeof t) return [t].concat(n);
                    var c = t;
                    return (a(t) && !a(n) && (c = s(t, r)), a(t) && a(n)) ? (n.forEach(function(n, a) {
                        if (i.call(t, a)) {
                            var c = t[a];
                            c && "object" == typeof c && n && "object" == typeof n ? t[a] = e(c, n, r) : t.push(n)
                        } else t[a] = n
                    }), t) : Object.keys(n).reduce(function(t, a) {
                        var c = n[a];
                        return i.call(t, a) ? t[a] = e(t[a], c, r) : t[a] = c, t
                    }, c)
                }
            }
        },
        518249: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });

            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
        },
        291205: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
        },
        740642: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });

            function r(e) {
                if (Array.isArray(e)) return e
            }
        },
        808010: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });

            function r() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        190581: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(250513);

            function i(e, t) {
                if (null == e) return {};
                var n, i, a = (0, r.Z)(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < c.length; i++) n = c[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
        },
        250513: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });

            function r(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }
        },
        41869: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(740642),
                i = n(341835),
                a = n(808010);

            function c(e, t) {
                return (0, r.Z)(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a, c, o = [],
                            s = !0,
                            u = !1;
                        try {
                            if (a = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                s = !1
                            } else
                                for (; !(s = (r = a.call(n)).done) && (o.push(r.value), o.length !== t); s = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                if (!s && null != n.return && (c = n.return(), Object(c) !== c)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || (0, i.Z)(e, t) || (0, a.Z)()
            }
        },
        341835: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(291205);

            function i(e, t) {
                if (e) {
                    if ("string" == typeof e) return (0, r.Z)(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, r.Z)(e, t)
                }
            }
        },
        676443: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return g
                }
            });
            var r = n(652983),
                i = n(402620),
                a = n(133992),
                c = n(452869),
                o = n(848412);
            class s extends r.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = this.props.sizeRef.current;
                        e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function u({
                children: e,
                isPresent: t
            }) {
                let n = (0, r.useId)(),
                    i = (0, r.useRef)(null),
                    a = (0, r.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return (0, r.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: r,
                        top: c,
                        left: o
                    } = a.current;
                    if (t || !i.current || !e || !r) return;
                    i.current.dataset.motionPopId = n;
                    let s = document.createElement("style");
                    return document.head.appendChild(s), s.sheet && s.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${c}px !important;
            left: ${o}px !important;
          }
        `), () => {
                        document.head.removeChild(s)
                    }
                }, [t]), r.createElement(s, {
                    isPresent: t,
                    childRef: i,
                    sizeRef: a
                }, r.cloneElement(e, {
                    ref: i
                }))
            }
            let l = ({
                children: e,
                initial: t,
                isPresent: n,
                onExitComplete: i,
                custom: a,
                presenceAffectsLayout: s,
                mode: l
            }) => {
                let h = (0, o.h)(f),
                    d = (0, r.useId)(),
                    p = (0, r.useMemo)(() => ({
                        id: d,
                        initial: t,
                        isPresent: n,
                        custom: a,
                        onExitComplete: e => {
                            for (let t of (h.set(e, !0), h.values()))
                                if (!t) return;
                            i && i()
                        },
                        register: e => (h.set(e, !1), () => h.delete(e))
                    }), s ? void 0 : [n]);
                return (0, r.useMemo)(() => {
                    h.forEach((e, t) => h.set(t, !1))
                }, [n]), r.useEffect(() => {
                    n || h.size || !i || i()
                }, [n]), "popLayout" === l && (e = r.createElement(u, {
                    isPresent: n
                }, e)), r.createElement(c.O.Provider, {
                    value: p
                }, e)
            };

            function f() {
                return new Map
            }
            var h = n(991303),
                d = n(330504),
                p = n(58340);
            let m = e => e.key || "",
                g = ({
                    children: e,
                    custom: t,
                    initial: n = !0,
                    onExitComplete: c,
                    exitBeforeEnter: o,
                    presenceAffectsLayout: s = !0,
                    mode: u = "sync"
                }) => {
                    var f;
                    (0, p.k)(!o, "Replace exitBeforeEnter with mode='wait'");
                    let g = (0, r.useContext)(h.p).forceRender || (0, i.N)()[0],
                        v = (0, a.t)(),
                        y = function(e) {
                            let t = [];
                            return r.Children.forEach(e, e => {
                                (0, r.isValidElement)(e) && t.push(e)
                            }), t
                        }(e),
                        b = y,
                        R = (0, r.useRef)(new Map).current,
                        O = (0, r.useRef)(b),
                        j = (0, r.useRef)(new Map).current,
                        P = (0, r.useRef)(!0);
                    if ((0, d.L)(() => {
                            P.current = !1,
                                function(e, t) {
                                    e.forEach(e => {
                                        let n = m(e);
                                        t.set(n, e)
                                    })
                                }(y, j), O.current = b
                        }), f = () => {
                            P.current = !0, j.clear(), R.clear()
                        }, (0, r.useEffect)(() => () => f(), []), P.current) return r.createElement(r.Fragment, null, b.map(e => r.createElement(l, {
                        key: m(e),
                        isPresent: !0,
                        initial: !!n && void 0,
                        presenceAffectsLayout: s,
                        mode: u
                    }, e)));
                    b = [...b];
                    let w = O.current.map(m),
                        S = y.map(m),
                        E = w.length;
                    for (let e = 0; e < E; e++) {
                        let t = w[e]; - 1 !== S.indexOf(t) || R.has(t) || R.set(t, void 0)
                    }
                    return "wait" === u && R.size && (b = []), R.forEach((e, n) => {
                        if (-1 !== S.indexOf(n)) return;
                        let i = j.get(n);
                        if (!i) return;
                        let a = w.indexOf(n),
                            o = e;
                        o || (o = r.createElement(l, {
                            key: m(i),
                            isPresent: !1,
                            onExitComplete: () => {
                                j.delete(n), R.delete(n);
                                let e = O.current.findIndex(e => e.key === n);
                                if (O.current.splice(e, 1), !R.size) {
                                    if (O.current = y, !1 === v.current) return;
                                    g(), c && c()
                                }
                            },
                            custom: t,
                            presenceAffectsLayout: s,
                            mode: u
                        }, i), R.set(n, o)), b.splice(a, 0, o)
                    }), b = b.map(e => {
                        let t = e.key;
                        return R.has(t) ? e : r.createElement(l, {
                            key: m(e),
                            isPresent: !0,
                            presenceAffectsLayout: s,
                            mode: u
                        }, e)
                    }), r.createElement(r.Fragment, null, R.size ? b : b.map(e => (0, r.cloneElement)(e)))
                }
        },
        402620: function(e, t, n) {
            n.d(t, {
                N: function() {
                    return c
                }
            });
            var r = n(375501),
                i = n(652983),
                a = n(133992);

            function c() {
                let e = (0, a.t)(),
                    [t, n] = (0, i.useState)(0),
                    c = (0, i.useCallback)(() => {
                        e.current && n(t + 1)
                    }, [t]),
                    o = (0, i.useCallback)(() => r.Wi.postRender(c), [c]);
                return [o, t]
            }
        },
        133992: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return a
                }
            });
            var r = n(652983),
                i = n(330504);

            function a() {
                let e = (0, r.useRef)(!1);
                return (0, i.L)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
        },
        626336: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return r
                }
            });

            function r(e, t) {
                if (void 0 === e || "function" != typeof e) throw Error("The render function is not valid (received type ".concat(Object.prototype.toString.call(e).slice(8, -1), ").\n\n").concat(t))
            }
        },
        712741: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return r
                }
            });

            function r() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = t.map(function(e) {
                    var t;
                    return ["https://www.algolia.com/doc/api-reference/widgets/", e.name, "/js/", void 0 !== (t = e.connector) && t ? "#connector" : ""].join("")
                }).join(", ");
                return function(e) {
                    return [e, "See documentation: ".concat(r)].filter(Boolean).join("\n\n")
                }
            }
        },
        895933: function(e, t, n) {
            n.d(t, {
                Rn: function() {
                    return l
                },
                dg: function() {
                    return u
                },
                mY: function() {
                    return h
                }
            });
            var r = n(796641),
                i = n(712595);

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        s(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var u = {
                    highlightPreTag: "__ais-highlight__",
                    highlightPostTag: "__/ais-highlight__"
                },
                l = {
                    highlightPreTag: "<mark>",
                    highlightPostTag: "</mark>"
                };

            function f(e) {
                var t;
                return (0, i.P)(e) && "string" != typeof e.value ? Object.keys(e).reduce(function(t, n) {
                    return o(o({}, t), {}, s({}, n, f(e[n])))
                }, {}) : Array.isArray(e) ? e.map(f) : o(o({}, e), {}, {
                    value: (t = e.value, (0, r.Y)(t).replace(RegExp(u.highlightPreTag, "g"), l.highlightPreTag).replace(RegExp(u.highlightPostTag, "g"), l.highlightPostTag))
                })
            }

            function h(e) {
                return void 0 === e.__escaped && ((e = e.map(function(e) {
                    var t = a({}, e);
                    return t._highlightResult && (t._highlightResult = f(t._highlightResult)), t._snippetResult && (t._snippetResult = f(t._snippetResult)), t
                })).__escaped = !0), e
            }
        },
        796641: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return l
                },
                Y: function() {
                    return c
                }
            });
            var r = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                i = /[&<>"']/g,
                a = RegExp(i.source);

            function c(e) {
                return e && a.test(e) ? e.replace(i, function(e) {
                    return r[e]
                }) : e
            }
            var o = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                s = /&(amp|quot|lt|gt|#39);/g,
                u = RegExp(s.source);

            function l(e) {
                return e && u.test(e) ? e.replace(s, function(e) {
                    return o[e]
                }) : e
            }
        },
        712595: function(e, t, n) {
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e) {
                if (!("object" === r(e) && null !== e) || "[object Object]" !== (null === e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e))) return !1;
                if (null === Object.getPrototypeOf(e)) return !0;
                for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            }
            n.d(t, {
                P: function() {
                    return i
                }
            })
        },
        619538: function(e, t, n) {
            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = function(e, t) {
                    t.facets, t.disjunctiveFacets, t.facetsRefinements, t.facetsExcludes, t.disjunctiveFacetsRefinements, t.numericRefinements, t.tagRefinements, t.hierarchicalFacets, t.hierarchicalFacetsRefinements, t.ruleContexts;
                    var n = function(e, t) {
                        if (null == e) return {};
                        var n, r, i = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                        }
                        return i
                    }(t, ["facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements", "ruleContexts"]);
                    return e.setQueryParameters(n)
                },
                c = function(e, t) {
                    var n = [].concat(e.ruleContexts).concat(t.ruleContexts).filter(Boolean).filter(function(e, t, n) {
                        return n.indexOf(e) === t
                    });
                    return n.length > 0 ? e.setQueryParameters({
                        ruleContexts: n
                    }) : e
                },
                o = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.reduce(function(e, t) {
                        var n, r, o, s, u, l, f, h;
                        return a((h = c((r = (n = e.setQueryParameters({
                            hierarchicalFacetsRefinements: i(i({}, e.hierarchicalFacetsRefinements), t.hierarchicalFacetsRefinements)
                        })).setQueryParameters({
                            hierarchicalFacets: t.hierarchicalFacets.reduce(function(e, t) {
                                var n = function(e, t) {
                                    if (!Array.isArray(e)) return -1;
                                    for (var n = 0; n < e.length; n++)
                                        if (t(e[n])) return n;
                                    return -1
                                }(e, function(e) {
                                    return e.name === t.name
                                });
                                if (-1 === n) return e.concat(t);
                                var r = e.slice();
                                return r.splice(n, 1, t), r
                            }, n.hierarchicalFacets)
                        }), f = (l = (u = (s = (o = t.tagRefinements.reduce(function(e, t) {
                            return e.addTagRefinement(t)
                        }, r)).setQueryParameters({
                            numericRefinements: i(i({}, o.numericRefinements), t.numericRefinements)
                        })).setQueryParameters({
                            disjunctiveFacetsRefinements: i(i({}, s.disjunctiveFacetsRefinements), t.disjunctiveFacetsRefinements)
                        })).setQueryParameters({
                            facetsExcludes: i(i({}, u.facetsExcludes), t.facetsExcludes)
                        })).setQueryParameters({
                            facetsRefinements: i(i({}, l.facetsRefinements), t.facetsRefinements)
                        }), t.disjunctiveFacets.reduce(function(e, t) {
                            return e.addDisjunctiveFacet(t)
                        }, f)), t), t.facets.reduce(function(e, t) {
                            return e.addFacet(t)
                        }, h)), t)
                    })
                }
        },
        891264: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });

            function r() {}
        },
        968838: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return r
                }
            });

            function r(e) {
                return btoa(encodeURIComponent(JSON.stringify(e)))
            }
        },
        643263: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return m
                }
            });
            var r = n(361116),
                i = n(712741),
                a = n(891264),
                c = n(712595),
                o = n(619538);

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        l(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var f = (0, i.K)({
                name: "configure",
                connector: !0
            });

            function h(e, t) {
                return e.setQueryParameters(Object.keys(t.searchParameters).reduce(function(e, t) {
                    return u(u({}, e), {}, l({}, t, void 0))
                }, {}))
            }
            var d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Z,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z;
                    return function(n) {
                        if (!n || !(0, c.P)(n.searchParameters)) throw Error(f("The `searchParameters` option expects an object."));
                        var i = {};
                        return {
                            $$type: "ais.configure",
                            init: function(t) {
                                var n = t.instantSearchInstance;
                                e(u(u({}, this.getWidgetRenderState(t)), {}, {
                                    instantSearchInstance: n
                                }), !0)
                            },
                            render: function(t) {
                                var n = t.instantSearchInstance;
                                e(u(u({}, this.getWidgetRenderState(t)), {}, {
                                    instantSearchInstance: n
                                }), !1)
                            },
                            dispose: function(e) {
                                var r = e.state;
                                return t(), h(r, n)
                            },
                            getRenderState: function(e, t) {
                                var n, i = this.getWidgetRenderState(t);
                                return u(u({}, e), {}, {
                                    configure: u(u({}, i), {}, {
                                        widgetParams: u(u({}, i.widgetParams), {}, {
                                            searchParameters: (0, o.Z)(new r.SearchParameters(null === (n = e.configure) || void 0 === n ? void 0 : n.widgetParams.searchParameters), new r.SearchParameters(i.widgetParams.searchParameters)).getQueryParams()
                                        })
                                    })
                                })
                            },
                            getWidgetRenderState: function(e) {
                                var t = e.helper;
                                return i.refine || (i.refine = function(e) {
                                    var i = h(t.state, n),
                                        a = (0, o.Z)(i, new r.SearchParameters(e));
                                    n.searchParameters = e, t.setState(a).search()
                                }), {
                                    refine: i.refine,
                                    widgetParams: n
                                }
                            },
                            getWidgetSearchParameters: function(e, t) {
                                var i = t.uiState;
                                return (0, o.Z)(e, new r.SearchParameters(u(u({}, i.configure), n.searchParameters)))
                            },
                            getWidgetUiState: function(e) {
                                return u(u({}, e), {}, {
                                    configure: u(u({}, e.configure), n.searchParameters)
                                })
                            }
                        }
                    }
                },
                p = n(337937);

            function m(e) {
                return (0, p.B)(d, {
                    searchParameters: e
                }, {
                    $$widgetType: "ais.configure"
                }), null
            }
        },
        208323: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return eF
                }
            });
            var r = n(190581),
                i = n(652983),
                a = n(934830),
                c = n(48226),
                o = n(361116),
                s = n(24677),
                u = n(712741);

            function l(e) {
                return "ais.index" === e.$$type
            }

            function f(e, t, n) {
                var r = t.getHelper();
                return {
                    uiState: n,
                    helper: r,
                    parent: t,
                    instantSearchInstance: e,
                    state: r.state,
                    renderState: e.renderState,
                    templatesConfig: e.templatesConfig,
                    createURL: t.createURL,
                    scopedResults: [],
                    searchMetadata: {
                        isSearchStalled: "stalled" === e.status
                    },
                    status: e.status,
                    error: e.error
                }
            }

            function h(e, t) {
                var n = t.getResults();
                return {
                    helper: t.getHelper(),
                    parent: t,
                    instantSearchInstance: e,
                    results: n,
                    scopedResults: t.getScopedResults(),
                    state: n._state,
                    renderState: e.renderState,
                    templatesConfig: e.templatesConfig,
                    createURL: t.createURL,
                    searchMetadata: {
                        isSearchStalled: "stalled" === e.status
                    },
                    status: e.status,
                    error: e.error
                }
            }
            var d = n(619538);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        g(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function g(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return y(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return y(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var b = (0, u.K)({
                name: "index-widget"
            });

            function R(e, t) {
                var n = t.state,
                    r = t.isPageReset,
                    i = t._uiState;
                n !== e.state && (e.state = n, e.emit("change", {
                    state: e.state,
                    results: e.lastResults,
                    isPageReset: r,
                    _uiState: i
                }))
            }

            function O(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return e.reduce(function(e, n) {
                    return !l(n) && (n.getWidgetUiState || n.getWidgetState) ? n.getWidgetUiState ? n.getWidgetUiState(e, t) : n.getWidgetState(e, t) : e
                }, n)
            }

            function j(e, t) {
                var n = t.initialSearchParameters,
                    r = function(e, t) {
                        if (null == e) return {};
                        var n, r, i = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                        }
                        return i
                    }(t, ["initialSearchParameters"]);
                return e.filter(function(e) {
                    return !l(e)
                }).reduce(function(e, t) {
                    return t.getWidgetSearchParameters ? t.getWidgetSearchParameters(e, r) : e
                }, n)
            }
            var P = function(e) {
                if (void 0 === e || void 0 === e.indexName) throw Error(b("The `indexName` option is required."));
                var t = e.indexName,
                    n = e.indexId,
                    r = void 0 === n ? t : n,
                    i = [],
                    a = {},
                    c = null,
                    s = null,
                    u = null,
                    p = null;
                return {
                    $$type: "ais.index",
                    $$widgetType: "ais.index",
                    getIndexName: function() {
                        return t
                    },
                    getIndexId: function() {
                        return r
                    },
                    getHelper: function() {
                        return u
                    },
                    getResults: function() {
                        return p && p.lastResults
                    },
                    getScopedResults: function() {
                        var e = this.getParent();
                        return function e(t) {
                            return t.filter(l).reduce(function(t, n) {
                                return t.concat.apply(t, [{
                                    indexId: n.getIndexId(),
                                    results: n.getResults(),
                                    helper: n.getHelper()
                                }].concat(v(e(n.getWidgets()))))
                            }, [])
                        }(e ? e.getWidgets() : [this])
                    },
                    getParent: function() {
                        return s
                    },
                    createURL: function(e) {
                        return c._createURL(g({}, r, O(i, {
                            searchParameters: e,
                            helper: u
                        })))
                    },
                    getWidgets: function() {
                        return i
                    },
                    addWidgets: function(e) {
                        var t = this;
                        if (!Array.isArray(e)) throw Error(b("The `addWidgets` method expects an array of widgets."));
                        if (e.some(function(e) {
                                return "function" != typeof e.init && "function" != typeof e.render
                            })) throw Error(b("The widget definition expects a `render` and/or an `init` method."));
                        return i = i.concat(e), c && e.length && (R(u, {
                            state: j(i, {
                                uiState: a,
                                initialSearchParameters: u.state
                            }),
                            _uiState: a
                        }), e.forEach(function(e) {
                            e.getRenderState && w({
                                renderState: e.getRenderState(c.renderState[t.getIndexId()] || {}, f(c, t, c._initialUiState)),
                                instantSearchInstance: c,
                                parent: t
                            })
                        }), e.forEach(function(e) {
                            e.init && e.init(f(c, t, c._initialUiState))
                        }), c.scheduleSearch()), this
                    },
                    removeWidgets: function(e) {
                        var t = this;
                        if (!Array.isArray(e)) throw Error(b("The `removeWidgets` method expects an array of widgets."));
                        if (e.some(function(e) {
                                return "function" != typeof e.dispose
                            })) throw Error(b("The widget definition expects a `dispose` method."));
                        if (i = i.filter(function(t) {
                                return -1 === e.indexOf(t)
                            }), c && e.length) {
                            var n = e.reduce(function(e, n) {
                                return n.dispose({
                                    helper: u,
                                    state: e,
                                    parent: t
                                }) || e
                            }, u.state);
                            a = O(i, {
                                searchParameters: n,
                                helper: u
                            }), u.setState(j(i, {
                                uiState: a,
                                initialSearchParameters: n
                            })), i.length && c.scheduleSearch()
                        }
                        return this
                    },
                    init: function(e) {
                        var n, h = this,
                            m = e.instantSearchInstance,
                            g = e.parent,
                            y = e.uiState;
                        if (null === u) {
                            c = m, s = g, a = y[r] || {};
                            var b = m.mainHelper,
                                P = j(i, {
                                    uiState: a,
                                    initialSearchParameters: new o.SearchParameters({
                                        index: t
                                    })
                                });
                            (u = o({}, P.index, P)).search = function() {
                                return m.onStateChange ? (m.onStateChange({
                                    uiState: m.mainIndex.getWidgetUiState({}),
                                    setUiState: function(e) {
                                        return m.setUiState(e, !1)
                                    }
                                }), b) : b.search()
                            }, u.searchWithoutTriggeringOnStateChange = function() {
                                return b.search()
                            }, u.searchForFacetValues = function(e, t, n, r) {
                                var i = u.state.setQueryParameters(r);
                                return b.searchForFacetValues(e, t, n, i)
                            }, p = b.derive(function() {
                                return d.Z.apply(void 0, v(function(e) {
                                    for (var t = e.getParent(), n = [e.getHelper().state]; null !== t;) n = [t.getHelper().state].concat(n), t = t.getParent();
                                    return n
                                }(h)))
                            });
                            var S = null === (n = m._initialResults) || void 0 === n ? void 0 : n[this.getIndexId()];
                            if (S) {
                                var E = new o.SearchResults(new o.SearchParameters(S.state), S.results);
                                p.lastResults = E, u.lastResults = E
                            }
                            u.on("change", function(e) {
                                e.isPageReset && function e(t) {
                                    var n = t.filter(l);
                                    0 !== n.length && n.forEach(function(t) {
                                        var n = t.getHelper();
                                        R(n, {
                                            state: n.state.resetPage(),
                                            isPageReset: !0
                                        }), e(t.getWidgets())
                                    })
                                }(i)
                            }), p.on("search", function() {
                                m.scheduleStalledRender()
                            }), p.on("result", function(e) {
                                var t = e.results;
                                m.scheduleRender(), u.lastResults = t
                            }), i.forEach(function(e) {
                                e.getRenderState && w({
                                    renderState: e.getRenderState(m.renderState[h.getIndexId()] || {}, f(m, h, y)),
                                    instantSearchInstance: m,
                                    parent: h
                                })
                            }), i.forEach(function(e) {
                                e.init && e.init(f(m, h, y))
                            }), u.on("change", function(e) {
                                var t = e.state,
                                    n = e._uiState;
                                a = O(i, {
                                    searchParameters: t,
                                    helper: u
                                }, n || {}), m.onStateChange || m.onInternalStateChange()
                            }), S && m.scheduleRender()
                        }
                    },
                    render: function(e) {
                        var t = this,
                            n = e.instantSearchInstance;
                        this.getResults() && (i.forEach(function(e) {
                            e.getRenderState && w({
                                renderState: e.getRenderState(n.renderState[t.getIndexId()] || {}, h(n, t)),
                                instantSearchInstance: n,
                                parent: t
                            })
                        }), i.forEach(function(e) {
                            e.render && e.render(h(n, t))
                        }))
                    },
                    dispose: function() {
                        var e = this;
                        i.forEach(function(t) {
                            t.dispose && t.dispose({
                                helper: u,
                                state: u.state,
                                parent: e
                            })
                        }), c = null, s = null, u.removeAllListeners(), u = null, p.detach(), p = null
                    },
                    getWidgetUiState: function(e) {
                        return i.filter(l).reduce(function(e, t) {
                            return t.getWidgetUiState(e)
                        }, m(m({}, e), {}, g({}, r, m(m({}, e[r]), a))))
                    },
                    getWidgetState: function(e) {
                        return this.getWidgetUiState(e)
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState;
                        return j(i, {
                            uiState: n,
                            initialSearchParameters: e
                        })
                    },
                    refreshUiState: function() {
                        a = O(i, {
                            searchParameters: this.getHelper().state,
                            helper: this.getHelper()
                        }, a)
                    }
                }
            };

            function w(e) {
                var t = e.renderState,
                    n = e.instantSearchInstance,
                    r = e.parent,
                    i = r ? r.getIndexId() : n.mainIndex.getIndexId();
                n.renderState = m(m({}, n.renderState), {}, g({}, i, m(m({}, n.renderState[i]), t)))
            }
            var S = function(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.descendantName,
                        r = t.modifierName,
                        i = n ? "-".concat(n) : "",
                        a = r ? "--".concat(r) : "";
                    return "".concat("ais", "-").concat(e).concat(i).concat(a)
                }
            };

            function E(e, t) {
                return (Array.isArray(t) ? t : t.split(".")).reduce(function(e, t) {
                    return e && e[t]
                }, e)
            }
            var F = n(895933),
                x = S("Highlight");

            function _(e) {
                var t = F.Rn.highlightPreTag,
                    n = F.Rn.highlightPostTag;
                return e.map(function(e) {
                    return e.isHighlighted ? t + e.value + n : e.value
                }).join("")
            }
            var T = n(796641),
                C = new RegExp(/\w/i);

            function D(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(n), !0).forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function I(e) {
                return e.some(function(e) {
                    return e.isHighlighted
                }) ? e.map(function(t, n) {
                    var r, i, a, c, o;
                    return N(N({}, t), {}, {
                        isHighlighted: (a = e[n], c = (null === (r = e[n + 1]) || void 0 === r ? void 0 : r.isHighlighted) || !0, o = (null === (i = e[n - 1]) || void 0 === i ? void 0 : i.isHighlighted) || !0, C.test((0, T.A)(a.value)) || o !== c ? !a.isHighlighted : !o)
                    })
                }) : e.map(function(e) {
                    return N(N({}, e), {}, {
                        isHighlighted: !1
                    })
                })
            }

            function k(e) {
                var t = F.Rn.highlightPostTag,
                    n = F.Rn.highlightPreTag,
                    r = e.split(n),
                    i = r.shift(),
                    a = i ? [{
                        value: i,
                        isHighlighted: !1
                    }] : [];
                return r.forEach(function(e) {
                    var n = e.split(t);
                    a.push({
                        value: n[0],
                        isHighlighted: !0
                    }), "" !== n[1] && a.push({
                        value: n[1],
                        isHighlighted: !1
                    })
                }), a
            }
            var A = S("ReverseHighlight"),
                H = S("Snippet"),
                L = S("ReverseSnippet"),
                W = n(968838);

            function Q(e) {
                return (Q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function U(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(n), !0).forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Z = Promise.resolve();

            function B(e) {
                var t = null,
                    n = !1,
                    r = function() {
                        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                        null === t && (t = Z.then(function() {
                            if (t = null, n) {
                                n = !1;
                                return
                            }
                            e.apply(void 0, i)
                        }))
                    };
                return r.wait = function() {
                    if (null === t) throw Error("The deferred function should be called before calling `wait()`");
                    return t
                }, r.cancel = function() {
                    null !== t && (n = !0)
                }, r
            }
            var q = n(891264);

            function $(e, t) {
                var n = e[t.getIndexId()] || {};
                t.getHelper().setState(t.getWidgetSearchParameters(t.getHelper().state, {
                    uiState: n
                })), t.getWidgets().filter(l).forEach(function(t) {
                    return $(e, t)
                })
            }

            function V(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? V(Object(n), !0).forEach(function(t) {
                        J(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function J(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function K(e) {
                return e.configure,
                    function(e, t) {
                        if (null == e) return {};
                        var n, r, i = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                        }
                        return i
                    }(e, ["configure"])
            }
            var Y = n(441310);

            function X(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        fallback: function() {}
                    },
                    n = t.fallback;
                return "undefined" == typeof window ? n() : e({
                    window: window
                })
            }

            function G(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function ee(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var et = function(e) {
                    e && (window.document.title = e)
                },
                en = function() {
                    var e, t;

                    function n(e) {
                        var t = this,
                            r = e.windowTitle,
                            i = e.writeDelay,
                            a = e.createURL,
                            c = e.parseURL,
                            o = e.getLocation;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, n), ee(this, "windowTitle", void 0), ee(this, "writeDelay", void 0), ee(this, "_createURL", void 0), ee(this, "parseURL", void 0), ee(this, "getLocation", void 0), ee(this, "writeTimer", void 0), ee(this, "inPopState", !1), ee(this, "isDisposed", !1), ee(this, "latestAcknowledgedHistory", 0), this.windowTitle = r, this.writeTimer = void 0, this.writeDelay = void 0 === i ? 400 : i, this._createURL = a, this.parseURL = c, this.getLocation = o, X(function(e) {
                            var n = e.window;
                            et(t.windowTitle && t.windowTitle(t.read())), t.latestAcknowledgedHistory = n.history.length
                        })
                    }
                    return e = [{
                        key: "read",
                        value: function() {
                            return this.parseURL({
                                qsModule: Y,
                                location: this.getLocation()
                            })
                        }
                    }, {
                        key: "write",
                        value: function(e) {
                            var t = this;
                            X(function(n) {
                                var r = n.window,
                                    i = t.createURL(e),
                                    a = t.windowTitle && t.windowTitle(e);
                                t.writeTimer && clearTimeout(t.writeTimer), t.writeTimer = setTimeout(function() {
                                    et(a), t.shouldWrite(i) && (r.history.pushState(e, a || "", i), t.latestAcknowledgedHistory = r.history.length), t.inPopState = !1, t.writeTimer = void 0
                                }, t.writeDelay)
                            })
                        }
                    }, {
                        key: "onUpdate",
                        value: function(e) {
                            var t = this;
                            this._onPopState = function(n) {
                                t.writeTimer && (clearTimeout(t.writeTimer), t.writeTimer = void 0), t.inPopState = !0;
                                var r = n.state;
                                r ? e(r) : e(t.read())
                            }, X(function(e) {
                                e.window.addEventListener("popstate", t._onPopState)
                            })
                        }
                    }, {
                        key: "createURL",
                        value: function(e) {
                            return this._createURL({
                                qsModule: Y,
                                routeState: e,
                                location: this.getLocation()
                            })
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            var e = this;
                            this.isDisposed = !0, X(function(t) {
                                var n = t.window;
                                e._onPopState && n.removeEventListener("popstate", e._onPopState)
                            }), this.writeTimer && clearTimeout(this.writeTimer), this.write({})
                        }
                    }, {
                        key: "shouldWrite",
                        value: function(e) {
                            var t = this;
                            return X(function(n) {
                                var r = n.window,
                                    i = !(t.isDisposed && t.latestAcknowledgedHistory !== r.history.length);
                                return !t.inPopState && i && e !== r.location.href
                            })
                        }
                    }], G(n.prototype, e), t && G(n, t), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n
                }();

            function er(e) {
                return e !== Object(e)
            }

            function ei(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ea(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ei(Object(n), !0).forEach(function(t) {
                        ec(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ei(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function ec(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var eo = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.router,
                    n = void 0 === t ? function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.createURL,
                            n = void 0 === t ? function(e) {
                                var t = e.qsModule,
                                    n = e.routeState,
                                    r = e.location,
                                    i = r.protocol,
                                    a = r.hostname,
                                    c = r.port,
                                    o = void 0 === c ? "" : c,
                                    s = r.pathname,
                                    u = r.hash,
                                    l = t.stringify(n),
                                    f = "" === o ? "" : ":".concat(o);
                                return l ? "".concat(i, "//").concat(a).concat(f).concat(s, "?").concat(l).concat(u) : "".concat(i, "//").concat(a).concat(f).concat(s).concat(u)
                            } : t,
                            r = e.parseURL,
                            i = e.writeDelay,
                            a = e.windowTitle,
                            c = e.getLocation,
                            o = void 0 === c ? function() {
                                return X(function(e) {
                                    return e.window.location
                                }, {
                                    fallback: function() {
                                        throw Error("You need to provide `getLocation` to the `history` router in environments where `window` does not exist.")
                                    }
                                })
                            } : c;
                        return new en({
                            createURL: n,
                            parseURL: void 0 === r ? function(e) {
                                var t = e.qsModule,
                                    n = e.location;
                                return t.parse(n.search.slice(1), {
                                    arrayLimit: 99
                                })
                            } : r,
                            writeDelay: void 0 === i ? 400 : i,
                            windowTitle: a,
                            getLocation: o
                        })
                    }() : t,
                    r = e.stateMapping,
                    i = void 0 === r ? {
                        stateToRoute: function(e) {
                            return Object.keys(e).reduce(function(t, n) {
                                return z(z({}, t), {}, J({}, n, K(e[n])))
                            }, {})
                        },
                        routeToState: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return Object.keys(e).reduce(function(t, n) {
                                return z(z({}, t), {}, J({}, n, K(e[n])))
                            }, {})
                        }
                    } : r;
                return function(e) {
                    var t = e.instantSearchInstance;
                    t._createURL = function(e) {
                        var r = Object.keys(e).reduce(function(t, n) {
                                return ea(ea({}, t), {}, ec({}, n, e[n]))
                            }, t.mainIndex.getWidgetUiState({})),
                            a = i.stateToRoute(r);
                        return n.createURL(a)
                    };
                    var r = void 0,
                        a = t._initialUiState;
                    return {
                        onStateChange: function(e) {
                            var t = e.uiState,
                                a = i.stateToRoute(t);
                            (void 0 === r || ! function e(t, n) {
                                if (t === n) return !0;
                                if (er(t) || er(n) || "function" == typeof t || "function" == typeof n) return t === n;
                                if (Object.keys(t).length !== Object.keys(n).length) return !1;
                                for (var r = 0, i = Object.keys(t); r < i.length; r++) {
                                    var a = i[r];
                                    if (!(a in n) || !e(t[a], n[a])) return !1
                                }
                                return !0
                            }(r, a)) && (n.write(a), r = a)
                        },
                        subscribe: function() {
                            t._initialUiState = ea(ea({}, a), i.routeToState(n.read())), n.onUpdate(function(e) {
                                t.setUiState(i.routeToState(e))
                            })
                        },
                        started: function() {},
                        unsubscribe: function() {
                            n.dispose()
                        }
                    }
                }
            };

            function es(e) {
                return (es = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function eu(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function el(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function ef(e, t) {
                return (ef = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function eh(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ed(e) {
                return (ed = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function ep(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var em = (0, u.K)({
                name: "instantsearch"
            });

            function eg() {
                return "#"
            }
            var ev = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && ef(e, t)
                    }(a, e);
                    var t, n, r, i = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = ed(a);
                        if (t) {
                            var r = ed(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === es(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                            return eh(e)
                        }(this, e)
                    });

                    function a(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, a), ep(eh(t = i.call(this)), "client", void 0), ep(eh(t), "indexName", void 0), ep(eh(t), "insightsClient", void 0), ep(eh(t), "onStateChange", null), ep(eh(t), "helper", void 0), ep(eh(t), "mainHelper", void 0), ep(eh(t), "mainIndex", void 0), ep(eh(t), "started", void 0), ep(eh(t), "templatesConfig", void 0), ep(eh(t), "renderState", {}), ep(eh(t), "_stalledSearchDelay", void 0), ep(eh(t), "_searchStalledTimer", void 0), ep(eh(t), "_initialUiState", void 0), ep(eh(t), "_initialResults", void 0), ep(eh(t), "_createURL", void 0), ep(eh(t), "_searchFunction", void 0), ep(eh(t), "_mainHelperSearch", void 0), ep(eh(t), "middleware", []), ep(eh(t), "sendEventToInsights", void 0), ep(eh(t), "status", "idle"), ep(eh(t), "error", void 0), ep(eh(t), "scheduleSearch", B(function() {
                            t.started && t.mainHelper.search()
                        })), ep(eh(t), "scheduleRender", B(function() {
                            var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                            !t.mainHelper.hasPendingRequests() && (clearTimeout(t._searchStalledTimer), t._searchStalledTimer = null, e && (t.status = "idle", t.error = void 0)), t.mainIndex.render({
                                instantSearchInstance: eh(t)
                            }), t.emit("render")
                        })), ep(eh(t), "onInternalStateChange", B(function() {
                            var e = t.mainIndex.getWidgetUiState({});
                            t.middleware.forEach(function(t) {
                                t.instance.onStateChange({
                                    uiState: e
                                })
                            })
                        })), t.setMaxListeners(100);
                        var t, n = e.indexName,
                            r = void 0 === n ? null : n,
                            c = e.numberLocale,
                            o = e.initialUiState,
                            s = e.routing,
                            u = void 0 === s ? null : s,
                            l = e.searchFunction,
                            h = e.stalledSearchDelay,
                            d = e.searchClient,
                            p = void 0 === d ? null : d,
                            m = e.insightsClient,
                            g = void 0 === m ? null : m,
                            v = e.onStateChange;
                        if (null === r) throw Error(em("The `indexName` option is required."));
                        if (null === p) throw Error(em("The `searchClient` option is required."));
                        if ("function" != typeof p.search) throw Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
                        if ("function" == typeof p.addAlgoliaAgent && p.addAlgoliaAgent("instantsearch.js (".concat("4.49.2", ")")), g && "function" != typeof g) throw Error(em("The `insightsClient` option should be a function."));
                        if (t.client = p, t.insightsClient = g, t.indexName = r, t.helper = null, t.mainHelper = null, t.mainIndex = P({
                                indexName: r
                            }), t.onStateChange = void 0 === v ? null : v, t.started = !1, t.templatesConfig = {
                                helpers: {
                                    formatNumber: function(e, t) {
                                        return Number(t(e)).toLocaleString(c)
                                    },
                                    highlight: function(e, t) {
                                        try {
                                            var n, r, i, a, c, o, s, u, l, f = JSON.parse(e);
                                            return t((r = (n = M(M({}, f), {}, {
                                                hit: this
                                            })).attribute, i = n.highlightedTagName, a = void 0 === i ? "mark" : i, c = n.hit, o = n.cssClasses, s = void 0 === o ? {} : o, u = (E(c._highlightResult, r) || {}).value, l = x({
                                                descendantName: "highlighted"
                                            }) + (s.highlighted ? " ".concat(s.highlighted) : ""), (void 0 === u ? "" : u).replace(RegExp(F.Rn.highlightPreTag, "g"), "<".concat(a, ' class="').concat(l, '">')).replace(RegExp(F.Rn.highlightPostTag, "g"), "</".concat(a, ">"))))
                                        } catch (e) {
                                            throw Error('\nThe highlight helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }')
                                        }
                                    },
                                    reverseHighlight: function(e, t) {
                                        try {
                                            var n, r, i, a, c, o, s, u, l, f, h = JSON.parse(e);
                                            return t((r = (n = M(M({}, h), {}, {
                                                hit: this
                                            })).attribute, i = n.highlightedTagName, a = void 0 === i ? "mark" : i, c = n.hit, o = n.cssClasses, s = void 0 === o ? {} : o, u = (E(c._highlightResult, r) || {}).value, l = void 0 === u ? "" : u, f = A({
                                                descendantName: "highlighted"
                                            }) + (s.highlighted ? " ".concat(s.highlighted) : ""), _(I(k(l))).replace(RegExp(F.Rn.highlightPreTag, "g"), "<".concat(a, ' class="').concat(f, '">')).replace(RegExp(F.Rn.highlightPostTag, "g"), "</".concat(a, ">"))))
                                        } catch (e) {
                                            throw Error('\n  The reverseHighlight helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }')
                                        }
                                    },
                                    snippet: function(e, t) {
                                        try {
                                            var n, r, i, a, c, o, s, u, l, f = JSON.parse(e);
                                            return t((r = (n = M(M({}, f), {}, {
                                                hit: this
                                            })).attribute, i = n.highlightedTagName, a = void 0 === i ? "mark" : i, c = n.hit, o = n.cssClasses, s = void 0 === o ? {} : o, u = (E(c._snippetResult, r) || {}).value, l = H({
                                                descendantName: "highlighted"
                                            }) + (s.highlighted ? " ".concat(s.highlighted) : ""), (void 0 === u ? "" : u).replace(RegExp(F.Rn.highlightPreTag, "g"), "<".concat(a, ' class="').concat(l, '">')).replace(RegExp(F.Rn.highlightPostTag, "g"), "</".concat(a, ">"))))
                                        } catch (e) {
                                            throw Error('\nThe snippet helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }')
                                        }
                                    },
                                    reverseSnippet: function(e, t) {
                                        try {
                                            var n, r, i, a, c, o, s, u, l, f, h = JSON.parse(e);
                                            return t((r = (n = M(M({}, h), {}, {
                                                hit: this
                                            })).attribute, i = n.highlightedTagName, a = void 0 === i ? "mark" : i, c = n.hit, o = n.cssClasses, s = void 0 === o ? {} : o, u = (E(c._snippetResult, r) || {}).value, l = void 0 === u ? "" : u, f = L({
                                                descendantName: "highlighted"
                                            }) + (s.highlighted ? " ".concat(s.highlighted) : ""), _(I(k(l))).replace(RegExp(F.Rn.highlightPreTag, "g"), "<".concat(a, ' class="').concat(f, '">')).replace(RegExp(F.Rn.highlightPostTag, "g"), "</".concat(a, ">"))))
                                        } catch (e) {
                                            throw Error('\n  The reverseSnippet helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }')
                                        }
                                    },
                                    insights: function(e, t) {
                                        try {
                                            var n, r = JSON.parse(e),
                                                i = r.method,
                                                a = r.payload;
                                            return t((n = M({
                                                objectIDs: [this.objectID]
                                            }, a), function(e) {
                                                var t, n = e.method,
                                                    r = e.payload;
                                                if ("object" !== Q(r)) throw Error("The insights helper expects the payload to be an object.");
                                                try {
                                                    t = (0, W.a)(r)
                                                } catch (e) {
                                                    throw Error("Could not JSON serialize the payload object.")
                                                }
                                                return 'data-insights-method="'.concat(n, '" data-insights-payload="').concat(t, '"')
                                            }({
                                                method: i,
                                                payload: n
                                            })))
                                        } catch (e) {
                                            throw Error('\nThe insights helper expects a JSON object of the format:\n{ "method": "method-name", "payload": { "eventName": "name of the event" } }')
                                        }
                                    }
                                },
                                compileOptions: {}
                            }, t._stalledSearchDelay = void 0 === h ? 200 : h, t._searchStalledTimer = null, t._createURL = eg, t._initialUiState = void 0 === o ? {} : o, t._initialResults = null, l && (t._searchFunction = l), t.sendEventToInsights = q.Z, u) {
                            var y = "boolean" == typeof u ? void 0 : u;
                            t.use(eo(y))
                        }
                        return X(function(e) {
                            var t, n;
                            return (null === (t = e.window.navigator) || void 0 === t ? void 0 : null === (n = t.userAgent) || void 0 === n ? void 0 : n.indexOf("Algolia Crawler")) > -1
                        }, {
                            fallback: function() {
                                return !1
                            }
                        }) && t.use(function(e) {
                            var t = e.instantSearchInstance,
                                n = {
                                    widgets: []
                                },
                                r = document.createElement("meta"),
                                i = document.querySelector("head");
                            return r.name = "instantsearch:widgets", {
                                onStateChange: function() {},
                                subscribe: function() {
                                    setTimeout(function() {
                                        var e = t.client;
                                        n.ua = e.transporter && e.transporter.userAgent ? e.transporter.userAgent.value : e._ua,
                                            function e(t, n, r) {
                                                var i = f(n, n.mainIndex, n._initialUiState);
                                                t.forEach(function(t) {
                                                    var a = {};
                                                    if (t.getWidgetRenderState) {
                                                        var c = t.getWidgetRenderState(i);
                                                        c && c.widgetParams && (a = c.widgetParams)
                                                    }
                                                    var o = Object.keys(a).filter(function(e) {
                                                        return void 0 !== a[e]
                                                    });
                                                    r.widgets.push({
                                                        type: t.$$type,
                                                        widgetType: t.$$widgetType,
                                                        params: o
                                                    }), "ais.index" === t.$$type && e(t.getWidgets(), n, r)
                                                })
                                            }(t.mainIndex.getWidgets(), t, n), r.content = JSON.stringify(n), i.appendChild(r)
                                    }, 0)
                                },
                                started: function() {},
                                unsubscribe: function() {
                                    r.remove()
                                }
                            }
                        }), t
                    }
                    return n = [{
                        key: "_isSearchStalled",
                        get: function() {
                            return "stalled" === this.status
                        }
                    }, {
                        key: "use",
                        value: function() {
                            for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var i = n.map(function(t) {
                                var n = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? eu(Object(n), !0).forEach(function(t) {
                                            ep(e, t, n[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eu(Object(n)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        })
                                    }
                                    return e
                                }({
                                    subscribe: q.Z,
                                    started: q.Z,
                                    unsubscribe: q.Z,
                                    onStateChange: q.Z
                                }, t({
                                    instantSearchInstance: e
                                }));
                                return e.middleware.push({
                                    creator: t,
                                    instance: n
                                }), n
                            });
                            return this.started && i.forEach(function(e) {
                                e.subscribe(), e.started()
                            }), this
                        }
                    }, {
                        key: "unuse",
                        value: function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.middleware.filter(function(e) {
                                return t.includes(e.creator)
                            }).forEach(function(e) {
                                return e.instance.unsubscribe()
                            }), this.middleware = this.middleware.filter(function(e) {
                                return !t.includes(e.creator)
                            }), this
                        }
                    }, {
                        key: "EXPERIMENTAL_use",
                        value: function() {
                            return this.use.apply(this, arguments)
                        }
                    }, {
                        key: "addWidget",
                        value: function(e) {
                            return this.addWidgets([e])
                        }
                    }, {
                        key: "addWidgets",
                        value: function(e) {
                            if (!Array.isArray(e)) throw Error(em("The `addWidgets` method expects an array of widgets. Please use `addWidget`."));
                            if (e.some(function(e) {
                                    return "function" != typeof e.init && "function" != typeof e.render
                                })) throw Error(em("The widget definition expects a `render` and/or an `init` method."));
                            return this.mainIndex.addWidgets(e), this
                        }
                    }, {
                        key: "removeWidget",
                        value: function(e) {
                            return this.removeWidgets([e])
                        }
                    }, {
                        key: "removeWidgets",
                        value: function(e) {
                            if (!Array.isArray(e)) throw Error(em("The `removeWidgets` method expects an array of widgets. Please use `removeWidget`."));
                            if (e.some(function(e) {
                                    return "function" != typeof e.dispose
                                })) throw Error(em("The widget definition expects a `dispose` method."));
                            return this.mainIndex.removeWidgets(e), this
                        }
                    }, {
                        key: "start",
                        value: function() {
                            var e = this;
                            if (this.started) throw Error(em("The `start` method has already been called once."));
                            var t = this.mainHelper || o(this.client, this.indexName);
                            if (t.search = function() {
                                    return e.status = "loading", e.emit("render"), t.searchOnlyWithDerivedHelpers()
                                }, this._searchFunction) {
                                var n = {
                                    search: function() {
                                        return new Promise(q.Z)
                                    }
                                };
                                this._mainHelperSearch = t.search.bind(t), t.search = function() {
                                    var r = e.mainIndex.getHelper(),
                                        i = o(n, r.state.index, r.state);
                                    return i.once("search", function(t) {
                                        var n = t.state;
                                        r.overrideStateWithoutTriggeringChangeEvent(n), e._mainHelperSearch()
                                    }), i.on("change", function(e) {
                                        var t = e.state;
                                        r.setState(t)
                                    }), e._searchFunction(i), t
                                }
                            }
                            if (t.on("error", function(t) {
                                    var n = t.error;
                                    if (!(n instanceof Error)) {
                                        var r = n;
                                        n = Object.keys(r).reduce(function(e, t) {
                                            return e[t] = r[t], e
                                        }, Error(r.message))
                                    }
                                    n.error = n, e.error = n, e.status = "error", e.scheduleRender(!1), e.emit("error", n)
                                }), this.mainHelper = t, this.middleware.forEach(function(e) {
                                    e.instance.subscribe()
                                }), this.mainIndex.init({
                                    instantSearchInstance: this,
                                    parent: null,
                                    uiState: this._initialUiState
                                }), this._initialResults) {
                                var r = this.scheduleSearch;
                                this.scheduleSearch = B(q.Z), B(function() {
                                    e.scheduleSearch = r
                                })()
                            } else this.mainIndex.getWidgets().length > 0 && this.scheduleSearch();
                            this.helper = this.mainIndex.getHelper(), this.started = !0, this.middleware.forEach(function(e) {
                                e.instance.started()
                            })
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            this.scheduleSearch.cancel(), this.scheduleRender.cancel(), clearTimeout(this._searchStalledTimer), this.removeWidgets(this.mainIndex.getWidgets()), this.mainIndex.dispose(), this.started = !1, this.removeAllListeners(), this.mainHelper.removeAllListeners(), this.mainHelper = null, this.helper = null, this.middleware.forEach(function(e) {
                                e.instance.unsubscribe()
                            })
                        }
                    }, {
                        key: "scheduleStalledRender",
                        value: function() {
                            var e = this;
                            this._searchStalledTimer || (this._searchStalledTimer = setTimeout(function() {
                                e.status = "stalled", e.scheduleRender()
                            }, this._stalledSearchDelay))
                        }
                    }, {
                        key: "setUiState",
                        value: function(e) {
                            var t = this,
                                n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            if (!this.mainHelper) throw Error(em("The `start` method needs to be called before `setUiState`."));
                            this.mainIndex.refreshUiState();
                            var r = "function" == typeof e ? e(this.mainIndex.getWidgetUiState({})) : e;
                            this.onStateChange && n ? this.onStateChange({
                                uiState: r,
                                setUiState: function(e) {
                                    $("function" == typeof e ? e(r) : e, t.mainIndex), t.scheduleSearch(), t.onInternalStateChange()
                                }
                            }) : ($(r, this.mainIndex), this.scheduleSearch(), this.onInternalStateChange())
                        }
                    }, {
                        key: "getUiState",
                        value: function() {
                            return this.started && this.mainIndex.refreshUiState(), this.mainIndex.getWidgetUiState({})
                        }
                    }, {
                        key: "createURL",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (!this.started) throw Error(em("The `start` method needs to be called before `createURL`."));
                            return this._createURL(e)
                        }
                    }, {
                        key: "refresh",
                        value: function() {
                            if (!this.mainHelper) throw Error(em("The `start` method needs to be called before `refresh`."));
                            this.mainHelper.clearCache().search()
                        }
                    }], el(a.prototype, n), r && el(a, r), Object.defineProperty(a, "prototype", {
                        writable: !1
                    }), a
                }(s),
                ey = n(183576),
                eb = n(764122),
                eR = (0, i.createContext)(null),
                eO = "6.38.1",
                ej = n(41869),
                eP = ["react (".concat(i.version, ")"), "react-instantsearch (".concat(eO, ")"), "react-instantsearch-hooks (".concat(eO, ")")],
                ew = "react-instantsearch-server (".concat(eO, ")");

            function eS(e, t) {
                "function" == typeof e.addAlgoliaAgent && t.filter(Boolean).forEach(function(t) {
                    e.addAlgoliaAgent(t)
                })
            }
            var eE = ["children"];

            function eF(e) {
                var t = e.children,
                    n = function(e) {
                        var t = (u = (0, i.useReducer)(function(e) {
                                return e + 1
                            }, 0), (0, ej.Z)(u, 2)[1]),
                            n = (0, eb.a)(),
                            r = (0, i.useContext)(eR),
                            a = null == r ? void 0 : r.initialResults,
                            c = (0, i.useRef)(null),
                            o = (0, i.useRef)(e);
                        if (null === c.current) {
                            var s = new ev(e);
                            (n || a) && (s._initialResults = a || {}), eS(e.searchClient, [].concat(eP, [n && ew])), (n || a) && s.start(), n && n.notifyServer({
                                search: s
                            }), c.current = s
                        }
                        var u, l, f = c.current,
                            h = o.current;
                        h.indexName !== e.indexName && (f.helper.setIndex(e.indexName).search(), o.current = e), h.searchClient !== e.searchClient && (eS(e.searchClient, [].concat(eP, [n && ew])), f.mainHelper.setClient(e.searchClient).search(), o.current = e), h.onStateChange !== e.onStateChange && (f.onStateChange = e.onStateChange, o.current = e), h.searchFunction !== e.searchFunction && (f._searchFunction = e.searchFunction, o.current = e), h.stalledSearchDelay !== e.stalledSearchDelay && (f._stalledSearchDelay = null !== (l = e.stalledSearchDelay) && void 0 !== l ? l : 200, o.current = e);
                        var d = (0, i.useRef)(null);
                        return (0, ey.useSyncExternalStore)((0, i.useCallback)(function() {
                            var e = c.current;
                            return null === d.current ? e.started || (e.start(), t()) : (clearTimeout(d.current), e._preventWidgetCleanup = !1),
                                function() {
                                    d.current = setTimeout(function() {
                                        e.dispose()
                                    }), e._preventWidgetCleanup = !0
                                }
                        }, [t]), function() {
                            return c.current
                        }, function() {
                            return c.current
                        })
                    }((0, r.Z)(e, eE));
                return n.started ? i.createElement(c.Z.Provider, {
                    value: n
                }, i.createElement(a.Z.Provider, {
                    value: n.mainIndex
                }, t)) : null
            }
        },
        348871: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return R
                }
            });
            var r = n(712741),
                i = n(891264),
                a = n(626336),
                c = n(968838);

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var s = function(e) {
                    var t = e.index,
                        n = e.widgetType,
                        r = (e.methodName, e.args),
                        i = e.isSearchStalled;
                    if (1 === r.length && "object" === o(r[0])) return [r[0]];
                    var a = r[0],
                        c = r[1],
                        s = r[2];
                    if (!c || ("click" === a || "conversion" === a) && !s) return [];
                    var u = Array.isArray(c) ? c.slice() : [c];
                    if (0 === u.length) return [];
                    var l = u[0].__queryID,
                        f = function(e) {
                            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n = [], r = 0; r < Math.ceil(e.length / t); r++) n.push(e.slice(r * t, (r + 1) * t));
                            return n
                        }(u),
                        h = f.map(function(e) {
                            return e.map(function(e) {
                                return e.objectID
                            })
                        }),
                        d = f.map(function(e) {
                            return e.map(function(e) {
                                return e.__position
                            })
                        });
                    return "view" === a ? i ? [] : f.map(function(e, r) {
                        return {
                            insightsMethod: "viewedObjectIDs",
                            widgetType: n,
                            eventType: a,
                            payload: {
                                eventName: s || "Hits Viewed",
                                index: t,
                                objectIDs: h[r]
                            },
                            hits: e
                        }
                    }) : "click" === a ? f.map(function(e, r) {
                        return {
                            insightsMethod: "clickedObjectIDsAfterSearch",
                            widgetType: n,
                            eventType: a,
                            payload: {
                                eventName: s,
                                index: t,
                                queryID: l,
                                objectIDs: h[r],
                                positions: d[r]
                            },
                            hits: e
                        }
                    }) : "conversion" === a ? f.map(function(e, r) {
                        return {
                            insightsMethod: "convertedObjectIDsAfterSearch",
                            widgetType: n,
                            eventType: a,
                            payload: {
                                eventName: s,
                                index: t,
                                queryID: l,
                                objectIDs: h[r]
                            },
                            hits: e
                        }
                    }) : []
                },
                u = n(895933);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        g(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function g(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var v = (0, r.K)({
                    name: "hits",
                    connector: !0
                }),
                y = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
                    return (0, a._)(e, v()),
                        function(n) {
                            var r, i, a = n || {},
                                o = a.escapeHTML,
                                l = void 0 === o || o,
                                h = a.transformItems,
                                p = void 0 === h ? function(e) {
                                    return e
                                } : h;
                            return {
                                $$type: "ais.hits",
                                init: function(t) {
                                    e(m(m({}, this.getWidgetRenderState(t)), {}, {
                                        instantSearchInstance: t.instantSearchInstance
                                    }), !0)
                                },
                                render: function(t) {
                                    var n = this.getWidgetRenderState(t);
                                    e(m(m({}, n), {}, {
                                        instantSearchInstance: t.instantSearchInstance
                                    }), !1), n.sendEvent("view", n.hits)
                                },
                                getRenderState: function(e, t) {
                                    return m(m({}, e), {}, {
                                        hits: this.getWidgetRenderState(t)
                                    })
                                },
                                getWidgetRenderState: function(e) {
                                    var t, a, o, h, m, g, v, y, b, R, O, j, P = e.results,
                                        w = e.helper,
                                        S = e.instantSearchInstance;
                                    return (r || (a = (t = {
                                        instantSearchInstance: S,
                                        index: w.getIndex(),
                                        widgetType: this.$$type
                                    }).instantSearchInstance, o = t.index, h = t.widgetType, r = function() {
                                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                        s({
                                            widgetType: h,
                                            index: o,
                                            methodName: "sendEvent",
                                            args: t,
                                            isSearchStalled: "stalled" === a.status
                                        }).forEach(function(e) {
                                            return a.sendEventToInsights(e)
                                        })
                                    }), i || (g = (m = {
                                        index: w.getIndex(),
                                        widgetType: this.$$type
                                    }).index, v = m.widgetType, i = function() {
                                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                        var r = s({
                                            widgetType: v,
                                            index: g,
                                            methodName: "bindEvent",
                                            args: t,
                                            isSearchStalled: !1
                                        });
                                        return r.length ? "data-insights-event=".concat((0, c.a)(r)) : ""
                                    }), P) ? (l && P.hits.length > 0 && (P.hits = (0, u.mY)(P.hits)), {
                                        hits: p((y = P.hits, b = P.page, R = P.hitsPerPage, O = y.map(function(e, t) {
                                            return f(f({}, e), {}, {
                                                __position: R * b + t + 1
                                            })
                                        }), (j = P.queryID) ? O.map(function(e) {
                                            return d(d({}, e), {}, {
                                                __queryID: j
                                            })
                                        }) : O), {
                                            results: P
                                        }),
                                        results: P,
                                        sendEvent: r,
                                        bindEvent: i,
                                        widgetParams: n
                                    }) : {
                                        hits: [],
                                        results: void 0,
                                        sendEvent: r,
                                        bindEvent: i,
                                        widgetParams: n
                                    }
                                },
                                dispose: function(e) {
                                    var n = e.state;
                                    return (t(), l) ? n.setQueryParameters(Object.keys(u.dg).reduce(function(e, t) {
                                        return m(m({}, e), {}, g({}, t, void 0))
                                    }, {})) : n
                                },
                                getWidgetSearchParameters: function(e) {
                                    return l ? e.setQueryParameters(u.dg) : e
                                }
                            }
                        }
                },
                b = n(337937);

            function R(e, t) {
                return (0, b.B)(y, e, t)
            }
        },
        562745: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return h
                }
            });
            var r = n(712741),
                i = n(891264),
                a = n(626336);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var s = (0, r.K)({
                    name: "search-box",
                    connector: !0
                }),
                u = function(e, t) {
                    return t(e)
                },
                l = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
                    return (0, a._)(e, s()),
                        function(n) {
                            var r, i, a = (n || {}).queryHook,
                                c = void 0 === a ? u : a;
                            return {
                                $$type: "ais.searchBox",
                                init: function(t) {
                                    var n = t.instantSearchInstance;
                                    e(o(o({}, this.getWidgetRenderState(t)), {}, {
                                        instantSearchInstance: n
                                    }), !0)
                                },
                                render: function(t) {
                                    var n = t.instantSearchInstance;
                                    e(o(o({}, this.getWidgetRenderState(t)), {}, {
                                        instantSearchInstance: n
                                    }), !1)
                                },
                                dispose: function(e) {
                                    var n = e.state;
                                    return t(), n.setQueryParameter("query", void 0)
                                },
                                getRenderState: function(e, t) {
                                    return o(o({}, e), {}, {
                                        searchBox: this.getWidgetRenderState(t)
                                    })
                                },
                                getWidgetRenderState: function(e) {
                                    var t = e.helper,
                                        a = e.searchMetadata,
                                        o = e.state;
                                    return r || (r = function(e) {
                                        c(e, function(e) {
                                            return t.setQuery(e).search()
                                        })
                                    }, i = function() {
                                        t.setQuery("").search()
                                    }), {
                                        query: o.query || "",
                                        refine: r,
                                        clear: i,
                                        widgetParams: n,
                                        isSearchStalled: a.isSearchStalled
                                    }
                                },
                                getWidgetUiState: function(e, t) {
                                    var n = t.searchParameters.query || "";
                                    return "" === n || e && e.query === n ? e : o(o({}, e), {}, {
                                        query: n
                                    })
                                },
                                getWidgetSearchParameters: function(e, t) {
                                    var n = t.uiState;
                                    return e.setQueryParameter("query", n.query || "")
                                }
                            }
                        }
                },
                f = n(337937);

            function h(e, t) {
                return (0, f.B)(l, e, t)
            }
        },
        337937: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return R
                }
            });
            var r = n(41869),
                i = n(793585),
                a = n(190581),
                c = n(652983),
                o = n(683753),
                s = Object.prototype.hasOwnProperty;

            function u(e, t, n) {
                var r, i;
                if (null != n && n(e, t) || e === t) return !0;
                if (e && t && (r = e.constructor) === t.constructor) {
                    if (r === Date) return e.getTime() === t.getTime();
                    if (r === RegExp) return e.toString() === t.toString();
                    if (r === Array) {
                        if ((i = e.length) === t.length)
                            for (; i-- && u(e[i], t[i], n););
                        return -1 === i
                    }
                    if (!r || "object" === (0, o.Z)(e)) {
                        for (r in i = 0, e)
                            if (s.call(e, r) && ++i && !s.call(t, r) || !(r in t) || !u(e[r], t[r], n)) return !1;
                        return Object.keys(t).length === i
                    }
                }
                return e != e && t != t
            }
            var l = n(212991),
                f = n(750961),
                h = n(903897),
                d = n(764122);

            function p(e) {
                var t = (0, c.useState)(function() {
                        return e
                    }),
                    n = (0, r.Z)(t, 2),
                    i = n[0],
                    a = n[1];
                return u(i, e) || a(e), i
            }
            var m = n(347570),
                g = ["instantSearchInstance", "widgetParams"],
                v = ["widgetParams"];

            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(n), !0).forEach(function(t) {
                        (0, i.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function R(e) {
                var t, n, i, o, s, y, R, O, j, P, w = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    S = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    E = (0, d.a)(),
                    F = (0, h.z)(),
                    x = (0, f.a)(),
                    _ = p(w),
                    T = p(S),
                    C = (0, c.useRef)(!0),
                    D = (0, c.useRef)(null),
                    N = (0, c.useMemo)(function() {
                        return b(b({}, e(function(e, t) {
                            if (t) {
                                C.current = !0;
                                return
                            }
                            if (C.current) {
                                e.instantSearchInstance, e.widgetParams;
                                var n = (0, a.Z)(e, g);
                                u(n, D.current, function(e, t) {
                                    return (null == e ? void 0 : e.constructor) === Function && (null == t ? void 0 : t.constructor) === Function
                                }) || (H(n), D.current = n)
                            }
                        }, function() {
                            C.current = !1
                        })(_)), T)
                    }, [e, _, T]),
                    I = (0, c.useState)(function() {
                        if (N.getWidgetRenderState) {
                            var e, t = x.getHelper(),
                                n = x.getWidgetUiState({})[x.getIndexId()];
                            t.state = (null === (e = N.getWidgetSearchParameters) || void 0 === e ? void 0 : e.call(N, t.state, {
                                uiState: n
                            })) || t.state;
                            var r = (0, l.E)(x),
                                i = r.results,
                                c = r.scopedResults,
                                o = N.getWidgetRenderState({
                                    helper: t,
                                    parent: x,
                                    instantSearchInstance: F,
                                    results: i,
                                    scopedResults: c,
                                    state: t.state,
                                    renderState: F.renderState,
                                    templatesConfig: F.templatesConfig,
                                    createURL: x.createURL,
                                    searchMetadata: {
                                        isSearchStalled: "stalled" === F.status
                                    },
                                    status: F.status,
                                    error: F.error
                                });
                            return o.widgetParams, (0, a.Z)(o, v)
                        }
                        return {}
                    }),
                    k = (0, r.Z)(I, 2),
                    A = k[0],
                    H = k[1];
                return n = (t = {
                    widget: N,
                    parentIndex: x,
                    props: _,
                    shouldSsr: !!E
                }).widget, i = t.parentIndex, o = t.props, s = t.shouldSsr, y = (0, c.useRef)(o), (0, c.useEffect)(function() {
                    y.current = o
                }, [o]), R = (0, c.useRef)(n), (0, c.useEffect)(function() {
                    R.current = n
                }, [n]), O = (0, c.useRef)(null), j = s && !i.getWidgets().includes(n), P = (0, h.z)(), (0, m.L)(function() {
                    var e = R.current;

                    function t() {
                        P._preventWidgetCleanup || i.removeWidgets([e])
                    }
                    return null === O.current ? j || i.addWidgets([n]) : (clearTimeout(O.current), u(o, y.current) || (t(), i.addWidgets([n]))),
                        function() {
                            O.current = setTimeout(t)
                        }
                }, [i, n, j, P, o]), j && i.addWidgets([n]), A
            }
        },
        287102: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return h
                }
            });
            var r = n(652983),
                i = n(903897),
                a = n(347570),
                c = n(41869),
                o = n(212991),
                s = n(750961),
                u = n(793585);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach(function(t) {
                        (0, u.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function h() {
                var e, t, n, l, h, d, p, m, g, v, y, b, R, O, j, P = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    w = P.catchError,
                    S = (0, i.z)(),
                    E = (e = (0, i.z)(), t = (0, s.a)().getIndexId(), n = (0, r.useState)(function() {
                        return e.getUiState()
                    }), h = (l = (0, c.Z)(n, 2))[0], d = l[1], p = h[t], m = (0, r.useCallback)(function(t) {
                        e.setUiState(t)
                    }, [e]), g = (0, r.useCallback)(function(e) {
                        m(function(n) {
                            return f(f({}, n), {}, (0, u.Z)({}, t, "function" == typeof e ? e(n[t]) : e))
                        })
                    }, [m, t]), (0, r.useEffect)(function() {
                        function t() {
                            d(e.getUiState())
                        }
                        return e.addListener("render", t),
                            function() {
                                e.removeListener("render", t)
                            }
                    }, [e, t]), {
                        uiState: h,
                        setUiState: m,
                        indexUiState: p,
                        setIndexUiState: g
                    }),
                    F = E.uiState,
                    x = E.setUiState,
                    _ = E.indexUiState,
                    T = E.setIndexUiState,
                    C = (v = (0, i.z)(), y = (0, s.a)(), b = (0, r.useState)(function() {
                        return (0, o.E)(y)
                    }), O = (R = (0, c.Z)(b, 2))[0], j = R[1], (0, r.useEffect)(function() {
                        function e() {
                            var e = y.getResults();
                            null !== e && j({
                                results: e,
                                scopedResults: y.getScopedResults()
                            })
                        }
                        return v.addListener("render", e),
                            function() {
                                v.removeListener("render", e)
                            }
                    }, [v, y]), O),
                    D = C.results,
                    N = C.scopedResults,
                    I = (0, r.useCallback)(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.use.apply(S, t),
                            function() {
                                S.unuse.apply(S, t)
                            }
                    }, [S]),
                    k = (0, r.useCallback)(function() {
                        S.refresh()
                    }, [S]);
                return (0, a.L)(function() {
                    if (w) {
                        var e = function() {};
                        return S.addListener("error", e),
                            function() {
                                return S.removeListener("error", e)
                            }
                    }
                    return function() {}
                }, [S, w]), {
                    results: D,
                    scopedResults: N,
                    uiState: F,
                    setUiState: x,
                    indexUiState: _,
                    setIndexUiState: T,
                    use: I,
                    refresh: k,
                    status: S.status,
                    error: S.error
                }
            }
        },
        934830: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var r = (0, n(652983).createContext)(null)
        },
        48226: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var r = (0, n(652983).createContext)(null)
        },
        212991: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return s
                }
            });
            var r = n(793585),
                i = n(361116);

            function a(e) {
                var t, n, r;
                return new i.SearchResults(e, [{
                    query: null !== (t = e.query) && void 0 !== t ? t : "",
                    page: null !== (n = e.page) && void 0 !== n ? n : 0,
                    hitsPerPage: null !== (r = e.hitsPerPage) && void 0 !== r ? r : 20,
                    hits: [],
                    nbHits: 0,
                    nbPages: 0,
                    params: "",
                    exhaustiveNbHits: !0,
                    exhaustiveFacetsCount: !0,
                    processingTimeMS: 0,
                    index: e.index
                }], {
                    __isArtificial: !0
                })
            }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function s(e) {
                var t = e.getHelper(),
                    n = e.getResults() || a(t.state),
                    r = e.getScopedResults().map(function(t) {
                        var r = t.indexId === e.getIndexId() ? n : a(t.helper.state);
                        return o(o({}, t), {}, {
                            results: t.results || r
                        })
                    });
                return {
                    results: n,
                    scopedResults: r
                }
            }
        },
        741167: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return r
                }
            });

            function r(e, t) {
                if (!e) throw Error("Invariant failed")
            }
        },
        750961: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return c
                }
            });
            var r = n(652983),
                i = n(741167),
                a = n(934830);

            function c() {
                var e = (0, r.useContext)(a.Z);
                return (0, i.k)(null !== e, "The <Index> component must be used within <InstantSearch>."), e
            }
        },
        903897: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return c
                }
            });
            var r = n(652983),
                i = n(741167),
                a = n(48226);

            function c() {
                var e = (0, r.useContext)(a.Z);
                return (0, i.k)(null !== e, "Hooks must be used inside the <InstantSearch> component.\n\nThey are not compatible with the `react-instantsearch-core` and `react-instantsearch-dom` packages, so make sure to use the <InstantSearch> component from `react-instantsearch-hooks`."), e
            }
        },
        764122: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return a
                }
            });
            var r = n(652983),
                i = (0, r.createContext)(null);

            function a() {
                return (0, r.useContext)(i)
            }
        },
        347570: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return i
                }
            });
            var r = n(652983),
                i = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect
        }
    }
]);