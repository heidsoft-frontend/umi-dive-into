import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  layout: {
    // logo 配置
    name: '宝尊云平台',
    // 是否开启国际化
    locale: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  mfsu: {},
});
