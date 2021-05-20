<template>
  <div id="app">
    <!-- routerlink 네브바에 구성되어 있습니다. -->
    <!-- main 화면 네브바 만들기 -->
    <!-- navbar-light bg-light -->
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/">Home</router-link> |
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Signup' }">Singup</router-link> |
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Login' }">Login</router-link> |
            </li>
            <li class="nav-item">
              <router-link @click.native="$store.dispatch('logout')" to='#'>Logout</router-link> |
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Movie' }">Movie</router-link> |
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view/>
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#navbarNav {
  padding: 10px;
}

#navbarNav a {
  font-weight: bold;
  color: #2c3e50;
}

#navbarNav a.router-link-exact-active {
  color: #42b983;
}

.navbar {
  background-color: #262223;
}

</style>
