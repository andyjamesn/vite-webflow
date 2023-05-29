// import { setUpTrailer } from "./scripts/trailer";
import { setUpDarkMode } from "./scripts/darkMode";
import "./scripts/scroll.ts";
import "./styles/style.css";

window.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementById("nav-toggle");

  const toggleNav = () => {
    document.body.dataset.nav =
      document.body.dataset.nav === "true" ? "false" : "true";
  };
  navButton!.onclick = toggleNav;

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const currentActiveCard = document.querySelector(".open-card");
      currentActiveCard!.classList.toggle("open-card");

      card.classList.toggle("open-card");
    });
  });

  setUpHomeTitleAnimation();
  setUpDarkMode();
  // setUpTrailer();
});

const setUpHomeTitleAnimation = () => {
  const homeTitles = [
    ...(document.getElementsByClassName(
      "home-title"
    ) as HTMLCollectionOf<HTMLElement>),
  ];
  const windowWidth = window.innerWidth;

  window.addEventListener("mousemove", (e) => {
    if (e.clientX < windowWidth / 2) {
      homeTitles[0].style.backgroundColor = "#0466c8";
      homeTitles[1].style.backgroundColor = "";
    } else {
      homeTitles[1].style.backgroundColor = "#0466c8";
      homeTitles[0].style.backgroundColor = "";
    }
  });
};
