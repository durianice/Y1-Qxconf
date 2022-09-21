function rewriteBody() {
    const url = $request.url;
    const body = $response.body;
    let obj = JSON.parse(body);
    const requestType = /&do=([a-zA-Z_]*)/.exec(url)[1];
    const modiftData = {
        rank: 17,
        // sign_alert: 1,
        // is_float: 0,
        // openid: "oEQX35fw6MATmB3YsOVqbLtDm1iM",
        rank_img: "https://xcx.chinafdc.store/attachment/yf_zhaocha_resource/images/rank/rank17.png",
        // nickname: "",
        rank_name_img: "https://xcx.chinafdc.store/attachment/yf_zhaocha_resource/images/rank/rank17_1.png",
        will_title: "恭喜您已经超越99%的玩家",
        // service_flag: 0,
        // open_sound: 1,
        // first_login: 0,
        // session_key: "YRbu1g7yufh9R6CNfFNSmg==",
        // avatarurl: "",
        // token: "9dbefcd591434deb48dd795c8f98ea3b",
        // uid: "oEQX35fw6MATmB3YsOVqbLtDm1iM",
        // sign_in: 0,
        // noticeCard: 1,
        // value: 1,
        value_name: "超强王者",
        // is_userinfo: 1,
        // is_add: 0
    };
    switch (requestType) {
        // 登录
        case 'login':
            if (obj.code == 200) {
                Object.assign(obj.data, modiftData);
            }
            break;
            // 体力
        case 'residue_time':
            if (obj.code == 200) {
                Object.assign(obj.data, modiftData);
            }
            break;
            // 排名
        case 'rank':
            break;
            // 关卡
        case 'start_game':
            if (obj.code == 200) {
                obj.data.question.forEach(item => {
                    // if (item.name == 'layer') {
                    //     item.url = '';
                    // }
                    if (item.name !== 'layer') {
                        item.url = 'https://img-bsy.txrpic.com/preview/Element/00/00/76/99/E-769925-B52556C2.png'
                    }
                });
            }
            break;
            // pk
        case 'start_pkgame':
            if (obj.code == 200) {
                obj.data.question.forEach(item => {
                    // if (item.name == 'layer') {
                    //     item.url = '';
                    // }
                    if (item.name !== 'layer') {
                        item.url = 'https://img-bsy.txrpic.com/preview/Element/00/00/76/99/E-769925-B52556C2.png'
                    }
                });
            }
            break;
        default:
            break;
    }
    $done({
        body: JSON.stringify(obj)
    });
}

function gamePass() {
    const url = `https://xcx.chinafdc.store/app/index.php?i=26&t=5&v=1.0&from=wxapp&c=entry&a=wxapp&do=game_win&m=yf_zhaocha&sign=ece4b607b1addd41a6ba88acc93d4d77`;
    const headers = {
        'Accept-Encoding': `gzip,compress,br,deflate`,
        'content-type': `application/x-www-form-urlencoded`,
        'Connection': `keep-alive`,
        'Accept': `application/json`,
        'Referer': `https://servicewechat.com/wxca5131913c54b5a4/4/page-frame.html`,
        'Host': `xcx.chinafdc.store`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.26(0x18001a34) NetType/4G Language/zh_CN`
    };
    const body = `appid=wxca5131913c54b5a4&uid=oEQX35fw6MATmB3YsOVqbLtDm1iM&scene=1089&version=n20190912&token=9dbefcd591434deb48dd795c8f98ea3b`;
    const myRequest = {
        url: url,
        headers: headers,
        body: body
    };
    return new Promise((resolve, reject) => {
        $.http.post(myRequest).then(res => {
            const {
                data = null, code = null
            } = res.body;
            if (code == 200) {
                const {
                    msg = '未知信息', value = null, value_name = null, wil_title = null
                } = data;
                const msgTips = `挑战第 ${value} 关${msg}, ${wil_title}, 当前段位<${value_name}>`;
                $.logger.info(msgTips);
            } else {
                $.logger.warning('错误');
                resolve('错误')
            }
        }).catch(err => {
            $.logger.warning('错误');
            reject('错误')
        });
    });
}

;(async () => {
    $.logger.warning($.isRequest);
    if ($.isRequest) {
        rewriteBody();
    } else {
        await $.utils.retry(gamePass, 3, 1000, (result) => Promise.reject(result))();
    }
    $.done();
})();

/**
 * 
 * $$\      $$\                     $$\             $$$$$\  $$$$$$\         $$$$$$\  
 * $$$\    $$$ |                    \__|            \__$$ |$$  __$$\       $$ ___$$\ 
 * $$$$\  $$$$ | $$$$$$\   $$$$$$\  $$\  $$$$$$$\      $$ |$$ /  \__|      \_/   $$ |
 * $$\$$\$$ $$ | \____$$\ $$  __$$\ $$ |$$  _____|     $$ |\$$$$$$\          $$$$$ / 
 * $$ \$$$  $$ | $$$$$$$ |$$ /  $$ |$$ |$$ /     $$\   $$ | \____$$\         \___$$\ 
 * $$ |\$  /$$ |$$  __$$ |$$ |  $$ |$$ |$$ |     $$ |  $$ |$$\   $$ |      $$\   $$ |
 * $$ | \_/ $$ |\$$$$$$$ |\$$$$$$$ |$$ |\$$$$$$$\\$$$$$$  |\$$$$$$  |      \$$$$$$  |
 * \__|     \__| \_______| \____$$ |\__| \_______|\______/  \______/        \______/ 
 *                        $$\   $$ |                                                 
 *                        \$$$$$$  |                                                 
 *                         \______/                                                                                     
 * 
 */
function MagicJS(e = "MagicJS", t = "INFO") {
    const r = () => {
        const e = typeof $loon !== "undefined";
        const t = typeof $task !== "undefined";
        const n = typeof module !== "undefined";
        const r = typeof $httpClient !== "undefined" && !e;
        const i = typeof $storm !== "undefined";
        const o = typeof $environment !== "undefined" && typeof $environment["stash-build"] !== "undefined";
        const s = r || e || i || o;
        const a = typeof importModule !== "undefined";
        return {
            isLoon: e,
            isQuanX: t,
            isNode: n,
            isSurge: r,
            isStorm: i,
            isStash: o,
            isSurgeLike: s,
            isScriptable: a,
            get name() {
                if (e) {
                    return "Loon"
                } else if (t) {
                    return "QuantumultX"
                } else if (n) {
                    return "NodeJS"
                } else if (r) {
                    return "Surge"
                } else if (a) {
                    return "Scriptable"
                } else {
                    return "unknown"
                }
            },
            get build() {
                if (r) {
                    return $environment["surge-build"]
                } else if (o) {
                    return $environment["stash-build"]
                } else if (i) {
                    return $storm.buildVersion
                }
            },
            get language() {
                if (r || o) {
                    return $environment["language"]
                }
            },
            get version() {
                if (r) {
                    return $environment["surge-version"]
                } else if (o) {
                    return $environment["stash-version"]
                } else if (i) {
                    return $storm.appVersion
                } else if (n) {
                    return process.version
                }
            },
            get system() {
                if (r) {
                    return $environment["system"]
                } else if (n) {
                    return process.platform
                }
            },
            get systemVersion() {
                if (i) {
                    return $storm.systemVersion
                }
            },
            get deviceName() {
                if (i) {
                    return $storm.deviceName
                }
            }
        }
    };
    const i = (n, e = "INFO") => {
        let r = e;
        const i = {
            SNIFFER: 6,
            DEBUG: 5,
            INFO: 4,
            NOTIFY: 3,
            WARNING: 2,
            ERROR: 1,
            CRITICAL: 0,
            NONE: -1
        };
        const o = {
            SNIFFER: "",
            DEBUG: "",
            INFO: "",
            NOTIFY: "",
            WARNING: "❗ ",
            ERROR: "❌ ",
            CRITICAL: "❌ ",
            NONE: ""
        };
        const t = (e, t = "INFO") => {
            if (!(i[r] < i[t.toUpperCase()])) console.log(`[${t}] [${n}]\n${o[t.toUpperCase()]}${e}\n`)
        };
        const s = e => {
            r = e
        };
        return {
            setLevel: s,
            sniffer: e => {
                t(e, "SNIFFER")
            },
            debug: e => {
                t(e, "DEBUG")
            },
            info: e => {
                t(e, "INFO")
            },
            notify: e => {
                t(e, "NOTIFY")
            },
            warning: e => {
                t(e, "WARNING")
            },
            error: e => {
                t(e, "ERROR")
            },
            retry: e => {
                t(e, "RETRY")
            }
        }
    };
    return new class {
        constructor(e, t) {
            this._startTime = Date.now();
            this.version = "3.0.0";
            this.scriptName = e;
            this.env = r();
            this.logger = i(e, t);
            this.http = typeof MagicHttp === "function" ? MagicHttp(this.env, this.logger) : undefined;
            this.data = typeof MagicData === "function" ? MagicData(this.env, this.logger) : undefined;
            this.notification = typeof MagicNotification === "function" ? MagicNotification(this.scriptName, this.env, this.logger, this.http) : undefined;
            this.utils = typeof MagicUtils === "function" ? MagicUtils(this.env, this.logger) : undefined;
            this.qinglong = typeof MagicQingLong === "function" ? MagicQingLong(this.env, this.data, this.logger) : undefined;
            if (typeof this.data !== "undefined") {
                let e = this.data.read("magic_loglevel");
                const n = this.data.read("magic_bark_url");
                if (e) {
                    this.logger.setLevel(e.toUpperCase())
                }
                if (n) {
                    this.notification.setBark(n)
                }
            }
        }
        get isRequest() {
            return typeof $request !== "undefined" && typeof $response === "undefined"
        }
        get isResponse() {
            return typeof $response !== "undefined"
        }
        get isDebug() {
            return this.logger.level === "DEBUG"
        }
        get request() {
            return typeof $request !== "undefined" ? $request : undefined
        }
        get response() {
            if (typeof $response !== "undefined") {
                if ($response.hasOwnProperty("status")) $response["statusCode"] = $response["status"];
                if ($response.hasOwnProperty("statusCode")) $response["status"] = $response["statusCode"];
                return $response
            } else {
                return undefined
            }
        }
        done = (e = {}) => {
            this._endTime = Date.now();
            let t = (this._endTime - this._startTime) / 1e3;
            this.logger.info(`SCRIPT COMPLETED: ${t} S.`);
            if (typeof $done !== "undefined") {
                $done(e)
            }
        }
    }(e, t)
}

function MagicHttp(u, c) {
    const t = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1";
    const n = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36 Edg/84.0.522.59";
    let f;
    if (u.isNode) {
        const a = require("axios");
        f = a.create()
    }
    class e {
        constructor(e = true) {
            this.handlers = [];
            this.isRequest = e
        }
        use(e, t, n) {
            this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: n ? n.synchronous : false,
                runWhen: n ? n.runWhen : null
            });
            return this.handlers.length - 1
        }
        eject(e) {
            if (this.handlers[e]) {
                this.handlers[e] = null
            }
        }
        forEach(t) {
            this.handlers.forEach(e => {
                if (e !== null) {
                    t(e)
                }
            })
        }
    }

    function r(e) {
        let n = {
            ...e
        };
        if (!!n.params) {
            if (!u.isNode) {
                let e = Object.keys(n.params).map(e => {
                    const t = encodeURIComponent(e);
                    n.url = n.url.replace(new RegExp(`${e}=[^&]*`, "ig"), "");
                    n.url = n.url.replace(new RegExp(`${t}=[^&]*`, "ig"), "");
                    return `${t}=${encodeURIComponent(n.params[e])}`
                }).join("&");
                if (n.url.indexOf("?") < 0) n.url += "?";
                if (!/(&|\?)$/g.test(n.url)) {
                    n.url += "&"
                }
                n.url += e;
                delete n.params;
                c.debug(`Params to QueryString: ${n.url}`)
            }
        }
        return n
    }
    const d = (e, t) => {
        let n = typeof t === "object" ? {
            headers: {},
            ...t
        } : {
            url: t,
            headers: {}
        };
        if (!n.method) {
            n["method"] = e
        }
        n = r(n);
        if (n["rewrite"] === true) {
            if (u.isSurge) {
                n.headers["X-Surge-Skip-Scripting"] = false;
                delete n["rewrite"]
            } else if (u.isQuanX) {
                n["hints"] = false;
                delete n["rewrite"]
            }
        }
        if (u.isSurge) {
            if (n["method"] !== "GET" && n.headers["Content-Type"].indexOf("application/json") >= 0 && n.body instanceof Array) {
                n.body = JSON.stringify(n.body);
                c.debug(`Convert Array object to String: ${n.body}`)
            }
        } else if (u.isQuanX) {
            if (n.hasOwnProperty("body") && typeof n["body"] !== "string") n["body"] = JSON.stringify(n["body"]);
            n["method"] = e
        } else if (u.isNode) {
            if (e === "POST" || e === "PUT" || e === "PATCH" || e === "DELETE") {
                n.data = n.data || n.body
            } else if (e === "GET") {
                n.params = n.params || n.body
            }
            delete n.body
        }
        return n
    };
    const p = (t, n = null) => {
        if (t) {
            let e = {
                ...t,
                config: t.config || n,
                status: t.statusCode || t.status,
                body: t.body || t.data,
                headers: t.headers || t.header
            };
            if (typeof e.body === "string") {
                try {
                    e.body = JSON.parse(e.body)
                } catch {}
            }
            delete t.data;
            return e
        } else {
            return t
        }
    };
    const i = r => {
        if (!!r) {
            delete r["Content-Length"];
            let e = new Set(["Accept", "Accept-CH", "Accept-Charset", "Accept-Features", "Accept-Encoding", "Accept-Language", "Accept-Ranges", "Access-Control-Allow-Credentials", "Access-Control-Allow-Origin", "Access-Control-Allow-Methods", "Access-Control-Allow-Headers", "Access-Control-Max-Age", "Access-Control-Expose-Headers", "Access-Control-Request-Method", "Access-Control-Request-Headers", "Age", "Allow", "Alternates", "Authorization", "Cache-Control", "Connection", "Content-Encoding", "Content-Language", "ontent-Length", "Content-Location", "Content-Range", "Content-Security-Policy", "Content-Type", "Cookie", "DNT", "Date", "ETag", "Expect", "Expires", "From", "Host", "If-Match", "If-Modified-Since", "If-None-Match", "If-Range", "If-Unmodified-Since", "Last-Event-ID", "Last-Modified", "Link", "Location", "Max-Forwards", "Negotiate", "Origin", "Pragma", "Proxy-Authenticate", "Proxy-Authorization", "Range", "Referer", "Retry-After", "Sec-Websocket-Extensions", "Sec-Websocket-Key", "Sec-Websocket-Origin", "Sec-Websocket-Protocol", "Sec-Websocket-Version", "Server", "Set-Cookie", "Set-Cookie2", "Strict-Transport-Security", "TCN", "TE", "Trailer", "Transfer-Encoding", "Upgrade", "User-Agent", "Variant-Vary", "Vary", "Via", "Warning", "WWW-Authenticate", "X-Content-Duration", "X-Content-Security-Policy", "X-DNSPrefetch-Control", "X-Frame-Options", "X-Requested-With"]);
            for (let n of Object.keys(r)) {
                if (!e.has(n)) {
                    for (let t of e) {
                        let e = n.replace(new RegExp(t, "ig"), t);
                        if (n !== e) {
                            r[e] = r[n];
                            delete r[n];
                            break
                        }
                    }
                }
            }
            if (!r["User-Agent"]) {
                if (u.isNode) {
                    r["User-Agent"] = n
                } else {
                    r["User-Agent"] = t
                }
            }
            return r
        }
        return r
    };
    const g = (t, n = null) => {
        if (!!t && t.status >= 400) {
            c.debug(`Raise exception when status code is ${t.status}`);
            let e = {
                name: "RequestException",
                message: `Request failed with status code ${t.status}`,
                config: n || t.config,
                response: t
            };
            return e
        }
    };
    const o = {
        request: new e,
        response: new e(false)
    };
    let y = [];
    let h = [];
    let m = true;

    function $(e) {
        if (typeof e === "object" && e["modify"] !== false) {
            e["headers"] = i(e["headers"])
        }
        e = r(e);
        return e
    }

    function b(e) {
        try {
            e = !!e ? p(e) : e;
            c.sniffer(`HTTP ${e.config["method"].toUpperCase()}:\n${JSON.stringify(e.config)}\nSTATUS CODE:\n${e.status}\nRESPONSE:\n${typeof e.body === "object" ? JSON.stringify(e.body) : e.body}`);
            const t = g(e);
            if (!!t) {
                return Promise.reject(t)
            }
            return e
        } catch (t) {
            c.error(t);
            return e
        }
    }
    const S = t => {
        try {
            y = [];
            h = [];
            o.request.forEach(e => {
                if (typeof e.runWhen === "function" && e.runWhen(t) === false) {
                    return
                }
                m = m && e.synchronous;
                y.unshift(e.fulfilled, e.rejected)
            });
            o.response.forEach(e => {
                h.push(e.fulfilled, e.rejected)
            })
        } catch (e) {
            c.error(`failed to register interceptors: ${e}`)
        }
    };
    const s = (e, r) => {
        let i;
        const t = e.toUpperCase();
        r = d(t, r);
        if (u.isNode) {
            i = f
        } else {
            if (u.isSurgeLike) {
                i = o => {
                    return new Promise((r, i) => {
                        $httpClient[e.toLowerCase()](o, (t, n, e) => {
                            if (t) {
                                let e = {
                                    name: t.name || t,
                                    message: t.message || t,
                                    stack: t.stack || t,
                                    config: o,
                                    response: p(n)
                                };
                                i(e)
                            } else {
                                n.config = o;
                                n.body = e;
                                r(n)
                            }
                        })
                    })
                }
            } else {
                i = i => {
                    return new Promise((n, r) => {
                        $task.fetch(i).then(e => {
                            e = p(e, i);
                            const t = g(e, i);
                            if (t) {
                                return Promise.reject(t)
                            }
                            n(e)
                        }).catch(e => {
                            let t = {
                                name: e.message || e.error,
                                message: e.message || e.error,
                                stack: e.error,
                                config: i,
                                response: !!e.response ? p(e.response) : null
                            };
                            r(t)
                        })
                    })
                }
            }
        }
        let o;
        S(r);
        const s = [$, undefined];
        const a = [b, undefined];
        if (!m) {
            c.debug("Interceptors are executed in asynchronous mode");
            let n = [i, undefined];
            Array.prototype.unshift.apply(n, s);
            Array.prototype.unshift.apply(n, y);
            Array.prototype.unshift.apply(n, s);
            n = n.concat(a);
            n = n.concat(h);
            o = Promise.resolve(r);
            while (n.length) {
                try {
                    let e = n.shift();
                    let t = n.shift();
                    if (!u.isNode && r["timeout"] && e === i) {
                        o = l(r)
                    } else {
                        o = o.then(e, t)
                    }
                } catch (e) {
                    c.error(`request exception: ${e}`)
                }
            }
            return o
        } else {
            c.debug("Interceptors are executed in synchronous mode");
            Array.prototype.unshift.apply(y, s);
            y = y.concat([$, undefined]);
            while (y.length) {
                let e = y.shift();
                let t = y.shift();
                try {
                    r = e(r)
                } catch (e) {
                    t(e);
                    break
                }
            }
            try {
                if (!u.isNode && r["timeout"]) {
                    o = l(r)
                } else {
                    o = i(r)
                }
            } catch (e) {
                return Promise.reject(e)
            }
            Array.prototype.unshift.apply(h, a);
            while (h.length) {
                o = o.then(h.shift(), h.shift())
            }
            return o
        }

        function l(n) {
            try {
                const e = new Promise((e, t) => {
                    setTimeout(() => {
                        let e = {
                            message: `timeout of ${n["timeout"]}ms exceeded`,
                            config: n
                        };
                        t(e)
                    }, n["timeout"])
                });
                return Promise.race([i(n), e])
            } catch (e) {
                c.error(`Request Timeout exception: ${e}`)
            }
        }
    };
    return {
        request: s,
        interceptors: o,
        modifyHeaders: i,
        modifyResponse: p,
        get: e => {
            return s("GET", e)
        },
        post: e => {
            return s("POST", e)
        },
        put: e => {
            return s("PUT", e)
        },
        patch: e => {
            return s("PATCH", e)
        },
        delete: e => {
            return s("DELETE", e)
        },
        head: e => {
            return s("HEAD", e)
        },
        options: e => {
            return s("OPTIONS", e)
        }
    }
}

function MagicNotification(o, s, a, l) {
    let u = null;
    let c = null;
    const e = t => {
        try {
            let e = t.replace(/\/+$/g, "");
            u = `${/^https?:\/\/([^/]*)/.exec(e)[0]}/push`;
            c = /\/([^\/]+)\/?$/.exec(e)[1]
        } catch (e) {
            a.error(`Bark url error: ${e}.`)
        }
    };

    function t(e = o, t = "", n = "", r = "") {
        const i = n => {
            try {
                let t = {};
                if (typeof n === "string") {
                    if (s.isLoon) t = {
                        openUrl: n
                    };
                    else if (s.isQuanX) t = {
                        "open-url": n
                    };
                    else if (s.isSurge) t = {
                        url: n
                    }
                } else if (typeof n === "object") {
                    if (s.isLoon) {
                        t["openUrl"] = !!n["open-url"] ? n["open-url"] : "";
                        t["mediaUrl"] = !!n["media-url"] ? n["media-url"] : ""
                    } else if (s.isQuanX) {
                        t = !!n["open-url"] || !!n["media-url"] ? n : {}
                    } else if (s.isSurge) {
                        let e = n["open-url"] || n["openUrl"];
                        t = e ? {
                            url: e
                        } : {}
                    }
                }
                return t
            } catch (e) {
                a.error(`Failed to convert notification option, ${e}`)
            }
            return n
        };
        r = i(r);
        if (arguments.length == 1) {
            e = o;
            t = "", n = arguments[0]
        }
        a.notify(`title:${e}\nsubTitle:${t}\nbody:${n}\noptions:${typeof r === "object" ? JSON.stringify(r) : r}`);
        if (s.isSurge) {
            $notification.post(e, t, n, r)
        } else if (s.isLoon) {
            if (!!r) $notification.post(e, t, n, r);
            else $notification.post(e, t, n)
        } else if (s.isQuanX) {
            $notify(e, t, n, r)
        }
        if (u && c) {
            f(e, t, n)
        }
    }

    function n(e = o, t = "", n = "", r = "") {
        if (a.level === "DEBUG") {
            if (arguments.length == 1) {
                e = o;
                t = "", n = arguments[0]
            }
            this.notify(e, t, n, r)
        }
    }

    function f(e = o, t = "", n = "", r = "") {
        if (typeof l === "undefined" || typeof l.post === "undefined") {
            throw "Bark notification needs to import MagicHttp module."
        }
        let i = {
            url: u,
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: {
                title: e,
                body: t ? `${t}\n${n}` : n,
                device_key: c
            }
        };
        l.post(i).catch(e => {
            a.error(`Bark notify error: ${e}`)
        })
    }
    return {
        post: t,
        debug: n,
        bark: f,
        setBark: e
    }
}

function MagicData(s, a) {
    let l = {
        fs: undefined,
        data: {}
    };
    if (s.isNode) {
        l.fs = require("fs");
        try {
            l.fs.accessSync("./magic.json", l.fs.constants.R_OK | l.fs.constants.W_OK)
        } catch (e) {
            l.fs.writeFileSync("./magic.json", "{}", {
                encoding: "utf8"
            })
        }
        l.data = require("./magic.json")
    }
    const u = (e, t) => {
        if (typeof t === "object") {
            return false
        } else {
            return e === t
        }
    };
    const c = e => {
        if (e === "true") {
            return true
        } else if (e === "false") {
            return false
        } else if (typeof e === "undefined") {
            return null
        } else {
            return e
        }
    };
    const f = (e, t, n, r) => {
        if (n) {
            try {
                if (typeof e === "string") e = JSON.parse(e);
                if (e["magic_session"] === true) {
                    e = e[n]
                } else {
                    e = null
                }
            } catch {
                e = null
            }
        }
        if (typeof e === "string" && e !== "null") {
            try {
                e = JSON.parse(e)
            } catch {}
        }
        if (r === false && !!e && e["magic_session"] === true) {
            e = null
        }
        if ((e === null || typeof e === "undefined") && t !== null && typeof t !== "undefined") {
            e = t
        }
        e = c(e);
        return e
    };
    const o = t => {
        if (typeof t === "string") {
            let e = {};
            try {
                e = JSON.parse(t);
                const n = typeof e;
                if (n !== "object" || e instanceof Array || n === "bool" || e === null) {
                    e = {}
                }
            } catch {}
            return e
        } else if (t instanceof Array || t === null || typeof t === "undefined" || t !== t || typeof t === "boolean") {
            return {}
        } else {
            return t
        }
    };
    const d = (e, t = null, n = "", r = false, i = null) => {
        let o = i || l.data;
        if (!!o && typeof o[e] !== "undefined" && o[e] !== null) {
            val = o[e]
        } else {
            val = !!n ? {} : null
        }
        val = f(val, t, n, r);
        return val
    };
    const p = (e, t = null, n = "", r = false, i = null) => {
        let o = "";
        if (i || s.isNode) {
            o = d(e, t, n, r, i)
        } else {
            if (s.isSurgeLike) {
                o = $persistentStore.read(e)
            } else if (s.isQuanX) {
                o = $prefs.valueForKey(e)
            }
            o = f(o, t, n, r)
        }
        a.debug(`READ DATA [${e}]${!!n ? `[${n}]` : ""} <${typeof o}>\n${JSON.stringify(o)}`);
        return o
    };
    const g = (t, n, r = "", e = null) => {
        let i = e || l.data;
        i = o(i);
        if (!!r) {
            let e = o(i[t]);
            e["magic_session"] = true;
            e[r] = n;
            i[t] = e
        } else {
            i[t] = n
        }
        if (e !== null) {
            e = i
        }
        return i
    };
    const y = (e, t, n = "", r = null) => {
        if (typeof t === "undefined" || t !== t) {
            return false
        }
        if (!s.isNode && (typeof t === "boolean" || typeof t === "number")) {
            t = String(t)
        }
        let i = "";
        if (r || s.isNode) {
            i = g(e, t, n, r)
        } else {
            if (!n) {
                i = t
            } else {
                if (s.isSurgeLike) {
                    i = !!$persistentStore.read(e) ? $persistentStore.read(e) : i
                } else if (s.isQuanX) {
                    i = !!$prefs.valueForKey(e) ? $prefs.valueForKey(e) : i
                }
                i = o(i);
                i["magic_session"] = true;
                i[n] = t
            }
        }
        if (!!i && typeof i === "object") {
            i = JSON.stringify(i, "", "\t")
        }
        a.debug(`WRITE DATA [${e}]${n ? `[${n}]` : ""} <${typeof t}>\n${JSON.stringify(t)}`);
        if (!r) {
            if (s.isSurgeLike) {
                return $persistentStore.write(i, e)
            } else if (s.isQuanX) {
                return $prefs.setValueForKey(i, e)
            } else if (s.isNode) {
                try {
                    l.fs.writeFileSync("./magic.json", i);
                    return true
                } catch (e) {
                    a.error(e);
                    return false
                }
            }
        }
        return true
    };
    const e = (t, n, r, i = u, o = null) => {
        n = c(n);
        const e = p(t, null, r, false, o);
        if (i(e, n) === true) {
            return false
        } else {
            const s = y(t, n, r, o);
            let e = p(t, null, r, false, o);
            if (i === u && typeof e === "object") {
                return s
            }
            return i(n, e)
        }
    };
    const h = (e, t, n) => {
        let r = n || l.data;
        r = o(r);
        if (!!t) {
            obj = o(r[e]);
            delete obj[t];
            r[e] = obj
        } else {
            delete r[e]
        }
        if (!!n) {
            n = r
        }
        return r
    };
    const t = (e, t = "", n = null) => {
        let r = {};
        if (n || s.isNode) {
            r = h(e, t, n);
            if (!n) {
                l.fs.writeFileSync("./magic.json", JSON.stringify(r))
            } else {
                n = r
            }
        } else {
            if (!t) {
                if (s.isStorm) {
                    return $persistentStore.remove(e)
                } else if (s.isSurgeLike) {
                    return $persistentStore.write(null, e)
                } else if (s.isQuanX) {
                    return $prefs.removeValueForKey(e)
                }
            } else {
                if (s.isSurgeLike) {
                    r = $persistentStore.read(e)
                } else if (s.isQuanX) {
                    r = $prefs.valueForKey(e)
                }
                r = o(r);
                delete r[t];
                const i = JSON.stringify(r);
                y(e, i)
            }
        }
        a.debug(`DELETE KEY [${e}]${!!t ? `[${t}]` : ""}`)
    };
    const n = (e, t = null) => {
        let n = [];
        let r = p(e, null, null, true, t);
        r = o(r);
        if (r["magic_session"] !== true) {
            n = []
        } else {
            n = Object.keys(r).filter(e => e !== "magic_session")
        }
        a.debug(`READ ALL SESSIONS [${e}] <${typeof n}>\n${JSON.stringify(n)}`);
        return n
    };
    return {
        read: p,
        write: y,
        del: t,
        update: e,
        allSessions: n,
        defaultValueComparator: u,
        convertToObject: o
    }
}

function MagicUtils(r, u) {
    const e = (o, s = 5, a = 0, l = null) => {
        return (...e) => {
            return new Promise((n, r) => {
                function i(...t) {
                    Promise.resolve().then(() => o.apply(this, t)).then(e => {
                        if (typeof l === "function") {
                            Promise.resolve().then(() => l(e)).then(() => {
                                n(e)
                            }).catch(e => {
                                if (s >= 1) {
                                    if (a > 0) setTimeout(() => i.apply(this, t), a);
                                    else i.apply(this, t)
                                } else {
                                    r(e)
                                }
                                s--
                            })
                        } else {
                            n(e)
                        }
                    }).catch(e => {
                        u.error(e);
                        if (s >= 1 && a > 0) {
                            setTimeout(() => i.apply(this, t), a)
                        } else if (s >= 1) {
                            i.apply(this, t)
                        } else {
                            r(e)
                        }
                        s--
                    })
                }
                i.apply(this, e)
            })
        }
    };
    const t = (e, t = "yyyy-MM-dd hh:mm:ss") => {
        let n = {
            "M+": e.getMonth() + 1,
            "d+": e.getDate(),
            "h+": e.getHours(),
            "m+": e.getMinutes(),
            "s+": e.getSeconds(),
            "q+": Math.floor((e.getMonth() + 3) / 3),
            S: e.getMilliseconds()
        };
        if (/(y+)/.test(t)) t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let e in n)
            if (new RegExp("(" + e + ")").test(t)) t = t.replace(RegExp.$1, RegExp.$1.length == 1 ? n[e] : ("00" + n[e]).substr(("" + n[e]).length));
        return t
    };
    const n = () => {
        return t(new Date, "yyyy-MM-dd hh:mm:ss")
    };
    const i = () => {
        return t(new Date, "yyyy-MM-dd")
    };
    const o = t => {
        return new Promise(e => setTimeout(e, t))
    };
    const s = (e, t = null) => {
        if (r.isNode) {
            const n = require("assert");
            if (t) n(e, t);
            else n(e)
        } else {
            if (e !== true) {
                let e = `AssertionError: ${t || "The expression evaluated to a falsy value"}`;
                u.error(e)
            }
        }
    };
    return {
        retry: e,
        formatTime: t,
        now: n,
        today: i,
        sleep: o,
        assert: s
    }
}

function MagicQingLong(e, l, i) {
    let o = "";
    let s = "";
    let a = "";
    let u = "";
    let c = "";
    let t = "";
    const f = "magic.json";
    const n = 3e3;
    const d = MagicHttp(e, i);
    const r = (e, t, n, r, i) => {
        o = e;
        a = t;
        u = n;
        s = r;
        c = i
    };

    function p(e) {
        o = o || l.read("magic_qlurl");
        t = t || l.read("magic_qltoken");
        return e
    }

    function g(e) {
        if (!o) {
            o = l.read("magic_qlurl")
        }
        if (e.url.indexOf(o) < 0) {
            e.url = `${o}${e.url}`
        }
        return {
            ...e,
            timeout: n
        }
    }

    function y(e) {
        e.params = {
            ...e.params,
            t: Date.now()
        };
        return e
    }

    function h(e) {
        t = t || l.read("magic_qltoken");
        if (t) {
            e.headers["Authorization"] = `Bearer ${t}`
        }
        return e
    }

    function m(e) {
        a = a || l.read("magic_qlclient");
        if (!!a) {
            e.url = e.url.replace("/api/", "/open/")
        }
        return e
    }
    async function $(e) {
        try {
            const t = e.message || e.error || JSON.stringify(e);
            if ((t.indexOf("NSURLErrorDomain") >= 0 && t.indexOf("-1012") >= 0 || !!e.response && e.response.status === 401) && (!!e.config && e.config.refreshToken !== true)) {
                i.warning(`Qinglong panel token has expired`);
                await b();
                e.config["refreshToken"] = true;
                return await d.request(e.config.method, e.config)
            } else {
                return Promise.reject(e)
            }
        } catch (e) {
            return Promise.reject(e)
        }
    }
    d.interceptors.request.use(p, undefined);
    d.interceptors.request.use(g, undefined);
    d.interceptors.request.use(m, undefined, {
        runWhen: e => {
            return e.url.indexOf("api/user/login") < 0 && e.url.indexOf("open/auth/token") < 0
        }
    });
    d.interceptors.request.use(h, undefined, {
        runWhen: e => {
            return e.url.indexOf("api/user/login") < 0 && e.url.indexOf("open/auth/token") < 0
        }
    });
    d.interceptors.request.use(y, undefined, {
        runWhen: e => {
            return e.url.indexOf("open/auth/token") < 0 && e.url.indexOf("t=") < 0
        }
    });
    d.interceptors.response.use(undefined, $);
    async function b() {
        a = a || l.read("magic_qlclient");
        u = u || l.read("magic_qlsecrt");
        s = s || l.read("magic_qlname");
        c = c || l.read("magic_qlpwd");
        if (o && a && u) {
            await d.get({
                url: `/open/auth/token`,
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    client_id: a,
                    client_secret: u
                }
            }).then(e => {
                i.info("Log in to Qinglong panel successfully");
                t = e.body.data.token;
                l.update("magic_qltoken", t);
                return t
            }).catch(e => {
                i.error(`Failed to log in to Qinglong panel.\n${e.message}`)
            })
        } else if (o && s && c) {
            await d.post({
                url: `/api/user/login`,
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    username: s,
                    password: c
                }
            }).then(e => {
                i.info("Log in to Qinglong panel successfully");
                t = e.body.data.token;
                l.update("magic_qltoken", t);
                return t
            }).catch(e => {
                i.error(`Failed to log in to Qinglong panel.\n${e.message}`)
            })
        }
    }
    async function S(t, n, r = null) {
        o = o || l.read("magic_qlurl");
        if (r === null) {
            let e = await N([{
                name: t,
                value: n
            }]);
            if (!!e && e.length === 1) {
                return e[0]
            }
        } else {
            d.put({
                url: `/api/envs`,
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    name: t,
                    value: n,
                    id: r
                }
            }).then(e => {
                if (e.body.code === 200) {
                    i.debug(`QINGLONG UPDATE ENV ${t} <${typeof n}> (${r})\n${JSON.stringify(n)}`);
                    return true
                } else {
                    i.error(`Failed to update Qinglong panel environment variable.\n${JSON.stringify(e)}`)
                }
            }).catch(e => {
                i.error(`Failed to update Qinglong panel environment variable.\n${e.message}`);
                return false
            })
        }
    }
    async function N(e) {
        let t = [];
        await d.post({
            url: `/api/envs`,
            headers: {
                "Content-Type": "application/json"
            },
            body: e
        }).then(e => {
            if (e.body.code === 200) {
                e.body.data.forEach(e => {
                    i.debug(`QINGLONG ADD ENV ${e.name} <${typeof e.value}> (${e.id})\n${JSON.stringify(e)}`);
                    t.push(e.id)
                })
            } else {
                i.error(`Failed to add Qinglong panel environment variable.\n${JSON.stringify(e)}`)
            }
        }).catch(e => {
            i.error(`Failed to add Qinglong panel environment variable.\n${e.message}`)
        });
        return t
    }
    async function v(t) {
        return await d.delete({
            url: `/api/envs`,
            headers: {
                Accept: "application/json",
                "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                Connection: "keep-alive",
                "Content-Type": "application/json;charset=UTF-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36 Edg/102.0.1245.30"
            },
            body: t
        }).then(e => {
            if (e.body.code === 200) {
                i.debug(`QINGLONG DELETE ENV IDS: ${t}`);
                return true
            } else {
                i.error(`Failed to delete QingLong envs.\n${JSON.stringify(e)}`);
                return false
            }
        }).catch(e => {
            i.error(`Failed to delete QingLong envs.\n${e.message}`)
        })
    }
    async function O(n = null, e = "") {
        let r = [];
        await d.get({
            url: `/api/envs`,
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                searchValue: e
            }
        }).then(e => {
            if (e.body.code === 200) {
                const t = e.body.data;
                if (!!n) {
                    let e = [];
                    for (const e of t) {
                        if (e.name === n) {
                            r.push(e)
                        }
                    }
                    r = e
                }
                r = t
            } else {
                i.error(`Failed to get environment variables from Qinglong panel.\n${JSON.stringify(e)}`)
            }
        }).catch(e => {
            i.error(`Failed to get environment variables from Qinglong panel.\n${JSON.stringify(e)}`)
        });
        return r
    }
    async function E(e) {
        let t = null;
        const n = await O();
        for (const r of n) {
            if (r.id === e) {
                t = r;
                break
            }
        }
        return t
    }
    async function T(t) {
        let n = false;
        await d.put({
            url: `/api/envs/disable`,
            headers: {
                Accept: "application/json",
                "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                Connection: "keep-alive",
                "Content-Type": "application/json;charset=UTF-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36 Edg/102.0.1245.30"
            },
            body: t
        }).then(e => {
            if (e.body.code === 200) {
                i.debug(`QINGLONG DISABLED ENV IDS: ${t}`);
                n = true
            } else {
                i.error(`Failed to disable QingLong envs.\n${JSON.stringify(e)}`)
            }
        }).catch(e => {
            i.error(`Failed to disable QingLong envs.\n${e.message}`)
        });
        return n
    }
    async function w(t) {
        let n = false;
        await d.put({
            url: `/api/envs/enable`,
            headers: {
                Accept: "application/json",
                "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                Connection: "keep-alive",
                "Content-Type": "application/json;charset=UTF-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36 Edg/102.0.1245.30"
            },
            body: t
        }).then(e => {
            if (e.body.code === 200) {
                i.debug(`QINGLONG ENABLED ENV IDS: ${t}`);
                n = true
            } else {
                i.error(`Failed to enable QingLong envs.\n${JSON.stringify(e)}`)
            }
        }).catch(e => {
            i.error(`Failed to enable QingLong envs.\n${e.message}`)
        });
        return n
    }
    async function C(e, t = "", n = "") {
        let r = false;
        await d.post({
            url: `/api/scripts`,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                filename: e,
                path: t,
                content: n
            }
        }).then(e => {
            if (e.body.code === 200) {
                r = true
            } else {
                i.error(`Failed to add script content from Qinglong panel.\n${JSON.stringify(e)}`)
            }
        }).catch(e => {
            i.error(`Failed to add script content from Qinglong panel.\n${e.message}`)
        });
        return r
    }
    async function A(e, t = "") {
        let n = "";
        await d.get({
            url: `/api/scripts/${e}`,
            params: {
                path: t
            }
        }).then(e => {
            if (e.body.code === 200) {
                n = e.body.data
            } else {
                i.error(`Failed to read script content from Qinglong panel.\n${JSON.stringify(e)}`)
            }
        }).catch(e => {
            i.error(`Failed to read script content from Qinglong panel.\n${e.message}`)
        });
        return n
    }
    async function k(e, t = "", n = "") {
        let r = false;
        await d.put({
            url: `/api/scripts`,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                filename: e,
                path: t,
                content: n
            }
        }).then(e => {
            if (e.body.code === 200) {
                r = true
            } else {
                i.error(`Failed to read script content from Qinglong panel.\n${JSON.stringify(e)}`)
            }
        }).catch(e => {
            i.error(`Failed to read script content from Qinglong panel.\n${e.message}`)
        });
        return r
    }
    async function L(e, t = "") {
        let n = false;
        await d.delete({
            url: `/api/scripts`,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                filename: e,
                path: t
            }
        }).then(e => {
            if (e.body.code === 200) {
                n = true
            } else {
                i.error(`Failed to read script content from Qinglong panel.\n${JSON.stringify(e)}`)
            }
        }).catch(e => {
            i.error(`Failed to read script content from Qinglong panel.\n${e.message}`)
        });
        return n
    }
    async function F(e, t, n = "") {
        let r = await A(f, "");
        let i = l.convertToObject(r);
        let o = l.write(e, t, n, i);
        r = JSON.stringify(i, "", "\t");
        let s = await k(f, "", r);
        return s && o
    }
    async function j(e, t, n, r = l.defaultValueComparator) {
        let i = await A(f, "");
        let o = l.convertToObject(i);
        const s = l.update(e, t, n, r, o);
        let a = false;
        if (s === true) {
            i = JSON.stringify(o, "", "\t");
            a = await k(f, "", i)
        }
        return s && a
    }
    async function M(e, t, n = "") {
        let r = await A(f, "");
        let i = l.convertToObject(r);
        const o = l.read(e, t, n, false, i);
        return o
    }
    async function R(e, t = "") {
        let n = await A(f, "");
        let r = l.convertToObject(n);
        const i = l.del(e, t, r);
        n = JSON.stringify(r, "", "\t");
        const o = await k(f, "", n);
        return i && o
    }
    async function q(e) {
        let t = await A(f, "");
        let n = l.convertToObject(t);
        const r = l.allSessions(e, n);
        return r
    }
    return {
        init: r,
        getToken: b,
        setEnv: S,
        setEnvs: N,
        getEnv: E,
        getEnvs: O,
        delEnvs: v,
        disableEnvs: T,
        enbleEnvs: w,
        addScript: C,
        getScript: A,
        editScript: k,
        delScript: L,
        write: F,
        read: M,
        del: R,
        update: j,
        allSessions: q
    }
}