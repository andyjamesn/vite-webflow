import { gsap } from "gsap";

let homeTL = gsap.timeline();

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
