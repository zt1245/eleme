<template>
  <div class="root">
    <div class="bus_item">
      <!-- 头部 -->
      <zt-gohead></zt-gohead>
      <!-- nav -->
      <zt-shoptab></zt-shoptab>
      <!-- 商家推荐 -->
      <zt-gorecom></zt-gorecom>
    </div>
    <!-- menu -->
    <zt-gomenu class="bus_menu"></zt-gomenu>

    <shop-car :isclick='0'></shop-car>
  </div>
</template>

<script>
import ztGohead from "./zt-gohead.vue";
import ztShoptab from "./zt-shoptab.vue";
import ztGorecom from "./zt-gorecom.vue";
import ztGomenu from "./zt-gomenu.vue";
import ShopCar from "@/view/hejin/ShopCar.vue";
export default {
  data () {
    return {
      isclick: 0
    }
  },
  components: {
    'zt-gohead': ztGohead,
    'zt-shoptab': ztShoptab,
    'zt-gorecom': ztGorecom,
    'zt-gomenu': ztGomenu,
    ShopCar
  }
}
</script>

<style scoped>
  .bus_item {
    display: flex;
    flex-direction: column;
  }
  .bus_menu {
    flex: 1;
  }
</style>
