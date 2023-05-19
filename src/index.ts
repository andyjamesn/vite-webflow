// import { setUpTrailer } from "./scripts/trailer";
import { setUpScroll } from "./scripts/scroll";
import { setUpDarkMode } from "./scripts/darkMode";
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
      currentActiveCard!.classList.remove("open-card");

      card.classList.toggle("open-card");
    });
  });

  setUpScroll();
  setUpDarkMode();
  // setUpTrailer();
});
