<template>
    <Layout :has_share="false">
        <div slot="container" >
          <mu-checkbox v-model="checkbox1" uncheck-icon="favorite_border" checked-icon="favorite" label="自定义图标"></mu-checkbox>
        </div>

    </Layout>
</template>
<script>
let _self;
import Layout from '@/components/Layout';
export default {
    data() {
  const list = [];
  for (let i = 0; i < 11; i++) {
    list.push('item' + (i + 1))
}
        return {
            list,
            pageIndex: 1,
            num: 10,
            text: 'List',
           if_image:true,
           refreshing: false,
           loading: false,
          open: false,
          trigger: null,
          checkbox1:true
        };
    },
    created() {
        _self = this;
    },
  mounted () {
    this.trigger = this.$refs.button.$el;
  },

    methods: {
      ts() {
        console.log("sdsa");
      },
      refresh () {
        this.refreshing = true;
        this.$refs.container.scrollTop = 0;
        setTimeout(() => {
          this.refreshing = false;
          this.text = this.text === 'List' ? 'Menu' : 'List';
          this.num = 10;
      }, 2000)
      },
      load () {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        this.num += 10;
      }, 2000)
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

.demo-loadmore-wrap {
  width: 100%;
  max-width: 360px;
  height: 420px;

  display: flex;
  flex-direction: column;
.mu-appbar {
  width: 100%;
}
}
.demo-loadmore-content {
  flex: 1;
  overflow: auto;
  background-color: red;
  -webkit-overflow-scrolling: touch;
}
</style>
