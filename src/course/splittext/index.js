// concept from https://tympanus.net/codrops/2022/06/08/how-to-animate-svg-shapes-on-scroll/

import { gsap } from 'gsap';
import SplitType from 'split-type'

let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span"
  });

const tl = gsap.timeline();

// const words = 

console.log(typeSplit);


const init = () => {
    gsap.set('.wrapper', {autoAlpha: 1})
    tl.from(typeSplit.words, { opacity: 0, yPercent: 100, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5 } });
}

document.addEventListener('DOMContentLoaded', () => {
    init();
  });

