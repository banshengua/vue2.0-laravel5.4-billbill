
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue';
import main from './main';
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import ElementUI from 'element-ui'
import axios from 'axios';
import store from './store/index.js';
  import VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/index.js'
import router from './router/index';
Vue.use(VueLazyload, {
error: 'dist/error.png',//这个是请求失败后显示的图片
loading: 'dist/loading.gif',//这个是加载的loading过渡效果
try: 5, // 这个是加载图片数量
listenEvents:['scroll','mousewheel']
})
Vue.prototype.$http= axios;
Vue.use(ElementUI,{ size: 'small' });
const app = new Vue({
    el:'#app',
    store,
    router,
    render: h=>h(main)
});
