<template>
<div class="swiper" >
  <v-carousel :show-arrows="false" style="width: 80vw ;height: 400px">
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
    ></v-carousel-item>
  </v-carousel>



</div>
</template>

<script>

export default {
  name: "swiper"
  ,data(){
    return {
      items: [
        {
          src: require('@/assets/swiper1.jpg')
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],


    }}

}
</script>

<style  lang="scss" scoped>
.swiper{
  display: flex;
  justify-content: center;position: relative;
  top: 3px;


}

</style>