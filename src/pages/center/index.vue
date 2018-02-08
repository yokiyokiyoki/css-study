<template>
  <div class="center">
    <el-menu default-active="justify" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="justify">水平居中</el-menu-item>
        <el-menu-item index="align">垂直居中</el-menu-item>
        <el-menu-item index="all">水平+垂直居中</el-menu-item>
    </el-menu>
    <component :is='active' />
</div>
</template>
<script>
    const align = () => import("./components/align");
    const all = () => import("./components/all");
    const justify = () => import("./components/justify");
    export default {
      data() {
        return {
          active: "justify"
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
          this.active = key;
        }
      },
      components: {
        align,
        all,
        justify
      }
    };
</script>

