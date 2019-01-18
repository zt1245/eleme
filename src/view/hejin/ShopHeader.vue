<template>
  <header>
    <img :src="imgPic" alt="" width="100%">
    <span class="off" @click='off'>X</span>
  </header>
</template>

<script>
export default {
  props:['imgPic'],
  mounted(){
    // console.log(this.imgPic);
  },
  methods: {
    off () {
      this.$router.push({
        path: '/goods'
      })
    }
  }
}
</script>

<style scoped>
  header {
    position: relative;
  }
  header .off {
    position: absolute;
    top: 0.1rem;
    right: 0.2rem;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 100%;
    text-align: center;
    line-height: 0.3rem;
    background: rgba(0,0,0,.2);
    color: #fff;
    font-size: 0.2rem;
  }
  header img {
    display: block;
  }
</style>
