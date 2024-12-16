import { createApp } from 'vue'
import './style.css'
import './assets/scss/styles.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
import App from './App.vue'
import {navigateTo} from './assets/methods/navigateTo';

const app = createApp(App)

// Initialize AOS
AOS.init();

app.config.globalProperties.$navigateTo = navigateTo;

app.mount('#app')