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
      <div class="p-3 d-flex justify-content-end">
        <button class="btn boardBtn" @click="gotoUpdate(review)">수정</button>
        <button class="btn boardBtn" @click="deleteReview(review)">삭제</button>
      </div>
    </div>
    <hr>
    <p class="m-3" id="boardCommentLogo">댓글</p>
    <!-- 댓글 목록 -->
    <Comments v-for="comment in comments" :key="comment.id" :comment="comment"/>
    <!-- 댓글 input -->
    <div class="m-2">
      <!-- <input type="text" v-model="new_comment"> -->
      <textarea class="form-control" rows="2" placeholder="댓글을 입력하세요" v-model="new_comment"></textarea>
    </div>
    <!--댓글 완료 버튼-->
    <div class="d-flex justify-content-md-end">
      <button class="btn" id="saveBoardBtn" @click="$store.dispatch('createComment', [review.id, new_comment])">댓글 작성</button>
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