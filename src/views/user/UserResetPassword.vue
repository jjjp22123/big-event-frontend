<script setup>
import { ref } from 'vue'
const resetData = ref({
    old_pwd:'',
    new_pwd:'',
    re_pwd:''
}
)

const rules = {
    old_pwd: [
        {required:true,message:'请输入原密码',trigger:'blur'},
        {pattern:/^\S{5,16}$/,message:'原密码是5-16非空字符串',trigger:'blur'}
    ],
    new_pwd: [
        {required:true,message:'请输入新密码',trigger:'blur'},
        {pattern:/^\S{5,16}$/,message:'新密码是5-16非空字符串',trigger:'blur'}
    ],
    re_pwd: [
        {required:true,message:'请确认新密码',trigger:'blur'},
        {pattern:/^\S{5,16}$/,message:'新密码是5-16非空字符串',trigger:'blur'}
    ]
}

//重置密码
import {userPwdUpdateService} from '@/api/user.js'
import { ElMessage } from 'element-plus'
import {useRouter} from 'vue-router'
const router = useRouter();
const updateUserPwd = async ()=>{
    let result = await userPwdUpdateService(resetData.value);
    ElMessage.success(result.msg?result.msg:'重置密码成功');
    //退回到登录页面
    router.push('/login');
}
</script>
<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span>重置密码</span>
            </div>
        </template>
        <el-row>
            <el-col :span="12">
                <el-form :model="resetData" :rules="rules" label-width="100px" size="large">
                    <el-form-item label="原密码" prop="old_pwd">
                        <el-input v-model="resetData.old_pwd" type="password" show-password></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="new_pwd">
                        <el-input v-model="resetData.new_pwd" type="password" show-password></el-input>
                    </el-form-item>
                    <el-form-item label="确认新密码" prop="re_pwd">
                        <el-input v-model="resetData.re_pwd" type="password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="updateUserPwd">确认重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-card>
</template>