<template>

  <div>

    <router-view></router-view>

    <ele-footer class="foo"></ele-footer>

  </div>

</template>

<script>
import EleFooter from '@/view/hejin/EleFooter.vue'
export default {
  components: {
    EleFooter
  }
}
</script>

<style scoped>
.foo {
  z-index: 100;
}

</style>
