import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Join from '@/pages/Join/Join';
import Login from '@/pages/Login/Login';
import Mypage from "@/pages/Mypage/Mypage";
import Error from '@/pages/Error/Error';

import Main from '@/pages/Dashboard/Dashboard';
import List from '@/pages/Typography/List'
import Edit from '@/pages/Typography/Edit'
import View from '@/pages/Typography/View'

Vue.use(Router);

export default new Router({
    data: {
        postIdx: ''
    },
    mode: 'history',
    routes: [
        {
            path: 'join',
            name: 'Join',
            component: Join,
        },
        {
            path: 'login',
            name: 'Login',
            component: Login,
        },
        {
            path: 'error',
            name: 'Error',
            component: Error,
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
                    path: 'mypage',
                    name: 'Mypage',
                    component: Mypage,
                },
                {
                    path: 'list',
                    name: 'List',
                    component: List,
                },
                {
                    path: 'view/1', //동적
                    name: 'View',
                    component: View,
                },
                {
                    path: 'write',
                    name: 'Write',
                    component: Edit,
                },
                {
                    path: 'edit', //동적
                    name: 'Edit',
                    component: Edit,
                }
            ],
        },
    ],
});
