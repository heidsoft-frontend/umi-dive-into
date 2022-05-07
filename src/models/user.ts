import { useState, useCallback } from 'react';
export default function () {
  const [user, setUser] = useState<API.IUser>();

  //登录
  const singin = useCallback((name: string, password: string) => {
    setUser({
      id: 1,
      name: name,
      password: password,
    });
  }, []);

  //登出
  const singout = useCallback(() => {
    setUser({} as API.IUser);
  }, []);

  return {
    user,
    singin,
    singout,
  };
}
