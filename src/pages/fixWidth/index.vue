<template>
    <div class="fixWidth">
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 一个wrap，里面一个定宽，一个自适应高度</div>
                <div class="title">- wrap使用相对定位，自适应高度那个使用绝对定位</div>
                <div class="title">- 灵活使用了top,bottom,right,left</div>
            </div>
            <div class="item">
                <div class="wrap-abs">
                    <div class="left border-box">定宽</div>
                    <div class="right border-box">自适应</div>
                </div>
            </div>  
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 一个wrap，里面一个定宽，一个自适应高度</div>
                <div class="title">- 使用flex布局</div>
            </div>
            <div class="item">
                <div class="wrap-flex">
                    <div class="left border-box">定宽</div>
                    <div class="right border-box">自适应</div>
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
  .item {
    .wrap-abs {
      width: 300px;
      height: 100px;
      position: relative;
      .left {
        width: 100px;
        height: 100px;
        box-sizing: border-box;
      }
      .right {
        position: absolute;
        top: 0;
        left: 100px;
        right: 0;
        bottom: 0;
      }
    }
    .wrap-flex {
      width: 300px;
      height: 100px;
      display: flex;
      .left {
        width: 100px;
        height: 100px;
        box-sizing: border-box;
      }
      .right {
        flex: 1;
      }
    }
  }
  .title {
    text-align: left;
    padding: 10px;
  }
}
</style>

