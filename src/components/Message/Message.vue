<template>
    <Layout :has_share="false">
        <div slot="container">

          <!--head-->
          <mu-appbar >
            消息中心
            <mu-button icon   @click="address" slot="right" >
              <mu-icon value="account_circle"></mu-icon>
            </mu-button>
          </mu-appbar>
          <!--通知栏-->
          <mu-list textline="two-line" >
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


          <div style="width: 100%;background-color: #dddddd ">全部聊天</div>
          <!--消息列表-->
          <mu-paper :z-depth="1" class="demo-list-wrap">
            <mu-list textline="two-line">

              <mu-list-item avatar button :ripple="false"  @click="chat" >
                <mu-list-item-action >
                  <mu-avatar  backgroundColor="blue" slot="leftAvatar"style="float: left;margin-right: 15px" >
                    <img src="../../assets/images/bg.png" />
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>AAAA</mu-list-item-title>
                  <mu-list-item-sub-title>aaaaaaaa</mu-list-item-sub-title>
                </mu-list-item-content>
                <mu-list-item-action>
                    <mu-badge content="12"></mu-badge>
                </mu-list-item-action>
              </mu-list-item>
              <mu-divider inset></mu-divider>


              <mu-list-item avatar button :ripple="false">
                <mu-list-item-action >
                  <mu-avatar  backgroundColor="blue" slot="leftAvatar"style="float: left;margin-right: 15px" >
                    <img src="../../assets/images/bg.png" />
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>AAAA</mu-list-item-title>
                  <mu-list-item-sub-title>aaaaaaaa</mu-list-item-sub-title>
                </mu-list-item-content>
                <mu-list-item-action>
                    <mu-badge content="12"></mu-badge>
                </mu-list-item-action>
              </mu-list-item>
              <mu-divider inset></mu-divider>

            </mu-list>
          </mu-paper>





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
          error: 'warning'
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
</style>
