import React from 'react';
import { useModel } from 'umi';
function User() {
  const { initialState } = useModel('@@initialState');
  return (
    <div>
      User 测试
      {initialState?.id}
      <br />
      {initialState?.name}
    </div>
  );
}

export default User;
