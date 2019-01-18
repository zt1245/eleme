<template>
  <div>
    <div class="zx-heard">
      <div class="zxc-top">
        <h2>城市选择</h2>
      </div>
      </div>
      <div class="zx-footer">
        <p class="zx-p" id="zxCity"><span>定位城市</span></p>
        <p class="zx-p zx-city"><span>深圳</span></p>
        <dl v-for ='(item,index) in cityArr' :key='index'>
          <dt class="footer-bg">{{item.type}}</dt>
          <dd  class="footer-bg" v-for="(attr,index) in item.addr" :key='index'>
            <span @click='cityOption(attr.name)'>{{ attr.name }}</span></dd>
        </dl>
        <div class="Val">
          <span v-for="( spans,index ) in cityArr" :key="index">{{spans.type}}</span>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      cityArr: [],
      address: []
    };
  },
  methods: {
    citySearch() {
      this.isNone = false;
      this.msg = "城市选择";
      this.addCity = "";
      var arr = [];
      const api_proxy = "https://bird.ioliu.cn/v1/?url=";
      this.$axios
        .get(api_proxy + "https://www.ele.me/restapi/shopping/v1/cities")
        .then(result => {
          for (var item in result.data) {
            var obj = {};
            obj.type = item;
            obj.addr = result.data[item];
            arr.push(obj);
          }
          this.cityArr = arr;
        });
    },
    //点击传参
    cityOption(data){
      console.log(data)
      this.$router.push({
        name: 'adds',
        params: {
          addr: data
        }
      })
    }
  },
  mounted() {
    this.citySearch();
  }
};
</script>

<style>
.zx-heard{
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
.zx-p {
  width: 100%;
  padding: 0.12rem 0;
  font-size: 0.14rem;
}
.zx-p span {
  margin-left: 0.12rem;
}

.Val{
  z-index: 5;
  position: fixed;
  top: 0.8rem;
  right: 0.05rem;
  display: block;
}
.Val span{
  margin: 0.04rem 0;
  display: block;
  color: #999;
}
.footer-bg {
  padding: 0 0 0 0.11rem;
  background: white;
  font-size: 0.14rem;
}
dt.footer-bg {
  padding: 0.11rem;
  background: #f5f5f5;
  border-bottom: #dddddd solid 1px;
}
#zxCity{
  background: #f5f5f5;

}
.footer-bg span {
  display: block;
  padding: 0.11rem 0;
  width: 100%;
  height: 100%;
  border-bottom: #dddddd solid 1px;
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
</style>
