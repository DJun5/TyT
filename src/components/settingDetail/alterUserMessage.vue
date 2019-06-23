<template>
   <div class="wrap">
     <mu-appbar :z-depth="0" title="个人资料" text-color="black"   >
       <mu-button icon slot="left" @click="goBack">
         <mu-icon color="red" value="arrow_back"></mu-icon>
       </mu-button>
       <mu-button icon slot="right" disabled  >
       </mu-button>
     </mu-appbar>
     <div class="person_top">
       <mu-list  toggle-nested>

         <mu-list-item  button :ripple="false">
           <mu-list-item-title @click="alterAvatar" >头像</mu-list-item-title>
           <mu-list-item-action>
             <mu-avatar style="margin-right:20px;" :size="26">
               <img :src="imageList[0]"/>
             </mu-avatar>
           </mu-list-item-action >
           <mu-icon   value="keyboard_arrow_right" :size="32"></mu-icon>
         </mu-list-item>


         <mu-list-item   button :ripple="false">
           <mu-list-item-title>昵称</mu-list-item-title>
           <mu-list-item-action class="item_text">
             <input type="text" class="inputs" value="仄言" />
           </mu-list-item-action >
         </mu-list-item>


         <mu-list-item   button :ripple="false">
           <mu-list-item-title>身份</mu-list-item-title>
           <mu-list-item-action class="item_text">
             <p style="color: #bdbdbd; width:100px;left:0;position: absolute;text-align: left;">学生</p>
           </mu-list-item-action >
         </mu-list-item>


         <mu-list-item   button :ripple="false">
           <mu-list-item-title>院校</mu-list-item-title>
           <mu-list-item-action class="item_text">
             <p style="color: #bdbdbd; width:150px;left:0;position: absolute;text-align: left;"> 四川工程职业技术学院</p>
           </mu-list-item-action >
         </mu-list-item>

         <mu-list-item   button :ripple="false"  nested :open="open === 'department'" @toggle-nested="open = arguments[0] ? 'department' : ''" >
           <mu-list-item-title>系部</mu-list-item-title>
           <mu-list-item-action class="item_text">
             <p style="color: #bdbdbd; width:100px;left:0;position: absolute;text-align: left;">{{departments}}</p>
           </mu-list-item-action >
             <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
           <mu-list-item button :ripple="false" v-for="item,index in DepartList" slot="nested">
             <mu-list-item-title @click="getDepartment(item.text)">{{item.text}}</mu-list-item-title>
           </mu-list-item>
         </mu-list-item>



       <mu-list-item   button :ripple="false" nested :open="open === 'major'" @toggle-nested="open = arguments[0] ? 'major' : ''">
         <mu-list-item-title>专业</mu-list-item-title>
         <mu-list-item-action class="item_text">
           <p style="color: #bdbdbd; width:100px;left:0;position: absolute;text-align: left;">{{major}}</p>
         </mu-list-item-action >
           <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
         <mu-list-item button :ripple="false" v-for="item,index in majorList" slot="nested">
           <mu-list-item-title @click="getMajor(item.text)">{{item.text}}</mu-list-item-title>
         </mu-list-item>
         </mu-list-item>


         <mu-list-item   button :ripple="false">
           <mu-list-item-title>家乡</mu-list-item-title>
           <mu-list-item-action class="item_text">
             <input type="text" class="inputs" value="四川省成都市邛崃市金鸡村13组" />
           </mu-list-item-action >
         </mu-list-item>



         <mu-list-item   button :ripple="false">
           <mu-list-item-title>手机号</mu-list-item-title>
           <mu-list-item-action class="item_text">
             <input type="text" class="inputs" value="13709012631" />
           </mu-list-item-action >
         </mu-list-item>

         <mu-list-item   button :ripple="false">
           <mu-list-item-title>邮箱</mu-list-item-title>
           <mu-list-item-action class="item_text">
             <input type="text" class="inputs" value="" />
           </mu-list-item-action >
         </mu-list-item>
       </mu-list>

     </div>

     <mu-bottom-sheet :open.sync="open_bottom">
       <mu-list @item-click="closeBottomSheet">
         <mu-list-item button>
           <mu-list-item-action>
             <mu-icon value="insert_photo" color="orange"></mu-icon>
           </mu-list-item-action>
           <mu-list-item-title>
             本地上传
           </mu-list-item-title>
           <input type="file"  @change="selectImgs($event)" multiple="multiple" accept="image/*"  >
         </mu-list-item>
         <mu-list-item button>
           <mu-list-item-action>
             <mu-icon value="add_a_photo" color="blue"></mu-icon>
           </mu-list-item-action>
           <mu-list-item-title >拍照上传</mu-list-item-title>
           <input type="file" accept="image/*" capture="camera"  @change="selectImgs($event)" >
         </mu-list-item>
       </mu-list>
     </mu-bottom-sheet>

   </div>
</template>
<script>
  import Major from "../../../static/Json/Major.json";
  import PhotoSwipe from "photoswipe";
  import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";
  import "photoswipe/dist/photoswipe.css";
  import "photoswipe/dist/default-skin/default-skin.css";
  export default{
    data:function() {
      return {
       open:"send",
        departments:"",
        major:"",
        open_bottom: false,
        department2:null,
        DepartList:[
          {"text":"电气信息工程系"},
          {"text":"机电工程系"},
          {"text":"经济管理系"},
          {"text":"交通工程系"},
          {"text":"外语系"},
          {"text":"建筑工程系"},
          {"text":"旅游管理系"},
          {"text":"基础教学部"},
          {"text":"材料工程系"},
          {"text":"艺术系"},
          {"text":"思想政治理论课教学部"}
        ],
        imageList:[],
        files: [], // 文件缓存
        index: 0, // 序列号
        maxLength:1 , // 图片最大数量
        maxSize: 10240000 //图片限制为10M内
      }
    },
    created(){

    },
    methods:{
      /*返回上一级*/
      goBack() {
        if (this.leftAction) {
          this.leftAction.call(this.$parent);
        } else {
          if (history.length > 1) {
            this.$router.go(-1);
          } else {
            this.$router.push('/user/setting');
          }
        }
      },
      //选择系部
      getDepartment(val){
        this.departments=val;
        if(this.department2!=val)
        {
          this.major="";
          this.department2=val;
        }
        this.open="";

      },
      //选择专业
      getMajor(val){
        this.major=val;
        this.open="";
      },
      //修改头像
      closeBottomSheet () {
        this.open_bottom = false;
      },
      alterAvatar () {
        this.open_bottom = true;
      },
      //选择图片
      selectImgs(event) {
        let fileList = event.target.files;
        if (fileList.length > 9) {
          alert(this.lang.dynamic_upload_tips);
        }
        let tempList = []; //每次点击+号后选择的图片信息
        for (let i = 0, len = fileList.length; i < len; i++) {
          let fileItem = {
            Id: this.index++,
            name: fileList[i].name,
            size: fileList[i].size,
            file: fileList[i]
          };
          //将图片文件转成Base64
          let reader = new FileReader();
          reader.onloadend = e => {
            this.getBase64(e.target.result).then(url => {
              this.$set(fileItem, "src", url);
          });
          };
          if (fileItem.size > this.maxSize) {
            Toast(this.lang.dynamic_over_size);
          } else {
            reader.readAsDataURL(fileList[i]);
            tempList.push(fileItem);
            this.files.push(fileItem);
          }
        }
        setTimeout(() => {
          this.$emit("getFiles", tempList);
      }, 300);
        this.files.splice(9);
        console.log(this.files);
        this.getImage(this.files);
      },
      // 图片压缩并保存到files
      getBase64(url) {
        let self = this;
        let Img = new Image(),
          dataURL = "";
        Img.src = url;
        let p = new Promise(function(resolve, reject) {
          Img.onload = function() {
            //要先确保图片完整获取到，这是个异步事件
            let canvas = document.createElement("canvas"), //创建canvas元素
              width = Img.width, //确保canvas的尺寸和图片一样
              height = Img.height;
            // 默认将长宽设置为图片的原始长宽，这样在长宽不超过最大长度时就不需要再处理
            let ratio = width / height,
              maxLength = 1000,
              newHeight = height,
              newWidth = width;
            // 在长宽超过最大长度时，按图片长宽比例等比缩小
            if (width > maxLength || height > maxLength) {
              if (width > height) {
                newWidth = maxLength;
                newHeight = maxLength / ratio;
              } else {
                newWidth = maxLength * ratio;
                newHeight = maxLength;
              }
            }
            canvas.width = newWidth;
            canvas.height = newHeight;
            canvas.getContext("2d").drawImage(Img, 0, 0, newWidth, newHeight); //将图片绘制到canvas中
            dataURL = canvas.toDataURL("image/jpeg", 0.5); //转换图片为dataURL
            resolve(dataURL);
          };
        });
        return p;
      },
      getImage(files){
          for (let i = 0, len = files.length; i < len; i++){
          this.imageList.push(files[i].split("base64,")[1]);
        }
      }
       },
    computed: {
      majorList(){
        const that=this;
        let list;
        for(let index in Major)
        {
          if(index==that.departments)
          {
            list=Major[index];
          }
        }
return list;
      }
    }
  }
</script>
<style scoped lang="less">
  .wrap{
    width: 100%;
    height:100%;
    position: absolute;

  }
  .mu-appbar{
    background-color: transparent;
    width: 100%;
    text-align: center;
  }
  .person_top{
    width: 100%;
    height: 100%;
      top: 0;
    bottom:0 ;
    overflow: auto;
    margin-top: -10px;
  }
  .person_top::-webkit-scrollbar{
    width: 0px;
    height: 0px;
  }
  .person_bottom{
    width: 100%;
    height:60%;
    margin-top: -5px;
  }
  .item_text{
    position: absolute;
    left:80px;
    text-align: center;
    /*text-align: right;;*/
    z-index: 1;

  }
  .inputs{
    border: none;
    text-align: left;
    color: #bdbdbd;
    width: 200px;
  }
  input[type="file"] {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 110px;
    opacity: 0;
  }
</style>
