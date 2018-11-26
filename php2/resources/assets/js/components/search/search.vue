<template>
<div class="search">
    <div class="filter-block">
    <div class="select-attr">
      <ul style="list-style:none;">
        <li><el-button size="small"  @click="orderbyData(getPaths,1)">综合排序</el-button></li>
        <li><el-button size="small"  @click="orderbyData(getPaths,2)">最多播放</el-button></li>
        <li><el-button size="small"  @click="orderbyData(getPaths,3)">最多硬币</el-button></li>
      </ul>

    </div>
    </div>
     <div class="so-wrper">
       <ul style="list-style:none;"> 
        <li v-for="item in getDATA" class="video">
          <a :href="'/php2/index#/movie/'+item.aid">
            <div class="img">
              <img v-lazy="item.pic" height="142" width="200">
              <span class="img-time">{{  item.duration | formatDate}}</span>
            </div>
            <div class="info">
              <div class="headline">
                <a href="">{{item.title}}</a>
              </div>
              <div class="tags">
                <span class="so-icon" v-if="item.view/10000>1"><i class="icon-playtime"></i>{{(item.view-item.view%1000)/10000}}万</span>
                <span class="so-icon" v-else><i class="icon-playtime"></i>{{item.view}}</span>
                <span class="so-icon"><i class="icon-up"></i>{{item.name}}</span>
              </div>
            </div>
          </a>
        </li>
       </ul>
     </div>
       
    <div class="pages">
    <ul style="list-style:none" class="search-pages">
        <li style="float:left;"><el-button  size="mini" type="success"   v-show="getPrev_page_url!=null" @click="getData(getPaths+'?page=',getCurrent_page-1)">上一页</el-button></li>
        <li class="page" v-for="page in getPages"><el-button  type="primary"  size="mini"  round  @click="getData(getPaths+'?page=',page)">{{page}}</el-button></li>
        <li style="float:left;"><el-button size="mini" type="success"  v-show="getPages!=getCurrent_page" @click="getData(getPaths,getCurrent_page+1)">下一页</el-button></li>
    </ul>
    </div>
</div>
</template>
<script>
    import {EventBus} from '../../bus';
     import { mapGetters } from 'vuex';
     import {formatDate} from '../date.js'
export default{
    data(){
        return{
            Data:{},
            prev_page_url:{},
            current_page:{},
            pages:{},
            paths:{}
        }
    },
    created(){
     
      },
    methods:{
       getData(url,params){
              this.$store.dispatch('commonApi',[url,params])
       },
       orderbyData(url,params){
    
         this.$store.dispatch('orderbyApi',[url,params])
       }
    
    },
    mounted(){
    },
    filters:{
      formatDate(time) {
                return formatDate(time);
            }
    },
    computed: {
     ...mapGetters(['getDATA','getPaths','getPages','getCurrent_page','getPrev_page_url'])
    }
}
</script>
<style>
a:hover{color:#00a1d6;transition: all .2s}
.search>.so-wrper>ul>.video>a>.info>.headline>a:hover{color:#00a1d6;transition: all .2s}
.search{width:1100px;margin:0 auto;font-size: 12px;height: 1100px;}
.search>.so-wrper{position: relative;height: 850px}
.search>.so-wrper>ul>.video{height: 260px;width: 200px;
border: 1px solid #e5e9ef;border-radius: 4px;float:left;margin-right:32px;margin-bottom:20px;}
.search>.so-wrper>ul>.video>a{text-decoration: noen;}
.search>.so-wrper>ul>.video>a>.img{position: relative;border-radius: 4px;height:142px;overflow: hidden;
border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;margin-bottom: 15px}
.search>.so-wrper>ul>.video>a>.img>.img-time{position:absolute;right:0;bottom: 0;
line-height: 18px;padding: 0 5px;color: #fff;background-color:rgba(0,0,0,.5); border-top-left-radius: 4px;}
.search>.so-wrper>ul>.video>.info{padding: 8px 10px 0 10px}
.search>.so-wrper>ul>.video>a>.info>.headline{margin-bottom: 12px;height:40px;overflow: hidden;}
.search>.so-wrper>ul>.video>a>.info>.headline>a{font-size: 12px;line-height: 20px;color:#222;}
.so-icon{display: inline-block;
font-size: 12px;height: 12px;padding-left: 16px;position: relative;color:#99a2aa;}
.search>.so-wrper>ul>.video>.info>.tags>.so-icon{margin-right:8px;
margin-bottom: 12px;float: left;  }
.so-icon>i{position: absolute;left:0;top:0;}
.so-icon>.icon-playtime{background-image:url('/billbill/uploads/icons1.png');background-repeat: no-repeat;
background-position: -485px -543px;width:11px;height:11px; }
.so-icon>.icon-up{background-position: -442px -83px; width: 11px;height:11px;background-image:url('/billbill/uploads/icons1.png') ;}
.pages{width: 700px;margin:0 auto;height:50px;clear: left;}
.pages>.search-pages{height: 50px;padding-top:50px;}
.pages>ul>.page{float: left;width: 50px;height:50px;margin-left:10px;}
.pages>ul>.page>a{display: block;width: 20px;height:20px;padding:5px;text-align: center;font-size: 16px;background-color:#00BFFF;color:white;}
.search>.filter-block{width: 1100px;margin: 0 auto;font-size:12px;height:50px;}
.filter-block>.select-attr>ul>li{float: left;margin-left:20px;}
</style>