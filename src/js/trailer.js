'use strict';
import { FilmAPI } from './FilmAPI';

const refs = {
  closeModalBtn: null,
  modal: document.querySelector('[data-trailer-modal]'),
  modalInfo: document.querySelector('.trailer-video-container'),
};

//refs.openModalBtn.addEventListener('click', onOpenVideo);

const filmApi = new FilmAPI();

export async function onOpenVideo(id) {
  try {
    const { results: trailersArray } = await filmApi.getFilmVideo(id);

    console.log(trailersArray);

    if (trailersArray.length) {
      const key = trailersArray[0].key;
      const video = `
        
        <iframe class="modal_trailer-video" src="https://www.youtube.com/embed/${key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
      refs.modalInfo.insertAdjacentHTML('beforeend', video);
      refs.closeModalBtn = document.querySelector('[data-modal-trailer-close]');
      refs.modal.classList.remove('is-hidden');
      refs.closeModalBtn.addEventListener('click', onCloseModal);
    }
  } catch (error) {
    console.log(error);
  }
}

function onCloseModal() {
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onBackdropCloseClick);
  refs.modalInfo.innerHTML = '';
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

// refs.closeModalBtn.addEventListener('click', onCloseModal);
