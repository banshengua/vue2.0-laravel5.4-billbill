<template>
    <div class="classic">
        <div class="left">
            <div class="classic-title">
                <span class="icon1"></span><a class="text"  href="">生活</a>
            </div>
            <div class="left-classic">
                <div class="classic-img" v-for="item in life">
                    <a :href="'/php2/index#/movie/'+item.aid" style="text-decoration: none">
                        <div class="pic"><img v-lazy="item.pic" alt="" width="160" height="100">
                            <div class="mask-video"></div>
                            <span class="dur">{{item.duration | formatDate}}</span>
                        </div>
                        <p class="title">{{item.title}}</p>
                        <p class="num">
                            <span class="play" v-if="item.view/10000>=1"><i class="icon"></i>{{(item.view-item.view%1000)/10000}}万</span>
                            <span class="play" v-else><i class="icon"></i>{{item.view}}</span>
                            <span class="danmu" v-if="item.coin/10000>1"><i class="icon"></i>{{(item.coin-item.coin%1000)/10000}}万</span>
                            <span class="danmu" v-else><i class="icon"></i>{{item.coin}}</span>
                        </p>
                    </a>
                </div>
            </div></div>
        <div class="right-classic">
            <div class="rink-hand">
                <h3>排行</h3>
            </div>
            <div class="rank-list-wrapper">
                <ul class="rank-list">
                    <li class="rank-item" v-for="(item,index) in life1">
                        <i class="ri-num">{{index+1}}</i>
                        <a :href="'/php2/index#/movie/'+item.aid" class="ri-info-wrap">
                            <div class="ri-detail">
                                <p class="ri-title">{{item.title}}</p>
                                <p class="ri-point">综合评分:{{(item.view*item.coin-item.view*item.coin%1000)/10000}}万</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
   <router-link to="/life/life" class="move-link" style="text-decoration: none">查看更多
                <i class="icon icon-arrow-r"></i>
            </router-link>
        </div>
    </div>
</template>
<script>
    import {formatDate} from '../../date.js';
    export default{
        props:['life','life1'],
        data(){
            return{

            }
        },
        filters: {
            formatDate(time) {
                return formatDate(time);
            }
        }
    }
</script>
<style>
    .classic{width: 1160px;height:415px;}
    .classic>.left{
        width:900px;float:left;}
    .classic>.left>.classic-title{width:900px;height:45px;padding-right:20px;float: left; }
    .classic>.left>.classic-title>.icon1{width:40px;height:40px;margin-right:10px;float: left;margin-top:-10px;vertical-align: middle;
        display: inline-block;background-image:url(/php2/uploads/icons.png);background-position:-137px -970px ;}
    .classic>.left>.classic-title>.text{font-size: 24px;line-height: 24px;font-weight: 400;margin-right:20px;
        float: left;color:#222;text-decoration: none;}
    .classic>.left>.left-classic{clear: left;float: left;height: 336px;width: 900px;overflow: hidden;}
    .classic>.left>.left-classic>.classic-img{float: left;margin:0 20px 20px 0;}
    .classic-img{position: relative;height: 148px;width: 160px;font-size: 12px;overflow: hidden;}
    .classic-img>a>.pic{position: relative;width: 160px;height:100px;border-radius:4px;display: block;text-align: center;
        overflow: hidden;}
    .classic-img>a>.pic>.mask-video{position: absolute;
        left:0;top:0;width:100%;height:100%;background: rgba(0,0,0,.2);opacity: 0;}
    .classic-img>a>.pic>.dur{opacity: 0;position: absolute;
        left:6px;bottom:2px;color:#fff;height:12px;line-height: 12px;padding: 0 5px 1px 0;}
    .classic-img>a>.title{margin-top:8px;height:40px;line-height: 20px;color:#222;text-align: left;word-wrap: break-word;word-break: break-all;
        overflow: hidden;}
    .classic-img>a>.num{position: absolute;
        width:100%;bottom:0;height:20px;line-height: 20px;color:#99a2aa;background-color: #fff;font-size: 0;}
    .classic-img>a>.num>span{height: 14px;line-height:12px;display: inline-block;width: 50%;font-size: 12px;
        vertical-align: bottom;overflow: hidden;}
    .classic-img>a>.num>span>i{display: inline-block;width: 12px;height: 12px;vertical-align: top;margin-right:5px;}
    .classic-img>a>.num>.play>.icon{background-image:url('/php2/uploads/icons.png');background-position:-282px -90px}
    .classic-img>a>.num>.danmu>.icon{background-image:url('/php2/uploads/icons.png');background-position:-282px -218px}
    .classic>.left>.left-classic>.classic-img:hover  a>.pic>.mask-video{opacity: 1;transition:opacity 0.3s ;}
    .classic>.left>.left-classic>.classic-img:hover  a>.pic>.dur{transition:all 0.3s ;opacity: 1;}
    .classic>.left>.left-classic>.classic-img:hover  a>.title{color:#00a1d6;transition:all .2s}
    .classic>.left>.left-classic>.classic-img:hover  a>.num{bottom: -20px;transition: all .3s}
    .classic>.left>.classic-title>a:hover{color:#00a1d6;transition:all .2s}
    .classic>.right-classic{width:260px;min-height:336px;float: right;overflow: hidden;}
    .classic>.right-classic>.rink-hand{height:24px;line-height: 24px;width:260px;}
    .classic>.right-classic>.rink-hand>h3{font-size: 20px;font-weight: 400;}
    .classic>.right-classic>.rank-list-wrapper{
        width:200%;overflow: hidden;/*transition: all .2s linear*/
        zoom: 1;}
    .classic>.right-classic>.rank-list-wrapper>.rank-list{position: relative;padding-bottom:15px;
        height: 278px;width: 50%;float: left;margin-top: -21px;}
    .right-classic>.rank-list-wrapper>.rank-list>.rank-item{position:relative;padding-left:25px;right:25px;
        margin-top:20px;overflow: hidden;}
    .rank-list-wrapper>.rank-list>.rank-item>.ri-num{position:absolute;color:#fff;height:18px;
        line-height: 18px;top:0;left:0;font-size: 12px;width: 12px;text-align: center;background-color:#b8c0cc;
        border-radius: 4px; padding:0 3px; font-weight: bolder;font-style: normal;}
    .rank-list-wrapper>.rank-list>.rank-item:nth-child(1)  .ri-num{background: #f25d8e}
    .rank-list-wrapper>.rank-list>.rank-item:nth-child(2)  .ri-num{background: #f25d8e}
    .rank-list-wrapper>.rank-list>.rank-item:nth-child(3)  .ri-num{background: #f25d8e}
    .rank-list>.rank-item>.ri-info-wrap{cursor: pointer;position: relative;display: block;
        text-decoration: none;}
    .rank-list>.rank-item>a:hover{transition: all .2s;color:#00a1d6}
    .rank-list>.rank-item>a>.ri-detail{float:left;font-size: 12px;}
    .rank-list>.rank-item>a>.ri-detail>.ri-title{line-height: 18px;font-size: 12px;height:18px;
        color:#00a1d6;overflow: hidden;margin-top:-16px}
    .rank-list>.rank-item>a>.ri-detail>.ri-point{line-height: 12px;display: none;font-size: 12px;
        color:#99a2aa;height:12px;margin-top:3px;overflow: hidden;}
    .right-classic>.move-link{display: block;height:24px;line-height: 24px;background-color:#e5e9ef;font-size: 12px;
        text-align: center;border:1px solid #e0e6ed;color:#222;border-radius:4px;/*transition .2s*/}
    .right-classic>.move-link>.icon-arrow-r{display: inline-block;vertical-align: middle;
        background-position:-478px -218px;width: 6px;height:12px;margin:-2px 0 0 5px; }
    .right-classic>.move-link>.icon{background-image:url('/php2/uploads/icons.png') }
</style>
