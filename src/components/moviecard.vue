<template>
    <div>
        <div style="width: auto; height: auto;padding: 2%;" :key="movie.id">
            <div style="height: 50%;">
                <img :src="movie.backdrop" style="width: 60%; position: relative;">
                <img :src="movie.posterUrl" style="width: 10%; position:absolute;left: 23%; margin-top:21.2%;">
                <div style="position:absolute;left: 34%;margin-top:0.2%; text-align: left;">{{ movie.title }}</div>
                <div style="position:absolute;left: 34%;margin-top:1.3%; text-align: left;">{{ movie.tagline }}</div>
                <div style="position:absolute;left: 34%;margin-top:2.5%; text-align: left;">Genres : <span v-for="genre in movie.genres" :key="genre.id">{{ genre.name }} </span></div>
            </div>
            <div style="margin-top: 5%;">
                <ul v-if="reviews.length>0" style="width: auto; text-align: left;">Reviews : Here are some of the reviews<span v-for="review in reviews" :key="review.id">
                    <div>Author : {{ review.author }}</div>
                    <div>Ratings : {{ review.author_details.rating }}</div>
                    <div>Comment : {{ review.content }}</div>
                </span></ul>
                <div v-else>There are no reviews available at the moment</div>
            </div>            
        
        </div>
        <button style="width:10%;background-color: rgb(212, 245, 234);margin-bottom: 1%;" @click="back">Back</button>
        <button style="width:10%;background-color: rgb(212, 245, 234);margin-bottom: 1%;" v-if="notconsistmovie" @click="tofavourite">Favourite</button>
        <button style="width:10%;background-color: rgb(212, 245, 234);margin-bottom: 1%;" v-else @click="tofavourite">Unfavourite</button>
    </div>
    
</template>

<script>
import {fetchMovieReviews} from '../api';
export default {
    name: 'moviecard',
    props:['id', 'name'],
    async mounted() {
        this.movie = await fetchMovieReviews(this.id)
        this.reviews = this.movie.reviews.results
        this.localmovies=localStorage.getItem('favourite')?JSON.parse(localStorage.getItem('favourite')):[];
        if(this.name==="showAllMovies"){
            this.notconsistmovie=false
        }else{
            if(this.localmovies.length>0){
                this.localmovies.find(movie=>{
                    if(movie.id===this.movie.id){
                        this.notconsistmovie= false;
                    }            
                })
            }else{
                this.notconsistmovie=true
            }
             
        }
    },
    data() {
        return {
            movie:{},
            notconsistmovie:Boolean,
            localmovies:[],
            selectedmovie:{},
            reviews:[]
        }
    },
    methods: {
        back(){
            this.$emit('back','movies')
        },
        tofavourite(){          
            
            if(this.notconsistmovie){
                this.localmovies.push(this.movie)
                this.notconsistmovie=false
            }else{
                this.localmovies=this.localmovies.filter(movies=>movies.id !== this.movie.id)
                this.notconsistmovie = true
            }
            localStorage.setItem('favourite', JSON.stringify(this.localmovies))
            
        }
    }
}
</script>