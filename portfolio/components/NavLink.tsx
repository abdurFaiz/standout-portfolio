"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import DecryptedText from './DecryptedText';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
    onClick?: () => void;
    exact?: boolean;
    scrollToSection?: boolean;
    enableDecrypt?: boolean; // New prop to toggle decryption effect
}

export default function NavLink({
    href,
    children,
    className = "",
    activeClassName = "font-medium text-accent-orange",
    onClick,
    exact = false,
    scrollToSection = true,
    enableDecrypt = true, // Enable by default
}: Readonly<NavLinkProps>) {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Check if the current path matches the link
        const linkPath = href.startsWith('/') ? href : `/${href}`;
        const isCurrentPath = exact
            ? pathname === linkPath
            : pathname.startsWith(linkPath) && (linkPath !== '/' || pathname === '/');

        setIsActive(isCurrentPath);
    }, [pathname, href, exact]);

    const handleClick = (e: React.MouseEvent) => {
        if (scrollToSection && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const element = document.getElementById(targetId);

            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }

            if (onClick) onClick();
        }
    };

    // Render the appropriate content based on enableDecrypt prop
    const renderContent = () => {
        // Only use DecryptedText if children is a string and enableDecrypt is true
        if (typeof children === 'string' && enableDecrypt) {
            return (
                <DecryptedText
                    text={children}
                    speed={70}
                    maxIterations={8}
                    sequential={true}
                    animateOn="hover"
                    revealDirection="center"
                    useOriginalCharsOnly={false}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                    className={isActive ? activeClassName : ""}
                    parentClassName="all-letters hover:text-accent-orange transition-colors duration-300"
                    encryptedClassName="opacity-80"
                />
            );
        }
        return children;
    };

    return (
        <Link
            prefetch={false}
            href={href}
            className={cn(
                "transition-colors duration-200 relative",
                className,
                isActive && !enableDecrypt && activeClassName
            )}
            onClick={handleClick}
        >
            {renderContent()}
        </Link>
    );
}