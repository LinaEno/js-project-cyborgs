import axios from 'axios';

const KEY = `2963fc82afd3cb57f64d050a1ba5935c`;


const axios2 = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    
});

export class FilmAPI {
  constructor() {
    this.searchQuery = null;
    this.page = 1;
  }

  async getPopularFilms() {

    const response = await axios2.get(`/trending/movie/day?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`);
    return response.data;
            
  }

}
const filmApi = new FilmAPI();
 const filmApiMake = async () => {
  try {
    const { data } = await filmApiMake.getPopularFilms();

   
   
  } catch (err) {
    console.log(err);
  }
};

export default function createFilmCardMarkup(filmData) {
   const {
      poster_path,
      genre_ids,
      id,
      title,
      release_date,
      vote_average,
      genres,
   } = filmData;
   const genresArr = genres?.map(({ id }) => id) || [];
   const filmGenresId = genre_ids?.slice(0, 3) || genresArr;
   const filmGenres = [];
   for (const filmId of filmGenresId) {
      for (const genre of genresA) {
         if (filmId === genre.id) {
            filmGenres.push(genre.name);
         }
      }
   }
      return `<li data-id="${id}" class="card film-card">
        <div class="film-card__img-wrap">
            <img
                class="film-card__img"
                src=${filmPoster}
                alt=${title}
            />
        </div>
        <h2 class="film-card__title">${title}</h2>
        <div class="film-card__wrap">
            <span class="film-card__info">${filmGenresString} | ${filmDate}</span>
            <span data-film-rating class="film-card__rating">${vote_average}</span>
        </div>
    </li>`;
}












