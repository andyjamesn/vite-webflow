import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { preloader } from "./scripts/preloader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// preload the images
preloader();

const paths = [...document.querySelectorAll("path.path-anim")];

// Smooth scrolling initialization (using Lenis https://github.com/studio-freight/lenis)
const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
});
const scrollFn = () => {
  lenis.raf();
  requestAnimationFrame(scrollFn);
};
requestAnimationFrame(scrollFn);

// Animate the d attribute (path initial ) to the value in data-path-to;
// start when the top of its SVG reaches the bottom of the viewport and
// end when the bottom of its SVG reaches the top of the viewport
paths.forEach((el) => {
  const svgEl = el.closest("svg");
  const pathTo = el.dataset.pathTo;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: svgEl,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
    .to(el, {
      ease: "none",
      attr: { d: pathTo },
    });
});

// Gsap timeline builder

// const speed = 1;
// gsap.defaults({ duration: speed });

// const animations = [
//   {
//     id: 1,
//     selector: ".heading1",
//     animation: {
//       x: 300,
//       opacity: 1,
//       scale: 1,
//       ease: "ease-in-out",
//     },
//     position: 1,
//   },
// ];

// const timeline = {
//   type: "to",
//   animations,
// };

// const tl = gsap.timeline();
// timeline.animations.forEach((animation) => {
//   tl.to(animation.selector, animation.animation);
// });

// gsap.timeline()
//   .to(".main", {x:300, opacity: 1, backgroundColor: 'black', color: 'red', scale: 4, stagger: speed, ease: "ease-in-out"})
//   .to(".logo1", {x:300, opacity: 1, backgroundColor: 'black', color: 'red', scale: 4, stagger: speed, ease: "ease-in-out"});
