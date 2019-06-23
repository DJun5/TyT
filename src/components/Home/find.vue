<template>
  <div  class="card_first" id="find"   ref="container">
    <div>

    <mu-load-more @refresh="refresh" :refreshing="refreshing"  loading-text="加载中...."  :loading="load_more" @load="load">
    <!--卡片展示-->
      <mu-card  v-for="item,index in userDynamic"  :key="index">
        <mu-card-header  :title="item.nickname"  :sub-title="item.signature">
          <mu-avatar slot="avatar">
            <img   :src="item.userHeadImg[0]" ><!--//userHeadImg[0]-->
          </mu-avatar>
          <!--加关注-->
          <mu-button   class="mu_add" textColor="red"  v-show="item.title!==attention" @click="add_attention(item.nickname)"   round small >
            <mu-icon :size="20"  value="add" ></mu-icon>
            关注
          </mu-button>
          <!--加关注-->
          <!--更多-->
          <mu-menu  class="mu_bu">
            <mu-button icon  :ripple="false" >
              <mu-icon :size="30" value="more_horiz"></mu-icon>
            </mu-button>
            <mu-list slot="content">
              <mu-list-item button  >
                <mu-icon :size="20"  value="warning" ></mu-icon>
                <mu-list-item-title>举报</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-icon :size="20"  value="turned_in_not" ></mu-icon>
                <mu-list-item-title>收藏</mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </mu-menu>
          <!--更多-->
        </mu-card-header>
        <mu-card-text>
          {{item.content}}
        </mu-card-text>
        <mu-card-media>
          <img  v-for="list,counts in imageList"  v-lazy="list[0]"  :src="list" :key="counts"   class="images"  :style="{width:100/imageList.length+'%'}" >
        </mu-card-media>
        <mu-card-actions>
          <!--点赞-->
          <mu-checkbox  :ripple="false" v-model="likes" :value="item.title" @change="click_favorite(item.title)" class="mu_favorite"  uncheck-icon="favorite_border"  checked-icon="favorite"></mu-checkbox>
          <!--评论-->
          <mu-button icon  :ripple="false"   class="mu_textsms" @click="comment(index)" >
            <mu-icon :size="22" value="textsms" ></mu-icon>
          </mu-button>
          <!--评论-->
          <!--分享-->
          <mu-button icon  :ripple="false" class="mu_share">
            <mu-icon :size="22" value="share"  ></mu-icon>
          </mu-button>
          <!--分享-->
          <!--收藏-->
          <mu-checkbox  :ripple="false" v-model="collect"   :value="item.title" @change="click_turn(item.title)"  class="mu_turned"   uncheck-icon="turned_in_not" checked-icon="turned_in"  />
          <!--收藏-->
        </mu-card-actions>
      </mu-card>
      </mu-load-more>
    <!--卡片展示-->
      <!---------返回顶部--------------->
      <div class="back_top" v-if="back_show">
        <mu-button fab  :ripple="false" color="teal"     @click="BackTop">
          <mu-icon  value="keyboard_arrow_up" color="white" :size="24"  ></mu-icon>
        </mu-button>
      </div>
      <!---------返回顶部--------------->
      <!---->
      <Click_refresh v-if="loading" :restart="loading"  v-on:if_load="if_load" ></Click_refresh>
      <!---->
</div>
</div>
</template>
<script>
import TestData from "../../../static/Json/TestData.json";
import { Toast } from 'mint-ui';
import {encryptBy,decryptBy} from '../../../config/common';
import { Indicator } from 'mint-ui';
import Click_refresh from '@/components/Common/Click_refresh'
export default {
  data: function() {
    return {
      num:5,
      refreshing: false,
      loading: false,
      icons:false,
      open: false,
      add_show:true,
      userDynamic:[],
      likes:[],
      load_more: false,
      collect:[],
      attention:'',
      back_show:false,
      imageList:[],
      userHeadImg:[]
    }
  },
    created(){ //获取json对象
    this.GetData();
    },
  props:{
    DataLoad_find:{
      type: Boolean,
      default:false
    }
  },
  watch:{
    DataLoad_find(){
      if(this.DataLoad_find)
      {
        this.GetData()
      }
    }
  },
  components:{
    Click_refresh
  },
  mounted () {
    this.$nextTick( function() {
      window.addEventListener('scroll', this.onScroll, true);//监听滑动
    });
  },
  methods: {
    if_load(){
      this.loading=false;
      this.GetData();
    },
    BackTop(){
      this.$refs.container.scrollTop = 0;//距离顶部的距离为0
    },
    onScroll(){
      let scrollTop =document.getElementById("find").scrollTop;
      if(scrollTop>=2000)//判断滑动到那一位置
      {
        this.back_show=true;
      }
      else {
        this.back_show=false;
      }
    },
    GetData(){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      const  _this=this;
      //this.GLOBAL.Api_Host
      this.$axios.get(this.GLOBAL.Api_Host+'/Dynamic/queryAll.do', {
          headers: {'Content-Type': 'application/json;charset=utf-8'},// 设置传输内容的类型和编码
          withCredentials: true// 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
        })
        .then(function (response) {
          console.log(response.data.data);
          if(response.data.data!=null)
          {
            _this.GetSum(response.data.data);
            _this.loading=false
          }
          else{
            Toast({
              message: '数据异常',
              position: 'middle',
              duration: 1000
            });
            _this.loading=true
          }

          Indicator.close();

        })
        .catch(function (response) {
          Indicator.close();
          Toast({
            message: '网络连接已断开，请检查网络设置.',
            position: 'middle',
            duration: 1000
          });
          _this.loading=true
        });

    },//获取数据
    GetImage(img){
      var images=[];

      this.$axios.get(this.GLOBAL.Api_Host+'/images/'+img,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "token": this.token  // 必须添加的请求头
        },
        responseType: "arraybuffer"
      }).then(function(response){
          return 'data:image/jpg;base64,' + btoa(
              new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
      }).then(data=>{
        images.push(data)
        });
      return images;
      },
    add_attention(name) {
        /* this.$store.dispatch('add_attention',name);*/
        this.attention=name;
         console.log(name);
     },//点击加关注
    refresh () {
      this.refreshing = true;
      setTimeout(() => {
        this.refreshing = false;
      this.num =4;
      this.GetData();
    }, 2000)
    },//刷新
    GetSum(data){
      this.userDynamic=[];
      for(var index in data)
      {
        this.imageList=[];
        for(var i=1;i<10;i++)
        {
          if(data[index]["infoImg"+""+i+""]==null)
          {
            break;
          }
          this.imageList.push(this.GetImage(data[index]["infoImg"+""+i+""]));//获取发布动态的图片
        }
        data[index].userHeadImg=this.GetImage(data[index].userHeadImg);//获取头像
        this.userDynamic.push(data[index]);//获取发布人的信息
        console.log(this.imageList);
   /*   if(index==this.num)
      {
        break;
      }*/
    }
    },
    load(){
//      this.load_more = true;
//      setTimeout(() => {
//        this.load_more = false;
//        this.num+=5;
//        this.GetSum();
//    }, 2000)
    },//加载更多
    click_favorite(name){
      var if_favorite=this.likes.includes(name);
     if(if_favorite)
       console.log(name+"+1");
      else
       console.log(name+"-1");
     },//点赞
    click_turn(name){
      var if_collect=this.collect.includes(name);
      if(if_collect)
        console.log(name+"已收藏");
      else
        console.log(name+"移除收藏");

    },//收藏
    comment(index){
      this.$router.push('/detail');
    },

    scrollEvent (){

    }
  },
  destroyed () {
    this.$nextTick( function(){
      window.removeEventListener('scroll', this.onScroll)
    });

  }
    }

</script>
<style scoped lang="less">
 @import url('../../assets/less/common.less');
 @import "../../../static/css/Card.css";
 .mu-circle-spinner{
   border-color:#009688;
 }
.card_first {
  width: 100%;
  position: absolute;
  z-index:200;
  overflow: auto;
  top:0;
  left:0 ;
  bottom:25px; /*关键*/
}
 .card_first::-webkit-scrollbar {/*高宽分别对应横竖滚动条的尺寸*/
   width: 0px;
   height: 0px;
 }
 .images{
   float: left;
   min-width:33%;
   height:100px;
   padding: 1px;
   max-width:100%;
 }
 .mu-card-actions{
   top: 10px;
   clear:both;
 }
 image[lazy=loading] {
   float: left;
   min-width:33%;
   height:100px;
   padding: 1px;
   max-width:100%;
   color: red;
   background-color: red;
 }
.mu-card{
  max-width: 750px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 15px;
}
.back_top{
    position:fixed;
    z-index:100;
    top:82%;
    right:5%;
}

</style>


