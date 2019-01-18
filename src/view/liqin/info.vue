<template>
  <div>
    <div class="main-info">
      <router-link to='/profile'>
        <header>
          <div class="ElemeHeader-root">
              <i class="iconfont arrows">&#xe6d0;</i>
              <h1 class="ElemeHeader-center">账户信息</h1>
          </div>
        </header>
      </router-link>
      <div class="">
          <ul>
              <li class="account xiang">
                  <b>头像</b>
                  <span class="portrait"><img src="../../../static/images/liqin/elms.png" alt=""><i class="iconfont accoun-right">&#xe61e;</i></span>
              </li>
              <li class="account-port"><b>用户名</b><i class="bushuo">{{ username }}</i></li>
          </ul>
          <h2 class="bound-phone Load-loading">绑定手机号</h2>
          <ul>
            <li class="account">
              <span><i class="iconfont phonE">&#xe630;</i><b>手机</b></span>
              <span class="haoma"><b> 130****2195 </b><i class="iconfont">&#xe61e;</i></span>
            </li>
          </ul>
           <h2 class="bound-phone Load-loading">安全设置</h2>
           <router-link to='/'>
              <ul>
                  <li class="account-port"><b>登陆密码</b>
                    <span class="pmei">未设置</span><i class="iconfont shizhi">&#xe61e;</i>
                  </li>
              </ul>
           </router-link>
           <router-link to='/profile'>
              <button class="btn" @click='tuichu'>退出登录</button>
           </router-link>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    tuichu () {
      document.cookie = "usernname=; expires=" + new Date(0);
      // console.log('======================')
    }
  },
  mounted () {
    var cookie = document.cookie.split(';');
    for(var i = 0;i<cookie.length;i++){
      if(cookie[i].split('=')[0].trim()=='usernname'){
        this.username = cookie[i].split('=')[1];
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100%;
  height: 0.44rem;
  color: #fff;
  /* font-size: .48rem; */
}
.ElemeHeader-root {
  position: fixed;
  position: relative;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
.account{
    display: flex;
    align-items: center;
    font-size: .21rem;
    padding: .13rem .18rem;
    position: relative;
    justify-content: space-around;
}
.arrows {
  width: 100%;
  height: 100%;
  font-size: 0.44rem;
}

.portrait img{
    border-radius: 50%;
    width: 0.5rem;
    height:0.5rem;
}
.portrait {
  /* 改 */
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  /* display: inline-block; */
  padding-right: 0.18rem;
  position: relative;
}
.ElemeHeader-center {
  position: absolute;
  top: 0;
  left: 46%;
  font-weight: 700;
  /* font-size: 1.5em; */
  max-width: 50%;
  line-height: 0.44rem;
  font-size: 0.2rem;
}

/* 11月8号 */
.main-info,html,body{
  background: #f5f5f5;
  height: 100% !important;
  width: 100%;
}
.xiang{
  margin-bottom: 0.01rem
}
.bushuo{
  color: #666;
}
.account,.account-port{
  padding: 0.13rem 0.2rem;
  display: flex;
  align-items: center;
  font-size: 0.18rem;
  justify-content: space-between;
  color: #000;
  position: relative;
   background: #fff;
}
.account-port{
  cursor: pointer;

}
.portrait img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
}
.main-3Idiu {
  padding: 0.18rem 0;
}
.Load-loading {
  padding: 0 0.13rem;
}
.accoun-right {
  position: absolute;
      top: 0.15rem;
    right: -0.1rem;
    font-size: 0.40rem;
}
.haoma,.pmei{
  margin-right: .18rem;
}
.pmei{
  color: #0097ff;
}
.haoma i,.shizhi{
  font-size: .30rem;
    position: absolute;
    top: .1rem;
    right: 0.15rem;

}
.phonE{
  color: #0097ff;
  font-size: 0.24rem;
    padding-right: .05rem;
}
.bound-phone{
  padding: .21rem 0 .13rem .13rem;
  font-size: .14rem;
  background: #f5f5f5;
  color: #999;
}
.btn{
    width: 100%;
    text-align: center;
    padding: .18rem 0;
    margin: .2rem 0;
    color: #ff5339;
    border: none;
    font-size: .18rem;
    font-weight: 700;
    background-color: #fff;
    outline: none;
}
</style>
