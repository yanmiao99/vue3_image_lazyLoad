<script setup>
</script>

<template>
  <div v-for="item in 100" :key="item">
    <img v-lazyLoad="`https://picsum.photos/500/400?v${item}`" />
  </div>
</template>

<style scoped lang="less">
img {
  vertical-align: bottom;
  width: 100%;
}
</style>
