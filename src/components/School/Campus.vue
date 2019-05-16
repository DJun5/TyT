<template>
  <Layout :has_share="false">
  <div class="wrap" slot="container"  >
          <!-----------头部------------->
          <div id="skr" class="header">
          <mu-appbar >
            <div class="search" slot="left">
              <mu-icon :size="22" class="mu-icons" color="#bdbdbd" value="search" ></mu-icon>
              <mu-button flat   class="search-input">搜索内容暂定</mu-button>
            </div>
            <mu-button icon  :ripple="false" >
              <mu-icon class="mu_accounts" value="account_box" color="#009688"></mu-icon>
            </mu-button>
            <mu-button   :ripple="false"  icon slot="right" >
              <mu-icon value="add"></mu-icon>
            </mu-button>
          </mu-appbar>
            <!---------------四个功能模块------------------->
           <div class="mu_tabs" >
             <mu-button icon :ripple="false" class="mu_bus" v-for="item,index in tabs" @click="turn(item.path)" :key="index"  >
               <mu-icon  :value="item.icon" class="mu_bu_icons" :size="38" :color="item.color"></mu-icon>
               <span class="mu_span">{{item.text}}</span>
            </mu-button>
           </div>
            <!---------------四个功能模块------------------->
            </div>
    <!-----------头部------------->
       <!-------------内容-------------->
          <div class="content">
             <div class="content_lun">
               <!------轮播公告------>
                <div class="lunbo">
                  　<div class="swiper-containers" id="lunbos">
                  　 <div class="swiper-wrapper">
                  <div class="swiper-slide"><img class="img"  src="../../assets/images/a.jpeg"></div>
                  <div class="swiper-slide"><img class="img"  src="../../assets/images/bg.png"></div>
                  <div class="swiper-slide"><img class="img"  src="../../assets/images/default.jpeg"></div>
                  <div class="swiper-slide"><img class="img"  src="../../assets/images/tets.png"></div>
                  </div>
                  　<div class="swiper-pagination"></div>
                  </div>
                </div>
               <!------轮播公告------>
             </div>
          </div>
       <!-------------内容-------------->
        </div>

  </Layout>
</template>
<script>
let _self;
import Layout from '@/components/Layout';
import Swiper from "swiper";
export default {
    data: function() {
        return {
          tabs:[
            { icon:"person_outline",
              text:"寻人",
              color:"#2196f3",
              path:"/Campus/FindPeople"
            },
            { icon:"account_balance",
              text:"查组织",
              color:"#009688",
              path:"/Campus/FindOrganziation"
            },
            { icon:"book",
              text:"查专业",
              color:"#ffab40",
              path:"/Campus/FindMajor"
            },
            { icon:"near_me",
              text:"办事流程",
              color:"#00e676",
              path:"/Campus/WorkProcess"
            }
          ]
        };
    },
  components: {
    Layout
  },
    methods: {
      turn(val){
        this.$router.push(val);
      }
    },
  mounted(){

    var swiper_lunbo = new Swiper("#lunbos", {
      loop:true,
      autoplay:{
        delay:3000,
        disableOnInteraction: false
      },
      freeMode:false,
      touchRatio : 1,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 1
      }
    });

  }

};
</script>

<style scoped lang="less">
@import url('../../assets/less/common.less');

.header{
  width: 100%;
  height:9rem;
}
.wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: auto;
}

.wrap::-webkit-scrollbar {/*高宽分别对应横竖滚动条的尺寸*/
  width: 0px;
  height: 0px;
}
.content{
   width: 100%;
   height: 70%;
   position: absolute;
}
.img{
  width:100%;

}
.mu-appbar{
     background-color:transparent;
     color: #2e2e2e;
     text-align: center;
  }
.mu-elevation-4{
  box-shadow: none;
}

.search{
  width:15rem;
  height: 30px;
  margin-left: 8px;
}
.mu-icons{
  z-index: 1;
  position: absolute;
  margin-top: 2px;
}
.mu_accounts{
  margin-top: 11px;
}

.mu_tabs{
  height: 20%;
  width: 100%;
  position: absolute;
}
.mu_bus{
  width: 80px;
  height: 80px;
  margin-top: 3%;
  margin-left: 2%;
}
.mu_span{
   position: absolute;
   bottom:15px;
   font-size:13px;
}
.mu_bu_icons{
  position: absolute;
  top:2px;
}
.search-input {
  width:100%;
  color:#bdbdbd;
  text-align: center;
  background-color: #eeeeee;
  border:none;
  height: 25px;
  font-size: 15px;
  border-radius: 5px;
}
  .content_lun{
    width: 100%;
    height: 30%;
    margin-top:1rem;
    background-color: #eeeeee;
  }
  .lunbo{
    overflow: hidden;
    width: 100%;
    height:0;
    padding-bottom: 30.48%;
    top:0.8rem;
    position: relative;
  }
.swiper-container{
  position:static;
}
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
  bottom:0px;
}

</style>
