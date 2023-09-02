(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [76869], {
        369487: function(t, e) {
            "use strict";
            var i;
            e.Sg = e.aU = void 0, e.aU = {
                GITHUB_PRIMARY_EMAIL_NOT_FOUND: "github_primary_email_not_found",
                GITHUB_ACCOUNT_NOT_LINKED: "github_account_not_linked",
                GITHUB_ACCOUNT_INVALID_ACCESS_TOKEN: "github_invalid_access_token",
                GITHUB_ACCOUNT_ALREADY_LINKED: "github_account_already_linked",
                GITHUB_BAD_CREDENTIALS: "github_bad_credentials",
                GITHUB_EMAIL_IN_USE: "github_email_in_use",
                GITHUB_INVITE_ACCOUNT_MISMATCH: "github_invite_account_mismatch",
                INCORRECT_CLIENT_CREDENTIALS: "incorrect_client_credentials",
                REDIRECT_URI_MISMATCH: "redirect_uri_mismatch",
                BAD_VERIFICATION_CODE: "bad_verification_code",
                USER_BLOCKED: "user_blocked",
                ACCOUNT_NOT_FOUND: "account_not_found",
                TEAM_NOT_FOUND: "team_not_found",
                TEAM_FORBIDDEN: "team_forbidden",
                USER_FORBIDDEN: "user_forbidden",
                EXISTING_ACCOUNT_FOUND: "existing_account_found",
                UNAUTHORIZED: "unauthorized",
                METHOD_UNKNOWN: "method_unknown",
                INTEGRATION_CONNECT_UNAUTHORIZED: "integration_connect_unauthorized",
                RESERVED: "reserved",
                DUPLICATED: "duplicated",
                DUPLICATED_BY_ALIAS: "duplicated_by_alias",
                GITLAB_ACCOUNT_NOT_LINKED: "gitlab_account_not_linked",
                GITLAB_INVALID_ACCESS_TOKEN: "gitlab_invalid_access_token",
                GITLAB_ACCOUNT_ALREADY_LINKED: "gitlab_account_already_linked",
                GITLAB_ACCOUNT_FLAGGED: "gitlab_account_flagged",
                GITLAB_LOGIN_ERROR: "gitlab_login_error",
                GITLAB_ACCEPT_TERMS: "gitlab_accept_terms",
                GITLAB_INVALID_MODE: "gitlab_invalid_mode",
                GITLAB_BAD_CREDENTIALS: "gitlab_bad_credentials",
                GITLAB_API_ERROR: "gitlab_api_error",
                GITLAB_EMAIL_IN_USE: "gitlab_email_in_use",
                GITLAB_INVITE_ACCOUNT_MISMATCH: "gitlab_invite_account_mismatch",
                BITBUCKET_ACCOUNT_NOT_LINKED: "bitbucket_account_not_linked",
                BITBUCKET_INVALID_ACCESS_TOKEN: "bitbucket_invalid_access_token",
                BITBUCKET_ACCOUNT_ALREADY_LINKED: "bitbucket_account_already_linked",
                BITBUCKET_ACCOUNT_FLAGGED: "bitbucket_account_flagged",
                BITBUCKET_LOGIN_ERROR: "bitbucket_login_error",
                BITBUCKET_ACCEPT_TERMS: "bitbucket_accept_terms",
                BITBUCKET_INVALID_MODE: "bitbucket_invalid_mode",
                BITBUCKET_BAD_CREDENTIALS: "bitbucket_bad_credentials",
                BITBUCKET_API_ERROR: "bitbucket_api_error",
                BITBUCKET_EMAIL_IN_USE: "bitbucket_email_in_use",
                BITBUCKET_INVITE_ACCOUNT_MISMATCH: "bitbucket_invite_account_mismatch",
                ACCOUNT_NEEDS_VERIFY: "account_needs_verify",
                SAML_ENFORCED: "saml_enforced",
                SAML_NOT_ENABLED: "saml_not_enabled",
                IDENTITY_PROVIDER_ERROR: "service_provider_error"
            }, e.Sg = ((i = {})[e.aU.GITHUB_PRIMARY_EMAIL_NOT_FOUND] = "No primary email found on the GitHub account.", i[e.aU.GITHUB_ACCOUNT_NOT_LINKED] = "There is already an account associated with your GitHub email address. Please login with your email and password then link your GitHub account.", i[e.aU.GITHUB_ACCOUNT_INVALID_ACCESS_TOKEN] = "There is no Vercel account linked with this GitHub account.", i[e.aU.GITHUB_ACCOUNT_ALREADY_LINKED] = "This GitHub account is already linked to another Vercel account.", i[e.aU.GITHUB_BAD_CREDENTIALS] = "Bad credentials.", i[e.aU.GITHUB_EMAIL_IN_USE] = "The GitHub email is already used by a Vercel account.", i[e.aU.GITHUB_INVITE_ACCOUNT_MISMATCH] = "The GitHub account did not match the invited account.", i[e.aU.INCORRECT_CLIENT_CREDENTIALS] = "The client_id and/or client_secret passed are incorrect.", i[e.aU.REDIRECT_URI_MISMATCH] = "The redirect_uri MUST match the registered callback URL for this application.", i[e.aU.BAD_VERIFICATION_CODE] = "The code passed is incorrect or expired.", i[e.aU.USER_BLOCKED] = "This user account is blocked.", i[e.aU.ACCOUNT_NOT_FOUND] = "Account not found.", i[e.aU.TEAM_NOT_FOUND] = "Team not found.", i[e.aU.TEAM_FORBIDDEN] = "You are not an owner of the team.", i[e.aU.USER_FORBIDDEN] = "You are not an owner of the account.", i[e.aU.EXISTING_ACCOUNT_FOUND] = "An existing account found with your email. Visit https://vercel.com/account and connect your GitHub account.", i[e.aU.UNAUTHORIZED] = "Unauthorized to access the given account.", i[e.aU.METHOD_UNKNOWN] = "Wrong request method for this endpoint.", i[e.aU.INTEGRATION_CONNECT_UNAUTHORIZED] = "You don't have the permission to connect the integration to the team.", i[e.aU.RESERVED] = "The username is a reserved word.", i[e.aU.DUPLICATED] = "The username is already in use.", i[e.aU.DUPLICATED_BY_ALIAS] = "The username is already in use.", i[e.aU.ACCOUNT_NEEDS_VERIFY] = "The account needs to be verified via SMS.", i[e.aU.SAML_ENFORCED] = "The account must authenticate with SAML SSO.", i[e.aU.SAML_NOT_ENABLED] = "SAML Single Sign-On is not enabled for this Team", i[e.aU.GITLAB_ACCOUNT_NOT_LINKED] = "There is already an account associated with your GitLab email address. Please login with your email and password then link your GitLab account.", i[e.aU.GITLAB_INVALID_ACCESS_TOKEN] = "There is no Vercel account linked with this GitLab account.", i[e.aU.GITLAB_ACCOUNT_ALREADY_LINKED] = "This GitLab account is already linked to a Vercel account.", i[e.aU.GITLAB_ACCOUNT_FLAGGED] = "The GitLab account you selected has been flagged for moderation.", i[e.aU.GITLAB_LOGIN_ERROR] = "Runtime error when login with GitLab.", i[e.aU.GITLAB_ACCEPT_TERMS] = "Please visit https://gitlab.com/users to accept the terms and try again.", i[e.aU.GITLAB_INVALID_MODE] = "Supplied mode is invalid.", i[e.aU.GITLAB_BAD_CREDENTIALS] = "Bad credentials.", i[e.aU.GITLAB_EMAIL_IN_USE] = "The GitLab email is already used by a Vercel account.", i[e.aU.GITLAB_INVITE_ACCOUNT_MISMATCH] = "The GitLab account did not match the invited account.", i[e.aU.BITBUCKET_ACCOUNT_NOT_LINKED] = "There is already an account associated with your Bitbucket email address. Please login with your email and password then link your Bitbucket account.", i[e.aU.BITBUCKET_INVALID_ACCESS_TOKEN] = "There is no Vercel account linked with this Bitbucket account.", i[e.aU.BITBUCKET_ACCOUNT_ALREADY_LINKED] = "This Bitbucket account is already linked to a Vercel account.", i[e.aU.BITBUCKET_ACCOUNT_FLAGGED] = "The Bitbucket account you selected has been flagged for moderation.", i[e.aU.BITBUCKET_LOGIN_ERROR] = "Runtime error when login with Bitbucket.", i[e.aU.BITBUCKET_ACCEPT_TERMS] = "Please visit https://bitbucket.org to accept the terms and try again.", i[e.aU.BITBUCKET_INVALID_MODE] = "Supplied mode is invalid.", i[e.aU.BITBUCKET_BAD_CREDENTIALS] = "Bad credentials.", i[e.aU.BITBUCKET_EMAIL_IN_USE] = "The Bitbucket email is already used by a Vercel account.", i[e.aU.BITBUCKET_INVITE_ACCOUNT_MISMATCH] = "The Bitbucket account did not match the invited account.", i[e.aU.IDENTITY_PROVIDER_ERROR] = "We are experiencing a problem with the identity provider, please try another authentication method or try again later.", i)
        },
        879756: function(t, e, i) {
            var a = i(786995);
            t.exports = function(t, e) {
                return new Promise(function(i, o) {
                    var n = e || {},
                        r = a.operation(n);

                    function _(t) {
                        o(t || Error("Aborted"))
                    }

                    function u(t, e) {
                        if (t.bail) {
                            _(t);
                            return
                        }
                        r.retry(t) ? n.onRetry && n.onRetry(t, e) : o(r.mainError())
                    }
                    r.attempt(function(e) {
                        var a;
                        try {
                            a = t(_, e)
                        } catch (t) {
                            u(t, e);
                            return
                        }
                        Promise.resolve(a).then(i).catch(function(t) {
                            u(t, e)
                        })
                    })
                })
            }
        },
        706864: function(t, e, i) {
            "use strict";

            function a(t) {
                var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
                return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime()
            }
            i.d(e, {
                Z: function() {
                    return a
                }
            })
        },
        205996: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return r
                }
            });
            var a = i(706864),
                o = i(134052),
                n = i(559083);

            function r(t, e) {
                (0, n.Z)(2, arguments);
                var i = (0, o.Z)(t),
                    r = (0, o.Z)(e);
                return Math.round((i.getTime() - (0, a.Z)(i) - (r.getTime() - (0, a.Z)(r))) / 864e5)
            }
        },
        885756: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return _
                }
            });
            var a = i(510399),
                o = i(205996),
                n = i(559083);

            function r(t, e) {
                var i = t.getFullYear() - e.getFullYear() || t.getMonth() - e.getMonth() || t.getDate() - e.getDate() || t.getHours() - e.getHours() || t.getMinutes() - e.getMinutes() || t.getSeconds() - e.getSeconds() || t.getMilliseconds() - e.getMilliseconds();
                return i < 0 ? -1 : i > 0 ? 1 : i
            }

            function _(t, e) {
                (0, n.Z)(2, arguments);
                var i = (0, a.Z)(t),
                    _ = (0, a.Z)(e),
                    u = r(i, _),
                    c = Math.abs((0, o.Z)(i, _));
                i.setDate(i.getDate() - u * c);
                var s = Number(r(i, _) === -u),
                    T = u * (c - s);
                return 0 === T ? 0 : T
            }
        },
        786995: function(t, e, i) {
            t.exports = i(22592)
        },
        22592: function(t, e, i) {
            var a = i(301664);
            e.operation = function(t) {
                var i = e.timeouts(t);
                return new a(i, {
                    forever: t && t.forever,
                    unref: t && t.unref,
                    maxRetryTime: t && t.maxRetryTime
                })
            }, e.timeouts = function(t) {
                if (t instanceof Array) return [].concat(t);
                var e = {
                    retries: 10,
                    factor: 2,
                    minTimeout: 1e3,
                    maxTimeout: 1 / 0,
                    randomize: !1
                };
                for (var i in t) e[i] = t[i];
                if (e.minTimeout > e.maxTimeout) throw Error("minTimeout is greater than maxTimeout");
                for (var a = [], o = 0; o < e.retries; o++) a.push(this.createTimeout(o, e));
                return t && t.forever && !a.length && a.push(this.createTimeout(o, e)), a.sort(function(t, e) {
                    return t - e
                }), a
            }, e.createTimeout = function(t, e) {
                return Math.min(Math.round((e.randomize ? Math.random() + 1 : 1) * e.minTimeout * Math.pow(e.factor, t)), e.maxTimeout)
            }, e.wrap = function(t, i, a) {
                if (i instanceof Array && (a = i, i = null), !a)
                    for (var o in a = [], t) "function" == typeof t[o] && a.push(o);
                for (var n = 0; n < a.length; n++) {
                    var r = a[n],
                        _ = t[r];
                    t[r] = (function(a) {
                        var o = e.operation(i),
                            n = Array.prototype.slice.call(arguments, 1),
                            r = n.pop();
                        n.push(function(t) {
                            o.retry(t) || (t && (arguments[0] = o.mainError()), r.apply(this, arguments))
                        }), o.attempt(function() {
                            a.apply(t, n)
                        })
                    }).bind(t, _), t[r].options = i
                }
            }
        },
        301664: function(t) {
            function e(t, e) {
                "boolean" == typeof e && (e = {
                    forever: e
                }), this._originalTimeouts = JSON.parse(JSON.stringify(t)), this._timeouts = t, this._options = e || {}, this._maxRetryTime = e && e.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0))
            }
            t.exports = e, e.prototype.reset = function() {
                this._attempts = 1, this._timeouts = this._originalTimeouts
            }, e.prototype.stop = function() {
                this._timeout && clearTimeout(this._timeout), this._timeouts = [], this._cachedTimeouts = null
            }, e.prototype.retry = function(t) {
                if (this._timeout && clearTimeout(this._timeout), !t) return !1;
                var e = new Date().getTime();
                if (t && e - this._operationStart >= this._maxRetryTime) return this._errors.unshift(Error("RetryOperation timeout occurred")), !1;
                this._errors.push(t);
                var i = this._timeouts.shift();
                if (void 0 === i) {
                    if (!this._cachedTimeouts) return !1;
                    this._errors.splice(this._errors.length - 1, this._errors.length), this._timeouts = this._cachedTimeouts.slice(0), i = this._timeouts.shift()
                }
                var a = this,
                    o = setTimeout(function() {
                        a._attempts++, a._operationTimeoutCb && (a._timeout = setTimeout(function() {
                            a._operationTimeoutCb(a._attempts)
                        }, a._operationTimeout), a._options.unref && a._timeout.unref()), a._fn(a._attempts)
                    }, i);
                return this._options.unref && o.unref(), !0
            }, e.prototype.attempt = function(t, e) {
                this._fn = t, e && (e.timeout && (this._operationTimeout = e.timeout), e.cb && (this._operationTimeoutCb = e.cb));
                var i = this;
                this._operationTimeoutCb && (this._timeout = setTimeout(function() {
                    i._operationTimeoutCb()
                }, i._operationTimeout)), this._operationStart = new Date().getTime(), this._fn(this._attempts)
            }, e.prototype.try = function(t) {
                console.log("Using RetryOperation.try() is deprecated"), this.attempt(t)
            }, e.prototype.start = function(t) {
                console.log("Using RetryOperation.start() is deprecated"), this.attempt(t)
            }, e.prototype.start = e.prototype.try, e.prototype.errors = function() {
                return this._errors
            }, e.prototype.attempts = function() {
                return this._attempts
            }, e.prototype.mainError = function() {
                if (0 === this._errors.length) return null;
                for (var t = {}, e = null, i = 0, a = 0; a < this._errors.length; a++) {
                    var o = this._errors[a],
                        n = o.message,
                        r = (t[n] || 0) + 1;
                    t[n] = r, r >= i && (e = o, i = r)
                }
                return e
            }
        }
    }
]);