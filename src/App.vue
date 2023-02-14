<template>

  <v-app>
    <v-app-bar
      app
       src="https://i.pinimg.com/originals/4b/73/63/4b73639badca74ed3a2d38c0cdd1db23.jpg"
      dark
    >

      <v-spacer></v-spacer>

      <v-btn>
      <router-link to="/">Home</router-link>
  

    </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { RouterView } from 'vue-router';


export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { RouterView }
};
</script>
