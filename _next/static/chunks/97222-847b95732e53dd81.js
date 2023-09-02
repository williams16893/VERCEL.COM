(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [97222], {
        948557: function(e, t, n) {
            "use strict";
            n.d(t, {
                Su: function() {
                    return f
                },
                LI: function() {
                    return p.Z
                },
                aV: function() {
                    return h
                },
                UL: function() {
                    return r.Z
                }
            });
            var r = n(617846),
                a = n(397458),
                i = n(243801),
                s = n.n(i),
                l = n(869480),
                o = n.n(l),
                c = n(938187),
                d = n(940215),
                p = n(482972);

            function u(e) {
                let {
                    items: t,
                    cross: n,
                    ...r
                } = e;
                return (0, a.jsxs)("ul", { ...r,
                    className: "jsx-587c81db58064c11 " + (r && null != r.className && r.className || ""),
                    children: [t.map(e => (0, a.jsxs)(p.Z, {
                        children: [(0, a.jsx)("span", {
                            className: "jsx-587c81db58064c11 icon",
                            children: n ? (0, a.jsx)(c.a, {
                                color: "var(--geist-error)",
                                fill: !0
                            }) : (0, a.jsx)(d.I, {
                                color: "var(--geist-success)",
                                fill: !0
                            })
                        }), " ", e]
                    }, e)), (0, a.jsx)(s(), {
                        id: "587c81db58064c11",
                        children: "ul.jsx-587c81db58064c11{padding:0;list-style-type:none;margin-left:0}.icon.jsx-587c81db58064c11>svg{vertical-align:text-bottom;margin-right:.25em;-webkit-transform:translatey(.05em);-moz-transform:translatey(.05em);-ms-transform:translatey(.05em);-o-transform:translatey(.05em);transform:translatey(.05em)}"
                    })]
                })
            }
            u.propTypes = {
                cross: o().bool,
                items: o().array
            };
            var f = u,
                x = n(652983);

            function m(e) {
                let {
                    columns: t,
                    halfGap: n,
                    children: r
                } = e;
                return (0, a.jsxs)("div", {
                    className: s().dynamic([
                        ["c62dd714adc0ac73", [n ? "var(--geist-gap-quarter)" : "var(--geist-gap-half)", 100 / t[0], 100 / t[1], 100 / t[2]]]
                    ]) + " geist-list-item",
                    children: [r, (0, a.jsx)(s(), {
                        id: "c62dd714adc0ac73",
                        dynamic: [n ? "var(--geist-gap-quarter)" : "var(--geist-gap-half)", 100 / t[0], 100 / t[1], 100 / t[2]],
                        children: `.geist-list-item.__jsx-style-dynamic-selector{padding:${n?"var(--geist-gap-quarter)":"var(--geist-gap-half)"};-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:${100/t[0]}%;-ms-flex-preferred-size:${100/t[0]}%;flex-basis:${100/t[0]}%;min-width:0}@media screen and (max-width:960px){.geist-list-item.__jsx-style-dynamic-selector{-webkit-flex-basis:${100/t[1]}%;-ms-flex-preferred-size:${100/t[1]}%;flex-basis:${100/t[1]}%}}@media screen and (max-width:600px){.geist-list-item.__jsx-style-dynamic-selector{-webkit-flex-basis:${100/t[2]}%;-ms-flex-preferred-size:${100/t[2]}%;flex-basis:${100/t[2]}%}}`
                    })]
                })
            }

            function h(e) {
                let {
                    columnsDesktop: t = 1,
                    columnsTablet: n = 1,
                    columnsMobile: r = 1,
                    halfGap: i = !1,
                    children: l
                } = e;
                return (0, a.jsxs)("div", {
                    className: s().dynamic([
                        ["418123bb862059a1", [i ? "var(--geist-gap-quarter-negative)" : "var(--geist-gap-half-negative)"]]
                    ]) + " geist-list",
                    children: [x.Children.map(l, e => e ? (0, a.jsx)(m, {
                        columns: [Number(t), Number(n), Number(r)],
                        halfGap: i,
                        children: e
                    }) : void 0), (0, a.jsx)(s(), {
                        id: "418123bb862059a1",
                        dynamic: [i ? "var(--geist-gap-quarter-negative)" : "var(--geist-gap-half-negative)"],
                        children: `.geist-list.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 ${i?"var(--geist-gap-quarter-negative)":"var(--geist-gap-half-negative)"}}`
                    })]
                })
            }
            m.propTypes = {
                children: o().oneOfType([o().arrayOf(o().node), o().node]),
                columns: o().array,
                halfGap: o().bool
            }, h.propTypes = {
                children: o().oneOfType([o().arrayOf(o().node), o().node]),
                column: o().number,
                columnsDesktop: o().number,
                columnsMobile: o().number,
                columnsTablet: o().number,
                halfGap: o().bool
            }, o().oneOfType([o().arrayOf(o().node), o().node])
        },
        482972: function(e, t, n) {
            "use strict";
            var r = n(397458),
                a = n(243801),
                i = n.n(a);
            t.Z = function(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsxs)("li", {
                    className: "jsx-69ae52f59c500ad5",
                    children: [t, (0, r.jsx)(i(), {
                        id: "69ae52f59c500ad5",
                        children: "li.jsx-69ae52f59c500ad5{font-size:var(--font-size-primary);line-height:var(--line-height-primary);margin-bottom:10px}li.jsx-69ae52f59c500ad5>ul{margin-top:10px}li.jsx-69ae52f59c500ad5>p:last-child{margin-bottom:0;margin-top:0}"
                    })]
                })
            }
        },
        617846: function(e, t, n) {
            "use strict";
            var r = n(397458),
                a = n(243801),
                i = n.n(a),
                s = n(869480),
                l = n.n(s);

            function o(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsxs)("ul", {
                    className: "jsx-6e2633217609d087",
                    children: [t, (0, r.jsx)(i(), {
                        id: "6e2633217609d087",
                        children: 'ul.jsx-6e2633217609d087{padding:0;list-style-type:none;margin-left:15px}ul.jsx-6e2633217609d087>li::before{content:"-";display:inline-block;color:var(--accents-6);position:relative;margin-left:-15px;margin-right:8px}'
                    })]
                })
            }
            o.propTypes = {
                children: l().oneOfType([l().arrayOf(l().node), l().node])
            }, t.Z = o
        },
        176784: function(e, t, n) {
            "use strict";
            n.d(t, {
                iA: function() {
                    return p
                },
                RM: function() {
                    return m
                },
                pj: function() {
                    return u
                },
                ss: function() {
                    return b
                },
                bi: function() {
                    return f
                },
                SC: function() {
                    return g
                },
                LX: function() {
                    return u
                }
            });
            var r = n(397458),
                a = n(243801),
                i = n.n(a),
                s = n(652983),
                l = n(14517),
                o = n(869480),
                c = n.n(o);

            function d(e) {
                let {
                    children: t,
                    className: n = "",
                    selectPadding: a = !1,
                    ...s
                } = e;
                return (0, r.jsxs)("div", {
                    className: "jsx-6ddda11620387f83 " + ((a ? "table-select" : "table-container") || ""),
                    children: [(0, r.jsx)("table", { ...s,
                        className: "jsx-6ddda11620387f83 " + ((0, l.W)("table", n) || ""),
                        children: t
                    }), (0, r.jsx)(i(), {
                        id: "6ddda11620387f83",
                        children: ".table-container.jsx-6ddda11620387f83{margin:40px -24px;overflow-x:auto;-webkit-overflow-scrolling:touch;word-break:normal}.table-select.jsx-6ddda11620387f83{margin:10px -24px;overflow-x:auto;-webkit-overflow-scrolling:touch}table.jsx-6ddda11620387f83{min-width:640px;padding:0 24px;border-collapse:separate;border-spacing:0;width:100%}table.jsx-6ddda11620387f83 td:nth-child(1){border-left:1px solid transparent;min-width:120px}table.jsx-6ddda11620387f83 td:last-child{border-right:1px solid transparent}table.jsx-6ddda11620387f83 thead th:nth-child(1){border-bottom:1px solid var(--accents-2);border-left:1px solid var(--accents-2);-webkit-border-radius:6px 0px 0px 6px;-moz-border-radius:6px 0px 0px 6px;border-radius:6px 0px 0px 6px;border-top:1px solid var(--accents-2)}table.jsx-6ddda11620387f83 thead th:last-child{border-bottom:1px solid var(--accents-2);-webkit-border-radius:0 6px 6px 0;-moz-border-radius:0 6px 6px 0;border-radius:0 6px 6px 0;border-right:1px solid var(--accents-2);border-top:1px solid var(--accents-2)}table.jsx-6ddda11620387f83 thead th{background:var(--accents-1);border-bottom:1px solid var(--accents-2);border-top:1px solid var(--accents-2)}table.jsx-6ddda11620387f83 th,table.jsx-6ddda11620387f83 td{padding:0 10px;text-align:left;vertical-align:top}table.jsx-6ddda11620387f83 th>div{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 0;line-height:var(--line-height-small);font-size:var(--font-size-small)}table.jsx-6ddda11620387f83 td>div{min-height:50px;padding:12px 0;line-height:24px}table.jsx-6ddda11620387f83 td.multi-line>div{min-height:none;padding:14px 0}table.jsx-6ddda11620387f83 th{color:var(--accents-5);font-size:var(--font-size-small);line-height:var(--line-height-small);font-weight:400;letter-spacing:0}table.jsx-6ddda11620387f83 th.right>div,table.jsx-6ddda11620387f83 td.right>div{-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}table.jsx-6ddda11620387f83 th.center>div,table.jsx-6ddda11620387f83 td.center>div{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}table.jsx-6ddda11620387f83 tr.disabled{pointer-events:none;opacity:.6}table.jsx-6ddda11620387f83 tr.selectable{cursor:pointer}table.jsx-6ddda11620387f83 tr.selectable:hover{background-color:var(--accents-1)}"
                    })]
                })
            }
            d.propTypes = {
                children: c().node,
                className: c().string
            };
            var p = d;
            class u extends s.Component {
                static# e = (() => {
                    this.propTypes = {
                        align: c().oneOf(["left", "center", "right"]),
                        children: c().node,
                        className: c().string,
                        innerRef: c().func,
                        value: c().any,
                        disabled: c().bool
                    }
                })();
                render() {
                    let {
                        align: e,
                        children: t,
                        className: n,
                        innerRef: r,
                        disabled: a,
                        ...i
                    } = this.props;
                    return (0, s.createElement)("td", { ...i,
                        className: (0, l.W)("table-cell", {
                            right: "right" === e,
                            center: "center" === e,
                            disabled: a
                        }, n),
                        ref: r
                    }, t && "div" === t.type ? t : (0, s.createElement)("div", {}, t))
                }
            }
            class f extends s.Component {
                static# e = (() => {
                    this.propTypes = {
                        align: c().oneOf(["left", "center", "right"]),
                        children: c().node,
                        className: c().string,
                        innerRef: c().func,
                        value: c().any,
                        disabled: c().bool
                    }
                })();
                render() {
                    let {
                        align: e,
                        children: t,
                        className: n,
                        innerRef: r,
                        disabled: a,
                        ...i
                    } = this.props;
                    return (0, s.createElement)("th", { ...i,
                        className: (0, l.W)("head-cell", {
                            right: "right" === e,
                            center: "center" === e,
                            disabled: a
                        }, n),
                        ref: r
                    }, void 0 !== t ? t && "div" === t.type ? t : (0, s.createElement)("div", {}, t) : null)
                }
            }

            function x(e) {
                let {
                    children: t,
                    ...n
                } = e;
                return (0, r.jsxs)("tbody", { ...n,
                    className: "jsx-64c13424ca1bc52 " + (n && null != n.className && n.className || ""),
                    children: [t, (0, r.jsx)(i(), {
                        id: "64c13424ca1bc52",
                        children: "tbody.jsx-64c13424ca1bc52 tr:not(:last-child) td{border-bottom:1px solid var(--accents-2)}thead+tbody.jsx-64c13424ca1bc52 tr:last-child td{border-bottom:1px solid var(--accents-2)}tbody.jsx-64c13424ca1bc52 td{color:var(--accents-6);font-size:var(--font-size-small);line-height:var(--line-height-small)}"
                    })]
                })
            }
            x.propTypes = {
                children: c().node
            };
            var m = x;
            class h extends s.Component {
                static# e = (() => {
                    this.propTypes = {
                        children: c().node,
                        className: c().string,
                        innerRef: c().func
                    }
                })();
                render() {
                    let {
                        children: e,
                        innerRef: t,
                        ...n
                    } = this.props;
                    return (0, r.jsx)("thead", { ...n,
                        ref: t,
                        children: s.Children.map(e, (e, t) => e ? (0, s.cloneElement)(e, {
                            column: t
                        }) : null)
                    })
                }
            }
            var b = h,
                g = function(e) {
                    let {
                        ariaRole: t = "row",
                        children: n,
                        className: a,
                        disabled: i,
                        onClick: s,
                        selectable: o
                    } = e;
                    return (0, r.jsx)("tr", {
                        "aria-roledescription": t,
                        className: (0, l.W)("row", {
                            selectable: o,
                            disabled: i
                        }, a),
                        onClick: s,
                        children: n
                    })
                }
        },
        841274: function(e, t, n) {
            "use strict";
            var r = n(397458),
                a = n(243801),
                i = n.n(a),
                s = n(869480),
                l = n.n(s);

            function o(e) {
                let {
                    children: t,
                    ...n
                } = e;
                return (0, r.jsxs)("p", { ...n,
                    className: "jsx-4b089061b337253f caption",
                    children: [t, (0, r.jsx)(i(), {
                        id: "4b089061b337253f",
                        children: "p.jsx-4b089061b337253f{color:var(--accents-5);font-size:var(--font-size-small);line-height:var(--line-height-small);margin:16px 0 40px 0;text-align:center}"
                    })]
                })
            }

            function c(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsxs)("code", {
                    className: "jsx-6ccb7d128b4f0003",
                    children: [t, (0, r.jsx)(i(), {
                        id: "6ccb7d128b4f0003",
                        children: 'code.jsx-6ccb7d128b4f0003{color:var(--accents-5);font-family:var(--font-mono)}code.jsx-6ccb7d128b4f0003::before{content:"`"}code.jsx-6ccb7d128b4f0003::after{content:"`"}'
                    })]
                })
            }
            o.propTypes = {
                children: l().oneOfType([l().arrayOf(l().node), l().node])
            }, c.propTypes = {
                children: l().oneOfType([l().arrayOf(l().node), l().node])
            }, o.Code = c, t.Z = o
        },
        640832: function(e, t, n) {
            "use strict";
            n.d(t, {
                EK: function() {
                    return f
                },
                ZM: function() {
                    return x
                },
                _q: function() {
                    return m
                },
                wW: function() {
                    return o.wW
                }
            });
            var r = n(397458),
                a = n(14517),
                i = n(652983),
                s = n(668589),
                l = n(628987),
                o = n(133909),
                c = n(874793),
                d = n(905210),
                p = n.n(d);
            let u = e => {
                if (!e) return "";
                switch (e) {
                    case "jsx":
                        return "js";
                    case "tsx":
                        return "ts";
                    default:
                        return e
                }
            };

            function f(e) {
                let {
                    children: t,
                    className: n,
                    filename: a,
                    custom: d,
                    framework: p,
                    "package-manager": f,
                    "data-language": x,
                    "vercel-cli": m
                } = e, {
                    framework: h,
                    language: b,
                    packageManager: g,
                    toggleLanguage: v,
                    toggleFramework: j,
                    togglePackageManager: y
                } = (0, o.HD)(), _ = (0, l.usePathname)(), w = u(x) === b.slug, k = p && p === h.slug, N = p && "all" === p, C = f && f === g.slug, z = (0, i.useMemo)(() => {
                    let e = c.Ec.filter(e => {
                            var t;
                            return null === (t = e.supportedFeatures) || void 0 === t ? void 0 : t.some(e => null == _ ? void 0 : _.includes(e))
                        }),
                        t = e.map(e => ({
                            value: e.slug,
                            label: e.name
                        }));
                    return t
                }, [_]), T = (0, o.d7)();
                return k && w ? (0, r.jsx)(s.Z, {
                    className: n,
                    custom: d,
                    filename: a,
                    switcher: {
                        options: c.Mj.map(e => ({
                            value: e.name,
                            label: e.name
                        })),
                        value: b.name,
                        onChange: v
                    },
                    tabs: {
                        id: T,
                        value: h.slug,
                        onChange: j,
                        options: z
                    },
                    children: t
                }) : C && N ? (0, r.jsx)(s.Z, {
                    className: n,
                    custom: d,
                    tabs: {
                        id: T,
                        value: g.slug,
                        onChange: y,
                        options: c.jH.map(e => ({
                            value: e.slug,
                            label: e.name
                        }))
                    },
                    children: t
                }) : m && N ? (0, r.jsx)(s.Z, {
                    className: n,
                    filename: a,
                    children: t
                }) : N && w ? (0, r.jsx)(s.Z, {
                    className: n,
                    custom: d,
                    filename: a,
                    switcher: {
                        options: c.Mj.map(e => ({
                            value: e.name,
                            label: e.name
                        })),
                        value: b.name,
                        onChange: v
                    },
                    children: t
                }) : p ? null : (0, r.jsx)(s.Z, {
                    filename: a,
                    children: t
                })
            }

            function x(e) {
                let {
                    children: t,
                    noWrap: n,
                    disabled: i,
                    color: s,
                    title: l
                } = e;
                return (0, r.jsx)("code", {
                    className: (0, a.W)(p().code, p().inlineCode, {
                        [p().noWrap]: n,
                        [p().disabled]: i
                    }),
                    style: s ? {
                        color: s
                    } : void 0,
                    title: l,
                    children: t
                })
            }

            function m(e) {
                return (0, r.jsx)(x, {
                    color: "#0076FF",
                    noWrap: !0,
                    ...e
                })
            }
        },
        777414: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(397458),
                a = n(647528),
                i = n.n(a);

            function s() {
                return (0, r.jsx)("hr", {
                    className: i().container
                })
            }
        },
        291228: function(e, t, n) {
            "use strict";
            n.d(t, {
                gA: function() {
                    return i
                },
                QP: function() {
                    return a
                },
                Aw: function() {
                    return l
                },
                qu: function() {
                    return s
                },
                Nj: function() {
                    return p
                },
                ni: function() {
                    return d
                },
                Fp: function() {
                    return u
                },
                pV: function() {
                    return c
                },
                d0: function() {
                    return x
                },
                sG: function() {
                    return o
                },
                TF: function() {
                    return f
                }
            });
            var r = JSON.parse('{"VM":"Vercel Edge Network cache","wc":"Edge Network","N$":"Vercel","Aw":"vercel.com","Dr":"vercel.app","Q6":"Vercel","ng":"Vercel","cO":"Vercel","f3":"Vercel","Se":"Vercel"}');
            let a = "https://api.vercel.com",
                i = "/api/feedback",
                s = `${a}/v1/ratelimits`,
                l = `${a}/v1/frameworks`,
                o = r.N$,
                c = r.Aw,
                d = r.Dr,
                p = r.VM;
            r.wc;
            let u = r.Q6,
                f = r.ng;
            r.cO, r.f3, r.Se;
            let x = "github.com/vercel"
        },
        589951: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return k
                }
            });
            var r = n(397458),
                a = n(14517),
                i = n(652983),
                s = n(636319),
                l = n(852049),
                o = n(950429),
                c = n(640832),
                d = n(777414),
                p = n(948557),
                u = n(243801),
                f = n.n(u),
                x = n(869480),
                m = n.n(x);

            function h(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsxs)("blockquote", {
                    className: "jsx-d7b92491d51b0b79",
                    children: [t, (0, r.jsx)(f(), {
                        id: "d7b92491d51b0b79",
                        children: "blockquote.jsx-d7b92491d51b0b79{padding:10px 20px;border-left:5px solid var(--geist-foreground);margin:32px 0;color:var(--accents-4)}blockquote.jsx-d7b92491d51b0b79 div{margin:0}"
                    })]
                })
            }

            function b(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsxs)("span", {
                    className: "jsx-4a4877b22e18241e",
                    children: [t, (0, r.jsx)(f(), {
                        id: "4a4877b22e18241e",
                        children: "span.jsx-4a4877b22e18241e{font-weight:600}"
                    })]
                })
            }
            h.propTypes = {
                children: m().oneOfType([m().arrayOf(m().node), m().node])
            }, b.propTypes = {
                children: m().oneOfType([m().arrayOf(m().node), m().node])
            };
            var g = n(176784),
                v = n(841274),
                j = n(901291),
                y = n(593126),
                _ = n.n(y);
            let w = {
                a: function(e) {
                    let t = i.Children.toArray(e.children).some(e => {
                        var t;
                        return (null === (t = e.props) || void 0 === t ? void 0 : t.mdxType) === "inlineCode"
                    });
                    return t && e.href.includes("http") ? (0, r.jsx)(o.r, {
                        className: _().inlineCodeLink,
                        external: !0,
                        ...e
                    }) : e.href.includes("http") ? (0, r.jsx)(o.r, {
                        external: !0,
                        variant: "highlight",
                        ...e
                    }) : e.href.startsWith("mailto:") ? (0, r.jsxs)(o.r, { ...e,
                        variant: "highlight",
                        children: [e.children, (0, r.jsx)(s.M, {
                            className: _().icon,
                            size: "1em",
                            weight: "bold"
                        })]
                    }) : (0, r.jsx)(o.r, {
                        variant: "highlight",
                        ...e
                    })
                },
                blockquote: h,
                code: e => (0, r.jsx)(c.EK, { ...e
                }),
                pre: e => {
                    let {
                        children: t
                    } = e;
                    return t
                },
                h1: l.H1,
                h2: function(e) {
                    return (0, r.jsx)(l.H2, { ...e,
                        className: (0, a.W)(_().h2, e.className)
                    })
                },
                h3: l.H3,
                h4: l.H4,
                h5: l.H5,
                h6: l.H6,
                hr: d.Z,
                inlineCode: c.ZM,
                li: p.LI,
                p: l.P,
                strong: b,
                ul: p.UL,
                tr: g.SC,
                th: g.bi,
                td: g.LX,
                thead: g.ss,
                tbody: g.RM,
                table: g.iA,
                caption: v.Z,
                note: j.Z
            };
            var k = w
        },
        668589: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(397458),
                a = n(14517),
                i = n(652983),
                s = n(54252),
                l = n(953527),
                o = n.n(l);

            function c(e) {
                let {
                    children: t,
                    className: n,
                    filename: l,
                    custom: c,
                    hideLineNumbers: d,
                    ...p
                } = e, u = (0, i.useMemo)(() => (0, r.jsx)("pre", {
                    className: (0, a.W)(o().pre),
                    children: (0, r.jsx)("code", {
                        className: o().code,
                        children: t
                    })
                }), [t]), f = (0, i.useMemo)(() => Array.isArray(t) ? t.length : 0, [t]);
                return (0, r.jsx)(s.i, {
                    className: n,
                    custom: c,
                    filename: l,
                    hideLineNumbers: d || f < 2,
                    textToCopy: t,
                    ...p,
                    children: u
                })
            }
        },
        509877: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return a
                }
            });
            var r = n(361961);
            let a = (0, r.H)('<path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"/>')
        },
        508785: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return a
                }
            });
            var r = n(361961);
            let a = (0, r.H)('<path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><path d="M13 2v7h7"/>')
        },
        636319: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return a
                }
            });
            var r = n(361961);
            let a = (0, r.H)('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/>')
        },
        830369: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return a
                }
            });
            var r = n(361961);
            let a = (0, r.H)('<path d="M4 17l6-6-6-6"/><path d="M12 19h8"/>')
        },
        938187: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return a
                }
            });
            var r = n(361961);
            let a = (0, r.H)('<circle cx="12" cy="12" r="10" fill="var(--geist-fill)"/><path d="M15 9l-6 6" stroke="var(--geist-stroke)"/><path d="M9 9l6 6" stroke="var(--geist-stroke)"/>', !0)
        },
        905210: function(e) {
            e.exports = {
                codeContainer: "code_codeContainer__pmxI3",
                customComponent: "code_customComponent__yDZ_M",
                floatingCopyButton: "code_floatingCopyButton__Z9X9Q",
                header: "code_header__CN60C",
                noTopBorder: "code_noTopBorder__ItY2e",
                noFrameworkHeader: "code_noFrameworkHeader__LyZSD",
                pre: "code_pre__vtQWd",
                code: "code_code__jnJAI",
                langAndCopy: "code_langAndCopy__y2gt3",
                fileName: "code_fileName__yvtLe",
                copyButton: "code_copyButton__C2Udl",
                inlineCode: "code_inlineCode__wDXbp",
                iconWrapper: "code_iconWrapper__44lrX",
                pkgAndCopy: "code_pkgAndCopy__o9Ujz"
            }
        },
        647528: function(e) {
            e.exports = {
                container: "hr_container__vRAef"
            }
        },
        593126: function(e) {
            e.exports = {
                h2: "mdx-components_h2__pAOSW",
                inlineCodeLink: "mdx-components_inlineCodeLink__nKzGD",
                icon: "mdx-components_icon__JL_1_"
            }
        }
    }
]);