<script setup lang="ts">
//import * as api from '../api';
import type { House } from '~/types/house';

const props = defineProps<{
    house: House
}>()

const booked = ref(false)
const handleBook = () => console.log("handleBook")

/*const booked = ref(props.house.isBooked)

const handleBook = async () => {
  try {
    const apiHouse = mapHouseFromVmToApi({
      ...props.house,
      isBooked: !booked.value,
    });

    await api.bookHouse(apiHouse);

    booked.value = apiHouse.isBooked;
  } catch (error) {
    console.error({ error });
  }
};*/

</script>

<template>
    <button
        type="button"
        :class="[
      'w-full rounded-xl px-4 py-2.5 text-sm font-medium text-secondary shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.99] sm:text-base',
      booked
        ? 'bg-tertiary hover:bg-tertiary/90'
        : 'bg-primary hover:bg-primary/90',
    ]"
    @click="handleBook"
      >
        {{booked ? 'Descartar reserva' : 'Reservar'}}
      </button>
</template>

<style scoped>

</style>