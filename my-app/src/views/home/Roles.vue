<template>
    <el-form-item>
      <el-button type="primary" @click="onAdd">Add Role</el-button>
    </el-form-item>

    <div>
    <el-table :data="roledata.roleList" border style="width: 100%">
        <el-table-column prop="roleId" label="RoleId" width="180" />
        <el-table-column prop="roleName" label="RoleName" width="180" />
        <el-table-column prop="right" label="Right" >
            <template #default="scope">
                <el-button
                 v-for = 'item in scope.row.right'
                 :key = 'item.roleId'
                 type="success"
                 size="small"
                 >
                    {{item}}
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
                 @click.edit="open(scope.row)"
                 />
            </template>
        </el-table-column> 
    </el-table>
    <el-dialog v-model="roledata.isShow" title="Add or Edit">
        <el-form :model="roledata.ative">
        <el-form-item label="RoleName" label-width="80px">
            <el-input v-model="roledata.ative.roleName" autocomplete="off" :value="roledata.ative.roleName"/>
        </el-form-item>
        <el-form-item label="Right" label-width="80px">
            <span>Tree checkbox ...</span>
            <el-checkbox v-model="checked1" label="Right1" size="large" />
            <el-checkbox v-model="checked2" label="Right2" size="large" />
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
import {InitData,RoleListInt} from '../../type/right'
import { reactive,onMounted,ref } from 'vue'
import api from '../../axios/api'
import {Edit} from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const roledata = reactive(new InitData())

const checked1 = ref(true)
const checked2 = ref(false)

onMounted(()=>{
    api.roles().then(res=>{
        roledata.roleList = res.data
        // console.log(roledata.roleList)
    })
})

const onAdd = ()=>{
    console.log('Add Role')
    ElMessageBox.prompt('Please input New Role', 'Add', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]/,
    inputErrorMessage: 'Cannot Empey ',
  })
    .then(({ value }) => {
      ElMessage({
        type: 'success',
        message: `Success in:${value}`,
      })
      // add to database
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Input canceled',
      })
    })
}

const open = (row:RoleListInt)=>{
    
    roledata.isShow = true
    console.log(row)
    roledata.ative = row
}

const cancel = ()=>{
    roledata.isShow = false

}

const confirm = ()=>{
    console.log('confirm')
}

</script>