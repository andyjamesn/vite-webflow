import "./scripts/trailer";
import "./styles/style.css";

const navButton = document.getElementById("nav-toggle");

const toggleNav = () => {
  document.body.dataset.nav =
    document.body.dataset.nav === "true" ? "false" : "true";
};
navButton!.onclick = toggleNav;
