/*
 * @Author: L.柠@95736614
 * @Date: 2022-02-21 14:04:38
 * @LastEditTime: 2022-02-28 14:06:38
 */
import React from 'react'
import {Link} from 'umi'
import { Form, Input, Button,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


import './login.less'



function Register() {
  
  const onFinish = () => {

    }

    interface IRes{
      errCode?: number,
      message?: string,
      data:any
    }
    //注册

  
  const onFinishFailed = (errorInfo: any) => {
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
          placeholder='请输入用户名'/>
        </Form.Item>

        <Form.Item

          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password 
           prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder='请输入密码'/>
        </Form.Item>
        

        <Form.Item

          name="password1"
          rules={[{ required: true, message: '请确认密码!' }]}
        >
          <Input.Password 
           prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder='请确认密码'/>
        </Form.Item>

        
        <Form.Item >
          <Link  to='/'>已有账号? 返回登录</Link>
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit" block size='large'>
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register