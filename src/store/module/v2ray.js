import { getCode, getV2ray } from "@/api";
export default {
  namespaced: true,
  state: {
    url: "",
    blobImg: null,
  },
  mutations: {
    GETV2(state, result) {
      const { address, UUID, prot, security, network, path, transmission } =
        result;
      state.url = `vless://${UUID}@${address}:${prot}?type=${network}&security=${transmission}&path=${path}#qiangzai`;
    },
    GETCODES(state, result) {
      let binaryData = [];
      binaryData.push(result);
      state.blobImg = window.URL.createObjectURL(new Blob(binaryData));
    },
  },
  actions: {
    async getV2({ commit }) {
      let result = await getV2ray();
      if (result.status === 0) {
        commit("GETV2", result.data);
      }
    },
    async getCodes({ commit }, { url, down }) {
      let result = await getCode({ url, down });
      if (down === 0) {
        commit("GETCODES", result);
      } else {
        return result;
      }
    },
  },
};
