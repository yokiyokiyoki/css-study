<template>
    <el-container class="home">
        <el-aside width="200px">
            <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen">
            <el-menu-item index="1">
                <span slot="title">导航二</span>
            </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view />
        </el-main>
    </el-container>
</template>
<script>
    export default {
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    };
</script>
<style lang="less" scoped>
    .home {
      height: 100%;
      .el-menu {
        height: 100%;
      }
    }

</style>
