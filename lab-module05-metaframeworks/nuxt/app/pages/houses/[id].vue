<!-- app/pages/houses/[id].vue -->
<script setup lang="ts">
import HouseDetail from '~/components/house-detail/HouseDetail.vue';


const route = useRoute();
const config = useRuntimeConfig();

const id = route.params.id;

if (typeof id !== 'string') {
  throw createError({
    statusCode: 400,
    statusMessage: 'Invalid house id',
    fatal: true,
  });
}

const {getHouse} = useHouseApi()

const house = await getHouse(id)

if (!house) {
  throw createError({
    statusCode: 404,
    statusMessage: 'House not found',
    fatal: true,
  });
}


useSeoMeta({
  title: `${config.public.siteName} · ${house.name}`,
  description: house.description,
});
</script>

<template>
  <HouseDetail :house="house" />
</template>

<style scoped>

</style>