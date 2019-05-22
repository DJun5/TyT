<template>
  <Layout :has_share="false">
    <div   slot="container"  >
      <div  class="content" >
        <!-----头部------->
        <div class="bar">
        <div class="left">
           <span class="ur_name">{{user_name}}</span>
          <mu-button icon class="set" :ripple="false" @click="ToSetting" color="red">
            <mu-icon value="settings" :size="26"></mu-icon>
          </mu-button>
        </div>
          <mu-avatar class="avatar" :size="52" @click="ToLogin">
            <img src="../../assets/images/a.jpeg">
          </mu-avatar>
          <mu-button icon class="bu_title"  >
            <mu-icon class="title_left" value=":iconfont icon-qingtonghuiyuan" color="#ea986c" :size="18" ></mu-icon>
              <span class="title_text">青铜选手</span>
             <span class="title_right"><mu-icon  value="chevron_right" :size="26"  slot="left" color="white"></mu-icon></span>
          </mu-button>
            <div class="right">
              <div  class="menu" >
              <div class="list_menu" v-for="item in menu_list" :key="item.text" >
                {{item.text}}
                <span class="sum">{{item.num}}</span>
              </div>
          </div>
          </div>
        </div>
        <!-----头部------->
        <mu-divider></mu-divider>
        <!-----功能区------->
        <div class="center">
          <mu-tabs :value="active" indicator-color="#009688"  @change="handleChanges" class="user_menu"   full-width>
            <mu-tab value="dynamic">动态{{dynamic_num}}</mu-tab>
            <mu-tab value="like">喜欢{{love_num}}</mu-tab>
            <mu-tab value="collect">收藏{{collect_num}}</mu-tab>
          </mu-tabs>
          <div  class="menu_content" ref="container" >
            <div class="swiper-container" id="swiper_menu" ref="myswiper"  >
              <div class="swiper-wrapper">

                  <div class="swiper-slide slidepage"  >
                    <div class="swiper-container scroll">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide slidescroll">
                          <Display :type="user_dynamic" ></Display>
                        </div>
                      </div>
                    </div>
                  </div>

                <div class="swiper-slide slidepage"  >
                  <div class="swiper-container scrolls">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide slidescroll">
                        <Display type="like" ></Display>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide slidepage"  >
                  <div class="swiper-container scroll">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide slidescroll">
                        <Display type="collect" ></Display>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div >
        <!-----功能区------->

      </div>
    </div>
  </Layout>
</template>
<script>
let _self;
import Layout from '@/components/Layout';
import Swiper from "swiper";
import Display from '@/components/Personal/display';
import TestData from "../../../static/Json/TestData.json";
export default {
    data: function() {
        return {
          menu_list:[
            {"text":"关注", "num":300},
            {"text":"粉丝", "num":20},
            {"text":"获赞数", "num":20}
          ],
          user_name:"Hello World",
          dynamic_num:0,
          love_num:0,
          collect_num:0,
          active:"dynamic",
          user_dynamic:"dynamics",
          loading:true
        };
    },
    created() {
     this.GetData();
    },
    mounted() {
        this.swiper_page();
        this.swiper_scroll();
    },
    methods: {
      GetData(){
        var jsonLength = 0;
        for (var i in TestData) {
          jsonLength++;
        }
        this.collect_num=jsonLength;
        this.love_num=jsonLength;
        this.dynamic_num=jsonLength;
        this.loading=false;
      },
      ToLogin(){
        this.$router.push("/login");
      },//跳转登录界面
      swiper_page(){
        var _this=this;//区别开data中的this和swiper中的this
        var swipers= new Swiper("#swiper_menu", {
          resistanceRatio:0,//边缘不反弹
          watchSlidesProgress: true,
          on: {
            transitionStart: function() {
              if (this.realIndex== 0) {
                _this.active ="dynamic";
              }
              else if(this.realIndex==1){
                _this.active="like";
              }
              else if(this.realIndex==2){
                _this.active = "collect";
              }
            },//滑动tab相应切换
          }
        });
      },//创建横向滑动的swiper
      swiper_scroll(){
        var scrollSwiper = new Swiper('.scrolls', {
          slidesOffsetBefore: 10,
          direction: 'vertical',
          freeMode: true,
          slidesPerView: 'auto',
          mousewheel: {
            releaseOnEdges: true
          }
        })
      },//创建竖向的swiper对象
      handleChanges(val) {
        this.active = val;
        if(val=="dynamic")
          this.swiper.slideTo(0,0,false);
        else if(val=="like")
        {

          this.swiper.slideTo(1,0,false);
        }
        else if(val=="collect")
        {

          this.swiper.slideTo(2,0,false);
        }
      } , //改变选中状态
      ToSetting(){
        this.$router.push("/user/setting");
      }
    },//跳转设置页面
    computed: {
        swiper(){
         return  this.$refs.myswiper.swiper;
        }, //全局使用swiper对象
      getLoading() {
        if (this.loading === 'loaded') {
          return true;
        } else {
          return false;
        }
      }
    },
    components: {
        Layout,
        Display
    }
};

</script>

<style scoped lang="less">
  .user_menu{
     width: 100%;
     color:#bdbdbd;
    background-color: transparent;

  }
  .mu-tab-active {
    color: black;
  }
  .mu-tab{
    margin-top:8px;
  }
  .swiper-container{
    width: 100%;
    height: 100%;

  }
.content{
  width: 100%;
  height: 100%;
  position: absolute;
}
.avatar{
  position: absolute;
  top:18%;
  left: 7%;
  z-index: 1;

}
  .bar{
    width: 100%;
    height: 30%;
     overflow: hidden;
  }
.right{
  width:100%;;
  height:100%;
  margin-top:-291px;
  margin-left:-20px;
  transform: skewY(-10deg) translate(20px,100px);
}
  .left {
    width: 100%;
    height: 100%;
    margin-left: -20px;
    margin-top: 120px;
    overflow: hidden;
    transform: skewY(-10deg) translate(20px,-190px);
    background: url("../../assets/images/ts.jpg") no-repeat;
    background-size:cover;


  }
  .center{
    width: 100%;
    height: 67%;
    position: absolute;
    bottom: 25px;
  }
  .ur_name{
    position: absolute;
    color: black;
    font-size: 25px;
    top: 45%;
    left: 7%;
    transform: skewY(10deg);
  }
  .set{
    position: absolute;
    top: 60%;
    transform: skewY(10deg);
    left: 80%;
  }
  .menu{
    width: 80%;
    height: 30%;
    position: absolute;
    margin-top: 7%;
    left: 22%;
    display: -webkit-flex;
    display: flex;
    transform: skewY(10deg);
    text-align: center;
    justify-content: space-around;

  }
  .list_menu{
    transform: skewY(0deg);
    width: 33%;
    height: 100%;
  }
  .sum{
   position: absolute;
    top: 25px;
    margin-left: -28%;
  }
  .menu_content{
    width: 100%;
    height: 80%;
  }
  .bu_title{
    top:11%;
    left:12%;
    position: absolute;
    z-index: 99;
    background-color:#e0e0e0;
    width: 30%;
    height:0;
    border-radius:20px;
  }
  .title_text{
    font-size: 12px;
    position: absolute;
    margin-left: 4px;
    margin-top: 1px;
  }
  .title_right{
   position: absolute;
    left: 73%;
    top: 1%;

  }
  .title_left{
    margin-left:-80px;
  }
</style>
