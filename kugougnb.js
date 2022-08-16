var obj = JSON.parse($response.body);
var url = $request.url;

var match_0 =
  url.indexOf("batch_union_vipinfo") > -1 ||
  url.indexOf("batch_union_vipinfo") > -1;
var match_1 = url.indexOf("get_my_info") > -1;
var match_2 = url.indexOf("album_songlist") > -1;
var match_3 = url.indexOf("chgurl_arr") > -1;

if (match_0) {
  obj.data.busi_vip_list[0].vip_end_time = "2035-01-01 00:00:00";
  obj.data.busi_vip_list[0].is_vip = 1;
  obj.data.busi_vip_list[0].purchased_ios_type = 1;
}

if (match_1) {
  obj.data.fans = 961124000;
  obj.data.union_vipinfo.is_vip = 1;
  obj.data.svip_level = 6;
}

if (match_2) {
  for (var i = 0; i < obj.data.total; i++) {
    obj.data.songs[i].deprecated.pay_type = 3;
    obj.data.songs[i].deprecated.price = 0;
  }
}

if (match_3) {
  obj = {
    status: 1,
    timeLength: obj.timeLength,
    fileName: obj.fileName,
    trans_param: {
      display: 32,
      classmap: {
        attr0: 234885128,
      },
      display_rate: 1,
    },
    bitRate: 128000,
    fileHead: 100,
    extName: "mp3",
    q: 0,
    fileSize: obj.fileSize,
    url: obj.url,
  };
}

$done({ body: JSON.stringify(obj) });
