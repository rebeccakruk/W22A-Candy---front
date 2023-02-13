<template>
  <div class="home">
            <nav>
              <router-view />
              <v-btn @click="addCandy()"><router-link to="/add">Add New Candy</router-link></v-btn>
              <v-btn @click="editCandy()"><router-link to="/edit">Edit Candy</router-link></v-btn>
              <v-btn @click="deleteCandy()"><router-link to="/delete">Delete Candy</router-link></v-btn>
            </nav>
  <h1>Welcome to the candy page</h1>
 <div v-for="sweet in candies" :key="sweet.id" :name="sweet.name" :id="sweet.id">{{ sweet.id }} {{sweet.name}}</div>
  <!-- <h2>ID {{ sweet.id[0] }}    {{ sweet.name[1] }}</h2> -->
  </div>
</template>

<script>
import axios from 'axios'
// import CandyCard from '@/components/CandyCard.vue'



export default {
  name: 'CandyPage',
  components: {
        // CandyCard,
  },
  data() {
    return {
      candies: []
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
