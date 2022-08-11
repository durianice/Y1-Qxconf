var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const userinfo = '/userInfo';
const setfree = '/special';

if (url.indexOf(setfree) != -1) {
   obj.data.isFree = true;
   obj.data.random = "i1K4Ooqy6/9202tbGnNB2MxdXFaJ3j3aENe/gxZ+QBw=";
   for (var i = 0; i < obj.data.pictureList.length; i++) {
       obj.data.pictureList[i].isFree = true;
   }
   body = JSON.stringify(obj);
}
if (url.indexOf(userinfo) != -1) {
   obj.data.level = 5;
   obj.data.expireTime = 4070965662;
   body = JSON.stringify(obj);
}
if (url.indexOf("/update") != -1) {
   obj.data.level = 5;
   obj.data.expireTime = 4070965662;
   
}
$done({body});
