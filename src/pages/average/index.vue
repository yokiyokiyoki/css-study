<template>
  <div class="average">
      <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 均等分配，中间有空隙</div>
                <div class="title">- 使用flex布局</div>
            </div>
            <div class="item">
                <div class="wrap-flex">
                    <div class="col border-box">1</div>
                    <div class="col border-box">2</div>
                    <div class="col border-box">3</div>
                    <div class="col border-box">4</div>
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
}
.box-card {
  width: 100%;
  margin: 10px 0px;
  .title {
    text-align: left;
    padding: 10px;
  }
}
.wrap-flex {
  display: flex;
  height: 100px;
  width: 430px;
  .col {
    flex: 1;
    & + .col {
      margin-left: 10px;
    }
  }
}
</style>
