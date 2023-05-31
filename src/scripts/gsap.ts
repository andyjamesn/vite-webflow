import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//Projects Animation
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (document.querySelector(".active")) {
      const currentActiveCard = document.querySelector(".active");
      currentActiveCard!.classList.toggle("active");
    }
    card.classList.toggle("active");
  });
});

//Home Title Animation
const home = document.getElementById("home");
const homeBGS = home!.querySelectorAll(".bg");
gsap.to(".home-title", {
  y: 0,
  opacity: 1,
  duration: 1,
  delay: 0.2,
  stagger: 0.5,
});

//Home BG Animation
home!.addEventListener("mousemove", (e) => {
  const depth = 20;
  let dirChange = 1;
  homeBGS.forEach((bg, idx) => {
    if (idx == 1) {
      dirChange *= 1;
    }

    const moveX = ((e.pageX - window.innerWidth / 2) / depth) * dirChange;
    const moveY = (e.pageY - window.innerHeight / 2) / depth;
    idx++;

    gsap.to(bg, {
      x: moveX * idx,
      y: moveY * idx,
      delay: 0.1,
      ease: "power3",
      duration: 6,
    });
  });
});
