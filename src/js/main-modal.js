// import { users, albums, photos } from './data.js';

// const refs = {
//   userListElem: document.querySelector('.js-user-list'),
//   albumsListElem: document.querySelector('.js-album-list'),
//   photoListEl: document.querySelector('.js-photo-list'),
//   modalka: document.querySelector('.modal'),
//   backdropEl: document.querySelector('.js-backdrop'),
// };

// refs.backdropEl.addEventListener('click', event => {
//   if (event.currentTarget === event.target) {
//     document.body.classList.remove('show-modal');
//   }
// });

// refs.userListElem.addEventListener('click', event => {
//   if (event.currentTarget !== event.target) {
//     const liElem = event.target.closest('.user-item');
//     refs.albumsListElem.innerHTML = createMarkupAlbumList(liElem.dataset.id);
//   }
// });

// function showModal(albumId) {
//   document.body.classList.add('show-modal');
//   const currentAlbum = albums.find(item => item.id === +albumId);
//   const currentUser = users.find(item => item.id === currentAlbum.userId);

//   refs.modalka.innerHTML = createModalMarkup(currentUser, albumId);
// }

// function createModalMarkup(user, albumId) {
//   const filteredPhoto = photos.filter(photo => photo.albumId === +albumId);
//   console.log(filteredPhoto);

//   const imagesMarkup = filteredPhoto
//     .map(photo => {
//       return `
//       <img class='lazyload blur-up' src='${photo.thumbnailUrl}' data-src='${photo.url}' alt='${photo.title}'>
//     `;
//     })
//     .join('');

//   const modalWrapper = `
//             <h2>${user.name}</h2>
//             <hr>
//             - <span>${user.email}</span><br>
//             - <span>${user.phone}</span><br>
//             - <a href="${user.website}">${user.website}</a>
//             <hr>
//             Adress: ${user.address.city} - ${user.address.street}
//             <hr>
//             Company: ${user.company.name}
//             <hr>
//             <div class="fb fb-v list js-modal-list" style="max-height: 500px; overflow-y: auto;">
//               ${imagesMarkup}
//             </div>
//     `;

//   return modalWrapper;
// }

// refs.userListElem.innerHTML = createMarkupUserList(users);
// refs.albumsListElem.addEventListener('click', event => {
//   if (event.currentTarget !== event.target) {
//     const liElem = event.target.closest('.album');

//     if (event.ctrlKey) {
//       showModal(liElem.dataset.id);
//     } else {
//       refs.photoListEl.innerHTML = createMarkupPhotoList(liElem.dataset.id);
//     }
//   }
// });

// function createMarkupUserList(users) {
//   return users
//     .map(user => {
//       return `<li class="user-item" data-id=${user.id}>
//                   <h3>${user.name}</h3>
//               </li>`;
//     })
//     .join('');
// }
// function createMarkupAlbumList(idUser) {
//   const fitrArr = albums.filter(album => {
//     return album.userId === +idUser;
//   });

//   return fitrArr
//     .map(album => {
//       return `<li class="album" data-id=${album.id}>
//                 <h3>${album.title}</h3>
//                 <div class="fb">
//                     <img src="https://via.placeholder.com/150/92c952" alt="1" style="width: 50px; height: 50px;">
//                     <img src="https://via.placeholder.com/150/92c952" alt="2" style="width: 50px; height: 50px;">
//                     <img src="https://via.placeholder.com/150/92c952" alt="3" style="width: 50px; height: 50px;">
//                 </div>
//             </li>`;
//     })
//     .join('');
// }

// function createMarkupPhotoList(albumId) {
//   const filteredPhotos = photos.filter(photo => photo.albumId === +albumId);
//   return filteredPhotos
//     .map(
//       photo => `<img loading="lazy" src="${photo.url}" alt="${photo.title}">`,
//     )
//     .join('');
// }