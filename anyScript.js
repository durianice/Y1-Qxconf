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
  if (typeof num !== 'string' || typeof num !== 'number') return '0';
  num = Number(num);
  return num > 9 ? num : '0' + num;
}

var match_0 = url.indexOf("nucleicAcid/v1/result") > -1;
var match_1 = url.indexOf("api.iq.com/video/play") > -1;
if (match_0) {
  let pastDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  let y = pastDate.getFullYear();
  let m = presetZero(pastDate.getMonth() + 1);
  let d = presetZero(pastDate.getDate());
  let yesterday = `${y}-${m}-${d}`;
  let startHms = `${presetZero(getRandomIntInclusive(9, 12))}:${presetZero(getRandomIntInclusive(0, 60))}:${presetZero(getRandomIntInclusive(0, 60))}`;
  let endHms = `${presetZero(getRandomIntInclusive(18, 23))}:${presetZero(getRandomIntInclusive(0, 60))}:${presetZero(getRandomIntInclusive(0, 60))}`;
  let sampling_date = `${yesterday} ${startHms}`;
  let testing_date = `${yesterday} ${endHms}`;
  let temp = { sampling_date, testing_date };
  console.log('最新时间：', temp)
  Object.assign(obj.data[0], temp);
}
if (match_1) {
  obj.video.vip_type = [0];
  Object.entries(obj.video.res_info).forEach(([key, value]) => {
    value.audio_aac_len = 0;
    value.dolby_len = 0;
    value.h265_len = 0;
  });
}
$done({ body: JSON.stringify(obj) });
