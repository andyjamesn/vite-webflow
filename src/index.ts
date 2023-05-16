import "./scripts/trailer";
import "./styles/style.css";

const navButton = document.getElementById("nav-toggle");
// const scrollContainer = document.querySelector(".container");

const toggleNav = () => {
  document.body.dataset.nav =
    document.body.dataset.nav === "true" ? "false" : "true";
};

navButton!.onclick = toggleNav;

// scrollContainer!.addEventListener("wheel", (e: any) => {
//   e.preventDefault();
//   let scrollBy = 0;
//   if (e.deltaY > 0) {
//     scrollBy = e.deltaY + 300;
//   } else {
//     scrollBy = e.deltaY - 300;
//   }
//   scrollContainer!.scrollLeft += scrollBy;
// });
