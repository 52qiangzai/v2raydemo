<template>
  <div class="header">
    <div class="left">
      <a :href="url">
        <img :src="logo" alt="" />
      </a>
      <a class="icon" @click="showRight">
        <img :src="icon" />
      </a>
    </div>
    <div class="right">
      <ul class="bar">
        <li><a :href="url">强仔博客</a></li>
        <slot name="contact"></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    url: {
      type: String,
      default: () => {
        return "https://q6q.cc";
      },
    },
    logo: {
      type: String,
      default: () => {
        return "https://web-static.q6q.cc/files/index/lg.png";
      },
    },
    icon: {
      type: String,
      default: () => {
        return "https://q1.qlogo.cn/g?b=qq&nk=1724417279@qq.com&s=100&q6qcc=qiangzai";
      },
    },
  },
  methods: {
    showRight() {
      this.$router.push({ name: "v2ray" });
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  height: 50px;
  background-color: #fff;
  .left,
  .right {
    line-height: 50px;
    height: 50px;
    flex: 1;
  }
  .left {
    display: flex;
    padding-left: 3vw;
    flex-wrap: nowrap;
    justify-content: space-between;
    a {
      height: 50px;
      display: inline-block;
      img {
        height: 100%;
      }
    }
    .icon {
      display: none !important;
      @media screen and (max-width: 540px) {
        padding-right: 3vw;
        display: inline-block !important;
      }
      img {
        border-radius: 50%;
      }
    }
  }
  .right {
    padding-right: 3vw;
    @media screen and (max-width: 540px) {
      display: none;
    }
    .bar {
      margin: 0 !important;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: end;
      li {
        margin-left: 1vw;
        margin-right: 1vw;
        list-style: none;
        a {
          text-decoration: none;
          color: #000000;
          display: inline-block;
        }
      }
    }
  }
}
</style>