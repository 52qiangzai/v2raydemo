<template>
  <div class="animate__animated animate__fadeIn copyright">
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
  background-color: #fff;
  width: 100%;
  padding: 5px;
  position: fixed;
  bottom: 0px;
  color: #000000;
}
</style>