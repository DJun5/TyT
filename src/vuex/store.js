
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
  user_gz:[],
  count:0
};
const mutations={
  Add_attention(state,gz){
    state.user_gz['name']=gz.name;
  }
};
const getter={

};
const actions= {
  add_attention({commit},name)
  {
    commit('Add_attention',{name:name});
  }
};

export default new Vuex.Store({
  state,//状态对象
  mutations,//多个更新state函数的对象
  getter,//多个getter计算属性的对象
  actions//多个对应事件的回调函数
});
