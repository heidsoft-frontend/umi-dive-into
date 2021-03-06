import React from 'react';
import { Link, useModel, useHistory, Access } from 'umi';
import { Button, Space } from 'antd';
import { useAccess } from 'umi';
function User() {
  // 历史函数
  const history = useHistory();
  // 使用全局初始化状态获取数据
  const { initialState } = useModel('@@initialState');

  //使用模型获取数据
  //https://github.com/ant-design/ant-design-pro/issues/8109
  const { user, singin, singout } = useModel('user');

  //获取access 模块
  const canAccess = useAccess();
  if (!canAccess.isAdmin) {
    return null;
  }
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
      <Space>
        <Button
          type="primary"
          onClick={() => {
            history.push('/userinfo');
          }}
        >
          进入用户信息页面
        </Button>
      </Space>
      <Space>
        <Access accessible={true}>
          <Button type="primary">访问权限控制</Button>
        </Access>
      </Space>
    </div>
  );
}

export default User;
