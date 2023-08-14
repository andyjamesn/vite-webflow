// concept from https://tympanus.net/codrops/2022/06/08/how-to-animate-svg-shapes-on-scroll/

import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap';
import { preloader } from '../../scripts/preloader';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const paths = [...document.querySelectorAll('path.path-anim')];

const lenis = new Lenis()

lenis.on('scroll', (e) => { })

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Animate the d attribute (path initial ) to the value in data-path-to;
// start when the top of its SVG reaches the bottom of the viewport and 
// end when the bottom of its SVG reaches the top of the viewport 
paths.forEach(el => {
    const svgEl = el.closest('svg');
    const pathTo = el.dataset.pathTo;

    gsap.timeline({
        scrollTrigger: {
            trigger: svgEl,
            start: "top bottom",
            end: "bottom 80%",
            scrub: 1,
            markers: true
        }
    })
    .to(el, {
        ease: 'none',
        attr: { d: pathTo }
    });
});