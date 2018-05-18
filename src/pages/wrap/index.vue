<template>
    <div class="wrap">
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 定宽的长度，里面部分不超出一行长度则居中，超出则换行并且居左显示</div>
                <div class="title">- 使用父元素包裹，text-aligin:center</div>
                <div class="title">- 子元素不是块级元素就对了，因为块级元素可以让这个子元素撑满父级元素，这样就达不到要求了</div> 
                <div class="title">- display:inline-flex;flex-wrap:wrap;或者inline-block</div>
                <div class="title">- 实际上有两个包裹元素</div>
            </div>
            <div class="item" >
               <p class="wrap-father" >
                   <span>1111111111111</span>
               </p>
               <p class="wrap-father" >
                   <span>111111111111111111111111<br/>111111111111111</span>
               </p>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.wrap {
  text-align: left;
  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
    .wrap-father {
      text-align: center;
      width: 200px;
      span {
        display: inline-flex;
        flex-wrap: wrap;
        text-align: left;
      }
    }
  }
}
</style>

