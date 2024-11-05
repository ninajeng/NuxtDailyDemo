<script setup>
const route = useRoute();
</script>

<template>
  <div>
    <h2>Page: 首頁</h2>
    <p>目前路由的路徑為 - route.fullPath 為 : {{ route.fullPath }}</p>
  </div>
</template>

<style scoped></style>
