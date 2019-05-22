<template>

<div style="background-color: white;height: 100%;width: 100%;">
  <!--导航和菜单-->
  <mu-appbar style="width: 100%;color: black;" color="primary">
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

        <mu-list textline="two-line" style="">
          <mu-list-item avatar  button :ripple="false"
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
              <mu-button  small round class="mu_add1" textColor="red" slot="right"
                          v-if="item.tf"   @click="item.tf=!item.tf;" >
                <mu-icon :size="20"  value="add" ></mu-icon>
                <span >关注</span>
              </mu-button>
              <mu-button  small round  class="mu_add1" style="color: black" textColor="red" slot="right"
                          v-if="!item.tf"   @click="item.tf=!item.tf;">
                <mu-icon :size="20"  value="" ></mu-icon>
                <span >已关注</span>
              </mu-button>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
    </div>


    <div class="demo-text" v-if="active1 === 1">
      <mu-list textline="two-line" style="">
        <mu-list-item avatar  button :ripple="false"
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
            <mu-button  small round class="mu_add1" textColor="red" slot="right"
                        v-if="item.tf"   @click="item.tf=!item.tf;" >
              <mu-icon :size="20"  value="add" ></mu-icon>
              <span >关注</span>
            </mu-button>
            <mu-button  small round  class="mu_add1" style="color: black" textColor="red" slot="right"
                        v-if="!item.tf"   @click="item.tf=!item.tf;">
              <mu-icon :size="20"  value="" ></mu-icon>
              <span >已关注</span>
            </mu-button>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </div>
  </mu-container>




  </div>

</template>


  <script>
    export default {
      data () {
        return {

          i:-1,
          list_one:[
            {"name":"张三","con":"每次人们走进这片荒野，","tf":true},
            {"name":"李四","con":"被他们惊艳的同时，","tf":true},
            {"name":"王五","con":"心中也充满着敬畏。","tf":true},


          ],
          active1: 0,
          //ex:true,
        }
      },
      methods: {
        handleTabChange (val) {
          this.activeTab = val
        },
        message() {
          if (this.leftAction) {
            this.leftAction.call(this.$parent);
          } else {
            if (history.length > 1) {
              this.$router.go(-1);
            } else {
              this.$router.push('/message');
            }
          }

        },
        addfriend() {
          this.$router.push("/message/addfriend");
        },
        view() {
          this.$router.push("/message/vie");
        },
      /*  focuson(e) {
          e.item.tf=!e.item.tf;
          //  item.tf=!item.tf;
        }*/
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

    .mu-appbar{
      background-color: #f5f5f5;
    }
    .mu-appbar-title{
      text-align: center;
    }

    .mu-tab-link{
      color: black;
      border-bottom-color: #7E57C2;
    }
    .demo-text{
      padding: 0px;
      margin: 0px;
    }
    .mu-tabs-inverse{
      background-color: white;

    }
    .container{
      padding: 0px;
    }
    .mu-item-action.is-more{
      padding: 0px;
      margin: 0px;
      height: 30px;
    }
  </style>







