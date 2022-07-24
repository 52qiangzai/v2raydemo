import request from "@/utils/request";

// c 句子类型
// encode 返回编码
// charset 	字符集
export const getYulu = (
  c,
  encode = "json",
  charset = "utf-8",
  min_length = 0,
  max_length = 30
) => {
  return request.get("https://v1.hitokoto.cn/");
};

export const getV2ray = () => {
  return request.get("https://api.q6q.cc/v2");
};

export const getCode = ({ url, down = 0 }) => {
  if (down === 0) {
    return request({
      url: "https://api.pwmqr.com/qrcode/create/",
      params: {
        url,
        down,
      },
      responseType: "blob",
    });
  } else {
    return request({
      headers: {
        "content-type": "application/octet-stream",
      },
      url: "https://api.pwmqr.com/qrcode/create/",
      params: {
        url,
        down,
      },
      responseType: "blob",
    });
  }
};
