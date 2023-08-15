import { gsap } from 'gsap';
var tl = gsap.timeline()

tl.from(".step1", { opacity: 0 })
	.from(".step2", { x: 80, opacity: 0 })

	.from(".step3", { x: -80, opacity: 0 })

	.from("button", { y: 50, opacity: 0 })

	.from(".mysvg > g", {
		transformOrigin: "50% 50%",
		scale: 0,
		opacity: 0,
		stagger: 0.1,

	})