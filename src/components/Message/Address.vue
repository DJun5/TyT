<template>
<div>

  <!--导航和菜单-->
  <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left" @click="message">
      <mu-icon value="keyboard_backspace"  ></mu-icon>
    </mu-button>
    <mu-list-item-title style="text-align: center;">我的好友</mu-list-item-title>
    <mu-menu slot="right">
      <mu-button flat><mu-icon value="add"></mu-icon></mu-button>
      <mu-list slot="content">
        <mu-list-item button  @click="addfriend">
            <mu-icon value="person_add" :size="20" ></mu-icon>
            <mu-list-item-title style="margin-left: 10px">
              添加朋友
            </mu-list-item-title>
        </mu-list-item>


          <mu-list-item button  @click="view" >
            <mu-icon value="tablet_mac" :size="20" ></mu-icon>
            <mu-list-item-title style="margin-left: 10px">
              扫一扫
            </mu-list-item-title>
          </mu-list-item>

        <mu-list-item button>
          <mu-icon value="markunread" @click="" :size="20" ></mu-icon>
          <mu-list-item-title style="margin-left: 10px">
            帮助与反馈
          </mu-list-item-title>
        </mu-list-item>

      </mu-list>
    </mu-menu>
  </mu-appbar>

  <!--tabs-->

  <mu-container>
    <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
      <mu-tab>关注</mu-tab>
      <mu-tab>粉丝</mu-tab>
    </mu-tabs>
    <div class="demo-text" v-if="active1 === 0" style="height: 100%">
      <!--消息列表-->
      <mu-paper :z-depth="1" class="demo-list-wrap">
        <mu-list textline="two-line">

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
              <mu-button class="mu_add1" textColor="red" @click="focuson" slot="right">
                <mu-icon :size="20"  value="add" ></mu-icon>
                <span >关注</span>
              </mu-button>
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
              <mu-button class="mu_add1" style="color: black" textColor="red" >
                <mu-icon :size="20"  value="done" ></mu-icon>
                <span >已关注</span>
              </mu-button>
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
              <mu-button class="mu_add1" textColor="red" >
                <mu-icon :size="20"  value="add" ></mu-icon>
                <span >关注</span>
              </mu-button>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider inset></mu-divider>

        </mu-list>
      </mu-paper>


    </div>
    <div class="demo-text" v-if="active1 === 1">


      <mu-paper :z-depth="1" class="demo-list-wrap">
        <mu-list textline="two-line">

          <mu-list-item avatar button :ripple="false">
            <mu-list-item-action >
              <mu-avatar  backgroundColor="blue" slot="leftAvatar"style="float: left;margin-right: 15px" >
                <img src="../../assets/images/bg.png" />
              </mu-avatar>
            </mu-list-item-action >
            <mu-list-item-content>
              <mu-list-item-title>AAAA</mu-list-item-title>
              <mu-list-item-sub-title>aaaaaaaa</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-button class="mu_add1"  style="color: black" textColor="red" slot="right">
                <mu-icon :size="20" style="" value="done" ></mu-icon>
                <span >已关注</span>
              </mu-button>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider inset></mu-divider>



          <mu-list-item avatar button :ripple="false">
            <mu-list-item-action >
              <mu-avatar  backgroundColor="blue" slot="leftAvatar"style="float: left;margin-right: 15px" >
                <img src="../../assets/images/bg.png" />
              </mu-avatar>
            </mu-list-item-action >
            <mu-list-item-content>
              <mu-list-item-title>AAAA</mu-list-item-title>
              <mu-list-item-sub-title>aaaaaaaa</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-button class="mu_add1"  style="color: black" textColor="red" >
                <mu-icon :size="20" style="" value="done"></mu-icon>
                <span >已关注</span>
              </mu-button>
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
              <mu-button class="mu_add1" style="color: black" textColor="red" >
                <mu-icon :size="20"  value="done" ></mu-icon>
                <span >已关注</span>
              </mu-button>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider inset></mu-divider>

        </mu-list>
      </mu-paper>

    </div>
  </mu-container>


  <mu-button color="primary">Primary</mu-button>


  </div>

</template>


  <script>
    export default {
      data () {
        return {
          active1: 0
        }
      },
      methods: {
        handleTabChange (val) {
          this.activeTab = val
        },
        message() {
          this.$router.push("/message");
        },
        addfriend() {
          this.$router.push("/message/addfriend");
        },
        view() {
          this.$router.push("/message/vie");
        },
        focuson() {

        }
      }
    }
  </script>

  <style scoped lang="less">
    @import url('../../assets/less/common.less');
    .demo-text {
      padding: 16px;
      background: #fff;
      p {
        margin: 8px 0;
      }
    }
    .demo-list-wrap {
      width: 100%;
      //max-width: 360px;
      overflow: hidden;
    }
    //+关注
   /* .mu_add{
      position: absolute;
      z-index:100;
      box-shadow:none;
      border: 1px solid #aaaaaa;
    }*/
    .mu_add1{
      position: absolute;
      z-index:100;
      box-shadow:none;
      border: 1px solid #aaaaaa;



    }


    .mu-appbar-title{
      text-align: center;
    }

    .mu-tab-link{
      color: black;
      border-bottom-color: #7E57C2;
    }


  </style>







