import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Galerii from '../views/Galerii.vue';
import Kontakt from '../views/Kontakt.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/galerii',
        name: 'Galerii',
        component: Galerii,
    },
    {
        path: '/kontakt',
        name: 'Kontakt',
        component: Kontakt,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;