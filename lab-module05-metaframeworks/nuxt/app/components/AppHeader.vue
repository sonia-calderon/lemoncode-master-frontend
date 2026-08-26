<!-- app/components/AppHeader.vue -->
<script setup lang="ts">

</script>

<template>
    <header class="px-4 py-3 sm:px-6 lg:px-8">
      <div class="mx-auto flex w-full max-w-7xl justify-center">
        <NuxtLink
          to="/"
          class="flex items-center gap-2"
          aria-label="Rurall - Inicio"
        >
          <img
            src="/house-round-svgrepo-com.svg"
            alt="Rural House Logo"
            width="40"
            height="40"
          />
          <span class="font-display text-3xl font-bold leading-none text-primary sm:text-4xl">
            Rurall
          </span>
        </NuxtLink>
      </div>
    </header>
</template>

<style scoped>

</style>