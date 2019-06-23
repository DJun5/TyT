<template>
  <body>
  <!-- 导航-->
  <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left" @click="Setting">
      <mu-icon value="keyboard_backspace"  ></mu-icon>
    </mu-button>
    <mu-list-item-title style="text-align: center;">我的黑名单</mu-list-item-title>
  </mu-appbar>


  <mu-list textline="two-line" style="">
    <mu-list-item avatar  button :ripple="false"
                  v-for="item,index in list_one" :key="index">
      <mu-list-item-action >
        <mu-avatar  backgroundColor="blue" slot="leftAvatar"style="float: left;margin-right: 15px" >
          <img src="../../assets/images/bg.png" />
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>{{item.name}}</mu-list-item-title>
        <mu-list-item-sub-title>{{item.con}}</mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action>
       <!-- <mu-button  small round class="mu_add1" textColor="red" slot="right"
                    v-if="item.tf"   @click="item.tf=!item.tf;" >
          <mu-icon :size="20"  value="add" ></mu-icon>
          <span >拉黑</span>
        </mu-button>-->
        <mu-button  small round  class="mu_add1" style="color: black" textColor="red" slot="right"
                    v-if="item.tf"   @click="deleteItem(index)">
          <mu-icon :size="20"  value="" ></mu-icon>
          <span>解除拉黑</span>
        </mu-button>
      </mu-list-item-action>
    </mu-list-item>
  </mu-list>

  </body>


</template>

<script>
  export default {
    name: "",
    data () {
      return {
        list_one:[
          {id:1,"name":"张三","con":"2019/5/25 10:24:50","tf":true},
          {id:2,"name":"李四","con":"2019/5/25 10:25:21","tf":true},


        ],
      }
    },
    methods: {

      Setting() {/*返回上一级*/
        if (this.leftAction) {
          this.leftAction.call(this.$parent);
        } else {
          if (history.length > 1) {
            this.$router.go(-1);
          } else {
            this.$router.push('');
          }
        }
      },
      deleteItem(index){
        this.list_one.splice(index, 1);

        // splice方法是删除数组某条数据，或者向某个位置添加数据
      },
    }
  }
</script>

<style scoped>
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
  .panel{
    background-color: #eaeaea;
  }
  .demo-text {
    padding: 16px;
    background: #fff;
  p {
    margin: 8px 0;
  }
  }
  .demo-list-wrap {
    width: 100%;
  //max-width: 360px;
    overflow: hidden;
  }
  .mu_add1{
    position: absolute;
    z-index:100;
    box-shadow:none;
    border: 1px solid #aaaaaa;



  }
  .demo-text{
    padding: 0px;
    margin: 0px;
  }
  .mu-tabs-inverse{
    background-color: white;

  }
  .container{
    padding: 0px;
  }
  .mu-item-action.is-more{
    padding: 0px;
    margin: 0px;
    height: 30px;
  }
</style>
