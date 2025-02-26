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

const mobileMenu = document.querySelector(".mobile-menu");

let mobileMenuClicksCounter = 0;

mobileMenu.onclick = () => {
  const headerMenu = document.querySelector(".header-menu");
  headerMenu.classList.toggle("header-menu-active");
  const body = document.querySelector("body");
  body.classList.toggle("scroll-block");
  const html = document.querySelector("html");
  html.classList.toggle("scroll-block");
  mobileMenuClicksCounter = (mobileMenuClicksCounter + 1) % 2;
  if (mobileMenuClicksCounter === 1) {
    mobileMenu.innerHTML = `
    <div class="first-line"></div>
        <div class="second-line"></div>`;
  } else {
    mobileMenu.innerHTML = `
    <button><img src="./public/menu-2.png" alt="menu" /></button>`;
  }
};

const welcomePreviewSliderWrapper = document.querySelector(
  ".welcome-preview-slider-wrapper"
);

if (welcomePreviewSliderWrapper) {
  welcomePreviewSliderWrapper.onclick = () => {
    const slider = document.querySelector(".slider-on-button");
    slider.classList.toggle("moved-slider");
    const companies = document.querySelectorAll(".slider-company");
    companies.forEach((company) => {
      company.classList.toggle("chosen-preview");
    });
    const previewModels = document.querySelectorAll(
      ".description-under-preview"
    );
    previewModels.forEach((model) => {
      model.classList.toggle("description-under-preview-shown");
    });
  };
}

const headerMenuButtons = document.querySelectorAll(".header-menu-button");

headerMenuButtons.forEach((button) => {
  button.onclick = () => {
    headerMenuButtons.forEach((button) => {
      button.classList.remove("header-menu-button-active");
    });
    button.classList.add("header-menu-button-active");
  };
});

const catalogMenuButtons = document.querySelectorAll(
  ".catalog-wrapper-menu button"
);

catalogMenuButtons.forEach((button) => {
  button.onclick = () => {
    catalogMenuButtons.forEach((button) => {
      button.classList.remove("catalog-menu-button-active");
    });
    button.classList.add("catalog-menu-button-active");
    if (button.id === "all-turnikets") {
      const premGallery = document.querySelector(".premium-gallery");
      const installation = document.querySelector(".installation-gallery");
      const catalogArticles = document.querySelectorAll(".catalog-article");
      catalogArticles.forEach((article) => {
        article.classList.remove("small-catalog-article");
      });
      premGallery.classList.remove("prem-decisions-hidden");
      installation.classList.add("installation-gallery-hidden");
    } else {
      const premGallery = document.querySelector(".premium-gallery");
      const installation = document.querySelector(".installation-gallery");

      const catalogArticles = document.querySelectorAll(".catalog-article");
      catalogArticles.forEach((article) => {
        article.classList.add("small-catalog-article");
      });
      if (premGallery) {
        premGallery.classList.add("prem-decisions-hidden");
      }
      if (installation) {
        installation.classList.remove("installation-gallery-hidden");
      }
    }
  };
});

const galleryMenuButtons = document.querySelectorAll(".gallery-menu-button");

galleryMenuButtons.forEach((button, index) => {
  const allGalleryContainers = document.querySelectorAll(".gallery-container");
  button.onclick = () => {
    galleryMenuButtons.forEach((button, index) => {
      button.classList.remove("gallery-menu-button-active");
      allGalleryContainers[index].classList.remove("gallery-container-active");
    });
    button.classList.add("gallery-menu-button-active");
    allGalleryContainers[index].classList.add("gallery-container-active");
  };
});

const catalogSwiper = new Swiper(".catalogSwiper", {
  // Optional parameters
  // direction: "vertical",
  // loop: true,
  slidesPerView: 1,
  // spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    750: {
      slidesPerView: 4,
    },
  },
});

const swiper = new Swiper(".gotschlich-slider", {
  // Optional parameters
  // direction: "vertical",
  // loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const installationGallery = new Swiper(".installation-gallery", {
  // Optional parameters
  // direction: "vertical",
  // loop: true,
  slidesPerView: 1,
  breakpoints: {
    750: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const filterCheckBoxes = document.querySelectorAll(".filter-category li");

filterCheckBoxes.forEach((box) => {
  box.onclick = () => {
    box.children[0].classList.toggle("active-filter");
    box.children[0].classList.toggle("not-active-filter");
  };
});

const widthRangeInput = document.querySelector(".width-range-input");
const widthRangeInputValue = document.querySelector(".input-range-value");
let defaultWidthRangeInputValue;
if (widthRangeInputValue) {
  widthRangeInputValue.innerHTML = widthRangeInput.value;
  widthRangeInput.onchange = () => {
    widthRangeInputValue.innerHTML = widthRangeInput.value;
  };
  widthRangeInput.oninput = () => {
    widthRangeInputValue.innerHTML = widthRangeInput.value;
  };
  defaultWidthRangeInputValue = widthRangeInput.value;
}

const resetFiltersButton = document.querySelector(".reset-filters-button");
if (resetFiltersButton) {
  resetFiltersButton.onclick = () => {
    const filterCheckBoxes = document.querySelectorAll(".filter-category li");
    filterCheckBoxes.forEach((box) => {
      box.children[0].classList.remove("active-filter");
      box.children[0].classList.add("not-active-filter");
    });
    const widthRangeInputValue = document.querySelector(".input-range-value");
    widthRangeInputValue.innerHTML = defaultWidthRangeInputValue;
  };
}

const showFilters = document.querySelector(".article-filters-button");

if (showFilters) {
  showFilters.onclick = () => {
    const filters = document.querySelector(".filters-wrapper-form");
    filters.classList.toggle("hidden-filters");
  };
}

const orderCallSingleLine = document.querySelector(
  ".single-line-card-order-call"
);

if (orderCallSingleLine) {
  orderCallSingleLine.onclick = () => {
    const feedbackCallForm = document.querySelector(".feedback-call-form");
    const body = document.querySelector("body");
    feedbackCallForm.classList.remove("modal-inactive");
    feedbackCallForm.classList.add("modal-active");
    body.classList.add("enableBlur");
    body.style.overflow = "hidden";
  };
}

const sliderOnButtonCharacteristics = document.querySelector(
  ".slider-on-button-characteristics"
);
if (sliderOnButtonCharacteristics) {
  const allCharacteristicsSlider = document.querySelector(
    ".all-characteristics-slider"
  );

  sliderOnButtonCharacteristics.style.width = `${
    100 / allCharacteristicsSlider.children.length
  }%`;

  let currentLeft = 0;
  let currentChild = 0;

  allCharacteristicsSlider.onclick = () => {
    currentLeft += 100 / allCharacteristicsSlider.children.length;
    currentLeft = currentLeft % 100;
    sliderOnButtonCharacteristics.style.left = `${currentLeft}%`;
    allCharacteristicsSlider.children[currentChild].classList.remove(
      "chosen-preview"
    );

    currentChild++;
    currentChild = currentChild % allCharacteristicsSlider.children.length;

    allCharacteristicsSlider.children[currentChild].classList.add(
      "chosen-preview"
    );
  };
}

const characteristicsSelectorButtons = document.querySelectorAll(
  ".characteristics-selector button"
);

if (characteristicsSelectorButtons) {
  characteristicsSelectorButtons.forEach((button) => {
    button.onclick = () => {
      characteristicsSelectorButtons.forEach((button) => {
        button.classList.remove("chosen-characteristic");
      });
      button.classList.add("chosen-characteristic");
    };
  });
}

const sliderOnButtonConfiguration = document.querySelector(
  ".slider-on-button-configuration"
);
if (sliderOnButtonConfiguration) {
  const allConfigurationSlider = document.querySelector(
    ".configuration-slider"
  );

  sliderOnButtonConfiguration.style.width = `${
    100 / allConfigurationSlider.children.length
  }%`;

  let currentLeft = 0;
  let currentChild = 0;

  allConfigurationSlider.onclick = () => {
    currentLeft += 100 / allConfigurationSlider.children.length;
    currentLeft = currentLeft % 100;
    sliderOnButtonConfiguration.style.left = `${currentLeft}%`;
    allConfigurationSlider.children[currentChild].classList.remove(
      "chosen-preview"
    );

    currentChild++;
    currentChild = currentChild % allConfigurationSlider.children.length;

    allConfigurationSlider.children[currentChild].classList.add(
      "chosen-preview"
    );
  };
}
