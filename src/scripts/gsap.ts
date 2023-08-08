import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

const projectCards = gsap.utils.toArray(".project-card");
const skillCards = gsap.utils.toArray(".skill-item");

const desktopAnimations = gsap.matchMedia();
desktopAnimations.add("(min-width: 800px)", () => {
  //Project Card Horizontal Scroll
  gsap.to(projectCards, {
    xPercent: -100 * (projectCards.length - 1),
    ease: "power1",
    scrollTrigger: {
      trigger: ".projects-container",
      pin: ".projects-wrapper",
      start: "center center",
      scrub: 1,
      end: "+=1000",
    },
  });

  const skillTL = gsap.timeline();

  //Skill Cards Fade In Animation
  skillTL.from(skillCards, {
    opacity: 0,
    // y: 100,
    ease: "power1",
    stagger: 0.25,
    duration: 3,
    scrollTrigger: {
      trigger: "#skills",
      start: "top center",
      end: "center 50%",
      scrub: true,
      once: true,
    },
  });
});

//Skill Title Fade In
gsap.to(".fadein", {
  opacity: 1,
  ease: "power1",
  duration: 0.25,
  delay: 0.1,
  stagger: 0.5,

  scrollTrigger: {
    trigger: "#skills",
    start: "center bottom",
  },
});

//Project Title Fade Animation
gsap.from(".fadein", {
  opacity: 0,
  ease: "power1",
  duration: 0.25,
  delay: 0.1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#projects",
    start: "top center",
  },
});

//Project Card Horizontal Scroll Fade Animation
//@ts-ignore
gsap.from(projectCards, {
  y: 130,
  ease: "power1",
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".projects-wrapper",
    start: "top center",
  },
});

//Home Title Animation
const homeTL = gsap.timeline();

new SplitType(".home-title");
homeTL
  .to(".char", {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 0.1,
  })
  .to(".home-description", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    delay: 0.1,
    stagger: 0.1,
  });

//Home BG Animation
const home = document.getElementById("home");
const homeBGS = home!.querySelectorAll(".bg");
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
