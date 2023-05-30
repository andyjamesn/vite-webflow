import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const homeBGS = document.querySelectorAll(".bg");
const home = document.getElementById("home");

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
      delay: 0.2,
      ease: "power3",
      duration: 6,
    });
  });
});
