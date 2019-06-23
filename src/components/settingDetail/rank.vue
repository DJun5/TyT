<template>
  <div class="wrap">
  <!-- 导航-->
  <mu-appbar :z-depth="0" title="头衔设置" text-color="black"   >
    <mu-button icon slot="left" @click="goBack">
      <mu-icon color="red" value="arrow_back"></mu-icon>
    </mu-button>
    <mu-button icon slot="right" disabled  >
    </mu-button>
  </mu-appbar>
    <div class="person_top">
  <mu-list>
      <mu-list-item   button :ripple="false">
        <mu-list-item-action>
          <mu-icon style="margin-top: -12px;" value=":iconfont icon-qingtonghuiyuan" :size="26" color="#ea986c" ></mu-icon>
        </mu-list-item-action>
        <mu-list-item-action>
          <mu-radio :value="1" :label-left="true"  :ripple="false" @click="change('初生牛犊')"  uncheck-icon="none" checked-icon="done" v-model="radio"  label="初生牛犊" ></mu-radio>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item   button :ripple="false">
        <mu-list-item-action>
          <mu-icon style="margin-top: -12px;" value=":iconfont icon-huangjinhuiyuan" :size="26" color="#ff9100" ></mu-icon>
        </mu-list-item-action>
        <mu-radio :value="2" :label-left="true"  :ripple="false"  @click="change('世纪精灵')" uncheck-icon="none" checked-icon="done"  v-model="radio"  label="世纪精灵"></mu-radio>
      </mu-list-item>

      <mu-list-item   button :ripple="false">
        <mu-list-item-action>
          <mu-icon style="margin-top: -12px;" value=":iconfont icon-diamondzuanshi" :size="26" color="#03f13c" ></mu-icon>
        </mu-list-item-action>
        <mu-radio :value="3" :label-left="true"   :ripple="false" @click="change('墨山乡人')"  uncheck-icon="none" checked-icon="done" v-model="radio"  label="墨山乡人"></mu-radio>
      </mu-list-item>

      <mu-list-item   button :ripple="false">
        <mu-list-item-action>
          <mu-icon style="margin-top: -12px;margin-left: -3px;" value=":iconfont icon-dengji1" :size="35" color="#ea9518" ></mu-icon>
        </mu-list-item-action>
        <mu-radio :value="4" :label-left="true" :ripple="false" @click="change('一颗卤蛋')"   uncheck-icon="none" checked-icon="done" v-model="radio"  label="一颗卤蛋"></mu-radio>
      </mu-list-item>

      <mu-list-item    button :ripple="false">
        <mu-list-item-action  >
          <mu-icon  style="margin-top: -12px;" value=":iconfont icon-huabanfuben" :size="26" color="#1296db" ></mu-icon>
        </mu-list-item-action>
        <mu-radio :disabled="if_get" :value="5" :label-left="true"   @click="change('年少轻狂')" :ripple="false" uncheck-icon="none" checked-icon="done" v-model="radio"  label="年少轻狂"></mu-radio>
      </mu-list-item>

    </mu-list>
      </div>
    </div>



</template>

<script>
  export default {
    data:function() {
      return {
          radio: 1,
          if_get:true
      }
    },
    methods: {
      change(val){
        console.log(val);
      },
      goBack() {/*返回上一级*/
        if (this.leftAction) {
          this.leftAction.call(this.$parent);
        } else {
          if (history.length > 1) {
            this.$router.go(-1);
          } else {
            this.$router.push('');
          }
        }
      }
    }
  }
</script>

<style scoped>
  .person_top{
    width: 100%;
    height: 22%;
    margin-top: -10px;

  }
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
.mu-radio{
  width: 300px;

}
</style>
