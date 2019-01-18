<template>

  <div class="slide" id="slide">
    <!-- 轮播 -->
    <ul id='slid'>
     <li v-for='(item,index) in slideImg'
        :key='index'>
       <a href="">
         <img :src="`../../../static/images/hejin/slide/${item.src}`" width="100%" height="110">
       </a>
     </li>
     <li>
       <a href="">
         <img :src="`../../../static/images/hejin/slide/${firstSlid}`" width="100%" height="110" alt="">
       </a>
     </li>
    </ul>

  </div>

</template>

<script>
import $ from '../../../static/js/jquery/jquery.min.js'
export default {
  data () {
    return {
      slideImg: [
        {
          id: 1,
          src: 'slid1.png'
        },
        {
          id: 2,
          src: 'slid2.png'
        },
        {
          id: 3,
          src: 'slid3.png'
        },
        {
          id: 4,
          src: 'slid4.png'
        },
        {
          id: 5,
          src: 'slid5.png'
        },
        {
          id: 6,
          src: 'slid6.png'
        },
        {
          id: 7,
          src: 'slid7.png'
        },
        {
          id: 8,
          src: 'slid8.png'
        }
      ],
      firstSlid: 'slid1.png',
      ul: '',
      slide: '',
      moveNum: 0,
      moveWidth: 0
    }
  },
  mounted () {
    this.firstSlid = this.slideImg[0].src;
    this.ul = $('#slid');
    this.slide = $('#slide');
    this.moveWidth = parseInt(this.slide.css('width'));
    setInterval(()=>{
      if(this.moveNum>=8){
        this.ul.css('left',0);
        this.moveNum = 1;
      }else{
        this.moveNum++;
      }
      this.ul.animate({left: -this.moveNum*this.moveWidth});
    },1000)
  }
}
</script>

<style scoped>
#slide {
  width: 100%;
  overflow: hidden;
  position: relative;
}
#slid {
  width: 900%;
  position: relative;
  top: 0;
  left: 0;
}
#slid li {
  float: left;
  width: 11.11%;
}
#slid li a {
  display: block;
}
#slid li a img {
  display: block;
}
</style>


