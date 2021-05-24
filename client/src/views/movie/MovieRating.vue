<template>
  <div>
    
    
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MovieRating',
  data: function () {
    return {
      movieRating: '평점이 없습니다.',
    }
  },
  computed: {
    ...mapState(['rated_movie_lst', 'selectedMovieDetail']),
  },
  
}
</script>

<style>

</style>