import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".page-container section");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".page-container",
    pin: true,
    scrub: 1,
    end: "+=3000",
    // snap: 1 / (sections.length - 1),
    // markers: true,
  },
});
