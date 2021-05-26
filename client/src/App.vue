<template>
  <div id="app">
    <!-- routerlink 네브바에 구성되어 있습니다. -->
    <!-- main 화면 네브바 만들기 -->
    <!-- navbar-light bg-light -->
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"><img src="../../logo.png" alt="" width="120" height="40"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <div v-if="isLogin">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/">Home</router-link> |
              </li>
              <li class="nav-item">
                <router-link @click.native="$store.dispatch('logout')" to='#'>Logout</router-link> |
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Movie' }">Movie</router-link> |
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'MapApp' }">Map</router-link> |
              </li>
              <li class="nav-item">
                <a href="http://127.0.0.1:8000/admin/">Manager</a> |
              </li>
            </ul>
          </div>
          <div v-else>
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/">Home</router-link> |
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Signup' }">Singup</router-link> |
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Login' }">Login</router-link> |
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'MapApp' }">Map</router-link> |
              </li>
              <li class="nav-item">
                <span @click="onManager">Manager</span>|
              </li>
            </ul>            
          </div>
          <!-- Navbar에 searchbar를 만들었습니다. -->
          <div>
            <div class="input-group mb-2 ">
              <input v-model="searchMovie" type="text" id="searchBar" list="dataList" class="form-control" placeholder="영화 검색" aria-describedby="button-addon2" >
              <!-- Search Bar 함수 추가 -->
              <button @click="onSearch" class="btn btn-outline-secondary" id="MovieInfoBtn" type="button" data-bs-toggle="modal" data-bs-target="#movieInfoModal">Search</button>
                <datalist id="dataList">
                  <option v-for="movie of movie_list" :key="movie.id" :value="movie.title" ></option>
                </datalist>
            </div>
          </div>
        </div>


      </div>
    </nav>
    
    <!-- 여기는 router-view -->
    <transition name="slide-fade" mode="out-in"> 
      <router-view /> 
    </transition>

    <!-- Movie Info -->
    <div class="modal fade" id="movieInfoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fs-3" id="staticBackdropLabel">Movie Info</h5>
            <button @click="onClose" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div v-if="!selectedMovieDetail" class="container">
              <hr>
              <p class="fs-1 text-center alert alert-danger">WARNING!!</p>
              <hr>
              <p class="fs-2 text-center alert alert-danger">
                영화 제목이 올바르지 않습니다!
                <br>
                영화 제목을 확인한 후 제대로 입력해 주세요!!
                <br>
                The movie title is incorrect
                <br>
                Please check the movie title and enter it correctly
              </p>
              
            </div>
            <MovieInfo />
          </div>
          <div class="modal-footer">
            <button @click="onClose" type="button" class="btn" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>


<script>
import MovieInfo from '@/views/movie/MovieInfo.vue'
import {mapState} from 'vuex'
import axios from 'axios'


export default {
  data: function () {
    return {
      searchMovie: ''
    }
  },
  components:{
    MovieInfo,
  },
  created: function () {
    this.$store.commit('CHANGE_ISLOGIN')
    this.$store.dispatch('getMovie')
    this.$store.dispatch('getNowPlayingMovie')
    this.$store.dispatch('getReviews')
    this.$store.dispatch('getRatedMovies')
    
  },
  computed: {
    ...mapState(['movie_list', 'selectedMovieDetail', 'server_url', 'isLogin'])
  },

  methods: {
    // 🚩 Manger을 클릭하면 django로 axios 요청 보내기 !!
    onManager: function() {
      axios({
        method: 'get',
        url: this.server_url + 'accounts/manager/'
      })
      .then(res => {
        console.log(res)
        // django admin 페이지로
        // location.href 사용하기
      })
    },
    
    onClose: function () {
      this.$store.commit('DELETE_SELECT_DETAIL')
    },

    onSearch: function () {
      this.$store.commit('SEARCH_MOVIE', this.searchMovie)
      this.searchMovie = ''
    },

  }
  
}
</script>

<style>
#app {
  font-family: 'Padauk', "Lobster Two", 'Sunflower', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #DDC6B6;
  /* text-align: center; */
}

#navbarNav {
  padding: 10px;
}

#navbarNav a {
  font-weight: bold;
  color: #DDC6B6;
}

#navbarNav a.router-link-exact-active {
  /* 활성화 색 바꿨어요! */
  color: #F9EBDE;
}

.navbar {
  background-color: #262223;
}

/* 라우터 이동시 구현 */
.slide-fade-enter { transform: translateX(10px); opacity: 0; } 
.slide-fade-enter-active, .slide-fade-leave-active { transition: all 0.3s ease; } 
.slide-fade-leave-to { transform: translateX(-10px); opacity: 0; }

/* 뷰 생성시 구현 */
.v-enter { /* starting style */ opacity: 0; } 
.v-enter-active { /* active entering style */ transition: opacity 2s ease-in; } 
.v-leave-active { /* active leaving style */ transition: opacity 2s ease-out; } 
.v-leave-to { /* ending style */ opacity: 0; }



</style>
