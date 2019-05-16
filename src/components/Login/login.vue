<template>
    <div class="login_box">
        <div class="logo">
          <img class="imgs" src="../../assets/images/logo2.png">
        </div>
      <div   class="swiper-container "  id="login"  ref="loginSwiper" >
          <div class="swiper-wrapper" >
            <div class="swiper-slide "  >
              <!--登录界面-->
                <Enter/>
            </div>
            <div class="swiper-slide "  >
                <!---注册界面---->
              <Register/>
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

    };
  },
  created() {
    _self = this;
  },
  mounted() {
    this.$nextTick(() => {
      this.establish_swiper()
  })
  },
  methods: {
    establish_swiper(){
      var _this = this;//区别开data中的this和swiper中的this
      var swiper = new Swiper("#login", {
        effect : 'flip',
        loop:true,
        flipEffect: {
          slideShadows : true,
          limitRotation : true
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
  },
  computed: {
    getIsLogin() {
      return this.$store.state.user.is_login
    }
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
    width: 30%;
    height: 15%;
     margin-left:35%;
    margin-top:20%;

  }

.swiper-container{
  width: 80%;
  height: 60%;
  margin-left: 10%;
  margin-top: 8%;
  border-radius: 5px;
  background-color: transparent;
}
  .imgs{width: 100%;
      height:100%;
  }
</style>
