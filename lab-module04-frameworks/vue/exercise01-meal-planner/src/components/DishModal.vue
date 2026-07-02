<script setup lang="ts">
import ChevronDownIcon from './Icons/ChevronDownIcon.vue';
import CloseIcon from './Icons/CloseIcon.vue';

</script>
<template>
    <Teleport to="body">
        <div class="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <section class="bg-white border rounded-xl w-full flex flex-col gap-6 p-6 max-w-xl">
                <div class="flex justify-between border-b py-3">
                    <p class="text-xl font-semibold">Add a new dish</p>
                    <CloseIcon />
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                        <label for="" class="text-gray-500 font-semibold">Dish name</label>
                        <input type="text" placeholder="E.g. Vegetables lasagna" class="border border-primary border-opacity-10 bg-primary bg-opacity-10 rounded-lg p-2 placeholder-gray-500">
                    </div>
                    <div class="flex gap-4 w-full">
                        <div class="flex flex-col gap-2 w-full">
                            <label for="" class="text-gray-500 font-semibold">Week day</label>
                            <div class="relative">
                                <select name="" id="" class="w-full appearance-none border border-primary border-opacity-10 bg-primary/10 rounded-lg py-2 pr-10">
                                    <option value=""></option>
                                    <option value="">Monday</option>
                                    <option value="">Tuesday</option>
                                    <option value="">Wednesday</option>
                                    <option value="">Thursday</option>
                                    <option value="">Friday</option>
                                    <option value="">Saturday</option>
                                    <option value="">Sunday</option>
                                </select>
                                <ChevronDownIcon class="poiner-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                            </div>
                            
                        </div>
                        <div class="flex flex-col gap-2 w-full">
                            <label for="" class="text-gray-500 font-semibold">Category</label>
                            <div class="relative">
                                <select name="" id="" class="w-full appearance-none border border-primary border-opacity-10 bg-primary/10 rounded-lg py-2 pr-10">
                                    <option value=""></option>
                                    <option value="">Breakfast</option>
                                    <option value="">Lunch</option>
                                    <option value="">Dinner</option>
                                </select>
                                <ChevronDownIcon class="poiner-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="flex gap-4">
                    <button class="border border-primary rounded-xl p-2 w-full">Cancel</button>
                    <button class="bg-primary text-textlight border border-primary rounded-xl p-2 w-full">Add</button>
                </div>
            </section>
        </div>
    </Teleport>
</template>