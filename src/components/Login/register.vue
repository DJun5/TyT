<template>
 <div class="box">
   <mu-text-field   class="user_name" v-model="user_name" label="账号"  label-float  icon="account_circle"></mu-text-field>
   <mu-text-field  class="password" v-model="passwords" label="密码" label-float  :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'" icon="lock">
   </mu-text-field>
   <mu-button  :ripple="false"  @click="login"   class="login_btn"   :disabled="shows" >登录</mu-button>
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
        param.append('user',this.user_name);
        param.append('id',6494365930);
        param.append('pwd', this.passwords);
        param.append('btnLogin','%B5%C7%C2%BC');
        this.$axios.post('http://jiaowu.scetc.edu.cn/jiaoshi/bangong/check.asp',param, {
          headers: {'Content-Type': 'application/json;charset=utf-8'},// 设置传输内容的类型和编码
            withCredentials: true// 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
          })
          .then(function (response) {
          if(response.status==302)
          {
            that.$router.push("/");
          }
          else{
            that.$toast({
              message:'账号密码错误！!',
              position: 'middle',
              duration: 1500
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
  .bottoms{
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 10%;
    text-align: center;
    font-size: 13px;
  }
</style>
