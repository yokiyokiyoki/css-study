<template>
  <div class="holygrail">
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 两边宽度固定中间可以流动即自适应</div>
                <div class="title">- 一般来说，按照源顺序（在 DOM 中表现为先写 Left，然后 Middle，最后，Right）等，它将可能导致代码不够灵活，尤其是从 DOM 的载入顺序上来说，中间的内容不能被首先加载</div>
                <div class="title">- 这里我们使用把中间的结构放在dom的最前面</div>
                <div class="title">- 左右宽是20px</div>
            </div>
            <div class="item">
                <div class="item-container">
                    <div class="item-container-header">头部</div>
                    <div class="item-container-content clearfix">
                        <div class="item-container-content-middle col">中间</div>
                        <div class="item-container-content-left col">左边</div>
                        <div class="item-container-content-right col">右边</div>
                    </div>
                    <div class="item-container-footer">底部</div>
                </div>
            </div>  
        </el-card>
        <el-card class="box-card"> 
            <div slot='header'>
                <div class="title">- 所有的item设为float:left，全部浮动起来</div>
                <div class="title">- 把middle的width设为100%</div>
                <div class="title">- 把left的margin-left设为-100%</div>
                <div class="title">- 把right的margin-left设为负的它本身的宽度</div>
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
}
.box-card {
  width: 100%;
  margin: 10px 0px;
  .title {
    text-align: left;
    padding: 10px;
  }
}
.clearfix {
  &::after {
    display: block;
    content: "";
    clear: both;
  }
}
.item {
  &-container {
    &-header {
    }
    &-content {
      .col {
        float: left;
        height: 50px;
        border: 1px solid black;
        box-sizing: border-box;
      }
      &-middle {
        width: 100%;
      }
      &-left {
        width: 20px;
        margin-left: -100%;
      }
      &-right {
        width: 20px;
        margin-left: -20px;
      }
    }
    &-footer {
    }
  }
}
</style>

