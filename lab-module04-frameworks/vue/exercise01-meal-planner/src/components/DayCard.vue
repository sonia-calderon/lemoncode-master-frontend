<script setup lang="ts">
import AddIcon from './Icons/AddIcon.vue';

</script>

<template>
    <article class="flex flex-col gap-4 bg-white w-full rounded-lg">
        <div class="bg-primary bg-opacity-10 p-4 rounded-t-lg border-b">
            <p class="font-semibold text-primary">Monday</p>
        </div>
        <div class="flex flex-col gap-4 p-4">
            <div class="flex flex-col gap-2">
                <p class="uppercase font-semibold text-sm text-gray-500">Breakfast</p>
                <p class="border border-primary border-opacity-10 rounded-xl bg-primary bg-opacity-10 p-2 cursor-pointer">Oats rdfhbsjfb jfhdbjehs</p>
            </div>
            <div class="flex flex-col gap-2">
                <p class="uppercase font-semibold text-sm text-gray-500">Breakfast</p>
                <p class="border border-primary border-opacity-10 rounded-xl bg-primary bg-opacity-10 p-2 cursor-pointer">Oats rdfhbsjfb jfhdbjehs</p>
            </div>
            <div class="flex flex-col gap-2">
                <p class="uppercase font-semibold text-sm text-gray-500">Breakfast</p>
                <span class="empty flex items-center justify-center border border-primary border-dashed rounded-xl bg-opacity-10 p-2 cursor-pointer">
                    <AddIcon class="stroke-primary " />
                </span>
            </div>
        </div>
    </article>
</template>