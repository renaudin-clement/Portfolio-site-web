import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js';

createApp(App).use(router).mount('#app')




const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
