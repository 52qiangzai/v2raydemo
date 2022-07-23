<template>
  <div>
    <div class="btn" v-show="url">
      <button @click="copyUrl">复制vless链接</button>
      <button @click="getRCode">生成vless链接二维码</button>
      <button @click="downRCode">下载vless二维码</button>
    </div>

    <div class="img">
      <img :src="blobImg" alt="" v-show="blobImg" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "V2ray",
  data() {
    return {
      result: {},
    };
  },
  computed: {
    ...mapState({
      url: (state) => {
        return state.v2ray.url;
      },
      blobImg: (state) => {
        return state.v2ray.blobImg;
      },
    }),
  },
  mounted() {
    this.getUrl();
  },
  methods: {
    getUrl() {
      this.$store.dispatch("v2ray/getV2");
    },
    copyUrl() {
      const textareaC = document.createElement("textarea");
      textareaC.setAttribute("readonly", "readonly");
      textareaC.value = this.url;
      document.body.appendChild(textareaC);
      textareaC.select();
      const res = document.execCommand("copy");
      document.body.removeChild(textareaC);
      alert("复制成功");
      return res;
    },
    getRCode() {
      this.$store.dispatch("v2ray/getCodes", { url: this.url, down: 0 });
    },
    downRCode() {
      let result = this.$store
        .dispatch("v2ray/getCodes", { url: this.url, down: 1 })
        .then((res) => {
          if ("download" in document.createElement("a")) {
            let url = window.URL.createObjectURL(res);
            let link = document.createElement("a");
            link.style.display = "none";
            link.href = url;
            link.setAttribute("download", "qiangzai");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="less" scoped>
.btn {
  display: flex;
  justify-content: center;
}
button {
  border: none;
  border: 2px solid #a0cfff;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  color: #439fff;
  background-color: #ecf5ff;
}
button:hover {
  outline: 2px solid #a0cfff;
  border: 2px solid #fff;
  background-color: #409eff;
  color: #fff;
}
img {
  width: 100%;
}
</style>