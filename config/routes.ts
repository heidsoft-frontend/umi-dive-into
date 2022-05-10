export default [
  { exact: true, path: '/', component: '@/pages/index' },
  { path: '/login', component: '@/pages/login/index', layout: false },
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
      {
        exact: true,
        path: '/services',
        name: '服务列表',
        access: 'canAccess',
        component: '@/pages/services/index',
      },
      {
        exact: true,
        path: '/products',
        name: '产品列表',
        access: 'canAccess',
        component: '@/pages/products/index',
      },
    ],
  },
];
