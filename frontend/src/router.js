import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Join from '@/pages/Common/Join';
import Login from '@/pages/Common/Login';
import Error from '@/pages/Error/Error';

import List from '@/pages/Board/List'
import Edit from '@/pages/Board/Edit'
import View from '@/pages/Board/View'

Vue.use(Router);

export default new Router({
    data: {
        postIdx: ''
    },
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: Login,
            component: Login,
        },
        {
            path: '*',
            redirect: '/error'
        },
        {
            path: '/error',
            name: 'Error',
            component: Error,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/join',
            name: 'Join',
            component: Join,
        },
        {
            path: '/',
            name: 'Layout',
            component: Layout,
            children: [
                {
                    path: 'board',
                    redirect: '/board/list',
                    component: List
                },
                {
                    path: '/board/list',
                    name: 'List',
                    component: List,
                },
                {
                    path: '/board/view/:postidx',
                    name: 'View',
                    component: View,
                },
                {
                    path: '/board/write',
                    name: 'Write',
                    component: Edit,
                },
                {
                    path: '/board/edit/:postidx',
                    name: 'Edit',
                    component: Edit,
                }
            ],
        },
    ],
});
