<template>
  <div>
    <Header>
      <template v-slot:contact>
        <li><a :href="'https://q6q.cc'">强仔博客</a></li>
      </template>
    </Header>
    <Main />
    <Footer :author="name" />
  </div>
</template>

<script>
import Header from "../components/Header";
import Main from "../components/Main.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      name: "Qiangzai",
    };
  },
};
</script>
<style lang="less" scoped>
</style>