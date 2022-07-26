import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '../store';
import Home from '../components/views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        name: 'NotFound',
        component: () => import('../components/views/NotFound.vue'),
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
