import axios from 'axios';


const KEY = `d91911ebb88751cf9e5c4b8fdf4412c9`;

const axios2 = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {},
});

export default class FilmAPI {
    constructor() {
        this.searchQuery = null;
        this.page = 1;
    }

    async  getFilms() {
        
        const response = await axios2.get(`/search/movie?api_key=${KEY}&page=${this.page}&query=${this.searchQuery}`);
        return response.data;
        

    }

    async getPopularFilms() {

        const response = await axios2.get(`/trending/movie/day?api_key=${KEY}&page=${this.page}&query=${this.searchQuery}`);
        return response.data;
    
    }

    
    async getFilmsByGenres() {
        
        const response = await axios2.get(`/genre/movie/list?api_key=${KEY}`);
        return response.data;

    }

    async getFilmsByName() {

        const response = await axios2.get(`/search/movie?query=${this.searchQuery}&api_key=${KEY}`,)
        return response.data;

    }

    async getFilmDetails(id) {

        const response = await axios2.get(`/movie/${id}?api_key=${KEY}`)
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

