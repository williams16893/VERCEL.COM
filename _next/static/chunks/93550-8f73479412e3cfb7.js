(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [93550], {
        325402: function(e, t, n) {
            "use strict";
            n.d(t, {
                bv: function() {
                    return o
                },
                wu: function() {
                    return c
                }
            });
            var r = n(397458),
                i = n(652983),
                a = n(628987),
                l = n(470264);
            let s = (0, i.createContext)(null);

            function o(e) {
                let {
                    children: t,
                    type: n = "page"
                } = e, [o, c] = (0, i.useState)(Object.fromEntries(l.u.map(e => [e.name, e.default]))), [d, u] = (0, i.useState)(!0), h = (0, a.useSearchParams)(), f = (0, a.useRouter)(), m = (0, a.usePathname)(), [, p] = (0, i.useTransition)(), x = (0, i.useMemo)(() => e => {
                    if (!m || !h) return;
                    let t = Object.entries(e).reduce((e, t) => {
                            let [n, r] = t;
                            for (let t of r)("status" !== n || t !== l.b) && ("group" !== n || "none" !== t) && ("q" !== n || 0 !== t.length) && e.push([n, t]);
                            return e
                        }, []),
                        n = new URLSearchParams(t);
                    p(() => {
                        f.replace(`${m}?${n.toString()}`)
                    })
                }, [m, f, h]), v = (0, i.useMemo)(() => e => {
                    let {
                        value: t,
                        replace: r = !1,
                        filter: i
                    } = e, a = e => {
                        let t = { ...o,
                            [i]: e
                        };
                        c(t), "page" === n && x(t)
                    }, l = o[i];
                    if (r) {
                        a([t]);
                        return
                    }
                    a(l.includes(t) ? l.filter(e => e !== t) : [t, ...l])
                }, [o, c, x, n]), g = (0, i.useMemo)(() => e => {
                    let t = Array.isArray(e) ? e : [e],
                        r = Object.fromEntries(t.map(e => {
                            var t;
                            return [e, (null === (t = l.u.find(t => t.name === e)) || void 0 === t ? void 0 : t.default) ? ? []]
                        })),
                        i = { ...o,
                            ...r
                        };
                    c(i), "page" === n && x(i)
                }, [o, x, n]), j = (0, i.useMemo)(() => () => {
                    let e = Object.fromEntries(l.u.map(e => "group" === e.name ? ["group", o.group] : [e.name, e.default]));
                    c(e), "page" === n && x(e)
                }, [x, n, o.group]), _ = (0, i.useCallback)(e => e ? "status" === e ? o[e][0] !== l.b : "page" === e ? o[e].length > 0 || o.pageRegex.length > 0 : o[e].length > 0 : o.author.length > 0 || o.status.length > 0 && o.status[0] !== l.b || o.project.length > 0 || o.page.length > 0 || o.pageRegex.length > 0 || o.branch.length > 0, [o]), b = (0, i.useMemo)(() => ({
                    filterValues: o,
                    toggleValue: v,
                    clearFilter: g,
                    clearAllFilters: j,
                    hasSelectedFilters: _
                }), [o, v, g, j, _]);
                return (0, i.useEffect)(() => {
                    "modal" !== n && d && (u(!1), c(Object.fromEntries(l.u.map(e => {
                        if ("status" === e.name) {
                            let t = null == h ? void 0 : h.get(e.name);
                            if (t && ["unresolved", "resolved"].includes(t)) return [e.name, [t]]
                        } else if ("group" === e.name) {
                            let t = null == h ? void 0 : h.get(e.name);
                            if (t && ["author", "status", "project"].includes(t)) return [e.name, [t]]
                        } else if ("q" === e.name) {
                            let t = null == h ? void 0 : h.get(e.name);
                            if (t) return [e.name, [t]]
                        } else {
                            let t = null == h ? void 0 : h.getAll(e.name);
                            if (t && t.length > 0) {
                                let n = [...new Set(t.filter(e => e.length > 0))];
                                return [e.name, n]
                            }
                        }
                        return [e.name, e.default]
                    }))))
                }, [d, h, c, n]), (0, r.jsx)(s.Provider, {
                    value: b,
                    children: t
                })
            }

            function c() {
                let e = (0, i.useContext)(s);
                if (null === e) throw Error("useCommentFilters must be used inside a DiscussionFilterContext.Provider");
                return e
            }
        },
        470264: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return r
                },
                u: function() {
                    return i
                }
            });
            let r = "unresolved",
                i = [{
                    name: "author",
                    default: []
                }, {
                    name: "status",
                    default: [r]
                }, {
                    name: "project",
                    default: []
                }, {
                    name: "page",
                    default: []
                }, {
                    name: "pageRegex",
                    default: []
                }, {
                    name: "branch",
                    default: []
                }, {
                    name: "group",
                    default: ["none"]
                }, {
                    name: "q",
                    default: []
                }]
        },
        314988: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return a
                }
            });
            var r = n(210699),
                i = n(930768);

            function a() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "enable-comments-view",
                    {
                        account: t,
                        isLoading: n
                    } = (0, r.Z)(),
                    {
                        data: a
                    } = (0, i.g)(e);
                return "boolean" == typeof a && !n && !!t && a && "off" !== t.enablePreviewFeedback
            }
        },
        805152: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NotificationsPopover: function() {
                    return nK
                },
                NotificationsProvider: function() {
                    return nR
                }
            });
            var r = n(397458),
                i = n(652983),
                a = n(197788),
                l = n(325402);
            let s = (0, i.createContext)(null);

            function o(e) {
                let {
                    children: t
                } = e, [n, a] = (0, i.useState)(null), l = (0, i.useMemo)(() => ({
                    thread: n,
                    selectThread: a,
                    clearSelectedThread: () => a(null)
                }), [n]);
                return (0, r.jsx)(s.Provider, {
                    value: l,
                    children: t
                })
            }

            function c() {
                let e = (0, i.useContext)(s);
                if (null === e) throw Error("useSelectedComment must be used inside a SelectedCommentContext.Provider");
                return e
            }
            var d = n(736366),
                u = n(426476),
                h = n(195269),
                f = n(118960);

            function m() {
                let {
                    resolvedTheme: e
                } = (0, h.F)(), t = (0, f.Z)();
                return (0, r.jsxs)("svg", {
                    fill: "none",
                    height: "36",
                    opacity: e ? 1 : 0,
                    viewBox: "0 0 36 36",
                    width: "36",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("rect", {
                        fill: t ? "#F0FDF4" : "#071D10",
                        height: "35",
                        rx: "17.5",
                        width: "35",
                        x: "0.5",
                        y: "0.5"
                    }), (0, r.jsx)("g", {
                        clipPath: "url(#clip0_798_8657)",
                        children: (0, r.jsx)("path", {
                            d: "M14.6667 17.8809L16.75 19.9643L21.2143 15.5M26.3333 18C26.3333 22.6024 22.6024 26.3333 18 26.3333C13.3976 26.3333 9.66666 22.6024 9.66666 18C9.66666 13.3976 13.3976 9.66666 18 9.66666C22.6024 9.66666 26.3333 13.3976 26.3333 18Z",
                            stroke: t ? "#0D883B" : "#86EFAC",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5"
                        })
                    }), (0, r.jsx)("rect", {
                        height: "35",
                        rx: "17.5",
                        stroke: t ? "#DCFCE7" : "#0D3B1E",
                        width: "35",
                        x: "0.5",
                        y: "0.5"
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsx)("clipPath", {
                            id: "clip0_798_8657",
                            children: (0, r.jsx)("rect", {
                                fill: "white",
                                height: "20",
                                transform: "translate(8 8)",
                                width: "20"
                            })
                        })
                    })]
                })
            }

            function p() {
                let {
                    resolvedTheme: e
                } = (0, h.F)(), t = (0, f.Z)(), n = t ? "#BD5200" : "#FDE68A";
                return (0, r.jsxs)("svg", {
                    fill: "none",
                    height: "36",
                    opacity: e ? 1 : 0,
                    viewBox: "0 0 36 36",
                    width: "36",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("rect", {
                        fill: t ? "#FFFBEB" : "#241005",
                        height: "35",
                        rx: "17.5",
                        width: "35",
                        x: "0.5",
                        y: "0.5"
                    }), (0, r.jsxs)("g", {
                        clipPath: "url(#clip0_798_8667)",
                        children: [(0, r.jsx)("path", {
                            d: "M16.575 11.2167L9.51665 23C9.37113 23.252 9.29413 23.5377 9.29331 23.8288C9.2925 24.1198 9.3679 24.4059 9.51201 24.6588C9.65612 24.9116 9.86392 25.1223 10.1147 25.2699C10.3656 25.4174 10.6507 25.4968 10.9417 25.5H25.0583C25.3493 25.4968 25.6344 25.4174 25.8852 25.2699C26.136 25.1223 26.3439 24.9116 26.488 24.6588C26.6321 24.4059 26.7075 24.1198 26.7067 23.8288C26.7058 23.5377 26.6288 23.252 26.4833 23L19.425 11.2167C19.2764 10.9717 19.0673 10.7693 18.8176 10.6287C18.568 10.4882 18.2864 10.4144 18 10.4144C17.7135 10.4144 17.4319 10.4882 17.1823 10.6287C16.9327 10.7693 16.7235 10.9717 16.575 11.2167V11.2167Z",
                            stroke: n,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5"
                        }), (0, r.jsx)("path", {
                            d: "M18 22.1667H18.0083",
                            stroke: n,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5"
                        }), (0, r.jsx)("path", {
                            d: "M18 15.5V18.8333",
                            stroke: n,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5"
                        })]
                    }), (0, r.jsx)("rect", {
                        height: "35",
                        rx: "17.5",
                        stroke: t ? "#FEF3C7" : "#411D06",
                        width: "35",
                        x: "0.5",
                        y: "0.5"
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsx)("clipPath", {
                            id: "clip0_798_8667",
                            children: (0, r.jsx)("rect", {
                                fill: "white",
                                height: "20",
                                transform: "translate(8 8)",
                                width: "20"
                            })
                        })
                    })]
                })
            }

            function x() {
                let {
                    resolvedTheme: e
                } = (0, h.F)(), t = (0, f.Z)(), n = t ? "#D00505" : "#FCA5A5";
                return (0, r.jsxs)("svg", {
                    fill: "none",
                    height: "36",
                    opacity: e ? 1 : 0,
                    viewBox: "0 0 36 36",
                    width: "36",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("rect", {
                        fill: t ? "#FEF2F2" : "#2A0909",
                        height: "35",
                        rx: "17.5",
                        width: "35",
                        x: "0.5",
                        y: "0.5"
                    }), (0, r.jsx)("path", {
                        d: "M23.8333 10.5H12.1667C11.2462 10.5 10.5 11.2462 10.5 12.1667V23.8333C10.5 24.7538 11.2462 25.5 12.1667 25.5H23.8333C24.7538 25.5 25.5 24.7538 25.5 23.8333V12.1667C25.5 11.2462 24.7538 10.5 23.8333 10.5Z",
                        stroke: n,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5"
                    }), (0, r.jsx)("path", {
                        d: "M15.5 15.5L20.5 20.5",
                        stroke: n,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5"
                    }), (0, r.jsx)("path", {
                        d: "M20.5 15.5L15.5 20.5",
                        stroke: n,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5"
                    }), (0, r.jsx)("rect", {
                        height: "35",
                        rx: "17.5",
                        stroke: t ? "#FEE2E2" : "#450C0C",
                        width: "35",
                        x: "0.5",
                        y: "0.5"
                    })]
                })
            }

            function v() {
                let {
                    resolvedTheme: e
                } = (0, h.F)(), t = (0, f.Z)(), n = t ? "#666666" : "#888888";
                return (0, r.jsxs)("svg", {
                    fill: "none",
                    height: "36",
                    opacity: e ? 1 : 0,
                    viewBox: "0 0 36 36",
                    width: "36",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("rect", {
                        fill: t ? "#FAFAFA" : "#111111",
                        height: "35",
                        rx: "17.5",
                        width: "35",
                        x: "0.5",
                        y: "0.5"
                    }), (0, r.jsxs)("g", {
                        clipPath: "url(#clip0_1415_8585)",
                        children: [(0, r.jsx)("path", {
                            d: "M18 26.3333C22.6024 26.3333 26.3334 22.6024 26.3334 18C26.3334 13.3976 22.6024 9.66666 18 9.66666C13.3976 9.66666 9.66669 13.3976 9.66669 18C9.66669 22.6024 13.3976 26.3333 18 26.3333Z",
                            stroke: n,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5"
                        }), (0, r.jsx)("path", {
                            d: "M18 21.3333V18",
                            stroke: n,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5"
                        }), (0, r.jsx)("path", {
                            d: "M18 14.6667H18.0083",
                            stroke: n,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5"
                        })]
                    }), (0, r.jsx)("rect", {
                        height: "35",
                        rx: "17.5",
                        stroke: t ? "#EAEAEA" : "#333333",
                        width: "35",
                        x: "0.5",
                        y: "0.5"
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsx)("clipPath", {
                            id: "clip0_1415_8585",
                            children: (0, r.jsx)("rect", {
                                fill: "white",
                                height: "20",
                                transform: "translate(8 8)",
                                width: "20"
                            })
                        })
                    })]
                })
            }
            var g = n(174944),
                j = n.n(g);

            function _(e) {
                return !!e && e.startsWith("team_")
            }
            var b = n(921949),
                w = n(270430),
                y = n(556524);

            function C(e) {
                return 0 === e ? "g0" : e <= 1 * Number(16) ? "g1" : e <= 2 * Number(16) ? "g2" : e <= 3 * Number(16) ? "g3" : e <= 4 * Number(16) ? "g4" : "gx"
            }
            var k = n(14517),
                N = n(132950),
                I = n(891235),
                z = n.n(I);

            function M(e) {
                let {
                    children: t,
                    direction: n = "column",
                    className: i,
                    border: a,
                    borderBetween: l,
                    secondary: s,
                    hoverable: o,
                    shadow: c,
                    rounded: d = !0,
                    ...u
                } = e;
                return (0, r.jsx)(N.K, { ...u,
                    className: (0, k.W)(z().card, {
                        [z().border || ""]: a,
                        [z().borderBetweenHorizontal || ""]: l && "row" === n,
                        [z().borderBetweenVertical || ""]: l && "column" === n,
                        [z().secondary || ""]: s,
                        [z().hoverable || ""]: o,
                        [z().shadow || ""]: c,
                        [z().rounded || ""]: d
                    }, i),
                    direction: n,
                    children: t
                })
            }
            var E = n(121446),
                S = n(713489),
                T = n(387644);

            function A(e) {
                let {
                    color: t,
                    ...n
                } = e;
                return (0, r.jsx)(E.x, {
                    color: "accents-6" === t ? "gray-900" : t,
                    ...n
                })
            }
            var P = n(963883),
                $ = n(71299);

            function L(e) {
                return (0, r.jsx)(A, { ...e,
                    style: {
                        overflow: "hidden",
                        overflowWrap: "anywhere",
                        whiteSpace: "pre-wrap"
                    }
                })
            }

            function F(e) {
                let {
                    body: t
                } = e, {
                    user: n
                } = (0, $.a)();
                return (0, r.jsx)(P.B, {
                    components: {
                        Text: L
                    },
                    userId: null == n ? void 0 : n.uid,
                    children: (0, r.jsx)(P.f, {
                        body: t
                    })
                })
            }
            var R = n(819336),
                B = n.n(R),
                K = n(908103);

            function O(e) {
                let {
                    timestamp: t
                } = e, n = (0, K.R)(t, {
                    suffix: ""
                });
                return n
            }

            function H(e) {
                let {
                    image: t
                } = e, n = `https://vercel.live/_next/image?url=${encodeURIComponent(`/api/feedback/blob/get${t.id}`)}&w=256&q=75`;
                return (0, r.jsx)("img", {
                    alt: t.filename,
                    className: B().image,
                    height: "200",
                    src: n,
                    width: "200"
                })
            }

            function D(e) {
                let {
                    images: t
                } = e;
                return t && 0 !== t.length ? (0, r.jsx)(N.K, {
                    className: B().imageContainer,
                    direction: "row",
                    gap: 2,
                    children: t.map(e => (0, r.jsx)(H, {
                        image: e
                    }, e.id))
                }) : null
            }
            var W = n(767045),
                q = n(430704),
                U = n(328820),
                Z = n(390848),
                G = n(779039),
                V = n(467662);

            function X(e) {
                let {
                    thread: t
                } = e;
                return (0, r.jsxs)(G.F, {
                    position: "bottom-end",
                    children: [(0, r.jsx)(Z.j, {
                        "aria-label": "Comment menu",
                        size: "tiny",
                        style: {
                            padding: 0
                        },
                        svgOnly: !0,
                        type: "tertiary",
                        children: (0, r.jsx)(W.y, {
                            color: "var(--ds-gray-900)",
                            size: 16
                        })
                    }), (0, r.jsx)(U.v, {
                        width: 256,
                        children: (0, r.jsx)(V.s, {
                            onClick: () => {
                                if (!t.href) return;
                                let e = new URL(t.href);
                                e.searchParams.append("vercelThreadId", t.id), navigator.clipboard.writeText(e.toString())
                            },
                            prefix: (0, r.jsx)(q.m, {}),
                            children: "Copy Link"
                        })
                    })]
                })
            }
            var J = n(320909),
                Y = n.n(J),
                Q = n(957717),
                ee = n(489035),
                et = n.n(ee);

            function en(e) {
                var t;
                let {
                    thread: n
                } = e, i = Y()(n.userAgent);
                return (0, r.jsx)("table", {
                    children: (0, r.jsxs)("tbody", {
                        children: [(0, r.jsxs)("tr", {
                            children: [(0, r.jsx)("th", {
                                children: "Browser"
                            }), (0, r.jsxs)("td", {
                                children: [i.browser.name || "Unknown Browser", " ", (null === (t = i.browser.version) || void 0 === t ? void 0 : t.replace(/(?:.0)+$/, "")) || ""]
                            })]
                        }), (0, r.jsxs)("tr", {
                            children: [(0, r.jsx)("th", {
                                children: "OS"
                            }), (0, r.jsxs)("td", {
                                children: [i.os.name || "Unknown operating system", " ", i.os.version || ""]
                            })]
                        }), n.screenWidth && n.screenHeight && n.devicePixelRatio ? (0, r.jsxs)("tr", {
                            children: [(0, r.jsx)("th", {
                                children: "Window size"
                            }), (0, r.jsxs)("td", {
                                children: [n.screenWidth, "x", n.screenHeight]
                            })]
                        }) : null, n.devicePixelRatio && n.devicePixelRatio > 1 ? (0, r.jsxs)("tr", {
                            children: [(0, r.jsx)("th", {
                                children: "Device pixel ratio"
                            }), (0, r.jsx)("td", {
                                children: n.devicePixelRatio
                            })]
                        }) : null, n.deploymentUrl ? (0, r.jsxs)("tr", {
                            children: [(0, r.jsx)("th", {
                                children: "Deployment"
                            }), (0, r.jsx)("td", {
                                children: (0, r.jsx)("a", {
                                    href: `https://${n.deploymentUrl}${n.page||""}#thread-id=${encodeURIComponent(n.id)}`,
                                    rel: "noreferrer",
                                    style: {
                                        color: "var(--geist-foreground)"
                                    },
                                    target: "_blank",
                                    children: n.deploymentUrl
                                })
                            })]
                        }) : null]
                    })
                })
            }

            function er(e) {
                let {
                    align: t = "auto",
                    children: n,
                    thread: i,
                    position: a = "top"
                } = e;
                return (0, r.jsx)(Q.u, {
                    boxAlign: t,
                    maxWidth: "none",
                    position: a,
                    text: (0, r.jsx)(en, {
                        thread: i
                    }),
                    tooltipClassName: et().metadataTooltip,
                    tooltipStyle: "left" === t ? {
                        transform: "translate(calc(-10% + 8px), calc(-100% - 10px))"
                    } : {},
                    children: n
                })
            }
            var ei = n(353729),
                ea = n(532870),
                el = n(121123),
                es = n(517659),
                eo = n(58363);
            let ec = {
                author: function(e) {
                    return e.flatMap(e => e.users)
                },
                branch: function(e) {
                    return e.flatMap(e => e.branches)
                },
                page: function(e) {
                    return e.flatMap(e => e.pages)
                },
                project: function(e) {
                    return e.flatMap(e => e.projects)
                }
            };
            var ed = n(636615);
            let eu = [{
                    value: "all",
                    label: "All"
                }, {
                    value: "resolved",
                    label: "Resolved"
                }, {
                    value: "unresolved",
                    label: "Unresolved"
                }],
                eh = e => (0, eo.I)(e, {
                    throwOnHTTPError: !0
                });

            function ef(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        isReady: r,
                        team: a
                    } = (0, w.t7)(),
                    l = (0, ea.ZP)((t, n) => {
                        let {
                            type: i,
                            ...l
                        } = e;
                        if (!r || 0 === e.limit || n && !n.pagination.next || "status" === i || "project" === i) return null;
                        let s = "users";
                        return "branch" === i && (s = "branches"), "page" === i && (s = "pages"), "projectsWithComments" === i && (s = "projects"), `${el.qJ}/${s}${(0,es.c)({teamId:null==a?void 0:a.id,...l,offset:null==n?void 0:n.pagination.next})}`
                    }, eh, n),
                    [s, o] = (0, ed.xk)({
                        fetchEnabled: "project" === e.type,
                        search: "project" === e.type ? e.q : "",
                        limit: e.limit
                    }, void 0, void 0, !0),
                    c = (0, i.useMemo)(() => "status" === e.type ? eu : "project" === e.type ? o.projects : "projectsWithComments" === e.type ? l.data ? ec.project(l.data) : [] : "author" === e.type ? l.data ? ec.author(l.data) : [] : "branch" === e.type ? l.data ? ec.branch(l.data) : [] : l.data ? ec.page(l.data) : [], [e.type, l.data, o.projects]),
                    d = "project" === e.type ? o.initialDataLoaded : !!l.data,
                    u = "project" === e.type ? o.isEmpty : d && 0 === c.length,
                    h = "project" === e.type ? o.loadMore : () => l.setSize(e => e + 1),
                    f = "project" === e.type ? s.isLoading : l.isLoading,
                    m = "project" === e.type ? o.isLoadingMore : d && l.data && l.size > l.data.length,
                    p = "project" === e.type ? o.isReachingEnd : d && l.data && !(null === (t = l.data[l.data.length - 1]) || void 0 === t ? void 0 : t.pagination.next);
                return {
                    items: c,
                    isLoading: f,
                    initialDataLoaded: d,
                    isEmpty: u,
                    loadMore: h,
                    isLoadingMore: m,
                    isReachingEnd: p
                }
            }

            function em(e) {
                let {
                    type: t,
                    limit: n = 10,
                    teamId: r
                } = e;
                if ("status" === t) return;
                if ("project" === t) {
                    (0, ed.uS)({
                        limit: n
                    }, r ? ? null);
                    return
                }
                let i = "users";
                "branch" === t && (i = "branches"), "page" === t && (i = "pages"), "projectsWithComments" === t && (i = "projects");
                let a = `${el.qJ}/${i}${(0,es.c)({teamId:r,limit:n,authorsOnly:"author"===t?1:void 0})}`;
                (0, ei.MA)(a, eh)
            }
            var ep = n(966703),
                ex = n.n(ep);

            function ev(e) {
                let {
                    reaction: t
                } = e;
                return (0, r.jsxs)(N.K, {
                    align: "center",
                    className: ex().reactionPill,
                    direction: "row",
                    gap: 1,
                    paddingX: 1.5,
                    children: [t.url ? (0, r.jsx)("img", {
                        alt: t.name,
                        className: ex().customReaction,
                        height: 16,
                        src: t.url,
                        width: 16
                    }) : (0, r.jsx)(E.x, {
                        as: "span",
                        children: t.emoji
                    }), (0, r.jsx)(E.x, {
                        size: 12,
                        children: t.users.length
                    })]
                })
            }

            function eg(e) {
                let {
                    reaction: t
                } = e, {
                    items: n
                } = ef({
                    type: "author",
                    limit: t.users.length,
                    userId: t.users
                });
                if (0 === n.length) return (0, r.jsx)(ev, {
                    reaction: t
                });
                let i = n.map(e => e.username.length > 25 ? `${e.username.slice(0,24)}...` : e.username),
                    a = 1 === i.length ? i[0] : `${i.slice(0,-1).join(", ")}${i.length>2?",":""} and ${i[i.length-1]}`;
                return (0, r.jsx)(Q.u, {
                    text: (0, r.jsxs)(E.x, {
                        children: [(0, r.jsx)(E.x, {
                            as: "span",
                            weight: 600,
                            children: a
                        }), " ", (0, r.jsxs)(E.x, {
                            as: "span",
                            children: ["reacted with :", t.name, ":"]
                        })]
                    }),
                    children: (0, r.jsx)(ev, {
                        reaction: t
                    })
                })
            }

            function ej(e) {
                let {
                    reactions: t
                } = e;
                return t && 0 !== t.length ? (0, r.jsx)(N.K, {
                    align: "center",
                    direction: "row",
                    gap: 2,
                    children: t.map(e => (0, r.jsx)(eg, {
                        reaction: e
                    }, e.name))
                }) : null
            }
            var e_ = n(696855),
                eb = n(840905),
                ew = n(696102),
                ey = n.n(ew);

            function eC(e) {
                var t;
                let n, {
                    thread: i,
                    source: a = "dashboard"
                } = e;
                return i.threadUrl && (n = new URL(i.threadUrl)).searchParams.set("via", a), (0, r.jsx)(e_.r, {
                    href: null === (t = n) || void 0 === t ? void 0 : t.toString(),
                    rel: "noreferrer",
                    target: "_blank",
                    children: (0, r.jsxs)(M, {
                        border: !0,
                        className: ey().link,
                        gap: 1,
                        paddingX: 4,
                        paddingY: 3,
                        children: [i.pageTitle && i.pageTitle.length > 0 ? (0, r.jsxs)(N.K, {
                            align: "flex-start",
                            direction: "row",
                            gap: 2,
                            children: [(0, r.jsx)(E.x, {
                                weight: 500,
                                children: i.pageTitle
                            }), (0, r.jsx)(eb.d, {
                                color: "var(--ds-gray-900)",
                                size: 16,
                                weight: "bold"
                            })]
                        }) : null, (0, r.jsx)(E.x, {
                            as: "span",
                            color: "gray-900",
                            size: 12,
                            truncate: !0,
                            children: function(e) {
                                let t = e.replace(/^\/\//, "/");
                                if (t.length < 40) return t;
                                let {
                                    pathname: n
                                } = new URL(t, origin);
                                return n
                            }(i.page)
                        })]
                    })
                })
            }

            function ek(e) {
                let {
                    thread: t,
                    idx: n,
                    source: i
                } = e, a = t.comments[n];
                return (0, r.jsxs)(N.K, {
                    className: (0, k.W)({
                        [B().resolved]: t.resolved
                    }),
                    gap: 4,
                    padding: 5,
                    children: [(0, r.jsxs)(N.K, {
                        gap: 2,
                        children: [(0, r.jsxs)(N.K, {
                            align: "center",
                            direction: "row",
                            gap: 1.5,
                            justify: "space-between",
                            children: [(0, r.jsxs)(N.K, {
                                align: "center",
                                direction: "row",
                                gap: 1.5,
                                children: [(0, r.jsx)(u.qE, {
                                    size: 20,
                                    username: a.author.username
                                }), (0, r.jsx)(E.x, {
                                    as: "span",
                                    truncate: !0,
                                    weight: 500,
                                    children: a.author.username
                                }), 0 === n ? (0, r.jsx)(er, {
                                    position: "bottom",
                                    thread: t,
                                    children: /Mobi/i.test(t.userAgent || "") ? (0, r.jsx)(T.r, {
                                        color: "var(--ds-gray-900)",
                                        size: 16
                                    }) : (0, r.jsx)(S.u, {
                                        color: "var(--ds-gray-900)",
                                        size: 16
                                    })
                                }) : null, (0, r.jsx)(E.x, {
                                    as: "span",
                                    color: "gray-900",
                                    size: 12,
                                    children: (0, r.jsx)(O, {
                                        timestamp: a.timestamp
                                    })
                                })]
                            }), 0 !== n ? (0, r.jsx)(X, {
                                thread: t
                            }) : null]
                        }), (0, r.jsx)(F, {
                            body: a.body
                        })]
                    }), (0, r.jsx)(D, {
                        images: a.images
                    }), 0 === n ? (0, r.jsx)(eC, {
                        source: i,
                        thread: t
                    }) : null, (0, r.jsx)(ej, {
                        reactions: a.reactions
                    })]
                })
            }

            function eN(e) {
                let {
                    thread: t,
                    className: n,
                    source: i,
                    ...a
                } = e;
                return (0, r.jsx)(M, {
                    border: !0,
                    borderBetween: !0,
                    className: n,
                    style: {
                        backgroundColor: "var(--ds-background-100)",
                        boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.04)"
                    },
                    ...a,
                    children: t.comments.map((e, n) => (0, r.jsx)(ek, {
                        idx: n,
                        source: i,
                        thread: t
                    }, e.id))
                })
            }
            var eI = n(34280),
                ez = n(513323),
                eM = n(768244),
                eE = n(792259),
                eS = n(240413),
                eT = n(628987),
                eA = n(730672),
                eP = n(49765),
                e$ = n(694752),
                eL = n(624102),
                eF = n(684874);
            let eR = (e, t) => t.ts < e.ts || !["stable", "shown"].includes(t.type) ? e : { ...e,
                    [t.type]: t.value,
                    ts: t.ts
                },
                eB = {
                    ts: 0,
                    stable: 0,
                    shown: 0
                },
                eK = [.1, .3, .5, .6, .8, 1].map(function(e) {
                    return 1 - Math.pow(1 - e, 3)
                }),
                eO = (e, t, n) => e === t ? [] : eK.map((r, i) => {
                    let a = Math.round(t + (e - t) * r);
                    if (a !== e || i === eK.length - 1) return setTimeout(() => requestAnimationFrame(() => n({
                        value: a,
                        type: "shown",
                        ts: Date.now()
                    })), 50 + 100 * i)
                });
            var eH = n(791688),
                eD = n(342372),
                eW = n.n(eD);
            let eq = (0, i.forwardRef)(function(e, t) {
                    let {
                        unseen: n,
                        disabled: l,
                        disableMotion: s,
                        children: o,
                        onOpenChange: c,
                        ...d
                    } = e, u = (0, eT.usePathname)(), h = (0, i.useContext)(a.uj), f = !!(null == h ? void 0 : h.hasOpened), {
                        focusProps: m,
                        isFocusVisible: p
                    } = (0, eM.Fx)(), {
                        hoverProps: x,
                        isHovered: v
                    } = (0, eE.XI)({
                        isDisabled: l
                    }), g = (0, eS.B3)(t), {
                        isPressed: j
                    } = (0, ez.U)(d, g), _ = (0, b.dD)(), w = (0, e$.T)(), y = !(s || w), N = function(e, t) {
                        let n = (0, e$.T)(),
                            r = !(t.disableMotion || n),
                            [{
                                stable: a,
                                shown: l
                            }, s] = (0, i.useReducer)(eR, eB);
                        (0, i.useEffect)(() => {
                            if (a > l && eF.co.track(eF.s6.NOTIFICATIONS_INCREASED, {
                                    shownCount: a,
                                    shownGroup: C(a)
                                }), r && (!(a < l) || t.animateDown)) {
                                let e = eO(a, l, s);
                                return () => {
                                    for (let t of e) t && clearTimeout(t)
                                }
                            }
                            s({
                                value: a,
                                type: "shown",
                                ts: Date.now()
                            })
                        }, [a, r]);
                        let o = (0, i.useCallback)(e => s({
                                type: "stable",
                                ts: Date.now(),
                                value: e
                            }), [s]),
                            c = (0, eL.c)(e, 100);
                        return (0, i.useEffect)(() => {
                            o(Number(c))
                        }, [c, o]), l
                    }(n, {
                        disableMotion: s
                    }), I = (0, i.useMemo)(() => ({
                        [eW().lg]: N > 99,
                        [eW().md]: eU(N, 9, 99),
                        [eW().sm]: eU(N, 0, 9)
                    }), [N]), z = (0, i.useMemo)(() => (0, k.W)({
                        [eW().frameMotion]: y,
                        ...I
                    }, eW().frame), [y, I]), M = (0, i.useMemo)(() => (0, k.W)(eW().badge, {
                        [eW().badgeMotion]: y,
                        ...I
                    }), [y, I]), E = (0, k.W)(eW().btn, {
                        [eW().focus]: p,
                        [eW().active]: p,
                        [eW().hover]: v,
                        [eW().pressed]: j || f,
                        [eW().shadow]: !_
                    }), S = N > 99 ? "99+" : N > 0 ? `${N}` : " ";
                    return (0, i.useEffect)(() => {
                        null == h || h.setHasOpened(!1)
                    }, [u]), (0, r.jsxs)("div", {
                        children: [(null == h ? void 0 : h.hasOpened) ? (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            className: eW().overlay
                        }) : null, (0, r.jsxs)(eI.fC, {
                            "aria-label": "Notifications",
                            "data-testid": (0, eH.C)("notifications", "popover"),
                            onOpenChange: e => {
                                null == h || h.setHasOpened(e), c(e)
                            },
                            open: f,
                            children: [(0, r.jsx)(eI.xz, {
                                "aria-label": n ? `${n} unseen ${(0,eP._)("notification",n)}` : "notifications",
                                ...(0, eS.dG)(m, x, d),
                                className: E,
                                "data-testid": (0, eH.C)("notifications", "bell"),
                                ref: g,
                                children: (0, r.jsxs)("span", {
                                    className: eW().buttonContent,
                                    children: [(0, r.jsx)("div", {
                                        className: eW().icon,
                                        children: (0, r.jsx)(eA.U, {
                                            color: j || f || v ? "var(--ds-gray-1000)" : "var(--ds-gray-900)",
                                            size: 16
                                        })
                                    }), (0, r.jsx)("span", {
                                        className: z,
                                        children: (0, r.jsx)("span", {
                                            className: M,
                                            children: (0, r.jsx)("span", {
                                                className: eW().text,
                                                children: S
                                            })
                                        })
                                    })]
                                })
                            }), (0, r.jsx)(eI.VY, {
                                align: "end",
                                alignOffset: -10,
                                "aria-label": n ? `${n} unseen ${(0,eP._)("notification",n)}` : "notifications",
                                className: eW().content,
                                sideOffset: 10,
                                children: o
                            })]
                        })]
                    })
                }),
                eU = (e, t, n) => e > t && e <= n;
            var eZ = n(537525),
                eG = n.n(eZ),
                eV = n(236790),
                eX = n(696342),
                eJ = n(112459),
                eY = n(63522),
                eQ = n(911047),
                e0 = n(316944),
                e1 = n(30569),
                e2 = n(700246),
                e6 = n(145857),
                e3 = n(893121),
                e5 = n(314988),
                e9 = n(792407),
                e4 = n(895022),
                e8 = n(212536);
            let e7 = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, i.useRef)(null);
                return (0, i.useCallback)(r => {
                    r ? (n.current = new IntersectionObserver(t => {
                        t[0].isIntersecting && (e(), n.current && n.current.unobserve(t[0].target))
                    }, t), n.current.observe(r)) : n.current && n.current.disconnect()
                }, [e, t])
            };
            var te = n(9766),
                tt = n(137768),
                tn = n(685819),
                tr = n.n(tn);

            function ti(e) {
                let {
                    onChange: t,
                    placeholder: n,
                    value: i,
                    loading: a
                } = e;
                return (0, r.jsx)(te.M, {
                    clearable: !1,
                    innerWrapperClassName: tr().searchContainer,
                    loading: a,
                    onChange: t,
                    placeholder: n,
                    suffix: (0, r.jsx)(tt.Z, {
                        children: "Esc"
                    }),
                    suffixStyling: !1,
                    value: i
                })
            }
            var ta = n(835093),
                tl = n(226690),
                ts = n.n(tl);

            function to(e) {
                let {
                    avatar: t = !0,
                    index: n = 0
                } = e;
                return (0, r.jsxs)(N.K, {
                    align: "center",
                    as: "li",
                    className: ts().container,
                    direction: "row",
                    gap: 3,
                    children: [t ? (0, r.jsx)(ta.O, {
                        height: 20,
                        rounded: !0,
                        width: 20
                    }) : null, (0, r.jsx)(ta.O, {
                        height: 20,
                        style: {
                            flex: .7 + (n % 2 ? .2 : 0)
                        }
                    })]
                })
            }

            function tc(e) {
                let {
                    type: t,
                    children: n,
                    renderPrefix: a,
                    placeholder: l
                } = e, [s, o] = (0, i.useState)(""), c = (0, eL.c)(s, 300), d = c.length > 0 ? c : void 0, {
                    items: u,
                    isLoading: h,
                    isLoadingMore: f,
                    loadMore: m,
                    isEmpty: p,
                    isReachingEnd: x
                } = ef({
                    type: t,
                    q: ["author", "branch", "project"].includes(t) ? d : void 0,
                    glob: ["page"].includes(t) ? d : void 0,
                    limit: 10,
                    authorsOnly: "author" === t ? 1 : void 0
                }, {
                    keepPreviousData: !0
                }), {
                    state: {
                        listRef: v
                    }
                } = (0, e8.H9)(), g = e7(() => {
                    f || m()
                }, {
                    rootMargin: "200px 0px"
                });
                (0, i.useEffect)(() => {
                    if ("object" == typeof v && null !== v) {
                        var e;
                        null === (e = v.current) || void 0 === e || e.focus()
                    }
                }, [v]);
                let j = h && s.length > 0,
                    _ = h && 0 === u.length;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(N.K, {
                        as: "li",
                        className: tr().stickySearch,
                        children: (0, r.jsx)(ti, {
                            loading: j,
                            onChange: e => o(e.target.value),
                            placeholder: l,
                            value: s
                        })
                    }), a ? a({
                        search: s,
                        setSearch: o
                    }) : null, _ ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(to, {
                            avatar: "branch" !== t,
                            index: 0
                        }), (0, r.jsx)(to, {
                            avatar: "branch" !== t,
                            index: 1
                        }), (0, r.jsx)(to, {
                            avatar: "branch" !== t,
                            index: 2
                        }), (0, r.jsx)(to, {
                            avatar: "branch" !== t,
                            index: 3
                        }), (0, r.jsx)(to, {
                            avatar: "branch" !== t,
                            index: 4
                        }), (0, r.jsx)(to, {
                            avatar: "branch" !== t,
                            index: 5
                        }), (0, r.jsx)(to, {
                            avatar: "branch" !== t,
                            index: 6
                        }), (0, r.jsx)(to, {
                            avatar: "branch" !== t,
                            index: 7
                        }), (0, r.jsx)(to, {
                            avatar: "branch" !== t,
                            index: 8
                        }), (0, r.jsx)(to, {
                            avatar: "branch" !== t,
                            index: 9
                        })]
                    }) : null, u.map((e, t) => n({
                        item: e,
                        setSearch: o,
                        search: s,
                        ref: p || x || t !== u.length - 1 ? void 0 : g
                    })), f ? (0, r.jsx)(N.K, {
                        align: "center",
                        as: "li",
                        justify: "center",
                        paddingX: 2,
                        paddingY: 2.5,
                        children: (0, r.jsx)(e4.$, {
                            size: 20
                        })
                    }) : null]
                })
            }
            var td = n(477234);
            let tu = (0, i.forwardRef)(function(e, t) {
                let {
                    children: n,
                    onSelection: i,
                    right: a,
                    selected: l,
                    ...s
                } = e;
                return (0, r.jsx)(V.s, { ...s,
                    onClick: () => i(),
                    children: (0, r.jsxs)(N.K, {
                        align: "center",
                        direction: "row",
                        gap: 1.5,
                        justify: "space-between",
                        ref: t,
                        style: {
                            width: "100%"
                        },
                        children: [(0, r.jsx)(N.K, {
                            align: "center",
                            direction: "row",
                            gap: 3,
                            style: {
                                minWidth: 0
                            },
                            children: "string" == typeof n ? (0, r.jsx)(E.x, {
                                as: "span",
                                color: "inherit",
                                title: n,
                                truncate: !0,
                                children: n
                            }) : (0, r.jsx)(r.Fragment, {
                                children: n
                            })
                        }), (0, r.jsxs)(N.K, {
                            align: "center",
                            direction: "row",
                            gap: 1.5,
                            style: {
                                maxWidth: "25%"
                            },
                            children: [a ? (0, r.jsx)(r.Fragment, {
                                children: a
                            }) : null, l ? (0, r.jsx)(td.J, {}) : null]
                        })]
                    })
                })
            });

            function th() {
                let {
                    filterValues: e,
                    toggleValue: t
                } = (0, l.wu)(), n = e.author;
                return (0, r.jsx)(tc, {
                    placeholder: "Author",
                    type: "author",
                    children: e => {
                        let {
                            item: i,
                            setSearch: a,
                            ref: l
                        } = e;
                        return (0, r.jsxs)(tu, {
                            onSelection: () => {
                                t({
                                    value: i.userId,
                                    filter: "author"
                                }), a("")
                            },
                            ref: l,
                            selected: n.includes(i.userId),
                            children: [(0, r.jsx)(u.qE, {
                                size: 20,
                                username: i.username
                            }), (0, r.jsx)(E.x, {
                                as: "span",
                                title: i.username,
                                truncate: !0,
                                children: i.username
                            })]
                        }, i.userId)
                    }
                })
            }
            var tf = n(211069);

            function tm(e) {
                let {
                    onClick: t,
                    selected: n,
                    children: i,
                    color: a
                } = e;
                return (0, r.jsx)(V.s, {
                    onClick: t,
                    children: (0, r.jsxs)(N.K, {
                        align: "center",
                        direction: "row",
                        flex: "1",
                        gap: 3,
                        justify: "space-between",
                        children: [(0, r.jsxs)(N.K, {
                            align: "center",
                            direction: "row",
                            gap: 3,
                            children: [(0, r.jsx)(tf.C, {
                                color: a,
                                fill: !0,
                                size: 10
                            }), (0, r.jsx)(E.x, {
                                as: "span",
                                truncate: !0,
                                children: i
                            })]
                        }), n ? (0, r.jsx)(td.J, {}) : null]
                    })
                })
            }

            function tp() {
                let {
                    filterValues: e,
                    toggleValue: t
                } = (0, l.wu)(), n = e.status;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(tm, {
                        color: "var(--ds-gray-500)",
                        onClick: () => t({
                            value: "all",
                            replace: !0,
                            filter: "status"
                        }),
                        selected: n.includes("all"),
                        children: "All"
                    }), (0, r.jsx)(tm, {
                        color: "var(--ds-blue-900)",
                        onClick: () => t({
                            value: "resolved",
                            replace: !0,
                            filter: "status"
                        }),
                        selected: n.includes("resolved"),
                        children: "Resolved"
                    }), (0, r.jsx)(tm, {
                        color: "var(--ds-amber-700)",
                        onClick: () => t({
                            value: "unresolved",
                            replace: !0,
                            filter: "status"
                        }),
                        selected: n.includes("unresolved"),
                        children: "Unresolved"
                    })]
                })
            }
            var tx = n(431465);

            function tv(e, t) {
                return `${e}:${t}`
            }

            function tg(e) {
                let t = e.indexOf(":");
                if (-1 === t) return null;
                let n = e.slice(0, t),
                    r = e.slice(t + 1);
                return {
                    projectId: n,
                    value: r
                }
            }
            var tj = n(629891),
                t_ = n.n(tj),
                tb = n(854635),
                tw = n(731352),
                ty = n(596312);

            function tC(e) {
                let {
                    size: t,
                    project: n,
                    image: i = !1
                } = e, a = (0, tb.mk)(n), {
                    deployment: l
                } = (0, tw.s)(null == n ? void 0 : n.id), {
                    data: s
                } = (0, ty.Z)(l);
                if (!a || !l || void 0 === s) return (0, r.jsx)(u.qE, {
                    placeholder: !0,
                    size: t
                });
                let o = (null == s ? void 0 : s.src) || a.logo;
                return i ? (0, r.jsx)(t_(), {
                    alt: `${a.name} logo`,
                    height: t,
                    src: o,
                    width: t
                }) : (0, r.jsx)(u.qE, {
                    size: t,
                    src: o
                })
            }
            let tk = (0, i.forwardRef)(function(e, t) {
                let {
                    page: n
                } = e, {
                    filterValues: i,
                    toggleValue: a
                } = (0, l.wu)(), s = i.page, {
                    data: o
                } = (0, tx.PY)(n.projectId), c = tv(n.projectId, n.page);
                return (0, r.jsxs)(tu, {
                    onSelection: () => {
                        a({
                            value: c,
                            filter: "page"
                        })
                    },
                    ref: t,
                    right: (0, r.jsx)(E.x, {
                        as: "span",
                        color: "gray-900",
                        title: null == o ? void 0 : o.name,
                        truncate: !0,
                        children: null == o ? void 0 : o.name
                    }),
                    selected: s.includes(c),
                    children: [(0, r.jsx)(tC, {
                        project: o,
                        size: 20
                    }), (0, r.jsx)(E.x, {
                        as: "span",
                        title: n.page,
                        truncate: !0,
                        children: n.page
                    })]
                }, c)
            });
            var tN = n(639690),
                tI = n.n(tN);

            function tz() {
                return (0, r.jsxs)(M, {
                    align: "flex-start",
                    border: !0,
                    gap: 2,
                    padding: 2,
                    children: [(0, r.jsx)(E.x, {
                        as: "span",
                        color: "inherit",
                        children: "To filter for comments on pages with multiple similar URLs try using * to match results, such as:"
                    }), (0, r.jsx)(M, {
                        border: !0,
                        className: tI().code,
                        paddingX: 1,
                        secondary: !0,
                        children: (0, r.jsx)(E.x, {
                            as: "span",
                            color: "red-900",
                            lineHeight: 20,
                            monospace: !0,
                            size: 12,
                            children: "/docs/conformance/rules/req*"
                        })
                    })]
                })
            }

            function tM() {
                let {
                    filterValues: e,
                    toggleValue: t
                } = (0, l.wu)();
                return (0, r.jsx)(tc, {
                    placeholder: "Page",
                    renderPrefix: n => {
                        let {
                            search: i,
                            setSearch: a
                        } = n;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(tz, {}), i.includes("*") ? (0, r.jsx)(tu, {
                                onSelection: () => {
                                    t({
                                        value: i,
                                        filter: "pageRegex"
                                    }), a("")
                                },
                                selected: e.pageRegex.includes(i),
                                children: (0, r.jsxs)(E.x, {
                                    as: "span",
                                    color: "inherit",
                                    truncate: !0,
                                    children: ["Custom (", i, ")"]
                                })
                            }) : null, e.pageRegex.map(e => e === i ? null : (0, r.jsx)(tu, {
                                onSelection: () => {
                                    t({
                                        value: e,
                                        filter: "pageRegex"
                                    })
                                },
                                selected: !0,
                                children: (0, r.jsxs)(E.x, {
                                    as: "span",
                                    color: "inherit",
                                    title: `Custom (${e})`,
                                    truncate: !0,
                                    children: ["Custom (", e, ")"]
                                })
                            }, e))]
                        })
                    },
                    type: "page",
                    children: e => {
                        let {
                            item: t,
                            ref: n
                        } = e;
                        return (0, r.jsx)(tk, {
                            page: t,
                            ref: n
                        }, `${t.projectId}:${t.page}`)
                    }
                })
            }

            function tE() {
                let {
                    filterValues: e,
                    toggleValue: t
                } = (0, l.wu)();
                return (0, r.jsx)(tc, {
                    placeholder: "Project",
                    type: "project",
                    children: n => {
                        let {
                            item: i,
                            setSearch: a,
                            search: l,
                            ref: s
                        } = n;
                        return (0, r.jsxs)(tu, {
                            onSelection: () => {
                                t({
                                    value: i.id,
                                    filter: "project"
                                }), i.name === l && a("")
                            },
                            ref: s,
                            selected: e.project.includes(i.id),
                            children: [(0, r.jsx)(tC, {
                                project: i,
                                size: 20
                            }), (0, r.jsx)(E.x, {
                                as: "span",
                                title: i.name,
                                truncate: !0,
                                children: i.name
                            })]
                        }, i.id)
                    }
                })
            }
            let tS = (0, i.forwardRef)(function(e, t) {
                let {
                    branch: n,
                    projectId: i
                } = e, {
                    filterValues: a,
                    toggleValue: s
                } = (0, l.wu)(), o = a.branch, {
                    data: c
                } = (0, tx.PY)(i);
                return (0, r.jsx)(tu, {
                    onSelection: () => {
                        s({
                            value: tv(i, n),
                            filter: "branch"
                        })
                    },
                    ref: t,
                    right: (0, r.jsx)(E.x, {
                        as: "span",
                        color: "gray-900",
                        title: null == c ? void 0 : c.name,
                        truncate: !0,
                        children: null == c ? void 0 : c.name
                    }),
                    selected: o.includes(tv(i, n)),
                    children: n
                }, tv(i, n))
            });

            function tT() {
                return (0, r.jsx)(tc, {
                    placeholder: "Branches",
                    type: "branch",
                    children: e => {
                        let {
                            item: {
                                branch: t,
                                projectId: n
                            },
                            ref: i
                        } = e;
                        return (0, r.jsx)(tS, {
                            branch: t,
                            projectId: n,
                            ref: i
                        }, `${t}${n}`)
                    }
                })
            }
            var tA = n(236413),
                tP = n.n(tA);

            function t$(e) {
                let {
                    buttonSize: t
                } = e, [n, a] = (0, i.useState)(null), l = (0, i.useMemo)(() => "author" === n ? (0, r.jsx)(th, {}) : "status" === n ? (0, r.jsx)(tp, {}) : "page" === n ? (0, r.jsx)(tM, {}) : "project" === n ? (0, r.jsx)(tE, {}) : "branch" === n ? (0, r.jsx)(tT, {}) : null, [n]), {
                    team: s
                } = (0, w.t7)();

                function o(e, t) {
                    e.preventDefault(), a(t)
                }
                return (0, r.jsxs)(G.F, {
                    onClose: () => {
                        a(null)
                    },
                    onEscapePressed: function(e, t) {
                        e.stopPropagation(), null !== n && (e.preventDefault(), a(null), setTimeout(() => {
                            var e;
                            null === (e = t.current) || void 0 === e || e.focus()
                        }, 0))
                    },
                    position: "bottom-end",
                    children: [(0, r.jsx)(Z.j, {
                        prefix: (0, r.jsx)(e9.v, {}),
                        size: t,
                        style: {
                            paddingInline: "10px"
                        },
                        type: "secondary",
                        children: "Filter"
                    }), (0, r.jsx)(U.v, {
                        className: (0, k.W)({
                            [tr().menu]: "string" == typeof n
                        }),
                        portalClassName: tP().menu,
                        width: "string" == typeof n ? 256 : 240,
                        children: n ? l : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(V.s, {
                                onClick: e => {
                                    o(e, "author")
                                },
                                onPointerEnter: () => {
                                    em({
                                        type: "author",
                                        teamId: null == s ? void 0 : s.id
                                    })
                                },
                                children: "Author"
                            }), (0, r.jsx)(V.s, {
                                onClick: e => {
                                    o(e, "status")
                                },
                                onPointerEnter: () => {
                                    em({
                                        type: "status",
                                        teamId: null == s ? void 0 : s.id
                                    })
                                },
                                children: "Status"
                            }), (0, r.jsx)(V.s, {
                                onClick: e => {
                                    o(e, "project")
                                },
                                onPointerEnter: () => {
                                    em({
                                        type: "project",
                                        teamId: null == s ? void 0 : s.slug
                                    })
                                },
                                children: "Project"
                            }), (0, r.jsx)(V.s, {
                                onClick: e => {
                                    o(e, "page")
                                },
                                onPointerEnter: () => {
                                    em({
                                        type: "page",
                                        teamId: null == s ? void 0 : s.id
                                    })
                                },
                                children: "Page"
                            }), (0, r.jsx)(V.s, {
                                onClick: e => {
                                    o(e, "branch")
                                },
                                onPointerEnter: () => {
                                    em({
                                        type: "branch",
                                        teamId: null == s ? void 0 : s.id
                                    })
                                },
                                children: "Branch"
                            })]
                        })
                    })]
                })
            }
            var tL = n(284476),
                tF = n(889353),
                tR = n(710260),
                tB = n.n(tR);

            function tK(e) {
                let {
                    prefix: t,
                    children: n,
                    labelColor: i,
                    style: a,
                    size: l,
                    onClearFilter: s
                } = e;
                return (0, r.jsxs)(N.K, {
                    className: tB().container,
                    justify: "center",
                    children: [(0, r.jsx)(Z.j, {
                        size: l,
                        style: { ...a,
                            paddingRight: (null == a ? void 0 : a.paddingInline) ? `calc(${a.paddingInline} + 2px + 20px)` : void 0
                        },
                        type: "secondary",
                        typeName: "button",
                        children: (0, r.jsxs)(N.K, {
                            align: "center",
                            direction: "row",
                            gap: .5,
                            children: [t, "string" == typeof n ? (0, r.jsx)(E.x, {
                                as: "span",
                                className: tB().label,
                                color: i ? ? void 0,
                                truncate: !0,
                                weight: 500,
                                children: n
                            }) : (0, r.jsx)(r.Fragment, {
                                children: "children"
                            })]
                        })
                    }), (0, r.jsx)(e0.z, {
                        "aria-label": "Clear Filter",
                        className: tB().clearButton,
                        onClick: s,
                        shape: "square",
                        size: "tiny",
                        style: {
                            right: "small" === l ? "6px" : "10px",
                            width: "20px",
                            height: "20px"
                        },
                        svgOnly: !0,
                        type: "tertiary",
                        children: (0, r.jsx)(tF.X, {
                            color: "var(--ds-gray-1000)"
                        })
                    })]
                })
            }

            function tO(e) {
                let {
                    filterName: t,
                    prefix: n,
                    children: i,
                    labelColor: a,
                    style: s,
                    size: o
                } = e, {
                    clearFilter: c
                } = (0, l.wu)();
                return (0, r.jsx)(tK, {
                    labelColor: a,
                    onClearFilter: () => c(t),
                    prefix: n,
                    size: o,
                    style: { ...s,
                        paddingInline: "small" === o ? "6px" : "10px"
                    },
                    children: i
                })
            }

            function tH(e) {
                let {
                    buttonSize: t
                } = e, {
                    filterValues: n
                } = (0, l.wu)(), {
                    items: i
                } = ef({
                    type: "author",
                    limit: 0 === n.author.length ? 0 : 3,
                    userId: n.author
                }), a = 0 !== n.author.length && 0 !== i.length;
                return (0, r.jsxs)(G.F, {
                    children: [a ? (0, r.jsx)(tO, {
                        filterName: "author",
                        prefix: (0, r.jsx)(tL.H, {
                            extra: n.author.length - i.length,
                            limit: 3,
                            members: i.map(e => ({
                                username: e.username
                            }))
                        }),
                        size: t,
                        children: 1 === n.author.length ? i[0].username : `${n.author.length} people`
                    }) : (0, r.jsx)(Z.j, {
                        showChevron: !0,
                        type: "secondary",
                        children: "Author"
                    }), (0, r.jsx)(U.v, {
                        className: tr().menu,
                        width: 256,
                        children: (0, r.jsx)(th, {})
                    })]
                })
            }
            var tD = n(659178);

            function tW(e) {
                var t;
                let {
                    buttonSize: n
                } = e, {
                    filterValues: i
                } = (0, l.wu)();
                return (0, r.jsxs)(G.F, {
                    children: [i.branch.length > 0 ? (0, r.jsx)(tO, {
                        filterName: "branch",
                        prefix: (0, r.jsx)(tD.I, {
                            size: 16
                        }),
                        size: n,
                        children: 1 === i.branch.length ? `${(null===(t=tg(i.branch[0]))||void 0===t?void 0:t.value)??""}` : `${i.branch.length} branches`
                    }) : (0, r.jsx)(Z.j, {
                        showChevron: !0,
                        type: "secondary",
                        children: "Branch"
                    }), (0, r.jsx)(U.v, {
                        className: tr().menu,
                        width: 320,
                        children: (0, r.jsx)(tT, {})
                    })]
                })
            }

            function tq(e) {
                let t, {
                        buttonSize: n
                    } = e,
                    {
                        filterValues: i
                    } = (0, l.wu)(),
                    a = i.page.length > 0 || i.pageRegex.length > 0;
                if (a) {
                    if (1 === i.page.length && 0 === i.pageRegex.length) {
                        var s;
                        t = (null === (s = tg(i.page[0])) || void 0 === s ? void 0 : s.value) ? ? ""
                    } else {
                        let e = i.page.length + i.pageRegex.length;
                        t = `${e} page${e>1?"s":""}`
                    }
                }
                return (0, r.jsxs)(G.F, {
                    children: [a ? (0, r.jsx)(tO, {
                        filterName: ["page", "pageRegex"],
                        size: n,
                        children: t
                    }) : (0, r.jsx)(Z.j, {
                        showChevron: !0,
                        type: "secondary",
                        children: "Page"
                    }), (0, r.jsx)(U.v, {
                        className: tr().menu,
                        width: 320,
                        children: (0, r.jsx)(tM, {})
                    })]
                })
            }

            function tU(e) {
                let {
                    projectIds: t
                } = e, {
                    data: n
                } = (0, tx.Z0)(t.slice(0, Math.min(5, t.length)));
                return n ? (0, r.jsx)(tL.H, {
                    extra: t.length - n.length,
                    limit: 5,
                    members: n.map(e => ({
                        uid: e.id,
                        component: (0, r.jsx)(tC, {
                            project: e,
                            size: 22
                        })
                    })),
                    size: 22
                }) : null
            }

            function tZ(e) {
                let {
                    buttonSize: t
                } = e, {
                    filterValues: n
                } = (0, l.wu)(), {
                    data: i
                } = (0, tx.PY)(n.project[0]);
                return (0, r.jsxs)(G.F, {
                    children: [n.project.length > 0 ? (0, r.jsx)(tO, {
                        filterName: "project",
                        prefix: (0, r.jsx)(tU, {
                            projectIds: n.project
                        }),
                        size: t,
                        children: 1 === n.project.length ? `${(null==i?void 0:i.name)??""}` : `${n.project.length} projects`
                    }) : (0, r.jsx)(Z.j, {
                        showChevron: !0,
                        type: "secondary",
                        children: "Project"
                    }), (0, r.jsx)(U.v, {
                        className: tr().menu,
                        width: 256,
                        children: (0, r.jsx)(tE, {})
                    })]
                })
            }
            var tG = n(470264);

            function tV(e) {
                let {
                    buttonSize: t
                } = e, {
                    filterValues: n
                } = (0, l.wu)(), i = 0 !== n.status.length && n.status[0] !== tG.b;
                return (0, r.jsxs)(G.F, {
                    children: [i ? (0, r.jsx)(tO, {
                        filterName: "status",
                        prefix: (0, r.jsx)(tf.C, {
                            color: "resolved" === n.status[0] ? "var(--ds-blue-900)" : "var(--ds-amber-700)",
                            fill: !0,
                            size: 8
                        }),
                        size: t,
                        children: "resolved" === n.status[0] ? "Resolved" : "All"
                    }) : (0, r.jsx)(Z.j, {
                        showChevron: !0,
                        type: "secondary",
                        children: "Status"
                    }), (0, r.jsx)(U.v, {
                        className: tr().menu,
                        width: 256,
                        children: (0, r.jsx)(tp, {})
                    })]
                })
            }
            var tX = n(990802),
                tJ = n.n(tX);

            function tY(e) {
                let {
                    buttonSize: t,
                    ...n
                } = e, {
                    hasSelectedFilters: i,
                    clearAllFilters: a
                } = (0, l.wu)(), s = i("author"), o = i("branch"), c = i("page"), d = i("project"), u = i("status"), h = i();
                return h ? (0, r.jsxs)(N.K, { ...n,
                    className: tJ().container,
                    direction: "row",
                    gap: 2,
                    children: [s ? (0, r.jsx)(tH, {
                        buttonSize: t
                    }) : null, o ? (0, r.jsx)(tW, {
                        buttonSize: t
                    }) : null, c ? (0, r.jsx)(tq, {
                        buttonSize: t
                    }) : null, d ? (0, r.jsx)(tZ, {
                        buttonSize: t
                    }) : null, u ? (0, r.jsx)(tV, {
                        buttonSize: t
                    }) : null, (0, r.jsx)(e0.z, {
                        className: tJ().clearAllFiltersButton,
                        onClick: a,
                        size: t,
                        type: "tertiary",
                        children: "Clear Filters"
                    })]
                }) : null
            }
            var tQ = n(251686),
                t0 = n(523121),
                t1 = n(487554),
                t2 = n(798592),
                t6 = n(582526),
                t3 = n(689804),
                t5 = n(476005),
                t9 = n(967886),
                t4 = n.n(t9);

            function t8(e) {
                let {
                    children: t,
                    thread: n,
                    hasPrevious: i,
                    hasNext: a,
                    showContextMenu: l = !0,
                    showLinearLink: s = !0,
                    showPreviewLink: o = !0,
                    forceShowBackButton: c = !1,
                    selectPreviousThread: d,
                    selectNextThread: u,
                    clearSelectedThread: h,
                    ...f
                } = e;
                return (0, r.jsxs)(N.K, {
                    direction: "row",
                    justify: "space-between",
                    ...f,
                    children: [(0, r.jsxs)(N.K, {
                        align: "center",
                        direction: "row",
                        gap: 2,
                        children: [(0, r.jsx)(N.K, {
                            align: "center",
                            as: e0.z,
                            className: (0, k.W)(t4().backButton, {
                                "geist-show-on-tablet": !c
                            }),
                            direction: "row",
                            onClick: h,
                            prefix: (0, r.jsx)(t3.s, {
                                size: 20
                            }),
                            style: {
                                color: "var(--ds-gray-900)",
                                padding: 0
                            },
                            variant: "unstyled",
                            children: (0, r.jsx)(E.x, {
                                as: "span",
                                color: "inherit",
                                lineHeight: 20,
                                size: 14,
                                children: "Back"
                            })
                        }), t]
                    }), (0, r.jsxs)(N.K, {
                        align: "center",
                        direction: "row",
                        gap: 2,
                        children: [s && n.linear ? (0, r.jsx)(t1.Z, {
                            href: n.linear.link,
                            rel: "noreferrer",
                            target: "_blank",
                            type: "tertiary",
                            children: (0, r.jsxs)(N.K, {
                                align: "center",
                                direction: "row",
                                gap: 2,
                                children: [(0, r.jsx)(t2.h, {}), (0, r.jsx)(E.x, {
                                    size: 12,
                                    style: {
                                        color: "#5E6AD2"
                                    },
                                    children: n.linear.label
                                })]
                            })
                        }) : null, l ? (0, r.jsx)(X, {
                            thread: n
                        }) : null, (0, r.jsx)(e0.z, {
                            "aria-label": "Previous comment",
                            disabled: !i,
                            onClick: d,
                            size: "tiny",
                            style: {
                                padding: 0
                            },
                            svgOnly: !0,
                            type: "tertiary",
                            children: (0, r.jsx)(t5.K, {
                                color: "var(--ds-gray-900)",
                                size: 16
                            })
                        }), (0, r.jsx)(e0.z, {
                            "aria-label": "Next comment",
                            disabled: !a,
                            onClick: u,
                            size: "tiny",
                            style: {
                                padding: 0
                            },
                            svgOnly: !0,
                            type: "tertiary",
                            children: (0, r.jsx)(t6._, {
                                color: "var(--ds-gray-900)",
                                size: 16
                            })
                        }), o ? (0, r.jsx)(t1.Z, {
                            href: n.threadUrl ? ? "",
                            rel: "noreferrer",
                            suffix: (0, r.jsx)(eb.d, {
                                size: 16
                            }),
                            target: "_blank",
                            type: "secondary",
                            children: "Go to Preview"
                        }) : null]
                    })]
                })
            }

            function t7(e) {
                let {
                    filterValues: t,
                    toggleValue: n
                } = (0, l.wu)(), [a, s] = (0, i.useState)(t.q[0] ? ? ""), o = (0, eL.y)(e => {
                    n({
                        value: e.target.value,
                        replace: !0,
                        filter: "q"
                    })
                }, 300);
                return (0, r.jsx)(te.M, {
                    onChange: e => {
                        s(e.target.value), o(e)
                    },
                    placeholder: "Search comments...",
                    size: "mediumSmall",
                    style: {
                        paddingInline: "12px"
                    },
                    value: a,
                    width: "100%",
                    ...e
                })
            }
            var ne = n(498630),
                nt = n.n(ne);

            function nn(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(e2.C, {
                    className: nt().tabBadge,
                    size: "sm",
                    variant: "gray-subtle",
                    children: t
                })
            }

            function nr(e) {
                let {
                    tab: t,
                    setTab: n,
                    settingsLink: s,
                    currentTabEmpty: o,
                    onArchiveAll: d,
                    onScrollEnd: u,
                    children: h,
                    commentsUnread: f = 0,
                    commentsIsLoading: m = !1,
                    inboxUnread: p = 0,
                    hasNextThread: x,
                    hasPreviousThread: v,
                    clearSelectedThread: g,
                    selectNextThread: j,
                    selectPreviousThread: _
                } = e, w = (0, e3.G)(), [y, C] = (0, i.useState)(!1), I = (0, b.dD)(), z = (0, i.useContext)(a.uj), M = (0, eV.C)(u, {
                    debounce: 40,
                    offset: 7
                }), {
                    filterValues: E,
                    hasSelectedFilters: S
                } = (0, l.wu)(), T = S(), A = E.q[0];
                (0, i.useEffect)(() => {
                    let e = w.isChannelEnabled("in_app_feed");
                    e || y ? e && y && C(!1) : C(!0)
                }, [w, y]);
                let P = (0, e5.A)("enable-comments-notifications-view"),
                    $ = (0, i.useMemo)(() => [{
                        title: (0, r.jsxs)(ns, {
                            children: ["Inbox ", p > 0 ? (0, r.jsx)(nn, {
                                children: p
                            }) : null]
                        }),
                        value: "inbox"
                    }, {
                        title: (0, r.jsx)(ns, {
                            children: "Archive"
                        }),
                        value: "archived"
                    }], [p]),
                    L = (0, i.useMemo)(() => P ? [...$, {
                        title: (0, r.jsxs)(ns, {
                            children: ["Comments", " ", f > 0 ? (0, r.jsx)(nn, {
                                children: f
                            }) : null]
                        }),
                        value: "comments"
                    }] : $, [P, $, f]),
                    F = (0, i.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(e1.m, {
                            "data-testid": (0, eH.C)("notifications", "tabs"),
                            noBorder: !0,
                            selected: t,
                            setSelected: n,
                            tabs: L
                        }), (0, r.jsx)(nl, { ...s,
                            onClick: () => {
                                null == z || z.setHasOpened(!1)
                            }
                        })]
                    }), [z, n, s, t, L]),
                    R = null;
                y && "inbox" === t ? R = (0, r.jsx)(na, {
                    onEnable: () => {
                        w.setChannel({
                            channel: "in_app_feed",
                            enabled: !0
                        })
                    }
                }) : o && (R = A && "comments" === t ? (0, r.jsx)(tQ.u, {
                    border: !1,
                    description: `No comments found for "${A}".`,
                    icon: (0, r.jsx)(t0.k, {
                        icon: (0, r.jsx)(eQ.Z, {
                            size: 32
                        })
                    }),
                    title: "No comments found"
                }) : T && "comments" === t ? (0, r.jsx)(tQ.u, {
                    border: !1,
                    description: "No comments found with the selected filters.",
                    icon: (0, r.jsx)(t0.k, {
                        icon: (0, r.jsx)(eQ.Z, {
                            size: 32
                        })
                    }),
                    title: "No comments found"
                }) : (0, r.jsx)(ni, {
                    tab: t
                }));
                let {
                    thread: B
                } = c(), K = (0, r.jsxs)("div", {
                    className: nt().feed,
                    "data-tab": t,
                    children: [(0, r.jsx)("div", {
                        className: nt().headerGrid,
                        children: B ? (0, r.jsx)(t8, {
                            clearSelectedThread: g,
                            flex: 1,
                            forceShowBackButton: !0,
                            hasNext: x,
                            hasPrevious: v,
                            selectNextThread: j,
                            selectPreviousThread: _,
                            showContextMenu: !1,
                            showLinearLink: !1,
                            showPreviewLink: !1,
                            thread: B
                        }) : F
                    }), (0, r.jsx)("div", {
                        className: nt().feedContent,
                        "data-empty": !R || A || T ? null : "",
                        ref: M,
                        children: (0, r.jsxs)(N.K, {
                            paddingTop: "comments" === t ? 4 : void 0,
                            children: ["comments" === t && (A || T || !o) ? (0, r.jsxs)(N.K, {
                                gap: 2,
                                children: [(0, r.jsxs)(N.K, {
                                    direction: "row",
                                    gap: 3,
                                    paddingX: 4,
                                    children: [(0, r.jsx)(t7, {
                                        loading: m,
                                        size: "small"
                                    }), (0, r.jsx)(t$, {
                                        buttonSize: "small"
                                    })]
                                }), (0, r.jsx)(tY, {
                                    buttonSize: "small",
                                    paddingX: 4
                                })]
                            }) : null, (0, r.jsx)("ol", {
                                className: (0, k.W)(nt().view, {
                                    [nt().commentsView]: "comments" === t
                                }),
                                "data-empty": R ? "" : null,
                                "data-tab": t,
                                children: R || h
                            })]
                        })
                    }), "inbox" === t && !R && (0, r.jsx)("div", {
                        className: nt().archiveFooter,
                        children: (0, r.jsx)(e0.z, {
                            "data-testid": (0, eH.C)("notifications", "archive-all"),
                            onClick: () => d(),
                            size: "small",
                            type: "tertiary",
                            children: "Archive All"
                        })
                    })]
                });
                return I ? (0, r.jsx)(e6.d, {
                    onDismiss: () => {
                        null == z || z.setHasOpened(!1)
                    },
                    show: null == z ? void 0 : z.hasOpened,
                    children: K
                }) : K
            }

            function ni(e) {
                let {
                    tab: t
                } = e, n = "No new notifications";
                return "archived" === t ? n = "Nothing in the archive" : "comments" === t && (n = "No new comments"), (0, r.jsx)(N.K, {
                    align: "center",
                    as: "li",
                    "data-testid": (0, eH.C)("notifications", "inbox-zero"),
                    justify: "center",
                    children: (0, r.jsxs)(N.K, {
                        align: "center",
                        direction: "column",
                        gap: 3,
                        children: [(0, r.jsx)("div", {
                            className: nt().emptyIcon,
                            children: (0, r.jsx)(eX.m, {
                                "aria-label": "Empty inbox",
                                color: "var(--accents-5)",
                                size: 20
                            })
                        }), (0, r.jsx)(E.x, {
                            color: "gray-900",
                            size: 14,
                            weight: 400,
                            children: n
                        })]
                    })
                })
            }

            function na(e) {
                let {
                    onEnable: t
                } = e;
                return (0, r.jsx)(N.K, {
                    align: "center",
                    as: "li",
                    "data-testid": (0, eH.C)("notifications", "inbox-zero"),
                    justify: "center",
                    children: (0, r.jsxs)(N.K, {
                        align: "center",
                        direction: "column",
                        gap: 5,
                        children: [(0, r.jsx)("div", {
                            className: nt().emptyIcon,
                            children: (0, r.jsx)(eJ.q, {
                                color: "var(--accents-5)",
                                size: 20
                            })
                        }), (0, r.jsx)(E.x, {
                            color: "gray-900",
                            size: 14,
                            weight: 400,
                            children: "You currently have notifications turned off"
                        }), (0, r.jsx)(e0.z, {
                            "data-testid": (0, eH.C)("notifications", "turn-on"),
                            onClick: t,
                            size: "small",
                            children: "Turn on notifications"
                        })]
                    })
                })
            }

            function nl(e) {
                let {
                    as: t,
                    href: n,
                    onClick: i
                } = e, {
                    focusProps: a,
                    isFocused: l,
                    isFocusVisible: s
                } = (0, eM.Fx)(), {
                    hoverProps: o,
                    isHovered: c
                } = (0, eE.XI)({});
                return (0, r.jsx)(eG(), {
                    "aria-label": "Settings",
                    as: t,
                    className: nt().settingsLink,
                    "data-focus-visible": s ? "" : null,
                    "data-hover": c ? "" : null,
                    "data-testid": (0, eH.C)("notifications", "settings"),
                    href: n,
                    onClick: i,
                    ...a,
                    ...o,
                    children: (0, r.jsx)("span", {
                        "aria-hidden": !0,
                        style: {
                            height: 16
                        },
                        children: (0, r.jsx)(eY.Z, {
                            color: c || l ? "var(--geist-foreground)" : "var(--accents-5)",
                            size: 16
                        })
                    })
                })
            }

            function ns(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(E.x, {
                    className: nt().tabText,
                    color: "inherit",
                    size: 14,
                    children: t
                })
            }
            var no = n(596571),
                nc = n(206811),
                nd = n.n(nc);

            function nu(e) {
                let {
                    isMobile: t,
                    notification: n,
                    archiveNotification: a,
                    readNotification: l
                } = e, [s, o] = (0, i.useState)(!1), {
                    isHovered: c,
                    hoverProps: d
                } = (0, eE.XI)({}), {
                    isHovered: u,
                    hoverProps: h
                } = (0, eE.XI)({}), {
                    isFocusVisible: f,
                    focusProps: m
                } = (0, eM.Fx)({
                    within: !0
                }), p = c || s || t, {
                    id: x,
                    mainAvatar: v,
                    subAvatar: g,
                    actionUrl: j,
                    ts: _,
                    markup: b,
                    isArchived: w,
                    isSeen: y,
                    workflow: C
                } = n, I = (0, r.jsxs)(N.K, {
                    as: "li",
                    className: (0, k.W)(nd().item, {
                        [nd().focusVisible]: f
                    }),
                    "data-testid": (0, eH.C)("notifications", "item", x),
                    direction: "row",
                    gap: 4,
                    justify: "space-between",
                    ...d,
                    ...m,
                    children: [(0, r.jsxs)("span", {
                        className: nd().subject,
                        children: [(0, r.jsx)("span", {
                            children: v
                        }), g ? (0, r.jsx)("span", {
                            className: nd().subAvatar,
                            children: g
                        }) : null]
                    }), (0, r.jsxs)(N.K, {
                        direction: "column",
                        style: {
                            flex: 1
                        },
                        children: [b, (0, r.jsx)(nh, {
                            ts: _
                        })]
                    }), (0, r.jsxs)("div", {
                        "aria-hidden": w ? "true" : void 0,
                        className: (0, k.W)({
                            [nd().hidden]: w
                        }),
                        style: {
                            position: "relative",
                            width: 32
                        },
                        children: [(0, r.jsx)(N.K, {
                            align: "center",
                            className: (0, k.W)(nd().dot, {
                                [nd().hidden]: y
                            }),
                            justify: "center",
                            style: {
                                left: p ? -24 : 0
                            },
                            children: (0, r.jsx)("div", {
                                "aria-label": "Not seen yet",
                                role: "note"
                            })
                        }), (0, r.jsx)("div", {
                            className: nd().archive,
                            style: {
                                opacity: p || f ? 1 : 0
                            },
                            ...h,
                            children: (0, r.jsx)(e0.z, {
                                "aria-label": "Archive",
                                className: nd().archiveButton,
                                onBlur: () => o(!1),
                                onClick: () => {
                                    a(C)
                                },
                                onFocus: () => o(!0),
                                shape: "circle",
                                style: {
                                    width: 32,
                                    height: 32
                                },
                                svgOnly: !0,
                                title: "Archive",
                                type: "tertiary",
                                children: (0, r.jsx)(no.X, {
                                    "aria-hidden": "true",
                                    color: u || f ? "var(--geist-foreground)" : "var(--accents-5)",
                                    size: 16
                                })
                            })
                        })]
                    })]
                });
                return j ? (0, r.jsx)(eG(), {
                    "aria-roledescription": `${w?"Archived":y?"Previously seen":"Unseen"} Notification`,
                    className: nd().link,
                    "data-inbox": !w,
                    "data-uid": x,
                    href: j,
                    onClick: () => {
                        l(C)
                    },
                    children: I
                }) : I
            }

            function nh(e) {
                let {
                    ts: t
                } = e, n = (0, K.R)(t);
                return (0, r.jsxs)(E.x, {
                    color: "gray-900",
                    size: 14,
                    title: new Date(t).toLocaleString(),
                    weight: 400,
                    children: [(0, r.jsx)("span", {
                        className: "geist-sr-only",
                        children: ", Created "
                    }), n]
                })
            }
            var nf = n(404081),
                nm = n(940215),
                np = n(882907),
                nx = n.n(np);

            function nv(e) {
                let {
                    thread: t
                } = e;
                return (0, r.jsx)(er, {
                    align: "left",
                    thread: t,
                    children: /Mobi/i.test(t.userAgent || "") ? (0, r.jsx)(T.r, {
                        color: "var(--ds-gray-900)",
                        size: 16
                    }) : (0, r.jsx)(S.u, {
                        color: "var(--ds-gray-900)",
                        size: 16
                    })
                })
            }

            function ng(e) {
                let {
                    thread: t,
                    showMetadata: n
                } = e, i = t.comments.length - 1, a = [...new Set(t.comments.map(e => e.author.username))], l = a.slice(0, Math.min(3, a.length));
                return (0, r.jsxs)(N.K, {
                    align: "center",
                    direction: "row",
                    gap: 2,
                    justify: "space-between",
                    children: [(0, r.jsxs)(N.K, {
                        align: "center",
                        className: nx().leftContainer,
                        direction: "row",
                        gap: 2,
                        children: [(0, r.jsx)(tL.H, {
                            members: l.map(e => ({
                                username: e
                            })),
                            size: 20
                        }), (0, r.jsxs)(E.x, {
                            as: "span",
                            truncate: !0,
                            weight: 500,
                            children: [l.join(", "), a.length > l.length ? " and others" : ""]
                        }), n && 1 === a.length ? (0, r.jsx)(nv, {
                            thread: t
                        }) : null, (0, r.jsx)(E.x, {
                            as: "span",
                            color: "gray-900",
                            size: 12,
                            children: (0, r.jsx)(O, {
                                timestamp: t.comments[0].timestamp
                            })
                        }), t.read ? null : (0, r.jsx)(tf.C, {
                            color: "var(--ds-blue-900)",
                            fill: !0,
                            size: 5
                        })]
                    }), (0, r.jsxs)(N.K, {
                        align: "center",
                        direction: "row",
                        flex: "0 0 25%",
                        gap: 2,
                        justify: "flex-end",
                        children: [(0, r.jsxs)(N.K, {
                            align: "center",
                            direction: "row",
                            gap: 1,
                            children: [(0, r.jsx)(eQ.Z, {
                                color: "var(--ds-gray-900)",
                                size: 16
                            }), (0, r.jsx)(E.x, {
                                as: "span",
                                color: "gray-900",
                                size: 12,
                                children: i
                            })]
                        }), (0, r.jsx)(nm.I, {
                            color: "var(--ds-gray-900)",
                            fill: t.resolved,
                            size: 16
                        })]
                    })]
                })
            }
            n(950429), n(663269);
            var nj = n(287091),
                n_ = n.n(nj);

            function nb(e) {
                let {
                    project: t
                } = e;
                return (0, r.jsxs)(N.K, {
                    align: "center",
                    direction: "row",
                    gap: 1.5,
                    children: [(0, r.jsx)(tC, {
                        image: !0,
                        project: t,
                        size: 16
                    }), (0, r.jsx)(E.x, {
                        as: "span",
                        size: 12,
                        title: t.name,
                        truncate: !0,
                        children: t.name
                    })]
                })
            }

            function nw(e) {
                let {
                    project: t
                } = e, {
                    filterValues: n,
                    toggleValue: i
                } = (0, l.wu)();
                return t ? (0, r.jsx)(e0.z, {
                    className: `${n_().sidebarPill} ${n_().sidebarProjectPill}`,
                    onClick: () => {
                        n.project.includes(t.id) || i({
                            value: t.id,
                            filter: "project"
                        })
                    },
                    variant: "unstyled",
                    children: (0, r.jsx)(nb, {
                        project: t
                    })
                }) : null
            }

            function ny(e) {
                let {
                    thread: t
                } = e;
                return (0, r.jsx)(E.x, {
                    as: "span",
                    size: 12,
                    style: {
                        display: "block"
                    },
                    title: t.page,
                    truncate: !0,
                    children: t.page
                })
            }

            function nC(e) {
                let {
                    thread: t
                } = e, {
                    filterValues: n,
                    toggleValue: i
                } = (0, l.wu)();
                return (0, r.jsx)(e0.z, {
                    className: n_().sidebarPill,
                    onClick: () => {
                        let e = tv(t.projectId, t.page);
                        n.page.includes(e) || i({
                            value: e,
                            filter: "page"
                        })
                    },
                    variant: "unstyled",
                    children: (0, r.jsx)(ny, {
                        thread: t
                    })
                })
            }

            function nk(e) {
                let {
                    thread: t
                } = e;
                return (0, r.jsxs)(N.K, {
                    align: "center",
                    direction: "row",
                    gap: 1,
                    children: [(0, r.jsx)(tD.I, {
                        color: "var(--ds-gray-900)",
                        size: 12
                    }), (0, r.jsx)(E.x, {
                        as: "span",
                        size: 12,
                        title: t.branch,
                        truncate: !0,
                        children: t.branch
                    })]
                })
            }

            function nN(e) {
                let {
                    thread: t
                } = e, {
                    filterValues: n,
                    toggleValue: i
                } = (0, l.wu)();
                return (0, r.jsx)(e0.z, {
                    className: n_().sidebarPill,
                    onClick: () => {
                        let e = tv(t.projectId, t.branch);
                        n.branch.includes(e) || i({
                            value: e,
                            filter: "branch"
                        })
                    },
                    variant: "unstyled",
                    children: (0, r.jsx)(nk, {
                        thread: t
                    })
                })
            }

            function nI(e) {
                let {
                    thread: t
                } = e, {
                    data: n
                } = (0, tx.PY)(t.projectId);
                return (0, r.jsxs)(N.K, {
                    align: "center",
                    direction: "row",
                    gap: 2,
                    children: [(0, r.jsx)(nw, {
                        project: n
                    }), (0, r.jsx)(nC, {
                        thread: t
                    }), (0, r.jsx)(nN, {
                        thread: t
                    })]
                })
            }

            function nz(e) {
                let {
                    thread: t,
                    showMetadata: n = !0,
                    ...i
                } = e;
                return (0, r.jsxs)(N.K, {
                    className: (0, k.W)({
                        [n_().resolved]: t.resolved
                    }),
                    gap: 3,
                    paddingY: 4,
                    ...i,
                    children: [(0, r.jsxs)(N.K, {
                        gap: 2,
                        children: [(0, r.jsx)(ng, {
                            showMetadata: n,
                            thread: t
                        }), (0, r.jsx)("div", {
                            className: n_().commentText,
                            children: (0, r.jsx)(F, {
                                body: t.comments[0].body
                            })
                        })]
                    }), (0, r.jsx)(nI, {
                        thread: t
                    })]
                })
            }
            var nM = n(889041),
                nE = n(570153),
                nS = n(621290),
                nT = n.n(nS);

            function nA(e) {
                let {
                    thread: t
                } = e, {
                    selectThread: n,
                    thread: i
                } = c(), a = function() {
                    let {
                        mutate: e
                    } = (0, nE.f)(), {
                        filterValues: t
                    } = (0, l.wu)(), n = "resolved" === t.status[0] || "unresolved" === t.status[0] ? t.status[0] : void 0, r = (0, nM.r)(t.q), i = (0, nM.r)(t.project), a = (0, nM.r)(t.author), s = (0, nM.r)(t.page), o = (0, nM.r)(t.pageRegex), c = (0, nM.r)(t.branch), d = {
                        q: r && r[0].length > 0 ? r[0] : void 0,
                        status: n,
                        projectId: i,
                        author: a,
                        page: s,
                        pageGlob: o,
                        branch: c,
                        limit: 20,
                        searchHeaderOnly: 1
                    };
                    return async function(t) {
                        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = `${el.qJ}/${t.threadId}${(0,es.c)({roomId:t.roomId,teamId:t.teamId})}`,
                            i = `${el.qJ}${(0,es.c)({...d,teamId:t.teamId})}`,
                            a = `${el.qJ}/inbox${(0,es.c)({...d,teamId:t.teamId})}`,
                            l = e => e ? e.map(e => ({ ...e,
                                threads: e.threads.map(e => e.id === t.threadId ? { ...e,
                                    read: t.read,
                                    resolved: t.resolved
                                } : e)
                            })) : e,
                            s = e => e ? e.map(e => ({ ...e,
                                threads: e.threads.map(e => e.id === t.threadId ? { ...e,
                                    read: e.read !== t.read ? !t.read : e.read,
                                    resolved: e.resolved !== t.resolved ? !t.resolved : e.resolved
                                } : e)
                            })) : e;
                        await Promise.all([n ? await e(e => (null == e ? void 0 : e.unread) ? {
                            unread: e.unread - 1
                        } : e, !1) : Promise.resolve(), (0, ei.JG)((0, ea.wE)(() => i), l, !1), (0, ei.JG)((0, ea.wE)(() => a), l, !1)]);
                        try {
                            await (0, eo.I)(r, {
                                throwOnHTTPError: !0,
                                method: "PUT",
                                body: JSON.stringify({
                                    read: t.read,
                                    resolved: t.resolved
                                })
                            })
                        } catch (t) {
                            await Promise.all([n ? await e(e => (null == e ? void 0 : e.unread) ? {
                                unread: e.unread + 1
                            } : e, !1) : Promise.resolve(), (0, ei.JG)((0, ea.wE)(() => i), s, !1), (0, ei.JG)((0, ea.wE)(() => a), s, !1)])
                        }
                    }
                }(), {
                    team: s
                } = (0, w.t7)();
                return (0, r.jsx)("li", {
                    children: (0, r.jsx)(e0.z, {
                        className: (0, k.W)(nT().commentWrapper, {
                            [nT().selected]: (null == i ? void 0 : i.id) === t.id
                        }),
                        onClick: () => {
                            n(t), t.read || a({
                                threadId: t.id,
                                roomId: t.roomId,
                                read: !0,
                                teamId: null == s ? void 0 : s.id
                            })
                        },
                        variant: "unstyled",
                        children: (0, r.jsx)(nz, {
                            padding: 4,
                            showMetadata: !1,
                            thread: t
                        })
                    })
                })
            }
            var nP = n(251793),
                n$ = n.n(nP);

            function nL(e) {
                let {
                    activeFeed: t,
                    inbox: n,
                    comments: a,
                    tab: l,
                    setTab: s,
                    setHasOpened: o,
                    settingsLink: h
                } = e, {
                    team: f
                } = (0, w.t7)(), g = (0, b.dD)(), [k, N] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    N("1" === d.Z.get("vercel_impersonate"))
                }, []);
                let I = (0, i.useMemo)(() => t.items.map(e => (0, r.jsx)(nu, {
                        archiveNotification: t => {
                            k || n.archiveItem(e, t)
                        },
                        isMobile: g,
                        notification: function(e, t, n) {
                            var i, a, l, s;
                            let o = function(e) {
                                    var t, n;
                                    let r = [],
                                        i = e.actors,
                                        a = null === (t = e.data) || void 0 === t ? void 0 : t.icon;
                                    return a && r.push({
                                        level: "primary",
                                        icon: a
                                    }), e.actors.length && null !== i[0] && r.push({
                                        level: "primary",
                                        id: i[0].id,
                                        avatar: i[0].avatar
                                    }), (null === (n = e.data) || void 0 === n ? void 0 : n.focus) && !r.find(e => "primary" === e.level) && r.push({
                                        level: "primary",
                                        id: e.data.focus.id,
                                        avatar: e.data.focus.avatar
                                    }), r
                                }(e),
                                c = (null === (i = e.blocks.find(e => "body" === e.name)) || void 0 === i ? void 0 : i.rendered) ? ? "",
                                d = (null === (a = e.blocks.find(e => "action_url" === e.name)) || void 0 === a ? void 0 : a.rendered) ? ? "";
                            try {
                                let e = new URL(d);
                                e.searchParams.set("utm_medium", "web"), e.searchParams.set("utm_source", "notifications"), d = e.href
                            } catch (e) {}
                            return {
                                id: e.id,
                                workflow: e.source.key,
                                mainAvatar: function(e, t) {
                                    let n = e.find(e => "primary" === e.level);
                                    if (!n) return t ? (0, r.jsx)(u.qE, {
                                        hash: t.avatar,
                                        size: 36,
                                        teamId: t.id
                                    }) : null;
                                    let {
                                        id: i,
                                        icon: a,
                                        avatar: l
                                    } = n;
                                    return a ? function(e) {
                                        switch (e) {
                                            case "alert":
                                                return (0, r.jsx)(x, {});
                                            case "warn":
                                                return (0, r.jsx)(p, {});
                                            case "success":
                                                return (0, r.jsx)(m, {});
                                            case "info":
                                                return (0, r.jsx)(v, {})
                                        }
                                    }(a) : _(i) ? (0, r.jsx)(u.qE, {
                                        hash: l,
                                        size: 36,
                                        teamId: i
                                    }) : (0, r.jsx)(u.qE, {
                                        hash: l,
                                        size: 36,
                                        uid: i
                                    })
                                }(o, n),
                                subAvatar: function(e, t) {
                                    let n = e.find(e => "secondary" === e.level);
                                    if (!n || t.hasIcon) return null;
                                    let {
                                        id: i,
                                        avatar: a
                                    } = n;
                                    return _(i) ? (0, r.jsx)(u.qE, {
                                        hash: a,
                                        size: 20,
                                        teamId: i
                                    }) : (0, r.jsx)(u.qE, {
                                        hash: a,
                                        size: 20,
                                        uid: i
                                    })
                                }(o, {
                                    hasIcon: !!(null === (l = e.data) || void 0 === l ? void 0 : l.icon)
                                }),
                                icon: null === (s = e.data) || void 0 === s ? void 0 : s.icon,
                                isSeen: !!e.seen_at,
                                isArchived: !!e.archived_at,
                                markup: (0, r.jsx)("div", {
                                    className: t,
                                    dangerouslySetInnerHTML: {
                                        __html: j().sanitize(c)
                                    }
                                }),
                                ts: new Date(e.inserted_at).getTime(),
                                actionUrl: d
                            }
                        }(e, nd().notificationContent, f),
                        readNotification: t => {
                            k || n.readItem(e, t)
                        }
                    }, `${l}-${e.id}`)), [t.items, g, l, f, k, n]),
                    z = (0, i.useMemo)(() => a.threads.map(e => (0, r.jsx)(nA, {
                        thread: e
                    }, e.id)), [a.threads]),
                    {
                        thread: M,
                        clearSelectedThread: E,
                        selectThread: S
                    } = c(),
                    T = (0, i.useCallback)(e => {
                        e ? (o(!0), y.co.track(y.s6.NOTIFICATIONS_SHOWN, {
                            shownCount: n.unseen,
                            isCountShown: n.unseen > 0,
                            shownGroup: C(n.unseen)
                        })) : (s("inbox"), E(), k || n.markAllSeen())
                    }, [k, n, o, s, E]),
                    A = (0, i.useCallback)(() => {
                        k || n.markAllArchived()
                    }, [n, k]),
                    P = (0, i.useMemo)(() => "comments" === l ? a.isEmpty : 0 === I.length, [l, I, a.isEmpty]),
                    $ = (0, i.useCallback)(() => {
                        if (!M) return;
                        let e = a.threads.findIndex(e => e.id === M.id);
                        if (-1 === e || e === a.threads.length - 1) return;
                        let t = a.threads[e + 1];
                        S(t)
                    }, [a.threads, S, M]),
                    L = (0, i.useCallback)(() => {
                        if (!M) return;
                        let e = a.threads.findIndex(e => e.id === M.id);
                        if (-1 === e || 0 === e) return;
                        let t = a.threads[e - 1];
                        S(t)
                    }, [a.threads, S, M]),
                    F = (0, i.useMemo)(() => {
                        if (!M) return !1;
                        let e = a.threads.findIndex(e => e.id === M.id);
                        return -1 !== e && e !== a.threads.length - 1
                    }, [a.threads, M]),
                    R = (0, i.useMemo)(() => {
                        if (!M) return !1;
                        let e = a.threads.findIndex(e => e.id === M.id);
                        return -1 !== e && 0 !== e
                    }, [a.threads, M]);
                return (0, r.jsx)(eq, {
                    onOpenChange: T,
                    unseen: n.unseen + a.unread,
                    children: (0, r.jsx)(nf.C, {
                        defaultLoaded: !0,
                        children: (0, r.jsx)(nr, {
                            clearSelectedThread: E,
                            commentsIsLoading: a.isLoading,
                            commentsUnread: a.unread,
                            currentTabEmpty: P,
                            hasNextThread: F,
                            hasPreviousThread: R,
                            inboxUnread: n.unseen,
                            onArchiveAll: A,
                            onScrollEnd: t.fetchNextPage,
                            selectNextThread: $,
                            selectPreviousThread: L,
                            setTab: s,
                            settingsLink: h,
                            tab: l,
                            children: "comments" === l ? (0, r.jsx)(r.Fragment, {
                                children: M ? (0, r.jsx)(eN, {
                                    border: !1,
                                    className: n$().commentsDetailView,
                                    source: "dashboard-notifications-center",
                                    thread: M
                                }) : z
                            }) : I
                        })
                    })
                })
            }
            var nF = n(488623);

            function nR(e) {
                let {
                    children: t
                } = e, n = (0, a.rN)();
                return "full" !== n.state ? t : (0, r.jsx)(o, {
                    children: (0, r.jsx)(l.bv, {
                        type: "modal",
                        children: (0, r.jsx)(nB, {
                            tenant: n.tenant,
                            children: t
                        })
                    })
                })
            }

            function nB(e) {
                let {
                    children: t,
                    tenant: n
                } = e, i = (0, a.zn)({
                    tenant: n
                });
                return (0, r.jsx)(a.uj.Provider, {
                    value: i,
                    children: t
                })
            }

            function nK() {
                let e = (0, a.rN)(),
                    t = (0, i.useContext)(a.uj);
                return null === e.state ? null : t ? (0, r.jsx)(nL, { ...t
                }) : (0, r.jsx)(nF.L, {
                    visibility: e.state
                })
            }
        },
        404081: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return u.C
                },
                o: function() {
                    return g
                }
            });
            var r = n(397458),
                i = n(652983),
                a = n(112459),
                l = n(60171),
                s = n(121446),
                o = n(154791),
                c = n(957717),
                d = n(571387),
                u = n(893121),
                h = n(684874),
                f = n(308108),
                m = n(179191),
                p = n(29522),
                x = n.n(p);

            function v(e, t, n, r, i, a) {
                i.setGroup({
                    uri: r,
                    channel: t,
                    enabled: !n
                }).then(() => {
                    f.Vy.success("Change saved")
                }).catch(() => {
                    f.Vy.error("Error saving change")
                }), h.co.track(h.s6.NOTIFICATIONS_PREF_CHANGED, {
                    channel: t,
                    action: n ? "disable" : "enable",
                    uri: r,
                    category: e,
                    teamId: a ? ? "none"
                })
            }

            function g(e) {
                let {
                    text: t,
                    uri: n,
                    channel: h,
                    category: f,
                    teamId: p,
                    tooltip: g,
                    isOwner: j
                } = e, _ = (0, u.G)(), b = _.isGroupEnabled(n, h), w = "Domains" === f, y = "in_app_feed" === h ? "email" : "in_app_feed", C = !_.isGroupEnabled(n, y) || !_.isChannelEnabled(y), k = j && b && C && !w, [N, I] = (0, i.useState)(!1), z = (0, i.useCallback)(() => I(!0), []), M = (0, i.useCallback)(() => I(!1), []), E = (0, i.useCallback)(() => {
                    v(f, h, b, n, _, p), M()
                }, [f, h, b, _, n, p, M]), S = "";
                if (w) switch (t) {
                    case "Configuration":
                        S = "if there are misconfigured domains";
                        break;
                    case "Renewals":
                        S = "about domain renewals";
                        break;
                    case "Transfers":
                        S = "if there are domain transfers";
                        break;
                    default:
                        S = `about Domains > ${t}`
                }
                let T = (0, i.useCallback)(() => {
                        j && b && C && w ? z() : v(f, h, b, n, _, p)
                    }, [f, h, b, _, n, p, w, j, C, z]),
                    A = g;
                return k && (A = [g, "Cannot disable this notification because it is disabled on all other channels."].filter(Boolean).join(" ")), (0, r.jsxs)("label", {
                    className: x().checkboxItem,
                    children: [(0, r.jsx)(o.X, {
                        checked: b,
                        disabled: k,
                        onChange: T
                    }), (0, r.jsx)(m.eT, {
                        children: t
                    }), A ? (0, r.jsx)(c.u, {
                        text: A,
                        children: (0, r.jsx)(l.I, {
                            color: "var(--accents-4)",
                            size: 16
                        })
                    }) : null, w ? (0, r.jsxs)(d.u.Modal, {
                        active: N,
                        onClickOutside: M,
                        children: [(0, r.jsx)(d.u.Body, {
                            children: (0, r.jsxs)("div", {
                                className: x().modalBody,
                                children: [(0, r.jsx)("div", {
                                    className: x().warningCircle,
                                    children: (0, r.jsx)(a.q, {
                                        color: "#fff",
                                        fill: !0,
                                        size: "20",
                                        weight: "bold"
                                    })
                                }), (0, r.jsx)(s.x, {
                                    align: "center",
                                    className: x().modalTitle,
                                    size: 20,
                                    weight: 600,
                                    children: "Notification Warning"
                                }), (0, r.jsxs)(s.x, {
                                    align: "center",
                                    className: x().modalText,
                                    children: ["You're turning off notifications across all channels, and we'll have no way to notify you ", S, "."]
                                })]
                            })
                        }), (0, r.jsxs)(d.u.Actions, {
                            children: [(0, r.jsx)(d.u.Action, {
                                onClick: M,
                                type: "secondary",
                                children: "Cancel"
                            }), (0, r.jsx)(d.u.Action, {
                                onClick: E,
                                children: "Turn off notifications"
                            })]
                        })]
                    }) : null]
                })
            }
        },
        179191: function(e, t, n) {
            "use strict";
            n.d(t, {
                AQ: function() {
                    return c
                },
                BS: function() {
                    return d
                },
                Ef: function() {
                    return l
                },
                NB: function() {
                    return u
                },
                Wb: function() {
                    return s
                },
                eT: function() {
                    return o
                }
            });
            var r = n(397458),
                i = n(132950),
                a = n(121446);

            function l(e) {
                let {
                    children: t,
                    ...n
                } = e;
                return (0, r.jsx)(a.x, {
                    size: 20,
                    ...n,
                    children: t
                })
            }

            function s(e) {
                let {
                    children: t,
                    ...n
                } = e;
                return (0, r.jsx)(a.x, {
                    color: "gray-1000",
                    size: 16,
                    weight: 600,
                    ...n,
                    children: t
                })
            }

            function o(e) {
                let {
                    children: t,
                    ...n
                } = e;
                return (0, r.jsx)(a.x, {
                    color: "gray-900",
                    lineHeight: 20,
                    size: 14,
                    weight: 400,
                    ...n,
                    children: t
                })
            }

            function c(e) {
                let {
                    children: t,
                    ...n
                } = e;
                return (0, r.jsx)(i.K, {
                    align: "center",
                    direction: "row",
                    justify: "space-between",
                    style: {
                        padding: "var(--geist-space)",
                        width: "100%"
                    },
                    ...n,
                    children: t
                })
            }

            function d(e) {
                let {
                    children: t,
                    ...n
                } = e;
                return (0, r.jsx)(i.K, {
                    direction: "row",
                    ...n,
                    children: t
                })
            }

            function u(e) {
                let {
                    children: t,
                    ...n
                } = e;
                return (0, r.jsx)(i.K, {
                    style: {
                        width: "100%",
                        padding: "var(--geist-space-2x)"
                    },
                    ...n,
                    children: t
                })
            }
        },
        251686: function(e, t, n) {
            "use strict";
            n.d(t, {
                u: function() {
                    return d
                }
            });
            var r = n(397458);
            n(652983);
            var i = n(132950),
                a = n(121446),
                l = n(91156),
                s = n(14517),
                o = n(813006),
                c = n.n(o);

            function d(e) {
                let {
                    children: t,
                    title: n,
                    description: o,
                    icon: d,
                    paddingX: u = 70,
                    paddingY: h = 48,
                    style: f = {},
                    border: m = !0
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, s.W)(c().root, {
                        [c().border]: m
                    }),
                    style: { ...f,
                        "--root-padding-x": `${u}px`,
                        "--root-padding-y": `${h}px`
                    },
                    children: (0, r.jsxs)(i.K, {
                        align: "center",
                        className: c().content,
                        gap: 6,
                        children: [(0, r.jsx)(r.Fragment, {
                            children: d
                        }), (0, r.jsxs)(i.K, {
                            gap: 2,
                            children: [(0, r.jsx)(a.x, {
                                align: "center",
                                className: c().text,
                                color: "gray-1000",
                                size: 16,
                                weight: 500,
                                children: (0, r.jsx)(l.SA, {
                                    children: n
                                })
                            }), (0, r.jsx)(a.x, {
                                align: "center",
                                className: c().text,
                                color: "gray-900",
                                children: (0, r.jsx)(l.SA, {
                                    children: o
                                })
                            })]
                        }), (0, r.jsx)(r.Fragment, {
                            children: t
                        })]
                    })
                })
            }
        },
        523121: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return s
                }
            });
            var r = n(397458);
            n(652983);
            var i = n(14517),
                a = n(813006),
                l = n.n(a);

            function s(e) {
                let {
                    icon: t
                } = e;
                return (0, r.jsx)("div", {
                    "aria-hidden": !0,
                    className: (0, i.W)(l().iconContainer),
                    children: t
                })
            }
        },
        155665: function(e, t, n) {
            "use strict";
            n.d(t, {
                B_: function() {
                    return l
                },
                Jl: function() {
                    return i
                },
                XN: function() {
                    return a
                }
            });
            var r = n(967867);
            let i = "",
                a = 0;

            function l(e) {
                let {
                    includeSeconds: t
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (0, r.F6)(e, {
                    suffix: i,
                    justNowThreshold: a,
                    includeSeconds: t
                })
            }
        },
        967867: function(e, t, n) {
            "use strict";
            n.d(t, {
                F6: function() {
                    return d
                },
                ld: function() {
                    return i
                },
                lv: function() {
                    return a
                },
                rS: function() {
                    return l
                }
            });
            var r = n(355344);
            let i = 44e3,
                a = "Just now",
                l = " ago",
                s = (0, r.Z)("1s"),
                o = (0, r.Z)("1m"),
                c = (0, r.Z)("1h");

            function d(e) {
                let {
                    suffix: t = l,
                    justNowThreshold: n = i,
                    justNowLabel: d = a,
                    includeSeconds: u
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e) return "";
                let h = Math.max(e, 1e3);
                if (h < n) return d;
                if (u) {
                    let e = Math.round(h / s) * s,
                        n = e % o,
                        i = e - n,
                        a = n > 0 && n < o && i < c ? (0, r.Z)(n) : "",
                        l = i > 0 ? (0, r.Z)(i) : "";
                    return `${l}${a&&l?" ":""}${a}${t}`
                }
                return `${(0,r.Z)(h)}${t}`
            }
        },
        663269: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return i
                }
            });
            var r = n(707323);

            function i(e) {
                let {
                    includeOrg: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e || "error" in e) return "";
                switch (e.type) {
                    case "github":
                        return t ? `${e.org||""}/${e.repo}` : e.repo;
                    case "gitlab":
                        if ("projectUrl" in e) {
                            let n = (0, r.Z)(e.projectUrl);
                            if (n) return t ? `${n.owner}/${n.name}` : n.name
                        }
                        return "";
                    case "bitbucket":
                        if ("slug" in e) {
                            if (t && "owner" in e) return `${e.owner}/${e.slug}`;
                            return e.slug
                        }
                        return "";
                    default:
                        return ""
                }
            }
        },
        197788: function(e, t, n) {
            "use strict";
            n.d(t, {
                uj: function() {
                    return w
                },
                zn: function() {
                    return k
                },
                rN: function() {
                    return C
                }
            });
            var r = n(652983),
                i = n(58686),
                a = n(440814),
                l = n(628987),
                s = n(857994);
            let o = {
                    "mvp-stub-notifications": (e, t, n, r) => !1,
                    "deployment-failed" (e, t, n, r) {
                        let {
                            teamSlug: i,
                            project: a,
                            id: l
                        } = n;
                        if (i && a && l && e === `/${i}/${a}/${l}` || e.startsWith("/new/import/")) {
                            let e = t.getAll("id"),
                                n = t.getAll("deploymentIds"),
                                i = [...e, ...n].find(e => {
                                    var t;
                                    if (!e) return;
                                    let n = (null === (t = r.data) || void 0 === t ? void 0 : t.actionUrl) || "";
                                    return n.includes(e.replace("dpl_", ""))
                                });
                            return !!i
                        }
                        return !1
                    }
                },
                c = ["markAsSeen", "markAsRead", "markAsArchived", "markAllAsArchived"];

            function d(e) {
                let t = (0, i.k5)("pk_cBlwgRRBkMc-3KKgA0J7W-q7LbxjyDuL1u3XXU164p4", e.userId, e.userToken),
                    n = (0, i.zn)(t, "6f1dd852-e25d-4cb7-b99c-6b0acc743109", {
                        page_size: e.pageSize || 10,
                        tenant: e.tenant,
                        archived: "archived" === e.tab ? "only" : "exclude",
                        has_tenant: !!e.tenant
                    }),
                    d = (0, l.usePathname)(),
                    u = (0, l.useSearchParams)(),
                    h = (0, s.U)();
                (0, r.useEffect)(() => {
                    if ("inbox" !== e.tab) return;
                    let t = e => {
                        d && u && h && function(e, t, n, r, i) {
                            let a = i.filter(r => !!(!r.seen_at && 1 === r.total_activities && r.source.key in o && o[r.source.key](e, t, n, r)));
                            a.length && r.markAsSeen(a)
                        }(d, u, h, n, e.items)
                    };
                    return n.on("items.received.*", t), () => n.off("items.received.*", t)
                }, [n, h, d, e.tab, u]), (0, r.useEffect)(() => {
                    let t;
                    try {
                        t = new BroadcastChannel(`__notifier_feed${e.userId}${e.tenant??""}`)
                    } catch (e) {
                        return
                    }
                    let r = t => {
                        let {
                            data: r
                        } = t;
                        if ("inbox" === e.tab) {
                            let e = n.getState();
                            e.setMetadata(r.state.metadata), n.store.setState({
                                items: r.state.items
                            })
                        }
                        if ("archived" === e.tab && ("markAsArchived" === r.method || "markAllAsArchived" === r.method)) {
                            let e = new Date().toISOString();
                            r.changes.forEach(t => {
                                t.archived_at = e
                            }), n.store.setState({
                                items: r.changes.concat(n.store.getState().items)
                            })
                        }
                    };
                    return t.addEventListener("message", r), c.forEach(e => {
                        let r = n[e].bind(n);
                        n[e] = i => {
                            let a = "markAllAsArchived" === e ? n.store.getState().items : [],
                                l = i ? r(i) : r();
                            return l.finally(() => {
                                let r = !i || Array.isArray(i) ? i ? ? a : [i],
                                    {
                                        items: l,
                                        metadata: s
                                    } = n.getState();
                                t.postMessage({
                                    state: {
                                        items: l,
                                        metadata: s
                                    },
                                    method: e,
                                    changes: r
                                })
                            })
                        }
                    }), () => {
                        t.removeEventListener("message", r)
                    }
                }, [n, e.tab, e.tenant, e.userId]);
                let f = (0, a.ZP)(n.store),
                    {
                        loading: m,
                        items: p,
                        metadata: x
                    } = f();
                return {
                    loading: m,
                    items: p,
                    metadata: x,
                    feed: n
                }
            }
            var u = n(684874),
                h = n(210699),
                f = n(204137),
                m = n(532870),
                p = n(121123),
                x = n(517659),
                v = n(270430),
                g = n(58363),
                j = n(325402),
                _ = n(570153),
                b = n(889041);
            let w = (0, r.createContext)(null),
                y = /vtest314-[^@]+@zeit\.pub/;

            function C() {
                let {
                    user: e,
                    team: t,
                    isLoading: n
                } = (0, h.Z)(), {
                    isLoading: r,
                    token: i
                } = (0, f.S)(), a = !!(n || r), l = !n && ((null == e ? void 0 : e.limited) === !0 && !t || t && !0 === t.limited);
                return l ? {
                    state: "limited",
                    tenant: null == t ? void 0 : t.id,
                    isLoading: a
                } : i ? {
                    state: "full",
                    tenant: null == t ? void 0 : t.id,
                    isLoading: a
                } : e ? {
                    state: "placeholder",
                    tenant: null == t ? void 0 : t.id,
                    isLoading: a
                } : {
                    state: null,
                    isLoading: a
                }
            }

            function k(e) {
                let {
                    tenant: t
                } = e, n = (0, r.useRef)(0), i = C(), {
                    user: a,
                    team: l
                } = (0, h.Z)(), {
                    token: s
                } = (0, f.S)(), [o, c] = (0, r.useState)(!1), [w, k] = (0, r.useState)("inbox");
                if (!a) throw Error("User not available");
                let N = y.exec(a.email) ? "vtest314" : a.uid,
                    I = function(e) {
                        let {
                            feed: t,
                            items: n,
                            metadata: i,
                            loading: a,
                            onArchiveAll: l
                        } = e, s = (0, r.useCallback)(() => t.fetch().then(e => {
                            if ((null == e ? void 0 : e.status) === "ok") return e.data.meta.total_count;
                            if (void 0 !== e) throw Error("Failed to fetch notification feed")
                        }), [t]);
                        (0, r.useEffect)(() => {
                            s()
                        }, [s]);
                        let o = (0, r.useCallback)(() => t.markAsSeen(n), [t, n]),
                            c = (0, r.useCallback)(() => {
                                t.markAllAsArchived(), l()
                            }, [l, t]),
                            d = (0, r.useCallback)(async (e, n) => {
                                let r = Date.now(),
                                    i = new Date(e.inserted_at).getTime();
                                u.co.track(u.s6.NOTIFICATIONS_ENGAGEMENT, {
                                    uid: e.id,
                                    workflow: n ? ? "none",
                                    action: "archive",
                                    messageTs: i,
                                    actionTs: r,
                                    timeToAction: r - i
                                }), await t.markAsArchived(e)
                            }, [t]),
                            h = (0, r.useCallback)(async (e, n) => {
                                let r = Date.now(),
                                    i = new Date(e.inserted_at).getTime();
                                u.co.track(u.s6.NOTIFICATIONS_ENGAGEMENT, {
                                    uid: e.id,
                                    workflow: n ? ? "none",
                                    action: "read",
                                    messageTs: i,
                                    actionTs: r,
                                    timeToAction: r - i
                                }), await t.markAsSeen(e).then(() => t.markAsRead(e))
                            }, [t]),
                            f = (0, r.useCallback)(() => {
                                n.length < i.total_count && t.fetchNextPage()
                            }, [n.length, i.total_count, t]);
                        return {
                            items: n,
                            loading: a,
                            unseen: i.unseen_count,
                            archiveItem: d,
                            readItem: h,
                            markAllSeen: o,
                            markAllArchived: c,
                            fetchNextPage: f
                        }
                    }({
                        onArchiveAll: () => {
                            n.current = Date.now()
                        },
                        ...d({
                            tab: "inbox",
                            userToken: s,
                            userId: N,
                            tenant: t
                        })
                    }),
                    z = function(e) {
                        let {
                            fetchEnabled: t,
                            feed: n,
                            items: i,
                            metadata: a,
                            loading: l
                        } = e, [s, o] = (0, r.useState)(!1);
                        (0, r.useEffect)(() => {
                            t && !s && (n.fetch(), o(!0))
                        }, [t, n, i, s]);
                        let c = (0, r.useCallback)(() => {
                            i.length < a.total_count && n.fetchNextPage()
                        }, [i.length, a.total_count, n]);
                        return {
                            loading: l,
                            items: i,
                            fetchNextPage: c,
                            feed: n
                        }
                    }({
                        fetchEnabled: o,
                        ...d({
                            tab: "archived",
                            userToken: s,
                            userId: N,
                            tenant: t
                        })
                    }),
                    {
                        filterValues: M
                    } = (0, j.wu)(),
                    E = "resolved" === M.status[0] || "unresolved" === M.status[0] ? M.status[0] : void 0,
                    S = (0, b.r)(M.q),
                    T = (0, b.r)(M.project),
                    A = (0, b.r)(M.author),
                    P = (0, b.r)(M.page),
                    $ = (0, b.r)(M.pageRegex),
                    L = (0, b.r)(M.branch),
                    F = function() {
                        var e;
                        let {
                            type: t = "all",
                            fetchEnabled: n = !0,
                            ...i
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                            isReady: l,
                            team: s
                        } = (0, v.t7)(), o = (0, m.ZP)((e, r) => {
                            if (!n || !l || 0 === i.limit || r && !r.pagination.next) return null;
                            let a = "all" === t ? p.qJ : `${p.qJ}/inbox`;
                            return `${a}${(0,x.c)({teamId:"all"===t?null==s?void 0:s.id:void 0,...i,offset:null==r?void 0:r.pagination.next})}`
                        }, e => (0, g.I)(e, {
                            throwOnHTTPError: !0
                        }), a), c = (0, r.useMemo)(() => o.data ? o.data.flatMap(e => e.threads) : [], [o.data]), d = !!o.data, u = d && 0 === c.length, h = d && o.data && o.size > o.data.length, f = d && o.data && !(null === (e = o.data[o.data.length - 1]) || void 0 === e ? void 0 : e.pagination.next), j = o.isLoading;
                        return {
                            threads: c,
                            initialDataLoaded: d,
                            isEmpty: u,
                            isLoading: j,
                            loadMore: () => o.setSize(e => e + 1),
                            isLoadingMore: h,
                            isReachingEnd: f,
                            mutate: o.mutate
                        }
                    }({
                        fetchEnabled: o,
                        type: "inbox",
                        q: S && S[0].length > 0 ? S[0] : void 0,
                        teamId: null == l ? void 0 : l.id,
                        status: E,
                        projectId: T,
                        author: A,
                        page: P,
                        pageGlob: $,
                        branch: L,
                        limit: 20,
                        searchHeaderOnly: 1
                    }),
                    {
                        data: R = 0
                    } = (0, _.f)(),
                    B = (0, r.useCallback)(() => z.feed.fetch(), [z.feed]);
                (0, r.useEffect)(() => {
                    "archived" === w && Date.now() - n.current < 3e4 && B()
                }, [w, B]);
                let K = {
                        as: (null == l ? void 0 : l.slug) ? `/teams/${l.slug}/settings/notifications` : "/account/notifications",
                        href: (null == l ? void 0 : l.slug) ? "/teams/[teamSlug]/settings/notifications" : "/account/notifications"
                    },
                    O = "inbox" === w ? I : z;
                return {
                    visibility: i,
                    hasOpened: o,
                    setHasOpened: c,
                    tab: w,
                    setTab: k,
                    inbox: I,
                    archive: z,
                    comments: { ...F,
                        unread: R
                    },
                    settingsLink: K,
                    activeFeed: O
                }
            }
        },
        893121: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return f
                },
                G: function() {
                    return p
                }
            });
            var r = n(397458),
                i = n(58686),
                a = n(652983),
                l = n(353729),
                s = n(40268),
                o = n(58363),
                c = n(204137),
                d = n(210699),
                u = n(270430);
            let h = (0, a.createContext)({
                userId: "",
                userToken: "",
                can: void 0,
                useClient() {},
                setPrefsLoaded: () => {
                    throw Error("Context not provided")
                }
            });

            function f(e) {
                let {
                    children: t,
                    defaultLoaded: n
                } = e, [l, o] = (0, a.useState)(n), {
                    user: u,
                    team: f,
                    isLoading: m
                } = (0, d.Z)(), {
                    isLoading: p,
                    can: x
                } = (0, s.ZP)(), {
                    token: v
                } = (0, c.S)(), g = (0, a.useMemo)(() => {
                    if (!v || !(null == u ? void 0 : u.uid)) return;
                    let e = null == f ? void 0 : f.id;
                    return {
                        userId: u.uid,
                        userToken: v,
                        can: f ? x : () => !u.limited,
                        useClient: () => (0, i.k5)("pk_cBlwgRRBkMc-3KKgA0J7W-q7LbxjyDuL1u3XXU164p4", u.uid, v),
                        preferenceOptions: {
                            preferenceSet: e
                        },
                        prefsLoaded: l,
                        setPrefsLoaded: () => {
                            l || o(!0)
                        }
                    }
                }, [u, f, v, x, l]);
                return m || f && p || !g ? null : (0, r.jsx)(h.Provider, {
                    value: g,
                    children: (0, r.jsx)("div", {
                        style: {
                            opacity: l ? 1 : 0,
                            transition: "opacity 0.3s ease-in-out"
                        },
                        children: t
                    })
                })
            }
            let m = "personal-account";

            function p() {
                var e, t;
                let n = (0, a.useContext)(h),
                    {
                        team: r
                    } = (0, u.t7)(),
                    i = n.useClient(),
                    {
                        data: s,
                        isLoading: c,
                        error: d,
                        mutate: f
                    } = (0, l.ZP)((null === (e = n.preferenceOptions) || void 0 === e ? void 0 : e.preferenceSet) || m, async e => {
                        let t = e === m ? void 0 : e;
                        try {
                            let e = await (null == i ? void 0 : i.preferences.get({
                                preferenceSet: t
                            }));
                            return e
                        } catch (e) {
                            if (e instanceof Error && /code 404/.exec(e.message)) {
                                let e = await (0, o.I)("/api/notifications/user", {
                                    method: "PUT"
                                });
                                if ("created" in e) return null == i ? void 0 : i.preferences.get({
                                    preferenceSet: t
                                })
                            }
                            throw e
                        }
                    }, {
                        refreshInterval: 0,
                        revalidateOnFocus: !1
                    }),
                    p = (0, a.useCallback)(e => {
                        let {
                            channel: t,
                            enabled: r
                        } = e;
                        if (c || !s) throw Error("Cannot set preferences");
                        let a = { ...s,
                            channel_types: { ...s.channel_types,
                                [t]: r
                            }
                        };
                        return f(null == i ? void 0 : i.preferences.set(a, n.preferenceOptions), {
                            revalidate: !1,
                            optimisticData: a
                        })
                    }, [i, n, c, s, f]),
                    x = (0, a.useCallback)(async e => {
                        let {
                            percentages: t,
                            uri: a,
                            channel: l,
                            workflowId: o
                        } = e;
                        if (!s) throw Error("Cannot set preferences");
                        if (!i) throw Error("Does not have Knock client defined");
                        let c = await i.client().makeRequest({
                                url: `/v1/users/${i.userId??""}`,
                                method: "PUT",
                                data: {
                                    [`overage_${a}_${l}_${(null==r?void 0:r.id)??i.userId??""}`]: t
                                }
                            }),
                            d = null !== s.workflows ? s.workflows[o] ? ? {} : {},
                            u = d.channel_types ? d.channel_types[l] ? ? {
                                conditions: []
                            } : {
                                conditions: []
                            },
                            h = "boolean" != typeof u ? u.conditions : [],
                            m = (null == h ? void 0 : h.find(e => e.variable === `recipient.overage_${a}_${l}_${(null==r?void 0:r.id)??i.userId??""}`)) ? ? !1;
                        if (!m) {
                            let e = { ...s,
                                workflows: { ...s.workflows,
                                    [o]: { ...d,
                                        channel_types: { ...d.channel_types,
                                            [l]: {
                                                conditions: [{
                                                    variable: `recipient.overage_${a}_${l}_${(null==r?void 0:r.id)??i.userId??""}`,
                                                    operator: "contains",
                                                    argument: "data.usagePercent"
                                                }]
                                            }
                                        }
                                    }
                                }
                            };
                            await f(i.preferences.set(e, n.preferenceOptions), {
                                revalidate: !1,
                                optimisticData: e
                            })
                        }
                        return c
                    }, [i, n.preferenceOptions, f, s, null == r ? void 0 : r.id]),
                    v = (0, a.useCallback)(async e => {
                        let {
                            overageSelections: t
                        } = e;
                        if (!s) throw Error("Cannot set preferences");
                        if (!i) throw Error("Does not have Knock client defined");
                        let n = {};
                        Object.entries(t).forEach(e => {
                            let [t, a] = e;
                            n[`overage_${t}_${(null==r?void 0:r.id)??i.userId??""}`] = a
                        });
                        let a = await i.client().makeRequest({
                            url: `/v1/users/${i.userId??""}`,
                            method: "PUT",
                            data: n
                        });
                        return a
                    }, [i, s, null == r ? void 0 : r.id]),
                    g = (0, a.useCallback)(async () => {
                        if (!i) throw Error("Does not have Knock client defined");
                        let e = await i.client().makeRequest({
                            url: `/v1/users/${i.userId??""}`
                        });
                        return e
                    }, [i]),
                    j = (0, a.useCallback)(async e => {
                        if (!i) throw Error("Does not have Knock client defined");
                        let t = await i.client().makeRequest({
                            url: `/v1/users/${i.userId??""}`,
                            method: "PUT",
                            data: e
                        });
                        return t
                    }, [i]),
                    _ = (0, a.useCallback)(async e => {
                        let {
                            percentages: t,
                            category: n
                        } = e, a = (null == r ? void 0 : r.id) ? ? (null == i ? void 0 : i.userId) ? ? "", l = {}, s = await (null == i ? void 0 : i.client().makeRequest({
                            url: `/v1/users/${i.userId??""}`
                        }));
                        (null == s ? void 0 : s.body) && s.body[`overage_${n}_email_${a}`] || (l[`overage_${n}_email_${a}`] = t), (null == s ? void 0 : s.body) && s.body[`overage_${n}_in_app_feed_${a}`] || (l[`overage_${n}_in_app_feed_${a}`] = t);
                        let o = await (null == i ? void 0 : i.client().makeRequest({
                            url: `/v1/users/${i.userId??""}`,
                            method: "PUT",
                            data: {
                                [`overage_${n}_in_app_feed_${(null==r?void 0:r.id)??i.userId??""}`]: t
                            }
                        }).catch(e => {
                            throw e
                        }));
                        return o
                    }, [i, r]),
                    b = (0, a.useCallback)(e => {
                        var t;
                        let {
                            uri: r,
                            channel: a,
                            enabled: l
                        } = e;
                        if (c || !s) throw Error("Cannot set preferences");
                        let o = null === (t = s.categories) || void 0 === t ? void 0 : t[r];
                        if ("boolean" == typeof o) throw Error("Can only update groups configured by channel_types");
                        let d = { ...s,
                            categories: { ...s.categories,
                                [r]: {
                                    channel_types: { ...null == o ? void 0 : o.channel_types,
                                        [a]: l
                                    }
                                }
                            }
                        };
                        return f(null == i ? void 0 : i.preferences.set(d, n.preferenceOptions), {
                            revalidate: !1,
                            optimisticData: d
                        })
                    }, [i, n, c, s, f]),
                    w = (0, a.useCallback)(e => {
                        var t;
                        return (null == s ? void 0 : null === (t = s.channel_types) || void 0 === t ? void 0 : t[e]) ? ? !0
                    }, [s]),
                    y = (0, a.useCallback)(function(e, t) {
                        var n, r;
                        let i = null == s ? void 0 : null === (n = s.categories) || void 0 === n ? void 0 : n[e];
                        return "boolean" == typeof i ? i : void 0 === i || ((null === (r = i.channel_types) || void 0 === r ? void 0 : r[t]) ? ? !0)
                    }, [s]);
                return {
                    preferenceSet: null === (t = n.preferenceOptions) || void 0 === t ? void 0 : t.preferenceSet,
                    preferences: s,
                    isLoading: c,
                    error: d,
                    mutatePreferences: f,
                    setChannel: p,
                    setGroup: b,
                    getUserData: g,
                    setOverageDefaults: _,
                    setUserProperties: j,
                    mutateOveragePreferences: x,
                    mutateAllOveragePreferences: v,
                    isGroupEnabled: y,
                    isChannelEnabled: w,
                    setPrefsLoaded: n.setPrefsLoaded
                }
            }
        },
        204137: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return l
                }
            });
            var r = n(353729),
                i = n(71299),
                a = n(58363);

            function l() {
                let {
                    user: e,
                    isLoading: t
                } = (0, i.a)(), {
                    data: n,
                    error: l,
                    isLoading: s
                } = (0, r.ZP)(() => (null == e ? void 0 : e.uid) ? `/api/notifications?uid=${encodeURIComponent(e.uid)}` : null, a.I, {
                    refreshInterval: 36e5,
                    revalidateOnFocus: !1
                });
                return {
                    token: null == n ? void 0 : n.token,
                    isLoading: t || s,
                    error: l
                }
            }
        },
        908103: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return l
                },
                v: function() {
                    return s
                }
            });
            var r = n(652983),
                i = n(155665),
                a = n(967867);

            function l(e) {
                let {
                    suffix: t = a.rS,
                    justNowThreshold: n = a.ld,
                    justNowLabel: i = a.lv,
                    includeSeconds: l
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, [s, o] = (0, r.useReducer)(Date.now, null, Date.now), [c, d] = (0, r.useState)(null);
                return ((0, r.useEffect)(() => {
                    if (!e) {
                        d(null);
                        return
                    }
                    let t = Math.max(Date.now() - e, 0);
                    if (!l && t > 6e4) {
                        d(6e4);
                        return
                    }
                    if (t < n) {
                        d(Math.max(n - t, 1e3));
                        return
                    }
                    d(1e3)
                }, [s, e, n, l]), (0, r.useEffect)(() => {
                    if (c) {
                        let e = setInterval(o, c);
                        return () => clearInterval(e)
                    }
                }, [c]), e) ? (0, a.F6)(s - e, {
                    suffix: t,
                    justNowLabel: i,
                    justNowThreshold: n,
                    includeSeconds: l
                }) : ""
            }

            function s(e) {
                let {
                    includeSeconds: t
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return l(e, {
                    suffix: i.Jl,
                    justNowThreshold: i.XN,
                    includeSeconds: t
                })
            }
        },
        694752: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return l
                }
            });
            var r = n(652983);
            let i = "(prefers-reduced-motion: no-preference)",
                a = () => !window.matchMedia(i).matches;

            function l() {
                let [e, t] = (0, r.useState)(a);
                return (0, r.useEffect)(() => {
                    let e = window.matchMedia(i),
                        n = e => {
                            t(!e.matches)
                        };
                    return e.addEventListener ? e.addEventListener("change", n) : e.addListener(n), () => {
                        e.removeEventListener ? e.removeEventListener("change", n) : e.removeListener(n)
                    }
                }, []), e
            }
        },
        889041: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e === t) return !0;
                if (null === e || null === t || e.length !== t.length) return !1;
                for (let n = 0; n < e.length; ++n)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function i(e) {
                return e.length > 0 ? e : void 0
            }
            n.d(t, {
                c: function() {
                    return r
                },
                r: function() {
                    return i
                }
            })
        },
        570153: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return c
                }
            });
            var r = n(353729),
                i = n(121123),
                a = n(58363),
                l = n(517659),
                s = n(314988),
                o = n(270430);

            function c() {
                let e = (0, s.A)("enable-comments-notifications-view"),
                    {
                        team: t,
                        isLoading: n
                    } = (0, o.t7)(),
                    {
                        data: c,
                        isLoading: d,
                        error: u,
                        mutate: h
                    } = (0, r.ZP)(!e || n ? null : `${i.qJ}/inbox/count${(0,l.c)({teamId:null==t?void 0:t.id})}`, e => (0, a.I)(e, {
                        throwOnHTTPError: !0
                    }));
                return {
                    isLoading: d,
                    data: null == c ? void 0 : c.unread,
                    error: u,
                    mutate: h
                }
            }
        },
        930768: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return l
                }
            });
            var r = n(353729),
                i = n(517659),
                a = n(270430);

            function l(e) {
                let {
                    team: t,
                    isReady: n
                } = (0, a.t7)(), l = n ? `/api/feature-flags${t?(0,i.c)({teamSlug:t.slug}):""}` : null, {
                    data: s,
                    isLoading: o,
                    error: c
                } = (0, r.ZP)(l, e => fetch(e).then(e => e.json()));
                return e ? {
                    data: null == s ? void 0 : s[e],
                    error: c,
                    isLoading: o
                } : {
                    data: s,
                    error: c,
                    isLoading: o
                }
            }
        },
        731352: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return d
                },
                s: function() {
                    return c
                }
            });
            var r = n(353729),
                i = n(58363),
                a = n(517659),
                l = n(121123),
                s = n(257911),
                o = n(270430);

            function c(e) {
                let {
                    isReady: t,
                    team: n
                } = (0, o.t7)(), {
                    data: s,
                    ...c
                } = (0, r.ZP)(e && t ? `${(0,l.HJ)("v1")}/${e}/production-deployment${(0,a.c)({teamId:null==n?void 0:n.id})}` : null, async e => {
                    try {
                        return await (0, i.I)(e, {
                            throwOnHTTPError: !0
                        })
                    } catch (e) {
                        return null
                    }
                }), d = !!(void 0 !== s || c.error);
                return {
                    deployment: null == s ? void 0 : s.deployment,
                    domain: null == s ? void 0 : s.domain,
                    deploymentIsStale: null == s ? void 0 : s.deploymentIsStale,
                    loaded: d,
                    data: s,
                    ...c
                }
            }

            function d(e) {
                if (!e) return {
                    domain: null,
                    deployment: null
                };
                let t = (0, s.c)((e.alias || []).map(e => ({
                        name: e.domain,
                        redirect: e.redirect,
                        raw: e
                    }))),
                    n = t.find(e => e.raw.deployment);
                return n ? {
                    domain: {
                        name: n.name,
                        projectId: e.id
                    },
                    deployment: n.raw.deployment
                } : {
                    domain: null,
                    deployment: null
                }
            }
        },
        735636: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return l
                }
            });
            var r = n(397458),
                i = n(652983),
                a = n(457140);
            let l = (0, i.memo)(e => {
                let {
                    size: t = 30,
                    showIcon: n = !0,
                    iconSize: i = 14,
                    iconBackground: l = !0,
                    ...s
                } = e;
                return (0, r.jsx)(a.k, {
                    gitType: "bitbucket",
                    icon: n ? (0, r.jsxs)("svg", {
                        height: i,
                        viewBox: "-2 -2 65 59",
                        width: i,
                        children: [(0, r.jsx)("defs", {
                            children: (0, r.jsxs)("linearGradient", {
                                id: "bitbucket-:r3:",
                                x1: "104.953%",
                                x2: "46.569%",
                                y1: "21.921%",
                                y2: "75.234%",
                                children: [(0, r.jsx)("stop", {
                                    offset: "7%",
                                    "stop-color": "currentColor",
                                    "stop-opacity": ".4"
                                }), (0, r.jsx)("stop", {
                                    offset: "100%",
                                    "stop-color": "currentColor"
                                })]
                            })
                        }), (0, r.jsx)("path", {
                            d: "M59.696 18.86h-18.77l-3.15 18.39h-13L9.426 55.47a2.71 2.71 0 001.75.66h40.74a2 2 0 002-1.68l5.78-35.59z",
                            fill: "url(#bitbucket-:r3:)",
                            "fill-rule": "nonzero",
                            transform: "translate(-.026 .82)"
                        }), (0, r.jsx)("path", {
                            d: "M2 .82a2 2 0 00-2 2.32l8.49 51.54a2.7 2.7 0 00.91 1.61 2.71 2.71 0 001.75.66l15.76-18.88H24.7l-3.47-18.39h38.44l2.7-16.53a2 2 0 00-2-2.32L2 .82z",
                            fill: "currentColor",
                            "fill-rule": "nonzero"
                        })]
                    }) : null,
                    iconBackground: l,
                    size: t,
                    ...s
                })
            })
        },
        378019: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return o
                }
            });
            var r = n(397458),
                i = n(652983),
                a = n(1176),
                l = n(457140);
            let s = e => {
                let {
                    username: t,
                    size: n = 30,
                    showIcon: i = !0,
                    iconSize: s = 14,
                    iconBackground: o = !0,
                    icon: c = (0, r.jsx)(a.R, {
                        color: "black",
                        height: s,
                        width: s
                    }),
                    ...d
                } = e;
                t || (t = "404");
                let u = t && `https://avatars.githubusercontent.com/${t.replace("[bot]","")}?s=${2*n}`;
                return (0, r.jsx)(l.k, {
                    gitType: "github",
                    icon: i ? c : null,
                    iconBackground: o,
                    size: n,
                    src: u,
                    ...d
                })
            };
            s.displayName = "GitHubAvatar";
            let o = (0, i.memo)(s)
        },
        121297: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return s
                }
            });
            var r = n(397458),
                i = n(652983),
                a = n(457140);
            let l = e => {
                let {
                    url: t,
                    size: n = 30,
                    showIcon: i = !0,
                    iconSize: l = 14,
                    iconBackground: s = !0,
                    ...o
                } = e;
                return t && (o = Object.assign(o, {
                    src: t
                })), (0, r.jsx)(a.k, {
                    gitType: "gitlab",
                    icon: i ? (0, r.jsxs)("svg", {
                        "aria-label": "gitlab",
                        height: l,
                        style: {
                            color: "white"
                        },
                        viewBox: "0 0 24 22",
                        width: l,
                        children: [(0, r.jsx)("path", {
                            d: "M1.279 8.29L.044 12.294c-.117.367 0 .78.325 1.014l11.323 8.23-.009-.012-.03-.039L1.279 8.29zM22.992 13.308a.905.905 0 00.325-1.014L22.085 8.29 11.693 21.52l11.299-8.212z",
                            fill: "currentColor"
                        }), (0, r.jsx)("path", {
                            d: "M1.279 8.29l10.374 13.197.03.039.01-.006L22.085 8.29H1.28z",
                            fill: "currentColor",
                            opacity: "0.4"
                        }), (0, r.jsx)("path", {
                            d: "M15.982 8.29l-4.299 13.236-.004.011.014-.017L22.085 8.29h-6.103zM7.376 8.29H1.279l10.374 13.197L7.376 8.29z",
                            fill: "currentColor",
                            opacity: "0.6"
                        }), (0, r.jsx)("path", {
                            d: "M18.582.308l-2.6 7.982h6.103L19.48.308c-.133-.41-.764-.41-.897 0zM1.279 8.29L3.88.308c.133-.41.764-.41.897 0l2.6 7.982H1.279z",
                            fill: "currentColor",
                            opacity: "0.4"
                        })]
                    }) : null,
                    iconBackground: s,
                    size: n,
                    ...o
                })
            };
            l.displayName = "GitLabAvatar";
            let s = (0, i.memo)(l)
        },
        284476: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return p
                }
            });
            var r = n(397458),
                i = n(14517),
                a = n(652983),
                l = n(121446),
                s = n(426476),
                o = n(700789),
                c = n.n(o),
                d = n(378019),
                u = n(121297),
                h = n(735636);
            let f = (0, a.memo)(e => {
                let {
                    member: t,
                    size: n,
                    showIcon: i,
                    iconBackground: a
                } = e;
                return "teamId" in t ? (0, r.jsx)(s.qE, {
                    size: n,
                    teamId: t.teamId,
                    title: t.teamName
                }, t.teamId) : t.githubUser ? (0, r.jsx)("span", {
                    title: t.name,
                    children: (0, r.jsx)(d.O, {
                        iconBackground: a,
                        showIcon: i,
                        size: n,
                        username: t.username
                    })
                }, t.username) : t.gitlabUser ? (0, r.jsx)("span", {
                    title: t.name,
                    children: (0, r.jsx)(u.n, {
                        iconBackground: a,
                        showIcon: i,
                        size: n,
                        url: t.url
                    })
                }, t.username) : t.bitbucketUser ? (0, r.jsx)("span", {
                    title: t.name,
                    children: (0, r.jsx)(h.g, {
                        iconBackground: a,
                        showIcon: i,
                        size: n,
                        url: t.url
                    })
                }, t.username) : t.username ? (0, r.jsx)(s.qE, {
                    size: n,
                    username: t.username
                }, t.username) : t.url ? (0, r.jsx)(s.qE, {
                    size: n,
                    url: t.url
                }, t.url) : (0, r.jsx)(s.qE, {
                    size: n,
                    uid: t.uid
                }, t.uid)
            });
            f.displayName = "GroupAvatar";
            let m = e => {
                let {
                    members: t,
                    limit: n = 3,
                    extra: a = 0,
                    size: s = 24,
                    showIcon: o = !1,
                    iconBackground: d = !0
                } = e;
                0 === n && (n = t.length), n -= 1;
                let u = t.slice(0, n),
                    h = t.slice(n),
                    m = h.length + a,
                    p = m > 9 ? "9+" : `+${m}`,
                    x = `${m} more avatars in this group`;
                return (0, r.jsxs)("div", {
                    className: c().group,
                    children: [u.map(e => (0, r.jsx)("span", {
                        className: c().avatar,
                        children: "component" in e ? e.component : (0, r.jsx)(f, {
                            member: e,
                            size: s,
                            showIcon: o,
                            iconBackground: d
                        })
                    }, "teamId" in e ? e.teamId : e.uid || e.username || e.url)), h.length || a > 0 ? (0, r.jsxs)("span", {
                        "aria-label": x,
                        className: (0, i.W)(c().note, {
                            [c().avatar || ""]: h.length
                        }),
                        title: x,
                        children: [h.length ? "component" in h[0] ? h[0].component : (0, r.jsx)(f, {
                            member: h[0],
                            size: s,
                            showIcon: o,
                            iconBackground: d
                        }) : null, m > 1 ? (0, r.jsx)(l.x, {
                            as: "span",
                            className: (0, i.W)(c().noteText, "dark-theme"),
                            color: "gray-1000",
                            size: 10,
                            weight: 600,
                            children: p
                        }) : null]
                    }) : null]
                })
            };
            m.displayName = "AvatarGroup";
            let p = (0, a.memo)(m)
        },
        457140: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return d
                }
            });
            var r = n(397458),
                i = n(652983),
                a = n(440425),
                l = n(426476),
                s = n(311288),
                o = n.n(s);
            let c = e => {
                let {
                    icon: t,
                    left: n,
                    right: i,
                    size: s,
                    bottom: c = -5,
                    iconTitle: d,
                    style: u,
                    iconBackground: h,
                    gitType: f,
                    ...m
                } = e;
                return void 0 === i && void 0 === n && (n = -3), (0, r.jsxs)("div", {
                    className: o().wrapper,
                    style: { ...u,
                        "--size": (0, a.px)(s)
                    },
                    children: [(0, r.jsx)(l.qE, {
                        size: s,
                        ...m
                    }), (0, r.jsx)("div", {
                        "aria-hidden": !0,
                        className: o().icon,
                        "data-background": h ? "true" : "false",
                        "data-git-type": f,
                        style: {
                            left: n,
                            bottom: c,
                            right: i
                        },
                        title: d,
                        children: t
                    })]
                })
            };
            c.displayName = "AvatarWithIcon";
            let d = (0, i.memo)(c)
        },
        9766: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return f
                }
            });
            var r = n(397458),
                i = n(652983),
                a = n(287011),
                l = n(895022),
                s = n(14517),
                o = n(938187),
                c = n(424640),
                d = n(94589),
                u = n.n(d);
            let h = (0, i.memo)((0, i.forwardRef)(function(e, t) {
                    let {
                        value: n,
                        scrollOnClear: a = !0,
                        onChange: l,
                        disabled: d,
                        width: h,
                        ...f
                    } = e, m = (0, i.useRef)(null), p = t || null, [x, v] = (0, i.useState)(null), g = (0, i.useCallback)(e => {
                        var n;
                        e && (m.current = e, p && (p.current = e), v((null === (n = e.closest("[data-geist-input-wrapper]")) || void 0 === n ? void 0 : n.getBoundingClientRect().width) || null), "function" == typeof t && t(e))
                    }, [p, t]), j = (0, i.useCallback)(() => {
                        m.current && !d && (m.current.value && (m.current.value = "", null == l || l({
                            target: {
                                value: ""
                            }
                        })), m.current.focus({
                            preventScroll: !a
                        }))
                    }, [m, d, l, a]);
                    return (0, r.jsx)(c.I, { ...f,
                        "aria-label": f["aria-label"] || f.label || f.title,
                        disabled: d,
                        onChange: l,
                        ref: g,
                        suffix: !!n && (0, r.jsx)("button", {
                            className: (0, s.W)(u().button, {
                                [String(u().disabled)]: d
                            }),
                            onClick: j,
                            tabIndex: d ? -1 : void 0,
                            type: "button",
                            children: (0, r.jsx)("span", {
                                children: (0, r.jsx)(o.a, {})
                            })
                        }),
                        suffixContainer: !1,
                        suffixStyling: !1,
                        value: n,
                        width: h || x || void 0
                    })
                })),
                f = (0, i.forwardRef)(function(e, t) {
                    let {
                        clearable: n = !0,
                        loading: i = !1,
                        ...s
                    } = e, o = n ? h : c.I, d = i ? l.$ : a.o;
                    return (0, r.jsx)(o, { ...s,
                        "aria-label": "Search",
                        prefix: (0, r.jsx)(d, {
                            size: 20
                        }),
                        prefixStyling: !1,
                        ref: t,
                        typeName: "search"
                    })
                })
        },
        596571: function(e, t, n) {
            "use strict";
            n.d(t, {
                X: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/>')
        },
        112459: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M13.73 21a2 2 0 01-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0118 8"/><path d="M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 00-9.33-5"/><path d="M1 1l22 22"/>')
        },
        659178: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 2.5v10M15 7.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM5 17.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM15 7.5A7.5 7.5 0 017.5 15" />', !1, {
                viewBox: "0 0 20 20"
            })
        },
        689804: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M15 18l-6-6 6-6"/>')
        },
        476005: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M18 15l-6-6-6 6"/>')
        },
        696342: function(e, t, n) {
            "use strict";
            n.d(t, {
                m: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/>')
        },
        713489: function(e, t, n) {
            "use strict";
            n.d(t, {
                u: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8"/><path d="M12 17v4"/>')
        },
        60171: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5"/>')
        },
        63522: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>')
        },
        430704: function(e, t, n) {
            "use strict";
            n.d(t, {
                m: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><path d="M16 6l-4-4-4 4"/><path d="M12 2v13"/>')
        },
        387644: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/>')
        },
        938187: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return i
                }
            });
            var r = n(361961);
            let i = (0, r.H)('<circle cx="12" cy="12" r="10" fill="var(--geist-fill)"/><path d="M15 9l-6 6" stroke="var(--geist-stroke)"/><path d="M9 9l6 6" stroke="var(--geist-stroke)"/>', !0)
        },
        730672: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return i
                }
            });
            var r = n(521459);
            let i = (0, r.l)('<path fill-rule="evenodd" clip-rule="evenodd" d="M7.9925 0C4.95079 0 2.485 2.46579 2.485 5.5075V8.22669C2.485 8.77318 2.21321 9.28388 1.75992 9.58912L1.33108 9.8779L1 10.1009V10.5V11.25V12H1.75H14.25H15V11.25V10.5V10.0986L14.666 9.87596L14.2306 9.58565C13.7741 9.28137 13.5 8.76913 13.5 8.22059V5.5075C13.5 2.46579 11.0342 0 7.9925 0ZM3.985 5.5075C3.985 3.29422 5.77922 1.5 7.9925 1.5C10.2058 1.5 12 3.29422 12 5.5075V8.22059C12 9.09029 12.36 9.91233 12.9801 10.5H3.01224C3.62799 9.91235 3.985 9.09303 3.985 8.22669V5.5075ZM10.7486 13.5H9.16778L9.16337 13.5133C9.09591 13.716 8.94546 13.9098 8.72067 14.0501C8.52343 14.1732 8.27577 14.25 8.00002 14.25C7.72426 14.25 7.47661 14.1732 7.27936 14.0501C7.05458 13.9098 6.90412 13.716 6.83666 13.5133L6.83225 13.5H5.25143L5.41335 13.9867C5.60126 14.5516 5.99263 15.0152 6.48523 15.3226C6.92164 15.5949 7.44461 15.75 8.00002 15.75C8.55542 15.75 9.07839 15.5949 9.5148 15.3226C10.0074 15.0152 10.3988 14.5516 10.5867 13.9867L10.7486 13.5Z" fill="currentColor"/>')
        },
        1176: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return i
                }
            });
            var r = n(521459);
            let i = (0, r.l)(`<g clip-path="url(#clip0_872_3147)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor"/>
  </g>
  <defs>
  <clipPath id="clip0_872_3147">
  <rect width="16" height="16" fill="white"/>
  </clipPath>
  </defs>`)
        },
        798592: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return i
                }
            });
            var r = n(521459);
            let i = (0, r.l)('<path d="M1.17156 9.61319C1.14041 9.4804 1.2986 9.39676 1.39505 9.49321L6.50679 14.6049C6.60323 14.7014 6.5196 14.8596 6.38681 14.8284C3.80721 14.2233 1.77669 12.1928 1.17156 9.61319ZM1.00026 7.56447C0.997795 7.60413 1.01271 7.64286 1.0408 7.67096L8.32904 14.9592C8.35714 14.9873 8.39586 15.0022 8.43553 14.9997C8.76721 14.9791 9.09266 14.9353 9.41026 14.8701C9.51729 14.8481 9.55448 14.7166 9.47721 14.6394L1.36063 6.52279C1.28337 6.44552 1.15187 6.48271 1.12989 6.58974C1.06466 6.90734 1.02092 7.23278 1.00026 7.56447ZM1.58953 5.15875C1.56622 5.21109 1.57809 5.27224 1.6186 5.31275L10.6872 14.3814C10.7278 14.4219 10.7889 14.4338 10.8412 14.4105C11.0913 14.2991 11.3336 14.1735 11.5672 14.0347C11.6445 13.9888 11.6564 13.8826 11.5929 13.819L2.18099 4.40714C2.11742 4.34356 2.01121 4.35549 1.96529 4.43278C1.8265 4.66636 1.70091 4.9087 1.58953 5.15875ZM2.77222 3.53036C2.7204 3.47854 2.7172 3.39544 2.76602 3.34079C4.04913 1.9043 5.9156 1 7.99327 1C11.863 1 15 4.13702 15 8.00673C15 10.0844 14.0957 11.9509 12.6592 13.234C12.6046 13.2828 12.5215 13.2796 12.4696 13.2278L2.77222 3.53036Z" fill="#5E6AD2"/>')
        },
        624102: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return a
                },
                y: function() {
                    return i
                }
            });
            var r = n(652983);

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (0, r.useRef)(null),
                    i = () => {
                        n.current && clearTimeout(n.current)
                    };
                return (0, r.useEffect)(() => () => i(), []),
                    function() {
                        for (var r = arguments.length, a = Array(r), l = 0; l < r; l++) a[l] = arguments[l];
                        i(), n.current = setTimeout(() => {
                            e(...a)
                        }, t)
                    }
            }

            function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    [n, i] = (0, r.useState)(e);
                return (0, r.useEffect)(() => {
                    let n = setTimeout(() => i(e), t);
                    return () => clearTimeout(n)
                }, [e, t]), n
            }
        },
        685819: function(e) {
            e.exports = {
                searchContainer: "comment-filter-menu_searchContainer__5OTSb",
                divider: "comment-filter-menu_divider__4RAMK",
                stickySearch: "comment-filter-menu_stickySearch__KrvxX",
                menu: "comment-filter-menu_menu__TUGRT"
            }
        },
        967886: function(e) {
            e.exports = {
                backButton: "comment-detail-header_backButton__BhkE6"
            }
        },
        696102: function(e) {
            e.exports = {
                link: "comment-external-link_link__1CZmz"
            }
        },
        882907: function(e) {
            e.exports = {
                leftContainer: "comment-header_leftContainer__eyAWN"
            }
        },
        489035: function(e) {
            e.exports = {
                metadataTooltip: "comment-metadata_metadataTooltip__k5wa3"
            }
        },
        966703: function(e) {
            e.exports = {
                reactionPill: "comment-reaction_reactionPill__pyJRA",
                customReaction: "comment-reaction_customReaction__Ti_Aa"
            }
        },
        819336: function(e) {
            e.exports = {
                image: "comment_image__1_49o",
                imageContainer: "comment_imageContainer__hQNJY",
                resolved: "comment_resolved__6etf_"
            }
        },
        287091: function(e) {
            e.exports = {
                monoText: "comments-list_monoText__5mrwP",
                commentsContainer: "comments-list_commentsContainer___BbTJ",
                commentWrapper: "comments-list_commentWrapper__bx_xN",
                selectedComment: "comments-list_selectedComment__ytS5k",
                commentText: "comments-list_commentText__AQ1ev",
                commentLink: "comments-list_commentLink__7cKQb",
                sidebarPill: "comments-list_sidebarPill__7FETG",
                pill: "comments-list_pill__eCRSi",
                projectPill: "comments-list_projectPill__GQmFE",
                sidebarProjectPill: "comments-list_sidebarProjectPill__NBBUB",
                pagePillText: "comments-list_pagePillText__eit8w",
                resolved: "comments-list_resolved__oK66r"
            }
        },
        236413: function(e) {
            e.exports = {
                menu: "filter-menu_menu__dseYm"
            }
        },
        226690: function(e) {
            e.exports = {
                container: "filter-option-skeleton_container__L2rvw"
            }
        },
        990802: function(e) {
            e.exports = {
                container: "clear-filters_container__2_nF1",
                clearAllFiltersButton: "clear-filters_clearAllFiltersButton__5nZKF"
            }
        },
        639690: function(e) {
            e.exports = {
                code: "wildcard-hint_code__LihxF"
            }
        },
        710260: function(e) {
            e.exports = {
                container: "filter-menu-button_container__UwOz0",
                clearButton: "filter-menu-button_clearButton__nqSdl",
                label: "filter-menu-button_label__U32Rp"
            }
        },
        342372: function(e) {
            e.exports = {
                btn: "bell_btn__yil2q",
                focus: "bell_focus__Xyy4z",
                shadow: "bell_shadow__1T7KD",
                active: "bell_active__4ujl8",
                hover: "bell_hover__Fcewl",
                pressed: "bell_pressed__rwS0h",
                buttonContent: "bell_buttonContent__IPiYG",
                badge: "bell_badge__yCwNU",
                badgeMotion: "bell_badgeMotion__Y26MP",
                frame: "bell_frame__8Kjx3",
                frameMotion: "bell_frameMotion__QuWpT",
                icon: "bell_icon__U0zUM",
                lg: "bell_lg__9YN6B",
                md: "bell_md__7UN4r",
                sm: "bell_sm__iXUFr",
                text: "bell_text__td4wH",
                content: "bell_content__5D6Pg",
                fadeIn: "bell_fadeIn__aAuNe",
                fadeOut: "bell_fadeOut__zblB7",
                overlay: "bell_overlay__SlyX_"
            }
        },
        621290: function(e) {
            e.exports = {
                commentWrapper: "comment-item_commentWrapper__9cnMG",
                selected: "comment-item_selected___1cqC"
            }
        },
        498630: function(e) {
            e.exports = {
                feed: "feed_feed__MOBuW",
                tab: "feed_tab__vY_sd",
                tabText: "feed_tabText__fMvUp",
                headerGrid: "feed_headerGrid__UFhIg",
                feedContent: "feed_feedContent__HPk4g",
                emptyIcon: "feed_emptyIcon__MnZVr",
                archiveFooter: "feed_archiveFooter__ahQ6X",
                view: "feed_view__0UKXo",
                commentsView: "feed_commentsView__MDgXi",
                cell: "feed_cell__Fvs4p",
                settingsLink: "feed_settingsLink__mCxz0",
                breakAll: "feed_breakAll__0qgtl",
                header: "feed_header__rOpyD"
            }
        },
        206811: function(e) {
            e.exports = {
                item: "item_item__CH_4W",
                link: "item_link__rUl_8",
                "focus-visible": "item_focus-visible__qR_Ut",
                focusVisible: "item_focusVisible__RhhSa",
                subject: "item_subject__K55bB",
                subAvatar: "item_subAvatar__M71Qf",
                fallbackIcon: "item_fallbackIcon__WTBvZ",
                hidden: "item_hidden__C84Kl",
                dot: "item_dot__mnXQU",
                archiveButton: "item_archiveButton__n4N7G",
                archive: "item_archive__V76IW",
                notificationContent: "item_notificationContent__sVdcA"
            }
        },
        251793: function(e) {
            e.exports = {
                commentsDetailView: "notifications_commentsDetailView__w5j9c"
            }
        },
        29522: function(e) {
            e.exports = {
                section: "preferences_section__1rHvT",
                checkboxList: "preferences_checkboxList__IdkJm",
                checkboxItem: "preferences_checkboxItem__957oC",
                rowGroup: "preferences_rowGroup___iB_z",
                overageTitle: "preferences_overageTitle__iX4as",
                overageRowBorder: "preferences_overageRowBorder__y4OTD",
                detailPreferenceGearBtn: "preferences_detailPreferenceGearBtn__SWttG",
                overageRow: "preferences_overageRow__i6p8V",
                overageNotifyText: "preferences_overageNotifyText__eLhTN",
                modalBody: "preferences_modalBody__jatxS",
                warningCircle: "preferences_warningCircle__0IXCu",
                modalTitle: "preferences_modalTitle__3cgsI",
                modalText: "preferences_modalText__6tS6G"
            }
        },
        813006: function(e) {
            e.exports = {
                iconContainer: "empty-state_iconContainer__qZDjD",
                root: "empty-state_root__G9Cq4",
                border: "empty-state_border__MhMZL",
                text: "empty-state_text__nE4EV",
                content: "empty-state_content__DTRtS"
            }
        },
        700789: function(e) {
            e.exports = {
                group: "group_group__kGaNq",
                avatar: "group_avatar__lIXsf",
                note: "group_note__qO6KS",
                noteText: "group_noteText__TUrTJ"
            }
        },
        311288: function(e) {
            e.exports = {
                wrapper: "icon_wrapper__aUTb_",
                icon: "icon_icon__bZ2l8"
            }
        },
        891235: function(e) {
            e.exports = {
                card: "card_card__FBT7L",
                rounded: "card_rounded__cmxqS",
                secondary: "card_secondary___yu8z",
                border: "card_border__D6H0T",
                borderBetweenHorizontal: "card_borderBetweenHorizontal__R8j_2",
                borderBetweenVertical: "card_borderBetweenVertical__vZlVx",
                shadow: "card_shadow__6kEaO",
                hoverable: "card_hoverable__Dy1wN"
            }
        },
        94589: function(e) {
            e.exports = {
                button: "clearable_button__MY3qf reset_reset__KRyvc",
                disabled: "clearable_disabled__FaW66"
            }
        }
    }
]);