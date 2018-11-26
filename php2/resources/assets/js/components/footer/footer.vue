<template>
<div class="footer">
<div class="footer-wrapper">
    <div class="left-footer">
        <span class="avatar"></span>
        <span class="title">QQ:1016613143</span>
        <span class="title">徐豪 电话17725022170</span>
        <span class="title">重庆师范大学计算机科学与技术（职教）1班</span>
    </div>
    <div class="mid-footer">
        <span class="title">技术栈</span>
        <span class="title">vue2.0全家桶+laravel5.4</span>
        <span class="title">1.抓取b站api</span>
        <span class="title">2.laravel-mix搭建前端脚手架</span>
        <span class="title">3.解决axios在laravel里面跨域的问题。</span>
         <span class="title">4..模拟前后端分离开发，api交互数据</span>
    </div>
    <div class="later-footer">
        <span class="icon"></span>
    </div>
</div>

</div>

</template>
<script>
    export default{
       name:'footer',
        data(){
        return {}
        }
    }
</script>
<style>
.footer{width:1160px;height:250px;
    background: #f6f9fa;}
.footer>.footer-wrapper{margin: 0 auto;
    width:1160px;font-size: 16px;}
.footer-wrapper>.left-footer{width: 33%;border-right:1px solid #ccc;display: inline-block;}
.footer-wrapper>.left-footer>.avatar{background-image:url('/php2/uploads/avatar.png'); background-repeat: no-repeat;display:block;width: 80px;height: 80px;margin-left:135px;}
.footer-wrapper>.mid-footer{width: 33%;border-right:1px solid #ccc;display: inline-block;}
.footer-wrapper>.later-footer{width: 30%;display: inline-block;}
    .left-footer>.title{display:block;text-align: center;margin-top:28px;padding-right:20px; }
.mid-footer>.title{display:block;text-align: center;margin-top:20px;;padding-right:20px; }
    .later-footer>.icon{background-image:url('/php2/uploads/qq.png'); background-repeat: no-repeat;display:block;width: 150px;height: 150px;margin-left:150px;}
</style>
