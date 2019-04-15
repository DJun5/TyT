<template>
 <div class="attentions">
   <div class="attention_header">
     <div class="add_dynamic" v-if="has_dynamic">
     <!--卡片展示-->
       <mu-card  v-for=" item,index in userDynamic ">
         <mu-card-header :title="item[0].user_name"  :sub-title="item[0].user_signature">
           <mu-avatar slot="avatar">
             <img  :src="item[0].user_avatar" >
           </mu-avatar>
           <!--加关注-->
           <!-- <mu-raised-button class="mu_add"  label="关注"  iconClass="sds"   icon="add" />-->
           <button class="mu_add" @click="add_attention(index)"   v-if="add_show"   >
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

           <mu-icon-button  class="mu_favorite" @click="ts" >
             <mu-icon :size="26" value="favorite_border" ></mu-icon>
           </mu-icon-button>
           <!--点赞-->

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

           <!--转发-->
           <mu-icon-button class="mu_turned"  @click="ts">
             <mu-icon :size="26" value="turned_in" ></mu-icon>
           </mu-icon-button>
           <!--转发-->
         </mu-card-actions>
       </mu-card>
       <!--卡片展示-->
   </div>
   </div>
   <div class="no_dynamic" v-if="!has_dynamic">
     <span class="no_dynamic_container">你还没有关注过人</span>
     <span class="no_dynamic_containers">看看大家都在关注那些人吧！</span>
   </div>

   <mu-paper>
     <!--横向滚动的头部-->
     <div class="paper_header" >
      <div class="paper_title">你可能感兴趣的用户</div>
     <div class="paper_more">
       <button  class="mu_more" @click="ts" >
         查看更多
         <mu-icon :size="26" class="mu_right" value="keyboard_arrow_right"></mu-icon>
       </button>
     </div>
       <!--横向滚动块-->
       <div class="scroll_father" ref="paper_header">
       <div class="paper_scroll" ref="paper_scroll">
         <!--纸片展示“可能感兴趣的人”-->
         <mu-paper class="demo-paper" :z-depth="1" v-for=" interested_people,index in peopleInterested " :key="interested_people[0].client_name" >
             <!--清除按钮-->
           <mu-icon-button icon class="clear_button" @click="deletePeople(index)"  >
             <mu-icon value="clear" :size="18" color="#bdbdbd" ></mu-icon>
           </mu-icon-button>
           <!--清除按钮-->
           <!--头像-->
         <mu-avatar :size="70" class="paper_avatar">
           <img :src="interested_people[0].client_avatar">
         </mu-avatar>
           <!--头像-->
         <span class="paper_titles">{{interested_people[0].client_name}}</span>
         <span class="paper_subtitle">{{interested_people[0].client_subtitle}}</span>
         <mu-raised-button  class="paper_button" @click="attention" v-if="attentioned" label="关注"/>
           <mu-flat-button class="attention_already"   v-if="!attentioned"  >已关注</mu-flat-button>
       </mu-paper>
         <!--纸片展示“可能感兴趣的人”-->
       </div>
     </div>
       <!--横向滚动块-->
     </div>
   </mu-paper>
   <!--横向滚动的头部-->
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
        userDynamic:[],
        peopleInterested:[],
        has_dynamic: false,
        width:0,
        attentioned:true
      }
    },
    created(){ //获取json对象
      this.userDynamic=TestData;//获取到动态的测试数据
      this.peopleInterested=TetsData2;//获取到横向滚动的测试数据
      this.$nextTick(() => {//调用滚动方法
        this.personScroll();
    });
    },

    methods: {
      GetNum() {//计算出横向滚动组件需要的总宽度
        this.width=120*Object.keys(this.peopleInterested).length;
        return this.width;
      },
      personScroll() {//横向滚动
        this.$refs.paper_scroll.style.width = this.GetNum() + "px";
        this.$nextTick(() => {
          if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.paper_header, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
      },
      ts() {
        console.log("sdsdasd")
      },
      deletePeople(index) {//清楚感兴趣的人
        this.width=120*Object.keys(this.peopleInterested).length;
        this.$delete(this.peopleInterested,index);
      },
      attention() {

      }
    },
    watch:{//监听横滑动的宽度
      width: function(){
        this.personScroll();
      }

    }
  }
</script>

<style scoped lang="less">
  @import url('../../assets/less/common.less');
.attentions{
  position: absolute;
  width: 100%;
  height:100%;
}

.mu-paper{
  height: 40%;
  background-color:#fafafa;
}
  .mu_bu{
    width: 30px;
    height: 30px;
    position: absolute;
    margin-top: -2px;
    right: 20px;
  }
  .mu_more{
    border:none;
    height: 25px;
    width:70px;
    background-color: transparent;
    color:#bdbdbd ;
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
    z-index:1;
  }
  .mu_font{
    float: right;
    width:25px;
    height: 20px;
    margin-top:2.5px;
    margin-right:6.5px;
    font-size: 13px;
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
    z-index: 5;

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
    z-index:5;
  }
  .scroll_father::-webkit-scrollbar {/*高宽分别对应横竖滚动条的尺寸*/
    width: 0px;
    height: 0px;
  }
  .demo-paper{
     width: 110px;
     height: 170px;
     margin-left:8px;
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
    margin-left:72px;
    margin-top:-10px;
  }
</style>
