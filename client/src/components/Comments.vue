<template>
  <div class="freeBoardItem p-2" id="commentItem">
    {{ comment.content }}
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    comment : {
      type: Object,
    }
  }

}
</script>

<style>
#commentItem{
  font-size: 25px;
}
</style>