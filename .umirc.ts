import { defineConfig } from 'umi';
import { Menu } from 'antd';

export default defineConfig({
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: '云服务圈',
    locale: true,
    layout: 'mix',
    navTheme: 'light',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      menu: {
        name: '服务目录',
      },
    },
    { path: '/user', component: 'user' },
  ],
  fastRefresh: {},
});
