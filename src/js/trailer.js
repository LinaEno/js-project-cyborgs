'use strict';
import { FilmAPI } from "./FilmAPI";


const refs = {
  openModalBtn: document.querySelector('[data-modal-trailer]'),
  closeModalBtn: document.querySelector('[data-modal-trailer-close]'),
    modal: document.querySelector('[data-trailer-modal]'),
    modalInfo: document.querySelector('.modal-film__info'),
};

    refs.openModalBtn.addEventListener('click', onOpenVideo);
    refs.closeModalBtn.addEventListener('click', onCloseModal);



const API_KEY = '2963fc82afd3cb57f64d050a1ba5935c';

const filmsApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
  },
});

export function getTrailerById(id) {
    return filmsApi.get(`movie/${id}/videos`)
    
}

export async function onOpenVideo(id) {
  try {
    
    const {
      data: { results: trailersArray },
    } = await getTrailerById(id);
    if (trailersArray.length) {
      const key = trailersArray[0].key;
      const video = `
        <iframe class="modal-film__video" src="https://www.youtube.com/embed/${key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
      refs.modal.innerHTML = video;
      refs.modal.classList.remove('is-hidden');
      refs.closeModalBtn.addEventListener('click', onCloseModal);
    } else {
      console.log('hi');
    }
  } catch (error) {
    console.log('hi');
  } 
}

export function onCloseModal() {
  if (!refs.modal.classList.contains('is-hidden')) {
    refs.modal.innerHTML = '';
    refs.modal.classList.add('is-hidden');
    return;
  }
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onBackdropCloseClick);
}
function onBackdropCloseClick(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}
function onEscKeydown(e) {
  if (e.code === 'Escape' && !refs.modal.contains('is-hidden')) {
    onCloseModal();
  }
}


