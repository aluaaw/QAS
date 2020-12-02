import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import Join from '@/pages/Join/Join';
import Mypage from "@/pages/Mypage/Mypage";
import ErrorPage from '@/pages/Error/Error';

import Main from '@/pages/Dashboard/Dashboard';
import StarsPage from '@/pages/Tables/Basic';

import ChartsPage from '@/pages/Charts/Charts';
import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';
import GoogleMapPage from '@/pages/Maps/Google';

import List from '@/pages/Typography/List'
import Edit from '@/pages/Typography/Edit'
import View from '@/pages/Typography/View'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/join',
      name: 'Join',
      component: Join,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'main',
          name: 'main',
          component: Main,
        },
        {
          path: 'board',
          name: 'board',
          children: [
            {
              path: 'list',
              name: 'List',
              component: List,
            },
            {
              path: 'view',
              name: 'View',
              component: View,
            },
            {
              path: 'write',
              name: 'Write',
              component: Edit,
            },
            {
              path: 'edit',
              name: 'Edit',
              component: Edit,
            }
          ]
        },
        {
          path: 'components/icons',
          name: 'IconsPage',
          component: IconsPage,
        },
        {
          path: 'my-page',
          name: 'My-page',
          component: Mypage,
        },
        {
          path: 'notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'components/charts',
          name: 'ChartsPage',
          component: ChartsPage,
        },
        {
          path: 'stars',
          name: 'StarsPage',
          component: StarsPage,
        },
        {
          path: 'components/maps',
          name: 'GoogleMapPage',
          component: GoogleMapPage,
        },
      ],
    },
  ],
});
