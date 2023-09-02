(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [65737, 30569, 21721], {
        940416: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return s
                },
                j: function() {
                    return a
                }
            });
            let a = {
                    general: {
                        username: "Your Username",
                        name: "Your Name",
                        email: "Your Email",
                        avatar: "Your Avatar",
                        id: "Your ID",
                        delete: "Delete Personal Account",
                        transfer: "Transfer"
                    },
                    billing: {
                        plan: "Plan",
                        paymentMethod: "Payment Method",
                        remoteCaching: "Remote Caching",
                        spendManagement: "Spend Management"
                    }
                },
                s = {
                    general: "General",
                    loginConnections: "Login Connections",
                    teams: "Teams",
                    billing: "Billing",
                    invoices: "Invoices",
                    tokens: "Tokens",
                    notifications: "My Notifications"
                }
        },
        368919: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return k
                },
                Z: function() {
                    return C
                }
            });
            var a = n(397458),
                s = n(652983),
                r = n(537525),
                i = n.n(r),
                o = n(749210),
                l = n(628987),
                c = n(689804),
                d = n(342958),
                u = n(7594),
                b = n(977753),
                m = n(452134),
                h = n(226111),
                v = n(308108),
                f = n(921949),
                g = n(381475),
                x = n(791688),
                p = n(940416),
                y = n(423918),
                _ = n(664379),
                j = n.n(_);
            let S = (0, s.memo)(e => {
                let {
                    isMobile: t,
                    showMenu: n
                } = e, s = k();
                return t ? n ? (0, a.jsx)("div", {
                    className: j().links,
                    children: s.map(e => {
                        let {
                            href: t,
                            text: n
                        } = e;
                        return (0, a.jsx)(i(), {
                            className: "geist-reset",
                            "data-testid": (0, x.C)("settings", "mobile-menu", n),
                            href: t,
                            children: n
                        }, t)
                    })
                }) : (0, a.jsx)(i(), {
                    className: `geist-reset ${j().menuLink}`,
                    href: "/account",
                    children: (0, a.jsxs)(d.Z, {
                        row: !0,
                        vcenter: !0,
                        children: [(0, a.jsx)(c.s, {
                            size: 20
                        }), (0, a.jsx)("span", {
                            children: "Account Settings"
                        })]
                    })
                }) : (0, a.jsx)(b.Z, {
                    links: s,
                    stickyTop: 64
                })
            });

            function C(e, t) {
                let {
                    full: n = !1,
                    disableLoginError: r = !1
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = function(e, t) {
                    let {
                        full: n,
                        disableLoginError: r
                    } = t;

                    function i() {
                        let t = (0, o.useRouter)(),
                            i = (0, v.e1)(),
                            l = (0, f.Av)(),
                            c = (null == t ? void 0 : t.route) === "/account",
                            b = !l || !c,
                            h = (0, y.P)(null == t ? void 0 : t.query.loginError),
                            x = (null == t ? void 0 : t.query.loginError) && !r && h ? (0, m.j)(h) : null;
                        return (0, s.useEffect)(() => {
                            x && i.error(x.message)
                        }, [x, i]), (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(g.Z, {
                                title: "Personal Account Settings"
                            }), (0, a.jsx)(u.L, {
                                className: "geist-hide-on-tablet",
                                y: 2
                            }), n ? (0, a.jsx)("main", {
                                children: (0, a.jsx)(e, {})
                            }) : (0, a.jsxs)(d.Z, {
                                direction: ["column", "column", "row"],
                                wrapper: !0,
                                children: [(0, a.jsx)(d.Z, {
                                    flex: "0 0 auto",
                                    children: (0, a.jsx)(S, {
                                        isMobile: l,
                                        showMenu: !b
                                    })
                                }), (0, a.jsx)(d.Z, {
                                    children: b ? (0, a.jsx)("main", {
                                        children: (0, a.jsx)(e, {})
                                    }) : null
                                })]
                            }), (0, a.jsx)(u.L, {
                                y: 2
                            })]
                        })
                    }
                    return i.displayName = "SectionWithSidebar", i
                }((0, s.memo)(e), {
                    full: n,
                    disableLoginError: r
                });
                return i.getLayout = function() {
                    return (0, a.jsx)(h.BZ, {
                        Section: i,
                        opts: {
                            pageName: `${t} – Account`,
                            active: "Settings"
                        }
                    })
                }, i
            }
            let k = () => {
                let e = (0, l.usePathname)(),
                    t = (0, f.Av)(),
                    n = [{
                        text: p.U.general,
                        href: t ? "/account/general" : "/account",
                        active: "/account" === e || "/account/general" === e
                    }, {
                        text: p.U.loginConnections,
                        href: "/account/login-connections",
                        active: "/account/login-connections" === e
                    }, {
                        text: p.U.teams,
                        href: "/account/teams",
                        active: "/account/teams" === e
                    }, {
                        text: p.U.billing,
                        href: "/account/billing",
                        active: "/account/billing" === e
                    }, {
                        text: p.U.invoices,
                        href: "/account/invoices",
                        active: "/account/invoices" === e
                    }, {
                        text: p.U.tokens,
                        href: "/account/tokens",
                        active: "/account/tokens" === e
                    }, {
                        text: p.U.notifications,
                        href: "/account/notifications",
                        active: "/account/notifications" === e
                    }];
                return n
            }
        },
        640800: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var a = n(397458),
                s = n(652983),
                r = n(706404),
                i = n.n(r),
                o = n(895022),
                l = n(892982);
            let c = (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "body::before{content:'';display:block;position:fixed;width:100%;height:100%;top:0;left:0;background:var(--geist-background);z-index: 99999}.render body::before{display:none}"
                    }
                }), (0, a.jsx)("noscript", {
                    dangerouslySetInnerHTML: {
                        __html: "<style>body::before{content:none}</style>"
                    }
                })]
            });

            function d(e) {
                let {
                    requireAuth: t = !0,
                    timeout: n = 1e3
                } = e;
                if (t) return (0, a.jsxs)(i(), {
                    children: [c, (0, a.jsx)("script", {
                        dangerouslySetInnerHTML: {
                            __html: `if (!document.cookie || document.cookie.indexOf('isLoggedIn=1') === -1) {
              location.replace('/login?next=' + encodeURIComponent(location.pathname + location.search))
            } else {
              document.documentElement.classList.add('render')
            }`
                        }
                    })]
                });
                let [r, d] = (0, s.useState)(!1), {
                    isLoggedOut: u
                } = (0, l.n)(), b = (0, s.useRef)();
                return b.current = u, (0, s.useEffect)(() => {
                    let e = setTimeout(() => {
                        void 0 === b.current && d(!0)
                    }, n);
                    return () => clearTimeout(e)
                }, [n]), (0, s.useEffect)(() => {
                    u && (document.documentElement.classList.add("render"), d(!1))
                }, [u]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(i(), {
                        children: [c, (0, a.jsx)("script", {
                            dangerouslySetInnerHTML: {
                                __html: `if (!document.cookie || document.cookie.indexOf('isLoggedIn=1') === -1) {
            document.documentElement.classList.add('render')
          }`
                            }
                        })]
                    }), r ? (0, a.jsx)("div", {
                        className: "geist-fade-in",
                        style: {
                            width: 20,
                            height: 20,
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            margin: "auto",
                            zIndex: 1e5
                        },
                        children: (0, a.jsx)(o.$, {})
                    }) : null]
                })
            }
        },
        226111: function(e, t, n) {
            "use strict";
            n.d(t, {
                BZ: function() {
                    return S
                },
                W0: function() {
                    return j
                },
                ZP: function() {
                    return C
                },
                f9: function() {
                    return y
                }
            });
            var a = n(397458),
                s = n(652983),
                r = n(14517),
                i = n(749210),
                o = n(492711),
                l = n(640800),
                c = n(161662),
                d = n(891828),
                u = n(71299),
                b = n(270430),
                m = n(835655),
                h = n(792061),
                v = n(721979),
                f = n(857994),
                g = n(300401),
                x = n(548662);
            let p = function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    {
                        data: t,
                        isLoggedOut: n,
                        isValidating: a,
                        mutate: r
                    } = (0, u.a)(e, !0),
                    {
                        isReady: i,
                        teams: o,
                        team: l,
                        isValidating: c,
                        teamSlug: d,
                        isTeam: m,
                        mutate: h
                    } = (0, b.t7)(),
                    v = (0, s.useCallback)(() => Promise.all([r(), h()]), [r, h]);
                return {
                    isReady: t && i,
                    isValidating: a || c,
                    team: l,
                    teams: o,
                    userData: t,
                    teamSlug: d,
                    isTeam: m,
                    isLoggedOut: n,
                    mutate: v
                }
            };

            function y(e) {
                let {
                    teamSlug: t
                } = (0, f.U)() || {};
                t = (t || "").replace(/\?.+/, "");
                let {
                    team: n,
                    isValidating: a,
                    isReady: r,
                    userData: i,
                    isLoggedOut: o
                } = p(e);
                (0, x.Z)("invited", "You are now a member of this Team.", "success", !a), (0, s.useEffect)(() => {
                    if (e && r) {
                        var s, l;
                        if (!o && !a && t && (null === (s = i.user) || void 0 === s ? void 0 : s.username) !== t && (null === (l = i.user) || void 0 === l ? void 0 : l.uid) !== t && !n) {
                            let e = Error("Team not found");
                            throw e.status = 404, (0, d.nY)(), e
                        }
                    }
                }, [e, i, n, r, o, a, t])
            }
            let _ = (0, s.memo)(e => {
                let {
                    Section: t,
                    opts: n,
                    pageProps: c
                } = e;
                y(n.requireAuth);
                let d = function() {
                        let [e, t] = (0, s.useReducer)((e, t) => ({
                            initial: !1,
                            key: e.initial ? e.key : t
                        }), {
                            initial: !0,
                            key: null
                        }), {
                            query: {
                                teamSlug: n
                            },
                            isReady: a
                        } = (0, i.useRouter)();
                        return (0, s.useEffect)(() => {
                            a && t(n ? ? null)
                        }, [a, n]), e.key
                    }(),
                    {
                        isReady: u,
                        teamSlug: f,
                        isTeam: g
                    } = (0, b.t7)(),
                    {
                        query: x
                    } = (0, i.useRouter)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [n.requireAuth ? (0, a.jsx)(l.Z, {}) : null, (0, a.jsxs)(o.Z, {
                        active: n.active,
                        dashboard: !0,
                        footer: n.footer,
                        fullWidthLayout: n.fullWidthLayout,
                        stickyTabs: n.stickyTabs,
                        title: n.pageName ? `${n.pageName} – Dashboard` : "Dashboard",
                        ...n.pageProps,
                        children: [(0, a.jsx)(m.d, {}), (0, a.jsx)(h.Z, {}), (0, a.jsx)(v.Z, {}), (0, a.jsx)(k, {
                            isDataReady: u,
                            isTeam: g,
                            resetKey: x,
                            teamSlug: f,
                            children: (0, a.jsx)("div", {
                                className: (0, r.W)("dashboard-container", {
                                    gray: n.darkFold
                                }),
                                children: (0, s.createElement)(t, {
                                    active: n.active,
                                    ...c,
                                    key: d
                                })
                            })
                        })]
                    })]
                })
            });

            function j(e) {
                return (0, c.P)(e)
            }
            _.displayName = "DashboardLayout";
            let S = j(_);

            function C(e, t) {
                t = Object.assign({
                    requireAuth: !0,
                    active: ""
                }, t || {});
                let n = (0, s.memo)(e);
                return e.getLayout = function(e, s) {
                    return (0, a.jsx)(S, {
                        Section: n,
                        opts: t,
                        pageProps: s
                    })
                }, e
            }
            class k extends s.Component {
                constructor(e) {
                    super(e), this.state = {
                        hasError: !1,
                        teamSlug: e.teamSlug,
                        resetKey: e.resetKey
                    }
                }
                static getDerivedStateFromError() {
                    return {
                        hasError: !0
                    }
                }
                static getDerivedStateFromProps(e, t) {
                    return e.teamSlug !== t.teamSlug || e.resetKey !== t.resetKey ? {
                        hasError: !1,
                        teamSlug: e.teamSlug,
                        resetKey: e.resetKey
                    } : null
                }
                componentDidCatch(e) {
                    if (404 !== e.status && 403 !== e.status || this.props.isDataReady && (!this.props.isTeam || !this.props.teamSlug)) throw e
                }
                render() {
                    return this.state.hasError ? (0, a.jsx)("div", {
                        className: "geist-within-screen",
                        style: {
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: (0, a.jsx)(g.T, {})
                    }) : this.props.children
                }
            }
        },
        161662: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return l
                },
                P: function() {
                    return c
                }
            });
            var a = n(397458),
                s = n(652983),
                r = n(426326),
                i = n(803972),
                o = n(557251);
            let l = e => class extends s.Component {
                static async getInitialProps(t) {
                    let n = {};
                    return e.getInitialProps && (n = await e.getInitialProps(t)), n.statusCode && t.res && (t.res.statusCode = n.statusCode), n
                }
                render() {
                    return this.props.statusCode ? (0, a.jsx)(o.default, {
                        err: this.props.err,
                        reported: !0,
                        statusCode: this.props.statusCode
                    }) : (0, a.jsx)(e, { ...this.props
                    })
                }
            };

            function c(e) {
                class t extends s.PureComponent {}
                class n extends t {
                    static getDerivedStateFromError(e) {
                        var t;
                        if (404 === e.status && e.teamSlug && e.membershipRequestedBy) throw e;
                        let n = e.statusCode || e.status || (null === (t = e.res) || void 0 === t ? void 0 : t.status);
                        return (0, i.captureError)(e, {
                            statusCode: n
                        }), {
                            error: e
                        }
                    }
                    componentDidUpdate(e) {
                        e.router.asPath !== this.props.router.asPath && this.state.error && this.setState({
                            error: null
                        })
                    }
                    render() {
                        let {
                            error: t
                        } = this.state;
                        if (t) {
                            var n;
                            let e = t.statusCode || t.status || (null === (n = t.res) || void 0 === n ? void 0 : n.status);
                            return (0, a.jsx)(o.default, {
                                err: t,
                                reported: !0,
                                statusCode: e
                            })
                        }
                        return (0, a.jsx)(e, { ...this.props
                        })
                    }
                    constructor(...e) {
                        super(...e), this.state = {
                            error: null
                        }
                    }
                }
                return n.getInitialProps = t => e.getInitialProps ? e.getInitialProps(t) : {}, n.getLayout = e.getLayout, (0, r.withRouter)(n)
            }
        },
        30569: function(e, t, n) {
            "use strict";
            n.d(t, {
                m: function() {
                    return l
                }
            });
            var a = n(397458),
                s = n(14517),
                r = n(121446),
                i = n(815598),
                o = n.n(i);

            function l(e) {
                return "secondary" === e.type ? (0, a.jsx)("div", {
                    className: (0, s.W)("geist-no-scrollbar", o().tabsSecondary, {
                        [o().disabled || ""]: e.disabled,
                        [o().centered || ""]: e.centered,
                        [o().bold || ""]: e.bold,
                        [o().noBorder || ""]: e.noBorder
                    }),
                    "data-geist-tabs": "",
                    "data-version": "v1",
                    ref: e.ref,
                    style: e.style,
                    children: e.tabs.map(t => (0, a.jsx)("div", {
                        "aria-disabled": e.disabled,
                        className: (0, s.W)(o().tabSecondaryContainer, {
                            [o().activeSecondaryTabContainer || ""]: e.selected === t.value,
                            [o().disabledSecondaryTabContainer || ""]: e.disabled
                        }),
                        "data-geist-tab": "",
                        "data-testid": t["data-testid"],
                        onClick: () => {
                            if (!e.disabled) {
                                var n;
                                null === (n = e.setSelected) || void 0 === n || n.call(e, t.value)
                            }
                        },
                        onKeyDown: n => {
                            var a, s;
                            e.disabled || " " !== n.key || (n.preventDefault(), null === (a = e.setSelected) || void 0 === a || a.call(e, t.value)), e.disabled || "Enter" !== n.key || (n.preventDefault(), null === (s = e.setSelected) || void 0 === s || s.call(e, t.value))
                        },
                        role: "button",
                        tabIndex: e.tabIndex ? e.tabIndex : 0,
                        children: (0, a.jsxs)("div", {
                            className: (0, s.W)(o().tabsSecondary, {
                                [o().activeSecondaryTab || ""]: e.selected === t.value
                            }),
                            children: [t.icon ? (0, a.jsx)("div", {
                                className: o().tabSecondaryIcon,
                                children: t.icon
                            }) : null, (0, a.jsx)(r.x, {
                                as: "div",
                                color: e.textColor || "gray-1000",
                                size: 13,
                                children: t.title
                            })]
                        })
                    }, t.value))
                }) : (0, a.jsx)("div", {
                    className: (0, s.W)("geist-no-scrollbar", o().tabs, {
                        [o().disabled || ""]: e.disabled,
                        [o().centered || ""]: e.centered,
                        [o().bold || ""]: e.bold,
                        [o().noBorder || ""]: e.noBorder
                    }),
                    "data-geist-tabs": "",
                    "data-version": "v1",
                    ref: e.ref,
                    style: e.style,
                    children: e.tabs.map(t => (0, a.jsx)("div", {
                        "aria-disabled": e.disabled,
                        className: o().tabContainer,
                        "data-geist-tab": "",
                        "data-testid": t["data-testid"],
                        onClick: () => {
                            if (!e.disabled) {
                                var n;
                                null === (n = e.setSelected) || void 0 === n || n.call(e, t.value)
                            }
                        },
                        onKeyDown: n => {
                            var a, s;
                            e.disabled || " " !== n.key || (n.preventDefault(), null === (a = e.setSelected) || void 0 === a || a.call(e, t.value)), e.disabled || "Enter" !== n.key || (n.preventDefault(), null === (s = e.setSelected) || void 0 === s || s.call(e, t.value))
                        },
                        role: "button",
                        tabIndex: e.tabIndex ? e.tabIndex : 0,
                        children: (0, a.jsxs)("div", {
                            className: (0, s.W)(o().tab, {
                                [o().activeTab || ""]: e.selected === t.value
                            }),
                            children: [t.icon ? (0, a.jsx)("div", {
                                className: o().tabIcon,
                                children: t.icon
                            }) : null, (0, a.jsx)(r.x, {
                                as: "div",
                                color: e.textColor || "gray-900",
                                size: 14,
                                children: t.title
                            })]
                        })
                    }, t.value))
                })
            }
        },
        664379: function(e) {
            e.exports = {
                links: "sidebar_links__kl4fN",
                disabled: "sidebar_disabled__l1nLC",
                menuLink: "sidebar_menuLink__99run"
            }
        },
        815598: function(e) {
            e.exports = {
                tabs: "tabs_tabs__rJYVD",
                centered: "tabs_centered__Zh6B_",
                bold: "tabs_bold__CVov9",
                noBorder: "tabs_noBorder__SZUg4",
                tabContainer: "tabs_tabContainer___bdiV",
                disabled: "tabs_disabled__iApRF",
                tab: "tabs_tab__MRwiF",
                activeTab: "tabs_activeTab__L_G3G",
                tabIcon: "tabs_tabIcon__Oh2re",
                tabsSecondary: "tabs_tabsSecondary__b5gGt",
                tabSecondaryContainer: "tabs_tabSecondaryContainer__3weL8",
                activeSecondaryTabContainer: "tabs_activeSecondaryTabContainer__c75La",
                disabledSecondaryTabContainer: "tabs_disabledSecondaryTabContainer__xtlL1"
            }
        }
    }
]);