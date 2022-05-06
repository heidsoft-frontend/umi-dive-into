export default [
  { exact: true, path: '/', component: '@/pages/index' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [{ exact: true, path: '/user', component: '@/pages/user/index' }],
  },
];
