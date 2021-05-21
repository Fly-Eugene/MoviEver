import Vue from 'vue'
import VueRouter from 'vue-router'

// 현재, Home, 회원가입, 로그인 라우터 생성했습니다.
import Home from '../views/Home.vue'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import Movie from '@/views/movie/Movie'
import MovieInfo from '@/views/movie/MovieInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/movies',
    name: 'Movie',
    component: Movie
  },
  {
    // 주소를 동적 라우팅 하기 위해서는 v-bind를 통해 원하는 변수를 표현해준다.
    // 만약 같이 보내고 싶은 데이터가 있다면 props를 true로 해준다.
    // 상세한 사항이 궁금하다면 MovieItem.vue로 가시면 됩니다!
    path: '/movies/:id',
    name: 'MovieInfo',
    component: MovieInfo,
    props:true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
