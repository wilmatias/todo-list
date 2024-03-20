import { defineStore } from 'pinia';
import { makeRequest } from '@/helper/api.ts';
import toast from '@/helper/toast.ts';

interface TodoStoreState {
    error: null | Error;
    todoData: null | any;
    viewTodo: null | any;
}

export const useTodoStore = defineStore('todo', {
    state: (): TodoStoreState => ({
        error: null,
        todoData: null,
        viewTodo: null
    }),

    actions: {
        async getAll(){
            try {
                const response = await makeRequest('get', '/list');
                if(response) {
                    this.todoData = response.data
                }
            } catch (error: any) {
                this.error = error;
            }
        },

        async getById(id: number) {
            try {
                const response = await makeRequest('get', `/todo/${id}`);
                if (response && response.code && response.code >= 200 && response.code < 300) {
                    this.viewTodo = response.data;
                    this.error = null;
                }
                else {

                }
            } catch (error: any) {
                this.error = error.message;
                console.error('Error:', error.message);
            }
        },

        async create(todo: any) {
            try {
                const response = await makeRequest('post', '/create', todo);
                
                if (response && response.code && response.code >= 200 && response.code < 300) {
                    this.todoData.unshift(response.data)
                    toast.success(response.message)
                    this.error = null;
                } else {
                    const errorMessages = response.data || {};
                    Object.keys(errorMessages).forEach((field, index) => {
                        const messages = errorMessages[field];
                        messages.forEach((message: any, messageIndex: number) => {
                            setTimeout(() => {
                                toast.error(`${field}: ${message}`);
                            }, (index * 500) + (messageIndex * 1000));
                        });
                    });
                    this.error =  response.message
                }
            } catch (error: any) {
                this.error = error.message;
                console.error('Error:', error.message);
            } 
        },

        async update(id: number, updatedTodo: any) {
            try {
                const response = await makeRequest('put', `/update/${id}`, updatedTodo);
                if (response && response.code && response.code >= 200 && response.code < 300) {
                    await this.getAll();
                    toast.success(response.message)
                    this.error = null;
                } else {
                    toast.error(response.message);
                    this.error =  response.message
                }
            } catch (error: any) {
                this.error = error.message;
                console.error('Error:', error.message);
            }
        },

        async delete(id: number) {
            try {
                const response = await makeRequest('delete', `/delete/${id}`);
                
                if(response && response.code && response.code >= 200 && response.code < 300){
                    this.todoData = this.todoData.filter((todo: any) => todo.id !== id);
                    
                    toast.success(response.message);
                    this.error = null;
                } else {
                    toast.error(response.message);
                    this.error =  response.message
                }
                
            } catch (error: any) {
                this.error = error.message;
            }
        },
    },

    getters: {
        viewTask(): string {
            return this.viewTodo?.task || '';
        },

        viewStatus(): string {
            return this.viewTodo?.status || '';
        },
    },
    persist:true
});