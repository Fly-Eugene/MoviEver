<template>
  <div class="container">
    
    <label for="selectedGenre" class="fs-5">Select Your Genre</label>
      <select @change="changeSelect" class="form-select" aria-label="Default select example" v-model="selectedGenre" aria-placeholder="Select your Rate" id="selectedGenre">
        <option value=1>ALL</option>
        <option value=-1>MyRating</option>
        <option value=28 >Action</option>
        <option value=12>Adventure</option>
        <option value=16>Animation</option>
        <option value=35>Comedy</option>
        <option value=80>Crime</option>
        <option value=99>Documentary</option>
        <option value=18>Drama</option>
        <option value=10751>Family</option>
        <option value=14>Fantasy</option>
        <option value=36>History</option>
        <option value=27>Horror</option>
        <option value=10402>Music</option>
        <option value=9648>Mystery</option>
        <option value=10749>Romance</option>
        <option value=878>Science Fiction</option>
        <option value=10770>TV Movie</option>
        <option value=53>Thriller</option>
        <option value=10752>War</option>
        <option value=37>Western</option>
      </select>

    <div class="row">
      <MovieItem v-for="movie in selectedMovieList" :key="movie.id" :movie="movie" />

    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import MovieItem from '@/views/movie/MovieItem.vue'

export default {
  name: 'Movie',
  data: function () {
    return {
      selectedGenre: 1,
      movies: [],
    }
  },
  components: {
    MovieItem
  },
  methods: {
    changeSelect: function () {
      this.$store.commit('CHANGE_SELECT', this.selectedGenre)
    },
  },
  computed: {
    ...mapState(['movie_list', 'rated_movie_lst', 'selected_movie_llst']),
    ...mapGetters(['selectedMovieList'])
  },
  created: function () {

  }
}
</script>

<style>

</style>