<template>
  <div>
    <div class="zx-heard">
      <div class="zxc-top">
        <h2>选择收货地址</h2>
        <p>新增地址</p>
      </div>
    </div>
      <div>
      <div class="zx-opting">
        <p class="zx-city" id="city" @click='dizhi'>{{addr}}</p>
        <input type="text" id="suggestId" name="address_detail" placeholder="请输入地址" v-model="address_detail" class="input_style"
          >
        <div id="allmap"></div>
      </div>
      <p class="zx-p"><span>当前地址</span></p>
      <div class="site">
        <p style="font-weight: 700" class="addr2">{{addr2}}</p>
        <p style="color:#2395ff">重新定位</p>
      </div>
      <p class="zx-p"><span>收货地址</span></p>
      <ul class="site">
        <p style="font-weight: 700">后瑞新瑞村二区七巷1栋</p>
      </ul>
    </div>

  </div>
</template>
<script>
//import {MP} from '../../map'
export default {
  data() {
    return {
      address_detail: null, //详细地址
      userlocation: { lng: "", lat: "" },
      addr: '',
      addr2: ''
    };
  },
  methods:{
    dizhi () {
      this.$router.push({
        path: '/sss'
      })
    },
    // changeAdr() {
    //   this.addr2 = document.getElementById('suggestId').value;
    //   console.log(this.addr2);
    // }
  },
  watch: {
    address_detail (newVal,oldVal){

    }
  },
  mounted() {

    //输入内容匹配地址

    this.$nextTick(function() {
      var th = this;
      // 创建Map实例
      var map = new BMap.Map("allmap");
      // 初始化地图,设置中心点坐标，
      var point = new BMap.Point(121.160724, 31.173277); // 创建点坐标，汉得公司的经纬度坐标
      map.centerAndZoom(point, 15);
      map.enableScrollWheelZoom();
      var ac = new BMap.Autocomplete({ //建立一个自动完成的对象
        input: "suggestId",
        location: map
      });
      var myValue;
      ac.addEventListener("onconfirm", function(e) {
        //鼠标点击下拉列表后的事
        // alert('点击获取成功')

        var _value = e.item.value;

        myValue =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
        this.address_detail = myValue;
        setPlace();
        th.addr2 = myValue;
        console.log(myValue,this.addr2);
        sessionStorage.setItem('addr',th.addr2);
        th.$router.push({
          path: '/home',

        })
      });
      function setPlace() {
        map.clearOverlays(); //清除地图上所有覆盖物
        function myFun() {
          th.userlocation = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
          map.centerAndZoom(th.userlocation, 18);
          map.addOverlay(new BMap.Marker(th.userlocation)); //添加标注
        }
        var local = new BMap.LocalSearch(map, {
          //智能搜索
          onSearchComplete: myFun
        });
        local.search(myValue);
          //经度
        console.log(th.userlocation.lng);
          //维度
        console.log(th.userlocation.lat);
      }
    });
    // 获取点击传递来地址
    this.addr = this.$route.params.addr;
    console.log(this.address_detail);

  }
};
</script>
<style>
body {
  background: #f5f5f5;
}

#city {
  width: 0.45rem;
  height: 0.28ren;
  overflow: hidden;
  text-overflow: ellipsis;
}
.zx-heard {
  height: 0.51rem;
  width: 100%;
}
.zxc-top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 0.12rem 0;
  align-items: center;
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
.zxc-top h1 {
  font-size: 0.19rem;
  font-weight: 100;
}
.zxc-top p {
  font-size: 0.17rem;
  position: absolute;
  right: 0.2rem;
}
.zx-opting {
  display: flex;
  padding: 0.18rem;
  color: #333;
  font-size: 0.14rem;
  align-items: center;
  background: white;
}
.zx-opting input {
  width: 2.52rem;
  padding: 0.1rem;
  background: #f5f5f5;
  outline: 0;
  border: 0;
  border: 1px solid #f5f5f5;
  margin-left: 0.15rem;
}
.zx-p {
  width: 100%;
  padding: 0.12rem 0;
  font-size: 0.14rem;
}
.zx-p span {
  margin-left: 0.12rem;
}
.site {
  background: white;
  display: flex;
  font-size: 0.16rem;
  padding: 0.15rem 0.12rem;
  justify-content: space-between;
}
.zx-city {
  background: white;
  height: 0.28rem;
  line-height: 0.28rem;
  width: 100%;
  height: 0.28ren;
  overflow: hidden;
  text-overflow: ellipsis;
}
.addr2 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

