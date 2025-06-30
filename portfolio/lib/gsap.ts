import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// GSAP configuration
export const initGSAP = () => {
    if (typeof window !== 'undefined') {
        // Set default ease
        gsap.defaults({
            ease: "power2.out",
            duration: 1
        });

        // ScrollTrigger defaults
        ScrollTrigger.defaults({
            scroller: window,
            toggleActions: "play none none reverse",
            start: "top 80%",
            end: "bottom 20%"
        });
    }
};

export { gsap, ScrollTrigger };
