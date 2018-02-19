import Vue from 'vue';
import VueRouter from 'vue-router';

import auth from '@/auth';

import MainLayout from '@/layout/main-layout';

import AppHome from '@/pages/app-home';
import AppLogin from '@/pages/app-login';

Vue.use(VueRouter);

auth.checkAuth();

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: MainLayout,
      meta: {
        requiresAuth: false
      },
      children: [
        {
          path: 'home',
          name: 'AppHome',
          component: AppHome,
          meta: {
            requiresAuth: false
          }
        },
        {
          path: 'login',
          name: 'AppLogin',
          component: AppLogin,
          meta: {
            requiresAuth: false
          }
        },
      ]
    },
  ]
});

router.beforeEach((to, from, next) => {
  // Redirect them to the home path if the are on base
  if(to.fullPath === '/') {
    next({
      name: 'AppHome'
    });
  }
  // If the route requires authentication, redirect them to login
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.user.authenticated) {
      next({
        name: 'AppLogin'
      })
    }
    else {
      next();
    }
  }
  else {
    next();
  }
});

export default router;