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
                <div class="title">- IE8/IE9不支持</div>
                <div class="title">- 需要浏览器厂商前缀</div>
                <div class="title">- 元素高度不定</div>
            </div >
            <div class="item">
                <div class="wrap-three">
                    <div class="box">居中文本</div>
                </div>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title">- transform</div>
                <div class="title">- 元素高度不定</div>
            </div >
            <div class="item">
                <div class="wrap-four">
                    <div class="box">居中文本</div>
                </div>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title">-  vertical-align</div>
                <div class="title">- vertical-align只有在父层是td/th时，才会生效，对于其他块状元素，div/p是不生效的</div>
                <div class="title">- 为了使用vertical-align，需要设定父级元素display:table,子元素display:table-cell;vertical-align:middle;</div>
                <div class="title">- 元素高度不定</div>
            </div >
            <div class="item">
                <div class="wrap-five">
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
      .wrap-four {
        position: relative;
        height: 30px;
        .box {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .wrap-five {
        display: table;
        height: 30px;
        .box {
          display: table-cell;
          vertical-align: middle;
        }
      }
    }
</style>

