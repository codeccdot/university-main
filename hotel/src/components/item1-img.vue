<template>
<div class="imgShow">
  <div class="img-show">
    <div class="box" v-for="(item,i) in img"  :key="i">
      <img :src="item.src">
      <span class="subtitle"><a href="">{{item.main}}</a></span>
    </div>

  </div>


</div>
</template>

<script>
export default {
  name: "item1-img",
  data(){
    return{
      img: [
        {
          src: require('@/assets/item1.png'),
          main:'开学典礼 电气与计算机学院院长第一课暨20...'
        },{
          src: require('@/assets/item2.png'),
          main:'开学典礼 电气与计算机学院院长第一课暨20...'
        },{
          src: require('@/assets/item3.png'),
          main:'开学典礼 电气与计算机学院院长第一课暨20...'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>