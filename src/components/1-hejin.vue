
<template>

  <div>
    <!-- index页面 -->
    <header>
      <div class="addr">
        <i class="iconfont icon-wodedizhi"></i>
        <p @click='dizhi' class="dizhi">{{address?address:'请输入配送地址'}}</p>
      </div>
      <input type="text" placeholder="搜索饿了么商家、商品名称">
      <span class="iconfont icon-sousuo"></span>
    </header>
    <nav>
      <ul>
        <li v-for="(item,index) in navList"
          :key="index">
          <a href="#/food">
            <img :src="item.src" alt="">
            <p>{{item.name}}</p>
          </a>
        </li>
      </ul>
    </nav>

    <div class="discount">
      <ul>
        <li>
          <a href="">
            <p class="taocan">品质套餐</p>
            <p class="quan">搭配齐全吃得好</p>
            <p class="qiang">立即抢购<span class="iconfont icon-llmainpageback-copy-copy"></span></p>
          </a>
        </li>
        <li>
          <a href="" class="two">
            <p class="liang">限量抢购</p>
            <p class="quan">超值美味9.9元起</p>
            <p class="person"><i>2035人</i>正在抢购<span class="iconfont icon-llmainpageback-copy-copy"></span></p>
          </a>
        </li>
      </ul>
    </div>

    <!-- 轮播 -->
    <slide></slide>

    <!-- 商家推荐 -->
    <recom-sell></recom-sell>
    <!-- 商家详情 -->
    <zt-content :menuArr='menu.restaurant'
        v-for='(menu,index) in menus'
        :key='index'></zt-content>


  </div>

</template>

<script>
import Slide from '@/view/hejin/Slide'
import RecomSell from '@/view/hejin/RecomSell'
import EleFooter from '@/view/hejin/EleFooter'
import ztContent from '@/view/zhuoting/zt-content'
export default {

  data () {
    return {
      navList: [
        {
          id: 1,
          name: "美食",
          src: '../../static/images/hejin/nav/meishi.png'
        },
        {
          id: 2,
          name: "超市便利",
          src: '../../static/images/hejin/nav/chaoshi.png'
        },
        {
          id: 3,
          name: "水果",
          src: '../../static/images/hejin/nav/shuiguo.png'
        },
        {
          id: 4,
          name: "蔬鲜花菜",
          src: '../../static/images/hejin/nav/xianhua.png'
        },
        {
          id: 5,
          name: "小吃",
          src: '../../static/images/hejin/nav/xiaochi.png'
        },
        {
          id: 6,
          name: "医药",
          src: '../../static/images/hejin/nav/yiliao.png'
        },
        {
          id: 7,
          name: "晚餐",
          src: '../../static/images/hejin/nav/wancan.png'
        },
        {
          id: 8,
          name: "红包",
          src: '../../static/images/hejin/nav/hongbao.png'
        },
        {
          id: 9,
          name: "地方特色",
          src: '../../static/images/hejin/nav/difang.png'
        },
        {
          id: 10,
          name: "鲜花",
          src: '../../static/images/hejin/nav/xianhua.png'
        }

      ],
      menus: [],
      free: [],
      address:''
    }
  },
  components: {
    Slide,
    RecomSell,
    EleFooter,
    ztContent
  },
  mounted () {
    this.axios.get('../../static/json/hejin/Resterount.json')
    .then((result) => {
      // console.log(result.data.items);
      this.menus = result.data.items;
    })
    this.axios.get('../../static/json/hejin/Free.json')
    .then((result) => {
      // console.log(result.data);
      this.free = result.data;
    });

    //判断session是否存在地址
    this.address = sessionStorage.getItem('addr');
  },
  methods: {
    dizhi () {
      this.$router.push({
        path: '/map/请输入地址'
      })
    }
  }

}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  header {
    height: 1rem;
    background: linear-gradient(90deg,#0af,#0085ff);
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0.1rem;
  }
  header .addr {
    display: flex;
    align-items: center;
  }
  header .addr p {
    color: #fff;
    font-size: 0.2rem;
  }
  header .icon-wodedizhi {
    color: #eee;
    font-size: 0.33rem;
  }
  header input {
    height: 0.4rem;
    margin-top: 0.1rem;
    font-size: 0.16rem;
    text-align: center;
  }
  header .icon-sousuo {
    position: absolute;
    color: #888;
    left: 22%;
    top: 56%;
    font-size: 0.16rem;
  }
  nav ul {
    overflow: hidden;
  }
  nav li {
    float: left;
    margin: 0.2rem  0.19rem;
  }
  nav a {
    display: block;
    text-align: center;
    overflow: hidden;
  }
  nav img {
    width: 0.4rem;
  }
  .discount {

    padding: 0.1rem;
  }
  .discount ul {
    display: flex;
    align-items: center ;
  }
  .discount ul li {
    margin-right: 0.1rem;
    flex: 1;
    /* background: red; */
  }
  .discount li a {
    display: block;
    background: #f5f5f5 url(../../static/images/hejin/discount/discount.png) no-repeat right bottom;
    background-size: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem 0.1rem;
  }
  .discount li a.two {
    background-image: url(../../static/images/hejin/discount/discounte.png);
  }
  .discount .taocan {
    font-size: 0.2rem;
    font-weight: 700;
    color: #000;
  }
  .discount .quan {
    font-size: 0.14rem;
    margin: 0.05rem 0;
    color: #777;
  }
  .discount .qiang {
    color: #af8260;
    font-weight: 700;
  }
  .discount .liang {
    font-size: 0.2rem;
    font-weight: 700;
    color: #e81919;
  }
  .discount .person {
    color: #000;
  }
  .discount .person i {
    color: #e81919;
    font-weight: 700;
  }

  .dizhi {
    width: 1.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>



