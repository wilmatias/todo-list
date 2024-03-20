<template>
    <div v-if="modalStore.showModal" class="fixed inset-0 flex justify-center bg-black bg-opacity-50 z-9">
        <div @click="handlemodal" class="absolute bg-black opacity-20 inset-0"></div>
        <div class="w-2/4 p-4 relative mx-auto my-auto rounded-xl shadow-lg bg-white dark:bg-meta-4  mt-10">
            <div class="flex justify-between items-center border-b pb-4 px-4">
                <p class="text-lg font-bold"> Update Task </p> 
                <button @click="handlemodal" class="mt-4 px-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>                          
                </button>
            </div>
            <div class="p-4 overflow-hidden overflow-y-auto max-h-screen">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useModalStore } from '@/stores/modal';
    import { defineProps  } from 'vue';
    defineProps(['handlemodal']);
    
    const modalStore = useModalStore();
    
</script>