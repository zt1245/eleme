<template>
    <div>
           <!-- <div class="tabs-header"></div> -->
           <div class="tabs-bot">
             <section class="container">
               <p class="is-only">今日剩余加油机会1次<span>领更多加油次数</span></p>
               <div class="guanlan">
                 <h3 class="jiaru">助他加入世界顶级篮球训练营<br>成为本季<b>《这!就是灌篮》MVP</b></h3>
                 <div class="mvp">
                   <div class="candidate">
                     <span class="spang">1</span>
                     <img class="avatar" src="../../../static/images/liqin/zhang.png" alt="">
                     <i class="name">张宁</i>
                     <i class="votes">843,579</i>
                     <button class="btn">为他助力</button>
                   </div>
                 </div>

                <div class="list">
                 <div class="candidate candsDate" v-for="(item,index) in trainIng"
                    :key="index">
                     <span class="spang">{{ item.spang }}</span>
                     <img class="avatar" :src=" item.src" alt="">
                     <i class="name">{{item.name}}</i>
                     <i class="votes">{{item.votes}}</i>
                     <button class="btn">为他助力</button>
                 </div>
                </div>
               </div>
             </section>
           </div>
    </div>
</template>

<script>
export default {

  data () {
    return {
      trainIng: [
        {
          spang:2,
          src: '../../../static/images/liqin/yang.png',
          name: '杨政',
          votes: '199,249'
        },
        {
          spang:3,
          src: '../../../static/images/liqin/liu.png',
          name: '张晨昕',
          votes: '156,147'
        },
        {
          spang:4,
          src: '../../../static/images/liqin/er.png',
          name: '周锐',
          votes: '121,295'
        },
        {
          spang:5,
          src: '../../../static/images/liqin/cheng.png',
          name: '祝铭震',
          votes: '199,249'
        },
        {
          spang:6,
          src: '../../../static/images/liqin/yi.png',
          name: '刘恒驿',
          votes: '199,249'
        },
        {
          spang:7,
          src: '../../../static/images/liqin/wu.png',
          name: '钟显超',
          votes: '199,249'
        },
        {
          spang:8,
          src: '../../../static/images/liqin/liu.png',
          name: '杨政',
          votes: '199,249'
        },
        {
          spang:9,
          src: '../../../static/images/liqin/qi.png',
          name: '杨政',
          votes: '199,249'
        },
        {
          spang:10,
          src: '../../../static/images/liqin/san.png',
          name: '杨政',
          votes: '199,249'
        },
        {
          spang:11,
          src: '../../../static/images/liqin/si.png',
          name: '杨政',
          votes: '199,249'
        },
        {
          spang:12,
          src: '../../../static/images/liqin/cheng.png',
          name: '杨政',
          votes: '199,249'
        },
        {
          spang:13,
          src: '../../../static/images/liqin/wu.png',
          name: '杨政',
          votes: '199,249'
        },
        {
          spang:14,
          src: '../../../static/images/liqin/qi.png',
          name: '杨政',
          votes: '199,249'
        },
        {
          spang:15,
          src: '../../../static/images/liqin/liu.png',
          name: '杨政',
          votes: '199,249'
        },
        {
          spang:16,
          src: '../../../static/images/liqin/zhang.png',
          name: '杨政',
          votes: '199,249'
        },
         {
          spang:17,
          src: '../../../static/images/liqin/cheng.png',
          name: '祝铭震',
          votes: '199,249'
        },
        {
          spang:18,
          src: '../../../static/images/liqin/yi.png',
          name: '刘恒驿',
          votes: '199,249'
        },
        {
          spang:19,
          src: '../../../static/images/liqin/wu.png',
          name: '钟显超',
          votes: '199,249'
        }
      ]
    }
  }
};
</script>

<style scoped>
.js_anchor {
  background: #184692;
  margin-top: 0.05rem;
}
.tabs-header {
  position: relative;
  z-index: 10;
  display: flex;
  align-content: center;
  height: 0.78rem;
  background: url(../../../static/images/liqin/waimai.png) no-repeat;
  background-position-y: 0.19rem;
  background-size: 100%;
}
.tabs-bot {
  height: auto;
  width: 100%;
  background: linear-gradient(
      180deg,
      #194999 0,
      #11285a 2.133333rem,
      #081536 4rem
    )
    #081536 no-repeat;
}
.container {
  padding: 0 0.16rem 1.4rem;
  height: 100%;
}
.is-only {
  display: flex;
  height: 0.61rem;
  font-size: 0.14rem;
  color: #799fff;
  line-height: 0.61rem;
  align-items: center;
  justify-content: center;
}
.container span {
  display: inline-block;
  width: 1.6rem;
  height: 0.23rem;
  border: 1px solid #3f62ba;
  color: #b7cdff;
  text-align: center;
  line-height: 0.23rem;
  border-radius: 0.16rem;
  margin-left: 0.12rem;
}
.guanlan {
  background-color: #081536;
  height: auto;
  padding: 0 0.15rem;
  background: #081637;
  border-radius: 0.1rem;
  overflow: hidden;
  border: .02rem solid #234185;
}
.jiaru {
  padding-top: 0.33rem;
  font-size: 0.16rem;
  color: #6a8fe8;
  text-align: center;
}
.mvp {
  margin: 0.18rem 0 0.16rem;
  background-size: 1rem;
  background: url(../../../static/images/liqin/mvp.png) no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100%;
}
.candidate,.candsDate{
  width: 1.16rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 0.4rem;
  text-align: center;
}
.avatar {
  display: block;
  width: 1rem;
  height: 1rem;
}
.candidate .spang {
  width: 0.3rem;
  height: 0.24rem;

  background: url(../../../static/images/liqin/huang.png);
  background-size: 100%;
  transform: rotate(-38deg);
  position: absolute;
  top: -0.15rem;
  left: -.01rem;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  font-family: CSD;
  font-size: 0.16rem;
  color: #fff;
  border: 1px solid #3f62ba;
}
.name{
  height: .26rem;
  min-width: .6rem;

    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -.16rem;
    padding: 0 .1rem;
    font-size: .16rem;
    color: #fff;
    background-color: #2955b8;
    border-radius: .03rem;
}
.votes{
      margin-top: 1.3vw;
    font-size: .17rem;
    font-weight: 800;
    color: #fff;
}
.btn{
     min-width: .8rem;
    height: .29rem;
    margin-top: .05rem;
    padding: 0 .22rem;
    font-size: .16rem;
    font-weight: 800;
    color: #fff;
    border: 0 none;
    background-color: #e94619;
    border-radius: .15rem;
}
.list{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;

}
.candsDate{
    flex: 1;
}
</style>
