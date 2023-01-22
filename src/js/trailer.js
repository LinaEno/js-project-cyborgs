'use strict';
import { FilmAPI } from "./FilmAPI";
const filmApi = new FilmAPI();

// function openModal(e) {
    
//     refs.modal.classList.remove('is-hidden');
//     document.addEventListener('keydown', escClose);
//     refs.modal.addEventListener('click', backdropClose);

//     openTrailer(e.target.dataset.id);
   
// }

// function closeModal() {
//    refs.modal.classList.add('is-hidden');
//    document.removeEventListener('keydown', escClose);
//     refs.modalInfo.innerHTML = '';

   
// }

// function escClose(event) {
//    if (event.code === 'Escape') {
//       closeModal();
//    }
// }

// function backdropClose(event) {
//    if (event.currentTarget === event.target) {
//       closeModal();
//    }
// }

// function openTrailer(id) {

//     const trailerYouTube = `<iframe style="width: 100%; height: 100%;" data-id="${id}" src="https://www.youtube.com/embed/2963fc82afd3cb57f64d050a1ba5935c?autoplay=1" loading = "lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Your browser does not support inline frames!</iframe>;`;
//     return refs.modalInfo.innerHTML = trailerYouTube;
// }


// // const refs = {
// //   openModalBtn: document.querySelector('[data-modal-trailer]'),
// //   closeModalBtn: document.querySelector('[data-modal-trailer-close]'),
// //     modal: document.querySelector('[data-trailer-modal]'),
// //     modalInfo: document.querySelector('.modal-film__info'),
// // };

// //     refs.openModalBtn.addEventListener('click', toggleModal);
// //     refs.closeModalBtn.addEventListener('click', toggleModal);

// // function toggleModal() {
// //     refs.modal.classList.toggle('is-hidden');
// // }

// const refs = {
//   openModalBtn: document.querySelector('[data-modal-trailer]'),
//   closeModalBtn: document.querySelector('[data-modal-trailer-close]'),
//     modal: document.querySelector('[data-trailer-modal]'),
//     modalInfo: document.querySelector('.modal-film__info'),
// };

//     refs.openModalBtn.addEventListener('click', openModal);
//     refs.closeModalBtn.addEventListener('click', closeModal);



const API_KEY = 'e20dc8db2a19ccc0feaf13905c82de4b';

const filmsApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
  },
});

export function getTrailerById(id) {
    return filmsApi.get(`movie/${id}/videos`)
    
}


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



