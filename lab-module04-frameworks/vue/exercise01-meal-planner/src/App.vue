<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

</script>

<template>
  <AppHeader />
  <main class="flex flex-col flex-1 w-full max-w-screen-xl py-8 px-4 my-0 mx-auto">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped></style>
