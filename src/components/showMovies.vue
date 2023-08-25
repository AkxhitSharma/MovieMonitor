<template>
    <div>
        <div v-if="layout === 'movies'" >
            <div >
                <input type="text" style="margin:0% 0% 0% 0% ; background-color: rgba(0, 0, 0, 0.423);color: white;" placeholder="Search by movie name" v-model="search"/>
                <button style="background-color: rgb(212, 245, 234)" v-if="buttonName==='showFavourites'"><router-link to="/favourite">{{ buttonName }}</router-link></button>
                <button style="background-color: rgb(212, 245, 234)" v-else><router-link to="/home">{{ buttonName }}</router-link></button>
            </div>
      
            <div style="margin: 0% 5% 0% 10%">
                <button @click="showCard($event)" style="width: 80px;height: 300px ; float: left; background-color: rgba(0, 0, 0, 0);color: white; border: 0px; margin: 1% 1% 0% 1%;" v-for="movie in movieSearch" :key="movie.id" :id='movie.id'>
                    <img :src="movie.posterUrl" style="max-width: 100%;box-sizing: border-box; height: auto;">
                    {{movie.title}}
                </button>
            </div>
        </div>
        

        <div v-if="layout==='movie'">
            <moviecard v-bind:id="id" :name="buttonName" @back="goBack($event)"/>
        </div>
    
    </div>
</template>

<script>
import moviecard from './moviecard'
export default {
    name: "showMovies",
    props: {
        movies:[Array],
        buttonName: String
    },
    data(){
        return  {
            search:'',
            layout: 'movies',
            id:''
        }
    },
    computed:{
      movieSearch() {
        if(this.search===''){
          return this.movies
        }else{
          var mov = this.movies.filter(movie=>{
            if(movie.title.toLowerCase().includes(this.search.toLowerCase())){
              return movie
            }
          })
          return mov
        }
        
      }
    },
    components:{
        moviecard,
    },
    methods:{
        showCard(e){
            this.id=e.currentTarget.id;
            this.layout="movie";
        },
        goBack(event){
            if(this.buttonName==="showAllMovies")
            window.location.reload()
            
            this.layout=event;
        }
    }
}
</script>
