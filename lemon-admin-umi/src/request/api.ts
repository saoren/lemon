/*
 * @Author: L.柠@95736614
 * @Date: 2022-02-21 23:44:14
 * @LastEditTime: 2022-02-28 18:46:25
 */
import request from './request'

interface IRegisterParams {
    username: string | number;
    password: string | number;
}

// 注册
export const RegisterApi = (params: IRegisterParams) => request.post('/register', params)

//登录
export const LoginApi = (params: IRegisterParams) => request.post('/login', params)

//获取用户信息
export const userInfoApi = () => request.get('/info')
interface IChangeUserInfo {
    username?: string | number;
    password?: string | number;
}
//修改用户信息
export const ChangeUserInfoApi = (params: IChangeUserInfo) => request.post('/info', params)



//获取label列表
