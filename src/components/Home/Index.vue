<template>
    <Layout :has_share="false"  >
      <mu-appbar class="app_bar" :z-depth="1" slot="header">
        <!--上部Tabs-->
        <mu-tabs :value="active1" center    class="tabs"  @change="handleChange"   >
          <mu-tab value="attention" >关注</mu-tab>
          <mu-tab value="find" >发现</mu-tab>
          <mu-tab value="recommend">推荐</mu-tab>
        </mu-tabs>
        <!--上部Tabs-->

       <!--搜索框-->
        <div class="search">
          <mu-icon :size="22" class="mu-icons" color="#bdbdbd" value="search" ></mu-icon>
          <mu-button flat  class="search-input">搜索内容暂定</mu-button>
        </div>
        <!--搜索框-->

      </mu-appbar>
      <!--主内容-->
      <div class="containers" slot="container">

        <div class="swiper-container "    id="swiper_tab"  ref="mySwiper" >
          <div class="swiper-wrapper" >

            <div class="swiper-slide slidepage"  >
              <div class="swiper-container scroll">
                <div class="swiper-wrapper">
                  <div class="swiper-slide slidescroll">
                    <Attention/>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide slidepage"  >
              <div class="swiper-container scroll">
                <div class="swiper-wrapper">
                  <div class="swiper-slide slidescroll">
                    <Find/>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide slidepage"  >
              <div class="swiper-container scroll">
                <div class="swiper-wrapper">
                  <div class="swiper-slide slidescroll">
                    <Recommend/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <!--主内容-->
    </Layout>
</template>
<script>
let _self;
import Layout from '@/components/Layout';
import Find from '@/components/Home/find';
import Attention from '@/components/Home/attention';
import Recommend from '@/components/Home/recommend';
import Swiper from "swiper";
export default {
    data: function() {
        return {
          loading: 'init',
          active1: "find",
          index:0
        }
    },
    created() {
    },
    mounted() {
      this.$nextTick(() => {
        this.establish_swiper()
        this.establish_swiper_scroll()
    })
    },
    methods: {
      handleChange(val) {
        this.active1 = val;
        if(val=="find")
          this.swiper.slideTo(1,0,false);
        else if(val=="attention")
          this.swiper.slideTo(0,0,false);
        else if(val=="recommend")
          this.swiper.slideTo(2,0,false);
      }, //改变选中状态
      establish_swiper_scroll(){
        var scrollSwiper = new Swiper('.scroll', {
          direction: 'vertical',
          freeMode: true,
          slidesPerView: 'auto',
          mousewheel: {
            releaseOnEdges: true
          }
        })
      },
      establish_swiper(){
        var _this=this;//区别开data中的this和swiper中的this
        var swiper= new Swiper("#swiper_tab", {
          initialSlide: 1,
          noSwiping : true,
          noSwipingClass : 'stop-swiping',
          resistanceRatio: 0,
          watchSlidesProgress: true,
          on: {
            transitionStart: function() {
              if (this.realIndex== 0) {
                _this.active1 = "attention";
              }
              else if(this.realIndex==1){
                _this.active1="find";
              }
              else if(this.realIndex==2){
                _this.active1 = "recommend";
              }
            }
          }
        });
      }
    },
    computed: {
      swiper(){
        return this.$refs.mySwiper.swiper;
      }
    },
    components: {
        Layout,
        Find,
      Attention,
      Recommend
    }

};

</script>
<style scoped lang="less">
@import url('../../assets/less/common.less');
.app_bar{
  position: relative;
  width: 100%;
  height:80px;
}

.containers{
  width:100%;
  position: absolute;
  height: 80%;
  top:82px;
  bottom: 55px;
  overflow: auto;
}
.swiper-container{
  width: 100%;
  height: 100%;
}

.mu-appbar {
  background-color:transparent;

}

.footer_wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}
.tabs{
   background-color:transparent;
   width: 55%;
   position: absolute;
   margin-top: -50px;
   margin-left: 20%;

}
.search {
  position: absolute;
  margin-top: 5px;
  width:92%;
  height: 26px;
}
.mu-icons{
  z-index: 1;
  position: absolute;
  margin-top: 2px;
}
.search-input {
  position: absolute;
  width:100%;
  color:#bdbdbd;
  text-align: center;
  background-color: #eeeeee;
  border:none;
  height: 25px;
  font-size: 15px;
  border-radius: 15px;
}
.mu-tab{
  color: #bdbdbd;
}
.mu-tab-active {
  color: black;
}
.mu-tab-link-highlight{
  width: 50px;
}
</style>
