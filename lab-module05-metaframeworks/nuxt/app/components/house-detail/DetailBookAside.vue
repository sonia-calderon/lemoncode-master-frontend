<script setup lang="ts">
import type { House } from '~/types/house';
import DetailBookButton from './DetailBookButton.vue';

defineProps<{
    house: House
}>()
</script>

<template>
    <aside
      class="
              fixed inset-x-0 bottom-0 z-50
              border-t border-neutral/10
              bg-secondary/95 p-3 backdrop-blur-md
              lg:sticky lg:top-6 lg:inset-auto
              lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none"
    >
      <div
        class="
                mx-auto flex w-full max-w-xl items-center justify-between gap-4
                lg:block
                lg:rounded-2xl
                lg:bg-white/70
                lg:p-5
                lg:shadow-sm
                lg:ring-1 lg:ring-neutral/10
              "
      >
        <!-- Precio -->
        <div class="flex shrink-0 items-baseline gap-1 lg:mb-5">
          <span class="font-display text-xl font-bold text-primary sm:text-2xl">
            {{house.price}}€
          </span>
          <span class="text-xs text-neutral">/ noche</span>
        </div>

        <!-- Botón -->
        <DetailBookButton :house="house" />
      </div>
    </aside>
</template>

<style scoped>

</style>