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
function presetZero(num) {
  return num > 9 ? num : '0' + num;
}

var match_0 = url.indexOf("nucleicAcid/v1/result") > -1;
if (match_0) {
  let pastDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  let y = pastDate.getFullYear();
  let m = pastDate.getMonth() + 1;
  let d = pastDate.getDate();
  let yesterday = `${y}-${m}-${d}`;
  let startHms = `${getRandomIntInclusive(9, 12)}:${getRandomIntInclusive(0, 60)}:${getRandomIntInclusive(0, 60)}`;
  let endHms = `${getRandomIntInclusive(18, 23)}:${getRandomIntInclusive(0, 60)}:${getRandomIntInclusive(0, 60)}`;
  let sampling_date = `${yesterday} ${startHms}`;
  let testing_date = `${yesterday} ${endHms}`;
  let temp = { sampling_date, testing_date };
  Object.assign(obj.data[0], temp);
}
$done({ body: JSON.stringify(obj) });
