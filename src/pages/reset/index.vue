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
            "1.由于reset整个浏览器样式太过于暴力，选择使用normalize.css来初始化浏览器样式",
            "2.给html，body的宽高设置100%",
            "3.设置基本font-size，一般为14px"
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

