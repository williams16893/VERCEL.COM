(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9829, 30569], {
        30569: function(e, a, t) {
            "use strict";
            t.d(a, {
                m: function() {
                    return r
                }
            });
            var d = t(397458),
                n = t(14517),
                l = t(121446),
                s = t(815598),
                i = t.n(s);

            function r(e) {
                return "secondary" === e.type ? (0, d.jsx)("div", {
                    className: (0, n.W)("geist-no-scrollbar", i().tabsSecondary, {
                        [i().disabled || ""]: e.disabled,
                        [i().centered || ""]: e.centered,
                        [i().bold || ""]: e.bold,
                        [i().noBorder || ""]: e.noBorder
                    }),
                    "data-geist-tabs": "",
                    "data-version": "v1",
                    ref: e.ref,
                    style: e.style,
                    children: e.tabs.map(a => (0, d.jsx)("div", {
                        "aria-disabled": e.disabled,
                        className: (0, n.W)(i().tabSecondaryContainer, {
                            [i().activeSecondaryTabContainer || ""]: e.selected === a.value,
                            [i().disabledSecondaryTabContainer || ""]: e.disabled
                        }),
                        "data-geist-tab": "",
                        "data-testid": a["data-testid"],
                        onClick: () => {
                            if (!e.disabled) {
                                var t;
                                null === (t = e.setSelected) || void 0 === t || t.call(e, a.value)
                            }
                        },
                        onKeyDown: t => {
                            var d, n;
                            e.disabled || " " !== t.key || (t.preventDefault(), null === (d = e.setSelected) || void 0 === d || d.call(e, a.value)), e.disabled || "Enter" !== t.key || (t.preventDefault(), null === (n = e.setSelected) || void 0 === n || n.call(e, a.value))
                        },
                        role: "button",
                        tabIndex: e.tabIndex ? e.tabIndex : 0,
                        children: (0, d.jsxs)("div", {
                            className: (0, n.W)(i().tabsSecondary, {
                                [i().activeSecondaryTab || ""]: e.selected === a.value
                            }),
                            children: [a.icon ? (0, d.jsx)("div", {
                                className: i().tabSecondaryIcon,
                                children: a.icon
                            }) : null, (0, d.jsx)(l.x, {
                                as: "div",
                                color: e.textColor || "gray-1000",
                                size: 13,
                                children: a.title
                            })]
                        })
                    }, a.value))
                }) : (0, d.jsx)("div", {
                    className: (0, n.W)("geist-no-scrollbar", i().tabs, {
                        [i().disabled || ""]: e.disabled,
                        [i().centered || ""]: e.centered,
                        [i().bold || ""]: e.bold,
                        [i().noBorder || ""]: e.noBorder
                    }),
                    "data-geist-tabs": "",
                    "data-version": "v1",
                    ref: e.ref,
                    style: e.style,
                    children: e.tabs.map(a => (0, d.jsx)("div", {
                        "aria-disabled": e.disabled,
                        className: i().tabContainer,
                        "data-geist-tab": "",
                        "data-testid": a["data-testid"],
                        onClick: () => {
                            if (!e.disabled) {
                                var t;
                                null === (t = e.setSelected) || void 0 === t || t.call(e, a.value)
                            }
                        },
                        onKeyDown: t => {
                            var d, n;
                            e.disabled || " " !== t.key || (t.preventDefault(), null === (d = e.setSelected) || void 0 === d || d.call(e, a.value)), e.disabled || "Enter" !== t.key || (t.preventDefault(), null === (n = e.setSelected) || void 0 === n || n.call(e, a.value))
                        },
                        role: "button",
                        tabIndex: e.tabIndex ? e.tabIndex : 0,
                        children: (0, d.jsxs)("div", {
                            className: (0, n.W)(i().tab, {
                                [i().activeTab || ""]: e.selected === a.value
                            }),
                            children: [a.icon ? (0, d.jsx)("div", {
                                className: i().tabIcon,
                                children: a.icon
                            }) : null, (0, d.jsx)(l.x, {
                                as: "div",
                                color: e.textColor || "gray-900",
                                size: 14,
                                children: a.title
                            })]
                        })
                    }, a.value))
                })
            }
        },
        911047: function(e, a, t) {
            "use strict";
            t.d(a, {
                Z: function() {
                    return n
                }
            });
            var d = t(361961);
            let n = (0, d.H)('<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>')
        },
        815598: function(e) {
            e.exports = {
                tabs: "tabs_tabs__rJYVD",
                centered: "tabs_centered__Zh6B_",
                bold: "tabs_bold__CVov9",
                noBorder: "tabs_noBorder__SZUg4",
                tabContainer: "tabs_tabContainer___bdiV",
                disabled: "tabs_disabled__iApRF",
                tab: "tabs_tab__MRwiF",
                activeTab: "tabs_activeTab__L_G3G",
                tabIcon: "tabs_tabIcon__Oh2re",
                tabsSecondary: "tabs_tabsSecondary__b5gGt",
                tabSecondaryContainer: "tabs_tabSecondaryContainer__3weL8",
                activeSecondaryTabContainer: "tabs_activeSecondaryTabContainer__c75La",
                disabledSecondaryTabContainer: "tabs_disabledSecondaryTabContainer__xtlL1"
            }
        }
    }
]);