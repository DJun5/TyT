<template>
<div>

  <!--导航和菜单-->
  <mu-appbar>
    <mu-list-item-title>我的好友</mu-list-item-title>
    <mu-icon-button  @click="message" icon="keyboard_backspace" slot="left"/>
    <mu-icon-menu  icon="add"  slot="right"  >
      <mu-menu-item  @click="addfriend"  title="添加朋友" leftIcon="person_add"/>
      <mu-divider />
      <mu-menu-item title="扫一扫" leftIcon="tablet_mac"/>
      <mu-divider />
      <mu-menu-item title="帮助与反馈" leftIcon="markunread"/>
      <mu-divider />
    </mu-icon-menu>
  </mu-appbar>

  <!--tabs-->
  <div>
    <mu-tabs  style="background-color: white;" :value="activeTab"  @change="handleTabChange">
      <mu-tab value="tab1"  title="关注"/>
      <mu-tab value="tab2" title="粉丝"/>
    </mu-tabs>
    <div v-if="activeTab === 'tab1'">


        <mu-list textline="two-line">

          <mu-list-item avatar button :ripple="false">
            <mu-list-item-action >
              <mu-avatar  backgroundColor="blue" slot="leftAvatar"style="float: left;margin-right: 15px" >
                <img src="../../assets/images/bg.png" />
              </mu-avatar>
            </mu-list-item-action>
            <div style="float: left;">
              <mu-list-item-content>
                <mu-list-item-title style="float: left; width: 100%">Photos</mu-list-item-title>
                <mu-list-item-sub-title style="float: left;">Jan 9, 2014</mu-list-item-sub-title>
              </mu-list-item-content>
            </div>
            <mu-list-item-action style="float: right;margin-top: 20px">

              <mu-flat-button  label="关注" class="demo-flat-button" icon="add" primary/>

            </mu-list-item-action>
          </mu-list-item>
          <mu-divider inset></mu-divider>

          <mu-list-item avatar button :ripple="false">
            <mu-list-item-action >
              <mu-avatar  backgroundColor="blue" slot="leftAvatar"style="float: left;margin-right: 15px" >
                <img src="../../assets/images/bg.png" />
              </mu-avatar>
            </mu-list-item-action>
            <div style="float: left;">
              <mu-list-item-content>
                <mu-list-item-title style="float: left; width: 100%">Photos</mu-list-item-title>
                <mu-list-item-sub-title style="float: left;">Jan 9, 2014</mu-list-item-sub-title>
              </mu-list-item-content>
            </div>
            <mu-list-item-action style="float: right;margin-top: 20px">
              <mu-flat-button  label="关注" class="demo-flat-button" icon="add" primary/>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider inset></mu-divider>

          <mu-list-item avatar button :ripple="false">
            <mu-list-item-action >
              <mu-avatar  backgroundColor="blue" slot="leftAvatar"style="float: left;margin-right: 15px" >
                <img src="../../assets/images/bg.png" />
              </mu-avatar>
            </mu-list-item-action>
            <div style="float: left;">
              <mu-list-item-content>
                <mu-list-item-title style="float: left; width: 100%">Photos</mu-list-item-title>
                <mu-list-item-sub-title style="float: left;">Jan 9, 2014</mu-list-item-sub-title>
              </mu-list-item-content>
            </div>
            <mu-list-item-action style="float: right;margin-top: 20px">
              <mu-flat-button  label="关注" class="demo-flat-button" icon="add" primary/>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider inset></mu-divider>

        </mu-list>

    </div>
    <div v-if="activeTab === 'tab2'">



        <mu-list textline="two-line">

          <mu-list-item avatar button :ripple="false">
            <mu-list-item-action >
              <mu-avatar  backgroundColor="blue" slot="leftAvatar"style="float: left;margin-right: 15px" >
                <img src="../../assets/images/bg.png" />
              </mu-avatar>
            </mu-list-item-action>
            <div style="float: left;">
              <mu-list-item-content>
                <mu-list-item-title style="float: left; width: 100%">Photos</mu-list-item-title>
                <mu-list-item-sub-title style="float: left;">Jan 9, 2014</mu-list-item-sub-title>
              </mu-list-item-content>
            </div>
            <mu-list-item-action style="float: right;margin-top: 20px">
              <mu-flat-button  label="已关注" class="demo-flat-button" icon="done" primary/>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider inset></mu-divider>

          <mu-list-item avatar button :ripple="false">
            <mu-list-item-action >
              <mu-avatar  backgroundColor="blue" slot="leftAvatar"style="float: left;margin-right: 15px" >
                <img src="../../assets/images/bg.png" />
              </mu-avatar>
            </mu-list-item-action>
            <div style="float: left;">
              <mu-list-item-content>
                <mu-list-item-title style="float: left; width: 100%">Photos</mu-list-item-title>
                <mu-list-item-sub-title style="float: left;">Jan 9, 2014</mu-list-item-sub-title>
              </mu-list-item-content>
            </div>
            <mu-list-item-action style="float: right;margin-top: 20px">
              <mu-flat-button  label="已关注" class="demo-flat-button" icon="done" primary/>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider inset></mu-divider>

        </mu-list>

    </div>
  </div>




  </div>
</template>


  <script>
    export default {
      data () {
        return {
          activeTab: 'tab1'
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
        }
      }
    }
  </script>

  <style scoped lang="less">
    @import url('../../assets/less/common.less');
    .mu-appbar-title{
      text-align: center;
    }

    .mu-tab-link{
      color: black;
      border-bottom-color: #7E57C2;
    }
    //关注
    .mu-flat-button-primary{
      color: blue;
      padding-bottom: 20px;
    }
    .mu-flat-button-wrapper
    {
      padding-bottom:20px;
    }

  </style>







