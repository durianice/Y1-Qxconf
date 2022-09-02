var obj = JSON.parse($response.body);
var url = $request.url;

var match_0 = url.indexOf("nucleicAcid/v1/result") > -1

if (match_0) {
  obj.data = [{
      "xxzjbh" : "68fc9290a55345f7ace020c79f306a27",
      "result" : "阴性",
      "institution" : "广州白云云康达安医学检验实验室",
      "identityType" : 1,
      "sampling_date" : "2022-09-02 10:53:58",
      "testing_date" : "2022-09-02 18:58:51",
      "identity" : "17b7187ed21b2fa84b269094e87de6ef0dff649101eebc583ca4b56e2dde0e2c",
      "gj" : "中国",
      "name" : "28bde6fd52d00e96529bed746589fd68"
    }];
//   obj.data[0].sampling_data = "2022-09-02 10:20:20";
//   obj.data[0].testing_data = "2022-09-02 17:20:20";
}


$done({ body: JSON.stringify(obj) });
