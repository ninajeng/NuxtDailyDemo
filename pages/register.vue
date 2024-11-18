<script setup>
const { $swal } = useNuxtApp();
const showMessage = () => {
  $swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
  });
};
</script>

<template>
  <div><button type="button" @click="showMessage">button</button></div>
</template>

<style scoped></style>