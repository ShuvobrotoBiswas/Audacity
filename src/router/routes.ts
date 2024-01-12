import { RouteRecordRaw } from 'vue-router';
import { authenticationGuard } from './routeGuard';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/playback/:id',
        component: () => import('pages/playBack.vue'),
        meta: { requiresAuth: true },
        beforeEnter: authenticationGuard,
      },
    ],
  },
  {
    path: '/login',
    component: () => import('pages/loginPage.vue'),
  },
  {
    path: '/register',
    component: () => import('pages/registerPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
