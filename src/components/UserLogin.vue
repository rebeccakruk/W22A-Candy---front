<template>
    <div>
    <v-text-field v-model="username" label="Please enter your username" type="input" class="rounded-0" outlined></v-text-field>
    <v-text-field v-model="password" label="Please enter your password" type="password" class="rounded-0" outlined></v-text-field>
    <v-btn @click="get_id().then(user_login()).then(get_token())" class="rounded-0" color="#000000" x-large block dark>Login</v-btn>
    <v-btn><router-link to="/">Back to Candy</router-link></v-btn>
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies'

    export default {
    name: "UserLogin",
    data() {
        return {
            username: "",
            password: "",
            id: [],
        }
    },
    methods: {
        get_id() {
            axios.request({
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/users`,
                method: "GET",
                params: {
                    username: this.username,
                    password: this.password
                }
            }).then((response) => {
                let login = response.data
                console.log(login);
                cookies.set('login', response.data)
                this.id = response.data
                this.$root.$emit('user_login',this.id)
                this.$root.$emit('addCandy', this.id)
                console.log(login);
            }).catch((error) => {
                console.log(error);
            })
            this.$root.$on('user_login', this.id)
        },
        user_login() {
            axios.request({
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/users_token`,
                method: "POST",
                data:{
                    id: this.id
                }
            }).then((response) => {
                console.log(response)
                this.$root.$emit('get_token')
            }).catch((error) => {
                console.log(error);
            })
            this.$root.$on('user_login', this.id)
        },
        get_token() {
            axios.request({
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/users`,
                method: "GET",
                params: {
                    id: this.id
                }
            }).then((response) => {
                this.$root.$emit('addCandy', response)
            }).catch((error) => {
                console.log(error);
            })
            this.$root.$on('get_token')
        },
        mounted () {
            this.get_id();
        },
    }
    }
</script>

<style lang="sass" scoped>

</style>