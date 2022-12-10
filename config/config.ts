import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  layout: {
    // logo 配置
    name: '云服务圈',
    // 是否开启国际化
    locale: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  // mfsu: {},
});
