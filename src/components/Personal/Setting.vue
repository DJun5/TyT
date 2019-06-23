<template>
  <div class="wrap">
    <mu-appbar :z-depth="0" title="设置" text-color="black"   >
      <mu-button icon slot="left" @click="goBack">
        <mu-icon color="red" value="arrow_back"></mu-icon>
      </mu-button>
      <mu-button icon slot="right" disabled  >
      </mu-button>
    </mu-appbar>
    <div class="person_top">
      <mu-list>
        <mu-sub-header>个人信息</mu-sub-header>
        <mu-list-item  @click="alterUser"  button :ripple="false">
          <mu-list-item-action>
            <mu-icon style="margin-top: -16px;margin-left:-2px" value=":iconfont icon-bianji" :size="32" color="primary"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title >个人资料</mu-list-item-title>
          <mu-list-item-action>
          </mu-list-item-action >
          <mu-icon  value="keyboard_arrow_right" :size="32"></mu-icon>
        </mu-list-item>

        <mu-list-item  @click="ToChangePassword" button :ripple="false">
          <mu-list-item-action>
            <mu-icon  style="margin-top: -15px;margin-left:4px" value=":iconfont icon-mima" :size="22" color="#1de9b6"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title >修改密码</mu-list-item-title>
          <mu-list-item-action>
          </mu-list-item-action >
          <mu-icon  value="keyboard_arrow_right" :size="32"></mu-icon>
        </mu-list-item>
        </mu-list>
      <mu-divider></mu-divider>
    </div>
    <div class="person_bottom">
      <mu-list>
        <mu-sub-header>其他</mu-sub-header>
        <mu-list-item  @click="ToBlackList" button :ripple="false">
          <mu-list-item-action>
            <mu-icon style="margin-top: -12px;" value=":iconfont icon-jinzhi" :size="24" color="#ff1744"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title >我的黑名单</mu-list-item-title>
          <mu-icon   value="keyboard_arrow_right" :size="32"></mu-icon>
        </mu-list-item>

        <mu-list-item @click="setTheme"   button :ripple="false">
          <mu-list-item-action>
            <mu-icon style="margin-top: -12px;" value=":iconfont icon-zhuti-" :size="26" color="#ff6f00"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title  >主题设置</mu-list-item-title>
          <mu-list-item-action>
          </mu-list-item-action >
          <mu-icon  value="keyboard_arrow_right" :size="32"></mu-icon>
        </mu-list-item>


        <mu-list-item   button :ripple="false">
          <mu-list-item-action>
            <mu-icon style="margin-top: -12px;" value=":iconfont icon-combinedshape" :size="23" color="purple"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>消息提示音</mu-list-item-title>
          <mu-list-item-action>
          </mu-list-item-action >
          <mu-switch v-model="events"></mu-switch>
        </mu-list-item>

        <mu-list-item  @click="ToRank"  button :ripple="false">
          <mu-list-item-action>
            <mu-icon style="margin-top: -12px;" value=":iconfont icon-dengji" :size="26" color="#ffa000" ></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title >头衔设置</mu-list-item-title>
          <mu-list-item-action>
          </mu-list-item-action >
          <mu-icon  value="keyboard_arrow_right" :size="32"></mu-icon>
        </mu-list-item>

        <mu-list-item @click="ToMoreSetting"  button :ripple="false">
          <mu-list-item-action>
            <mu-icon style="margin-top: -12px;" value=":iconfont icon-shezhi" :size="24" color="purple"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title >更多设置</mu-list-item-title>
          <mu-list-item-action>
          </mu-list-item-action >
          <mu-icon  value="keyboard_arrow_right" :size="32"></mu-icon>
        </mu-list-item>
      </mu-list>
    </div>
    <mu-dialog :open="dialog" title="选择主题">
          <span v-for="(item, i) in themes" @click="changeTheme(i)">
                <mu-paper class="themes_paper" circle :zDepth="1" :class="`themes_${i}`"></mu-paper>
            </span>
      <mu-button flat slot="actions" @click="closeDialog">关闭</mu-button>
    </mu-dialog>
    </div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui';
  import Store from 'storejs'
  import def from '!raw-loader!muse-ui/dist/theme-default.css';
  import light from '!raw-loader!muse-ui/dist/theme-light.css';
  import dark from '!raw-loader!muse-ui/dist/theme-dark.css';
  import carbon from '!raw-loader!muse-ui/dist/theme-carbon.css';
  import teal from '!raw-loader!muse-ui/dist/theme-teal.css';
  export  default  {
    data: function(){
      return {
        mod_switch: false,
        dialog: false,
        theme: 'light',
        themes: {
          def,
          light,
          dark,
          carbon,
          teal
        },
        events:false
      }
    },
    methods:{
      //跳转头衔设置
      ToRank(){
        this.$router.push('/settingDetail/rank');
      },
      //跳转黑名单
      ToBlackList(){
        this.$router.push('/settingDetail/blacklist');
      },
      //跳转修改密码
      ToChangePassword(){
        this.$router.push('/settingDetail/ChangePassword');
      },
      //跳转修改个人资料页面
      alterUser(){
        this.$router.push('/setting/alterUserMessage');
      },
      //跳转私密设置
      ToMoreSetting(){
        this.$router.push('/setting/moreSetting');
      },
      /*返回上一级*/
      goBack() {
        if (this.leftAction) {
          this.leftAction.call(this.$parent);
        } else {
          if (history.length > 1) {
            this.$router.go(-1);
          } else {
            this.$router.push('/user');
          }
        }
      },
      //设置主题
      setTheme() {
        this.dialog = true;
      },
      closeDialog() {
        this.dialog = false;
      },
      //改变主题
      changeTheme(theme) {
        this.theme = theme;
        const styleEl = this.getThemeStyle();
        styleEl.innerHTML = this.themes[theme] || '';
        Store.set('theme', theme);
      },
      getThemeStyle() {
        const themeId = 'muse-theme'
        let styleEl = document.getElementById(themeId)
        if (styleEl) return styleEl
        styleEl = document.createElement('style')
        styleEl.id = themeId
        document.body.appendChild(styleEl)
        return styleEl
      }
    }
  }
</script>

<style scoped lang="less">
  .wrap{
    width: 100%;
    height:100%;
    position: absolute;
  }
  .mu-appbar{
    background-color: transparent;
    width: 100%;
   text-align: center;
  }

  .themes_paper {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
    height: 20px;
  }
  .themes_def {
    background: #7e57c2!important;
  }
  .themes_light {
    background: #2196f3!important;
  }

  .themes_dark {
    background: #424242!important;
  }

  .themes_carbon {
    background: #474a4f!important;
  }

  .themes_teal {
    background: #009688!important;
  }
  .person_top{
    width: 100%;
    height: 23%;
    margin-top: -10px;

  }
  .person_bottom{
    width: 100%;
    height:60%;

  }

</style>
