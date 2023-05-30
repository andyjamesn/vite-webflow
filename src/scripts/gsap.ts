import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const home = document.getElementById("home");
const homeBGS = home!.querySelectorAll(".bg");

//Projects Scroll Animations
const projectCards = document.querySelectorAll(".project-card");
const cardContents = document.querySelectorAll(".card-content");

const projectCardTL = gsap.timeline({
  scrollTrigger: ".project-title",
  start: "bottom center",
});

projectCardTL.to(projectCards, {
  x: 0,
  duration: 1,
  stagger: 0.1,
});

projectCardTL.to(cardContents, {
  opacity: 1,
  duration: 0.2,
  stagger: 0.15,
});

//Home Title Animation
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
    idx == 1 ? (dirChange *= -1) : "";
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
