<script setup lang="ts">
import type { House } from '~/types/house';

const props = defineProps<{
    house: House
}>()
</script>

<template>
    <div class="flex flex-col gap-4">
      <h5 class="text-2xl font-display font-semibold text-primary">
        Opiniones de huéspedes
      </h5>

      <div class="flex flex-col gap-4">
          <article
            v-for="review in house.reviews"
            :key="review.id"
            class="rounded-2xl border border-neutral/10 bg-white/50 p-4 sm:p-5"
          >
            <div class="flex gap-3 sm:gap-4">
              <!-- Avatar -->
              <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {{review.author.slice(0, 1).toUpperCase()}}
              </div>

              <div class="min-w-0 flex-1">
                <div class="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <p class="font-medium text-primary">{{review.author}}</p>
                    <p class="text-sm text-neutral">{{review.date}}</p>
                  </div>

                  <!-- Valoración -->
                  <div class="flex items-center gap-1 text-sm font-medium  text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-4"
                    >
                      <path d="m12 2 2.8 6.625 7.2.625-5.45 4.725L18.175 21 12 17.275 5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2Z" />
                    </svg>

                    <span>{{review.rating}}</span>
                  </div>
                </div>

                <p class="mt-3 text-sm leading-relaxed text-neutral sm:text-base">
                  "{{review.comment}}"
                </p>
              </div>
            </div>
          </article>
      </div>
    </div>
</template>

<style scoped>

</style>