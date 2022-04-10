<script setup lang="ts">
</script>

<template>
  <router-view></router-view>

  <br>
  <div v-if="!$route.meta['error']">
    <router-link to="/">Home</router-link> |
    <router-link to="/pinia">Pinia</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test">Test</router-link>
  </div>
</template>

<style>
#app {
  @apply antialiased text-center text-slate-700 mt-16;
}
</style>
