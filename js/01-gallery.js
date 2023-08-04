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
data-source="${image.original}"
alt="${image.description}"/></a></li>`;
    })
    .join("");

  galleryListEl.innerHTML = markup;
};

createMarkup(galleryItems);

const galeryClick = (event) => {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }
  const escClose = (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  };

  const imagesSrc = event.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `
  <div><img src="${imagesSrc}" width = "1000" height="700"></div>`,
    {
      onShow: () => {
        document.addEventListener("keydown", escClose);
      },
      onClose: () => {
        document.removeEventListener("keydown", escClose);
      },
    }
  );

  instance.show();
};

galleryListEl.addEventListener("click", galeryClick);
