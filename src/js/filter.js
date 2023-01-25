import { renderMarkup } from './pagination';
import { refs } from './refs';
import axios from 'axios';
import { onLoadDocument } from './pagination';

const filterContainer = document.querySelector('.js-filter');
filterContainer.addEventListener('change', onFilterChange);
const filterContainerVote = document.querySelector('.js-filter-vote');
filterContainerVote.addEventListener('change', onVotesFilter);
const filterClear = document.querySelector('.js-clear');
filterClear.addEventListener('click', onClickClear);

const filter = {
  genre_id: '',
  vote: '',
};

async function getFilteredMovies() {
  try {
    const searchParams = new URLSearchParams({
      api_key: '2963fc82afd3cb57f64d050a1ba5935c',
      sort_by: 'popularity.desc',
      release_date: '',
      include_adult: false,
      with_genres: filter.genre_id,
      'vote_average.gte': filter.vote,
    });
    const url = `https://api.themoviedb.org/3/discover/movie?${searchParams}`;
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
}

async function onFilterChange(e) {
  e.preventDefault();

  const currentId = +e.currentTarget.value;
  console.log(currentId);
  filter.genre_id = currentId;
  const results = await getFilteredMovies();
  console.log(results);

  // if (currentId === 1 || results.results.length === 0) {
  //   onLoadDocument();
  // }

  refs.cardsListEl.innerHTML = renderMarkup(results.results);
}

// async function onYearsFilter(e) {
//   let year = +e.currentTarget.value;
//   const results = await getFilteredMovies(currentId);
//   console.log(results);
//   refs.cardsListEl.innerHTML = renderMarkup(results.results);
// }

async function onVotesFilter(e) {
  e.preventDefault();
  let vote = +e.currentTarget.value;
  filter.vote = vote;

  const results = await getFilteredMovies();

  refs.cardsListEl.innerHTML = renderMarkup(results.results);
}

function onClickClear(e) {
  e.preventDefault();
  refs.cardsListEl.innerHTML = '';
  filterContainer.value = 1;
  filterContainerVote.value = 11;
  onLoadDocument();
}
