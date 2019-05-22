<template>
  <div  class="card_first" id="card" ref="container">
    <div>

    <mu-load-more @refresh="refresh" :refreshing="refreshing"  loading-text="加载中...."  :loading="loading" @load="load">
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
            <mu-button icon  :ripple="false" >
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
          <img  v-for="imageIndex,count in imagelist"   src="../../assets/images/a.jpeg"   :key="count"  class="images" :style="{width:100/imagelist.length+'%'}" >
        </mu-card-media>
        <mu-card-actions>
          <!--点赞-->
          <mu-checkbox  :ripple="false" v-model="likes" :value="item[0].user_name" @change="click_favorite(item[0].user_name)" class="mu_favorite"  uncheck-icon="favorite_border"  checked-icon="favorite"></mu-checkbox>
          <!--评论-->
          <mu-button icon  :ripple="false"   class="mu_textsms" @click="comment(index)" >
            <mu-icon :size="22" value="textsms" ></mu-icon>
          </mu-button>
          <!--评论-->
          <!--分享-->
          <mu-button icon  :ripple="false" class="mu_share" @click="ts">
            <mu-icon :size="22" value="share"  ></mu-icon>
          </mu-button>
          <!--分享-->
          <!--收藏-->
          <mu-checkbox  :ripple="false" v-model="collect"   :value="item[0].user_name" @change="click_turn(item[0].user_name)"  class="mu_turned"   uncheck-icon="turned_in_not" checked-icon="turned_in"  />
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

      <!---->
</div>
</div>
</template>
<script>
import TestData from "../../../static/Json/TestData.json";
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
      collect:[],
      back_show:false,
      imagelist:[
        {"src":"../../assets/images/a.jpeg"},
        {"src":"../../assets/images/a.jpeg"}
      ]
    }
  },
    created(){ //获取json对象
     this.GetData();
    },
  mounted () {
      window.addEventListener('scroll', this.onScroll,true);
  },
  methods: {
     ts() {
     },
    BackTop(){
      this.$refs.container.scrollTop = 0;
    },
    GetData(){
      var sum=0;
      for(var testData in TestData)
      {
        this.userDynamic.push(TestData[testData]);
        sum++;
        if(sum==this.num)
        {
          break;
        }
      }
      this.widthData=100/9+"%";
    },//获取数据
    add_attention(name) {
         this.$store.dispatch('add_attention',name);
         console.log(name);
     },//点击加关注
    refresh () {
      this.refreshing = true;
      setTimeout(() => {
        this.refreshing = false;
        this.num = 5;
      this.GetData();
    }, 2000)
    },//刷新
    GetSum(){
      var sum=0;
      for(var  testData in TestData) {
        this.userDynamic[sum++] = (TestData[testData]);
        if (sum >= this.num) {
          break;
        }

      }
    },//获取加载更多的数量
    load(){
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
    },
    onScroll(){
      let scrollTop = document.getElementById('card').scrollTop;
      if(scrollTop>=2000)
      {
        this.back_show=true;
      }
      else {
        this.back_show=false;

      }

    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
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
  bottom:20px; /*关键*/
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
.back_top{
    position:fixed;
    z-index:10000;
    top:82%;
    right:5%;
}

</style>


