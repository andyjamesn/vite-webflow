import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const homeTL = gsap.timeline();

//Project Card Horizontal Scroll
const projectCards = gsap.utils.toArray(".project-card");
const horizontalScrollTween = gsap.to(projectCards, {
  xPercent: -100 * (projectCards.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".projects-wrapper",
    pin: "#projects",
    start: "center center",
    scrub: 1,
    end: "+=3000",
  },
});

//Project Card Horizontal Scroll Fade Animation
// projectCards.forEach((card) => {});

//Home Title Animation
const home = document.getElementById("home");
const homeBGS = home!.querySelectorAll(".bg");
homeTL
  .to(".home-title", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    delay: 0.1,
    stagger: 0.1,
  })
  .to(".home-description", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    delay: 0.1,
    stagger: 0.1,
  });

//Home BG Animation
home!.addEventListener("mousemove", (e) => {
  const depth = 20;
  let dirChange = 1;
  homeBGS.forEach((bg, idx) => {
    if (idx == 1) {
      dirChange *= -1;
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
