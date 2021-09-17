<template>
<div id="index">
<Footer></Footer>
<Swiper></Swiper>
<Mid></Mid>
</div>
</template>

<script>
import Footer from '@/components/Footer'
import Swiper from '@/components/swiper'
import Mid from '@/components/mid-nav'
export default {
  name: "index",
components:{
    Footer,Swiper,Mid
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