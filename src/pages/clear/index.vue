<template>
  <div class="clear">
      <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title">- 清除浮动不如叫闭合浮动更为之准确</div>
                <div class="title">- 浮动之后的元素浮动于普通流之上</div>
                <div class="title">- 正是由于浮动的这种特性，导致框内部就不存在普通元素了，就会表现为高度为0（高度坍塌）</div>
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
            &::after{
                clear: both;
                content: ".";
                display: block;
                height: 0;
                visibility: hidden;
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