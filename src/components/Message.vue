<template>
    <Layout :has_share="false">
        <div >
          asdasd
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
            pageIndex: 1,
            refreshing: false,
            scroller: null,
            trigger: null,
        };
    },
    created() {
        _self = this;
    },
    activated() {
        this.trigger = this.$el
        this.scroller = this.$el // 滚动的元素
    },
    deactivated() {
        this.trigger = null;
        this.scroller = null;
    },
    methods: {

        refresh() {
            this.pageIndex = 1;
        },
        loadMore() {
            this.pageIndex++;
        },
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
        Layout,
        MediaCard
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
  /*  .page_hd {}
    .page_bd {
        padding-top: @nav_bar/3;
        .content {
            position: relative;
            .list {
                text-align: center;
            }
        }
    }*/
}

</style>
