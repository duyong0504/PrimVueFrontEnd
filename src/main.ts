import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import './style.css'
import App from './App.vue'
import router from '@/router'
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

const app = createApp(App)

app.use(PrimeVue, {
    // unstyled: true,
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false,
        },
    },
    pt: {
        slider: {
            handle: { class: 'bg-primary text-primary-contrast' }
        }
    },
    ripple: true,
    inputVariant: "filled",
    zIndex: {
        modal: 1100,        //dialog, drawer
        overlay: 1000,      //select, popover
        menu: 1000,         //overlay menus
        tooltip: 1100       //tooltip
    }
})

app.use(ConfirmationService)
app.use(ToastService)
app.use(router)

app.mount('#app')

