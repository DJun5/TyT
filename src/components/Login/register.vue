<template>
 <div class="box">
   <mu-text-field   class="user_name" v-model="user_name" label="账号"  label-float  icon="account_circle"></mu-text-field>
   <mu-text-field  class="password" v-model="passwords" label="密码" label-float  :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'" icon="lock">
   </mu-text-field>
   <mu-button  :ripple="false"  @click="login"   class="login_btn"   :disabled="shows" >登录</mu-button>

 </div>
 </div>
</template>
<script>
  export default {
    data: function(){
      return {
           user_name:'',
           passwords:'',
           visibility: false
      }
    },
    computed:{
      shows(){
        let shows=true;
        if(this.user_name.length!=0&&this.passwords.length!=0)
        {
          shows=false;
        }
        else
        {
          shows=true;
        }
        return shows;
      }
    },
    methods:{
      login(){
        var that=this;
        console.log(that.passwords);
        /*this.GLOBAL.Api_Host//移动端时*/
        let param = new URLSearchParams();
        param.append('uName',that.user_name);
        param.append('password',that.passwords);
        this.$axios.post('/api/User/login',param)
          .then(function (response) {
            console.log(response);
             if(response.data.data.length!=0)
             {
               that.$router.push("/user");
               that.GLOBAL.UserMessage=response.data.data;
             }
            else{
               this.$toast({
                 message:'账号密码错误!',
                 position: 'bottom',
                 duration:1500
               });
             }
          })
          .catch(function (response) {
              console.log(response)
          });
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

</style>
