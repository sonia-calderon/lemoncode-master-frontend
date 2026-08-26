<!-- app/pages/index.vue -->
<script setup lang="ts">

const config = useRuntimeConfig();

useSeoMeta({
  title: `${config.public.siteName} · Casas Rurales`,
});

</script>

<template>
    <Hero />
</template>

<style scoped>

</style>