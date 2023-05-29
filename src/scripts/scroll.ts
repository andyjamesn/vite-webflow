import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const sections = gsap.utils.toArray(".page-container section");
const docSections = document.querySelectorAll(".nav-link-label");
const clientHeight = document.documentElement.clientHeight;

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

docSections.forEach((sec, idx) => {
  sec.addEventListener("click", () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: clientHeight * idx, offsetY: -50 * idx },
    });
  });
});
