function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"5ZPII":"index.deadb896.js","8lNri":"zaglushka.b5a9b78e.jpg","5UbS1":"index.c63845ed.css","YufyT":"index.1c2b4f45.js"}')),o("hv3Jw"),o("gjiCh");var a=o("hv3Jw");const i={searchForm:document.querySelector(".js-search-form"),formWarning:document.querySelector(".header-form__warning"),cardsListEl:document.querySelector(".cards__list"),backdrop:document.querySelector(".backdrop"),closeModalBtn:document.querySelector(".btn-close"),trailerBtn:document.querySelector("[data-modal-trailer]"),openTrailerFilm:null,watchedBtn:null,queueBtn:null};var c=o("37v9V"),s=o("31u3U");const d=new(0,a.FilmAPI),l=document.querySelector(".backdrop__modal-film"),u=document.querySelector("#modal-close-button"),m=document.querySelector(".modal-film__info");var g;g=new URL(o("kyEFX").resolve("8lNri"),import.meta.url).toString();const h=new URL(g);function p(){l.classList.add("is-hidden"),m.innerHTML="",y()}function v(e){"Escape"===e.code&&(l.classList.add("is-hidden"),m.innerHTML="",y())}function f(e){e.target===e.currentTarget&&(l.classList.add("is-hidden"),m.innerHTML="",y())}function y(){window.removeEventListener("keydown",v),window.removeEventListener("click",f),u.removeEventListener("click",p)}i.cardsListEl.addEventListener("click",(async function(e){if(!e.target.closest("[data-id]"))return;const t=e.target.closest("li").dataset.id,n=await d.getFilmDetails(t);console.log(n),function(e){const{title:t,vote_average:n,vote_count:r,popularity:o,original_title:a,overview:i,genres:c,poster_path:s,id:d}=e,l=JSON.parse(localStorage.getItem("watched"))||[],u=JSON.parse(localStorage.getItem("queue"))||[],g=l.some((e=>e.id===d)),p=u.some((e=>e.id===d)),v=c.map((e=>e.name)),f=`\n        <div class="film-card">\n            <div class="film-card__img">\n            <img class="film-card__picture" src=${s?"https://image.tmdb.org/t/p/w500/"+s:h} alt="${t}" width="375">\n            </div>\n            <div class="film-card__info">\n            <h2 class="film-card__title">${t}</h2>\n            <div class="film-card__general-info">\n                <ul class="info-list">\n                <li class="info">\n                <p class="info-item">Vote/Votes</p>\n                <p class="info-result"><span class="accent-vote">${n.toFixed(1)}</span>/${r}</p>\n                </li>\n                <li class="info">\n                <p class="info-item">Popularity</p>\n                <p class="info-result">${o.toFixed(1)}</p>\n                </li>\n                <li class="info">\n                <p class="info-item">Original Title</p>\n                <p class="info-result  to-up">${a}</p>\n                </li>\n                <li class="info">\n                <p class="info-item">Genre</p>\n                <p class="info-result">${[...v]}</p>\n                </li>\n                </ul>\n            </div>\n            <p class="film-card__overview-title">About</p>\n            <p class="film-card__overview">${i}</p>\n            <div class="modal-film__buttons-block">\n                <button type="submit" class="btn-watched button" data-modal-watched-id=${d} data-action="${g?"remove":"add"}">\n        ${g?"Remove from watched":"Add to watch"}</button>\n                <button type="submit" class="btn-queue button" data-modal-queue-id=${d}  data-action="${p?"remove":"add"}">\n        ${p?"Remove from queue":"Add to queue"}</button>\n                <button type="submit" class="btn-trailer button" data-modal-trailer><span></span>\n        <span></span>\n        <span></span>\n        <span></span>Watch trailer</button>\n            </div>\n            </div>\n        </div>\n    `;m.innerHTML=f}(n),(i.openTrailerFilm=document.querySelector("[data-modal-trailer]")).addEventListener("click",(()=>{(0,c.onOpenVideo)(t)})),i.watchedBtn=document.querySelector("[data-modal-watched-id]"),i.queueBtn=document.querySelector("[data-modal-queue-id]"),console.log(i.queueBtn),i.watchedBtn.addEventListener("click",s.onWatchedBtnClick),i.queueBtn.addEventListener("click",s.onQueueBtnClick),l.classList.remove("is-hidden"),window.addEventListener("click",f),window.addEventListener("keydown",v),u.addEventListener("click",p)}));var b=o("2shzp");o("hv3Jw");const w=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];a=o("hv3Jw");var _=o("ipUyS");const x=new(0,a.FilmAPI),L=document.querySelector(".pagination-container"),S=document.querySelector(".footer"),C=document.querySelector("body"),q=document.querySelector(".js-filter"),E=document.querySelector(".js-filter-vote"),H=document.querySelector(".js-clear");i.searchForm.addEventListener("submit",(async e=>{e.preventDefault(),x.searchQuery=e.target.elements.query.value.trim(),x.page=1,i.formWarning.textContent="";try{const t=await x.getFilmsByName();if(!t.results.length)return setTimeout((()=>{i.formWarning.classList.add("is-hidden")}),1e4),i.formWarning.classList.remove("is-hidden"),e.target.reset(),i.formWarning.textContent=N(),i.cardsListEl.innerHTML=k,_.toTop.style.visibility="hidden",L.style.display="none",S.style.display="none",C.style.backgroundColor="black",q.style.display="none",E.style.display="none",void(H.style.display="none");i.cardsListEl.innerHTML=B(t.results),e.target.reset()}catch(e){console.log(e)}}));const T=["Search result not successful. Enter the correct movie name and try again."];function N(){let e=0,t=0,n="",r=document.querySelector(".header-form__warning");!function o(){let a=setTimeout((function(){if(n+=T[e][t],r.innerHTML=n+"|",t++,t>=T[e].length&&(t=0,e++,e===T.length))return clearTimeout(a),r.innerHTML=n,!0;o()}),(i=100,Math.floor(Math.random()*Math.floor(i))));var i}()}function k(){return'<div class="error"></div>\n<svg id="svgWrap_2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 700 250">\n    <g>\n        <path id="id3_2"\n            d="M195.7 232.67h-37.1V149.7H27.76c-2.64 0-5.1-.5-7.36-1.49-2.27-.99-4.23-2.31-5.88-3.96-1.65-1.65-2.95-3.61-3.89-5.88s-1.42-4.67-1.42-7.22V29.62h36.82v82.98H158.6V29.62h37.1v203.05z" />\n        <path id="id2_2"\n            d="M470.69 147.71c0 8.31-1.06 16.17-3.19 23.58-2.12 7.41-5.12 14.28-8.99 20.6-3.87 6.33-8.45 11.99-13.74 16.99-5.29 5-11.07 9.28-17.35 12.81a85.146 85.146 0 0 1-20.04 8.14 83.637 83.637 0 0 1-21.67 2.83H319.3c-7.46 0-14.73-.94-21.81-2.83-7.08-1.89-13.76-4.6-20.04-8.14a88.292 88.292 0 0 1-17.35-12.81c-5.29-5-9.84-10.67-13.66-16.99-3.82-6.32-6.8-13.19-8.92-20.6-2.12-7.41-3.19-15.27-3.19-23.58v-33.13c0-12.46 2.34-23.88 7.01-34.27 4.67-10.38 10.92-19.33 18.76-26.83 7.83-7.5 16.87-13.36 27.12-17.56 10.24-4.2 20.93-6.3 32.07-6.3h66.41c7.36 0 14.58.94 21.67 2.83 7.08 1.89 13.76 4.6 20.04 8.14a88.292 88.292 0 0 1 17.35 12.81c5.29 5 9.86 10.67 13.74 16.99 3.87 6.33 6.87 13.19 8.99 20.6 2.13 7.41 3.19 15.27 3.19 23.58v33.14zm-37.1-33.13c0-7.27-1.32-13.88-3.96-19.82-2.64-5.95-6.16-11.04-10.55-15.29-4.39-4.25-9.46-7.5-15.22-9.77-5.76-2.27-11.8-3.35-18.13-3.26h-66.41c-6.14-.09-12.11.97-17.91 3.19-5.81 2.22-10.95 5.43-15.44 9.63-4.48 4.2-8.07 9.3-10.76 15.29-2.69 6-4.04 12.67-4.04 20.04v33.13c0 7.36 1.32 14.02 3.96 19.97 2.64 5.95 6.18 11.02 10.62 15.22 4.44 4.2 9.56 7.43 15.36 9.7 5.8 2.27 11.87 3.35 18.2 3.26h66.41c7.27 0 13.85-1.2 19.75-3.61s10.93-5.73 15.08-9.98 7.36-9.32 9.63-15.22c2.27-5.9 3.4-12.34 3.4-19.33v-33.15zm-16-26.91a17.89 17.89 0 0 1 2.83 6.73c.47 2.41.47 4.77 0 7.08-.47 2.31-1.39 4.48-2.76 6.51-1.37 2.03-3.14 3.75-5.31 5.17l-99.4 66.41c-1.61 1.23-3.26 2.08-4.96 2.55-1.7.47-3.45.71-5.24.71-3.02 0-5.9-.71-8.64-2.12-2.74-1.42-4.96-3.44-6.66-6.09a17.89 17.89 0 0 1-2.83-6.73c-.47-2.41-.5-4.77-.07-7.08.43-2.31 1.3-4.48 2.62-6.51 1.32-2.03 3.07-3.75 5.24-5.17l99.69-66.41a17.89 17.89 0 0 1 6.73-2.83c2.41-.47 4.77-.47 7.08 0 2.31.47 4.48 1.37 6.51 2.69 2.03 1.32 3.75 3.02 5.17 5.09z" />\n        <path id="id1_2"\n            d="M688.33 232.67h-37.1V149.7H520.39c-2.64 0-5.1-.5-7.36-1.49-2.27-.99-4.23-2.31-5.88-3.96-1.65-1.65-2.95-3.61-3.89-5.88s-1.42-4.67-1.42-7.22V29.62h36.82v82.98h112.57V29.62h37.1v203.05z" />\n    </g>\n</svg>\n<svg id="svgWrap_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 700 250">\n    <g>\n        <path id="id3_1"\n            d="M195.7 232.67h-37.1V149.7H27.76c-2.64 0-5.1-.5-7.36-1.49-2.27-.99-4.23-2.31-5.88-3.96-1.65-1.65-2.95-3.61-3.89-5.88s-1.42-4.67-1.42-7.22V29.62h36.82v82.98H158.6V29.62h37.1v203.05z" />\n        <path id="id2_1"\n            d="M470.69 147.71c0 8.31-1.06 16.17-3.19 23.58-2.12 7.41-5.12 14.28-8.99 20.6-3.87 6.33-8.45 11.99-13.74 16.99-5.29 5-11.07 9.28-17.35 12.81a85.146 85.146 0 0 1-20.04 8.14 83.637 83.637 0 0 1-21.67 2.83H319.3c-7.46 0-14.73-.94-21.81-2.83-7.08-1.89-13.76-4.6-20.04-8.14a88.292 88.292 0 0 1-17.35-12.81c-5.29-5-9.84-10.67-13.66-16.99-3.82-6.32-6.8-13.19-8.92-20.6-2.12-7.41-3.19-15.27-3.19-23.58v-33.13c0-12.46 2.34-23.88 7.01-34.27 4.67-10.38 10.92-19.33 18.76-26.83 7.83-7.5 16.87-13.36 27.12-17.56 10.24-4.2 20.93-6.3 32.07-6.3h66.41c7.36 0 14.58.94 21.67 2.83 7.08 1.89 13.76 4.6 20.04 8.14a88.292 88.292 0 0 1 17.35 12.81c5.29 5 9.86 10.67 13.74 16.99 3.87 6.33 6.87 13.19 8.99 20.6 2.13 7.41 3.19 15.27 3.19 23.58v33.14zm-37.1-33.13c0-7.27-1.32-13.88-3.96-19.82-2.64-5.95-6.16-11.04-10.55-15.29-4.39-4.25-9.46-7.5-15.22-9.77-5.76-2.27-11.8-3.35-18.13-3.26h-66.41c-6.14-.09-12.11.97-17.91 3.19-5.81 2.22-10.95 5.43-15.44 9.63-4.48 4.2-8.07 9.3-10.76 15.29-2.69 6-4.04 12.67-4.04 20.04v33.13c0 7.36 1.32 14.02 3.96 19.97 2.64 5.95 6.18 11.02 10.62 15.22 4.44 4.2 9.56 7.43 15.36 9.7 5.8 2.27 11.87 3.35 18.2 3.26h66.41c7.27 0 13.85-1.2 19.75-3.61s10.93-5.73 15.08-9.98 7.36-9.32 9.63-15.22c2.27-5.9 3.4-12.34 3.4-19.33v-33.15zm-16-26.91a17.89 17.89 0 0 1 2.83 6.73c.47 2.41.47 4.77 0 7.08-.47 2.31-1.39 4.48-2.76 6.51-1.37 2.03-3.14 3.75-5.31 5.17l-99.4 66.41c-1.61 1.23-3.26 2.08-4.96 2.55-1.7.47-3.45.71-5.24.71-3.02 0-5.9-.71-8.64-2.12-2.74-1.42-4.96-3.44-6.66-6.09a17.89 17.89 0 0 1-2.83-6.73c-.47-2.41-.5-4.77-.07-7.08.43-2.31 1.3-4.48 2.62-6.51 1.32-2.03 3.07-3.75 5.24-5.17l99.69-66.41a17.89 17.89 0 0 1 6.73-2.83c2.41-.47 4.77-.47 7.08 0 2.31.47 4.48 1.37 6.51 2.69 2.03 1.32 3.75 3.02 5.17 5.09z" />\n        <path id="id1_1"\n            d="M688.33 232.67h-37.1V149.7H520.39c-2.64 0-5.1-.5-7.36-1.49-2.27-.99-4.23-2.31-5.88-3.96-1.65-1.65-2.95-3.61-3.89-5.88s-1.42-4.67-1.42-7.22V29.62h36.82v82.98h112.57V29.62h37.1v203.05z" />\n    </g>\n</svg>\n\n<svg>\n    <defs>\n        <filter id="glow">\n            <fegaussianblur class="blur" result="coloredBlur" stddeviation="4"></fegaussianblur>\n            <femerge>\n                <femergenode in="coloredBlur"></femergenode>\n                <femergenode in="SourceGraphic"></femergenode>\n            </femerge>\n        </filter>\n    </defs>\n</svg>\n\n<h4 class="error-message">Page Not Found<a href="./index.html" class="button btn-err">Go Back</a></h4>'}N();const M=document.querySelector(".cards__list");V();const F=new URL(g);async function $(e=1){const{data:t}=await b.default.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=2963fc82afd3cb57f64d050a1ba5935c&page=${e}`);return console.log(t),t.results}function B(e){const t=e.map((e=>`<li class="cards__item" data-id=${e.id}> \n          <img \n            class="cards__photo" \n            alt="film" \n            src=${e.poster_path?"https://image.tmdb.org/t/p/w500/"+e.poster_path:F}\n            width="280"\n            height="502" \n            loading="lazy" \n          /> \n          <h3 class="cards__title">${e.title}</h3> \n          <p class="cards__info">${function(e,t){const n=e.reduce(((e,n)=>t.includes(n.id)?[...e,n.name]:e),[]);return n.length>2?n.slice(0,2)+",Other":n}(w,e.genre_ids)} | ${e.release_date}</p> \n          <p class="rating">${e.vote_average.toFixed(1)}</p>\n        </li>`)).join("");return M.insertAdjacentHTML("beforeend",t),t}async function V(){try{B(await $())}catch(e){console.log(e)}}const j=document.querySelector('[data-index="1"]'),A=document.querySelector('[data-index="2"]'),z=document.querySelector('[data-index="3"]'),R=document.querySelector('[data-index="4"]'),O=document.querySelector('[data-index="5"]'),U=document.querySelector(".first-button"),W=document.querySelector(".last-button"),D=document.querySelector(".pagination-container"),J=document.querySelector(".arrow-right"),P=document.querySelector(".arrow-left"),I=document.querySelector("#previous"),G=document.querySelector("#after");D.addEventListener("click",(function(e){if("BUTTON"===e.target.tagName){var t;if(Number(e.target.textContent)&&(Q=Number(e.target.textContent)),I.hidden=!0,G.hidden=!0,e.target.classList.contains("pagination-button")&&(X.forEach((e=>e.classList.remove("pagination--current"))),e.target.classList.add("pagination--current")),e.target.classList.contains("arrow-right")&&Q<1e3&&(X.forEach((e=>e.classList.remove("pagination--current"))),j.classList.add("pagination--current"),j.textContent=Number(j.textContent)+5,A.textContent=Number(A.textContent)+5,z.textContent=Number(z.textContent)+5,R.textContent=Number(R.textContent)+5,O.textContent=Number(O.textContent)+5,Q=j.textContent),e.target.classList.contains("arrow-left")&&Q>=5&&(X.forEach((e=>e.classList.remove("pagination--current"))),j.textContent=Number(j.textContent)-5,A.textContent=Number(A.textContent)-5,z.textContent=Number(z.textContent)-5,R.textContent=Number(R.textContent)-5,O.textContent=Number(O.textContent)-5,O.classList.add("pagination--current"),Q=O.textContent),e.target.classList.contains("first-button")&&(X.forEach((e=>e.classList.remove("pagination--current"))),j.textContent=1,A.textContent=2,z.textContent=3,R.textContent=4,O.textContent=5,j.classList.add("pagination--current"),Q=j.textContent,P.hidden=!0,I.hidden=!0,U.hidden=!0),e.target.classList.contains("last-button")&&(X.forEach((e=>e.classList.remove("pagination--current"))),j.textContent=Number(W.textContent)-4,A.textContent=Number(W.textContent)-3,z.textContent=Number(W.textContent)-2,R.textContent=Number(W.textContent)-1,O.textContent=W.textContent,O.classList.add("pagination--current"),Q=O.textContent,J.hidden=!0,G.hidden=!0,W.hidden=!0),Number(Q)>5?(P.hidden=!1,I.hidden=!1,U.hidden=!1):(P.hidden=!0,I.hidden=!0,U.hidden=!0),Number(Q)<996&&(J.hidden=!1,G.hidden=!1,W.hidden=!1),window.scrollTo({top:0,behavior:"smooth"}),(null===(t=x.searchQuery)||void 0===t?void 0:t.length)>0)return x.page=Q,console.log(Q),M.innerHTML="",void x.getFilmsByName().then((e=>{M.innerHTML=B(e.results),console.log(e)}));$(Q).then((e=>{M.innerHTML=B(e),console.log(e)}))}}));let Q=1,X=document.querySelectorAll(".pagination-button");I.hidden=!0,P.hidden=!0,U.hidden=!0,o("6HA5D"),o("31u3U"),o("37v9V"),o("ipUyS"),o("j5rim");b=o("2shzp");const Y=document.querySelector(".js-filter");Y.addEventListener("change",(async function(e){e.preventDefault();const t=+e.currentTarget.value;console.log(t),K.genre_id=t;const n=await ee();console.log(n),i.cardsListEl.innerHTML=B(n.results)}));const Z=document.querySelector(".js-filter-vote");Z.addEventListener("change",(async function(e){e.preventDefault();let t=+e.currentTarget.value;K.vote=t,console.log(t);const n=await ee();console.log(n),console.log(n.results),i.cardsListEl.innerHTML=B(n.results)}));document.querySelector(".js-clear").addEventListener("click",(function(e){e.preventDefault(),i.cardsListEl.innerHTML="",Y.value=1,Z.value=11,V()}));const K={genre_id:"",vote:""};async function ee(){try{const e=`https://api.themoviedb.org/3/discover/movie?${new URLSearchParams({api_key:"2963fc82afd3cb57f64d050a1ba5935c",sort_by:"popularity.desc",release_date:"",include_adult:!1,with_genres:K.genre_id,"vote_average.gte":K.vote})}`,t=await b.default.get(e);return console.log(t),t.data}catch(e){return e}}
//# sourceMappingURL=index.deadb896.js.map
