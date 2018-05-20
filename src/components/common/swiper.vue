<template>
<swiper :options="swiperOption">
 <!-- slides -->
 <div class="swiper-slide" v-for="(i, j) in imgArr" :key="j"><img :src="i" alt=""></div>
 <!-- Optional controls -->
 <div class="swiper-pagination"  slot="pagination"></div>
 <div class="swiper-button-prev" slot="button-prev"></div>
 <div class="swiper-button-next" slot="button-next"></div>
 <div class="swiper-scrollbar"   slot="scrollbar"></div>
</swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
  data () {
    return {
      imgArr: ['http://39.106.34.156:8080/zs/img/swiper1.jpg', 'http://39.106.34.156:8080/zs/img/swiper2.jpg', 'http://39.106.34.156:8080/zs/img/swiper3.jpg', 'http://39.106.34.156:8080/zs/img/swiper4.jpg', 'http://39.106.34.156:8080/zs/img/swiper5.jpg', 'http://39.106.34.156:8080/zs/img/swiper6.jpg'],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  // you can find current swiper instance object like this, while the notNextTick property value must be true
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
    console.log('mounted')
  }
}
</script>
<style scoped>
.swiper-wrapper>div{
    /* width:30%; */
}
.swiper-container{
    /* overflow: auto; */
}
.swiper-wrapper img{
    width:400px;
    height: 250px;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    right: auto;
    height: 250px;
    background-color: gray;
    /* color: white; */
    top: 20px;
}
.swiper-button-next, .swiper-container-rtl .swiper-button-prev{
        left: auto;
    height: 250px;
    background-color: gray;
    /* color: white; */
    top: 20px;
}
</style>
