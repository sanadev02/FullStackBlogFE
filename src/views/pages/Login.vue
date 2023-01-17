<template>
    <div>
        <h1>Login</h1>
        <em v-if="loading">Loading Login...</em>

        <ul v-if="users">
            <li v-for="user in users" :key="user.user_id">
                <!-- <router-link :to="'/login'+ user.user_id"> -->
                {{ user.email }}
                {{ user.password }}
                <!-- </router-link> -->
            </li>
        </ul>

                
   <form @submit.prevent="handleSubmit" v-if="users"> 

       <label for="email">Email:</label>
       <input type="email" name="email" v-model="email" />
    
       <br /><br />
    
       <label for="password">Password:</label>
       <input type="password" name="password" v-model="password" />
    
       <br /><br />
        <p>{{email + " " + password}}</p>
    
       <button>Login</button>

       <div v-if="error">
           {{ error }}
       </div>
   </form>

        <div v-if="error">
            {{ error }}
        </div>
    </div>

</template>
    

<script>
import { usersService } from "../../services/users.service.js"

export default {
    data() {
        return {
            email: "",
            password: "",
            submitted: false,
            loading: true,
            error: ""
        }
    },
    methods: {
        handleSubmit(e) {
            this.submitted = true
            this.error = ""
            const { email, password } = this

            if (!(email && password)) {
                return;
            }

            if (!(EmailValidator.validate(email))) {
                this.error = "Email must be a valid email."
                return;
            }

            const password_pattern = /^(?=(.[a-z]))(?=(.*[A-Z]))/
            if (!(password_pattern.test(password))) {
                this.error = "Password not strong enough."
                return;
            }
            alert("Button clicked")
        },

    },
    mounted() {
        // fetch("http://localhost:3333/login",
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             "email": email,
        //             "password": password
        //         })
        //     })
        //     .then((response) => {
        //         if (response.status === 200) {
        //             return response.json();
        //         } else if (response.status === 400) {
        //             throw "Bad Request"
        //         } else {
        //             throw "Something went wrong"
        //         }
        //     })
        //     .then((resJson) => {
        //         localStorage.setItem("user_id", resJson.user_id);
        //         localStorage.setItem("session_token", resJson.session_token)
        //         return resJson
        //     })
        //     .catch((error) => {
        //         console.log("Err", error)
        //         return Promise.reject(error)
        //     }),

            usersService.login(email, password)
                .then(result => {
                    console.log("Auth - go to dash")
                    this.$router.push("/dashboard")
                })
                .catch(error => {
                    this.error = error;
                    this.loading = false;
                })
    }
}
</script>
