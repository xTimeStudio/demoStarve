(self.AMP = self.AMP || []).push({
    n: "amp-form",
    v: "2010270040000",
    f: function(e, t) {
        var r;
        function i() {
            return r ? r : r = Promise.resolve(void 0)
        }
        function a(e, t="") {
            try {
                return decodeURIComponent(e)
            } catch (e) {
                return t
            }
        }
        var n = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
        function s(e) {
            var t = Object.create(null);
            if (!e)
                return t;
            var r;
            for (; r = n.exec(e); ) {
                var i = a(r[1], r[1])
                  , s = r[2] ? a(r[2].replace(/\+/g, " "), r[2]) : "";
                t[i] = s
            }
            return t
        }
        var o = Object.prototype.toString;
        function l(e) {
            return e ? Array.prototype.slice.call(e) : []
        }
        var u = self.AMP_CONFIG || {}
          , h = ("string" == typeof u.cdnProxyRegex ? new RegExp(u.cdnProxyRegex) : u.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
        function c(e) {
            if (!self.document || !self.document.head || self.location && h.test(self.location.origin))
                return null;
            var t = self.document.head.querySelector(`meta[name="${e}"]`);
            return t && t.getAttribute("content") || null
        }
        var d = {
            thirdParty: u.thirdPartyUrl || "https://3p.ampproject.net",
            thirdPartyFrameHost: u.thirdPartyFrameHost || "ampproject.net",
            thirdPartyFrameRegex: ("string" == typeof u.thirdPartyFrameRegex ? new RegExp(u.thirdPartyFrameRegex) : u.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
            cdn: u.cdnUrl || c("runtime-host") || "https://cdn.ampproject.org",
            cdnProxyRegex: h,
            localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
            errorReporting: u.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
            betaErrorReporting: u.betaErrorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
            localDev: u.localDev || !1,
            trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
            geoApi: u.geoApiUrl || c("amp-geo-api")
        };
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var m = self.__AMP_LOG;
        function p() {
            if (!m.user)
                throw Error("failed to call initLogConstructor");
            return m.user
        }
        function f() {
            if (m.dev)
                return m.dev;
            throw Error("failed to call initLogConstructor")
        }
        function v(e, t, r, i) {
            p().assert(e, t, r, i, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
        }
        var b = class {
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
        function g(e) {
            return new Promise((t=>{
                t(e())
            }
            ))
        }
        var y = class {
            constructor(e) {
                var t, r;
                this.ma = new Promise(((e,i)=>{
                    t = e;
                    r = i
                }
                ));
                this.Ba = t;
                this.za = r;
                this.X = 0;
                if (e)
                    for (var i = 0; i < e.length; i++)
                        this.add(e[i])
            }
            add(e) {
                var t = ++this.X;
                Promise.resolve(e).then((e=>{
                    this.X === t && this.Ba(e)
                }
                ), (e=>{
                    this.X === t && this.za(e)
                }
                ));
                return this.ma
            }
            then(e, t) {
                return this.ma.then(e, t)
            }
        }
        ;
        function E(e, t) {
            e = e.__AMP_TOP || (e.__AMP_TOP = e);
            return S(e, t)
        }
        function A(e, t) {
            var r = P(e);
            r = _(r);
            return S(r, t)
        }
        function w(e, t) {
            e = P(e);
            e = _(e);
            return I(e, t) ? S(e, t) : null
        }
        function x(e, t) {
            return T(_(e), t)
        }
        function P(e) {
            return e.nodeType ? E((e.ownerDocument || e).defaultView, "ampdoc").getAmpDoc(e) : e
        }
        function _(e) {
            e = P(e);
            return e.isSingleDoc() ? e.win : e
        }
        function S(e, t) {
            I(e, t);
            e = V(e)[t];
            e.obj || (e.obj = new e.ctor(e.context),
            e.ctor = null,
            e.context = null,
            e.resolve && e.resolve(e.obj));
            return e.obj
        }
        function O(e, t) {
            var r = T(e, t);
            if (r)
                return r;
            e = V(e);
            e[t] = R();
            return e[t].promise
        }
        function T(e, t) {
            var r = V(e)[t];
            if (r) {
                if (r.promise)
                    return r.promise;
                S(e, t);
                return r.promise = Promise.resolve(r.obj)
            }
            return null
        }
        function V(e) {
            var t = e.__AMP_SERVICES;
            t || (t = e.__AMP_SERVICES = {});
            return t
        }
        function I(e, t) {
            e = e.__AMP_SERVICES && e.__AMP_SERVICES[t];
            return !(!e || !e.ctor && !e.obj)
        }
        function R() {
            var e = new b
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
        var C;
        var j = Object.prototype.hasOwnProperty;
        function L() {
            return Object.create(null)
        }
        function F(e) {
            return e || {}
        }
        function M(e, t) {
            var r = []
              , i = [];
            for (i.push({
                t: e,
                s: t,
                d: 0
            }); 0 < i.length; ) {
                let {t: e, s: t, d: a} = i.shift();
                if (r.includes(t))
                    throw Error("Source object has a circular reference.");
                r.push(t);
                e !== t && (10 < a ? Object.assign(e, t) : Object.keys(t).forEach((r=>{
                    var n = t[r];
                    if (j.call(e, r)) {
                        var s = e[r];
                        if ("[object Object]" === o.call(n) && "[object Object]" === o.call(s)) {
                            i.push({
                                t: s,
                                s: n,
                                d: a + 1
                            });
                            return
                        }
                    }
                    e[r] = n
                }
                )))
            }
        }
        function N(e, t, r=null) {
            r ? e.insertBefore(t, r.nextSibling) : e.insertBefore(t, e.firstChild)
        }
        function k(e, t) {
            var r = [];
            for (var i = e.parentElement; i; i = i.parentElement)
                t(i) && r.push(i);
            return r
        }
        function D(e) {
            var t = "fieldset";
            /^[\w-]+$/.test(t);
            t = t.toUpperCase();
            return k(e, (e=>e.tagName == t))
        }
        function $(e, t) {
            var r = e.length;
            for (var i = 0; i < r; i++)
                t(e[i], i)
        }
        function U(e, t, r) {
            var a = x(e, t);
            if (a)
                return a;
            var n = P(e);
            return n.waitForBodyOpen().then((()=>{
                var e = n.win;
                var t = n.win.document.head;
                if (t) {
                    var a = {};
                    t = t.querySelectorAll("script[custom-element],script[custom-template]");
                    for (var s = 0; s < t.length; s++) {
                        var o = t[s];
                        o = o.getAttribute("custom-element") || o.getAttribute("custom-template");
                        a[o] = !0
                    }
                    a = Object.keys(a)
                } else
                    a = [];
                return a.includes(r) ? E(e, "extensions").waitForExtension(e, r) : i()
            }
            )).then((()=>{
                var i = n.win;
                return i.__AMP_EXTENDED_ELEMENTS && i.__AMP_EXTENDED_ELEMENTS[r] ? O(_(e), t) : null
            }
            ))
        }
        function q(e) {
            return A(e, "mutator")
        }
        var H;
        var B = "Webkit webkit Moz moz ms O o".split(" ");
        function X(e, t, r) {
            var i = e.style;
            if (!t.startsWith("--")) {
                H || (H = L());
                var a = H[t];
                if (!a) {
                    a = t;
                    if (void 0 === i[t]) {
                        var n = t.charAt(0).toUpperCase() + t.slice(1);
                        e: {
                            for (var s = 0; s < B.length; s++) {
                                var o = B[s] + n;
                                if (void 0 !== i[o]) {
                                    n = o;
                                    break e
                                }
                            }
                            n = ""
                        }
                        void 0 !== i[n] && (a = n)
                    }
                    H[t] = a
                }
                t = a
            }
            t && (t.startsWith("--") ? e.style.setProperty(t, r) : e.style[t] = r)
        }
        function G(e, t) {
            void 0 === t && (t = e.hasAttribute("hidden"));
            t ? e.removeAttribute("hidden") : e.setAttribute("hidden", "")
        }
        var z;
        function J(e, t, r) {
            var i, a = e, n = r;
            i = e=>{
                try {
                    return n(e)
                } catch (e) {
                    throw self.__AMP_REPORT_ERROR(e),
                    e
                }
            }
            ;
            var s = K();
            a.addEventListener(t, i, s ? void 0 : !1);
            return ()=>{
                a && a.removeEventListener(t, i, s ? void 0 : !1);
                i = a = n = null
            }
        }
        function K() {
            if (void 0 !== z)
                return z;
            z = !1;
            try {
                var e = {
                    get capture() {
                        z = !0
                    }
                };
                self.addEventListener("test-options", null, e);
                self.removeEventListener("test-options", null, e)
            } catch (e) {}
            return z
        }
        function W(e, t, r, i) {
            var a = {
                detail: r
            };
            Object.assign(a, i);
            if ("function" == typeof e.CustomEvent)
                return new e.CustomEvent(t,a);
            e = e.document.createEvent("CustomEvent");
            e.initCustomEvent(t, !!a.bubbles, !!a.cancelable, r);
            return e
        }
        function Z(e, t, r) {
            return J(e, t, r)
        }
        function Y(e, t) {
            var r = t;
            var i = J(e, "mouseup", (e=>{
                try {
                    r(e)
                } finally {
                    r = null,
                    i()
                }
            }
            ));
            return i
        }
        function Q(e) {
            var t;
            var r = new Promise((r=>{
                t = Y(e, r)
            }
            ));
            r.then(t, t);
            return r
        }
        function ee(e, t) {
            function r(r) {
                n = null;
                a = e.setTimeout(i, 100);
                t.apply(null, r)
            }
            function i() {
                a = 0;
                n && r(n)
            }
            var a = 0
              , n = null;
            return function(...e) {
                a ? n = e : r(e)
            }
        }
        function te(e) {
            var t = e.getRootNode();
            var r = null;
            var i = ()=>{
                var i = t.querySelector("textarea[autoexpand]");
                i && !r ? r = new re(e) : !i && r && (r.dispose(),
                r = null)
            }
            ;
            J(t, "amp:dom-update", i);
            i()
        }
        var re = class {
            constructor(e) {
                var t = e.getRootNode();
                this.J = t.ownerDocument || t;
                this.j = this.J.defaultView;
                this.ea = A(e, "viewport");
                this.L = [];
                this.L.push(Z(t, "input", (e=>{
                    e = e.target;
                    "TEXTAREA" == e.tagName && e.hasAttribute("autoexpand") && oe(e)
                }
                )));
                this.L.push(Z(t, "mousedown", (e=>{
                    1 == e.which && (e = e.target,
                    "TEXTAREA" == e.tagName && se(e))
                }
                )));
                var r = t.querySelectorAll("textarea");
                this.L.push(Z(t, "amp:dom-update", (()=>{
                    r = t.querySelectorAll("textarea")
                }
                )));
                var i = ee(this.j, (e=>{
                    e.relayoutAll && ne(r)
                }
                ));
                this.L.push(this.ea.onResize(i));
                ie(r)
            }
            dispose() {
                this.L.forEach((e=>e()))
            }
        }
        ;
        function ie(e) {
            Promise.all(l(e).map((e=>ae(e).then((t=>{
                t && e.removeAttribute("autoexpand")
            }
            )))))
        }
        function ae(e) {
            return q(e).measureElement((()=>e.scrollHeight > e.clientHeight))
        }
        function ne(e) {
            $(e, (e=>{
                "TEXTAREA" == e.tagName && e.hasAttribute("autoexpand") && oe(e)
            }
            ))
        }
        function se(e) {
            var t = q(e);
            Promise.all([t.measureElement((()=>e.scrollHeight)), Q(e)]).then((r=>{
                var i = r[0];
                var a = 0;
                return t.measureMutateElement(e, (()=>{
                    a = e.scrollHeight
                }
                ), (()=>{
                    i != a && e.removeAttribute("autoexpand")
                }
                ))
            }
            ))
        }
        function oe(e) {
            var t = q(e)
              , r = e.ownerDocument.defaultView;
            var i = 0
              , a = 0
              , n = 0;
            var s = le(e);
            t.measureMutateElement(e, (()=>{
                var t = r.getComputedStyle(e) || L();
                a = e.scrollHeight;
                var s = parseInt(t.getPropertyValue("max-height"), 10);
                n = isNaN(s) ? 1 / 0 : s;
                i = "content-box" == t.getPropertyValue("box-sizing") ? -parseInt(t.getPropertyValue("padding-top"), 10) + -parseInt(t.getPropertyValue("padding-bottom"), 10) : parseInt(t.getPropertyValue("border-top-width"), 10) + parseInt(t.getPropertyValue("border-bottom-width"), 10)
            }
            ), (()=>s.then((t=>{
                e.classList.toggle("i-amphtml-textarea-max", t + i > n);
                if ("iAmphtmlHasExpanded"in e.dataset || a <= t)
                    e.dataset.iAmphtmlHasExpanded = "",
                    X(e, "height", `${t + i}px`)
            }
            ))))
        }
        function le(e) {
            var t = e.ownerDocument
              , r = t.defaultView
              , i = t.body
              , a = q(e)
              , n = e.cloneNode(!1);
            n.classList.add("i-amphtml-textarea-clone");
            var s = 0
              , o = 0
              , l = !1;
            return a.measureMutateElement(i, (()=>{
                var t = r.getComputedStyle(e) || L()
                  , i = parseInt(t.getPropertyValue("max-height"), 10);
                s = parseInt(t.getPropertyValue("width"), 10);
                l = isNaN(i) || e.scrollHeight < i
            }
            ), (()=>{
                l && (e.scrollTop = 0);
                X(n, "width", `${s}px`);
                t.body.appendChild(n)
            }
            )).then((()=>a.measureMutateElement(i, (()=>{
                o = n.scrollHeight
            }
            ), (()=>{
                n.parentElement && n.parentElement.removeChild(n)
            }
            )))).then((()=>o))
        }
        function ue(e) {
            var t = e.elements
              , r = {}
              , i = /^(?:input|select|textarea)$/i
              , a = /^(?:submit|button|image|file|reset)$/i
              , n = /^(?:checkbox|radio)$/i;
            for (var s = 0; s < t.length; s++) {
                let e = t[s]
                  , o = e.checked
                  , l = e.name
                  , u = e.multiple
                  , h = e.options
                  , c = e.tagName
                  , d = e.type
                  , m = e.value;
                !l || ce(e) || !i.test(c) || a.test(d) || n.test(d) && !o || (void 0 === r[l] && (r[l] = []),
                u ? $(h, (e=>{
                    e.selected && r[l].push(e.value)
                }
                )) : r[l].push(m))
            }
            var o = he(e);
            o && o.name && (e = o.name,
            void 0 === r[e] && (r[e] = []),
            r[o.name].push(o.value));
            Object.keys(r).forEach((e=>{
                0 == r[e].length && delete r[e]
            }
            ));
            return r
        }
        function he(e) {
            var t = e.elements
              , r = t.length
              , i = e.ownerDocument.activeElement;
            var a = null;
            for (e = 0; e < r; e++) {
                var n = t[e];
                var s = n.type;
                if (s = "BUTTON" == n.tagName || "submit" == s)
                    if (a || (a = n),
                    i == n)
                        return i
            }
            return a
        }
        function ce(e) {
            if (e.disabled)
                return !0;
            e = D(e);
            for (var t = 0; t < e.length; t++)
                if (e[t].disabled)
                    return !0;
            return !1
        }
        function de(e) {
            switch (e.type) {
            case "select-multiple":
            case "select-one":
                e = e.options;
                for (var t = 0; t < e.length; t++)
                    if (e[t].selected !== e[t].defaultSelected)
                        return !1;
                break;
            case "checkbox":
            case "radio":
                return e.checked === e.defaultChecked;
            default:
                return e.value === e.defaultValue
            }
            return !0
        }
        function me(e, t) {
            return e.hasAttribute("verify-xhr") ? new ye(e,t) : new ve(e)
        }
        function pe(e) {
            (e = e.h.elements) && $(e, (e=>{
                e.setCustomValidity("")
            }
            ))
        }
        var fe = class {
            constructor(e) {
                this.h = e
            }
            onCommit() {
                pe(this);
                e: {
                    var e = this.h.elements;
                    for (var t = 0; t < e.length; t++) {
                        var r = e[t];
                        if (!r.disabled && !de(r)) {
                            e = !0;
                            break e
                        }
                    }
                    e = !1
                }
                return e ? this.pa() : Promise.resolve({
                    updatedElements: [],
                    errors: []
                })
            }
            pa() {
                return Promise.resolve({
                    updatedElements: [],
                    errors: []
                })
            }
        }
        ;
        var ve = class extends fe {
        }
        ;
        function be(e, t) {
            if (!e.O) {
                e.O = new y;
                var r = ()=>e.O = null;
                e.O.then(r, r)
            }
            return e.O.add(t)
        }
        function ge(e, t) {
            var r = []
              , i = e.la;
            e.la = t;
            for (var a = 0; a < t.length; a++) {
                var n = t[a]
                  , s = p().assertString(n.name, "Verification errors must have a name property");
                n = p().assertString(n.message, "Verification errors must have a message property");
                s = p().assertElement(e.h.querySelector(`[name="${s}"]`), "Verification error name property must match a field name");
                s.checkValidity() && (s.setCustomValidity(n),
                r.push(s))
            }
            var o = i.filter((e=>t.every((t=>e.name !== t.name)))).map((t=>e.h.querySelector(`[name="${t.name}"]`)));
            return {
                updatedElements: r.concat(o),
                errors: t
            }
        }
        var ye = class extends fe {
            constructor(e, t) {
                super(e);
                this.S = t;
                this.O = null;
                this.la = []
            }
            pa() {
                var e = this.S().then((()=>[]), (e=>Ee(e)));
                return be(this, e).then((e=>ge(this, e)))
            }
        }
        ;
        function Ee(e) {
            return (e = e.response) ? e.json().then((e=>e.verifyErrors || []), (()=>[])) : Promise.resolve([])
        }
        function Ae(e, t) {
            var r = E(e, "platform");
            return r.isIos() && 11 == r.getMajorVersion() ? new Pe(t) : FormData.prototype.entries && FormData.prototype.delete ? new xe(t) : new we(t)
        }
        var we = class {
            constructor(e) {
                this.o = e ? ue(e) : L()
            }
            append(e, t) {
                var r = String(e);
                this.o[r] = this.o[r] || [];
                this.o[r].push(String(t))
            }
            delete(e) {
                delete this.o[e]
            }
            entries() {
                var e = [];
                Object.keys(this.o).forEach((t=>{
                    this.o[t].forEach((r=>e.push([t, r])))
                }
                ));
                var t = 0;
                return {
                    next() {
                        return t < e.length ? {
                            value: e[t++],
                            done: !1
                        } : {
                            value: void 0,
                            done: !0
                        }
                    }
                }
            }
            getFormData() {
                var e = new FormData;
                Object.keys(this.o).forEach((t=>{
                    this.o[t].forEach((r=>e.append(t, r)))
                }
                ));
                return e
            }
        }
        ;
        var xe = class {
            constructor(e) {
                this.w = new FormData(e);
                e && (e = he(e)) && e.name && this.append(e.name, e.value)
            }
            append(e, t) {
                this.w.append(e, t)
            }
            delete(e) {
                this.w.delete(e)
            }
            entries() {
                return this.w.entries()
            }
            getFormData() {
                return this.w
            }
        }
        ;
        var Pe = class extends xe {
            constructor(e) {
                super(e);
                e && $(e.elements, (e=>{
                    "file" == e.type && 0 == e.files.length && (this.w.delete(e.name),
                    this.w.append(e.name, new Blob([]), ""))
                }
                ))
            }
            append(e, t, r) {
                t && "object" == typeof t && "" == t.name && 0 == t.size ? this.w.append(e, new Blob([]), r || "") : this.w.append(e, t)
            }
        }
        ;
        var _e = {
            INPUT: !0,
            SELECT: !0,
            TEXTAREA: !0
        };
        function Se(e) {
            var t = 0 < e.I && !e.U;
            if (t !== e.ra) {
                e.h.classList.toggle("amp-form-dirty", t);
                var r = W(e.j, "amp:form-dirtiness-change", F({
                    isDirty: t
                }), {
                    bubbles: !0
                });
                e.h.dispatchEvent(r)
            }
            e.ra = t
        }
        function Oe(e, t) {
            var r = t.hidden;
            r = _e[t.tagName] ? !t.name || r || ce(t) : !0;
            if (!r) {
                e: switch (t.tagName) {
                case "INPUT":
                    r = "checkbox" == t.type || "radio" == t.type ? !t.checked : !t.value;
                    break e;
                case "TEXTAREA":
                    r = !t.value;
                    break e;
                case "SELECT":
                    r = !1;
                    break e;
                default:
                    throw Error(`isFieldEmpty: ${t.tagName} is not a supported field element.`)
                }
                (r = r || de(t)) || (e.da ? (r = t.value,
                r = e.da.get(t.name) === r) : r = !1);
                r ? (t = t.name,
                e.D[t] && (e.D[t] = !1,
                --e.I)) : (t = t.name,
                e.D[t] || (e.D[t] = !0,
                ++e.I))
            }
        }
        var Te = class {
            constructor(e, t) {
                this.h = e;
                this.j = t;
                this.I = 0;
                this.D = L();
                this.da = null;
                this.ra = this.U = !1;
                this.ba();
                for (e = 0; e < this.h.elements.length; ++e)
                    Oe(this, this.h.elements[e]);
                Se(this)
            }
            onSubmitting() {
                this.U = !0;
                Se(this)
            }
            onSubmitError() {
                this.U = !1;
                Se(this)
            }
            onSubmitSuccess() {
                this.U = !1;
                this.da = Ae(this.j, this.h).getFormData();
                this.D = L();
                this.I = 0;
                Se(this)
            }
            ba() {
                this.h.addEventListener("input", this.ka.bind(this));
                this.h.addEventListener("reset", this.ya.bind(this));
                this.h.addEventListener("amp:form-value-change", this.ka.bind(this))
            }
            ka(e) {
                Oe(this, e.target);
                Se(this)
            }
            ya() {
                this.D = L();
                this.I = 0;
                Se(this)
            }
        }
        ;
        var Ve = class {
            constructor() {
                this.l = null
            }
            add(e) {
                this.l || (this.l = []);
                this.l.push(e);
                return ()=>{
                    this.remove(e)
                }
            }
            remove(e) {
                this.l && (e = this.l.indexOf(e),
                -1 < e && this.l.splice(e, 1))
            }
            removeAll() {
                this.l && (this.l.length = 0)
            }
            fire(e) {
                if (this.l) {
                    var t = this.l;
                    for (var r = 0; r < t.length; r++)
                        (0,
                        t[r])(e)
                }
            }
            getHandlerCount() {
                return this.l ? this.l.length : 0
            }
        }
        ;
        var Ie = class {
            constructor() {
                this.ja = new Ve
            }
            beforeSubmit(e) {
                return this.ja.add(e)
            }
            fire(e) {
                this.ja.fire(e)
            }
        }
        ;
        var Re = class {
            constructor(e) {
                this.va = e;
                this.W = this.ca = 0;
                this.P = Object.create(null)
            }
            has(e) {
                return !!this.P[e]
            }
            get(e) {
                var t = this.P[e];
                if (t)
                    return t.access = ++this.W,
                    t.payload
            }
            put(e, t) {
                this.has(e) || this.ca++;
                this.P[e] = {
                    payload: t,
                    access: this.W
                };
                if (!(this.ca <= this.va)) {
                    e = this.P;
                    var r = this.W + 1;
                    for (var i in e) {
                        var {access: a} = e[i];
                        if (a < r) {
                            r = a;
                            var n = i
                        }
                    }
                    void 0 !== n && (delete e[n],
                    this.ca--)
                }
            }
        }
        ;
        var Ce = F({
            c: !0,
            v: !0,
            a: !0,
            ad: !0
        });
        var je, Le;
        var Fe = /[?&]amp_js[^&]*/
          , Me = /[?&]amp_gsa[^&]*/
          , Ne = /[?&]amp_r[^&]*/
          , ke = /[?&]amp_kit[^&]*/
          , De = /[?&]usqp[^&]*/;
        function $e(e) {
            je || (je = self.document.createElement("a"),
            Le = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new Re(100)));
            var t = Le
              , r = je;
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
        function Ue(e, t, r) {
            if (!t)
                return e;
            var i = e.split("#", 2)
              , a = i[0].split("?", 2);
            var n = a[0] + (a[1] ? r ? `?${t}&${a[1]}` : `?${a[1]}&${t}` : `?${t}`);
            return n += i[1] ? `#${i[1]}` : ""
        }
        function qe(e) {
            var t = [];
            for (var r in e) {
                var i = e[r];
                if (null != i)
                    if (Array.isArray(i))
                        for (var a = 0; a < i.length; a++) {
                            var n = i[a];
                            t.push(`${encodeURIComponent(r)}=${encodeURIComponent(n)}`)
                        }
                    else
                        a = i,
                        t.push(`${encodeURIComponent(r)}=${encodeURIComponent(a)}`)
            }
            return t.join("&")
        }
        function He(e) {
            "string" == typeof e && (e = $e(e));
            return d.cdnProxyRegex.test(e.origin)
        }
        function Be(e, t) {
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
        function Xe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Be(Object(r), !0).forEach((function(t) {
                    var i = r[t];
                    t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Be(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var Ge = ["GET", "POST"];
        function ze(e, t, r, i, a={}) {
            var n = F({
                type: e.Ca
            })
              , s = i && i.successTemplate ? i.successTemplate : r;
            s && (n.successTemplate = {
                type: "amp-mustache",
                payload: s.innerHTML
            });
            var o = i && i.errorTemplate ? i.errorTemplate : null;
            o && (n.errorTemplate = {
                type: "amp-mustache",
                payload: o.innerHTML
            });
            a && Object.assign(n, a);
            e = t.xhrUrl;
            r = t.fetchOpt;
            t = Xe({}, r);
            if ((i = r.body) && "function" == typeof i.getFormData) {
                r = r.body;
                t.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
                r = r.entries();
                i = [];
                for (a = r.next(); !a.done; a = r.next())
                    i.push(a.value);
                r = i;
                t.body = r
            }
            e = {
                input: e,
                init: t
            };
            return F({
                originalRequest: e,
                ampComponent: n
            })
        }
        var Je = class {
            constructor(e, t, r) {
                this.F = t;
                this.m = r;
                this.Ca = e
            }
            isEnabled() {
                var e = this.F.getAmpDoc();
                return e.isSingleDoc() && e.getRootNode().documentElement.hasAttribute("allow-viewer-render-template") ? this.F.hasCapability("viewerRenderTemplate") : !1
            }
            assertTrustedViewer(e) {
                return this.F.isTrustedViewer().then((t=>{
                    v(t, "Refused to attempt SSR in untrusted viewer: ", e)
                }
                ))
            }
            ssr(e, t, r=null, i={}) {
                var a;
                r || (a = this.m.maybeFindTemplate(e));
                return this.assertTrustedViewer(e).then((()=>this.F.sendMessageAwaitResponse("viewerRenderTemplate", ze(this, t, a, r, i))))
            }
            applySsrOrCsrTemplate(e, t) {
                var r;
                this.isEnabled() ? (v("string" === typeof t.html, "Server side html response must be defined"),
                r = this.assertTrustedViewer(e).then((()=>this.m.findAndSetHtmlForTemplate(e, t.html)))) : r = Array.isArray(t) ? this.m.findAndRenderTemplateArray(e, t) : this.m.findAndRenderTemplate(e, t);
                return r
            }
        }
        ;
        var Ke = class {
            constructor(e, t) {
                this.aa = t;
                this.ea = A(e, "viewport");
                this.qa = E(e.win, "vsync");
                this.Z = null;
                this.Y = "";
                this.V = !1;
                this.C = e.win.document.createElement("div");
                G(this.C, !1);
                this.C.classList.add("i-amphtml-validation-bubble");
                this.C.__BUBBLE_OBJ = this;
                e.getBody().appendChild(this.C)
            }
            isActiveOn(e) {
                return this.V && e == this.Z
            }
            hide() {
                this.V && (this.V = !1,
                this.Z = null,
                this.Y = "",
                this.qa.run({
                    measure: void 0,
                    mutate: We
                }, {
                    bubbleElement: this.C
                }))
            }
            show(e, t) {
                this.isActiveOn(e) && t == this.Y || (this.V = !0,
                this.Z = e,
                this.Y = t,
                this.qa.run({
                    measure: Ze,
                    mutate: Ye
                }, {
                    message: t,
                    targetElement: e,
                    bubbleElement: this.C,
                    viewport: this.ea,
                    id: this.aa
                }))
            }
        }
        ;
        function We(e) {
            e.bubbleElement.removeAttribute("aria-alert");
            e.bubbleElement.removeAttribute("role");
            for (var t = e.bubbleElement; t.firstChild; )
                t.removeChild(t.firstChild);
            G(e.bubbleElement, !1)
        }
        function Ze(e) {
            e.targetRect = e.viewport.getLayoutRect(e.targetElement)
        }
        function Ye(e) {
            for (var t = e.bubbleElement; t.firstChild; )
                t.removeChild(t.firstChild);
            var r = e.bubbleElement.ownerDocument.createElement("div");
            r.id = `bubble-message-${e.id}`;
            r.textContent = e.message;
            e.bubbleElement.setAttribute("aria-labeledby", r.id);
            e.bubbleElement.setAttribute("role", "alert");
            e.bubbleElement.setAttribute("aria-live", "assertive");
            e.bubbleElement.appendChild(r);
            G(e.bubbleElement, !0);
            t = e.bubbleElement;
            e = {
                top: `${e.targetRect.top - 10}px`,
                left: `${e.targetRect.left + e.targetRect.width / 2}px`
            };
            for (var i in e)
                X(t, i, e[i])
        }
        var Qe, et, tt = 0;
        function rt(e, t) {
            $(t.elements, (t=>{
                "TEXTAREA" == t.tagName && e.checkInputValidity(t)
            }
            ))
        }
        var it = class {
            constructor(e) {
                this.form = e;
                this.ampdoc = P(e);
                this.mutator = q(e);
                this.root = this.ampdoc.getRootNode();
                this.T = null
            }
            report() {}
            onBlur() {}
            onInput() {}
            inputs() {
                return this.form.querySelectorAll("input,select,textarea")
            }
            checkInputValidity(e) {
                if ("TEXTAREA" === e.tagName && e.hasAttribute("pattern") && (e.checkValidity() || "Please match the requested format." === e.validationMessage)) {
                    var t = e.getAttribute("pattern")
                      , r = new RegExp(`^${t}$`,"m").test(e.value);
                    e.setCustomValidity(r ? "" : "Please match the requested format.")
                }
                return e.checkValidity()
            }
            checkFormValidity(e) {
                rt(this, e);
                return e.checkValidity()
            }
            reportFormValidity(e) {
                rt(this, e);
                return e.reportValidity()
            }
            fireValidityEventIfNecessary() {
                var e = this.T;
                this.T = this.checkFormValidity(this.form);
                if (e !== this.T) {
                    var t = W(this.form.ownerDocument.defaultView, this.T ? "valid" : "invalid", null, {
                        bubbles: !0
                    });
                    this.form.dispatchEvent(t)
                }
            }
        }
        ;
        var at = class extends it {
            report() {
                this.reportFormValidity(this.form);
                this.fireValidityEventIfNecessary()
            }
        }
        ;
        var nt = class extends it {
            constructor(e) {
                super(e);
                var t = `i-amphtml-validation-bubble-${tt++}`;
                this.M = new Ke(this.ampdoc,t)
            }
            report() {
                var e = this.inputs();
                for (var t = 0; t < e.length; t++)
                    if (!this.checkInputValidity(e[t])) {
                        e[t].focus();
                        this.M.show(e[t], e[t].validationMessage);
                        break
                    }
                this.fireValidityEventIfNecessary()
            }
            onBlur(e) {
                "submit" != e.target.type && this.M.hide()
            }
            onInput(e) {
                e = e.target;
                this.M.isActiveOn(e) && (this.checkInputValidity(e) ? (e.removeAttribute("aria-invalid"),
                this.M.hide()) : (e.setAttribute("aria-invalid", "true"),
                this.M.show(e, e.validationMessage)))
            }
        }
        ;
        var st = class extends it {
            constructor(e) {
                super(e);
                this.Fa = this.form.id ? this.form.id : String(Date.now() + Math.floor(100 * Math.random()));
                this.ua = 0
            }
            reportInput(e) {
                var t = dt(e);
                t && this.showValidationFor(e, t)
            }
            hideAllValidations() {
                var e = this.inputs();
                for (var t = 0; t < e.length; t++)
                    this.hideValidationFor(e[t])
            }
            getValidationFor(e, t) {
                if (!e.id)
                    return null;
                var r = e.validationMessage;
                r = "TEXTAREA" === e.tagName && "customError" === t && "Please match the requested format." === r ? "patternMismatch" : t;
                var i = "__AMP_VALIDATION_" + r;
                i in e || (e[i] = this.root.querySelector(`[visible-when-invalid=${r}][validation-for=${e.id}]`));
                return e[i]
            }
            showValidationFor(e, t) {
                var r = this.getValidationFor(e, t);
                if (r) {
                    r.textContent.trim() || (r.textContent = e.validationMessage);
                    e.__AMP_VISIBLE_VALIDATION = r;
                    var i = r.getAttribute("id");
                    i || (i = `i-amphtml-aria-desc-${this.Fa}-${this.ua++}`,
                    r.setAttribute("id", i));
                    e.setAttribute("aria-invalid", "true");
                    e.setAttribute("aria-describedby", i);
                    this.mutator.mutateElement(r, (()=>r.classList.add("visible")))
                }
            }
            hideValidationFor(e) {
                var t = this.getVisibleValidationFor(e);
                t && (delete e.__AMP_VISIBLE_VALIDATION,
                e.removeAttribute("aria-invalid"),
                e.removeAttribute("aria-describedby"),
                this.mutator.mutateElement(t, (()=>t.classList.remove("visible"))))
            }
            getVisibleValidationFor(e) {
                return e.__AMP_VISIBLE_VALIDATION
            }
            shouldValidateOnInteraction() {
                throw Error("Not Implemented")
            }
            onInteraction(e) {
                e = e.target;
                var t = !!e.checkValidity && this.shouldValidateOnInteraction(e);
                this.hideValidationFor(e);
                t && !this.checkInputValidity(e) && this.reportInput(e)
            }
            onBlur(e) {
                this.onInteraction(e)
            }
            onInput(e) {
                this.onInteraction(e)
            }
        }
        ;
        var ot = class extends st {
            report() {
                this.hideAllValidations();
                var e = this.inputs();
                for (var t = 0; t < e.length; t++)
                    if (!this.checkInputValidity(e[t])) {
                        this.reportInput(e[t]);
                        e[t].focus();
                        break
                    }
                this.fireValidityEventIfNecessary()
            }
            shouldValidateOnInteraction(e) {
                return !!this.getVisibleValidationFor(e)
            }
        }
        ;
        var lt = class extends st {
            report() {
                this.hideAllValidations();
                var e = null;
                var t = this.inputs();
                for (var r = 0; r < t.length; r++)
                    this.checkInputValidity(t[r]) || (e = e || t[r],
                    this.reportInput(t[r]));
                e && e.focus();
                this.fireValidityEventIfNecessary()
            }
            shouldValidateOnInteraction(e) {
                return !!this.getVisibleValidationFor(e)
            }
        }
        ;
        var ut = class extends st {
            shouldValidateOnInteraction() {
                return !0
            }
            onInteraction(e) {
                super.onInteraction(e);
                this.fireValidityEventIfNecessary()
            }
        }
        ;
        var ht = class extends lt {
            shouldValidateOnInteraction() {
                return !0
            }
            onInteraction(e) {
                super.onInteraction(e);
                this.fireValidityEventIfNecessary()
            }
        }
        ;
        function ct(e) {
            switch (e.getAttribute("custom-validation-reporting")) {
            case "as-you-go":
                return new ut(e);
            case "show-all-on-submit":
                return new lt(e);
            case "interact-and-submit":
                return new ht(e);
            case "show-first-on-submit":
                return new ot(e)
            }
            e.ownerDocument && void 0 === Qe && (Qe = !!document.createElement("form").reportValidity);
            return Qe ? new at(e) : new nt(e)
        }
        function dt(e) {
            var t = ["badInput"];
            for (var r in e.validity)
                t.includes(r) || t.push(r);
            r = t.filter((t=>!0 === e.validity[t]));
            return r.length ? r[0] : null
        }
        function mt(e) {
            var t = e.ownerDocument.defaultView;
            t.FormProxy || (t.FormProxy = pt(t));
            var r = new t.FormProxy(e);
            "action"in r || ft(e, r);
            e.$p = r
        }
        function pt(e) {
            function t(e) {
                this.h = e
            }
            var r = t.prototype
              , i = e.Object
              , a = i.prototype;
            [e.HTMLFormElement, e.EventTarget].reduce(((e,t)=>{
                for (t = t && t.prototype; t && t !== a && !(0 <= e.indexOf(t)); )
                    e.push(t),
                    t = i.getPrototypeOf(t);
                return e
            }
            ), []).forEach((t=>{
                for (var i in t) {
                    let s = e.Object.getOwnPropertyDescriptor(t, i);
                    if (s && i.toUpperCase() != i && !i.startsWith("on") && !a.hasOwnProperty.call(r, i))
                        if ("function" == typeof s.value) {
                            let e = s.value;
                            r[i] = function() {
                                return e.apply(this.h, arguments)
                            }
                        } else {
                            var n = {};
                            s.get && (n.get = function() {
                                return s.get.call(this.h)
                            }
                            );
                            s.set && (n.set = function(e) {
                                return s.set.call(this.h, e)
                            }
                            );
                            e.Object.defineProperty(r, i, n)
                        }
                }
            }
            ));
            return t
        }
        function ft(e, t) {
            var r = e.ownerDocument.defaultView.HTMLFormElement.prototype.cloneNode.call(e, !1);
            for (let n in r) {
                if (n in t || n.toUpperCase() == n || n.startsWith("on"))
                    continue;
                let s = At[n]
                  , o = e[n];
                if (s) {
                    if (s.access == bt) {
                        let s;
                        if (o && o.nodeType) {
                            r = o;
                            var i = r.nextSibling
                              , a = r.parentNode;
                            a.removeChild(r);
                            try {
                                s = e[n]
                            } finally {
                                a.insertBefore(r, i)
                            }
                        } else
                            s = o;
                        Object.defineProperty(t, n, {
                            get() {
                                return s
                            }
                        })
                    } else if (s.access == vt) {
                        let r = s.attr || n;
                        Object.defineProperty(t, n, {
                            get() {
                                var i = t.getAttribute(r);
                                return null == i && void 0 !== s.def ? s.def : s.type == yt ? "true" === i : s.type == Et ? null != i : s.type == gt ? (i = i || "",
                                w(e, "url").parse(i).href) : i
                            },
                            set(e) {
                                s.type == Et && (e = e ? "" : null);
                                null != e ? t.setAttribute(r, e) : t.removeAttribute(r)
                            }
                        })
                    }
                } else
                    Object.defineProperty(t, n, {
                        get() {
                            return e[n]
                        },
                        set(t) {
                            e[n] = t
                        }
                    })
            }
        }
        var vt = 1
          , bt = 2
          , gt = 1
          , yt = 2
          , Et = 3;
        var At = {
            acceptCharset: {
                access: vt,
                attr: "accept-charset"
            },
            accessKey: {
                access: vt,
                attr: "accesskey"
            },
            action: {
                access: vt,
                type: gt
            },
            attributes: {
                access: bt
            },
            autocomplete: {
                access: vt,
                def: "on"
            },
            children: {
                access: bt
            },
            dataset: {
                access: bt
            },
            dir: {
                access: vt
            },
            draggable: {
                access: vt,
                type: yt,
                def: !1
            },
            elements: {
                access: bt
            },
            encoding: {
                access: bt
            },
            enctype: {
                access: vt
            },
            hidden: {
                access: vt,
                type: Et,
                def: !1
            },
            id: {
                access: vt,
                def: ""
            },
            lang: {
                access: vt
            },
            localName: {
                access: bt
            },
            method: {
                access: vt,
                def: "get"
            },
            name: {
                access: vt
            },
            noValidate: {
                access: vt,
                attr: "novalidate",
                type: Et,
                def: !1
            },
            prefix: {
                access: bt
            },
            spellcheck: {
                access: vt
            },
            style: {
                access: bt
            },
            target: {
                access: vt,
                def: ""
            },
            title: {
                access: vt
            },
            translate: {
                access: vt
            }
        };
        function wt(e, t) {
            var r = e.getHeadNode()
              , i = xt(r, _t(r));
            if (t) {
                var a = e.getRootNode();
                if (St(a, i))
                    t(i);
                else
                    var n = setInterval((()=>{
                        St(a, i) && (clearInterval(n),
                        t(i))
                    }
                    ), 4)
            }
        }
        function xt(e, t) {
            var r = e.__AMP_CSS_SM;
            r || (r = e.__AMP_CSS_SM = L());
            var i = Pt(e, r, "amp-extension=amp-form");
            if (i)
                return i.textContent !== t && (i.textContent = t),
                i;
            var a = (e.ownerDocument || e).createElement("style");
            a.textContent = t;
            var n = null;
            a.setAttribute("amp-extension", "amp-form");
            n = Pt(e, r, "amp-runtime");
            N(e, a, n);
            return r["amp-extension=amp-form"] = a
        }
        function Pt(e, t, r) {
            return t[r] ? t[r] : (e = e.querySelector(`style[${r}]`)) ? t[r] = e : null
        }
        function _t(e) {
            return (e = e.__AMP_CSS_TR) ? e('form.amp-form-submit-error [submit-error],form.amp-form-submit-success [submit-success],form.amp-form-submitting [submitting]{display:block}textarea[autoexpand]:not(.i-amphtml-textarea-max){overflow:hidden!important}.i-amphtml-textarea-clone{visibility:hidden;position:absolute;top:-9999px;left:-9999px;height:0!important}.i-amphtml-validation-bubble{transform:translate(-50%,-100%);background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,0.5);max-width:200px;position:absolute;display:block;box-sizing:border-box;padding:10px;border-radius:5px}.i-amphtml-validation-bubble:after{content:" ";position:absolute;bottom:-8px;left:30px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}[visible-when-invalid]{color:red}\n/*# sourceURL=/extensions/amp-form/0.1/amp-form.css*/') : 'form.amp-form-submit-error [submit-error],form.amp-form-submit-success [submit-success],form.amp-form-submitting [submitting]{display:block}textarea[autoexpand]:not(.i-amphtml-textarea-max){overflow:hidden!important}.i-amphtml-textarea-clone{visibility:hidden;position:absolute;top:-9999px;left:-9999px;height:0!important}.i-amphtml-validation-bubble{transform:translate(-50%,-100%);background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,0.5);max-width:200px;position:absolute;display:block;box-sizing:border-box;padding:10px;border-radius:5px}.i-amphtml-validation-bubble:after{content:" ";position:absolute;bottom:-8px;left:30px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}[visible-when-invalid]{color:red}\n/*# sourceURL=/extensions/amp-form/0.1/amp-form.css*/'
        }
        function St(e, t) {
            var r = e.styleSheets;
            for (e = 0; e < r.length; e++)
                if (r[e].ownerNode == t)
                    return !0;
            return !1
        }
        function Ot(e) {
            var t = e.documentElement;
            return ["⚡4email", "amp4email"].some((e=>t.hasAttribute(e)))
        }
        function Tt(e, t, r={}) {
            U(e, "amp-analytics-instrumentation", "amp-analytics").then((i=>{
                i && i.triggerEventForTarget(e, t, r, !0)
            }
            ))
        }
        function Vt(e, t) {
            try {
                return JSON.parse(e)
            } catch (e) {
                return t && t(e),
                null
            }
        }
        var It = ["amp-selector"];
        function Rt(e, t) {
            var r = e.h.getAttribute(t);
            if (r) {
                var i = w(e.h, "url");
                i.assertHttpsUrl(r, e.h, t);
                v(!i.isProxyOrigin(r), "form %s should not be on AMP CDN: %s", t, e.h)
            }
            return r
        }
        function Ct(e) {
            var t = e.h.getAttribute("enctype");
            return "application/x-www-form-urlencoded" === t || "multipart/form-data" === t ? t : "multipart/form-data"
        }
        function jt(e) {
            if ("submitting" === e.B)
                return i();
            $t(e, "verifying");
            qt(e, "verify", null, 3);
            return Kt(e, zt(e)).then((()=>er(e)))
        }
        function Lt(e) {
            U(e.h, "inputmask", "amp-inputmask").then((e=>{
                e && e.install()
            }
            ))
        }
        function Ft(e) {
            if (!He(e.j.location) && e.h.hasAttribute("data-initialize-from-url")) {
                var t = ["SELECT", "TEXTAREA"]
                  , r = "color date datetime-local email hidden month number range search tel text time url week".split(" ")
                  , i = ["checkbox", "radio"]
                  , a = (e,a)=>{
                    if (!e.hasAttribute("data-amp-replace") && e.hasAttribute("data-allow-initialization")) {
                        a = n[a] || "";
                        var s = e.getAttribute("type") || "text"
                          , o = e.tagName;
                        "INPUT" === o ? r.includes(s.toLocaleLowerCase()) ? e.value !== a && (e.value = a) : i.includes(s) && (a = e.value === a,
                        e.checked !== a && (e.checked = a)) : t.includes(o) && e.value !== a && (e.value = a)
                    }
                }
                  , n = s(e.j.location.search);
                Object.keys(n).forEach((t=>{
                    var r = e.h.elements[t];
                    r && (r.nodeType === Node.ELEMENT_NODE ? a(r, t) : r.length && $(r, (e=>a(e, t))))
                }
                ))
            }
        }
        function Mt(e) {
            var t = e.h.querySelectorAll("input[type=password],input[type=file]");
            v(0 == t.length, "input[type=password] or input[type=file] may only appear in form[method=post]")
        }
        function Nt(e) {
            if (e.$)
                return e.$;
            var t = e.h.querySelectorAll(It.join(","))
              , r = l(t).map((e=>e.whenBuilt()));
            return e.$ = Dt(e, r, 2e3)
        }
        function kt(e) {
            e.h.reset();
            $t(e, "initial");
            e.h.classList.remove("user-valid");
            e.h.classList.remove("user-invalid");
            var t = e.h.querySelectorAll(".user-valid, .user-invalid");
            $(t, (e=>{
                e.classList.remove("user-valid");
                e.classList.remove("user-invalid")
            }
            ));
            var r = e.h.querySelectorAll(".visible[validation-for]");
            $(r, (e=>{
                e.classList.remove("visible")
            }
            ));
            cr(e.h)
        }
        function Dt(e, t, r) {
            return Promise.race([Promise.all(t), e.Ea.promise(r)])
        }
        function $t(e, t) {
            var r = e.B;
            e.h.classList.remove(`amp-form-${r}`);
            e.h.classList.add(`amp-form-${t}`);
            var i = e.h.querySelector(`[${r}]`);
            if (i) {
                /^[\w-]+$/.test("i-amphtml-rendered");
                if (void 0 !== C)
                    var a = C;
                else {
                    try {
                        var n = i.ownerDocument
                          , s = n.createElement("div")
                          , o = n.createElement("div");
                        s.appendChild(o);
                        a = s.querySelector(":scope div") === o
                    } catch (e) {
                        a = !1
                    }
                    a = C = a
                }
                a ? i = i.querySelector("> [i-amphtml-rendered]".replace(/^|,/g, "$&:scope ")) : (i.classList.add("i-amphtml-scoped"),
                a = "> [i-amphtml-rendered]".replace(/^|,/g, "$&.i-amphtml-scoped "),
                a = i.querySelectorAll(a),
                i.classList.remove("i-amphtml-scoped"),
                i = a,
                i = void 0 === i[0] ? null : i[0]);
                i && i.parentElement && i.parentElement.removeChild(i)
            }
            e.B = t
        }
        function Ut(e, t) {
            Array.isArray(t) && (t = {});
            var r = e.h.querySelector(`[${e.B}]`);
            var a = i();
            if (r) {
                var n = `rendered-message-${e.aa}`;
                r.setAttribute("role", "alert");
                r.setAttribute("aria-labeledby", n);
                r.setAttribute("aria-live", "assertive");
                e.m.hasTemplate(r) ? a = e.K.applySsrOrCsrTemplate(r, t).then((t=>{
                    var i;
                    Array.isArray(t) ? 1 === t.length ? i = t[0] : (i = document.createElement("div"),
                    t.forEach((e=>i.appendChild(e)))) : i = t;
                    i.id = n;
                    i.setAttribute("i-amphtml-rendered", "");
                    return e.ia.mutateElement(r, (()=>{
                        r.appendChild(i);
                        var t = W(e.j, "amp:dom-update", null, {
                            bubbles: !0
                        });
                        r.dispatchEvent(t)
                    }
                    ))
                }
                )) : e.ia.mutateElement(r, (()=>{}
                ))
            }
            return a
        }
        function qt(e, t, r, i) {
            r = W(e.j, `amp-form.${t}`, F({
                response: r
            }));
            e.H.trigger(e.h, t, r, i)
        }
        function Ht(e, t) {
            var r = e.K.isEnabled();
            v(!1 === r, "[amp-form]: viewerRenderTemplate | %s", t)
        }
        function Bt(e, t) {
            Ht(e, "Form analytics not supported");
            var r = F({})
              , i = ue(e.h);
            for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (r["formFields[" + a + "]"] = i[a].join(","));
            r.formId = e.h.id;
            Tt(e.h, t, r)
        }
        function Xt(e) {
            void 0 === et && (et = !!e.j.document.createElement("input").checkValidity);
            if (et) {
                var t = hr(e.h);
                if (e.na)
                    return e.N.report(),
                    t
            }
            return !0
        }
        function Gt(e, t, r) {
            try {
                var a = {
                    form: e.h,
                    actionXhrMutator: e.setXhrAction.bind(e)
                };
                e.ga.fire(a)
            } catch (e) {
                f().error("amp-form", "Form submit service failed: %s", e)
            }
            var n = zt(e)
              , s = e.h.getElementsByClassName("i-amphtml-async-input");
            e.R.onSubmitting();
            if (!e.G && "GET" == e.A) {
                Ht(e, "Non-XHR GETs not supported.");
                Mt(e);
                if (0 === s.length) {
                    for (var o = 0; o < n.length; o++)
                        e.oa.expandInputValueSync(n[o]);
                    Jt(e, !r);
                    e.R.onSubmitSuccess();
                    return i()
                }
                r && r.preventDefault()
            }
            $t(e, "submitting");
            var l = []
              , u = [];
            u.push(Kt(e, n));
            $(s, (t=>{
                var r = Wt(e, t);
                t.classList.contains("i-async-require-action") ? l.push(r) : u.push(r)
            }
            ));
            return Promise.all(l).then((()=>Dt(e, u, 1e4).then((()=>{
                if (e.G)
                    var r = Qt(e, t);
                else
                    "POST" == e.A ? v(!1, "Only XHR based (via action-xhr attribute) submissions are supported for POST requests. %s", e.h) : "GET" == e.A && Jt(e, !0),
                    r = i();
                return r
            }
            ), (r=>Zt(e, r, t)))), (r=>Zt(e, r, t)))
        }
        function zt(e) {
            return e.h.querySelectorAll('[type="hidden"][data-amp-replace]')
        }
        function Jt(e, t) {
            Bt(e, "amp-form-submit");
            t && e.h.submit();
            $t(e, "initial")
        }
        function Kt(e, t) {
            var r = [];
            for (var i = 0; i < t.length; i++)
                r.push(e.oa.expandInputValueAsync(t[i]));
            return Dt(e, r, 100)
        }
        function Wt(e, t) {
            return t.getImpl().then((e=>e.getValue())).then((r=>{
                var i = t.getAttribute("name");
                i = e.h.querySelector(`input[name=${CSS.escape(i)}]`);
                if (!i) {
                    i = F({
                        name: t.getAttribute("name"),
                        hidden: "true"
                    });
                    var a = e.j.document.createElement("input");
                    for (var n in i)
                        a.setAttribute(n, i[n]);
                    i = a
                }
                i.setAttribute("value", r);
                e.h.appendChild(i)
            }
            ))
        }
        function Zt(e, t, r) {
            var i = {};
            t && t.message && (i.error = t.message);
            return Yt(e, t, i, r)
        }
        function Yt(e, t, r, i, a) {
            $t(e, "submit-error");
            p().error("amp-form", "Form submission failed: %s", t);
            return g((()=>{
                Ut(e, r).then((()=>{
                    qt(e, "submit-error", void 0 === a ? r : a, i - 1);
                    e.R.onSubmitError()
                }
                ))
            }
            ))
        }
        function Qt(e, t) {
            var r;
            e.K.isEnabled() ? r = tr(e, t) : (rr(e, t),
            r = e.S(e.G, e.A).then((r=>ir(e, r, t)), (r=>ar(e, r, t))));
            return r
        }
        function er(e) {
            var t = l(e.h.querySelectorAll(`[${CSS.escape("no-verify")}]`)).map((e=>e.name || e.id));
            return e.S(e.Ja, e.A, {
                ["__amp_form_verify"]: !0
            }, t)
        }
        function tr(e, t) {
            var r = ue(e.h);
            return Ut(e, r).then((()=>e.H.trigger(e.h, "submit", null, t))).then((()=>{
                var t = e.requestForFormFetch(e.G, e.A);
                var r = t.fetchOpt || {};
                var i = r.method;
                void 0 === i ? i = "GET" : (i = i.toUpperCase(),
                Ge.includes(i));
                r.method = i;
                r.headers = r.headers || F({});
                t.fetchOpt = r;
                i = t.xhrUrl;
                r = (r = t.fetchOpt) || {};
                var a = e.j;
                a = a.origin || $e(a.location.href).origin;
                i = $e(i).origin;
                a == i && (r.headers = r.headers || {},
                r.headers["AMP-Same-Origin"] = "true");
                t.fetchOpt = r;
                i = e.j;
                r = t.xhrUrl;
                if (!1 !== t.fetchOpt.ampCors) {
                    a = $e(r);
                    a = s(a.search);
                    v(!("__amp_source_origin"in a), "Source origin is not allowed in %s", r);
                    i = i.location.href;
                    "string" == typeof i && (i = $e(i));
                    if (He(i)) {
                        a = i.pathname.split("/");
                        v(Ce[a[1]], "Unknown path prefix in url %s", i.href);
                        var n = a[2]
                          , o = "s" == n ? "https://" + decodeURIComponent(a[3]) : "http://" + decodeURIComponent(n);
                        v(0 < o.indexOf("."), "Expected a . in origin %s", o);
                        a.splice(1, "s" == n ? 3 : 2);
                        a = o + a.join("/");
                        n = (n = i.search) && "?" != n ? (n = n.replace(Fe, "").replace(Me, "").replace(Ne, "").replace(ke, "").replace(De, "").replace(/^[?&]/, "")) ? "?" + n : "" : "";
                        i = a + n + (i.hash || "")
                    } else
                        i = i.href;
                    i = $e(i).origin;
                    i = `${encodeURIComponent("__amp_source_origin")}=${encodeURIComponent(i)}`;
                    r = Ue(r, i, void 0)
                }
                t.xhrUrl = r;
                return e.K.ssr(e.h, t, nr(e))
            }
            )).then((r=>sr(e, r, t)), (r=>{
                var i = {};
                r && r.message && (i.error = r.message);
                return Yt(e, r, i, t)
            }
            ))
        }
        function rr(e, t) {
            Bt(e, "amp-form-submit");
            var r = ue(e.h);
            Ut(e, r).then((()=>{
                e.H.trigger(e.h, "submit", null, t)
            }
            ))
        }
        function ir(e, t, r) {
            return e.fa.xssiJson(t, e.getXssiPrefix()).then((t=>or(e, t, r)), (e=>p().error("amp-form", "Failed to parse response JSON: %s", e))).then((()=>{
                Bt(e, "amp-form-submit-success");
                lr(e, t)
            }
            ))
        }
        function ar(e, t, r) {
            return (t && t.response ? e.fa.xssiJson(t.response, e.getXssiPrefix()).catch((()=>null)) : Promise.resolve(null)).then((i=>{
                Bt(e, "amp-form-submit-error");
                Yt(e, t, i, r);
                lr(e, t.response)
            }
            ))
        }
        function nr(e) {
            var t;
            var r = e.h.querySelector("[submit-success]");
            r && (t = e.m.maybeFindTemplate(r));
            var i;
            var a = e.h.querySelector("[submit-error]");
            a && (i = e.m.maybeFindTemplate(a));
            return {
                successTemplate: t,
                errorTemplate: i
            }
        }
        function sr(e, t, r) {
            var i = t.init;
            var a = Vt(t.body, (e=>p().error("amp-form", "Failed to parse response JSON: %s", e)));
            return i && (i = i.status,
            300 <= i) ? Yt(e, i, t, r, a) : or(e, t, r, a)
        }
        function or(e, t, r, i) {
            $t(e, "submit-success");
            return g((()=>{
                Ut(e, t || {}).then((()=>{
                    qt(e, "submit-success", void 0 === i ? t : i, r - 1);
                    e.R.onSubmitSuccess()
                }
                ))
            }
            ))
        }
        function lr(e, t) {
            Ht(e, "Redirects not supported.");
            if (t && t.headers) {
                var r = t.headers.get("AMP-Redirect-To");
                if (r) {
                    v(!e.xa, "Redirects not supported in AMP4Email.", e.h);
                    v("_blank" != e.Da, "Redirecting to target=_blank using AMP-Redirect-To is currently not supported, use target=_top instead. %s", e.h);
                    try {
                        var i = w(e.h, "url");
                        i.assertAbsoluteHttpOrHttpsUrl(r);
                        i.assertHttpsUrl(r, "AMP-Redirect-To", "Url")
                    } catch (e) {
                        v(!1, "The `AMP-Redirect-To` header value must be an absolute URL starting with https://. Found %s", r)
                    }
                    A(e.h, "navigation").navigateTo(e.j, r, "AMP-Redirect-To")
                }
            }
        }
        var ur = class {
            constructor(e, t) {
                try {
                    mt(e)
                } catch (e) {
                    f().error("amp-form", "form proxy failed to install", e)
                }
                e.__AMP_FORM = this;
                this.aa = t;
                this.J = e.ownerDocument;
                this.j = this.J.defaultView;
                this.Ea = E(this.j, "timer");
                this.oa = w(e, "url-replace");
                this.$ = null;
                this.h = e;
                this.ta = P(this.h);
                this.m = E(this.j, "templates");
                this.fa = E(this.j, "xhr");
                this.H = w(this.h, "action");
                this.ia = q(this.h);
                this.F = A(this.h, "viewer");
                this.K = new Je("amp-form",this.F,this.m);
                this.A = (this.h.getAttribute("method") || "GET").toUpperCase();
                this.Da = this.h.getAttribute("target");
                this.G = Rt(this, "action-xhr");
                this.Ja = Rt(this, "verify-xhr");
                this.wa = Ct(this);
                this.na = !this.h.hasAttribute("novalidate");
                this.h.setAttribute("novalidate", "");
                this.na || this.h.setAttribute("amp-novalidate", "");
                this.h.classList.add("i-amphtml-form");
                this.B = "initial";
                t = this.h.elements;
                for (var r = 0; r < t.length; r++) {
                    var {name: i} = t[r];
                    v("__amp_source_origin" != i && "__amp_form_verify" != i, "Illegal input name, %s found: %s", i, t[r])
                }
                this.R = new Te(this.h,this.j);
                this.N = ct(this.h);
                this.Ga = me(this.h, (()=>jt(this)));
                this.H.addToAllowlist("FORM", ["clear", "submit"], ["email"]);
                this.H.installActionHandler(this.h, this.sa.bind(this));
                this.ba();
                Lt(this);
                Ft(this);
                this.ga = this.Aa = this.Ia = null;
                O(_(e), "form-submit-service").then((e=>{
                    this.ga = e
                }
                ));
                this.xa = this.J && Ot(this.J)
            }
            getXssiPrefix() {
                return this.h.getAttribute("xssi-prefix")
            }
            requestForFormFetch(e, t, r, i) {
                var a, n, s = F({
                    Accept: "application/json"
                });
                if ("GET" == t || "HEAD" == t) {
                    Mt(this);
                    var o = ue(this.h);
                    i && i.forEach((e=>delete o[e]));
                    r && M(o, r);
                    a = Ue(e, qe(o))
                } else {
                    a = e;
                    "application/x-www-form-urlencoded" === this.wa ? (n = qe(ue(this.h)),
                    s = F({
                        Accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded"
                    })) : n = Ae(this.j, this.h);
                    i && i.forEach((e=>n.delete(e)));
                    for (var l in r)
                        n.append(l, r[l])
                }
                return {
                    xhrUrl: a,
                    fetchOpt: F({
                        body: n,
                        method: t,
                        credentials: "include",
                        headers: s
                    })
                }
            }
            setXhrAction(e) {
                this.G = e
            }
            sa(e) {
                if (!e.satisfiesTrust(2))
                    return null;
                if ("submit" == e.method)
                    return Nt(this).then((()=>"submitting" != this.B && Xt(this) ? Gt(this, e.trust, null) : Promise.resolve(null)));
                "clear" === e.method && kt(this);
                return null
            }
            ba() {
                this.ta.whenNextVisible().then((()=>{
                    var e = this.h.querySelector("[autofocus]");
                    if (e)
                        try {
                            e.focus()
                        } catch (e) {}
                }
                ));
                this.h.addEventListener("submit", this.ha.bind(this), !0);
                this.h.addEventListener("blur", (e=>{
                    mr(e.target);
                    this.N.onBlur(e)
                }
                ), !0);
                this.h.addEventListener("amp:form-value-change", (e=>{
                    mr(e.target);
                    this.N.onInput(e)
                }
                ), !0);
                this.K.isEnabled() || this.h.addEventListener("change", (e=>{
                    this.Ga.onCommit().then((t=>{
                        var r = t.errors;
                        t.updatedElements.forEach(mr);
                        this.N.onBlur(e);
                        "verifying" === this.B && (r.length ? ($t(this, "verify-error"),
                        Ut(this, F({
                            verifyErrors: r
                        })).then((()=>{
                            qt(this, "verify-error", r, 2)
                        }
                        ))) : $t(this, "initial"))
                    }
                    ))
                }
                ));
                this.h.addEventListener("input", (e=>{
                    mr(e.target);
                    this.N.onInput(e)
                }
                ))
            }
            ha(e) {
                if ("submitting" == this.B || !Xt(this))
                    return e.stopImmediatePropagation(),
                    e.preventDefault(),
                    Promise.resolve(null);
                (this.G || "POST" == this.A) && e.preventDefault();
                return Gt(this, 3, e)
            }
            S(e, t, r, i) {
                Ht(this, "XHRs should be proxied.");
                e = this.requestForFormFetch(e, t, r, i);
                return this.fa.fetch(e.xhrUrl, e.fetchOpt)
            }
            Ka() {
                return this.Aa
            }
            La() {
                return this.Ia
            }
        }
        ;
        function hr(e) {
            var t = e.querySelectorAll("input,select,textarea,fieldset");
            $(t, (e=>dr(e)));
            return dr(e)
        }
        function cr(e) {
            var t = document.createElement("input");
            for (let i in t.validity) {
                var r = e.querySelectorAll(`.${CSS.escape(i)}`);
                $(r, (e=>{
                    e.classList.remove(i)
                }
                ))
            }
        }
        function dr(e, t=!1) {
            if (!e.checkValidity)
                return !0;
            var r = !1;
            var i = e.classList.contains("user-valid") ? "valid" : e.classList.contains("user-invalid") ? "invalid" : "none";
            var a = e.checkValidity();
            "valid" != i && a ? (e.classList.add("user-valid"),
            e.classList.remove("user-invalid"),
            r = "invalid" == i) : "invalid" == i || a || (e.classList.add("user-invalid"),
            e.classList.remove("user-valid"),
            r = !0);
            if (e.validity)
                for (var n in e.validity)
                    e.classList.toggle(n, e.validity[n]);
            if (t && r) {
                i = D(e);
                for (n = 0; n < i.length; n++)
                    dr(i[n]);
                e.form && dr(e.form)
            }
            return a
        }
        function mr(e) {
            dr(e, !0)
        }
        function pr(e) {
            var t = new b;
            wt(e, t.resolve);
            return t.promise
        }
        function fr(e) {
            return e.whenReady().then((()=>{
                var t = e.getRootNode();
                vr(t.querySelectorAll("form"));
                te(e);
                br(t);
                gr(t)
            }
            ))
        }
        function vr(e) {
            e && $(e, ((e,t)=>{
                e.__AMP_FORM || new ur(e,`amp-form-${t}`)
            }
            ))
        }
        function br(e) {
            e.addEventListener("amp:dom-update", (()=>{
                vr(e.querySelectorAll("form"))
            }
            ))
        }
        function gr(e) {
            e.addEventListener("keydown", (e=>{
                if (!e.defaultPrevented && "Enter" == e.key && (e.ctrlKey || e.metaKey) && "TEXTAREA" === e.target.tagName) {
                    var t = e.target.form
                      , r = t ? t.__AMP_FORM || null : null;
                    r && (r.ha(e),
                    e.preventDefault())
                }
            }
            ))
        }
        var yr = class {
            constructor(e) {
                this.Ha = pr(e).then((()=>fr(e)))
            }
            whenInitialized() {
                return this.Ha
            }
        }
        ;
        (e=>{
            e.registerServiceForDoc("form-submit-service", Ie);
            e.registerServiceForDoc("amp-form", yr)
        }
        )(self.AMP)
    }
});
