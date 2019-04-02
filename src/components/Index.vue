<template>
    <Layout :has_share="false">
      <div>

      </div>
    </Layout>
</template>
<script>
let _self;
import Layout from '@/components/Layout';
import MediaCard from '@/components/MediaCard';
export default {
    data: function() {
        return {
            loading: 'init',
            movies: [],
            tvs: [],
            page: 1,
            refreshing: false,
            trigger: null,
          active_nav: '/',
          bottom_nav: [{
            title: '首页',
            value: '/',
            icon: 'home',

          }, {
            title: '大学',
            value: '/Campus',
            icon: 'school'
          }, {
            title: '消息',
            value: '/Message',
            icon: 'message'
          }, {
            title: '个人中心',
            value: '/user',
            icon: 'person'
          }
          open: false,
          docked: false,
          layout_type: false,
          dialog: false,
        };
    },
    created() {
        _self = this;
    },
    mounted() {
        this.trigger = this.$el
    },
    methods: {
    },
    computed: {
        getLoading() {
            if (this.loading === 'loaded') {
                return true;
            } else {
                return false;
            }
        }
    },
    components: {
        Layout,
        MediaCard,
    }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../assets/less/common.less');
.page_wrap {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
 /* padding-bottom: @nav_bar;*/
    }
.footer_wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}

</style>
