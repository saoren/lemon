/*
 * @Author: L.柠@95736614
 * @Date: 2022-02-21 14:04:38
 * @LastEditTime: 2022-02-28 17:23:10
 */
import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link,history} from 'umi'
import './login.less'
import { LoginApi } from './request/api'

interface IRegisterParams {
  username: string | number;
  password: string | number;
}
interface IRes {
  errCode?: number,
  message?: string,
  data: any
}


function Login() {
  const onFinish = (values:any) => {
    const { username, password } = values
    LoginApi({ username, password }).then((res: IRes) => {
      if (res.errCode === 0) {
        message.success(res.message, 1.5);
        //保存信息
        localStorage.setItem('username',res.data.username)
        localStorage.setItem('cms-token',res.data['cms-token'])
        localStorage.setItem('avatar',res.data.avatar)




        setTimeout(() => {
          history.push('/index')
        }, 1500)
      }else{
        message.error(res.message,1.5)
      }
    })


  };

  const onFinishFailed = (errorInfo:any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='login_p'>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item

          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder='请输入用户名' />
        </Form.Item>

        <Form.Item

          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder='请输入密码' />
        </Form.Item>

        <Form.Item >
        <Link to='/register'>还没账号? 立即注册</Link>
        </Form.Item>

        <Form.Item >
          <Button  type="primary" htmlType="submit" block size='large'>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login