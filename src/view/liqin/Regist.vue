<template>
    <div>
        <div class="loGin">
            <div class="top-elm">
                <img src="../../../static/images/liqin/logo_03.gif" alt="">
            </div>
            <div class="Phone">
                <div class="center-elm">
                    <section class="MessageLogin">
                        <input type="text" placeholder="用户名" v-model="username"/>
                        <button class="verify">获取验证码</button>
                    </section>
                    <section class="MessageLogin">
                        <input type="password" placeholder="验证码" v-model="password"/>
                    </section>
                    <section class="MessageLogin">
                        <i>新用户登录即自动注册，并表示已同意</i>
                        <a href="javascript:;" class="yongHu">《用户服务协议》</a>
                    </section>
                    <!-- <router-link to='/profile'> -->
                    <p class="MessageP">
                    <button class="MessageLogin disem" @click.stop='register'>注册</button>
                    </p>
                    <!-- </router-link> -->
                </div>
                <a href="" class="About">关于我们</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        register(){
            this.axios.post('http://10.36.134.164:3000/register',{
                username: this.username,
                password: this.password
            })
            .then(res => {
                if(res.data.code==2){
                    document.cookie = "usernname=" + res.data.username + ";expires=" + new Date('2018-11-30').toUTCString();
                    this.$router.push({
                        path: 'profile'
                    })
                }else{
                    alert('注册失败'+res.data.msg );
                    // console.log(res)
                }
            })
        }
    }

}
</script>

<style scoped>
    .loGin{
        min-height: 1.98rem;
    }
    .Phone{
        margin-top: .2rem;
    }
    .center-elm{
          width: 85%;
          margin:  0 auto;
    }
    .MessageP{
        display: flex;
    }
    .MessageLogin{
        position: relative;
        margin-bottom: .16rem;
        height: .48rem;
        font-size: .18rem;
        background: #fff;
        color: #9a9a9a;
    }
    .MessageLogin input{
        width: 100%;
        height: 100%;
        border-radius: .05rem;
        border: 1px solid #c1c1c1;
        padding: 0 .1rem;
        outline: none;
        font-size: .16rem;
    }
    .verify{
        border: 0;
        outline: none;
        background: 0;
        position: absolute;
        top: 30%;
        right: 0;
        color: #d6d6d6;
    }
    .center-elm section{
        text-align: center;

    }
    .top-elm{
        margin-top: .4rem;
        text-align: center;
    }
    .top-elm img{
        width: 36%;
        height: 36%;
    }
    .yongHu{
        color: #008eff;
    }

    .disem{
        margin-top: 0.16rem;
        width: 100%;
        height: .45rem;
        outline: none;
        background: #4cd96f;
        border: none;
        color: #fff;
        border-radius: 0.05rem;
        flex: 1;
        margin: 0 .05rem;
    }
    .Phone{
        text-align: center;
    }
    .About{
        margin-top: .1rem;
        display: block;
    }
</style>
