(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [19321], {
        859570: function(e, t, n) {
            "use strict";
            var r = n(397458),
                i = n(571387),
                a = n(799374),
                o = n(793356),
                l = n(7594),
                s = n(210699),
                c = n(961126),
                d = n(270430),
                u = n(803923),
                p = n(68972),
                h = n(51213),
                g = n.n(h);

            function m(e) {
                let {
                    wrap: t,
                    children: n,
                    active: a,
                    onAnimationDone: o,
                    onCancel: l,
                    disabled: s,
                    reset: c
                } = e;
                return t ? (0, r.jsx)(i.u.Modal, {
                    active: a,
                    onAnimationDone: () => {
                        null == o || o(), c()
                    },
                    onClickOutside: () => {
                        s || l()
                    },
                    width: 480,
                    children: n
                }) : (0, r.jsx)(r.Fragment, {
                    children: n
                })
            }
            t.Z = (0, u._K)(function(e) {
                let {
                    active: t,
                    assignCardToEntity: n,
                    children: h,
                    continueLabel: v = "Continue",
                    description: y,
                    disabled: f,
                    error: _,
                    formDescription: b,
                    loading: x = !1,
                    onAdded: j,
                    onAnimationDone: w,
                    onCancel: k,
                    onSubmit: P,
                    savingLabel: C = "Saving Card",
                    title: E,
                    wrap: S = !0,
                    wrapDescription: Z = !0,
                    shouldUseTeam: D = !0
                } = e, {
                    account: T
                } = (0, s.Z)(), {
                    team: N,
                    mutate: A
                } = (0, d.t7)(), {
                    stripe: I,
                    reset: W,
                    submit: L,
                    ...U
                } = (0, u.e2)(), {
                    mutate: F
                } = (0, c.Z)();
                if (!T) return null;
                let $ = x || U.disabled,
                    B = U.disabled || f;
                return (0, r.jsx)(m, {
                    active: t,
                    disabled: $,
                    onAnimationDone: () => {
                        null == w || w(), W()
                    },
                    onCancel: k,
                    reset: W,
                    wrap: S,
                    children: I ? (0, r.jsxs)("form", {
                        onSubmit: async e => {
                            null == P || P(), e.preventDefault();
                            let t = D ? null == N ? void 0 : N.id : void 0,
                                r = await L({
                                    assignCardToEntity: n,
                                    teamId: t,
                                    shouldUseTeam: D
                                });
                            r && (await Promise.all([F(), A()]), j(r))
                        },
                        children: [E || y ? (0, r.jsxs)(i.u.Body, {
                            children: [(0, r.jsx)(i.u.Title, {
                                children: E
                            }), (0, r.jsx)(l.L, {
                                y: .75
                            }), Z ? (0, r.jsx)(i.u.Subtitle, {
                                children: y
                            }) : y]
                        }) : null, (0, r.jsx)(p.H, {
                            account: T,
                            assignCardToEntity: n,
                            description: b,
                            ...U,
                            disabled: B
                        }), h, _ ? (0, r.jsx)(i.u.Body, {
                            className: g().actionError,
                            children: (0, r.jsx)(o.Z, {
                                error: _
                            })
                        }) : null, (0, r.jsxs)(i.u.Actions, {
                            children: [(0, r.jsx)(i.u.Action, {
                                disabled: $,
                                onClick: k,
                                type: "secondary",
                                children: "Cancel"
                            }), (0, r.jsx)(i.u.Action, {
                                buttonType: "submit",
                                disabled: $ || f,
                                children: $ ? (0, r.jsx)(a.Z, {
                                    children: C
                                }) : v
                            })]
                        })]
                    }) : (0, r.jsxs)(i.u.Body, {
                        children: [(0, r.jsx)(i.u.P, {
                            children: "The payment method modal could not be loaded. Our engineers have already been informed. Please try again later."
                        }), (0, r.jsx)(i.u.P, {
                            children: "To increase the chances of success, please disable any browser extensions that could be blocking third-party scripts."
                        })]
                    })
                })
            })
        },
        68972: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return c
                }
            });
            var r = n(397458),
                i = n(121446),
                a = n(571387),
                o = n(803923),
                l = n(51213),
                s = n.n(l);

            function c(e) {
                let {
                    children: t,
                    account: n,
                    description: l,
                    assignCardToEntity: c,
                    ...d
                } = e;
                return (0, r.jsxs)(a.u.Body, {
                    className: s().modalBody,
                    children: [(0, r.jsx)(a.u.P, {
                        children: l ? ? (0, r.jsxs)(r.Fragment, {
                            children: ["Add a payment method for", " ", (0, r.jsx)(i.x, {
                                as: "span",
                                weight: 700,
                                children: n.name
                            })]
                        })
                    }), (0, r.jsx)(o.U1, {
                        breakLine: !0,
                        ...d
                    }), t]
                })
            }
        },
        631793: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return _
                }
            });
            var r = n(397458),
                i = n(652983),
                a = n(571387),
                o = n(950429),
                l = n(793356),
                s = n(270430),
                c = n(961126),
                d = n(532188),
                u = n(704023),
                p = n(58363),
                h = n(121123),
                g = n(517659),
                m = n(684874);
            async function v(e) {
                let {
                    teamId: t,
                    reasons: n
                } = e, r = {};
                n && (r.reasons = n);
                let i = await (0, p.I)(`${h.Q5}${(0,g.c)({teamId:t})}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    throwOnHTTPError: !0,
                    body: r
                });
                return m.co.track(m.s6.CANCEL_PRO_TRIAL, {
                    teamId: t
                }), i
            }
            var y = n(308108);
            let f = {
                surveyName: "Downgrade from Hobby User Feedback",
                surveySlug: "downgrade-from-hobby-user-feedback",
                surveySteps: [{
                    title: "You're about to downgrade your account to the free Hobby plan. Please provide us with some feedback!",
                    fields: [{
                        type: "select",
                        id: "reasons-why",
                        label: "Why are you downgrading?",
                        selectMultiple: !0,
                        options: [{
                            id: "cant-afford",
                            label: "\uD83D\uDE0D Wish I could stay - can’t afford it"
                        }, {
                            id: "dont-need",
                            label: "\uD83E\uDD37 Don’t need the full Pro account"
                        }, {
                            id: "dislike-product",
                            label: "\uD83D\uDE41 Dislike the product"
                        }, {
                            id: "other",
                            label: "Other (please explain below)",
                            reveals: {
                                id: "other-specific"
                            }
                        }]
                    }]
                }]
            };
            var _ = e => {
                var t, n, p;
                let {
                    amountDue: h,
                    active: g,
                    onCancel: m,
                    onDowngrade: _,
                    onAddPaymentMethodClicked: b,
                    onUpgradeLinkClicked: x,
                    dataTestIdContext: j
                } = e, [w, k] = (0, i.useState)({
                    status: "idle"
                }), [P, C] = (0, i.useState)(!1), {
                    team: E,
                    mutate: S
                } = (0, s.t7)(), Z = (0, c.Z)(), D = (0, y.e1)(), T = !!(null === (t = Z.data) || void 0 === t ? void 0 : t.defaultSource);
                if (!E) return null;
                let N = () => {
                        k({
                            status: "idle"
                        }), m()
                    },
                    A = async e => {
                        k({
                            status: "downgrading"
                        });
                        try {
                            let {
                                reasons: t
                            } = (0, u.v)(e);
                            await v({
                                teamId: E.id,
                                reasons: t
                            }), await S(), D.success("At the end of your trial period, your team will be downgraded to the free Hobby plan."), _(), k({
                                status: "idle"
                            })
                        } catch (e) {
                            k({
                                status: "error",
                                error: e
                            })
                        }
                    };
                return g ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(a.u.Modal, {
                        active: !P,
                        onClickOutside: N,
                        children: [(0, r.jsxs)(a.u.Body, {
                            children: [(0, r.jsx)(a.u.Title, {
                                children: "Downgrade to Hobby"
                            }), (null === (n = E.billing) || void 0 === n ? void 0 : n.cancelation) ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(a.u.P, {
                                    children: "Your team is currently scheduled to downgrade to the free Hobby plan the end of your trial period. No action required."
                                }), (0, r.jsxs)(a.u.P, {
                                    children: ["If you would like to continue collaborating with your team on the Pro plan, please", " ", (0, r.jsx)(o.r, {
                                        external: !0,
                                        onClick: () => {
                                            k({
                                                status: "idle"
                                            }), x()
                                        },
                                        variant: "highlight",
                                        children: "upgrade to Pro"
                                    }), "."]
                                })]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [T ? (0, r.jsx)(a.u.P, {
                                    children: "Your team is currently set to upgrade to Pro at the end of your trial period."
                                }) : null, (0, r.jsxs)(a.u.P, {
                                    children: ["Canceling will downgrade this team to the free Hobby plan at the end of your trial period. At that time you'll lose access to", " ", (0, r.jsx)(o.r, {
                                        external: !0,
                                        href: "/pricing",
                                        variant: "highlight",
                                        children: "Pro features"
                                    }), " ", "and your collaborators will be removed."]
                                }), (0, r.jsx)(a.u.P, {
                                    children: "Do you want to proceed?"
                                })]
                            }), h && b ? (0, r.jsxs)(a.u.P, {
                                children: ["Your account is ", h, " overdue. Before continuing, you must add a", " ", (0, r.jsx)(o.r, {
                                    onClick: () => {
                                        k({
                                            status: "idle"
                                        }), null == b || b()
                                    },
                                    variant: "highlight",
                                    children: "valid payment method"
                                }), "."]
                            }) : null, "error" === w.status && (0, r.jsx)(l.Z, {
                                error: w.error
                            })]
                        }), (0, r.jsxs)(a.u.Actions, {
                            children: [(0, r.jsx)(a.u.Action, {
                                onClick: N,
                                type: "secondary",
                                children: "Cancel"
                            }), (0, r.jsx)(a.u.Action, {
                                disabled: !!(void 0 !== h || (null === (p = E.billing) || void 0 === p ? void 0 : p.cancelation)),
                                loading: "downgrading" === w.status,
                                onClick: () => C(!0),
                                children: "Continue"
                            })]
                        })]
                    }), (0, r.jsx)(d.b, {
                        active: P,
                        dataTestIdContext: j,
                        onDismiss: () => {
                            A()
                        },
                        onSubmit: A,
                        setActive: C,
                        surveyInfo: f
                    })]
                }) : (0, r.jsx)(r.Fragment, {})
            }
        },
        211656: function(e, t, n) {
            "use strict";
            var r = n(397458),
                i = n(14517),
                a = n(316944),
                o = n(171855),
                l = n.n(o);
            t.Z = function(e) {
                let {
                    variant: t = "primary",
                    dim: n = !1,
                    className: o,
                    ...s
                } = e;
                return (0, r.jsx)(a.z, {
                    className: (0, i.W)(l().action, o, {
                        [l().primary]: "primary" === t,
                        [l().secondary]: "secondary" === t,
                        [l().dim]: n
                    }),
                    size: "small",
                    type: "primary" === t ? void 0 : "tertiary",
                    variant: "primary" === t ? "invert" : void 0,
                    ...s
                })
            }
        },
        721979: function(e, t, n) {
            "use strict";
            var r = n(397458),
                i = n(121446),
                a = n(210699),
                o = n(406651),
                l = n(211656),
                s = n(271157);
            t.Z = () => {
                var e, t;
                let {
                    team: n
                } = (0, a.Z)(), c = (0, o.cV)();
                return (null == n ? void 0 : null === (e = n.billing) || void 0 === e ? void 0 : e.plan) !== "hobby" || (null === (t = n.softBlock) || void 0 === t ? void 0 : t.reason) === "FAIR_USE_LIMITS_EXCEEDED" ? null : (0, r.jsx)(s.E, {
                    actions: (0, r.jsx)(l.Z, {
                        onClick: () => c({
                            source: "hobby-team-banner-cta"
                        }),
                        children: "Upgrade Now"
                    }),
                    dismissible: !0,
                    name: `${n.id}-hobby-team`,
                    children: (0, r.jsx)(i.x, {
                        as: "span",
                        children: "Your Pro Trial has expired. Would you like to upgrade to Pro?"
                    })
                })
            }
        },
        271157: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return v
                }
            });
            var r = n(397458),
                i = n(652983),
                a = n(14517),
                o = n(889353),
                l = n(460290),
                s = n(97264),
                c = n(848542),
                d = n.n(c);
            let u = {
                infrastructure: [{
                    "--color": "var(--geist-violet)",
                    "--light-opacity": "0.2",
                    "--dark-opacity": "0.6"
                }, {
                    "--color": "var(--geist-highlight-pink)",
                    "--light-opacity": "0.4",
                    "--dark-opacity": "0.6"
                }, {
                    "--color": "var(--geist-success)",
                    "--light-opacity": "0.3",
                    "--dark-opacity": "0.6"
                }],
                enterprise: [{
                    "--color": "var(--geist-highlight-pink)",
                    "--light-opacity": "0.2",
                    "--dark-opacity": "0.6"
                }, {
                    "--color": "var(--geist-warning)",
                    "--light-opacity": "0.4",
                    "--dark-opacity": "0.6"
                }, {
                    "--color": "var(--geist-highlight-pink)",
                    "--light-opacity": "0.3",
                    "--dark-opacity": "0.6"
                }],
                nextjs: [{
                    "--color": "var(--geist-highlight-pink)",
                    "--light-opacity": "0.2",
                    "--dark-opacity": "0.6"
                }, {
                    "--color": "var(--geist-cyan)",
                    "--light-opacity": "0.4",
                    "--dark-opacity": "0.6"
                }, {
                    "--color": "var(--geist-violet)",
                    "--light-opacity": "0.3",
                    "--dark-opacity": "0.6"
                }],
                svelte: [{
                    "--color": "var(--geist-highlight-pink)",
                    "--light-opacity": "0.2",
                    "--dark-opacity": "0.6"
                }, {
                    "--color": "var(--geist-cyan)",
                    "--light-opacity": "0.4",
                    "--dark-opacity": "0.6"
                }, {
                    "--color": "var(--geist-violet)",
                    "--light-opacity": "0.3",
                    "--dark-opacity": "0.6"
                }],
                turborepo: [{
                    "--color": "#E42C6A",
                    "--light-opacity": "0.2",
                    "--dark-opacity": "0.4"
                }, {
                    "--color": "#3485EF",
                    "--light-opacity": "0.2",
                    "--dark-opacity": "0.4"
                }, {}],
                banner: [{
                    "--color": "var(--geist-violet)",
                    "--light-opacity": "1",
                    "--dark-opacity": "1"
                }, {
                    "--color": "var(--geist-success-dark)",
                    "--light-opacity": "1",
                    "--dark-opacity": "1"
                }, {
                    "--color": "var(--geist-success-dark)",
                    "--light-opacity": "1",
                    "--dark-opacity": "1"
                }]
            };

            function p(e) {
                let {
                    type: t
                } = e;
                return (0, r.jsxs)("div", {
                    className: (0, a.W)(d()["gradient-wrapper"]),
                    role: "region",
                    children: [(0, r.jsx)("div", {
                        className: (0, a.W)(d().gradient, d()["gradient-1"]),
                        style: u[t][0]
                    }), (0, r.jsx)("div", {
                        className: (0, a.W)(d().gradient, d()["gradient-2"]),
                        style: u[t][1]
                    }), (0, r.jsx)("div", {
                        className: (0, a.W)(d().gradient, d()["gradient-3"]),
                        style: u[t][2]
                    })]
                })
            }
            var h = n(117683),
                g = n.n(h),
                m = n(211656);

            function v(e) {
                let {
                    name: t,
                    dismissible: n = !1,
                    actions: c,
                    children: d
                } = e, [u, h] = function(e) {
                    var t;
                    let [n, r] = (0, i.useState)((null === (t = f) || void 0 === t ? void 0 : t.has(e)) ? ? !1);
                    return [n, () => {
                        f && (f.add(e), localStorage.setItem(y, JSON.stringify(Array.from(f))), r(!0))
                    }]
                }(t), [v, {
                    height: _
                }] = (0, l.Z)(), [b, x] = (0, i.useState)(!1), j = (0, s.useSpring)({
                    height: b ? 0 : _,
                    config: { ...s.config.stiff,
                        clamp: !0
                    },
                    onRest: b ? () => {
                        x(!1), h()
                    } : void 0
                });
                return u ? null : (0, r.jsx)(s.animated.span, {
                    className: (0, a.W)(g().fadeInWrapper, {
                        [g().dismissing]: b
                    }),
                    style: j,
                    children: (0, r.jsxs)("div", {
                        className: (0, a.W)(g().bannerWrapper, "dark-theme"),
                        ref: v,
                        children: [(0, r.jsx)(p, {
                            type: "banner"
                        }), (0, r.jsxs)("div", {
                            className: (0, a.W)(g().banner, "geist-wrapper"),
                            children: [(0, r.jsxs)("div", {
                                className: g().content,
                                children: [d, c ? (0, r.jsx)("div", {
                                    className: g().actions,
                                    children: c
                                }) : null]
                            }), n ? (0, r.jsx)(m.Z, {
                                "aria-label": "dismiss",
                                className: g().cancelButton,
                                dim: !0,
                                onClick: () => x(!0),
                                shape: "circle",
                                svgOnly: !0,
                                variant: "secondary",
                                children: (0, r.jsx)(o.X, {})
                            }) : null]
                        })]
                    })
                })
            }
            let y = "dismissed-product-banners",
                f = null;
            try {
                f = new Set(JSON.parse(localStorage.getItem(y) ? ? "null") ? ? [])
            } catch {}
        },
        792061: function(e, t, n) {
            "use strict";
            var r = n(397458),
                i = n(652983),
                a = n(121446),
                o = n(210699),
                l = n(631793),
                s = n(859570),
                c = n(518066),
                d = n(729066),
                u = n(639676),
                p = n(40268),
                h = n(406651),
                g = n(211656),
                m = n(271157);
            t.Z = () => {
                var e;
                let {
                    team: t
                } = (0, o.Z)(), n = (0, c.Z)(), {
                    data: v
                } = (0, d.t)(n), [y, f] = (0, i.useState)(null), {
                    can: _,
                    isLoading: b
                } = (0, p.ZP)(), x = (0, h.cV)();
                if ((null == t ? void 0 : null === (e = t.billing) || void 0 === e ? void 0 : e.plan) !== "pro" || "expired" !== t.billing.status || b) return null;
                let j = _(p.aU.Update, p._z.Team),
                    w = v && v.balanceDue ? (0, u.x)(v.balanceDue, v.currency) : void 0;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(m.E, {
                        actions: (() => {
                            if (j) return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(g.Z, {
                                    onClick: () => f("downgrade"),
                                    variant: "secondary",
                                    children: "Downgrade to Hobby"
                                }), (0, r.jsx)(g.Z, {
                                    onClick: () => x({
                                        source: "expired-plan-banner-cta"
                                    }),
                                    children: "Reactivate Pro"
                                })]
                            })
                        })(),
                        name: `${t.id}-plan-expired`,
                        children: (0, r.jsxs)(a.x, {
                            as: "span",
                            children: ["Your account has been suspended. ", j ? "Would you like to reactivate your subscription?" : "To continue collaborating with team members please contact your account owner to reactivate your subscription."]
                        })
                    }), (0, r.jsx)(s.Z, {
                        active: "add-payment-method" === y,
                        description: `Your account is ${w} overdue. Please add a payment method to pay your account balance prior to changing your plan.`,
                        onAdded: () => f("downgrade"),
                        onCancel: () => f("downgrade"),
                        title: "Pay Overdue Balance"
                    }), (0, r.jsx)(l.Z, {
                        active: "downgrade" === y,
                        amountDue: w,
                        onAddPaymentMethodClicked: () => f("add-payment-method"),
                        onCancel: () => f(null),
                        onDowngrade: () => f(null),
                        onUpgradeLinkClicked: () => {
                            f(null), x({
                                source: "expired-plan-banner-cta"
                            })
                        }
                    })]
                })
            }
        },
        835655: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return j
                }
            });
            var r = n(397458),
                i = n(355344),
                a = n(652983),
                o = n(121446),
                l = n(191621),
                s = n(226865),
                c = n(210699),
                d = n(961126),
                u = n(633224),
                p = n(40268),
                h = n(406651),
                g = n(556524),
                m = n(791688),
                v = n(211656);

            function y(e) {
                return e.toString().padStart(2, "0")
            }

            function f(e) {
                let {
                    start: t,
                    trial: n
                } = e, [i, l] = (0, a.useState)(0), s = n.end - t;
                return (0, a.useEffect)(() => {
                    let e = new AbortController;
                    return function(e, t, n) {
                        var r;
                        let i = "number" == typeof(null === (r = document.timeline) || void 0 === r ? void 0 : r.currentTime) ? document.timeline.currentTime : performance.now();

                        function a(e) {
                            t.aborted || (n(e), o(e))
                        }

                        function o(t) {
                            let n = t - i,
                                r = i + Math.round(n / e) * e + e,
                                o = r - performance.now();
                            setTimeout(() => requestAnimationFrame(a), o)
                        }
                        o(i)
                    }(1e3, e.signal, e => {
                        l(e)
                    }), () => e.abort()
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o.x, {
                        as: "span",
                        children: "in "
                    }), (0, r.jsx)(o.x, {
                        as: "span",
                        monospace: !0,
                        weight: 700,
                        children: i > s ? "00:00:00" : function(e) {
                            let t = Math.floor(e / 1e3),
                                n = Math.floor(t / 60),
                                r = Math.floor(n / 60);
                            return `${y(r)}:${y(n%=60)}:${y(t%=60)}`
                        }(s - i)
                    })]
                })
            }
            var _ = n(271157);
            let b = () => {
                    g.co.track(g.s6.CLICK_EVENT, {
                        click_name: "pro_trial_expiration_banner_upgrade_cta",
                        click_value: "Clicked the Upgrade button in the Pro Trial Expiration banner"
                    })
                },
                x = (e, t) => {
                    var n, r;
                    return !!((null == t ? void 0 : null === (r = t.billing) || void 0 === r ? void 0 : null === (n = r.trial) || void 0 === n ? void 0 : n.end) && t.billing.trial.end - e < (0, i.Z)("1d"))
                };

            function j() {
                var e, t, n;
                let {
                    team: i
                } = (0, c.Z)(), g = (0, d.Z)(), y = (0, u.x)({
                    throwOnHTTPError: !1
                }), j = (0, h.cV)(), {
                    can: w
                } = (0, p.ZP)(), k = (0, s.F)(null == i ? void 0 : i.billing), [P, C] = (0, a.useState)(x(k, i));
                (0, a.useEffect)(() => {
                    C(x(k, i))
                }, [i, k]);
                let E = !!(null === (e = g.data) || void 0 === e ? void 0 : e.defaultSource) && !(null == i ? void 0 : null === (t = i.billing) || void 0 === t ? void 0 : t.cancelation);
                if ((null == i ? void 0 : null === (n = i.billing) || void 0 === n ? void 0 : n.plan) !== "pro" || "trialing" !== i.billing.status || !i.billing.trial || !g.data || !y.data || E) return null;
                let S = w(p.aU.Update, p._z.Team);
                return (0, r.jsx)(_.E, {
                    actions: (() => {
                        if (S) return (0, r.jsx)(v.Z, {
                            "data-testid": (0, m.C)("pro_trial_expiration_banner", "upgrade_cta"),
                            onClick: () => {
                                b(), j({
                                    source: "expiring-team-banner-cta"
                                })
                            },
                            children: "Upgrade"
                        })
                    })(),
                    name: `${i.id}-trial-expiring`,
                    children: (0, r.jsxs)(o.x, {
                        as: "span",
                        children: ["Your trial expires", " ", P ? (0, r.jsx)(f, {
                            start: k,
                            trial: i.billing.trial
                        }) : (0, r.jsx)(l.Z, {
                            now: k,
                            trial: i.billing.trial
                        }), ". ", S ? "To maintain access to premium features, upgrade to Pro." : "To maintain access to premium features, contact your account owner to upgrade."]
                    })
                })
            }
        },
        191621: function(e, t, n) {
            "use strict";
            var r = n(397458),
                i = n(121446),
                a = n(916595);
            t.Z = e => {
                let {
                    now: t,
                    trial: n
                } = e, o = (0, a.DF)(n.end - t), l = o.findIndex(e => "integer" === e.type);
                return (0, r.jsx)(r.Fragment, {
                    children: o.map((e, t) => (0, r.jsx)(i.x, {
                        as: "span",
                        weight: t < l ? void 0 : 700,
                        children: e.value
                    }, e.value))
                })
            }
        },
        548662: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(652983),
                i = n(628987),
                a = n(800048),
                o = n(308108);
            let l = new Set;

            function s(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "success",
                    s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    c = (0, i.useSearchParams)(),
                    d = (0, o.e1)(),
                    u = null == c ? void 0 : c.get(e),
                    p = `${e}:${n}`;
                (0, r.useEffect)(() => {
                    l.has(p) && !u && l.delete(p)
                }, [u, p]), (0, r.useEffect)(() => {
                    if (u && t && s && !l.has(p)) {
                        l.add(p), setTimeout(() => l.delete(p), 1e4);
                        let r = "function" == typeof t ? t(u) : t;
                        d[n]({
                            text: r
                        }), (0, a.bb)(e, null)
                    }
                }, [d, n, e, u, s])
            }
        },
        800048: function(e, t, n) {
            "use strict";
            n.d(t, {
                aM: function() {
                    return o
                },
                bb: function() {
                    return a
                }
            }), n(652983);
            var r = n(426326),
                i = n.n(r);

            function a(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if ("URLSearchParams" in window) {
                    let {
                        search: r,
                        pathname: a
                    } = window.location, o = new URLSearchParams(r), l = { ...i().query
                    };
                    if (t) o.set(e, t), l[e] = t;
                    else {
                        if (null !== t) return;
                        o.delete(e), delete l[e]
                    }
                    let s = n ? "" : o.toString();
                    if (n) {
                        for (let [e, t] of o.entries()) s = `${s}${e}=${t}&`;
                        s = s.slice(0, s.length - 1)
                    }
                    let c = a + (s ? `?${s}` : "");
                    i().replace({
                        pathname: i().pathname,
                        query: l
                    }, c, {
                        shallow: !0
                    })
                }
            }

            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                if ("URLSearchParams" in window) {
                    let {
                        search: t,
                        pathname: n
                    } = window.location, r = new URLSearchParams(t), a = { ...i().query
                    };
                    e.forEach(e => {
                        let [t, n] = e;
                        n || "" === n ? (r.set(t, n), a[t] = n) : null === n && (r.delete(t), delete a[t])
                    });
                    let o = r.toString(),
                        l = n + (o ? `?${o}` : "");
                    i().replace({
                        pathname: i().pathname,
                        query: a
                    }, l, {
                        shallow: !0
                    })
                }
            }
        },
        704023: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return i
                }
            });
            var r = n(520354);
            let i = e => {
                if (void 0 === e) return {
                    reasons: []
                };
                let t = e.fields,
                    n = [];
                return t.forEach(e => {
                    switch (e.type) {
                        case "select":
                            n.push(... function(e) {
                                let t = [];
                                for (let r of e) {
                                    var n;
                                    if (r.selected) {
                                        if ("other" === r.id && (null === (n = r.reveals) || void 0 === n ? void 0 : n.value)) {
                                            t.push({
                                                slug: r.id,
                                                description: r.reveals.value
                                            });
                                            continue
                                        }
                                        if ("other" === r.id) continue;
                                        t.push({
                                            slug: r.id,
                                            description: r.label
                                        })
                                    }
                                }
                                return t
                            }(e.options));
                            break;
                        case "text":
                            if (!e.value) break;
                            n.push({
                                slug: e.id,
                                description: e.value
                            });
                            break;
                        default:
                            (0, r._)(e)
                    }
                }), {
                    reasons: n
                }
            }
        },
        729066: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return l
                }
            });
            var r = n(353729),
                i = n(121123),
                a = n(58363),
                o = n(270430);

            function l(e, t) {
                let {
                    isReady: n,
                    team: l
                } = (0, o.t7)(), s = (0, r.ZP)(() => {
                    var t;
                    if (!n || !e && (null == l ? void 0 : null === (t = l.billing) || void 0 === t ? void 0 : t.status) !== "expired") return null;
                    let r = new URLSearchParams;
                    return l && r.set("teamId", l.id), `${i.ug}?${r}`
                }, e => (0, a.I)(e, {
                    throwOnHTTPError: !0
                }), t);
                return s
            }
        },
        518066: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(210699);

            function i() {
                var e, t;
                let n = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    {
                        team: i
                    } = (0, r.Z)();
                return (!n || (null == i ? void 0 : null === (e = i.billing) || void 0 === e ? void 0 : e.plan) !== "enterprise") && (null == i ? void 0 : null === (t = i.billing) || void 0 === t ? void 0 : t.status) === "overdue"
            }
        },
        848542: function(e) {
            e.exports = {
                "hero-wrapper": "components_hero-wrapper__Em1Lt",
                "gradient-wrapper": "components_gradient-wrapper__4AXDK",
                title: "components_title__3A_4H",
                description: "components_description__F3e0d",
                "top-ctas": "components_top-ctas__Q_pDX",
                summary: "components_summary__UG4gG",
                "summary-icon": "components_summary-icon__Z9w9S",
                "summary-wrapper": "components_summary-wrapper__INO4V",
                gradient: "components_gradient__c_4lL",
                "gradient-1": "components_gradient-1__2oL8W",
                "gradient-2": "components_gradient-2__dqzUB",
                "gradient-3": "components_gradient-3__JzhZm",
                "graphic-flex-shrink": "components_graphic-flex-shrink__bc5h0",
                "cta-button": "components_cta-button__QIUPY",
                "graphic-light": "components_graphic-light__M5suL",
                "graphic-dark": "components_graphic-dark__NDYEw",
                "overflow-hidden": "components_overflow-hidden__ep_pg",
                "text-align-center-on-tablet": "components_text-align-center-on-tablet__kmnJN",
                "summary-item-text": "components_summary-item-text__rTtIJ",
                "turbo-summary-item-text": "components_turbo-summary-item-text__VRv8q"
            }
        },
        51213: function(e) {
            e.exports = {
                modalBody: "billing-form-modal_modalBody__xjGsA",
                actionError: "billing-form-modal_actionError__gX9Fe"
            }
        },
        171855: function(e) {
            e.exports = {
                action: "banner-action_action__D_ReN",
                primary: "banner-action_primary__FtD5_",
                secondary: "banner-action_secondary__5_q8v",
                dim: "banner-action_dim__JqELC"
            }
        },
        117683: function(e) {
            e.exports = {
                fadeInWrapper: "product-banner_fadeInWrapper__2wXp2",
                "fade-in": "product-banner_fade-in__BYW0k",
                dismissing: "product-banner_dismissing__yPXle",
                "fade-out": "product-banner_fade-out__vL7rT",
                bannerWrapper: "product-banner_bannerWrapper___cNAM",
                banner: "product-banner_banner__kKLOD",
                content: "product-banner_content__M8jpQ",
                actions: "product-banner_actions__WKnzo",
                cancelButton: "product-banner_cancelButton__GgdeW"
            }
        }
    }
]);