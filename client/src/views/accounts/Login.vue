
<!--<template>
  <div>
    <h1>Login</h1>
    <div>
      <label for="username">사용자 이름: </label>
      <input type="text" id="username" v-model="credentials.username">
    </div>
    <div>
      <label for="password">비밀번호: </label>
      <input type="password" id="password" v-model="credentials.password">
    </div>
    <button @click="$store.dispatch('login', credentials)">로그인</button>
  </div>  
</template>-->

<template>
  <div>
    <div class='d-flex justify-content-center' id='imgdiv'>
      <img src="../../../../logo.png" alt="" id="loginImg">
    </div>
    <div class="container d-flex justify-content-center">
      <form>
        <div class="mb-4">
          <!-- <label for="exampleInputEmail1" class="form-label">ID</label> -->
          <input size='50' placeholder="ID" type="email" id="idInput" v-model="credentials.username">
          <div id="emailHelp" class="form-text">We'll never share your ID with anyone else.</div>
        </div>
        <div class="mb-4">
          <!-- <label for="exampleInputPassword1" class="form-label">Password</label> -->
          <input placeholder="Password" type="password" id="passwordInput" v-model="credentials.password">
        </div>
        <button id="loginbtn" @click="$store.dispatch('login', credentials)">로그인</button>
      </form>
    </div>
  </div>
</template>



<script>
// import axios from 'axios'

export default {
  name: 'Login',
  data: function () {
    return {
      credentials: {
        username: null,
        password: null,
      }
    }
  },
  methods: {
  }
}
</script>

<style>
#loginImg{
  width: 300px;
  height: 100px;
}

#imgdiv{
  padding: 71px 0px 35px 0px;
}

#idInput, #passwordInput, #passwordConfirmationInput {
  width: 500px;
  height: 50px;
  border-block: 1px;
}

#loginbtn {
  width: 500px;
  height: 50px;
  color: #262223;
  font-size: 25px;
  background-color: #DDC6B6;
}
</style>