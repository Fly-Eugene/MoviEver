<template>
  <div>
    <button @click="onCreate">New 게시물 생성</button>
    <ul>
      <li v-for="review in review_list" :key="review.id" @click="onReviewDetail(review)">
        <span>{{ review.id }}  </span>
        <span id="title">{{ review.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FreeBoard',
  components: {
  },

  methods: {
    onCreate: function() {
      this.$router.push({name: 'FreeBoardCreate'})
    },
    onReviewDetail: function(review) {
      console.log(review);
      this.$router.push({name: 'FreeBoardDetail', params: { id: review.id, review: review }})
    }
  },


  computed: {
    ...mapState(['review_list'])
  }

}
</script>

<style>
span {
  cursor: pointer;
}
</style>