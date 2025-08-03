"use client";
import { TransitionRouter } from "next-transition-router";
import { gsap } from "gsap";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <TransitionRouter
            leave={(_next, from, to) => {
                return new Promise((next) => {
                    const overlay = document.getElementById("page-overlay");
                    gsap.to(overlay, { opacity: 1, duration: 0.4, onComplete: next });
                });
            }}
            enter={(_next, from, to) => {
                return new Promise((next) => {
                    const overlay = document.getElementById("page-overlay");
                    gsap.to(overlay, { opacity: 0, duration: 0.4, onComplete: next });
                });
            }}
            auto={true}
        >
            {children}
        </TransitionRouter>
    );
}
