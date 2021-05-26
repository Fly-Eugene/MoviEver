<template>
  <div class="home">
    <!-- Carousel 시작 -->

    <!-- <div class='d-flex justify-content-center'>

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
    </div> -->

    <vue-glide v-model="active" v-if="now_playing_movie_list.length > 5">
      
      <vue-glide-slide v-for="movie of now_playing_movie_list" :key="movie.id">
        <div>
          <Carousel :movie="movie"/>
        </div>
      </vue-glide-slide>
    
      <!-- <template slot="control">
        <button data-glide-dir="<">prev</button>
        <button data-glide-dir=">">next</button>
      </template> -->
    </vue-glide>

    <div class="swiper-button-prev outer-arrow" role="button" @click="onRecommendation">
      <i class="fas fa-chevron-left fa-3x"></i>
    </div>
    <div class="swiper-button-next outer-arrow" role="button" @click="onBoard">
      <i class="fas fa-chevron-right fa-3x"></i>
    </div>
    <div class="swiper-button-down" @click="onMovieDetail">
      <i class="fas fa-chevron-down fa-3x"></i>
    </div>

    <div>
      <button><a :href="kakao_URL">카카오 로그인 버튼</a></button>
    </div>

  </div>
  
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import Carousel from '@/components/Carousel.vue'

// import { Glide, GlideSlide } from 'vue-glide-js'

export default {
  name: 'Home',
  components: {
    Carousel,
    // [Glide.name]: Glide,
    // [GlideSlide.name]: GlideSlide
  },

  data: function() {
    return {
      URL_HEAD : 'https://image.tmdb.org/t/p/w500/',
      searchMovie: '',
      active: 0 ,
      // kakao_API_KEY : "0ba410c0f796197638aeaf933efde905",
      kakao_URL : `https://kauth.kakao.com/oauth/authorize?client_id=0ba410c0f796197638aeaf933efde905&redirect_uri=http://localhost:8080/&response_type=code`
    }
  },

  computed: {
    ...mapState(['movie_list', 'selectedMovieDetail', 'isLogin', 'now_playing_movie_list'])

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
    onRecommendation: function () {
      if (this.isLogin) {
        this.$router.push({name: 'Recommendation'})
      }
      else {
        alert('로그인이 필요한 페이지 입니다.')
        this.$router.push({name : 'Login'})
      }
    },
  },

  created: function (){
    const kakao_code = location.search.split('=')[1]
    if (kakao_code) {
      this.$store.dispatch('kakaoToken', kakao_code)
      // this.kakaoToken(kakao_code)
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
  padding: 10px 50px;
}

</style>
