import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");
const createMarkup = (array) => {
  const markup = array
    .map((image) => {
      return `<li class="gallery__item">
<a class="gallery__link" 
href="${image.original}">
<img class="gallery__image"
src="${image.preview}"
alt="${image.description}"/></a></li>`;
    })
    .join("");

  galleryListEl.innerHTML = markup;
};

createMarkup(galleryItems);

var lightbox = new SimpleLightbox(".gallery__link", {
  captionDelay: 250,
  captionsData: "alt",
});
