<template>
  <Layout :has_share="false">
    <div  slot="container"  >
      <mu-list>
        <mu-list-item button :ripple="false" to="user/settings">
          <mu-list-item-action>
            <mu-icon value="grade"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>设置</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </div>
  </Layout>
</template>

<script>
let _self;
import Layout from '@/components/Layout';
export default {
    data: function() {
        return {

        };
    },
    created() {
        _self = this;
    },
    mounted() {

    },
    methods: {

    },
    computed: {

    },
    components: {
        Layout
    }
};

</script>

<style scoped lang="less">

</style>
