<template>
  <div class="average">
      <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 均等分配，中间有空隙</div>
                <div class="title">- 使用flex布局</div>
            </div>
            <div class="item">
                <div class="wrap-flex">
                    <div class="col border-box">1</div>
                    <div class="col border-box">2</div>
                    <div class="col border-box">3</div>
                    <div class="col border-box">4</div>
                </div>
            </div>  
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 均等分配，中间有空隙</div>
                <div class="title">- 使用float</div>
                <div class="title">- 再利用box-sizing:border-box;控制宽度</div>
                <div class="title">- 先给wrap设个负边距</div>
                <div class="title">- 但是比里面多了标签</div>
            </div>
            <div class="item">
                <div class="wrap-float">
                    <div class="col border-box">
                        <p>1</p>
                    </div>
                    <div class="col border-box">
                        <p>2</p>
                    </div>
                    <div class="col border-box">
                        <p>3</p>
                    </div>
                    <div class="col border-box">
                        <p>4</p>
                    </div>
                </div>
            </div>  
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 均等分配，多余的可以自己进行换行</div>
                <div class="title">- 使用flex布局，由于其默认不换行，通过flex-wrap:wrap</div>
                <div class="title">- 父容器拥有指定宽度,其中的子元素也拥有指定的宽度（不必设置flex：1）</div>
                <div class="title">- 子容器可以直接设置width为25%这样</div>
            </div>
            <div class="item">
                <div class="wrap-flex-wrap">
                    <div class="col border-box" v-for='n in 8' :key='n'>
                        <p>{{n}}</p>
                    </div>
                </div>
            </div>  
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">- 均等分配，多余的可以自己进行换行</div>
                <div class="title">- 使用float</div>
            </div>
            <div class="item">
                <div class="wrap-flex-float">
                    <div class="col border-box" v-for='n in 8' :key='n'>
                        <p>{{n}}</p>
                    </div>
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
}
.box-card {
  width: 100%;
  margin: 10px 0px;
  .title {
    text-align: left;
    padding: 10px;
  }
}
.wrap-flex {
  display: flex;
  height: 100px;
  width: 430px;
  .col {
    flex: 1;
    & + .col {
      margin-left: 10px;
    }
  }
}
.wrap-float {
  width: 430px;
  height: 100px;
  margin-left: -10px;
  .col {
    width: 25%;
    padding-left: 10px;
    box-sizing: border-box;
    float: left;
    p {
      background-color: red;
    }
  }
}
.wrap-flex-wrap {
  display: flex;
  height: 100px;
  width: 430px;
  flex-wrap: wrap;
  .col {
    // width: 100px;
    width: 25%;
    box-sizing: border-box;
  }
}
.wrap-flex-float {
  height: 100px;
  width: 430px;
  .col {
    width: 25%;
    padding-left: 10px;
    box-sizing: border-box;
    float: left;
    p {
      background-color: red;
    }
  }
}
</style>
