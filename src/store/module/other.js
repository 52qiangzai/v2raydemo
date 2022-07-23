import { getYulu } from "@/api";
export default {
  namespaced: true,
  state: {
    a: 1,
    name: "ab",
    hitokoto: null,
  },
  mutations: {
    YULU(state, hitokoto) {
      state.hitokoto = hitokoto;
    },
  },
  actions: {
    async yuLu({ commit }, c) {
      let result = await getYulu(c);
      commit("YULU", result.hitokoto);
    },
  },
};
