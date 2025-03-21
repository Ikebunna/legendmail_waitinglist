import { createRouter, createWebHistory } from 'vue-router';
import Login from '../Pages/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // Use routes array correctly
});

export default router;
