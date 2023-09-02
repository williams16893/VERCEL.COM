(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [83073], {
        24677: function(e) {
            function t() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function r(e) {
                return "function" == typeof e
            }

            function n(e) {
                return "object" == typeof e && null !== e
            }
            e.exports = t, t.prototype._events = void 0, t.prototype._maxListeners = void 0, t.defaultMaxListeners = 10, t.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                return this._maxListeners = e, this
            }, t.prototype.emit = function(e) {
                if (this._events || (this._events = {}), "error" === e && (!this._events.error || n(this._events.error) && !this._events.error.length)) {
                    if (t = arguments[1], t instanceof Error) throw t;
                    var t, s, o, i, a, u, c, l = Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw l.context = t, l
                }
                if (void 0 === (s = this._events[e])) return !1;
                if (r(s)) switch (arguments.length) {
                    case 1:
                        s.call(this);
                        break;
                    case 2:
                        s.call(this, arguments[1]);
                        break;
                    case 3:
                        s.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        i = Array.prototype.slice.call(arguments, 1), s.apply(this, i)
                } else if (n(s))
                    for (a = 0, i = Array.prototype.slice.call(arguments, 1), o = (u = s.slice()).length; a < o; a++) u[a].apply(this, i);
                return !0
            }, t.prototype.addListener = function(e, s) {
                var o, i;
                if (!r(s)) throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(s.listener) ? s.listener : s), this._events[e] ? n(this._events[e]) ? this._events[e].push(s) : this._events[e] = [this._events[e], s] : this._events[e] = s, n(this._events[e]) && !this._events[e].warned && (o = void 0 === this._maxListeners ? t.defaultMaxListeners : this._maxListeners) && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
            }, t.prototype.on = t.prototype.addListener, t.prototype.once = function(e, t) {
                if (!r(t)) throw TypeError("listener must be a function");
                var n = !1;

                function s() {
                    this.removeListener(e, s), n || (n = !0, t.apply(this, arguments))
                }
                return s.listener = t, this.on(e, s), this
            }, t.prototype.removeListener = function(e, t) {
                var s, o, i, a;
                if (!r(t)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[e]) return this;
                if (i = (s = this._events[e]).length, o = -1, s === t || r(s.listener) && s.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                else if (n(s)) {
                    for (a = i; a-- > 0;)
                        if (s[a] === t || s[a].listener && s[a].listener === t) {
                            o = a;
                            break
                        }
                    if (o < 0) return this;
                    1 === s.length ? (s.length = 0, delete this._events[e]) : s.splice(o, 1), this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }, t.prototype.removeAllListeners = function(e) {
                var t, n;
                if (!this._events) return this;
                if (!this._events.removeListener) return 0 == arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                if (0 == arguments.length) {
                    for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (r(n = this._events[e])) this.removeListener(e, n);
                else if (n)
                    for (; n.length;) this.removeListener(e, n[n.length - 1]);
                return delete this._events[e], this
            }, t.prototype.listeners = function(e) {
                return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }, t.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (r(t)) return 1;
                    if (t) return t.length
                }
                return 0
            }, t.listenerCount = function(e, t) {
                return e.listenerCount(t)
            }
        },
        840387: function(e) {
            e.exports = function() {
                "use strict";

                function e(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), r.push.apply(r, n)
                    }
                    return r
                }

                function t(t) {
                    for (var r = 1; r < arguments.length; r++) {
                        var n = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? e(Object(n), !0).forEach(function(e) {
                            var r;
                            r = n[e], e in t ? Object.defineProperty(t, e, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = r
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        })
                    }
                    return t
                }

                function r(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                            var r = [],
                                n = !0,
                                s = !1,
                                o = void 0;
                            try {
                                for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                            } catch (e) {
                                s = !0, o = e
                            } finally {
                                try {
                                    n || null == a.return || a.return()
                                } finally {
                                    if (s) throw o
                                }
                            }
                            return r
                        }
                    }(e, t) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function n(e) {
                    return function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                            return r
                        }
                    }(e) || function(e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                    }(e) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }

                function s() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            serializable: !0
                        },
                        t = {};
                    return {
                        get: function(r, n) {
                            var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                    miss: function() {
                                        return Promise.resolve()
                                    }
                                },
                                o = JSON.stringify(r);
                            if (o in t) return Promise.resolve(e.serializable ? JSON.parse(t[o]) : t[o]);
                            var i = n(),
                                a = s && s.miss || function() {
                                    return Promise.resolve()
                                };
                            return i.then(function(e) {
                                return a(e)
                            }).then(function() {
                                return i
                            })
                        },
                        set: function(r, n) {
                            return t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n, Promise.resolve(n)
                        },
                        delete: function(e) {
                            return delete t[JSON.stringify(e)], Promise.resolve()
                        },
                        clear: function() {
                            return t = {}, Promise.resolve()
                        }
                    }
                }

                function o(e, t) {
                    return t && Object.keys(t).forEach(function(r) {
                        e[r] = t[r](e)
                    }), e
                }

                function i(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    var s = 0;
                    return e.replace(/%s/g, function() {
                        return encodeURIComponent(r[s++])
                    })
                }
                var a = {
                    WithinQueryParameters: 0,
                    WithinHeaders: 1
                };

                function u(e, t) {
                    var r = e || {},
                        n = r.data || {};
                    return Object.keys(r).forEach(function(e) {
                        -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (n[e] = r[e])
                    }), {
                        data: Object.entries(n).length > 0 ? n : void 0,
                        timeout: r.timeout || t,
                        headers: r.headers || {},
                        queryParameters: r.queryParameters || {},
                        cacheable: r.cacheable
                    }
                }
                var c = {
                    Read: 1,
                    Write: 2,
                    Any: 3
                };

                function l(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return t(t({}, e), {}, {
                        status: r,
                        lastUpdate: Date.now()
                    })
                }

                function h(e) {
                    return "string" == typeof e ? {
                        protocol: "https",
                        url: e,
                        accept: c.Any
                    } : {
                        protocol: e.protocol || "https",
                        url: e.url,
                        accept: e.accept || c.Any
                    }
                }
                var f = "POST";

                function m(e, r, s, o) {
                    var i, a, u, c = [],
                        f = function(e, r) {
                            if ("GET" !== e.method && (void 0 !== e.data || void 0 !== r.data)) return JSON.stringify(Array.isArray(e.data) ? e.data : t(t({}, e.data), r.data))
                        }(s, o),
                        m = (i = t(t({}, e.headers), o.headers), a = {}, Object.keys(i).forEach(function(e) {
                            var t = i[e];
                            a[e.toLowerCase()] = t
                        }), a),
                        y = s.method,
                        g = "GET" !== s.method ? {} : t(t({}, s.data), o.data),
                        b = t(t(t({
                            "x-algolia-agent": e.userAgent.value
                        }, e.queryParameters), g), o.queryParameters),
                        O = 0,
                        P = function t(r, n) {
                            var i, a, u, h = r.pop();
                            if (void 0 === h) throw {
                                name: "RetryError",
                                message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                                transporterStackTrace: d(c)
                            };
                            var g = {
                                    data: f,
                                    headers: m,
                                    method: y,
                                    url: (i = s.path, a = p(b), u = "".concat(h.protocol, "://").concat(h.url, "/").concat("/" === i.charAt(0) ? i.substr(1) : i), a.length && (u += "?".concat(a)), u),
                                    connectTimeout: n(O, e.timeouts.connect),
                                    responseTimeout: n(O, o.timeout)
                                },
                                P = function(e) {
                                    var t = {
                                        request: g,
                                        response: e,
                                        host: h,
                                        triesLeft: r.length
                                    };
                                    return c.push(t), t
                                },
                                _ = {
                                    onSuccess: function(e) {
                                        return function(e) {
                                            try {
                                                return JSON.parse(e.content)
                                            } catch (t) {
                                                throw {
                                                    name: "DeserializationError",
                                                    message: t.message,
                                                    response: e
                                                }
                                            }
                                        }(e)
                                    },
                                    onRetry: function(s) {
                                        var o = P(s);
                                        return s.isTimedOut && O++, Promise.all([e.logger.info("Retryable failure", v(o)), e.hostsCache.set(h, l(h, s.isTimedOut ? 3 : 2))]).then(function() {
                                            return t(r, n)
                                        })
                                    },
                                    onFail: function(e) {
                                        throw P(e),
                                            function(e, t) {
                                                var r = e.content,
                                                    n = e.status,
                                                    s = r;
                                                try {
                                                    s = JSON.parse(r).message
                                                } catch (e) {}
                                                return {
                                                    name: "ApiError",
                                                    message: s,
                                                    status: n,
                                                    transporterStackTrace: t
                                                }
                                            }(e, d(c))
                                    }
                                };
                            return e.requester.send(g).then(function(e) {
                                var t, r, n;
                                return (t = e.status, e.isTimedOut || (r = e.isTimedOut, n = e.status, !r && 0 == ~~n) || 2 != ~~(t / 100) && 4 != ~~(t / 100)) ? _.onRetry(e) : 2 == ~~(e.status / 100) ? _.onSuccess(e) : _.onFail(e)
                            })
                        };
                    return (u = e.hostsCache, Promise.all(r.map(function(e) {
                        return u.get(e, function() {
                            return Promise.resolve(l(e))
                        })
                    })).then(function(e) {
                        var t = e.filter(function(e) {
                                return 1 === e.status || Date.now() - e.lastUpdate > 12e4
                            }),
                            s = e.filter(function(e) {
                                return 3 === e.status && Date.now() - e.lastUpdate <= 12e4
                            }),
                            o = [].concat(n(t), n(s));
                        return {
                            getTimeout: function(e, t) {
                                return (0 === s.length && 0 === e ? 1 : s.length + 3 + e) * t
                            },
                            statelessHosts: o.length > 0 ? o.map(function(e) {
                                return h(e)
                            }) : r
                        }
                    })).then(function(e) {
                        return P(n(e.statelessHosts).reverse(), e.getTimeout)
                    })
                }

                function p(e) {
                    return Object.keys(e).map(function(t) {
                        var r;
                        return i("%s=%s", t, (r = e[t], "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(e[t]) : e[t]))
                    }).join("&")
                }

                function d(e) {
                    return e.map(function(e) {
                        return v(e)
                    })
                }

                function v(e) {
                    var r = e.request.headers["x-algolia-api-key"] ? {
                        "x-algolia-api-key": "*****"
                    } : {};
                    return t(t({}, e), {}, {
                        request: t(t({}, e.request), {}, {
                            headers: t(t({}, e.request.headers), r)
                        })
                    })
                }
                var y = function(e) {
                        var n, s, i, l, f, p, d, v, y, g, b, O, P, _ = e.appId,
                            w = (n = void 0 !== e.authMode ? e.authMode : a.WithinHeaders, s = {
                                "x-algolia-api-key": e.apiKey,
                                "x-algolia-application-id": _
                            }, {
                                headers: function() {
                                    return n === a.WithinHeaders ? s : {}
                                },
                                queryParameters: function() {
                                    return n === a.WithinQueryParameters ? s : {}
                                }
                            }),
                            q = (l = (i = t(t({
                                hosts: [{
                                    url: "".concat(_, "-dsn.algolia.net"),
                                    accept: c.Read
                                }, {
                                    url: "".concat(_, ".algolia.net"),
                                    accept: c.Write
                                }].concat(function(e) {
                                    for (var t = e.length - 1; t > 0; t--) {
                                        var r = Math.floor(Math.random() * (t + 1)),
                                            n = e[t];
                                        e[t] = e[r], e[r] = n
                                    }
                                    return e
                                }([{
                                    url: "".concat(_, "-1.algolianet.com")
                                }, {
                                    url: "".concat(_, "-2.algolianet.com")
                                }, {
                                    url: "".concat(_, "-3.algolianet.com")
                                }]))
                            }, e), {}, {
                                headers: t(t(t({}, w.headers()), {
                                    "content-type": "application/x-www-form-urlencoded"
                                }), e.headers),
                                queryParameters: t(t({}, w.queryParameters()), e.queryParameters)
                            })).hostsCache, f = i.logger, p = i.requester, d = i.requestsCache, v = i.responsesCache, y = i.timeouts, g = i.userAgent, b = i.hosts, O = i.queryParameters, P = {
                                hostsCache: l,
                                logger: f,
                                requester: p,
                                requestsCache: d,
                                responsesCache: v,
                                timeouts: y,
                                userAgent: g,
                                headers: i.headers,
                                queryParameters: O,
                                hosts: b.map(function(e) {
                                    return h(e)
                                }),
                                read: function(e, t) {
                                    var n = u(t, P.timeouts.read),
                                        s = function() {
                                            return m(P, P.hosts.filter(function(e) {
                                                return 0 != (e.accept & c.Read)
                                            }), e, n)
                                        };
                                    if (!0 !== (void 0 !== n.cacheable ? n.cacheable : e.cacheable)) return s();
                                    var o = {
                                        request: e,
                                        mappedRequestOptions: n,
                                        transporter: {
                                            queryParameters: P.queryParameters,
                                            headers: P.headers
                                        }
                                    };
                                    return P.responsesCache.get(o, function() {
                                        return P.requestsCache.get(o, function() {
                                            return P.requestsCache.set(o, s()).then(function(e) {
                                                return Promise.all([P.requestsCache.delete(o), e])
                                            }, function(e) {
                                                return Promise.all([P.requestsCache.delete(o), Promise.reject(e)])
                                            }).then(function(e) {
                                                var t = r(e, 2);
                                                return t[0], t[1]
                                            })
                                        })
                                    }, {
                                        miss: function(e) {
                                            return P.responsesCache.set(o, e)
                                        }
                                    })
                                },
                                write: function(e, t) {
                                    return m(P, P.hosts.filter(function(e) {
                                        return 0 != (e.accept & c.Write)
                                    }), e, u(t, P.timeouts.write))
                                }
                            });
                        return o({
                            transporter: q,
                            appId: _,
                            addAlgoliaAgent: function(e, t) {
                                q.userAgent.add({
                                    segment: e,
                                    version: t
                                })
                            },
                            clearCache: function() {
                                return Promise.all([q.requestsCache.clear(), q.responsesCache.clear()]).then(function() {})
                            }
                        }, e.methods)
                    },
                    g = function(e) {
                        return function(t, r) {
                            return "GET" === t.method ? e.transporter.read(t, r) : e.transporter.write(t, r)
                        }
                    },
                    b = function(e) {
                        return function(t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return o({
                                transporter: e.transporter,
                                appId: e.appId,
                                indexName: t
                            }, r.methods)
                        }
                    },
                    O = function(e) {
                        return function(r, n) {
                            var s = r.map(function(e) {
                                return t(t({}, e), {}, {
                                    params: p(e.params || {})
                                })
                            });
                            return e.transporter.read({
                                method: f,
                                path: "1/indexes/*/queries",
                                data: {
                                    requests: s
                                },
                                cacheable: !0
                            }, n)
                        }
                    },
                    P = function(e) {
                        return function(r, n) {
                            return Promise.all(r.map(function(r) {
                                var s = r.params,
                                    o = s.facetName,
                                    i = s.facetQuery,
                                    a = function(e, t) {
                                        if (null == e) return {};
                                        var r, n, s = function(e, t) {
                                            if (null == e) return {};
                                            var r, n, s = {},
                                                o = Object.keys(e);
                                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (s[r] = e[r]);
                                            return s
                                        }(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var o = Object.getOwnPropertySymbols(e);
                                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
                                        }
                                        return s
                                    }(s, ["facetName", "facetQuery"]);
                                return b(e)(r.indexName, {
                                    methods: {
                                        searchForFacetValues: q
                                    }
                                }).searchForFacetValues(o, i, t(t({}, n), a))
                            }))
                        }
                    },
                    _ = function(e) {
                        return function(t, r, n) {
                            return e.transporter.read({
                                method: f,
                                path: i("1/answers/%s/prediction", e.indexName),
                                data: {
                                    query: t,
                                    queryLanguages: r
                                },
                                cacheable: !0
                            }, n)
                        }
                    },
                    w = function(e) {
                        return function(t, r) {
                            return e.transporter.read({
                                method: f,
                                path: i("1/indexes/%s/query", e.indexName),
                                data: {
                                    query: t
                                },
                                cacheable: !0
                            }, r)
                        }
                    },
                    q = function(e) {
                        return function(t, r, n) {
                            return e.transporter.read({
                                method: f,
                                path: i("1/indexes/%s/facets/%s/query", e.indexName, t),
                                data: {
                                    facetQuery: r
                                },
                                cacheable: !0
                            }, n)
                        }
                    };

                function j(e, o, i) {
                    var u, c, l, h, f, m;
                    return y(t(t(t({}, {
                        appId: e,
                        apiKey: o,
                        timeouts: {
                            connect: 1,
                            read: 2,
                            write: 30
                        },
                        requester: {
                            send: function(e) {
                                return new Promise(function(t) {
                                    var r = new XMLHttpRequest;
                                    r.open(e.method, e.url, !0), Object.keys(e.headers).forEach(function(t) {
                                        return r.setRequestHeader(t, e.headers[t])
                                    });
                                    var n, s = function(e, n) {
                                            return setTimeout(function() {
                                                r.abort(), t({
                                                    status: 0,
                                                    content: n,
                                                    isTimedOut: !0
                                                })
                                            }, 1e3 * e)
                                        },
                                        o = s(e.connectTimeout, "Connection timeout");
                                    r.onreadystatechange = function() {
                                        r.readyState > r.OPENED && void 0 === n && (clearTimeout(o), n = s(e.responseTimeout, "Socket timeout"))
                                    }, r.onerror = function() {
                                        0 === r.status && (clearTimeout(o), clearTimeout(n), t({
                                            content: r.responseText || "Network request failed",
                                            status: r.status,
                                            isTimedOut: !1
                                        }))
                                    }, r.onload = function() {
                                        clearTimeout(o), clearTimeout(n), t({
                                            content: r.responseText,
                                            status: r.status,
                                            isTimedOut: !1
                                        })
                                    }, r.send(e.data)
                                })
                            }
                        },
                        logger: {
                            debug: function(e, t) {
                                return Promise.resolve()
                            },
                            info: function(e, t) {
                                return Promise.resolve()
                            },
                            error: function(e, t) {
                                return console.error(e, t), Promise.resolve()
                            }
                        },
                        responsesCache: s(),
                        requestsCache: s({
                            serializable: !1
                        }),
                        hostsCache: function e(t) {
                            var s = n(t.caches),
                                o = s.shift();
                            return void 0 === o ? {
                                get: function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function() {
                                            return Promise.resolve()
                                        }
                                    };
                                    return t().then(function(e) {
                                        return Promise.all([e, n.miss(e)])
                                    }).then(function(e) {
                                        return r(e, 1)[0]
                                    })
                                },
                                set: function(e, t) {
                                    return Promise.resolve(t)
                                },
                                delete: function(e) {
                                    return Promise.resolve()
                                },
                                clear: function() {
                                    return Promise.resolve()
                                }
                            } : {
                                get: function(t, r) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function() {
                                            return Promise.resolve()
                                        }
                                    };
                                    return o.get(t, r, n).catch(function() {
                                        return e({
                                            caches: s
                                        }).get(t, r, n)
                                    })
                                },
                                set: function(t, r) {
                                    return o.set(t, r).catch(function() {
                                        return e({
                                            caches: s
                                        }).set(t, r)
                                    })
                                },
                                delete: function(t) {
                                    return o.delete(t).catch(function() {
                                        return e({
                                            caches: s
                                        }).delete(t)
                                    })
                                },
                                clear: function() {
                                    return o.clear().catch(function() {
                                        return e({
                                            caches: s
                                        }).clear()
                                    })
                                }
                            }
                        }({
                            caches: [(u = {
                                key: "".concat("4.13.0", "-").concat(e)
                            }, l = "algoliasearch-client-js-".concat(u.key), h = function() {
                                return void 0 === c && (c = u.localStorage || window.localStorage), c
                            }, f = function() {
                                return JSON.parse(h().getItem(l) || "{}")
                            }, {
                                get: function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function() {
                                            return Promise.resolve()
                                        }
                                    };
                                    return Promise.resolve().then(function() {
                                        var r = JSON.stringify(e),
                                            n = f()[r];
                                        return Promise.all([n || t(), void 0 !== n])
                                    }).then(function(e) {
                                        var t = r(e, 2),
                                            s = t[0];
                                        return Promise.all([s, t[1] || n.miss(s)])
                                    }).then(function(e) {
                                        return r(e, 1)[0]
                                    })
                                },
                                set: function(e, t) {
                                    return Promise.resolve().then(function() {
                                        var r = f();
                                        return r[JSON.stringify(e)] = t, h().setItem(l, JSON.stringify(r)), t
                                    })
                                },
                                delete: function(e) {
                                    return Promise.resolve().then(function() {
                                        var t = f();
                                        delete t[JSON.stringify(e)], h().setItem(l, JSON.stringify(t))
                                    })
                                },
                                clear: function() {
                                    return Promise.resolve().then(function() {
                                        h().removeItem(l)
                                    })
                                }
                            }), s()]
                        }),
                        userAgent: (m = {
                            value: "Algolia for JavaScript (".concat("4.13.0", ")"),
                            add: function(e) {
                                var t = "; ".concat(e.segment).concat(void 0 !== e.version ? " (".concat(e.version, ")") : "");
                                return -1 === m.value.indexOf(t) && (m.value = "".concat(m.value).concat(t)), m
                            }
                        }).add({
                            segment: "Browser",
                            version: "lite"
                        }),
                        authMode: a.WithinQueryParameters
                    }), i), {}, {
                        methods: {
                            search: O,
                            searchForFacetValues: P,
                            multipleQueries: O,
                            multipleSearchForFacetValues: P,
                            customRequest: g,
                            initIndex: function(e) {
                                return function(t) {
                                    return b(e)(t, {
                                        methods: {
                                            search: w,
                                            searchForFacetValues: q,
                                            findAnswers: _
                                        }
                                    })
                                }
                            }
                        }
                    }))
                }
                return j.version = "4.13.0", j
            }()
        }
    }
]);