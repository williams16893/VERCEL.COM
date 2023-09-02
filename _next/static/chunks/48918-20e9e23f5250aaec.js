(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [48918], {
        381475: function(e, t, i) {
            "use strict";
            var n = i(397458),
                s = i(14517),
                l = i(132950),
                a = i(121446),
                r = i(342958),
                o = i(435641),
                c = i.n(o);
            t.Z = function(e) {
                let {
                    children: t,
                    title: i,
                    description: o,
                    message: d,
                    controls: m,
                    hideControlsOnMobile: u,
                    actions: h,
                    darkFold: g,
                    buttons: _,
                    buttonsStackDirection: f,
                    buttonsStackStyle: b = {},
                    truncateTitle: x,
                    noBorder: p = !1
                } = e;
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsxs)("header", {
                        className: (0, s.W)(c().wrapper, {
                            [c().border]: !p
                        }),
                        children: [(0, n.jsx)(r.Z, {
                            wrapper: !0,
                            children: (0, n.jsxs)(l.K, {
                                align: {
                                    sm: "stretch",
                                    md: "flex-start",
                                    lg: "center"
                                },
                                className: c()["title-container"],
                                direction: {
                                    sm: "column",
                                    lg: "row"
                                },
                                gap: {
                                    sm: 6,
                                    md: 6,
                                    lg: 10
                                },
                                children: [(0, n.jsxs)(l.K, {
                                    direction: "column",
                                    flex: 1,
                                    gap: 4,
                                    style: {
                                        minWidth: x ? 0 : void 0,
                                        width: "100%"
                                    },
                                    children: ["string" == typeof i ? (0, n.jsx)(a.x, {
                                        as: "h1",
                                        size: 32,
                                        title: x ? i : void 0,
                                        truncate: x,
                                        weight: 500,
                                        wrap: !x,
                                        children: i
                                    }) : i, !!o && (0, n.jsx)("span", {
                                        className: "text-gray-900",
                                        children: o
                                    })]
                                }), !!_ && (0, n.jsx)(l.K, {
                                    direction: f || {
                                        sm: "column",
                                        md: "row",
                                        lg: "row"
                                    },
                                    gap: {
                                        sm: 4,
                                        md: 4,
                                        lg: 4
                                    },
                                    style: {
                                        flexWrap: "wrap",
                                        ...b
                                    },
                                    children: _
                                })]
                            })
                        }), d ? (0, n.jsx)("div", {
                            className: c().message,
                            children: d
                        }) : null, m || h ? (0, n.jsxs)("div", {
                            className: (0, s.W)(c().menu, {
                                [c().center]: !m || !h || u
                            }),
                            children: [m ? (0, n.jsx)("div", {
                                className: (0, s.W)(c().controls, {
                                    [c().hideOnMobile]: u
                                }),
                                children: m
                            }) : (0, n.jsx)("div", {}), h ? (0, n.jsx)("div", {
                                className: c().actions,
                                children: h
                            }) : (0, n.jsx)("div", {})]
                        }) : null]
                    }), g ? (0, n.jsx)("div", {
                        className: c()["child-wrapper"],
                        children: (0, n.jsx)("div", {
                            className: c().main,
                            children: t
                        })
                    }) : t ? (0, n.jsx)("div", {
                        className: c().main,
                        children: t
                    }) : null]
                })
            }
        },
        977753: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return f
                }
            });
            var n = i(397458),
                s = i(14517),
                l = i(537525),
                a = i.n(l),
                r = i(652983),
                o = i(132950),
                c = i(121446),
                d = i(426476),
                m = i(840905),
                u = i(791688),
                h = i(210699),
                g = i(562615),
                _ = i.n(g);

            function f(e) {
                var t, i, l, a;
                let {
                    links: o,
                    sticky: c = !0,
                    stickyTop: m = 0,
                    className: u,
                    showAccountSection: g
                } = e, f = (0, h.Z)(), p = (0, r.useMemo)(() => o.filter(e => !e.inAccountSection).map(e => {
                    let {
                        inAccountSection: t,
                        ...i
                    } = e;
                    return i
                }), [o]), v = (0, r.useMemo)(() => o.filter(e => e.inAccountSection).map(e => {
                    let {
                        inAccountSection: t,
                        ...i
                    } = e;
                    return i
                }), [o]);
                return (0, n.jsx)("div", {
                    className: (0, s.W)(u, _().sidebar),
                    "data-geist-sidebar": "",
                    "data-version": "v1",
                    style: c ? {
                        position: "sticky",
                        top: m
                    } : void 0,
                    children: g && v.filter(e => !e.hide).length > 0 ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(x, {
                            first: !0,
                            text: "TEAM",
                            children: (0, n.jsx)(d.qE, {
                                hash: null === (t = f.team) || void 0 === t ? void 0 : t.avatar,
                                placeholder: !f.team,
                                size: 20,
                                teamId: null === (i = f.team) || void 0 === i ? void 0 : i.id
                            })
                        }), p.map(e => (0, n.jsx)(b, { ...e
                        }, e.text)), (0, n.jsx)(x, {
                            text: "ACCOUNT",
                            children: (0, n.jsx)(d.qE, {
                                hash: null === (l = f.user) || void 0 === l ? void 0 : l.avatar,
                                placeholder: !f.user,
                                size: 20,
                                username: null === (a = f.user) || void 0 === a ? void 0 : a.username
                            })
                        }), v.map(e => (0, n.jsx)(b, { ...e
                        }, e.text))]
                    }) : p.map(e => (0, n.jsx)(b, { ...e
                    }, e.text))
                })
            }

            function b(e) {
                let {
                    href: t,
                    as: i,
                    text: l,
                    active: r,
                    disabled: o,
                    tooltip: c,
                    hide: d,
                    external: h,
                    scroll: g,
                    ...f
                } = e;
                if (d) return null;
                if (t) {
                    let e = (0, n.jsx)(a(), {
                        as: i,
                        href: t,
                        legacyBehavior: !0,
                        scroll: g,
                        shallow: !1,
                        children: (0, n.jsxs)("a", {
                            className: (0, s.W)(_().entry, {
                                [_().active]: r,
                                [_().disabled]: o
                            }),
                            "data-testid": (0, u.C)("settings", "sidebar", l.toLowerCase()),
                            rel: h ? "noopener" : void 0,
                            target: h ? "_blank" : void 0,
                            ...f,
                            children: [l, h ? (0, n.jsxs)(n.Fragment, {
                                children: [" ", (0, n.jsx)(m.d, {
                                    size: "1em",
                                    style: {
                                        position: "relative",
                                        marginLeft: 2,
                                        top: 2
                                    },
                                    weight: "bold"
                                })]
                            }) : null]
                        })
                    }, t);
                    return c ? (0, n.jsxs)("div", {
                        style: {
                            position: "relative"
                        },
                        children: [e, c]
                    }, `tooltip_${t}`) : e
                }
                return null
            }

            function x(e) {
                let {
                    children: t,
                    text: i,
                    first: l
                } = e;
                return (0, n.jsxs)(o.K, {
                    align: "center",
                    className: (0, s.W)({
                        [_().section]: !0,
                        [_().first]: l
                    }),
                    direction: "row",
                    gap: 2,
                    children: [t, (0, n.jsx)(c.x, {
                        color: "gray-900",
                        lineHeight: 20,
                        size: 12,
                        weight: 600,
                        children: i
                    })]
                })
            }
        },
        48918: function(e, t, i) {
            "use strict";
            i.d(t, {
                ZP: function() {
                    return P
                },
                v4: function() {
                    return Z
                }
            });
            var n = i(397458),
                s = i(652983),
                l = i(537525),
                a = i.n(l),
                r = i(14517),
                o = i(749210),
                c = i(628987),
                d = i(689804),
                m = i(132950),
                u = i(342958),
                h = i(977753),
                g = i(7594),
                _ = i(226111),
                f = i(381475),
                b = i(211679),
                x = i(791688),
                p = i(270430),
                v = i(353729),
                j = i(464287),
                k = i(121123),
                w = i(857994),
                y = i(529842),
                $ = i(210699),
                N = i(891828);

            function S() {
                let e = function() {
                        let [e, t] = (0, s.useState)(!1), {
                            teamSlug: i
                        } = (0, w.U)() || {}, n = (0, y.b)().get("membershipRequestedBy"), {
                            data: l,
                            error: a
                        } = (0, v.ZP)(() => i && n ? `${k.CZ}/${i}/request/${n}` : null, e => (0, j.Z)(e, {
                            throwOnHTTPError: !0
                        }));
                        return (0, s.useEffect)(() => {
                            if (i && n && (l || a)) {
                                t(!1);
                                return
                            }
                            if (i && n && !l && !a) {
                                t(!0);
                                return
                            }
                        }, [i, n, l, a]), {
                            isLoading: e,
                            membershipRequestStatus: l
                        }
                    }(),
                    t = (0, c.useSearchParams)(),
                    i = (0, c.usePathname)(),
                    {
                        isTeam: n,
                        isLoggedOut: l,
                        team: a
                    } = (0, $.Z)();
                if (i && !1 === n && !1 === l && "/teams/create" !== i && !e.isLoading) {
                    let i = Error("Team not found");
                    throw i.status = 404, e.membershipRequestStatus && !e.membershipRequestStatus.confirmed && (i.teamSlug = null == a ? void 0 : a.slug, i.membershipRequestedBy = (null == t ? void 0 : t.get("membershipRequestedBy")) || void 0), (0, N.nY)(), i
                }
                return null
            }
            var T = i(180152),
                A = i.n(T),
                I = i(272525);
            let L = (0, s.memo)(function() {
                    let e = (0, c.usePathname)(),
                        {
                            teamSlug: t
                        } = (0, w.U)() || {},
                        i = encodeURIComponent(t || ""),
                        s = e === `/teams/${i}/settings`,
                        l = Z();
                    return "/teams/create" === e ? (0, n.jsxs)("div", {
                        className: "geist-hide-on-tablet",
                        children: [(0, n.jsx)(h.Z, {
                            links: [{
                                text: "New Team",
                                active: !0
                            }],
                            stickyTop: 64
                        }), " "]
                    }) : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: (0, r.W)("geist-show-on-tablet", {
                                [A().hide]: s
                            }),
                            children: (0, n.jsx)(a(), {
                                className: (0, r.W)("geist-reset", A().back),
                                href: i ? `/teams/${i}/settings` : "",
                                children: (0, n.jsxs)(m.K, {
                                    align: "center",
                                    direction: "row",
                                    gap: .5,
                                    children: [(0, n.jsx)(d.s, {
                                        size: 20
                                    }), (0, n.jsx)("span", {
                                        children: "Settings"
                                    })]
                                })
                            })
                        }), (0, n.jsx)(h.Z, {
                            className: "geist-hide-on-tablet",
                            links: l.desktopLinks,
                            showAccountSection: !0,
                            stickyTop: 64
                        }), (0, n.jsx)("div", {
                            className: (0, r.W)("geist-show-on-tablet", A().tabletLinks, {
                                [A().hide]: !s
                            }),
                            children: l.mobileLinks.map(e => e.hide ? null : (0, n.jsx)(a(), {
                                className: "geist-reset",
                                "data-testid": e.testId,
                                href: e.href,
                                children: e.text
                            }, e.href))
                        })]
                    })
                }),
                Z = () => {
                    var e, t;
                    let i = (0, c.usePathname)(),
                        {
                            team: n,
                            isReady: l,
                            teamSlug: a
                        } = (0, p.t7)(),
                        r = encodeURIComponent(a || ""),
                        {
                            isReady: o,
                            value: d
                        } = (0, b.RW)(),
                        m = (0, s.useCallback)(function(e, t) {
                            for (var n = arguments.length, s = Array(n > 2 ? n - 2 : 0), l = 2; l < n; l++) s[l - 2] = arguments[l];
                            if (i) return (0, x.C)(e, t, ...s)
                        }, [i]),
                        u = !!((null == n ? void 0 : null === (e = n.billing) || void 0 === e ? void 0 : e.plan) === "hobby" || (null == n ? void 0 : null === (t = n.billing) || void 0 === t ? void 0 : t.trial) && "pro" === n.billing.plan),
                        h = (0, s.useMemo)(() => {
                            if (!a || !l) return {
                                desktopLinks: [],
                                mobileLinks: []
                            };
                            let e = [{
                                    text: I.$.general,
                                    href: `/teams/${r}/settings`,
                                    active: i === `/teams/${r}/settings` || i === `/teams/${r}/settings/general`,
                                    mobileHref: `/teams/${r}/settings/general`,
                                    mobileTestId: m("team-settings", "mobile-general-link"),
                                    inAccountSection: !1
                                }, {
                                    text: I.$.billing,
                                    href: `/teams/${r}/settings/billing`,
                                    mobileTestId: m("team-settings", "mobile-billing-link"),
                                    inAccountSection: !1
                                }, {
                                    text: I.$.invoices,
                                    href: `/teams/${r}/settings/invoices`,
                                    mobileTestId: m("team-settings", "mobile-invoices-link"),
                                    inAccountSection: !1
                                }, {
                                    text: I.$.members,
                                    href: `/teams/${r}/settings/members`,
                                    mobileTestId: m("team-settings", "mobile-members-link"),
                                    inAccountSection: !1
                                }, {
                                    hide: u,
                                    text: I.$.logDrains,
                                    href: `/teams/${r}/settings/log-drains`,
                                    mobileTestId: m("team-settings", "mobile-log-drains-link"),
                                    inAccountSection: !1
                                }, {
                                    hide: u,
                                    text: I.$.webhooks,
                                    href: `/teams/${r}/settings/webhooks`,
                                    mobileTestId: m("team-settings", "mobile-webhooks-link"),
                                    inAccountSection: !1
                                }, {
                                    text: I.$.security,
                                    href: `/teams/${r}/settings/security`,
                                    mobileTestId: m("team-settings", "mobile-security-link"),
                                    inAccountSection: !1
                                }, {
                                    href: `/teams/${r}/settings/secure-compute`,
                                    inAccountSection: !1,
                                    mobileTestId: m("team-settings", "mobile-secure-compute-link"),
                                    text: I.$.secureCompute
                                }, {
                                    text: I.$.notifications,
                                    href: `/teams/${r}/settings/notifications`,
                                    mobileTestId: m("team-settings", "mobile-notifications-link"),
                                    inAccountSection: !0
                                }, {
                                    hide: !o || !d,
                                    text: I.$.environmentVariables,
                                    href: `/teams/${r}/settings/environment-variables`,
                                    mobileTestId: m("team-settings", "mobile-environment-variables-link"),
                                    inAccountSection: !1
                                }],
                                t = e.filter(Boolean);
                            return {
                                desktopLinks: t.map(e => {
                                    let {
                                        hide: t,
                                        text: n,
                                        href: s,
                                        active: l,
                                        inAccountSection: a
                                    } = e;
                                    return {
                                        hide: t,
                                        text: n,
                                        href: s,
                                        active: l ? ? i === s,
                                        inAccountSection: a
                                    }
                                }),
                                mobileLinks: t.map(e => {
                                    let {
                                        hide: t,
                                        text: i,
                                        href: n,
                                        mobileHref: s,
                                        mobileTestId: l,
                                        inAccountSection: a
                                    } = e;
                                    return {
                                        hide: t,
                                        text: i,
                                        href: s || n,
                                        testId: l,
                                        inAccountSection: a
                                    }
                                })
                            }
                        }, [a, l, r, i, m, u, o, d]);
                    return h
                };

            function P(e, t) {
                let i = function(e) {
                    function t() {
                        let t = (0, o.useRouter)(),
                            i = (null == t ? void 0 : t.route) === "/teams/[teamSlug]/settings",
                            s = null == t ? void 0 : t.query.teamSlug;
                        return (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(S, {}), (0, n.jsx)(f.Z, {
                                title: "Settings"
                            }), (0, n.jsx)(g.L, {
                                className: "geist-hide-on-tablet",
                                y: 2
                            }), (0, n.jsxs)(u.Z, {
                                direction: ["column", "column", "row"],
                                wrapper: !0,
                                children: [(0, n.jsx)(u.Z, {
                                    flex: "0 0 auto",
                                    children: (0, n.jsx)(L, {})
                                }), (0, n.jsx)(u.Z, {
                                    className: (0, r.W)(A().content, {
                                        [A().menuPage]: i
                                    }),
                                    children: s ? (0, n.jsx)(e, {}, s) : null
                                })]
                            }), (0, n.jsx)(g.L, {
                                y: 2
                            })]
                        })
                    }
                    return t.displayName = "TeamSettingsWithSidebar", t
                }((0, s.memo)(e));
                return i.getLayout = function() {
                    return (0, n.jsx)(_.BZ, {
                        Section: i,
                        opts: {
                            pageName: `${t?`${t} - `:""}Team Settings`,
                            active: "Settings"
                        }
                    })
                }, i
            }
        },
        435641: function(e) {
            e.exports = {
                wrapper: "full-heading_wrapper__9T5_B",
                border: "full-heading_border__7BVR3",
                icon: "full-heading_icon__Fk3_z",
                "title-container": "full-heading_title-container__A8byf",
                header: "full-heading_header__dOrpM",
                menu: "full-heading_menu__y2Ayy",
                message: "full-heading_message__o2CPC",
                main: "full-heading_main__Iy5cb",
                title: "full-heading_title__Os3DI",
                actions: "full-heading_actions__5L9Yo",
                "child-wrapper": "full-heading_child-wrapper___frxz",
                controls: "full-heading_controls__3qWgP",
                hideOnMobile: "full-heading_hideOnMobile__Pj7kU",
                center: "full-heading_center__oTRf7",
                "title-container-with-actions": "full-heading_title-container-with-actions__5180x",
                "full-heading-overlapped": "full-heading_full-heading-overlapped__3dQgJ"
            }
        },
        562615: function(e) {
            e.exports = {
                sidebar: "sidebar_sidebar__0n2fV",
                entry: "sidebar_entry__M2eoF",
                active: "sidebar_active__sUGSE",
                disabled: "sidebar_disabled__VN_xp",
                section: "sidebar_section__6tAjN",
                first: "sidebar_first__FDn_V"
            }
        },
        180152: function(e) {
            e.exports = {
                createTeam: "with-team-settings_createTeam__6k8Lm",
                back: "with-team-settings_back__tAgCO",
                tabletLinks: "with-team-settings_tabletLinks__pxZhK",
                hide: "with-team-settings_hide__mPVNK",
                content: "with-team-settings_content__PFEPQ",
                menuPage: "with-team-settings_menuPage__2Ov3h"
            }
        }
    }
]);