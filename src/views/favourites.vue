<template >

  <div>
    <h1>Your Favourite movies!</h1>
    <showMovies v-bind:movies="movies" buttonName="showAllMovies"/>
  </div>

</template>

<script>
import showMovies from '../components/showMovies.vue';
export default {
    name: 'favourite',
    mounted() {
        this.movies=JSON.parse(localStorage.getItem('favourite'));
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
