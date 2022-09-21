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
            obj.data.status = 2;
            obj.data.question.forEach(item => {
                if (item.name == 'layer') {
                    item.url = '';
                }
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
                if (item.name == 'layer') {
                    item.url = '';
                }
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