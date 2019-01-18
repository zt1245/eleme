<template>
  <div class="body">
    <div class="body-bg" v-show="isnone" @click="isNone"></div>
    <div class="tablewares" v-show="isnone">
      <i @click="isNone">×</i>
      <h2>-- 餐具份数 --</h2>
      <ul>
        <li v-for='(item,index) in tableware' :key="index"
        @click="idcolor = item.id"
        :class='{bgcolor:idcolor==item.id}'>
        <span @click="targetText(item.name)">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <zx-head title="确认订单"></zx-head>
    <div class="z-footer">
      <div class="address">
        <p class="first">订单配送至<span>家</span></p>
        <p class="z-text">赣南师院学院北苑1栋江西省赣州市章贡区赣南师院学院北苑1栋1210fd</p>
        <p>潘(先生)<span>1777777777</span></p>
      </div>
      <div class="z-details">
          <p class="con-p fc">
            <span>送达时间</span><span class="con-color">尽快送达({{time}}送达)</span>
          </p>
          <p class="fc">
            <span>支付方式</span><span class="con-color">在线支付</span>
          </p>
      </div>
      <div class="con-title z-details">
        <h3>{{shangjiaming}}</h3>
        <ul >
          <li v-for='(item,index) in buyList'
            :key='index'>
            <div>
              <a class="z-a">
                <img src="../../../static/images/zxpan/05e89e71abcceb3d0878a12ae5d20jpeg.png">
              </a>
              <p>{{item.goodsName}}</p>
            </div>
            <div  class="counts">
              <span class="count">x{{item.goodsNum}}</span>
              <span class="upcolor" v-if='item.yuanjia'>￥<a>{{item.yuanjia}}</a></span>
              <span>￥<a>{{item.xianjia}}</a></span>
            </div>
          </li>
          <!-- <li>
            <div>
              <a class="z-a">
                <img src="../../../static/images/zxpan/05e89e71abcceb3d0878a12ae5d20jpeg.png">
              </a>
              <p>卤鸭腿饭</p>
            </div>
            <div  class="counts">
              <span class="count">x1</span>
              <span class="upcolor">￥<a>20</a></span>
              <span>￥<a>10.9</a></span>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
    <div class="z-group">
    <ol class="ol">
      <li>
        <p><span class="z-ol-text">蜂鸟</span>配送费</p>
        <p>￥<span>4</span></p>
      </li>
      <li>
        <p class="last">满减活动与单品不同享</p>
      </li>
    </ol>
    <div class="z-ellipsis">
      <div>
        <span>红包</span>
        <span class="z-span-ell">暂时只在饿了么 APP 中支持</span>
      </div>
    </div>
    <div class="z-ellipsis">
      <div class="stop" style="border:0">
        <router-link to="/">优惠说明</router-link>
        <p>小计￥<span class="countMy"> {{isClss?totalMoney-12:totalMoney+4}} </span></p>
      </div>
    </div>
    </div>
      <div class="supervip">
        <div class="supervip-l">
          <h3 class="supervip-p">成为超级会员,本单减5元</h3>
          <p>每月送20元奖励</p>
        </div>
        <div class="supervip-r">
          <p class="supervip-r-p">
            <span class="z-sup-span">￥15</span><a style="color:#333">￥</a><span class="sup-span">16</span>
          </p>
          <p class="supervip-r-last" @click='target' :class="{'supervip-s':isClss}">√</p>
        </div>
    </div>
    <div class="tableware">
      <ul>
        <li>
          <p class="tableware-p"><span>餐具份数</span><span class="tableware-p-span" @click="isNone">{{option}}<i>></i></span></p>
          <p class="tableware-p-last">马上助力环保</p>
        </li>
        <li>
          <p class="tableware-p"><span>{{ zxgoods }}</span>
          <router-link to='/remark' tag="div">
            <span class="tableware-p-span">{{taste}}<i>></i></span>
          </router-link>
          </p>
          <p class="tableware-p-last"></p>
        </li>
        <li>
          <p class="tableware-p"><span>号码保护</span><span class="tableware-p-span"></span></p>
          <p class="tableware-p-last phone">号码保护中，保护商家</p>
        </li>
      </ul>
    </div>
    <div class="zxc-p">
      <div class="z-bottom">
        <p class="f-b z-left">
          <span class="z-left-sp">￥{{isClss?totalMoney-12:totalMoney+4}}</span>  |  已优惠￥<span>9.1</span>
        </p>
        <router-link to="/buy" class="f-b z-rigth"><span @click='toBuy'>去支付</span></router-link>
      </div>
    </div>
    <router-view></router-view>

  </div>
</template>
<script>
import zxHead from "./zxHead";

export default {
  name: "tom",
  data() {
    return {
      taste: "口味、偏好",
      zxgoods: "订单备注",
      heardtxt: "确认订单",
      option: "未选择",
      isnone: false,
      idcolor: false,
      msg: "week",
      isClss: false,
      time: "",
      tableware: [
        {
          id: "1",
          name: "无需餐具"
        },
        {
          id: "2",
          name: "1"
        },
        {
          id: "3",
          name: "2"
        },
        {
          id: "4",
          name: "3"
        },
        {
          id: "5",
          name: "4"
        },
        {
          id: "6",
          name: "5"
        },
        {
          id: "7",
          name: "6"
        },
        {
          id: "8",
          name: "7"
        },
        {
          id: "9",
          name: "8"
        },
        {
          id: "10",
          name: "9"
        },
        {
          id: "11",
          name: "10"
        },
        {
          id: "12",
          name: "10份以上"
        }
      ],
      buyList: [],
      heduiShangjia: [],
      dianMing: '',
      totalMoney: 0,
      shangjiaming: ''
    };
  },
  computed: {
    money (newVal,oldVal) {
      if(isClss){
        return totalMoney-16
      }else{
        return totalMoney
      }

    }
  },
  components: {
    zxHead
  },
  methods: {
    targetText(data) {
      if (data == "10份以上") {
        this.option = data + "餐具";
      } else {
        this.option = data + "份餐具";
      }
      this.isnone = false;
    },
    target() {
      this.isClss = !this.isClss;
    },
    isNone() {
      this.isnone = !this.isnone;
    },
    toBuy() {
      var shopTime = "00:14:59";
      document.cookie = "name" + "=" + shopTime;
    },
    timeDay() {
      var data = new Date();
      var h = data.getHours();
      var m = data.getMinutes() + 30;
      if (m > 60) {
        h = h + 1;
        m = m - 60;
      }
      h = h >= 10 ? h : "0" + "" + h;
      m = m >= 10 ? m : "0" + "" + m;
      this.time = h + ":" + m;
    },
    buyMap() {},
    adds() {
      var data = sessionStorage.getItem("keyVal");

      if (data) {
        var newdata = data.substr(0, data.length - 1);
        this.zxgoods = newdata;
        this.taste = "";
      } else {
        this.taste = "口味、偏好";
        this.zxgoods = "订单备注";
      }
    }
  },
  mounted() {
    this.timeDay();
    this.adds();
    //获取商家信息
    this.axios.get("../../../static/json/zhuoting/bussiness.json").then(res => {
      // console.log(res.data.items);
      var shangjia = res.data.items;
      for (var i = 0; i < shangjia.length; i++) {
        var obj = {
          name: shangjia[i].restaurant.name,
          shangjiaId: shangjia[i].restaurant.id,
          dianSrc: shangjia[i].restaurant.image_path
        };
        this.shangjiaming = obj.name;
        this.heduiShangjia.push(obj);
      }

      //获取localstorage信息
      var cookie = localStorage.getItem("goodsInfo");
      if (cookie && cookie != "null") {
        var Arr = JSON.parse(cookie);
        // console.log(Arr);
        for (var i = 0; i < Arr.length; i++) {
          // console.log("=============");
          // console.log(this.heduiShangjia.length);
          this.totalMoney += Arr[i].xianjia*Arr[i].goodsNum;
          for (var j = 0; j < this.heduiShangjia.length; j++) {
            // console.log(Arr[i].dianId,this.heduiShangjia[j].shangjiaId,'============');
            if (Arr[i].dianId == parseInt(this.heduiShangjia[j].shangjiaId)) {
              Arr[i].name = this.heduiShangjia[j].name;
              Arr[i].dianSrc = this.heduiShangjia[j].dianSrc;
              // console.log('===================')
            }
          }
          // console.log(Arr[i].name);
        }
        this.buyList = Arr;
        console.log(this.buyList);
      }
    });


  }
};
</script>
<style scoped>
.body {
  background: #f5f5f5;
  height: 100%;
  width: 100%;
}
.body-bg {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 1;
}
.tablewares {
  width: 100%;
  transition: transform 0.2s, -webkit-transform 0.2s;
  will-change: transform;
  position: fixed;
  bottom: 0;
  background: #f5f5f5;
  box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.4);
  z-index: 100;
  text-align: center;
}
.tablewares h2 {
  padding: 0.16rem 0 0.13rem 0;
  color: #333;
}
.tablewares ul {
  text-align: center;
  width: 100%;
  height: 100%;
  max-height: 80vw;
  overflow-y: scroll;
}
.tablewares ul li {
  margin-bottom: 0.15rem;
  font-size: 0.17rem;
}
.tablewares ul li span {
  display: block;
  width: 100%;
  height: 100%;
}
.tablewares i {
  position: absolute;
  right: 0.25rem;
  font-size: 0.35rem;
  color: #a4a2a2;
}
.bgcolor {
  color: #2396ff;
}
.address {
  padding: 0.13rem 0.3rem 0.05rem 0.08rem;
}
.address p {
  font-size: 0.15rem;
  margin-top: 0.05rem;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.address .first {
  color: hsla(0, 0%, 100%, 0.8);
}
.address .first span {
  border: 1px solid white;
  font-size: 0.12rem;
  text-align: center;
  height: 0.15rem;
  padding: 0 0.02rem;
}
.address p span {
  margin-left: 0.08rem;
}
.address .z-text {
  font-size: 0.25rem;
  font-weight: 700;
}
.z-footer {
  border-top: #2d9aff solid 1px;
  padding: 0 0.08rem;
  background: #2395ff;
  background-image: linear-gradient(
      0deg,
      #f5f5f5,
      #f5f5f5 7%,
      hsla(0, 0%, 96%, 0.3) 48%,
      hsla(0, 0%, 96%, 0)
    ),
    linear-gradient(270deg, #0085ff, #0af);
}
.z-details {
  background: white;
  padding: 0 0.22rem;
  font-size: 0.17rem;
}
.z-details .fc {
  display: flex;
  justify-content: space-between;
  padding: 0.17rem 0;
}
.con-p {
  border-bottom: #f7f4f4a1 solid 1px;
}
.con-color {
  color: #0085ff;
}
.con-title {
  margin-top: 0.1rem;
}
.con-title h3 {
  white-space: nowrap;
  color: #333;
  font-size: 0.2rem;
  padding: 0.2rem 0;
}
.con-title ul {
  border-top: 1px solid #f1e5e5;
}
.con-title li {
  position: relative;
  display: flex;
  padding: 0.13rem 0;
  justify-content: space-between;
  border-bottom: 1px solid #f1e5e5;
}
.con-title li div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.con-title li .z-a {
  width: 0.39rem;
  height: 0.39rem;
  text-align: center;
  line-height: 0.39rem;
}
.con-title li img {
  width: 100%;
  height: 100%;
}
.con-title li p {
  margin-left: 0.12rem;
  font-size: 0.15rem;
}
.counts {
  font-size: 0.13rem;
  color: #333;
}
.counts a {
  color: #333;
  font-size: 0.14rem;
  font-weight: 700;
}
.counts .upcolor {
  color: #bbb;
  text-decoration: line-through;
  font-weight: 700;
  margin-right: 0.12rem;
}
.counts .upcolor a {
  color: #bbb;
  font-size: 0.16rem;
}
.count {
  position: absolute;
  left: 2.2rem;
}
.z-group {
  padding: 0 0.08rem;
}
.z-group ol {
  background: white;
  padding: 0 0.22rem;
}
.ol li {
  display: flex;
  justify-content: space-between;
  font-size: 0.15rem;
  padding: 0.2rem 0;
  border-bottom: 1px solid #f1e5e5;
  color: #333;
}
.ol li .last {
  color: #bbb;
}
.ol .z-ol-text {
  font-size: 0.12rem;
  position: relative;
  margin-right: 0.13rem;
  background: #60acf4;
  color: white;
  padding: 0 0.03rem;
}
.z-ellipsis {
  padding: 0 0.22rem;
  background: white;
}
.z-ellipsis div {
  padding: 0.2rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f1e5e5;
  color: #333;
  font-size: 0.16rem;
}
.z-span-ell {
  color: white;
  padding: 0.02rem 0.05rem;
  background-image: linear-gradient(106deg, #ff7417, #ff3c15);
  font-size: 0.12rem;
}
.z-ellipsis .stop {
  font-size: 0.14rem;
}
.stop a {
  color: #bbb;
}
.stop .countMy {
  font-size: 0.22rem;
}
.supervip {
  display: flex;
  margin: 0.15rem 0.08rem;
  background: white;
  padding: 0.18rem 0.16rem;
  justify-content: space-between;
  align-items: center;
}
.supervip .supervip-l {
  color: #999;
}
.supervip-p {
  color: #333;
  font-size: 0.18rem;
  margin-bottom: 0.05rem;
}
.supervip .supervip-r {
  display: flex;
  align-items: center;
  color: #999;
}
.z-sup-span {
  text-decoration: line-through;
  margin-right: 0.05rem;
}
.supervip .supervip-r .sup-span {
  color: #333;
  font-weight: 700;
  font-size: 0.16rem;
}
.supervip-r-p {
  margin-right: 0.25rem;
}
.supervip-r-last {
  color: white;
  text-align: center;
  line-height: 0.22rem;
  font-size: 0.14rem;
  font-weight: 700;
  height: 0.22rem;
  width: 0.22rem;
  background: #dad3d3;
  border-radius: 100%;
}
.supervip-s {
  background: #00e067;
}
.tableware {
  margin: 0 0.08rem;
  color: #333;
  background: white;
}
.tableware li {
  border-bottom: 1px solid #f0eaea;
  padding: 0.13rem 0.16rem;
}
.tableware-p-last {
  color: #00e067;
  font-size: 0.12rem;
  margin-top: 0.06rem;
}
.phone {
  color: #999;
}
.tableware .tableware-p {
  font-size: 0.16rem;
  display: flex;
  justify-content: space-between;
}
.tableware .tableware-p-span {
  color: #bbb;
  font-size: 0.14rem;
}
.tableware .tableware-p-span i {
  font-size: 0.14rem;
  margin-left: 0.08rem;
}
.zxc-p {
  margin-top: 0.12rem;
  height: 0.48rem;
  width: 100%;
}
.z-bottom {
  z-index: 5;
  position: fixed;
  display: flex;
  bottom: 0;
  height: 0.48rem;
  background: #3c3c3c;
  width: 100%;
  align-content: center;
  font-size: 0.16rem;
}
.z-rigth {
  position: absolute;
  right: 0;
  width: 1.01rem;
  background: #00e067;
  color: white;
  text-align: center;
  line-height: 0.48rem;
}
.z-left {
  margin-left: 0.08rem;
  line-height: 0.48rem;
  color: #999;
}
.z-left .z-left-sp {
  color: white;
  font-size: 0.19rem;
}
</style>

