import { addToStorage, getFromStorage, removeFromStorage } from "./storage";
import { renderMarkup } from "./pagination";
import { refs } from "./refs";

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

