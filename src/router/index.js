import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages';
import Reset from '@/pages/reset';
import Center from '@/pages/center';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/reset',
          name: 'Reset',
          component: Reset
        },
        {
          path: '/center',
          name: 'Center',
          component: Center
        }
      ]
    }
  ]
})
