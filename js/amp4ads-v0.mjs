self.AMP_CONFIG = {
    "v": "012010270040000",
    "type": "production",
    "allow-doc-opt-in": ["amp-next-page", "analytics-chunks", "analytics-chunks-inabox"],
    "allow-url-opt-in": ["pump-early-frame"],
    "canary": 0,
    "a4aProfilingRate": 0.01,
    "adsense-ad-size-optimization": 0.1,
    "amp-access-iframe": 1,
    "amp-accordion-display-locking": 0.01,
    "amp-action-macro": 1,
    "amp-ad-ff-adx-ady": 0.01,
    "amp-auto-ads-adsense-holdout": 0.1,
    "ampdoc-fie": 1,
    "amp-mega-menu": 1,
    "amp-nested-menu": 1,
    "amp-playbuzz": 1,
    "amp-sidebar-swipe-to-dismiss": 1,
    "amp-story-responsive-units": 1,
    "amp-story-v1": 1,
    "chunked-amp": 1,
    "doubleclickSraExp": 0.01,
    "doubleclickSraReportExcludedBlock": 0.1,
    "expand-json-targeting": 1,
    "fix-inconsistent-responsive-height-selection": 0,
    "fixed-elements-in-lightbox": 1,
    "flexAdSlots": 0.05,
    "intersect-resources": 1,
    "ios-fixed-no-transfer": 0,
    "pump-early-frame": 1,
    "swg-gpay-api": 1,
    "swg-gpay-native": 1,
    "amp-ad-no-center-css": 0,
    "analytics-chunks": 1,
    "adsense-ptt-exp": 0.02,
    "doubleclick-ptt-exp": 0.02,
    "esm": 1
};
/*AMP_CONFIG*/
(function() {
    var t = class {
        constructor() {
            this.je = new e
        }
        abort() {
            this.je.Nd = !0
        }
        get signal() {
            return this.je
        }
    }
    ;
    var e = class {
        constructor() {
            this.Nd = !1
        }
        get aborted() {
            return this.Nd
        }
    }
    ;
    var i;
    function r() {
        return i ? i : i = Promise.resolve(void 0)
    }
    var n = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/
      , s = "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ")
      , a = {
        childList: !0,
        subtree: !0
    };
    function o(t, e) {
        if (!n.test(e) || s.includes(e))
            throw new t(`invalid custom element name "${e}"`)
    }
    function h(t) {
        setTimeout((()=>{
            self.__AMP_REPORT_ERROR(t);
            throw t
        }
        ))
    }
    var l = class {
        constructor(t, e) {
            this.h = t;
            this.Nb = e;
            this.ce = Object.create(null)
        }
        define(t, e, i) {
            this.Nb.define(t, e, i);
            var r = this.ce
              , n = r[t];
            n && (n.resolve(),
            delete r[t])
        }
        get(t) {
            var e = this.Nb.getByName(t);
            if (e)
                return e.ctor
        }
        whenDefined(t) {
            var e = this.h.Promise;
            o(this.h.SyntaxError, t);
            if (this.Nb.getByName(t))
                return r();
            var i = this.ce
              , n = i[t];
            if (n)
                return n.promise;
            var s;
            var a = new e((t=>s = t));
            i[t] = {
                promise: a,
                resolve: s
            };
            return a
        }
        upgrade(t) {
            this.Nb.upgrade(t)
        }
    }
    ;
    function u(t, e) {
        if (t.na)
            t.na += `,${e}`;
        else {
            t.na = e;
            var i = new t.h.MutationObserver((e=>{
                e && p(t, e)
            }
            ));
            t.T = i;
            t.Sc.forEach((t=>{
                i.observe(t, a)
            }
            ));
            g(t.h, t)
        }
    }
    function c(t, e) {
        return e && t.querySelectorAll ? t.querySelectorAll(e) : []
    }
    function d(t, e) {
        var i = t.getByName(e.localName);
        if (i && (m(t, e, i),
        e.connectedCallback))
            try {
                e.connectedCallback()
            } catch (t) {
                h(t)
            }
    }
    function m(t, e, i) {
        i = i.ctor;
        if (!(e instanceof i)) {
            t.mc = e;
            try {
                if (new i !== e)
                    throw new t.h.Error("Constructor illegally returned a different instance.")
            } catch (t) {
                h(t)
            }
        }
    }
    function p(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            if (!r)
                continue;
            var n = r.addedNodes
              , s = r.removedNodes;
            for (var a = 0; a < n.length; a++) {
                var o = n[a];
                var l = c(o, t.na);
                d(t, o);
                for (var u = 0; u < l.length; u++)
                    d(t, l[u])
            }
            for (var m = 0; m < s.length; m++) {
                o = s[m];
                var p = c(o, t.na);
                if (o.disconnectedCallback)
                    try {
                        o.disconnectedCallback()
                    } catch (t) {
                        h(t)
                    }
                for (var f = 0; f < p.length; f++)
                    if (o = p[f],
                    o.disconnectedCallback)
                        try {
                            o.disconnectedCallback()
                        } catch (t) {
                            h(t)
                        }
            }
        }
    }
    var f = class {
        constructor(t) {
            this.h = t;
            this.nc = Object.create(null);
            this.na = "";
            this.T = this.mc = null;
            this.Sc = [t.document]
        }
        current() {
            var t = this.mc;
            this.mc = null;
            return t
        }
        getByName(t) {
            var e = this.nc[t];
            if (e)
                return e
        }
        getByConstructor(t) {
            var e = this.nc;
            for (var i in e) {
                var r = e[i];
                if (r.ctor === t)
                    return r
            }
        }
        define(t, e, i) {
            var r = this.h.Error
              , n = this.h.SyntaxError;
            if (i)
                throw new r("Extending native custom elements is not supported");
            o(n, t);
            if (this.getByName(t) || this.getByConstructor(e))
                throw new r(`duplicate definition "${t}"`);
            this.nc[t] = {
                name: t,
                ctor: e
            };
            u(this, t);
            this.Sc.forEach((e=>{
                this.upgrade(e, t)
            }
            ))
        }
        upgrade(t, e) {
            var i = !!e
              , r = c(t, e || this.na);
            for (t = 0; t < r.length; t++) {
                var n = r[t];
                i ? d(this, n) : this.upgradeSelf(n)
            }
        }
        upgradeSelf(t) {
            var e = this.getByName(t.localName);
            e && m(this, t, e)
        }
        observe(t) {
            this.Sc.push(t);
            this.T && this.T.observe(t, a)
        }
        sync() {
            this.T && p(this, this.T.takeRecords())
        }
    }
    ;
    function g(t, e) {
        var i = t.document
          , r = t.Document.prototype
          , n = t.Element.prototype
          , s = t.Node.prototype
          , a = r.createElement
          , o = r.importNode
          , h = s.appendChild
          , l = s.cloneNode
          , u = s.insertBefore
          , c = s.removeChild
          , d = s.replaceChild;
        r.createElement = function(t) {
            var i = e.getByName(t);
            return i ? new i.ctor : a.apply(this, arguments)
        }
        ;
        r.importNode = function() {
            var t = o.apply(this, arguments);
            t && this === i && (e.upgradeSelf(t),
            e.upgrade(t));
            return t
        }
        ;
        s.appendChild = function() {
            var t = h.apply(this, arguments);
            e.sync();
            return t
        }
        ;
        s.insertBefore = function() {
            var t = u.apply(this, arguments);
            e.sync();
            return t
        }
        ;
        s.removeChild = function() {
            var t = c.apply(this, arguments);
            e.sync();
            return t
        }
        ;
        s.replaceChild = function() {
            var t = d.apply(this, arguments);
            e.sync();
            return t
        }
        ;
        s.cloneNode = function() {
            var t = l.apply(this, arguments);
            t.ownerDocument === i && (e.upgradeSelf(t),
            e.upgrade(t));
            return t
        }
        ;
        var m = n
          , p = Object.getOwnPropertyDescriptor(m, "innerHTML");
        p || (m = Object.getPrototypeOf(t.HTMLElement.prototype),
        p = Object.getOwnPropertyDescriptor(m, "innerHTML"));
        if (p && p.configurable) {
            var f = p.set;
            p.set = function(t) {
                f.call(this, t);
                e.upgrade(this)
            }
            ;
            Object.defineProperty(m, "innerHTML", p)
        }
    }
    function v() {
        function t() {
            var t = this.constructor;
            var e = a.current();
            e || (e = a.getByConstructor(t),
            e = s.call(n, e.name));
            w(e, t.prototype);
            return e
        }
        var e = Ae
          , i = e.Element;
        var r = e.HTMLElement
          , n = e.document
          , s = n.createElement
          , a = new f(e)
          , o = new l(e,a);
        Object.defineProperty(e, "customElements", {
            enumerable: !0,
            configurable: !0,
            value: o
        });
        i = i.prototype;
        var h = i.attachShadow
          , u = i.createShadowRoot;
        h && (i.attachShadow = function(t) {
            var e = h.apply(this, arguments);
            a.observe(e);
            return e
        }
        ,
        i.attachShadow.toString = function() {
            return h.toString()
        }
        );
        u && (i.createShadowRoot = function() {
            var t = u.apply(this, arguments);
            a.observe(t);
            return t
        }
        ,
        i.createShadowRoot.toString = function() {
            return u.toString()
        }
        );
        y(r, t);
        e.HTMLElement = t;
        t.call || (t.apply = e.Function.apply,
        t.bind = e.Function.bind,
        t.call = e.Function.call)
    }
    function b() {
        function t() {
            return r.construct(i, [], this.constructor)
        }
        var e = Ae;
        var i = e.HTMLElement
          , r = e.Reflect;
        y(i, t);
        e.HTMLElement = t
    }
    function y(t, e) {
        e.prototype = Object.create(t.prototype, {
            constructor: {
                configurable: !0,
                writable: !0,
                value: e
            }
        });
        w(e, t)
    }
    function w(t, e) {
        if (Object.setPrototypeOf)
            Object.setPrototypeOf(t, e);
        else if ({
            __proto__: {
                test: !0
            }
        }.test)
            t.__proto__ = e;
        else {
            var i = e;
            for (; null !== i && !Object.isPrototypeOf.call(i, t); ) {
                var r = Object.getOwnPropertyNames(i);
                for (var n = 0; n < r.length; n++) {
                    var s = r[n];
                    if (Object.hasOwnProperty.call(t, s))
                        continue;
                    var a = Object.getOwnPropertyDescriptor(i, s);
                    Object.defineProperty(t, s, a)
                }
                i = Object.getPrototypeOf(i)
            }
        }
    }
    function A(t, e="") {
        try {
            return decodeURIComponent(t)
        } catch (t) {
            return e
        }
    }
    var E = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
    function P(t) {
        var e = Object.create(null);
        if (!t)
            return e;
        var i;
        for (; i = E.exec(t); ) {
            var r = A(i[1], i[1])
              , n = i[2] ? A(i[2].replace(/\+/g, " "), i[2]) : "";
            e[r] = n
        }
        return e
    }
    var _ = "";
    function S(t) {
        var e = t || self;
        if (e.__AMP_MODE)
            e = e.__AMP_MODE;
        else {
            var i = P(e.location.originalHash || e.location.hash);
            var r = P(e.location.search);
            _ || (_ = e.AMP_CONFIG && e.AMP_CONFIG.v ? e.AMP_CONFIG.v : "012010270040000");
            i = {
                localDev: !1,
                development: !!(0 <= ["1", "actions", "amp", "amp4ads", "amp4email"].indexOf(i.development) || e.AMP_DEV_MODE),
                examiner: "2" == i.development,
                esm: !0,
                geoOverride: i["amp-geo"],
                minified: !0,
                lite: void 0 != r.amp_lite,
                test: !1,
                log: i.log,
                version: "2010270040000",
                rtvVersion: _
            };
            e = e.__AMP_MODE = i
        }
        return e
    }
    var x = Object.prototype.toString;
    function O(t) {
        return Array.isArray(t)
    }
    function C(t) {
        return t ? Array.prototype.slice.call(t) : []
    }
    function M(t) {
        return "[object Object]" === x.call(t)
    }
    function R(t) {
        return "number" === typeof t && isFinite(t)
    }
    function T(t) {
        var e = !1
          , i = null
          , r = t;
        return (...t)=>{
            e || (i = r.apply(self, t),
            e = !0,
            r = null);
            return i
        }
    }
    var I = self.AMP_CONFIG || {}
      , D = ("string" == typeof I.cdnProxyRegex ? new RegExp(I.cdnProxyRegex) : I.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
    function k(t) {
        if (!self.document || !self.document.head || self.location && D.test(self.location.origin))
            return null;
        var e = self.document.head.querySelector(`meta[name="${t}"]`);
        return e && e.getAttribute("content") || null
    }
    var L = {
        thirdParty: I.thirdPartyUrl || "https://3p.ampproject.net",
        thirdPartyFrameHost: I.thirdPartyFrameHost || "ampproject.net",
        thirdPartyFrameRegex: ("string" == typeof I.thirdPartyFrameRegex ? new RegExp(I.thirdPartyFrameRegex) : I.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
        cdn: I.cdnUrl || k("runtime-host") || "https://cdn.ampproject.org",
        cdnProxyRegex: D,
        localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
        errorReporting: I.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
        betaErrorReporting: I.betaErrorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
        localDev: I.localDev || !1,
        trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
        geoApi: I.geoApiUrl || k("amp-geo-api")
    }
      , N = {
        urls: L
    };
    var j = ()=>{}
    ;
    function F(t) {
        return 0 <= t.indexOf("​​​")
    }
    var V = void 0;
    function B(t) {
        V = t
    }
    var U = (t,e)=>e.reduce(((t,e)=>`${t}&s[]=${encodeURIComponent(String(X(e)))}`), `https://log.amp.dev/?v=012010270040000&id=${encodeURIComponent(t)}`);
    function H(t) {
        return void 0 !== V ? V : t.ff
    }
    function $(t, e, i, r) {
        if (0 != H(t)) {
            var n = t.win.console.log;
            "ERROR" == i ? n = t.win.console.error || n : "INFO" == i ? n = t.win.console.info || n : "WARN" == i && (n = t.win.console.warn || n);
            i = O(r[0]) ? z(t, r[0]) : r;
            e = `[${e}]`;
            "string" === typeof i[0] ? i[0] = e + " " + i[0] : i.unshift(e);
            n.apply(t.win.console, i)
        }
    }
    function G(t, e) {
        e = K(e);
        t.Ub ? e.message ? -1 == e.message.indexOf(t.Ub) && (e.message += t.Ub) : e.message = t.Ub : F(e.message) && (e.message = e.message.replace("​​​", ""))
    }
    function z(t, e) {
        var i = e.shift();
        return t.Eb && i in t.Eb ? [t.Eb[i]].concat(e) : [`More info at ${U(i, e)}`]
    }
    function W(t, e, i, r, n) {
        O(n) ? t.assert(i, n.concat(e)) : t.assert(i, `${n || r}: %s`, e)
    }
    var q = class {
        constructor(t, e, i="") {
            this.win = t;
            this.ef = e;
            this.ff = this.win.console && this.win.console.log && "0" != S().log ? this.ef(parseInt(S().log, 10), !1) : 0;
            this.Ub = i;
            this.Eb = null;
            this.Lf = T((()=>{
                t.fetch(`${L.cdn}/rtv/012010270040000/log-messages.simple.json`).then((t=>t.json()), j).then((t=>{
                    t && (this.Eb = t)
                }
                ))
            }
            ))
        }
        isEnabled() {
            return 0 != H(this)
        }
        fine(t, e) {
            4 <= H(this) && $(this, t, "FINE", Array.prototype.slice.call(arguments, 1))
        }
        info(t, e) {
            3 <= H(this) && $(this, t, "INFO", Array.prototype.slice.call(arguments, 1))
        }
        warn(t, e) {
            2 <= H(this) && $(this, t, "WARN", Array.prototype.slice.call(arguments, 1))
        }
        ma(t, e) {
            if (1 <= H(this))
                $(this, t, "ERROR", Array.prototype.slice.call(arguments, 1));
            else {
                var i = Y.apply(null, Array.prototype.slice.call(arguments, 1));
                G(this, i);
                return i
            }
        }
        error(t, e) {
            var i = this.ma.apply(this, arguments);
            i && (i.name = t || i.name,
            self.__AMP_REPORT_ERROR(i))
        }
        expectedError(t, e) {
            var i = this.ma.apply(this, arguments);
            i && (i.expected = !0,
            self.__AMP_REPORT_ERROR(i))
        }
        createError(t) {
            var e = Y.apply(null, arguments);
            G(this, e);
            return e
        }
        createExpectedError(t) {
            var e = Y.apply(null, arguments);
            G(this, e);
            e.expected = !0;
            return e
        }
        assert(t, e, i) {
            var r;
            if (O(e))
                return this.assert.apply(this, [t].concat(z(this, e)));
            if (!t) {
                var n = (e || "Assertion failed").split("%s");
                var s = n.shift();
                var a = s;
                var o = [];
                var h = 2;
                for ("" != s && o.push(s); 0 < n.length; ) {
                    var l = n.shift()
                      , u = arguments[h++];
                    u && u.tagName && (r = u);
                    o.push(u);
                    s = l.trim();
                    "" != s && o.push(s);
                    a += X(u) + l
                }
                h = Error(a);
                h.fromAssert = !0;
                h.associatedElement = r;
                h.messageArray = o;
                G(this, h);
                self.__AMP_REPORT_ERROR(h);
                throw h
            }
            return t
        }
        assertElement(t, e) {
            W(this, t, t && 1 == t.nodeType, "Element expected", e);
            return t
        }
        assertString(t, e) {
            W(this, t, "string" == typeof t, "String expected", e);
            return t
        }
        assertNumber(t, e) {
            W(this, t, "number" == typeof t, "Number expected", e);
            return t
        }
        assertArray(t, e) {
            W(this, t, O(t), "Array expected", e);
            return t
        }
        assertBoolean(t, e) {
            W(this, t, !!t === t, "Boolean expected", e);
            return t
        }
        assertEnumValue(t, e, i) {
            t: {
                for (var r in t)
                    if (t[r] === e) {
                        t = !0;
                        break t
                    }
                t = !1
            }
            if (t)
                return e;
            this.assert(!1, 'Unknown %s value: "%s"', i || "enum", e)
        }
    }
    ;
    function X(t) {
        return t && 1 == t.nodeType ? t.tagName.toLowerCase() + (t.id ? "#" + t.id : "") : t
    }
    function K(t) {
        var e = Object.getOwnPropertyDescriptor(t, "message");
        if (e && e.writable)
            return t;
        var i = t.stack
          , r = Error(t.message);
        for (var n in t)
            r[n] = t[n];
        r.stack = i;
        return r
    }
    function Y(t) {
        var e = null
          , i = "";
        for (var r = 0; r < arguments.length; r++) {
            var n = arguments[r];
            n instanceof Error && !e ? e = K(n) : (i && (i += " "),
            i += n)
        }
        e ? i && (e.message = i + ": " + e.message) : e = Error(i);
        return e
    }
    function J(t) {
        var e = Y.apply(null, arguments);
        setTimeout((()=>{
            self.__AMP_REPORT_ERROR(e);
            throw e
        }
        ))
    }
    self.__AMP_LOG = self.__AMP_LOG || {
        user: null,
        dev: null,
        userForEmbed: null
    };
    var Q = self.__AMP_LOG;
    var Z = null;
    function tt(t) {
        Q.user || (Q.user = et("​​​"));
        var e = Q.user.win;
        return t && t.ownerDocument.defaultView != e ? Q.userForEmbed ? Q.userForEmbed : Q.userForEmbed = et("​​​​") : Q.user
    }
    function et(t) {
        if (!Z)
            throw Error("failed to call initLogConstructor");
        return new Z(self,((t,e)=>e || 1 <= t ? 4 : 2),t)
    }
    function it() {
        if (Q.dev)
            return Q.dev;
        if (!Z)
            throw Error("failed to call initLogConstructor");
        return Q.dev = new Z(self,(t=>3 <= t ? 4 : 2 <= t ? 3 : 0))
    }
    function rt(t, e, i, r, n, s) {
        return tt().assert(t, e, i, r, n, s, void 0, void 0, void 0, void 0, void 0)
    }
    var nt = Object.prototype.hasOwnProperty;
    function st(t) {
        var e = Object.create(null);
        t && Object.assign(e, t);
        return e
    }
    function at(t) {
        return t || {}
    }
    var ot = class {
        constructor() {
            var t, e;
            this.promise = new Promise(((i,r)=>{
                t = i;
                e = r
            }
            ));
            this.resolve = t;
            this.reject = e
        }
    }
    ;
    function ht(t) {
        return new Promise((e=>{
            e(t())
        }
        ))
    }
    /*
  https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
    var lt;
    function ut(t) {
        try {
            var e = t.ownerDocument
              , i = e.createElement("div")
              , r = e.createElement("div");
            i.appendChild(r);
            return i.querySelector(":scope div") === r
        } catch (t) {
            return !1
        }
    }
    function ct(t) {
        return t.trimStart ? t.trimStart() : (t + "_").trim().slice(0, -1)
    }
    function dt(t, e, i) {
        if (e(t))
            i();
        else {
            var r = t.ownerDocument.defaultView;
            if (r.MutationObserver) {
                var n = new r.MutationObserver((()=>{
                    e(t) && (n.disconnect(),
                    i())
                }
                ));
                n.observe(t, {
                    childList: !0
                })
            } else
                var s = r.setInterval((()=>{
                    e(t) && (r.clearInterval(s),
                    i())
                }
                ), 5)
        }
    }
    function mt(t, e) {
        return new Promise((i=>{
            dt(t, e, i)
        }
        ))
    }
    function pt(t, e) {
        dt(t.documentElement, (()=>!!t.body), e)
    }
    function ft(t) {
        return new Promise((e=>pt(t, e)))
    }
    function gt(t, e, i=null) {
        i ? t.insertBefore(e, i.nextSibling) : t.insertBefore(e, t.firstChild)
    }
    function vt(t) {
        var e = at({
            src: "about:blank",
            style: "display:none"
        });
        t = t.createElement("iframe");
        for (var i in e)
            t.setAttribute(i, e[i]);
        return t
    }
    function bt(t) {
        var e = t.isConnected;
        if (void 0 !== e)
            return e;
        do {
            if (t = yt(t),
            t.host)
                t = t.host;
            else
                break
        } while (1);return t.nodeType === Node.DOCUMENT_NODE
    }
    function yt(t) {
        if (Node.prototype.getRootNode)
            return t.getRootNode() || t;
        for (; t.parentNode && (!t || "I-AMPHTML-SHADOW-ROOT" != t.tagName && (11 != t.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(t))); t = t.parentNode)
            ;
        return t
    }
    function wt(t, e) {
        for (; t && void 0 !== t; t = t.parentElement)
            if (e(t))
                return t;
        return null
    }
    function At(t, e) {
        return t.closest ? t.closest(e) : wt(t, (t=>xt(t, e)))
    }
    function Et(t, e) {
        var i = [];
        for (t = t.firstElementChild; t; t = t.nextElementSibling)
            e(t) && i.push(t);
        return i
    }
    function Pt(t, e) {
        for (t = t.lastElementChild; t; t = t.previousElementSibling)
            if (e(t))
                return t;
        return null
    }
    function _t(t, e) {
        var i = [];
        for (t = t.firstChild; t; t = t.nextSibling)
            e(t) && i.push(t);
        return i
    }
    function St(t, e) {
        /^[\w-]+$/.test(e);
        return Ct(t, `> [${e}]`)
    }
    function xt(t, e) {
        var i = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector;
        return i ? i.call(t, e) : !1
    }
    function Ot(t, e) {
        t.classList.add("i-amphtml-scoped");
        var i = e.replace(/^|,/g, "$&.i-amphtml-scoped ")
          , r = t.querySelectorAll(i);
        t.classList.remove("i-amphtml-scoped");
        return r
    }
    function Ct(t, e) {
        if (void 0 !== lt ? lt : lt = ut(t))
            return t.querySelector(e.replace(/^|,/g, "$&:scope "));
        var i = Ot(t, e);
        return void 0 === i[0] ? null : i[0]
    }
    function Mt(t, e) {
        var i = t.length;
        for (var r = 0; r < i; r++)
            e(t[r], r)
    }
    function Rt(t, e, i, r) {
        var n;
        try {
            n = t.open(e, i, r)
        } catch (t) {
            it().error("DOM", "Failed to open url on target: ", i, t)
        }
        if (!(i = n || "_top" == i)) {
            i = r || "";
            var s;
            "number" !== typeof s && (s = 0);
            i = s + 8 > i.length ? !1 : -1 !== i.indexOf("noopener", s)
        }
        i || (n = t.open(e, "_top"));
        return n
    }
    function Tt(t) {
        try {
            t.focus()
        } catch (t) {}
    }
    function It(t) {
        return t.parent && t.parent != t
    }
    function Dt(t) {
        var e = new Uint8Array(t.length);
        for (var i = 0; i < t.length; i++) {
            var r = t.charCodeAt(i);
            e[i] = r
        }
        return e
    }
    function kt(t) {
        var e = Array(t.length);
        for (var i = 0; i < t.length; i++)
            e[i] = String.fromCharCode(t[i]);
        return e.join("")
    }
    function Lt(t, e, i, r) {
        return {
            left: t,
            top: e,
            width: i,
            height: r,
            bottom: e + r,
            right: t + i,
            x: t,
            y: e
        }
    }
    function Nt(t) {
        return Lt(Number(t.left), Number(t.top), Number(t.width), Number(t.height))
    }
    function jt(t) {
        var e = -1 / 0
          , i = 1 / 0
          , r = -1 / 0
          , n = 1 / 0;
        for (var s = 0; s < arguments.length; s++) {
            var a = arguments[s];
            if (a && (e = Math.max(e, a.left),
            i = Math.min(i, a.left + a.width),
            r = Math.max(r, a.top),
            n = Math.min(n, a.top + a.height),
            i < e || n < r))
                return null
        }
        return 1 / 0 == i ? null : Lt(e, r, i - e, n - r)
    }
    function Ft(t, e, i) {
        return 0 == e && 0 == i || 0 == t.width && 0 == t.height ? t : Lt(t.left + e, t.top + i, t.width, t.height)
    }
    function Vt(t, e, i, r) {
        t = Wt(t);
        Yt(t, t, e, i);
        r && Kt(t, e)
    }
    function Bt(t, e, i, r) {
        var n = qt(t)
          , s = Xt(n);
        Yt(s, n, e, i);
        r && Kt(s, e)
    }
    function Ut(t, e) {
        t = Wt(t);
        return Kt(t, e)
    }
    function Ht(t, e) {
        t = Wt(t);
        return te(t, e) ? Kt(t, e) : null
    }
    function $t(t, e) {
        var i = qt(t);
        i = Xt(i);
        return Kt(i, e)
    }
    function Gt(t, e) {
        t = qt(t);
        t = Xt(t);
        return te(t, e) ? Kt(t, e) : null
    }
    function zt(t, e) {
        return Qt(Xt(t), e)
    }
    function Wt(t) {
        return t.__AMP_TOP || (t.__AMP_TOP = t)
    }
    function qt(t) {
        return t.nodeType ? Ut((t.ownerDocument || t).defaultView, "ampdoc").getAmpDoc(t) : t
    }
    function Xt(t) {
        t = qt(t);
        return t.isSingleDoc() ? t.win : t
    }
    function Kt(t, e) {
        te(t, e);
        t = Zt(t)[e];
        t.obj || (t.obj = new t.ctor(t.context),
        t.ctor = null,
        t.context = null,
        t.resolve && t.resolve(t.obj));
        return t.obj
    }
    function Yt(t, e, i, r) {
        var n = Zt(t);
        var s = n[i];
        s || (s = n[i] = {
            obj: null,
            promise: null,
            resolve: null,
            reject: null,
            context: null,
            ctor: null
        });
        s.ctor || s.obj || (s.ctor = r,
        s.context = e,
        s.resolve && Kt(t, i))
    }
    function Jt(t, e) {
        var i = Qt(t, e);
        if (i)
            return i;
        t = Zt(t);
        t[e] = ee();
        return t[e].promise
    }
    function Qt(t, e) {
        var i = Zt(t)[e];
        if (i) {
            if (i.promise)
                return i.promise;
            Kt(t, e);
            return i.promise = Promise.resolve(i.obj)
        }
        return null
    }
    function Zt(t) {
        var e = t.__AMP_SERVICES;
        e || (e = t.__AMP_SERVICES = {});
        return e
    }
    function te(t, e) {
        t = t.__AMP_SERVICES && t.__AMP_SERVICES[e];
        return !(!t || !t.ctor && !t.obj)
    }
    function ee() {
        var t = new ot;
        var e = t.promise
          , i = t.resolve;
        t = t.reject;
        e.catch((()=>{}
        ));
        return {
            obj: null,
            promise: e,
            resolve: i,
            reject: t,
            context: null,
            ctor: null
        }
    }
    function ie(t, e, i) {
        return re(t, e, i, void 0).then((t=>rt(t, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", e, i, i, i)))
    }
    function re(t, e, i, n) {
        var s = zt(t, e);
        if (s)
            return s;
        var a = qt(t);
        return a.waitForBodyOpen().then((()=>{
            var t = a.win;
            return se(a.win.document.head).includes(i) ? Ut(t, "extensions").waitForExtension(t, i) : r()
        }
        )).then((()=>{
            if (n)
                var r = zt(t, e);
            else
                r = a.win,
                r = r.__AMP_EXTENDED_ELEMENTS && r.__AMP_EXTENDED_ELEMENTS[i] ? Jt(Xt(t), e) : null;
            return r
        }
        ))
    }
    function ne(t) {
        var e = Gt(t, "bind");
        return e ? Promise.resolve(e) : re(t, "bind", "amp-bind")
    }
    function se(t) {
        if (!t)
            return [];
        var e = {}
          , i = t.querySelectorAll("script[custom-element],script[custom-template]");
        for (var r = 0; r < i.length; r++) {
            var n = i[r];
            n = n.getAttribute("custom-element") || n.getAttribute("custom-template");
            e[n] = !0
        }
        return Object.keys(e)
    }
    function ae(t) {
        return t.waitForBodyOpen().then((()=>{
            var e = t.getHeadNode();
            return se(e).includes("amp-form")
        }
        ))
    }
    function oe(t) {
        return Ut(t, "ampdoc")
    }
    function he(t) {
        return Ut(t, "extensions")
    }
    function le(t) {
        return $t(t, "documentInfo").get()
    }
    function ue(t) {
        return $t(t, "mutator")
    }
    function ce(t) {
        return Ut(t, "platform")
    }
    function de(t) {
        return $t(t, "resources")
    }
    function me(t) {
        return Ut(t, "timer")
    }
    function pe(t) {
        return $t(t, "viewer")
    }
    function fe(t) {
        return Ut(t, "vsync")
    }
    function ge(t) {
        return $t(t, "viewport")
    }
    function ve(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            )));
            i.push.apply(i, r)
        }
        return i
    }
    function be(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ve(Object(i), !0).forEach((function(e) {
                var r = i[e];
                e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ve(Object(i)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }
            ))
        }
        return t
    }
    var ye = class {
        constructor(t, e) {
            this.Fe = t;
            this.Sa = be({
                root: null,
                rootMargin: "0px 0px 0px 0px"
            }, e);
            if ((t = this.Sa.root) && 1 !== t.nodeType)
                throw Error("root must be an Element");
            this.la = [];
            this.I = null;
            ye._upgraders.push(this.Kf.bind(this))
        }
        get root() {
            return this.I ? this.I.root : this.Sa.root || null
        }
        get rootMargin() {
            return this.I ? this.I.rootMargin : this.Sa.rootMargin
        }
        get thresholds() {
            return this.I ? this.I.thresholds : [].concat(this.Sa.threshold || 0)
        }
        disconnect() {
            this.I ? this.I.disconnect() : this.la.length = 0
        }
        takeRecords() {
            return this.I ? this.I.takeRecords() : []
        }
        observe(t) {
            this.I ? this.I.observe(t) : -1 == this.la.indexOf(t) && this.la.push(t)
        }
        unobserve(t) {
            this.I ? this.I.unobserve(t) : (t = this.la.indexOf(t),
            -1 != t && this.la.splice(t, 1))
        }
        Kf(t) {
            var e = new t(this.Fe,this.Sa);
            this.I = e;
            this.la.forEach((t=>e.observe(t)));
            this.la = null
        }
    }
    ;
    ye._upgraders = [];
    function we() {
        var t = Ie;
        !t.IntersectionObserverEntry || "isIntersecting"in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
            enumerable: !0,
            configurable: !0,
            get() {
                return 0 < this.intersectionRatio
            }
        })
    }
    (function() {
        function t() {
            for (var t = 0; t < r; t++) {
                var e = i[t];
                i[t] = null;
                e()
            }
            r = 0
        }
        if ("undefined" !== typeof window && window.postMessage) {
            window.addEventListener("message", t);
            var e = function() {
                window.postMessage("macro-task", "*")
            }
        } else
            e = function() {
                setTimeout(t, 0)
            }
            ;
        var i = Array(16)
          , r = 0;
        return function(t) {
            0 === r && e();
            i[r++] = t
        }
    }
    )();
    if (self.document) {
        var Ae = self
          , Ee = class {
        }
        ;
        var Pe = Ae.document;
        var _e;
        var Se = Ae.customElements;
        _e = !!(Se && Se.define && Se.get && Se.whenDefined);
        var xe;
        if (!(xe = !Pe)) {
            var Oe;
            if (Oe = _e)
                Oe = -1 === Ae.HTMLElement.toString().indexOf("[native code]");
            xe = Oe
        }
        if (!xe) {
            var Ce = !0
              , Me = !1;
            if (Ee && _e)
                try {
                    var Re = Ae.Reflect
                      , Te = Object.create(Ee.prototype);
                    Function.call.call(Ee, Te);
                    Me = !(!Re || !Re.construct)
                } catch (t) {
                    Ce = !1
                }
            Me ? b() : Ce && v()
        }
        var Ie = self;
        Ie.IntersectionObserver || (Ie.IntersectionObserver = ye);
        we();
        var De = self;
        De.AbortController || (Object.defineProperty(De, "AbortController", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: t
        }),
        Object.defineProperty(De, "AbortSignal", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: e
        }))
    }
    var ke = class {
        constructor(t) {
            this.Ge = t;
            this.dc = this.Vc = 0;
            this.ra = Object.create(null)
        }
        has(t) {
            return !!this.ra[t]
        }
        get(t) {
            var e = this.ra[t];
            if (e)
                return e.access = ++this.dc,
                e.payload
        }
        put(t, e) {
            this.has(t) || this.Vc++;
            this.ra[t] = {
                payload: e,
                access: this.dc
            };
            if (!(this.Vc <= this.Ge)) {
                t = this.ra;
                var i = this.dc + 1;
                for (var r in t) {
                    var {access: n} = t[r];
                    if (n < i) {
                        i = n;
                        var s = r
                    }
                }
                void 0 !== s && (delete t[s],
                this.Vc--)
            }
        }
    }
    ;
    var Le = at({
        c: !0,
        v: !0,
        a: !0,
        ad: !0
    });
    var Ne, je;
    var Fe = /[?&]amp_js[^&]*/
      , Ve = /[?&]amp_gsa[^&]*/
      , Be = /[?&]amp_r[^&]*/
      , Ue = /[?&]amp_kit[^&]*/
      , He = /[?&]usqp[^&]*/
      , $e = ["javascript:", "data:", "vbscript:"];
    function Ge(t, e) {
        Ne || (Ne = self.document.createElement("a"),
        je = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new ke(100)));
        return ze(Ne, t, e ? null : je)
    }
    function ze(t, e, i) {
        if (i && i.has(e))
            return i.get(e);
        t.href = e;
        t.protocol || (t.href = t.href);
        var r = {
            href: t.href,
            protocol: t.protocol,
            host: t.host,
            hostname: t.hostname,
            port: "0" == t.port ? "" : t.port,
            pathname: t.pathname,
            search: t.search,
            hash: t.hash,
            origin: null
        };
        "/" !== r.pathname[0] && (r.pathname = "/" + r.pathname);
        if ("http:" == r.protocol && 80 == r.port || "https:" == r.protocol && 443 == r.port)
            r.port = "",
            r.host = r.hostname;
        r.origin = t.origin && "null" != t.origin ? t.origin : "data:" != r.protocol && r.host ? r.protocol + "//" + r.host : r.href;
        i && i.put(e, r);
        return r
    }
    function We(t, e, i) {
        if (!e)
            return t;
        var r = t.split("#", 2)
          , n = r[0].split("?", 2);
        var s = n[0] + (n[1] ? i ? `?${e}&${n[1]}` : `?${n[1]}&${e}` : `?${e}`);
        return s += r[1] ? `#${r[1]}` : ""
    }
    function qe(t, e) {
        return We(t, Xe(e))
    }
    function Xe(t) {
        var e = [];
        for (var i in t) {
            var r = t[i];
            if (null != r)
                if (O(r))
                    for (var n = 0; n < r.length; n++) {
                        var s = r[n];
                        e.push(`${encodeURIComponent(i)}=${encodeURIComponent(s)}`)
                    }
                else
                    e.push(`${encodeURIComponent(i)}=${encodeURIComponent(r)}`)
        }
        return e.join("&")
    }
    function Ke(t) {
        "string" == typeof t && (t = Ge(t));
        var e;
        (e = "https:" == t.protocol || "localhost" == t.hostname || "127.0.0.1" == t.hostname) || (t = t.hostname,
        e = t.length - 10,
        e = 0 <= e && t.indexOf(".localhost", e) == e);
        return e
    }
    function Ye(t, e, i="source") {
        rt(null != t, "%s %s must be available", e, i);
        rt(Ke(t) || /^(\/\/)/.test(t), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', e, i, t);
        return t
    }
    function Je(t) {
        var e = t.indexOf("#");
        return -1 == e ? t : t.substring(0, e)
    }
    function Qe(t) {
        "string" == typeof t && (t = Ge(t));
        return L.cdnProxyRegex.test(t.origin)
    }
    function Ze(t) {
        if (!t)
            return !0;
        "string" == typeof t && (t = Ge(t));
        return !$e.includes(t.protocol)
    }
    function ti(t) {
        var e = Ge(t);
        t = ei(e.search);
        return e.origin + e.pathname + t + e.hash
    }
    function ei(t) {
        if (!t || "?" == t)
            return "";
        var e = t.replace(Fe, "").replace(Ve, "").replace(Be, "").replace(Ue, "").replace(He, "").replace(/^[?&]/, "");
        return e ? "?" + e : ""
    }
    function ii(t) {
        "string" == typeof t && (t = Ge(t));
        if (!Qe(t))
            return t.href;
        var e = t.pathname.split("/");
        rt(Le[e[1]], "Unknown path prefix in url %s", t.href);
        var i = e[2]
          , r = "s" == i ? "https://" + decodeURIComponent(e[3]) : "http://" + decodeURIComponent(i);
        rt(0 < r.indexOf("."), "Expected a . in origin %s", r);
        e.splice(1, "s" == i ? 3 : 2);
        return r + e.join("/") + ei(t.search) + (t.hash || "")
    }
    function ri(t, e) {
        "string" == typeof e && (e = Ge(e));
        if ("function" == typeof URL)
            var i = new URL(t,e.href).toString();
        else {
            i = t;
            var r = e;
            "string" == typeof r && (r = Ge(r));
            i = i.replace(/\\/g, "/");
            var n = Ge(i);
            i = i.toLowerCase().startsWith(n.protocol) ? n.href : i.startsWith("//") ? r.protocol + i : i.startsWith("/") ? r.origin + i : r.origin + r.pathname.replace(/\/[^/]*$/, "/") + i
        }
        return i
    }
    function ni(t, e) {
        si(e);
        var i = Ge(ii(t.location.href)).origin;
        t = `${encodeURIComponent("__amp_source_origin")}=${encodeURIComponent(i)}`;
        return e = We(e, t, void 0)
    }
    function si(t) {
        var e = Ge(t)
          , i = P(e.search);
        rt(!("__amp_source_origin"in i), "Source origin is not allowed in %s", t)
    }
    function ai(t, e) {
        return !!hi(t)[e]
    }
    function oi(t, e, i, r) {
        var n = ai(t, e)
          , s = !(void 0 !== i ? !i : n);
        if (s != n && (hi(t)[e] = s,
        !r)) {
            var a = li(t);
            a[e] = s;
            e = a;
            var o = [];
            for (var h in e)
                o.push((!1 === e[h] ? "-" : "") + h);
            try {
                "localStorage"in t && t.localStorage.setItem("amp-experiment-toggles", o.join(","))
            } catch (t) {
                tt().error("EXPERIMENTS", "Failed to save experiments to localStorage.")
            }
        }
        return s
    }
    function hi(t) {
        if (t.__AMP__EXPERIMENT_TOGGLES)
            return t.__AMP__EXPERIMENT_TOGGLES;
        t.__AMP__EXPERIMENT_TOGGLES = Object.create(null);
        var e = t.__AMP__EXPERIMENT_TOGGLES;
        if (t.AMP_CONFIG)
            for (var i in t.AMP_CONFIG) {
                var r = t.AMP_CONFIG[i];
                "number" === typeof r && 0 <= r && 1 >= r && (e[i] = Math.random() < r)
            }
        if (t.AMP_CONFIG && Array.isArray(t.AMP_CONFIG["allow-doc-opt-in"]) && 0 < t.AMP_CONFIG["allow-doc-opt-in"].length) {
            var n = t.AMP_CONFIG["allow-doc-opt-in"]
              , s = t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
            if (s) {
                var a = s.getAttribute("content").split(",");
                for (i = 0; i < a.length; i++)
                    -1 != n.indexOf(a[i]) && (e[a[i]] = !0)
            }
        }
        Object.assign(e, li(t));
        if (t.AMP_CONFIG && Array.isArray(t.AMP_CONFIG["allow-url-opt-in"]) && 0 < t.AMP_CONFIG["allow-url-opt-in"].length) {
            i = t.AMP_CONFIG["allow-url-opt-in"];
            t = P(t.location.originalHash || t.location.hash);
            for (var o = 0; o < i.length; o++) {
                var h = t[`e-${i[o]}`];
                "1" == h && (e[i[o]] = !0);
                "0" == h && (e[i[o]] = !1)
            }
        }
        return e
    }
    function li(t) {
        var e = "";
        try {
            "localStorage"in t && (e = t.localStorage.getItem("amp-experiment-toggles"))
        } catch (t) {}
        var i = e ? e.split(/\s*,\s*/g) : [];
        t = Object.create(null);
        for (var r = 0; r < i.length; r++)
            0 != i[r].length && ("-" == i[r][0] ? t[i[r].substr(1)] = !1 : t[i[r]] = !0);
        return t
    }
    var ui = null;
    var ci = ["gclid", "gclsrc"];
    function di() {
        return rt(ui, "E#19457 trackImpressionPromise")
    }
    function mi(t) {
        return t.whenReady().then((()=>!!t.getBody().querySelector("amp-analytics[type=googleanalytics]")))
    }
    var pi = class {
        constructor() {
            this.H = []
        }
        peek() {
            var t = this.H.length;
            return t ? this.H[t - 1].item : null
        }
        enqueue(t, e) {
            if (isNaN(e))
                throw Error("Priority must not be NaN.");
            var i = -1;
            var r = 0
              , n = this.H.length;
            for (; r <= n; ) {
                i = Math.floor((r + n) / 2);
                if (i === this.H.length)
                    break;
                if (this.H[i].priority < e)
                    r = i + 1;
                else if (0 < i && this.H[i - 1].priority >= e)
                    n = i - 1;
                else
                    break
            }
            this.H.splice(i, 0, {
                item: t,
                priority: e
            })
        }
        forEach(t) {
            var e = this.H.length;
            for (; e--; )
                t(this.H[e].item)
        }
        dequeue() {
            return this.H.length ? this.H.pop().item : null
        }
        get length() {
            return this.H.length
        }
    }
    ;
    var fi = ["_top", "_blank"];
    function gi(t, e) {
        t.Zd.forEach((t=>{
            e = t(e)
        }
        ));
        return e
    }
    function vi(t) {
        return (t = t.V.querySelector('meta[name="amp-to-amp-navigation"]')) && t.hasAttribute("content") ? t.getAttribute("content").split(",").map((t=>t.trim())) : []
    }
    function bi(t, e) {
        var i = null;
        if (t.gd && !t.Ac) {
            t = Ge(t.ampdoc.win.location.href);
            var r = P(t.search);
            t = [];
            for (var n = 0; n < ci.length; n++) {
                var s = ci[n];
                "undefined" !== typeof r[s] && t.push(s)
            }
            r = e.getAttribute("data-amp-addparams");
            ({href: n} = e);
            r && (n = qe(n, P(r)));
            r = Ge(n);
            r = P(r.search);
            for (n = t.length - 1; 0 <= n; n--)
                "undefined" !== typeof r[t[n]] && t.splice(n, 1);
            r = "";
            for (n = 0; n < t.length; n++)
                s = t[n],
                r += 0 == n ? `${s}=QUERY_PARAM(${s})` : `&${s}=QUERY_PARAM(${s})`;
            i = r
        }
        Gt(e, "url-replace").maybeExpandLink(e, i)
    }
    function yi(t, e) {
        return Gt(t.he, "url").parse(e)
    }
    function wi(t, e, i, r) {
        return i.hasAttribute("rel") && i.getAttribute("rel").split(" ").map((t=>t.trim())).includes("amphtml") ? t.navigateToAmpUrl(r.href, "<a rel=amphtml>") ? (e.preventDefault(),
        !0) : !1 : !1
    }
    function Ai(t, e, i) {
        t.fd.forEach((t=>{
            t(e, i)
        }
        ))
    }
    function Ei(t, e, i, r) {
        if (ce(t.ampdoc.win).isIe()) {
            var n = i.hash.substring(1)
              , s = t.ampdoc.getElementById(n);
            s && (/^(?:a|select|input|button|textarea)$/i.test(s.tagName) || (s.tabIndex = -1),
            Tt(s))
        }
        e.preventDefault();
        if (!t.Ac) {
            e = i.hash.slice(1);
            var a = null;
            if (e) {
                var o = CSS.escape(e);
                a = t.V.getElementById(e) || t.V.querySelector(`a[name="${o}"]`)
            }
            i.hash != r.hash ? t.Ue.replaceStateForTarget(i.hash).then((()=>{
                _i(t, a)
            }
            )) : _i(t, a)
        }
    }
    function Pi(t, e, i) {
        var r = e.href
          , n = `${e.origin}${e.pathname}${e.hash}`;
        t.history.replaceState(null, "", n);
        var s = ()=>{
            var e = t.location.href;
            e == n ? t.history.replaceState(null, "", r) : it().error("navigation", "Unexpected iframe URL change:", e, n)
        }
        ;
        "_blank" === i ? t.setTimeout(s, 0) : t.addEventListener("pageshow", (function e(i) {
            i.persisted && (s(),
            t.removeEventListener("pageshow", e))
        }
        ))
    }
    function _i(t, e) {
        e && (t.$b.scrollIntoView(e),
        me(t.ampdoc.win).delay((()=>t.$b.scrollIntoView(e)), 1))
    }
    var Si = class {
        constructor(t) {
            this.ampdoc = t;
            this.V = t.getRootNode();
            this.$b = ge(this.ampdoc);
            this.B = pe(this.ampdoc);
            this.Ue = $t(this.ampdoc, "history");
            this.ha = ce(this.ampdoc.win);
            this.$e = this.ha.isIos() && this.ha.isSafari();
            this.Ye = It(this.ampdoc.win) && this.B.isOvertakeHistory();
            this.Ac = this.V != this.ampdoc.getRootNode() || !!this.ampdoc.getParent();
            this.Ze = "inabox" == S(this.ampdoc.win).runtime;
            this.he = this.V.nodeType == Node.DOCUMENT_NODE ? this.V.documentElement : this.V;
            this.Fa = this.Se.bind(this);
            this.V.addEventListener("click", this.Fa);
            this.V.addEventListener("contextmenu", this.Fa);
            this.gd = !1;
            mi(this.ampdoc).then((t=>{
                this.gd = t
            }
            ));
            this.Pd = this.Qd = !1;
            Promise.all([this.B.isTrustedViewer(), this.B.getViewerOrigin()]).then((t=>{
                this.Qd = t[0];
                t = t[1];
                "string" == typeof t && (t = Ge(t));
                this.Pd = L.localhostRegex.test(t.origin)
            }
            ));
            this.cc = null;
            this.fd = new pi;
            this.Zd = new pi
        }
        cleanup() {
            this.Fa && (this.V.removeEventListener("click", this.Fa),
            this.V.removeEventListener("contextmenu", this.Fa))
        }
        openWindow(t, e, i, r) {
            var n = "";
            !this.ha.isIos() && this.ha.isChrome() || r || (n += "noopener");
            var s = Rt(t, e, i, n);
            s && !r && (s.opener = null)
        }
        navigateTo(t, e, i, r={}) {
            var {target: n="_top", opener: s=!1} = r;
            e = gi(this, e);
            var a = Gt(this.he, "url");
            if (a.isProtocolValid(e)) {
                rt(fi.includes(n), `Target '${n}' not supported.`);
                var o = a.getSourceUrl(t.location);
                e = a.resolveRelativeUrl(e, o);
                if ("_blank" == n)
                    this.openWindow(t, e, n, s);
                else {
                    if (i && (this.cc || (this.cc = vi(this)),
                    this.cc.includes(i) && this.navigateToAmpUrl(e, i)))
                        return;
                    t.top.location.href = e
                }
            } else
                tt().error("navigation", "Cannot navigate to invalid protocol: " + e)
        }
        navigateToAmpUrl(t, e) {
            return this.B.hasCapability("a2a") ? (this.B.sendMessage("a2aNavigate", at({
                url: t,
                requestedBy: e
            })),
            !0) : !1
        }
        Se(t) {
            if (!t.defaultPrevented) {
                var e = At(t.__AMP_CUSTOM_LINKER_TARGET__ || t.target, "A");
                if (e && e.href)
                    if ("click" == t.type) {
                        bi(this, e);
                        var i, r = yi(this, e.href);
                        if (i = !wi(this, t, e, r)) {
                            if (this.Ye) {
                                i = e.ownerDocument.defaultView;
                                var n = e.href
                                  , s = r.protocol;
                                "ftp:" == s ? (Rt(i, n, "_blank"),
                                t.preventDefault(),
                                i = !0) : (s = /^(https?|mailto):$/.test(s),
                                this.$e && !s ? (Rt(i, n, "_top"),
                                t.preventDefault(),
                                i = !0) : i = !1)
                            } else
                                i = !1;
                            i = !i
                        }
                        if (i)
                            if (i = yi(this, ""),
                            Oi(r) != Oi(i) && (Ai(this, e, t),
                            r = yi(this, e.href)),
                            n = r,
                            r = Oi(n),
                            s = Oi(i),
                            n.hash && r == s)
                                Ei(this, t, n, i);
                            else {
                                n = (e.getAttribute("target") || "").toLowerCase();
                                (this.Ac || this.Ze) && "_top" != n && "_blank" != n && (n = "_blank",
                                e.setAttribute("target", n));
                                s = this.ampdoc.win;
                                var a = ce(s);
                                e = pe(e);
                                i.search && a.isSafari() && 13 <= a.getMajorVersion() && e.isProxyOrigin() && e.isEmbedded() && Pi(s, i, n);
                                this.viewerInterceptsNavigation(r, "intercept_click") && t.preventDefault()
                            }
                    } else
                        "contextmenu" == t.type && (bi(this, e),
                        Ai(this, e, t))
            }
        }
        registerAnchorMutator(t, e) {
            this.fd.enqueue(t, e)
        }
        registerNavigateToMutator(t, e) {
            this.Zd.enqueue(t, e)
        }
        viewerInterceptsNavigation(t, e) {
            var i = this.B.hasCapability("interceptNavigation")
              , r = this.ampdoc.getRootNode().documentElement.hasAttribute("allow-navigation-interception");
            if (!i || !r || !this.Qd && !this.Pd)
                return !1;
            this.B.sendMessage("navigateTo", at({
                url: t,
                requestedBy: e
            }));
            return !0
        }
    }
    ;
    function xi(t, e) {
        if ((t = At(e.target, "A")) && t.href) {
            var i = t.getAttribute("data-a4a-orig-href") || t.getAttribute("href");
            if (i) {
                var r = Gt(t, "url-replace").expandUrlSync(i, {
                    CLICK_X: ()=>e.pageX,
                    CLICK_Y: ()=>e.pageY
                }, {
                    CLICK_X: !0,
                    CLICK_Y: !0
                });
                r != i && (t.getAttribute("data-a4a-orig-href") || t.setAttribute("data-a4a-orig-href", i),
                t.setAttribute("href", r))
            }
        }
    }
    function Oi(t) {
        return `${t.origin}${t.pathname}${t.search}`
    }
    var Ci;
    function Mi(t) {
        t = t.ownerDocument || t;
        Ci && Ci.ownerDocument === t || (Ci = t.createElement("div"));
        return Ri
    }
    function Ri(t) {
        var e = Ci;
        e.innerHTML = t[0];
        t = e.firstElementChild;
        e.removeChild(t);
        return e = t
    }
    var Ti;
    var Ii = "Webkit webkit Moz moz ms O o".split(" ");
    function Di(t, e, i) {
        if (e.startsWith("--"))
            return e;
        Ti || (Ti = st());
        var r = Ti[e];
        if (!r || i) {
            r = e;
            if (void 0 === t[e]) {
                var n = e.charAt(0).toUpperCase() + e.slice(1);
                t: {
                    for (var s = 0; s < Ii.length; s++) {
                        var a = Ii[s] + n;
                        if (void 0 !== t[a]) {
                            n = a;
                            break t
                        }
                    }
                    n = ""
                }
                var o = n;
                void 0 !== t[o] && (r = o)
            }
            i || (Ti[e] = r)
        }
        return r
    }
    function ki(t, e) {
        t = t.style;
        for (var i in e)
            t.setProperty(Di(t, i), e[i].toString(), "important")
    }
    function Li(t, e, i, r) {
        if (e = Di(t.style, e, void 0)) {
            var n = r ? i + r : i;
            e.startsWith("--") ? t.style.setProperty(e, n) : t.style[e] = n
        }
    }
    function Ni(t, e) {
        for (var i in e)
            Li(t, i, e[i])
    }
    function ji(t, e) {
        void 0 === e && (e = t.hasAttribute("hidden"));
        e ? t.removeAttribute("hidden") : t.setAttribute("hidden", "")
    }
    function Fi(t, e) {
        for (var i = 0; i < e.length; i++)
            Li(t, e[i], null)
    }
    var Vi = ['<i-amphtml-sizer class=i-amphtml-sizer slot=i-amphtml-svc><img alt="" role=presentation aria-hidden=true class=i-amphtml-intrinsic-sizer></i-amphtml-sizer>']
      , Bi = {
        NODISPLAY: "nodisplay",
        FIXED: "fixed",
        FIXED_HEIGHT: "fixed-height",
        RESPONSIVE: "responsive",
        CONTAINER: "container",
        FILL: "fill",
        FLEX_ITEM: "flex-item",
        FLUID: "fluid",
        INTRINSIC: "intrinsic"
    }
      , Ui = {
        "AMP-PIXEL": {
            width: "0px",
            height: "0px"
        },
        "AMP-ANALYTICS": {
            width: "1px",
            height: "1px"
        },
        "AMP-AUDIO": null,
        "AMP-SOCIAL-SHARE": {
            width: "60px",
            height: "44px"
        }
    }
      , Hi = {
        "AMP-AD": !0,
        "AMP-ANIM": !0,
        "AMP-EMBED": !0,
        "AMP-FACEBOOK": !0,
        "AMP-FACEBOOK-COMMENTS": !0,
        "AMP-FACEBOOK-PAGE": !0,
        "AMP-GOOGLE-DOCUMENT-EMBED": !0,
        "AMP-IFRAME": !0,
        "AMP-IMG": !0,
        "AMP-INSTAGRAM": !0,
        "AMP-LIST": !0,
        "AMP-PINTEREST": !0,
        "AMP-PLAYBUZZ": !0,
        "AMP-TWITTER": !0
    }
      , $i = /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i;
    var Gi = null;
    function zi(t) {
        for (var e in Bi)
            if (Bi[e] == t)
                return Bi[e]
    }
    function Wi(t) {
        return "fixed" == t || "fixed-height" == t || "responsive" == t || "fill" == t || "flex-item" == t || "fluid" == t || "intrinsic" == t
    }
    function qi(t) {
        if ("number" == typeof t)
            return t + "px";
        if (t && /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(t))
            return /^\d+(\.\d+)?$/.test(t) ? t + "px" : t
    }
    function Xi(t) {
        rt(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(t), "Invalid length value: %s", t);
        return t
    }
    function Ki(t) {
        rt(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|%)$/.test(t), "Invalid length or percent value: %s", t);
        return t
    }
    function Yi(t) {
        Xi(t);
        return rt(/[a-z]+/i.exec(t), "Failed to read units from %s", t)[0]
    }
    function Ji(t) {
        t = parseFloat(t);
        return R(t) ? t : void 0
    }
    var Qi;
    function Zi(t, e, i, r) {
        var n, s = t, a = i;
        n = t=>{
            try {
                return a(t)
            } catch (t) {
                throw self.__AMP_REPORT_ERROR(t),
                t
            }
        }
        ;
        var o = tr();
        var h = !1;
        r && (h = r.capture);
        s.addEventListener(e, n, o ? r : h);
        return ()=>{
            s && s.removeEventListener(e, n, o ? r : h);
            n = s = a = null
        }
    }
    function tr() {
        if (void 0 !== Qi)
            return Qi;
        Qi = !1;
        try {
            var t = {
                get capture() {
                    Qi = !0
                }
            };
            self.addEventListener("test-options", null, t);
            self.removeEventListener("test-options", null, t)
        } catch (t) {}
        return Qi
    }
    function er(t, e, i, r) {
        var n = {
            detail: i
        };
        Object.assign(n, r);
        if ("function" == typeof t.CustomEvent)
            return new t.CustomEvent(e,n);
        t = t.document.createEvent("CustomEvent");
        t.initCustomEvent(e, !!n.bubbles, !!n.cancelable, i);
        return t
    }
    function ir(t, e, i) {
        return Zi(t, e, i, void 0)
    }
    function rr(t, e, i, r) {
        var n = i;
        var s = Zi(t, e, (t=>{
            try {
                n(t)
            } finally {
                n = null,
                s()
            }
        }
        ), r);
        return s
    }
    function nr(t, e) {
        var i;
        var r = new Promise((e=>{
            i = rr(t, "click", e, void 0)
        }
        ));
        r.then(i, i);
        e && e(i);
        return r
    }
    function sr(t) {
        return !!(t.complete || "complete" == t.readyState || or(t) && 0 < t.readyState || t.document && "complete" == t.document.readyState)
    }
    function ar(t) {
        var e, i;
        if (sr(t))
            return Promise.resolve(t);
        var r = or(t);
        return r && t.__AMP_MEDIA_LOAD_FAILURE_SRC === t.currentSrc ? Promise.reject(t) : new Promise(((n,s)=>{
            e = r ? rr(t, "loadedmetadata", n, {
                capture: !0
            }) : rr(t, "load", n);
            if (t.tagName) {
                var a = t;
                if (r && !t.hasAttribute("src") && (a = Pt(t, (t=>"SOURCE" === t.tagName)),
                !a))
                    return s(Error("Media has no source."));
                i = rr(a, "error", s)
            }
        }
        )).then((()=>{
            i && i();
            return t
        }
        ), (()=>{
            e && e();
            or(t) && (t.__AMP_MEDIA_LOAD_FAILURE_SRC = t.currentSrc || !0);
            var i = t;
            i && i.src && (i = i.src);
            throw tt().createError("Failed to load:", i)
        }
        ))
    }
    function or(t) {
        return "AUDIO" === t.tagName || "VIDEO" === t.tagName
    }
    function hr(t) {
        t.actionMap_ || (t.actionMap_ = t.win.Object.create(null))
    }
    var lr = class {
        constructor(t) {
            this.element = t;
            this.layout_ = "nodisplay";
            this.inViewport_ = !1;
            this.win = t.ownerDocument.defaultView;
            this.defaultActionAlias_ = this.actionMap_ = null
        }
        signals() {
            return this.element.signals()
        }
        getDefaultActionAlias() {
            return this.defaultActionAlias_
        }
        getLayoutPriority() {
            return 0
        }
        updateLayoutPriority(t) {
            this.element.getResources().updateLayoutPriority(this.element, t)
        }
        getLayout() {
            return this.layout_
        }
        getLayoutBox() {
            return this.element.getLayoutBox()
        }
        getPageLayoutBox() {
            return this.element.getPageLayoutBox()
        }
        getWin() {
            return this.win
        }
        getAmpDoc() {
            return this.element.getAmpDoc()
        }
        getVsync() {
            return fe(this.win)
        }
        getConsentPolicy() {
            var t = null;
            this.element.hasAttribute("data-block-on-consent") && (t = this.element.getAttribute("data-block-on-consent") || "default");
            return t
        }
        isLayoutSupported(t) {
            return "nodisplay" == t
        }
        isAlwaysFixed() {
            return !1
        }
        isInViewport() {
            return this.inViewport_
        }
        upgradeCallback() {
            return null
        }
        buildCallback() {}
        preconnectCallback() {}
        detachedCallback() {}
        prerenderAllowed() {
            return !1
        }
        isBuildRenderBlocking() {
            return !1
        }
        createPlaceholderCallback() {
            return null
        }
        createLoaderLogoCallback() {
            return {}
        }
        renderOutsideViewport() {
            return "inabox" == S(this.win).runtime || 3
        }
        idleRenderOutsideViewport() {
            return !1
        }
        isRelayoutNeeded() {
            return !1
        }
        layoutCallback() {
            return r()
        }
        firstLayoutCompleted() {
            this.togglePlaceholder(!1)
        }
        viewportCallback() {}
        pauseCallback() {}
        resumeCallback() {}
        unlayoutCallback() {
            return !1
        }
        unlayoutOnPause() {
            return !1
        }
        reconstructWhenReparented() {
            return !0
        }
        loadPromise(t) {
            return ar(t)
        }
        registerAction(t, e, i=2) {
            hr(this);
            this.actionMap_[t] = {
                handler: e,
                minTrust: i
            }
        }
        registerDefaultAction(t, e="activate", i=2) {
            this.registerAction(e, t, i);
            this.defaultActionAlias_ = e
        }
        executeAction(t) {
            var {method: e} = t;
            "activate" === e && (e = this.defaultActionAlias_ || e);
            hr(this);
            var i = this.actionMap_[e];
            rt(i, `Method not found: ${e} in ${this.element.tagName}`);
            e = i.handler;
            if (t.satisfiesTrust(i.minTrust))
                return e(t)
        }
        propagateAttributes(t, e, i) {
            t = O(t) ? t : [t];
            for (var r = 0; r < t.length; r++) {
                var n = t[r]
                  , s = this.element.getAttribute(n);
                null !== s ? e.setAttribute(n, s) : i && e.removeAttribute(n)
            }
        }
        forwardEvents(t, e) {
            var i = (O(t) ? t : [t]).map((t=>ir(e, t, (e=>{
                this.element.dispatchCustomEvent(t, e.data || {})
            }
            ))));
            return ()=>i.forEach((t=>t()))
        }
        getPlaceholder() {
            return this.element.getPlaceholder()
        }
        togglePlaceholder(t) {
            this.element.togglePlaceholder(t)
        }
        getFallback() {
            return this.element.getFallback()
        }
        toggleFallback(t) {
            this.element.toggleFallback(t)
        }
        toggleLoading(t, e=!1) {
            this.element.toggleLoading(t, e)
        }
        getOverflowElement() {
            return this.element.getOverflowElement()
        }
        renderStarted() {
            this.element.renderStarted()
        }
        getRealChildNodes() {
            return this.element.getRealChildNodes()
        }
        getRealChildren() {
            return this.element.getRealChildren()
        }
        applyFillContent(t, e) {
            t.classList.add("i-amphtml-fill-content");
            e && t.classList.add("i-amphtml-replaced-content")
        }
        getViewport() {
            return ge(this.getAmpDoc())
        }
        getIntersectionElementLayoutBox() {
            return this.getLayoutBox()
        }
        collapse() {
            ue(this.getAmpDoc()).collapseElement(this.element)
        }
        attemptCollapse() {
            return ue(this.getAmpDoc()).attemptCollapse(this.element)
        }
        forceChangeHeight(t) {
            ue(this.getAmpDoc()).forceChangeSize(this.element, t, void 0)
        }
        attemptChangeHeight(t) {
            return ue(this.getAmpDoc()).requestChangeSize(this.element, t, void 0)
        }
        attemptChangeSize(t, e, i) {
            return ue(this.getAmpDoc()).requestChangeSize(this.element, t, e, void 0, i)
        }
        measureElement(t) {
            return ue(this.getAmpDoc()).measureElement(t)
        }
        mutateElement(t, e) {
            return this.measureMutateElement(null, t, e)
        }
        measureMutateElement(t, e, i) {
            return ue(this.getAmpDoc()).measureMutateElement(i || this.element, t, e)
        }
        mutateElementSkipRemeasure(t) {
            return ue(this.getAmpDoc()).mutateElement(this.element, t, !0)
        }
        collapsedCallback() {}
        expand() {
            ue(this.getAmpDoc()).expandElement(this.element)
        }
        expandedCallback() {}
        mutatedAttributesCallback() {}
        onLayoutMeasure() {}
        onMeasureChanged() {}
        user() {
            return tt(this.element)
        }
    }
    ;
    var ur = {
        PRERENDER: "prerender",
        VISIBLE: "visible",
        HIDDEN: "hidden",
        PAUSED: "paused",
        INACTIVE: "inactive"
    };
    /*
  Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
  Use of this source code is governed by a BSD-style
  license that can be found in the LICENSE file or at
  https://developers.google.com/open-source/licenses/bsd */
    var cr = {
        "amp-dynamic-css-classes": "[custom-element=amp-dynamic-css-classes]",
        variant: "amp-experiment",
        "amp-story-render": "amp-story[standalone]"
    };
    function dr(t) {
        var e = mr(t).map((e=>{
            var i = Jt(t, e).then((t=>t && "function" == typeof t.whenReady ? t.whenReady().then((()=>t)) : t));
            return me(t).timeoutPromise(3e3, i, `Render timeout waiting for service ${e} to be ready.`)
        }
        ));
        return Promise.all(e)
    }
    function mr(t) {
        var e = t.document;
        return Object.keys(cr).filter((t=>e.querySelector(cr[t])))
    }
    function pr(t, e, i, r, n) {
        var s = t.getHeadNode()
          , a = fr(s, vr(s, e), r || !1, n || null);
        if (i) {
            var o = t.getRootNode();
            if (Er(o, a))
                i(a);
            else
                var h = setInterval((()=>{
                    Er(o, a) && (clearInterval(h),
                    i(a))
                }
                ), 4)
        }
    }
    function fr(t, e, i, r) {
        var n = t.__AMP_CSS_SM;
        n || (n = t.__AMP_CSS_SM = st());
        var s = !i && r && "amp-custom" != r && "amp-keyframes" != r
          , a = i ? "amp-runtime" : s ? `amp-extension=${r}` : null;
        if (a) {
            var o = gr(t, n, a);
            if (o)
                return o.textContent !== e && (o.textContent = e),
                o
        }
        var h = (t.ownerDocument || t).createElement("style");
        h.textContent = e;
        var l = null;
        i ? h.setAttribute("amp-runtime", "") : s ? (h.setAttribute("amp-extension", r || ""),
        l = gr(t, n, "amp-runtime")) : (r && h.setAttribute(r, ""),
        l = t.lastChild);
        gt(t, h, l);
        a && (n[a] = h);
        return h
    }
    function gr(t, e, i) {
        return e[i] ? e[i] : (t = t.querySelector(`style[${i}]`)) ? e[i] = t : null
    }
    function vr(t, e) {
        return (t = t.__AMP_CSS_TR) ? t(e) : e
    }
    var br = !1;
    function yr() {
        var t = self.document;
        var e = t.defaultView;
        ft(t).then((()=>dr(e))).catch((t=>{
            J(t);
            return []
        }
        )).then((i=>{
            br = !0;
            Ar(t);
            qt(t).signals().signal("render-start");
            0 < i.length && de(t.documentElement).schedulePass(1, !0);
            try {
                var r = Ut(e, "performance");
                r.tick("mbv");
                r.flush()
            } catch (t) {}
        }
        ))
    }
    function wr(t) {
        br || (br = !0,
        Ar(t))
    }
    function Ar(t) {
        Ni(t.body, {
            opacity: 1,
            visibility: "visible",
            animation: "none"
        })
    }
    function Er(t, e) {
        var i = t.styleSheets;
        for (t = 0; t < i.length; t++)
            if (i[t].ownerNode == e)
                return !0;
        return !1
    }
    function Pr(t) {
        var e = t.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i);
        return {
            extensionId: e ? e[2] : void 0,
            extensionVersion: e ? e[3] : void 0
        }
    }
    function _r(t, e) {
        function i(i) {
            s = null;
            n = t.setTimeout(r, 100);
            e.apply(null, i)
        }
        function r() {
            n = 0;
            s && i(s)
        }
        var n = 0
          , s = null;
        return function(...t) {
            n ? s = t : i(t)
        }
    }
    function Sr(t, e) {
        function i() {
            r = 0;
            var a = 300 - (t.Date.now() - n);
            if (0 < a)
                r = t.setTimeout(i, a);
            else {
                var o = s;
                s = null;
                e.apply(null, o)
            }
        }
        var r = 0
          , n = 0
          , s = null;
        return function(...e) {
            n = t.Date.now();
            s = e;
            r || (r = t.setTimeout(i, 300))
        }
    }
    function xr(t) {
        var e = t.documentElement;
        return ["⚡4email", "amp4email"].some((t=>e.hasAttribute(t)))
    }
    function Or() {
        var t = Cr();
        return e=>setTimeout(e, t())
    }
    function Cr() {
        var t = 0;
        return ()=>{
            var e = Math.pow(1.5, t++);
            var i = e * (i || .3) * Math.random();
            .5 < Math.random() && (i *= -1);
            e += i;
            return 1e3 * e
        }
    }
    function Mr(t, e={}) {
        re(t, "amp-analytics-instrumentation", "amp-analytics").then((i=>{
            i && i.triggerEventForTarget(t, "user-error", e, !1)
        }
        ))
    }
    var Rr = self.__AMP_ERRORS || [];
    self.__AMP_ERRORS = Rr;
    function Tr(t) {
        Tr = Or();
        return Tr(t)
    }
    function Ir(t) {
        try {
            return JSON.stringify(t)
        } catch (e) {
            return String(t)
        }
    }
    var Dr;
    function kr(t, e) {
        try {
            if (t)
                if (void 0 !== t.message)
                    t = K(t);
                else {
                    var i = t;
                    t = Error(Ir(i));
                    t.origError = i
                }
            else
                t = Error("Unknown error");
            if (t.reported)
                return t;
            t.reported = !0;
            var r = e || t.associatedElement;
            r && r.classList && r.classList.add("i-amphtml-error");
            if (self.console) {
                var n = console.error || console.log;
                t.messageArray ? n.apply(console, t.messageArray) : r ? n.call(console, t.message, r) : n.call(console, t.message)
            }
            r && r.ea && r.ea("amp:error", t.message);
            Fr.call(self, void 0, void 0, void 0, void 0, t)
        } catch (t) {
            setTimeout((function() {
                throw t
            }
            ))
        }
        return t
    }
    function Lr() {
        return Error("CANCELLED")
    }
    function Nr(t) {
        return t ? "string" == typeof t ? t.startsWith("BLOCK_BY_CONSENT") : "string" == typeof t.message ? t.message.startsWith("BLOCK_BY_CONSENT") : !1 : !1
    }
    function jr() {
        var t = self;
        t.onerror = Fr;
        t.addEventListener("unhandledrejection", (t=>{
            !t.reason || "CANCELLED" !== t.reason.message && "BLOCK_BY_CONSENT" !== t.reason.message && "AbortError" !== t.reason.message ? kr(t.reason || Error("rejected promise " + t)) : t.preventDefault()
        }
        ))
    }
    function Fr(t, e, i, r, n) {
        !this || !this.document || n && n.expected || wr(this.document);
        var s = !1;
        try {
            s = Hr()
        } catch (t) {}
        if (!(s && .01 < Math.random())) {
            var a = Ur(t, e, i, r, n, s);
            a && Tr((()=>{
                try {
                    return Vr(this, a).catch((()=>{}
                    ))
                } catch (t) {}
            }
            ))
        }
    }
    function Vr(t, e) {
        return e.pt && .9 > Math.random() ? r() : Br(t, e).then((t=>{
            if (!t) {
                var i = new XMLHttpRequest;
                i.open("POST", .1 > Math.random() ? L.betaErrorReporting : L.errorReporting, !0);
                i.send(JSON.stringify(e))
            }
        }
        ))
    }
    function Br(t, e) {
        t = oe(t);
        if (!t.isSingleDoc())
            return Promise.resolve(!1);
        var i = t.getSingleDoc();
        if (!i.getRootNode().documentElement.hasAttribute("report-errors-to-viewer"))
            return Promise.resolve(!1);
        var r = pe(i);
        return r.hasCapability("errorReporter") ? r.isTrustedViewer().then((t=>{
            if (!t)
                return !1;
            r.sendMessage("error", at({
                m: e.m,
                a: e.a,
                s: e.s,
                el: e.el,
                ex: e.ex,
                v: e.v,
                pt: e.pt,
                jse: e.jse
            }));
            return !0
        }
        )) : Promise.resolve(!1)
    }
    function Ur(t, e, i, r, n, s) {
        var a = t;
        n && (a = n.message ? n.message : String(n));
        a || (a = "Unknown error");
        t = a;
        var o = !(!n || !n.expected);
        if (!/_reported_/.test(t) && "CANCELLED" != t) {
            var h = !(self && self.window)
              , l = Math.random();
            if (-1 != t.indexOf("Failed to load:") || "Script error." == t || h)
                if (o = !0,
                .001 < l)
                    return;
            var u = F(t);
            if (!(u && .1 < l)) {
                a = Object.create(null);
                a.v = S().rtvVersion;
                a.noAmp = s ? "1" : "0";
                a.m = t.replace("​​​", "");
                a.a = u ? "1" : "0";
                a.ex = o ? "1" : "0";
                a.dw = h ? "1" : "0";
                var c = "1p";
                c = "esm";
                a.esm = "1";
                a.rt = c;
                "inabox" === c && (a.adid = S().a4aId);
                s = self;
                a.ca = s.AMP_CONFIG && s.AMP_CONFIG.canary ? "1" : "0";
                s = self;
                a.bt = s.AMP_CONFIG && s.AMP_CONFIG.type ? s.AMP_CONFIG.type : "unknown";
                self.location.ancestorOrigins && self.location.ancestorOrigins[0] && (a.or = self.location.ancestorOrigins[0]);
                self.viewerState && (a.vs = self.viewerState);
                self.parent && self.parent != self && (a.iem = "1");
                if (self.AMP && self.AMP.viewer) {
                    var d = self.AMP.viewer.getResolvedViewerUrl()
                      , m = self.AMP.viewer.maybeGetMessagingOrigin();
                    d && (a.rvu = d);
                    m && (a.mso = m)
                }
                Dr || (Dr = $r());
                a.jse = Dr;
                var p = [];
                s = self.__AMP__EXPERIMENT_TOGGLES || null;
                for (var f in s)
                    p.push(`${f}=${s[f] ? "1" : "0"}`);
                a.exps = p.join(",");
                n ? (a.el = n.associatedElement ? n.associatedElement.tagName : "u",
                n.args && (a.args = JSON.stringify(n.args)),
                u || n.ignoreStack || !n.stack || (a.s = n.stack),
                n.message && (n.message += " _reported_")) : (a.f = e || "",
                a.l = i || "",
                a.c = r || "");
                a.r = self.document ? self.document.referrer : "";
                a.ae = Rr.join(",");
                a.fr = self.location.originalHash || self.location.hash;
                "production" === a.bt && (a.pt = "1");
                e = t;
                25 <= Rr.length && Rr.splice(0, Rr.length - 25 + 1);
                Rr.push(e);
                return a
            }
        }
    }
    function Hr() {
        var t = self;
        if (!t.document)
            return !1;
        t = t.document.querySelectorAll("script[src]");
        for (var e = 0; e < t.length; e++)
            if (!Qe(t[e].src.toLowerCase()))
                return !0;
        return !1
    }
    function $r() {
        function t() {}
        t.prototype.t = function() {
            throw Error("message")
        }
        ;
        var e = new t;
        try {
            e.t()
        } catch (t) {
            e = t.stack;
            if (e.startsWith("t@"))
                return "Safari";
            if (-1 < e.indexOf(".prototype.t@"))
                return "Firefox";
            var i = e.split("\n").pop();
            if (/\bat .* \(/i.test(i))
                return "IE";
            if (e.startsWith("Error: message"))
                return "Chrome"
        }
        return "unknown"
    }
    var Gr = "__AMP_ACTION_MAP__" + Math.random()
      , zr = {
        form: ["submit", "clear"]
    }
      , Wr = [{
        tagOrTarget: "AMP",
        method: "setState"
    }, {
        tagOrTarget: "*",
        method: "focus"
    }, {
        tagOrTarget: "*",
        method: "hide"
    }, {
        tagOrTarget: "*",
        method: "show"
    }, {
        tagOrTarget: "*",
        method: "toggleClass"
    }, {
        tagOrTarget: "*",
        method: "toggleVisibility"
    }]
      , qr = {
        button: !0,
        checkbox: !0,
        link: !0,
        listbox: !0,
        menuitem: !0,
        menuitemcheckbox: !0,
        menuitemradio: !0,
        option: !0,
        radio: !0,
        scrollbar: !0,
        slider: !0,
        spinbutton: !0,
        "switch": !0,
        tab: !0,
        treeitem: !0
    };
    var Xr = class {
        constructor(t, e, i, r, n, s, a, o="?", h=null, l=Math.random()) {
            this.node = t;
            this.method = e;
            this.args = i;
            this.source = r;
            this.caller = n;
            this.event = s;
            this.trust = a;
            this.actionEventType = o;
            this.tagOrTarget = h || t.tagName;
            this.sequenceId = l
        }
        satisfiesTrust(t) {
            if (!R(this.trust))
                return it().error("Action", `Invalid trust for '${this.method}': ${this.trust}`),
                !1;
            if (this.trust < t) {
                t: switch (this.trust) {
                case 1:
                    var e = "low";
                    break t;
                case 3:
                    e = "high";
                    break t;
                default:
                    e = "default"
                }
                tt().error("Action", `"${this.actionEventType}" event with "${e}" trust is not allowed to invoke "${this.tagOrTarget.toLowerCase()}.${this.method}".`);
                return !1
            }
            return !0
        }
    }
    ;
    function Kr(t) {
        var e = st()
          , i = t.target;
        void 0 !== i.value && (e.value = i.value);
        "INPUT" == i.tagName && (e.valueAsNumber = Number(i.value));
        void 0 !== i.checked && (e.checked = i.checked);
        if (void 0 !== i.min || void 0 !== i.max)
            e.min = i.min,
            e.max = i.max;
        i.files && (e.files = C(i.files).map((t=>({
            name: t.name,
            size: t.size,
            type: t.type
        }))));
        if (0 < Object.keys(e).length)
            try {
                t.detail = e
            } catch (t) {}
    }
    function Yr(t, e, i, r, n, s) {
        var a = Qr(e, i);
        if (!a)
            return !1;
        var o = Math.random();
        var h = null;
        a.actionInfos.forEach((l=>{
            var u = l.target
              , c = l.method
              , d = l.str
              , m = on(l.args, r, s)
              , p = ()=>{
                var s = Zr(t, u);
                if (s)
                    return s = new Xr(s,c,m,e,a.node,r,n,i,s.tagName || u,o),
                    Jr(t, s);
                t.ma(`Target "${u}" not found for action [${d}].`)
            }
            ;
            h = h ? h.then(p) : p()
        }
        ));
        return 1 <= a.actionInfos.length
    }
    function Jr(t, e) {
        var i = e.method
          , r = e.tagOrTarget;
        if (t.S && !en(e, t.S))
            return t.ma(`"${r}.${i}" is not allowlisted ${JSON.stringify(t.S)}.`),
            null;
        var n = t.rc[r];
        if (n)
            return n(e);
        var s = e.node
          , a = t.Gd[i];
        if (a && e.satisfiesTrust(a.minTrust))
            return a.handler(e);
        var o = s.tagName.toLowerCase();
        if ("amp-" === o.substring(0, 4))
            return s.enqueAction ? s.enqueAction(e) : t.ma(`Unrecognized AMP element "${o}".`, s),
            null;
        var h = zr[o];
        if ("amp-" === (s.getAttribute("id") || "").substring(0, 4) || h && -1 < h.indexOf(i))
            return (t = s.__AMP_ACTION_HANDLER__) ? t(e) : (s.__AMP_ACTION_QUEUE__ = s.__AMP_ACTION_QUEUE__ || [],
            s.__AMP_ACTION_QUEUE__.push(e)),
            null;
        t.ma(`Target (${r}) doesn't support "${i}" action.`, e.caller);
        return null
    }
    function Qr(t, e, i) {
        for (; t && (!i || t != i); ) {
            var r = e;
            var n = t;
            var s = r
              , a = n[Gr];
            void 0 === a && (a = null,
            n.hasAttribute("on") ? (s = n.getAttribute("on"),
            a = sn(s, n),
            n[Gr] = a) : n.hasAttribute("execute") && (a = n.getAttribute("execute"),
            a = sn(`${s}:${a}`, n),
            n[Gr] = a));
            var o = r = (n = a) ? n[r] || null : null;
            if (o && !t.disabled && !xt(t, ":disabled"))
                return {
                    node: t,
                    actionInfos: o
                };
            t = t.parentElement
        }
        return null
    }
    function Zr(t, e) {
        return t.rc[e] ? t.L : t.L.getElementById(e)
    }
    var tn = class {
        constructor(t, e) {
            this.ampdoc = t;
            this.L = e || t.getRootNode();
            this.S = (this.Od = this.ampdoc.isSingleDoc() && xr(this.L)) ? Wr : null;
            this.rc = st();
            this.Gd = st();
            this.addEvent("tap");
            this.addEvent("submit");
            this.addEvent("change");
            this.addEvent("input-debounced");
            this.addEvent("input-throttled");
            this.addEvent("valid");
            this.addEvent("invalid")
        }
        addEvent(t) {
            if ("tap" == t)
                this.L.addEventListener("click", (e=>{
                    e.defaultPrevented || this.trigger(e.target, t, e, 3)
                }
                )),
                this.L.addEventListener("keydown", (e=>{
                    var i = e.key;
                    var r = e.target;
                    if ("Enter" == i || " " == i) {
                        var n = r.getAttribute("role");
                        if (i = n)
                            i = n.toLowerCase(),
                            i = nt.call(qr, i);
                        var s = i;
                        !e.defaultPrevented && s && this.trigger(r, t, e, 3) && e.preventDefault()
                    }
                }
                ));
            else if ("submit" == t)
                this.L.addEventListener(t, (e=>{
                    this.trigger(e.target, t, e, 3)
                }
                ));
            else if ("change" == t)
                this.L.addEventListener(t, (e=>{
                    var i = e.target;
                    Kr(e);
                    this.trigger(i, t, e, 3)
                }
                ));
            else if ("input-debounced" == t) {
                var e = Sr(this.ampdoc.win, (e=>{
                    this.trigger(e.target, t, e, 3)
                }
                ));
                this.L.addEventListener("input", (t=>{
                    var i = new rn(t);
                    Kr(i);
                    e(i)
                }
                ))
            } else if ("input-throttled" == t) {
                var i = _r(this.ampdoc.win, (e=>{
                    this.trigger(e.target, t, e, 3)
                }
                ));
                this.L.addEventListener("input", (t=>{
                    t = new rn(t);
                    Kr(t);
                    i(t)
                }
                ))
            } else
                "valid" != t && "invalid" != t || this.L.addEventListener(t, (e=>{
                    this.trigger(e.target, t, e, 3)
                }
                ))
        }
        addGlobalTarget(t, e) {
            this.rc[t] = e
        }
        addGlobalMethodHandler(t, e, i=2) {
            this.Gd[t] = {
                handler: e,
                minTrust: i
            }
        }
        trigger(t, e, i, r, n) {
            return Yr(this, t, e, i, r, n)
        }
        execute(t, e, i, r, n, s, a) {
            t = new Xr(t,e,i,r,n,s,a);
            Jr(this, t)
        }
        installActionHandler(t, e) {
            "amp-" === (t.getAttribute("id") || "").substring(0, 4) || t.tagName.toLowerCase();
            if (t.__AMP_ACTION_HANDLER__)
                it().error("Action", `Action handler already installed for ${t}`);
            else {
                t.__AMP_ACTION_HANDLER__ = e;
                var i = t.__AMP_ACTION_QUEUE__;
                O(i) && me(t.ownerDocument.defaultView).delay((()=>{
                    i.forEach((t=>{
                        try {
                            e(t)
                        } catch (e) {
                            it().error("Action", "Action execution failed:", t, e)
                        }
                    }
                    ));
                    t.__AMP_ACTION_QUEUE__.length = 0
                }
                ), 1)
            }
        }
        hasAction(t, e, i) {
            return !!Qr(t, e, i)
        }
        hasResolvableAction(t, e, i) {
            var r = Qr(t, e, i);
            return r ? r.actionInfos.some((t=>!!Zr(this, t.target))) : !1
        }
        hasResolvableActionForTarget(t, e, i, r) {
            return (t = Qr(t, e, r)) ? t.actionInfos.some((t=>Zr(this, t.target) == i)) : !1
        }
        setAllowlist(t) {
            t.every((t=>t.tagOrTarget && t.method));
            this.S = t
        }
        addToAllowlist(t, e, i) {
            i && i.includes("email") !== this.Od || (this.S || (this.S = []),
            O(e) || (e = [e]),
            e.forEach((e=>{
                this.S.some((i=>i.tagOrTarget == t && i.method == e)) || this.S.push({
                    tagOrTarget: t,
                    method: e
                })
            }
            )))
        }
        ma(t, e) {
            if (e)
                throw t = tt().createError(`[Action] ${t}`),
                kr(t, e),
                t;
            tt().error("Action", t)
        }
        setActions(t, e) {
            t.setAttribute("on", e);
            delete t[Gr]
        }
    }
    ;
    function en(t, e) {
        var {method: i} = t;
        var r = t.node;
        t = t.tagOrTarget;
        "activate" === i && "function" == typeof r.getDefaultActionAlias && (i = r.getDefaultActionAlias());
        var n = i.toLowerCase()
          , s = t.toLowerCase();
        return e.some((t=>t.tagOrTarget.toLowerCase() !== s && "*" !== t.tagOrTarget || t.method.toLowerCase() !== n ? !1 : !0))
    }
    var rn = class {
        constructor(t) {
            this.detail = null;
            var e = this || st();
            for (var i in t)
                e[i] = "function" === typeof t[i] ? nn : t[i]
        }
    }
    ;
    function nn() {}
    function sn(t, e) {
        var i = hn.bind(null, t, e)
          , r = ln.bind(null, t, e);
        e = null;
        var n = new gn(t);
        var s, a;
        do {
            if (s = n.next(),
            s.type != un && (s.type != cn || ";" != s.value))
                if (s.type == dn || s.type == mn) {
                    var o = s.value;
                    r(n.next(), [cn], ":");
                    var h = [];
                    do {
                        var l = r(n.next(), [dn, mn]).value;
                        var u = "activate";
                        var c = null;
                        a = n.peek();
                        if (a.type == cn && "." == a.value && (n.next(),
                        u = r(n.next(), [dn, mn]).value || u,
                        a = n.peek(),
                        a.type == cn && "(" == a.value)) {
                            n.next();
                            var d;
                            c = n;
                            var m = r
                              , p = i
                              , f = c.peek();
                            var g = null;
                            if (f.type == pn)
                                g = st(),
                                ({value: p} = c.next()),
                                g.__AMP_OBJECT_STRING__ = p,
                                m(c.next(), [cn], ")");
                            else
                                do {
                                    d = c.next();
                                    f = d.type;
                                    var v = d.value;
                                    if (f != cn || "," != v && ")" != v)
                                        if (f == dn || f == mn) {
                                            m(c.next(), [cn], "=");
                                            d = m(c.next(!0), [dn, mn]);
                                            var b = [d];
                                            if (d.type == mn)
                                                for (f = c.peek(); f.type == cn && "." == f.value; f = c.peek())
                                                    c.next(),
                                                    d = m(c.next(!1), [mn]),
                                                    b.push(d);
                                            f = an(b);
                                            g || (g = st());
                                            g[v] = f;
                                            f = c.peek();
                                            p(f.type == cn && ("," == f.value || ")" == f.value), "Expected either [,] or [)]")
                                        } else
                                            p(!1, `; unexpected token [${d.value || ""}]`)
                                } while (d.type != cn || ")" != d.value);c = g
                        }
                        h.push({
                            event: o,
                            target: l,
                            method: u,
                            args: c,
                            str: t
                        });
                        a = n.peek()
                    } while (a.type == cn && "," == a.value && n.next());e || (e = st());
                    e[o] = h
                } else
                    i(!1, `; unexpected token [${s.value || ""}]`)
        } while (s.type != un);return e
    }
    function an(t) {
        return 0 == t.length ? null : 1 == t.length ? t[0].value : {
            expression: t.map((t=>t.value)).join(".")
        }
    }
    function on(t, e, i) {
        if (!t)
            return t;
        var r = i || at({});
        e && (e = e.detail) && (r.event = e);
        var n = st();
        Object.keys(t).forEach((e=>{
            var i = t[e];
            if ("object" == typeof i && i.expression) {
                i = i.expression;
                if ("." == i)
                    i = r;
                else {
                    i = i.split(".");
                    var s = r;
                    for (var a = 0; a < i.length; a++) {
                        var o = i[a];
                        if (o && s && void 0 !== s[o] && (null == s || "object" != typeof s ? 0 : Object.prototype.hasOwnProperty.call(s, o)))
                            s = s[o];
                        else {
                            s = void 0;
                            break
                        }
                    }
                    i = s
                }
                var h = i;
                i = void 0 === h ? null : h
            }
            n[e] = r[i] ? r[i] : i
        }
        ));
        return n
    }
    function hn(t, e, i, r) {
        return rt(i, "Invalid action definition in %s: [%s] %s", e, t, r || "")
    }
    function ln(t, e, i, r, n) {
        void 0 !== n ? hn(t, e, r.includes(i.type) && i.value == n, `; expected [${n}]`) : hn(t, e, r.includes(i.type));
        return i
    }
    var un = 1
      , cn = 2
      , dn = 3
      , mn = 4
      , pn = 5;
    function fn(t, e) {
        var i = t.wc + 1;
        if (i >= t.G.length)
            return {
                type: un,
                index: t.wc
            };
        var r = t.G.charAt(i);
        if (-1 != " \t\n\r\f\v \u2028\u2029".indexOf(r)) {
            for (i++; i < t.G.length && -1 != " \t\n\r\f\v \u2028\u2029".indexOf(t.G.charAt(i)); i++)
                ;
            if (i >= t.G.length)
                return {
                    type: un,
                    index: i
                };
            r = t.G.charAt(i)
        }
        if (e && (vn(r) || "." == r && i + 1 < t.G.length && vn(t.G[i + 1]))) {
            var n = "." == r
              , s = i + 1;
            for (; s < t.G.length; s++) {
                var a = t.G.charAt(s);
                if ("." == a)
                    n = !0;
                else if (!vn(a))
                    break
            }
            var o = t.G.substring(i, s);
            t = n ? parseFloat(o) : parseInt(o, 10);
            i = s - 1;
            return {
                type: dn,
                value: t,
                index: i
            }
        }
        if (-1 != ";:.()=,|!".indexOf(r))
            return {
                type: cn,
                value: r,
                index: i
            };
        if (-1 != "\"'".indexOf(r)) {
            var h = -1;
            for (var l = i + 1; l < t.G.length; l++)
                if (t.G.charAt(l) == r) {
                    h = l;
                    break
                }
            if (-1 == h)
                return {
                    type: 0,
                    index: i
                };
            t = t.G.substring(i + 1, h);
            i = h;
            return {
                type: dn,
                value: t,
                index: i
            }
        }
        if ("{" == r) {
            var u = 1
              , c = -1;
            for (r = i + 1; r < t.G.length; r++) {
                var d = t.G[r];
                "{" == d ? u++ : "}" == d && u--;
                if (0 >= u) {
                    c = r;
                    break
                }
            }
            if (-1 == c)
                return {
                    type: 0,
                    index: i
                };
            t = t.G.substring(i, c + 1);
            i = c;
            return {
                type: pn,
                value: t,
                index: i
            }
        }
        for (r = i + 1; r < t.G.length && -1 == " \t\n\r\f\v \u2028\u2029;:.()=,|!\"'{}".indexOf(t.G.charAt(r)); r++)
            ;
        t = t.G.substring(i, r);
        i = r - 1;
        return !e || "true" != t && "false" != t ? vn(t.charAt(0)) ? {
            type: dn,
            value: t,
            index: i
        } : {
            type: mn,
            value: t,
            index: i
        } : {
            type: dn,
            value: "true" == t,
            index: i
        }
    }
    var gn = class {
        constructor(t) {
            this.G = t;
            this.wc = -1
        }
        next(t) {
            var e = fn(this, t || !1);
            this.wc = e.index;
            return e
        }
        peek(t) {
            return fn(this, t || !1)
        }
    }
    ;
    function vn(t) {
        return "0" <= t && "9" >= t
    }
    function bn(t) {
        return !!t && "function" == typeof t.getFormData
    }
    function yn(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            )));
            i.push.apply(i, r)
        }
        return i
    }
    function wn(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? yn(Object(i), !0).forEach((function(e) {
                var r = i[e];
                e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : yn(Object(i)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }
            ))
        }
        return t
    }
    var An = ["GET", "POST"]
      , En = [O, M];
    function Pn(t, e) {
        var i = wn({}, e);
        if (bn(e.body)) {
            var r = e.body;
            i.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
            e = r.entries();
            var n = [];
            for (var s = e.next(); !s.done; s = e.next())
                n.push(s.value);
            e = n;
            i.body = e
        }
        return {
            input: t,
            init: i
        }
    }
    function _n(t, e) {
        rt(M(t), "Object expected: %s", t);
        if ("document" != e)
            return new Response(t.body,t.init);
        var i = st()
          , r = {
            status: 200,
            statusText: "OK",
            getResponseHeader(t) {
                return i[String(t).toLowerCase()] || null
            }
        };
        if (t.init) {
            var n = t.init;
            O(n.headers) && n.headers.forEach((t=>{
                var e = t[1];
                i[String(t[0]).toLowerCase()] = String(e)
            }
            ));
            n.status && (r.status = parseInt(n.status, 10));
            n.statusText && (r.statusText = String(n.statusText))
        }
        return new Response(t.body ? String(t.body) : "",r)
    }
    function Sn(t, e, i, n) {
        if (!e)
            return r();
        var s = n.prerenderSafe ? r() : e.whenFirstVisible()
          , a = pe(e)
          , o = Qe(i)
          , h = a.hasCapability("xhrInterceptor")
          , l = n.bypassInterceptorForDev && !1;
        return o || !h || l || !e.getRootNode().documentElement.hasAttribute("allow-xhr-interception") ? s : s.then((()=>a.isTrustedViewer())).then((e=>{
            if (e || ai(t, "untrusted-xhr-interception")) {
                var r = at({
                    originalRequest: Pn(i, n)
                });
                return a.sendMessageAwaitResponse("xhr", r).then((t=>_n(t, n.responseType)))
            }
        }
        ))
    }
    function xn(t, e, i) {
        !1 !== i.ampCors && (e = ni(t, e));
        return e
    }
    function On(t, e) {
        t = t || {};
        var i = t.method;
        void 0 === i ? i = "GET" : (i = i.toUpperCase(),
        An.includes(i));
        t.method = i;
        t.headers = t.headers || at({});
        e && (t.headers.Accept = e);
        return t
    }
    function Cn(t, e, i) {
        i = i || {};
        var r = t.origin || Ge(t.location.href).origin;
        t = Ge(e).origin;
        r == t && (i.headers = i.headers || {},
        i.headers["AMP-Same-Origin"] = "true");
        return i
    }
    function Mn(t) {
        var e = On(t, "application/json");
        "POST" != e.method || bn(e.body) || (En.some((t=>t(e.body))),
        e.headers["Content-Type"] = e.headers["Content-Type"] || "text/plain;charset=utf-8",
        e.body = "application/x-www-form-urlencoded" === e.headers["Content-Type"] ? Xe(e.body) : JSON.stringify(e.body));
        return e
    }
    function Rn(t) {
        return new Promise((e=>{
            if (t.ok)
                return e(t);
            e = t.status;
            var i = tt().createError(`HTTP error ${e}`);
            i.retriable = 415 == e || 500 <= e && 600 > e;
            i.response = t;
            throw i
        }
        ))
    }
    function Tn(t, e, i={}) {
        e = xn(t.win, e, i);
        i = Cn(t.win, e, i);
        return t.Le(e, i).then((t=>t), (t=>{
            var i = Ge(e).origin;
            throw tt().createExpectedError("XHR", `Failed fetching (${i}/...):`, t && t.message)
        }
        ))
    }
    var In = class {
        constructor(t) {
            this.win = t;
            t = oe(t);
            this.ze = t.isSingleDoc() ? t.getSingleDoc() : null
        }
        Le(t, e) {
            return Sn(this.win, this.ze, t, e).then((t=>{
                if (t)
                    return t;
                bn(e.body) && (e.body = e.body.getFormData());
                return this.win.fetch.apply(null, arguments)
            }
            ))
        }
        fetchJson(t, e) {
            return this.fetch(t, Mn(e))
        }
        fetchText(t, e) {
            return this.fetch(t, On(e, "text/plain"))
        }
        xssiJson(t, e) {
            return e ? t.text().then((t=>t.startsWith(e) ? JSON.parse(t.slice(e.length)) : JSON.parse(t))) : t.json()
        }
        fetch(t, e) {
            e = On(e);
            return Tn(this, t, e).then((t=>Rn(t)))
        }
        sendSignal(t, e) {
            return Tn(this, t, e).then((t=>Rn(t)))
        }
        getCorsUrl(t, e) {
            return ni(t, e)
        }
    }
    ;
    function Dn(t, e, i) {
        var r = ri(e, Ge(ii(t.win.location)).origin);
        return Je(r) + i
    }
    var kn = class extends In {
        constructor(t) {
            super(t);
            this.Ia = st()
        }
        fetch(t, e) {
            var i = !e || !e.method || "GET" === e.method
              , r = Dn(this, t, e && e.headers && e.headers.Accept || "")
              , n = !!this.Ia[r];
            if (i && n)
                return this.Ia[r].then((t=>t.clone()));
            var s = super.fetch(t, e);
            i && (this.Ia[r] = s.then((t=>{
                delete this.Ia[r];
                return t.clone()
            }
            ), (t=>{
                delete this.Ia[r];
                throw t
            }
            )));
            return s
        }
    }
    ;
    var Ln = {
        "+": "-",
        "/": "_",
        "=": "."
    };
    function Nn(t) {
        t = kt(t);
        return btoa(t).replace(/[+/=]/g, (t=>Ln[t]))
    }
    function jn(t) {
        var e = t.crypto || t.msCrypto;
        if (e && e.getRandomValues) {
            var i = new Uint8Array(16);
            e.getRandomValues(i)
        } else
            i = null;
        return i ? i : String(t.location.href + Date.now() + t.Math.random() + t.screen.width + t.screen.height)
    }
    function Fn(t) {
        var e = jn(t);
        return "string" == typeof e ? Ut(t, "crypto").sha384Base64(e) : ht((()=>Nn(e).replace(/\.+$/, "")))
    }
    function Vn(t) {
        return t.Wa ? t.Wa : t.Wa = he(t.h).preloadExtension("amp-crypto-polyfill").then((()=>Ut(t.h, "crypto-polyfill")))
    }
    var Bn = class {
        constructor(t) {
            this.h = t;
            var e = null
              , i = !1;
            t.crypto && (t.crypto.subtle ? e = t.crypto.subtle : t.crypto.webkitSubtle && (e = t.crypto.webkitSubtle,
            i = !0));
            this.pkcsAlgo = {
                name: "RSASSA-PKCS1-v1_5",
                hash: {
                    name: "SHA-256"
                }
            };
            this.subtle = e;
            this.af = i;
            this.Wa = null
        }
        sha384(t) {
            "string" === typeof t && (t = Dt(t));
            if (!this.subtle || this.Wa)
                return (this.Wa || Vn(this)).then((e=>e(t)));
            try {
                return this.subtle.digest({
                    name: "SHA-384"
                }, t).then((t=>new Uint8Array(t)), (e=>{
                    e.message && 0 > e.message.indexOf("secure origin") && tt().error("Crypto", "SubtleCrypto failed, fallback to closure lib.", e);
                    return Vn(this).then((()=>this.sha384(t)))
                }
                ))
            } catch (e) {
                return it().error("Crypto", "SubtleCrypto failed, fallback to closure lib.", e),
                Vn(this).then((()=>this.sha384(t)))
            }
        }
        sha384Base64(t) {
            return this.sha384(t).then((t=>Nn(t)))
        }
        uniform(t) {
            return this.sha384(t).then((t=>{
                var e = 0;
                for (var i = 2; 0 <= i; i--)
                    e = (e + t[i]) / 256;
                return e
            }
            ))
        }
        isPkcsAvailable() {
            return !!this.subtle && !1 !== this.h.isSecureContext
        }
        importPkcsKey(t) {
            this.isPkcsAvailable();
            if (this.af) {
                var e = JSON.stringify(t);
                e = "undefined" !== typeof TextEncoder ? new TextEncoder("utf-8").encode(e) : Dt(unescape(encodeURIComponent(e)))
            } else
                e = t;
            return this.subtle.importKey("jwk", e, this.pkcsAlgo, !0, ["verify"])
        }
        verifyPkcs(t, e, i) {
            this.isPkcsAvailable();
            return this.subtle.verify(this.pkcsAlgo, t, e, i)
        }
    }
    ;
    var Un = ["prefetch", "preload", "preconnect", "dns-prefetch"];
    var Hn = class {
        constructor(t) {
            this.w = t;
            this.Nc = this.xc = null
        }
        get() {
            if (this.xc)
                return this.xc;
            var t = this.w;
            var e = t.getUrl()
              , i = ii(e);
            var r = t.getRootNode();
            e = r && r.AMP && r.AMP.canonicalUrl;
            if (!e) {
                var n = r.querySelector("link[rel=canonical]");
                e = n ? Ge(n.href).href : i
            }
            var s = String(Math.floor(1e4 * t.win.Math.random()))
              , a = $n(t.win.document);
            i = Gn(t.win.document);
            var o = zn(t);
            return this.xc = {
                get sourceUrl() {
                    return ii(t.getUrl())
                },
                canonicalUrl: e,
                pageViewId: s,
                get pageViewId64() {
                    this.Nc || (this.Nc = Fn(t.win));
                    return this.Nc
                },
                linkRels: a,
                viewport: i,
                replaceParams: o
            }
        }
    }
    ;
    function $n(t) {
        var e = st();
        if (t.head) {
            t = t.head.querySelectorAll("link[rel]");
            for (var i = 0; i < t.length; i++) {
                let r = t[i]
                  , n = r.href
                  , s = r.getAttribute("rel");
                s && n && s.split(/\s+/).forEach((t=>{
                    if (-1 == Un.indexOf(t)) {
                        var i = e[t];
                        i ? (O(i) || (i = e[t] = [i]),
                        i.push(n)) : e[t] = n
                    }
                }
                ))
            }
        }
        return e
    }
    function Gn(t) {
        var e = t.head.querySelector('meta[name="viewport"]');
        return e ? e.getAttribute("content") : null
    }
    function zn(t) {
        var e;
        (e = !t.isSingleDoc()) || (e = t.win.location.href,
        "string" == typeof e && (e = Ge(e)),
        e = "a" != (Qe(e) ? e.pathname.split("/", 2)[1] : null));
        if (e)
            return null;
        t = Ge(t.win.location.href);
        var i = P(t.search).amp_r;
        return void 0 === i ? null : P(i)
    }
    function Wn(t) {
        ae(t).then((e=>{
            e && t.getRootNode().addEventListener("submit", qn, !0)
        }
        ))
    }
    function qn(t) {
        if (!t.defaultPrevented) {
            var e = t.target;
            if (e && "FORM" == e.tagName) {
                (e.classList.contains("i-amphtml-form") ? e.hasAttribute("amp-novalidate") : e.hasAttribute("novalidate")) || !e.checkValidity || e.checkValidity() || t.preventDefault();
                var i = e.elements;
                for (var r = 0; r < i.length; r++)
                    rt(!i[r].name || "__amp_source_origin" != i[r].name, "Illegal input name, %s found: %s", "__amp_source_origin", i[r]);
                i = e.getAttribute("action");
                var n = e.getAttribute("action-xhr");
                r = (e.getAttribute("method") || "GET").toUpperCase();
                n && (Ye(n, e, "action-xhr"),
                rt(!Qe(n), "form action-xhr should not be on AMP CDN: %s", e),
                si(n));
                i && (Ye(i, e, "action"),
                rt(!Qe(i), "form action should not be on AMP CDN: %s", e),
                si(i));
                "GET" == r ? rt(n || i, "form action-xhr or action attribute is required for method=GET: %s", e) : "POST" == r && (i && tt().error("form", "action attribute is invalid for method=POST: %s", e),
                n || (t.preventDefault(),
                rt(!1, "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s", e)));
                (i = e.getAttribute("target")) ? rt("_blank" == i || "_top" == i, "form target=%s is invalid can only be _blank or _top: %s", i, e) : e.setAttribute("target", "_top");
                n && (t.preventDefault(),
                t.stopImmediatePropagation(),
                Gt(e, "action").execute(e, "submit", null, e, e, t, 3))
            }
        }
    }
    var Xn = class {
        constructor() {
            this.M = null
        }
        add(t) {
            this.M || (this.M = []);
            this.M.push(t);
            return ()=>{
                this.remove(t)
            }
        }
        remove(t) {
            this.M && (t = this.M.indexOf(t),
            -1 < t && this.M.splice(t, 1))
        }
        removeAll() {
            this.M && (this.M.length = 0)
        }
        fire(t) {
            if (this.M) {
                var e = this.M;
                for (var i = 0; i < e.length; i++)
                    (0,
                    e[i])(t)
            }
        }
        getHandlerCount() {
            return this.M ? this.M.length : 0
        }
    }
    ;
    var Kn = {
        attributes: !0,
        attributeFilter: ["hidden"],
        subtree: !0
    };
    function Yn(t) {
        if (!t.T) {
            t.xa = new Xn;
            var e = new t.h.MutationObserver((e=>{
                e && t.xa.fire(e)
            }
            ));
            t.T = e;
            e.observe(t.L, Kn)
        }
    }
    var Jn = class {
        constructor(t) {
            this.L = t.getRootNode();
            this.h = (this.L.ownerDocument || this.L).defaultView;
            this.xa = this.T = null
        }
        add(t) {
            Yn(this);
            var e = this.xa.add(t);
            return ()=>{
                e();
                0 === this.xa.getHandlerCount() && this.dispose()
            }
        }
        dispose() {
            this.T && (this.T.disconnect(),
            this.xa.removeAll(),
            this.xa = this.T = null)
        }
    }
    ;
    function Qn(t) {
        try {
            return t.state
        } catch (t) {
            return null
        }
    }
    function Zn(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            )));
            i.push.apply(i, r)
        }
        return i
    }
    function ts(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Zn(Object(i), !0).forEach((function(e) {
                var r = i[e];
                e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Zn(Object(i)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }
            ))
        }
        return t
    }
    function es(t, e, i) {
        var r = new ot
          , n = r.promise;
        t.H.push({
            callback: e,
            resolve: r.resolve,
            reject: r.reject,
            trace: Error("history trace for " + i + ": ")
        });
        1 == t.H.length && rs(t);
        return n
    }
    function is(t, e) {
        if (!(t.o >= t.oa.length - 1)) {
            var i = [];
            for (var r = t.oa.length - 1; r > t.o; r--)
                t.oa[r] && (i.push(t.oa[r]),
                t.oa[r] = void 0);
            t.oa.splice(t.o + 1);
            if (0 < i.length)
                for (let r = 0; r < i.length; r++)
                    t.ja.delay((()=>i[r](e)), 1)
        }
    }
    function rs(t) {
        if (0 != t.H.length) {
            var e = t.H[0];
            try {
                var i = e.callback()
            } catch (t) {
                i = Promise.reject(t)
            }
            i.then((t=>{
                e.resolve(t)
            }
            ), (t=>{
                it().error("History", "failed to execute a task:", t);
                e.trace && (e.trace.message += t,
                it().error("History", e.trace));
                e.reject(t)
            }
            )).then((()=>{
                t.H.splice(0, 1);
                rs(t)
            }
            ))
        }
    }
    var ns = class {
        constructor(t, e) {
            this.w = t;
            this.ja = me(t.win);
            this.A = e;
            this.o = 0;
            this.oa = [];
            this.H = [];
            this.A.setOnStateUpdated(this.O.bind(this))
        }
        cleanup() {
            this.A.cleanup()
        }
        push(t, e) {
            return es(this, (()=>this.A.push(e).then((e=>{
                this.O(e);
                t && (this.oa[e.stackIndex] = t);
                return e.stackIndex
            }
            ))), "push")
        }
        pop(t) {
            return es(this, (()=>this.A.pop(t).then((t=>{
                this.O(t)
            }
            ))), "pop")
        }
        replace(t) {
            return es(this, (()=>this.A.replace(t)), "replace")
        }
        get() {
            return es(this, (()=>this.A.get()), "get")
        }
        goBack(t) {
            return es(this, (()=>0 >= this.o && !t ? r() : this.A.pop(this.o).then((t=>{
                this.O(t)
            }
            ))), "goBack")
        }
        replaceStateForTarget(t) {
            var e = this.w.win.location.hash;
            return this.push((()=>{
                this.w.win.location.replace(e || "#")
            }
            )).then((()=>{
                this.A.replaceStateForTarget(t)
            }
            ))
        }
        getFragment() {
            return this.A.getFragment()
        }
        updateFragment(t) {
            "#" == t[0] && (t = t.substr(1));
            return this.A.updateFragment(t)
        }
        O(t) {
            this.o = t.stackIndex;
            is(this, t)
        }
    }
    ;
    function ss(t, e, i) {
        t = st(i ? as(t) : void 0);
        t["AMP.History"] = e;
        return t
    }
    function as(t) {
        return t.Ff ? Qn(t.win.history) : t.Ba
    }
    function os(t, e) {
        return t.bc ? t.bc.promise.then(e, e) : e()
    }
    function hs(t, e) {
        var i = ts(ts({}, t && t.data || {}), e.data || {});
        return ts(ts(ts({}, t || {}), e), {}, {
            data: i
        })
    }
    function ls(t, e) {
        if (0 >= e)
            return Promise.resolve(t.o);
        t.Ba = ss(t, t.o - e);
        var i = us(t);
        t.win.history.go(-e);
        return i.then((()=>Promise.resolve(t.o)))
    }
    function us(t) {
        var e = new ot;
        var i = e.resolve
          , r = e.reject;
        e = t.ja.timeoutPromise(500, e.promise);
        t.bc = {
            promise: e,
            resolve: i,
            reject: r
        };
        return e
    }
    var cs = class {
        constructor(t) {
            this.win = t;
            this.ja = me(t);
            t = this.win.history;
            this.pa = t.length - 1;
            var e = Qn(t);
            e && void 0 !== e["AMP.History"] && (this.pa = Math.min(e["AMP.History"], this.pa));
            this.o = this.pa;
            this.O = null;
            this.Ff = "state"in t;
            this.Ba = ss(this, this.o);
            var i, r;
            t.pushState && t.replaceState ? (this.Gb = t.originalPushState || t.pushState.bind(t),
            this.Ta = t.originalReplaceState || t.replaceState.bind(t),
            i = (t,e,i)=>{
                this.Ba = t;
                this.Gb(t, e, i || null)
            }
            ,
            r = (t,e,i)=>{
                this.Ba = t;
                void 0 !== i ? this.Ta(t, e, i) : this.Ta(t, e)
            }
            ,
            t.originalPushState || (t.originalPushState = this.Gb),
            t.originalReplaceState || (t.originalReplaceState = this.Ta)) : (i = t=>{
                this.Ba = t
            }
            ,
            r = t=>{
                this.Ba = t
            }
            );
            this.rf = i;
            this.Ob = r;
            try {
                this.Ob(ss(this, this.o, !0))
            } catch (t) {
                it().error("History", "Initial replaceState failed: " + t.message)
            }
            t.pushState = this.Kd.bind(this);
            t.replaceState = this.vc.bind(this);
            this.Kb = ()=>{
                var t = as(this);
                var e = t ? t["AMP.History"] : void 0;
                var i = this.o;
                var r = this.bc;
                this.bc = void 0;
                i > this.win.history.length - 2 && (i = this.win.history.length - 2,
                this.ba(hs(t, {
                    stackIndex: i
                })));
                i = void 0 == e ? i + 1 : e < this.win.history.length ? e : this.win.history.length - 1;
                t || (t = {});
                t["AMP.History"] = i;
                this.Ob(t, void 0, void 0);
                i != this.o && this.ba(hs(t, {
                    stackIndex: i
                }));
                i < this.pa && (this.pa = i);
                r && r.resolve()
            }
            ;
            this.win.addEventListener("popstate", this.Kb)
        }
        cleanup() {
            this.Gb && (this.win.history.pushState = this.Gb);
            this.Ta && (this.win.history.replaceState = this.Ta);
            this.win.removeEventListener("popstate", this.Kb)
        }
        setOnStateUpdated(t) {
            this.O = t
        }
        push(t) {
            return os(this, (()=>{
                var e = hs(as(this), t || {});
                this.Kd(e, void 0, e.fragment ? "#" + e.fragment : void 0);
                return ht((()=>hs(e, {
                    stackIndex: this.o
                })))
            }
            ))
        }
        pop(t) {
            t = Math.max(t, this.pa);
            return os(this, (()=>ls(this, this.o - t + 1))).then((t=>hs(as(this), {
                stackIndex: t
            })))
        }
        replace(t={}) {
            return os(this, (()=>{
                var e = hs(as(this), t || {})
                  , i = (e.url || "").replace(/#.*/, "")
                  , r = e.fragment ? "#" + e.fragment : "";
                this.vc(e, e.title, i || r ? i + r : void 0);
                return ht((()=>hs(e, {
                    stackIndex: this.o
                })))
            }
            ))
        }
        get() {
            return ht((()=>hs(as(this), {
                stackIndex: this.o
            })))
        }
        backTo(t) {
            t = Math.max(t, this.pa);
            return os(this, (()=>ls(this, this.o - t)))
        }
        Kd(t, e, i) {
            t || (t = {});
            var r = this.o + 1;
            t["AMP.History"] = r;
            this.rf(t, e, i);
            r != this.win.history.length - 1 && (r = this.win.history.length - 1,
            t["AMP.History"] = r,
            this.Ob(t));
            t = hs(t, {
                stackIndex: r
            });
            this.ba(t)
        }
        replaceStateForTarget(t) {
            os(this, (()=>{
                this.win.removeEventListener("popstate", this.Kb);
                try {
                    this.win.location.replace(t)
                } finally {
                    this.win.addEventListener("popstate", this.Kb)
                }
                this.vc();
                return r()
            }
            ))
        }
        vc(t, e, i) {
            t || (t = {});
            var r = Math.min(this.o, this.win.history.length - 1);
            t["AMP.History"] = r;
            this.Ob(t, e, i);
            t = hs(t, {
                stackIndex: r
            });
            this.ba(t)
        }
        ba(t) {
            t.stackIndex = Math.min(t.stackIndex, this.win.history.length - 1);
            this.o != t.stackIndex && (this.o = t.stackIndex,
            this.O && this.O(t))
        }
        getFragment() {
            var {hash: t} = this.win.location;
            t = t.substr(1);
            return Promise.resolve(t)
        }
        updateFragment(t) {
            return this.replace({
                fragment: t
            })
        }
    }
    ;
    function ds(t) {
        return !!t && void 0 !== t.stackIndex
    }
    var ms = class {
        constructor(t, e) {
            this.win = t;
            this.B = e;
            this.o = 0;
            this.O = null;
            this.Jf = this.B.onMessage("historyPopped", (t=>{
                void 0 !== t.newStackIndex && (t.stackIndex = t.newStackIndex);
                ds(t) && this.ba(t)
            }
            ))
        }
        replaceStateForTarget(t) {
            this.win.location.replace(t)
        }
        cleanup() {
            this.Jf()
        }
        setOnStateUpdated(t) {
            this.O = t
        }
        push(t) {
            var e = ts({
                stackIndex: this.o + 1
            }, t || {});
            return this.B.sendMessageAwaitResponse("pushHistory", e).then((t=>{
                t = ds(t) ? t : e;
                this.ba(t);
                return t
            }
            ))
        }
        pop(t) {
            if (t > this.o)
                return this.get();
            t = at({
                stackIndex: this.o
            });
            return this.B.sendMessageAwaitResponse("popHistory", t).then((t=>{
                var e = at({
                    stackIndex: this.o - 1
                });
                t = ds(t) ? t : e;
                this.ba(t);
                return t
            }
            ))
        }
        replace(t) {
            if (t && t.url) {
                if (!this.B.hasCapability("fullReplaceHistory")) {
                    var e = at({
                        stackIndex: this.o
                    });
                    return Promise.resolve(e)
                }
                var i = t.url.replace(/#.*/, "");
                t.url = i
            }
            var r = ts({
                stackIndex: this.o
            }, t || {});
            return this.B.sendMessageAwaitResponse("replaceHistory", r, !0).then((t=>{
                t = ds(t) ? t : r;
                this.ba(t);
                return t
            }
            ))
        }
        get() {
            return Promise.resolve({
                data: void 0,
                fragment: "",
                stackIndex: this.o,
                title: ""
            })
        }
        ba(t) {
            var e = t.stackIndex;
            this.o != e && (this.o = e,
            this.O && this.O(t))
        }
        getFragment() {
            return this.B.hasCapability("fragment") ? this.B.sendMessageAwaitResponse("getFragment", void 0, !0).then((t=>{
                if (!t)
                    return "";
                "#" == t[0] && (t = t.substr(1));
                return t
            }
            )) : Promise.resolve("")
        }
        updateFragment(t) {
            return this.B.hasCapability("fragment") ? this.B.sendMessageAwaitResponse("replaceHistory", at({
                fragment: t
            }), !0) : r()
        }
    }
    ;
    function ps(t) {
        var e = pe(t);
        e.isOvertakeHistory() || t.win.__AMP_TEST_IFRAME ? e = new ms(t.win,e) : (Vt(t.win, "global-history-binding", cs),
        e = Ut(t.win, "global-history-binding"));
        return new ns(t,e)
    }
    var fs = [];
    var gs = class extends lr {
        constructor(t) {
            super(t);
            fs.push(this)
        }
        getLayoutPriority() {
            return 0
        }
        isLayoutSupported() {
            return !0
        }
        reconstructWhenReparented() {
            return !1
        }
    }
    ;
    var vs = {
        0: "cld",
        2: "adld"
    };
    function bs(t) {
        if (t.Jb && t.Jb.isPerformanceTrackingOn() && !t.zd && t.rb && t.sb) {
            var e = t.h.Math.max(t.sb - t.rb, 0);
            t.yb && t.Jb.tickDelta(t.yb, e);
            t.Jb.throttledFlush();
            t.zd = !0
        }
    }
    var ys = class {
        constructor(t, e) {
            this.h = t;
            this.Jb = Ht(t, "performance");
            this.sb = this.rb = null;
            this.zd = !1;
            this.yb = vs[e]
        }
        enterViewport() {
            this.yb && !this.rb && (this.rb = this.h.Date.now(),
            bs(this))
        }
        startLayout() {
            this.yb && !this.sb && (this.sb = this.h.Date.now(),
            bs(this))
        }
    }
    ;
    function ws(t) {
        return t.__AMP__RESOURCE
    }
    function As(t, e) {
        var i = ge(t.element);
        t.N = i.getLayoutRect(t.element, e);
        var r = !1;
        if (i.supportsPositionFixed() && t.isDisplayed()) {
            var {win: n} = t.j.getAmpdoc()
              , s = n.document.body;
            for (var a = t.element; a && a != s; a = a.offsetParent) {
                if (a.isAlwaysFixed && a.isAlwaysFixed()) {
                    r = !0;
                    break
                }
                if (i.isDeclaredFixed(a) && "fixed" == (n.getComputedStyle(a) || st()).position) {
                    r = !0;
                    break
                }
            }
        }
        if (t.La = r)
            t.N = Ft(t.N, -i.getScrollLeft(), -i.getScrollTop())
    }
    function Es(t) {
        if (t.W) {
            var e = t.getDistanceViewportRatio();
            for (var i in t.W)
                t.isWithinViewportRatio(parseFloat(i), e) && (t.W[i].resolve(),
                delete t.W[i])
        }
    }
    function Ps(t, e, i, r) {
        t.qa = null;
        if (i.aborted)
            throw i = it().createError("layoutComplete race"),
            i.associatedElement = t.element,
            it().expectedError("Resource", i),
            Lr();
        t.Hc && (t.Hc(),
        t.Hc = null);
        t.Pa = null;
        t.Vd = !0;
        t.C = e ? 4 : 5;
        t.Sd = r;
        if (!e)
            return Promise.reject(r)
    }
    var _s = class {
        constructor(t, e, i) {
            e.__AMP__RESOURCE = this;
            this.Ve = t;
            this.element = e;
            this.debugid = e.tagName.toLowerCase() + "#" + t;
            this.hostWin = e.ownerDocument.defaultView;
            this.j = i;
            this.cf = e.hasAttribute("placeholder");
            this.Ka = !1;
            this.ya = void 0;
            this.C = e.isBuilt() ? 1 : 0;
            0 == this.C && e.isBuilding() && this.build();
            this.Rc = -1;
            this.$ = 0;
            this.Sd = this.qa = null;
            this.La = !1;
            this.N = Lt(-1e4, -1e4, 0, 0);
            this.yc = null;
            this.Dc = !1;
            this.Pa = this.W = null;
            this.Pc = void 0;
            this.Vd = !1;
            t = new ot;
            this.gf = t.promise;
            this.Hc = t.resolve;
            this.Md = i.isIntersectionExperimentOn();
            this.Xa = null
        }
        getId() {
            return this.Ve
        }
        updateOwner(t) {
            this.ya = t
        }
        getOwner() {
            if (void 0 === this.ya) {
                for (var t = this.element; t; t = t.parentElement)
                    if (t.__AMP__OWNER) {
                        this.ya = t.__AMP__OWNER;
                        break
                    }
                void 0 === this.ya && (this.ya = null)
            }
            return this.ya
        }
        hasOwner() {
            return !!this.getOwner()
        }
        getLayoutPriority() {
            return -1 != this.Rc ? this.Rc : this.element.getLayoutPriority()
        }
        updateLayoutPriority(t) {
            this.Rc = t
        }
        getState() {
            return this.C
        }
        isBuilt() {
            return this.element.isBuilt()
        }
        isBuilding() {
            return this.Ka
        }
        whenBuilt() {
            return this.element.signals().whenSignal("res-built")
        }
        build() {
            if (this.Ka || !this.element.isUpgraded())
                return null;
            this.Ka = !0;
            return this.element.build().then((()=>{
                this.Ka = !1;
                this.Md && this.hasBeenMeasured() ? (this.C = 2,
                this.element.isAlwaysFixed() && !this.La && this.requestMeasure(),
                this.element.onMeasure(!0)) : this.C = 1;
                this.element.signals().signal("res-built")
            }
            ), (t=>{
                this.maybeReportErrorOnBuildFailure(t);
                this.Ka = !1;
                this.element.signals().rejectSignal("res-built", t);
                throw t
            }
            ))
        }
        maybeReportErrorOnBuildFailure(t) {
            Nr(t) || it().error("Resource", "failed to build:", this.debugid, t)
        }
        applySizesAndMediaQuery() {
            this.element.applySizesAndMediaQuery()
        }
        changeSize(t, e, i) {
            this.element.applySize(t, e, i);
            this.requestMeasure()
        }
        overflowCallback(t, e, i, r) {
            t && (this.Pc = {
                height: e,
                width: i,
                margins: r
            });
            this.element.overflowCallback(t, e, i, r)
        }
        resetPendingChangeSize() {
            this.Pc = void 0
        }
        getPendingChangeSize() {
            return this.Pc
        }
        getUpgradeDelayMs() {
            return this.element.getUpgradeDelayMs()
        }
        premeasure(t) {
            this.Xa = t
        }
        measure(t=!1) {
            if (!(this.cf && this.element.parentElement && this.element.parentElement.tagName.startsWith("AMP-")) || "__AMP__RESOURCE"in this.element.parentElement)
                if (this.element.ownerDocument && this.element.ownerDocument.defaultView) {
                    this.Dc = !1;
                    var e = this.N;
                    t ? As(this, this.Xa) : As(this);
                    this.Xa = null;
                    var i = this.N
                      , r = !(e.width == i.width && e.height === i.height);
                    (1 == this.C || e.top != i.top || r) && this.element.isUpgraded() && (1 == this.C ? this.C = 2 : 4 != this.C && 5 != this.C || !this.element.isRelayoutNeeded() || (this.C = 2));
                    this.hasBeenMeasured() || (this.yc = i);
                    this.element.updateLayoutBox(i, r)
                } else
                    this.C = 1
        }
        completeCollapse() {
            ji(this.element, !1);
            this.N = Lt(this.N.left, this.N.top, 0, 0);
            this.La = !1;
            this.element.updateLayoutBox(this.getLayoutBox());
            var t = this.getOwner();
            t && t.collapsedCallback(this.element)
        }
        completeExpand() {
            ji(this.element, !0);
            this.requestMeasure()
        }
        isMeasureRequested() {
            return this.Dc
        }
        hasBeenMeasured() {
            return !!this.yc
        }
        hasBeenPremeasured() {
            return !!this.Xa
        }
        requestMeasure() {
            this.Dc = !0
        }
        getLayoutBox() {
            if (!this.La)
                return this.N;
            var t = ge(this.element);
            return Ft(this.N, t.getScrollLeft(), t.getScrollTop())
        }
        getPageLayoutBox() {
            return this.N
        }
        getPageLayoutBoxAsync() {
            return this.hasBeenMeasured() ? ht((()=>this.getPageLayoutBox())) : fe(this.hostWin).measurePromise((()=>{
                this.measure();
                return this.getPageLayoutBox()
            }
            ))
        }
        getInitialLayoutBox() {
            return this.yc || this.N
        }
        isDisplayed(t=!1) {
            if (!this.element.ownerDocument || !this.element.ownerDocument.defaultView)
                return !1;
            var e = "fluid" == this.element.getLayout()
              , i = t ? this.Xa : this.getLayoutBox()
              , r = 0 < i.height && 0 < i.width;
            return e || r
        }
        isFixed() {
            return this.La
        }
        overlaps(t) {
            var e = this.getLayoutBox();
            return e.top <= t.bottom && t.top <= e.bottom && e.left <= t.right && t.left <= e.right
        }
        prerenderAllowed() {
            return this.element.prerenderAllowed()
        }
        isBuildRenderBlocking() {
            return this.element.isBuildRenderBlocking()
        }
        whenWithinViewport(t) {
            if (!this.isLayoutPending() || !0 === t)
                return r();
            var e = String(t);
            if (this.W && this.W[e])
                return this.W[e].promise;
            if (this.isWithinViewportRatio(t))
                return r();
            this.W = this.W || {};
            this.W[e] = new ot;
            return this.W[e].promise
        }
        getDistanceViewportRatio() {
            var t = ge(this.element).getRect()
              , e = this.getLayoutBox()
              , i = this.j.getScrollDirection();
            var r = 1
              , n = 0;
            if (t.right < e.left || t.left > e.right)
                return {
                    distance: !1
                };
            if (t.bottom < e.top)
                n = e.top - t.bottom,
                -1 == i && (r = 2);
            else if (t.top > e.bottom)
                n = t.top - e.bottom,
                1 == i && (r = 2);
            else
                return {
                    distance: !0
                };
            return {
                distance: n,
                scrollPenalty: r,
                viewportHeight: t.height
            }
        }
        isWithinViewportRatio(t, e) {
            if ("boolean" === typeof t)
                return t;
            var {distance: i, scrollPenalty: r, viewportHeight: n} = e || this.getDistanceViewportRatio();
            return "boolean" == typeof i ? i : i < n * t / r
        }
        renderOutsideViewport() {
            Es(this);
            return this.hasOwner() || this.isWithinViewportRatio(this.element.renderOutsideViewport())
        }
        idleRenderOutsideViewport() {
            return this.isWithinViewportRatio(this.element.idleRenderOutsideViewport())
        }
        layoutScheduled(t) {
            this.C = 3;
            this.element.layoutScheduleTime = t
        }
        layoutCanceled() {
            this.C = this.hasBeenMeasured() ? 2 : 1
        }
        startLayout() {
            if (this.Pa)
                return this.Pa;
            if (4 == this.C)
                return r();
            if (5 == this.C)
                return Promise.reject(this.Sd);
            this.isDisplayed();
            if (3 != this.C) {
                var t = it().createError("startLayout called but not LAYOUT_SCHEDULED", "currently: ", this.C);
                t.associatedElement = this.element;
                kr(t);
                return Promise.reject(t)
            }
            if (0 < this.$ && !this.element.isRelayoutNeeded())
                return this.C = 4,
                r();
            this.$++;
            this.C = 3;
            this.qa = new AbortController;
            var e = this.qa.signal;
            return this.Pa = new Promise(((t,i)=>{
                fe(this.hostWin).mutate((()=>{
                    try {
                        t(this.element.layoutCallback(e))
                    } catch (t) {
                        i(t)
                    }
                }
                ))
            }
            )).then((()=>Ps(this, !0, e)), (t=>Ps(this, !1, e, t)))
        }
        isLayoutPending() {
            return 4 != this.C && 5 != this.C
        }
        loadedOnce() {
            return this.gf
        }
        hasLoadedOnce() {
            return this.Vd
        }
        isInViewport() {
            var t = this.element.isInViewport();
            t && Es(this);
            return t
        }
        setInViewport(t) {
            this.element.viewportCallback(t)
        }
        unlayout() {
            0 != this.C && 1 != this.C && 2 != this.C && (this.qa && (this.qa.abort(),
            this.qa = null),
            this.setInViewport(!1),
            this.element.unlayoutCallback() && (this.element.togglePlaceholder(!0),
            this.C = this.Md ? 2 : 1,
            this.$ = 0,
            this.Pa = null))
        }
        getTaskId(t) {
            return this.debugid + "#" + t
        }
        pause() {
            this.element.pauseCallback();
            this.element.unlayoutOnPause() && this.unlayout()
        }
        pauseOnRemove() {
            this.element.pauseCallback()
        }
        resume() {
            this.element.resumeCallback()
        }
        unload() {
            this.pause();
            this.unlayout()
        }
        disconnect() {
            delete this.element.__AMP__RESOURCE;
            this.element.disconnect(!0)
        }
    }
    ;
    var Ss = class {
        constructor() {
            this.ga = st();
            this.P = null
        }
        get(t) {
            t = this.ga[t];
            return null == t ? null : t
        }
        whenSignal(t) {
            var e = this.P && this.P[t];
            if (!e) {
                var i = this.ga[t];
                null != i ? e = {
                    promise: "number" == typeof i ? Promise.resolve(i) : Promise.reject(i)
                } : (i = new ot,
                e = {
                    promise: i.promise,
                    resolve: i.resolve,
                    reject: i.reject
                });
                this.P || (this.P = st());
                this.P[t] = e
            }
            return e.promise
        }
        signal(t, e) {
            if (null == this.ga[t]) {
                var i = void 0 == e ? Date.now() : e;
                this.ga[t] = i;
                (t = this.P && this.P[t]) && t.resolve && (t.resolve(i),
                t.resolve = void 0,
                t.reject = void 0)
            }
        }
        rejectSignal(t, e) {
            null == this.ga[t] && (this.ga[t] = e,
            (t = this.P && this.P[t]) && t.reject && (t.reject(e),
            t.promise.catch((()=>{}
            )),
            t.resolve = void 0,
            t.reject = void 0))
        }
        reset(t) {
            this.ga[t] && delete this.ga[t];
            var e = this.P && this.P[t];
            e && !e.resolve && delete this.P[t]
        }
    }
    ;
    function xs(t, e) {
        Zi(t, "message", e, void 0)
    }
    function Os(t, e, i={}, r=null) {
        i.type = t;
        i.sentinel = e;
        return "amp-" + (r || "") + JSON.stringify(i)
    }
    function Cs(t) {
        try {
            return !!t.location.href && (t.test || !0)
        } catch (t) {
            return !1
        }
    }
    var Ms = Date.now();
    function Rs(t, e) {
        var i = t.split(",");
        rt(0 < i.length, "sizes has to have at least one size");
        var r = [];
        i.forEach((t=>{
            t = t.replace(/\s+/g, " ").trim();
            if (0 != t.length) {
                var i, n = !1;
                if (")" == t.charAt(t.length - 1)) {
                    n = !0;
                    var s = 1;
                    for (i = t.length - 2; 0 <= i; i--) {
                        var a = t.charAt(i);
                        "(" == a ? s-- : ")" == a && s++;
                        if (0 == s)
                            break
                    }
                    var o = i - 1;
                    if (0 < i)
                        for (i--; 0 <= i && (a = t.charAt(i),
                        "%" == a || "-" == a || "_" == a || "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "0" <= a && "9" >= a); i--)
                            ;
                    rt(i < o, 'Invalid CSS function in "%s"', t)
                } else
                    for (i = t.length - 2; 0 <= i && (a = t.charAt(i),
                    "%" == a || "." == a || "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "0" <= a && "9" >= a); i--)
                        ;
                if (0 <= i) {
                    var h = t.substring(0, i + 1).trim();
                    var l = t.substring(i + 1).trim()
                } else
                    l = t,
                    h = void 0;
                r.push({
                    mediaQuery: h,
                    size: n ? l : e ? Ki(l) : Xi(l)
                })
            }
        }
        ));
        return new Ts(r)
    }
    var Ts = class {
        constructor(t) {
            rt(0 < t.length, "SizeList must have at least one option");
            this.Bf = t;
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                e < t.length - 1 ? rt(i.mediaQuery, "All options except for the last must have a media condition") : rt(!i.mediaQuery, "The last option must not have a media condition")
            }
        }
        select(t) {
            var e = this.Bf
              , i = e.length - 1;
            for (var r = 0; r < i; r++) {
                var n = e[r];
                if (t.matchMedia(n.mediaQuery).matches)
                    return n.size
            }
            return e[i].size
        }
    }
    ;
    var Is = /nochunking=1/.test(self.location.hash)
      , Ds = !1;
    var ks = r();
    function Ls(t) {
        Bt(t, "chunk", $s);
        return $t(t, "chunk")
    }
    function Ns(t, e, i) {
        if (Is)
            ks.then(e);
        else {
            var r = Ls(t.documentElement || t);
            r.runForStartup(e);
            i && r.runForStartup((()=>{
                r.ld = !0
            }
            ))
        }
    }
    function js(t, e) {
        if ("run" != t.state) {
            t.state = "run";
            try {
                t.qc(e)
            } catch (e) {
                throw t.$d(),
                e
            }
        }
    }
    var Fs = class {
        constructor(t) {
            this.state = "not_run";
            this.qc = t
        }
        Mf() {
            return this.qc.displayName || this.qc.name
        }
        $d() {}
        Ld() {
            return !1
        }
        ve() {
            return !1
        }
    }
    ;
    var Vs = class extends Fs {
        constructor(t, e, i) {
            super(t);
            this.ud = i
        }
        $d() {
            wr(self.document)
        }
        Ld() {
            return this.ud.ampdoc.isVisible()
        }
        ve() {
            return this.ud.wd
        }
    }
    ;
    function Bs(t, e) {
        var i = t.Z.peek();
        for (; i && "not_run" !== i.state; )
            t.Z.dequeue(),
            i = t.Z.peek();
        i && e && t.Z.dequeue();
        return i
    }
    function Us(t) {
        t.h.postMessage("amp-macro-task", "*")
    }
    function Hs(t) {
        !Ds && t.ld && (t.Df ? t.h.navigator.scheduling.isInputPending() : 5 < t.Ga) ? (t.Ga = 0,
        Us(t)) : ks.then((()=>{
            t.od(null)
        }
        ))
    }
    var $s = class {
        constructor(t) {
            this.ampdoc = t;
            this.h = t.win;
            this.Z = new pi;
            this.od = this.Bd.bind(this);
            this.Ga = 0;
            this.Df = !(!this.h.navigator.scheduling || !this.h.navigator.scheduling.isInputPending);
            this.Qb = !1;
            this.ld = this.h.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");
            this.h.addEventListener("message", (t=>{
                "amp-macro-task" == t.data && this.Bd(null)
            }
            ));
            this.wd = !1;
            Jt(Xt(t), "viewer").then((()=>{
                this.wd = !0
            }
            ));
            t.onVisibilityChanged((()=>{
                t.isVisible() && this.za()
            }
            ))
        }
        run(t, e) {
            t = new Fs(t);
            this.Z.enqueue(t, e);
            this.za()
        }
        runForStartup(t) {
            t = new Vs(t,this.h,this);
            this.Z.enqueue(t, Number.POSITIVE_INFINITY);
            this.za()
        }
        Bd(t) {
            var e = Bs(this, !0);
            if (!e)
                return this.Qb = !1,
                this.Ga = 0,
                !1;
            var i;
            try {
                i = Date.now(),
                js(e, t)
            } finally {
                ks.then().then().then().then().then().then().then().then().then((()=>{
                    this.Qb = !1;
                    this.Ga += Date.now() - i;
                    this.za()
                }
                ))
            }
            return !0
        }
        za() {
            if (!this.Qb) {
                var t = Bs(this);
                t && (t.Ld() ? (this.Qb = !0,
                Hs(this)) : t.ve() && this.h.requestIdleCallback ? Gs(this.h, this.od) : Us(this))
            }
        }
    }
    ;
    function Gs(t, e) {
        function i(n) {
            if (15 > n.timeRemaining()) {
                var s = 2e3 - (Date.now() - r);
                0 >= s || n.didTimeout ? e(n) : t.requestIdleCallback(i, {
                    timeout: s
                })
            } else
                e(n)
        }
        var r = Date.now();
        t.requestIdleCallback(i, {
            timeout: 2e3
        })
    }
    var zs;
    function Ws(t) {
        if (t.__AMP_BASE_CE_CLASS)
            return t.__AMP_BASE_CE_CLASS;
        var e = t.HTMLElement;
        var i = class extends e {
            constructor() {
                super();
                this.createdCallback()
            }
            createdCallback() {
                this.wb = this.rd = !1;
                this.ob = null;
                this.readyState = "loading";
                this.everAttached = !1;
                this.j = this.w = null;
                this.layout_ = "nodisplay";
                this.df = this.Ud = -1;
                this.$ = 0;
                this.Va = this.xb = this.Cc = !1;
                this.tb = this.Tb = this.Db = void 0;
                this.warnOnMissingOverflow = !0;
                this.layoutScheduleTime = this.U = this.sizerElement = void 0;
                this.implementation_ = new (t.__AMP_EXTENDED_ELEMENTS && t.__AMP_EXTENDED_ELEMENTS[this.localName])(this);
                this.Ca = 1;
                this.te = 0;
                this.Ma = this.ka = void 0;
                this.D = new Ss;
                var e = Ht(t, "performance");
                this.de = e && e.isPerformanceTrackingOn();
                this.Gc = null;
                this.__AMP_UPG_RES && (this.__AMP_UPG_RES(this),
                delete this.__AMP_UPG_RES,
                delete this.__AMP_UPG_PRM)
            }
            signals() {
                return this.D
            }
            getAmpDoc() {
                return this.w
            }
            getResources() {
                return this.j
            }
            isUpgraded() {
                return 2 == this.Ca
            }
            whenUpgraded() {
                return this.D.whenSignal("upgraded")
            }
            upgrade(t) {
                this.Ma || 1 != this.Ca || (this.implementation_ = new t(this),
                this.everAttached && this.qe())
            }
            getUpgradeDelayMs() {
                return this.te
            }
            lc(e, i) {
                this.te = t.Date.now() - i;
                this.Ca = 2;
                this.implementation_ = e;
                this.classList.remove("amp-unresolved");
                this.classList.remove("i-amphtml-unresolved");
                this.Be();
                this.implementation_.layout_ = this.layout_;
                this.ea("amp:attached");
                this.getResources().upgraded(this);
                this.D.signal("upgraded")
            }
            Be() {
                "nodisplay" == this.layout_ || this.implementation_.isLayoutSupported(this.layout_) || (rt(this.getAttribute("layout"), "The element did not specify a layout attribute. Check https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout and the respective element documentation for details."),
                rt(!1, `Layout not supported: ${this.layout_}`))
            }
            isBuilt() {
                return this.rd
            }
            whenBuilt() {
                return this.D.whenSignal("built")
            }
            getLayoutPriority() {
                this.isUpgraded();
                return this.implementation_.getLayoutPriority()
            }
            getLayoutWidth() {
                return this.Ud
            }
            getDefaultActionAlias() {
                this.isUpgraded();
                return this.implementation_.getDefaultActionAlias()
            }
            isBuilding() {
                return !!this.ob
            }
            build() {
                this.isUpgraded();
                return this.ob ? this.ob : this.ob = new Promise(((t,e)=>{
                    var i = this.Ne();
                    i ? re(this, "consentPolicyManager", "amp-consent").then((t=>t ? t.whenPolicyUnblock(i) : !0)).then((i=>{
                        i ? t(this.implementation_.buildCallback()) : e(Error("BLOCK_BY_CONSENT"))
                    }
                    )) : t(this.implementation_.buildCallback())
                }
                )).then((()=>{
                    this.preconnect(!1);
                    this.rd = !0;
                    this.classList.add("i-amphtml-built");
                    this.classList.remove("i-amphtml-notbuilt");
                    this.classList.remove("amp-notbuilt");
                    this.D.signal("built");
                    this.xb && this.re(!0);
                    this.ka && me(this.ownerDocument.defaultView).delay(this.Ie.bind(this), 1);
                    if (!this.getPlaceholder()) {
                        var t = this.createPlaceholder();
                        t && this.appendChild(t)
                    }
                }
                ), (t=>{
                    this.D.rejectSignal("built", t);
                    Nr(t) || kr(t, this);
                    throw t
                }
                ))
            }
            preconnect(t) {
                t ? this.implementation_.preconnectCallback(t) : Ns(this.getAmpDoc(), (()=>{
                    var e = this.tagName;
                    this.ownerDocument ? this.ownerDocument.defaultView ? this.implementation_.preconnectCallback(t) : it().error(e, "preconnect without defaultView") : it().error(e, "preconnect without ownerDocument")
                }
                ))
            }
            isAlwaysFixed() {
                return this.implementation_.isAlwaysFixed()
            }
            updateLayoutBox(t, e=!1) {
                this.Ud = t.width;
                this.df = t.height;
                if (this.isBuilt())
                    this.onMeasure(e)
            }
            onMeasure(t=!1) {
                this.isBuilt();
                try {
                    if (this.implementation_.onLayoutMeasure(),
                    t)
                        this.implementation_.onMeasureChanged()
                } catch (t) {
                    kr(t, this)
                }
            }
            Fd() {
                void 0 !== this.sizerElement || "responsive" !== this.layout_ && "intrinsic" !== this.layout_ || (this.sizerElement = this.querySelector("i-amphtml-sizer"));
                return this.sizerElement || null
            }
            tf(t) {
                if ("responsive" === this.layout_)
                    Li(t, "paddingTop", "0");
                else if ("intrinsic" === this.layout_) {
                    var e = t.querySelector(".i-amphtml-intrinsic-sizer");
                    e && e.setAttribute("src", "")
                }
            }
            applySizesAndMediaQuery() {
                void 0 === this.Db && (this.Db = this.getAttribute("media") || null);
                this.Db && this.classList.toggle("i-amphtml-hidden-by-media-query", !this.ownerDocument.defaultView.matchMedia(this.Db).matches);
                if (void 0 === this.Tb) {
                    var t = this.getAttribute("sizes");
                    this.Tb = !this.hasAttribute("disable-inline-width") && t ? Rs(t) : null
                }
                this.Tb && Li(this, "width", this.Tb.select(this.ownerDocument.defaultView));
                void 0 === this.tb && "responsive" === this.layout_ && (this.tb = (t = this.getAttribute("heights")) ? Rs(t, !0) : null);
                this.tb && (t = this.Fd()) && Li(t, "paddingTop", this.tb.select(this.ownerDocument.defaultView))
            }
            applySize(t, e, i) {
                var r = this.Fd();
                r && (this.sizerElement = null,
                this.tf(r),
                this.jf((()=>{
                    r && r.parentElement && r.parentElement.removeChild(r)
                }
                )));
                void 0 !== t && Li(this, "height", t, "px");
                void 0 !== e && Li(this, "width", e, "px");
                i && (null != i.top && Li(this, "marginTop", i.top, "px"),
                null != i.right && Li(this, "marginRight", i.right, "px"),
                null != i.bottom && Li(this, "marginBottom", i.bottom, "px"),
                null != i.left && Li(this, "marginLeft", i.left, "px"));
                this.Xe() && this.Af();
                this.dispatchCustomEvent("amp:size-changed")
            }
            connectedCallback() {
                void 0 === zs && (zs = "content"in self.document.createElement("template"));
                zs || void 0 !== this.Ma || (this.Ma = !!At(this, "template"));
                if (!this.Ma && !this.wb && bt(this)) {
                    this.wb = !0;
                    this.everAttached || (this.classList.add("i-amphtml-element"),
                    this.classList.add("i-amphtml-notbuilt"),
                    this.classList.add("amp-notbuilt"));
                    if (!this.w) {
                        var t = this.ownerDocument.defaultView
                          , e = oe(t).getAmpDoc(this);
                        this.w = e;
                        var i = this.tagName.toLowerCase();
                        this.implementation_ instanceof gs && !e.declaresExtension(i) && he(t).installExtensionForDoc(e, i)
                    }
                    this.j || (this.j = de(this.w));
                    this.getResources().add(this);
                    if (this.everAttached) {
                        var r = this.reconstructWhenReparented();
                        r && this.fe();
                        this.isUpgraded() && (r && this.getResources().upgraded(this),
                        this.ea("amp:attached"))
                    } else {
                        this.everAttached = !0;
                        try {
                            ce(this.ownerDocument.defaultView).isIe();
                            var n = this.getAttribute("i-amphtml-layout");
                            if (n) {
                                var s = zi(n);
                                "responsive" != s && "intrinsic" != s || !this.firstElementChild ? "nodisplay" == s && (ji(this, !1),
                                this.style.display = "") : (this.sizerElement = this.querySelector("i-amphtml-sizer") || void 0) && this.sizerElement.setAttribute("slot", "i-amphtml-svc");
                                var a = s
                            } else {
                                var o = this.getAttribute("layout")
                                  , h = this.getAttribute("width")
                                  , l = this.getAttribute("height")
                                  , u = this.getAttribute("sizes")
                                  , c = this.getAttribute("heights")
                                  , d = o ? zi(o) : null;
                                rt(void 0 !== d, 'Invalid "layout" value: %s, %s', o, this);
                                var m = h && "auto" != h ? qi(h) : h;
                                rt(void 0 !== m, 'Invalid "width" value: %s, %s', h, this);
                                var p = l && "fluid" != l ? qi(l) : l;
                                rt(void 0 !== p, 'Invalid "height" value: %s, %s', l, this);
                                var f;
                                if (!(f = d && "fixed" != d && "fixed-height" != d || m && p)) {
                                    var g = this.tagName;
                                    g = g.toUpperCase();
                                    f = void 0 === Ui[g]
                                }
                                if (f) {
                                    var v = m;
                                    var b = p
                                } else {
                                    var y = this.tagName.toUpperCase();
                                    if (!Ui[y]) {
                                        var w = this.ownerDocument
                                          , A = y.replace(/^AMP\-/, "")
                                          , E = w.createElement(A);
                                        E.controls = !0;
                                        Ni(E, {
                                            position: "absolute",
                                            visibility: "hidden"
                                        });
                                        w.body.appendChild(E);
                                        Ui[y] = {
                                            width: (E.offsetWidth || 1) + "px",
                                            height: (E.offsetHeight || 1) + "px"
                                        };
                                        w.body.removeChild(E)
                                    }
                                    var P = Ui[y];
                                    v = m || "fixed-height" == d ? m : P.width;
                                    b = p || P.height
                                }
                                var _ = d ? d : v || b ? "fluid" == b ? "fluid" : !b || v && "auto" != v ? b && v && (u || c) ? "responsive" : "fixed" : "fixed-height" : "container";
                                "fixed" != _ && "fixed-height" != _ && "responsive" != _ && "intrinsic" != _ || rt(b, 'The "height" attribute is missing: %s', this);
                                "fixed-height" == _ && rt(!v || "auto" == v, 'The "width" attribute must be missing or "auto": %s', this);
                                "fixed" != _ && "responsive" != _ && "intrinsic" != _ || rt(v && "auto" != v, 'The "width" attribute must be present and not "auto": %s', this);
                                "responsive" == _ || "intrinsic" == _ ? rt(Yi(v) == Yi(b), 'Length units should be the same for "width" and "height": %s, %s, %s', h, l, this) : rt(null === c, '"heights" attribute must be missing: %s', this);
                                this.classList.add("i-amphtml-layout-" + _);
                                Wi(_) && this.classList.add("i-amphtml-layout-size-defined");
                                if ("nodisplay" == _)
                                    ji(this, !1),
                                    this.style.display = "";
                                else if ("fixed" == _)
                                    Ni(this, {
                                        width: v,
                                        height: b
                                    });
                                else if ("fixed-height" == _)
                                    Li(this, "height", b);
                                else if ("responsive" == _) {
                                    var S = this.ownerDocument.defaultView;
                                    null == Gi && (Gi = ai(S, "layout-aspect-ratio-css") && S.CSS && S.CSS.supports && S.CSS.supports("aspect-ratio: 1/1") || !1);
                                    if (Gi)
                                        Li(this, "aspect-ratio", `${Ji(v)}/${Ji(b)}`);
                                    else {
                                        var x = this.ownerDocument.createElement("i-amphtml-sizer");
                                        x.setAttribute("slot", "i-amphtml-svc");
                                        Ni(x, {
                                            paddingTop: Ji(b) / Ji(v) * 100 + "%"
                                        });
                                        this.insertBefore(x, this.firstChild);
                                        this.sizerElement = x
                                    }
                                } else if ("intrinsic" == _) {
                                    var O = Mi(this)(Vi);
                                    O.firstElementChild.setAttribute("src", `data:image/svg+xml;charset=utf-8,<svg height="${b}" width="${v}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`);
                                    this.insertBefore(O, this.firstChild);
                                    this.sizerElement = O
                                } else
                                    "fill" != _ && "container" != _ && ("flex-item" == _ ? (v && Li(this, "width", v),
                                    b && Li(this, "height", b)) : "fluid" == _ && (this.classList.add("i-amphtml-layout-awaiting-size"),
                                    v && Li(this, "width", v),
                                    Li(this, "height", 0)));
                                this.setAttribute("i-amphtml-layout", _);
                                a = _
                            }
                            this.layout_ = a
                        } catch (t) {
                            kr(t, this)
                        }
                        this.implementation_ instanceof gs || this.qe();
                        this.isUpgraded() || (this.classList.add("amp-unresolved"),
                        this.classList.add("i-amphtml-unresolved"),
                        this.ea("amp:stubbed"));
                        this.getResources().isIntersectionExperimentOn() && this.applySizesAndMediaQuery()
                    }
                    this.toggleLoading(!0)
                }
            }
            Xe() {
                return this.classList.contains("i-amphtml-layout-awaiting-size")
            }
            Af() {
                this.classList.remove("i-amphtml-layout-awaiting-size")
            }
            qe() {
                var e = this.implementation_;
                if (1 == this.Ca) {
                    this.Ca = 4;
                    var i = t.Date.now()
                      , r = e.upgradeCallback();
                    r ? "function" == typeof r.then ? r.then((t=>{
                        this.lc(t || e, i)
                    }
                    )).catch((t=>{
                        this.Ca = 3;
                        J(t)
                    }
                    )) : this.lc(r, i) : this.lc(e, i)
                }
            }
            disconnectedCallback() {
                this.disconnect(!1)
            }
            disconnect(t) {
                this.Ma || !this.wb || !t && bt(this) || (t && this.classList.remove("i-amphtml-element"),
                this.wb = !1,
                this.getResources().remove(this),
                this.implementation_.detachedCallback(),
                this.toggleLoading(!1))
            }
            dispatchCustomEvent(t, e) {
                e = e || {};
                var i = this.ownerDocument.createEvent("Event");
                i.data = e;
                i.initEvent(t, !0, !0);
                this.dispatchEvent(i)
            }
            ea() {}
            prerenderAllowed() {
                return this.implementation_.prerenderAllowed()
            }
            isBuildRenderBlocking() {
                return this.implementation_.isBuildRenderBlocking()
            }
            createPlaceholder() {
                return this.implementation_.createPlaceholderCallback()
            }
            createLoaderLogo() {
                return this.implementation_.createLoaderLogoCallback()
            }
            renderOutsideViewport() {
                return this.implementation_.renderOutsideViewport()
            }
            idleRenderOutsideViewport() {
                return this.implementation_.idleRenderOutsideViewport()
            }
            getLayoutBox() {
                return this.Ja().getLayoutBox()
            }
            getPageLayoutBox() {
                return this.Ja().getPageLayoutBox()
            }
            getOwner() {
                return this.Ja().getOwner()
            }
            getIntersectionChangeEntry() {
                var t = this.implementation_.getIntersectionElementLayoutBox()
                  , e = this.getOwner()
                  , i = this.implementation_.getViewport().getRect();
                var r = e && e.getLayoutBox();
                var n = jt(t, r, i) || Lt(0, 0, 0, 0);
                e = n.width * n.height;
                var s = t.width * t.height;
                e = 0 === s ? 0 : e / s;
                if (s = i)
                    n = Ft(n, -i.left, -i.top),
                    t = Ft(t, -i.left, -i.top),
                    s = Ft(s, -i.left, -i.top);
                return i = {
                    time: "undefined" !== typeof performance && performance.now ? performance.now() : Date.now() - Ms,
                    rootBounds: s,
                    boundingClientRect: t,
                    intersectionRect: n,
                    intersectionRatio: e
                }
            }
            Ja() {
                return this.getResources().getResourceForElement(this)
            }
            getResourceId() {
                return this.Ja().getId()
            }
            isRelayoutNeeded() {
                return this.implementation_.isRelayoutNeeded()
            }
            getImpl(t=!0) {
                return (t ? this.whenBuilt() : this.whenUpgraded()).then((()=>this.implementation_))
            }
            getLayout() {
                return this.layout_
            }
            layoutCallback(t) {
                this.isBuilt();
                if (t.aborted)
                    return Promise.reject(Lr());
                this.ea("amp:load-start");
                var e = 0 == this.$;
                this.D.reset("unload");
                e && this.D.signal("load-start");
                this.de && this.Ed().startLayout();
                this.toggleLoading(!0);
                var i = ht((()=>this.implementation_.layoutCallback()));
                this.preconnect(!0);
                this.classList.add("i-amphtml-layout");
                return i.then((()=>{
                    if (t.aborted)
                        throw Lr();
                    e && this.D.signal("load-end");
                    this.readyState = "complete";
                    this.$++;
                    this.toggleLoading(!1);
                    this.Cc || (this.implementation_.firstLayoutCompleted(),
                    this.Cc = !0,
                    this.ea("amp:load-end"))
                }
                ), (i=>{
                    if (t.aborted)
                        throw Lr();
                    e && this.D.rejectSignal("load-end", i);
                    this.$++;
                    this.toggleLoading(!1);
                    throw i
                }
                ))
            }
            isInViewport() {
                return this.xb
            }
            viewportCallback(t) {
                t != this.xb && this.ownerDocument && this.ownerDocument.defaultView && (this.xb = t,
                this.isBuilt() && this.re(t))
            }
            re(t) {
                this.implementation_.inViewport_ = t;
                this.implementation_.viewportCallback(t);
                t && this.de && this.Ed().enterViewport()
            }
            isPaused() {
                return this.Va
            }
            pauseCallback() {
                this.Va || (this.Va = !0,
                this.viewportCallback(!1),
                this.isBuilt() && this.implementation_.pauseCallback())
            }
            resumeCallback() {
                this.Va && (this.Va = !1,
                this.isBuilt() && this.implementation_.resumeCallback())
            }
            unlayoutCallback() {
                if (!this.isBuilt())
                    return !1;
                this.D.signal("unload");
                var t = this.implementation_.unlayoutCallback();
                t && this.fe();
                this.ea("amp:unload");
                return t
            }
            fe() {
                this.$ = 0;
                this.Cc = !1;
                this.D.reset("render-start");
                this.D.reset("load-start");
                this.D.reset("load-end");
                this.D.reset("ini-load")
            }
            unlayoutOnPause() {
                return this.implementation_.unlayoutOnPause()
            }
            reconstructWhenReparented() {
                return this.implementation_.reconstructWhenReparented()
            }
            collapse() {
                this.implementation_.collapse()
            }
            collapsedCallback(t) {
                this.implementation_.collapsedCallback(t)
            }
            expand() {
                this.implementation_.expand()
            }
            expandedCallback(t) {
                this.implementation_.expandedCallback(t)
            }
            mutatedAttributesCallback(t) {
                this.implementation_.mutatedAttributesCallback(t)
            }
            enqueAction(t) {
                this.isBuilt() ? this.Cd(t, !1) : (void 0 === this.ka && (this.ka = []),
                this.ka.push(t))
            }
            Ie() {
                if (this.ka) {
                    var t = this.ka;
                    this.ka = null;
                    t.forEach((t=>{
                        this.Cd(t, !0)
                    }
                    ))
                }
            }
            Cd(t, e) {
                try {
                    this.implementation_.executeAction(t, e)
                } catch (e) {
                    J("Action execution failed:", e, t.node.tagName, t.method)
                }
            }
            Ne() {
                var t = this.getAttribute("data-block-on-consent");
                if (null === t)
                    if ((t = this.getAmpDoc().getMetaByName("amp-consent-blocking")) ? (t = t.toUpperCase().replace(/\s+/g, ""),
                    t = t.split(",").includes(this.tagName)) : t = !1,
                    t)
                        t = "default",
                        this.setAttribute("data-block-on-consent", t);
                    else
                        return null;
                return "" == t || "default" == t ? this.implementation_.getConsentPolicy() : t
            }
            getRealChildNodes() {
                return _t(this, (t=>!qs(t)))
            }
            getRealChildren() {
                return Et(this, (t=>!qs(t)))
            }
            getPlaceholder() {
                return Pt(this, (t=>t.hasAttribute("placeholder") && !("placeholder"in t)))
            }
            togglePlaceholder(t) {
                if (t) {
                    var e = this.getPlaceholder();
                    e && e.classList.remove("amp-hidden")
                } else {
                    /^[\w-]+$/.test("placeholder");
                    e = (void 0 !== lt ? lt : lt = ut(this)) ? this.querySelectorAll("> [placeholder]".replace(/^|,/g, "$&:scope ")) : Ot(this, "> [placeholder]");
                    for (var i = 0; i < e.length; i++)
                        "placeholder"in e[i] || e[i].classList.add("amp-hidden")
                }
            }
            getFallback() {
                return St(this, "fallback")
            }
            toggleFallback(t) {
                var e = this.Ja().getState();
                if (!t || 0 != e && 1 != e && 2 != e)
                    if (this.classList.toggle("amp-notsupported", t),
                    1 == t) {
                        var i = this.getFallback();
                        i && $t(this.getAmpDoc(), "owners").scheduleLayout(this, i)
                    }
            }
            renderStarted() {
                this.D.signal("render-start");
                this.togglePlaceholder(!1);
                this.toggleLoading(!1)
            }
            bf(t) {
                var e = 0 < this.$ || this.D.get("render-start");
                (t = "nodisplay" == this.layout_ || this.hasAttribute("noloading") || e && !t) || (t = this.tagName.toUpperCase(),
                t = Hi[t] || ("AMP-VIDEO" == t ? !1 : $i.test(t)),
                t = !t);
                return t || qs(this) ? !1 : !0
            }
            toggleLoading(t, e=!1) {
                if (this.ownerDocument && this.ownerDocument.defaultView) {
                    var i = Gt(this.getAmpDoc(), "loadingIndicator");
                    i && ((t = t && this.bf(e)) ? i.track(this) : i.untrack(this))
                }
            }
            Ed() {
                this.Gc || (this.Gc = new ys(this.ownerDocument.defaultView,this.getLayoutPriority()));
                return this.Gc
            }
            getOverflowElement() {
                void 0 === this.U && (this.U = St(this, "overflow")) && (this.U.hasAttribute("tabindex") || this.U.setAttribute("tabindex", "0"),
                this.U.hasAttribute("role") || this.U.setAttribute("role", "button"));
                return this.U
            }
            overflowCallback(t, e, i) {
                this.getOverflowElement();
                this.U && (this.U.classList.toggle("amp-visible", t),
                this.U.onclick = t ? ()=>{
                    var t = ue(this.getAmpDoc());
                    t.forceChangeSize(this, e, i);
                    t.mutateElement(this, (()=>{
                        this.overflowCallback(!1, e, i)
                    }
                    ))
                }
                : null)
            }
            jf(t) {
                this.w ? ue(this.getAmpDoc()).mutateElement(this, t, !1) : t()
            }
        }
        ;
        t.__AMP_BASE_CE_CLASS = i;
        return t.__AMP_BASE_CE_CLASS
    }
    function qs(t) {
        var e;
        return (e = (e = "string" == typeof t ? t : t.tagName) && e.toLowerCase().startsWith("i-")) || t.tagName && (t.hasAttribute("placeholder") || t.hasAttribute("fallback") || t.hasAttribute("overflow")) ? !0 : !1
    }
    function Xs(t) {
        t.__AMP_EXTENDED_ELEMENTS || (t.__AMP_EXTENDED_ELEMENTS = {});
        return t.__AMP_EXTENDED_ELEMENTS
    }
    function Ks(t, e) {
        try {
            t.upgrade(e)
        } catch (e) {
            kr(e, t)
        }
    }
    function Ys(t) {
        se(t.getHeadNode()).forEach((e=>{
            t.declareExtension(e);
            Js(t.win, e)
        }
        ))
    }
    function Js(t, e) {
        Xs(t)[e] || Qs(t, e, gs)
    }
    function Qs(t, e, i) {
        Xs(t)[e] = i;
        var r = Ws(t);
        var n = class extends r {
        }
        ;
        r = n;
        t.customElements.define(e, r)
    }
    var Zs = "alt aria-describedby aria-label aria-labelledby crossorigin referrerpolicy sizes src srcset title".split(" ");
    function ta(t, e) {
        if (t.F && !t.element.getAttribute("sizes")) {
            var i = t.element.getAttribute("srcset");
            if (i && !/[0-9]+x(?:,|$)/.test(i) && (i = t.element.getLayoutWidth(),
            ea(t, i))) {
                var r = t.getViewport().getWidth()
                  , n = `(max-width: ${r}px) ${i}px, `
                  , s = i + "px";
                "fixed" !== t.getLayout() && (s = Math.max(Math.round(100 * i / r), 100) + "vw");
                var a = n + s;
                e ? t.F.setAttribute("sizes", a) : t.mutateElement((()=>{
                    t.F.setAttribute("sizes", a)
                }
                ));
                t.ke = i
            }
        }
    }
    function ea(t, e) {
        return t.F.hasAttribute("sizes") ? e > t.ke : !0
    }
    function ia(t) {
        !t.kb && t.F.classList.contains("i-amphtml-ghost") && t.getVsync().mutate((()=>{
            t.F.classList.remove("i-amphtml-ghost");
            t.toggleFallback(!1)
        }
        ))
    }
    function ra(t) {
        t.kb && (t.getVsync().mutate((()=>{
            t.F.classList.add("i-amphtml-ghost");
            t.toggleFallback(!0);
            t.togglePlaceholder(!1)
        }
        )),
        t.kb = !1)
    }
    var na = class extends lr {
        constructor(t) {
            super(t);
            this.kb = !0;
            this.Xb = this.Yb = this.F = this.Qc = null;
            this.ke = 0
        }
        mutatedAttributesCallback(t) {
            if (this.F) {
                var e = Zs.filter((e=>void 0 !== t[e]));
                t.src && !t.srcset && this.element.hasAttribute("srcset") && (this.element.removeAttribute("srcset"),
                e.push("srcset"),
                this.user().warn("amp-img", "Removed [srcset] since [src] was mutated. Recommend adding a [srcset] binding to support responsive images.", this.element));
                this.propagateAttributes(e, this.F, !0);
                this.propagateDataset(this.F)
            }
        }
        onMeasureChanged() {
            ta(this, !1)
        }
        preconnectCallback(t) {
            var e = this.element.getAttribute("src");
            e ? Ut(this.win, "preconnect").url(this.getAmpDoc(), e, t) : (e = this.element.getAttribute("srcset")) && (e = /\S+/.exec(e)) && Ut(this.win, "preconnect").url(this.getAmpDoc(), e[0], t)
        }
        isLayoutSupported(t) {
            return Wi(t)
        }
        vb() {
            if (!this.F) {
                this.kb = !this.element.hasAttribute("fallback");
                this.element.hasAttribute("i-amphtml-ssr") && (this.F = Ct(this.element, "> img:not([placeholder])"));
                this.F = this.F || new Image;
                this.F.setAttribute("decoding", "async");
                this.element.id && this.F.setAttribute("amp-img-id", this.element.id);
                "img" == this.element.getAttribute("role") && (this.element.removeAttribute("role"),
                this.user().error("amp-img", "Setting role=img on amp-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element."));
                ta(this, !0);
                this.propagateAttributes(Zs, this.F);
                this.propagateDataset(this.F);
                this.applyFillContent(this.F, !0);
                var t = this.element
                  , e = this.F;
                t.hasAttribute("object-fit") && Li(e, "object-fit", t.getAttribute("object-fit"));
                t.hasAttribute("object-position") && Li(e, "object-position", t.getAttribute("object-position"));
                this.element.appendChild(this.F)
            }
        }
        prerenderAllowed() {
            null == this.Qc && (this.Qc = !this.element.hasAttribute("noprerender"));
            return this.Qc
        }
        reconstructWhenReparented() {
            return !1
        }
        layoutCallback() {
            this.vb();
            var t = this.F;
            this.Yb = ir(t, "load", (()=>ia(this)));
            this.Xb = ir(t, "error", (()=>ra(this)));
            return 0 >= this.element.getLayoutWidth() ? r() : this.loadPromise(t)
        }
        unlayoutCallback() {
            this.Xb && (this.Xb(),
            this.Xb = null);
            this.Yb && (this.Yb(),
            this.Yb = null);
            var t = this.F;
            t && !t.complete && (t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=",
            t.parentElement && t.parentElement.removeChild(t),
            this.F = null);
            return !0
        }
        firstLayoutCompleted() {
            var t = this.getPlaceholder();
            t && t.classList.contains("i-amphtml-blurry-placeholder") ? ki(t, {
                opacity: 0
            }) : this.togglePlaceholder(!1)
        }
        propagateDataset(t) {
            for (var e in t.dataset)
                e in this.element.dataset || delete t.dataset[e];
            for (var i in this.element.dataset)
                i.startsWith("ampBind") && "ampBind" !== i || t.dataset[i] !== this.element.dataset[i] && (t.dataset[i] = this.element.dataset[i])
        }
    }
    ;
    function sa(t, e, i, r) {
        e.waitForBodyOpen().then((e=>{
            fe(t.win).mutate((()=>{
                e.classList.toggle(i, r)
            }
            ))
        }
        ))
    }
    var aa = class {
        constructor(t) {
            this.win = t;
            this.Ce = this.lf.bind(this);
            this.De = this.mf.bind(this);
            this.fc = this.pd = this.hc = null;
            this.tc = "ontouchstart"in t || void 0 !== t.navigator.maxTouchPoints && 0 < t.navigator.maxTouchPoints || void 0 !== t.DocumentTouch;
            this.Oa = !1;
            this.win.document.addEventListener("keydown", this.Ce);
            this.win.document.addEventListener("mousedown", this.De);
            this.sc = !0;
            this.Xd = 0;
            this.Hf = new Xn;
            this.Yd = new Xn;
            this.Fc = new Xn;
            this.tc && (this.sc = !this.tc,
            this.hc = this.nf.bind(this),
            rr(t.document, "mousemove", this.hc))
        }
        setupInputModeClasses(t) {
            this.onTouchDetected((e=>{
                sa(this, t, "amp-mode-touch", e)
            }
            ), !0);
            this.onMouseDetected((e=>{
                sa(this, t, "amp-mode-mouse", e)
            }
            ), !0);
            this.onKeyboardStateChanged((e=>{
                sa(this, t, "amp-mode-keyboard-active", e)
            }
            ), !0)
        }
        isTouchDetected() {
            return this.tc
        }
        onTouchDetected(t, e) {
            e && t(this.isTouchDetected());
            return this.Hf.add(t)
        }
        isMouseDetected() {
            return this.sc
        }
        onMouseDetected(t, e) {
            e && t(this.isMouseDetected());
            return this.Yd.add(t)
        }
        isKeyboardActive() {
            return this.Oa
        }
        onKeyboardStateChanged(t, e) {
            e && t(this.isKeyboardActive());
            return this.Fc.add(t)
        }
        lf(t) {
            this.Oa || t.defaultPrevented || (t = t.target,
            t && ("INPUT" == t.tagName || "TEXTAREA" == t.tagName || "SELECT" == t.tagName || "OPTION" == t.tagName || t.hasAttribute("contenteditable"))) || (this.Oa = !0,
            this.Fc.fire(!0))
        }
        mf() {
            this.Oa && (this.Oa = !1,
            this.Fc.fire(!1))
        }
        nf(t) {
            if (t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents)
                this.Wd();
            else {
                this.fc || (this.fc = this.hf.bind(this),
                this.pd = this.Wd.bind(this));
                var e, i = nr(this.win.document, (t=>{
                    e = t
                }
                ));
                return me(this.win).timeoutPromise(300, i).then(this.pd, (()=>{
                    e && e();
                    this.fc()
                }
                ))
            }
        }
        hf() {
            this.sc = !0;
            this.Yd.fire(!0)
        }
        Wd() {
            this.Xd++;
            3 >= this.Xd && rr(this.win.document, "mousemove", this.hc)
        }
    }
    ;
    var oa = class extends lr {
        isLayoutSupported(t) {
            return "container" == t || Wi(t)
        }
        buildCallback() {
            if ("container" != this.getLayout()) {
                var t = this.win.document.createElement("div");
                this.applyFillContent(t);
                this.getRealChildNodes().forEach((e=>{
                    t.appendChild(e)
                }
                ));
                this.element.appendChild(t)
            }
        }
        prerenderAllowed() {
            return !0
        }
    }
    ;
    function ha(t) {
        return O(t) ? t : [t]
    }
    function la(t, e, i, r) {
        ua(t, e, r, (r=>{
            0 === r.getState() ? r.whenBuilt().then((()=>{
                ma(t, r, !i, e.getLayoutPriority())
            }
            )) : ma(t, r, !i, e.getLayoutPriority())
        }
        ))
    }
    function ua(t, e, i, r) {
        i.forEach((i=>{
            e.element.contains(i);
            da(t, i, r)
        }
        ))
    }
    function ca(t, e, i, r) {
        var n = e.isInViewport() && r;
        ua(t, e, i, (t=>{
            t.setInViewport(n)
        }
        ))
    }
    function da(t, e, i) {
        if (e.classList.contains("i-amphtml-element"))
            i(t.j.getResourceForElement(e)),
            (e = e.getPlaceholder()) && da(t, e, i);
        else {
            e = e.getElementsByClassName("i-amphtml-element");
            var r = [];
            for (var n = 0; n < e.length; n++) {
                var s = e[n];
                var a = !1;
                for (var o = 0; o < r.length; o++)
                    if (r[o].contains(s)) {
                        a = !0;
                        break
                    }
                a || (r.push(s),
                i(t.j.getResourceForElement(s)))
            }
        }
    }
    function ma(t, e, i, r) {
        e.measure();
        2 === e.getState() && e.isDisplayed() && t.j.scheduleLayoutOrPreload(e, !i, r)
    }
    var pa = class {
        constructor(t) {
            this.j = de(t)
        }
        setOwner(t, e) {
            e.contains(t);
            ws(t) && ws(t).updateOwner(e);
            t.__AMP__OWNER = e;
            t = t.getElementsByClassName("i-amphtml-element");
            for (e = 0; e < t.length; e++) {
                var i = t[e];
                ws(i) && ws(i).updateOwner(void 0)
            }
        }
        schedulePreload(t, e) {
            la(this, this.j.getResourceForElement(t), !1, ha(e))
        }
        scheduleLayout(t, e) {
            la(this, this.j.getResourceForElement(t), !0, ha(e))
        }
        schedulePause(t, e) {
            var i = this.j.getResourceForElement(t);
            e = ha(e);
            ua(this, i, e, (t=>{
                t.pause()
            }
            ))
        }
        scheduleResume(t, e) {
            t = this.j.getResourceForElement(t);
            e = ha(e);
            ua(this, t, e, (t=>{
                t.resume()
            }
            ))
        }
        scheduleUnlayout(t, e) {
            t = this.j.getResourceForElement(t);
            e = ha(e);
            ua(this, t, e, (t=>{
                t.unlayout()
            }
            ))
        }
        updateInViewport(t, e, i) {
            ca(this, this.j.getResourceForElement(t), ha(e), i)
        }
        requireLayout(t, e) {
            var i = [];
            da(this, t, (t=>{
                4 != t.getState() && (3 != t.getState() ? i.push(t.whenBuilt().then((()=>{
                    t.measure();
                    if (t.isDisplayed())
                        return this.j.scheduleLayoutOrPreload(t, !0, e, !0),
                        t.loadedOnce()
                }
                ))) : t.isDisplayed() && i.push(t.loadedOnce()))
            }
            ));
            return Promise.all(i)
        }
    }
    ;
    function fa(t, e) {
        if ("referrerPolicy"in Image.prototype)
            return ga(t, e, !0);
        var i = vt(t.document);
        i.onload = ()=>{
            ga(i.contentWindow, e)
        }
        ;
        t.document.body.appendChild(i);
        return i
    }
    function ga(t, e, i=!1) {
        t = new t.Image;
        i && (t.referrerPolicy = "no-referrer");
        t.src = e;
        return t
    }
    function va(t) {
        rt(/^(https:\/\/|\/\/)/i.test(t), 'The <amp-pixel> src attribute must start with "https://" or "//". Invalid value: ' + t);
        return t
    }
    var ba = class extends lr {
        constructor(t) {
            super(t);
            this.Zc = null
        }
        isLayoutSupported() {
            return !0
        }
        buildCallback() {
            this.element.setAttribute("aria-hidden", "true");
            (this.Mb = this.element.getAttribute("referrerpolicy")) && rt("no-referrer" == this.Mb, `amp-pixel: invalid "referrerpolicy" value "${this.Mb}". Only "no-referrer" is supported`);
            this.element.hasAttribute("i-amphtml-ssr") && this.element.querySelector("img") || this.getAmpDoc().whenFirstVisible().then(this.If.bind(this))
        }
        If() {
            if (this.Zc)
                return it().error("amp-pixel", "duplicate pixel"),
                this.Zc;
            this.Zc = me(this.win).promise(1).then((()=>{
                var t = this.element.getAttribute("src");
                if (t)
                    return Gt(this.element, "url-replace").expandUrlAsync(va(t)).then((t=>{
                        if (this.win) {
                            var e = this.win
                              , i = this.Mb;
                            i && "no-referrer" !== i && tt().error("pixel", "Unsupported referrerPolicy: %s", i);
                            return "no-referrer" === i ? fa(e, t) : ga(e, t)
                        }
                    }
                    ))
            }
            ))
        }
    }
    ;
    function ya(t, e, i) {
        if (!t.J.userAgent)
            return 0;
        t = t.J.userAgent.match(e);
        return !t || i >= t.length ? 0 : parseInt(t[i], 10)
    }
    var wa = class {
        constructor(t) {
            this.J = t.navigator;
            this.h = t
        }
        isAndroid() {
            return /Android/i.test(this.J.userAgent)
        }
        isIos() {
            return /iPhone|iPad|iPod/i.test(this.J.userAgent)
        }
        isSafari() {
            return /Safari/i.test(this.J.userAgent) && !this.isChrome() && !this.isIe() && !this.isEdge() && !this.isFirefox() && !this.isOpera()
        }
        isChrome() {
            return /Chrome|CriOS/i.test(this.J.userAgent) && !this.isEdge() && !this.isOpera()
        }
        isFirefox() {
            return /Firefox|FxiOS/i.test(this.J.userAgent) && !this.isEdge()
        }
        isOpera() {
            return /OPR\/|Opera|OPiOS/i.test(this.J.userAgent)
        }
        isIe() {
            return !1
        }
        isEdge() {
            return /Edge/i.test(this.J.userAgent)
        }
        isWebKit() {
            return /WebKit/i.test(this.J.userAgent) && !this.isEdge()
        }
        isWindows() {
            return /Windows/i.test(this.J.userAgent)
        }
        isStandalone() {
            return this.isIos() && this.J.standalone || this.isChrome() && this.h.matchMedia("(display-mode: standalone)").matches
        }
        isBot() {
            return /bot/i.test(this.J.userAgent)
        }
        getMajorVersion() {
            return this.isSafari() ? this.isIos() ? this.getIosMajorVersion() || 0 : ya(this, /\sVersion\/(\d+)/, 1) : this.isChrome() ? ya(this, /(Chrome|CriOS)\/(\d+)/, 2) : this.isFirefox() ? ya(this, /(Firefox|FxiOS)\/(\d+)/, 2) : this.isOpera() ? ya(this, /(OPR|Opera|OPiOS)\/(\d+)/, 2) : this.isIe() ? ya(this, /MSIE\s(\d+)/, 1) : this.isEdge() ? ya(this, /Edge\/(\d+)/, 1) : 0
        }
        getIosVersionString() {
            if (!this.J.userAgent || !this.isIos())
                return "";
            var t = this.J.userAgent.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/);
            return t ? t = t[1].replace(/_/g, ".") : ""
        }
        getIosMajorVersion() {
            var t = this.getIosVersionString();
            return "" == t ? null : Number(t.split(".")[0])
        }
    }
    ;
    function Aa(t) {
        return "loading" != t.readyState && "uninitialized" != t.readyState
    }
    function Ea(t) {
        return "complete" == t.readyState
    }
    function Pa(t, e) {
        _a(t, Aa, e)
    }
    function _a(t, e, i) {
        var r = e(t);
        if (r)
            i(t);
        else {
            var n = ()=>{
                e(t) && (r || (r = !0,
                i(t)),
                t.removeEventListener("readystatechange", n))
            }
            ;
            t.addEventListener("readystatechange", n)
        }
    }
    function Sa(t) {
        return new Promise((e=>{
            Pa(t, e)
        }
        ))
    }
    function xa(t) {
        return new Promise((e=>{
            _a(t, Ea, e)
        }
        ))
    }
    var Oa = ["<link rel=preload referrerpolicy=origin>"];
    var Ca = null;
    function Ma(t) {
        return t.startsWith("https:") || t.startsWith("http:") ? !0 : !1
    }
    function Ra(t, e) {
        if (!t.qb.preconnect && (t.ha.isSafari() || t.ha.isIos())) {
            var i = Date.now();
            t.Ua[e] = i + 18e4;
            t = new XMLHttpRequest;
            t.open("HEAD", e + "/robots.txt?_AMP_safari_preconnect_polyfill_cachebust=" + (i - i % 18e4), !0);
            t.withCredentials = !0;
            t.send()
        }
    }
    var Ta = class {
        constructor(t) {
            this.oc = t.document;
            this.uc = t.document.head;
            this.Ua = {};
            this.ue = {};
            this.ha = ce(t);
            this.Ua[Ge(t.location.href).origin] = !0;
            t: {
                if (!Ca) {
                    var e = t.document.createElement("link");
                    var i = e.relList;
                    e.as = "invalid-value";
                    if (!i || !i.supports) {
                        e = {};
                        break t
                    }
                    Ca = {
                        preconnect: i.supports("preconnect"),
                        preload: i.supports("preload"),
                        onlyValidAs: "invalid-value" != e.as
                    }
                }
                e = Ca
            }
            this.qb = e;
            this.ja = me(t)
        }
        url(t, e, i) {
            t.whenFirstVisible().then((()=>{
                this.ib(t, e, i)
            }
            ))
        }
        ib(t, e, i) {
            if (Ma(e)) {
                ({origin: t} = Ge(e));
                e = Date.now();
                var r = this.Ua[t];
                if (r && e < r)
                    i && (this.Ua[t] = e + 18e4);
                else {
                    this.Ua[t] = e + (i ? 18e4 : 1e4);
                    if (!this.qb.preconnect) {
                        var n = this.oc.createElement("link");
                        n.setAttribute("rel", "dns-prefetch");
                        n.setAttribute("href", t);
                        this.uc.appendChild(n)
                    }
                    var s = this.oc.createElement("link");
                    s.setAttribute("rel", "preconnect");
                    s.setAttribute("href", t);
                    s.setAttribute("referrerpolicy", "origin");
                    this.uc.appendChild(s);
                    this.ja.delay((()=>{
                        n && n.parentNode && n.parentNode.removeChild(n);
                        s.parentNode && s.parentNode.removeChild(s)
                    }
                    ), 1e4);
                    Ra(this, t)
                }
            }
        }
        preload(t, e, i) {
            Ma(e) && !this.ue[e] && (this.ue[e] = !0,
            this.url(t, e, !0),
            this.qb.preload && ("document" == i && this.ha.isSafari() || t.whenFirstVisible().then((()=>{
                var t = Mi(this.oc)(Oa);
                t.setAttribute("href", e);
                t.as = this.qb.onlyValidAs ? "fetch" : "";
                this.uc.appendChild(t)
            }
            ))))
        }
    }
    ;
    var Ia = class {
        constructor(t, e, i) {
            this.ja = me(t);
            this.Te = e;
            this.He = i || 0;
            this.Y = -1;
            this.Lc = 0;
            this.Tc = !1;
            this.Ee = ()=>{
                this.Ib()
            }
        }
        isPending() {
            return -1 != this.Y
        }
        schedule(t) {
            t = t || this.He;
            this.Tc && 10 > t && (t = 10);
            var e = Date.now() + t;
            return !this.isPending() || -10 > e - this.Lc ? (this.cancel(),
            this.Lc = e,
            this.Y = this.ja.delay(this.Ee, t),
            !0) : !1
        }
        Ib() {
            this.Y = -1;
            this.Lc = 0;
            this.Tc = !0;
            this.Te();
            this.Tc = !1
        }
        cancel() {
            this.isPending() && (this.ja.cancel(this.Y),
            this.Y = -1)
        }
    }
    ;
    function Da(t) {
        return t.hasAttribute("autofocus") ? t : t.querySelector("[autofocus]")
    }
    var ka = /^i-amphtml-/;
    function La(t, e) {
        var i = e.node
          , n = e.caller
          , s = e.method
          , a = e.args
          , o = (i.ownerDocument || i).defaultView;
        e = r();
        n.tagName.startsWith("AMP-") && (e = n.getImpl().then((t=>{
            "function" == typeof t.throwIfCannotNavigate && t.throwIfCannotNavigate()
        }
        )));
        return e.then((()=>{
            $t(t.ampdoc, "navigation").navigateTo(o, a.url, `AMP.${s}`, {
                target: a.target,
                opener: a.opener
            })
        }
        ), (t=>{
            tt().error("STANDARD-ACTIONS", t.message)
        }
        ))
    }
    function Na(t, e) {
        var i = e.node;
        i = (i.ownerDocument || i).defaultView;
        var n = i.parent != i;
        var s = !1;
        i.opener && t.ampdoc.isSingleDoc() && !n && (i.close(),
        s = i.closed);
        return s ? r() : La(t, e)
    }
    function ja(t, e) {
        t.classList.contains("i-amphtml-element") ? t.expand() : ji(t, !0);
        e && Tt(e)
    }
    var Fa = class {
        constructor(t) {
            this.ampdoc = t;
            var e = t.getHeadNode();
            this.wa = ue(t);
            this.$b = ge(t);
            t = Gt(e, "action");
            t.addGlobalTarget("AMP", this.Oe.bind(this));
            t.addGlobalMethodHandler("hide", this.Hd.bind(this));
            t.addGlobalMethodHandler("show", this.Jd.bind(this));
            t.addGlobalMethodHandler("toggleVisibility", this.Re.bind(this));
            t.addGlobalMethodHandler("scrollTo", this.Id.bind(this));
            t.addGlobalMethodHandler("focus", this.Pe.bind(this));
            t.addGlobalMethodHandler("toggleClass", this.Qe.bind(this))
        }
        Oe(t) {
            if (!t.satisfiesTrust(2))
                return null;
            var e = t.node
              , i = t.method
              , r = t.args
              , n = (e.ownerDocument || e).defaultView;
            switch (i) {
            case "pushState":
            case "setState":
                return ne(e.nodeType === Node.DOCUMENT_NODE ? e.documentElement : e).then((e=>{
                    rt(e, "AMP-BIND is not installed.");
                    return e.invoke(t)
                }
                ));
            case "navigateTo":
                return La(this, t);
            case "closeOrNavigateTo":
                return Na(this, t);
            case "scrollTo":
                return rt(r.id, "AMP.scrollTo must provide element ID"),
                t.node = qt(e).getElementById(r.id),
                this.Id(t);
            case "goBack":
                return $t(this.ampdoc, "history").goBack(!(!r || !0 !== r.navigate)),
                null;
            case "print":
                return n.print(),
                null;
            case "optoutOfCid":
                return Jt(Xt(this.ampdoc), "cid").then((t=>t.optOut())).catch((t=>{
                    it().error("STANDARD-ACTIONS", "Failed to opt out of CID", t)
                }
                ))
            }
            throw tt().createError("Unknown AMP action ", i)
        }
        Id(t) {
            var e = t.node;
            var i = (t = t.args) && t.position
              , r = t && t.duration;
            i && !["top", "bottom", "center"].includes(i) && (i = void 0);
            R(r) || (r = void 0);
            return this.$b.animateScrollIntoView(e, i, r)
        }
        Pe(t) {
            Tt(t.node);
            return null
        }
        Hd(t) {
            var e = t.node;
            e.classList.contains("i-amphtml-element") ? this.wa.mutateElement(e, (()=>e.collapse()), !0) : this.wa.mutateElement(e, (()=>ji(e, !1)));
            return null
        }
        Jd(t) {
            var e = t.node
              , i = e.ownerDocument.defaultView;
            if (e.classList.contains("i-amphtml-layout-nodisplay"))
                return null;
            this.wa.measureElement((()=>{
                "none" != (i.getComputedStyle(e) || st()).display || e.hasAttribute("hidden")
            }
            ));
            var r = Da(e);
            r && ce(i).isIos() ? (ja(e, r),
            this.wa.mutateElement(e, (()=>{}
            ))) : this.wa.mutateElement(e, (()=>{
                ja(e, r)
            }
            ));
            return null
        }
        Re(t) {
            return t.node.hasAttribute("hidden") ? this.Jd(t) : this.Hd(t)
        }
        Qe(t) {
            var e = t.node
              , i = t.args
              , r = tt().assertString(i["class"], "Argument 'class' must be a string.");
            if (ka.test(r))
                return null;
            this.wa.mutateElement(e, (()=>{
                if (void 0 !== i.force) {
                    var t = tt().assertBoolean(i.force, "Optional argument 'force' must be a boolean.");
                    e.classList.toggle(r, t)
                } else
                    e.classList.toggle(r)
            }
            ));
            return null
        }
    }
    ;
    var Va = ()=>{}
    ;
    function Ba(t, e) {
        var i = e.__AMP_IMPL_;
        if (i)
            return Promise.resolve(i);
        i = "";
        var r = e.tagName;
        "TEMPLATE" == r ? i = e.getAttribute("type") : "SCRIPT" == r && (i = e.getAttribute("template"));
        rt(i, "Type must be specified: %s", e);
        if (r = e.__AMP_WAIT_)
            return r;
        r = Ua(t, i).then((i=>{
            var r = e.__AMP_IMPL_ = new i(e,t.h);
            delete e.__AMP_WAIT_;
            return r
        }
        ));
        return e.__AMP_WAIT_ = r
    }
    function Ua(t, e) {
        if (t.fb[e])
            return t.fb[e];
        var i = new ot;
        var r = i.promise;
        i = i.resolve;
        t.fb[e] = r;
        t.Xc[e] = i;
        return r
    }
    var Ha = class {
        constructor(t) {
            this.h = t;
            this.fb = {};
            this.Xc = {}
        }
        whenReady(t) {
            return Ba(this, t).then(Va)
        }
        setHtmlForTemplate(t, e) {
            return Ba(this, t).then((t=>t.setHtml(e)))
        }
        renderTemplate(t, e) {
            return Ba(this, t).then((t=>t.render(e)))
        }
        renderTemplateAsString(t, e) {
            return Ba(this, t).then((t=>t.renderAsString(e)))
        }
        renderTemplateArray(t, e) {
            return 0 == e.length ? Promise.resolve([]) : Ba(this, t).then((t=>e.map((e=>t.render(e)))))
        }
        findAndRenderTemplate(t, e, i) {
            return this.renderTemplate(this.findTemplate(t, i), e)
        }
        findAndSetHtmlForTemplate(t, e, i) {
            return this.setHtmlForTemplate(this.findTemplate(t, i), e)
        }
        findAndRenderTemplateArray(t, e, i) {
            return this.renderTemplateArray(this.findTemplate(t, i), e)
        }
        hasTemplate(t, e) {
            return !!this.maybeFindTemplate(t, e)
        }
        findTemplate(t, e) {
            e = this.maybeFindTemplate(t, e);
            rt(e, "Template not found for %s", t);
            var i = e.tagName;
            rt("TEMPLATE" == i || "SCRIPT" == i && "text/plain" === e.getAttribute("type"), 'Template must be defined in a <template> or <script type="text/plain"> tag');
            return e
        }
        maybeFindTemplate(t, e) {
            var i = t.getAttribute("template");
            return i ? yt(t).getElementById(i) : e ? Ct(t, e) : t.querySelector('template[type], script[type="text/plain"]')
        }
    }
    ;
    var $a = class {
        constructor(t) {
            this.win = t;
            this.uf = this.win.Promise.resolve();
            this.Gf = 0;
            this.kc = {};
            this.Cf = Date.now()
        }
        timeSinceStart() {
            return Date.now() - this.Cf
        }
        delay(t, e) {
            if (!e) {
                var i = "p" + this.Gf++;
                this.uf.then((()=>{
                    this.kc[i] ? delete this.kc[i] : t()
                }
                )).catch(kr);
                return i
            }
            return this.win.setTimeout((()=>{
                try {
                    t()
                } catch (t) {
                    throw kr(t),
                    t
                }
            }
            ), e)
        }
        cancel(t) {
            "string" == typeof t ? this.kc[t] = !0 : this.win.clearTimeout(t)
        }
        promise(t) {
            return new this.win.Promise((e=>{
                if (-1 == this.delay(e, t))
                    throw Error("Failed to schedule timer.")
            }
            ))
        }
        timeoutPromise(t, e, i) {
            var r;
            var n = new this.win.Promise(((e,n)=>{
                r = this.delay((()=>{
                    n(tt().createError(i || "timeout"))
                }
                ), t);
                if (-1 == r)
                    throw Error("Failed to schedule timer.")
            }
            ));
            if (!e)
                return n;
            var s = ()=>{
                this.cancel(r)
            }
            ;
            e.then(s, s);
            return this.win.Promise.race([n, e])
        }
        poll(t, e) {
            return new this.win.Promise((i=>{
                var r = this.win.setInterval((()=>{
                    e() && (this.win.clearInterval(r),
                    i())
                }
                ), t)
            }
            ))
        }
    }
    ;
    function Ga(t, e) {
        return "string" !== typeof e ? e : t.parse(e)
    }
    var za = class {
        constructor(t) {
            t = t.getRootNode();
            this.Ae = (t.ownerDocument || t).createElement("a");
            this.ra = new ke(100)
        }
        parse(t, e) {
            return ze(this.Ae, t, e ? null : this.ra)
        }
        isProtocolValid(t) {
            return Ze(t)
        }
        getSourceOrigin(t) {
            return Ge(ii(Ga(this, t))).origin
        }
        getSourceUrl(t) {
            return ii(Ga(this, t))
        }
        resolveRelativeUrl(t, e) {
            return ri(t, Ga(this, e))
        }
        assertHttpsUrl(t, e, i="source") {
            return Ye(t, e, i)
        }
        assertAbsoluteHttpOrHttpsUrl(t) {
            rt(/^https?:/i.test(t), 'URL must start with "http://" or "https://". Invalid value: %s', t);
            return Ge(t).href
        }
        isProxyOrigin(t) {
            return Qe(Ga(this, t))
        }
        isSecure(t) {
            return Ke(Ga(this, t))
        }
        getWinOrigin(t) {
            return t.origin || Ga(this, t.location.href).origin
        }
        getCdnUrlOnOrigin(t) {
            if (Qe(t))
                return t;
            var {host: e, hash: i, pathname: r, search: n} = Ga(this, t)
              , s = encodeURIComponent(e);
            return `${L.cdn}/c/${s}${r}${n}${i}`
        }
    }
    ;
    function Wa(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            )));
            i.push.apply(i, r)
        }
        return i
    }
    function qa(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Wa(Object(i), !0).forEach((function(e) {
                var r = i[e];
                e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Wa(Object(i)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }
            ))
        }
        return t
    }
    var Xa = {
        navigationStart: 1,
        redirectStart: 1,
        redirectEnd: 1,
        fetchStart: 1,
        domainLookupStart: 1,
        domainLookupEnd: 1,
        connectStart: 1,
        secureConnectionStart: 1,
        connectEnd: 1,
        requestStart: 1,
        responseStart: 1,
        responseEnd: 1,
        domLoading: 2,
        domInteractive: 2,
        domContentLoaded: 2,
        domComplete: 2,
        loadEventStart: 3,
        loadEventEnd: 4
    };
    function Ka(t, e, i) {
        var n = Xa[e] || 3
          , s = Math.max(n, i ? Xa[i] || 3 : n);
        var a;
        if (1 === s)
            a = r();
        else if (2 === s)
            a = xa(t.document);
        else if (3 === s)
            a = ar(t);
        else if (4 === s) {
            var o = me(t);
            a = ar(t).then((()=>o.promise(1)))
        }
        return a.then((()=>Ya(t, e, i)))
    }
    function Ya(t, e, i) {
        var r = t.performance && t.performance.timing;
        if (r && 0 != r.navigationStart) {
            var n = void 0 === i ? r[e] : r[i] - r[e];
            if (R(n) && !(0 > n))
                return n
        }
    }
    function Ja(t, e) {
        var i = t.performance && t.performance.navigation;
        if (i && void 0 !== i[e])
            return i[e]
    }
    function Qa(t) {
        if (t.cd)
            return t.cd;
        if (t.ampdoc.isSingleDoc()) {
            var e = t.ampdoc.getRootNode();
            if (xr(e))
                return t.cd = [""],
                t.cd
        }
    }
    function Za(t, e, i) {
        Qa(t) && (e = e.filter((e=>Qa(t).includes(e))));
        i && (e = e.filter((t=>i[t])));
        if (0 === e.length)
            return /_^/g;
        e.sort(((t,e)=>e.length - t.length));
        var r = "\\$?(" + e.map((t=>"$" === t[0] ? "\\" + t : t)).join("|") + ")";
        return new RegExp(r,"g")
    }
    var to = class {
        constructor(t) {
            this.ampdoc = t;
            this.ia = Object.create(null);
            this.zc = !1;
            Qa(this)
        }
        vb() {
            this.initialize();
            this.zc = !0
        }
        initialize() {}
        get(t) {
            this.zc || this.vb();
            return this.ia[t]
        }
        set(t, e) {
            t.indexOf("RETURN");
            this.ia[t] = this.ia[t] || {
                sync: void 0,
                async: void 0
            };
            this.ia[t].sync = e;
            return this
        }
        setAsync(t, e) {
            t.indexOf("RETURN");
            this.ia[t] = this.ia[t] || {
                sync: void 0,
                async: void 0
            };
            this.ia[t].async = e;
            return this
        }
        setBoth(t, e, i) {
            return this.set(t, e).setAsync(t, i)
        }
        getExpr(t, e) {
            this.zc || this.vb();
            var i = qa(qa({}, this.ia), t);
            return Za(this, Object.keys(i), e)
        }
    }
    ;
    function eo(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            )));
            i.push.apply(i, r)
        }
        return i
    }
    function io(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? eo(Object(i), !0).forEach((function(e) {
                var r = i[e];
                e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : eo(Object(i)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }
            ))
        }
        return t
    }
    function ro(t, e) {
        var i = [];
        t.replace(e, ((t,e,r)=>{
            t = t.length;
            i.push({
                start: r,
                stop: t + r - 1,
                name: e,
                length: t
            })
        }
        ));
        return i
    }
    function no(t, e, i) {
        var r = [];
        var n = 0
          , s = 0
          , a = i[s]
          , o = 0
          , h = !1;
        var l = u=>{
            var c = "";
            var d = [];
            var m = [];
            for (; n < e.length && s <= i.length; ) {
                var p = c.trim();
                if (a && n === a.start)
                    p && d.push(o ? ct(c) : c),
                    c = t.Da && nt.call(t.Da, a.name) ? {
                        name: a.name,
                        prioritized: t.Da[a.name],
                        encode: u
                    } : io(io({}, t.R.get(a.name)), {}, {
                        name: a.name,
                        encode: u
                    }),
                    n = a.stop + 1,
                    a = i[++s],
                    "(" === e[n] ? (n++,
                    o++,
                    r.push(c),
                    d.push(l(!1))) : d.push(so(t, c)),
                    c = "";
                else {
                    if ("`" === e[n])
                        h ? (h = !1,
                        c.length && d.push(c)) : (h = !0,
                        p && d.push(p)),
                        c = "";
                    else if (o && "," === e[n] && !h)
                        p && d.push(p),
                        m.push(d),
                        d = [],
                        "," === e[n + 1] && (m.push([""]),
                        n++),
                        c = "";
                    else {
                        if (o && ")" === e[n] && !h)
                            return n++,
                            o--,
                            c = r.pop(),
                            p && d.push(p),
                            m.push(d),
                            so(t, c, m);
                        c += e[n]
                    }
                    n++
                }
                n === e.length && c.length && d.push(c)
            }
            return t.Aa ? d.join("") : Promise.all(d).then((t=>t.join(""))).catch((t=>{
                J(t);
                return ""
            }
            ))
        }
        ;
        return l(t.Ke)
    }
    function so(t, e, i) {
        var r = e.encode
          , n = e.name;
        var s;
        void 0 != e.prioritized ? s = e.prioritized : t.Aa && void 0 != e.sync ? s = e.sync : t.Aa ? (tt().error("Expander", "ignoring async replacement key: ", e.name),
        s = "") : s = e.async || e.sync;
        return t.Aa ? (t = ao(t, s, n, i),
        r ? encodeURIComponent(t) : t) : oo(t, s, n, i).then((t=>r ? encodeURIComponent(t) : t))
    }
    function ao(t, e, i, r) {
        try {
            var n = e;
            "function" === typeof e && (n = e.apply(null, uo(r)));
            var s;
            n && n.then ? (tt().error("Expander", "ignoring async macro resolution"),
            s = "") : "string" === typeof n || "number" === typeof n || "boolean" === typeof n ? (lo(t, i, n, r),
            s = n.toString()) : (lo(t, i, "", r),
            s = "");
            return s
        } catch (e) {
            return J(e),
            lo(t, i, "", r),
            ""
        }
    }
    function oo(t, e, i, r) {
        var n;
        try {
            return n = "function" === typeof e ? r ? ho(r).then((t=>e.apply(null, t))) : ht(e) : Promise.resolve(e),
            n.then((e=>{
                lo(t, i, e, r);
                return null == e ? "" : e
            }
            )).catch((e=>{
                J(e);
                lo(t, i, "", r);
                return Promise.resolve("")
            }
            ))
        } catch (e) {
            return J(e),
            lo(t, i, "", r),
            Promise.resolve("")
        }
    }
    function ho(t) {
        return Promise.all(t.map((t=>Promise.all(t).then((t=>t.join(""))))))
    }
    function lo(t, e, i, r) {
        if (t.vd) {
            var n = "";
            r && (n = `(${r.filter((t=>"" !== t)).join(",")})`);
            t.vd[`${e}${n}`] = i || ""
        }
    }
    function uo(t) {
        return t ? t.map((t=>t.join(""))) : t
    }
    var co = class {
        constructor(t, e, i, r, n, s) {
            this.R = t;
            this.Da = e;
            this.vd = i;
            this.Aa = r;
            this.S = n;
            this.Ke = !s
        }
        expand(t) {
            if (!t.length)
                return this.Aa ? t : Promise.resolve(t);
            var e = this.R.getExpr(this.Da, this.S);
            e = ro(t, e);
            return e.length ? no(this, t, e) : this.Aa ? t : Promise.resolve(t)
        }
        getMacroNames(t) {
            var e = this.R.getExpr(this.Da, this.S);
            return (t = t.match(e)) ? t : []
        }
    }
    ;
    function mo(t) {
        return ()=>(new Date)[t]()
    }
    function po(t, e) {
        return ()=>t[e]
    }
    function fo(t, e, i, r) {
        t.setBoth(e, (()=>Ya(t.ampdoc.win, i, r)), (()=>Ka(t.ampdoc.win, i, r)))
    }
    function go(t) {
        return le(t.ampdoc)
    }
    function vo(t, e) {
        ({replaceParams: t} = go(t));
        if (t) {
            var i = ti(e)
              , r = Ge(i);
            r = P(r.search);
            var n = at({})
              , s = Object.keys(t);
            for (var a = 0; a < s.length; a++)
                nt.call(r, s[a]) || (n[s[a]] = t[s[a]]);
            t = qe(i, n)
        } else
            t = e;
        return t
    }
    function bo(t, e, i) {
        rt(e, "The first argument to QUERY_PARAM, the query string param is required");
        var r = Ge(ti(t.ampdoc.win.location.href));
        r = P(r.search);
        ({replaceParams: t} = go(t));
        return "undefined" !== typeof r[e] ? r[e] : t && "undefined" !== typeof t[e] ? t[e] : i
    }
    function yo(t, e, i) {
        return re(t.ampdoc.getHeadNode(), "variant", "amp-experiment", !0).then((t=>{
            rt(t, "To use variable %s, amp-experiment should be configured", i);
            return t.getVariants()
        }
        )).then((t=>e(t)))
    }
    function wo(t, e) {
        t = t.ampdoc.getHeadNode();
        return re(t, "geo", "amp-geo", !0).then((t=>{
            rt(t, "To use variable %s, amp-geo should be configured", "AMP_GEO");
            return e(t)
        }
        ))
    }
    function Ao(t, e, i) {
        t = t.ampdoc.getHeadNode();
        return Promise.all([re(t, "access", "amp-access"), re(t, "subscriptions", "amp-subscriptions")]).then((t=>{
            t = t[0] || t[1];
            return t ? e(t) : (tt().error("UrlReplacements", "Access or subsciptions service is not installed to access: ", i),
            null)
        }
        ))
    }
    var Eo = class extends to {
        initialize() {
            var t = this.ampdoc.win
              , e = this.ampdoc.getHeadNode()
              , i = ge(this.ampdoc);
            this.set("RANDOM", (()=>Math.random()));
            var n = Object.create(null);
            this.set("COUNTER", (t=>n[t] = (0 | n[t]) + 1));
            this.set("CANONICAL_URL", (()=>go(this).canonicalUrl));
            this.set("CANONICAL_HOST", (()=>Ge(go(this).canonicalUrl).host));
            this.set("CANONICAL_HOSTNAME", (()=>Ge(go(this).canonicalUrl).hostname));
            this.set("CANONICAL_PATH", (()=>Ge(go(this).canonicalUrl).pathname));
            this.setAsync("DOCUMENT_REFERRER", (()=>pe(this.ampdoc).getReferrerUrl()));
            this.setAsync("EXTERNAL_REFERRER", (()=>pe(this.ampdoc).getReferrerUrl().then((e=>e ? Ge(ii(e)).hostname === t.location.hostname ? null : e : null))));
            this.set("TITLE", (()=>{
                var e = t.document;
                return e.originalTitle || e.title
            }
            ));
            this.set("AMPDOC_URL", (()=>Je(vo(this, t.location.href))));
            this.set("AMPDOC_HOST", (()=>{
                var e = Ge(t.location.href);
                return e && e.host
            }
            ));
            this.set("AMPDOC_HOSTNAME", (()=>{
                var e = Ge(t.location.href);
                return e && e.hostname
            }
            ));
            var s = ()=>{
                var t = go(this);
                return Je(vo(this, t.sourceUrl))
            }
            ;
            this.setBoth("SOURCE_URL", (()=>s()), (()=>di().then((()=>s()))));
            this.set("SOURCE_HOST", (()=>Ge(go(this).sourceUrl).host));
            this.set("SOURCE_HOSTNAME", (()=>Ge(go(this).sourceUrl).hostname));
            this.set("SOURCE_PATH", (()=>Ge(go(this).sourceUrl).pathname));
            this.set("PAGE_VIEW_ID", (()=>go(this).pageViewId));
            this.setAsync("PAGE_VIEW_ID_64", (()=>go(this).pageViewId64));
            this.setBoth("QUERY_PARAM", ((t,e="")=>bo(this, t, e)), ((t,e="")=>di().then((()=>bo(this, t, e)))));
            this.set("FRAGMENT_PARAM", ((t,e="")=>{
                rt(t, "The first argument to FRAGMENT_PARAM, the fragment string param is required");
                rt("string" == typeof t, "param should be a string");
                var i = P(this.ampdoc.win.location.originalHash);
                t = void 0 === i[t] ? e : i[t];
                return t
            }
            ));
            var a = null;
            this.setBoth("CLIENT_ID", (t=>a ? a[t] : null), ((t,i,n,s)=>{
                rt(t, "The first argument to CLIENT_ID, the fallback Cookie name, is required");
                var o = r();
                i && (o = ie(e, "userNotificationManager", "amp-user-notification").then((t=>t.get(i))));
                return Jt(Xt(this.ampdoc), "cid").then((e=>{
                    s = "true" == s ? !0 : !1;
                    return e.get({
                        scope: t,
                        createCookieIfNotPresent: !0,
                        cookieName: n || void 0,
                        disableBackup: s
                    }, o)
                }
                )).then((e=>{
                    a || (a = Object.create(null));
                    var i = n || t;
                    e && "_ga" == i && ("string" === typeof e ? e = e.replace(/^(GA1|1)\.[\d-]+\./, "") : it().error("UrlReplacements", "non-string cid, what is it?", Object.keys(e)));
                    return a[t] = e
                }
                ))
            }
            ));
            this.setAsync("VARIANT", (t=>yo(this, (e=>{
                var i = e[t];
                rt(void 0 !== i, "The value passed to VARIANT() is not a valid experiment in <amp-experiment>:" + t);
                return null === i ? "none" : i
            }
            ), "VARIANT")));
            this.setAsync("VARIANTS", (()=>yo(this, (t=>{
                var e = [];
                for (var i in t)
                    e.push(i + "." + (t[i] || "none"));
                return e.join("!")
            }
            ), "VARIANTS")));
            this.setAsync("AMP_GEO", (t=>wo(this, (e=>t ? (rt("ISOCountry" === t, "The value passed to AMP_GEO() is not valid name:" + t),
            e[t] || "unknown") : e.matchedISOCountryGroups.join(",")))));
            this.set("TIMESTAMP", mo("getTime"));
            this.set("TIMESTAMP_ISO", mo("toISOString"));
            this.set("TIMEZONE", mo("getTimezoneOffset"));
            this.set("SCROLL_HEIGHT", (()=>i.getScrollHeight()));
            this.set("SCROLL_WIDTH", (()=>i.getScrollWidth()));
            this.set("VIEWPORT_HEIGHT", (()=>i.getHeight()));
            this.set("VIEWPORT_WIDTH", (()=>i.getWidth()));
            var o = t.screen;
            this.set("SCREEN_WIDTH", po(o, "width"));
            this.set("SCREEN_HEIGHT", po(o, "height"));
            this.set("AVAILABLE_SCREEN_HEIGHT", po(o, "availHeight"));
            this.set("AVAILABLE_SCREEN_WIDTH", po(o, "availWidth"));
            this.set("SCREEN_COLOR_DEPTH", po(o, "colorDepth"));
            this.set("DOCUMENT_CHARSET", (()=>{
                var e = t.document;
                return e.characterSet || e.charset
            }
            ));
            this.set("BROWSER_LANGUAGE", (()=>{
                var e = t.navigator;
                return (e.language || e.userLanguage || e.browserLanguage || "").toLowerCase()
            }
            ));
            this.set("USER_AGENT", (()=>t.navigator.userAgent));
            fo(this, "PAGE_LOAD_TIME", "navigationStart", "loadEventStart");
            fo(this, "DOMAIN_LOOKUP_TIME", "domainLookupStart", "domainLookupEnd");
            fo(this, "TCP_CONNECT_TIME", "connectStart", "connectEnd");
            fo(this, "SERVER_RESPONSE_TIME", "requestStart", "responseStart");
            fo(this, "PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd");
            fo(this, "REDIRECT_TIME", "navigationStart", "fetchStart");
            fo(this, "DOM_INTERACTIVE_TIME", "navigationStart", "domInteractive");
            fo(this, "CONTENT_LOAD_TIME", "navigationStart", "domContentLoadedEventStart");
            this.setAsync("ACCESS_READER_ID", (()=>Ao(this, (t=>t.getAccessReaderId()), "ACCESS_READER_ID")));
            this.setAsync("AUTHDATA", (t=>{
                rt(t, "The first argument to AUTHDATA, the field, is required");
                return Ao(this, (e=>e.getAuthdataField(t)), "AUTHDATA")
            }
            ));
            this.setAsync("VIEWER", (()=>pe(this.ampdoc).getViewerOrigin().then((t=>void 0 == t ? "" : t))));
            this.setAsync("TOTAL_ENGAGED_TIME", (()=>ie(e, "activity", "amp-analytics").then((t=>t.getTotalEngagedTime()))));
            this.setAsync("INCREMENTAL_ENGAGED_TIME", ((t,i)=>ie(e, "activity", "amp-analytics").then((e=>e.getIncrementalEngagedTime(t, "false" !== i)))));
            this.set("NAV_TIMING", ((e,i)=>{
                rt(e, "The first argument to NAV_TIMING, the start attribute name, is required");
                return Ya(t, e, i)
            }
            ));
            this.setAsync("NAV_TIMING", ((e,i)=>{
                rt(e, "The first argument to NAV_TIMING, the start attribute name, is required");
                return Ka(t, e, i)
            }
            ));
            this.set("NAV_TYPE", (()=>Ja(t, "type")));
            this.set("NAV_REDIRECT_COUNT", (()=>Ja(t, "redirectCount")));
            this.set("AMP_VERSION", (()=>"2010270040000"));
            this.set("BACKGROUND_STATE", (()=>this.ampdoc.isVisible() ? "0" : "1"));
            this.setAsync("VIDEO_STATE", ((t,e)=>$t(this.ampdoc, "video-manager").getVideoStateProperty(t, e)));
            this.setAsync("AMP_STATE", (t=>{
                var e = this.ampdoc.getRootNode();
                return ne(e.documentElement || e).then((e=>e ? e.getStateValue(t) || "" : ""))
            }
            ))
        }
    }
    ;
    function Po(t, e) {
        var i = Ge(e, !0).protocol
          , r = Ge(t, !0).protocol;
        if (i != r)
            return tt().error("UrlReplacements", "Illegal replacement of the protocol: ", t),
            t;
        rt(Ze(e), "The replacement url has invalid protocol: %s", e);
        return e
    }
    function _o(t, e, i) {
        "INPUT" == e.tagName && (e.getAttribute("type") || "").toLowerCase();
        var r = So(e);
        if (!r)
            return i ? e.value : Promise.resolve(e.value);
        void 0 === e["amp-original-value"] && (e["amp-original-value"] = e.value);
        t = new co(t.R,void 0,void 0,i,r).expand(e["amp-original-value"] || e.value);
        return i ? e.value = t : t.then((t=>e.value = t))
    }
    function So(t, e) {
        if (t = t.getAttribute("data-amp-replace")) {
            var i = {};
            t.trim().split(/\s+/).forEach((t=>{
                if (!e || nt.call(e, t))
                    i[t] = !0
            }
            ));
            return i
        }
    }
    var xo = class {
        constructor(t, e) {
            this.ampdoc = t;
            this.R = e
        }
        expandStringSync(t, e, i) {
            return new co(this.R,e,void 0,!0,i,!0).expand(t)
        }
        expandStringAsync(t, e, i) {
            return new co(this.R,e,void 0,void 0,i,!0).expand(t)
        }
        expandUrlSync(t, e, i) {
            return Po(t, new co(this.R,e,void 0,!0,i).expand(t))
        }
        expandUrlAsync(t, e, i, r) {
            return new co(this.R,e,void 0,void 0,i,r).expand(t).then((e=>Po(t, e)))
        }
        expandInputValueAsync(t) {
            return _o(this, t, !1)
        }
        expandInputValueSync(t) {
            return _o(this, t, !0)
        }
        maybeExpandLink(t, e) {
            var i = t.getAttribute("data-amp-addparams") || "";
            var r = So(t, {
                CLIENT_ID: !0,
                QUERY_PARAM: !0,
                PAGE_VIEW_ID: !0,
                PAGE_VIEW_ID_64: !0,
                NAV_TIMING: !0
            });
            if (r || i || e) {
                var n = t["amp-original-href"] || t.getAttribute("href")
                  , s = Ge(n);
                null == t["amp-original-href"] && (t["amp-original-href"] = n);
                t: {
                    var a = le(this.ampdoc);
                    if (s.origin == Ge(a.canonicalUrl).origin || s.origin == Ge(a.sourceUrl).origin)
                        var o = !0;
                    else {
                        if (a = this.ampdoc.getMetaByName("amp-link-variable-allowed-origin")) {
                            a = a.trim().split(/\s+/);
                            for (var h = 0; h < a.length; h++)
                                if (s.origin == Ge(a[h]).origin) {
                                    o = !0;
                                    break t
                                }
                        }
                        o = !1
                    }
                }
                i && (o ? (s = i,
                s = r ? this.expandUrlSync(s, void 0, r) : s) : s = i,
                i = s,
                n = qe(n, P(i)));
                if (!o)
                    return t.href = n;
                e && (r && r.QUERY_PARAM || (e = this.expandUrlSync(e, void 0, {
                    QUERY_PARAM: !0
                })),
                n = qe(n, P(e)));
                n = r ? this.expandUrlSync(n, void 0, r) : n;
                return t.href = n
            }
        }
        collectVars(t, e) {
            var i = Object.create(null);
            return new co(this.R,e,i).expand(t).then((()=>i))
        }
        collectDisallowedVarsSync(t) {
            var e = t.getAttribute("src")
              , i = new co(this.R).getMacroNames(e)
              , r = So(t);
            return r ? i.filter((t=>!r[t])) : i
        }
        getVariableSource() {
            return this.R
        }
    }
    ;
    function Oo(t) {
        Bt(t, "url-replace", (function(t) {
            return new xo(t,new Eo(t))
        }
        ))
    }
    function Co(t, e, i) {
        var r = new Mo(0,0,t,e,i,1,1,1);
        r.solveYValueFromXValue.bind(r)
    }
    var Mo = class {
        constructor(t, e, i, r, n, s, a, o) {
            this.x0 = t;
            this.y0 = e;
            this.x1 = i;
            this.y1 = r;
            this.x2 = n;
            this.y2 = s;
            this.x3 = a;
            this.y3 = o
        }
        solveYValueFromXValue(t) {
            return this.getPointY(this.solvePositionFromXValue(t))
        }
        solvePositionFromXValue(t) {
            var e = (t - this.x0) / (this.x3 - this.x0);
            if (0 >= e)
                return 0;
            if (1 <= e)
                return 1;
            var i = 0
              , r = 1
              , n = 0;
            for (var s = 0; 8 > s; s++) {
                n = this.getPointX(e);
                var a = (this.getPointX(e + 1e-6) - n) / 1e-6;
                if (1e-6 > Math.abs(n - t))
                    return e;
                if (1e-6 > Math.abs(a))
                    break;
                else
                    n < t ? i = e : r = e,
                    e -= (n - t) / a
            }
            for (s = 0; 1e-6 < Math.abs(n - t) && 8 > s; s++)
                n < t ? (i = e,
                e = (e + r) / 2) : (r = e,
                e = (e + i) / 2),
                n = this.getPointX(e);
            return e
        }
        getPointX(t) {
            if (0 == t)
                return this.x0;
            if (1 == t)
                return this.x3;
            var e = this.lerp(this.x0, this.x1, t)
              , i = this.lerp(this.x1, this.x2, t);
            var r = this.lerp(this.x2, this.x3, t);
            e = this.lerp(e, i, t);
            i = this.lerp(i, r, t);
            return this.lerp(e, i, t)
        }
        getPointY(t) {
            if (0 == t)
                return this.y0;
            if (1 == t)
                return this.y3;
            var e = this.lerp(this.y0, this.y1, t)
              , i = this.lerp(this.y1, this.y2, t);
            var r = this.lerp(this.y2, this.y3, t);
            e = this.lerp(e, i, t);
            i = this.lerp(i, r, t);
            return this.lerp(e, i, t)
        }
        lerp(t, e, i) {
            return t + i * (e - t)
        }
    }
    ;
    Co(.25, .1, .25);
    Co(.42, 0, 1);
    Co(0, 0, .58);
    Co(.42, 0, .58);
    var Ro = ["<div class=i-amphtml-jank-meter></div>"];
    function To(t) {
        Io(t) && ko(t.h) && (t.Qa = new t.h.PerformanceObserver((e=>{
            var i = e.getEntries();
            for (var r = 0; r < i.length; r++)
                if ("longtask" == i[r].entryType) {
                    var n = t.h.Math.floor(i[r].duration / 50);
                    "cross-origin-descendant" == i[r].name ? t.Bb += n : t.Cb += n
                }
        }
        )),
        t.Qa.observe({
            entryTypes: ["longtask"]
        }))
    }
    function Io(t) {
        return ai(t.h, "jank-meter") || t.aa && t.aa.isPerformanceTrackingOn() && 200 > t.gb
    }
    var Do = class {
        constructor(t) {
            this.h = t;
            this.Cb = this.Bb = this.gb = this.mb = 0;
            this.cb = null;
            this.aa = Ht(t, "performance");
            this.Qa = this.jd = this.kd = null;
            To(this)
        }
        onScheduled() {
            Io(this) && null == this.cb && (this.cb = this.h.Date.now())
        }
        onRun() {
            if (Io(this) && null != this.cb) {
                var t = this.h.Date.now() - this.cb;
                this.cb = null;
                this.gb++;
                16 < t && this.mb++;
                if (this.aa && 200 == this.gb) {
                    var e = this.h.Math.floor((this.gb - this.mb) / this.gb * 100);
                    this.aa.tickDelta("gfp", e);
                    this.aa.tickDelta("bf", this.mb);
                    this.Qa && (this.aa.tickDelta("lts", this.Cb),
                    this.aa.tickDelta("ltc", this.Bb),
                    this.Qa.disconnect(),
                    this.Qa = null);
                    var i = 0;
                    this.kd && null != this.jd && (i = this.h.Math.max(0, this.h.Math.floor(100 * this.kd.level - this.jd)),
                    this.aa.tickDelta("bd", i));
                    this.aa.flush();
                    if (ai(this.h, "jank-meter")) {
                        var r = i;
                        var n = this.h.document
                          , s = Mi(n)(Ro);
                        s.textContent = `bf:${this.mb}, lts: ${this.Cb}, ltc:${this.Bb}, bd:${r}`;
                        n.body.appendChild(s)
                    }
                }
            }
        }
    }
    ;
    function ko(t) {
        return !!t.PerformanceObserver && !!t.TaskAttributionTiming && "containerName"in t.TaskAttributionTiming.prototype
    }
    function Lo(t) {
        var e = Di(t, "visibilityState", !0);
        if (t[e])
            return t[e];
        var i = Di(t, "hidden", !0);
        return t[i] ? t[i] ? "hidden" : "visible" : "visible"
    }
    function No(t, e) {
        if (t.addEventListener) {
            var i = Fo(t);
            i && t.addEventListener(i, e)
        }
    }
    function jo(t, e) {
        if (t.removeEventListener) {
            var i = Fo(t);
            i && t.removeEventListener(i, e)
        }
    }
    function Fo(t) {
        t = Di(t, "hidden", !0);
        var e = t.indexOf("Hidden");
        return -1 != e ? t.substring(0, e) + "Visibilitychange" : "visibilitychange"
    }
    function Vo(t) {
        var e = t.win.requestAnimationFrame || t.win.webkitRequestAnimationFrame;
        if (e)
            return e.bind(t.win);
        var i = 0;
        return e=>{
            var r = Date.now()
              , n = Math.max(0, 16 - (r - i));
            i = r + n;
            t.win.setTimeout(e, n)
        }
    }
    function Bo(t) {
        Uo(t) ? (t.sf(t.jc),
        t.hd.schedule()) : t.We.schedule()
    }
    function Uo(t, e) {
        return "visible" != Lo(t.win.document) ? !1 : t.da.isSingleDoc() ? t.da.getSingleDoc().isVisible() : e ? (t = t.da.getAmpDocIfAvailable(e),
        !t || t.isVisible()) : !0
    }
    var Ho = class {
        constructor(t) {
            this.win = t;
            this.da = oe(this.win);
            this.sf = Vo(this);
            this.Z = [];
            this.Kc = [];
            this.Wc = [];
            this.Jc = [];
            this.Y = !1;
            this.Ic = this.Fb = null;
            this.jc = this.xf.bind(this);
            this.We = new Ia(this.win,this.jc,16);
            this.hd = new Ia(this.win,this.jc,40);
            this.ic = this.qf.bind(this);
            if (this.da.isSingleDoc())
                this.da.getSingleDoc().onVisibilityChanged(this.ic);
            else
                No(this.win.document, this.ic);
            this.Rd = new Do(this.win)
        }
        dispose() {
            jo(this.win.document, this.ic)
        }
        qf() {
            this.Y && Bo(this)
        }
        run(t, e) {
            this.Z.push(t);
            this.Wc.push(e || void 0);
            this.za()
        }
        runPromise(t, e) {
            this.run(t, e);
            if (this.Fb)
                return this.Fb;
            t = new ot;
            this.Ic = t.resolve;
            return this.Fb = t.promise
        }
        createTask(t) {
            return e=>{
                this.run(t, e)
            }
        }
        mutate(t) {
            this.run({
                measure: void 0,
                mutate: t
            })
        }
        mutatePromise(t) {
            return this.runPromise({
                measure: void 0,
                mutate: t
            })
        }
        measure(t) {
            this.run({
                measure: t,
                mutate: void 0
            })
        }
        measurePromise(t) {
            return new Promise((e=>{
                this.measure((()=>{
                    e(t())
                }
                ))
            }
            ))
        }
        canAnimate(t) {
            return Uo(this, t)
        }
        runAnim(t, e, i) {
            if (!Uo(this, t))
                return !1;
            this.run(e, i);
            return !0
        }
        createAnimTask(t, e) {
            return i=>this.runAnim(t, e, i)
        }
        runAnimMutateSeries(t, e, i) {
            return Uo(this, t) ? new Promise(((r,n)=>{
                var s = Date.now();
                var a = 0;
                var o = this.createAnimTask(t, {
                    mutate: t=>{
                        var h = Date.now() - s;
                        e(h, h - a, t) ? i && h > i ? n(Error("timeout")) : (a = h,
                        o(t)) : r()
                    }
                });
                o({})
            }
            )) : Promise.reject(Lr())
        }
        za() {
            this.Y || (this.Y = !0,
            this.Rd.onScheduled(),
            Bo(this))
        }
        xf() {
            this.hd.cancel();
            this.Y = !1;
            this.Rd.onRun();
            var t = this.Z
              , e = this.Wc
              , i = this.Ic;
            this.Fb = this.Ic = null;
            this.Z = this.Kc;
            this.Wc = this.Jc;
            for (var r = 0; r < t.length; r++)
                t[r].measure && !$o(t[r].measure, e[r]) && (t[r].mutate = void 0);
            for (r = 0; r < t.length; r++)
                t[r].mutate && $o(t[r].mutate, e[r]);
            this.Kc = t;
            this.Jc = e;
            this.Kc.length = 0;
            this.Jc.length = 0;
            i && i()
        }
    }
    ;
    function $o(t, e) {
        try {
            void 0 !== t(e) && it().error("VSYNC", "callback returned a value but vsync cannot propogate it: %s", t.toString())
        } catch (t) {
            return J(t),
            !1
        }
        return !0
    }
    function Go(t) {
        Vt(t, "crypto", Bn);
        Vt(t, "batched-xhr", kn);
        Vt(t, "platform", wa);
        Vt(t, "templates", Ha);
        Vt(t, "timer", $a);
        Vt(t, "timer", $a);
        Vt(t, "vsync", Ho);
        Vt(t, "xhr", In);
        Vt(t, "input", aa);
        Vt(t, "preconnect", Ta)
    }
    var zo = ["amp-ad", "amp-embed", "amp-video"]
      , Wo = ["amp-mustache"];
    function qo(t, e, i) {
        var r = t.pc[e];
        r || (r = {
            extension: {
                elements: {},
                services: []
            },
            auto: i,
            docFactories: [],
            promise: void 0,
            resolve: void 0,
            reject: void 0,
            loaded: void 0,
            error: void 0,
            scriptPresent: void 0
        },
        t.pc[e] = r);
        return r
    }
    function Xo(t) {
        if (!t.promise)
            if (t.loaded)
                t.promise = Promise.resolve(t.extension);
            else if (t.error)
                t.promise = Promise.reject(t.error);
            else {
                var e = new ot;
                t.promise = e.promise;
                t.resolve = e.resolve;
                t.reject = e.reject
            }
        return t.promise
    }
    function Ko(t, e, i=!0) {
        t = t.win.document.head.querySelectorAll(`script[src*="/${e}-"]` + ":not([i-amphtml-loaded-new-version])" + (i ? "" : ":not([i-amphtml-inserted])"));
        var r = [];
        for (var n = 0; n < t.length; n++) {
            var s = t[n];
            Pr(s.src).extensionId === e && r.push(s)
        }
        return r
    }
    function Yo(t, e) {
        t.sa || it().error("extensions", "unknown extension for ", e);
        return qo(t, t.sa || "_UNKNOWN_", !0)
    }
    function Jo(t, e, i, r) {
        r ? pr(t, r, (()=>{
            Qo(t.win, e, i)
        }
        ), !1, e) : Qo(t.win, e, i)
    }
    function Qo(t, e, i) {
        var r = Xs(t);
        if (!r[e])
            Qs(t, e, i);
        else if (r[e] != i)
            for (rt(r[e] == gs, "%s is already registered. The script tag for %s is likely included twice in the page.", e, e),
            r[e] = i,
            r = 0; r < fs.length; r++) {
                var n = fs[r].element;
                n.tagName.toLowerCase() == e && n.ownerDocument.defaultView == t && (Ks(n, i),
                fs.splice(r--, 1))
            }
        Vt(t, e, ih)
    }
    var Zo = class {
        constructor(t) {
            this.win = t;
            this.da = oe(t);
            this.pc = {};
            this.sa = null
        }
        registerExtension(t, e, i) {
            var r = qo(this, t, !0);
            try {
                this.sa = t,
                e(i, i._),
                r.loaded = !0,
                r.resolve && r.resolve(r.extension)
            } catch (t) {
                throw r.error = t,
                r.reject && r.reject(t),
                t
            } finally {
                this.sa = null
            }
        }
        waitForExtension(t, e, i) {
            return me(t).timeoutPromise(i || 16e3, Xo(qo(this, e, !1)), `Render timeout waiting for extension ${e} to be load.`)
        }
        preloadExtension(t, e) {
            "amp-embed" == t && (t = "amp-ad");
            var i = qo(this, t, !1);
            if (i.loaded || i.error)
                var r = !1;
            else
                void 0 === i.scriptPresent && (r = Ko(this, t),
                i.scriptPresent = 0 < r.length),
                r = !i.scriptPresent;
            if (r) {
                r = e;
                e = this.win.document.createElement("script");
                e.async = !0;
                t.startsWith("_") ? r = "" : e.setAttribute(0 <= Wo.indexOf(t) ? "custom-template" : "custom-element", t);
                e.setAttribute("data-script", t);
                e.setAttribute("i-amphtml-inserted", "");
                S().esm && e.setAttribute("type", "module");
                var n = this.win.document.head.querySelector("script[nonce]");
                n && e.setAttribute("nonce", n.getAttribute("nonce"));
                e.setAttribute("crossorigin", "anonymous");
                n = S().esm ? ".mjs" : ".js";
                var s = L.cdn
                  , a = S().rtvVersion;
                null == r && (r = "0.1");
                t = `${s}/rtv/${a}/v0/${t}${r ? "-" + r : ""}${n}`;
                e.src = t;
                t = e;
                this.win.document.head.appendChild(t);
                i.scriptPresent = !0
            }
            return Xo(i)
        }
        installExtensionForDoc(t, e, i) {
            var r = t.getRootNode();
            var n = r.__AMP_EXT_LDR;
            n || (n = r.__AMP_EXT_LDR = st());
            if (n[e])
                return n[e];
            Js(t.win, e);
            return n[e] = this.preloadExtension(e, i).then((()=>this.installExtensionInDoc(t, e)))
        }
        reloadExtension(t) {
            var e = Ko(this, t, !1);
            if (!e.length)
                return tt().error("reloadExtension", 'Extension script for "%s" is missing or was already reloaded.', t),
                null;
            var i = this.pc[t];
            i && (i.scriptPresent = !1);
            e.forEach((e=>e.setAttribute("i-amphtml-loaded-new-version", t)));
            i = Pr(e[0].src);
            return this.preloadExtension(t, i.extensionVersion)
        }
        loadElementClass(t) {
            return this.preloadExtension(t).then((e=>e.elements[t].implementationClass))
        }
        addElement(t, e, i) {
            Yo(this, t).extension.elements[t] = {
                implementationClass: e,
                css: i
            };
            this.addDocFactory((r=>{
                Jo(r, t, e, i)
            }
            ))
        }
        addService(t, e) {
            Yo(this).extension.services.push({
                serviceName: t,
                serviceClass: e
            });
            this.addDocFactory((i=>{
                Bt(i, t, e, !0)
            }
            ))
        }
        addDocFactory(t, e) {
            var i = Yo(this, e);
            i.docFactories.push(t);
            if (this.sa && this.da.isSingleDoc()) {
                var r = this.da.getAmpDoc(this.win.document);
                (r.declaresExtension(this.sa) || i.auto) && t(r)
            }
        }
        preinstallEmbed(t, e) {
            var i = t.win;
            eh(this.win, i);
            th(i);
            e.forEach((t=>{
                zo.includes(t) || Js(i, t)
            }
            ))
        }
        installExtensionsInDoc(t, e) {
            return Promise.all(e.map((e=>this.installExtensionInDoc(t, e))))
        }
        installExtensionInDoc(t, e) {
            var i = qo(this, e, !1);
            return Xo(i).then((()=>{
                t.declareExtension(e);
                i.docFactories.forEach((i=>{
                    try {
                        i(t)
                    } catch (t) {
                        J("Doc factory failed: ", t, e)
                    }
                }
                ))
            }
            ))
        }
    }
    ;
    function th(t) {
        zo.forEach((e=>{
            Js(t, e)
        }
        ))
    }
    function eh(t, e) {
        var i = Xs(t)["amp-img"];
        Qs(e, "amp-img", i || gs);
        t = Xs(t)["amp-pixel"];
        Qs(e, "amp-pixel", t || gs)
    }
    function ih() {
        return {}
    }
    (function() {
        Z = q;
        it();
        tt()
    }
    )();
    (function(t) {
        self.__AMP_REPORT_ERROR = t
    }
    )(function(t, e, i) {
        kr(e, i);
        e && t && F(e.message) && !(0 <= e.message.indexOf("​​​​")) && oe(t).isSingleDoc() && (e = at({
            errorName: e.name,
            errorMessage: e.message
        }),
        t = oe(t).getSingleDoc().getRootNode(),
        t = t.documentElement || t.body || t,
        Mr(t, e))
    }
    .bind(null, self));
    function rh(t) {
        function e(t) {
            var e = ()=>{
                a.then((()=>{
                    "function" == typeof t ? t(i.AMP, i.AMP._) : s.registerExtension(t.n, t.f, i.AMP)
                }
                ))
            }
            ;
            "function" != typeof t && t.i ? nh(s, t).then((function() {
                return sh(i, t, e)
            }
            )) : sh(i, t, e)
        }
        var i = self;
        if (i.__AMP_TAG)
            r();
        else {
            i.__AMP_TAG = !0;
            var n = i.AMP || [];
            Vt(i, "extensions", Zo);
            var s = he(i);
            Go(i);
            th(i);
            i.AMP = {
                win: i,
                _: i.AMP ? i.AMP._ : void 0
            };
            i.AMP.config = N;
            i.AMP.BaseElement = lr;
            i.AMP.registerElement = s.addElement.bind(s);
            i.AMP.registerTemplate = function(t, e) {
                var r = Ut(i, "templates");
                if (r.fb[t]) {
                    var n = r.Xc[t];
                    rt(n, "Duplicate template type: %s", t);
                    delete r.Xc[t];
                    n(e)
                } else
                    r.fb[t] = Promise.resolve(e)
            }
            ;
            i.AMP.registerServiceForDoc = s.addService.bind(s);
            i.AMP.isExperimentOn = ai.bind(null, i);
            i.AMP.toggleExperiment = oi.bind(null, i);
            i.AMP.setLogLevel = B.bind(null);
            i.AMP.setTickFunction = ()=>{}
            ;
            var a = t(i, s);
            for (t = 0; t < n.length; t++) {
                var o = n[t];
                if (hh(i, o))
                    n.splice(t--, 1);
                else if ("function" == typeof o || "high" == o.p) {
                    try {
                        e(o)
                    } catch (t) {
                        it().error("runtime", "Extension failed: ", t, o.n)
                    }
                    n.splice(t--, 1)
                }
            }
            lh(i, (()=>{
                i.AMP.push = function(t) {
                    hh(i, t) || e(t)
                }
                ;
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (!hh(i, r))
                        try {
                            e(r)
                        } catch (t) {
                            it().error("runtime", "Extension failed: ", t, r.n)
                        }
                }
                n.length = 0
            }
            ));
            i.AMP.push || (i.AMP.push = n.push.bind(n));
            ce(i).isIos() && Li(i.document.documentElement, "cursor", "pointer");
            i.IntersectionObserver && i.IntersectionObserver !== ye && i.IntersectionObserverEntry || he(i).preloadExtension("amp-intersection-observer-polyfill")
        }
    }
    function nh(t, e) {
        if (Array.isArray(e.i))
            return e = e.i.map((e=>t.preloadExtension(e))),
            Promise.all(e);
        if ("string" == typeof e.i)
            return t.preloadExtension(e.i);
        it().error("RUNTIME", "dependency is neither an array or a string", e.i);
        return r()
    }
    function sh(t, e, i) {
        "function" == typeof e || "high" == e.p ? r().then(i) : (i.displayName = e.n,
        Ns(t.document, i))
    }
    function ah() {
        rh((t=>{
            oh(t);
            return ft(t.document).then((()=>{
                Ys(t.AMP.ampdoc)
            }
            ))
        }
        ))
    }
    function oh(t) {
        var e = t.document.documentElement
          , i = oe(t).getSingleDoc();
        t.AMP.ampdoc = i;
        i = pe(e);
        t.AMP.viewer = i;
        e = ge(e);
        t.AMP.viewport = {};
        t.AMP.viewport.getScrollLeft = e.getScrollLeft.bind(e);
        t.AMP.viewport.getScrollWidth = e.getScrollWidth.bind(e);
        t.AMP.viewport.getWidth = e.getWidth.bind(e)
    }
    function hh(t, e) {
        if ("function" == typeof e || "2010270040000" == e.v)
            return !1;
        he(t).reloadExtension(e.n);
        return !0
    }
    function lh(t, e) {
        ai(t, "pump-early-frame") ? t.document.body ? 0 < mr(t).length ? e() : me(t).delay(e, 1) : e() : e()
    }
    function uh() {
        var t = self;
        Pa(t.document, (()=>ch(t)))
    }
    function ch(t) {
        var e = 1500;
        var i = t.performance;
        i && i.timing && i.timing.navigationStart && (e = Date.now() - i.timing.navigationStart);
        var r = Math.max(1, 2100 - e);
        t.setTimeout((()=>{
            dh(t);
            var e = t.document.styleSheets;
            if (e) {
                var i = t.document.querySelectorAll(`link[rel~="stylesheet"]:not([href^="${CSS.escape(L.cdn)}"])`)
                  , n = [];
                for (var s = 0; s < i.length; s++) {
                    var a = i[s];
                    var o = !1;
                    for (var h = 0; h < e.length; h++)
                        if (e[h].ownerNode == a) {
                            o = !0;
                            break
                        }
                    o || n.push(a)
                }
                for (s = 0; s < n.length; s++) {
                    let e = n[s]
                      , i = e.media || "all";
                    e.media = "print";
                    e.onload = ()=>{
                        e.media = i;
                        dh(t)
                    }
                    ;
                    e.setAttribute("i-amphtml-timeout", r);
                    e.parentNode.insertBefore(e, e.nextSibling)
                }
            }
        }
        ), r)
    }
    function dh(t) {
        t = t.document;
        if (t.fonts && t.fonts.values)
            for (var e = t.fonts.values(); t = e.next(); ) {
                var i = t.value;
                if (!i)
                    break;
                "loading" == i.status && "display"in i && "auto" == i.display && (i.display = "swap")
            }
    }
    var mh = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];
    function ph(t, e, i, r) {
        t = qt(t);
        return fh(t, e, (t=>!t.isDisplayed() || !t.overlaps(i) && !t.isFixed() || r && !t.prerenderAllowed() ? !1 : !0)).then((t=>{
            var e = [];
            t.forEach((t=>{
                mh.includes(t.element.tagName) || e.push(t.loadedOnce())
            }
            ));
            return Promise.all(e)
        }
        ))
    }
    function fh(t, e, i) {
        return t.signals().whenSignal("ready-scan").then((()=>{
            var i = [];
            de(t).get().forEach((t=>{
                t.hasBeenMeasured() || t.hostWin != e || t.hasOwner() || i.push(t.getPageLayoutBoxAsync())
            }
            ));
            return Promise.all(i)
        }
        )).then((()=>de(t).get().filter((t=>t.hostWin == e && !t.hasOwner() && t.hasBeenMeasured() && i(t)))))
    }
    function gh(t) {
        var e = t.win
          , i = t.getRootNode();
        ph(t, e, ge(t).getLayoutRect(i.documentElement || i.body || i)).then((()=>{
            e.dispatchEvent(er(e, "amp-ini-load", null, {
                bubbles: !0
            }));
            e.parent && e.parent.postMessage("amp-ini-load", "*")
        }
        ))
    }
    function vh(t) {
        xs(t.h, (e=>{
            if (!t.ta || e.source == t.ta) {
                var i = e.data;
                if ("string" == typeof i && 0 == i.indexOf("amp-") && -1 != i.indexOf("{")) {
                    var r = i.indexOf("{");
                    try {
                        var n = JSON.parse(i.substr(r))
                    } catch (t) {
                        it().error("MESSAGING", "Failed to parse message: " + i, t),
                        n = null
                    }
                } else
                    n = null;
                n && n.sentinel == t.Uc && (n.origin = e.origin,
                t.ta || (t.ta = e.source),
                e = n.type,
                e in t.Ra && t.Ra[e].fire(n))
            }
        }
        ))
    }
    function bh(t, e) {
        t.postMessage(e, at({
            targetOrigin: "*",
            includeUserActivation: !0
        }))
    }
    var yh = class {
        constructor(t, e) {
            this.h = t;
            this.wf = S().rtvVersion || null;
            this.ta = e || null;
            this.Uc = null;
            this.kf = 1;
            this.Ra = st();
            vh(this)
        }
        getData(t, e, i) {
            var r = this.kf++
              , n = this.registerCallback(t + "-result", (t=>{
                t.messageId === r && (n(),
                i(t.content))
            }
            ))
              , s = {};
            s.payload = e;
            s.messageId = r;
            this.sendMessage(t, s)
        }
        makeRequest(t, e, i) {
            e = this.registerCallback(e, i);
            this.sendMessage(t);
            return e
        }
        requestOnce(t, e, i) {
            var r = this.registerCallback(e, (t=>{
                r();
                i(t)
            }
            ));
            this.sendMessage(t);
            return r
        }
        registerCallback(t, e) {
            t in this.Ra || (this.Ra[t] = new Xn);
            return this.Ra[t].add(e)
        }
        sendMessage(t, e) {
            var i = Os(t, this.Uc, e, this.wf);
            if (this.ta)
                t = this.ta,
                1 == t.postMessage.length ? bh(t, i) : t.postMessage(i, "*");
            else
                for (var r = 0, n = this.h; 10 > r && n != this.h.top; r++) {
                    t = n = n.parent;
                    var s = i;
                    1 == t.postMessage.length ? bh(t, s) : t.postMessage(s, "*");
                    r++
                }
        }
        setSentinel(t) {
            this.Uc = t
        }
    }
    ;
    function wh(t) {
        var e = new yh(t);
        try {
            var i = JSON.parse(t.name)
        } catch (t) {
            i = null
        }
        var r = i;
        i = null;
        r && r._context && (i = r._context.sentinel);
        e.setSentinel(i || String(t.Math.random()).substr(2));
        return e
    }
    var Ah = class {
        get() {
            return Promise.resolve(null)
        }
        optOut() {}
    }
    ;
    var Eh = class {
        constructor(t) {
            this.j = de(t);
            this.ye = fe(t.win)
        }
        forceChangeSize(t, e, i, r, n) {
            this.requestChangeSize(t, e, i, n).then((()=>{
                r && r()
            }
            ))
        }
        requestChangeSize(t, e, i, r) {
            return this.mutateElement(t, (()=>{
                this.j.getResourceForElement(t).changeSize(e, i, r)
            }
            ))
        }
        expandElement(t) {
            var e = this.j.getResourceForElement(t);
            e.completeExpand();
            (e = e.getOwner()) && e.expandedCallback(t);
            this.j.schedulePass()
        }
        attemptCollapse(t) {
            return this.mutateElement(t, (()=>{
                this.j.getResourceForElement(t).completeCollapse()
            }
            ))
        }
        collapseElement(t) {
            this.j.getResourceForElement(t).completeCollapse();
            this.j.schedulePass()
        }
        measureElement(t) {
            return this.ye.measurePromise(t)
        }
        mutateElement(t, e) {
            return this.measureMutateElement(t, null, e)
        }
        measureMutateElement(t, e, i) {
            return this.ye.runPromise({
                measure: ()=>{
                    e && e()
                }
                ,
                mutate: ()=>{
                    i();
                    this.j.schedulePass()
                }
            })
        }
    }
    ;
    var Ph = ["AMP-CAROUSEL"];
    function _h(t) {
        var e = t.target;
        e.viewportCallback && e.viewportCallback(t.isIntersecting)
    }
    function Sh(t) {
        var e = t.win.IntersectionObserver;
        if (!e)
            return null;
        null === t.fa && (t.fa = new e((t=>t.forEach(_h))));
        return t.fa
    }
    var xh = class {
        constructor(t) {
            this.w = t;
            this.win = t.win;
            this.j = [];
            this.vf = 0;
            this.Ib = new Ia(this.win,this.Je.bind(this),70);
            this.be = new Xn;
            this.Dd = new ot;
            this.fa = null;
            Ut(this.win, "input").setupInputModeClasses(t)
        }
        dispose() {
            this.fa && (this.fa.disconnect(),
            this.fa = null)
        }
        get() {
            return this.j.slice(0)
        }
        getAmpdoc() {
            return this.w
        }
        getResourceForElement(t) {
            return ws(t)
        }
        getResourceForElementOptional(t) {
            return ws(t)
        }
        getScrollDirection() {
            return 1
        }
        add(t) {
            var e = new _s(++this.vf,t,this);
            this.j.push(e);
            Ph.includes(t.tagName) && (e = Sh(this)) && e.observe(t)
        }
        upgraded(t) {
            t = ws(t);
            this.w.whenReady().then(t.build.bind(t)).then(this.schedulePass.bind(this))
        }
        remove(t) {
            var e = ws(t);
            e && (this.fa && this.fa.unobserve(t),
            t = this.j.indexOf(e),
            -1 !== t && this.j.splice(t, 1))
        }
        scheduleLayoutOrPreload() {
            this.Ib.schedule()
        }
        schedulePass(t) {
            return this.Ib.schedule(t)
        }
        updateOrEnqueueMutateTask() {}
        schedulePassVsync() {}
        onNextPass(t) {
            this.be.add(t)
        }
        ampInitComplete() {}
        updateLayoutPriority() {}
        setRelayoutTop() {}
        maybeHeightChanged() {}
        whenFirstPass() {
            return this.Dd.promise
        }
        isIntersectionExperimentOn() {
            return !1
        }
        Je() {
            var t = Date.now();
            this.j.forEach((t=>{
                t.isLayoutPending() && t.measure()
            }
            ));
            this.j.forEach((e=>{
                2 === e.getState() && e.isDisplayed() && (e.layoutScheduled(t),
                e.startLayout())
            }
            ));
            this.w.signals().signal("ready-scan");
            this.be.fire();
            this.Dd.resolve()
        }
        getSlowElementRatio() {
            return 0
        }
    }
    ;
    var Oh = class {
        constructor(t) {
            this.w = t
        }
        getAmpDoc() {
            return this.w
        }
        getParam(t) {
            return this.w.getParam(t)
        }
        hasCapability() {
            return !1
        }
        isEmbedded() {
            return !1
        }
        isWebviewEmbedded() {
            return !1
        }
        isCctEmbedded() {
            return !1
        }
        isProxyOrigin() {
            return !1
        }
        maybeUpdateFragmentForCct() {}
        isRuntimeOn() {
            return !0
        }
        toggleRuntime() {}
        onRuntimeState() {
            return ()=>{}
        }
        isOvertakeHistory() {
            return !1
        }
        getResolvedViewerUrl() {
            return this.w.win.location.href
        }
        maybeGetMessagingOrigin() {
            return null
        }
        getUnconfirmedReferrerUrl() {
            return this.w.win.document.referrer
        }
        getReferrerUrl() {
            return Promise.resolve(this.getUnconfirmedReferrerUrl())
        }
        isTrustedViewer() {
            return Promise.resolve(!1)
        }
        getViewerOrigin() {
            return Promise.resolve("")
        }
        onMessage() {
            return ()=>{}
        }
        onMessageRespond() {
            return ()=>{}
        }
        receiveMessage() {}
        setMessageDeliverer() {}
        sendMessage() {}
        sendMessageAwaitResponse() {
            return r()
        }
        broadcast() {
            return Promise.resolve(!1)
        }
        onBroadcast() {
            return ()=>{}
        }
        whenMessagingReady() {
            return null
        }
        replaceUrl() {}
    }
    ;
    function Ch(t, e, i) {
        var r = `${e.top}px`
          , n = `${i.width - (e.left + e.width)}px`
          , s = `${e.left}px`
          , a = `${i.height - (e.top + e.height)}px`
          , o = `${e.height}px`
          , h = `${e.width}px`;
        var l = `${i.width / 2 - e.width / 2 - e.left}px`;
        i = `${i.height / 2 - e.height / 2 - e.top}px`;
        "number" == typeof l && (l = `${l}px`);
        void 0 === i ? l = `translate(${l})` : ("number" == typeof i && (i = `${i}px`),
        l = `translate(${l}, ${i})`);
        Ni(t, {
            position: "fixed",
            top: r,
            right: n,
            left: s,
            bottom: a,
            height: o,
            width: h,
            transition: "transform 150ms ease",
            transform: l,
            margin: 0
        })
    }
    function Mh(t, e, i) {
        t.requestAnimationFrame((()=>{
            e.measure && e.measure(i);
            e.mutate && e.mutate(i)
        }
        ))
    }
    function Rh(t, e, i) {
        Mh(t, {
            measure(i) {
                i.viewportSize = {
                    width: t.innerWidth,
                    height: t.innerHeight
                };
                i.rect = Nt(e.getBoundingClientRect())
            },
            mutate(r) {
                var n = Lt(0, 0, r.viewportSize.width, r.viewportSize.height);
                Ch(e, r.rect, r.viewportSize);
                ki(e, {
                    "pointer-events": "none"
                });
                setTimeout((()=>{
                    Mh(t, {
                        mutate() {
                            Fi(e, ["pointer-events"]);
                            Ni(e, {
                                position: "fixed",
                                "z-index": 1e3,
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: "100vw",
                                height: "100vh",
                                transition: null,
                                transform: null,
                                margin: 0,
                                border: 0
                            });
                            i(r.rect, n)
                        }
                    })
                }
                ), 200)
            }
        }, {})
    }
    function Th(t, e, i, r) {
        Mh(t, {
            mutate() {
                Fi(e, "position z-index left right top bottom width height margin border".split(" "));
                i();
                Mh(t, {
                    measure() {
                        r(Nt(e.getBoundingClientRect()))
                    }
                })
            }
        })
    }
    function Ih(t) {
        t.h.addEventListener("resize", (()=>t.onWindowResize()))
    }
    var Dh = class {
        constructor(t) {
            this.h = t;
            this.Zb = this.Bc = !1;
            this.pb = null;
            Ih(this)
        }
        onWindowResize() {
            this.Bc && (this.Zb = !0)
        }
        expandFrame(t, e) {
            Rh(this.h, t, ((t,i)=>{
                this.Bc = !0;
                this.Zb = !1;
                this.pb = t;
                e(i)
            }
            ))
        }
        collapseFrame(t, e) {
            Th(this.h, t, (()=>{
                this.Bc = !1;
                this.Zb || e(this.pb)
            }
            ), (t=>{
                this.pb = t;
                this.Zb && e(this.pb)
            }
            ))
        }
    }
    ;
    function kh(t) {
        t.ampInaboxFrameOverlayManager = t.ampInaboxFrameOverlayManager || new Dh(t);
        return t.ampInaboxFrameOverlayManager
    }
    var Lh = class {
        constructor(t) {
            this.h = t;
            this.Lb = null;
            var e = this.h;
            t = e.document;
            if (t.scrollingElement)
                t = t.scrollingElement;
            else {
                var i;
                if (i = t.body)
                    e = e.navigator.userAgent,
                    i = /WebKit/i.test(e) && !/Edge/i.test(e);
                t = i ? t.body : t.documentElement
            }
            this.zf = t;
            this.K = null
        }
        observe(t, e) {
            if (!this.Lb) {
                this.Lb = new Xn;
                var i = _r(this.h, (()=>{
                    this.K = this.getViewportRect();
                    this.Lb.fire()
                }
                ));
                this.K = this.getViewportRect();
                this.h.addEventListener("scroll", i, !0);
                this.h.addEventListener("resize", i, !0)
            }
            e({
                viewportRect: this.K,
                targetRect: this.getTargetRect(t)
            });
            return this.Lb.add((()=>{
                e({
                    viewportRect: this.K,
                    targetRect: this.getTargetRect(t)
                })
            }
            ))
        }
        getViewportRect() {
            var t = this.zf
              , e = this.h;
            return Lt(Math.round(t.scrollLeft || e.pageXOffset), Math.round(t.scrollTop || e.pageYOffset), e.innerWidth, e.innerHeight)
        }
        getTargetRect(t) {
            var e = Nt(t.getBoundingClientRect());
            t = t.ownerDocument.defaultView;
            for (var i = 0, r = t; 10 > i && r && r != this.h && r != this.h.top; i++,
            r = r.parent) {
                var n = Nt(r.frameElement.getBoundingClientRect());
                e = Ft(e, n.left, n.top)
            }
            return e
        }
    }
    ;
    function Nh(t) {
        t.ampInaboxPositionObserver = t.ampInaboxPositionObserver || new Lh(t);
        return t.ampInaboxPositionObserver
    }
    function jh(t, e) {
        return fe(t).runPromise({
            measure: e=>{
                e.width = t.innerWidth;
                e.height = t.innerHeight
            }
            ,
            mutate: t=>{
                ki(e, {
                    background: "transparent",
                    left: "50%",
                    top: "50%",
                    right: "auto",
                    bottom: "auto",
                    position: "absolute",
                    height: `${t.height}px`,
                    width: `${t.width}px`,
                    "margin-top": `${-t.height / 2}px`,
                    "margin-left": `${-t.width / 2}px`
                })
            }
        }, {})
    }
    function Fh(t, e) {
        return fe(t).mutatePromise((()=>{
            Fi(e, "position left top right bottom width height margin-left margin-top".split(" "))
        }
        ))
    }
    function Vh(t) {
        var e = t.getSize()
          , i = t.getScrollTop()
          , r = t.getScrollLeft();
        t.sd.fire({
            relayoutAll: !1,
            top: i,
            left: r,
            width: e.width,
            height: e.height,
            velocity: 0
        })
    }
    var Bh = class {
        constructor(t, e) {
            var i = t.win;
            this.ampdoc = t;
            this.A = e;
            this.ab = null;
            this.sd = new Xn;
            this.eb = new Xn;
            this.bb = new Xn;
            this.A.onScroll(this.yf.bind(this));
            this.A.onResize(this.ge.bind(this));
            this.xe = !1;
            this.ampdoc.onVisibilityChanged(this.se.bind(this));
            this.se();
            this.nd = this.dispose.bind(this);
            i.addEventListener("pagehide", this.nd);
            var r = i.document.documentElement;
            r.classList.add("i-amphtml-singledoc");
            r.classList.add("i-amphtml-standalone");
            It(i) && r.classList.add("i-amphtml-iframed")
        }
        dispose() {
            this.A.disconnect();
            this.ampdoc.win.removeEventListener("pagehide", this.nd)
        }
        ensureReadyForElements() {}
        getPaddingTop() {
            return 0
        }
        getScrollTop() {
            return this.A.getScrollTop()
        }
        getScrollLeft() {
            return this.A.getScrollLeft()
        }
        setScrollTop() {}
        updatePaddingBottom() {}
        getSize() {
            return this.A.getSize()
        }
        getHeight() {
            return this.getSize().height
        }
        getWidth() {
            return this.getSize().width
        }
        getScrollWidth() {
            return this.A.getScrollWidth()
        }
        getScrollHeight() {
            return this.A.getScrollHeight()
        }
        getContentHeight() {
            return this.A.getContentHeight()
        }
        contentHeightChanged() {}
        getRect() {
            if (null == this.ab) {
                var t = this.getSize();
                this.ab = Lt(this.getScrollLeft(), this.getScrollTop(), t.width, t.height)
            }
            return this.ab
        }
        getLayoutRect(t) {
            return this.A.getLayoutRect(t)
        }
        getClientRectAsync(t) {
            var e = t.getBoundingClientRect();
            return this.A.getRootClientRectAsync().then((t=>t ? Ft(e, t.left, t.top) : Nt(e)))
        }
        supportsPositionFixed() {
            return !1
        }
        isDeclaredFixed() {
            return !1
        }
        scrollIntoView() {
            return r()
        }
        animateScrollIntoView() {
            return r()
        }
        animateScrollWithinParent() {
            return r()
        }
        getScrollingElement() {
            return this.A.getScrollingElement()
        }
        onChanged(t) {
            return this.sd.add(t)
        }
        onScroll(t) {
            return this.eb.add(t)
        }
        onResize(t) {
            return this.bb.add(t)
        }
        enterLightboxMode() {
            this.enterOverlayMode();
            return this.A.updateLightboxMode(!0)
        }
        leaveLightboxMode() {
            this.leaveOverlayMode();
            return this.A.updateLightboxMode(!1)
        }
        enterOverlayMode() {
            this.disableTouchZoom();
            this.disableScroll()
        }
        leaveOverlayMode() {
            this.resetScroll();
            this.restoreOriginalTouchZoom()
        }
        disableScroll() {}
        resetScroll() {}
        resetTouchZoom() {}
        disableTouchZoom() {
            return !1
        }
        restoreOriginalTouchZoom() {
            return !1
        }
        updateFixedLayer() {
            return r()
        }
        addToFixedLayer() {
            return r()
        }
        removeFromFixedLayer() {}
        createFixedLayer() {}
        yf() {
            this.ab = null;
            0 > this.A.getScrollTop() || (Vh(this),
            this.eb.fire())
        }
        ge() {
            this.ab = null;
            var t = this.getSize();
            Vh(this);
            this.bb.fire({
                relayoutAll: !1,
                width: t.width,
                height: t.height
            })
        }
        se() {
            var t = this.ampdoc.isVisible();
            t != this.xe && ((this.xe = t) ? (this.A.connect(),
            this.ge()) : this.A.disconnect())
        }
    }
    ;
    function Uh(t) {
        return Jt(Xt(t.win.document.documentElement), "resources").then((()=>{
            t.hb = t.hb || t.pe.observe(t.win.frameElement || t.getScrollingElement(), (e=>{
                $h(t, e.viewportRect, e.targetRect)
            }
            ))
        }
        ))
    }
    function Hh(t) {
        t.ub.makeRequest("send-positions", "position", (e=>{
            $h(t, e.viewportRect, e.targetRect)
        }
        ));
        return r()
    }
    function $h(t, e, i) {
        var r = t.K;
        t.K = e;
        Gh(t, i);
        Zh(t.K, r) && t.bb.fire();
        Qh(t.K, r) && t.Me()
    }
    function Gh(t, e) {
        if (e) {
            var i = Ft(e, t.K.left, t.K.top)
              , r = t.nb;
            if (Qh(i, r) || Zh(i, r))
                t.nb = i,
                zh(t)
        }
    }
    function zh(t) {
        t.getChildResources().forEach((t=>t.measure()))
    }
    function Wh(t) {
        return jh(t.win, t.getBodyElement()).then((()=>Xh(t)))
    }
    function qh(t) {
        return Kh(t).then((()=>Fh(t.win, t.getBodyElement())))
    }
    function Xh(t) {
        return new Promise(((e,i)=>{
            if (t.ua) {
                var r = t.win.frameElement;
                r ? t.oe.expandFrame(r, (i=>{
                    Gh(t, i);
                    e()
                }
                )) : i("Request to open lightbox failed; frame does not exist.")
            } else
                t.ub.requestOnce("full-overlay-frame", "full-overlay-frame-response", (r=>{
                    r.success ? (Gh(t, r.boxRect),
                    e()) : i("Request to open lightbox rejected by host document")
                }
                ))
        }
        ))
    }
    function Kh(t) {
        return new Promise(((e,i)=>{
            if (t.ua) {
                var r = t.win.frameElement;
                r ? t.oe.collapseFrame(r, (i=>{
                    Gh(t, i);
                    e()
                }
                )) : i("Request to open lightbox failed; frame does not exist.")
            } else
                t.ub.requestOnce("cancel-full-overlay-frame", "cancel-full-overlay-frame-response", (i=>{
                    Gh(t, i.boxRect);
                    e()
                }
                ))
        }
        ))
    }
    var Yh = class {
        constructor(t) {
            this.win = t;
            this.eb = new Xn;
            this.bb = new Xn;
            var e = t.innerWidth
              , i = t.innerHeight;
            this.K = Lt(0, 0, e, i);
            this.nb = Lt(0, i + 1, e, i);
            this.ub = Ht(t, "iframeMessagingClient");
            this.Pb = null;
            this.Me = _r(this.win, (()=>{
                this.eb.fire()
            }
            ));
            this.pe = (this.ua = Cs(this.win.top)) ? Nh(this.win.top) : null;
            this.oe = this.ua ? kh(this.win.top) : null;
            this.hb = null
        }
        connect() {
            return this.ua ? Uh(this) : Hh(this)
        }
        getLayoutRect(t) {
            t = t.getBoundingClientRect();
            return Lt(Math.round(t.left + this.nb.left), Math.round(t.top + this.nb.top), Math.round(t.width), Math.round(t.height))
        }
        onScroll(t) {
            this.eb.add(t)
        }
        onResize(t) {
            this.bb.add(t)
        }
        getSize() {
            return {
                width: this.K.width,
                height: this.K.height
            }
        }
        getScrollTop() {
            return this.K.top
        }
        getScrollLeft() {
            return this.K.left
        }
        getScrollingElement() {
            return this.getBodyElement()
        }
        getScrollingElementScrollsLikeViewport() {
            return !0
        }
        supportsPositionFixed() {
            return !1
        }
        getChildResources() {
            return de(this.win.document.documentElement).get()
        }
        updateLightboxMode(t) {
            return t ? Wh(this) : qh(this)
        }
        getRootClientRectAsync() {
            if (this.ua)
                return Uh(this).then((()=>this.pe.getTargetRect(this.win.frameElement || this.getScrollingElement())));
            this.Pb || (this.Pb = new Promise((t=>{
                this.ub.requestOnce("send-positions", "position", (e=>{
                    this.Pb = null;
                    t(e.targetRect)
                }
                ))
            }
            )));
            return this.Pb
        }
        getBodyElement() {
            return this.win.document.body
        }
        disconnect() {
            this.hb && (this.hb(),
            this.hb = null)
        }
        getScrollWidth() {
            return this.getScrollingElement().offsetWidth
        }
        getScrollHeight() {
            return this.getScrollingElement().offsetHeight
        }
        getContentHeight() {
            return this.getScrollHeight()
        }
        updatePaddingTop() {}
        hideViewerHeader() {}
        showViewerHeader() {}
        disableScroll() {}
        resetScroll() {}
        ensureReadyForElements() {}
        setScrollTop() {}
        contentHeightChanged() {}
        getBorderTop() {
            return 0
        }
        requiresFixedLayerTransfer() {
            return !1
        }
        overrideGlobalScrollTo() {
            return !1
        }
    }
    ;
    function Jh(t) {
        var e = new Yh(t.win);
        Bt(t, "viewport", (function() {
            return new Bh(t,e)
        }
        ), !0)
    }
    function Qh(t, e) {
        return t.left != e.left || t.top != e.top
    }
    function Zh(t, e) {
        return t.width != e.width || t.height != e.height
    }
    var tl = class {
        constructor(t, e, i) {
            this.win = t;
            this.Sb = null;
            if (e) {
                var r = st();
                i ? Object.assign(r, i) : (t.name && 0 == t.name.indexOf("__AMP__") && Object.assign(r, P(t.name.substring(7))),
                t.location && t.location.hash && Object.assign(r, P(t.location.hash)));
                i = r;
                this.Sb = new il(t,{
                    params: i
                });
                t.document.__AMPDOC = this.Sb
            }
        }
        isSingleDoc() {
            return !!this.Sb
        }
        getSingleDoc() {
            return this.Sb
        }
        getAmpDocIfAvailable(t) {
            for (var e = t; e; ) {
                var i = t.everAttached && "function" === typeof t.getAmpDoc ? t.getAmpDoc() : null;
                if (i)
                    return i;
                e = yt(e);
                if (!e)
                    break;
                var r = e.__AMPDOC;
                if (r)
                    return r;
                if (e.host)
                    var n = e.host;
                else
                    t: {
                        e = (e.ownerDocument || e).defaultView;
                        r = this.win || Wt(e);
                        if (e && e != r && Wt(e) == r)
                            try {
                                n = e.frameElement;
                                break t
                            } catch (t) {}
                        n = null
                    }
                e = n
            }
            return null
        }
        getAmpDoc(t) {
            var e = this.getAmpDocIfAvailable(t);
            if (!e)
                throw it().createError("No ampdoc found for", t);
            return e
        }
        installShadowDoc(t, e, i) {
            t = new rl(this.win,t,e,i);
            return e.__AMPDOC = t
        }
        installFieDoc(t, e, i) {
            var r = e.document;
            t = new nl(e,t,this.getAmpDoc(e.frameElement),i);
            return r.__AMPDOC = t
        }
    }
    ;
    var el = class {
        constructor(t, e, i) {
            this.win = t;
            this.ee = st();
            this.Hb = e;
            this.D = i && i.signals || new Ss;
            this.Oc = i && i.params || st();
            this.X = null;
            this.xd = [];
            this.ed = i && i.visibilityState || this.Oc.visibilityState && it().assertEnumValue(ur, this.Oc.visibilityState, "VisibilityState") || null;
            this.ac = null;
            this.we = new Xn;
            this.Td = null;
            this.$c = [];
            var r = this.bd.bind(this);
            this.Hb && this.$c.push(this.Hb.onVisibilityChanged(r));
            No(this.win.document, r);
            this.$c.push((()=>jo(this.win.document, r)));
            this.bd()
        }
        dispose() {
            this.$c.forEach((t=>t()))
        }
        isSingleDoc() {
            return null
        }
        getParent() {
            return this.Hb
        }
        getWin() {
            return this.win
        }
        signals() {
            return this.D
        }
        getParam(t) {
            t = this.Oc[t];
            return null == t ? null : t
        }
        getMeta() {
            if (this.X)
                return st(this.X);
            this.X = st();
            var t = this.win.document.head.querySelectorAll("meta[name]");
            Mt(t, (t=>{
                var e = t.getAttribute("name");
                t = t.getAttribute("content");
                e && null !== t && void 0 === this.X[e] && (this.X[e] = t)
            }
            ));
            return st(this.X)
        }
        getMetaByName(t) {
            if (!t)
                return null;
            t = this.getMeta()[t];
            return void 0 !== t ? t : null
        }
        setMetaByName() {}
        declaresExtension(t) {
            return -1 != this.xd.indexOf(t)
        }
        declareExtension(t) {
            this.declaresExtension(t) || this.xd.push(t)
        }
        getRootNode() {
            return null
        }
        getHeadNode() {}
        isBodyAvailable() {
            return !1
        }
        getBody() {
            return null
        }
        waitForBodyOpen() {
            return null
        }
        isReady() {
            return null
        }
        whenReady() {
            return null
        }
        getUrl() {
            return null
        }
        getElementById(t) {
            return this.getRootNode().getElementById(t)
        }
        contains(t) {
            return this.getRootNode().contains(t)
        }
        overrideVisibilityState(t) {
            this.ed != t && (this.ed = t,
            this.bd())
        }
        bd() {
            var t = Lo(this.win.document);
            var e = "visible";
            for (var i = this.Hb; i; i = i.getParent())
                if ("visible" != i.getVisibilityState()) {
                    e = i.getVisibilityState();
                    break
                }
            var r = this.ed || "visible";
            i = "visible" == r && "visible" == e && "visible" == t ? "visible" : "hidden" == t && "paused" == r ? t : "paused" == r || "inactive" == r ? r : "paused" == e || "inactive" == e ? e : "prerender" == r || "prerender" == t || "prerender" == e ? "prerender" : "hidden";
            this.ac != i && (this.ac = i,
            "visible" == i ? (this.Td = Date.now(),
            this.D.signal("-ampdoc-first-visible"),
            this.D.signal("-ampdoc-next-visible")) : this.D.reset("-ampdoc-next-visible"),
            this.we.fire())
        }
        whenFirstVisible() {
            return this.D.whenSignal("-ampdoc-first-visible").then((()=>{}
            ))
        }
        whenNextVisible() {
            return this.D.whenSignal("-ampdoc-next-visible").then((()=>{}
            ))
        }
        getFirstVisibleTime() {
            return this.D.get("-ampdoc-first-visible")
        }
        getLastVisibleTime() {
            return this.Td
        }
        getVisibilityState() {
            return this.ac
        }
        isVisible() {
            return "visible" == this.ac
        }
        hasBeenVisible() {
            return null != this.getLastVisibleTime()
        }
        onVisibilityChanged(t) {
            return this.we.add(t)
        }
        registerSingleton(t) {
            return this.ee[t] ? !1 : this.ee[t] = !0
        }
    }
    ;
    var il = class extends el {
        constructor(t, e) {
            super(t, null, e);
            this.Ea = this.win.document.body ? Promise.resolve(this.win.document.body) : ft(this.win.document).then((()=>this.getBody()));
            this.Ya = Sa(this.win.document)
        }
        isSingleDoc() {
            return !0
        }
        getRootNode() {
            return this.win.document
        }
        getUrl() {
            return this.win.location.href
        }
        getHeadNode() {
            return this.win.document.head
        }
        isBodyAvailable() {
            return !!this.win.document.body
        }
        getBody() {
            return this.win.document.body
        }
        waitForBodyOpen() {
            return this.Ea
        }
        isReady() {
            return Aa(this.win.document)
        }
        whenReady() {
            return this.Ya
        }
    }
    ;
    var rl = class extends el {
        constructor(t, e, i, r) {
            super(t, null, r);
            this.ib = e;
            this.ie = i;
            this.ec = null;
            var n = new ot;
            this.Ea = n.promise;
            this.md = n.resolve;
            this.$a = !1;
            var s = new ot;
            this.Ya = s.promise;
            this.Za = s.resolve
        }
        isSingleDoc() {
            return !1
        }
        getRootNode() {
            return this.ie
        }
        getUrl() {
            return this.ib
        }
        getHeadNode() {
            return this.ie
        }
        isBodyAvailable() {
            return !!this.ec
        }
        getBody() {
            return this.ec
        }
        setBody(t) {
            this.ec = t;
            this.md(t);
            this.md = void 0
        }
        waitForBodyOpen() {
            return this.Ea
        }
        isReady() {
            return this.$a
        }
        setReady() {
            this.$a = !0;
            this.Za();
            this.Za = void 0
        }
        whenReady() {
            return this.Ya
        }
        getMeta() {
            return st(this.X)
        }
        setMetaByName(t, e) {
            this.X || (this.X = st());
            this.X[t] = e
        }
    }
    ;
    var nl = class extends el {
        constructor(t, e, i, r) {
            super(t, i, r);
            this.ib = e;
            this.Ea = this.win.document.body ? Promise.resolve(this.win.document.body) : ft(this.win.document).then((()=>this.getBody()));
            this.$a = !1;
            t = new ot;
            this.Ya = t.promise;
            this.Za = t.resolve
        }
        isSingleDoc() {
            return !1
        }
        getRootNode() {
            return this.win.document
        }
        getUrl() {
            return this.ib
        }
        getHeadNode() {
            return this.win.document.head
        }
        isBodyAvailable() {
            return !!this.win.document.body
        }
        getBody() {
            return this.win.document.body
        }
        waitForBodyOpen() {
            return this.Ea
        }
        isReady() {
            return this.$a
        }
        whenReady() {
            return this.Ya
        }
        setReady() {
            this.$a = !0;
            this.Za();
            this.Za = void 0
        }
    }
    ;
    function sl() {
        var t = self;
        Vt(t, "ampdoc", (function() {
            return new tl(t,!0,void 0)
        }
        ))
    }
    function al(t) {
        return t.waitForBodyOpen().then((()=>{
            var e = t.getBody()
              , i = mt(e, (()=>!!e.firstElementChild));
            return me(t.win).timeoutPromise(2e3, i).then((()=>"AMP-STORY" === e.firstElementChild.tagName), (()=>!1))
        }
        ))
    }
    function ol(t) {
        if ("inabox" !== S(t.win).runtime) {
            var e = !1
              , i = !1
              , r = !1
              , n = !1
              , s = s=>{
                if ("first-paint" != s.name || e)
                    if ("first-contentful-paint" != s.name || i)
                        "first-input" !== s.entryType || r ? "layout-shift" === s.entryType ? s.hadRecentInput || (t.jb += s.value) : "largest-contentful-paint" === s.entryType ? (s.loadTime && (t.zb = s.loadTime),
                        s.renderTime && (t.Ab = s.renderTime)) : "navigation" != s.entryType || n || ("domComplete domContentLoadedEventEnd domContentLoadedEventStart domInteractive loadEventEnd loadEventStart requestStart responseStart".split(" ").forEach((e=>t.tick(e, s[e]))),
                        n = !0) : (t.tickDelta("fid", s.processingStart - s.startTime),
                        r = !0);
                    else {
                        var a = s.startTime + s.duration;
                        t.tickDelta("fcp", a);
                        t.tickSinceVisible("fcpv", a);
                        i = !0
                    }
                else
                    t.tickDelta("fp", s.startTime + s.duration),
                    e = !0
            }
              , a = [];
            t.win.PerformancePaintTiming && (t.win.performance.getEntriesByType("paint").forEach(s),
            a.push("paint"));
            t.me && dl(t, s, {
                type: "first-input",
                buffered: !0
            });
            t.Wb && dl(t, s, {
                type: "layout-shift",
                buffered: !0
            });
            t.Vb && dl(t, s, {
                type: "largest-contentful-paint",
                buffered: !0
            });
            t.Ef && dl(t, s, {
                type: "navigation",
                buffered: !0
            });
            0 < a.length && dl(t, s, {
                entryTypes: a
            })
        }
    }
    function hl(t) {
        if (t.win.perfMetrics && t.win.perfMetrics.onFirstInputDelay)
            t.win.perfMetrics.onFirstInputDelay((e=>{
                t.tickDelta("fid-polyfill", e);
                t.flush()
            }
            ))
    }
    function ll(t) {
        var e = !t.w.hasBeenVisible();
        var i = -1;
        t.w.whenFirstVisible().then((()=>{
            i = t.win.performance.now();
            t.mark("visible")
        }
        ));
        pl(t).then((()=>{
            if (e) {
                var r = -1 < i ? t.win.performance.now() - i : 0;
                t.w.whenFirstVisible().then((()=>{
                    t.tickDelta("pc", r)
                }
                ));
                fl(t, r);
                t.mark("pc")
            } else
                t.tick("pc"),
                fl(t, t.win.performance.now() - i);
            t.flush()
        }
        ))
    }
    function ul(t) {
        var e = oe(t.win).getSingleDoc();
        return al(e).then((e=>{
            e && t.addEnabledExperiment("story")
        }
        ))
    }
    function cl(t) {
        t.B && (t.Na && t.Ha.forEach((e=>{
            t.B.sendMessage("tick", e)
        }
        )),
        t.Ha.length = 0)
    }
    function dl(t, e, i) {
        try {
            new t.win.PerformanceObserver((i=>{
                i.getEntries().forEach(e);
                t.flush()
            }
            )).observe(i)
        } catch (t) {}
    }
    function ml(t) {
        t.Wb && (0 === t.Rb ? (t.tickDelta("cls", t.jb),
        t.flush(),
        t.Rb = 1) : 1 === t.Rb && (t.tickDelta("cls-2", t.jb),
        t.flush(),
        t.Rb = 2,
        t.win.removeEventListener("visibilitychange", t.qd, {
            capture: !0
        })));
        if (t.Vb) {
            var e;
            null !== t.zb && (t.tickDelta("lcpl", t.zb),
            e = t.zb);
            null !== t.Ab && (t.tickDelta("lcpr", t.Ab),
            e = e || t.Ab);
            null !== e && t.tickSinceVisible("lcpv", e);
            t.flush()
        }
        t.le || (t.j ? (t.le = !0,
        t.tickDelta("ser", t.j.getSlowElementRatio()),
        t.flush()) : it().error("Performance", "Failed to tick ser due to null resources"))
    }
    function pl(t) {
        return t.j.whenFirstPass().then((()=>{
            var e = t.win.document.documentElement;
            var i = ge(e).getSize();
            i = Lt(0, 0, i.width, i.height);
            return ph(e, t.win, i, !0)
        }
        ))
    }
    function fl(t, e) {
        t.B && t.B.sendMessage("prerenderComplete", at({
            value: e
        }), !0)
    }
    var gl = class {
        constructor(t) {
            this.win = t;
            this.Ha = [];
            this.Yc = t.performance.timeOrigin || t.performance.timing.navigationStart;
            this.yd = this.j = this.B = this.w = null;
            this.Na = this.Ec = !1;
            this.Ad = st();
            this.lb = void 0;
            this.va = new Ss;
            this.jb = this.Rb = 0;
            this.le = !1;
            var e = this.win.PerformanceObserver && this.win.PerformanceObserver.supportedEntryTypes || [];
            e.includes("paint") || this.va.rejectSignal("fcp", it().createExpectedError("First Contentful Paint not supported"));
            (this.Wb = e.includes("layout-shift")) || this.va.rejectSignal("cls", it().createExpectedError("Cumulative Layout Shift not supported"));
            (this.me = e.includes("first-input")) || this.va.rejectSignal("fid", it().createExpectedError("First Input Delay not supported"));
            (this.Vb = e.includes("largest-contentful-paint")) || this.va.rejectSignal("lcpv", it().createExpectedError("Largest Contentful Paint not supported"));
            this.Ef = e.includes("navigation");
            this.Ab = this.zb = null;
            this.qd = this.pf.bind(this);
            this.Mc = this.Mc.bind(this);
            this.addEnabledExperiment("rtv-" + S(this.win).rtvVersion);
            Sa(t.document).then((()=>{
                this.tick("dr");
                this.flush()
            }
            ));
            xa(t.document).then((()=>{
                this.tick("ol");
                if (!this.win.PerformancePaintTiming && this.win.chrome && "function" == typeof this.win.chrome.loadTimes) {
                    var t = 1e3 * this.win.chrome.loadTimes().firstPaintTime - this.win.performance.timing.navigationStart;
                    1 >= t || this.tickDelta("fp", t)
                }
                this.flush()
            }
            ));
            ol(this);
            hl(this)
        }
        coreServicesAvailable() {
            var t = this.win.document.documentElement;
            this.w = qt(t);
            this.B = pe(t);
            this.j = de(t);
            this.yd = le(this.w);
            this.Na = this.B.isEmbedded() && "1" === this.B.getParam("csi");
            this.w.onVisibilityChanged(this.flush.bind(this));
            ll(this);
            var e = this.B.whenMessagingReady();
            this.w.whenFirstVisible().then((()=>{
                this.tick("ofv");
                this.flush()
            }
            ));
            if (this.Vb || this.Wb)
                this.win.addEventListener("visibilitychange", this.qd, {
                    capture: !0
                }),
                this.w.onVisibilityChanged(this.Mc);
            return e ? e.then((()=>{
                this.tickDelta("msr", this.win.performance.now());
                this.tick("timeOrigin", void 0, this.Yc);
                var t = this.w.getMetaByName("amp-usqp");
                t && t.split(",").forEach((t=>{
                    this.addEnabledExperiment("ssr-" + t)
                }
                ));
                return ul(this)
            }
            )).then((()=>{
                this.Ec = !0;
                cl(this);
                this.flush()
            }
            )) : r()
        }
        pf() {
            "hidden" === this.win.document.visibilityState && ml(this)
        }
        Mc() {
            "inactive" === this.w.getVisibilityState() && ml(this)
        }
        tick(t, e, i) {
            var r = at({
                label: t
            });
            var n;
            void 0 != e ? r.delta = n = Math.max(e, 0) : void 0 != i ? r.value = i : (this.mark(t),
            n = this.win.performance.now(),
            r.value = this.Yc + n);
            this.win.dispatchEvent(er(this.win, "perf", {
                label: t,
                delta: n
            }));
            this.Ec && this.Na ? this.B.sendMessage("tick", r) : (50 <= this.Ha.length && this.Ha.shift(),
            this.Ha.push(r));
            this.va.signal(t, n)
        }
        mark(t) {
            this.win.performance && this.win.performance.mark && 1 == arguments.length && this.win.performance.mark(t)
        }
        tickDelta(t, e) {
            this.tick(t, e)
        }
        tickSinceVisible(t, e) {
            e = void 0 == e ? this.win.performance.now() : e;
            e = this.Yc + e;
            var i = this.w && this.w.getFirstVisibleTime();
            this.tickDelta(t, i ? Math.max(e - i, 0) : 0)
        }
        flush() {
            this.Ec && this.Na && (null == this.lb && (this.lb = Object.keys(this.Ad).join(",")),
            this.B.sendMessage("sendCsi", at({
                ampexp: this.lb,
                canonicalUrl: this.yd.canonicalUrl
            }), !0))
        }
        throttledFlush() {
            this.ne || (this.ne = _r(this.win, this.flush.bind(this)));
            this.ne()
        }
        addEnabledExperiment(t) {
            this.Ad[t] = !0;
            this.lb = void 0
        }
        isPerformanceTrackingOn() {
            return this.Na
        }
        getMetric(t) {
            return this.va.whenSignal(t)
        }
    }
    ;
    function vl(t) {
        var e = `${L.cdn}/examiner.js`;
        var i = t.createElement("script");
        i.src = e;
        (e = t.head.querySelector("script[nonce]")) && i.setAttribute("nonce", e.getAttribute("nonce"));
        ar(i).then((()=>{
            t.head.removeChild(i)
        }
        ), (()=>{}
        ));
        t.head.appendChild(i)
    }
    S(self).runtime = "inabox";
    S(self).a4aId = function(t) {
        var e = t.document.head.querySelector('meta[name="amp4ads-id"]');
        return e ? e.getAttribute("content") : null
    }(self);
    var bl;
    try {
        jr(),
        sl(),
        bl = oe(self)
    } catch (t) {
        throw wr(self.document),
        t
    }
    (function() {
        Ds = !0
    }
    )();
    Ns(self.document, (function() {
        var t = bl.getAmpDoc(self.document);
        Vt(self, "platform", wa);
        Vt(self, "performance", gl);
        var e = Ut(self, "performance");
        e.tick("is");
        self.document.documentElement.classList.add("i-amphtml-inabox");
        pr(t, "[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill){display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-for-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/html.i-amphtml-inabox{width:100%!important;height:100%!important}", (()=>{
            Ns(self.document, (function() {
                Go(self);
                uh();
                var i = t.win;
                Cs(i.top) || Vt(i, "iframeMessagingClient", wh.bind(null, i), !0);
                Bt(t, "url", za, !0);
                Bt(t, "documentInfo", Hn);
                Bt(t, "cid", Ah);
                Bt(t, "viewer", Oh, !0);
                Jh(t);
                Bt(t, "hidden-observer", Jn);
                Bt(t, "history", ps);
                Bt(t, "resources", xh);
                Bt(t, "owners", pa);
                Bt(t, "mutator", Eh);
                Oo(t);
                Bt(t, "action", tn, !0);
                Bt(t, "standard-actions", Fa, !0);
                i = Error("Un-supported service: storage");
                var n = qt(t);
                n = Xt(n);
                n = Zt(n);
                var s = n.storage;
                s ? s.reject && s.reject(i) : (n.storage = ee(),
                n.storage.reject(i));
                Bt(t, "navigation", Si, !0);
                Wn(t);
                e.coreServicesAvailable();
                ui = r();
                gh(t)
            }
            ));
            Ns(self.document, (function() {
                var t = self;
                Qs(t, "amp-img", na);
                Qs(t, "amp-pixel", ba);
                Qs(t, "amp-layout", oa)
            }
            ));
            Ns(self.document, (function() {
                ah()
            }
            ));
            Ns(self.document, (function() {
                Ys(t)
            }
            ));
            Ns(self.document, (function() {
                self.document.documentElement.addEventListener("click", xi.bind(null, t), !0);
                var e = self;
                e.location.href.startsWith("about:") || S().examiner && vl(e.document);
                yr()
            }
            ), !0);
            Ns(self.document, (function() {
                e.tick("e_is");
                de(t).ampInitComplete();
                e.flush()
            }
            ))
        }
        ), !0, "amp-runtime")
    }
    ));
    self.console && (console.info || console.log).call(console, "Powered by AMP ⚡ HTML – Version 2010270040000", self.location.href);
    self.document.documentElement.setAttribute("amp-version", "2010270040000")
}
)();
