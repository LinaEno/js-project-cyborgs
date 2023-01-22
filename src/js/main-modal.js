import {FilmAPI} from './FilmAPI.js'
import { refs } from './refs.js';
const filmApi= new FilmAPI();
const modalBackdrop = document.querySelector('.backdrop__modal-film');
const buttonCloseModal = document.querySelector('#modal-close-button');
const modalCardInfo = document.querySelector('.modal-film__info');

refs.cardsListEl.addEventListener('click', onOpenModal);

async function onOpenModal(event) {
  if (!event.target.closest('[data-id]')) {
    return;
  }
  const currentCardId = event.target.closest('li').dataset.id;
    const movieRes = await filmApi.getFilmDetails(currentCardId);
    console.log(movieRes)
  createMovieCard(movieRes);

  modalBackdrop.classList.remove('is-hidden');
  window.addEventListener('click', closeModalbyBackdrop);
  window.addEventListener('keydown', onKeyClick);
  buttonCloseModal.addEventListener('click', closeModalbyCross);
}

// async function addMovieInfo(id) {
//   const { data } = await axios.get(
//     https://api.themoviedb.org/3/movie/${id}?api_key=2963fc82afd3cb57f64d050a1ba5935c
//   );
//   return data;
// }

function closeModalbyCross() {
  modalBackdrop.classList.add('is-hidden');
  modalCardInfo.innerHTML = '';
  clearBackdropListeners();
}

function onKeyClick(event) {
  if (event.code !== 'Escape') {
    return;
  }
  modalBackdrop.classList.add('is-hidden');
  modalFilmInfo.innerHTML = '';
  clearBackdropListeners();
}

function closeModalbyBackdrop(event) {
  if (event.target === event.currentTarget) {
    modalBackdrop.classList.add('is-hidden');
    modalCardInfo.innerHTML = '';
    clearBackdropListeners();
  }
}

function clearBackdropListeners() {
  window.removeEventListener('keydown', onKeyClick);
  window.removeEventListener('click', closeModalbyBackdrop);
  buttonCloseModal.removeEventListener('click', closeModalbyCross);
}

function createMovieCard(obj) {
  const {
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    overview,
    genres,
    poster_path,
  } = obj;
  const genresArr = genres.map(el => el.name);
  
  const markupModal = `
        <div class="film-card">
            <div class="film-card__img">
            <img class="film-card__picture" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" width="375">
            </div>
            <div class="film-card__info">
            <h2 class="film-card__title">${title}</h2>
            <div class="film-card__general-info">
                <p class="info-item">Vote/Votes<span class="span__info">${vote_average.toFixed(1)}/${vote_count}</span></p>
                <p class="info-item">Popularity<span class="span__info">${popularity}</span></p>
                <p class="info-item">Original Title<span class="span__info">${original_title}</span></p>
                <p class="info-item">Genre<span class="span__info">${[...genresArr]}</span></p>
            </div>
            <p class="film-card__overview-title">About</p>
            <p class="film-card__overview">${overview}</p>
            <div class="modal-film__buttons-block">
                <button type="submit" class="modal-film__btn-watched" data-modal-watched>Add to watched</button>
                <button type="submit" class="modal-film__btn-queue" data-modal-queue>Add to queue</button>
            </div>
            </div>
        </div>
    `;
    modalCardInfo.insertAdjacentHTML('beforeend', markupModal);
    return markupModal;
}