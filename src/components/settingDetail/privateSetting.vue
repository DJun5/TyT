<template>
  <div class="wrap">
    <mu-appbar :z-depth="0" title="谁能看我的信息" text-color="black"   >
      <mu-button icon slot="left" @click="goBack">
        <mu-icon color="red" value="arrow_back"></mu-icon>
      </mu-button>
      <mu-button icon slot="right" disabled  >
      </mu-button>
    </mu-appbar>
    <div class="person_top">
      <mu-list>
        <mu-list-item   button :ripple="false">
          <mu-radio :value="1"  @click="ToRight('公开')" :ripple="false" uncheck-icon="none" checked-icon="done" v-model="normal.radio"  label="公开"></mu-radio>
        </mu-list-item>

        <mu-list-item   button :ripple="false">
          <mu-radio :value="2" @click="ToRight('同系部')"  :ripple="false" uncheck-icon="none" checked-icon="done"  v-model="normal.radio"  label="同系部"></mu-radio>
        </mu-list-item>

        <mu-list-item   button :ripple="false">
          <mu-radio :value="3"  @click="ToRight('私密')" :ripple="false" uncheck-icon="none" checked-icon="done" v-model="normal.radio"  label="私密"></mu-radio>
        </mu-list-item>

        <mu-list-item   button :ripple="false">
          <mu-radio :value="4" @click="ToRight('同专业')"  :ripple="false" uncheck-icon="none" checked-icon="done" v-model="normal.radio"  label="同专业"></mu-radio>
        </mu-list-item>

        <mu-list-item v-if="right5"   button :ripple="false">
          <mu-radio :value="5"  @click="ToRight('同班级')"  :ripple="false" uncheck-icon="none" checked-icon="done" v-model="normal.radio"  label="同班级"></mu-radio>
        </mu-list-item>

        <mu-list-item   button :ripple="false">
          <mu-radio :value="6" @click="ToRight('已关注的人')"  :ripple="false" uncheck-icon="none" checked-icon="done" v-model="normal.radio"  label="已关注的人"></mu-radio>
        </mu-list-item>

    </mu-list>
      </div>
    </div>
</template>
<script>
  export  default{
    data:function(){
      return{
        right_icon:"done",
        normal: {
          checkbox: true,
          radio: 1,
          switch: false
        }
      }

    },
    methods:{
      ToRight(val){
          console.log(val);

              },
      goBack() {
        if (this.leftAction) {
          this.leftAction.call(this.$parent);
        } else {
          if (history.length > 1) {
            this.$router.go(-1);
          } else {
            this.$router.push('/user/moreSetting');
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

.mu-radio-label{
    text-align:center;
    width: 320px;
  }
</style>
