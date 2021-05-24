<template>
  <tbody>
    <tr class="table-light">
      <th scope="row">{{ review.id }}</th>
      <td id="tabletd" @click="onReviewDetail(review)">{{ review.title }}</td>
      <td>Otto</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'BoardTable',

  props: {
    review: {
      type: Object,
    }
  },

  methods: {
    onReviewDetail: function(review) {
      console.log(review);
      this.$router.push({name: 'FreeBoardDetail', params: { id: review.id, review: review }})
    }
  }
}
</script>

<style>
#tabletd {
  cursor: pointer;
}
</style>