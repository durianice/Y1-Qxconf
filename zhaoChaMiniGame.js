const url = $request.url;
const body = $response.body;
let obj = JSON.parse(body);
const requestType = /&do=([a-zA-Z_]*)/.exec(url)[1];
switch (requestType) {
    // 登录
    case 'login':
        if (obj.code == 200) {
            const modiftData = {
                rank: 17,
                // sign_alert: 1,
                money: "788",
                // is_float: 0,
                // openid: "oEQX35fw6MATmB3YsOVqbLtDm1iM",
                rank_img: "https://xcx.chinafdc.store/attachment/yf_zhaocha_resource/images/rank/rank17.png",
                // nickname: "",
                rank_name_img: "https://xcx.chinafdc.store/attachment/yf_zhaocha_resource/images/rank/rank17_1.png",
                will_title: "恭喜您已经超越99%的玩家",
                ticket: 999,
                // service_flag: 0,
                // open_sound: 1,
                // first_login: 0,
                // session_key: "YRbu1g7yufh9R6CNfFNSmg==",
                // avatarurl: "",
                // token: "9dbefcd591434deb48dd795c8f98ea3b",
                // uid: "oEQX35fw6MATmB3YsOVqbLtDm1iM",
                // sign_in: 0,
                // noticeCard: 1,
                gold: 7209988,
                // value: 1,
                value_name: "超强王者",
                // is_userinfo: 1,
                // is_add: 0
            };
            Object.assign(obj.data, modiftData)
        }
        break;
        // 体力
    case 'residue_time':
        break;
        // 排名
    case 'rank':
        break;
        // 关卡
    case 'start_game':
        if (obj.code == 200) {
            obj.data.question.forEach(item => {
                if (item.name !== 'layer') {
                    item.url = 'https://pic4.zhimg.com/80/v2-3eab60b8d4c5fc0892ee5bb8b1e2842f_720w.jpg'
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