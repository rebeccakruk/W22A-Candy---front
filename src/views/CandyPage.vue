<template>
  <div class="home">
    <h1>Welcome to the candy page</h1>
            <nav>
              <router-view />
              <v-btn @click="addCandy()"><router-link to="/add">Add New Candy</router-link></v-btn>
              <v-btn @click="editCandy()"><router-link to="/edit">Edit Candy</router-link></v-btn>
              <v-btn @click="deleteCandy()"><router-link to="/delete">Delete Candy</router-link></v-btn>
              <v-btn @click="login()"><router-link to="/login">User Login</router-link></v-btn>
              <v-btn @click="signup()"><router-link to="/signUp">Sign Up</router-link></v-btn>
            </nav>
            <v-table code-background-color="rgb(var(#ff80ab))">
              <template v-slot:default>
                <tbody>
                <tr backgroundColor="#ff80ab" v-for="sweet in candies" :key="sweet.id" :name="sweet.name" :id="sweet.id" :user_id="sweet.user_id">
                  <td>{{ sweet.id }}</td>
                  <td>{{ sweet.name }}</td>
                  <td>{{ sweet.user_id }}</td>
                </tr>
                </tbody>
              </template>
            </v-table>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'CandyPage',
  data() {
    return {
      candies: [],
      Candy : "Candy",
      ID : "ID",
      Owner: "Owner"
    }
  },
  methods: {
    loadCandy() {
      axios.request({
        // DEVELOPMENT MODE
        url: `${process.env.VUE_APP_BASE_DOMAIN}/api/candy`,
        method: "GET"
      }).then((response) => {
        this.candies = response.data
        console.log(this.candies);
      }).catch((error) => {
        console.log(error);
      })
    }
  },
  mounted () {
    this.loadCandy();
  },
}
</script>

<style lang="sass" scoped>

</style>
