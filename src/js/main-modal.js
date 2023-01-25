import { FilmAPI } from './FilmAPI.js';
import { refs } from './refs.js';
import { onOpenVideo } from './trailer.js';
import { onWatchedBtnClick, onQueueBtnClick } from './localStorage.js';
const filmApi = new FilmAPI();
const modalBackdrop = document.querySelector('.backdrop__modal-film');
const buttonCloseModal = document.querySelector('#modal-close-button');
const modalCardInfo = document.querySelector('.modal-film__info');
// console.log(onQueueBtnClick);
const defimg = new URL('/images/zaglushka.jpg', import.meta.url);

refs.cardsListEl.addEventListener('click', onOpenModal);

async function onOpenModal(event) {
  if (!event.target.closest('[data-id]')) {
    return;
  }

  const currentCardId = event.target.closest('li').dataset.id;
  const movieRes = await filmApi.getFilmDetails(currentCardId);
  console.log(movieRes);
  createMovieCard(movieRes);

  refs.openTrailerFilm = document.querySelector('[data-modal-trailer]');
  refs.openTrailerFilm.addEventListener('click', () => {
    onOpenVideo(currentCardId);
  });
  refs.watchedBtn = document.querySelector('[data-modal-watched-id]');
  refs.queueBtn = document.querySelector('[data-modal-queue-id]');
  console.log(refs.queueBtn);
  refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
  refs.queueBtn.addEventListener('click', onQueueBtnClick);

  modalBackdrop.classList.remove('is-hidden');
  window.addEventListener('click', closeModalbyBackdrop);
  window.addEventListener('keydown', onKeyClick);
  buttonCloseModal.addEventListener('click', closeModalbyCross);
}

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
  modalCardInfo.innerHTML = '';
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
    id,
  } = obj;
  const watchedFilms = JSON.parse(localStorage.getItem('watched')) || [];
  const queuedFilms = JSON.parse(localStorage.getItem('queue')) || [];
  const inWatched = watchedFilms.some(film => film.id === id);
  const isQueued = queuedFilms.some(film => film.id === id);
  const genresArr = genres.map(el => el.name);

  const markupModal = `
        <div class="film-card">
            <div class="film-card__img">
            <img class="film-card__picture" src=${
              poster_path
                ? 'https://image.tmdb.org/t/p/w500/' + poster_path
                : defimg
            } alt="${title}" width="375">
            </div>
            <div class="film-card__info">
            <h2 class="film-card__title">${title}</h2>
            <div class="film-card__general-info">
                <ul class="info-list">
                <li class="info">
                <p class="info-item">Vote/Votes</p>
                <p class="info-result"><span class="accent-vote">${vote_average.toFixed(
                  1
                )}</span>/${vote_count}</p>
                </li>
                <li class="info">
                <p class="info-item">Popularity</p>
                <p class="info-result">${popularity.toFixed(1)}</p>
                </li>
                <li class="info">
                <p class="info-item">Original Title</p>
                <p class="info-result  to-up">${original_title}</p>
                </li>
                <li class="info">
                <p class="info-item">Genre</p>
                <p class="info-result">${[...genresArr]}</p>
                </li>
                </ul>
            </div>
            <p class="film-card__overview-title">About</p>
            <p class="film-card__overview">${overview}</p>
            <div class="modal-film__buttons-block">
                <button type="submit" class="btn-watched button" data-modal-watched-id=${id} data-action="${
    inWatched ? 'remove' : 'add'
  }">
        ${inWatched ? 'Remove from watched' : 'Add to watch'}</button>
                <button type="submit" class="btn-queue button" data-modal-queue-id=${id}  data-action="${
    isQueued ? 'remove' : 'add'
  }">
        ${isQueued ? 'Remove from queue' : 'Add to queue'}</button>
                <button type="submit" class="btn-trailer button" data-modal-trailer><span></span>
        <span></span>
        <span></span>
        <span></span>Watch trailer</button>
            </div>
            </div>
        </div>
    `;
  modalCardInfo.innerHTML = markupModal;
  return markupModal;
}
