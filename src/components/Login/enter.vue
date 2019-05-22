<template>
    <div class="box">
      <mu-text-field  prefix="+86" type="number" class="phone" v-model="user_phone" label="电话号码" label-float  icon="smartphone"></mu-text-field>
      <mu-text-field  suffix="" class="code" v-model="verify_code" label="验证码" label-float  icon="locked">
        <mu-button :ripple="false" class="get_code" flat>获取验证码</mu-button>
      </mu-text-field>
      <mu-button  :ripple="false"   class="login_btn" :disabled="shows" >登录</mu-button>
      <div class="bottoms">
        <span >登录注册代表同意
          <a href="#">用户协议</a>
        和
        <a href="#">隐私政策</a>
          </span>
      </div>
    </div>
</template>
<script>
   export default {
     data: function () {
       return {
         user_phone:'',
         verify_code:''
       }
     },
     methods:{

     },
     computed:{
       shows(){
         let shows=true;
         if(this.verify_code.length!=0&&this.user_phone.length!=0)
               shows=false;
         else
               shows=true;

            return shows
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
  .phone{
    margin-left: 3%;
    margin-top: 2%;
  }
  .code{
    margin-left: 3%;

  }
.mu-input__focus{
  color: #009688;
}
  .get_code{
    width: 20px;
    height: 25px;
    background-color: #e0e0e0;
    font-size: 11px;
    margin-top: -15px;
    border-radius: 20px;
  }
  .login_btn{
    width: 90%;
    height: 10%;
    box-shadow: none;
    margin-left: 5%;
    margin-top: 10%;
    border-radius: 20px;
    font-size: 17px;
    background-color:#00b0ff;
  }
  .bottoms{
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 10%;
    text-align: center;
    font-size: 13px;
  }
.regrading{
  font-size: 13px;
  background-color: red;
}
</style>
