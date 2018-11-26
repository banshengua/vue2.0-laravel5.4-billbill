<template>
<div class="comhead">
<div class="recommand">
	<div class="Body">
		<div class="block">
			<div class="left-rec">
				<el-carousel height="270px" arrow="never">
					<el-carousel-item v-for="item in thumb" :key="item.aid">
						<a :href="'/php2/index#/movie/'+item.aid"><img v-lazy="item.pic" alt="" width="620" height="270">{{item.title}}</a>
					</el-carousel-item>
				</el-carousel>
			</div>

		</div>
		<div class="right-rec">
			<div class="home-card groom-module" v-for="(item, index) in midData">
				<a :href="'/php2/index#/movie/'+item.aid">
					<img v-lazy="item.pic" alt="item.title" width="159" height="100"   >
					<div class="card-mark" ref="cardMark">
						<p class="titles">{{item.title}}</p>
						<p class="authors"  ref="authors">up主:{{item.name}}</p>
						<p class="plays" v-if="item.view/10000<1" ref="plays">播放数:{{item.view}}</p>
						<p class="plays" v-else ref="plays">播放数:{{(item.view-item.view%1000)/10000}}万</p>
					</div>
				</a>
			</div>
		</div>
	</div>
	<div class="search">
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
	</div>
</div>
</div>
</template>
<script>
	import {formatDate} from '../../date.js';
	export default{
		name:'Recommand',
		data(){
			this.getdatas()
			return{
				thumb:[],
				midData:[],
				getDATA:[]
			}
		},
		created(){
		
	
		},
		methods:{
			getdatas(){
				this.$http.get('/php2/api/'+this.$route.params.catename).then((response) => {
				/*var Data=response.data;
			var
			
			for(var i=start;i<start+18;i++){
				this.dance.push(Data[i])
			}*/
			var	Data=response.data;
			var  num=response.data.length-30;
			var start=parseInt(Math.random()*(num+1));
				for(var i=start;i<start+4;i++){
					var	tempData =Data[i];
					this.thumb.push(tempData);
				}
			for(var i=start+4;i<start+10;i++){
				var	tempData =Data[i];
				this.midData.push(tempData);
			}
			for(var i=start+10;i<start+30;i++){
				var	tempData =Data[i];
				this.getDATA.push(tempData);
			}


		}).catch((error) => {
			alert("error")
				
		});	

			},
			

	
			init(index){
				var cardmarks=document.getElementsByClassName('card-mark')[index];
				var plays=document.getElementsByClassName('plays')[index];
				var authors=document.getElementsByClassName('authors')[index];
				cardmarks.style.height=100+'%';
				cardmarks.style.top=-20+'px';
				cardmarks.style.opacity=0.7;
				cardmarks.style.background='black';
				authors.style.opacity=1;
				plays.style.opacity=1;
			},
			initLeave(index){
				var cardmarks=document.getElementsByClassName('card-mark')[index];
				var plays=document.getElementsByClassName('plays')[index];
				var authors=document.getElementsByClassName('authors')[index];
				cardmarks.style.height=20+'px';
				cardmarks.style.top=59+'px';
				cardmarks.style.background='linear-gradient(transparent,rgba(0,0,0,.1) 20% ,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9))';
				authors.style.opacity=0;
				plays.style.opacity=0;
			}
		},
		computed:{
		
			

		},
		mounted(){

		},
		filters: {
			formatDate(time) {
				return formatDate(time);
			}
		}
		

	}

</script>
<style>
	.comhead>.recommand{width: 1160px;height: 1700px;margin:0 auto;}
	.comhead>.recommand>.Body{width: 1160px;height: 270px}
	.comhead>.recommand>.Body>.block{width: 620px;height: 270px ;}
	.comhead>.recommand>.Body>.right-rec{height: 270px;width: 540px;}
	.comhead>.recommand>.Body>.right-rec>.groom-module{margin:15px 0 20px 20px;}
	.groom-module{	width: 160px;height: 100px;position:relative;overflow: hidden;border-radius: 4px;background: #fff;display: inline-block; }
	.card-mark{position: absolute;
		left:0;top:59px;width: 150px;font-size: 12px;height: 20px;line-height: 20px;padding: 10px 5px ;
		overflow: hidden;background: #000;background:linear-gradient(transparent,rgba(0,0,0,.1) 20% ,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9)) ;
	}
	.card-mark>.titles{
		color: #fff;height:40px;overflow: hidden;margin-bottom: 5px;word-break:break-all;word-wrap:break-word;display: block}
	.card-mark>.authors{opacity: 0;height: 16px;line-height: 16px;overflow: hidden;
		color: #99a2aa;}
	.card-mark>.plays{opacity: 0;height: 16px;line-height: 16px;overflow: hidden;color: #99a2aa;}
.right-rec>.groom-module:hover .card-mark{height: 100%;top:-20px;background:rgba(0,0,0,.7) ;}
	.right-rec>.groom-module:hover .authors,.right-rec>.groom-module:hover .plays{
		opacity: 1;
		transition: all .6s;
	}
	.recommand>.bot-rec{width: 1160px;height: 230px;}
	.recommand>.bot-rec>.bot-rec-title{height:45px;
		width:1160px;margin-top:50px;}
	.recommand>.bot-rec>.bot-rec-title>.icon{display: inline-block;background-image:url('/php2/uploads/icons.png');background-position:-141px -75px ;
	width: 40px;height:40px;margin-right:10px;vertical-align: middle;float: left;margin-top:-10px;}
	.recommand>.bot-rec>.bot-rec-title>.text{font-size: 24px;font-weight: 400;float:left;}
	.recommand>.bot-rec>.bot-rec-img{
		float: left; margin:0 20px 20px 0;
		width:173px;height:148px;}
	.recommand>.bot-rec>.bot-rec-img>a>.pic{
		position: relative;
		width:173px;border-radius: 4px;text-align: center;
	}
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	.search{width:1100px;margin:0 auto;font-size: 12px;height: 1100px;}
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
.so-icon>.icon-playtime{background-image:url('/php2/uploads/icons1.png');background-repeat: no-repeat;
background-position: -485px -543px;width:11px;height:11px; }
.so-icon>.icon-up{background-position: -442px -83px; width: 11px;height:11px;background-image:url('/php2/uploads/icons1.png') ;}
</style>music.vue