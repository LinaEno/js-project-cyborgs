export const refs = {
  searchForm: document.querySelector('.js-search-form'),
  formWarning: document.querySelector('.header-form__warning'),
  cardsListEl: document.querySelector('.cards__list'),
  backdrop: document.querySelector('.backdrop'),
  closeModalBtn: document.querySelector('.btn-close'),
  watchedBtn: document.querySelector('[data-modal-watched]'),
  queueBtn: document.querySelector('[data-modal-queue]'),
  trailerBtn: document.querySelector('[data-modal-trailer]'),
  filmLibList: document.querySelector('.film-list'),
};

// function handleMovieData(data, trailer) {
//   const {
//     poster_path: poster,
//     original_title,
//     title,
//     vote_average: vote,
//     vote_count: votes,
//     popularity,
//     genres,
//     overview,
//   } = data;
//   const genresList = Object.values(genres).flatMap(genre => genre.name);
//   const movie = { title, original_title, vote, votes, popularity, overview };
//   movie.poster = poster ? `https://image.tmdb.org/t/p/w500${poster}` : defaultPoster;
//   movie.genres = genresList.join(', ');
//   const backdropImage = data.backdrop_path;
//   if (backdropImage !== null) {
//     const background = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`;
//     backdrop.style.backgroundImage = url('${background}');
//     backdrop.style.backgroundSize = 'cover';
//     backdrop.style.backgroundPosition = '50% 50%';
//   }
//   const video = handleTrailer(trailer);
//   if (video) {
//     movie.trailer = `https://www.youtube.com/embed/${video}`;
//   }
 
//   return movie;
// }
 
// function handleTrailer(trailer) {
//   if (trailer.results.length === 0) {
//     return null;
//   } else {
//     return trailer.results[0].key;
//   }
// }
 
// function openTrailer(event) {
//   const iframe = document.getElementById('trailer-iframe');
//   iframe.classList.remove('is-hidden');
 
// }

export async function onImageClickOpenVideo(id) {
  try {
    spinner.hidden = false;
    const {
      data: { results: trailersArray },
    } = await getTrailerById(id);
    if (trailersArray.length) {
      const key = trailersArray[0].key;
      const video = `
        <iframe class="modal-film__video" src="https://www.youtube.com/embed/${key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
      modalVideo.innerHTML = video;
      modalVideo.classList.remove('is-hidden');
      modalVideo.addEventListener('click', onCloseModalClick);
    } else {
      Notify.failure('Trailers not found');
    }
  } catch (error) {
    Notify.failure(error.message);
  } finally {
    spinner.hidden = true;
  }
}

export function getTrailerById(id) {
  return filmsApi.get(`movie/${id}/videos`)
}

const API_KEY = 'e20dc8db2a19ccc0feaf13905c82de4b';

const filmsApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
  },
});