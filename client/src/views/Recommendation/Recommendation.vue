<template>
  <div>
    <div class="input-group mb-3">
      <input v-model="movieTitle" type="text" id="searchBar" list="dataList" class="form-control" placeholder="영화 검색" aria-describedby="button-addon2">
      <!-- Search Bar 함수 추가 -->
      <button @click="onRecommend" class="btn btn-outline-secondary" type="button" id="button-addon2">Select</button>
        <datalist id="dataList">
          <option v-for="movie of movie_list" :key="movie.id" :value="movie.title" ></option>
        </datalist>
    </div>
    
    <div class="container">

      <div v-if="selectedMovieRecommend" class="row">
        <div class="card bg-dark text-white col-4" v-for="movie of selectedMovieRecommend" :key="movie.id">
          <div id='test' v-show="isMouse" @mouseenter="isMouseEnter" @mouseout="isMouseOut">
            <img class="card-img" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Card image" width="100rem" height="500rem">
            <div class="card-img-overlay">
              <h5 class="card-title">{{ movie.title }}</h5>
              <p class="card-text">{{ movie.vote_average }}</p>
              <p class="card-text">{{ movie.overview }}</p>
            </div>
          </div>
          <div v-show="!isMouse" @mouseenter="isMouseEnter" @mouseout="isMouseOut">
            <img class="card-img" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Card image" width="100rem" height="500rem">
          </div>
        </div>

          
      </div>
      <div v-else>
        <div class="container text-center">
          <div class="row">
            <div class="col fs-2">
              <hr>
              이 페이지는 영화 추천 페이지 입니다.
              <hr>
            </div>
          </div>
          <div class="row">
            <div class="col fs-5">
              평소에 재미있게 봤던 영화나 좋아하는 영화를 고르시면 <br>
              사용자들의 평점을 통해 분석하여 선택한 영화와 비슷한 영화를 추천해 드립니다. <br>
              영화를 선택해 주세요!
            </div>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Recommendation',
  data: function () {
    return {
      movieTitle: null,
      isMouse: false,
    }
  },
  computed: {
    ...mapState(['movie_list', 'selectedMovieRecommend']),
  },
  methods: {
    onRecommend: function () {
      if (this.movieTitle === null) {
        alert('영화 제목이 올바르지 않습니다!\n영화 제목을 확인한 후 제대로 입력해 주세요!!')
      }
      else {this.$store.dispatch('selectRecommendMovie', this.movieTitle)}
      this.movieTitle = null
    },
    isMouseEnter: function () {
      this.isMouse = true
    },
    isMouseOut: function () {
      this.isMouse = false
    }
  },
  created: function () {
    this.$store.commit('DELETE_RECOMMEND_MOVIE')
  }
}
</script>

<style>
  #test {
    transition: margin 2s;
  }
  #test:hover {
    filter: brightness(50%);
  }
</style>