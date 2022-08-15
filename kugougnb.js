var obj = JSON.parse($response.body);
       
obj.data.fans = 96112400;
obj.data.union_vipinfo.is_vip = 1;
obj.data.svip_level = 6;

$done({body : JSON.stringify(obj)});
