import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const toast = useToast({
    position: 'top-right',
    dismissible: true,
});

export default toast;
