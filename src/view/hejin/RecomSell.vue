<template>
  <div class="sell">
    <!-- 商家推荐页 -->
    <h2>—— 推荐商家 ——</h2>
    <nav>
      <a href="">
        综合排序
        <span class="iconfont icon-xiasanjiao-copy"></span>
      </a>
      <a href="">距离最近</a>
      <a href="">品质联盟</a>
      <a href="" class="select">
        筛选
        <img src="../../../static/images/hejin/sell/select.png" alt="">
      </a>
    </nav>
    <!-- 商家推荐内容 -->

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h2 {
  text-align: center;
  line-height: 0.5rem;
  font-weight: normal;
  color: #000;
}
nav {
  display: flex;

}
nav a {
  flex: 1;
  text-align: center;
  font-size: 0.16rem;
}
nav .select {
  position: relative;
}
nav .select img {
  position: absolute;
  right: 0.16rem;
  top: 28%;
}
</style>

