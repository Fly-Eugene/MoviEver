<template>
  <div class="home">

    <div class="input-group mb-3">
      <input v-model="searchMovie" type="text" id="searchBar" list="dataList" class="form-control" placeholder="영화 검색" aria-describedby="button-addon2" >
      <!-- Search Bar 함수 추가 -->
      <button @click="onSearch" class="btn btn-outline-secondary" id="MovieInfoBtn" type="button" data-bs-toggle="modal" data-bs-target="#movieInfoModal">Search</button>
        <datalist id="dataList">
          <option v-for="movie of movie_list" :key="movie.id" :value="movie.title" ></option>
        </datalist>
    </div>

    <!-- Carousel 시작 -->

    <div class='d-flex justify-content-center'>

      <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="true" data-bs-interval="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="URL_HEAD + movie_list[0]['poster_path']" class="d-block w-100" alt="...">
          </div>
          <Carousel v-for="movie in movie_list" :key="movie.id" :movie="movie"/>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div class="swiper-button-prev outer-arrow" role="button" @click="onRecommendation">
      <i class="fas fa-chevron-left fa-3x"></i>
    </div>
    <div class="swiper-button-next outer-arrow" role="button" @click="onBoard">
      <i class="fas fa-chevron-right fa-3x"></i>
    </div>
    <div class="swiper-button-down" @click="onMovieDetail">
      <i class="fas fa-chevron-down fa-3x"></i>
    </div>

  </div>
  
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Carousel
  },
  data: function() {
    return {
      URL_HEAD : 'https://image.tmdb.org/t/p/w500/',
      searchMovie: ''
    }
  },

  computed: {
    ...mapState(['movie_list', 'selectedMovieDetail', 'isLogin'])

  },
  methods: {
    onMovieDetail: function(){
      this.$router.push({name: 'Movie'})
    },
    onBoard: function() {
      if (this.isLogin) {
        this.$router.push({name: 'FreeBoard'})
      }
      else {
        alert('로그인이 필요한 페이지 입니다.')
        this.$router.push({name : 'Login'})
      }
    },
    onSearch: function () {
      this.$store.commit('SEARCH_MOVIE', this.searchMovie)
      this.searchMovie = ''
    },
    onRecommendation: function () {
      if (this.isLogin) {
        this.$router.push({name: 'Recommendation'})
      }
      else {
        alert('로그인이 필요한 페이지 입니다.')
        this.$router.push({name : 'Login'})
      }
    }
  }
}

</script>




<style>
body {
  background-color: #262223;
}

/* width: 27px; */
/* margin-top: -22px; */

.swiper-button-prev, .swiper-button-next {
    position: absolute;
    top: 50%;
    height: 44px;
    z-index: 1;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
    padding-right: 20px;
    padding-left: 20px;

}

.swiper-button-next {
    right: 0;
}

.swiper-button-down{
  cursor: pointer;
  text-align: center;
}

.input-group{
  padding: 10px 100px;
}


</style>
