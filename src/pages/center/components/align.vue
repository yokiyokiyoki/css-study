<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title">- 若盒子内部元素是单行文本，则设置其line-height等于其父级元素的高度</div>
            </div >
            <div class="item">
                <div class="wrap-one">
                    <div class="box">居中文本</div>
                </div>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title">- 行内块级元素</div>
                <div class="title">- 适用IE7</div>
                <div class="title">- 是一种很流行的方法</div>
                <div class="title">- 基本思想是使用display: inline-block, vertical-align: middle和一个伪元素让内容块处于容器中央</div>
            </div >
            <div class="item">
                <div class="wrap-two">
                    <div class="box">居中文本</div>
                </div>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title">- flex布局</div>
            </div >
            <div class="item">
                <div class="wrap-three">
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
      .warn {
        color: #f56c6c;
      }
      margin: 10px 0px;
      .title {
        padding: 14px 0;
      }
      .wrap-one {
        height: 30px;
        .box {
          line-height: 30px;
        }
      }
      .wrap-two {
        height: 30px;
      }
      .wrap-two::after,
      .box {
        display: inline-block;
        vertical-align: middle;
      }
      .wrap-two::after {
        content: "";
        height: 100%;
      }
      .wrap-three {
        height: 30px;
        display: flex;
        align-items: center;
      }
    }

</style>

