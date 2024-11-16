<script setup>
const route = useRoute();

const { isLoading, data:newsList, getData } = useFetchData('https://nuxr3.zeabur.app/api/v1/home/news');
await getData();
</script>

<template>
  <div class="container my-5">
    <h2>Page: 首頁</h2>
    <h3 class="title">全域共用樣式</h3>
    <p>目前路由的路徑為 - route.fullPath 為 : {{ route.fullPath }}</p>
    <div>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <button type="button" class="btn btn-link">Link</button>
    </div>
  </div>
  <div class="container">
    <h2>最新消息</h2>
    <button type="button" class="btn btn-primary" @click="getData">refresh</button>
    <ul style="list-style: none;" class="p-0 position-relative">
      <ClientOnly>
        <VueLoading :isLoading="isLoading" :full-page="false" />
      </ClientOnly>
      <li v-for="news in newsList" :key="news._id">
        <NewsCard :_id="news._id" :title="news.title" :image="news.image" :description="news.description"
          :createdAt="news.createdAt" :updatedAt="news.updatedAt" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  color: $primary;
}
</style>