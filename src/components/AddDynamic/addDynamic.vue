<template>
  <Layout  :has_footer="false">
    <div class="wrap" slot="header" >
      <mu-appbar >
        <mu-button class="bu-back" flat slot="left" @click="GoBack">
          取消
        </mu-button>
        <span class="mu_text">动态</span>
          <mu-button class="mu-issue"  @click="publish" :disabled="If_show"  round slot="right" >
          发表
        </mu-button>
      </mu-appbar>
      </mu-paper>
      <div class="content">
        <mu-text-field v-model="textarea" solo :placeholder="text_hint"   multi-line :rows="4" full-width></mu-text-field>
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
import { Toast } from 'mint-ui';
export default {
    data: function() {
        return {
          text_hint:'你是小可爱,你说的都对.....',
          imgList:[],
          list:[],
          textarea: '',
          If_show:true
        };
    },

    created() {

        _self = this;
    },
    mounted() {

    },
    methods: {
      publish(){
        const  that=this;
        let param = new  window.FormData();
        for( var i = 0; i < this.imgList.length; i++ ){
          param.append("file",this.imgList[i]);
        }
        param.append('userId',5);
        param.append('title',"hello world");
        param.append('content',this.textarea);
        param.append('dynamicOpenDegreeId',3);
        param.append('dynamicType',4);
        this.$axios.post('/api/Dynamic/addSubmit.do',param, {
            headers: {'Content-Type': 'multipart/form-data'},// 设置传输内容的类型和编码
            withCredentials: true// 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
          })
          .then(function (response) {
            console.log(response.data);
                 if(response.data.data==='上传成功') {
                     that.GoBack();

                 }
                 else {
                   Toast({
                     message: '发布失败！',
                     position: 'middle',
                     duration: 1000
                   });

                 }
          })
          .catch(function (response) {
           console.log(response);
          });

      },
      GoBack(){
        this.textarea="";

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
      getImageList(files) {
         this.imgList=files;//获取选择的图片信息
      },
      //删除图片
      removeImage(index) {
        this.imgList.splice(index, 1);
      },
    },
    computed: {
    },
  watch:{
    textarea(){
      if(this.textarea.length===0)
           this.If_show=true;
      else
          this.If_show=false
    }
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
