<template>

       <div class="movie">
           <div class="head-nav"><el-button type="primary" round  @click="getBack()">返回</el-button></div>
           <div class="mv-header">
               <div class="mv-left-header">
                   <span class="title">{{myData.title}}</span>
                   <span class="play" v-if="myData.view<10000"><i class="icon-play"></i>&nbsp;&nbsp;{{myData.view}}</span>
                        <span class="play" v-else><i class="icon-play"></i>&nbsp;&nbsp;{{(myData.view-myData.view%1000)/10000}}万</span>
                   <span class="play"><i class="icon-coins"></i>&nbsp;&nbsp;硬币{{myData.coin}}</span>
                   <span class="play"><i class="icon-factor"></i>&nbsp;&nbsp;收藏{{myData.favorite}}</span>
               </div>
               <div class="my-right-header">
                   <div class="face"><img v-lazy="myData.face" alt="" width="150" height="100"></div>
                   <span class="anthur">up主:{{myData.name}}</span>
               </div>
           </div>
           <div class="mv-play">
               <div class="msg" style="font-size:12px;">提示:只能在本站看高清和流畅(无法全屏,和弹幕),<br>由于兼容问题和vue支持只能在chrome浏览器下观看。
               <br>由于时间不足，没有做用户那块.请期待我的billbill2.0吧</div>
               <div class="video-wraper">
               <h3>手机用户请移动到b站官网上观看<a  target="_blank" :href="'https://www.bilibili.com/video/av'+myData.aid">点击</a></h3>  
                    <div class="video">
                    
                        <iframe height=740 width=980 :src="'http://static.hdslb.com/miniloader.swf?aid='+myData.aid+'&page=1'"    frameborder="0" 
  
    scrolling="no" 
    allowfullscreen="true" 
    webkitallowfullscreen="true"
    mozallowfullscreen="true">
    </iframe>
                    </div>
                    <div class="desc">{{myData.desc}}</div>
               </div>
               <div class="share">
               </div>
           </div>
            <div class="bottom">
                <div class="face"></div>
                <div class="content"> <el-input  style="width: 600px;height:100px;float: left;margin-left:20px;margin-right:20px;" 
  placeholder="请输入内容"
  :disabled="true">
</el-input>
<el-button   type="primary"  size="small"   round>发表评论</el-button>
 <el-button size="small"  style="position:absolute;left:100px;top:22px;"type="info">去登录</el-button></div>
            </div>
       </div>
</template>
<script>

    export default {
        data() {
            return {
                myData: {}
            }
        },
        methods:{
            getBack(){
              window.history.back(-1)
                return  window.history.back(-1);;
            }
            
        },
        created() {
        this.$http.get('/php2/api/'+this.$route.params.id).then((response) => {
            this.myData=response.data;
        }) 



         /*let url="https://bird.ioliu.cn/v2";
            this.$http.get(url,{
                params:{url:'http://api.laifudao.com/open/xiaohua.json'}
            }).then((res) =>{
                console.log(res.data)
        })*/
            /*var instance = axios.create({
                headers: {'content-type': 'application/x-www-form-urlencoded'}
            });
            instance.post(`http://api.laifudao.com/open/xiaohua.json`).then((res) => {
                alert(res.data)});
*/
           /* axios.get('/billbill/hello').then( (response) => {
             var Data = response.data;
                console.log(Data);
                this.myData=Data;
                alert(this.myData)
                }).catch((error) =>{
                alert(error);
            });*/

        }
    }
</script>
<style>
    .movie{width: 1160px;height:1400px;margin: 0 auto;}
    .movie>.mv-header{width: 1160px;height:125px;}
   .movie>.mv-header>.mv-left-header{float: left;width: 400px;height:125px;}
    .movie>.mv-header>.mv-left-header>.title{font-size: 18px;line-height: 24px;height:24px;
        display: inline-block;color:#525659;overflow: hidden;white-space: nowrap;padding: 8px 0;float: left;margin-bottom: 15px;width:400px;}
     .movie>.mv-header>.mv-left-header>.play{display: inline-block;float: left;margin-left:10px;
     width:120px;height:30px;vertical-align: middle;line-height: 2;} 
       .movie>.mv-header>.mv-left-header>.play>.icon-play{background-image:url('/php2/uploads/play.png');
       background-repeat: no-repeat;width: 30px;height:30px;display: inline-block;vertical-align: top;} 
           .movie>.mv-header>.mv-left-header>.play>.icon-coins{background-image:url('/php2/uploads/coin.png');
       background-repeat: no-repeat;width: 30px;height:30px;display: inline-block;vertical-align: top;} 
           .movie>.mv-header>.mv-left-header>.play>.icon-factor{background-image:url('/php2/uploads/star.png');
       background-repeat: no-repeat;width: 30px;height:30px;display: inline-block;vertical-align: top;} 
    .movie>.mv-header>.my-right-header{float: right;width: 150px;height:125px;margin-right:100px;}
  .movie>.mv-header>.my-right-header>.face{width: 100px;height: 100px;border-radius: 50%;margin-left:10px;}
    .movie>.mv-header>.my-right-header>.anthur{font-size: 14px;color:#00b5e5;display: inline-block;overflow: hidden;word-break: break-all;line-height:16px;white-space: nowrap;margin-top:15px;}
        .mv-play>.video-wraper>.desc{font-size: 12px;color:#6d757a;float:left;
            width: 400px;height: auto;word-wrap: break-word;line-height: 16px;margin-top:20px;}
            .movie>.bottom{width: 900px;height:220px;float: left;margin-top:30px;}
            .movie>.bottom>.face{width: 100px;height: 100px;background:#ccc;border-radius: 50%;margin-left:20px;float: left;}
             .movie>.bottom>.content>.el-input>input{height:86px;}
            .movie>.bottom>.content{float: left;width: 750px;height:220px;position: relative;}

</style>