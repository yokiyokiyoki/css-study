<template>
  <div class="fullScreen">
      <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 使用绝对定位，头部和底部固定宽</div>
                <div class="title">- left和right设置味0可以自动占满整行</div>
                <div class="title">- 如果想要某个地方可以滚动，那么先把它父容器设置好，详见下面</div>
            </div>
            <div class="item">
                <div class="wrap-abs">
                    <div class="top border-box ">头部</div>
                    <div class="left border-box ">主左边</div>
                    <div class="right border-box ">
                        <div class="right-helper">主右假装很长</div>
                    </div>
                    <div class="bottom border-box ">底部</div>
                </div>
            </div>  
        </el-card>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.border-box {
  border: 1px solid black;
  box-sizing: border-box;
}
.box-card {
  width: 100%;
  margin: 10px 0px;
  .title {
    text-align: left;
    padding: 10px;
  }
}
.wrap {
  &-abs {
    height: 400px;
    width: 100%;
    position: relative;
    .top {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 100px;
    }
    .bottom {
      position: absolute;
      bottom: 0px;
      right: 0;
      left: 0;
      height: 100px;
    }
    .left {
      position: absolute;
      left: 0;
      top: 100px;
      bottom: 100px;
      width: 100px;
    }
    .right {
      position: absolute;
      right: 0;
      top: 100px;
      bottom: 100px;
      left: 100px;
      overflow: auto;
      .right-helper {
        height: 1200px;
        width: 100%;
      }
    }
  }
}
</style>
