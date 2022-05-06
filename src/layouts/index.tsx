import React from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';

export default () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      // location={{
      //   pathname: '/config/template/new',
      // }}
      route={{
        routes: [
          {
            path: '/config',
            name: '配置中心',
            routes: [
              {
                path: '/product',
                name: '产品配置',
                indexRoute: {
                  component: '@ConfigProduct/index',
                },
              },
              {
                path: 'meta',
                name: '元数据管理',
                component: 'ConfigMeta',
              },
            ],
          },
          {
            path: 'asset',
            name: '资产',
            routes: [
              {
                path: 'query',
                name: '资产查询',
                component: 'Asset',
              },
              {
                path: 'collateral',
                name: '抵押查询',
                component: 'Collateral',
              },
            ],
          },
          {
            path: 'tools',
            name: '小工具',
            routes: [
              {
                path: 'ttsql',
                name: 'MySQL转BlinkTT流表',
                component: 'ToolTT',
              },
            ],
          },
        ],
      }}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);
