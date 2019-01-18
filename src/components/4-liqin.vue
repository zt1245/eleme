<template>
  <div id="list">
    <header>
      <div class="ElemeHeader-root">
           <i class="iconfont arrows">&#xe6d0;</i>
          <h1 class="ElemeHeader-center">我的</h1>
      </div>
    </header>
    <section>
        <div @click='panduan'>
          <div class="profile-3g0uv">
            <div class="profileImg">
              <img src="../../static/images/liqin/elms.png" class="elmImg" alt="">
            </div>
            <div class="profile-xfCcC">
              <p class="profile-denL">{{ username }}</p>
              <p class="i"><i class="iconfont i">&#xe630;</i><span>登陆后享受更多特权</span></p>
              <i class="iconfont" id="arrow">&#xe70a;</i>
            </div>
          </div>
        </div>
    </section>
    <div class="index-1G7HV">
      <ul class="index-ul">
        <p href="javascript:;" class="index-1ryAh">
          <i class="iconfont icon">&#xe605;</i>
          <span class="fill">钱包</span>
        </p>
        <p href="javascript:;" class="index-1ryAh">
          <i class="iconfont con">&#xe629;</i>
          <span class="fill">红包</span>
        </p>
        <p href="javascript:;" class="index-1ryAh">
          <i class="iconfont ic">&#xe63d;</i>
          <span class="fill">金币</span>
        </p>
      </ul>
    </div>
      <div class="site">
        <p class="sise">
          <i class="iconfont site-font">&#xe624;</i>
          <span class="cetn">我的地址</span>
          <span class="iconfont rightArror">&#xe61e;</span>
        </p>
        <div class="money">
          <p>
            <i class="iconfont site-chen">&#xe600;</i>
            <span class="cetn">金币商城</span>
            <span class="iconfont rightArror">&#xe61e;</span>
          </p>
          <p>
            <i class="iconfont site-f">&#xe6bb;</i>
            <span class="cetn">分享拿10元现金</span>
            <span class="iconfont rightArror">&#xe61e;</span>
          </p>
        </div>
        <div class="addr">
          <p>
            <i class="iconfont site-ke">&#xe618;</i>
            <span class="cetn">我的客服</span>
            <span class="iconfont rightArror">&#xe61e;</span>
          </p>
          <p>
            <i class="iconfont site-elm">&#xe652;</i>
            <span class="cetn">下载饿了么APP</span>
            <span class="iconfont rightArror">&#xe61e;</span>
          </p>
        </div>
      </div>


  </div>
</template>

<script>
import EleFooter from '@/view/hejin/EleFooter'
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '登陆/注册'
    }
  },
  components: {
    EleFooter,
  },
  mounted () {
    var cookie = document.cookie.split(';');
    for(var i = 0;i<cookie.length;i++){
      if(cookie[i].split('=')[0].trim()=='usernname'){
        this.username = cookie[i].split('=')[1];
      }
    }
    // console.log(this.username);
  },
  methods: {
    panduan () {
      if(this.username=='登陆/注册'){
        this.$router.push({
          path: '/login'
        })
      }else{
        this.$router.push({
          path: '/info'
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#list{
  background: #f5f5f5;
}
  header{
    width: 100%;
    height: 0.44rem;
    color: #fff;
    /* font-size: .48rem; */
  }
  .ElemeHeader-root{
        position: fixed;
        position: relative;
        align-items: center;
        justify-content: space-between;
        display: flex;
        background-image: linear-gradient(90deg,#0af,#0085ff);
  }
  .arrows{
    width: 100%;
    height: 100%;
    font-size: .44rem;
  }
  .ElemeHeader-center{
      position: absolute;
      top: 0;
      left: 46%;
      font-weight: 700;
      /* font-size: 1.5em; */
      max-width: 50%;
      line-height: .44rem;
      font-size: .20rem;
  }
  .profile-3g0uv{
    align-items: center;
    display: flex;
    background:  linear-gradient(90deg,#0af,#0085ff);
     padding: .313rem .2rem;
     color: #fff;
  }
  .con{
    color: #ff5f3e;
    font-size: .38rem;
  }
  .ic{
    font-size: .38rem;
    color: #6ac20b;
  }
  .profileImg{
    width: .6rem;
    height: .6rem;
  }
  .elmImg{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .profile-denL{

    font-size: .22rem;
    margin-bottom: .06rem;
    font-weight: 700;
    align-items: center;
  }
  .i{
    font-size: 0.12rem;
  }
  .profile-xfCcC{
    margin-left:.2rem;
    position: relative;
    flex-grow: 1;
  }
  #arrow{
    position: absolute;
    right: 0;
    top: 0;
    font-size: .3rem;
  }
  .index-1G7HV{
    /* display: table; */
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }
  .index-ul{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
  }
  .index-1ryAh{
    flex: 1;
    align-content: center;
    text-align: center;
    border-right: 1px solid #ddd;
    display: flex;
    align-items: center;
    flex-direction: column
  }
  .icon{
    font-size: .38rem;
    color: #ff9900;
  }
  .iconFt{
     font-size: .38rem;
     color: #ff5f3e;
  }
  .jinbi{
    color: #6ac20b;
  }
  .fill{
    display: block;
  }
  .site{
    margin-top: .13rem;
    /* margin-bottom: .13rem; */
    height:0.45rem;
    line-height: .45rem;
  }
  .sise{
    background: #fff;
  }
  .site p {
    display: flex;
    align-items: center;
    position: relative;
  }
  .site p .rightArror {
    position: absolute;
    right: 0.1rem;
    font-size: 0.25rem;
  }
  .site-font{
     font-size: .38rem;
     color: #50a8f0;
     margin:0 0.08rem;
  }
  .money {
    background: #fff;
    margin-top: .13rem;
    margin-bottom: .13rem;
  }
  .addr {
    background: #fff;
  }
  .cetn{
    font-size: .18rem
  }
  .site-f{
    font-size: .24rem;
    color: #fd9f82;
    margin:0 0.13rem;
  }
  .site-ke{
      font-size: .30rem;
      margin:0 0.13rem;
      color: #3cabff;
  }
  .site-elm{
   font-size: .30rem;
      margin:0 0.13rem;
      color: #3cabff;
  }
  .site-chen{
    font-size: .24rem;
     margin:0 0.13rem;
     color: #94d94a;
  }
</style>
