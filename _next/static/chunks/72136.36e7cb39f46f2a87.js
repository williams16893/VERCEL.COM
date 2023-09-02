(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [72136], {
        946692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ta
                }
            });
            var r = n(397458),
                i = n(652983),
                s = n(208323),
                o = n(643263),
                a = n(132950),
                l = n(93325),
                c = n(684874),
                d = n(179429),
                u = n(210699),
                h = n(922058);
            let g = i.createContext({}),
                m = () => i.useContext(g),
                f = i.createContext({}),
                p = () => i.useContext(f);
            var v = n(313003),
                x = n.n(v),
                j = n(628987),
                k = n(63522),
                y = n(969581),
                b = n(166111),
                w = n(426476),
                S = n(71299),
                C = n(270430),
                I = n(41296),
                D = n(216998),
                T = n(68751),
                P = n(791688),
                O = n(368919),
                M = n(48918),
                _ = n(940416),
                E = n(272525),
                L = n(14517),
                N = n(709033),
                F = n(282966),
                H = n(394603),
                $ = n(265101),
                R = n(375201),
                A = n.n(R);
            let V = e => "charCode" in e;
            var G = n(301850),
                Z = Object.assign(function(e) {
                    let {
                        open: t,
                        activePage: n,
                        resetPages: s,
                        keymap: o,
                        onDismiss: a,
                        onSelect: c,
                        ...d
                    } = e, {
                        contentRef: u,
                        setInputValue: h,
                        setSelectedIndex: m,
                        inputRef: f
                    } = d, {
                        mounted: p,
                        rendered: v
                    } = (0, H.Z)(t, {
                        exitDelay: 200
                    }), x = i.useRef(null);
                    return (0, F.Z)(() => {
                        if (u.current) {
                            var e;
                            u.current.style.transform = "translate(-50%, 0) scale(0.99) ", u.current.style.transition = "transform 0.1s ease", setTimeout(() => {
                                u.current && (u.current.style.transform = "", u.current.style.transition = "")
                            }, 100), h(""), m(0), null === (e = f.current) || void 0 === e || e.focus()
                        }
                    }, [n]), i.useEffect(() => (0, $.Z)(window, o, {
                        ignoreFocus: !0
                    }), [o]), i.useEffect(() => {
                        if (!v || !u.current) return;
                        let e = Object.fromEntries(Object.entries(o).filter(e => {
                            let [t] = e;
                            return t.includes("+")
                        }));
                        return (0, $.Z)(u.current, e)
                    }, [v, u, o]), i.useEffect(() => {
                        p || (h(""), m(0), s())
                    }, [p]), (0, r.jsx)("div", {
                        ref: x,
                        style: {
                            zIndex: 1001,
                            position: "relative"
                        },
                        children: (0, r.jsx)(N.fC, {
                            onOpenChange: a,
                            open: p,
                            children: (0, r.jsxs)(N.h_, {
                                container: x.current,
                                children: [(0, r.jsx)(N.aV, {
                                    className: A().overlay,
                                    style: {
                                        opacity: v ? 1 : 0
                                    }
                                }), (0, r.jsxs)(N.VY, {
                                    "aria-describedby": void 0,
                                    className: (0, L.W)(A().content, {
                                        [A().rendered]: v
                                    }),
                                    "data-cmdk-root": "",
                                    "data-error": !1,
                                    "data-testid": (0, P.C)("cmdk", "root"),
                                    onOpenAutoFocus: e => e.preventDefault(),
                                    ref: u,
                                    children: [(0, r.jsx)(N.Dx, {
                                        style: {
                                            margin: 0
                                        },
                                        title: "Command Menu"
                                    }), (0, r.jsx)(g.Provider, {
                                        value: {
                                            keymap: o,
                                            onDismiss: a,
                                            onSelect: c
                                        },
                                        children: (0, r.jsx)(l.m, { ...d
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                }, {
                    Item: function(e) {
                        let {
                            children: t,
                            keybind: n,
                            closeOnCallback: i = !0,
                            prefix: s,
                            suffix: o,
                            callback: d,
                            ...u
                        } = e, {
                            keymap: h,
                            onDismiss: g,
                            onSelect: f
                        } = m(), p = !!u.isDocs;
                        return (0, r.jsxs)(l.m.Item, { ...u,
                            callback: function(e) {
                                null == d || d(e), n && V(e) && h[n](e), i && g(!0);
                                let r = Array.isArray(u.value) ? u.value[0] || "" : u.value ? u.value : "string" == typeof t ? t : "";
                                null == f || f({
                                    value: r,
                                    closeOnCallback: i,
                                    children: t,
                                    prefix: s,
                                    suffix: o,
                                    keybind: n,
                                    callback: d,
                                    isStatic: u.isStatic
                                }), c.co.track(c.s6.COMMAND_MENU_TRIGGERED_COMMAND, {
                                    command: r
                                })
                            },
                            className: p ? (0, L.W)(A().item, A().itemDocs) : A().item,
                            children: [(0, r.jsxs)(a.K, {
                                align: "center",
                                direction: "row",
                                flex: "1",
                                children: [s ? (0, r.jsx)("span", {
                                    className: A().prefix,
                                    children: s
                                }) : null, (0, r.jsx)("span", {
                                    children: t
                                }), o ? (0, r.jsx)("span", {
                                    className: A().suffix,
                                    children: o
                                }) : null]
                            }), n ? (0, r.jsx)(a.K, {
                                direction: "row",
                                gap: 2,
                                children: n.replace("Shift", "⇧").replace("Control", "Ctrl").split("+").map(e => (0, r.jsx)("kbd", {
                                    children: e
                                }, e))
                            }) : null]
                        })
                    },
                    Input: function(e) {
                        let {
                            onKeyDown: t,
                            ...n
                        } = e, {
                            inputRef: s
                        } = (0, G.DX)(), o = i.useRef(!0);
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(l.m.Input, { ...n,
                                className: A().input,
                                onKeyDown: function(e) {
                                    var n;
                                    ("Escape" === e.key || "Enter" === e.key) && (null === (n = s.current) || void 0 === n || n.blur()), null == t || t(e), o.current && (c.co.track(c.s6.COMMAND_MENU_STARTED_TYPING), o.current = !1)
                                },
                                showClear: !!n.showClear && n.showClear
                            }), (0, r.jsx)("hr", {
                                className: A().inputLine,
                                "data-cmdk-loader": !0,
                                "data-loading": "false"
                            })]
                        })
                    },
                    List: function(e) {
                        let {
                            children: t,
                            ...n
                        } = e, s = i.useRef(null), {
                            list: o,
                            selectedIndex: a
                        } = (0, G.DX)();
                        (0, F.Z)(() => {
                            var e, t, n;
                            let r = null === (e = o.current[a]) || void 0 === e ? void 0 : e._internalId,
                                i = document.querySelector(`[data-descendant="${r||""}"]`);
                            if (!i || !(i instanceof HTMLElement)) return;
                            let {
                                offsetTop: l
                            } = i;
                            s.current && (s.current.style.transform = `translateY(${l}px)`, (null === (n = s.current.nextElementSibling) || void 0 === n ? void 0 : null === (t = n.attributes.getNamedItem("data-tall-cmdk-item")) || void 0 === t ? void 0 : t.nodeValue) === "true" ? s.current.style.height = "70px" : s.current.style.height = "48px")
                        }, [a, o.current]);
                        let c = !!n.isDocs;
                        return (0, r.jsxs)(l.m.List, { ...n,
                            applySort: c,
                            className: A().commandList,
                            maxHeight: 324,
                            children: [(0, r.jsx)("div", {
                                "aria-hidden": !0,
                                className: A().highlight,
                                ref: s
                            }), t]
                        })
                    },
                    Group: function(e) {
                        return (0, r.jsx)(l.m.Group, {
                            className: A().group,
                            ...e
                        })
                    }
                });
            let U = {
                    Home: {
                        key: "Home",
                        placeholder: "What do you need?"
                    },
                    Theme: {
                        key: "Theme",
                        placeholder: "Change Theme..."
                    },
                    Scope: {
                        key: "Scope",
                        placeholder: "Switch Scope..."
                    },
                    Projects: {
                        key: "Projects",
                        placeholder: "Search Projects..."
                    },
                    Project: {
                        key: "Project"
                    },
                    Deployments: {
                        key: "Deployments",
                        placeholder: "Search Deployments..."
                    },
                    DeveloperTools: {
                        key: "Developer Tools",
                        placeholder: "Search..."
                    },
                    Teams: {
                        key: "Teams",
                        placeholder: "Search Teams..."
                    },
                    Team: {
                        key: "Team"
                    },
                    New: {
                        key: "New",
                        placeholder: "Choose a namespace..."
                    },
                    Repo: {
                        key: "Repo"
                    },
                    Docs: {
                        key: "Docs",
                        placeholder: "Search Docs..."
                    },
                    Legal: {
                        key: "Legal",
                        placeholder: "Legal"
                    },
                    Doc: {
                        key: "Doc"
                    },
                    Feedback: {
                        key: "Feedback",
                        placeholder: "How can we improve Vercel?"
                    },
                    Settings: {
                        key: "Settings",
                        placeholder: "Search Settings..."
                    }
                },
                z = {
                    "Shift+P": {
                        key: "p",
                        page: U.Projects
                    },
                    "Shift+D": {
                        key: "d",
                        page: U.Docs
                    },
                    "Shift+Control+D": {
                        key: "d",
                        page: U.DeveloperTools
                    },
                    "Shift+T": {
                        key: "t",
                        page: U.Teams
                    },
                    t: {
                        key: "t",
                        page: U.Theme
                    }
                };

            function W(e) {
                var t;
                null === (t = document.querySelector("[data-cmdk-loader]")) || void 0 === t || t.setAttribute("data-loading", String(e))
            }

            function q() {
                let {
                    user: e
                } = (0, S.a)(), {
                    team: t,
                    isTeam: n
                } = (0, C.t7)();
                return n ? null == t ? void 0 : t.slug : null == e ? void 0 : e.username
            }
            var B = n(829747),
                Q = n(509877),
                K = n(562149),
                J = n(308108),
                Y = n(549564);

            function X(e) {
                let {
                    scope: t,
                    slug: n
                } = e, i = (0, j.useRouter)(), s = (0, Y.K)({}), {
                    user: o
                } = (0, S.a)(), {
                    teams: a
                } = (0, C.t7)(), l = null == a ? void 0 : a.find(e => t === e.name), c = (0, J.e1)(), d = "Personal Account" !== t ? null == l ? void 0 : l.id : null == o ? void 0 : o.uid;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(Z.Group, {
                        heading: "Navigation",
                        children: [(0, r.jsxs)(Z.Item, {
                            callback: () => {
                                i.push(`/${n||""}`)
                            },
                            prefix: (0, r.jsx)(B.o, {}),
                            value: `go to ${t??""}`,
                            children: ["Go to\xa0", (0, r.jsx)("strong", {
                                children: t
                            })]
                        }), s.map(e => (0, r.jsxs)(Z.Item, {
                            callback: () => {
                                e.href && i.push(e.href)
                            },
                            prefix: (0, r.jsx)(B.o, {}),
                            value: `go to ${t??""} ${e.text}`,
                            children: ["Go to\xa0", (0, r.jsx)("strong", {
                                children: t
                            }), "\xa0", e.text]
                        }, e.text))]
                    }), (0, r.jsx)(Z.Group, {
                        heading: "Quick Copy",
                        children: (0, r.jsxs)(Z.Item, {
                            callback: () => {
                                d && t && ((0, K.v)(`${d}`), c.message(`Copied ${t} ID to clipboard!`))
                            },
                            prefix: (0, r.jsx)(Q.C, {}),
                            value: `copy ${t??""} ID`,
                            children: ["Copy\xa0", (0, r.jsx)("strong", {
                                children: t
                            }), "\xa0ID"]
                        })
                    })]
                })
            }

            function ee() {
                let {
                    activePage: e,
                    inputValue: t,
                    setPage: n
                } = p(), {
                    user: s
                } = (0, S.a)(), {
                    teams: o,
                    team: a,
                    isTeam: l
                } = (0, C.t7)(), c = (0, j.useRouter)(), d = l ? null == a ? void 0 : a.name : "Personal Account", u = q(), h = (0, j.usePathname)() || "", g = (0, j.useSearchParams)() || new URLSearchParams(""), m = (0, I.r)(), f = (0, D.W)({
                    pathname: h,
                    searchParams: g,
                    user: s
                }), v = (0, O.M)(), x = (0, i.useMemo)(() => {
                    let e = Object.keys(_.U);
                    return e.map(e => et(v, e)).flat()
                }, [v]), {
                    desktopLinks: L
                } = (0, M.v4)(), N = (0, i.useMemo)(() => {
                    let e = Object.keys(E.$);
                    return e.map(e => en(L, e)).flat()
                }, [L]), F = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(Z.Item, {
                        callback: () => {
                            c.push(f)
                        },
                        prefix: (null == s ? void 0 : s.avatar) ? (0, r.jsx)(w.qE, {
                            size: 20,
                            src: `https://vercel.com/api/www/avatar/${s.avatar}?s=30`
                        }) : null,
                        value: [null == s ? void 0 : s.name, "switch to personal account", "switch"],
                        children: "Switch to Personal Account"
                    }), null == o ? void 0 : o.map(e => (0, r.jsxs)(Z.Item, {
                        callback: () => {
                            let t = (0, D.W)({
                                pathname: h,
                                searchParams: g,
                                team: e
                            });
                            c.push(t)
                        },
                        prefix: e.avatar ? (0, r.jsx)(w.qE, {
                            size: 20,
                            src: `https://vercel.com/api/www/avatar/${e.avatar}?s=30`
                        }) : null,
                        value: `Switch to ${e.name}`,
                        children: ["Switch to ", e.name]
                    }, e.slug))]
                }), H = l ? [...L, ...N].map(e => (0, r.jsxs)(Z.Item, {
                    callback: () => {
                        e.href && c.push(e.href)
                    },
                    prefix: (0, r.jsx)(k.Z, {}),
                    value: `go to ${d??""} ${e.text}`,
                    children: ["Go to\xa0", (0, r.jsx)("strong", {
                        children: d
                    }), "\xa0", e.text]
                }, e.href)) : [...v, ...x].map(e => (0, r.jsxs)(Z.Item, {
                    callback: () => {
                        e.href && c.push(e.href)
                    },
                    prefix: (0, r.jsx)(k.Z, {}),
                    value: `go to ${d??""} ${e.text}`,
                    children: ["Go to\xa0", (0, r.jsx)("strong", {
                        children: d
                    }), "\xa0", e.text]
                }, e.href));
                return e.key === U.Home.key ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(X, {
                        scope: d,
                        slug: u
                    }), (0, r.jsx)(Z.Item, {
                        callback: () => n(U.Settings),
                        closeOnCallback: !1,
                        prefix: (0, r.jsx)(k.Z, {}),
                        value: ["settings"],
                        children: "Search Settings..."
                    }), (0, r.jsx)(Z.Item, {
                        callback: () => n(U.Scope),
                        closeOnCallback: !1,
                        "data-testid": (0, P.C)("cmdk", "switch-scope"),
                        prefix: (0, r.jsx)(y.n, {}),
                        value: ["switch scope", "switch"],
                        children: "Switch Scope..."
                    }), (0, r.jsx)(Z.Item, {
                        callback: () => {
                            let e = (0, T._)(m);
                            e({
                                source: "cmdk-panel"
                            })
                        },
                        "data-testid": (0, P.C)("cmdk", "log-out"),
                        prefix: (0, r.jsx)(b.d, {}),
                        children: "Log Out"
                    }), t.length > 0 && (0, r.jsxs)(r.Fragment, {
                        children: [F, H]
                    })]
                }) : e.key === U.Scope.key ? (0, r.jsx)(r.Fragment, {
                    children: F
                }) : e.key === U.Settings.key ? (0, r.jsx)(r.Fragment, {
                    children: H
                }) : null
            }
            let et = (e, t) => {
                    let n = e.find(e => e.text === _.U[t]);
                    return n && t in _.j ? Object.values(_.j[t]).map(e => {
                        let t = `${n.href}#${x()(e)}`;
                        return {
                            text: e,
                            href: t
                        }
                    }) : []
                },
                en = (e, t) => {
                    let n = e.find(e => e.text === E.$[t]);
                    return n && n.href && t in E.p ? Object.values(E.p[t]).map(e => {
                        let t = `${n.href}#${x()(e)}`;
                        return {
                            text: e,
                            href: t
                        }
                    }) : []
                };
            var er = n(624102),
                ei = n(797631),
                es = n(308718),
                eo = n(543031),
                ea = n(178474);

            function el() {
                let {
                    activePage: e,
                    setPage: t,
                    inputValue: n
                } = p(), [s, o] = i.useState(null), a = (0, j.useRouter)(), {
                    account: l
                } = (0, ea.Z)(), c = q(), {
                    data: d
                } = (0, es.ZP)({
                    provider: "github"
                }), {
                    data: u
                } = (0, es.ZP)({
                    provider: "gitlab"
                }), {
                    data: h
                } = (0, es.ZP)({
                    provider: "bitbucket"
                }), g = (0, er.c)(n, 300), {
                    data: m
                } = (0, eo.Z)({
                    query: e.key === U.Repo.key ? g : void 0,
                    provider: null == s ? void 0 : s.type,
                    namespaceId: (null == s ? void 0 : s.installationId) || (null == s ? void 0 : s.id)
                }), f = null == m ? void 0 : m.repos;
                return (i.useEffect(() => {
                    e.key === U.Repo.key && (f ? W(!1) : W(!0))
                }, [f]), i.useEffect(() => {
                    e.key !== U.Repo.key && W(!1)
                }, [e.key]), e.key === U.New.key && l) ? (0, r.jsx)(r.Fragment, {
                    children: Object.entries({
                        GitHub: d,
                        GitLab: u,
                        Bitbucket: h
                    }).map(e => {
                        let [n, i] = e;
                        return i && i.length ? (0, r.jsx)(Z.Group, {
                            heading: n,
                            children: i.map(e => {
                                let i = n.toLowerCase();
                                return (0, r.jsx)(Z.Item, {
                                    callback: () => {
                                        t({ ...U.Repo,
                                            placeholder: `Search repositories in ${e.slug}`,
                                            label: e.slug
                                        }), o({
                                            type: i,
                                            ...e
                                        })
                                    },
                                    closeOnCallback: !1,
                                    prefix: (0, r.jsx)(ei.Z, {
                                        className: A().gitLogo,
                                        gitType: i
                                    }),
                                    value: [i, e.slug],
                                    children: e.slug
                                }, e.slug)
                            })
                        }, n) : null
                    })
                }) : e.key === U.Repo.key && f ? (0, r.jsx)(r.Fragment, {
                    children: f.map(e => (0, r.jsxs)(Z.Item, {
                        callback: () => {
                            c && a.push(`/new/${c}/import?s=${e.url}`)
                        },
                        prefix: (0, r.jsx)(B.o, {}),
                        value: e.name,
                        children: ["Import\xa0", (0, r.jsx)("strong", {
                            children: e.name
                        })]
                    }, e.id))
                }) : null
            }
            var ec = n(840905),
                ed = n(584065),
                eu = n(450776),
                eh = n(786726),
                eg = n(878593),
                em = n(333971),
                ef = n(573102);
            let ep = () => {
                    let e = function*(e) {
                        yield* function*(e) {
                            let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NodeFilter.SHOW_ALL,
                                {
                                    inspect: r,
                                    collect: i,
                                    callback: s
                                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                o = document.createTreeWalker(e, n, {
                                    acceptNode: e => r && !r(e) ? NodeFilter.FILTER_REJECT : i && !i(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                                });
                            for (; t = o.nextNode();) null == s || s(t), yield t
                        }(e, NodeFilter.SHOW_TEXT, {
                            inspect: e => {
                                var t;
                                return !ev.has((null === (t = e.parentElement) || void 0 === t ? void 0 : t.nodeName) || "")
                            }
                        })
                    }(document.body);
                    for (let t of e) {
                        let e = t.textContent ? t.textContent.length : 0;
                        if (null === t.textContent) return;
                        t.parentElement instanceof Element && (void 0 === t.parentElement.dataset.originalText ? (t.parentElement.dataset.originalText = t.textContent, t.textContent = Array.from({
                            length: 3 * e
                        }, () => ex[Math.floor(Math.random() * ex.length)]).join("")) : (t.textContent = t.parentElement.dataset.originalText, t.parentElement.removeAttribute("data-original-text")))
                    }
                },
                ev = new Set(["STYLE", "SCRIPT", "TITLE"]),
                ex = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";

            function ej(e) {
                return "boolean" != typeof e
            }

            function ek() {
                let {
                    activePage: e,
                    setPage: t
                } = p(), {
                    setForceShowTooltips: n,
                    forceShowTooltips: s
                } = i.useContext(eu.d), {
                    teams: o
                } = (0, u.Z)(), a = em.$A || "development", l = null == o ? void 0 : o.find(e => "vercel" === e.slug), c = !!l, {
                    data: d
                } = (0, eg.ZP)(c && !(0, ef.fz)(l) ? window.location.host : null);
                return c ? (0, r.jsxs)(Z.Group, {
                    heading: "Developer Tools",
                    children: [e.key === U.Home.key && (0, r.jsx)(Z.Item, {
                        callback: () => {
                            t(U.DeveloperTools)
                        },
                        closeOnCallback: !1,
                        keybind: "Shift+Control+D",
                        prefix: (0, r.jsx)(ec.d, {}),
                        value: ["developer tools", "tools"],
                        children: "Search Developer Tools"
                    }), (0, r.jsxs)(r.Fragment, {
                        children: ["production" !== a && (0, r.jsx)(Z.Item, {
                            callback: () => {
                                let e = new URL(window.location.href);
                                e.hostname = "vercel.com", e.port = "", window.open(e.toString())
                            },
                            prefix: (0, r.jsx)(ec.d, {}),
                            value: ["open in production", "vercel.com"],
                            children: "Open In Production"
                        }), "development" !== a && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(Z.Item, {
                                callback: () => {
                                    let e = new URL(window.location.href);
                                    e.protocol = "http:", e.hostname = "localhost", e.port = "3331", window.open(e.toString())
                                },
                                prefix: (0, r.jsx)(ec.d, {}),
                                value: ["open in localhost:3331", "open in development"],
                                children: "Open In Localhost"
                            }), (0, r.jsx)(Z.Item, {
                                callback: () => {
                                    let e = new URL(window.location.href);
                                    e.protocol = "http:", e.hostname = "localhost", e.port = "4441", window.open(e.toString())
                                },
                                prefix: (0, r.jsx)(ec.d, {}),
                                value: ["open in localhost:4441", "open in development"],
                                children: "Open In Localhost (Turbopack)"
                            })]
                        }), d && "preview" === a ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(Z.Item, {
                                callback: () => {
                                    window.open(d.inspectorUrl)
                                },
                                prefix: (0, r.jsx)(ec.d, {}),
                                children: "Inspect Deployment"
                            }), (0, r.jsx)(Z.Item, {
                                callback: () => {
                                    let {
                                        meta: {
                                            githubRepo: e,
                                            githubOrg: t,
                                            githubCommitRef: n
                                        }
                                    } = d;
                                    [t, e, n].every(ej) && window.open(`https://github.com/${t}/${e}/pull/${n}`)
                                },
                                prefix: (0, r.jsx)(ec.d, {}),
                                value: ["pr", "view pull request"],
                                children: "View Pull Request"
                            })]
                        }) : null, (0, r.jsx)(Z.Item, {
                            callback: () => {
                                ep()
                            },
                            prefix: (0, r.jsx)(ed.V, {}),
                            value: ["chaos", "chaos test", "long", "overflow"],
                            children: "Toggle Chaos Test"
                        }), (0, r.jsxs)(Z.Item, {
                            callback: () => {
                                n(!s)
                            },
                            prefix: (0, r.jsx)(eh.Y, {}),
                            value: ["tooltip"],
                            children: [s ? "Disable" : "Enable", " Force Show Tooltips"]
                        })]
                    })]
                }) : null
            }

            function ey(e) {
                var t;
                let {
                    callback: n,
                    ...i
                } = e, s = `docs${i.href}`, o = `/${s}`, a = null === (t = (0, j.usePathname)()) || void 0 === t ? void 0 : t.startsWith("/docs"), l = (0, j.useRouter)();
                return (0, r.jsx)(Z.Item, {
                    callback: e => {
                        n ? n(e) : a ? l.push(o) : window.open(o)
                    },
                    ...i,
                    closeOnCallback: a && !n,
                    prefix: (0, r.jsx)(B.o, {}),
                    value: i.href && !i.value ? s : i.value
                })
            }

            function eb() {
                let {
                    activePage: e,
                    inputValue: t,
                    setPage: n
                } = p();
                if (e.key === U.Doc.key) switch (e.href) {
                    case "/projects":
                        return (0, r.jsxs)(i.Fragment, {
                            children: [(0, r.jsx)(ey, {
                                href: "/projects/overview",
                                children: "Overview"
                            }), (0, r.jsx)(ey, {
                                href: "/projects/domains/add-a-domain",
                                children: "Custom Domains"
                            }), (0, r.jsx)(ey, {
                                href: "/projects/environment-variables",
                                children: "Environment Variables"
                            })]
                        }, "/projects");
                    case "/deployments":
                        return (0, r.jsxs)(i.Fragment, {
                            children: [(0, r.jsx)(ey, {
                                href: "/deployments/overview",
                                children: "Overview"
                            }), (0, r.jsx)(ey, {
                                href: "/deployments/builds#build-process",
                                children: "Build Step"
                            }), (0, r.jsx)(ey, {
                                href: "/deployments/environments",
                                children: "Environments"
                            }), (0, r.jsx)(ey, {
                                href: "/deployments/logs",
                                children: "Logs"
                            })]
                        }, "/deployments");
                    case "/accounts":
                        return (0, r.jsxs)(i.Fragment, {
                            children: [(0, r.jsx)(ey, {
                                href: "/accounts/create-an-account#login-methods-and-connections",
                                children: "Login Connections"
                            }), (0, r.jsx)(ey, {
                                href: "/accounts/team-members-and-roles",
                                children: "Team Membership"
                            }), (0, r.jsx)(ey, {
                                href: "/dashboard-features/command-menu",
                                children: "Command Menu"
                            })]
                        }, "/accounts");
                    case "/teams":
                        return (0, r.jsxs)(i.Fragment, {
                            children: [(0, r.jsx)(ey, {
                                href: "/accounts/team-members-and-roles/managing-team-members",
                                children: "Members"
                            }), (0, r.jsx)(ey, {
                                href: "/security/saml",
                                children: "SAML Single Sign-On"
                            })]
                        }, "/teams");
                    case "/deployments/git":
                        return (0, r.jsxs)(i.Fragment, {
                            children: [(0, r.jsx)(ey, {
                                href: "/deployments/git",
                                children: "Overview"
                            }), (0, r.jsx)(ey, {
                                href: "/deployments/git/vercel-for-github",
                                children: "Vercel for GitHub"
                            }), (0, r.jsx)(ey, {
                                href: "/deployments/git/vercel-for-gitlab",
                                children: "Vercel for GitLab"
                            }), (0, r.jsx)(ey, {
                                href: "/deployments/git/vercel-for-bitbucket",
                                children: "Vercel for Bitbucket"
                            }), (0, r.jsx)(ey, {
                                href: "/deployments/git/vercel-for-azure-pipelines",
                                children: "Vercel for Azure Pipelines"
                            }), (0, r.jsx)(ey, {
                                href: "/monorepos",
                                children: "Monorepos"
                            }), (0, r.jsx)(ey, {
                                href: "/deployments/deploy-hooks",
                                children: "Deploy Hooks"
                            })]
                        }, "/deployments/git");
                    case "/functions":
                        return (0, r.jsxs)(i.Fragment, {
                            children: [(0, r.jsx)(ey, {
                                href: "/functions/serverless-functions",
                                children: "Serverless Functions"
                            }), (0, r.jsx)(ey, {
                                href: "/functions/serverless-functions/supported-languages",
                                children: "Supported Languages"
                            }), (0, r.jsx)(ey, {
                                href: "/edge-network/caching",
                                children: "Edge Caching"
                            }), (0, r.jsx)(ey, {
                                href: "/edge-network/regions",
                                children: "Regions"
                            })]
                        }, "/functions");
                    case "/speed-insights":
                        return (0, r.jsxs)(i.Fragment, {
                            children: [(0, r.jsx)(ey, {
                                href: "/speed-insights#core-web-vitals-explained",
                                children: "Overview"
                            }), (0, r.jsx)(ey, {
                                href: "/speed-insights/privacy-policy",
                                children: "Privacy"
                            })]
                        }, "/speed-insights");
                    case "/integrations":
                        return (0, r.jsxs)(i.Fragment, {
                            children: [(0, r.jsx)(ey, {
                                href: "/integrations",
                                children: "Overview"
                            }), (0, r.jsx)(ey, {
                                href: "/integrations/contentful",
                                children: "Headless CMS"
                            }), (0, r.jsx)(ey, {
                                href: "/storage",
                                children: "Databases"
                            }), (0, r.jsx)(ey, {
                                href: "/storage/vercel-blob",
                                children: "File Storage and Uploads"
                            })]
                        }, "/integrations");
                    case "/frameworks/nextjs":
                        return (0, r.jsxs)(i.Fragment, {
                            children: [(0, r.jsx)(ey, {
                                href: "/frameworks/nextjs#getting-started",
                                children: "Overview"
                            }), (0, r.jsx)(ey, {
                                href: "/frameworks/nextjs#incremental-static-regeneration",
                                children: "Incremental Static Generation"
                            }), (0, r.jsx)(ey, {
                                href: "/frameworks/nextjs#image-optimization",
                                children: "Image Optimization"
                            }), (0, r.jsx)(ey, {
                                href: "/frameworks/nextjs#web-analytics",
                                children: "Analytics"
                            })]
                        }, "/frameworks/nextjs");
                    case "/edge-network":
                        return (0, r.jsxs)(i.Fragment, {
                            children: [(0, r.jsx)(ey, {
                                href: "/edge-network/overview",
                                children: "Overview"
                            }), (0, r.jsx)(ey, {
                                href: "/edge-network/caching",
                                children: "Caching"
                            }), (0, r.jsx)(ey, {
                                href: "/edge-network/headers",
                                children: "Headers"
                            }), (0, r.jsx)(ey, {
                                href: "/edge-network/compression",
                                children: "Compression"
                            }), (0, r.jsx)(ey, {
                                href: "/edge-network/regions",
                                children: "Regions"
                            }), (0, r.jsx)(ey, {
                                href: "/edge-network/directory-listing",
                                children: "Directory Listing"
                            }), (0, r.jsx)(ey, {
                                href: "/edge-network/frequently-asked-questions",
                                children: "Frequently Asked Questions"
                            })]
                        }, "/edge-network");
                    case "/limits":
                        return (0, r.jsxs)(i.Fragment, {
                            children: [(0, r.jsx)(ey, {
                                href: "/limits/overview",
                                children: "Overview"
                            }), (0, r.jsx)(ey, {
                                href: "/limits/usage",
                                children: "Usage"
                            }), (0, r.jsx)(ey, {
                                href: "/limits/fair-use-policy",
                                children: "Image Optimization"
                            })]
                        }, "/limits");
                    default:
                        return null
                }
                let s = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(ey, {
                        href: "?redirected=1",
                        children: "Introduction"
                    }), (0, r.jsx)(ey, {
                        callback: () => {
                            n({ ...U.Doc,
                                href: "/projects",
                                label: "Projects"
                            })
                        },
                        closeOnCallback: !1,
                        href: "/projects",
                        children: "Projects..."
                    }), (0, r.jsx)(ey, {
                        callback: () => {
                            n({ ...U.Doc,
                                href: "/deployments",
                                label: "Deployments"
                            })
                        },
                        closeOnCallback: !1,
                        href: "/deployments",
                        children: "Deployments..."
                    }), (0, r.jsx)(ey, {
                        callback: () => {
                            n({ ...U.Doc,
                                href: "/accounts",
                                label: "Personal Accounts"
                            })
                        },
                        closeOnCallback: !1,
                        href: "/accounts",
                        children: "Personal Accounts..."
                    }), (0, r.jsx)(ey, {
                        callback: () => {
                            n({ ...U.Doc,
                                href: "/teams",
                                label: "Teams"
                            })
                        },
                        closeOnCallback: !1,
                        href: "/teams",
                        children: "Teams..."
                    }), (0, r.jsx)(ey, {
                        callback: () => {
                            n({ ...U.Doc,
                                href: "/deployments/git",
                                label: "Git"
                            })
                        },
                        closeOnCallback: !1,
                        href: "/deployments/git",
                        children: "Git..."
                    }), (0, r.jsx)(ey, {
                        callback: () => {
                            n({ ...U.Doc,
                                href: "/functions",
                                label: "Functions"
                            })
                        },
                        closeOnCallback: !1,
                        href: "/functions",
                        value: ["docs/serverless-functions", "docs/functions", "docs/functions", "serverless functions"],
                        children: "Functions..."
                    }), (0, r.jsx)(ey, {
                        callback: () => {
                            n({ ...U.Doc,
                                href: "/frameworks/next.js",
                                label: "Next.js"
                            })
                        },
                        closeOnCallback: !1,
                        href: "/frameworks/nextjs",
                        children: "Next.js..."
                    }), (0, r.jsx)(ey, {
                        callback: () => {
                            n({ ...U.Doc,
                                href: "/edge-network",
                                label: "Edge Network"
                            })
                        },
                        closeOnCallback: !1,
                        href: "/edge-network",
                        children: "Edge Network..."
                    }), (0, r.jsx)(ey, {
                        callback: () => {
                            n({ ...U.Doc,
                                href: "/limits",
                                label: "Limits"
                            })
                        },
                        closeOnCallback: !1,
                        href: "/limits",
                        children: "Limits..."
                    })]
                });
                return e.key === U.Home.key && t.length > 0 ? (0, r.jsx)(Z.Group, {
                    heading: "Docs",
                    children: s
                }) : e.key === U.Docs.key ? s : null
            }
            var ew = n(348871),
                eS = n(562745),
                eC = n(287102),
                eI = n(337343),
                eD = n(876802),
                eT = n(35085),
                eP = n(895022);

            function eO(e, t) {
                return "support_article" === t ? (0, r.jsx)(eI.Q, {
                    "aria-label": "Guide"
                }) : "reference" === e ? (0, r.jsx)(eD.a, {
                    "aria-label": "Reference"
                }) : "guide" === e ? (0, r.jsx)(eI.Q, {
                    "aria-label": "Guide"
                }) : (0, r.jsx)(eT.p, {
                    "aria-label": "Docs"
                })
            }

            function eM(e) {
                let { ...t
                } = e, {
                    status: n
                } = (0, eC.b)(), {
                    resultCount: i,
                    inputValue: s
                } = t;
                return !s || s.length <= 2 ? (0, r.jsx)(a.K, {
                    align: "center",
                    className: A().resultsInfo,
                    direction: "row",
                    gap: 1,
                    children: (0, r.jsx)("span", {
                        children: "Type more than 2 characters to start searching"
                    })
                }) : (0, r.jsx)(a.K, {
                    align: "center",
                    className: A().resultsInfo,
                    direction: "row",
                    gap: 1,
                    children: (0, r.jsxs)(r.Fragment, {
                        children: [0 === i && "idle" === n && (0, r.jsxs)("span", {
                            children: ["No results found for ", (0, r.jsx)("i", {
                                children: s
                            })]
                        }), i > 0 && "idle" === n && (0, r.jsx)("span", {
                            children: `Found ${i} results`
                        }), "stalled" === n || "loading" === n ? (0, r.jsx)(eP.$, {
                            size: 15
                        }) : null]
                    })
                })
            }
            var e_ = n(221726),
                eE = n.n(e_);

            function eL(e) {
                var t;
                let { ...n
                } = e, i = (0, j.useRouter)(), {
                    inputValue: s
                } = p(), {
                    res: o
                } = n, a = o._tags ? o._tags.join() : "docs", l = () => o.title.length > 100 ? o.section : o.title === o.section ? o.title : `${o.section}: ${o.title}`;
                return (0, r.jsx)(Z.Item, {
                    callback: () => {
                        c.co.track(c.s6.DOC_SEARCH, {
                            search: s
                        }), i.push(o.anchor && "#" !== o.anchor && !o.anchor.includes("https") ? `${o.url.replace("/support/articles","/guides")}${o.anchor}` : o.url.replace("/support/articles", "/guides"))
                    },
                    ...n,
                    closeOnCallback: !0,
                    "data-tall-cmdk-item": "true",
                    isDocs: !0,
                    prefix: eO(a, o.articleType),
                    value: l(),
                    children: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: eE().searchResTitle,
                            children: l()
                        }), (0, r.jsx)("div", {
                            className: eE().searchSnippet,
                            children: (null === (t = o._tags) || void 0 === t ? void 0 : t.includes("guide")) ? o.content : o.content.replace(o.title, "")
                        })]
                    })
                })
            }
            let eN = {
                default: [{
                    title: "Get Started with Vercel",
                    href: "/docs/getting-started-with-vercel",
                    tag: "docs"
                }, {
                    title: "Vercel API",
                    href: "/docs/rest-api",
                    tag: "reference"
                }, {
                    title: "Vercel CLI",
                    href: "/docs/cli",
                    tag: "reference"
                }, {
                    title: "Development Environment Variables",
                    href: "/docs/projects/environment-variables#development-environment-variables",
                    tag: "docs"
                }, {
                    title: "Streaming Data in Edge Functions",
                    href: "/docs/functions/edge-functions/streaming",
                    tag: "docs"
                }, {
                    title: "Edge Functions Limitations",
                    href: "/docs/functions/edge-functions/limitations",
                    tag: "docs"
                }, {
                    title: "Project Domains",
                    href: "/docs/projects/domains",
                    tag: "docs"
                }, {
                    title: "CLI vercel dev",
                    href: "/docs/cli/dev",
                    tag: "reference"
                }, {
                    title: "How to Build a Multi-Tenant App with Custom Domains Using Next.js",
                    href: "/guides/nextjs-multi-tenant-application",
                    tag: "guide"
                }, {
                    title: "How do I migrate away from `vercel.json` env and build.env?",
                    href: "/guides/how-do-i-migrate-away-from-vercel-json-env-and-build-env",
                    tag: "guide"
                }],
                "/docs/dashboard-features": [{
                    title: "Dashboard Overview",
                    href: "/docs/dashboard-features/overview",
                    tag: "docs"
                }, {
                    title: "Activity Log",
                    href: "/docs/dashboard-features/activity-log",
                    tag: "docs"
                }, {
                    title: "Monitoring",
                    href: "/docs/dashboard-features/monitoring",
                    tag: "docs"
                }, {
                    title: "Monitor Performance with Calibre and Vercel",
                    href: "/guides/monitoring-performance-with-calibre-and-vercel",
                    tag: "guide"
                }],
                "/docs/projects": [{
                    title: "Project Settings",
                    href: "/docs/projects/overview#project-settings",
                    tag: "docs"
                }, {
                    title: "Add a custom domain",
                    href: "/docs/projects/domains/add-a-domain",
                    tag: "docs"
                }, {
                    title: "How can I migrate a site to Vercel without downtime?",
                    href: "/guides/zero-downtime-migration",
                    tag: "guide"
                }, {
                    title: "How do I transfer my Vercel project?",
                    href: "/guides/transferring-projects-from-hobby-to-team",
                    tag: "guide"
                }, {
                    title: "Environment Variables",
                    href: "/docs/projects/environment-variables",
                    tag: "docs"
                }, {
                    title: "Vercel API Projects",
                    href: "/docs/rest-api#endpoints/projects",
                    tag: "reference"
                }],
                "/docs/teams-and-accounts": [{
                    title: "Team Members and Roles",
                    href: "/docs/teams-and-accounts/team-members-and-roles",
                    tag: "docs"
                }, {
                    title: "Enterprise team roles",
                    href: "/docs/teams-and-accounts/team-members-and-roles#enterprise-team-roles",
                    tag: "docs"
                }, {
                    title: "Role permissions comparison",
                    href: "/docs/teams-and-accounts/team-members-and-roles#role-permissions-comparison",
                    tag: "docs"
                }, {
                    title: "Authenticating with SAML SSO",
                    href: "/docs/security/saml#authenticating-with-saml-sso",
                    tag: "docs"
                }, {
                    title: "Can I upgrade to a paid plan on my personal account?",
                    href: "/guides/upgrading-personal-account",
                    tag: "guide"
                }, {
                    title: "Vercel API Authentication",
                    href: "/docs/rest-api#endpoints/authentication",
                    tag: "reference"
                }, {
                    title: "Vercel API User",
                    href: "/docs/rest-api#endpoints/user",
                    tag: "reference"
                }, {
                    title: "Vercel API Teams",
                    href: "/docs/rest-api#endpoints/teams",
                    tag: "reference"
                }],
                "/docs/deployments": [{
                    title: "Deploy with Git",
                    href: "/docs/deployments/overview#git",
                    tag: "docs"
                }, {
                    title: "Deploy with the Vercel CLI",
                    href: "/docs/deployments/overview#vercel-cli",
                    tag: "docs"
                }, {
                    title: "Deploy with the Vercel API",
                    href: "/docs/deployments/overview#vercel-api",
                    tag: "docs"
                }, {
                    title: "Preview deployment comments",
                    href: "/docs/workflow-collaboration/comments",
                    tag: "docs"
                }, {
                    title: "Managing Deployments",
                    href: "/docs/deployments/managing-deployments",
                    tag: "docs"
                }, {
                    title: "Why commits are not triggering deployments on Vercel?",
                    href: "/guides/why-aren-t-commits-triggering-deployments-on-vercel",
                    tag: "guide"
                }, {
                    title: "How do I use the Ignored Build Step field on Vercel?",
                    href: "/guides/how-do-i-use-the-ignored-build-step-field-on-vercel",
                    tag: "guide"
                }, {
                    title: "Vercel cli deploy",
                    href: "/docs/cli/deploy",
                    tag: "reference"
                }, {
                    title: "Vercel API deployments",
                    href: "/docs/rest-api#endpoints/deployments",
                    tag: "reference"
                }],
                "/docs/deployments/git": [{
                    title: "Vercel for GitHub",
                    href: "/docs/deployments/git/vercel-for-github",
                    tag: "docs"
                }, {
                    title: "Vercel for GitLab",
                    href: "/docs/deployments/git/vercel-for-gitlab",
                    tag: "docs"
                }, {
                    title: "Vercel for Bitbucket",
                    href: "/docs/deployments/git/vercel-for-bitbucket",
                    tag: "docs"
                }, {
                    title: "Deploy hooks",
                    href: "/docs/deployments/deploy-hooks",
                    tag: "docs"
                }, {
                    title: "How can I use GitHub Actions with Vercel?",
                    href: "/guides/how-can-i-use-github-actions-with-vercel",
                    tag: "guide"
                }, {
                    title: "Vercel CLI git",
                    href: "/docs/cli/git",
                    tag: "reference"
                }],
                "/docs/monorepos": [{
                    title: "Ignoring the Build Step",
                    href: "/docs/monorepos#ignoring-the-build-step",
                    tag: "docs"
                }, {
                    title: "Turborepo",
                    href: "/docs/monorepos/turborepo",
                    tag: "docs"
                }, {
                    title: "Setup remote caching for Nx on Vercel",
                    href: "/docs/monorepos/nx#setup-remote-caching-for-nx-on-vercel",
                    tag: "guide"
                }, {
                    title: "Get started with remote caching",
                    href: "/docs/monorepos/remote-caching#get-started",
                    tag: "guide"
                }, {
                    title: "Deploying a Monorepo Using Yarn Workspaces to Vercel",
                    href: "/guides/deploying-yarn-monorepos-to-vercel",
                    tag: "guide"
                }],
                "/docs/functions/serverless-functions": [{
                    title: "Deploying Serverless Functions",
                    href: "/docs/functions/serverless-functions#deploying-serverless-functions",
                    tag: "docs"
                }, {
                    title: "Serverless Functions Regions",
                    href: "/docs/functions/serverless-functions/regions",
                    tag: "docs"
                }, {
                    title: "Supported Languages for Serverless Functions",
                    href: "/docs/functions/serverless-functions/supported-languages",
                    tag: "docs"
                }, {
                    title: "Streaming Data in Edge Functions",
                    href: "/docs/functions/edge-functions/streaming",
                    tag: "docs"
                }, {
                    title: "Connection Pooling with Serverless Functions",
                    href: "/guides/connection-pooling-with-serverless-functions",
                    tag: "guide"
                }, {
                    title: "How can I use files in Serverless Functions on Vercel?",
                    href: "/guides/how-can-i-use-files-in-serverless-functions",
                    tag: "guide"
                }, {
                    title: "Using Databases with Vercel",
                    href: "/guides/using-databases-with-vercel",
                    tag: "guide"
                }, {
                    title: "How do I lower my Serverless Function execution time?",
                    href: "/guides/how-do-i-lower-my-serverless-function-execution-time",
                    tag: "guide"
                }, {
                    title: "Build Output API - Serverless Functions",
                    href: "/docs/build-output-api/v3#vercel-primitives/serverless-functions",
                    tag: "reference"
                }],
                "/docs/functions/edge-functions": [{
                    title: "Streaming Data in Edge Functions",
                    href: "/docs/functions/edge-functions/streaming",
                    tag: "docs"
                }, {
                    title: "How Edge Functions work",
                    href: "/docs/functions/edge-functions#how-edge-functions-work",
                    tag: "docs"
                }, {
                    title: "Edge Function regions",
                    href: "/docs/functions/edge-functions#edge-function-regions",
                    tag: "docs"
                }, {
                    title: "Edge Functions Quickstart",
                    href: "/docs/functions/edge-functions/quickstart",
                    tag: "guide"
                }, {
                    title: "OG Image Generation",
                    href: "/docs/functions/edge-functions/og-image-generation",
                    tag: "docs"
                }, {
                    title: "@vercel/edge package",
                    href: "/docs/functions/edge-functions/vercel-edge-package",
                    tag: "reference"
                }, {
                    title: "@vercel/og package",
                    href: "/docs/functions/edge-functions/og-image-api",
                    tag: "reference"
                }, {
                    title: "Build Output API - Edge Functions",
                    href: "/docs/build-output-api/v3#vercel-primitives/edge-functions",
                    tag: "reference"
                }],
                "/docs/functions/edge-middleware": [{
                    title: "Create Edge Middleware",
                    href: "/docs/functions/edge-middleware#create-edge-middleware",
                    tag: "docs"
                }, {
                    title: "Edge Middleware Quickstart",
                    href: "/docs/functions/edge-middleware/quickstart",
                    tag: "guide"
                }, {
                    title: "Edge Middleware APIs",
                    href: "/docs/functions/edge-middleware/middleware-api",
                    tag: "reference"
                }, {
                    title: "Build Output API - Edge Middleware",
                    href: "/docs/build-output-api/v3#features/edge-middleware",
                    tag: "reference"
                }, {
                    title: "Streaming Data in Edge Functions",
                    href: "/docs/functions/edge-functions/streaming",
                    tag: "docs"
                }],
                "/docs/incremental-static-regeneration": [{
                    title: "ISR Quickstart",
                    href: "/docs/incremental-static-regeneration/quickstart",
                    tag: "guide"
                }, {
                    title: "ISR Render Function",
                    href: "/docs/incremental-static-regeneration/overview#isr-render-function",
                    tag: "docs"
                }, {
                    title: "Build Output API - On-Demand ISR",
                    href: "/docs/build-output-api/v3#features/on-demand-incremental-static-regeneration-isr",
                    tag: "reference"
                }],
                "/docs/image-optimization": [{
                    title: "Quickstart",
                    href: "/docs/image-optimization/quickstart",
                    tag: "docs"
                }, {
                    title: "Managing Image Optimization costs",
                    href: "/docs/image-optimization/managing-image-optimization-costs",
                    tag: "docs"
                }, {
                    title: "Lowering Resource Usage in Vercel Projects",
                    href: "/guides/lower-usage",
                    tag: "guide"
                }],
                "/docs/analytics": [{
                    title: "Web Analytics",
                    href: "/docs/analytics",
                    tag: "docs"
                }, {
                    title: "Web Analytics Quickstart",
                    href: "/docs/analytics/quickstart",
                    tag: "reference"
                }, {
                    title: "@vercel/analytics package",
                    href: "/docs/analytics/package",
                    tag: "reference"
                }, {
                    title: "Speed Insights",
                    href: "/docs/speed-insights",
                    tag: "docs"
                }, {
                    title: "Speed Insights API",
                    href: "/docs/speed-insights/api",
                    tag: "reference"
                }],
                "/docs/edge-network": [{
                    title: "Edge Network Regions",
                    href: "/docs/edge-network/regions",
                    tag: "docs"
                }, {
                    title: "Edge Network Caching",
                    href: "/docs/edge-network/caching",
                    tag: "docs"
                }, {
                    title: "Edge Network Headers",
                    href: "/docs/edge-network/headers",
                    tag: "docs"
                }, {
                    title: "Edge Config",
                    href: "/docs/storage/edge-config",
                    tag: "docs"
                }, {
                    title: "Edge Config API",
                    href: "/docs/rest-api#endpoints/edge-config",
                    tag: "reference"
                }, {
                    title: "Edge Network FAQs",
                    href: "/docs/edge-network/frequently-asked-questions",
                    tag: "docs"
                }, {
                    title: "Can I deploy my site to multiple locations with Vercel?",
                    href: "/guides/can-i-deploy-my-site-to-multiple-locations-with-vercel",
                    tag: "guide"
                }],
                "/docs/integrations": [{
                    title: "Integration Quickstart",
                    href: "/docs/integrations#quickstart",
                    tag: "docs"
                }, {
                    title: "Create an Integration",
                    href: "/docs/integrations/create-integration",
                    tag: "docs"
                }, {
                    title: "Working with Checks",
                    href: "/docs/integrations/checks-overview",
                    tag: "docs"
                }, {
                    title: "Checks API",
                    href: "/docs/integrations/checks-overview/checks-api",
                    tag: "reference"
                }, {
                    title: "Working with Webhooks",
                    href: "/docs/integrations/webhooks-overview",
                    tag: "docs"
                }, {
                    title: "Webhooks API",
                    href: "/docs/integrations/webhooks-overview/webhooks-api",
                    tag: "reference"
                }, {
                    title: "Building Integrations with Vercel REST API",
                    href: "/docs/rest-api/vercel-api-integrations",
                    tag: "docs"
                }, {
                    title: "How do I store logs on Vercel?",
                    href: "/guides/how-do-i-store-logs-on-vercel",
                    tag: "guide"
                }, {
                    title: "Monitor Performance with Calibre and Vercel",
                    href: "/guides/monitoring-performance-with-calibre-and-vercel",
                    tag: "guide"
                }],
                "/docs/cli": [{
                    title: "Installing Vercel CLI",
                    href: "/docs/cli#installing-vercel-cli",
                    tag: "guide"
                }, {
                    title: "Available Commands",
                    href: "/docs/cli#available-commands",
                    tag: "docs"
                }],
                "/docs/concepts/next.js": [{
                    title: "Incremental Static Regeneration",
                    href: "/docs/concepts/next.js/overview#incremental-static-regeneration",
                    tag: "docs"
                }, {
                    title: "Font Optimization",
                    href: "/docs/concepts/next.js/overview#font-optimization",
                    tag: "docs"
                }, {
                    title: "Middleware",
                    href: "/docs/concepts/next.js/overview#middleware",
                    tag: "docs"
                }, {
                    title: "How to Build a Multi-Tenant App with Custom Domains Using Next.js",
                    href: "/guides/nextjs-multi-tenant-application",
                    tag: "guide"
                }, {
                    title: "Integrating Next.js and Contentful for your Headless CMS",
                    href: "/guides/integrating-next-js-and-contentful-for-your-headless-cms",
                    tag: "guide"
                }, {
                    title: "Using Headless WordPress with Next.js and Vercel",
                    href: "/guides/wordpress-with-vercel",
                    tag: "guide"
                }, {
                    title: "Building Ecommerce Sites with Next.js and Shopify",
                    href: "/guides/building-ecommerce-sites-with-next-js-and-shopify",
                    tag: "guide"
                }, {
                    title: "How do I perform Vercel redirects based on query strings?",
                    href: "/guides/how-do-i-perform-vercel-redirects-based-on-query-strings",
                    tag: "guide"
                }]
            };

            function eF(e) {
                let { ...t
                } = e, n = (0, j.useRouter)(), {
                    tag: i
                } = t;
                return (0, r.jsx)(Z.Item, { ...t,
                    callback: () => {
                        n.push(t.href)
                    },
                    closeOnCallback: !0,
                    isStatic: !0,
                    prefix: eO(i, "recommendation")
                })
            }

            function eH() {
                let e = (0, j.usePathname)(),
                    t = eN.default,
                    n = Object.keys(eN).filter(t => null == e ? void 0 : e.includes(t));
                return n.length > 0 && (t = eN[n[0]]), (0, r.jsx)(Z.Group, {
                    heading: "Recommended for you",
                    children: t.map(e => (0, r.jsx)(eF, {
                        href: e.href,
                        tag: e.tag,
                        children: (0, r.jsx)("div", {
                            children: e.title
                        })
                    }, e.title))
                })
            }

            function e$(e) {
                let {
                    inputValue: t,
                    setResultCount: n
                } = p(), {
                    hits: i
                } = (0, ew.O)(e), {
                    refine: s
                } = (0, eS.l)(e), o = (0, er.c)(t, 300);
                o.length > 2 && !o.endsWith(" ") && s(o);
                let a = i.filter(e => !(e.title.toLowerCase() === e.content.toLowerCase() && !e._tags.includes("guide")));
                return n(a.length), (0, r.jsxs)(r.Fragment, {
                    children: [0 === a.length || o.length <= 2 ? (0, r.jsx)(eH, {}) : null, a.length > 0 && o.length > 2 && (0, r.jsx)(r.Fragment, {
                        children: a.map(e => (0, r.jsx)(eL, {
                            isDocs: !0,
                            res: e
                        }, e.objectID))
                    })]
                })
            }
            var eR = n(940215),
                eA = n(852390),
                eV = n(391335),
                eG = n(58363),
                eZ = n(121123);

            function eU() {
                let {
                    inputValue: e,
                    activePage: t,
                    onDismiss: n
                } = p(), [s, o] = i.useState(""), [a, l] = i.useState(!1);
                return (i.useEffect(() => {
                    o("")
                }, [e]), i.useEffect(() => {
                    var e;
                    null === (e = document.querySelector("[data-cmdk-root]")) || void 0 === e || e.setAttribute("data-error", String(!!s))
                }, [s]), i.useEffect(() => {
                    let e;
                    return a && (e = window.setTimeout(() => {
                        n()
                    }, 1e3)), () => clearTimeout(e)
                }, [a]), t.key === U.Feedback.key) ? a ? (0, r.jsx)(Z.Item, {
                    isStatic: !0,
                    prefix: (0, r.jsx)(eR.I, {
                        color: "var(--geist-success)",
                        fill: !0
                    }),
                    style: {
                        color: "var(--geist-success-dark)"
                    },
                    children: "Thank you for the feedback!"
                }) : s ? (0, r.jsx)(Z.Item, {
                    callback: () => {
                        o("")
                    },
                    closeOnCallback: !1,
                    isStatic: !0,
                    prefix: (0, r.jsx)(eA.b, {
                        color: "var(--geist-error)",
                        fill: !0
                    }),
                    style: {
                        color: "var(--geist-error-dark)"
                    },
                    children: s
                }) : (0, r.jsx)(Z.Item, {
                    callback: function() {
                        if (!e.length) {
                            o("Your feedback can't be empty.");
                            return
                        }
                        W(!0), (0, eG.I)(eZ.N1, {
                            method: "POST",
                            body: JSON.stringify({
                                url: "localhost" === window.location.hostname ? `https://${em.pV}/dev-mode${window.location.pathname}` : window.location.toString(),
                                note: e,
                                label: "front",
                                ua: `front production + ${navigator.userAgent} (${navigator.language||"unknown language"})`
                            }),
                            throwOnHTTPError: !0
                        }).then(() => {
                            W(!1), l(!0)
                        }).catch(e => {
                            W(!1), o(e.message)
                        })
                    },
                    closeOnCallback: !1,
                    isStatic: !0,
                    prefix: (0, r.jsx)(eV.v, {}),
                    style: {
                        transitionDuration: "0ms"
                    },
                    children: "Send Feedback"
                }, e) : null
            }
            var ez = n(195269),
                eW = n(923753),
                eq = n(177360),
                eB = n(713489);

            function eQ() {
                let {
                    activePage: e,
                    inputValue: t,
                    setPage: n
                } = p(), {
                    setTheme: i
                } = (0, ez.F)(), s = (0, J.e1)(), o = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(Z.Item, {
                        callback: () => i("dark"),
                        prefix: (0, r.jsx)(eW.J, {}),
                        children: "Change Theme to Dark"
                    }), (0, r.jsx)(Z.Item, {
                        callback: () => i("light"),
                        prefix: (0, r.jsx)(eq.k, {}),
                        children: "Change Theme to Light"
                    }), (0, r.jsx)(Z.Item, {
                        callback: () => i("system"),
                        prefix: (0, r.jsx)(eB.u, {}),
                        children: "Change Theme to System"
                    })]
                });
                return e.key === U.Home.key ? (0, r.jsxs)(Z.Group, {
                    heading: "General",
                    children: [(0, r.jsx)(Z.Item, {
                        callback: () => n(U.Theme),
                        closeOnCallback: !1,
                        keybind: "t",
                        prefix: (0, r.jsx)(eB.u, {}),
                        children: "Change Theme..."
                    }), (0, r.jsx)(Z.Item, {
                        callback: () => {
                            (0, K.v)(window.location.href), s.message("Copied to clipboard!")
                        },
                        prefix: (0, r.jsx)(Q.C, {}),
                        children: "Copy Current URL"
                    }), t.length > 0 && o]
                }) : e.key === U.Theme.key ? o : null
            }
            var eK = n(911047),
                eJ = n(636319);

            function eY() {
                let {
                    activePage: e,
                    setPage: t
                } = p(), n = (0, j.useRouter)(), {
                    team: i,
                    isTeam: s
                } = (0, C.t7)();
                return e.key === U.Home.key ? (0, r.jsxs)(Z.Group, {
                    heading: "Help",
                    children: [(0, r.jsx)(Z.Item, {
                        callback: () => {
                            t(U.Docs)
                        },
                        closeOnCallback: !1,
                        keybind: "Shift+D",
                        prefix: (0, r.jsx)(eD.a, {}),
                        value: ["Search Docs...", "Help"],
                        children: "Search Docs..."
                    }), (0, r.jsx)(Z.Item, {
                        callback: () => {
                            t(U.Legal)
                        },
                        closeOnCallback: !1,
                        prefix: (0, r.jsx)(B.o, {}),
                        value: ["Search Legal...", "Legal"],
                        children: "Legal"
                    }), (0, r.jsx)(Z.Item, {
                        callback: () => t(U.Feedback),
                        closeOnCallback: !1,
                        prefix: (0, r.jsx)(eK.Z, {}),
                        value: ["Send Feedback...", "Help"],
                        children: "Send Feedback..."
                    }), (0, r.jsx)(Z.Item, {
                        callback: () => {
                            n.push(s && i ? `/help?teamSlug=${i.slug}` : "/help#issues")
                        },
                        prefix: (0, r.jsx)(eJ.M, {}),
                        value: ["Contact Support", "Help"],
                        children: "Contact Support"
                    })]
                }) : null
            }
            var eX = n(707323),
                e0 = n(892637),
                e1 = n(792407),
                e2 = n(636615),
                e3 = n(691778),
                e4 = n(898826),
                e6 = n(767437),
                e9 = n(763210),
                e5 = n(967867),
                e7 = n(134922),
                e8 = n(419570),
                te = n(511348),
                tt = n(579877),
                tn = n(731352);

            function tr(e) {
                let {
                    project: t
                } = e, {
                    activePage: n,
                    setPage: i
                } = p(), {
                    domain: s,
                    deployment: o
                } = (0, tn.s)(t.id), l = (0, e8.T$)(o), {
                    data: c
                } = (0, te.Z)({
                    projectId: t.id,
                    target: "production",
                    limit: 50
                }), d = q(), u = (0, j.useRouter)(), h = (0, J.e1)();
                if (n.key === U.Project.key) {
                    let e = d ? `/${d}/${t.name}` : "";
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(Z.Group, {
                            heading: "Navigation",
                            children: [(0, r.jsxs)(Z.Item, {
                                callback: () => u.push(e),
                                prefix: (0, r.jsx)(B.o, {}),
                                value: `Go to ${t.name}`,
                                children: ["Go to\xa0", (0, r.jsx)("strong", {
                                    children: t.name
                                })]
                            }), (0, r.jsxs)(Z.Item, {
                                callback: () => u.push(`${e}/settings/domains`),
                                prefix: (0, r.jsx)(B.o, {}),
                                value: "Go to Domains",
                                children: ["Go to\xa0", (0, r.jsx)("strong", {
                                    children: t.name
                                }), "\xa0Domains"]
                            }), (0, r.jsxs)(Z.Item, {
                                callback: () => u.push(`${e}/analytics`),
                                prefix: (0, r.jsx)(B.o, {}),
                                value: "Go to Web Analytics",
                                children: ["Go to\xa0", (0, r.jsx)("strong", {
                                    children: t.name
                                }), "\xa0Web Analytics"]
                            }), l ? (0, r.jsxs)(Z.Item, {
                                callback: () => u.push(`${l}/functions`),
                                prefix: (0, r.jsx)(B.o, {}),
                                value: "Go to Logs",
                                children: ["Go to\xa0", (0, r.jsx)("strong", {
                                    children: t.name
                                }), "\xa0Production Logs"]
                            }) : null, (0, r.jsxs)(Z.Item, {
                                callback: () => u.push(`${e}/settings`),
                                prefix: (0, r.jsx)(B.o, {}),
                                value: "Go to Settings",
                                children: ["Go to\xa0", (0, r.jsx)("strong", {
                                    children: t.name
                                }), "\xa0Settings"]
                            })]
                        }), (0, r.jsxs)(Z.Group, {
                            heading: "Deployments",
                            children: [(0, r.jsx)(Z.Item, {
                                callback: () => {
                                    i(U.Deployments)
                                },
                                closeOnCallback: !1,
                                prefix: (0, r.jsx)(e6.a, {}),
                                value: "Search Deployments...",
                                children: "Search Deployments..."
                            }), s ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(Z.Item, {
                                    callback: () => {
                                        window.open(`https://${s.name}`)
                                    },
                                    closeOnCallback: !1,
                                    prefix: (0, r.jsx)(ec.d, {}),
                                    children: "Visit Production Deployment"
                                }), (0, r.jsx)(Z.Item, {
                                    callback: () => {
                                        (0, K.v)(`https://${s.name}`), h.message("Copied URL successfully.")
                                    },
                                    prefix: (0, r.jsx)(Q.C, {}),
                                    children: "Copy Production Deployment URL"
                                })]
                            }) : null]
                        })]
                    })
                }
                if (n.key === U.Deployments.key) {
                    let e = (null == c ? void 0 : c.deployments) ? ? [];
                    return (0, r.jsx)(r.Fragment, {
                        children: e.map(e => {
                            let {
                                url: t,
                                createdAt: n,
                                uid: i,
                                state: s
                            } = e, o = (0, e7.S)(e), l = null == o ? void 0 : o.commitMessage, c = null == o ? void 0 : o.commitRef, d = null == o ? void 0 : o.commitAuthorName;
                            return (0, r.jsx)(Z.Item, {
                                callback: () => {
                                    window.open(`https://${t}`)
                                },
                                closeOnCallback: !1,
                                prefix: (0, r.jsx)(tt.Z, {
                                    deployment: e,
                                    state: e.state
                                }),
                                suffix: (0, r.jsxs)(a.K, {
                                    align: "center",
                                    direction: "row",
                                    gap: 1,
                                    children: [(0, r.jsxs)("span", {
                                        className: A().createdAt,
                                        children: [(0, e5.F6)(Date.now() - n), " by"]
                                    }), (0, r.jsx)(e9.DY, {
                                        deployment: e,
                                        size: 20
                                    })]
                                }),
                                value: [t, s, d, c, l].filter(e => !!e),
                                children: (0, r.jsxs)(a.K, {
                                    align: "center",
                                    className: A().gitMeta,
                                    direction: "row",
                                    gap: 2,
                                    children: [(0, r.jsx)("span", {
                                        className: "geist-ellipsis",
                                        style: {
                                            maxWidth: "85%"
                                        },
                                        children: l || t
                                    }), !!c && (0, r.jsx)("span", {
                                        className: (0, L.W)(A().badge),
                                        title: c,
                                        children: c
                                    })]
                                })
                            }, i)
                        })
                    })
                }
                return null
            }

            function ti() {
                let {
                    activePage: e,
                    inputValue: t,
                    setPage: n
                } = p(), {
                    data: s
                } = (0, e2.ZP)({
                    latestDeployments: 10
                }), {
                    data: o
                } = (0, e3.G)(), a = (0, e4.Z)(), [l, c] = i.useState(null), d = (0, j.useRouter)(), u = (0, eX.Z)(t);
                i.useEffect(() => {
                    e.key !== U.Home.key && (s ? W(!1) : W(!0))
                }, [s]);
                let h = (null == s ? void 0 : s.projects.length) ? s.projects.map(e => {
                    let t = null == o ? void 0 : o.find(t => t.slug === e.framework);
                    return (0, r.jsx)(Z.Item, {
                        callback: () => {
                            n({ ...U.Project,
                                label: e.name
                            }), c(e)
                        },
                        closeOnCallback: !1,
                        prefix: t ? (0, r.jsx)("img", {
                            alt: `Logo for ${t.name}`,
                            className: A().frameworkIcon,
                            height: "18",
                            src: t.logo,
                            width: "18"
                        }) : (0, r.jsx)(e0.r, {}),
                        value: e.name,
                        children: e.name
                    }, e.id)
                }) : null;
                return e.key === U.Home.key ? (0, r.jsxs)(Z.Group, {
                    heading: "Projects",
                    children: [(0, r.jsx)(Z.Item, {
                        callback: () => {
                            n(U.Projects)
                        },
                        closeOnCallback: !1,
                        keybind: "Shift+P",
                        prefix: (0, r.jsx)(e0.r, {}),
                        children: "Search Projects..."
                    }), (0, r.jsx)(Z.Item, {
                        callback: () => {
                            n(U.New)
                        },
                        closeOnCallback: !1,
                        prefix: (0, r.jsx)(e1.v, {}),
                        children: "Create New Project..."
                    }), u ? (0, r.jsxs)(Z.Item, {
                        callback: () => {
                            a && d.push(`/new/${a}/import?s=${t}`)
                        },
                        isStatic: !0,
                        prefix: (0, r.jsx)(ei.Z, {
                            className: A().gitLogo,
                            gitType: u.type
                        }),
                        children: ["Import\xa0", (0, r.jsxs)("strong", {
                            children: [u.owner, "/", u.name]
                        })]
                    }) : null, t.length > 0 && h]
                }) : e.key === U.Projects.key ? (0, r.jsx)(r.Fragment, {
                    children: h
                }) : l ? (0, r.jsx)(tr, {
                    project: l
                }) : null
            }
            var ts = n(370747);

            function to(e) {
                let {
                    openCreateModal: t
                } = e, {
                    activePage: n,
                    inputValue: s,
                    setPage: o
                } = p(), {
                    isTeam: a,
                    team: l,
                    teams: c
                } = (0, C.t7)(), [d, u] = i.useState(null), h = (0, J.e1)(), g = (c || []).map(e => (0, r.jsx)(Z.Item, {
                    callback: () => {
                        o({ ...U.Team,
                            label: e.name
                        }), u(e)
                    },
                    closeOnCallback: !1,
                    prefix: (0, r.jsx)(w.qE, {
                        hash: e.avatar,
                        size: 20,
                        teamId: e.id
                    }),
                    value: [e.name, e.slug],
                    children: e.name || `Team ${e.id}`
                }, e.slug));
                return n.key === U.Home.key ? (0, r.jsxs)(Z.Group, {
                    heading: "Teams",
                    children: [(0, r.jsx)(Z.Item, {
                        callback: () => {
                            o(U.Teams)
                        },
                        closeOnCallback: !1,
                        keybind: "Shift+T",
                        prefix: (0, r.jsx)(ts.Q, {}),
                        children: "Search Teams..."
                    }), (0, r.jsx)(Z.Item, {
                        callback: t,
                        prefix: (0, r.jsx)(e1.v, {}),
                        children: "Create New Team"
                    }), a && (null == l ? void 0 : l.inviteCode) ? (0, r.jsx)(Z.Item, {
                        callback: () => {
                            l.inviteCode && (0, K.v)(`${em.pV}/teams/invite/${l.inviteCode}`), h.message("Copied to clipboard!")
                        },
                        prefix: (0, r.jsx)(Q.C, {}),
                        value: [`invite to ${l.name}`, "copy invite link"],
                        children: "Copy Invite Link"
                    }) : null, s.length > 0 && g]
                }) : n.key === U.Teams.key ? (0, r.jsx)(r.Fragment, {
                    children: g
                }) : n.key === U.Team.key && d ? (0, r.jsx)(X, {
                    scope: d.name,
                    slug: d.slug
                }) : null
            }

            function ta(e) {
                let {
                    isDocs: t = !1
                } = e, n = (0, d.Z)(), [g, m] = i.useState(!1), [p, v] = i.useState([U.Home]), [x, j] = i.useState(-1), [k, y] = i.useState([]), b = (0, h.qP)(), {
                    isLoggedOut: w
                } = (0, u.Z)(), S = (0, l.Y)(), {
                    inputValue: C
                } = S, I = p[p.length - 1], D = I.key === U.Home.key, T = I.placeholder ? ? "What do you need?";

                function P(e) {
                    v([...p, e])
                }

                function O(e) {
                    j(e)
                }
                let M = i.useCallback(() => {
                        m(!1)
                    }, []),
                    _ = i.useCallback(() => {
                        v(e => {
                            let t = [...e];
                            return t.splice(-1, 1), t
                        })
                    }, []),
                    E = i.useCallback(() => {
                        v([U.Home])
                    }, []);

                function L(e) {
                    D || C.length || "Backspace" !== e.key || (e.preventDefault(), _())
                }
                let N = i.useMemo(() => ({
                    "$mod+k": e => {
                        e.preventDefault(), m(e => !e)
                    },
                    "/": e => {
                        t && (e.preventDefault(), m(e => !e))
                    },
                    "Shift+P": e => {
                        e.preventDefault(), P(z["Shift+P"].page), m(!0)
                    },
                    "Shift+D": e => {
                        e.preventDefault(), P(z["Shift+D"].page), m(!0)
                    },
                    "Shift+Control+D": e => {
                        e.preventDefault(), P(z["Shift+Control+D"].page), m(!0)
                    },
                    "Shift+T": e => {
                        e.preventDefault(), P(z["Shift+T"].page), m(!0)
                    },
                    t: e => {
                        e.preventDefault(), P(z.t.page), m(!0)
                    }
                }), []);
                return (i.useEffect(() => {
                    g && c.co.track(c.s6.COMMAND_MENU_OPENED)
                }, [g]), w && !t) ? null : (0, r.jsxs)(Z, { ...S,
                    activePage: I,
                    keymap: N,
                    onDismiss: M,
                    onSelect: function(e) {
                        if (!(!e.closeOnCallback || e.isStatic || k.some(t => t.value === e.value))) {
                            if (3 === k.length) {
                                let [t, n] = k;
                                y([e, t, n])
                            } else y([e, ...k])
                        }
                    },
                    open: g,
                    resetPages: E,
                    children: [!t && (0, r.jsx)(a.K, {
                        direction: "row",
                        gap: 2,
                        style: {
                            marginTop: 8
                        },
                        children: p.map((e, t) => (0, r.jsx)("button", {
                            className: A().badge,
                            onClick: () => {
                                if (e.key === U.Home.key) v([U.Home]);
                                else {
                                    let e = [...p];
                                    e.length = t + 1, v(e)
                                }
                            },
                            tabIndex: -1,
                            type: "button",
                            children: e.label || e.key
                        }, e.key))
                    }), !!t && (0, r.jsxs)(s.p, {
                        indexName: "vercel_docs_production",
                        searchClient: n,
                        stalledSearchDelay: 100,
                        children: [(0, r.jsx)(o.T, {
                            attributesToSnippet: ["content:20"],
                            hitsPerPage: 20
                        }), (0, r.jsx)(Z.Input, {
                            "aria-label": T,
                            onKeyDown: L,
                            placeholder: T,
                            showClear: !0
                        }), (0, r.jsx)(eM, {
                            inputValue: C,
                            resultCount: x
                        }), (0, r.jsx)(f.Provider, {
                            value: {
                                activePage: I,
                                setPage: P,
                                inputValue: C,
                                onDismiss: M,
                                searchResultCount: -1,
                                setResultCount: O
                            },
                            children: (0, r.jsx)(Z.List, {
                                children: (0, r.jsx)(e$, {})
                            })
                        })]
                    }), !t && (0, r.jsx)(Z.Input, {
                        "aria-label": T,
                        onKeyDown: L,
                        placeholder: T
                    }), !t && (0, r.jsx)(Z.List, {
                        children: (0, r.jsxs)(f.Provider, {
                            value: {
                                activePage: I,
                                setPage: P,
                                inputValue: C,
                                onDismiss: M,
                                searchResultCount: -1,
                                setResultCount: O
                            },
                            children: [D && k.length > 0 ? (0, r.jsx)(Z.Group, {
                                heading: "Recents",
                                children: k.map((e, t) => (0, r.jsx)(Z.Item, { ...e
                                }, t))
                            }) : null, (0, r.jsx)(ti, {}), (0, r.jsx)(el, {}), (0, r.jsx)(to, {
                                openCreateModal: () => {
                                    m(!1), setTimeout(() => {
                                        b({
                                            source: "command-k menu"
                                        })
                                    }, 600)
                                }
                            }), (0, r.jsx)(eY, {}), (0, r.jsx)(eU, {}), (0, r.jsx)(eb, {}), (0, r.jsx)(eQ, {}), (0, r.jsx)(ek, {}), (0, r.jsx)(Z.Group, {
                                heading: "Scope",
                                children: (0, r.jsx)(ee, {})
                            })]
                        })
                    })]
                })
            }
        },
        179429: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(840387),
                i = n.n(r);

            function s() {
                let e = i()("NNTAHQI9C5", "35b6e34b44ca4bcf530d0c4198f58fd8");
                return {
                    search: async t => t.every(e => {
                        let {
                            params: {
                                query: t
                            }
                        } = e;
                        return !1 == !!t
                    }) ? {
                        results: t.map(() => ({
                            processingTimeMS: 0,
                            nbHits: 0,
                            hits: [],
                            facets: {}
                        }))
                    } : e.search(t),
                    searchForFacetValues: async t => e.searchForFacetValues(t)
                }
            }
        },
        464287: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(58363);

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (t.headers = t.headers || {}, t.headers.Accept = t.headers.Accept || "application/json", function(e) {
                        if ("object" == typeof e && null !== e) {
                            let t = Object.getPrototypeOf(e);
                            return t === Object.prototype || null === t
                        }
                        return !1
                    }(t.body) && (t.body = JSON.stringify(t.body)), t.teamId) {
                    let n = encodeURIComponent;
                    e = e.includes("?") ? `${e}&teamId=${n(t.teamId)}` : `${e}?teamId=${n(t.teamId)}`
                }
                return (0, r.Z)(e, { ...t,
                    wrapErrorsLegacy: !0,
                    throwOnHTTPError: !0
                })
            }
        },
        452134: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return i
                },
                j: function() {
                    return s
                }
            });
            var r = n(369487);

            function i(e) {
                return e && r.aU[e] ? r.Sg[r.aU[e]] : e && r.Sg[e] ? r.Sg[e] : null
            }

            function s(e) {
                let t;
                if ("string" != typeof e) return null;
                try {
                    t = JSON.parse(decodeURIComponent(e))
                } catch (e) {
                    return null
                }
                return t.message = i(t.code) || "Unknown error.", t
            }
        },
        272525: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return i
                },
                p: function() {
                    return r
                }
            });
            let r = {
                    general: {
                        name: "Team Name",
                        slug: "Team URL",
                        avatar: "Team Avatar",
                        previewDeploymentSuffix: "Preview Deployment Suffix",
                        id: "Team ID",
                        leaveTeam: "Leave Team",
                        deleteTeam: "Delete Team",
                        transfer: "Transfer"
                    },
                    billing: {
                        plan: "Plan",
                        paymentMethod: "Payment Method",
                        concurrentBuilds: "Concurrent Builds",
                        removeCaching: "Remove Caching",
                        invoiceEmailRecipient: "Invoice Email Recipient",
                        companyName: "Company Name",
                        billingAddress: "Billing Address",
                        invoiceLanguage: "Invoice Language",
                        invoicePurchaseOrder: "Invoice Purchase Order",
                        taxId: "Tax ID",
                        analyticsSampling: "Speed Insights Sampling",
                        monitoring: "Monitoring"
                    },
                    security: {
                        teamEmailDomain: "Team Email Domain",
                        auditLog: "Audit Log",
                        environmentVariablePolicy: "Environment Variable Policy",
                        samlSingleSignOn: "SAML Single Sign-On",
                        hideIpAddresses: "IP Address Visibility"
                    }
                },
                i = {
                    general: "General",
                    billing: "Billing",
                    invoices: "Invoices",
                    members: "Members",
                    security: "Security & Privacy",
                    notifications: "My Notifications",
                    environmentVariables: "Environment Variables",
                    webhooks: "Webhooks",
                    logDrains: "Log Drains",
                    secureCompute: "Secure Compute"
                }
        },
        585536: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return o
                }
            });
            var r = n(121123),
                i = n(517659),
                s = n(464287);
            async function o(e) {
                let {
                    user: t,
                    team: n
                } = e, o = n || t, a = {};
                n && (a.teamId = n.id);
                let l = `${r.Ms}/bitbucket/verify${(0,i.c)(a)}`,
                    c = await (0, s.Z)(l);
                return o.bitbucket = { ...c,
                    connected: c.verified && !c.disconnected
                }, o
            }
        },
        71805: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return s
                }
            });
            var r = n(464287),
                i = n(121123);
            async function s(e) {
                let t = await (0, r.Z)(`${i.OK}/github-token`, {
                    throwOnHTTPError: !0
                });
                return t.verified ? e.github = { ...t,
                    verified: !0
                } : e.github = {}, e
            }
        },
        275634: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return o
                }
            });
            var r = n(121123),
                i = n(517659),
                s = n(464287);
            async function o(e) {
                let {
                    user: t,
                    team: n
                } = e, o = n || t, a = {};
                n && (a.teamId = n.id);
                let l = `${r.Ms}/gitlab/verify${(0,i.c)(a)}`,
                    c = await (0, s.Z)(l);
                return o.gitlab = { ...c,
                    connected: c.verified && !c.disconnected
                }, o
            }
        },
        308718: function(e, t, n) {
            "use strict";
            n.d(t, {
                Iw: function() {
                    return c
                },
                ZP: function() {
                    return a
                }
            });
            var r = n(353729),
                i = n(58363),
                s = n(121123),
                o = n(517659);

            function a(e, t) {
                let {
                    provider: n
                } = e;
                return (0, r.ZP)(() => l({
                    provider: n
                }), e => (0, i.I)(e, {
                    throwOnHTTPError: !0
                }), t)
            }

            function l(e) {
                let {
                    provider: t
                } = e;
                return t ? `${s.Ms}/git-namespaces${(0,o.c)({provider:t})}` : ""
            }
            async function c(e) {
                let t = l({
                    provider: e
                });
                return (0, r.JG)(t, (0, i.I)(t, {
                    throwOnHTTPError: !0
                }), !1)
            }
        },
        178474: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var r = n(652983),
                i = n(353729),
                s = n(71805),
                o = n(275634),
                a = n(585536),
                l = n(270430),
                c = n(71299);

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "both",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    {
                        data: d,
                        mutate: u,
                        isLoggedOut: h
                    } = (0, c.a)(),
                    {
                        isTeam: g,
                        team: m,
                        mutate: f
                    } = (0, l.t7)(),
                    p = (0, r.useRef)(null),
                    v = (0, r.useRef)(!1),
                    x = null;
                g ? x = m : !1 === g && (x = d ? d.user : null), p.current = x;
                let {
                    data: j,
                    mutate: k
                } = (0, i.ZP)(() => `integration-data-${t}-${x.slug||x.uid}${n}`, () => (async function() {
                    let e = JSON.parse(JSON.stringify(p.current)),
                        {
                            membership: n
                        } = e,
                        r = !n || "OWNER" === n.role;
                    switch (t) {
                        case "github":
                            await (0, s.f)(e);
                            break;
                        case "gitlab":
                            await (0, o.O)({
                                user: g ? null : e,
                                team: g ? e : null
                            });
                            break;
                        case "bitbucket":
                            await (0, a.g)({
                                user: g ? null : e,
                                team: g ? e : null
                            });
                            break;
                        default:
                            await Promise.all([(0, s.f)(e), (0, a.g)({
                                user: g ? null : e,
                                team: g ? e : null
                            }), (0, o.O)({
                                user: g ? null : e,
                                team: g ? e : null
                            })])
                    }
                    return r || (e.notAllowed = !0), e
                })(), e);
                (0, r.useEffect)(() => {
                    v.current && x && (v.current = !1, k())
                }, [x, k]);
                let y = (0, r.useCallback)(async () => {
                    v.current = !0, g ? await f() : await u(), await k()
                }, [u, f, k, g]);
                return {
                    isTeam: g,
                    isLoggedOut: h,
                    account: j,
                    loading: void 0 === j && !h,
                    mutate: y
                }
            }
        },
        543031: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(353729),
                i = n(121123),
                s = n(58363),
                o = n(517659);

            function a(e, t) {
                let {
                    provider: n,
                    query: a,
                    namespaceId: l,
                    requireReauth: c,
                    s: d
                } = e;
                return (0, r.ZP)(() => c ? null : `${i.Ms}/search-repo${(0,o.c)({provider:n,query:a,namespaceId:l,s:d})}`, e => (0, s.I)(e, {
                    throwOnHTTPError: !1
                }), t)
            }
        },
        852390: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<circle cx="12" cy="12" r="10" fill="var(--geist-fill)"/><path d="M12 8v4" stroke="var(--geist-stroke)"/><path d="M12 16h.01" stroke="var(--geist-stroke)"/>', !0, {
                color: "var(--geist-warning)",
                secondary: "var(--geist-background)"
            })
        },
        35085: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>')
        },
        337343: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<circle cx="12" cy="12" r="10"/><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>')
        },
        509877: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"/>')
        },
        876802: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>')
        },
        166111: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>')
        },
        636319: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/>')
        },
        923753: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>')
        },
        391335: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>')
        },
        177360: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/>')
        },
        584065: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>')
        },
        969581: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>')
        },
        786726: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return i
                }
            });
            var r = n(521459);
            let i = (0, r.l)('<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5253 10.2634L8 13.8578L4.47471 10.2634C2.50843 8.25857 2.50843 4.99627 4.47471 2.99144C6.42507 1.00285 9.57493 1.00285 11.5253 2.99144C13.4916 4.99627 13.4916 8.25857 11.5253 10.2634ZM12.5962 11.3137L9.05051 14.9289L8 16L6.94949 14.9289L3.40381 11.3137C0.865397 8.72554 0.865399 4.52929 3.40381 1.94113C5.94222 -0.647042 10.0578 -0.647042 12.5962 1.94113C15.1346 4.52929 15.1346 8.72554 12.5962 11.3137ZM9 6.5C9 7.05228 8.55228 7.5 8 7.5C7.44772 7.5 7 7.05228 7 6.5C7 5.94772 7.44772 5.5 8 5.5C8.55228 5.5 9 5.94772 9 6.5ZM8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9Z" fill="currentColor"/>')
        },
        375201: function(e) {
            e.exports = {
                overlay: "cmdk_overlay__xMhMy",
                content: "cmdk_content__mMlTi",
                highlight: "cmdk_highlight___AJz_",
                badge: "cmdk_badge__9sTV3",
                input: "cmdk_input__LcX5a",
                item: "cmdk_item__kpqoP",
                frameworkIcon: "cmdk_frameworkIcon__C_Xj0",
                rendered: "cmdk_rendered__SaUsz",
                shake: "cmdk_shake__zwvUS",
                loading: "cmdk_loading__rw0wC",
                inputLine: "cmdk_inputLine__mlczi",
                createdAt: "cmdk_createdAt__Ge7JC",
                itemDocs: "cmdk_itemDocs__F3Ip1",
                prefix: "cmdk_prefix__fmNrP",
                gitLogo: "cmdk_gitLogo__1yRys",
                suffix: "cmdk_suffix___owQC",
                group: "cmdk_group__hL_nH",
                gitMeta: "cmdk_gitMeta__ebOV8",
                resultsInfo: "cmdk_resultsInfo__zFn6E",
                noResults: "cmdk_noResults__mdald"
            }
        },
        221726: function(e) {
            e.exports = {
                searchResTitle: "search-result-item_searchResTitle__RLMIR",
                searchSnippet: "search-result-item_searchSnippet__yLMsP"
            }
        },
        366567: function(e, t, n) {
            var r, i;
            void 0 !== (i = "function" == typeof(r = function() {
                var e, t, n, r = {};
                r.version = "0.2.0";
                var i = r.settings = {
                    minimum: .08,
                    easing: "ease",
                    positionUsing: "",
                    speed: 200,
                    trickle: !0,
                    trickleRate: .02,
                    trickleSpeed: 800,
                    showSpinner: !0,
                    barSelector: '[role="bar"]',
                    spinnerSelector: '[role="spinner"]',
                    parent: "body",
                    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                };

                function s(e, t, n) {
                    return e < t ? t : e > n ? n : e
                }
                r.configure = function(e) {
                    var t, n;
                    for (t in e) void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (i[t] = n);
                    return this
                }, r.status = null, r.set = function(e) {
                    var t = r.isStarted();
                    e = s(e, i.minimum, 1), r.status = 1 === e ? null : e;
                    var n = r.render(!t),
                        l = n.querySelector(i.barSelector),
                        c = i.speed,
                        d = i.easing;
                    return n.offsetWidth, o(function(t) {
                        var s, o;
                        "" === i.positionUsing && (i.positionUsing = r.getPositioningCSS()), a(l, (s = e, (o = "translate3d" === i.positionUsing ? {
                            transform: "translate3d(" + (-1 + s) * 100 + "%,0,0)"
                        } : "translate" === i.positionUsing ? {
                            transform: "translate(" + (-1 + s) * 100 + "%,0)"
                        } : {
                            "margin-left": (-1 + s) * 100 + "%"
                        }).transition = "all " + c + "ms " + d, o)), 1 === e ? (a(n, {
                            transition: "none",
                            opacity: 1
                        }), n.offsetWidth, setTimeout(function() {
                            a(n, {
                                transition: "all " + c + "ms linear",
                                opacity: 0
                            }), setTimeout(function() {
                                r.remove(), t()
                            }, c)
                        }, c)) : setTimeout(t, c)
                    }), this
                }, r.isStarted = function() {
                    return "number" == typeof r.status
                }, r.start = function() {
                    r.status || r.set(0);
                    var e = function() {
                        setTimeout(function() {
                            r.status && (r.trickle(), e())
                        }, i.trickleSpeed)
                    };
                    return i.trickle && e(), this
                }, r.done = function(e) {
                    return e || r.status ? r.inc(.3 + .5 * Math.random()).set(1) : this
                }, r.inc = function(e) {
                    var t = r.status;
                    return t ? ("number" != typeof e && (e = (1 - t) * s(Math.random() * t, .1, .95)), t = s(t + e, 0, .994), r.set(t)) : r.start()
                }, r.trickle = function() {
                    return r.inc(Math.random() * i.trickleRate)
                }, e = 0, t = 0, r.promise = function(n) {
                    return n && "resolved" !== n.state() && (0 === t && r.start(), e++, t++, n.always(function() {
                        0 == --t ? (e = 0, r.done()) : r.set((e - t) / e)
                    })), this
                }, r.render = function(e) {
                    if (r.isRendered()) return document.getElementById("nprogress");
                    c(document.documentElement, "nprogress-busy");
                    var t = document.createElement("div");
                    t.id = "nprogress", t.innerHTML = i.template;
                    var n, s, o = t.querySelector(i.barSelector),
                        l = e ? "-100" : (-1 + (r.status || 0)) * 100,
                        d = document.querySelector(i.parent);
                    return a(o, {
                        transition: "all 0 linear",
                        transform: "translate3d(" + l + "%,0,0)"
                    }), !i.showSpinner && (s = t.querySelector(i.spinnerSelector)) && h(s), d != document.body && c(d, "nprogress-custom-parent"), d.appendChild(t), t
                }, r.remove = function() {
                    d(document.documentElement, "nprogress-busy"), d(document.querySelector(i.parent), "nprogress-custom-parent");
                    var e = document.getElementById("nprogress");
                    e && h(e)
                }, r.isRendered = function() {
                    return !!document.getElementById("nprogress")
                }, r.getPositioningCSS = function() {
                    var e = document.body.style,
                        t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
                    return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
                };
                var o = (n = [], function(e) {
                        n.push(e), 1 == n.length && function e() {
                            var t = n.shift();
                            t && t(e)
                        }()
                    }),
                    a = function() {
                        var e = ["Webkit", "O", "Moz", "ms"],
                            t = {};

                        function n(n, r, i) {
                            var s;
                            r = t[s = (s = r).replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
                                return t.toUpperCase()
                            })] || (t[s] = function(t) {
                                var n = document.body.style;
                                if (t in n) return t;
                                for (var r, i = e.length, s = t.charAt(0).toUpperCase() + t.slice(1); i--;)
                                    if ((r = e[i] + s) in n) return r;
                                return t
                            }(s)), n.style[r] = i
                        }
                        return function(e, t) {
                            var r, i, s = arguments;
                            if (2 == s.length)
                                for (r in t) void 0 !== (i = t[r]) && t.hasOwnProperty(r) && n(e, r, i);
                            else n(e, s[1], s[2])
                        }
                    }();

                function l(e, t) {
                    return ("string" == typeof e ? e : u(e)).indexOf(" " + t + " ") >= 0
                }

                function c(e, t) {
                    var n = u(e),
                        r = n + t;
                    l(n, t) || (e.className = r.substring(1))
                }

                function d(e, t) {
                    var n, r = u(e);
                    l(e, t) && (n = r.replace(" " + t + " ", " "), e.className = n.substring(1, n.length - 1))
                }

                function u(e) {
                    return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
                }

                function h(e) {
                    e && e.parentNode && e.parentNode.removeChild(e)
                }
                return r
            }) ? r.call(t, n, t, e) : r) && (e.exports = i)
        }
    }
]);