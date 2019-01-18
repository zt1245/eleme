import Vue from 'vue'
import Router from 'vue-router'

import hejin from '../components/1-hejin.vue'
import zhouting from '../components/2-zhuoting.vue'
import zxpan from '../components/3-zxpan.vue'
import liqin from '../components/4-liqin.vue'

// 以下是何津引入的组件模块位置
import Shop from '@/view/hejin/Shop.vue'
import Root from '../components/5-rooter.vue'


// 卓婷引入位置
import ztGoods from '../view/zhuoting/zt-goods.vue'


// liqin
import Login from '@/view/liqin/Login.vue'
import infoLogin from '@/view/liqin/info.vue'
import Regist from '@/view/liqin/Regist.vue'
import Find from '@/view/liqin/find.vue'
import LookFind from '@/view/liqin/LookFind.vue'
import RankFind from '@/view/liqin/RankFind.vue'

//zxpan
import buy from '../view/panzhongwang/buy.vue'
import comfirm from '../view/panzhongwang/confirm.vue'
import remark from '../view/panzhongwang/remark.vue'
import zmap from '../view/hejin/zmap.vue'
import sss from '../view/hejin/sss.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Root,
      children: [
        {
          path: 'home',
          component: hejin,
        },
        {
          path: 'profile',
          component: liqin,
        },
        {
          path: 'checkout',
          component: zxpan
        },
        {
          path: 'map/:addr',
          name: 'adds',
          component: zmap
        },
        {
          path: '/sss',
          component: sss
        },
        {
          path: '',
          component: hejin,
        }
      ]
    },
    {
      path: '/food',
      component: zhouting
    },

    // {
    //   path: '/profile',
    //   component: liqin
    // },
    //以下是 何津 路由配置书写位置
    {
      path: '/shop/:shop_id',
      name: 'Shop',
      component: Shop
    },

    //以下是 卓婷 路由配置书写位置
    {
      path: '/goods',
      component: ztGoods
    },

    //以下是 潘忠王 路由配置书写位置
    //订单提交页 buylist
    {
      path:'/comfirm',
      name: 'content',
      component: comfirm,
    },

    //订单备注
    {
      path: '/remark',
      component: remark
    },
    //支付页面
    {
      path: '/buy',
      name: caches,
      component: buy
    },



    //订单备注页面跳转




    //以下是 李钦 路由配置书写位置
    {
      path: '/login',
      component: Login
    },
    {
      path: '/info',
      name: 'denglu',
      component: infoLogin
    },
    {
      path: '/regist',
      component: Regist
    },
    // 发现页
    {
      path: '/find',
      component: Find,
      children: [
        {
          path: 'LookFind',
          name: 'LookFind',
          component: LookFind
        },
        {
          path: 'RankFind',
          name: 'RankFind',
          component: RankFind
        }
      ]
    },

    // 如果要想让其余的url地址都渲染 recom 页面组件（此处不要删除，不要修改）
    {
      path: '*',
      redirect: '/'
    }
  ]
})
