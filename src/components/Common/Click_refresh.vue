<template>
  <div class="wrap" >
    <mu-button flat class="content" :ripple="false" @click="refresh">
      点击刷新
    </mu-button>
  </div>
</template>
<script>
  export default{
    data(){
      return{
      }
    },
    methods:{
     refresh(){
       this.$emit("if_load",true);
     },
      props:{
        restart:{
          type:Boolean,
          default:false
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .wrap{
    width: 100%;
    height: 100%;
    position: absolute;

  }
  .content{
    width: 100%;
    height: 100%;
    color:#e0e0e0;
    font-size: 20px;
  }
</style>
