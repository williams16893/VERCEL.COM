(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [13172], {
        244993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MDXContext: function() {
                    return a
                },
                MDXProvider: function() {
                    return l
                },
                mdx: function() {
                    return m
                },
                useMDXComponents: function() {
                    return c
                },
                withMDXComponents: function() {
                    return u
                }
            });
            var r = n(652983);

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var a = r.createContext({}),
                u = function(e) {
                    return function(t) {
                        var n = c(t.components);
                        return r.createElement(e, o({}, t, {
                            components: n
                        }))
                    }
                },
                c = function(e) {
                    var t = r.useContext(a),
                        n = t;
                    return e && (n = "function" == typeof e ? e(t) : s(s({}, t), e)), n
                },
                l = function(e) {
                    var t = c(e.components);
                    return r.createElement(a.Provider, {
                        value: t
                    }, e.children)
                },
                f = {
                    inlineCode: "code",
                    wrapper: function(e) {
                        var t = e.children;
                        return r.createElement(r.Fragment, {}, t)
                    }
                },
                p = r.forwardRef(function(e, t) {
                    var n = e.components,
                        o = e.mdxType,
                        i = e.originalType,
                        a = e.parentName,
                        u = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                            }
                            return o
                        }(e, ["components", "mdxType", "originalType", "parentName"]),
                        l = c(n),
                        p = l["".concat(a, ".").concat(o)] || l[o] || f[o] || i;
                    return n ? r.createElement(p, s(s({
                        ref: t
                    }, u), {}, {
                        components: n
                    })) : r.createElement(p, s({
                        ref: t
                    }, u))
                });

            function m(e, t) {
                var n = arguments,
                    o = t && t.mdxType;
                if ("string" == typeof e || o) {
                    var i = n.length,
                        s = Array(i);
                    s[0] = p;
                    var a = {};
                    for (var u in t) hasOwnProperty.call(t, u) && (a[u] = t[u]);
                    a.originalType = e, a.mdxType = "string" == typeof e ? e : o, s[1] = a;
                    for (var c = 2; c < i; c++) s[c] = n[c];
                    return r.createElement.apply(null, s)
                }
                return r.createElement.apply(null, n)
            }
            p.displayName = "MDXCreateElement"
        },
        409043: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/docs", function() {
                return n(566455)
            }])
        },
        566455: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return a
                },
                default: function() {
                    return u
                }
            });
            var r = n(397458),
                o = (n(615757), n(616439)),
                i = n(223884),
                s = n(274606),
                a = !0;

            function u(e) {
                let {
                    posts: t
                } = e;
                return (0, r.jsxs)(o.ZP, {
                    isDocsHomepage: !0,
                    meta: {
                        title: "Vercel Documentation",
                        description: "Vercel's Frontend Cloud gives developers frameworks, workflows, and infrastructure to build a faster, more personalized web"
                    },
                    showBackground: !1,
                    children: [(0, r.jsx)(i.VM, {}), (0, r.jsx)(i.Gr, {
                        filter: ["starter"],
                        highlightedFrameworks: ["Next.js", "Nuxt", "Svelte"],
                        parentFilter: "type"
                    }), (0, r.jsx)(i.iz, {}), (0, r.jsx)(i.Qb, {}), (0, r.jsx)(i.iz, {}), (0, r.jsx)(i.rW, {}), (0, r.jsx)(i.iz, {}), (0, r.jsx)(i.qZ, {
                        posts: t
                    }), (0, r.jsx)(s.O, {}), (0, r.jsx)(i.iz, {
                        marginY: 40
                    }), null]
                })
            }
        },
        366567: function(e, t, n) {
            var r, o;
            void 0 !== (o = "function" == typeof(r = function() {
                var e, t, n, r = {};
                r.version = "0.2.0";
                var o = r.settings = {
                    minimum: .08,
                    easing: "ease",
                    positionUsing: "",
                    speed: 200,
                    trickle: !0,
                    trickleRate: .02,
                    trickleSpeed: 800,
                    showSpinner: !0,
                    barSelector: '[role="bar"]',
                    spinnerSelector: '[role="spinner"]',
                    parent: "body",
                    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                };

                function i(e, t, n) {
                    return e < t ? t : e > n ? n : e
                }
                r.configure = function(e) {
                    var t, n;
                    for (t in e) void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (o[t] = n);
                    return this
                }, r.status = null, r.set = function(e) {
                    var t = r.isStarted();
                    e = i(e, o.minimum, 1), r.status = 1 === e ? null : e;
                    var n = r.render(!t),
                        u = n.querySelector(o.barSelector),
                        c = o.speed,
                        l = o.easing;
                    return n.offsetWidth, s(function(t) {
                        var i, s;
                        "" === o.positionUsing && (o.positionUsing = r.getPositioningCSS()), a(u, (i = e, (s = "translate3d" === o.positionUsing ? {
                            transform: "translate3d(" + (-1 + i) * 100 + "%,0,0)"
                        } : "translate" === o.positionUsing ? {
                            transform: "translate(" + (-1 + i) * 100 + "%,0)"
                        } : {
                            "margin-left": (-1 + i) * 100 + "%"
                        }).transition = "all " + c + "ms " + l, s)), 1 === e ? (a(n, {
                            transition: "none",
                            opacity: 1
                        }), n.offsetWidth, setTimeout(function() {
                            a(n, {
                                transition: "all " + c + "ms linear",
                                opacity: 0
                            }), setTimeout(function() {
                                r.remove(), t()
                            }, c)
                        }, c)) : setTimeout(t, c)
                    }), this
                }, r.isStarted = function() {
                    return "number" == typeof r.status
                }, r.start = function() {
                    r.status || r.set(0);
                    var e = function() {
                        setTimeout(function() {
                            r.status && (r.trickle(), e())
                        }, o.trickleSpeed)
                    };
                    return o.trickle && e(), this
                }, r.done = function(e) {
                    return e || r.status ? r.inc(.3 + .5 * Math.random()).set(1) : this
                }, r.inc = function(e) {
                    var t = r.status;
                    return t ? ("number" != typeof e && (e = (1 - t) * i(Math.random() * t, .1, .95)), t = i(t + e, 0, .994), r.set(t)) : r.start()
                }, r.trickle = function() {
                    return r.inc(Math.random() * o.trickleRate)
                }, e = 0, t = 0, r.promise = function(n) {
                    return n && "resolved" !== n.state() && (0 === t && r.start(), e++, t++, n.always(function() {
                        0 == --t ? (e = 0, r.done()) : r.set((e - t) / e)
                    })), this
                }, r.render = function(e) {
                    if (r.isRendered()) return document.getElementById("nprogress");
                    c(document.documentElement, "nprogress-busy");
                    var t = document.createElement("div");
                    t.id = "nprogress", t.innerHTML = o.template;
                    var n, i, s = t.querySelector(o.barSelector),
                        u = e ? "-100" : (-1 + (r.status || 0)) * 100,
                        l = document.querySelector(o.parent);
                    return a(s, {
                        transition: "all 0 linear",
                        transform: "translate3d(" + u + "%,0,0)"
                    }), !o.showSpinner && (i = t.querySelector(o.spinnerSelector)) && p(i), l != document.body && c(l, "nprogress-custom-parent"), l.appendChild(t), t
                }, r.remove = function() {
                    l(document.documentElement, "nprogress-busy"), l(document.querySelector(o.parent), "nprogress-custom-parent");
                    var e = document.getElementById("nprogress");
                    e && p(e)
                }, r.isRendered = function() {
                    return !!document.getElementById("nprogress")
                }, r.getPositioningCSS = function() {
                    var e = document.body.style,
                        t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
                    return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
                };
                var s = (n = [], function(e) {
                        n.push(e), 1 == n.length && function e() {
                            var t = n.shift();
                            t && t(e)
                        }()
                    }),
                    a = function() {
                        var e = ["Webkit", "O", "Moz", "ms"],
                            t = {};

                        function n(n, r, o) {
                            var i;
                            r = t[i = (i = r).replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
                                return t.toUpperCase()
                            })] || (t[i] = function(t) {
                                var n = document.body.style;
                                if (t in n) return t;
                                for (var r, o = e.length, i = t.charAt(0).toUpperCase() + t.slice(1); o--;)
                                    if ((r = e[o] + i) in n) return r;
                                return t
                            }(i)), n.style[r] = o
                        }
                        return function(e, t) {
                            var r, o, i = arguments;
                            if (2 == i.length)
                                for (r in t) void 0 !== (o = t[r]) && t.hasOwnProperty(r) && n(e, r, o);
                            else n(e, i[1], i[2])
                        }
                    }();

                function u(e, t) {
                    return ("string" == typeof e ? e : f(e)).indexOf(" " + t + " ") >= 0
                }

                function c(e, t) {
                    var n = f(e),
                        r = n + t;
                    u(n, t) || (e.className = r.substring(1))
                }

                function l(e, t) {
                    var n, r = f(e);
                    u(e, t) && (n = r.replace(" " + t + " ", " "), e.className = n.substring(1, n.length - 1))
                }

                function f(e) {
                    return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
                }

                function p(e) {
                    e && e.parentNode && e.parentNode.removeChild(e)
                }
                return r
            }) ? r.call(t, n, t, e) : r) && (e.exports = o)
        }
    },
    function(e) {
        e.O(0, [49774, 33586, 25843, 82366, 21468, 80163, 81050, 38620, 98838, 26222, 54252, 97222, 60797, 42798, 50043, 80983, 92888, 40179], function() {
            return e(e.s = 409043)
        }), _N_E = e.O()
    }
]);