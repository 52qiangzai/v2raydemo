<template>
  <div class="main">
    <div v-if="hitokoto" class="hitokoto">
      <p ref="hitokoto" class="animate__animated animate__bounceIn">
        {{ hitokoto }}
      </p>
    </div>
    <div v-else class="hitokoto">
      <p ref="hitokoto" class="animate__animated animate__bounceIn">
        正在加载.....
      </p>
    </div>
    <div class="switch">
      <select @change="getHitokoto" v-model="optionValue">
        <option
          :value="value"
          v-for="(key, value) in objCateGoryData"
          :key="value"
        >
          {{ key }}
        </option>
      </select>
      <select @change="getSelectOptionTime" v-model="optionTimeValue">
        <option :value="value" v-for="(key, value) in objTimeData" :key="value">
          {{ key }}
        </option>
      </select>
      <button @click="getHitokoto">切换语录</button>
    </div>
  </div>
</template>

<script>
import { nextTick } from "vue";
import { mapState } from "vuex";
export default {
  name: "Main",
  data() {
    return {
      optionValue: "j",
      optionTimeValue: "1500",
      timer: null,
      objCateGoryData: {
        a: "动画",
        b: "漫画",
        c: "游戏",
        d: "文学",
        e: "原创",
        f: "来自网络",
        g: "其他",
        h: "影视",
        i: "诗词",
        j: "网易云",
        k: "哲学",
        l: "抖机灵",
      },
      objTimeData: {
        1000: "1s",
        1500: "1.5s",
        2000: "2s",
        2500: "2.5s",
        3000: "3s",
      },
    };
  },
  computed: {
    ...mapState({
      hitokoto: (state) => {
        return state.other.hitokoto;
      },
    }),
  },
  created() {
    this.getHitokoto();
  },
  methods: {
    getHitokoto() {
      this.$store.dispatch("other/yuLu", this.optionValue);
      if (this.hitokoto) {
        this.$refs.hitokoto.setAttribute("class", "");
      }
      nextTick(() => {
        if (this.$refs.hitokoto.className === "") {
          this.$refs.hitokoto.setAttribute(
            "class",
            "animate__animated animate__bounceIn"
          );
        }
      });
    },
    getSelectOptionTime() {
      clearInterval(this.timer);
      this.timer = setInterval(this.getHitokoto, this.optionTimeValue);
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="less" scoped>
.main {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100vw;
  background-color: pink;
  height: 400px;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: 1;
  align-items: center;
  background-image: url(https://tuapi.eees.cc/api.php?category=biying&type=302);
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: 50% 50%;
  .hitokoto {
    padding: 20px;
    width: 100vw;
    height: 50%;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    display: flex;
    p {
      font-size: 25px;
      color: aliceblue;
      word-break: break-all;
      word-wrap: break-word;
    }
  }
  .switch {
    width: 100%;
    display: flex;
    justify-content: center;
    select,
    button {
      margin: 0 5px;
      border: none;
      border-radius: 3px;
      padding: 10px;
    }
    option {
      font-weight: 800;
    }
    button {
      background-color: #fff;
    }
  }
}
</style>