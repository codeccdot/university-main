<template>
<div class="Footer">
<div class="link">
  <div class="column">
    <p>教育部</p>
    <p>广东省教育厅</p>
    <p>中山大学</p>
  </div>
  <div class="column">
    <p>广州市政府</p>
    <p> 珠江投资</p>
    <p>广东省投资办</p>
  </div>
  <div class="column">
    <p>中国知网</p>
  </div>
</div>
  <div class="link2">
    <img src="../assets/link2.png" alt="">
    <img src="../assets/link2.png" alt="">
  </div>
</div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.Footer{
  width: 100%;
  height: 174px;
  display: flex;
  flex-direction: row;
  background-image:url("../assets/footer.jpg");
.link{
  font:12px "Microsoft YaHei UI ";
  color: white;
  margin: 15px 60px;
  width: 29.1%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  //grid-template-rows: 1fr 1fr 1fr;
}
  .link2{
    position: relative;
   right:136px;
    margin: 20px;
    img{
      margin-left: 80px;
      height: 75px;
      width: 75px;
    }
  }
}
</style>