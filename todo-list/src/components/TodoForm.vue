<template>
    <div class="mb-5">
        <Form @submit="onSubmit">
            <Field 
                v-model="task" 
                name="first_name" 
                type="text"
                placeholder="Task Name"
                class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none text-black"
            />
            <div class="my-4">
                <button class="w-full rounded-lg border border-primary bg-blue-600 p-4 font-medium text-white transition hover:bg-opacity-70 flex items-center justify-center gap-3">
                    Add Task
                </button>
            </div>
        </Form>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { Form, Field } from 'vee-validate';
    const props = defineProps(['handleSubmit']);

    const task = ref('');

    const onSubmit = () => {
        let param = {
            task: task.value,
        };
        props.handleSubmit(param);
        task.value = '';
    }
</script>