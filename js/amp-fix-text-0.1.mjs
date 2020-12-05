(self.AMP = self.AMP || []).push({
    n: "amp-fit-text",
    v: "2010270040000",
    f: function(t, e) {
        var i = self.AMP_CONFIG || {}
          , n = ("string" == typeof i.cdnProxyRegex ? new RegExp(i.cdnProxyRegex) : i.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
        function s(t) {
            if (self.document && self.document.head && (!self.location || !n.test(self.location.origin))) {
                var e = self.document.head.querySelector(`meta[name="${t}"]`);
                e && e.getAttribute("content")
            }
        }
        i.cdnUrl || s("runtime-host");
        i.geoApiUrl || s("amp-geo-api");
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        (function(t) {
            return t || {}
        }
        )({
            c: !0,
            v: !0,
            a: !0,
            ad: !0
        });
        var l;
        var o = "Webkit webkit Moz moz ms O o".split(" ");
        function r(t, e, i) {
            var n = t.style;
            if (!e.startsWith("--")) {
                l || (l = Object.create(null));
                var s = l[e];
                if (!s) {
                    s = e;
                    if (void 0 === n[e]) {
                        var r = e.charAt(0).toUpperCase() + e.slice(1);
                        t: {
                            for (var h = 0; h < o.length; h++) {
                                var a = o[h] + r;
                                if (void 0 !== n[a]) {
                                    r = a;
                                    break t
                                }
                            }
                            r = ""
                        }
                        void 0 !== n[r] && (s = r)
                    }
                    l[e] = s
                }
                e = s
            }
            e && (e.startsWith("--") ? t.style.setProperty(e, i) : t.style[e] = i)
        }
        function h(t, e) {
            for (var i in e)
                r(t, i, e[i])
        }
        function a(t) {
            t = parseFloat(t);
            return "number" === typeof t && isFinite(t) ? t : void 0
        }
        function f(t) {
            var e = t.j.offsetHeight;
            var i = t.l;
            var n = t.j.offsetWidth;
            var s = t.o
              , l = t.m;
            for (l++; 1 < l - s; ) {
                var o = Math.floor((s + l) / 2);
                r(i, "fontSize", `${o}px`);
                var a = i.offsetWidth;
                i.offsetHeight > e || a > n ? l = o : s = o
            }
            n = s;
            r(t.h, "fontSize", `${n}px`);
            i = t.h;
            t = t.l;
            r(t, "fontSize", `${n}px`);
            t = t.offsetHeight > e;
            n *= 1.15;
            s = Math.floor(e / n);
            i.classList.toggle("i-amphtml-fit-text-content-overflown", t);
            h(i, {
                lineClamp: t ? s : "",
                maxHeight: t ? `${n * s}px` : ""
            })
        }
        var m = class extends t.BaseElement {
            constructor(t) {
                super(t);
                this.l = this.h = this.j = null;
                this.m = this.o = -1;
                this.w = ""
            }
            isLayoutSupported(t) {
                return "fixed" == t || "fixed-height" == t || "responsive" == t || "fill" == t || "flex-item" == t || "fluid" == t || "intrinsic" == t
            }
            buildCallback() {
                this.j = this.element.ownerDocument.createElement("div");
                this.applyFillContent(this.j);
                this.j.classList.add("i-amphtml-fit-text-content");
                h(this.j, {
                    zIndex: 2
                });
                this.h = this.element.ownerDocument.createElement("div");
                h(this.h, {
                    lineHeight: "1.15em"
                });
                this.j.appendChild(this.h);
                this.l = this.element.ownerDocument.createElement("div");
                h(this.l, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    visibility: "hidden",
                    lineHeight: "1.15em"
                });
                this.getRealChildNodes().forEach((t=>{
                    this.h.appendChild(t)
                }
                ));
                this.l.innerHTML = this.h.innerHTML;
                this.element.appendChild(this.j);
                this.element.appendChild(this.l);
                this.o = a(this.element.getAttribute("min-font-size")) || 6;
                this.m = a(this.element.getAttribute("max-font-size")) || 72;
                Object.defineProperty(this.element, "textContent", {
                    set: t=>{
                        this.w = t;
                        this.mutateElement((()=>{
                            this.h.textContent = t;
                            this.l.innerHTML = this.h.innerHTML;
                            f(this)
                        }
                        ))
                    }
                    ,
                    get: ()=>this.w || this.h.textContent
                })
            }
            prerenderAllowed() {
                return !0
            }
            isRelayoutNeeded() {
                return !0
            }
            layoutCallback() {
                return this.mutateElement((()=>{
                    f(this)
                }
                ))
            }
        }
        ;
        (t=>{
            t.registerElement("amp-fit-text", m, ".i-amphtml-fit-text-content,.i-amphtml-fit-text-content.i-amphtml-fill-content{display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:center;justify-content:center}.i-amphtml-fit-text-content-overflown{display:block;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}\n/*# sourceURL=/extensions/amp-fit-text/0.1/amp-fit-text.css*/")
        }
        )(self.AMP)
    }
});
