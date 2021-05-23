<template>
  <div>
    <img :src="`https://image.tmdb.org/t/p/w500${this.movie.poster_path}`" class="img-fluid" alt="poster_path">  
      <p>
        title: {{ movieInfo.title }}
      </p>
      <p>
        <label for="rating">평점</label>
        <input v-model="rating" type="number" id="rating" name="rating" min="1" max="5">
        <button @click="onClick" class="btn btn-primary">작성</button>
      </p>
      <p>
        <MovieRating :movie='movie'/>
      </p>
      
      <p>
        release_date: {{ movieInfo.release_date }}
      </p>
      <p>
        vote_count: {{ movieInfo.vote_count }}
      </p>
      <p>
        vote_average: {{ movieInfo.vote_average }}
      </p>
      <p>
        overview: {{ movieInfo.overview }}
      </p>
      <p>
        Genre
      </p>
      <p v-for="genre in movieInfo.genres" :key="genre.id">
        |{{ genre.name }}|
      </p>
  </div>
</template>

<script>
import MovieRating from '@/views/movie/MovieRating.vue'

export default {
  name: 'MovieInfo',
  data: function () {
    return {
      movieInfo: this.movie,
      rating: 0,
      test: 0,
    }
  },
  components: {
    MovieRating,
  },
  props: {
    movie:{
        type: Object,
        required: true,
        defalt: null
      }
  },
  created: function () {
    if (this.movie !== null) {
      this.movieInfo = this.movie
    }
  },
  methods: {
    onClick: function () {
      const data = {
        movie: this.movie.id,
        rating: this.rating
      }
      this.$store.dispatch('ratingMovie', data)
    }
  },
}
</script>

<style>

</style>