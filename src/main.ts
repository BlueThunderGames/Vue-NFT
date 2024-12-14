import { createApp } from 'vue'
import './style.css'
import './assets/scss/styles.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
import App from './App.vue'

createApp(App).mount('#app')

// Initialize AOS
AOS.init();