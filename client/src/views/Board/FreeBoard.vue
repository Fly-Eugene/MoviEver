<template>
  <div>
    <p>여기에 freeboard 리스트 들을 보여줄 거다</p>
    <button @click="onCreate">New 게시물 생성</button>
  </div>
</template>

<script>
export default {
  name: 'FreeBoard',

  methods: {
    onCreate: function() {
      this.$router.push({name: 'FreeBoardCreate'})
    }
  }

}
</script>

<style>

</style>