<template>
<div class="item4">
 <div class="box-right">
   <span class="font">通知通告</span>
   <span class="font">招投标</span>
<div class="msg" v-for="(item,i) in items" :key="i">
<div class="day">{{item.day}}</div>
<div class="main">{{item.main}}</div>
</div>
 </div>
 <div class="box-left">
   <div class="top">
     <span class="font2">高教动态</span>
     <div class="msg2" v-for="(item,i) in items.slice(0,4)" :key="i">
       <div class="day">{{item.day}}</div>
       <div class="main">{{item.main}}</div>
     </div>

   </div>
   <div class="bottom">
     <span class="font3">媒体报道</span>
     <div class="msg2" v-for="(item,i) in items.slice(0,4)" :key="i">
       <div class="day">{{item.day}}</div>
       <div class="main">{{item.main}}</div>
     </div>
   </div>

 </div>
</div>
</template>

<script>

export default {
  name: "item4",data(){
    return{
      items:[
        {
          day:'08-26',
          main:'医务室关于2021年新生体检通知2021.doc'
        }, {
          day:'08-26',
          main:'医务室关于2021年新生体检'
        },
        {
          day:'08-26',
          main:'医务室关于2021年新生体检'
        }, {
          day:'08-26',
          main:'医务室关于2021年新生体检'
        }, {
          day:'08-26',
          main:'医务室关于2021年新生体检'
        },
        {
          day:'08-26',
          main:'医务室关于2021年新生体检'
        },
        {
          day:'08-26',
          main:'医务室关于2021年新生体检'
        }, {
          day:'08-26',
          main:'医务室关于2021年新生体检'
        }
        , {
          day:'08-26',
          main:'医务室关于2021年新生体检'
        }, {
          day:'08-26',
          main:'医务室关于2021年新生体检'
        }


      ]

    }
  }
}
</script>

<style lang="scss" scoped>
.item4{
  position: relative;
  top: 39px;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  .box-right{

    .font:hover{
      border-bottom:3px solid #7D0000;
      color: lighten(#7D0000,10%)
    }
    .msg{
      display: grid;
      grid-template-columns: 70px 300px;
     position: relative;
     top: 5px;
      left: 20px;
      margin-top: 15px;


    }

  }
  .box-left{

  .top{
    height: 49%;
    .msg2{
    display: grid;
    grid-template-columns: 70px 300px;
    position: relative;
    top: 5px;
    left: 20px;
    margin-top: 13px;
    }

  }
    .bottom{
      height: 51%;

    }
  }
  //公共样式
  .font{
    position: relative;
    left: 20px;
    font-size: 19px;
    margin-right: 15px;
    padding-bottom: 7px;
    padding-left: 5px;
    padding-right: 5px;

  }
  .msg2{
    display: grid;
    grid-template-columns: 70px 300px;
    position: relative;
    top: 5px;
    left: 20px;
    margin-top: 13px;
  }

  .font2{
    position: relative;
    left: 6px;
    font-size: 19px;
    margin-right: 15px;
    padding-bottom: 7px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .font3{
    position: relative;
    left: 6px;
    font-size: 19px;
    margin-right: 15px;
    padding-bottom: 7px;
    padding-left: 5px;
    padding-right: 5px;
  }

  .day{
    font:16px Microsoft YaHei,SimSun,ArialMicrosoft YaHei,SimSun,Arial;
    color:#7D0000;

  }
  .main{
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 13px;
    font:12px/1.4 Microsoft YaHei,SimSun,Arial;
    border-left: gray solid 1px;

  }



}



</style>