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
            <div class="title">- 方便维护</div>
        </div> 
        <div class="item">
            <div class="wrap-less">
                <p>- less写法</p>
                <p>- @nice-blue:#5B83AD</p>
                <pre>
#header {
    color: @light-blue;
}
                </pre>
            </div>
            <div class="wrap-css">
                <p>- css</p>
                <pre>
#header {
    color: #5B83AD;
}
                </pre>
            </div>    
        </div>  
    </el-card> 
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- mixins</div>
            <div class="title">- 可以在别的类重复应用规则了</div>
            <div class="title">- 这个规则写在开头或是该类父属下都可以</div>
        </div> 
        <div class="item">
            <div class="wrap-less">
                <p>- less写法</p>
                <pre>
.bordered {
    border-top: dotted 1px black;
    border-bottom: solid 2px black;
}
                </pre>
                <pre>
div{
    color:red;
    .bordered;
}
                </pre>
            </div>
            <div class="wrap-css">
                <p>- css</p>
                <pre>
div{
    color:red;
    border-top: dotted 1px black;
    border-bottom: solid 2px black;
}
                </pre>
            </div> 
            <div class="wrap-show">
                <p>- 展示</p>
                <div class="test">
                    test
                </div>
            </div>     
        </div>  
    </el-card> 
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- 嵌套</div>
            <div class="title">- css的作用域下可以限定该类不会影响全局样式</div>
            <div class="title">- 通过`&`来表现自身</div>
            <div class="title">- 更棒的是媒体查询，也能嵌套！@media，这样才符合人类的直觉</div>
        </div> 
        <div class="item">
            <div class="wrap-less">
                <p>- less写法</p>
                <pre>
1.普通嵌套
#header {
    color: black;
    .navigation {
        font-size: 12px;
    }
    .logo {
        width: 300px;
    }
}
2.引用自身
.wrap{
    &-less{
        color:red;
    }
}
3.媒体查询嵌套
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
                </pre>
            </div>
            <div class="wrap-css">
                <p>- css</p>
                <pre>
1.普通嵌套
#header {
    color: black;
    }
    #header .navigation {
    font-size: 12px;
    }
    #header .logo {
    width: 300px;
}
2.引用自身
.wrap-less{
    color:red;
}
3.媒体查询嵌套
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
                </pre>
            </div>    
        </div>  
    </el-card> 
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- 运算</div>
            <div class="title">- 可以对变量进行加减乘除等运算</div>
        </div>   
    </el-card> 
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- ecaping</div>
            <div class="title">- 可以用任意变量插值进去，用~连接</div>
        </div> 
        <div class="item">
            <div class="wrap-less">
                <pre>
@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}                   
                </pre>
            </div>
            <div class="wrap-css">
                <pre>
@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}                   
                </pre>
            </div>
        </div>  
    </el-card>
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- 函数</div>
            <div class="title">- Less 内置了多种函数用于转换颜色、处理字符串、算术运算等。</div>
        </div>   
    </el-card>
     <el-card class="box-card">
        <div slot='header'>
            <div class="title">- 命名空间</div>
            <div class="title">- 通过（）来定义命名空间</div>
        </div>   
    </el-card> 
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">- @import引入其他less文件</div>
            <div class="title">- 如果是引入less后缀，可以省略，例如@import “libray”,css后缀就正常@import "libray.css"</div>
            <div class="title">- 然后可以正常使用这个less里面的变量，参考js引入</div>
            <div class="title">- 像css里面的import，http会发起新的请求，less则会编译成同一个文件</div>
        </div>   
    </el-card>   
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.lessFun {
  .bordered {
    border-top: dotted 1px black;
    border-bottom: solid 2px black;
  }
  .box-card {
    width: 100%;
    margin: 10px 0px;
    .title {
      text-align: left;
      padding: 10px;
    }
    .item {
      pre {
        text-align: left;
      }
      .wrap {
        &-less {
          margin: 20px 0;
          border-bottom: 1px solid black;
          p {
            text-align: left;
          }
        }
        &-css {
          margin: 20px 0;
          border-bottom: 1px solid black;
          p {
            text-align: left;
          }
        }
        &-show {
          margin: 20px 0;
          .test {
            color: red;
            .bordered;
          }
        }
      }
    }
  }
}
</style>
