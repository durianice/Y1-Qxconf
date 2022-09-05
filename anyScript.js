// 仅用于学习测试，请勿用作其他途径。遵纪守法，脚踏实地。
// 仅用于学习测试，请勿用作其他途径。遵纪守法，脚踏实地。
// 仅用于学习测试，请勿用作其他途径。遵纪守法，脚踏实地。
// 仅用于学习测试，请勿用作其他途径。遵纪守法，脚踏实地。
// 仅用于学习测试，请勿用作其他途径。遵纪守法，脚踏实地。

var obj = JSON.parse($response.body);
var url = $request.url;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var match_0 = url.indexOf("nucleicAcid/v1/result") > -1;
var match_1 = url.indexOf("api.iq.com/video/play") > -1;
if (match_0) {
  let pastDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  let y = pastDate.getFullYear();
  let m = pastDate.getMonth() + 1;
  m = m > 9 ? m : "0" + m;
  let d = pastDate.getDate() > 9 ? pastDate.getDate() : '0' + pastDate.getDate();
  let yesterday = `${y}-${m}-${d}`;
  let startHms = `${getRandomIntInclusive(9, 12)}:${getRandomIntInclusive(0, 60)}:${getRandomIntInclusive(0, 60)}`;
  let endHms = `${getRandomIntInclusive(18, 23)}:${getRandomIntInclusive(0, 60)}:${getRandomIntInclusive(0, 60)}`;
  let sampling_date = `${yesterday} ${startHms}`;
  let testing_date = `${yesterday} ${endHms}`;
  let temp = { sampling_date, testing_date };
  Object.assign(obj.data[0], temp);
}
if (match_1) {
  obj.vedio.vip_type = [0];
}
$done({ body: JSON.stringify(obj) });
