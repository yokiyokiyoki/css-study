<template>
  <div class="after">
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 鼠标悬浮实现一个提示的文字</div>
                <div class="title">- 不能用JavaScript</div>
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
</style>
