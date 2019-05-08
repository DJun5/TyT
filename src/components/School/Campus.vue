<template>

      <div class="main">
        <div class="header">
          <div>头部内容,需要先展示的。</div>
        </div>
        <div class="auto_fixed" :class="auto_fixed">自动粘滞固定头部，需要一直展示的</div>
        <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>
        <div class="content">
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>
          <div>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。
            -- 阿尔伯特·爱因斯坦
          </div>

        </div>
      </div>
       <!--   <div class="header_A">wd
         &lt;!&ndash; <mu-appbar >
            <div class="search" slot="left">
              <mu-icon :size="22" class="mu-icons" color="#bdbdbd" value="search" ></mu-icon>
              <mu-button flat  class="search-input">搜索内容暂定</mu-button>
            </div>
            <mu-button icon >
              <mu-icon class="mu_accounts" value="account_box" color="#009688"></mu-icon>
            </mu-button>
            <mu-button icon slot="right" >
              <mu-icon value="add"></mu-icon>
            </mu-button>
          </mu-appbar>
           <div class="mu_tabs" v-for="item,index in tabs" :key="index">
             <mu-button icon  class="mu_bu"  >
               <mu-icon  :value="item.icon" class="mu_bu_icons" :size="38" :color="item.color"></mu-icon>
               <span class="mu_span">{{item.text}}</span>
            </mu-button>&ndash;&gt;
           </div>
          </div>
          <div class="auto_fixed" :class="auto_fixed">
           &lt;!&ndash; <div class="mu_tabs" v-for="item,index in tabs" :key="index">
              <mu-button icon  class="mu_bu"  >
                <mu-icon  :value="item.icon" class="mu_bu_icons" :size="42" :color="item.color"></mu-icon>
              </mu-button>
            </div>&ndash;&gt;
          </div>
          <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>
          <div class="content">
            <mu-list>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item><mu-list-item button :ripple="false" to="user/settings">
              <mu-list-item-action>
                <mu-icon value="grade"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>设置</mu-list-item-title>
            </mu-list-item>
              <mu-list-item button :ripple="false" to="user/settings">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item><mu-list-item button :ripple="false" to="user/settings">
              <mu-list-item-action>
                <mu-icon value="grade"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>设置</mu-list-item-title>
            </mu-list-item>
            </mu-list>
          </div>-->
       <!-- </div>-->

</template>
<script>
let _self;
import Layout from '@/components/Layout';
import BScroll from 'better-scroll';
export default {
    data: function() {
        return {
          tabs:[
            { icon:"person_outline",
              text:"寻人",
              color:"#2196f3"
            },
            { icon:"account_balance",
              text:"查组织",
              color:"#009688"
            },
            { icon:"book",
              text:"查专业",
              color:"#ffab40"
            },
            { icon:"near_me",
              text:"办事流程",
              color:"#00e676"
            }
          ],
          auto_fixed: {
            fixed: false
          }
        };
    },
  components: {
    Layout
  },
    methods: {
     ts(){
       console.log("sdsd");
     },
      onScroll(){
        console.log("sdsd");
        let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        let header_height = null;
        if(document.getElementsByClassName('header')[0]){
          header_height = document.getElementsByClassName('header')[0].offsetHeight
        }

        this.auto_fixed = {
          auto_fixed: true,
          fixed: scrolled >= header_height
        };
        console.log('滚动的距离:'+scrolled,'头部的高度:'+ header_height);
      }

    },
  mounted(){
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll())
    })
  }

};
</script>

<style scoped lang="less">
@import url('../../assets/less/common.less');
.main{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.header{
  padding: 8px 10px;
  background-color: red;
  height: 50px;
}
.auto_fixed{
  height:5em;
  background: orange;

}
.fixed{
  position: fixed;
  top: 0px;
  width: 100%;
}
.content{


}

.wrap {
  width: 100%;
  height: 100%;
  position:absolute;
}
.mu-appbar{
     background-color:transparent;
     color: #2e2e2e;
     text-align: center;
  }
.mu-elevation-4{
  box-shadow: none;
}
.header_A{

}

.search{
  width: 255px;
  height: 30px;
  margin-left: 8px;
}
.mu-icons{
  z-index: 1;
  position: absolute;
  margin-top: 2px;
}
.mu_accounts{
  margin-top: 5px;
  margin-left: -5px;
}
.mu_bu{
  float: left;
  width: 80px;
  height: 80px;
  margin-left: 2%;
  margin-top: 3%;

}
.mu_span{
   position: absolute;
   bottom:15px;
   font-size:13px;
}
.mu_bu_icons{
  position: absolute;
  top:2px;
}
.search-input {
  width:100%;
  color:#bdbdbd;
  text-align: center;
  background-color: #eeeeee;
  border:none;
  height: 25px;
  font-size: 15px;
  border-radius: 5px;
}
</style>
