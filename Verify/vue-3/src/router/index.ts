import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Profile from '../views/ProfileView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
  ],
});

export default router;
