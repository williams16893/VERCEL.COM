(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [80983], {
        230902: function(e, t, s) {
            "use strict";
            s.d(t, {
                HE: function() {
                    return j
                }
            });
            var r = s(397458),
                i = s(652983),
                a = s(14517),
                o = s(780163),
                n = s.n(o),
                l = s(83047),
                d = s.n(l);
            let c = (0, i.memo)(function(e) {
                    let {
                        title: t,
                        src: s,
                        size: o,
                        className: l
                    } = e, [c, h] = (0, i.useState)(!1);
                    return (0, r.jsx)("span", {
                        className: (0, a.W)(d().geistAvatar, l),
                        style: {
                            width: o,
                            height: o
                        },
                        children: s ? (0, r.jsx)(n(), {
                            alt: t,
                            className: c ? d().ready : d().loading,
                            height: o,
                            onLoadingComplete: () => h(!0),
                            src: s,
                            title: t,
                            width: o
                        }, s) : null
                    }, s)
                }),
                h = (0, i.memo)(function(e) {
                    let {
                        title: t,
                        size: s = 80,
                        height: i,
                        boxSize: a = null,
                        teamId: o = null,
                        username: n = null,
                        placeholder: l,
                        seed: d,
                        uid: h,
                        hash: p,
                        url: u,
                        className: m
                    } = e, g = parseInt(String(i || a || s));
                    if (l) return d ? (0, r.jsx)(c, {
                        className: m,
                        size: g,
                        src: `https://vercel.com/api/www/avatar?seed=${d}`,
                        title: t
                    }) : (0, r.jsx)(c, {
                        className: m,
                        size: g,
                        title: t
                    });
                    let x = function(e) {
                        let {
                            hash: t,
                            size: s,
                            teamId: r,
                            uid: i,
                            url: a,
                            username: o
                        } = e;
                        if (a) return a;
                        let n = new URL("https://vercel.com/api/www/avatar"),
                            l = t && /^[0-9a-f]{40}$/.test(t);
                        return l ? n.pathname = n.pathname + t : (o ? n.searchParams.append("u", o) : r ? n.searchParams.append("teamId", r) : i && (n.pathname = n.pathname + i), n.searchParams.append("s", String(2 * s))), n.toString()
                    }({
                        hash: p,
                        size: s,
                        teamId: o,
                        uid: h,
                        url: u,
                        username: n
                    });
                    return (0, r.jsx)(c, {
                        className: m,
                        size: g,
                        src: x,
                        title: t
                    })
                });
            var p = s(243801),
                u = s.n(p),
                m = s(869480),
                g = s.n(m),
                x = s(738620);

            function _(e) {
                let {
                    title: t,
                    slug: s,
                    data: i,
                    size: o,
                    className: n
                } = e;
                return (0, r.jsxs)("span", {
                    style: {
                        width: o,
                        height: o
                    },
                    title: t,
                    className: "jsx-c661fe43f9f76bee " + ((0, a.W)("geist-avatar", n) || ""),
                    children: [(0, r.jsx)(x.Image, {
                        data: i
                    }), (0, r.jsx)(u(), {
                        id: "c661fe43f9f76bee",
                        children: ".geist-avatar.jsx-c661fe43f9f76bee{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;display:inline-block;overflow:hidden;border:1px solid var(--accents-2);line-height:0;vertical-align:top;mask-image:-webkit-radial-gradient(circle,white,black);-webkit-mask-image:-webkit-radial-gradient(circle,white,black);background:var(--geist-background);-webkit-transition:border.2s ease,background.2s ease;-moz-transition:border.2s ease,background.2s ease;-o-transition:border.2s ease,background.2s ease;transition:border.2s ease,background.2s ease}.geist-avatar.jsx-c661fe43f9f76bee img.jsx-c661fe43f9f76bee{width:100%;height:100%}"
                    })]
                }, s)
            }

            function f(e) {
                let {
                    members: t,
                    limit: s = 3,
                    size: i = 22
                } = e, a = t.slice(0, s), o = t.slice(s);
                return (0, r.jsxs)("main", {
                    className: "jsx-771eb9558fae8fd7 avatar-group",
                    children: [a.map(e => e.datocmsResponsiveImageData ? (0, r.jsx)("span", {
                        className: "jsx-771eb9558fae8fd7 avatar",
                        children: (0, r.jsx)(_, {
                            data: e.datocmsResponsiveImageData,
                            name: e.name,
                            size: i,
                            slug: e.slug,
                            title: e.title
                        })
                    }, e.slug) : e.githubUser ? (0, r.jsx)("span", {
                        title: e.name,
                        className: "jsx-771eb9558fae8fd7 avatar",
                        children: (0, r.jsx)(c, {
                            size: i,
                            src: `https://github.com/${e.username}.png`,
                            title: e.name || e.username
                        })
                    }, e.username) : (0, r.jsx)("span", {
                        title: e.name,
                        className: "jsx-771eb9558fae8fd7 avatar",
                        children: e.username ? (0, r.jsx)(h, {
                            size: i,
                            title: e.name || e.username,
                            username: e.username
                        }) : (0, r.jsx)(h, {
                            size: i,
                            title: e.name || e.username,
                            uid: e.uid
                        })
                    }, e.uid || e.username)), o.length ? (0, r.jsxs)("span", {
                        className: "jsx-771eb9558fae8fd7 note",
                        children: ["+", o.length]
                    }) : null, (0, r.jsx)(u(), {
                        id: "771eb9558fae8fd7",
                        children: "main.jsx-771eb9558fae8fd7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.avatar.jsx-771eb9558fae8fd7{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.avatar.jsx-771eb9558fae8fd7:nth-child(n+2){margin-left:-10px}.note.jsx-771eb9558fae8fd7{font-size:13px;line-height:16px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;padding-left:5px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-right:auto}"
                    })]
                })
            }
            _.propTypes = {
                title: g().string,
                slug: g().string,
                data: g().object,
                size: g().string,
                className: g().string
            }, f.propTypes = {
                members: g().array,
                limit: g().number,
                size: g().number
            };
            var j = f
        },
        223884: function(e, t, s) {
            "use strict";
            s.d(t, {
                qZ: function() {
                    return f
                },
                iz: function() {
                    return P
                },
                rW: function() {
                    return L
                },
                VM: function() {
                    return d
                },
                Qb: function() {
                    return F
                },
                Gr: function() {
                    return A
                }
            });
            var r = s(397458),
                i = s(829747),
                a = s(14517),
                o = s(487554),
                n = s(19938),
                l = s.n(n);

            function d() {
                return (0, r.jsx)("div", {
                    className: l().heroSection,
                    children: (0, r.jsxs)("div", {
                        className: l().heroSectionInner,
                        children: [(0, r.jsx)("h1", {
                            className: l().title,
                            children: "Vercel Documentation"
                        }), (0, r.jsx)("p", {
                            className: l().byline,
                            children: "Vercel's Frontend Cloud gives developers frameworks, workflows, and infrastructure to build a faster, more personalized web."
                        }), (0, r.jsxs)("div", {
                            className: l().heroButtons,
                            children: [(0, r.jsx)("div", {
                                className: l().mobileOnly,
                                children: (0, r.jsx)(o.Z, {
                                    className: l().mobileOnly,
                                    href: "/docs/getting-started-with-vercel",
                                    children: "Start with a tutorial"
                                })
                            }), (0, r.jsx)("div", {
                                className: l().desktopOnly,
                                children: (0, r.jsx)(o.Z, {
                                    href: "/docs/getting-started-with-vercel",
                                    size: "large",
                                    suffix: (0, r.jsx)(i.o, {}),
                                    children: "Start with a tutorial"
                                })
                            }), (0, r.jsx)("span", {
                                className: l().heroButtonsText,
                                children: "or"
                            }), (0, r.jsx)(o.Z, {
                                className: l().heroButtonSecondary,
                                href: "/new",
                                size: "large",
                                type: "secondary",
                                children: "Deploy your first project"
                            }), (0, r.jsx)("span", {
                                className: (0, a.W)(l().desktopOnly, l().heroButtonsText),
                                children: "in minutes."
                            })]
                        })]
                    })
                })
            }
            var c = s(537525),
                h = s.n(c),
                p = s(882366),
                u = s(540851),
                m = s(230902);

            function g(e) {
                let {
                    post: t,
                    featured: s,
                    large: i
                } = e;
                return (0, r.jsxs)(h(), {
                    className: (0, a.W)(l().blogPost, {
                        [l().blogPostFeatured]: s,
                        [l().blogPostLarge]: i
                    }),
                    href: t.href,
                    children: [!!s && (0, r.jsx)("div", {
                        className: l().blogPostFeaturedIcon,
                        children: (0, r.jsx)(x, {})
                    }), (0, r.jsx)("div", {
                        className: l().blogPostIconWrapper,
                        children: (0, r.jsx)(t.Icon, {
                            size: 16
                        })
                    }), (0, r.jsxs)("div", {
                        className: l().blogPostText,
                        children: [!!s && (0, r.jsx)("p", {
                            className: l().blogPostDescription,
                            children: t.description
                        }), (0, r.jsx)("p", {
                            className: l().blogPostTitle,
                            children: t.title
                        })]
                    }), !s && (t.authors.length > 0 || t.publishedAt) ? (0, r.jsxs)("div", {
                        className: l().blogPostAuthorsAndDate,
                        children: [t.authors.length > 0 && (0, r.jsx)("div", {
                            className: l().blogPostAuthors,
                            children: (0, r.jsx)("div", {
                                children: (0, r.jsx)(m.HE, {
                                    members: t.authors.slice(0, 5),
                                    size: 25
                                })
                            })
                        }), t.publishedAt ? (0, r.jsx)("p", {
                            className: l().blogPostDate,
                            children: (0, p.Z)((0, u.Z)(t.publishedAt), "MMM. do yyyy")
                        }) : null]
                    }) : null]
                }, t.title)
            }

            function x(e) {
                return (0, r.jsx)("svg", {
                    fill: "none",
                    height: 353,
                    viewBox: "0 0 411 353",
                    width: 411,
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, r.jsxs)("g", {
                        stroke: "#fff",
                        strokeWidth: 1.5,
                        children: [(0, r.jsx)("path", {
                            d: "M205.603 2.003l203.603 349.995H2L205.603 2.003z"
                        }), (0, r.jsx)("path", {
                            d: "M155.124 264.498L205.604 177h-100.96l50.48 87.498z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, r.jsx)("path", {
                            d: "M256.083 264.498L306.563 177h-100.96l50.48 87.498z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, r.jsx)("path", {
                            d: "M205.603 176.999l50.48 87.499h-100.96l50.48-87.499zM205.603 2l50.48 87.499h-100.96L205.603 2zM357.043 264.498h-100.96l50.48-87.499v0M104.642 176.999l50.48 87.499H54.162",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, r.jsx)("path", {
                            d: "M155.124 264.498l50.48 87.499h-100.96l50.48-87.499zM155.124 89.5l50.48 87.5h-100.96l50.48-87.5z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, r.jsx)("path", {
                            d: "M256.083 264.498l50.48 87.499h-100.96l50.48-87.499zM256.083 89.5l50.48 87.5h-100.96l50.48-87.5z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, r.jsx)("path", {
                            d: "M306.563 352l50.48-87.499h-100.96L306.563 352zM104.642 352l50.48-87.499H54.162L104.642 352z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                })
            }
            var _ = s(170880);

            function f(e) {
                let {
                    posts: t
                } = e, s = t.map(function(e) {
                    var t;
                    return {
                        id: e.id,
                        title: e.title,
                        description: e.description || "",
                        authors: (null === (t = e.authors) || void 0 === t ? void 0 : t.map(e => ({
                            name: e.real,
                            username: e.vercel
                        }))) || [],
                        publishedAt: e.date,
                        href: `/blog/${e.slug}`,
                        Icon: _.H
                    }
                });
                return (0, r.jsxs)("div", {
                    className: l().blogPostsSection,
                    children: [(0, r.jsxs)("div", {
                        className: l().subheadingWrapper,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)("p", {
                                className: (0, a.W)(l().subheadingByline, l().subheadingBylineLeft),
                                children: "What's new"
                            }), (0, r.jsx)("h2", {
                                className: (0, a.W)(l().subheading, l().subheadingLeft),
                                children: "Stay in sync with Vercel updates"
                            })]
                        }), (0, r.jsx)("div", {
                            className: (0, a.W)(l().blogButtonWrapper, l().desktopOnly),
                            children: (0, r.jsx)(o.Z, {
                                href: "/blog",
                                type: "secondary",
                                width: "100%",
                                children: "View The Blog"
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: l().blogPosts,
                        children: s.map((e, t) => (0, r.jsx)(g, {
                            featured: 0 === t,
                            large: t < 2,
                            post: e
                        }, e.id))
                    }), (0, r.jsx)("div", {
                        className: (0, a.W)(l().blogButtonWrapper, l().mobileOnly),
                        children: (0, r.jsx)(o.Z, {
                            href: "/blog",
                            type: "secondary",
                            width: "100%",
                            children: "View The Blog"
                        })
                    })]
                })
            }
            var j = s(132950);
            let b = {
                "triple-venn": (0, r.jsx)(function() {
                    return (0, r.jsxs)("svg", {
                        "aria-hidden": "true",
                        fill: "none",
                        height: "62",
                        viewBox: "0 0 65 62",
                        width: "65",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsxs)("g", {
                            filter: "url(#filter0_d_126_5041)",
                            children: [(0, r.jsx)("rect", {
                                height: "37.8744",
                                rx: "18.9372",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                width: "37.8744",
                                x: "13.2802",
                                y: "4"
                            }), (0, r.jsx)("rect", {
                                height: "37.8744",
                                rx: "18.9372",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                width: "37.8744",
                                x: "3",
                                y: "22.1255"
                            }), (0, r.jsx)("rect", {
                                height: "37.8744",
                                rx: "18.9372",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                width: "37.8744",
                                x: "23.5604",
                                y: "22.1255"
                            })]
                        }), (0, r.jsx)("defs", {
                            children: (0, r.jsxs)("filter", {
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                height: "61.5",
                                id: "filter0_d_126_5041",
                                width: "63.9348",
                                x: "0.25",
                                y: "0.25",
                                children: [(0, r.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, r.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    result: "hardAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                }), (0, r.jsx)("feOffset", {
                                    dy: "-1"
                                }), (0, r.jsx)("feGaussianBlur", {
                                    stdDeviation: "1"
                                }), (0, r.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "out"
                                }), (0, r.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                }), (0, r.jsx)("feBlend", {
                                    in2: "BackgroundImageFix",
                                    mode: "normal",
                                    result: "effect1_dropShadow_126_5041"
                                }), (0, r.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "effect1_dropShadow_126_5041",
                                    mode: "normal",
                                    result: "shape"
                                })]
                            })
                        })]
                    })
                }, {}),
                arc: (0, r.jsx)(function() {
                    return (0, r.jsxs)("svg", {
                        "aria-hidden": "true",
                        fill: "none",
                        height: "62",
                        viewBox: "0 0 62 62",
                        width: "62",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsxs)("g", {
                            filter: "url(#filter0_d_126_5054)",
                            children: [(0, r.jsx)("path", {
                                clipRule: "evenodd",
                                d: "M3 4.03345V59.9988C3.056 59.9989 3.11187 59.9999 3.16787 59.9999C34.0107 59.9999 59.0156 34.946 59.0337 4.03345H3Z",
                                fillRule: "evenodd",
                                stroke: "#999999",
                                strokeWidth: "1.5"
                            }), (0, r.jsx)("path", {
                                d: "M3.06715 4.03345V59.9662",
                                stroke: "#999999",
                                strokeWidth: "1.5"
                            }), (0, r.jsx)("path", {
                                d: "M3.13434 4.03345L11.0137 59.4062",
                                stroke: "#999999",
                                strokeWidth: "1.5"
                            }), (0, r.jsx)("path", {
                                d: "M3.13434 4.03345L18.7997 57.7181",
                                stroke: "#999999",
                                strokeWidth: "1.5"
                            }), (0, r.jsx)("path", {
                                d: "M3.13434 4.03345L26.2669 54.9367",
                                stroke: "#999999",
                                strokeWidth: "1.5"
                            }), (0, r.jsx)("path", {
                                d: "M3.13434 4.03345L33.2632 51.1181",
                                stroke: "#999999",
                                strokeWidth: "1.5"
                            }), (0, r.jsx)("path", {
                                d: "M3.13434 4.03345L39.6462 46.3404",
                                stroke: "#999999",
                                strokeWidth: "1.5"
                            }), (0, r.jsx)("path", {
                                d: "M3.13434 4.03345L45.2857 40.7008",
                                stroke: "#999999",
                                strokeWidth: "1.5"
                            }), (0, r.jsx)("path", {
                                d: "M3.13434 4.03345L50.0672 34.3141",
                                stroke: "#999999",
                                strokeWidth: "1.5"
                            }), (0, r.jsx)("path", {
                                d: "M3.13434 4.03345L53.8935 27.3104",
                                stroke: "#999999",
                                strokeWidth: "1.5"
                            }), (0, r.jsx)("path", {
                                d: "M3.13434 4.03345L56.6864 19.8319",
                                stroke: "#999999",
                                strokeWidth: "1.5"
                            }), (0, r.jsx)("path", {
                                d: "M3.13434 4.03345L58.389 12.0312",
                                stroke: "#999999",
                                strokeWidth: "1.5"
                            }), (0, r.jsx)("path", {
                                d: "M3 4.06731H58.9668",
                                stroke: "#999999",
                                strokeWidth: "1.5"
                            })]
                        }), (0, r.jsx)("defs", {
                            children: (0, r.jsxs)("filter", {
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                height: "61.4663",
                                id: "filter0_d_126_5054",
                                width: "61.5341",
                                x: "0.25",
                                y: "0.283447",
                                children: [(0, r.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, r.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    result: "hardAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                }), (0, r.jsx)("feOffset", {
                                    dy: "-1"
                                }), (0, r.jsx)("feGaussianBlur", {
                                    stdDeviation: "1"
                                }), (0, r.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "out"
                                }), (0, r.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                                }), (0, r.jsx)("feBlend", {
                                    in2: "BackgroundImageFix",
                                    mode: "normal",
                                    result: "effect1_dropShadow_126_5054"
                                }), (0, r.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "effect1_dropShadow_126_5054",
                                    mode: "normal",
                                    result: "shape"
                                })]
                            })
                        })]
                    })
                }, {}),
                triangles: (0, r.jsx)(function() {
                    return (0, r.jsxs)("svg", {
                        "aria-hidden": "true",
                        fill: "none",
                        height: "63",
                        viewBox: "0 0 73 63",
                        width: "73",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsxs)("g", {
                            filter: "url(#filter0_d_126_5076)",
                            children: [(0, r.jsx)("path", {
                                d: "M36.5767 5L69.1535 60.9997H4L36.5767 5Z",
                                stroke: "currentColor",
                                strokeWidth: "1.5"
                            }), (0, r.jsx)("path", {
                                d: "M28.5001 46.9998L36.577 32.9998H20.4232L28.5001 46.9998Z",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                            }), (0, r.jsx)("path", {
                                d: "M44.6536 46.9998L52.7305 32.9998H36.5767L44.6536 46.9998Z",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                            }), (0, r.jsx)("path", {
                                d: "M36.5767 32.9995L44.6536 46.9994H28.4998L36.5767 32.9995Z",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                            }), (0, r.jsx)("path", {
                                d: "M36.5768 4.99951L44.6536 18.9994H28.4999L36.5768 4.99951Z",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                            }), (0, r.jsx)("path", {
                                d: "M60.8074 46.9994H44.6536L52.7305 32.9995V32.9995",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                            }), (0, r.jsx)("path", {
                                d: "M20.4229 32.9995L28.4998 46.9994H12.346",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                            }), (0, r.jsx)("path", {
                                d: "M28.5001 46.9998L36.577 60.9997H20.4232L28.5001 46.9998Z",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                            }), (0, r.jsx)("path", {
                                d: "M28.5001 18.9998L36.577 32.9997H20.4232L28.5001 18.9998Z",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                            }), (0, r.jsx)("path", {
                                d: "M44.6536 46.9998L52.7305 60.9997H36.5767L44.6536 46.9998Z",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                            }), (0, r.jsx)("path", {
                                d: "M44.6537 18.9998L52.7305 32.9997H36.5768L44.6537 18.9998Z",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                            }), (0, r.jsx)("path", {
                                d: "M52.7305 61L60.8074 47.0001H44.6536L52.7305 61Z",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                            }), (0, r.jsx)("path", {
                                d: "M20.4229 61L28.4998 47.0001H12.346L20.4229 61Z",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                            })]
                        }), (0, r.jsx)("defs", {
                            children: (0, r.jsxs)("filter", {
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                height: "62.2415",
                                id: "filter0_d_126_5076",
                                width: "71.7614",
                                x: "0.696045",
                                y: "0.508545",
                                children: [(0, r.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, r.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    result: "hardAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                }), (0, r.jsx)("feOffset", {
                                    dy: "-1"
                                }), (0, r.jsx)("feGaussianBlur", {
                                    stdDeviation: "1"
                                }), (0, r.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "out"
                                }), (0, r.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                }), (0, r.jsx)("feBlend", {
                                    in2: "BackgroundImageFix",
                                    mode: "normal",
                                    result: "effect1_dropShadow_126_5076"
                                }), (0, r.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "effect1_dropShadow_126_5076",
                                    mode: "normal",
                                    result: "shape"
                                })]
                            })
                        })]
                    })
                }, {}),
                circles: (0, r.jsx)(function() {
                    return (0, r.jsxs)("svg", {
                        "aria-hidden": "true",
                        fill: "none",
                        height: "61",
                        viewBox: "0 0 61 61",
                        width: "61",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsx)("g", {
                            filter: "url(#filter0_d_126_5101)",
                            children: (0, r.jsx)("path", {
                                clipRule: "evenodd",
                                d: "M50.1198 11.7651C39.094 0.80136 21.268 0.820513 10.2659 11.8226C-0.755314 22.8438 -0.755314 40.7128 10.2659 51.7341C21.2872 62.7554 39.1562 62.7554 50.1775 51.7341C61.1792 40.7324 61.1987 22.9072 50.236 11.8813L50.1779 11.823L50.1775 11.8226L50.1198 11.7651ZM49.1167 12.8832C49.1159 12.8824 49.115 12.8815 49.1142 12.8807C47.6532 11.4225 45.2867 11.4233 43.8268 12.8832C42.366 14.344 42.366 16.7124 43.8268 18.1732C45.2876 19.634 47.656 19.634 49.1167 18.1732C50.5775 16.7124 50.5775 14.344 49.1167 12.8832ZM37.5213 7.78106C34.654 8.26292 31.9039 9.6101 29.6914 11.8226C24.0343 17.4797 24.0343 26.6516 29.6914 32.3087C35.3484 37.9658 44.5204 37.9658 50.1775 32.3087C52.3899 30.0963 53.7371 27.3462 54.219 24.4791C54.4238 29.2021 52.723 33.9923 49.1167 37.5986C42.2918 44.4236 31.2263 44.4236 24.4014 37.5986C17.5764 30.7737 17.5764 19.7082 24.4014 12.8833C28.0077 9.27687 32.7981 7.57614 37.5213 7.78106ZM55.6011 27.5021C55.8993 33.5527 53.7378 39.7018 49.1168 44.3228C40.435 53.0046 26.3591 53.0046 17.6773 44.3228C8.99547 35.641 8.99547 21.5651 17.6773 12.8833C22.2981 8.26243 28.447 6.10101 34.4973 6.39898C30.4197 6.88566 26.4698 8.69353 23.3407 11.8226C15.9299 19.2333 15.9299 31.2486 23.3407 38.6593C30.7514 46.0701 42.7667 46.0701 50.1774 38.6593C53.3066 35.5301 55.1145 31.5799 55.6011 27.5021ZM16.6166 11.8226C20.4934 7.94583 25.3777 5.69077 30.4267 5.05742C23.5199 5.00476 16.5965 7.61337 11.3266 12.8832C0.891132 23.3187 0.891132 40.238 11.3266 50.6734C21.7621 61.1089 38.6813 61.1089 49.1168 50.6734C54.3866 45.4037 56.9952 38.4805 56.9426 31.5738C56.3092 36.6226 54.0542 41.5068 50.1775 45.3835C40.9099 54.6511 25.8842 54.6511 16.6166 45.3835C7.34903 36.1159 7.34903 21.0902 16.6166 11.8226ZM42.7661 11.8226C43.3564 11.2324 44.0524 10.8123 44.7931 10.5626C42.0986 10.0205 39.1919 10.794 37.1027 12.8833C33.7851 16.2009 33.7851 21.5798 37.1027 24.8974C40.4203 28.215 45.7992 28.215 49.1168 24.8974C51.2061 22.8081 51.9797 19.9013 51.4375 17.2067C51.1877 17.9475 50.7677 18.6436 50.1774 19.2339C48.1308 21.2804 44.8127 21.2804 42.7661 19.2339C40.7196 17.1873 40.7196 13.8692 42.7661 11.8226ZM40.9855 9.12215C37.3211 8.82637 33.5552 10.0801 30.752 12.8833C25.6807 17.9546 25.6807 26.1768 30.752 31.248C35.8233 36.3193 44.0455 36.3193 49.1168 31.248C51.92 28.4449 53.1737 24.679 52.8779 21.0147C52.4857 22.8263 51.5856 24.55 50.1775 25.9581C46.2741 29.8615 39.9454 29.8615 36.042 25.9581C32.1386 22.0547 32.1386 15.726 36.042 11.8226C37.4501 10.4145 39.1739 9.51434 40.9855 9.12215Z",
                                fill: "currentColor",
                                fillRule: "evenodd"
                            })
                        }), (0, r.jsx)("defs", {
                            children: (0, r.jsxs)("filter", {
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                height: "60.4434",
                                id: "filter0_d_126_5101",
                                width: "60.4434",
                                x: "0",
                                y: "0.556641",
                                children: [(0, r.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, r.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    result: "hardAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                }), (0, r.jsx)("feOffset", {
                                    dy: "-1"
                                }), (0, r.jsx)("feGaussianBlur", {
                                    stdDeviation: "1"
                                }), (0, r.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "out"
                                }), (0, r.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                                }), (0, r.jsx)("feBlend", {
                                    in2: "BackgroundImageFix",
                                    mode: "normal",
                                    result: "effect1_dropShadow_126_5101"
                                }), (0, r.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "effect1_dropShadow_126_5101",
                                    mode: "normal",
                                    result: "shape"
                                })]
                            })
                        })]
                    })
                }, {}),
                squircle: (0, r.jsx)(function() {
                    return (0, r.jsxs)("svg", {
                        "aria-hidden": "true",
                        fill: "none",
                        height: "62",
                        viewBox: "0 0 62 62",
                        width: "62",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsxs)("g", {
                            filter: "url(#filter0_d_126_5117)",
                            children: [(0, r.jsx)("rect", {
                                height: "56",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                width: "56",
                                x: "3",
                                y: "3.77832"
                            }), (0, r.jsx)("rect", {
                                height: "56",
                                rx: "28",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                width: "56",
                                x: "3",
                                y: "3.77832"
                            })]
                        }), (0, r.jsx)("defs", {
                            children: (0, r.jsxs)("filter", {
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                height: "61.5",
                                id: "filter0_d_126_5117",
                                width: "61.5",
                                x: "0.25",
                                y: "0.0283203",
                                children: [(0, r.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, r.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    result: "hardAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                }), (0, r.jsx)("feOffset", {
                                    dy: "-1"
                                }), (0, r.jsx)("feGaussianBlur", {
                                    stdDeviation: "1"
                                }), (0, r.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "out"
                                }), (0, r.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                                }), (0, r.jsx)("feBlend", {
                                    in2: "BackgroundImageFix",
                                    mode: "normal",
                                    result: "effect1_dropShadow_126_5117"
                                }), (0, r.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "effect1_dropShadow_126_5117",
                                    mode: "normal",
                                    result: "shape"
                                })]
                            })
                        })]
                    })
                }, {})
            };

            function k(e) {
                let {
                    type: t
                } = e;
                return b[t]
            }
            var v = s(650066),
                w = s.n(v);

            function y(e) {
                let {
                    guides: t
                } = e;
                return (0, r.jsx)("section", {
                    className: w().guides,
                    children: (0, r.jsx)("div", {
                        className: w().guidesScrollWrapper,
                        children: t.map(e => (0, r.jsx)(C, { ...e
                        }, e.title))
                    })
                })
            }

            function C(e) {
                let {
                    title: t,
                    subtitle: s,
                    icon: i,
                    href: a
                } = e;
                return (0, r.jsx)(h(), {
                    className: w().bookPerspective,
                    href: a,
                    children: (0, r.jsx)("div", {
                        className: w().bookRotateWrapper,
                        children: (0, r.jsxs)(j.K, {
                            className: w().book,
                            direction: "row",
                            children: [(0, r.jsx)("div", {
                                className: w().bind
                            }), (0, r.jsxs)(j.K, {
                                className: w().cover,
                                direction: "column",
                                flex: 1,
                                justify: "space-between",
                                children: [(0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("h3", {
                                        children: t
                                    }), (0, r.jsx)("p", {
                                        children: s
                                    })]
                                }), (0, r.jsx)(k, {
                                    type: i
                                })]
                            })]
                        })
                    })
                })
            }

            function L(e) {
                let {
                    title: t = "The Vercel Guides"
                } = e;
                return (0, r.jsxs)("div", {
                    className: l().guidesSection,
                    children: [(0, r.jsxs)("div", {
                        className: l().subheadingWrapper,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)("p", {
                                className: l().subheadingByline,
                                children: "Solving your circumstance"
                            }), (0, r.jsx)("h2", {
                                className: l().subheading,
                                children: t
                            })]
                        }), (0, r.jsx)("div", {
                            className: (0, a.W)(l().guidesButtonWrapper, l().desktopOnly),
                            children: (0, r.jsx)(o.Z, {
                                href: "/guides",
                                type: "secondary",
                                width: "100%",
                                children: "View More Guides"
                            })
                        })]
                    }), (0, r.jsx)(y, {
                        guides: N
                    }), (0, r.jsx)("div", {
                        className: (0, a.W)(l().guidesButtonWrapper, l().mobileOnly),
                        children: (0, r.jsx)(o.Z, {
                            href: "/guides",
                            type: "secondary",
                            width: "100%",
                            children: "View More Guides"
                        })
                    })]
                })
            }
            let N = [{
                title: "How to build a fullstack app with Next.js, Prisma and Postgres",
                subtitle: "Build, Deployment & Git",
                icon: "triple-venn",
                href: "/guides/nextjs-prisma-postgres"
            }, {
                title: "Integrating Next.js and Contentful for your headless CMS",
                subtitle: "Databases & CMS",
                icon: "triangles",
                href: "/guides/integrating-next-js-and-contentful-for-your-headless-cms"
            }, {
                title: "Using headless Wordpress with Next.js and Vercel",
                subtitle: "Databases & CMS",
                icon: "squircle",
                href: "/guides/wordpress-with-vercel"
            }, {
                title: "Building E-commerce Sites with Next.js and Shopify",
                subtitle: "Databases & CMS",
                icon: "circles",
                href: "/guides/building-ecommerce-sites-with-next-js-and-shopify"
            }];
            var S = s(652983),
                B = s(835093),
                W = s(876569),
                M = s(95285);

            function A(e) {
                let {
                    title: t = "Deploy a Template",
                    filter: s = [""],
                    frameworkFilter: i,
                    highlightedFrameworks: n,
                    filterResults: d,
                    parentFilter: c = "",
                    search: p = "",
                    limit: u = 3,
                    hardCodedTemplateSlugs: m = [],
                    templateOnly: g
                } = e, [x, _] = (0, S.useState)([]);
                (0, S.useEffect)(() => {
                    (async function() {
                        var e, t;
                        let r = I(p, i, c, s),
                            a = await (0, M.f)(r),
                            o = d && d.length > 0 ? function(e, t) {
                                let s = t.map(e => e.toLowerCase());
                                return e.filter(e => {
                                    let t = e.name.toLowerCase();
                                    return !s.some(e => t.includes(e))
                                })
                            }(a, d) : a;
                        _(function(e) {
                            let t = [...e].sort(function(e, t) {
                                return e.framework.includes("Next.js") ? -1 : t.framework.includes("Next.js") ? 1 : 0
                            });
                            return t
                        }((e = o, t = o = m.length > 0 ? e.filter(e => m.includes(e.slug)) : e, o = n && n.length > 0 ? T(t, n) : t)))
                    })().catch(e => {
                        console.error("Error fetching templates: ", e)
                    })
                }, [i, s, c, n, d, p, m]);
                let f = (e, t) => `/templates/${(t||"next.js").toLowerCase()}/${e}`,
                    j = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = "/templates";
                        if (0 === e.length) return t;
                        let s = e.map(e => `${encodeURIComponent(e.replace(/\s/g,"-")).toLowerCase()}`);
                        return `${t}/${s[0]}`
                    };
                return g ? (0, r.jsx)("div", {
                    className: l().templateSection,
                    style: {
                        paddingTop: 0,
                        paddingBottom: "16px"
                    },
                    children: (0, r.jsx)("div", {
                        className: l().templates,
                        children: x.slice(0, u).map(e => (0, r.jsx)(S.Fragment, {
                            children: (0, r.jsx)(S.Suspense, {
                                fallback: (0, r.jsx)(B.O, {
                                    height: 277,
                                    width: "100%"
                                }),
                                children: (0, r.jsxs)(h(), {
                                    className: l().template,
                                    href: f(e.slug, i),
                                    children: [(0, r.jsxs)("div", {
                                        className: l().templateImageWrapper,
                                        children: [(0, r.jsx)(W.E, {
                                            alt: e.name,
                                            className: l().templateImage,
                                            height: 337.5,
                                            srcDark: e.thumbnail,
                                            srcLight: e.thumbnail,
                                            width: 600
                                        }), (0, r.jsx)("div", {
                                            className: l().templateImageScrim
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: l().templateText,
                                        children: [(0, r.jsx)("p", {
                                            className: l().templateTitle,
                                            children: e.name
                                        }), (0, r.jsx)("p", {
                                            className: l().templateDescription,
                                            children: e.description
                                        })]
                                    })]
                                })
                            })
                        }, f(e.slug, i)))
                    })
                }) : (0, r.jsxs)("div", {
                    className: l().templateSection,
                    children: [(0, r.jsxs)("div", {
                        className: l().subheadingWrapper,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)("p", {
                                className: l().subheadingByline,
                                children: "Get started in minutes"
                            }), (0, r.jsx)("h2", {
                                className: l().subheading,
                                children: t
                            })]
                        }), (0, r.jsx)("div", {
                            className: (0, a.W)(l().templateButtonWrapper, l().desktopOnly),
                            children: (0, r.jsx)(o.Z, {
                                href: j(s),
                                type: "secondary",
                                width: "100%",
                                children: "View All Templates"
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: l().templates,
                        children: x.slice(0, u).map(e => (0, r.jsx)(S.Fragment, {
                            children: (0, r.jsx)(S.Suspense, {
                                fallback: (0, r.jsx)(B.O, {
                                    height: 277,
                                    width: "100%"
                                }),
                                children: (0, r.jsxs)(h(), {
                                    className: l().template,
                                    href: f(e.slug, i),
                                    children: [(0, r.jsxs)("div", {
                                        className: l().templateImageWrapper,
                                        children: [(0, r.jsx)(W.E, {
                                            alt: e.name,
                                            className: l().templateImage,
                                            height: 337.5,
                                            srcDark: e.thumbnail,
                                            srcLight: e.thumbnail,
                                            width: 600
                                        }), (0, r.jsx)("div", {
                                            className: l().templateImageScrim
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: l().templateText,
                                        children: [(0, r.jsx)("p", {
                                            className: l().templateTitle,
                                            children: e.name
                                        }), (0, r.jsx)("p", {
                                            className: l().templateDescription,
                                            children: e.description
                                        })]
                                    })]
                                })
                            })
                        }, f(e.slug, i)))
                    }), (0, r.jsx)("div", {
                        className: (0, a.W)(l().templateButtonWrapper, l().mobileOnly),
                        children: (0, r.jsx)(o.Z, {
                            href: j(s),
                            type: "secondary",
                            width: "100%",
                            children: "View All Templates"
                        })
                    })]
                })
            }
            let I = (e, t, s, r) => {
                    let i = (null == t ? void 0 : t.toLowerCase()) || "";
                    return e ? {
                        searchText: e
                    } : {
                        selectedFilters: { ...i ? {
                                framework: [i]
                            } : {},
                            [s.toLowerCase().replace(/\s/g, "")]: [...r]
                        }
                    }
                },
                T = (e, t) => {
                    let s = new Set(t),
                        r = {},
                        i = [];
                    for (let t of e)
                        for (let e of t.framework)
                            if (s.has(e) && !r[e]) {
                                i.push(t), r[e] = !0;
                                break
                            }
                    return i
                };

            function P(e) {
                let {
                    marginY: t = 0
                } = e;
                return (0, r.jsx)("hr", {
                    className: l().hr,
                    style: {
                        marginTop: t,
                        marginBottom: t
                    }
                })
            }
            var z = s(396112),
                O = s(251059),
                D = s(111640),
                Z = s(674346);

            function F() {
                return (0, r.jsxs)("div", {
                    className: l().productsSection,
                    children: [(0, r.jsx)("div", {
                        className: l().subheadingWrapper,
                        children: (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("p", {
                                className: l().subheadingByline,
                                children: "Our ecosystem"
                            }), (0, r.jsx)("h2", {
                                className: l().subheading,
                                children: "Explore Vercel's open source products"
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: l().products,
                        children: [{
                            name: "Next.js",
                            description: "A React framework that gives you building blocks to create web applications.",
                            Icon: z.Y,
                            href: "https://nextjs.org/"
                        }, {
                            name: "Turborepo",
                            description: "A high-performance build system for JavaScript and TypeScript codebases.",
                            Icon: O.m,
                            href: "https://turbo.build/repo"
                        }, {
                            name: "Turbopack",
                            beta: !0,
                            description: "An incremental bundler optimized for JavaScript and TypeScript, written in Rust.",
                            Icon: D.t,
                            href: "https://turbo.build/pack"
                        }].map(e => (0, r.jsxs)(h(), {
                            className: l().product,
                            href: e.href,
                            target: "blank",
                            children: [(0, r.jsx)("div", {
                                children: (0, r.jsx)(e.Icon, {
                                    size: 32
                                })
                            }), (0, r.jsxs)("div", {
                                className: l().productText,
                                children: [(0, r.jsxs)("p", {
                                    className: l().productTitle,
                                    children: [(0, r.jsx)("span", {
                                        children: e.name
                                    }), (0, r.jsx)("span", {
                                        className: l().productTitleArrow,
                                        children: (0, r.jsx)(Z.G, {
                                            color: "var(--accents-4)",
                                            size: 10
                                        })
                                    }), !!e.beta && (0, r.jsx)("span", {
                                        className: l().productTitleAlpha,
                                        children: "Beta"
                                    })]
                                }), (0, r.jsx)("p", {
                                    className: l().productDescription,
                                    children: e.description
                                })]
                            })]
                        }, e.name))
                    })]
                })
            }
        },
        95285: function(e, t, s) {
            "use strict";
            s.d(t, {
                G: function() {
                    return n
                },
                f: function() {
                    return l
                }
            });
            var r = s(840387),
                i = s.n(r);
            let a = i()("NNTAHQI9C5", "9d01acf41b6d23ca9d70249ff58ee7a5"),
                o = a.initIndex("templates"),
                n = 30;
            async function l() {
                let {
                    searchText: e,
                    selectedFilters: t,
                    page: s
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = await o.search(e || "", t ? {
                    filters: Object.keys(t).map(e => `${(t[e]||[]).map(t=>`${e}:"${t.replace("-"," ")}"`).join(" OR ")}`).filter(e => !!e).join(" AND "),
                    page: s || 0,
                    hitsPerPage: n,
                    clickAnalytics: !0
                } : {});
                return r.hits.map(e => {
                    let {
                        objectID: t,
                        name: s,
                        slug: i,
                        publisher: a,
                        thumbnail: o,
                        description: n,
                        framework: l,
                        demoUrl: d
                    } = e;
                    return {
                        objectID: t,
                        queryID: r.queryID || "",
                        name: s,
                        slug: i,
                        publisher: a,
                        thumbnail: o,
                        description: n,
                        framework: l,
                        demoUrl: d
                    }
                })
            }
        },
        170880: function(e, t, s) {
            "use strict";
            s.d(t, {
                H: function() {
                    return i
                }
            });
            var r = s(361961);
            let i = (0, r.H)('<path clipRule="evenodd" d="M12 3 2 19h20L12 3Z" strokeWidth="1.5"/>')
        },
        83047: function(e) {
            e.exports = {
                geistAvatar: "avatar_geistAvatar__4__Mm",
                loading: "avatar_loading__Ph7qF",
                ready: "avatar_ready__hx5_L"
            }
        },
        650066: function(e) {
            e.exports = {
                guides: "guides_guides__VpOAw",
                headings: "guides_headings__yA9zK",
                bookSpacer: "guides_bookSpacer__UhCNw",
                guidesListScrollView: "guides_guidesListScrollView__ALvr1",
                book: "guides_book__OnDgN",
                bind: "guides_bind__9xvQ6",
                cover: "guides_cover__v4NHi",
                bookPerspective: "guides_bookPerspective__wTX2k",
                bookRotateWrapper: "guides_bookRotateWrapper__crenb",
                buttons: "guides_buttons__BAjbH",
                guidesScrollWrapper: "guides_guidesScrollWrapper__CZJCg",
                slideControl: "guides_slideControl__y_Yf4",
                left: "guides_left__mRRfY",
                right: "guides_right__PwXO7",
                carouselControls: "guides_carouselControls__c7jqz",
                hide: "guides_hide__cXcUN"
            }
        },
        19938: function(e) {
            e.exports = {
                heroSection: "home-page_heroSection__WtnU8",
                heroSectionInner: "home-page_heroSectionInner__JB6bd",
                logoWrapper: "home-page_logoWrapper__hwAAl",
                title: "home-page_title__rtZzs",
                byline: "home-page_byline__XaVrN",
                titleBreak: "home-page_titleBreak__YSMy9",
                heroButtons: "home-page_heroButtons__y7_B_",
                heroButtonsText: "home-page_heroButtonsText__fIFpc",
                heroButtonSecondary: "home-page_heroButtonSecondary__zbxVV",
                subheadingWrapper: "home-page_subheadingWrapper__tV1kt",
                subheading: "home-page_subheading__E0Tv4",
                subheadingLeft: "home-page_subheadingLeft__x8UBk",
                subheadingByline: "home-page_subheadingByline__vrfdn",
                subheadingBylineLeft: "home-page_subheadingBylineLeft__ylmGa",
                templateSection: "home-page_templateSection__0On4s",
                templates: "home-page_templates__EWzvA",
                template: "home-page_template__gk__d",
                templateImageWrapper: "home-page_templateImageWrapper__kjY2T",
                templateImage: "home-page_templateImage__KgaIk",
                templateImageScrim: "home-page_templateImageScrim__8sfVD",
                templateText: "home-page_templateText__pbLuX",
                templateTitle: "home-page_templateTitle__7qJ2C",
                templateDescription: "home-page_templateDescription__NTZtH",
                templateButtonWrapper: "home-page_templateButtonWrapper__c6m7e",
                hr: "home-page_hr__zhLLc",
                productsSection: "home-page_productsSection__AeKZn",
                products: "home-page_products__VYTna",
                product: "home-page_product__bQbG6",
                productText: "home-page_productText__rIk6D",
                productTitle: "home-page_productTitle__0gjb5",
                productTitleArrow: "home-page_productTitleArrow__h2K6J",
                productTitleAlpha: "home-page_productTitleAlpha__ypY_p",
                productDescription: "home-page_productDescription__EvVnq",
                guidesSection: "home-page_guidesSection__mdsyJ",
                guides: "home-page_guides__bSE4Y",
                guide: "home-page_guide__HOVwg",
                guidesButtonWrapper: "home-page_guidesButtonWrapper__8_MjT",
                blogPostsSection: "home-page_blogPostsSection__2XjHh",
                subtitle: "home-page_subtitle__oI7Gd",
                subtitleByline: "home-page_subtitleByline__VFUzk",
                blogPosts: "home-page_blogPosts__YSQKU",
                blogPost: "home-page_blogPost__Gx2bd",
                blogPostIconWrapper: "home-page_blogPostIconWrapper__KQzxF",
                blogPostText: "home-page_blogPostText__MbyhA",
                blogPostTitle: "home-page_blogPostTitle__bibum",
                blogPostAuthorsAndDate: "home-page_blogPostAuthorsAndDate__A_5z0",
                blogPostAuthors: "home-page_blogPostAuthors__LP0BJ",
                blogPostAuthorNames: "home-page_blogPostAuthorNames__j0MEw",
                blogPostDate: "home-page_blogPostDate__LbsOX",
                blogPostLarge: "home-page_blogPostLarge__Bp17y",
                blogPostDescription: "home-page_blogPostDescription__rLtcn",
                blogPostFeatured: "home-page_blogPostFeatured__xGbjc",
                blogPostFeaturedIcon: "home-page_blogPostFeaturedIcon__Np3Gx",
                blogButtonWrapper: "home-page_blogButtonWrapper__pGAcM",
                lastUpdatedSection: "home-page_lastUpdatedSection__5m7bq",
                lastUpdatedText: "home-page_lastUpdatedText__5Z14x",
                navigationSection: "home-page_navigationSection__tJH85",
                navigationSectionLabel: "home-page_navigationSectionLabel__gCSUf",
                navigationSectionTitle: "home-page_navigationSectionTitle__VAJh8",
                navigationSectionIcon: "home-page_navigationSectionIcon__prOt0",
                desktopOnly: "home-page_desktopOnly__5_EHE",
                mobileOnly: "home-page_mobileOnly__pF7W0",
                lightOnly: "home-page_lightOnly__BJeR3",
                darkOnly: "home-page_darkOnly__h7sf1"
            }
        }
    }
]);