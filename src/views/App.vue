<template>
  <div>
      <h1 class="bold center">{{welcome_message}}</h1>
  </div>
  
  <div>
    <nav>
     <router-link to="/">Home</router-link> |
     <router-link to="/login">Login</router-link>
    </nav>
    
    <router-view />
        
  </div>
</template>

<script>
import Login from "../views/pages/Login.vue"
import Home from "../views/pages/Home.vue"

export default{
  data(){
     return {
      welcome_message:"Welcome!",
     }
  },
  
  methods: {
  //   handleSubmit(e){
  //     const ifAuthenticated = (to,from,next) => {
  //       const loggedIn = localStorage.getItem('session_token');
  //       if(loggedIn){
  //         next()
  //         return
  //       }
  //       next('/login')
  //     }

  // // {path: "/dashboard", component: Dashboard, beforeEnter: ifAuthenticated},

  //   }
  },
  components: {
      Login,
      Home,
  },
 }
</script>

<style scoped>

</style>

