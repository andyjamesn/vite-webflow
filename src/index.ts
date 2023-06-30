// import { setUpTrailer } from "./scripts/trailer";
import { setUpDarkMode } from "./scripts/darkMode";
import "./scripts/gsap.ts";

//Styles
// import "./styles/style.css";
// import "./styles/queries.css";
// import "./styles/utils.css";
// import "./styles/keyframes.css";

window.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementById("nav-toggle");
  const toggleNav = () => {
    document.body.dataset.nav =
      document.body.dataset.nav === "true" ? "false" : "true";
  };
  navButton!.onclick = toggleNav;

  setUpDarkMode();
});
