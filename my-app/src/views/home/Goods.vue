<template>
  <el-form :inline="true" :model="data.selectData" class="demo-form-inline">
    <el-form-item label="Goods Title">
      <el-input v-model="data.selectData.title" placeholder=" Keywords" />
    </el-form-item>
    <el-form-item label="Introduce Title">
      <el-input v-model="data.selectData.introduce" placeholder=" Keywords" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Search</el-button>
    </el-form-item>
  </el-form>

  <div>
    <el-table :data="newData.newdata" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="title" label="Name" width="180" />
        <el-table-column prop="introduce" label="Introduce" /> 
    </el-table>
    <el-pagination 
     layout="prev, pager, next" 
     :total="data.selectData.count * 2" 
     @size-change="siceChange"
     @current-change="currentChange"
     />
  </div>
</template>

<script lang="ts" setup>
import { reactive,watch,onMounted } from 'vue'
import { InitData,ListInt } from '../../type/goods'
import api from '../../axios/api'
import { computed } from '@vue/reactivity';

const data = reactive(new InitData())
const copydata = reactive(new InitData())

onMounted(()=>{
    api.goods().then(res=>{
        // console.log(res.data)
        copydata.list = res.data
        data.list = res.data
        data.selectData.count = res.data.length
    })
})

const newData = reactive({
    newdata:computed(()=>{
        // 1 page --> [1-5]
        // 2 page --> [6-10]
        // 3 page --> [11-15]
        // ...
        return data.list.slice(
            (data.selectData.page - 1) * data.selectData.pagecount,
            data.selectData.page * data.selectData.pagecount
        )
    })
})

const siceChange = (pagecount:number)=>{
    data.selectData.pagecount = pagecount
}

const currentChange = (page:number)=>{
    data.selectData.page = page
}

const onSubmit = () => {
//   console.log(data.selectData.title)

  let searchArr:ListInt[] = []
    if(data.selectData.title || data.selectData.introduce) {
        if(data.selectData.title) {
            searchArr = data.list.filter((value)=>{
                return value.title.indexOf(data.selectData.title) !== -1
            })
        }
        if(data.selectData.introduce) {
            searchArr = data.list.filter((value)=>{
                return value.title.indexOf(data.selectData.introduce) !== -1
            })
        }
    } else {
        searchArr = data.list
    }
    data.selectData.count = searchArr.length
    data.list = searchArr
}

watch([()=>data.selectData.title,()=>data.selectData.introduce],
        ()=>{
            if(data.selectData.title == '' && data.selectData.introduce == '') {
                data.list = copydata.list
                data.selectData.count = copydata.list.length
            }
        }
    )
</script>
