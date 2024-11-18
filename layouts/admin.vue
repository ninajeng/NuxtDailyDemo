<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <NuxtLink to="/admin" class="navbar-brand">admin</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink to="/admin/order" class="nav-link">後台訂單</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <slot />
  <footer class="p-3 bg-secondary bg-opacity-25">
    <h5>admin 模板的表尾</h5>
    <NuxtLink to="/" class="nav-link">返回前台</NuxtLink>
  </footer>
</template>

<style scoped></style>
