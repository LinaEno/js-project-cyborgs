import axios from 'axios';

const API_KEY = '2963fc82afd3cb57f64d050a1ba5935c';

const filmsApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
  },
});

export function fetchTopFilms(page = 1) {
  return filmsApi.get(`trending/movie/day?page=${page}`)
}


export function createFilmItemMarkup(filmsArray) {
  return filmsArray
    .map(el => {
      let elGenres = [];
      for (let i = 0; i < el.genre_ids.length; i++) {
        for (let index = 0; index < genresList.length; index++) {
          if (genresList[index].id === el.genre_ids[i]) {
            elGenres.push(genresList[index].name);
          }
        }
      }

      elGenres = elGenres.length ? elGenres.join(', ') : '';
      let releaseDate = new Date(el.release_date).getFullYear();
      if (elGenres && releaseDate) {
        releaseDate = `| ${releaseDate}`;
      } else {
        releaseDate = releaseDate || '';
      }

      const imageSrc = el.poster_path
        ? `https://image.tmdb.org/t/p/original/${el.poster_path}`
        : 'https://www.reelviews.net/resources/img/default_poster.jpg';

      return `
    <li class="films__item" data-filmId="${el.id}">
      <a href="" class="films__link" role="button">
        <div class="films__img-container">
          <img
            src="${imageSrc}"
            alt="${el.original_title} poster"
            class="films__img"
            loading="lazy"
          />
        </div>
        <h2 class="films__title">${el.original_title}</h2>
        <p class="films__description">
          ${elGenres} ${releaseDate}
        </p>
      </a>
    </li>`;
    })
    .join('');
}


 const refs = {

  container: document.querySelector('.films .container')

}