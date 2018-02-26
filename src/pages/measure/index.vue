<template>
  <div class="measure">
      <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 相对性长度单位：em</div>
                <div class="title">- 以font-size相对，不以padding等其他相对</div>
                <div class="title">- 是指所属对象内的文本大小</div>
                <div class="title">- body默认的字体为16px，如果给他设置14px，他的任意子元素div的1.2em是14*1.2=16px</div>
                <div class="title">- 如果用em层层嵌套下去，每一个div都从他父级元素那里继承字体大小</div>
                <div class="title">- 可以看到它是一层层都是乘以1.2的</div>
                <div class="title">- 而如果父级元素不是em，就照父级元素的px来</div>
            </div>
            <div class="item">
                <div class="wrap-em" style="font-size:14px;">
                    <div style="font-size:1.2em">
                        test1(14*1.2px)
                        <div style="font-size:1.2em">test2(14*1.2*1.2px)</div>
                    </div>
                </div>
                <div class="wrap-em" style="font-size:14px;">
                    <div>
                        test1（14px）
                        <div style="font-size:1.2em">test2(14*1.2px)</div>
                    </div>
                </div>
            </div>    
        </el-card> 
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 相对性长度单位：rem，虽然也是相对性，但是相对根元素html而言</div>
                <div class="title">- 同样是基于font-size</div>
                <div class="title">- 这就是为了解决上面嵌套的问题，我们需要统一的度量标准来进行缩放</div>
                <div class="title">- 如果html的font-size为14px，那么整个页面的rem都是乘以这个基准值</div>
            </div>  
        </el-card> 
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.box-card{
    .title{
        text-align:left;
        padding: 10px;
    }
    .item{
        .wrap-em{
            margin-bottom:30px;
            &:first-child{
                border:1px solid green;
            }
            &:nth-child(2){
                border:1px solid black;
            }
        }
    }
}
</style>

