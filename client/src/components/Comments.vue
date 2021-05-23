<template>
  <li> {{comment.content }} </li>
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

</style>