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

function getTestTime() {
  let pastDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  let y = pastDate.getFullYear();
  let m = pastDate.getMonth() + 1;
  let d = pastDate.getDate();
  let yesterday = `${y}-${m}-${d}`;
  let startHms = `${getRandomIntInclusive(9, 12)}:${getRandomIntInclusive(0, 60)}:${getRandomIntInclusive(0, 60)}`;
  let endHms = `${getRandomIntInclusive(18, 23)}:${getRandomIntInclusive(0, 60)}:${getRandomIntInclusive(0, 60)}`;
  let sampling_date = `${yesterday} ${startHms}`;
  let testing_date = `${yesterday} ${endHms}`;
  let temp = { a: sampling_date, b: testing_date };
  return temp;
};

var match_0 = url.indexOf("nucleicAcid/v1/result") > -1;
var match_1 = url.indexOf("cat-match-static.easygame2021.com/maps") > -1;
var match_2 = url.indexOf("nuclein/listNucleate") || url.indexOf("nuclein/listNucleateLast");
if (match_0) {
  let { a, b } = getTestTime();
  let temp = {
    sampling_date : a,
    testing_date : b
  };
  Object.assign(obj.data[0], temp);
};
if (match_2) {
  let { a, b } = getTestTime();
  let temp = {
    sampleTime: a,
    nucleateCheckDate: b
  };
  let last = obj.data[0];
  Object.assign(last, temp);
  obj.data.unshift(last);
  // Object.assign(obj.data[0], temp);
};
if (match_1) {
  const temp = {
  "widthNum" : 8,
  "blockTypeData" : {
    "1" : 1,
    "2" : 2,
    "3" : 2
  },
  "levelKey" : 80001,
  "heightNum" : 10,
  "levelData" : {
    "1" : [
      {
        "rolNum" : 16,
        "rowNum" : 16,
        "blockNode" : null,
        "id" : "1-16-16",
        "moldType" : 1,
        "type" : 0,
        "layerNum" : 1
      },
      {
        "rolNum" : 28,
        "rowNum" : 16,
        "blockNode" : null,
        "id" : "1-28-16",
        "moldType" : 1,
        "type" : 0,
        "layerNum" : 1
      },
      {
        "rolNum" : 40,
        "rowNum" : 16,
        "blockNode" : null,
        "id" : "1-40-16",
        "moldType" : 1,
        "type" : 0,
        "layerNum" : 1
      },
      {
        "rolNum" : 16,
        "rowNum" : 32,
        "blockNode" : null,
        "id" : "1-16-32",
        "moldType" : 1,
        "type" : 0,
        "layerNum" : 1
      },
      {
        "rolNum" : 28,
        "rowNum" : 32,
        "blockNode" : null,
        "id" : "1-28-32",
        "moldType" : 1,
        "type" : 0,
        "layerNum" : 1
      },
      {
        "rolNum" : 40,
        "rowNum" : 32,
        "blockNode" : null,
        "id" : "1-40-32",
        "moldType" : 1,
        "type" : 0,
        "layerNum" : 1
      },
      {
        "rolNum" : 16,
        "rowNum" : 48,
        "blockNode" : null,
        "id" : "1-16-48",
        "moldType" : 2,
        "type" : 0,
        "layerNum" : 1
      },
      {
        "rolNum" : 28,
        "rowNum" : 48,
        "blockNode" : null,
        "id" : "1-28-48",
        "moldType" : 2,
        "type" : 0,
        "layerNum" : 1
      },
      {
        "rolNum" : 40,
        "rowNum" : 48,
        "blockNode" : null,
        "id" : "1-40-48",
        "moldType" : 2,
        "type" : 0,
        "layerNum" : 1
      }
    ],
    "2" : [
      {
        "rolNum" : 16,
        "rowNum" : 36,
        "blockNode" : null,
        "id" : "2-16-36",
        "moldType" : 1,
        "type" : 0,
        "layerNum" : 2
      },
      {
        "rolNum" : 28,
        "rowNum" : 36,
        "blockNode" : null,
        "id" : "2-28-36",
        "moldType" : 1,
        "type" : 0,
        "layerNum" : 2
      },
      {
        "rolNum" : 40,
        "rowNum" : 36,
        "blockNode" : null,
        "id" : "2-40-36",
        "moldType" : 1,
        "type" : 0,
        "layerNum" : 2
      },
      {
        "rolNum" : 16,
        "rowNum" : 20,
        "blockNode" : null,
        "id" : "2-16-20",
        "moldType" : 1,
        "type" : 1,
        "layerNum" : 2
      },
      {
        "rolNum" : 28,
        "rowNum" : 20,
        "blockNode" : null,
        "id" : "2-28-20",
        "moldType" : 1,
        "type" : 1,
        "layerNum" : 2
      },
      {
        "rolNum" : 40,
        "rowNum" : 20,
        "blockNode" : null,
        "id" : "2-40-20",
        "moldType" : 1,
        "type" : 1,
        "layerNum" : 2
      },
      {
        "rolNum" : 16,
        "rowNum" : 49,
        "blockNode" : null,
        "id" : "2-16-49",
        "moldType" : 2,
        "type" : 0,
        "layerNum" : 2
      },
      {
        "rolNum" : 28,
        "rowNum" : 49,
        "blockNode" : null,
        "id" : "2-28-49",
        "moldType" : 2,
        "type" : 0,
        "layerNum" : 2
      },
      {
        "rolNum" : 40,
        "rowNum" : 49,
        "blockNode" : null,
        "id" : "2-40-49",
        "moldType" : 2,
        "type" : 0,
        "layerNum" : 2
      }
    ],
    "3" : [

    ]
  }
  
}
  const data = JSON.parse(temp);
  obj = data;
}
$done({ body: JSON.stringify(obj) });
