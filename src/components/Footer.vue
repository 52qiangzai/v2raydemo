<template>
  <div class="copyright">
    {{ author }}
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    author: {
      type: String,
    },
  },
};
</script>
<style lang="less" scoped>
.copyright {
  text-align: center;
  background-color: pink;
  width: 100%;
  position: fixed;
  bottom: 5px;
  color: #000000;
}
</style>