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
          <mu-list textline="two-line"  @click.native="inform">
            <mu-list-item avatar button :ripple="false">
              <mu-list-item-action>
                <mu-avatar color="blue">
                  <mu-icon value="volume_up"></mu-icon>
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content>
                <mu-list-item-title>通知</mu-list-item-title>
                <mu-list-item-sub-title>最近没有新通知!</mu-list-item-sub-title>
              </mu-list-item-content>
            </mu-list-item>
            </mu-list>


          <div style="width: 100%; padding-left: 18px; background-color: #f5f5f5; ">全部聊天</div>
          <!--消息列表-->
          <div >
            <mu-list textline="two-line">

              <mu-list-item avatar button :ripple="false"  @click="chat"
                            v-for="item,index in list_one" :key="index">
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
            {"name":"张三","con":"每次人们走进这片荒野，"},
            {"name":"李四","con":"被他们惊艳的同时，"},
            {"name":"王五","con":"心中也充满着敬畏。"},


          ],
        };
    },
    created() {
        _self = this;
    },

    methods: {
      backTopCallBack () {
        window.alert('I back top!')
      },
      ts() {
        console.log("sdsa");
      },
     address() {
       this.$router.push("/message/address");
      },
      chat() {
        this.$router.push("/message/chat");
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
</style>
