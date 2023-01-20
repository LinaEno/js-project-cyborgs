'use strict';


import { markupCards } from './markups';
import { FilmAPI } from './FilmAPI';
import { refs } from './refs';

const filmApi = new FilmAPI();

onLoadDocument();



// async function getPopularFilms() {
//   const { data } = await axios.get(
//     'https://api.themoviedb.org/3/trending/movie/week?api_key=2963fc82afd3cb57f64d050a1ba5935c'
//   );
//   console.log(data);
//   return data.results;
// }

function renderMarkupCards() {
  refs.cardsListEl.insertAdjacentHTML('beforeend', markupCards);
}


async function onLoadDocument() {
  try {
    const popularFilms = await filmApi.getPopularFilms();
    renderMarkupCards(popularFilms);
  } catch (error) {
    console.log(error);
  }
}