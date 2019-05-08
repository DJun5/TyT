<template>

  <div class="framework">
    <!--头部-->
  <div class="header_wrap">
    <slot name="header">
        <!--设置为侧边栏-->
          <mu-button icon slot="left" v-if="has_menu && layout_type" @click="openMenu" >
            <mu-icon  value="menu"></mu-icon>
            </mu-button>
      <!--设置为侧边栏-->

        <!--返回上一级按钮-->
            <mu-button icon  slot="left" v-if="!has_menu" @click="goBack">
              <mu-icon  value="arrow_back"></mu-icon>
            </mu-button>
      <!--返回上一级按钮-->

        <!--分享和收藏（可扩展）-->
            <mu-icon-menu icon="more_vert" slot="right" v-if="has_share">
              <slot name="bar_menu">
                <mu-menu-item title="分享" @click="share" />
              <mu-menu-item  to="/user/favorite" title="我的收藏" />
      </slot>
            </mu-icon-menu>
      <!--分享和收藏（可扩展）-->
    </slot>
  </div>
    <!--头部-->

    <!--侧边栏-->
   <div class="side" v-if="has_menu && layout_type">
     <mu-drawer :docked="docked" :open="open" @close="openMenu()">
       <div class="img_box" :style="`background-image: url(${bg})`">
       </div>
       <mu-list>
         <mu-list-item :title="nav.title" :to="nav.value" v-for="nav in bottom_nav" :key="nav.title" @click="openMenu()">
           <mu-icon slot="left" :value="nav.icon" />
         </mu-list-item>
       </mu-list>
     </mu-drawer>
   </div>
    <!--侧边栏-->

    <!--页面内容-->
  <div class="content_wrap">
    <slot name="container" ></slot>
  </div>
    <!--页面内容-->

    <!--底部导航-->
  <div class="footer_wrap" v-if="has_footer && !layout_type">

      <mu-paper>
        <mu-bottom-nav :value="active_nav" @change="handleChange">
          <mu-bottom-nav-item  title="首页" icon="home" key="首页" value="/" />
          <mu-bottom-nav-item  title="大学" icon="school" key="大学" value="/Campus" />
          <mu-bottom-nav-item  icon="add_box" class="mu-icon"   key="添加" value="/addDynamic" />

          <mu-badge content="12" circle color="secondary"  class="demo-icon-badge">
          <mu-bottom-nav-item  title="消息" icon="message" key="消息" value="/Message" />
          </mu-badge>

          <mu-bottom-nav-item  title="个人中心" icon="person" key="个人中心" value="/user" />
        </mu-bottom-nav>
      </mu-paper>
  </div>
    <!--底部导航-->

    <!--分享到-->
  <mu-dialog :open="dialog" title="分享到" @close="closeDialog">
    <div id="soshid"></div>
    <mu-flat-button slot="actions" @click="closeDialog" primary label="关闭" />
  </mu-dialog>
    <!--分享到-->
</div>

</template>
<script>
let _self;
import Layout from '@/components/Layout';
import Store from 'storejs'
import bg from '../assets/images/bg.png'

export default {
  data: function() {
    return {
      bg,
      active_nav: '/',
      open: false,
      docked: false,
      layout_type: false,
      dialog: false,

    };
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    has_menu: {
      type: Boolean,
      default: true,
    },
    has_share: {
      type: Boolean,
      default: true,
    },
    leftAction: {
      type: Function,
    },
    has_footer: {
      type: Boolean,
      default: true,
    },
  },
  created() {
    _self = this;
  },
  activated() {
    this.setActiveNav();
    this.getModSwitch();
    this.setStatusBar();
  },
  methods: {

    openMenu() {
      this.open = !this.open;
    },

    goBack() {/*返回上一级*/
      if (this.leftAction) {
        this.leftAction.call(this.$parent);
      } else {
        if (history.length > 1) {
          this.$router.go(-1);
        } else {
          this.$router.push('/');
        }
      }
    },
    handleChange(val) { //改变选中状态
      this.active_nav = val;
      this.$router.push(val);
    },
    setActiveNav() {
      let path = this.$route.path;
      this.active_nav = path;
    },
    setStatusBar() { //设置主题颜色（状态栏）
      let theme = Store.get('theme') || '';
      let theme_color = '#00695c';
      if (theme === 'def') {
        theme_color = '#7E57C2'
      }
      if (theme === 'light') {
        theme_color = '#2196f3'
      }
      if (theme === 'dark') {
        theme_color === '#424242'
      }
      if (theme === 'carbon') {
        theme_color = '#474a4f'
      }
      if (theme === 'teal') {
        theme_color = '#009688'
      }
    },
    getModSwitch() {
      let a = Store.get('mod_switch') || false;
      this.layout_type = a;
    },
    share() {/*分享*/
      if (this.isCordova) {
        this.initCordovaShare();
      } else {
        this.dialog = true;
        this.initWebShare();
      }
    },
    initCordovaShare() {
      let opt = {};
      opt.url = location.href;
      opt.message = '68';
      window.plugins.socialsharing.shareWithOptions(opt, (onSuccess) => {
        console.log(onSuccess);
      }, (onError) => {
        console.log(onError);
      });
    },
    initWebShare() {
      let opt = {};
      opt.url = location.href;
      opt.title = '天眼通';
      opt.digest = '';
      opt.sites = ['weixin,', 'weibo', 'qzone', 'tqq'];//分享的平台
      this.$nextTick(() => {
        sosh('#soshid', opt)
      })
    },
    closeDialog() {
      this.dialog = false;
    },
  },
  computed: {
    isCordova() {
      return this.$store.state.user.is_cordova;
    },
  }

};

</script>
<style scoped lang="less">
.framework {
  width: 100%;
  height: 100%;
  padding: 0px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}
  .footer_wrap {
  position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
}
.mu-icon {
  padding-top:15px;
  color:red;
}


</style>
