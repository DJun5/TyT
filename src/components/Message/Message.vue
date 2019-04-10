<template>
    <Layout :has_share="false">
        <div slot="container">
          <mu-flex justify-content="left" align-items="center" wrap="wrap" class="icon-flex-wrap">
            <mu-button color="primary">
              ACCEPT
              <mu-icon value="check_circle" right></mu-icon>
            </mu-button>
            <mu-button color="red">
              DECLINE
              <mu-icon value="block" right></mu-icon>
            </mu-button>
            <mu-button color="darkBlack">
              <mu-icon value="remove_circle" left></mu-icon>
              CANCEL
            </mu-button>
            <mu-button color="orange">
              <mu-icon value="arrow_back" left></mu-icon>BACK
            </mu-button>
            <mu-button color="purple">
              <mu-icon value="build"></mu-icon>
            </mu-button>
            <mu-button color="indigo">
              <mu-icon value="backup"></mu-icon>
            </mu-button>
            <mu-button color="blue" icon>
              <mu-icon value="thumb_up"></mu-icon>
            </mu-button>
            <mu-button color="red" icon>
              <mu-icon value="thumb_down"></mu-icon>
            </mu-button>
          </mu-flex>
        </div>
    </Layout>
</template>
<script>
let _self;
import Layout from '@/components/Layout';

export default {
    data: function() {
        return {
            loading: 'init',
            pageIndex: 1,
            refreshing: false,
            scroller: null,
            trigger: null,
            num: 10,
           text: 'List'
        };
    },
    created() {
        _self = this;
    },

    methods: {

    },
    computed: {
        getLoading() {
            if (this.loading === 'loading') {
                return true;
            } else {
                return false;
            }
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
    background: #f5f5f5;

}
.icon-flex-wrap .mu-button {
  margin: 6px 8px;
}

</style>
