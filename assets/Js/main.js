// For the pink line in the sections
// Select all sections and their progress bars[array of object]
const sections = [
  { section: document.querySelector(".hero"), progress: document.querySelector(".hero .progress") },
  { section: document.querySelector(".baby"), progress: document.querySelector(".baby .progress") },
  { section: document.querySelector(".handsOnLearning"), progress: document.querySelector(".handsOnLearning .progress") },
  { section: document.querySelector(".flamingoSuccess"), progress: document.querySelector(".flamingoSuccess .progress") },
  { section: document.querySelector(".parties_two"), progress: document.querySelector(".parties_two .progress") },
  { section: document.querySelector(".parents"), progress: document.querySelector(".parents .progress") },
  { section: document.querySelector(".questions"), progress: document.querySelector(".questions .progress") }
];

// Handle scroll event
window.onscroll = function () {
  sections.forEach(({ section, progress }) => {
    if (window.scrollY >= section.offsetTop && window.scrollY < section.offsetTop + section.offsetHeight) {
      // If the user is inside the section, increase the progress bar width
      progress.style.width = `${(window.scrollY - section.offsetTop)}px`;
    } else {
      // If the user leaves the section, reset the progress bar width
      progress.style.width = "0";
    }
  });
};

//  Start Hands on Project-based Learning (swiper)
function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on("init", () => {
    if (!swiper.params.debugger) return;
    console.log("init");
  });
  on("click", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("click");
  });
  on("tap", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("tap");
  });
  on("doubleTap", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("doubleTap");
  });
  on("sliderMove", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("sliderMove");
  });
  on("slideChange", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChange", swiper.previousIndex, "->", swiper.activeIndex);
  });
  on("slideChangeTransitionStart", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChangeTransitionStart");
  });
  on("slideChangeTransitionEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChangeTransitionEnd");
  });
  on("transitionStart", () => {
    if (!swiper.params.debugger) return;
    console.log("transitionStart");
  });
  on("transitionEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("transitionEnd");
  });
  on("fromEdge", () => {
    if (!swiper.params.debugger) return;
    console.log("fromEdge");
  });
  on("reachBeginning", () => {
    if (!swiper.params.debugger) return;
    console.log("reachBeginning");
  });
  on("reachEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("reachEnd");
  });
}

// Init Swiper
var swiper = new Swiper(".swiper", {
  modules: [myPlugin],
  slidesPerView: 2.6,
  spaceBetween: 160,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Enable debugger
  debugger: true,

  breakpoints: {
    300: {
      slidesPerView: 1.5,
      spaceBetween: 200, // المسافة بين الشرائح عند هذا الحجم
    },
    // عندما يكون عرض الشاشة >= 640px
    576: {
      slidesPerView: 1.8,
      spaceBetween: 150, // المسافة بين الشرائح عند هذا الحجم
    },
    // عندما يكون عرض الشاشة >= 768px
    768: {
      slidesPerView: 2.2,
      spaceBetween: 70, // المسافة بين الشرائح عند هذا الحجم
    },
    // عندما يكون عرض الشاشة >= 1024px
    1024: {
      slidesPerView: 1.9,
      spaceBetween: 5, // المسافة بين الشرائح عند هذا الحجم
    },
    // عندما يكون عرض الشاشة >= 1280px
    1280: {
      slidesPerView: 2.6,
      spaceBetween: 120, // المسافة بين الشرائح عند هذا الحجم
    },
  },
 
});



// Initialize Swiper [For Parents  Section ]
var swiper = new Swiper(".parents .mySwiper", {
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  history: {
    key: "slide",
  },
});