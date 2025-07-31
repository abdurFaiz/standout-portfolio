import React, { useEffect, useRef } from 'react';

const ScrollZoomAnimation = () => {
    const containerRef = useRef(null);
    const wordsRef = useRef<Array<HTMLDivElement | null>>([]);

    const words = [
        "INNOVATION",
        "CREATIVITY",
        "EXCELLENCE",
        "DESIGN",
        "FUTURE"
    ];

    useEffect(() => {
        // Import GSAP and ScrollTrigger
        const script1 = document.createElement('script');
        script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
        document.head.appendChild(script2);

        script2.onload = () => {
            const { gsap } = window as any;
            const ScrollTrigger = (window as any).ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            // Set initial state for all words
            gsap.set(wordsRef.current, {
                scale: 0,
                opacity: 0,
                transformOrigin: "center center"
            });

            // Create timeline for each word
            wordsRef.current.forEach((word, index) => {
                if (!word) return;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: word,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: 1,
                        onEnter: () => {
                            // Hide previous words when new one enters
                            wordsRef.current.forEach((otherWord, otherIndex) => {
                                if (otherIndex < index && otherWord) {
                                    gsap.to(otherWord, {
                                        opacity: 0,
                                        scale: 10,
                                        duration: 0.5
                                    });
                                }
                            });
                        }
                    }
                });

                // Animation sequence for each word
                tl.to(word, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out"
                })
                    .to(word, {
                        scale: 8,
                        duration: 0.7,
                        ease: "power2.inOut"
                    }, "+=0.1");

                // Additional scroll trigger for zoom out effect
                gsap.timeline({
                    scrollTrigger: {
                        trigger: word,
                        start: "bottom 60%",
                        end: "bottom 20%",
                        scrub: 1
                    }
                }).to(word, {
                    scale: 12,
                    opacity: 0.3,
                    filter: "blur(2px)",
                    ease: "power2.inOut"
                });
            });

            // Smooth scrolling effect
            gsap.to(containerRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1
                }
            });
        };

        return () => {
            // Cleanup
            const win = window as any;
            if (win.ScrollTrigger) {
                win.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
            }
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, []);

    return (
        <div className="bg-black text-white overflow-hidden">
            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center relative">
                <div className="text-center z-10">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        SCROLL DOWN
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Experience the magic of scroll animation
                    </p>
                    <div className="animate-bounce">
                        <svg className="w-8 h-8 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>

                {/* Background gradient */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
                </div>
            </section>

            {/* Scroll Animation Container */}
            <div ref={containerRef} className="relative">
                {words.map((word, index) => (
                    <section
                        key={index}
                        className="h-screen flex items-center justify-center relative"
                        style={{ zIndex: words.length - index }}
                    >
                        <div
                            ref={el => { wordsRef.current[index] = el; }}
                            className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-center select-none pointer-events-none"
                            style={{
                                fontFamily: 'system-ui, -apple-system, sans-serif',
                                letterSpacing: '-0.02em',
                                lineHeight: '0.9',
                                textShadow: '0 0 30px rgba(255,255,255,0.1)'
                            }}
                        >
                            {word}
                        </div>

                        {/* Background elements for each section */}
                        <div className="absolute inset-0 opacity-5">
                            <div
                                className="absolute w-full h-full"
                                style={{
                                    background: `radial-gradient(circle at ${50 + index * 10}% ${30 + index * 15}%, 
                              hsl(${280 + index * 40}, 70%, 60%) 0%, 
                              transparent 70%)`
                                }}
                            ></div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Final Section */}
            <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-pink-900">
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        Welcome to the Future
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        You've experienced the power of scroll-driven animations.
                        This is just the beginning of what's possible with modern web technologies.
                    </p>
                    <button className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ScrollZoomAnimation;