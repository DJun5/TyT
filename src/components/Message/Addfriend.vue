<template>
    <!--搜索导航-->
  <mu-appbar >
    <mu-icon-button  @click="address" icon="keyboard_backspace" slot="left"/>
    <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="输入昵称或账号"/>
  </mu-appbar>
</template>

<script>
    export default {
        name: "Addfriend",
    data () {
      return {

      }
    },
    methods: {
      address() {
        this.$router.push("/message/address");
      }
    }
  }
</script>

<style scoped lang="less">
  .appbar-search-field{
    color: #FFF;
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
</style>
