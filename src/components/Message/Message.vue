<template>
    <Layout :has_share="false">
        <div slot="container">
          内容暂待！
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
          toast: false
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
      }
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

.demo-snackbar-radio {
  margin: 8px 0;
}
.sd{
  background-color: red;
  width: 100%;
  height: 200px;
  position: absolute;
  z-index:5;

}

</style>
