<template>
<div class="search" >
  <div class="box">
    <input type="text" placeholder="搜索">
    <a href="#"><img :src="src" alt=""></a>
  </div>



</div>
</template>

<script>
export default {
  name: "search",
   data(){
    return{
    src:require('../assets/search.png')
    }
}




}
</script>

<style lang="scss" scoped>
.search{
  position: absolute;
  top: 115px;
  right: 100px;

.box{
  position: relative;
  bottom: 27px;
  width: 190px;
  height: 24px;
  border-radius: 5px;
  background-color: white;
   img{
     position: relative;
     left: 163px;
     bottom:25px;

   }
  input{
    position: relative;
    left: 10px;
    width: 100%;
    height: 100%;
    outline:none
  }
}


}
</style>