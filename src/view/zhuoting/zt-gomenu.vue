<template>
  <div>
    <div class="main_menu">
      <div class="menu_category">
        <ul>
          <li v-for="(item,index) in category"
              :key="index"
              :class="{'active': curTab == index}"
              @click="curTab = index">
            <img :src="item.imgSrc" v-if="item.isExist">
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="menu_list">
        <dl v-for="(label,index) in menuArr"
            :key="index">
          <dt class="menu_label">
            <span>{{ label.name }}</span>
          </dt>
          <dd class="menuItem"
              v-for="(sel,index) in label.foods"
              :key="index" @click="shopId(sel.specfoods[0].food_id)">
            <img :src="sel.image_path" alt="">
            <section class="food_info">
              <p class="food_name">{{ sel.name }}</p>
              <p class="food_des">{{ sel.description }}</p>
              <p class="food_sale">
                <span>月售{{ sel.month_sales }}份</span>
                <span>好评率{{ sel.satisfy_rate }}%</span>
              </p>
              <div class="food_act"  v-if="sel.activity != null">
                <span>{{ sel.activity.benefit_text }}</span>
                <span>{{ sel.activity.applicable_quantity_text }}</span>
              </div>
              <div class="food_p">
                <div class="price">
                  <span>￥</span>
                  {{ sel.specfoods[0].price }}
                  <del v-if="sel.specfoods[0].original_price">
                    ￥{{ sel.specfoods[0].original_price }}
                  </del>
                </div>
                <a href="#">＋</a>
              </div>
            </section>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curTab: '',
      category: [
        {
          name: '热销',
          imgSrc: '../../../static/images/zhuoting/fire.png',
          isExist: true
        },
        {
          name: '优惠',
          imgSrc: '../../../static/images/zhuoting/discount.png',
          isExist: true
        },
        {
          name: '新品上市'
        },
        {
          name: '桶'
        },
        {
          name: '炸鸡啤酒'
        },
        {
          name: '美味汉堡/卷'
        },
        {
          name: '鸡翅鸡排'
        },
        {
          name: '原味鸡'
        },
        {
          name: '小食配餐'
        },
        {
          name: '甜品/冰淇淋'
        },
        {
          name: '缤纷饮料'
        },
        {
          name: '童书套餐'
        },
        {
          name: 'K咖啡'
        }
      ],
      menuArr: [],
    }
  },
  mounted() {
    this.axios.get('../../static/json/zhuoting/food.json')
    .then((result) => {
      // console.log(result.data.menu);
      this.menuArr = result.data.menu;
    })
    .catch((error) => {
      console.log(error);
    })
  },
  methods: {
    shopId(val_id) {
      // console.log(val_id);
      this.$router.push({
        name: 'Shop',
        params: {
          shop_id: val_id
        }
      })
    }
  }
}
</script>

<style scoped>
  .main_menu {
    display: flex;
    height: 6.9rem;
    overflow: hidden;
  }
  .menu_category {
    background-color: #f8f8f8;
    overflow-y: auto;
  }
  .menu_category li img {
    width: 0.15rem;
  }
  .menu_category li {
    padding: 0.2rem 0.1rem;
    text-align: left;
    font-size: 0.15rem;
    width: 0.7rem;
    flex: none;
  }
  .menu_category .active {
    background-color: #fff;
  }
  .menu_label {
    padding: 0.06rem 0;
  }
  .menu_label span {
    margin-left: 0.1rem;
    font-size: 0.15rem;
  }
  .menuItem {
    margin-left: 0.1rem;
    display: flex;
    margin: 0.05rem 0;
  }
  .menuItem img {
    margin-right: 0.1rem;
    width: 1.2rem;
    height: 1.2rem;
  }
  .food_info {
    padding: 0 0.1rem 0.15rem 0;
  }
  .food_info .food_name {
    font-size: 0.16rem;
    font-weight: 700;
  }
  .food_info .food_des {
    width: 1.6rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0.05rem 0;
    color: #9999a6;
  }
  .food_sale {
    color: #9999a6;
    margin-bottom: 0.06rem;
  }
  .food_info a {
    display: block;
    width: 0.25rem;
    height: 0.25rem;
    background: rgb(35, 149, 255);
    text-align: center;
    color: #fff;
    font-size: 0.18rem;
    border-radius: 45%;
  }
  .food_act {
    color: #eb6551;
  }
  .price {
    color: rgb(255, 83, 57);
    font-size: 0.18rem;
  }
  .price span {
    font-size: 0.16rem;
    margin-right: -0.06rem;
  }
  .price del {
    font-size: 0.12rem;
    color: #9999a6;
  }
  .food_p {
    display: flex;
    justify-content: space-between;
    margin-top: 0.05rem;
  }
  .menu_list {
    overflow-y: auto;
  }
</style>
