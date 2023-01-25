import { refs } from './refs-lib';

export function renderMarkupLib(films) {
  console.log(films);
  const markup = films
    .map(film => {
      return `<li class="cards__item" data-id=${film.id}> 
          <img 
            class="cards__photo" 
            alt="film" 
            src=${
              film.poster_path
                ? 'https://image.tmdb.org/t/p/w500/' + film.poster_path
                : defimg
            } 
            width="395" 
            loading="lazy" 
          /> 
          <h3 class="cards__title">${film.title}</h3> 
          <p class="cards__info">${film.genres
            .map(({ name }) => name)
            .join(', ')} | ${film.release_date}</p> 
          <p class="rating">${film.vote_average.toFixed(1)}</p>
        </li>`;
    })
    .join('');
  refs.filmLibList.innerHTML = markup;
  return markup;
}
