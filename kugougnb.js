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

$done({body : JSON.stringify(obj)});
