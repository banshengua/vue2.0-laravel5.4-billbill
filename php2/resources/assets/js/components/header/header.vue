<template>
 <div class="vheader">
    <div class="head">
        <div class="left-head">
            <ul class="left-head-nav">
                <li><a href=""><i class="icon"></i>主站</a></li>
                <li><a>笑话大全</a></li>
                <li><a>搞笑图片</a></li>
                <li><a>关于我</a></li>
            </ul>
        </div>
        <div class="right-head">
            <el-button  size="small"  style="margin-top:4px;" type="info" round><a  style="text-decoration: none;color: white;" href="http://www.bloxh36.cn/php2/admin/login">后台登录</a></el-button>
            <el-button   size="small" style="margin-top:4px;" type="info" round><a  style="text-decoration: none;color: white;">注册</a></el-button>
        </div>
    </div>
     <div class="head-body">
         <div class="head-icon">
         </div>
         <div class="head-search">
             <el-form ref="form" :model="form" label-width="80px" :inline="true">
                 <el-form-item>
             <el-input  placeholder="请输入内容" v-model="form.keyword" ></el-input>
                 </el-form-item>
                 <el-form-item>
               <router-link to="/search">  <el-button type="primary" size="small" @click="onSubmit"> 搜索</el-button></router-link>
                     </el-form-item>
             </el-form>
         </div>
     </div>
     <div class="head-nav">
         <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
             <el-menu-item index="1"><router-link to="/#"><div class="icon"></div><span class="title">首页</span></router-link></el-menu-item>
             <el-menu-item index="2"><router-link to="/dance/dance"><div class="num-wrap"><span class="num">779</span></div><span class="title">舞蹈</span></router-link></el-menu-item>
             <el-menu-item index="3"><router-link to="/kichiku/kichiku"><div class="num-wrap"><span class="num">99</span></div><span class="title">鬼畜</span></router-link></el-menu-item>
             <el-menu-item index="4"><router-link to="/bangumi/bangumi"><div class="num-wrap"><span class="num">100</span></div><span class="title">动画</span></router-link></el-menu-item>
             <el-menu-item index="5"><router-link to="/fashion/fashion"><div class="num-wrap"><span class="num">999+</span></div><span class="title">时尚</span></router-link></el-menu-item>
             <el-menu-item index="6"><router-link to="/life/life"><div class="num-wrap"><span class="num">999+</span></div><span class="title">生活</span></router-link></el-menu-item>
             <el-menu-item index="7"><router-link to="#"><div class="num-wrap"><span class="num">0</span></div><span class="title">广告(无)</span></router-link></el-menu-item>
             <el-menu-item index="8"><router-link to="#"><div class="num-wrap"><span class="num">0</span></div><span class="title">电影(无)</span></router-link></el-menu-item>
             <el-menu-item index="9"><router-link to="#"><div class="num-wrap"><span class="num">0</span></div><span class="title">科技(无)</span></router-link></el-menu-item>
             <el-menu-item index="10"><router-link to="#"><div class="num-wrap"><span class="num">0</span></div><span class="title">游戏(无)</span></router-link></el-menu-item>
             <el-menu-item index="11"><router-link to="/ent/ent"><div class="num-wrap"><span class="num">102</span></div><span class="title">明星</span></router-link></el-menu-item>
             <el-menu-item index="12"><router-link to="/music/music"><div class="num-wrap"><span class="num">88</span></div><span class="title">音乐</span></router-link></el-menu-item>
             
     
         </el-menu>
     </div>
 </div>
</template>
<script>
    import {EventBus} from '../../bus';
    
export default{

    name:'header',
    data() {
        return {
            form: {
                keyword: '',
                type: []
            },
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        onSubmit() {
          this.$store.dispatch('getMineBaseApi',this.form.keyword)
        }
    },
    mounted() {

    }
};

</script>
<style>
a{text-decoration: none;}
.vheader{
    width:1160px;
    height: 230px;
    position: relative;
    top:0;
    left:0;
    margin:0 auto;
    font-size: 12px;
}
.vheader>.head{position: absolute;
    top:0;left: 0;z-index: 50;background-color:rgba(	72, 209 ,204,.4) ;box-shadow: 0 1px 2px rgba(0,0,0,.1);height: 42px;width: 100%}
.vheader>.head>.left-head{width: 350px;height: 42px;top:0;left:10%;position: absolute;
    z-index:51;}
.vheader>.head>.left-head>.left-head-nav{list-style: none;height: 42px;width: 400px;
   margin-top:0px; }
.vheader>.head>.left-head>.left-head-nav>li{float:left;height: 42px;}
.vheader>.head>.left-head>.left-head-nav>li>a{display: block;height: 42px;width: 80px;margin-left:20px ;text-decoration: none;
    color: black;text-align: center;line-height: 40px;}
.vheader>.head>.left-head>.left-head-nav>li>a>.icon{display: inline-block;background-image:url('/php2/uploads/icons.png');
background-position:-919px -88px; width:17px;  height:14px;}
.vheader>.head>.right-head{position: absolute;
    top:0;
    right:10%;width: 350px; height: 42px;
    z-index:51;}
.vheader>.head-body{width: 100%;height: 150px;background-image:url('/php2/uploads/back.png@.webp.jpg');position: absolute;
    top:0;
    left:0;}
.vheader>.head-body>.head-icon{position: absolute;left:11%;width: 225px;height:90px;
    top:50px;background-image: url('/php2/uploads/icon.png@.webp');}
.vheader>.head-body>.head-search{position: absolute;width: 300px;height:40px;top:100px;right:10%;}
.vheader>.head-nav{position: absolute;top:160px;left:50%;width: 1160px;height: 50px;margin-left:-580px;}
.el-menu-demo>.el-menu-item{text-align: center;margin-left:31px;text-decoration: none;}
.el-menu-demo>.el-menu-item>a>.num-wrap>.num{display: block;font-size: 12px;background-color:#ffafc9;color:#fff;
border-radius: 3px;line-height: 14px;padding: 1px 3px;font-family: sans-serif;width:28px;}
.el-menu-demo>.el-menu-item>a>.icon{position: absolute;width:30px;top:3px;left:32px;z-index:10; background:url('/php2/uploads/icons.png') -660px -1170px  no-repeat;height: 30px;}
.el-menu-demo>.el-menu-item>a{text-decoration: none;}
.el-menu-demo>.el-menu-item>a>.num-wrap{position: absolute;top:8px;height:14px;width:100%;text-align: center;padding-left: 5px}
.el-menu-demo>.el-menu-item>a>.title{text-decoration: none;display: block;width:50px;text-align: center;font-size: 12px;color:#222;margin-top: 10px;}
.head-nav>.el-menu{background: white;}
</style>
