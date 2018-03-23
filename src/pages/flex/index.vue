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
            <div class="title">- 超过了容器宽度后选择换行不换行</div>
            <div class="title">- no-wrap是就算超过了flex容器的宽度，也不会换行</div>
        </div>
        <div class="item">
            <div class="item-wrap" style="">
                <div class="box border-box" v-for='n in 3' :key='n'>no-wrap+{{n}}</div>
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
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex容器的justify-content</div>
            <div class="title">- 主轴方向对齐</div>
            <div class="title">- 默认是flex-start</div>
            <div class="title">- space-between对齐两端，flex-item之间的间隔相等</div>
            <div class="title">- space-around，每个flex-item两边的间隔相等</div>
        </div>
        <div class="item">
            <div class="item-wrap border-box" style="justify-content:center;">
                <div class="box border-box" v-for='n in 3' :key='n'>center+{{n}}</div>
            </div>
            <div class="item-wrap border-box" style="justify-content:flex-end;">
                <div class="box border-box" v-for='n in 3' :key='n'>flex-start+{{n}}</div>
            </div>
            <div class="item-wrap border-box" style="justify-content:space-between;">
                <div class="box border-box" v-for='n in 3' :key='n'>space-between+{{n}}</div>
            </div>
            <div class="item-wrap border-box" style="justify-content:space-around;">
                <div class="box border-box" v-for='n in 3' :key='n'>space-around+{{n}}</div>
            </div>
        </div>
    </el-card>
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex容器的align-items</div>
            <div class="title">- 交叉轴方向对齐</div>
            <div class="title">- 默认是stretch(填满)</div>
        </div>
        <div class="item">
            <div class="item-wrap border-box" style="align-items:center;height:50px;">
                <div class="box border-box" v-for='n in 3' :key='n'>center+{{n}}</div>
            </div>
            <div class="item-wrap border-box" style="align-items:flex-start;height:50px;">
                <div class="box border-box" v-for='n in 3' :key='n'>center+{{n}}</div>
            </div>
            <div class="item-wrap border-box" style="align-items:flex-end;height:50px;">
                <div class="box border-box" v-for='n in 3' :key='n'>flex-end+{{n}}</div>
            </div>
            <div class="item-wrap border-box" style="align-items:baseline;height:50px;">
                <div class="box border-box" v-for='n in 3' :key='n'>baseline+{{n}}</div>
            </div>
            <div class="item-wrap border-box" style="align-items:stretch;height:50px;">
                <div class="box border-box" v-for='n in 3' :key='n'>stretch+{{n}}</div>
            </div>
        </div>
    </el-card>
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex容器的align-content</div>
            <div class="title">- 多根轴线对齐方式</div>
            <div class="title">- flex容器在一行的时候，该属性不起作用。</div>
            <div class="title">- 可以很好的处理换行之后的间距问题</div>
            <div class="title">- 默认是stretch,当flex-item没有设置高度或者为auto的时候，将其设为行高度</div>
        </div>
        <div class="item">
            <div class="item-wrap border-box" style="width:100px;align-content:stretch;flex-wrap:wrap;height:100px;">
                <div class="box border-box" v-for='n in 3' :key='n'>stretch+{{n}}</div>
            </div>
            <div class="item-wrap border-box" style="width:100px;align-content:flex-start;flex-wrap:wrap;height:100px;">
                <div class="box border-box" v-for='n in 3' :key='n'>flex-start+{{n}}</div>
            </div>
            <div class="item-wrap border-box" style="width:100px;align-content:flex-end;flex-wrap:wrap;height:100px;">
                <div class="box border-box" v-for='n in 3' :key='n'>flex-end+{{n}}</div>
            </div>
            <div class="item-wrap border-box" style="width:200px;align-content:space-between;flex-wrap:wrap;height:100px;">
                <div class="box border-box" v-for='n in 3' :key='n'>space-between+{{n}}</div>
            </div>
            <div class="item-wrap border-box" style="width:200px;align-content:space-around;flex-wrap:wrap;height:100px;">
                <div class="box border-box" v-for='n in 3' :key='n'>space-around+{{n}}</div>
            </div>
        </div>
    </el-card>
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex-item属性</div>
            <div class="title">- order,flex-grow,flex-shrink,flex-basis,flex,align-self</div>
        </div>
    </el-card>
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex-item的order</div>
            <div class="title">- 控制顺序，默认第一个是0</div>
            <div class="title">- 如果给某一个item设置为-1，那么它排列在最前面</div>
        </div>
        <div class="item">
            <div class="item-wrap border-box">
                <div class="box border-box">1</div>
                <div class="box border-box">2</div>
                <div class="box border-box" style='order:-1;'>3</div>
            </div>
        </div>
    </el-card>
     <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex-item的flex-grow</div>
            <div class="title">- 即拓展比例,如果有剩余空间，怎么按比例拓展</div>
            <div class="title">- 默认为0，就是有剩余空间也不拓展</div>
        </div>
        <div class="item">
            <div class="item-wrap border-box">
                <div class="box border-box">默认1</div>
                <div class="box border-box">默认2</div>
                <div class="box border-box">默认3</div>
            </div>
            <div class="item-wrap border-box">
                <div class="box border-box" style='flex-grow:1;'>flex-grow为1</div>
                <div class="box border-box" style='flex-grow:1;'>flex-grow为1</div>
                <div class="box border-box" style='flex-grow:1;'>flex-grow为1</div>
            </div>
            <div class="item-wrap border-box">
                <div class="box border-box" style='flex-grow:1;'>flex-grow为1</div>
                <div class="box border-box" style='flex-grow:1;'>flex-grow为1</div>
                <div class="box border-box" style='flex-grow:3;'>flex-grow为3</div>
            </div>
        </div>
    </el-card>
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex-item的flex-shrink</div>
            <div class="title">- 只能在不换行的情况下使用</div>
            <div class="title">- 指定flex-item的收缩比例，就是在剩余空间为负数的时候，怎么按比例收缩的问题</div>
            <div class="title">- 不可以为负数</div>
            <div class="title">- 默认为1，即flex容器空间不足的时候大家默认缩小</div>
            <div class="title">- flex-shrink设置越大，就缩小越多，如果是0则不缩小</div>
            <div class="title">- 下面第一个如果不设置父容器宽度的话，本来flex-item为86px那么宽，现在设置为150px，大家等比缩小</div>
        </div>
        <div class="item">
            <div class="item-wrap border-box" style="width:150px;">
                <div class="box border-box" style="flex-shrink:1;">flex-shrink为1</div>
                <div class="box border-box" style="flex-shrink:1;">flex-shrink为1</div>
                <div class="box border-box" style="flex-shrink:1;">flex-shrink为1</div>
            </div>
            <div class="item-wrap border-box" style="width:150px;">
                <div class="box border-box" style="flex-shrink:1;">flex-shrink为1</div>
                <div class="box border-box" style="flex-shrink:0;">flex-shrink为0</div>
                <div class="box border-box" style="flex-shrink:1;">flex-shrink为1</div>
            </div>
            <div class="item-wrap border-box" style="width:150px;">
                <div class="box border-box" style="flex-shrink:3;">flex-shrink为3</div>
                <div class="box border-box" style="flex-shrink:1;">flex-shrink为1</div>
                <div class="box border-box" style="flex-shrink:1;">flex-shrink为1</div>
            </div>
        </div>
    </el-card>
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex-item的flex-basis</div>
            <div class="title">- 用来指定item占据的空间，不可以为负数</div>
            <div class="title">- 可以设定为auto | length | percentage | content</div>
            <div class="title">- 默认值，计算规则：检索Flex子项是否设置了width值（或者height值，取决于flex-direction），如果设置了非auto的值，则使用width值（或者height值），若没有则使用content</div>
            <div class="title">- 设置flex-grow和flex-shrink进行收缩的时候，都是flex-basis上进行的</div>
        </div>
        <div class="item">
            <div class="item-wrap border-box" style="width:500px;">
                <div class="box border-box" style="flex-basis:130px;flex-grow:1;">flex-basis为130px</div>
                <div class="box border-box" style="flex-basis:260px;flex-grow:3;">flex-basis为260px</div>
            </div>
        </div>
    </el-card>
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- flex-item的flex</div>
            <div class="title">- 是flex-grow，flex-shrink，flex-basis的合体</div>
            <div class="title">- 优先使用这个属性flex</div>
            <div class="title">- 取值为none | 各拆分项属性</div>
            <div class="title">- none：0 0 auto</div>
            <div class="title">- auto:1 1 auto</div>
            <div class="title">- 1：1 1 0%</div>
            <div class="title">- 一般我们直接写flex：1，就是flex：1 1 0%;</div>
            <div class="title">- flex：3，就是flex：3 1 0%; 如果不写后面两个，一般后面就是默认是1 0%</div>
        </div>
        <div class="item">
            <div class="item-wrap border-box" style="width:500px;">
                <div class="box border-box" style="flex:1;">flex:1</div>
                <div class="box border-box" style="flex:3;">flex:3</div>
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
