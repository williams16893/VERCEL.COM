(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [57251], {
        725399: function(e, i, s) {
            "use strict";
            s.d(i, {
                Vm: function() {
                    return t
                }
            });
            var n = s(397458);
            s(652983);
            var r = s(835093);
            s(342958), s(7594);
            let t = e => {
                let {
                    width: i,
                    height: s = 14,
                    ...t
                } = e;
                return (0, n.jsx)(r.O, {
                    height: s,
                    style: {
                        marginBottom: 0
                    },
                    width: i,
                    ...t
                })
            }
        },
        442867: function(e, i, s) {
            "use strict";
            s.d(i, {
                P: function() {
                    return r
                }
            });
            var n = s(397458);

            function r(e) {
                let {
                    width: i = 360
                } = e;
                return (0, n.jsxs)("svg", {
                    fill: "none",
                    viewBox: "-80 0 369 271",
                    width: i,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        clipRule: "evenodd",
                        d: "M108.36 2.48l105.7 185.47H2.66L108.35 2.48z",
                        fill: "var(--geist-background)",
                        fillRule: "evenodd",
                        stroke: "var(--accents-2)",
                        strokeDasharray: "4 4",
                        strokeWidth: "2"
                    }), (0, n.jsxs)("g", {
                        filter: "url(#filter0_d)",
                        children: [(0, n.jsx)("ellipse", {
                            cx: "182.68",
                            cy: "156.48",
                            fill: "var(--geist-background)",
                            rx: "74.32",
                            ry: "74.52"
                        }), (0, n.jsx)("path", {
                            d: "M256.5 156.48c0 40.88-33.05 74.02-73.82 74.02-40.77 0-73.83-33.14-73.83-74.02 0-40.87 33.06-74.01 73.83-74.01 40.77 0 73.82 33.14 73.82 74.01z",
                            stroke: "var(--accents-2)"
                        })]
                    }), (0, n.jsx)("mask", {
                        height: "150",
                        id: "a",
                        maskUnits: "userSpaceOnUse",
                        width: "149",
                        x: "108",
                        y: "81",
                        children: (0, n.jsx)("ellipse", {
                            cx: "182.68",
                            cy: "156.48",
                            fill: "#fff",
                            rx: "74.32",
                            ry: "74.52"
                        })
                    }), (0, n.jsx)("g", {
                        mask: "url(#a)",
                        children: (0, n.jsx)("path", {
                            clipRule: "evenodd",
                            d: "M108.36 2.48l105.7 185.47H2.66L108.35 2.48z",
                            fill: "var(--geist-foreground)",
                            fillRule: "evenodd"
                        })
                    }), (0, n.jsx)("defs", {
                        children: (0, n.jsxs)("filter", {
                            colorInterpolationFilters: "sRGB",
                            filterUnits: "userSpaceOnUse",
                            height: "213.03",
                            id: "filter0_d",
                            width: "212.65",
                            x: "76.35",
                            y: "57.97",
                            children: [(0, n.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }), (0, n.jsx)("feColorMatrix", { in: "SourceAlpha",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            }), (0, n.jsx)("feOffset", {
                                dy: "8"
                            }), (0, n.jsx)("feGaussianBlur", {
                                stdDeviation: "16"
                            }), (0, n.jsx)("feColorMatrix", {
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                            }), (0, n.jsx)("feBlend", {
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow"
                            }), (0, n.jsx)("feBlend", { in: "SourceGraphic",
                                in2: "effect1_dropShadow",
                                result: "shape"
                            })]
                        })
                    })]
                })
            }
        },
        300401: function(e, i, s) {
            "use strict";
            s.d(i, {
                T: function() {
                    return S
                }
            });
            var n = s(397458),
                r = s(243801),
                t = s.n(r),
                a = s(316902),
                l = s.n(a),
                o = s(628987),
                c = s(652983),
                d = s(97264),
                x = s(121446),
                f = s(316944),
                h = s(71299),
                u = s(725399),
                g = s(950429),
                m = s(363689),
                j = s(41296),
                p = s(308108),
                b = s(791688),
                k = s(118960),
                _ = s(556524),
                v = s(442867);
            let w = l()(() => (0, m.E)(Promise.all([s.e(81939), s.e(21468), s.e(18087), s.e(1210), s.e(39496)]).then(s.bind(s, 601210))).then(e => e.VercelestialGameMain), {
                    loadableGenerated: {
                        webpack: () => [601210]
                    },
                    ssr: !1
                }),
                y = l()(() => (0, m.E)(s.e(42662).then(s.bind(s, 442662))), {
                    loadableGenerated: {
                        webpack: () => [442662]
                    },
                    ssr: !1
                }),
                E = (e, i) => i ? (0, n.jsx)("span", {
                    children: "You are now logged out, redirecting to login page."
                }) : (null == e ? void 0 : e.email) ? (0, n.jsxs)("span", {
                    children: ["You are logged in as ", (0, n.jsx)("strong", {
                        children: e.email
                    })]
                }) : (0, n.jsx)("span", {
                    children: "The page doesn't exist or you don't have permission to see it."
                }),
                N = e => e ? "Sign in as a different user" : "Log into Vercel";

            function S(e) {
                let {
                    userAccountMessageHander: i = E,
                    buttonLabelHandler: s = N
                } = e, {
                    isLoggedOut: r,
                    user: a
                } = (0, h.a)(), l = (0, o.usePathname)() || "", [m, S] = (0, c.useState)(!1), z = (0, p.e1)(), R = (0, j.r)(), C = (0, k.Z)();
                (0, c.useEffect)(() => {
                    if (m) return;
                    let e = e => {
                        "Space" === e.code && (e.preventDefault(), S(!0), _.co.track(_.s6.ASTEROIDS_GAME_START))
                    };
                    return window.addEventListener("keydown", e), () => {
                        window.removeEventListener("keydown", e)
                    }
                }, [m]);
                let [A, M] = (0, c.useState)(!1), O = (0, d.useSpring)({
                    opacity: m ? 0 : 1,
                    onResolve: () => m && M(!0)
                });
                return (0, n.jsxs)(n.Fragment, {
                    children: [A ? (0, n.jsx)(w, {
                        isLightTheme: C ? ? !1
                    }) : (0, n.jsxs)(d.animated.div, {
                        style: O,
                        children: [(0, n.jsx)("main", {
                            className: "jsx-a6cf5821fff77a3b geist-within-screen",
                            children: (0, n.jsxs)("section", {
                                className: "jsx-a6cf5821fff77a3b",
                                children: [(0, n.jsx)(v.P, {}), (0, n.jsx)(x.x, {
                                    as: "h1",
                                    size: 48,
                                    style: {
                                        margin: "12px 0 8px"
                                    },
                                    children: "404"
                                }), void 0 === r ? (0, n.jsx)(u.Vm, {
                                    height: 72,
                                    width: 380
                                }) : (0, n.jsx)(x.x, {
                                    color: "gray-900",
                                    size: 16,
                                    style: {
                                        height: 48,
                                        width: 380,
                                        maxWidth: "100%",
                                        margin: "12px 0"
                                    },
                                    children: i(a, r)
                                }), (0, n.jsx)(f.z, {
                                    "data-testid": (0, b.C)("not-found", "log-in-button"),
                                    loading: void 0 === r,
                                    onClick: () => {
                                        R({
                                            source: "404-page",
                                            next: l
                                        }).catch(() => {
                                            z.error("There was an error logging you out.")
                                        })
                                    },
                                    size: "large",
                                    style: {
                                        margin: "12px 0 24px"
                                    },
                                    children: s(a)
                                }), (0, n.jsxs)("div", {
                                    "data-testid": (0, b.C)("not-found", "call-to-action"),
                                    className: "jsx-a6cf5821fff77a3b link-list",
                                    children: [(0, n.jsx)(g.r, {
                                        href: "/docs",
                                        type: "highlight",
                                        children: (0, n.jsx)(x.x, {
                                            as: "p",
                                            color: "inherit",
                                            size: 14,
                                            children: "Docs"
                                        })
                                    }), (0, n.jsx)(g.r, {
                                        href: "/guides",
                                        type: "highlight",
                                        children: (0, n.jsx)(x.x, {
                                            as: "p",
                                            color: "inherit",
                                            size: 14,
                                            children: "Guides"
                                        })
                                    }), (0, n.jsx)(g.r, {
                                        href: "/blog",
                                        type: "highlight",
                                        children: (0, n.jsx)(x.x, {
                                            as: "p",
                                            color: "inherit",
                                            size: 14,
                                            children: "Blog"
                                        })
                                    })]
                                })]
                            })
                        }), (0, n.jsx)(y, {})]
                    }), (0, n.jsx)(t(), {
                        id: "a6cf5821fff77a3b",
                        children: "main.jsx-a6cf5821fff77a3b,section.jsx-a6cf5821fff77a3b{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1}section.jsx-a6cf5821fff77a3b{line-height:1.6;max-width:100%;padding:0 20px;text-align:center}main.jsx-a6cf5821fff77a3b{padding:var(--geist-gap-double)0}section.jsx-a6cf5821fff77a3b span.jsx-a6cf5821fff77a3b{display:block;font-size:32px;font-weight:700;text-align:center;width:100px}section.jsx-a6cf5821fff77a3b span.jsx-a6cf5821fff77a3b{margin:20px 0 10px}section.jsx-a6cf5821fff77a3b span.jsx-a6cf5821fff77a3b+p.jsx-a6cf5821fff77a3b{margin:0}.link-list.jsx-a6cf5821fff77a3b{margin:15px 0}.link-list.jsx-a6cf5821fff77a3b a{color:var(--geist-link-color);display:inline-block;font-weight:400;padding:0 8px}.link-list.jsx-a6cf5821fff77a3b a:not(:last-child){border-right:1px solid var(--accents-2)}"
                    })]
                })
            }
        },
        557251: function(e, i, s) {
            "use strict";
            s.r(i);
            var n = s(397458),
                r = s(652983),
                t = s(14517),
                a = s(628987),
                l = s(369006),
                o = s(121446),
                c = s(316944),
                d = s(487554),
                x = s(492711),
                f = s(725898),
                h = s(300401),
                u = s(950429),
                g = s(442867),
                m = s(803972),
                j = s(41296),
                p = s(791688),
                b = s(820111),
                k = s(702130),
                _ = s.n(k);
            let v = {
                INVITE_EMAIL_MISMATCH: "invite_email_mismatch",
                NETWORK_ERROR: "network_error"
            };

            function w(e) {
                let {
                    href: i,
                    disabled: s = !1,
                    children: r
                } = e;
                return (0, n.jsx)(u.r, {
                    "aria-disabled": s,
                    className: (0, t.W)({
                        [_().disabled]: s
                    }),
                    href: i,
                    variant: "highlight",
                    children: (0, n.jsx)(o.x, {
                        className: "geist-text-no-margin",
                        children: r
                    })
                })
            }

            function y(e) {
                let {
                    statusCode: i,
                    err: s,
                    title: u,
                    message: m,
                    action: b,
                    link: k,
                    reported: y
                } = e, E = (0, a.useRouter)(), N = (0, a.usePathname)() || "", [S, z] = (0, r.useState)(!1), R = s || void 0, C = R instanceof Error, A = 404 !== i && C, M = null != R && !!R.code && R.code === v.INVITE_EMAIL_MISMATCH, O = (0, r.useCallback)(async () => {
                    E.prefetch("/login"), z(!0), await (0, j.a)({
                        source: "error-page"
                    }), E.push(`/login?next=${N}`)
                }, [N, E]), T = m, I = u;
                (null == R ? void 0 : R.code) === v.NETWORK_ERROR ? (T = "A network error has occurred. Please check your internet connection and try again", I = "Network Error") : 404 === i ? T = null : M ? I = "Invalid Email" : (null == R ? void 0 : R.message) ? T = R.message : m || (T = "An error has occurred."), 404 !== i || u ? C && !u && (I = "A Runtime Error Occurred") : I = "Page Not Found", (0, r.useEffect)(() => {
                    R && (0, l.j)("Error", {
                        message: R.message,
                        name: R.name,
                        ...R.code && {
                            code: R.code
                        },
                        ...I && {
                            pageTitle: I
                        },
                        ...i && {
                            statusCode: i
                        }
                    })
                }, []);
                let L = (0, r.useCallback)(e => {
                    let {
                        children: s
                    } = e;
                    return (0, n.jsx)(x.Z, {
                        header: (0, n.jsx)(f.Z, {
                            banner: null,
                            hideDocs: M,
                            logoOnly: (null == R ? void 0 : R.isDashboard) || 404 !== i
                        }),
                        title: I || "An Error Has Occurred",
                        children: s
                    })
                }, [null == R ? void 0 : R.isDashboard, M, i, I]);
                return 404 === i ? (0, n.jsx)(L, {
                    children: (0, n.jsx)(h.T, {})
                }) : (0, n.jsx)(L, {
                    children: (0, n.jsxs)("main", {
                        className: (0, t.W)(_().content, "geist-within-screen"),
                        children: [(0, n.jsxs)("section", {
                            className: _().contentSection,
                            children: [(0, n.jsx)(g.P, {}), i ? (0, n.jsx)(o.x, {
                                as: "h1",
                                style: {
                                    marginBottom: 10,
                                    marginTop: 0
                                },
                                children: i
                            }) : null, u ? (0, n.jsx)(o.x, {
                                as: "h4",
                                className: "geist-text-no-margin",
                                children: u
                            }) : null, (0, n.jsx)(o.x, {
                                "data-testid": (0, p.C)("error-page", "message"),
                                style: {
                                    width: 420,
                                    maxWidth: "100%"
                                },
                                children: T
                            }), b && k ? (0, n.jsx)(o.x, {
                                style: {
                                    width: 420,
                                    maxWidth: "100%"
                                },
                                children: (0, n.jsx)(d.Z, {
                                    href: k,
                                    children: b
                                })
                            }) : null, M ? (0, n.jsx)("div", {
                                className: _().logout,
                                children: (0, n.jsx)(c.z, {
                                    loading: S,
                                    onClick: () => {
                                        O()
                                    },
                                    size: "small",
                                    type: "secondary",
                                    children: S ? "Switching Account..." : "Switch Account"
                                })
                            }) : null, (0, n.jsxs)("div", {
                                className: _().linkList,
                                children: [(0, n.jsx)(w, {
                                    disabled: S,
                                    href: "/docs",
                                    children: "Docs"
                                }), (0, n.jsx)(w, {
                                    disabled: S,
                                    href: "/guides",
                                    children: "Guides"
                                }), (0, n.jsx)(w, {
                                    disabled: S,
                                    href: "/blog",
                                    children: "Blog"
                                })]
                            })]
                        }), A ? (0, n.jsxs)("section", {
                            className: _().detail,
                            children: [y ? (0, n.jsx)(o.x, {
                                children: "An unexpected error has occurred. Our team has been notified and will resolve this error as soon as possible."
                            }) : null, R.stack ? (0, n.jsxs)("details", {
                                children: [(0, n.jsx)("summary", {
                                    className: _().summary,
                                    children: "Developer details"
                                }), (0, n.jsx)("pre", {
                                    className: _().stack,
                                    children: (0, n.jsx)("code", {
                                        children: R.stack
                                    })
                                })]
                            }) : null]
                        }) : null]
                    })
                })
            }
            let E = async e => {
                let {
                    res: i,
                    req: s,
                    err: n
                } = e, r = (null == n ? void 0 : n.statusCode) || void 0, t = i ? i.statusCode : r;
                return await (0, m.captureError)(n, {
                    statusCode: t,
                    req: s
                }), {
                    statusCode: t,
                    err: n
                }
            };
            y.getInitialProps = (0, b.O_)(E), i.default = y
        },
        702130: function(e) {
            e.exports = {
                content: "_error_content__3n5jk",
                contentSection: "_error_contentSection__P_PoC",
                logout: "_error_logout__sQLvp",
                detail: "_error_detail__WmeEs",
                summary: "_error_summary__f3eUG",
                stack: "_error_stack__y_vMn",
                linkList: "_error_linkList__etRf1",
                disabled: "_error_disabled__HqM3N"
            }
        }
    }
]);