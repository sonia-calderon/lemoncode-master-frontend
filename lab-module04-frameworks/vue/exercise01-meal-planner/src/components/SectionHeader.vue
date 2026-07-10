<script setup lang="ts">
const props = defineProps<{
  sectionTitle: string
  sectionDescription: string
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-3xl font-semibold">{{ props.sectionTitle }}</h2>
    <p class="text-base">{{ props.sectionDescription }}</p>
  </div>
</template>
