<template>
    <div class="vue-template">

        <form class="login" v-on:submit.prevent="onSubmit">
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input v-model='email' type="email" class="form-control form-control-lg"
                    placeholder="email@email.com" />

                <label>Password</label>
                <input v-model='password' type="password" class="form-control form-control-lg"
                    placeholder="Password123!" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

        </form>
    </div>
</template>

<script>
import { usersService } from "../../services/users.service.js"
import { useRouter } from 'vue-router'
const route = useRouter()
export default {
    data() {
        return {
            result: "",
            email: "",
            password: "",
            submitted: false,
            error: ""
        }
    },
    methods: {
        onSubmit() {
            usersService.login(this.email, this.password)
                .then(result => {
                    console.log("Auth - go to dash")
                    this.$router.push("/dashboard")                   

                })
                .catch(error => {
                    this.error = error;
                    this.loading = false;
                })

        }
    },

}
</script>

<style>
page {
    margin: 0%;
}

#login {
    text-align: left;
    color: rgb(0, 0, 0);
    font-family: monospace;
    font-size: 12pt;
    margin: 0;
    width: 65%;
    float: inline-start;
    height: auto;
}

textarea {
    box-sizing: border-box;
    margin: 0;
    padding: 0%;
}

button {
    font-family: monospace;
    font-size: 12pt;
    box-sizing: border-box;
    margin: 0;
    padding: 1%;
}
</style>
