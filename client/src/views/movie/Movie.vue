<template>
  <div>
    {{ getMovie }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Movie',
  computed: {
    ...mapGetters(['getMovie'])
  }
}
</script>

<style>

</style>