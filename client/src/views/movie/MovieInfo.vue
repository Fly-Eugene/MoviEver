<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <img :src="`https://image.tmdb.org/t/p/w500${this.selectedMovieDetail.poster_path}`" class="img-fluid" alt="poster_path">  
      </div>
      <div class="col-8 text-start mt-5">
        <p class="fs-1">
          Title: {{ selectedMovieDetail.title }}
        </p>
        <hr>

        <p class="fs-5 ">
          
          <label for="rating" class="fs-5">Select Your Rate</label>
            <select class="form-select" aria-label="Default select example" v-model="rating" aria-placeholder="Select your Rate">
              <option value="1" >One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
            </select>
          <button @click="onClick" class="btn">작성</button>
          평점: {{ movieRating }}
        </p>
        <p class="fs-4">
          vote_average: {{ selectedMovieDetail.vote_average }}
        </p>
        
        <p>
          release_date: {{ selectedMovieDetail.release_date }}
        </p>
        <p>
          vote_count: {{ selectedMovieDetail.vote_count }}
        </p>
        <p class="d-inline">
          Genre:
        </p>
        <p class="d-inline" v-for="genre in selectedMovieDetail.genres" :key="genre.id">
          |{{ genre.name }}|
        </p>
        <hr>
        <div>
          <p class="fs-3">overview</p>
          <p>{{ selectedMovieDetail.overview }}</p>
        </div>
        <hr>
      </div>

        
    </div>

  </div>
</template>

<script>
// import MovieRating from '@/views/movie/MovieRating.vue'
import { mapState } from 'vuex'

export default {
  name: 'MovieInfo',
  data: function () {
    return {
      rating: 0,
      movieRating: '평점이 없습니다.'
    }
  },
  components: {
    // MovieRating,
  },
  computed: {
    ...mapState(['selectedMovieDetail', 'rated_movie_lst'])
  },
  methods: {
    onClick: function () {
      const data = {
        movie: this.selectedMovieDetail.id,
        rating: this.rating
      }
      this.$store.dispatch('ratingMovie', data)
      this.updateRating()
    },
    updateRating: function() {
      for (let movie of this.rated_movie_lst) {
        if (movie.movie === this.selectedMovieDetail.id) {
          this.movieRating = movie.rating
        }
      }
    }
  },
  created: function() {
      this.updateRating()
    }
  
}
</script>

<style>
  .offcanvas {
    color: #262223;
    background-color: #DDC6B6;
  }

  #ratingBtn {
    color: #262223;
    background-color: #DDC6B6;
  }

</style>