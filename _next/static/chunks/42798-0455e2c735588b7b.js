(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [42798], {
        77274: function(e, n, t) {
            "use strict";
            var i = t(397458),
                r = t(869480),
                s = t.n(r),
                o = t(426326),
                a = t.n(o),
                l = t(706404),
                c = t.n(l),
                p = t(366567),
                d = t.n(p),
                h = t(477837),
                g = t.n(h),
                u = t(37405),
                m = t(291228);
            let f = g()(d().start, 200);

            function x(e) {
                var n, t;
                let r = e.ogDescription || e.description,
                    s = (null === (n = e.router) || void 0 === n ? void 0 : n.asPath) || "/docs";
                return (0, i.jsxs)(c(), {
                    children: [(0, i.jsx)("title", {
                        children: (t = e.title, s.includes("/cli") ? `${t} | CLI Commands | Vercel Docs` : s.includes("/get-started") ? `${t} | Get Started | Vercel Docs` : s.includes("/dashboard-features") ? `${t} | Dashboard Features | Vercel Docs` : s.includes("/guides") ? t : `${t} | Vercel Docs`)
                    }), (0, i.jsx)("meta", {
                        content: "summary_large_image",
                        name: "twitter:card"
                    }), (0, i.jsx)("meta", {
                        content: "@vercel",
                        name: "twitter:site"
                    }), (0, i.jsx)("meta", {
                        content: `${m.Fp} Documentation`,
                        property: "og:site_name"
                    }), (0, i.jsx)("meta", {
                        content: "website",
                        property: "og:type"
                    }), (0, i.jsx)("meta", {
                        content: e.ogTitle || e.title,
                        property: "og:title"
                    }), (0, i.jsx)("meta", {
                        content: "en",
                        property: "og:locale"
                    }), (0, i.jsx)("meta", {
                        content: e.url || `https://vercel.com${s}`,
                        property: "og:url"
                    }), (0, i.jsx)("meta", {
                        content: "width=device-width, initial-scale=1.0",
                        name: "viewport"
                    }), (0, i.jsx)("link", {
                        href: e.url || `https://vercel.com${s}`,
                        rel: "canonical"
                    }, "canonical"), e.description ? (0, i.jsx)("meta", {
                        content: e.description,
                        name: "description"
                    }) : null, r ? (0, i.jsx)("meta", {
                        content: r,
                        property: "og:description"
                    }) : null, (0, i.jsx)("meta", {
                        content: e.image || `https://vercel.com/api/dynamic-og?title=${encodeURIComponent(e.ogTitle||e.title)}`,
                        property: "og:image"
                    }), e.image ? (0, i.jsx)("meta", {
                        content: e.image,
                        property: "twitter:image"
                    }) : null, e.video ? [(0, i.jsx)("meta", {
                        content: "video",
                        property: "og:type"
                    }, "0"), (0, i.jsx)("meta", {
                        content: e.video,
                        property: "og:video"
                    }, "1"), (0, i.jsx)("meta", {
                        content: "video/mp4",
                        property: "og:video:type"
                    }, "2")] : null, (0, i.jsx)("link", {
                        href: `${u.X}/57x57.png`,
                        rel: "apple-touch-icon",
                        sizes: "57x57"
                    }), (0, i.jsx)("link", {
                        href: `${u.X}/60x60.png`,
                        rel: "apple-touch-icon",
                        sizes: "60x60"
                    }), (0, i.jsx)("link", {
                        href: `${u.X}/72x72.png`,
                        rel: "apple-touch-icon",
                        sizes: "72x72"
                    }), (0, i.jsx)("link", {
                        href: `${u.X}/76x76.png`,
                        rel: "apple-touch-icon",
                        sizes: "76x76"
                    }), (0, i.jsx)("link", {
                        href: `${u.X}/114x114.png`,
                        rel: "apple-touch-icon",
                        sizes: "114x114"
                    }), (0, i.jsx)("link", {
                        href: `${u.X}/120x120.png`,
                        rel: "apple-touch-icon",
                        sizes: "120x120"
                    }), (0, i.jsx)("link", {
                        href: `${u.X}/144x144.png`,
                        rel: "apple-touch-icon",
                        sizes: "144x144"
                    }), (0, i.jsx)("link", {
                        href: `${u.X}/152x152.png`,
                        rel: "apple-touch-icon",
                        sizes: "152x152"
                    }), (0, i.jsx)("link", {
                        href: `${u.X}/180x180.png`,
                        rel: "apple-touch-icon",
                        sizes: "180x180"
                    }), (0, i.jsx)("link", {
                        href: `${u.X}/32x32.png`,
                        rel: "icon",
                        sizes: "32x32",
                        type: "image/png"
                    }), (0, i.jsx)("link", {
                        href: `${u.X}/96x96.png`,
                        rel: "icon",
                        sizes: "96x96",
                        type: "image/png"
                    }), (0, i.jsx)("link", {
                        href: `${u.X}/16x16.png`,
                        rel: "icon",
                        sizes: "16x16",
                        type: "image/png"
                    }), (0, i.jsx)("link", {
                        href: "https://vercel.com/site.webmanifest",
                        rel: "manifest"
                    }), (0, i.jsx)("link", {
                        color: "#000000",
                        href: `${u.X}/safari-pinned-tab.svg`,
                        rel: "mask-icon"
                    }), (0, i.jsx)("link", {
                        href: `${u.X}/favicon.ico`,
                        rel: "shortcut icon"
                    }), (0, i.jsx)("meta", {
                        content: "var(--geist-background)",
                        name: "theme-color"
                    }), e.noIndex ? (0, i.jsx)("meta", {
                        content: "noindex",
                        name: "robots"
                    }) : (0, i.jsx)("meta", {
                        content: "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
                        name: "robots"
                    }), (0, i.jsx)("script", {
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@type": "WebPage",
                                url: e.url || `https://vercel.com${s}`,
                                headline: e.ogTitle || e.title || `${m.Fp} Documentation`,
                                image: e.image || "https://assets.vercel.com/image/upload/front/zeit/twitter-card.png",
                                name: e.ogTitle || e.title || `${m.Fp} Documentation`,
                                author: {
                                    "@type": "Person",
                                    name: m.Fp
                                },
                                publisher: {
                                    "@type": "Organization",
                                    logo: {
                                        "@type": "ImageObject",
                                        url: `${u.X}/favicon-96x96.png`
                                    },
                                    name: m.Fp
                                },
                                "@context": "http://schema.org",
                                ...e.description ? {
                                    description: e.description
                                } : void 0
                            })
                        },
                        type: "application/ld+json"
                    }), e.children]
                })
            }
            a().events.on("routeChangeStart", () => {
                a().isFallback || f()
            }), a().events.on("routeChangeComplete", () => {
                f.cancel(), d().done()
            }), a().events.on("routeChangeError", () => {
                f.cancel(), d().done()
            }), x.propTypes = {
                children: s().oneOfType([s().arrayOf(s().node), s().node]),
                description: s().string,
                image: s().string,
                noIndex: s().bool,
                ogDescription: s().string,
                ogTitle: s().string,
                router: s().object,
                title: s().string,
                url: s().string,
                video: s().string
            }, x.defaultProps = {
                noIndex: !1
            }, n.Z = (0, o.withRouter)(x)
        },
        251644: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return p
                }
            });
            var i = t(397458),
                r = t(869480),
                s = t.n(r),
                o = t(14517),
                a = t(652983),
                l = t(464239),
                c = t.n(l);

            function p(e) {
                let {
                    active: n,
                    isDocsHomepage: t = !1,
                    hasSecondaryNav: r = !1,
                    children: s,
                    innerRef: l,
                    fixed: p,
                    isGuide: d = !1
                } = e, h = (0, a.useRef)(null);
                return (0, a.useEffect)(() => {
                    let e = h.current,
                        n = document.getElementsByClassName("nav-link selected");
                    n.length > 0 && n[0].offsetTop + n[0].offsetHeight > e.offsetHeight / 2 && e.scrollTo({
                        top: n[0].offsetTop - n[0].offsetHeight,
                        behavior: "auto"
                    })
                }, [h]), (0, i.jsx)("aside", {
                    className: d ? (0, o.W)(c().sidebarGuides, {
                        active: n,
                        fixed: p,
                        [c().sidebarWithStyledScrollbar]: !t
                    }) : (0, o.W)(c().sidebar, {
                        active: n,
                        fixed: p,
                        [c().sidebarGuidesBackground]: !t,
                        [c().sidebarWithStyledScrollbar]: !t,
                        [c().sidebarWithSecondaryNav]: r
                    }),
                    ref: l || h,
                    children: (0, i.jsx)("div", {
                        children: s
                    })
                })
            }
            p.propTypes = {
                active: s().bool,
                background: s().bool,
                children: s().oneOfType([s().arrayOf(s().node), s().node]),
                fixed: s().bool,
                innerRef: s().oneOfType([s().func, s().shape({
                    current: s().instanceOf(s().element)
                })])
            }
        },
        909188: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return x
                }
            });
            var i = t(397458),
                r = t(700246),
                s = t(14517),
                o = t(537525),
                a = t.n(o),
                l = t(869480),
                c = t.n(l),
                p = t(652983),
                d = t(915694),
                h = t(24739),
                g = t(218748),
                u = t.n(g);
            class m extends p.Component {
                render() {
                    let {
                        component: e,
                        className: n,
                        children: t,
                        ...i
                    } = this.props;
                    return p.cloneElement(e, {
                        className: [n, e.props.className || ""].join(" "),
                        ...i
                    }, t)
                }
            }

            function f(e) {
                let n, t;
                let {
                    offsetTop: o,
                    noAnchor: l,
                    isBeta: c,
                    margin: p = !0,
                    prefix: g = "",
                    joinHeading: f = !1,
                    level: x = 0
                } = e, v = e.children, j = v.props.children || "", _ = e.id, b = j;
                return _ || ("object" != typeof j || Array.isArray(j) ? Array.isArray(j) && (b = j.map(e => "object" == typeof e ? e.props.name || e.props.children : e).join("")) : b = j.props.name || j.props.children, _ = function(e) {
                    let n = (0, h.i)(e);
                    return `${n.replace(/[?]/g,"").replace(/ /g,"-").toLowerCase()}`
                }(b)), n = l ? "#" : g.includes("#") ? `${g}/${_}` : `${g}#${_}`, t = "" === g ? `${_}` : g.includes("#") ? `${g.split("#")[1]}/${_}` : `${g}#${_}`, (0, i.jsxs)("div", {
                    className: (0, s.W)(e.description ? u().hasDescription : "", u().container),
                    children: [(0, i.jsxs)(m, {
                        className: u().header,
                        component: v,
                        "data-components-heading": !0,
                        children: [(0, i.jsx)("span", {
                            className: (0, s.W)(u().target, o ? u().offsetTop : ""),
                            id: t
                        }), f && 2 === x ? (0, i.jsx)("a", {
                            className: u().title,
                            href: n,
                            children: (0, i.jsx)("h2", {
                                children: j
                            })
                        }) : null, f && 3 === x ? (0, i.jsx)("a", {
                            className: u().title,
                            href: n,
                            children: (0, i.jsx)("h3", {
                                children: j
                            })
                        }) : null, !f && p ? (0, i.jsx)("a", {
                            className: u().title,
                            href: n,
                            children: j
                        }) : !f && (0, i.jsx)("a", {
                            className: u().titleNoMargin,
                            href: n,
                            children: j
                        }), !f && (0, i.jsx)("span", {
                            className: u().permalink,
                            children: (0, i.jsx)(d.r, {
                                size: "0.6em"
                            })
                        }), f ? (0, i.jsx)("span", {
                            className: u().permalinkJoin,
                            children: (0, i.jsx)(d.r, {
                                size: "0.6em"
                            })
                        }) : null, c ? (0, i.jsx)("span", {
                            className: u().pill,
                            children: c ? (0, i.jsx)(a(), {
                                href: "/docs/release-phases#beta",
                                children: (0, i.jsx)(r.C, {
                                    variant: "pink",
                                    children: "Beta"
                                })
                            }) : null
                        }) : null]
                    }), e.description ? (0, i.jsx)("span", {
                        className: u().description,
                        children: e.description
                    }) : null]
                })
            }
            m.propTypes = {
                children: c().oneOfType([c().arrayOf(c().node), c().node]),
                component: c().element,
                className: c().string
            }, f.propTypes = {
                children: c().oneOfType([c().arrayOf(c().node), c().node]),
                id: c().string,
                noAnchor: c().bool,
                offsetTop: c().bool,
                isBeta: c().bool,
                isEnt: c().bool,
                isPro: c().bool,
                description: c().string,
                margin: c().bool,
                prefix: c().string,
                joinHeading: c().bool,
                level: c().number
            };
            var x = f
        },
        24739: function(e, n, t) {
            "use strict";

            function i(e) {
                return e.replace(/<\/?h[1-3]>/gi, "").replace(/<\/?code>/gi, "").replace(/&#x27;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&#40;/gi, "(").replace(/&#41;/gi, ")").replace(/<\/?em>/gi, "").replace(/<\/-em>/gi, "").replace(/<-em>/gi, "").replace(/\(/gi, "").replace(/\)/gi, "").replace(/&amp;/gi, "and")
            }
            t.d(n, {
                i: function() {
                    return i
                }
            })
        },
        37405: function(e, n, t) {
            "use strict";
            t.d(n, {
                X: function() {
                    return r
                }
            });
            var i = t(333971);
            let r = "preview" === i.$A ? "https://assets.vercel.com/image/upload/front/favicon/vercel-preview-violet" : "https://assets.vercel.com/image/upload/front/favicon/vercel"
        },
        694752: function(e, n, t) {
            "use strict";
            t.d(n, {
                T: function() {
                    return o
                }
            });
            var i = t(652983);
            let r = "(prefers-reduced-motion: no-preference)",
                s = () => !window.matchMedia(r).matches;

            function o() {
                let [e, n] = (0, i.useState)(s);
                return (0, i.useEffect)(() => {
                    let e = window.matchMedia(r),
                        t = e => {
                            n(!e.matches)
                        };
                    return e.addEventListener ? e.addEventListener("change", t) : e.addListener(t), () => {
                        e.removeEventListener ? e.removeEventListener("change", t) : e.removeListener(t)
                    }
                }, []), e
            }
        },
        29180: function(e, n, t) {
            "use strict";
            t.d(n, {
                k: function() {
                    return r
                }
            });
            var i = t(361961);
            let r = (0, i.H)('<circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4"/><path d="M12 16V8"/>')
        },
        915694: function(e, n, t) {
            "use strict";
            t.d(n, {
                r: function() {
                    return r
                }
            });
            var i = t(361961);
            let r = (0, i.H)('<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>')
        },
        464239: function(e) {
            e.exports = {
                sidebar: "sidebar_sidebar__w60uf",
                sidebarGuides: "sidebar_sidebarGuides__t_k9r",
                sidebarWithSecondaryNav: "sidebar_sidebarWithSecondaryNav__HoQOf",
                sidebarGuidesBackground: "sidebar_sidebarGuidesBackground__BFezL",
                sidebarWithStyledScrollbar: "sidebar_sidebarWithStyledScrollbar__XSY5g",
                active: "sidebar_active__QOe6m"
            }
        },
        218748: function(e) {
            e.exports = {
                container: "linked-heading_container__HeGkH",
                description: "linked-heading_description__7d2uO",
                title: "linked-heading_title__QnfTO",
                hasDescription: "linked-heading_hasDescription__ZbWhr",
                header: "linked-heading_header__3fGdZ",
                pill: "linked-heading_pill__FRP0f",
                titleNoMargin: "linked-heading_titleNoMargin__gI9zh",
                isBeta: "linked-heading_isBeta__TB7se",
                target: "linked-heading_target__ceA86",
                permalink: "linked-heading_permalink__40PZ3",
                permalinkJoin: "linked-heading_permalinkJoin__6FQA7",
                offsetTop: "linked-heading_offsetTop__OhcMB"
            }
        }
    }
]);