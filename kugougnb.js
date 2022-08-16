var obj = JSON.parse($response.body);

var url = $request.url;

if(url.indexOf("batch_union_vipinfo")>-1){
obj.data.busi_vip_list[0].vip_end_time = "2029-08-18 23:52:13";
obj.data.busi_vip_list[0].is_vip = 1;
obj.data.busi_vip_list[0].purchased_ios_type = 1;
};

if(url.indexOf("get_my_info")>-1){
obj.data.fans = 96112400;
obj.data.union_vipinfo.is_vip = 1;
obj.data.svip_level = 6;};

if(url.indexOf("album_songlist")>-1){
for(var i = 0; i < obj.data.total; i++){
obj.data.songs[i].deprecated.pay_type = 3;
obj.data.songs[i].deprecated.price = 0;

};
};

if(url.indexOf("chgurl_arr")>-1){
obj = {
  "status" : 1,
  "timeLength" : 236,
  "fileName" : "威廉古堡",
  "trans_param" : {
    "display" : 32,
    "classmap" : {
      "attr0" : 234885128
    },
    "display_rate" : 1
  },
  "bitRate" : 128000,
  "fileHead" : 100,
  "extName" : "mp3",
  "q" : 0,
  "fileSize" : 3780218,
  "url" : [
    "http://fs.youthios.kugou.com/202208160221/edfb96eb932bcce6fb5965334c5371b0/v2/b9c4490caf581c4612bf0672965a9802/KGTX/CLTX001/b9c4490caf581c4612bf0672965a9802.mp3",
    "http://fs.youthios2.kugou.com/202208160221/613e8df0ae66ef4e91ca6985a86fd7d1/v2/b9c4490caf581c4612bf0672965a9802/KGTX/CLTX001/b9c4490caf581c4612bf0672965a9802.mp3"
  ]
}

};

$done({body : JSON.stringify(obj)});
