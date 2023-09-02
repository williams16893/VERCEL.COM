"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [25843], {
        291437: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return l
                }
            });

            function l(e, [t, n]) {
                return Math.min(n, Math.max(t, e))
            }
        },
        725843: function(e, t, n) {
            n.d(t, {
                VY: function() {
                    return ey
                },
                JO: function() {
                    return ew
                },
                ck: function() {
                    return eE
                },
                wU: function() {
                    return eC
                },
                eT: function() {
                    return eS
                },
                h_: function() {
                    return eb
                },
                fC: function() {
                    return em
                },
                u_: function() {
                    return ek
                },
                xz: function() {
                    return eh
                },
                B4: function() {
                    return eg
                },
                l_: function() {
                    return ex
                }
            });
            var l = n(397364),
                r = n(652983),
                o = n(63730),
                a = n(291437),
                i = n(700579),
                u = n(349921),
                c = n(305878),
                d = n(345094),
                s = n(214607),
                p = n(327880),
                f = n(589741),
                v = n(646337),
                m = n(968945),
                h = n(243006),
                g = n(668778),
                w = n(600056),
                b = n(806428),
                y = n(150544),
                x = n(475931),
                E = n(279677),
                S = n(862862);
            let C = (0, r.forwardRef)((e, t) => (0, r.createElement)(w.WV.span, (0, l.Z)({}, e, {
                ref: t,
                style: {
                    position: "absolute",
                    border: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    wordWrap: "normal",
                    ...e.style
                }
            })));
            var k = n(456617),
                _ = n(467403);
            let M = [" ", "Enter", "ArrowUp", "ArrowDown"],
                R = [" ", "Enter"],
                T = "Select",
                [P, I, D] = (0, u.B)(T),
                [V, O] = (0, d.b)(T, [D, h.D7]),
                W = (0, h.D7)(),
                [L, N] = V(T),
                [H, B] = V(T),
                Z = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        disabled: o = !1,
                        ...a
                    } = e, u = W(n), d = N("SelectTrigger", n), s = d.disabled || o, p = (0, c.e)(t, d.onTriggerChange), f = I(n), [v, m, g] = ef(e => {
                        let t = f().filter(e => !e.disabled),
                            n = t.find(e => e.value === d.value),
                            l = ev(t, e, n);
                        void 0 !== l && d.onValueChange(l.value)
                    }), b = () => {
                        s || (d.onOpenChange(!0), g())
                    };
                    return (0, r.createElement)(h.ee, (0, l.Z)({
                        asChild: !0
                    }, u), (0, r.createElement)(w.WV.button, (0, l.Z)({
                        type: "button",
                        role: "combobox",
                        "aria-controls": d.contentId,
                        "aria-expanded": d.open,
                        "aria-required": d.required,
                        "aria-autocomplete": "none",
                        dir: d.dir,
                        "data-state": d.open ? "open" : "closed",
                        disabled: s,
                        "data-disabled": s ? "" : void 0,
                        "data-placeholder": void 0 === d.value ? "" : void 0
                    }, a, {
                        ref: p,
                        onClick: (0, i.M)(a.onClick, e => {
                            e.currentTarget.focus()
                        }),
                        onPointerDown: (0, i.M)(a.onPointerDown, e => {
                            let t = e.target;
                            t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (b(), d.triggerPointerDownPosRef.current = {
                                x: Math.round(e.pageX),
                                y: Math.round(e.pageY)
                            }, e.preventDefault())
                        }),
                        onKeyDown: (0, i.M)(a.onKeyDown, e => {
                            let t = "" !== v.current,
                                n = e.ctrlKey || e.altKey || e.metaKey;
                            n || 1 !== e.key.length || m(e.key), (!t || " " !== e.key) && M.includes(e.key) && (b(), e.preventDefault())
                        })
                    })))
                }),
                A = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        className: o,
                        style: a,
                        children: i,
                        placeholder: u,
                        ...d
                    } = e, s = N("SelectValue", n), {
                        onValueNodeHasChildrenChange: p
                    } = s, f = void 0 !== i, v = (0, c.e)(t, s.onValueNodeChange);
                    return (0, E.b)(() => {
                        p(f)
                    }, [p, f]), (0, r.createElement)(w.WV.span, (0, l.Z)({}, d, {
                        ref: v,
                        style: {
                            pointerEvents: "none"
                        }
                    }), void 0 === s.value && void 0 !== u ? u : i)
                }),
                K = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        children: o,
                        ...a
                    } = e;
                    return (0, r.createElement)(w.WV.span, (0, l.Z)({
                        "aria-hidden": !0
                    }, a, {
                        ref: t
                    }), o || "▼")
                }),
                F = "SelectContent",
                U = (0, r.forwardRef)((e, t) => {
                    let n = N(F, e.__scopeSelect),
                        [a, i] = (0, r.useState)();
                    return ((0, E.b)(() => {
                        i(new DocumentFragment)
                    }, []), n.open) ? (0, r.createElement)(Y, (0, l.Z)({}, e, {
                        ref: t
                    })) : a ? (0, o.createPortal)((0, r.createElement)(z, {
                        scope: e.__scopeSelect
                    }, (0, r.createElement)(P.Slot, {
                        scope: e.__scopeSelect
                    }, (0, r.createElement)("div", null, e.children))), a) : null
                }),
                [z, q] = V(F),
                Y = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        position: o = "item-aligned",
                        onCloseAutoFocus: a,
                        onEscapeKeyDown: u,
                        onPointerDownOutside: d,
                        side: s,
                        sideOffset: m,
                        align: h,
                        alignOffset: g,
                        arrowPadding: w,
                        collisionBoundary: y,
                        collisionPadding: x,
                        sticky: E,
                        hideWhenDetached: S,
                        avoidCollisions: C,
                        ...M
                    } = e, R = N(F, n), [T, P] = (0, r.useState)(null), [D, V] = (0, r.useState)(null), O = (0, c.e)(t, e => P(e)), [W, L] = (0, r.useState)(null), [H, B] = (0, r.useState)(null), Z = I(n), [A, K] = (0, r.useState)(!1), U = (0, r.useRef)(!1);
                    (0, r.useEffect)(() => {
                        if (T) return (0, k.R)(T)
                    }, [T]), (0, f.EW)();
                    let q = (0, r.useCallback)(e => {
                            let [t, ...n] = Z().map(e => e.ref.current), [l] = n.slice(-1), r = document.activeElement;
                            for (let n of e)
                                if (n === r || (null == n || n.scrollIntoView({
                                        block: "nearest"
                                    }), n === t && D && (D.scrollTop = 0), n === l && D && (D.scrollTop = D.scrollHeight), null == n || n.focus(), document.activeElement !== r)) return
                        }, [Z, D]),
                        Y = (0, r.useCallback)(() => q([W, T]), [q, W, T]);
                    (0, r.useEffect)(() => {
                        A && Y()
                    }, [A, Y]);
                    let {
                        onOpenChange: G,
                        triggerPointerDownPosRef: J
                    } = R;
                    (0, r.useEffect)(() => {
                        if (T) {
                            let e = {
                                    x: 0,
                                    y: 0
                                },
                                t = t => {
                                    var n, l, r, o;
                                    e = {
                                        x: Math.abs(Math.round(t.pageX) - (null !== (n = null === (l = J.current) || void 0 === l ? void 0 : l.x) && void 0 !== n ? n : 0)),
                                        y: Math.abs(Math.round(t.pageY) - (null !== (r = null === (o = J.current) || void 0 === o ? void 0 : o.y) && void 0 !== r ? r : 0))
                                    }
                                },
                                n = n => {
                                    e.x <= 10 && e.y <= 10 ? n.preventDefault() : T.contains(n.target) || G(!1), document.removeEventListener("pointermove", t), J.current = null
                                };
                            return null !== J.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                                capture: !0,
                                once: !0
                            })), () => {
                                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                                    capture: !0
                                })
                            }
                        }
                    }, [T, G, J]), (0, r.useEffect)(() => {
                        let e = () => G(!1);
                        return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                            window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                        }
                    }, [G]);
                    let [Q, $] = ef(e => {
                        let t = Z().filter(e => !e.disabled),
                            n = t.find(e => e.ref.current === document.activeElement),
                            l = ev(t, e, n);
                        l && setTimeout(() => l.ref.current.focus())
                    }), ee = (0, r.useCallback)((e, t, n) => {
                        let l = !U.current && !n,
                            r = void 0 !== R.value && R.value === t;
                        (r || l) && (L(e), l && (U.current = !0))
                    }, [R.value]), et = (0, r.useCallback)(() => null == T ? void 0 : T.focus(), [T]), en = (0, r.useCallback)((e, t, n) => {
                        let l = !U.current && !n,
                            r = void 0 !== R.value && R.value === t;
                        (r || l) && B(e)
                    }, [R.value]), el = "popper" === o ? X : j, er = el === X ? {
                        side: s,
                        sideOffset: m,
                        align: h,
                        alignOffset: g,
                        arrowPadding: w,
                        collisionBoundary: y,
                        collisionPadding: x,
                        sticky: E,
                        hideWhenDetached: S,
                        avoidCollisions: C
                    } : {};
                    return (0, r.createElement)(z, {
                        scope: n,
                        content: T,
                        viewport: D,
                        onViewportChange: V,
                        itemRefCallback: ee,
                        selectedItem: W,
                        onItemLeave: et,
                        itemTextRefCallback: en,
                        focusSelectedItem: Y,
                        selectedItemText: H,
                        position: o,
                        isPositioned: A,
                        searchRef: Q
                    }, (0, r.createElement)(_.Z, {
                        as: b.g7,
                        allowPinchZoom: !0
                    }, (0, r.createElement)(v.M, {
                        asChild: !0,
                        trapped: R.open,
                        onMountAutoFocus: e => {
                            e.preventDefault()
                        },
                        onUnmountAutoFocus: (0, i.M)(a, e => {
                            var t;
                            null === (t = R.trigger) || void 0 === t || t.focus({
                                preventScroll: !0
                            }), e.preventDefault()
                        })
                    }, (0, r.createElement)(p.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: u,
                        onPointerDownOutside: d,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: () => R.onOpenChange(!1)
                    }, (0, r.createElement)(el, (0, l.Z)({
                        role: "listbox",
                        id: R.contentId,
                        "data-state": R.open ? "open" : "closed",
                        dir: R.dir,
                        onContextMenu: e => e.preventDefault()
                    }, M, er, {
                        onPlaced: () => K(!0),
                        ref: O,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...M.style
                        },
                        onKeyDown: (0, i.M)(M.onKeyDown, e => {
                            let t = e.ctrlKey || e.altKey || e.metaKey;
                            if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || $(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                let t = Z().filter(e => !e.disabled),
                                    n = t.map(e => e.ref.current);
                                if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                    let t = e.target,
                                        l = n.indexOf(t);
                                    n = n.slice(l + 1)
                                }
                                setTimeout(() => q(n)), e.preventDefault()
                            }
                        })
                    }))))))
                }),
                j = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        onPlaced: o,
                        ...i
                    } = e, u = N(F, n), d = q(F, n), [s, p] = (0, r.useState)(null), [f, v] = (0, r.useState)(null), m = (0, c.e)(t, e => v(e)), h = I(n), g = (0, r.useRef)(!1), b = (0, r.useRef)(!0), {
                        viewport: y,
                        selectedItem: x,
                        selectedItemText: S,
                        focusSelectedItem: C
                    } = d, k = (0, r.useCallback)(() => {
                        if (u.trigger && u.valueNode && s && f && y && x && S) {
                            let e = u.trigger.getBoundingClientRect(),
                                t = f.getBoundingClientRect(),
                                n = u.valueNode.getBoundingClientRect(),
                                l = S.getBoundingClientRect();
                            if ("rtl" !== u.dir) {
                                let r = l.left - t.left,
                                    o = n.left - r,
                                    i = e.left - o,
                                    u = e.width + i,
                                    c = Math.max(u, t.width),
                                    d = window.innerWidth - 10,
                                    p = (0, a.u)(o, [10, d - c]);
                                s.style.minWidth = u + "px", s.style.left = p + "px"
                            } else {
                                let r = t.right - l.right,
                                    o = window.innerWidth - n.right - r,
                                    i = window.innerWidth - e.right - o,
                                    u = e.width + i,
                                    c = Math.max(u, t.width),
                                    d = window.innerWidth - 10,
                                    p = (0, a.u)(o, [10, d - c]);
                                s.style.minWidth = u + "px", s.style.right = p + "px"
                            }
                            let r = h(),
                                i = window.innerHeight - 20,
                                c = y.scrollHeight,
                                d = window.getComputedStyle(f),
                                p = parseInt(d.borderTopWidth, 10),
                                v = parseInt(d.paddingTop, 10),
                                m = parseInt(d.borderBottomWidth, 10),
                                w = parseInt(d.paddingBottom, 10),
                                b = p + v + c + w + m,
                                E = Math.min(5 * x.offsetHeight, b),
                                C = window.getComputedStyle(y),
                                k = parseInt(C.paddingTop, 10),
                                _ = parseInt(C.paddingBottom, 10),
                                M = e.top + e.height / 2 - 10,
                                R = x.offsetHeight / 2,
                                T = x.offsetTop + R,
                                P = p + v + T;
                            if (P <= M) {
                                let e = x === r[r.length - 1].ref.current;
                                s.style.bottom = "0px";
                                let t = f.clientHeight - y.offsetTop - y.offsetHeight;
                                s.style.height = P + Math.max(i - M, R + (e ? _ : 0) + t + m) + "px"
                            } else {
                                let e = x === r[0].ref.current;
                                s.style.top = "0px";
                                let t = Math.max(M, p + y.offsetTop + (e ? k : 0) + R);
                                s.style.height = t + (b - P) + "px", y.scrollTop = P - M + y.offsetTop
                            }
                            s.style.margin = "10px 0", s.style.minHeight = E + "px", s.style.maxHeight = i + "px", null == o || o(), requestAnimationFrame(() => g.current = !0)
                        }
                    }, [h, u.trigger, u.valueNode, s, f, y, x, S, u.dir, o]);
                    (0, E.b)(() => k(), [k]);
                    let [_, M] = (0, r.useState)();
                    (0, E.b)(() => {
                        f && M(window.getComputedStyle(f).zIndex)
                    }, [f]);
                    let R = (0, r.useCallback)(e => {
                        e && !0 === b.current && (k(), null == C || C(), b.current = !1)
                    }, [k, C]);
                    return (0, r.createElement)(G, {
                        scope: n,
                        contentWrapper: s,
                        shouldExpandOnScrollRef: g,
                        onScrollButtonChange: R
                    }, (0, r.createElement)("div", {
                        ref: p,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            zIndex: _
                        }
                    }, (0, r.createElement)(w.WV.div, (0, l.Z)({}, i, {
                        ref: m,
                        style: {
                            boxSizing: "border-box",
                            maxHeight: "100%",
                            ...i.style
                        }
                    }))))
                }),
                X = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        align: o = "start",
                        collisionPadding: a = 10,
                        ...i
                    } = e, u = W(n);
                    return (0, r.createElement)(h.VY, (0, l.Z)({}, u, i, {
                        ref: t,
                        align: o,
                        collisionPadding: a,
                        style: {
                            boxSizing: "border-box",
                            ...i.style,
                            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                [G, J] = V(F, {}),
                Q = "SelectViewport",
                $ = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...o
                    } = e, a = q(Q, n), u = J(Q, n), d = (0, c.e)(t, a.onViewportChange), s = (0, r.useRef)(0);
                    return (0, r.createElement)(r.Fragment, null, (0, r.createElement)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                        }
                    }), (0, r.createElement)(P.Slot, {
                        scope: n
                    }, (0, r.createElement)(w.WV.div, (0, l.Z)({
                        "data-radix-select-viewport": "",
                        role: "presentation"
                    }, o, {
                        ref: d,
                        style: {
                            position: "relative",
                            flex: 1,
                            overflow: "auto",
                            ...o.style
                        },
                        onScroll: (0, i.M)(o.onScroll, e => {
                            let t = e.currentTarget,
                                {
                                    contentWrapper: n,
                                    shouldExpandOnScrollRef: l
                                } = u;
                            if (null != l && l.current && n) {
                                let e = Math.abs(s.current - t.scrollTop);
                                if (e > 0) {
                                    let l = window.innerHeight - 20,
                                        r = parseFloat(n.style.minHeight),
                                        o = parseFloat(n.style.height),
                                        a = Math.max(r, o);
                                    if (a < l) {
                                        let r = a + e,
                                            o = Math.min(l, r),
                                            i = r - o;
                                        n.style.height = o + "px", "0px" === n.style.bottom && (t.scrollTop = i > 0 ? i : 0, n.style.justifyContent = "flex-end")
                                    }
                                }
                            }
                            s.current = t.scrollTop
                        })
                    }))))
                }),
                [ee, et] = V("SelectGroup"),
                en = "SelectItem",
                [el, er] = V(en),
                eo = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        value: o,
                        disabled: a = !1,
                        textValue: u,
                        ...d
                    } = e, s = N(en, n), p = q(en, n), f = s.value === o, [v, h] = (0, r.useState)(null != u ? u : ""), [g, b] = (0, r.useState)(!1), y = (0, c.e)(t, e => {
                        var t;
                        return null === (t = p.itemRefCallback) || void 0 === t ? void 0 : t.call(p, e, o, a)
                    }), x = (0, m.M)(), E = () => {
                        a || (s.onValueChange(o), s.onOpenChange(!1))
                    };
                    return (0, r.createElement)(el, {
                        scope: n,
                        value: o,
                        disabled: a,
                        textId: x,
                        isSelected: f,
                        onItemTextChange: (0, r.useCallback)(e => {
                            h(t => {
                                var n;
                                return t || (null !== (n = null == e ? void 0 : e.textContent) && void 0 !== n ? n : "").trim()
                            })
                        }, [])
                    }, (0, r.createElement)(P.ItemSlot, {
                        scope: n,
                        value: o,
                        disabled: a,
                        textValue: v
                    }, (0, r.createElement)(w.WV.div, (0, l.Z)({
                        role: "option",
                        "aria-labelledby": x,
                        "data-highlighted": g ? "" : void 0,
                        "aria-selected": f && g,
                        "data-state": f ? "checked" : "unchecked",
                        "aria-disabled": a || void 0,
                        "data-disabled": a ? "" : void 0,
                        tabIndex: a ? void 0 : -1
                    }, d, {
                        ref: y,
                        onFocus: (0, i.M)(d.onFocus, () => b(!0)),
                        onBlur: (0, i.M)(d.onBlur, () => b(!1)),
                        onPointerUp: (0, i.M)(d.onPointerUp, E),
                        onPointerMove: (0, i.M)(d.onPointerMove, e => {
                            if (a) {
                                var t;
                                null === (t = p.onItemLeave) || void 0 === t || t.call(p)
                            } else e.currentTarget.focus({
                                preventScroll: !0
                            })
                        }),
                        onPointerLeave: (0, i.M)(d.onPointerLeave, e => {
                            if (e.currentTarget === document.activeElement) {
                                var t;
                                null === (t = p.onItemLeave) || void 0 === t || t.call(p)
                            }
                        }),
                        onKeyDown: (0, i.M)(d.onKeyDown, e => {
                            var t;
                            let n = (null === (t = p.searchRef) || void 0 === t ? void 0 : t.current) !== "";
                            n && " " === e.key || (R.includes(e.key) && E(), " " === e.key && e.preventDefault())
                        })
                    }))))
                }),
                ea = "SelectItemText",
                ei = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        className: a,
                        style: i,
                        ...u
                    } = e, d = N(ea, n), s = q(ea, n), p = er(ea, n), f = B(ea, n), [v, m] = (0, r.useState)(null), h = (0, c.e)(t, e => m(e), p.onItemTextChange, e => {
                        var t;
                        return null === (t = s.itemTextRefCallback) || void 0 === t ? void 0 : t.call(s, e, p.value, p.disabled)
                    }), g = null == v ? void 0 : v.textContent, b = (0, r.useMemo)(() => (0, r.createElement)("option", {
                        key: p.value,
                        value: p.value,
                        disabled: p.disabled
                    }, g), [p.disabled, p.value, g]), {
                        onNativeOptionAdd: y,
                        onNativeOptionRemove: x
                    } = f;
                    return (0, E.b)(() => (y(b), () => x(b)), [y, x, b]), (0, r.createElement)(r.Fragment, null, (0, r.createElement)(w.WV.span, (0, l.Z)({
                        id: p.textId
                    }, u, {
                        ref: h
                    })), p.isSelected && d.valueNode && !d.valueNodeHasChildren ? (0, o.createPortal)(u.children, d.valueNode) : null)
                }),
                eu = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...o
                    } = e, a = er("SelectItemIndicator", n);
                    return a.isSelected ? (0, r.createElement)(w.WV.span, (0, l.Z)({
                        "aria-hidden": !0
                    }, o, {
                        ref: t
                    })) : null
                }),
                ec = "SelectScrollUpButton",
                ed = (0, r.forwardRef)((e, t) => {
                    let n = q(ec, e.__scopeSelect),
                        o = J(ec, e.__scopeSelect),
                        [a, i] = (0, r.useState)(!1),
                        u = (0, c.e)(t, o.onScrollButtonChange);
                    return (0, E.b)(() => {
                        if (n.viewport && n.isPositioned) {
                            let t = n.viewport;

                            function e() {
                                let e = t.scrollTop > 0;
                                i(e)
                            }
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [n.viewport, n.isPositioned]), a ? (0, r.createElement)(es, (0, l.Z)({}, e, {
                        ref: u,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = n;
                            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                        }
                    })) : null
                }),
                es = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        onAutoScroll: o,
                        ...a
                    } = e, u = q("SelectScrollButton", n), c = (0, r.useRef)(null), d = I(n), s = (0, r.useCallback)(() => {
                        null !== c.current && (window.clearInterval(c.current), c.current = null)
                    }, []);
                    return (0, r.useEffect)(() => () => s(), [s]), (0, E.b)(() => {
                        var e;
                        let t = d().find(e => e.ref.current === document.activeElement);
                        null == t || null === (e = t.ref.current) || void 0 === e || e.scrollIntoView({
                            block: "nearest"
                        })
                    }, [d]), (0, r.createElement)(w.WV.div, (0, l.Z)({
                        "aria-hidden": !0
                    }, a, {
                        ref: t,
                        style: {
                            flexShrink: 0,
                            ...a.style
                        },
                        onPointerMove: (0, i.M)(a.onPointerMove, () => {
                            var e;
                            null === (e = u.onItemLeave) || void 0 === e || e.call(u), null === c.current && (c.current = window.setInterval(o, 50))
                        }),
                        onPointerLeave: (0, i.M)(a.onPointerLeave, () => {
                            s()
                        })
                    }))
                }),
                ep = (0, r.forwardRef)((e, t) => {
                    let {
                        value: n,
                        ...o
                    } = e, a = (0, r.useRef)(null), i = (0, c.e)(t, a), u = (0, S.D)(n);
                    return (0, r.useEffect)(() => {
                        let e = a.current,
                            t = window.HTMLSelectElement.prototype,
                            l = Object.getOwnPropertyDescriptor(t, "value"),
                            r = l.set;
                        if (u !== n && r) {
                            let t = new Event("change", {
                                bubbles: !0
                            });
                            r.call(e, n), e.dispatchEvent(t)
                        }
                    }, [u, n]), (0, r.createElement)(C, {
                        asChild: !0
                    }, (0, r.createElement)("select", (0, l.Z)({}, o, {
                        ref: i,
                        defaultValue: n
                    })))
                });

            function ef(e) {
                let t = (0, y.W)(e),
                    n = (0, r.useRef)(""),
                    l = (0, r.useRef)(0),
                    o = (0, r.useCallback)(e => {
                        let r = n.current + e;
                        t(r),
                            function e(t) {
                                n.current = t, window.clearTimeout(l.current), "" !== t && (l.current = window.setTimeout(() => e(""), 1e3))
                            }(r)
                    }, [t]),
                    a = (0, r.useCallback)(() => {
                        n.current = "", window.clearTimeout(l.current)
                    }, []);
                return (0, r.useEffect)(() => () => window.clearTimeout(l.current), []), [n, o, a]
            }

            function ev(e, t, n) {
                var l;
                let r = t.length > 1 && Array.from(t).every(e => e === t[0]),
                    o = r ? t[0] : t,
                    a = n ? e.indexOf(n) : -1,
                    i = (l = Math.max(a, 0), e.map((t, n) => e[(l + n) % e.length])),
                    u = 1 === o.length;
                u && (i = i.filter(e => e !== n));
                let c = i.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
                return c !== n ? c : void 0
            }
            ep.displayName = "BubbleSelect";
            let em = e => {
                    let {
                        __scopeSelect: t,
                        children: n,
                        open: l,
                        defaultOpen: o,
                        onOpenChange: a,
                        value: i,
                        defaultValue: u,
                        onValueChange: c,
                        dir: d,
                        name: p,
                        autoComplete: f,
                        disabled: v,
                        required: g
                    } = e, w = W(t), [b, y] = (0, r.useState)(null), [E, S] = (0, r.useState)(null), [C, k] = (0, r.useState)(!1), _ = (0, s.gm)(d), [M = !1, R] = (0, x.T)({
                        prop: l,
                        defaultProp: o,
                        onChange: a
                    }), [T, I] = (0, x.T)({
                        prop: i,
                        defaultProp: u,
                        onChange: c
                    }), D = (0, r.useRef)(null), V = !b || !!b.closest("form"), [O, N] = (0, r.useState)(new Set), B = Array.from(O).map(e => e.props.value).join(";");
                    return (0, r.createElement)(h.fC, w, (0, r.createElement)(L, {
                        required: g,
                        scope: t,
                        trigger: b,
                        onTriggerChange: y,
                        valueNode: E,
                        onValueNodeChange: S,
                        valueNodeHasChildren: C,
                        onValueNodeHasChildrenChange: k,
                        contentId: (0, m.M)(),
                        value: T,
                        onValueChange: I,
                        open: M,
                        onOpenChange: R,
                        dir: _,
                        triggerPointerDownPosRef: D,
                        disabled: v
                    }, (0, r.createElement)(P.Provider, {
                        scope: t
                    }, (0, r.createElement)(H, {
                        scope: e.__scopeSelect,
                        onNativeOptionAdd: (0, r.useCallback)(e => {
                            N(t => new Set(t).add(e))
                        }, []),
                        onNativeOptionRemove: (0, r.useCallback)(e => {
                            N(t => {
                                let n = new Set(t);
                                return n.delete(e), n
                            })
                        }, [])
                    }, n)), V ? (0, r.createElement)(ep, {
                        key: B,
                        "aria-hidden": !0,
                        required: g,
                        tabIndex: -1,
                        name: p,
                        autoComplete: f,
                        value: T,
                        onChange: e => I(e.target.value),
                        disabled: v
                    }, void 0 === T ? (0, r.createElement)("option", {
                        value: ""
                    }) : null, Array.from(O)) : null))
                },
                eh = Z,
                eg = A,
                ew = K,
                eb = e => (0, r.createElement)(g.h, (0, l.Z)({
                    asChild: !0
                }, e)),
                ey = U,
                ex = $,
                eE = eo,
                eS = ei,
                eC = eu,
                ek = ed
        }
    }
]);