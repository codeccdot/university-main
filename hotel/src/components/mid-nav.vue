<template>
<div id="bg">
  <div class="container">
  <div class="row1 item1">
 <Item1></Item1>
  </div>
  <div class="row1 item2">
    <Item2></Item2>
  </div>
  <div class="row1 item3">
  <Item3></Item3>
  </div>
  <div class="row2 item4">
    <Item4></Item4>
  </div>


</div>
  </div>
</template>

<script>
import Item1 from '@/components/item1'
import Item2 from '@/components/item2'
import Item3 from '@/components/item3'
import Item4 from '@/components/item4'
export default {
  name: "mid-nav",
  components:{
    Item1,  Item2 ,Item3,Item4
  }
}
</script>

<style lang="scss"  scoped>

.container{
  max-width: 1200px;
  margin-top: 36px;
  background-color:white;
  display: grid;
  grid-template-columns:680px 243px 230px ;
  grid-auto-rows:300px 458px ;
  row-gap: 20px;
  column-gap:18px;

  .row1{
    //background-color: lightblue;
  }
  .item3{
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 3;
    grid-column-end: 3;

}
  .row2{

  }
  .item4{
     grid-column-start:1;
     grid-column-end: 3;
   }


}
</style>