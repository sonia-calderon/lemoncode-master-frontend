<script setup lang="ts">

const query = ref("")
const router = useRouter()

const handleSubmit = () => {
  router.push({
    path: '/houses',
    query: {
      search: query.value,
    },
  });
};

</script>

<template>
    <form
        @submit.prevent="handleSubmit"
        class="flex mx-auto w-full max-w-2xl items-center gap-2"
      >
        <div class="relative flex-1">
          <label for="search" class="sr-only">
            Buscar casas
          </label>
        </div>

        <div class="pointer-events-none absolute pl-5 text-neutral">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <input
          type="text"
          id="search"
          placeholder="Nombre o ubicación"
          v-model="query"
          class="w-full rounded-xl border border-neutral/20 bg-white/70 py-3 pl-11 pr-4 text-sm text-primary shadow-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/10 sm:text-base"
        />

        <button
          type="submit"
          class="shrink-0 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-secondary shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-[0.98] sm:px-6 sm:text-base
        "
        >
          Buscar
        </button>
      </form>
</template>
