import Vue from 'vue';
import VueRouter from 'vue-router';
import Petshop from '@/views/Petshop';
import Home from '@/views/Home';
import Contato from '@/views/Contato';
import Ecomerce from '@/views/Ecomerce';
import ListaProdutos from '@/views/produtos/ListaProdutos';
import DetalheProduto from '@/views/produtos/DetalheProduto';
import Admin from '@/views/Admin';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/petshop',
    name: 'Petshop',
    component: Petshop,
  },
  {
    path: '/ecomerce',

    component: Ecomerce,
    children: [
      { path: '', component: ListaProdutos },
      { path: ':id', name: 'detalhes-do-produto', component: DetalheProduto },
    ],
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato,
  },
  {
    path: '/admin',
    name: 'Rota Protegida',
    component: Admin,
    meta: { protegida: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  console.log('Verificando se rota é protegida');
  if (to.meta.protegida) {
    console.log('Tentando acessar pagina protegida');
    router.push('/');
  }
  next();
});
export default router;
