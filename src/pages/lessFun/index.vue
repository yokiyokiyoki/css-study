<template>
  <div class="lessFun">
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- Less(leaner style sheets),leaner是精简的意思</div>
            <div class="title">- less是css的拓展，需要编译</div>
            <div class="title">- less当然可以与老旧的css</div>
        </div>   
    </el-card> 
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- 变量</div>
            <div class="title">- 变量属性名使用@开头</div>
        </div> 
        <div class="item">
            <div class="wrap-less">
                <p>- @nice-blue:#5B83AD</p>
                <p>- #header {color: @light-blue;}</p>
            </div>
            <div class="wrap-css"></div>    
        </div>  
    </el-card> 
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.lessFun {
  .box-card {
    width: 100%;
    margin: 10px 0px;
    .title {
      text-align: left;
      padding: 10px;
    }
    .item {
      .wrap {
        &-less {
          p {
            text-align: left;
          }
        }
        &-css {
        }
      }
    }
  }
}
</style>
