<template>
  <div class="card col-4" style="width: 18rem;">
    <img :src="`https://image.tmdb.org/t/p/w500${this.movie.poster_path}`" class="card-img-top" alt="#">
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <p class="card-text">Movie Average Rate: {{ movie.vote_average }}</p>
      <!-- 원하는 링크의 이름을 name 키를 통해 전달하고 그 뒤로 params를 통해 동적 라우팅 변수(:id)와 전달할 props(movie)를 함께 넘겨 줍니다! -->
      <router-link class="btn btn-primary" :to="{ name: 'MovieInfo', params: { id: movie.id, movie: movie } }">Go somewhere</router-link>
    </div>
  </div>
</template>

<script>
// import MovieInfo from '@/views/movie/MovieInfo.vue'

export default {
  name: 'MovieItem',
  components: {
    
  },
  props: {
    movie: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>
.card {
  font-family: "Architects Daughter", "Noto Sans KR"
}
</style>