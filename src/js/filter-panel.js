// import FilmAPI from "./FilmAPI";
import axios from 'axios';
const KEY = `2963fc82afd3cb57f64d050a1ba5935c`;
const BASE_URL = 'https://api.themoviedb.org/3';

class FilmAPI {
    constructor() {
        this.searchQuery = null;
        this.page = 1;
    }

    async getFilms() {
        const response = await axios.get(`${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`);
        return response.data;
        console.log(response.data);
    }

    async getPopularFilms() {
        const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${KEY}&language=en-US&query=${this.searchQuery}`);
        return response.data;
    }

    async getFilmsByGenres() {
        const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${KEY}&language=en-US`);
        return response.data;
    }

    // async getFilmsByRating() {

    // }

    // async getFilmsByYears() {
        
    // }

    // async getFilmsByName() {

    //     const response = await axios2.get(`/search/movie?query=${this.searchQuery}&api_key=${KEY}&language=en-US`,)
    //     return response.data;

    // }

    // async getFilmDetails(id) {

    //     const response = await axios2.get(`/movie/${id}?api_key=${KEY}&language=en-US`)
    //     return response.data;

    // }

}


const genresBtn = document.querySelector('.btn-genres');
const topFilmBtn = document.querySelector('.btn-rating');
const yearBtn = document.querySelector('.btn-year');

const filmAPI = new FilmAPI();

topFilmBtn.addEventListener('click', onTopClick);

async function onTopClick(e) {
    e.preventDefault();

    searchQuery = e.target.elements;
    // console.log(query);

    const filmsRes = await filmAPI.getPopularFilms();
    console.log(filmsRes);
}

genresBtn.addEventListener('click', getGenres)

async function getGenres(e) {
    e.preventDefault();
    const genresRes = await filmAPI.getFilmsByGenres();
    console.log(genresRes);

}










// выпадающее меню
let intervalId;

document.querySelectorAll('.dropdown-toggle').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown-menu').forEach(e => {
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                e.classList.remove('menu-active');
                e.classList.remove('open');
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open');
                }, 0);
            }

            if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }, 0);
            }

            window.onclick = e => {
                if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
                    return;
                } else {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }
            }
        });
    });
});