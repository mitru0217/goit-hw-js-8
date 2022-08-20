import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const imageContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup (galleryItems);

imageContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCardsMarkup (galleryItems) {
    return galleryItems
    .map (({preview, original,description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    })
    .join("");
}

let lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: "alt",
  captionType: "attr",
  captionDelay: 250,
  });
  lightbox .on("show.simpleLightbox");