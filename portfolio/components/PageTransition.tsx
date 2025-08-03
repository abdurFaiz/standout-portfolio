'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import PixelTransitionOverlay from './LoadingScreen';

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const pathname = usePathname();
    const [isTransitioning, setIsTransitioning] = useState(true); // Start as transitioning
    const [showContent, setShowContent] = useState(false); // Start with content hidden
    const [pixelOverlayOpen, setPixelOverlayOpen] = useState(true); // Start with overlay open
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        if (isInitialLoad) {
            // On initial load, start the transition immediately
            console.log('Initial load - starting pixel transition');
            setIsInitialLoad(false);
            setIsTransitioning(true);
            setShowContent(false);
            setPixelOverlayOpen(true);
        } else {
            // On route changes, hide content first, then start transition
            console.log('Route change detected - starting transition');
            setShowContent(false);
            setIsTransitioning(true);

            // Small delay to ensure content is hidden before starting pixel animation
            setTimeout(() => {
                setPixelOverlayOpen(true);
            }, 50);
        }
    }, [pathname, isInitialLoad]);

    const handlePixelFilled = () => {
        console.log('Pixel overlay filled, content still hidden');
        // Content remains hidden while pixels are filled

        // Wait a moment then start clearing the overlay
        setTimeout(() => {
            setPixelOverlayOpen(false);
        }, 200);
    };

    const handleTransitionEnd = () => {
        console.log('Pixel transition ended, showing new content');
        setShowContent(true);
        setIsTransitioning(false);
    };

    return (
        <>
            {/* Pixel Transition Overlay */}
            <PixelTransitionOverlay
                isOpen={pixelOverlayOpen}
                onTransitionEnd={handleTransitionEnd}
                onFilled={handlePixelFilled}
                pixelSize={68}
                fillColor="#0a0a0a"
                animationDuration={600}
            />

            {/* Page Content */}
            <AnimatePresence mode="wait">
                {showContent && (
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 0.1
                        }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Fallback background while transitioning */}
            {isTransitioning && !showContent && (
                <div className="fixed inset-0 bg-white z-10" />
            )}
        </>
    );
};

export default PageTransition;