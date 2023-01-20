'use strict';


// import { markupCards } from './markups';
// import { FilmAPI } from './FilmAPI';
// import { refs } from './refs';

// const filmApi = new FilmAPI();

// onLoadDocument();



// // async function getPopularFilms() {
// //   const { data } = await axios.get(
// //     'https://api.themoviedb.org/3/trending/movie/week?api_key=2963fc82afd3cb57f64d050a1ba5935c'
// //   );
// //   console.log(data);
// //   return data.results;
// // }

// function renderMarkupCards() {
//   refs.cardsListEl.insertAdjacentHTML('beforeend', markupCards);
// }


// async function onLoadDocument() {
//   try {
//     const popularFilms = await filmApi.getPopularFilms();
//     renderMarkupCards(popularFilms);
//   } catch (error) {
//     console.log(error);
//   }
// }

import axios from 'axios';

const cardsListEl = document.querySelector('.cards__list');
onLoadDocument();

async function getPopularFilms() {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=2963fc82afd3cb57f64d050a1ba5935c'
  );
  // console.log(data);
  return data.results;
}

export function renderMarkup(films) {
  const markup = films
    .map(film => {
      return `<li class="cards__item" data-id=${film.id}>
          <img
            class="cards__photo"
            alt="film"
            src="https://image.tmdb.org/t/p/w500${film.poster_path}"
            width="450"
            loading="lazy"
          />
          <h3 class="cards__title">${film.title}</h3>
          <p class="cards__info">${film.genre_ids} | ${film.release_date}</p>
        </li>`;
    })
    .join('');
  cardsListEl.insertAdjacentHTML('beforeend', markup);
  return markup;
}

export async function onLoadDocument() {
  try {
    const popularFilms = await getPopularFilms();
    renderMarkup(popularFilms);
  } catch (error) {
    console.log(error);
  }
}