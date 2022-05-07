import React from 'react';
import { Link, useModel, useHistory } from 'umi';
import { Button } from 'antd';
function User() {
  // 历史函数
  const history = useHistory();
  // 使用全局初始化状态获取数据
  const { initialState } = useModel('@@initialState');

  //使用模型获取数据
  //https://github.com/ant-design/ant-design-pro/issues/8109
  const { user, singin, singout } = useModel('user');
  return (
    <div>
      User 测试
      {initialState?.id}
      <br />
      {initialState?.name}
      <br />
      {user?.id}
      <br />
      {user?.name}
      <br />
      <Button
        type="primary"
        onClick={() => {
          singin('云服务圈', 'admin');
        }}
      >
        登录
      </Button>
      <br />
      <Button
        type="primary"
        onClick={() => {
          singout();
        }}
      >
        登出
      </Button>
      <Link to="/userinfo"></Link>
      <br />
      <Button
        type="primary"
        onClick={() => {
          history.push('/userinfo');
        }}
      >
        进入用户信息页面
      </Button>
    </div>
  );
}

export default User;
