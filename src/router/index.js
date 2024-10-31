import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home/index.vue';
import Login from '../views/login/index.vue';
import Video from '../views/video/index.vue';
import Game from '../views/Game/index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path:'/video',
    name:'Video',
    component:Video
  },
  {
    path:'/game',
    name:'Game',
    component:Game
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;