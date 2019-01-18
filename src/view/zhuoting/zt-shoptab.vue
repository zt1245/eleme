<template>
  <div>
    <div class="shop_tab"
         :class="{ 'isFixed':  barFixed == true}">
      <ul>
        <li><p class="active">点餐</p></li>
        <li><p>评价</p></li>
        <li><p>商家</p></li>
      </ul>
    </div>
    <div class="hot">
      <img src="../../../static/images/zhuoting/shop_hot.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      scrollTop: 0,
      top: 0,
      barFixed: false
    }
  },
  /* methods: {
    handleScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.top = document.querySelector('.shop_tab').offsetTop;
      // console.log(this.scrollTop);
      if(this.scrollTop >= this.top) {
        this.barFixed = true;
      }else if(this.scrollTop < this.top) {
        this.barFixed = false;
      }
      // console.log(this.barFixed);
    }
  },
  watch: {
    scrollTop: function(newVal,oldVal){
      this.handleScroll();
    }
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll);
  } */
}
</script>

<style scoped>
  .isFixed {
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
    background: #fff;
  }
  .shop_tab ul {
    display: flex;
  }
  .shop_tab ul li{
    flex: 1;
    text-align: center;
    font-size: 0.16rem;
    margin: 0.16rem 0 0.08rem;
  }
  .shop_tab li p {
    width: 0.38rem;
    margin: auto;
    padding-bottom: 0.05rem;
    color: #666666;
  }
  .shop_tab .active {
    border-bottom: 0.03rem solid #2395ff;
    font-weight: 700;
    color: #000;
  }
  .hot {
    padding: 0 0.16rem;
  }
  .hot img {
    width: 100%;
    border-radius: 0.04rem;
  }
</style>
