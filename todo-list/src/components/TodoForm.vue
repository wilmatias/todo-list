<template>
    <div class="mb-5">
        <Form>
            <div>
                <label class="mb-2.5 block font-medium text-black">
                    Task
                </label>
                <div class="relative">
                    <Field 
                        v-model="task" 
                        name="task" 
                        type="text"
                        placeholder="Task Name"
                        class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none text-black"
                    />
                </div>
            </div>
            <div v-if="modalStore.id">
                <label class="mb-2.5 block font-medium text-black">
                    Status
                </label>
                <div class="relative">
                    <Field 
                        v-model="status" 
                        name="status" 
                        as="select"
                        class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none text-black appearance-none"
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </Field>
                </div>
            </div>
            <div class="my-4">
                <button type="button" v-if="modalStore.id" @click="onUpdate" class="w-full rounded-lg border border-primary bg-blue-600 p-4 font-medium text-white transition hover:bg-opacity-70 flex items-center justify-center gap-3">
                    Update Task
                </button>
                <button type="button" v-else @click="onSubmit" class="w-full rounded-lg border border-primary bg-blue-600 p-4 font-medium text-white transition hover:bg-opacity-70 flex items-center justify-center gap-3">
                    Add Task
                </button>
            </div>
        </Form>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { Form, Field } from 'vee-validate';
    import { useModalStore } from '@/stores/modal';
    import { useTodoStore } from '@/stores/todo';

    const props = defineProps(['handleSubmit']);
    const modalStore = useModalStore();
    const todoStore = useTodoStore();

    const task = ref('');
    const status = ref('');

    const onSubmit = () => {
        let param = {
            task: task.value,
        };
        props.handleSubmit(param);
        task.value = '';
    }

    const onUpdate = async () => {
        const id = modalStore.id;
        const param ={
            task: task.value,
            status: status.value
        };
        if (id !== null){
            await todoStore.update(id as number, param);
        }
        modalStore.handlemodal()
    }

    onMounted(() => {
        if(modalStore.id) {
            task.value = todoStore.viewTask;
            status.value = todoStore.viewStatus;
        }
    });
</script>