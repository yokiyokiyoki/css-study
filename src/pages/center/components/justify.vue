<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title">- 适用于盒子内部是块级元素</div>
                <div class="title">- 使用margin:任意px auto;</div>
                <div class="title">- 即margin-left:0px;margin-right:0px;</div>
                <div class="title">- 定宽块级元素</div>
                <div class="title">- 知道盒子内部元素的宽度，并且给内部元素设置上述条件，可以让内部元素居中</div>
            </div >
            <div class="item">
                <div class="wrap-one">
                    <div class="box">居中文本</div>
                </div>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title">- 适用于盒子内部是行内元素</div>
                <div class="title">- 给盒子设置text-align:center，盒子内部元素自动居中</div>
            </div >
            <div class="item">
                <div class="wrap-two">
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
      .wrap-one {
        .box {
          margin: auto;
          width: 60px;
        }
      }
      .wrap-two {
      }
    }

</style>
