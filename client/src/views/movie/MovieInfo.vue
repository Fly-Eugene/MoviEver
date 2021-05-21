<template>
  <div>
    <img :src="`https://image.tmdb.org/t/p/w500${this.movie.poster_path}`" class="img-fluid" alt="poster_path">  
      <p>
        title: {{ movieInfo.title }}
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
      <div v-b-hover="handleHover" class="border rounded py-3 px-4">
        <b-icon v-if="isHovered" icon="battery-full" scale="2"></b-icon>
        <b-icon v-else icon="battery" scale="2"></b-icon>
        <span class="ml-2" :class="isHovered ? 'text-danger' : ''">Hover this area</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MovieInfo',
  data: function () {
    return {
      movieInfo: this.movie,
      isHovered: false
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
    handleHover(hovered) {
        this.isHovered = hovered
    }
  }
}
</script>

<style>

</style>