<template>
  <div class="carousel-item">
    <img :src="POSTER_URL" class="d-block w-100" alt="...">
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  components: {
  },
  data: function() {
    return {
      POSTER_URL: `https://image.tmdb.org/t/p/w500/${ this.movie['poster_path'] }`
    }
  },
  props: {
    movie : {
      type: Object,
    }
  }

}
</script>

<style>
.carousel-item{
  width: 400px;
  height: 500px;
  padding: 10px;
}
</style>