(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [26222], {
        226222: function(e, r, t) {
            "use strict";
            t.d(r, {
                $_: function() {
                    return R
                },
                nf: function() {
                    return A
                },
                dr: function() {
                    return Z
                }
            });
            var n = t(397458),
                l = t(652983),
                o = t(316902),
                i = t.n(o),
                s = t(537525),
                a = t.n(s),
                c = t(14517),
                d = t(132950),
                h = t(121446),
                u = t(328820),
                f = t(390848),
                _ = t(779039),
                x = t(467662),
                m = t(383351),
                p = t(40789),
                g = t(808259),
                j = t(693574),
                k = t(816469),
                b = t(125097),
                y = t(363689),
                v = t(649919),
                C = t(73172),
                w = t(333971),
                N = t(573337);
            let L = [{
                    href: "/features/previews",
                    name: "Previews"
                }, {
                    href: "/solutions/nextjs",
                    name: "Next.js"
                }, {
                    href: "/features/infrastructure",
                    name: "Infrastructure"
                }, {
                    href: "/solutions/turborepo",
                    name: "Turbo"
                }, {
                    href: "/features/edge-functions",
                    name: "Edge Functions"
                }, {
                    href: "/enterprise",
                    name: "Enterprise"
                }, {
                    href: "/analytics",
                    name: "Analytics"
                }, {
                    href: "/docs/rest-api",
                    name: "CLI & API"
                }, {
                    href: "/changelog",
                    name: "Changelog"
                }],
                S = [{
                    href: "/docs",
                    name: "Docs"
                }, {
                    href: "/experts",
                    name: "Experts"
                }, {
                    href: "/pricing",
                    name: "Pricing"
                }, {
                    href: "/guides",
                    name: "Guides"
                }, {
                    href: "/customers",
                    name: "Customers"
                }, {
                    href: "/help",
                    name: "Help"
                }, {
                    href: "/integrations",
                    name: "Integrations"
                }, {
                    onClick: () => {
                        let e = (0, N.h2)("isLoggedIn", "1");
                        if (!e) {
                            window.location.href = "/docs/concepts/dashboard-features/command-menu";
                            return
                        }
                        window.dispatchEvent(new KeyboardEvent("keydown", {
                            key: "k",
                            ...(0, C.mL)() ? {
                                metaKey: !0
                            } : {
                                ctrlKey: !0
                            }
                        }))
                    },
                    name: "⌘K"
                }, {
                    href: "/templates",
                    name: "Templates"
                }],
                F = [{
                    href: "/about",
                    name: "About"
                }, {
                    href: "/blog",
                    name: "Blog"
                }, {
                    href: "/careers",
                    name: "Careers"
                }, {
                    href: "/contact",
                    name: "Contact Us"
                }, {
                    href: "https://nextjs.org/conf",
                    external: !0,
                    name: "Next.js Conf"
                }, {
                    href: "/oss",
                    name: "Open Source"
                }, {
                    href: "/partners",
                    name: "Partners"
                }, {
                    href: "/security",
                    name: "Security"
                }, {
                    href: "/legal/privacy-policy",
                    name: "Privacy Policy"
                }];
            var E = t(684874),
                P = t(137768),
                T = t(791688),
                W = t(90735),
                H = t.n(W),
                U = t(515857),
                Y = t.n(U);
            let B = [{
                    text: "Privacy Policy",
                    href: "/legal/privacy-policy"
                }, {
                    text: "Terms of Service",
                    href: "/legal/terms"
                }, {
                    text: "Trademark Policy",
                    href: "/legal/trademark-policy"
                }, {
                    text: "Inactivity Policy",
                    href: "/legal/inactivity-policy"
                }, {
                    text: "DMCA Policy",
                    href: "/legal/dmca-policy"
                }, {
                    text: "Support Terms",
                    href: "/legal/support-terms"
                }, {
                    text: "DPA",
                    href: "/legal/dpa"
                }, {
                    text: "SLA",
                    href: "/legal/sla"
                }, {
                    text: "Sub-processors",
                    onClick: () => {
                        window.open("https://security.vercel.com/?itemName=legal&itemUid=e3fae2ca-94a9-416b-b577-5c90e382df57", "_blank")
                    }
                }, {
                    text: "Cookie Preferences",
                    onClick: () => {
                        var e;
                        null === (e = document.querySelector(".ccb__edit")) || void 0 === e || e.click()
                    }
                }, {
                    text: "Event Terms and Conditions",
                    href: "/legal/event-terms-conditions"
                }, {
                    text: "Event Code of Conduct",
                    href: "/legal/event-code-of-conduct"
                }, {
                    text: "Job Applicant Privacy Notice",
                    href: "/legal/job-applicant-privacy-notice"
                }],
                I = i()(() => (0, y.E)(t.e(97482).then(t.bind(t, 897482))), {
                    loadableGenerated: {
                        webpack: () => [897482]
                    },
                    ssr: !1
                });

            function K(e) {
                let {
                    icon: r,
                    title: t,
                    className: l,
                    href: o,
                    linkText: i
                } = e;
                return (0, n.jsx)("a", {
                    "aria-label": t,
                    className: l,
                    href: o,
                    onClick: () => {
                        E.co.track(E.s6.EXTERNAL_LINK, {
                            link_text: i,
                            url: o
                        })
                    },
                    rel: "noopener",
                    target: "_blank",
                    children: r
                })
            }

            function A() {
                return (0, n.jsx)(K, {
                    className: Y().github,
                    href: `https://${w.d0}`,
                    icon: (0, n.jsx)(k.default, {
                        fill: "currentColor",
                        height: 19,
                        width: 19
                    }),
                    linkText: "github",
                    title: "GitHub"
                })
            }

            function Z() {
                return (0, n.jsx)(K, {
                    className: Y().bird,
                    href: `https://${w.sA}`,
                    icon: (0, n.jsx)(g.L, {
                        "aria-label": "",
                        color: "currentColor"
                    }),
                    linkText: "twitter",
                    title: "X formerly known as Twitter"
                })
            }

            function M() {
                let e = (0, n.jsxs)("ul", {
                    className: Y().dashboardFooterLinks,
                    children: [(0, n.jsxs)("li", {
                        className: Y().contactWrapper,
                        children: [(0, n.jsx)("span", {
                            className: Y().contact,
                            children: (0, n.jsxs)("ul", {
                                className: Y().social,
                                children: [(0, n.jsx)("li", {
                                    children: (0, n.jsx)(A, {})
                                }), (0, n.jsx)("li", {
                                    children: (0, n.jsx)(Z, {})
                                })]
                            })
                        }), (0, n.jsx)(b.Z, {
                            borderLess: !0,
                            iconVersion: !0
                        })]
                    }), (0, n.jsx)(v.SY, {
                        dashboard: !0,
                        href: "/home",
                        children: "Home"
                    }), (0, n.jsx)(v.SY, {
                        dashboard: !0,
                        href: "/docs",
                        children: "Documentation"
                    }), (0, n.jsx)(v.SY, {
                        dashboard: !0,
                        href: "/guides",
                        children: "Guides"
                    }), (0, n.jsx)(v.SY, {
                        dashboard: !0,
                        href: "/help",
                        children: "Help"
                    }), (0, n.jsx)(v.SY, {
                        dashboard: !0,
                        href: "/contact/sales",
                        children: "Contact Sales"
                    }), (0, n.jsx)(v.SY, {
                        dashboard: !0,
                        href: "/blog",
                        children: "Blog"
                    }), (0, n.jsx)(v.SY, {
                        dashboard: !0,
                        href: "/changelog",
                        children: "Changelog"
                    }), (0, n.jsx)(v.SY, {
                        dashboard: !0,
                        href: "/pricing",
                        children: "Pricing"
                    }), (0, n.jsx)(v.SY, {
                        dashboard: !0,
                        href: "/enterprise",
                        children: "Enterprise"
                    }), (0, n.jsxs)(_.F, {
                        position: "top-end",
                        children: [(0, n.jsx)(f.j, {
                            "data-testid": (0, T.C)("footer", "legal-button"),
                            variant: "unstyled",
                            children: (0, n.jsxs)("span", {
                                className: (0, c.W)(H().link, H().secondary),
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    width: "100%"
                                },
                                children: ["Legal", (0, n.jsx)(p.W, {
                                    color: "currentColor",
                                    size: 16
                                })]
                            })
                        }), (0, n.jsx)(u.v, {
                            width: 230,
                            children: B.map(e => e.href ? (0, n.jsx)(m.U, {
                                href: e.href,
                                children: e.text
                            }, e.href) : e.onClick ? (0, n.jsx)(x.s, {
                                onClick: e.onClick,
                                children: e.text
                            }, e.text) : null)
                        })]
                    })]
                });
                return (0, n.jsx)(v.$_, {
                    className: Y().dashboardFooter,
                    subFooter: e,
                    children: (0, n.jsxs)("div", {
                        className: Y().topWrapper,
                        children: [(0, n.jsxs)(d.K, {
                            align: "center",
                            direction: "row",
                            gap: 3,
                            children: [(0, n.jsx)(a(), {
                                href: "/home",
                                style: {
                                    display: "flex"
                                },
                                children: (0, n.jsx)(j.m, {
                                    color: "var(--ds-gray-1000)",
                                    height: 25,
                                    width: 23
                                })
                            }), (0, n.jsxs)(h.x, {
                                color: "gray-900",
                                size: 14,
                                children: ["\xa9 ", new Date().getFullYear(), " "]
                            })]
                        }), (0, n.jsx)(I, {
                            noBorder: !0
                        }), (0, n.jsxs)("button", {
                            className: Y().cmdk,
                            "data-testid": (0, T.C)("footer", "cmdk"),
                            onClick: () => {
                                window.dispatchEvent(new KeyboardEvent("keydown", {
                                    key: "k",
                                    ...(0, C.mL)() ? {
                                        metaKey: !0
                                    } : {
                                        ctrlKey: !0
                                    }
                                }))
                            },
                            type: "button",
                            children: ["Command Menu ", (0, n.jsx)(P.Z, {
                                small: !0,
                                children: "⌘"
                            }), (0, n.jsx)(P.Z, {
                                small: !0,
                                children: "K"
                            })]
                        }), (0, n.jsx)(b.Z, {
                            borderLess: !0,
                            iconVersion: !0
                        }), (0, n.jsx)("span", {
                            className: Y().contact,
                            children: (0, n.jsxs)("ul", {
                                className: Y().social,
                                children: [(0, n.jsx)("li", {
                                    children: (0, n.jsx)(A, {})
                                }), (0, n.jsx)("li", {
                                    children: (0, n.jsx)(Z, {})
                                })]
                            })
                        })]
                    })
                })
            }
            let R = (0, l.memo)(function(e) {
                let {
                    isMarketingPage: r,
                    className: t
                } = e;
                return r ? (0, n.jsx)(v.$_, {
                    className: (0, c.W)(Y().marketingFooterContainer, t),
                    children: (0, n.jsxs)("div", {
                        className: Y().marketingFooter,
                        children: [(0, n.jsxs)(d.K, {
                            align: {
                                sm: "center",
                                md: "center",
                                lg: "flex-start"
                            },
                            className: Y().logotype,
                            gap: 2,
                            children: [(0, n.jsxs)(d.K, {
                                align: "center",
                                direction: "row",
                                gap: 3,
                                children: [(0, n.jsx)(a(), {
                                    href: "/home",
                                    style: {
                                        display: "flex"
                                    },
                                    children: (0, n.jsx)(j.m, {
                                        color: "var(--ds-gray-1000)",
                                        height: 25,
                                        width: 23
                                    })
                                }), (0, n.jsxs)(h.x, {
                                    color: "gray-900",
                                    size: 14,
                                    children: ["\xa9 ", new Date().getFullYear(), " "]
                                })]
                            }), (0, n.jsx)(I, {
                                noBorder: !0
                            }), (0, n.jsx)("span", {
                                className: Y().contact,
                                children: (0, n.jsxs)("ul", {
                                    className: Y().social,
                                    children: [(0, n.jsx)("li", {
                                        children: (0, n.jsx)(A, {})
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsx)(Z, {})
                                    })]
                                })
                            })]
                        }), (0, n.jsx)(v.RU, {
                            title: "Product",
                            children: L.map(e => {
                                let {
                                    href: r,
                                    name: t,
                                    external: l
                                } = e;
                                return (0, n.jsx)(v.SY, {
                                    external: l,
                                    href: r,
                                    children: t
                                }, r)
                            })
                        }), (0, n.jsx)(v.RU, {
                            title: "Resources",
                            children: S.map(e => {
                                let {
                                    href: r,
                                    onClick: t,
                                    name: l,
                                    external: o
                                } = e;
                                return (0, n.jsx)(v.SY, {
                                    external: o,
                                    href: r,
                                    onClick: t,
                                    children: l
                                }, r || l)
                            })
                        }), (0, n.jsxs)(v.RU, {
                            title: "Company",
                            children: [F.map(e => {
                                let {
                                    href: r,
                                    name: t,
                                    external: l
                                } = e;
                                return (0, n.jsx)(v.SY, {
                                    external: l,
                                    href: r,
                                    children: t
                                }, r)
                            }), (0, n.jsxs)(_.F, {
                                position: "top-end",
                                children: [(0, n.jsx)(f.j, {
                                    className: Y().legalButton,
                                    "data-testid": (0, T.C)("footer", "legal-button"),
                                    variant: "unstyled",
                                    children: (0, n.jsxs)("span", {
                                        className: (0, c.W)(H().link, H().secondary),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            width: "100%"
                                        },
                                        children: ["Legal", (0, n.jsx)(p.W, {
                                            color: "currentColor",
                                            size: 16
                                        })]
                                    })
                                }), (0, n.jsx)(u.v, {
                                    width: 230,
                                    children: B.map(e => e.href ? (0, n.jsx)(m.U, {
                                        href: e.href,
                                        children: e.text
                                    }, e.href) : e.onClick ? (0, n.jsx)(x.s, {
                                        onClick: e.onClick,
                                        children: e.text
                                    }, e.text) : null)
                                })]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: Y()["theme-switcher"],
                            children: [(0, n.jsx)("span", {
                                className: Y().contact,
                                children: (0, n.jsxs)("ul", {
                                    className: Y().social,
                                    children: [(0, n.jsx)("li", {
                                        children: (0, n.jsx)(A, {})
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsx)(Z, {})
                                    })]
                                })
                            }), (0, n.jsx)(b.Z, {
                                borderLess: !0,
                                iconVersion: !0
                            })]
                        })]
                    })
                }) : (0, n.jsx)(M, {})
            })
        },
        542923: function(e, r, t) {
            "use strict";
            t.d(r, {
                l: function() {
                    return s
                }
            });
            var n = t(397458),
                l = t(587132),
                o = t.n(l);

            function i(e) {
                let {
                    gitType: r,
                    children: t,
                    width: l = 14,
                    height: i = 14,
                    style: s
                } = e, a = {
                    width: l,
                    height: i,
                    ...s
                };
                return (0, n.jsx)("span", {
                    className: o().background,
                    "data-git-type": r,
                    style: a,
                    children: t
                })
            }

            function s(e, r) {
                return function(t) {
                    let { ...l
                    } = t, {
                        background: o,
                        ...s
                    } = l;
                    if (o) {
                        let t = null;
                        return "github" === r && (t = "#000"), (0, n.jsx)(i, {
                            gitType: r,
                            height: l.height,
                            style: {
                                color: "gitlab" === r ? "#fff" : void 0
                            },
                            width: l.width,
                            children: (0, n.jsx)(e, { ...s,
                                color: "currentColor",
                                fill: t,
                                ..."bitbucket" === r && {
                                    border: !1
                                },
                                ..."gitlab" === r && {
                                    monochrome: !0
                                }
                            })
                        })
                    }
                    return (0, n.jsx)(e, { ...s
                    })
                }
            }
        },
        816469: function(e, r, t) {
            "use strict";
            t.r(r);
            var n = t(397458),
                l = t(869480),
                o = t.n(l),
                i = t(542923);
            let s = e => {
                let {
                    height: r = 14,
                    width: t = 14,
                    fill: l,
                    label: o,
                    ...i
                } = e;
                return (0, n.jsx)("svg", {
                    "aria-label": o || "github",
                    height: r,
                    viewBox: "0 0 14 14",
                    width: t,
                    ...i,
                    children: (0, n.jsx)("path", {
                        d: "M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z",
                        fill: l || "var(--geist-foreground)",
                        fillRule: "nonzero"
                    })
                })
            };
            s.propTypes = {
                width: o().oneOfType([o().string, o().number]),
                height: o().oneOfType([o().string, o().number]),
                fill: o().string,
                label: o().string
            }, r.default = (0, i.l)(s, "github")
        },
        649919: function(e, r, t) {
            "use strict";
            t.d(r, {
                $_: function() {
                    return h
                },
                RU: function() {
                    return u
                },
                SY: function() {
                    return _
                },
                kH: function() {
                    return f
                }
            });
            var n = t(397458),
                l = t(652983),
                o = t(14517),
                i = t(850667),
                s = t(556524),
                a = t(950429),
                c = t(865403),
                d = t.n(c);

            function h(e) {
                let {
                    subFooter: r,
                    children: t,
                    className: l
                } = e;
                return (0, n.jsxs)("footer", {
                    className: (0, o.W)(d().footer, l),
                    "data-version": "v1",
                    children: [(0, n.jsx)("nav", {
                        "aria-label": "Vercel Directory",
                        role: "navigation",
                        children: t
                    }), r ? (0, n.jsx)("section", {
                        children: r
                    }) : null]
                })
            }

            function u(e) {
                let {
                    title: r,
                    children: t
                } = e, [o, s] = (0, l.useState)(!1), a = (0, i.M)("footer-group-");
                return (0, n.jsxs)("div", {
                    className: d().group,
                    children: [(0, n.jsx)("input", {
                        "aria-label": o ? "Close Navigation Menu" : "Open Navigation Menu",
                        checked: o,
                        className: d().hidden,
                        id: a,
                        onChange: () => s(!o),
                        type: "checkbox"
                    }), (0, n.jsx)("label", {
                        htmlFor: a,
                        children: (0, n.jsx)("h2", {
                            className: d().header,
                            children: r
                        })
                    }), (0, n.jsx)("ul", {
                        className: d().list,
                        children: t
                    })]
                })
            }

            function f(e) {
                let {
                    children: r
                } = e;
                return (0, n.jsx)("div", {
                    className: d().column,
                    children: r
                })
            }

            function _(e) {
                let {
                    children: r,
                    href: t,
                    dashboard: l,
                    ...o
                } = e;
                return (0, n.jsx)("li", {
                    className: d().item,
                    children: (0, n.jsx)(a.r, {
                        href: t,
                        onClick: () => {
                            var e;
                            null === (e = o.onClick) || void 0 === e || e.call(o), s.co.track(s.s6.CLICK_EVENT, {
                                click_name: l ? "dashboard_footer_link" : "marketing_footer_link",
                                click_value: t
                            })
                        },
                        type: "secondary",
                        ...o,
                        children: r
                    })
                })
            }
        },
        40789: function(e, r, t) {
            "use strict";
            t.d(r, {
                W: function() {
                    return l
                }
            });
            var n = t(521459);
            let l = (0, n.l)('<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z" fill="currentColor"/>')
        },
        808259: function(e, r, t) {
            "use strict";
            t.d(r, {
                L: function() {
                    return l
                }
            });
            var n = t(521459);
            let l = (0, n.l)('<path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z" fill="currentColor" />')
        },
        515857: function(e) {
            e.exports = {
                marketingFooterContainer: "footer_marketingFooterContainer__48kHC",
                "theme-switcher": "footer_theme-switcher__JPVDa",
                contact: "footer_contact__f20st",
                marketingFooter: "footer_marketingFooter__QL4c2",
                wrapper: "footer_wrapper__8yEt7",
                logotype: "footer_logotype__9r6ml",
                copyright: "footer_copyright__69W_S",
                social: "footer_social__nmdaq",
                github: "footer_github__C0XBp",
                bird: "footer_bird__eNkIZ",
                link: "footer_link__TtCV5",
                legalButton: "footer_legalButton__hkSj9",
                status: "footer_status__glnFA",
                marketingSubFooter: "footer_marketingSubFooter___zGWw",
                logotypeWrapper: "footer_logotypeWrapper__qPibo",
                cmdk: "footer_cmdk__AZTR4",
                logo: "footer_logo__z5B3Q",
                dashboardFooter: "footer_dashboardFooter__TZlJo",
                dashboardFooterLinks: "footer_dashboardFooterLinks__ssDUW",
                topWrapper: "footer_topWrapper__X8Ibt",
                contactWrapper: "footer_contactWrapper__OpiLd"
            }
        },
        587132: function(e) {
            e.exports = {
                background: "with-git-icon-background_background__tpU7H"
            }
        },
        865403: function(e) {
            e.exports = {
                footer: "footer_footer__O_b2S",
                column: "footer_column__HZJuv",
                group: "footer_group__1E48L",
                header: "footer_header__l9pvw",
                hidden: "footer_hidden__2YPyQ reset_visuallyHidden__C4UAP reset_visuallyHidden__RV0kP",
                list: "footer_list__EoVSJ",
                item: "footer_item__tMf_5"
            }
        },
        90735: function(e) {
            e.exports = {
                link: "link_link__jJm5S",
                primary: "link_primary__UU6fB",
                disabled: "link_disabled__6bd1N",
                highlight: "link_highlight__d8Fzh",
                secondary: "link_secondary__Xo2Cq",
                blend: "link_blend__GCQEt",
                underline: "link_underline__GRnOR",
                alwaysUnderline: "link_alwaysUnderline__TOTB_",
                external: "link_external__G9zyC",
                externalIcon: "link_externalIcon__M0Bj8",
                "fragment-link": "link_fragment-link__2BmCa",
                anchor: "link_anchor__4Unr7"
            }
        }
    }
]);