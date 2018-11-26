<template>
  <div class="hello">
    <h1> lam header</h1>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {}
  },
   components:{

   },
  created(){
    /* this.$http.get('/billbill/api/dance').then( (response) => {
             var Data = response.data;
                console.log(Data);
                }).catch((error) =>{
                alert(error);
            });*/

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
