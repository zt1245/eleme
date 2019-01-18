<template>
  <div>
    <div class="recommend">
      <p class="recommend_title">商家推荐</p>
      <div class="rec_menu">
        <ul>
          <li>
            <img src="../../../static/images/zhuoting/menu_01.png" alt="">
            <div class="menu_title">
              <p class="des">卷堡三人套餐T</p>
              <p class="sale">月售1  好评率0%</p>
              <div class="price">
                <p><small>￥</small>99</p>
                <a href="#">＋</a>
              </div>
            </div>
          </li>
          <li>
            <img src="../../../static/images/zhuoting/menu_01.png" alt="">
            <div class="menu_title">
              <p class="des">卷堡三人套餐T</p>
              <p class="sale">月售1  好评率0%</p>
              <div class="price">
                <p><small>￥</small>99</p>
                <a href="#">＋</a>
              </div>
            </div>
          </li>
          <li>
            <img src="../../../static/images/zhuoting/menu_01.png" alt="">
            <div class="menu_title">
              <p class="des">卷堡三人套餐T</p>
              <p class="sale">月售1  好评率0%</p>
              <div class="price">
                <p><small>￥</small>99</p>
                <a href="#">＋</a>
              </div>
            </div>
          </li>
          <li>
            <img src="../../../static/images/zhuoting/menu_01.png" alt="">
            <div class="menu_title">
              <p class="des">卷堡三人套餐T</p>
              <p class="sale">月售1  好评率0%</p>
              <div class="price">
                <p><small>￥</small>99</p>
                <a href="#">＋</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .recommend {
    background: #fff;
    padding: 0 0.16rem;
    padding-top: 0.1rem;
  }
  .recommend .recommend_title {
    font-size: 0.18rem;
    color: #000;
    font-weight: 700;
  }
  .rec_menu ul {
    overflow-x: scroll;
    display: flex;
  }
  .rec_menu ul li {
    width: 1.3rem;
    flex: none;
    margin-right: 0.14rem;
  }
  .rec_menu img {
    width: 100%;
  }
  .rec_menu .menu_title .des {
    padding: 0.05rem 0;
    font-size: 0.16rem;
  }
  .rec_menu .menu_title .sale {
    color: #999999;
    margin-bottom: 0.06rem;
  }
  .price {
    display: flex;
    justify-content: space-between;
  }
  .price p {
    color: rgb(255, 83, 57);
    font-size: 0.18rem;
  }
  .price p small {
    font-size: 0.16rem;
  }
  .price a {
    display: block;
    width: 0.25rem;
    height: 0.25rem;
    background: rgb(35, 149, 255);
    text-align: center;
    color: #fff;
    font-size: 0.18rem;
    border-radius: 45%;
  }
  ::-webkit-scrollbar {
    width: 0;
  }
</style>
