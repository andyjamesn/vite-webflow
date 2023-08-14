// concept from https://tympanus.net/codrops/2022/06/08/how-to-animate-svg-shapes-on-scroll/

import { gsap } from 'gsap';

const items = document.querySelectorAll(".item");
gsap.defaults({duration: 1})

items.forEach(i => {
    const tl = gsap.timeline({paused: true})
        .to(i.querySelector('.text'), {color: 'pink', x: 10, scale: 1.3, transformOrigin: 'left center'})
        .to(i.querySelector('.dot'), {opacity: '1', backgroundColor:'orange', scale: 1.2}, '0');
    
    i.addEventListener('mouseenter', () => tl.play());
    i.addEventListener('mouseleave', () => tl.reverse());
})