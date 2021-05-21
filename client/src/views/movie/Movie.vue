<template>
  <div class="container">
    <p>여기는 영화페이지</p>
    <!-- {{ movie_list }} -->
    <div class="row">
      <MovieItem v-for="movie in movie_list" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MovieItem from '@/views/movie/MovieItem.vue'

export default {
  name: 'Movie',
  components: {
    MovieItem
  },
  computed: {
    ...mapState(['movie_list'])
  }
}
</script>

<style>

</style>