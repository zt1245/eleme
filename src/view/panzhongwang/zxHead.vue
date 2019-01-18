<template>
  <div class="beitai">
      <div class="con-top">
          <router-link to="/" class="con-pic">
            <img src='../../../static/images/zxpan/list.svg'/>
          </router-link>
          <h3>{{ title }}</h3>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    url: {
      type:String
    }
  }
}
</script>
<style>
.beitai{
  height: 0.48rem;
  width: 100%;
}
.con-top{
  z-index: 5;
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  color: white;
  height: 0.48rem;
  width: 100%;
  background: #2395ff;
  padding-left: 0.18rem;
  background-image: linear-gradient(90deg,#0af,#0085ff);
}
.con-top h3{
  position: absolute;
  left: 50%;
  top: 0.12rem;
  margin-left: -0.34rem;
  font-size: 0.18rem;
}
.con-pic img{
  height: 0.20rem;
  width: 0.12rem;
}
</style>

