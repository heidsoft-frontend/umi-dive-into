export default [
  { exact: true, path: '/', component: '@/pages/index' },
  {
    path: '/',
    name: '仪表盘',
    icon: 'crown',
    component: '@/layouts/index',
    routes: [
      {
        exact: true,
        path: '/user',
        name: '用户列表',
        component: '@/pages/user/index',
      },
    ],
  },
];
