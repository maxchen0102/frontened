//像個路由器

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import child1 from '@/components/pages/child1';
import child2 from '@/components/pages/child2';
import Menu from '@/components/pages/menu';
import Jobs from '@/components/jobs/jobs';

const routes = [
    {
        name: "首頁",
        path: '/index',
        component: Home,
    },
    {
        name: "jobs",
        path: "/jobs",
        component:Jobs, 
    },
    {
        name: "分頁",
        path: '/page',
        component: Page,
        components: {
            default: Page,
            menu: Menu,
        },
        children: [
             {
                name: "卡片1",
                path: 'child1',
                component: child1,
            },
                {
                name: "卡片2",
                path: 'child2',
                component: child2,
    },
        ]
    }
];

const router1 = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes,
});

export default router1;
