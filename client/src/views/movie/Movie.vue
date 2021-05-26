<template>
  <div class="container">
    <label for="selectGenre" class="fs-5">Select Your Genre</label>
      <select class="form-select" aria-label="Default select example" v-model="selectGenre" aria-placeholder="Select your Rate" id="selectGenre">
        <option value="1">ALL</option>
        <option value="-1">MyRating</option>
        <option value="28" >Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="80">Crime</option>
        <option value="99">Documentary</option>
        <option value="18">Drama</option>
        <option value="10751">Family</option>
        <option value="14">Fantasy</option>
        <option value="36">History</option>
        <option value="27">Horror</option>
        <option value="10402">Music</option>
        <option value="9648">Mystery</option>
        <option value="10749">Romance</option>
        <option value="878">Science Fiction</option>
        <option value="10770">TV Movie</option>
        <option value="53">Thriller</option>
        <option value="10752">War</option>
        <option value="37">Western</option>
      </select>

    <div class="row">
      <MovieItem v-for="movie in getGenre" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MovieItem from '@/views/movie/MovieItem.vue'

export default {
  name: 'Movie',
  data: function () {
    return {
      selectGenre: 10749
      }
  },
  components: {
    MovieItem
  },
  methods: {

  },
  computed: {
    ...mapState(['movie_list', 'rated_movie_lst']),
    getGenre: function () {
      let genreMovieList = []
      if (this.selectGenre === 1) {
        return this.movie_list
      }
      else if (this.selectGenre === -1) {
        for (const movie of this.movie_list) {
          for (const rated_movie of this.rated_movie_lst){
            if (movie.id === rated_movie.movie) {
              genreMovieList.push(movie)
              continue
            }
          }
        }
      }
      else {  
        for (const movie of this.movie_list) {
          for (const genre of movie.genres) {
            if (this.selectGenre === genre.idx){
              genreMovieList.push(movie)
            }
          }
        }
      }
      return genreMovieList
    }
  }
}
</script>

<style>

</style>