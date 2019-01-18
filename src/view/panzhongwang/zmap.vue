<template>
  <h1>sssssss</h1>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {

    ddd(){
      this.$axios.get('../../../static/php/mapjk.php').then(res => {
        console.log(res)
      })
    },










    mapSeach() {
      const api_proxy = "https://bird.ioliu.cn/v1/?url=";
      this.$axios
        .get(
          api_proxy +
            "https://h5.ele.me/restapi/bgs/poi/search_poi_nearby?keyword=&offset=0&limit=20&longitude=113.835997&latitude=22.631929"
        )
        .then(result => {
          console.log(result);
        });
    }
  },
  mounted() {
    this.mapSeach();
    this.ddd();
  }
};
</script>

