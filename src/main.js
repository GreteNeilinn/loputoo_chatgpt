import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import fadeIn from './fadeIn';

createApp(App).use(store).use(router).directive('fade-in', fadeIn).mount('#app')