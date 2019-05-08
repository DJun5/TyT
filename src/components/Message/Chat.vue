<template>
<div class="body">
  <!--导航-->
  <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left" @click="message">
      <mu-icon value="keyboard_backspace"  ></mu-icon>
    </mu-button>
    <mu-list-item-title style="text-align: center;">好友名</mu-list-item-title>
    <mu-button icon slot="right" @click="message">
      <mu-icon value="videocam"  ></mu-icon>
    </mu-button>
    <mu-button icon slot="right" @click="message">
    <mu-icon value="call"  ></mu-icon>
  </mu-button>
    <mu-button icon slot="right" @click="message">
    <mu-icon value="person"  ></mu-icon>
    </mu-button>
  </mu-appbar>
<!--中部-->
<div class="middle">
  <div style="height: 60px"></div><!--占位-->

  <my-dialogue :userData="userData"
               class="dialogue"
               @scrollC="scrollC"></my-dialogue>


</div>

  <!--底部-->
  <div class="bottom" >
    <div class="bottom1">
      <mu-container>
        <mu-text-field v-model="value12"  icon="comment"  placeholder="输入信息"></mu-text-field>
        <mu-button icon  @click="sendValue" >
          <mu-icon value="send"  ></mu-icon>
        </mu-button>
      </mu-container>
    </div>

    <div class="bottom2">
      <mu-button icon  @click="message">
        <mu-icon value="mic_none"  ></mu-icon>
      </mu-button>
      <mu-button icon  @click="message">
        <mu-icon value="photo_size_select_actual"  ></mu-icon>
      </mu-button>
      <mu-button icon  @click="message">
        <mu-icon value="tag_faces"  ></mu-icon>
      </mu-button>
      <mu-button icon  @click="message">
        <mu-icon value="switch_video"   ></mu-icon>
      </mu-button>
      <mu-button icon  @click="message">
        <mu-icon value="cloud_queue"  ></mu-icon>
      </mu-button>
      <mu-button icon  @click="message">
        <mu-icon value="photo_camera"  ></mu-icon>
      </mu-button>
      <mu-button icon  @click="message">
        <mu-icon value="folder_open"  ></mu-icon>
      </mu-button>

    </div>
  </div>


</div>
</template>

<script>
  export default {
    name: "Chat",
    data () {
      return {
        value12: '',
      }
    },
    methods: {
      message() {
        this.$router.push("/message");
      },
      sendValue() {
        if (this.value.length) {
          this.$store.dispatch('sendValue', {
            _id: this.userData.friend._id,
            message: this.value,
            that: this
          })
        } else {
          console.log('不能为空')
        }
        this.value = ''
      },
    }
  }
</script>

<style scoped lang="less">
  .body{
    height: 100%;
  }
  .middle{

  }
  .bottom{
    position: fixed;
    bottom: 0;
    text-align: center;
  }
.bottom2{
  text-align: center;
  margin-top: -20px;
  color:rgba(0,0,0,.3);
}
.bottom1{
  text-align: center;
/*  display: flex;
  justify-content: center;
  padding: 0 10px;*/
}

</style>
