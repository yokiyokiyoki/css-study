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
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title">- 盒子设置margin：任意px auto;</div>
                <div class="title">- 盒子设置width:fit-content;(css3的width新增属性值)</div>
                <div class="title">- 内部元素便可轻松居中</div>
                <div class="title">- 只支持chrome和firefox</div>
            </div >
            <div class="item">
                <div class="wrap-three">
                    <div class="box">居中文本</div>
                </div>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title">- flex布局</div>
                <div class="title">- 给盒子设置display: flex;</div>
                <div class="title">- 给盒子设置justify-content: center;</div>
            </div >
            <div class="item">
                <div class="wrap-four">
                    <div class="box">居中文本</div>
                </div>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title">- 绝对定位+transform</div>
                <div class="title">- 给盒子元素设定position:relative</div>
                <div class="title">- 给盒子内部元素设定position:absolute;left:50%</div>
                <div class="title">- 给盒子内部元素设置transform: translateX(-50%);</div>
            </div >
            <div class="item">
                <div class="wrap-five">
                    <div class="box">居中文本</div>
                </div>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title warn">- 不常用</div>
                <div class="title">- 使用绝对定位</div>
                <div class="title">- 给盒子元素设定position:relative</div>
                <div class="title">- 定宽块级元素，知道盒子内部元素确切高度</div>
                <div class="title">- 给盒子内部元素设置left:0;right:0;margin:0 auto;</div>
            </div >
            <div class="item">
                <div class="wrap-six">
                    <div class="box">居中文本</div>
                </div>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title warn">- 不常用</div>
                <div class="title">- 使用绝对定位</div>
                <div class="title">- 给盒子元素设定position:relative</div>
                <div class="title">- 定宽块级元素，知道盒子内部元素确切高度</div>
                <div class="title">- 给盒子内部元素设置left:50%;</div>
                <div class="title">- 给盒子内部元素设置margin-left:-0.5*内部元素的宽度;</div>
            </div >
            <div class="item">
                <div class="wrap-seven">
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
        .box {
          margin: auto;
          width: 60px;
        }
      }
      .wrap-two {
        text-align: center;
      }
      .wrap-three {
        width: fit-content;
        margin: 0 auto;
      }
      .wrap-four {
        display: flex;
        justify-content: center;
      }
      .wrap-five {
        position: relative;
        .box {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .wrap-six {
        position: relative;
        .box {
          position: absolute;
          left: 0;
          right: 0;
          width: 60px;
          margin: 0 auto;
        }
      }
      .wrap-seven {
        position: relative;
        .box {
          position: absolute;
          left: 50%;
          width: 60px;
          margin-left: -30px;
        }
      }
    }

</style>
