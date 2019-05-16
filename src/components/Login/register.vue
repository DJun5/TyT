<template>
 <div class="box">
   <mu-text-field   class="user_name" v-model="user_name" label="账号"  label-float  icon="account_circle"></mu-text-field>
   <mu-text-field  class="password" v-model="password" label="密码" label-float  :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'" icon="lock">
   </mu-text-field>
   <mu-button  :ripple="false"    class="login_btn"   :disabled="shows" >登录</mu-button>
   <div class="bottoms">
        <span >登录注册代表同意
          <a href="#">用户协议</a>
        和
        <a href="#">隐私政策</a>
          </span>
   </div>
 </div>
 </div>
</template>
<script>
  export default {
    data: function(){
      return {
           user_name:null,
           password:null,
           visibility: false,
           shows:true
      }
    }
  }
</script>
<style scoped lang="less">
  .box{
    width: 100%;
    height: 100%;
    background-color:white;
  }
  .user_name{
    margin-left:4%;
    margin-top: 2%;
  }
  .password{
    margin-left: 3%;

  }
  .mu-input__focus{
    color: #009688;
  }
  .login_btn{
    width: 90%;
    height: 10%;
    margin-left: 5%;
    box-shadow: none;
    margin-top: 10%;
    border-radius: 20px;
    font-size: 17px;
    background-color:wheat;
  }
  .bottoms{
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 10%;
    text-align: center;
    font-size: 13px;
  }
</style>
