"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { encode } from "qss";
import React, { useRef, useLayoutEffect, useState } from "react";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
    useScroll,
    useVelocity,
    useTransform,
    useAnimationFrame,
} from "motion/react";
import { cn } from "../lib/utils";
import "./styles/MovingLinkPreview.css";

interface VelocityMapping {
    input: [number, number];
    output: [number, number];
}

type MovingLinkPreviewProps = {
    children: React.ReactNode;
    url: string;
    className?: string;
    width?: number;
    height?: number;
    quality?: number;
    layout?: string;
    // Moving text props
    texts?: string[];
    baseVelocity?: number;
    scrollContainerRef?: React.RefObject<HTMLElement>;
    damping?: number;
    stiffness?: number;
    numCopies?: number;
    velocityMapping?: VelocityMapping;
    movingTextClassName?: string;
    enableMovingText?: boolean;
} & (
        | { isStatic: true; imageSrc: string }
        | { isStatic?: false; imageSrc?: never }
    );

function useElementWidth<T extends HTMLElement>(ref: React.RefObject<T | null>): number {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        function updateWidth() {
            if (ref.current) {
                setWidth(ref.current.offsetWidth);
            }
        }
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [ref]);

    return width;
}

const MovingText: React.FC<{
    children: React.ReactNode;
    baseVelocity: number;
    scrollContainerRef?: React.RefObject<HTMLElement>;
    className?: string;
    damping?: number;
    stiffness?: number;
    numCopies?: number;
    velocityMapping?: VelocityMapping;
}> = ({
    children,
    baseVelocity,
    scrollContainerRef,
    className = "",
    damping = 50,
    stiffness = 400,
    numCopies = 6,
    velocityMapping = { input: [0, 1000], output: [0, 5] },
}) => {
        const baseX = useMotionValue(0);
        const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
        const { scrollY } = useScroll(scrollOptions);
        const scrollVelocity = useVelocity(scrollY);
        const smoothVelocity = useSpring(scrollVelocity, {
            damping,
            stiffness,
        });
        const velocityFactor = useTransform(
            smoothVelocity,
            velocityMapping.input,
            velocityMapping.output,
            { clamp: false }
        );

        const copyRef = useRef<HTMLSpanElement>(null);
        const copyWidth = useElementWidth(copyRef);

        function wrap(min: number, max: number, v: number): number {
            const range = max - min;
            const mod = (((v - min) % range) + range) % range;
            return mod + min;
        }

        const x = useTransform(baseX, (v) => {
            if (copyWidth === 0) return "0px";
            return `${wrap(-copyWidth, 0, v)}px`;
        });

        const directionFactor = useRef<number>(1);
        useAnimationFrame((t, delta) => {
            let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

            if (velocityFactor.get() < 0) {
                directionFactor.current = -1;
            } else if (velocityFactor.get() > 0) {
                directionFactor.current = 1;
            }

            moveBy += directionFactor.current * moveBy * velocityFactor.get();
            baseX.set(baseX.get() + moveBy);
        });

        const spans = [];
        for (let i = 0; i < numCopies; i++) {
            spans.push(
                <span className={className} key={i} ref={i === 0 ? copyRef : null}>
                    {children}&nbsp;
                </span>
            );
        }

        return (
            <div className="relative overflow-hidden whitespace-nowrap">
                <motion.div
                    className="flex"
                    style={{ x }}
                >
                    {spans}
                </motion.div>
            </div>
        );
    };

export const MovingLinkPreview = ({
    children,
    url,
    className,
    width = 200,
    height = 125,
    quality = 50,
    layout = "fixed",
    isStatic = false,
    imageSrc = "",
    texts = [],
    baseVelocity = 100,
    scrollContainerRef,
    damping = 50,
    stiffness = 400,
    numCopies = 6,
    velocityMapping = { input: [0, 1000], output: [0, 5] },
    movingTextClassName = "",
    enableMovingText = true,
}: MovingLinkPreviewProps) => {
    let src;
    if (!isStatic) {
        const params = encode({
            url,
            screenshot: true,
            meta: false,
            embed: "screenshot.url",
            colorScheme: "dark",
            "viewport.isMobile": true,
            "viewport.deviceScaleFactor": 1,
            "viewport.width": width * 3,
            "viewport.height": height * 3,
        });
        src = `https://api.microlink.io/?${params}`;
    } else {
        src = imageSrc;
    } const [isOpen, setIsOpen] = React.useState(false);
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const springConfig = { stiffness: 100, damping: 15 };
    const x = useMotionValue(0);
    const translateX = useSpring(x, springConfig);

    const handleMouseMove = (event: any) => {
        const targetRect = event.target.getBoundingClientRect();
        const eventOffsetX = event.clientX - targetRect.left;
        const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
        x.set(offsetFromCenter);
    };

    return (
        <>
            {isMounted ? (<div className="hidden">
                <img
                    src={src}
                    width={width}
                    height={height}
                    alt="Preview content"
                />
            </div>
            ) : null}            <HoverCardPrimitive.Root
                openDelay={50}
                closeDelay={100}
                onOpenChange={(open) => {
                    setIsOpen(open);
                }}
            >
                <HoverCardPrimitive.Trigger
                    onMouseMove={handleMouseMove}
                    className={cn("text-black dark:text-white block", className)}
                    href={url}
                >
                    {enableMovingText && texts.length > 0 ? (<div className="flex flex-col">
                        {texts.map((text: string, index: number) => (
                            <MovingText
                                key={`moving-text-${text}-${index}`}
                                className={movingTextClassName}
                                baseVelocity={index % 2 !== 0 ? -baseVelocity : baseVelocity}
                                scrollContainerRef={scrollContainerRef}
                                damping={damping}
                                stiffness={stiffness}
                                numCopies={numCopies}
                                velocityMapping={velocityMapping}
                            >
                                {text}
                            </MovingText>
                        ))}
                    </div>
                    ) : (
                        children
                    )}
                </HoverCardPrimitive.Trigger>

                <HoverCardPrimitive.Content
                    className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
                    side="top"
                    align="center"
                    sideOffset={10}
                >
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                className="shadow-xl rounded-xl"
                                style={{
                                    x: translateX,
                                }}
                            >
                                <a
                                    href={url}
                                    className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                                    style={{ fontSize: 0 }}
                                >                                    <img
                                        src={isStatic ? imageSrc : src}
                                        width={width}
                                        height={height}
                                        className="rounded-lg"
                                        alt="Link preview"
                                    />
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </HoverCardPrimitive.Content>
            </HoverCardPrimitive.Root>
        </>
    );
};

export default MovingLinkPreview;
