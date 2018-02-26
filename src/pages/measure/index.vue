<template>
  <div class="measure">
      <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 相对性单位：em</div>
                <div class="title">- 是指所属对象内的文本大小</div>
                <div class="title">- body默认的字体为16px，如果给他设置14px，他的任意子元素div的1.2em是14*1.2=16px</div>
                <div class="title">- 如果用em层层嵌套下去，每一个div都从他父级元素那里继承字体大小</div>
                <div class="title">- 可以看到它是一层层都是乘以1.2的</div>
                <div class="title">- 而如果父级元素不是em，就照父级元素的px来</div>
            </div>
            <div class="item">
                <div class="wrap-em" style="font-size:14px;border:1px solid green;margin-bottom:30px;">
                    <div style="font-size:1.2em">
                        test1(14*1.2px)
                        <div style="font-size:1.2em">test2(14*1.2*1.2px)</div>
                    </div>
                </div>
                <div class="wrap-em" style="font-size:14px;border:1px solid black;">
                    <div>
                        test1（14px）
                        <div style="font-size:1.2em">test2(14*1.2px)</div>
                    </div>
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
    .title{
        text-align:left;
        padding: 10px;
    }
}
</style>

