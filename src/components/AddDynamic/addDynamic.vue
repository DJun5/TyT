<template>
  <Layout  :has_footer="false">
    <div class="wrap" slot="header" >
      <mu-appbar >
        <mu-button class="bu-back" flat slot="left" @click="GoBack">
          取消
        </mu-button>
        <span class="mu_text">动态</span>
          <mu-button class="mu-issue" round slot="right" >
          发表
        </mu-button>
      </mu-appbar>
      </mu-paper>
      <div class="content">
        <mu-text-field v-model="textarea" solo :placeholder="text_hint"  multi-line :rows="4" full-width></mu-text-field>
        <UpLoad @getFiles='getImageList' @removeFiles='removeImage'></UpLoad>
      </div>
      <mu-divider></mu-divider>
    </div>
  </Layout>
</template>

<script>
let _self;
import Layout from '@/components/Layout';
import UpLoad from '@/components/AddDynamic/Upload';
export default {
    data: function() {
        return {
          text_hint:'你是小可爱,你说的都对.....',
          imgList:[],
          textarea: ''
        };
    },
    created() {
        _self = this;
    },
    mounted() {

    },
    methods: {
      GoBack(){

      },
      getImageList(files) {
        this.$nextTick(() => {
          for (let i = 0, len = files.length; i < len; i++) {
          this.imgList.push(files[i].src.split("base64,")[1]);
          //上传图片
          //   this._getFileCode({
          //     Base64Str: files[i].src.split("base64,")[1],
          //     AttachmentType: this.$enums.AttachmentType.Activity
          //   });
        }
      });
      },
      //删除图片
      removeImage(index) {
        this.imgList.splice(index, 1);
      },
    },
    computed: {

    },
    components: {
        Layout,
        UpLoad
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .wrap {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .mu-input-line{
    display: none;
    background-color: red;
  }
  .mu-input-focus-line.focus{
     display: none;
  }

  .mu-appbar{
    text-align: center;
  }
   .mu_text{
    color:#2e2e2e;
    font-size:18px;
  }

  .mu-appbar{
    background-color: transparent;
  }
  .bu-back{
    color: #2e2e2e;
  }
  .mu-issue{
    box-shadow: none;
    border: 1px solid #ff2741;
    background-color: #ff2741;
    color: white;
    min-width: 52px;
    border-radius:35px;
    height: 30px;
  }
  .mu-elevation-4{
  box-shadow:  0 1px 0px 0 rgba(0, 0, 0, 0.1);
  }
</style>
