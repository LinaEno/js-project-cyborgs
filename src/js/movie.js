
import axios from 'axios';

const KEY = `2963fc82afd3cb57f64d050a1ba5935c`;

const axios2 = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    
});

export default class FilmAPI {
    constructor() {
        this.searchQuery = null;
        this.page = 1;
    }

    async getPopularFilms() {

        const response = await axios2.get(`/trending/movie/day?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`);
        return response.data;
            
    }


  getPopularFilms() {
    const searchParams = {
      params: {
      poster_path,
      genre_ids,
      id,
      title,
      release_date,
      vote_average,
      genres,
      },
    };

    return axios2.get(`/trending/movie/day?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`);
  }

}

const galleryListEl = document.querySelector('.js-gallery');


const filmApi = new FilmAPI();

const filmApiMake = async () => {
  try {
    const { data } = await filmApi.getPopularFilms();

    galleryListEl.innerHTML = createGalleryCards(data);

  } catch (err) {
    console.log(err);
  }
};

getPopularFilms();
export const createGalleryCards = cardInfo => {
  const galleryCardsArr = cardInfo.map(el => {
    return `
            <li class="gallery__item">
                <img src="${el.urls.regular}" alt="${el.alt_description}" class="gallery-img">
            </li>
        `;
  });

  return galleryCardsArr.join('');
};