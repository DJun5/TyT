<template>
  <body>
  <!-- 导航-->
  <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left" @click="Setting">
      <mu-icon value="keyboard_backspace" ></mu-icon>
    </mu-button>
    <mu-list-item-title style="text-align: center;">修改密码</mu-list-item-title>
  </mu-appbar>


  <mu-text-field v-model="value7" label="旧密码："
                 :action-icon="visibility ? 'visibility_off' : 'visibility'"
                 :action-click="() => (visibility = !visibility)"
                 :type="visibility ? 'text' : 'password'"
                 placeholder="" error-text="旧密码输入错误，请重试">

  </mu-text-field><br/>
  <mu-text-field v-model="value8" label="新密码："
                 :action-icon="visibility1 ? 'visibility_off' : 'visibility'"
                 :action-click="() => (visibility1 = !visibility1)"
                 :type="visibility1 ? 'text' : 'password'"
                 placeholder="" error-text="">
  </mu-text-field><br/>

  <mu-button color="gray" style="margin-left: 35px;" >确定</mu-button>

  <!--    <mu-icon value=":iconfont icon-dengji" ></mu-icon>-->

  </body>


</template>

<script>
  export default {
    name: "",
    data () {
      return {
        value7: '',
        value8: '',
        visibility: false,
        visibility1: false,
      }
    },
    methods: {

      Setting() {/*返回上一级*/
        if (this.leftAction) {
          this.leftAction.call(this.$parent);
        } else {
          if (history.length > 1) {
            this.$router.go(-1);
          } else {
            this.$router.push('');
          }
        }
      },
      deleteItem(index){
        this.list_one.splice(index, 1);

        // splice方法是删除数组某条数据，或者向某个位置添加数据
      },
    }
  }
</script>

<style scoped>
  .button-wrapper {
    text-align: center;
  }
  .mu-button {

    width: 80%;
  }
  .mu-primary-color{
    background-color: #f5f5f5;
    color: black;
  }
  .mu-item-title{
    padding-right: 40px;
  }
  .mu-appbar{

    box-shadow: 0px 0px 0px 0px black;
  }
  .panel{
    background-color: #eaeaea;
  }
  .mu-input.has-label {
    margin-top: 20px;
    min-height: 72px;
    width: 100%;
    padding: 20px;
    color: #474a4f;
  }
.mu-input-content{
  color: #474a4f;
}
</style>
