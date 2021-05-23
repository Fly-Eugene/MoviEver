<template>
  <div>
    <div>
      <p>게시글 생성일: {{ this.review.created_at }} </p>
      <p> title: {{ this.review.title }}</p>
      <p> 내용 : {{ this.review.content }} </p>
      <button @click="gotoUpdate(review)">수정</button>
      <button @click="deleteReview(review)">삭제</button>
    </div>
    <hr>
    <div>
      <p>댓글</p>
      <input type="text" v-model="new_comment">
      <button @click="$store.dispatch('createComment', [review.id, new_comment])">저장</button>
      
      <ul>
        <Comments v-for="comment in comments" :key="comment.id" :comment="comment"/>
      </ul>
    </div>


  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import Comments from '@/components/Comments.vue'

export default {
  name : 'FreeBoardItem',
  components: {
    Comments
  },
  data: function() {
    return {
      new_comment: null,
      comments: [],
    }
  },
  props: {
    review: {
      type: Object,
    }
  },
  methods: {
    deleteReview: function(review){
      console.log(this.setToken)
      axios({
        method: 'delete',
        url: this.server_url + `freeboard/${review.id}/`,
        headers: this.setToken
      })
      .then(res => {
        console.log(res.data)
        this.$router.push({ name: 'FreeBoard' })
      })
    },
    gotoUpdate: function(review) {
      this.$router.push({name: 'FreeBoardUpdate', params: { id: review.id, review: review }})
    },
    getComments: async function(review) {
      const response = await axios({
        method: 'get',
        url: this.server_url + `freeboard/${review.id}/comment/`,
        headers: this.setToken,
      })
      .catch(err => {
        console.log(err)
      })

      if(!response) return
      console.log('axios', response.data)
      return response.data

    },
  },
  computed: {
    ...mapState(['server_url']),
    ...mapGetters(['setToken']),
  },
  created: async function() {
    this.comments = await this.getComments(this.review)
    console.log('이게 this.comments', this.comments)
  }
}
</script>

<style>

</style>