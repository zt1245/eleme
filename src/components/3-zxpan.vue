<template>
  <div class="order">
    <div class="zx-top">
      <div class="picImg">
        <img src="../../static/images/zxpan/list.svg" alt="">
      </div>
      <p>订单</p>
    </div>
    <ul class="shopBox" v-show="isShows">
      <li class="z-shop">
        <div class="listTop">
          <router-link to="/" class="listA"><img src="../../static/images/zxpan/05e89e71abcceb3d0878a12ae5d20jpeg.png"></router-link>
        <div class='listTopLeft'>
        <div class="listLeft">
          <router-link to="/">
             <p class="pOne">快乐星汉堡<i class="iconfont .icon-llmainpageback-copy-cop"></i></p>
           </router-link>
          <router-link to="/">
            <span class="cancel">订单已取消</span>
          </router-link>
        </div>
          <p class="time">7时40分钟前</p>
          <div class="shopBt">
            <p><span>藤椒鸡腿堡</span><span>等3件商品</span></p>
            <p class="monery">￥27.00</p>
          </div>
        </div>
        </div>
        <p class="buy">
          <router-link to='/'>
            <span>再来一单</span>
          </router-link>
          </p>
      </li>
    </ul>
    <div class="zx-w" v-show="isShow">
      <div class="picimg">
        <img src="../../static/images/zxpan/loog.png">
      </div>
      <div class="zx-footer">
        <h3>登录后查看外卖订单</h3>
      </div>
      <div class="zx-footer">
        <router-link to="/" class="btns" tag="div">立即登录</router-link>
      </div>
    </div>

  </div>
</template>

<script>
import eleFooter from './../view/hejin/EleFooter'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShow:false,
      isShows:true
    }
  },
  components:{
    eleFooter
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order{
  min-height: 6.87rem;
  width: 100%;
  background: #F5F5F5;
}
body{
  overflow: hidden;
  background: #F5F5F5;

}
.picimg{
  display: flex;
  justify-content: center;
  margin-top: 0.85rem;
}
.picimg img{
  width: 2.0rem;
  height: 2.0rem;
}
.zx-w h3 {
  color: #6a6a6a;
  font-weight: 400;
  font-size: 0.18rem;
}
.btns {
  display: block;
  height: 0.35rem;
  background: #56d176;
  color: white;
  width: 1.1rem;
  font-size: 0.16rem;
  padding: 0.03rem;
  text-align: center;
  line-height: 0.35rem;
  margin-top: 0.1rem;
}
.zx-footer{
  display: flex;
  justify-content: center;
}
.zx-top{
  position: relative;
  display: flex;
  height:0.48rem;
  width: 100%;
  background: #2395ff;
  background-image: linear-gradient(90deg,#0af,#2389e7);
  align-items: center;
}
.zx-top p{
  position: absolute;
  left: 50%;
  margin-left: -0.2rem;
  font-size: 0.2rem;
  font-weight: 700;
  color: white;
}
.zx-top .picImg {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0.48rem;
}
.zx-top img{
  height: 0.23rem;
}
.listTop .listA{
  width: 0.38rem;
  margin-right: 0.1rem;
}
.listTop .listA img{
  width: 100%;
}
.z-shop {

  margin-top: 0.1rem;
  padding-top: 0.15rem;
  background: white;
  padding: 0.15rem 0.14rem 0 0.16rem;
}
.listTop{
  display: flex;
  height: 1.02rem;
}
.listLeft {
  display: flex;
  align-items: center;
  justify-content:center;
}
.pOne {
  font-size: 0.18rem;
  color: #333;
}
.cancel {
  font-size: 0.145rem;
  color: #333;
  margin-left: 1.67rem;
}
.time {
  color: #999;
  padding-bottom: 0.08rem;
  border-bottom: #f6f2f2 solid 1px;
}
.shopBt{
  display: flex;
  justify-content: space-between;
  padding: 0.16rem 0 0.16rem 0;
  font-size: 0.14rem;
  color: #666;
}
.monry {
  color: #333;
  font-weight: 700;
}
.buy {
  display: flex;
  border-top: #f6f2f2 solid 1px;
  padding: 0.15rem 0 0.15rem 0;
  justify-content: flex-end;
}
.buy span{
  padding: 0.07rem 0.15rem;
  border-radius: 0.03rem;
  color: #2395ff;
  border: 1px solid #2395ff;
}


</style>
