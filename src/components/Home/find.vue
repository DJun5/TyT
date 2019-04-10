<template>
  <div class="card_first">
    <!--卡片展示-->
    <mu-card  v-for=" item in userDynamic ">
      <mu-card-header :title="item[0].user_name"  :sub-title="item[0].user_signature">
        <mu-avatar slot="avatar">
          <img  :src="item[0].user_avatar" >
        </mu-avatar>
        <mu-button class="mu_add" @click="addQuery" >
          <mu-icon :size="20"  value="add" class="mu_adds"  ></mu-icon>
          <div class="mu_font">关注</div>
        </mu-button>
        <mu-button class="mu_bu">
          <mu-icon :size="30" value="more_horiz"  color="＃212121"></mu-icon>
        </mu-button>
      </mu-card-header>
      <mu-card-media>
        <img  :src="item[0].user_photo">
      </mu-card-media>
      <mu-card-text>
        {{item[0].user_substance}}
      </mu-card-text>
      <mu-card-actions>
        <mu-button class="mu_favorite" >
          <mu-icon :size="26" value="favorite_border" ></mu-icon>
        </mu-button>
        <mu-button class="mu_textsms" >
          <mu-icon :size="26" value="textsms" ></mu-icon>
        </mu-button>
        <mu-button  class="mu_share">
          <mu-icon :size="26" value="share"></mu-icon>
        </mu-button>
        <mu-button class="mu_turned" >
          <mu-icon :size="26" value="turned_in" ></mu-icon>
        </mu-button>
      </mu-card-actions>
    </mu-card>
    <!--卡片展示-->

  </div>
</template>
<script>
let _self;
import Layout from '@/components/Layout';
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
      userDynamic:[],
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
    addQuery() {
      console.log("sdsdasd")
    }
    },
    computed: {

    },
};

</script>

<style scoped lang="less">
 @import url('../../assets/less/common.less');
.card_first {
  width: 100%;
  height:100%;
  position: absolute;
}
.card {
  width: 100%;
  max-width:100%;
  height:30% ;
}
.mu_bu{
  width: 30px;
  height: 30px;
  position: absolute;
  margin-top: -2px;
  right: 20px;
}
.mu_turned{
  position: absolute;
  color:#bdbdbd;
  right: 20px;
}
.mu_favorite{
  margin-left:2% ;
  color:#bdbdbd;
}
.mu_textsms{
  margin-left:8% ;
  color:#bdbdbd;
}
.mu_share{
 margin-left:8% ;
 color:#bdbdbd;
}
.mu_add{
  position: absolute;
  height: 25px;
  width: 55px;
  color: #ff5252;
  border:1px solid #ff5252;
  border-radius:5px;
  right: 70px;
}
.mu_adds{
  margin-top:1.5px;
}
.mu_font{
  float: right;
  width:25px;
  height: 20px;
  margin-top:2.5px;
  margin-right:6.5px;
  font-size: 13px;
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

