<template>
  <div class="freeBoardItem p-2" id="commentItem">
    <span>
      {{ comment.content }}
    </span>
    <p class="d-flex justify-content-end m-0">
      작성자 : {{ comment.user['username'] }} ||
      댓글 생성일 : {{ comment['created_at'] }}
    </p>
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
  font-size: 17px;
  color: black;
  border-radius: 10px;
}
</style>