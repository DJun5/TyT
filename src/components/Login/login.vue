<template>
    <div class="login_box">
        <div class="logo">
          <img class="imgs" src="../../assets/images/logo2.png">
        </div>
        <div class="login_tab">
          <mu-tabs :value="active"  indicator-color="transparent"  @change=" handleChanges" full-width>
            <mu-tab value="enter">普通登陆</mu-tab>
            <mu-tab value="register">游客登陆</mu-tab>
          </mu-tabs>
        </div>
      <div   class="swiper-container "  id="login"  ref="loginSwiper" >
          <div class="swiper-wrapper" >
            <div class="swiper-slide "  >
              <!--普通登陆界面-->
              <Register/>
            </div>
            <div class="swiper-slide "  >
                <!---游客登陆界面---->
              <Enter/>
            </div>
            </div>
      </div>
    </div>
</template>
<script>
let _self;
import Layout from '@/components/Layout';
import Enter from '@/components/Login/enter';
import Register from '@/components/Login/register';
import Swiper from "swiper";
export default {
  data: function() {
    return {
            active:"enter"
    };
  },
  created() {
    _self = this;

  },
  mounted() {
    this.establish_swiper()
  },
  methods: {
    establish_swiper(){
      var _this = this;//区别开data中的this和swiper中的this
      var login_swiper = new Swiper("#login", {
        effect : 'flip',
        flipEffect: {
          slideShadows : true,
          limitRotation : true
        },
        on:{
          transitionStart: function() {
            if (this.realIndex== 0) {
              _this.active ="enter";
            }
            else if(this.realIndex==1){
              _this.active="register";
            }
          }//滑动tab相应切换
        }
      });
    },
    loginEvent() {
      // 利用vuex设置登录状态
      this.$store.commit('SET_IS_LOGIN', true);
      this.$router.push('/');
    },
    loginOut() {
      this.$store.commit('SET_IS_LOGIN', false);
    },
    handleChanges(val) {
      this.active = val;
      if(val=="enter")
        this.swiper.slideTo(0,0,false);
      else if(val=="register")
      {
        this.swiper.slideTo(1,0,false);
      }
    } //改变选中状态

  },
  computed: {
    getIsLogin() {
      return this.$store.state.user.is_login
    },
    swiper(){
      return  this.$refs.loginSwiper.swiper;
    }, //全局使用swiper对象
  },
  components: {
    Layout,
    Register,
    Enter
  }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login_box {
  width: 100%;
  height: 100%;
  position: absolute;
  background:url("../../assets/images/molv.jpg") no-repeat;
  background-size: cover;
}
  .logo{
    width: 112px;
    height: 112px;
    margin-left:33%;
    margin-top:15%;
    position:fixed;
  }
.swiper-container{
  width: 80%;
  margin-top:60%;
  height: 50%;
  border-radius:10px;
}
  .imgs{
      width: 100%;
      height:100%;
  }
  .login_tab{
    width: 80%;
    position: absolute;
    height: 8%;
    margin-top: 45%;
    margin-left:10%;
  }
  .mu-tabs{
    background-color: transparent;
  }
</style>
