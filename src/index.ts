import { setUpTrailer } from "./scripts/trailer";
import { setUpScroll } from "./scripts/scroll";
import "./styles/style.css";

window.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementById("nav-toggle");

  const toggleNav = () => {
    document.body.dataset.nav =
      document.body.dataset.nav === "true" ? "false" : "true";
  };
  navButton!.onclick = toggleNav;

  setUpScroll();
  setUpTrailer();
});
