import { renderMarkup } from './pagination';
import { refs } from './refs';
import axios from 'axios';

const filterContainer = document.querySelector('.js-filter');
filterContainer.addEventListener('change', onFilterChange);

// function onFilterChange(e) {
//   e.preventDefault();

//   const currentId = +e.currentTarget.value;
//   console.log(currentId);
//   fetch(
//     'https://api.themoviedb.org/3/trending/movie/day?api_key=2963fc82afd3cb57f64d050a1ba5935c&language=en-US'
//   )
//     .then(resp => resp.json())
//     .then(data => {
//       const id = currentId; //беремо значення з тегу селект
//       console.log(id);
//       console.log(data);
//       console.log(data.results);

//       const byGanre = data.results.filter(film =>
//         film['genre_ids'].includes(id)
//       );

//       console.log(byGanre);
//       refs.cardsListEl.innerHTML = renderMarkup(byGanre);
//     });
// }

async function getFilteredMovies(id) {
  try {
    const searchParams = new URLSearchParams({
      api_key: '2963fc82afd3cb57f64d050a1ba5935c',
      sort_by: 'popularity.desc',
      //   page,
      include_adult: false,
      with_genres: id,
      //   primary_release_year,
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

  const results = await getFilteredMovies(currentId);
  console.log(results);

  refs.cardsListEl.innerHTML = renderMarkup(results.results);
}
