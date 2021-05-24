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
        <div class="collapse navbar-collapse" id="navbarNav">
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
              <router-link @click.native="$store.dispatch('logout')" to='#'>Logout</router-link> |
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Movie' }">Movie</router-link> |
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view/>
    <!-- Movie Info -->
    <div class="modal fade" id="movieInfoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fs-3" id="staticBackdropLabel">Movie Info</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <MovieInfo />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Movie Rating -->
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="movieRatingOffcanvas" aria-labelledby="offcanvasBottomLabel">
      <div class="offcanvas-header">
        <h3 class="offcanvas-title" id="offcanvasBottomLabel">Rating Movie</h3>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body small">
        
      </div>
    </div>

    <button id="MovieInfoBtn" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#movieInfoModal">
      Detail
    </button>
    
  </div>
</template>

<script>
import MovieInfo from '@/views/movie/MovieInfo.vue'


export default {
  data: function () {
    return {
      
    }
  },
  components:{
    MovieInfo,
  },
  created: function () {
    this.$store.dispatch('getMovie')
    this.$store.dispatch('getReviews')
    this.$store.dispatch('getRatedMovies')
    this.$store.dispatch('getRecommendation')
  },

  
  
}
</script>

<style>
#app {
  font-family: "Lobster Two", Avenir, Helvetica, Arial, sans-serif;
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

</style>
