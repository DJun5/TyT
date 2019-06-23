<template>
  <div>
    <!--搜索导航-->
    <mu-appbar style="width: 100%;color: black;" >
      <mu-button icon slot="left" @click="address">
        <mu-icon value="keyboard_backspace"  ></mu-icon>
      </mu-button>
      <mu-select icon="search" label="" filterable v-model="filterable.value1" full-width
                 @change="found(filterable.value1)">
        <mu-option  v-for="a,index in friends" :key="friends" :label="a" :value="a"></mu-option>
      </mu-select>
    </mu-appbar>

    <!--搜索列表-->
    <div>
      <mu-list textline="two-line">
        <mu-list-item avatar button :ripple="false"  @click="chat(item.name)"
                      v-if="item.name===filterable.value1"   v-for="item,index in list_one" :key="index">
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
            <mu-badge content="12"></mu-badge>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </div>



  </div>
</template>

<script>
  export default {
    name: "Addfriend",
    data () {
      return {
        friends: [
          '张三','李四','王五',
        ],
        list_one:[
          {"name":"张三","con":"每次人们走进这片荒野，","tf":true},
          {"name":"李四","con":"被他们惊艳的同时，","tf":true},
          {"name":"王五","con":"心中也充满着敬畏。","tf":true},
        ],
        filterable: {
          value1: '',

        }
      }
    },
    created(){
      //  this.getParams();
    },
    methods: {
      address() {
        if (this.leftAction) {
          this.leftAction.call(this.$parent);
        } else {
          if (history.length > 1) {
            this.$router.go(-1);
          } else {
            this.$router.push("/message/address");
          }
        }

      },
      found(value) {

        alert(value);
      },
      getParams() {
        this.list_one = this.$route.query.list_one;
        console.log(this.$route.query.list_one);
      },
    }
  }
</script>

<style scoped lang="less">
  .appbar-search-field{
    color: black;
    margin-bottom: 0;
    &.focus-state {
      color: #FFF;
    }
    .mu-text-field-hint {
      color: fade(#FFF, 54%);
    }
    .mu-text-field-input {
      color: #FFF;
    }
    .mu-text-field-focus-line {
      background-color: #FFF;
    }
  }
  .mu-primary-color{
    background-color: #f5f5f5;

  }
  .mu-appbar{
    box-shadow: 0px 0px 0px 0px black;
  }
  .mu-appbar-title{
    padding-top: 10px;
    margin: 0px;
  }
  .mu-input{
    margin-bottom: 0px;
    padding-bottom: 35px;
  }
  .mu-input.has-icon{
    margin-top: 30px;
  }
  .mu-input__focus{
    color:#474a4f;
  }
</style>
