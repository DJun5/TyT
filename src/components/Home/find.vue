<template>

  <div class="card_first">
    <!--卡片展示-->
    <mu-card  v-for=" item,index in userDynamic " :key="index">
      <mu-card-header :title="item[0].user_name"  :sub-title="item[0].user_signature">
        <mu-avatar slot="avatar">
          <img  :src="item[0].user_avatar" >
        </mu-avatar>
        <!--加关注-->
        <button class="mu_add" @click="add_attention(index)"  ref="show"  v-if="!item[0].user_Befocused"   >
          <mu-icon :size="20"  value="add" ></mu-icon>
          <div class="mu_font">关注</div>
        </button>
        <!--加关注-->

        <!--更多-->
        <mu-icon-button class="mu_bu" @click="ts" icon="more_horiz"    >
          <mu-icon :size="30" value="more_horiz" class="horiz_icon"  color="＃212121"></mu-icon>
        </mu-icon-button>
        <!--更多-->

      </mu-card-header>
      <mu-card-media>
        <img  :src="item[0].user_photo">
      </mu-card-media>
      <mu-card-text>
        {{item[0].user_substance}}
      </mu-card-text>
      <mu-card-actions>
        <!--点赞-->
        <mu-checkbox  class="mu_favorite"   uncheckIcon="favorite_border" checkedIcon="favorite"  />
        <!--评论-->
        <mu-icon-button class="mu_textsms" @click="ts" >
          <mu-icon :size="26" value="textsms" ></mu-icon>
        </mu-icon-button>
        <!--评论-->

        <!--分享-->
        <mu-icon-button  class="mu_share" @click="ts">
          <mu-icon :size="26" value="share"></mu-icon>
        </mu-icon-button>
        <!--分享-->

        <!--收藏-->
        <mu-checkbox class="mu_turned" uncheckIcon="turned_in_not" checkedIcon="turned_in"  />
        <!--收藏-->
      </mu-card-actions>
    </mu-card>

    <!--卡片展示-->
  </div>

</template>
<script>
let _self;
import TestData from "../../../static/Json/TestData.json";
export default {
  data: function() {
    return {
      num: 1,
      refreshing: false,
      loading: false,
      page: 1,
      scroller: null,
      trigger: null,
      add_show:true,
      userDynamic:[],
      sum:0
    }
  },
    props: {
        media: {
            type: Array,
            require: true
        },
    },
  created(){ //获取json对象
         this.userDynamic=TestData;
  },
  methods: {
     ts() {

     },
    add_attention(index) {//点击加关注
      TestData[index][0].user_Befocused=true;
      console.log(index);
     },
      favorite(){

      }
    },
    computed: {


    }
};

</script>

<style scoped lang="less">
 @import url('../../assets/less/common.less');
.card_first {
  width: 100%;
  height:100%;
  position: absolute;
}
.mu_bu{
  width: 35px;
  height: 35px;
  position: absolute;
  margin-top: -4px;
  right: 15px;
  z-index: 5;

}
.mu_turned{
  position: absolute;
  color:#bdbdbd;
  right: 20px;
  margin-top: -12px;
  z-index: 5;
}
.mu_favorite{
  margin-left:2% ;
  color:#bdbdbd;
  z-index:1;
  margin-top: -22px;

}

.mu_textsms{
  margin-left:4%;
  color:#bdbdbd;
  z-index: 5;
  margin-top: -22px;
}
.mu_share{
  margin-left:4% ;
  color:#bdbdbd;
  z-index: 5;
  margin-top: -22px;
}
.mu_add{
  position: absolute;
  height: 25px;
  width: 55px;
  background-color: transparent;
  color: #ff5252;
  border:1px solid #ff5252;
  border-radius:5px;
  right: 70px;
  z-index: 5;
}
.mu_font{
  float: right;
  width:25px;
  height: 20px;
  margin-top:2.5px;
  margin-right:6.5px;
  font-size: 13px;
}
.horiz_icon{
  margin-top: -9px;
  margin-left: -8px;
}
.media_title {
  font-size: 1em!important;
  line-height: 20px!important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
 .demo-loadmore-content {
   flex: 1;
   overflow: auto;
   -webkit-overflow-scrolling: touch;
 }
</style>
<style scoped lang="less">
@import url('../../assets/less/common.less');
// 响应式布局，流式布局

/* 大屏幕（大桌面显示器，最小宽度 1200px） */

@media (min-width: @screen_mg_min) {
    .card_wrap {
        max-width: 1200px!important;
        .item {
            margin: 0 10px;
            margin-bottom: 10px;
            width: 17%!important;
            .img {
                height: 305px!important;
            }
        }
    }
}


/* 大屏幕（大桌面显示器，大于等于 1200px） */

@media (max-width: @screen_lg_min) {
    .card_wrap {
        max-width: 1100px!important;
        .item {
            width: 20%!important;
            .img {
                height: 290px!important;
            }
        }
    }
}

/* 中等屏幕（桌面显示器，大于等于 992px） */

@media (max-width: @screen_md_min) {
    .card_wrap {
        max-width: 900px!important;
        .item {
            width: 24%!important;
            .img {
                height: 280px!important;
            }
        }
    }
}

/* 小屏幕（平板，大于等于 768px） */

@media (max-width: @screen_sm_min) {
    .card_wrap {
        padding: 0 5px!important;
        .item {
            width: 26%!important;
            .img {
                height: 250px!important;
            }
        }
    }
}


/* 小屏幕（手机，大于等于 640px） */

@media (max-width: @screen_mi_min) {
    .card_wrap {
        padding: 0 5px!important;
        .item {
            width: 32%!important;
            .img {
                height: 240px!important;
            }
        }

    }
}

@media (max-width: 510px) {
    .card_wrap {
        padding: 0 5px!important;
        .item {
            width: 32%!important;
            .img {
                height: 140px!important;
            }
        }

    }
}

</style>

