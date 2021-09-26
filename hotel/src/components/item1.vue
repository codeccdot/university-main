<template>
<div class="item1">
  <span class="font"><router-link to="/img">学校要闻</router-link></span>
  <span class="font"><router-link to="/img2">校园动态</router-link></span>
  <img src="../assets/dots-horizontal.png" alt="" style="position: relative;left: 450px">
  <v-divider inset class="line"></v-divider>
  
<div class="img-show">
<router-view></router-view>

</div>
  <v-divider inset class="line"></v-divider>

</div>
</template>

<script>

export default {
  name: "item1",
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.font{
  position: relative;
  left: 20px;
  font-size: 18px;
  margin-right: 15px;
  padding-bottom: 7px;
  padding-left: 5px; padding-right: 5px;
  a{
    color: black;
    text-decoration: none;
  }

}
.font:hover{
    border-bottom:3px solid #7D0000;
    color: lighten(#7D0000,10%)
  }
.line{
  width: 70vw;


}
.img-show{
  position: relative;
  bottom: 5px;
  width:700px;
  height:235px ;
  display: flex;
  flex-direction: row;
  justify-content: center;


.box{
  border-right: solid 1px lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .subtitle{
    font: 12px/1.4 Microsoft YaHei,SimSun,Arial;
    margin: 15px 5px;
   a{
     color: darken(#7D0000,10%);
     text-decoration: none;
   }
 }
  img{
    width: 206px;
    min-height: 154px;
    margin: 4px 7px;

  }
  img:hover{
    overflow: hidden;
    height:150% ;


  }

}

}

</style>