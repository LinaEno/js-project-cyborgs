import { renderMarkup } from "./pagination";
import { refs } from "./refs";
import { FilmAPI } from "./FilmAPI";

const filmApi = new FilmAPI();

export async function onWatchedBtnClick(e) {
    e.preventDefault();
    console.log(e);
    const id = e.target.dataset.modalWatchedId;

console.log(id);
    try {
    const results = await filmApi.getFilmDetails(id);;
    console.log(results);
    const watchedFilms = JSON.parse(localStorage.getItem("watched")) || [];
        if (watchedFilms.some(film => film.id === +id)) {
            console.log('qwe');
            return;
        } 
        watchedFilms.push(results);
    

    localStorage.setItem("watched", JSON.stringify(watchedFilms));
    refs.watchedBtn.textContent = "Remove from watched";
        
    } catch (error) {
    console.log(error);
    }
}

export async function onQueueBtnClick(e) {
    e.preventDefault();
console.log(e);
    const id = e.target.dataset.modalQueueId;
console.log(id);
    try {
    const results = await filmApi.getFilmDetails(id);
    console.log(results);
        const queuedFilms = JSON.parse(localStorage.getItem("queue")) || [];
        if (queuedFilms.some(film => film.id === +id)) {
            return;
        } 
        queuedFilms.push(results);
        console.log(queuedFilms);
        localStorage.setItem("queue", JSON.stringify(queuedFilms));
        refs.queueBtn.textContent = "Remove from queue";
        refs.queueBtn.classList.add('remove');
        // if (refs.queueBtn.classList.contains('remove')) {
        //     localStorage.removeItem(results)
        // }


        
    } catch (err) {
    console.log(err);
    }
}
