<!-- app/pages/houses/houses.vue -->
<script setup lang="ts">
import Filters from '~/components/house-list/Filters.vue';
import HouseList from '~/components/house-list/HouseList.vue';
import { useHouseApi } from '~/composables/useHouseApi';

const config = useRuntimeConfig();
const route = useRoute();

const { getHouseList } = useHouseApi()

const { data: houses } = await useAsyncData(
  'houses',
  () => getHouseList()
)

const normalizeText = (text: string) => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

const search = computed(() => {
  const value = route.query.search;
  return typeof value === 'string' ? normalizeText(value) : '';
});

const filteredHouseList = computed(() => {
  const houseList = houses.value ?? []
  if (!search.value) {
    return houseList;
  }

  return houseList.filter((house) => {
    return (
      normalizeText(house.name).includes(search.value) ||
      normalizeText(house.city).includes(search.value) ||
      normalizeText(house.country).includes(search.value) ||
      normalizeText(house.address).includes(search.value)
    );
  });
});

useSeoMeta({
  title: `${config.public.siteName} · Refugios Rurales`,
});


</script>

<template>
   <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-5">
        <div class="flex flex-col items-center justify-center gap-2 text-center">
          <h2 class="text-2xl font-display font-bold text-primary sm:text-3xl">
            Encuentra tu refugio en la naturaleza
          </h2>
          <p class="max-w-2xl text-sm leading-relaxed sm:text-base">
            Descubre casas rurales únicas, diseñadas para desconectar y
            reconectar con lo esencial.
          </p>
        </div>

        <Filters />
      </section>

      <section class="flex flex-col gap-5">
        <h3 class="text-xl font-display font-bold text-primary sm:text-2xl">
          Nuestras recomendaciones
        </h3>
        <HouseList :house-list="filteredHouseList" />
      </section>
    </div>
</template>

<style scoped>

</style>