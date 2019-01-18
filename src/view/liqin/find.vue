<template>
  <div>
      <div class="mian">
        <div class="main-Dis">
          <p class="guize">规则</p>
           <img src=" ../../../static/images/liqin/guanlan.jpeg" alt="">
           <p class="kuang">
               <video controls class="shiping" name="media"
                poster="https://fuss10.elemecdn.com/7/61/25ef496d5f4258b694918f76d265djpeg.jpeg"
                x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow"
                 webkit-playsinline="webkit-playsinline" playsinline="playsinline">
                   <source src="https://app-builder-resource.oss-cn-shanghai.aliyuncs.com/prod/uploadckjn5re0ra.mp4"
                   type="video/mp4">
               </video>
           </p>
        </div>
        <div class="tabs-header" @click='fn' :class="{active: !page}"></div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import RankFind from "./RankFind.vue";
import LookFind from "./LookFind.vue";
export default {
  data () {
    return {
      rankDinds : 'rankfin',
      page: true
    }
  },
  methods: {
    fn () {
            console.log(111)
            this.page = !this.page;
            if(this.page){
                this.$router.push({
                 path: '/find/RankFind'
                })
            }else{
                this.$router.push({
                 path: '/find/LookFind'
                })
            }

        }
  },
  components: {
    RankFind,
    LookFind
  }
};
</script>

<style scoped>
.tabs-header{
    position: relative;
    z-index: 10;
    display: flex;
    align-content: center;
    height: .78rem;
    background: url(../../../static/images/liqin/waimai.png)  no-repeat;
    background-position-y: -.6rem;
    background-size: 100%;
}

* {
  box-sizing: inherit;
}
.mian {
  height: auto;
  background: #081536;
}
.main-Dis {
  position: relative;
  height: 4rem;
}
.main-Dis img {
  width: 100%;
  height: 100%;
}
.shiping {
  width: 3.4rem;
  height: 1.71rem;
  border-radius: 0.1rem;
  display: block;
}
.guize {
  position: absolute;
  right: 0;
  top: 0.2rem;
  text-align: center;
  line-height: 0.26rem;
  font-weight: 500;
  color: #a1c2e7;
  width: 0.46rem;
  height: 0.26rem;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #a1c2e7;
  border-right: 0 none;
  border-radius: 0.18rem 0 0 0.18rem;
  border-right: 0 none;
}
.kuang {
  padding: 0.1rem 0;
  position: relative;
  bottom: 1.8rem;
  left: 0;
  text-align: center;
  line-height: 1.71rem;
  background: url(../../../static/images/liqin/kuai.png) no-repeat;
  background-size: 100%;
  width: 3.4rem;
  height: 1.71rem;
  margin: 0 auto;
}
video::-webkit-media-controls-enclosure {
  overflow: hidden;
}
.active {
  position: relative;
  z-index: 10;
  display: flex;
  align-content: center;
  height: 0.78rem;
  background: url(../../../static/images/liqin/waimai.png) no-repeat;
  background-position-y: 0.19rem;
  background-size: 100%;
}
</style>
