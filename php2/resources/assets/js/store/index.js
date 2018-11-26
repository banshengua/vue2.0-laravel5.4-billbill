 import Vue from 'vue'
  import Vuex from 'vuex'
  import club from './modules/club';
  Vue.use(Vuex);
  // 导出需要的模块
  export default new Vuex.Store({
      modules: {
          club
     }
  });