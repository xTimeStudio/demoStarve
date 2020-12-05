(window.webpackYMPB = window.webpackYMPB || []).push([[1], {
    476: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = g(n(479))
          , i = g(n(480));
        t.init = function(e, t, n, i) {
            var o = new E(e,t,n,i = i || {},u.VIDEO_CONFIG.timeout);
            return f.default.loadIMA().then(function() {
                o.run(n)
            }).catch(function(e) {
                o.close({
                    error: "Error loading IMA SDK"
                })
            }),
            o
        }
        ;
        var o = g(n(571))
          , d = g(n(4))
          , u = n(1)
          , l = g(u)
          , a = n(22)
          , r = g(n(106))
          , c = n(21)
          , p = n(13)
          , h = g(n(36))
          , y = g(n(37))
          , f = g(n(515));
        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var m = "preroll"
          , v = "outstream"
          , b = "skater"
          , w = "hybird";
        d.default.createStyle("\n    .ympb_target_video .ympb_target_size_corrector {\n        width: 100%;\n    }\n\n    .ympb_player_container {\n        display: block,\n        overflow: hidden,\n        textAlign: center,\n        font-size: 14px,\n        clear: both,\n        background: rgba(0,0,0,.75),\n        z-index: 1;\n        margin: 0px auto;\n        transition: height 0.3s ease 0s;\n        display: block;\n        position: relative;\n        width: 100%;\n        height: auto;\n        padding-bottom: 56.25%;\n        z-index: 2;\n    }\n\n    .ympb_player_container .ympb_player {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n        background: #000;\n    }\n\n    .ympb_video_header {\n        visibility: hidden;\n        background-color: rgba(0, 0, 0, 0.4);\n        padding-left: 5px; \n        color: #fff; \n        position: relative;\n        font-size: 12px;\n        z-index: 3;\n    }\n\n    .ympb_video_header h3 {\n        height: 30px; \n        line-height: 30px; \n        margin: 0px; \n        padding: 0px; \n        text-align: left;\n        font-size: 12px;\n    }\n\n    .ympb_video_header > div {\n        float: right;\n        position: relative;\n        background: transparent;\n        height: 30px;\n        line-height: 30px !important;\n        z-index: 9999;\n        padding: 0 5px;\n    }\n\n    .ympb_video_header .ympb_video_skip {\n        cursor: pointer;\n        font-weight: 700;\n        padding: 0 10px;\n    }\n\n    .ympb_video_header .ympb_video_mute {\n        cursor: pointer;\n        width: 20px;\n    }\n\n    .ympb_video_header .ympb_video_mute svg {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        fill: #fff;\n    }\n\n    .ympb_video_header .ympb_copyright {\n        margin: 0;\n    }\n\n    .ympb_video_header .ympb_copyright img {\n        height: 20px;\n        vertical-align: middle;\n    }\n\n    .ympb_video_poster {\n        display: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 10;\n        cursor: pointer;\n    }\n\n    .ympb_video_play_btn {\n        fill: #fff;\n        width: auto;\n        height: 20%;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform:translate3d(-50%, -50%, 0);\n        -webkit-transform:translate3d(-50%, -50%, 0);\n    }\n\n    .ympb_video_play_btn_text {\n        color: #fff;\n        font-size: 30px;\n        text-align: center;\n        position: absolute;\n        top: 65%;\n        width: 100%;\n        left: 0;\n    }\n");
        var E = ((0,
        i.default)(_, [{
            key: "init",
            value: function() {
                var e = this
                  , t = e.options.$target;
                if (e.type === m)
                    d.default.setCss(t, {
                        width: "100%"
                    }),
                    e.options.width = 640,
                    e.options.height = 360,
                    t.offsetWidth < e.options.width && (e.options.width = 400,
                    e.options.height = 300);
                else {
                    var n = [400, 300];
                    t.dataset && t.dataset.subtype && (n = (n = t.dataset.subtype).split("x")),
                    e.options.width = n[0],
                    e.options.height = n[1]
                }
                e.type === b && (e.options.position = ["bottom", "right"]),
                e.build(),
                e.bindEvents()
            }
        }, {
            key: "run",
            value: function(e) {
                e && (this.vastUrl = e);
                var t = 0 === u.VIDEO_CONFIG.volume;
                "firefox" !== a.BROWSER_TYPE && "iOS" !== a.OS_TYPE || !u.VIDEO_CONFIG.autoplay || (t = !0),
                u.VIDEO_CONFIG.autoplay ? (this.autoplay = !0,
                this.play({
                    muted: t,
                    unmuted: !t,
                    volume: u.VIDEO_CONFIG.volume
                }),
                4 < this._timeout && (this.$timeout = setTimeout(this.close.bind(this), 1e3 * this._timeout))) : (this.autoplay = !1,
                this.play({
                    muted: t,
                    unmuted: !t,
                    volume: u.VIDEO_CONFIG.volume
                }))
            }
        }, {
            key: "getContainerSize",
            value: function() {
                var e = this
                  , t = 9 / 16;
                this.videoAdUnit.sizes && (t = this.videoAdUnit.sizes[0][0] / this.videoAdUnit.sizes[0][1]);
                var n = Math.floor(e.els.$container.offsetWidth)
                  , i = Math.ceil(n * t);
                return e.options.pwidth = n,
                e.options.pheight = i,
                e.type !== m && (n = 400,
                i = 300,
                t = .75),
                {
                    width: n,
                    height: i,
                    videoRatio: t
                }
            }
        }, {
            key: "build",
            value: function() {
                var e = this
                  , t = this
                  , n = t.options
                  , i = t.els
                  , o = t.getContainerSize();
                i.$header = d.default.createNode("div.ympb_video_header", {}, i.$container),
                u.VIDEO_CONFIG.logo && y.default.insertCopyright(i.$header, "", u.COPYRIGHT.footerLink);
                var s = d.default.createNode("div.ympb_player_container", {
                    styles: {
                        paddingBottom: 100 * o.videoRatio + "%"
                    }
                }, i.$container);
                i.$player = d.default.createNode("div.ympb_player", {}, s),
                i.$clone = document.createElement("div"),
                i.$mutedButton = d.default.createNode("div.ympb_video_mute", {}, i.$header),
                i.$closeButton = d.default.createNode("div.ympb_video_skip", {
                    styles: {
                        display: "none"
                    }
                }, i.$header),
                i.$countdown = d.default.createNode("h3", {}, i.$header),
                i.$closeButton.innerHTML = '<svg x="0px" y="0px" viewBox="0 0 24 24" style="position: absolute; top: 2px; left: 2px; width: 20px; height: 20px;"><line style="fill:none;stroke:#fff;stroke-width:2;stroke-miterlimit:10;" x1="4" y1="4" x2="20" y2="20"></line><line style="fill:none;stroke:#fff;stroke-width:2;stroke-miterlimit:10;" x1="20" y1="4" x2="4" y2="20"></line></svg>',
                i.$mutedButton.innerHTML = '\n\t\t\t<svg class="muted" viewBox="0 0 48 48"><path d="M33 24c0-3.53-2.04-6.58-5-8.05v4.42l4.91 4.91c.06-.42.09-.85.09-1.28zm5 0c0 1.88-.41 3.65-1.08 5.28l3.03 3.03C41.25 29.82 42 27 42 24c0-8.56-5.99-15.72-14-17.54v4.13c5.78 1.72 10 7.07 10 13.41zM8.55 6L6 8.55 15.45 18H6v12h8l10 10V26.55l8.51 8.51c-1.34 1.03-2.85 1.86-4.51 2.36v4.13c2.75-.63 5.26-1.89 7.37-3.62L39.45 42 42 39.45l-18-18L8.55 6zM24 8l-4.18 4.18L24 16.36V8z"/></svg>\n\t\t\t<svg class="unmuted" style="display:none;" viewBox="0 0 48 48"><path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"/></svg>\n\t\t',
                d.default.setCss(i.$container, {
                    zIndex: n.zIndex
                }),
                t.type === b && t.type === m || d.default.setCss(i.$container, {
                    margin: "0 auto",
                    position: "relative",
                    transition: "height .3s"
                }),
                d.default.setCss(i.$clone, {
                    display: "block",
                    height: "0px",
                    position: "relative",
                    overflow: "hidden",
                    margin: "0 auto",
                    textAlign: "center",
                    fontSize: "14px",
                    clear: "both",
                    transition: "height .3s"
                }),
                t.type === m && (i.$container.style.margin = "0 auto",
                i.$countdown.innerHTML = "",
                i.$closeButton.innerHTML = "SKIP AD",
                t.options.showCloseButton = 1e3 * u.VIDEO_CONFIG.skipTimer),
                i.$mutedButton.addEventListener("click", function() {
                    e.toggleMuted()
                }),
                t.type === v || t.type === m ? i.$container.style.zIndex = 1 : t.type === w ? (i.$container.style.position = "absolute",
                n.$target.appendChild(i.$clone),
                document.body.appendChild(i.$container)) : t.type === b && (i.$container.style.position = "fixed",
                document.body.appendChild(i.$container)),
                t.setSize(),
                t.playButton = d.default.createNode("div.ympb_video_poster", {}, s),
                t.playButton.innerHTML = '<svg class="ympb_video_play_btn" viewBox="0 0 512 512"><g>\n                <path class="ympb_video_play_btn_triangle" d="m392.5,239.1l-187.6-130.6c-10-7.4-30.6-3.7-32.1,16.8v261.2c1.1,24.2 24.7,22.8 32.1,16.8l187.6-130.6c6.7-4.1 16.2-20 0-33.6zm-178.8,108.3v-183l131.4,91.5-131.4,91.5z"/>\n                <path class="ympb_video_play_btn_circle" d="M256,11C120.9,11,11,120.9,11,256s109.9,245,245,245s245-109.9,245-245S391.1,11,256,11z M256,460.2    c-112.6,0-204.2-91.6-204.2-204.2S143.4,51.8,256,51.8S460.2,143.4,460.2,256S368.6,460.2,256,460.2z"/>\n            </g></svg><div class="ympb_video_play_btn_text">Play</div>',
                t.playButton.addEventListener("click", function() {
                    return e.playButton.style.display = "none",
                    e.playAds(),
                    !1
                })
            }
        }, {
            key: "bindEvents",
            value: function() {
                var e = this;
                e.els.$closeButton.addEventListener("click", function() {
                    return e.adsManager && e.adsManager.stop(),
                    e.close(),
                    !1
                }),
                e.type !== b && e.type !== m && window.addEventListener("scroll", this.throttledScroll),
                window.addEventListener("resize", this.onResize)
            }
        }, {
            key: "onAdsManagerLoaded",
            value: function(e) {
                var t = this
                  , n = new google.ima.AdsRenderingSettings;
                n.loadVideoTimeout = 1e3 * u.VIDEO_CONFIG.vastTimeout,
                t.adsManager = e.getAdsManager({
                    currentTime: 0,
                    volume: t.options.volume
                }, n);
                for (var i = [google.ima.AdEvent.Type.ALL_ADS_COMPLETED, google.ima.AdEvent.Type.CLICK, google.ima.AdEvent.Type.COMPLETE, google.ima.AdEvent.Type.FIRST_QUARTILE, google.ima.AdEvent.Type.LOADED, google.ima.AdEvent.Type.MIDPOINT, google.ima.AdEvent.Type.PAUSED, google.ima.AdEvent.Type.STARTED, google.ima.AdEvent.Type.SKIPPED, google.ima.AdErrorEvent.Type.AD_ERROR, google.ima.AdEvent.Type.THIRD_QUARTILE], o = 0; o < i.length; o++)
                    t.adsManager.addEventListener(i[o], function(e) {
                        t.imaEvents(e)
                    });
                this.autoplay ? this.playAds() : this.playButton.style.display = "block"
            }
        }, {
            key: "toggleMuted",
            value: function(e) {
                (0,
                p.isNumeric)(e) ? (1 < (e = +e) && (e = 1),
                e < 0 && (e = 0)) : e = this.options.hasMuted ? this.options.volume || .7 : 0,
                this.options.volume = e,
                this.adsManager.setVolume(e),
                this.options.hasMuted = 0 === e;
                var t = this.els.$mutedButton.querySelector(".muted")
                  , n = this.els.$mutedButton.querySelector(".unmuted");
                this.options.hasMuted ? (t.style.display = "block",
                n.style.display = "none") : (t.style.display = "none",
                n.style.display = "block")
            }
        }, {
            key: "initIma",
            value: function() {
                if (this.imaInited)
                    return !1;
                this.imaInited = !0;
                var n = this;
                n.adDisplayContainer = new google.ima.AdDisplayContainer(n.els.$player),
                n.adsLoader = new google.ima.AdsLoader(n.adDisplayContainer),
                n.adsLoader.getSettings().setVpaidAllowed(!0),
                n.adsLoader.getSettings().setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE),
                n.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, n.onAdsManagerLoaded.bind(n), !1),
                n.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(e) {
                    var t = e.getError();
                    n.close({
                        error: t
                    })
                }, !1),
                n.adDisplayContainer.initialize()
            }
        }, {
            key: "imaEvents",
            value: function(e) {
                var t = this;
                switch (e.type) {
                case "adError":
                    var n = e.getError();
                    t.close({
                        error: n
                    });
                    break;
                case "loaded":
                    clearTimeout(t.$timeout);
                    var i = e.getAd()
                      , o = Math.round(i.getDuration())
                      , s = i.getContentType();
                    "text" !== s && s.indexOf("image") < 0 ? (t.els.$countdown.innerHTML = 'ADVERTISEMENT - YOUR GAME WILL START IN <span class="preroll-ad-remaining">' + o + "</span> SECONDS",
                    u.VIDEO_CONFIG.fullscreen && t.fullscreen()) : (t.els.$closeButton.style.display = "block",
                    0 < u.VIDEO_CONFIG.dissmissBannerTimer && (this.$timeout = setTimeout(this.close.bind(this), 1e3 * u.VIDEO_CONFIG.dissmissBannerTimer)));
                    break;
                case "start":
                    setTimeout(function() {
                        t.els.$closeButton.style.display = "block"
                    }, t.options.showCloseButton);
                    var l = Math.floor(t.adsManager.getRemainingTime());
                    if (t.tracked.AdVideoStart = !0,
                    t.type === m) {
                        var a;
                        t.els.$mutedButton.style.display = "block";
                        var r = t.els.$countdown.querySelector(".preroll-ad-remaining");
                        r.innerHTML = l,
                        a = setInterval(function() {
                            if (!t.adsManager)
                                return clearInterval(a),
                                !1;
                            (l = parseInt(t.adsManager.getRemainingTime()) || l--) <= 0 && (clearInterval(a),
                            l = 0),
                            r.innerHTML = l
                        }, 1e3)
                    }
                    t.toggleMuted(t.options.volume),
                    d.default.setCss(t.playButton, {
                        display: "none"
                    });
                    break;
                case "firstquartile":
                    t.tracked.AdVideoFirstQuartile || (t.tracked.AdVideoFirstQuartile = !0);
                    break;
                case "midpoint":
                    t.tracked.AdVideoMidpoint || (t.tracked.AdVideoMidpoint = !0);
                    break;
                case "thirdquartile":
                    t.tracked.AdVideoThirdQuartile || (t.tracked.AdVideoThirdQuartile = !0);
                    break;
                case "skip":
                    break;
                case "paused":
                    d.default.setCss(t.playButton, {
                        display: "block"
                    });
                    break;
                case "resumed":
                    d.default.setCss(t.playButton, {
                        display: "none"
                    });
                    break;
                case "complete":
                    t.tracked.AdVideoComplete || (t.tracked.AdVideoComplete = !0);
                    break;
                case "allAdsCompleted":
                    t.options.selector,
                    t.close()
                }
            }
        }, {
            key: "readyAd",
            value: function() {
                var e = this;
                e.options.isAdReady || (e.options.selector,
                e.setSize(),
                e.options.isAdReady = !0,
                e.type === b ? (e.setSkaterStyles(),
                e.open(function() {
                    e.options.isAdPlaying = !0,
                    e.adsManager.start()
                })) : e.type === m ? (e.options.isAdPlaying = !0,
                e.adsManager.start()) : e.scroll(e))
            }
        }, {
            key: "resize",
            value: function(e) {
                if (!this.adsManager)
                    return !1;
                var t = this.getContainerSize();
                this.adsManager.resize(t.width, t.height, e ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL)
            }
        }, {
            key: "fullscreen",
            value: function() {
                var e = this;
                o.default.isEnabled && o.default.request(this.els.$container).then(function() {
                    e.resize(!0)
                }).catch(function(e) {
                    window.console.error(e)
                })
            }
        }, {
            key: "exitFullscreen",
            value: function() {
                var e = this;
                o.default.isEnabled && o.default.isFullscreen && o.default.exit().then(function() {
                    e.resize(!1)
                })
            }
        }, {
            key: "open",
            value: function(e) {
                this.type === b && (this.els.$player.style.transform = "translate3d(0%, 0%, 0)",
                this.els.$player.style.webkitTransform = "translate3d(0%, 0%, 0)"),
                setTimeout(function() {
                    "function" == typeof e && e()
                }, 300)
            }
        }, {
            key: "show",
            value: function() {
                d.default.setCss(this.els.$container, {
                    display: "block"
                })
            }
        }, {
            key: "hide",
            value: function() {
                d.default.setCss(this.els.$container, {
                    display: "none"
                })
            }
        }, {
            key: "destroy",
            value: function() {
                window.removeEventListener("scroll", this.throttledScroll),
                window.removeEventListener("resize", this.onResize),
                this.exitFullscreen(),
                this.adsManager && this.adsManager.destroy && (this.adsManager.destroy(),
                this.adsManager = null),
                this.adsLoader && this.adsLoader.destroy && (this.adsLoader.destroy(),
                this.adsLoader = null),
                d.default.removeNode(this.els.$closeButton),
                this.els.$header && d.default.removeNode(this.els.$header)
            }
        }, {
            key: "playAds",
            value: function() {
                d.default.setCss(this.els.$header, {
                    visibility: "visible"
                });
                var t = this;
                t.els.$countdown.innerHTML = "ADVERTISEMENT";
                var e = t.getContainerSize();
                try {
                    t.adsManager.init(e.width, e.height, google.ima.ViewMode.NORMAL),
                    t.readyAd()
                } catch (e) {
                    var n = e.getError();
                    t.close({
                        error: n
                    })
                }
            }
        }, {
            key: "play",
            value: function(e) {
                var t = e.muted
                  , n = (e.unmuted,
                e.volume);
                this.adsManager && this.adsManager.destroy && (this.adsManager.destroy(),
                this.adsManager = null),
                this.options.volume = t ? 0 : n,
                this.initIma(),
                this.show();
                var i = new google.ima.AdsRequest;
                i.adTagUrl = this.vastUrl,
                i.linearAdSlotWidth = this.options.width,
                i.linearAdSlotHeight = this.options.height,
                i.nonLinearAdSlotWidth = 640,
                i.nonLinearAdSlotHeight = 150,
                i.forceNonLinearFullSlot = !0,
                t && i.setAdWillPlayMuted(t),
                this.adsLoader.requestAds(i)
            }
        }, {
            key: "close",
            value: function(e) {
                var t = this;
                if (clearTimeout(t.$timeout),
                e = e || {},
                e = (0,
                h.default)({
                    code: this.code,
                    destroyed: !0
                }, e),
                t.type === m) {
                    try {
                        this.destroy()
                    } catch (e) {}
                    t.options.adUnit.callback.call(this, e)
                } else
                    t.type === b ? t.closeSkater() : (t.els.$container.style.height = "0px",
                    t.type === w && (t.els.$clone.style.height = "0px")),
                    setTimeout(function() {
                        t.options.adUnit.callback.call(this, e)
                    }, 300);
                t.options.isAdEnded = !0,
                setTimeout(function() {
                    t.options.adUnit.isEnd = !0
                }, 1e3)
            }
        }, {
            key: "setSkaterStyles",
            value: function() {
                var e = this.options
                  , t = this.els
                  , n = e.position;
                t.$container.style[n[0]] = 0,
                t.$container.style[n[1]] = 0,
                this.closeSkater(),
                t.$container.style.height = this.options.height + "px",
                t.$container.style.position = "fixed",
                setTimeout(function() {
                    t.$player.style.transition = "all .3s",
                    t.$player.style.WebkitTransition = "all .3s"
                }, 300)
            }
        }, {
            key: "closeSkater",
            value: function() {
                var e = this.options
                  , t = this.els
                  , n = "";
                switch (e.position[1]) {
                case "left":
                    n = "translate3d(-100%, 0%, 0)";
                    break;
                case "right":
                    n = "translate3d(100%, 0%, 0)";
                    break;
                case "top":
                    n = "translate3d(0%, -100%, 0)";
                    break;
                default:
                    n = "translate3d(0%, 100%, 0)"
                }
                t.$player.style.transform = n,
                t.$player.style.webkitTransform = n
            }
        }, {
            key: "setSize",
            value: function() {
                var e = this.options
                  , t = this.els;
                this.type !== m && (t.$container.style.width = e.width + "px",
                t.$clone.style.width = e.width + "px",
                t.$player.style.width = e.width + "px",
                t.$player.style.height = e.height + "px")
            }
        }, {
            key: "scroll",
            value: function() {
                var t = this;
                if (!t.options.isAdEnded)
                    if (t.checkVisible(t.options.$target, 0, "visible") && t.options.isAdReady)
                        if (t.options.isAdStarted) {
                            if (t.options.selector,
                            t.type === v && !t.options.isAdPlaying && t.tracked.AdVideoStart)
                                t.adsManager.resume(),
                                t.options.isAdPlaying = !0;
                            else if (t.type === w) {
                                var e = t.els.$clone.getBoundingClientRect();
                                t.els.$container.style.top = e.top + (window.scrollY || window.pageYOffset || document.documentElement.scrollTop) - document.documentElement.clientTop + "px",
                                t.els.$container.style.left = e.left + (window.scrollX || window.pageXOffset || document.documentElement.scrollLeft) - document.documentElement.clientLeft + "px",
                                t.els.$container.style.right = "auto",
                                t.els.$container.style.bottom = "auto",
                                t.els.$container.style.position = "absolute"
                            }
                        } else
                            t.options.isAdStarted = !0,
                            setTimeout(function() {
                                t.open(function() {
                                    if (t.options.isAdPlaying = !0,
                                    t.type === w) {
                                        var e = t.els.$clone.getBoundingClientRect();
                                        t.els.$container.style.top = e.top + (window.scrollY || window.pageYOffset || document.documentElement.scrollTop) - document.documentElement.clientTop + "px",
                                        t.els.$container.style.left = e.left + (window.scrollX || window.pageXOffset || document.documentElement.scrollLeft) - document.documentElement.clientLeft + "px",
                                        t.els.$container.style.right = "auto",
                                        t.els.$container.style.bottom = "auto",
                                        t.els.$container.style.position = "absolute"
                                    }
                                    t.adsManager.start()
                                })
                            }, 500);
                    else
                        t.type === v && t.options.isAdPlaying && t.tracked.AdVideoStart ? (t.options.isAdPlaying = !1,
                        t.adsManager.pause()) : t.type === w && t.options.isAdStarted && (t.els.$container.style.top = "auto",
                        t.els.$container.style.left = "auto",
                        t.els.$container.style.right = 0,
                        t.els.$container.style.bottom = 0,
                        t.els.$container.style.position = "fixed")
            }
        }, {
            key: "checkVisible",
            value: function(e, t, n) {
                t = t || 0,
                n = n || "visible";
                var i = e.getBoundingClientRect()
                  , o = Math.max(document.documentElement.clientHeight, window.innerHeight)
                  , s = i.bottom - t < 0
                  , l = 0 <= i.top - o + t;
                return this.type === w && this.options.isAdStarted && (s = i.bottom - 200 < 0,
                l = 0 <= i.top - o + 200),
                "above" === n ? s : "below" === n ? l : !s && !l
            }
        }]),
        _);
        function _(e, t, n, i, o) {
            (0,
            s.default)(this, _),
            this.hasInited = !1,
            this.vastUrl = "",
            this.autoplay = !1,
            this._timeout = 0,
            this.$timeout = null,
            this.isFullscreen = !1,
            this.throttledScroll = (0,
            r.default)(this.scroll.bind(this), 100),
            this.onResize = (0,
            r.default)(this.resize.bind(this), 250),
            this.version = "3.0.0",
            this.type = e,
            this.code = t,
            this.vastUrl = n,
            this.videoAdUnit = i,
            this.name = "YMPB_VIDEO_" + this.type,
            this._timeout = o || 0,
            this.options = {
                vast: "",
                key: null,
                adUnit: {},
                adsManager: null,
                adDisplayContainer: null,
                adsLoader: null,
                adsRequest: null,
                adPaused: !1,
                $target: null,
                elector: "",
                width: 0,
                height: 0,
                pwidth: 0,
                pheight: 0,
                position: [],
                zIndex: l.default.baseZindex + 10,
                showCloseButton: 1e3 * u.VIDEO_CONFIG.skipTimer,
                hasMuted: !0,
                isInitialized: !1,
                isAdStarted: !1,
                isAdPlaying: !1,
                isAdEnded: !1,
                isAdReady: !1,
                buyerMemberId: 0,
                creativeId: 0,
                placementId: 0,
                volume: 0
            },
            this.els = {
                $container: null,
                $label: null,
                $clone: null,
                $player: null,
                $header: null,
                $countdown: null,
                $closeButton: null,
                $mutedButton: null
            },
            this.tracked = {
                AdVideoStart: !1,
                AdVideoFirstQuartile: !1,
                AdVideoMidpoint: !1,
                AdVideoThirdQuartile: !1,
                AdVideoComplete: !1
            },
            this.options.key = this.code,
            this.options.selector = this.code,
            this.els.$container = d.default.$("#" + this.code),
            this.options.$target = (0,
            c.getSlotWrapper)(this.code),
            this.options.adUnit = this.videoAdUnit,
            u.VIDEO_CONFIG.prerollWidth && d.default.setCss((0,
            c.getSlotArea)(this.code), {
                width: u.VIDEO_CONFIG.prerollWidth + "%"
            }),
            this.init()
        }
    },
    479: function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.default = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
    },
    480: function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i, o = n(71), s = (i = o) && i.__esModule ? i : {
            default: i
        };
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                (0,
                s.default)(e, i.key, i)
            }
        }
        t.default = function(e, t, n) {
            return t && l(e.prototype, t),
            n && l(e, n),
            e
        }
    },
    515: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a(n(49))
          , o = a(n(4))
          , s = a(n(1))
          , l = a(n(6));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = !1
          , d = !1
          , u = null;
        function c(e) {
            (0,
            l.default)("IMA Loader", e)
        }
        "undefined" == typeof google || void 0 === google.ima ? u = new i.default(function(e, t) {
            o.default.loadSrcipt(s.default.google_imasdk, !0, function() {
                d = r = !0,
                c("IMA_SDK_LOADED_SUCCESS"),
                e(!0)
            }, function() {
                r = !0,
                c("IMA_SDK_LOADED_ERROR"),
                t(new Error("blocker enabled"))
            })
        }
        ) : d = r = !0,
        t.default = {
            loadIMA: function() {
                return r ? d ? i.default.resolve(d) : i.default.reject(new Error("blocker enabled")) : u
            },
            loadfailed: function() {
                return r && !d
            },
            loaded: function() {
                return r && d
            }
        }
    },
    571: function(n, e, t) {
        !function() {
            "use strict";
            var s = "undefined" != typeof window && void 0 !== window.document ? window.document : {}
              , e = n.exports
              , l = function() {
                for (var e, t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = 0, i = t.length, o = {}; n < i; n++)
                    if ((e = t[n]) && e[1]in s) {
                        for (n = 0; n < e.length; n++)
                            o[t[0][n]] = e[n];
                        return o
                    }
                return !1
            }()
              , i = {
                change: l.fullscreenchange,
                error: l.fullscreenerror
            }
              , t = {
                request: function(o) {
                    return new Promise(function(e, t) {
                        var n = function() {
                            this.off("change", n),
                            e()
                        }
                        .bind(this);
                        this.on("change", n);
                        var i = (o = o || s.documentElement)[l.requestFullscreen]();
                        i instanceof Promise && i.then(n).catch(t)
                    }
                    .bind(this))
                },
                exit: function() {
                    return new Promise(function(e, t) {
                        if (this.isFullscreen) {
                            var n = function() {
                                this.off("change", n),
                                e()
                            }
                            .bind(this);
                            this.on("change", n);
                            var i = s[l.exitFullscreen]();
                            i instanceof Promise && i.then(n).catch(t)
                        } else
                            e()
                    }
                    .bind(this))
                },
                toggle: function(e) {
                    return this.isFullscreen ? this.exit() : this.request(e)
                },
                onchange: function(e) {
                    this.on("change", e)
                },
                onerror: function(e) {
                    this.on("error", e)
                },
                on: function(e, t) {
                    var n = i[e];
                    n && s.addEventListener(n, t, !1)
                },
                off: function(e, t) {
                    var n = i[e];
                    n && s.removeEventListener(n, t, !1)
                },
                raw: l
            };
            l ? (Object.defineProperties(t, {
                isFullscreen: {
                    get: function() {
                        return Boolean(s[l.fullscreenElement])
                    }
                },
                element: {
                    enumerable: !0,
                    get: function() {
                        return s[l.fullscreenElement]
                    }
                },
                isEnabled: {
                    enumerable: !0,
                    get: function() {
                        return Boolean(s[l.fullscreenEnabled])
                    }
                }
            }),
            e ? n.exports = t : window.screenfull = t) : e ? n.exports = {
                isEnabled: !1
            } : window.screenfull = {
                isEnabled: !1
            }
        }()
    }
}]);
