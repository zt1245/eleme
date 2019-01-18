<template>
  <div>
    <zt-header></zt-header>
    <zt-content :menuArr='menu.restaurant'
                v-for="(menu,index) in menus"
                :key="index"></zt-content>
  </div>
</template>

<script>
import ztHeader from '@/view/zhuoting/zt-header.vue'
import ztContent from '@/view/zhuoting/zt-content.vue'
export default {
  name: 'HelloWorld',
  components: {
    'zt-header': ztHeader,
    'zt-content': ztContent,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menus: []
    }
  },
  mounted() {
    this.axios.get('../../static/json/zhuoting/bussiness.json')
    .then((result) => {
      // console.log(result.data.items);
      this.menus = result.data.items;
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
