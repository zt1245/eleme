<template>
  <div>
    <header>
      <div class="header_warp">
        <router-link to="/">
          <i class="iconfont icon-xiangzuo">
        </i></router-link>
        <h2>晚餐</h2>
      </div>
      <nav>
        <ul>
          <li class="active">全部</li>
          <li>奶茶果汁</li>
          <li>咖啡甜品</li>
          <li>炸鸡汉堡</li>
          <li>水果零食</li>
        </ul>
        <div class="iconfont icon-arrow-left"></div>
      </nav>
    </header>
    <div class="filter_header">
      <a href="#">
        <span>综合排序</span>
        <i class="iconfont icon-xiasanjiao-copy"></i>
      </a>
      <a href="#"><span>距离最近</span></a>
      <a href="#"><span>品质联盟</span></a>
      <a href="#">
        <span>筛选</span>
        <i class="select"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header_warp {
    height: 0.5rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  .icon-xiangzuo {
    font-size: 0.22rem;
    margin-left: 0.12rem;
  }
  .header_warp h2 {
    width: 100%;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.2rem;
  }
  nav {
    height: 0.4rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    position: relative;
  }
  nav ul {
    padding-top: 0.1rem;
    margin-left: 0.16rem;
    overflow: hidden;
  }
  nav ul li {
    float: left;
    text-align: center;
    font-size: 0.14rem;
    color: #ffffff;
    font-weight: 700;
    margin-right: 0.28rem;
    padding-bottom: 0.02rem;
    opacity: 0.7;
  }
  nav ul .active {
    opacity: 1;
    border-bottom: 0.03rem solid #fff;
  }
  nav .icon-arrow-left {
    height: 0.4rem;
    width: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0087ff;
    position: absolute;
    right: 0;
    top: 0;
    color: #ffffff;
  }
  .filter_header {
    height: 0.43rem;
    display: flex;
    background: #ffffff;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
  }
  .filter_header a {
    flex: 1;
    text-align: center;
    font-size: 0.16rem;
    color: #666666;
    font-weight: 700;
    opacity: 0.8;
    position: relative;
  }
  .icon-xiasanjiao-copy {
    font-size: 0.12rem;
    color: #000;
  }
  .filter_header .select {
    display: block;
    height: 0.12rem;
    width: 0.14rem;
    background: url('../../../static/images/zhuoting/select.png');
    position: absolute;
    top: 0.053rem;
    right: 0.18rem;
  }
  .router-link-active {
    color: #ffffff;
  }
</style>

