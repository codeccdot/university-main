<template>
<div id="footer" style="background-color:#7D0000">
 <img  class="img2" :src="img2" alt="">
   <div class="flex-right" ><span>校长邮箱</span><span>English Version</span></div>
<div class="line"></div>
  <div class="container">
    <div class="row">
      <div class="col-xl-1"><p>首页</p></div>
      <div class="col-xl-1"><p>学校概况</p></div>
      <div class="col-xl-1"><p>党建之窗</p></div>
      <div class="col-xl-1"><p>机构设置</p></div>
      <div class="col-xl-1"><p>人才培养</p></div>
      <div class="col-xl-1"><p>科学科研</p></div>
      <div class="col-xl-1"><p>招生就业</p></div>
      <div class="col-xl-1"><p>图书馆</p></div>
      <div class="col-xl-1"><p>合作交流</p></div>
      <div class="col-xl-1"><p>人才招聘</p></div>
      <div class="col-xl-1"><p>走进南方</p></div>
  </div>
  </div>
  <div class="choose-box"></div>

</div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      img1:[require('@/assets/footer-bg.jpg')],
       img2:[require('@/assets/logo.png')]
    }
  }
}
</script>


<style lang="scss" scoped>

#footer{
  width: 100vw;
  height: 170px;
  margin: 20px 0;

  .container{
    color: ghostwhite;
    position: relative;
   bottom: 10px; right: 5px;
    font-size: 14px;
    .col-xl-1{
      height: 32px;
      position: relative;
      display: flex;
       justify-content: center;
      top: 9px;
      margin-right:7px;
      p{
        position: relative;
       bottom: 9px;
      }

    }
    .col-xl-1:hover{
      position: relative;
      //top: 9px;
      background-color:#C04B4B;
    }

  }
  .img2{
    z-index: 10;
    margin:30px 50px;
    width: 45vw;
    height: 12vh;
  }

  .flex-right{
 position: absolute;
    font-size: 13px;
    color: ghostwhite;
    top:39px;
    right: 38px;
    span:nth-child(1){
  margin-right: 15px;
}
  }

  //水平线-白色
  .line{
    position: relative;
    background-color: ghostwhite;
    width: 100vw;
    height: 1px;
  }
  .choose-box{
    background-color: #C04B4B;
    width: 100vw;
    position: relative;
    bottom: 2px;
    height: 35px;
  }
}
</style>