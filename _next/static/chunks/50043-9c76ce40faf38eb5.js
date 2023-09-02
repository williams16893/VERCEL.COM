(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [50043], {
        963648: function(e, t, i) {
            "use strict";
            var o = i(397458),
                n = i(243801),
                r = i.n(n),
                a = i(14517),
                s = i(869480),
                l = i.n(s);

            function d(e) {
                let {
                    children: t,
                    center: i,
                    small: n,
                    reference: s,
                    homepage: l = !1,
                    fullwidth: d = !1
                } = e;
                return (0, o.jsxs)("div", {
                    className: r().dynamic([
                        ["2e239ddb24e5615b", [s ? "840px" : "100%", d ? "max-width: 1100px; @media only screen and (min-width: 1300px) {max-width: 1300px} @media only screen and (min-width: 1600px) {max-width: 1800px}" : "max-width: 904px;", l ? "min-width: 0; margin-left: 16px; margin-right: 16px;" : "", d ? "padding-top: 27px;" : "", l ? `
            padding: 0;
            padding-top: 24px;
            word-break: break-word;` : `
            padding-right: 24px;
            padding-left: 24px;
              `, l ? "margin-left: auto; margin-right: auto;" : ""]]
                    ]) + " " + ((0, a.W)("content", {
                        center: i,
                        small: n
                    }) || ""),
                    children: [t, (0, o.jsx)(r(), {
                        id: "2e239ddb24e5615b",
                        dynamic: [s ? "840px" : "100%", d ? "max-width: 1100px; @media only screen and (min-width: 1300px) {max-width: 1300px} @media only screen and (min-width: 1600px) {max-width: 1800px}" : "max-width: 904px;", l ? "min-width: 0; margin-left: 16px; margin-right: 16px;" : "", d ? "padding-top: 27px;" : "", l ? `
            padding: 0;
            padding-top: 24px;
            word-break: break-word;` : `
            padding-right: 24px;
            padding-left: 24px;
              `, l ? "margin-left: auto; margin-right: auto;" : ""],
                        children: `.content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-bottom:64px;width:${s?"840px":"100%"};${d?"max-width: 1100px; @media only screen and (min-width: 1300px) {max-width: 1300px} @media only screen and (min-width: 1600px) {max-width: 1800px}":"max-width: 904px;"}
          margin-left: auto;min-width:0;margin-right:auto;padding-right:48px;padding-left:48px;padding-top:24px;${l?"min-width: 0; margin-left: 16px; margin-right: 16px;":""}
          ${d?"padding-top: 27px;":""}
        }.content.small.__jsx-style-dynamic-selector{-webkit-box-flex:0;-webkit-flex:0 0 672px;-moz-box-flex:0;-ms-flex:0 0 672px;flex:0 0 672px;max-width:672px}.content.center.__jsx-style-dynamic-selector{margin:0 auto}@media screen and (max-width:950px)and (min-width:450px){.sidebar+.content.__jsx-style-dynamic-selector,.content.__jsx-style-dynamic-selector{padding-right:0;padding-left:0}}@media screen and (max-width:450px){.content.__jsx-style-dynamic-selector{${l?`
            padding: 0;
            padding-top: 24px;
            word-break: break-word;`:`
            padding-right: 24px;
            padding-left: 24px;
              `}
          }}@media screen and (max-width:1280px){.content.__jsx-style-dynamic-selector{width:100%;grid-column:2/-1}}@media screen and (min-width:1440px){.content.__jsx-style-dynamic-selector{${l?"margin-left: auto; margin-right: auto;":""}
          }}`
                    })]
                })
            }
            d.propTypes = {
                center: l().bool,
                children: l().oneOfType([l().arrayOf(l().node), l().node]),
                small: l().bool
            }, t.Z = d
        },
        616439: function(e, t, i) {
            "use strict";
            i.d(t, {
                IZ: function() {
                    return ef
                },
                ZP: function() {
                    return eP
                }
            });
            var o = i(397458),
                n = i(243801),
                r = i.n(n),
                a = i(244993),
                s = i(14517),
                l = i(426326),
                d = i(869480),
                c = i.n(d),
                h = i(652983),
                u = i(466371),
                p = i(316944),
                m = i(121446),
                g = i(265547),
                f = i(963648),
                w = i(77274),
                v = i(573337),
                y = i(107030),
                b = i(80606),
                x = i(193203),
                T = i(988319),
                E = i(371138),
                P = i(950429),
                _ = i(664922),
                k = i.n(_);

            function j(e) {
                let {
                    dynamicMenu: t,
                    handleIndexClick: i,
                    path: n
                } = e, [r, a] = (0, h.useState)(!1), [l, d] = (0, h.useState)({}), c = b.J.filter(e => !0 === e.home), u = (0, h.useCallback)((e, t) => {
                    for (let i of t) {
                        let t = (0, T.KO)(i.href);
                        if (e && t === e) return i.posts && (l[i.name] = !0, d(l)), a(!0), !0;
                        if (i.posts) {
                            let t = u(e, i.posts);
                            if (t) return l[i.name] = !0, d(l), !0;
                            n === c[0].href && void 0 !== i.open && i.open && (l[i.name] = !0, d(l))
                        }
                    }
                    return a(!0), !1
                }, [c, l, n]);
                return (0, h.useEffect)(() => {
                    u(n, t)
                }, [n, t, u]), (0, o.jsx)(o.Fragment, {
                    children: r ? (0, o.jsx)("nav", {
                        className: (0, s.W)(k().wrapper, k().withSecondaryNav, k().showNav),
                        children: (0, o.jsx)("ul", {
                            children: (0, o.jsx)(L, {
                                data: t,
                                handleIndexClick: i,
                                isRoot: !0,
                                openedItems: l,
                                path: n
                            })
                        })
                    }) : (0, o.jsx)("div", {})
                })
            }

            function L(e) {
                let {
                    data: t,
                    handleIndexClick: i,
                    path: n,
                    openedItems: r,
                    isRoot: a
                } = e, l = (0, h.useRef)(null), [d, c] = (0, h.useState)(r), u = e => {
                    c({ ...d,
                        [e]: !d[e]
                    })
                };
                return (0, o.jsx)(o.Fragment, {
                    children: t.length > 0 && t.map(e => (0, o.jsxs)("li", {
                        className: a ? k().rootWrapper : (0, T.KO)(e.href) === n ? k().itemSelected : "",
                        "data-state": d[e.name] ? "opened" : "closed",
                        children: [(0, o.jsxs)("div", {
                            className: (0, s.W)(k().navItemWrapper, d[e.name] && k().expandedSection, a ? k().rootSection : k().childSection),
                            children: [(0, o.jsx)(P.r, {
                                href: e.href,
                                onClick: i,
                                children: (0, o.jsx)("div", {
                                    className: (0, s.W)(e.separator && k().itemSeparator, (0, T.KO)(e.href) === n && k().itemSelected),
                                    children: (0, o.jsx)("span", {
                                        className: (0, T.KO)(e.href) === n ? k().itemSelected : void 0,
                                        ref: (0, T.KO)(e.href) === n ? l : null,
                                        children: e.name
                                    })
                                })
                            }), void 0 !== e.posts && e.posts.length > 0 && (0, o.jsx)("button", {
                                "aria-label": "Side navigation item toggle",
                                className: d[e.name] ? (0, s.W)(k().dynamicMenuButton, k().dynamicMenuButtonOpen) : k().dynamicMenuButton,
                                onClick: () => u(e.name),
                                type: "button",
                                children: (0, o.jsx)(E._, {
                                    size: 16
                                })
                            })]
                        }), void 0 !== e.posts && e.posts.length > 0 && !!d[e.name] && (0, o.jsx)("div", {
                            className: d[e.name] ? (0, s.W)(k().childSidebar, k().expandedSection) : k().childSidebar,
                            children: (0, o.jsx)(L, {
                                data: e.posts,
                                handleIndexClick: i,
                                isRoot: !1,
                                openedItems: r,
                                path: n
                            })
                        })]
                    }, e.name))
                })
            }

            function C(e) {
                let t, {
                        handleIndexClick: i,
                        path: n
                    } = e,
                    r = (0, T.TE)(n, b.J);
                if (r.currentItem && "key" in r.currentItem && r.currentItem.key) t = x.v[r.currentItem.key].posts;
                else {
                    let e = Object.keys(x.v);
                    t = x.v[e[0]].posts
                }
                return (0, o.jsx)(o.Fragment, {
                    children: void 0 !== t && t.length > 0 && (0, o.jsx)(j, {
                        dynamicMenu: t,
                        handleIndexClick: i,
                        path: n
                    })
                })
            }
            var I = i(251644),
                Z = i(689804),
                N = i(537525),
                V = i.n(N),
                S = i(374993),
                A = i.n(S);

            function D(e) {
                var t;
                let {
                    handleIndexClick: i,
                    path: n
                } = e, r = (0, T.TE)(n, b.J), a = (null === (t = r.currentItem) || void 0 === t ? void 0 : t.key) ? (0, T.C5)(r.currentItem.key, b.J) : [], s = a.findIndex(e => (0, T.KO)(e.href) === (0, T.KO)(n)), l = {
                    name: "",
                    href: ""
                }, d = {
                    name: "",
                    href: ""
                };
                return s > 0 && (d = {
                    name: a[s - 1].name,
                    href: a[s - 1].href
                }), s < a.length - 1 && (l = {
                    name: a[s + 1].name,
                    href: a[s + 1].href
                }), (0, o.jsxs)("div", {
                    className: A().container,
                    children: ["" !== d.name && (0, o.jsxs)(V(), {
                        className: A().link,
                        href: d.href,
                        onClick: i,
                        children: [(0, o.jsx)("div", {
                            className: A().navIcon,
                            children: (0, o.jsx)(Z.s, {
                                className: A().icon,
                                size: 20
                            })
                        }), (0, o.jsxs)("div", {
                            className: A().previous,
                            children: [(0, o.jsx)("div", {
                                className: A().label,
                                children: "Previous"
                            }), (0, o.jsx)("div", {
                                className: A().title,
                                children: d.name
                            })]
                        })]
                    }), (0, o.jsx)("div", {
                        className: A().separator
                    }), "" !== l.name && (0, o.jsxs)(V(), {
                        className: A().link,
                        href: l.href,
                        onClick: i,
                        children: [(0, o.jsxs)("div", {
                            className: A().next,
                            children: [(0, o.jsx)("div", {
                                className: A().label,
                                children: "Next"
                            }), (0, o.jsx)("div", {
                                className: A().title,
                                children: l.name
                            })]
                        }), (0, o.jsx)("div", {
                            className: A().navIcon,
                            children: (0, o.jsx)(E._, {
                                className: A().icon,
                                size: 20
                            })
                        })]
                    })]
                })
            }
            var O = i(485234),
                F = i.n(O);

            function R(e) {
                let {
                    handleIndexClick: t,
                    path: i
                } = e, n = (0, T.LW)(i, b.J[0].posts);
                return (0, o.jsx)(o.Fragment, {
                    children: !!n && (null == n ? void 0 : n.length) !== void 0 && n.length > 1 && (0, o.jsx)("div", {
                        className: F().container,
                        children: n.map(e => (0, o.jsx)("div", {
                            children: "" === e.href ? (0, o.jsx)("span", {
                                className: F().crumb,
                                children: e.name
                            }) : (0, o.jsxs)(V(), {
                                href: e.href,
                                onClick: t,
                                children: [(0, o.jsx)("span", {
                                    className: F().crumb,
                                    children: e.name
                                }), (0, o.jsx)("span", {
                                    className: F().icon,
                                    children: (0, o.jsx)(E._, {
                                        size: 16
                                    })
                                })]
                            })
                        }, e.name))
                    })
                })
            }
            var M = i(335711),
                q = i.n(M);

            function U(e) {
                let {
                    handleIndexClick: t,
                    path: i,
                    timeToRead: n
                } = e;
                return (0, o.jsxs)("div", {
                    className: q().container,
                    children: [(0, o.jsx)("div", {
                        className: q().breadcrumbs,
                        children: (0, o.jsx)(R, {
                            handleIndexClick: t,
                            path: i
                        })
                    }), (0, o.jsxs)("div", {
                        className: q().readingTime,
                        children: [n, " min read"]
                    })]
                })
            }
            var z = i(777414),
                B = i(909188),
                W = i(226222),
                G = i(291228),
                H = i(760635),
                Y = [{
                    name: `Start Your ${G.sG} Journey`,
                    separator: !0
                }, {
                    name: "Sign up and Deploy",
                    href: "/docs/get-started",
                    posts: []
                }, {
                    name: "Customize Your Project",
                    href: "/docs/get-started/customize",
                    posts: []
                }, {
                    name: "Assign a Domain",
                    href: "/docs/get-started/assign-domain",
                    posts: []
                }, {
                    name: "Make Changes",
                    href: "/docs/get-started/make-changes",
                    posts: []
                }, {
                    name: "Collaborate with Others",
                    href: "/docs/get-started/collaborate",
                    posts: []
                }, {
                    name: "Monitor Your Project",
                    href: "/docs/get-started/monitor",
                    posts: []
                }],
                K = i(67150),
                $ = i(589951),
                J = i(223303),
                X = i(926599),
                Q = i(347257),
                ee = i(274606),
                et = i(582526),
                ei = i(29180),
                eo = i(874793),
                en = i(694752),
                er = i(695182),
                ea = i(234009),
                es = i(803390),
                el = i.n(es);

            function ed(e) {
                let {
                    headings: t
                } = e;
                return t.reduce((e, t) => (e.push(t.href.slice(1)), e), [])
            }

            function ec(e) {
                let [t, i] = (0, h.useState)(e[0] ? ? "");
                return (0, h.useEffect)(() => {
                    let t = new IntersectionObserver(e => {
                        0 !== e.length && e.forEach(e => {
                            e.isIntersecting && i(e.target.id)
                        })
                    }, {
                        rootMargin: "0% 0% -80% 0%"
                    });
                    e.forEach(e => {
                        e && document.getElementById(e) && t.observe(document.getElementById(e))
                    })
                }, [e]), t
            }

            function eh(e, t) {
                return e.length > t ? `${e.substring(0,t)}...` : e
            }

            function eu(e) {
                let {
                    headings: t,
                    hasSecondaryNav: i = !1
                } = e, n = (0, h.useRef)(null), r = ed({
                    headings: t
                }), a = ec(r), d = (0, en.T)(), c = t.length > 10, u = (0, l.useRouter)().pathname, [p, m] = (0, h.useState)(!1), g = u.includes("/frequently-asked-questions"), f = e => e.split(" ").length, [w, v] = (0, h.useState)(!1), y = (0, h.useCallback)(() => {
                    let e = window.pageYOffset < 80;
                    !w && window.scrollY > 80 ? v(!0) : w && window.scrollY <= 80 && v(!1), e && v(!1)
                }, [w]);
                (0, h.useEffect)(() => {
                    let e = document.getElementById(`toc_${a}`);
                    n.current && (e && e.offsetTop + e.offsetHeight > n.current.offsetHeight / 2 ? n.current.scrollTo({
                        top: e.offsetTop - e.offsetHeight
                    }) : n.current.scrollTo({
                        top: 0
                    }))
                }, [a]), (0, h.useEffect)(() => (window.addEventListener("scroll", y), () => window.removeEventListener("scroll", y)), [y]);
                let b = () => {
                        window.scrollTo({
                            top: 0,
                            behavior: d ? "auto" : "smooth"
                        })
                    },
                    x = (0, h.useCallback)((e, t, i) => {
                        let o = e[i - 1];
                        if (o) return o.level < t.level ? o : x(e, t, i - 1)
                    }, []),
                    T = (0, h.useMemo)(() => t.reduce((e, t, i) => {
                        let o = x(e, t, i);
                        return e.push({ ...t,
                            order: o ? o.order + 1 : 1
                        }), e
                    }, []), [x, t]),
                    E = eo.Ec.filter(e => {
                        var t;
                        return null === (t = e.supportedFeatures) || void 0 === t ? void 0 : t.some(e => u.includes(e))
                    }),
                    _ = () => {
                        m(!p)
                    };
                return (0, o.jsx)("aside", {
                    className: (0, s.W)(el().toc, c ? el().tocScrollbar : "", i && el().hasSecondaryNav),
                    ref: n,
                    children: (0, o.jsxs)("ul", {
                        children: [E.length > 0 && (0, o.jsxs)("div", {
                            className: el().desktopFramework,
                            children: [(0, o.jsx)("div", {
                                className: (0, s.W)(el().DropDownContainer, el().desktopDDContainer),
                                onClick: () => _(),
                                onKeyDown: () => _(),
                                role: "button",
                                tabIndex: 0,
                                children: (0, o.jsx)(ea._, {
                                    selectorOpened: p
                                })
                            }), (0, o.jsx)("div", {
                                className: p ? (0, s.W)(el().popoverContainer, el().showPopover, el().tabletView) : el().popoverContainer,
                                children: (0, o.jsx)(er.Y, {
                                    handleIndexClick: () => _(),
                                    pathname: u
                                })
                            })]
                        }), (0, o.jsx)("div", {
                            className: el().tocHeader,
                            children: (0, o.jsx)("span", {
                                children: "On this page"
                            })
                        }), T.length ? T.map(e => {
                            let {
                                name: t,
                                href: i,
                                order: n
                            } = e;
                            return (0, o.jsx)("li", {
                                className: (0, s.W)(el().tocItem, g ? el().faq : "", el()[`level-${n}`], a === i.slice(1) ? el().active : ""),
                                id: `toc_${i.slice(1)}`,
                                children: (0, o.jsx)(P.r, {
                                    href: i.replaceAll("`", ""),
                                    children: f(t) > 10 ? eh(t, 30) : t
                                })
                            }, t)
                        }) : null, (0, o.jsx)("div", {
                            className: el().divider
                        }), t.length && w ? (0, o.jsxs)("div", {
                            className: el().backToTop,
                            onClick: b,
                            onKeyDown: b,
                            role: "button",
                            tabIndex: 0,
                            children: [(0, o.jsx)(ei.k, {
                                size: 20
                            }), "Back to top"]
                        }) : null]
                    })
                })
            }

            function ep(e) {
                let {
                    headings: t
                } = e, i = ed({
                    headings: t
                }), n = ec(i), [r, a] = (0, h.useState)(!1), [d, c] = (0, h.useState)(!1), u = t.length > 10, p = (0, l.useRouter)().pathname, m = p.includes("/frequently-asked-questions"), g = (0, h.useRef)(null), f = (0, h.useCallback)(() => {
                    var e, t;
                    window.scrollY > 150 ? null === (e = g.current) || void 0 === e || e.style.setProperty("padding-top", "10px") : null === (t = g.current) || void 0 === t || t.style.setProperty("padding-top", "0px")
                }, [g]);
                (0, h.useEffect)(() => (window.addEventListener("scroll", f), () => {
                    window.removeEventListener("scroll", f)
                }), [f]), (0, h.useEffect)(() => {
                    let e = e => {
                        g.current && !g.current.contains(e.target) && (a(!1), c(!1))
                    };
                    return document.addEventListener("click", e), () => {
                        document.removeEventListener("click", e)
                    }
                }, []);
                let w = e => e.split(" ").length,
                    v = (0, h.useCallback)((e, t, i) => {
                        let o = e[i - 1];
                        if (o) return o.level < t.level ? o : v(e, t, i - 1)
                    }, []),
                    y = (0, h.useMemo)(() => t.reduce((e, t, i) => {
                        let o = v(e, t, i);
                        return e.push({ ...t,
                            order: o ? o.order + 1 : 1
                        }), e
                    }, []), [v, t]),
                    b = () => {
                        d && c(!1), a(!r)
                    },
                    x = () => {
                        r && a(!1), c(!d)
                    },
                    T = eo.Ec.filter(e => {
                        var t;
                        return null === (t = e.supportedFeatures) || void 0 === t ? void 0 : t.some(e => p.includes(e))
                    });
                return (0, o.jsxs)("div", {
                    className: el().MobileMainContainer,
                    ref: g,
                    children: [(0, o.jsx)("div", {
                        className: el().DropDownContainer,
                        children: (0, o.jsxs)("div", {
                            className: (0, s.W)(el().selectContainer, el().navContainer),
                            children: [(0, o.jsxs)("div", {
                                className: el().TOCContainer,
                                onClick: () => b(),
                                onKeyDown: () => b(),
                                role: "button",
                                tabIndex: 0,
                                children: [(0, o.jsx)("span", {
                                    className: el().selectedItem,
                                    children: "Table of Contents"
                                }), (0, o.jsx)("span", {
                                    className: r ? (0, s.W)(el().arrow, el().arrowUp) : el().arrow,
                                    children: (0, o.jsx)(et._, {
                                        size: 16
                                    })
                                })]
                            }), T.length > 0 && (0, o.jsx)("div", {
                                className: el().tabletFrameworkContainer,
                                onClick: () => x(),
                                onKeyDown: () => x(),
                                role: "button",
                                tabIndex: 0,
                                children: (0, o.jsx)(ea._, {
                                    selectorOpened: d
                                })
                            })]
                        })
                    }), (0, o.jsx)("div", {
                        className: r ? (0, s.W)(el().popoverContainer, el().showPopover) : el().popoverContainer,
                        children: (0, o.jsx)("ul", {
                            className: u ? el().tocScrollbar : "",
                            children: y.length ? y.map(e => {
                                let {
                                    name: t,
                                    href: i,
                                    order: r
                                } = e;
                                return (0, o.jsx)("li", {
                                    className: (0, s.W)(el().tocItem, m ? el().faq : "", el()[`level-${r}`], n === i.slice(1) ? el().active : ""),
                                    children: (0, o.jsx)(P.r, {
                                        href: i.replaceAll("`", ""),
                                        onClick: () => a(!1),
                                        children: w(t) > 10 ? eh(t, 30) : t
                                    })
                                }, t)
                            }) : null
                        })
                    }), (0, o.jsx)("div", {
                        className: d ? (0, s.W)(el().popoverContainer, el().showPopover, el().tabletView) : el().popoverContainer,
                        children: (0, o.jsx)(er.Y, {
                            handleIndexClick: () => x(),
                            pathname: p
                        })
                    })]
                })
            }
            var em = i(758583),
                eg = i.n(em);

            function ef(e) {
                let {
                    children: t,
                    description: i
                } = e;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(B.Z, {
                        description: i,
                        noAnchor: !0,
                        offsetTop: !0,
                        children: (0, o.jsx)(m.x, {
                            as: "h1",
                            size: 40,
                            children: t
                        })
                    }), (0, o.jsx)(r(), {
                        id: "6f7af5a560624c3c",
                        children: "h1{margin:0}"
                    })]
                })
            }
            ef.propTypes = {
                children: c().oneOfType([c().arrayOf(c().node), c().node])
            };
            let ew = [{
                path: "/docs/storage",
                sectionTitle: "Storage",
                pageTitle: "Vercel Storage Overview"
            }, {
                path: "/docs/frameworks",
                sectionTitle: "Frameworks",
                pageTitle: "Supported Frameworks on Vercel"
            }, {
                path: "/docs/security/secure-compute",
                sectionTitle: "Secure Compute",
                pageTitle: "Vercel Secure Compute Overview"
            }];

            function ev(e) {
                let {
                    children: t,
                    isBeta: i
                } = e;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(B.Z, {
                        isBeta: i,
                        offsetTop: !0,
                        children: (0, o.jsx)(m.x, {
                            as: "h2",
                            size: 32,
                            children: t
                        })
                    }), (0, o.jsx)(r(), {
                        id: "37baaba1db88ca52",
                        children: "h2{margin:40px 0 0 0}"
                    })]
                })
            }

            function ey(e) {
                let {
                    children: t,
                    isPro: i,
                    isEnt: n
                } = e;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(B.Z, {
                        isEnt: n,
                        isPro: i,
                        offsetTop: !0,
                        children: (0, o.jsx)(m.x, {
                            as: "h3",
                            size: 24,
                            children: t
                        })
                    }), (0, o.jsx)(r(), {
                        id: "faad49b8d0839f46",
                        children: "h3{margin:40px 0 0 0}"
                    })]
                })
            }

            function eb(e) {
                let {
                    children: t
                } = e;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(B.Z, {
                        children: (0, o.jsx)(m.x, {
                            as: "h4",
                            size: 20,
                            children: t
                        })
                    }), (0, o.jsx)(r(), {
                        id: "5dc32ec1b190d4cd",
                        children: "h4{margin:40px 0 0 0}"
                    })]
                })
            }
            ev.propTypes = {
                children: c().oneOfType([c().arrayOf(c().node), c().node]),
                isBeta: c().bool
            }, ey.propTypes = {
                children: c().oneOfType([c().arrayOf(c().node), c().node]),
                isEnt: c().bool,
                isPro: c().bool
            }, eb.propTypes = {
                children: c().oneOfType([c().arrayOf(c().node), c().node])
            };
            let ex = { ...$.Z,
                    h2: ev,
                    h3: ey,
                    h4: eb
                },
                eT = `The support articles and documentation for how to use ${G.sG}.`;

            function eE(e) {
                let {
                    meta: t = {
                        title: `${G.sG} Documentation`,
                        description: eT,
                        noIndex: !1
                    },
                    getStarted: i,
                    children: n,
                    includeDescription: s,
                    showFrameworkSwitcher: d,
                    showLangSwitcher: c,
                    showErrorLink: p = !1,
                    isDocsHomepage: m = !1,
                    isContentOnly: E = !1,
                    showBackground: P = !0
                } = e, _ = (0, l.useRouter)().pathname, k = (0, T.TE)(_, b.J), j = Object.keys(x.v), L = i ? Y : "" !== k.currentItem.key && void 0 !== x.v[k.currentItem.key] ? x.v[k.currentItem.key].posts : x.v[j[0]].posts, [Z, N] = (0, h.useState)(!1), {
                    setData: V
                } = (0, h.useContext)(H.Z);

                function S() {
                    let e = (0, u.Dq)(n);
                    return (0, J.H)(e)
                }(function(e) {
                    let {
                        data: t,
                        meta: i
                    } = e, o = (0, l.useRouter)().pathname;
                    (0, h.useEffect)(() => {
                        let e = function(e) {
                            let {
                                data: t,
                                path: i,
                                meta: o
                            } = e, n = function e(t, i) {
                                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                if (t)
                                    for (let r = 0; r < t.length; r++) {
                                        var n;
                                        let a = t[r];
                                        if ((null === (n = a.href) || void 0 === n ? void 0 : n.replace(/\/$/, "")) === i.replace(/\/$/, "")) return {
                                            post: a,
                                            parent: o
                                        };
                                        let s = e(a.posts, i, a);
                                        if (s) return s
                                    }
                                return null
                            }(t, i);
                            if (!(null == n ? void 0 : n.post)) return null;
                            let r = n.post.name,
                                a = n.parent ? n.parent.name : o.title;
                            return {
                                path: i,
                                sectionTitle: r,
                                pageTitle: a
                            }
                        }({
                            data: t,
                            path: o,
                            meta: i
                        });
                        if (!e) return;
                        let n = (0, v.ej)("docs-recents"),
                            r = n ? JSON.parse(n) : [];
                        r = (r = [e, ...r = r.filter(e => e.path !== o)]).slice(0, 6), (0, v.d8)("docs-recents", JSON.stringify(r))
                    }, [t, i, o])
                })({
                    data: L,
                    meta: t
                }), (0, h.useEffect)(() => {
                    V(L)
                }, []);
                let A = () => {
                    Z && N(!1)
                };
                return (0, o.jsxs)(a.MDXProvider, {
                    components: ex,
                    children: [(0, o.jsx)(w.Z, {
                        description: t.description,
                        image: t.image,
                        noIndex: t.noIndex,
                        title: t.title
                    }), (0, o.jsxs)(y.Z, {
                        background: P,
                        toc: !E,
                        children: [E ? null : (0, o.jsx)(I.Z, {
                            active: Z,
                            hasSecondaryNav: k.navItems.length > 0,
                            isDocsHomepage: m,
                            children: (0, o.jsx)(C, {
                                handleIndexClick: A,
                                path: _
                            })
                        }), (0, o.jsxs)(f.Z, {
                            center: E,
                            fullwidth: E,
                            homepage: m,
                            toc: !E,
                            children: [!m && !E && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(U, {
                                    handleIndexClick: A,
                                    path: _,
                                    timeToRead: function() {
                                        let e = (0, u.Dq)(n),
                                            t = e.split(/\s+/g),
                                            i = t.length,
                                            o = t.reduce((e, t) => e + function(e) {
                                                var t;
                                                let i = e.toLowerCase().replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "");
                                                if (e.length <= 3) return 1;
                                                let o = (null === (t = i.match(/[aeiouy]{1,2}/g)) || void 0 === t ? void 0 : t.length) || 1;
                                                return o
                                            }(t), 0),
                                            r = e.split(/[.,;:!?]\s/g).length - 1;
                                        return Math.ceil((i / (240 * (1 + (o / i - 1.5) * .1)) * 60 + .2 * r) / 60)
                                    }()
                                }), (0, o.jsx)("div", {
                                    className: "jsx-8bdf2372d12f40be heading content-heading",
                                    children: (0, o.jsx)(ef, {
                                        description: s ? t.description : null,
                                        children: t.isCode ? (0, o.jsx)("span", {
                                            className: "jsx-8bdf2372d12f40be mono",
                                            children: t.title
                                        }) : t.title
                                    })
                                })]
                            }), !m && !E && "/docs/speed-insights/api" !== _ && (0, o.jsx)(ep, {
                                headings: S(),
                                showFrameworkSwitcher: d,
                                showLangSwitcher: c
                            }), (0, o.jsx)("div", {
                                className: "jsx-8bdf2372d12f40be content",
                                children: n
                            }), !!p && (0, o.jsx)(K.ko, {
                                description: "Learn how to handle errors that you may encounter when interacting with Vercel and view a list of all errors.",
                                href: "/docs/errors/",
                                title: "Go to the Errors Section"
                            }), !m && !E && !p && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(ee.O, {}), (0, o.jsx)(z.Z, {}), k.currentItem && k.currentItem.items && k.currentItem.items.length > 0 ? (0, o.jsx)(D, {
                                    handleIndexClick: A,
                                    path: _
                                }) : null]
                            }), (0, o.jsx)("div", {
                                style: {
                                    marginBottom: 24,
                                    marginTop: 48
                                },
                                className: "jsx-8bdf2372d12f40be",
                                children: (0, o.jsx)(g.x, {
                                    label: "vercel",
                                    type: "inline"
                                })
                            })]
                        }), !!m && (0, o.jsx)(e_, {
                            data: L,
                            meta: t
                        }), !m && "/docs/speed-insights/api" !== _ && !E && (0, o.jsx)(eu, {
                            hasSecondaryNav: k.navItems.length > 0,
                            headings: S()
                        })]
                    }), (0, o.jsx)(W.$_, {
                        isMarketingPage: !0,
                        light: !0
                    }), (0, o.jsx)(Q.R, {}), (0, o.jsx)(r(), {
                        id: "8bdf2372d12f40be",
                        children: "ul.jsx-8bdf2372d12f40be{list-style:none;margin:0;padding:0}.mono.jsx-8bdf2372d12f40be{font-family:var(--font-mono)}.category-wrapper.jsx-8bdf2372d12f40be{padding:40px 0}.switchers.jsx-8bdf2372d12f40be{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-bottom:30px}.category-wrapper.jsx-8bdf2372d12f40be:not(:last-child){border-bottom:1px solid var(--accents-2)}.platform-select-title.jsx-8bdf2372d12f40be{font-size:var(--font-size-primary);line-height:var(--line-height-primary);font-weight:400;margin-bottom:16px;margin-top:32px}.heading.jsx-8bdf2372d12f40be{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media(min-width:320px)and (max-width:480px){.heading.jsx-8bdf2372d12f40be{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}"
                    })]
                })
            }
            eE.propTypes = {
                children: c().oneOfType([c().arrayOf(c().node), c().node]),
                meta: c().object,
                getStarted: c().bool
            };
            var eP = eE;

            function e_() {
                let [e, t] = (0, h.useState)(null);
                return (0, h.useEffect)(() => {
                    let e = (0, v.ej)("docs-recents"),
                        i = e ? JSON.parse(e) : [];
                    t(i)
                }, []), (0, o.jsx)("aside", {
                    className: (0, s.W)(eg().sidebar, {
                        [eg().sidebarVisible]: null !== e
                    }),
                    children: null !== e && (0, o.jsx)(o.Fragment, {
                        children: e.length > 0 ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsxs)("div", {
                                className: eg().sidebarHeader,
                                children: [(0, o.jsx)("p", {
                                    className: eg().sidebarTitle,
                                    children: "Recents"
                                }), (0, o.jsx)(p.z, {
                                    className: eg().sidebarButton,
                                    onClick: function() {
                                        (0, v.d8)("docs-recents", JSON.stringify([])), t([])
                                    },
                                    type: "tertiary",
                                    children: "Clear"
                                })]
                            }), (0, o.jsx)("nav", {
                                className: eg().sidebarArticles,
                                children: e.map(e => (0, o.jsx)(X.r, {
                                    className: eg().sidebarArticle,
                                    href: e.path,
                                    children: (0, o.jsxs)("div", {
                                        className: eg().sidebarArticleText,
                                        children: [(0, o.jsx)("span", {
                                            className: eg().sidebarArticleCategory,
                                            children: e.sectionTitle
                                        }), (0, o.jsx)("span", {
                                            className: eg().sidebarArticleTitle,
                                            children: e.pageTitle
                                        })]
                                    })
                                }, e.path))
                            })]
                        }) : (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("div", {
                                className: eg().sidebarHeader,
                                children: (0, o.jsx)("p", {
                                    className: eg().sidebarTitle,
                                    children: "Popular articles"
                                })
                            }), (0, o.jsx)("nav", {
                                className: eg().sidebarArticles,
                                children: ew.map(e => (0, o.jsx)(X.r, {
                                    className: eg().sidebarArticle,
                                    href: e.path,
                                    children: (0, o.jsxs)("div", {
                                        className: eg().sidebarArticleText,
                                        children: [(0, o.jsx)("span", {
                                            className: eg().sidebarArticleCategory,
                                            children: e.sectionTitle
                                        }), (0, o.jsx)("span", {
                                            className: eg().sidebarArticleTitle,
                                            children: e.pageTitle
                                        })]
                                    })
                                }, e.path))
                            })]
                        })
                    })
                })
            }
        },
        274606: function(e, t, i) {
            "use strict";
            i.d(t, {
                O: function() {
                    return d
                }
            });
            var o = i(397458),
                n = i(882366),
                r = i(426326),
                a = JSON.parse('[{"title":"@vercel/edge Reference","description":"Learn about the @vercel/edge package and its available helpers for use in Edge Functions and Edge Middleware.","lastEdited":"2023-03-02T08:15:34.000Z","filePath":"/docs/functions/edge-functions/vercel-edge-package"},{"title":"@vercel/og Reference","description":"This reference provides information on how the @vercel/og package works on Vercel.","lastEdited":"2023-03-03T15:37:37.000Z","filePath":"/docs/functions/edge-functions/og-image-generation/og-image-api"},{"title":"Accessing Build Logs","description":"Learn how to use Vercel\'s build logs to monitor the progress of building or running your deployment, and check for possible errors or build failures.","lastEdited":"2023-03-01T18:19:21.000Z","filePath":"/docs/deployments/logs"},{"title":"Accessing Deployments via Generated URLs","description":"Whenever a new deployment is created, Vercel will automatically generate a unique URL which you can use to access that particular deployment.","lastEdited":"2023-02-23T16:14:47.000Z","filePath":"/docs/deployments/generated-urls"},{"title":"Adapters","description":"In this module, we will learn how to adapt our app and deploy it to Vercel.","lastEdited":"2022-12-13T21:17:15.000Z","filePath":"/docs/beginner-sveltekit/adapters"},{"title":"Adding & Configuring a Custom Domain","description":"Learn how to add a custom domain to your Vercel project, verify it, and correctly set the DNS or Nameserver values.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/projects/domains/add-a-domain"},{"title":"Advance Analytics Config with @vercel/analytics","description":"With the @vercel/analytics npm package, you are able to instrument your application to send analytics data to Vercel.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/analytics/audiences/package"},{"title":"Advanced Deployment Protection Features","description":"Learn about Advanced Deployment Protection, which includes Password Protection, Protection Bypass for Automation, and Private Production Deployments.","lastEdited":"2023-03-06T18:41:36.000Z","filePath":"/docs/security/advanced-deployment-protection"},{"title":"An Unexpected Error Occurred","description":"An error occurred in the platform infrastructure layer.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/INTERNAL_UNEXPECTED_ERROR"},{"title":"Anatomy of the Checks API","description":"Learn how to create your own Checks with Vercel Integrations. You can build your own Integration in order to register any arbitrary Check for your deployments.","lastEdited":"2023-02-28T01:58:46.000Z","filePath":"/docs/integrations/checks-overview/creating-checks"},{"title":"Animations and Transitions","description":"In this module, we will learn how to use Svelte\'s built-in animations and transitions to take our app to the next level.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/beginner-sveltekit/animations-and-transitions"},{"title":"Assigning a Custom Domain","description":"Learn how to assign a custom Domain to your Project, which people can then use to access your Production Deployment.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/concepts/get-started/assign-domain"},{"title":"Assigning a Domain to a Git Branch","description":"Learn how to assign a domain to a different Git branch with this guide.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/projects/domains/assign-domain-to-a-git-branch"},{"title":"Astro on Vercel","description":"Learn how to use Vercel\'s features with Astro","lastEdited":"2023-03-02T08:15:34.000Z","filePath":"/docs/frameworks/astro"},{"title":"Audiences in Vercel Analytics","description":"With Audiences, you can get detailed insights into your website\'s visitors with new metrics like top pages, top referrers, and demographics.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/analytics/audiences/index"},{"title":"Audit Logs","description":"Learn how to track and analyze your team members\' activities.","lastEdited":"2023-02-17T14:34:04.000Z","filePath":"/docs/observability/audit-log"},{"title":"Body Not A String From Serverless Function","description":"The Serverless Function did not respond with a string.","lastEdited":"2022-12-08T22:47:46.000Z","filePath":"/docs/error/application/BODY_NOT_A_STRING_FROM_FUNCTION"},{"title":"Build Features for Customizing Deployments","description":"Learn how to customize your deployments using Vercel\'s build features.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/deployments/build-features"},{"title":"Build image","description":"","filePath":"/docs/deployments/build-image"},{"title":"Building Integrations with Vercel API","description":"Learn how to use the Vercel API to build your Integrations and work with Redirect URLs.","lastEdited":"2023-02-28T01:58:46.000Z","filePath":"/docs/integrations/vercel-api-overview/index"},{"title":"Builds","description":"Understand how the build step works when creating a Vercel Deployment.","filePath":"/docs/deployments/builds/index"},{"title":"Caching Edge Function Responses","description":"Learn how Edge Function responses are cached with Vercel and how you can define the cache behavior with this guide.","lastEdited":"2023-02-13T17:45:16.000Z","filePath":"/docs/functions/edge-functions/edge-caching"},{"title":"Caching Serverless Function Responses","description":"Learn how Serverless Function responses are cached with Vercel and how you can define the cache behavior.","lastEdited":"2023-02-13T17:45:16.000Z","filePath":"/docs/functions/serverless-functions/edge-caching"},{"title":"Checks API Reference","description":"The Vercel Checks API let you create tests and assertions that run after each deployment has been built, and are powered by Vercel Integrations.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/integrations/checks-overview/checks-api"},{"title":"Collaborating with Others","description":"If you\'re working on a project that requires collaboration with others, Vercel offers Teams. Learn how to create and add members to a Team with this guide.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/concepts/get-started/collaborate"},{"title":"Comments Overview","description":"Comments allow Teams and invited participants to give direct feedback on Preview Deployments. Learn more about Comments in this overview.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/deployments/comments/index"},{"title":"Compute on Vercel","description":"At Vercel, we use compute to describe actions such as (but not limited to) building and rendering. Learn more about compute on Vercel with this guide.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/concepts/get-started/compute"},{"title":"Conclusion","description":"This concludes the course! Thanks for learning!","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/beginner-sveltekit/conclusion"},{"title":"Conditionals and Loops","description":"In this module, we will go over how to express logic in our HTML using conditionals and loops.","lastEdited":"2023-01-12T17:52:26.000Z","filePath":"/docs/beginner-sveltekit/conditionals-and-loops"},{"title":"Configuring a Build","description":"Vercel automatically configures the build settings for many front-end frameworks, but you can also customize the build according to your requirements.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/deployments/configure-a-build"},{"title":"Configuring Projects with vercel.json","description":"Learn how to use vercel.json to configure and override the default behavior of Vercel from within your project. ","lastEdited":"2023-02-21T14:24:55.000Z","filePath":"/docs/projects/project-configuration/index"},{"title":"Configuring Team Security & Compliance Settings","description":"Learn how to view and configure your Enterprise team\'s security and compliance settings. ","lastEdited":"2023-02-28T08:27:47.000Z","filePath":"/docs/teams-and-accounts/security-and-compliance"},{"title":"Configuring Your Project","description":"Learn how to set and apply custom configuration to your Project during the creation process.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/concepts/get-started/customize"},{"title":"Context API","description":"In this module, we will learn how to pass data to deeply nested components using the Context API.","lastEdited":"2022-12-13T21:17:15.000Z","filePath":"/docs/beginner-sveltekit/context-api"},{"title":"Course Intro","description":"Welcome to the beginning of your SvelteKit journey! In this video you I will give you an overview of the course as well as explain why SvelteKit is something worth learning.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/beginner-sveltekit/index"},{"title":"Create React App on Vercel","description":"Learn how to use Vercel\'s features with Create React App","lastEdited":"2023-03-06T15:12:20.000Z","filePath":"/docs/frameworks/create-react-app"},{"title":"Creating & Deploying Your Project","description":"Once you have signed up for Vercel and connected your Git provider, you\'re ready to start creating a Project. Learn how to create and deploy a project here.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/concepts/get-started/deploy"},{"title":"Creating & Joining a Team","description":"Teams on Vercel allow you to collaborate with members on projects, and grant you access to additional resources. Learn how to create or join a team on Vercel.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/teams-and-accounts/create-or-join-a-team"},{"title":"Creating & Triggering Deploy Hooks","description":"Learn how to create and trigger deploy hooks to integrate Vercel deployments with other systems.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/deployments/deploy-hooks"},{"title":"Creating an Integration","description":"Learn how to create your own integration for internal or public use with Vercel.","lastEdited":"2023-03-02T13:46:39.000Z","filePath":"/docs/integrations/create-integration/index"},{"title":"Cron Jobs","description":"Learn how to schedule your Serverless and Edge Functions with Cron Jobs.","lastEdited":"2023-02-21T14:24:55.000Z","filePath":"/docs/cron-jobs/index"},{"title":"CSS","description":"In this module, we’re going to cover how to use CSS and SASS/SCSS in our Svelte Applications.","lastEdited":"2022-12-13T21:17:15.000Z","filePath":"/docs/beginner-sveltekit/css"},{"title":"Dashboard Overview","description":"Learn how to use the Vercel dashboard to view and manage all aspects of the Vercel platform, including your Projects and Deployments.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/dashboard-features/index"},{"title":"Data Binding and Event Forwarding","description":"In this module, we will learn how to pass data from a child component to the parent using data bindings and event handling.","lastEdited":"2022-12-13T21:17:15.000Z","filePath":"/docs/beginner-sveltekit/data-binding-and-event-handling"},{"title":"Deploying & Redirecting Domains","description":"Learn how to deploy your domains and set up domain redirects with this guide.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/projects/domains/deploying-and-redirecting"},{"title":"Deploying Bitbucket Projects with Vercel","description":"​Vercel for Bitbucket automatically deploys your Bitbucket projects with Vercel, providing Preview Deployment URLs, and automatic Custom Domain updates.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/deployments/git/vercel-for-bitbucket"},{"title":"Deploying Git Repositories with Vercel","description":"Vercel allows for automatic deployments on every branch push and merges onto the Production Branch of your GitHub, GitLab, and Bitbucket projects.","image":"undefined/docs/deployments/git/git-push.png","lastEdited":"2023-02-23T23:30:28.000Z","filePath":"/docs/deployments/git/index"},{"title":"Deploying GitHub Projects with Vercel","description":"​Vercel for GitHub automatically deploys your GitHub projects with Vercel, providing Preview Deployment URLs, and automatic Custom Domain updates.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/deployments/git/vercel-for-github"},{"title":"Deploying GitLab Projects with Vercel","description":"​Vercel for GitLab automatically deploys your GitLab projects with Vercel, providing Preview Deployment URLs, and automatic Custom Domain updates.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/deployments/git/vercel-for-gitlab"},{"title":"Deploying Nx to Vercel","description":"Nx is an extensible build system with support for monorepos, integrations, and Remote Caching on Vercel. Learn how to deploy Nx to Vercel with this guide.","lastEdited":"2023-02-06T14:47:39.000Z","filePath":"/docs/monorepos/nx"},{"title":"Deploying Projects from Vercel CLI","description":"Learn how to deploy your Vercel Projects from Vercel CLI using the vercel or vercel deploy commands.","lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/deploying-from-cli"},{"title":"Deploying to Vercel","description":"Learn how to create deployments on Vercel using Git, Vercel CLI, Deploy Hooks, and Vercel API.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/deployments/overview"},{"title":"Deploying Turborepo to Vercel","description":"Learn about Turborepo, a build system for monorepos that allows you to have faster incremental builds, content-aware hashing, and Remote Caching.","lastEdited":"2023-02-10T21:22:12.000Z","filePath":"/docs/monorepos/turborepo"},{"title":"Deployment Blocked","description":"The requested deployment was blocked.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/application/DEPLOYMENT_BLOCKED"},{"title":"Deployment Environments","description":"Environments are the solution for the deployment lifecycle on the Vercel platform. Learn about the production and preview environment types here.","lastEdited":"2023-02-08T14:52:59.000Z","filePath":"/docs/deployments/environments"},{"title":"Deployment Not Found","description":"The requested deployment was not found.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/DEPLOYMENT_NOT_FOUND"},{"title":"Deployment Not Ready","description":"The requested deployment is not ready and will be redirected.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/DEPLOYMENT_NOT_READY_REDIRECTING"},{"title":"Disabling Analytics","description":"How to disable Analytics from within the Vercel dashboard","lastEdited":"2023-01-31T12:12:45.000Z","filePath":"/docs/analytics/disable-analytics"},{"title":"Domains Overview","description":"Learn how domains and DNS work, and what options Vercel provides for managing your domains.","lastEdited":"2023-02-23T17:30:00.000Z","filePath":"/docs/projects/domains/index"},{"title":"Edge Config Limits","description":"Learn about the data size and request limits of Edge Configs based on account plans.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/edge-network/edge-config/edge-config-limits"},{"title":"Edge Config Overview","description":"An Edge Config is a global data store associated with your Vercel account. It enables you to read data at the edge without querying an external database.","lastEdited":"2023-03-06T18:41:36.000Z","filePath":"/docs/edge-network/edge-config/index"},{"title":"Edge Function Invocation Failed","description":"The requested Edge Function reached the request timeout threshold.","lastEdited":"2022-12-08T22:47:46.000Z","filePath":"/docs/error/application/EDGE_FUNCTION_INVOCATION_FAILED"},{"title":"Edge Function Invocation Timeout","description":"The requested Edge Function reached the request timeout threshold.","lastEdited":"2022-12-20T23:23:04.000Z","filePath":"/docs/error/application/EDGE_FUNCTION_INVOCATION_TIMEOUT"},{"title":"Edge Functions API Reference","description":"Learn about the Edge Runtime and available APIs when working with Edge Functions. Supported APIs include Network, Encoding, and Web Stream APIs.","lastEdited":"2023-03-02T08:15:34.000Z","filePath":"/docs/functions/edge-functions/edge-functions-api"},{"title":"Edge Functions Limitations","description":"Learn about the limitations and restrictions of using Edge Functions with Vercel with this reference.","lastEdited":"2023-02-13T17:30:48.000Z","filePath":"/docs/functions/edge-functions/limitations"},{"title":"Edge Functions Overview","description":"Vercel\'s Edge Functions enable you to deliver dynamic, personalized content with the lightweight Edge Runtime. Learn more about Edge Functions here.","lastEdited":"2023-02-24T17:58:05.000Z","filePath":"/docs/functions/edge-functions/index"},{"title":"Edge Middleware API Reference","description":"Learn about the Edge Runtime and available APIs when working with Edge Middleware. Supported APIs include Network, Encoding, and Web Stream APIs.","lastEdited":"2023-03-02T08:15:34.000Z","filePath":"/docs/functions/edge-middleware/middleware-api"},{"title":"Edge Middleware Limitations","description":"Learn about the limitations of using Edge Middleware with Vercel.","lastEdited":"2023-03-02T08:15:34.000Z","filePath":"/docs/functions/edge-middleware/limitations"},{"title":"Edge Middleware Overview","description":"Learn how you can use Edge Middleware, code that executes before a request is processed on a site, to provide speed and personalization to your users.","lastEdited":"2023-03-02T08:15:34.000Z","filePath":"/docs/functions/edge-middleware/index"},{"title":"Edge Network Frequently Asked Questions (FAQ)","description":"A list of frequently asked questions and answers related to the Vercel Edge Network.","lastEdited":"2023-03-02T02:26:48.000Z","filePath":"/docs/edge-network/frequently-asked-questions"},{"title":"Edge Network Overview","description":"The Vercel Edge Network sits in-between the internet and your Vercel deployments and acts as a CDN with the ability to execute functions at the edge.","lastEdited":"2023-02-28T01:58:46.000Z","filePath":"/docs/edge-network/overview"},{"title":"Edge Runtime","description":"Learn about the Edge Runtime, the environment in which Edge Functions run.","lastEdited":"2023-03-02T08:15:34.000Z","filePath":"/docs/functions/edge-functions/edge-runtime"},{"title":"Element Directives","description":"In this module, we will go over a couple different element directives and events we have at our disposal with Svelte, and how to use them.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/beginner-sveltekit/element-directives"},{"title":"Endpoints","description":"In this module, we will learn how to create server-side routes using SvelteKit endpoints.","lastEdited":"2022-12-13T21:17:15.000Z","filePath":"/docs/beginner-sveltekit/endpoints"},{"title":"Environment Variables","description":"Learn how to use Vercel Environment Variables, which are key-value pairs configured outside your source code that change depending on the environment.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/projects/environment-variables.js"},{"title":"Exclude Files from Deployments with .vercelignore","description":"The .vercelignore file allows you to define which files and directories should be ignored when uploading your project to Vercel.","lastEdited":"2023-01-27T15:20:45.000Z","filePath":"/docs/deployments/vercel-ignore"},{"title":"Failed To Get Deployment","description":"The platform infrastructure failed to fetch the requested deployment.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/INTERNAL_DEPLOYMENT_FETCH_FAILED"},{"title":"Failed to Invoke Serverless Function","description":"An error occurred in the platform infrastructure layer.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/INTERNAL_FUNCTION_INVOCATION_FAILED"},{"title":"Failed to Resolve Host","description":"An error occurred in the platform infrastructure layer.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/INTERNAL_RESOLVE_HOST_FAILED"},{"title":"Fair Use Policy","description":"All subscription plans include usage that is subject to Vercel\'s Fair Use policy. Learn more about this policy here.","lastEdited":"2023-02-07T20:47:32.000Z","filePath":"/docs/limits/fair-use-policy"},{"title":"Fallback Body Too Large","description":"The prerender fallback file is too big for the cache.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/application/FALLBACK_BODY_TOO_LARGE"},{"title":"Filtering Audiences Analytics","description":"Learn how filters allow you to explore insights about your website\'s visitors.","lastEdited":"2023-01-25T17:25:19.000Z","filePath":"/docs/analytics/audiences/filtering"},{"title":"Free Trial Limits","description":"This page describes how to sign up for a free 14-day trial of Vercel\'s Pro plan, and what is included in the trial plan.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/concepts/payments-and-billing/free-trials"},{"title":"Function Payload Too Large","description":"The request\'s body to the function is too large.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/application/FUNCTION_PAYLOAD_TOO_LARGE"},{"title":"Function Rate Limit","description":"The application received too many requests and was rate limited.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/application/INTERNAL_FUNCTION_RATE_LIMIT"},{"title":"FUNCTION_INVOCATION_TIMEOUT Error","description":"FUNCTION_INVOCATION_TIMEOUT is an application error in which the request for a Serverless Function reached the timeout threshold.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/error/application/FUNCTION_INVOCATION_TIMEOUT"},{"title":"Gatsby on Vercel","description":"Learn how to use Vercel\'s features with Gatsby.","lastEdited":"2023-03-02T08:15:34.000Z","filePath":"/docs/frameworks/gatsby"},{"title":"Getting Started","description":"In this video you will learn how to create a new SvelteKit project. We will explore the SvelteKit demo app to get familiar with the codebase.","lastEdited":"2022-12-13T21:17:15.000Z","filePath":"/docs/beginner-sveltekit/getting-started"},{"title":"Getting Started with Edge Config","description":"You can get started with reading data from Edge Config within minutes by following this quickstart guide.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/edge-network/edge-config/get-started"},{"title":"Getting Started with Vercel","description":"This step-by-step tutorial will help you get started with Vercel, an end-to-end platform for developers that allows you to create and deploy your web application.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/concepts/get-started/index"},{"title":"Git Configuration","description":"Learn how to configure Git for your project through the vercel.json file.","lastEdited":"2023-03-07T11:51:29.000Z","filePath":"/docs/projects/project-configuration/git-configuration/index"},{"title":"Global Configuration","description":"Learn how to configure Vercel CLI under your system user.","lastEdited":"2023-02-01T08:47:07.000Z","filePath":"/docs/projects/project-configuration/global-configuration/index"},{"title":"Headers Included with Deployments","description":"This reference covers the list of request, response, cache-control, and custom response headers included with deployments with Vercel.","lastEdited":"2023-02-23T16:14:47.000Z","filePath":"/docs/edge-network/headers"},{"title":"How Caching Works for the Edge Network","description":"The Edge Network caches your content at the edge in order to serve data to your users as fast as possible. Learn how Vercel caches works in this guide.","lastEdited":"2023-02-13T17:45:16.000Z","filePath":"/docs/edge-network/caching"},{"title":"How Comments Work on Preview Deployments","description":"Learn when and where Comments are available, and how to enable and disable Comments at the account, project, and session or interface levels.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/deployments/comments/how-comments-work"},{"title":"How Compression Works for the Edge Network","description":"To save bandwidth and make your application or site faster, the Vercel Edge Network implements two compression algorithms: gzip and brotli.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/edge-network/compression"},{"title":"How Encryption Works for the Edge Network","description":"Out of the box, every Deployment on Vercel is served over an HTTPS connection. Learn more about how encryption works for the Edge Network here.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/security/encryption"},{"title":"Image Optimization Overview","description":"Vercel Image Optimization automatically serves visitors with different images based on their screen size and improves loading performance with global caching.","lastEdited":"2023-03-02T12:00:53.000Z","filePath":"/docs/image-optimization/index"},{"title":"Incremental Static Regeneration (ISR) Overview","description":"Learn how Incremental Static Regeneration (ISR) works on Vercel and how it provides better performance, increased security, and faster builds.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/incremental-static-regeneration/overview"},{"title":"Infinite Loop Detected","description":"An infinite loop was detected within the application.","lastEdited":"2023-02-01T08:47:07.000Z","filePath":"/docs/error/application/INFINITE_LOOP_DETECTED"},{"title":"Installing Integrations","description":"Learn how to find and install Integrations for your Vercel Project through the Marketplace, an external third-party app, or a Deploy Button.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/integrations/using-an-integration/install-integration"},{"title":"Integrations for Comments","description":"Learn how Comments integrates with Git providers like GitHub, GitLab, and BitBucket, as well as the Vercel Slack Beta app.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/deployments/comments/integrations"},{"title":"Internal Rewrite Resolve Host Failed","description":"An error occurred in the platform infrastructure layer.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/INTERNAL_REWRITE_RESOLVE_HOST_FAILED"},{"title":"Introduction to Vercel","description":"Vercel is a platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.","lastEdited":"2023-01-31T17:09:36.000Z","filePath":"/docs/index"},{"title":"Invalid Request Method","description":"The application errored when recieving a request other than `GET` or `HEAD`.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/application/INVALID_REQUEST_METHOD"},{"title":"Invalid Serverless Function Accounts","description":"An error occurred in the platform infrastructure layer.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/INTERNAL_INVALID_FUNCTION_ACCOUNTS"},{"title":"Invalid Serverless Function Region","description":"An error occurred in the platform infrastructure layer.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/INTERNAL_INVALID_FUNCTION_REGION"},{"title":"Layouts","description":"In this module, we will learn how to use the SvelteKit layout component.","lastEdited":"2022-12-13T21:17:15.000Z","filePath":"/docs/beginner-sveltekit/layouts"},{"title":"Limits & Limitations","description":"This reference covers a list of all the limits and limitations that apply on Vercel.","lastEdited":"2023-03-06T15:12:20.000Z","filePath":"/docs/limits/overview"},{"title":"Limits & Pricing for Image Optimization","description":"This page outlines information on the limits that are applicable to using Image Optimization, and the costs they can incur.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/image-optimization/limits-and-pricing"},{"title":"Limits and Pricing for Monitoring","description":"Learn about our limits and pricing when using Monitoring. Different limitations are applied depending on your plan.","lastEdited":"2023-03-06T15:12:20.000Z","filePath":"/docs/observability/monitoring/limits-and-pricing"},{"title":"Limits and Pricing for Web Vitals","description":"Learn about our limits and pricing when using Web Vitals with Vercel Analytics. Different limitations are applied depending on your plan.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/analytics/limits-and-pricing"},{"title":"Linking Projects with Vercel CLI","description":"Learn how to link existing Vercel Projects with Vercel CLI.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/cli/project-linking"},{"title":"Loading Data","description":"In this module, we will learn how to fetch and manipulate data before rendering the page using the load function.","lastEdited":"2022-12-13T21:17:15.000Z","filePath":"/docs/beginner-sveltekit/loading"},{"title":"Log Drains Reference","description":"Learn about Log Drains types and sources.","lastEdited":"2023-02-23T16:14:47.000Z","filePath":"/docs/observability/log-drains-overview/log-drains-reference"},{"title":"Managing Comments on Preview Deployments","description":"Learn how to manage Comments on your Preview Deployments from Team members and invited collaborators.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/deployments/comments/managing-comments"},{"title":"Managing Concurrent Builds","description":"Concurrent Builds allow you to build multiple deployments with Vercel simultaneously. Learn how to manage Concurrent Builds on Vercel with this guide.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/deployments/concurrent-builds"},{"title":"Managing Deployments","description":"Learn how to manage your current and previously deployed projects to Vercel via the dashboard. You can redeploy at any time and even delete a deployment.","lastEdited":"2023-02-17T10:16:03.000Z","filePath":"/docs/deployments/managing-deployments"},{"title":"Managing DNS Records","description":"Learn how to add, verify, and remove DNS records for your domains on Vercel with this guide.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/projects/domains/managing-dns-records"},{"title":"Managing Edge Configs with the Dashboard","description":"Learn how to create, view and update your Edge Configs and the data inside them in your Vercel Dashboard at the personal account, team, and project levels.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/edge-network/edge-config/edge-config-dashboard"},{"title":"Managing Edge Configs with Vercel API","description":"Learn how to use the Vercel API to create and update Edge Configs. You can also read data stored in Edge Configs with the Vercel API.","filePath":"/docs/edge-network/edge-config/vercel-api"},{"title":"Managing Image Optimization Usage & Costs","description":"Learn how to measure and manage Image Optimization usage with this guide to avoid any unexpected costs.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/image-optimization/managing-image-optimization-costs"},{"title":"Managing Integrations After Installation","description":"Learn how to manage your Vercel Integrations through your Vercel dashboard after installing them.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/integrations/using-an-integration/manage-integration"},{"title":"Managing Nameservers","description":"Learn how to add custom nameservers and restore original nameservers for your domains on Vercel with this guide.","lastEdited":"2023-02-09T16:21:33.000Z","filePath":"/docs/projects/domains/managing-nameservers"},{"title":"Managing Notifications","description":"Learn how to use Notifications to view and manage important alerts about your deployments, domains, integrations, account, and usage.","lastEdited":"2023-02-08T19:15:58.000Z","filePath":"/docs/dashboard-features/notifications"},{"title":"Managing Permissions for Integrations | Vercel","description":"Integration permissions restrict the API surface the integration is allowed to access. Learn more about managing permissions for integrations here.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/integrations/using-an-integration/permissions"},{"title":"Managing Team Members & Roles","description":"Learn how to manage team members on Vercel, and how to assign roles to each member via role-based access control (RBAC).","lastEdited":"2023-03-06T18:41:36.000Z","filePath":"/docs/teams-and-accounts/team-members-and-roles"},{"title":"Missing Response From Cache","description":"An error occurred in the platform infrastructure layer.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/INTERNAL_MISSING_RESPONSE_FROM_CACHE"},{"title":"Monitoring","description":"Query and visualize your Vercel usage, traffic, and more with Monitoring.","lastEdited":"2023-03-07T02:35:34.000Z","filePath":"/docs/observability/monitoring/overview"},{"title":"Monitoring Quickstart","description":"In this quickstart guide, you\'ll discover how to create and execute a query to visualize the most popular posts on your website.","lastEdited":"2023-03-06T15:12:20.000Z","filePath":"/docs/observability/monitoring/quickstart"},{"title":"Monitoring Reference","description":"This reference covers the clauses, fields, and variables used to create a Monitoring query.","lastEdited":"2023-03-06T15:12:20.000Z","filePath":"/docs/observability/monitoring/monitoring-reference"},{"title":"Monitoring Resource Usage","description":"Learn how to read the Usage tab on your dashboard to gain insight into how well your projects are performing, and take necessary actions for improvements.","lastEdited":"2023-02-13T17:30:48.000Z","filePath":"/docs/limits/usage"},{"title":"Monitoring Your Project","description":"Ensure your application stays fast and reliable, with any amount of traffic. Learn how to monitor your Project using Logs, Analytics, Checks, and Monitoring.","lastEdited":"2023-03-06T18:19:41.000Z","filePath":"/docs/concepts/get-started/monitor"},{"title":"Navigating the Dashboard","description":"Learn how to select a scope, change the Project view, use search, or create a new project, all within the Vercel dashboard.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/dashboard-features/overview"},{"title":"Next.js on Vercel","description":"Vercel is the native Next.js platform, designed to enhance the Next.js experience.","lastEdited":"2023-03-02T16:02:10.000Z","filePath":"/docs/frameworks/nextjs"},{"title":"No Response from Serverless Function","description":"The requested Serverless Function failed to respond with a status code.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/application/NO_RESPONSE_FROM_FUNCTION"},{"title":"Nuxt on Vercel","description":"Learn how to use Vercel\'s features with Nuxt.","lastEdited":"2023-03-02T16:02:10.000Z","filePath":"/docs/frameworks/nuxt"},{"title":"Observability","description":"Use Vercel\'s Observability feature-set to track performance, troubleshoot production issues, and inform decisions.","lastEdited":"2023-03-06T19:32:56.000Z","filePath":"/docs/observability/index"},{"title":"Open Graph (OG) Image Examples","description":"This page features open graph image examples. You can deploy these examples on your own Vercel account by using the Deploy button in this guide.","lastEdited":"2023-02-24T17:58:05.000Z","filePath":"/docs/functions/edge-functions/og-image-generation/og-image-examples"},{"title":"Open Graph (OG) Image Generation","description":"Learn how to optimize social media image generation via the Open Graph Protocol and @vercel/og library.","lastEdited":"2023-03-03T15:37:37.000Z","filePath":"/docs/functions/edge-functions/og-image-generation/index"},{"title":"Optimizing Images with Next.js & Nuxt.js","description":"The following examples show how you can leverage Vercel Image Optimization with the Next.js and Nuxt.js image components.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/image-optimization/examples"},{"title":"Payments & Billing for Enterprise Plan","description":"This page covers frequently asked questions around payments, invoices, and billing on the Enterprise plan.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/concepts/payments-and-billing/enterprise"},{"title":"Payments & Billing for Pro Plan","description":"This page covers frequently asked questions around payments, invoices, and billing on the Pro plan.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/concepts/payments-and-billing/pro"},{"title":"Payments & Billing Overview","description":"This page covers general information about payments, invoicing, and billing for both Pro and Enterprise plans on Vercel.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/concepts/payments-and-billing/overview"},{"title":"Performing an Instant Rollback on a Deployment","description":"Learn how to perform an Instant Rollback on your production deployments and quickly roll back to a previously deployed production deployment.","lastEdited":"2023-02-17T10:16:03.000Z","filePath":"/docs/deployments/instant-rollback"},{"title":"Prefetch","description":"In this module, we will learn how to prefetch data before routing to the page to make our app feel extra snappy.","lastEdited":"2022-12-13T21:17:15.000Z","filePath":"/docs/beginner-sveltekit/prefetch"},{"title":"Preview Deployments Overview","description":"Preview Deployments allow you to preview changes to your app in a live deployment without merging those changes to your Git project\'s production branch.","lastEdited":"2023-02-15T14:27:26.000Z","filePath":"/docs/deployments/preview-deployments"},{"title":"Production Checklist for Launch","description":"A comprehensive checklist to run through before launching your application on Vercel, prepared by the Vercel Engineering team. ","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/production-checklist/index"},{"title":"Project Dashboard","description":"Learn about the features available for managing projects with the Project Dashboard on Vercel.","lastEdited":"2023-03-02T10:32:58.000Z","filePath":"/docs/projects/project-dashboard"},{"title":"Projects Overview","description":"To deploy on Vercel, you need to create a Project, which groups deployments and custom domains. Learn how to set up and configure projects with this guide.","lastEdited":"2023-02-06T14:47:39.000Z","filePath":"/docs/projects/overview"},{"title":"Quickstart for Using Audiences in Vercel Analytics","description":"This quickstart guide will help you get started with using Audiences on Vercel.","lastEdited":"2023-03-02T08:54:52.000Z","filePath":"/docs/analytics/audiences/quickstart"},{"title":"Quickstart for Using Edge Functions","description":"In this quickstart guide, you\'ll learn how to get started with Edge Functions on Vercel using the Vercel CLI or Next.js.","lastEdited":"2023-02-20T07:15:08.000Z","filePath":"/docs/functions/edge-functions/quickstart"},{"title":"Quickstart for Using Edge Middleware","description":"In this quickstart guide, you\'ll learn how to get started with Next.js Middleware and using Edge Middleware in Vercel CLI","lastEdited":"2023-02-09T11:23:29.000Z","filePath":"/docs/functions/edge-middleware/quickstart"},{"title":"Quickstart for Using ISR on Vercel","description":"This quickstart guide will help you get started using Incremental Static Regeneration (ISR) on Vercel with Next.js or the Build Output API.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/incremental-static-regeneration/quickstart"},{"title":"Quickstart for using the Vercel OpenTelemetry Collector","description":"Learn how to get started with OTEL on Vercel to send traces from your Serverless Functions to application performance monitoring (APM) vendors.","lastEdited":"2023-02-27T17:15:48.000Z","filePath":"/docs/observability/otel-overview/quickstart"},{"title":"Quickstart for Using Vercel Analytics","description":"Vercel Analytics helps you to enable and monitor statistics for Web Vitals on your website. Get started with Web Vitals using this quickstart guide.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/analytics/quickstart"},{"title":"Reading Edge Configs with the SDK","description":"The Edge Config client SDK is the most ergonomic way to read data from Edge Configs. Learn how to set up the SDK so you can start reading Edge Configs.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/edge-network/edge-config/edge-config-sdk"},{"title":"Redacting Sensitive Data from Analytics Events","description":"Sometimes URLs and query parameters may contain sensitive data, such as User IDs. Learn how to redact sensitive data from your analytics events.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/analytics/audiences/redacting-sensitive-data"},{"title":"Release Phases for Vercel","description":"Learn about the different phases of the Vercel Product release cycle and the requirements that a Product must meet before being assigned to a specific phase.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/release-phases/index"},{"title":"Remote Caching","description":"Vercel Remote Cache allows you to share build outputs and artifacts across distributed teams.","lastEdited":"2023-01-31T17:09:36.000Z","filePath":"/docs/monorepos/remote-caching"},{"title":"Removing a Domain from a Project","description":"Learn how to remove a domain from a Project and from your account completely with this guide.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/projects/domains/remove-a-domain"},{"title":"Renewing a Domain to Your Account","description":"Learn how to toggle auto renewal on and off for custom domains purchased through or registered with Vercel, and renew third-party domains with this guide.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/projects/domains/renew-a-domain"},{"title":"Resolving Host Failed","description":"The platform infrastructure failed to resolve the hostname.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/INTERNAL_HOSTNAME_RESOLVE_FAILED"},{"title":"Resource Not Found","description":"The requested file or Serverless Function was not found.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/application/RESOURCE_NOT_FOUND"},{"title":"Review Guidelines for Integrations","description":"An internal review is required for your integration to be listed on the Vercel Marketplace. Learn about the guidelines Vercel uses to accept your Integration.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/integrations/create-integration/submit-integration"},{"title":"Routing","description":"In this module, we will learn how SvelteKit\'s built in folder based router works.","lastEdited":"2022-12-13T21:17:15.000Z","filePath":"/docs/beginner-sveltekit/routing"},{"title":"Runtime Logs","description":"Learn how to search, inspect, and share your runtime logs with the Logs tab.","lastEdited":"2023-03-01T18:19:21.000Z","filePath":"/docs/observability/runtime-logs"},{"title":"Security & Compliance Measures","description":"Learn about the protection and compliance measures Vercel takes to ensure the security of your data, including DDoS protection, SOC 2 compliance and more.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/concepts/security/index"},{"title":"Sensitive Environment Variables","description":"Environment variables that cannot be decrypted once created.","lastEdited":"2023-02-08T17:31:25.000Z","filePath":"/docs/projects/sensitive-environment-variables"},{"title":"Serverless Function Invocation Failed","description":"The requested Serverless Function reached the request timeout threshold.","lastEdited":"2022-12-08T22:47:46.000Z","filePath":"/docs/error/application/FUNCTION_INVOCATION_FAILED"},{"title":"Serverless Function not found.","description":"The requested Serverless Function was not found.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/INTERNAL_FUNCTION_NOT_FOUND"},{"title":"Serverless Function Not Ready","description":"An error occurred in the platform infrastructure layer.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/INTERNAL_FUNCTION_NOT_READY"},{"title":"Serverless Function Runtimes","description":"Runtimes transform your source code into Serverless Functions, which are served by our Edge Network. Learn about the official runtimes supported by Vercel.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/functions/serverless-functions/runtimes/index"},{"title":"Serverless Function Unarchive Failed","description":"An error occurred in the platform infrastructure layer.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/INTERNAL_UNARCHIVE_FAILED"},{"title":"Serverless Functions Overview","description":"Vercel Serverless Functions enable running code on-demand without needing to manage your own infrastructure, provision servers, or upgrade hardware.","lastEdited":"2023-02-17T10:09:51.000Z","filePath":"/docs/functions/serverless-functions/index"},{"title":"Serverless Functions Quickstart","description":"In this quickstart guide, you\'ll learn how to get started with Serverless Functions using Vercel CLI.","lastEdited":"2023-02-17T18:33:20.000Z","filePath":"/docs/functions/serverless-functions/quickstart"},{"title":"Setting Serverless Function Regions","description":"Learn how to reduce Serverless Function latency by configuring which region they\'re deployed in, which can be set in your project\'s Dashboard settings.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/functions/serverless-functions/regions"},{"title":"Setting Up Webhooks","description":"Learn how to set up webhooks and use them with Vercel Integrations.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/integrations/webhooks-overview/index"},{"title":"Shared Environment Variables","description":"Learn how to use Shared Environment Variables, which are Environment Variables that you define at the Team level and can link to multiple Projects.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/projects/shared-environment-variables"},{"title":"Slots","description":"In this module, we will learn how to dynamically change a component\'s markup using the slot tag.","lastEdited":"2022-12-13T21:17:15.000Z","filePath":"/docs/beginner-sveltekit/slots"},{"title":"Special Use Cases for Comments","description":"Learn how to use and manage Comments in uncommon cases, like enabling and disabling comments for individual branches, using a CSP, and more.","lastEdited":"2023-02-15T16:54:27.000Z","filePath":"/docs/deployments/comments/specialized-usage"},{"title":"Static Request Failed","description":"An error occurred in the platform infrastructure layer.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/platform/INTERNAL_STATIC_REQUEST_FAILED"},{"title":"Streaming Data in Edge Functions","description":"Learn how to fetch streamable data in Edge Functions to deliver faster responses using the Streams Web API.","lastEdited":"2023-02-28T01:58:46.000Z","filePath":"/docs/functions/edge-functions/streaming"},{"title":"Support Center","description":"Learn how to communicate securely with the Vercel support team","lastEdited":"2023-01-19T23:04:28.000Z","filePath":"/docs/dashboard-features/support-center"},{"title":"Supported Frameworks on Vercel","description":"Vercel supports a wide range of the most popular frontend frameworks, optimizing how your site builds and runs no matter what tool you use.","lastEdited":"2023-03-06T15:12:20.000Z","filePath":"/docs/frameworks/index"},{"title":"Supported Languages for Serverless Functions","description":"Learn how to deploy Serverless Functions with Vercel in JavaScript, Go, Python, Ruby, and more.","lastEdited":"2022-12-08T22:47:46.000Z","filePath":"/docs/functions/serverless-functions/supported-languages"},{"title":"Supported Regions for the Edge Network","description":"View the list of regions supported by the Vercel Edge Network.","lastEdited":"2023-02-17T18:14:03.000Z","filePath":"/docs/edge-network/regions"},{"title":"Svelte Stores","description":"In this module, we will learn how to share state between unrelated components through the use of Svelte stores.","lastEdited":"2022-12-13T21:17:15.000Z","filePath":"/docs/beginner-sveltekit/svelte-stores"},{"title":"Svelte\'s Reactivity","description":"In this module, we will go over how Svelte\'s reactivity works, covering some of the Svelte basics along the way. We will start off by creating reactive assignments, followed by reactive declarations, and then reactive statements.","lastEdited":"2023-01-25T02:48:53.000Z","filePath":"/docs/beginner-sveltekit/reactivity"},{"title":"SvelteKit on Vercel","description":"Learn how to use Vercel\'s features with SvelteKit","lastEdited":"2023-02-23T22:19:06.000Z","filePath":"/docs/frameworks/sveltekit"},{"title":"Tailwind CSS","description":"In this module, we\'re going to cover how to add Tailwind to our SvelteKit project.","lastEdited":"2022-12-13T21:17:15.000Z","filePath":"/docs/beginner-sveltekit/tailwind"},{"title":"Teams & Accounts Overview","description":"Learn how to create a personal account on Vercel and manage your login connections via your dashboard.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/teams-and-accounts/index"},{"title":"Too Many Filesystem Checks","description":"The filesystem was checked too many times during routing.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/application/TOO_MANY_FILESYSTEM_CHECKS"},{"title":"Too Many Forks","description":"The requested path routes based on too many conditions.","lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/error/application/TOO_MANY_FORKS"},{"title":"Transferring Domains to Another Team or Project","description":"Domains can be transferred to another team or project within Vercel, or to and from a third-party registrar. Learn how to transfer domains with this guide.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/projects/domains/transfer-your-domain"},{"title":"Troubleshooting Build Errors","description":"Learn how to resolve common scenarios you may encounter during the Build step, including build errors that cancel a deployment and long build times.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/deployments/troubleshoot-a-build.js"},{"title":"Troubleshooting domains","description":"Learn about common reasons for domain misconfigurations and how to troubleshoot your domain on Vercel.","lastEdited":"2023-03-02T17:26:16.000Z","filePath":"/docs/projects/domains/troubleshooting"},{"title":"Updating Your Project","description":"Learn how to make changes to your Project by applying updates either via Git or the Vercel CLI.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/concepts/get-started/make-changes"},{"title":"Upgrade an Integration","description":"Lean more about when you may need to upgrade your Integration.","lastEdited":"2023-02-28T01:58:46.000Z","filePath":"/docs/integrations/create-integration/upgrade-integration"},{"title":"Uploading Custom SSL Certificates","description":"By default, Vercel provides all domains with a custom SSL certificates. However, Enterprise teams can upload their own custom SSL certificate.","lastEdited":"2023-03-02T14:22:40.000Z","filePath":"/docs/projects/domains/custom-SSL-certificate"},{"title":"Usage & Pricing for Edge Functions","description":"Learn about usage and pricing for using Edge Functions with Vercel.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/functions/edge-functions/usage-and-pricing"},{"title":"Usage & Pricing for Edge Middleware","description":"Learn about usage and pricing for using Edge Middleware with Vercel.","lastEdited":"2023-03-02T08:15:34.000Z","filePath":"/docs/functions/edge-middleware/usage-and-pricing"},{"title":"Usage-based Pro Plan","description":"Learn how the usage-based Pro pricing model works and what is included.","noIndex":true,"lastEdited":"2022-10-31T03:40:08.000Z","filePath":"/docs/concepts/payments-and-billing/usage-based-pro-plan"},{"title":"Using Comments with Preview Deployments","description":"This guide will help you get started with using Comments with your Vercel Preview Deployments.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/deployments/comments/using-comments"},{"title":"Using Deployment Protection","description":"Learn how to use the Deployment Protection feature, which makes your preview URLs private and allows access in a flexible and secure way.","lastEdited":"2023-03-06T18:41:36.000Z","filePath":"/docs/security/deployment-protection"},{"title":"Using Integrations with Vercel","description":"Learn how to pair Vercel\'s functionality with a third-party service to streamline installation, reduce configuration, and increase productivity.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/integrations/using-an-integration/index"},{"title":"Using Monorepos","description":"Monorepos allow you to manage and organize multiple projects in a single directory so they are easier to work with. Learn how to deploy a monorepo here.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/monorepos/index"},{"title":"Using the Activity Log","description":"Learn how to use the Activity Log, which provides a list of all events on a personal account or team, chronologically organized since its creation.","lastEdited":"2023-03-06T01:38:18.000Z","filePath":"/docs/observability/activity-log"},{"title":"Using the Command Menu ","description":"Learn how to quickly navigate through the Vercel dashboard with your keyboard using the Command Menu.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/dashboard-features/command-menu"},{"title":"Using the Directory Listing","description":"The Directory Listing is served when a particular path is a directory and does not contain an index file. Learn how to toggle and disable it in this guide.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/edge-network/directory-listing"},{"title":"Using the Go Runtime with Serverless Functions","description":"Learn how to use the Go runtime to compile Go Serverless Functions on Vercel.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/functions/serverless-functions/runtimes/go"},{"title":"Using the Node.js Runtime with Serverless Functions","description":"Learn how to use the Node.js runtime to compile Node.js Serverless Functions on Vercel.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/functions/serverless-functions/runtimes/node-js"},{"title":"Using the Python Runtime with Serverless Functions","description":"Learn how to use the Python runtime to compile Python Serverless Functions on Vercel.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/functions/serverless-functions/runtimes/python"},{"title":"Using the Ruby Runtime with Serverless Functions","description":"Learn how to use the Ruby runtime to compile Ruby Serverless Functions on Vercel.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/functions/serverless-functions/runtimes/ruby"},{"title":"Using Vercel API Scopes in Your Integrations","description":"Learn how to use Vercel API scopes in your Integrations.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/integrations/vercel-api-overview/vercel-api-reference"},{"title":"Using WebAssembly (Wasm) at the Edge","description":"Learn how to use WebAssembly (Wasm) to enable low-level languages to run on Vercel Edge Functions and Vercel Edge Middleware.","lastEdited":"2023-02-24T17:58:05.000Z","filePath":"/docs/functions/edge-functions/wasm"},{"title":"vercel alias","description":"Learn how to apply custom domain aliases to your Vercel deployments using the vercel alias CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/alias"},{"title":"Vercel Analytics Overview","description":"Learn how to visualize and monitor your application performance over time with Vercel Analytics.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/analytics/index"},{"title":"Vercel Analytics Privacy Policy","description":"Learn how Vercel follows the latest privacy and data compliance standards with its Analytics feature.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/analytics/privacy"},{"title":"vercel bisect","description":"Learn how to perform a binary search on your deployments to help surface issues using the vercel bisect CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/bisect"},{"title":"vercel build","description":"Learn how to build a Vercel Project locally or in your own CI environment using the vercel build CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/build"},{"title":"vercel certs","description":"Learn how to manage certificates for your domains using the vercel certs CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/certs"},{"title":"Vercel CLI Global Options","description":"Global options are commonly available to use with multiple Vercel CLI commands. Learn about Vercel CLI\'s global options here.","lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/global-options"},{"title":"Vercel CLI Overview","description":"Learn how to use the Vercel command-line interface (CLI) to manage and configure your Vercel Projects from the command line.","lastEdited":"2023-02-27T20:51:12.000Z","filePath":"/docs/cli/index"},{"title":"vercel deploy","description":"Learn how to deploy your Vercel projects using the vercel deploy CLI command.","isCode":true,"lastEdited":"2023-02-23T22:08:19.000Z","filePath":"/docs/cli/deploy"},{"title":"vercel dev","description":"Learn how to replicate the Vercel deployment environment locally and test your Vercel Project before deploying using the vercel dev CLI command.","isCode":true,"lastEdited":"2023-02-25T00:10:40.000Z","filePath":"/docs/cli/dev"},{"title":"vercel dns","description":"Learn how to manage your DNS records for your domains using the vercel dns CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/dns"},{"title":"vercel domains","description":"Learn how to buy, sell, transfer, and manage your domains using the vercel domains CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/domains"},{"title":"vercel env","description":"Learn how to manage your environment variables in your Vercel Projects using the vercel env CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/env"},{"title":"vercel git","description":"Learn how to manage your Git provider connections using the vercel git CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/git"},{"title":"vercel help","description":"Learn how to use the vercel help CLI command to get information about all available Vercel CLI commands.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/help"},{"title":"vercel init","description":"Learn how to initialize example Vercel Projects locally using the vercel init CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/init"},{"title":"vercel inspect","description":"Learn how to retrieve information about your Vercel deployments using the vercel inspect CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/inspect"},{"title":"Vercel Integrations Overview","description":"Learn how to extend Vercel\'s capabilities by integrating with your headless content, commerce, or database platforms.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/integrations/index"},{"title":"vercel link","description":"Learn how to link a local directory to a Vercel Project using the vercel link CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/link"},{"title":"vercel list","description":"Learn how to list out all recent deployments for the current Vercel Project using the vercel list CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/list"},{"title":"vercel login","description":"Learn how to login into your Vercel account using the vercel login CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/login"},{"title":"vercel logout","description":"Learn how to logout from your Vercel account using the vercel logout CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/logout"},{"title":"vercel logs","description":"Learn how to list out all logs for a specific deployment using the vercel logs CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/logs"},{"title":"vercel project","description":"Learn how to list, add, remove, and manage your Vercel Projects using the vercel project CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/project"},{"title":"vercel pull","description":"Learn how to update your local project with remote environment variables using the vercel pull CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/pull"},{"title":"vercel remove","description":"Learn how to remove a deployment using the vercel remove CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/remove"},{"title":"vercel rollback","description":"Learn how to rollback your production deployments to previous deployments using the vercel rollback CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/rollback"},{"title":"vercel secrets","description":"Learn how to list, add, remove, and manage secrets used in environment variables with the vercel secrets CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/secrets"},{"title":"vercel switch","description":"Learn how to switch between different team scopes using the vercel switch CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/switch"},{"title":"vercel teams","description":"Learn how to list, add, remove, and manage your teams using the vercel teams CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/teams"},{"title":"vercel whoami","description":"Learn how to display the username of the currently logged in user with the vercel whoami CLI command.","isCode":true,"lastEdited":"2023-02-08T16:32:41.000Z","filePath":"/docs/cli/whoami"},{"title":"Viewing & Searching Domains","description":"Learn how to view and search all registered domains that are assigned to Vercel Projects through the Vercel dashboard.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/projects/domains/view-and-search-domains"},{"title":"Vite on Vercel","description":"Learn how to use Vercel\'s features with Vite.","filePath":"/docs/frameworks/vite"},{"title":"Web Vitals API Reference","description":"Learn how to use Web Vitals in Vercel Analytics with any frontend framework or project through the Web Vitals API.","lastEdited":"2023-02-28T01:58:46.000Z","filePath":"/docs/analytics/api"},{"title":"Web Vitals Metrics Overview","description":"This guide lists out and explains all the metrics provided by Vercel\'s Web Vitals feature.","lastEdited":"2023-02-14T13:38:39.000Z","filePath":"/docs/analytics/web-vitals"},{"title":"Webhooks API Reference","description":"Vercel Integrations allow you to subscribe to certain trigger-based events through webhooks. Learn about the supported webhook events and how to use them.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/integrations/webhooks-overview/webhooks-api"},{"title":"Working with Checks","description":"Vercel automatically keeps an eye on various aspects of your web application using the Checks API. Learn how to use Checks in your Vercel workflow here.","lastEdited":"2023-02-06T11:31:01.000Z","filePath":"/docs/integrations/checks-overview/index"},{"title":"Working With Components","description":"In this module will learn how to create Svelte components and how they work.","lastEdited":"2022-12-13T21:17:15.000Z","filePath":"/docs/beginner-sveltekit/working-with-components"},{"title":"Working with Log Drains","description":"Log Drains collect all of your logs using a service specializing in storing app logs. Learn how to use them with Vercel Integrations here.","lastEdited":"2023-02-08T16:28:52.000Z","filePath":"/docs/observability/log-drains-overview/log-drains"}]'),
                s = i(708488),
                l = i.n(s);

            function d() {
                let e = (0, r.useRouter)(),
                    {
                        pathname: t
                    } = e,
                    i = a.filter(e => t === e.filePath || `${t}/index` === e.filePath || `${t}/overview` === e.filePath),
                    s = "";
                if (i.length > 0) {
                    let e = i[0].lastEdited;
                    e && (s = e)
                }
                return (0, o.jsx)("div", {
                    className: l().lastUpdatedSection,
                    children: "" === s ? (0, o.jsxs)("div", {
                        className: l().lastUpdatedText,
                        children: ["Last updated on ", (0, n.Z)(new Date, "MMMM d, yyyy")]
                    }) : (0, o.jsxs)("div", {
                        className: l().lastUpdatedText,
                        children: ["Last updated on ", (0, n.Z)(new Date(s), "MMMM d, yyyy")]
                    })
                })
            }
        },
        107030: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return c
                }
            });
            var o = i(397458),
                n = i(243801),
                r = i.n(n),
                a = i(14517),
                s = i(46473),
                l = i.n(s),
                d = function(e) {
                    let {
                        children: t,
                        className: i,
                        toc: n = !1,
                        width: r,
                        style: s
                    } = e, d = { ...s,
                        ...r && {
                            maxWidth: `${r}px`
                        }
                    };
                    return (0, o.jsx)("div", {
                        className: (0, a.W)(i, l().wrapper, n ? l().withToc : ""),
                        style: d,
                        children: t
                    })
                },
                c = function(e) {
                    let {
                        children: t,
                        background: i = !0,
                        toc: n = !1
                    } = e;
                    return (0, o.jsxs)("main", {
                        className: `jsx-95f117639faf7553 main ${i?"background":""}`,
                        children: [(0, o.jsx)(d, {
                            style: {
                                background: i ? "" : "var(--geist-background)"
                            },
                            toc: n,
                            children: t
                        }), (0, o.jsx)(r(), {
                            id: "95f117639faf7553",
                            children: ".main.jsx-95f117639faf7553{min-height:100vh;background-color:var(--geist-background)}.main.jsx-95f117639faf7553>div{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;min-height:-webkit-calc(100vh - var(--header-height));min-height:-moz-calc(100vh - var(--header-height));min-height:calc(100vh - var(--header-height))}.subheader+.main.jsx-95f117639faf7553{padding-top:40px}"
                        })]
                    })
                }
        },
        67150: function(e, t, i) {
            "use strict";
            i.d(t, {
                ko: function() {
                    return l
                }
            });
            var o = i(397458);
            i(652983);
            var n = i(14517),
                r = i(950429),
                a = i(868853),
                s = i.n(a);

            function l(e) {
                let {
                    href: t,
                    title: i,
                    description: a,
                    icon: l
                } = e;
                return (0, o.jsx)("div", {
                    className: s().quickstartBox,
                    children: (0, o.jsx)(r.r, {
                        href: t,
                        children: (0, o.jsxs)("div", {
                            className: (0, n.W)(s().quickstart, s().quickstartText),
                            children: [l ? (0, o.jsx)("div", {
                                className: s().quickstartIcon,
                                children: l
                            }) : null, (0, o.jsxs)("div", {
                                className: s().content,
                                children: [(0, o.jsx)("b", {
                                    children: i
                                }), (0, o.jsx)("span", {
                                    className: s().note,
                                    children: a
                                })]
                            })]
                        })
                    })
                })
            }
            i(852049)
        },
        347257: function(e, t, i) {
            "use strict";
            i.d(t, {
                R: function() {
                    return P
                }
            });
            var o = i(397458),
                n = i(652983),
                r = i(628987),
                a = i(574630),
                s = i(132950),
                l = i(14517),
                d = i(537525),
                c = i.n(d),
                h = i(674346),
                u = i(889353),
                p = i(556524),
                m = i(623061),
                g = i.n(m);

            function f(e) {
                let {
                    content: t,
                    typingDelay: i = 1500,
                    startDelay: r = 0,
                    onDone: a
                } = e, [s, l] = (0, n.useState)(0), d = (0, n.useRef)();
                return (0, n.useEffect)(() => {
                    let e = setTimeout(() => {
                        d.current = setInterval(() => {
                            l(e => e + 1)
                        }, i)
                    }, r);
                    return () => {
                        d.current && clearInterval(d.current), clearTimeout(e)
                    }
                }, [t.length, a, r, i]), (0, n.useEffect)(() => {
                    s === t.length && (d.current && clearInterval(d.current), null == a || a())
                }, [a, t.length, s]), (0, o.jsxs)(o.Fragment, {
                    children: [t.map((e, t) => (0, o.jsx)("div", {
                        className: g().lineContainer,
                        children: (0, o.jsx)("p", {
                            className: g().line,
                            style: {
                                animationPlayState: t <= s ? "running" : "paused",
                                animationTimingFunction: `steps(${e.length}, end)`,
                                animationDuration: `${i}ms`,
                                animationDelay: `${0===t?r:0}ms`,
                                borderRightWidth: t === s ? "1ch" : 0
                            },
                            children: e
                        })
                    }, e)), (0, o.jsx)("div", {})]
                })
            }
            var w = i(14025),
                v = i.n(w);

            function y(e) {
                let {
                    display: t,
                    onDismiss: i,
                    typingDelay: r,
                    ctaText: a,
                    ctaHref: d,
                    ctaOnClick: m,
                    ctaEventName: g,
                    newTab: w = !1,
                    content: y,
                    delayDurationMS: b = 1e4
                } = e, [x, T] = (0, n.useState)(!1), E = (0, n.useRef)(!1), P = (0, n.useCallback)(() => {
                    p.co.track(p.XN.POPOVER_CTA, {
                        type: "cta_clicked",
                        customEventName: g
                    }), m && m(), i()
                }, [g, m, i]), _ = (0, n.useCallback)(() => {
                    p.co.track(p.XN.POPOVER_CTA, {
                        type: "dismiss"
                    }), i()
                }, [i]), k = (0, n.useCallback)(() => T(!0), []);
                (0, n.useEffect)(() => {
                    t && (E.current || (p.co.track(p.XN.POPOVER_CTA, {
                        type: "view"
                    }), E.current = !0))
                }, [t]);
                let j = (0, n.useMemo)(() => b + 500, [b]);
                return (0, o.jsxs)(s.K, {
                    className: (0, l.W)(v().popover, t && v().display),
                    style: {
                        transitionDuration: "500ms"
                    },
                    children: [(0, o.jsx)("button", {
                        className: v().closeButton,
                        onClick: _,
                        type: "button",
                        children: (0, o.jsx)(u.X, {
                            color: "var(--accents-5)",
                            size: 16
                        })
                    }), (0, o.jsxs)("div", {
                        className: v().codeBlock,
                        children: [(0, o.jsx)(f, {
                            content: y,
                            onDone: k,
                            startDelay: j,
                            typingDelay: r
                        }), (0, o.jsx)("div", {
                            children: (0, o.jsxs)(c(), {
                                className: v().cta,
                                href: d,
                                onClick: P,
                                style: {
                                    animationPlayState: x ? "running" : "paused",
                                    animationTimingFunction: `steps(${a.length}, end)`,
                                    animationDuration: `${80*a.length}ms`,
                                    borderRightWidth: x ? "1ch" : 0
                                },
                                target: w ? "_blank" : "_self",
                                children: [(0, o.jsx)("span", {
                                    children: a
                                }), (0, o.jsx)(h.G, {
                                    size: 16
                                })]
                            })
                        })]
                    })]
                })
            }

            function b(e) {
                var t;
                let {
                    display: i,
                    open: r,
                    close: a
                } = function() {
                    let [e, t] = (0, n.useState)(!1), i = (0, n.useCallback)(() => {
                        t(!1)
                    }, []), o = (0, n.useCallback)(() => {
                        t(!0)
                    }, []);
                    return {
                        display: e,
                        close: i,
                        open: o
                    }
                }(), s = (0, n.useCallback)(() => {
                    var t;
                    ((null === (t = e.shouldDisplayPopover) || void 0 === t ? void 0 : t.call(e)) ? ? !0) && r()
                }, [r, e]);
                return t = e.delayDurationMS ? ? 1e4, (0, n.useEffect)(() => {
                    let e = setTimeout(s, t);
                    return () => clearTimeout(e)
                }, [t, s]), (0, o.jsx)(y, { ...e,
                    display: i,
                    onDismiss: a
                })
            }

            function x(e) {
                let {
                    fit: t
                } = (0, a.m)({
                    companySize: e.companySize ? ? 100
                }), i = (0, n.useCallback)(() => {
                    let e = new URL(document.URL);
                    return !!e.searchParams.has("popover-cta-koala-override") || t === a.B.ProductLed || t === a.B.SalesLed
                }, [t]);
                return (0, o.jsx)(b, { ...e,
                    shouldDisplayPopover: i
                })
            }
            let T = {
                    content: ["Interested in talking to", "a Vercel product expert?"],
                    ctaText: "Schedule a call",
                    ctaHref: "https://calendly.com/d/4hv-7p8-8m4/introductory-call"
                },
                E = {
                    "/docs/security": {
                        content: ["Interested in talking to a", "Security product expert?"]
                    },
                    "/docs/production-checklist": {
                        content: ["Interested in white glove support", "for your production rollout?"]
                    },
                    "/guides/zero-downtime-migration": {
                        content: ["Interested in white glove support", "for your production rollout?"]
                    },
                    "/blog/10-next-js-tips-you-might-not-know": T,
                    "/blog/vercel-edge-middleware-dynamic-at-the-speed-of-static": T,
                    "/blog/build-your-own-web-framework": T,
                    "/blog/framework-defined-infrastructure": T,
                    "/blog/behind-the-scenes-of-vercels-infrastructure": T,
                    "/blog/introducing-monitoring": T,
                    "/blog/navigating-tradeoffs-in-large-scale-website-migrations": T,
                    "/blog/introducing-commenting-on-preview-deployments": T,
                    "/blog/streaming-for-serverless-node-js-and-edge-runtimes-with-vercel-functions": T,
                    "/blog/nextjs-seo-playbook": T,
                    "/blog/automatic-ssl-with-vercel-lets-encrypt": T,
                    "/docs/observability": T,
                    "/docs/integrations": T
                };

            function P(e) {
                let [t, i] = (0, n.useState)(null), a = (0, r.usePathname)();
                return (0, n.useEffect)(() => {
                    let e = Object.keys(E),
                        t = e.find(e => null == a ? void 0 : a.startsWith(e));
                    if (!t) return;
                    let o = E[t];
                    i(o)
                }, [e, a]), t ? (0, o.jsx)(x, {
                    content: ["Interested in chatting", "with the Vercel team?"],
                    ctaHref: "https://calendly.com/d/4hv-7p8-8m4/introductory-call",
                    ctaText: "Schedule a call",
                    newTab: !0,
                    ...t,
                    ...e
                }) : null
            }
        },
        223303: function(e, t, i) {
            "use strict";
            i.d(t, {
                H: function() {
                    return n
                }
            });
            var o = i(24739);
            let n = e => {
                function t(e) {
                    return e.split("<!-- -->").join("")
                }
                let i = /<h([1-3])>(.*?)<\/h[1-3]>/gi,
                    n = /<h([1-3])>/i;
                return e.match(i) ? e.match(i).map(e => {
                    let i = (0, o.i)(t(e)),
                        r = `#${t(i.replace(/[?]/g,"").replace(/ /g,"-").replaceAll("'","-").toLowerCase())}`,
                        a = e.match(n)[1];
                    return {
                        name: i,
                        href: r,
                        level: a
                    }
                }) : []
            }
        },
        674346: function(e, t, i) {
            "use strict";
            i.d(t, {
                G: function() {
                    return n
                }
            });
            var o = i(361961);
            let n = (0, o.H)('<path d="M7 17L17 7"/><path d="M7 7h10v10"/>')
        },
        689804: function(e, t, i) {
            "use strict";
            i.d(t, {
                s: function() {
                    return n
                }
            });
            var o = i(361961);
            let n = (0, o.H)('<path d="M15 18l-6-6 6-6"/>')
        },
        758583: function(e) {
            e.exports = {
                sidebar: "docs_sidebar__f43Xb",
                sidebarVisible: "docs_sidebarVisible__p9O2f",
                sidebarHeader: "docs_sidebarHeader__Rmw2Z",
                sidebarTitle: "docs_sidebarTitle__2Tbjd",
                sidebarButton: "docs_sidebarButton__x5gUt",
                sidebarArticles: "docs_sidebarArticles__Nr5vE",
                sidebarArticle: "docs_sidebarArticle__pLGss",
                sidebarArticleIcon: "docs_sidebarArticleIcon__sHABN",
                sidebarArticleText: "docs_sidebarArticleText__S1rz2",
                sidebarArticleCategory: "docs_sidebarArticleCategory__U46ul",
                sidebarArticleTitle: "docs_sidebarArticleTitle__uYhsn"
            }
        },
        708488: function(e) {
            e.exports = {
                lastUpdatedSection: "lastupdated_lastUpdatedSection__jbMRd",
                lastUpdatedText: "lastupdated_lastUpdatedText__qyJne"
            }
        },
        485234: function(e) {
            e.exports = {
                container: "breadcrumbs_container__Ni4e8",
                icon: "breadcrumbs_icon__eWDnn"
            }
        },
        335711: function(e) {
            e.exports = {
                container: "page-info_container__Riwzi",
                breadcrumbs: "page-info_breadcrumbs__shXx5",
                readingTime: "page-info_readingTime__bxYV8"
            }
        },
        374993: function(e) {
            e.exports = {
                container: "prev-next-nav_container__gsDda",
                label: "prev-next-nav_label__Y0ntD",
                previous: "prev-next-nav_previous__lvCCC",
                next: "prev-next-nav_next__rGFWf",
                title: "prev-next-nav_title__PNzl2",
                navIcon: "prev-next-nav_navIcon__JHBN1",
                icon: "prev-next-nav_icon__blJgp",
                separator: "prev-next-nav_separator__JRRE8",
                link: "prev-next-nav_link__FHSMm"
            }
        },
        664922: function(e) {
            e.exports = {
                wrapper: "menu_wrapper___7FP8",
                rootSection: "menu_rootSection__d8Z_Y",
                childSection: "menu_childSection__Kg_3t",
                rootWrapper: "menu_rootWrapper__LZ29w",
                expandedSection: "menu_expandedSection__sf2uU",
                itemSelected: "menu_itemSelected__ekSoD",
                childSidebar: "menu_childSidebar__lgo3U",
                dynamicMenuButton: "menu_dynamicMenuButton__iZvHh",
                dynamicMenuButtonOpen: "menu_dynamicMenuButtonOpen__nDlyq",
                navItemWrapper: "menu_navItemWrapper__EysTF",
                buttons: "menu_buttons__bc73R",
                itemSeparator: "menu_itemSeparator__CiOZt",
                showNav: "menu_showNav__n0SBG"
            }
        },
        803390: function(e) {
            e.exports = {
                MobileMainContainer: "toc_MobileMainContainer__crMVA",
                DropDownContainer: "toc_DropDownContainer__2VnEb",
                toc: "toc_toc__zX5Jo",
                hasSecondaryNav: "toc_hasSecondaryNav__nG_Oz",
                tocScrollbar: "toc_tocScrollbar__UH9Hk",
                tocItem: "toc_tocItem__4K7s0",
                faq: "toc_faq__MlBq4",
                "level-2": "toc_level-2__U45mB",
                active: "toc_active__ECX1X",
                tocHeader: "toc_tocHeader__zD6cl",
                backToTop: "toc_backToTop__UutZm",
                fadeIn: "toc_fadeIn__2Ry0Z",
                divider: "toc_divider__182oB",
                switchers: "toc_switchers__X1_xV",
                collapse: "toc_collapse__3UqsI",
                dropdown: "toc_dropdown__nVVTm",
                mobileDropdown: "toc_mobileDropdown__puDBJ",
                tocItemMobile: "toc_tocItemMobile__RYDzf",
                selectContainer: "toc_selectContainer__envxO",
                selectedItem: "toc_selectedItem__EfMv_",
                TOCContainer: "toc_TOCContainer__CwzMh",
                popoverContainer: "toc_popoverContainer__evPu1",
                showPopover: "toc_showPopover__7Aybj",
                navContainer: "toc_navContainer__Mfj5A",
                arrow: "toc_arrow__HsqnM",
                arrowUp: "toc_arrowUp__rJ9D8",
                tabletFrameworkContainer: "toc_tabletFrameworkContainer__31feq",
                desktopDDContainer: "toc_desktopDDContainer__otnCu",
                desktopFramework: "toc_desktopFramework__EvOHY",
                frameworkIcon: "toc_frameworkIcon__yt_Me",
                tabletView: "toc_tabletView__2k0LE"
            }
        },
        46473: function(e) {
            e.exports = {
                wrapper: "wrapper_wrapper__Ckt7b",
                withToc: "wrapper_withToc__qfA3u"
            }
        },
        868853: function(e) {
            e.exports = {
                container: "quickstart_container__xFdGs",
                quickstart: "quickstart_quickstart__1owMw",
                content: "quickstart_content__Y4aBL",
                quickstartText: "quickstart_quickstartText__iVDCa",
                quickstartIcon: "quickstart_quickstartIcon__A2GwO",
                quickstartBox: "quickstart_quickstartBox__9sD8q",
                note: "quickstart_note__oZQTF",
                quickstarticons: "quickstart_quickstarticons__opNoo",
                topSection: "quickstart_topSection__8PuNU",
                buttons: "quickstart_buttons__yZUwc",
                button: "quickstart_button__MLueY"
            }
        },
        623061: function(e) {
            e.exports = {
                lineContainer: "animated-text_lineContainer__e_gM2",
                line: "animated-text_line__3lJbY",
                typewriter: "animated-text_typewriter__sJYZ7",
                caret: "animated-text_caret__dXPD3"
            }
        },
        14025: function(e) {
            e.exports = {
                popover: "popover-cta_popover__Bdm6x",
                display: "popover-cta_display__RYUZH",
                closeButton: "popover-cta_closeButton__W_2Jp",
                codeBlock: "popover-cta_codeBlock__CfdXt",
                cta: "popover-cta_cta__Fg2nj",
                typewriter: "popover-cta_typewriter__d3xsX",
                caret: "popover-cta_caret__nfs_w"
            }
        }
    }
]);