<template>
  <div class="clear">
      <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title">- 清除浮动不如叫闭合浮动更为之准确</div>
                <div class="title">- 浮动之后的元素浮动于普通流之上</div>
                <div class="title">- 正是由于浮动的这种特性，导致框内部就不存在普通元素了，就会表现为高度为0（高度坍塌）</div>
                <div class="title">- 一般习惯闭合浮动的类名为clearfix</div>
            </div >
            <div class="item">
                <div class="wrap-one">
                    <div class="box">
                        <div class="wrap">
                            <div class="main left">.main 我浮动了没能撑开wrap</div>
                            <div class="side left">.side 我亦浮动了</div>
                        </div>
                        <div class="footer clear">.footer 清除了浮动,位置是正确了（可以试试把clear类去掉），但是wrap高度没有变化</div>
                    </div>
                    <div class="box">
                        <div class="wrap clearfix">
                            <div class="main left">.main 我浮动了没能撑开wrap</div>
                            <div class="side left">.side 我亦浮动了</div>
                        </div>
                        <div class="footer">.footer ：wrap自己闭合了浮动，所以这里不用清除浮动了</div>
                    </div>
                </div>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 第一种就是在wrap内部加上一个额外的标签比如div，里面给它的属性是clear:both</div>
                <div class="title">- 这种就是上学的时候老师教的，但是缺点很明显，就是增加了多余的无意义标签，不利于后期维护</div>
            </div>
            <div class="item">
                <div class="wrap-two">
                    <div class="box">
                        <div class="wrap">
                            <div class="main left">.main </div>
                            <div class="side left">.side </div>
                            <div style="clear:both;"></div>
                        </div>
                        <div class="footer">.footer </div>     
                    </div> 
                </div>
            </div>    
        </el-card> 
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 第二种使用br标签和其自身的html属性</div>
                <div class="title">- 缺点也是有违结构与表现的分离</div>
            </div>
            <div class="item">
                <div class="wrap-two">
                    <div class="box">
                        <div class="wrap">
                            <div class="main left">.main </div>
                            <div class="side left">.side </div>
                            <br clear='all'/>
                        </div>
                        <div class="footer">.footer </div>     
                    </div> 
                </div>
            </div>    
        </el-card> 
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 第三种在wrap设置overflow:hidden</div>
                <div class="title">- 在IE6中要触发hasLayout，设置zoom:1</div>
                <div class="title">- 内容增多时不会自动换行，无法显示被溢出的元素</div>
                <div class="title">- overflow:hidden有可能导致中键失效</div>
            </div>
            <div class="item">
                <div class="wrap-three">
                    <div class="box">
                        <div class="wrap" style="overflow:hidden;zoom:1;">
                            <div class="main left">.main </div>
                            <div class="side left">.side </div>
                        </div>
                        <div class="footer">.footer </div>     
                    </div> 
                </div>
            </div>    
        </el-card> 
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 第四种wrap使用display:table</div>
                <div class="title">- 破坏了盒模型，得不偿失</div>
            </div>
            <div class="item">
                <div class="wrap-four">
                    <div class="box">
                        <div class="wrap" style="display:table">
                            <div class="main left">.main </div>
                            <div class="side left">.side </div>
                        </div>
                        <div class="footer">.footer </div>     
                    </div> 
                </div>
            </div>    
        </el-card> 
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 第五种wrap使用伪元素</div>
                <div class="title">- 由于IE6-7不支持伪元素，使用zoom触发IE的hasLayout</div>
                <div class="title">- 最佳实践</div>
            </div>
            <div class="item">
                <div class="wrap-five">
                    <div class="box">
                        <div class="wrap clearfix">
                            <div class="main left">.main </div>
                            <div class="side left">.side </div>
                        </div>
                        <div class="footer">.footer </div>     
                    </div> 
                </div>
            </div>    
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 伪元素使用display:table</div>
                <div class="title">- 由Nicolas提出的改进方案</div>
            </div>
            <div class="item">
                <div class="wrap-six">
                    <div class="box">
                        <div class="wrap cf">
                            <div class="main left">.main </div>
                            <div class="side left">.side </div>
                        </div>
                        <div class="footer">.footer </div>     
                    </div> 
                </div>
            </div>    
        </el-card> 
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 不难发现，闭合浮动都是基于两种方法</div>
                <div class="title">- 通过伪元素：在浮动元素的末尾添加一个空元素，设置属性clear:both;</div>
                <div class="title">- 设置父元素overflow，display:table触发BFC/flow root,IE6-7则是zoom:1触发hasLayout</div>
            </div>   
        </el-card>  
    </div>
</template>
<script>
export default {
  data(){
      return{
        
      }
  }
}
</script>

<style lang="less" scoped>
    .clear{
      text-align: left;
      .item {
        padding: 18px 0;
      }

      .box-card {
        width: 100%;
        margin: 10px 0px;
        .wrap{
            border: 1px solid blue;
            padding: 10px;
            .main{
                border:1px solid red;
                padding: 10px;
            }
            .side{
                padding: 10px;
                border: 1px solid green;
            }
        }
        .footer{
            padding: 10px;
            border: 1px solid black;
        }
        .left{
            float: left;
        }
        .right{
            float: right;
        }
        .clear{
            clear: both;
        }
        .clearfix{
            zoom: 1;
            &::after{
                clear: both;
                content: ".";
                display: block;
                height: 0;
                visibility: hidden;
            }
        }
        .cf{
            zoom: 1;
            &::before,&::after{
                display: table;
                content: '';
            }
            &::after{
                clear: both;
            }
        }
        .title {
            padding: 14px 0;
        }
        .wrap-one{
            .box{
                margin-bottom: 30px;
            }
        }
      }
    }

</style>