(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [22082], {
        725898: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return z
                }
            });
            var r = t(397458),
                i = t(652983),
                s = t(14517),
                l = t(863482),
                a = t.n(l),
                o = t(927223),
                c = t(71299),
                u = t(166795),
                d = t(185721),
                h = t(530137),
                m = t.n(h),
                x = t(54339),
                f = t(537525),
                g = t.n(f),
                p = t(597041),
                j = t(121446),
                _ = t(582526),
                v = t(684874),
                b = t(73172),
                y = t(240904),
                w = t(327818),
                k = t(898177),
                L = t.n(k);
            let N = i.createContext({}),
                C = () => i.useContext(N);

            function S(e) {
                let {
                    open: n,
                    activeHref: t,
                    className: l,
                    enterpriseLinksOnly: a = !1
                } = e, o = i.useRef(null), [c, u] = i.useState(""), [d, h] = i.useState(!1);
                return i.useEffect(() => {
                    n || u("")
                }, [n]), i.useEffect(() => {
                    (0, b.G6)() && setTimeout(() => {
                        let e = o.current;
                        if (!e) return;
                        let n = getComputedStyle(e).getPropertyValue("--blur");
                        n > (0, y.Z)(E) || setTimeout(() => {
                            var e;
                            null === (e = o.current) || void 0 === e || e.style.setProperty("--blur", (0, y.Z)(parseInt(n) + 1))
                        })
                    })
                }, [c]), (0, r.jsxs)(p.fC, {
                    "aria-label": "Navigation header with 5 links and 1 dropdown menu with links",
                    className: (0, s.W)(L().root, l),
                    delayDuration: 0,
                    onValueChange: e => {
                        (e || !d) && u(e)
                    },
                    value: c,
                    children: [(0, r.jsx)(N.Provider, {
                        value: {
                            activeHref: t
                        },
                        children: (0, r.jsxs)(p.aV, {
                            className: L().list,
                            children: [!a && (0, r.jsxs)(p.ck, {
                                value: "features",
                                children: [(0, r.jsx)(T, {
                                    children: "Features"
                                }), (0, r.jsx)(p.VY, {
                                    className: L().content,
                                    forceMount: !0,
                                    children: (0, r.jsx)("ul", {
                                        className: (0, s.W)(L().features, L().withStorage),
                                        children: (0, r.jsx)("li", {
                                            className: (0, s.W)(L().featuresLinks, L().withStorage),
                                            children: w.YX.map(e => {
                                                let {
                                                    name: n,
                                                    description: t,
                                                    icon: i,
                                                    href: s
                                                } = e;
                                                return (0, r.jsx)(I, {
                                                    "data-feature": n,
                                                    href: s,
                                                    icon: i,
                                                    title: n,
                                                    children: t
                                                }, n)
                                            })
                                        })
                                    })
                                })]
                            }), !a && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(P, {
                                    href: "/docs",
                                    children: "Docs"
                                }), (0, r.jsx)(P, {
                                    href: "/templates",
                                    children: "Templates"
                                }), (0, r.jsx)(P, {
                                    href: "/integrations",
                                    children: "Integrations"
                                })]
                            }), (0, r.jsx)(P, {
                                href: "/customers",
                                children: "Customers"
                            }), (0, r.jsx)(P, {
                                href: "/enterprise",
                                children: "Enterprise"
                            }), (0, r.jsx)(P, {
                                href: "/pricing",
                                children: "Pricing"
                            }), (0, r.jsx)(p.z$, {
                                className: L().indicator,
                                children: (0, r.jsx)(M, {
                                    className: L().arrow
                                })
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: L().viewportPosition,
                        onMouseEnter: () => {
                            h(!0)
                        },
                        onMouseLeave: () => {
                            h(!1)
                        },
                        children: (0, r.jsx)(p.l_, {
                            className: L().viewport,
                            ref: o,
                            style: {
                                "--blur": (0, y.Z)(E)
                            }
                        })
                    })]
                })
            }

            function T(e) {
                let {
                    children: n,
                    ...t
                } = e, {
                    activeHref: i
                } = C(), s = w.YX.some(e => {
                    let {
                        href: n
                    } = e;
                    return n === i
                });
                return (0, r.jsxs)(p.xz, {
                    className: L().trigger,
                    ...t,
                    "data-active": s,
                    children: [n, (0, r.jsx)(_._, {
                        "aria-hidden": !0
                    })]
                })
            }

            function I(e) {
                let {
                    className: n,
                    children: t,
                    title: i,
                    icon: l,
                    ...a
                } = e;
                return (0, r.jsx)(p.rU, {
                    asChild: !0,
                    onClick: () => {
                        v.co.track(v.s6.MARKETING_NAVIGATION_CLICKED, {
                            click_value: i
                        })
                    },
                    children: (0, r.jsxs)(g(), {
                        className: (0, s.W)(L().menuSubLink, n),
                        ...a,
                        children: [(0, r.jsxs)("div", {
                            className: L().menuItemHeading,
                            children: [l, i]
                        }), (0, r.jsx)(j.x, {
                            as: "p",
                            className: L().menuItemText,
                            lineHeight: 20,
                            size: 14,
                            children: t
                        })]
                    })
                })
            }

            function P(e) {
                let {
                    children: n,
                    href: t
                } = e, {
                    activeHref: i
                } = C(), s = null == i ? void 0 : i.startsWith(t);
                return (0, r.jsx)(p.ck, {
                    onClick: () => {
                        v.co.track(v.s6.MARKETING_NAVIGATION_CLICKED, {
                            click_value: n
                        })
                    },
                    children: (0, r.jsx)(g(), {
                        className: L().link,
                        "data-active": s,
                        href: t,
                        children: n
                    })
                })
            }

            function M(e) {
                return (0, r.jsxs)("svg", {
                    fill: "none",
                    height: "46",
                    viewBox: "0 0 158 46",
                    width: "158",
                    ...e,
                    children: [(0, r.jsx)("path", {
                        d: "M70.952 36.8018L55.1106 20.9604C47.384 13.2338 43.5207 9.37047 39.0122 6.6077C35.0151 4.15823 30.6573 2.35317 26.0988 1.25878C20.9573 0.0244141 15.4938 0.0244141 4.56672 0.0244141H153.132C142.205 0.0244141 136.742 0.0244141 131.6 1.25878C127.042 2.35317 122.684 4.15823 118.687 6.6077C114.178 9.37047 110.315 13.2338 102.588 20.9604L86.7469 36.8018C82.3853 41.1635 75.3137 41.1635 70.952 36.8018Z",
                        fill: "var(--arrow-bg)"
                    }), (0, r.jsx)("path", {
                        d: "M153.132 5.60877C141.939 5.60877 137.253 5.64466 132.904 6.68885C128.915 7.64643 125.102 9.22586 121.605 11.3691C117.791 13.7062 114.452 16.9946 106.537 24.9091L90.6957 40.7506C84.1532 47.293 73.5457 47.293 67.0033 40.7505L51.1618 24.9091C43.2473 16.9946 39.9082 13.7062 36.0944 11.3691C32.5969 9.22586 28.7838 7.64643 24.7952 6.68885C20.4458 5.64466 15.7596 5.60877 4.56672 5.60877H0.668457V0.0244141H4.56672C15.4938 0.0244141 20.9573 0.0244141 26.0988 1.25878C30.6573 2.35317 35.0151 4.15823 39.0122 6.6077C43.5207 9.37047 47.384 13.2338 55.1106 20.9604L70.952 36.8018C75.3137 41.1635 82.3853 41.1635 86.7469 36.8018L102.588 20.9604C110.315 13.2338 114.178 9.37047 118.687 6.6077C122.684 4.15823 127.042 2.35317 131.6 1.25878C136.742 0.0244141 142.205 0.0244141 153.132 0.0244141H157.03V5.60877H153.132Z",
                        fill: "var(--menu-border-color)"
                    })]
                })
            }
            let E = 45;

            function H(e) {
                let {
                    logo: n,
                    hideProfile: t,
                    teamSlug: i,
                    hideAllNavigation: s,
                    banner: l,
                    isMarketingPage: a
                } = e, {
                    hasScrolled: c,
                    section: h,
                    isLoggedOut: m
                } = (0, o.g4)();
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(d.h, {
                        hasScrolled: c,
                        isLoggedIn: !m,
                        logo: n
                    }), s ? null : (0, r.jsx)(u.MobileMenu, {
                        breakpoint: 1151,
                        hasBanner: !!l,
                        hideProfile: t,
                        isMarketingPage: a,
                        section: h,
                        teamSlug: i
                    })]
                })
            }

            function O(e) {
                let {
                    hideProfile: n,
                    hideCTAOnScroll: t,
                    headerImport: i,
                    hideLogin: s,
                    hideSignUp: l,
                    hideDocs: a,
                    hasFeedback: o,
                    minimal: u,
                    hideAllNavigation: d,
                    animateLinks: h,
                    isMarketingPage: m
                } = e, {
                    user: f,
                    isLoading: g
                } = (0, c.a)();
                return (0, r.jsx)(x.U, {
                    animateLinks: h,
                    hasFeedback: o,
                    headerImport: i,
                    hideAllNavigation: d,
                    hideCTAOnScroll: t,
                    hideDocs: a,
                    hideLogin: s,
                    hideProfile: n,
                    hideSignUp: l,
                    initialUser: f,
                    isMarketingPage: m,
                    isUserLoading: g,
                    minimal: u
                })
            }

            function R(e) {
                let {
                    hideAllNavigation: n,
                    minimal: t,
                    enterpriseLinksOnly: i
                } = e, {
                    morphingContactSalesIsActive: s,
                    featuresPopoverOpen: l,
                    section: a
                } = (0, o.g4)();
                return (0, r.jsx)(W, {
                    className: s ? m()["fade-out-for-contact-sales"] : void 0,
                    enterpriseLinksOnly: i,
                    hidden: t || n,
                    open: l,
                    section: a
                })
            }

            function Z() {
                let {
                    banner: e
                } = (0, o.g4)();
                return e
            }

            function W(e) {
                let {
                    hidden: n,
                    section: t,
                    className: i,
                    open: s,
                    enterpriseLinksOnly: l
                } = e;
                return n ? null : (0, r.jsx)(S, {
                    activeHref: t,
                    className: i,
                    enterpriseLinksOnly: l,
                    open: s
                })
            }
            var A = t(199021);

            function z(e) {
                let {
                    banner: n,
                    customRightSectionContents: t,
                    teamSlug: i,
                    logoOnly: s,
                    minimal: l,
                    enterpriseLinksOnly: a,
                    full: c,
                    logo: u,
                    title: d,
                    subtitle: h,
                    notSticky: m,
                    noBorder: x,
                    showBorderOnScroll: f,
                    animateLinks: g = !0,
                    headerImport: p = !1,
                    transparent: j = !1,
                    hideProfile: _,
                    hideCTAOnScroll: v = !1,
                    hasFeedback: b,
                    hideDocs: y = !1,
                    hideLogin: w = !1,
                    hideSignUp: k = !1,
                    hideAllNavigation: L = !1,
                    isMarketingPage: N = !1,
                    leftSectionContents: C = H,
                    middleSectionContents: S = R,
                    rightSectionContents: T = O
                } = e;
                return (0, r.jsxs)(o.I7, {
                    banner: n,
                    children: [(0, r.jsx)(Z, {}), (0, r.jsxs)(A.P, {
                        noBorder: x,
                        notSticky: m,
                        showBorderOnScroll: f,
                        transparent: j,
                        children: [(0, r.jsxs)(K, {
                            full: c,
                            logoOnly: s,
                            minimal: l,
                            children: [(0, r.jsxs)(B, {
                                children: [(0, r.jsx)(C, {
                                    banner: n,
                                    hideAllNavigation: L,
                                    hideProfile: _,
                                    isMarketingPage: N,
                                    logo: u,
                                    teamSlug: i
                                }), (0, r.jsx)(V, {
                                    children: (0, r.jsx)(S, {
                                        enterpriseLinksOnly: a,
                                        hideAllNavigation: L,
                                        minimal: l
                                    })
                                })]
                            }), (0, r.jsx)(D, {
                                hasCustomContent: !!t,
                                children: t ? ? (0, r.jsx)(T, {
                                    animateLinks: g,
                                    hasFeedback: b,
                                    headerImport: p,
                                    hideAllNavigation: L,
                                    hideCTAOnScroll: v,
                                    hideDocs: y,
                                    hideLogin: w,
                                    hideProfile: _,
                                    hideSignUp: k,
                                    isMarketingPage: N,
                                    minimal: l
                                })
                            })]
                        }), (0, r.jsx)(F, {
                            subtitle: h,
                            title: d
                        })]
                    })]
                })
            }

            function B(e) {
                let {
                    children: n
                } = e;
                return (0, r.jsx)("div", {
                    className: a().nav_first,
                    children: n
                })
            }

            function V(e) {
                let {
                    children: n
                } = e;
                return (0, r.jsx)("div", {
                    className: a().nav_second,
                    children: n
                })
            }

            function D(e) {
                let {
                    children: n,
                    hasCustomContent: t
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, s.W)(a().nav_third, {
                        [a().custom]: t
                    }),
                    children: n
                })
            }

            function F(e) {
                let {
                    title: n,
                    subtitle: t
                } = e;
                return n ? (0, r.jsx)("h1", {
                    className: a().title,
                    children: t ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("b", {
                            children: [n, ": "]
                        }, "fn1"), (0, r.jsx)("span", {
                            children: t
                        }, "fn2")]
                    }) : (0, r.jsx)("b", {
                        children: n
                    })
                }) : null
            }

            function K(e) {
                let {
                    minimal: n,
                    logoOnly: t,
                    children: i,
                    full: l
                } = e;
                return (0, r.jsx)("header", {
                    className: (0, s.W)(a().header, {
                        [a().minimal]: n,
                        [a().logoOnly]: t
                    }),
                    style: {
                        "--full": l ? "auto" : "var(--ds-page-width-with-margin)"
                    },
                    children: i
                })
            }
            z.displayName = "Header"
        },
        166795: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                MobileMenu: function() {
                    return E
                }
            });
            var r = t(397458),
                i = t(652983),
                s = t(316902),
                l = t.n(s),
                a = t(14517),
                o = t(792407),
                c = t(840905),
                u = t(628987),
                d = t(132950),
                h = t(121446),
                m = t(487554),
                x = t(426476),
                f = t(110735),
                g = t(950429),
                p = t(852049),
                j = t(7594),
                _ = t(532945),
                v = t(363689),
                b = t(41296),
                y = t(921949),
                w = t(791688),
                k = t(869384),
                L = t(125097),
                N = t(327818),
                C = t(922058),
                S = t(71299),
                T = t(384563),
                I = t.n(T);
            let P = l()(() => (0, v.E)(Promise.all([t.e(47920), t.e(93550), t.e(30569)]).then(t.bind(t, 805152))).then(e => e.NotificationsPopover), {
                loadableGenerated: {
                    webpack: () => [805152]
                },
                ssr: !1
            });
            P.displayName = "NotificationsPopover";
            let M = (0, i.memo)(e => {
                let {
                    open: n,
                    toggle: t
                } = e;
                return (0, r.jsx)(_.O, {
                    className: I().indicator,
                    expanded: n,
                    onClick: t,
                    testId: (0, w.C)("mobile-menu", "trigger")
                })
            });

            function E(e) {
                let {
                    section: n,
                    teamSlug: t,
                    breakpoint: s = 600,
                    hasBanner: l,
                    isMarketingPage: a,
                    hideProfile: o,
                    dashboard: c
                } = e, h = (0, C.qP)(), [m, x] = (0, i.useState)(!1), f = (0, y.ac)(s), g = (0, u.usePathname)();
                (0, i.useEffect)(() => {
                    x(!1)
                }, [g]), (0, i.useEffect)(() => {
                    f || x(!1)
                }, [f]);
                let p = !f || o || l || a,
                    j = (0, i.useCallback)(() => x(e => !e), []),
                    _ = (0, i.useCallback)(() => {
                        x(!1), h({
                            source: "mobileMenu"
                        })
                    }, [h]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(d.K, {
                        align: "center",
                        direction: "row",
                        gap: 2,
                        children: [p ? null : (0, r.jsx)(P, {}), (0, r.jsx)(M, {
                            open: m,
                            toggle: j
                        })]
                    }), m ? (0, r.jsx)(H, {
                        section: n,
                        teamSlug: t,
                        hasBanner: l,
                        dashboard: c,
                        createTeam: _,
                        isMarketingPage: a
                    }) : null]
                })
            }
            M.displayName = "MenuIndicator", E.displayName = "MobileMenu";
            let H = (0, i.memo)(e => {
                let {
                    section: n,
                    isMarketingPage: t,
                    hasBanner: s,
                    dashboard: l,
                    createTeam: u
                } = e, {
                    user: _
                } = (0, S.a)();
                (0, i.useLayoutEffect)(() => {
                    let e = window.scrollY;
                    return document.body.style.position = "fixed", document.body.style.width = "100%", () => {
                        document.body.style.position = "", document.body.style.width = "", window.scrollTo(0, e)
                    }
                }, []);
                let v = (0, b.r)();
                return (0, r.jsxs)("nav", {
                    className: (0, a.W)(I().wrapper, {
                        [I().hasBanner]: s
                    }),
                    children: [(0, r.jsx)("ul", {
                        className: I().buttons,
                        children: _ ? (0, r.jsx)("li", {
                            children: (0, r.jsx)(m.Z, {
                                href: "/contact",
                                type: "secondary",
                                width: "100%",
                                children: "Contact"
                            })
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("li", {
                                children: (0, r.jsx)(i.Suspense, {
                                    fallback: (0, r.jsx)(R, {
                                        type: "login"
                                    }),
                                    children: (0, r.jsx)(O, {
                                        section: n,
                                        type: "login"
                                    })
                                })
                            }), (0, r.jsx)("li", {
                                children: (0, r.jsx)(i.Suspense, {
                                    fallback: (0, r.jsx)(R, {
                                        type: "signup"
                                    }),
                                    children: (0, r.jsx)(O, {
                                        section: n,
                                        type: "signup"
                                    })
                                })
                            })]
                        })
                    }), (0, r.jsx)("ul", {
                        children: _ ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)("li", {
                                className: I().userItem,
                                children: [(0, r.jsxs)("div", {
                                    children: [(0, r.jsx)(h.x, {
                                        color: "gray-1000",
                                        truncate: !0,
                                        children: _.name
                                    }), (0, r.jsx)(h.x, {
                                        color: "gray-900",
                                        size: 14,
                                        style: {
                                            paddingBottom: 1,
                                            marginTop: 4
                                        },
                                        truncate: !0,
                                        children: _.email
                                    })]
                                }), (0, r.jsx)(x.qE, {
                                    size: 24,
                                    username: _.username
                                })]
                            }), (0, r.jsx)(g.r, {
                                href: "/dashboard",
                                children: (0, r.jsx)("li", {
                                    children: "Dashboard"
                                })
                            }), (0, r.jsx)(g.r, {
                                "data-testid": (0, w.C)("mobile-menu", "settings"),
                                href: "/account",
                                children: (0, r.jsx)("li", {
                                    children: "Settings"
                                })
                            }), (0, r.jsxs)("li", {
                                className: I()["with-icon"],
                                onClick: u,
                                children: ["New Team", (0, r.jsx)(o.v, {
                                    color: "#999"
                                })]
                            }), (0, r.jsxs)("li", {
                                className: I().themeSwitcher,
                                children: ["Theme", (0, r.jsx)("div", {
                                    children: (0, r.jsx)(L.Z, {
                                        width: "100%"
                                    })
                                })]
                            }), (0, r.jsx)("li", {
                                "data-testid": (0, w.C)("mobile-menu", "logout"),
                                onClick: () => void v({
                                    source: "mobile-menu"
                                }),
                                children: "Log Out"
                            })]
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(f.w, {
                                className: I()["collapse-group"],
                                children: (0, r.jsx)(f.U, {
                                    size: "small",
                                    title: "Features",
                                    children: (0, r.jsx)("ul", {
                                        className: I()["collapse-list"],
                                        children: N.YX.map(e => {
                                            let {
                                                href: n,
                                                name: t,
                                                icon: i
                                            } = e;
                                            return (0, r.jsx)(g.r, {
                                                href: n,
                                                children: (0, r.jsxs)(d.K, {
                                                    align: "center",
                                                    as: "li",
                                                    direction: "row",
                                                    gap: 2,
                                                    children: [i, (0, r.jsx)("span", {
                                                        children: t
                                                    })]
                                                })
                                            }, n)
                                        })
                                    })
                                })
                            }), " ", (0, r.jsx)(g.r, {
                                href: "/docs",
                                children: (0, r.jsx)("li", {
                                    children: "Docs"
                                })
                            }), (0, r.jsx)(g.r, {
                                href: "/templates",
                                children: (0, r.jsx)("li", {
                                    children: "Templates"
                                })
                            }), (0, r.jsx)(g.r, {
                                href: "/integrations",
                                children: (0, r.jsx)("li", {
                                    children: "Integrations"
                                })
                            }), (0, r.jsx)(g.r, {
                                href: "/customers",
                                children: (0, r.jsx)("li", {
                                    children: "Customers"
                                })
                            }), (0, r.jsx)(g.r, {
                                href: "/enterprise",
                                children: (0, r.jsx)("li", {
                                    children: "Enterprise"
                                })
                            }), (0, r.jsx)(g.r, {
                                href: "/pricing",
                                children: (0, r.jsx)("li", {
                                    children: "Pricing"
                                })
                            }), (0, r.jsx)(g.r, {
                                href: "/contact",
                                children: (0, r.jsx)("li", {
                                    children: "Contact"
                                })
                            })]
                        })
                    }), _ && t ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(j.L, {}), (0, r.jsx)(j.L, {
                            y: .4
                        }), (0, r.jsxs)("ul", {
                            children: [(0, r.jsx)(f.w, {
                                className: I()["collapse-group"],
                                children: (0, r.jsx)(f.U, {
                                    size: "small",
                                    title: "Features",
                                    children: (0, r.jsx)("ul", {
                                        className: I()["collapse-list"],
                                        children: N.YX.map(e => {
                                            let {
                                                href: n,
                                                name: t,
                                                icon: i
                                            } = e;
                                            return (0, r.jsx)(g.r, {
                                                href: n,
                                                children: (0, r.jsxs)(d.K, {
                                                    align: "center",
                                                    as: "li",
                                                    direction: "row",
                                                    gap: 2,
                                                    children: [i, (0, r.jsx)("span", {
                                                        children: t
                                                    })]
                                                })
                                            }, n)
                                        })
                                    })
                                })
                            }), " ", (0, r.jsx)(g.r, {
                                href: "/docs",
                                children: (0, r.jsx)("li", {
                                    children: "Docs"
                                })
                            }), (0, r.jsx)(g.r, {
                                href: "/templates",
                                children: (0, r.jsx)("li", {
                                    children: "Templates"
                                })
                            }), (0, r.jsx)(g.r, {
                                href: "/integrations",
                                children: (0, r.jsx)("li", {
                                    children: "Integrations"
                                })
                            }), (0, r.jsx)(g.r, {
                                href: "/customers",
                                children: (0, r.jsx)("li", {
                                    children: "Customers"
                                })
                            }), (0, r.jsx)(g.r, {
                                href: "/enterprise",
                                children: (0, r.jsx)("li", {
                                    children: "Enterprise"
                                })
                            }), (0, r.jsx)(g.r, {
                                href: "/pricing",
                                children: (0, r.jsx)("li", {
                                    children: "Pricing"
                                })
                            })]
                        })]
                    }) : null, _ && !t ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(j.L, {}), (0, r.jsx)(p.ZP, {
                            h4: !0,
                            style: {
                                marginBottom: 12
                            },
                            children: "Resources"
                        }), (0, r.jsxs)("ul", {
                            children: [l ? (0, r.jsx)(g.r, {
                                href: "/changelog",
                                children: (0, r.jsx)("li", {
                                    children: "Changelog"
                                })
                            }) : null, (0, r.jsx)(g.r, {
                                href: "/help",
                                children: (0, r.jsx)("li", {
                                    children: "Help"
                                })
                            }), (0, r.jsx)(g.r, {
                                href: "/docs",
                                children: (0, r.jsx)("li", {
                                    children: "Documentation"
                                })
                            }), (0, r.jsx)("a", {
                                className: I().externalLink,
                                href: "/home",
                                target: "_blank",
                                children: (0, r.jsxs)("li", {
                                    children: ["Vercel Homepage", " ", (0, r.jsx)(c.d, {
                                        color: "gray-900",
                                        size: 20
                                    })]
                                })
                            })]
                        })]
                    }) : null]
                })
            });

            function O(e) {
                let {
                    type: n = "signup",
                    section: t
                } = e, s = (0, u.useSearchParams)(), [l, a] = (0, i.useState)(null);
                return (0, i.useEffect)(() => {
                    let e = null == s ? void 0 : s.get("next");
                    e && a(e ? (0, k.Z)(e) : null)
                }, [s]), (0, r.jsx)(m.Z, {
                    disabled: t === `/${n}`,
                    href: `/${n}${l?`?next=${encodeURIComponent(l)}`:""}`,
                    type: "login" === n ? "secondary" : void 0,
                    width: "100%",
                    children: "signup" === n ? "Sign Up" : "Login"
                })
            }

            function R(e) {
                let {
                    type: n = "signup"
                } = e;
                return (0, r.jsx)(m.Z, {
                    href: "/",
                    loading: !0,
                    type: "login" === n ? "secondary" : void 0,
                    width: "100%",
                    children: "signup" === n ? "Sign Up" : "Login"
                })
            }
            H.displayName = "Nav"
        },
        190760: function(e, n, t) {
            "use strict";
            t.d(n, {
                Y: function() {
                    return s
                }
            });
            var r = t(397458);
            t(652983);
            var i = t(322734);

            function s(e) {
                let {
                    color: n = "var(--geist-foreground)",
                    height: t,
                    inverted: s,
                    width: l,
                    ...a
                } = e;
                return (0, r.jsx)(i.Y, {
                    fill: s ? "var(--geist-background)" : n,
                    height: l ? void 0 : t || 65,
                    width: t ? void 0 : l || 75,
                    ...a
                })
            }
            n.Z = s
        },
        532945: function(e, n, t) {
            "use strict";
            t.d(n, {
                O: function() {
                    return c
                }
            });
            var r = t(397458),
                i = t(14517),
                s = t(654567),
                l = t(418975),
                a = t(300761),
                o = t.n(a);

            function c(e) {
                let {
                    expanded: n,
                    onClick: t,
                    testId: a,
                    className: c,
                    ...u
                } = e;
                return (0, r.jsx)("button", {
                    "aria-label": `${n?"close menu":"open menu"}`,
                    className: (0, i.W)(o().menuToggle, c),
                    "data-testid": a,
                    onClick: t,
                    type: "button",
                    ...u,
                    children: n ? (0, r.jsx)(s.X, {
                        style: {
                            flexShrink: 0
                        }
                    }) : (0, r.jsx)(l.v, {
                        style: {
                            flexShrink: 0
                        }
                    })
                })
            }
        },
        690613: function(e, n, t) {
            "use strict";
            var r = t(397458);
            n.Z = function(e) {
                let {
                    margin: n = 50,
                    className: t
                } = e;
                return (0, r.jsx)("hr", {
                    className: t,
                    style: {
                        border: "0",
                        borderTop: "1px solid var(--accents-2)",
                        margin: "number" == typeof n ? `${n}px 0` : `${n} 0`
                    }
                })
            }
        },
        656379: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return Y
                }
            });
            var r = t(397458),
                i = t(316902),
                s = t.n(i),
                l = t(652983),
                a = t(353729),
                o = t(402225),
                c = t(14517),
                u = t(426326),
                d = t(190760),
                h = t(7594),
                m = t(282966),
                x = t(485801),
                f = t(445181),
                g = t.n(f),
                p = e => {
                    let [n, t] = (0, l.useState)(!1), i = (0, l.useRef)();
                    return (0, m.Z)(() => {
                        let n;

                        function r() {
                            !n && i.current && i.current.offsetTop && (n = i.current.offsetTop), t(window.scrollY >= n)
                        }

                        function s() {
                            n = null
                        }
                        return e.sticky ? (window.addEventListener("scroll", r), window.addEventListener("resize", s), requestAnimationFrame(r)) : t(!1), () => {
                            window.removeEventListener("scroll", r), window.removeEventListener("resize", s)
                        }
                    }, [e.sticky]), (0, r.jsx)("nav", {
                        className: g().nav,
                        children: (0, r.jsx)("div", {
                            className: g()["menu-wrap"],
                            ref: i,
                            children: (0, r.jsx)("div", {
                                className: (0, c.W)(g().menu, {
                                    [g().sticky]: n
                                }),
                                children: (0, r.jsxs)("div", {
                                    className: (0, c.W)(g()["menu-inner"], {
                                        [g().fullWidthLayout]: e.fullWidthLayout
                                    }),
                                    id: "sub-menu-inner",
                                    children: [(0, r.jsxs)("button", {
                                        className: g().logo,
                                        onClick: x.Z,
                                        type: "button",
                                        children: [(0, r.jsx)(d.Z, {
                                            width: 20
                                        }), (0, r.jsx)("span", {
                                            className: g().srOnly,
                                            children: "Scroll to top"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: g()["menu-content"],
                                        children: [null != e.title && "function" == typeof e.title ? e.title({
                                            sticky: n
                                        }) : e.title, n ? (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(h.Z, {
                                                expand: !0,
                                                x: .5
                                            }), (0, r.jsx)("div", {
                                                className: g()["sticky-content"],
                                                children: e.stickyContent || null
                                            })]
                                        }) : null]
                                    })]
                                })
                            })
                        })
                    })
                },
                j = t(119562),
                _ = t(835093),
                v = t(132950),
                b = t(121446),
                y = t(316944),
                w = t(487554),
                k = t(950429),
                L = t(791688),
                N = t(909268),
                C = t(690613),
                S = t(272445),
                T = t.n(S),
                I = (0, l.memo)(function(e) {
                    let {
                        links: n
                    } = e, t = (0, l.useRef)(null), i = (0, l.useRef)(!1);

                    function s(e) {
                        if ("mouse" === e.pointerType) {
                            let n = t.current,
                                r = e.currentTarget,
                                s = r.parentNode.getBoundingClientRect(),
                                l = r.getBoundingClientRect(),
                                a = l.left - s.left,
                                o = {
                                    width: `${r.offsetWidth}px`,
                                    transform: `translateX(${a}px)`
                                };
                            n && (i.current ? Object.assign(n.style, { ...o,
                                transitionDuration: "150ms"
                            }) : Object.assign(n.style, { ...o,
                                transitionDuration: "0ms"
                            })), i.current = !0
                        }
                    }
                    return (0, r.jsxs)("div", {
                        className: T().parent,
                        onPointerLeave: function(e) {
                            "mouse" === e.pointerType && (i.current = !1)
                        },
                        children: [(0, r.jsx)("div", {
                            "aria-hidden": !0,
                            className: T().highlight,
                            ref: t
                        }), n.map(e => {
                            let {
                                href: n,
                                text: t,
                                isActive: i = !1,
                                highlightNew: l = !1,
                                highlight: a,
                                disabled: o
                            } = e;
                            if (n) {
                                let e = (0, r.jsxs)(k.r, {
                                    className: (0, c.W)(T().tab, {
                                        [T().active]: i,
                                        [T().dot]: l || !!a,
                                        [T().disabled]: !!o,
                                        [T().warning]: "warning" === a,
                                        [T().error]: "error" === a
                                    }),
                                    "data-testid": (0, L.C)("submenu", t),
                                    href: n,
                                    onClick: o ? e => null == e ? void 0 : e.preventDefault() : void 0,
                                    onPointerEnter: s,
                                    children: ["" === t ? (0, r.jsx)(_.O, {
                                        height: 18,
                                        width: 50
                                    }) : t, o ? (0, r.jsx)(P, { ...o
                                    }) : null]
                                }, n);
                                return e
                            }
                            return null
                        })]
                    })
                });

            function P(e) {
                let {
                    text: n,
                    link: t,
                    onDismiss: i
                } = e, s = (0, l.useRef)(null), a = (0, l.useRef)(null);
                return (0, l.useEffect)(() => {
                    let e = s.current,
                        n = null == e ? void 0 : e.closest("#sub-menu-inner");
                    if (!e || !n) return;
                    let t = () => {
                            var t, r;
                            let i = n.getBoundingClientRect().width,
                                s = document.documentElement.scrollTop || document.body.scrollTop,
                                l = e.getBoundingClientRect();
                            if (i - l.left < 145 + l.width) {
                                null === (r = a.current) || void 0 === r || r.setAttribute("style", "display: none;");
                                return
                            }
                            null === (t = a.current) || void 0 === t || t.setAttribute("style", `top: ${s+l.top}px; left: ${l.left}px; width: ${l.width}px; height: 0px;`)
                        },
                        r = null,
                        i = () => {
                            t(), r && clearTimeout(r), r = setTimeout(t, 200)
                        };
                    return i(), document.addEventListener("scroll", i, !1), n.addEventListener("scroll", i, !1), document.addEventListener("resize", i, !1), () => {
                        r && clearTimeout(r), document.removeEventListener("scroll", i, !1), n.removeEventListener("scroll", i, !1), document.removeEventListener("resize", i, !1)
                    }
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: T().portalAnchor,
                        ref: s
                    }), (0, r.jsx)(j.h, {
                        children: (0, r.jsx)("div", {
                            className: T().portalDestination,
                            ref: a,
                            children: (0, r.jsx)(N.C, {
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "center"
                                },
                                defaultOpen: !0,
                                overlay: !1,
                                topArrow: !0,
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "center"
                                },
                                trigger: (0, r.jsx)("div", {
                                    className: T().portalTrigger
                                }),
                                children: (0, r.jsx)("div", {
                                    style: {
                                        position: "relative",
                                        color: "var(--geist-foreground)",
                                        borderRadius: "var(--geist-radius)",
                                        width: 290,
                                        background: "var(--geist-background)",
                                        boxShadow: "var(--shadow-medium)"
                                    },
                                    children: (0, r.jsxs)(v.K, {
                                        children: [(0, r.jsx)(v.K, {
                                            style: {
                                                padding: "var(--geist-gap)",
                                                paddingBottom: 0
                                            },
                                            children: (0, r.jsx)(b.x, {
                                                align: "center",
                                                children: n
                                            })
                                        }), (0, r.jsx)(v.K, {
                                            children: (0, r.jsx)(C.Z, {
                                                margin: 24
                                            })
                                        }), (0, r.jsxs)(v.K, {
                                            gap: 2,
                                            style: {
                                                padding: "var(--geist-gap)",
                                                paddingTop: 0
                                            },
                                            children: [(0, r.jsx)(v.K, {
                                                children: (0, r.jsx)(w.Z, {
                                                    href: t.href,
                                                    onClick: () => {
                                                        i()
                                                    },
                                                    size: "small",
                                                    children: t.text
                                                })
                                            }), (0, r.jsx)(v.K, {
                                                children: (0, r.jsx)(y.z, {
                                                    onClick: () => i(),
                                                    size: "small",
                                                    type: "secondary",
                                                    children: "Dismiss"
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })]
                })
            }
            var M = t(226222),
                E = t(218070),
                H = t(432132),
                O = t.n(H);

            function R(e) {
                let {
                    disableScroll: n,
                    children: t,
                    className: i
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, c.W)(O().geist_screen, i, {
                        [O().disable_scroll]: n
                    }),
                    children: t
                })
            }
            var Z = t(725898),
                W = t(308108),
                A = t(328115),
                z = t(659173),
                B = t(628987),
                V = t(587929),
                D = t(573102),
                F = t(180665);
            let K = s()(() => Promise.all([t.e(47920), t.e(76869), t.e(83073), t.e(14056), t.e(93550), t.e(57490), t.e(92711), t.e(57251), t.e(19321), t.e(48918), t.e(65737), t.e(49539), t.e(37506)]).then(t.bind(t, 946692)), {
                loadableGenerated: {
                    webpack: () => [946692]
                },
                ssr: !1
            });
            var Y = (0, W.CP)(function(e) {
                let {
                    showSWRError: n = !0,
                    ...t
                } = e, i = (0, W.e1)(), s = (0, a.kY)().cache, l = function(e, n, t) {
                    let r = (0, B.useRouter)();
                    return {
                        onErrorRetry: V.h,
                        onError: (i, s) => {
                            var l;
                            let a = i.statusCode || i.status;
                            if ((403 === a || 401 === a) && i.saml) return console.log("SAML authentication error. Showing modal...", i), (0, D.ZY)({
                                slug: i.scope,
                                push: e => {
                                    r.push(e)
                                }
                            });
                            let o = e && 404 !== a && 403 !== a && "cancelled" !== i.message && "TypeError" !== i.name && !(0, F.I)() && void 0 !== (null === (l = n.get(s)) || void 0 === l ? void 0 : l.data);
                            o ? (console.table(i), (0, z.Op)(s, t), console.error(i)) : console.log("Ignored request error", i)
                        },
                        onSuccess: (e, n) => {
                            (0, z.M9)(n, t)
                        }
                    }
                }(n, s, i);
                return (0, r.jsxs)(a.J$, {
                    value: l,
                    children: [(0, r.jsx)(z.Q_, {}), (0, r.jsx)($, { ...t
                    })]
                })
            });

            function $(e) {
                let {
                    metadata: n,
                    afterScreen: t = null,
                    banner: i,
                    breadcrumb: s = null,
                    canonicalPath: a = null,
                    children: d,
                    className: h,
                    customSkipNavContent: m = !1,
                    description: x = null,
                    disableAnalytics: f = !1,
                    disableScroll: g,
                    footer: j = !0,
                    fullWidthLayout: _ = !1,
                    hasFeedback: v,
                    header: b = !0,
                    headerImport: y,
                    hideBreadcrumbOnMobile: w = !1,
                    hideDocs: k = !1,
                    hideHeaderCTAOnScroll: L = !1,
                    hideProfile: N,
                    image: C = "",
                    isMarketingPage: S = !1,
                    logo: T,
                    ogType: P,
                    metaDescription: H,
                    minimalHeader: O = !1,
                    noHeaderBorder: W = !1,
                    noIndex: z = !1,
                    screenClassname: B,
                    showHeaderBorderOnScroll: V = !1,
                    stickyContent: D = null,
                    stickyTabs: F = !0,
                    tabs: Y = null,
                    title: $ = "",
                    titlePostfix: U = !0,
                    titlePostfixSeparator: X,
                    transparentHeader: q = !1
                } = e, G = (0, l.useRef)(!1), Q = (0, l.useRef)(void 0), J = (0, l.useMemo)(() => (0, r.jsx)(M.$_, {
                    isMarketingPage: S
                }), [S]), ee = (0, u.useRouter)();
                return (0, l.useEffect)(() => (S && void 0 === Q.current && ee.isReady && !G.current && (Q.current = setTimeout(() => {
                    G.current = !0;
                    let e = Object.keys(ee.query).filter(e => e.startsWith("utm_"));
                    if (e.length > 0) {
                        let [n, t] = ee.asPath.split("?"), r = new URLSearchParams(t);
                        for (let n of e) r.delete(n);
                        ee.replace({
                            pathname: ee.pathname,
                            query: ee.query
                        }, {
                            pathname: n,
                            query: r.toString()
                        }, {
                            shallow: !0
                        })
                    }
                }, 5e3)), () => clearTimeout(Q.current)), [S, ee]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(K, {}), f ? null : (0, r.jsx)(A.G, {
                        withGoogleTagManager: S
                    }), (0, r.jsxs)("div", {
                        className: (0, c.W)("geist-page", h),
                        children: [(0, r.jsx)("span", {
                            className: "dark-theme invert-theme"
                        }), (0, r.jsx)(E.F, {
                            canonicalPath: a,
                            description: x,
                            image: C,
                            metaDescription: H,
                            metadata: n,
                            noIndex: z,
                            title: $,
                            titlePostfix: U,
                            titlePostfixSeparator: X,
                            type: P
                        }), (0, r.jsxs)(R, {
                            className: B,
                            disableScroll: g,
                            children: [!0 === b ? (0, r.jsx)(Z.Z, {
                                banner: i,
                                breadcrumb: s,
                                hasFeedback: v,
                                headerImport: y,
                                hideBreadcrumbOnMobile: w,
                                hideCTAOnScroll: L,
                                hideDocs: k,
                                hideProfile: N,
                                isMarketingPage: S,
                                logo: T,
                                minimal: O,
                                noBorder: W,
                                showBorderOnScroll: V,
                                transparent: q
                            }) : b || null, Y ? (0, r.jsx)("div", {
                                className: "submenu",
                                children: (0, r.jsx)(p, {
                                    fullWidthLayout: _,
                                    sticky: F,
                                    stickyContent: D,
                                    title: (0, r.jsx)(I, {
                                        links: Y
                                    })
                                })
                            }) : null, !m && (0, r.jsx)(o.f, {}), d]
                        }), t, j ? J : null]
                    })]
                })
            }
        },
        327818: function(e, n, t) {
            "use strict";
            t.d(n, {
                YX: function() {
                    return u
                }
            });
            var r = t(397458),
                i = t(911047),
                s = t(677429),
                l = t(759719),
                a = t(10709),
                o = t(298189),
                c = t(396112);
            let u = [{
                href: "/features/previews",
                name: "Previews",
                description: "Zero config, more innovation",
                icon: (0, r.jsx)(i.Z, {})
            }, {
                href: "/features/infrastructure",
                name: "Infrastructure",
                description: "Always fast, always online",
                icon: (0, r.jsx)(s.S, {})
            }, {
                href: "/features/edge-functions",
                name: "Edge Functions",
                description: "Dynamic pages, static speed",
                icon: (0, r.jsx)(l.T, {})
            }, {
                href: "/solutions/nextjs",
                name: "Next.js",
                description: "The native Next.js platform",
                icon: (0, r.jsx)(c.Y, {})
            }, {
                href: "/analytics",
                name: "Analytics",
                description: "Real-time insights, peak performance",
                icon: (0, r.jsx)(a.c, {})
            }, {
                href: "/storage/kv",
                name: "Storage",
                description: "Serverless storage for the frontend",
                icon: (0, r.jsx)(o.v, {})
            }]
        },
        485801: function(e, n) {
            "use strict";
            n.Z = () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }
        },
        322734: function(e, n, t) {
            "use strict";
            t.d(n, {
                Y: function() {
                    return i
                }
            });
            var r = t(397458);

            function i(e) {
                let {
                    fill: n = "currentColor",
                    ...t
                } = e;
                return (0, r.jsx)("svg", {
                    "aria-label": "Vercel Logo",
                    fill: n,
                    viewBox: "0 0 75 65",
                    ...t,
                    children: (0, r.jsx)("path", {
                        d: "M37.59.25l36.95 64H.64l36.95-64z"
                    })
                })
            }
        },
        402225: function(e, n, t) {
            "use strict";
            t.d(n, {
                f: function() {
                    return s
                }
            });
            var r = t(397458),
                i = t(652983);
            let s = (0, i.forwardRef)((e, n) => {
                let {
                    id: t = "geist-skip-nav",
                    ...i
                } = e;
                return (0, r.jsx)("div", {
                    id: t,
                    ref: n,
                    tabIndex: -1,
                    ...i
                })
            });
            s.displayName = "SkipNavContent"
        },
        10709: function(e, n, t) {
            "use strict";
            t.d(n, {
                c: function() {
                    return i
                }
            });
            var r = t(361961);
            let i = (0, r.H)('<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>')
        },
        298189: function(e, n, t) {
            "use strict";
            t.d(n, {
                v: function() {
                    return i
                }
            });
            var r = t(361961);
            let i = (0, r.H)('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>')
        },
        759719: function(e, n, t) {
            "use strict";
            t.d(n, {
                T: function() {
                    return i
                }
            });
            var r = t(361961);
            let i = (0, r.H)('<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>')
        },
        677429: function(e, n, t) {
            "use strict";
            t.d(n, {
                S: function() {
                    return i
                }
            });
            var r = t(361961);
            let i = (0, r.H)('<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>')
        },
        911047: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return i
                }
            });
            var r = t(361961);
            let i = (0, r.H)('<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>')
        },
        654567: function(e, n, t) {
            "use strict";
            t.d(n, {
                X: function() {
                    return i
                }
            });
            var r = t(521459);
            let i = (0, r.l)('<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4697 13.5303L13 14.0607L14.0607 13L13.5303 12.4697L9.06065 7.99999L13.5303 3.53032L14.0607 2.99999L13 1.93933L12.4697 2.46966L7.99999 6.93933L3.53032 2.46966L2.99999 1.93933L1.93933 2.99999L2.46966 3.53032L6.93933 7.99999L2.46966 12.4697L1.93933 13L2.99999 14.0607L3.53032 13.5303L7.99999 9.06065L12.4697 13.5303Z" fill="currentColor"/>')
        },
        418975: function(e, n, t) {
            "use strict";
            t.d(n, {
                v: function() {
                    return i
                }
            });
            var r = t(521459);
            let i = (0, r.l)('<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 4H1V5.5H1.75H14.25H15V4H14.25H1.75ZM1.75 10.5H1V12H1.75H14.25H15V10.5H14.25H1.75Z" fill="currentColor"/>')
        },
        384563: function(e) {
            e.exports = {
                indicator: "mobile-menu_indicator__le_Ik",
                "with-icon": "mobile-menu_with-icon__WHAnH",
                theme: "mobile-menu_theme__S8WoO",
                wrapper: "mobile-menu_wrapper__ehRfR",
                hasBanner: "mobile-menu_hasBanner__9LKXc",
                "collapse-group": "mobile-menu_collapse-group__Qgt7l",
                "collapse-list": "mobile-menu_collapse-list__V3qXB",
                buttons: "mobile-menu_buttons__1lQLW",
                userItem: "mobile-menu_userItem__3nzLS",
                themeSwitcher: "mobile-menu_themeSwitcher___NWqm",
                externalLink: "mobile-menu_externalLink__wPvmE"
            }
        },
        530137: function(e) {
            e.exports = {
                "fade-out-for-contact-sales": "defaults_fade-out-for-contact-sales__QILux",
                "fade-out": "defaults_fade-out__4aIX9"
            }
        },
        898177: function(e) {
            e.exports = {
                root: "navigation-menu_root__raIWR",
                list: "navigation-menu_list__sVWMG",
                trigger: "navigation-menu_trigger__bhwIG",
                link: "navigation-menu_link__RaML8",
                content: "navigation-menu_content__PoN9R",
                indicator: "navigation-menu_indicator__CSehP",
                fadeIn: "navigation-menu_fadeIn__FwPy5",
                fadeOut: "navigation-menu_fadeOut__PwrCy",
                viewport: "navigation-menu_viewport__wWHtQ",
                scaleIn: "navigation-menu_scaleIn__cVIRx",
                scaleOut: "navigation-menu_scaleOut__m5kKi",
                features: "navigation-menu_features__oDdcA",
                withStorage: "navigation-menu_withStorage__MV_0y",
                featuresLinks: "navigation-menu_featuresLinks__KBJZ4",
                menuSubLink: "navigation-menu_menuSubLink__YIrPI",
                menuItemHeading: "navigation-menu_menuItemHeading__4RlM1",
                menuItemText: "navigation-menu_menuItemText__op6fR",
                calloutText: "navigation-menu_calloutText__aJmWp",
                callout: "navigation-menu_callout__V8rCY",
                calloutHeading: "navigation-menu_calloutHeading__9Yzcd",
                calloutCTA: "navigation-menu_calloutCTA__g2653",
                viewportPosition: "navigation-menu_viewportPosition__rATSg",
                arrow: "navigation-menu_arrow__kShLY"
            }
        },
        300761: function(e) {
            e.exports = {
                menuToggle: "menu-toggle_menuToggle__6OaWw"
            }
        },
        272445: function(e) {
            e.exports = {
                tab: "sub-menu-tabs_tab__bk6Rs",
                active: "sub-menu-tabs_active__rSVIg",
                dot: "sub-menu-tabs_dot__XKauA",
                error: "sub-menu-tabs_error__RpO3d",
                warning: "sub-menu-tabs_warning__vdC28",
                disabled: "sub-menu-tabs_disabled__E7089",
                parent: "sub-menu-tabs_parent__WnORf",
                highlight: "sub-menu-tabs_highlight__kaE2h",
                portalAnchor: "sub-menu-tabs_portalAnchor__4QBIF",
                portalDestination: "sub-menu-tabs_portalDestination__vIufK",
                portalTrigger: "sub-menu-tabs_portalTrigger___NiAr",
                popoverLink: "sub-menu-tabs_popoverLink__T3QZV"
            }
        },
        445181: function(e) {
            e.exports = {
                nav: "sub-menu_nav__LyD_g",
                "menu-wrap": "sub-menu_menu-wrap__k276Q",
                "menu-inner": "sub-menu_menu-inner__BzfPe",
                fullWidthLayout: "sub-menu_fullWidthLayout__qKgrM",
                menu: "sub-menu_menu__EfHz_",
                sticky: "sub-menu_sticky__O1IuP",
                "menu-content": "sub-menu_menu-content__k2sa6",
                "sticky-content": "sub-menu_sticky-content__l167L",
                reveal: "sub-menu_reveal__d3v84",
                logo: "sub-menu_logo__EwQIl",
                srOnly: "sub-menu_srOnly__ts5Nl"
            }
        },
        432132: function(e) {
            e.exports = {
                geist_screen: "screen_geist_screen__Hlyrv",
                disable_scroll: "screen_disable_scroll__QMBBu"
            }
        }
    }
]);