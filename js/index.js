!function(n) {
    var r = {};
    function o(e) {
        if (r[e])
            return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o),
        t.l = !0,
        t.exports
    }
    o.m = n,
    o.c = r,
    o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(t, e) {
        if (1 & e && (t = o(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (o.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                o.d(n, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return n
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "",
    o(o.s = 19)
}([, function(e, t, n) {
    "use strict";
    function i(e, t) {
        void 0 === t && (t = "");
        var n = e.version
          , r = e.size
          , o = e.downloadURL
          , i = e.downloadURLForNotSource
          , a = e.date;
        return t ? {
            version: n,
            size: r,
            downloadURL: o,
            date: a
        } : {
            version: n,
            size: r,
            downloadURL: i,
            date: a
        }
    }
    function r(t) {
        var n = "_flash_install_packages_"
          , r = window[n]
          , o = document.createElement("script");
        window[n] = function(e) {
            window[n] = r,
            setTimeout(function() {
                return document.body.removeChild(o)
            }),
            t(e)
        }
        ,
        o.src = function() {
            return "./config/flashVersion"
        }(),
        document.body.appendChild(o)
    }
    var o, a;
    t.__esModule = !0,
    t.translate = i;
    var l = [];
    function s(e) {
        o ? e(o) : (l.push(e),
        a || (a = !0,
        r(function(e) {
            o = e;
            for (var t = 0; t < l.length; t++)
                l[t](e)
        })))
    }
    t.getPackages = s,
    t.activex = {
        check: function(e) {
            return /(IE|Microsoft Edge)/i.test(e)
        },
        info: function(t, n) {
            void 0 === t && (t = ""),
            s(function(e) {
                return n(i(e.activex, t))
            })
        }
    },
    t.ppapi = {
        check: function(e) {
            return /(Opera|Chrome)/i.test(e)
        },
        info: function(t, n) {
            void 0 === t && (t = ""),
            s(function(e) {
                return n(i(e.ppapi, t))
            })
        }
    },
    t.npapi = {
        check: function(e) {
            return /(Firefox|Safari)/i.test(e)
        },
        info: function(t, n) {
            void 0 === t && (t = ""),
            s(function(e) {
                return n(i(e.npapi, t))
            })
        }
    },
    t.mac_ppapi = {
        check: function(e) {
            return /(Opera|Chrome)/i.test(e)
        },
        info: function(t, n) {
            void 0 === t && (t = ""),
            s(function(e) {
                return n(i(e["mac-ppapi"], t))
            })
        }
    },
    t.mac_npapi = {
        check: function(e) {
            return /(Firefox|Safari)/i.test(e)
        },
        info: function(t, n) {
            void 0 === t && (t = ""),
            s(function(e) {
                return n(i(e["mac-npapi"], t))
            })
        }
    };
    var c = (u.prototype.arch = function(e) {
        return this._arch = e,
        this
    }
    ,
    u.prototype.type = function(e) {
        return this._type = e,
        this
    }
    ,
    u.prototype.get = function() {
        var e = this._arch
          , o = this._type;
        return {
            info: function(t, n) {
                void 0 === t && (t = "");
                var r = "linux-" + e + "-" + o;
                s(function(e) {
                    return n(i(e[r], t))
                })
            }
        }
    }
    ,
    u);
    function u() {}
    t.linux = new c
}
, function(module, exports, __webpack_require__) {
    "use strict";
    exports.__esModule = !0;
    var query = {
        add: "addEventListener"in document ? function(e, t, n) {
            e.addEventListener(t, n, !1)
        }
        : function(e, t, n) {
            e.attachEvent("on" + t, n)
        }
        ,
        remove: "addEventListener"in document ? function(e, t, n) {
            e.removeEventListener(t, n, !1)
        }
        : function(e, t, n) {
            e.detachEvent("on" + t, n)
        }
        ,
        getEvent: function(e) {
            return e || window.event
        },
        getTarget: function(e) {
            var t = query.getEvent(e);
            return t.target || t.srcElement
        },
        preventDefault: function(e) {
            var t = query.getEvent(e);
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        },
        stopPropagation: function(e) {
            var t = query.getEvent(e);
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        },
        addClass: function(e, t) {
            e.classList ? e.classList.add(t) : -1 == e.className.indexOf(t) && (e.className += " " + t)
        },
        removeClass: function(node, classname) {
            if (node.classList)
                node.classList.remove(classname);
            else {
                var reg = eval("/\\s*" + classname + "/ig");
                node.className = node.className.replace(reg, "")
            }
        },
        hasClass: function(e, t) {
            return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b","i").test(e.className)
        },
        getByClass: function(o, e) {
            return (e = e || document).querySelectorAll ? e.querySelectorAll("." + o) : function(e) {
                e = e.getElementsByTagName("*");
                for (var t = [], n = new RegExp("\\b" + o + "\\b","i"), r = 0; r < e.length; r++)
                    n.test(e[r].className) && t.push(e[r]);
                return t
            }(e)
        },
        getNextNode: function(e) {
            if (e.nextElementSibling)
                return e.nextElementSibling;
            for (var t = e.nextSibling; t && 1 !== t.nodeType; )
                t = t.nextSibling;
            return t
        },
        toArray: function(t) {
            var n = [];
            try {
                n = Array.prototype.slice.call(t, 0)
            } catch (e) {
                for (var r = 0, o = t.length; r < o; r++)
                    n[r] = t[r]
            }
            return n
        },
        forEach: function(r, o) {
            if ("function" == typeof r.forEach)
                r.forEach(function(e, t, n) {
                    o.call(r, e, t, n)
                });
            else
                for (var e = 0, t = r.length; e < t; e++)
                    o.call(r, r[e], e, r)
        }
    };
    exports["default"] = query
}
, , function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t["default"] = function() {
        
    }
}
, , , , , , , function(e, d, p) {
    (function(c, u) {
        var f;
        (function() {
            "use strict";
            var e = {
                "function": !0,
                "object": !0
            }
              , T = e[typeof window] && window || this
              , t = e[typeof d] && d
              , n = e[typeof c] && c && !c.nodeType && c
              , r = t && n && "object" == typeof u && u;
            !r || r.global !== r && r.window !== r && r.self !== r || (T = r);
            var i = Math.pow(2, 53) - 1
              , W = /\bOpera/
              , o = Object.prototype
              , a = o.hasOwnProperty
              , F = o.toString;
            function l(e) {
                return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
            }
            function R(e) {
                return e = U(e),
                /^(?:webOS|i(?:OS|P))/.test(e) ? e : l(e)
            }
            function I(e, t) {
                for (var n in e)
                    a.call(e, n) && t(e[n], n, e)
            }
            function L(e) {
                return null == e ? l(e) : F.call(e).slice(8, -1)
            }
            function G(e) {
                return String(e).replace(/([ -])(?!$)/g, "$1?")
            }
            function $(n, r) {
                var o = null;
                return function(e, t) {
                    var n = -1
                      , r = e ? e.length : 0;
                    if ("number" == typeof r && -1 < r && r <= i)
                        for (; ++n < r; )
                            t(e[n], n, e);
                    else
                        I(e, t)
                }(n, function(e, t) {
                    o = r(o, e, t, n)
                }),
                o
            }
            function U(e) {
                return String(e).replace(/^ +| +$/g, "")
            }
            var s = function e(r) {
                var t = T
                  , n = r && "object" == typeof r && "String" != L(r);
                n && (t = r,
                r = null);
                var o = t.navigator || {}
                  , i = o.userAgent || "";
                r = r || i;
                var a, l, s = n ? !!o.likeChrome : /\bChrome\b/.test(r) && !/internal|\n/i.test(F.toString()), c = "Object", u = n ? c : "ScriptBridgingProxyObject", f = n ? c : "Environment", d = n && t.java ? "JavaPackage" : L(t.java), p = n ? c : "RuntimeObject", b = /\bJava/.test(d) && t.java, h = b && L(t.environment) == f, g = b ? "a" : "α", m = b ? "b" : "β", y = t.document || {}, x = t.operamini || t.opera, v = W.test(v = n && x ? x["[[Class]]"] : L(x)) ? v : x = null, S = r, w = [], O = null, E = r == i, C = E && x && "function" == typeof x.version && x.version(), M = $([{
                    "label": "EdgeHTML",
                    "pattern": "Edge"
                }, "Trident", {
                    "label": "WebKit",
                    "pattern": "AppleWebKit"
                }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], function(e, t) {
                    return e || RegExp("\\b" + (t.pattern || G(t)) + "\\b", "i").exec(r) && (t.label || t)
                }), P = $(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    "label": "Microsoft Edge",
                    "pattern": "(?:Edge|Edg|EdgA|EdgiOS)"
                }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    "label": "Samsung Internet",
                    "pattern": "SamsungBrowser"
                }, "SeaMonkey", {
                    "label": "Silk",
                    "pattern": "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    "label": "SRWare Iron",
                    "pattern": "Iron"
                }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {
                    "label": "Yandex Browser",
                    "pattern": "YaBrowser"
                }, {
                    "label": "UC Browser",
                    "pattern": "UCBrowser"
                }, "Opera Mini", {
                    "label": "Opera Mini",
                    "pattern": "OPiOS"
                }, "Opera", {
                    "label": "Opera",
                    "pattern": "OPR"
                }, "Chromium", "Chrome", {
                    "label": "Chrome",
                    "pattern": "(?:HeadlessChrome)"
                }, {
                    "label": "Chrome Mobile",
                    "pattern": "(?:CriOS|CrMo)"
                }, {
                    "label": "Firefox",
                    "pattern": "(?:Firefox|Minefield)"
                }, {
                    "label": "Firefox for iOS",
                    "pattern": "FxiOS"
                }, {
                    "label": "IE",
                    "pattern": "IEMobile"
                }, {
                    "label": "IE",
                    "pattern": "MSIE"
                }, "Safari"], function(e, t) {
                    return e || RegExp("\\b" + (t.pattern || G(t)) + "\\b", "i").exec(r) && (t.label || t)
                }), _ = N([{
                    "label": "BlackBerry",
                    "pattern": "BB10"
                }, "BlackBerry", {
                    "label": "Galaxy S",
                    "pattern": "GT-I9000"
                }, {
                    "label": "Galaxy S2",
                    "pattern": "GT-I9100"
                }, {
                    "label": "Galaxy S3",
                    "pattern": "GT-I9300"
                }, {
                    "label": "Galaxy S4",
                    "pattern": "GT-I9500"
                }, {
                    "label": "Galaxy S5",
                    "pattern": "SM-G900"
                }, {
                    "label": "Galaxy S6",
                    "pattern": "SM-G920"
                }, {
                    "label": "Galaxy S6 Edge",
                    "pattern": "SM-G925"
                }, {
                    "label": "Galaxy S7",
                    "pattern": "SM-G930"
                }, {
                    "label": "Galaxy S7 Edge",
                    "pattern": "SM-G935"
                }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                    "label": "Kindle Fire",
                    "pattern": "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    "label": "Wii U",
                    "pattern": "WiiU"
                }, "Wii", "Xbox One", {
                    "label": "Xbox 360",
                    "pattern": "Xbox"
                }, "Xoom"]), B = $({
                    "Apple": {
                        "iPad": 1,
                        "iPhone": 1,
                        "iPod": 1
                    },
                    "Alcatel": {},
                    "Archos": {},
                    "Amazon": {
                        "Kindle": 1,
                        "Kindle Fire": 1
                    },
                    "Asus": {
                        "Transformer": 1
                    },
                    "Barnes & Noble": {
                        "Nook": 1
                    },
                    "BlackBerry": {
                        "PlayBook": 1
                    },
                    "Google": {
                        "Google TV": 1,
                        "Nexus": 1
                    },
                    "HP": {
                        "TouchPad": 1
                    },
                    "HTC": {},
                    "Huawei": {},
                    "Lenovo": {},
                    "LG": {},
                    "Microsoft": {
                        "Xbox": 1,
                        "Xbox One": 1
                    },
                    "Motorola": {
                        "Xoom": 1
                    },
                    "Nintendo": {
                        "Wii U": 1,
                        "Wii": 1
                    },
                    "Nokia": {
                        "Lumia": 1
                    },
                    "Oppo": {},
                    "Samsung": {
                        "Galaxy S": 1,
                        "Galaxy S2": 1,
                        "Galaxy S3": 1,
                        "Galaxy S4": 1
                    },
                    "Sony": {
                        "PlayStation": 1,
                        "PlayStation Vita": 1
                    },
                    "Xiaomi": {
                        "Mi": 1,
                        "Redmi": 1
                    }
                }, function(e, t, n) {
                    return e || (t[_] || t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(_)] || RegExp("\\b" + G(n) + "(?:\\b|\\w*\\d)", "i").exec(r)) && n
                }), k = $(["Windows Phone", "KaiOS", "Android", "CentOS", {
                    "label": "Chrome OS",
                    "pattern": "CrOS"
                }, "Debian", {
                    "label": "DragonFly BSD",
                    "pattern": "DragonFly"
                }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "], function(e, t) {
                    var n = t.pattern || G(t);
                    return !e && (e = RegExp("\\b" + n + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(r)) && (e = function(e, t, n) {
                        var r = {
                            "10.0": "10",
                            6.4: "10 Technical Preview",
                            6.3: "8.1",
                            6.2: "8",
                            6.1: "Server 2008 R2 / 7",
                            "6.0": "Server 2008 / Vista",
                            5.2: "Server 2003 / XP 64-bit",
                            5.1: "XP",
                            5.01: "2000 SP1",
                            "5.0": "2000",
                            "4.0": "NT",
                            "4.90": "ME"
                        };
                        return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r),
                        e = String(e),
                        t && n && (e = e.replace(RegExp(t, "i"), n)),
                        e = R(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }(e, n, t.label || t)),
                    e
                });
                function N(e) {
                    return $(e, function(e, t) {
                        var n = t.pattern || G(t);
                        return !e && (e = RegExp("\\b" + n + " *\\d+[.\\w_]*", "i").exec(r) || RegExp("\\b" + n + " *\\w+-[\\w]*", "i").exec(r) || RegExp("\\b" + n + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(r)) && ((e = String(t.label && !RegExp(n, "i").test(t.label) ? t.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]),
                        t = t.label || t,
                        e = R(e[0].replace(RegExp(n, "i"), t).replace(RegExp("; *(?:" + t + "[_-])?", "i"), " ").replace(RegExp("(" + t + ")[-_.]?(\\w)", "i"), "$1 $2"))),
                        e
                    })
                }
                function j(e) {
                    return $(e, function(e, t) {
                        return e || (RegExp(t + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(r) || 0)[1] || null
                    })
                }
                if (M = M && [M],
                /\bAndroid\b/.test(k) && !_ && (a = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(r)) && (_ = U(a[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null),
                B && !_ ? _ = N([B]) : B && _ && (_ = _.replace(RegExp("^(" + G(B) + ")[-_.\\s]", "i"), B + " ").replace(RegExp("^(" + G(B) + ")[-_.]?(\\w)", "i"), B + " $2")),
                (a = /\bGoogle TV\b/.exec(_)) && (_ = a[0]),
                /\bSimulator\b/i.test(r) && (_ = (_ ? _ + " " : "") + "Simulator"),
                "Opera Mini" == P && /\bOPiOS\b/.test(r) && w.push("running in Turbo/Uncompressed mode"),
                "IE" == P && /\blike iPhone OS\b/.test(r) ? (B = (a = e(r.replace(/like iPhone OS/, ""))).manufacturer,
                _ = a.product) : /^iP/.test(_) ? (P = P || "Safari",
                k = "iOS" + ((a = / OS ([\d_]+)/i.exec(r)) ? " " + a[1].replace(/_/g, ".") : "")) : "Konqueror" == P && /^Linux\b/i.test(k) ? k = "Kubuntu" : B && "Google" != B && (/Chrome/.test(P) && !/\bMobile Safari\b/i.test(r) || /\bVita\b/.test(_)) || /\bAndroid\b/.test(k) && /^Chrome/.test(P) && /\bVersion\//i.test(r) ? (P = "Android Browser",
                k = /\bAndroid\b/.test(k) ? k : "Android") : "Silk" == P ? (/\bMobi/i.test(r) || (k = "Android",
                w.unshift("desktop mode")),
                /Accelerated *= *true/i.test(r) && w.unshift("accelerated")) : "UC Browser" == P && /\bUCWEB\b/.test(r) ? w.push("speed mode") : "PaleMoon" == P && (a = /\bFirefox\/([\d.]+)\b/.exec(r)) ? w.push("identifying as Firefox " + a[1]) : "Firefox" == P && (a = /\b(Mobile|Tablet|TV)\b/i.exec(r)) ? (k = k || "Firefox OS",
                _ = _ || a[1]) : !P || (a = !/\bMinefield\b/i.test(r) && /\b(?:Firefox|Safari)\b/.exec(P)) ? (P && !_ && /[\/,]|^[^(]+?\)/.test(r.slice(r.indexOf(a + "/") + 8)) && (P = null),
                (a = _ || B || k) && (_ || B || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(k)) && (P = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(k) ? k : a) + " Browser")) : "Electron" == P && (a = (/\bChrome\/([\d.]+)\b/.exec(r) || 0)[1]) && w.push("Chromium " + a),
                C = C || j(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", G(P), "(?:Firefox|Minefield|NetFront)"]),
                (a = ("iCab" == M && 3 < parseFloat(C) ? "WebKit" : /\bOpera\b/.test(P) && (/\bOPR\b/.test(r) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(r) && !/^(?:Trident|EdgeHTML)$/.test(M) && "WebKit" || !M && /\bMSIE\b/i.test(r) && ("Mac OS" == k ? "Tasman" : "Trident") || "WebKit" == M && /\bPlayStation\b(?! Vita\b)/i.test(P) && "NetFront") && (M = [a]),
                "IE" == P && (a = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(r) || 0)[1]) ? (P += " Mobile",
                k = "Windows Phone " + (/\+$/.test(a) ? a : a + ".x"),
                w.unshift("desktop mode")) : /\bWPDesktop\b/i.test(r) ? (P = "IE Mobile",
                k = "Windows Phone 8.x",
                w.unshift("desktop mode"),
                C = C || (/\brv:([\d.]+)/.exec(r) || 0)[1]) : "IE" != P && "Trident" == M && (a = /\brv:([\d.]+)/.exec(r)) && (P && w.push("identifying as " + P + (C ? " " + C : "")),
                P = "IE",
                C = a[1]),
                E) {
                    if (function(e, t) {
                        var n = null != e ? typeof e[t] : "number";
                        return !(/^(?:boolean|number|string|undefined)$/.test(n) || "object" == n && !e[t])
                    }(t, "global"))
                        if (b && (S = (a = b.lang.System).getProperty("os.arch"),
                        k = k || a.getProperty("os.name") + " " + a.getProperty("os.version")),
                        h) {
                            try {
                                C = t.require("ringo/engine").version.join("."),
                                P = "RingoJS"
                            } catch (e) {
                                (a = t.system) && a.global.system == t.system && (P = "Narwhal",
                                k = k || a[0].os || null)
                            }
                            P = P || "Rhino"
                        } else
                            "object" == typeof t.process && !t.process.browser && (a = t.process) && ("object" == typeof a.versions && ("string" == typeof a.versions.electron ? (w.push("Node " + a.versions.node),
                            P = "Electron",
                            C = a.versions.electron) : "string" == typeof a.versions.nw && (w.push("Chromium " + C, "Node " + a.versions.node),
                            P = "NW.js",
                            C = a.versions.nw)),
                            P || (P = "Node.js",
                            S = a.arch,
                            k = a.platform,
                            C = (C = /[\d.]+/.exec(a.version)) ? C[0] : null));
                    else
                        L(a = t.runtime) == u ? (P = "Adobe AIR",
                        k = a.flash.system.Capabilities.os) : L(a = t.phantom) == p ? (P = "PhantomJS",
                        C = (a = a.version || null) && a.major + "." + a.minor + "." + a.patch) : "number" == typeof y.documentMode && (a = /\bTrident\/(\d+)/i.exec(r)) ? (C = [C, y.documentMode],
                        (a = +a[1] + 4) != C[1] && (w.push("IE " + C[1] + " mode"),
                        M && (M[1] = ""),
                        C[1] = a),
                        C = "IE" == P ? String(C[1].toFixed(1)) : C[0]) : "number" == typeof y.documentMode && /^(?:Chrome|Firefox)\b/.test(P) && (w.push("masking as " + P + " " + C),
                        P = "IE",
                        C = "11.0",
                        M = ["Trident"],
                        k = "Windows");
                    k = k && R(k)
                }
                if (C && (a = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(C) || /(?:alpha|beta)(?: ?\d)?/i.exec(r + ";" + (E && o.appMinorVersion)) || /\bMinefield\b/i.test(r) && "a") && (O = /b/i.test(a) ? "beta" : "alpha",
                C = C.replace(RegExp(a + "\\+?$"), "") + ("beta" == O ? m : g) + (/\d+\+?/.exec(a) || "")),
                "Fennec" == P || "Firefox" == P && /\b(?:Android|Firefox OS|KaiOS)\b/.test(k))
                    P = "Firefox Mobile";
                else if ("Maxthon" == P && C)
                    C = C.replace(/\.[\d.]+/, ".x");
                else if (/\bXbox\b/i.test(_))
                    "Xbox 360" == _ && (k = null),
                    "Xbox 360" == _ && /\bIEMobile\b/.test(r) && w.unshift("mobile mode");
                else if (!/^(?:Chrome|IE|Opera)$/.test(P) && (!P || _ || /Browser|Mobi/.test(P)) || "Windows CE" != k && !/Mobi/i.test(r))
                    if ("IE" == P && E)
                        try {
                            null === t.external && w.unshift("platform preview")
                        } catch (e) {
                            w.unshift("embedded")
                        }
                    else
                        (/\bBlackBerry\b/.test(_) || /\bBB10\b/.test(r)) && (a = (RegExp(_.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(r) || 0)[1] || C) ? (k = ((a = [a, /BB10/.test(r)])[1] ? (_ = null,
                        B = "BlackBerry") : "Device Software") + " " + a[0],
                        C = null) : this != I && "Wii" != _ && (E && x || /Opera/.test(P) && /\b(?:MSIE|Firefox)\b/i.test(r) || "Firefox" == P && /\bOS X (?:\d+\.){2,}/.test(k) || "IE" == P && (k && !/^Win/.test(k) && 5.5 < C || /\bWindows XP\b/.test(k) && 8 < C || 8 == C && !/\bTrident\b/.test(r))) && !W.test(a = e.call(I, r.replace(W, "") + ";")) && a.name && (a = "ing as " + a.name + ((a = a.version) ? " " + a : ""),
                        W.test(P) ? (/\bIE\b/.test(a) && "Mac OS" == k && (k = null),
                        a = "identify" + a) : (a = "mask" + a,
                        P = v ? R(v.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera",
                        /\bIE\b/.test(a) && (k = null),
                        E || (C = null)),
                        M = ["Presto"],
                        w.push(a));
                else
                    P += " Mobile";
                (a = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(r) || 0)[1]) && (a = [parseFloat(a.replace(/\.(\d)$/, ".0$1")), a],
                "Safari" == P && "+" == a[1].slice(-1) ? (P = "WebKit Nightly",
                O = "alpha",
                C = a[1].slice(0, -1)) : C != a[1] && C != (a[2] = (/\bSafari\/([\d.]+\+?)/i.exec(r) || 0)[1]) || (C = null),
                a[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(r) || 0)[1],
                537.36 == a[0] && 537.36 == a[2] && 28 <= parseFloat(a[1]) && "WebKit" == M && (M = ["Blink"]),
                a = E && (s || a[1]) ? (M && (M[1] = "like Chrome"),
                a[1] || ((a = a[0]) < 530 ? 1 : a < 532 ? 2 : a < 532.05 ? 3 : a < 533 ? 4 : a < 534.03 ? 5 : a < 534.07 ? 6 : a < 534.1 ? 7 : a < 534.13 ? 8 : a < 534.16 ? 9 : a < 534.24 ? 10 : a < 534.3 ? 11 : a < 535.01 ? 12 : a < 535.02 ? "13+" : a < 535.07 ? 15 : a < 535.11 ? 16 : a < 535.19 ? 17 : a < 536.05 ? 18 : a < 536.1 ? 19 : a < 537.01 ? 20 : a < 537.11 ? "21+" : a < 537.13 ? 23 : a < 537.18 ? 24 : a < 537.24 ? 25 : a < 537.36 ? 26 : "Blink" != M ? "27" : "28")) : (M && (M[1] = "like Safari"),
                (a = a[0]) < 400 ? 1 : a < 500 ? 2 : a < 526 ? 3 : a < 533 ? 4 : a < 534 ? "4+" : a < 535 ? 5 : a < 537 ? 6 : a < 538 ? 7 : a < 601 ? 8 : a < 602 ? 9 : a < 604 ? 10 : a < 606 ? 11 : a < 608 ? 12 : "12"),
                M && (M[1] += " " + (a += "number" == typeof a ? ".x" : /[.+]/.test(a) ? "" : "+")),
                "Safari" == P && (!C || 45 < parseInt(C)) ? C = a : "Chrome" == P && /\bHeadlessChrome/i.test(r) && w.unshift("headless")),
                "Opera" == P && (a = /\bzbov|zvav$/.exec(k)) ? (P += " ",
                w.unshift("desktop mode"),
                "zvav" == a ? (P += "Mini",
                C = null) : P += "Mobile",
                k = k.replace(RegExp(" *" + a + "$"), "")) : "Safari" == P && /\bChrome\b/.exec(M && M[1]) ? (w.unshift("desktop mode"),
                P = "Chrome Mobile",
                C = null,
                k = /\bOS X\b/.test(k) ? (B = "Apple",
                "iOS 4.3+") : null) : /\bSRWare Iron\b/.test(P) && !C && (C = j("Chrome")),
                C && 0 == C.indexOf(a = /[\d.]+$/.exec(k)) && -1 < r.indexOf("/" + a + "-") && (k = U(k.replace(a, ""))),
                k && -1 != k.indexOf(P) && !RegExp(P + " OS").test(k) && (k = k.replace(RegExp(" *" + G(P) + " *"), "")),
                M && !/\b(?:Avant|Nook)\b/.test(P) && (/Browser|Lunascape|Maxthon/.test(P) || "Safari" != P && /^iOS/.test(k) && /\bSafari\b/.test(M[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(P) && M[1]) && (a = M[M.length - 1]) && w.push(a),
                w.length && (w = ["(" + w.join("; ") + ")"]),
                B && _ && _.indexOf(B) < 0 && w.push("on " + B),
                _ && w.push((/^on /.test(w[w.length - 1]) ? "" : "on ") + _),
                k && (a = / ([\d.+]+)$/.exec(k),
                l = a && "/" == k.charAt(k.length - a[0].length - 1),
                k = {
                    "architecture": 32,
                    "family": a && !l ? k.replace(a[0], "") : k,
                    "version": a ? a[1] : null,
                    "toString": function() {
                        var e = this.version;
                        return this.family + (e && !l ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                    }
                }),
                (a = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(S)) && !/\bi686\b/i.test(S) ? (k && (k.architecture = 64,
                k.family = k.family.replace(RegExp(" *" + a), "")),
                P && (/\bWOW64\b/i.test(r) || E && /\w(?:86|32)$/.test(o.cpuClass || o.platform) && !/\bWin64; x64\b/i.test(r)) && w.unshift("32-bit")) : k && /^OS X/.test(k.family) && "Chrome" == P && 39 <= parseFloat(C) && (k.architecture = 64),
                r = r || null;
                var A = {};
                return A.description = r,
                A.layout = M && M[0],
                A.manufacturer = B,
                A.name = P,
                A.prerelease = O,
                A.product = _,
                A.ua = r,
                A.version = P && C,
                A.os = k || {
                    "architecture": null,
                    "family": null,
                    "version": null,
                    "toString": function() {
                        return "null"
                    }
                },
                A.parse = e,
                A.toString = function() {
                    return this.description || ""
                }
                ,
                A.version && w.unshift(C),
                A.name && w.unshift(P),
                k && P && (k != String(k).split(" ")[0] || k != P.split(" ")[0] && !_) && w.push(_ ? "(" + k + ")" : "on " + k),
                w.length && (A.description = w.join(" ")),
                A
            }();
            T.platform = s,
            void 0 === (f = function() {
                return s
            }
            .call(d, p, d, c)) || (c.exports = f)
        }
        ).call(this)
    }
    ).call(this, p(12)(e), p(13))
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.$_ = function(e) {
        return document.getElementById(e)
    }
    ,
    t.on = function(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
    }
    ,
    t.redirect = function(e) {
        var t = encodeURIComponent(e);
        location.href = "/redirect?to=" + t
    }
    ,
    t.redirectToCompatibility = function() {
        return location.replace("/?type=1")
    }
    ,
    t.redirectToMacConnotInstall = function() {
        return location.replace("/?type=4")
    }
    ,
    t.isEnglishVersion = function() {
        var e = document.documentElement.lang;
        return !(!e || "zh" === e)
    }
    ,
    t.compareVersion = function(e, t) {
        if (e === t)
            return 0;
        for (var n = e.split("."), r = t.split("."), o = Math.max(n.length, r.length), i = 0; i < o; i++) {
            var a = Number(n[i]);
            isNaN(a) && (a = 0);
            var l = Number(r[i]);
            if (isNaN(l) && (l = 0),
            l < a)
                return 1;
            if (a < l)
                return -1
        }
        return 0
    }
    ,
    t.isDomesticUser = function(t) {
        var n = "_flash_is_domestic_user_"
          , r = window[n]
          , o = document.createElement("script");
        window[n] = function(e) {
            window[n] = r,
            setTimeout(function() {
                return document.body.removeChild(o)
            }),
            t(e && e.country)
        }
        ,
        o.src = "//api.flash.cn/config/area?callback=" + n,
        document.body.appendChild(o)
    }
    ,
    t.redirectForeignOfficial = function() {
        t.redirect("https://get.adobe.com/flashplayer")
    }
    ,
    t.isDomesCity = function(t) {
        var n = "_flash_is_domestic_user_"
          , r = window[n]
          , o = document.createElement("script")
          , i = document.head || document.getElementsByTagName("head")[0];
        window[n] = function(e) {
            window[n] = r,
            setTimeout(function() {
                return i.removeChild(o)
            }),
            t(e)
        }
        ,
        o.src = "//api.flash.cn/config/area?callback=" + n,
        i.appendChild(o)
    }
    ,
    t.downLoadUrl = {
        downloadWins: "/download-wins",
        download: "/download"
    }
}
, , function(module, exports) {
    var JSON = {};
    !function() {
        "use strict";
        function f(e) {
            return e < 10 ? "0" + e : e
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }
        ,
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
            return this.valueOf()
        }
        );
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        function quote(e) {
            return escapable.lastIndex = 0,
            escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }
        function str(e, t) {
            var n, r, o, i, a, l = gap, s = t[e];
            switch (s && "object" == typeof s && "function" == typeof s.toJSON && (s = s.toJSON(e)),
            "function" == typeof rep && (s = rep.call(t, e, s)),
            typeof s) {
            case "string":
                return quote(s);
            case "number":
                return isFinite(s) ? String(s) : "null";
            case "boolean":
            case "null":
                return String(s);
            case "object":
                if (!s)
                    return "null";
                if (gap += indent,
                a = [],
                "[object Array]" === Object.prototype.toString.apply(s)) {
                    for (i = s.length,
                    n = 0; n < i; n += 1)
                        a[n] = str(n, s) || "null";
                    return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + l + "]" : "[" + a.join(",") + "]",
                    gap = l,
                    o
                }
                if (rep && "object" == typeof rep)
                    for (i = rep.length,
                    n = 0; n < i; n += 1)
                        "string" == typeof rep[n] && (o = str(r = rep[n], s)) && a.push(quote(r) + (gap ? ": " : ":") + o);
                else
                    for (r in s)
                        Object.prototype.hasOwnProperty.call(s, r) && (o = str(r, s)) && a.push(quote(r) + (gap ? ": " : ":") + o);
                return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + l + "}" : "{" + a.join(",") + "}",
                gap = l,
                o
            }
        }
        "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
            var r;
            if (indent = gap = "",
            "number" == typeof n)
                for (r = 0; r < n; r += 1)
                    indent += " ";
            else
                "string" == typeof n && (indent = n);
            if ((rep = t) && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))
                throw new Error("JSON.stringify");
            return str("", {
                "": e
            })
        }
        ),
        "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            var j;
            function walk(e, t) {
                var n, r, o = e[t];
                if (o && "object" == typeof o)
                    for (n in o)
                        Object.prototype.hasOwnProperty.call(o, n) && (void 0 !== (r = walk(o, n)) ? o[n] = r : delete o[n]);
                return reviver.call(e, t, o)
            }
            if (text = String(text),
            cx.lastIndex = 0,
            cx.test(text) && (text = text.replace(cx, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })),
            /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                return j = eval("(" + text + ")"),
                "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
            throw new SyntaxError("JSON.parse")
        }
        )
    }(),
    module.exports = JSON
}
, , , function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    function() {
        if (!Object.defineProperty || !function() {
            try {
                return Object.defineProperty({}, "?xx", {}),
                !0
            } catch (e) {
                return !1
            }
        }()) {
            var r = Object.defineProperty;
            Object.defineProperty = function(e, t, n) {
                if (r)
                    try {
                        return r(e, t, n)
                    } catch (e) {}
                if (e !== Object(e))
                    throw TypeError("Object.defineProperty called on non-object");
                return Object.prototype["__defineGetter__"] && "get"in n && Object.prototype["__defineGetter__"].call(e, t, n.get),
                Object.prototype["__defineSetter__"] && "set"in n && Object.prototype["__defineSetter__"].call(e, t, n.set),
                "value"in n && (e[t] = n.value),
                e
            }
        }
    }();
    var l = n(2)
      , r = n(20)
      , o = n(4)
      , s = n(14)
      , i = n(21)
      , c = n(11)
      , u = n(1);
    function a() {
        this.root = l["default"].getByClass("download")[0];
        this.categoryType = {
            activex: "activex",
            ppapi: "ppapi",
            npapi: "npapi"
        },
        this.category = "",
        this.init()
    }
    window.JSON || (window.JSON = n(16)),
    r["default"](l["default"].getByClass("parallax")[0]),
    window["FormData"] && (l["default"].forEach([l["default"].getByClass("slug")[0], l["default"].getByClass("download")[0], l["default"].getByClass("item")[0]], function(e) {
        l["default"].addClass(e, "transitionEle")
    }),
    l["default"].forEach(l["default"].toArray(l["default"].getByClass("transitionEle")), function(e) {
        l["default"].addClass(e, "transition")
    })),
    a.prototype.init = function() {
        var r = this
          , e = this.root;
        this.download = l["default"].getByClass("loadLink", e)[0];
        var t = this.getWorkFlowClassByQuery()
          , o = c.os.toString();
        !t && c.os && c.os.family && c.name && /^Windows /i.test(o) && (t = this.getWorkFlowClassOfWindowsByBrowserName());
        var i = this.category;
        u.getPackages(function(e) {
            var t = e["fc-" + i];
            if (t && t.downloadURL) {
                var n = t.downloadURL;
                return "activex" !== i && "ppapi" !== i || (n = e["fc-ppax"].downloadURL),
                (/^Windows XP/i.test(o) || /Vista/i.test(o)) && (n = "https://www.flash.cn/flashcenter/latest_xp/FlashCenter_Setup_1.0.6.43_silent_10001.exe"),
                void (r.download.href = n)
            }
            r.disableBtn()
        });
        var n = l["default"].getByClass("otherLink", e)[0]
          , a = "";
        a = /^Windows /i.test(o) ? s.downLoadUrl.downloadWins : s.downLoadUrl.download,
        n.href = a,
        l["default"].add(l["default"].getByClass("download")[0], "click", function(e) {
        
        })
    }
    ,
    a.prototype.getWorkFlowClassByQuery = function() {
        var e = i.parse(location.search.toLocaleLowerCase())
          , t = this.categoryType;
        return t[e] ? this.category = t[e] : ""
    }
    ,
    a.prototype.getWorkFlowClassOfWindowsByBrowserName = function() {
        var e = c.name;
        return /(IE|Microsoft Edge)/i.test(e) ? this.category = this.categoryType.activex : /(Opera|Chrome)/i.test(e) ? this.category = this.categoryType.ppapi : /(Firefox|Safari)/i.test(e) ? this.category = this.categoryType.npapi : ""
    }
    ,
    a.prototype.disableBtn = function() {
        var e = this.download;
        l["default"].addClass(e, "disable"),
        l["default"].add(e, "click", function(e) {
            return l["default"].preventDefault(e)
        })
    }
    ,
    new a,
    o["default"]()
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var s = n(2);
    window["requestAnimFrame"] = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window["mozRequestAnimationFrame"],
    t["default"] = function(e) {
        if (window["requestAnimFrame"]) {
            var t, n, r = e.offsetWidth, o = e.offsetHeight, i = {
                x: r / 2,
                y: o / 2
            }, a = [], l = function(e) {
                this.x = 0,
                this.y = 0,
                this.rate = .05,
                this.distance = 60,
                this.z = 0,
                e && (e.selector && (this.selector = e.selector),
                e.rate && (this.rate = e.rate),
                e.distance && (this.distance = e.distance),
                e.z && (this.z = e.z))
            };
            l.prototype.draw = function() {
                var e = this
                  , t = r / 2;
                i.x > t ? e.x = e.x + ((t - i.x) * e.distance / r - e.x) * e.rate : e.x = e.x + (i.x * e.distance / r - e.x) * e.rate,
                e.y += (i.y * (e.distance / 3) / o - e.y) * e.rate,
                e.selector.style.transform = "translate3d(" + -e.x + "px, " + -1 * e.y + "px, " + e.z + "px)"
            }
            ,
            s["default"].forEach(s["default"].toArray(e.children), function(e) {
                a.push(new l({
                    selector: e,
                    rate: 1 * e.getAttribute("data-rate"),
                    z: 1 * e.getAttribute("data-z"),
                    distance: 1 * e.getAttribute("data-distance")
                }))
            }),
            t = {
                x: r / 2,
                y: o / 2
            },
            n = document.body,
            s["default"].add(n, "resize", function() {
                t.x = e.offsetWidth,
                t.y = e.offsetHeight
            }),
            s["default"].add(n, "mousemove", function(e) {
                i.x = e.pageX,
                i.y = e.pageY - t.y
            }),
            function e() {
                window["requestAnimFrame"](e),
                s["default"].forEach(a, function(e) {
                    e.draw()
                })
            }()
        }
    }
}
, function(e, t, n) {
    "use strict";
    var i = Object.prototype.hasOwnProperty;
    function a(e) {
        try {
            return decodeURIComponent(e.replace(/\+/g, " "))
        } catch (e) {
            return null
        }
    }
    function l(e) {
        try {
            return encodeURIComponent(e)
        } catch (e) {
            return null
        }
    }
    t.stringify = function(e, t) {
        t = t || "";
        var n, r, o = [];
        for (r in "string" != typeof t && (t = "?"),
        e)
            if (i.call(e, r)) {
                if ((n = e[r]) || null != n && !isNaN(n) || (n = ""),
                r = l(r),
                n = l(n),
                null === r || null === n)
                    continue;
                o.push(r + "=" + n)
            }
        return o.length ? t + o.join("&") : ""
    }
    ,
    t.parse = function(e) {
        for (var t, n = /([^=?#&]+)=?([^&]*)/g, r = {}; t = n.exec(e); ) {
            var o = a(t[1])
              , i = a(t[2]);
            null === o || null === i || o in r || (r[o] = i)
        }
        return r
    }
}
]);
