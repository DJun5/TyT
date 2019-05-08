<template>
    <div class="wrap" slot="container" >
      <mu-paper >
        <mu-appbar >
          <mu-button icon slot="left" @click="GoBack">
            <mu-icon color="red" :size="28" value="arrow_back"></mu-icon>
          </mu-button>
          <span class="mu_text">详情</span>
        </mu-appbar>
        </mu-paper>
      <div class="context">
        <mu-card >
          <mu-card-header title="Myron Avatar" sub-title="sub title">
            <mu-avatar slot="avatar">
            <!--  <img src="../../assets/images/uicon.jpg">-->
            </mu-avatar>
          </mu-card-header>
          <mu-card-media title="Image Title" sub-title="Image Sub Title">
           <!-- <img src="../../assets/images/sun.jpg">-->
          </mu-card-media>
          <mu-card-text>
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
            调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
            似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
            找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
          </mu-card-text>
          <mu-card-actions>
            <mu-button flat>Action 1</mu-button>
            <mu-button flat>Action 2</mu-button>
          </mu-card-actions>
        </mu-card>
      </div>
      <div class="footer_wrap" >
        sds
        </div>
    </div>
</template>
<script>
  import Layout from '@/components/Layout';
  export default {
    data: function() {
      return {

      };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      GoBack(){
        if (this.leftAction) {
          this.leftAction.call(this.$parent);
        } else {
          if (history.length > 1) {
            this.$router.go(-1);
          } else {
            this.$router.push('/');
          }
        }
      }
    },
    components: {

    }
  };

</script>
<style scoped lang="less">
  .wrap {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .mu_text{
    color:#000000;
    font-size: 15px;
    margin-left:6rem ;
  }
  .context{
    width: 100%;
    position: absolute;
    height:100%;
  }
  .footer_wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 3.5rem;
    background-color: #00acc1;
  }
  .mu-appbar{
    background-color: transparent;
  }
  .mu-elevation-4{
   box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0), 0 4px 5px 0 rgba(0, 0, 0, 0), 0 1px 10px 0 rgba(0, 0, 0,0);
  }
</style>
