import { RequestConfig } from 'umi';
import { ResponseError } from 'umi-request';
import { notification } from 'antd';
export async function getInitialState(): Promise<API.IUser> {
  return Promise.resolve({
    id: 0,
    name: '云服务圈',
    role: {
      isAdmin: true,
      isEditor: false,
    },
  });
}

// 全局拦截器
const errorHandler = (error: ResponseError) => {
  //国际化方案
  //const {messages} = getIntl(getLocale());
  const { response } = error;
  notification.error({
    description: '你的网络发生异常，无法连接服务器',
    message: '网络异常',
  });
};

const authHeaderIntercceptor = (url: string, options: RequestOptions) => {
  const token = localStorage.getItem('token');
  if (token !== null) {
    console.log(token);
    const authHeader = { Authorization: `Bearer ${token}` };
    return {
      url: `${url}`,
      options: { ...options, interceptors: true, headers: authHeader },
    };
  }

  return {
    url: `${url}`,
    options: { ...options, interceptors: true },
  };
};

export const request: RequestConfig = {
  errorHandler,
  requestInterceptors: [authHeaderIntercceptor],
};
