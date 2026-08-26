<script setup lang="ts">

import type { House } from '~/types/house';

defineProps<{
    houseList: House[]
}>()

</script>

<template>
    <ul class="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
        <li v-for="house in houseList" :key="house.id" class="flex flex-col gap-3 rounded-2xl">
          <NuxtLink
            :to="`/houses/${house.id}`"
            class="flex flex-col gap-2 h-full"
          >
            <!-- Image -->
            <div class="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
              <img
                :src="house.image"
                :alt="house.name"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                class="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            <!-- Details -->
            <div class="flex items-start justify-between gap-4 px-1">
              <div class="flex min-w-0 flex-col gap-1.5">
                <h5 class="font-display text-lg font-bold text-primary sm:text-xl">
                  {{house.name}}
                </h5>
                <div class="flex items-center gap-1 text-sm text-neutral">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      class="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </span>
                  <p>{{ house.city }}, {{ house.country }}</p>
                </div>
              </div>
              <div class="flex items-center">
                <p class="shrink-0 font-display text-lg font-bold text-primary sm:text-xl">
                  {{ house.price }}€
                  <span class="font-sans text-xs font-normal"> /noche</span>
                </p>
              </div>
            </div>
          </NuxtLink>
        </li>
    </ul>
</template>
