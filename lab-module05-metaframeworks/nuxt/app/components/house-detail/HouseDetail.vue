<script setup lang="ts">
import type { House } from '~/types/house';
import BackNav from './BackNav.vue';
import DetailImage from './DetailImage.vue';
import DetailMainInfo from './DetailMainInfo.vue';
import DetailServices from './DetailServices.vue';
import DetailReviews from './DetailReviews.vue';
import DetailBookAside from './DetailBookAside.vue';

const props = defineProps<{
    house: House
}>()
</script>

<template>
    <section class="flex flex-col gap-5 pb-24 sm:gap-6 lg:pb-0">
      <BackNav />
      <DetailImage :house="house" />
      <!-- Contenido + reserva -->
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
        <!-- Información -->
        <aside class="flex flex-col gap-8 lg:col-span-2 ">
          <DetailMainInfo :house="house" />
          <DetailServices :house="house" />
          <DetailReviews :house="house" />
        </aside>

        <!-- Reserva -->
        <DetailBookAside :house="house" />
      </div>
    </section>
</template>