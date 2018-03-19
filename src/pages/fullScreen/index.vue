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
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 使用flex布局</div>
            </div>
            <div class="item">
                <div class="wrap-flex">
                    <div class="top border-box ">头部</div>
                    <div class="middle">
                        <div class="left border-box ">主左边</div>
                        <div class="right border-box ">
                            <div class="right-helper">主右假装很长</div>
                        </div>
                    </div>
                    <div class="bottom border-box ">底部</div>
                </div>
            </div>  
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 百分比定宽+自适应</div>
                <div class="title">- 如果不想底部和头部都固定大小，可以把px改成百分比</div>
                <div class="title">- 这样就可以相对于body的宽高变化了</div>
            </div> 
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 如果想头部和底部根据自身的内容来实现自适应，可以使用flex布局</div>
                <div class="title">- 把上面定宽flex实现的去掉宽高就好</div>
                <div class="title">- 可以加点内边距好看点</div>
            </div>
            <div class="item">
                <div class="wrap-flex-auto">
                    <div class="top border-box ">头部(根据内容自适应)</div>
                    <div class="middle">
                        <div class="left border-box ">主左边(根据内容自适应)（加了内边距）</div>
                        <div class="right border-box ">
                            <div class="right-helper">主右假装很长</div>
                        </div>
                    </div>
                    <div class="bottom border-box ">底部(根据内容自适应)（加了内边距）</div>
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
      &-helper {
        height: 1200px;
        width: 100%;
      }
    }
  }
  &-flex {
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    .top {
      height: 100px;
    }
    .bottom {
      height: 100px;
    }
    .middle {
      flex: 1;
      display: flex;
      .left {
        width: 100px;
      }
      .right {
        flex: 1;
        overflow: auto;
        &-helper {
          height: 1200px;
          width: 100%;
        }
      }
    }
  }
  &-flex-auto {
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    .top {
    }
    .bottom {
      padding: 10px;
    }
    .middle {
      flex: 1;
      display: flex;
      .left {
        padding: 10px;
      }
      .right {
        flex: 1;
        overflow: auto;
        &-helper {
          height: 1200px;
          width: 100%;
        }
      }
    }
  }
}
</style>
