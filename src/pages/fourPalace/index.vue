<template>
  <div class="fourPalace">
      <el-card class="box-card">
        <div slot='header'>
            <div class="title">- 正经的四宫格布局</div>
            <div class="title">- flex布局，等比例</div>
            <div class="title">- 思路是先上下两个框分别包着两个框</div>
            <div class="title">- 上下两个框被一个wrap包着，wrap使用flex-direction:column，就成了纵向布局</div>
            <div class="title">- 然后如果中间有间隔，就需要小框挨着的小框，使用margin，一样也是等比例的，四个框</div>
            <div class="title">- 上下两层也要使用margin</div>
        </div>
        <div class="item">
            <div class="wrap-box wrap-one">
                <div class="flex-box flex-one layout">
                    <div class="flex-box flex-one border-box">1</div>
                    <div class="flex-box flex-one border-box">2</div>
                </div>
                <div class="flex-box flex-one layout">
                    <div class="flex-box flex-one border-box">3</div>
                    <div class="flex-box flex-one border-box">4</div>
                </div>
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
  & + .border-box {
    margin-left: 10px;
  }
}
.wrap-box {
  display: flex;
  flex-direction: column;
}
.flex-box {
  display: flex;
}
.flex-one {
  flex: 1;
}
.item {
  .wrap-one {
    height: 200px;
    .layout {
      & + .layout {
        margin-top: 10px;
      }
    }
  }
}
.box-card {
  width: 100%;
  margin: 10px 0px;
  .title {
    text-align: left;
    padding: 10px;
  }
}
</style>

