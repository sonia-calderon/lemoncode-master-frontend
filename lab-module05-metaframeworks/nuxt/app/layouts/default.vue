<!-- app/layouts/default.vue -->
<template>
  <div class='font-sans bg-secondary flex flex-col min-h-screen'>
    <AppHeader />

   <main class="mx-auto w-full max-w-7xl flex-1 px-4 py-4 sm:px-6 lg:px-8">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>

</style>