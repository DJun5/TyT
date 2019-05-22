<template>
  <div class="body">
 <!-- 导航-->
  <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left" @click="address">
      <mu-icon value="keyboard_backspace"  ></mu-icon>
    </mu-button>
    <mu-list-item-title style="text-align: center;">扫一扫</mu-list-item-title>
  </mu-appbar>

<!--扫码-->
    <div class="scan">

               <div id="bcid">
               </div>

                <div class="con">
                  <mu-button @click="startRecognize">创建控件</mu-button>
                  <mu-button @click="startScan">开始扫描</mu-button>
                  <mu-button @click="cancelScan">结束扫描</mu-button>
                  <mu-button @click="closeScan">关闭控件</mu-button>
                </div>
    </div>




  </div>
</template>

<script type='text/ecmascript-6'>
  let scan = null;

  export default {
    data() {
      return {
        codeUrl: '',

      }
    },
    created(){
     this.startRecognize();
      this.startScan();
      console.log('111111111');
    },
    destroyed(){
      this.cancelScan();
      this.closeScan();
      console.log('2222222222');
    },
    methods: {


      address() {
        this.$router.push("/message/address");
      },
      //创建扫描控件
      startRecognize() {
        let that = this;
        if (!window.plus) return;
        scan = new plus.barcode.Barcode('bcid');
        scan.onmarked = onmarked;

        function onmarked(type, result, file) {
          switch (type) {
            case plus.barcode.QR:
              type = 'QR';
              break;
            case plus.barcode.EAN13:
              type = 'EAN13';
              break;
            case plus.barcode.EAN8:
              type = 'EAN8';
              break;
            default:
              type = '其它' + type;
              break;
          }
          result = result.replace(/\n/g, '');
          that.codeUrl = result;
          alert(result);
          that.closeScan();

        }
      },
      //开始扫描
      startScan() {
        if (!window.plus) return;
        scan.start();
      },
      //关闭扫描
      cancelScan() {
        if (!window.plus) return;
        scan.cancel();
      },
      //关闭条码识别控件
      closeScan() {
        if (!window.plus) return;
        scan.close();
      },

    }
  }
</script>

<style lang="less">
.scan {

  height: 90%;
  #bcid {
    width: 100%;
    height:90%;
    position: absolute;
    left: 0;
    right: 0;
    //top: 0;
    bottom:3rem;
    text-align: center;
    color: #fff;
   //background: #ccc;
  }
.con {
    position: absolute;
    left: 0;
    bottom: 1rem;
    height: 2rem;
    line-height: 2rem;
    z-index: 2;
  }
}

.body{
  height: 100%;
  width: 100%;
  //background-color: black;
  color:white;
}
.mu-primary-color{
  background-color: #f5f5f5;
  color: black;
}
.mu-item-title{
  padding-right: 40px;
}
.mu-appbar{

  box-shadow: 0px 0px 0px 0px black;
}
</style>

