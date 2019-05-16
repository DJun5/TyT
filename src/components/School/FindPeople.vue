<template>
  <div class="wrap">
  <mu-appbar :z-depth="0">
    <mu-button icon slot="left" @click="goBack">
      <mu-icon color="red" value="arrow_back"></mu-icon>
    </mu-button>
  </mu-appbar>
  </div>
</template>

<script>
  export  default  {
    data: function(){
      return {
      }
    },
    methods:{
      goBack() {/*返回上一级*/
        if (this.leftAction) {
          this.leftAction.call(this.$parent);
        } else {
          if (history.length > 1) {
            this.$router.go(-1);
          } else {
            this.$router.push('/Campus');
          }
        }
      }
    }

  }


</script>

<style scoped lang="less">
.wrap{
  width: 100%;
  height:100%;
  position: absolute;

}
.mu-appbar{
    background-color: transparent;
    width: 100%;
  }
</style>
