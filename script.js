const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

const galleryItems = [
  {
    image: "assets/about-coffee.png",
    caption: "Same time every Friday"
  },
  {
    image: "assets/run-card.png",
    caption: "Hard to have a bad morning with this crew"
  },
  {
    image: "assets/hero.jpg",
    caption: "Weekly miles by the pier"
  },
  {
    image: "assets/about-run.jpg",
    caption: "Cold miles, warm company"
  },
  {
    image: "assets/run-card.png",
    caption: "Consistency gets easier together"
  },
  {
    image: "assets/about-coffee.png",
    caption: "Trail season starts here"
  },
  {
    image: "assets/hero.jpg",
    caption: "No regrets after the alarm"
  },
  {
    image: "assets/about-run.jpg",
    caption: "All smiles after coffee"
  },
  {
    image: "assets/about-coffee.png",
    caption: "The best pace is showing up"
  },
  {
    image: "assets/run-card.png",
    caption: "Weekend long runs"
  },
  {
    image: "assets/hero.jpg",
    caption: "Run, sip, repeat"
  },
  {
    image: "assets/about-run.jpg",
    caption: "Better together"
  }
];

const grid = document.querySelector("#insta-grid");
const loadMore = document.querySelector("#load-more");
let visibleCount = 8;

function renderGallery() {
  grid.innerHTML = "";

  galleryItems.slice(0, visibleCount).forEach((item) => {
    const link = document.createElement("a");
    link.className = "insta-tile";
    link.href = "https://www.instagram.com/sbcoffeeclub/";
    link.target = "_blank";
    link.rel = "noreferrer";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.caption;
    image.loading = "lazy";

    const caption = document.createElement("span");
    caption.textContent = item.caption;

    link.append(image, caption);
    grid.append(link);
  });

  loadMore.hidden = visibleCount >= galleryItems.length;
}

if (grid && loadMore) {
  loadMore.addEventListener("click", () => {
    visibleCount = Math.min(visibleCount + 4, galleryItems.length);
    renderGallery();
  });

  renderGallery();
}
