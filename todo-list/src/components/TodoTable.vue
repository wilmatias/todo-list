<template>
    <div class="max-w-full overflow-x-auto">
        <table class="w-full table-auto border">
            <thead class="border">
                <tr class="bg-gray-2 text-left border">
                    <th class="py-4 px-4 font-medium text-black">
                        Task
                    </th>
                    <th class="py-4 px-4 font-medium text-black">
                        Status
                    </th>
                    <th class="py-4 px-4 font-medium text-black">
                        Date Created
                    </th>
                    <th class="py-4 px-4 font-medium text-black">
                        Date Updated
                    </th>
                    <th class="py-4 px-4 font-medium text-black">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in props.data" :key="index" class="text-left border-b">
                    <td class="py-5 px-4">
                        <h5 class="font-medium text-black">{{ item.task }}</h5>
                    </td>
                    
                    <td class="py-5 px-4">
                        <h5 class="font-medium text-black">{{ item.status }}</h5>
                    </td>
                    
                    <td class="py-5 px-4">
                        <h5 class="font-medium text-black">{{ readableDate(item.created_at) }}</h5>
                    </td>
                    
                    <td class="py-5 px-4">
                        <h5 class="font-medium text-black">{{ readableDate(item.updated_at) }}</h5>
                    </td>
                    
                    <td class="py-5 px-4">
                        <div class="flex items-center gap-2">
                            <svg @click="handlemodal()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-blue-600 cursor-pointer">
                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                            </svg>
                            <svg @click="handleDialog(item.id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-red-600 cursor-pointer">
                                <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <DialogModal 
            :message="useModal.dialogMessage"
            :handleDialog="handleDialog"
        >
            <div class="flex justify-around mt-10">
                <button @click="handleDialog(0)" class="bg-red-600 p-4 rounded-md font-semibold text-white">
                    Cancel
                </button>
                <button @click="block(useModal.id as number)" class="bg-blue-600 p-4 rounded-md font-semibold text-white">
                    Confirm
                </button>
            </div>
        </DialogModal>
        <Modal :handlemodal="handlemodal">
            <TodoForm />
        </Modal>
    </div>
</template>

<script setup lang="ts">
    import { useModalStore } from '@/stores/modal';
    import { readableDate } from '@/helper/format';
    
    import Modal from '@/components/Modal.vue';
    import DialogModal from '@/components/DialogModal.vue';
    import TodoForm from '@/components/TodoForm.vue';

    const props = defineProps(['data', 'handleDelete']);
    const useModal = useModalStore();

    const block = (id: number) => {
        props.handleDelete(id);
        handleDialog(id)
    }

    const handlemodal = () => {
        useModal.handlemodal();
    }

    const handleDialog = (id: number) => {
        useModal.handleDialog(id, 'Are you sure you want to delete this?');
    }
</script>