<template>
<div id="dash">
  <h1>Dashboard</h1>
  <p> Logged in </p>
</div>
</template>

<script>
//Add a button to your dashboard. 
//Clicking the button should log the user out (POST /logout) 
//and remove the users details from the localStorage.
import { usersService } from '../../services/users.service';
export default{
  name: 'Secure',
  data(){
    return {};
  },
  // mounted(){
  //   usersService.ifAuthenticated(this.$route.params.next)
  // }
}
</script>