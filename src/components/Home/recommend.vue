<template>
  <div class="re_container" ref="container">
    <div>
      <mu-load-more @refresh="refresh" :refreshing="refreshing"  loading-text="加载中...." :loaded-all="load_all"  class="loads"  :loading="load_more" @load="load">
        <!--卡片展示-->
        <mu-card  v-for="item,index in userDynamic"  :key="index">
          <mu-card-header  :title="item.username"  :sub-title="item.signature">
            <mu-avatar slot="avatar">
          <!--    <img   :src="item.userHeadImg" >-->
            </mu-avatar>
            <!--加关注-->
            <mu-button class="mu_add" textColor="red" @click="add_attention(item.user_name)"   round small >
              <mu-icon :size="20"  value="add" ></mu-icon>
              关注
            </mu-button>
            <!--加关注-->
            <!--更多-->
            <mu-menu  class="mu_bu">
              <mu-button  :ripple="false" icon  >
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
            {{item.userType}}
          </mu-card-text>
          <mu-card-media>
            <!--<img  v-for="imageIndex,count in imagelist"   src="../../assets/images/a.jpeg"   :key="count"  class="images" :style="{width:100/imagelist.length+'%'}" >-->
          </mu-card-media>
          <mu-card-actions>
            <!--点赞-->
            <mu-checkbox  :ripple="false"  v-model="likes" :value="item.username" @change="click_favorite(item.username)" class="mu_favorite"  uncheck-icon="favorite_border"  checked-icon="favorite"></mu-checkbox>
            <!--评论-->
            <mu-button  :ripple="false" icon class="mu_textsms"  >
              <mu-icon :size="22" value="textsms" ></mu-icon>
            </mu-button>
            <!--评论-->
            <!--分享-->
            <mu-button  :ripple="false" icon  class="mu_share">
              <mu-icon :size="22" value="share"  ></mu-icon>
            </mu-button>
            <!--分享-->
            <!--收藏-->
            <mu-checkbox  :ripple="false" v-model="collect"   :value="item.username" @change="click_turn(item.username)"  class="mu_turned"   uncheck-icon="turned_in_not" checked-icon="turned_in"  />
            <!--收藏-->
          </mu-card-actions>
        </mu-card>
      </mu-load-more>
  </div>
    <Click_refresh v-if="loading" :restart="loading"  v-on:if_load="if_load" ></Click_refresh>
  </div>
</template>
<script>
  import TestData from "../../../static/Json/TestData.json";
  import {encryptBy,decryptBy} from '../../../config/common';
  import { Toast } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  import Click_refresh from '@/components/Common/Click_refresh'
  export default {
    data: function() {
       return{
         userDynamic:[],
         open:false,
         num:4,//从零开始算
         trigger: null,
         refreshing: false,
         load_more: false,
         loading:false,
         likes:[],
         collect:[],
         st:[],
         load_all:false
       }
    },
    created(){ //获取json对象

    },
    props:{
      DataLoad:{
           type: Boolean,
          default:false
      }
    },
    watch:{
      DataLoad(){
        if(this.DataLoad)
        {
          this.GetData()
        }
      }
    },
    components:{
      Click_refresh
    },
    computed:{

    },
    mounted () {

    },
    methods: {
      ts() {
      },
      if_load(){
        this.loading=false;
        this.GetData();
      },
      GetData(){
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        const  _this=this;
        this.$axios.get( this.GLOBAL.Api_Host +'/User/recommend/queryAll*', {
          headers: {'Content-Type': 'application/json;charset=utf-8'},// 设置传输内容的类型和编码
          withCredentials: true// 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
        })
          .then(function (response) {
            _this.GetSum(response.data.data);
            Indicator.close();
            _this.loading=false
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
      refresh () {
        this.refreshing = true;
        this.$refs.container.scrollTop = 0;
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
          this.userDynamic.push(data[index]);
          if(index==this.num)
          {
            break;
          }
        }
        if(this.num>data.length)
        {
          this.load_all=true;
        }
        this.widthData=100/9+"%";
      },
      load () {
        this.load_more = true;
        setTimeout(() => {
          this.load_more = false;
          this.num+=5;
          this.GetData();
      }, 2000)

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

      }//收藏
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/css/Card.css";
  .re_container{
    width:100%;
    top:0px;
    bottom:20px;
    overflow: auto;
    z-index: 1;
    position: absolute;
  }
  .re_container::-webkit-scrollbar {/*高宽分别对应横竖滚动条的尺寸*/
    width: 0px;
    height: 0px;
  }
  .loads{

  }
  .images{
    float: left;
    min-width: 33%;
    padding: 1px;
    max-width: 100%;
  }
  .mu-card-actions{
    top: 10px;
    clear:both;
  }
  .mu-card{
    max-width: 750px;
    margin: 0 auto;
  }
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }

</style>
