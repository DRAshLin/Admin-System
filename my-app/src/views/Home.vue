<script setup lang="ts">
import HomeHeader from '../components/HomeHeader.vue';
import {useRouter} from 'vue-router'

const router = useRouter()

const list = router.getRoutes().filter(list=>list.meta.isShow)

// console.log(list);

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HomeHeader></HomeHeader>
      </el-header>

      <el-container>
        <el-aside>
          <el-scrollbar>
            <el-menu
             active-text-color="#ffd04b"
             background-color="#333"
             class="el-menu-vertical-demo"
             default-active="2"
             text-color="#fff"
             router
              >
              <!-- router 开启路由模式，根据 index 跳转路由 -->
              <el-menu-item 
               :index="item.path" 
               v-for="item in list" 
               :key="item.path"
               >
                {{ item.name }}
              </el-menu-item>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="css">
.common-layout {
  height: 100%;
}

.el-header {
  padding: 0;
}

.el-container {
  height: 100%;
}

.el-aside {
  position: fixed;
  height: 100%;
  background-color: gray;
  width: 200px;
}

.el-main {
  margin-left: 200px;
  overflow: scroll;
}
</style>
