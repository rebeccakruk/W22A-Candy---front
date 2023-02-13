<template>
    <div>
        <v-form>
            <v-text-field v-model="name" label="Candy Name" type="text" class="rounded-0" outlined></v-text-field>
            <v-btn @click="addCandy()" class="rounded-0" color="#000000" x-large block dark>Add Candy</v-btn>
            <v-btn><router-link to="/">Back to Candy</router-link></v-btn>
        </v-form>
        <h2>{{ candy }}</h2>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name : "AddCandy",
        data() {
            return {
                name : ""
            }
        },
        methods: {
                addCandy() {
                    axios.request({
                        url: `${process.env.VUE_APP_BASE_DOMAIN}/api/candy_new`,
                        method: "POST",
                        data: {
                            name: this.name
                        }
                    }).then((response) => {
                        this.name = response.data
                        console.log(this.name);
                    }).catch((error) => {
                        console.log(error);
                    })
                },
            }
        }
</script>

<style lang="sass" scoped>

</style>