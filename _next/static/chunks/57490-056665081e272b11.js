(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [57490], {
        118526: function(e, t, r) {
            "use strict";
            r.d(t, {
                a: function() {
                    return l
                }
            });
            var n = r(213025),
                i = r(403873),
                s = r(404077),
                a = (r(333971), r(820111));
            async function l(e, t) {
                var r;
                let l;
                let o = e.startsWith("/api") ? `${e}` : e.startsWith("/") ? `/api${e}` : e,
                    c = new Headers(null == t ? void 0 : t.headers),
                    d = "object" == typeof(null == t ? void 0 : t.body) ? JSON.stringify(t.body) : null == t ? void 0 : t.body,
                    u = (null == t ? void 0 : t.method) ? ? "GET",
                    m = null == t ? void 0 : null === (r = t.cookies) || void 0 === r ? void 0 : r.get("authorization"),
                    h = (0, s.P)(o, u),
                    p = null;
                m && !c.has("Authorization") && c.set("Authorization", m.value), c.has("Accept") || c.set("Accept", "*/*"), "object" != typeof(null == t ? void 0 : t.body) || c.has("Content-Type") || c.set("Content-Type", "application/json; charset=utf-8");
                try {
                    let e = await (0, a.dO)(() => fetch(o, { ...t,
                            body: d,
                            headers: c,
                            method: u
                        }), {
                            name: `app/lib/fetch-api ${(null==t?void 0:t.method)||"GET"} ${o}`
                        }),
                        {
                            status: r,
                            headers: i
                        } = e,
                        {
                            type: m
                        } = (0, n.Q)(i.get("content-type") ? ? "text/plain"),
                        g = i.get("x-vercel-id");
                    if ((null == t ? void 0 : t.throwOnHTTPError) && (r < 200 || r >= 300)) {
                        if ("application/json" === m) {
                            let n = await e.json(),
                                i = "code" in n && "message" in n;
                            t.wrapErrorsLegacy && i && (n.error = {
                                code: n.code,
                                message: n.message
                            });
                            let s = "object" != typeof n.error ? `Unexpected Error (${u} ${o})` : n.error.message || n.error.code;
                            if ((l = Error(s)).name = "CustomFetchError", "object" == typeof n.error)
                                for (let e of (l.code = n.error.code, Object.keys(n.error))) "message" !== e && (l[e] = n.error[e]);
                            else l.code = r
                        } else {
                            let t = await e.text(),
                                n = `Unexpected response: (${u} ${o}): ${m}(${r} ${t})`;
                            (l = Error(n)).name = "CustomFetchError", l.code = void 0
                        }
                        l.res = e, l.status = r
                    } else p = 204 === r ? null : m.startsWith("text/") ? await e.text() : await e.json();
                    ((null == t ? void 0 : t.returnStatus) || (null == t ? void 0 : t.returnHeaders)) && (p = {
                        body: p,
                        status: t.returnStatus ? e.status : void 0,
                        headers: t.returnHeaders ? e.headers : void 0
                    }), (0, s.b)(h, void 0, r, g)
                } catch (n) {
                    console.error("app/lib/fetchAPI error on endpoint", o, n);
                    let e = (0, i.SC)(n),
                        t = e instanceof TypeError,
                        r = t ? "A network error has occurred. Please check your connection and try again." : e.message;
                    (l = Error(r)).name = e.name, l.code = t ? "network_error" : void 0, l.status = void 0, l.cause = e, (0, s.b)(h, l, null, null)
                }
                if (l) throw l;
                return p
            }
        },
        923399: function(e, t, r) {
            "use strict";
            r.d(t, {
                aV: function() {
                    return g
                },
                ck: function() {
                    return f
                },
                t6: function() {
                    return v
                }
            });
            var n = r(397458),
                i = r(652983),
                s = r(14517),
                a = r(537525),
                l = r.n(a),
                o = r(691199),
                c = r(835093),
                d = r(426476),
                u = r(708634),
                m = r(210699),
                h = r(590885),
                p = r.n(h);
            let g = i.memo(e => {
                let {
                    children: t
                } = e;
                return (0, n.jsx)("ol", {
                    className: p().breadcrumbs,
                    "data-geist-breadcrumb-list": "",
                    children: t
                })
            });
            g.displayName = "Breadcrumb.List";
            let f = i.memo(e => {
                let {
                    children: t,
                    fixed: r,
                    style: i,
                    bold: a,
                    disabled: l,
                    ellipsis: o,
                    className: c
                } = e;
                return (0, n.jsx)("li", {
                    className: (0, s.W)(p().item, c, {
                        [p().fixed]: r,
                        [p().bold]: a,
                        [p().disabled]: l,
                        "geist-ellipsis": !r && o
                    }),
                    "data-geist-breadcrumb-item": "",
                    style: i,
                    children: t
                })
            });
            f.displayName = "Breadcrumb.Item";
            let x = (0, i.forwardRef)((e, t) => {
                let {
                    link: r = !0,
                    disabled: a = !1
                } = e, {
                    user: o,
                    team: h,
                    teams: g
                } = (0, m.Z)(), {
                    name: f,
                    avatar: x
                } = h || o || {}, {
                    slug: v
                } = h || {}, {
                    username: j
                } = o || {}, b = `/${v||j}`, _ = f || v || j, y = !g, w = (0, n.jsxs)("span", {
                    className: (0, s.W)(p().user, {
                        [p().disabled]: a
                    }),
                    "data-geist-breadcrumb-user": "",
                    ref: t,
                    title: _,
                    children: [(0, n.jsx)("span", {
                        className: p().avatar,
                        children: y ? (0, n.jsx)(c.O, {
                            height: 32,
                            rounded: !0,
                            width: 32
                        }) : (0, n.jsx)(u.Z, {
                            children: (0, n.jsx)(d.qE, {
                                hash: x,
                                size: 32,
                                teamId: null == h ? void 0 : h.id,
                                title: _,
                                username: h ? void 0 : j
                            })
                        })
                    }), (0, n.jsx)("span", {
                        className: p().name,
                        children: y ? (0, n.jsx)(c.O, {
                            width: 80
                        }) : (0, n.jsx)(u.Z, {
                            className: "geist-ellipsis",
                            children: _
                        })
                    })]
                });
                return (0, n.jsx)(i.Fragment, {
                    children: r ? (0, n.jsx)(l(), {
                        className: p().userWrapper,
                        href: b,
                        children: w
                    }) : (0, n.jsx)("div", {
                        className: p().userWrapper,
                        children: w
                    })
                })
            });
            x.displayName = "Breadcrumb.User";
            let v = i.memo(e => {
                let {
                    color: t,
                    className: r
                } = e;
                return (0, n.jsx)("li", {
                    "aria-hidden": !0,
                    className: (0, s.W)(p().divider, r),
                    "data-geist-breadcrumb-divider": "",
                    children: (0, n.jsx)(o.i, {
                        color: t || "var(--ds-gray-alpha-400)",
                        size: 22,
                        weight: "light"
                    })
                })
            });
            v.displayName = "Breadcrumb.SlashDivider"
        },
        93325: function(e, t, r) {
            "use strict";
            r.d(t, {
                m: function() {
                    return g
                },
                Y: function() {
                    return p
                }
            });
            var n = r(397458),
                i = r(652983),
                s = r(850667),
                a = r(301850),
                l = r(511633),
                o = r(282966),
                c = r(938187),
                d = r(132950),
                u = r(596647),
                m = r.n(u),
                h = r(651938);

            function p() {
                let {
                    selected: e = 0
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t, r] = i.useState(e), [n, s] = i.useState(""), a = i.useRef(null), o = i.useRef(null), c = (0, l.Ak)(), {
                    ref: d,
                    ...u
                } = c, m = function(e, t) {
                    let r = Object.values(e.current);
                    if (!r.length) return null;
                    if ("" === t) return r;
                    let n = (0, h.Lu)(r, t, {
                        keys: [e => e.value]
                    });
                    return n
                }(u.map, n);
                return {
                    inputValue: n,
                    setInputValue: function(e) {
                        "string" == typeof e ? s(e) : s(e.target.value), r(0)
                    },
                    selectedIndex: t,
                    setSelectedIndex: r,
                    filterList: m,
                    listRef: d,
                    contentRef: a,
                    inputRef: o,
                    ...u
                }
            }

            function g(e) {
                let {
                    children: t,
                    inputValue: r,
                    setInputValue: i,
                    selectedIndex: l,
                    setSelectedIndex: o,
                    contentRef: c,
                    inputRef: d,
                    ...u
                } = e, m = (0, s.M)(), h = (0, s.M)();
                return (0, n.jsx)(a.Ae.Provider, {
                    value: {
                        listId: m,
                        inputId: h,
                        inputValue: r,
                        setInputValue: i,
                        selectedIndex: l,
                        setSelectedIndex: o,
                        inputRef: d,
                        filterList: [],
                        listRef: {
                            current: null
                        },
                        list: {
                            current: []
                        },
                        map: {
                            current: {}
                        },
                        force: () => void 0,
                        ...u
                    },
                    children: t
                })
            }
            g.Item = function(e) {
                var t;
                let {
                    children: r,
                    callback: s,
                    hideOnFilter: o,
                    isStatic: c = !1,
                    value: d,
                    ...u
                } = e, [m, h] = (0, i.useState)(""), p = !!u.isDocs;
                (0, i.useEffect)(() => {
                    let e = _.current;
                    e && h((e.textContent ? ? "").trim())
                }, [r]);
                let {
                    selectedIndex: g,
                    setSelectedIndex: f,
                    filterList: x,
                    list: v,
                    map: j
                } = (0, a.DX)(), {
                    index: b,
                    ref: _,
                    id: y
                } = (0, l.Yf)(a.qN, {
                    value: o ? null : d || m,
                    callback: s,
                    ...u
                }), w = !!j.current[y], k = null === (t = v.current[g]) || void 0 === t ? void 0 : t._internalId, C = k === y, S = Array.isArray(x) && w ? x.findIndex(e => {
                    let {
                        _internalId: t
                    } = e;
                    return t === y
                }) : void 0;
                return ((0, i.useEffect)(() => {
                    if (C && _.current) {
                        let e = _.current,
                            t = e.parentElement;
                        if ((null == t ? void 0 : t.hasAttribute("data-command-group")) && t.firstChild === e) {
                            let r = e.closest("[data-command-list-wrapper]");
                            t.parentElement && (null == r ? void 0 : r.scrollTop) && r.scrollTop > t.parentElement.offsetTop && (r.scrollTop = t.parentElement.offsetTop)
                        }
                        e.scrollIntoView({
                            block: "nearest"
                        })
                    }
                }, [C]), p || -1 !== S || c) ? (0, n.jsx)("li", { ...u,
                    "aria-selected": C || void 0,
                    "data-command-item": "",
                    "data-order": S,
                    onClick: e => {
                        null == s || s(e)
                    },
                    onPointerMove: () => {
                        f(b)
                    },
                    ref: _,
                    role: "option",
                    children: r
                }) : null
            }, g.Group = function(e) {
                let {
                    children: t,
                    heading: r,
                    customHeading: a,
                    className: l
                } = e, c = (0, s.M)(), d = (0, i.useRef)(null), [u, m] = (0, i.useState)(!0);
                return (0, o.Z)(() => {
                    if (!d.current) return;
                    let e = d.current.children.length;
                    m(0 !== e)
                }), (0, n.jsxs)("li", {
                    role: "presentation",
                    style: u ? void 0 : {
                        display: "none"
                    },
                    children: [a ? (0, n.jsx)("div", {
                        id: c,
                        children: a
                    }) : (0, n.jsx)("div", {
                        className: l,
                        "data-command-group-heading": "",
                        id: c,
                        children: r
                    }), (0, n.jsx)("ul", {
                        "aria-labelledby": c,
                        "data-command-group": "",
                        ref: d,
                        role: "group",
                        children: t
                    })]
                })
            }, g.Input = function(e) {
                let {
                    onKeyDown: t,
                    disabled: r,
                    ...i
                } = e, {
                    listId: s,
                    inputId: l,
                    inputValue: o,
                    setInputValue: u,
                    inputRef: h
                } = (0, a.DX)(), p = function() {
                    let {
                        setSelectedIndex: e,
                        selectedIndex: t,
                        list: r
                    } = (0, a.DX)();

                    function n() {
                        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            i = Math.max(t - n, 0);
                        r.current[i] ? e(i) : e(0)
                    }

                    function i() {
                        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            i = Math.min(t + n, r.current.length - 1);
                        r.current[i] ? e(i) : e(r.current.length || 0)
                    }
                    return s => {
                        switch (s.key) {
                            case "Home":
                                s.preventDefault(), e(0);
                                break;
                            case "End":
                                s.preventDefault(), e(r.current.length || 0);
                                break;
                            case "ArrowDown":
                                s.preventDefault(), s.shiftKey ? i(5) : i();
                                break;
                            case "ArrowUp":
                                s.preventDefault(), s.shiftKey ? n(5) : n();
                                break;
                            case "Enter":
                                {
                                    var a;s.preventDefault();
                                    let e = null === (a = r.current[t]) || void 0 === a ? void 0 : a.callback;e(s)
                                }
                        }
                    }
                }(), g = !!i.showClear;
                return (0, n.jsxs)(d.K, {
                    align: "center",
                    direction: "row",
                    gap: 2,
                    children: [(0, n.jsx)("input", {
                        onChange: u,
                        onKeyDown: e => {
                            p(e), null == t || t(e)
                        },
                        ref: h,
                        value: o,
                        ...i,
                        "aria-autocomplete": "list",
                        "aria-expanded": !0,
                        "aria-haspopup": "listbox",
                        "aria-owns": s,
                        autoComplete: "off",
                        autoFocus: i.autoFocus ? ? !0,
                        "data-command-input": "",
                        disabled: r,
                        id: l,
                        role: "combobox",
                        spellCheck: !1,
                        type: "text"
                    }), !!g && (0, n.jsx)("button", {
                        className: "" === o ? m().hidebutton : m().button,
                        onClick: () => {
                            var e;
                            u(""), null === (e = h.current) || void 0 === e || e.focus()
                        },
                        type: "button",
                        children: (0, n.jsx)("span", {
                            children: (0, n.jsx)(c.a, {
                                size: 20
                            })
                        })
                    })]
                })
            }, g.List = function(e) {
                let {
                    children: t,
                    maxHeight: r = 300,
                    emptyMessage: s,
                    disableDynamicHeight: l,
                    ...c
                } = e, d = (0, i.useRef)(null), u = (0, a.DX)(), {
                    listId: h,
                    listRef: p,
                    map: g,
                    list: f,
                    force: x,
                    inputValue: v
                } = u;
                (0, o.Z)(() => {
                    if (!p.current) return;
                    let e = new Map,
                        t = Array.from(p.current.querySelectorAll("[data-descendant], [data-command-separator]"));
                    c.applySort && t.sort((e, t) => Number(e.getAttribute("data-order")) - Number(t.getAttribute("data-order"))), t.forEach(t => {
                        if (t.parentElement) {
                            var r;
                            t.parentElement.appendChild(t);
                            let n = t.closest("[data-command-list] > *");
                            !n || n === t || n === p.current || e.has(n) || (null === (r = p.current) || void 0 === r || r.appendChild(n), e.set(n, !0))
                        }
                    })
                }, [v]), (0, o.Z)(() => {
                    if (!p.current || !d.current || l) return;
                    let e = Math.min(p.current.offsetHeight + 1, r);
                    d.current.style.height = `${1===e?0:e}px`
                });
                let j = (0, i.useMemo)(() => ({
                    list: f,
                    map: g,
                    force: x
                }), [f, g, x]);
                return (0, n.jsx)("div", {
                    className: m().listWrapper,
                    "data-command-list-wrapper": "",
                    ref: d,
                    children: (0, n.jsxs)("ul", {
                        id: h,
                        ref: p,
                        role: "listbox",
                        ...c,
                        "data-command-list": "",
                        children: [0 === f.current.length && v.length > 0 && (0, n.jsx)("div", {
                            "data-command-empty": "",
                            children: s
                        }), (0, n.jsx)(a.qN.Provider, {
                            value: j,
                            children: t
                        })]
                    })
                })
            }, g.Separator = function(e) {
                let {
                    className: t
                } = e, {
                    inputValue: r
                } = (0, a.DX)(), s = (0, i.useRef)(null);
                return ((0, o.Z)(() => {
                    let e = s.current;
                    if (!e) return;
                    let t = e.nextElementSibling;
                    t && t.hasAttribute("data-order") && e.setAttribute("data-order", t.getAttribute("data-order"))
                }), r) ? null : (0, n.jsx)("li", {
                    className: t,
                    "data-command-separator": "",
                    ref: s,
                    role: "separator"
                })
            }
        },
        301850: function(e, t, r) {
            "use strict";
            r.d(t, {
                Ae: function() {
                    return s
                },
                DX: function() {
                    return a
                },
                qN: function() {
                    return l
                }
            });
            var n = r(652983),
                i = r(511633);
            let s = n.createContext({
                    listId: "",
                    inputId: "",
                    inputValue: "",
                    selectedIndex: 0,
                    inputRef: {
                        current: null
                    },
                    filterList: null,
                    listRef: {
                        current: null
                    },
                    list: {
                        current: []
                    },
                    map: {
                        current: {}
                    },
                    setInputValue: () => void 0,
                    setSelectedIndex: () => void 0,
                    force: () => void 0
                }),
                a = () => n.useContext(s),
                l = (0, i.hS)()
        },
        41995: function(e, t, r) {
            "use strict";
            r.d(t, {
                l: function() {
                    return E
                },
                t: function() {
                    return P
                }
            });
            var n = r(397458),
                i = r(14517),
                s = r(659178),
                a = r(944736),
                l = r(589293),
                o = r(840905),
                c = r(835093),
                d = r(132950),
                u = r(121446),
                m = r(487554),
                h = r(957717),
                p = r(426476),
                g = r(274738),
                f = r(797631),
                x = r(854635),
                v = r(684874),
                j = r(134922),
                b = r(596312),
                _ = r(908103),
                y = r(167734),
                w = r.n(y),
                k = r(731352),
                C = r(652983),
                S = r(950429),
                N = r(3793),
                I = r.n(N);
            let $ = (0, C.forwardRef)((e, t) => {
                let {
                    className: r,
                    style: s,
                    children: a,
                    ...l
                } = e;
                return (0, n.jsxs)("div", {
                    className: (0, i.W)(r, I().block),
                    ref: t,
                    style: s,
                    children: [(0, n.jsx)(S.r, { ...l,
                        children: []
                    }), (0, n.jsx)("div", {
                        children: a
                    })]
                })
            });
            $.displayName = "NestedLinkBlock";
            var M = r(776912),
                A = r.n(M);

            function E(e) {
                let {
                    deployment: t,
                    size: r = 32,
                    style: s,
                    project: a,
                    title: l
                } = e, {
                    data: o
                } = (0, b.Z)(t), d = (0, x.mk)(a);
                return d || o ? (0, n.jsx)(p.qE, {
                    className: (0, i.W)({
                        [A().favicon]: !!(!o || !o.isSquare),
                        [w().frameworkIcon]: !!(!o && d)
                    }),
                    size: r,
                    src: (null == o ? void 0 : o.src) || (null == d ? void 0 : d.logo),
                    style: s,
                    title: l ? ? (null == d ? void 0 : d.name)
                }) : (0, n.jsx)(c.O, {
                    height: r,
                    rounded: !0,
                    style: {
                        flexShrink: 0
                    },
                    width: r
                })
            }

            function O(e) {
                var t;
                let {
                    project: r,
                    deployment: i
                } = e, a = r.link;
                if (!a) return (0, n.jsx)("div", {
                    className: A().gitNote,
                    children: "No Git Repository connected."
                });
                let l = (0, j.S)(i);
                return l ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(u.x, {
                        color: "gray-900",
                        title: l.commitMessage,
                        truncate: 2,
                        weight: 500,
                        children: l.commitMessage
                    }), (0, n.jsxs)(d.K, {
                        align: "center",
                        direction: "row",
                        gap: 1,
                        children: [(0, n.jsx)(s.I, {
                            color: "var(--geist-foreground)",
                            size: 12
                        }), (0, n.jsx)(u.x, {
                            color: "gray-900",
                            size: 14,
                            children: "From"
                        }), (0, n.jsx)(u.x, {
                            color: "gray-900",
                            monospace: !0,
                            style: {
                                backgroundColor: (null === (t = r.link) || void 0 === t ? void 0 : t.productionBranch) === l.commitRef ? "transparent" : "var(--accents-2)",
                                fontSize: "14px",
                                lineHeight: "18px",
                                padding: "2px 4px 4px",
                                borderRadius: "2px",
                                height: "22px"
                            },
                            title: l.commitRef,
                            truncate: 1,
                            children: l.commitRef
                        })]
                    })]
                }) : (0, n.jsx)("div", {
                    className: A().gitNote,
                    children: "No commits"
                })
            }

            function T(e) {
                let {
                    project: t,
                    deployment: r,
                    deploymentIsStale: i
                } = e, s = (0, _.R)(t.updatedAt), l = t.link, o = r ? (0, j.S)(r) : null;
                return (0, n.jsxs)(d.K, {
                    align: "center",
                    direction: "row",
                    gap: 1,
                    children: [(0, n.jsx)(u.x, {
                        color: "gray-900",
                        children: s
                    }), l && o ? i ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(u.x, {
                            color: "gray-900",
                            children: "via "
                        }), (0, n.jsxs)(d.K, {
                            align: "center",
                            direction: "row",
                            gap: 1,
                            style: {
                                marginLeft: "5px"
                            },
                            children: [(0, n.jsx)(a.b, {
                                color: "var(--geist-foreground)",
                                size: 12,
                                style: {
                                    strokeWidth: 2
                                }
                            }), (0, n.jsx)(u.x, {
                                color: "gray-1000",
                                weight: 500,
                                children: "Instant Rollback"
                            })]
                        })]
                    }) : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(u.x, {
                            color: "gray-900",
                            children: "via "
                        }), (0, n.jsx)(f.Z, {
                            gitType: o.type,
                            height: 16,
                            width: 16
                        })]
                    }) : null]
                })
            }
            let P = e => {
                let {
                    slug: t,
                    project: r
                } = e, {
                    domain: s,
                    deployment: a,
                    deploymentIsStale: p,
                    isLoading: f
                } = (0, k.s)(r.id), j = (0, x.VW)(r), b = p ? a : j, _ = r.link ? `This Deployment will be replaced by the next merge to ${r.link.productionBranch?r.link.productionBranch:"the Repository Default branch"}.` : "This rollback will be replaced by the next production deployment", y = f ? (0, n.jsx)(c.O, {
                    boxHeight: 20,
                    height: 14,
                    vcenter: !0,
                    width: 96
                }) : (0, n.jsx)("span", {
                    children: "No Production Deployment"
                });
                return (0, n.jsxs)("div", {
                    className: `${A().projectCardWrapper} ${p?A().stale:""}`,
                    children: [(0, n.jsx)($, {
                        "aria-label": `Open ${r.name}`,
                        className: A().projectCard,
                        href: `/${t}/${encodeURIComponent(r.name)}`,
                        onClick: () => {
                            v.co.track(v.s6.PROJECTS_PROJECT_CLICKED)
                        },
                        children: (0, n.jsxs)(d.K, {
                            className: A().projectCardDetails,
                            gap: 4,
                            children: [(0, n.jsxs)(d.K, {
                                align: "center",
                                direction: "row",
                                gap: 2,
                                justify: "space-between",
                                children: [(0, n.jsxs)(d.K, {
                                    align: "center",
                                    className: A().minWidth0,
                                    direction: "row",
                                    gap: 2,
                                    children: [(0, n.jsx)(E, {
                                        deployment: b,
                                        project: r
                                    }), (0, n.jsxs)(d.K, {
                                        className: A().minWidth0,
                                        children: [(0, n.jsx)(u.x, {
                                            size: 16,
                                            title: r.name,
                                            truncate: !0,
                                            weight: 500,
                                            children: r.name
                                        }), (null == s ? void 0 : s.name) ? (0, n.jsx)(u.x, {
                                            color: "gray-900",
                                            truncate: !0,
                                            children: s.name
                                        }) : y]
                                    })]
                                }), p ? (0, n.jsx)(h.u, {
                                    text: _,
                                    children: (0, n.jsx)(l.u, {
                                        color: "var(--geist-warning)",
                                        fill: !0,
                                        size: 24
                                    })
                                }) : (0, n.jsx)(g.Z, {
                                    project: r
                                })]
                            }), (0, n.jsx)(d.K, {
                                className: (0, i.W)(A().gitInfo, A().minWidth0),
                                gap: 1,
                                justify: "center",
                                children: (0, n.jsx)(O, {
                                    deployment: b,
                                    project: r
                                })
                            }), (0, n.jsx)(T, {
                                deployment: b,
                                deploymentIsStale: !!p,
                                project: r
                            })]
                        })
                    }), (null == s ? void 0 : s.name) ? (0, n.jsx)(m.Z, {
                        "aria-hidden": !0,
                        "aria-label": "Open Production Deployment",
                        className: A().visitButton,
                        href: `https://${s.name}`,
                        shape: "circle",
                        size: "small",
                        svgOnly: !0,
                        tab: !0,
                        tabIndex: -1,
                        children: (0, n.jsx)(o.d, {
                            weight: "bold"
                        })
                    }) : null]
                })
            }
        },
        797631: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return l
                }
            });
            var n = r(397458),
                i = r(816469),
                s = r(245016),
                a = r(884889);

            function l(e) {
                let {
                    gitType: t,
                    ...r
                } = e;
                switch (t) {
                    case "github":
                        return (0, n.jsx)(i.default, { ...r
                        });
                    case "gitlab":
                        return (0, n.jsx)(s.default, { ...r
                        });
                    case "bitbucket":
                        return (0, n.jsx)(a.default, { ...r
                        });
                    default:
                        throw Error(`gitType ${t} not defined in GitLogo`)
                }
            }
        },
        157490: function(e, t, r) {
            "use strict";
            var n = r(397458),
                i = r(652983),
                s = r(537525),
                a = r.n(s),
                l = r(316902),
                o = r.n(l),
                c = r(14517),
                d = r(628987),
                u = r(212536),
                m = r(779039),
                h = r(923399),
                p = r(342958),
                g = r(88487),
                f = r(433168),
                x = r(363689),
                v = r(921949),
                j = r(270430),
                b = r(71299),
                _ = r(774516),
                y = r(791688),
                w = r(857994),
                k = r(190760),
                C = r(805152),
                S = r(684874),
                N = r(716502),
                I = r.n(N),
                $ = r(582842),
                M = r(112935),
                A = r(654132);
            let E = o()(() => (0, x.E)(Promise.resolve().then(r.bind(r, 166795)).then(e => e.MobileMenu)), {
                    loadableGenerated: {
                        webpack: () => [166795]
                    },
                    ssr: !1
                }),
                O = (0, i.memo)(e => {
                    let {
                        publicDeployment: t
                    } = e, r = (0, d.useRouter)(), {
                        data: i
                    } = (0, b.a)(), s = null == i ? void 0 : i.user, {
                        teamSlug: a
                    } = (0, w.U)() || {}, l = t && !s ? "/home" : "/dashboard";
                    return !t && a && (l = `/${a}`), (0, n.jsxs)(m.F, {
                        children: [(0, n.jsx)(T, {
                            href: l,
                            router: r
                        }), (0, n.jsx)(A.$, {})]
                    })
                });

            function T(e) {
                let {
                    href: t,
                    router: r
                } = e, {
                    actions: {
                        setOpen: i
                    },
                    state: {
                        buttonId: s,
                        buttonRef: l,
                        menuId: o,
                        open: c,
                        popperAttributes: d,
                        popperStyles: m
                    }
                } = (0, u.H9)();
                return (0, n.jsx)(a(), {
                    "aria-controls": o,
                    "aria-expanded": c,
                    className: I().logo,
                    href: t,
                    id: s,
                    onClick: () => {
                        S.co.track(S.s6.BRAND_HEADER_LOGO_LEFT_CLICKED)
                    },
                    onContextMenu: e => {
                        S.co.track(S.s6.BRAND_HEADER_LOGO_RIGHT_CLICKED), e.preventDefault(), i(e => !e)
                    },
                    onMouseEnter: () => r.prefetch("/design"),
                    ref: l,
                    style: m.reference,
                    ...d.reference,
                    children: (0, n.jsx)(k.Z, {
                        "data-testid": (0, y.C)("dashboard", "logo"),
                        height: 26
                    })
                })
            }

            function P(e) {
                let {
                    breadcrumb: t,
                    hideBreadcrumbOnMobile: r,
                    headerImport: s = !1,
                    className: a,
                    hideDocs: l = !1,
                    fullWidthLayout: o = !1,
                    isDeploymentPage: d = !1
                } = e, {
                    data: u
                } = (0, b.a)(), {
                    teamSlug: m,
                    team: x
                } = (0, j.t7)(), y = (0, v.dD)(700), w = (0, _.m)(), k = (0, i.useMemo)(() => {
                    if (!t || !u || y && r) return null;
                    let e = Array.isArray(t) ? t : [t];
                    return e.map((e, t) => (0, n.jsxs)(i.Fragment, {
                        children: [(0, n.jsx)(h.t6, {}, `divider-${t}`), "string" == typeof e ? (0, n.jsx)(h.ck, {
                            bold: !0,
                            ellipsis: !0,
                            children: e
                        }) : e]
                    }, `divider-item-fragment-${t}`))
                }, [t, u, r, y]), S = k && k.length > 0 || d;
                return (0, n.jsxs)("nav", {
                    className: (0, c.W)(I().nav, {
                        [I().fullWidthLayout]: o
                    }, a),
                    children: [(0, n.jsx)("div", {
                        className: I().scope,
                        children: (0, n.jsxs)(h.aV, {
                            children: [(0, n.jsx)(h.ck, {
                                className: I().hideOnMobile,
                                fixed: !0,
                                children: (0, n.jsx)(O, {
                                    publicDeployment: w
                                })
                            }), (null == u ? void 0 : u.user) || w ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(h.t6, {
                                    className: I().hideOnMobile
                                }), (0, n.jsx)(h.ck, {
                                    children: (0, n.jsx)(g.m, {
                                        hideTextOnMobile: S,
                                        primaryColumn: "team",
                                        children: (0, n.jsx)(f.W, {
                                            hideTextOnMobile: S,
                                            team: x
                                        })
                                    })
                                })]
                            }) : null, k]
                        })
                    }), u && void 0 !== y ? (0, n.jsx)("div", {
                        className: I().links,
                        children: (0, n.jsx)(C.NotificationsProvider, {
                            children: y ? (0, n.jsx)(E, {
                                breakpoint: 700,
                                dashboard: !0,
                                teamSlug: m
                            }) : u.user ? (0, n.jsx)($.q, {
                                hasFeedback: !0,
                                headerImport: s,
                                hideDocs: l,
                                user: u.user
                            }) : (0, n.jsx)(p.Z, {
                                className: "geist-hide-on-tablet",
                                flex: "0 0 auto",
                                row: !0,
                                vcenter: !0,
                                children: (0, n.jsx)(M.ZA, {})
                            })
                        })
                    }) : null]
                })
            }
            O.displayName = "DashboardLogo", P.displayName = "HeaderDashboard", t.Z = (0, i.memo)(P)
        },
        884889: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(397458),
                i = r(652983),
                s = r(542923),
                a = r(850667);
            t.default = (0, s.l)((0, i.memo)(e => {
                let {
                    width: t = 14,
                    height: r = 14,
                    color: i = "#0052CC",
                    border: s,
                    ...l
                } = e, o = `bitbucket-${(0,a.M)()}`;
                return (0, n.jsxs)("svg", {
                    height: r,
                    viewBox: "-2 -2 65 59",
                    width: t,
                    ...l,
                    children: [(0, n.jsx)("defs", {
                        children: (0, n.jsxs)("linearGradient", {
                            id: o,
                            x1: "104.953%",
                            x2: "46.569%",
                            y1: "21.921%",
                            y2: "75.234%",
                            children: [(0, n.jsx)("stop", {
                                offset: "7%",
                                stopColor: i,
                                stopOpacity: ".4"
                            }), (0, n.jsx)("stop", {
                                offset: "100%",
                                stopColor: i
                            })]
                        })
                    }), s ? (0, n.jsx)("path", {
                        d: "M59.696 18.86h-18.77l-3.15 18.39h-13L9.426 55.47a2.71 2.71 0 001.75.66h40.74a2 2 0 002-1.68l5.78-35.59z M2 .82a2 2 0 00-2 2.32l8.49 51.54a2.7 2.7 0 00.91 1.61 2.71 2.71 0 001.75.66l15.76-18.88H24.7l-3.47-18.39h38.44l2.7-16.53a2 2 0 00-2-2.32L2 .82z",
                        stroke: "white",
                        strokeWidth: 4
                    }) : null, (0, n.jsx)("path", {
                        d: "M59.696 18.86h-18.77l-3.15 18.39h-13L9.426 55.47a2.71 2.71 0 001.75.66h40.74a2 2 0 002-1.68l5.78-35.59z",
                        fill: `url(#${o})`,
                        fillRule: "nonzero",
                        transform: "translate(-.026 .82)"
                    }), (0, n.jsx)("path", {
                        d: "M2 .82a2 2 0 00-2 2.32l8.49 51.54a2.7 2.7 0 00.91 1.61 2.71 2.71 0 001.75.66l15.76-18.88H24.7l-3.47-18.39h38.44l2.7-16.53a2 2 0 00-2-2.32L2 .82z",
                        fill: i,
                        fillRule: "nonzero"
                    })]
                })
            }), "bitbucket")
        },
        245016: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(397458),
                i = r(652983),
                s = r(542923);
            t.default = (0, s.l)((0, i.memo)(e => {
                let {
                    monochrome: t,
                    height: r,
                    width: i,
                    color: s,
                    label: a,
                    ...l
                } = e;
                return (0, n.jsxs)("svg", {
                    "aria-label": a || "gitlab",
                    height: r || 14,
                    viewBox: "0 0 24 22",
                    width: i || 14,
                    ...l,
                    children: [(0, n.jsx)("path", {
                        d: "M1.279 8.29L.044 12.294c-.117.367 0 .78.325 1.014l11.323 8.23-.009-.012-.03-.039L1.279 8.29zM22.992 13.308a.905.905 0 00.325-1.014L22.085 8.29 11.693 21.52l11.299-8.212z",
                        fill: t ? "currentColor" : s || "#FCA326"
                    }), (0, n.jsx)("path", {
                        d: "M1.279 8.29l10.374 13.197.03.039.01-.006L22.085 8.29H1.28z",
                        fill: t ? "currentColor" : s || "#E24329",
                        opacity: t ? "0.4" : null
                    }), (0, n.jsx)("path", {
                        d: "M15.982 8.29l-4.299 13.236-.004.011.014-.017L22.085 8.29h-6.103zM7.376 8.29H1.279l10.374 13.197L7.376 8.29z",
                        fill: t ? "currentColor" : s || "#FC6D26",
                        opacity: t ? "0.6" : null
                    }), (0, n.jsx)("path", {
                        d: "M18.582.308l-2.6 7.982h6.103L19.48.308c-.133-.41-.764-.41-.897 0zM1.279 8.29L3.88.308c.133-.41.764-.41.897 0l2.6 7.982H1.279z",
                        fill: t ? "currentColor" : s || "#E24329",
                        opacity: t ? "0.4" : null
                    })]
                })
            }), "gitlab")
        },
        553026: function(e, t, r) {
            "use strict";
            r.d(t, {
                Xe: function() {
                    return h
                },
                bu: function() {
                    return m
                },
                cH: function() {
                    return d
                }
            });
            var n = r(397458),
                i = r(652983),
                s = r(132950),
                a = r(121446),
                l = r(571387),
                o = r(978379),
                c = r.n(o);
            let d = (0, i.createContext)(null);

            function u(e) {
                let {
                    teamName: t
                } = e;
                return t ? (0, n.jsxs)("span", {
                    children: ["the", " ", (0, n.jsx)(a.x, {
                        as: "span",
                        weight: 600,
                        children: t
                    }), " ", "team"]
                }) : (0, n.jsxs)("span", {
                    children: ["your", " ", (0, n.jsx)(a.x, {
                        as: "span",
                        weight: 600,
                        children: "Personal Account"
                    })]
                })
            }

            function m() {
                let [e, t] = (0, i.useState)(!1), [r, n] = (0, i.useState)(), s = (0, i.useCallback)(() => {
                    t(!1)
                }, []), a = (0, i.useCallback)(e => {
                    t(!0), n(e)
                }, []), [l, o] = (0, i.useState)(0), c = (0, i.useCallback)(() => {
                    o(e => e + 1)
                }, [o]);
                return [a, {
                    active: e,
                    onClickOutside: s,
                    key: `multi-switcher-confirm${String(l)}`,
                    onAnimationDone: c,
                    ...r
                }]
            }

            function h(e) {
                let {
                    onClickOutside: t,
                    onAnimationDone: r,
                    active: i,
                    callback: o,
                    teamName: d
                } = e;
                return (0, n.jsxs)(l.u.Modal, {
                    active: i,
                    onAnimationDone: r,
                    onClickOutside: t,
                    width: 500,
                    children: [(0, n.jsx)(l.u.Body, {
                        children: (0, n.jsxs)("div", {
                            className: c().modalTitleBody,
                            children: [(0, n.jsx)(l.u.Title, {
                                children: "Confirm switching teams"
                            }), (0, n.jsx)(l.u.Inset, {
                                last: !0,
                                children: (0, n.jsxs)(s.K, {
                                    gap: 3,
                                    children: [(0, n.jsxs)(a.x, {
                                        size: 14,
                                        weight: 500,
                                        children: ["You have already created resources for this new project in", " ", (0, n.jsx)(u, {
                                            teamName: d
                                        }), "."]
                                    }), (0, n.jsxs)(a.x, {
                                        color: "gray-900",
                                        children: ["By switching teams, these resources will be left in", " ", (0, n.jsx)(u, {
                                            teamName: d
                                        }), ", and you will have to create them again once you switch teams. Additionally, these original resources will not be deleted if you continue, and you should remove them manually."]
                                    })]
                                })
                            })]
                        })
                    }), (0, n.jsxs)(l.u.Actions, {
                        children: [(0, n.jsx)(l.u.Action, {
                            onClick: t,
                            type: "secondary",
                            children: "Cancel"
                        }), (0, n.jsx)(l.u.Action, {
                            buttonType: "submit",
                            onClick: () => {
                                t(), null == o || o()
                            },
                            children: "Switch Team"
                        })]
                    })]
                })
            }
        },
        96957: function(e, t, r) {
            "use strict";
            r.d(t, {
                L: function() {
                    return p
                }
            });
            var n = r(397458),
                i = r(370747),
                s = r(121446),
                a = r(132950),
                l = r(316944),
                o = r(487554),
                c = r(218673),
                d = r(950429),
                u = r(684874),
                m = r(19590),
                h = r.n(m);
            let p = "open-scope-switcher";
            t.Z = function(e) {
                let {
                    role: t,
                    teamName: r,
                    action: m,
                    actionButton: g,
                    dataTestId: f
                } = e;
                return (0, n.jsx)("div", {
                    className: h().center,
                    "data-testid": f,
                    children: (0, n.jsxs)(c.Fieldset, {
                        className: h().fieldset,
                        hasShadow: !0,
                        children: [(0, n.jsxs)(c.Content, {
                            className: h().container,
                            children: [(0, n.jsxs)(a.K, {
                                gap: 6,
                                children: [(0, n.jsx)(s.x, {
                                    size: 24,
                                    children: "Additional Permissions Required"
                                }), (0, n.jsx)("hr", {
                                    className: "geist-hr-reset"
                                }), (0, n.jsxs)(s.x, {
                                    as: "p",
                                    children: ["As a", " ", (0, n.jsx)(s.x, {
                                        as: "span",
                                        transform: "capitalize",
                                        weight: 500,
                                        children: t.replaceAll("_", " ").toLowerCase()
                                    }), " ", "on the", " ", (0, n.jsx)(s.x, {
                                        as: "span",
                                        weight: 500,
                                        children: r
                                    }), " ", "team, you do not have the required permission to ", m, "."]
                                }), (0, n.jsx)(s.x, {
                                    as: "p",
                                    children: "To continue, please switch to a different Vercel account, or request additional permissions."
                                }), (0, n.jsx)(l.z, {
                                    align: "center",
                                    onClick: () => {
                                        document.dispatchEvent(new Event(p))
                                    },
                                    prefix: (0, n.jsx)(i.Q, {
                                        size: 17,
                                        weight: "bold"
                                    }),
                                    width: "100%",
                                    children: "Open Account Switcher"
                                })]
                            }), (0, n.jsx)("hr", {
                                className: "geist-hr-reset"
                            })]
                        }), (0, n.jsxs)(c.Footer, {
                            className: h().footer,
                            children: [(0, n.jsx)(c.Footer.Status, {
                                children: (0, n.jsxs)("span", {
                                    className: h().learn,
                                    children: ["Learn more about", " ", (0, n.jsx)(d.r, {
                                        external: !0,
                                        href: "/docs/teams-and-accounts/team-members-and-roles",
                                        onClick: () => {
                                            u.co.track(u.s6.PERMISSIONS_CLICKED_LEARN_MORE)
                                        },
                                        tab: !0,
                                        type: "highlight",
                                        children: "Roles and Permissions"
                                    })]
                                })
                            }), (0, n.jsx)(c.Footer.Actions, {
                                className: h().footerActions,
                                children: (0, n.jsx)(o.Z, {
                                    className: h().gotolink,
                                    href: g.link,
                                    size: "small",
                                    type: "secondary",
                                    children: g.text
                                })
                            })]
                        })]
                    })
                })
            }
        },
        88487: function(e, t, r) {
            "use strict";
            r.d(t, {
                m: function() {
                    return p
                }
            });
            var n = r(397458),
                i = r(835093),
                s = r(132950),
                a = r(426476),
                l = r(14517),
                o = r(922058),
                c = r(774516),
                d = r(210699),
                u = r(433168),
                m = r(681616),
                h = r.n(m);

            function p(e) {
                let {
                    isLoading: t,
                    team: r
                } = (0, d.Z)(), m = (0, c.m)(), p = (0, o.qP)();
                return t && !m ? (0, n.jsxs)(s.K, {
                    align: "center",
                    className: h().crumb,
                    direction: "row",
                    gap: 2,
                    children: [(0, n.jsx)(a.qE, {
                        placeholder: !0,
                        size: 22
                    }), "team" === e.primaryColumn && e.hideTextOnMobile ? (0, n.jsx)(i.O, {
                        className: h().showOnMobile,
                        height: 14,
                        style: {
                            marginLeft: 2,
                            marginRight: 12
                        },
                        width: 8
                    }) : null, (0, n.jsx)(i.O, {
                        className: (0, l.W)({
                            [h().hideOnMobile]: e.hideTextOnMobile
                        }),
                        height: 22,
                        width: 140
                    })]
                }) : (0, n.jsx)(s.K, {
                    align: "center",
                    className: h().crumb,
                    direction: "row",
                    children: (0, n.jsx)(u.m, { ...e,
                        setCreateModalOpen: () => p({
                            source: "scope switcher"
                        }),
                        team: r,
                        children: e.children
                    })
                })
            }
        },
        433168: function(e, t, r) {
            "use strict";
            r.d(t, {
                m: function() {
                    return eT
                },
                W: function() {
                    return eO
                }
            });
            var n, i, s = r(397458),
                a = r(34280),
                l = r(537525),
                o = r.n(l),
                c = r(652983),
                d = r(628987),
                u = r(14517),
                m = r(829747),
                h = r(491205),
                p = r(287011),
                g = r(132950),
                f = r(121446),
                x = r(316944),
                v = r(426476),
                j = r(284476),
                b = r(145857),
                _ = r(93325),
                y = r(96957),
                w = r(137768),
                k = r(684874),
                C = r(791688),
                S = r(774516),
                N = r(921949),
                I = r(270430),
                $ = r(71299),
                M = r(426994),
                A = r(857994);
            (n = i || (i = {})).PROJECTS = "scope-search-projects", n.TEAMS = "scope-search-teams";
            var E = r(31457),
                O = r(336633),
                T = r(573102),
                P = r(3236);

            function L(e) {
                var t, r;
                let {
                    user: n,
                    team: i,
                    fallbackToPlan: a = !1
                } = e, l = i || n;
                if (!l) return null;
                let o = (null == i ? void 0 : i.id) || (null == n ? void 0 : n.uid);
                if (!o) return null;
                if ((0, T.fz)(l)) return (0, s.jsx)(O.H, {
                    color: "var(--accents-5)",
                    size: 16,
                    style: {
                        marginLeft: "auto"
                    },
                    weight: "bold"
                });
                if ((null === (t = l.billing) || void 0 === t ? void 0 : t.plan) && !["pro", "hobby", "enterprise"].includes(l.billing.plan)) return (0, s.jsx)(E.m8, {
                    variant: "red-subtle",
                    children: "Legacy"
                });
                let c = (0, P.Q)(l);
                return void 0 !== c ? c : (null === (r = l.billing) || void 0 === r ? void 0 : r.status) === "overdue" ? (0, s.jsx)(E.m8, {
                    variant: "red-subtle",
                    children: "Overdue"
                }) : l.softBlock ? (0, s.jsx)(E.m8, {
                    variant: "red-subtle",
                    children: "Paused"
                }) : a ? (0, s.jsx)(E.vE, {
                    team: i,
                    user: n
                }) : null
            }
            var R = r(477234),
                z = r(835093),
                W = r(216998),
                D = r(892663),
                K = r(891828),
                F = r(854635),
                Z = r(353729),
                H = r(118526);
            async function B(e) {
                return (0, H.a)(e, {
                    throwOnHTTPError: !0
                })
            }
            var q = r(316902),
                G = r.n(q);

            function V(e) {
                let {
                    size: t,
                    color: r = "var(--accents-5)"
                } = e, n = (0, c.useId)();
                return (0, s.jsxs)("svg", {
                    fill: "none",
                    height: t,
                    viewBox: "0 0 16 16",
                    width: t,
                    children: [(0, s.jsxs)("g", {
                        clipPath: `url(#${n})`,
                        stroke: r,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5",
                        children: [(0, s.jsx)("path", {
                            d: "M12.742 5.776a4.75 4.75 0 1 0-2.62 3.975"
                        }), (0, s.jsx)("path", {
                            d: "M3.262 6.31A4.75 4.75 0 1 0 8 6.46"
                        }), (0, s.jsx)("path", {
                            d: "M5.855 9.5a4.752 4.752 0 0 1 9.395 1A4.75 4.75 0 0 1 8 14.54"
                        })]
                    }), (0, s.jsx)("defs", {
                        children: (0, s.jsx)("clipPath", {
                            id: n,
                            children: (0, s.jsx)("path", {
                                d: "M0 0h16v16H0z",
                                fill: "#fff"
                            })
                        })
                    })]
                })
            }
            r(797631);
            var U = r(305795),
                X = r.n(U);
            let J = G()(() => Promise.resolve().then(r.bind(r, 816469)), {
                    loadableGenerated: {
                        webpack: () => [816469]
                    }
                }),
                Y = G()(() => Promise.resolve().then(r.bind(r, 245016)), {
                    loadableGenerated: {
                        webpack: () => [245016]
                    }
                }),
                Q = G()(() => Promise.resolve().then(r.bind(r, 884889)), {
                    loadableGenerated: {
                        webpack: () => [884889]
                    }
                });

            function ee(e) {
                let {
                    gitProvider: t
                } = e, r = null;
                return t ? ("github" === t ? r = (0, s.jsx)(J, {
                    height: 16,
                    width: 16
                }) : "gitlab" === t ? r = (0, s.jsx)(Y, {
                    height: 16,
                    width: 16
                }) : "bitbucket" === t && (r = (0, s.jsx)(Q, {
                    height: 16,
                    width: 16
                })), (0, s.jsxs)(g.K, {
                    align: "center",
                    as: "span",
                    className: X().container,
                    direction: "row",
                    justify: "space-evenly",
                    children: [(0, s.jsx)("svg", {
                        className: X().iconBackground,
                        fill: "none",
                        height: "24",
                        width: "46",
                        children: (0, s.jsxs)("g", {
                            children: [(0, s.jsx)("path", {
                                d: "M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5c3.145 0 5.994 1.262 8.071 3.308.742.731 1.864 1.062 2.929 1.062 1.065 0 2.187-.33 2.929-1.062A11.461 11.461 0 0 1 34 .5C40.351.5 45.5 5.649 45.5 12S40.351 23.5 34 23.5a11.461 11.461 0 0 1-8.071-3.308c-.742-.731-1.864-1.062-2.929-1.062-1.065 0-2.187.33-2.929 1.062A11.461 11.461 0 0 1 12 23.5Z",
                                fill: "var(--accents-1)"
                            }), (0, s.jsx)("path", {
                                d: "M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5c3.145 0 5.994 1.262 8.071 3.308.742.731 1.864 1.062 2.929 1.062 1.065 0 2.187-.33 2.929-1.062A11.461 11.461 0 0 1 34 .5C40.351.5 45.5 5.649 45.5 12S40.351 23.5 34 23.5a11.461 11.461 0 0 1-8.071-3.308c-.742-.731-1.864-1.062-2.929-1.062-1.065 0-2.187.33-2.929 1.062A11.461 11.461 0 0 1 12 23.5Z",
                                stroke: "var(--ds-gray-alpha-400)"
                            })]
                        })
                    }), (0, s.jsx)(V, {
                        size: 16
                    }), (0, s.jsx)(g.K, {
                        align: "center",
                        as: "span",
                        className: X().gitIconContainer,
                        justify: "center",
                        children: r
                    })]
                })) : (0, s.jsxs)(g.K, {
                    align: "center",
                    className: X().singleIconContainer,
                    justify: "center",
                    children: [(0, s.jsx)("svg", {
                        className: X().iconBackground,
                        fill: "none",
                        height: "24",
                        width: "24",
                        children: (0, s.jsx)("circle", {
                            cx: "12",
                            cy: "12",
                            fill: "var(--accents-1)",
                            r: "11.5",
                            stroke: "var(--ds-gray-alpha-400)"
                        })
                    }), (0, s.jsx)(V, {
                        size: 16
                    })]
                })
            }
            var et = r(431465),
                er = r(41995),
                en = r(553026),
                ei = r(681616),
                es = r.n(ei);

            function ea(e) {
                let {
                    user: t,
                    team: r,
                    isCurrent: n,
                    close: i
                } = e, [a, l] = (0, c.useState)(!1), [o, m] = (0, c.useState)(0), h = (0, d.useRouter)(), p = (0, E.tH)({
                    user: t,
                    team: r
                }), f = (0, d.usePathname)(), x = (0, d.useSearchParams)(), {
                    value: j
                } = (0, D.XB)(), b = (0, c.useContext)(en.cH), y = (e, n) => {
                    if (p.slug && ((0, K.Z8)(p.slug), f && x)) {
                        let i = (0, W.W)({
                            pathname: f,
                            searchParams: x,
                            team: r,
                            user: t
                        });
                        e.ctrlKey || e.metaKey || "button" in e && 1 === e.button ? window.open(i, "_blank", "noopener") : n ? window.open(i, "_self", "noopener") : h.push(i)
                    }
                };
                return (0, s.jsx)(_.m.Item, {
                    callback: e => {
                        if (p.slug && (i(), f && x)) {
                            if (b) {
                                b.openModalSwitchConfirm({
                                    callback: () => y(e, !0)
                                });
                                return
                            }
                            y(e, !1)
                        }
                    },
                    className: (0, u.W)(es().teamItem, {
                        [es().hover]: a
                    }),
                    "data-current": n,
                    onMouseMove: e => {
                        if (a) {
                            let {
                                left: t,
                                width: r,
                                top: n,
                                height: i
                            } = e.currentTarget.getBoundingClientRect(), s = e.clientX - t, a = e.clientY - n, l = a / i * 100;
                            l >= 5 && l <= 95 && m(s / r * 100)
                        }
                    },
                    onMouseOut: () => {
                        l(!1)
                    },
                    onMouseOver: () => {
                        l(!0)
                    },
                    style: {
                        "--x-position": `${o}%`
                    },
                    value: [p.name, p.slug],
                    children: (0, s.jsxs)(g.K, {
                        align: "center",
                        className: es().itemWrapper,
                        direction: "row",
                        flex: "1",
                        justify: "space-between",
                        children: [(0, s.jsxs)(g.K, {
                            align: "center",
                            className: es().itemWrapper,
                            direction: "row",
                            flex: "1",
                            gap: 2,
                            children: [(0, s.jsx)(v.qE, {
                                hash: p.avatar,
                                size: 22,
                                teamId: null == r ? void 0 : r.id,
                                username: r ? void 0 : null == t ? void 0 : t.username
                            }), (0, s.jsx)("span", {
                                className: (0, u.W)(es().name, "geist-ellipsis", {
                                    [es().showAllBadges]: j
                                }),
                                children: p.name
                            }), (0, s.jsx)(L, {
                                fallbackToPlan: !!j,
                                team: r,
                                user: t
                            })]
                        }), n ? (0, s.jsx)(R.J, {
                            color: "var(--ds-gray-900)",
                            size: 20,
                            style: {
                                marginLeft: 8
                            }
                        }) : null]
                    })
                })
            }

            function el(e) {
                let {
                    projectId: t,
                    teamSlug: r,
                    ...n
                } = e, i = (0, d.useRouter)(), {
                    data: a,
                    isLoading: l
                } = (0, et.PY)(t, {
                    config: {
                        onError: () => !0
                    },
                    fetchOptions: {
                        throwOnSAMLError: !0
                    }
                }, r), {
                    team: o
                } = (0, I.t7)(void 0, r);
                return l ? (0, s.jsx)(eu, {}) : (0, T.fz)(o) ? (0, s.jsx)(_.m.Item, {
                    callback: () => {
                        (0, T.ZY)({
                            slug: r,
                            push: e => {
                                i.push(e)
                            }
                        })
                    },
                    "data-current": n.isCurrent,
                    value: ["unauthed-project", t, r],
                    children: (0, s.jsxs)(g.K, {
                        align: "center",
                        className: es().itemWrapper,
                        direction: "row",
                        flex: "1",
                        justify: "space-between",
                        children: [(0, s.jsxs)(g.K, {
                            align: "center",
                            direction: "row",
                            gap: 2,
                            children: [(0, s.jsx)("div", {
                                className: es().protectedProject
                            }), (0, s.jsx)(f.x, {
                                children: "Protected Project"
                            })]
                        }), (0, s.jsx)(O.H, {
                            color: "var(--accents-5)",
                            size: 16,
                            weight: "bold"
                        })]
                    })
                }) : a ? (0, s.jsx)(ec, { ...n,
                    project: a,
                    scopeSlug: r
                }) : null
            }

            function eo(e) {
                let {
                    spaceId: t,
                    teamId: r,
                    teamSlug: n,
                    ...i
                } = e, {
                    data: a
                } = function(e) {
                    let {
                        teamId: t,
                        spaceId: r,
                        ...n
                    } = e, i = new URL(`/api/v0/spaces/${r}`, "https://vercel.com");
                    t && i.searchParams.set("teamId", t), i.searchParams.set("spaceId", r), i.searchParams.set("minimized", "1");
                    let s = `${i.pathname}${i.search}`;
                    return (0, Z.ZP)(s, B, n)
                }({
                    teamId: r,
                    spaceId: t
                }), l = null == a ? void 0 : a.space;
                return l ? (0, s.jsx)(ed, { ...i,
                    isTeam: !!r,
                    scopeSlug: n,
                    space: l
                }) : (0, s.jsx)(eu, {})
            }

            function ec(e) {
                let {
                    project: t,
                    scopeSlug: r,
                    isCurrent: n,
                    contentRight: i,
                    close: a
                } = e, l = (0, d.useRouter)(), o = (0, d.usePathname)(), c = (0, d.useSearchParams)();
                return (0, s.jsx)(_.m.Item, {
                    callback: e => {
                        let n = t.name;
                        if (n && (a(), r && o)) {
                            let n = `/${r}/${t.name}`,
                                i = null == c ? void 0 : c.get("teamSlug"),
                                s = null == c ? void 0 : c.get("project"),
                                a = null == c ? void 0 : c.get("id");
                            i && s && r && o.includes(s) && (n = o.replace(i, "[team]").replace(s, "[project]").replace("[team]", r).replace("[project]", t.name)), null != a && (n = n.replace(`/${a}`, ""));
                            let d = window.location.search;
                            d && (n += d), e.ctrlKey || e.metaKey || "button" in e && 1 === e.button ? window.open(n, "_blank", "noopener") : l.push(n)
                        }
                    },
                    "data-current": n,
                    value: [t.name, t.id, r],
                    children: (0, s.jsx)(em, {
                        contentRight: i,
                        isCurrent: n,
                        name: t.name,
                        project: !0,
                        children: (0, s.jsx)(er.l, {
                            deployment: (0, F.VW)(t),
                            project: t,
                            size: 16,
                            style: {
                                position: "relative"
                            }
                        })
                    })
                })
            }

            function ed(e) {
                let {
                    space: t,
                    scopeSlug: r,
                    isCurrent: n,
                    contentRight: i,
                    close: a,
                    isTeam: l
                } = e, o = (0, d.useRouter)(), c = (0, d.usePathname)(), u = (0, d.useSearchParams)();
                return (0, s.jsx)(_.m.Item, {
                    callback: e => {
                        let n = t.id;
                        if (n && (a(), r && c)) {
                            let n = (u || "").toString(),
                                i = l ? `/teams/${r}/spaces/${t.id}?${n}` : `/dashboard/spaces/${t.id}?${n}`;
                            e.metaKey ? window.open(i, "_blank", "noopener") : o.push(i)
                        }
                    },
                    "data-current": n,
                    value: [t.name, t.id, r],
                    children: (0, s.jsx)(em, {
                        contentRight: i,
                        isCurrent: n,
                        name: t.name,
                        children: (0, s.jsx)(ee, {
                            gitProvider: t.repository.type
                        })
                    })
                })
            }

            function eu(e) {
                let {
                    index: t = 0,
                    project: r
                } = e;
                return (0, s.jsxs)(_.m.Item, {
                    style: {
                        display: "flex",
                        background: "transparent"
                    },
                    children: [(0, s.jsx)(z.O, {
                        height: 16,
                        rounded: !0,
                        style: {
                            marginRight: r ? 13 : "4px"
                        },
                        width: 16
                    }), (0, s.jsx)(z.O, {
                        height: 20,
                        style: {
                            margin: "2px 0",
                            flex: .7 + (t % 2 ? .2 : 0)
                        }
                    })]
                })
            }

            function em(e) {
                let {
                    children: t,
                    name: r,
                    isCurrent: n,
                    contentRight: i,
                    project: a
                } = e;
                return (0, s.jsxs)(g.K, {
                    align: "center",
                    className: (0, u.W)(es().itemWrapper, {
                        [es().projectWrapper]: a
                    }),
                    direction: "row",
                    flex: "1",
                    justify: "space-between",
                    children: [(0, s.jsxs)(g.K, {
                        align: "center",
                        className: (0, u.W)(es().itemWrapper, {
                            [es().projectWrapper]: a
                        }),
                        direction: "row",
                        flex: "1",
                        gap: 2,
                        children: [(0, s.jsx)("div", {
                            style: {
                                position: "relative",
                                display: "flex",
                                alignItems: "center"
                            },
                            children: t
                        }), (0, s.jsx)("span", {
                            className: (0, u.W)(es().name, "geist-ellipsis"),
                            children: r
                        })]
                    }), (0, s.jsx)("div", {
                        className: es()["hover-content"],
                        children: i
                    }), n ? (0, s.jsx)(R.J, {
                        color: "var(--ds-gray-900)",
                        size: 20,
                        style: {
                            marginLeft: 8
                        }
                    }) : null]
                })
            }
            var eh = r(993834),
                ep = r(889353),
                eg = r(676443),
                ef = r(742538),
                ex = r(636615),
                ev = r(311372),
                ej = r(532870);
            async function eb(e) {
                return (0, H.a)(e, {
                    throwOnHTTPError: !0
                })
            }
            var e_ = r(121123),
                ey = r(58363),
                ew = r(68751),
                ek = r(210699),
                eC = r(308108);

            function eS(e) {
                return !!("projectId" in e && e.projectId)
            }
            var eN = r(930768);

            function eI(e) {
                var t;
                let {
                    primary: r,
                    activeSection: n,
                    setActiveSection: a,
                    commandProps: l,
                    selectedScope: o,
                    close: m,
                    isSpacesEnabled: v
                } = e, j = (0, d.useRouter)(), b = (0, A.U)(), {
                    addFavorite: y,
                    removeFavorite: k,
                    favorites: S
                } = function() {
                    let {
                        user: e,
                        isLoading: t
                    } = (0, ek.Z)(), [r, n] = (0, c.useState)([]), i = (0, eC.e1)();
                    return (0, c.useEffect)(() => {
                        !t && e && n(e.favoriteProjectsAndSpaces || [])
                    }, [t, e]), {
                        addFavorite: e => {
                            let t = (0, ew._)(async () => {
                                let t = [...r, e];
                                try {
                                    n(t), await (0, ey.I)(e_.zh, {
                                        method: "PATCH",
                                        body: {
                                            favoriteProjectsAndSpaces: t
                                        },
                                        throwOnHTTPError: !0
                                    })
                                } catch {
                                    i.error(`Adding the ${eS(e)?"project":"space"} to your favorites failed.`), n(r)
                                }
                            });
                            t()
                        },
                        favorites: r,
                        removeFavorite: e => {
                            let t = (0, ew._)(async () => {
                                let t = r.filter(t => t !== e);
                                try {
                                    n(t), await (0, ey.I)(e_.zh, {
                                        method: "PATCH",
                                        body: {
                                            favoriteProjectsAndSpaces: t
                                        },
                                        throwOnHTTPError: !0
                                    })
                                } catch {
                                    i.error(`Removing the ${eS(e)?"project":"space"} from your favorites failed.`), n(r)
                                }
                            });
                            t()
                        }
                    }
                }(), {
                    teams: N
                } = (0, I.t7)(), {
                    setInputValue: $,
                    inputValue: M
                } = l, {
                    data: E,
                    isLoading: O
                } = (0, ex.ZP)({
                    limit: 10,
                    latestDeployments: 0,
                    search: M
                }, {
                    onError: () => !0,
                    revalidateIfStale: !1,
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1
                }, o || "", {
                    throwOnSAMLError: !0
                }), {
                    data: P,
                    isLoading: L
                } = function(e) {
                    let {
                        teamId: t
                    } = e;
                    return (0, ej.ZP)((e, r) => {
                        let n = new URL("/api/v0/spaces/projects", "https://vercel.com");
                        if (t && n.searchParams.set("teamId", t), e > 0) {
                            if (r) {
                                let e = [...Object.keys(r.spaces ? ? {}), ...Object.keys(r.projects ? ? {})];
                                e.length > 0 && n.searchParams.set("excludeRepos", e.join(","))
                            }
                            let e = null == r ? void 0 : r.pagination.next;
                            if ("number" != typeof e) return null;
                            n.searchParams.set("until", String(e))
                        }
                        return `${n.pathname}${n.search}`
                    }, eb, {
                        revalidateIfStale: !1,
                        revalidateOnFocus: !1,
                        revalidateOnReconnect: !1
                    })
                }({
                    teamId: v ? null == N ? void 0 : null === (t = N.find(e => e.slug === o)) || void 0 === t ? void 0 : t.id : void 0
                }), R = O || L, z = null == N ? void 0 : N.find(e => e.slug === o), W = (0, T.fz)(z), {
                    data: D
                } = (0, eN.g)("enable-vercel-spaces"), K = null == E ? void 0 : E.projects, F = null == b ? void 0 : b.project, Z = null == b ? void 0 : b.spaceId, H = F || Z, B = (null == K ? void 0 : K.filter(e => !S.some(t => "projectId" in t && t.projectId === e.id))) || [], q = (0, c.useMemo)(() => ((null == P ? void 0 : P.flatMap(e => Object.values(e.spaces || {}).map(e => e.space))) || []).filter(e => e.name.toLowerCase().includes(M.toLowerCase())).sort((e, t) => e.name.localeCompare(t.name)), [M, P]), G = (0, c.useMemo)(() => q.filter(e => !S.some(t => "spaceId" in t && t.spaceId === e.id)), [q, S]), V = (0, c.useMemo)(() => S.map(e => {
                    var t;
                    let r = {
                        close: m,
                        contentRight: (0, s.jsx)("button", {
                            "aria-label": "Remove from favorites",
                            className: es()["fav-button"],
                            onPointerUp: t => {
                                t.preventDefault(), t.stopPropagation(), k(e)
                            },
                            type: "button",
                            children: (0, s.jsx)(ep.X, {
                                size: 14,
                                style: {
                                    marginTop: 2
                                }
                            })
                        }),
                        scopeSlug: o,
                        teamSlug: e.scopeSlug,
                        teamId: null == N ? void 0 : null === (t = N.find(t => t.slug === e.scopeSlug)) || void 0 === t ? void 0 : t.id
                    };
                    return eS(e) ? (0, s.jsx)(el, {
                        isCurrent: e.projectId === H,
                        projectId: e.projectId,
                        ...r
                    }, e.projectId) : (0, s.jsx)(eo, {
                        isCurrent: e.spaceId === H,
                        spaceId: e.spaceId,
                        ...r
                    }, e.spaceId)
                }), [H, m, S, k, o, N]);
                return (0, s.jsx)(eg.M, {
                    initial: !1,
                    mode: "popLayout",
                    presenceAffectsLayout: !0,
                    children: void 0 !== o && (0, s.jsx)(ef.m.div, {
                        animate: {
                            opacity: 1
                        },
                        className: (0, u.W)(es().command, r && es().primary, {
                            [es().focused]: "projects" === n
                        }),
                        "data-testid": (0, C.C)("project-switcher", "dropdown"),
                        exit: {
                            opacity: 0
                        },
                        initial: {
                            opacity: 1
                        },
                        onMouseEnter: () => a("projects"),
                        onMouseLeave: e => {
                            let t = document.querySelector("[data-radix-popper-content-wrapper]");
                            (null == t ? void 0 : t.contains(e.relatedTarget)) && a("teams")
                        },
                        children: (0, s.jsxs)(_.m, {
                            "aria-label": "Projects and Spaces",
                            ...l,
                            children: [(0, s.jsxs)(g.K, {
                                align: "center",
                                className: es().input,
                                direction: "row",
                                children: [(0, s.jsx)(p.o, {
                                    color: "var(--accents-3)",
                                    size: 20
                                }), (0, s.jsx)(_.m.Input, {
                                    autoFocus: !1,
                                    itemID: i.PROJECTS,
                                    onFocus: () => a("projects"),
                                    placeholder: D ? "Find Project or Space..." : "Find Project..."
                                }), "projects" === n ? (0, s.jsx)(w.Z, {
                                    className: es().kbd,
                                    children: "Esc"
                                }) : null]
                            }), (0, s.jsxs)(_.m.List, {
                                className: es().list,
                                disableDynamicHeight: !0,
                                maxHeight: 730,
                                children: ["" !== M && 0 === q.length && (null == K ? void 0 : K.length) === 0 && (0, s.jsxs)(g.K, {
                                    align: "start",
                                    gap: 4,
                                    justify: "start",
                                    children: [(0, s.jsx)(f.x, {
                                        align: "left",
                                        weight: 500,
                                        children: "No Spaces or Projects Found"
                                    }), (0, s.jsxs)(f.x, {
                                        align: "left",
                                        color: "gray-900",
                                        children: ['Your search for "', M, '" did not match any spaces or projects.']
                                    }), (0, s.jsx)(x.z, {
                                        onClick: () => {
                                            $("")
                                        },
                                        size: "small",
                                        type: "secondary",
                                        width: "100%",
                                        children: "Clear Search"
                                    })]
                                }), S.length > 0 && (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)(_.m.Group, {
                                        heading: "Favorites",
                                        children: V
                                    }), (0, s.jsx)(_.m.Separator, {})]
                                }), v ? (0, s.jsx)(eA, {
                                    addFavorite: y,
                                    close: m,
                                    currentSpaceId: Z,
                                    favorites: S,
                                    nonFavoriteSpaces: G,
                                    searchValue: M,
                                    selectedScope: o,
                                    spaces: q,
                                    spacesLoading: R
                                }) : null, R ? (0, s.jsx)(_.m.Group, {
                                    heading: "Projects",
                                    children: [, , , , , ].fill(0).map((e, t) => (0, s.jsx)(eu, {
                                        index: t,
                                        project: !0
                                    }, (0, ev.k)(t, "scope-loader")))
                                }) : (0, s.jsxs)(_.m.Group, {
                                    heading: "Projects",
                                    children: [W ? (0, s.jsxs)(g.K, {
                                        align: "center",
                                        className: es().empty,
                                        gap: 3,
                                        justify: "center",
                                        children: [(0, s.jsxs)(g.K, {
                                            align: "start",
                                            gap: 1,
                                            justify: "start",
                                            children: [(0, s.jsx)(f.x, {
                                                align: "left",
                                                color: "gray-1000",
                                                weight: 600,
                                                children: "Re-Authenticate"
                                            }), (0, s.jsxs)(f.x, {
                                                align: "left",
                                                color: "gray-900",
                                                children: ["You must authenticate with SAML to access projects in", " ", (0, s.jsx)(f.x, {
                                                    as: "span",
                                                    weight: 600,
                                                    children: null == z ? void 0 : z.name
                                                }), "."]
                                            })]
                                        }), (0, s.jsx)(x.z, {
                                            onClick: () => {
                                                (0, T.ZY)({
                                                    slug: null == z ? void 0 : z.slug,
                                                    push: e => {
                                                        j.push(e)
                                                    }
                                                })
                                            },
                                            size: "small",
                                            width: "100%",
                                            children: "Continue with SAML SSO"
                                        })]
                                    }) : null, (null == K ? void 0 : K.length) === 0 && "" === M ? (0, s.jsx)(e$, {
                                        isProjects: !0
                                    }) : (0, s.jsx)(s.Fragment, {
                                        children: null == K ? void 0 : K.map(e => {
                                            let t = B.every(t => t.id !== e.id);
                                            return (0, s.jsx)(ec, {
                                                close: m,
                                                contentRight: S.length < 12 && !t && (0, s.jsx)(eM, {
                                                    addFavorite: y,
                                                    project: e,
                                                    selectedScope: o,
                                                    space: void 0
                                                }),
                                                isCurrent: e.name === F,
                                                project: e,
                                                scopeSlug: o
                                            }, `scope-project-${e.id}`)
                                        })
                                    })]
                                }), !W && (0, s.jsx)(_.m.Item, {
                                    callback: e => {
                                        if (o) {
                                            let t = `/new/${o}`;
                                            e.ctrlKey || e.metaKey || "button" in e && 1 === e.button ? window.open(t, "_blank", "noopener") : j.push(t)
                                        }
                                        m()
                                    },
                                    "data-testid": (0, C.C)("scope-switcher", "create-project"),
                                    hideOnFilter: !1,
                                    children: (0, s.jsxs)(g.K, {
                                        align: "center",
                                        direction: "row",
                                        gap: 3,
                                        children: [(0, s.jsx)(h.F, {
                                            color: "var(--ds-blue-900)",
                                            size: 16
                                        }), (0, s.jsx)(f.x, {
                                            children: "Create Project"
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                })
            }

            function e$(e) {
                let {
                    isProjects: t
                } = e;
                return (0, s.jsxs)(g.K, {
                    align: "start",
                    className: es().empty,
                    gap: 1,
                    justify: "start",
                    children: [(0, s.jsxs)(f.x, {
                        align: "left",
                        color: "gray-1000",
                        weight: 600,
                        children: ["No ", t ? "projects" : "spaces", ", yet!"]
                    }), (0, s.jsxs)(f.x, {
                        align: "left",
                        color: "gray-900",
                        children: ["This team has no ", t ? "projects" : "spaces", "."]
                    })]
                })
            }

            function eM(e) {
                let {
                    addFavorite: t,
                    selectedScope: r,
                    project: n,
                    space: i
                } = e;
                return (0, s.jsx)("button", {
                    "aria-label": "Add project to your favorites",
                    className: es()["fav-button"],
                    onPointerUp: e => {
                        e.preventDefault(), e.stopPropagation(), t({
                            scopeSlug: r || "",
                            scopeId: r || "",
                            projectId: (null == n ? void 0 : n.id) || "",
                            spaceId: (null == i ? void 0 : i.id) || ""
                        })
                    },
                    style: {
                        background: "none",
                        border: "none",
                        height: 32,
                        borderRadius: 4
                    },
                    type: "button",
                    children: (0, s.jsx)(eh.U, {
                        size: 16,
                        style: {
                            marginTop: 2,
                            marginRight: -2,
                            flexShrink: 0
                        }
                    })
                })
            }

            function eA(e) {
                let {
                    spacesLoading: t,
                    spaces: r,
                    nonFavoriteSpaces: n,
                    favorites: i,
                    addFavorite: a,
                    selectedScope: l,
                    currentSpaceId: o,
                    searchValue: c,
                    close: d
                } = e, {
                    data: u,
                    isLoading: m
                } = (0, eN.g)("enable-vercel-spaces");
                return u && !m ? t ? (0, s.jsx)(_.m.Group, {
                    heading: "Spaces",
                    children: [, , , , , ].fill(0).map((e, t) => (0, s.jsx)(eu, {
                        index: t
                    }, (0, ev.k)(t, "space-loader")))
                }) : (0, s.jsx)(_.m.Group, {
                    heading: "Spaces",
                    children: 0 === r.length && "" === c ? (0, s.jsx)(e$, {
                        isProjects: !1
                    }) : (0, s.jsx)(s.Fragment, {
                        children: r.map(e => {
                            let t = n.every(t => t.id !== e.id);
                            return (0, s.jsx)(ed, {
                                close: d,
                                contentRight: i.length < 12 && !t && (0, s.jsx)(eM, {
                                    addFavorite: a,
                                    project: void 0,
                                    selectedScope: l,
                                    space: e
                                }),
                                isCurrent: e.id === o,
                                isTeam: e.ownerId.startsWith("team"),
                                scopeSlug: l,
                                space: e
                            }, `scope-space-${e.id}`)
                        })
                    })
                }) : null
            }

            function eE(e) {
                let {
                    primary: t,
                    activeSection: r,
                    setActiveSection: n,
                    commandProps: a,
                    showCreateTeam: l,
                    onShowCreateTeam: o,
                    close: v,
                    team: b
                } = e, y = (0, d.useRouter)(), S = (0, I.nb)(), {
                    user: N
                } = (0, $.a)(), {
                    setInputValue: A,
                    inputValue: E
                } = a, {
                    teams: O
                } = (0, M.Z)(), T = (0, c.useMemo)(() => O.filter(e => {
                    let {
                        meta: {
                            pending: t,
                            dismissed: r
                        }
                    } = e;
                    return !(t || r)
                }).map(e => {
                    let {
                        id: t,
                        name: r
                    } = e;
                    return {
                        teamId: t,
                        teamName: r
                    }
                }), [O]);
                return (0, s.jsx)("div", {
                    className: (0, u.W)(es().command, t && es().primary, {
                        [es().focused]: "teams" === r
                    }),
                    "data-testid": (0, C.C)("scope-switcher", "dropdown"),
                    onMouseEnter: () => n("teams"),
                    onMouseLeave: e => {
                        let t = document.querySelector("[data-radix-popper-content-wrapper]");
                        (null == t ? void 0 : t.contains(e.relatedTarget)) && n("projects")
                    },
                    children: (0, s.jsxs)(_.m, {
                        "aria-label": "Command menu",
                        ...a,
                        children: [(0, s.jsxs)(g.K, {
                            align: "center",
                            className: es().input,
                            direction: "row",
                            children: [(0, s.jsx)(p.o, {
                                color: "var(--ds-gray-900)",
                                size: 20
                            }), (0, s.jsx)(_.m.Input, {
                                autoFocus: !1,
                                itemID: i.TEAMS,
                                onFocus: () => n("teams"),
                                placeholder: "Find Team..."
                            }), "teams" === r ? (0, s.jsx)(w.Z, {
                                className: es().kbd,
                                children: "Esc"
                            }) : null]
                        }), (0, s.jsxs)(_.m.List, {
                            disableDynamicHeight: !0,
                            emptyMessage: (0, s.jsxs)(g.K, {
                                align: "start",
                                gap: 4,
                                justify: "start",
                                children: [(0, s.jsx)(f.x, {
                                    align: "left",
                                    weight: 500,
                                    children: "No Teams Found"
                                }), (0, s.jsxs)(f.x, {
                                    align: "left",
                                    color: "gray-900",
                                    children: ['Your search for "', E, '" did not match any teams.']
                                }), (0, s.jsx)(x.z, {
                                    onClick: () => {
                                        A("")
                                    },
                                    size: "small",
                                    type: "secondary",
                                    width: "100%",
                                    children: "Clear Search"
                                })]
                            }),
                            maxHeight: 730,
                            children: [(0, s.jsx)(_.m.Group, {
                                heading: "Personal Account",
                                children: (0, s.jsx)(ea, {
                                    close: v,
                                    isCurrent: !b,
                                    user: N
                                })
                            }), (0, s.jsx)(_.m.Group, {
                                heading: "Teams",
                                children: S.map(e => (0, s.jsx)(ea, {
                                    close: v,
                                    isCurrent: !!(b && e.slug === b.slug),
                                    team: e
                                }, `scope-team-${e.slug}`))
                            }), l ? (0, s.jsx)(_.m.Item, {
                                callback: () => {
                                    o(), k.co.track(k.s6.SCOPE_SWITCHER_CLICKED_NEW_TEAM), v()
                                },
                                "data-testid": (0, C.C)("scope-switcher", "create-team"),
                                hideOnFilter: !0,
                                children: (0, s.jsxs)(g.K, {
                                    align: "center",
                                    direction: "row",
                                    gap: 3,
                                    children: [(0, s.jsx)(h.F, {
                                        color: "var(--ds-blue-900)",
                                        size: 16,
                                        style: {
                                            transform: "translateX(3px) translateZ(0)"
                                        }
                                    }), (0, s.jsx)("span", {
                                        children: "Create Team"
                                    })]
                                })
                            }) : null, "" === E && T.length ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("div", {
                                    className: es().suggestedTeamsSeparatorContainer,
                                    children: (0, s.jsx)(_.m.Separator, {
                                        className: es().suggestedTeamsSeparator
                                    })
                                }), (0, s.jsxs)(_.m.Item, {
                                    callback: e => {
                                        let t = "/account/teams";
                                        e.ctrlKey || e.metaKey || "button" in e && 1 === e.button ? window.open(t, "_blank", "noopener") : y.push(t), k.co.track(k.s6.SCOPE_SWITCHER_SUGGESTED_TEAMS_CLICKED), v()
                                    },
                                    className: es().suggestedTeams,
                                    hideOnFilter: !0,
                                    children: [(0, s.jsxs)(g.K, {
                                        align: "center",
                                        direction: "row",
                                        gap: 2,
                                        children: [(0, s.jsx)(j.H, {
                                            limit: 2,
                                            members: T,
                                            size: 24
                                        }), (0, s.jsx)(f.x, {
                                            size: 14,
                                            children: "Suggested Teams"
                                        })]
                                    }), (0, s.jsx)(m.o, {
                                        color: "var(--ds-gray-900)",
                                        size: 20
                                    })]
                                })]
                            }) : null]
                        })]
                    })
                })
            }

            function eO(e) {
                let {
                    team: t,
                    hideTextOnMobile: r
                } = e, n = (0, S.m)(), {
                    user: i
                } = (0, $.a)(), {
                    name: a,
                    avatar: l
                } = t || i || {}, {
                    slug: m
                } = t || {}, {
                    username: h
                } = i || {}, p = a || m || h, x = `/${m??"dashboard"}`, j = (0, d.useSearchParams)(), b = (null == j ? void 0 : j.get("teamSlug")) || "", _ = (0, c.useMemo)(() => (0, E.Xy)({
                    externalPublicDeployment: n,
                    teamSlug: b,
                    team: t,
                    username: h
                }), [n, b, t, h]);
                return (0, s.jsx)(o(), {
                    className: (0, u.W)(es().scopeLink, {
                        [es().disabled]: n
                    }),
                    href: x,
                    children: (0, s.jsxs)(g.K, {
                        align: "center",
                        direction: "row",
                        children: [(0, s.jsx)(v.qE, {
                            className: es().avatar,
                            hash: n ? void 0 : l,
                            size: 22,
                            teamId: null == t ? void 0 : t.id,
                            title: n ? b : p,
                            username: _
                        }), (0, s.jsx)(f.x, {
                            className: (0, u.W)(es().scopeName, "geist-ellipsis", {
                                [es().hideOnMobile]: r
                            }),
                            weight: 500,
                            children: n ? b : p
                        }), !n && (0, s.jsx)("div", {
                            className: "geist-hide-on-tablet",
                            children: (0, s.jsx)(L, {
                                fallbackToPlan: !0,
                                team: t || void 0,
                                user: i
                            })
                        })]
                    })
                })
            }

            function eT(e) {
                let {
                    side: t = "bottom",
                    children: r,
                    setCreateModalOpen: n,
                    primaryColumn: l,
                    scrollToTop: o = !0,
                    team: u,
                    ...m
                } = e, {
                    user: h
                } = (0, $.a)(), p = (0, A.U)(), g = (0, d.useSearchParams)(), f = null == p ? void 0 : p.teamSlug, [v, j] = (0, c.useState)("teams"), w = f || (null == h ? void 0 : h.username) || "", k = (0, I.nb)(), M = u ? k.findIndex(e => e.id === u.id) + 1 : 0, E = (0, _.Y)({
                    selected: M
                }), O = (0, _.Y)({
                    selected: 0
                }), [T, P] = (0, c.useState)(!1), L = () => {
                    P(!1), E.setInputValue(""), O.setInputValue("")
                };
                O.map;
                let R = (0, N.dD)(),
                    z = (0, S.m)();
                (0, c.useEffect)(() => {
                    let e = () => {
                        P(!0)
                    };
                    return document.addEventListener(y.L, e), () => document.removeEventListener(y.L, e)
                }, []), (0, c.useEffect)(() => {
                    (null == g ? void 0 : g.get(y.L)) === "true" && P(!0)
                }, [g]), (0, c.useEffect)(() => {
                    let e;
                    let {
                        inputValue: t,
                        setInputValue: r,
                        setSelectedIndex: n,
                        selectedIndex: i
                    } = E;
                    return T || (e = setTimeout(() => {
                        t && r(""), i !== M && n(M)
                    }, 150)), () => {
                        e && clearTimeout(e)
                    }
                }, [T, M]), (0, c.useEffect)(() => {
                    let e;
                    let {
                        inputValue: t,
                        setInputValue: r
                    } = O;
                    return T || (e = setTimeout(() => {
                        t && r("")
                    }, 150)), () => {
                        e && clearTimeout(e)
                    }
                }, [T]);
                let W = (0, s.jsx)(eE, {
                        activeSection: v,
                        close: L,
                        commandProps: E,
                        onShowCreateTeam: () => {
                            n()
                        },
                        primary: !R && "team" === l,
                        setActiveSection: j,
                        showCreateTeam: !0,
                        team: u
                    }),
                    D = (0, c.useMemo)(() => {
                        var e;
                        let {
                            filterList: t,
                            list: r
                        } = E, n = t || r.current, {
                            selectedIndex: i
                        } = E, s = (null === (e = n[i]) || void 0 === e ? void 0 : e.value) || [];
                        return s
                    }, [E]),
                    K = D[1],
                    F = (0, c.useMemo)(() => {
                        var e;
                        let t = k.find(e => e.slug === K);
                        return (null == t ? void 0 : null === (e = t.billing) || void 0 === e ? void 0 : e.plan) === "enterprise"
                    }, [k, K]),
                    Z = (0, s.jsx)(eI, {
                        activeSection: v,
                        close: L,
                        commandProps: O,
                        currentScope: w,
                        isSpacesEnabled: F,
                        primary: "project" === l,
                        scrollToTop: o,
                        selectedScope: R ? w : K,
                        setActiveSection: j
                    });
                return (0, c.useEffect)(() => {
                    T && setTimeout(() => {
                        let e = "team" === l ? i.TEAMS : i.PROJECTS,
                            t = document.querySelector(`[itemId=${e}]`);
                        null !== t && t instanceof HTMLInputElement && t.focus()
                    }, 200)
                }, [T, l]), (0, s.jsxs)(a.fC, { ...m,
                    onOpenChange: P,
                    open: T,
                    children: [(0, s.jsxs)(a.ee, {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            width: "100%"
                        },
                        children: [r, z ? null : (0, s.jsx)(a.xz, {
                            asChild: !0,
                            children: (0, s.jsx)(x.z, {
                                "aria-label": "Switch team",
                                className: es().trigger,
                                "data-testid": (0, C.C)("scope-switcher", "toggle"),
                                style: {
                                    marginLeft: 2,
                                    flexShrink: 0,
                                    width: 28,
                                    padding: 0,
                                    backgroundColor: T ? "var(--ds-gray-alpha-200)" : void 0
                                },
                                type: "tertiary",
                                typeName: "button",
                                children: (0, s.jsx)(eP, {})
                            })
                        })]
                    }), R ? (0, s.jsx)(b.d, {
                        height: "80vh",
                        onDismiss: L,
                        show: T,
                        children: (0, s.jsx)("div", {
                            style: {
                                position: "relative"
                            },
                            children: "team" === l ? (0, s.jsx)("div", {
                                children: W
                            }, "teams") : (0, s.jsx)("div", {
                                children: Z
                            }, "projects")
                        })
                    }) : (0, s.jsxs)(a.VY, {
                        align: "start",
                        alignOffset: "team" === l ? -16 : -260,
                        className: es().content,
                        onKeyDown: e => {
                            var t, r;
                            "ArrowRight" === e.key ? null === (t = O.inputRef.current) || void 0 === t || t.focus() : "ArrowLeft" === e.key && (null === (r = E.inputRef.current) || void 0 === r || r.focus())
                        },
                        onOpenAutoFocus: e => e.preventDefault(),
                        side: t,
                        sideOffset: 8,
                        style: {
                            display: "flex",
                            position: "relative"
                        },
                        children: [W, Z]
                    })]
                })
            }

            function eP() {
                return (0, s.jsx)("svg", {
                    "aria-hidden": !0,
                    fill: "none",
                    height: 16,
                    stroke: "var(--ds-gray-900)",
                    strokeWidth: 1.5,
                    viewBox: "0 0 16 24",
                    children: (0, s.jsx)("path", {
                        d: "M13 8.517L8 3 3 8.517M3 15.48l5 5.517 5-5.517"
                    })
                })
            }
        },
        274738: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return f
                }
            });
            var n = r(397458),
                i = r(10709),
                s = r(628987),
                a = r(957717),
                l = r(443427),
                o = r(243801),
                c = r.n(o),
                d = e => {
                    let {
                        size: t = 32
                    } = e;
                    return (0, n.jsxs)("span", {
                        style: {
                            width: t,
                            height: t
                        },
                        className: "jsx-d6531475c3ce2f9e",
                        children: [(0, n.jsx)(i.c, {
                            color: "#fff",
                            size: t - 8,
                            weight: "bold"
                        }), (0, n.jsx)(c(), {
                            id: "d6531475c3ce2f9e",
                            children: "span.jsx-d6531475c3ce2f9e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:-webkit-linear-gradient(left,#57c84f,#53a0ec);background:-moz-linear-gradient(left,#57c84f,#53a0ec);background:-o-linear-gradient(left,#57c84f,#53a0ec);background:linear-gradient(90deg,#57c84f,#53a0ec);-webkit-box-shadow:var(--shadow-small);-moz-box-shadow:var(--shadow-small);box-shadow:var(--shadow-small)}"
                        })]
                    })
                },
                u = r(950429),
                m = r(689587),
                h = r(537460),
                p = r(854635),
                g = r(517659),
                f = function(e) {
                    let {
                        project: t,
                        link: r = !0
                    } = e, s = (0, p.KR)(t), o = (0, m.gG)(t), {
                        loading: c,
                        score: h,
                        highlight: f,
                        disabled: v,
                        scoreName: j,
                        device: b
                    } = x(t);
                    if (!o && !(null == t ? void 0 : t.analytics)) return null;
                    let _ = (0, n.jsx)(l.Z, {
                        showValue: !c,
                        size: "small",
                        value: c || f || !h ? 0 : Number(h)
                    });
                    return (v && (_ = (0, n.jsx)(a.u, {
                        delay: !1,
                        text: "Enable Speed Insights for greater performance insights.",
                        children: (0, n.jsx)(l.Z, {
                            size: "small",
                            value: c || f || !h ? 0 : Number(h),
                            children: (0, n.jsx)(i.c, {
                                color: "var(--accents-3)",
                                size: 18,
                                weight: "bold"
                            })
                        })
                    })), f && (_ = (0, n.jsx)(a.u, {
                        delay: !1,
                        text: "Enable Speed Insights for greater performance insights.",
                        children: (0, n.jsx)(d, {})
                    })), s && r) ? (0, n.jsx)(u.r, {
                        href: `${s}/speed-insights${(0,g.c)({device:b,percentile:j,time:"1d"})}`,
                        style: {
                            display: "flex"
                        },
                        children: _
                    }) : _
                };
            let x = e => {
                var t, r;
                let n = (0, s.useSearchParams)(),
                    {
                        data: i
                    } = (0, h.Z)(null == e ? void 0 : e.id, {
                        once: !0,
                        teamId: null == e ? void 0 : e.accountId
                    }, {
                        revalidateOnFocus: !1,
                        revalidateOnReconnect: !1
                    }),
                    a = !(0, m.LZ)(e),
                    l = null == i ? void 0 : null === (t = i.data) || void 0 === t ? void 0 : t.devices,
                    o = l ? l.mobile ? "mobile" : l.desktop ? "desktop" : "tablet" : null,
                    c = o ? l[o] : null,
                    d = null == i ? void 0 : null === (r = i.data) || void 0 === r ? void 0 : r.p_groups[0],
                    u = null == c ? void 0 : c.p_scores[0],
                    p = !i || i.pending,
                    g = !p && !!(null == n ? void 0 : n.get("analytics")) && !u;
                return {
                    loading: p,
                    score: u,
                    disabled: a,
                    highlight: g,
                    device: o,
                    scoreName: d
                }
            }
        },
        443427: function(e, t, r) {
            "use strict";
            r.d(t, {
                L: function() {
                    return o
                }
            });
            var n = r(397458),
                i = r(117953),
                s = r(171761),
                a = r.n(s);
            let l = {
                    0: "var(--wv-red)",
                    50: "var(--wv-orange)",
                    90: "var(--wv-green)"
                },
                o = e => {
                    if (!e) return;
                    let t = Object.keys(l),
                        r = t.filter(t => e >= Number(t)).pop();
                    return r ? l[r] : "var(--geist-foreground)"
                };
            t.Z = e => {
                let {
                    children: t,
                    ...r
                } = e;
                return (0, n.jsx)(i.a, {
                    colors: l,
                    ...r,
                    children: t ? (0, n.jsx)("span", {
                        className: a().score,
                        children: t
                    }) : null
                })
            }
        },
        252547: function(e, t, r) {
            "use strict";
            var n = r(397458),
                i = r(676166),
                s = r.n(i);
            t.Z = e => {
                let {
                    children: t
                } = e;
                return (0, n.jsx)("span", {
                    className: s().error,
                    "data-geist-fieldset-error": "",
                    "data-version": "v1",
                    children: t
                })
            }
        },
        218673: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Content: function() {
                    return h
                },
                ErrorText: function() {
                    return k.Z
                },
                Fieldset: function() {
                    return u
                },
                Footer: function() {
                    return v
                },
                Subtitle: function() {
                    return b
                },
                Tabs: function() {
                    return N
                },
                Title: function() {
                    return w
                },
                WarningText: function() {
                    return C
                }
            });
            var n = r(397458),
                i = r(14517),
                s = r(869480),
                a = r.n(s),
                l = r(317892),
                o = r(676166),
                c = r.n(o);
            let d = e => {
                let {
                    className: t,
                    disabled: r,
                    children: s,
                    hasShadow: a,
                    borderlessTabs: o,
                    type: d,
                    ...u
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, i.W)(c().fieldset, t, {
                        [c().borderless]: o,
                        [c().shadow]: a,
                        [c().errorBorder]: "error" === d,
                        [c().warningBorder]: "warning" === d
                    }),
                    ...u,
                    "data-geist-fieldset": "",
                    "data-version": "v1",
                    children: (0, n.jsx)(l.d.Provider, {
                        value: !!r,
                        children: s
                    })
                })
            };
            d.propTypes = {
                disabled: a().bool
            };
            var u = d,
                m = r(226307),
                h = e => {
                    let {
                        disabled: t,
                        children: r,
                        noPadding: s,
                        className: a
                    } = e, o = (0, l.B)(t);
                    return (0, n.jsx)(l.d.Provider, {
                        value: o,
                        children: (0, n.jsxs)("div", {
                            className: (0, i.W)(c().content, a, {
                                [c().disabled]: o,
                                "geist-disabled": o,
                                [c().full]: s
                            }),
                            "data-geist-fieldset-content": "",
                            children: [(0, n.jsx)(m.Z, {}), r]
                        })
                    })
                },
                p = r(652983),
                g = r(791688);
            let f = e => {
                    let {
                        disabled: t,
                        children: r,
                        className: s,
                        highlight: a
                    } = e, o = (0, l.B)(t);
                    return (0, n.jsx)(l.d.Provider, {
                        value: o,
                        children: (0, n.jsxs)("footer", {
                            className: (0, i.W)(c().footer, s, {
                                [c().disabled]: o,
                                [c().highlight]: a,
                                "geist-disabled": o
                            }),
                            "data-geist-fieldset-footer": "",
                            "data-testid": (0, g.C)("geist", "fieldset", "footer", "status"),
                            "data-version": "v1",
                            children: [(0, n.jsx)(m.Z, {}), r]
                        })
                    })
                },
                x = e => {
                    let {
                        children: t
                    } = e;
                    return (0, n.jsx)("div", {
                        "data-geist-fieldset-footer-action": "",
                        children: t
                    })
                };
            f.Status = e => {
                let {
                    children: t,
                    disabled: r
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, i.W)(c().status, {
                        [c().disabled]: r
                    }),
                    "data-geist-fieldset-footer-status": "",
                    children: t
                })
            }, f.Actions = e => {
                let {
                    children: t,
                    className: r
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, i.W)(c().actions, r),
                    "data-geist-fieldset-footer-actions": "",
                    children: p.Children.map(t, (e, t) => e ? (0, n.jsx)(x, {
                        children: e
                    }, t) : null)
                })
            };
            var v = f,
                j = r(852049),
                b = e => {
                    let {
                        children: t
                    } = e, r = (0, l.B)();
                    return (0, n.jsx)(j.ZP, {
                        className: r ? "disabled" : "",
                        "data-testid": (0, g.C)("geist", "fieldset", "subtitle"),
                        preset: "body-2",
                        style: {
                            margin: "var(--geist-gap-half) 0"
                        },
                        children: t
                    })
                },
                _ = r(313003),
                y = r.n(_),
                w = e => {
                    let {
                        id: t,
                        children: r
                    } = e;
                    return (0, n.jsx)(j.ZP, {
                        className: (0, i.W)(c().title),
                        h4: !0,
                        id: t ? y()(t) : void 0,
                        noMargin: !0,
                        children: r
                    })
                },
                k = r(252547),
                C = e => {
                    let {
                        children: t
                    } = e;
                    return (0, n.jsx)("span", {
                        className: c().warning,
                        "data-geist-fieldset-warning": "",
                        "data-version": "v1",
                        children: t
                    })
                },
                S = r(30569),
                N = e => {
                    let {
                        children: t,
                        tabs: r,
                        disabled: s,
                        selected: a,
                        defaultSelected: l = 0,
                        onChange: o,
                        borderless: d
                    } = e, [u, m] = (0, p.useState)(l), h = a || u;
                    return (0, p.useEffect)(() => {
                        h !== l && m(l)
                    }, [l]), (0, n.jsxs)("div", {
                        className: (0, i.W)(c().tabs, {
                            [c().disabled]: s,
                            [c().borderless]: d
                        }),
                        "data-geist-fieldset-tabs": "",
                        children: [(0, n.jsx)("div", {
                            className: c().tabsRow,
                            children: (0, n.jsx)(S.m, {
                                selected: a ? r[a] : r[u],
                                setSelected: e => {
                                    if (s) return;
                                    let t = r.findIndex(t => t === e);
                                    void 0 === a && m(t), null == o || o(t)
                                },
                                style: {
                                    boxShadow: "none"
                                },
                                tabs: r.map(e => ({
                                    title: e,
                                    value: e
                                }))
                            })
                        }), t ? p.Children.map(t, (e, t) => t === h ? e : null) : null]
                    })
                }
        },
        774516: function(e, t, r) {
            "use strict";
            r.d(t, {
                m: function() {
                    return l
                }
            });
            var n = r(652983),
                i = r(71299),
                s = r(270430),
                a = r(857994);
            let l = () => {
                let {
                    data: e,
                    isLoggedOut: t
                } = (0, i.a)(), {
                    isTeam: r,
                    isReady: l
                } = (0, s.t7)(), {
                    teamSlug: o
                } = (0, a.U)() ? ? {}, c = (0, n.useMemo)(() => {
                    var t;
                    return (null == e ? void 0 : null === (t = e.user) || void 0 === t ? void 0 : t.username) !== o
                }, [o, e]);
                return !!o && !!e && !r && (!!t || !!l) && (t || c)
            }
        },
        167593: function(e, t, r) {
            "use strict";
            r.d(t, {
                E: function() {
                    return s
                }
            });
            var n = r(879756),
                i = r.n(n);
            async function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
                return i()(e, {
                    randomize: !1,
                    factor: 1,
                    minTimeout: t >= 5 ? 1e3 : 250,
                    maxTimeout: t >= 5 ? 1001 : 251,
                    retries: t
                })
            }
        },
        216998: function(e, t, r) {
            "use strict";
            r.d(t, {
                W: function() {
                    return s
                }
            });
            var n = r(411703),
                i = r(573102);
            let s = e => {
                    let {
                        pathname: t,
                        searchParams: r,
                        team: n,
                        user: s,
                        project: a
                    } = e, m = (null == n ? void 0 : n.slug) || (null == s ? void 0 : s.username), h = function(e) {
                        let {
                            pathname: t,
                            team: r,
                            user: n,
                            searchParams: i,
                            project: s
                        } = e;
                        if (!t) return "/";
                        let a = null == r ? void 0 : r.slug,
                            m = (null == r ? void 0 : r.slug) || (null == n ? void 0 : n.username),
                            h = null == s ? void 0 : s.name,
                            p = i.get("teamSlug"),
                            g = i.get("project"),
                            f = function(e) {
                                let t = {};
                                for (let [r, n] of e) t[r] = n;
                                return t
                            }(i),
                            x = t.split("/").filter(Boolean),
                            v = x.filter(e => !/\[.*\]/.test(e)),
                            j = v[0],
                            b = v[v.length - 1],
                            _ = {
                                pathname: t,
                                page: b,
                                query: f,
                                teamSlug: null == r ? void 0 : r.slug
                            };
                        if (p && g && h && m && t.includes(g)) {
                            let e = t.replace(p, m).replace(g, h);
                            return e
                        }
                        if ("/dashboard" === t || "/" === t) return `/${m}`;
                        if ("help" === j) return a ? `/help?teamSlug=${a}` : "/help/";
                        if ("new" === j) {
                            if ("import" === b) return (delete f["create-team-collapsed"], a) ? u({
                                pathname: `/new/${a&&a!==(null==n?void 0:n.username)?`${a}/`:""}import`,
                                query: { ...f
                                }
                            }) : (delete f.teamSlug, u({
                                pathname: "/new/import",
                                query: { ...f
                                }
                            }));
                            if ("repo" === b) return a ? u({
                                pathname: `/new/${a&&a!==(null==n?void 0:n.username)?`${a}/`:""}import/repo`,
                                query: { ...f
                                }
                            }) : (delete f.teamSlug, u({
                                pathname: "/new/import/repo",
                                query: { ...f
                                }
                            }));
                            if ("clone" === b) return (m !== f["create-team-collapsed"] && delete f["create-team-collapsed"], a) ? u({
                                pathname: `/new/${m}/clone`,
                                query: { ...f
                                }
                            }) : (delete f.teamSlug, u({
                                pathname: "/new/clone",
                                query: { ...f
                                }
                            }));
                            if ("third-party" === b) return u({
                                pathname: `/new/${m}/git/third-party`
                            });
                            else if (x.includes("templates")) {
                                let e = [...x],
                                    r = p && t.includes(p);
                                return e.splice(1, r ? 1 : 0, m || ""), u({
                                    pathname: `/${e.join("/")}`
                                })
                            }
                            return u({
                                pathname: `/new/${m}`
                            })
                        }
                        if ("dashboard" === j) return p && t.startsWith(`/dashboard/${p}/integrations`) || t.startsWith("/dashboard/integrations") ? "console" === b || "create" === b ? a ? `/dashboard/${a}/integrations/${b}` : `/dashboard/integrations/${b}` : a ? `/dashboard/${a}/integrations` : "/dashboard/integrations" : "domains" === b ? `/dashboard/${m}/domains` : p && t.startsWith(`/dashboard/${p}/stores`) || t.startsWith("/dashboard/stores") ? a ? `/dashboard/${a}/stores` : "/dashboard/stores" : t.endsWith("/domains/[domain]") || f.domain ? a ? `/dashboard/${a}/domains` : "/dashboard/domains" : t.endsWith("/monitoring/[chart]") || f.chart ? a ? `/dashboard/${a}/monitoring` : "/dashboard/monitoring" : p && m && t.includes(`/${p}`) ? t.replace(`/${p}`, `/${m}`) : t.replace(b, m ? `${m}/${b}` : b);
                        if (p && t.startsWith(`/teams/${p}/support/cases`) || t.startsWith("/support/cases")) {
                            let e = t.split("/support/cases")[1] || "";
                            return (e.startsWith("/[case-id]") && (e = ""), r) ? `/teams/${r.slug}/support/cases${e}` : `/support/cases${e}`
                        }
                        return p && g && t.startsWith(`/${p}/${g}`) ? `/${m}` : "domains" === b ? a ? o(_) : l(_) : x.includes("account") ? a ? d(_) : c() : x.includes("settings") ? a ? d(_, !0) : c() : `/${m}`
                    }({
                        pathname: t,
                        searchParams: r,
                        team: n,
                        user: s,
                        project: a
                    });
                    return (0, i.fz)(n) ? u({
                        pathname: `/login/scope/${m}`,
                        query: {
                            missingScope: "1",
                            next: h
                        }
                    }) : h
                },
                a = e => ({ ...e,
                    teamSlug: void 0
                }),
                l = e => {
                    let {
                        query: t
                    } = e;
                    return u({
                        pathname: "/domains",
                        query: a(t)
                    })
                },
                o = e => {
                    let {
                        query: t,
                        teamSlug: r
                    } = e;
                    return u({
                        pathname: "/domains",
                        query: { ...t,
                            teamSlug: r
                        }
                    })
                },
                c = () => "/account",
                d = (e, t) => {
                    let {
                        page: r,
                        teamSlug: n
                    } = e, i = t && "settings" !== r ? `/${r}` : "";
                    return `/teams/${n}/settings${i}`
                };

            function u(e) {
                return (0, n.format)(e)
            }
        },
        134922: function(e, t, r) {
            "use strict";
            r.d(t, {
                S: function() {
                    return s
                }
            });
            let n = encodeURIComponent;

            function i(e) {
                return "string" == typeof e ? e : void 0
            }

            function s(e) {
                if (!e) return null;
                let {
                    meta: t
                } = e;
                if (null == t ? void 0 : t.githubDeployment) {
                    let e = `https://github.com/${n(t.githubCommitOrg)}/${n(t.githubCommitRepo)}/commit/${t.githubCommitSha}`,
                        r = `https://github.com/${n(t.githubCommitOrg)}/${n(t.githubCommitRepo)}/tree/${n(t.githubCommitRef)}`,
                        s = t.githubPrId ? `https://github.com/${n(t.githubOrg)}/${n(t.githubRepo)}/pull/${t.githubPrId}` : void 0;
                    return {
                        type: "github",
                        commitRef: String(t.githubCommitRef),
                        commitSha: String(t.githubCommitSha),
                        commitAuthorName: String(t.githubCommitAuthorName),
                        commitAuthorLogin: i(t.githubCommitAuthorLogin),
                        commitMessage: String(t.githubCommitMessage),
                        repoName: String(t.githubCommitRepo),
                        repoNamespace: String(t.githubCommitOrg),
                        commitUrl: e,
                        refUrl: r,
                        viaFork: t.githubOrg !== t.githubCommitOrg,
                        prId: t.githubPrId ? Number(t.githubPrId) : void 0,
                        prUrl: s,
                        gitDirty: String(t.gitDirty)
                    }
                }
                if (null == t ? void 0 : t.gitlabDeployment) {
                    let e = `https://gitlab.com/${t.gitlabProjectPath}/tree/${n(t.gitlabCommitRef)}`,
                        r = `https://gitlab.com/${t.gitlabProjectPath}/commit/${t.gitlabCommitSha}`;
                    return {
                        type: "gitlab",
                        commitRef: String(t.gitlabCommitRef),
                        commitSha: String(t.gitlabCommitSha),
                        commitAuthorName: String(t.gitlabCommitAuthorName),
                        commitAuthorLogin: i(t.gitlabCommitAuthorLogin),
                        commitMessage: String(t.gitlabCommitMessage),
                        repoName: String(t.gitlabProjectName),
                        repoNamespace: String(t.gitlabProjectNamespace),
                        commitUrl: r,
                        refUrl: e
                    }
                }
                if (null == t ? void 0 : t.bitbucketDeployment) {
                    let e = `https://bitbucket.org/${t.bitbucketRepoOwner}/${t.bitbucketRepoSlug}/branch/${n(t.bitbucketCommitRef)}`,
                        r = `https://bitbucket.org/${t.bitbucketRepoOwner}/${t.bitbucketRepoSlug}/commits/${t.bitbucketCommitSha}`;
                    return {
                        type: "bitbucket",
                        commitRef: String(t.bitbucketCommitRef),
                        commitSha: String(t.bitbucketCommitSha),
                        commitAuthorName: i(t.bitbucketCommitAuthorName),
                        commitAuthorLogin: i(t.bitbucketCommitAuthorLogin),
                        commitMessage: String(t.bitbucketCommitMessage),
                        repoName: String(t.bitbucketRepoSlug),
                        repoNamespace: String(t.bitbucketRepoOwner),
                        commitUrl: r,
                        refUrl: e
                    }
                }
                return null
            }
        },
        68751: function(e, t, r) {
            "use strict";
            r.d(t, {
                _: function() {
                    return l
                }
            });
            var n, i = r(403873);
            let s = (e, t) => function() {
                for (var r = arguments.length, n = Array(r), s = 0; s < r; s++) n[s] = arguments[s];
                e(...n).catch(e => t((0, i.SC)(e)))
            };
            var a = r(803972);
            let l = (n = e => {
                (0, a.captureError)(e)
            }, (e, t) => s(e, t ? ? n))
        },
        689587: function(e, t, r) {
            "use strict";
            r.d(t, {
                LZ: function() {
                    return i
                },
                Ru: function() {
                    return l
                },
                gG: function() {
                    return a
                },
                hs: function() {
                    return s
                }
            });
            var n = r(885756);

            function i(e) {
                var t, r;
                return (null == e ? void 0 : null === (t = e.analytics) || void 0 === t ? void 0 : t.canceledAt) ? Date.now() < e.analytics.canceledAt : null != e && null !== (r = e.analytics) && void 0 !== r && !!r.enabledAt && e.analytics.enabledAt > e.analytics.disabledAt
            }
            let s = e => {
                    var t;
                    return (null == e ? void 0 : null === (t = e.analytics) || void 0 === t ? void 0 : t.canceledAt) ? (0, n.Z)(new Date(e.analytics.canceledAt), new Date) : null
                },
                a = e => {
                    if (null == e ? void 0 : e.framework) return !!["nextjs", "blitzjs", "nuxtjs", "gatsby"].includes(e.framework)
                },
                l = (e, t) => {
                    var r;
                    let n = t ? ["pro", "enterprise"] : ["hobby", "pro", "enterprise"],
                        i = n.includes((null == e ? void 0 : null === (r = e.billing) || void 0 === r ? void 0 : r.plan) || "");
                    return {
                        isValid: i,
                        validPlans: n
                    }
                }
        },
        537460: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return u
                }
            });
            var n = r(652983),
                i = r(353729),
                s = r(121123),
                a = r(167593),
                l = r(58363),
                o = r(517659),
                c = r(270430),
                d = r(71299);

            function u(e) {
                let {
                    days: t = 1,
                    intervalMinutes: r = 1440,
                    once: u = !1,
                    teamId: m
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, h = arguments.length > 2 ? arguments[2] : void 0, {
                    isReady: p,
                    team: g
                } = (0, c.t7)(), {
                    user: f
                } = (0, d.a)(), [x, v] = (0, n.useState)(3333), j = {
                    days: t,
                    intervalMinutes: r
                };
                return (0, i.ZP)(() => e && p && f ? `${s.al}/overview/${encodeURIComponent(e)}${(0,o.c)({...j,slug:g?g.slug:f.username})}` : "", e => {
                    async function t() {
                        if ((null == g ? void 0 : g.id) && m && m !== g.id) return {
                            empty: !0
                        };
                        let t = await (0, l.I)(e, {
                            throwOnHTTPError: !0,
                            returnStatus: !0
                        });
                        return null === t || 204 === t.status ? (v(0), {
                            empty: !0
                        }) : (u && 200 === t.status && v(0), t.body)
                    }
                    return (0, a.E)(() => t(), 6)
                }, { ...h,
                    refreshInterval: x
                })
            }
        },
        426994: function(e, t, r) {
            "use strict";
            var n = r(353729),
                i = r(58363),
                s = r(121123);
            t.Z = e => {
                var t;
                let r = (null == e ? void 0 : e.length) ? `${s.O5}?types=${e.join(",")}` : s.O5,
                    a = (0, n.ZP)(r, e => (0, i.I)(e, {
                        throwOnHTTPError: !0
                    }));
                return Object.assign(a, {
                    teams: (null === (t = a.data) || void 0 === t ? void 0 : t.teams) ? ? []
                })
            }
        },
        117953: function(e, t, r) {
            "use strict";
            r.d(t, {
                a: function() {
                    return m
                }
            });
            var n = r(397458),
                i = r(652983),
                s = r(14517),
                a = r(121446),
                l = r(453452),
                o = r.n(l);
            let c = {
                    0: "var(--ds-red-800)",
                    33: "var(--ds-amber-700)",
                    66: "var(--ds-green-700)"
                },
                d = {
                    tiny: 20,
                    small: 32,
                    medium: 64,
                    large: 128
                },
                u = {
                    tiny: {
                        size: 10,
                        weight: 400
                    },
                    small: {
                        size: 12,
                        weight: 400
                    },
                    medium: {
                        size: 18,
                        weight: 400
                    },
                    large: {
                        size: 32,
                        weight: 600
                    }
                };

            function m(e) {
                let {
                    deprecated_backgroundColor: t,
                    colors: r = c,
                    value: l,
                    placeholder: m,
                    className: h,
                    style: p,
                    size: g,
                    deprecatedSize: f,
                    children: x,
                    showValue: v = !1,
                    ...j
                } = e, b = void 0 !== f ? f : d[g], _ = u[g], y = (0, i.useMemo)(() => {
                    let e = Object.keys(r);
                    if (0 === e.length) return;
                    let t = e.filter(e => l >= Number(e)).pop();
                    return t ? r[t] : "var(--geist-foreground)"
                }, [r, l]);
                return (0, n.jsxs)("div", {
                    className: (0, s.W)(o().circle, h, {
                        [o().animate]: !m
                    }),
                    "data-geist-progress-circle": "",
                    "data-version": "v1",
                    style: { ...p,
                        "--value": l / 100 * 332
                    },
                    ...j,
                    children: [(0, n.jsxs)("svg", {
                        fill: "none",
                        height: b,
                        strokeWidth: "2",
                        viewBox: "0 0 120 120",
                        width: b,
                        children: [(0, n.jsx)("circle", {
                            cx: "60",
                            cy: "60",
                            "data-geist-progress-circle-bg": "",
                            r: "53",
                            stroke: t || "var(--accents-2)",
                            strokeDashoffset: "0",
                            strokeWidth: 12
                        }), l > 0 && (0, n.jsx)("circle", {
                            className: o().arc,
                            cx: "60",
                            cy: "60",
                            "data-geist-progress-circle-fg": "",
                            r: "53",
                            stroke: y || "transparent",
                            strokeDasharray: "0 340",
                            strokeDashoffset: "0",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 12,
                            transform: "rotate(-90 60 60)"
                        })]
                    }), x || v ? (0, n.jsx)("div", {
                        className: o().content,
                        children: x || (0, n.jsx)(a.x, {
                            color: "gray-1000",
                            size: _.size,
                            weight: _.weight,
                            children: l
                        })
                    }) : null]
                })
            }
        },
        589293: function(e, t, r) {
            "use strict";
            r.d(t, {
                u: function() {
                    return i
                }
            });
            var n = r(361961);
            let i = (0, n.H)('<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" fill="var(--geist-fill)"/><path d="M12 9v4" stroke="var(--geist-stroke)"/><path d="M12 17h.01" stroke="var(--geist-stroke)"/>', !0)
        },
        691199: function(e, t, r) {
            "use strict";
            r.d(t, {
                i: function() {
                    return i
                }
            });
            var n = r(361961);
            let i = (0, n.H)('<path d="M16.88 3.549L7.12 20.451"/>', !1, {
                color: "var(--accents-2)"
            })
        },
        993834: function(e, t, r) {
            "use strict";
            r.d(t, {
                U: function() {
                    return i
                }
            });
            var n = r(361961);
            let i = (0, n.H)('<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>')
        },
        370747: function(e, t, r) {
            "use strict";
            r.d(t, {
                Q: function() {
                    return i
                }
            });
            var n = r(361961);
            let i = (0, n.H)('<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>')
        },
        305795: function(e) {
            e.exports = {
                container: "space-avatar_container__XDN_M",
                iconBackground: "space-avatar_iconBackground__chneu",
                gitIconContainer: "space-avatar_gitIconContainer__DhEQk",
                singleIconContainer: "space-avatar_singleIconContainer__r1goI"
            }
        },
        590885: function(e) {
            e.exports = {
                breadcrumbs: "breadcrumb_breadcrumbs__f_HV2",
                item: "breadcrumb_item__Vfw9L",
                fixed: "breadcrumb_fixed__QiTiM",
                bold: "breadcrumb_bold__ZqBDJ",
                divider: "breadcrumb_divider__AR8KO",
                user: "breadcrumb_user__2KvXc",
                avatar: "breadcrumb_avatar__iy951",
                disabled: "breadcrumb_disabled__wMjCP",
                name: "breadcrumb_name__KTRqD",
                userWrapper: "breadcrumb_userWrapper__km1w9",
                submenu: "breadcrumb_submenu__G9vQI"
            }
        },
        596647: function(e) {
            e.exports = {
                listWrapper: "command_listWrapper__Z0CYA",
                button: "command_button__GEW7O",
                disabled: "command_disabled__KnRcs",
                hidebutton: "command_hidebutton__Jji6_"
            }
        },
        776912: function(e) {
            e.exports = {
                gitInfo: "styles_gitInfo__SZNNj",
                gitNote: "styles_gitNote__Ze6So",
                projectCard: "styles_projectCard__eGrlb",
                projectCardWrapper: "styles_projectCardWrapper__vds4q",
                projectCardDetails: "styles_projectCardDetails__Fm3po",
                minWidth0: "styles_minWidth0__gVCVc",
                maxWidth100: "styles_maxWidth100__KxVhj",
                branch: "styles_branch__uOEEI",
                favicon: "styles_favicon__wX5Iz",
                visitButton: "styles_visitButton__RSHut",
                stale: "styles_stale__V3sb9"
            }
        },
        716502: function(e) {
            e.exports = {
                nav: "dashboard_nav__FUaTW",
                fullWidthLayout: "dashboard_fullWidthLayout__etZ48",
                logo: "dashboard_logo__176oj",
                scope: "dashboard_scope__NVzDm",
                links: "dashboard_links__COdjt",
                breadcrumb: "dashboard_breadcrumb__xfGnM",
                disabled: "dashboard_disabled__DDj58",
                hideOnMobile: "dashboard_hideOnMobile__xNIvt"
            }
        },
        978379: function(e) {
            e.exports = {
                modalTitleBody: "multi-switcher-confirm-modal_modalTitleBody__glIp4"
            }
        },
        19590: function(e) {
            e.exports = {
                center: "permissions-modal_center__P6g_U",
                fadeIn: "permissions-modal_fadeIn__heR7v",
                container: "permissions-modal_container__L7j_M",
                fieldset: "permissions-modal_fieldset__Lbwj5",
                footer: "permissions-modal_footer__YODnl",
                footerActions: "permissions-modal_footerActions__zB1iy",
                gotolink: "permissions-modal_gotolink__QrWDr",
                learn: "permissions-modal_learn__CSwl6"
            }
        },
        681616: function(e) {
            e.exports = {
                command: "multi-switcher_command__bJ3ou",
                focused: "multi-switcher_focused__BQB_7",
                primary: "multi-switcher_primary__fMyI1",
                "command-overlay": "multi-switcher_command-overlay__AwiBo",
                hideOutline: "multi-switcher_hideOutline__CJhhx",
                content: "multi-switcher_content__DyMLq",
                open: "multi-switcher_open__IKgyg",
                itemWrapper: "multi-switcher_itemWrapper__ddlCp",
                projectWrapper: "multi-switcher_projectWrapper__spMiG",
                crumb: "multi-switcher_crumb__C8L_j",
                name: "multi-switcher_name__bBBS0",
                showAllBadges: "multi-switcher_showAllBadges___FYPw",
                close: "multi-switcher_close__40CAn",
                suggestedTeams: "multi-switcher_suggestedTeams__cW_mO",
                suggestedTeamsSeparatorContainer: "multi-switcher_suggestedTeamsSeparatorContainer__0Gflp",
                suggestedTeamsSeparator: "multi-switcher_suggestedTeamsSeparator__KEIdU",
                "hover-content": "multi-switcher_hover-content__vHxm2",
                "delayed-pointer-events": "multi-switcher_delayed-pointer-events__7cwC3",
                teamItem: "multi-switcher_teamItem__uwMiT",
                hover: "multi-switcher_hover__fAi1A",
                input: "multi-switcher_input__DqTcf",
                scopeName: "multi-switcher_scopeName__J018O",
                scopeLink: "multi-switcher_scopeLink__D2XL_",
                avatar: "multi-switcher_avatar__cT4Oh",
                disabled: "multi-switcher_disabled__NfyHi",
                "fav-button": "multi-switcher_fav-button__20VHJ",
                empty: "multi-switcher_empty__4eVqN",
                list: "multi-switcher_list__pjAbT",
                infoCard: "multi-switcher_infoCard__HOMI6",
                protectedProject: "multi-switcher_protectedProject__dDPA2",
                kbd: "multi-switcher_kbd__nAUke",
                trigger: "multi-switcher_trigger__Oiaoc",
                showOnMobile: "multi-switcher_showOnMobile__yxc78",
                hideOnMobile: "multi-switcher_hideOnMobile__bJKQ2"
            }
        },
        171761: function(e) {
            e.exports = {
                score: "speed-insights-circle_score__R8yal"
            }
        },
        676166: function(e) {
            e.exports = {
                fieldset: "fieldset_fieldset__hOiKR",
                shadow: "fieldset_shadow__DCy6w",
                borderless: "fieldset_borderless__8yt9r",
                tabsRow: "fieldset_tabsRow__YaKAa",
                content: "fieldset_content___pFQ9",
                errorBorder: "fieldset_errorBorder__vpSIG",
                footer: "fieldset_footer__67ze7",
                warningBorder: "fieldset_warningBorder__71S_O",
                full: "fieldset_full__lulp_",
                disabled: "fieldset_disabled__S3z7z",
                highlight: "fieldset_highlight__JXX09",
                status: "fieldset_status__lKMRr",
                actions: "fieldset_actions__VzV_y",
                action: "fieldset_action__p0bnI",
                title: "fieldset_title__dQFLo",
                error: "fieldset_error__Ff9Tc",
                warning: "fieldset_warning__1vAFU"
            }
        },
        3793: function(e) {
            e.exports = {
                block: "nested-link-block_block__JdHXp"
            }
        },
        453452: function(e) {
            e.exports = {
                circle: "gauge_circle__N47Fa",
                content: "gauge_content__6tLsK",
                animate: "gauge_animate__yiaIw",
                arc: "gauge_arc__UGu7u",
                fadeIn: "gauge_fadeIn__CZCgm"
            }
        }
    }
]);