var obj = JSON.parse($response.body);
var url = $request.url;

if (url.indexOf("batch_union_vipinfo") > -1) {
  obj.data.busi_vip_list[0].vip_end_time = "2029-08-18 23:52:13";
  obj.data.busi_vip_list[0].is_vip = 1;
  obj.data.busi_vip_list[0].purchased_ios_type = 1;
}

if (url.indexOf("get_my_info") > -1) {
  obj.data.fans = 96112400;
  obj.data.union_vipinfo.is_vip = 1;
  obj.data.svip_level = 6;
}

if (url.indexOf("album_songlist") > -1) {
  for (var i = 0; i < obj.data.total; i++) {
    obj.data.songs[i].deprecated.pay_type = 3;
    obj.data.songs[i].deprecated.price = 0;
  }
}

if (url.indexOf("chgurl_arr") > -1) {
  var newObj = {
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
  obj = JSON.parse(JSON.stringify(newObj));
  console.log(obj)
}

$done({ body: JSON.stringify(obj) });
