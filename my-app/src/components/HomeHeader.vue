<template>
    <div class="homebox">
        <h1>Vue Back end Systen</h1>
        <div class="block">
            <span class="name">welcome admin~</span>
            <span class="headimg">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <el-avatar :size="50"/>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>edit name</el-dropdown-item>
                            <el-dropdown-item>edit avatar</el-dropdown-item>
                            <el-dropdown-item divided>
                                <el-button type="danger" @click="onDrop">onLogin</el-button>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>>
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'

const router = useRouter()

   const onDrop = ()=>{
    console.log('退出登录！')
    router.push('/login')
   }
</script>


<style lang="css">
 .homebox {
    background-color: #333;
    width: 100%;
    height: 100%;
    }

 .block {
    float: right;
    line-height: 55px;
    margin-right: 15px;
 }

 h1 {
    float: left;
    color: #fff;
    line-height: 60px;
    margin-left: 9px;
}

 .name {
    color: #fff;
 }

 .headimg {
    display: inline-block;
    padding-top: 5px;
    margin-left: 10px;
 }
</style>