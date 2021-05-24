import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // server_url을 변수로 저장했습니다.
    server_url: 'http://127.0.0.1:8000/',
    movie_list: [],
    review_list: [],
    rated_movie_lst: [],
    //comment_list 추가
    comment_list: [],
    // Search Bar 함수 추가
    isSearch: false,
    jwtHeader: ''

  },
  mutations: {
    GET_MOVIE: function(state, res) {
      state.movie_list = res['data']
    },

    GET_REVIEWS: function(state, res) {
      state.review_list = res.data
    },
    
    CREATE_REVIEW: function(state, res) {
      state.review_list.push(res)
    },
    // Search Bar 함수 추가
    SEARCH_MOVIE: function(state) {
      state.isSearch = true
    },

    GET_COMMENTS: function(state, res) {
      state.comment_list = res.data
    }
  },
  
  actions: {
    // actions에서 무조건 기본인자로 context 적어주기, 사용 안해도 된다.
    // django에 signup view 가 실행되도록 합니다.
    signup: function (context, credentials) {
      axios({
        method: 'post',
        url: this.state.server_url + 'accounts/signup/',
        data: credentials,
      })
        .then(res => {
          console.log(res)
          router.push({ name: 'Login' })
        })
        .catch(err => {
          console.log(err)
        })
    },

    // django의 api-token-auth 가 실행되도록 함으로써 jwt 토큰을 가지고 로그인이 됩니다.
    // login 성공시, Home 화면으로 이동합니다.
    login: function (context, credentials) {
      axios({
        method: 'post',
        url: this.state.server_url + 'accounts/api-token-auth/',
        data: credentials,
      })
      .then(res => {
        console.log(res)
        localStorage.setItem('jwt', res.data.token)
        context.dispatch('setToken')
        
        // 로그인 성공시, Home 으로 이동하는 router
        router.push({ name: 'Home'})
      })
      .catch(err => {
        console.log(err)
      })
    },

    // logout은 loacalStorage에 있는 jwt 토큰을 삭제하면서 Home 화면으로 이동합니다.
    logout: function (context) {
      localStorage.removeItem('jwt')
      context.dispatch('setToken')
      router.push({ name: 'Home' })
    },

    getMovie: function (context) {
      context.dispatch('setToken')
      axios({
        method: 'get',
        url: this.state.server_url + 'movies/print_movie/',
        headers: context.state.jwtHeader
      })
      .then(res => {
        context.commit('GET_MOVIE', res)
      })
      .catch(err => {
        console.log(err)
      })
    },

    // getComments: function(context, review_id) {
    //   axios({
    //     method: 'get',
    //     url: this.state.server_url + `freeboard/${review_id}/comment/`,
    //     headers: this.setToken,
    //   })
    //   .then(res => {
    //     console.log(res.data)
    //     return res.data
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    // },

    createReview: function(context, review) {
      context.dispatch('setToken')
      axios({
        method: 'post',
        url: this.state.server_url + 'freeboard/',
        data: review,
        headers: context.state.jwtHeader
        })
        .then(res => {
          console.log(res)
          context.dispatch('getReviews')
          router.push({ name: 'FreeBoard' })
        })
        .catch(err => {
          console.log(err)
        })
      },
    
    getReviews: function(context) {
      context.dispatch('setToken')
      axios({
        method: 'get',
        url: this.state.server_url + 'freeboard/',
        headers: context.state.jwtHeader
      })
      .then(res => {
        console.log(res)
        context.commit('GET_REVIEWS', res)
        // this.state.review_list = res.data
      })
      .catch(err => {
        console.log(err)
      })
    },

    updateReview: function(context, arr) {
      context.dispatch('setToken')
      const [review_id, new_review]= arr
      // console.log(arr)
      axios({
        method: 'put',
        url: this.state.server_url + `freeboard/${review_id}/`,
        data: new_review,
        headers: context.state.jwtHeader
      })
      .then(res => {
        console.log(res)
        context.dispatch('getReviews')
        router.push({ name: 'FreeBoard' })
      })
      .catch(err => {
        console.log(err)
      })
    },

    createComment: function(context, arr) {
      context.dispatch('setToken')
      const [review_id, new_comment] = arr
      axios({
        method: 'post',
        url: this.state.server_url + `freeboard/${review_id}/comment/`,
        data: {content: new_comment},
        headers: context.state.jwtHeader
      })
      .then(res => {
        console.log(res)
        context.dispatch('getComments', review_id)
        router.push({ name: 'FreeBoardDetail', params: {id: review_id}})
      })
      .catch(err => {
        console.log(err)
      })
    },
    
    getComments: function(context, review_id) {
      context.dispatch('setToken')
      axios({
        method: 'get',
        url: this.state.server_url + `freeboard/${review_id}/comment/`,
        headers: context.state.jwtHeader
      })
      .then(res => {
        context.commit('GET_COMMENTS', res)
      })
      .catch(err => {
        console.log(err)
      })
    },

    ratingMovie: function (context, ratingData) {
      context.dispatch('setToken')
      axios({
        method: 'post',
        url: this.state.server_url + 'accounts/like-movie/',
        data: ratingData,
        headers: {'X-Requested-With': 'XMLHttpRequest',
          ...context.state.jwtHeader }
      })
      .then( res => {
        console.log(res.data)
        // actions 내에서 actions를 실행하고 싶을 땐 이렇게!
        context.dispatch('getRatedMovies')
      })
      .catch( err => {
        console.log(err)
      })
    },
    
    getRatedMovies: function (context) {
      context.dispatch('setToken')
      axios({
        method: 'get',
        url: this.state.server_url + 'accounts/like-movie/',
        headers: {'X-Requested-With': 'XMLHttpRequest', 
          ...context.state.jwtHeader
        },
      })
      .then( res => {
        context.state.rated_movie_lst = res.data
        console.log(context.state.rated_movie_lst);
      })
      .catch( err => {
        console.log(err);
      })
    },
    
    setToken: function(context) {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      context.state.jwtHeader = config
    }
    
  },
  
    getters: {
    },
    
  modules: {
  }
})
