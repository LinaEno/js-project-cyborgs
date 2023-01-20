'use strict';

import { FilmAPI } from './FilmAPI';
import { refs } from './refs';

const filmApi = new FilmAPI();
// console.log(filmApi);

const onSearchFormSubmit = async event => {
  event.preventDefault();

  filmApi.searchQuery = event.target.elements.query.value.trim();
  filmApi.page = 1;
  refs.formWarning.textContent = '';

  try {
    const data = await filmApi.getFilmsByName();
    console.log(data);

    if (!data.results.length) {
      setTimeout(() => {
        refs.formWarning.classList.add('is-hidden');
      }, 5000);
      refs.formWarning.classList.remove('is-hidden');
      refs.formWarning.textContent =
        'Search result not successful. Enter the correct movie name and try again.';
      event.target.reset();
      return;
    }
  } catch (err) {
    console.log(err);
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

