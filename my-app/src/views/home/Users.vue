<template>
  <el-form :inline="true" :model="userdata.selectData" class="demo-form-inline">
    <el-form-item label="Search User">
      <el-input v-model="userdata.selectData.username" placeholder=" Keywords" />
    </el-form-item>
    <el-form-item label="Select Role">
      <el-select v-model="roledata.selectData" class="m-3" placeholder="Select" size="large" clearable>
        <el-option
         v-for="item in roledata.roleList" 
         :key="item.roleId"
         :label="item.roleName"
         :value="item.right"
        />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Search</el-button>
    </el-form-item>
  </el-form>

  <div>
    <el-table :data="userdata.userList" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="username" label="UserName" width="180" />
        <el-table-column prop="role" label="Role" >
            <template #default="scope">
                <el-button
                 v-for = 'item in scope.row.role'
                 :key = 'item.roleId'
                 type="success"
                 size="small"
                 >
                    {{item.roleName}}
                </el-button>
            </template>
        </el-table-column> 
        <el-table-column prop="" label="option" >
            <template #default="scope">
                <el-button
                 :icon="Edit" 
                 circle
                 type="primary"
                 size="large"
                 @click.edit="open"
                 />
            </template>
        </el-table-column> 
    </el-table>
    <el-dialog v-model="userdata.isShow" title="Shipping address">
        <el-form :model="userdata.ative">
        <el-form-item label="userName" label-width="80px">
            <el-input v-model="userdata.ative.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="roleName" label-width="80px">
            <el-select v-model="userdata.ative.role" placeholder="Please select">
            <el-option label="Admin" value="shanghai" />
            <el-option label="Common" value="beijing" />
            </el-select>
        </el-form-item>
        </el-form>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="cancel">Cancel</el-button>
            <el-button type="primary" @click="confirm"
            >Confirm</el-button
            >
        </span>
        </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive,watch,onMounted } from 'vue'
import { InitData,ListInt } from '../../type/user'
import {Edit} from '@element-plus/icons-vue'
import api from '../../axios/api'

const userdata = reactive(new InitData())

const roledata = reactive(new InitData())

const copydata = reactive(new InitData())

onMounted(()=>{
    api.users().then(res=>{
        userdata.userList = res.data
        copydata.userList = res.data
        // console.log(userdata.userList)
    })
    api.roles().then(res=>{
        roledata.roleList = res.data
        // console.log(roledata.roleList)

    })
})


const onSubmit = () => {
  console.log(userdata.selectData.username)
    
    let searchArr:ListInt[] = []
    if(userdata.selectData.username) {
        searchArr = userdata.userList.filter((value)=>{
                return value.username.indexOf(userdata.selectData.username) !== -1
        })
    } else {
        searchArr = userdata.userList
    }
    userdata.userList = searchArr
}

watch([()=>userdata.selectData.username],
    ()=>{
        if(userdata.selectData.username == '') {
            userdata.userList = copydata.userList
        }
})

const open = ()=>{
    userdata.isShow = true
}

const cancel = ()=>{
    userdata.isShow = false

}

const confirm = ()=>{
    userdata.isShow = false

    console.log('修改信息失败')
}
</script>
