<template>
  <div class="card_first" ref="container">
    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
    <!--卡片展示-->
      <mu-card  v-for="(item,index) in userDynamic" :key="item[0].user_name">
        <mu-card-header :title="item[0].user_name"  :sub-title="item[0].user_signature">
          <mu-avatar slot="avatar">
            <img  :src="item[0].user_avatar" >
          </mu-avatar>
          <!--加关注-->
          <mu-button class="mu_add" textColor="red" @click="add_attention(index)"   v-if="!item[0].user_Befocused" round small >
            <mu-icon :size="20"  value="add" ></mu-icon>
            关注
          </mu-button>
          <!--加关注-->
          <!--更多-->
          <mu-button icon ref="button" @click="toggle" class="mu_bu" >
            <mu-icon :size="30" value="more_horiz"  color="＃212121"></mu-icon>
          </mu-button>
          <!--更多-->
        </mu-card-header>
        <mu-card-text>
          {{item[0].user_substance}}
        </mu-card-text>
        <mu-card-media>
          <img  :src="item[0].user_photo"  class="images" :style="{width: widthData}" >
          <img  :src="item[0].user_photo"   class="images" :style="{width: widthData}" >
          <img  :src="item[0].user_photo"   class="images" :style="{width: widthData}" >
          <img  :src="item[0].user_photo"   class="images" :style="{width: widthData}" >
          <img  :src="item[0].user_photo"   class="images" :style="{width: widthData}" >
          <img  :src="item[0].user_photo"   class="images" :style="{width: widthData}" >
          <img  :src="item[0].user_photo"   class="images" :style="{width: widthData}" >
          <img  :src="item[0].user_photo"   class="images" :style="{width: widthData}" >
        </mu-card-media>
        <mu-card-actions>
          <!--点赞-->
          <mu-checkbox  v-model="likes" :value="'favorite'+index" @change="click_favorite(index)" class="mu_favorite"  uncheck-icon="favorite_border"  checked-icon="favorite"></mu-checkbox>
          <!--评论-->
          <mu-button icon class="mu_textsms" @click="ts" >
            <mu-icon :size="22" value="textsms" ></mu-icon>
          </mu-button>
          <!--评论-->
          <!--分享-->
          <mu-button icon  class="mu_share" @click="ts">
            <mu-icon :size="22" value="share"  ></mu-icon>
          </mu-button>
          <!--分享-->
          <!--收藏-->
          <mu-checkbox v-model="likes"   :value="'turned'+index" @change="click_turn"  class="mu_turned"   uncheck-icon="turned_in_not" checked-icon="turned_in"  />
          <!--收藏-->
        </mu-card-actions>
      </mu-card>
      </mu-load-more>
    <!--卡片展示-->

</div>
</template>
<script>
let _self;
import TestData from "../../../static/Json/TestData.json";
export default {
  data: function() {
    return {
      num:5,
      refreshing: false,
      loading: false,
      page: 1,
      icons:false,
      scroller: null,
      open: false,
      trigger: null,
      icon_change:"favorite_border",
      add_show:true,
      userDynamic:[],
      testData:[],
      sum:0,
      likes:[],
      leftTop: {horizontal: 'left', vertical: 'top'}
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

      this.widthData=100/8+"%";
    },
  mounted () {
  /*  this.scroller = this.$el*/
    this.trigger = this.$refs.button.$el;
  },
  methods: {
     ts() {
     },
      add_attention(index) {
      TestData[index][0].user_Befocused=true;
      console.log(index);
     },//点击加关注
      refresh () {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
      this.text = this.text === 'List' ? 'Menu' : 'List';
      this.num = 10;
    }, 2000)
    },//刷新
      GetSum(){
      var sum=0;
      for(this.testData in TestData)
      {
        this.userDynamic[sum++]=(TestData[this.testData]);
        if(sum>=this.num)
        {
          break;
        }
      }
    },//获取加载更多的数量
      load () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      this.num+=5;
      this.GetSum();
    }, 2000)
    },//加载更多
    click_favorite(index){
       console.log(index)
     },//点赞
    click_turn(){

    },//收藏
    toggle () {
      this.open = !this.open
    },
    handleClose (e) {
      this.open = false
    }
    }
};
</script>
<style scoped lang="less">
 @import url('../../assets/less/common.less');
 @import "../../assets/Css/Card.css";
.card_first {
  width: 100%;
  height:100%;
  position: absolute;
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

</style>


