'use strict';
import { FilmAPI } from './FilmAPI';
import { refs } from './refs';
import { renderMarkup } from './fetchFilms';

const filmApi = new FilmAPI();


const onSearchFormSubmit = async event => {
  event.preventDefault();

  filmApi.searchQuery = event.target.elements.query.value.trim();
  filmApi.page = 1;
  refs.formWarning.textContent = '';

  try {
    const data = await filmApi.getFilmsByName();
    

    if (!data.results.length) {
      setTimeout(() => {
        refs.formWarning.classList.add('is-hidden');
      }, 5000);
      refs.formWarning.classList.remove('is-hidden');
      event.target.reset();
      refs.formWarning.textContent =
        'Search result not successful. Enter the correct movie name and try again.';

      return;
    }
    
    refs.cardsListEl.innerHTML = renderMarkup(data.results);
    event.target.reset();
  } catch (err) {
    console.log(err);
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

