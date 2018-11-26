<template>
<div class="Body">

<vrecommand></vrecommand>
<vclassic :dance="dance" :dance1="dance1"></vclassic>
	<vguichu :guichu="guichu" :guichu1="guichu1"></vguichu>
	<vent :ent="ent" :ent1="ent1"></vent>
	<vmusic :music="music" :music1="music1"></vmusic>
	<vanimate :animate="animate" :animate1="animate1"></vanimate>

</div>

</template>
<script>

import vrecommand from '../recommand/Recommand';
import vclassic from './classic/classic';
import vguichu from './guichu/guichu';
import vent from './ent/ent';
import vmusic from './music/music';
import vanimate from './animate/animate';


export default {
data(){
	return{
		dance:[],
		dance1:[],
		guichu:[],
		guichu1:[],
		ent:[],
		ent1:[],
		music:[],
		music1:[],	
		animate1:[],
		animate:[]
	}
},
components:
{  
	vrecommand:vrecommand,
	vclassic:vclassic,
	vguichu:vguichu,
	vent:vent,
	vmusic:vmusic,
	vanimate:vanimate,

},
created(){
	this.$http.get('/php2/api/dance').then((response) => {
		var Data=response.data;
		var num=response.data.length-18;
		var start=parseInt(Math.random()*(num+1));
	for(var i=start;i<start+10;i++){
			this.dance.push(Data[i])
		}
	for(var i=start+10;i<start+17;i++){
		this.dance1.push(Data[i])
	}
	})
	this.$http.get('/php2/api/kichiku').then((response) => {
		var Data=response.data;
	var num=response.data.length-18;
	var start=parseInt(Math.random()*(num+1));
	for(var i=start;i<start+10;i++){
		this.guichu.push(Data[i])
	}
	for(var i=start+10;i<start+17;i++){
		this.guichu1.push(Data[i])
	}
})
	this.$http.get('/php2/api/ent').then((response) => {
		var Data=response.data;
	var num=response.data.length-18;
	var start=parseInt(Math.random()*(num+1));
	for(var i=start;i<start+10;i++){
		this.ent.push(Data[i])
	}
	for(var i=start+10;i<start+17;i++){
		this.ent1.push(Data[i])
	}
})
	
	this.$http.get('/php2/api/music').then((response) => {
		var Data=response.data;
	var num=response.data.length-18;
	var start=parseInt(Math.random()*(num+1));
	for(var i=start;i<start+10;i++){
		this.music.push(Data[i])
	}
	for(var i=start+10;i<start+17;i++){
		this.music1.push(Data[i])
	}
})
	
	this.$http.get('/php2/api/bangumi').then((response) => {
		var Data=response.data;
	var num=response.data.length-18;
	var start=parseInt(Math.random()*(num+1));
	for(var i=start;i<start+10;i++){
		this.animate.push(Data[i])
	}
	for(var i=start+10;i<start+17;i++){
		this.animate1.push(Data[i])
	}
})
	
	
}



}
</script>
<style>
.Body{width: 1160px;margin:0 auto;}
</style>
