<!--
<template>
   <div class="content" v-loading="loading" :target="target" data-mu-loading-overlay-color="rgba(0, 0, 0, .6)" >

   </div>
</template>
<script>
  export default{
     data(){
       return {
          loading:true
       }
     },
    props:{
      target:{
        type:Element
      }

    },
    methods:{
      loading () {
        setTimeout(() => {
        this.loading=true;
      }, 3000)
      }
    }
  }
</script>
<style scoped lang="less">
.content{
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
-->
