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
        filterable: {
          value1: '',

        }
      }
    },
    methods: {
      address() {
        this.$router.push("/message/address");
      },
      found(value) {
        alert(value);
      }
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
    color: black;
  }
</style>
