var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i("hv3Jw"),i("gjiCh");const l={watchedBtnLib:document.querySelector("[data-lib-watched]"),queueBtnLib:document.querySelector("[data-lib-queue]"),filmLibList:document.querySelector(".film-list")};function o(e){console.log(e);const t=e.map((e=>`<li class="cards__item" data-id=${e.id}> \n          <img \n            class="cards__photo" \n            alt="film" \n            src="https://image.tmdb.org/t/p/w500${e.poster_path}" \n            width="395" \n            loading="lazy" \n          /> \n          <h3 class="cards__title">${e.title}</h3> \n          <p class="cards__info">${e.genres.map((({name:e})=>e)).join(", ")} | ${e.release_date}</p> \n          <p class="rating">${e.vote_average.toFixed(1)}</p>\n        </li>`)).join("");return l.filmLibList.insertAdjacentHTML("beforeend",t),t}function a(){const e=JSON.parse(localStorage.getItem("watched"))||[];e.length?o(e):l.filmLibList.innerHTML="Not films"}function r(){const e=JSON.parse(localStorage.getItem("queue"))||[];e.length?o(e):l.filmLibList.innerHTML="Not films"}l.watchedBtnLib.addEventListener("click",a),l.queueBtnLib.addEventListener("click",r),a(),r(),i("6HA5D");
//# sourceMappingURL=library.493892c2.js.map