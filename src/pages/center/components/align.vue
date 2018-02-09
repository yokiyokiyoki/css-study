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
    }

</style>

