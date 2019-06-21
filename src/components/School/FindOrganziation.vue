<template>
  <div class="wrap">
    <mu-paper :z-depth="5">
      <mu-button icon slot="left" @click="goBack">
        <mu-icon color="red" value="arrow_back"></mu-icon>
      </mu-button>
      <mt-search  v-model="search" class="search" cancel-text="取消" placeholder="输入组织名">
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
  </div>
</template>

<script>
  export  default  {
    data: function(){
      return {
        search:null,
        selected:"全部分类",
        kind_icon:"arrow_drop_down",
        open: false,
        DepartmentItem:[
          {"text":"全部"},
          {"text":"院系级"},
          {"text":"校级"},
          {"text":"社团与协会"},
          {"text":"学生会"},
          {"text":"九大组织"}
        ],
      }
    },
    mounted(){
      this.trigger = this.$refs.button.$el;
    },
    methods:{
      goBack() {/*返回上一级*/
        if (this.leftAction) {
          this.leftAction.call(this.$parent);
        } else {
          if (history.length > 1) {
            this.$router.go(-1);
          } else {
            this.$router.push('/Campus');
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
    }
  }


</script>

<style scoped lang="less">
  .wrap{
    width: 100%;
    height:100%;
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
