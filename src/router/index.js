import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Surveys from '@/components/Surveys';
import Survey from '@/components/Survey';
import Reports from '@/components/Reports';

import SurveyContent from '@/components/SurveyContent';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/surveys',
      name: 'Surveys',
      component: Surveys
    },
    {
      path: '/survey/:id',
      name: 'Survey',
      component: Survey
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports
    },
    {
      path: '/SurveyContent',
      name: 'Survey Content',
      component: SurveyContent
    }
  ]
});
