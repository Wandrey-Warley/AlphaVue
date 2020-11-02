import Vue from 'vue';
import VueRouter from 'vue-router';
import Petshop from '@/views/Petshop';
import Home from '../views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Petshop',
    name: 'Petshop',
    component: Petshop,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
