"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [18070], {
        218070: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return E
                },
                G: function() {
                    return _
                }
            });
            var r = n(397458),
                i = n(652983),
                a = n(706404),
                l = n.n(a),
                o = n(366567),
                s = n.n(o),
                c = n(195269),
                p = n(477837),
                u = n.n(p),
                m = n(426326),
                f = n.n(m),
                x = n(333971),
                h = n(37405),
                g = n(628987);
            let j = "https://assets.vercel.com/image/upload/front",
                d = [{
                    sizes: "57x57",
                    url: `${h.X}/57x57.png`
                }, {
                    sizes: "60x60",
                    url: `${h.X}/60x60.png`
                }, {
                    sizes: "72x72",
                    url: `${h.X}/72x72.png`
                }, {
                    sizes: "76x76",
                    url: `${h.X}/76x76.png`
                }, {
                    sizes: "114x114",
                    url: `${h.X}/114x114.png`
                }, {
                    sizes: "120x120",
                    url: `${h.X}/120x120.png`
                }, {
                    sizes: "144x144",
                    url: `${h.X}/144x144.png`
                }, {
                    sizes: "152x152",
                    url: `${h.X}/152x152.png`
                }, {
                    sizes: "180x180",
                    url: `${h.X}/180x180.png`
                }],
                y = "https://vercel.com",
                v = {
                    title: {
                        default: "Dashboard",
                        template: `%s – ${x.c5}`
                    },
                    themeColor: "var(--geist-background)",
                    manifest: `${y}/site.webmanifest`,
                    twitter: {
                        site: "@vercel",
                        images: `${j}/vercel/twitter-card.png`
                    },
                    appleWebApp: {
                        title: x.c5
                    },
                    icons: {
                        shortcut: {
                            type: "image/x-icon",
                            rel: "icon shortcut",
                            url: `${h.X}/favicon.ico`
                        },
                        apple: d
                    },
                    alternates: {
                        types: {
                            "application/rss+xml": `${y}/atom`
                        }
                    },
                    openGraph: {
                        type: "website",
                        title: {
                            default: "Dashboard",
                            template: `%s – ${x.c5}`
                        },
                        images: `${j}/vercel/twitter-card.png`
                    }
                };
            var w = n(749210);

            function k(e) {
                let {
                    metadata: t
                } = e, n = null !== (0, w.useRouter)();
                return n ? (0, r.jsx)(b, {
                    metadata: t
                }) : null
            }

            function b(e) {
                var t;
                let {
                    metadata: n
                } = e, a = (0, g.usePathname)(), {
                    resolvedTheme: o
                } = (0, c.F)(), s = (0, i.useMemo)(() => {
                    var e, t;
                    return { ...v,
                        ...n,
                        title: {
                            absolute: L(n.title, v.title)
                        },
                        openGraph: { ...v.openGraph,
                            ...n.openGraph,
                            title: {
                                absolute: L(null === (e = n.openGraph) || void 0 === e ? void 0 : e.title, null === (t = v.openGraph) || void 0 === t ? void 0 : t.title)
                            }
                        },
                        twitter: { ...v.twitter,
                            ...n.twitter
                        }
                    }
                }, [n]), p = G(s.authors), u = G(s.keywords), m = G(s.assets), f = G(s.bookmarks), x = (t = s.robots) ? "string" == typeof t ? t : [t.index ? "index" : "noindex", t.follow ? "follow" : "nofollow", t.noarchive ? "noarchive" : null, t.nosnippet ? "nosnippet" : null, t.noimageindex ? "noimageindex" : null, t.nocache ? "nocache" : null, t.notranslate ? "notranslate" : null, t["max-video-preview"] ? `max-video-preview:${t["max-video-preview"]}` : null, t["max-image-preview"] ? `max-image-preview:${t["max-image-preview"]}` : null, t["max-snippet"] ? `max-snippet:${t["max-snippet"]}` : null].filter(Boolean).join(",") || null : null;
                return (0, r.jsxs)(l(), {
                    children: [(0, r.jsx)("meta", {
                        content: "width=device-width, initial-scale=1.0",
                        name: "viewport"
                    }), (0, r.jsx)("meta", {
                        content: "en",
                        httpEquiv: "Content-Language"
                    }), "object" == typeof s.title && s.title && "absolute" in s.title ? (0, r.jsx)("title", {
                        children: s.title.absolute
                    }) : null, s.description ? (0, r.jsx)("meta", {
                        content: s.description,
                        name: "description"
                    }) : null, s.applicationName ? (0, r.jsx)("meta", {
                        content: s.applicationName,
                        name: "application-name"
                    }) : null, s.manifest ? (0, r.jsx)("link", {
                        fetchpriority: "low",
                        href: s.manifest.toString(),
                        rel: "manifest"
                    }) : null, s.generator ? (0, r.jsx)("meta", {
                        content: s.generator,
                        name: "generator"
                    }) : null, u ? (0, r.jsx)("meta", {
                        content: u.join(","),
                        name: "keywords"
                    }) : null, s.referrer ? (0, r.jsx)("meta", {
                        content: s.referrer,
                        name: "referrer"
                    }) : null, s.creator ? (0, r.jsx)("meta", {
                        content: s.creator,
                        name: "creator"
                    }) : null, s.publisher ? (0, r.jsx)("meta", {
                        content: s.publisher,
                        name: "publisher"
                    }) : null, s.abstract ? (0, r.jsx)("meta", {
                        content: s.abstract,
                        name: "abstract"
                    }) : null, s.category ? (0, r.jsx)("meta", {
                        content: s.category,
                        name: "category"
                    }) : null, s.classification ? (0, r.jsx)("meta", {
                        content: s.classification,
                        name: "classification"
                    }) : null, p ? p.map(e => (0, r.jsxs)(r.Fragment, {
                        children: [e.url ? (0, r.jsx)("link", {
                            fetchpriority: "low",
                            href: e.url.toString(),
                            rel: "author"
                        }) : null, e.name ? (0, r.jsx)("meta", {
                            content: e.name,
                            name: "author"
                        }) : null]
                    })) : null, (0, r.jsx)("meta", {
                        content: s.colorScheme ? ? o,
                        name: "color-scheme"
                    }), (0, r.jsx)("meta", {
                        content: "dark" === o ? "#000000" : "#ffffff",
                        name: "theme-color"
                    }), (0, r.jsx)("meta", {
                        content: "dark" === o ? "#000000" : "#ffffff",
                        name: "msapplication-TileColor"
                    }), x ? (0, r.jsx)("meta", {
                        content: x,
                        name: "robots"
                    }) : null, m ? m.map(e => (0, r.jsx)("link", {
                        fetchpriority: "low",
                        href: e,
                        rel: "assets"
                    }, e)) : null, f ? f.map(e => (0, r.jsx)("link", {
                        fetchpriority: "low",
                        href: e,
                        rel: "bookmarks"
                    }, e)) : null, s.other ? Object.entries(s.other).map(e => {
                        let [t, n] = e;
                        return (0, r.jsx)("meta", {
                            content: Array.isArray(n) ? n.map(String).join(",") : String(n),
                            name: t
                        }, t)
                    }) : null, s.appleWebApp && "object" == typeof s.appleWebApp ? (0, r.jsx)(X, {
                        metadata: s.appleWebApp
                    }) : null, s.openGraph ? (0, r.jsx)(S, {
                        metadata: s.openGraph
                    }) : null, s.twitter ? (0, r.jsx)(z, {
                        metadata: s.twitter
                    }) : null, s.icons ? (0, r.jsx)(A, {
                        metadata: s.icons
                    }) : null, s.alternates ? (0, r.jsx)(R, {
                        metadata: s.alternates,
                        pathname: a
                    }) : null, (0, r.jsx)("link", {
                        color: "#000000",
                        fetchpriority: "low",
                        href: `${h.X}/safari-pinned-tab.svg`,
                        rel: "mask-icon"
                    }, "favicon-mask"), (0, r.jsx)("link", {
                        crossOrigin: "anonymous",
                        href: "https://assets.vercel.com",
                        rel: "preconnect"
                    }), (0, r.jsx)("link", {
                        crossOrigin: "anonymous",
                        href: "https://avatars.githubusercontent.com",
                        rel: "preconnect"
                    }, "preconnect-github")]
                })
            }

            function $(e) {
                let {
                    metadata: t
                } = e;
                return (0, r.jsx)("title", {
                    children: L(t.title, v.title)
                })
            }

            function X(e) {
                let {
                    metadata: t
                } = e;
                return (0, r.jsx)(r.Fragment, {
                    children: t.title ? (0, r.jsx)("meta", {
                        content: t.title,
                        name: "apple-mobile-web-app-title"
                    }) : null
                })
            }

            function S(e) {
                let {
                    metadata: t
                } = e, n = G(t.images);
                return (0, r.jsxs)(r.Fragment, {
                    children: ["type" in t ? (0, r.jsx)("meta", {
                        content: t.type,
                        property: "og:type"
                    }, "og:type") : null, t.title && "object" == typeof t.title && "absolute" in t.title ? (0, r.jsx)("meta", {
                        content: t.title.absolute,
                        property: "og:title"
                    }, "og:title") : null, t.url ? (0, r.jsx)("meta", {
                        content: t.url.toString(),
                        property: "og:url"
                    }, "og:url") : null, t.description ? (0, r.jsx)("meta", {
                        content: t.description,
                        property: "og:description"
                    }, "og:desc") : null, n ? n.map(e => "string" == typeof e || e instanceof URL ? (0, r.jsx)("meta", {
                        content: e.toString(),
                        property: "og:image"
                    }, e.toString()) : (0, r.jsx)("meta", {
                        content: e.url.toString(),
                        property: "og:image"
                    }, e.url.toString())) : null, n ? n.map(e => "string" == typeof e || e instanceof URL || !e.alt ? null : (0, r.jsx)("meta", {
                        content: e.alt,
                        property: "og:image:alt"
                    }, `${e.url.toString()}-alt`)) : null]
                })
            }

            function z(e) {
                let {
                    metadata: t
                } = e, n = G(t.images);
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.site ? (0, r.jsx)("meta", {
                        content: t.site,
                        name: "twitter:site"
                    }, "twitter:site") : null, "card" in t ? (0, r.jsx)("meta", {
                        content: t.card,
                        name: "twitter:card"
                    }, "twitter:card") : null, n ? n.map(e => "string" == typeof e || e instanceof URL ? (0, r.jsx)("meta", {
                        content: e.toString(),
                        name: "twitter:image"
                    }, e.toString()) : (0, r.jsx)("meta", {
                        content: e.url.toString(),
                        name: "twitter:image"
                    }, e.url.toString())) : null, n ? n.map(e => "string" == typeof e || e instanceof URL || !e.alt ? null : (0, r.jsx)("meta", {
                        content: e.alt,
                        name: "twitter:image:alt"
                    }, `${e.url.toString()}-alt`)) : null]
                })
            }

            function A(e) {
                let {
                    metadata: t
                } = e, n = [];
                if ("string" == typeof t || t instanceof URL) n.push({
                    url: t
                });
                else if (Array.isArray(t))
                    for (let e of t) "string" == typeof e || e instanceof URL ? n.push({
                        url: e
                    }) : n.push(e);
                else {
                    let e = G(t.icon);
                    if (e)
                        for (let t of e) "string" == typeof t || t instanceof URL ? n.push({
                            url: t
                        }) : n.push(t);
                    let r = G(t.shortcut);
                    if (r)
                        for (let e of r) "string" == typeof e || e instanceof URL ? n.push({
                            url: e,
                            rel: "icon shortcut"
                        }) : n.push({ ...e,
                            rel: "icon shortcut"
                        });
                    let i = G(t.apple);
                    if (i)
                        for (let e of i) "string" == typeof e || e instanceof URL ? n.push({
                            url: e,
                            rel: "apple-touch-icon"
                        }) : n.push({ ...e,
                            rel: "apple-touch-icon"
                        })
                }
                return (0, r.jsx)(r.Fragment, {
                    children: n.map(e => (0, r.jsx)("link", {
                        fetchpriority: e.fetchPriority ? ? "low",
                        href: e.url.toString(),
                        rel: e.rel ? ? "icon",
                        sizes: e.sizes,
                        type: e.type
                    }, e.url.toString()))
                })
            }

            function R(e) {
                let {
                    pathname: t,
                    metadata: n
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [n.canonical ? (0, r.jsx)("link", {
                        href: U(n.canonical),
                        rel: "canonical"
                    }, "canonical") : (0, r.jsx)("link", {
                        href: function(e) {
                            if (!e) return "";
                            let t = /.*\[.*\].*/.test(e) && /.*\[.*\].*/.test(e);
                            return t ? "" : `https://vercel.com${e}`
                        }(t),
                        rel: "canonical"
                    }, "canonical"), n.types ? Object.entries(n.types).map(e => {
                        let [t, n] = e;
                        return n ? Array.isArray(n) ? n.map(e => (0, r.jsx)("link", {
                            href: U(e),
                            rel: "alternate",
                            title: e.title,
                            type: t
                        }, U(e))) : (0, r.jsx)("link", {
                            href: U(n),
                            rel: "alternate",
                            type: t
                        }, U(n)) : null
                    }) : null]
                })
            }

            function L(e, t) {
                let n = "string" != typeof e && e && "template" in e ? e.template : null;
                return n || (n = "string" != typeof t && t && "template" in t ? t.template : null), C(n, e) || C(n, t)
            }

            function C(e, t) {
                if ("string" == typeof t) return F(e, t);
                if (t) {
                    if ("default" in t) return F(e, t.default);
                    if ("absolute" in t && t.absolute) return t.absolute
                }
                return ""
            }

            function F(e, t) {
                return e ? e.replace(/%s/g, t) : t
            }

            function U(e) {
                return "string" == typeof e || e instanceof URL ? e.toString() : e.url.toString()
            }

            function G(e) {
                return null == e ? null : Array.isArray(e) ? e : [e]
            }
            let O = "https://assets.vercel.com/image/upload/front",
                P = u()(() => s().start(), 500);

            function _(e) {
                let {
                    metadata: t,
                    title: n,
                    titlePostfix: i
                } = e;
                if (t) return (0, r.jsx)(l(), {
                    children: (0, r.jsx)($, {
                        metadata: t
                    })
                });
                let a = x.c5;
                return n && (a = i ? `${n} - ${x.c5}` : n), (0, r.jsx)(l(), {
                    children: (0, r.jsx)("title", {
                        children: a
                    })
                })
            }

            function E(e) {
                let {
                    metadata: t,
                    ...n
                } = e;
                return t ? (0, r.jsx)(k, {
                    metadata: t
                }) : (0, r.jsx)(N, { ...n
                })
            }

            function N(e) {
                let {
                    title: t,
                    titlePostfix: n,
                    titlePostfixSeparator: i,
                    description: a,
                    canonicalPath: o,
                    image: s,
                    type: p,
                    metaDescription: u,
                    noIndex: f,
                    keywords: g,
                    colorScheme: j = "dark light",
                    children: d
                } = e, y = (0, m.useRouter)(), {
                    resolvedTheme: v
                } = (0, c.F)(), w = n && ` ${i??"–"} ${x.c5}`, k = w ? (t ? ? "") + w : t, b = `https://${x.pV}${y.asPath}`, $ = o ? ? y.asPath.split("?")[0], X = /.*\[.*\].*/.test($) && /.*\[.*\].*/.test(y.pathname), S = !X, z = S ? `https://vercel.com${$}` : "", A = S || y.isReady;
                return (0, r.jsxs)(l(), {
                    children: [(0, r.jsx)("title", {
                        children: k
                    }), A ? (0, r.jsx)("link", {
                        href: z,
                        rel: "canonical"
                    }, "canonical") : null, g && g.length > 0 ? (0, r.jsx)("meta", {
                        content: g.join(", "),
                        name: "keywords"
                    }) : null, (0, r.jsx)("meta", {
                        content: s ? "summary_large_image" : "summary",
                        name: "twitter:card"
                    }), p ? (0, r.jsx)("meta", {
                        content: p,
                        property: "og:type"
                    }) : null, u ? (0, r.jsx)("meta", {
                        content: u,
                        name: "description"
                    }) : null, (0, r.jsx)("meta", {
                        content: s || `${O}/vercel/twitter-card.png`,
                        name: "twitter:image"
                    }, "twitter-image"), (0, r.jsx)("meta", {
                        content: k,
                        property: "og:title"
                    }, "og-title"), (0, r.jsx)("meta", {
                        content: b,
                        property: "og:url"
                    }, "og-url"), a ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("meta", {
                            content: a,
                            name: "description"
                        }), (0, r.jsx)("meta", {
                            content: a,
                            property: "og:description"
                        })]
                    }) : null, (0, r.jsx)("meta", {
                        content: s || `${O}/vercel/twitter-card.png`,
                        property: "og:image"
                    }, "og-image"), f ? (0, r.jsx)("meta", {
                        content: "noindex",
                        name: "robots"
                    }) : (0, r.jsx)("meta", {
                        content: "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
                        name: "robots"
                    }), (0, r.jsx)("meta", {
                        content: "width=device-width, initial-scale=1.0",
                        name: "viewport"
                    }), (0, r.jsx)("meta", {
                        content: "en",
                        httpEquiv: "Content-Language"
                    }), j ? (0, r.jsx)("meta", {
                        content: j,
                        name: "color-scheme"
                    }) : null, (0, r.jsx)("link", {
                        crossOrigin: "anonymous",
                        href: "https://assets.vercel.com",
                        rel: "preconnect"
                    }), (0, r.jsx)("link", {
                        crossOrigin: "anonymous",
                        href: "https://avatars.githubusercontent.com",
                        rel: "preconnect"
                    }, "preconnect-github"), (0, r.jsx)("meta", {
                        content: "@vercel",
                        name: "twitter:site"
                    }), (0, r.jsx)("meta", {
                        content: x.c5,
                        name: "apple-mobile-web-app-title"
                    }), (0, r.jsx)("meta", {
                        content: "dark" === v ? "#000000" : "#ffffff",
                        name: "theme-color"
                    }), (0, r.jsx)("meta", {
                        content: "dark" === v ? "#000000" : "#ffffff",
                        name: "msapplication-TileColor"
                    }), (0, r.jsx)("link", {
                        fetchpriority: "low",
                        href: `${h.X}/57x57.png`,
                        rel: "apple-touch-icon",
                        sizes: "57x57"
                    }, "favicon-57"), (0, r.jsx)("link", {
                        fetchpriority: "low",
                        href: `${h.X}/60x60.png`,
                        rel: "apple-touch-icon",
                        sizes: "60x60"
                    }, "favicon-60"), (0, r.jsx)("link", {
                        fetchpriority: "low",
                        href: `${h.X}/72x72.png`,
                        rel: "apple-touch-icon",
                        sizes: "72x72"
                    }, "favicon-72"), (0, r.jsx)("link", {
                        fetchpriority: "low",
                        href: `${h.X}/76x76.png`,
                        rel: "apple-touch-icon",
                        sizes: "76x76"
                    }, "favicon-76"), (0, r.jsx)("link", {
                        fetchpriority: "low",
                        href: `${h.X}/114x114.png`,
                        rel: "apple-touch-icon",
                        sizes: "114x114"
                    }, "favicon-114"), (0, r.jsx)("link", {
                        fetchpriority: "low",
                        href: `${h.X}/120x120.png`,
                        rel: "apple-touch-icon",
                        sizes: "120x120"
                    }, "favicon-120"), (0, r.jsx)("link", {
                        fetchpriority: "low",
                        href: `${h.X}/144x144.png`,
                        rel: "apple-touch-icon",
                        sizes: "144x144"
                    }, "favicon-144"), (0, r.jsx)("link", {
                        fetchpriority: "low",
                        href: `${h.X}/152x152.png`,
                        rel: "apple-touch-icon",
                        sizes: "152x152"
                    }, "favicon-152"), (0, r.jsx)("link", {
                        fetchpriority: "low",
                        href: `${h.X}/180x180.png`,
                        rel: "apple-touch-icon",
                        sizes: "180x180"
                    }, "favicon-180"), (0, r.jsx)("link", {
                        href: `${h.X}/favicon.ico`,
                        rel: "icon shortcut",
                        type: "image/x-icon"
                    }, "active-favicon"), (0, r.jsx)("link", {
                        fetchpriority: "low",
                        href: "/site.webmanifest",
                        rel: "manifest"
                    }, "site-manifest"), (0, r.jsx)("link", {
                        color: "#000000",
                        fetchpriority: "low",
                        href: `${h.X}/safari-pinned-tab.svg`,
                        rel: "mask-icon"
                    }, "favicon-mask"), (0, r.jsx)("link", {
                        href: "/atom",
                        rel: "alternate",
                        title: `${x.c5} News`,
                        type: "application/atom+xml"
                    }, "atom-feed"), d]
                })
            }
            f().events.on("routeChangeStart", () => {
                f().isFallback || P()
            }), f().events.on("routeChangeComplete", () => {
                P.cancel(), s().done()
            }), f().events.on("routeChangeError", () => {
                P.cancel(), s().done()
            })
        },
        37405: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return i
                }
            });
            var r = n(333971);
            let i = "preview" === r.$A ? "https://assets.vercel.com/image/upload/front/favicon/vercel-preview-violet" : "https://assets.vercel.com/image/upload/front/favicon/vercel"
        }
    }
]);