<template>
<div class="recommand">
	<div class="Body">
		<div class="block">
			<div class="left-rec">
				<el-carousel height="220px" arrow="never">
					<el-carousel-item v-for="item in thumb" :key="item.aid">
						<a :href="'/php2/index#/movie/'+item.aid"><img v-lazy="item.pic" alt="" width="440" height="220">{{item.title}}</a>
					</el-carousel-item>
				</el-carousel>
			</div>

		</div>
		<div class="right-rec">
			<div class="home-card groom-module" v-for="(item, index) in rightData">
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
	<div class="bot-rec">
	<div class="bot-rec-title"><span class="icon"></span><span class="text">推广</span></div>
		<div class="bot-rec-img" v-for="item in bottomData">
			<a :href="'/php2/index#/movie/'+item.aid" style="text-decoration: none">
				<div class="pic"><img v-lazy="item.pic" alt="item.title"
				 width="173" height="100">
				<div class="pic-mask"></div>
				<span class="dur">{{item.duration | formatDate}}</span>
				</div>
				<p class="title">{{item.title}}</p>
			</a>
		</div>
	</div>

</div>
</template>
<script>
	import {formatDate} from '../date.js';
	export default{
		name:'Recommand',
		data(){
			return{
				thumb:[],
				rightData:[],
				bottomData:[],
			}
		},
		created(){
			this.$http.get('/php2/api/douga').then((response) => {
				/*var Data=response.data;
			var num=response.data.length-18;
			var start=parseInt(Math.random()*(num+1));
			for(var i=start;i<start+18;i++){
				this.dance.push(Data[i])
			}*/
			var	Data=response.data;
			var num=response.data.length-24;
			var start=parseInt(Math.random()*(num+1));
				for(var i=start;i<start+5;i++){
					var	tempData =Data[i];
					this.thumb.push(tempData);
				}
			for(var i=start+5;i<start+13;i++){
				var	tempData =Data[i];
				this.rightData.push(tempData);
			}
			for(var i=start+18;i<start+24;i++){
				var	tempData =Data[i];
				this.bottomData.push(tempData);
			}

		}).catch((error) => {
			alert("error")
				
		});
		},
		methods:{
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
	.recommand{width: 1160px;height: 490px;}
	.recommand>.Body{width: 1160px;height: 220px}
	.recommand>.Body>.block{float: left;width: 440px;height: 220px ;}
	.recommand>.Body>.right-rec{float: left;height: 220px;width: 720px;}
	.recommand>.Body>.right-rec>.groom-module{float: left;margin:0 0 20px 20px;}
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
	.bot-rec>.bot-rec-img>a>.pic>.pic-mask{position: absolute;opacity: 0;
		width:173px;height: 100px;background:rgba(0,0,0,.2);top:0;}
	.bot-rec>.bot-rec-img>a>.pic>.dur{opacity: 0;position: absolute;bottom: 2px; color:#fff;
		left:6px;line-height: 12px;padding: 0 5px 1px 0;
		height:12px;font-size: 12px;}
	.bot-rec>.bot-rec-img>a>.title{height:40px;line-height:20px;
		color: #222;word-wrap: break-word;word-break: break-all;text-align: left;overflow: hidden;font-size: 12px;margin-top:0; }
	.bot-rec>.bot-rec-img:hover a>.pic>.pic-mask,.bot-rec>.bot-rec-img:hover a>.pic>.dur{opacity:1;transition:opacity .3s}
	.bot-rec>.bot-rec-img:hover a>.title{color:#00a1d6;transition:all .2s}
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
</style>