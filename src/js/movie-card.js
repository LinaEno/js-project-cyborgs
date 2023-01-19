export function renderGenres(movie, allGenges) {
  const genresName = [];

  movie.genre_ids.forEach(genre => {
    allGenges.forEach(item => {
      if (item.id === genre) {
        genresName.push(item.name);
      }
    });
  });
  if (genresName.length > 2) {
    genresName.splice(2, genresName.length - 1, 'Other');
  }
  if (genresName.length === 0) {
    genresName.push('Other');
  }
  return genresName.join(', ');
}


export function renderMarkup(data, genres) {
  const { id, poster_path, title, release_date, vote_average } = data;
  const posterPath = data.poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : `https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png`;
  const releaseYear = new Date(Date.parse(release_date)).getFullYear() || '';

  return `<li class="gallery__item movie-card" data-id="${id}">
                  <div class="movie-card__poster-thumb">
                    <img src="${posterPath}"
                        class="movie-card__poster"
                        alt="${title}"
                                            />
                  </div>
                  <div class="movie-card__wrap">
                      <h2 class="movie-info-title"> ${title}</h2>
                      <div class="movie-info-list">
                      <p class="info-item-genre">${genres}</p>
                        <span class="info-item-slash"> | </span>
                        <p class="info-item-year">${releaseYear}</p>
                      </div>
                  </div>
            </li>`;
}