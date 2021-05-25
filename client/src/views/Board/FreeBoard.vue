<template>
  <div>
    <div class="d-flex justify-content-md-end">
      <button type="button" class="btn" id="createBoardBtn" @click="onCreate" >글 작성하기</button>
    </div>
    <div id="freeBoardTable" class="container">
      <table class="table">
        <thead >
          <tr class="table-secondary">
            <th scope="col">#</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
          </tr>
        </thead>
        <BoardTable v-for="review in review_list" :key="review.id" :review="review"/>
      </table>
    </div>

    <!-- <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
        다음
      </button>
    </div> -->

    <!-- <div class="d-flex justify-content-center" >
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div> -->

  </div>
</template>

<script>
import { mapState } from 'vuex'
import BoardTable from '@/components/BoardTable'

export default {
  name: 'FreeBoard',
  components: {
    BoardTable,
  },

  methods: {
    onCreate: function() {
      this.$router.push({name: 'FreeBoardCreate'})
    }
  },


  computed: {
    ...mapState(['review_list'])
  }

}
</script>

<style>
span {
  cursor: pointer;
}

#freeBoardTable {
  width: 1500px;
  height: 400px;
}

#createBoardBtn {
  margin: 20px;
  background-color: #DDC6B6;
  font-size: 18px;
  font-weight: bold;
}


</style>