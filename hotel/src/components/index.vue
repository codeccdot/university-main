<template>
<div id="index">
  <Header></Header>
<Swiper></Swiper>
<Mid></Mid>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/Header'
import Swiper from '@/components/swiper'
import Mid from '@/components/mid-nav'
import Footer from '@/components/Footer'
export default {
  name: "index",
components:{
  Header,Swiper,Mid,Footer
}
,
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
#index{
min-height:1480px ;
width: 100vw;
.footer{

}
}

</style>