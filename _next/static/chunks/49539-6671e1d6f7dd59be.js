(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [49539], {
        419570: function(e, t, r) {
            "use strict";
            r.d(t, {
                Rj: function() {
                    return c
                },
                T$: function() {
                    return m
                }
            });
            var i = r(397458),
                o = r(243801),
                n = r.n(o);
            r(652983);
            var a = r(537525),
                l = r.n(a),
                s = r(998845),
                d = r(71299),
                u = r(270430);

            function c(e, t, r) {
                var i, o, n;
                if (!e) return "";
                let {
                    project: a,
                    idWithoutPrefix: l
                } = (0, s.Z)(e), d = (null == r ? void 0 : r.slug) || "team" in e && (null == e ? void 0 : null === (i = e.team) || void 0 === i ? void 0 : i.slug) || (null == t ? void 0 : t.username) || (null == t ? void 0 : t.uid) || (null === (o = e.creator) || void 0 === o ? void 0 : o.username) || (null === (n = e.creator) || void 0 === n ? void 0 : n.uid) || null;
                return `/${encodeURIComponent(d)}/${encodeURIComponent(a)}/${l}`
            }
            t.ZP = e => {
                let {
                    deployment: t,
                    host: r,
                    alias: o,
                    title: a,
                    children: s
                } = e, d = m(t), u = r ? `/deployment/redirect?host=${r}` : "";
                return (0, i.jsxs)("span", {
                    className: "jsx-df72f54173f8692c link-container",
                    children: [(0, i.jsx)(l(), {
                        href: d || u,
                        legacyBehavior: !0,
                        children: (0, i.jsx)("a", {
                            title: a,
                            className: "jsx-df72f54173f8692c link",
                            children: o || s || r || (null == t ? void 0 : t.host) || (null == t ? void 0 : t.url)
                        })
                    }), (0, i.jsx)(n(), {
                        id: "df72f54173f8692c",
                        children: ".link.jsx-df72f54173f8692c{text-decoration:none;color:var(--geist-foreground);font-weight:500}.link-container.jsx-df72f54173f8692c:hover .link.jsx-df72f54173f8692c{text-decoration:underline}.link-container.jsx-df72f54173f8692c:hover .deployment-link-content{text-decoration:underline}"
                    })]
                })
            };
            let m = e => {
                let {
                    user: t
                } = (0, d.a)(), {
                    team: r
                } = (0, u.t7)();
                return c(e, t, r)
            }
        },
        763210: function(e, t, r) {
            "use strict";
            r.d(t, {
                DY: function() {
                    return k
                },
                p0: function() {
                    return z
                }
            });
            var i = r(397458),
                o = r(243801),
                n = r.n(o),
                a = r(652983),
                l = r(14517),
                s = r(154791),
                d = r(426476),
                u = r(378019),
                c = r(121297),
                m = r(735636),
                x = r(909268),
                h = r(786597),
                p = r(342958),
                v = r(7594),
                f = r(852049),
                b = r(641650),
                g = r(921949),
                w = r(520102);
            let j = (e, t) => {
                    let r = t.map(t => e.findIndex(e => e.uid === t.uid));
                    return Math.max(...r)
                },
                k = (0, a.memo)(e => {
                    var t, r, o, n, a, l, s;
                    let {
                        deployment: x,
                        size: p = 24,
                        showProviderIcon: v = !1
                    } = e;
                    if (null === (t = x.meta) || void 0 === t ? void 0 : t.deployHookId) return (0, i.jsx)(h.Z, {
                        height: p,
                        width: p
                    });
                    if (null === (r = x.meta) || void 0 === r ? void 0 : r.originalDeploymentId);
                    else if ((null === (o = x.meta) || void 0 === o ? void 0 : o.githubDeployment) && x.meta.githubCommitAuthorLogin) return (0, i.jsx)(u.O, {
                        showIcon: !1,
                        size: p,
                        title: x.meta.githubCommitAuthorLogin,
                        username: x.meta.githubCommitAuthorLogin
                    });
                    else if ((null === (n = x.meta) || void 0 === n ? void 0 : n.gitlabDeployment) && x.meta.gitlabCommitAuthorLogin) return (0, i.jsx)(c.n, {
                        showIcon: v,
                        size: p,
                        title: x.meta.gitlabCommitAuthorLogin,
                        url: x.meta.gitlabCommitAuthorAvatar
                    });
                    else if ((null === (a = x.meta) || void 0 === a ? void 0 : a.bitbucketDeployment) && x.meta.bitbucketCommitAuthorName) return (0, i.jsx)(m.g, {
                        showIcon: v,
                        size: p,
                        title: x.meta.bitbucketCommitAuthorName,
                        url: x.meta.bitbucketCommitAuthorAvatar
                    });
                    return (0, i.jsx)(d.qE, {
                        size: p,
                        title: null === (l = x.creator) || void 0 === l ? void 0 : l.username,
                        uid: null === (s = x.creator) || void 0 === s ? void 0 : s.uid
                    })
                }),
                y = (0, a.memo)(e => {
                    let {
                        member: t,
                        selected: r,
                        onClick: o
                    } = e;
                    return (0, i.jsx)("span", {
                        className: (0, l.W)("avatar-container", {
                            active: r.findIndex(e => e.uid === t.uid) > -1
                        }),
                        onClick: o,
                        children: (0, i.jsx)(d.qE, {
                            size: 32,
                            title: t.username,
                            uid: t.uid
                        })
                    })
                }),
                z = (0, a.memo)(e => {
                    let {
                        members: t,
                        selected: r,
                        setSelectedMembers: o
                    } = e, u = (0, g.ac)(768), c = u ? 7 : 15, [m, h] = (0, a.useState)(""), k = (0, a.useCallback)(e => {
                        if (t.length > 1) {
                            let t = r.filter(t => t.uid !== e.uid);
                            t.length === r.length ? o([...r, e]) : o(t)
                        }
                    }, [r, o, t]), z = t.length - c, _ = (0, a.useMemo)(() => {
                        let e = t.slice(c),
                            o = e.filter(e => !!("" === m || e.username.indexOf(m) > -1));
                        if (z > 0) {
                            let e = j(t, r);
                            return (0, i.jsxs)(p.Z, {
                                className: "extra-creators",
                                flex: "0 0 auto",
                                children: [(0, i.jsx)(x.C, {
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "right"
                                    },
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "right"
                                    },
                                    trigger: (0, i.jsx)(p.Z, {
                                        center: !0,
                                        className: (0, l.W)("plus", {
                                            active: e >= c
                                        }),
                                        flex: "0 0 auto",
                                        children: z > 10 ? "10+" : `+${z}`
                                    }),
                                    children: (0, i.jsxs)(w.Menu, {
                                        tipOffset: 4,
                                        tipSide: "right",
                                        width: 200,
                                        children: [z > 5 ? (0, i.jsx)(p.Z, {
                                            style: {
                                                padding: "0 8px"
                                            },
                                            children: (0, i.jsx)(b.Z, {
                                                onChange: e => h(e),
                                                placeholder: "Search creators...",
                                                value: m
                                            })
                                        }) : (0, i.jsx)(p.Z, {
                                            className: "creator-title",
                                            children: "Creators"
                                        }), (0, i.jsx)(w.Divider, {}), (0, i.jsx)(p.Z, {
                                            style: {
                                                maxHeight: "210px",
                                                overflow: "scroll"
                                            },
                                            children: o.length > 0 ? o.map((e, t) => {
                                                let o = r.findIndex(t => t.uid === e.uid) > -1;
                                                return (0, i.jsxs)("div", {
                                                    onClick: () => k(e),
                                                    className: "jsx-4037b058e93b69ab creator-row",
                                                    children: [(0, i.jsx)(s.X, {
                                                        checked: o,
                                                        onChange: () => k(e)
                                                    }), (0, i.jsx)(v.L, {
                                                        inline: !0,
                                                        x: .5
                                                    }), (0, i.jsx)(d.qE, {
                                                        size: 24,
                                                        title: e.username,
                                                        uid: e.uid
                                                    }), (0, i.jsx)(v.L, {
                                                        inline: !0,
                                                        x: .5
                                                    }), (0, i.jsx)(f.ZP, {
                                                        className: "geist-ellipsis",
                                                        noMargin: !0,
                                                        preset: "body-2",
                                                        children: e.username
                                                    })]
                                                }, t)
                                            }) : (0, i.jsx)(p.Z, {
                                                center: !0,
                                                className: "no-creator",
                                                children: "Creator not found"
                                            })
                                        })]
                                    })
                                }), (0, i.jsx)(n(), {
                                    id: "4037b058e93b69ab",
                                    children: ".extra-creators .menu .line{margin-bottom:0}.extra-creators .popover .menu{padding-bottom:0}.plus{background:var(--geist-background);font-size:12px;color:var(--accents-5);border:1px solid var(--accents-2);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:30px;height:30px;-webkit-transition:all.1s ease-out 0s;-moz-transition:all.1s ease-out 0s;-o-transition:all.1s ease-out 0s;transition:all.1s ease-out 0s}.plus:hover{color:var(--geist-foreground);border-color:var(--geist-foreground)}.plus.active{color:var(--geist-foreground);border-color:var(--geist-background);-webkit-box-shadow:var(--shadow-extra-small);-moz-box-shadow:var(--shadow-extra-small);box-shadow:var(--shadow-extra-small)}.creator-title{padding:4px 16px;color:var(--accents-5)}.creator-row{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 0;-moz-box-flex:0;-ms-flex:0 0;flex:0 0;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 16px;color:var(--accents-5);cursor:pointer;-webkit-transition:color.1s ease,background-color.1s ease;-moz-transition:color.1s ease,background-color.1s ease;-o-transition:color.1s ease,background-color.1s ease;transition:color.1s ease,background-color.1s ease}.creator-row:hover{background:var(--accents-1);color:var(--geist-foreground)}.no-creator{padding:8px;color:var(--accents-5)}"
                                })]
                            })
                        }
                    }, [t, r, z, m, h, c, k]);
                    return (0, i.jsxs)(p.Z, {
                        className: (0, l.W)("avatars", {
                            selected: Object.keys(r).length > 0,
                            disabled: Object.keys(t).length < 2
                        }),
                        flex: "0 0 auto",
                        row: !0,
                        children: [t.slice(0, c).map((e, t) => (0, i.jsx)(y, {
                            member: e,
                            onClick: () => k(e),
                            selected: r
                        }, t)), _, (0, i.jsx)(n(), {
                            id: "de5cd593f1b2e48e",
                            children: ".avatars.jsx-de5cd593f1b2e48e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-flow:row-reverse;-moz-box-orient:horizontal;-moz-box-direction:reverse;-ms-flex-flow:row-reverse;flex-flow:row-reverse;cursor:pointer}.avatar-container{cursor:pointer;position:relative;width:32px;height:32px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-transition:-webkit-transform.1s ease-out 0s;-moz-transition:-moz-transform.1s ease-out 0s;-o-transition:-o-transform.1s ease-out 0s;transition:-webkit-transform.1s ease-out 0s;transition:-moz-transform.1s ease-out 0s;transition:-o-transform.1s ease-out 0s;transition:transform.1s ease-out 0s;will-change:transform,z-index}.avatar-container:not(:last-child){margin-right:-8px}.selected .avatar-container img{opacity:.5}.avatars:not(.disabled) .avatar-container:hover{z-index:9;-webkit-transform:translate3d(0,-4px,0);-moz-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0);opacity:1}.avatar-container:hover img{opacity:1}.avatar-container.active{opacity:1;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;-webkit-box-shadow:var(--shadow-extra-small);-moz-box-shadow:var(--shadow-extra-small);box-shadow:var(--shadow-extra-small)}.avatar-container.active img{opacity:1}.avatars .active .avatar{border:1px solid white}.avatars.jsx-de5cd593f1b2e48e:hover>*:not(.active :hover){opacity:.5}"
                        })]
                    })
                })
        },
        786597: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            var i = r(397458);

            function o(e) {
                let {
                    width: t = 24,
                    height: r = 24,
                    style: o
                } = e;
                return (0, i.jsxs)("svg", {
                    fill: "none",
                    height: r,
                    style: {
                        border: "1px solid var(--accents-2)",
                        borderRadius: "100%",
                        boxSizing: "border-box",
                        ...o
                    },
                    viewBox: "0 0 24 24",
                    width: t,
                    children: [(0, i.jsx)("path", {
                        clipRule: "evenodd",
                        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
                        fill: "#000",
                        fillRule: "evenodd"
                    }), (0, i.jsx)("path", {
                        clipRule: "evenodd",
                        d: "M12.24 6.24L18 16.378H6.48L12.24 6.24z",
                        fill: "#fff",
                        fillRule: "evenodd"
                    })]
                })
            }
            r(652983)
        },
        641650: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return i.Z
                }
            });
            var i = r(611717)
        },
        611717: function(e, t, r) {
            "use strict";
            var i = r(397458),
                o = r(652983),
                n = r(14517),
                a = r(317892),
                l = r(240904),
                s = r(69277),
                d = r.n(s);
            t.Z = e => {
                let {
                    autoFocus: t,
                    children: r,
                    disabled: s,
                    errored: u,
                    icon: c,
                    iconRight: m,
                    maxLength: x,
                    placeholder: h,
                    type: p,
                    value: v,
                    defaultValue: f,
                    tabIndex: b,
                    width: g,
                    height: w,
                    maxWidth: j,
                    onInput: k,
                    onKeyDown: y,
                    margin: z,
                    max: _,
                    min: C,
                    onChange: Z,
                    className: N,
                    onPaste: I,
                    onFocus: P,
                    onBlur: A,
                    readOnly: R,
                    title: $,
                    required: L,
                    label: O,
                    innerRef: S,
                    spellCheck: M = "false",
                    border: D = !0,
                    style: E,
                    ...W
                } = e, [B, H] = o.useState(t || !1), T = (0, a.B)(s), q = window.innerWidth <= 600;
                return (0, i.jsxs)("div", {
                    className: (0, n.W)("wrapper", d().wrapper, {
                        [d().errored]: u,
                        [d().focused]: B,
                        [d().disabled]: T,
                        [d()["has-border"]]: D
                    }, N),
                    style: {
                        "--input-height": w ? (0, l.Z)(w) : void 0,
                        "--input-width": g ? (0, l.Z)(g) : void 0,
                        "--input-max-width": j ? (0, l.Z)(j) : void 0,
                        "--input-wrapper-margin": z || void 0,
                        ...E
                    },
                    ...W,
                    children: [c ? (0, i.jsx)("span", {
                        className: d().icon,
                        children: c
                    }) : null, (0, i.jsxs)("div", {
                        className: d()["input-wrapper"],
                        children: [(0, i.jsx)("input", {
                            "aria-label": O || $ || h,
                            autoCapitalize: "off",
                            autoComplete: "off",
                            autoCorrect: "off",
                            autoFocus: !q && t,
                            className: (0, n.W)(d().input),
                            defaultValue: f,
                            disabled: T,
                            id: W.id,
                            max: _,
                            maxLength: x,
                            min: C,
                            onBlur: e => {
                                H(!1), null == A || A(e)
                            },
                            onChange: Z ? e => {
                                null == Z || Z(e.target.value)
                            } : void 0,
                            onFocus: e => {
                                H(!0), null == P || P(e)
                            },
                            onInput: k,
                            onKeyDown: y,
                            onPaste: I,
                            placeholder: h,
                            readOnly: R,
                            ref: e => {
                                S && S(e)
                            },
                            required: L,
                            spellCheck: M,
                            tabIndex: b,
                            title: $ || (null == v ? void 0 : v.toString()) || h,
                            type: p || "text",
                            value: v
                        }), r]
                    }), m ? (0, i.jsx)("span", {
                        className: (0, n.W)(d().icon, "right"),
                        children: m
                    }) : null]
                })
            }
        },
        511348: function(e, t, r) {
            "use strict";
            r.d(t, {
                V: function() {
                    return m
                },
                Z: function() {
                    return x
                }
            });
            var i = r(652983),
                o = r(353729),
                n = r(532870),
                a = r(58363),
                l = r(121123),
                s = r(517659),
                d = r(892663),
                u = r(211679),
                c = r(270430);

            function m(e) {
                var t, r;
                let {
                    limit: o,
                    project: m,
                    projectId: x,
                    requireProject: h,
                    users: p,
                    target: v,
                    state: f,
                    meta: b,
                    rollbackCandidate: g,
                    since: w,
                    until: j
                } = e, k = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, y = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "v6", {
                    isReady: z,
                    team: _
                } = (0, c.t7)(), C = p && p.length > 0 ? p.map(e => e.uid).join(",") : null, Z = (null == m ? void 0 : m.id) || x, N = {
                    projectId: Z,
                    limit: o,
                    teamId: null == _ ? void 0 : _.id,
                    target: v || null,
                    users: C,
                    state: f,
                    meta: b,
                    rollbackCandidate: g,
                    since: w,
                    until: j
                }, {
                    value: I
                } = (0, d.q2)(), {
                    value: P
                } = (0, u.R4)(), A = h || (I || P) && void 0 !== g && (!_ || (null === (t = _.billing) || void 0 === t ? void 0 : t.plan) === "hobby"), R = (0, n.ZP)((e, t) => {
                    if (A && !Z) return null;
                    if (!e) return z ? `${(0,l.PP)(y)}${(0,s.c)(N)}` : null;
                    let r = t && t.deployments.length >= o ? t.deployments[t.deployments.length - 1].created - 1 : null;
                    return r && z ? `${(0,l.PP)(y)}${(0,s.c)({...N,from:r})}` : null
                }, e => (0, a.I)(e, {
                    throwOnHTTPError: !0
                }), k), $ = (0, i.useMemo)(() => R.data ? R.data.map(e => e.deployments).flat() : [], [R.data]), L = !!R.data, O = L && 0 === $.length, S = L && R.data && R.size > R.data.length, M = L && R.data && (null === (r = R.data[R.data.length - 1]) || void 0 === r ? void 0 : r.deployments.length) < o;
                return [R, {
                    deployments: $,
                    initialDataLoaded: L,
                    isEmpty: O,
                    loadMore: () => R.setSize(e => e + 1),
                    isLoadingMore: S,
                    isReachingEnd: M,
                    mutate: R.mutate
                }]
            }

            function x(e) {
                let {
                    limit: t,
                    projectId: r,
                    project: i,
                    from: n,
                    target: d,
                    users: u = [],
                    ...m
                } = e, x = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, h = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "v6", {
                    isReady: p,
                    team: v
                } = (0, c.t7)(), f = u.length > 0 ? u.map(e => e.uid).join(",") : null;
                return (0, o.ZP)(() => p && t > 0 ? `${(0,l.PP)(h)}${(0,s.c)({projectId:r||(null==i?void 0:i.id),limit:t,from:n||null,teamId:null==v?void 0:v.id,target:d,users:f,...m})}` : null, e => (0, a.I)(e, {
                    throwOnHTTPError: !0
                }), x)
            }
        },
        69277: function(e) {
            e.exports = {
                wrapper: "input_wrapper__GjQN_",
                "has-border": "input_has-border___SrdR",
                focused: "input_focused__hAZj7",
                disabled: "input_disabled__H7nGQ",
                errored: "input_errored__uRS_3",
                input: "input_input__h_svx",
                right: "input_right__cK2Tc",
                icon: "input_icon__fhN9C",
                "input-wrapper": "input_input-wrapper__BB57R"
            }
        }
    }
]);