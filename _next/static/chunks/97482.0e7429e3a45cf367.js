(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [97482], {
        897482: function(t, a, r) {
            "use strict";
            r.r(a), r.d(a, {
                default: function() {
                    return m
                }
            });
            var s = r(397458),
                e = r(14517),
                n = r(950429),
                i = r(852049),
                o = r(353729),
                c = r(791688),
                d = r(446874),
                l = r.n(d);
            let u = (t, a) => a ? "secondary" : t ? "critical" === t.impact || "major" === t.impact ? "error" : "warning" : "success",
                _ = (t, a) => a ? "secondary" : t ? "critical" === t.impact || "major" === t.impact ? "error" : "warning" : "success";
            var m = t => {
                let {
                    noBorder: a = !1
                } = t, {
                    data: r,
                    error: d
                } = (0, o.ZP)("/status-api", async t => {
                    let a = await fetch(t);
                    if (!a.ok) {
                        let t = await a.json();
                        throw t
                    }
                    return a.json()
                }, {
                    errorMessage: !1
                }), m = Array.isArray(r) ? r[r.length - 1] : null, p = r ? u(m, d) : "secondary", h = r ? _(m, d) : "secondary";
                return (0, s.jsx)(n.r, {
                    "data-testid": (0, c.C)("footer", "status"),
                    href: "https://vercel-status.com",
                    tab: !0,
                    children: (0, s.jsxs)("div", {
                        className: (0, e.W)(l().content, {
                            [l().noBorder]: a
                        }),
                        children: [(0, s.jsx)("span", {
                            className: (0, e.W)(l().indicator, l()[p]),
                            "data-testid": (0, c.C)("footer", "status", h)
                        }), (0, s.jsx)(i.ZP, {
                            className: "geist-ellipsis",
                            small: !0,
                            title: null == m ? void 0 : m.name,
                            type: p,
                            weight: 500,
                            children: d ? "No status available." : void 0 === r ? "Loading status..." : m ? m.name : "All systems normal."
                        })]
                    })
                })
            }
        },
        446874: function(t) {
            t.exports = {
                content: "status-indicator_content__H99ii",
                indicator: "status-indicator_indicator__IVv6X",
                warning: "status-indicator_warning__8DyGL",
                error: "status-indicator_error__Ir0m_",
                secondary: "status-indicator_secondary__deLVS",
                noBorder: "status-indicator_noBorder__2bBKp"
            }
        }
    }
]);