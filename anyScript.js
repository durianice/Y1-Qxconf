var obj = JSON.parse($response.body);
var url = $request.url;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var match_0 = url.indexOf("nucleicAcid/v1/result") > -1
if (match_0) {
  let pastDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  let y = pastDate.getFullYear();
  let m = pastDate.getMonth() + 1;
  let d = pastDate.getDate() > 9 ? pastDate.getDate() : '0' + pastDate.getDate();
  let yesterday = `${y}-${m}-${d}`;
  let startHms = `${getRandomIntInclusive(9, 16)}:${getRandomIntInclusive(0, 60)}:${getRandomIntInclusive(0, 60)}`;
  let endHms = `${getRandomIntInclusive(18, 23)}:${getRandomIntInclusive(0, 60)}:${getRandomIntInclusive(0, 60)}`;
  let sampling_date = `${yesterday} ${startHms}`;
  let testing_date = `${yesterday} ${endHms}`;
  obj.data.unshift({
      "xxzjbh" : "68fc9290a55345f7ace020c79f306a27",
      "result" : "阴性",
      "institution" : "广州白云云康达安医学检验实验室",
      "identityType" : 1,
      "sampling_date" : sampling_date,
      "testing_date" : testing_date,
      "identity" : "17b7187ed21b2fa84b269094e87de6ef0dff649101eebc583ca4b56e2dde0e2c",
      "gj" : "中国",
      "name" : "28bde6fd52d00e96529bed746589fd68"
    });
}
$done({ body: JSON.stringify(obj) });
