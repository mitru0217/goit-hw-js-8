import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function setLocaleStorage({ seconds }) {
   localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
};

const currentTime = JSON.parse(localStorage.getItem(STORAGE_KEY));

player.setCurrentTime(currentTime || 0);


player.on("timeupdate", throttle(setLocaleStorage, 500)); 
