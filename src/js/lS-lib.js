import { renderMarkupLib } from './renderLib';
import { refs } from './refs-lib';
import img from '../../images/lenta.png';

renderWatchedFilms();
renderQueueFilms();

refs.watchedBtnLib.addEventListener('click', renderWatchedFilms);

refs.queueBtnLib.addEventListener('click', renderQueueFilms);

function renderWatchedFilms() {
  const films = JSON.parse(localStorage.getItem('watched')) || [];
  if (!films.length) {
    refs.galleryCont.innerHTML = `<p class="lib-text">There are no films here yet</p>
<img src="${img}" alt="lenta" width="500">`;
    return;
  }

  renderMarkupLib(films);
  refs.watchedBtnLib.classList.add('active');
  refs.queueBtnLib.classList.remove('active');
}

function renderQueueFilms() {
  const films = JSON.parse(localStorage.getItem('queue')) || [];
  if (!films.length) {
    refs.filmLibList.innerHTML = `<p class="lib-text">There are no films here ... yet!
<img src="${img}" alt="lenta" width="500"></p>`;
    return;
  }
  renderMarkupLib(films);
  refs.queueBtnLib.classList.add('active');
  refs.watchedBtnLib.classList.remove('active');
}
