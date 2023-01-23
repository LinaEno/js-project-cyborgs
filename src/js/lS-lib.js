import { renderMarkupLib } from "./renderLib";
import { refs } from "./refs-lib";

refs.watchedBtnLib.addEventListener('click', renderWatchedFilms);

refs.queueBtnLib.addEventListener('click', renderQueueFilms);

function renderWatchedFilms() {
    const films = JSON.parse(localStorage.getItem("watched")) || [];
    if (!films.length) {
        refs.filmLibList.innerHTML = "Not films"
        return;
    }
    renderMarkupLib(films);
}

function renderQueueFilms() {
    const films = JSON.parse(localStorage.getItem("queue")) || [];
    if (!films.length) {
        refs.filmLibList.innerHTML = "Not films"
        return
    }
    renderMarkupLib(films);
}

renderWatchedFilms();
renderQueueFilms();