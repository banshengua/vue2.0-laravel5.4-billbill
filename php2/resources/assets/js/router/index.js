import Vue from 'vue'
import Router from 'vue-router'
import Movie from '../components/Movie'
import Search from '../components/search/search.vue'
import Body from '../components/body/body.vue'
import  Dance from '../components/header/common/dance.vue';
import  Kichiku from '../components/header/common/kichiku.vue';
import  Ent from '../components/header/common/ent.vue';
import  Music from '../components/header/common/music.vue';
import  Bangumi from '../components/header/common/bangumi.vue';
import  Life from '../components/header/common/life.vue';
import  Fashion from '../components/header/common/fashion.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/movie/:id',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/',
      name: 'Body',
      component: Body
    },
    {
      path:'/dance/:catename',
      name:'Dance',
      component:Dance
    },
    {
       path:'/kichiku/:catename',
      name:'Kichiku',
      component:Kichiku

    },
      {
       path:'/ent/:catename',
      name:'Ent',
      component:Ent

    },
     {
       path:'/music/:catename',
      name:'Music',
      component:Music

    },
      {
       path:'/bangumi/:catename',
      name:'Bangumi',
      component:Bangumi

    },
{
       path:'/life/:catename',
      name:'life',
      component:Life

    },
    {
       path:'/fashion/:catename',
      name:'fashion',
      component:Fashion

    }
  ]
})
