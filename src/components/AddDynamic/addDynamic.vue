<template>
  <Layout :has_menu="false" :has_footer="false">
    <div class="wrap">

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
        Layout,
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .wrap {
    padding: 0 20px;
    text-align: left;
    padding-top: 30px;

  }
</style>
