(self.AMP = self.AMP || []).push({
    n: "amp-analytics",
    v: "2010270040000",
    f: function(e, t) {
        var r;
        function i() {
            return r ? r : r = Promise.resolve(void 0)
        }
        var n = class {
            constructor() {
                var e, t;
                this.promise = new Promise(((r,i)=>{
                    e = r;
                    t = i
                }
                ));
                this.resolve = e;
                this.reject = t
            }
        }
        ;
        function s(e) {
            return new Promise((t=>{
                t(e())
            }
            ))
        }
        function a(e, t="") {
            try {
                return decodeURIComponent(e)
            } catch (e) {
                return t
            }
        }
        var o = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
        function l(e) {
            var t = Object.create(null);
            if (!e)
                return t;
            var r;
            for (; r = o.exec(e); ) {
                var i = a(r[1], r[1])
                  , n = r[2] ? a(r[2].replace(/\+/g, " "), r[2]) : "";
                t[i] = n
            }
            return t
        }
        var h = "";
        function c(e) {
            var t = e || self;
            if (t.__AMP_MODE)
                var r = t.__AMP_MODE;
            else {
                r = l(t.location.originalHash || t.location.hash);
                var i = l(t.location.search);
                h || (h = t.AMP_CONFIG && t.AMP_CONFIG.v ? t.AMP_CONFIG.v : "012010270040000");
                r = {
                    localDev: !1,
                    development: !!(0 <= ["1", "actions", "amp", "amp4ads", "amp4email"].indexOf(r.development) || t.AMP_DEV_MODE),
                    examiner: "2" == r.development,
                    esm: !0,
                    geoOverride: r["amp-geo"],
                    minified: !0,
                    lite: void 0 != i.amp_lite,
                    test: !1,
                    log: r.log,
                    version: "2010270040000",
                    rtvVersion: h
                };
                r = t.__AMP_MODE = r
            }
            return r
        }
        var u = Object.prototype.toString;
        function d(e) {
            return Array.isArray(e)
        }
        function m(e) {
            return "[object Object]" === u.call(e)
        }
        function p(e) {
            return "number" === typeof e && isFinite(e)
        }
        function f(e) {
            var t = or;
            for (var r in t)
                if (t[r] === e)
                    return !0;
            return !1
        }
        var v = self.AMP_CONFIG || {}
          , g = ("string" == typeof v.cdnProxyRegex ? new RegExp(v.cdnProxyRegex) : v.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
        function b(e) {
            if (!self.document || !self.document.head || self.location && g.test(self.location.origin))
                return null;
            var t = self.document.head.querySelector(`meta[name="${e}"]`);
            return t && t.getAttribute("content") || null
        }
        var y = {
            thirdParty: v.thirdPartyUrl || "https://3p.ampproject.net",
            thirdPartyFrameHost: v.thirdPartyFrameHost || "ampproject.net",
            thirdPartyFrameRegex: ("string" == typeof v.thirdPartyFrameRegex ? new RegExp(v.thirdPartyFrameRegex) : v.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
            cdn: v.cdnUrl || b("runtime-host") || "https://cdn.ampproject.org",
            cdnProxyRegex: g,
            localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
            errorReporting: v.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
            betaErrorReporting: v.betaErrorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
            localDev: v.localDev || !1,
            trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
            geoApi: v.geoApiUrl || b("amp-geo-api")
        };
        function E(e) {
            var t = null;
            var r = "";
            for (var i = 0; i < arguments.length; i++) {
                var n = arguments[i];
                if (n instanceof Error && !t)
                    e: {
                        t = n;
                        if ((n = Object.getOwnPropertyDescriptor(t, "message")) && n.writable)
                            break e;
                        n = t.stack;
                        var s = Error(t.message);
                        for (var a in t)
                            s[a] = t[a];
                        s.stack = n;
                        t = s
                    }
                else
                    r && (r += " "),
                    r += n
            }
            t ? r && (t.message = r + ": " + t.message) : t = Error(r);
            return t
        }
        function w(e) {
            var t = E.apply(null, arguments);
            setTimeout((()=>{
                self.__AMP_REPORT_ERROR(t);
                throw t
            }
            ))
        }
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var A = self.__AMP_LOG;
        function T() {
            if (!A.user)
                throw Error("failed to call initLogConstructor");
            return A.user
        }
        function O() {
            if (A.dev)
                return A.dev;
            throw Error("failed to call initLogConstructor")
        }
        function R(e, t, r, i, n, s) {
            return T().assert(e, t, r, i, n, s, void 0, void 0, void 0, void 0, void 0)
        }
        function S(e, t) {
            e = I(e);
            return D(e, t)
        }
        function P(e, t) {
            var r = C(e);
            r = x(r);
            return D(r, t)
        }
        function _(e, t) {
            e = C(e);
            e = x(e);
            return V(e, t) ? D(e, t) : null
        }
        function M(e, t) {
            return L(x(e), t)
        }
        function I(e) {
            return e.__AMP_TOP || (e.__AMP_TOP = e)
        }
        function N(e, t) {
            var r = (e.ownerDocument || e).defaultView;
            e = t || I(r);
            if (r && r != e && I(r) == e)
                try {
                    return r.frameElement
                } catch (e) {}
            return null
        }
        function C(e) {
            return e.nodeType ? S((e.ownerDocument || e).defaultView, "ampdoc").getAmpDoc(e) : e
        }
        function x(e) {
            e = C(e);
            return e.isSingleDoc() ? e.win : e
        }
        function D(e, t) {
            V(e, t);
            e = U(e)[t];
            e.obj || (e.obj = new e.ctor(e.context),
            e.ctor = null,
            e.context = null,
            e.resolve && e.resolve(e.obj));
            return e.obj
        }
        function j(e, t, r, i) {
            var n = U(e);
            var s = n[r];
            s || (s = n[r] = {
                obj: null,
                promise: null,
                resolve: null,
                reject: null,
                context: null,
                ctor: null
            });
            s.ctor || s.obj || (s.ctor = i,
            s.context = t,
            s.resolve && D(e, r))
        }
        function k(e, t) {
            var r = L(e, t);
            if (r)
                return r;
            e = U(e);
            e[t] = F();
            return e[t].promise
        }
        function L(e, t) {
            var r = U(e)[t];
            if (r) {
                if (r.promise)
                    return r.promise;
                D(e, t);
                return r.promise = Promise.resolve(r.obj)
            }
            return null
        }
        function U(e) {
            var t = e.__AMP_SERVICES;
            t || (t = e.__AMP_SERVICES = {});
            return t
        }
        function V(e, t) {
            e = e.__AMP_SERVICES && e.__AMP_SERVICES[t];
            return !(!e || !e.ctor && !e.obj)
        }
        function F() {
            var e = new n
              , t = e.promise
              , r = e.resolve
              , i = e.reject;
            t.catch((()=>{}
            ));
            return {
                obj: null,
                promise: t,
                resolve: r,
                reject: i,
                context: null,
                ctor: null
            }
        }
        /*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        var H;
        function B(e) {
            try {
                var t = e.ownerDocument
                  , r = t.createElement("div")
                  , i = t.createElement("div");
                r.appendChild(i);
                return r.querySelector(":scope div") === i
            } catch (e) {
                return !1
            }
        }
        var q = Object.prototype.hasOwnProperty;
        function G(e) {
            return e || {}
        }
        function $(e, t) {
            return q.call(e, t)
        }
        function W(e, t, r=10) {
            var i = []
              , n = [];
            for (n.push({
                t: e,
                s: t,
                d: 0
            }); 0 < n.length; ) {
                let {t: e, s: t, d: s} = n.shift();
                if (i.includes(t))
                    throw Error("Source object has a circular reference.");
                i.push(t);
                e !== t && (s > r ? Object.assign(e, t) : Object.keys(t).forEach((r=>{
                    var i = t[r];
                    if ($(e, r)) {
                        var a = e[r];
                        if (m(i) && m(a)) {
                            n.push({
                                t: a,
                                s: i,
                                d: s + 1
                            });
                            return
                        }
                    }
                    e[r] = i
                }
                )))
            }
        }
        function z(e, t) {
            var r = e.length - t.length;
            return 0 <= r && e.indexOf(t, r) == r
        }
        function J(e, t) {
            for (var r = 0; 5 > r; r++) {
                let r = 0;
                e = e.replace(/\${([^}]*)}/g, ((e,i)=>{
                    r++;
                    return t(i)
                }
                ));
                if (!r)
                    break
            }
            return e
        }
        function Y(e, t) {
            var r = /\${([^}]*)}/g;
            if ("string" === typeof t)
                return Promise.resolve(e.replace(r, t));
            var i = [];
            var n = 0;
            e.replace(r, (function(r) {
                var s = arguments[arguments.length - 2];
                i.push(e.slice(n, s));
                n = s + r.length;
                var a = t.apply(null, arguments);
                i.push(a)
            }
            ));
            i.push(e.slice(n));
            return Promise.all(i).then((e=>e.join("")))
        }
        function K(e, t, r) {
            e = e.createElement(t);
            for (var i in r)
                e.setAttribute(i, r[i]);
            return e
        }
        function X(e, t) {
            for (; e && void 0 !== e; e = e.parentElement)
                if (t(e))
                    return e;
            return null
        }
        function Z(e, t) {
            return e.closest ? e.closest(t) : X(e, (e=>ee(e, t)))
        }
        function Q(e, t) {
            for (e = e.lastElementChild; e; e = e.previousElementSibling)
                if (t(e))
                    return e;
            return null
        }
        function ee(e, t) {
            var r = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
            return r ? r.call(e, t) : !1
        }
        function te(e, t) {
            e.classList.add("i-amphtml-scoped");
            var r = t.replace(/^|,/g, "$&.i-amphtml-scoped ")
              , i = e.querySelectorAll(r);
            e.classList.remove("i-amphtml-scoped");
            return i
        }
        function re(e, t) {
            var r = e=>e
              , i = e.dataset;
            e = {};
            var n = t ? t : /^param(.+)/;
            for (var s in i) {
                var a = s.match(n);
                a && (a = a[1][0].toLowerCase() + a[1].substr(1),
                e[r(a)] = i[s])
            }
            return e
        }
        function ie(e) {
            return ne(e, "userNotificationManager", "amp-user-notification", void 0).then((e=>R(e, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", "userNotificationManager", "amp-user-notification", "amp-user-notification", "amp-user-notification")))
        }
        function ne(e, t, r, n) {
            var s = M(e, t);
            if (s)
                return s;
            var a = C(e);
            return a.waitForBodyOpen().then((()=>{
                var e = a.win;
                var t = a.win.document.head;
                if (t) {
                    var n = {};
                    t = t.querySelectorAll("script[custom-element],script[custom-template]");
                    for (var s = 0; s < t.length; s++) {
                        var o = t[s];
                        o = o.getAttribute("custom-element") || o.getAttribute("custom-template");
                        n[o] = !0
                    }
                    n = Object.keys(n)
                } else
                    n = [];
                return n.includes(r) ? S(e, "extensions").waitForExtension(e, r) : i()
            }
            )).then((()=>{
                if (n)
                    var i = M(e, t);
                else
                    i = a.win,
                    i = i.__AMP_EXTENDED_ELEMENTS && i.__AMP_EXTENDED_ELEMENTS[r] ? k(x(e), t) : null;
                return i
            }
            ))
        }
        function se(e) {
            return S(e, "performance")
        }
        function ae(e) {
            return _(e, "url-replace")
        }
        function oe(e) {
            return ne(e, "consentPolicyManager", "amp-consent")
        }
        function le(e) {
            return P(e, "viewport")
        }
        var he;
        function ce(e, t, r, i) {
            var n, s = e, a = r;
            n = e=>{
                try {
                    return a(e)
                } catch (e) {
                    throw self.__AMP_REPORT_ERROR(e),
                    e
                }
            }
            ;
            var o = ue();
            var l = !1;
            i && (l = i.capture);
            s.addEventListener(t, n, o ? i : l);
            return ()=>{
                s && s.removeEventListener(t, n, o ? i : l);
                n = s = a = null
            }
        }
        function ue() {
            if (void 0 !== he)
                return he;
            he = !1;
            try {
                var e = {
                    get capture() {
                        he = !0
                    }
                };
                self.addEventListener("test-options", null, e);
                self.removeEventListener("test-options", null, e)
            } catch (e) {}
            return he
        }
        function de(e, t, r, i) {
            var n = r;
            var s = ce(e, t, (e=>{
                try {
                    n(e)
                } finally {
                    n = null,
                    s()
                }
            }
            ), i);
            return s
        }
        function me(e) {
            return !!(e.complete || "complete" == e.readyState || fe(e) && 0 < e.readyState || e.document && "complete" == e.document.readyState)
        }
        function pe(e) {
            var t, r;
            if (me(e))
                return Promise.resolve(e);
            var i = fe(e);
            return i && e.__AMP_MEDIA_LOAD_FAILURE_SRC === e.currentSrc ? Promise.reject(e) : new Promise(((n,s)=>{
                t = i ? de(e, "loadedmetadata", n, {
                    capture: !0
                }) : de(e, "load", n);
                if (e.tagName) {
                    var a = e;
                    if (i && !e.hasAttribute("src") && (a = Q(e, (e=>"SOURCE" === e.tagName)),
                    !a))
                        return s(Error("Media has no source."));
                    r = de(a, "error", s)
                }
            }
            )).then((()=>{
                r && r();
                return e
            }
            ), (()=>{
                t && t();
                fe(e) && (e.__AMP_MEDIA_LOAD_FAILURE_SRC = e.currentSrc || !0);
                var r = e;
                r && r.src && (r = r.src);
                throw T().createError("Failed to load:", r)
            }
            ))
        }
        function fe(e) {
            return "AUDIO" === e.tagName || "VIDEO" === e.tagName
        }
        function ve(e, t) {
            var r = 0;
            "active" === e.type && (r = 5);
            return Math.min(t - e.time, r)
        }
        var ge = class {
            constructor() {
                this.Hb = 0;
                this.la = void 0
            }
            push(e) {
                this.la && this.la.time < e.time && (this.Hb += ve(this.la, e.time));
                this.la = e
            }
            getTotalEngagedTime(e) {
                var t = 0;
                void 0 !== this.la && (t = this.Hb + ve(this.la, e));
                return t
            }
        }
        ;
        var be = ["mousedown", "mouseup", "mousemove", "keydown", "keyup"]
          , ye = ["mouseleave"];
        function Ee(e) {
            var t = Date.now() - e.V;
            return 0 < t ? t : 0
        }
        function we(e, t) {
            var r = Ee(e)
              , i = Math.floor(r / 1e3);
            setTimeout(e.Dc, 1e3 - r % 1e3);
            e.Lb.push({
                type: t,
                time: i
            })
        }
        var Ae = class {
            constructor(e) {
                this.ampdoc = e;
                this.Dc = this.kd.bind(this);
                this.Pb = this.ub.bind(this);
                this.Bc = this.Zb.bind(this);
                this.Cc = this.Sc.bind(this);
                this.Fa = {};
                this.pa = [];
                this.Wa = this.Va = !1;
                this.Lb = new ge;
                this.R = le(this.ampdoc);
                this.ampdoc.whenFirstVisible().then(this.jd.bind(this))
            }
            jd() {
                this.V = Date.now();
                this.ub();
                var e = this.ampdoc.getRootNode()
                  , t = this.Pb;
                for (var r = 0; r < be.length; r++)
                    this.pa.push(ce(e, be[r], t, void 0));
                e = this.ampdoc.getRootNode();
                t = this.Bc;
                for (r = 0; r < ye.length; r++)
                    this.pa.push(ce(e, ye[r], t, void 0));
                this.pa.push(this.ampdoc.onVisibilityChanged(this.Cc));
                this.R.onScroll(this.Pb)
            }
            kd() {
                this.Wa = this.Va = !1
            }
            ub() {
                this.Va || (this.Va = !0,
                this.Wa = !1,
                we(this, "active"))
            }
            Zb() {
                this.Wa || (this.Wa = !0,
                this.Va = !1,
                we(this, "inactive"))
            }
            Sc() {
                this.ampdoc.isVisible() ? this.ub() : this.Zb()
            }
            Jb() {
                for (var e = 0; e < this.pa.length; e++) {
                    var t = this.pa[e];
                    "function" === typeof t && t()
                }
                this.pa = []
            }
            od() {
                this.Jb()
            }
            getTotalEngagedTime() {
                var e = Math.floor(Ee(this) / 1e3);
                return this.Lb.getTotalEngagedTime(e)
            }
            getIncrementalEngagedTime(e, t=!0) {
                if (!$(this.Fa, e))
                    return t && (this.Fa[e] = this.getTotalEngagedTime()),
                    this.getTotalEngagedTime();
                var r = this.Fa[e];
                if (!1 === t)
                    return this.getTotalEngagedTime() - r;
                this.Fa[e] = this.getTotalEngagedTime();
                return this.Fa[e] - r
            }
        }
        ;
        function Te(e, t) {
            try {
                return JSON.parse(e)
            } catch (e) {
                return t && t(e),
                null
            }
        }
        var Oe = JSON.parse('{"transport":{"beacon":true,"xhrpost":true,"image":true},"vars":{"accessReaderId":"ACCESS_READER_ID","ampGeo":"AMP_GEO","ampState":"AMP_STATE","ampVersion":"AMP_VERSION","ampdocHost":"AMPDOC_HOST","ampdocHostname":"AMPDOC_HOSTNAME","ampdocMeta":"AMPDOC_META","ampdocUrl":"AMPDOC_URL","authdata":"AUTHDATA","availableScreenHeight":"AVAILABLE_SCREEN_HEIGHT","availableScreenWidth":"AVAILABLE_SCREEN_WIDTH","backgroundState":"BACKGROUND_STATE","browserLanguage":"BROWSER_LANGUAGE","canonicalHost":"CANONICAL_HOST","canonicalHostname":"CANONICAL_HOSTNAME","canonicalPath":"CANONICAL_PATH","canonicalUrl":"CANONICAL_URL","clientId":"CLIENT_ID","consentState":"CONSENT_STATE","contentLoadTime":"CONTENT_LOAD_TIME","cookie":"COOKIE","counter":"COUNTER","cumulativeLayoutShift":"CUMULATIVE_LAYOUT_SHIFT","documentCharset":"DOCUMENT_CHARSET","documentReferrer":"DOCUMENT_REFERRER","domInteractiveTime":"DOM_INTERACTIVE_TIME","domainLookupTime":"DOMAIN_LOOKUP_TIME","experimentBranches":"EXPERIMENT_BRANCHES","externalReferrer":"EXTERNAL_REFERRER","firstContentfulPaint":"FIRST_CONTENTFUL_PAINT","firstInputDelay":"FIRST_INPUT_DELAY","firstViewportReady":"FIRST_VIEWPORT_READY","fragmentParam":"FRAGMENT_PARAM","htmlAttr":"HTML_ATTR","incrementalEngagedTime":"INCREMENTAL_ENGAGED_TIME","largestContentfulPaint":"LARGEST_CONTENTFUL_PAINT","makeBodyVisible":"MAKE_BODY_VISIBLE","navRedirectCount":"NAV_REDIRECT_COUNT","navTiming":"NAV_TIMING","navType":"NAV_TYPE","pageDownloadTime":"PAGE_DOWNLOAD_TIME","pageLoadTime":"PAGE_LOAD_TIME","pageViewId":"PAGE_VIEW_ID","queryParam":"QUERY_PARAM","random":"RANDOM","redirectTime":"REDIRECT_TIME","resourceTiming":"RESOURCE_TIMING","screenColorDepth":"SCREEN_COLOR_DEPTH","screenHeight":"SCREEN_HEIGHT","screenWidth":"SCREEN_WIDTH","scrollHeight":"SCROLL_HEIGHT","scrollLeft":"SCROLL_LEFT","scrollTop":"SCROLL_TOP","scrollWidth":"SCROLL_WIDTH","serverResponseTime":"SERVER_RESPONSE_TIME","sourceHost":"SOURCE_HOST","sourceHostname":"SOURCE_HOSTNAME","sourcePath":"SOURCE_PATH","sourceUrl":"SOURCE_URL","tcpConnectTime":"TCP_CONNECT_TIME","timestamp":"TIMESTAMP","timezone":"TIMEZONE","timezoneCode":"TIMEZONE_CODE","title":"TITLE","totalEngagedTime":"TOTAL_ENGAGED_TIME","userAgent":"USER_AGENT","viewer":"VIEWER","viewportHeight":"VIEWPORT_HEIGHT","viewportWidth":"VIEWPORT_WIDTH"}}');
        var Re = class {
            constructor(e) {
                this.Gc = e;
                this.mb = this.Gb = 0;
                this.Ka = Object.create(null)
            }
            has(e) {
                return !!this.Ka[e]
            }
            get(e) {
                var t = this.Ka[e];
                if (t)
                    return t.access = ++this.mb,
                    t.payload
            }
            put(e, t) {
                this.has(e) || this.Gb++;
                this.Ka[e] = {
                    payload: t,
                    access: this.mb
                };
                if (!(this.Gb <= this.Gc)) {
                    e = this.Ka;
                    var r = this.mb + 1;
                    for (var i in e) {
                        var {access: n} = e[i];
                        if (n < r) {
                            r = n;
                            var s = i
                        }
                    }
                    void 0 !== s && (delete e[s],
                    this.Gb--)
                }
            }
        }
        ;
        var Se = G({
            c: !0,
            v: !0,
            a: !0,
            ad: !0
        });
        var Pe, _e;
        var Me = /[?&]amp_js[^&]*/
          , Ie = /[?&]amp_gsa[^&]*/
          , Ne = /[?&]amp_r[^&]*/
          , Ce = /[?&]amp_kit[^&]*/
          , xe = /[?&]usqp[^&]*/;
        function De(e) {
            Pe || (Pe = self.document.createElement("a"),
            _e = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new Re(100)));
            var t = _e
              , r = Pe;
            if (t && t.has(e))
                e = t.get(e);
            else {
                r.href = e;
                r.protocol || (r.href = r.href);
                var i = {
                    href: r.href,
                    protocol: r.protocol,
                    host: r.host,
                    hostname: r.hostname,
                    port: "0" == r.port ? "" : r.port,
                    pathname: r.pathname,
                    search: r.search,
                    hash: r.hash,
                    origin: null
                };
                "/" !== i.pathname[0] && (i.pathname = "/" + i.pathname);
                if ("http:" == i.protocol && 80 == i.port || "https:" == i.protocol && 443 == i.port)
                    i.port = "",
                    i.host = i.hostname;
                i.origin = r.origin && "null" != r.origin ? r.origin : "data:" != i.protocol && i.host ? i.protocol + "//" + i.host : i.href;
                t && t.put(e, i);
                e = i
            }
            return e
        }
        function je(e, t, r) {
            if (!t)
                return e;
            var i = e.split("#", 2)
              , n = i[0].split("?", 2);
            var s = n[0] + (n[1] ? r ? `?${t}&${n[1]}` : `?${n[1]}&${t}` : `?${t}`);
            return s += i[1] ? `#${i[1]}` : ""
        }
        function ke(e) {
            var t = [];
            for (var r in e) {
                var i = e[r];
                if (null != i)
                    if (d(i))
                        for (var n = 0; n < i.length; n++) {
                            var s = i[n];
                            t.push(`${encodeURIComponent(r)}=${encodeURIComponent(s)}`)
                        }
                    else
                        t.push(`${encodeURIComponent(r)}=${encodeURIComponent(i)}`)
            }
            return t.join("&")
        }
        function Le(e, t) {
            R(null != e, "%s %s must be available", t, "source");
            var r = e;
            "string" == typeof r && (r = De(r));
            r = "https:" == r.protocol || "localhost" == r.hostname || "127.0.0.1" == r.hostname || z(r.hostname, ".localhost");
            R(r || /^(\/\/)/.test(e), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', t, "source", e)
        }
        function Ue(e) {
            "string" == typeof e && (e = De(e));
            return y.cdnProxyRegex.test(e.origin)
        }
        function Ve(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                )));
                r.push.apply(r, i)
            }
            return r
        }
        function Fe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ve(Object(r), !0).forEach((function(t) {
                    var i = r[t];
                    t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ve(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function He(e) {
            if (e.__AMP__EXPERIMENT_TOGGLES)
                return e.__AMP__EXPERIMENT_TOGGLES;
            e.__AMP__EXPERIMENT_TOGGLES = Object.create(null);
            var t = e.__AMP__EXPERIMENT_TOGGLES;
            if (e.AMP_CONFIG)
                for (var r in e.AMP_CONFIG) {
                    var i = e.AMP_CONFIG[r];
                    "number" === typeof i && 0 <= i && 1 >= i && (t[r] = Math.random() < i)
                }
            if (e.AMP_CONFIG && Array.isArray(e.AMP_CONFIG["allow-doc-opt-in"]) && 0 < e.AMP_CONFIG["allow-doc-opt-in"].length) {
                var n = e.AMP_CONFIG["allow-doc-opt-in"]
                  , s = e.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
                if (s) {
                    var a = s.getAttribute("content").split(",");
                    for (r = 0; r < a.length; r++)
                        -1 != n.indexOf(a[r]) && (t[a[r]] = !0)
                }
            }
            Object.assign(t, Be(e));
            if (e.AMP_CONFIG && Array.isArray(e.AMP_CONFIG["allow-url-opt-in"]) && 0 < e.AMP_CONFIG["allow-url-opt-in"].length) {
                r = e.AMP_CONFIG["allow-url-opt-in"];
                e = l(e.location.originalHash || e.location.hash);
                for (var o = 0; o < r.length; o++) {
                    var h = e[`e-${r[o]}`];
                    "1" == h && (t[r[o]] = !0);
                    "0" == h && (t[r[o]] = !1)
                }
            }
            return t
        }
        function Be(e) {
            var t = "";
            try {
                "localStorage"in e && (t = e.localStorage.getItem("amp-experiment-toggles"))
            } catch (e) {}
            var r = t ? t.split(/\s*,\s*/g) : [];
            e = Object.create(null);
            for (var i = 0; i < r.length; i++)
                0 != r[i].length && ("-" == r[i][0] ? e[r[i].substr(1)] = !1 : e[r[i]] = !0);
            return e
        }
        function qe(e) {
            e = I(e);
            e.__AMP_EXPERIMENT_BRANCHES || (e.__AMP_EXPERIMENT_BRANCHES = {});
            return Fe({}, e.__AMP_EXPERIMENT_BRANCHES)
        }
        function Ge(e) {
            return "undefined" !== typeof TextEncoder ? new TextEncoder("utf-8").encode(e) : $e(unescape(encodeURIComponent(e)))
        }
        function $e(e) {
            var t = new Uint8Array(e.length);
            for (var r = 0; r < e.length; r++) {
                var i = e.charCodeAt(r);
                t[r] = i
            }
            return t
        }
        function We(e) {
            var t = Array(e.length);
            for (var r = 0; r < e.length; r++)
                t[r] = String.fromCharCode(e[r]);
            return t.join("")
        }
        var ze = {
            "-": "+",
            _: "/",
            ".": "="
        }
          , Je = {
            "+": "-",
            "/": "_",
            "=": "."
        };
        function Ye(e) {
            var t = atob(e.replace(/[-_.]/g, (e=>ze[e])));
            return $e(t)
        }
        function Ke(e) {
            e = We(e);
            return btoa(e).replace(/[+/=]/g, (e=>Je[e]))
        }
        function Xe(e) {
            e = Ge(e);
            return Ke(e)
        }
        function Ze(e, t) {
            var r = Qe(e);
            if (!r)
                return null;
            var i = r.split(";");
            for (e = 0; e < i.length; e++) {
                var n = i[e].trim()
                  , s = n.indexOf("=");
                var o;
                if (o = -1 != s)
                    o = n.substring(0, s).trim(),
                    o = a(o, void 0) == t;
                if (o)
                    return t = n.substring(s + 1).trim(),
                    a(t, t)
            }
            return null
        }
        function Qe(e) {
            try {
                return e.document.cookie
            } catch (e) {
                return ""
            }
        }
        function et(e) {
            var t = e.document.head && e.document.head.querySelector("meta[name='amp-cookie-scope']");
            if (t) {
                var r = t.getAttribute("content") || "";
                e = e.location.href;
                "string" == typeof e && (e = De(e));
                if (Ue(e)) {
                    var i = e.pathname.split("/");
                    R(Se[i[1]], "Unknown path prefix in url %s", e.href);
                    var n = i[2]
                      , s = "s" == n ? "https://" + decodeURIComponent(i[3]) : "http://" + decodeURIComponent(n);
                    R(0 < s.indexOf("."), "Expected a . in origin %s", s);
                    i.splice(1, "s" == n ? 3 : 2);
                    i = s + i.join("/");
                    n = (n = e.search) && "?" != n ? (n = n.replace(Me, "").replace(Ie, "").replace(Ne, "").replace(Ce, "").replace(xe, "").replace(/^[?&]/, "")) ? "?" + n : "" : "";
                    e = i + n + (e.hash || "")
                } else
                    e = e.href;
                e = De(e).origin;
                return z(e, "." + r) ? r : e.split("://")[1]
            }
            if (!Ue(e.location.href)) {
                i = e.location.hostname.split(".");
                n = i[i.length - 1];
                for (s = "-test-amp-cookie-tmp"; Ze(e, s); )
                    s = "-test-amp-cookie-tmp0";
                for (var a = i.length - 2; 0 <= a; a--)
                    if (n = i[a] + "." + n,
                    tt(e, s, "delete", Date.now() + 1e3, n),
                    "delete" == Ze(e, s))
                        return tt(e, s, "delete", Date.now() - 1e3, n),
                        n
            }
            return null
        }
        function tt(e, t, r, i, n, s, a) {
            "ampproject.org" == n && (r = "delete",
            i = 0);
            t = encodeURIComponent(t) + "=" + encodeURIComponent(r) + "; path=/" + (n ? "; domain=" + n : "") + "; expires=" + new Date(i).toUTCString() + (s ? `; SameSite=${s}` : "") + (a ? "; Secure" : "");
            try {
                e.document.cookie = t
            } catch (e) {}
        }
        function rt(e) {
            if (!it(e))
                return null;
            var t = e.indexOf("{");
            try {
                return JSON.parse(e.substr(t))
            } catch (t) {
                return O().error("MESSAGING", "Failed to parse message: " + e, t),
                null
            }
        }
        function it(e) {
            return "string" == typeof e && 0 == e.indexOf("amp-") && -1 != e.indexOf("{")
        }
        function nt(e, t) {
            var r = [];
            var i = 0;
            for (var n = 0; n < e.length; n++) {
                var s = e[n];
                t(s, n, e) ? r.push(s) : (i < n && (e[i] = s),
                i++)
            }
            i < e.length && (e.length = i)
        }
        function st(e, t) {
            for (var r = 0; r < e.length; r++)
                if (t(e[r], r, e))
                    return r;
            return -1
        }
        var at;
        var ot = "Webkit webkit Moz moz ms O o".split(" ");
        function lt(e) {
            var t = !1;
            void 0 === t && (t = e.hasAttribute("hidden"));
            t ? e.removeAttribute("hidden") : e.setAttribute("hidden", "")
        }
        function ht(e, t, r) {
            var {listeningFors: i} = e;
            !i && r && (i = e.listeningFors = Object.create(null));
            e = i || null;
            if (!e)
                return e;
            var n = e[t];
            !n && r && (n = e[t] = []);
            return n || null
        }
        function ct(e, t, r) {
            var i = r ? t.getAttribute("data-amp-3p-sentinel") : "amp";
            e = ht(e, i, !0);
            var n;
            for (i = 0; i < e.length; i++) {
                var s = e[i];
                if (s.frame === t) {
                    n = s;
                    break
                }
            }
            n || (n = {
                frame: t,
                events: Object.create(null)
            },
            e.push(n));
            return n.events
        }
        function ut(e) {
            var t = G({
                sentinel: "unlisten"
            });
            for (var r = e.length - 1; 0 <= r; r--) {
                var i = e[r];
                if (!i.frame.contentWindow) {
                    e.splice(r, 1);
                    i = i.events;
                    for (var n in i)
                        i[n].splice(0, 1 / 0).forEach((e=>{
                            e(t)
                        }
                        ))
                }
            }
        }
        function dt(e) {
            e.listeningFors || e.addEventListener("message", (function(t) {
                if (t.data) {
                    var r = ft(t.data);
                    if (r && r.sentinel) {
                        var i = t.source;
                        var n = ht(e, r.sentinel);
                        if (n) {
                            for (var s = 0; s < n.length; s++) {
                                var a = n[s]
                                  , o = a.frame.contentWindow;
                                if (o) {
                                    var l;
                                    if (!(l = i == o))
                                        e: {
                                            for (l = i; l && l != l.parent; l = l.parent)
                                                if (l == o) {
                                                    l = !0;
                                                    break e
                                                }
                                            l = !1
                                        }
                                    if (l) {
                                        var h = a;
                                        break
                                    }
                                } else
                                    setTimeout(ut, 0, n)
                            }
                            var c = h ? h.events : null
                        } else
                            c = n;
                        if (c) {
                            var u = c[r.type];
                            if (u)
                                for (u = u.slice(),
                                i = 0; i < u.length; i++)
                                    (0,
                                    u[i])(r, t.source, t.origin, t)
                        }
                    }
                }
            }
            ))
        }
        function mt(e, t, r, i, n) {
            function s(t, i, s, a) {
                if ("amp" == t.sentinel) {
                    if (i != e.contentWindow)
                        return;
                    var h = "null" == s && void 0;
                    if (o != s && !h)
                        return
                }
                if (n || i == e.contentWindow)
                    "unlisten" == t.sentinel ? l() : r(t, i, s, a)
            }
            var a = e.ownerDocument.defaultView;
            dt(a);
            i = ct(a, e, i);
            var o = De(e.src).origin;
            var l, h = i[t] || (i[t] = []);
            h.push(s);
            return l = function() {
                if (s) {
                    var e = h.indexOf(s);
                    -1 < e && h.splice(e, 1);
                    r = h = s = null
                }
            }
        }
        function pt(e, t, r, i, n) {
            if (e.contentWindow)
                for (i.type = r,
                i.sentinel = n ? e.getAttribute("data-amp-3p-sentinel") : "amp",
                e = i,
                n && (e = "amp-" + JSON.stringify(i)),
                i = 0; i < t.length; i++)
                    n = t[i],
                    n.win.postMessage(e, n.origin)
        }
        function ft(e) {
            "string" == typeof e && (e = "{" == e.charAt(0) ? Te(e, (()=>{}
            )) || null : it(e) ? rt(e) : null);
            return e
        }
        var vt = class {
            constructor(e, t, r, i) {
                this.ac = e;
                this.wb = r;
                this.ta = [];
                this.Jb = mt(this.ac, t, ((e,t,r)=>{
                    this.ta.some((e=>e.win == t)) || this.ta.push({
                        win: t,
                        origin: r
                    });
                    i(e, t, r)
                }
                ), this.wb, this.wb)
            }
            send(e, t) {
                nt(this.ta, (e=>!e.win.parent));
                pt(this.ac, this.ta, e, t, this.wb)
            }
            destroy() {
                this.Jb();
                this.ta.length = 0
            }
        }
        ;
        function gt(e) {
            return e.classList.contains("i-amphtml-fie") || !!Z(e, ".i-amphtml-fie")
        }
        function bt(e, t) {
            return !gt(t) && !Ue(e.location) && "inabox" != c(e).runtime
        }
        function yt(e) {
            return oe(e).then((e=>e ? e.whenPolicyResolved("default") : null))
        }
        function Et(e) {
            return oe(e).then((e=>e ? e.getConsentMetadataInfo("default") : null))
        }
        var wt = null;
        var At = /^[a-zA-Z0-9\-_.]+$/;
        function Tt(e) {
            var t = Rt(e);
            return "" === t ? "" : ["1", Ot(t), t].join("*")
        }
        function Ot(e, t) {
            var r = (new Date).getTimezoneOffset();
            var i = window;
            i = [window.navigator.userAgent, r, i.navigator.userLanguage || i.navigator.language].join("*");
            r = t || 0;
            var n = Math.floor(Date.now() / 6e4) - r;
            e = [i, n, e].join("*");
            if (!wt) {
                i = Array(256);
                for (r = 0; 256 > r; r++) {
                    var s = r;
                    for (var a = 0; 8 > a; a++)
                        s = 1 & s ? s >>> 1 ^ 3988292384 : s >>> 1;
                    i[r] = s
                }
                wt = i
            }
            e = Ge(e);
            i = 4294967295;
            for (r = 0; r < e.length; r++)
                i = i >>> 8 ^ wt[255 & (i ^ e[r])];
            e = (-1 ^ i) >>> 0;
            return e.toString(36)
        }
        function Rt(e) {
            return e ? Object.keys(e).filter((e=>{
                var t = At.test(e);
                t || T().error("amp-analytics/linker", "Invalid linker key: " + e);
                return t
            }
            )).map((t=>t + "*" + Xe(String(e[t])))).join("*") : ""
        }
        var St = class {
            constructor(e) {
                this.l = e;
                this.xa = {}
            }
            get(e, t) {
                if (!e || !t)
                    return T().error("amp-analytics/linker-reader", "LINKER_PARAM requires two params, name and id"),
                    null;
                if (!$(this.xa, e)) {
                    var r = this.xa;
                    var i = l(this.l.location.search);
                    if ($(i, e)) {
                        i = i[e];
                        var n = this.l.location;
                        if (this.l.history.replaceState) {
                            var s;
                            s = (s = n.search) && "?" != s ? (s = s.replace(new RegExp(`[?&]${e}=[^&]*`,"g"), "").replace(/^[?&]/, "")) ? "?" + s : "" : "";
                            this.l.history.replaceState(null, "", n.origin + n.pathname + s + (n.hash || ""))
                        }
                        n = i.split("*");
                        s = 0 == n.length % 2;
                        4 > n.length || !s ? (T().error("amp-analytics/linker", `Invalid linker_param value ${i}`),
                        i = null) : (i = Number(n.shift()),
                        1 !== i ? (T().error("amp-analytics/linker", `Invalid version number ${i}`),
                        i = null) : (i = n.shift(),
                        n = n.join("*"),
                        i = {
                            checksum: i,
                            serializedIds: n
                        }));
                        if (i) {
                            n = i.serializedIds;
                            e: {
                                i = i.checksum;
                                for (s = 0; 1 >= s; s++)
                                    if (Ot(n, s) == i) {
                                        i = !0;
                                        break e
                                    }
                                i = !1
                            }
                            if (i)
                                for (i = {},
                                n = n.split("*"),
                                s = 0; s < n.length; s += 2) {
                                    var a = n[s];
                                    if (At.test(a)) {
                                        var o = Ye(String(n[s + 1]));
                                        "undefined" !== typeof TextDecoder ? o = new TextDecoder("utf-8").decode(o) : (o = We(new Uint8Array(o.buffer || o)),
                                        o = decodeURIComponent(escape(o)));
                                        i[a] = o
                                    } else
                                        T().error("amp-analytics/linker", `Invalid linker key ${a}, value ignored`)
                                }
                            else
                                T().error("amp-analytics/linker", "LINKER_PARAM value checksum not valid"),
                                i = null
                        } else
                            i = null
                    } else
                        i = null;
                    r[e] = i
                }
                return this.xa[e] && this.xa[e][t] ? this.xa[e][t] : null
            }
        }
        ;
        function Pt(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                )));
                r.push.apply(r, i)
            }
            return r
        }
        function _t(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Pt(Object(r), !0).forEach((function(t) {
                    var i = r[t];
                    t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pt(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var Mt = /^(?:([^\s]*)(\([^)]*\))|[^]+)$/
          , It = {
            1: "sufficient",
            2: "insufficient",
            3: "not_required",
            4: "unknown"
        };
        var Nt = class {
            constructor(e, t, r) {
                this.vars = e;
                this.iterations = void 0 === t ? 2 : t;
                this.noEncode = !!r;
                this.freezeVars = {}
            }
            freezeVar(e) {
                this.freezeVars[e] = !0
            }
            getVar(e) {
                e = this.vars[e];
                null == e && (e = "");
                return e
            }
        }
        ;
        function Ct(e, t, r) {
            t = Number(t);
            var {length: i} = e;
            R(p(t), "Start index " + t + "in substr macro should be a number");
            r && (i = Number(r),
            R(p(i), "Length " + i + " in substr macro should be a number"));
            return e.substr(t, i)
        }
        function xt(e, t) {
            return e && e.length ? e : t
        }
        function Dt(e, t, r) {
            r || (r = "");
            return e.replace(new RegExp(t,"g"), r)
        }
        function jt(e, t, r) {
            var i = 0;
            r && (i = parseInt(r, 10),
            0 != i && !i || 0 > i) && (T().error("amp-analytics/variables", "Third argument in MATCH macro must be a number >= 0"),
            i = 0);
            return (e = e.match(new RegExp(t))) && e[i] ? e[i] : ""
        }
        function kt(e, t) {
            if (t)
                return (e.__AMP_EXPERIMENT_BRANCHES ? e.__AMP_EXPERIMENT_BRANCHES[t] : null) || "";
            var r = qe(e);
            return Object.keys(r).map((e=>`${e}:${r[e]}`)).join(",")
        }
        function Lt(e, t, r) {
            e.ja[t] = r
        }
        function Ut(e, t, r, i, n, s, a, o) {
            return e.expandTemplate(t, new Nt(r.vars,r.iterations - 1,!0), i, s, a).then((t=>n.expandStringAsync(o ? t + o : t, s || e.getMacros(i), a)))
        }
        var Vt = class {
            constructor(e) {
                this.m = e;
                this.ja = G({});
                this.Wc = S(this.m.win, "amp-analytics-linker-reader");
                this.ja.$DEFAULT = xt;
                this.ja.$SUBSTR = Ct;
                Lt(this, "$TRIM", (e=>e.trim()));
                Lt(this, "$TOLOWERCASE", (e=>e.toLowerCase()));
                Lt(this, "$TOUPPERCASE", (e=>e.toUpperCase()));
                Lt(this, "$NOT", (e=>String(!e)));
                Lt(this, "$BASE64", (e=>Xe(e)));
                Lt(this, "$HASH", this.Tc.bind(this));
                Lt(this, "$IF", ((e,t,r)=>$t(e) ? t : r));
                this.ja.$REPLACE = Dt;
                this.ja.$MATCH = jt;
                Lt(this, "$EQUALS", ((e,t)=>e === t));
                Lt(this, "LINKER_PARAM", ((e,t)=>this.Wc.get(e, t)));
                Lt(this, "TIMEZONE_CODE", (()=>{
                    var e = "";
                    "Intl"in this.m.win && "DateTimeFormat"in this.m.win.Intl && (e = (new this.m.win.Intl.DateTimeFormat).resolvedOptions().timeZone);
                    return e
                }
                ));
                Lt(this, "SCROLL_TOP", (()=>Math.round(le(this.m).getScrollTop())));
                Lt(this, "SCROLL_LEFT", (()=>Math.round(le(this.m).getScrollLeft())));
                Lt(this, "EXPERIMENT_BRANCHES", (e=>kt(this.m.win, e)));
                Lt(this, "AMPDOC_META", ((e,t="")=>{
                    var r;
                    return null !== (r = this.m.getMetaByName(e)) && void 0 !== r ? r : t
                }
                ))
            }
            getMacros(e) {
                var t = {
                    COOKIE: t=>{
                        var r = this.m.win;
                        return bt(r, e) ? Ze(r, t) : null
                    }
                    ,
                    CONSENT_STATE: qt(e),
                    CONSENT_METADATA: t=>Gt(e, R(t, "CONSENT_METADATA macro must contain a key"))
                }
                  , r = gt(e) ? {} : {
                    FIRST_CONTENTFUL_PAINT: ()=>se(this.m.win).getMetric("fcpv"),
                    FIRST_VIEWPORT_READY: ()=>se(this.m.win).getMetric("pc"),
                    MAKE_BODY_VISIBLE: ()=>se(this.m.win).getMetric("mbv"),
                    LARGEST_CONTENTFUL_PAINT: ()=>se(this.m.win).getMetric("lcpv"),
                    FIRST_INPUT_DELAY: ()=>se(this.m.win).getMetric("fid"),
                    CUMULATIVE_LAYOUT_SHIFT: ()=>se(this.m.win).getMetric("cls")
                };
                return _t(_t(_t({}, this.ja), t), r)
            }
            expandTemplate(e, t, r, i, n) {
                return Y(e, ((e,s)=>{
                    if (0 > t.iterations)
                        return T().error("amp-analytics/variables", "Maximum depth reached while expanding variables. Please ensure that the variables are not recursive."),
                        e;
                    if (!s)
                        return "";
                    var {name: a, argList: o} = Ht(s);
                    if (t.freezeVars[a])
                        return e;
                    e = t.getVar(a);
                    var l = ae(r);
                    if ("string" == typeof e)
                        e = Ut(this, e, t, r, l, i, n, o);
                    else if (d(e)) {
                        for (s = 0; s < e.length; s++)
                            e[s] = "string" == typeof e[s] ? Ut(this, e[s], t, r, l, i, n) : e[s];
                        e = Promise.all(e)
                    }
                    return Promise.resolve(e).then((e=>t.noEncode ? e : Ft(e)))
                }
                ))
            }
            Tc(e) {
                return S(this.m.win, "crypto").sha384Base64(e)
            }
        }
        ;
        function Ft(e) {
            if (null == e)
                return "";
            if (d(e))
                return e.map(Ft).join(",");
            var {name: t, argList: r} = Ht(String(e));
            return encodeURIComponent(t) + r
        }
        function Ht(e) {
            if (!e)
                return {
                    name: "",
                    argList: ""
                };
            var t = e.match(Mt);
            R(t, "Variable with invalid format found: " + e);
            return {
                name: t[1] || t[0],
                argList: t[2] || ""
            }
        }
        function Bt(e) {
            return P(e, "amp-analytics-variables")
        }
        function qt(e) {
            return yt(e).then((e=>e ? It[e] : null))
        }
        function Gt(e, t) {
            return Et(e).then((e=>e ? e[t] : null))
        }
        function $t(e) {
            return "false" !== e && "" !== e && "0" !== e && "null" !== e && "NaN" !== e && "undefined" !== e
        }
        function Wt(e) {
            var t = e.j.getAttribute("config");
            if (!t || e.T)
                return i();
            Le(t, e.j);
            var r = e.o()
              , n = {};
            e.j.hasAttribute("data-credentials") && (n.credentials = e.j.getAttribute("data-credentials"));
            return ae(e.j).expandUrlAsync(t, e.C.getMacros(e.j)).then((r=>{
                t = r;
                return S(e.l, "xhr").fetchJson(t, n)
            }
            )).then((e=>e.json())).then((t=>{
                e.ma = t
            }
            ), (e=>{
                T().error(r, "Error loading remote config: ", t, e)
            }
            ))
        }
        function zt(e) {
            var t = e.j.getAttribute("type");
            if (!t)
                return i();
            var r = Jt(t)
              , n = e.o();
            return S(e.l, "xhr").fetchJson(r, {
                ampCors: !1
            }).then((e=>e.json())).then((t=>{
                e.kb = t || {}
            }
            ), (e=>{
                T().error(n, "Error loading vendor config: ", r, e)
            }
            ))
        }
        function Jt(e) {
            var t = y.cdn;
            var r;
            if (r = "bg" === e)
                r = self,
                r = !(!r.AMP_CONFIG || !r.AMP_CONFIG.canary);
            var i = r ? ".canary" : "";
            return `${t}/rtv/${c().rtvVersion}/v0/analytics-vendors/${e}${i}.json`
        }
        function Yt(e, t) {
            var r = G({
                vars: {
                    requestCount: 0
                }
            });
            Qt(er(e.Mc), r);
            Qt(er(e.kb), r, !0);
            Qt(er(t), r, !0);
            return r
        }
        function Kt(e, t, r) {
            Le(r, e.j);
            var i = e.o();
            return Xt(e, t).then((()=>{
                var n = {
                    method: "POST",
                    body: t
                };
                e.j.hasAttribute("data-credentials") && (n.credentials = e.j.getAttribute("data-credentials"));
                return ae(e.j).expandUrlAsync(r).then((t=>S(e.l, "xhr").fetchJson(t, n))).then((e=>e.json())).then((t=>{
                    e.h = Yt(e, t)
                }
                ), (e=>{
                    T().error(i, "Error rewriting configuration: ", r, e)
                }
                ))
            }
            ))
        }
        function Xt(e, t) {
            var r = t.configRewriter
              , n = r && r.varGroups
              , s = (e.kb.configRewriter || {}).varGroups;
            if (!n && !s)
                return i();
            if (n && !s)
                return e.o(),
                i();
            t.configRewriter = t.configRewriter || {};
            var a = t.configRewriter;
            a.vars = G({});
            var o = []
              , l = n || {};
            W(l, s);
            Object.keys(l).forEach((t=>{
                var r = l[t];
                if (r.enabled) {
                    var i = e.shallowExpandObject(e.j, r).then((e=>{
                        delete e.enabled;
                        Object.assign(a.vars, e)
                    }
                    ));
                    o.push(i)
                }
            }
            ));
            return Promise.all(o).then((()=>{
                if (!Object.keys(a.vars).length)
                    return delete t.configRewriter;
                n && delete a.varGroups
            }
            ))
        }
        var Zt = class {
            constructor(e) {
                this.j = e;
                this.l = null;
                this.Mc = Oe || {};
                this.kb = {};
                this.h = {};
                this.ma = {};
                this.T = !1;
                this.C = Bt(e)
            }
            loadConfig() {
                this.l = this.j.ownerDocument.defaultView;
                this.T = this.j.hasAttribute("sandbox");
                return Promise.all([Wt(this), zt(this)]).then(this.fd.bind(this)).then(this.Hc.bind(this)).then((()=>this.h))
            }
            fd() {
                var e = (this.kb.configRewriter || {}).url
                  , t = G({});
                if (this.j.CONFIG)
                    var r = this.j.CONFIG;
                else {
                    r = {};
                    var n = this.o();
                    try {
                        var s = this.j.children;
                        if (1 == s.length) {
                            var a = this.j;
                            /^[\w-]+$/.test("script");
                            var o = (void 0 !== H ? H : H = B(a)) ? a.querySelectorAll("> script".replace(/^|,/g, "$&:scope ")) : te(a, "> script");
                            if (1 !== o.length)
                                throw Error(`Found ${o.length} <script> children. Expected 1.`);
                            var l = o[0];
                            o = l;
                            if ("SCRIPT" != o.tagName || !o.hasAttribute("type") || "APPLICATION/JSON" != o.getAttribute("type").toUpperCase())
                                throw Error('<script> child must have type="application/json"');
                            try {
                                r = JSON.parse(l.textContent)
                            } catch (e) {
                                throw Error("Failed to parse <script> contents. Is it valid JSON?")
                            }
                        } else
                            1 < s.length && T().error(n, "The tag should contain only one <script> child.")
                    } catch (e) {
                        T().error(n, e.message)
                    }
                }
                var h = r;
                this.j.getAttribute("type") && (h.transport || this.ma.transport) && (r = this.o(),
                T().error(r, "Inline or remote config should not overwrite vendor transport settings"));
                h.transport && h.transport.iframe && (T().error("amp-analytics/config", "Inline configs are not allowed to specify transport iframe"),
                h.transport.iframe = void 0);
                this.ma.transport && this.ma.transport.iframe && (T().error("amp-analytics/config", "Remote configs are not allowed to specify transport iframe"),
                this.ma.transport.iframe = void 0);
                Qt(h, t);
                Qt(this.ma, t);
                return !e || this.T ? (this.h = Yt(this, t),
                i()) : Kt(this, t, e)
            }
            Hc() {
                this.h.warningMessage && (this.o(),
                this.j.getAttribute("type"),
                this.j.getAttribute("config"),
                delete this.h.warningMessage)
            }
            o() {
                return "AmpAnalytics " + (this.j.getAttribute("id") || "<unknown id>")
            }
            shallowExpandObject(e, t) {
                var r = {}
                  , i = []
                  , n = []
                  , s = ae(e)
                  , a = Bt(e).getMacros(e);
                Object.keys(t).forEach((e=>{
                    i.push(e);
                    var r = s.expandStringAsync(t[e], a);
                    n.push(r)
                }
                ));
                return Promise.all(n).then((e=>{
                    i.forEach(((t,i)=>r[t] = e[i]));
                    return r
                }
                ))
            }
        }
        ;
        function Qt(e, t, r) {
            if (null === t || void 0 === t)
                t = {};
            R(r || !e || !e.optout || "_gaUserPrefs.ioo" == e.optout || "__gaOptOutExtension" == e.optoutElementId, "optout property is only available to vendor config.");
            for (var i in e)
                R(r || "iframePing" != i, "iframePing config is only available to vendor config."),
                $(e, i) && (d(e[i]) ? (d(t[i]) || (t[i] = []),
                t[i] = Qt(e[i], t[i], r)) : m(e[i]) ? (m(t[i]) || (t[i] = {}),
                t[i] = Qt(e[i], t[i], r)) : t[i] = e[i]);
            return t
        }
        function er(e) {
            if (!e.requests)
                return e;
            for (var t in e.requests)
                if ($(e.requests, t)) {
                    var r = e.requests;
                    var i = e.requests[t];
                    i = m(i) ? i : {
                        baseUrl: i
                    };
                    r[t] = i
                }
            if ($(e, "requests") && $(e, "requestOrigin")) {
                r = e.requestOrigin;
                for (var n in e.requests)
                    $(e.requests[n], "origin") || (e.requests[n].origin = r)
            }
            return e
        }
        var tr = class {
            constructor() {
                this.G = null
            }
            add(e) {
                this.G || (this.G = []);
                this.G.push(e);
                return ()=>{
                    this.remove(e)
                }
            }
            remove(e) {
                this.G && (e = this.G.indexOf(e),
                -1 < e && this.G.splice(e, 1))
            }
            removeAll() {
                this.G && (this.G.length = 0)
            }
            fire(e) {
                if (this.G) {
                    var t = this.G;
                    for (var r = 0; r < t.length; r++)
                        (0,
                        t[r])(e)
                }
            }
            getHandlerCount() {
                return this.G ? this.G.length : 0
            }
        }
        ;
        var rr = {
            ENDED: "video-ended",
            PAUSE: "video-pause",
            PLAY: "video-play",
            SESSION: "video-session",
            SESSION_VISIBLE: "video-session-visible",
            SECONDS_PLAYED: "video-seconds-played",
            CUSTOM: "video-hosted-custom",
            PERCENTAGE_PLAYED: "video-percentage-played",
            AD_START: "video-ad-start",
            AD_END: "video-ad-end"
        };
        function ir(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                )));
                r.push.apply(r, i)
            }
            return r
        }
        function nr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ir(Object(r), !0).forEach((function(t) {
                    var i = r[t];
                    t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ir(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var sr = /^vars(.+)/;
        function ar() {}
        var or = {
            CLICK: "click",
            CUSTOM: "custom",
            HIDDEN: "hidden",
            INI_LOAD: "ini-load",
            RENDER_START: "render-start",
            SCROLL: "scroll",
            STORY: "story",
            TIMER: "timer",
            VIDEO: "video",
            VISIBLE: "visible"
        }
          , lr = ["ampdoc", "embed"]
          , hr = Object.freeze({
            ["click"]: {
                name: "click",
                allowedFor: lr.concat(["timer"]),
                klass: function(e) {
                    return new gr(e)
                }
            },
            ["custom"]: {
                name: "custom",
                allowedFor: lr.concat(["timer"]),
                klass: function(e) {
                    return new pr(e)
                }
            },
            ["hidden"]: {
                name: "visible",
                allowedFor: lr.concat(["timer"]),
                klass: function(e) {
                    return new _r(e)
                }
            },
            ["ini-load"]: {
                name: "ini-load",
                allowedFor: lr.concat(["timer", "visible"]),
                klass: function(e) {
                    return new Ar(e)
                }
            },
            ["render-start"]: {
                name: "render-start",
                allowedFor: lr.concat(["timer", "visible"]),
                klass: function(e) {
                    return new wr(e)
                }
            },
            ["scroll"]: {
                name: "scroll",
                allowedFor: lr.concat(["timer"]),
                klass: function(e) {
                    return new Er(e)
                }
            },
            ["story"]: {
                name: "story",
                allowedFor: lr,
                klass: function(e) {
                    return new vr(e)
                }
            },
            ["timer"]: {
                name: "timer",
                allowedFor: lr,
                klass: function(e) {
                    return new Rr(e)
                }
            },
            ["video"]: {
                name: "video",
                allowedFor: lr.concat(["timer"]),
                klass: function(e) {
                    return new Sr(e)
                }
            },
            ["visible"]: {
                name: "visible",
                allowedFor: lr.concat(["timer"]),
                klass: function(e) {
                    return new _r(e)
                }
            }
        });
        function cr(e) {
            return e.startsWith("video") ? "video" : e.startsWith("story") ? "story" : f(e) ? $(hr, e) ? hr[e].name : e : "custom"
        }
        function ur(e) {
            var t = {};
            Object.keys(hr).forEach((r=>{
                $(hr, r) && -1 != hr[r].allowedFor.indexOf(e) && (t[r] = hr[r].klass)
            }
            ));
            return t
        }
        var dr = class {
            constructor(e, t, r={}, i=!0) {
                this.target = e;
                this.type = t;
                i && (e = re(e, sr),
                W(e, r, 0),
                r = e);
                this.vars = r
            }
        }
        ;
        var mr = class {
            constructor(e) {
                this.root = e
            }
            dispose() {}
            add() {}
        }
        ;
        var pr = class extends mr {
            constructor(e) {
                super(e);
                this.L = {};
                this.B = {};
                this.ca = {};
                setTimeout((()=>{
                    this.B = void 0
                }
                ), 1e4)
            }
            dispose() {
                this.ca = this.B = void 0;
                for (var e in this.L)
                    this.L[e].removeAll()
            }
            add(e, t, r, i) {
                var n = r.selector;
                n || (n = ":root");
                var s = this.root.getElement(e, n, r.selectionMethod || null)
                  , a = t.startsWith("sandbox-")
                  , o = a ? this.ca && this.ca[t] : this.B && this.B[t];
                if (o) {
                    var l = o.length;
                    s.then((e=>{
                        setTimeout((()=>{
                            for (var r = 0; r < l; r++) {
                                var n = o[r];
                                e.contains(n.target) && i(n)
                            }
                            a && (this.ca[t] = void 0)
                        }
                        ), 1)
                    }
                    ))
                }
                var h = this.L[t];
                h || (h = new tr,
                this.L[t] = h);
                return this.L[t].add((e=>{
                    s.then((t=>{
                        t.contains(e.target) && i(e)
                    }
                    ))
                }
                ))
            }
            trigger(e) {
                var t = e.type
                  , r = t.startsWith("sandbox-")
                  , i = this.L[t];
                if (i && (i.fire(e),
                r))
                    return;
                r ? (this.ca[t] = this.ca[t] || [],
                this.ca[t].push(e)) : this.B && (this.B[t] = this.B[t] || [],
                this.B[t].push(e))
            }
        }
        ;
        function fr(e, t, r, i) {
            var n = e.type;
            e = e.vars;
            var s = r.storySpec || {}
              , a = void 0 === s.repeat ? !0 : s.repeat
              , o = e.eventDetails;
            (r = r.tagName) && o.tagName && r.toLowerCase() !== o.tagName || !1 === a && o.repeated || i(new dr(t,n,e))
        }
        var vr = class extends pr {
            constructor(e) {
                super(e)
            }
            add(e, t, r, i) {
                var n = this.root.getRootElement();
                if (e = this.B && this.B[t]) {
                    var s = e.length;
                    for (var a = 0; a < s; a++)
                        fr(e[a], n, r, i)
                }
                e = this.L[t];
                e || (e = new tr,
                this.L[t] = e);
                return this.L[t].add((e=>{
                    fr(e, n, r, i)
                }
                ))
            }
            trigger(e) {
                var t = e.type
                  , r = this.L[t];
                r && r.fire(e);
                this.B && (this.B[t] = this.B[t] || [],
                this.B[t].push(e))
            }
        }
        ;
        var gr = class extends mr {
            constructor(e) {
                super(e);
                this.La = new tr;
                this.Qb = this.La.fire.bind(this.La);
                this.root.getRoot().addEventListener("click", this.Qb)
            }
            dispose() {
                this.root.getRoot().removeEventListener("click", this.Qb);
                this.La.removeAll()
            }
            add(e, t, r, i) {
                t = R(r.selector, "Missing required selector on click trigger");
                r = r.selectionMethod || null;
                return this.La.add(this.root.createSelectiveListener(this.Pc.bind(this, i), e.parentElement || e, t, r))
            }
            Pc(e, t) {
                e(new dr(t,"click"))
            }
        }
        ;
        function br(e) {
            var t = G({});
            if (!e || !Array.isArray(e))
                return t;
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                if ("number" !== typeof i || !isFinite(i)) {
                    T().error("amp-analytics/events", "Scroll trigger boundaries must be finite.");
                    break
                }
                i = Math.min(5 * Math.round(i / 5), 100);
                t[i] = !1
            }
            return t
        }
        function yr(e, t, r, i, n) {
            if (r)
                for (var s in t)
                    if ($(t, s)) {
                        var a = parseInt(s, 10);
                        a > r || t[a] || (t[a] = !0,
                        a = {},
                        a[i] = s,
                        n(new dr(e.D.getRootElement(),"scroll",a,!1)))
                    }
        }
        var Er = class extends mr {
            constructor(e) {
                super(e);
                this.D = e;
                this.sa = null
            }
            dispose() {
                null !== this.sa && (this.D.getScrollManager().removeScrollHandler(this.sa),
                this.sa = null)
            }
            add(e, t, r, i) {
                if (!r.scrollSpec)
                    return T().error("amp-analytics/events", "Missing scrollSpec on scroll trigger."),
                    ar;
                if (!Array.isArray(r.scrollSpec.verticalBoundaries) && !Array.isArray(r.scrollSpec.horizontalBoundaries))
                    return T().error("amp-analytics/events", "Boundaries are required for the scroll trigger to work."),
                    ar;
                var n = br(r.scrollSpec.verticalBoundaries)
                  , s = br(r.scrollSpec.horizontalBoundaries);
                this.sa = this.hd.bind(this, s, n, !!r.scrollSpec.useInitialPageSize, i);
                return this.D.getScrollManager().addScrollHandler(this.sa)
            }
            hd(e, t, r, i, n) {
                var {scrollWidth: s, scrollHeight: a} = r ? n.initialSize : n;
                yr(this, t, 100 * (n.top + n.height) / a, "verticalScrollBoundary", i);
                yr(this, e, 100 * (n.left + n.width) / s, "horizontalScrollBoundary", i)
            }
        }
        ;
        var wr = class extends mr {
            constructor(e) {
                super(e)
            }
            dispose() {}
            add(e, t, r, i) {
                var n, s;
                var a = r.selector || ":root";
                ":root" == a || ":host" == a ? (n = this.root.getRootElement(),
                s = this.getRootSignal(t)) : s = this.root.getAmpElement(e.parentElement || e, a, r.selectionMethod).then((e=>{
                    n = e;
                    return this.getElementSignal(t, n)
                }
                ));
                s.then((()=>{
                    i(new dr(n,t))
                }
                ));
                return ar
            }
            getRootSignal(e) {
                return this.root.signals().whenSignal(e)
            }
            getElementSignal(e, t) {
                return "function" != typeof t.signals ? i() : t.signals().whenSignal(e)
            }
        }
        ;
        var Ar = class extends mr {
            constructor(e) {
                super(e)
            }
            dispose() {}
            add(e, t, r, i) {
                var n;
                var s = r.selector || ":root";
                ":root" == s || ":host" == s ? (n = this.root.getRootElement(),
                e = this.getRootSignal()) : e = this.root.getAmpElement(e.parentElement || e, s, r.selectionMethod).then((e=>{
                    n = e;
                    return this.getElementSignal("ini-load", n)
                }
                ));
                e.then((()=>{
                    i(new dr(n,t))
                }
                ));
                return ar
            }
            getRootSignal() {
                return this.root.whenIniLoaded()
            }
            getElementSignal(e, t) {
                if ("function" != typeof t.signals)
                    return i();
                var r = t.signals();
                return Promise.race([r.whenSignal("ini-load"), r.whenSignal("load-end")])
            }
        }
        ;
        var Tr = class {
            constructor(e, t, r) {
                this.Ya = void 0;
                R("interval"in e, "Timer interval specification required");
                this.fc = Number(e.interval) || 0;
                R(.5 <= this.fc, "Bad timer interval specification");
                this.jc = "maxTimerLength"in e ? Number(e.maxTimerLength) : 7200;
                R(0 < this.jc, "Bad maxTimerLength specification");
                this.Xc = "maxTimerLength"in e;
                this.Fc = "immediate"in e ? !!e.immediate : !0;
                this.da = this.X = this.vb = null;
                this.Ea = t || null;
                this.ib = r || null;
                this.$a = this.V = void 0
            }
            init(e) {
                this.Ea ? this.Ea && (this.X = this.Ea()) : e()
            }
            dispose() {
                this.da && (this.da(),
                this.da = null);
                this.X && (this.X(),
                this.X = null)
            }
            isRunning() {
                return !!this.Ya
            }
            startIntervalInWindow(e, t, r) {
                if (!this.isRunning() && (this.V = Date.now(),
                this.$a = void 0,
                this.vb = t,
                this.Ya = e.setInterval((()=>{
                    t()
                }
                ), 1e3 * this.fc),
                (!this.ib || this.ib && this.Xc) && e.setTimeout((()=>{
                    r()
                }
                ), 1e3 * this.jc),
                this.X && (this.X(),
                this.X = null),
                this.Fc && t(),
                this.ib))
                    try {
                        this.da = this.ib()
                    } catch (e) {
                        throw this.dispose(),
                        e
                    }
            }
            jb(e) {
                this.isRunning() && (this.vb(),
                this.vb = null,
                e.clearInterval(this.Ya),
                this.$a = this.Ya = void 0,
                this.da && (this.da(),
                this.da = null),
                this.Ea && (this.X = this.Ea()))
            }
            getTimerVars() {
                var e = 0;
                this.isRunning() && (e = this.V ? Date.now() - (this.$a || this.V) : 0,
                this.$a = Date.now());
                return G({
                    timerDuration: e,
                    timerStart: this.V || 0
                })
            }
        }
        ;
        function Or(e, t) {
            t = T().assertString(t.on);
            var r = cr(t);
            return e.root.getTrackerForAllowlist(r, ur("timer"))
        }
        var Rr = class extends mr {
            constructor(e) {
                super(e);
                this.A = {};
                this.md = 1
            }
            getTrackedTimerKeys() {
                return Object.keys(this.A)
            }
            dispose() {
                this.getTrackedTimerKeys().forEach((e=>{
                    this.Cb(e)
                }
                ))
            }
            add(e, t, r, i) {
                r = r.timerSpec;
                R(r && "object" == typeof r, "Bad timer specification");
                var n = "startSpec"in r ? r.startSpec : null;
                R(!n || "object" == typeof n, "Bad timer start specification");
                var s = "stopSpec"in r ? r.stopSpec : null;
                R(!n && !s || "object" == typeof s, "Bad timer stop specification");
                var a = ++this.md;
                var o, l;
                if (n) {
                    var h = Or(this, n);
                    R(h, "Cannot track timer start");
                    o = h.add.bind(h, e, n.on, n, this.$b.bind(this, a, t, i))
                }
                if (s) {
                    var c = Or(this, s);
                    R(c, "Cannot track timer stop");
                    l = c.add.bind(c, e, s.on, s, this.$b.bind(this, a, t, i))
                }
                var u = new Tr(r,o,l);
                this.A[a] = u;
                u.init(this.uc.bind(this, a, t, i));
                return ()=>{
                    this.Cb(a)
                }
            }
            $b(e, t, r) {
                var i = this.A[e];
                i && (i.isRunning() ? this.jb(e) : this.uc(e, t, r))
            }
            uc(e, t, r) {
                this.A[e].startIntervalInWindow(this.root.ampdoc.win, (()=>{
                    var i = new dr(this.root.getRootElement(),t,this.A[e].getTimerVars(),!1);
                    r(i)
                }
                ), this.Cb.bind(this, e))
            }
            jb(e) {
                this.A[e].jb(this.root.ampdoc.win)
            }
            Cb(e) {
                this.A[e] && (this.jb(e),
                this.A[e].dispose(),
                delete this.A[e])
            }
        }
        ;
        var Sr = class extends mr {
            constructor(e) {
                super(e);
                this.hb = new tr;
                this.qb = this.hb.fire.bind(this.hb);
                Object.keys(rr).forEach((e=>{
                    this.root.getRoot().addEventListener(rr[e], this.qb)
                }
                ))
            }
            dispose() {
                var e = this.root.getRoot();
                Object.keys(rr).forEach((t=>{
                    e.removeEventListener(rr[t], this.qb)
                }
                ));
                this.hb = this.qb = null
            }
            add(e, t, r, i) {
                var n = r.videoSpec || {}
                  , s = this.root.getElement(e, r.selector || n.selector, r.selectionMethod || null)
                  , a = n["end-session-when-invisible"]
                  , o = n["exclude-autoplay"]
                  , l = n.interval
                  , h = n.percentages
                  , c = r.on;
                var u = 0
                  , d = 0;
                return this.hb.add((e=>{
                    var t = e.type
                      , r = e.data
                      , n = "video-session-visible" == t ? "video-session" : "video-hosted-custom" == t ? r["__amp:eventType"] : t;
                    if (n === c)
                        if ("video-seconds-played" !== n || l) {
                            if ("video-seconds-played" === n && (u++,
                            0 !== u % l))
                                return;
                            if ("video-percentage-played" === n) {
                                if (!h) {
                                    T().error("amp-analytics/events", "video-percentage-played requires percentages spec.");
                                    return
                                }
                                for (var m = 0; m < h.length; m++) {
                                    var f = h[m];
                                    if (0 >= f || 0 != f % 5) {
                                        T().error("amp-analytics/events", "Percentages must be set in increments of %s with non-zero values", 5);
                                        return
                                    }
                                }
                                var v = parseInt(r.normalizedPercentage, 10);
                                p(v);
                                if (d == v || 0 > h.indexOf(v))
                                    return;
                                d = v
                            }
                            if ("video-session-visible" !== t || a)
                                if (!o || "playing_auto" !== r.state) {
                                    var g = e.target;
                                    s.then((e=>{
                                        if (e.contains(g)) {
                                            if (r) {
                                                var t = nr({}, r);
                                                delete t["__amp:eventType"];
                                                var s = t
                                            } else
                                                s = {};
                                            i(new dr(e,n,s))
                                        }
                                    }
                                    ))
                                }
                        } else
                            T().error("amp-analytics/events", "video-seconds-played requires interval spec with non-zero value")
                }
                ))
            }
        }
        ;
        function Pr(e) {
            if (d(e)) {
                var t = {};
                for (var r = 0; r < e.length; r++)
                    R(!t[e[r]], "Cannot have duplicate selectors in selectors list: %s", e),
                    t[e[r]] = e[r]
            }
        }
        var _r = class extends mr {
            constructor(e) {
                super(e);
                this.yc = {}
            }
            dispose() {}
            add(e, t, r, i) {
                var n = r.visibilitySpec || {}
                  , s = r.selector || n.selector
                  , a = n.waitFor;
                var o = n.reportWhen
                  , l = null;
                o && R(!n.repeat, "reportWhen and repeat are mutually exclusive.");
                "hidden" === t && (o && T().error("amp-analytics/events", 'ReportWhen should not be defined when eventType is "hidden"'),
                o = "documentHidden");
                var h = this.root.getVisibilityManager();
                "documentHidden" == o ? l = this.Jc.bind(this) : "documentExit" == o ? l = this.Ic.bind(this) : R(!o, 'reportWhen value "%s" not supported.', o);
                if (!s || ":root" == s || ":host" == s)
                    return h.listenRoot(n, this.getReadyPromise(a || (s ? "ini-load" : "none")), l, this.kc.bind(this, t, i, this.root.getRootElement()));
                r = r.selectionMethod || n.selectionMethod;
                Pr(s);
                var c = this.root.getElements(e.parentElement || e, s, r).then((e=>{
                    var r = [];
                    for (var s = 0; s < e.length; s++)
                        r.push(h.listenElement(e[s], n, this.getReadyPromise(a, e[s]), l, this.kc.bind(this, t, i, e[s])));
                    return r
                }
                ));
                return function() {
                    c.then((e=>{
                        for (var t = 0; t < e.length; t++)
                            e[t]()
                    }
                    ))
                }
            }
            Jc() {
                var e = this.root.ampdoc;
                return e.isVisible() ? new Promise((t=>{
                    e.onVisibilityChanged((()=>{
                        e.isVisible() || t()
                    }
                    ))
                }
                )) : i()
            }
            Ic() {
                var e = new n
                  , t = this.root.ampdoc.win;
                var r, i;
                "onpagehide"in this.root.ampdoc.win || t.addEventListener("unload", r = ()=>{
                    t.removeEventListener("unload", r);
                    e.resolve()
                }
                );
                t.addEventListener("pagehide", i = ()=>{
                    t.removeEventListener("pagehide", i);
                    e.resolve()
                }
                );
                return e.promise
            }
            getReadyPromise(e, t) {
                if (t) {
                    var r = t.tagName;
                    (r = r.startsWith("AMP-") && !("AMP-STICKY-AD-TOP-PADDING" == r || "AMP-BODY" == r)) ? e = e || "ini-load" : R(!e || "none" == e, "waitFor for non-AMP elements must be none or null. Found %s", e)
                }
                if (!e || "none" == e)
                    return null;
                var i = ur("visible");
                R(void 0 !== i[e], "waitFor value %s not supported", e);
                var n = this.yc[e] || this.root.getTrackerForAllowlist(e, i);
                if (n)
                    this.yc[e] = n;
                else
                    return null;
                return t ? n.getElementSignal(e, t) : n.getRootSignal(e)
            }
            kc(e, t, r, i) {
                var n = re(r, sr);
                for (var s in n)
                    i[s] = n[s];
                t(new dr(r,e,i,!1))
            }
        }
        ;
        var Mr = !1;
        var Ir = class {
            constructor() {
                this.H = []
            }
            peek() {
                var e = this.H.length;
                return e ? this.H[e - 1].item : null
            }
            enqueue(e, t) {
                if (isNaN(t))
                    throw Error("Priority must not be NaN.");
                var r = -1;
                var i = 0
                  , n = this.H.length;
                for (; i <= n; ) {
                    r = Math.floor((i + n) / 2);
                    if (r === this.H.length)
                        break;
                    if (this.H[r].priority < t)
                        i = r + 1;
                    else if (0 < r && this.H[r - 1].priority >= t)
                        n = r - 1;
                    else
                        break
                }
                this.H.splice(r, 0, {
                    item: e,
                    priority: t
                })
            }
            forEach(e) {
                var t = this.H.length;
                for (; t--; )
                    e(this.H[t].item)
            }
            dequeue() {
                return this.H.length ? this.H.pop().item : null
            }
            get length() {
                return this.H.length
            }
        }
        ;
        var Nr = /nochunking=1/.test(self.location.hash);
        var Cr = i();
        function xr(e, t, r) {
            if (Nr)
                Cr.then(t);
            else {
                var i = Hr;
                var n = C(e)
                  , s = x(n);
                j(s, n, "chunk", i);
                P(e, "chunk").run(t, r)
            }
        }
        function Dr(e, t) {
            if ("run" != e.state) {
                e.state = "run";
                try {
                    e.tb(t)
                } catch (t) {
                    throw e.lc(),
                    t
                }
            }
        }
        var jr = class {
            constructor(e) {
                this.state = "not_run";
                this.tb = e
            }
            o() {
                return this.tb.displayName || this.tb.name
            }
            lc() {}
            bc() {
                return !1
            }
            wc() {
                return !1
            }
        }
        ;
        var kr = class extends jr {
            constructor(e, t, r) {
                super(e);
                this.Tb = r
            }
            lc() {
                var e = self.document;
                if (!Mr) {
                    Mr = !0;
                    e = e.body;
                    var t = {
                        opacity: 1,
                        visibility: "visible",
                        animation: "none"
                    };
                    for (var r in t) {
                        var i = e
                          , n = t[r];
                        e: {
                            var s = i.style;
                            var a = r;
                            if (a.startsWith("--")) {
                                s = a;
                                break e
                            }
                            at || (at = Object.create(null));
                            var o = at[a];
                            if (!o) {
                                o = a;
                                if (void 0 === s[a]) {
                                    var l = a;
                                    l = l.charAt(0).toUpperCase() + l.slice(1);
                                    t: {
                                        for (var h = 0; h < ot.length; h++) {
                                            var c = ot[h] + l;
                                            if (void 0 !== s[c]) {
                                                l = c;
                                                break t
                                            }
                                        }
                                        l = ""
                                    }
                                    void 0 !== s[l] && (o = l)
                                }
                                at[a] = o
                            }
                            s = o
                        }
                        s && (s.startsWith("--") ? i.style.setProperty(s, n) : i.style[s] = n)
                    }
                }
            }
            bc() {
                return this.Tb.ampdoc.isVisible()
            }
            wc() {
                return this.Tb.Vb
            }
        }
        ;
        function Lr(e) {
            if (!e.gb) {
                var t = Ur(e);
                t && (t.bc() ? (e.gb = !0,
                Fr(e)) : t.wc() && e.l.requestIdleCallback ? Br(e.l, e.Ob) : Vr(e))
            }
        }
        function Ur(e, t) {
            var r = e.oa.peek();
            for (; r && "not_run" !== r.state; )
                e.oa.dequeue(),
                r = e.oa.peek();
            r && t && e.oa.dequeue();
            return r
        }
        function Vr(e) {
            e.l.postMessage("amp-macro-task", "*")
        }
        function Fr(e) {
            e.Ac && (e.ld ? e.l.navigator.scheduling.isInputPending() : 5 < e.ua) ? (e.ua = 0,
            Vr(e)) : Cr.then((()=>{
                e.Ob(null)
            }
            ))
        }
        var Hr = class {
            constructor(e) {
                this.ampdoc = e;
                this.l = e.win;
                this.oa = new Ir;
                this.Ob = this.Xb.bind(this);
                this.ua = 0;
                this.ld = !(!this.l.navigator.scheduling || !this.l.navigator.scheduling.isInputPending);
                this.gb = !1;
                this.Ac = this.l.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");
                this.l.addEventListener("message", (e=>{
                    "amp-macro-task" == e.data && this.Xb(null)
                }
                ));
                this.Vb = !1;
                k(x(e), "viewer").then((()=>{
                    this.Vb = !0
                }
                ));
                e.onVisibilityChanged((()=>{
                    e.isVisible() && Lr(this)
                }
                ))
            }
            run(e, t) {
                e = new jr(e);
                this.oa.enqueue(e, t);
                Lr(this)
            }
            runForStartup(e) {
                e = new kr(e,this.l,this);
                this.oa.enqueue(e, Number.POSITIVE_INFINITY);
                Lr(this)
            }
            Xb(e) {
                var t = Ur(this, !0);
                if (!t)
                    return this.gb = !1,
                    this.ua = 0,
                    !1;
                var r;
                try {
                    r = Date.now(),
                    Dr(t, e)
                } finally {
                    Cr.then().then().then().then().then().then().then().then().then((()=>{
                        this.gb = !1;
                        this.ua += Date.now() - r;
                        Lr(this)
                    }
                    ))
                }
                return !0
            }
        }
        ;
        function Br(e, t) {
            function r(n) {
                if (15 > n.timeRemaining()) {
                    var s = 2e3 - (Date.now() - i);
                    0 >= s || n.didTimeout ? t(n) : e.requestIdleCallback(r, {
                        timeout: s
                    })
                } else
                    t(n)
            }
            var i = Date.now();
            e.requestIdleCallback(r, {
                timeout: 2e3
            })
        }
        var qr = class {
            constructor(e, t) {
                this.D = e;
                this.Mb = t;
                this.ic = [];
                this.Ib = 0;
                this.l = t.ownerDocument.defaultView
            }
            dispose() {
                this.ic.forEach((e=>{
                    e()
                }
                ))
            }
            addTrigger(e, t) {
                var r = e.on;
                var i = cr(r);
                var s = ur(this.D.getType())
                  , a = this.D.getTrackerForAllowlist(i, s);
                R(!!a, 'Trigger type "%s" is not allowed in the %s', r, this.D.getType());
                var o;
                var l = new n;
                i = ()=>{
                    o = a.add(this.Mb, r, e, t);
                    this.ic.push(o);
                    l.resolve()
                }
                ;
                1 > this.Ib || !Gr(this.l) ? i() : xr(this.Mb, i, 3 > this.Ib ? 20 : 10);
                this.Ib++;
                return l.promise
            }
        }
        ;
        function Gr(e) {
            return "inabox" == c(e).runtime ? !!He(e)["analytics-chunks-inabox"] : !!He(e)["analytics-chunks"]
        }
        var $r = {
            referrerDomains: !0,
            enabled: !0,
            cookiePath: !0,
            cookieMaxAge: !0,
            cookieSecure: !0,
            cookieDomain: !0
        };
        function Wr(e) {
            if (!bt(e.l, e.j) || !$(e.h, "cookies"))
                return i();
            if (!m(e.h.cookies))
                return T().error("amp-analytics/cookie-writer", "cookies config must be an object"),
                i();
            var t = e.h.cookies;
            if (!1 === t.enabled)
                return i();
            var r;
            $(t, "cookieMaxAge") ? (r = Number(t.cookieMaxAge)) || 0 === r ? r *= 1e3 : (T().error("amp-analytics/cookie-writer", "invalid cookieMaxAge %s, falling back to default value (1 year)", t.cookieMaxAge),
            r = 31536e6) : r = 31536e6;
            var n = r;
            r = Object.keys(t);
            var s = [];
            for (var a = 0; a < r.length; a++) {
                var o = r[a]
                  , l = t[o];
                var h = l;
                $r[o] ? h = !1 : m(h) ? $(h, "value") ? h = !0 : (T().error("amp-analytics/cookie-writer", "value is required in the cookieValue object"),
                h = !1) : (T().error("amp-analytics/cookie-writer", "cookieValue must be configured in an object"),
                h = !1);
                h && s.push(zr(e, o, l.value, n))
            }
            return Promise.all(s)
        }
        function zr(e, t, r, i) {
            return e.Ga.expandStringAsync(r, e.zc).then((r=>{
                if (r) {
                    var n = Date.now() + i;
                    var s = e.l
                      , a = n
                      , o = {
                        highestAvailableDomain: !0
                    };
                    if (o.allowOnProxyOrigin)
                        R(!o.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
                    else {
                        R(!Ue(s.location.href), `Should never attempt to set cookie on proxy origin: ${t}`);
                        var l = De(s.location.href).hostname.toLowerCase()
                          , h = De(y.cdn).hostname.toLowerCase();
                        R(!(l == h || z(l, "." + h)), "Should never attempt to set cookie on proxy origin. (in depth check): " + t)
                    }
                    l = void 0;
                    o.domain ? l = o.domain : o.highestAvailableDomain && (l = et(s));
                    tt(s, t, r, a, l, o.sameSite, o.secure)
                }
            }
            )).catch((e=>{
                T().error("amp-analytics/cookie-writer", "Error expanding cookie string", e)
            }
            ))
        }
        var Jr = class {
            constructor(e, t, r) {
                this.l = e;
                this.j = t;
                this.Ga = ae(t);
                this.lb = null;
                this.h = r;
                this.zc = Bt(t).getMacros(t)
            }
            write() {
                if (!this.lb) {
                    this.lb = new n;
                    var e = ()=>{
                        this.lb.resolve(Wr(this))
                    }
                    ;
                    Gr(this.l) ? xr(this.j, e, 10) : e()
                }
                return this.lb.promise
            }
        }
        ;
        function Yr(e) {
            var t = e.Yc.measureElement((()=>e.R.getLayoutRect(e.D)));
            e.Xa = e.Xa || t;
            return t
        }
        var Kr = class {
            constructor(e) {
                this.R = le(e.ampdoc);
                this.Yc = P(e.ampdoc, "mutator");
                this.fa = null;
                this.na = new tr;
                this.D = e.getRootElement();
                this.Xa = null
            }
            dispose() {
                this.na.removeAll();
                this.fa && (this.fa(),
                this.fa = null)
            }
            removeScrollHandler(e) {
                this.na.remove(e);
                0 >= this.na.getHandlerCount() && this.fa && (this.fa(),
                this.fa = null)
            }
            addScrollHandler(e) {
                var t = this.R.getSize();
                (this.Xa || Yr(this)).then((r=>{
                    var i = r.top
                      , n = r.left
                      , s = r.width
                      , a = r.height
                      , o = {
                        top: this.R.getScrollTop() - i,
                        left: this.R.getScrollLeft() - n,
                        width: t.width,
                        height: t.height,
                        scrollHeight: a,
                        scrollWidth: s,
                        initialSize: {
                            scrollHeight: a,
                            scrollWidth: s
                        }
                    };
                    e(o)
                }
                ));
                0 === this.na.getHandlerCount() && (this.fa = this.R.onChanged(this.bd.bind(this)));
                return this.na.add(e)
            }
            bd(e) {
                return Promise.all([this.Xa || Yr(this), Yr(this)]).then((t=>{
                    var {height: r, width: i} = t[0]
                      , {top: n, left: s, width: a, height: o} = t[1];
                    this.na.fire({
                        top: e.top - n,
                        left: e.left - s,
                        width: e.width,
                        height: e.height,
                        scrollWidth: a,
                        scrollHeight: o,
                        initialSize: {
                            scrollHeight: r,
                            scrollWidth: i
                        }
                    })
                }
                ))
            }
        }
        ;
        function Xr(e, t, r, i) {
            return {
                left: e,
                top: t,
                width: r,
                height: i,
                bottom: t + i,
                right: e + r,
                x: e,
                y: t
            }
        }
        function Zr(e, t, r) {
            r = {
                top: r,
                bottom: r + t.getHeight(),
                left: 0,
                right: t.getWidth()
            };
            r = Xr(Number(r.left), Number(r.top), Number(r.width), Number(r.height));
            return e.top <= r.bottom && r.top <= e.bottom && e.left <= r.right && r.left <= e.right ? "inside" : e.top < r.top ? "top" : e.bottom > r.bottom ? "bottom" : "inside"
        }
        var Qr = class {
            generateRequest(e, t, r=!1) {
                return r ? {
                    url: e.replace("${extraUrlParams}", ""),
                    payload: JSON.stringify(t.extraUrlParams)
                } : {
                    url: ti(e, [t])
                }
            }
            generateBatchRequest(e, t, r=!1) {
                return r ? {
                    url: e.replace("${extraUrlParams}", ""),
                    payload: JSON.stringify(t.map((e=>e.extraUrlParams)))
                } : {
                    url: ti(e, t)
                }
            }
        }
        ;
        var ei = {
            "default": new Qr
        };
        function ti(e, t) {
            var r = t.map((e=>ke(e.extraUrlParams))).filter((e=>!!e)).join("&");
            return 0 <= e.indexOf("${extraUrlParams}") ? e.replace("${extraUrlParams}", r) : je(e, r)
        }
        var ri = {
            AMPDOC_HOST: !0,
            AMPDOC_HOSTNAME: !0,
            AMPDOC_URL: !0,
            AMP_VERSION: !0,
            AVAILABLE_SCREEN_HEIGHT: !0,
            AVAILABLE_SCREEN_WIDTH: !0,
            BACKGROUND_STATE: !0,
            BROWSER_LANGUAGE: !0,
            CANONICAL_HOST: !0,
            CANONICAL_HOSTNAME: !0,
            CANONICAL_PATH: !0,
            CANONICAL_URL: !0,
            DOCUMENT_CHARSET: !0,
            FIRST_CONTENTFUL_PAINT: !0,
            FIRST_VIEWPORT_READY: !0,
            MAKE_BODY_VISIBLE: !0,
            RANDOM: !0,
            SCREEN_COLOR_DEPTH: !0,
            SCREEN_HEIGHT: !0,
            SCREEN_WIDTH: !0,
            SOURCE_HOST: !0,
            SOURCE_HOSTNAME: !0,
            SOURCE_PATH: !0,
            SOURCE_URL: !0,
            TIMESTAMP: !0,
            TIMEZONE: !0,
            TIMEZONE_CODE: !0,
            USER_AGENT: !0,
            VIEWPORT_HEIGHT: !0,
            VIEWPORT_WIDTH: !0
        };
        function ii(e) {
            return new Promise((t=>{
                setTimeout((()=>t(e())))
            }
            ))
        }
        function ni(e) {
            return !(m(e.resources) && e.encoding && e.encoding.entry && e.encoding.delim) || 2 > e.encoding.base || 36 < e.encoding.base || null != e.responseAfter && "number" != typeof e.responseAfter ? !1 : !0
        }
        function si(e, t) {
            var r = e.name;
            for (e = 0; e < t.length; ++e) {
                var {hostPattern: i, resources: n} = t[e];
                if (!i.test(r.host))
                    continue;
                var s = st(n, (e=>e.pathPattern.test(r.pathname) && e.queryPattern.test(r.search)));
                if (-1 != s)
                    return n[s].name
            }
            return null
        }
        function ai(e) {
            var t = {};
            for (var r in e) {
                var i = e[r].host || ""
                  , n = {
                    name: r,
                    pathPattern: new RegExp(e[r].path || ""),
                    queryPattern: new RegExp(e[r].query || "")
                };
                t[i] ? t[i].resources.push(n) : t[i] = {
                    hostPattern: new RegExp(i),
                    resources: [n]
                }
            }
            var s = [];
            for (var a in t)
                s.push(t[a]);
            return s
        }
        function oi(e, t) {
            var r = ai(t)
              , i = [];
            e.forEach((e=>{
                var t = si(e, r);
                t && i.push({
                    entry: e,
                    name: t
                })
            }
            ));
            return i
        }
        function li(e, t, r) {
            var i = t.resources
              , n = t.encoding
              , s = Bt(r)
              , a = (e,t=0)=>Math.round(e - t).toString(n.base || 10);
            e = oi(e, i).map((e=>{
                var t = e.entry;
                t = {
                    key: e.name,
                    startTime: a(t.startTime),
                    redirectTime: a(t.redirectEnd, t.redirectStart),
                    domainLookupTime: a(t.domainLookupEnd, t.domainLookupStart),
                    tcpConnectTime: a(t.connectEnd, t.connectStart),
                    serverResponseTime: a(t.responseStart, t.requestStart),
                    networkTransferTime: a(t.responseEnd, t.responseStart),
                    transferSize: a(t.transferSize || 0),
                    encodedBodySize: a(t.encodedBodySize || 0),
                    decodedBodySize: a(t.decodedBodySize || 0),
                    duration: a(t.duration),
                    initiatorType: t.initiatorType
                };
                return t = new Nt(t,1)
            }
            )).map((e=>s.expandTemplate(n.entry, e, r)));
            return Promise.all(e).then((e=>e.join(n.delim)))
        }
        function hi(e, t) {
            var {win: r} = e.getAmpDoc();
            if (t.done || !r.performance || !r.performance.now || !r.performance.getEntriesByType || !ni(t))
                return t.done = !0,
                Promise.resolve("");
            var i = r.performance.getEntriesByType("resource");
            150 <= i.length && (t.done = !0);
            var n = t.responseAfter || 0;
            t.responseAfter = Math.max(n, r.performance.now());
            i = i.filter((e=>e.startTime + e.duration >= n));
            return i.length ? ii((()=>li(i, t, e))) : Promise.resolve("")
        }
        function ci(e, t, r) {
            return t && Date.now() < r + 6e4 ? hi(e, t) : Promise.resolve("")
        }
        function ui(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                )));
                r.push.apply(r, i)
            }
            return r
        }
        function di(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ui(Object(r), !0).forEach((function(t) {
                    var i = r[t];
                    t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ui(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function mi(e) {
            e.qc && (e.bb = e.win.setTimeout((()=>{
                0 != e.Ba && pi(e);
                e.pc = !1;
                e.Y && (e.win.clearTimeout(e.Y),
                e.Y = null)
            }
            ), 1e3 * e.qc))
        }
        function pi(e) {
            var t = e.Eb
              , r = e.Ja
              , i = e.Ia
              , n = e.pb
              , s = e.zb;
            e.cb();
            (t ? t : r).then((t=>{
                e.ed.url(e.m, t, !0)
            }
            ));
            Promise.all([i, Promise.all(n), t]).then((t=>{
                var r = t[0];
                var i = t[2];
                r = i ? e.qa.parse(i).origin + r : r;
                t = t[1];
                if (0 !== t.length) {
                    if (e.Oa) {
                        try {
                            e: {
                                var n = e.Oa;
                                if (m(n)) {
                                    var a = De(r);
                                    if ("pagead2.googlesyndication.com" == a.hostname) {
                                        var o = l(a.search);
                                        if ("ampim" == o.id) {
                                            var h = o.d && o.d.split(",")
                                              , c = o.bs && o.bs.split(",");
                                            if (d(h)) {
                                                var u = Number(h[0])
                                                  , p = Number(h[1]);
                                                if (0 == u || 0 == p) {
                                                    if (.1 < Math.random())
                                                        break e;
                                                    O().expectedError("active-view-debug", "Debugging: Activeview request with zero element size", u, p, r, JSON.stringify(n))
                                                }
                                            }
                                            if (d(c)) {
                                                var f = Number(c[0])
                                                  , v = Number(c[1]);
                                                0 != f && 0 != v || .1 < Math.random() || O().expectedError("active-view-debug", "Debugging: Activeview request with zero viewport size", f, v, r, JSON.stringify(n))
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            O().error("active-view-debug", e)
                        }
                        e.Oa = null
                    }
                    s.iframePing ? (R("visible" == s.on, "iframePing is only available on page view requests."),
                    e.W.sendRequestUsingIframe(r, t[0])) : e.W.sendRequest(r, t, !!e.w)
                }
            }
            ))
        }
        function fi(e) {
            var t = e.ob < e.w.length ? e.w[e.ob++] : e.w[e.w.length - 1];
            e.Y = e.win.setTimeout((()=>{
                0 != e.Ba && pi(e);
                fi(e)
            }
            ), t)
        }
        var vi = class {
            constructor(e, t, r, i, n) {
                this.j = e;
                this.m = e.getAmpDoc();
                this.win = this.m.win;
                this.rc = t.origin;
                this.baseUrl = t.baseUrl;
                this.w = t.batchInterval;
                this.qc = Number(t.reportWindow) || null;
                this.ob = null;
                this.C = Bt(e);
                this.Ga = ae(e);
                this.qa = _(e, "url");
                this.Eb = this.Ja = this.Ia = null;
                this.pb = [];
                this.ed = r;
                this.W = i;
                this.ra = n ? ri : void 0;
                this.bb = this.Y = null;
                this.pc = !0;
                this.zb = null;
                this.Ba = 0;
                this.V = Date.now();
                this.Oa = null;
                mi(this);
                if (this.w) {
                    this.w = d(this.w) ? this.w : [this.w];
                    for (e = 0; e < this.w.length; e++)
                        t = this.w[e],
                        R(p(t), "Invalid batchInterval value: %s", this.w),
                        t = 1e3 * Number(t),
                        R(200 <= t, "Invalid batchInterval value: %s, interval value must be greater than %s ms.", this.w, 200),
                        this.w[e] = t;
                    this.ob = 0;
                    fi(this)
                }
            }
            send(e, t, r) {
                var i = !0 === t.important;
                if (this.pc || i) {
                    r.getVar("_avError_") && (this.Oa = r.getVar("_avError_"),
                    delete r.vars._avError_);
                    this.Ba++;
                    this.zb = t;
                    var n = this.C.getMacros(this.j);
                    n.RESOURCE_TIMING = ci(this.j, t.resourceTimingSpec, this.V);
                    this.Ia || (r.freezeVar("extraUrlParams"),
                    this.Ja = this.C.expandTemplate(this.baseUrl, r, this.j, n, this.ra),
                    this.Ia = this.Ja.then((e=>this.Ga.expandUrlAsync(e, n, this.ra))));
                    if (!this.Eb && this.rc) {
                        var s = new Nt(r.vars,r.iterations,!0);
                        this.Eb = this.C.expandTemplate(this.rc, s, this.j, n, this.ra).then((e=>this.Ga.expandUrlAsync(e, n, this.ra, !0)))
                    }
                    var a = di(di({}, e), t.extraUrlParams)
                      , o = this.win.Date.now()
                      , l = bi(this.C, this.Ga, a, r, n, this.j, this.ra).then((e=>G({
                        trigger: t.on,
                        timestamp: o,
                        extraUrlParams: e
                    })));
                    this.pb.push(l);
                    0 == this.Ba || !i && this.w || pi(this)
                }
            }
            dispose() {
                this.cb();
                this.Y && (this.win.clearTimeout(this.Y),
                this.Y = null);
                this.bb && (this.win.clearTimeout(this.bb),
                this.bb = null)
            }
            cb() {
                this.Ba = 0;
                this.Ja = this.Ia = null;
                this.pb = [];
                this.zb = null
            }
        }
        ;
        function gi(e, t, r, i, n, s) {
            var a = Bt(e)
              , o = ae(s)
              , l = a.getMacros(s);
            n.freezeVar("extraUrlParams");
            var h = a.expandTemplate(t, n, s).then((e=>o.expandStringAsync(e, l)));
            return 0 > t.indexOf("${extraUrlParams}") ? h : h.then((e=>{
                var t = di(di({}, r), i.extraUrlParams);
                return bi(a, o, t, n, l, s).then((t=>ti(e, [G({
                    extraUrlParams: t
                })])))
            }
            ))
        }
        function bi(e, t, r, i, n, s, a) {
            var o = {}
              , l = []
              , h = new Nt(i.vars,i.iterations,!0)
              , c = (r,i,o)=>{
                r = r[i];
                if ("string" === typeof r)
                    o[i] = void 0,
                    r = e.expandTemplate(r, h, s).then((e=>t.expandStringAsync(e, n, a))).then((e=>{
                        o[i] = e
                    }
                    )),
                    l.push(r);
                else if (d(r)) {
                    o[i] = [];
                    for (var u = 0; u < r.length; u++)
                        c(r, u, o[i])
                } else if (m(r) && null !== r) {
                    o[i] = {};
                    var p = Object.keys(r);
                    for (u = 0; u < p.length; u++)
                        c(r, p[u], o[i])
                } else
                    o[i] = r
            }
              , u = Object.keys(r);
            for (i = 0; i < u.length; i++)
                c(r, u[i], o);
            return Promise.all(l).then((()=>o))
        }
        function yi(e, t) {
            if (e.Kb)
                Ei(e, t) || e.cb();
            else if (e.ia)
                if (wi(e, t) || e.Uc) {
                    if (e.I && (clearTimeout(e.I),
                    e.I = null),
                    e.Db)
                        e.ia(),
                        e.ia = null,
                        e.oc && (e.Kb = !0,
                        e.S = 0);
                    else if (e.Ma) {
                        var r = e.Ma();
                        e.Ma = null;
                        r.then((()=>{
                            e.Db = !0;
                            e.update()
                        }
                        ))
                    }
                } else if (e.ka && !e.I) {
                    var i = Ai(e);
                    0 < i && (e.I = setTimeout((()=>{
                        e.I = null;
                        e.update()
                    }
                    ), i))
                } else
                    !e.ka && e.I && (clearTimeout(e.I),
                    e.I = null)
        }
        function Ei(e, t) {
            return 1 == e.K.visiblePercentageMin ? 1 == t : 0 == e.K.visiblePercentageMax ? 0 == t : t > e.K.visiblePercentageMin && t <= e.K.visiblePercentageMax
        }
        function wi(e, t) {
            var r = Date.now();
            0 < t && (e.Ra = e.Ra || r,
            e.yb = r,
            !e.Ab && 300 > r - e.Kc && (e.Ab = t));
            var i = e.ka
              , n = e.va ? r - e.va : 0;
            e.ka = Ei(e, t);
            if (e.ka) {
                e.sb = !0;
                i ? (e.O += n,
                e.S += n,
                e.U = Math.max(e.U, e.S)) : e.Sa = e.Sa || r;
                e.va = r;
                e.za = 0 < e.za ? Math.min(e.za, t) : t;
                if (t > e.ya)
                    try {
                        e.Sb && (e.Na.layoutBoxAtMaxRatio = e.Sb()),
                        e.Rb && (e.Na.boundingClientRectAtMaxRatio = e.Rb()),
                        e.xc && (e.Na.viewportSizeAtMaxRatio = e.xc.getSize())
                    } catch (e) {
                        O().error("active-view-debug", e)
                    }
                e.ya = Math.max(e.ya, t);
                e.ab = r
            } else
                i && (e.U = Math.max(e.U, e.S + n),
                e.va = 0,
                e.O += n,
                e.S = 0,
                e.ab = r);
            return e.sb && e.O >= e.K.totalTimeMin && e.O <= e.K.totalTimeMax && e.U >= e.K.continuousTimeMin && e.U <= e.K.continuousTimeMax
        }
        function Ai(e) {
            var t = Math.max(e.K.continuousTimeMin - e.S, 0)
              , r = Math.max(e.K.totalTimeMin - e.O, 0);
            return Math.min(Math.max(t, r), t || 1 / 0, r || 1 / 0)
        }
        var Ti = class {
            constructor(e, t, r=null, i=null, s=null) {
                this.Ec = t;
                this.Sb = r;
                this.Rb = i;
                this.xc = s;
                this.Na = G({});
                this.K = G({
                    visiblePercentageMin: Number(e.visiblePercentageMin) / 100 || 0,
                    visiblePercentageMax: Number(e.visiblePercentageMax) / 100 || 1,
                    totalTimeMin: Number(e.totalTimeMin) || 0,
                    totalTimeMax: Number(e.totalTimeMax) || 1 / 0,
                    continuousTimeMin: Number(e.continuousTimeMin) || 0,
                    continuousTimeMax: Number(e.continuousTimeMax) || 1 / 0
                });
                "0" === String(e.visiblePercentageMax).trim() && (this.K.visiblePercentageMax = 0);
                this.Uc = void 0 !== e.reportWhen;
                this.oc = !0 === e.repeat;
                this.ba = new tr;
                e = new n;
                this.Pa = e.promise;
                this.ia = e.resolve;
                this.Pa.then((()=>{
                    this.ba.fire()
                }
                ));
                this.ea = [];
                this.Kc = Date.now();
                this.Db = this.mc = !0;
                this.I = this.Ma = null;
                this.sb = this.ka = !1;
                this.dc = this.va = this.ya = this.za = this.Ab = this.ab = this.Sa = this.yb = this.Ra = this.O = this.U = this.S = 0;
                this.Kb = this.cc = !1;
                this.fb = null
            }
            cb() {
                var e = new n;
                this.Pa = e.promise;
                this.ia = e.resolve;
                this.Pa.then((()=>{
                    this.ba.fire()
                }
                ));
                this.fb = null;
                this.ka = this.sb = !1;
                this.va = this.ya = this.za = this.ab = this.yb = this.Ra = this.Sa = this.O = this.U = this.S = 0;
                this.Kb = !1
            }
            maybeDispose() {
                this.oc || this.dispose()
            }
            dispose() {
                this.I && (clearTimeout(this.I),
                this.I = null);
                this.fb && (clearTimeout(this.fb),
                this.fb = null);
                this.ea.forEach((e=>{
                    e()
                }
                ));
                this.ea.length = 0;
                this.ia = null;
                this.ba && (this.ba.removeAll(),
                this.ba = null)
            }
            unsubscribe(e) {
                this.ea.push(e)
            }
            onTriggerEvent(e) {
                this.ba && this.ba.add(e);
                this.Pa && !this.ia && e()
            }
            setReady(e) {
                this.mc = e;
                this.update()
            }
            setReportReady(e) {
                this.Db = !1;
                this.Ma = e
            }
            update() {
                yi(this, this.mc ? this.Ec() : 0)
            }
            getState(e) {
                return G({
                    firstSeenTime: Oi(this.Ra, e),
                    lastSeenTime: Oi(this.yb, e),
                    lastVisibleTime: Oi(this.ab, e),
                    firstVisibleTime: Oi(this.Sa, e),
                    maxContinuousVisibleTime: this.U,
                    totalVisibleTime: this.O,
                    loadTimeVisibility: 100 * this.Ab || 0,
                    minVisiblePercentage: 100 * this.za,
                    maxVisiblePercentage: 100 * this.ya
                })
            }
            getErrorInfoTemp() {
                return this.Na
            }
            maybeSetInitialScrollDepth(e) {
                this.cc || (this.dc = e,
                this.cc = !0)
            }
            getInitialScrollDepth() {
                return this.dc
            }
        }
        ;
        function Oi(e, t) {
            return e >= t ? e - t : 0
        }
        function Ri(e) {
            var t = e.parentElement;
            var r = [];
            if (t) {
                var i = t;
                r.push(i);
                for (var n = 0; 50 > n; n++)
                    if ((t = i.parentNode || i.parentElement) && 1 == t.nodeType)
                        i = t,
                        r.push(i);
                    else if (t && 9 == t.nodeType)
                        if ((t = i.ownerDocument.defaultView.frameElement) && 1 == t.nodeType)
                            i = t,
                            r.push(i);
                        else
                            break;
                    else
                        break
            }
            r.push(e);
            var s, a = 1;
            for (e = 0; e < r.length; e++) {
                e: {
                    t = r[e];
                    if (!t) {
                        s = 1;
                        break e
                    }
                    var {visibility: o, opacity: l} = window.getComputedStyle(t) || Object.create(null);
                    "hidden" === o ? s = 0 : (t = "" === l ? 1 : parseFloat(l),
                    s = isNaN(t) ? 1 : t)
                }
                s < a && (a = s);
                if (0 === a)
                    break
            }
            return a
        }
        var Si = [0, .05, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1];
        var Pi = 1;
        function _i(e) {
            var t = e.__AMP_VIS_ID;
            t || (t = ++Pi,
            e.__AMP_VIS_ID = t);
            return t
        }
        function Mi(e) {
            if (!e.__AMP_VIS) {
                var t = C(e);
                var r = N(e)
                  , i = r && r.__AMP_EMBED__;
                var n;
                if (n = r)
                    if (n = r,
                    Node.prototype.getRootNode)
                        n = n.getRootNode() || n;
                    else
                        for (; n.parentNode && (!n || "I-AMPHTML-SHADOW-ROOT" != n.tagName && (11 != n.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(n))); n = n.parentNode)
                            ;
                t = i && n ? new Li(Mi(n),i) : new ki(t);
                e.__AMP_VIS = t
            }
            return e.__AMP_VIS
        }
        function Ii(e, t) {
            e.F || (e.F = []);
            e.F.push(t)
        }
        function Ni(e, t) {
            e.F && (t = e.F.indexOf(t),
            -1 != t && e.F.splice(t, 1))
        }
        function Ci(e) {
            for (var t = 0; t < e.aa.length; t++)
                e.aa[t].update()
        }
        function xi(e, t, r, i, n, s, a, o, l) {
            if (n.visiblePercentageThresholds && void 0 == n.visiblePercentageMin && void 0 == n.visiblePercentageMax) {
                var h = []
                  , c = n.visiblePercentageThresholds;
                if (!c || !d(c))
                    return T().error("amp-analytics/visibility-manager", "invalid visiblePercentageThresholds"),
                    ()=>{}
                    ;
                for (var u = 0; u < c.length; u++) {
                    var m = c[u];
                    if (!d(m) || 2 != m.length) {
                        T().error("amp-analytics/visibility-manager", "visiblePercentageThresholds entry length is not 2");
                        continue
                    }
                    if (!p(m[0]) || !p(m[1])) {
                        T().error("amp-analytics/visibility-manager", "visiblePercentageThresholds entry is not valid number");
                        continue
                    }
                    var f = Number(m[0])
                      , v = Number(m[1]);
                    if (0 > f || 100 < v || f > v || f == v && 100 != f && 0 != v) {
                        T().error("amp-analytics/visibility-manager", "visiblePercentageThresholds entry invalid min/max value");
                        continue
                    }
                    var g = n;
                    g.visiblePercentageMin = f;
                    g.visiblePercentageMax = v;
                    var b = new Ti(g,t,r,i,le(e.ampdoc));
                    h.push(Di(e, b, s, a, o, l))
                }
                return ()=>{
                    h.forEach((e=>e()))
                }
            }
            var y = new Ti(n,t,r,i,le(e.ampdoc));
            return Di(e, y, s, a, o, l)
        }
        function Di(e, t, r, i, n, s) {
            i && t.setReportReady(i);
            var a = le(e.ampdoc)
              , o = a.getScrollTop();
            e.maybeUpdateMaxScrollDepth(o);
            r ? (t.setReady(!1),
            r.then((()=>{
                t.setReady(!0);
                t.maybeSetInitialScrollDepth(o)
            }
            ))) : t.maybeSetInitialScrollDepth(o);
            t.onTriggerEvent((()=>{
                var r = e.getStartTime();
                var i = t.getState(r);
                i._avError_ = t.getErrorInfoTemp();
                i.backgrounded = e.isBackgrounded() ? 1 : 0;
                i.backgroundedAtStart = e.isBackgroundedAtStart() ? 1 : 0;
                i.totalTime = Date.now() - r;
                if (s) {
                    i.elementId = s.id;
                    i.opacity = Ri(s);
                    r = (r = e.sc.getResourceForElementOptional(s)) ? r.getLayoutBox() : a.getLayoutRect(s);
                    var o = e.getElementVisibility(s)
                      , l = e.getElementIntersectionRect(s);
                    Object.assign(i, G({
                        intersectionRatio: o,
                        intersectionRect: JSON.stringify(l)
                    }))
                } else
                    i.opacity = e.getRootMinOpacity(),
                    i.intersectionRatio = e.getRootVisibility(),
                    r = e.getRootLayoutBox();
                t.maybeDispose();
                r && (Object.assign(i, G({
                    elementX: r.left,
                    elementY: r.top,
                    elementWidth: r.width,
                    elementHeight: r.height
                })),
                i.initialScrollDepth = Zr(r, a, t.getInitialScrollDepth()),
                i.maxScrollDepth = Zr(r, a, e.getMaxScrollDepth()));
                n(i)
            }
            ));
            e.aa.push(t);
            t.unsubscribe((()=>{
                var r = e.aa.indexOf(t);
                -1 != r && e.aa.splice(r, 1)
            }
            ));
            s && t.unsubscribe(e.observe(s, (()=>t.update())));
            t.update();
            return function() {
                t.dispose()
            }
        }
        var ji = class {
            constructor(e, t) {
                this.parent = e;
                this.ampdoc = t;
                this.sc = P(t, "resources");
                this.Fb = 0;
                this.aa = [];
                this.F = null;
                this.ea = [];
                this.Bb = 0;
                this.parent && Ii(this.parent, this);
                var r = le(this.ampdoc);
                r.onChanged((()=>{
                    this.maybeUpdateMaxScrollDepth(r.getScrollTop())
                }
                ))
            }
            dispose() {
                this.setRootVisibility(0);
                for (var e = this.aa.length - 1; 0 <= e; e--)
                    this.aa[e].dispose();
                this.ea.forEach((e=>{
                    e()
                }
                ));
                this.ea.length = 0;
                this.parent && Ni(this.parent, this);
                if (this.F)
                    for (e = 0; e < this.F.length; e++)
                        this.F[e].dispose()
            }
            unsubscribe(e) {
                this.ea.push(e)
            }
            getStartTime() {}
            isBackgrounded() {}
            isBackgroundedAtStart() {}
            getRootMinOpacity() {}
            getRootLayoutBox() {}
            getRootElementTemp() {}
            getBoundingClientRectTemp() {}
            getElementLayoutBoxTemp(e) {
                var t = this.sc.getResourceForElementOptional(e);
                return t ? t.getLayoutBox() : le(this.ampdoc).getLayoutRect(e)
            }
            getRootVisibility() {
                return this.parent ? 0 < this.parent.getRootVisibility() ? this.Fb : 0 : this.Fb
            }
            setRootVisibility(e) {
                this.Fb = e;
                Ci(this);
                if (this.F)
                    for (e = 0; e < this.F.length; e++)
                        Ci(this.F[e])
            }
            maybeUpdateMaxScrollDepth(e) {
                e > this.Bb && (this.Bb = e)
            }
            getMaxScrollDepth() {
                return this.Bb
            }
            listenRoot(e, t, r, i) {
                var n = this.getRootVisibility.bind(this)
                  , s = this.getRootLayoutBox.bind(this);
                var a;
                this.getRootElementTemp() && (a = this.getBoundingClientRectTemp.bind(this, this.getRootElementTemp()));
                return xi(this, n, s, a || null, e, t, r, i)
            }
            listenElement(e, t, r, i, n) {
                var s = this.getElementVisibility.bind(this, e)
                  , a = this.getElementLayoutBoxTemp.bind(this, e)
                  , o = this.getBoundingClientRectTemp.bind(this, e);
                return xi(this, s, a, o, t, r, i, n, e)
            }
            observe() {}
            getElementVisibility() {}
            getElementIntersectionRect() {}
        }
        ;
        var ki = class extends ji {
            constructor(e) {
                super(null, e);
                this.R = le(e);
                this.Nb = !e.isVisible();
                this.nb = this.isBackgrounded();
                this.P = Object.create(null);
                this.$ = this.tc = null;
                if ("inabox" == c(this.ampdoc.win).runtime) {
                    e = this.ampdoc.getRootNode();
                    var t = e.documentElement || e.body || e;
                    this.tc = t;
                    this.unsubscribe(this.observe(t, this.setRootVisibility.bind(this)));
                    var r = ()=>{
                        var e = _i(t)
                          , r = this.P[e];
                        r && (r.isVisible = 1 > this.ampdoc.win.innerHeight || 1 > this.ampdoc.win.innerWidth ? !1 : !0,
                        this.setRootVisibility(r.isVisible ? r.intersectionRatio : 0))
                    }
                    ;
                    this.ampdoc.win.addEventListener("resize", r);
                    this.unsubscribe((()=>{
                        this.ampdoc.win.removeEventListener("resize", r)
                    }
                    ))
                } else
                    this.setRootVisibility(this.ampdoc.isVisible() ? 1 : 0),
                    this.unsubscribe(this.ampdoc.onVisibilityChanged((()=>{
                        var e = this.ampdoc.isVisible();
                        e || (this.Nb = !0);
                        this.setRootVisibility(e ? 1 : 0)
                    }
                    )))
            }
            dispose() {
                super.dispose();
                this.$ && (this.$.disconnect(),
                this.$ = null)
            }
            getStartTime() {
                return this.ampdoc.getFirstVisibleTime()
            }
            isBackgrounded() {
                return this.Nb
            }
            isBackgroundedAtStart() {
                return this.nb
            }
            getRootMinOpacity() {
                var e = this.ampdoc.getRootNode();
                return Ri(e.documentElement || e.body || e)
            }
            getRootElementTemp() {
                return this.tc
            }
            getRootLayoutBox() {
                var e = this.ampdoc.getRootNode();
                return this.R.getLayoutRect(e.documentElement || e.body || e)
            }
            observe(e, t) {
                var r = _i(e);
                var i = this.P[r];
                i ? 0 < i.intersectionRatio && i.isVisible && t(i.intersectionRatio) : (i = {
                    element: e,
                    intersectionRatio: 0,
                    intersectionRect: null,
                    isVisible: !1,
                    boundingClientRect: null,
                    listeners: []
                },
                this.P[r] = i);
                i.listeners.push(t);
                this.$ || (this.$ = new this.ampdoc.win.IntersectionObserver(this.$c.bind(this),{
                    threshold: Si
                }));
                this.$.observe(e);
                return ()=>{
                    var i = this.P[r];
                    if (i) {
                        var n = i.listeners.indexOf(t);
                        -1 != n && i.listeners.splice(n, 1);
                        0 == i.listeners.length && (this.$.unobserve(e),
                        delete this.P[r])
                    }
                }
            }
            getElementVisibility(e) {
                if (0 == this.getRootVisibility())
                    return 0;
                e = _i(e);
                return (e = this.P[e]) && e.isVisible && e.intersectionRatio || 0
            }
            getBoundingClientRectTemp(e) {
                if (!e)
                    return null;
                e = _i(e);
                return (e = this.P[e]) && e.boundingClientRect
            }
            getElementIntersectionRect(e) {
                if (0 >= this.getElementVisibility(e))
                    return null;
                e = _i(e);
                return (e = this.P[e]) ? e.intersectionRect : null
            }
            $c(e) {
                e.forEach((e=>{
                    var t = e.intersectionRect;
                    t = Xr(Number(t.left), Number(t.top), Number(t.width), Number(t.height));
                    var {boundingClientRect: r} = e;
                    r = r && Xr(Number(r.left), Number(r.top), Number(r.width), Number(r.height));
                    var i = e.intersectionRatio
                      , n = t
                      , s = r;
                    i = Math.min(Math.max(i, 0), 1);
                    e = _i(e.target);
                    e = this.P[e];
                    var a = !0;
                    if (1 > s.width || 1 > s.height)
                        a = !1;
                    if (e)
                        for (e.isVisible = a,
                        e.intersectionRatio = i,
                        e.intersectionRect = n,
                        e.boundingClientRect = s,
                        n = 0; n < e.listeners.length; n++)
                            e.listeners[n](e.isVisible ? i : 0)
                }
                ))
            }
        }
        ;
        var Li = class extends ji {
            constructor(e, t) {
                super(e, e.ampdoc);
                this.embed = t;
                this.nb = this.parent.isBackgrounded();
                this.unsubscribe(this.parent.observe(t.host, this.setRootVisibility.bind(this)))
            }
            getStartTime() {
                return this.embed.getStartTime()
            }
            isBackgrounded() {
                return this.parent.isBackgrounded()
            }
            isBackgroundedAtStart() {
                return this.nb
            }
            getRootMinOpacity() {
                return Ri(this.embed.iframe)
            }
            getRootElementTemp() {
                return null
            }
            getBoundingClientRectTemp() {
                return null
            }
            getRootLayoutBox() {
                var e = this.embed.iframe;
                return le(this.ampdoc).getLayoutRect(e)
            }
            observe(e, t) {
                return this.parent.observe(e, t)
            }
            getElementVisibility(e) {
                return 0 == this.getRootVisibility() ? 0 : this.parent.getElementVisibility(e)
            }
            getElementIntersectionRect(e) {
                return 0 == this.getRootVisibility() ? null : this.parent.getElementIntersectionRect(e)
            }
        }
        ;
        var Ui = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];
        function Vi(e, t, r) {
            e = C(e);
            return Fi(e, t, (e=>e.isDisplayed() && (e.overlaps(r) || e.isFixed()) ? !0 : !1)).then((e=>{
                var t = [];
                e.forEach((e=>{
                    Ui.includes(e.element.tagName) || t.push(e.loadedOnce())
                }
                ));
                return Promise.all(t)
            }
            ))
        }
        function Fi(e, t, r) {
            return e.signals().whenSignal("ready-scan").then((()=>{
                var r = [];
                P(e, "resources").get().forEach((e=>{
                    e.hasBeenMeasured() || e.hostWin != t || e.hasOwner() || r.push(e.getPageLayoutBoxAsync())
                }
                ));
                return Promise.all(r)
            }
            )).then((()=>P(e, "resources").get().filter((e=>e.hostWin == t && !e.hasOwner() && e.hasBeenMeasured() && r(e)))))
        }
        var Hi = /^vars(.+)/;
        function Bi(e) {
            var t = 0;
            var r = [];
            for (var i = 0; i < e.length; i++)
                Object.keys(re(e[i], Hi)).length ? r.push(e[i]) : t++;
            return r
        }
        function qi(e, t) {
            return e.ampdoc.whenReady().then((()=>{
                var r = [];
                for (var i = 0; i < t.length; i++) {
                    var n, s = [];
                    var a = t[i];
                    try {
                        n = e.getRoot().querySelectorAll(a)
                    } catch (e) {
                        R(!1, `Invalid query selector ${a}`)
                    }
                    for (var o = 0; o < n.length; o++)
                        e.contains(n[o]) && s.push(n[o]);
                    s = Bi(s);
                    R(s.length, `Element "${a}" not found`);
                    r = r.concat(s)
                }
                return r.filter(((e,t)=>r.indexOf(e) === t))
            }
            ))
        }
        var Gi = class {
            constructor(e) {
                this.ampdoc = e;
                this.A = Object.create(null);
                this.Da = this.Ha = null
            }
            dispose() {
                for (var e in this.A)
                    this.A[e].dispose(),
                    delete this.A[e];
                this.Ha && this.Ha.dispose();
                this.Da && this.Da.dispose()
            }
            getType() {}
            getRoot() {}
            getViewer() {
                return P(this.ampdoc, "viewer")
            }
            getRootElement() {
                var e = this.getRoot();
                return e.host || e.documentElement || e.body || e
            }
            getHostElement() {}
            signals() {}
            contains(e) {
                return this.getRoot().contains(e)
            }
            getElementById() {}
            getTrackerForAllowlist(e, t) {
                var r = t[e];
                return r ? this.getTracker(e, r) : null
            }
            getTracker(e, t) {
                var r = this.A[e];
                r || (r = new t(this),
                this.A[e] = r);
                return r
            }
            getTrackerOptional(e) {
                return this.A[e] || null
            }
            getElement(e, t, r=null) {
                return ":root" == t ? s((()=>this.getRootElement())) : ":host" == t ? new Promise((e=>{
                    e(T().assertElement(this.getHostElement(), `Element "${t}" not found`))
                }
                )) : this.ampdoc.whenReady().then((()=>{
                    var i, n = null;
                    try {
                        if ("scope" == r)
                            if (void 0 !== H ? H : H = B(e))
                                var s = e.querySelector(t.replace(/^|,/g, "$&:scope "));
                            else {
                                var a = te(e, t);
                                s = void 0 === a[0] ? null : a[0]
                            }
                        else
                            s = "closest" == r ? Z(e, t) : this.getRoot().querySelector(t);
                        i = s
                    } catch (e) {
                        R(!1, `Invalid query selector ${t}`)
                    }
                    i && this.contains(i) && (n = i);
                    return T().assertElement(n, `Element "${t}" not found`)
                }
                ))
            }
            getAmpElement(e, t, r) {
                return this.getElement(e, t, r).then((e=>{
                    var r = [e];
                    for (var i = 0; i < r.length; i++)
                        R(r[i].classList.contains("i-amphtml-element"), 'Element "%s" is required to be an AMP element', t);
                    return e
                }
                ))
            }
            getElements(e, t, r) {
                return He(this.ampdoc.win)["visibility-trigger-improvements"] && d(t) ? (R(!r, "Cannot have selectionMethod %s defined with an array selector.", r),
                qi(this, t)) : this.getElement(e, t, r).then((e=>[e]))
            }
            createSelectiveListener(e, t, r, i=null) {
                return n=>{
                    if (":host" != r)
                        for (var s = this.getRootElement(), a = "*" == r, o = ":root" == r, {target: l} = n; l && this.contains(l) && ("scope" != i || o || t.contains(l)); ) {
                            if ("closest" != i || l.contains(t))
                                if (a || o && l == s || zi(l, r)) {
                                    e(l, n);
                                    break
                                }
                            l = l.parentElement
                        }
                }
            }
            whenIniLoaded() {}
            getVisibilityManager() {
                this.Ha || (this.Ha = Mi(this.getRoot()));
                return this.Ha
            }
            getScrollManager() {
                this.Da || (this.Da = new Kr(this));
                return this.Da
            }
        }
        ;
        var $i = class extends Gi {
            constructor(e) {
                super(e)
            }
            getType() {
                return "ampdoc"
            }
            getRoot() {
                return this.ampdoc.getRootNode()
            }
            getHostElement() {
                return null
            }
            signals() {
                return this.ampdoc.signals()
            }
            getElementById(e) {
                return this.ampdoc.getElementById(e)
            }
            whenIniLoaded() {
                var e = le(this.ampdoc);
                "inabox" == c(this.ampdoc.win).runtime ? e = e.getLayoutRect(this.getRootElement()) : (e = e.getSize(),
                e = Xr(0, 0, e.width, e.height));
                return Vi(this.ampdoc, this.ampdoc.win, e)
            }
        }
        ;
        var Wi = class extends Gi {
            constructor(e, t) {
                super(e);
                this.embed = t
            }
            getType() {
                return "embed"
            }
            getRoot() {
                return this.embed.win.document
            }
            getHostElement() {
                return this.embed.iframe
            }
            signals() {
                return this.embed.signals()
            }
            getElementById(e) {
                return this.embed.win.document.getElementById(e)
            }
            whenIniLoaded() {
                return this.embed.whenIniLoaded()
            }
        }
        ;
        function zi(e, t) {
            try {
                return ee(e, t)
            } catch (e) {
                return T().error("amp-analytics/analytics-root", "Bad query selector.", t, e),
                !1
            }
        }
        function Ji(e, t) {
            var r = C(t)
              , i = (t = N(t)) && t.__AMP_EMBED__;
            return r == e.ampdoc && !i && e.D ? e.D : Ki(i || r, (()=>i ? new Wi(r,i) : new $i(r)))
        }
        function Yi(e) {
            switch (e) {
            case "story":
                return vr;
            default:
                return pr
            }
        }
        function Ki(e, t) {
            var r = e.__AMP_AN_ROOT;
            r || (r = t(),
            e.__AMP_AN_ROOT = r);
            return r
        }
        var Xi = class {
            constructor(e) {
                this.ampdoc = e;
                this.D = Ji(this, e.getRootNode())
            }
            dispose() {
                this.D.dispose()
            }
            getAnalyticsRoot(e) {
                return Ji(this, e)
            }
            createAnalyticsGroup(e) {
                var t = Ji(this, e);
                return new qr(t,e)
            }
            triggerEventForTarget(e, t, r={}, i=!0) {
                r = new dr(e,t,r,i);
                e = Ji(this, e);
                t = cr(t);
                e.getTracker(t, Yi(t)).trigger(r)
            }
        }
        ;
        function Zi(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                )));
                r.push.apply(r, i)
            }
            return r
        }
        function Qi(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Zi(Object(r), !0).forEach((function(t) {
                    var i = r[t];
                    t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zi(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function en(e, t) {
            var r = {}
              , i = {
                enabled: nn(e) && sn(e)
            }
              , n = Object.keys(t).filter((e=>{
                var r = t[e]
                  , n = m(r);
                n || (i[e] = r);
                return n
            }
            ))
              , s = e.qa.isProxyOrigin(e.m.win.location);
            n.forEach((e=>{
                var n = Qi(Qi({}, i), t[e]);
                !0 !== n.enabled || !s && !1 !== n.proxyOnly || (n.ids ? r[e] = n : T().error("amp-analytics/linker-manager", '"ids" is a required field for use of "linkers".'))
            }
            ));
            return r
        }
        function tn(e, t) {
            var r = e.h;
            for (var i in r)
                if (e.eb[i]) {
                    var n = e
                      , s = i;
                    if (an(n, t, r[i].destinationDomains)) {
                        var a = Tt(n.eb[s]);
                        if (a) {
                            n = {};
                            n[s] = a;
                            s = n;
                            n = De(t);
                            n = l(n.search);
                            a = G({});
                            var o = Object.keys(s);
                            for (var h = 0; h < o.length; h++)
                                $(n, o[h]) || (a[o[h]] = s[o[h]]);
                            t = je(t, ke(a))
                        }
                    }
                }
            return t
        }
        function rn(e) {
            e.Ta || e.Nc.then((t=>{
                e.Ta = t.beforeSubmit(e.Rc.bind(e))
            }
            ))
        }
        function nn(e) {
            return "googleanalytics" !== e.J || "googleanalytics" !== e.m.getMetaByName("amp-google-client-id-api") ? !1 : e.m.registerSingleton(2)
        }
        function sn(e) {
            e = S(e.m.win, "platform");
            return e.isSafari() && 12 <= e.getMajorVersion()
        }
        function an(e, t, r) {
            var {hostname: i} = e.qa.parse(t);
            if (r && !Array.isArray(r))
                return !1;
            if (r)
                return on(r, i);
            if (e.m.win.location.hostname === i)
                return !1;
            var {sourceUrl: n, canonicalUrl: s} = P(e.m, "documentInfo").get()
              , a = e.qa.parse(s).hostname;
            t = hn(a) === hn(i);
            if (e.Ua)
                return on([e.Ua, "*" + e.Ua], i) || t;
            e = e.qa.parse(n).hostname;
            return hn(e) === hn(i) || t
        }
        function on(e, t) {
            for (var r = 0; r < e.length; r++) {
                var i, n = e[r];
                !(i = n === t) && (i = -1 !== n.indexOf("*")) && (i = t,
                n = n.replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*"),
                i = new RegExp("^" + n + "$").test(i));
                if (i)
                    return !0
            }
            return !1
        }
        var ln = class {
            constructor(e, t, r, i) {
                this.m = e;
                this.h = t.linkers;
                this.nd = t.vars || {};
                this.J = r;
                this.j = i;
                this.eb = {};
                this.qa = _(this.j, "url");
                this.Nc = k(x(e), "form-submit-service");
                this.Ta = null;
                this.C = Bt(this.m);
                this.Ua = null
            }
            init() {
                if (!m(this.h))
                    return i();
                this.Ua = et(this.m.win);
                this.h = en(this, this.h);
                var e = Object.keys(this.h).map((e=>{
                    var t = this.h[e].ids
                      , r = Object.keys(t)
                      , i = r.map((e=>{
                        var r = new Nt(this.nd,void 0,!0);
                        return this.Qa(t[e], r)
                    }
                    ));
                    return Promise.all(i).then((t=>{
                        var i = {};
                        t.forEach(((e,t)=>{
                            e && (i[r[t]] = e)
                        }
                        ));
                        return this.eb[e] = i
                    }
                    ))
                }
                ));
                if (e.length) {
                    var t = P(this.m, "navigation");
                    t.registerAnchorMutator(((e,t)=>{
                        e.href && "click" === t.type && (e.href = tn(this, e.href))
                    }
                    ), 2);
                    t.registerNavigateToMutator((e=>tn(this, e)), 2)
                }
                rn(this);
                return Promise.all(e)
            }
            dispose() {
                this.Ta && this.Ta()
            }
            Qa(e, t) {
                var r = this.C.getMacros(this.j);
                return this.C.expandTemplate(e, t, this.j).then((e=>ae(this.j).expandUrlAsync(e, r)))
            }
            Rc(e) {
                var t = e.form
                  , r = e.actionXhrMutator;
                for (var i in this.h) {
                    e = this.h[i].destinationDomains;
                    var n = t.getAttribute("action-xhr") || t.getAttribute("action");
                    if (an(this, n, e)) {
                        var s = t;
                        e = r;
                        n = i;
                        var a = this.eb[n];
                        if (a) {
                            a = Tt(a);
                            var o = s.getAttribute("action-xhr");
                            o ? (s = o,
                            n = `${encodeURIComponent(n)}=${encodeURIComponent(a)}`,
                            n = je(s, n, void 0),
                            e(n)) : (e = s,
                            n = G({
                                type: "hidden",
                                name: n,
                                value: a
                            }),
                            n = K(e.ownerDocument, "input", n),
                            e.appendChild(n))
                        }
                    }
                }
            }
        }
        ;
        function hn(e) {
            return e.replace(/^(?:www\.|m\.|amp\.)+/, "")
        }
        function cn(e) {
            e.isReady() && e.queueSize() && (e.cd.send("iframe-transport-events", {
                events: e.Aa
            }),
            e.Aa = [])
        }
        var un = class {
            constructor(e, t) {
                this.Oc = t;
                this.hc = !1;
                this.Aa = [];
                this.cd = new vt(this.Oc,"send-iframe-transport-events",!0,(()=>{
                    this.setIsReady()
                }
                ))
            }
            isReady() {
                return this.hc
            }
            setIsReady() {
                this.hc = !0;
                cn(this)
            }
            queueSize() {
                return this.Aa.length
            }
            enqueue(e) {
                this.Aa.push(e);
                100 <= this.queueSize() && this.Aa.shift();
                cn(this)
            }
        }
        ;
        function dn(e) {
            return !!e.PerformanceObserver && !!e.TaskAttributionTiming && "containerName"in e.TaskAttributionTiming.prototype
        }
        function mn(e) {
            dn(e.ga) && (gn[e.J] = new e.ga.PerformanceObserver((t=>{
                t && t.getEntries().forEach((t=>{
                    t && "longtask" == t.entryType && "cross-origin-descendant" == t.name && t.attribution && t.attribution.forEach((t=>{
                        e.Yb == t.containerSrc && 0 == ++e.Zc % 5 && T().error("amp-analytics/iframe-transport", `Long Task: Vendor: "${e.J}"`)
                    }
                    ))
                }
                ))
            }
            )),
            gn[e.J].observe({
                entryTypes: ["longtask"]
            }))
        }
        var pn = class {
            constructor(e, t, r, i) {
                this.ga = e;
                this.J = t;
                this.Wb = i;
                this.Yb = r.iframe;
                this.Zc = 0;
                this.processCrossDomainIframe()
            }
            detach() {
                var e = this.ga.document
                  , t = this.J;
                var r = fn[t];
                --r.usageCount || (e.body.removeChild(r.frame),
                delete fn[t],
                gn[t] && (gn[t].disconnect(),
                gn[t] = null))
            }
            processCrossDomainIframe() {
                var e;
                $(fn, this.J) ? (e = fn[this.J],
                ++e.usageCount) : (e = this.createCrossDomainIframe(),
                this.ga.document.body.appendChild(e.frame),
                mn(this))
            }
            createCrossDomainIframe() {
                var e = String(++vn);
                var t = JSON.stringify({
                    scriptSrc: y.thirdParty + "/2010270040000/iframe-transport-client-v0.js",
                    sentinel: e,
                    type: this.J
                })
                  , r = K(this.ga.document, "iframe", {
                    sandbox: "allow-scripts allow-same-origin",
                    name: t,
                    "data-amp-3p-sentinel": e
                });
                r.sentinel = e;
                lt(r);
                r.src = this.Yb;
                e = {
                    frame: r,
                    usageCount: 1,
                    queue: new un(this.ga,r)
                };
                return fn[this.J] = e
            }
            sendRequest(e) {
                fn[this.J].queue.enqueue({
                    creativeId: this.Wb,
                    message: e
                })
            }
            getCreativeId() {
                return this.Wb
            }
            getType() {
                return this.J
            }
        }
        ;
        var fn = {}
          , vn = 0
          , gn = {};
        function bn(e, t, r) {
            r && "no-referrer" !== r && T().error("pixel", "Unsupported referrerPolicy: %s", r);
            return "no-referrer" === r ? yn(e, t) : En(e, t)
        }
        function yn(e, t) {
            if ("referrerPolicy"in Image.prototype)
                return En(e, t, !0);
            var r = K(e.document, "iframe", G({
                src: "about:blank",
                style: "display:none"
            }));
            r.onload = ()=>{
                En(r.contentWindow, t)
            }
            ;
            e.document.body.appendChild(r);
            return r
        }
        function En(e, t, r=!1) {
            e = new e.Image;
            r && (e.referrerPolicy = "no-referrer");
            e.src = t;
            return e
        }
        function wn(e, t) {
            try {
                var r = N(e, t).parentElement;
                if ("AMP-AD" == r.nodeName)
                    return String(r.getResourceId())
            } catch (e) {}
            return null
        }
        function An(e, t) {
            e = e.navigator.sendBeacon ? e.navigator.sendBeacon.bind(e.navigator) : void 0;
            return e ? e(t.url, t.payload || "") : !1
        }
        function Tn(e, t) {
            e = e.XMLHttpRequest;
            if (!e)
                return !1;
            var r = new e;
            if (!("withCredentials"in r))
                return !1;
            r.open("POST", t.url, !0);
            r.withCredentials = !0;
            r.setRequestHeader("Content-Type", "text/plain");
            r.onreadystatechange = ()=>{}
            ;
            r.send(t.payload || "");
            return !0
        }
        function On(e, t, r) {
            e && (e = bn(e, t.url, r),
            pe(e).then((()=>{}
            )).catch((()=>{}
            )))
        }
        var Rn = class {
            constructor(e, t={}) {
                this.l = e;
                this.M = t;
                this.nc = this.M.referrerPolicy;
                "no-referrer" === this.nc && (this.M.beacon = !1,
                this.M.xhrpost = !1);
                this.vc = !!this.M.useBody;
                this.Z = null;
                this.Za = "inabox" == c(e).runtime
            }
            sendRequest(e, t, r) {
                if (e && 0 !== t.length) {
                    var i = ei["default"]
                      , n = Sn((function(n) {
                        n = r ? i.generateBatchRequest(e, t, n) : i.generateRequest(e, t[0], n);
                        Le(n.url, "amp-analytics request");
                        var s = n.url
                          , a = De(s);
                        a = l(a.search);
                        R(!("__amp_source_origin"in a), "Source origin is not allowed in %s", s);
                        return n
                    }
                    ));
                    this.M.iframe ? this.Z ? this.Z.sendRequest(n(!1).url) : O().error("amp-analytics/transport", "iframe transport was inadvertently deleted") : this.M.beacon && An(this.l, n(this.vc)) || this.M.xhrpost && Tn(this.l, n(this.vc)) || this.M.image && On(this.l, n(!1), this.nc)
                }
            }
            maybeInitIframeTransport(e) {
                if (this.M.iframe && !this.Z) {
                    var t = I(e.ownerDocument.defaultView)
                      , r = e.getAttribute("type")
                      , i = this.Za ? "1" : T().assertString(wn(e, t), "No friendly amp-ad ancestor element was found for amp-analytics tag with iframe transport.");
                    this.Z = new pn(t,r,this.M,i)
                }
            }
            deleteIframeTransport() {
                this.Z && (this.Z.detach(),
                this.Z = null)
            }
            sendRequestUsingIframe(e, t) {
                if (e = ti(e, [t])) {
                    Le(e, "amp-analytics request");
                    R(De(e).origin != De(this.l.location.href).origin, "Origin of iframe request must not be equal to the document origin. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.");
                    var r = this.l.document.createElement("iframe");
                    lt(r);
                    r.onload = r.onerror = ()=>{
                        S(this.l, "timer").delay((()=>{
                            r.parentElement && r.parentElement.removeChild(r)
                        }
                        ), 5e3)
                    }
                    ;
                    r.setAttribute("amp-analytics", "");
                    r.setAttribute("sandbox", "allow-scripts allow-same-origin");
                    r.src = e;
                    this.l.document.body.appendChild(r)
                } else
                    T().error("amp-analytics/transport", "Request not sent. Contents empty.")
            }
        }
        ;
        function Sn(e) {
            var t = {};
            return r=>{
                var i = String(r);
                void 0 === t[i] && (t[i] = e(r));
                return t[i]
            }
        }
        var Pn = ["visible", "hidden", "ini-load", "render-start"];
        function _n(e) {
            if (e.N)
                return e.N;
            e.N = e.getAmpDoc().whenFirstVisible().then((()=>S(e.win, "timer").promise(1))).then((()=>e.Ub)).then((()=>S(e.win, "ampdoc"))).then((t=>t.getAmpDoc(e.element))).then((e=>Promise.all([k(x(e), "amp-analytics-instrumentation"), k(x(e), "amp-analytics-variables")]))).then((t=>{
                e.ec = t[0];
                e.C = t[1];
                var r = new n
                  , i = ()=>{
                    var t = new Zt(e.element).loadConfig();
                    r.resolve(t)
                }
                ;
                Gr(e.win) ? xr(e.element, i, 20) : i();
                return r.promise
            }
            )).then((t=>{
                e.h = t;
                return new Jr(e.win,e.element,e.h).write()
            }
            )).then((()=>{
                e.W = new Rn(e.win,e.h.transport || {})
            }
            )).then(e.gd.bind(e)).then(e.Vc.bind(e));
            e.N.then((()=>{
                e.collapse()
            }
            ));
            return e.N
        }
        function Mn(e) {
            if (e.Za)
                return !0;
            null == e.xb && (e.xb = gt(e.element));
            return e.xb
        }
        function In(e) {
            var t = e.h.optoutElementId;
            if (t && e.win.document.getElementById(t))
                return !0;
            if (!e.h.optout)
                return !1;
            var r = e.h.optout.split(".");
            e = e.win;
            for (var i = 0; i < r.length; i++) {
                if (!e)
                    return !1;
                e = e[r[i]]
            }
            return e()
        }
        function Nn(e) {
            if (!e.h.requests) {
                if (!Mn(e)) {
                    var t = e.o();
                    e.user().warn(t, "No request strings defined. Analytics data will not be sent from this page.")
                }
            } else if (e.h.requests) {
                for (var r in e.h.requests)
                    $(e.h.requests, r) && !e.h.requests[r].baseUrl && (e.user().error("amp-analytics", "request must have a baseUrl"),
                    delete e.h.requests[r]);
                for (var i in e.h.requests)
                    e.h.requests[i].baseUrl = J(e.h.requests[i].baseUrl, (t=>{
                        var r = e.h.requests[t];
                        return r && r.baseUrl || "${" + t + "}"
                    }
                    ));
                r = {};
                for (t in e.h.requests)
                    $(e.h.requests, t) && (r[t] = new vi(e.element,e.h.requests[t],S(e.win, "preconnect"),e.W,e.T));
                e.Ca = r
            }
        }
        function Cn(e, t, r) {
            if (t && r) {
                var i = 0;
                for (var n in r) {
                    if (16 < ++i) {
                        t = e.o();
                        e.user().error(t, "More than 16 extraUrlParamsReplaceMap rules aren't allowed; Skipping the rest");
                        break
                    }
                    for (var s in t) {
                        var a = s.replace(n, r[n]);
                        if (s != a) {
                            var o = t[s];
                            delete t[s];
                            t[a] = o
                        }
                    }
                }
            }
        }
        function xn(e, t, r, i, n) {
            var s = {};
            Qt(e.h.vars, s);
            Qt(r.vars, s);
            Qt(t.vars, s);
            return new Nt(s,i,n)
        }
        function Dn(e, t) {
            var r = t.sampleSpec
              , i = e.o();
            if (!r)
                return Promise.resolve(!0);
            var s = r.sampleOn;
            if (!s)
                return e.user().error(i, "Invalid sampleOn value."),
                Promise.resolve(!0);
            var a = parseFloat(r.threshold);
            if (0 <= a && 100 >= a) {
                var o = new n
                  , l = ()=>{
                    var r = xn(e, G({}), t)
                      , i = e.Qa(s, r).then((t=>e.Lc.uniform(t))).then((e=>100 * e < a));
                    o.resolve(i)
                }
                ;
                Gr(e.win) ? xr(e.element, l, 10) : l();
                return o.promise
            }
            T().error(i, "Invalid threshold for sampling.");
            return Promise.resolve(!0)
        }
        function jn(e, t) {
            if (!e.ha)
                return i();
            try {
                return e.ha.addTrigger(t, e.Qc.bind(e, t))
            } catch (r) {
                return e = e.o(),
                w(e, 'Failed to process trigger "' + t.on + '"', r),
                i()
            }
        }
        function kn(e, t, r, i) {
            e.element.ownerDocument.defaultView || e.o();
            var n = e.Ca[t]
              , s = Mn(e) && r.parentPostMessage;
            if (void 0 != t && !n && (t = e.o(),
            e.user().error(t, "Ignoring request for event. Request string not found: ", r.request),
            !s))
                return;
            Ln(e, r, i).then((t=>{
                var s = e.element.ownerDocument && e.element.ownerDocument.defaultView;
                t && s && (n && (e.h.vars.requestCount++,
                t = xn(e, i, r),
                n.send(e.h.extraUrlParams, r, t)),
                Un(e, r, i))
            }
            ))
        }
        function Ln(e, t, r) {
            r = xn(e, r, t);
            var i = Vn(e, e.h.enabled, r)
              , n = Vn(e, t.enabled, r);
            return Promise.all([i, n]).then((e=>e[0] && e[1]))
        }
        function Un(e, t, r) {
            var i = t.parentPostMessage;
            i && Mn(e) && (r = xn(e, r, t),
            gi(e.getAmpDoc(), i, e.h.extraUrlParams, t, r, e.element).then((t=>{
                var r = e.win;
                r.parent && r.parent != r && e.win.parent.postMessage(t, "*")
            }
            )))
        }
        function Vn(e, t, r) {
            return void 0 === t ? Promise.resolve(!0) : "boolean" === typeof t ? Promise.resolve(t) : e.Qa(t, r).then((e=>$t(e)))
        }
        var Fn = class extends e.BaseElement {
            constructor(e) {
                super(e);
                this.Ub = i();
                this.rb = null;
                this.T = !1;
                this.Ca = {};
                this.h = {};
                this.C = this.ha = this.ec = null;
                this.Lc = S(this.win, "crypto");
                this.W = this.N = null;
                this.Za = "inabox" == c(this.win).runtime;
                this.xb = this.wa = null
            }
            getLayoutPriority() {
                return this.Za ? 0 : 1
            }
            isAlwaysFixed() {
                return !gt(this.element)
            }
            isLayoutSupported() {
                return !0
            }
            buildCallback() {
                this.T = this.element.hasAttribute("sandbox");
                this.element.setAttribute("aria-hidden", "true");
                this.rb = this.element.getAttribute("data-consent-notification-id");
                null != this.rb && (this.Ub = ie(this.element).then((e=>e.get(this.rb))));
                "immediate" == this.element.getAttribute("trigger") && _n(this)
            }
            layoutCallback() {
                return _n(this)
            }
            detachedCallback() {
                this.ha && (this.ha.dispose(),
                this.ha = null);
                this.wa && (this.wa.dispose(),
                this.wa = null);
                for (var e in this.Ca)
                    this.Ca[e].dispose(),
                    delete this.Ca[e]
            }
            resumeCallback() {
                this.N && this.N.then((()=>{
                    this.W.maybeInitIframeTransport(this.element)
                }
                ))
            }
            unlayoutCallback() {
                if (this.getAmpDoc().isVisible())
                    return !1;
                this.N && this.N.then((()=>{
                    this.W.deleteIframeTransport()
                }
                ));
                return super.unlayoutCallback()
            }
            gd() {
                if (In(this))
                    return this.o(),
                    i();
                Nn(this);
                if (!this.h.triggers) {
                    var e = this.o();
                    this.user().warn(e, "No triggers were found in the config. No analytics data will be sent.");
                    return i()
                }
                Cn(this, this.h.extraUrlParams, this.h.extraUrlParamsReplaceMap);
                this.ha = this.ec.createAnalyticsGroup(this.element);
                this.W.maybeInitIframeTransport(this.element);
                e = [];
                for (var t in this.h.triggers)
                    if ($(this.h.triggers, t)) {
                        let i = this.h.triggers[t]
                          , a = xn(this, G({}), i, void 0, !0)
                          , o = this.o();
                        if (!i) {
                            this.user().error(o, "Trigger should be an object: ", t);
                            continue
                        }
                        var r = i.request || i.parentPostMessage && Mn(this);
                        if (i.on && r) {
                            if (this.T) {
                                var n = i.on;
                                if (f(n) && !Pn.includes(n)) {
                                    this.user().error(o, n + " is not supported for amp-analytics in scope");
                                    continue
                                }
                            }
                            Cn(this, i.extraUrlParams, this.h.extraUrlParamsReplaceMap);
                            e.push(Dn(this, i).then((e=>{
                                if (e)
                                    if (this.T) {
                                        if (this.element.parentElement)
                                            return i.selector = this.element.parentElement.tagName,
                                            i.selectionMethod = "closest",
                                            jn(this, i)
                                    } else
                                        return i.selector && !d(i.selector) ? this.C.expandTemplate(i.selector, a, this.element).then((e=>{
                                            i.selector = e;
                                            return jn(this, i)
                                        }
                                        )) : jn(this, i)
                            }
                            )))
                        } else {
                            var s = Mn(this) ? '/"parentPostMessage"' : "";
                            this.user().error(o, '"on" and "request"' + s + " attributes are required for data to be collected.")
                        }
                    }
                return Promise.all(e)
            }
            preload(e, t) {
                S(this.win, "preconnect").preload(this.getAmpDoc(), e, t)
            }
            Vc() {
                var e = this.element.getAttribute("type");
                this.wa = new ln(this.getAmpDoc(),this.h,e,this.element);
                var t = ()=>{
                    this.wa.init()
                }
                ;
                Gr(this.win) ? xr(this.element, t, 10) : t()
            }
            Qc(e, t) {
                var r = d(e.request) ? e.request : [e.request];
                for (var i = 0; i < r.length; i++)
                    kn(this, r[i], e, t)
            }
            Qa(e, t) {
                return this.C.expandTemplate(e, t, this.element).then((e=>ae(this.element).expandUrlAsync(e, this.C.getMacros(this.element))))
            }
            o() {
                return "AmpAnalytics " + (this.element.getAttribute("id") || "<unknown id>")
            }
        }
        ;
        (e=>{
            e.registerServiceForDoc("amp-analytics-instrumentation", Xi);
            e.registerServiceForDoc("activity", Ae);
            var t = e.win
              , r = St;
            t = I(t);
            j(t, t, "amp-analytics-linker-reader", r);
            e.registerServiceForDoc("amp-analytics-variables", Vt);
            e.registerElement("amp-analytics", Fn)
        }
        )(self.AMP)
    }
});
