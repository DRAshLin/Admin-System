<template>
  <div id="login">
    <div class="loginBox">
      <div class="loginTitle">LOGIN</div>
      <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
      >
      <el-form-item label="Username" prop="username">
        <el-input 
          v-model="ruleForm.username" 
          type="text" 
          autocomplete="off" 
        />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
    
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Submit</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
      </el-form>
    </div>
  </div>
  
  
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import api from '../axios/api'
import { useRouter } from 'vue-router';

const router = useRouter()

const ruleFormRef = ref<FormInstance>()

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the Username'))
  } else {
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the Password'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  username: '',
  password: '',
})

const rules = reactive({
  username: [
    { validator: validatePass, trigger: 'blur' },
    { min: 5, max: 18, message: 'Length should be 3 to 18', trigger: 'blur' },
  ],
  password: [
    { validator: validatePass2, trigger: 'blur' },
    { min: 5, max: 12, message: 'Length should be 3 to 12', trigger: 'blur' },
  ],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      api.login(ruleForm).then((res)=>{
        console.log(res.data)
        router.push('./home')
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="css">
#login{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url('../assets/loginbg.jpg');
  background-size: cover;
}

.loginBox{
  width: 500px;
  padding-right: 30px;
  border: 1px solid black;
  border-radius: 24px;
}

.loginTitle{
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
  padding-left: 40px;
  padding-top: 10px;
}
</style>