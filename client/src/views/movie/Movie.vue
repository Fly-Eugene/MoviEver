<template>
  <div>
    <ul>
      {{ movie_list }}
    </ul>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Movie',
  computed: {
    ...mapState(['movie_list'])
  }
}
</script>

<style>

</style>