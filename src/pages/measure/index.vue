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
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 百分比，是相对于父级元素而言的</div>
                <div class="title">- 响应式设计的一种解决方案</div>
            </div>
            <div class="item">
                <div class="wrap-percent">
                    <div style="width:100px;height:100px;">
                        <div style="width:80%;height:80%;"></div>
                    </div>
                </div>
            </div>  
        </el-card> 
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- vh和vw</div>
                <div class="title">- 由于百分比是针对父元素的，如果想专门针对视口（viewpoint）,就要用vh和vw</div>
                <div class="title">- 1vh=1/100 的视口高度，如果屏幕高度为900px,1vh就是9px</div>
                <div class="title">- 用一行代码就可以实现和屏幕等高的侧边栏，100vh</div>
            </div>  
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- vmin和vmax</div>
                <div class="title">- 是vh和vw之间的最小值和最大值</div>
                <div class="title">- 例如视口高度为700px,宽度为1100px。vmin就是7px，vmax是11px</div>
                <div class="title">- 如果有个元素始终要在屏幕上可见，只要对他宽度和高度赋予小于100vmin的值</div>
                <div class="title">- 如果要一个元素铺满整个视口，那么赋予它宽度和高度100vmax，虽然说宽度超出视口宽度</div>
            </div>  
        </el-card> 
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- ex和ch</div>
                <div class="title">- 与rem和em一样，依赖于当前的字体大小</div>
                <div class="title">- ch 单位通常被定义为数字0的宽度,主要用于盲文排版</div>
                <div class="title">- ex被定义为当前字体的小写字母x的高度或者1/2的1em，可以看看font的x-height</div>
                <div class="title">- ex可以微调版式，比如上标文本和下标文本等</div>
            </div>  
            <div class="item">
                <div class="wrap-ex">
                    <p>这段标签包含<sup>上标文本</sup></p>
                    <p>这段标签包含<sub>下标文本</sub></p>
                </div>
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
    margin-bottom: 20px;
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
        .wrap-percent{
            div{
                border:1px solid black;
            }
        }
        .wrap-ex{
            sup {
                position: relative;
                bottom: 1ex;
            }
            sub {
                position: relative;
                bottom: -1ex;
            }
        }
    }
}
</style>

