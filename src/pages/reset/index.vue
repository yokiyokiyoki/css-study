<template>
    <div class="reset">
        <el-card class="box-card">
            <div class="item" v-for='(item,index) in items' :key='index'>
               {{item}} 
            </div>
        </el-card>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          items: [
            "- CSS Reset把浏览器的默认样式都重置了",
            "- normalize.css是保留浏览器的原来样式并且做到每个浏览器显示一致。",
            "- 选择使用normalize.css",
            "- 给html，body的宽高设置100%",
            "- 设置基本font-size，一般为14px"
          ]
        };
      }
    };
</script>
<style lang="less" scoped>
    .reset {
      text-align: left;
      .item {
        padding: 18px 0;
      }

      .box-card {
        width: 100%;
      }
    }

</style>

