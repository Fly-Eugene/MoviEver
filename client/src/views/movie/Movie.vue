<template>
  <div class="container">
    <!-- {{movie_list['data']}} -->
    <div class="row">
      <MovieItem v-for="movie in movie_list['data']" :key="movie.id" :movie="movie" />
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