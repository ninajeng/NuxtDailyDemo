<script setup>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const props = defineProps({
  isLoading: Boolean,
  fullPage: Boolean,
})

const isLoading = computed(()=>{
  return props.isLoading
})
const fullPage = computed(()=>{
  return props.fullPage
})
</script>

<template>
  <ClientOnly>
    <loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage" />
  </ClientOnly>
</template>

<style scoped></style>
