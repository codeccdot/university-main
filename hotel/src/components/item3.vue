<template>
<div class="item3">
  <div class="box">
<!-- 第一个容器-->
  <div class="header">
    <div class="block"></div>
    <div class="font">
      <p style="font-size: 15px">我的南方</p>
      <span><a href="#">教师</a></span>
      <span><a href="#">学生</a></span>
      <span><a href="#">校友</a></span>
      <span><a href="#">校历</a></span>
    </div>

  </div>
<!--  第二个容器-->
    <div class="mid">
      <div class="block2">
        <span>教研成果</span>
      </div>
      <div class="list">
        <li>商学院获得市内第一冠军</li>
        <li>我院取得卓越成果</li>
        <li>艺创作品展正进行</li>
        <li>我校的领导已全面部署</li>
        <li>商学院获得成果奖</li>
        <li>商学院余静老师</li>
      </div>
  </div>
<!--    第三个容器-->
  <div class="footer" >
    <div class="boxSi" v-for="(item,i) in items" :key="i">
    <div class="block3">
      <span>{{item.title}}</span>
    </div>
    <li><img class="list-img" :src="item.src" ></li>
  </div>
  </div>

</div>



</div>
</template>

<script>
export default {
  name: "item3",
  data(){
    return{
      items: [
        {
          title:'两学一做',
          src: require('@/assets/listshow1.jpg')
        },
        {
          title:'印象南方',
          src: require('@/assets/listshow2.jpg')
        },
        {
          title:'信息公开',
          src: require('@/assets/listshow3.jpg')
        },

      ],
    }
  }
}
</script>

<style lang="scss"  scoped>
//整个图层
.item3{
  position: relative;
  top: 2px;
  width: 100%;

  //容器本身
  .box{



//第一个容器
    .header{
      height:44px;
      display: grid;
      grid-template-columns:2fr 12fr ;
      background-color: #FFFEF3E7;

//容器色彩快
  .block{
  background-color: darken(#7D0000,5%);
   height: 44px;
  }
     //容器文字部分
      .font{
        position: relative;
        left: 5px;


        span{
          position: relative;
          bottom: 20px;
          font-size: 14px;
          margin-right:10px;
          a{
            color: grey;
          }
          a:hover{
            color: lightcoral;
            text-decoration: none;
          }
        }
      }
}
    .mid{
      position: relative;
      top: 45px;
      height:200px;
      background-color: lightgoldenrodyellow;
      display: grid;
      grid-template-columns: 2fr 12fr;
      .block2{
        height: 200px;
        background-color: #7D0000;
        color: white;
       span{
         margin: 4px;
         position: relative;
         top: 50px;
         font-size: 16.5px;
         writing-mode: vertical-rl;
         letter-spacing:6px

       }
      }
     .list{
       margin-left: 8px;
       display: flex;
       justify-content: space-evenly;
       flex-direction: column;
       font-size: 12px;
       color: gray;
     }

    }
    .footer{
      height:400px;
      margin-top: 100px;
     .boxSi{
       display: grid;
       grid-template-columns: 3fr 17fr;
       margin-bottom: 35px;
       .block3{
         background-color: #7D0000;
         height:118.7px;
         span{
           margin: 5px;
           position: relative;
           top: 18px;
           font-size: 16px;
           writing-mode: vertical-rl;
           letter-spacing:6px
           ;color: white;
         }
       }
       li{
         background-color: gray;
         list-style: none;
         width:100%;
         height:100%;
         overflow: hidden;
         img{
           position: relative;
           width: 100%;
           height: 100%;

         }
       }

     }


    }

}








}
</style>