<template>
    <div class="js_anchor">
           <div class="tabs-bot">
               <p class="dingwei"></p>
           </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: true
        }
    },
    methods: {
        fn () {
            console.log(111)
            this.page = !this.page;
            if(this.page){
                this.$router.push({
                 mame: 'RankFind'
                })
            }else{
                this.$router.push({
                 mame: 'LookFind'
                })
            }

        }
    }
}
</script>

<style scoped>
.js_anchor{
  background: #184692;
  margin-top: .05rem;
}
 .tabs-header{
    position: relative;
    z-index: 10;
    display: flex;
    align-content: center;
    height: .78rem;
    background: url(../../../static/images/liqin/waimai.png)  no-repeat;
    background-position-y: -.6rem;
    background-size: 100%;
}
.tabs-bot{
  height: 3rem;
  width: 100%;
  padding-top: 0.1rem;
  background: linear-gradient(180deg,#194999 0,#11285a 2.133333rem,#081536 4rem) #081536 no-repeat;
}
.dingwei{
    height: 100%;
    background: url(../../../static/images/liqin/dingwei.png) no-repeat 50%;
    background-size: 50%;
    z-index: 10;
}
</style>
