<template>
    <div class="box">
      <mu-text-field  prefix="+86" type="number" class="phone" v-model="user_phone" label="电话号码" label-float  icon="smartphone"></mu-text-field>
      <mu-text-field  suffix="" class="code" v-model="verify_code" label="验证码" label-float  icon="locked">
        <mu-button :ripple="false" v-show="send_code" @click="send"  class="get_code" flat>{{send_text}}</mu-button>
        <mu-button :ripple="false"  v-show="!send_code" :disabled="!send_code" class="get_code" flat>{{timer}}s</mu-button>
      </mu-text-field>
      <mu-button  :ripple="false" @click="login"  class="login_btn" :disabled="shows" >登录</mu-button>
    </div>
</template>
<script>
   export default {
     data: function () {
       return {
         user_phone:'',
         verify_code:'',
         send_code:true,
         send_text:"获取验证码",
         timer:60,
         codes:''
       }
     },
     methods:{
       send(){//发送短信模板
         if(this.user_phone==='')
         {
           this.$toast({
             message:'电话号码不能为空!',
             position: 'middle',
             duration:1500
           });
           return ;
         }
         else if(!(/^1[34578]\d{9}$/.test(this.user_phone)))
         {
           this.$toast({
             message:'电话号码格式不对!',
             position: 'middle',
             duration: 1500
           });
           return ;
         }
         else{
         this.send_code = false;
         this.timer = 10;//点击button改变v-show的状态
         this.codes=this.random_code();
         this.send_note(this.user_phone,this.codes);
         let auth_timer = setInterval(() => {  //定时器设置每秒递减
             this.timer--;        //递减时间
         if (this.timer <= 0) {
           this.send_code = true;
           this.send_text = "重新获取";
           clearInterval(auth_timer)
         }
       },1000)
         }
       },
  login(){
    if(this.verify_code==this.codes)
    {
      this.$router.push("/");

    }
    else {
      this.$toast({
        message:'登陆失败!',
        position: 'middle',
        duration: 1500
      });
      return ;
    }
  },
       verif_phone(){

       },
       send_note(tel,code){//发送短信模板
           var that = this;
           that.send_code = false;
           console.log(this.user_phone);
           console.log(code);
            const text='验证码：'+code+',您正在使用登陆功能,该验证码仅用于身份验证,在五分钟之内有效，请勿泄露给其他人使用。'//短信内容模板，已经在sms平台绑定此内容，所以会比普通的更快到达用户手机。
             let param = new URLSearchParams();
          param.append('Uid','TyTT');
          param.append('Key', 'd41d8cd98f00b204e980');
          param.append('smsMob',tel);
          param.append('smsText',text);
         this.$axios.post("http://utf8.api.smschinese.cn",param,{
          headers:{
          'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
          },
          }).then(function (response) {
          console.log(response);

           console.log("Test");
          }
          );
    /*     const text='验证码：'+code+',您正在使用登陆功能,该验证码仅用于身份验证,在五分钟之内有效，请勿泄露给其他人使用。';
         var co=code+",60";
         console.log(co);
         let param = new URLSearchParams();
           param.append("sig", "f5939b373fa61fe864c914349cddb5fd");
           param.append( "tel","13709012631");
           param.append("appid", "5c5eb6ef76ec4440a5ec8b7ce0cd2239");
           param.append("templateid", "478766");
           param.append("time",1457336869);
           param.append("mobile", "13709012631");

           this.$axios.post('https://yun.tim.qq.com/v5/tlssmssvr/sendsms', param,{
             headers: {
               "Content-Type": "application/json;charset=utf-8",
               "Accept": "application/json"
             }
         }).then(function (response) {
             console.log(response.data.code);
             console.log(response.data.msg);
             console.log("Test");
           }
         )
*/
       },
       random_code(){//生成随机6位验证码
         let code="";
         let code_lenght=6;
         let random= new Array(0,1,2,3,4,5,6,7,8,9)
         for(let i=0;i<code_lenght;i++)//随机生成6位验证码
         {
           let index=Math.floor(Math.random()*10);
           code+=random[index]
         }
         return code
       },
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
