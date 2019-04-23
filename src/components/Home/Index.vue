<template>
    <Layout :has_share="false">
      <mu-appbar class="app_bar" :z-depth="1" slot="header">
        <!--上部Tabs-->
        <mu-tabs :value="active1" center    class="tabs"  @change="handleChange"   >
          <mu-tab value=0 >关注</mu-tab>
          <mu-tab value=1 >发现</mu-tab>
          <mu-tab value=2 >推荐</mu-tab>
        </mu-tabs>
        <!--上部Tabs-->
       <!--搜索框-->
        <div class="search">
          <mu-icon :size="22" class="mu-icons" color="#bdbdbd" value="search" ></mu-icon>
          <mu-button flat  class="search-input">搜索内容暂定</mu-button>
        </div>
        <!--搜索框-->
      </mu-appbar>
      <!--主内容-->
      <div class="containers" slot="container" >
         <!--关注-->
          <div class="content" v-if="active1==0" >
            <Attention/>
          </div>
        <!--关注-->

        <!--发现-->
          <div class="content" v-if="active1==1" >
            <Find/>
          </div>
        <!--发现-->
        <!--推荐-->
          <div class="content" v-if="active1==2" >
            <Recommend/>
          </div>
        <!--推荐-->

         </div>
      <!--主内容-->
    </Layout>
</template>
<script>
let _self;
import Layout from '@/components/Layout';
import Find from '@/components/Home/find';
import Attention from '@/components/Home/attention';
import Recommend from '@/components/Home/recommend';
export default {
    data: function() {
        return {
          loading: 'init',
          tvs: [],
          trigger: null,
          active1: '1'
        }
    },
    created() {
        _self = this;
    },
    mounted() {
        this.trigger = this.$el
    },
    methods: {
      handleChange(val) { //改变选中状态
        this.active1 = val;
        console.log(val);
      }
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
        Find,
      Attention,
      Recommend
    }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../assets/less/common.less');
.app_bar{
  position: relative;
  width: 100%;
  height:80px;
}
.containers{
  width:100%;
  position: absolute;
  height: 80%;
  overflow: auto;
}
.containers::-webkit-scrollbar {/*高宽分别对应横竖滚动条的尺寸*/
  width: 0px;
  height: 0px;
}

.mu-appbar {
  background-color:transparent;

}

.footer_wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}
.tabs{
   background-color:transparent;
   width: 55%;
   position: absolute;
   margin-top: -50px;
   margin-left: 20%;

}
.search {
  position: absolute;
  margin-top: 5px;
  width:92%;
  height: 200px;

}
.mu-icons{
  z-index: 1;
  position: absolute;
  margin-top: 2px;
}
.search-input {
  position: absolute;
  width:100%;
  color:#bdbdbd;
  text-align: center;
  background-color: #eeeeee;
  border:none;
  height: 25px;
  font-size: 15px;
  border-radius: 15px;
}

.mu-tab{
  color: #bdbdbd;
}
.mu-tab-active {
  color: black;

}

</style>
