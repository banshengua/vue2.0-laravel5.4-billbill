 import api from '../fetch/api.js';
import * as types from '../types.js';
// state 是vuex 保存数据的，就相当于vue里的data
const state = {
    contextPathSrc: '/php2/api/all/',
    DATA: '',
    Keyword:'',
    pages:'',
    paths:'',
    current_page:'',
    prev_page_url:''
}

 const actions= {
    getMineBaseApi({commit},value) {
    api.mineBaseMsgApi('/php2/api/all/'+value)
    .then(res => {
        commit(types.STORE_MOVIE_DATA, res)
    })
  },
  commonApi({commit},url){
    var params={params:{'page':url[1]}}
     api.commonApi(url[0],params).then(res => {
        commit(types.STORE_MOVIE_DATA, res)
    })
  },
  orderbyApi({commit},url){
    console.log(url[0]+'/'+url[1]);
 api.mineBaseMsgApi(url[0]+'/'+url[1])
    .then(res => {
        commit(types.STORE_ORDERBY_DATA, res)
    })
  }

}
const getters = {
    // 获取ID
    // 
    getDATA: state =>  {
        if(state.DATA==""){
    
         return   window.localStorage?JSON.parse(localStorage.getItem("DATAS")):JSON.parse(Cookie.read("DATAS")); 
               
        }else{
            return state.DATA
        }
    },
    getPages: state =>  {
        if(state.pages==""){
         return   window.localStorage?localStorage.getItem("PAGES"): Cookie.read("PAGES"); 
        }else{
            return state.pages   
        }
    },
    getPaths: state =>  {
        if(state.paths==""){
         return   window.localStorage?localStorage.getItem("PATHS"): Cookie.read("PATHS"); 
        }else{
            return state.paths   
        }
    },
    getCurrent_page: state =>  
    {
        if(state.current_page==""){
         return   window.localStorage?localStorage.getItem("CURPAGE"):Cookie.read("CURPAGE"); 
        }else{
            return state.current_page   
        }
    },
    getPrev_page_url: state =>{
     if(state.prev_page_url==""){
         return   window.localStorage?localStorage.getItem("PREVPAGE"):Cookie.read("PREVPAGE"); 
        }else{
            return state.prev_page_url   
        }
        
    }
}
//mutation名常量定义 并且需要在type.js文件下定义常量 mutations 用来向state提交数据的，只能进行同步操作
const mutations = {
    // 修改ID 中括号代表常量 我们可使用ES2015风格的计算属性命名功能来使用一个常量[types.STORE_MOVIE_ID]作为函数名
    [types.STORE_MOVIE_DATA]( state, res) {
        state.DATA = res.data;
       state.pages=parseInt(res.last_page);
       state.paths=res.path;
         state.current_page=parseInt(res.current_page);
        state.prev_page_url=res.prev_page_url; 
        if(window.localStorage){
         window.localStorage.setItem("DATAS", JSON.stringify(state.DATA));   
        }else{
             Cookie.write("DATAS",JSON.stringify(state.DATA));
        }
        if(window.localStorage){
         window.localStorage.setItem("PAGES",  state.pages);   
        }else{
             Cookie.write("PAGES",  state.pages);
        }
          if(window.localStorage){
         window.localStorage.setItem("PATHS",  state.paths);   
        }else{
             Cookie.write("PATHS",  state.paths);
        }
        if(window.localStorage){
         window.localStorage.setItem("CURPAGE",  state.current_page);   
        }else{
             Cookie.write("CURPAGE",  state.current_page);
        }
         if(window.localStorage){
         window.localStorage.setItem("PREVPAGE",  state.prev_page_url);   
        }else{
             Cookie.write("PREVPAGE",  state.prev_page_url);
        }

    },
    [types.STORE_ORDERBY_DATA](state,res){
          state.DATA = res.data;
       state.pages=parseInt(res.last_page);
         state.current_page=parseInt(res.current_page);
        state.prev_page_url=res.prev_page_url; 
        if(window.localStorage){
         window.localStorage.setItem("DATAS", JSON.stringify(state.DATA));   
        }else{
             Cookie.write("DATAS",JSON.stringify(state.DATA));
        }
        if(window.localStorage){
         window.localStorage.setItem("PAGES",  state.pages);   
        }else{
             Cookie.write("PAGES",  state.pages);
        }
        if(window.localStorage){
         window.localStorage.setItem("CURPAGE",  state.current_page);   
        }else{
             Cookie.write("CURPAGE",  state.current_page);
        }
         if(window.localStorage){
         window.localStorage.setItem("PREVPAGE",  state.prev_page_url);   
        }else{
             Cookie.write("PREVPAGE",  state.prev_page_url);
        }
    }
}
export default {
    state,
    actions,
    getters,
    mutations
}