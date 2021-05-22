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
  },
  mutations: {
    GET_MOVIE: function(state, res) {
      state.movie_list = res['data']
    },

    CREATE_REVIEW: function(state, res) {
      state.review_list.push(res)
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
          // this.$emit('login')   => 이건 vuex 사용할 것이라서 생각해봐야됨
          
          // 로그인 성공시, Home 으로 이동하는 router
          router.push({ name: 'Home'})
        })
        .catch(err => {
          console.log(err)
        })
    },

    // logout은 loacalStorage에 있는 jwt 토큰을 삭제하면서 Home 화면으로 이동합니다.
    logout: function () {
      localStorage.removeItem('jwt')
      router.push({ name: 'Home' })
    },

    getMovie: function ({commit}) {
      axios({
        method: 'get',
        url: this.state.server_url + 'movies/print_movie/',
        headers: this.setToken,
      })
      .then(res => {
        commit('GET_MOVIE', res)
      })
      .catch(err => {
        console.log(err)
      })
    },

    createReview: function(context, review) {
      axios({
        method: 'post',
        url: this.state.server_url + 'freeboard/',
        data: review,
        headers: this.getters.setToken

      })
      .then(res => {
        console.log(res)
        router.push({ name: 'FreeBoard' })
      })
      .catch(err => {
        console.log(err)
      })
    },
    ratingMovie: function (context, ratingData) {
      axios({
        method: 'post',
        url: this.state.server_url + 'accounts/like-movie/',
        data: ratingData,
        headers: {'X-Requested-With': 'XMLHttpRequest',
                  ...this.getters.setToken
        },
      })
      .then( res => {
        console.log(res)
        // this.actions.getLikeMovies()
      })
      .catch( err => {
        console.log(err)
      })
    },
    getLikeMovies: function () {
      axios({
        method: 'get',
        url: this.state.server_url + 'accounts/like-movie/',
        headers: {'X-Requested-With': 'XMLHttpRequest',
                  ...this.getters.setToken
        },
      })
      .then( res => {
        console.log(res);
      })
      .catch( err => {
        console.log(err);
      })
    }    
  },
    getters: {
      setToken: function() {
        const token = localStorage.getItem('jwt')
        const config = {
          Authorization: `JWT ${token}`
        }
        return config
      }
    },
  modules: {
  }
})
