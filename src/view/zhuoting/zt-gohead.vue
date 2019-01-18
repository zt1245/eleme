<template>
  <div>
    <nav>
      <a href="/" class="iconfont icon-xiangzuo"></a>
    </nav>
    <div class="shop_info">
      <div class="logo">
        <span>品牌</span>
        <img src="../../../static/images/zhuoting/kfc.png" alt="">
      </div>
      <div class="title">
        <h2>
          <span>肯德基宅急送（华海店）</span>
          <i class="iconfont icon-yousanjiao"></i>
        </h2>
        <div class="tag">
          <span>评价4.8</span>
          <span>月售595单</span>
          <span>商家配送月39分钟</span>
        </div>
        <div class="discount">
          <div>
            <span class="special">特价</span>
            <span class="dis_active">六味小吃桶66</span>
          </div>
          <div class="dis_count">33个优惠<i class="iconfont icon-xiasanjiao-copy"></i></div>
        </div>
        <p class="notice">公告：本餐厅不使用饿了么配送，由肯德基宅急送官方品牌配送，会员用户无法享受免配送费服务</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  nav {
    background: url('../../../static/images/zhuoting/go_head.png') center;
    height: 1rem;
    background-size: cover;
  }
  nav .icon-xiangzuo {
    font-size: 0.26rem;
    color: #ffffff;
    padding-top: 0.02rem;
    display: block;
    margin-left: 0.03rem;
  }
  .shop_info .logo {
    height: 0.8rem;
    width: 0.8rem;
    border: 1px solid #ebebeb;
    border-radius: 0.02rem;
    position: relative;
    position: absolute;
    top: 0.4rem;
    left: 50%;
    margin-left: -0.33rem;
  }
  .shop_info .logo img {
    width: 100%;
  }
  .shop_info .logo span {
    position: absolute;
    color: #6f3f15;
    font-weight: 700;
    background-image: linear-gradient(90deg,#fff100,#ffe339);
    border-radius: 0.02rem;
  }
  .shop_info .title {
    margin-top: 0.3rem;
  }
  .shop_info .title h2 {
    font-size: 0.24rem;
    text-align: center;
    color: #333333;
  }
  .shop_info .title .icon-yousanjiao {
    font-size: 0.23rem;
  }
  .shop_info .title .tag {
    color: #666666;
    text-align: center;
    margin-top: 0.06rem;
  }
  .shop_info .title .tag span {
    margin: 0 0.02rem;
  }
  .shop_info .title .discount {
    margin-top: 0.1rem;
    display: flex;
    justify-content: space-around;
  }
  .discount .special {
    width: 0.23rem;
    height: 0.11rem;
    padding: 0 0.04rem;
    background-color: rgb(241, 136, 79);
    color: #fff;
    padding-bottom: 0.01rem;
  }
  .discount .dis_count {
    color: #999999;
  }
  .shop_info .notice {
    color: #999999;
    width: 2.98rem;
    margin: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0.09rem;
  }
</style>
