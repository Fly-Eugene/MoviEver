<template>
  <div>
    <h1>Free Board</h1>
    <hr>
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" v-model="new_review.title">
    </div>
    <div>
      <label for="content" >내용</label>
      <input type="text" id="content" v-model="new_review.content">
    </div>
    <button @click="$store.dispatch('updateReview', [review.id, new_review])">수정완료</button>
  </div>
</template>

<script>
export default {
  name: 'FreeBoardUpdate',

  data: function() {
    return {
      new_review: {
        title: this.review.title,
        content: this.review.content,
      }
    }
  },
  props: {
    review: {
      type: Object,
    }
  },

}
</script>

<style>

</style>