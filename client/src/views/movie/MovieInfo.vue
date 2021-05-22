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
import axios from 'axios'

export default {
  name: 'MovieInfo',
  data: function () {
    return {
      movieInfo: this.movie,
      rating: 0,
    }
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
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/like-movie/',
        data: {
          rating: this.rating,
          movie: this.movie.id,
        },
        headers: {'X-Requested-With': 'XMLHttpRequest',
        },
      })
      .then( res => {
        console.log(res);
      })
      .catch( err => {
        console.log(err);
      })
    }
  }
}
</script>

<style>

</style>