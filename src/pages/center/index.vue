<template>
  <div class="center">
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">处理中心1</el-menu-item>
    </el-menu>
</div>
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

