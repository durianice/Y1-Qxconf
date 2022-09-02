var obj = JSON.parse($response.body);
var url = $request.url;

var match_0 = url.indexOf("nucleicAcid/v1/result") > -1

if (match_0) {
  obj.data[0].sampling_data = "2022-09-02 10:20:20"
  obj.data[0].testing_data = "2022-09-02 17:20:20"
}


$done({ body: JSON.stringify(obj) });
