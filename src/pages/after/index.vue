<template>
  <div class="after">
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 鼠标悬浮实现一个提示的文字</div>
                <div class="title">- 不能用JavaScript</div>
                <div class="title">- 伪元素的content一般为了做一些效果，都是直接留空</div>
                <div class="title">- 这里可以content:attr(data-msg)抓去attr上的内容</div>
                <div class="title">- 也可以配合属性选择器</div>
                <div class="title">- 显示没有文本值但是 href 属性具有链接的 a 元素的链接</div>
            </div>
            <div class="item">
                <div class="hover-item" data-msg='我是attr里带的信息'>hover</div>
                <a href="http://baidu.com">我是文本值链接</a>
                <a href="http://baidu.com"></a>
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
  .item {
    .hover-item {
      position: relative;
      width: 100px;
      &:hover::after {
        content: attr(data-msg);
        position: absolute;
        font-size: 12px;
        width: 100px;
        text-align: center;
        left: 0;
        top: -30px;
        border: 1px solid black;
      }
    }
    a[href^="h"]:empty::after {
      content: attr(href);
    }
  }
}
</style>
