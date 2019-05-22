<template>
  <div class="body">
    <!-- 导航-->
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="message">
        <mu-icon value="keyboard_backspace"  ></mu-icon>
      </mu-button>
      <mu-list-item-title style="text-align: center;">通 知</mu-list-item-title>
    </mu-appbar>


    <mu-container>
      <mu-expansion-panel :expand="panel === 'panel1'" class="panel"
                          v-for="item,index in list_one" :key="index" @change="toggle('panel1',$event)">
        <div slot="header">{{item.name}}</div>
        Lorem ipsum dolor sit amet, co eget.
      </mu-expansion-panel>
    </mu-container>


  </div>
</template>

<script type='text/ecmascript-6'>


  export default {
    data() {
      return {
        panel: '',
        list_one:[
          {"name":"张三","con":"每次人们走进这片荒野，",},
          {"name":"李四","con":"被他们惊艳的同时，",},
          {"name":"王五","con":"心中也充满着敬畏。",},


        ],
      }
    },

    methods: {
      message() {
        this.$router.push("/message");
      },
      toggle (panel,e) {

          e.panel = panel === e.panel ? '' : panel;
          alert(index);


      }
    }
  }
</script>

<style lang="less">
  .body{
    height: 100%;
    width: 100%;
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
  .panel{
    background-color: #eaeaea;
  }
</style>

