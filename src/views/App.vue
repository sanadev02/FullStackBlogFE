<template >
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <div>
      <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row ">
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="btn btn-outline" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/login">Login</router-link>
          </li>
        </ul>
      </nav>
      <div class="App">
        <div class="vertical-center">
          <div class="inner-block">
            <router-view />
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Login from "../views/pages/Login.vue"
import Home from "../views/pages/Home.vue"

export default {
  components: {
    Login,
    Home,
  },
}
</script>

<style scoped>

* {
  box-sizing: border-box;
}
 
body {
  background: #2554FF !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}

.vertical-center {
  width: 100%;
  height: 100%;
}
 
.vertical-center {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;    
}
 
.inner-block {
  width: 100%;
  margin: auto;
  background: #eee9e2;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 10%;
  border-radius: 15px;
  transition: all .3s;
}
 
.vertical-center {
  border-color: #2554FF;
  box-shadow: none;
}
 
.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

</style>

