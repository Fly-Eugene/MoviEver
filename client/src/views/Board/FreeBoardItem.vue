<template>
  <div>
    <div class="content freeBoardItem">
      <div class="ps-3 pt-3">
        <h3>{{ this.review.title }}</h3>
        <p>게시글 생성일: {{ this.review.created_at }} </p>
      </div>
      <hr>
      <div id="boardContent">
        <p> {{ this.review.content }} </p>
      </div>
      <hr>
      <!-- 수정 삭제 버튼 -->
      <div class="p-3 d-flex justify-content-end">
        <button class="btn boardBtn" @click="gotoUpdate(review)">수정</button>
        <button class="btn boardBtn" @click="deleteReview(review)">삭제</button>
      </div>
    </div>
    <hr>
    <p class="m-3" id="boardCommentLogo">댓글</p>
    <!-- 댓글 목록 -->
    <Comments v-for="comment in comment_list" :key="comment.id" :comment="comment"/>
    <!-- 댓글 input -->
    <div class="m-2">
      <!-- <input type="text" v-model="new_comment"> -->
      <textarea class="form-control" rows="2" placeholder="댓글을 입력하세요" v-model="new_comment"></textarea>
    </div>
    <!--댓글 완료 버튼-->
    <div class="d-flex justify-content-md-end">
      <button class="btn" id="saveBoardBtn" @click="onClick">댓글 작성</button>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
import Comments from '@/components/Comments.vue'

export default {
  name : 'FreeBoardItem',
  components: {
    Comments
  },
  data: function() {
    return {
      new_comment: null,
      // comments: [],
    }
  },
  props: {
    review: {
      type: Object,
    }
  },
  methods: {
    deleteReview: function(review){
      this.$store.dispatch('setToken')
      axios({
        method: 'get',
        url: this.server_url + `freeboard/${review.id}/validation/`,
        headers: this.jwtHeader
      })
      .then(res => {
        console.log(res.data)
        axios({
          method: 'delete',
          url: this.server_url + `freeboard/${review.id}/`,
          headers: this.jwtHeader
        })
        .then(res => {
          console.log('여기는 FreeBoardItem.vue', res.data)
          this.$store.dispatch('getReviews')
          this.$router.push({ name: 'FreeBoard' })
        })
        .catch(err=> {
          console.log(err)
        })
      })

      .catch(err => {
        console.log(err)
        alert('작성한 사용자만 삭제가 가능합니다.')
      })
    },

    gotoUpdate: function(review) {
      this.$store.dispatch('setToken')
      axios({
        method: 'get',
        url: this.server_url + `freeboard/${review.id}/validation/`,
        headers: this.jwtHeader
      })
      .then(res => {
        console.log(res.data)
        this.$router.push({name: 'FreeBoardUpdate', params: { id: review.id, review: review }})
      })
      .catch(err => {
        console.log(err)
        alert('작성한 사용자만 수정이 가능합니다.')
      })
    },

    onClick: function(){
      this.$store.dispatch('createComment', [this.review.id, this.new_comment])
      this.new_comment = ''
    }
  },

  computed: {
    ...mapState(['server_url', 'jwtHeader', 'comment_list']),
  },

  created: function(){
    this.$store.dispatch('getComments', this.review.id)
  }

  // created: async function() {
  //   this.comments = await this.getComments(this.review)
  //   console.log('이게 this.comments', this.comments)
  // }
}
</script>

<style>
.freeBoardItem {
  background-color: #a19e9f;
  margin: 10px;
}

#boardContent {
  height: 200px;
  margin: 15px;
}

.boardBtn {
  border-color: #262223;
  border-width: 2px;
  margin: 3px;
  font-size: 15px;
}

#boardCommentLogo {
  color: white;
  font-size: 20px;
}

</style>