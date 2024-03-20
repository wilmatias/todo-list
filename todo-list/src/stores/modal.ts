import { defineStore } from 'pinia';

interface modalStoreState {
    id: null | number;
    showModal: boolean;
    dialogOpen: boolean;
    dialogMessage: null | string;
}

export const useModalStore = defineStore('modal', {
    state: (): modalStoreState => ({
        id: null,
        showModal: false,
        dialogOpen: false,
        dialogMessage: null,
    }),
    actions: {
        handlemodal() {
            this.showModal = !this.showModal;
            if(!this.showModal) {
                this.reset();
            }
        },
        
        handleDialog(id: number, message: string) {
            this.id = id;
            this.dialogMessage = message;
            this.dialogOpen = !this.dialogOpen;
            if(!this.dialogOpen) {
                this.dialogReset();
            }
        },

        dialogReset() {
            this.id = null;
            this.dialogOpen =  false;
            this.dialogMessage =  null;
        },

        reset() {
            this.showModal = false;
            this.id = null;
        }
    },
});