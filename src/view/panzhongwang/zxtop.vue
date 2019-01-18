<template>
  <div class="con-top">
    <h3>{{msg}}</h3>
  </div>
</template>
<script>
export default {
  data(){
    return {
      msg:'在线支付'
    }
  }
}
</script>
<style>
.con-top{
  align-items: center;
  color: white;
  height: 0.53rem;
  line-height: 0.53rem;
  text-align: center;
  width: 100%;
  background: #3190e8;
  font-size: 0.18rem;
}
</style>
