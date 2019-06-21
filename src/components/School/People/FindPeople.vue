<template>
  <div class="wrap">
    <mu-paper :z-depth="5">
      <mu-button icon slot="left" @click="goBack">
        <mu-icon color="red" value="arrow_back"></mu-icon>
      </mu-button>
      <mt-search  v-model="search" class="search" cancel-text="取消" placeholder="搜索">
      </mt-search>
    </mu-paper>
    <div class="classify" >
      <mu-button ref="button" class="kind_btn" @click="kind" :ripple="false" >
       {{selected}}
        <mu-icon right value="arrow_drop_down"  v-show="!open"></mu-icon>
        <mu-icon right value="arrow_drop_up" v-show="open" ></mu-icon>
      </mu-button>
      <mu-popover cover :open.sync="open" placement="bottom-start" :cover="true" :trigger="trigger">
        <mu-list>
          <mu-list-item button v-for="item,index in DepartmentItem" :key="index"  @click="SelectDepartment(item.text)">
            <mu-list-item-title>{{item.text}}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-popover>
    </div>
    <!--------师生列表------------>
    <div class="content" >
      <mu-list v-if="search!=null" textline="three-line" v-show="!if_null" v-for="items,index in peoples" :key="index">
        <mu-list-item avatar :ripple="false" button >
          <mu-list-item-action>
            <mu-avatar>
             <!-- <img :src="items.headImg">-->
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{items.name}}
            <mu-icon :value="items.identify" class="people_icon" :size="16" color="primary" ></mu-icon>
            </mu-list-item-title>
              <span style="color: rgba(0, 0, 0, .5)">{{items.post}}</span>
            <br>
              <span>{{items.position}}</span>
            </mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
      </mu-list>
      <mu-list v-if="search==null" textline="three-line" v-show="!if_null" v-for="items,index in Peoples" :key="index">
        <mu-list-item avatar :ripple="false" button >
          <mu-list-item-action>
            <mu-avatar>
              <!-- <img :src="items.headImg">-->
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{items.name}}
              <mu-icon :value="items.identify" class="people_icon" :size="16" color="primary" ></mu-icon>
            </mu-list-item-title>
            <span style="color: rgba(0, 0, 0, .5)">{{items.post}}</span>
            <br>
            <span>{{items.position}}</span>
            </mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
      </mu-list>
      <div class="if_null" v-show="if_null">暂无数据</div>
    </div>
    <!--------师生列表------------>
  </div>
</template>

<script>
  import { Search } from 'mint-ui';
  export default{
    data:function(){
      return{
        search_text:"输入名字或者学号",
        selected:"全部分类",
        kind_icon:"arrow_drop_down",
        open: false,
        search:null,
        trigger: null,
        if_null:false,
        DepartmentItem:[
          {"text":"全部"},
          {"text":"电气信息工程系"},
          {"text":"机电工程系"},
          {"text":"经济管理系"},
          {"text":"交通工程系"},
          {"text":"外语系"},
          {"text":"建筑工程系"},
          {"text":"旅游管理系"},
          {"text":"基础教学部"},
          {"text":"材料工程系"},
          {"text":"体育工作部"},
          {"text":"艺术系"},
          {"text":"思想政治理论课教学部"}
        ],
        Peoples:[],
        People:[
          {"name":"张三","post":"副教授,辅导员","position":"商务英语一班、商务一英语二班","identify":":iconfont icon-jiaoshi","headImg":"",section:"外语系"},
          {"name":"李四","post":"副教授,指导教师","position":"电气自动化二班","identify":":iconfont icon-jiaoshi","headImg":"",section:"电气信息工程系"},
          {"name":"王二","post":"教授,指导教师","position":"电气自动化一班、二班","identify":":iconfont icon-jiaoshi","headImg":"",section:"电气信息工程系"},
          {"name":"邓俊","post":"团支书","position":"软件技术一班","identify":":iconfont icon-xuesheng","headImg":"",section:"电气信息工程系"},
          {"name":"曾洪林","post":"班长","position":"软件技术二班","identify":":iconfont icon-xuesheng","headImg":"",section:"电气信息工程系"},
          {"name":"胥小龙","post":"无","position":"软件技术一班","identify":":iconfont icon-xuesheng","headImg":"",section:"电气信息工程系"},
          {"name":"张蓉","post":"班主任","position":"软件技术一班","identify":":iconfont icon-jiaoshi","headImg":"",section:"电气信息工程系"},
          {"name":"李立","post":"辅导员,思想政治课教师","position":"软件技术一班、二班","identify":":iconfont icon-jiaoshi","headImg":"",section:"艺术系"},
          {"name":"汪健","post":"c#课教师","position":"软件技术一班、二班","identify":":iconfont icon-jiaoshi","headImg":""},
          {"name":"郑翔","post":"Java基础课教师","position":"软件技术一班、二班","identify":":iconfont icon-jiaoshi","headImg":"",section:"基础教学部"},
          {"name":"周帅","post":"无","position":"软件技术一班","identify":":iconfont icon-xuesheng","headImg":"",section:"体育工作部"},
          {"name":"刘洋","post":"无","position":"软件技术一班","identify":":iconfont icon-xuesheng","headImg":"",section:"交通工程系"}
        ]
      }

    },
    mounted(){
      this.trigger = this.$refs.button.$el;
    },
    created(){
      this.Peoples=this.People;
    },
    methods: {
      goBack(){/*返回上一级*/
        if (this.leftAction) {
          this.leftAction.call(this.$parent);
        } else {
          if (history.length > 1) {
            this.$router.go(-1);
          } else {
            this.$router.push('/campus');
          }
        }
      },
      kind(){
        this.open = !this.open;
      },//点击分类
      SelectDepartment(val){
        this.selected = val;
        this.open = false;
        this.category(val);
        console.log(this.Peoples);
        this.Peoples.length===0?this.if_null=true:this.if_null=false;
      },//选择系部，进行分类
      category(val){
        this.Peoples= this.People.filter(function (item) {
           return item.section===val||val==="全部";
        });
      }

    },
    computed: {
       peoples(){
         const that=this;
         let Peoples;
         Peoples=that.People.filter(p=>p.name.indexOf(that.search)!==-1)
         return Peoples;
       }
    },
    watch:{
      Peoples(){

      }
    }
  }

</script>
<style scoped lang="less">
  .wrap{
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .classify{
    width: 100%;
    height: 5%;
    margin-top: 5px;
    background-color: #e0e0e0;
    position: absolute;
  }
  .kind_btn{
    font-size: 12px;
    background-color: transparent;
    height: 30px;
    color: #9e9e9e;
    right: 3%;
    position: absolute;
     box-shadow: none;
    border: none;
  }
  .mu-popover{
    margin-top:34px;
    background-color:#eeeeee;
    height: 450px;
    width: 150px;
    overflow: auto;
    z-index: 99;
  }
  .mu-popover::-webkit-scrollbar{
    width: 0;
    height: 0;
  }
  .content{
    width: 100%;;
    position: absolute;
    top: 13%;
  overflow: auto;
  bottom: 0;
  }
  .content::-webkit-scrollbar{
    width: 0;
    height: 0;
  }
  .people_icon{

    margin-left:6px;
    position: absolute;
  }
.if_null{
  width: 100%;
  height: 100%;
  position: absolute;
  color:#bdbdbd;
  font-size: 15px;
  text-align: center;
}
.mu-paper{
  background-color:#d9d9d9;
}
  .search{
    width:90%;
    position: absolute;
    height: 39px;
    margin-left: 10%;
    top:0.5%;
  }


</style>
