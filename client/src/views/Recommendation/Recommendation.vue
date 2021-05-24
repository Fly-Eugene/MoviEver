<template>
  <div>
    <div class="input-group mb-3">
      <input type="text" id="searchBar" list="dataList" class="form-control" placeholder="영화 검색" aria-describedby="button-addon2">
      <!-- Search Bar 함수 추가 -->
      <button @click="onRecommend" class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        <datalist id="dataList">
          <option v-for="movie of movie_list" :key="movie.id" :value="movie.title" ></option>
        </datalist>
    </div>
    요기는 추천 페이지
    {{ recommend_lst }}
      <p>
        {{ selectedMovieId }}
      </p>
      <p>
        {{ selectedMovie }}
      </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Recommendation',
  data: function () {
    return {
      selectedMovieId: 1,
      selectedMovieTitle: this.movie_list,
    }
  },
  computed: {
    ...mapState(['recommend_lst','movie_list']),
    selectedMovie: function () {
      for (const movie in this.movie_list) {
        console.log(movie.title)
        if (movie.title === this.selectedMovieId) {
          return movie.title
        }
      }
      return '영화가 없습니다.'
    }
  },
  methods: {
    onRecommend: function () {

    }
  },
  created: function () {
    
  }
}
</script>

<style>

</style>