<script setup lang="ts">
import type { House } from '~/types/house';

const props = defineProps<{
    house: House
}>()
</script>

<template>
    <div class="flex flex-col gap-4 border-b border-neutral/10 pb-6">
        <!-- Nombre -->
      <h2 class="font-display text-2xl font-bold leading-tight text-primary sm:text-3xl lg:text-4xl">
        {{house.name}}
      </h2>

      <!-- Ubicación -->
      <div class="flex items-center gap-1.5 text-sm text-neutral">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width={1.5}
          stroke="currentColor"
          class="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <p>
          {{house.address}}, {{house.city}}, {{house.country}}
        </p>
      </div>

      <!-- Características -->
      <div class="flex flex-wrap items-center gap-3 text-sm text-neutral">
        <div class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="currentColor"
              d="M2 19v-6q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v6h-2v-2H4v2zm11-9h6V8q0-.425-.288-.712T18 7h-4q-.425 0-.712.288T13 8zm-8 0h6V8q0-.425-.288-.712T10 7H6q-.425 0-.712.288T5 8zm-1 5h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z"
            />
          </svg>
          <span>{{house.bedrooms}} hab</span>
        </div>
        <span>•</span>
        <div class="flex items-center gap-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2Z"
              />
            </svg>
          </span>
          <span>{{house.beds}} camas</span>
        </div>
        <span>•</span>
        <div class="flex items-center gap-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M5.385 2.75c-.903 0-1.635.732-1.635 1.635v6.865H22a.75.75 0 0 1 0 1.5h-.268q.01.067.014.136q.005.088.004.18v.039c0 .375 0 .595-.016.84c-.142 2.236-1.35 4.302-3.101 5.652l.038.068l1 2a.75.75 0 1 1-1.342.67l-.968-1.935a7.36 7.36 0 0 1-3.228.805h-.007c-.74.028-1.464.045-2.126.045s-1.386-.017-2.126-.045h-.007a7.36 7.36 0 0 1-3.228-.805l-.968 1.935a.75.75 0 1 1-1.342-.67l1-2l.038-.068c-1.751-1.35-2.96-3.416-3.101-5.652a13 13 0 0 1-.016-.84v-.355H2a.75.75 0 0 1 0-1.5h.25V4.385a3.135 3.135 0 0 1 6.046-1.164l.11.275a3.84 3.84 0 0 1 2.466.192a3.97 3.97 0 0 1 2.132 2.213a.75.75 0 0 1-.401.963L6.643 9.43a.75.75 0 0 1-.995-.413a4.18 4.18 0 0 1 .02-3.107a4.1 4.1 0 0 1 1.379-1.774l-.144-.358A1.635 1.635 0 0 0 5.385 2.75m-1.302 10h-.1a.25.25 0 0 0-.233.25v.083c0 .402 0 .574.013.767c.185 2.922 2.695 5.528 5.607 5.823c.195.02.303.023.56.033c.728.027 1.433.044 2.07.044s1.342-.017 2.07-.044c.257-.01.365-.014.56-.034c2.912-.294 5.422-2.9 5.608-5.822c.012-.193.012-.365.012-.767v-.099q0-.003 0 0a.25.25 0 0 0-.234-.233q.002 0 0 0H20l-.082-.001zm6.2-7.682a2.36 2.36 0 0 0-1.976.053a2.57 2.57 0 0 0-1.25 1.354a2.7 2.7 0 0 0-.19 1.226l4.38-1.886a2.4 2.4 0 0 0-.965-.747"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span>
            {{house.bathrooms}} {{house.bathrooms > 1 ? 'baños' : 'baño'}}
          </span>
        </div>
      </div>

      <!-- Descripción -->
      <p class="max-w-3xl text-sm leading-relaxed text-neutral sm:text-base">
        {{house.description}}
      </p>
    </div>
</template>

<style scoped>

</style>