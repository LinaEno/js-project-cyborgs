import axios from 'axios';

const KEY = `2963fc82afd3cb57f64d050a1ba5935c`;

const axios2 = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export class FilmAPI {
  constructor() {
    this.searchQuery = null;
    this.page = 1;
    this.genre = '';
    this.year = '';
    this.vote = '';
  }

  async getPopularFilms(page) {
    try {
      const response = await axios2.get(
        `/trending/movie/day?api_key=${KEY}&language=en-US&page=${page}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getFilmsByGenres() {
    try {
      const response = await axios2.get(
        `/genre/movie/list?api_key=${KEY}&language=en-US`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getFilmsByName() {
    try {
      const response = await axios2.get(
        `/search/movie?query=${this.searchQuery}&api_key=${KEY}&language=en-US&page=${this.page}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getFilmDetails(id) {
    try {
      const response = await axios2.get(
        `/movie/${id}?api_key=${KEY}&language=en-US`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getFilmVideo(id) {
    try {
      const response = await axios2.get(
        `/movie/${id}/videos?api_key=${KEY}&language=en-US`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getFilteredMovies() {
    try {
      const searchParams = new URLSearchParams({
        api_key: KEY,
        sort_by: 'popularity.desc',
        page: this.page,
        include_adult: false,
        with_genres: this.genre,
        primary_release_year: this.year,
      });
      const response = await axios2.get(
        `/discover/movie?${searchParams}&vote_average.gte=${this.vote}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  incrementPage() {
    this.page += 1;
  }
  decrementPage() {
    this.page -= 1;
  }
  resetPage() {
    this.page = 1;
  }
}
