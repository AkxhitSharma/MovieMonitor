<template>
    <div>
        <ul style="width: 600px; height: 400px;margin: 0% 0% 0% 30%;" v-for="movie in selectedmovie" :key="movie.id">
            <img :src="movie.poster">
            <div>{{ movie.title }}</div>
            <div>{{ movie.overview }}</div>
            <div v-for="genres in movie.genres" :key="genres">{{ genres }}</div>
            <button style="width:50%;background-color: rgb(212, 245, 234);margin-bottom: 1%;" @click="back">Back</button>
            <button style="width:50%;background-color: rgb(212, 245, 234);margin-bottom: 1%;" v-if="consistmovie" @click="tofavourite">Favourite</button>
            <button style="width:50%;background-color: rgb(212, 245, 234);margin-bottom: 1%;" v-else @click="tofavourite">Unfavourite</button>
            
        </ul>
    </div>
    
</template>

<script>
import axios from 'axios';
export default {
    name: 'moviecard',
    props:['id', 'name'],
    mounted() {
        axios({
          method: "GET",
          "url": "assets/json/movies.json"
        }).then(response => {
          this.movies = JSON.parse(JSON.stringify(response.data));
          this.selectedmovie=this.movies.filter(movie=>movie.id===this.id)

        }, error => {
          // eslint-disable-next-line
          console.error(error);
        });
        if(this.name==="showAllMovies"){
            this.consistmovie=false
        }
    },
    data() {
        return {
            movies:[],
            selectedmovie:[],
            consistmovie:Boolean,
            localmovies:[]
        }
    },
    methods: {
        back(){
            this.$emit('back','movies')
        },
        tofavourite(){
            this.localmovies=localStorage.getItem('favourite')?JSON.parse(localStorage.getItem('favourite')):[];
            this.localmovies.filter(movie=>{
                if(movie.id.includes(this.id)){
                    this.consistmovie= true;
                }else{
                    this.consistmovie= false;
                }            
            })
            if(!this.consistmovie){
                this.localmovies.push(...this.selectedmovie)
            }else if(this.localmovies.length === 0){
                this.localmovies.push(...this.selectedmovie)
                this.consistmovie=false
            }else{
                this.localmovies=this.localmovies.filter(movie=>movie.id !== this.id)
            }
            localStorage.setItem('favourite', JSON.stringify(this.localmovies))
            
        }
    }
}
</script>