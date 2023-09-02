(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [92711], {
        12826: function(e, t, i) {
            "use strict";
            i.d(t, {
                AY: function() {
                    return l
                },
                B9: function() {
                    return o
                },
                mm: function() {
                    return s
                }
            });
            var n = i(573337),
                a = i(930768);
            let r = "speed-insights-v2";

            function s() {
                (0, n.d8)(r, "true")
            }

            function o() {
                let {
                    data: e
                } = (0, a.g)("enable-speed-insights-v2"), t = !1;
                return "boolean" == typeof e && (t = e), t
            }

            function l() {
                let e = o();
                return null === function() {
                    let e = (0, n.ej)(r);
                    return void 0 === e ? null : "true" === e
                }() && e
            }
        },
        288822: function(e, t, i) {
            "use strict";
            var n = i(397458),
                a = i(652983),
                r = i(353729),
                s = i(571387),
                o = i(308108),
                l = i(58363),
                d = i(121123),
                u = i(878593),
                c = i(852049),
                h = i(833733);
            let p = a.memo(e => {
                let {
                    active: t,
                    onClose: i,
                    deployment: p,
                    teamId: m
                } = e, [v, g] = (0, a.useState)(!1), f = (0, o.e1)(), b = (0, h.Z)(), y = (0, a.useCallback)(async () => {
                    if (!p) return;
                    g(!0);
                    let e = m ? "?teamId=" + m : "",
                        t = await (0, l.I)(`${(0,d.PP)("v12")}/${p.id}/cancel` + e, {
                            throwOnHTTPError: !1,
                            method: "PATCH"
                        });
                    t.error && f.error(`Could not cancel the deployment, it's ${p.readyState}`), "CANCELED" === t.readyState && (f.success("The deployment has been successfully canceled."), (0, r.JG)((0, u.Gr)(b), { ...p,
                        readyState: t.readyState,
                        status: t.readyState,
                        canceledAt: t.canceledAt,
                        host: p.url,
                        isPrivate: !p.public
                    })), g(!1), i()
                }, [p, m, f, b, i]);
                return (0, n.jsxs)(s.u.Modal, {
                    active: t,
                    onClickOutside: i,
                    width: "500px",
                    children: [(0, n.jsxs)(s.u.Body, {
                        children: [(0, n.jsx)(s.u.Header, {
                            children: (0, n.jsx)(s.u.Title, {
                                children: "Cancel Deployment"
                            })
                        }), (0, n.jsx)(c.ZP, {
                            children: "Canceling this deployment will immediately stop the build, with no way to resume."
                        }), (0, n.jsx)(c.ZP, {
                            style: {
                                margin: 0
                            },
                            children: "Are you sure you want to continue?"
                        })]
                    }), (0, n.jsxs)(s.u.Actions, {
                        children: [(0, n.jsx)(s.u.Action, {
                            loading: !1,
                            onClick: i,
                            type: "secondary",
                            children: "Close"
                        }), (0, n.jsx)(s.u.Action, {
                            disabled: v,
                            loading: v,
                            onClick: y,
                            children: "Cancel deployment"
                        })]
                    })]
                })
            });
            t.Z = p
        },
        579877: function(e, t, i) {
            "use strict";
            var n = i(397458),
                a = i(14517),
                r = i(121446),
                s = i(807548),
                o = i(791688),
                l = i(892663),
                d = i(132177),
                u = i.n(d);
            let c = {
                    QUEUED: "This deployment is queued.",
                    BUILDING: "This deployment is building.",
                    READY: "This deployment is ready.",
                    ERROR: "This deployment had an error.",
                    CANCELED: "This deployment was canceled.",
                    INITIALIZING: "This deployment is initializing.",
                    UPLOADING: "This deployment is initializing.",
                    DEPLOYING: "This deployment is initializing.",
                    ARCHIVED: "This deployment is initializing."
                },
                h = (e, t, i, n, a, r) => i ? "Provisioning" : e ? "Running Checks" : (null == r ? void 0 : r.checksConclusion) === "failed" ? "Checks Failed" : (null == r ? void 0 : r.aliasError) ? "Domain Error" : t ? a ? "Assigning Custom Domains" : "Assigning Domains" : n[0] + n.slice(1).toLowerCase();
            t.Z = e => {
                let {
                    state: t,
                    label: i,
                    deployment: d,
                    statusTextColor: p = "gray-1000"
                } = e, {
                    areChecksRunning: m,
                    areDomainsAssigning: v,
                    isBuildContainerProvisioning: g
                } = (0, s.Z)(d), {
                    readyValue: f
                } = (0, l._Z)();
                return (0, n.jsxs)("span", {
                    "aria-label": t ? c[t] : void 0,
                    className: u().wrapper,
                    "data-testid": (0, o.C)("deployment", "status"),
                    title: g ? "The build container for this deployment is being provisioned via Vercel Secure Compute." : m ? "The checks for this deployment are running." : (null == d ? void 0 : d.checksConclusion) === "failed" ? "The checks for this deployment have failed." : (null == d ? void 0 : d.aliasError) ? d.aliasError.message : v ? f ? "This deployment is assigning custom domains." : "This deployment is assigning domains." : t ? c[t] : void 0,
                    children: [(0, n.jsx)("span", {
                        className: (0, a.W)(u().status, {
                            [u().ready]: null == d ? void 0 : d.aliasAssigned,
                            [u().error]: "ERROR" === t || (null == d ? void 0 : d.checksConclusion) === "failed" || (null == d ? void 0 : d.aliasError),
                            [u().building]: m || v || ["INITIALIZING", "BUILDING", "UPLOADING", "DEPLOYING"].includes(t ? ? "")
                        })
                    }), i && t ? (0, n.jsx)(r.x, {
                        as: "span",
                        className: u()["status-label"],
                        color: p,
                        weight: 500,
                        children: h(m, v, g, t, !1, d)
                    }) : null]
                })
            }
        },
        443339: function(e, t, i) {
            "use strict";
            i.d(t, {
                y: function() {
                    return s
                }
            });
            var n = i(652983),
                a = i(878593),
                r = i(833733);

            function s() {
                let e = (0, n.useRef)(3e3),
                    t = (0, r.Z)(),
                    i = (0, a.ZP)(t, {
                        refreshInterval: e.current
                    }, {
                        automaticAliases: !0,
                        gitRepo: !0
                    }),
                    {
                        data: s
                    } = i,
                    o = null == s ? void 0 : s.readyState;
                return e.current = (null == s ? void 0 : s.aliasAssigned) || "ERROR" === o || "CANCELED" === o ? 0 : 3e3, i
            }
        },
        807548: function(e, t, i) {
            "use strict";

            function n(e) {
                let t = e && ("readyState" in e && "READY" === e.readyState || "READY" === e.state),
                    i = e && ("readyState" in e && "QUEUED" === e.readyState || "QUEUED" === e.state),
                    n = t && e.checksState && !(null == e ? void 0 : e.checksConclusion),
                    a = t && (!e.checksState || ["success", "skipped"].includes((null == e ? void 0 : e.checksConclusion) ? ? "")) && !e.aliasAssigned && !e.aliasError;
                return {
                    areChecksRunning: n ? ? !1,
                    areDomainsAssigning: a ? ? !1,
                    isBuildContainerProvisioning: !!(i && e.connectConfigurationId && (e.connectBuildsEnabled ? ? !0))
                }
            }
            i.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        740844: function(e, t, i) {
            "use strict";
            i.d(t, {
                Ku: function() {
                    return m
                },
                RY: function() {
                    return g
                },
                jD: function() {
                    return f
                }
            });
            var n = i(397458);
            i(652983);
            var a = i(426326),
                r = i(804265),
                s = i(10709),
                o = i(699072),
                l = i(923756),
                d = i(561252),
                u = i(725181),
                c = i(211679),
                h = i(892663),
                p = i(210699);
            let m = () => {
                    let {
                        isReady: e,
                        value: t
                    } = (0, h.Tt)(), {
                        isReady: i,
                        value: n
                    } = (0, c.wr)();
                    return !!e && !!t || !!i && !!n
                },
                v = [{
                    title: "Home",
                    path: "home",
                    icon: (0, n.jsx)(r.S, {}),
                    scope: "TeamAndProject",
                    billingPlans: ["pro", "enterprise", "hobby"]
                }, {
                    title: "Analytics",
                    path: "analytics",
                    icon: (0, n.jsx)(s.c, {}),
                    scope: "Project",
                    billingPlans: ["pro", "enterprise", "hobby"]
                }, {
                    title: "Metrics",
                    path: "metrics",
                    icon: (0, n.jsx)(o.v, {}),
                    scope: "TeamAndProject",
                    billingPlans: ["enterprise"]
                }, {
                    title: "Billing",
                    path: "billing",
                    icon: (0, n.jsx)(l.X, {}),
                    scope: "TeamAndProject",
                    billingPlans: ["pro", "enterprise", "hobby"]
                }, {
                    title: "Logs",
                    path: "logs",
                    icon: (0, n.jsx)(d.P, {}),
                    scope: "Project",
                    billingPlans: ["pro", "enterprise", "hobby"]
                }, {
                    title: "Security",
                    path: "security",
                    icon: (0, n.jsx)(u.W, {}),
                    scope: "TeamAndProject",
                    billingPlans: ["pro", "enterprise", "hobby"]
                }],
                g = () => {
                    let {
                        query: e
                    } = (0, a.useRouter)(), t = "project" in e, {
                        account: i
                    } = (0, p.Z)(), n = v.filter(e => t ? "Project" === e.scope || "TeamAndProject" === e.scope : "Team" === e.scope || "TeamAndProject" === e.scope);
                    return n.filter(e => {
                        var t;
                        let n = null == i ? void 0 : null === (t = i.billing) || void 0 === t ? void 0 : t.plan;
                        return void 0 === n ? e.billingPlans.includes("hobby") : e.billingPlans.includes(n)
                    })
                },
                f = 160
        },
        18561: function(e, t, i) {
            "use strict";
            i.d(t, {
                fM: function() {
                    return d
                },
                gs: function() {
                    return o
                },
                lR: function() {
                    return l
                },
                oU: function() {
                    return p
                },
                zT: function() {
                    return h
                }
            });
            var n = i(652983),
                a = i(517659),
                r = i(58363),
                s = i(40268);
            let o = 2592e6,
                l = e => {
                    switch (e) {
                        case "New":
                            return "New";
                        case "Solved":
                        case "Closed":
                            return "Closed";
                        default:
                            return "Ongoing"
                    }
                },
                d = {
                    New: "amber-subtle",
                    Ongoing: "blue-subtle",
                    Closed: "gray-subtle"
                },
                u = "/api/v3/support-center/support-cases",
                c = e => {
                    let {
                        isTeam: t,
                        teamSlug: i
                    } = e;
                    return !0 === t && i ? `/teams/${i}` : ""
                },
                h = {
                    api: {
                        cases: {
                            get: e => {
                                let {
                                    isTeam: t,
                                    teamId: i,
                                    limit: n,
                                    offset: r
                                } = e;
                                return void 0 === t ? null : `${u}${(0,a.c)({teamId:i,limit:n,offset:r})}`
                            },
                            warmup: e => {
                                let {
                                    isTeam: t,
                                    teamId: i
                                } = e;
                                return void 0 === t ? null : `${u}-warmup${(0,a.c)({teamId:i})}`
                            }
                        },
                        case: {
                            get: e => {
                                let {
                                    isTeam: t,
                                    teamId: i,
                                    caseNumber: n
                                } = e;
                                return void 0 !== t && n ? `${u}/${n}${(0,a.c)({teamId:i})}` : null
                            },
                            update: e => {
                                let {
                                    isTeam: t,
                                    teamId: i,
                                    caseNumber: n
                                } = e;
                                return void 0 === t ? null : `${u}/${n}${(0,a.c)({teamId:i})}`
                            },
                            create: e => {
                                let {
                                    isTeam: t,
                                    teamId: i
                                } = e;
                                return void 0 === t ? null : `${u}${(0,a.c)({teamId:i})}`
                            },
                            comments: {
                                create: e => {
                                    let {
                                        isTeam: t,
                                        teamId: i,
                                        caseNumber: n
                                    } = e;
                                    return void 0 === t ? null : `${u}/${n}/comments${(0,a.c)({teamId:i})}`
                                }
                            }
                        }
                    },
                    cases: e => `${c(e)}/support/cases`,
                    case: e => {
                        let {
                            caseNumber: t,
                            ...i
                        } = e;
                        return `${c(i)}/support/cases/${t}`
                    },
                    newCase: e => `${c(e)}/support/cases/new`
                };

            function p(e) {
                let {
                    isTeam: t,
                    team: i,
                    supportCenterEnabled: a
                } = e, [o, l] = (0, n.useState)(!1), {
                    isLoading: d,
                    can: u
                } = (0, s.ZP)(), c = !d && u(s.aU.List, s._z.SupportCase);
                (0, n.useEffect)(() => {
                    if (!a || o) return;
                    let e = h.api.cases.warmup({
                        isTeam: t,
                        teamId: null == i ? void 0 : i.id
                    });
                    e && c && ((0, r.I)(e, {
                        method: "GET",
                        throwOnHTTPError: !1
                    }), l(!0))
                }, [t, i, o, a, c])
            }
        },
        844257: function(e, t, i) {
            "use strict";
            i.d(t, {
                BD: function() {
                    return p
                },
                Gf: function() {
                    return s
                },
                KF: function() {
                    return d
                },
                PA: function() {
                    return o
                },
                Wf: function() {
                    return y
                },
                YG: function() {
                    return h
                },
                YS: function() {
                    return v
                },
                _5: function() {
                    return l
                },
                f1: function() {
                    return f
                },
                fG: function() {
                    return m
                },
                gF: function() {
                    return n
                },
                h2: function() {
                    return u
                },
                je: function() {
                    return A
                },
                kM: function() {
                    return S
                },
                ke: function() {
                    return c
                },
                nS: function() {
                    return a
                },
                pn: function() {
                    return b
                },
                sW: function() {
                    return r
                },
                xe: function() {
                    return g
                }
            });
            let n = {
                    title: "Overview",
                    cards: {
                        limits: {
                            title: "Overview",
                            anchorOverride: "PageOverview"
                        }
                    },
                    hideTitle: !0
                },
                a = {
                    title: "Networking",
                    cards: {
                        topPaths: {
                            title: "Top Paths"
                        },
                        bandwidth: {
                            title: "Bandwidth"
                        },
                        requests: {
                            title: "Requests"
                        }
                    }
                },
                r = {
                    title: "Data Cache",
                    cards: {
                        overview: {
                            title: "Overview"
                        },
                        bandwidth: {
                            title: "Bandwidth"
                        },
                        revalidations: {
                            title: "Revalidations"
                        }
                    }
                },
                s = {
                    title: "Serverless Functions",
                    cards: {
                        invocations: {
                            title: "Invocations"
                        },
                        execution: {
                            title: "Execution"
                        },
                        throttles: {
                            title: "Throttles"
                        }
                    }
                },
                o = {
                    title: "Edge Functions",
                    cards: {
                        invocations: {
                            title: "Invocations"
                        },
                        executionUnits: {
                            title: "Execution Units"
                        },
                        cpuTime: {
                            title: "CPU Time"
                        }
                    }
                },
                l = {
                    title: "Edge Middleware",
                    cards: {
                        invocations: {
                            title: "Invocations"
                        },
                        cpuTime: {
                            title: "CPU Time"
                        }
                    }
                },
                d = {
                    title: "Edge Config",
                    cards: {
                        reads: {
                            title: "Reads"
                        },
                        writes: {
                            title: "Writes"
                        }
                    }
                },
                u = {
                    title: "Monitoring",
                    cards: {
                        dataPoints: {
                            title: "Data Points"
                        }
                    }
                },
                c = {
                    title: "Builds",
                    cards: {
                        buildTime: {
                            title: "Build Time"
                        },
                        numberOfBuilds: {
                            title: "Number of Builds"
                        }
                    }
                },
                h = {
                    title: "Artifacts",
                    cards: {
                        timeSaved: {
                            title: "Time Saved"
                        },
                        remoteCacheArtifacts: {
                            title: "Remote Cache Artifacts"
                        },
                        totalSize: {
                            title: "Total Size"
                        }
                    }
                },
                p = {
                    title: "Postgres",
                    cards: {
                        computeTime: {
                            title: "Compute Time"
                        },
                        dataStorage: {
                            title: "Data Storage"
                        },
                        dataTransfer: {
                            title: "Data Transfer"
                        },
                        writtenData: {
                            title: "Written Data"
                        },
                        databases: {
                            title: "Databases"
                        }
                    }
                },
                m = {
                    title: "KV",
                    cards: {
                        requests: {
                            title: "Requests"
                        },
                        dataTransfer: {
                            title: "Data Transfer"
                        },
                        storage: {
                            title: "Storage"
                        },
                        databases: {
                            title: "Databases"
                        }
                    }
                },
                v = {
                    title: "Blob",
                    cards: {
                        storage: {
                            title: "Storage"
                        },
                        simpleOperations: {
                            title: "Simple Operations"
                        },
                        advancedOperations: {
                            title: "Advanced Operations"
                        },
                        getResponseObjectSize: {
                            title: "Outgoing Bandwidth"
                        },
                        databases: {
                            title: "Databases"
                        }
                    }
                },
                g = {
                    title: "Log Drain",
                    cards: {
                        logDrain: {
                            title: "Log Drain"
                        }
                    }
                },
                f = {
                    title: "Cron Jobs",
                    cards: {
                        jobs: {
                            title: "Jobs"
                        }
                    }
                },
                b = {
                    title: "Web Analytics",
                    cards: {
                        events: {
                            title: "Events"
                        }
                    }
                },
                y = {
                    title: "Speed Insights",
                    cards: {
                        number: {
                            title: "Data Points"
                        }
                    }
                },
                A = {
                    title: "Image Optimization",
                    cards: {
                        count: {
                            title: "Count"
                        }
                    }
                },
                S = [n, a, r, s, o, l, d, u, c, h, p, m, v, f, g, b, y, A]
        },
        727913: function(e, t, i) {
            "use strict";
            i.d(t, {
                T0: function() {
                    return o
                }
            });
            var n, a, r = i(518650);
            (n = a || (a = {})).Visitors = "devices", n.TotalCount = "total", n.RES = "res";
            let s = Intl.NumberFormat("en-US", {
                notation: "compact",
                compactDisplay: "short"
            });

            function o(e) {
                return s.format(e)
            }
            r.h
        },
        546952: function(e, t, i) {
            "use strict";
            i.d(t, {
                l: function() {
                    return a
                },
                z: function() {
                    return r
                }
            });
            var n = i(210699);
            let a = e => {
                let {
                    plan: t,
                    isPlus: i
                } = e;
                return "hobby" === t ? 2500 : "pro" === t ? i ? 2e7 : 5e5 : 1 / 0
            };

            function r() {
                var e, t, i, a, r, s;
                let {
                    team: o,
                    mutate: l
                } = (0, n.Z)(), d = (null == o ? void 0 : null === (e = o.billing) || void 0 === e ? void 0 : e.plan) || "hobby", u = (null == o ? void 0 : null === (t = o.billing) || void 0 === t ? void 0 : t.status) === "trialing";
                return "pro" === d && (null == o ? void 0 : null === (a = o.enabledInvoiceItems) || void 0 === a ? void 0 : null === (i = a.webAnalytics) || void 0 === i ? void 0 : i.enabled) ? {
                    isPlus: !0,
                    mutate: l,
                    isTrialTeam: u,
                    plan: d,
                    isSubscribed: !0
                } : {
                    isPlus: !1,
                    mutate: l,
                    plan: d,
                    isTrialTeam: u,
                    isSubscribed: "hobby" === d || ((null == o ? void 0 : null === (s = o.enabledInvoiceItems) || void 0 === s ? void 0 : null === (r = s.webAnalyticsEvent) || void 0 === r ? void 0 : r.enabled) ? ? !1)
                }
            }
        },
        549564: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return w
                },
                K: function() {
                    return N
                }
            });
            var n = i(397458),
                a = i(652983),
                r = i(426326),
                s = i(749210),
                o = i(628987),
                l = i(426476),
                d = i(857994),
                u = i(950429),
                c = i(923399),
                h = i(157490),
                p = i(566416),
                m = i(270430),
                v = i(40268),
                g = i(211679),
                f = i(18561),
                b = i(740844),
                y = i(892663),
                A = i(831517);
            let S = () => {
                let {
                    isReady: e,
                    value: t
                } = (0, y.ow)(), {
                    isReady: i,
                    value: n
                } = (0, g.EQ)(), {
                    ready: a,
                    value: r
                } = (0, A.v)();
                return !!e && !!i && !!a && (!!t || !!n) && !!r
            };
            var C = i(314988),
                x = i(41995),
                $ = i(854635),
                T = i(431465),
                I = i(12826),
                M = i(210699),
                j = i(96426);
            i(684874), i(844257), i(727913);
            var P = i(546952),
                R = i(88487),
                E = i(656379);

            function w(e) {
                let {
                    active: t,
                    ...i
                } = e;
                (0, p.Z)();
                let s = (0, r.useRouter)(),
                    {
                        query: o,
                        pathname: d
                    } = s,
                    m = o.teamSlug ? ? "",
                    g = o.project ? ? "",
                    {
                        data: f
                    } = (0, T.PY)(g),
                    b = d.startsWith("/[teamSlug]/[project]/[id]"),
                    y = !b && d.startsWith("/[teamSlug]/[project]"),
                    {
                        isLoading: A,
                        can: S
                    } = (0, v.ZP)(),
                    C = S(v.aU.Read, v._z.Project),
                    I = (0, a.useCallback)(e => s.isReady ? e : void 0, [s.isReady]),
                    M = (0, a.useMemo)(() => A || C ? y ? (0, n.jsx)(c.ck, {
                        bold: !0,
                        children: (0, n.jsx)(R.m, {
                            primaryColumn: "project",
                            children: (0, n.jsxs)(u.r, {
                                className: "breadcrumb-link geist-ellipsis",
                                href: I(`/${m}/${g}`),
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8
                                },
                                title: g,
                                children: [f ? (0, n.jsx)(x.l, {
                                    deployment: (0, $.VW)(f),
                                    project: f,
                                    size: 20
                                }) : (0, n.jsx)(l.qE, {
                                    placeholder: !0,
                                    size: 20
                                }), g]
                            })
                        })
                    }) : void 0 : null, [y, f, I, g, m, A, C]),
                    j = N({
                        active: t
                    });
                return (0, n.jsx)(E.Z, {
                    header: (0, n.jsx)(h.Z, { ...i,
                        breadcrumb: M || i.breadcrumb
                    }),
                    isDashboard: !0,
                    tabs: j,
                    title: "Deployment",
                    ...i
                })
            }
            let D = e => {
                    let {
                        teamSlug: t
                    } = e, i = new Set(["/dashboard/integrations/console"]);
                    return t && i.add(`/dashboard/${t}/integrations/console`), t && i.add(`/dashboard/integrations/console/${t}`), i.add("/dashboard/integrations/create"), i.add("/dashboard/integrations/edit"), t && (t && i.add(`/dashboard/${t}/integrations/console/${t}`), i.add(`/dashboard/${t}/integrations/create`), i.add(`/dashboard/${t}/integrations/edit`)), i
                },
                N = e => {
                    let {
                        active: t = "",
                        spacesCatalogEnabled: i = !1
                    } = e, n = t.toLowerCase(), r = (0, o.usePathname)(), l = (0, s.useRouter)(), [u] = (null == r ? void 0 : r.split("/").reverse()) ? ? [], {
                        isTeam: c,
                        team: h,
                        teamSlug: p
                    } = (0, m.t7)(), y = (0, d.U)(), A = null == y ? void 0 : y.project, x = null == y ? void 0 : y.id, $ = null == y ? void 0 : y.spaceIdOrSlug, T = null == y ? void 0 : y.suffix, {
                        isReady: R,
                        value: E
                    } = (0, g.mM)(), w = R && E;
                    (0, f.oU)({
                        isTeam: c,
                        team: h,
                        supportCenterEnabled: !!w
                    });
                    let {
                        isLoading: N,
                        can: G
                    } = (0, v.ZP)(), B = G(v.aU.Read, v._z.Project), k = (0, a.useMemo)(() => D({
                        teamSlug: p
                    }), [p]), Z = (0, b.Ku)(), L = S(), U = (0, C.A)(), O = (0, I.AY)(), {
                        level: z
                    } = function() {
                        var e, t, i, n, a, r;
                        let {
                            user: s,
                            team: o
                        } = (0, M.Z)(), l = (0, P.z)(), d = (null == o ? void 0 : null === (e = o.featureBlocks) || void 0 === e ? void 0 : e.webAnalytics) || (null == s ? void 0 : null === (t = s.featureBlocks) || void 0 === t ? void 0 : t.webAnalytics), u = (null == o ? void 0 : null === (n = o.billing) || void 0 === n ? void 0 : null === (i = n.period) || void 0 === i ? void 0 : i.start) || (0, j._)().start, c = (null == o ? void 0 : null === (r = o.billing) || void 0 === r ? void 0 : null === (a = r.period) || void 0 === a ? void 0 : a.end) || (0, j._)().end, h = (0, j.z)({
                            startDatetime: u,
                            endDatetime: c
                        }), p = h.data.usage, m = (0, P.l)(l), v = (p.used || 0) / m, g = v >= 1, {
                            isCurrentlyBlocked: f,
                            blockedFrom: b,
                            blockedUntil: y
                        } = d || {}, A = b ? new Date(b) : null, S = y ? new Date(y) : null, C = v >= .8;
                        return {
                            isOverLimit: g,
                            isCurrentlyBlocked: !!f,
                            blockedFrom: A,
                            blockedUntil: S,
                            showUsageBanner: C,
                            level: C ? g ? "error" : "warning" : null,
                            webAnalyticsFeatureBlock: d,
                            billing: l,
                            team: o,
                            usage: p,
                            percentageToMax: v
                        }
                    }(), H = (0, a.useCallback)(e => r ? e : void 0, [r]), K = r && k.has(r), F = p && A && x && (null == r ? void 0 : r.startsWith(`/${p}/${A}/${x}`)), _ = !F && p && A && (null == r ? void 0 : r.startsWith(`/${p}/${A}`)), V = c && p, W = (0, a.useMemo)(() => {
                        if (l && !l.isReady) return [];
                        if ($) return [{
                            href: V ? `/teams/${p}/spaces/${$}` : `/spaces/${$}`,
                            text: "Space",
                            isActive: u === $
                        }, {
                            href: V ? `/teams/${p}/spaces/${$}/runs` : `/spaces/${$}/runs`,
                            text: "Runs",
                            isActive: "runs" === u
                        }, {
                            href: V ? `/teams/${p}/spaces/${$}/conformance` : `/spaces/${$}/conformance`,
                            text: "Conformance",
                            isActive: "conformance" === u
                        }, {
                            href: V ? `/teams/${p}/spaces/${$}/insights` : `/spaces/${$}/insights`,
                            text: "Insights",
                            isActive: "insights" === u
                        }, ...i ? [{
                            href: V ? `/teams/${p}/spaces/${$}/catalog` : `/spaces/${$}/catalog`,
                            text: "Catalog",
                            isActive: "catalog" === u
                        }] : [], {
                            href: V ? `/teams/${p}/spaces/${$}/settings` : `/spaces/${$}/settings`,
                            text: "Settings",
                            isActive: "settings" === u
                        }];
                        if (F && (N || B)) return p ? [{
                            href: `/${p}/${A}/${x}${T?`/${T}`:""}`,
                            text: "Deployment",
                            isActive: "deployment" === n
                        }, {
                            href: `/${p}/${A}/${x}${T?`/${T}`:""}/logs`,
                            text: "Logs",
                            isActive: "logs" === n
                        }, {
                            href: `/${p}/${A}/${x}${T?`/${T}`:""}/functions`,
                            text: "Functions",
                            isActive: "functions" === n
                        }, {
                            href: `/${p}/${A}/${x}${T?`/${T}`:""}/source`,
                            text: "Source",
                            isActive: "source" === n
                        }, {
                            href: `/${p}/${A}/${x}${T?`${T}`:""}/og`,
                            text: "Open Graph",
                            isActive: "og" === n
                        }].map(e => {
                            let {
                                href: t,
                                ...i
                            } = e;
                            return {
                                href: H(t),
                                ...i
                            }
                        }) : [];
                        if (_ && (N || B)) {
                            if (!p) return [];
                            let e = [{
                                href: `/${p}/${A}`,
                                text: "Project",
                                isActive: "project" === n
                            }, {
                                href: `/${p}/${A}/deployments`,
                                text: "Deployments",
                                isActive: "deployments" === n
                            }];
                            return e.push({
                                href: `/${p}/${A}/analytics`,
                                text: "Analytics",
                                isActive: "analytics" === n || "analytics" === u,
                                highlight: z || void 0
                            }, {
                                href: `/${p}/${A}/speed-insights`,
                                text: "Speed Insights",
                                isActive: "speed insights" === n || "speed-insights-beta" === u,
                                highlight: O ? "new" : void 0
                            }), e.push({
                                href: `/${p}/${A}/logs`,
                                text: "Logs",
                                isActive: "logs" === n
                            }), Z && e.push({
                                href: `/${p}/${A}/observe/home`,
                                text: "Observe",
                                isActive: "observe" === n
                            }), e.push({
                                href: `/${p}/${A}/stores`,
                                text: "Storage",
                                isActive: "edge-config" === n || "storage" === n || "kv" === n || "postgres" === n || "edge config" === n
                            }, {
                                href: `/${p}/${A}/settings`,
                                text: "Settings",
                                isActive: "settings" === n
                            }), e.map(e => {
                                let {
                                    href: t,
                                    ...i
                                } = e;
                                return {
                                    href: H(t),
                                    ...i
                                }
                            })
                        }
                        return K ? [{
                            text: "Integration Console",
                            href: V ? `/dashboard/${p}/integrations/console` : "/dashboard/integrations/console",
                            isActive: "console" === n
                        }, {
                            text: "Create New",
                            href: V ? `/dashboard/${p}/integrations/create` : "/dashboard/integrations/create",
                            isActive: "create" === n
                        }].map(e => {
                            let {
                                href: t,
                                ...i
                            } = e;
                            return {
                                href: H(t),
                                ...i
                            }
                        }) : [{
                            href: V ? `/${p}` : "/dashboard",
                            text: "Overview",
                            isActive: "overview" === n
                        }, {
                            href: `${V?`/dashboard/${p}`:"/dashboard"}/integrations`,
                            text: "Integrations",
                            isActive: "integrations" === n
                        }, {
                            href: `${V?`/dashboard/${p}`:"/dashboard"}/activity`,
                            text: "Activity",
                            isActive: "activity" === n
                        }, {
                            href: `${V?`/dashboard/${p}`:"/dashboard"}/domains`,
                            text: "Domains",
                            isActive: "domains" === n
                        }, Z && {
                            href: `${V?`/dashboard/${p}`:"/dashboard"}/observe/home`,
                            text: "Observe",
                            isActive: "observe" === n
                        }, {
                            href: `${V?`/dashboard/${p}`:"/dashboard"}/usage`,
                            text: "Usage",
                            isActive: "usage" === n
                        }, {
                            href: `${V?`/dashboard/${p}`:"/dashboard"}/monitoring`,
                            text: "Monitoring",
                            isActive: "monitoring" === n
                        }, L && V && {
                            href: `/dashboard/${p}/alerts`,
                            text: "Alerts",
                            isActive: "alerts" === n
                        }, {
                            href: `${V?`/dashboard/${p}`:"/dashboard"}/stores`,
                            text: "Storage",
                            isActive: "storage" === n || "kv" === n || "postgres" === n || "edge config" === n || "edge-config" === n
                        }, w && {
                            href: f.zT.cases({
                                isTeam: c,
                                teamSlug: p
                            }),
                            text: "Support",
                            isActive: "support" === n
                        }, {
                            href: V ? `/teams/${p}/settings` : "/account",
                            text: "Settings",
                            isActive: "settings" === n || "account" === n
                        }, U && {
                            href: `${V?`/teams/${p}`:"/dashboard"}/comments`,
                            text: "Comments",
                            isActive: "comments" === n
                        }].filter(Boolean).map(e => ({
                            href: e && H(e.href),
                            ...e
                        }))
                    }, [F, _, K, V, p, n, $, l, Z, L, U, O, w, c, A, x, T, H, i, u, N, B, z]);
                    return W
                }
        },
        492711: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return z
                }
            });
            var n = i(397458),
                a = i(652983),
                r = i(549564),
                s = i(426326),
                o = i(121446),
                l = i(243801),
                d = i.n(l),
                u = i(316944),
                c = i(487554),
                h = i(446173),
                p = i(7594),
                m = i(342958),
                v = i(579877),
                g = i(288822),
                f = i(210699),
                b = i(807548),
                y = i(443339),
                A = (0, a.memo)(function(e) {
                    let {
                        onClick: t,
                        failed: i
                    } = e, [r, s] = (0, a.useState)(!1), {
                        user: o,
                        team: l
                    } = (0, f.Z)(), {
                        data: A
                    } = (0, y.y)(), {
                        areChecksRunning: S,
                        areDomainsAssigning: C
                    } = (0, b.Z)(A);
                    return (0, n.jsxs)(m.Z, {
                        row: !0,
                        vcenter: !0,
                        children: [function(e) {
                            if (!e) return null;
                            let {
                                readyState: t
                            } = e;
                            return (0, n.jsxs)(m.Z, {
                                className: "geist-hide-on-tablet",
                                row: !0,
                                children: [(0, n.jsx)(v.Z, {
                                    deployment: e,
                                    label: !0,
                                    state: t,
                                    statusTextColor: "gray-900"
                                }), (0, n.jsx)(p.L, {
                                    inline: !0,
                                    x: 1
                                })]
                            })
                        }(A), S ? (0, n.jsx)(u.z, {
                            disabled: !0,
                            size: "small",
                            children: "Waiting for Checks"
                        }) : C ? (0, n.jsx)(u.z, {
                            disabled: !0,
                            size: "small",
                            children: "Waiting for Domains"
                        }) : A && (o || l) && !["READY", "ERROR", "CANCELED"].includes(A.readyState) ? (0, n.jsx)(u.z, {
                            onClick: () => s(!0),
                            prefix: (0, n.jsx)(h.P, {}),
                            size: "small",
                            type: "secondary",
                            children: "Cancel"
                        }) : (0, n.jsxs)(c.Z, {
                            disabled: (null == A ? void 0 : A.readyState) !== "READY" && !t,
                            href: A && !t ? `https://${A.url}` : "",
                            onClick: () => {
                                null == t || t()
                            },
                            size: "small",
                            type: t ? "error" : void 0,
                            width: "90px",
                            children: [i || t ? "Redeploy" : "Visit", (0, n.jsx)(d(), {
                                id: "2c8813e279fee9df",
                                children: ".sticky-content .button.disabled{-webkit-filter:none!important;filter:none!important}"
                            })]
                        }), A ? (0, n.jsx)(g.Z, {
                            active: r,
                            deployment: A,
                            onClose: () => s(!1),
                            teamId: A.team ? A.team.id : null
                        }) : null]
                    })
                }),
                S = i(923399),
                C = i(700246),
                x = i(957717),
                $ = i(791688);

            function T(e) {
                let {
                    title: t,
                    children: i
                } = e;
                return (0, n.jsx)(x.u, {
                    delay: !1,
                    position: "bottom",
                    text: t,
                    children: (0, n.jsx)(C.C, {
                        "data-testid": (0, $.C)("deployment", "public-badge"),
                        size: "sm",
                        children: (0, n.jsx)("b", {
                            children: i
                        })
                    })
                })
            }
            var I = i(869480),
                M = i.n(I),
                j = i(950429);
            let P = e => {
                let {
                    href: t,
                    name: i,
                    disabled: a
                } = e;
                return (0, n.jsx)(S.ck, {
                    bold: !0,
                    disabled: a,
                    children: (0, n.jsx)("span", {
                        className: "geist-ellipsis",
                        title: i,
                        children: t ? (0, n.jsx)(j.r, {
                            href: t,
                            children: i
                        }) : i
                    })
                })
            };
            P.propTypes = {
                href: M().string,
                name: M().string
            };
            var R = i(157490),
                E = i(998845),
                w = i(431465),
                D = i(921949),
                N = i(774516),
                G = i(41995),
                B = i(854635),
                k = i(88487),
                Z = i(466790),
                L = i.n(Z),
                U = i(656379);

            function O(e) {
                let {
                    active: t,
                    ...i
                } = e, l = (0, r.K)({
                    active: t
                }), d = function() {
                    let {
                        data: e
                    } = (0, y.y)(), {
                        data: t
                    } = (0, w.PY)(null == e ? void 0 : e.projectId), i = (0, D.Av)(), {
                        query: r
                    } = (0, s.useRouter)(), {
                        teamSlug: l,
                        handle: d,
                        id: u,
                        project: c,
                        appname: h
                    } = r, m = h || c, g = e ? !1 === e.public : void 0, f = e ? (0, E.Z)(e) : {
                        appname: m,
                        hash: u
                    }, b = (0, N.m)(), A = (0, a.useMemo)(() => g ? null : (0, n.jsx)(T, {
                        title: "This deployment is open-source: its source and build logs are public for everyone.",
                        children: "Public"
                    }), [g]), C = (0, a.useMemo)(() => e ? (0, n.jsx)(S.ck, {
                        ellipsis: !0,
                        children: (0, n.jsxs)("span", {
                            className: "geist-inline-center",
                            children: [(0, n.jsx)(v.Z, {
                                deployment: e,
                                state: e.readyState
                            }), (0, n.jsx)(p.L, {
                                inline: !0,
                                x: .5
                            }), (0, n.jsx)(o.x, {
                                size: 14,
                                weight: 500,
                                children: f.hash
                            }), i ? null : A && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(p.L, {
                                    inline: !0,
                                    x: .5
                                }), A]
                            })]
                        })
                    }) : null, [e, f.hash, i, A]), x = (0, a.useMemo)(() => b ? (0, n.jsx)(P, {
                        disabled: !0,
                        name: String(m)
                    }) : t ? (0, n.jsx)(S.ck, {
                        bold: !0,
                        children: (0, n.jsx)(k.m, {
                            primaryColumn: "project",
                            children: (0, n.jsxs)(j.r, {
                                className: "breadcrumb-link geist-ellipsis",
                                href: `/${encodeURIComponent(d?String(d):String(l))}/${encodeURIComponent(t.name)}/deployments`,
                                style: {
                                    display: "flex",
                                    gap: 8,
                                    alignItems: "center"
                                },
                                title: t.name,
                                children: [(0, n.jsx)(G.l, {
                                    deployment: (0, B.VW)(t),
                                    project: t,
                                    size: 20
                                }), (0, n.jsx)("span", {
                                    className: L().hideOnMobile,
                                    children: t.name
                                })]
                            })
                        })
                    }) : null, [b, m, t, d, l]);
                    return e && (b || x) && C ? (0, n.jsxs)(n.Fragment, {
                        children: [x, (0, n.jsx)(S.t6, {}), C]
                    }) : null
                }();
                return (0, n.jsx)(U.Z, {
                    header: (0, n.jsx)(R.Z, {
                        breadcrumb: d ? ? void 0,
                        isDeploymentPage: !0,
                        ...i
                    }),
                    isDashboard: !0,
                    tabs: l,
                    title: "Deployment",
                    ...i,
                    stickyContent: (0, n.jsx)(A, {})
                })
            }
            var z = function(e) {
                let {
                    deployment: t,
                    dashboard: i,
                    ...a
                } = e;
                if (i) return (0, n.jsx)(r.Z, { ...a
                });
                if (t) return (0, n.jsx)(O, { ...a
                });
                if (a.marketing) throw Error("#/geist/page import should be replace with @geist/marketing-page");
                return (0, n.jsx)(U.Z, { ...a
                })
            }
        },
        518650: function(e, t, i) {
            "use strict";
            i.d(t, {
                h: function() {
                    return n
                }
            });
            let n = [
                ["AF", "Afghanistan"],
                ["AL", "Albania"],
                ["DZ", "Algeria"],
                ["AS", "American Samoa"],
                ["AD", "Andorra"],
                ["AO", "Angola"],
                ["AI", "Anguilla"],
                ["AQ", "Antarctica"],
                ["AG", "Antigua and Barbuda"],
                ["AR", "Argentina"],
                ["AM", "Armenia"],
                ["AW", "Aruba"],
                ["AU", "Australia"],
                ["AT", "Austria"],
                ["AZ", "Azerbaijan"],
                ["BS", "Bahamas"],
                ["BH", "Bahrain"],
                ["BD", "Bangladesh"],
                ["BB", "Barbados"],
                ["BY", "Belarus"],
                ["BE", "Belgium"],
                ["BZ", "Belize"],
                ["BJ", "Benin"],
                ["BM", "Bermuda"],
                ["BT", "Bhutan"],
                ["BO", "Bolivia"],
                ["BA", "Bosnia and Herzegovina"],
                ["BW", "Botswana"],
                ["BV", "Bouvet Island"],
                ["BR", "Brazil"],
                ["IO", "British Indian Ocean Territory"],
                ["BN", "Brunei Darussalam"],
                ["BG", "Bulgaria"],
                ["BF", "Burkina Faso"],
                ["BI", "Burundi"],
                ["KH", "Cambodia"],
                ["CM", "Cameroon"],
                ["CA", "Canada"],
                ["CV", "Cape Verde"],
                ["KY", "Cayman Islands"],
                ["CF", "Central African Republic"],
                ["TD", "Chad"],
                ["CL", "Chile"],
                ["CN", ["People's Republic of China", "China"]],
                ["CX", "Christmas Island"],
                ["CC", "Cocos (Keeling) Islands"],
                ["CO", "Colombia"],
                ["KM", "Comoros"],
                ["CG", ["Republic of the Congo", "Congo"]],
                ["CD", ["Democratic Republic of the Congo", "Congo"]],
                ["CK", "Cook Islands"],
                ["CR", "Costa Rica"],
                ["CI", ["Cote D'Ivoire", "Ivory Coast"]],
                ["HR", "Croatia"],
                ["CU", "Cuba"],
                ["CY", "Cyprus"],
                ["CZ", ["Czech Republic", "Czechia"]],
                ["DK", "Denmark"],
                ["DJ", "Djibouti"],
                ["DM", "Dominica"],
                ["DO", "Dominican Republic"],
                ["EC", "Ecuador"],
                ["EG", "Egypt"],
                ["SV", "El Salvador"],
                ["GQ", "Equatorial Guinea"],
                ["ER", "Eritrea"],
                ["EE", "Estonia"],
                ["ET", "Ethiopia"],
                ["FK", "Falkland Islands (Malvinas)"],
                ["FO", "Faroe Islands"],
                ["FJ", "Fiji"],
                ["FI", "Finland"],
                ["FR", "France"],
                ["GF", "French Guiana"],
                ["PF", "French Polynesia"],
                ["TF", "French Southern Territories"],
                ["GA", "Gabon"],
                ["GM", ["Republic of The Gambia", "The Gambia", "Gambia"]],
                ["GE", "Georgia"],
                ["DE", "Germany"],
                ["GH", "Ghana"],
                ["GI", "Gibraltar"],
                ["GR", "Greece"],
                ["GL", "Greenland"],
                ["GD", "Grenada"],
                ["GP", "Guadeloupe"],
                ["GU", "Guam"],
                ["GT", "Guatemala"],
                ["GN", "Guinea"],
                ["GW", "Guinea-Bissau"],
                ["GY", "Guyana"],
                ["HT", "Haiti"],
                ["HM", "Heard Island and McDonald Islands"],
                ["VA", "Holy See (Vatican City State)"],
                ["HN", "Honduras"],
                ["HK", "Hong Kong"],
                ["HU", "Hungary"],
                ["IS", "Iceland"],
                ["IN", "India"],
                ["ID", "Indonesia"],
                ["IR", ["Islamic Republic of Iran", "Iran"]],
                ["IQ", "Iraq"],
                ["IE", "Ireland"],
                ["IL", "Israel"],
                ["IT", "Italy"],
                ["JM", "Jamaica"],
                ["JP", "Japan"],
                ["JO", "Jordan"],
                ["KZ", "Kazakhstan"],
                ["KE", "Kenya"],
                ["KI", "Kiribati"],
                ["KP", "North Korea"],
                ["KR", "South Korea"],
                ["KW", "Kuwait"],
                ["KG", "Kyrgyzstan"],
                ["LA", "Lao People's Democratic Republic"],
                ["LV", "Latvia"],
                ["LB", "Lebanon"],
                ["LS", "Lesotho"],
                ["LR", "Liberia"],
                ["LY", "Libya"],
                ["LI", "Liechtenstein"],
                ["LT", "Lithuania"],
                ["LU", "Luxembourg"],
                ["MO", "Macao"],
                ["MG", "Madagascar"],
                ["MW", "Malawi"],
                ["MY", "Malaysia"],
                ["MV", "Maldives"],
                ["ML", "Mali"],
                ["MT", "Malta"],
                ["MH", "Marshall Islands"],
                ["MQ", "Martinique"],
                ["MR", "Mauritania"],
                ["MU", "Mauritius"],
                ["YT", "Mayotte"],
                ["MX", "Mexico"],
                ["FM", "Micronesia, Federated States of"],
                ["MD", "Moldova, Republic of"],
                ["MC", "Monaco"],
                ["MN", "Mongolia"],
                ["MS", "Montserrat"],
                ["MA", "Morocco"],
                ["MZ", "Mozambique"],
                ["MM", "Myanmar"],
                ["NA", "Namibia"],
                ["NR", "Nauru"],
                ["NP", "Nepal"],
                ["NL", "Netherlands"],
                ["NC", "New Caledonia"],
                ["NZ", "New Zealand"],
                ["NI", "Nicaragua"],
                ["NE", "Niger"],
                ["NG", "Nigeria"],
                ["NU", "Niue"],
                ["NF", "Norfolk Island"],
                ["MK", ["The Republic of North Macedonia", "North Macedonia"]],
                ["MP", "Northern Mariana Islands"],
                ["NO", "Norway"],
                ["OM", "Oman"],
                ["PK", "Pakistan"],
                ["PW", "Palau"],
                ["PS", ["State of Palestine", "Palestine"]],
                ["PA", "Panama"],
                ["PG", "Papua New Guinea"],
                ["PY", "Paraguay"],
                ["PE", "Peru"],
                ["PH", "Philippines"],
                ["PN", "Pitcairn"],
                ["PL", "Poland"],
                ["PT", "Portugal"],
                ["PR", "Puerto Rico"],
                ["QA", "Qatar"],
                ["RE", "Reunion"],
                ["RO", "Romania"],
                ["RU", ["Russian Federation", "Russia"]],
                ["RW", "Rwanda"],
                ["SH", "Saint Helena"],
                ["KN", "Saint Kitts and Nevis"],
                ["LC", "Saint Lucia"],
                ["PM", "Saint Pierre and Miquelon"],
                ["VC", "Saint Vincent and the Grenadines"],
                ["WS", "Samoa"],
                ["SM", "San Marino"],
                ["ST", "Sao Tome and Principe"],
                ["SA", "Saudi Arabia"],
                ["SN", "Senegal"],
                ["SC", "Seychelles"],
                ["SL", "Sierra Leone"],
                ["SG", "Singapore"],
                ["SK", "Slovakia"],
                ["SI", "Slovenia"],
                ["SB", "Solomon Islands"],
                ["SO", "Somalia"],
                ["ZA", "South Africa"],
                ["GS", "South Georgia and the South Sandwich Islands"],
                ["ES", "Spain"],
                ["LK", "Sri Lanka"],
                ["SD", "Sudan"],
                ["SR", "Suriname"],
                ["SJ", "Svalbard and Jan Mayen"],
                ["SZ", "Eswatini"],
                ["SE", "Sweden"],
                ["CH", "Switzerland"],
                ["SY", "Syrian Arab Republic"],
                ["TW", "Taiwan"],
                ["TJ", "Tajikistan"],
                ["TZ", ["United Republic of Tanzania", "Tanzania"]],
                ["TH", "Thailand"],
                ["TL", "Timor-Leste"],
                ["TG", "Togo"],
                ["TK", "Tokelau"],
                ["TO", "Tonga"],
                ["TT", "Trinidad and Tobago"],
                ["TN", "Tunisia"],
                ["TR", "T\xfcrkiye"],
                ["TM", "Turkmenistan"],
                ["TC", "Turks and Caicos Islands"],
                ["TV", "Tuvalu"],
                ["UG", "Uganda"],
                ["UA", "Ukraine"],
                ["AE", "United Arab Emirates"],
                ["GB", ["United Kingdom", "UK", "Great Britain"]],
                ["US", ["United States of America", "United States", "USA"]],
                ["UM", "United States Minor Outlying Islands"],
                ["UY", "Uruguay"],
                ["UZ", "Uzbekistan"],
                ["VU", "Vanuatu"],
                ["VE", "Venezuela"],
                ["VN", "Vietnam"],
                ["VG", "Virgin Islands, British"],
                ["VI", "Virgin Islands, U.S."],
                ["WF", "Wallis and Futuna"],
                ["EH", "Western Sahara"],
                ["YE", "Yemen"],
                ["ZM", "Zambia"],
                ["ZW", "Zimbabwe"],
                ["AX", "\xc5land Islands"],
                ["BQ", "Bonaire, Sint Eustatius and Saba"],
                ["CW", "Cura\xe7ao"],
                ["GG", "Guernsey"],
                ["IM", "Isle of Man"],
                ["JE", "Jersey"],
                ["ME", "Montenegro"],
                ["BL", "Saint Barth\xe9lemy"],
                ["MF", "Saint Martin (French part)"],
                ["RS", "Serbia"],
                ["SX", "Sint Maarten (Dutch part)"],
                ["SS", "South Sudan"],
                ["XK", "Kosovo"]
            ]
        },
        833733: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return r
                }
            });
            var n = i(426326),
                a = i(878593);

            function r() {
                let e = (0, n.useRouter)(),
                    {
                        host: t,
                        appname: i,
                        suffix: r = "vercel.app",
                        id: s,
                        project: o,
                        teamSlug: l
                    } = e.query,
                    d = !e.isReady || !o || Array.isArray(o) || !s ? "" : o.match(/-([a-zA-Z0-9]{9})$/) ? o + "-" + s + "." + r : "",
                    u = (() => {
                        let n = o || i;
                        return !e.isReady || Array.isArray(n) || Array.isArray(t) || Array.isArray(s) ? "" : t || (s ? 9 === s.length ? `${n}-${s}.${r}` : `dpl_${s}` : "")
                    })(),
                    c = (0, a.ZP)(u),
                    h = (0, a.ZP)(c.data ? null : d);
                if (h.data) {
                    let {
                        name: t,
                        id: i
                    } = h.data, n = i.replace("dpl_", "");
                    return e.replace({
                        pathname: e.pathname,
                        query: {
                            teamSlug: l,
                            project: t,
                            id: n
                        }
                    }, void 0, {
                        shallow: !0
                    }), d
                }
                return c.data || c.error && (!d || h.error) ? u : ""
            }
        },
        831517: function(e, t, i) {
            "use strict";
            i.d(t, {
                v: function() {
                    return r
                }
            });
            var n = i(211679),
                a = i(270430);

            function r() {
                var e, t, i;
                let {
                    isReady: r,
                    team: s
                } = (0, a.t7)(), {
                    value: o,
                    isReady: l
                } = (0, n.K_)(), d = null == s ? void 0 : null === (t = s.enabledInvoiceItems) || void 0 === t ? void 0 : null === (e = t.monitoring) || void 0 === e ? void 0 : e.enabled;
                return {
                    ready: r && l,
                    value: d || o || (null == s ? void 0 : null === (i = s.billing) || void 0 === i ? void 0 : i.plan) === "enterprise"
                }
            }
        },
        998845: function(e, t, i) {
            "use strict";

            function n(e) {
                if (!e) return {};
                let t = "id" in e && e.id || e.uid,
                    i = function(e) {
                        let t = "host" in e && e.host || e.url,
                            i = r(e),
                            n = t.replace(i + "-", ""),
                            a = n.split(".").slice(0, -2)[0],
                            s = a.split("-"),
                            o = s[0];
                        return 9 !== o.length ? function(e, t) {
                            let i = e.split("-");
                            for (let e of t.split("-")) {
                                if (e !== i[0]) break;
                                i.shift()
                            }
                            let n = i[0];
                            return 9 !== n.length && console.warn("Found invalid hash", {
                                hash: n,
                                url: e
                            }), n
                        }(t, i) : o
                    }(e),
                    n = r(e),
                    s = a(e);
                return {
                    project: n,
                    idWithoutPrefix: t ? t.replace("dpl_", "") : void 0,
                    id: t,
                    hash: i,
                    host: s
                }
            }

            function a(e) {
                return "host" in e && e.host || e.url || ""
            }

            function r(e) {
                return e.name ? e.name : function(e) {
                    let t = e.match(/^(.*)-([^-]{9,})\.([a-zA-Z0-9-]+\.[a-zA-Z0-9-]+)$/);
                    if (t) return t[1];
                    let i = e.match(/^(.*)-([^-]{9,})-(.+)\.([a-zA-Z0-9-]+\.[a-zA-Z0-9-]+)$/);
                    return i ? i[1] : ""
                }(a(e))
            }
            i.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        699072: function(e, t, i) {
            "use strict";
            i.d(t, {
                v: function() {
                    return a
                }
            });
            var n = i(361961);
            let a = (0, n.H)('<path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>')
        },
        923756: function(e, t, i) {
            "use strict";
            i.d(t, {
                X: function() {
                    return a
                }
            });
            var n = i(361961);
            let a = (0, n.H)('<path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>')
        },
        725181: function(e, t, i) {
            "use strict";
            i.d(t, {
                W: function() {
                    return a
                }
            });
            var n = i(361961);
            let a = (0, n.H)('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>')
        },
        561252: function(e, t, i) {
            "use strict";
            i.d(t, {
                P: function() {
                    return a
                }
            });
            var n = i(361961);
            let a = (0, n.H)('<path d="M15 18H3M21 6H3M17 12H3"/>')
        },
        446173: function(e, t, i) {
            "use strict";
            i.d(t, {
                P: function() {
                    return a
                }
            });
            var n = i(361961);
            let a = (0, n.H)(`<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
   <path d="M9 9H15V15H9V9Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" />`)
        },
        132177: function(e) {
            e.exports = {
                wrapper: "deployment-status_wrapper__HhXbC",
                status: "deployment-status_status__VNpbu",
                ready: "deployment-status_ready__w9ZSc",
                error: "deployment-status_error__eIO2W",
                building: "deployment-status_building__r6R4W",
                "status-label": "deployment-status_status-label__GxNQx"
            }
        },
        466790: function(e) {
            e.exports = {
                hideOnMobile: "deployment-page_hideOnMobile__kQANn"
            }
        }
    }
]);