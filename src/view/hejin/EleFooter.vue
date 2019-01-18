<template>
  <footer>
    <ul>
      <li>
        <a href="#/" class="home"
            @click.stop='clickPage="home"'
            :class="{active: clickPage==='home'}">
          <span class="iconfont icon-changyonglogo401"></span>
          首页
        </a>
      </li>
       <li>
        <a href="#/find"
            @click.stop='clickPage="find"'
            :class="{active: clickPage==='find'}">
          <span class="iconfont icon-faxian"></span>
          发现
        </a>
      </li>
       <li>
        <a href="#/checkout"
           @click='clickPage="checkout"'
            :class="{active: clickPage==='checkout'}">
          <span class="iconfont icon-icon--copy"></span>
          订单
        </a>
      </li>
       <li>
        <a href="#/profile"
          @click.stop='clickPage="profile"'
            :class="{active: clickPage==='profile'}">
          <span class="iconfont icon-wode-copy"></span>
          我的
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {

  data () {
    return {
      clickPage: 'home'
    }
  }

}
</script>

<style scoped>
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
  }
  footer ul {
    display: flex;
    height: 0.6rem;
    align-items: center;
    /* border-top: 1px solid #888; */
    box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
    font-size: 0.16rem;
    color: #333;
  }
  footer ul li {
    flex: 1;
    text-align: center;


  }
  footer ul li a {
    display: flex;
    flex-direction: column;
  }
  footer ul li a  span {
    font-size: 0.25rem;
  }
  .home span {
    font-size: 0.26rem;
  }
  footer a.active {
    color: #0089dc;
  }


</style>
