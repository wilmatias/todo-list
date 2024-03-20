<template>
    <div v-if="useModal.dialogOpen" class="fixed inset-0 flex justify-center bg-black bg-opacity-50 z-9">
        <div @click="handleDialog" class="absolute bg-black opacity-20 inset-0"></div>
        <div class="w-150 text-center p-4 relative mx-auto my-auto rounded-xl shadow-lg bg-white mt-10">
            <p class="text-2xl font-semibold text-slate-700">{{ message }}</p>
            <div class="p-4 overflow-hidden overflow-y-auto max-h-screen">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { defineProps  } from 'vue';
    import { useModalStore } from '@/stores/modal';

    defineProps(['message', 'handleDialog']);
    const useModal = useModalStore();
</script>