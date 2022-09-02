var obj = JSON.parse($response.body);
var url = $request.url;

var match_0 =
  url.indexOf("batch_union_vipinfo") > -1 ||
  url.indexOf("batch_union_vipinfo") > -1;
var match_1 = url.indexOf("get_my_info") > -1;
var match_2 = url.indexOf("kmr/v1/album_songlist") > -1;
var match_3 = url.indexOf("chgurl_arr") > -1;
var match_4 = url.indexOf("ykm.gdbs.gov.cn/api/open/r/ykmlb/GetInfo") > -1;

if (match_0) {
  obj.data.busi_vip_list[0].vip_end_time = "2035-01-01 00:00:00";
  obj.data.busi_vip_list[0].is_vip = 1;
  obj.data.busi_vip_list[0].purchased_ios_type = 1;
}

if (match_1) {
  obj.data.fans = 961124000;
  obj.data.union_vipinfo.is_vip = 1;
  obj.data.svip_level = 6;
}

if (match_2) {
  for (var i = 0; i < obj.data.total; i++) {
    obj.data.songs[i] = {
      extend: {
        has_obbligato: 1,
        sort: 1,
      },
      audio_info: {
        hash_high: "",
        filesize_high: 0,
        hash_320: "14E9B35A5247F57AEB48DFE32E52EEFE",
        bitrate: 128,
        duration_128: 29857,
        duration_high: 29813,
        filesize: 478460,
        duration: 29857,
        hash_flac: "8646378A76E4F40CB1B6581F22F1A4E1",
        hash_128: "66B756FB1331807B032EF97F7BA9948E",
        filesize_320: 1195678,
        bitrate_super: 0,
        filesize_128: 478460,
        duration_flac: 29813,
        filesize_flac: 2506570,
        hash_super: "",
        extname: "mp3",
        hash: "",
        bitrate_high: 1374,
        duration_super: 0,
        extname_super: "",
        filesize_super: 0,
        duration_320: 29857,
      },
      base: {
        author_name: "周杰伦",
        is_publish: 1,
        audio_name: "听妈妈的话",
        album_id: 58849245,
        audio_id: 176319740,
        album_audio_id: 424968832,
      },
      album_info: {
        album_name: "最伟大的作品",
      },
      trans_param: {
        hash_offset: {
          end_ms: 999999999,
          clip_hash: "0B4E0C4249685A93945892C387256992",
          file_type: 0,
          end_byte: 999999999,
          offset_hash: "BC2FB78255EF9F70C5E84632CB6176AB",
          start_byte: 0,
          start_ms: 0,
        },
        hash_multitrack: "F36D0F9A56A7FB71E6FC8165871F6032",
        ownercount: 0,
        classmap: {
          attr0: 234885128,
        },
        musicpack_advance: 1,
        display: 32,
        cid: 32127346,
        appid_block: "3124",
        cpy_attr0: 0,
        cpy_level: 1,
        cpy_grade: 5,
        display_rate: 1,
        pay_block_tpl: 1,
        sort: 1,
      },
      extra: {
        remark: "",
      },
      copyright: {
        privilege_128: 10,
        privilege: 10,
        sale_mode_128_download: 4,
        album_sale_url: "",
        privilege_320: 10,
        sale_mode_download: 4,
        privilege_flac: 10,
        sale_mode_320_download: 4,
        sale_mode_flac_download: 4,
        viponly_tag: 1,
        audition: {
          end_ms: 999999999,
          clip_hash: "0B4E0C4249685A93945892C387256992",
          file_type: 0,
          end_byte: 999999999,
          offset_hash: "BC2FB78255EF9F70C5E84632CB6176AB",
          start_byte: 0,
          start_ms: 0,
        },
      },
      musical: {},
      deprecated: {
        cpy_grade: 5,
        video_hash: "",
        pay_block_tpl: 1,
        old_cpy: 0,
        display: 32,
        pay_type: 0,
        price: 0,
        pkg_price: 1,
        type: "audio",
        display_rate: 1,
        cid: 219196643,
      },
      authors: [
        {
          author_name: "周杰伦",
          author_id: 3520,
        },
      ],
    };
  }
}

if (match_3) {
  obj = {
    status: 1,
    timeLength: obj.timeLength,
    fileName: obj.fileName,
    trans_param: {
      display: 32,
      classmap: {
        attr0: 234885128,
      },
      display_rate: 1,
    },
    bitRate: 128000,
    fileHead: 100,
    extName: "mp3",
    q: 0,
    fileSize: obj.fileSize,
    url: obj.url,
  };
}
if (match_4){
obj.data.
}

$done({ body: JSON.stringify(obj) });
