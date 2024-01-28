import * as vR from 'vue-router';
import DashboardVue from '@Pages/Dashboard.vue';
import Pnf from '@Pages/NotFoundPage.vue';

const _routes: Array<vR.RouteRecordRaw> = [
  // Path & Component are mandatory.
  {
    path: '/',
    component: DashboardVue,
    name: 'home'
  },
  {
    path: '/demo',
    component: () => import("@Pages/DemoPage.vue"),
    name: 'home.demo'
  },
  {
    path: '/login',
    component: () => import("@Pages/AuthPage.vue"),
    name: 'home.auth'
  },
  {
    path: '/nf',
    component: Pnf,
    name: 'home.missing'
  }

];

const router = vR.createRouter({
  history: vR.createWebHistory(),
  routes: _routes,
});

export default router;