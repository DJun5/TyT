<template>
  <div class="wrap">
    <mu-appbar :z-depth="0" title="更多设置" text-color="black"   >
      <mu-button icon slot="left" @click="goBack">
        <mu-icon color="red" value="arrow_back"></mu-icon>
      </mu-button>
      <mu-button icon slot="right" disabled  >
      </mu-button>
    </mu-appbar>
    <div class="person_top">
      <mu-list>
        <mu-list-item   button :ripple="false">
          <mu-list-item-title >账号和安全</mu-list-item-title>
          <mu-list-item-action>
          </mu-list-item-action >
          <mu-icon  value="keyboard_arrow_right" :size="32"></mu-icon>
        </mu-list-item>

        <mu-list-item  @click="ToPrivate"   button :ripple="false">
          <mu-list-item-title >隐私设置</mu-list-item-title>
          <mu-list-item-action>
          </mu-list-item-action >
          <mu-icon  value="keyboard_arrow_right" :size="32"></mu-icon>
        </mu-list-item>

        <mu-list-item   button :ripple="false">
          <mu-list-item-title >关于</mu-list-item-title>
          <mu-list-item-action>
          </mu-list-item-action >
          <mu-icon  value="keyboard_arrow_right" :size="32"></mu-icon>
        </mu-list-item>

      </mu-list>
    </div>
  </div>
</template>
<script>
  export  default{
    data:function(){
      return{

      }

    },
    methods:{
      ToPrivate(){
        this.$router.push("/setting/privateSetting")
      },
      goBack() {
        if (this.leftAction) {
          this.leftAction.call(this.$parent);
        } else {
          if (history.length > 1) {
            this.$router.go(-1);
          } else {
            this.$router.push('/user/setting');
          }
        }
      }
    }


  }
</script>
<style lang="less" scoped>
  .wrap{
    width: 100%;
    height:100%;
    position: absolute;
  }
  .mu-appbar{
    background-color: transparent;
    width: 100%;
    text-align: center;
  }

  .person_top{
    width: 100%;
    height: 22%;
    margin-top: -10px;

  }
  .person_bottom{
    width: 100%;
    height:60%;

  }
</style>
