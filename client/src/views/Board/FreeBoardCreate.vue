<template>
  <div>
    <h1>Free Board</h1>
    <hr>
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" v-model="review.title" >
    </div>
    <div>
      <label for="content" >내용</label>
      <input type="text" id="content" v-model="review.content">
    </div>
    <button @click="$store.dispatch('createReview', review)">저장</button>
  </div>
</template>

<script>
export default {
  name: 'FreeBoardCreate',

  data: function() {
    return {
      review : {
        title: null,
        content: null,
      }
    }
  }
}
</script>

<style>

</style>