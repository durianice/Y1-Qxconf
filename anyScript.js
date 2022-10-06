// 仅用于学习测试，请勿用作其他途径。遵纪守法，脚踏实地。
// 仅用于学习测试，请勿用作其他途径。遵纪守法，脚踏实地。
// 仅用于学习测试，请勿用作其他途径。遵纪守法，脚踏实地。
// 仅用于学习测试，请勿用作其他途径。遵纪守法，脚踏实地。
// 仅用于学习测试，请勿用作其他途径。遵纪守法，脚踏实地。

var obj = JSON.parse($response.body);
var url = $request.url;
let util = init();
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return presetZero(Math.floor(Math.random() * (max - min + 1)) + min);
}
function presetZero(num) {
  return num > 9 ? num : '0' + num;
}

function getTestTime() {
  let pastDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  let y = pastDate.getFullYear();
  let m = pastDate.getMonth() + 1;
  let d = pastDate.getDate();
  d = presetZero(d);
  m = presetZero(m);
  let yesterday = `${y}-${m}-${d}`;
  let startHms = `${getRandomIntInclusive(9, 12)}:${getRandomIntInclusive(0, 60)}:${getRandomIntInclusive(0, 60)}`;
  let endHms = `${getRandomIntInclusive(18, 23)}:${getRandomIntInclusive(0, 60)}:${getRandomIntInclusive(0, 60)}`;
  let startDate = `${yesterday} ${startHms}`;
  let endDate = `${yesterday} ${endHms}`;
  return { a: startDate, b: endDate };
};

function getTime() {
  const exp_t = util.getdata("test_exp_t") || 0;
  util.log(`过期时间 \n ${exp_t}`);
  util.log(util.getdata("test_time"));
  util.log(`是否过期 \n ${new Date().getTime() - Number(exp_t) > 24 * 60 * 60 * 1000}`);
  let result = null;
  if (new Date().getTime() - Number(exp_t) > 24 * 60 * 60 * 1000) {
    const t = getTestTime();
    util.setdata("test_time", t);
    util.setdata("test_exp_t", new Date().getTime());
    result = t;
  } else {
    result = util.getdata("test_time");
  };
  return result;
};

var match_0 = url.indexOf("nucleicAcid/v1/result") > -1;
var match_1 = url.indexOf("cat-match-static.easygame2021.com/maps") > -1;
var match_2 = url.indexOf("nuclein/listNucleate") || url.indexOf("nuclein/listNucleateLast");
if (match_0) {
  let { a, b } = getTime();
  let temp = {
    sampling_date: a,
    testing_date: b
  };
  let last = JSON.parse(JSON.stringify(obj.data[0]));
  Object.assign(last, temp);
  obj.data.unshift(last);
  // Object.assign(obj.data[0], temp);
};
if (match_2) {
  let { a, b } = getTime();
  let temp = {
    sampleTime: a,
    nucleateCheckDate: b
  };
  let last = JSON.parse(JSON.stringify(obj.data[0]));
  Object.assign(last, temp);
  obj.data.unshift(last);
  // Object.assign(obj.data[0], temp);
};
$done({ body: JSON.stringify(obj) });

function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
chavy.done()

