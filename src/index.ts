import "./scripts/trailer";
import "./styles/style.css";

window.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementById("nav-toggle");
  const scrollContainer = document.querySelector("main");
  const scrollProgress = document.getElementById("scroll-progress");

  console.log(document.documentElement.scrollWidth);
  console.log(document.documentElement.clientWidth);

  const toggleNav = () => {
    document.body.dataset.nav =
      document.body.dataset.nav === "true" ? "false" : "true";
  };
  navButton!.onclick = toggleNav;

  scrollContainer!.addEventListener("wheel", (e: any) => {
    e.preventDefault();
    //Scroll Page
    let scrollBy = 0;
    if (e.deltaY > 0) {
      scrollBy = e.deltaY + 1000;
    } else {
      scrollBy = e.deltaY - 1000;
    }

    scrollContainer!.scrollLeft += scrollBy;
  });

  //Scroll Percentage
  scrollContainer!.addEventListener("scroll", () => {
    const docWidth =
      document.documentElement.scrollWidth +
      document.documentElement.clientWidth;

    const scrollLeft = scrollContainer!.scrollLeft;
    scrollProgress!.style.width = `${(scrollLeft / docWidth) * 100}%`;
  });
});
