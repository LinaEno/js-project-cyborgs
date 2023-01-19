import axios from 'axios';


const KEY = `2963fc82afd3cb57f64d050a1ba5935c`;

const axios2 = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    
});

export default class FilmAPI {
    constructor() {
        this.searchQuery = null;
        this.page = 1;
    }

    async  getFilms() {
        
        const response = await axios2.get(`/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`);
        return response.data;
        

    }

    async getPopularFilms() {

        const response = await axios2.get(`/trending/movie/day?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`);
        return response.data;
            
    }

    
    async getFilmsByGenres() {
        
        const response = await axios2.get(`/genre/movie/list?api_key=${KEY}&language=en-US`);
        return response.data;

    }

    async getFilmsByRating() {

    }

    async getFilmsByYears() {
        
    }

    async getFilmsByName() {

        const response = await axios2.get(`/search/movie?query=${this.searchQuery}&api_key=${KEY}&language=en-US`,)
        return response.data;

    }

    async getFilmDetails(id) {

        const response = await axios2.get(`/movie/${id}?api_key=${KEY}&language=en-US`)
        return response.data;

    }
    

    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    get pageNum() {
        return this.page;
    }
    set pageNum(newPage) {
        this.page = newPage;
    }
}

