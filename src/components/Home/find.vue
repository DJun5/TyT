<template>
  <div class="card_first" ref="container">
    <div>
    <mu-load-more @refresh="refresh" :refreshing="refreshing"  loading-text="加载中...." :loading="loading" @load="load">
    <!--卡片展示-->
      <mu-card  v-for="item,index in userDynamic"  :key="index">
        <mu-card-header  :title="item[0].user_name"  :sub-title="item[0].user_signature">
          <mu-avatar slot="avatar">
            <img   :src="item[0].user_avatar" >
          </mu-avatar>
          <!--加关注-->
          <mu-button class="mu_add" textColor="red" @click="add_attention(item[0].user_name)"   v-if="!item[0].user_Befocused" round small >
            <mu-icon :size="20"  value="add" ></mu-icon>
            关注
          </mu-button>
          <!--加关注-->
          <!--更多-->
          <mu-menu  class="mu_bu">
            <mu-button icon  >
              <mu-icon :size="30" value="more_horiz"></mu-icon>
            </mu-button>
            <mu-list slot="content">
              <mu-list-item button  @click="ts(index)">
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
          {{item[0].user_substance}}
          {{item[0].user_Befocused}}
        </mu-card-text>
        <mu-card-media>
          <img   v-lazy="item[0].user_photo"  class="images" :style="{width: widthData}" >
          <img   v-lazy="item[0].user_photo"    class="images" :style="{width: widthData}" >
          <img  v-lazy="item[0].user_photo"  class="images" :style="{width: widthData}" >
          <img   v-lazy="item[0].user_photo"  class="images" :style="{width: widthData}" >
          <img   v-lazy="item[0].user_photo"    class="images" :style="{width: widthData}" >
          <img  v-lazy="item[0].user_photo"  class="images" :style="{width: widthData}" >
          <img   v-lazy="item[0].user_photo"  class="images" :style="{width: widthData}" >
          <img   v-lazy="item[0].user_photo"    class="images" :style="{width: widthData}" >
          <img  v-lazy="item[0].user_photo"  class="images" :style="{width: widthData}" >
        </mu-card-media>
        <mu-card-actions>
          <!--点赞-->
          <mu-checkbox  v-model="likes" :value="item[0].user_name" @change="click_favorite(item[0].user_name)" class="mu_favorite"  uncheck-icon="favorite_border"  checked-icon="favorite"></mu-checkbox>
          <!--评论-->
          <mu-button icon class="mu_textsms" @click="comment(index)" >
            <mu-icon :size="22" value="textsms" ></mu-icon>
          </mu-button>
          <!--评论-->
          <!--分享-->
          <mu-button icon  class="mu_share" @click="ts">
            <mu-icon :size="22" value="share"  ></mu-icon>
          </mu-button>
          <!--分享-->
          <!--收藏-->
          <mu-checkbox v-model="collect"   :value="item[0].user_name" @change="click_turn(item[0].user_name)"  class="mu_turned"   uncheck-icon="turned_in_not" checked-icon="turned_in"  />
          <!--收藏-->
        </mu-card-actions>
      </mu-card>
      </mu-load-more>
    <!--卡片展示-->
    </div>
</div>
</template>
<script>
let _self;
import TestData from "../../../static/Json/TestData.json";
import BScroll from 'better-scroll';
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
      testData:[],
      likes:[],
      collect:[]
    }
  },
    props: {
        media: {
            type: Array,
            require: true
        },
    },
    created(){ //获取json对象
      var sum=0;
     for(this.testData in TestData)
     {
        this.userDynamic.push(TestData[this.testData]);
        sum++;
        if(sum==this.num)
        {
          break;
        }
      }


      this.widthData=100/9+"%";
    },
  mounted () {
    this.$nextTick(() => {
      if(!this.scroll){
      this.scroll = new BScroll(this.$refs.container, {
        //开启点击事件 默认为false
        click:true
      })
    }else if(!this.$refs.container){
      return
    }
    else{
      this.scroll.refresh()
    }
  })
  },
  methods: {
     ts() {
     },
    add_attention(name) {
         this.$store.dispatch('add_attention',name);
     },//点击加关注
    refresh () {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
      this.num = 10;
    }, 2000)
    },//刷新
    GetSum(){
      var sum=0;
      for(this.testData in TestData) {
        this.userDynamic[sum++] = (TestData[this.testData]);
        if (sum >= this.num) {
          break;
        }
      }
      console.log(this.userDynamic);
    },//获取加载更多的数量
    load (){
      this.loading = true;
      setTimeout(() => {
        this.loading= false;
        this.num+=5;
        this.GetSum();
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

    },//收藏
    comment(index){
      this.$router.push('/detail');
    }


    }
};
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
  z-index:1;
  overflow: auto;
  top:0px;
  bottom:10px; /*关键*/
  -webkit-overflow-scrolling: touch
}
 .card_first::-webkit-scrollbar {/*高宽分别对应横竖滚动条的尺寸*/
   width: 0px;
   height: 0px;
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
 image[lazy=loading] {
   width: 40px;
   height: 300px;
   margin: auto;
   background-color: #e0e0e0;
 }
.mu-card{
  max-width: 750px;
  margin: 0 auto;
}

</style>


