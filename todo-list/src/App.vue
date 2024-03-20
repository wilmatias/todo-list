<template>
	<div class="w-2/4 mx-auto mt-5">
		<h1 class="mb-5 text-center text-2xl font-bold">Todo List</h1>
		<TodoForm :handleSubmit="handleSubmit" />
		<TodoTable :data="todoData" :handleDelete="handleDelete"/>
	</div>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue';
    import { storeToRefs } from 'pinia';
	import { useTodoStore } from '@/stores/todo';

	import TodoForm from '@/components/TodoForm.vue';
	import TodoTable from '@/components/TodoTable.vue';

	const todoStore = useTodoStore();

    const {
        todoData
    } = storeToRefs(todoStore);

	const handleDelete = (id: number) => {
        todoStore.delete(id);
    }
	const handleSubmit = async (param: any) => {
        await todoStore.create(param);
    };

	onMounted(() => {
		todoStore.getAll();
	});
</script>