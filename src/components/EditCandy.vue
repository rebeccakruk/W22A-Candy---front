<template>
    <div>
    <v-form>
        <v-text-field v-model="id" label="ID" type="text" class="rounded-0" outlined></v-text-field>
        <v-text-field v-model="name" label="New Name" type="text" class="rounded-0" outlined></v-text-field>
        <v-btn @click="changeCandy()" class="rounded-0" color="#000000" x-large block dark>Change Candy</v-btn>
                    <v-btn><router-link to="/">Back to Candy</router-link></v-btn>
    </v-form>

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name : "EditCandy",
        data() {
            return {
                id: "",
                name: ""
            }
        },
        methods: {
            changeCandy() {
                axios.request({
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/candy_change`,
                    method: "PATCH",
                    data: {
                        id: this.id,
                        name: this.name
                    }
                }).then((response) => {
                    this.name = response.data
                    console.log(this.name);
                }).catch((error) => {
                    console.log(error);
                })
            } 
        }
    }
</script>

<style lang="sass" scoped>

</style>