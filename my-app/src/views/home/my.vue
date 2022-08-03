<template>
    <h2>personal center</h2>
    <hr>
    <div class="pch">
        <el-avatar :size="150" />
    </div>

    <div>
        <el-descriptions
        class="margin-top"
        title="With border"
        :column="3"
        border
        >   
            <template #extra>
            <el-button type="primary">Operation</el-button>
            </template>
            <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                <el-icon>
                    <user />
                </el-icon>
                Username
                </div>
            </template>
            kooriookami
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                <el-icon>
                    <iphone />
                </el-icon>
                Telephone
                </div>
            </template>
            18100000000
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                <el-icon>
                    <location />
                </el-icon>
                Place
                </div>
            </template>
            Suzhou
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                <el-icon >
                    <tickets />
                </el-icon>
                Remarks
                </div>
            </template>
            <el-tag size="small">School</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                <el-icon>
                    <office-building />
                </el-icon>
                Address
                </div>
            </template>
            No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script lang="ts" setup>
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@element-plus/icons-vue'


</script>

<style lang="css">
 .pch {
    margin-top: 24px;
 }
</style>