const orderCall = document.querySelector(".order-call");

orderCall.onclick = () => {
  const feedbackCallForm = document.querySelector(".feedback-call-form");
  const body = document.querySelector("body");
  feedbackCallForm.classList.remove("modal-inactive");
  feedbackCallForm.classList.add("modal-active");
  body.classList.add("enableBlur");
  body.style.overflow = "hidden";
};

const crossButton = document.querySelector(".cross-button");

crossButton.onclick = () => {
  const body = document.querySelector("body");
  crossButton.parentElement.classList.remove("modal-active");
  crossButton.parentElement.classList.add("modal-inactive");
  body.classList.remove("enableBlur");
  body.style.overflow = "auto";
};

const headerMenuButtons = document.querySelectorAll(".header-menu-button");

let menuClicksCounter = 0;

const headerMenuButtonsCallback = (event) => {
  const body = document.querySelector("body");
  const categoriesPopupModal = document.querySelector(
    ".categories-popup-modal"
  );
  const modalCoords = categoriesPopupModal.getBoundingClientRect();
  const inX =
    modalCoords.left < event.clientX && modalCoords.right > event.clientX;
  const inY =
    modalCoords.top < event.clientY && modalCoords.bottom > event.clientY;
  if (!(inX && inY)) {
    if (menuClicksCounter > 0) {
      body.classList.remove("enableBlurWithoutHeader");
      categoriesPopupModal.classList.remove("modal-active");
      categoriesPopupModal.classList.add("modal-inactive");
      menuClicksCounter -= 2;
      body.removeEventListener("click", headerMenuButtonsCallback);
    }
    menuClicksCounter++;
  }
};

headerMenuButtons.forEach((button) => {
  button.onclick = () => {
    headerMenuButtons.forEach((button) => {
      button.classList.remove("header-menu-button-active");
    });
    button.classList.add("header-menu-button-active");
    if (button.id === "menu-catalog") {
      const categoriesPopupModal = document.querySelector(
        ".categories-popup-modal"
      );
      categoriesPopupModal.classList.remove("modal-inactive");
      categoriesPopupModal.classList.add("modal-active");
      const body = document.querySelector("body");
      body.classList.add("enableBlurWithoutHeader");
      body.addEventListener("click", headerMenuButtonsCallback);
    }
  };
});

const welcomePreviewSliderWrapper = document.querySelector(
  ".welcome-preview-slider-wrapper"
);

welcomePreviewSliderWrapper.onclick = () => {
  const slider = document.querySelector(".slider-on-button");
  slider.classList.toggle("moved-slider");
  const companies = document.querySelectorAll(".slider-company");
  companies.forEach((company) => {
    company.classList.toggle("chosen-preview");
  });
};
