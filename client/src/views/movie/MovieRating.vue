<template>
  <div>
    평점: {{ movieRating }}
    
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MovieRating',
  data: function () {
    return {
      
    }
  },
  props: {
      movie:{
      type: Object,
      required: true,
      defalt: null
    }
  },
  computed: {
    ...mapState(['rated_movie_lst']),
    movieRating: function() {
      for (let movie of this.rated_movie_lst) {
        if (movie.movie === this.movie.id) {
          return movie.rating
        }
      }
      return '평점이 없습니다.'
    }
  },
}
</script>

<style>

</style>