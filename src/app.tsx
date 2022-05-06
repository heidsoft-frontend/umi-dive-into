export const layout = () => {
  return {
    menuDataRender: () => [
      //此功能可以实现动态路由，用来渲染访问路由
      {
        path: '/',
        name: 'Home',
      },
      {
        path: '/about',
        name: 'About',
        children: [
          { path: '/about/company', name: 'Company' },
          { path: '/about/investors', name: 'Investors' },
        ],
      },
    ],
  };
};
