<template>
<div class="box">
  <zx-head title="订单备注"></zx-head>
    <div class="text">
      <textarea  placeholder="填写额外对餐厅和骑手小哥备注的信息" maxlength="100" v-model="value"></textarea>
      <div class="zx-option">
        <ul>
          <li class="zx-optLi">
          <span v-for='(item,index) in sapns'
          :key = 'index'
          @click="liTar(item.id,item.sp)"
          :class="[item.class, {'colorTar':classId==item.id}]">{{ item.sp }}</span>
          </li>
          <li v-for="(item,index) in lis" :key="index">
            <span @click="colorTarClass(item)"
            :class='{"colorTar":colorTarId[index].name}'>{{ item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="btn">
      <router-link to='/comfirm' tag='div' class="confirm">
        <span @click="confirmTar">确定</span>
      </router-link>
    </div>
</div>
</template>
<script>
import zxHead from "./zxHead";
export default {
  data() {
    return {
      str:'',
      value:'',
      arrText: [],
      arrTexts:'',
      classId: 0,
      colorTarId: [
        {
          name: false
        },
        {
          name: false
        },
        {
          name: false
        },
        {
          name: false
        }
      ],
      isTarClass: false,
      sapns: [
        {
          id: 1,
          sp: "不要辣",
          class: "lia"
        },
        {
          id: 2,
          sp: "少点辣",
          class: "lib"
        },
        {
          id: 3,
          sp: "多点辣",
          class: "lic"
        }
      ],
      lis: [
        {
          fut: "tar1",
          name: "不要香菜",
          class: "fut1",
          id: 0
        },
        {
          fut: "tar2",
          name: "不要洋葱",
          class: "fut2",
          id: 1
        },
        {
          fut: "tar3",
          name: "多点醋",
          class: "fut3",
          id: 2
        },
        {
          fut: "tar4",
          name: "多点葱",
          class: "fut4",
          id: 3
        }
      ]
    };
  },
  components: {
    zxHead
  },
  methods: {
    colorTarClass(data) {
      // console.log(data)
      var arr = [];
      var index = data.id;
      this.colorTarId[index].name = !this.colorTarId[index].name;
      var val = this.arrText.indexOf(data.name);
      if (val == -1) {
        this.arrText.push(data.name);
      } else {
        this.arrText.splice(val, 1);
      }
    },
    liTar(index, txt) {
      var arrVal = []
      var val = arrVal.indexOf(txt);
      if (index == this.classId) {
        this.classId = 0;
        arrVal.splice(val, 1);
      } else {
        this.classId = index;
        if (val == -1) {
          arrVal.push(txt);
        } else {
          arrVal.splice(val, 1);
        }
      }
      if(arrVal[0]){
      this.arrTexts=arrVal[0]
      }
    },
    confirmTar() {
      this.arrText.push(this.arrTexts)
      for(var i = 0; i < this.arrText.length ;i ++ ){
        this.str += this.arrText[i]+"、"
      }
      sessionStorage.setItem('keyVal', this.str);
    }
  }
};
</script>
<style>
body {
  background: #f9f9f9;
}
.beitai {
  height: 0.48rem;
  width: 100%;
}
.con-top {
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
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
.con-top h3 {
  position: absolute;
  left: 50%;
  top: 0.12rem;
  margin-left: -0.34rem;
  font-size: 0.18rem;
}
.con-pic img {
  height: 0.2rem;
  width: 0.12rem;
}
.text {
  padding: 0.18rem;
  background: white;
}
textarea {
  padding: 0.2rem 0 0 0.2rem;
  width: 95%;
  height: 1.1rem;
  border: 1px solid #ccc;
  border-radius: 0.01rem;
  background-color: #f9f9f9;
  color: #666;
  resize: none;
  font-size: 0.14rem;
  font-family: inherit;
  outline: 0;
}
.zx-option ul {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.1rem;
}
.zx-option ul li {
  border: #0085ff solid 1px;
  margin-right: 10px;
  height: 0.3rem;
  border-radius: 0.04rem;
  text-align: center;
  line-height: 0.3rem;
  color: #333;
  margin-top: 0.1rem;
  border: 1px solid #ddd;
  display: flex;
  overflow: hidden;
}
.zx-optLi span {
  height: 100%;
  padding: 0 0.06rem;
  border-right: 1px solid #ddd;
}
.zx-optLi span.lic {
  border: 0;
}
.zx-option li span {
  height: 100%;
  padding: 0 0.06rem;
  font-size: 0.12rem;
}
.colorTar {
  background: #0186ff;
  color: #fff;
}
.btn {
  padding: 0 0.2rem;
  margin-top: 0.25rem;
}

.confirm span {
  display: block;
  text-align: center;
  height: 0.5rem;
  line-height: 0.5rem;
  color: white;
  font-size: 0.16rem;
  background: #00e067;
}
</style>
