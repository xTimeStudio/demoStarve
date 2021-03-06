(self.AMP = self.AMP || []).push({
    n: "amp-ad-exit",
    v: "2010270040000",
    f: function(t, e) {
        function r(t, e="") {
            try {
                return decodeURIComponent(t)
            } catch (t) {
                return e
            }
        }
        var i = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
        function n(t) {
            var e = Object.create(null);
            if (!t)
                return e;
            var n;
            for (; n = i.exec(t); ) {
                var a = r(n[1], n[1])
                  , o = n[2] ? r(n[2].replace(/\+/g, " "), n[2]) : "";
                e[a] = o
            }
            return e
        }
        var a = "";
        function o() {
            var t = self;
            if (t.__AMP_MODE)
                var e = t.__AMP_MODE;
            else {
                e = n(t.location.originalHash || t.location.hash);
                var r = n(t.location.search);
                a || (a = t.AMP_CONFIG && t.AMP_CONFIG.v ? t.AMP_CONFIG.v : "012010270040000");
                e = {
                    localDev: !1,
                    development: !!(0 <= ["1", "actions", "amp", "amp4ads", "amp4email"].indexOf(e.development) || t.AMP_DEV_MODE),
                    examiner: "2" == e.development,
                    esm: !0,
                    geoOverride: e["amp-geo"],
                    minified: !0,
                    lite: void 0 != r.amp_lite,
                    test: !1,
                    log: e.log,
                    version: "2010270040000",
                    rtvVersion: a
                };
                e = t.__AMP_MODE = e
            }
            return e
        }
        var s = Object.prototype.toString;
        var l = self.AMP_CONFIG || {}
          , c = ("string" == typeof l.cdnProxyRegex ? new RegExp(l.cdnProxyRegex) : l.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
        function h(t) {
            if (self.document && self.document.head && (!self.location || !c.test(self.location.origin))) {
                var e = self.document.head.querySelector(`meta[name="${t}"]`);
                e && e.getAttribute("content")
            }
        }
        l.cdnUrl || h("runtime-host");
        l.geoApiUrl || h("amp-geo-api");
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var f = self.__AMP_LOG;
        function u() {
            if (!f.user)
                throw Error("failed to call initLogConstructor");
            return f.user
        }
        function p() {
            if (f.dev)
                return f.dev;
            throw Error("failed to call initLogConstructor")
        }
        function v(t, e, r, i) {
            u().assert(t, e, r, i, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
        }
        var m = class {
            constructor(t, e) {
                this.name = t;
                this.type = e
            }
            filter() {}
            onLayoutMeasure() {}
        }
        ;
        var d = class {
            constructor() {
                var t, e;
                this.promise = new Promise(((r,i)=>{
                    t = r;
                    e = i
                }
                ));
                this.resolve = t;
                this.reject = e
            }
        }
        ;
        function g(t) {
            t = y(t);
            t = _(t);
            return P(t, "url-replace") ? A(t, "url-replace") : null
        }
        function b(t) {
            return t.__AMP_TOP || (t.__AMP_TOP = t)
        }
        function y(t) {
            if (t.nodeType) {
                var e = (t.ownerDocument || t).defaultView;
                e = b(e);
                t = A(e, "ampdoc").getAmpDoc(t)
            }
            return t
        }
        function _(t) {
            t = y(t);
            return t.isSingleDoc() ? t.win : t
        }
        function A(t, e) {
            P(t, e);
            t = E(t)[e];
            t.obj || (t.obj = new t.ctor(t.context),
            t.ctor = null,
            t.context = null,
            t.resolve && t.resolve(t.obj));
            return t.obj
        }
        function O(t) {
            var e;
            (e = E(t)["host-exit"]) ? e.promise ? e = e.promise : (A(t, "host-exit"),
            e = e.promise = Promise.resolve(e.obj)) : e = null;
            var r = e;
            if (r)
                return r;
            t = E(t);
            t["host-exit"] = S();
            return t["host-exit"].promise
        }
        function E(t) {
            var e = t.__AMP_SERVICES;
            e || (e = t.__AMP_SERVICES = {});
            return e
        }
        function P(t, e) {
            t = t.__AMP_SERVICES && t.__AMP_SERVICES[e];
            return !(!t || !t.ctor && !t.obj)
        }
        function S() {
            var t = new d
              , e = t.promise
              , r = t.resolve
              , i = t.reject;
            e.catch((()=>{}
            ));
            return {
                obj: null,
                promise: e,
                resolve: r,
                reject: i,
                context: null,
                ctor: null
            }
        }
        /*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        function w(t, e, r) {
            var i;
            try {
                i = t.open(e, r, void 0)
            } catch (t) {
                p().error("DOM", "Failed to open url on target: ", r, t)
            }
            if (!(r = i || "_top" == r)) {
                var n;
                "number" !== typeof n && (n = 0);
                r = 0 < n + 8 ? !1 : -1 !== "".indexOf("noopener", n)
            }
            r || t.open(e, "_top")
        }
        function M(t) {
            return "SCRIPT" == t.tagName && t.hasAttribute("type") && "APPLICATION/JSON" == t.getAttribute("type").toUpperCase()
        }
        var x;
        function j(t, e) {
            var r, i = t, n = e;
            r = t=>{
                try {
                    return n(t)
                } catch (t) {
                    throw self.__AMP_REPORT_ERROR(t),
                    t
                }
            }
            ;
            var a = I();
            i.addEventListener("message", r, a ? void 0 : !1);
            return ()=>{
                i && i.removeEventListener("message", r, a ? void 0 : !1);
                r = i = n = null
            }
        }
        function I() {
            if (void 0 !== x)
                return x;
            x = !1;
            try {
                var t = {
                    get capture() {
                        x = !0
                    }
                };
                self.addEventListener("test-options", null, t);
                self.removeEventListener("test-options", null, t)
            } catch (t) {}
            return x
        }
        function C(t, e) {
            return j(t, e)
        }
        function T(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                )));
                r.push.apply(r, i)
            }
            return r
        }
        function D(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? T(Object(r), !0).forEach((function(e) {
                    var i = r[e];
                    e in t ? Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        var R = {
            bg: "https://tpc.googlesyndication.com/b4a/b4a-runner.html",
            moat: "https://z.moatads.com/ampanalytics093284/iframe.html"
        };
        D(D({}, R), {}, {
            bg: "https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"
        });
        function L(t) {
            v("object" == typeof t);
            if (t.filters) {
                var e = t.filters;
                var r = ["clickDelay", "clickLocation", "inactiveElement"];
                for (var i in e)
                    v("object" == typeof e[i], "Filter specification '%s' is malformed", i),
                    v(-1 != r.indexOf(e[i].type), "Supported filters: " + r.join(", "))
            } else
                t.filters = {};
            if (t.transport) {
                e = t.transport;
                for (var n in e)
                    v("beacon" == n || "image" == n, `Unknown transport option: '${n}'`),
                    v("boolean" == typeof e[n])
            } else
                t.transport = {};
            n = t.targets;
            v("object" == typeof n, "'targets' must be an object");
            for (var a in n)
                k(a, n[a], t);
            return t
        }
        function k(t, e, r) {
            v("string" == typeof e.finalUrl, "finalUrl of target '%s' must be a string", t);
            e.filters && e.filters.forEach((t=>{
                v(r.filters[t], "filter '%s' not defined", t)
            }
            ));
            if (e.vars) {
                t = /^_[a-zA-Z0-9_-]+$/;
                for (var i in e.vars)
                    v(t.test(i), "'%s' must match the pattern '%s'", i, t)
            }
        }
        function N(t) {
            return u().assertString(R[t], `Unknown or invalid vendor ${t}, note that vendor must use transport: iframe`)
        }
        var U = class extends m {
            constructor(t, e, r) {
                super(t, e.type);
                v("clickDelay" == e.type && "number" == typeof e.delay && 0 < e.delay, "Invalid ClickDelay spec");
                this.spec = e;
                this.intervalStart = Date.now();
                e.startTimingEvent && r.performance && r.performance.timing && void 0 != r.performance.timing[e.startTimingEvent] && (this.intervalStart = r.performance.timing[e.startTimingEvent])
            }
            filter() {
                return Date.now() - this.intervalStart >= this.spec.delay
            }
        }
        ;
        function G(t) {
            return {
                type: "clickDelay",
                delay: 1e3,
                startTimingEvent: t
            }
        }
        var F = class extends m {
            constructor(t, e, r) {
                super(t, e.type);
                v("clickLocation" == e.type && ("undefined" === typeof e.left || "number" === typeof e.left) && ("undefined" === typeof e.right || "number" === typeof e.right) && ("undefined" === typeof e.top || "number" === typeof e.top) && ("undefined" === typeof e.bottom || "number" === typeof e.bottom) && ("undefined" === typeof e.relativeTo || "string" === typeof e.relativeTo), "Invaid ClickLocation spec");
                this.M = e.left || 0;
                this.N = e.right || 0;
                this.P = e.top || 0;
                this.K = e.bottom || 0;
                this.D = e.relativeTo;
                this.H = r;
                this.h = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
            filter(t) {
                return t.clientX >= this.h.left && t.clientX <= this.h.right && t.clientY >= this.h.top && t.clientY <= this.h.bottom ? !0 : !1
            }
            onLayoutMeasure() {
                this.H.getVsync().measure((()=>{
                    var t = this.H.win;
                    if (this.D) {
                        var e = t.document.querySelector(this.D);
                        v(e, `relativeTo element ${this.D} not found.`);
                        var r = e.getBoundingClientRect();
                        this.h.left = r.left;
                        this.h.top = r.top;
                        this.h.bottom = r.bottom;
                        this.h.right = r.right
                    } else
                        this.h.left = 0,
                        this.h.top = 0,
                        this.h.bottom = t.innerHeight,
                        this.h.right = t.innerWidth;
                    this.h.left += this.M;
                    this.h.top += this.P;
                    this.h.right -= this.N;
                    this.h.bottom -= this.K
                }
                ))
            }
        }
        ;
        var V = class extends m {
            constructor(t, e) {
                super(t, e.type);
                v("inactiveElement" == e.type && "string" == typeof e.selector, "Invalid InactiveElementspec");
                this.O = e.selector
            }
            filter(t) {
                t = t.target;
                var e = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector;
                t = e ? e.call(t, this.O) : !1;
                return !t
            }
        }
        ;
        function $(t, e, r) {
            switch (e.type) {
            case "clickDelay":
                return new U(t,e,r.win);
            case "clickLocation":
                return new F(t,e,r);
            case "inactiveElement":
                return new V(t,e)
            }
        }
        function B(t, e) {
            try {
                t: {
                    var r = (t.ownerDocument || t).defaultView
                      , i = e || b(r);
                    if (r && r != i && b(r) == i)
                        try {
                            var n = r.frameElement;
                            break t
                        } catch (t) {}
                    n = null
                }
                var a = n.parentElement;
                if ("AMP-AD" == a.nodeName)
                    return String(a.getResourceId())
            } catch (t) {}
            return null
        }
        var H = class {
            constructor(t) {
                this.L = t;
                this.B = this.F = 0;
                this.l = Object.create(null)
            }
            has(t) {
                return !!this.l[t]
            }
            get(t) {
                var e = this.l[t];
                if (e)
                    return e.access = ++this.B,
                    e.payload
            }
            put(t, e) {
                this.has(t) || this.F++;
                this.l[t] = {
                    payload: e,
                    access: this.B
                };
                if (!(this.F <= this.L)) {
                    t = this.l;
                    var r = this.B + 1;
                    for (var i in t) {
                        var {access: n} = t[i];
                        if (n < r) {
                            r = n;
                            var a = i
                        }
                    }
                    void 0 !== a && (delete t[a],
                    this.F--)
                }
            }
        }
        ;
        (function(t) {
            return t || {}
        }
        )({
            c: !0,
            v: !0,
            a: !0,
            ad: !0
        });
        var J, K;
        function X(t) {
            J || (J = self.document.createElement("a"),
            K = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new H(100)));
            var e = K
              , r = J;
            if (e && e.has(t))
                t = e.get(t);
            else {
                r.href = t;
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
                e && e.put(t, i);
                t = i
            }
            return t
        }
        function Y(t, e) {
            return t.every((t=>t.filter(e)))
        }
        function z(t, e, r, i) {
            var n = {
                CLICK_X: ()=>r.clientX,
                CLICK_Y: ()=>r.clientY
            }
              , a = g(t.element)
              , o = {
                RANDOM: !0,
                CLICK_X: !0,
                CLICK_Y: !0
            };
            if (i.vars)
                for (let r in i.vars) {
                    if ("_" != r[0])
                        continue;
                    let s = i.vars[r];
                    s && (n[r] = ()=>{
                        if (s.iframeTransportSignal) {
                            var i = a.expandStringSync(s.iframeTransportSignal, {
                                IFRAME_TRANSPORT_SIGNAL: (e,r)=>{
                                    if (!e || !r)
                                        return "";
                                    var i = t.J[e];
                                    if (i && r in i)
                                        return i[r]
                                }
                            });
                            if (s.iframeTransportSignal == `IFRAME_TRANSPORT_SIGNAL${i}`)
                                p().error("amp-ad-exit", "Invalid IFRAME_TRANSPORT_SIGNAL format:" + i + " (perhaps there is a space after a comma?)");
                            else if ("" != i)
                                return i
                        }
                        return r in e ? e[r] : s.defaultValue
                    }
                    ,
                    o[r] = !0)
                }
            return t=>a.expandUrlSync(t, n, o)
        }
        function q(t) {
            "inabox" != o().runtime && (t.j = t.j || B(t.element, b(t.win)),
            t.j && (t.w = C(t.getAmpDoc().win, (e=>{
                if (t.C[e.origin]) {
                    var r = e.data;
                    if ("string" == typeof r && 0 == r.indexOf("amp-") && -1 != r.indexOf("{")) {
                        var i = r.indexOf("{");
                        try {
                            var n = JSON.parse(r.substr(i))
                        } catch (t) {
                            p().error("MESSAGING", "Failed to parse message: " + r, t),
                            n = null
                        }
                    } else
                        n = null;
                    n && "iframe-transport-response" == n.type && (r = n,
                    e = e.origin,
                    v(r.message, "Received empty response from 3p analytics frame"),
                    v(r.creativeId, "Received malformed message from 3p analytics frame: creativeId missing"),
                    v(r.vendor, "Received malformed message from 3p analytics frame: vendor missing"),
                    i = X(N(r.vendor)),
                    v(i && i.origin == e, `Invalid origin for vendor ${r.vendor}: ${e}`),
                    n.creativeId == t.j && (t.J[n.vendor] = n.message))
                }
            }
            ))))
        }
        var Z = class extends t.BaseElement {
            constructor(t) {
                super(t);
                this.G = {};
                this.I = {};
                this.m = [];
                this.o = {
                    beacon: !0,
                    image: !0
                };
                this.A = {};
                this.registerAction("exit", this.exit.bind(this));
                this.registerAction("setVariable", this.setVariable.bind(this), 1);
                this.J = {};
                this.j = this.w = null;
                this.C = {}
            }
            exit(t) {
                var e = t.args;
                var {event: r} = t;
                v("variable"in e != "target"in e, "One and only one of 'target' and 'variable' must be specified");
                var i;
                "variable"in e ? ((i = this.I[e.variable]) || (i = e["default"]),
                v(i, `Variable target not found, variable:'${e.variable}', default:'${e["default"]}'`),
                delete e["default"]) : i = e.target;
                var n = this.G[i];
                v(n, `Exit target not found: '${i}'`);
                v(r, "Unexpected null event");
                r.preventDefault();
                if (Y(this.m, r) && Y(n.filters, r)) {
                    var a = z(this, e, r, n);
                    n.trackingUrls && n.trackingUrls.map(a).forEach((t=>{
                        this.o.beacon && this.win.navigator.sendBeacon && this.win.navigator.sendBeacon(t, "") || !this.o.image || (this.win.document.createElement("img").src = t)
                    }
                    ));
                    var o = a(n.finalUrl);
                    y(this.getAmpDoc()).getHeadNode().querySelector("script[host-service]") ? O(_(this.getAmpDoc())).then((t=>t.openUrl(o))).catch((t=>{
                        t.fallback && w(this.win, o, "_blank")
                    }
                    )) : w(this.win, o, n.behaviors && n.behaviors.clickTarget && "_top" == n.behaviors.clickTarget ? "_top" : "_blank")
                }
            }
            setVariable(t) {
                t = t.args;
                v(this.G[t.target], `Exit target not found: '${t.target}'`);
                this.I[t.name] = t.target
            }
            buildCallback() {
                this.element.setAttribute("aria-hidden", "true");
                this.m.push($("minDelay", G(), this));
                this.m.push($("carouselBtns", {
                    type: "inactiveElement",
                    selector: ".amp-carousel-button"
                }, this));
                var t = this.element.children;
                v(1 == t.length, "The tag should contain exactly one <script> child.");
                t = t[0];
                v(M(t), 'The amp-ad-exit config should be inside a <script> tag with type="application/json"');
                try {
                    var e = L(JSON.parse(t.textContent));
                    var r;
                    "[object Object]" === s.call(e.options) && "string" === typeof e.options.startTimingEvent && (r = e.options.startTimingEvent,
                    this.m.splice(0, 1, $("minDelay", G(e.options.startTimingEvent), this)));
                    for (var i in e.filters) {
                        var n = e.filters[i];
                        "clickDelay" == n.type && (n.startTimingEvent = n.startTimingEvent || r);
                        this.A[i] = $(i, n, this)
                    }
                    for (var a in e.targets) {
                        var o = e.targets[a];
                        this.G[a] = {
                            finalUrl: o.finalUrl,
                            trackingUrls: o.trackingUrls || [],
                            vars: o.vars || {},
                            filters: (o.filters || []).map((t=>this.A[t])).filter((t=>t)),
                            behaviors: o.behaviors || {}
                        };
                        for (var l in o.vars) {
                            if (!o.vars[l].iframeTransportSignal)
                                continue;
                            var c = o.vars[l].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);
                            if (!c || 2 > c.length)
                                continue;
                            var h = c[1]
                              , {origin: f} = X(N(h));
                            this.C[f] = this.C[f] || h
                        }
                    }
                    this.o.beacon = !1 !== e.transport.beacon;
                    this.o.image = !1 !== e.transport.image
                } catch (t) {
                    throw this.user().error("amp-ad-exit", "Invalid JSON config", t),
                    t
                }
                q(this)
            }
            resumeCallback() {
                q(this)
            }
            unlayoutCallback() {
                this.w && (this.w(),
                this.w = null);
                return super.unlayoutCallback()
            }
            isLayoutSupported() {
                return !0
            }
            onLayoutMeasure() {
                for (var t in this.A)
                    this.A[t].onLayoutMeasure()
            }
        }
        ;
        (t=>{
            t.registerElement("amp-ad-exit", Z)
        }
        )(self.AMP)
    }
});
