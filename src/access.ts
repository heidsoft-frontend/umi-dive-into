import { Router } from 'express';
import initialState, { Route } from 'umi';

/**
 * 访问权限控制模块，通过全局状态模版设置
 */
export default (initialState: API.IUser) => {
  return {
    isAdmin: initialState.role?.isAdmin,
    isEditor: initialState.role?.isEditor,
    isRoot: () => true,
    canAccess: (cRoots: Route) => {
      // 通过函数，根据业务情况判断是否显示菜单权限
      console.log(cRoots);
      return cRoots.path !== '';
    },
  };
};
