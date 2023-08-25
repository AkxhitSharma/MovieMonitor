<style scoped>

</style>

<template>

  <div>
    <h1>Welcome to movies!</h1>
    <showMovies v-bind:movies="movies" buttonName="showFavourites"/>
  </div>

</template>

<script>

// import axios from 'axios'
import showMovies from '../components/showMovies.vue';
import {fetchLatestMovies} from '../api.js' 
export default {
    name: 'home',
    async created() {
        // axios({
        //   method: "GET",
        //   "url": "assets/json/movies.json"
        // }).then(response => {
        //   this.movies = JSON.parse(JSON.stringify(response.data));
        // }, error => {
        //   // eslint-disable-next-line
        //   console.error(error);
        // });
        this.movies = await fetchLatestMovies();
    },
    data() {
        return {
          movies:[]
        }
    },
    components: {
      showMovies
    },
    methods: {}

}

</script>
