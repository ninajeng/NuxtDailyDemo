<script setup>
const route = useRoute();
const router = useRouter();
const path = route.fullPath;
</script>

<template>
  <h2>房型詳細頁面 {{ path }}</h2>
  <button type="button" @click="router.go(-1)" class="mb-3">回上一頁</button>
</template>

<style scoped></style>