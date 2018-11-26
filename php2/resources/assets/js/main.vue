<template>
    <div id="app">
       <vheader></vheader>
           <router-view></router-view>
        <vfooter></vfooter>
    </div>
</template>

<script>
    import vheader from './components/header/header.vue'
    import vfooter from './components/footer/footer.vue'
    export default {
        data(){
            return {}
        },
        components:{
          vheader:vheader,
            vfooter:vfooter
        }
    }
    /* <router-link to="/home">Go to home</router-link>
     <router-link to="arch">Go to search</router-link>
     <router-link to="/">Go to helloworld</router-link>*/

</script>

<style>
body{width:1160px;margin:0 auto;}
</style>
