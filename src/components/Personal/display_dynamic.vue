<template>
  <div class="wraps"   ref="display_dynamic" >
    <mu-load-more @refresh="refresh" :refreshing="refreshing"  loading-text="加载中...."  :loading="loading" @load="load">
    <mu-card  v-for="item,index in user_dynamic"  :key="index">
      <mu-card-header  :title="item[0].user_name"  :sub-title="item[0].user_signature">
        <mu-avatar slot="avatar">
          <img   :src="item[0].user_avatar" >
        </mu-avatar>
        <!--更多-->
        <mu-menu  class="mu_bu">
          <mu-button icon  :ripple="false" >
            <mu-icon :size="30" value="more_horiz"></mu-icon>
          </mu-button>
          <mu-list slot="content">
            <mu-list-item button  @click="ts(index)">
              <mu-icon :size="20"  value="warning" ></mu-icon>
              <mu-list-item-title>删除</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-icon :size="20"  value="turned_in_not" ></mu-icon>
              <mu-list-item-title>编辑</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-icon :size="20"  value="turned_in_not" ></mu-icon>
              <mu-list-item-title>收藏</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-icon :size="20"  value="turned_in_not" ></mu-icon>
              <mu-list-item-title>设置私密</mu-list-item-title>
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
  </div>
</template>
<script>
  import TestData from "../../../static/Json/TestData.json";
  export  default  {
    data: function(){
      return {
        icons:false,
        open: false,
        num:5,
        add_show:true,
        likes:[],
        collect:[],
        refreshing: false,
        loading: false,
        user_dynamic:[]
      }
    },
    created(){
        this.GetData();

    },
    mounted(){

    },
    methods: {
      ts() {
      },
      GetData(){
        var sum=0;
        for(var testData in TestData)
        {
          this.user_dynamic.push(TestData[testData]);
          sum++;
          if(sum==this.num)
          {
            break;
          }
        } this.widthData=100/9+"%";
      },//获取数据
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
      refresh () {
        this.refreshing = true;
        setTimeout(() => {
          this.refreshing = false;
        this.num = 5;
        this.GetData();
      }, 2000)
      },//刷新
      load(){
        this.loading = true;
        setTimeout(() => {
          this.loading= false;
        this.num+=5;
      this.GetData();
      }, 2000)
      },//加载更多
    }


  }
</script>

<style scoped lang="less">
  @import "../../../static/css/Card.css";
  .wraps{
    width: 100%;
    height:100%;
    z-index:99;
  }

  .images{
    float: left;
    min-width: 33%;
    padding: 1px;
    max-width: 100%;
  }
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
    background-color: #e0e0e0;
  }
  .mu-card-actions{
    top: 10px;
    clear:both;
  }
  .mu-card{
    max-width: 750px;
    margin: 0 auto;
  }
  .mu-loading-wrap{
    position: fixed;
    top:-200px;
  }
</style>
