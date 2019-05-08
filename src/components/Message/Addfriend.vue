<template>
    <!--搜索导航-->





  <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left" @click="address">
      <mu-icon value="keyboard_backspace"  ></mu-icon>
    </mu-button>
    <mu-text-field icon="search" class="appbar-search-field"
                   slot="right" hintText="snvjsdfjskd"/>
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
