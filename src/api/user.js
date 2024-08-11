//导入request.js工具
import request from '@/utils/request.js'
// import { k } from 'vite/dist/node/types.d-aGj9QkWt';

//提供注册接口的函数 要导出去
export const userRegisterService = (registerData) =>{
    //借助URLSearchParms完成传递
    const parms = new URLSearchParams();
    for(let key in registerData){
        parms.append(key,registerData[key]);
    }
    return request.post('/user/register',parms);
}

//提供登录接口的函数
export const userLoginService = (loginData) => {
    const parms = new URLSearchParams();
    for(let key in loginData){
        parms.append(key,loginData[key]);
    }
    return request.post('/user/login',parms);
}



//获取用户详细信息
export const userInfoService = ()=>{
    return request.get('/user/userInfo')
}

//修改个人信息
export const userInfoUpdateService = (userInfoData) =>{
    return request.put('/user/update',userInfoData);
}

//修改头像
export const userAvatarUpdateService = (avatarUrl)=>{
    const params = new URLSearchParams();
    params.append('avatarUrl',avatarUrl);
    return request.patch('user/updateAvatar',params);
}

//重置密码
export const userPwdUpdateService = (resetData)=>{
    return request.patch('/user/updatePwd',resetData);
}