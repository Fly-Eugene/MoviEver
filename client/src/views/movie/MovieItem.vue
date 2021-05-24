<template>
  <div class="card col-4 m-3 " data-bs-backdrop="true" style="width: 18rem; height: 38rem;">
    <img :src="`https://image.tmdb.org/t/p/w500${this.movie.poster_path}`" class="card-img-top" alt="#" width="150rem" height="400em">
    <div class="card-body">
      <h5 class="card-title" >{{ movie.title }}</h5>
      <p class="card-text">Movie Average Rate: {{ movie.vote_average }}</p>
      <!-- 원하는 링크의 이름을 name 키를 통해 전달하고 그 뒤로 params를 통해 동적 라우팅 변수(:id)와 전달할 props(movie)를 함께 넘겨 줍니다! -->
    
      
      <!-- 200개가 생성되어 있다 얘를 for문으로 돌리면 안된다! -->
      <!-- <div class="modal fade" :id="movieId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fs-3" id="staticBackdropLabel">Movie Info</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <MovieInfo :movie="movie" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div> -->


    </div>

    <div class="card-footer">
      <button @click="onMovieInfo" id="MovieInfoBtn" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#movieInfoModal">
        Detail
      </button>
    </div>



  </div>
  
</template>

<script>
// import MovieInfo from '@/views/movie/MovieInfo.vue'
import { mapState } from 'vuex'

export default {
  name: 'MovieItem',
  data: function () {
    return {
      // movieId: `movieId${this.movie.id}`,
    }
  },
  components: {
    // MovieInfo
  },
  props: {
    movie: {
      type: Object,
      required: true,
    }
  },
  computed: {
    ...mapState(['isSearch'])
  },
  methods: {
    onMovieInfo: function () {
      this.$store.commit('SELECT_MOVIE', this.movie)
    }
  },
  // Search Bar 함수 추가
  watch: {
    isSearch: function () {
      const button = document.querySelector('#MovieInfoBtn')
      if (this.isSearch === true){
        button.click()
        this.isSearch = false
      }
    }
  }
}
</script>

<style>
.card {
  /* font-family: "Architects Daughter", "Noto Sans KR" */
  background-color: #DDC6B6;
  color: #262223;
  text-align: center;
}

.btn {
  background-color:#262223;
  color: #DDC6B6;
}

.modal-body {
  background-color: #262223;
  color: #DDC6B6;
}

.modal-footer {
  background-color: #DDC6B6;
}

.modal-header {
  background-color: #DDC6B6;
}

.card-footer {
    position: absolute;
    bottom: 0;
    width: 92%;
    padding-left: 1%;
}
</style>