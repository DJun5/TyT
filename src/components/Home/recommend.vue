<template>
  <div class="re_container" ref="container">
    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
    <mu-card  v-for=" item,index in userDynamic " :key="index">
      <mu-card-header :title="item[0].user_name"   :sub-title="item[0].user_signature">
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
        <mu-button icon class="mu_bu"  @click="open=!open" ref="button" >
          <mu-icon :size="30" value="more_horiz"  color="＃212121"></mu-icon>
        </mu-button>
        <!--更多-->
      </mu-card-header>
      <mu-card-text>
        {{item[0].user_substance}}
      </mu-card-text>
      <mu-card-media>
        <img  :src="item[0].user_photo"  class="images" :style="{width: widthData}" >
      </mu-card-media>
      <mu-card-actions>
        <!--点赞-->
        <mu-checkbox  class="mu_favorite"   uncheckIcon="favorite_border" checkedIcon="favorite"  />
        <!--评论-->
        <mu-button icon class="mu_textsms" @click="ts" >
          <mu-icon :size="22" value="textsms" ></mu-icon>
        </mu-button>
        <!--评论-->

        <!--分享-->
        <mu-button  icon class="mu_share" @click="ts">
          <mu-icon :size="22" value="share"></mu-icon>
        </mu-button>
        <!--分享-->

        <!--收藏-->
        <mu-checkbox class="mu_turned"   uncheckIcon="turned_in_not" checkedIcon="turned_in"  />
        <!--收藏-->
      </mu-card-actions>
    </mu-card>
   </mu-load-more>

  </div>
</template>
<script>
  import TestData from "../../../static/Json/TestData.json";
  export default {
    data: function() {
       return{
         userDynamic:[],
         open:false,
         num:5,
         trigger: null,
         refreshing: false,
         loading: false,
         testData:null
       }
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
      this.widthData=100+"%";
    },
    mounted () {
      this.trigger = this.$refs.button.$el;
    },
    methods: {
      ts() {
      },
      refresh () {
        this.refreshing = true;
        this.$refs.container.scrollTop = 0;
        setTimeout(() => {
          this.refreshing = false;
        this.text = this.text === 'List' ? 'Menu' : 'List';
        this.num = 10;
      }, 2000)
      },
      GetSum(){//获取加载更多的数量
        var sum=0;
       for(this.testData in TestData)
        {
          this.userDynamic[sum++]=(TestData[this.testData]);
          if(sum>=this.num)
          {
            break;
          }
        }
      },
      load () {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.num+=5;
          this.GetSum();
      }, 2000)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/Css/Card.css";
  .re_container{
    width: 100%;
    height: 100%;
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
