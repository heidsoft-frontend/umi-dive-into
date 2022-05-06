import { defineConfig } from 'umi';

export default defineConfig({
  // layout: {
  //   // 支持任何不需要 dom 的
  //   // https://procomponents.ant.design/components/layout#prolayout
  //   name: '云服务圈',
  //   locale: true,
  //   layout: 'mix',
  //   navTheme: 'light',
  // },
  layout: false,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts',
      routes: [
        {
          name: '首页',
          path: '/',
          icon: 'home',
          component: '@/pages/index',
        },
      ],
    },
    { path: '/user', component: 'user' },
  ],
  fastRefresh: {},
});
