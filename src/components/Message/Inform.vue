<template>
  <div class="body">
    <!-- 导航-->
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="message">
        <mu-icon value="keyboard_backspace"></mu-icon>
      </mu-button>
      <mu-list-item-title style="text-align: center;">通 知</mu-list-item-title>

      <mu-menu slot="right">
        <mu-button flat>
          <mu-icon value="add"></mu-icon>
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button @click="aopenAlertDialog">
            <mu-icon value="delete" :size="20"></mu-icon>
            <mu-list-item-title style="margin-left: 10px">
              删除全部
            </mu-list-item-title>
          </mu-list-item>

          <mu-list-item button @click="refresh">
            <mu-icon value="replay" :size="20"></mu-icon>
            <mu-list-item-title style="margin-left: 10px">
              刷新
            </mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-appbar>

    <div style="text-align: center;font-size: 17px "
         v-if="v_if">当前没有新通知！
    </div>


    <!--手风琴-->
    <div class="bodyone">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <mu-container v-for="item,index in list_one" :key="index" @click="toggle('panel1',$event)">
          <mu-expansion-panel :expand="panel === 'panel1'" class="panel" v-if="item.tf">
            <mu-icon value="volume_up" slot="header" color="blue"></mu-icon>

            <!--<mu-checkbox v-model="form.checkbox" :value="'Checkbox ' + index"  label=""
            slot="header"></mu-checkbox>-->

            <div slot="header">{{item.name}}</div>
            <div>{{item.con}}</div>

            <mu-button small round slot="action" @click="openAlertDialog(index)">  <!--@click="item.tf=!item.tf"-->
              <mu-icon :size="20" value=""></mu-icon>
              <span>删除</span>
            </mu-button>
          </mu-expansion-panel>
        </mu-container>
      </mu-load-more>
    </div>

    <!--是否删除-->
    <mu-dialog title="" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false"
               :open.sync="openAlert">
      是否删除此通知？
      <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">取消</mu-button>
      <mu-button slot="actions" flat color="primary" @click="deleteItem">删除</mu-button>
    </mu-dialog>

    <mu-dialog title="" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false"
               :open.sync="aopenAlert">
      是否删除全部通知？
      <mu-button slot="actions" flat color="primary" @click="acloseAlertDialog">取消</mu-button>
      <mu-button slot="actions" flat color="primary" @click="deletelist">删除</mu-button>
    </mu-dialog>
  </div>
</template>
<script>
export default {
    data() {
      return {
        //刷新
        refreshing: false,
        loading: false,

        v_if: false,
        inde: -1,
        checkbox: {
          value1: [],
          value2: false,
          value3: false
        },
        openAlert: false,
        aopenAlert: false,
        showa: true,
        open: false,
        panel: '',
        list_one: [
          {"name": "张三", "con": "每次人们走进这片荒野，", "tf": true},
          {"name": "李四", "con": "被他们惊艳的同时，", "tf": true},
          {"name": "王五", "con": "心中也充满着敬畏。", "tf": true},
          {"name": "张三", "con": "每次人们走进这片荒野，", "tf": true},
          {"name": "李四", "con": "被他们惊艳的同时，", "tf": true},
          {"name": "王五", "con": "心中也充满着敬畏。", "tf": true},
        ],


        form: {
          checkbox: [],
        },
      }
    },
    methods: {
      //刷
      refresh() {
        this.refreshing = true;

        setTimeout(() => {
          this.refreshing = false;
          //刷新内容。。。。
        }, 2000)
      },
      load() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;

        }, 2000)
      },
      openAlertDialog(id) {
        this.inde = id;
        //alert(this.inde);
        this.openAlert = true;
      },
      closeAlertDialog() {
        this.openAlert = false;
      },
      aopenAlertDialog() {
        this.aopenAlert = true;
      },
      acloseAlertDialog() {
        this.aopenAlert = false;
      },

      closeBottomSheet() {
        this.open = false;
      },
      openBotttomSheet() {
        this.open = true;
      },
      message() {
        if (this.leftAction) {
          this.leftAction.call(this.$parent);
        } else {
          if (history.length > 1) {
            this.$router.go(-1);
          } else {
            this.$router.push("/message");
          }
        }

      },
      toggle(panel, e) {
        e.panel = panel === e.panel ? '' : panel;
        alert(index);
      },
      deleteItem() {
        // alert(this.inde);
        this.list_one.splice(this.inde, 1);
        this.openAlert = false;
        //alert(this.list_one.length);
        if (this.list_one.length === 0) {
          v_if = true;
        }
      },
      deletelist() {
        this.list_one.splice(this.list_one[0], this.list_one.length);
        this.aopenAlert = false;
        if (this.list_one.length === 0) {
          this.v_if = true;
        }
      },
      refresh() {

      },
    }
  }
</script>


<style lang="less">
  .body {
    height: 100%;
    width: 100%;
  }

  .mu-primary-color {
    background-color: #f5f5f5;
    color: black;
  }

  .mu-item-title {
    padding-right: 40px;
  }

  .mu-appbar {

    box-shadow: 0px 0px 0px 0px black;
  }

  .panel {
    background-color: #eaeaea;
  }
</style>

