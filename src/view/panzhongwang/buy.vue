<template>
<div>
 <div class="Hop">
    <h4>在线支付</h4>
  </div>
  <div class="zx-buy">
    <div class="time">

        <p>支付剩余时间</p>

        <p  class="time-p">{{timeDowm}}</p>
    </div>
    <p class="zx-cont">
      <span>果咖(后瑞店)外卖订单</span><span class="zx-spanA" @click="buyTar">详情</span><span class="zx-spanB">¥23.00</span>
    </p>
  </div>
  <p class="pay">其他支付</p>
  <div class="zx-footer">
    <ul>
      <li v-for = "(item,index) in pays" :key="index" :class="item.class">
        <div>
          <i></i><span>{{item.name}}</span>
        </div>
       <p class="pay-p" @click="idClass=item.id"
        :class="{'pay-pbg':idClass==item.id}">√</p>
      </li>
    </ul>
  </div>
  <div class="zx-btn">
    <P>确认支付<span>￥23.00</span></P>
  </div>
</div>

</template>
<script>
export default {
  data() {
    return {
      timeDowm: "",
      idClass: 1,
      isClss: false,
      pays: [
        {
          name: "支付宝",
          id: 1,
          class: "fc"
        },
        {
          name: "微信",
          id: 2,
          class: "fb"
        }
      ]
    };
  },

  methods: {
    buyTar(){
      // alert(4)
    },
    endTime() {
      var timeter = setInterval(() => {
        var time = document.cookie.split("=")[1].split(":")
        var m = parseInt(time[1])
        var s = parseInt(time[2])
        if (s <= 0) {
          if (m == 0 && s == 0) {
            clearInterval(timeter)
          } else {
            s = 59
            m = m - 1;
            if (m < 0) {
              m = 0
            }
          }
        } else {
          s = s-1
        }
        m = m >= 10 ? m : "0" + m
        s = s >= 10 ? s : "0" + s
        var cookieTime = "00" + ":" + m + ":" + s
        if (m == 0 && s == 0) {
          this.timeDowm = "订单已超时";
        } else {
          this.timeDowm = cookieTime
        }
        document.cookie = "name" + "=" + cookieTime
      }, 1000)
    }
  },
  mounted() {
    this.endTime()
  }
};
</script>
<style>
html,
body {
  height: 100%;
  background: #f5f5f5;
}
.Hop{
  align-items: center;
  color: white;
  height: 0.53rem;
  line-height: 0.53rem;
  text-align: center;
  width: 100%;
  background: #3190e8;
  font-size: 0.18rem;
}
.zx-buy {
  padding: 0 0.24rem;
  background: white;
}
.time {
  text-align: center;
  padding: 0.28rem 0;
  color: #999;
  font-size: 0.14rem;
  border-bottom: #eee 1px solid;
}
.time p {
  height: 0.3rem;
}
.time .time-p {
  margin-top: 0.22rem;
  min-width: 0.13rem;
  color: #333;
  font-size: 0.24rem;
  letter-spacing: 0.02rem;
}
.zx-cont {
  padding: 0.18rem 0;
  font-size: 0.17rem;
  position: relative;
}
.zx-spanA {
  color: #999;
  margin-left: 0.12rem;
}
.zx-spanB {
  position: absolute;
  right: 0;
  color: #ff6000;
  margin-left: 0.12rem;
}
.pay {
  margin-left: 0.217rem;
  padding: 0.15rem 0;
  color: #999;
  font-size: 0.16rem;
}
.zx-footer {
  background: white;
  padding: 0 0.21rem;
}
.zx-footer li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.22rem 0;
  font-size: 0.18rem;
}
.pay-p {
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
.pay-pbg {
  background: #00e067;
}
.fc {
  border-bottom: #eee solid 1px;
}
.zx-btn {
  padding: 0 0.21rem;
  margin-top: 0.21rem;
}
.zx-btn p {
  padding: 0.1rem;
  font-size: 0.16rem;
  background-color: #4cd964;
  color: white;
  text-align: center;
  border-radius: 0.05rem;
}
</style>
