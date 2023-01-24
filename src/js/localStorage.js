import { FilmAPI } from './FilmAPI';

const filmApi = new FilmAPI();

export async function onWatchedBtnClick(e) {
  e.preventDefault();

  try {
    const id = e.target.dataset.modalWatchedId;

    if (e.target.dataset.action === 'add') {
      const results = await filmApi.getFilmDetails(id);
      console.log(results);
      const watchedFilms = JSON.parse(localStorage.getItem('watched')) || [];
      if (watchedFilms.some(film => film.id === +id)) {
        console.log('qwe');
        return;
      }
      watchedFilms.push(results);

      localStorage.setItem('watched', JSON.stringify(watchedFilms));
      e.target.textContent = 'Remove from watched';
      e.target.dataset.action = 'remove';
    } else {
      const watchedFilms = JSON.parse(localStorage.getItem('watched')) || [];
      console.log(watchedFilms);
      const filteredwatchedFilms = watchedFilms.filter(film => film.id !== +id);
      console.log(filteredwatchedFilms);
      localStorage.setItem('watched', JSON.stringify(filteredwatchedFilms));
      e.target.textContent = 'Add to watch';
      e.target.dataset.action = 'add';
    }
  } catch (err) {
    console.log(err);
  }
}

export async function onQueueBtnClick(e) {
  e.preventDefault();

  try {
    const id = e.target.dataset.modalQueueId;

    if (e.target.dataset.action === 'add') {
      const results = await filmApi.getFilmDetails(id);

      const queuedFilms = JSON.parse(localStorage.getItem('queue')) || [];
      if (queuedFilms.some(film => film.id === +id)) {
        return;
      }
      queuedFilms.push(results);

      localStorage.setItem('queue', JSON.stringify(queuedFilms));
      e.target.textContent = 'Remove from queue';
      e.target.dataset.action = 'remove';
    } else {
      const queuedFilms = JSON.parse(localStorage.getItem('queue')) || [];
      console.log(queuedFilms);
      const filteredQueueFilms = queuedFilms.filter(film => film.id !== +id);
      console.log(filteredQueueFilms);
      localStorage.setItem('queue', JSON.stringify(filteredQueueFilms));
      e.target.textContent = 'Add to queue';
      e.target.dataset.action = 'add';
    }
  } catch (err) {
    console.log(err);
  }
}
