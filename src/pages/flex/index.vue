<template>
  <div class="flex">
      <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex弹性布局</div>
            <div class="title">- flexible box弹性伸缩盒的缩写</div>
            <div class="title">- display:flex用于块状元素</div>
            <div class="title">- display:inline-flex用于行内元素</div>
            <div class="title">- 父容器设定为flex布局后，子元素的float/clear和vertical-align都将失效</div>
        </div>
    </el-card>
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex容器的所有元素自动成为容器成员，即flex-item</div>
            <div class="title">- 默认存在两根轴，水平的主轴（main axis）和垂直的交叉轴（cross axis）,flex-item默认沿主轴排列</div>
        </div>
    </el-card>
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex容器的所有属性</div>
            <div class="title">- flex-direction决定主轴方向，默认是row，还有row-reverse（起点在右端），column和column-reverse，主轴变成了垂直方向的</div>
            <div class="title">- flex-wrap决定换不换行，默认是nowrap，wrap换行，第一行就在上面。wrap-reverse第一行在下面，反着来</div>
            <div class="title">- flex-flow则是direction和wrap的合体，可以这样写flex-flow:colomn wrap;</div>
            <div class="title">- justify-content是定义了主轴上的对齐方式。justify-content: flex-start（默认） | flex-end | center | space-between | space-around;</div>
            <div class="title">- align-item是定义了交叉轴的对齐方式。align-items: flex-start | flex-end | center | baseline | stretch（默认）;</div>
            <div class="title">- align-content定义了多条轴线的对齐方式（通俗来说不止一行），align-content: flex-start | flex-end | center | space-between | space-around | stretch（默认）;</div>
        </div>
    </el-card>
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex容器的flex-direction</div>
        </div>
        <div class="item">
            <div class="item-wrap">
                <div class="box border-box" v-for='n in 3' :key='n'>row+{{n}}</div>
            </div>
            <div class="item-wrap" style='flex-direction:row-reverse;'>
                <div class="box border-box" v-for='n in 3' :key='n'>row-reverse+{{n}}</div>
            </div>
            <div class="item-wrap" style='flex-direction:column;'>
                <div class="box border-box" v-for='n in 3' :key='n'>column+{{n}}</div>
            </div>
            <div class="item-wrap" style='flex-direction:column-reverse;'>
                <div class="box border-box" v-for='n in 3' :key='n'>column-reverse+{{n}}</div>
            </div>
        </div>
    </el-card>
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex容器的flex-wrap</div>
            <div class="title">- no-wrap是就算超过了flex容器的宽度，也不会换行</div>
        </div>
        <div class="item">
            <div class="item-wrap" style="width:100px;">
                <div class="box border-box" v-for='n in 3' :key='n'>no-wrap+{{n}}</div>
            </div>
            <div class="item-wrap" style="width:100px;flex-wrap:wrap;">
                <div class="box border-box" v-for='n in 3' :key='n'>wrap+{{n}}</div>
            </div>
            <div class="item-wrap" style="width:200px;flex-wrap:wrap-reverse;">
                <div class="box border-box" v-for='n in 3' :key='n'>wrap-reverse+{{n}}</div>
            </div>
        </div>
    </el-card>
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex容器的flex-flow</div>
            <div class="title">- direction和wrap的合体</div>
        </div>
        <div class="item">
            <div class="item-wrap" style="width:100px;">
                <div class="box border-box" v-for='n in 3' :key='n'>no-wrap+{{n}}</div>
            </div>
            <div class="item-wrap" style="width:100px;flex-flow:wrap column;">
                <div class="box border-box" v-for='n in 3' :key='n'>wrap+{{n}}</div>
            </div>
            <div class="item-wrap" style="width:200px;flex-flow:column-reverse wrap-reverse;">
                <div class="box border-box" v-for='n in 3' :key='n'>wrap-reverse+{{n}}</div>
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
  box-sizing: border-box;
}
.box-card {
  width: 100%;
  margin: 10px 0px;
  .title {
    text-align: left;
    padding: 10px;
  }
}
.item {
  &-wrap {
    display: flex;
    .box {
    }
  }
}
</style>
