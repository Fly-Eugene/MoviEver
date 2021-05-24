<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <img :src="`https://image.tmdb.org/t/p/w500${this.movie.poster_path}`" class="img-fluid" alt="poster_path">  
      </div>
      <div class="col-8 text-start mt-5">
        <p class="fs-1">
          Title: {{ movieInfo.title }}
        </p>
        <hr>

        <p class="fs-5 ">
          <button id="ratingBtn" class="btn" type="button" data-bs-toggle="offcanvas" :data-bs-target="`#${ratingId}`" aria-controls="offcanvasBottom">Rating</button>
          <MovieRating :movie='movie'/>
        </p>
        <p class="fs-4">
          vote_average: {{ movieInfo.vote_average }}
        </p>
        
        <p>
          release_date: {{ movieInfo.release_date }}
        </p>
        <p>
          vote_count: {{ movieInfo.vote_count }}
        </p>
        <p class="d-inline">
          Genre:
        </p>
        <p class="d-inline" v-for="genre in movieInfo.genres" :key="genre.id">
          |{{ genre.name }}|
        </p>
        <hr>
        <div>
          <p class="fs-3">overview</p>
          <p>{{ movieInfo.overview }}</p>
        </div>
        <hr>
      </div>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" :id="ratingId" aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header">
            <h3 class="offcanvas-title" id="offcanvasBottomLabel">Rating Movie</h3>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body small">
            <p>
              <label for="rating" class="fs-5">Select Your Rate</label>
                <select class="form-select" aria-label="Default select example" v-model="rating" aria-placeholder="Select your Rate">
                  <option value="1" >One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                </select>
              <button @click="onClick" class="btn">작성</button>
            </p>
          </div>
        </div>
    </div>

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
      ratingId: `ratingId${this.movie.id}`,
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
  .offcanvas {
    color: #262223;
    background-color: #DDC6B6;
  }

  #ratingBtn {
    color: #262223;
    background-color: #DDC6B6;
  }

</style>