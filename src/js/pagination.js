import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { genresInfo } from './genres';

const cardsListEl = document.querySelector('.cards__list');
onLoadDocument();
const defimg = new URL('/images/zaglushka.jpg', import.meta.url);

async function getPopularFilms(page = 1) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=2963fc82afd3cb57f64d050a1ba5935c&page=${page}`
  );
  console.log(data);
  return data.results;
}

export function getGenresName(genresInfo, genreIds) {
  const genresName = genresInfo.reduce((acc, genre) => {
    if (genreIds.includes(genre.id)) {
      return [...acc, genre.name];
    }
    return acc;
  }, []);
  return genresName.length > 2 ? genresName.slice(0, 2) + ',Other' : genresName;
}

export function renderMarkup(films) {
  const markup = films
    .map(film => {
      return `<li class="cards__item" data-id=${film.id}> 
          <img 
            class="cards__photo" 
            alt="film" 
            src=${
              film.poster_path
                ? 'https://image.tmdb.org/t/p/w500/' + film.poster_path
                : defimg
            }
            width="280"
            height="502" 
            loading="lazy" 
          /> 
          <h3 class="cards__title">${film.title}</h3> 
          <p class="cards__info">${getGenresName(
            genresInfo,
            film.genre_ids
          )} | ${film.release_date}</p> 
          <p class="rating">${film.vote_average.toFixed(1)}</p>
        </li>`;
    })
    .join('');
  cardsListEl.insertAdjacentHTML('beforeend', markup);
  // cardsListEl.innerHTML = markup;
  return markup;
}

export async function onLoadDocument() {
  try {
    const popularFilms = await getPopularFilms();
    renderMarkup(popularFilms);
  } catch (error) {
    console.log(error);
  }
}

const btn1Ref = document.querySelector('[data-index="1"]');
const btn2Ref = document.querySelector('[data-index="2"]');
const btn3Ref = document.querySelector('[data-index="3"]');
const btn4Ref = document.querySelector('[data-index="4"]');
const btn5Ref = document.querySelector('[data-index="5"]');
const firstPageRef = document.querySelector('.first-button');
const lastPageRef = document.querySelector('.last-button');
export const paginationRef = document.querySelector('.pagination-container');
const rightArrowRef = document.querySelector('.arrow-right');
const leftArrowRef = document.querySelector('.arrow-left');
const prevDotsRef = document.querySelector('#previous');
const afterDotsRef = document.querySelector('#after');

paginationRef.addEventListener('click', onPaginationClick);

let currentPage = 1;

let btns = document.querySelectorAll('.pagination-button');

prevDotsRef.hidden = true;
leftArrowRef.hidden = true;
firstPageRef.hidden = true;

function onPaginationClick(event) {
  if (event.target.tagName === 'BUTTON') {
    if (Number(event.target.textContent)) {
      currentPage = Number(event.target.textContent);
    }

    prevDotsRef.hidden = true;
    afterDotsRef.hidden = true;

    if (event.target.classList.contains('pagination-button')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      event.target.classList.add('pagination--current');
    }

    if (event.target.classList.contains('arrow-right') && currentPage < 1000) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.classList.add('pagination--current');
      btn1Ref.textContent = Number(btn1Ref.textContent) + 5;
      btn2Ref.textContent = Number(btn2Ref.textContent) + 5;
      btn3Ref.textContent = Number(btn3Ref.textContent) + 5;
      btn4Ref.textContent = Number(btn4Ref.textContent) + 5;
      btn5Ref.textContent = Number(btn5Ref.textContent) + 5;
      currentPage = btn1Ref.textContent;
    }

    if (event.target.classList.contains('arrow-left') && currentPage >= 5) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = Number(btn1Ref.textContent) - 5;
      btn2Ref.textContent = Number(btn2Ref.textContent) - 5;
      btn3Ref.textContent = Number(btn3Ref.textContent) - 5;
      btn4Ref.textContent = Number(btn4Ref.textContent) - 5;
      btn5Ref.textContent = Number(btn5Ref.textContent) - 5;
      btn5Ref.classList.add('pagination--current');
      currentPage = btn5Ref.textContent;
    }

    if (event.target.classList.contains('first-button')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = 1;
      btn2Ref.textContent = 2;
      btn3Ref.textContent = 3;
      btn4Ref.textContent = 4;
      btn5Ref.textContent = 5;
      btn1Ref.classList.add('pagination--current');
      currentPage = btn1Ref.textContent;
      leftArrowRef.hidden = true;
      prevDotsRef.hidden = true;
      firstPageRef.hidden = true;
    }

    if (event.target.classList.contains('last-button')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = Number(lastPageRef.textContent) - 4;
      btn2Ref.textContent = Number(lastPageRef.textContent) - 3;
      btn3Ref.textContent = Number(lastPageRef.textContent) - 2;
      btn4Ref.textContent = Number(lastPageRef.textContent) - 1;
      btn5Ref.textContent = lastPageRef.textContent;
      btn5Ref.classList.add('pagination--current');
      currentPage = btn5Ref.textContent;
      rightArrowRef.hidden = true;
      afterDotsRef.hidden = true;
      lastPageRef.hidden = true;
    }

    if (Number(currentPage) > 5) {
      leftArrowRef.hidden = false;
      prevDotsRef.hidden = false;
      firstPageRef.hidden = false;
    } else {
      leftArrowRef.hidden = true;
      prevDotsRef.hidden = true;
      firstPageRef.hidden = true;
    }

    if (Number(currentPage) < 996) {
      rightArrowRef.hidden = false;
      afterDotsRef.hidden = false;
      lastPageRef.hidden = false;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // if (filmApi.searchQuery?.length > 0) {
    //   filmApi.page = currentPage;
    //   console.log(currentPage);
    //   // лодер
    //   cardsListEl.innerHTML = '';
    //   filmApi.getFilmsByName().then(data => {
    //     cardsListEl.innerHTML = renderMarkup(data.results);
    //     console.log(data.total_pages);
    //   });
    //   return;
    // }

    getPopularFilms(currentPage).then(data => {
      Loading.circle();
      Loading.remove(600);
      cardsListEl.innerHTML = renderMarkup(data);
      console.log(data);
    });
  }
}
