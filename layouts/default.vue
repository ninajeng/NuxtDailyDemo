<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">前台</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/products" class="nav-link">Products</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/rooms" class="nav-link">Rooms</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <slot />
  <footer class="p-3 bg-secondary bg-opacity-25">
    <h5>預設模板的表尾</h5>
    <NuxtLink to="/admin" class="nav-link">後台首頁</NuxtLink>
  </footer>
</template>

<style scoped></style>
