import Swiper, { Pagination } from "swiper";

const body = document.body;
const widthWindow = body.clientWidth;
const worksContainer = body.querySelector(".works__container");
const modalsBlock = body.querySelector(".modals");

// Opening modals
worksContainer.addEventListener("click", (event) => {
  const name = event.target.closest(".works__item-block").id.split("--")[1];

  body.querySelector(`.modal--${name}`).classList.add("modal--active");
  body.style.cssText = `
    overflow-y: hidden;
    width: ${widthWindow}px;
  `;
});

//Close modal
modalsBlock.addEventListener("click", (event) => {
  if (event.target.closest(".modal__btn-close")) {
    event.target.closest(".modal").classList.remove("modal--active");
    body.style.overflowY = "";
    body.style.width = "";
  }
});

const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
