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
    
    <div v-if="selectedMovieRecommend">
      
    </div>
    <div v-else>
      <p v-for="movie of selectedMovieRecommend" :key="movie.id">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" class="img-fluid" alt="poster_path">  
        {{ movie.title }}
      </p>
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
    }
  },
  created: function () {
    
  }
}
</script>

<style>

</style>