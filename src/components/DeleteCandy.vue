<template>
    <div>
    <v-form>
        <v-text-field v-model="id" label="ID" type="text" class="rounded-0" outlined></v-text-field>
        <v-btn @click="deleteCandy()" class="rounded-0" color="#000000" x-large block dark>Delete Candy</v-btn>
            <v-btn><router-link to="/">Back to Candy</router-link></v-btn>
    </v-form>

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name : "DeleteCandy",
        data() {
            return {
                id: ""
            }
        },
        methods: {
            deleteCandy() {
                axios.request({
                    // DEVELOPMENT MODE
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/candy`,
                    method: "DELETE",
                    data: {
                        id: this.id
                    }
                }).then((response) => {
                    this.candy = response.data
                    console.log(this.candy);
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>