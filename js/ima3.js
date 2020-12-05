// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var l, aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    , ca = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }, da = ca(this), q = function(a, b) {
        if (b)
            a: {
                var c = da;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c))
                        break a;
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    };
    q("Symbol", function(a) {
        if (a)
            return a;
        var b = function(e, f) {
            this.g = e;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: f
            })
        };
        b.prototype.toString = function() {
            return this.g
        }
        ;
        var c = 0
          , d = function(e) {
            if (this instanceof d)
                throw new TypeError("Symbol is not a constructor");
            return new b("jscomp_symbol_" + (e || "") + "_" + c++,e)
        };
        return d
    });
    q("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    var ea = function(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }, r = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }, fa = function(a) {
        if (!(a instanceof Array)) {
            a = r(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }, ha = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , ia = function() {
        function a() {
            function c() {}
            new c;
            Reflect.construct(c, [], function() {});
            return new c instanceof c
        }
        if ("undefined" != typeof Reflect && Reflect.construct) {
            if (a())
                return Reflect.construct;
            var b = Reflect.construct;
            return function(c, d, e) {
                c = b(c, d);
                e && Reflect.setPrototypeOf(c, e.prototype);
                return c
            }
        }
        return function(c, d, e) {
            void 0 === e && (e = c);
            e = ha(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c, e, d) || e
        }
    }(), ka;
    if ("function" == typeof Object.setPrototypeOf)
        ka = Object.setPrototypeOf;
    else {
        var la;
        a: {
            var na = {
                Ud: !0
            }
              , oa = {};
            try {
                oa.__proto__ = na;
                la = oa.Ud;
                break a
            } catch (a) {}
            la = !1
        }
        ka = la ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var pa = ka
      , t = function(a, b) {
        a.prototype = ha(b.prototype);
        a.prototype.constructor = a;
        if (pa)
            pa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Ca = b.prototype
    }
      , qa = function() {
        this.A = !1;
        this.h = null;
        this.H = void 0;
        this.g = 1;
        this.J = this.o = 0;
        this.l = null
    }
      , ra = function(a) {
        if (a.A)
            throw new TypeError("Generator is already running");
        a.A = !0
    };
    qa.prototype.B = function(a) {
        this.H = a
    }
    ;
    var sa = function(a, b) {
        a.l = {
            ge: b,
            Be: !0
        };
        a.g = a.o || a.J
    };
    qa.prototype.return = function(a) {
        this.l = {
            return: a
        };
        this.g = this.J
    }
    ;
    var ta = function(a, b, c) {
        a.g = c;
        return {
            value: b
        }
    }
      , ua = function(a) {
        this.g = new qa;
        this.h = a
    }
      , xa = function(a, b) {
        ra(a.g);
        var c = a.g.h;
        if (c)
            return va(a, "return"in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }
            , b, a.g.return);
        a.g.return(b);
        return wa(a)
    }
      , va = function(a, b, c, d) {
        try {
            var e = b.call(a.g.h, c);
            if (!(e instanceof Object))
                throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done)
                return a.g.A = !1,
                e;
            var f = e.value
        } catch (g) {
            return a.g.h = null,
            sa(a.g, g),
            wa(a)
        }
        a.g.h = null;
        d.call(a.g, f);
        return wa(a)
    }
      , wa = function(a) {
        for (; a.g.g; )
            try {
                var b = a.h(a.g);
                if (b)
                    return a.g.A = !1,
                    {
                        value: b.value,
                        done: !1
                    }
            } catch (c) {
                a.g.H = void 0,
                sa(a.g, c)
            }
        a.g.A = !1;
        if (a.g.l) {
            b = a.g.l;
            a.g.l = null;
            if (b.Be)
                throw b.ge;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
      , ya = function(a) {
        this.next = function(b) {
            ra(a.g);
            a.g.h ? b = va(a, a.g.h.next, b, a.g.B) : (a.g.B(b),
            b = wa(a));
            return b
        }
        ;
        this.throw = function(b) {
            ra(a.g);
            a.g.h ? b = va(a, a.g.h["throw"], b, a.g.B) : (sa(a.g, b),
            b = wa(a));
            return b
        }
        ;
        this.return = function(b) {
            return xa(a, b)
        }
        ;
        this[Symbol.iterator] = function() {
            return this
        }
    }
      , za = function(a) {
        function b(d) {
            return a.next(d)
        }
        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        }
        )
    }
      , Aa = function(a) {
        return za(new ya(new ua(a)))
    };
    q("Reflect", function(a) {
        return a ? a : {}
    });
    q("Reflect.construct", function() {
        return ia
    });
    q("Reflect.setPrototypeOf", function(a) {
        return a ? a : pa ? function(b, c) {
            try {
                return pa(b, c),
                !0
            } catch (d) {
                return !1
            }
        }
        : null
    });
    q("Promise", function(a) {
        function b() {
            this.g = null
        }
        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            }
            )
        }
        if (a)
            return a;
        b.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.l(function() {
                    h.A()
                })
            }
            this.g.push(g)
        }
        ;
        var d = da.setTimeout;
        b.prototype.l = function(g) {
            d(g, 0)
        }
        ;
        b.prototype.A = function() {
            for (; this.g && this.g.length; ) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (n) {
                        this.o(n)
                    }
                }
            }
            this.g = null
        }
        ;
        b.prototype.o = function(g) {
            this.l(function() {
                throw g;
            })
        }
        ;
        var e = function(g) {
            this.g = 0;
            this.l = void 0;
            this.h = [];
            this.H = !1;
            var h = this.o();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.o = function() {
            function g(n) {
                return function(m) {
                    k || (k = !0,
                    n.call(h, m))
                }
            }
            var h = this
              , k = !1;
            return {
                resolve: g(this.K),
                reject: g(this.A)
            }
        }
        ;
        e.prototype.K = function(g) {
            if (g === this)
                this.A(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e)
                this.M(g);
            else {
                a: switch (typeof g) {
                case "object":
                    var h = null != g;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
                }
                h ? this.I(g) : this.B(g)
            }
        }
        ;
        e.prototype.I = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.A(k);
                return
            }
            "function" == typeof h ? this.N(h, g) : this.B(g)
        }
        ;
        e.prototype.A = function(g) {
            this.J(2, g)
        }
        ;
        e.prototype.B = function(g) {
            this.J(1, g)
        }
        ;
        e.prototype.J = function(g, h) {
            if (0 != this.g)
                throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.l = h;
            2 === this.g && this.L();
            this.D()
        }
        ;
        e.prototype.L = function() {
            var g = this;
            d(function() {
                if (g.G()) {
                    var h = da.console;
                    "undefined" !== typeof h && h.error(g.l)
                }
            }, 1)
        }
        ;
        e.prototype.G = function() {
            if (this.H)
                return !1;
            var g = da.CustomEvent
              , h = da.Event
              , k = da.dispatchEvent;
            if ("undefined" === typeof k)
                return !0;
            "function" === typeof g ? g = new g("unhandledrejection",{
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection",{
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"),
            g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.l;
            return k(g)
        }
        ;
        e.prototype.D = function() {
            if (null != this.h) {
                for (var g = 0; g < this.h.length; ++g)
                    f.h(this.h[g]);
                this.h = null
            }
        }
        ;
        var f = new b;
        e.prototype.M = function(g) {
            var h = this.o();
            g.Bb(h.resolve, h.reject)
        }
        ;
        e.prototype.N = function(g, h) {
            var k = this.o();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (n) {
                k.reject(n)
            }
        }
        ;
        e.prototype.then = function(g, h) {
            function k(p, w) {
                return "function" == typeof p ? function(x) {
                    try {
                        n(p(x))
                    } catch (A) {
                        m(A)
                    }
                }
                : w
            }
            var n, m, u = new e(function(p, w) {
                n = p;
                m = w
            }
            );
            this.Bb(k(g, n), k(h, m));
            return u
        }
        ;
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        }
        ;
        e.prototype.Bb = function(g, h) {
            function k() {
                switch (n.g) {
                case 1:
                    g(n.l);
                    break;
                case 2:
                    h(n.l);
                    break;
                default:
                    throw Error("Unexpected state: " + n.g);
                }
            }
            var n = this;
            null == this.h ? f.h(k) : this.h.push(k);
            this.H = !0
        }
        ;
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            }
            )
        }
        ;
        e.race = function(g) {
            return new e(function(h, k) {
                for (var n = r(g), m = n.next(); !m.done; m = n.next())
                    c(m.value).Bb(h, k)
            }
            )
        }
        ;
        e.all = function(g) {
            var h = r(g)
              , k = h.next();
            return k.done ? c([]) : new e(function(n, m) {
                function u(x) {
                    return function(A) {
                        p[x] = A;
                        w--;
                        0 == w && n(p)
                    }
                }
                var p = []
                  , w = 0;
                do
                    p.push(void 0),
                    w++,
                    c(k.value).Bb(u(p.length - 1), m),
                    k = h.next();
                while (!k.done)
            }
            )
        }
        ;
        return e
    });
    q("Object.setPrototypeOf", function(a) {
        return a || pa
    });
    var Ba = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
      , Ca = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    Ba(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    q("Object.assign", function(a) {
        return a || Ca
    });
    var Da = function(a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    q("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;
                d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    q("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Da(this, null, "repeat");
            if (0 > b || 1342177279 < b)
                throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; )
                if (b & 1 && (d += c),
                b >>>= 1)
                    c += c;
            return d
        }
    });
    var Ea = function(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        e[Symbol.iterator] = function() {
            return e
        }
        ;
        return e
    };
    q("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ea(this, function(b, c) {
                return [b, c]
            })
        }
    });
    q("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ea(this, function(b) {
                return b
            })
        }
    });
    q("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ea(this, function(b, c) {
                return c
            })
        }
    });
    q("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    q("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b))
                    return !0
            }
            return !1
        }
    });
    q("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Da(this, b, "includes").indexOf(b, c || 0)
        }
    });
    q("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                Ba(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    q("WeakMap", function(a) {
        function b() {}
        function c(k) {
            var n = typeof k;
            return "object" === n && null !== k || "function" === n
        }
        function d(k) {
            if (!Ba(k, f)) {
                var n = new b;
                ba(k, f, {
                    value: n
                })
            }
        }
        function e(k) {
            var n = Object[k];
            n && (Object[k] = function(m) {
                if (m instanceof b)
                    return m;
                Object.isExtensible(m) && d(m);
                return n(m)
            }
            )
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var k = Object.seal({})
                  , n = Object.seal({})
                  , m = new a([[k, 2], [n, 3]]);
                if (2 != m.get(k) || 3 != m.get(n))
                    return !1;
                m.delete(k);
                m.set(n, 4);
                return !m.has(k) && 4 == m.get(n)
            } catch (u) {
                return !1
            }
        }())
            return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0
          , h = function(k) {
            this.g = (g += Math.random() + 1).toString();
            if (k) {
                k = r(k);
                for (var n; !(n = k.next()).done; )
                    n = n.value,
                    this.set(n[0], n[1])
            }
        };
        h.prototype.set = function(k, n) {
            if (!c(k))
                throw Error("Invalid WeakMap key");
            d(k);
            if (!Ba(k, f))
                throw Error("WeakMap key fail: " + k);
            k[f][this.g] = n;
            return this
        }
        ;
        h.prototype.get = function(k) {
            return c(k) && Ba(k, f) ? k[f][this.g] : void 0
        }
        ;
        h.prototype.has = function(k) {
            return c(k) && Ba(k, f) && Ba(k[f], this.g)
        }
        ;
        h.prototype.delete = function(k) {
            return c(k) && Ba(k, f) && Ba(k[f], this.g) ? delete k[f][this.g] : !1
        }
        ;
        return h
    });
    q("Map", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var h = Object.seal({
                    x: 4
                })
                  , k = new a(r([[h, "s"]]));
                if ("s" != k.get(h) || 1 != k.size || k.get({
                    x: 4
                }) || k.set({
                    x: 4
                }, "t") != k || 2 != k.size)
                    return !1;
                var n = k.entries()
                  , m = n.next();
                if (m.done || m.value[0] != h || "s" != m.value[1])
                    return !1;
                m = n.next();
                return m.done || 4 != m.value[0].x || "t" != m.value[1] || !n.next().done ? !1 : !0
            } catch (u) {
                return !1
            }
        }())
            return a;
        var b = new WeakMap
          , c = function(h) {
            this.h = {};
            this.g = f();
            this.size = 0;
            if (h) {
                h = r(h);
                for (var k; !(k = h.next()).done; )
                    k = k.value,
                    this.set(k[0], k[1])
            }
        };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var n = d(this, h);
            n.list || (n.list = this.h[n.id] = []);
            n.oa ? n.oa.value = k : (n.oa = {
                next: this.g,
                Ha: this.g.Ha,
                head: this.g,
                key: h,
                value: k
            },
            n.list.push(n.oa),
            this.g.Ha.next = n.oa,
            this.g.Ha = n.oa,
            this.size++);
            return this
        }
        ;
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.oa && h.list ? (h.list.splice(h.index, 1),
            h.list.length || delete this.h[h.id],
            h.oa.Ha.next = h.oa.next,
            h.oa.next.Ha = h.oa.Ha,
            h.oa.head = null,
            this.size--,
            !0) : !1
        }
        ;
        c.prototype.clear = function() {
            this.h = {};
            this.g = this.g.Ha = f();
            this.size = 0
        }
        ;
        c.prototype.has = function(h) {
            return !!d(this, h).oa
        }
        ;
        c.prototype.get = function(h) {
            return (h = d(this, h).oa) && h.value
        }
        ;
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        }
        ;
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        }
        ;
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        }
        ;
        c.prototype.forEach = function(h, k) {
            for (var n = this.entries(), m; !(m = n.next()).done; )
                m = m.value,
                h.call(k, m[1], m[0], this)
        }
        ;
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
            var n = k && typeof k;
            "object" == n || "function" == n ? b.has(k) ? n = b.get(k) : (n = "" + ++g,
            b.set(k, n)) : n = "p_" + k;
            var m = h.h[n];
            if (m && Ba(h.h, n))
                for (h = 0; h < m.length; h++) {
                    var u = m[h];
                    if (k !== k && u.key !== u.key || k === u.key)
                        return {
                            id: n,
                            list: m,
                            index: h,
                            oa: u
                        }
                }
            return {
                id: n,
                list: m,
                index: -1,
                oa: void 0
            }
        }
          , e = function(h, k) {
            var n = h.g;
            return ea(function() {
                if (n) {
                    for (; n.head != h.g; )
                        n = n.Ha;
                    for (; n.next != n.head; )
                        return n = n.next,
                        {
                            done: !1,
                            value: k(n)
                        };
                    n = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
          , f = function() {
            var h = {};
            return h.Ha = h.next = h.head = h
        }
          , g = 0;
        return c
    });
    q("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
                return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    q("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e)
                d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++)
                this[c] = b;
            return this
        }
    });
    var Fa = function(a) {
        return a ? a : Array.prototype.fill
    };
    q("Int8Array.prototype.fill", Fa);
    q("Uint8Array.prototype.fill", Fa);
    q("Uint8ClampedArray.prototype.fill", Fa);
    q("Int16Array.prototype.fill", Fa);
    q("Uint16Array.prototype.fill", Fa);
    q("Int32Array.prototype.fill", Fa);
    q("Uint32Array.prototype.fill", Fa);
    q("Float32Array.prototype.fill", Fa);
    q("Float64Array.prototype.fill", Fa);
    q("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Da(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    });
    var Ga = Ga || {}
      , v = this || self
      , y = function(a, b, c) {
        a = a.split(".");
        c = c || v;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
      , Ja = function(a) {
        if (a && a != v)
            return Ha(a.document);
        null === Ia && (Ia = Ha(v.document));
        return Ia
    }
      , Ka = /^[\w+/_-]+[=]{0,2}$/
      , Ia = null
      , Ha = function(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Ka.test(a) ? a : ""
    }
      , La = function(a, b) {
        a = a.split(".");
        b = b || v;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]],
            null == b)
                return null;
        return b
    }
      , Ma = function() {}
      , Na = function(a) {
        a.rc = void 0;
        a.C = function() {
            return a.rc ? a.rc : a.rc = new a
        }
    }
      , Oa = function(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }
      , Pa = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
      , Sa = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Qa) && a[Qa] || (a[Qa] = ++Ra)
    }
      , Ta = function(a) {
        null !== a && "removeAttribute"in a && a.removeAttribute(Qa);
        try {
            delete a[Qa]
        } catch (b) {}
    }
      , Qa = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , Ra = 0
      , Ua = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
      , Va = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
      , Wa = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Wa = Ua : Wa = Va;
        return Wa.apply(null, arguments)
    }
      , Xa = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
      , z = function() {
        return Date.now()
    }
      , B = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ca = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Vg = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }
      , Ya = function(a) {
        return a
    };
    function Za(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, Za);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    B(Za, Error);
    Za.prototype.name = "CustomError";
    var $a;
    var ab = function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , C = function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    };
    function bb(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d)
            d in c && b.call(void 0, c[d], d, a)
    }
    var cb = function(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
      , db = function(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
      , eb = function(a, b, c) {
        var d = c;
        C(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }
      , fb = function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    };
    function gb(a, b) {
        b = ib(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function ib(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return f;
        return -1
    }
    function jb(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
            if (d in c && b.call(void 0, c[d], d, a))
                return d;
        return -1
    }
    function kb(a, b) {
        return 0 <= ab(a, b)
    }
    function nb(a, b) {
        b = ab(a, b);
        var c;
        (c = 0 <= b) && ob(a, b);
        return c
    }
    function ob(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    }
    function pb(a, b) {
        var c = 0;
        bb(a, function(d, e) {
            b.call(void 0, d, e, a) && ob(a, e) && c++
        })
    }
    function qb(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function rb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function sb(a) {
        for (var b = {}, c = 0, d = 0; d < a.length; ) {
            var e = a[d++];
            var f = e;
            f = Pa(f) ? "o" + Sa(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0,
            a[c++] = e)
        }
        a.length = c
    }
    function tb(a, b) {
        a.sort(b || ub)
    }
    function ub(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function vb(a, b) {
        for (var c = [], d = 0; d < b; d++)
            c[d] = a;
        return c
    }
    ;var wb = function(a) {
        return db(a, function(b) {
            b = b.toString(16);
            return 1 < b.length ? b : "0" + b
        }).join("")
    };
    var xb = function(a) {
        return function() {
            return a
        }
    }
      , yb = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
      , zb = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    }
      , Ab = function(a) {
        var b = 0
          , c = !1
          , d = []
          , e = function() {
            b = 0;
            c && (c = !1,
            f())
        }
          , f = function() {
            b = v.setTimeout(e, 1E3);
            a.apply(void 0, d)
        };
        return function(g) {
            d = arguments;
            b ? c = !0 : f()
        }
    };
    var Bb = function(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
      , Cb = function(a, b) {
        var c = {}, d;
        for (d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
      , Eb = function(a) {
        var b = Db, c;
        for (c in b)
            if (a.call(void 0, b[c], c, b))
                return !0;
        return !1
    }
      , Gb = function(a) {
        var b = Fb, c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b))
                return !1;
        return !0
    }
      , Hb = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
      , Ib = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
      , Jb = function(a, b) {
        var c = Oa(b)
          , d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (null == a)
                return;
            a = a[d[c]]
        }
        return a
    }
      , Kb = function(a, b) {
        return null !== a && b in a
    }
      , Lb = function(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
      , Nb = function(a) {
        var b = Mb, c;
        for (c in b)
            if (a.call(void 0, b[c], c, b))
                return c
    }
      , Ob = function(a) {
        for (var b in a)
            return !1;
        return !0
    }
      , Pb = function(a) {
        for (var b in a)
            delete a[b]
    }
      , Qb = function(a, b, c) {
        return null !== a && b in a ? a[b] : c
    }
      , Rb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
      , Sb = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < Rb.length; f++)
                c = Rb[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Tb, Ub = function() {
        if (void 0 === Tb) {
            var a = null
              , b = v.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ya,
                        createScript: Ya,
                        createScriptURL: Ya
                    })
                } catch (c) {
                    v.console && v.console.error(c.message)
                }
                Tb = a
            } else
                Tb = a
        }
        return Tb
    };
    var Xb = function(a, b) {
        this.g = a === Vb && b || "";
        this.h = Wb
    };
    Xb.prototype.Na = !0;
    Xb.prototype.Ea = function() {
        return this.g
    }
    ;
    var Yb = function(a) {
        return a instanceof Xb && a.constructor === Xb && a.h === Wb ? a.g : "type_error:Const"
    }
      , Zb = function(a) {
        return new Xb(Vb,a)
    }
      , Wb = {}
      , Vb = {};
    var ac = function(a, b) {
        this.g = b === $b ? a : ""
    };
    ac.prototype.Na = !0;
    ac.prototype.Ea = function() {
        return this.g.toString()
    }
    ;
    ac.prototype.cc = !0;
    ac.prototype.ac = function() {
        return 1
    }
    ;
    var bc = function(a) {
        return a instanceof ac && a.constructor === ac ? a.g : "type_error:TrustedResourceUrl"
    }
      , $b = {}
      , cc = function(a) {
        var b = Ub();
        a = b ? b.createScriptURL(a) : a;
        return new ac(a,$b)
    };
    var dc = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
      , ec = function(a) {
        return /^[\s\xa0]*$/.test(a)
    }
      , fc = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
      , oc = function(a, b) {
        if (b)
            a = a.replace(gc, "&amp;").replace(hc, "&lt;").replace(ic, "&gt;").replace(jc, "&quot;").replace(kc, "&#39;").replace(mc, "&#0;");
        else {
            if (!nc.test(a))
                return a;
            -1 != a.indexOf("&") && (a = a.replace(gc, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(hc, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(ic, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(jc, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(kc, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(mc, "&#0;"))
        }
        return a
    }
      , gc = /&/g
      , hc = /</g
      , ic = />/g
      , jc = /"/g
      , kc = /'/g
      , mc = /\x00/g
      , nc = /[\x00&<>"']/
      , pc = function(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }
      , rc = function(a, b) {
        var c = 0;
        a = fc(String(a)).split(".");
        b = fc(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || ""
              , g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length)
                    break;
                c = qc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || qc(0 == f[2].length, 0 == g[2].length) || qc(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }
      , qc = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var tc = function(a, b) {
        this.g = b === sc ? a : ""
    };
    tc.prototype.Na = !0;
    tc.prototype.Ea = function() {
        return this.g.toString()
    }
    ;
    tc.prototype.cc = !0;
    tc.prototype.ac = function() {
        return 1
    }
    ;
    var uc = function(a) {
        return a instanceof tc && a.constructor === tc ? a.g : "type_error:SafeUrl"
    }
      , vc = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i
      , wc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i
      , xc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
      , yc = function(a) {
        if (a instanceof tc)
            return a;
        a = "object" == typeof a && a.Na ? a.Ea() : String(a);
        xc.test(a) || (a = "about:invalid#zClosurez");
        return new tc(a,sc)
    }
      , sc = {}
      , zc = new tc("about:invalid#zClosurez",sc);
    var Bc = function(a, b) {
        this.g = b === Ac ? a : ""
    };
    Bc.prototype.Na = !0;
    Bc.prototype.Ea = function() {
        return this.g
    }
    ;
    var Ac = {}
      , Cc = new Bc("",Ac);
    var Dc;
    a: {
        var Ec = v.navigator;
        if (Ec) {
            var Fc = Ec.userAgent;
            if (Fc) {
                Dc = Fc;
                break a
            }
        }
        Dc = ""
    }
    var D = function(a) {
        return -1 != Dc.indexOf(a)
    };
    var Gc = function() {
        return D("Trident") || D("MSIE")
    }
      , Hc = function() {
        return D("Firefox") || D("FxiOS")
    }
      , Jc = function() {
        return D("Safari") && !(Ic() || D("Coast") || D("Opera") || D("Edge") || D("Edg/") || D("OPR") || Hc() || D("Silk") || D("Android"))
    }
      , Ic = function() {
        return (D("Chrome") || D("CriOS")) && !D("Edge")
    };
    var Lc = function(a, b, c) {
        this.g = c === Kc ? a : "";
        this.h = b
    };
    Lc.prototype.cc = !0;
    Lc.prototype.ac = function() {
        return this.h
    }
    ;
    Lc.prototype.Na = !0;
    Lc.prototype.Ea = function() {
        return this.g.toString()
    }
    ;
    var Mc = function(a) {
        return a instanceof Lc && a.constructor === Lc ? a.g : "type_error:SafeHtml"
    }
      , Kc = {}
      , Nc = function(a, b) {
        var c = Ub();
        a = c ? c.createHTML(a) : a;
        return new Lc(a,b,Kc)
    }
      , Oc = new Lc(v.trustedTypes && v.trustedTypes.emptyHTML || "",0,Kc);
    var Pc = yb(function() {
        var a = document.createElement("div")
          , b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Mc(Oc);
        return !b.parentElement
    })
      , Qc = function(a, b) {
        if (Pc())
            for (; a.lastChild; )
                a.removeChild(a.lastChild);
        a.innerHTML = Mc(b)
    }
      , Rc = function(a, b) {
        a.src = bc(b);
        (b = Ja(a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)
    };
    var Sc = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }
      , Tc = function(a) {
        return a = oc(a, void 0)
    }
      , Uc = function(a, b) {
        a.length > b && (a = a.substring(0, b - 3) + "...");
        return a
    }
      , Vc = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    }
    : function(a, b) {
        return Array(b + 1).join(a)
    }
      , Wc = function(a) {
        return null == a ? "" : String(a)
    }
      , Xc = 2147483648 * Math.random() | 0
      , Yc = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
      , Zc = function() {
        return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase()
    }
      , $c = function(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
      , ad = function(a) {
        isFinite(a) && (a = String(a));
        return "string" === typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
    };
    var bd = 0
      , cd = 0;
    var dd = function() {
        this.g = []
    };
    dd.prototype.length = function() {
        return this.g.length
    }
    ;
    var ed = function(a) {
        var b = a.g;
        a.g = [];
        return b
    }
      , fd = function(a, b) {
        for (; 127 < b; )
            a.g.push(b & 127 | 128),
            b >>>= 7;
        a.g.push(b)
    }
      , gd = function(a, b) {
        a.g.push(b >>> 0 & 255);
        a.g.push(b >>> 8 & 255);
        a.g.push(b >>> 16 & 255);
        a.g.push(b >>> 24 & 255)
    };
    var hd = function() {
        return D("iPhone") && !D("iPod") && !D("iPad")
    }
      , id = function() {
        return hd() || D("iPad") || D("iPod")
    };
    var jd = function(a) {
        jd[" "](a);
        return a
    };
    jd[" "] = Ma;
    var kd = function(a, b) {
        try {
            return jd(a[b]),
            !0
        } catch (c) {}
        return !1
    }
      , md = function(a, b) {
        var c = ld;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var nd = D("Opera"), od = Gc(), pd = D("Edge"), qd = D("Gecko") && !(pc(Dc, "WebKit") && !D("Edge")) && !(D("Trident") || D("MSIE")) && !D("Edge"), sd = pc(Dc, "WebKit") && !D("Edge"), td = D("Macintosh"), ud = D("Android"), vd = hd(), wd = D("iPad"), xd = D("iPod"), yd = id(), zd = function() {
        var a = v.document;
        return a ? a.documentMode : void 0
    }, Ad;
    a: {
        var Bd = ""
          , Cd = function() {
            var a = Dc;
            if (qd)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (pd)
                return /Edge\/([\d\.]+)/.exec(a);
            if (od)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (sd)
                return /WebKit\/(\S+)/.exec(a);
            if (nd)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Cd && (Bd = Cd ? Cd[1] : "");
        if (od) {
            var Dd = zd();
            if (null != Dd && Dd > parseFloat(Bd)) {
                Ad = String(Dd);
                break a
            }
        }
        Ad = Bd
    }
    var Ed = Ad, ld = {}, Fd = function(a) {
        return md(a, function() {
            return 0 <= rc(Ed, a)
        })
    }, Gd;
    if (v.document && od) {
        var Hd = zd();
        Gd = Hd ? Hd : parseInt(Ed, 10) || void 0
    } else
        Gd = void 0;
    var Id = Gd;
    var Jd = Hc()
      , Kd = hd() || D("iPod")
      , Ld = D("iPad")
      , Md = D("Android") && !(Ic() || Hc() || D("Opera") || D("Silk"))
      , Nd = Ic()
      , Od = Jc() && !id();
    var Pd = {}
      , Qd = null
      , Sd = function(a, b) {
        void 0 === b && (b = 0);
        Rd();
        b = Pd[b];
        for (var c = [], d = 0; d < a.length; d += 3) {
            var e = a[d]
              , f = d + 1 < a.length
              , g = f ? a[d + 1] : 0
              , h = d + 2 < a.length
              , k = h ? a[d + 2] : 0
              , n = e >> 2;
            e = (e & 3) << 4 | g >> 4;
            g = (g & 15) << 2 | k >> 6;
            k &= 63;
            h || (k = 64,
            f || (g = 64));
            c.push(b[n], b[e], b[g] || "", b[k] || "")
        }
        return c.join("")
    }
      , Td = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        return Sd(b, 3)
    }
      , Vd = function(a) {
        var b = [];
        Ud(a, function(c) {
            b.push(c)
        });
        return b
    }
      , Ud = function(a, b) {
        function c(k) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , m = Qd[n];
                if (null != m)
                    return m;
                if (!ec(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return k
        }
        Rd();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , g = c(64)
              , h = c(64);
            if (64 === h && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2),
            64 != h && b(g << 6 & 192 | h))
        }
    }
      , Rd = function() {
        if (!Qd) {
            Qd = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Pd[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Qd[f] && (Qd[f] = e)
                }
            }
        }
    };
    var Wd = function() {
        this.h = [];
        this.l = 0;
        this.g = new dd
    };
    Wd.prototype.reset = function() {
        this.h = [];
        ed(this.g);
        this.l = 0
    }
    ;
    var Xd = function(a, b, c) {
        if (null != c && null != c) {
            fd(a.g, 8 * b);
            a = a.g;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0,
            b = (~b >>> 0) + 1,
            4294967295 < b && (b = 0,
            d++,
            4294967295 < d && (d = 0)));
            bd = b;
            cd = d;
            c = bd;
            for (b = cd; 0 < b || 127 < c; )
                a.g.push(c & 127 | 128),
                c = (c >>> 7 | b << 25) >>> 0,
                b >>>= 7;
            a.g.push(c)
        }
    };
    var Yd = function() {}
      , Zd = "function" == typeof Uint8Array
      , ce = function(a, b, c, d) {
        a.g = null;
        b || (b = []);
        a.H = void 0;
        a.l = -1;
        a.ia = b;
        a: {
            if (b = a.ia.length) {
                --b;
                var e = a.ia[b];
                if (!(null === e || "object" != typeof e || Array.isArray(e) || Zd && e instanceof Uint8Array)) {
                    a.o = b - a.l;
                    a.h = e;
                    break a
                }
            }
            a.o = Number.MAX_VALUE
        }
        a.B = {};
        if (c)
            for (b = 0; b < c.length; b++)
                e = c[b],
                e < a.o ? (e += a.l,
                a.ia[e] = a.ia[e] || $d) : (ae(a),
                a.h[e] = a.h[e] || $d);
        if (d && d.length)
            for (b = 0; b < d.length; b++)
                be(a, d[b])
    }
      , $d = []
      , ae = function(a) {
        var b = a.o + a.l;
        a.ia[b] || (a.h = a.ia[b] = {})
    }
      , E = function(a, b) {
        if (b < a.o) {
            b += a.l;
            var c = a.ia[b];
            return c !== $d ? c : a.ia[b] = []
        }
        if (a.h)
            return c = a.h[b],
            c === $d ? a.h[b] = [] : c
    }
      , de = function(a, b) {
        a = E(a, b);
        return null == a ? a : !!a
    }
      , ee = function(a, b, c) {
        a = E(a, b);
        return null == a ? c : a
    }
      , fe = function(a, b) {
        var c = void 0 === c ? !1 : c;
        a = de(a, b);
        return null == a ? c : a
    }
      , ge = function(a, b) {
        var c = void 0 === c ? 0 : c;
        a = E(a, b);
        a = null == a ? a : +a;
        return null == a ? c : a
    }
      , he = function(a, b, c) {
        b < a.o ? a.ia[b + a.l] = c : (ae(a),
        a.h[b] = c);
        return a
    }
      , ie = function(a, b, c, d) {
        c !== d ? he(a, b, c) : b < a.o ? a.ia[b + a.l] = null : (ae(a),
        delete a.h[b]);
        return a
    }
      , be = function(a, b) {
        for (var c, d, e = 0; e < b.length; e++) {
            var f = b[e]
              , g = E(a, f);
            null != g && (c = f,
            d = g,
            he(a, f, void 0))
        }
        return c ? (he(a, c, d),
        c) : 0
    }
      , je = function(a, b, c) {
        a.g || (a.g = {});
        if (!a.g[c]) {
            var d = E(a, c);
            d && (a.g[c] = new b(d))
        }
        return a.g[c]
    }
      , ke = function(a, b, c) {
        a.g || (a.g = {});
        if (!a.g[c]) {
            for (var d = E(a, c), e = [], f = 0; f < d.length; f++)
                e[f] = new b(d[f]);
            a.g[c] = e
        }
        b = a.g[c];
        b == $d && (b = a.g[c] = []);
        return b
    }
      , le = function(a, b, c) {
        a.g || (a.g = {});
        var d = c ? c.ia : c;
        a.g[b] = c;
        return he(a, b, d)
    };
    Yd.prototype.A = Zd ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            return Sd(this)
        }
        ;
        try {
            return JSON.stringify(this.ia && this.ia, me)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    }
    : function() {
        return JSON.stringify(this.ia && this.ia, me)
    }
    ;
    var me = function(a, b) {
        return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    }
      , ne = function(a, b) {
        return new a(b ? JSON.parse(b) : null)
    };
    Yd.prototype.toString = function() {
        return this.ia.toString()
    }
    ;
    var oe = document
      , F = window;
    var pe = function(a) {
        ce(this, a, null, null)
    };
    B(pe, Yd);
    var qe = function(a) {
        ce(this, a, null, null)
    };
    B(qe, Yd);
    var re = function(a) {
        ce(this, a, null, null)
    };
    B(re, Yd);
    var se = function(a) {
        var b = []
          , c = []
          , d = {}
          , e = function(f, g) {
            var h = g + "  ";
            try {
                if (void 0 === f)
                    b.push("undefined");
                else if (null === f)
                    b.push("NULL");
                else if ("string" === typeof f)
                    b.push('"' + f.replace(/\n/g, "\n" + g) + '"');
                else if ("function" === typeof f)
                    b.push(String(f).replace(/\n/g, "\n" + g));
                else if (Pa(f)) {
                    f[Qa] || c.push(f);
                    var k = Sa(f);
                    if (d[k])
                        b.push("*** reference loop detected (id=" + k + ") ***");
                    else {
                        d[k] = !0;
                        b.push("{");
                        for (var n in f)
                            "function" !== typeof f[n] && (b.push("\n"),
                            b.push(h),
                            b.push(n + " = "),
                            e(f[n], h));
                        b.push("\n" + g + "}");
                        delete d[k]
                    }
                } else
                    b.push(f)
            } catch (m) {
                b.push("*** " + m + " ***")
            }
        };
        e(a, "");
        for (a = 0; a < c.length; a++)
            Ta(c[a]);
        return b.join("")
    };
    var te = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    l = te.prototype;
    l.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.$g;
            d = c.Se || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.fd
        }
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    }
    ;
    l.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = fc(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.substr(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    l.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            fd: 0,
            path: b,
            domain: c
        });
        return d
    }
    ;
    l.Ta = function() {
        return ue(this).keys
    }
    ;
    l.Va = function() {
        return ue(this).values
    }
    ;
    var ue = function(a) {
        a = (a.g.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
            e = fc(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    var ve = function(a) {
        return (a = (new te(a)).get("DATA_USE_CONSENT", "")) ? a : null
    }
      , we = function(a) {
        var b = (b = (new te(a)).get("FCCDCF", "")) ? b : null;
        try {
            var c = b ? ne(qe, b) : null
        } catch (d) {
            c = null
        }
        if (!c)
            return ve(a);
        c = je(c, re, 3);
        if (!c || null == E(c, 1))
            return ve(a);
        a = E(c, 2);
        b = Date.now();
        if (a) {
            if (b < a || b > a + 33696E6)
                return null
        } else
            return null;
        return E(c, 1)
    };
    var ye = function(a) {
        ce(this, a, xe, null)
    };
    B(ye, Yd);
    var xe = [1, 2, 3, 4];
    var ze = function(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }
      , Ae = function(a) {
        return !!(a.error && a.meta && a.id)
    };
    var Be = yb(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            v.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    function Ce(a) {
        return a ? a.passive && Be() ? a : a.capture || !1 : !1
    }
    var De = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Ce(d)),
        !0) : !1
    }
      , Ee = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, Ce(void 0))
    }
      , Fe = function(a) {
        var b = void 0 === b ? {} : b;
        if ("function" === typeof window.CustomEvent)
            var c = new CustomEvent("rum_blp",b);
        else
            c = document.createEvent("CustomEvent"),
            c.initCustomEvent("rum_blp", !!b.bubbles, !!b.cancelable, b.detail);
        a.dispatchEvent(c)
    };
    try {
        (new self.OffscreenCanvas(0,0)).getContext("2d")
    } catch (a) {}
    var Ge = !od || 9 <= Number(Id)
      , He = od || nd || sd;
    var Ie = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    Ie.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    Ie.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    Ie.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    Ie.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    }
    ;
    var Je = function(a, b) {
        this.width = a;
        this.height = b
    };
    l = Je.prototype;
    l.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    l.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    l.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    l.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    l.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    }
    ;
    var Me = function(a) {
        return a ? new Ke(Le(a)) : $a || ($a = new Ke)
    }
      , Ne = function(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }
      , Oe = function() {
        var a = document;
        return a.querySelectorAll && a.querySelector ? a.querySelectorAll("SCRIPT") : a.getElementsByTagName("SCRIPT")
    }
      , Qe = function(a, b) {
        Bb(b, function(c, d) {
            c && "object" == typeof c && c.Na && (c = c.Ea());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Pe.hasOwnProperty(d) ? a.setAttribute(Pe[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
      , Pe = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    }
      , Re = function(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Je(a.clientWidth,a.clientHeight)
    }
      , Se = function(a) {
        var b = a.scrollingElement ? a.scrollingElement : sd || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return od && Fd("10") && a.pageYOffset != b.scrollTop ? new Ie(b.scrollLeft,b.scrollTop) : new Ie(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
      , G = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
      , Ve = function(a, b, c) {
        var d = arguments
          , e = document
          , f = String(d[0])
          , g = d[1];
        if (!Ge && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', Tc(g.name), '"');
            if (g.type) {
                f.push(' type="', Tc(g.type), '"');
                var h = {};
                Sb(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = Te(e, f);
        g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : Qe(f, g));
        2 < d.length && Ue(e, f, d, 2);
        return f
    }
      , Ue = function(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!Oa(f) || Pa(f) && 0 < f.nodeType)
                e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (Pa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                C(g ? rb(f) : f, e)
            }
        }
    }
      , Te = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
      , We = function(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
      , Xe = function(a) {
        var b;
        if (He && !(od && Fd("9") && !Fd("10") && v.SVGElement && a instanceof v.SVGElement) && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return Pa(b) && 1 == b.nodeType ? b : null
    }
      , Ye = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
      , Le = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
      , Ze = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? G(a.contentDocument) : null)
        } catch (b) {}
        return null
    }
      , $e = function(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a; ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
      , Ke = function(a) {
        this.g = a || v.document || document
    };
    l = Ke.prototype;
    l.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    }
    ;
    l.createElement = function(a) {
        return Te(this.g, a)
    }
    ;
    l.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    l.append = function(a, b) {
        Ue(Le(a), a, arguments, 1)
    }
    ;
    l.canHaveChildren = function(a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    ;
    var bf = function() {
        return !af() && (D("iPod") || D("iPhone") || D("Android") || D("IEMobile"))
    }
      , af = function() {
        return D("iPad") || D("Android") && !D("Mobile") || D("Silk")
    };
    var cf = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
      , df = function(a) {
        var b = a.match(cf);
        a = b[1];
        var c = b[3];
        b = b[4];
        var d = "";
        a && (d += a + ":");
        c && (d = d + "//" + c,
        b && (d += ":" + b));
        return d
    }
      , ef = function(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("=")
                  , e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else
                    f = a[c];
                b(f, e ? Sc(e) : "")
            }
        }
    }
      , ff = /#|$/
      , gf = function(a, b) {
        var c = a.search(ff);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e),
                    !f || 61 == f || 38 == f || 35 == f)
                        break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d)
            return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return Sc(a.substr(d, e - d))
    };
    var hf = function(a) {
        try {
            return !!a && null != a.location.href && kd(a, "foo")
        } catch (b) {
            return !1
        }
    }
      , jf = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
      , kf = /https?:\/\/[^\/]+/
      , lf = function(a) {
        return (a = kf.exec(a)) && a[0] || ""
    }
      , mf = function() {
        var a = v;
        var b = void 0 === b ? !0 : b;
        try {
            for (var c = null; c != a; c = a,
            a = a.parent)
                switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return b;
                case "http:":
                    return !1
                }
        } catch (d) {}
        return !0
    }
      , of = function() {
        var a = nf;
        if (!a)
            return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c)
                return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    }
      , pf = function(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }
      , qf = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            if (pf(a, b))
                return a;
            a: {
                try {
                    var d = a.parent;
                    if (d && d != a) {
                        var e = d;
                        break a
                    }
                } catch (f) {}
                e = null
            }
            if (!(a = e))
                break
        }
        return null
    };
    var rf = function(a) {
        var b = document;
        try {
            var c = we(b);
            var d = c ? ne(ye, c) : null
        } catch (e) {
            d = null
        }
        if (!d)
            return 0;
        if (de(d, 7))
            return 4;
        if (a) {
            if (kb(E(d, 3), a))
                return 2;
            if (kb(E(d, 4), a))
                return 3
        }
        return 1
    };
    var sf = function(a) {
        ce(this, a, null, null)
    };
    B(sf, Yd);
    var H = function() {
        this.J = this.J;
        this.H = this.H
    };
    H.prototype.J = !1;
    H.prototype.tb = function() {
        return this.J
    }
    ;
    H.prototype.W = function() {
        this.J || (this.J = !0,
        this.R())
    }
    ;
    var vf = function(a, b) {
        tf(a, Xa(uf, b))
    }
      , tf = function(a, b) {
        a.J ? b() : (a.H || (a.H = []),
        a.H.push(b))
    };
    H.prototype.R = function() {
        if (this.H)
            for (; this.H.length; )
                this.H.shift()()
    }
    ;
    var uf = function(a) {
        a && "function" == typeof a.W && a.W()
    };
    var I = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    I.prototype.getWidth = function() {
        return this.right - this.left
    }
    ;
    I.prototype.getHeight = function() {
        return this.bottom - this.top
    }
    ;
    var wf = function(a) {
        return new I(a.top,a.right,a.bottom,a.left)
    };
    I.prototype.expand = function(a, b, c, d) {
        Pa(a) ? (this.top -= a.top,
        this.right += a.right,
        this.bottom += a.bottom,
        this.left -= a.left) : (this.top -= a,
        this.right += Number(b),
        this.bottom += Number(c),
        this.left -= Number(d));
        return this
    }
    ;
    I.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    I.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    I.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    var xf = function(a, b, c) {
        b instanceof Ie ? (a.left += b.x,
        a.right += b.x,
        a.top += b.y,
        a.bottom += b.y) : (a.left += b,
        a.right += b,
        "number" === typeof c && (a.top += c,
        a.bottom += c));
        return a
    };
    I.prototype.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    }
    ;
    var yf = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
      , zf = function(a) {
        return new I(a.top,a.left + a.width,a.top + a.height,a.left)
    };
    yf.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    yf.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    yf.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    yf.prototype.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    }
    ;
    var Af = function(a) {
        a = void 0 === a ? v : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)
            try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl)
                return b
        } catch (c) {}
        return null
    };
    var Bf = function(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = a.document.createElement("img");
        c.src = b;
        a.google_image_requests.push(c)
    }
      , Df = function(a) {
        var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=gfp_cw_status";
        jf(a, function(c, d) {
            c && (b += "&" + d + "=" + encodeURIComponent(c))
        });
        Cf(b)
    }
      , Cf = function(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : Bf(b, a)
    };
    var Ef = {};
    function Ff(a) {
        if (a !== Ef)
            throw Error("Bad secret");
    }
    ;function Gf() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    ;var Hf, If = function() {}, Jf = function(a, b) {
        Ff(b);
        this.g = a
    };
    t(Jf, If);
    Jf.prototype.toString = function() {
        return this.g.toString()
    }
    ;
    var Kf = null === (Hf = Gf()) || void 0 === Hf ? void 0 : Hf.emptyHTML;
    new Jf(null !== Kf && void 0 !== Kf ? Kf : "",Ef);
    var Lf, Mf = function() {}, Nf = function(a, b) {
        Ff(b);
        this.g = a
    };
    t(Nf, Mf);
    Nf.prototype.toString = function() {
        return this.g.toString()
    }
    ;
    var Of = null === (Lf = Gf()) || void 0 === Lf ? void 0 : Lf.emptyScript;
    new Nf(null !== Of && void 0 !== Of ? Of : "",Ef);
    var Pf = function() {}
      , Qf = function(a, b) {
        Ff(b);
        this.g = a
    };
    t(Qf, Pf);
    Qf.prototype.toString = function() {
        return this.g
    }
    ;
    new Qf("about:blank",Ef);
    new Qf("about:invalid#zTSz",Ef);
    var Sf = function(a) {
        Rf();
        return Nc(a, null)
    }
      , Tf = function(a) {
        Rf();
        return cc(a)
    }
      , Rf = Ma;
    var Vf = function(a, b) {
        if ("string" === typeof b)
            (b = Uf(a, b)) && (a.style[b] = void 0);
        else
            for (var c in b) {
                var d = a
                  , e = b[c]
                  , f = Uf(d, c);
                f && (d.style[f] = e)
            }
    }
      , Wf = {}
      , Uf = function(a, b) {
        var c = Wf[b];
        if (!c) {
            var d = Yc(b);
            c = d;
            void 0 === a.style[d] && (d = (sd ? "Webkit" : qd ? "Moz" : od ? "ms" : nd ? "O" : null) + $c(d),
            void 0 !== a.style[d] && (c = d));
            Wf[b] = c
        }
        return c
    }
      , Xf = function(a, b) {
        var c = a.style[Yc(b)];
        return "undefined" !== typeof c ? c : a.style[Uf(a, b)] || ""
    }
      , Yf = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }
      , Zf = function(a) {
        var b = Le(a)
          , c = new Ie(0,0);
        var d = b ? Le(b) : document;
        d = !od || 9 <= Number(Id) || "CSS1Compat" == Me(d).g.compatMode ? d.documentElement : d.body;
        if (a == d)
            return c;
        a = Yf(a);
        b = Se(Me(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
      , $f = function(a, b) {
        var c = new Ie(0,0)
          , d = G(Le(a));
        if (!kd(d, "parent"))
            return c;
        do {
            if (d == b)
                var e = Zf(a);
            else
                e = Yf(a),
                e = new Ie(e.left,e.top);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));return c
    }
      , ag = function() {
        var a = "100%";
        "number" == typeof a && (a = Math.round(a) + "px");
        return a
    }
      , cg = function(a) {
        var b = bg;
        a: {
            var c = Le(a);
            if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                c = c.display || c.getPropertyValue("display") || "";
                break a
            }
            c = ""
        }
        c || (c = a.currentStyle ? a.currentStyle.display : null);
        if ("none" != (c || a.style && a.style.display))
            return b(a);
        c = a.style;
        var d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
      , bg = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = sd && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Yf(a),
        new Je(a.right - a.left,a.bottom - a.top)) : new Je(b,c)
    };
    var dg = !!window.google_async_iframe_id
      , eg = dg && window.parent || window
      , fg = function() {
        if (dg && !hf(eg)) {
            var a = "." + oe.domain;
            try {
                for (; 2 < a.split(".").length && !hf(eg); )
                    oe.domain = a = a.substr(a.indexOf(".") + 1),
                    eg = window.parent
            } catch (b) {}
            hf(eg) || (eg = window)
        }
        return eg
    };
    var gg = function(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent; )
            a = a.parent,
            d++,
            hf(a) && (c = a,
            b = d);
        return {
            ma: c,
            level: b
        }
    };
    var hg = function() {
        this.S = {}
    }
      , kg = function() {
        if (ig)
            var a = ig;
        else {
            a = ((a = Af()) ? hf(a.master) ? a.master : null : null) || fg();
            var b = a.google_persistent_state_async;
            a = null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? ig = b : a.google_persistent_state_async = ig = new hg
        }
        b = fg();
        var c = Af(b);
        c ? ((c = c || Af()) ? (b = c.pageViewId,
        c = c.clientId,
        "string" === typeof c && (b += c.replace(/\D/g, "").substr(0, 6))) : b = null,
        b = +b) : (b = gg(b).ma,
        (c = b.google_global_correlator) || (b.google_global_correlator = c = 1 + Math.floor(Math.random() * Math.pow(2, 43))),
        b = c);
        c = jg[7] || "google_ps_7";
        a = a.S;
        var d = a[c];
        a = void 0 === d ? a[c] = b : d;
        return a
    }
      , ig = null
      , lg = {}
      , jg = (lg[8] = "google_prev_ad_formats_by_region",
    lg[9] = "google_prev_ad_slotnames_by_region",
    lg);
    var mg = function() {
        var a;
        this.g = a = void 0 === a ? {} : a
    };
    mg.prototype.reset = function() {
        this.g = {}
    }
    ;
    var ng = null;
    var og = function() {
        var a = v.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : z()
    }
      , pg = function() {
        var a = void 0 === a ? v : a;
        return (a = a.performance) && a.now ? a.now() : null
    }
      , qg = function(a) {
        var b = v.performance;
        return b && b.timing && b.timing[a] || 0
    }
      , rg = function() {
        var a = Math.min(qg("domLoading") || Infinity, qg("domInteractive") || Infinity);
        return Infinity == a ? Math.max(qg("responseEnd"), qg("navigationStart")) : a
    };
    var sg = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e
    };
    var tg = v.performance
      , ug = !!(tg && tg.mark && tg.measure && tg.clearMarks)
      , vg = yb(function() {
        var a;
        if (a = ug) {
            var b;
            if (null === ng) {
                ng = "";
                try {
                    a = "";
                    try {
                        a = v.top.location.hash
                    } catch (c) {
                        a = v.location.hash
                    }
                    a && (ng = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                } catch (c) {}
            }
            b = ng;
            a = !!b.indexOf && 0 <= b.indexOf("1337")
        }
        return a
    })
      , wg = function(a, b) {
        this.events = [];
        this.g = b || v;
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [],
        this.events = b.google_js_reporting_queue,
        c = b.google_measure_js_timing);
        this.l = vg() || (null != c ? c : Math.random() < a)
    };
    wg.prototype.H = function() {
        this.l = !1;
        this.events != this.g.google_js_reporting_queue && (vg() && C(this.events, xg),
        this.events.length = 0)
    }
    ;
    wg.prototype.J = function(a) {
        !this.l || 2048 < this.events.length || this.events.push(a)
    }
    ;
    var xg = function(a) {
        a && tg && vg() && (tg.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
        tg.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    wg.prototype.start = function(a, b) {
        if (!this.l)
            return null;
        a = new sg(a,b,pg() || og());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        tg && vg() && tg.mark(b);
        return a
    }
    ;
    var yg = function(a, b) {
        if (a.l && "number" === typeof b.value) {
            b.duration = (pg() || og()) - b.value;
            var c = "goog_" + b.label + "_" + b.uniqueId + "_end";
            tg && vg() && tg.mark(c);
            a.J(b)
        }
    };
    var zg = function() {
        this.h = "jserror";
        this.l = !1;
        this.g = null;
        this.o = !1;
        this.B = Math.random();
        this.A = this.Fa
    };
    l = zg.prototype;
    l.Fc = function(a) {
        this.h = a
    }
    ;
    l.Xb = function(a) {
        this.g = a
    }
    ;
    l.Gc = function(a) {
        this.l = a
    }
    ;
    l.Hc = function(a) {
        this.o = a
    }
    ;
    l.Fa = function(a, b, c, d, e) {
        e = void 0 === e ? this.h : e;
        if ((this.o ? this.B : Math.random()) > (void 0 === c ? .01 : c))
            return this.l;
        Ae(b) || (b = new ze(b,{
            context: a,
            id: e
        }));
        if (d || this.g)
            b.meta = {},
            this.g && this.g(b.meta),
            d && d(b.meta);
        v.google_js_errors = v.google_js_errors || [];
        v.google_js_errors.push(b);
        v.error_rep_loaded || (b = v.document,
        c = Tf(v.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js"),
        a = b.createElement("script"),
        Rc(a, c),
        (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a, b),
        v.error_rep_loaded = !0);
        return this.l
    }
    ;
    l.$a = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.A(a, e, .01, c, this.h))
                throw e;
        }
        return d
    }
    ;
    l.Cc = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h)
                g[h - 0] = arguments[h];
            return e.$a(a, function() {
                return b.apply(c, g)
            }, d)
        }
    }
    ;
    var Ag = function(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }
      , Bg = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    var Cg = function(a) {
        a = a._google_rum_ns_ = a._google_rum_ns_ || {};
        return a.pq = a.pq || []
    };
    var Dg = function(a, b, c) {
        jf(b, function(d, e) {
            var f = c && c[e];
            !d && 0 !== d || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)),
            c && (c[e] = !0))
        });
        return a
    }
      , Lg = function(a, b, c, d, e, f, g, h) {
        f = void 0 === f ? Infinity : f;
        g = void 0 === g ? !1 : g;
        wg.call(this, a, h);
        var k = this;
        this.D = 0;
        this.L = f;
        this.$ = b;
        this.M = c;
        this.Z = d;
        this.ea = e;
        a = this.g.navigator;
        this.V = !("csi.gstatic.com" !== this.M || !a || !a.sendBeacon);
        this.A = {};
        this.K = {};
        this.g.performance && this.g.performance.now || Eg(this, "dat", 1);
        a && a.deviceMemory && Eg(this, "dmc", a.deviceMemory);
        this.T = !g;
        this.N = function() {
            k.g.setTimeout(function() {
                return Fg(k)
            }, 1100)
        }
        ;
        this.va = [];
        this.X = function() {
            Gg(k, 1)
        }
        ;
        this.P = function() {
            Gg(k, 2)
        }
        ;
        this.fa = Ab(function() {
            Fg(k)
        });
        this.Da = function() {
            var m = k.g.document;
            (null != m.hidden ? m.hidden : null != m.mozHidden ? m.mozHidden : null != m.webkitHidden && m.webkitHidden) && k.fa()
        }
        ;
        this.G = this.g.setTimeout(function() {
            return Fg(k)
        }, 5E3);
        this.B = {};
        this.o = b.length + c.length + d.length + e.length + 3;
        this.h = 0;
        C(this.events, function(m) {
            return Hg(k, m)
        });
        this.I = [];
        b = Cg(this.g);
        var n = function(m) {
            var u = m[0];
            m = m[1];
            var p = u.length + m.length + 2;
            8E3 < k.o + k.h + p && Fg(k);
            k.I.push([u, m]);
            k.h += p;
            Ig(k);
            return 0
        };
        C(b, function(m) {
            return n(m)
        });
        b.length = 0;
        b.push = n;
        Jg(this);
        Kg(this)
    };
    t(Lg, wg);
    var Kg = function(a) {
        "complete" === a.g.document.readyState ? a.g.setTimeout(function() {
            return Fg(a)
        }, 0) : De(a.g, "load", a.N);
        var b = Bg(a.g.document);
        "undefined" !== typeof b && De(a.g, b, a.Da);
        De(a.g, "unload", a.X);
        De(a.g, "pagehide", a.P)
    }
      , Eg = function(a, b, c) {
        c = String(c);
        a.o = null != a.A[b] ? a.o + (c.length - a.A[b].length) : a.o + (b.length + c.length + 2);
        a.A[b] = c
    }
      , Mg = function(a) {
        null != a.A.uet && (a.o -= 3 + a.A.uet.length + 2,
        delete a.A.uet)
    }
      , Pg = function(a, b, c, d, e) {
        e = void 0 === e ? "" : e;
        var f = Ng(a, b, c, d, e);
        8E3 < a.o + a.h + f && (Fg(a),
        f = b.length + c.length + 2);
        Og(a, b, c, d, e);
        a.h += f;
        Ig(a)
    }
      , Ng = function(a, b, c, d, e) {
        return null == a.B[b] ? b.length + c.length + 2 : d ? c.length + (void 0 === e ? "" : e).length : c.length - a.B[b].length
    }
      , Og = function(a, b, c, d, e) {
        a.B[b] = d && null != a.B[b] ? a.B[b] + ("" + (void 0 === e ? "" : e) + c) : c
    }
      , Ig = function(a) {
        6E3 <= a.o + a.h && Fg(a)
    }
      , Fg = function(a) {
        if (a.l && a.T) {
            try {
                if (a.h) {
                    var b = a.B;
                    a.D++;
                    var c = Qg(a, b);
                    b = !1;
                    try {
                        b = !!(a.V && a.g.navigator && a.g.navigator.sendBeacon(c, null))
                    } catch (d) {
                        a.V = !1
                    }
                    b || Bf(a.g, c);
                    Jg(a);
                    a.D === a.L && a.H()
                }
            } catch (d) {
                (new zg).Fa(358, d)
            }
            a.B = {};
            a.h = 0;
            a.events.length = 0;
            a.g.clearTimeout(a.G);
            a.G = 0
        }
    }
      , Qg = function(a, b) {
        var c = a.$ + "//" + a.M + a.Z + a.ea
          , d = {};
        c = Dg(c, a.A, d);
        c = Dg(c, b, d);
        a.g.google_timing_params && (c = Dg(c, a.g.google_timing_params, d),
        a.g.google_timing_params = void 0);
        C(a.I, function(e) {
            var f = r(e);
            e = f.next().value;
            f = f.next().value;
            var g = {};
            c = Dg(c, (g[e] = f,
            g))
        });
        a.I.length = 0;
        return c
    }
      , Jg = function(a) {
        Eg(a, "puid", (a.D + 1).toString(36) + "~" + z().toString(36))
    }
      , Hg = function(a, b) {
        var c = "met." + b.type
          , d = "number" === typeof b.value ? Math.round(b.value).toString(36) : b.value
          , e = Math.round(b.duration);
        b = "" + b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(36) : "");
        Pg(a, c, b, !0, "~")
    };
    Lg.prototype.J = function(a) {
        this.l && this.D < this.L && (wg.prototype.J.call(this, a),
        Hg(this, a))
    }
    ;
    Lg.prototype.H = function() {
        wg.prototype.H.call(this);
        this.g.clearTimeout(this.G);
        this.h = this.G = 0;
        this.B = {};
        Pb(this.K);
        Pb(this.A);
        Ee(this.g, "load", this.N);
        Ee(this.g, "unload", this.X);
        Ee(this.g, "pagehide", this.P)
    }
    ;
    var Gg = function(a, b) {
        Eg(a, "uet", b);
        C(a.va, function(c) {
            try {
                c()
            } catch (d) {}
        });
        Fe(a.g);
        Fg(a);
        Mg(a)
    };
    var J = function() {
        this.g = new Lg(1,"https:","csi.gstatic.com","/csi?v=2&s=","ima",void 0,!0);
        var a = kg();
        null != a && Eg(this.g, "c", a);
        a = parseInt(this.g.A.c, 10) / 2;
        null != a && Eg(this.g, "slotId", a)
    }
      , K = function(a, b, c) {
        if (null != c) {
            a = a.g;
            var d = b + "=" + c;
            a.K[d] || (Pg(a, b, c, !1),
            1E3 > d.length && (a.K[d] = !0))
        }
    }
      , Rg = function(a, b) {
        for (var c in b)
            b[c] = "object" === typeof b[c] ? encodeURIComponent(JSON.stringify(b[c])) : encodeURIComponent(String(b[c]));
        a = a.g;
        c = !1;
        var d = 0, e;
        for (e in b)
            null != a.B[e] && (c = !0),
            d += Ng(a, e, b[e], !1);
        (8E3 < a.o + a.h + d || c) && Fg(a);
        for (var f in b)
            Og(a, f, b[f], !1);
        a.h += d;
        Ig(a)
    }
      , Sg = function(a) {
        var b = J.C().g
          , c = og() - 0;
        b.l && b.J(new sg(a,4,c,0,void 0))
    };
    Na(J);
    var Tg = function(a) {
        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    }
      , Ug = function(a) {
        a = String(a);
        if (Tg(a))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
      , Xg = function(a, b) {
        var c = [];
        Vg(new Wg(b), a, c);
        return c.join("")
    }
      , Wg = function(a) {
        this.g = a
    }
      , Vg = function(a, b, c) {
        if (null == b)
            c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++)
                        c.push(e),
                        e = d[f],
                        Vg(a, a.g ? a.g.call(d, String(f), e) : e, c),
                        e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (e = b[d],
                        "function" != typeof e && (c.push(f),
                        Yg(d, c),
                        c.push(":"),
                        Vg(a, a.g ? a.g.call(b, d, e) : e, c),
                        f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                Yg(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
      , Zg = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , $g = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g
      , Yg = function(a, b) {
        b.push('"', a.replace($g, function(c) {
            var d = Zg[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1),
            Zg[c] = d);
            return d
        }), '"')
    };
    var ah = function() {
        this.l = null;
        this.g = "missing-id";
        this.h = !1
    }
      , ch = function(a) {
        var b = null;
        try {
            b = document.getElementsByClassName("lima-exp-data")
        } catch (c) {
            return bh("missing-element", a.g),
            null
        }
        if (1 < b.length)
            return bh("multiple-elements", a.g),
            null;
        b = b[0];
        return b ? b.innerHTML : (bh("missing-element", a.g),
        null)
    }
      , eh = function() {
        var a = dh
          , b = ch(a);
        if (null !== b)
            if (Tg(b)) {
                var c = JSON.parse(b);
                b = c.experimentIds;
                var d = c.binaryIdentifier;
                c = c.adEventId;
                var e = "string" === typeof d;
                if ("string" == typeof c) {
                    var f = J.C();
                    null != c && Eg(f.g, "qqid", c)
                }
                e && (a.g = d);
                "string" !== typeof b ? bh("missing-flags", a.g) : (e || bh("missing-binary-id", a.g),
                a.l = b)
            } else
                bh("invalid-json", a.g)
    };
    ah.prototype.reset = function() {
        this.l = null;
        this.g = "missing-id"
    }
    ;
    var gh = function(a, b, c, d, e) {
        this.id = a;
        this.F = b;
        this.h = c;
        this.Wb = !1;
        this.g = d;
        this.l = e;
        this.h && fh(this)
    }
      , hh = function(a) {
        return a.Wb || a.h
    }
      , fh = function(a) {
        if (a.g && a.l) {
            var b = a.g;
            b && Object.assign(a.l.g, b)
        }
    }
      , ih = function() {
        this.g = []
    }
      , jh = function() {
        this.g = new Map;
        this.h = !1;
        this.o = new ih;
        this.B = new gh(0,0,!1);
        this.l = [this.o];
        this.A = new mg
    }
      , M = function(a) {
        var b = kh;
        if (b.h || b.g.has(a.id) || null == a.F && null == a.control || 0 == a.hc)
            return b.B;
        var c = b.o;
        if (null != a.control)
            for (var d = r(b.l), e = d.next(); !e.done; e = d.next()) {
                if (e = e.value,
                e.g.includes(a.control)) {
                    c = e;
                    break
                }
            }
        else
            null != a.ba && (c = a.ba);
        d = 0;
        null != a.control ? d = a.control.F : null != a.F && (d = a.F);
        a = new gh(a.id,d,!!a.Yg,a.flags,b.A);
        c.g.push(a);
        b.l.includes(c) || b.l.push(c);
        b.g.set(a.id, a);
        return a
    }
      , lh = function() {
        var a = kh;
        return [].concat(fa(a.g.keys())).filter(function(b) {
            return hh(this.g.get(b))
        }, a)
    }
      , mh = function(a) {
        var b = kh;
        b.h || (a.g(b.l, b.g),
        b.h = !0)
    };
    jh.prototype.reset = function() {
        for (var a = r(this.g), b = a.next(); !b.done; b = a.next())
            b = r(b.value),
            b.next(),
            b.next().value.Wb = !1;
        this.h = !1;
        this.A.reset()
    }
    ;
    var kh = new jh
      , oh = function() {
        return nh.g.filter(function(a) {
            return hh(a)
        }).map(function(a) {
            return a.id
        })
    };
    var ph = function() {};
    ph.prototype.g = function(a) {
        a = r(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = 0
              , d = Math.floor(1E3 * Math.random());
            b = r(b.value.g);
            for (var e = b.next(); !e.done; e = b.next())
                if (e = e.value,
                c += e.F,
                d < c) {
                    e.Wb = !0;
                    fh(e);
                    break
                }
        }
    }
    ;
    var sh = function(a) {
        ce(this, a, qh, rh)
    };
    B(sh, Yd);
    var qh = [2, 8]
      , rh = [[3, 4, 5], [6, 7]];
    var uh = function(a) {
        ce(this, a, th, null)
    };
    B(uh, Yd);
    var th = [4];
    var xh = function(a) {
        ce(this, a, vh, wh)
    };
    B(xh, Yd);
    var vh = [5]
      , wh = [[1, 2, 3, 6, 7]];
    var Bh = function(a) {
        ce(this, a, yh, null)
    };
    B(Bh, Yd);
    var yh = [2];
    var Dh = function(a) {
        ce(this, a, Ch, null)
    };
    B(Dh, Yd);
    var Ch = [2];
    var Fh = function(a) {
        ce(this, a, Eh, null)
    };
    B(Fh, Yd);
    var Hh = function(a) {
        ce(this, a, Gh, null)
    };
    B(Hh, Yd);
    var Eh = [1, 4, 2, 3]
      , Gh = [2];
    var Ih = function(a, b) {
        switch (b) {
        case 1:
            return ee(a, 1, 0);
        case 2:
            return ee(a, 2, 0);
        case 3:
            return ee(a, 3, 0);
        case 6:
            return ee(a, 6, 0);
        default:
            return null
        }
    }
      , Jh = function(a, b) {
        if (!a)
            return null;
        switch (b) {
        case 1:
            return fe(a, 1);
        case 7:
            return ee(a, 3, "");
        case 2:
            return ge(a, 2);
        case 3:
            return ee(a, 3, "");
        case 6:
            return E(a, 4);
        default:
            return null
        }
    };
    var Kh = {}
      , Lh = (Kh[47] = Jd,
    Kh);
    function Mh() {
        var a = Nh
          , b = ke(new Fh(Oh), Hh, 2);
        1 == b.length && 16 == ee(b[0], 1, 0) && ke(b[0], Dh, 2).forEach(function(c) {
            var d = ee(c, 1, 0)
              , e = je(c, sh, 3)
              , f = a[ee(c, 4, 0)];
            ke(c, Bh, 2).forEach(function(g) {
                var h = d || ee(g, 4, 0)
                  , k = ee(g, 1, 0)
                  , n = e || je(g, sh, 3);
                n = n ? ee(n, 3, 0) : null;
                n = Lh[n];
                g = Ph(ke(g, xh, 2));
                M({
                    id: k,
                    F: h,
                    ba: f,
                    hc: n,
                    flags: g
                })
            })
        })
    }
    function Ph(a) {
        if (a.length) {
            var b = {};
            a.forEach(function(c) {
                var d = be(c, wh[0])
                  , e = je(c, uh, 4);
                e && (c = Ih(c, d),
                d = Jh(e, d),
                b[c] = d)
            });
            return b
        }
    }
    ;var Qh = function(a) {
        this.h = a
    };
    Qh.prototype.g = function(a, b) {
        a = r(this.h);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = b.get(c.value))
                c.Wb = !0,
                fh(c)
    }
    ;
    var Rh = function(a, b) {
        this.h = a;
        this.l = b
    };
    t(Rh, Qh);
    Rh.prototype.g = function(a, b) {
        Qh.prototype.g.call(this, a, b);
        var c = [];
        a = [];
        for (var d = r(this.h), e = d.next(); !e.done; e = d.next())
            e = e.value,
            b.get(e) ? c.push(e) : a.push(e);
        b = c.map(String).join(",") || "0";
        a = a.map(String).join(",") || "0";
        K(J.C(), "sei", b);
        K(J.C(), "nsei", a);
        K(J.C(), "bi", this.l)
    }
    ;
    var Sh = function() {
        ah.apply(this, arguments)
    };
    t(Sh, ah);
    var bh = function(a, b) {
        var c = J.C();
        K(c, "eee", a);
        K(c, "bi", b)
    };
    Na(Sh);
    function Th() {
        return Uh.split(",").map(function(a) {
            return parseInt(a, 10)
        }).filter(function(a) {
            return !isNaN(a)
        })
    }
    ;var nh = new ih
      , Vh = new ih;
    M({
        id: 318475490,
        F: 0
    });
    M({
        id: 324123032,
        F: 0
    });
    M({
        id: 418572103,
        F: 0
    });
    M({
        id: 420706097,
        F: 10
    });
    M({
        id: 420706098,
        F: 10
    });
    M({
        id: 44733426,
        F: 10
    });
    M({
        id: 44733427,
        F: 10
    });
    M({
        id: 21061786,
        F: 10
    });
    M({
        id: 21061817,
        F: 10
    });
    M({
        id: 21061824,
        F: 50
    });
    M({
        id: 21061888,
        F: 10
    });
    M({
        id: 21061893,
        F: 10
    });
    M({
        id: 21062100,
        F: 0
    });
    M({
        id: 21062101,
        F: 0
    });
    M({
        id: 420706109,
        F: 10
    });
    M({
        id: 420706110,
        F: 10
    });
    M({
        id: 21062347,
        F: 0
    });
    M({
        id: 21063070,
        F: 0
    });
    M({
        id: 21063072,
        F: 0
    });
    M({
        id: 21063100,
        F: 0
    });
    M({
        id: 420706105,
        F: 10
    });
    M({
        id: 420706106,
        F: 10
    });
    M({
        id: 75259402,
        F: 10
    });
    M({
        id: 75259403,
        F: 10
    });
    M({
        id: 21064018,
        F: 0
    });
    M({
        id: 21064020,
        F: 0
    });
    M({
        id: 21064022,
        F: 0
    });
    M({
        id: 21064024,
        F: 0
    });
    M({
        id: 21064075,
        F: 0
    });
    M({
        id: 21064201,
        F: 50
    });
    var Wh = M({
        id: 210640812,
        F: 10
    });
    M({
        id: 420706142,
        F: 0
    });
    M({
        id: 21064347,
        F: 0
    });
    M({
        id: 72811302,
        F: 0
    });
    M({
        id: 318491509,
        F: 0
    });
    M({
        id: 72811303,
        F: 0
    });
    M({
        id: 44719312,
        F: 0
    });
    M({
        id: 72811304,
        F: 0
    });
    M({
        id: 44719313,
        F: 0
    });
    M({
        id: 72811305,
        F: 0
    });
    M({
        id: 72811306,
        F: 0
    });
    M({
        id: 72811307,
        F: 0
    });
    M({
        id: 44725460,
        F: 0
    });
    M({
        id: 44725462,
        F: 0
    });
    M({
        id: 21064565,
        F: 0
    });
    M({
        id: 21064567,
        F: 0
    });
    M({
        id: 40819804,
        F: 10
    });
    var Xh = M({
        id: 40819805,
        F: 10
    });
    M({
        id: 418572006,
        F: 10
    });
    M({
        id: 420706136,
        F: 10
    });
    M({
        id: 420706137,
        F: 10
    });
    M({
        id: 420706138,
        F: 10
    });
    M({
        id: 420706139,
        F: 10
    });
    M({
        id: 420706140,
        F: 10
    });
    M({
        id: 420706141,
        F: 10
    });
    M({
        id: 21065285,
        F: 1
    });
    M({
        id: 21065286,
        F: 1
    });
    M({
        id: 21065287,
        F: 10,
        hc: Jd
    });
    M({
        id: 21065288,
        F: 10,
        hc: Jd
    });
    var Yh = M({
        id: 72811314,
        F: 0
    });
    M({
        id: 44714743,
        F: 0
    });
    M({
        id: 44718898,
        F: 0
    });
    M({
        id: 44719216,
        F: 0
    });
    M({
        id: 44730895,
        F: 10
    });
    M({
        id: 44730896,
        F: 10
    });
    M({
        id: 44730769,
        F: 0
    });
    M({
        id: 44731465,
        F: 10
    });
    M({
        id: 44731467,
        F: 10
    });
    M({
        id: 44728149,
        F: 10,
        ba: nh
    });
    M({
        id: 44728150,
        F: 10,
        ba: nh
    });
    M({
        id: 44728138,
        F: 10,
        ba: nh
    });
    M({
        id: 44728139,
        F: 10,
        ba: nh
    });
    M({
        id: 44731964,
        F: 10,
        ba: nh
    });
    M({
        id: 44731965,
        F: 10,
        ba: nh
    });
    M({
        id: 668123728,
        F: 10,
        ba: nh
    });
    M({
        id: 668123729,
        F: 10,
        ba: nh
    });
    M({
        id: 44727842,
        F: 0,
        ba: nh
    });
    M({
        id: 44727843,
        F: 0,
        ba: nh
    });
    M({
        id: 31061774,
        F: 10
    });
    var Zh = M({
        id: 31061775,
        F: 10
    });
    M({
        id: 44730612,
        F: 10
    });
    M({
        id: 44731115,
        F: 0
    });
    var $h = M({
        id: 44731116,
        F: 0
    });
    M({
        id: 44731363,
        F: 10
    });
    M({
        id: 44731364,
        F: 10
    });
    M({
        id: 44712632,
        F: 10
    });
    M({
        id: 44712633,
        F: 10
    });
    M({
        id: 44715336,
        F: 10
    });
    M({
        id: 44716179,
        F: 10
    });
    M({
        id: 44716180,
        F: 10
    });
    M({
        id: 44729309,
        F: 10
    });
    M({
        id: 44717393,
        F: 50
    });
    M({
        id: 44717394,
        F: 50
    });
    M({
        id: 75259407,
        F: 0
    });
    var ai = M({
        id: 75259408,
        F: 0
    });
    M({
        id: 44721472,
        F: 0
    });
    M({
        id: 75259410,
        F: 0
    });
    M({
        id: 75259412,
        F: 0
    });
    M({
        id: 75259413,
        F: 0
    });
    M({
        id: 44732593,
        F: 10
    });
    M({
        id: 44732594,
        F: 10
    });
    M({
        id: 44725355,
        F: 10
    });
    var bi = M({
        id: 44725356,
        F: 10
    });
    M({
        id: 44729226,
        F: 50
    });
    M({
        id: 44729227,
        F: 50
    });
    M({
        id: 44724516,
        F: 0
    });
    var ci = new ih;
    M({
        id: 21068227,
        F: 50,
        ba: ci
    });
    var di = M({
        id: 21068228,
        F: 50,
        ba: ci
    });
    M({
        id: 44726389,
        F: 10
    });
    M({
        id: 44726392,
        F: 10
    });
    M({
        id: 44726393,
        F: 10
    });
    var ei = new ih;
    M({
        id: 44728726,
        F: 1,
        ba: ei
    });
    var fi = M({
        id: 44728727,
        F: 1,
        ba: ei
    });
    M({
        id: 44732375,
        F: 10,
        ba: ei
    });
    M({
        id: 44732376,
        F: 10,
        ba: ei
    });
    M({
        id: 44732377,
        F: 10,
        ba: ei
    });
    var gi = M({
        id: 44732378,
        F: 10,
        ba: ei
    });
    M({
        id: 44730464,
        F: 10
    });
    M({
        id: 44730465,
        F: 10
    });
    M({
        id: 44733378,
        F: 10
    });
    M({
        id: 44727953,
        F: 0
    });
    var hi = M({
        id: 447279544,
        F: 0
    });
    M({
        id: 44729911,
        F: 0
    });
    M({
        id: 44730425,
        F: 0
    });
    M({
        id: 44730426,
        F: 0
    });
    M({
        id: 46130026,
        F: 50,
        ba: Vh
    });
    M({
        id: 46130025,
        F: 50,
        ba: Vh
    });
    M({
        id: 447304389,
        F: 0
    });
    M({
        id: 44732022,
        F: 10
    });
    M({
        id: 44732023,
        F: 10
    });
    M({
        id: 44733471,
        F: 10
    });
    M({
        id: 44733472,
        F: 10
    });
    var ii = {}
      , Nh = (ii[32] = nh,
    ii[33] = ei,
    ii);
    Nh = void 0 === Nh ? {} : Nh;
    try {
        var Oh = JSON.parse("[null,[[16,[[10,[[44727465],[44727466,null,[null,null,47]],[44727944]]],[null,[[44729329],[44729330,null,[null,null,47]],[44729331]]]]]]]");
        Oh instanceof Array && Mh()
    } catch (a) {
        K(J.C(), "espe", a.message)
    }
    if ("undefined" === typeof window.v8_flag_map) {
        var dh = Sh.C();
        dh.h || (eh(),
        dh.h = !0);
        var Uh = dh.l, ji;
        dh.h || (eh(),
        dh.h = !0);
        ji = dh.g;
        if (null != Uh) {
            var ki = new Rh(Th(),ji);
            mh(ki)
        }
    }
    ;kh.reset();
    mh(new ph);
    v.console && "function" === typeof v.console.log && Wa(v.console.log, v.console);
    var li = function(a) {
        for (var b = [], c = a = G(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement)
                b.push(c.frameElement);
            else
                break;
        return b
    };
    var mi = !od || 9 <= Number(Id)
      , ni = od && !Fd("9")
      , oi = function() {
        if (!v.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            v.addEventListener("test", Ma, b),
            v.removeEventListener("test", Ma, b)
        } catch (c) {}
        return a
    }();
    var pi = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.h = !1
    };
    pi.prototype.stopPropagation = function() {
        this.h = !0
    }
    ;
    pi.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    }
    ;
    var qi = function(a, b) {
        pi.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.g = null;
        a && this.init(a, b)
    };
    B(qi, pi);
    var ri = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    qi.prototype.init = function(a, b) {
        var c = this.type = a.type
          , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? qd && (kd(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
        this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
        this.screenX = d.screenX || 0,
        this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
        this.screenX = a.screenX || 0,
        this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : ri[a.pointerType] || "";
        this.g = a;
        a.defaultPrevented && this.preventDefault()
    }
    ;
    qi.prototype.stopPropagation = function() {
        qi.Ca.stopPropagation.call(this);
        this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
    }
    ;
    qi.prototype.preventDefault = function() {
        qi.Ca.preventDefault.call(this);
        var a = this.g;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        ni)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    var si = "closure_listenable_" + (1E6 * Math.random() | 0)
      , ti = function(a) {
        return !(!a || !a[si])
    }
      , ui = 0;
    var vi = function(a, b, c, d, e) {
        this.listener = a;
        this.g = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Fb = e;
        this.key = ++ui;
        this.jb = this.Ab = !1
    }
      , wi = function(a) {
        a.jb = !0;
        a.listener = null;
        a.g = null;
        a.src = null;
        a.Fb = null
    };
    var xi = function(a) {
        this.src = a;
        this.g = {};
        this.h = 0
    };
    xi.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [],
        this.h++);
        var g = yi(a, b, d, e);
        -1 < g ? (b = a[g],
        c || (b.Ab = !1)) : (b = new vi(b,this.src,f,!!d,e),
        b.Ab = c,
        a.push(b));
        return b
    }
    ;
    xi.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.g))
            return !1;
        var e = this.g[a];
        b = yi(e, b, c, d);
        return -1 < b ? (wi(e[b]),
        ob(e, b),
        0 == e.length && (delete this.g[a],
        this.h--),
        !0) : !1
    }
    ;
    var zi = function(a, b) {
        var c = b.type;
        c in a.g && nb(a.g[c], b) && (wi(b),
        0 == a.g[c].length && (delete a.g[c],
        a.h--))
    };
    xi.prototype.qb = function(a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = yi(a, b, c, d));
        return -1 < e ? a[e] : null
    }
    ;
    var yi = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.jb && f.listener == b && f.capture == !!c && f.Fb == d)
                return e
        }
        return -1
    };
    var Ai = "closure_lm_" + (1E6 * Math.random() | 0)
      , Bi = {}
      , Ci = 0
      , Ei = function(a, b, c, d, e) {
        if (d && d.once)
            return Di(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                Ei(a, b[f], c, d, e);
            return null
        }
        c = Fi(c);
        return ti(a) ? a.U(b, c, Pa(d) ? !!d.capture : !!d, e) : Gi(a, b, c, !1, d, e)
    }
      , Gi = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var g = Pa(e) ? !!e.capture : !!e
          , h = Hi(a);
        h || (a[Ai] = h = new xi(a));
        c = h.add(b, c, d, g, f);
        if (c.g)
            return c;
        d = Ii();
        c.g = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            oi || (e = g),
            void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
            a.attachEvent(Ji(b.toString()), d);
        else if (a.addListener && a.removeListener)
            a.addListener(d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        Ci++;
        return c
    }
      , Ii = function() {
        var a = Ki
          , b = mi ? function(c) {
            return a.call(b.src, b.listener, c)
        }
        : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        }
        ;
        return b
    }
      , Di = function(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                Di(a, b[f], c, d, e);
            return null
        }
        c = Fi(c);
        return ti(a) ? a.vb(b, c, Pa(d) ? !!d.capture : !!d, e) : Gi(a, b, c, !0, d, e)
    }
      , Li = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                Li(a, b[f], c, d, e);
        else
            d = Pa(d) ? !!d.capture : !!d,
            c = Fi(c),
            ti(a) ? a.Qa(b, c, d, e) : a && (a = Hi(a)) && (b = a.qb(b, c, d, e)) && Mi(b)
    }
      , Mi = function(a) {
        if ("number" !== typeof a && a && !a.jb) {
            var b = a.src;
            if (ti(b))
                zi(b.l, a);
            else {
                var c = a.type
                  , d = a.g;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ji(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Ci--;
                (c = Hi(b)) ? (zi(c, a),
                0 == c.h && (c.src = null,
                b[Ai] = null)) : wi(a)
            }
        }
    }
      , Ji = function(a) {
        return a in Bi ? Bi[a] : Bi[a] = "on" + a
    }
      , Oi = function(a, b, c, d) {
        var e = !0;
        if (a = Hi(a))
            if (b = a.g[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.jb && (f = Ni(f, d),
                    e = e && !1 !== f)
                }
        return e
    }
      , Ni = function(a, b) {
        var c = a.listener
          , d = a.Fb || a.src;
        a.Ab && Mi(a);
        return c.call(d, b)
    }
      , Ki = function(a, b) {
        if (a.jb)
            return !0;
        if (!mi) {
            var c = b || La("window.event");
            b = new qi(c,this);
            var d = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == c.keyCode)
                        try {
                            c.keyCode = -1;
                            break a
                        } catch (g) {
                            e = !0
                        }
                    if (e || void 0 == c.returnValue)
                        c.returnValue = !0
                }
                c = [];
                for (e = b.currentTarget; e; e = e.parentNode)
                    c.push(e);
                a = a.type;
                for (e = c.length - 1; !b.h && 0 <= e; e--) {
                    b.currentTarget = c[e];
                    var f = Oi(c[e], a, !0, b);
                    d = d && f
                }
                for (e = 0; !b.h && e < c.length; e++)
                    b.currentTarget = c[e],
                    f = Oi(c[e], a, !1, b),
                    d = d && f
            }
            return d
        }
        return Ni(a, new qi(b,this))
    }
      , Hi = function(a) {
        a = a[Ai];
        return a instanceof xi ? a : null
    }
      , Pi = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
      , Fi = function(a) {
        if ("function" === typeof a)
            return a;
        a[Pi] || (a[Pi] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[Pi]
    };
    var N = function() {
        H.call(this);
        this.l = new xi(this);
        this.Vd = this;
        this.ea = null
    };
    B(N, H);
    N.prototype[si] = !0;
    l = N.prototype;
    l.addEventListener = function(a, b, c, d) {
        Ei(this, a, b, c, d)
    }
    ;
    l.removeEventListener = function(a, b, c, d) {
        Li(this, a, b, c, d)
    }
    ;
    l.dispatchEvent = function(a) {
        var b, c = this.ea;
        if (c)
            for (b = []; c; c = c.ea)
                b.push(c);
        c = this.Vd;
        var d = a.type || a;
        if ("string" === typeof a)
            a = new pi(a,c);
        else if (a instanceof pi)
            a.target = a.target || c;
        else {
            var e = a;
            a = new pi(d,c);
            Sb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.h && 0 <= f; f--) {
                var g = a.currentTarget = b[f];
                e = Qi(g, d, !0, a) && e
            }
        a.h || (g = a.currentTarget = c,
        e = Qi(g, d, !0, a) && e,
        a.h || (e = Qi(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.h && f < b.length; f++)
                g = a.currentTarget = b[f],
                e = Qi(g, d, !1, a) && e;
        return e
    }
    ;
    l.R = function() {
        N.Ca.R.call(this);
        if (this.l) {
            var a = this.l, b = 0, c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++)
                    ++b,
                    wi(d[e]);
                delete a.g[c];
                a.h--
            }
        }
        this.ea = null
    }
    ;
    l.U = function(a, b, c, d) {
        return this.l.add(String(a), b, !1, c, d)
    }
    ;
    l.vb = function(a, b, c, d) {
        return this.l.add(String(a), b, !0, c, d)
    }
    ;
    l.Qa = function(a, b, c, d) {
        this.l.remove(String(a), b, c, d)
    }
    ;
    var Qi = function(a, b, c, d) {
        b = a.l.g[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.jb && g.capture == c) {
                var h = g.listener
                  , k = g.Fb || g.src;
                g.Ab && zi(a.l, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    N.prototype.qb = function(a, b, c, d) {
        return this.l.qb(String(a), b, c, d)
    }
    ;
    var Ri = function(a, b) {
        this.l = a;
        this.o = b;
        this.h = 0;
        this.g = null
    };
    Ri.prototype.get = function() {
        if (0 < this.h) {
            this.h--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else
            a = this.l();
        return a
    }
    ;
    var Si = function(a, b) {
        a.o(b);
        100 > a.h && (a.h++,
        b.next = a.g,
        a.g = b)
    };
    var Ti = function(a) {
        v.setTimeout(function() {
            throw a;
        }, 0)
    }, Ui, Vi = function() {
        var a = v.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !D("Presto") && (a = function() {
            var e = Te(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random()
              , h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = Wa(function(k) {
                if (("*" == h || k.origin == h) && k.data == g)
                    this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        }
        );
        if ("undefined" !== typeof a && !Gc()) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Wc;
                    c.Wc = null;
                    e()
                }
            }
            ;
            return function(e) {
                d.next = {
                    Wc: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            v.setTimeout(e, 0)
        }
    };
    var Wi = function() {
        this.h = this.g = null
    }
      , Yi = new Ri(function() {
        return new Xi
    }
    ,function(a) {
        a.reset()
    }
    );
    Wi.prototype.add = function(a, b) {
        var c = Yi.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c
    }
    ;
    Wi.prototype.remove = function() {
        var a = null;
        this.g && (a = this.g,
        this.g = this.g.next,
        this.g || (this.h = null),
        a.next = null);
        return a
    }
    ;
    var Xi = function() {
        this.next = this.h = this.g = null
    };
    Xi.prototype.set = function(a, b) {
        this.g = a;
        this.h = b;
        this.next = null
    }
    ;
    Xi.prototype.reset = function() {
        this.next = this.h = this.g = null
    }
    ;
    var cj = function(a, b) {
        Zi || $i();
        aj || (Zi(),
        aj = !0);
        bj.add(a, b)
    }, Zi, $i = function() {
        if (v.Promise && v.Promise.resolve) {
            var a = v.Promise.resolve(void 0);
            Zi = function() {
                a.then(dj)
            }
        } else
            Zi = function() {
                var b = dj;
                "function" !== typeof v.setImmediate || v.Window && v.Window.prototype && !D("Edge") && v.Window.prototype.setImmediate == v.setImmediate ? (Ui || (Ui = Vi()),
                Ui(b)) : v.setImmediate(b)
            }
    }, aj = !1, bj = new Wi, dj = function() {
        for (var a; a = bj.remove(); ) {
            try {
                a.g.call(a.h)
            } catch (b) {
                Ti(b)
            }
            Si(Yi, a)
        }
        aj = !1
    };
    var ej = function(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var gj = function(a) {
        this.g = 0;
        this.H = void 0;
        this.o = this.h = this.l = null;
        this.A = this.B = !1;
        if (a != Ma)
            try {
                var b = this;
                a.call(void 0, function(c) {
                    fj(b, 2, c)
                }, function(c) {
                    fj(b, 3, c)
                })
            } catch (c) {
                fj(this, 3, c)
            }
    }
      , hj = function() {
        this.next = this.context = this.h = this.l = this.g = null;
        this.o = !1
    };
    hj.prototype.reset = function() {
        this.context = this.h = this.l = this.g = null;
        this.o = !1
    }
    ;
    var ij = new Ri(function() {
        return new hj
    }
    ,function(a) {
        a.reset()
    }
    )
      , jj = function(a, b, c) {
        var d = ij.get();
        d.l = a;
        d.h = b;
        d.context = c;
        return d
    };
    gj.prototype.then = function(a, b, c) {
        return kj(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    }
    ;
    gj.prototype.$goog_Thenable = !0;
    gj.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new lj(a);
            cj(function() {
                mj(this, b)
            }, this)
        }
    }
    ;
    var mj = function(a, b) {
        if (0 == a.g)
            if (a.l) {
                var c = a.l;
                if (c.h) {
                    for (var d = 0, e = null, f = null, g = c.h; g && (g.o || (d++,
                    g.g == a && (e = g),
                    !(e && 1 < d))); g = g.next)
                        e || (f = g);
                    e && (0 == c.g && 1 == d ? mj(c, b) : (f ? (d = f,
                    d.next == c.o && (c.o = d),
                    d.next = d.next.next) : nj(c),
                    oj(c, e, 3, b)))
                }
                a.l = null
            } else
                fj(a, 3, b)
    }
      , qj = function(a, b) {
        a.h || 2 != a.g && 3 != a.g || pj(a);
        a.o ? a.o.next = b : a.h = b;
        a.o = b
    }
      , kj = function(a, b, c, d) {
        var e = jj(null, null, null);
        e.g = new gj(function(f, g) {
            e.l = b ? function(h) {
                try {
                    var k = b.call(d, h);
                    f(k)
                } catch (n) {
                    g(n)
                }
            }
            : f;
            e.h = c ? function(h) {
                try {
                    var k = c.call(d, h);
                    void 0 === k && h instanceof lj ? g(h) : f(k)
                } catch (n) {
                    g(n)
                }
            }
            : g
        }
        );
        e.g.l = a;
        qj(a, e);
        return e.g
    };
    gj.prototype.D = function(a) {
        this.g = 0;
        fj(this, 2, a)
    }
    ;
    gj.prototype.G = function(a) {
        this.g = 0;
        fj(this, 3, a)
    }
    ;
    var fj = function(a, b, c) {
        if (0 == a.g) {
            a === c && (b = 3,
            c = new TypeError("Promise cannot resolve to itself"));
            a.g = 1;
            a: {
                var d = c
                  , e = a.D
                  , f = a.G;
                if (d instanceof gj) {
                    qj(d, jj(e || Ma, f || null, a));
                    var g = !0
                } else if (ej(d))
                    d.then(e, f, a),
                    g = !0;
                else {
                    if (Pa(d))
                        try {
                            var h = d.then;
                            if ("function" === typeof h) {
                                rj(d, h, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (k) {
                            f.call(a, k);
                            g = !0;
                            break a
                        }
                    g = !1
                }
            }
            g || (a.H = c,
            a.g = b,
            a.l = null,
            pj(a),
            3 != b || c instanceof lj || sj(a, c))
        }
    }
      , rj = function(a, b, c, d, e) {
        var f = !1
          , g = function(k) {
            f || (f = !0,
            c.call(e, k))
        }
          , h = function(k) {
            f || (f = !0,
            d.call(e, k))
        };
        try {
            b.call(a, g, h)
        } catch (k) {
            h(k)
        }
    }
      , pj = function(a) {
        a.B || (a.B = !0,
        cj(a.J, a))
    }
      , nj = function(a) {
        var b = null;
        a.h && (b = a.h,
        a.h = b.next,
        b.next = null);
        a.h || (a.o = null);
        return b
    };
    gj.prototype.J = function() {
        for (var a; a = nj(this); )
            oj(this, a, this.g, this.H);
        this.B = !1
    }
    ;
    var oj = function(a, b, c, d) {
        if (3 == c && b.h && !b.o)
            for (; a && a.A; a = a.l)
                a.A = !1;
        if (b.g)
            b.g.l = null,
            tj(b, c, d);
        else
            try {
                b.o ? b.l.call(b.context) : tj(b, c, d)
            } catch (e) {
                uj.call(null, e)
            }
        Si(ij, b)
    }
      , tj = function(a, b, c) {
        2 == b ? a.l.call(a.context, c) : a.h && a.h.call(a.context, c)
    }
      , sj = function(a, b) {
        a.A = !0;
        cj(function() {
            a.A && uj.call(null, b)
        })
    }
      , uj = Ti
      , lj = function(a) {
        Za.call(this, a)
    };
    B(lj, Za);
    lj.prototype.name = "cancel";
    var vj = function(a, b) {
        N.call(this);
        this.h = a || 1;
        this.g = b || v;
        this.o = Wa(this.Ve, this);
        this.A = z()
    };
    B(vj, N);
    l = vj.prototype;
    l.Wa = !1;
    l.xa = null;
    l.setInterval = function(a) {
        this.h = a;
        this.xa && this.Wa ? (this.stop(),
        this.start()) : this.xa && this.stop()
    }
    ;
    l.Ve = function() {
        if (this.Wa) {
            var a = z() - this.A;
            0 < a && a < .8 * this.h ? this.xa = this.g.setTimeout(this.o, this.h - a) : (this.xa && (this.g.clearTimeout(this.xa),
            this.xa = null),
            this.dispatchEvent("tick"),
            this.Wa && (this.stop(),
            this.start()))
        }
    }
    ;
    l.start = function() {
        this.Wa = !0;
        this.xa || (this.xa = this.g.setTimeout(this.o, this.h),
        this.A = z())
    }
    ;
    l.stop = function() {
        this.Wa = !1;
        this.xa && (this.g.clearTimeout(this.xa),
        this.xa = null)
    }
    ;
    l.R = function() {
        vj.Ca.R.call(this);
        this.stop();
        delete this.g
    }
    ;
    var wj = function(a, b, c) {
        if ("function" === typeof a)
            c && (a = Wa(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = Wa(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : v.setTimeout(a, b || 0)
    };
    var xj = function() {
        return Math.round(z() / 1E3)
    };
    var yj = function() {
        this.h = -1
    };
    var zj = function() {
        this.g = {};
        return this
    };
    zj.prototype.remove = function(a) {
        var b = this.g;
        a in b && delete b[a]
    }
    ;
    zj.prototype.set = function(a, b) {
        this.g[a] = b
    }
    ;
    var Aj = function(a, b) {
        a.g.eb = Qb(a.g, "eb", 0) | b
    };
    zj.prototype.get = function(a) {
        return Qb(this.g, a, null)
    }
    ;
    var Bj = null
      , Cj = function() {
        this.g = {};
        this.h = 0
    }
      , Dj = function() {
        Bj || (Bj = new Cj);
        return Bj
    }
      , Ej = function(a, b) {
        a.g[b.A] = b
    }
      , Fj = function(a, b) {
        this.A = a;
        this.l = !0;
        this.g = b
    };
    Fj.prototype.h = function() {
        return String(this.g)
    }
    ;
    var Gj = function(a, b) {
        Fj.call(this, String(a), b);
        this.o = a;
        this.g = !!b
    };
    t(Gj, Fj);
    Gj.prototype.h = function() {
        return this.g ? "1" : "0"
    }
    ;
    var Hj = function(a, b) {
        Fj.call(this, a, b)
    };
    t(Hj, Fj);
    Hj.prototype.h = function() {
        return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : ""
    }
    ;
    var Ij = function(a) {
        if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
            a = a.split(".");
            var b = Number(a[0])
              , c = Number(a[1]);
            return new Hj("",new yf(c,b,Number(a[3]) - c,Number(a[2]) - b))
        }
        return new Hj("",new yf(0,0,0,0))
    };
    var Jj = function(a) {
        var b = new yf(-Number.MAX_VALUE / 2,-Number.MAX_VALUE / 2,Number.MAX_VALUE,Number.MAX_VALUE)
          , c = new yf(0,0,0,0);
        if (!a || 0 == a.length)
            return c;
        for (var d = 0; d < a.length; d++) {
            a: {
                var e = b;
                var f = a[d]
                  , g = Math.max(e.left, f.left)
                  , h = Math.min(e.left + e.width, f.left + f.width);
                if (g <= h) {
                    var k = Math.max(e.top, f.top);
                    f = Math.min(e.top + e.height, f.top + f.height);
                    if (k <= f) {
                        e.left = g;
                        e.top = k;
                        e.width = h - g;
                        e.height = f - k;
                        e = !0;
                        break a
                    }
                }
                e = !1
            }
            if (!e)
                return c
        }
        return b
    }
      , Kj = function(a, b) {
        var c = a.getBoundingClientRect();
        a = $f(a, b);
        return new yf(Math.round(a.x),Math.round(a.y),Math.round(c.right - c.left),Math.round(c.bottom - c.top))
    }
      , Lj = function(a, b, c) {
        if (b && c) {
            a: {
                var d = Math.max(b.left, c.left);
                var e = Math.min(b.left + b.width, c.left + c.width);
                if (d <= e) {
                    var f = Math.max(b.top, c.top)
                      , g = Math.min(b.top + b.height, c.top + c.height);
                    if (f <= g) {
                        d = new yf(d,f,e - d,g - f);
                        break a
                    }
                }
                d = null
            }
            e = d ? d.height * d.width : 0;
            f = d ? b.height * b.width : 0;
            d = d && f ? Math.round(e / f * 100) : 0;
            Ej(a, new Fj("vp",d));
            d && 0 < d ? (e = zf(b),
            f = zf(c),
            e = e.top >= f.top && e.top < f.bottom) : e = !1;
            Ej(a, new Gj(512,e));
            d && 0 < d ? (e = zf(b),
            f = zf(c),
            e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;
            Ej(a, new Gj(1024,e));
            d && 0 < d ? (e = zf(b),
            f = zf(c),
            e = e.left >= f.left && e.left < f.right) : e = !1;
            Ej(a, new Gj(2048,e));
            d && 0 < d ? (b = zf(b),
            c = zf(c),
            c = b.right <= c.right && b.right > c.left) : c = !1;
            Ej(a, new Gj(4096,c))
        }
    };
    var Mj = function(a, b) {
        var c = 0;
        Jb(G(), "ima", "video", "client", "tagged") && (c = 1);
        var d = null;
        a && (d = a());
        if (d) {
            a = Dj();
            a.g = {};
            var e = new Gj(32,!0);
            e.l = !1;
            Ej(a, e);
            e = G().document;
            e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
            Ej(a, new Gj(64,"hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
            try {
                var f = G().top;
                try {
                    var g = !!f.location.href || "" === f.location.href
                } catch (m) {
                    g = !1
                }
                if (g) {
                    var h = li(d);
                    var k = h && 0 != h.length ? "1" : "0"
                } else
                    k = "2"
            } catch (m) {
                k = "2"
            }
            Ej(a, new Gj(256,"2" == k));
            Ej(a, new Gj(128,"1" == k));
            h = g = G().top;
            "2" == k && (h = G());
            f = Kj(d, h);
            Ej(a, new Hj("er",f));
            try {
                var n = h.document && !h.document.body ? null : Re(h || window)
            } catch (m) {
                n = null
            }
            n ? (h = Se(Me(h.document).g),
            Ej(a, new Gj(16384,!!h)),
            n = h ? new yf(h.x,h.y,n.width,n.height) : null) : n = null;
            Ej(a, new Hj("vi",n));
            if (n && "1" == k) {
                k = li(d);
                d = [];
                for (h = 0; h < k.length; h++)
                    (e = Kj(k[h], g)) && d.push(e);
                d.push(n);
                n = Jj(d)
            }
            Lj(a, f, n);
            a.h && Ej(a, new Fj("ts",xj() - a.h));
            a.h = xj()
        } else
            a = Dj(),
            a.g = {},
            a.h = xj(),
            Ej(a, new Gj(32,!1));
        this.l = a;
        this.g = new zj;
        this.g.set("ve", 4);
        c && Aj(this.g, 1);
        Jb(G(), "ima", "video", "client", "crossdomainTag") && Aj(this.g, 4);
        Jb(G(), "ima", "video", "client", "sdkTag") && Aj(this.g, 8);
        Jb(G(), "ima", "video", "client", "jsTag") && Aj(this.g, 2);
        b && Qb(b, "fullscreen", !1) && Aj(this.g, 16);
        this.h = b = null;
        if (c && (c = Jb(G(), "ima", "video", "client"),
        c.getEData)) {
            this.h = c.getEData();
            if (c = Jb(G(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (a = c())
                    this.h.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp),
                    c = this.l,
                    b = a.er,
                    a = a.vi,
                    b && a && (b = Ij(b).g,
                    a = Ij(a).g,
                    k = null,
                    Qb(c.g, "er", null) && (k = Qb(c.g, "er", null).g,
                    k.top += b.top,
                    k.left += b.left,
                    Ej(c, new Hj("er",k))),
                    Qb(c.g, "vi", null) && (n = Qb(c.g, "vi", null).g,
                    n.top += b.top,
                    n.left += b.left,
                    d = [],
                    d.push(n),
                    d.push(b),
                    d.push(a),
                    b = Jj(d),
                    Lj(c, k, b),
                    Ej(c, new Hj("vi",a))));
            a: {
                if (this.h) {
                    if (this.h.getTagLoadTimestamp) {
                        b = this.h.getTagLoadTimestamp();
                        break a
                    }
                    if (this.h.getTimeSinceTagLoadSeconds) {
                        b = this.h.getTimeSinceTagLoadSeconds();
                        break a
                    }
                }
                b = null
            }
        }
        c = this.g;
        a = window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1E3) : null;
        c.set.call(c, "td", xj() - (null != a ? a : null != b ? b : xj()))
    };
    var Nj = new vj(200)
      , Oj = function(a, b) {
        try {
            var c = new Mj(a,b);
            a = [];
            var d = Number(c.g.get("eb"));
            c.g.remove("eb");
            var e, f = c.g;
            b = [];
            for (var g in f.g)
                b.push(g + f.g[g]);
            (e = b.join("_")) && a.push(e);
            if (c.h) {
                var h = c.h.serialize();
                h && a.push(h)
            }
            var k, n = c.l;
            e = d;
            f = [];
            e || (e = 0);
            for (var m in n.g) {
                var u = n.g[m];
                if (u instanceof Gj)
                    u.g && (e |= u.o);
                else {
                    var p, w = n.g[m];
                    (p = w.l ? w.h() : "") && f.push(m + p)
                }
            }
            f.push("eb" + String(e));
            (k = f.join("_")) && a.push(k);
            c.g.set("eb", d);
            return a.join("_")
        } catch (x) {
            return "tle;" + Uc(x.name, 12) + ";" + Uc(x.message, 40)
        }
    }
      , Pj = function(a, b) {
        Ei(Nj, "tick", function() {
            var c = Oj(b);
            a(c)
        });
        Nj.start();
        Nj.dispatchEvent("tick")
    };
    var Qj = function(a) {
        ce(this, a, null, null)
    };
    B(Qj, Yd);
    var Rj;
    Rj = ["av.key", "js", "unreleased"].slice(-1)[0];
    var Sj = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/
      , Wj = function(a) {
        a = a || Tj();
        for (var b = new Uj(v.location.href,v,!1), c = null, d = a.length - 1, e = d; 0 <= e; --e) {
            var f = a[e];
            !c && Sj.test(f.url) && (c = f);
            if (f.url && !f.tc) {
                b = f;
                break
            }
        }
        e = null;
        f = a.length && a[d].url;
        0 != b.depth && f && (e = a[d]);
        return new Vj(b,e,c)
    }
      , Tj = function() {
        var a = v
          , b = []
          , c = null;
        do {
            var d = a;
            if (hf(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else
                e = c,
                c = null;
            b.push(new Uj(e || "",d));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);d = 0;
        for (a = b.length - 1; d <= a; ++d)
            b[d].depth = a - d;
        d = v;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a)
                e = b[a],
                e.url || (e.url = d.location.ancestorOrigins[a - 1] || "",
                e.tc = !0);
        return b
    }
      , Vj = function(a, b, c) {
        this.g = a;
        this.h = b;
        this.l = c
    }
      , Uj = function(a, b, c) {
        this.url = a;
        this.ma = b;
        this.tc = !!c;
        this.depth = null
    };
    var Xj = function() {
        this.l = "&";
        this.h = {};
        this.o = 0;
        this.g = []
    }
      , Yj = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }
      , ak = function(a, b, c, d, e) {
        var f = [];
        jf(a, function(g, h) {
            (g = Zj(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
      , Zj = function(a, b, c, d, e) {
        if (null == a)
            return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0,
            d < c.length) {
                for (var f = [], g = 0; g < a.length; g++)
                    f.push(Zj(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0,
            2 > e ? encodeURIComponent(ak(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
      , bk = function(a, b, c) {
        a.g.push(b);
        a.h[b] = c
    }
      , ck = function(a, b, c, d) {
        a.g.push(b);
        a.h[b] = Yj(c, d)
    }
      , ek = function(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = dk(a) - c.length;
        if (0 > d)
            return "";
        a.g.sort(function(m, u) {
            return m - u
        });
        c = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var n = ak(h[k], a.l, ",$");
                if (n) {
                    n = e + n;
                    if (d >= n.length) {
                        d -= n.length;
                        b += n;
                        e = a.l;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a + ""
    }
      , dk = function(a) {
        var b = 1, c;
        for (c in a.h)
            b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    };
    var fk = function(a, b, c, d, e) {
        if ((d ? a.g : Math.random()) < (e || .01))
            try {
                if (c instanceof Xj)
                    var f = c;
                else
                    f = new Xj,
                    jf(c, function(h, k) {
                        var n = f
                          , m = n.o++;
                        bk(n, m, Yj(k, h))
                    });
                var g = ek(f, a.h, "/pagead/gen_204?id=" + b + "&");
                g && Bf(v, g)
            } catch (h) {}
    };
    var ik = function() {
        var a = gk;
        this.B = hk;
        this.A = "jserror";
        this.l = !0;
        this.h = null;
        this.H = this.Fa;
        this.g = void 0 === a ? null : a;
        this.o = !1
    };
    l = ik.prototype;
    l.Xb = function(a) {
        this.h = a
    }
    ;
    l.Fc = function(a) {
        this.A = a
    }
    ;
    l.Gc = function(a) {
        this.l = a
    }
    ;
    l.Hc = function(a) {
        this.o = a
    }
    ;
    l.$a = function(a, b, c) {
        try {
            if (this.g && this.g.l) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                yg(this.g, d)
            } else
                e = b()
        } catch (g) {
            b = this.l;
            try {
                xg(d);
                var f = new ze(g,{
                    message: jk(g)
                });
                b = this.H(a, f, void 0, c)
            } catch (h) {
                this.Fa(217, h)
            }
            if (!b)
                throw g;
        }
        return e
    }
    ;
    l.Cc = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h)
                g[h - 0] = arguments[h];
            return e.$a(a, function() {
                return b.apply(c, g)
            }, d)
        }
    }
    ;
    l.Fa = function(a, b, c, d, e) {
        e = e || this.A;
        try {
            var f = new Xj;
            ck(f, 1, "context", a);
            Ae(b) || (b = new ze(b,{
                message: jk(b)
            }));
            b.msg && ck(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h)
                try {
                    this.h(g)
                } catch (k) {}
            if (d)
                try {
                    d(g)
                } catch (k) {}
            bk(f, 3, [g]);
            var h = Wj();
            h.h && ck(f, 4, "top", h.h.url || "");
            bk(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? df(h.g.url) : ""
            }]);
            fk(this.B, e, f, this.o, c)
        } catch (k) {
            try {
                fk(this.B, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: jk(k),
                    url: h && h.g.url
                }, this.o, c)
            } catch (n) {}
        }
        return this.l
    }
    ;
    var jk = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d; )
                    d = a,
                    a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };
    var hk, kk, lk = fg(), gk = new wg(1,lk);
    hk = new function() {
        var a = void 0 === a ? F : a;
        this.h = "http:" === a.location.protocol ? "http:" : "https:";
        this.g = Math.random()
    }
    ;
    "number" !== typeof lk.google_srt && (lk.google_srt = Math.random());
    var mk = hk
      , nk = lk.google_srt;
    0 <= nk && 1 >= nk && (mk.g = nk);
    kk = new ik;
    kk.Xb(function(a) {
        var b = F.jerExpIds;
        if (Array.isArray(b) && 0 !== b.length) {
            var c = a.eid;
            c ? (b = [].concat(fa(c.split(",")), fa(b)),
            sb(b),
            a.eid = b.join(",")) : a.eid = b.join(",")
        }
        (b = F.jerUserAgent) && (a.useragent = b)
    });
    kk.Hc(!0);
    "complete" == lk.document.readyState ? lk.google_measure_js_timing || gk.H() : gk.l && De(lk, "load", function() {
        lk.google_measure_js_timing || gk.H()
    });
    var ok = [0, 2, 1]
      , pk = null;
    document.addEventListener && document.addEventListener("mousedown", function(a) {
        pk = a
    }, !0);
    window.mb = function(a) {
        if (a) {
            var b;
            if (b = window.event || pk) {
                var c;
                (c = b.which ? 1 << ok[b.which - 1] : b.button) && b.shiftKey && (c |= 8);
                c && b.altKey && (c |= 16);
                c && b.ctrlKey && (c |= 32);
                b = c
            } else
                b = null;
            if (c = b)
                if (window.css)
                    window.css(a.id, "mb", c, void 0, void 0);
                else if (a) {
                    b = a.href;
                    var d = b.indexOf("&mb=");
                    if (0 > d)
                        c = b + "&mb=" + c;
                    else {
                        d += 4;
                        var e = b.indexOf("&", d);
                        c = 0 <= e ? b.substring(0, d) + c + b.substring(e) : b.substring(0, d) + c
                    }
                    a.href = 2E3 < c.length ? b : c
                }
        }
    }
    ;
    var qk = function(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                d = (void 0 === c ? 0 : c) ? (new Je(e.innerWidth,e.innerHeight)).round() : Re(e || window).round()
            } catch (k) {
                d = new Je(-12245933,-12245933)
            }
            a = d;
            var f = Se(Me(b.document).g);
            if (-12245933 == a.width) {
                var g = a.width;
                var h = new I(g,g,g,g)
            } else
                h = new I(f.y,f.x + a.width,f.y + a.height,f.x);
            return h
        } catch (k) {
            return new I(-12245933,-12245933,-12245933,-12245933)
        }
    };
    var rk = function(a) {
        var b = {};
        C(a, function(c) {
            var d = c.event
              , e = b[d];
            b.hasOwnProperty(d) ? null !== e && (c.h(e) || (b[d] = null)) : b[d] = c
        });
        pb(a, function(c) {
            return null === b[c.event]
        })
    };
    var sk = {
        NONE: 0,
        wf: 1
    };
    var tk = function() {
        this.Y = 0;
        this.g = !1;
        this.h = -1;
        this.Xa = !1;
        this.ra = 0
    };
    tk.prototype.isVisible = function() {
        return this.Xa ? .3 <= this.Y : .5 <= this.Y
    }
    ;
    var uk = {
        vf: 0,
        Af: 1
    }
      , vk = {
        668123728: 0,
        668123729: 1
    }
      , wk = {
        44728149: 0,
        44728150: 1
    }
      , xk = {
        44728138: 0,
        44728139: 1
    }
      , yk = {
        44727842: 0,
        44727843: 1
    }
      , zk = {
        44731964: 0,
        44731965: 1
    }
      , Ak = {
        NONE: 0,
        ag: 1,
        Ef: 2
    }
      , Bk = {
        480596784: 0,
        480596785: 1,
        21063355: 2
    };
    var Ck = function() {
        this.g = null;
        this.l = !1;
        this.o = null
    }
      , Dk = function(a) {
        a.l = !0;
        return a
    }
      , Ek = function(a, b) {
        a.o = void 0 === b ? null : b
    }
      , Fk = function(a, b) {
        a.o && C(b, function(c) {
            c = a.o[c];
            void 0 !== c && a.h(c)
        })
    }
      , Gk = function(a) {
        Ck.call(this);
        this.A = a
    };
    t(Gk, Ck);
    Gk.prototype.h = function(a) {
        null === this.g && Lb(this.A, a) && (this.g = a)
    }
    ;
    var Hk = function() {
        Ck.call(this)
    };
    t(Hk, Ck);
    Hk.prototype.h = function(a) {
        null === this.g && "number" === typeof a && (this.g = a)
    }
    ;
    var Ik = function() {
        Ck.call(this)
    };
    t(Ik, Ck);
    Ik.prototype.h = function(a) {
        null === this.g && "string" === typeof a && (this.g = a)
    }
    ;
    var Jk = function() {
        this.g = {};
        this.l = !0;
        this.h = {}
    };
    Jk.prototype.reset = function() {
        this.g = {};
        this.l = !0;
        this.h = {}
    }
    ;
    var Kk = function(a, b, c) {
        a.g[b] || (a.g[b] = new Gk(c));
        return a.g[b]
    }
      , Lk = function(a) {
        a.g.queryid || (a.g.queryid = new Ik)
    }
      , Mk = function(a, b, c) {
        (a = a.g[b]) && a.h(c)
    }
      , Nk = function(a, b) {
        if (Kb(a.h, b))
            return a.h[b];
        if (a = a.g[b])
            return a.g
    }
      , Ok = function(a) {
        var b = {}
          , c = Cb(a.g, function(d) {
            return d.l
        });
        Bb(c, function(d, e) {
            d = void 0 !== a.h[e] ? String(a.h[e]) : d.l && null !== d.g ? String(d.g) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }
      , Pk = function(a) {
        a = Ok(a);
        var b = [];
        Bb(a, function(c, d) {
            d in Object.prototype || "undefined" != typeof c && b.push([d, ":", c].join(""))
        });
        return b
    }
      , Qk = function() {
        var a = O.C().O
          , b = oh();
        a.l && C(Hb(a.g), function(c) {
            return Fk(c, b)
        })
    };
    var Rk = !od && !Jc();
    var Sk = function() {
        this.g = this.Oa = null
    };
    var Tk = function() {};
    Tk.prototype.now = function() {
        return 0
    }
    ;
    Tk.prototype.h = function() {
        return 0
    }
    ;
    Tk.prototype.l = function() {
        return 0
    }
    ;
    Tk.prototype.g = function() {
        return 0
    }
    ;
    var Vk = function() {
        if (!Uk())
            throw Error();
    };
    t(Vk, Tk);
    var Uk = function() {
        return !(!F || !F.performance)
    };
    Vk.prototype.now = function() {
        return Uk() && F.performance.now ? F.performance.now() : Tk.prototype.now.call(this)
    }
    ;
    Vk.prototype.h = function() {
        return Uk() && F.performance.memory ? F.performance.memory.totalJSHeapSize || 0 : Tk.prototype.h.call(this)
    }
    ;
    Vk.prototype.l = function() {
        return Uk() && F.performance.memory ? F.performance.memory.usedJSHeapSize || 0 : Tk.prototype.l.call(this)
    }
    ;
    Vk.prototype.g = function() {
        return Uk() && F.performance.memory ? F.performance.memory.jsHeapSizeLimit || 0 : Tk.prototype.g.call(this)
    }
    ;
    var Wk = function() {};
    Wk.prototype.isVisible = function() {
        return 1 === Ag(oe)
    }
    ;
    var Xk = function(a, b) {
        this.g = a;
        this.depth = b
    }
      , Zk = function(a) {
        a = a || Tj();
        var b = Math.max(a.length - 1, 0)
          , c = Wj(a);
        a = c.g;
        var d = c.h
          , e = c.l
          , f = [];
        c = function(h, k) {
            return null == h ? k : h
        }
        ;
        e && f.push(new Xk([e.url, e.tc ? 2 : 0],c(e.depth, 1)));
        d && d != e && f.push(new Xk([d.url, 2],0));
        a.url && a != e && f.push(new Xk([a.url, 0],c(a.depth, b)));
        var g = db(f, function(h, k) {
            return f.slice(0, f.length - k)
        });
        !a.url || (e || d) && a != e || (d = lf(a.url)) && g.push([new Xk([d, 1],c(a.depth, b))]);
        g.push([]);
        return db(g, function(h) {
            return Yk(b, h)
        })
    };
    function Yk(a, b) {
        var c = eb(b, function(e, f) {
            return Math.max(e, f.depth)
        }, -1)
          , d = vb("", c + 2);
        d[0] = a;
        C(b, function(e) {
            return d[e.depth + 1] = e.g
        });
        return d
    }
    var $k = function() {
        var a = Zk();
        return db(a, function(b) {
            return Zj(b)
        })
    };
    var al = function() {
        this.h = new Wk;
        this.g = Uk() ? new Vk : new Tk
    }
      , cl = function() {
        bl();
        var a = F.document;
        return !!(a && a.body && a.body.getBoundingClientRect && "function" === typeof F.setInterval && "function" === typeof F.clearInterval && "function" === typeof F.setTimeout && "function" === typeof F.clearTimeout)
    };
    al.prototype.setInterval = function(a, b) {
        return F.setInterval(a, b)
    }
    ;
    al.prototype.clearInterval = function(a) {
        F.clearInterval(a)
    }
    ;
    al.prototype.setTimeout = function(a, b) {
        return F.setTimeout(a, b)
    }
    ;
    al.prototype.clearTimeout = function(a) {
        F.clearTimeout(a)
    }
    ;
    var dl = function(a) {
        bl();
        var b = fg() || F;
        Bf(b, a)
    }
      , el = function() {
        bl();
        return $k()
    };
    Na(al);
    var fl = function() {};
    fl.prototype.getContext = function() {
        if (!this.g) {
            if (!F)
                throw Error("Context has not been set and window is undefined.");
            this.g = al.C()
        }
        return this.g
    }
    ;
    Na(fl);
    var bl = function() {
        return fl.C().getContext()
    };
    var gl = function(a) {
        ce(this, a, null, null)
    };
    B(gl, Yd);
    var hl = function(a) {
        this.o = a;
        this.g = -1;
        this.h = this.l = 0
    }
      , il = function(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e)
                d[e - 0] = arguments[e];
            if (-1 < a.g)
                return b.apply(null, fa(d));
            try {
                return a.g = a.o.g.now(),
                b.apply(null, fa(d))
            } finally {
                a.l += a.o.g.now() - a.g,
                a.g = -1,
                a.h += 1
            }
        }
    };
    var jl = function(a, b) {
        this.h = a;
        this.l = b;
        this.g = new hl(a)
    };
    var kl = function() {};
    var ll = {
        tg: 1,
        Rg: 2,
        ig: 3
    };
    cc(Yb(Zb("https://pagead2.googlesyndication.com/pagead/osd.js")));
    var O = function() {
        this.o = void 0;
        this.h = this.H = 0;
        this.B = -1;
        this.O = new Jk;
        Ek(Dk(Kk(this.O, "mv", Ak)), Bk);
        Kk(this.O, "omid", uk);
        Dk(Kk(this.O, "epoh", uk));
        Dk(Kk(this.O, "epph", uk));
        Ek(Dk(Kk(this.O, "umt", uk)), vk);
        Dk(Kk(this.O, "phel", uk));
        Dk(Kk(this.O, "phell", uk));
        Dk(Kk(this.O, "oseid", ll));
        var a = this.O;
        a.g.sloi || (a.g.sloi = new Hk);
        Dk(a.g.sloi);
        Dk(Kk(this.O, "xdi", uk));
        Dk(Kk(this.O, "amp", uk));
        Dk(Kk(this.O, "prf", uk));
        Dk(Kk(this.O, "gtx", uk));
        Dk(Kk(this.O, "mvp_lv", uk));
        Ek(Dk(Kk(this.O, "vcm", uk)), yk);
        Ek(Dk(Kk(this.O, "dov", Ak)), wk);
        Dk(Kk(this.O, "postrxl", uk));
        this.O.h.postrxl = 1;
        Ek(Dk(Kk(this.O, "mpv", uk)), xk);
        Ek(Dk(Kk(this.O, "ssmol", uk)), zk);
        Dk(Kk(this.O, "zocl", uk));
        this.g = new jl(bl(),this.O);
        this.A = this.l = !1;
        this.flags = new kl
    };
    O.prototype.Bc = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = this.O;
            if (b.l) {
                a = a.split("&");
                for (var c = a.length - 1; 0 <= c; c--) {
                    var d = a[c].split("=")
                      , e = d[0];
                    d = 1 < d.length ? parseInt(d[1], 10) : 1;
                    isNaN(d) || (e = b.g[e]) && e.h(d)
                }
            }
        }
    }
    ;
    Na(O);
    var ml = function() {
        var a = "https:";
        F && F.location && "http:" === F.location.protocol && (a = "http:");
        this.h = a;
        this.g = .01;
        this.l = Math.random()
    }
      , nl = function(a, b, c, d, e) {
        if ((d ? a.l : Math.random()) < (e || a.g))
            try {
                if (c instanceof Xj)
                    var f = c;
                else
                    f = new Xj,
                    jf(c, function(h, k) {
                        var n = f
                          , m = n.o++;
                        bk(n, m, Yj(k, h))
                    });
                var g = ek(f, a.h, "/pagead/gen_204?id=" + b + "&");
                g && dl(g)
            } catch (h) {}
    };
    var ql = function() {
        var a = ol;
        this.B = pl;
        this.A = "jserror";
        this.l = !0;
        this.h = null;
        this.H = this.Fa;
        this.g = void 0 === a ? null : a;
        this.o = !1
    };
    l = ql.prototype;
    l.Xb = function(a) {
        this.h = a
    }
    ;
    l.Fc = function(a) {
        this.A = a
    }
    ;
    l.Gc = function(a) {
        this.l = a
    }
    ;
    l.Hc = function(a) {
        this.o = a
    }
    ;
    l.$a = function(a, b, c) {
        var d = this;
        return il(O.C().g.g, function() {
            try {
                if (d.g && d.g.l) {
                    var e = d.g.start(a.toString(), 3);
                    var f = b();
                    yg(d.g, e)
                } else
                    f = b()
            } catch (k) {
                var g = d.l;
                try {
                    xg(e);
                    var h = new rl(sl(k));
                    g = d.H(a, h, void 0, c)
                } catch (n) {
                    d.Fa(217, n)
                }
                if (!g)
                    throw k;
            }
            return f
        })()
    }
    ;
    l.Cc = function(a, b, c, d) {
        var e = this;
        return il(O.C().g.g, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h)
                g[h - 0] = arguments[h];
            return e.$a(a, function() {
                return b.apply(c, g)
            }, d)
        })
    }
    ;
    l.Fa = function(a, b, c, d, e) {
        e = e || this.A;
        try {
            var f = new Xj;
            ck(f, 1, "context", a);
            Ae(b) || (b = new rl(sl(b)));
            b.msg && ck(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h)
                try {
                    this.h(g)
                } catch (k) {}
            if (d)
                try {
                    d(g)
                } catch (k) {}
            bk(f, 3, [g]);
            var h = Wj();
            h.h && ck(f, 4, "top", h.h.url || "");
            bk(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? df(h.g.url) : ""
            }]);
            nl(this.B, e, f, this.o, c)
        } catch (k) {
            try {
                nl(this.B, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: sl(k),
                    url: h && h.g.url
                }, this.o, c)
            } catch (n) {}
        }
        return this.l
    }
    ;
    var sl = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d; )
                    d = a,
                    a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    }
      , rl = function(a) {
        ze.call(this, Error(a), {
            message: a
        })
    };
    t(rl, ze);
    var pl, tl, ol = new wg(1,fg()), ul = function() {
        var a = fg();
        a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || ol.H())
    };
    (function() {
        pl = new ml;
        tl = new ql;
        var a = fg();
        a && a.document && ("complete" == a.document.readyState ? ul() : ol.l && De(a, "load", function() {
            ul()
        }))
    }
    )();
    var vl = function(a) {
        tl.Xb(function(b) {
            C(a, function(c) {
                c(b)
            })
        })
    }
      , wl = function(a, b) {
        return tl.$a(a, b, void 0)
    }
      , xl = function(a, b, c, d) {
        return tl.Cc(a, b, c, d)
    }
      , yl = function(a, b, c, d) {
        tl.Fa(a, b, c, d)
    };
    var zl = Date.now(), Cl = -1, Dl = -1, El, Fl = -1, Gl = !1, Hl = function() {
        return Date.now() - zl
    }, Il = function() {
        var a = O.C().o
          , b = 0 <= Dl ? Hl() - Dl : -1
          , c = Gl ? Hl() - Cl : -1
          , d = 0 <= Fl ? Hl() - Fl : -1;
        if (947190542 == a)
            return 100;
        if (79463069 == a)
            return 200;
        a = [2E3, 4E3];
        var e = [250, 500, 1E3];
        yl(637, Error(), .001);
        var f = b;
        -1 != c && c < b && (f = c);
        for (b = 0; b < a.length; ++b)
            if (f < a[b]) {
                var g = e[b];
                break
            }
        void 0 === g && (g = e[a.length]);
        return -1 != d && 1500 < d && 4E3 > d ? 500 : g
    };
    var Jl = function(a, b, c) {
        var d = new I(0,0,0,0);
        this.time = a;
        this.volume = null;
        this.l = b;
        this.g = d;
        this.h = c
    };
    var Kl = function(a, b, c, d, e, f, g) {
        this.o = a;
        this.l = b;
        this.B = c;
        this.g = d;
        this.A = e;
        this.h = f;
        this.H = g
    };
    var Ll = {
        currentTime: 1,
        duration: 2,
        isVpaid: 4,
        volume: 8,
        isYouTube: 16,
        isPlaying: 32
    }
      , Mb = {
        bc: "start",
        FIRST_QUARTILE: "firstquartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdquartile",
        COMPLETE: "complete",
        Gd: "metric",
        $b: "pause",
        Rc: "resume",
        SKIPPED: "skip",
        VIEWABLE_IMPRESSION: "viewable_impression",
        Hd: "mute",
        Sd: "unmute",
        FULLSCREEN: "fullscreen",
        Ed: "exitfullscreen",
        Nc: "bufferstart",
        Mc: "bufferfinish",
        Pc: "fully_viewable_audible_half_duration_impression",
        Qc: "measurable_impression",
        yd: "abandon",
        Oc: "engagedview",
        IMPRESSION: "impression",
        Bd: "creativeview",
        LOADED: "loaded",
        vg: "progress",
        lf: "close",
        mf: "collapse",
        Id: "overlay_resize",
        Jd: "overlay_unmeasurable_impression",
        Kd: "overlay_unviewable_impression",
        Md: "overlay_viewable_immediate_impression",
        Ld: "overlay_viewable_end_of_session_impression",
        Cd: "custom_metric_viewable",
        ng: "verification_debug"
    }
      , Ml = "start firstquartile midpoint thirdquartile resume loaded".split(" ")
      , Nl = ["start", "firstquartile", "midpoint", "thirdquartile"]
      , Ol = ["abandon"]
      , Pl = {
        Kg: -1,
        bc: 0,
        FIRST_QUARTILE: 1,
        MIDPOINT: 2,
        THIRD_QUARTILE: 3,
        COMPLETE: 4,
        Gd: 5,
        $b: 6,
        Rc: 7,
        SKIPPED: 8,
        VIEWABLE_IMPRESSION: 9,
        Hd: 10,
        Sd: 11,
        FULLSCREEN: 12,
        Ed: 13,
        Pc: 14,
        Qc: 15,
        yd: 16,
        Oc: 17,
        IMPRESSION: 18,
        Bd: 19,
        LOADED: 20,
        Cd: 21,
        Nc: 22,
        Mc: 23
    };
    var Fb = {
        bf: "addEventListener",
        Ff: "getMaxSize",
        Gf: "getScreenSize",
        Hf: "getState",
        If: "getVersion",
        wg: "removeEventListener",
        bg: "isViewable"
    }
      , Ql = function(a) {
        var b = a !== a.top
          , c = a.top === gg(a).ma
          , d = -1
          , e = 0;
        if (b && c && a.top.mraid) {
            d = 3;
            var f = a.top.mraid
        } else
            d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
        f && (f.IS_GMA_SDK || (e = 2),
        Gb(function(g) {
            return "function" === typeof f[g]
        }) || (e = 1));
        return {
            ya: f,
            Cb: e,
            Te: d
        }
    };
    var Rl = function(a) {
        return (a = a.document) && "function" === typeof a.elementFromPoint
    };
    if (oe && oe.URL) {
        var Sl, nf = oe.URL;
        Sl = !!nf && 0 < of().length;
        tl.Gc(!Sl)
    }
    var Tl = function(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = xl(d, c);
        De(a, b, c, {
            capture: e
        })
    };
    var Ul = function(a, b) {
        b = Math.pow(10, b);
        return Math.floor(a * b) / b
    };
    function Vl(a, b, c, d) {
        if (!a)
            return {
                value: d,
                done: !1
            };
        d = b(d, a);
        var e = c(d, a);
        return !e && kd(a, "parentElement") ? Vl(Xe(a), b, c, d) : {
            done: e,
            value: d
        }
    }
    var Wl = function(a, b, c, d) {
        if (!a)
            return d;
        d = Vl(a, b, c, d);
        if (!d.done)
            try {
                var e = Le(a)
                  , f = e && G(e);
                return Wl(f && f.frameElement, b, c, d.value)
            } catch (g) {}
        return d.value
    };
    function Xl(a) {
        var b = !od || Fd(8);
        return Wl(a, function(c, d) {
            c = kd(d, "style") && d.style && Xf(d, "visibility");
            return {
                hidden: "hidden" === c,
                visible: b && "visible" === c
            }
        }, function(c) {
            return c.hidden || c.visible
        }, {
            hidden: !1,
            visible: !1
        }).hidden
    }
    var Yl = function(a) {
        return Wl(a, function(b, c) {
            return !(!kd(c, "style") || !c.style || "none" !== Xf(c, "display"))
        }, function(b) {
            return b
        }, !1) ? !0 : Xl(a)
    }
      , Zl = function(a) {
        return new I(a.top,a.right,a.bottom,a.left)
    }
      , $l = function(a) {
        var b = a.top || 0
          , c = a.left || 0;
        return new I(b,c + (a.width || 0),b + (a.height || 0),c)
    }
      , am = function(a) {
        return null != a && 0 <= a && 1 >= a
    };
    function bm() {
        var a = Dc;
        return a ? fb("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
            return pc(a, b)
        }) || pc(a, "OMI/") && !pc(a, "XiaoMi/") ? !0 : pc(a, "Presto") && pc(a, "Linux") && !pc(a, "X11") && !pc(a, "Android") && !pc(a, "Mobi") : !1
    }
    function cm() {
        var a = Dc;
        return pc(a, "AppleTV") || pc(a, "Apple TV") || pc(a, "CFNetwork") || pc(a, "tvOS")
    }
    function dm() {
        var a;
        (a = pc(Dc, "CrKey") || pc(Dc, "PlayStation") || pc(Dc, "Roku") || bm() || pc(Dc, "Xbox") || cm()) || (a = Dc,
        a = pc(a, "sdk_google_atv_x86") || pc(a, "Android TV"));
        return a
    }
    ;var P = function() {
        this.D = !1;
        this.l = !hf(F.top);
        this.H = af() || bf();
        var a = Tj();
        a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(cf)[3] || null) ? decodeURI(a) : a) || "" : "";
        this.domain = a;
        this.g = new I(0,0,0,0);
        this.A = new Je(0,0);
        this.o = new Je(0,0);
        this.J = new I(0,0,0,0);
        this.I = null;
        this.B = 0;
        this.G = !1;
        this.h = !(!F || !Ql(F).ya);
        em(this)
    }
      , fm = function(a, b) {
        b && b.screen && (a.A = new Je(b.screen.width,b.screen.height))
    }
      , gm = function(a, b) {
        var c = a.g ? new Je(a.g.getWidth(),a.g.getHeight()) : new Je(0,0);
        b = void 0 === b ? F : b;
        null !== b && b != b.top && (b = b.top);
        var d = 0
          , e = 0;
        try {
            var f = b.document
              , g = f.body
              , h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight)
                d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight,
                e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var k = h.scrollHeight
                  , n = h.scrollWidth
                  , m = h.offsetHeight
                  , u = h.offsetWidth;
                h.clientHeight != m && (k = g.scrollHeight,
                n = g.scrollWidth,
                m = g.offsetHeight,
                u = g.offsetWidth);
                k > c.height ? k > m ? (d = k,
                e = n) : (d = m,
                e = u) : k < m ? (d = k,
                e = n) : (d = m,
                e = u)
            }
            var p = new Je(e,d)
        } catch (w) {
            p = new Je(-12245933,-12245933)
        }
        a.o = p
    }
      , em = function(a) {
        F && F.document && (a.J = qk(!1, F, a.H),
        a.g = qk(!0, F, a.H),
        a.I = a.g,
        gm(a, F),
        fm(a, F))
    }
      , hm = function() {
        var a = P.C();
        if (0 < a.B || a.G)
            return !0;
        a = bl().h.isVisible();
        var b = 0 === Ag(oe);
        return a || b
    };
    Na(P);
    var im = function(a) {
        this.l = a;
        this.h = 0;
        this.g = null
    };
    im.prototype.cancel = function() {
        bl().clearTimeout(this.g);
        this.g = null
    }
    ;
    var jm = function(a) {
        var b = bl();
        a.g = b.setTimeout(il(O.C().g.g, xl(143, function() {
            a.h++;
            a.l.$()
        })), Il())
    };
    var km = function(a, b, c) {
        this.ma = a;
        this.va = void 0 === c ? "na" : c;
        this.A = [];
        this.G = !1;
        this.l = new Jl(-1,!0,this);
        this.g = this;
        this.J = b;
        this.I = this.fa = this.D = !1;
        this.M = "uk";
        this.T = !1;
        this.o = !0
    };
    l = km.prototype;
    l.kd = function() {
        return this.Tb()
    }
    ;
    l.Tb = function() {
        return !1
    }
    ;
    l.initialize = function() {
        return this.G = !0
    }
    ;
    l.fb = function() {
        return this.g.M
    }
    ;
    l.rb = function() {
        return this.g.I
    }
    ;
    var mm = function(a, b, c) {
        if (!a.I || (void 0 === c ? 0 : c))
            a.I = !0,
            a.M = b,
            a.J = 0,
            a.g != a || lm(a)
    };
    km.prototype.da = function() {
        return this.g.va
    }
    ;
    km.prototype.Ka = function() {
        return this.g.N()
    }
    ;
    km.prototype.N = function() {
        return {}
    }
    ;
    km.prototype.Aa = function() {
        return this.g.J
    }
    ;
    var nm = function(a, b) {
        kb(a.A, b) || (a.A.push(b),
        b.gb(a.g),
        b.Ma(a.l),
        b.Ba() && (a.D = !0))
    };
    km.prototype.V = function() {
        var a = P.C();
        a.g = qk(!0, this.ma, a.H)
    }
    ;
    km.prototype.X = function() {
        fm(P.C(), this.ma)
    }
    ;
    km.prototype.Da = function() {
        gm(P.C(), this.ma)
    }
    ;
    km.prototype.P = function() {
        return this.l.g
    }
    ;
    var om = function(a) {
        a = a.g;
        a.X();
        a.V();
        var b = P.C();
        b.J = qk(!1, a.ma, b.H);
        a.Da();
        a.l.g = a.P()
    };
    km.prototype.$ = function() {}
    ;
    var pm = function(a, b) {
        a.g != a ? pm(a.g, b) : a.o !== b && (a.o = b,
        lm(a))
    };
    km.prototype.sc = function() {
        return this.g.o
    }
    ;
    var qm = function(a) {
        a.D = a.A.length ? fb(a.A, function(b) {
            return b.Ba()
        }) : !1
    }
      , rm = function(a) {
        var b = rb(a.A);
        C(b, function(c) {
            c.Ma(a.l)
        })
    }
      , lm = function(a) {
        var b = rb(a.A);
        C(b, function(c) {
            c.gb(a.g)
        });
        a.g != a || rm(a)
    };
    l = km.prototype;
    l.gb = function(a) {
        var b = this.g
          , c = a.Aa();
        this.g = c >= this.J ? a : this;
        b !== this.g ? (this.o = this.g.o,
        lm(this)) : this.o !== this.g.o && (this.o = this.g.o,
        lm(this))
    }
    ;
    l.Ma = function(a) {
        if (a.h === this.g) {
            var b;
            if (!(b = this.fa)) {
                b = this.l;
                var c = this.D;
                if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.l == a.l)
                    b = b.g,
                    c = a.g,
                    c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
                b = !c
            }
            this.l = a;
            b && rm(this)
        }
    }
    ;
    l.Ba = function() {
        return this.D
    }
    ;
    l.W = function() {
        this.T = !0
    }
    ;
    l.tb = function() {
        return this.T
    }
    ;
    var sm = function(a, b, c, d) {
        this.l = a;
        this.g = new I(0,0,0,0);
        this.I = null;
        this.A = new I(0,0,0,0);
        this.h = b;
        this.O = c;
        this.L = d;
        this.K = !1;
        this.timestamp = -1;
        this.J = new Kl(b.l,this.g,new I(0,0,0,0),0,0,Hl(),0)
    };
    l = sm.prototype;
    l.wc = function() {
        return !0
    }
    ;
    l.Sb = function() {}
    ;
    l.W = function() {
        if (!this.tb()) {
            var a = this.h;
            nb(a.A, this);
            a.D && this.Ba() && qm(a);
            this.Sb();
            this.K = !0
        }
    }
    ;
    l.tb = function() {
        return this.K
    }
    ;
    l.Ka = function() {
        return this.h.Ka()
    }
    ;
    l.Aa = function() {
        return this.h.Aa()
    }
    ;
    l.fb = function() {
        return this.h.fb()
    }
    ;
    l.rb = function() {
        return this.h.rb()
    }
    ;
    l.gb = function() {}
    ;
    l.Ma = function() {
        this.Ja()
    }
    ;
    l.Ba = function() {
        return this.L
    }
    ;
    var tm = function(a) {
        this.A = !1;
        this.g = a;
        this.o = Ma
    };
    l = tm.prototype;
    l.Aa = function() {
        return this.g.Aa()
    }
    ;
    l.fb = function() {
        return this.g.fb()
    }
    ;
    l.rb = function() {
        return this.g.rb()
    }
    ;
    l.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.Pb(a, b, c),
        nm(this.g, d));
        return d
    }
    ;
    l.gd = function() {
        return this.wb()
    }
    ;
    l.wb = function() {
        return !1
    }
    ;
    l.init = function(a) {
        return this.g.initialize() ? (nm(this.g, this),
        this.o = a,
        !0) : !1
    }
    ;
    l.gb = function(a) {
        0 == a.Aa() && this.o(a.fb(), this)
    }
    ;
    l.Ma = function() {}
    ;
    l.Ba = function() {
        return !1
    }
    ;
    l.W = function() {
        this.A = !0
    }
    ;
    l.tb = function() {
        return this.A
    }
    ;
    l.Ka = function() {
        return {}
    }
    ;
    var um = function(a, b, c) {
        this.l = void 0 === c ? 0 : c;
        this.h = a;
        this.g = null == b ? "" : b
    }
      , vm = function(a) {
        switch (Math.trunc(a.l)) {
        case -16:
            return -16;
        case -8:
            return -8;
        case 0:
            return 0;
        case 8:
            return 8;
        case 16:
            return 16;
        default:
            return 16
        }
    }
      , wm = function(a, b) {
        return a.l < b.l ? !0 : a.l > b.l ? !1 : a.h < b.h ? !0 : a.h > b.h ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
    };
    var xm = function() {
        this.l = 0;
        this.g = [];
        this.h = !1
    };
    xm.prototype.add = function(a, b, c) {
        ++this.l;
        a = new um(a,b,c);
        this.g.push(new um(a.h,a.g,a.l + this.l / 4096));
        this.h = !0;
        return this
    }
    ;
    var ym = function(a, b) {
        C(b.g, function(c) {
            a.add(c.h, c.g, vm(c))
        })
    }
      , zm = function(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        jf(b, function(e, f) {
            d && void 0 === e || a.add(f, e, c)
        });
        return a
    }
      , Bm = function(a) {
        var b = Am;
        a.h && (tb(a.g, function(c, d) {
            return wm(d, c) ? 1 : wm(c, d) ? -1 : 0
        }),
        a.h = !1);
        return eb(a.g, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    };
    var Am = function(a) {
        var b = a.h;
        a = a.g;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (kb(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };
    var Cm = function(a) {
        var b = void 0 === b ? !0 : b;
        this.g = new xm;
        void 0 !== a && ym(this.g, a);
        b && this.g.add("v", Rj, -16)
    };
    Cm.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204"
          , b = Bm(this.g);
        0 < b.length && (a += "?" + b);
        return a
    }
    ;
    var Dm = function(a) {
        var b = []
          , c = [];
        Bb(a, function(d, e) {
            if (!(e in Object.prototype) && "undefined" != typeof d)
                switch (Array.isArray(d) && (d = d.join(",")),
                d = [e, "=", d].join(""),
                e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                    b.unshift(d);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(d);
                    break;
                default:
                    b.push(d)
                }
        });
        return b.concat(c)
    }
      , Em = function() {
        if (Rj && "unreleased" !== Rj)
            return Rj
    }
      , Fm = function(a) {
        var b = void 0 === b ? 4E3 : b;
        a = a.toString();
        if (!/&v=[^&]+/.test(a)) {
            var c = Em();
            a = c ? a + "&v=" + encodeURIComponent(c) : a
        }
        a = a.substring(0, b);
        dl(a)
    };
    var Gm = function() {
        this.g = 0
    };
    Na(Gm);
    var Hm = function(a, b, c) {
        C(a.l, function(d) {
            var e = a.g;
            if (!d.g && (d.l(b, c),
            d.o())) {
                d.g = !0;
                var f = d.h()
                  , g = new xm;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.A);
                d = Gm.C();
                g.add("i", d.g++);
                g.add("adk", e);
                zm(g, f);
                e = new Cm(g);
                Fm(e)
            }
        })
    };
    var Im = function() {
        this.h = this.l = this.o = this.g = 0
    }
      , Jm = function(a, b, c, d) {
        b && (a.g += c,
        a.h += c,
        a.o += c,
        a.l = Math.max(a.l, a.o));
        if (void 0 === d ? !b : d)
            a.o = 0
    };
    var Km = [1, .75, .5, .3, 0]
      , Lm = function(a) {
        this.h = a = void 0 === a ? Km : a;
        this.g = db(this.h, function() {
            return new Im
        })
    }
      , Nm = function(a, b) {
        return Mm(a, function(c) {
            return c.g
        }, void 0 === b ? !0 : b)
    }
      , Pm = function(a, b) {
        return Om(a, b, function(c) {
            return c.g
        })
    }
      , Qm = function(a, b) {
        return Mm(a, function(c) {
            return c.l
        }, void 0 === b ? !0 : b)
    }
      , Rm = function(a, b) {
        return Om(a, b, function(c) {
            return c.l
        })
    }
      , Sm = function(a, b) {
        return Om(a, b, function(c) {
            return c.h
        })
    }
      , Tm = function(a) {
        C(a.g, function(b) {
            b.h = 0
        })
    }
      , Um = function(a, b, c, d, e, f, g) {
        g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.h.length; f++) {
            var h = a.h[f]
              , k = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            Jm(a.g[f], g && k, e, !g || h)
        }
    }
      , Mm = function(a, b, c) {
        a = db(a.g, function(d) {
            return b(d)
        });
        return c ? a : Vm(a)
    }
      , Om = function(a, b, c) {
        var d = jb(a.h, function(e) {
            return b <= e
        });
        return -1 == d ? 0 : c(a.g[d])
    }
      , Vm = function(a) {
        return db(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    };
    var Wm = function() {
        this.h = new Lm;
        this.V = new Im;
        this.I = this.H = -1;
        this.$ = 1E3;
        this.ea = new Lm([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
        this.N = this.K = -1
    }
      , Xm = function(a, b) {
        return Qm(a.h, void 0 === b ? !0 : b)
    };
    Wm.prototype.L = function(a, b, c, d) {
        this.H = -1 != this.H ? Math.min(this.H, b.Y) : b.Y;
        this.I = Math.max(this.I, b.Y);
        this.K = -1 != this.K ? Math.min(this.K, b.ra) : b.ra;
        this.N = Math.max(this.N, b.ra);
        Um(this.ea, b.ra, c.ra, b.g, a, d);
        Um(this.h, b.Y, c.Y, b.g, a, d);
        c = d || c.Xa != b.Xa ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.g;
        Jm(this.V, c, a, b)
    }
    ;
    Wm.prototype.Za = function() {
        return this.V.l >= this.$
    }
    ;
    var Ym = new I(0,0,0,0);
    function Zm(a, b) {
        b = $m(b);
        return 0 === b ? 0 : $m(a) / b
    }
    function $m(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }
    function an(a, b) {
        if (!a || !b)
            return !1;
        for (var c = 0; null !== a && 100 > c++; ) {
            if (a === b)
                return !0;
            try {
                if (a = Xe(a) || a) {
                    var d = Le(a)
                      , e = d && G(d)
                      , f = e && e.frameElement;
                    f && (a = f)
                }
            } catch (g) {
                break
            }
        }
        return !1
    }
    function bn(a, b, c) {
        if (!a || !b)
            return !1;
        b = xf(wf(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = fg();
        hf(d.top) && d.top && d.top.document && (d = d.top);
        if (!Rl(d))
            return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a)
            return !1;
        b = (b = (b = Le(c)) && b.defaultView && b.defaultView.frameElement) && an(b, a);
        d = a === c;
        a = !d && a && $e(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }
    function cn(a, b, c, d) {
        return P.C().l ? !1 : 0 >= a.getWidth() || 0 >= a.getHeight() ? !0 : c && d ? wl(208, function() {
            return bn(a, b, c)
        }) : !1
    }
    ;var dn = new I(0,0,0,0)
      , en = function(a, b, c) {
        H.call(this);
        this.position = wf(dn);
        this.Lb = this.Eb();
        this.uc = -2;
        this.We = Date.now();
        this.ud = -1;
        this.Hb = b;
        this.Gb = null;
        this.Db = !1;
        this.Vb = null;
        this.opacity = -1;
        this.Re = c;
        this.wd = this.vc = Ma;
        this.sa = new Sk;
        this.sa.Oa = a;
        this.sa.g = a;
        this.Ya = !1;
        this.Sa = {
            yc: null,
            xc: null
        };
        this.sd = !0;
        this.xb = null;
        this.ib = this.Ce = !1;
        O.C().H++;
        this.pa = this.lc();
        this.td = -1;
        this.aa = null;
        this.xe = !1;
        a = this.O = new Jk;
        Kk(a, "od", sk);
        Dk(Kk(a, "opac", uk));
        Dk(Kk(a, "sbeos", uk));
        Dk(Kk(a, "prf", uk));
        Dk(Kk(a, "mwt", uk));
        Kk(a, "iogeo", uk);
        Dk(Kk(a, "postrxl", uk));
        (a = this.sa.Oa) && a.getAttribute && !/-[a-z]/.test("googleAvInapp") && (Rk && a.dataset ? "googleAvInapp"in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + Zc()) : a.getAttribute("data-" + Zc())) && (P.C().h = !0);
        1 == this.Re ? Mk(this.O, "od", 1) : Mk(this.O, "od", 0)
    };
    t(en, H);
    l = en.prototype;
    l.R = function() {
        this.sa.g && (this.Sa.yc && (Ee(this.sa.g, "mouseover", this.Sa.yc),
        this.Sa.yc = null),
        this.Sa.xc && (Ee(this.sa.g, "mouseout", this.Sa.xc),
        this.Sa.xc = null));
        this.xb && this.xb.W();
        this.aa && this.aa.W();
        delete this.Lb;
        delete this.vc;
        delete this.wd;
        delete this.sa.Oa;
        delete this.sa.g;
        delete this.Sa;
        delete this.xb;
        delete this.aa;
        delete this.O;
        H.prototype.R.call(this)
    }
    ;
    l.Ua = function() {
        return this.aa ? this.aa.g : this.position
    }
    ;
    l.Bc = function(a) {
        O.C().Bc(a)
    }
    ;
    l.Ba = function() {
        return !1
    }
    ;
    l.Eb = function() {
        return new Wm
    }
    ;
    l.ua = function() {
        return this.Lb
    }
    ;
    var fn = function(a, b) {
        b != a.ib && (a.ib = b,
        a = P.C(),
        b ? a.B++ : 0 < a.B && a.B--)
    }
      , gn = function(a, b) {
        if (a.aa) {
            if (b.da() === a.aa.da())
                return;
            a.aa.W();
            a.aa = null
        }
        b = b.create(a.sa.g, a.O, a.Ba());
        if (b = null != b && b.wc() ? b : null)
            a.aa = b
    }
      , hn = function(a, b, c) {
        if (!a.Gb || -1 == a.Hb || -1 === b.h || -1 === a.Gb.h)
            return 0;
        a = b.h - a.Gb.h;
        return a > c ? 0 : a
    };
    en.prototype.ad = function(a) {
        return hn(this, a, 1E4)
    }
    ;
    var jn = function(a, b, c) {
        if (a.aa) {
            a.aa.Ja();
            var d = a.aa.J
              , e = d.o
              , f = e.g;
            if (null != d.B) {
                var g = d.l;
                a.Vb = new Ie(g.left - f.left,g.top - f.top)
            }
            f = a.Yb() ? Math.max(d.g, d.A) : d.g;
            g = {};
            null !== e.volume && (g.volume = e.volume);
            e = a.ad(d);
            a.Gb = d;
            a.Jc(f, b, c, !1, g, e, d.H)
        }
    }
      , kn = function(a) {
        if (a.Db && a.xb) {
            var b = 1 == Nk(a.O, "od")
              , c = P.C().g
              , d = a.xb
              , e = new Je(c.getWidth(),c.getHeight());
            c = a.Yb();
            a = {
                Ue: a.aa ? a.aa.da() : "ns",
                Vb: a.Vb,
                af: e,
                Yb: c,
                Y: a.pa.Y,
                Xe: b
            };
            if (b = d.h) {
                b.Ja();
                e = b.J;
                var f = e.o.g
                  , g = null
                  , h = null;
                null != e.B && f && (g = e.l,
                g = new Ie(g.left - f.left,g.top - f.top),
                h = new Je(f.right - f.left,f.bottom - f.top));
                c = {
                    Ue: b.da(),
                    Vb: g,
                    af: h,
                    Yb: c,
                    Xe: !1,
                    Y: c ? Math.max(e.g, e.A) : e.g
                }
            } else
                c = null;
            c && Hm(d, a, c)
        }
    };
    l = en.prototype;
    l.Jc = function(a, b, c, d, e, f, g) {
        this.Ya || (this.Db && (a = this.dc(a, c, e, g),
        d = d && this.pa.Y >= (this.Xa() ? .3 : .5),
        this.Kc(f, a, d),
        this.Hb = b,
        0 < a.Y && -1 === this.td && (this.td = b),
        -1 == this.ud && this.Za() && (this.ud = b),
        -2 == this.uc && (this.uc = $m(this.Ua()) ? a.Y : -1),
        this.pa = a),
        this.vc(this))
    }
    ;
    l.Kc = function(a, b, c) {
        this.ua().L(a, b, this.pa, c)
    }
    ;
    l.lc = function() {
        return new tk
    }
    ;
    l.dc = function(a, b, c, d) {
        c = this.lc();
        c.g = b;
        b = bl().h;
        b = 0 === Ag(oe) ? -1 : b.isVisible() ? 0 : 1;
        c.h = b;
        c.Y = this.fc(a);
        c.Xa = this.Xa();
        c.ra = d;
        return c
    }
    ;
    l.fc = function(a) {
        return 0 === this.opacity && 1 === Nk(this.O, "opac") ? 0 : a
    }
    ;
    l.Xa = function() {
        return !1
    }
    ;
    l.Yb = function() {
        return this.xe || this.Ce
    }
    ;
    l.wa = function() {
        return 0
    }
    ;
    l.Za = function() {
        return this.Lb.Za()
    }
    ;
    var ln = function(a, b, c) {
        b && (a.vc = b);
        c && (a.wd = c)
    };
    var mn = function() {
        this.o = this.g = this.l = this.h = this.A = 0
    }
      , nn = function(a) {
        var b = {};
        b = (b.ptlt = z() - a.A,
        b);
        var c = a.h;
        c && (b.pnk = c);
        (c = a.l) && (b.pnc = c);
        (c = a.o) && (b.pnmm = c);
        (a = a.g) && (b.pns = a);
        return b
    };
    var on = function() {
        tk.call(this);
        this.l = !1;
        this.volume = void 0;
        this.paused = !1;
        this.mediaTime = -1
    };
    t(on, tk);
    var pn = function(a) {
        return am(a.volume) && .1 <= a.volume
    };
    var qn = function() {
        var a = {};
        this.h = (a.vs = [1, 0],
        a.vw = [0, 1],
        a.am = [2, 2],
        a.a = [4, 4],
        a.f = [8, 8],
        a.bm = [16, 16],
        a.b = [32, 32],
        a.avw = [0, 64],
        a.avs = [64, 0],
        a.pv = [256, 256],
        a.gdr = [0, 512],
        a.p = [0, 1024],
        a.r = [0, 2048],
        a.m = [0, 4096],
        a.um = [0, 8192],
        a.ef = [0, 16384],
        a.s = [0, 32768],
        a.pmx = [0, 16777216],
        a);
        this.g = {};
        for (var b in this.h)
            0 < this.h[b][1] && (this.g[b] = 0);
        this.l = 0
    }
      , rn = function(a, b) {
        var c = a.h[b]
          , d = c[1];
        a.l += c[0];
        0 < d && 0 == a.g[b] && (a.g[b] = 1)
    }
      , sn = function(a) {
        var b = Ib(a.h), c = 0, d;
        for (d in a.g)
            kb(b, d) && 1 == a.g[d] && (c += a.h[d][1],
            a.g[d] = 2);
        return c
    }
      , tn = function(a) {
        var b = 0, c;
        for (c in a.g) {
            var d = a.g[c];
            if (1 == d || 2 == d)
                b += a.h[c][1]
        }
        return b
    };
    var un = function() {
        this.h = this.g = 0
    }
      , vn = function(a, b, c) {
        32 <= b || (a.h & 1 << b && !c ? a.g &= ~(1 << b) : a.h & 1 << b || !c || (a.g |= 1 << b),
        a.h |= 1 << b)
    };
    var wn = function() {
        Wm.call(this);
        this.l = new Im;
        this.T = this.D = this.M = 0;
        this.J = -1;
        this.fa = new Im;
        this.A = new Im;
        this.g = new Lm;
        this.B = this.o = -1;
        this.G = new Im;
        this.$ = 2E3;
        this.P = new un;
        this.Z = new un;
        this.X = new un
    };
    t(wn, Wm);
    var xn = function(a, b, c) {
        var d = a.T;
        Gl || c || -1 == a.J || (d += b - a.J);
        return d
    };
    wn.prototype.L = function(a, b, c, d) {
        if (!b.paused) {
            Wm.prototype.L.call(this, a, b, c, d);
            var e = pn(b) && pn(c)
              , f = .5 <= (d ? Math.min(b.Y, c.Y) : c.Y);
            am(b.volume) && (this.o = -1 != this.o ? Math.min(this.o, b.volume) : b.volume,
            this.B = Math.max(this.B, b.volume));
            f && (this.M += a,
            this.D += e ? a : 0);
            Um(this.g, b.Y, c.Y, b.g, a, d, e);
            Jm(this.l, !0, a);
            Jm(this.A, e, a);
            Jm(this.G, c.l, a);
            Jm(this.fa, e && !f, a);
            a = Math.floor(b.mediaTime / 1E3);
            vn(this.P, a, b.isVisible());
            vn(this.Z, a, 1 <= b.Y);
            vn(this.X, a, pn(b))
        }
    }
    ;
    var yn = function() {
        this.g = !1
    }
      , zn = function(a, b) {
        a.g || (a.l(b) ? (b = a.D.report(a.o, b),
        a.h |= b,
        b = 0 == b) : b = !1,
        a.g = b)
    };
    var An = function(a, b) {
        this.g = !1;
        this.o = a;
        this.D = b;
        this.h = 0
    };
    t(An, yn);
    An.prototype.l = function() {
        return !0
    }
    ;
    An.prototype.A = function() {
        return !1
    }
    ;
    An.prototype.B = function() {
        var a = this
          , b = Nb(function(c) {
            return c == a.o
        });
        return Pl[b].toString()
    }
    ;
    An.prototype.toString = function() {
        var a = "";
        this.A() && (a += "c");
        this.g && (a += "s");
        0 < this.h && (a += ":" + this.h);
        return this.B() + a
    }
    ;
    var Bn = function(a, b, c, d) {
        sm.call(this, a, b, c, d)
    };
    t(Bn, sm);
    l = Bn.prototype;
    l.ec = function() {
        if (this.l) {
            var a = this.l
              , b = this.h.g.ma;
            try {
                try {
                    var c = Zl(a.getBoundingClientRect())
                } catch (n) {
                    c = new I(0,0,0,0)
                }
                var d = c.right - c.left
                  , e = c.bottom - c.top
                  , f = $f(a, b)
                  , g = f.x
                  , h = f.y;
                var k = new I(Math.round(h),Math.round(g + d),Math.round(h + e),Math.round(g))
            } catch (n) {
                k = wf(Ym)
            }
            this.g = k
        }
    }
    ;
    l.Tc = function() {
        this.A = this.h.l.g
    }
    ;
    l.dd = function(a) {
        return cn(a, this.A, this.l, 1 == Nk(this.O, "od"))
    }
    ;
    l.Uc = function() {
        this.timestamp = Hl()
    }
    ;
    l.Ja = function() {
        this.Uc();
        this.ec();
        if (1 === Nk(O.C().O, "vcm") && this.l && "number" === typeof this.l.videoWidth && "number" === typeof this.l.videoHeight) {
            var a = this.l
              , b = new Je(a.videoWidth,a.videoHeight);
            this.I = this.g;
            a = this.g;
            var c = a.getWidth()
              , d = a.getHeight()
              , e = b.width;
            b = b.height;
            0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b,
            a = wf(a),
            e > c / d ? (c /= e,
            d = (d - c) / 2,
            0 < d && (d = a.top + d,
            a.top = Math.round(d),
            a.bottom = Math.round(d + c))) : (d *= e,
            c = Math.round((c - d) / 2),
            0 < c && (c = a.left + c,
            a.left = Math.round(c),
            a.right = Math.round(c + d))));
            this.g = a
        }
        this.Tc();
        a = this.g;
        c = this.A;
        a = a.left <= c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new I(Math.max(a.top, c.top),Math.min(a.right, c.right),Math.min(a.bottom, c.bottom),Math.max(a.left, c.left)) : new I(0,0,0,0);
        c = a.top >= a.bottom || a.left >= a.right ? new I(0,0,0,0) : a;
        a = this.h.l;
        b = e = d = 0;
        0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) && (this.dd(c) ? c = new I(0,0,0,0) : (d = P.C().A,
        b = new I(0,d.height,d.width,0),
        d = Zm(c, this.g),
        e = Zm(c, P.C().g),
        b = Zm(c, b)));
        c = c.top >= c.bottom || c.left >= c.right ? new I(0,0,0,0) : xf(c, -this.g.left, -this.g.top);
        hm() || (e = d = 0);
        this.J = new Kl(a,this.g,c,d,e,this.timestamp,b)
    }
    ;
    l.da = function() {
        return this.h.da()
    }
    ;
    var Cn = new I(0,0,0,0)
      , Dn = function(a, b, c) {
        sm.call(this, null, a, b, c);
        this.H = a.sc();
        this.B = 0
    };
    t(Dn, Bn);
    l = Dn.prototype;
    l.wc = function() {
        this.o();
        return !0
    }
    ;
    l.Ma = function() {
        Bn.prototype.Ja.call(this)
    }
    ;
    l.Uc = function() {}
    ;
    l.ec = function() {}
    ;
    l.Ja = function() {
        this.o();
        Bn.prototype.Ja.call(this)
    }
    ;
    l.gb = function(a) {
        a = a.sc();
        a !== this.H && (a ? this.o() : (P.C().g = new I(0,0,0,0),
        this.g = new I(0,0,0,0),
        this.A = new I(0,0,0,0),
        this.timestamp = -1));
        this.H = a
    }
    ;
    function En(a) {
        return [a.top, a.left, a.bottom, a.right]
    }
    var Fn = {}
      , Gn = (Fn.firstquartile = 0,
    Fn.midpoint = 1,
    Fn.thirdquartile = 2,
    Fn.complete = 3,
    Fn)
      , Hn = function(a, b, c, d, e, f) {
        e = void 0 === e ? null : e;
        f = void 0 === f ? [] : f;
        en.call(this, b, c, d);
        this.jc = 0;
        this.ha = {};
        this.ga = new qn;
        this.xd = {};
        this.la = "";
        this.Pa = null;
        this.Da = !1;
        this.g = [];
        this.o = e;
        this.D = f;
        this.B = null;
        this.l = -1;
        this.X = this.I = void 0;
        this.L = this.K = 0;
        this.T = -1;
        this.fa = this.ea = !1;
        this.P = this.G = this.h = this.nb = this.va = 0;
        new Lm;
        this.V = this.Z = 0;
        this.$ = -1;
        this.ca = 0;
        this.M = Ma;
        this.N = [this.Eb()];
        this.yb = 2;
        this.ab = {};
        this.ab.pause = "p";
        this.ab.resume = "r";
        this.ab.skip = "s";
        this.ab.mute = "m";
        this.ab.unmute = "um";
        this.ab.exitfullscreen = "ef";
        this.A = null;
        this.od = !1
    };
    t(Hn, en);
    Hn.prototype.Ba = function() {
        return !0
    }
    ;
    var In = function(a) {
        !a.Ya && a.o && 0 != a.ca && (Nk(O.C().O, "mpv") ? a.od && a.aa && 2 === a.aa.Aa() && zn(a.o, a) : zn(a.o, a))
    }
      , Jn = function(a) {
        return void 0 === a ? a : Number(a) ? Ul(a, 3) : 0
    };
    l = Hn.prototype;
    l.ad = function(a) {
        return hn(this, a, Math.max(1E4, this.l / 3))
    }
    ;
    l.Jc = function(a, b, c, d, e, f, g) {
        var h = this
          , k = this.M(this) || {};
        Sb(k, e);
        this.l = k.duration || this.l;
        this.I = k.isVpaid || this.I;
        this.X = k.isYouTube || this.X;
        e = Kn(this, b);
        1 === Ln(this) && (f = e);
        en.prototype.Jc.call(this, a, b, c, d, k, f, g);
        this.o && this.o.g && C(this.D, function(n) {
            zn(n, h)
        })
    }
    ;
    l.Kc = function(a, b, c) {
        en.prototype.Kc.call(this, a, b, c);
        Mn(this).L(a, b, this.pa, c);
        this.fa = pn(this.pa) && pn(b);
        -1 == this.T && this.ea && (this.T = this.ua().l.g);
        this.ga.l = 0;
        a = this.Za();
        b.isVisible() && rn(this.ga, "vs");
        a && rn(this.ga, "vw");
        am(b.volume) && rn(this.ga, "am");
        pn(b) && rn(this.ga, "a");
        this.ib && rn(this.ga, "f");
        -1 != b.h && (rn(this.ga, "bm"),
        1 == b.h && rn(this.ga, "b"));
        pn(b) && b.isVisible() && rn(this.ga, "avs");
        this.fa && a && rn(this.ga, "avw");
        0 < b.Y && rn(this.ga, "pv");
        Nn(this, this.ua().l.g, !0) && rn(this.ga, "gdr");
        2E3 <= Rm(this.ua().h, 1) && rn(this.ga, "pmx")
    }
    ;
    l.Eb = function() {
        return new wn
    }
    ;
    l.ua = function() {
        return this.Lb
    }
    ;
    var Mn = function(a, b) {
        return a.N[null != b && b < a.N.length ? b : a.N.length - 1]
    };
    Hn.prototype.lc = function() {
        return new on
    }
    ;
    Hn.prototype.dc = function(a, b, c, d) {
        a = en.prototype.dc.call(this, a, b, c, void 0 === d ? -1 : d);
        a.l = this.ib;
        a.paused = 2 == this.ca;
        a.volume = c.volume;
        am(a.volume) || (this.va++,
        b = this.pa,
        am(b.volume) && (a.volume = b.volume));
        c = c.currentTime;
        a.mediaTime = void 0 !== c && 0 <= c ? c : -1;
        return a
    }
    ;
    var Ln = function(a) {
        var b = !!Nk(O.C().O, "umt");
        return a.I || !b && !a.X ? 0 : 1
    }
      , Kn = function(a, b) {
        2 == a.ca ? b = 0 : -1 == a.Hb ? b = 0 : (b -= a.Hb,
        b = b > Math.max(1E4, a.l / 3) ? 0 : b);
        var c = a.M(a) || {};
        c = void 0 !== c.currentTime ? c.currentTime : a.K;
        var d = c - a.K
          , e = 0;
        0 <= d ? (a.L += b,
        a.V += Math.max(b - d, 0),
        e = Math.min(d, a.L)) : a.Z += Math.abs(d);
        0 != d && (a.L = 0);
        -1 == a.$ && 0 < d && (a.$ = 0 <= Fl ? Hl() - Fl : -1);
        a.K = c;
        return e
    };
    Hn.prototype.fc = function(a) {
        return P.C().D ? 0 : this.ib ? 1 : en.prototype.fc.call(this, a)
    }
    ;
    Hn.prototype.wa = function() {
        return 1
    }
    ;
    Hn.prototype.getDuration = function() {
        return this.l
    }
    ;
    var On = function(a, b) {
        fb(a.D, function(c) {
            return c.o == b.o
        }) || a.D.push(b)
    }
      , Nn = function(a, b, c) {
        return 15E3 <= b ? !0 : a.ea ? (void 0 === c ? 0 : c) ? !0 : 0 < a.l ? b >= a.l / 2 : 0 < a.T ? b >= a.T : !1 : !1
    }
      , Pn = function(a) {
        var b = {}
          , c = P.C();
        b.insideIframe = c.l;
        b.unmeasurable = a.Ya;
        b.position = a.Ua();
        b.exposure = a.pa.Y;
        b.documentSize = c.o;
        b.viewportSize = new Je(c.g.getWidth(),c.g.getHeight());
        null != a.A && (b.presenceData = a.A);
        b.screenShare = a.pa.ra;
        return b
    }
      , Qn = function(a) {
        var b = Ul(a.pa.Y, 2)
          , c = a.ga.l
          , d = a.pa
          , e = Mn(a)
          , f = Jn(e.o)
          , g = Jn(e.B)
          , h = Jn(d.volume)
          , k = Ul(e.H, 2)
          , n = Ul(e.I, 2)
          , m = Ul(d.Y, 2)
          , u = Ul(e.K, 2)
          , p = Ul(e.N, 2);
        d = Ul(d.ra, 2);
        a = wf(a.Ua());
        a.round();
        e = Xm(e, !1);
        return {
            $e: b,
            sb: c,
            Mb: f,
            Ib: g,
            pb: h,
            Nb: k,
            Jb: n,
            Y: m,
            Ob: u,
            Kb: p,
            ra: d,
            position: a,
            Ub: e
        }
    }
      , Sn = function(a, b) {
        Rn(a.g, b, function() {
            return {
                $e: 0,
                sb: void 0,
                Mb: -1,
                Ib: -1,
                pb: -1,
                Nb: -1,
                Jb: -1,
                Y: -1,
                Ob: -1,
                Kb: -1,
                ra: -1,
                position: void 0,
                Ub: []
            }
        });
        a.g[b] = Qn(a)
    }
      , Rn = function(a, b, c) {
        for (var d = a.length; d < b + 1; )
            a.push(c()),
            d++
    }
      , Vn = function(a, b, c) {
        var d = a.xd[b];
        if (null != d)
            return d;
        d = Tn(a, b);
        var e = Nb(function(f) {
            return f == b
        });
        a = Un(a, d, d, c, Gn[Mb[e]]);
        "fully_viewable_audible_half_duration_impression" == b && (a.std = "csm");
        return a
    }
      , Wn = function(a, b, c) {
        var d = [b];
        if (a != b || c != b)
            d.unshift(a),
            d.push(c);
        return d
    }
      , Un = function(a, b, c, d, e) {
        if (a.Ya)
            return {
                "if": 0
            };
        var f = wf(a.Ua());
        f.round();
        var g = P.C()
          , h = O.C()
          , k = a.ua()
          , n = a.aa ? a.aa.da() : "ns"
          , m = {};
        m["if"] = g.l ? 1 : void 0;
        m.sdk = a.B ? a.B : void 0;
        m.t = a.We;
        m.p = [f.top, f.left, f.bottom, f.right];
        if (f = a.aa ? a.aa.I : null)
            f = wf(f),
            f.round(),
            m.cp = En(f);
        m.tos = Nm(k.h, !1);
        m.mtos = Xm(k);
        m.mcvt = k.V.l;
        m.ps = void 0;
        m.vht = xn(k, Hl(), 2 == a.ca);
        m.mut = k.fa.l;
        m.a = Jn(a.pa.volume);
        m.mv = Jn(k.B);
        m.fs = a.ib ? 1 : 0;
        m.ft = k.G.g;
        m.at = k.A.g;
        m.as = .1 <= k.o ? 1 : 0;
        m.atos = Nm(k.g);
        m.ssb = Nm(k.ea, !1);
        m.amtos = Qm(k.g);
        m.uac = a.va;
        m.vpt = k.l.g;
        "nio" == n && (m.nio = 1,
        m.avms = "nio");
        m.gmm = "4";
        m.gdr = Nn(a, k.l.g, !0) ? 1 : 0;
        m.efpf = a.yb;
        if ("gsv" == n || "nis" == n)
            n = a.aa,
            0 < n.B && (m.nnut = n.B);
        m.tcm = Ln(a);
        m.nmt = a.Z;
        m.bt = a.V;
        m.pst = a.$;
        m.vpaid = a.I;
        m.dur = a.l;
        m.vmtime = a.K;
        m.is = a.ga.l;
        1 <= a.g.length && (m.i0 = a.g[0].sb,
        m.a0 = [a.g[0].pb],
        m.c0 = [a.g[0].Y],
        m.ss0 = [a.g[0].ra],
        n = a.g[0].position,
        m.p0 = n ? En(n) : void 0);
        2 <= a.g.length && (m.i1 = a.g[1].sb,
        m.a1 = Wn(a.g[1].Mb, a.g[1].pb, a.g[1].Ib),
        m.c1 = Wn(a.g[1].Nb, a.g[1].Y, a.g[1].Jb),
        m.ss1 = Wn(a.g[1].Ob, a.g[1].ra, a.g[1].Kb),
        n = a.g[1].position,
        m.p1 = n ? En(n) : void 0,
        m.mtos1 = a.g[1].Ub);
        3 <= a.g.length && (m.i2 = a.g[2].sb,
        m.a2 = Wn(a.g[2].Mb, a.g[2].pb, a.g[2].Ib),
        m.c2 = Wn(a.g[2].Nb, a.g[2].Y, a.g[2].Jb),
        m.ss2 = Wn(a.g[2].Ob, a.g[2].ra, a.g[2].Kb),
        n = a.g[2].position,
        m.p2 = n ? En(n) : void 0,
        m.mtos2 = a.g[2].Ub);
        4 <= a.g.length && (m.i3 = a.g[3].sb,
        m.a3 = Wn(a.g[3].Mb, a.g[3].pb, a.g[3].Ib),
        m.c3 = Wn(a.g[3].Nb, a.g[3].Y, a.g[3].Jb),
        m.ss3 = Wn(a.g[3].Ob, a.g[3].ra, a.g[3].Kb),
        n = a.g[3].position,
        m.p3 = n ? En(n) : void 0,
        m.mtos3 = a.g[3].Ub);
        m.cs = tn(a.ga);
        b && (m.ic = sn(a.ga),
        m.dvpt = k.l.h,
        m.dvs = Sm(k.h, .5),
        m.dfvs = Sm(k.h, 1),
        m.davs = Sm(k.g, .5),
        m.dafvs = Sm(k.g, 1),
        c && (k.l.h = 0,
        Tm(k.h),
        Tm(k.g)),
        a.Za() && (m.dtos = k.M,
        m.dav = k.D,
        m.dtoss = a.jc + 1,
        c && (k.M = 0,
        k.D = 0,
        a.jc++)),
        m.dat = k.A.h,
        m.dft = k.G.h,
        c && (k.A.h = 0,
        k.G.h = 0));
        m.ps = [g.o.width, g.o.height];
        m.bs = [g.g.getWidth(), g.g.getHeight()];
        m.scs = [g.A.width, g.A.height];
        m.dom = g.domain;
        a.nb && (m.vds = a.nb);
        if (0 < a.D.length || a.o)
            b = rb(a.D),
            a.o && b.push(a.o),
            m.pings = db(b, function(u) {
                return u.toString()
            });
        b = db(cb(a.D, function(u) {
            return u.A()
        }), function(u) {
            return u.B()
        });
        sb(b);
        m.ces = b;
        a.h && (m.vmer = a.h);
        a.G && (m.vmmk = a.G);
        a.P && (m.vmiec = a.P);
        m.avms = a.aa ? a.aa.da() : "ns";
        a.aa && Sb(m, a.aa.Ka());
        d ? (m.c = Ul(a.pa.Y, 2),
        m.ss = Ul(a.pa.ra, 2)) : m.tth = Hl() - El;
        m.mc = Ul(k.I, 2);
        m.nc = Ul(k.H, 2);
        m.mv = Jn(k.B);
        m.nv = Jn(k.o);
        m.lte = Ul(a.uc, 2);
        d = Mn(a, e);
        Xm(k);
        m.qmtos = Xm(d);
        m.qnc = Ul(d.H, 2);
        m.qmv = Jn(d.B);
        m.qnv = Jn(d.o);
        m.qas = .1 <= d.o ? 1 : 0;
        m.qi = a.la;
        m.avms || (m.avms = "geo");
        m.psm = k.P.h;
        m.psv = k.P.g;
        m.psfv = k.Z.g;
        m.psa = k.X.g;
        h = Pk(h.O);
        h.length && (m.veid = h);
        a.A && Sb(m, nn(a.A));
        return m
    }
      , Tn = function(a, b) {
        if (kb(Ol, b))
            return !0;
        var c = a.ha[b];
        return void 0 !== c ? (a.ha[b] = !0,
        !c) : !1
    };
    var Xn = z()
      , $n = function() {
        this.g = {};
        var a = G();
        Yn(this, a, document);
        var b = Zn();
        try {
            if ("1" == b) {
                for (var c = a.parent; c != a.top; c = c.parent)
                    Yn(this, c, c.document);
                Yn(this, a.top, a.top.document)
            }
        } catch (d) {}
    }
      , Zn = function() {
        var a = document.documentElement;
        try {
            if (!hf(G().top))
                return "2";
            var b = []
              , c = G(a.ownerDocument);
            for (a = c; a != c.top; a = a.parent)
                if (a.frameElement)
                    b.push(a.frameElement);
                else
                    break;
            return b && 0 != b.length ? "1" : "0"
        } catch (d) {
            return "2"
        }
    }
      , Yn = function(a, b, c) {
        Tl(c, "mousedown", function() {
            return ao(a)
        }, 301);
        Tl(b, "scroll", function() {
            return bo(a)
        }, 302);
        Tl(c, "touchmove", function() {
            return co(a)
        }, 303);
        Tl(c, "mousemove", function() {
            return eo(a)
        }, 304);
        Tl(c, "keydown", function() {
            return fo(a)
        }, 305)
    }
      , ao = function(a) {
        Bb(a.g, function(b) {
            1E5 < b.l || ++b.l
        })
    }
      , bo = function(a) {
        Bb(a.g, function(b) {
            1E5 < b.g || ++b.g
        })
    }
      , co = function(a) {
        Bb(a.g, function(b) {
            1E5 < b.g || ++b.g
        })
    }
      , fo = function(a) {
        Bb(a.g, function(b) {
            1E5 < b.h || ++b.h
        })
    }
      , eo = function(a) {
        Bb(a.g, function(b) {
            1E5 < b.o || ++b.o
        })
    };
    var go = function() {
        this.g = [];
        this.h = []
    }
      , ho = function(a, b) {
        return gb(a.g, function(c) {
            return c.la == b
        })
    }
      , io = function(a, b) {
        return b ? gb(a.g, function(c) {
            return c.sa.Oa == b
        }) : null
    }
      , jo = function(a, b) {
        return gb(a.h, function(c) {
            return 2 == c.wa() && c.la == b
        })
    }
      , lo = function() {
        var a = ko;
        return 0 == a.g.length ? a.h : 0 == a.h.length ? a.g : qb(a.h, a.g)
    };
    go.prototype.reset = function() {
        this.g = [];
        this.h = []
    }
    ;
    var mo = function(a, b) {
        a = 1 == b.wa() ? a.g : a.h;
        var c = ib(a, function(d) {
            return d == b
        });
        return -1 != c ? (a.splice(c, 1),
        b.aa && b.aa.Sb(),
        b.W(),
        !0) : !1
    }
      , no = function(a) {
        var b = ko;
        if (mo(b, a)) {
            switch (a.wa()) {
            case 0:
                var c = function() {
                    return null
                };
            case 2:
                c = function() {
                    return jo(b, a.la)
                }
                ;
                break;
            case 1:
                c = function() {
                    return ho(b, a.la)
                }
            }
            for (var d = c(); d; d = c())
                mo(b, d)
        }
    }
      , oo = function(a) {
        var b = ko;
        a = cb(a, function(c) {
            return !io(b, c.sa.Oa)
        });
        b.g.push.apply(b.g, fa(a))
    }
      , po = function(a) {
        var b = ko
          , c = [];
        C(a, function(d) {
            fb(b.g, function(e) {
                return e.sa.Oa === d.sa.Oa && e.la === d.la
            }) || (b.g.push(d),
            c.push(d))
        })
    };
    Na(go);
    var ko = go.C();
    var qo = function() {
        this.g = this.h = null
    }
      , ro = function(a, b) {
        if (null == a.h)
            return !1;
        var c = function(d, e) {
            b(d, e)
        };
        a.g = gb(a.h, function(d) {
            return null != d && d.gd()
        });
        a.g && (a.g.init(c) ? om(a.g.g) : b(a.g.g.fb(), a.g));
        return null != a.g
    };
    Na(qo);
    var to = function(a) {
        a = so(a);
        tm.call(this, a.length ? a[a.length - 1] : new km(F,0));
        this.l = a;
        this.h = null
    };
    t(to, tm);
    l = to.prototype;
    l.da = function() {
        return (this.h ? this.h : this.g).da()
    }
    ;
    l.Ka = function() {
        return (this.h ? this.h : this.g).Ka()
    }
    ;
    l.Aa = function() {
        return (this.h ? this.h : this.g).Aa()
    }
    ;
    l.init = function(a) {
        var b = !1;
        C(this.l, function(c) {
            c.initialize() && (b = !0)
        });
        b && (this.o = a,
        nm(this.g, this));
        return b
    }
    ;
    l.W = function() {
        C(this.l, function(a) {
            a.W()
        });
        tm.prototype.W.call(this)
    }
    ;
    l.gd = function() {
        return fb(this.l, function(a) {
            return a.kd()
        })
    }
    ;
    l.wb = function() {
        return fb(this.l, function(a) {
            return a.Tb()
        })
    }
    ;
    l.Pb = function(a, b, c) {
        return new Bn(a,this.g,b,c)
    }
    ;
    l.Ma = function(a) {
        this.h = a.h
    }
    ;
    var so = function(a) {
        if (!a.length)
            return [];
        a = cb(a, function(c) {
            return null != c && c.kd()
        });
        for (var b = 1; b < a.length; b++)
            nm(a[b - 1], a[b]);
        return a
    };
    var uo = {
        threshold: [0, .3, .5, .75, 1]
    }
      , vo = function(a, b, c, d) {
        sm.call(this, a, b, c, d);
        this.G = this.D = this.B = this.H = this.o = null
    };
    t(vo, Bn);
    vo.prototype.wc = function() {
        var a = this;
        this.G || (this.G = Hl());
        if (wl(298, function() {
            return wo(a)
        }))
            return !0;
        mm(this.h, "msf");
        return !1
    }
    ;
    vo.prototype.Sb = function() {
        if (this.o && this.l)
            try {
                this.o.unobserve(this.l),
                this.H ? (this.H.unobserve(this.l),
                this.H = null) : this.B && (this.B.disconnect(),
                this.B = null)
            } catch (a) {}
    }
    ;
    var xo = function(a) {
        return a.o && a.o.takeRecords ? a.o.takeRecords() : []
    }
      , wo = function(a) {
        if (!a.l)
            return !1;
        var b = a.l
          , c = a.h.g.ma
          , d = O.C().g.g;
        a.o = new c.IntersectionObserver(il(d, function(e) {
            return yo(a, e)
        }),uo);
        d = il(d, function() {
            a.o.unobserve(b);
            a.o.observe(b);
            yo(a, xo(a))
        });
        c.ResizeObserver ? (a.H = new c.ResizeObserver(d),
        a.H.observe(b)) : c.MutationObserver && (a.B = new v.MutationObserver(d),
        a.B.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        a.o.observe(b);
        yo(a, xo(a));
        return !0
    }
      , yo = function(a, b) {
        try {
            if (b.length) {
                a.D || (a.D = Hl());
                var c = zo(b)
                  , d = $f(a.l, a.h.g.ma)
                  , e = d.x
                  , f = d.y;
                a.g = new I(Math.round(f),Math.round(e) + c.boundingClientRect.width,Math.round(f) + c.boundingClientRect.height,Math.round(e));
                var g = Zl(c.intersectionRect);
                a.A = xf(g, a.g.left - g.left, a.g.top - g.top)
            }
        } catch (h) {
            a.Sb(),
            yl(299, h)
        }
    }
      , zo = function(a) {
        return eb(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    };
    l = vo.prototype;
    l.Ja = function() {
        var a = xo(this);
        0 < a.length && yo(this, a);
        Bn.prototype.Ja.call(this)
    }
    ;
    l.ec = function() {}
    ;
    l.dd = function() {
        return !1
    }
    ;
    l.Tc = function() {}
    ;
    l.Ka = function() {
        var a = {};
        return Object.assign(this.h.Ka(), (a.niot_obs = this.G,
        a.niot_cbk = this.D,
        a))
    }
    ;
    l.da = function() {
        return "nio"
    }
    ;
    var Ao = function(a) {
        a = void 0 === a ? F : a;
        tm.call(this, new km(a,2))
    };
    t(Ao, tm);
    Ao.prototype.da = function() {
        return "nio"
    }
    ;
    Ao.prototype.wb = function() {
        return !P.C().h && null != this.g.g.ma.IntersectionObserver
    }
    ;
    Ao.prototype.Pb = function(a, b, c) {
        return new vo(a,this.g,b,c)
    }
    ;
    var Co = function() {
        var a = Bo();
        km.call(this, F.top, a, "geo")
    };
    t(Co, km);
    Co.prototype.P = function() {
        return P.C().g
    }
    ;
    Co.prototype.Tb = function() {
        var a = Bo();
        this.J !== a && (this.g != this && a > this.g.J && (this.g = this,
        lm(this)),
        this.J = a);
        return 2 == a
    }
    ;
    var Bo = function() {
        O.C();
        var a = P.C();
        return a.l || a.h ? 0 : 2
    };
    Na(Co);
    var Do = function() {};
    Na(Do);
    var Eo = function() {
        this.done = !1;
        this.g = {
            Wd: 0,
            Sc: 0,
            ah: 0,
            Yc: 0,
            qc: -1,
            ce: 0,
            be: 0,
            de: 0
        };
        this.A = null;
        this.B = !1;
        this.h = null;
        this.H = 0;
        this.l = new im(this)
    }
      , Ho = function() {
        var a = Fo;
        a.B || (a.B = !0,
        Go(a, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
                c[d - 0] = arguments[d];
            return a.o.apply(a, fa(c))
        }),
        a.o())
    };
    Eo.prototype.$ = function() {
        Io(this, lo(), !1)
    }
    ;
    var Jo = function() {
        Do.C();
        var a = qo.C();
        null != a.g && a.g.g ? om(a.g.g) : em(P.C())
    }
      , Io = function(a, b, c) {
        if (!a.done && (a.l.cancel(),
        0 != b.length)) {
            a.h = null;
            try {
                Jo();
                var d = Hl()
                  , e = O.C();
                e.B = d;
                if (null != qo.C().g)
                    for (e = 0; e < b.length; e++)
                        jn(b[e], d, c);
                else
                    nl(pl, "", {
                        strategy_not_selected: 1,
                        bin: e.h
                    }, !0, void 0);
                for (d = 0; d < b.length; d++)
                    kn(b[d]);
                ++a.g.Yc;
                O.C()
            } finally {
                c ? C(b, function(f) {
                    f.pa.Y = 0
                }) : jm(a.l)
            }
        }
    }
      , Go = function(a, b) {
        if (!a.A) {
            b = xl(142, b);
            bl();
            var c = Bg(oe);
            c && De(oe, c, b, {
                capture: !1
            }) && (a.A = b)
        }
    };
    Eo.prototype.o = function() {
        var a = hm()
          , b = Hl();
        a ? (Gl || (Cl = b,
        C(ko.g, function(c) {
            var d = c.ua();
            d.T = xn(d, b, 1 != c.ca)
        })),
        Gl = !0) : (this.H = Ko(this, b),
        Gl = !1,
        El = b,
        C(ko.g, function(c) {
            c.Db && (c.ua().J = b)
        }));
        Io(this, lo(), !a)
    }
    ;
    var Lo = function() {
        var a = qo.C();
        if (null != a.g) {
            var b = a.g;
            C(lo(), function(c) {
                return gn(c, b)
            })
        }
    }
      , Ko = function(a, b) {
        a = a.H;
        Gl && (a += b - Cl);
        return a
    }
      , Mo = function(a) {
        var b = Fo;
        a = void 0 === a ? function() {
            return {}
        }
        : a;
        tl.Fc("av-js");
        pl.g = .01;
        vl([function(c) {
            var d = O.C()
              , e = {};
            e = (e.bin = d.h,
            e.type = "error",
            e);
            d = Ok(d.O);
            if (!b.h) {
                var f = F.document
                  , g = 0 <= Dl ? Hl() - Dl : -1
                  , h = Hl();
                -1 == b.g.qc && (g = h);
                var k = P.C()
                  , n = O.C()
                  , m = Ok(n.O)
                  , u = lo();
                try {
                    if (0 < u.length) {
                        var p = k.g;
                        p && (m.bs = [p.getWidth(), p.getHeight()]);
                        var w = k.o;
                        w && (m.ps = [w.width, w.height]);
                        F.screen && (m.scs = [F.screen.width, F.screen.height])
                    } else
                        m.url = encodeURIComponent(F.location.href.substring(0, 512)),
                        f.referrer && (m.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                    m.tt = g;
                    m.pt = Dl;
                    m.bin = n.h;
                    void 0 !== F.google_osd_load_pub_page_exp && (m.olpp = F.google_osd_load_pub_page_exp);
                    m.deb = [1, b.g.Wd, b.g.Sc, b.g.Yc, b.g.qc, 0, b.l.h, b.g.ce, b.g.be, b.g.de].join("-");
                    m.tvt = Ko(b, h);
                    k.h && (m.inapp = 1);
                    if (null !== F && F != F.top) {
                        0 < u.length && (m.iframe_loc = encodeURIComponent(F.location.href.substring(0, 512)));
                        var x = k.J;
                        m.is = [x.getWidth(), x.getHeight()]
                    }
                } catch (ma) {
                    m.error = 1
                }
                b.h = m
            }
            w = b.h;
            p = {};
            for (var A in w)
                p[A] = w[A];
            A = O.C().g;
            if (1 == Nk(A.l, "prf")) {
                w = new gl;
                x = A.g;
                f = 0;
                -1 < x.g && (f = x.o.g.now() - x.g);
                w = ie(w, 1, x.l + f, 0);
                x = A.g;
                w = ie(w, 5, -1 < x.g ? x.h + 1 : x.h, 0);
                w = ie(w, 2, A.h.g.l(), 0);
                w = ie(w, 3, A.h.g.h(), 0);
                x = ie(w, 4, A.h.g.g(), 0);
                A = {};
                w = new Wd;
                f = ge(x, 1);
                if (0 !== f && (g = f,
                null != g)) {
                    fd(w.g, 9);
                    f = w.g;
                    k = g;
                    k = (g = 0 > k ? 1 : 0) ? -k : k;
                    if (0 === k)
                        cd = 0 < 1 / k ? 0 : 2147483648,
                        bd = 0;
                    else if (isNaN(k))
                        cd = 2147483647,
                        bd = 4294967295;
                    else if (1.7976931348623157E308 < k)
                        cd = (g << 31 | 2146435072) >>> 0,
                        bd = 0;
                    else if (2.2250738585072014E-308 > k)
                        k /= Math.pow(2, -1074),
                        cd = (g << 31 | k / 4294967296) >>> 0,
                        bd = k >>> 0;
                    else {
                        n = k;
                        h = 0;
                        if (2 <= n)
                            for (; 2 <= n && 1023 > h; )
                                h++,
                                n /= 2;
                        else
                            for (; 1 > n && -1022 < h; )
                                n *= 2,
                                h--;
                        k *= Math.pow(2, -h);
                        cd = (g << 31 | h + 1023 << 20 | 1048576 * k & 1048575) >>> 0;
                        bd = 4503599627370496 * k >>> 0
                    }
                    gd(f, bd);
                    gd(f, cd)
                }
                f = ee(x, 2, 0);
                0 !== f && Xd(w, 2, f);
                f = ee(x, 3, 0);
                0 !== f && Xd(w, 3, f);
                f = ee(x, 4, 0);
                0 !== f && Xd(w, 4, f);
                f = ee(x, 5, 0);
                if (0 !== f && null != f && null != f)
                    if (fd(w.g, 40),
                    x = w.g,
                    0 <= f)
                        fd(x, f);
                    else {
                        for (g = 0; 9 > g; g++)
                            x.g.push(f & 127 | 128),
                            f >>= 7;
                        x.g.push(1)
                    }
                x = new Uint8Array(w.l + w.g.length());
                g = w.h;
                h = g.length;
                for (k = f = 0; k < h; k++)
                    n = g[k],
                    x.set(n, f),
                    f += n.length;
                g = ed(w.g);
                x.set(g, f);
                w.h = [x];
                A = (A.pf = Sd(x),
                A)
            } else
                A = {};
            Sb(p, A);
            Sb(c, e, d, p, a());
            if (e = Em())
                d = {},
                Sb(c, (d.v = encodeURIComponent(e),
                d))
        }
        ])
    };
    Na(Eo);
    var Fo = Eo.C();
    var No = null
      , Oo = ""
      , Po = !1
      , Qo = function() {
        var a = No || F;
        if (!a)
            return "";
        var b = [];
        if (!a.location || !a.location.href)
            return "";
        b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
        a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
        return b.join("&")
    };
    var Ro = function(a) {
        return function(b) {
            return void 0 === b[a] ? 0 : b[a]
        }
    }
      , To = function() {
        var a = [0, 2, 4];
        return function(b) {
            b = b.tos;
            if (Array.isArray(b)) {
                for (var c = Array(b.length), d = 0; d < b.length; d++)
                    c[d] = 0 < d ? c[d - 1] + b[d] : b[d];
                return void 0 !== a ? So(c, a) : c
            }
        }
    }
      , Uo = function(a, b, c, d) {
        c = void 0 === c ? !0 : c;
        d = void 0 === d ? function() {
            return !0
        }
        : d;
        return function(e) {
            var f = e[a];
            if (Array.isArray(f) && d(e))
                return So(f, b, c)
        }
    }
      , Vo = function(a, b) {
        return function(c) {
            return b(c) ? c[a] : void 0
        }
    }
      , Wo = function(a) {
        return function(b) {
            for (var c = 0; c < a.length; c++)
                if (a[c] === b.e || void 0 === a[c] && !b.hasOwnProperty("e"))
                    return !0;
            return !1
        }
    }
      , So = function(a, b, c) {
        return void 0 === c || c ? cb(a, function(d, e) {
            return kb(b, e)
        }) : db(b, function(d, e, f) {
            return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                return g + h
            }, 0)
        })
    };
    var Xo = Wo([void 0, 1, 2, 3, 4, 8, 16])
      , Yo = Wo([void 0, 4, 8, 16])
      , Zo = {
        sv: "sv",
        cb: "cb",
        e: "e",
        nas: "nas",
        msg: "msg",
        "if": "if",
        sdk: "sdk",
        p: "p",
        p0: Vo("p0", Yo),
        p1: Vo("p1", Yo),
        p2: Vo("p2", Yo),
        p3: Vo("p3", Yo),
        cp: "cp",
        tos: "tos",
        mtos: "mtos",
        mtos1: Uo("mtos1", [0, 2, 4], !1, Yo),
        mtos2: Uo("mtos2", [0, 2, 4], !1, Yo),
        mtos3: Uo("mtos3", [0, 2, 4], !1, Yo),
        mcvt: "mcvt",
        ps: "ps",
        scs: "scs",
        bs: "bs",
        vht: "vht",
        mut: "mut",
        a: "a",
        a0: Vo("a0", Yo),
        a1: Vo("a1", Yo),
        a2: Vo("a2", Yo),
        a3: Vo("a3", Yo),
        ft: "ft",
        dft: "dft",
        at: "at",
        dat: "dat",
        as: "as",
        vpt: "vpt",
        gmm: "gmm",
        std: "std",
        efpf: "efpf",
        swf: "swf",
        nio: "nio",
        px: "px",
        nnut: "nnut",
        vmer: "vmer",
        vmmk: "vmmk",
        vmiec: "vmiec",
        nmt: "nmt",
        tcm: "tcm",
        bt: "bt",
        pst: "pst",
        vpaid: "vpaid",
        dur: "dur",
        vmtime: "vmtime",
        dtos: "dtos",
        dtoss: "dtoss",
        dvs: "dvs",
        dfvs: "dfvs",
        dvpt: "dvpt",
        fmf: "fmf",
        vds: "vds",
        is: "is",
        i0: "i0",
        i1: "i1",
        i2: "i2",
        i3: "i3",
        ic: "ic",
        cs: "cs",
        c: "c",
        c0: Vo("c0", Yo),
        c1: Vo("c1", Yo),
        c2: Vo("c2", Yo),
        c3: Vo("c3", Yo),
        mc: "mc",
        nc: "nc",
        mv: "mv",
        nv: "nv",
        qmt: Vo("qmtos", Xo),
        qnc: Vo("qnc", Xo),
        qmv: Vo("qmv", Xo),
        qnv: Vo("qnv", Xo),
        raf: "raf",
        rafc: "rafc",
        lte: "lte",
        ces: "ces",
        tth: "tth",
        femt: "femt",
        femvt: "femvt",
        emc: "emc",
        emuc: "emuc",
        emb: "emb",
        avms: "avms",
        nvat: "nvat",
        qi: "qi",
        psm: "psm",
        psv: "psv",
        psfv: "psfv",
        psa: "psa",
        pnk: "pnk",
        pnc: "pnc",
        pnmm: "pnmm",
        pns: "pns",
        ptlt: "ptlt",
        pngs: "pings",
        veid: "veid",
        ssb: "ssb",
        ss0: Vo("ss0", Yo),
        ss1: Vo("ss1", Yo),
        ss2: Vo("ss2", Yo),
        ss3: Vo("ss3", Yo),
        dc_rfl: "urlsigs",
        obd: "obd",
        omidp: "omidp",
        omidr: "omidr",
        omidv: "omidv",
        omida: "omida",
        omids: "omids",
        omidpv: "omidpv",
        omidam: "omidam",
        omidct: "omidct",
        omidia: "omidia"
    }
      , $o = {
        c: Ro("c"),
        at: "at",
        atos: Uo("atos", [0, 2, 4]),
        ta: function(a, b) {
            return function(c) {
                if (void 0 === c[a])
                    return b
            }
        }("tth", "1"),
        a: "a",
        dur: "dur",
        p: "p",
        tos: To(),
        j: "dom",
        mtos: Uo("mtos", [0, 2, 4]),
        gmm: "gmm",
        gdr: "gdr",
        ss: Ro("ss"),
        vsv: xb("w2"),
        t: "t"
    }
      , ap = {
        atos: "atos",
        amtos: "amtos",
        avt: Uo("atos", [2]),
        davs: "davs",
        dafvs: "dafvs",
        dav: "dav",
        ss: Ro("ss"),
        t: "t"
    }
      , bp = {
        a: "a",
        tos: To(),
        at: "at",
        c: Ro("c"),
        mtos: Uo("mtos", [0, 2, 4]),
        dur: "dur",
        fs: "fs",
        p: "p",
        vpt: "vpt",
        vsv: xb("ias_w2"),
        dom: "dom",
        gmm: "gmm",
        gdr: "gdr",
        t: "t"
    }
      , cp = {
        tos: To(),
        at: "at",
        c: Ro("c"),
        mtos: Uo("mtos", [0, 2, 4]),
        p: "p",
        vpt: "vpt",
        vsv: xb("dv_w4"),
        gmm: "gmm",
        gdr: "gdr",
        dom: "dom",
        t: "t",
        mv: "mv",
        qmpt: Uo("qmtos", [0, 2, 4]),
        qvs: function(a, b) {
            return function(c) {
                var d = c[a];
                if ("number" === typeof d)
                    return db(b, function(e) {
                        return 0 < d && d >= e ? 1 : 0
                    })
            }
        }("qnc", [1, .5, 0]),
        qmv: "qmv",
        qa: "qas",
        a: "a"
    };
    var ep = function(a, b) {
        var c = {
            sv: "883",
            cb: "j"
        };
        c.nas = ko.g.length;
        c.msg = a;
        void 0 !== b && (a = dp(b)) && (c.e = Pl[a]);
        return c
    }
      , fp = function(a) {
        return 0 == a.lastIndexOf("custom_metric_viewable", 0)
    }
      , dp = function(a) {
        var b = fp(a) ? "custom_metric_viewable" : a.toLowerCase();
        return Nb(function(c) {
            return c == b
        })
    };
    var gp = {
        Bf: "visible",
        gf: "audible",
        Eg: "time",
        Gg: "timetype"
    }
      , hp = {
        visible: function(a) {
            return /^(100|[0-9]{1,2})$/.test(a)
        },
        audible: function(a) {
            return "0" == a || "1" == a
        },
        timetype: function(a) {
            return "mtos" == a || "tos" == a
        },
        time: function(a) {
            return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a)
        }
    }
      , ip = function() {
        this.g = void 0;
        this.h = !1;
        this.l = 0;
        this.o = -1;
        this.A = "tos"
    }
      , jp = function(a) {
        try {
            var b = a.split(",");
            return b.length > Ib(gp).length ? null : eb(b, function(c, d) {
                d = d.toLowerCase().split("=");
                if (2 != d.length || void 0 === hp[d[0]] || !hp[d[0]](d[1]))
                    throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                c[d[0]] = d[1];
                return c
            }, {})
        } catch (c) {
            return null
        }
    }
      , kp = function(a, b) {
        if (void 0 == a.g)
            return 0;
        switch (a.A) {
        case "mtos":
            return a.h ? Rm(b.g, a.g) : Rm(b.h, a.g);
        case "tos":
            return a.h ? Pm(b.g, a.g) : Pm(b.h, a.g)
        }
        return 0
    };
    var lp = function(a, b, c, d) {
        An.call(this, b, d);
        this.J = a;
        this.H = c
    };
    t(lp, An);
    lp.prototype.B = function() {
        return this.J
    }
    ;
    lp.prototype.A = function() {
        return !0
    }
    ;
    lp.prototype.l = function(a) {
        var b = a.ua()
          , c = a.getDuration();
        return fb(this.H, function(d) {
            if (void 0 != d.g)
                var e = kp(d, b);
            else
                b: {
                    switch (d.A) {
                    case "mtos":
                        e = d.h ? b.A.l : b.l.g;
                        break b;
                    case "tos":
                        e = d.h ? b.A.g : b.l.g;
                        break b
                    }
                    e = 0
                }
            0 == e ? d = !1 : (d = -1 != d.l ? d.l : void 0 !== c && 0 < c ? d.o * c : -1,
            d = -1 != d && e >= d);
            return d
        })
    }
    ;
    var mp = function(a) {
        An.call(this, "fully_viewable_audible_half_duration_impression", a)
    };
    t(mp, An);
    mp.prototype.l = function(a) {
        var b = Pm(a.ua().g, 1);
        return Nn(a, b)
    }
    ;
    var np = function(a, b) {
        An.call(this, a, b)
    };
    t(np, An);
    np.prototype.l = function(a) {
        return a.ua().Za()
    }
    ;
    var op = function() {
        this.h = this.o = this.B = this.A = this.l = this.g = ""
    };
    var pp = function() {}
      , qp = function(a, b, c, d, e) {
        var f = {};
        if (void 0 !== a)
            if (null != b)
                for (var g in b) {
                    var h = b[g];
                    g in Object.prototype || null != h && (f[g] = "function" === typeof h ? h(a) : a[h])
                }
            else
                Sb(f, a);
        void 0 !== c && Sb(f, c);
        a = Bm(zm(new xm, f));
        0 < a.length && void 0 !== d && void 0 !== e && (e = e(a),
        a += "&" + d + "=" + e);
        return a
    };
    var rp = function() {};
    t(rp, pp);
    rp.prototype.g = function(a) {
        var b = new op;
        b.g = qp(a, Zo);
        b.l = qp(a, ap);
        return b
    }
    ;
    var sp = function(a, b, c) {
        Dn.call(this, a, b, c)
    };
    t(sp, Dn);
    sp.prototype.o = function() {
        var a = La("ima.admob.getViewability")
          , b = Nk(this.O, "queryid");
        "function" === typeof a && b && a(b)
    }
    ;
    sp.prototype.da = function() {
        return "gsv"
    }
    ;
    var tp = function(a) {
        a = void 0 === a ? F : a;
        tm.call(this, new km(a,2))
    };
    t(tp, tm);
    tp.prototype.da = function() {
        return "gsv"
    }
    ;
    tp.prototype.wb = function() {
        var a = P.C();
        O.C();
        return a.h && !1
    }
    ;
    tp.prototype.Pb = function(a, b, c) {
        return new sp(this.g,b,c)
    }
    ;
    var up = function(a, b, c) {
        Dn.call(this, a, b, c)
    };
    t(up, Dn);
    up.prototype.o = function() {
        var a = this
          , b = La("ima.bridge.getNativeViewability")
          , c = Nk(this.O, "queryid");
        "function" === typeof b && c && b(c, function(d) {
            Ob(d) && a.B++;
            var e = d.opt_nativeViewVisibleBounds || {}
              , f = d.opt_nativeViewHidden;
            a.g = $l(d.opt_nativeViewBounds || {});
            var g = a.h.l;
            g.g = f ? wf(Cn) : $l(e);
            a.timestamp = d.opt_nativeTime || -1;
            P.C().g = g.g;
            d = d.opt_nativeVolume;
            void 0 !== d && (g.volume = d)
        })
    }
    ;
    up.prototype.da = function() {
        return "nis"
    }
    ;
    var vp = function(a) {
        a = void 0 === a ? F : a;
        tm.call(this, new km(a,2))
    };
    t(vp, tm);
    vp.prototype.da = function() {
        return "nis"
    }
    ;
    vp.prototype.wb = function() {
        var a = P.C();
        O.C();
        return a.h && !1
    }
    ;
    vp.prototype.Pb = function(a, b, c) {
        return new up(this.g,b,c)
    }
    ;
    var wp = function() {
        km.call(this, F, 2, "mraid");
        this.Z = 0;
        this.K = this.L = !1;
        this.H = null;
        this.h = Ql(this.ma);
        this.l.g = new I(0,0,0,0);
        this.ea = !1
    };
    t(wp, km);
    wp.prototype.Tb = function() {
        return null != this.h.ya
    }
    ;
    wp.prototype.N = function() {
        var a = {};
        this.Z && (a.mraid = this.Z);
        this.L && (a.mlc = 1);
        a.mtop = this.h.Te;
        this.H && (a.mse = this.H);
        this.ea && (a.msc = 1);
        a.mcp = this.h.Cb;
        return a
    }
    ;
    wp.prototype.B = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d)
            c[d - 1] = arguments[d];
        try {
            return this.h.ya[a].apply(this.h.ya, c)
        } catch (e) {
            yl(538, e, .01, function(f) {
                f.method = a
            })
        }
    }
    ;
    var xp = function(a, b, c) {
        a.B("addEventListener", b, c)
    };
    wp.prototype.initialize = function() {
        var a = this;
        if (this.G)
            return !this.rb();
        this.G = !0;
        if (2 === this.h.Cb)
            return this.H = "ng",
            mm(this, "w"),
            !1;
        if (1 === this.h.Cb)
            return this.H = "mm",
            mm(this, "w"),
            !1;
        P.C().G = !0;
        this.ma.document.readyState && "complete" == this.ma.document.readyState ? yp(this) : Tl(this.ma, "load", function() {
            bl().setTimeout(xl(292, function() {
                return yp(a)
            }), 100)
        }, 292);
        return !0
    }
    ;
    var yp = function(a) {
        O.C().A = !!a.B("isViewable");
        xp(a, "viewableChange", zp);
        "loading" === a.B("getState") ? xp(a, "ready", Ap) : Bp(a)
    }
      , Bp = function(a) {
        "string" === typeof a.h.ya.AFMA_LIDAR ? (a.L = !0,
        Cp(a)) : (a.h.Cb = 3,
        a.H = "nc",
        mm(a, "w"))
    }
      , Cp = function(a) {
        a.K = !1;
        var b = 1 == Nk(O.C().O, "rmmt")
          , c = !!a.B("isViewable");
        (b ? !c : 1) && bl().setTimeout(xl(524, function() {
            a.K || (Dp(a),
            yl(540, Error()),
            a.H = "mt",
            mm(a, "w"))
        }), 500);
        Ep(a);
        xp(a, a.h.ya.AFMA_LIDAR, Fp)
    }
      , Ep = function(a) {
        var b = 1 == Nk(O.C().O, "sneio")
          , c = void 0 !== a.h.ya.AFMA_LIDAR_EXP_1
          , d = void 0 !== a.h.ya.AFMA_LIDAR_EXP_2;
        (b = b && d) && (a.h.ya.AFMA_LIDAR_EXP_2 = !0);
        c && (a.h.ya.AFMA_LIDAR_EXP_1 = !b)
    }
      , Dp = function(a) {
        a.B("removeEventListener", a.h.ya.AFMA_LIDAR, Fp);
        a.L = !1
    };
    wp.prototype.V = function() {
        var a = P.C()
          , b = Gp(this, "getMaxSize");
        a.g = new I(0,b.width,b.height,0)
    }
    ;
    wp.prototype.X = function() {
        P.C().A = Gp(this, "getScreenSize")
    }
    ;
    var Gp = function(a, b) {
        if ("loading" === a.B("getState"))
            return new Je(-1,-1);
        b = a.B(b);
        if (!b)
            return new Je(-1,-1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new Je(-1,-1) : new Je(a,b)
    };
    wp.prototype.W = function() {
        Dp(this);
        km.prototype.W.call(this)
    }
    ;
    var Ap = function() {
        try {
            var a = wp.C();
            a.B("removeEventListener", "ready", Ap);
            Bp(a)
        } catch (b) {
            yl(541, b)
        }
    }
      , Fp = function(a, b) {
        try {
            var c = wp.C();
            c.K = !0;
            var d = a ? new I(a.y,a.x + a.width,a.y + a.height,a.x) : new I(0,0,0,0);
            var e = Hl()
              , f = hm();
            var g = new Jl(e,f,c);
            g.g = d;
            g.volume = b;
            c.Ma(g)
        } catch (h) {
            yl(542, h)
        }
    }
      , zp = function(a) {
        var b = O.C()
          , c = wp.C();
        a && !b.A && (b.A = !0,
        c.ea = !0,
        c.H && mm(c, "w", !0))
    };
    Na(wp);
    var Ip = function() {
        this.l = this.N = !1;
        this.g = null;
        this.o = new rp;
        this.h = null;
        var a = {};
        this.L = (a.start = this.ue,
        a.firstquartile = this.pe,
        a.midpoint = this.re,
        a.thirdquartile = this.ve,
        a.complete = this.ne,
        a.pause = this.Ac,
        a.resume = this.rd,
        a.skip = this.te,
        a.viewable_impression = this.La,
        a.mute = this.kb,
        a.unmute = this.kb,
        a.fullscreen = this.qe,
        a.exitfullscreen = this.oe,
        a.fully_viewable_audible_half_duration_impression = this.La,
        a.measurable_impression = this.La,
        a.abandon = this.Ac,
        a.engagedview = this.La,
        a.impression = this.La,
        a.creativeview = this.La,
        a.progress = this.kb,
        a.custom_metric_viewable = this.La,
        a.bufferstart = this.Ac,
        a.bufferfinish = this.rd,
        a);
        a = {};
        this.V = (a.overlay_resize = this.se,
        a.abandon = this.pc,
        a.close = this.pc,
        a.collapse = this.pc,
        a.overlay_unmeasurable_impression = function(b) {
            return Vn(b, "overlay_unmeasurable_impression", hm())
        }
        ,
        a.overlay_viewable_immediate_impression = function(b) {
            return Vn(b, "overlay_viewable_immediate_impression", hm())
        }
        ,
        a.overlay_unviewable_impression = function(b) {
            return Vn(b, "overlay_unviewable_impression", hm())
        }
        ,
        a.overlay_viewable_end_of_session_impression = function(b) {
            return Vn(b, "overlay_viewable_end_of_session_impression", hm())
        }
        ,
        a);
        O.C().h = 3;
        Hp(this);
        this.P = !1
    };
    Ip.prototype.B = function(a) {
        fn(a, !1);
        no(a)
    }
    ;
    Ip.prototype.J = function() {}
    ;
    var Jp = function(a, b, c, d) {
        a = a.H(null, d, !0, b);
        a.B = c;
        oo([a]);
        return a
    };
    Ip.prototype.H = function(a, b, c, d) {
        var e = this;
        this.h || (this.h = this.Xc());
        b = c ? b : -1;
        a = null == this.h || this.l ? new Hn(F,a,b,7) : new Hn(F,a,b,7,new An("measurable_impression",this.h),Kp(this));
        a.la = d;
        Lk(a.O);
        Mk(a.O, "queryid", a.la);
        a.Bc("");
        ln(a, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h)
                g[h - 0] = arguments[h];
            return e.K.apply(e, fa(g))
        }, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h)
                g[h - 0] = arguments[h];
            return e.T.apply(e, fa(g))
        });
        (d = qo.C().g) && gn(a, d);
        a.sa.Oa && Do.C();
        return a
    }
    ;
    var Lp = function(a, b, c) {
        rk(b);
        var d = a.h;
        C(b, function(e) {
            var f = db(e.g, function(g) {
                var h = jp(g);
                if (null == h)
                    g = null;
                else if (g = new ip,
                null != h.visible && (g.g = h.visible / 100),
                null != h.audible && (g.h = 1 == h.audible),
                null != h.time) {
                    var k = "mtos" == h.timetype ? "mtos" : "tos"
                      , n = dc(h.time, "%") ? "%" : "ms";
                    h = parseInt(h.time, 10);
                    "%" == n && (h /= 100);
                    "ms" == n ? (g.l = h,
                    g.o = -1) : (g.l = -1,
                    g.o = h);
                    g.A = void 0 === k ? "tos" : k
                }
                return g
            });
            fb(f, function(g) {
                return null == g
            }) || On(c, new lp(e.id,e.event,f,d))
        })
    }
      , Kp = function(a) {
        a = a.h;
        return [new np("viewable_impression",a), new mp(a)]
    }
      , Mp = function() {
        var a = [];
        P.C();
        var b = O.C();
        a.push(Co.C());
        Nk(b.O, "mvp_lv") && a.push(wp.C());
        b = [new tp, new vp];
        b.push(new to(a));
        b.push(new Ao(F));
        return b
    }
      , Op = function(a) {
        if (!a.N) {
            a.N = !0;
            try {
                var b = Hl()
                  , c = O.C()
                  , d = P.C();
                Dl = b;
                c.o = 79463069;
                "o" !== a.g && (No = gg(F).ma);
                if (cl()) {
                    Fo.g.Sc = 0;
                    Fo.g.qc = Hl() - b;
                    var e = Mp()
                      , f = qo.C();
                    f.h = e;
                    ro(f, function() {
                        Np(a)
                    }) ? Fo.done || (Lo(),
                    nm(f.g.g, a),
                    Ho()) : d.l ? Np(a) : Ho()
                } else
                    Po = !0
            } catch (g) {
                throw ko.reset(),
                g;
            }
        }
    }
      , Pp = function(a) {
        Fo.l.cancel();
        Oo = a;
        Fo.done = !0
    }
      , Qp = function(a) {
        if (a.g)
            return a.g;
        var b = qo.C().g;
        if (b)
            switch (b.da()) {
            case "nis":
                a.g = "n";
                break;
            case "gsv":
                a.g = "m"
            }
        a.g || (a.g = "h");
        return a.g
    }
      , Rp = function(a, b, c) {
        if (null == a.h)
            return b.nb |= 4,
            !1;
        a = a.h.report(c, b);
        b.nb |= a;
        return 0 == a
    };
    Ip.prototype.gb = function(a) {
        switch (a.Aa()) {
        case 0:
            if (a = qo.C().g)
                a = a.g,
                nb(a.A, this),
                a.D && this.Ba() && qm(a);
            Np(this);
            break;
        case 2:
            Ho(),
            Nk(O.C().O, "mpv") && Sp()
        }
    }
    ;
    Ip.prototype.Ma = function() {}
    ;
    Ip.prototype.Ba = function() {
        return !1
    }
    ;
    var Sp = function() {
        C(ko.g, function(a) {
            return In(a)
        })
    }
      , Np = function(a) {
        if (!a.P) {
            a.P = !0;
            var b = [new Ao(F)]
              , c = qo.C();
            c.h = b;
            ro(c, function() {
                Pp("i")
            }) ? Fo.done || (Lo(),
            nm(c.g.g, a),
            Ho()) : Pp("i")
        }
    };
    Ip.prototype.T = function(a, b) {
        a.Ya = !0;
        switch (a.wa()) {
        case 1:
            Tp(this, a, b);
            break;
        case 2:
            this.Dc(a)
        }
        this.Ec(a)
    }
    ;
    var Tp = function(a, b, c) {
        if (!b.Da) {
            var d = Vn(b, "start", hm());
            a = a.o.g(d).g;
            var e = {
                id: "lidarv"
            };
            e.r = c;
            e.v = "883v";
            ef(a, function(f, g) {
                return e[f] = "mtos" == f || "tos" == f ? g : encodeURIComponent(g)
            });
            c = Qo();
            ef(c, function(f, g) {
                return e[f] = encodeURIComponent(g)
            });
            c = "//pagead2.googlesyndication.com/pagead/gen_204?" + Bm(zm(new xm, e));
            Fm(c);
            b.Da = !0
        }
    };
    l = Ip.prototype;
    l.ue = function(a) {
        Sn(a, 0);
        return Vn(a, "start", hm())
    }
    ;
    l.kb = function(a, b, c) {
        Io(Fo, [a], !hm());
        return this.La(a, b, c)
    }
    ;
    l.La = function(a, b, c) {
        return Vn(a, c, hm())
    }
    ;
    l.pe = function(a) {
        return Up(a, "firstquartile", 1)
    }
    ;
    l.re = function(a) {
        a.ea = !0;
        return Up(a, "midpoint", 2)
    }
    ;
    l.ve = function(a) {
        return Up(a, "thirdquartile", 3)
    }
    ;
    l.ne = function(a) {
        var b = Up(a, "complete", 4);
        0 != a.ca && (a.ca = 3);
        return b
    }
    ;
    var Up = function(a, b, c) {
        Io(Fo, [a], !hm());
        Sn(a, c);
        4 != c && Rn(a.N, c, a.Eb);
        return Vn(a, b, hm())
    };
    l = Ip.prototype;
    l.rd = function(a, b, c) {
        b = hm();
        2 != a.ca || b || (a.ua().J = Hl());
        Io(Fo, [a], !b);
        2 == a.ca && (a.ca = 1);
        return Vn(a, c, b)
    }
    ;
    l.te = function(a, b) {
        b = this.kb(a, b || {}, "skip");
        0 != a.ca && (a.ca = 3);
        return b
    }
    ;
    l.qe = function(a, b) {
        fn(a, !0);
        return this.kb(a, b || {}, "fullscreen")
    }
    ;
    l.oe = function(a, b) {
        fn(a, !1);
        return this.kb(a, b || {}, "exitfullscreen")
    }
    ;
    l.Ac = function(a, b, c) {
        b = a.ua();
        b.T = xn(b, Hl(), 1 != a.ca);
        Io(Fo, [a], !hm());
        1 == a.ca && (a.ca = 2);
        return Vn(a, c, hm())
    }
    ;
    l.se = function(a) {
        Io(Fo, [a], !hm());
        return a.h()
    }
    ;
    l.pc = function(a) {
        Io(Fo, [a], !hm());
        this.qd(a);
        0 != a.ca && (a.ca = 3);
        return a.h()
    }
    ;
    var Hp = function(a) {
        Mo(function() {
            var b = Vp();
            null != a.g && (b.sdk = a.g);
            var c = qo.C();
            null != c.g && (b.avms = c.g.da());
            return b
        })
    }
      , Wp = function(a, b, c, d) {
        var e = io(ko, c);
        null !== e && e.la !== b && (a.B(e),
        e = null);
        e || (b = a.H(c, Hl(), !1, b),
        0 == ko.h.length && (O.C().o = 79463069),
        po([b]),
        e = b,
        e.B = Qp(a),
        d && (e.Pa = d));
        return e
    };
    Ip.prototype.K = function() {}
    ;
    var Yp = function(a, b) {
        b.G = 0;
        for (var c in Ll)
            null == a[c] && (b.G |= Ll[c]);
        Xp(a, "currentTime");
        Xp(a, "duration")
    };
    l = Ip.prototype;
    l.Dc = function() {}
    ;
    l.qd = function() {}
    ;
    l.jd = function() {}
    ;
    l.Ec = function() {}
    ;
    l.Xc = function() {}
    ;
    var Xp = function(a, b) {
        var c = a[b];
        void 0 !== c && 0 < c && (a[b] = Math.floor(1E3 * c))
    }
      , Vp = function() {
        var a = P.C()
          , b = {};
        return b.sv = "883",
        b["if"] = a.l ? "1" : "0",
        b.nas = String(ko.g.length),
        b
    };
    var Zp = z()
      , $p = !1
      , aq = !1
      , bq = !1
      , cq = function(a) {
        return !a || "function" !== typeof a || 0 > String(Function.prototype.toString).indexOf("[native code]") ? !1 : 0 <= String(a).indexOf("[native code]") && !0 || !1
    }
      , dq = function(a) {
        return !!(1 << a & Zp)
    }
      , eq = [function(a) {
        return !(!a.chrome || !a.chrome.webstore)
    }
    , function(a) {
        return !!a.document.documentMode
    }
    , function(a) {
        return !!a.document.fonts.ready
    }
    , function() {
        return dq(0)
    }
    , function(a) {
        return !!a.ActiveXObject
    }
    , function(a) {
        return !!a.chrome
    }
    , function(a) {
        return !!a.navigator.serviceWorker
    }
    , function(a) {
        return !!a.opera
    }
    , function(a) {
        return !!a.sidebar
    }
    , function() {
        return !+"\v1"
    }
    , function() {
        return dq(1)
    }
    , function(a) {
        return !a.ActiveXObject
    }
    , function(a) {
        return "-ms-ime-align"in a.document.documentElement.style
    }
    , function(a) {
        return "-ms-scroll-limit"in a.document.documentElement.style
    }
    , function(a) {
        return "-webkit-font-feature-settings"in a.document.body.style
    }
    , function() {
        return dq(2)
    }
    , function(a) {
        return "ActiveXObject"in a
    }
    , function(a) {
        return "MozAppearance"in a.document.documentElement.style
    }
    , function(a) {
        return "_phantom"in a
    }
    , function(a) {
        return "callPhantom"in a
    }
    , function(a) {
        return "content"in a.document.createElement("template")
    }
    , function(a) {
        return "getEntriesByType"in a.performance
    }
    , function() {
        return dq(3)
    }
    , function(a) {
        return "image-rendering"in a.document.body.style
    }
    , function(a) {
        return "object-fit"in a.document.body.style
    }
    , function(a) {
        return "open"in a.document.createElement("details")
    }
    , function(a) {
        return "orientation"in a.screen
    }
    , function(a) {
        return "performance"in a
    }
    , function(a) {
        return "shape-image-threshold"in a.document.body.style
    }
    , function() {
        return dq(4)
    }
    , function(a) {
        return "srcset"in a.document.createElement("img")
    }
    , function() {
        return aq
    }
    , function() {
        return bq
    }
    , function() {
        return dq(5)
    }
    , function(a) {
        a = a.document.createElement("div");
        a.style.width = "1px";
        a.style.width = "-webkit-min-content";
        a.style.width = "min-content";
        return "1px" != a.style.width
    }
    , function(a) {
        a = a.document.createElement("div");
        a.style.width = "1px";
        a.style.width = "calc(1px - 1px)";
        a.style.width = "-webkit-calc(1px - 1px)";
        return "1px" != a.style.width
    }
    , function() {
        var a = !1;
        eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');
        try {
            DummyFunction1()
        } catch (b) {
            a = !0
        }
        return a
    }
    , function() {
        var a = !1;
        try {
            DummyFunction2()
        } catch (b) {
            a = !0
        }
        return a
    }
    , function() {
        return !1
    }
    , function() {
        return dq(6)
    }
    , function(a) {
        var b = a.document.createElement("canvas");
        b.width = b.height = 1;
        b = b.getContext("2d");
        b.globalCompositeOperation = "multiply";
        b.fillStyle = "rgb(0,255,255)";
        b.fillRect(0, 0, 1, 1);
        b.fill();
        b.fillStyle = "rgb(255,255,0)";
        b.fillRect(0, 0, 1, 1);
        b.fill();
        b = b.getImageData(0, 0, 1, 1).data;
        return b[0] == b[2] && b[1] == b[3] || cq(a.navigator.vibrate)
    }
    , function(a) {
        a = a.document.createElement("canvas");
        a.width = a.height = 1;
        a = a.getContext("2d");
        a.globalCompositeOperation = "multiply";
        a.fillStyle = "rgb(0,255,255)";
        a.fillRect(0, 0, 1, 1);
        a.fill();
        a.fillStyle = "rgb(255,255,0)";
        a.fillRect(0, 0, 1, 1);
        a.fill();
        a = a.getImageData(0, 0, 1, 1).data;
        return a[0] == a[2] && a[1] == a[3]
    }
    , function(a) {
        return cq(a.document.createElement("div").matches)
    }
    , function(a) {
        a = a.document.createElement("input");
        a.setAttribute("type", "range");
        return "text" !== a.type
    }
    , function(a) {
        return a.CSS.supports("image-rendering", "pixelated")
    }
    , function(a) {
        return a.CSS.supports("object-fit", "contain")
    }
    , function() {
        return dq(7)
    }
    , function(a) {
        return a.CSS.supports("object-fit", "inherit")
    }
    , function(a) {
        return a.CSS.supports("shape-image-threshold", "0.9")
    }
    , function(a) {
        return a.CSS.supports("word-break", "keep-all")
    }
    , function() {
        return eval("1 == [for (item of [1,2,3]) item][0]")
    }
    , function(a) {
        return cq(a.CSS.supports)
    }
    , function() {
        return cq(Intl.Collator)
    }
    , function(a) {
        return cq(a.document.createElement("dialog").show)
    }
    , function() {
        return dq(8)
    }
    , function(a) {
        return cq(a.document.createElement("div").animate([{
            transform: "scale(1)",
            easing: "ease-in"
        }, {
            transform: "scale(1.3)",
            easing: "ease-in"
        }], {
            duration: 1300,
            iterations: 1
        }).reverse)
    }
    , function(a) {
        return cq(a.document.createElement("div").animate)
    }
    , function(a) {
        return cq(a.document.documentElement.webkitRequestFullScreen)
    }
    , function(a) {
        return cq(a.navigator.getBattery)
    }
    , function(a) {
        return cq(a.navigator.permissions.query)
    }
    , function() {
        return !1
    }
    , function() {
        return dq(9)
    }
    , function() {
        return cq(webkitRequestAnimationFrame)
    }
    , function(a) {
        return cq(a.BroadcastChannel.call)
    }
    , function(a) {
        return cq(a.FontFace)
    }
    , function(a) {
        return cq(a.Gamepad)
    }
    , function() {
        return dq(10)
    }
    , function(a) {
        return cq(a.MutationEvent)
    }
    , function(a) {
        return cq(a.MutationObserver)
    }
    , function(a) {
        return cq(a.crypto.getRandomValues)
    }
    , function(a) {
        return cq(a.document.body.createShadowRoot)
    }
    , function(a) {
        return cq(a.document.body.webkitCreateShadowRoot)
    }
    , function(a) {
        return cq(a.fetch)
    }
    , function() {
        return dq(11)
    }
    , function(a) {
        return cq(a.navigator.serviceWorker.register)
    }
    , function(a) {
        return cq(a.navigator.webkitGetGamepads)
    }
    , function(a) {
        return cq(a.speechSynthesis.speak)
    }
    , function(a) {
        return cq(a.webkitRTCPeerConnection)
    }
    , function(a) {
        return a.CSS.supports("--fake-var", "0")
    }
    , function() {
        return dq(12)
    }
    , function(a) {
        return a.CSS.supports("cursor", "grab")
    }
    , function(a) {
        return a.CSS.supports("cursor", "zoom-in")
    }
    , function(a) {
        return a.CSS.supports("image-orientation", "270deg")
    }
    , function() {
        return dq(13)
    }
    , function(a) {
        return a.CSS.supports("position", "sticky")
    }
    , function(a) {
        return void 0 === a.document.createElement("style").scoped
    }
    , function(a) {
        return a.performance.getEntriesByType("resource")instanceof Array
    }
    , function() {
        return "undefined" == typeof InstallTrigger
    }
    , function() {
        return "object" == typeof (new Intl.Collator).resolvedOptions()
    }
    , function(a) {
        return "boolean" == typeof a.navigator.onLine
    }
    , function() {
        return dq(14)
    }
    , function(a) {
        return "undefined" == typeof a.navigator.gh
    }
    , function(a) {
        return "number" == typeof a.performance.now()
    }
    , function() {
        return 0 == (new Uint16Array(1))[0]
    }
    , function(a) {
        return -1 == a.ActiveXObject.toString().indexOf("native")
    }
    , function(a) {
        return -1 == Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")
    }
    ]
      , fq = [function(a) {
        a = a.document.createElement("div");
        var b = null
          , c = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
        try {
            a.style.behavior = "url(#default#clientcaps)"
        } catch (e) {}
        for (var d = 0; d < c.length; d++) {
            try {
                b = a.getComponentVersion(c[d], "componentid").replace(/,/g, ".")
            } catch (e) {}
            if (b)
                return b.split(".")[0]
        }
        return !1
    }
    , function() {
        return (new Date).getTimezoneOffset()
    }
    , function(a) {
        return (a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth) / (a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight)
    }
    , function(a) {
        return (a.outerWidth || a.document && a.document.body && a.document.body.offsetWidth) / (a.outerHeight || a.document && a.document.body && a.document.body.offsetHeight)
    }
    , function(a) {
        return a.screen.availWidth / a.screen.availHeight
    }
    , function(a) {
        return a.screen.width / a.screen.height
    }
    ]
      , gq = [function(a) {
        return a.navigator.userAgent
    }
    , function(a) {
        return a.navigator.platform
    }
    , function(a) {
        return a.navigator.vendor
    }
    ]
      , iq = function() {
        try {
            hq()
        } catch (d) {}
        var a = "a=1&b=" + Zp + "&"
          , b = []
          , c = 99;
        C(eq, function(d, e) {
            var f = !1;
            try {
                f = d(F)
            } catch (g) {}
            b[e / 32 >>> 0] |= f << e % 32
        });
        C(b, function(d, e) {
            a += String.fromCharCode(c + e) + "=" + (d >>> 0).toString(16) + "&"
        });
        c = 105;
        C(fq, function(d) {
            var e = "false";
            try {
                e = d(F)
            } catch (f) {}
            a += String.fromCharCode(c++) + "=" + e + "&"
        });
        C(gq, function(d) {
            var e = "";
            try {
                e = Td(d(F))
            } catch (f) {}
            a += String.fromCharCode(c++) + "=" + e + "&"
        });
        return a.slice(0, -1)
    }
      , hq = function() {
        if (!$p) {
            var a = function() {
                aq = !0;
                F.document.removeEventListener("webdriver-evaluate", a, !0)
            };
            F.document.addEventListener("webdriver-evaluate", a, !0);
            var b = function() {
                bq = !0;
                F.document.removeEventListener("webdriver-evaluate-response", b, !0)
            };
            F.document.addEventListener("webdriver-evaluate-response", b, !0);
            $p = !0
        }
    };
    var jq = function() {
        this.h = 64;
        this.g = Array(4);
        this.B = Array(this.h);
        this.A = this.o = 0;
        this.reset()
    };
    B(jq, yj);
    jq.prototype.reset = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.A = this.o = 0
    }
    ;
    var kq = function(a, b, c) {
        c || (c = 0);
        var d = Array(16);
        if ("string" === typeof b)
            for (var e = 0; 16 > e; ++e)
                d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
        else
            for (e = 0; 16 > e; ++e)
                d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
        b = a.g[0];
        c = a.g[1];
        e = a.g[2];
        var f = a.g[3];
        var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
        b = c + (g << 7 & 4294967295 | g >>> 25);
        g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
        f = b + (g << 12 & 4294967295 | g >>> 20);
        g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
        e = f + (g << 17 & 4294967295 | g >>> 15);
        g = c + (b ^ e & (f ^ b)) + d[3] + 3250441966 & 4294967295;
        c = e + (g << 22 & 4294967295 | g >>> 10);
        g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
        b = c + (g << 7 & 4294967295 | g >>> 25);
        g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
        f = b + (g << 12 & 4294967295 | g >>> 20);
        g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
        e = f + (g << 17 & 4294967295 | g >>> 15);
        g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
        c = e + (g << 22 & 4294967295 | g >>> 10);
        g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
        b = c + (g << 7 & 4294967295 | g >>> 25);
        g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
        f = b + (g << 12 & 4294967295 | g >>> 20);
        g = e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
        e = f + (g << 17 & 4294967295 | g >>> 15);
        g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
        c = e + (g << 22 & 4294967295 | g >>> 10);
        g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
        b = c + (g << 7 & 4294967295 | g >>> 25);
        g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
        f = b + (g << 12 & 4294967295 | g >>> 20);
        g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
        e = f + (g << 17 & 4294967295 | g >>> 15);
        g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
        c = e + (g << 22 & 4294967295 | g >>> 10);
        g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
        b = c + (g << 5 & 4294967295 | g >>> 27);
        g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
        f = b + (g << 9 & 4294967295 | g >>> 23);
        g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
        e = f + (g << 14 & 4294967295 | g >>> 18);
        g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
        c = e + (g << 20 & 4294967295 | g >>> 12);
        g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
        b = c + (g << 5 & 4294967295 | g >>> 27);
        g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
        f = b + (g << 9 & 4294967295 | g >>> 23);
        g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
        e = f + (g << 14 & 4294967295 | g >>> 18);
        g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
        c = e + (g << 20 & 4294967295 | g >>> 12);
        g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
        b = c + (g << 5 & 4294967295 | g >>> 27);
        g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
        f = b + (g << 9 & 4294967295 | g >>> 23);
        g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
        e = f + (g << 14 & 4294967295 | g >>> 18);
        g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
        c = e + (g << 20 & 4294967295 | g >>> 12);
        g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
        b = c + (g << 5 & 4294967295 | g >>> 27);
        g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
        f = b + (g << 9 & 4294967295 | g >>> 23);
        g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
        e = f + (g << 14 & 4294967295 | g >>> 18);
        g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
        c = e + (g << 20 & 4294967295 | g >>> 12);
        g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
        b = c + (g << 4 & 4294967295 | g >>> 28);
        g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
        f = b + (g << 11 & 4294967295 | g >>> 21);
        g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
        e = f + (g << 16 & 4294967295 | g >>> 16);
        g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
        c = e + (g << 23 & 4294967295 | g >>> 9);
        g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
        b = c + (g << 4 & 4294967295 | g >>> 28);
        g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
        f = b + (g << 11 & 4294967295 | g >>> 21);
        g = e + (f ^ b ^ c) + d[7] + 4139469664 & 4294967295;
        e = f + (g << 16 & 4294967295 | g >>> 16);
        g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
        c = e + (g << 23 & 4294967295 | g >>> 9);
        g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
        b = c + (g << 4 & 4294967295 | g >>> 28);
        g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
        f = b + (g << 11 & 4294967295 | g >>> 21);
        g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
        e = f + (g << 16 & 4294967295 | g >>> 16);
        g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
        c = e + (g << 23 & 4294967295 | g >>> 9);
        g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
        b = c + (g << 4 & 4294967295 | g >>> 28);
        g = f + (b ^ c ^ e) + d[12] + 3873151461 & 4294967295;
        f = b + (g << 11 & 4294967295 | g >>> 21);
        g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
        e = f + (g << 16 & 4294967295 | g >>> 16);
        g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
        c = e + (g << 23 & 4294967295 | g >>> 9);
        g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
        b = c + (g << 6 & 4294967295 | g >>> 26);
        g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
        f = b + (g << 10 & 4294967295 | g >>> 22);
        g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
        e = f + (g << 15 & 4294967295 | g >>> 17);
        g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
        c = e + (g << 21 & 4294967295 | g >>> 11);
        g = b + (e ^ (c | ~f)) + d[12] + 1700485571 & 4294967295;
        b = c + (g << 6 & 4294967295 | g >>> 26);
        g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
        f = b + (g << 10 & 4294967295 | g >>> 22);
        g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
        e = f + (g << 15 & 4294967295 | g >>> 17);
        g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
        c = e + (g << 21 & 4294967295 | g >>> 11);
        g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
        b = c + (g << 6 & 4294967295 | g >>> 26);
        g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
        f = b + (g << 10 & 4294967295 | g >>> 22);
        g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
        e = f + (g << 15 & 4294967295 | g >>> 17);
        g = c + (f ^ (e | ~b)) + d[13] + 1309151649 & 4294967295;
        c = e + (g << 21 & 4294967295 | g >>> 11);
        g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
        b = c + (g << 6 & 4294967295 | g >>> 26);
        g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
        f = b + (g << 10 & 4294967295 | g >>> 22);
        g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
        e = f + (g << 15 & 4294967295 | g >>> 17);
        g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
        a.g[0] = a.g[0] + b & 4294967295;
        a.g[1] = a.g[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
        a.g[2] = a.g[2] + e & 4294967295;
        a.g[3] = a.g[3] + f & 4294967295
    };
    jq.prototype.l = function(a, b) {
        void 0 === b && (b = a.length);
        for (var c = b - this.h, d = this.B, e = this.o, f = 0; f < b; ) {
            if (0 == e)
                for (; f <= c; )
                    kq(this, a, f),
                    f += this.h;
            if ("string" === typeof a)
                for (; f < b; ) {
                    if (d[e++] = a.charCodeAt(f++),
                    e == this.h) {
                        kq(this, d);
                        e = 0;
                        break
                    }
                }
            else
                for (; f < b; )
                    if (d[e++] = a[f++],
                    e == this.h) {
                        kq(this, d);
                        e = 0;
                        break
                    }
        }
        this.o = e;
        this.A += b
    }
    ;
    jq.prototype.H = function() {
        var a = Array((56 > this.o ? this.h : 2 * this.h) - this.o);
        a[0] = 128;
        for (var b = 1; b < a.length - 8; ++b)
            a[b] = 0;
        var c = 8 * this.A;
        for (b = a.length - 8; b < a.length; ++b)
            a[b] = c & 255,
            c /= 256;
        this.l(a);
        a = Array(16);
        for (b = c = 0; 4 > b; ++b)
            for (var d = 0; 32 > d; d += 8)
                a[c++] = this.g[b] >>> d & 255;
        return a
    }
    ;
    var lq = function() {
        this.h = null
    };
    t(lq, rp);
    lq.prototype.g = function(a) {
        var b = rp.prototype.g.call(this, a);
        var c = Zp = z();
        var d = dq(5);
        c = (aq ? !d : d) ? c | 2 : c & -3;
        d = dq(2);
        c = (bq ? !d : d) ? c | 8 : c & -9;
        c = {
            s1: (c >>> 0).toString(16)
        };
        this.h || (this.h = iq());
        b.A = this.h;
        b.B = qp(a, $o, c, "h", mq("kArwaWEsTs"));
        b.o = qp(a, bp, {}, "h", mq("b96YPMzfnx"));
        b.h = qp(a, cp, {}, "h", mq("yb8Wev6QDg"));
        return b
    }
    ;
    var mq = function(a) {
        return function(b) {
            var c = new jq;
            c.l(b + a);
            return wb(c.H()).slice(-8)
        }
    };
    var nq = function(a, b) {
        this.h = a;
        this.l = b
    };
    nq.prototype.report = function(a, b) {
        var c = this.g(b);
        if ("function" === typeof c) {
            var d = {};
            d = (d.sv = "883",
            d.cb = "j",
            d.e = oq(a),
            d);
            var e = Vn(b, a, hm());
            Sb(d, e);
            b.xd[a] = e;
            d = 2 == b.wa() ? Dm(d).join("&") : this.l.g(d).g;
            try {
                return c(b.la, d, a),
                0
            } catch (f) {
                return 2
            }
        } else
            return 1
    }
    ;
    var oq = function(a) {
        var b = fp(a) ? "custom_metric_viewable" : a;
        a = Nb(function(c) {
            return c == b
        });
        return Pl[a]
    };
    nq.prototype.g = function() {
        return La(this.h)
    }
    ;
    var pq = function(a, b, c) {
        nq.call(this, a, b);
        this.o = c
    };
    t(pq, nq);
    pq.prototype.g = function(a) {
        if (!a.Pa)
            return nq.prototype.g.call(this, a);
        if (this.o[a.Pa])
            return function() {}
            ;
        yl(393, Error());
        return null
    }
    ;
    var qq = function() {
        Ip.call(this);
        this.G = void 0;
        this.I = null;
        this.D = !1;
        this.A = {};
        this.M = 0;
        this.o = new lq
    };
    t(qq, Ip);
    qq.prototype.J = function(a, b) {
        var c = this
          , d = qo.C();
        if (null != d.g)
            switch (d.g.da()) {
            case "nis":
                var e = rq(this, a, b);
                break;
            case "gsv":
                e = sq(this, a, b);
                break;
            case "exc":
                e = tq(this, a)
            }
        e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = Wp(this, a, b.opt_adElement, b.opt_osdId)));
        e && 1 == e.wa() && (e.M == Ma && (e.M = function(f) {
            return c.jd(f)
        }
        ),
        uq(this, e, b));
        return e
    }
    ;
    var uq = function(a, b, c) {
        c = c.opt_configurable_tracking_events;
        null != a.h && Array.isArray(c) && Lp(a, c, b)
    };
    qq.prototype.jd = function(a) {
        a.h = 0;
        a.P = 0;
        if ("h" == a.B || "n" == a.B) {
            if (O.C().l)
                var b = La("ima.bridge.getVideoMetadata");
            else if (a.Pa && vq(this)) {
                var c = this.A[a.Pa];
                c ? b = function(e) {
                    return wq(c, e)
                }
                : null !== c && yl(379, Error())
            } else
                b = La("ima.common.getVideoMetadata");
            if ("function" === typeof b)
                try {
                    var d = b(a.la)
                } catch (e) {
                    a.h |= 4
                }
            else
                a.h |= 2
        } else if ("b" == a.B)
            if (b = La("ytads.bulleit.getVideoMetadata"),
            "function" === typeof b)
                try {
                    d = b(a.la)
                } catch (e) {
                    a.h |= 4
                }
            else
                a.h |= 2;
        else if ("ml" == a.B)
            if (b = La("ima.common.getVideoMetadata"),
            "function" === typeof b)
                try {
                    d = b(a.la)
                } catch (e) {
                    a.h |= 4
                }
            else
                a.h |= 2;
        else
            a.h |= 1;
        a.h || (void 0 === d ? a.h |= 8 : null === d ? a.h |= 16 : Ob(d) ? a.h |= 32 : null != d.errorCode && (a.P = d.errorCode,
        a.h |= 64));
        null == d && (d = {});
        Yp(d, a);
        am(d.volume) && am(this.G) && (d.volume *= this.G);
        return d
    }
    ;
    var sq = function(a, b, c) {
        var d = ho(ko, b);
        d || (d = c.opt_nativeTime || -1,
        d = Jp(a, b, Qp(a), d),
        c.opt_osdId && (d.Pa = c.opt_osdId));
        return d
    }
      , rq = function(a, b, c) {
        var d = ho(ko, b);
        d || (d = Jp(a, b, "n", c.opt_nativeTime || -1));
        return d
    }
      , tq = function(a, b) {
        var c = ho(ko, b);
        c || (c = Jp(a, b, "h", -1));
        return c
    };
    qq.prototype.Xc = function() {
        if (vq(this))
            return new pq("ima.common.triggerExternalActivityEvent",this.o,this.A);
        var a = xq(this);
        return null != a ? new nq(a,this.o) : null
    }
    ;
    var xq = function(a) {
        var b = O.C();
        switch (Qp(a)) {
        case "b":
            return "ytads.bulleit.triggerExternalActivityEvent";
        case "n":
            return "ima.bridge.triggerExternalActivityEvent";
        case "h":
            if (b.l)
                return "ima.bridge.triggerExternalActivityEvent";
        case "m":
        case "ml":
            return "ima.common.triggerExternalActivityEvent"
        }
        return null
    };
    qq.prototype.Dc = function(a) {
        !a.g && a.Ya && Rp(this, a, "overlay_unmeasurable_impression") && (a.g = !0)
    }
    ;
    qq.prototype.qd = function(a) {
        a.sd && (a.Za() ? Rp(this, a, "overlay_viewable_end_of_session_impression") : Rp(this, a, "overlay_unviewable_impression"),
        a.sd = !1)
    }
    ;
    var yq = function(a, b, c, d) {
        c = void 0 === c ? {} : c;
        var e = {};
        Sb(e, {
            opt_adElement: void 0,
            opt_fullscreen: void 0
        }, c);
        if (e.opt_bounds)
            return a.o.g(ep("ol", d));
        if (void 0 !== d)
            if (void 0 !== dp(d))
                if (Po)
                    b = ep("ue", d);
                else if (Op(a),
                "i" == Oo)
                    b = ep("i", d),
                    b["if"] = 0;
                else if (b = a.J(b, e)) {
                    b: {
                        "i" == Oo && (b.Ya = !0,
                        a.Ec(b));
                        c = e.opt_fullscreen;
                        void 0 !== c && fn(b, !!c);
                        var f;
                        if (c = !P.C().h && !dm())
                            bl(),
                            c = 0 === Ag(oe);
                        if (f = c) {
                            switch (b.wa()) {
                            case 1:
                                Tp(a, b, "pv");
                                break;
                            case 2:
                                a.Dc(b)
                            }
                            Pp("pv")
                        }
                        c = d.toLowerCase();
                        if (f = !f)
                            c: {
                                if (Nk(O.C().O, "ssmol") && (f = a.l,
                                "loaded" === c))
                                    break c;
                                f = kb(Ml, c)
                            }
                        if (f && 0 == b.ca) {
                            "i" != Oo && (Fo.done = !1);
                            f = void 0 !== e ? e.opt_nativeTime : void 0;
                            Fl = f = "number" === typeof f ? f : Hl();
                            b.Db = !0;
                            var g = hm();
                            b.ca = 1;
                            b.ha = {};
                            b.ha.start = !1;
                            b.ha.firstquartile = !1;
                            b.ha.midpoint = !1;
                            b.ha.thirdquartile = !1;
                            b.ha.complete = !1;
                            b.ha.resume = !1;
                            b.ha.pause = !1;
                            b.ha.skip = !1;
                            b.ha.mute = !1;
                            b.ha.unmute = !1;
                            b.ha.viewable_impression = !1;
                            b.ha.measurable_impression = !1;
                            b.ha.fully_viewable_audible_half_duration_impression = !1;
                            b.ha.fullscreen = !1;
                            b.ha.exitfullscreen = !1;
                            b.jc = 0;
                            g || (b.ua().J = f);
                            Io(Fo, [b], !g)
                        }
                        (f = b.ab[c]) && rn(b.ga, f);
                        kb(Nl, c) && (b.od = !0,
                        In(b));
                        switch (b.wa()) {
                        case 1:
                            var h = fp(c) ? a.L.custom_metric_viewable : a.L[c];
                            break;
                        case 2:
                            h = a.V[c]
                        }
                        if (h && (d = h.call(a, b, e, d),
                        void 0 !== d)) {
                            e = ep(void 0, c);
                            Sb(e, d);
                            d = e;
                            break b
                        }
                        d = void 0
                    }
                    3 == b.ca && a.B(b);
                    b = d
                } else
                    b = ep("nf", d);
            else
                b = void 0;
        else
            Po ? b = ep("ue") : (b = a.J(b, e)) ? (d = ep(),
            Sb(d, Un(b, !0, !1, !1)),
            b = d) : b = ep("nf");
        return "string" === typeof b ? a.o.g(void 0) : a.o.g(b)
    };
    qq.prototype.K = function(a) {
        this.l && 1 == a.wa() && zq(this, a)
    }
    ;
    qq.prototype.Ec = function(a) {
        this.l && 1 == a.wa() && zq(this, a)
    }
    ;
    var zq = function(a, b) {
        var c;
        if (b.Pa && vq(a)) {
            var d = a.A[b.Pa];
            d ? c = function(f, g) {
                Aq(d, f, g)
            }
            : null !== d && yl(379, Error())
        } else
            c = La("ima.common.triggerViewabilityMeasurementUpdate");
        if ("function" === typeof c) {
            var e = Pn(b);
            e.nativeVolume = a.G;
            c(b.la, e)
        }
    }
      , Bq = function(a, b, c) {
        a.A[b] = c
    }
      , vq = function(a) {
        return O.C().l || "h" != Qp(a) && "m" != Qp(a) ? !1 : 0 != a.M
    };
    qq.prototype.H = function(a, b, c, d) {
        a = Ip.prototype.H.call(this, a, b, c, d);
        this.D && (b = this.I,
        null == a.A && (a.A = new mn),
        b.g[a.la] = a.A,
        a.A.A = Xn);
        return a
    }
    ;
    qq.prototype.B = function(a) {
        a && 1 == a.wa() && this.D && delete this.I.g[a.la];
        return Ip.prototype.B.call(this, a)
    }
    ;
    var Cq = function(a) {
        var b = {};
        return b.viewability = a.g,
        b.googleViewability = a.l,
        b.moatInit = a.A,
        b.moatViewability = a.B,
        b.integralAdsViewability = a.o,
        b.doubleVerifyViewability = a.h,
        b
    }
      , Dq = function(a, b, c) {
        c = void 0 === c ? {} : c;
        a = yq(qq.C(), b, c, a);
        return Cq(a)
    };
    Na(qq);
    var Eq = new op;
    Eq.A = "stopped";
    Eq.g = "stopped";
    Eq.l = "stopped";
    Eq.B = "stopped";
    Eq.o = "stopped";
    Eq.h = "stopped";
    Object.freeze(Eq);
    var Fq = xl(193, Dq, void 0, Vp);
    y("Goog_AdSense_Lidar_sendVastEvent", Fq, void 0);
    var Gq = xl(194, function(a, b) {
        b = void 0 === b ? {} : b;
        a = yq(qq.C(), a, b);
        return Cq(a)
    });
    y("Goog_AdSense_Lidar_getViewability", Gq, void 0);
    var Hq = xl(195, function() {
        return el()
    });
    y("Goog_AdSense_Lidar_getUrlSignalsArray", Hq, void 0);
    var Iq = xl(196, function() {
        return Xg(el())
    });
    y("Goog_AdSense_Lidar_getUrlSignalsList", Iq, void 0);
    var Kq = function(a) {
        ce(this, a, Jq, null)
    };
    B(Kq, Yd);
    var Jq = [3];
    var Mq = function(a) {
        ce(this, a, Lq, null)
    };
    B(Mq, Yd);
    var Lq = [1, 2, 3, 4]
      , Nq = function(a, b) {
        return he(a, 1, b || [])
    }
      , Oq = function(a, b) {
        return he(a, 2, b || [])
    }
      , Pq = function(a, b) {
        return he(a, 3, b || [])
    }
      , Qq = function(a, b) {
        he(a, 4, b || [])
    };
    var Sq = function(a) {
        ce(this, a, Rq, null)
    };
    B(Sq, Yd);
    var Rq = [12, 13, 14, 17, 18, 19];
    Sq.prototype.getVersion = function() {
        return ee(this, 1, 0)
    }
    ;
    var Tq = function(a, b) {
        return ie(a, 1, b, 0)
    }
      , Uq = function(a, b) {
        return le(a, 2, b)
    }
      , Vq = function(a, b) {
        return le(a, 3, b)
    }
      , Wq = function(a, b) {
        return ie(a, 4, b, 0)
    }
      , Xq = function(a, b) {
        return ie(a, 5, b, 0)
    }
      , Yq = function(a, b) {
        return ie(a, 6, b, 0)
    }
      , Zq = function(a, b) {
        return ie(a, 7, b, "")
    }
      , $q = function(a, b) {
        return ie(a, 8, b, 0)
    }
      , ar = function(a, b) {
        return ie(a, 9, b, 0)
    }
      , br = function(a, b) {
        return ie(a, 10, b, !1)
    }
      , cr = function(a, b) {
        return ie(a, 11, b, !1)
    }
      , dr = function(a, b) {
        return he(a, 12, b || [])
    }
      , er = function(a, b) {
        return he(a, 13, b || [])
    }
      , fr = function(a, b) {
        return he(a, 14, b || [])
    }
      , gr = function(a, b) {
        return ie(a, 15, b, !1)
    }
      , hr = function(a, b) {
        return ie(a, 16, b, "")
    }
      , ir = function(a, b) {
        return he(a, 17, b || [])
    }
      , jr = function(a, b) {
        return he(a, 18, b || [])
    }
      , kr = function(a, b) {
        a.g || (a.g = {});
        b = b || [];
        for (var c = [], d = 0; d < b.length; d++)
            c[d] = b[d].ia;
        a.g[19] = b;
        return he(a, 19, c)
    };
    var lr = function(a) {
        ce(this, a, null, null)
    };
    B(lr, Yd);
    var mr = "a".charCodeAt()
      , nr = Hb({
        Xf: 0,
        Wf: 1,
        Tf: 2,
        Of: 3,
        Uf: 4,
        Pf: 5,
        Vf: 6,
        Rf: 7,
        Sf: 8,
        Nf: 9,
        Qf: 10
    })
      , or = Hb({
        Zf: 0,
        $f: 1,
        Yf: 2
    });
    var pr = function(a) {
        if (/[^01]/.test(a))
            throw Error("Input bitstring " + a + " is malformed!");
        this.h = a;
        this.g = 0
    }
      , rr = function(a) {
        a = qr(a, 36);
        var b = new pe;
        b = ie(b, 1, Math.floor(a / 10), 0);
        return ie(b, 2, a % 10 * 1E8, 0)
    }
      , sr = function(a) {
        var b = function() {
            var c = qr(a, 6);
            if (25 < c || 0 > c)
                throw Error("Invalid character code, expected in range [0,25], got: " + c);
            return String.fromCharCode(mr + c)
        };
        return b() + b()
    }
      , vr = function(a) {
        var b = qr(a, 16);
        return !0 === !!qr(a, 1) ? (a = tr(a),
        a.forEach(function(c) {
            if (c > b)
                throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }),
        a) : ur(a, b)
    }
      , wr = function(a) {
        for (var b = [], c = qr(a, 12); c--; ) {
            var d = qr(a, 6)
              , e = qr(a, 2)
              , f = tr(a)
              , g = b
              , h = g.push
              , k = new Kq;
            d = ie(k, 1, d, 0);
            e = ie(d, 2, e, 0);
            f = he(e, 3, f || []);
            h.call(g, f)
        }
        return b
    }
      , tr = function(a) {
        for (var b = qr(a, 12), c = []; b--; ) {
            var d = !0 === !!qr(a, 1)
              , e = qr(a, 16);
            if (d)
                for (d = qr(a, 16); e <= d; e++)
                    c.push(e);
            else
                c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }
      , ur = function(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (qr(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f))
                    throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }
      , qr = function(a, b) {
        if (a.g + b > a.h.length)
            throw Error("Requested length " + b + " is past end of string.");
        var c = a.h.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    };
    pr.prototype.skip = function(a) {
        this.g += a
    }
    ;
    var xr = function(a) {
        try {
            var b = Vd(a).map(function(f) {
                return f.toString(2).padStart(8, "0")
            }).join("")
              , c = new pr(b);
            if (3 !== qr(c, 3))
                return null;
            var d = Oq(Nq(new Mq, ur(c, 24, nr)), ur(c, 24, nr))
              , e = qr(c, 6);
            0 !== e && Qq(Pq(d, ur(c, e)), ur(c, e));
            return d
        } catch (f) {
            return null
        }
    };
    var yr = function(a) {
        try {
            var b = Vd(a).map(function(d) {
                return d.toString(2).padStart(8, "0")
            }).join("")
              , c = new pr(b);
            return kr(jr(ir(hr(gr(fr(er(dr(cr(br(ar($q(Zq(Yq(Xq(Wq(Vq(Uq(Tq(new Sq, qr(c, 6)), rr(c)), rr(c)), qr(c, 12)), qr(c, 12)), qr(c, 6)), sr(c)), qr(c, 12)), qr(c, 6)), !!qr(c, 1)), !!qr(c, 1)), ur(c, 12, or)), ur(c, 24, nr)), ur(c, 24, nr)), !!qr(c, 1)), sr(c)), vr(c)), vr(c)), wr(c))
        } catch (d) {
            return null
        }
    };
    var Ar = function(a) {
        if (!a)
            return null;
        var b = a.split(".");
        if (4 < b.length)
            return null;
        a = yr(b[0]);
        if (!a)
            return null;
        var c = new lr;
        a = le(c, 1, a);
        b.shift();
        b = r(b);
        for (c = b.next(); !c.done; c = b.next())
            switch (c = c.value,
            zr(c)) {
            case 1:
            case 2:
                break;
            case 3:
                c = xr(c);
                if (!c)
                    return null;
                le(a, 2, c);
                break;
            default:
                return null
            }
        return a
    }
      , zr = function(a) {
        try {
            var b = Vd(a).map(function(c) {
                return c.toString(2).padStart(8, "0")
            }).join("");
            return qr(new pr(b), 3)
        } catch (c) {
            return -1
        }
    };
    var Br = function(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = r(b);
            for (var d = b.next(); !d.done; d = b.next())
                d = d.value,
                c[d] = -1 !== a.indexOf(d)
        } else
            for (a = r(a),
            d = a.next(); !d.done; d = a.next())
                c[d.value] = !0;
        delete c[0];
        return c
    };
    var Dr = function(a) {
        ce(this, a, Cr, null)
    };
    B(Dr, Yd);
    var Cr = [6];
    var Er = /^((market|itms|intent|itms-appss):\/\/)/i;
    var Fr = function(a, b) {
        this.h = {};
        this.g = [];
        this.l = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Fr)
                for (c = a.Ta(),
                d = 0; d < c.length; d++)
                    this.set(c[d], a.get(c[d]));
            else
                for (d in a)
                    this.set(d, a[d])
    };
    Fr.prototype.Va = function() {
        Gr(this);
        for (var a = [], b = 0; b < this.g.length; b++)
            a.push(this.h[this.g[b]]);
        return a
    }
    ;
    Fr.prototype.Ta = function() {
        Gr(this);
        return this.g.concat()
    }
    ;
    Fr.prototype.remove = function(a) {
        return Hr(this.h, a) ? (delete this.h[a],
        this.l--,
        this.g.length > 2 * this.l && Gr(this),
        !0) : !1
    }
    ;
    var Gr = function(a) {
        if (a.l != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length; ) {
                var d = a.g[b];
                Hr(a.h, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.l != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length; )
                d = a.g[b],
                Hr(e, d) || (a.g[c++] = d,
                e[d] = 1),
                b++;
            a.g.length = c
        }
    };
    Fr.prototype.get = function(a, b) {
        return Hr(this.h, a) ? this.h[a] : b
    }
    ;
    Fr.prototype.set = function(a, b) {
        Hr(this.h, a) || (this.l++,
        this.g.push(a));
        this.h[a] = b
    }
    ;
    Fr.prototype.forEach = function(a, b) {
        for (var c = this.Ta(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    var Hr = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Q = function(a, b) {
        this.h = this.B = this.o = "";
        this.J = null;
        this.D = this.g = "";
        this.A = !1;
        var c;
        a instanceof Q ? (this.A = void 0 !== b ? b : a.A,
        Ir(this, a.o),
        this.B = a.B,
        this.h = a.h,
        Jr(this, a.J),
        this.g = a.g,
        Kr(this, Lr(a.l)),
        this.D = a.G()) : a && (c = String(a).match(cf)) ? (this.A = !!b,
        Ir(this, c[1] || "", !0),
        this.B = Mr(c[2] || ""),
        this.h = Mr(c[3] || "", !0),
        Jr(this, c[4]),
        this.g = Mr(c[5] || "", !0),
        Kr(this, c[6] || "", !0),
        this.D = Mr(c[7] || "")) : (this.A = !!b,
        this.l = new Nr(null,this.A))
    };
    Q.prototype.toString = function() {
        var a = []
          , b = this.o;
        b && a.push(Or(b, Pr, !0), ":");
        var c = this.h;
        if (c || "file" == b)
            a.push("//"),
            (b = this.B) && a.push(Or(b, Pr, !0), "@"),
            a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.J,
            null != c && a.push(":", String(c));
        if (c = this.g)
            this.h && "/" != c.charAt(0) && a.push("/"),
            a.push(Or(c, "/" == c.charAt(0) ? Qr : Rr, !0));
        (c = this.l.toString()) && a.push("?", c);
        (c = this.G()) && a.push("#", Or(c, Sr));
        return a.join("")
    }
    ;
    Q.prototype.resolve = function(a) {
        var b = this.I()
          , c = !!a.o;
        c ? Ir(b, a.o) : c = !!a.B;
        c ? b.B = a.B : c = !!a.h;
        c ? b.h = a.h : c = null != a.J;
        var d = a.g;
        if (c)
            Jr(b, a.J);
        else if (c = !!a.g) {
            if ("/" != d.charAt(0))
                if (this.h && !this.g)
                    d = "/" + d;
                else {
                    var e = b.g.lastIndexOf("/");
                    -1 != e && (d = b.g.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e)
                d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length; ) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                    d && g == e.length && f.push("")) : (f.push(h),
                    d = !0)
                }
                d = f.join("/")
            } else
                d = e
        }
        c ? b.g = d : c = "" !== a.l.toString();
        c ? Kr(b, Lr(a.l)) : c = !!a.D;
        c && (b.D = a.G());
        return b
    }
    ;
    Q.prototype.I = function() {
        return new Q(this)
    }
    ;
    var Ir = function(a, b, c) {
        a.o = c ? Mr(b, !0) : b;
        a.o && (a.o = a.o.replace(/:$/, ""))
    }
      , Jr = function(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.J = b
        } else
            a.J = null
    }
      , Kr = function(a, b, c) {
        b instanceof Nr ? (a.l = b,
        Tr(a.l, a.A)) : (c || (b = Or(b, Ur)),
        a.l = new Nr(b,a.A))
    }
      , Vr = function(a, b, c) {
        a.l.set(b, c);
        return a
    };
    Q.prototype.G = function() {
        return this.D
    }
    ;
    var Mr = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
      , Or = function(a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, Wr),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
    }
      , Wr = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
      , Pr = /[#\/\?@]/g
      , Rr = /[#\?:]/g
      , Qr = /[#\?]/g
      , Ur = /[#\?@]/g
      , Sr = /#/g
      , Nr = function(a, b) {
        this.h = this.g = null;
        this.l = a || null;
        this.o = !!b
    }
      , Xr = function(a) {
        a.g || (a.g = new Fr,
        a.h = 0,
        a.l && ef(a.l, function(b, c) {
            a.add(Sc(b), c)
        }))
    };
    Nr.prototype.add = function(a, b) {
        Xr(this);
        this.l = null;
        a = Yr(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.h += 1;
        return this
    }
    ;
    Nr.prototype.remove = function(a) {
        Xr(this);
        a = Yr(this, a);
        return Hr(this.g.h, a) ? (this.l = null,
        this.h -= this.g.get(a).length,
        this.g.remove(a)) : !1
    }
    ;
    var Zr = function(a, b) {
        Xr(a);
        b = Yr(a, b);
        return Hr(a.g.h, b)
    };
    l = Nr.prototype;
    l.forEach = function(a, b) {
        Xr(this);
        this.g.forEach(function(c, d) {
            C(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    }
    ;
    l.Ta = function() {
        Xr(this);
        for (var a = this.g.Va(), b = this.g.Ta(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    l.Va = function(a) {
        Xr(this);
        var b = [];
        if ("string" === typeof a)
            Zr(this, a) && (b = qb(b, this.g.get(Yr(this, a))));
        else {
            a = this.g.Va();
            for (var c = 0; c < a.length; c++)
                b = qb(b, a[c])
        }
        return b
    }
    ;
    l.set = function(a, b) {
        Xr(this);
        this.l = null;
        a = Yr(this, a);
        Zr(this, a) && (this.h -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.h += 1;
        return this
    }
    ;
    l.get = function(a, b) {
        if (!a)
            return b;
        a = this.Va(a);
        return 0 < a.length ? String(a[0]) : b
    }
    ;
    l.toString = function() {
        if (this.l)
            return this.l;
        if (!this.g)
            return "";
        for (var a = [], b = this.g.Ta(), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = encodeURIComponent(String(d));
            d = this.Va(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.l = a.join("&")
    }
    ;
    var Lr = function(a) {
        var b = new Nr;
        b.l = a.l;
        a.g && (b.g = new Fr(a.g),
        b.h = a.h);
        return b
    }
      , Yr = function(a, b) {
        b = String(b);
        a.o && (b = b.toLowerCase());
        return b
    }
      , Tr = function(a, b) {
        b && !a.o && (Xr(a),
        a.l = null,
        a.g.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d),
            this.remove(e),
            0 < c.length && (this.l = null,
            this.g.set(Yr(this, e), rb(c)),
            this.h += c.length))
        }, a));
        a.o = b
    };
    var $r = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" ")
      , as = /\bocr\b/
      , bs = 0
      , cs = {}
      , ds = function(a) {
        if (ec(Wc(a)))
            return !1;
        if (0 <= a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&"))
            return !0;
        try {
            var b = new Q(a)
        } catch (c) {
            return null != gb($r, function(d) {
                return 0 < a.search(d)
            })
        }
        return b.G().match(as) ? !0 : null != gb($r, function(c) {
            return null != a.match(c)
        })
    }
      , hs = function(a) {
        if (a && (a = es(a),
        !ec(a))) {
            var b = 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"';
            fs(function(c) {
                gs(c ? b : 'javascript:"<body><object data=\\""+' + a + '+"\\" type=\\"text/html\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')
            })
        }
    }
      , gs = function(a) {
        var b = Ve("IFRAME", {
            src: a,
            style: "display:none"
        });
        a = Le(b).body;
        var c = wj(function() {
            Mi(d);
            We(b)
        }, 15E3);
        var d = Di(b, ["load", "error"], function() {
            wj(function() {
                v.clearTimeout(c);
                We(b)
            }, 5E3)
        });
        a.appendChild(b)
    }
      , fs = function(a) {
        var b = cs.imageLoadingEnabled;
        if (null != b)
            a(b);
        else {
            var c = !1;
            is(function(d, e) {
                delete cs[e];
                c || (c = !0,
                null == cs.imageLoadingEnabled && (cs.imageLoadingEnabled = d),
                a(d))
            })
        }
    }
      , is = function(a) {
        var b = new Image
          , c = "" + bs++;
        cs[c] = b;
        b.onload = function() {
            clearTimeout(d);
            a(!0, c)
        }
        ;
        var d = setTimeout(function() {
            a(!1, c)
        }, 300);
        b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
    }
      , js = function(a) {
        if (a) {
            var b = Te(document, "OBJECT");
            b.data = a;
            b.width = "1";
            b.height = "1";
            b.style.visibility = "hidden";
            var c = "" + bs++;
            cs[c] = b;
            b.onload = b.onerror = function() {
                delete cs[c]
            }
            ;
            document.body.appendChild(b)
        }
    }
      , ks = function(a) {
        if (a) {
            var b = new Image
              , c = "" + bs++;
            cs[c] = b;
            b.onload = b.onerror = function() {
                delete cs[c]
            }
            ;
            b.src = a
        }
    }
      , ls = function(a) {
        a && fs(function(b) {
            b ? ks(a) : js(a)
        })
    }
      , es = function(a) {
        if (!(a instanceof tc))
            if (a = "object" == typeof a && a.Na ? a.Ea() : String(a),
            xc.test(a))
                a = new tc(a,sc);
            else {
                a = String(a);
                a = a.replace(/(%0A|%0D)/g, "");
                var b = a.match(wc);
                a = b && vc.test(b[1]) ? new tc(a,sc) : null
            }
        a = uc(a || zc);
        if ("about:invalid#zClosurez" === a)
            return "";
        if (!(a instanceof Lc)) {
            b = "object" == typeof a;
            var c = null;
            b && a.cc && (c = a.ac());
            a = Nc(oc(b && a.Na ? a.Ea() : String(a)), c)
        }
        a = Mc(a).toString();
        return encodeURIComponent(String(Xg(a)))
    };
    var ms = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var ns = function(a) {
        var b = a.bb
          , c = a.height
          , d = a.width
          , e = void 0 === a.Ga ? !1 : a.Ga;
        this.B = a.lb;
        this.g = b;
        this.o = c;
        this.D = d;
        this.A = e
    };
    ns.prototype.getHeight = function() {
        return this.o
    }
    ;
    ns.prototype.getWidth = function() {
        return this.D
    }
    ;
    var os = function(a) {
        var b = a.Ze
          , c = a.Yd
          , d = a.Ye
          , e = a.Xd;
        ns.call(this, {
            lb: a.lb,
            bb: a.bb,
            height: a.height,
            width: a.width,
            Ga: void 0 === a.Ga ? !1 : a.Ga
        });
        this.J = b;
        this.l = c;
        this.H = d;
        this.h = e
    };
    t(os, ns);
    var ps = function(a) {
        var b = a.De;
        ns.call(this, {
            lb: a.lb,
            bb: a.bb,
            height: a.height,
            width: a.width,
            Ga: void 0 === a.Ga ? !1 : a.Ga
        });
        this.h = b
    };
    t(ps, ns);
    ps.prototype.getMediaUrl = function() {
        return this.h
    }
    ;
    var qs = {
        LOADED: "loaded",
        bc: "start",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        $b: "pause",
        Rc: "resume",
        Nc: "bufferStart",
        Mc: "bufferFinish",
        SKIPPED: "skipped",
        Td: "volumeChange",
        sg: "playerStateChange",
        ff: "adUserInteraction"
    };
    /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var rs = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
      , ts = function() {
        for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++)
            8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0),
            c = b & 15,
            b >>= 4,
            a[d] = rs[19 == d ? c & 3 | 8 : c]);
        return a.join("")
    };
    function us(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d)
            c[d - 1] = arguments[d];
        return new (Function.prototype.bind.apply(a, [null].concat(fa(c))))
    }
    ;var R = {}
      , vs = (R[18] = -1,
    R[22] = -1,
    R[43] = 350,
    R[44] = 350,
    R[45] = 350,
    R[59] = -1,
    R[133] = 350,
    R[134] = 350,
    R[135] = 350,
    R[136] = 350,
    R[140] = 50,
    R[141] = 50,
    R[160] = 350,
    R[242] = 150,
    R[243] = 150,
    R[244] = 150,
    R[245] = 150,
    R[249] = 50,
    R[250] = 50,
    R[251] = 50,
    R[278] = 150,
    R[342] = -1,
    R[343] = -1,
    R[344] = -1,
    R[345] = -1,
    R[346] = -1,
    R[347] = -1,
    R)
      , S = {}
      , ws = (S[18] = !1,
    S[22] = !1,
    S[43] = !0,
    S[44] = !0,
    S[45] = !0,
    S[59] = !1,
    S[133] = !0,
    S[134] = !0,
    S[135] = !0,
    S[136] = !0,
    S[140] = !0,
    S[141] = !0,
    S[160] = !0,
    S[242] = !0,
    S[243] = !0,
    S[244] = !0,
    S[245] = !0,
    S[249] = !0,
    S[250] = !0,
    S[251] = !0,
    S[278] = !0,
    S[342] = !1,
    S[343] = !1,
    S[344] = !1,
    S[345] = !1,
    S[346] = !1,
    S[347] = !1,
    S)
      , T = {}
      , xs = (T[18] = "video/mp4",
    T[22] = "video/mp4",
    T[43] = "video/webm",
    T[44] = "video/webm",
    T[45] = "video/webm",
    T[59] = "video/mp4",
    T[133] = "video/mp4",
    T[134] = "video/mp4",
    T[135] = "video/mp4",
    T[136] = "video/mp4",
    T[140] = "audio/mp4",
    T[141] = "audio/mp4",
    T[160] = "video/mp4",
    T[242] = "video/webm",
    T[243] = "video/webm",
    T[244] = "video/webm",
    T[245] = "video/webm",
    T[249] = "audio/webm",
    T[250] = "audio/webm",
    T[251] = "audio/webm",
    T[278] = "video/webm",
    T[342] = "video/mp4",
    T[343] = "video/mp4",
    T[344] = "video/mp4",
    T[345] = "video/mp4",
    T[346] = "video/mp4",
    T[347] = "video/mp4",
    T)
      , U = {}
      , ys = (U[18] = "avc1.42001E, mp4a.40.2",
    U[22] = "avc1.64001F, mp4a.40.2",
    U[43] = "vp8, vorbis",
    U[44] = "vp8, vorbis",
    U[45] = "vp8, vorbis",
    U[59] = "avc1.4D001F, mp4a.40.2",
    U[133] = "avc1.4D401E",
    U[134] = "avc1.4D401E",
    U[135] = "avc1.4D401E",
    U[136] = "avc1.4D401E",
    U[140] = "mp4a.40.2",
    U[141] = "mp4a.40.2",
    U[160] = "avc1.4D401E",
    U[242] = "vp9",
    U[243] = "vp9",
    U[244] = "vp9",
    U[245] = "vp9",
    U[249] = "opus",
    U[250] = "opus",
    U[251] = "opus",
    U[278] = "vp9",
    U[342] = "avc1.42E01E, mp4a.40.2",
    U[343] = "avc1.42E01E, mp4a.40.2",
    U[344] = "avc1.42E01E, mp4a.40.2",
    U[345] = "avc1.42E01E, mp4a.40.2",
    U[346] = "avc1.42E01E, mp4a.40.2",
    U[347] = "avc1.4D001F, mp4a.40.2",
    U);
    var zs = function() {};
    zs.prototype.g = null;
    var Bs = function(a) {
        var b;
        (b = a.g) || (b = {},
        As(a) && (b[0] = !0,
        b[1] = !0),
        b = a.g = b);
        return b
    };
    var Cs, Ds = function() {};
    B(Ds, zs);
    var Es = function(a) {
        return (a = As(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }
      , As = function(a) {
        if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d),
                    a.h = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.h
    };
    Cs = new Ds;
    var Fs = function(a) {
        N.call(this);
        this.headers = new Fr;
        this.K = a || null;
        this.h = !1;
        this.I = this.g = null;
        this.N = "";
        this.A = 0;
        this.o = this.M = this.B = this.L = !1;
        this.G = 0;
        this.D = null;
        this.X = "";
        this.P = this.T = !1
    };
    B(Fs, N);
    var Gs = /^https?$/i
      , Hs = ["POST", "PUT"]
      , Os = function(a, b, c, d) {
        if (a.g)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + a.N + "; newUri=" + b);
        c = c ? c.toUpperCase() : "GET";
        a.N = b;
        a.A = 0;
        a.L = !1;
        a.h = !0;
        a.g = a.K ? Es(a.K) : Es(Cs);
        a.I = a.K ? Bs(a.K) : Bs(Cs);
        a.g.onreadystatechange = Wa(a.V, a);
        try {
            a.M = !0,
            a.g.open(c, String(b), !0),
            a.M = !1
        } catch (g) {
            Is(a);
            return
        }
        b = d || "";
        d = new Fr(a.headers);
        var e = gb(d.Ta(), Ls)
          , f = v.FormData && b instanceof v.FormData;
        !kb(Hs, c) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        d.forEach(function(g, h) {
            this.g.setRequestHeader(h, g)
        }, a);
        a.X && (a.g.responseType = a.X);
        "withCredentials"in a.g && a.g.withCredentials !== a.T && (a.g.withCredentials = a.T);
        try {
            Ms(a),
            0 < a.G && (a.P = Ns(a.g),
            a.P ? (a.g.timeout = a.G,
            a.g.ontimeout = Wa(a.Z, a)) : a.D = wj(a.Z, a.G, a)),
            a.B = !0,
            a.g.send(b),
            a.B = !1
        } catch (g) {
            Is(a)
        }
    }
      , Ns = function(a) {
        return od && Fd(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
    }
      , Ls = function(a) {
        return "content-type" == a.toLowerCase()
    };
    Fs.prototype.Z = function() {
        "undefined" != typeof Ga && this.g && (this.A = 8,
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    var Is = function(a) {
        a.h = !1;
        a.g && (a.o = !0,
        a.g.abort(),
        a.o = !1);
        a.A = 5;
        Ps(a);
        Qs(a)
    }
      , Ps = function(a) {
        a.L || (a.L = !0,
        a.dispatchEvent("complete"),
        a.dispatchEvent("error"))
    };
    Fs.prototype.abort = function(a) {
        this.g && this.h && (this.h = !1,
        this.o = !0,
        this.g.abort(),
        this.o = !1,
        this.A = a || 7,
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        Qs(this))
    }
    ;
    Fs.prototype.R = function() {
        this.g && (this.h && (this.h = !1,
        this.o = !0,
        this.g.abort(),
        this.o = !1),
        Qs(this, !0));
        Fs.Ca.R.call(this)
    }
    ;
    Fs.prototype.V = function() {
        this.tb() || (this.M || this.B || this.o ? Rs(this) : this.$())
    }
    ;
    Fs.prototype.$ = function() {
        Rs(this)
    }
    ;
    var Rs = function(a) {
        if (a.h && "undefined" != typeof Ga && (!a.I[1] || 4 != Ss(a) || 2 != Ts(a)))
            if (a.B && 4 == Ss(a))
                wj(a.V, 0, a);
            else if (a.dispatchEvent("readystatechange"),
            4 == Ss(a)) {
                a.h = !1;
                try {
                    var b = Ts(a);
                    a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = String(a.N).match(cf)[1] || null;
                            if (!f && v.self && v.self.location) {
                                var g = v.self.location.protocol;
                                f = g.substr(0, g.length - 1)
                            }
                            e = !Gs.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    d ? (a.dispatchEvent("complete"),
                    a.dispatchEvent("success")) : (a.A = 6,
                    Ps(a))
                } finally {
                    Qs(a)
                }
            }
    }
      , Qs = function(a, b) {
        if (a.g) {
            Ms(a);
            var c = a.g
              , d = a.I[0] ? Ma : null;
            a.g = null;
            a.I = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }
      , Ms = function(a) {
        a.g && a.P && (a.g.ontimeout = null);
        a.D && (v.clearTimeout(a.D),
        a.D = null)
    };
    Fs.prototype.sc = function() {
        return !!this.g
    }
    ;
    var Ss = function(a) {
        return a.g ? a.g.readyState : 0
    }
      , Ts = function(a) {
        try {
            return 2 < Ss(a) ? a.g.status : -1
        } catch (b) {
            return -1
        }
    }
      , Us = function(a) {
        try {
            return a.g ? a.g.responseText : ""
        } catch (b) {
            return ""
        }
    }
      , Vs = function(a) {
        if (a.g) {
            a: {
                a = a.g.responseText;
                if (v.JSON)
                    try {
                        var b = v.JSON.parse(a);
                        break a
                    } catch (c) {}
                b = Ug(a)
            }
            return b
        }
    }
      , Ws = function(a, b) {
        if (a.g && 4 == Ss(a))
            return a = a.g.getResponseHeader(b),
            null === a ? void 0 : a
    };
    var Xs = /\/itag\/(\d+)\//;
    function Ys(a) {
        var b = parseInt(gf(a, "itag"), 10);
        return b ? b : (a = a.match(Xs)) && 2 == a.length ? parseInt(a[1], 10) : null
    }
    function Zs(a) {
        var b = xs[a];
        a = ys[a];
        b ? (b = Wc(b).toLowerCase(),
        b = a ? b + '; codecs="' + Wc(a) + '"' : b) : b = "";
        return b
    }
    function $s(a) {
        if ("function" === typeof CustomEvent)
            return new CustomEvent("media_source_error",{
                detail: a
            });
        var b = document.createEvent("CustomEvent");
        b.initCustomEvent("media_source_error", !1, !0, a);
        return b
    }
    ;var at = -1;
    var bt = function() {
        this.g = z()
    };
    bt.prototype.reset = function() {
        this.g = z()
    }
    ;
    var ct = function(a) {
        a = a.g + 5E3 - z();
        return 0 < a ? a : 0
    };
    var dt = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" ")
      , et = ["c.googlesyndication.com"];
    function ft(a, b) {
        b = void 0 === b ? window.location.protocol : b;
        var c = !1;
        gt(a, et) ? c = !1 : b.includes("https") && gt(a, dt) && (c = !0);
        if (c) {
            b = new Q(a);
            if ("https" == b.o)
                return a;
            K(J.C(), "htp", "1");
            Ir(b, "https");
            return b.toString()
        }
        return a
    }
    function gt(a, b) {
        return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)","i")).test(a)
    }
    ;var ht = function(a) {
        return (a = a.exec(Dc)) ? a[1] : ""
    };
    (function() {
        if (Jd)
            return ht(/Firefox\/([0-9.]+)/);
        if (od || pd || nd)
            return Ed;
        if (Nd)
            return id() ? ht(/CriOS\/([0-9.]+)/) : ht(/Chrome\/([0-9.]+)/);
        if (Od && !id())
            return ht(/Version\/([0-9.]+)/);
        if (Kd || Ld) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Dc);
            if (a)
                return a[1] + "." + a[2]
        } else if (Md)
            return (a = ht(/Android\s+([0-9.]+)/)) ? a : ht(/Version\/([0-9.]+)/);
        return ""
    }
    )();
    var it = /OS (\S+) like/
      , jt = /Android ([\d\.]+)/;
    function kt(a, b) {
        a = (a = a.exec(Dc)) ? a[1] : "";
        a = a.replace(/_/g, ".");
        return 0 <= rc(a, b)
    }
    var lt = function() {
        return td && "ontouchstart"in document.documentElement
    }
      , mt = function(a) {
        return yd && kt(it, a)
    }
      , nt = function(a) {
        return (a = void 0 === a ? null : a) && "function" === typeof a.getAttribute ? a.getAttribute("playsinline") ? !0 : !1 : !1
    };
    var ot = function(a) {
        var b = Error.call(this, a);
        this.message = b.message;
        "stack"in b && (this.stack = b.stack);
        this.errorCode = a
    };
    t(ot, Error);
    var pt = function() {
        if (!od)
            return !1;
        try {
            return new ActiveXObject("MSXML2.DOMDocument"),
            !0
        } catch (a) {
            return !1
        }
    }
      , qt = od && pt();
    var rt = function(a) {
        H.call(this);
        this.o = a;
        this.h = {}
    };
    B(rt, H);
    var tt = [];
    rt.prototype.U = function(a, b, c, d) {
        return ut(this, a, b, c, d)
    }
    ;
    var ut = function(a, b, c, d, e, f) {
        Array.isArray(c) || (c && (tt[0] = c.toString()),
        c = tt);
        for (var g = 0; g < c.length; g++) {
            var h = Ei(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
            if (!h)
                break;
            a.h[h.key] = h
        }
        return a
    };
    rt.prototype.vb = function(a, b, c, d) {
        return vt(this, a, b, c, d)
    }
    ;
    var vt = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++)
                vt(a, b, c[g], d, e, f);
        else {
            b = Di(b, c, d || a.handleEvent, e, f || a.o || a);
            if (!b)
                return a;
            a.h[b.key] = b
        }
        return a
    };
    rt.prototype.Qa = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                this.Qa(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            d = Pa(d) ? !!d.capture : !!d,
            e = e || this.o || this,
            c = Fi(c),
            d = !!d,
            b = ti(a) ? a.qb(b, c, d, e) : a ? (a = Hi(a)) ? a.qb(b, c, d, e) : null : null,
            b && (Mi(b),
            delete this.h[b.key])
    }
    ;
    var wt = function(a) {
        Bb(a.h, function(b, c) {
            this.h.hasOwnProperty(c) && Mi(b)
        }, a);
        a.h = {}
    };
    rt.prototype.R = function() {
        rt.Ca.R.call(this);
        wt(this)
    }
    ;
    rt.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    var xt = function() {};
    xt.prototype.get = function(a) {
        return yt({
            url: a.url,
            timeout: a.timeout,
            withCredentials: void 0 === a.withCredentials ? !0 : a.withCredentials,
            method: "GET"
        })
    }
    ;
    var yt = function(a) {
        var b = a.url
          , c = a.timeout
          , d = a.withCredentials
          , e = a.method
          , f = void 0 === a.content ? void 0 : a.content;
        return zt({
            url: b,
            timeout: c,
            withCredentials: d,
            method: e,
            content: f
        }).then(function(g) {
            return Promise.resolve(g)
        }, function(g) {
            return g instanceof Error && 6 == g.message && d ? zt({
                url: b,
                timeout: c,
                withCredentials: !d,
                method: e,
                content: f
            }) : Promise.reject(g)
        })
    }
      , zt = function(a) {
        var b = a.url
          , c = a.timeout
          , d = a.withCredentials
          , e = a.method
          , f = void 0 === a.content ? void 0 : a.content
          , g = new Fs;
        g.T = d;
        g.G = Math.max(0, ct(c));
        var h = new rt;
        return new Promise(function(k, n) {
            h.vb(g, "success", function() {
                a: {
                    if (cm())
                        try {
                            Vs(g);
                            var m = "application/json";
                            break a
                        } catch (A) {
                            m = "application/xml";
                            break a
                        }
                    m = Ws(g, "Content-Type") || ""
                }
                if (-1 != m.indexOf("application/json"))
                    k(Vs(g) || {});
                else {
                    try {
                        var u = g.g ? g.g.responseXML : null
                    } catch (A) {
                        u = null
                    }
                    if (null == u)
                        if (u = Us(g),
                        "undefined" != typeof DOMParser)
                            m = new DOMParser,
                            u = Sf(u),
                            u = m.parseFromString(Mc(u), "application/xml");
                        else if (qt) {
                            m = new ActiveXObject("MSXML2.DOMDocument");
                            m.resolveExternals = !1;
                            m.validateOnParse = !1;
                            try {
                                m.setProperty("ProhibitDTD", !0),
                                m.setProperty("MaxXMLSize", 2048),
                                m.setProperty("MaxElementDepth", 256)
                            } catch (A) {}
                            m.loadXML(u);
                            u = m
                        } else
                            throw Error("Your browser does not support loading xml documents");
                    m = hh(Wh);
                    var p;
                    if (p = u && u.documentElement)
                        (p = u.documentElement) && "VAST" != !p.nodeName ? (p = p.getAttribute("version")) ? (p = parseInt(p, 10),
                        p = null == p || isNaN(p) ? null : p) : p = null : p = null,
                        p = null == p || 2 > p || 4 < p ? !1 : !0;
                    if (!p && m) {
                        m = {
                            vastUrl: b.substring(0, 200),
                            responseText: Us(g).substring(0, 200),
                            status: Ts(g),
                            origin: window.location.origin
                        };
                        cm() || (m.contentType = Ws(g, "Content-Type"),
                        m.acao = Ws(g, "Access-Control-Allow-Origin"),
                        m.acac = Ws(g, "Access-Control-Allow-Credentials"));
                        p = J.C();
                        for (var w = r(Object.keys(m)), x = w.next(); !x.done; x = w.next())
                            x = x.value,
                            K(p, x, m[x])
                    }
                    k(u)
                }
                h.W();
                g.W()
            });
            h.vb(g, ["error", "timeout"], function() {
                n(new ot(g.A,Ts(g)));
                h.W();
                g.W()
            });
            Os(g, ft(b), e, f)
        }
        )
    };
    var At = function(a, b) {
        return ec(b) ? !1 : (new RegExp(a)).test(b)
    }
      , Bt = function(a) {
        var b = {};
        a.split(",").forEach(function(c) {
            var d = c.split("=");
            2 == d.length && (c = fc(d[0]),
            d = fc(d[1]),
            0 < c.length && (b[c] = d))
        });
        return b
    }
      , Ct = function(a) {
        var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
        if (!a)
            return null;
        a = a.toLowerCase().replace("-", "_");
        if (b.includes(a))
            return a;
        a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
        return b.includes(a) ? a : null
    };
    var Et = function(a) {
        Q.call(this, a);
        this.H = new Map;
        a = this.g;
        var b = a.indexOf(";")
          , c = null;
        0 <= b ? (this.g = a.substring(0, b),
        c = a.substring(b + 1)) : this.g = a;
        Dt(this, c)
    };
    t(Et, Q);
    Et.prototype.toString = function() {
        return Ft(this, Q.prototype.toString.call(this))
    }
    ;
    Et.prototype.G = function() {
        return ""
    }
    ;
    var Dt = function(a, b) {
        ec(Wc(b)) || b.split(";").forEach(function(c) {
            var d = c.indexOf("=");
            if (!(0 >= d)) {
                var e = Sc(c.substring(0, d));
                c = Sc(c.substring(d + 1));
                d = a.H.get(e);
                null != d ? d.includes(c) || d.push(c) : d = [Wc(c)];
                a.H.set(e, d)
            }
        }, a)
    }
      , Gt = function(a) {
        if (ec(Wc("ord")))
            return null;
        a = a.H.get("ord");
        return null != a ? a : null
    }
      , Ht = function(a, b) {
        ec(Wc("ord")) || (b = b.map(Wc),
        a.H.set("ord", b))
    }
      , Ft = function(a, b) {
        b = [Wc(b)];
        b.push.apply(b, fa(It(a)));
        return b.join(";")
    }
      , It = function(a) {
        var b = Gt(a);
        null == b ? b = [Wc(z())] : ec(Wc("ord")) || a.H.delete("ord");
        var c = [];
        a.H.forEach(function(d, e) {
            d.forEach(function(f) {
                c.push(e + "=" + f)
            })
        });
        c.push("ord=" + b[0]);
        Ht(a, b);
        return c
    };
    Et.prototype.I = function() {
        return new Et(this.toString())
    }
    ;
    function Jt(a) {
        var b = Zb("_blank");
        if (!ec(Wc(a))) {
            a = a instanceof tc || !Er.test(a) ? a : new tc(a,sc);
            var c = window;
            a = a instanceof tc ? a : yc(a);
            c = c || v;
            b = b instanceof Xb ? Yb(b) : b || "";
            c.open(uc(a), b, "", void 0)
        }
    }
    ;var Kt = {
        AUTOPLAY_DISALLOWED: "autoplayDisallowed",
        hf: "beginFullscreen",
        jf: "canPlay",
        kf: "canPlayThrough",
        CLICK: "click",
        DURATION_CHANGE: "durationChange",
        xf: "end",
        yf: "endFullscreen",
        zf: "error",
        Df: "focusSkipButton",
        Fd: "loadStart",
        LOADED: "loaded",
        fg: "mediaLoadTimeout",
        gg: "mediaPlaybackTimeout",
        $b: "pause",
        rg: "play",
        xg: "seeked",
        yg: "seeking",
        zg: "skip",
        Pd: "skipShown",
        bc: "start",
        Hg: "timeUpdate",
        Fg: "timedMetadata",
        Td: "volumeChange",
        Sg: "waiting"
    };
    var Mt = function(a) {
        this.g = a;
        this.h = Lt(a)
    }
      , Lt = function(a) {
        return new Map(a.g.split("/").reduce(function(b, c, d) {
            d % 2 ? b[b.length - 1].push(c) : b.push([c]);
            return b
        }, []))
    }
      , Nt = function(a, b) {
        var c = a.g.l.get(b);
        return c ? c : (a = a.h.get(b)) ? a : null
    };
    var Ot = function() {};
    var Rt = function(a, b) {
        this.h = 64;
        this.A = v.Uint8Array ? new Uint8Array(this.h) : Array(this.h);
        this.B = this.o = 0;
        this.g = [];
        this.D = a;
        this.J = b;
        this.G = v.Int32Array ? new Int32Array(64) : Array(64);
        void 0 === Pt && (v.Int32Array ? Pt = new Int32Array(Qt) : Pt = Qt);
        this.reset()
    }, Pt;
    B(Rt, yj);
    var St = qb(128, vb(0, 63));
    Rt.prototype.reset = function() {
        this.B = this.o = 0;
        this.g = v.Int32Array ? new Int32Array(this.J) : rb(this.J)
    }
    ;
    var Tt = function(a) {
        for (var b = a.A, c = a.G, d = 0, e = 0; e < b.length; )
            c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3],
            e = 4 * d;
        for (b = 16; 64 > b; b++) {
            e = c[b - 15] | 0;
            d = c[b - 2] | 0;
            var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0
              , g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
            c[b] = f + g | 0
        }
        d = a.g[0] | 0;
        e = a.g[1] | 0;
        var h = a.g[2] | 0
          , k = a.g[3] | 0
          , n = a.g[4] | 0
          , m = a.g[5] | 0
          , u = a.g[6] | 0;
        f = a.g[7] | 0;
        for (b = 0; 64 > b; b++) {
            var p = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h ^ e & h) | 0;
            g = n & m ^ ~n & u;
            f = f + ((n >>> 6 | n << 26) ^ (n >>> 11 | n << 21) ^ (n >>> 25 | n << 7)) | 0;
            g = g + (Pt[b] | 0) | 0;
            g = f + (g + (c[b] | 0) | 0) | 0;
            f = u;
            u = m;
            m = n;
            n = k + g | 0;
            k = h;
            h = e;
            e = d;
            d = g + p | 0
        }
        a.g[0] = a.g[0] + d | 0;
        a.g[1] = a.g[1] + e | 0;
        a.g[2] = a.g[2] + h | 0;
        a.g[3] = a.g[3] + k | 0;
        a.g[4] = a.g[4] + n | 0;
        a.g[5] = a.g[5] + m | 0;
        a.g[6] = a.g[6] + u | 0;
        a.g[7] = a.g[7] + f | 0
    };
    Rt.prototype.l = function(a, b) {
        void 0 === b && (b = a.length);
        var c = 0
          , d = this.o;
        if ("string" === typeof a)
            for (; c < b; )
                this.A[d++] = a.charCodeAt(c++),
                d == this.h && (Tt(this),
                d = 0);
        else if (Oa(a))
            for (; c < b; ) {
                var e = a[c++];
                if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0)))
                    throw Error("message must be a byte array");
                this.A[d++] = e;
                d == this.h && (Tt(this),
                d = 0)
            }
        else
            throw Error("message must be string or array");
        this.o = d;
        this.B += b
    }
    ;
    Rt.prototype.H = function() {
        var a = []
          , b = 8 * this.B;
        56 > this.o ? this.l(St, 56 - this.o) : this.l(St, this.h - (this.o - 56));
        for (var c = 63; 56 <= c; c--)
            this.A[c] = b & 255,
            b /= 256;
        Tt(this);
        for (c = b = 0; c < this.D; c++)
            for (var d = 24; 0 <= d; d -= 8)
                a[b++] = this.g[c] >> d & 255;
        return a
    }
    ;
    var Qt = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    var Vt = function() {
        Rt.call(this, 8, Ut)
    };
    B(Vt, Rt);
    var Ut = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    var Yt = function(a, b, c) {
        if ("number" === typeof a)
            var d = {
                name: Wt(a)
            };
        else
            d = a,
            a = Xt(a.name);
        this.code = a;
        this.g = d;
        b = "Error " + b + ": " + (this.g.name || "");
        c && (b += ", " + c);
        Za.call(this, b)
    };
    B(Yt, Za);
    var Zt = {
        Rd: 1,
        lg: 2,
        NOT_FOUND_ERR: 3,
        zd: 4,
        Dd: 5,
        mg: 6,
        Qd: 7,
        ABORT_ERR: 8,
        Od: 9,
        Jg: 10,
        TIMEOUT_ERR: 11,
        Nd: 12,
        INVALID_ACCESS_ERR: 13,
        INVALID_STATE_ERR: 14
    }
      , $t = (v.Ia || v.Ra || Zt).Rd
      , au = (v.Ia || v.Ra || Zt).NOT_FOUND_ERR
      , bu = (v.Ia || v.Ra || Zt).zd
      , cu = (v.Ia || v.Ra || Zt).Dd
      , du = (v.Ia || v.Ra || Zt).Qd
      , eu = (v.Ia || v.Ra || Zt).ABORT_ERR
      , fu = (v.Ia || v.Ra || Zt).Od
      , gu = (v.Ia || v.Ra || Zt).TIMEOUT_ERR
      , hu = (v.Ia || v.Ra || Zt).Nd
      , iu = (v.DOMException || Zt).INVALID_ACCESS_ERR
      , ju = (v.DOMException || Zt).INVALID_STATE_ERR
      , Xt = function(a) {
        switch (a) {
        case "UnknownError":
            return $t;
        case "NotFoundError":
            return au;
        case "ConstraintError":
            return bu;
        case "DataError":
            return cu;
        case "TransactionInactiveError":
            return du;
        case "AbortError":
            return eu;
        case "ReadOnlyError":
            return fu;
        case "TimeoutError":
            return gu;
        case "QuotaExceededError":
            return hu;
        case "InvalidAccessError":
            return iu;
        case "InvalidStateError":
            return ju;
        default:
            return $t
        }
    }
      , Wt = function(a) {
        switch (a) {
        case $t:
            return "UnknownError";
        case au:
            return "NotFoundError";
        case bu:
            return "ConstraintError";
        case cu:
            return "DataError";
        case du:
            return "TransactionInactiveError";
        case eu:
            return "AbortError";
        case fu:
            return "ReadOnlyError";
        case gu:
            return "TimeoutError";
        case hu:
            return "QuotaExceededError";
        case iu:
            return "InvalidAccessError";
        case ju:
            return "InvalidStateError";
        default:
            return "UnknownError"
        }
    }
      , ku = function(a, b) {
        return "error"in a ? new Yt(a.error,b) : new Yt({
            name: "UnknownError"
        },b)
    }
      , lu = function(a, b) {
        if ("name"in a)
            return b = b + ": " + a.message,
            new Yt(a,b);
        if ("code"in a) {
            var c = Wt(a.code);
            b = b + ": " + a.message;
            return new Yt({
                name: c
            },b)
        }
        return new Yt({
            name: "UnknownError"
        },b)
    };
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    var mu = function() {
        this.B = [];
        this.o = this.g = !1;
        this.l = void 0;
        this.G = this.K = this.J = !1;
        this.H = 0;
        this.h = null;
        this.D = 0
    };
    mu.prototype.cancel = function(a) {
        if (this.g)
            this.l instanceof mu && this.l.cancel();
        else {
            if (this.h) {
                var b = this.h;
                delete this.h;
                a ? b.cancel(a) : (b.D--,
                0 >= b.D && b.cancel())
            }
            this.G = !0;
            this.g || nu(this, new ou(this))
        }
    }
    ;
    mu.prototype.I = function(a, b) {
        this.J = !1;
        pu(this, a, b)
    }
    ;
    var pu = function(a, b, c) {
        a.g = !0;
        a.l = c;
        a.o = !b;
        qu(a)
    }
      , tu = function(a) {
        if (a.g) {
            if (!a.G)
                throw new ru(a);
            a.G = !1
        }
    };
    mu.prototype.A = function(a) {
        tu(this);
        pu(this, !0, a)
    }
    ;
    var nu = function(a, b) {
        tu(a);
        pu(a, !1, b)
    }
      , vu = function(a, b) {
        return uu(a, b, null, void 0)
    }
      , uu = function(a, b, c, d) {
        a.B.push([b, c, d]);
        a.g && qu(a);
        return a
    };
    mu.prototype.then = function(a, b, c) {
        var d, e, f = new gj(function(g, h) {
            d = g;
            e = h
        }
        );
        uu(this, d, function(g) {
            g instanceof ou ? f.cancel() : e(g)
        });
        return f.then(a, b, c)
    }
    ;
    mu.prototype.$goog_Thenable = !0;
    var wu = function(a) {
        return fb(a.B, function(b) {
            return "function" === typeof b[1]
        })
    }
      , qu = function(a) {
        if (a.H && a.g && wu(a)) {
            var b = a.H
              , c = xu[b];
            c && (v.clearTimeout(c.g),
            delete xu[b]);
            a.H = 0
        }
        a.h && (a.h.D--,
        delete a.h);
        b = a.l;
        for (var d = c = !1; a.B.length && !a.J; ) {
            var e = a.B.shift()
              , f = e[0]
              , g = e[1];
            e = e[2];
            if (f = a.o ? g : f)
                try {
                    var h = f.call(e || null, b);
                    void 0 !== h && (a.o = a.o && (h == b || h instanceof Error),
                    a.l = b = h);
                    if (ej(b) || "function" === typeof v.Promise && b instanceof v.Promise)
                        d = !0,
                        a.J = !0
                } catch (k) {
                    b = k,
                    a.o = !0,
                    wu(a) || (c = !0)
                }
        }
        a.l = b;
        d && (h = Wa(a.I, a, !0),
        d = Wa(a.I, a, !1),
        b instanceof mu ? (uu(b, h, d),
        b.K = !0) : b.then(h, d));
        c && (b = new yu(b),
        xu[b.g] = b,
        a.H = b.g)
    }
      , ru = function() {
        Za.call(this)
    };
    B(ru, Za);
    ru.prototype.message = "Deferred has already fired";
    ru.prototype.name = "AlreadyCalledError";
    var ou = function() {
        Za.call(this)
    };
    B(ou, Za);
    ou.prototype.message = "Deferred was canceled";
    ou.prototype.name = "CanceledError";
    var yu = function(a) {
        this.g = v.setTimeout(Wa(this.l, this), 0);
        this.h = a
    };
    yu.prototype.l = function() {
        delete xu[this.g];
        throw this.h;
    }
    ;
    var xu = {};
    var zu = function(a) {
        this.g = a
    }
      , Au = function(a, b, c, d) {
        var e = new mu;
        try {
            var f = d ? a.g.add(c, d) : a.g.add(c)
        } catch (g) {
            return b += se(c),
            d && (b += ", with key " + se(d)),
            nu(e, lu(g, b)),
            e
        }
        f.onsuccess = function(g) {
            e.A(g.target.result)
        }
        ;
        f.onerror = function(g) {
            b += se(c);
            d && (b += ", with key " + se(d));
            nu(e, ku(g.target, b))
        }
        ;
        return e
    };
    zu.prototype.add = function(a, b) {
        return Au(this, "adding into " + this.g.name + " with value ", a, b)
    }
    ;
    zu.prototype.remove = function(a) {
        var b = new mu;
        try {
            var c = this.g["delete"](a)
        } catch (e) {
            return c = "removing from " + this.g.name + " with key " + se(a),
            nu(b, lu(e, c)),
            b
        }
        c.onsuccess = function() {
            b.A()
        }
        ;
        var d = this;
        c.onerror = function(e) {
            var f = "removing from " + d.g.name + " with key " + se(a);
            nu(b, ku(e.target, f))
        }
        ;
        return b
    }
    ;
    zu.prototype.get = function(a) {
        var b = new mu;
        try {
            var c = this.g.get(a)
        } catch (e) {
            return c = "getting from " + this.g.name + " with key " + se(a),
            nu(b, lu(e, c)),
            b
        }
        c.onsuccess = function(e) {
            b.A(e.target.result)
        }
        ;
        var d = this;
        c.onerror = function(e) {
            var f = "getting from " + d.g.name + " with key " + se(a);
            nu(b, ku(e.target, f))
        }
        ;
        return b
    }
    ;
    var Bu = function(a, b) {
        N.call(this);
        this.g = a;
        this.o = b;
        this.h = new rt(this);
        this.h.U(this.g, "complete", Wa(this.dispatchEvent, this, "complete"));
        this.h.U(this.g, "abort", Wa(this.dispatchEvent, this, "abort"));
        this.h.U(this.g, "error", this.me)
    };
    B(Bu, N);
    l = Bu.prototype;
    l.me = function(a) {
        a.target instanceof Yt ? this.dispatchEvent({
            type: "error",
            target: a.target
        }) : this.dispatchEvent({
            type: "error",
            target: ku(a.target, "in transaction")
        })
    }
    ;
    l.objectStore = function(a) {
        try {
            return new zu(this.g.objectStore(a))
        } catch (b) {
            throw lu(b, "getting object store " + a);
        }
    }
    ;
    l.commit = function(a) {
        if (this.g.commit || !a)
            try {
                this.g.commit()
            } catch (b) {
                throw lu(b, "cannot commit the transaction");
            }
    }
    ;
    l.wait = function() {
        var a = new mu;
        Di(this, "complete", Wa(a.A, a));
        var b = Di(this, "abort", function() {
            Mi(c);
            nu(a, new Yt(eu,"waiting for transaction to complete"))
        });
        var c = Di(this, "error", function(e) {
            Mi(b);
            nu(a, e.target)
        });
        var d = this.o;
        return vu(a, function() {
            return d
        })
    }
    ;
    l.abort = function() {
        this.g.abort()
    }
    ;
    l.R = function() {
        Bu.Ca.R.call(this);
        this.h.W()
    }
    ;
    var Cu = function() {
        var a = null.Xg
          , b = ["MediaSourceVideoChunk"];
        try {
            var c = a.g.transaction(b, "readwrite");
            return new Bu(c,a)
        } catch (d) {
            throw lu(d, "creating transaction");
        }
    };
    var Du = {
        Qg: "videoId",
        cg: "itag",
        Ag: "source",
        Bg: "startIndex"
    }
      , Eu = function(a) {
        var b = Object.keys(Du).sort().map(function(d) {
            return a[Du[d]]
        }).join(",")
          , c = new Vt;
        c.l(b);
        return wb(c.H())
    }
      , Fu = function(a, b) {
        var c = Cu().objectStore("MediaSourceVideoChunk");
        return Promise.resolve(c.get(a)).then(function(d) {
            if (!d)
                return K(J.C(), "cenf", "1"),
                null;
            if (d.lmt !== b)
                return K(J.C(), "cdl", "1"),
                c.remove(a).then(null, function(e) {
                    K(J.C(), "crdlvf", e.message)
                }),
                null;
            K(J.C(), "cefml", "1");
            return {
                endIndex: d.endIndex,
                isLastVideoChunk: d.isLastVideoChunk,
                video: d.video
            }
        }, function(d) {
            K(J.C(), "cgvf", d.message)
        })
    };
    var Gu = function(a) {
        N.call(this);
        this.D = new Q(a);
        this.B = this.g = this.o = this.h = 0;
        tf(this, function() {
            uf(null)
        });
        this.A = null
    };
    t(Gu, N);
    var Iu = function(a) {
        Aa(function(b) {
            if (1 == b.g)
                return 2 === a.g && (a.g = 1),
                ta(b, Hu(a), 4);
            var c = 3 < a.B;
            if (c && null !== a.A) {
                var d = $s({
                    code: 0 < a.o ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                    message: 'Response code "' + a.A + '" with ' + a.h + " bytes requested and " + a.o + " bytes loaded"
                });
                a.dispatchEvent(d)
            }
            a.o < a.h && 3 !== a.g && !c ? b.g = 1 : (3 !== a.g && (a.g = 0),
            b.g = 0)
        })
    }
      , Hu = function(a) {
        var b;
        return Aa(function(c) {
            switch (c.g) {
            case 1:
                b = a.o + "-" + (a.h - 1);
                Vr(a.D, "range", b);
                c.g = 2;
                break;
            case 3:
                return c.return(Ju(a));
            case 2:
                return c.o = 4,
                ta(c, Ku(a), 6);
            case 6:
                c.g = 0;
                c.o = 0;
                break;
            case 4:
                c.o = 0,
                c.l = null,
                a.B++,
                c.g = 0
            }
        })
    }
      , Ju = function(a) {
        var b;
        return Aa(function(c) {
            switch (c.g) {
            case 1:
                var d = new Mt(a.D);
                var e = Nt(d, "id");
                var f = Nt(d, "itag")
                  , g = Nt(d, "source")
                  , h = Nt(d, "lmt");
                (d = d.g.l.get("range")) ? (d = d.split("-")[0],
                d = !d || isNaN(d) ? null : parseInt(d, 10)) : d = null;
                var k = [];
                e ? f ? g ? h ? null === d && k.push("startIndex") : k.push("lmt") : k.push("source") : k.push("itag") : k.push("videoId");
                0 < k.length ? (K(J.C(), "civp", k.join("-")),
                e = null) : e = {
                    videoId: e,
                    itag: f,
                    source: g,
                    lmt: h,
                    startIndex: d + 0
                };
                e ? (f = Eu(e),
                e = Fu(f, e.lmt)) : e = Promise.resolve(null);
                return ta(c, e, 2);
            case 2:
                if (b = c.H) {
                    b.isLastVideoChunk && (a.g = 3);
                    Lu(a, b.video, 0);
                    c.g = 0;
                    break
                }
                c.o = 4;
                return ta(c, Ku(a), 6);
            case 6:
                c.g = 0;
                c.o = 0;
                break;
            case 4:
                c.o = 0,
                c.l = null,
                a.B++,
                c.g = 0
            }
        })
    }
      , Ku = function(a) {
        return new Promise(function(b, c) {
            var d = new XMLHttpRequest
              , e = 0
              , f = a.h - a.o;
            d.addEventListener("load", function() {
                Sg("lvlcl");
                var g = d.response;
                g.byteLength < f && (a.g = 3);
                g = Lu(a, g, e);
                e += g;
                b()
            });
            d.addEventListener("timeout", function() {
                Sg("lvlct");
                a.A = d.status;
                c()
            });
            d.addEventListener("error", function() {
                Sg("lvlce");
                a.A = d.status;
                c()
            });
            d.addEventListener("progress", function() {
                var g = Lu(a, d.response, e);
                e += g
            });
            d.responseType = "arraybuffer";
            d.open("get", a.D.toString());
            d.send(null)
        }
        )
    }
      , Lu = function(a, b, c) {
        if (null === b)
            return 0;
        b = b.slice(c);
        a.o += b.byteLength;
        a.dispatchEvent({
            type: "progress",
            ae: b
        });
        return b.byteLength
    };
    Gu.prototype.R = function() {
        N.prototype.R.call(this)
    }
    ;
    function Mu() {
        return !!window.MediaSource
    }
    function Nu(a) {
        var b = [43, 44, 45].includes(a);
        return hh(hi) && b && Jd ? !1 : ws[a] ? (a = Zs(a),
        !!a && Mu() && MediaSource.isTypeSupported(a)) : !1
    }
    ;var Ou = function() {};
    Ou.prototype.g = function(a, b, c) {
        return 0 === c ? 1E6 : 5E3 > b - a ? 3E5 : 0
    }
    ;
    var Pu = function(a, b, c, d) {
        this.url = a;
        this.mimeType = b;
        this.g = c;
        this.h = void 0 === d ? null : d
    };
    var Su = function(a) {
        N.call(this);
        var b = this;
        this.g = a;
        this.B = this.g.map(function(c) {
            return us(Gu, c.url)
        });
        this.h = us(MediaSource);
        this.o = [];
        this.D = window.URL.createObjectURL(this.h);
        this.I = 0;
        this.G = !1;
        this.h.addEventListener("sourceopen", function() {
            return Qu(b)
        });
        this.K = Ru(this);
        this.A = 0
    };
    t(Su, N);
    var Ru = function(a) {
        for (var b = [], c = 0; c < a.g.length; ++c)
            b.push(new Ou);
        return b
    }
      , Qu = function(a) {
        for (var b = {}, c = 0; c < a.g.length; b = {
            zb: b.zb,
            ob: b.ob
        },
        ++c)
            b.zb = a.h.addSourceBuffer(a.g[c].mimeType),
            b.ob = a.B[c],
            b.ob.U("progress", function(d) {
                return function(e) {
                    var f = d.ob;
                    e = e.ae;
                    0 !== e.byteLength && d.zb.appendBuffer(e);
                    3 === f.g && (a.I++,
                    a.I === a.o.length && Tu(a))
                }
            }(b)),
            b.ob.U("media_source_error", function(d) {
                a.dispatchEvent(d)
            }),
            a.o.push(b.zb);
        a.G = !0;
        Uu(a)
    }
      , Tu = function(a) {
        Promise.all(a.o.map(function(b) {
            return new Promise(function(c) {
                b.updating ? b.addEventListener("updateend", function() {
                    c()
                }) : c()
            }
            )
        })).then(function() {
            return a.h.endOfStream()
        })
    }
      , Uu = function(a) {
        if (a.G)
            for (var b = 0; b < a.g.length; ++b) {
                var c = a.B[b]
                  , d = a.o[b];
                d = 0 === d.buffered.length ? 0 : 1E3 * d.buffered.end(0);
                d = a.K[b].g(a.A, d, c.h);
                0 !== d && (1 === c.g ? (c.h += d,
                c.g = 2) : 0 === c.g && (c.h += d,
                c.g = 1,
                Iu(c)))
            }
    };
    var Wu = function(a, b, c, d, e) {
        H.call(this);
        this.B = a;
        this.K = new Q(b.url);
        this.h = c;
        this.o = e;
        this.G = b.g;
        this.va = d;
        (this.M = b.h) || this.K.l.remove("alr");
        K(J.C(), "sl_dv" + this.o, (null != this.M).toString());
        this.N = !this.M;
        this.ea = 0;
        this.g = new XMLHttpRequest;
        this.P = this.L = this.fa = this.D = this.l = 0;
        this.$ = .1;
        this.A = [];
        this.I = !1;
        this.T = this.X = this.V = null;
        this.Z = !1;
        Vu(this)
    };
    t(Wu, H);
    var Xu = function(a, b) {
        b = $s({
            code: 1 < a.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
            message: b
        });
        a.B.dispatchEvent(b)
    }
      , Vu = function(a) {
        a.V = function() {
            Yu(a);
            if (a.N) {
                var b = a.g.responseText;
                a.I = !b || b.length < a.G;
                a.L = 0;
                Sg("sl_cc" + a.o + "_" + a.l);
                a.D++;
                Zu(a)
            }
        }
        ;
        a.X = function() {
            return Yu(a)
        }
        ;
        a.T = function() {
            Sg("sl_ec" + a.o + "_" + a.l);
            Xu(a, "Failed to load chunk " + a.l + " for stream " + a.o)
        }
        ;
        a.g.addEventListener("load", a.V);
        a.g.addEventListener("progress", a.X);
        a.g.addEventListener("error", a.T);
        a.h.addEventListener("updateend", function() {
            a.h.buffered.length && (a.fa = a.h.buffered.end(0),
            a.I && !a.h.updating && a.l === a.D && (Sg("sl_lc" + a.o),
            a.va()));
            !a.Z && 1 < a.B.buffered.length && (K(J.C(), "dbr", "1"),
            a.Z = !0)
        });
        a.h.addEventListener("update", function() {
            a.A.length && !a.h.updating && a.h.appendBuffer(a.A.shift())
        });
        a.h.addEventListener("error", function() {
            Sg("msb_err" + a.o);
            var b = $s({
                code: MediaError.MEDIA_ERR_DECODE,
                message: "Error on SourceBuffer " + a.o
            });
            a.B.dispatchEvent(b)
        });
        $u(a)
    }
      , Yu = function(a) {
        if (400 <= a.g.status)
            Xu(a, 'Response code "' + a.g.status + '" on loading chunk ' + a.l + " for stream " + a.o);
        else {
            if (!a.N) {
                var b = a.g.getResponseHeader("content-type");
                if (b && 0 <= b.indexOf("text/plain")) {
                    a.g.readyState === XMLHttpRequest.DONE && (a.K = new Q(a.g.response),
                    a.l = 0,
                    a.D = 0,
                    a.ea++,
                    $u(a));
                    return
                }
                a.N = !0;
                Sg("sl_redc" + a.o);
                K(J.C(), "sl_tr" + a.o, a.ea.toString())
            }
            a.K.l.remove("alr");
            if (a.g.readyState === XMLHttpRequest.LOADING || a.g.readyState === XMLHttpRequest.DONE) {
                b = a.L;
                for (var c = a.g.response, d = new Uint8Array(c.length - b), e = 0; e < d.length; e++)
                    d[e] = c.charCodeAt(e + b) & 255;
                b = d.buffer;
                a.L = a.g.response.length;
                a.P += b.byteLength;
                0 < b.byteLength && (a.h.updating || a.A.length ? a.A.push(b) : a.h.appendBuffer(b))
            }
        }
    }
      , Zu = function(a) {
        var b = at;
        -1 != b && b < a.P + a.G ? (a.B.pause(),
        at = -1,
        b = !1) : (b = a.D === a.l && !a.h.updating && !a.A.length,
        b = !a.I && b && a.B.currentTime >= a.$);
        b && (a.$ = a.fa + .1,
        $u(a))
    }
      , $u = function(a) {
        Sg("sl_rc" + a.o + "-" + a.l);
        var b = a.l * a.G;
        b = Vr(a.K, "range", b + "-" + (b + a.G - 1)).toString();
        a.g.open("get", b);
        a.g.overrideMimeType("text/plain; charset=x-user-defined");
        a.g.send(null);
        a.l++
    };
    Wu.prototype.R = function() {
        this.g.removeEventListener("load", this.V);
        this.g.removeEventListener("progress", this.X);
        this.g.removeEventListener("error", this.T);
        Mi(null);
        Mi(null);
        H.prototype.R.call(this)
    }
    ;
    var bv = function(a, b) {
        H.call(this);
        var c = this;
        this.B = a;
        this.G = b;
        this.h = new MediaSource;
        this.D = [];
        this.l = [];
        this.g = this.o = null;
        this.A = !1;
        this.I = function() {
            return av(c)
        }
        ;
        this.h.addEventListener("sourceopen", this.I)
    };
    t(bv, H);
    var cv = function(a) {
        if (a.g)
            return a.g;
        a.g = window.URL.createObjectURL(a.h);
        return a.g
    }
      , dv = function(a) {
        a.o && a.B.removeEventListener("timeupdate", a.o)
    }
      , av = function(a) {
        Sg("msmsw_oso");
        a.o = function() {
            if (!a.A)
                for (var e = r(a.l), f = e.next(); !f.done; f = e.next())
                    Zu(f.value)
        }
        ;
        a.B.addEventListener("timeupdate", a.o);
        for (var b = 0; b < a.G.length; b++) {
            var c = a.G[b];
            K(J.C(), "msmsw_mime" + b, c.mimeType);
            K(J.C(), "msmsw_cs" + b, c.mimeType);
            var d = a.h.addSourceBuffer(c.mimeType);
            d ? (a.D.push(d),
            c = us(Wu, a.B, c, d, function() {
                a: if (!a.A) {
                    for (var e = r(a.l), f = e.next(); !f.done; f = e.next())
                        if (f = f.value,
                        !f.I || f.h.updating || f.A.length)
                            break a;
                    a.h.endOfStream();
                    a.A = !0;
                    dv(a)
                }
            }, b),
            a.l.push(c)) : Sg("msmsw_sbf" + b)
        }
        K(J.C(), "msmsw_ns", a.D.length.toString())
    };
    bv.prototype.R = function() {
        this.g && window.URL.revokeObjectURL(this.g);
        for (var a = r(this.l), b = a.next(); !b.done; b = a.next())
            b.value.W();
        dv(this);
        this.h.removeEventListener("sourceopen", this.I);
        H.prototype.R.call(this)
    }
    ;
    var ev = /\/pagead\/conversion|\/pagead\/adview|\/pagead\/gen_204|\/activeview?|csi.gstatic.com\/csi|google.com\/pagead\/xsul|google.com\/ads\/measurement\/l|googleads.g.doubleclick.net\/pagead\/ide_cookie|googleads.g.doubleclick.net\/xbbe\/pixel/
      , fv = /outstream.min.js/
      , gv = /outstream.min.css/
      , hv = /fonts.gstatic.com/
      , iv = /googlevideo.com\/videoplayback|c.2mdn.net\/videoplayback|gcdn.2mdn.net\/videoplayback/
      , jv = /custom.elements.min.js/;
    function kv(a, b) {
        var c = 0
          , d = 0
          , e = 0
          , f = 0
          , g = 0
          , h = 0
          , k = 0
          , n = !1
          , m = !1;
        if ("function" === typeof La("performance.getEntriesByType", v) && "transferSize"in v.PerformanceResourceTiming.prototype) {
            var u = v.performance.getEntriesByType("resource");
            u = r(u);
            for (var p = u.next(); !p.done; p = u.next())
                p = p.value,
                ev.test(p.name) || (f += 1,
                p.transferSize ? (c += p.transferSize,
                p.encodedBodySize && p.transferSize < p.encodedBodySize && (h += 1,
                e += p.encodedBodySize,
                fv.test(p.name) && (n = !0),
                gv.test(p.name) && (m = !0)),
                iv.test(p.name) && (d += p.transferSize)) : 0 == p.transferSize && 0 == p.encodedBodySize ? jv.test(p.name) ? c += 6686 : hv.test(p.name) || (k += 1,
                Rg(J.C(), {
                    event_name: "unmeasurable_asset",
                    resource_name: p.name,
                    encoded_body_size: p.encodedBodySize,
                    transfer_size: p.transferSize
                })) : (g += 1,
                e += p.encodedBodySize,
                fv.test(p.name) && (n = !0),
                gv.test(p.name) && (m = !0)));
            u = 0;
            if (a.duration) {
                for (p = 0; p < a.buffered.length; p++)
                    u += a.buffered.end(p) - a.buffered.start(p);
                u = Math.min(u, a.duration)
            }
            Rg(J.C(), {
                event_name: b,
                asset_bytes: c,
                video_bytes: d,
                cached_data_bytes: e,
                js_cached: n,
                css_cached: m,
                num_assets: f,
                num_assets_cached: g,
                num_assets_cache_validated: h,
                num_assets_unmeasurable: k,
                video_played_seconds: a.currentTime.toFixed(2),
                video_muted: a.muted,
                video_seconds_loaded: u.toFixed(2)
            })
        } else
            K(J.C(), "error", "reporting_timing_not_supported")
    }
    ;function lv(a) {
        var b = J.C()
          , c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
        c ? (a = a.currentTime,
        K(b, "vqdf", String(c.droppedVideoFrames)),
        K(b, "vqtf", String(c.totalVideoFrames)),
        K(b, "vqfr", String(Math.round(c.totalVideoFrames / a)))) : K(b, "vqu", "1")
    }
    ;var mv = function() {};
    mv.prototype.toString = function() {
        return "video_mute"
    }
    ;
    var nv = new mv;
    var ov = function(a) {
        H.call(this);
        this.A = 1;
        this.l = [];
        this.o = 0;
        this.g = [];
        this.h = {};
        this.B = !!a
    };
    B(ov, H);
    ov.prototype.G = function(a) {
        var b = this.g[a];
        b && (b = this.h[b],
        0 != this.o ? (this.l.push(a),
        this.g[a + 1] = Ma) : (b && nb(b, a),
        delete this.g[a],
        delete this.g[a + 1],
        delete this.g[a + 2]))
    }
    ;
    ov.prototype.D = function(a, b) {
        var c = this.h[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
                d[e - 1] = arguments[e];
            if (this.B)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    pv(this.g[g + 1], this.g[g + 2], d)
                }
            else {
                this.o++;
                try {
                    for (e = 0,
                    f = c.length; e < f; e++)
                        g = c[e],
                        this.g[g + 1].apply(this.g[g + 2], d)
                } finally {
                    if (this.o--,
                    0 < this.l.length && 0 == this.o)
                        for (; c = this.l.pop(); )
                            this.G(c)
                }
            }
        }
    }
    ;
    var pv = function(a, b, c) {
        cj(function() {
            a.apply(b, c)
        })
    };
    ov.prototype.R = function() {
        ov.Ca.R.call(this);
        this.g.length = 0;
        this.h = {};
        this.l.length = 0
    }
    ;
    var qv = function(a) {
        H.call(this);
        this.g = new ov(a);
        vf(this, this.g)
    };
    B(qv, H);
    var rv = function(a, b) {
        a = a.g;
        var c = nv.toString()
          , d = a.h[c];
        d || (d = a.h[c] = []);
        var e = a.A;
        a.g[e] = c;
        a.g[e + 1] = b;
        a.g[e + 2] = void 0;
        a.A = e + 3;
        d.push(e)
    };
    var tv = function() {
        H.call(this);
        this.g = new rt(this);
        vf(this, this.g)
    };
    t(tv, H);
    var uv = function(a, b) {
        tv.call(this, b);
        rv(b, function(c) {
            c ? a.show() : a.g.mode = "hidden"
        })
    };
    t(uv, tv);
    var vv = function() {
        N.call(this);
        this.h = new rt(this);
        vf(this, this.h)
    };
    t(vv, N);
    var xv = function(a, b, c) {
        c = void 0 === c ? !0 : c;
        vv.call(this);
        a.setAttribute("crossorigin", "anonymous");
        var d = Ve("TRACK");
        d.setAttribute("kind", "captions");
        d.setAttribute("src", b);
        d.setAttribute("default", "");
        a.appendChild(d);
        this.g = a.textTracks[0];
        wv(this);
        c ? this.show() : this.g.mode = "hidden"
    };
    t(xv, vv);
    var wv = function(a) {
        var b = a.g;
        b.addEventListener("cuechange", function() {
            for (var c = b.cues, d = 0; d < c.length; d++) {
                var e = c[d];
                e.align = "center";
                e.position = "auto"
            }
        }, {
            once: !0
        })
    };
    xv.prototype.show = function() {
        this.g.mode = "showing"
    }
    ;
    function yv(a, b) {
        if ("undefined" !== typeof ReportingObserver) {
            var c = function(e) {
                e = r(e);
                for (var f = e.next(); !f.done; f = e.next())
                    f = f.value,
                    a(f) && b(f)
            }
              , d = new ReportingObserver(c,{
                buffered: !0
            });
            v.addEventListener("unload", function() {
                c(d.takeRecords(), d);
                d.disconnect()
            });
            d.observe()
        }
    }
    function zv(a) {
        a = void 0 === a ? null : a;
        yv(function(b) {
            return b.body && "HeavyAdIntervention" === b.body.id
        }, function(b) {
            var c = b.body
              , d = J.C();
            K(d, "ham", c.message);
            c.message.includes("Ad was removed because its CPU usage exceeded the limit") ? K(d, "hacpu", "true") : c.message.includes("Ad was removed because its network usage exceeded the limit") && K(d, "habytes", "true");
            a && a(b)
        })
    }
    ;var Av = function(a) {
        N.call(this);
        this.g = a;
        this.A = this.B = !1;
        this.D = this.G = 0;
        this.h = new vj(1E3);
        vf(this, this.h);
        Ei(this.h, "tick", this.I, !1, this);
        Ei(this.g, "pause", this.o, !1, this);
        Ei(this.g, "playing", this.o, !1, this);
        Ei(this.g, "ended", this.o, !1, this);
        Ei(this.g, "timeupdate", this.o, !1, this)
    };
    t(Av, N);
    Av.prototype.o = function(a) {
        switch (a.type) {
        case "playing":
            Bv(this);
            break;
        case "pause":
        case "ended":
            this.h.Wa && this.h.stop();
            break;
        case "timeupdate":
            !this.B && 0 < this.g.currentTime && (this.B = !0,
            Bv(this))
        }
    }
    ;
    var Bv = function(a) {
        !a.h.Wa && a.B && (a.G = 1E3 * a.g.currentTime,
        a.D = z(),
        a.A = !1,
        a.h.start())
    };
    Av.prototype.I = function() {
        var a = z()
          , b = 1E3 * this.g.currentTime;
        b - this.G < .5 * (a - this.D) ? this.A || (this.A = !0,
        this.dispatchEvent("playbackStalled")) : this.A = !1;
        this.G = b;
        this.D = a
    }
    ;
    var Cv = "autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay".split(" ")
      , Dv = "autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen".split(" ")
      , Ev = {
        childList: !0
    }
      , Fv = HTMLElement;
    /^\s*class\s*\{\s*\}\s*$/.test(function() {}
    .toString()) || (Fv = function() {
        return v.Reflect.construct(HTMLElement, [], this.__proto__.constructor)
    }
    ,
    Object.setPrototypeOf(Fv, HTMLElement),
    Object.setPrototypeOf(Fv.prototype, HTMLElement.prototype));
    var Gv = function(a) {
        if (null !== a) {
            a = r(a);
            for (var b = a.next(); !b.done; b = a.next())
                if (b = b.value,
                b.nodeName === "TRACK".toString())
                    return b
        }
        return null
    }
      , Hv = function(a, b) {
        this.code = a;
        this.message = void 0 === b ? "" : b
    }
      , Iv = function(a) {
        Hv.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, void 0 === a ? "" : a)
    };
    t(Iv, Hv);
    var Mv = function() {
        var a = Fv.call(this) || this;
        K(J.C(), "ulv", "1");
        a.h = null;
        a.J = "";
        a.H = null;
        a.g = Ve("VIDEO");
        Jv(a);
        a.G = new qv;
        Kv(a);
        a.A = null;
        Lv(a);
        a.attachShadow({
            mode: "open"
        });
        a.shadowRoot.appendChild(a.g);
        zv(function() {
            K(J.C(), "has", a.src || a.l);
            K(J.C(), "hat", String(a.g.currentTime))
        });
        a.B = !1;
        a.D = !1;
        return a
    };
    t(Mv, Fv);
    Mv.prototype.attributeChangedCallback = function(a, b, c) {
        switch (a) {
        case "src":
            Nv(this, c);
            break;
        case "demuxedaudiosrc":
        case "demuxedvideosrc":
            Ov(this);
            break;
        case "muted":
            this.g[a] = "" === c ? !0 : !!c;
            Pv(this, a, c);
            break;
        default:
            Pv(this, a, c)
        }
    }
    ;
    var Pv = function(a, b, c) {
        c !== a.g.getAttribute(b) && (null === c ? a.g.removeAttribute(b) : a.g.setAttribute(b, c))
    }
      , Qv = function(a) {
        a.h && (a.h.W(),
        a.h = null)
    }
      , Rv = function(a, b) {
        a.H = b;
        a.g.dispatchEvent(new Event("error"))
    }
      , Jv = function(a) {
        Sv(a);
        Tv(a);
        a.g.addEventListener("loadedmetadata", function() {
            var b = a.g.videoWidth
              , c = a.g.videoHeight
              , d = cg(a)
              , e = d.width
              , f = d.height;
            0 < b && 0 < c && 0 < e && 0 < f && (d = d.width / d.height,
            b /= c,
            .97 <= Math.min(b, d) / Math.max(b, d) ? Vf(a.g, {
                "object-fit": "cover"
            }) : Vf(a.g, {
                "object-fit": "contain"
            }))
        });
        a.g.addEventListener("play", function() {
            a.D || (kv(a.g, "first_play"),
            a.D = !0)
        });
        a.g.addEventListener("pause", function() {
            a.B || (kv(a.g, "first_pause"),
            lv(a.g),
            a.B = !0)
        });
        Ei(v, "unload", function() {
            a.B || (kv(a.g, "first_pause"),
            lv(a.g),
            a.B = !0)
        });
        a.g.addEventListener("stalled", function() {
            K(J.C(), "ves", "1")
        });
        (new Av(a.g)).U("playbackStalled", function() {
            return K(J.C(), "pbs", "1")
        });
        a.g.addEventListener("media_source_error", function(b) {
            Qv(a);
            b = b.detail;
            Rv(a, new Hv(b.code,b.message))
        });
        Uv(a)
    }
      , Lv = function(a) {
        var b = Gv(a.childNodes);
        b && Vv(a, b);
        null === a.A && Wv(a)
    }
      , Wv = function(a) {
        if (v.MutationObserver) {
            var b = new MutationObserver(function(c) {
                c = r(c);
                for (var d = c.next(); !d.done; d = c.next())
                    if (d = d.value,
                    "childList" === d.type && (d = Gv(d.addedNodes))) {
                        Vv(a, d);
                        b.disconnect();
                        break
                    }
            }
            );
            b.observe(a, Ev)
        }
    }
      , Kv = function(a) {
        a.g.addEventListener("volumechange", function() {
            a.G.g.D(nv.toString(), a.g.muted)
        })
    }
      , Vv = function(a, b) {
        if (null === a.A && b.hasAttribute("src")) {
            var c = b.getAttribute("src");
            a.A = new xv(a.g,c,b.hasAttribute("default"));
            new uv(a.A,a.G);
            c.includes("kind=asr") && K(J.C(), "act", "1")
        }
    }
      , Nv = function(a, b) {
        if (b !== a.J) {
            var c = (a.J = b) ? Ys(b) : null
              , d = !!c && Nu(c);
            K(J.C(), "umsem", d ? "1" : "0");
            if (d)
                if (b = us(Pu, b, Zs(c), 1E3 * vs[c], null),
                hh(ai)) {
                    var e = us(Su, [b]);
                    e.U("media_source_error", function(f) {
                        f = $s(f.detail);
                        a.g.dispatchEvent(f)
                    });
                    a.g.addEventListener("timeupdate", function() {
                        e.A = 1E3 * a.g.currentTime;
                        Uu(e)
                    });
                    a.g.src = e.D
                } else
                    a.h = us(bv, a.g, [b]),
                    a.g.src = cv(a.h);
            else
                Qv(a),
                a.g.src = b;
            a.g.load()
        }
    }
      , Ov = function(a) {
        a.src && Rv(a, new Hv(MediaError.MEDIA_ERR_ABORTED,"Setting demuxed src after src is already set."));
        if (!a.o && !a.l && a.h)
            Qv(a),
            a.g.src = "about:blank",
            a.g.load();
        else if (a.o && a.l) {
            var b = Ys(a.o)
              , c = Ys(a.l);
            if (c && Nu(c))
                if (b && Nu(b)) {
                    var d = !!c && Nu(c) && !!b && Nu(b);
                    K(J.C(), "umsed", d ? "1" : "0");
                    if (hh(Yh)) {
                        c = us(Pu, a.l, Zs(c), -1, null);
                        b = us(Pu, a.o, Zs(b), -1, null);
                        var e = us(Su, [c, b]);
                        e.U("media_source_error", function(f) {
                            f = $s(f.detail);
                            a.g.dispatchEvent(f)
                        });
                        a.g.addEventListener("timeupdate", function() {
                            e.A = 1E3 * a.g.currentTime;
                            Uu(e)
                        });
                        a.g.src = e.D
                    } else
                        d = 1E3 * vs[b],
                        c = us(Pu, a.l, Zs(c), 1E3 * vs[c], null),
                        b = us(Pu, a.o, Zs(b), d, null),
                        a.h = us(bv, a.g, [c, b]),
                        a.g.src = cv(a.h);
                    a.g.load()
                } else
                    Rv(a, new Iv('Audio itag "' + b + '" not supported.'));
            else
                Rv(a, new Iv('Video itag "' + c + '" not supported.'))
        }
    }
      , Sv = function(a) {
        for (var b = {}, c = r(Dv), d = c.next(); !d.done; b = {
            za: b.za,
            Zb: b.Zb
        },
        d = c.next())
            b.za = d.value,
            b.za in a.g && ("function" === typeof a.g[b.za] ? (b.Zb = a.g[b.za].bind(a.g),
            Object.defineProperty(a, b.za, {
                set: function(e) {
                    return function(f) {
                        a.g[e.za] = f
                    }
                }(b),
                get: function(e) {
                    return function() {
                        return e.Zb
                    }
                }(b)
            })) : Object.defineProperty(a, b.za, {
                set: function(e) {
                    return function(f) {
                        a.g[e.za] = f
                    }
                }(b),
                get: function(e) {
                    return function() {
                        return a.g[e.za]
                    }
                }(b)
            }))
    }
      , Tv = function(a) {
        Object.defineProperty(a, "error", {
            set: function() {},
            get: function() {
                return a.g.error ? a.g.error : a.H
            }
        })
    }
      , Uv = function(a) {
        a.g.style.width = ag();
        a.g.style.height = ag()
    };
    da.Object.defineProperties(Mv.prototype, {
        o: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedaudiosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedaudiosrc")
            }
        },
        l: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedvideosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedvideosrc")
            }
        },
        src: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("src", a)
            },
            get: function() {
                return this.getAttribute("src")
            }
        }
    });
    da.Object.defineProperties(Mv, {
        observedAttributes: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Cv
            }
        }
    });
    v.customElements && (v.customElements.get("lima-video") || v.customElements.define("lima-video", Mv));
    var Xv = function() {
        throw Error("Do not instantiate directly");
    };
    Xv.prototype.g = null;
    Xv.prototype.getContent = function() {
        return this.content
    }
    ;
    Xv.prototype.toString = function() {
        return this.content
    }
    ;
    var Yv = function() {
        Xv.call(this)
    };
    B(Yv, Xv);
    var Zv = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.g = d);
            return c
        }
    }(Yv);
    var $v = {
        rgb: !0,
        rgba: !0,
        alpha: !0,
        rect: !0,
        image: !0,
        "linear-gradient": !0,
        "radial-gradient": !0,
        "repeating-linear-gradient": !0,
        "repeating-radial-gradient": !0,
        "cubic-bezier": !0,
        matrix: !0,
        perspective: !0,
        rotate: !0,
        rotate3d: !0,
        rotatex: !0,
        rotatey: !0,
        steps: !0,
        rotatez: !0,
        scale: !0,
        scale3d: !0,
        scalex: !0,
        scaley: !0,
        scalez: !0,
        skew: !0,
        skewx: !0,
        skewy: !0,
        translate: !0,
        translate3d: !0,
        translatex: !0,
        translatey: !0,
        translatez: !0
    }
      , aw = function(a) {
        a = fc(a);
        if ("" == a)
            return null;
        var b = String(a.substr(0, 4)).toLowerCase();
        if (0 == ("url(" < b ? -1 : "url(" == b ? 0 : 1))
            return null;
        if (0 < a.indexOf("(")) {
            if (/"|'/.test(a))
                return null;
            b = /([\-\w]+)\(/g;
            for (var c; c = b.exec(a); )
                if (!(c[1].toLowerCase()in $v))
                    return null
        }
        return a
    };
    function bw(a) {
        var b = v.CSSStyleDeclaration;
        return b && b.prototype && b.prototype[a] || null
    }
    var cw = bw("getPropertyValue")
      , dw = bw("setProperty");
    function ew(a, b, c, d) {
        if (a)
            return a.apply(b, d);
        if (od && 10 > document.documentMode) {
            if (!b[c].call)
                throw Error("IE Clobbering detected");
        } else if ("function" != typeof b[c])
            throw Error("Clobbering detected");
        return b[c].apply(b, d)
    }
    ;var fw = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    }
      , hw = function(a) {
        if (!a)
            return Cc;
        var b = document.createElement("div").style
          , c = gw(a);
        C(c, function(d) {
            var e = sd && d in fw ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            0 != e.lastIndexOf("--", 0) && 0 != e.lastIndexOf("var", 0) && (d = ew(cw, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [d]) || "",
            d = aw(d),
            null != d && ew(dw, b, b.setProperty ? "setProperty" : "setAttribute", [e, d]))
        });
        return new Bc(b.cssText || "",Ac)
    }
      , gw = function(a) {
        Oa(a) ? a = rb(a) : (a = Ib(a),
        nb(a, "cssText"));
        return a
    };
    var iw = function() {
        if (window.MutationObserver) {
            var a = [];
            (new MutationObserver(function() {
                a.forEach(function(b) {
                    return b()
                });
                a = []
            }
            )).observe(document.createTextNode(""), {
                characterData: !0
            })
        }
    };
    "function" === typeof Promise && -1 < String(Promise).indexOf("[native code]") || iw();
    var jw = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var kw = function(a) {
        this.g = a
    }
      , lw = function(a, b) {
        return Kb(a.g, b) && (a = a.g[b],
        "boolean" === typeof a) ? a : !1
    };
    var V = function() {
        this.D = "always";
        this.L = 4;
        this.B = 1;
        this.g = 0;
        this.J = !0;
        this.l = "en";
        this.K = !1;
        this.P = this.N = "";
        this.A = null;
        this.V = this.M = -1;
        this.T = this.I = this.H = "";
        this.G = !1;
        this.h = !0;
        this.X = ts();
        try {
            this.$ = Zk(void 0)[0]
        } catch (a) {}
    }
      , mw = function(a) {
        a = Wc(a);
        ec(a) || (a = a.substring(0, 20));
        return a
    };
    l = V.prototype;
    l.setCompanionBackfill = function(a) {
        this.D = a
    }
    ;
    l.getCompanionBackfill = function() {
        return this.D
    }
    ;
    l.setNumRedirects = function(a) {
        this.L = a
    }
    ;
    l.getNumRedirects = function() {
        return this.L
    }
    ;
    l.setPpid = function(a) {
        this.Z = a
    }
    ;
    l.getPpid = function() {
        return this.Z
    }
    ;
    l.setVpaidAllowed = function(a) {
        "boolean" === typeof a && (this.B = a ? 1 : 0)
    }
    ;
    l.setVpaidMode = function(a) {
        this.B = a
    }
    ;
    l.getVpaidMode = function() {
        return this.B
    }
    ;
    l.setAutoPlayAdBreaks = function(a) {
        this.J = a
    }
    ;
    l.isAutoPlayAdBreaks = function() {
        return this.J
    }
    ;
    l.setIsVpaidAdapter = function(a) {
        this.K = a
    }
    ;
    l.ub = function() {
        return this.K
    }
    ;
    l.setLocale = function(a) {
        if (a = Ct(a))
            this.l = a
    }
    ;
    l.je = function() {
        return this.l
    }
    ;
    l.setPlayerType = function(a) {
        this.N = mw(a)
    }
    ;
    l.getPlayerType = function() {
        return this.N
    }
    ;
    l.setPlayerVersion = function(a) {
        this.P = mw(a)
    }
    ;
    l.getPlayerVersion = function() {
        return this.P
    }
    ;
    var nw = function(a) {
        if (null == a.A) {
            var b = {};
            var c = (new Q(G().location.href)).l;
            if (Zr(c, "tcnfp"))
                try {
                    b = JSON.parse(c.get("tcnfp"))
                } catch (d) {}
            a.A = new kw(b)
        }
        return a.A
    };
    l = V.prototype;
    l.setPageCorrelator = function(a) {
        this.M = a
    }
    ;
    l.setStreamCorrelator = function(a) {
        this.V = a
    }
    ;
    l.setDisableCustomPlaybackForIOS10Plus = function(a) {
        this.G = a
    }
    ;
    l.getDisableCustomPlaybackForIOS10Plus = function() {
        return this.G
    }
    ;
    l.ye = function() {
        return this.h
    }
    ;
    l.setCookiesEnabled = function(a) {
        null != a && (this.h = a)
    }
    ;
    l.setDisableFlashAds = function() {}
    ;
    l.getDisableFlashAds = function() {
        return !0
    }
    ;
    V.prototype.getDisableFlashAds = V.prototype.getDisableFlashAds;
    V.prototype.setDisableFlashAds = V.prototype.setDisableFlashAds;
    V.prototype.setCookiesEnabled = V.prototype.setCookiesEnabled;
    V.prototype.isCookiesEnabled = V.prototype.ye;
    V.prototype.getDisableCustomPlaybackForIOS10Plus = V.prototype.getDisableCustomPlaybackForIOS10Plus;
    V.prototype.setDisableCustomPlaybackForIOS10Plus = V.prototype.setDisableCustomPlaybackForIOS10Plus;
    V.prototype.setStreamCorrelator = V.prototype.setStreamCorrelator;
    V.prototype.setPageCorrelator = V.prototype.setPageCorrelator;
    V.prototype.getPlayerVersion = V.prototype.getPlayerVersion;
    V.prototype.setPlayerVersion = V.prototype.setPlayerVersion;
    V.prototype.getPlayerType = V.prototype.getPlayerType;
    V.prototype.setPlayerType = V.prototype.setPlayerType;
    V.prototype.getLocale = V.prototype.je;
    V.prototype.setLocale = V.prototype.setLocale;
    V.prototype.isVpaidAdapter = V.prototype.ub;
    V.prototype.setIsVpaidAdapter = V.prototype.setIsVpaidAdapter;
    V.prototype.isAutoPlayAdBreaks = V.prototype.isAutoPlayAdBreaks;
    V.prototype.setAutoPlayAdBreaks = V.prototype.setAutoPlayAdBreaks;
    V.prototype.getVpaidMode = V.prototype.getVpaidMode;
    V.prototype.setVpaidMode = V.prototype.setVpaidMode;
    V.prototype.setVpaidAllowed = V.prototype.setVpaidAllowed;
    V.prototype.getPpid = V.prototype.getPpid;
    V.prototype.setPpid = V.prototype.setPpid;
    V.prototype.getNumRedirects = V.prototype.getNumRedirects;
    V.prototype.setNumRedirects = V.prototype.setNumRedirects;
    V.prototype.getCompanionBackfill = V.prototype.getCompanionBackfill;
    V.prototype.setCompanionBackfill = V.prototype.setCompanionBackfill;
    var W = new V;
    var ow = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , pw = function(a, b) {
        b = void 0 === b ? 500 : b;
        H.call(this);
        this.h = a;
        this.g = null;
        this.o = {};
        this.B = 0;
        this.A = b;
        this.l = null
    };
    t(pw, H);
    pw.prototype.R = function() {
        this.o = {};
        this.l && (Ee(this.h, "message", this.l),
        delete this.l);
        delete this.o;
        delete this.h;
        delete this.g;
        H.prototype.R.call(this)
    }
    ;
    var rw = function(a) {
        return "function" === typeof a.h.__tcfapi || null != qw(a)
    }
      , vw = function(a, b) {
        var c = {
            internalErrorState: 0
        }
          , d = zb(function() {
            return b(c)
        })
          , e = 0;
        -1 !== a.A && (e = setTimeout(function() {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.A));
        tw(a, "addEventListener", function(f) {
            f && (c = f,
            c.internalErrorState = ow(c),
            uw(c) && (0 != c.internalErrorState && (c.tcString = "tcunavailable"),
            tw(a, "removeEventListener", null, c.listenerId),
            e && (clearTimeout(e),
            e = 0),
            d()))
        })
    };
    pw.prototype.addEventListener = function(a) {
        var b = {}
          , c = zb(function() {
            return a(b)
        })
          , d = 0;
        -1 !== this.A && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.A));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f,
            b.internalErrorState = ow(b),
            g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
            g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable",
            b.internalErrorState = 3);
            a(b)
        };
        try {
            tw(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable",
            b.internalErrorState = 3,
            d && (clearTimeout(d),
            d = 0),
            c()
        }
    }
    ;
    pw.prototype.removeEventListener = function(a) {
        a && a.listenerId && tw(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var ww = function(a) {
        var b = void 0 === b ? !1 : b;
        if (uw(a))
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length)
                a = !0;
            else {
                var c = void 0 === c ? "755" : c;
                b: {
                    if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"],
                    void 0 !== b)) {
                        b = b[void 0 === c ? "755" : c];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents,
                (c = !(!b || !b[void 0 === c ? "755" : c])) && a.purposeOneTreatment && "DE" === a.publisherCC ? a = !0 : (c && (a = a.purpose.consents,
                c = !(!a || !a["1"])),
                a = c)) : a = !0
            }
        else
            a = !1;
        return a
    }
      , tw = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.h.__tcfapi)
            a = a.h.__tcfapi,
            a(b, 2, c, d);
        else if (qw(a)) {
            xw(a);
            var e = ++a.B;
            a.o[e] = c;
            a.g && (c = {},
            a.g.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            },
            c), "*"))
        } else
            c({}, !1)
    }
      , qw = function(a) {
        if (a.g)
            return a.g;
        a.g = qf(a.h, "__tcfapiLocator");
        return a.g
    }
      , xw = function(a) {
        a.l || (a.l = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.o[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        De(a.h, "message", a.l))
    }
      , uw = function(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = ow(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
    };
    function yw(a) {
        var b = {};
        (new Q(a)).l.forEach(function(c, d) {
            b[d] = c
        });
        return b
    }
    var zw = function(a) {
        this.ed = a.isGdprLoader || !1;
        this.uspString = a.uspString || "";
        var b = a.gdprApplies;
        this.gdprApplies = "boolean" == typeof b ? b ? "1" : "0" : "number" != typeof b || 1 !== b && 0 !== b ? "string" != typeof b || "1" !== b && "0" !== b ? "" : "1" == b ? "1" : "0" : 1 == b ? "1" : "0";
        this.g = a.tcString || "";
        /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g))
    }
      , Aw = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? {} : b;
        this.g = a;
        this.h = new zw(b)
    }
      , Bw = function(a, b) {
        var c = new Q(a);
        var d = c.g;
        (c = dc(c.h, "googleads.g.doubleclick.net") && At("/pagead/(live/)?ads", d)) || (d = new Et(a),
        c = d.h,
        d = Ft(d, d.g),
        c = !dc(c, ".g.doubleclick.net") && dc(c, "doubleclick.net") && At("/(ad|pfad)[x|i|j]?/", d));
        c || (c = new Q(a),
        d = c.g,
        c = dc(c.h, "doubleclick.net") && At("/gampad/(live/)?ads", d));
        (c = c || "bid.g.doubleclick.net" == (new Q(a)).h) || (c = new Q(a),
        d = c.g,
        c = "ad.doubleclick.net" === c.h && At("/dv3/adv", d));
        c || (c = new Q(a),
        d = c.g,
        "pubads.g.doubleclick.net" === c.h && At("/ondemand/", d));
        return new Aw(yw(a),b)
    }
      , Dw = function(a) {
        if (!W.h || "1" == Cw(a, "ltd"))
            return !1;
        if ("1" !== a.h.gdprApplies)
            return !0;
        var b = a.h.g;
        a = Cw(a, "gdpr_consent");
        b = b && "tcunavailable" != b ? b : "tcunavailable" == b ? a || b : a || "";
        if ("tcunavailable" === b)
            return !1;
        if ((a = Ar(b)) && b) {
            var c = je(a, Sq, 1);
            a = je(a, Mq, 2) || new Mq;
            var d = ee(c, 9, 0)
              , e = ee(c, 4, 0)
              , f = ee(c, 5, 0)
              , g = fe(c, 10)
              , h = fe(c, 11)
              , k = ee(c, 16, "")
              , n = fe(c, 15)
              , m = {
                consents: Br(E(c, 13), nr),
                legitimateInterests: Br(E(c, 14), nr)
            }
              , u = {
                consents: Br(E(c, 17), void 0),
                legitimateInterests: Br(E(c, 18), void 0)
            }
              , p = Br(E(c, 12), or)
              , w = ke(c, Kq, 19);
            c = {};
            w = r(w);
            for (var x = w.next(); !x.done; x = w.next()) {
                x = x.value;
                var A = ee(x, 1, 0);
                c[A] = c[A] || {};
                for (var ma = r(E(x, 3)), lc = ma.next(); !lc.done; lc = ma.next())
                    c[A][lc.value] = ee(x, 2, 0)
            }
            b = {
                tcString: b,
                tcfPolicyVersion: d,
                gdprApplies: !0,
                cmpId: e,
                cmpVersion: f,
                isServiceSpecific: g,
                useNonStandardStacks: h,
                publisherCC: k,
                purposeOneTreatment: n,
                purpose: m,
                vendor: u,
                specialFeatureOptins: p,
                publisher: {
                    restrictions: c,
                    consents: Br(E(a, 1), nr),
                    legitimateInterests: Br(E(a, 2), nr),
                    customPurposes: {
                        consents: Br(E(a, 3)),
                        legitimateInterests: Br(E(a, 4))
                    }
                }
            }
        } else
            b = null;
        return b ? ww(b) : !1
    }
      , Cw = function(a, b) {
        if (a.g.hasOwnProperty(b))
            return a.g[b]
    };
    var Ew = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"]
      , Fw = function() {
        var a = window;
        return a.navigator && a.navigator.userAgentData && "function" === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues(Ew).then(function(b) {
            var c = new Dr;
            c = he(c, 1, b.platform);
            c = he(c, 2, b.platformVersion);
            c = he(c, 3, b.architecture);
            c = he(c, 4, b.model);
            return he(c, 5, b.uaFullVersion)
        }) : null
    };
    var Hw = function() {
        new Aw;
        ts();
        this.deviceId = "";
        this.g = this.referrer = this.location = null;
        Gw(this)
    }
      , Iw = function() {
        Hw.C();
        var a = "h.3.427.1";
        W.ub() && (a += "/vpaid_adapter");
        return a
    }
      , Gw = function(a) {
        var b = Fw();
        b && b.then(function(c) {
            a.g = Td(c.A())
        })
    };
    Na(Hw);
    var Kw = function(a) {
        var b = nw(W);
        if (b && lw(b, "forceCustomPlayback") || W.ub())
            return !0;
        if ((wd || lt()) && a)
            return !1;
        a = a && (wd || lt() || mt(10)) && (W.getDisableCustomPlaybackForIOS10Plus() || hh(Xh));
        return (vd || xd) && !a || ud && (!ud || !kt(jt, 4)) || Jw() ? !0 : !1
    }
      , Lw = function(a) {
        return null == a ? !1 : W.ub() ? !0 : yd || wd || lt() ? nt(a) ? wd || lt() || mt(10) && W.getDisableCustomPlaybackForIOS10Plus() ? !1 : !0 : !0 : ud && (!ud || !kt(jt, 4)) || Jw() ? !0 : !1
    }
      , Mw = function() {
        var a = nw(W);
        return a && lw(a, "disableOnScreenDetection") ? !1 : !cm()
    }
      , Jw = function() {
        return dm() || (Hw.C(),
        !1)
    };
    var Nw = function() {
        this.allowCustom = !0;
        this.creativeType = this.resourceType = "All";
        this.sizeCriteria = "SelectExactMatch";
        this.nearMatchPercent = 90;
        this.adSlotIds = []
    }
      , Ow = {
        IMAGE: "Image",
        FLASH: "Flash",
        ALL: "All"
    };
    y("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.CreativeType", Ow, void 0);
    var Pw = {
        HTML: "Html",
        IFRAME: "IFrame",
        STATIC: "Static",
        ALL: "All"
    };
    y("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.ResourceType", Pw, void 0);
    var Qw = {
        IGNORE: "IgnoreSize",
        SELECT_EXACT_MATCH: "SelectExactMatch",
        SELECT_NEAR_MATCH: "SelectNearMatch"
    };
    y("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.SizeCriteria", Qw, void 0);
    var Rw = !1
      , Sw = function(a) {
        if (a = a.match(/[\d]+/g))
            a.length = 3
    };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (Rw = !0,
            a.description)) {
                Sw(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                Rw = !0;
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"],
        Rw = !(!a || !a.enabledPlugin))) {
            Sw(a.enabledPlugin.description);
            return
        }
        if ("undefined" != typeof ActiveXObject) {
            try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                Rw = !0;
                Sw(b.GetVariable("$version"));
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                Rw = !0;
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                Rw = !0,
                Sw(b.GetVariable("$version"))
            } catch (c) {}
        }
    }
    )();
    var Tw = Rw;
    var Vw = function(a, b) {
        b = void 0 === b ? new Nw : b;
        this.h = a;
        this.g = b ? b : new Nw;
        this.B = Uw(Pw, this.g.resourceType) ? this.g.resourceType : "All";
        this.o = Uw(Ow, this.g.creativeType) ? this.g.creativeType : "All";
        this.H = Uw(Qw, this.g.sizeCriteria) ? this.g.sizeCriteria : "SelectExactMatch";
        this.l = null != this.g.adSlotIds ? this.g.adSlotIds : [];
        this.A = "number" === typeof this.g.nearMatchPercent && 0 < this.g.nearMatchPercent && 100 >= this.g.nearMatchPercent ? this.g.nearMatchPercent : 90
    }
      , Yw = function(a, b) {
        var c = [];
        b.forEach(function(d) {
            a.g.allowCustom && (!ec(d.getContent()) && (isNaN(d.g.sequenceNumber) || isNaN(d.g.mainAdSequenceNumber) || d.g.mainAdSequenceNumber == d.g.sequenceNumber) && Ww(a, d) ? c.push(d) : (d = Xw(a, d),
            null != d && !ec(d.getContent()) && c.push(d)))
        });
        return c
    }
      , Ww = function(a, b) {
        var c;
        if (c = "Flash" != b.getContentType() || Tw) {
            if (c = "All" == a.B || a.B == b.g.resourceType)
                c = b.getContentType(),
                c = null == c ? !0 : "All" == a.o || a.o == c;
            c && (c = b.Zc(),
            c = 0 == a.l.length ? !0 : null != c ? a.l.includes(c) : !1)
        }
        if (c)
            if (b = b.g.size,
            (c = "IgnoreSize" == a.H) || (c = a.h,
            c = c == b ? !0 : c && b ? c.width == b.width && c.height == b.height : !1),
            c)
                a = !0;
            else {
                if (c = "SelectNearMatch" == a.H)
                    c = b.width,
                    b = b.height,
                    c = c > a.h.width || b > a.h.height || c < a.A / 100 * a.h.width || b < a.A / 100 * a.h.height ? !1 : !0;
                a = c
            }
        else
            a = !1;
        return a
    }
      , Xw = function(a, b) {
        b = Zw(b);
        return null == b ? null : b.find(function(c) {
            return Ww(a, c)
        }) || null
    }
      , Uw = function(a, b) {
        return null != b && Lb(a, b)
    };
    var X = {}
      , $w = (X.creativeView = "creativeview",
    X.start = "start",
    X.midpoint = "midpoint",
    X.firstQuartile = "firstquartile",
    X.thirdQuartile = "thirdquartile",
    X.complete = "complete",
    X.mute = "mute",
    X.unmute = "unmute",
    X.pause = "pause",
    X.rewind = "rewind",
    X.resume = "resume",
    X.fullscreen = "fullscreen",
    X.exitFullscreen = "exitfullscreen",
    X.expand = "expand",
    X.collapse = "collapse",
    X.close = "close",
    X.acceptInvitation = "acceptinvitation",
    X.userInteraction = "userInteraction",
    X.adCanPlay = "adCanPlay",
    X.adStarted = "adStarted",
    X.abandon = "abandon",
    X.acceptInvitationLinear = "acceptinvitationlinear",
    X.engagedView = "engagedview",
    X.instreamAdComplete = "instreamAdComplete",
    X.skipShown = "skipshown",
    X.skippableStateChanged = "skippableStateChanged",
    X.skip = "skip",
    X.progress = "progress",
    X.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP",
    X.annotation_start = "annotation_start",
    X.annotation_click = "annotation_click",
    X.annotation_close = "annotation_close",
    X.cta_annotation_shown = "cta_annotation_shown",
    X.cta_annotation_clicked = "cta_annotation_clicked",
    X.cta_annotation_closed = "cta_annotation_closed",
    X.replay = "replay",
    X.stop = "stop",
    X.autoplayDisallowed = "autoplayDisallowed",
    X.error = "error",
    X.mediaLoadTimeout = "mediaLoadTimeout",
    X.linearChanged = "linearChanged",
    X.click = "click",
    X.contentPauseRequested = "contentPauseRequested",
    X.contentResumeRequested = "contentResumeRequested",
    X.discardAdBreak = "discardAdBreak",
    X.updateAdsRenderingSettings = "updateAdsRenderingSettings",
    X.durationChange = "durationChange",
    X.expandedChanged = "expandedChanged",
    X.autoClose = "autoClose",
    X.userClose = "userClose",
    X.userRecall = "userRecall",
    X.prefetched = "prefetched",
    X.loaded = "loaded",
    X.init = "init",
    X.allAdsCompleted = "allAdsCompleted",
    X.adMetadata = "adMetadata",
    X.adBreakReady = "adBreakReady",
    X.adBreakFetchError = "adBreakFetchError",
    X.log = "log",
    X.volumeChange = "volumeChange",
    X.companionBackfill = "companionBackfill",
    X.companionInitialized = "companionInitialized",
    X.companionImpression = "companionImpression",
    X.companionClick = "companionClick",
    X.impression = "impression",
    X.interaction = "interaction",
    X.adProgress = "adProgress",
    X.adBuffering = "adBuffering",
    X.trackingUrlPinged = "trackingUrlPinged",
    X.measurable_impression = "measurable_impression",
    X.custom_metric_viewable = "custom_metric_viewable",
    X.viewable_impression = "viewable_impression",
    X.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression",
    X.overlay_resize = "overlay_resize",
    X.overlay_unmeasurable_impression = "overlay_unmeasurable_impression",
    X.overlay_unviewable_impression = "overlay_unviewable_impression",
    X.overlay_viewable_immediate_impression = "overlay_viewable_immediate_impression",
    X.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression",
    X.externalActivityEvent = "externalActivityEvent",
    X.adEvent = "adEvent",
    X.configure = "configure",
    X.remainingTime = "remainingTime",
    X.destroy = "destroy",
    X.resize = "resize",
    X.volume = "volume",
    X.authorIconClicked = "videoAuthorIconClicked",
    X.authorNameClicked = "videoAuthorClicked",
    X.videoClicked = "videoClicked",
    X.videoIconClicked = "videoIconClicked",
    X.learnMoreClicked = "videoLearnMoreClicked",
    X.muteClicked = "videoMuteClicked",
    X.titleClicked = "videoTitleClicked",
    X.skipShown = "SKIP_SHOWN",
    X.videoSkipClicked = "SKIPPED",
    X.unmuteClicked = "videoUnmuteClicked",
    X.vpaidEvent = "vpaidEvent",
    X.show_ad = "show_ad",
    X.video_card_endcap_collapse = "video_card_endcap_collapse",
    X.video_card_endcap_dismiss = "video_card_endcap_dismiss",
    X.video_card_endcap_impression = "video_card_endcap_impression",
    X.mediaUrlPinged = "mediaUrlPinged",
    X.breakStart = "breakstart",
    X.breakEnd = "breakend",
    X.omidReady = "omidReady",
    X.omidUnavailable = "omidUnavailable",
    X.omidAdSessionCompleted = "omidAdSessionCompleted",
    X.omidAdSessionAbandoned = "omidAdSessionAbandoned",
    X.verificationNotExecuted = "verificationNotExecuted",
    X.loadStart = "loadStart",
    X.seeked = "seeked",
    X.seeking = "seeking",
    X);
    var ax = function(a) {
        N.call(this);
        this.A = a || "goog_" + Xc++;
        this.o = [];
        this.h = !1
    };
    t(ax, N);
    ax.prototype.connect = function() {
        for (this.h = !0; 0 != this.o.length; ) {
            var a = this.o.shift();
            this.sendMessage(a.name, a.type, a.data)
        }
    }
    ;
    var bx = function(a, b, c, d) {
        a.h ? a.sendMessage(b, c, d) : a.o.push({
            name: b,
            type: c,
            data: d
        })
    };
    ax.prototype.sendMessage = function() {}
    ;
    function cx(a) {
        a = ft(a, cm() ? "https" : window.location.protocol);
        if (cm())
            dx(a);
        else
            try {
                a && (ds(a) ? hs(a) : ls(a))
            } catch (b) {}
    }
    function dx(a) {
        (new xt).get({
            url: a,
            timeout: new bt
        }).then(function() {}, function() {})
    }
    ;var ex = function(a, b, c) {
        var d = Error.call(this);
        this.message = d.message;
        "stack"in d && (this.stack = d.stack);
        this.l = b;
        this.g = c;
        this.o = a
    };
    t(ex, Error);
    l = ex.prototype;
    l.getAd = function() {
        return this.A
    }
    ;
    l.getInnerError = function() {
        return this.h
    }
    ;
    l.getMessage = function() {
        return this.l
    }
    ;
    l.getErrorCode = function() {
        return this.g
    }
    ;
    l.bd = function() {
        return 1E3 > this.g ? this.g : 900
    }
    ;
    l.getType = function() {
        return this.o
    }
    ;
    l.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "")
    }
    ;
    var fx = function(a, b) {
        this.message = a;
        this.errorCode = b
    };
    fx.prototype.getErrorCode = function() {
        return this.errorCode
    }
    ;
    fx.prototype.getMessage = function() {
        return this.message
    }
    ;
    var gx = new fx("Failed to initialize ad playback element before starting ad playback.",400)
      , hx = new fx("The provided {0} information: {1} is invalid.",1101);
    function ix(a, b, c) {
        var d = void 0 === b ? null : b;
        if (!(d instanceof ex)) {
            var e = a.errorCode
              , f = a.message
              , g = Array.prototype.slice.call(arguments, 2);
            if (0 < g.length)
                for (var h = 0; h < g.length; h++)
                    f = f.replace(new RegExp("\\{" + h + "\\}","ig"), g[h]);
            e = new ex("adPlayError",f,e);
            e.h = d;
            d = e
        }
        return d
    }
    ;var jx = function() {
        N.call(this);
        this.I = !1;
        this.g = null;
        this.B = this.G = this.M = !1;
        this.h = 0;
        this.A = [];
        this.D = !1;
        this.P = this.N = Infinity;
        this.o = 0;
        this.L = new rt(this);
        vf(this, this.L);
        this.K = {}
    };
    t(jx, N);
    var lx = function(a, b) {
        null == b || a.I || (a.g = b,
        kx(a),
        a.I = !0)
    }
      , nx = function(a) {
        null != a.g && a.I && (mx(a),
        a.I = !1,
        a.G = !1,
        a.B = !1,
        a.h = 0,
        a.A = [],
        a.D = !1)
    }
      , kx = function(a) {
        mx(a);
        !(a.g instanceof N) && "ontouchstart"in document.documentElement && yd ? (a.K = {
            touchstart: function(b) {
                a.G = !0;
                a.h = b.touches.length;
                a.o && (window.clearTimeout(a.o),
                a.o = 0,
                a.M = !0);
                a.D = ox(a, b.touches) || 1 != b.touches.length;
                a.D ? (a.N = Infinity,
                a.P = Infinity) : (a.N = b.touches[0].clientX,
                a.P = b.touches[0].clientY);
                b = b.touches;
                a.A = [];
                for (var c = 0; c < b.length; c++)
                    a.A.push(b[c].identifier)
            },
            touchmove: function(b) {
                a.h = b.touches.length;
                if (!mt(8) || Math.pow(b.changedTouches[0].clientX - a.N, 2) + Math.pow(b.changedTouches[0].clientY - a.P, 2) > Math.pow(5, 2))
                    a.B = !0
            },
            touchend: function(b) {
                return void px(a, b)
            }
        },
        Bb(a.K, function(b, c) {
            a.g.addEventListener(c, b, !1)
        })) : a.L.U(a.g, "click", a.T)
    }
      , mx = function(a) {
        a.L.Qa(a.g, "click", a.T);
        Bb(a.K, function(b, c) {
            this.g.removeEventListener(c, b, !1)
        }, a);
        a.K = {}
    }
      , px = function(a, b) {
        !a.G || 1 != a.h || a.B || a.M || a.D || !ox(a, b.changedTouches) || (a.o = window.setTimeout(function() {
            return void qx(a)
        }, 300));
        a.h = b.touches.length;
        0 == a.h && (a.G = !1,
        a.B = !1,
        a.A = []);
        a.M = !1
    };
    jx.prototype.T = function() {
        qx(this)
    }
    ;
    var ox = function(a, b) {
        for (var c = 0; c < b.length; c++)
            if (a.A.includes(b[c].identifier))
                return !0;
        return !1
    }
      , qx = function(a) {
        a.o = 0;
        a.dispatchEvent(new pi("click"))
    };
    jx.prototype.R = function() {
        nx(this);
        N.prototype.R.call(this)
    }
    ;
    var rx = function(a, b, c) {
        this.h = c;
        0 == b.length && (b = [[]]);
        this.g = b.map(function(d) {
            d = a.concat(d);
            for (var e = [], f = 0, g = 0; f < d.length; ) {
                var h = d[f++];
                if (128 > h)
                    e[g++] = String.fromCharCode(h);
                else if (191 < h && 224 > h) {
                    var k = d[f++];
                    e[g++] = String.fromCharCode((h & 31) << 6 | k & 63)
                } else if (239 < h && 365 > h) {
                    k = d[f++];
                    var n = d[f++]
                      , m = d[f++];
                    h = ((h & 7) << 18 | (k & 63) << 12 | (n & 63) << 6 | m & 63) - 65536;
                    e[g++] = String.fromCharCode(55296 + (h >> 10));
                    e[g++] = String.fromCharCode(56320 + (h & 1023))
                } else
                    k = d[f++],
                    n = d[f++],
                    e[g++] = String.fromCharCode((h & 15) << 12 | (k & 63) << 6 | n & 63)
            }
            return new RegExp(e.join(""))
        })
    };
    rx.prototype.match = function(a) {
        var b = this;
        return this.g.some(function(c) {
            c = a.match(c);
            return null == c ? !1 : !b.h || 1 <= c.length && "3.427.1" == c[1] || 2 <= c.length && "3.427.1" == c[2] ? !0 : !1
        })
    }
    ;
    var sx = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47]
      , tx = [104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47]
      , ux = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47]
      , vx = [[105, 109, 97, 51, 92, 46, 106, 115], [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]]
      , wx = [[98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]]
      , xx = [[111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115], [111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]]
      , yx = new rx(sx,vx,!1)
      , zx = new rx(sx,wx,!0)
      , Ax = new rx(tx,vx,!1)
      , Bx = new rx(tx,wx,!0)
      , Cx = new rx(ux,vx,!1)
      , Dx = new rx([104, 116, 116, 112, 115, 63, 58, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47],[],!1)
      , Ex = new rx(sx,[[100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]],!0)
      , Fx = new rx(sx,xx,!1)
      , Gx = new rx(ux,xx,!1)
      , Db = {
        Lf: yx,
        Jf: zx,
        eg: Ax,
        dg: Bx,
        Mf: Cx,
        Dg: Dx,
        Kf: Ex,
        og: Fx,
        pg: Gx
    };
    var Hx = function() {
        var a = G()
          , b = document;
        return new Q(a.parent == a ? a.location.href : b.referrer)
    }
      , Ix = function(a, b) {
        Vr(a, "url", "");
        try {
            var c = 2083 - a.toString().length - 1;
            if (0 >= c)
                return a.toString();
            for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c; )
                d = b.slice(0, f--),
                e = encodeURIComponent(d);
            Vr(a, "url", d)
        } catch (g) {}
        return a.toString()
    };
    var Jx = function() {
        this.g = .01 > Math.random();
        this.h = Math.floor(4503599627370496 * Math.random())
    };
    Jx.prototype.report = function(a, b, c) {
        b = void 0 === b ? {} : b;
        if (null == v.G_testRunner && (this.g || (void 0 === c ? 0 : c))) {
            b.lid = a;
            b.sdkv = Iw();
            a = lh().sort().join(",");
            ec(Wc(a)) || (b.e = a);
            b = Kx(this, b);
            var d = new Q("http://pagead2.googlesyndication.com/pagead/gen_204");
            Bb(b, function(e, f) {
                Vr(d, f, null == e ? "" : "boolean" == typeof e ? e ? "t" : "f" : "" + e)
            }, this);
            b = Hx();
            Ir(d, b.o);
            b = d.toString();
            a = d.l.get("url");
            null != a && Gc() && 2083 < b.length && (b = Ix(d, a));
            cx(b)
        }
    }
    ;
    var Kx = function(a, b) {
        b.id = "ima_html5";
        var c = Hx();
        b.c = a.h;
        b.domain = c.h;
        return b
    };
    Na(Jx);
    var Lx = function(a, b, c, d, e) {
        e = void 0 === e ? "" : e;
        pi.call(this, a);
        this.ka = b;
        this.na = c;
        this.Qb = d;
        this.nd = e
    };
    t(Lx, pi);
    Lx.prototype.toString = function() {
        return ""
    }
    ;
    var Mx = function(a) {
        this.g = a
    };
    l = Mx.prototype;
    l.getTotalAds = function() {
        return this.g.totalAds
    }
    ;
    l.getMaxDuration = function() {
        return this.g.maxDuration
    }
    ;
    l.getAdPosition = function() {
        return this.g.adPosition
    }
    ;
    l.getPodIndex = function() {
        return this.g.podIndex
    }
    ;
    l.getTimeOffset = function() {
        return this.g.timeOffset
    }
    ;
    l.getIsBumper = function() {
        return this.g.isBumper
    }
    ;
    Mx.prototype.getIsBumper = Mx.prototype.getIsBumper;
    Mx.prototype.getTimeOffset = Mx.prototype.getTimeOffset;
    Mx.prototype.getPodIndex = Mx.prototype.getPodIndex;
    Mx.prototype.getAdPosition = Mx.prototype.getAdPosition;
    Mx.prototype.getMaxDuration = Mx.prototype.getMaxDuration;
    Mx.prototype.getTotalAds = Mx.prototype.getTotalAds;
    var Nx = function(a) {
        this.g = a
    };
    l = Nx.prototype;
    l.getContent = function() {
        return this.g.content
    }
    ;
    l.getContentType = function() {
        return this.g.contentType
    }
    ;
    l.getWidth = function() {
        return this.g.size.width
    }
    ;
    l.getHeight = function() {
        return this.g.size.height
    }
    ;
    l.Zc = function() {
        return this.g.adSlotId
    }
    ;
    var Zw = function(a) {
        return (a = a.g.backupCompanions) ? a.map(function(b) {
            return new Nx(b)
        }) : []
    };
    Nx.prototype.getAdSlotId = Nx.prototype.Zc;
    Nx.prototype.getHeight = Nx.prototype.getHeight;
    Nx.prototype.getWidth = Nx.prototype.getWidth;
    Nx.prototype.getContentType = Nx.prototype.getContentType;
    Nx.prototype.getContent = Nx.prototype.getContent;
    var Ox = function(a, b) {
        this.h = a;
        this.g = b
    };
    Ox.prototype.getAdIdValue = function() {
        return this.h
    }
    ;
    Ox.prototype.getAdIdRegistry = function() {
        return this.g
    }
    ;
    Ox.prototype.getAdIdRegistry = Ox.prototype.getAdIdRegistry;
    Ox.prototype.getAdIdValue = Ox.prototype.getAdIdValue;
    var Y = function(a) {
        this.g = a
    };
    Y.prototype.getAdId = function() {
        return this.g.adId
    }
    ;
    Y.prototype.getCreativeAdId = function() {
        return this.g.creativeAdId
    }
    ;
    Y.prototype.getCreativeId = function() {
        return this.g.creativeId
    }
    ;
    var Px = function(a) {
        return a.g.adQueryId
    };
    l = Y.prototype;
    l.getAdSystem = function() {
        return this.g.adSystem
    }
    ;
    l.getAdvertiserName = function() {
        return this.g.advertiserName
    }
    ;
    l.getApiFramework = function() {
        return this.g.apiFramework
    }
    ;
    l.getWrapperAdIds = function() {
        return this.g.adWrapperIds
    }
    ;
    l.getWrapperCreativeIds = function() {
        return this.g.adWrapperCreativeIds
    }
    ;
    l.getWrapperAdSystems = function() {
        return this.g.adWrapperSystems
    }
    ;
    l.isLinear = function() {
        return this.g.linear
    }
    ;
    l.isSkippable = function() {
        return this.g.skippable
    }
    ;
    l.getContentType = function() {
        return this.g.contentType
    }
    ;
    l.ie = function() {
        return this.g.description
    }
    ;
    l.ke = function() {
        return this.g.title
    }
    ;
    l.getDuration = function() {
        return this.g.duration
    }
    ;
    l.getVastMediaWidth = function() {
        return this.g.vastMediaWidth
    }
    ;
    l.getVastMediaHeight = function() {
        return this.g.vastMediaHeight
    }
    ;
    l.getWidth = function() {
        return this.g.width
    }
    ;
    l.getHeight = function() {
        return this.g.height
    }
    ;
    l.getUiElements = function() {
        return this.g.uiElements
    }
    ;
    l.getMinSuggestedDuration = function() {
        return this.g.minSuggestedDuration
    }
    ;
    l.getAdPodInfo = function() {
        return new Mx(this.g.adPodInfo)
    }
    ;
    l.getCompanionAds = function(a, b, c) {
        var d = this.g.companions.map(function(e) {
            return new Nx(e)
        });
        return Yw(new Vw(new Je(a,b),c), d)
    }
    ;
    l.getTraffickingParameters = function() {
        return Bt(Wc(this.g.traffickingParameters))
    }
    ;
    l.getTraffickingParametersString = function() {
        return this.g.traffickingParameters
    }
    ;
    l.getVastMediaBitrate = function() {
        return this.g.vastMediaBitrate
    }
    ;
    l.getMediaUrl = function() {
        return this.g.mediaUrl
    }
    ;
    l.getSurveyUrl = function() {
        return this.g.surveyUrl
    }
    ;
    l.getDealId = function() {
        return this.g.dealId
    }
    ;
    l.le = function() {
        return (this.g.universalAdIds || []).map(function(a) {
            return new Ox(a.adIdValue,a.adIdRegistry)
        })
    }
    ;
    l.getUniversalAdIdValue = function() {
        return this.g.universalAdIdValue
    }
    ;
    l.getUniversalAdIdRegistry = function() {
        return this.g.universalAdIdRegistry
    }
    ;
    l.getSkipTimeOffset = function() {
        return this.g.skipTimeOffset
    }
    ;
    l.isUiDisabled = function() {
        return this.g.disableUi
    }
    ;
    Y.prototype.isUiDisabled = Y.prototype.isUiDisabled;
    Y.prototype.getSkipTimeOffset = Y.prototype.getSkipTimeOffset;
    Y.prototype.getUniversalAdIdRegistry = Y.prototype.getUniversalAdIdRegistry;
    Y.prototype.getUniversalAdIdValue = Y.prototype.getUniversalAdIdValue;
    Y.prototype.getUniversalAdIds = Y.prototype.le;
    Y.prototype.getDealId = Y.prototype.getDealId;
    Y.prototype.getSurveyUrl = Y.prototype.getSurveyUrl;
    Y.prototype.getMediaUrl = Y.prototype.getMediaUrl;
    Y.prototype.getVastMediaBitrate = Y.prototype.getVastMediaBitrate;
    Y.prototype.getTraffickingParametersString = Y.prototype.getTraffickingParametersString;
    Y.prototype.getTraffickingParameters = Y.prototype.getTraffickingParameters;
    Y.prototype.getCompanionAds = Y.prototype.getCompanionAds;
    Y.prototype.getAdPodInfo = Y.prototype.getAdPodInfo;
    Y.prototype.getMinSuggestedDuration = Y.prototype.getMinSuggestedDuration;
    Y.prototype.getUiElements = Y.prototype.getUiElements;
    Y.prototype.getHeight = Y.prototype.getHeight;
    Y.prototype.getWidth = Y.prototype.getWidth;
    Y.prototype.getVastMediaHeight = Y.prototype.getVastMediaHeight;
    Y.prototype.getVastMediaWidth = Y.prototype.getVastMediaWidth;
    Y.prototype.getDuration = Y.prototype.getDuration;
    Y.prototype.getTitle = Y.prototype.ke;
    Y.prototype.getDescription = Y.prototype.ie;
    Y.prototype.getContentType = Y.prototype.getContentType;
    Y.prototype.isSkippable = Y.prototype.isSkippable;
    Y.prototype.isLinear = Y.prototype.isLinear;
    Y.prototype.getWrapperAdSystems = Y.prototype.getWrapperAdSystems;
    Y.prototype.getWrapperCreativeIds = Y.prototype.getWrapperCreativeIds;
    Y.prototype.getWrapperAdIds = Y.prototype.getWrapperAdIds;
    Y.prototype.getApiFramework = Y.prototype.getApiFramework;
    Y.prototype.getAdvertiserName = Y.prototype.getAdvertiserName;
    Y.prototype.getAdSystem = Y.prototype.getAdSystem;
    Y.prototype.getCreativeId = Y.prototype.getCreativeId;
    Y.prototype.getCreativeAdId = Y.prototype.getCreativeAdId;
    Y.prototype.getAdId = Y.prototype.getAdId;
    var Qx = null, Rx = function() {
        N.call(this);
        this.g = null;
        this.G = new rt(this);
        vf(this, this.G);
        this.h = new Map;
        this.A = new Map;
        this.o = this.B = !1;
        this.D = null
    }, Sx;
    t(Rx, N);
    var Tx = function() {
        null == Qx && (Qx = new Rx);
        return Qx
    }
      , Aq = function(a, b, c) {
        var d = {};
        d.queryId = b;
        d.viewabilityData = c;
        a.g && bx(a.g, "activityMonitor", "viewabilityMeasurement", d)
    };
    Rx.prototype.destroy = function() {
        this.G.Qa(this.g, "activityMonitor", this.I);
        this.o = !1;
        this.h.clear();
        this === Sx && (Sx = null)
    }
    ;
    Rx.prototype.R = function() {
        this.destroy();
        N.prototype.R.call(this)
    }
    ;
    Rx.prototype.init = function(a) {
        if (!this.o) {
            if (this.g = a || null)
                this.G.U(this.g, "activityMonitor", this.I),
                Ux(this);
            if (!(v.ima && v.ima.video && v.ima.video.client && v.ima.video.client.tagged)) {
                y("ima.video.client.sdkTag", !0, void 0);
                var b = v.document;
                a = Te(document, "SCRIPT");
                var c = cc(Yb(Zb("https://s0.2mdn.net/instream/video/client.js")));
                Rc(a, c);
                a.async = !0;
                a.type = "text/javascript";
                b = b.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b)
            }
            Qk();
            qq.C().M = W.g;
            this.B = !0;
            qq.C().l = !0;
            this.D = null;
            a = qq.C();
            b = "h" == Qp(a) || "b" == Qp(a);
            c = !(O.C(),
            !1);
            b && c && (a.D = !0,
            a.I = new $n);
            this.o = !0
        }
    }
    ;
    var Wx = function(a) {
        if (null == a)
            return !1;
        if ((vd || xd) && null != a.webkitDisplayingFullscreen)
            return a.webkitDisplayingFullscreen;
        a = Vx(a);
        var b = window.screen.availHeight || window.screen.height;
        return 0 >= (window.screen.availWidth || window.screen.width) - a.width && 42 >= b - a.height
    }
      , Vx = function(a) {
        var b = {
            left: a.offsetLeft,
            top: a.offsetTop,
            width: a.offsetWidth,
            height: a.offsetHeight
        };
        try {
            "function" === typeof a.getBoundingClientRect && Ye(Le(a), a) && (b = a.getBoundingClientRect())
        } catch (c) {}
        return b
    }
      , Xx = function(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        if (a.o) {
            d && null == e.opt_osdId && (e.opt_osdId = d);
            if (a.D)
                return a.D(b, c, e);
            if (a = d ? a.A.get(d) : W.o)
                null == e.opt_fullscreen && (e.opt_fullscreen = Wx(a)),
                null == e.opt_adElement && (e.opt_adElement = a);
            return kk.$a(469, Xa(Dq, b, c, e), void 0) || {}
        }
        return {}
    }
      , Yx = function(a, b) {
        var c = String(Math.floor(1E9 * Math.random()));
        a.A.set(c, b);
        if (hh(Zh))
            try {
                Pj(function(d) {
                    if (a.g) {
                        var e = {};
                        e.engagementString = d;
                        bx(a.g, "activityMonitor", "engagementData", e)
                    }
                }, function() {
                    return b
                })
            } catch (d) {}
        0 != W.g && Bq(qq.C(), c, a);
        return c
    }
      , Zx = function(a, b, c) {
        if (c)
            a.h.get(c) == b && a.h.delete(c);
        else {
            var d = [];
            a.h.forEach(function(e, f) {
                e == b && d.push(f)
            });
            d.forEach(a.h.delete, a.h)
        }
    }
      , wq = function(a, b) {
        a = a.h.get(b);
        return "function" === typeof a ? a() : {}
    }
      , Ux = function(a) {
        if ("function" === typeof window.Goog_AdSense_Lidar_getUrlSignalsArray) {
            var b = {};
            b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
            bx(a.g, "activityMonitor", "pageSignals", b)
        }
    };
    Rx.prototype.I = function(a) {
        var b = a.na
          , c = b.queryId
          , d = {}
          , e = null;
        d.eventId = b.eventId;
        switch (a.ka) {
        case "getPageSignals":
            Ux(this);
            break;
        case "reportVastEvent":
            e = b.vastEvent;
            a = b.osdId;
            var f = {};
            f.opt_fullscreen = b.isFullscreen;
            b.isOverlay && (f.opt_bounds = b.overlayBounds);
            d.viewabilityData = Xx(this, e, c, a, f);
            bx(this.g, "activityMonitor", "viewability", d);
            break;
        case "fetchAdTagUrl":
            c = {},
            c.eventId = b.eventId,
            a = b.osdId,
            Kb(b, "isFullscreen") && (e = b.isFullscreen),
            Kb(b, "loggingId") && (b = b.loggingId,
            c.loggingId = b,
            Jx.C().report(43, {
                step: "beforeLookup",
                logid: b,
                time: Date.now()
            })),
            c.engagementString = $x(this, a, e),
            this.g && bx(this.g, "activityMonitor", "engagement", c)
        }
    }
    ;
    var $x = function(a, b, c) {
        var d = b ? a.A.get(b) : W.o;
        a = {};
        null != c && (a.fullscreen = c);
        c = "";
        try {
            c = Oj(function() {
                return d
            }, a)
        } catch (e) {
            c = "sdktle;" + Uc(e.name, 12) + ";" + Uc(e.message, 40)
        }
        return c
    };
    y("ima.common.getVideoMetadata", function(a) {
        return wq(Tx(), a)
    }, void 0);
    y("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        Aq(Tx(), a, b)
    }, void 0);
    var ay = od ? cc(Yb(Zb('javascript:""'))) : cc(Yb(Zb("about:blank")));
    bc(ay);
    var by = od ? cc(Yb(Zb('javascript:""'))) : cc(Yb(Zb("javascript:undefined")));
    bc(by);
    var cy = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        pi.call(this, a);
        this.l = b;
        this.g = c
    };
    t(cy, pi);
    cy.prototype.getAd = function() {
        return this.l
    }
    ;
    cy.prototype.getAdData = function() {
        return this.g
    }
    ;
    var dy = function() {
        this.loadVideoTimeout = 8E3;
        this.autoAlign = !0;
        this.bitrate = -1;
        this.uiElements = null;
        this.enablePreloading = this.disableClickThrough = !1;
        this.mimeTypes = null;
        this.useStyledNonLinearAds = this.useStyledLinearAds = this.useLearnMoreButton = this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
        this.playAdsAfterTime = -1;
        this.useVideoAdUi = !0;
        this.disableUi = !1
    }
      , ey = function(a, b) {
        var c = {};
        Object.assign(c, a);
        b && (c.disableClickThrough = !0);
        return c
    };
    dy.prototype.append = function(a) {
        if (a) {
            this.autoAlign = a.autoAlign || this.autoAlign;
            var b = ad(a.bitrate);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.bitrate = b);
            this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
            this.disableUi = a.disableUi || this.disableUi;
            this.enablePreloading = a.enablePreloading || this.enablePreloading;
            a.mimeTypes && 0 != a.mimeTypes.length && (this.mimeTypes = a.mimeTypes);
            b = ad(a.playAdsAfterTime);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.playAdsAfterTime = b);
            this.restoreCustomPlaybackStateOnAdBreakComplete = a.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
            b = ad(a.loadVideoTimeout);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.loadVideoTimeout = b);
            this.uiElements = a.uiElements || this.uiElements;
            this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
            this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
            this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
            this.useVideoAdUi = !1 === a.useVideoAdUi ? !1 : this.useVideoAdUi
        }
    }
    ;
    y("module$contents$ima$AdsRenderingSettings_AdsRenderingSettings.AUTO_SCALE", -1, void 0);
    var fy = function() {
        N.call(this);
        this.g = new Fr;
        this.o = null;
        this.h = new Map;
        this.A = new rt(this);
        vf(this, this.A);
        this.G = new Map;
        this.D = null;
        this.B = -1;
        O.C().l = !0;
        Mw()
    };
    B(fy, N);
    var gy = null
      , hy = function() {
        null == gy && (gy = new fy);
        return gy
    }
      , iy = function(a, b) {
        var c = {};
        c.queryId = a;
        c.viewabilityString = b;
        hy().dispatchEvent(new cy("measurable_impression",null,c))
    }
      , jy = function(a, b) {
        var c = {};
        c.queryId = a;
        c.viewabilityString = b;
        hy().dispatchEvent(new cy("viewable_impression",null,c))
    }
      , ky = function(a, b, c) {
        var d = {};
        d.queryId = a;
        d.viewabilityString = b;
        d.eventName = c;
        hy().dispatchEvent(new cy("externalActivityEvent",null,d))
    };
    fy.prototype.destroy = function() {
        this.A.Qa(this.o, "activityMonitor", this.I);
        this.o = null
    }
    ;
    fy.prototype.I = function(a) {
        var b = a.na;
        switch (a.ka) {
        case "appStateChanged":
            qq.C();
            b = b.appState;
            a = P.C();
            a.D != b && (a.D = b,
            (a = qo.C().g) && pm(a.g, !b));
            break;
        case "externalActivityEvent":
            ky(b.queryId, b.viewabilityString, b.eventName);
            break;
        case "measurableImpression":
            iy(b.queryId, b.viewabilityString);
            break;
        case "viewableImpression":
            jy(b.queryId, b.viewabilityString);
            break;
        case "engagementData":
            b = b.engagementString;
            hy().D = b;
            hy().B = z();
            break;
        case "viewability":
            a = b.queryId;
            var c = b.vastEvent;
            this.h.get(a) && "start" == c && this.h.get(a);
            a = b.eventId;
            clearTimeout(a);
            if (c = this.g.get(a))
                this.g.remove(a),
                c(b.viewabilityData);
            break;
        case "viewabilityMeasurement":
            qq.C();
            O.C();
            break;
        case "engagement":
            a = b.eventId;
            clearTimeout(a);
            c = this.g.get(a);
            if (Jx.C().g) {
                var d = -1;
                this.K && (d = z() - this.K);
                var e = !1;
                c || (e = !0);
                Kb(b, "loggingId") && Jx.C().report(43, {
                    step: "receivedResponse",
                    time: z(),
                    timeout: e,
                    logid: b.loggingId,
                    timediff: d
                })
            }
            c && (this.g.remove(a),
            c(b.engagementString))
        }
    }
    ;
    y("ima.bridge.getNativeViewability", function(a, b) {
        hy();
        b({})
    }, void 0);
    y("ima.bridge.getVideoMetadata", function(a) {
        return (a = hy().G.get(a)) ? a() : {}
    }, void 0);
    y("ima.bridge.triggerViewEvent", jy, void 0);
    y("ima.bridge.triggerMeasurableEvent", iy, void 0);
    y("ima.bridge.triggerExternalActivityEvent", ky, void 0);
    Object.entries({
        "application/dash+xml": 1,
        "application/x-javascript": 2,
        "application/x-mpegurl": 3,
        "application/javascript": 4,
        "audio/ogg": 5,
        "audio/mp4": 6,
        "audio/mpeg": 7,
        "audio/wav": 8,
        "text/javascript": 9,
        "video/m4v": 10,
        "video/ogg": 11,
        "video/x-flv": 12,
        "video/3gpp": 13,
        "video/mpt2": 14,
        "video/mp4": 15,
        "video/mpeg": 16,
        "video/quicktime": 17,
        "video/webm": 18
    });
    function ly(a, b) {
        return b instanceof RegExp ? "__REGEXP" + b.toString() : b
    }
    function my(a, b) {
        return b && 0 == b.toString().indexOf("__REGEXP") ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/),
        new RegExp(a[1],a[2] || "")) : b
    }
    var ny = function(a, b) {
        ax.call(this, b);
        this.B = a;
        this.g = null;
        this.D = new rt(this);
        this.D.U(G(), "message", this.G)
    };
    t(ny, ax);
    var oy = function(a) {
        if (null == a || "string" !== typeof a || 0 != a.lastIndexOf("ima://", 0))
            return null;
        a = a.substr(6);
        try {
            return JSON.parse(a, my)
        } catch (b) {
            return null
        }
    };
    ny.prototype.sendMessage = function(a, b, c) {
        if (null != this.g && null != this.g.postMessage) {
            var d = this.g
              , e = d.postMessage
              , f = {};
            f.name = a;
            f.type = b;
            null != c && (f.data = c);
            f.sid = this.A;
            f.channel = this.B;
            a = "ima://" + Xg(f, ly);
            e.call(d, a, "*")
        }
        null != this.g && null == this.g.postMessage && Jx.C().report(11)
    }
    ;
    ny.prototype.R = function() {
        uf(this.D);
        this.g = null;
        ax.prototype.R.call(this)
    }
    ;
    ny.prototype.G = function(a) {
        a = a.g;
        var b = oy(a.data);
        if (py(this, b)) {
            if (null == this.g)
                this.g = a.source,
                this.h || this.connect();
            else if (this.g != a.source)
                return;
            py(this, b) && this.dispatchEvent(new Lx(b.name,b.type,b.data || {},b.sid,a.origin))
        }
    }
    ;
    var py = function(a, b) {
        if (null == b)
            return !1;
        var c = b.channel;
        if (null == c || c != a.B)
            return !1;
        b = b.sid;
        return null == b || "*" != a.A && b != a.A ? !1 : !0
    };
    var qy = cc(Yb(Zb("http://pagead2.googlesyndication.com/omsdk/releases/live/omsdk-v1.js")));
    function ry(a, b) {
        if (!b)
            throw Error("Value for " + a + " is undefined, null or blank.");
        if ("string" !== typeof b && !(b instanceof String))
            throw Error("Value for " + a + " is not a string.");
        if ("" === b.trim())
            throw Error("Value for " + a + " is empty string.");
    }
    function sy(a, b) {
        if (null == b)
            throw Error("Value for " + a + " is undefined or null");
    }
    function ty(a, b) {
        if (null == b)
            throw Error(a + " must not be null or undefined.");
        if ("number" !== typeof b || isNaN(b))
            throw Error("Value for " + a + " is not a number");
    }
    ;function uy() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.3.3-google_20200427")
    }
    function vy() {
        for (var a = ["1", "3", "3"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
            var d = parseInt(a[c], 10)
              , e = parseInt(b[c], 10);
            if (d > e)
                break;
            else if (d < e)
                return !1
        }
        return !0
    }
    ;var wy = function(a, b, c, d) {
        this.h = a;
        this.method = b;
        this.version = c;
        this.g = d
    }
      , yy = function(a) {
        return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
    }
      , zy = function(a) {
        return new wy(a.omid_message_guid,a.omid_message_method,a.omid_message_version,a.omid_message_args)
    }
      , Ay = function(a) {
        var b = {};
        b = (b.omid_message_guid = a.h,
        b.omid_message_method = a.method,
        b.omid_message_version = a.version,
        b);
        void 0 !== a.g && (b.omid_message_args = a.g);
        return b
    };
    var By = function(a) {
        this.h = a
    };
    function Cy(a, b) {
        return a && (a[b] || (a[b] = {}))
    }
    function Dy(a, b) {
        var c;
        if (c = void 0 === c ? "undefined" === typeof omidExports ? null : omidExports : c)
            a = a.split("."),
            a.slice(0, a.length - 1).reduce(Cy, c)[a[a.length - 1]] = b
    }
    ;function Ey() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    }
    ;function Fy(a) {
        for (var b = [], c = 0; c < arguments.length; ++c)
            b[c - 0] = arguments[c];
        Gy(function() {
            throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(fa(b))));
        }, function() {
            return console.error.apply(console, fa(b))
        })
    }
    function Gy(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b()
    }
    ;var Hy = function(a) {
        try {
            return a.frames ? !!a.frames.omid_v1_present : !1
        } catch (b) {
            return !1
        }
    };
    var Iy = function(a) {
        this.h = a;
        this.handleExportedMessage = Iy.prototype.l.bind(this)
    };
    t(Iy, By);
    Iy.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.h : b;
        if (!b)
            throw Error("Message destination must be defined at construction time or when sending the message.");
        b.handleExportedMessage(Ay(a), this)
    }
    ;
    Iy.prototype.l = function(a, b) {
        yy(a) && this.g && this.g(zy(a), b)
    }
    ;
    var Jy = eval("this")
      , Ky = function() {
        if ("undefined" !== typeof omidGlobal && omidGlobal)
            return omidGlobal;
        if ("undefined" !== typeof global && global)
            return global;
        if ("undefined" !== typeof window && window)
            return window;
        if ("undefined" !== typeof Jy && Jy)
            return Jy;
        throw Error("Could not determine global object context.");
    }();
    function Ly(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top
    }
    function My(a) {
        if (a === Ky)
            return !1;
        try {
            if ("undefined" === typeof a.location.hostname)
                return !0
        } catch (b) {
            return !0
        }
        return !1
    }
    ;var Ny = function(a, b) {
        this.h = b = void 0 === b ? Ky : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if ("object" === typeof d.data) {
                var e = d.data;
                yy(e) && d.source && c.g && c.g(zy(e), d.source)
            }
        })
    };
    t(Ny, By);
    Ny.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.h : b;
        if (!b)
            throw Error("Message destination must be defined at construction time or when sending the message.");
        b.postMessage(Ay(a), "*")
    }
    ;
    var Oy = ["omid", "v1_SessionServiceCommunication"];
    function Py(a) {
        return Oy.reduce(function(b, c) {
            return b && b[c]
        }, a)
    }
    ;Dy("OmidSessionClient.Partner", function(a, b) {
        ry("Partner.name", a);
        ry("Partner.version", b);
        this.name = a;
        this.version = b
    });
    var Qy = function(a, b, c) {
        ry("VerificationScriptResource.resourceUrl", a);
        this.h = a;
        this.l = b;
        this.g = c
    };
    Qy.prototype.toJSON = function() {
        return {
            resourceUrl: this.h,
            vendorKey: this.l,
            verificationParameters: this.g
        }
    }
    ;
    Dy("OmidSessionClient.VerificationScriptResource", Qy);
    Dy("OmidSessionClient.Context", function(a, b, c) {
        c = void 0 === c ? null : c;
        sy("Context.partner", a);
        this.g = a;
        this.l = b;
        this.h = c
    });
    var Ry = {
        sessionError: "reportError"
    }
      , Sy = Object.keys(qs).map(function(a) {
        return qs[a]
    })
      , Ty = ["impressionOccurred"]
      , Uy = function() {
        var a = void 0 === a ? Ky : a;
        this.g = a.omidSessionInterface
    };
    Uy.prototype.sendMessage = function(a, b, c) {
        "registerSessionObserver" == a && (c = [b]);
        Ry[a] && (a = Ry[a]);
        b = this.g;
        0 <= Ty.indexOf(a) && (b = b.adEvents);
        0 <= Sy.indexOf(a) && (b = b.videoEvents);
        b = b[a];
        if (!b)
            throw Error("Unrecognized method name: " + a + ".");
        b.apply(null, fa(c))
    }
    ;
    var Xy = function(a, b, c) {
        sy("AdSession.context", a);
        this.J = a;
        if (!b) {
            var d;
            "undefined" === typeof d && "undefined" !== typeof window && window && (d = window);
            d = Ly(d) ? d : Ky;
            var e = void 0 === e ? Hy : e;
            a: {
                b = r([d, Ly(d) ? d.top : Ky]);
                for (var f = b.next(); !f.done; f = b.next()) {
                    b: {
                        var g = d;
                        f = f.value;
                        var h = e;
                        if (!My(f))
                            try {
                                var k = Py(f);
                                if (k) {
                                    var n = new Iy(k);
                                    break b
                                }
                            } catch (m) {}
                        n = h(f) ? new Ny(g,f) : null
                    }
                    if (g = n) {
                        b = g;
                        break a
                    }
                }
                b = null
            }
        }
        this.h = b;
        this.G = c || new Uy;
        this.H = this.A = this.o = !1;
        this.B = this.D = null;
        this.l = {};
        this.h && (this.h.g = this.I.bind(this));
        this.g("setClientInfo", "1.3.3-google_20200427", this.J.g.name, this.J.g.version);
        Vy(this, a.l);
        (a = a.h) && this.g("setContentUrl", a);
        Wy(this)
    }
      , Yy = function(a, b) {
        a.sendMessage("registerSessionObserver", b)
    };
    Xy.prototype.error = function(a, b) {
        this.g("sessionError", a, b)
    }
    ;
    Xy.prototype.g = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d)
            c[d - 1] = arguments[d];
        this.sendMessage.apply(this, [a, null].concat(fa(c)))
    }
    ;
    Xy.prototype.sendMessage = function(a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e)
            d[e - 2] = arguments[e];
        if (this.h)
            e = Ey(),
            b && (this.l[e] = b),
            d = new wy(e,"SessionService." + a,"1.3.3-google_20200427",uy() && vy() ? d : JSON.stringify(d)),
            this.h.sendMessage(d);
        else if (null != this.G.g)
            try {
                this.G.sendMessage(a, b, d)
            } catch (f) {
                Fy("Failed to communicate with SessionInterface with error:"),
                Fy(f)
            }
    }
    ;
    Xy.prototype.I = function(a) {
        var b = a.method
          , c = a.h;
        a = a.g;
        if ("response" === b && this.l[c]) {
            var d = uy() && vy() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
            this.l[c].apply(this, d)
        }
        "error" === b && window.console && Fy(a)
    }
    ;
    var Vy = function(a, b) {
        b && (b = b.map(function(c) {
            return c.toJSON()
        }),
        a.g("injectVerificationScriptResources", b))
    }
      , Wy = function(a) {
        Yy(a, function(b) {
            "sessionStart" === b.type && (a.H = !0,
            a.D = b.data.creativeType,
            a.B = b.data.impressionType);
            "sessionFinish" === b.type && (a.H = !1)
        })
    };
    Dy("OmidSessionClient.AdSession", Xy);
    var Zy = function(a) {
        sy("AdEvents.adSession", a);
        try {
            if (a.o)
                throw Error("AdEvents already registered.");
            a.o = !0;
            a.g("registerAdEvents");
            this.g = a
        } catch (b) {
            throw Error("AdSession already has an ad events instance registered");
        }
    };
    Zy.prototype.loaded = function(a) {
        a = void 0 === a ? null : a;
        var b = this.g;
        if ("definedByJavaScript" === b.D)
            throw Error("Creative type has not been redefined");
        if ("definedByJavaScript" === b.B)
            throw Error("Impression type has not been redefined");
        a ? this.g.g("loaded", a.toJSON()) : this.g.g("loaded")
    }
    ;
    Dy("OmidSessionClient.AdEvents", Zy);
    var $y = function(a) {
        sy("MediaEvents.adSession", a);
        try {
            if (a.A)
                throw Error("MediaEvents already registered.");
            a.A = !0;
            a.g("registerMediaEvents");
            this.g = a
        } catch (b) {
            throw Error("AdSession already has a media events instance registered");
        }
    };
    $y.prototype.loaded = function(a) {
        sy("MediaEvents.loaded.vastProperties", a);
        this.g.g("loaded", a.toJSON())
    }
    ;
    $y.prototype.start = function(a, b) {
        ty("MediaEvents.start.duration", a);
        ty("MediaEvents.start.mediaPlayerVolume", b);
        if (0 > b || 1 < b)
            throw Error("Value for MediaEvents.start.mediaPlayerVolume is outside the range [0,1]");
        this.g.g("start", a, b)
    }
    ;
    $y.prototype.pause = function() {
        this.g.g("pause")
    }
    ;
    $y.prototype.resume = function() {
        this.g.g("resume")
    }
    ;
    Dy("OmidSessionClient.MediaEvents", $y);
    var cz = function(a, b) {
        az ? a.srcdoc = b : (a = a.contentWindow) && bz(a.document, b)
    }
      , az = sd && "srcdoc"in Te(document, "IFRAME")
      , bz = function(a, b) {
        a.open("text/html", "replace");
        a.write(b);
        a.close()
    };
    function dz(a) {
        return (a = Ze(a)) && a.omidSessionInterface ? a.omidSessionInterface : null
    }
    function ez(a, b) {
        var c = Ve("IFRAME", {
            name: b,
            sandbox: "allow-scripts allow-same-origin",
            style: "display: none"
        });
        a.appendChild(c);
        a = "<script src=" + qy.Ea() + ">\x3c/script>";
        b = new Promise(function(d, e) {
            c.addEventListener("load", function() {
                dz(c) ? d(c) : e()
            })
        }
        );
        cz(c, a);
        return b
    }
    ;var fz = function(a, b) {
        N.call(this);
        this.g = dz(a);
        this.h = b
    };
    t(fz, N);
    var hz = function(a) {
        try {
            a.g.registerSessionObserver(function(b) {
                "sessionStart" == b.type ? gz(a, a.h) : "sessionFinish" == b.type && hz(a)
            })
        } catch (b) {
            a.dispatchEvent(new Event("error"))
        }
    }
      , gz = function(a, b) {
        try {
            a.g.setVideoElement(b)
        } catch (c) {
            a.dispatchEvent(new Event("error"))
        }
    };
    var iz = function(a) {
        this.g = a
    };
    iz.prototype.getCuePoints = function() {
        return this.g
    }
    ;
    iz.prototype.getCuePoints = iz.prototype.getCuePoints;
    y("module$contents$ima$AdCuePoints_AdCuePoints.PREROLL", 0, void 0);
    y("module$contents$ima$AdCuePoints_AdCuePoints.POSTROLL", -1, void 0);
    var jz = function(a) {
        this.g = a;
        this.l = "";
        this.h = -1;
        this.o = !1
    }
      , lz = function(a, b) {
        if (0 <= a.h) {
            var c = null == b ? function() {}
            : b
              , d = function() {
                kz(a, c);
                a.g.removeEventListener("loadedmetadata", d, !1)
            };
            a.g.addEventListener("loadedmetadata", d, !1);
            a.g.src = a.l;
            a.g.load()
        } else
            null != b && b()
    }
      , kz = function(a, b) {
        var c = 0 < a.g.seekable.length;
        a.o ? c ? (a.g.currentTime = a.h,
        mz(a),
        b()) : setTimeout(function() {
            return kz(a, b)
        }, 100) : (mz(a),
        b())
    }
      , mz = function(a) {
        a.h = -1;
        a.l = "";
        a.o = !1
    };
    var nz = function(a) {
        N.call(this);
        this.g = a;
        this.$ = null;
        this.N = new jz(a);
        this.h = new rt(this);
        vf(this, this.h);
        this.A = 0;
        this.G = this.M = this.P = this.Z = this.D = !1;
        this.I = this.o = null;
        this.L = new Je(this.g.offsetWidth,this.g.offsetHeight);
        this.V = Wx(this.g);
        this.X = !1
    };
    t(nz, N);
    l = nz.prototype;
    l.hd = function() {
        var a = this.N;
        a.l = a.g.currentSrc;
        a.o = 0 < a.g.seekable.length;
        a.h = a.g.ended ? -1 : a.g.currentTime
    }
    ;
    l.Rb = function(a) {
        lz(this.N, a)
    }
    ;
    l.load = function(a, b) {
        var c = J.C().g;
        c.T = !0;
        Fg(c);
        Sg("hvd_lc");
        c = J.C();
        var d = this.L.width + "x" + this.L.height;
        null != d && Eg(c.g, "ps", d);
        oz(this);
        this.P = !1;
        if (b)
            if (Sg("hvd_ad"),
            b instanceof ps) {
                if (Sg("hvd_mad"),
                b = b.getMediaUrl()) {
                    Sg("hvd_admu");
                    Sg("hvd_src");
                    this.g.src = b;
                    this.g.load();
                    return
                }
            } else if (b instanceof os) {
                Sg("hvd_dad");
                c = b.J;
                d = b.l;
                var e = b.H
                  , f = b.h
                  , g = b.B
                  , h = b.g;
                if (c && d && e && f && g && h && (Sg("hvd_addu"),
                b.A)) {
                    Sg("hvd_admse");
                    b = e + '; codecs="' + g + '"';
                    f = f + '; codecs="' + h + '"';
                    if (Mu() && Mu() && MediaSource.isTypeSupported(b) && Mu() && MediaSource.isTypeSupported(f)) {
                        Sg("hvd_ymse");
                        Sg("hvd_mse");
                        a = !1;
                        try {
                            -1 != window.location.search.indexOf("goog_limavideo=true") && (a = !0)
                        } catch (k) {}
                        v.customElements && (a || (Jd ? 0 : hh(bi))) ? (a && console.log("force lima video in video display"),
                        this.g.l = c,
                        this.g.o = d) : (this.$ = new bv(this.g,[new Pu(c,b,35E4,new Ot), new Pu(d,f,82E3,new Ot)]),
                        vf(this, this.$),
                        this.g.src = cv(this.$));
                        this.g.load();
                        return
                    }
                    Sg("hvd_nmse")
                }
            } else
                Sg("hvd_uad");
        a ? (Sg("hvd_src"),
        this.g.src = a) : Sg("hvd_vn");
        this.g.load()
    }
    ;
    l.setVolume = function(a) {
        this.g.volume = Math.max(a, 0);
        this.g.muted = 0 == a ? !0 : !1
    }
    ;
    l.getVolume = function() {
        return this.g.muted ? 0 : this.g.volume
    }
    ;
    var pz = function(a) {
        a.X = !1;
        a.P || Gc() ? (a.G = !1,
        a.o = a.g.play(),
        null != a.o && (a.I = null,
        a.o.then(function() {
            a.o = null;
            a.md(a.I);
            a.I = null
        }).catch(function(b) {
            a.o = null;
            var c = "";
            null != b && null != b.name && (c = b.name);
            "AbortError" == c || "NotAllowedError" == c ? a.dispatchEvent("autoplayDisallowed") : a.zc()
        }))) : a.G = !0
    };
    nz.prototype.pause = function() {
        null == this.o && (this.X = !0,
        this.g.pause())
    }
    ;
    nz.prototype.getDuration = function() {
        return isNaN(this.g.duration) ? -1 : this.g.duration
    }
    ;
    nz.prototype.R = function() {
        qz(this);
        N.prototype.R.call(this)
    }
    ;
    var rz = function(a) {
        qz(a);
        a.h.U(a.g, jw, a.fa);
        a.h.U(a.g, "ended", a.Ge);
        a.h.U(a.g, "webkitbeginfullscreen", a.va);
        a.h.U(a.g, "webkitendfullscreen", a.ld);
        a.h.U(a.g, "loadedmetadata", a.Ie);
        a.h.U(a.g, "pause", a.Le);
        a.h.U(a.g, "playing", a.md);
        a.h.U(a.g, "timeupdate", a.Me);
        a.h.U(a.g, "volumechange", a.Ne);
        a.h.U(a.g, "error", a.zc);
        a.h.U(a.g, Md || yd && !mt(8) ? "loadeddata" : "canplay", a.Je);
        a.K = new jx;
        a.h.U(a.K, "click", a.Ee);
        lx(a.K, a.g);
        a.T = new vj(1E3);
        a.h.U(a.T, "tick", a.He);
        a.T.start()
    }
      , qz = function(a) {
        null != a.K && (nx(a.K),
        a.K = null);
        null != a.T && a.T.W();
        wt(a.h);
        oz(a)
    }
      , oz = function(a) {
        a.Z = !1;
        a.M = !1;
        a.D = !1;
        a.G = !1;
        a.A = 0;
        a.o = null;
        a.I = null;
        uf(a.B)
    };
    nz.prototype.fa = function(a) {
        this.dispatchEvent(a.type)
    }
    ;
    var tz = function(a) {
        if (!a.M) {
            a.M = !0;
            a.dispatchEvent("start");
            var b = "function" === typeof a.g.getAttribute && null != a.g.getAttribute("playsinline");
            b = void 0 === b ? !1 : b;
            (wd || lt() || mt(10)) && (b || (Hw.C(),
            1)) || (Hw.C(),
            pc(Dc, "Xbox")) || (vd || xd ? 0 : (!ud || ud && kt(jt, 4)) && (cm() ? (Hw.C(),
            !1) : !Jw())) || !ud || ud && kt(jt, 3) || (vd || xd) && !mt(4) || sz(a)
        }
    };
    l = nz.prototype;
    l.Ie = function() {
        this.P = !0;
        this.G && pz(this);
        this.G = !1
    }
    ;
    l.Je = function() {
        this.Z || (this.Z = !0,
        this.dispatchEvent("loaded"))
    }
    ;
    l.md = function(a) {
        null != this.o ? this.I = a : (this.dispatchEvent("play"),
        yd || wd || lt() || Md || tz(this))
    }
    ;
    l.Me = function(a) {
        if (!this.M && (yd || wd || lt() || Md)) {
            if (0 >= this.g.currentTime)
                return;
            if (Md && this.g.ended && 1 == this.getDuration()) {
                this.zc(a);
                return
            }
            tz(this)
        }
        if (yd || pc(Dc, "Nintendo WiiU")) {
            if (1.5 < this.g.currentTime - this.A) {
                this.D = !0;
                this.g.currentTime = this.A;
                return
            }
            this.D = !1;
            this.g.currentTime > this.A && (this.A = this.g.currentTime)
        }
        this.dispatchEvent("timeUpdate")
    }
    ;
    l.Ne = function() {
        this.dispatchEvent("volumeChange")
    }
    ;
    l.Le = function() {
        if (this.M && yd && !this.X && (2 > uz(this) || this.D)) {
            this.B = new vj(250);
            this.h.U(this.B, "tick", this.Fe);
            this.B.start();
            var a = !0
        } else
            a = !1;
        a || this.o || this.dispatchEvent("pause")
    }
    ;
    l.Ge = function() {
        var a = !0;
        if (yd || pc(Dc, "Nintendo WiiU"))
            a = this.A >= this.g.duration - 1.5;
        !this.D && a && this.dispatchEvent("end")
    }
    ;
    var sz = function(a) {
        a.dispatchEvent("beginFullscreen")
    };
    l = nz.prototype;
    l.ld = function() {
        this.dispatchEvent("endFullscreen")
    }
    ;
    l.zc = function() {
        this.dispatchEvent("error")
    }
    ;
    l.Ee = function() {
        this.dispatchEvent("click")
    }
    ;
    l.He = function() {
        var a = new Je(this.g.offsetWidth,this.g.offsetHeight)
          , b = Wx(this.g);
        if (a.width != this.L.width || a.height != this.L.height)
            !this.V && b ? sz(this) : this.V && !b && this.ld(),
            this.L = a,
            this.V = b
    }
    ;
    l.Fe = function() {
        if (!this.g.ended && this.g.paused && (yd || Nd ? this.g.currentTime < this.g.duration : 1)) {
            var a = this.g.duration - this.g.currentTime
              , b = uz(this);
            0 < b && (2 <= b || 2 > a) && (uf(this.B),
            pz(this))
        } else
            uf(this.B)
    }
    ;
    var uz = function(a) {
        var b;
        a: {
            for (b = a.g.buffered.length - 1; 0 <= b; ) {
                if (a.g.buffered.start(b) <= a.g.currentTime) {
                    b = a.g.buffered.end(b);
                    break a
                }
                b--
            }
            b = 0
        }
        return b - a.g.currentTime
    };
    nz.prototype.va = function() {
        Jx.C().report(139);
        sz(this)
    }
    ;
    var yz = function(a, b, c) {
        H.call(this);
        var d = this;
        this.l = b;
        this.A = c;
        b = new rt(this);
        vf(this, b);
        this.o = "goog_" + Xc++;
        this.g = this.h = null;
        ez(a, this.o).then(function(e) {
            return void vz(d, e)
        }).catch(function() {
            return void wz(d)
        });
        b.U(this.l, "adsManager", function(e) {
            "allAdsCompleted" == e.ka && xz(d)
        })
    };
    t(yz, H);
    var vz = function(a, b) {
        a.h = b;
        var c = {};
        c = (c.frameName = a.o,
        c);
        bx(a.l, "omid", "iframeReady", c);
        a.g = new fz(b,a.A);
        a.g.U("error", function() {
            return void wz(a)
        });
        hz(a.g)
    }
      , wz = function(a) {
        bx(a.l, "omid", "iframeFailed");
        a.W()
    }
      , xz = function(a) {
        setTimeout(function() {
            a.W()
        }, 3E3)
    };
    yz.prototype.R = function() {
        this.h && (We(this.h),
        this.h = null);
        H.prototype.R.call(this)
    }
    ;
    var zz = function(a, b, c, d) {
        H.call(this);
        this.o = a;
        this.l = b;
        this.g = c;
        this.D = d;
        this.h = new rt(this);
        vf(this, this.h);
        this.h.U(this.o, d, this.B)
    };
    t(zz, H);
    var Bz = function(a, b) {
        var c = b.na;
        switch (b.ka) {
        case "showVideo":
            c = a.l;
            null != c.g && c.g.show();
            break;
        case "hide":
            c = a.l;
            null != c.g && Az(c.g.g, !1);
            break;
        case "getPreloadDisplay":
        case "resizeAndPositionVideo":
            a = a.l.h;
            c = c.resizeAndPositionVideo;
            a.g.style.left = String(c.left) + "px";
            a.g.style.top = String(c.top) + "px";
            a.g.style.width = String(c.width) + "px";
            a.g.style.height = String(c.height) + "px";
            break;
        case "restoreSizeAndPositionVideo":
            c = a.l.h,
            c.g.style.width = "100%",
            c.g.style.height = "100%",
            c.g.style.left = "0",
            c.g.style.right = "0"
        }
    };
    zz.prototype.B = function(a) {
        var b = a.na;
        switch (a.ka) {
        case "activate":
            a = this.l;
            var c = this.g;
            a.h != c && a.g && a.o && a.l && (c.setVolume(a.h.getVolume()),
            c = a.h,
            a.h = a.l,
            a.l = c,
            c = a.g,
            a.g = a.o,
            a.o = c,
            Az(a.o.g, !1));
            break;
        case "startTracking":
            a = this.g;
            c = this.A;
            this.h.U(a, Hb(Kt), c);
            this.h.U(a, jw, c);
            rz(this.g);
            break;
        case "stopTracking":
            a = this.g;
            c = this.A;
            this.h.Qa(a, Hb(Kt), c);
            this.h.Qa(a, jw, c);
            qz(this.g);
            break;
        case "exitFullscreen":
            a = this.g;
            (vd || xd) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen();
            break;
        case "play":
            pz(this.g);
            break;
        case "pause":
            this.g.pause();
            break;
        case "load":
            rz(this.g);
            a = this.g;
            c = b.videoUrl;
            var d = b.muxedMediaUrl
              , e = b.muxedMimeType
              , f = b.muxedAudioCodec
              , g = b.muxedVideoCodec
              , h = b.demuxedAudioUrl
              , k = b.demuxedVideoUrl
              , n = b.demuxedAudioMimeType
              , m = b.demuxedVideoMimeType
              , u = b.demuxedAudioCodec
              , p = b.demuxedVideoCodec;
            b = b.mseCompatible;
            var w = null;
            k && h && b && m && n && p && u && (w = new os({
                Ze: k,
                Yd: h,
                fh: null,
                Ug: null,
                Ye: m,
                Xd: n,
                lb: p,
                bb: u,
                height: null,
                width: null,
                Ga: b,
                eh: null,
                Tg: null
            }));
            h = null;
            d && e && g && f && (h = new ps({
                De: d,
                Zg: null,
                mimeType: e,
                lb: g,
                bb: f,
                height: null,
                width: null,
                Ga: b,
                Wg: null
            }));
            w ? a.load(c, w) : h ? a.load(c, h) : a.load(c, null);
            break;
        case "unload":
            a = this.g;
            oz(a);
            a.P = !1;
            "removeAttribute"in a.g ? a.g.removeAttribute("src") : a.g.src = "";
            a.g.load();
            break;
        case "setCurrentTime":
            this.g.g.currentTime = b.currentTime;
            break;
        case "setVolume":
            this.g.setVolume(b.volume)
        }
    }
    ;
    zz.prototype.A = function(a) {
        var b = {};
        switch (a.type) {
        case "autoplayDisallowed":
            a = "autoplayDisallowed";
            break;
        case "beginFullscreen":
            a = "fullscreen";
            break;
        case "endFullscreen":
            a = "exitFullscreen";
            break;
        case "click":
            a = "click";
            break;
        case "end":
            a = "end";
            break;
        case "error":
            a = "error";
            break;
        case "loaded":
            a = "loaded";
            break;
        case "mediaLoadTimeout":
            a = "mediaLoadTimeout";
            break;
        case "pause":
            a = "pause";
            b.ended = this.g.g.ended;
            break;
        case "play":
            a = "play";
            break;
        case "skip":
            a = "skip";
            break;
        case "start":
            a = "start";
            b.volume = this.g.getVolume();
            break;
        case "timeUpdate":
            a = "timeupdate";
            b.currentTime = this.g.g.currentTime;
            b.duration = this.g.getDuration();
            break;
        case "volumeChange":
            a = "volumeChange";
            b.volume = this.g.getVolume();
            break;
        case "loadedmetadata":
            a = a.type;
            b.duration = this.g.getDuration();
            break;
        case "abort":
        case "canplay":
        case "canplaythrough":
        case "durationchange":
        case "emptied":
        case "loadstart":
        case "loadeddata":
        case "progress":
        case "ratechange":
        case "seeked":
        case "seeking":
        case "stalled":
        case "suspend":
        case "waiting":
            a = a.type;
            break;
        default:
            return
        }
        bx(this.o, this.D, a, b)
    }
    ;
    var Cz = function(a, b) {
        H.call(this);
        this.h = b;
        this.l = new zz(a,b,this.h.h,"videoDisplay1");
        vf(this, this.l);
        this.g = null;
        var c = this.h.l;
        null != c && (this.g = new zz(a,b,c,"videoDisplay2"),
        vf(this, this.g))
    };
    t(Cz, H);
    var Dz = function(a, b, c, d) {
        var e = (new Ke(document)).createElement("IFRAME");
        e.id = b;
        e.name = b;
        e.width = String(c);
        e.height = String(d);
        e.allowTransparency = "true";
        e.scrolling = "no";
        e.marginWidth = "0";
        e.marginHeight = "0";
        e.frameBorder = "0";
        e.style.border = "0";
        e.style.verticalAlign = "bottom";
        e.src = "about:blank";
        a.appendChild(e);
        return e
    };
    function Ez() {
        return "object" == typeof googletag && googletag.companionAds ? googletag.companionAds() : null
    }
    function Fz(a) {
        var b = {};
        b.slotId = a.getSlotId().getId();
        var c = [];
        a = r(a.getSizes() || []);
        for (var d = a.next(); !d.done; d = a.next())
            if (d = d.value,
            "string" !== typeof d) {
                var e = {};
                c.push((e.adWidth = d.getWidth(),
                e.adHeight = d.getHeight(),
                e))
            }
        return b.adSizes = c,
        b
    }
    function Gz(a) {
        var b = Ez();
        if (b && a && Array.isArray(a)) {
            var c = new Map(b.getSlots().map(function(m) {
                return [m.getSlotId().getId(), m]
            }));
            a = r(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = d.value
                  , f = c.get(e.slotId);
                if (f && !b.isSlotAPersistentRoadblock(f)) {
                    var g = e.adContent;
                    if (g && (d = Ne(f.getSlotId().getDomId()))) {
                        d.style.display = "";
                        var h = e.adWidth
                          , k = e.adHeight;
                        d.textContent = "";
                        if (e.friendlyIframeRendering) {
                            var n = "google_companion_" + f.getSlotId().getId();
                            n = Dz(d, n, h, k);
                            cz(n, g)
                        } else
                            Qc(d, Sf(g)),
                            d.style.width = h + "px",
                            d.style.height = k + "px";
                        b.slotRenderEnded(f, h, k);
                        (e = e.onAdContentSet) && e(d)
                    }
                }
            }
        }
    }
    ;var Hz = function(a, b, c, d, e, f) {
        Lx.call(this, a, b, c, d, e);
        this.g = f
    };
    t(Hz, Lx);
    var Iz = function(a, b) {
        N.call(this);
        this.A = a;
        this.o = b;
        this.g = {};
        this.h = new rt(this);
        vf(this, this.h);
        this.h.U(G(), "message", this.B)
    };
    t(Iz, N);
    var Jz = function(a, b) {
        var c = b.g;
        a.g.hasOwnProperty(c) && bx(a.g[c], b.type, b.ka, b.na)
    }
      , Kz = function(a, b, c, d) {
        a.g.hasOwnProperty(b) || (c = new ny(b,c),
        a.h.U(c, a.A, function(e) {
            this.dispatchEvent(new Hz(e.type,e.ka,e.na,e.Qb,e.nd,b))
        }),
        c.g = d,
        c.connect(),
        a.g[b] = c)
    };
    Iz.prototype.R = function() {
        for (var a in this.g)
            uf(this.g[a]);
        N.prototype.R.call(this)
    }
    ;
    Iz.prototype.B = function(a) {
        a = a.g;
        var b = oy(a.data);
        if (null != b) {
            var c = b.channel;
            if (this.o && !this.g.hasOwnProperty(c)) {
                var d = b.sid;
                Kz(this, c, d, a.source);
                this.dispatchEvent(new Hz(b.name,b.type,b.data || {},d,a.origin,c))
            }
        }
    }
    ;
    function Lz() {
        return !!La("googletag.cmd", G())
    }
    function Mz() {
        var a = La("googletag.console", G());
        return null != a ? a : null
    }
    var Nz = function() {
        rt.call(this);
        this.l = new Iz("gpt",!0);
        vf(this, this.l);
        this.U(this.l, "gpt", this.B);
        this.g = null;
        Lz() || G().top === G() || (this.g = new Iz("gpt",!1),
        vf(this, this.g),
        this.U(this.g, "gpt", this.A))
    };
    t(Nz, rt);
    Nz.prototype.B = function(a) {
        var b = a.nd
          , c = "//imasdk.googleapis.com".match(cf);
        b = b.match(cf);
        if (c[3] == b[3] && c[4] == b[4])
            if (null != this.g)
                Kz(this.g, a.g, a.Qb, G().parent),
                null != this.g && Jz(this.g, a);
            else if (c = a.na,
            null != c && void 0 !== c.scope) {
                b = c.scope;
                c = c.args;
                var d;
                if ("proxy" == b)
                    c = a.ka,
                    "isGptPresent" == c ? d = Lz() : "isConsolePresent" == c && (d = null != Mz());
                else if (Lz())
                    if ("pubads" == b || "companionAds" == b) {
                        d = a.ka;
                        var e = G().googletag;
                        if (null != e && null != e[b] && (e = e[b](),
                        null != e && (d = e[d],
                        null != d)))
                            try {
                                var f = d.apply(e, c)
                            } catch (g) {}
                        d = f
                    } else if ("console" == b) {
                        if (f = Mz(),
                        null != f && (e = f[a.ka],
                        null != e))
                            try {
                                e.apply(f, c)
                            } catch (g) {}
                    } else if (null === b)
                        if (d = a.ka,
                        hh(di))
                            "googleGetCompanionAdSlots" == d ? (c = Ez()) ? (c = c.getSlots().map(Fz),
                            d = c.length ? c : null) : d = null : ("googleSetCompanionAdContents" == d && Gz(c[0]),
                            d = null);
                        else {
                            f = G();
                            if (["googleGetCompanionAdSlots", "googleSetCompanionAdContents"].includes(d) && (d = f[d],
                            null != d))
                                try {
                                    e = d.apply(f, c)
                                } catch (g) {}
                            d = e
                        }
                void 0 !== d && (a.na.returnValue = d,
                Jz(this.l, a))
            }
    }
    ;
    Nz.prototype.A = function(a) {
        Jz(this.l, a)
    }
    ;
    var Oz = function(a, b) {
        if (a.g) {
            var c = a.g;
            uf(c.g[b]);
            delete c.g[b]
        }
        a.l && (a = a.l,
        uf(a.g[b]),
        delete a.g[b])
    };
    var Qz = function(a, b) {
        var c = Array.prototype.slice.call(arguments)
          , d = c.shift();
        if ("undefined" == typeof d)
            throw Error("[goog.string.format] Template required");
        return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, k, n, m, u) {
            if ("%" == n)
                return "%";
            var p = c.shift();
            if ("undefined" == typeof p)
                throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = p;
            return Pz[n].apply(null, arguments)
        })
    }
      , Pz = {
        s: function(a, b, c) {
            return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + Vc(" ", Number(c) - a.length) : Vc(" ", Number(c) - a.length) + a
        },
        f: function(a, b, c, d, e) {
            d = a.toString();
            isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
            var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
            0 <= Number(a) && (d = f + d);
            if (isNaN(c) || d.length >= Number(c))
                return d;
            d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
            a = Number(c) - d.length - f.length;
            return d = 0 <= b.indexOf("-", 0) ? f + d + Vc(" ", a) : f + Vc(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
        },
        d: function(a, b, c, d, e, f, g, h) {
            return Pz.f(parseInt(a, 10), b, c, d, 0, f, g, h)
        }
    };
    Pz.i = Pz.d;
    Pz.u = Pz.d;
    var Sz = function(a, b) {
        N.call(this);
        this.A = new rt(this);
        vf(this, this.A);
        this.M = this.L = null;
        this.K = !1;
        this.D = "goog_" + Xc++;
        this.B = new Map;
        var c = this.D
          , d = (mf() ? "https:" : "http:") + Qz("//imasdk.googleapis.com/js/core/bridge3.427.1_%s.html", W.l);
        a: {
            var e = window;
            try {
                do {
                    try {
                        if (0 == e.location.href.indexOf(d) || 0 == e.document.referrer.indexOf(d)) {
                            var f = !0;
                            break a
                        }
                    } catch (g) {}
                    e = e.parent
                } while (e != e.top)
            } catch (g) {}
            f = !1
        }
        f && (d += "?f=" + c);
        c = Ve("IFRAME", {
            src: d + "#" + c,
            allowFullscreen: !0,
            allow: "autoplay",
            style: "border:0; opacity:0; margin:0; padding:0; position:relative;"
        });
        this.A.vb(c, "load", this.Z);
        a.appendChild(c);
        this.g = c;
        this.o = Rz(this);
        this.G = b;
        this.h = null;
        this.N = new Cz(this.o,this.G);
        vf(this, this.N);
        this.G.h && this.A.U(this.o, "displayContainer", this.T);
        this.A.U(this.o, "mouse", this.V);
        this.A.U(this.o, "touch", this.X);
        c = G();
        d = La("google.ima.gptProxyInstance", c);
        null != d ? c = d : (d = new Nz,
        y("google.ima.gptProxyInstance", d, c),
        c = d);
        this.P = c;
        hh($h) && (this.I = new yz(a,this.o,b.h.N.g),
        vf(this, this.I))
    };
    t(Sz, N);
    var Rz = function(a, b) {
        b = void 0 === b ? "*" : b;
        var c = a.B.get(b);
        null == c && (c = new ny(a.D,b),
        a.K && (c.g = Ze(a.g),
        c.connect()),
        a.B.set(b, c));
        return c
    };
    Sz.prototype.R = function() {
        null !== this.h && (this.h.W(),
        this.h = null);
        this.B.forEach(function(a) {
            uf(a)
        });
        this.B.clear();
        Oz(this.P, this.D);
        We(this.g);
        N.prototype.R.call(this)
    }
    ;
    Sz.prototype.V = function(a) {
        var b = a.na
          , c = Zf(this.g)
          , d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.ka, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        this.g.dispatchEvent(d)
    }
    ;
    var Tz = function(a, b) {
        var c = Zf(a.g)
          , d = !!("TouchEvent"in window && 0 < TouchEvent.length);
        b = b.map(function(e) {
            return d ? new Touch({
                identifier: e.identifier,
                target: a.g,
                clientX: e.clientX,
                clientY: e.clientY,
                screenX: e.screenX,
                screenY: e.screenY,
                pageX: e.pageX + c.x,
                pageY: e.pageY + c.y
            }) : document.createTouch(window, a.g, e.identifier, e.pageX + c.x, e.pageY + c.y, e.screenX, e.screenY)
        });
        return d ? b : document.createTouchList.apply(document, b)
    };
    Sz.prototype.X = function(a) {
        var b = a.na
          , c = Zf(this.g);
        if ("TouchEvent"in window && 0 < TouchEvent.length)
            b = {
                bubbles: !0,
                cancelable: !0,
                view: window,
                detail: b.detail,
                ctrlKey: b.ctrlKey,
                altKey: b.altKey,
                shiftKey: b.shiftKey,
                metaKey: b.metaKey,
                touches: Tz(this, b.touches),
                targetTouches: Tz(this, b.targetTouches),
                changedTouches: Tz(this, b.changedTouches)
            },
            a = new TouchEvent(a.ka,b),
            this.g.dispatchEvent(a);
        else {
            var d = document.createEvent("TouchEvent");
            d.initTouchEvent(a.ka, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, Tz(this, b.touches), Tz(this, b.targetTouches), Tz(this, b.changedTouches), b.scale, b.rotation);
            this.g.dispatchEvent(d)
        }
    }
    ;
    Sz.prototype.T = function(a) {
        switch (a.ka) {
        case "showVideo":
            null == this.h ? (this.h = new jx,
            this.A.U(this.h, "click", this.$)) : nx(this.h);
            lx(this.h, Uz(this.G));
            break;
        case "hide":
            null !== this.h && (this.h.W(),
            this.h = null)
        }
        var b = this.N;
        Bz(b.l, a);
        b.g && Bz(b.g, a)
    }
    ;
    Sz.prototype.$ = function() {
        bx(this.o, "displayContainer", "videoClick")
    }
    ;
    Sz.prototype.Z = function() {
        var a = this;
        this.L = rg();
        this.M = og();
        this.B.forEach(function(b) {
            b.g = Ze(a.g);
            b.connect()
        });
        this.K = !0
    }
    ;
    var Wz = function() {
        N.call(this);
        this.buffered = new Vz;
        this.G = new Vz;
        this.B = new rt(this);
        vf(this, this.B);
        this.src = this.D = "";
        this.I = !1;
        this.o = null;
        var a = nw(W);
        if (a) {
            a: {
                if (Kb(a.g, "videoElementFakeDuration") && (a = a.g.videoElementFakeDuration,
                "number" === typeof a))
                    break a;
                a = NaN
            }
            this.duration = a
        }
    };
    t(Wz, N);
    var Xz = function() {
        var a = ["video/mp4"]
          , b = ["video/ogg"]
          , c = new Wz;
        c.canPlayType = function(d) {
            return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : ""
        }
        ;
        c.width = 0;
        c.height = 0;
        c.offsetWidth = 0;
        c.offsetHeight = 0;
        return c
    };
    l = Wz.prototype;
    l.pause = function() {
        this.paused || (null.stop(),
        this.paused = !0,
        this.dispatchEvent("timeupdate"),
        this.dispatchEvent("pause"))
    }
    ;
    l.load = function() {
        this.cd = 0;
        this.paused = !0;
        this.dispatchEvent("loadstart");
        var a;
        isNaN(this.duration) ? a = 10 + 20 * Math.random() : a = this.duration;
        this.setProperty("duration", a);
        a = this.G;
        a.g.push(new Yz(this.duration));
        a.length = a.g.length;
        a = this.buffered;
        a.g.push(new Yz(this.duration));
        a.length = a.g.length;
        this.dispatchEvent("loadedmetadata");
        0 < this.currentTime && this.dispatchEvent("timeupdate");
        this.dispatchEvent("loadeddata");
        this.dispatchEvent("canplay");
        this.dispatchEvent("canplaythrough");
        this.dispatchEvent("progress")
    }
    ;
    l.setProperty = function(a, b) {
        switch (a) {
        case "currentTime":
            a = Number(b);
            this.dispatchEvent("seeking");
            this.currentTime = a;
            this.dispatchEvent("seeked");
            a = z() - this.A;
            b = this.currentTime + a / 1E3;
            this.A += a;
            2 < this.cd && (this.currentTime = Math.min(b, this.duration));
            this.dispatchEvent("timeupdate");
            this.currentTime == this.duration && (this.paused = !0,
            null.stop(),
            this.dispatchEvent("ended"));
            break;
        case "duration":
            this.duration = Number(b);
            this.dispatchEvent("durationchange");
            break;
        case "volume":
            this.volume = Number(b);
            this.dispatchEvent("volumechange");
            break;
        default:
            throw "Property setter not implemented";
        }
    }
    ;
    l.setAttribute = function(a, b) {
        null != a && Zz.set(a, b)
    }
    ;
    l.getAttribute = function(a) {
        return Zz.get(a)
    }
    ;
    l.we = function(a) {
        var b = null
          , c = null;
        switch (a.type) {
        case "loadeddata":
            b = "Loaded";
            break;
        case "playing":
            b = "Playing";
            c = "#00f";
            break;
        case "pause":
            b = "Paused";
            break;
        case "ended":
            b = "Ended",
            c = "#000"
        }
        b && this.h && (this.h.innerText = b);
        c && this.g && (this.g.style.backgroundColor = c)
    }
    ;
    var Zz = new Fr
      , Yz = function(a) {
        this.endTime = a
    }
      , Vz = function() {
        this.length = 0;
        this.g = []
    };
    Vz.prototype.start = function() {
        return 0
    }
    ;
    l = Wz.prototype;
    l.cd = 0;
    l.currentTime = 0;
    l.duration = NaN;
    l.paused = !0;
    l.volume = 1;
    l.muted = !1;
    Object.defineProperty(Wz.prototype, "src", {
        get: function() {
            return Wz.prototype.D
        },
        set: function(a) {
            var b = Wz.prototype;
            b.I && null != b.o ? (b.o.reject(),
            b.o = null) : b.D = a
        }
    });
    Wz.prototype.A = 0;
    Wz.prototype.g = null;
    Wz.prototype.h = null;
    var bA = function(a, b) {
        H.call(this);
        this.o = a;
        this.l = this.g = null;
        this.h = $z();
        aA(this, b);
        zv(function() {
            K(J.C(), "haob", "1")
        })
    };
    t(bA, H);
    bA.prototype.initialize = function() {
        this.h && this.h.load()
    }
    ;
    bA.prototype.R = function() {
        We(this.g);
        H.prototype.R.call(this)
    }
    ;
    var aA = function(a, b) {
        a.g = Ve("DIV", {
            style: "display:none;"
        });
        a.o.appendChild(a.g);
        a.g.appendChild(a.h);
        b && (a.l = Ve("DIV", {
            style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
        }),
        a.g.appendChild(a.l))
    }
      , $z = function() {
        var a = nw(W);
        if (lw(a, "useVideoElementFake")) {
            a = Xz();
            var b = Ve("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
            });
            for (c in a)
                b[c] = a[c];
            a.g = Ve("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
            });
            a.h = Ve("P", {
                style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
            });
            a.g.appendChild(a.h);
            b.appendChild(a.g);
            a.B.U(a, ["loadeddata", "playing", "pause", "ended"], a.we);
            var c = b
        } else {
            c = !1;
            try {
                -1 != window.location.search.indexOf("goog_limavideo=true") && (c = !0)
            } catch (d) {}
            if (v.customElements && (c || (Jd ? 0 : hh(bi)))) {
                c && console.log("force lima video in wrapper");
                c = null;
                try {
                    c = new Mv
                } catch (d) {
                    c = Ve("lima-video")
                }
                c.style.backgroundColor = "#000";
                c.style.height = "100%";
                c.style.width = "100%";
                c.style.position = "absolute";
                c.style.left = "0";
                c.style.top = "0"
            } else
                c = Ve("VIDEO", {
                    style: "background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;",
                    title: Zv("Advertisement").toString()
                })
        }
        c.setAttribute("webkit-playsinline", !0);
        c.setAttribute("playsinline", !0);
        return c
    };
    bA.prototype.show = function() {
        Az(this.g, !0)
    }
    ;
    var Az = function(a, b) {
        null != a && (a.style.display = b ? "block" : "none")
    };
    var eA = function(a, b, c) {
        var d = a && a.getRootNode ? a.getRootNode({
            composed: !0
        }) : a;
        if (null == a || !Ye(Le(d), d))
            throw ix(hx, null, "containerElement", "element");
        this.B = b;
        this.Z = Lw(this.B || null);
        this.X = nt(this.B || null);
        this.V = String(Math.floor(1E9 * Math.random()));
        this.L = !1;
        this.I = a;
        this.N = null != b;
        W.g = 2;
        this.D = cA(b ? b : null);
        d = Ve("DIV", {
            style: "position:absolute"
        });
        a.insertBefore(d, a.firstChild);
        this.A = d;
        this.g = null;
        dA(this) && b ? a = new nz(b) : (this.g = new bA(this.A,!0),
        a = new nz(this.g.h));
        this.h = a;
        this.l = this.o = null;
        if (a = this.g && W.isAutoPlayAdBreaks())
            a = !(dA(this) || vd || xd || dm() || ud && (!ud || !kt(jt, 4)));
        a && (this.o = new bA(this.A,!0),
        this.l = new nz(this.o.h));
        this.H = c || null;
        this.T = null != this.H;
        dA(this) && b ? "function" !== typeof b.getBoundingClientRect ? (c = this.A,
        W.o = c) : c = b : c = this.A;
        this.G = c;
        this.J = new Sz(this.A,this);
        this.P = new Je(0,0);
        this.K = "";
        b && (b = b.src || b.currentSrc,
        b = b instanceof Q ? b.I() : new Q(b,void 0),
        200 > b.toString().length ? this.K = b.toString() : 200 > b.h.length && (this.K = b.h));
        this.M = new Map;
        this.M.set("videoDisplay1", this.h);
        this.l && this.M.set("videoDisplay2", this.l)
    };
    eA.prototype.initialize = function() {
        this.L = !0;
        null != this.g && this.g.initialize();
        null != this.o && this.o.initialize()
    }
    ;
    eA.prototype.destroy = function() {
        var a = this;
        this.B = null;
        uf(this.g);
        uf(this.o);
        uf(this.J);
        this.h.Rb(function() {
            return uf(a.h)
        });
        null != this.l && this.l.Rb(function() {
            return uf(a.l)
        });
        We(this.A)
    }
    ;
    var Uz = function(a) {
        return a.T && a.H ? a.H : null != a.g ? a.g.l : null
    }
      , dA = function(a) {
        return Kw(a.D) && a.N
    }
      , cA = function(a) {
        return null != a && "function" === typeof a.getAttribute && null != a.getAttribute("playsinline") ? !0 : !1
    };
    eA.prototype.destroy = eA.prototype.destroy;
    eA.prototype.initialize = eA.prototype.initialize;
    var fA = function(a) {
        var b = Error.call(this);
        this.message = b.message;
        "stack"in b && (this.stack = b.stack);
        this.g = a
    };
    t(fA, Error);
    l = fA.prototype;
    l.getInnerError = function() {
        var a = this.g.innerError;
        return a instanceof Object ? new fA(a) : null != a ? Error(a) : null
    }
    ;
    l.getMessage = function() {
        return this.g.errorMessage
    }
    ;
    l.getErrorCode = function() {
        return this.g.errorCode
    }
    ;
    l.bd = function() {
        var a = this.getErrorCode();
        return 1E3 > a ? a : 900
    }
    ;
    l.getType = function() {
        return this.g.type
    }
    ;
    l.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "")
    }
    ;
    fA.prototype.getType = fA.prototype.getType;
    fA.prototype.getVastErrorCode = fA.prototype.bd;
    fA.prototype.getErrorCode = fA.prototype.getErrorCode;
    fA.prototype.getMessage = fA.prototype.getMessage;
    fA.prototype.getInnerError = fA.prototype.getInnerError;
    var gA = {
        AD_LOAD: "adLoadError",
        AD_PLAY: "adPlayError"
    };
    y("module$contents$ima$AdError_AdError.Type", gA, void 0);
    var hA = function(a, b) {
        b = void 0 === b ? null : b;
        pi.call(this, "adError");
        this.g = a;
        this.l = b
    };
    t(hA, pi);
    hA.prototype.getError = function() {
        return this.g
    }
    ;
    hA.prototype.getUserRequestContext = function() {
        return this.l
    }
    ;
    hA.prototype.getUserRequestContext = hA.prototype.getUserRequestContext;
    hA.prototype.getError = hA.prototype.getError;
    var iA = {
        AD_ERROR: "adError"
    };
    y("module$contents$ima$AdErrorEvent_AdErrorEvent.Type", iA, void 0);
    var jA = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        pi.call(this, a);
        this.o = b;
        this.l = c
    };
    t(jA, pi);
    jA.prototype.getAd = function() {
        return this.o
    }
    ;
    jA.prototype.getAdData = function() {
        return this.l
    }
    ;
    jA.prototype.getAdData = jA.prototype.getAdData;
    jA.prototype.getAd = jA.prototype.getAd;
    var kA = {
        AD_CAN_PLAY: "adCanPlay",
        df: "adStarted",
        CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
        CONTENT_RESUME_REQUESTED: "contentResumeRequested",
        CLICK: "click",
        VIDEO_CLICKED: "videoClicked",
        VIDEO_ICON_CLICKED: "videoIconClicked",
        Oc: "engagedView",
        EXPANDED_CHANGED: "expandedChanged",
        STARTED: "start",
        AD_PROGRESS: "adProgress",
        AD_BUFFERING: "adBuffering",
        IMPRESSION: "impression",
        Qc: "measurable_impression",
        VIEWABLE_IMPRESSION: "viewable_impression",
        Pc: "fully_viewable_audible_half_duration_impression",
        Id: "overlay_resize",
        Jd: "overlay_unmeasurable_impression",
        Kd: "overlay_unviewable_impression",
        Md: "overlay_viewable_immediate_impression",
        Ld: "overlay_viewable_end_of_session_impression",
        Cf: "externalActivityEvent",
        PAUSED: "pause",
        RESUMED: "resume",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        DURATION_CHANGE: "durationChange",
        USER_CLOSE: "userClose",
        Lg: "userRecall",
        ug: "prefetched",
        LOADED: "loaded",
        ALL_ADS_COMPLETED: "allAdsCompleted",
        SKIPPED: "skip",
        Pd: "skipShown",
        LINEAR_CHANGED: "linearChanged",
        SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
        AD_METADATA: "adMetadata",
        cf: "adBreakFetchError",
        AD_BREAK_READY: "adBreakReady",
        LOG: "log",
        VOLUME_CHANGED: "volumeChange",
        VOLUME_MUTED: "mute",
        INTERACTION: "interaction",
        qf: "companionBackfill",
        Ig: "trackingUrlPinged",
        Ng: "video_card_endcap_collapse",
        Og: "video_card_endcap_dismiss",
        Pg: "video_card_endcap_impression",
        tf: "companionInitialized",
        sf: "companionImpression",
        rf: "companionClick",
        hg: "mediaUrlPinged",
        Fd: "loadStart",
        kg: "navigationRequested"
    };
    y("module$contents$ima$AdEvent_AdEvent.Type", kA, void 0);
    var lA = function(a, b) {
        b = void 0 === b ? null : b;
        jA.call(this, "adMetadata", a);
        this.g = b
    };
    t(lA, jA);
    lA.prototype.he = function() {
        return this.g
    }
    ;
    lA.prototype.getAdCuePoints = lA.prototype.he;
    var mA = function(a) {
        this.adBreakDuration = a.adBreakDuration;
        this.adPosition = a.adPosition;
        this.currentTime = a.currentTime;
        this.duration = a.duration;
        this.totalAds = a.totalAds
    };
    var nA = function(a, b) {
        N.call(this);
        this.o = a;
        this.B = b;
        this.h = this.o.currentTime;
        this.g = new vj(250);
        vf(this, this.g);
        this.A = new rt(this);
        vf(this, this.A);
        ut(this.A, this.g, "tick", this.D, !1, this)
    };
    t(nA, N);
    nA.prototype.Ua = function() {
        return this.h
    }
    ;
    nA.prototype.start = function() {
        oA(this);
        this.g.start()
    }
    ;
    nA.prototype.stop = function() {
        this.g.stop()
    }
    ;
    nA.prototype.D = function() {
        var a = this.o.currentTime;
        a != this.Ua() && (this.h = a,
        oA(this))
    }
    ;
    var oA = function(a) {
        var b = {};
        b.currentTime = a.Ua();
        bx(a.B, "contentTimeUpdate", "contentTimeUpdate", b)
    };
    var pA = function(a, b, c) {
        N.call(this);
        this.h = a;
        this.g = null;
        this.K = "";
        this.L = Cc;
        this.M = 0;
        this.D = this.o = null;
        this.A = b;
        this.B = null;
        this.G = "";
        this.I = c
    };
    t(pA, N);
    pA.prototype.init = function(a) {
        this.G = a;
        a = "about:self";
        od && (a = "");
        this.o = Ve("IFRAME", {
            src: a,
            allowtransparency: !0,
            background: "transparent"
        });
        Vf(this.o, {
            display: "none",
            width: "0",
            height: "0"
        });
        a = this.h.I;
        a.appendChild(this.o);
        a = a.ownerDocument;
        a = a.defaultView || a.parentWindow;
        null == this.B && (this.B = new rt(this));
        this.B.U(a, "message", this.N);
        a = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' + (this.G + '");\x3c/script></body>');
        if (Nd || Jd || pd) {
            var b = this.o.contentWindow;
            b && bz(b.document, a)
        } else
            cz(this.o, a)
    }
    ;
    pA.prototype.N = function(a) {
        try {
            var b = a.g.data;
            try {
                var c = JSON.parse(b)
            } catch (ma) {
                return
            }
            var d = c.session;
            if (null != d && this.G == d)
                switch (c.type) {
                case "friendlyReady":
                    var e = qA(this);
                    if (null != e) {
                        this.g = e;
                        this.K = e.currentSrc;
                        var f = e.style.cssText;
                        if (od && 10 > document.documentMode)
                            var g = Cc;
                        else {
                            var h = document;
                            "function" === typeof HTMLTemplateElement && (h = Te(document, "TEMPLATE").content.ownerDocument);
                            var k = h.implementation.createHTMLDocument("").createElement("DIV");
                            k.style.cssText = f;
                            g = hw(k.style)
                        }
                        this.L = g;
                        this.M = e.currentTime
                    } else {
                        var n = this.h.I
                          , m = this.h.P;
                        var u = "border: 0; margin: 0; padding: 0; position: absolute; width:" + (m.width + "px; ");
                        u += "height:" + m.height + "px;";
                        this.g = Ve("VIDEO", {
                            style: u,
                            autoplay: !0
                        });
                        n.appendChild(this.g)
                    }
                    var p = this.h.I;
                    e = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var w = cg(this.g);
                    e += "width:" + w.width + "px; ";
                    e += "height:" + w.height + "px;";
                    this.D = Ve("DIV", {
                        style: e
                    });
                    p.appendChild(this.D);
                    try {
                        this.o.contentWindow.loader.initFriendly(this.g, this.D)
                    } catch (ma) {
                        rA(this)
                    }
                    bx(this.A, "vpaid", "", b);
                    break;
                case "becameLinear":
                    this.g && !bf() && !af() && Vf(this.g, {
                        visibility: "visible"
                    });
                    bx(this.A, "vpaid", "", b);
                    break;
                case "becameNonlinear":
                    sA(this);
                    bx(this.A, "vpaid", "", b);
                    break;
                case "startAd":
                    p = {};
                    if (this.g) {
                        h = this.g.paused;
                        var x = 0 < this.g.currentTime;
                        p.apl = x && !h ? "1" : "0";
                        p.ip = h ? "1" : "0";
                        p.iavp = x ? "1" : "0"
                    } else
                        p.apl = "n";
                    Jx.C().report(99, p);
                    bx(this.A, "vpaid", "", b);
                    if (null != qA(this)) {
                        var A = this.h;
                        null != A.g && A.g.show()
                    }
                    break;
                default:
                    bx(this.A, "vpaid", "", b)
                }
        } catch (ma) {
            rA(this)
        }
    }
    ;
    var rA = function(a) {
        var b = {
            type: "error"
        };
        b.session = a.G;
        a = Xg(b);
        window.postMessage(a, "*")
    }
      , qA = function(a) {
        return ("videoDisplayUnknown" == a.I ? a.h.h : a.h.M.get(a.I)).N.g
    }
      , sA = function(a) {
        a.g && !bf() && !af() && Vf(a.g, {
            visibility: "hidden"
        })
    };
    pA.prototype.R = function() {
        N.Ca.R.call(this);
        uf(this.B);
        this.B = null;
        We(this.D);
        this.D = null;
        We(this.o);
        this.o = null;
        var a = qA(this);
        if (null != a) {
            var b = this.L;
            a.style.cssText = b instanceof Bc && b.constructor === Bc ? b.g : "type_error:SafeStyle";
            bf() || af() ? (a.src = this.K,
            a.currentTime = this.M) : (a.removeAttribute("src"),
            a = this.h,
            null != a.g && Az(a.g.g, !1))
        } else
            We(this.g),
            this.g = null
    }
    ;
    var tA = function(a, b) {
        H.call(this);
        this.l = a;
        this.h = b;
        this.g = new Map
    };
    t(tA, H);
    var uA = function(a, b) {
        try {
            var c = b.na
              , d = c.session;
            switch (c.vpaidEventType) {
            case "createFriendlyIframe":
                b = "videoDisplayUnknown";
                c.videoDisplayName && (b = c.videoDisplayName);
                var e = c.session
                  , f = new pA(a.l,a.h,b);
                a.g.set(e, f);
                f.init(e);
                break;
            case "vpaidNonLinear":
                var g = a.g.get(d);
                g && sA(g);
                break;
            case "destroyFriendlyIframe":
                var h = a.g.get(d);
                h && (h.W(),
                a.g.delete(d))
            }
        } catch (k) {
            Jx.C().report(125, {
                msg: k.message
            })
        }
    };
    tA.prototype.R = function() {
        this.g.forEach(function(a) {
            return a.W()
        })
    }
    ;
    var vA = function() {
        this.g = [];
        this.h = []
    }
      , wA = function(a) {
        return 0 == a.g.length && 0 == a.h.length
    };
    vA.prototype.remove = function(a) {
        var b = this.g;
        b: {
            var c = b.length - 1;
            0 > c && (c = Math.max(0, b.length + c));
            if ("string" === typeof b)
                c = "string" !== typeof a || 1 != a.length ? -1 : b.lastIndexOf(a, c);
            else {
                for (; 0 <= c; c--)
                    if (c in b && b[c] === a)
                        break b;
                c = -1
            }
        }
        0 <= c ? (ob(b, c),
        b = !0) : b = !1;
        return b || nb(this.h, a)
    }
    ;
    vA.prototype.Va = function() {
        for (var a = [], b = this.g.length - 1; 0 <= b; --b)
            a.push(this.g[b]);
        var c = this.h.length;
        for (b = 0; b < c; ++b)
            a.push(this.h[b]);
        return a
    }
    ;
    var Z = function(a, b, c, d, e, f, g) {
        N.call(this);
        var h = this;
        this.M = a;
        this.g = b;
        this.K = c;
        this.$d = e;
        this.A = new dy;
        this.I = g;
        this.L = !1;
        this.T = 1;
        this.Zd = d;
        this.fa = -1;
        this.o = this.h = null;
        this.G = new nA({
            currentTime: 0
        },this.I);
        this.D = new vA;
        this.yb = this.$ = !1;
        this.V = new Map;
        this.X = this.va = !1;
        this.Da = new tA(b,g);
        vf(this, this.Da);
        this.N = f && null != this.g.H;
        this.P = function() {
            var k = h.g.h
              , n = k.g.currentTime;
            k = k.getDuration();
            return {
                currentTime: n,
                duration: k,
                isPlaying: !0,
                volume: h.T
            }
        }
        ;
        this.Z = new rt(this);
        this.Z.U(this.I, "adsManager", this.ee)
    };
    t(Z, N);
    Z.prototype.ee = function(a) {
        var b = this
          , c = a.ka
          , d = a.na;
        switch (c) {
        case "error":
            xA(this);
            yA(this, d);
            break;
        case "contentPauseRequested":
            Jx.C().report(130);
            zA(this);
            AA(this, c, d);
            break;
        case "contentResumeRequested":
            BA(this, function() {
                return AA(b, c, d)
            });
            break;
        case "remainingTime":
            this.fa = d.remainingTime;
            break;
        case "skip":
            AA(this, c, d);
            break;
        case "log":
            AA(this, c, d, d.logData);
            break;
        case "companionBackfill":
            a = La("window.google_show_companion_ad");
            null != a && a();
            break;
        case "skipShown":
            this.L = !0;
            AA(this, c, d);
            break;
        case "interaction":
            AA(this, c, d, d.interactionData);
            break;
        case "vpaidEvent":
            uA(this.Da, a);
            break;
        case "skippableStateChanged":
            a = d.adData;
            null != a.skippable && (this.L = a.skippable);
            AA(this, c, d);
            break;
        case "volumeChange":
            a = d.adData;
            null != a && "number" === typeof a.volume && (this.T = a.volume);
            AA(this, c, d);
            break;
        case "firstQuartile":
            AA(this, $w.firstQuartile, d);
            AA(this, c, d);
            break;
        case "thirdQuartile":
            AA(this, $w.thirdQuartile, d);
            AA(this, c, d);
            break;
        default:
            AA(this, c, d)
        }
    }
    ;
    var AA = function(a, b, c, d) {
        if (null == c.companions) {
            var e = a.V.get(c.adId);
            c.companions = null != e ? e : []
        }
        var f = c.adData;
        if (e = null == f ? null : new Y(f))
            a.h = e;
        switch (b) {
        case "adBreakReady":
        case "mediaUrlPinged":
            b = new jA(b,null,c);
            break;
        case "adMetadata":
            b = null;
            null != c.adCuePoints && (b = new iz(c.adCuePoints));
            b = new lA(e,b);
            break;
        case "allAdsCompleted":
            a.h = null;
            a.va = !0;
            b = new jA(b,e);
            break;
        case "contentPauseRequested":
            a.X = !1;
            b = new jA(b,e);
            break;
        case "contentResumeRequested":
            a.h = null;
            a.X = !0;
            b = new jA(b,e);
            break;
        case "loaded":
            a.fa = e.getDuration();
            a.L = !1;
            Mw() && (d = a.M,
            c = a.$d,
            d.h.set(Px(e), a.P),
            (0 != W.g ? qq.C().l : d.B) && Xx(d, "loaded", Px(e), c));
            b = new jA(b,e,f);
            break;
        case "start":
            a.V.set(c.adId, c.companions);
            null != Uz(a.g) && (null == a.o ? (a.o = new jx,
            a.Z.U(a.o, "click", a.Ke)) : nx(a.o),
            lx(a.o, Uz(a.g)));
            b = new jA(b,e);
            break;
        case "complete":
            null != a.o && nx(a.o);
            Mw() && Zx(a.M, a.P, Px(e));
            a.h = null;
            a.V.delete(c.adId);
            b = new jA(b,e);
            break;
        case "log":
            c = null;
            null != d && null != d.type ? (f = d.type,
            f = "adLoadError" == f || "adPlayError" == f) : f = !1;
            f && (c = {
                adError: new fA(d)
            });
            b = new jA(b,e,c);
            break;
        case "interaction":
            b = new jA(b,e,d);
            break;
        case "adProgress":
            b = new jA(b,e,new mA(c));
            break;
        default:
            b = new jA(b,e)
        }
        a.dispatchEvent(b);
        a.va && a.X && a.destroy()
    }
      , yA = function(a, b) {
        var c = new hA(new fA(b));
        a.$ ? (a.dispatchEvent(c),
        Mw() && a.h && Zx(a.M, a.P, Px(a.h)),
        a.h = null) : a.D.h.push(c);
        a = {
            error: b.errorCode,
            vis: Ag(document)
        };
        Jx.C().report(7, a)
    }
      , CA = function(a, b, c) {
        bx(a.I, "adsManager", b, c)
    }
      , BA = function(a, b) {
        Jx.C().report(131);
        xA(a, b)
    }
      , zA = function(a) {
        var b = a.g.h;
        dA(a.g) && a.A.restoreCustomPlaybackStateOnAdBreakComplete && null != b.hd && b.hd()
    }
      , xA = function(a, b) {
        var c = a.g.h;
        dA(a.g) && a.A.restoreCustomPlaybackStateOnAdBreakComplete && null != c.Rb ? c.Rb(b) : b && b()
    };
    l = Z.prototype;
    l.init = function(a, b, c, d) {
        if (wA(this.D)) {
            var e = this.g
              , f = null;
            e.B && null == d && (f = {
                vd: "setnull"
            });
            e.B && e.B === d && (f = {
                vd: "match"
            });
            if (e.B && e.B !== d) {
                f = Lw(d || null);
                var g = nt(d || null);
                f = {
                    vd: "diff",
                    oc: e.Z,
                    nc: f,
                    oi: e.X,
                    ni: g
                }
            }
            !e.B && d && (f = {
                vd: "new"
            });
            f && (f.custVid = e.V,
            Jx.C().report(93, f));
            null != d && (e.D = cA(d),
            Kw(e.D) && (e.N = !0,
            uf(e.g),
            uf(e.o),
            uf(e.l),
            e.g = null,
            e.o = null,
            e.l = null,
            uf(e.h),
            e.h = new nz(d),
            "function" !== typeof d.getBoundingClientRect ? (e.G = e.A,
            W.o = e.G) : e.G = d,
            d = e.J,
            d.I && (d = d.I,
            e = e.h.N.g,
            d.A = e,
            d.g && (d = d.g,
            d.h = e,
            gz(d, e)))));
            this.$ = !0;
            this.resize(a, b, c);
            e = ey(this.A, this.N);
            CA(this, "init", {
                adsRenderingSettings: e,
                width: a,
                height: b,
                viewMode: c
            })
        } else {
            for (; !wA(this.D); )
                b = a = this.D,
                0 == b.g.length && (b.g = b.h,
                b.g.reverse(),
                b.h = []),
                a = a.g.pop(),
                this.dispatchEvent(a);
            this.W()
        }
    }
    ;
    l.Ae = function() {
        return dA(this.g)
    }
    ;
    l.ze = function() {
        return this.N
    }
    ;
    l.getRemainingTime = function() {
        return this.fa
    }
    ;
    l.getAdSkippableState = function() {
        return this.L
    }
    ;
    l.fe = function() {
        CA(this, "discardAdBreak")
    }
    ;
    l.updateAdsRenderingSettings = function(a) {
        if (null != a) {
            var b = this.A.bitrate
              , c = a.bitrate;
            Jx.C().report(96, {
                init: this.$ ? "1" : "0",
                start: this.yb ? "1" : "0",
                old: b,
                "new": c,
                changed: b != c ? "1" : "0"
            });
            this.A = a;
            a = ey(this.A, this.N);
            CA(this, "updateAdsRenderingSettings", {
                adsRenderingSettings: a
            })
        }
    }
    ;
    l.skip = function() {
        CA(this, "skip")
    }
    ;
    l.start = function() {
        if (this.K) {
            (vd || xd) && Jx.C().report(50, {
                customPlayback: dA(this.g)
            });
            this.g.L || Jx.C().report(26, {
                adtagurl: this.K,
                customPlayback: dA(this.g)
            });
            Yl(this.g.A) && Jx.C().report(30, {
                adtagurl: this.K,
                customPlayback: dA(this.g)
            });
            var a = this.g.H, b = this.g.A, c;
            if (c = a && b && !Yl(a))
                a = Vx(a),
                b = Vx(b),
                c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            c && Jx.C().report(31, {
                adtagurl: this.K,
                customPlayback: dA(this.g)
            })
        }
        if (!this.g.L && !dA(this.g))
            throw ix(gx);
        b = this.g;
        b.T = this.N && null != b.H;
        this.g.J.g.style.opacity = 1;
        null != this.B && 1 == this.getVolume() && ("boolean" === typeof this.B.muted && this.B.muted ? this.setVolume(0) : "number" === typeof this.B.volume && (b = this.B.volume,
        0 <= b && 1 >= b && this.setVolume(this.B.volume)));
        this.yb = !0;
        CA(this, "start")
    }
    ;
    l.Ke = function() {
        if (!this.A.disableClickThrough && null != this.h) {
            var a = this.h.g.clickThroughUrl;
            null != a && Jt(a)
        }
    }
    ;
    l.resize = function(a, b, c) {
        var d = this.g
          , e = d.A;
        null != e && (-1 == a ? (e.style.right = "0",
        e.style.left = "0") : e.style.width = a + "px",
        -1 == b ? (e.style.bottom = "0",
        e.style.top = "0") : e.style.height = b + "px");
        e = d.J;
        e.g.width = -1 == a ? "100%" : a;
        e.g.height = -1 == b ? "100%" : b;
        try {
            e.g.offsetTop = e.g.offsetTop
        } catch (f) {}
        d.P = new Je(a,b);
        CA(this, "resize", {
            width: a,
            height: b,
            viewMode: c
        })
    }
    ;
    l.stop = function() {
        CA(this, "stop")
    }
    ;
    l.expand = function() {
        CA(this, "expand")
    }
    ;
    l.collapse = function() {
        CA(this, "collapse")
    }
    ;
    l.getVolume = function() {
        return this.T
    }
    ;
    l.setVolume = function(a) {
        this.T = a;
        this.g.h.setVolume(a);
        CA(this, "volume", {
            volume: a
        })
    }
    ;
    l.pause = function() {
        CA(this, "pause")
    }
    ;
    l.resume = function() {
        CA(this, "resume")
    }
    ;
    l.destroy = function() {
        this.W()
    }
    ;
    l.getCuePoints = function() {
        return this.Zd
    }
    ;
    l.getCurrentAd = function() {
        return this.h
    }
    ;
    l.R = function() {
        CA(this, "destroy");
        null != this.o && this.o.W();
        this.Z.W();
        var a = this.D;
        a.g = [];
        a.h = [];
        this.G && (this.G.stop(),
        this.G.W());
        Mw() && Zx(this.M, this.P);
        N.prototype.R.call(this)
    }
    ;
    l.clicked = function() {
        Jx.C().report(124, {
            api: "clicked"
        });
        var a = this.h && this.h.g.clickThroughUrl;
        a && this.h.isUiDisabled() && Jt(a);
        CA(this, "click")
    }
    ;
    l.focus = function() {
        bx(this.I, "userInteraction", "focusUiElement")
    }
    ;
    Z.prototype.clicked = Z.prototype.clicked;
    Z.prototype.getCurrentAd = Z.prototype.getCurrentAd;
    Z.prototype.getCuePoints = Z.prototype.getCuePoints;
    Z.prototype.destroy = Z.prototype.destroy;
    Z.prototype.resume = Z.prototype.resume;
    Z.prototype.pause = Z.prototype.pause;
    Z.prototype.setVolume = Z.prototype.setVolume;
    Z.prototype.getVolume = Z.prototype.getVolume;
    Z.prototype.collapse = Z.prototype.collapse;
    Z.prototype.expand = Z.prototype.expand;
    Z.prototype.stop = Z.prototype.stop;
    Z.prototype.resize = Z.prototype.resize;
    Z.prototype.start = Z.prototype.start;
    Z.prototype.skip = Z.prototype.skip;
    Z.prototype.updateAdsRenderingSettings = Z.prototype.updateAdsRenderingSettings;
    Z.prototype.discardAdBreak = Z.prototype.fe;
    Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
    Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
    Z.prototype.isCustomClickTrackingUsed = Z.prototype.ze;
    Z.prototype.isCustomPlaybackUsed = Z.prototype.Ae;
    Z.prototype.init = Z.prototype.init;
    var DA = function(a, b) {
        pi.call(this, "adsManagerLoaded");
        this.g = a;
        this.l = b
    };
    t(DA, pi);
    DA.prototype.getAdsManager = function(a, b) {
        a = a || {
            currentTime: null
        };
        var c = this.g;
        c.B = a;
        null != a.currentTime && (c.G = new nA(a,c.I),
        c.G.start());
        null != b && (c.A = b);
        return this.g
    }
    ;
    DA.prototype.getUserRequestContext = function() {
        return this.l
    }
    ;
    DA.prototype.getUserRequestContext = DA.prototype.getUserRequestContext;
    DA.prototype.getAdsManager = DA.prototype.getAdsManager;
    var EA = {
        ADS_MANAGER_LOADED: "adsManagerLoaded"
    };
    y("module$contents$ima$AdsManagerLoadedEvent_AdsManagerLoadedEvent.Type", EA, void 0);
    var FA = function() {
        this.videoPlayMuted = this.videoPlayActivation = "unknown";
        this.videoContinuousPlay = "0";
        this.nonLinearAdSlotHeight = this.nonLinearAdSlotWidth = this.linearAdSlotHeight = this.linearAdSlotWidth = this.liveStreamPrefetchSeconds = 0;
        this.forceNonLinearFullSlot = !1;
        this.vastLoadTimeout = 5E3;
        this.omidAccessModeRules = {}
    };
    FA.prototype.setAdWillAutoPlay = function(a) {
        this.videoPlayActivation = a ? "auto" : "click"
    }
    ;
    FA.prototype.setAdWillPlayMuted = function(a) {
        this.videoPlayMuted = a ? "muted" : "unmuted"
    }
    ;
    FA.prototype.setContinuousPlayback = function(a) {
        this.videoContinuousPlay = a ? "2" : "1"
    }
    ;
    FA.prototype.setContinuousPlayback = FA.prototype.setContinuousPlayback;
    FA.prototype.setAdWillPlayMuted = FA.prototype.setAdWillPlayMuted;
    FA.prototype.setAdWillAutoPlay = FA.prototype.setAdWillAutoPlay;
    var GA = function(a) {
        try {
            var b = new Q(a);
            if (!b.h.includes(".cdn.ampproject.org"))
                return null;
            var c = b.g.split("/").slice(1);
            if ("s" == c[1] && 3 > c.length)
                return null;
            if (2 > c.length)
                return a;
            var d = "s" == c[1];
            c = d ? c.slice(2) : c.slice(1);
            var e = decodeURIComponent(c[0]) + "/";
            return d ? "https://" + e + c.slice(1).join("/") : "http://" + e + c.slice(1).join("/")
        } catch (f) {
            return null
        }
    };
    function HA(a, b, c) {
        c = void 0 === c ? document : c;
        c = void 0 === c ? document : c;
        b = de(b, 5) ? c.cookie : null;
        return null === b ? null : (new te({
            cookie: b
        })).get(a) || ""
    }
    ;var IA = function() {
        this.g = window;
        this.h = 0
    };
    var JA = {};
    var KA = function(a, b, c) {
        var d = "script";
        d = void 0 === d ? "" : d;
        var e = a.createElement("link");
        try {
            e.rel = "preload",
            e.href = pc("preload", "stylesheet") ? bc(b).toString() : b instanceof ac ? bc(b).toString() : b instanceof tc ? uc(b) : uc(yc(b))
        } catch (f) {
            return
        }
        d && (e.as = d);
        c && e.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0])
            try {
                a.appendChild(e)
            } catch (f) {}
    };
    var LA = /^\.google\.(com?\.)?[a-z]{2,3}$/, MA = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/, NA = v, PA = function(a) {
        a = "https://adservice" + (a + "/adsid/integrator.js");
        var b = ["domain=" + encodeURIComponent(v.location.hostname)];
        OA[3] >= z() && b.push("adsid=" + encodeURIComponent(OA[1]));
        (void 0 == JA.enable_mustu_exp_behavior ? 0 : JA.enable_mustu_exp_behavior) && b.push("meb=1");
        return a + "?" + b.join("&")
    }, OA, QA, RA = function() {
        NA = v;
        OA = NA.googleToken = NA.googleToken || {};
        var a = z();
        OA[1] && OA[3] > a && 0 < OA[2] || (OA[1] = "",
        OA[2] = -1,
        OA[3] = -1,
        OA[4] = "",
        OA[6] = "");
        QA = NA.googleIMState = NA.googleIMState || {};
        a = QA[1];
        LA.test(a) && !MA.test(a) || (QA[1] = ".google.com");
        Array.isArray(QA[5]) || (QA[5] = []);
        "boolean" !== typeof QA[6] && (QA[6] = !1);
        Array.isArray(QA[7]) || (QA[7] = []);
        "number" !== typeof QA[8] && (QA[8] = 0)
    }, SA = {
        kc: function() {
            return 0 < QA[8]
        },
        Oe: function() {
            QA[8]++
        },
        Pe: function() {
            0 < QA[8] && QA[8]--
        },
        Qe: function() {
            QA[8] = 0
        },
        bh: function() {
            return !1
        },
        $c: function() {
            return QA[5]
        },
        Vc: function(a) {
            try {
                a()
            } catch (b) {
                v.setTimeout(function() {
                    throw b;
                }, 0)
            }
        },
        pd: function() {
            if (!SA.kc()) {
                var a = v.document
                  , b = function(e) {
                    e = PA(e);
                    a: {
                        try {
                            var f = Ja();
                            break a
                        } catch (g) {}
                        f = void 0
                    }
                    KA(a, e, f);
                    f = a.createElement("script");
                    f.type = "text/javascript";
                    f.onerror = function() {
                        return v.processGoogleToken({}, 2)
                    }
                    ;
                    e = Tf(e);
                    Rc(f, e);
                    try {
                        (a.head || a.body || a.documentElement).appendChild(f),
                        SA.Oe()
                    } catch (g) {}
                }
                  , c = QA[1];
                b(c);
                ".google.com" != c && b(".google.com");
                b = {};
                var d = (b.newToken = "FBT",
                b);
                v.setTimeout(function() {
                    return v.processGoogleToken(d, 1)
                }, 1E3)
            }
        }
    }, TA = function(a) {
        RA();
        var b = NA.googleToken[5] || 0;
        a && (0 != b || OA[3] >= z() ? SA.Vc(a) : (SA.$c().push(a),
        SA.pd()));
        OA[3] >= z() && OA[2] >= z() || SA.pd()
    }, UA = function(a) {
        v.processGoogleToken = v.processGoogleToken || function(b, c) {
            var d = b;
            d = void 0 === d ? {} : d;
            c = void 0 === c ? 0 : c;
            b = d.newToken || "";
            var e = "NT" == b
              , f = parseInt(d.freshLifetimeSecs || "", 10)
              , g = parseInt(d.validLifetimeSecs || "", 10)
              , h = d["1p_jar"] || "";
            d = d.pucrd || "";
            RA();
            1 == c ? SA.Qe() : SA.Pe();
            var k = NA.googleToken = NA.googleToken || {}
              , n = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
            e = e && !SA.kc() && (!(OA[3] >= z()) || "NT" == OA[1]);
            var m = !(OA[3] >= z()) && 0 != c;
            if (n || e || m)
                e = z(),
                f = e + 1E3 * f,
                g = e + 1E3 * g,
                1E-5 > Math.random() && Bf(v, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c),
                k[5] = c,
                k[1] = b,
                k[2] = f,
                k[3] = g,
                k[4] = h,
                k[6] = d,
                RA();
            if (n || !SA.kc()) {
                c = SA.$c();
                for (b = 0; b < c.length; b++)
                    SA.Vc(c[b]);
                c.length = 0
            }
        }
        ;
        TA(a)
    };
    var VA = function(a, b) {
        b = void 0 === b ? 500 : b;
        H.call(this);
        this.h = a;
        this.g = null;
        this.o = {};
        this.A = 0;
        this.B = b;
        this.l = null
    };
    t(VA, H);
    VA.prototype.R = function() {
        this.o = {};
        this.l && (Ee(this.h, "message", this.l),
        delete this.l);
        delete this.o;
        delete this.h;
        delete this.g;
        H.prototype.R.call(this)
    }
    ;
    var XA = function(a) {
        return "function" === typeof a.h.__uspapi || null != WA(a)
    }
      , ZA = function(a, b) {
        var c = {};
        if (XA(a)) {
            var d = zb(function() {
                return b(c)
            });
            YA(a, function(e, f) {
                f && (c = e);
                d()
            });
            setTimeout(d, a.B)
        } else
            b(c)
    }
      , YA = function(a, b) {
        if ("function" === typeof a.h.__uspapi)
            a = a.h.__uspapi,
            a("getUSPData", 1, b);
        else if (WA(a)) {
            $A(a);
            var c = ++a.A;
            a.o[c] = b;
            a.g && (b = {},
            a.g.postMessage((b.__uspapiCall = {
                command: "getUSPData",
                version: 1,
                callId: c
            },
            b), "*"))
        }
    }
      , WA = function(a) {
        if (a.g)
            return a.g;
        a.g = qf(a.h, "__uspapiLocator");
        return a.g
    }
      , $A = function(a) {
        a.l || (a.l = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__uspapiReturn;
                a.o[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        De(a.h, "message", a.l))
    };
    (function() {
        if (!Eb(function(e) {
            return e.match(G().location.href)
        })) {
            for (var a = Oe(), b = null, c = null, d = 0; d < a.length; d++)
                if (c = a[d],
                Eb(function(e) {
                    return e.match(c.src)
                })) {
                    b = c;
                    break
                }
            if (null == b)
                throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
        }
    }
    )();
    var aB = function(a) {
        N.call(this);
        var b = this;
        this.A = new IA;
        this.g = a;
        this.D = new Map;
        this.o = this.g.J;
        this.G = new rt(this);
        vf(this, this.G);
        this.I = new pw(window);
        this.K = new VA(window);
        0 != W.g ? (this.h = new Rx,
        vf(this, this.h)) : this.h = Tx();
        Mw() && (this.h.init(Rz(this.o)),
        this.B = Yx(this.h, this.g.G),
        tf(this, function() {
            var c = b.B;
            b.h.A.delete(c);
            0 != W.g && (qq.C().A[c] = null)
        }))
    };
    t(aB, N);
    aB.prototype.destroy = function() {
        this.W()
    }
    ;
    aB.prototype.getVersion = function() {
        return "h.3.427.1"
    }
    ;
    aB.prototype.requestAds = function(a, b) {
        var c = this
          , d = []
          , e = null;
        rw(this.I) && d.push(new Promise(function(g) {
            vw(c.I, function(h) {
                e = h;
                g()
            })
        }
        ));
        var f = null;
        XA(this.K) && d.push(new Promise(function(g) {
            ZA(c.K, function(h) {
                f = h;
                g()
            })
        }
        ));
        Promise.all(d).then(function() {
            bB(c, a, b, {
                Ic: e,
                Lc: f
            })
        })
    }
    ;
    var bB = function(a, b, c, d) {
        var e = b.adTagUrl;
        e && Jx.C().report(8, {
            adtagurl: e,
            customPlayback: dA(a.g),
            customClick: null != a.g.H
        });
        var f = "goog_" + Xc++;
        a.D.set(f, c || null);
        var g = (c = d.Ic) ? ww(c) : !1
          , h = cB({
            adTagUrl: e,
            ed: !1,
            Ic: c,
            Lc: d.Lc
        })
          , k = function() {
            var n = {};
            n = (n.limaExperimentIds = lh().sort().join(","),
            n);
            var m = a.getSettings()
              , u = 0 != W.g ? qq.C().l : a.h.B;
            u = void 0 === u ? null : u;
            var p = {};
            null != u && (p.activeViewPushUpdates = u);
            p.activityMonitorMode = m.g;
            p.adsToken = m.H;
            p.autoPlayAdBreaks = m.isAutoPlayAdBreaks();
            p.companionBackfill = m.getCompanionBackfill();
            p.cookiesEnabled = m.h;
            p.disableCustomPlaybackForIOS10Plus = m.getDisableCustomPlaybackForIOS10Plus();
            p.engagementDetection = !0;
            p.isFunctionalTest = !1;
            p.isVpaidAdapter = m.ub();
            p["1pJar"] = m.I;
            p.numRedirects = m.getNumRedirects();
            p.pageCorrelator = m.M;
            p.persistentStateCorrelator = kg();
            p.playerType = m.getPlayerType();
            p.playerVersion = m.getPlayerVersion();
            p.ppid = m.getPpid();
            p.privacyControls = m.T;
            p.reportMediaRequests = !1;
            p.sessionId = m.X;
            p.streamCorrelator = m.V;
            p.testingConfig = nw(m).g;
            p.urlSignals = m.$;
            p.vpaidMode = m.getVpaidMode();
            u = b.adTagUrl;
            m = {};
            m.contentMediaUrl = a.g.K;
            m.customClickTrackingProvided = null != a.g.H;
            a: {
                var w = Tj();
                w = r(w);
                for (var x = w.next(); !x.done; x = w.next())
                    if (x = x.value,
                    x.url && x.url.includes("amp=1")) {
                        w = !0;
                        break a
                    }
                w = null != window.context ? 0 < parseInt(window.context.ampcontextVersion, 10) : null != Wj().l
            }
            m.isAmp = w;
            a: {
                try {
                    var A = window.top.location.href
                } catch (eB) {
                    A = 2;
                    break a
                }
                A = null == A ? 2 : A == window.document.location.href ? 0 : 1
            }
            m.iframeState = A;
            m.imaHostingDomain = window.document.domain;
            if (cm())
                A = window.location.href;
            else {
                x = Wj();
                A = x.h;
                w = x.g;
                x = x.l;
                var ma = null;
                x && (ma = GA(x.url));
                A = ma ? ma : A && A.url ? A.url : w && w.url ? w.url : ""
            }
            m.location = A;
            m.referrer = window.document.referrer;
            m.domLoadTime = a.o.L;
            m.sdkImplLoadTime = a.o.M;
            m.supportsResizing = !dA(a.g);
            A = G().location.ancestorOrigins;
            m.topOrigin = A ? 0 < A.length && 200 > A[A.length - 1].length ? A[A.length - 1] : "" : null;
            m.osdId = a.B;
            m.usesCustomVideoPlayback = dA(a.g);
            m.usesInlinePlayback = a.g.D;
            w = a.g.I;
            A = [];
            ma = x = "";
            if (null != w) {
                x = w;
                ma = !0;
                ma = void 0 === ma ? !1 : ma;
                for (var lc = [], rd = 0; x && 25 > rd; ++rd) {
                    var zh = "";
                    void 0 !== ma && ma || (zh = (zh = 9 !== x.nodeType && x.id) ? "/" + zh : "");
                    a: {
                        if (x && x.nodeName && x.parentElement) {
                            var Ah = x.nodeName.toString().toLowerCase();
                            for (var Js = x.parentElement.childNodes, Ks = 0, Al = 0; Al < Js.length; ++Al) {
                                var Bl = Js[Al];
                                if (Bl.nodeName && Bl.nodeName.toString().toLowerCase() === Ah) {
                                    if (x === Bl) {
                                        Ah = "." + Ks;
                                        break a
                                    }
                                    ++Ks
                                }
                            }
                        }
                        Ah = ""
                    }
                    lc.push((x.nodeName && x.nodeName.toString().toLowerCase()) + zh + Ah);
                    x = x.parentElement
                }
                x = lc.join();
                if (w) {
                    w = (w = w.ownerDocument) && (w.defaultView || w.parentWindow) || null;
                    ma = [];
                    if (w)
                        try {
                            var L = w.parent;
                            for (lc = 0; L && L !== w && 25 > lc; ++lc) {
                                var lb = L.frames;
                                for (rd = 0; rd < lb.length; ++rd)
                                    if (w === lb[rd]) {
                                        ma.push(rd);
                                        break
                                    }
                                w = L;
                                L = w.parent
                            }
                        } catch (eB) {}
                    ma = ma.join()
                } else
                    ma = ""
            }
            A.push(x, ma);
            if (null != u) {
                for (L = 0; L < ms.length - 1; ++L)
                    A.push(gf(u, ms[L]) || "");
                L = gf(u, "videoad_start_delay");
                lb = "";
                L && (L = parseInt(L, 10),
                lb = 0 > L ? "postroll" : 0 == L ? "preroll" : "midroll");
                A.push(lb)
            } else
                for (L = 0; L < ms.length; ++L)
                    A.push("");
            L = A.join(":");
            lb = L.length;
            if (0 == lb)
                L = 0;
            else {
                u = 305419896;
                for (A = 0; A < lb; A++)
                    u ^= (u << 5) + (u >> 2) + L.charCodeAt(A) & 4294967295;
                L = 0 < u ? u : 4294967296 + u
            }
            m = (m.videoAdKey = L.toString(),
            m);
            L = {};
            n = (L.consentSettings = h,
            L.imalibExperiments = n,
            L.settings = p,
            L.videoEnvironment = m,
            L);
            p = {};
            p.adsResponse = b.adsResponse;
            p.videoPlayActivation = b.videoPlayActivation;
            p.videoPlayMuted = b.videoPlayMuted;
            p.videoContinuousPlay = b.videoContinuousPlay;
            p.adTagUrl = b.adTagUrl;
            p.contentDuration = b.contentDuration;
            p.contentKeywords = b.contentKeywords;
            p.contentTitle = b.contentTitle;
            p.linearAdSlotWidth = b.linearAdSlotWidth;
            p.linearAdSlotHeight = b.linearAdSlotHeight;
            p.nonLinearAdSlotWidth = b.nonLinearAdSlotWidth;
            p.nonLinearAdSlotHeight = b.nonLinearAdSlotHeight;
            p.forceNonLinearFullSlot = b.forceNonLinearFullSlot;
            p.liveStreamPrefetchSeconds = b.liveStreamPrefetchSeconds;
            p.vastLoadTimeout = b.vastLoadTimeout;
            p.omidAccessModeRules = b.omidAccessModeRules;
            Object.assign(n, p);
            if (W.h) {
                p = new sf;
                he(p, 5, g || !0);
                m = a.A;
                if (0 === m.h) {
                    if (HA("__gads", p, m.g.document))
                        L = !0;
                    else if (L = m.g.document,
                    L = void 0 === L ? document : L,
                    de(p, 5) && (new te(L)).set("GoogleAdServingTest", "Good", void 0),
                    L = "Good" === HA("GoogleAdServingTest", p, m.g.document))
                        lb = m.g.document,
                        lb = void 0 === lb ? document : lb,
                        de(p, 5) && (new te(lb)).remove("GoogleAdServingTest");
                    m.h = L ? 2 : 1
                }
                n.isBrowserCookieEnabled = 2 === m.h;
                p = HA("__gads", p, a.A.g.document);
                null !== p && (n.gfpCookieValue = p)
            }
            n.isEapLoader = !1;
            p = Rz(a.o, f);
            a.G.U(p, "adsLoader", a.L);
            bx(p, "adsLoader", "requestAds", n)
        };
        d = Bw(e, h || {});
        dB("1" == Cw(d, "ltd") ? !0 : hh(fi) || hh(gi) ? !Dw(d) : !1) ? fB().then(function() {
            k()
        }) : k()
    };
    aB.prototype.getSettings = function() {
        return W
    }
    ;
    aB.prototype.contentComplete = function() {
        bx(Rz(this.o), "adsLoader", "contentComplete")
    }
    ;
    var dB = function(a) {
        return a ? !1 : !Jw()
    };
    aB.prototype.L = function(a) {
        var b = a.ka;
        switch (b) {
        case "adsLoaded":
            b = a.na;
            a = a.Qb;
            b = new Z(this.h,this.g,b.adTagUrl || "",b.adCuePoints,this.B,b.isCustomClickTrackingAllowed,Rz(this.o, a));
            this.dispatchEvent(new DA(b,gB(this, a)));
            break;
        case "error":
            b = a.na;
            this.dispatchEvent(new hA(new fA(b),gB(this, a.Qb)));
            a = {
                error: b.errorCode,
                vis: Ag(document)
            };
            Jx.C().report(7, a);
            break;
        case "gfpCookieAvailable":
            var c = a.na;
            if (null == c || !W.h)
                break;
            b = new sf;
            he(b, 5, c.storageAllowed);
            a = this.A;
            c = ne(Qj, c.gfpCookie);
            var d = {
                fd: E(c, 2) - a.g.Date.now() / 1E3,
                path: E(c, 3),
                domain: E(c, 4),
                Se: !1
            }
              , e = E(c, 1)
              , f = a.g.document;
            f = void 0 === f ? document : f;
            de(b, 5) && (new te(f)).set("__gads", e, d);
            de(b, 5) && .01 > a.g.Math.random() && (b = HA("__gads", b, a.g.document),
            Df({
                domain: E(c, 4),
                host: a.g.location.host,
                success: b === E(c, 1) ? "1" : "0"
            }));
            break;
        case "trackingUrlPinged":
            this.dispatchEvent(new jA(b,null,a.na))
        }
    }
    ;
    var gB = function(a, b) {
        var c = a.D.get(b);
        a.D.delete(b);
        return c
    }
      , cB = function(a) {
        var b;
        if (b = a.adTagUrl) {
            var c = /iu=\/(\d+)\//.exec(Sc(b));
            (c = c && 2 == c.length ? c[1] : null) || (b = Wc((new Q(b)).l.get("client")),
            c = ec(b) ? null : b);
            b = c
        } else
            b = null;
        b = b || "";
        c = rf(b);
        0 != c ? b = c : (c = v.top,
        b = pf(c, "googlefcInactive") ? 4 : b && pf(c, "googlefcPA-" + b) ? 2 : pf(c, "googlefcNPA") ? 3 : 0);
        c = pf(v.top, "googlefcLoaded");
        var d = a.Ic
          , e = a.Lc
          , f = {};
        return f.gfcPresent = (!!v.googlefc || pf(v.top, "googlefcPresent")) && 4 != b,
        f.gfcLoaded = c,
        f.gfcUserConsent = b,
        f.isGdprLoader = a.ed,
        f.addtlConsent = d ? d.addtlConsent : null,
        f.gdprApplies = d ? d.gdprApplies : null,
        f.tcString = d ? d.tcString : null,
        f.uspString = e ? e.uspString : null,
        f
    }
      , fB = function() {
        return new Promise(function(a) {
            UA(function() {
                RA();
                W.H = OA[1] || "";
                RA();
                W.T = OA[6] || "";
                RA();
                W.I = OA[4] || "";
                a()
            })
        }
        )
    };
    aB.prototype.contentComplete = aB.prototype.contentComplete;
    aB.prototype.getSettings = aB.prototype.getSettings;
    aB.prototype.requestAds = aB.prototype.requestAds;
    aB.prototype.getVersion = aB.prototype.getVersion;
    aB.prototype.destroy = aB.prototype.destroy;
    y("google.ima.AdCuePoints", iz, window);
    y("google.ima.AdDisplayContainer", eA, window);
    y("google.ima.AdError.ErrorCode", {
        DEPRECATED_ERROR_CODE: -1,
        VAST_MALFORMED_RESPONSE: 100,
        VAST_SCHEMA_VALIDATION_ERROR: 101,
        VAST_UNSUPPORTED_VERSION: 102,
        VAST_TRAFFICKING_ERROR: 200,
        VAST_UNEXPECTED_LINEARITY: 201,
        VAST_UNEXPECTED_DURATION_ERROR: 202,
        VAST_WRAPPER_ERROR: 300,
        VAST_LOAD_TIMEOUT: 301,
        VAST_TOO_MANY_REDIRECTS: 302,
        VAST_NO_ADS_AFTER_WRAPPER: 303,
        VIDEO_PLAY_ERROR: 400,
        VAST_MEDIA_LOAD_TIMEOUT: 402,
        VAST_LINEAR_ASSET_MISMATCH: 403,
        VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
        OVERLAY_AD_PLAYING_FAILED: 500,
        NONLINEAR_DIMENSIONS_ERROR: 501,
        qg: 502,
        Mg: 503,
        uf: 602,
        nf: 603,
        UNKNOWN_ERROR: 900,
        VPAID_ERROR: 901,
        FAILED_TO_REQUEST_ADS: 1005,
        VAST_ASSET_NOT_FOUND: 1007,
        VAST_EMPTY_RESPONSE: 1009,
        UNKNOWN_AD_RESPONSE: 1010,
        UNSUPPORTED_LOCALE: 1011,
        ADS_REQUEST_NETWORK_ERROR: 1012,
        INVALID_AD_TAG: 1013,
        STREAM_INITIALIZATION_FAILED: 1020,
        ASSET_FALLBACK_FAILED: 1021,
        INVALID_ARGUMENTS: 1101,
        jg: 1204,
        AUTOPLAY_DISALLOWED: 1205,
        CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
        Cg: 2002
    }, window);
    y("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    y("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    y("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    y("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    y("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    y("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    y("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    y("google.ima.AdError.Type", gA, window);
    y("google.ima.AdErrorEvent.Type", iA, window);
    y("google.ima.AdEvent.Type", kA, window);
    y("google.ima.AdsLoader", aB, window);
    y("google.ima.AdsManagerLoadedEvent.Type", EA, window);
    y("google.ima.CompanionAdSelectionSettings", Nw, window);
    y("google.ima.CompanionAdSelectionSettings.CreativeType", Ow, void 0);
    y("google.ima.CompanionAdSelectionSettings.ResourceType", Pw, void 0);
    y("google.ima.CompanionAdSelectionSettings.SizeCriteria", Qw, void 0);
    y("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    y("ima.ImaSdkSettings", V, window);
    y("google.ima.settings", W, window);
    y("google.ima.ImaSdkSettings.CompanionBackfillMode", {
        ALWAYS: "always",
        ON_MASTER_AD: "on_master_ad"
    }, void 0);
    y("google.ima.ImaSdkSettings.VpaidMode", {
        DISABLED: 0,
        ENABLED: 1,
        INSECURE: 2
    }, void 0);
    y("google.ima.AdsRenderingSettings", dy, window);
    y("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    y("google.ima.AdsRequest", FA, window);
    y("google.ima.VERSION", "3.427.1", void 0);
    y("google.ima.OmidAccessMode", {
        LIMITED: "limited",
        DOMAIN: "domain",
        FULL: "full"
    }, void 0);
    y("google.ima.UiElements", {
        AD_ATTRIBUTION: "adAttribution",
        COUNTDOWN: "countdown"
    }, void 0);
    y("google.ima.ViewMode", {
        NORMAL: "normal",
        FULLSCREEN: "fullscreen"
    }, void 0);
}
)();
