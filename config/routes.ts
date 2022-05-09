import { Access } from '../src/.umi/plugin-access/access';
export default [
  { exact: true, path: '/', component: '@/pages/index' },
  {
    path: '/',
    component: '@/layouts/index',
    name: '仪表盘',
    icon: 'crown',
    access: 'isAdmin',
    routes: [
      {
        exact: true,
        path: '/user',
        name: '用户列表',
        access: 'canAccess',
        component: '@/pages/user/index',
      },
    ],
  },
];
