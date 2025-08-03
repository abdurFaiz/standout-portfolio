'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const RouteChangeHandler = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [isReady, setIsReady] = useState(false);
    const [isInitialMount, setIsInitialMount] = useState(true);

    useEffect(() => {
        if (isInitialMount) {
            // On initial mount, don't show content immediately
            setIsInitialMount(false);
            setIsReady(false);

            // Minimal delay to ensure pixel transition can start
            const timer = setTimeout(() => {
                setIsReady(true);
            }, 50);

            return () => clearTimeout(timer);
        } else {
            // On route changes, prepare for transition
            setIsReady(false);

            const timer = setTimeout(() => {
                setIsReady(true);
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [pathname, isInitialMount]);

    // Show blank screen while preparing
    if (!isReady) {
        return (
            <div className="fixed inset-0 bg-white z-0">
                {/* Empty state - pixel transition will cover this */}
            </div>
        );
    }

    return <>{children}</>;
};

export default RouteChangeHandler;