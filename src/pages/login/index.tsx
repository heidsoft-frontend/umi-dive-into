import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useHistory } from 'umi';
import { doLogin } from '@/api/user/user';
function Index() {
  const history = useHistory();
  const login = (user: API.IUser) => {
    // dologin
    doLogin(user).then((response) => {
      if (response.code === 0) {
        history.push('/');
      } else {
        message.error('登录失败');
      }
    });
  };
  return (
    <>
      <Form onFinish={login} labelCol={{ span: 8 }} wrapperCol={{ span: 6 }}>
        <Form.Item
          label="用户名"
          name={'name'}
          rules={[
            {
              type: 'string',
              required: true,
              message: '用户名不能为空',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="密码" name={'password'}>
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Index;
