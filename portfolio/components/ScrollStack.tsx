'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap, initGSAP } from '../lib/gsap';
import Image from 'next/image';
import './styles/ScrollStack.css';

interface ScrollStackProps {
    readonly title: string;
    readonly about: string;
    readonly description: string | React.ReactNode;
    readonly client: string;
    readonly field: string;
    readonly role: string;
    readonly images: ReadonlyArray<{
        readonly src: string;
        readonly alt: string;
        readonly caption: string;
    }>;
}

export default function ScrollStack({
    title,
    about,
    description,
    client,
    field,
    role,
    images
}: ScrollStackProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const stickyContentRef = useRef<HTMLDivElement>(null);
    const scrollingImagesRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        initGSAP();

        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Animate sticky content entry
            gsap.fromTo(stickyContentRef.current,
                {
                    opacity: 0,
                    x: -50,
                    y: 20
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top center+=100",
                        toggleActions: "play none none reverse",
                    }
                }
            );

            // Animate each image with parallax and entry effects
            imagesRef.current.forEach((image, index) => {
                if (image) {
                    // Entry animation
                    gsap.fromTo(image,
                        {
                            y: 100,
                            opacity: 0,
                            scale: 0.95,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 1.2,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: image,
                                start: "top bottom-=50",
                                end: "center center",
                                toggleActions: "play none none reverse",
                            }
                        }
                    );

                    // Parallax effect while scrolling
                    gsap.to(image, {
                        y: -100,
                        ease: "none",
                        scrollTrigger: {
                            trigger: image,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1.5,
                            invalidateOnRefresh: true
                        }
                    });
                }
            });

        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, []);

    const addToImagesRef = (el: HTMLDivElement | null, index: number) => {
        if (el && !imagesRef.current[index]) {
            imagesRef.current[index] = el;
        }
    };

    return (
        <div ref={containerRef} className="relative">
            <div className="flex lg:flex-row flex-col gap-8 p-10 bg-light-gray-custom rounded-lg w-full">
                {/* Sticky Content */}
                <div className="lg:w-1/2 w-full">
                    <div
                        ref={stickyContentRef}
                        className="sticky top-20 flex flex-col gap-6 max-w-lg"
                    >
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl font-TiemposHeadlineLight text-neutral-black-700 font-lightF"
                        >
                            {title}
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col gap-3"
                        >
                            <h4 className="font-Swiss721BT text-neutral-black-custom text-xl uppercase">{about}</h4>
                            <p className="font-Swiss721BT text-lg text-neutral-black-700 leading-relaxed">
                                {description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="flex flex-col gap-2">
                                <h4 className="font-Swiss721BT text-accent-orange text-lg uppercase">client</h4>
                                <h4 className="font-Swiss721BT text-neutral-black-700 text-xl capitalize">{client}</h4>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-Swiss721BT text-accent-orange text-lg uppercase">field</h4>
                                <h4 className="font-Swiss721BT text-neutral-black-700 text-xl">{field}</h4>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-Swiss721BT text-accent-orange text-lg uppercase">role</h4>
                                <h4 className="font-Swiss721BT text-neutral-black-700 text-xl capitalize">{role}</h4>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scrolling Images */}
                <div ref={scrollingImagesRef} className="lg:w-1/2 w-full">
                    <div className="flex flex-col gap-16 min-h-[200vh]">                        {images.map((image, index) => (
                        <div
                            key={`image-${image.src}-${index}`}
                            ref={(el) => addToImagesRef(el, index)}
                            className="flex flex-col gap-4 transform-gpu"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, margin: "-10%" }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                    delay: index * 0.1
                                }}
                                className="relative overflow-hidden  group"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={920}
                                    height={900}
                                    className="object-cover w-full h-auto "
                                    priority={index === 0}
                                />

                                {/* Overlay effects */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/0 to-neutral-black-custom/10 opacity-0 " />

                                {/* Shimmer effect */}
                                <div className="absolute inset-0 -translate-x-full  bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.2 }} className="uppercase text-sm text-neutral-black-700 font-Swiss721BT tracking-wider pl-2"
                            >
                                {image.caption}
                            </motion.p>
                        </div>
                    ))}

                        {/* Extra space for better scrolling */}
                        <div className="h-screen" />
                    </div>
                </div>
            </div>
        </div>
    );
}
