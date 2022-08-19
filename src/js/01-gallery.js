// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup (galleryItems);

imageContainer.insertAdjacentHTML("beforeend", cardsMarkup);

imageContainer.addEventListener("click", onImageContainerClick)

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

function onImageContainerClick (e) {
  e.target.alt;
}