<template>
  <button type="error" @click="handleTheme">切换</button>
  <router-view />
</template>

<script lang="ts" setup>
function handleTheme() {
  document.body.classList.toggle("dark");
}
</script>

<style lang="sass"></style>
