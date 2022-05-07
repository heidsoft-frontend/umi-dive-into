export default [
  { exact: true, path: '/', component: '@/pages/index' },
  {
    path: '/',
    name: '仪表盘',
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
