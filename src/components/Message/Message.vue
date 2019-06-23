<template>
  <Layout :has_share="false">
    <div  style="height:100%;background-color: white;" slot="container">
      <!--head-->
      <mu-appbar >
        消息中心
        <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
        <mu-button icon   @click="address" slot="right" >
          <mu-icon value="account_circle"></mu-icon>
        </mu-button>
      </mu-appbar>

      <!--通知栏-->
      <mu-list textline="two-line"  @click="inform">
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar color="blue">
              <mu-icon value="volume_up"></mu-icon>
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>通知</mu-list-item-title>
            <mu-list-item-sub-title>当前没有新通知!</mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>


      <div style="width: 100%; padding-left: 18px; background-color: #f5f5f5; ">全部聊天</div>
      <!--消息列表-->
      <div >
        <mu-list textline="two-line">
          <div  class="listitem" v-for="item,index in list_one" :key="index"
                v-if=""
                :class="{move:candelete.id==item.id}"
                @touchstart="touchStart(item)"
                @touchend="touchEnd(item)">
            <mu-list-item avatar button :ripple="false"  @click="chat(item.name)"
            >
              <mu-list-item-action >
                <mu-avatar  backgroundColor="blue" slot="leftAvatar"style="float: left;margin-right: 15px" >
                  <img src="../../assets/images/bg.png" />
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content>
                <mu-list-item-title>{{item.name}}</mu-list-item-title>
                <mu-list-item-sub-title>{{item.con}}</mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action>
                <mu-badge content="12"></mu-badge>
              </mu-list-item-action>
            </mu-list-item>
            <div class="del" @click="deleteItem(index)">
              <mu-icon  style="padding-top: 10px" value="delete" :size="30" ></mu-icon>
              <div>删除</div>
            </div>

          </div>
        </mu-list>

      </div>


    </div>
  </Layout>
</template>
<script>
  let _self;
  import Layout from '@/components/Layout';
  import { Button,Snackbar} from 'muse-ui';
  export default {
    data: function() {
      return {
        loading: 'init',
        pageIndex: 1,
        refreshing: false,
        scroller: null,
        trigger: null,
        num: 10,
        text: 'List',
        toast: false,
        list_one:[
          {id:1,"name":"张三","con":"每次人们走进这片荒野，","tf":true},
          {id:2,"name":"李四","con":"被他们惊艳的同时，","tf":true},
          {id:3,"name":"王五","con":"心中也充满着敬畏。","tf":true},

        ],
        clientNum: {}, // 记录开始滑动（x1）,结束滑动（x2）的鼠标指针的位置
        candelete: {}, // 滑动的item
      };
    },
    created() {
      _self = this;
    },

    methods: {
      deleteItem(index){
        this.list_one.splice(index, 1);
        // splice方法是删除数组某条数据，或者向某个位置添加数据
      },
      touchStart(item) {
        let touchs = event.changedTouches[0];
        // 记录开始滑动的鼠标位置
        this.clientNum.x1 = touchs.pageX;
        this.candelete = {};
      },
      touchEnd(item) {
        let touchs = event.changedTouches[0];
        // 记录结束滑动的鼠标位置
        this.clientNum.x2 = touchs.pageX;
        this.candelete = {};
        // 判断滑动距离大于50，判定为滑动成功，否则失败
        if (
          this.clientNum.x2 < this.clientNum.x1 &&
          Math.abs(this.clientNum.x1) - Math.abs(this.clientNum.x2) > 50
        ) {
          event.preventDefault();
          this.candelete = item;
        } else if (

          this.clientNum.x2 > this.clientNum.x1 &&
          Math.abs(this.clientNum.x2) - Math.abs(this.clientNum.x1) > 10
        ) {
          event.preventDefault();
          this.candelete = {};
        }
      },

      backTopCallBack () {
        window.alert('I back top!')
      },
      ts() {

      },
      address() {
        this.$router.push({
            path: '/message/address',
            query:{
              list_one:this.list_one,
            }
          }
        );
      },
      chat(name) {
        this.$router.push({
            path: '/message/chat',
            query:{
              name:name,
            }
          }
        );
      },
      inform() {
        this.$router.push("/message/inform");
      },
    },
    computed: {
      getLoading() {
        if (this.loading === 'loading') {
          return true;
        } else {
          return false;
        }
      },
      icon () {
        return {
          success: 'check_circle',
          info: 'info',
          warning: 'priority_high',
          error: 'warning',

        }[this.color.color]
      }
    },
    components: {
      Layout

    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import url('../../assets/less/common.less');
  .page_wrap {
    width: 100%;
    height: 100%;
    background-color: red;

  }

  .demo-list-wrap {
    width: 100%;
    //max-width: 360px;
    overflow: hidden;
  }
  .mu-item{
    background-color: #f5f5f5;
  }
  .mu-appbar{

    box-shadow: 0px 0px 0px 0px black;
  }
  .listitem{
    position: relative;
    transform: translateX(0);
    transition: all .3s; /*滑动效果更生动*/
    padding-left: 10px;

  }
  .listitem.move{
    transform: translateX(-60px);
  }
  .del {
    position: absolute;
    top: 0;
    right: -1px;
    z-index: 3;
    width: 60px !important;
    height: 100%;
    text-align: center;
    color: #fff;
    background-color: #bdbdbd;
    transform: translateX(60px); /*默认x轴位移60px，使其隐藏*/
  }
</style>
