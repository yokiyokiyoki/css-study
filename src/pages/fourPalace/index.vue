<template>
  <div class="fourPalace">
      <el-card class="box-card">
        <div slot='header'>
            <div class="title">- 正经的四宫格布局</div>
            <div class="title">- flex布局，等比例</div>
            <div class="title">- 思路是先上下两个框分别包着两个框</div>
            <div class="title">- 上下两个框被一个wrap包着，wrap使用flex-direction:column，就成了纵向布局</div>
        </div>
        <div class="item">
            <div class="wrap-box">
                <div class="flex-box flex-one">
                    1
                </div>
                <div class="flex-box flex-one">
                    2
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
.wrap-box {
  display: flex;
  direction: column;
}
.flex-box {
  display: flex;
}
.flex-one {
  flex: 1;
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

