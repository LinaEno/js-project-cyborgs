import { refs } from "./refs-lib";

const genresInfo = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
];

export function getGenresName(genresInfo, genreIds) {
  const genresName = genresInfo.reduce((acc, genre) => {
    if (genreIds.includes(genre.id)) {
      return [...acc, genre.name];
    }
    return acc;
  }, []);
  return genresName.length > 2 ? genresName.slice(0, 2)+",Other" : genresName;
}

export function renderMarkup(films) { 
  
  const markup = films 
    .map(film => { 
      return `<li class="cards__item" data-id=${film.id}> 
          <img 
            class="cards__photo" 
            alt="film" 
            src="https://image.tmdb.org/t/p/w500${film.poster_path}" 
            width="395" 
            loading="lazy" 
          /> 
          <h3 class="cards__title">${film.title}</h3> 
          <p class="cards__info">${getGenresName(genresInfo, film.genre_ids)} | ${film.release_date}</p> 
          <p class="rating">${film.vote_average.toFixed(1)}</p>
        </li>`; 
    }) 
    .join(''); 
  refs.filmLibList.insertAdjacentHTML('beforeend', markup); 
  return markup; 
} 