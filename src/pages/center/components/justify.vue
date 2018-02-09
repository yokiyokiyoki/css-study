<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title">适用于块级元素</div>
                <div class="title">使用margin:auto</div>
                <div class="title">知道盒子内部元素的宽度，可以让内部元素居中</div>
            </div >
            <div class="item">
                <div class="wrap">
                    <div class="box">居中文本</div>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>
    export default {};
</script>
<style lang="less" scoped>
    .box-card {
      .title {
        padding: 14px 0;
      }
      .wrap {
        .box {
          margin: auto;
          width: 60px;
        }
      }
    }

</style>
