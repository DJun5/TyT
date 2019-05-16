<template>
 <div class="attentions"  ref="attention_srcoll">
   <div class="attention_header">
     <div class="add_dynamic" v-if="has_dynamic">
     <!--卡片展示-->
       <mu-card  v-for="(item,index) in userDynamic" :key="index">
         <mu-card-header :title="item[0].user_name"  :sub-title="item[0].user_signature">
           <mu-avatar slot="avatar">
             <img   :src="item[0].user_avatar" >
           </mu-avatar>
           <!--更多-->
           <mu-menu  class="mu_bu">
             <mu-button icon  >
               <mu-icon :size="30" value="more_horiz"  color="＃212121"></mu-icon>
             </mu-button>
             <mu-list slot="content">
               <mu-list-item button>
                 <mu-list-item-title>举报</mu-list-item-title>
               </mu-list-item>
               <mu-list-item button>
                 <mu-list-item-title>收藏</mu-list-item-title>
               </mu-list-item>
             </mu-list>
           </mu-menu>
           <!--更多-->
         </mu-card-header>
         <mu-card-text>
           {{item[0].user_substance}}
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
           <mu-checkbox  :ripple="false"  v-model="likes" :value="'favorite'+index" @change="click_favorite(index)" class="mu_favorite"  uncheck-icon="favorite_border"  checked-icon="favorite"></mu-checkbox>
           <!--评论-->
           <mu-button  :ripple="false" icon class="mu_textsms" @click="ts" >
             <mu-icon :size="22" value="textsms" ></mu-icon>
           </mu-button>
           <!--评论-->
           <!--分享-->
           <mu-button  :ripple="false" icon  class="mu_share" @click="ts">
             <mu-icon :size="22" value="share"  ></mu-icon>
           </mu-button>
           <!--分享-->
           <!--收藏-->
           <mu-checkbox  :ripple="false" v-model="likes"  :value="'turned'+index" @change="click_turn"  class="mu_turned"   uncheck-icon="turned_in_not" checked-icon="turned_in"  />
           <!--收藏-->
         </mu-card-actions>
       </mu-card>
       <!--卡片展示-->
   </div>
   </div>
   <!--没有关注的人时显示-->
   <div class="no_dynamic" v-if="!has_dynamic">
     <span class="no_dynamic_container">你还没有关注过人</span>
     <span class="no_dynamic_containers">看看大家都在关注那些人吧！</span>
   </div>
   <!--没有关注的人时显示-->
   <mu-paper  >
     <!--横向滚动的头部-->
     <div class="paper_header"  v-if="!has_dynamic"  >
      <div class="paper_title">你可能感兴趣的用户</div>
     <div class="paper_more">
       <button  class="mu_more" @click="ts" >
         查看更多
         <mu-icon :size="26" class="mu_right" value="keyboard_arrow_right"></mu-icon>
       </button>
     </div>
       <!--横向滚动块-->
       <div class="scroll_father stop-swiping" ref="paper_header" >

       <div class="paper_scroll" ref="paper_scroll">
         <!--纸片展示“可能感兴趣的人”-->
         <transition-group name="list-complete" >
         <mu-paper class="demo-paper" :z-depth="1" v-for=" interested_people,index in peopleInterested " :key="interested_people[0].client_name" >
             <!--清除按钮-->
           <mu-button  :ripple="false" icon class="clear_button"  @click="deletePeople(index)"  >
             <mu-icon value="clear" :size="18" color="#bdbdbd" ></mu-icon>
           </mu-button>
           <!--清除按钮-->
           <!--头像-->
         <mu-avatar :size="70" class="paper_avatar">
           <img :src="interested_people[0].client_avatar">
         </mu-avatar>
           <!--头像-->
         <span class="paper_titles">{{interested_people[0].client_name}}</span>
         <span class="paper_subtitle">{{interested_people[0].client_subtitle}}</span>
         <mu-button flat class="paper_button" @click="attention(index)"  >关注</mu-button>
       </mu-paper>
         <!--纸片展示“可能感兴趣的人”-->
         </transition-group>
       </div>

     </div>
       <!--横向滚动块-->
     </div>
     <!--横向滚动的头部-->
   </mu-paper>
 </div>
</div>
</template>
<script>
  let _self;
  import TestData from "../../../static/Json/TestData.json";
  import BScroll from 'better-scroll';
  import TetsData2 from "../../../static/Json/TestData2.json"
  export default {
    data: function () {
      return {
        peopleInterested:[],
        has_dynamic:false,
        width:0,
        attentioned:true,
        likes:[],
        userDynamic:[]
      }
    },
    created(){
      this.userDynamic=TestData;
      this.peopleInterested=TetsData2;//获取到横向滚动的测试数据
      this.widthData=100/9+"%";
     this.$nextTick(() => {//调用滚动方法
        this.personScroll();
   });
    },
    methods: {
      GetNum() {
        this.width=120*Object.keys(this.peopleInterested).length;
        return this.width;
      },//计算出横向滚动组件需要的总宽度
      personScroll() {
        this.$refs.paper_scroll.style.width = this.GetNum() + "px";
        this.$nextTick(() => {
          if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.paper_header, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false
          });
        } else {
          this.scroll.refresh();
        }
      });
      },//横向滚动
      ts() {
        console.log("sdsdasd");
      },
      deletePeople(index) {
        this.width=120*Object.keys(this.peopleInterested).length;
        this.$delete(this.peopleInterested,index);
      },//清除感兴趣的人
      add_attention(index) {

      },//点击加关注
      attention(index) {
        this.$delete(this.peopleInterested,index);
        console.log(index+"加关注");
      },//可能认识的人加关注,
      click_favorite(index){
        console.log(index)
      },//点赞
      click_turn(){
      },//收藏
    },
    watch:{
      width: function(){
        this.GetNum();
      this.personScroll();
      }//监听横滑动的宽度
    },
  /*  mounted () {
      this.$nextTick(() => {

        if(!this.scroll){
        this.scroll = new BScroll(this.$refs.attention_srcoll, {
          //开启点击事件 默认为false
          click:true
        })
      }else if(!this.$refs.attention_srcoll){
        return
      }
      else{
        this.scroll.refresh()
      }
    })
    },*/
  }
</script>

<style scoped lang="less">
  @import url('../../assets/less/common.less');
  @import "../../../static/css/Card.css";
  .list-complete-enter, .list-complete-leave-to
     {
    opacity: 0;
    transform: translateZ(30px);

  }
  .list-complete-leave-active {
    position: absolute;

  }
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
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
  .attentions{
     position: absolute;
     width: 100%;
     height:100%;
    overflow: auto;
    z-index: 5;
   }
  .attentions::-webkit-scrollbar {/*高宽分别对应横竖滚动条的尺寸*/
    width: 0px;
    height: 0px;
  }
  .mu-paper{
    height: 40%;
    background-color:#fafafa;

  }

  .paper_header {
    position:relative;
    height: 30%;
    width: 100%;
  }
  .paper_title{
    position: absolute;
    float: left;
    font-family: "华文仿宋";
    margin-top: 8px;
    width: 200px;
    height: 30px;
    margin-left: 8px;
  }
  .paper_more{
    position: absolute;
    right: 10px;
    width: 80px;;
    margin-top: 8px;
    z-index:5;
  }
  .mu_more{
    border:none;
    height: 25px;
    width:70px;
    background-color: transparent;
    color:#bdbdbd ;

  }
  .paper_avatar{
    margin-left: 18px;
    margin-top: 15px;
  }
  .paper_titles{
    font-size:13px;
    float: left;
    margin-left:37px;
  }
  .paper_subtitle{
    font-size:10px;
    float: left;
    margin-left: 16px;
    color:#757575;
  }
  .paper_button{
    border:1px solid transparent;
    background-color:#ff2741;
    font-size: 13px;
    margin-top:135px;
    border-radius:13px;
    width: 80px;
    text-align: center;
    color: white;
    height:25px;
    margin-left: -77px;
    position: absolute;
  }
  .attention_already{
    border:1px solid transparent;
    background-color:#bdbdbd;
    font-size: 13px;
    margin-top:135px;
    border-radius:13px;
    width: 80px;
    height:25px;
    text-align: center;
    margin-left: -77px;
    position: absolute;
  }
  .mu_right{
    position: absolute;
    margin-top: -3px;
    margin-left: -4px;
  }
  .paper_scroll{
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: flex-start;
  }
  .scroll_father{
    position: absolute;
    height: 180px;
    margin-top: 35px;
    width: 100%;
    overflow: auto;
    z-index:1;
  }
  .scroll_father::-webkit-scrollbar {/*高宽分别对应横竖滚动条的尺寸*/
    width: 0px;
    height: 0px;
  }
  .demo-paper{
    width: 110px;
    height: 170px;
    display: inline-block;
    margin-left:8px;
    transition: all 1s;
  }
  .no_dynamic{
    height: 18%;
    text-align: center;
  }
  .no_dynamic_container{
    position:absolute;
    margin-top: 25px;
    margin-left: -50px;
  }
  .no_dynamic_containers{
    position:absolute;
    margin-top: 50px;
    margin-left: -70px;
    color: #bdbdbd;
  }
  .clear_button{
    position: absolute;
    margin-left:80px;
    width: 25px;
     height: 25px;;
    z-index:1;
  }
</style>

