import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import Questions from '@/components/Questions';
import SuccessPage from '@/components/SuccessPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: HomePage,
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions,
    },
    {
      path: '/successful',
      name: 'SuccessPage',
      component: SuccessPage,
    },
  ],
});
