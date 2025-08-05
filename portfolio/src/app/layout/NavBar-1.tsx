"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react' // Import X icon for close button
import { cn } from "../../../lib/utils"
import NavLink from "../../../components/NavLink";

// Tautan untuk keadaan awal (top header)
const initialNavLinks = [
    { href: "/", label: "HOME", isHighlighted: true },
    { href: "/about", label: "ABOUT ME" },
    { href: "/work", label: "WORK" },
    { href: "#service", label: "SERVICE" },
    { href: "/fun", label: "FUN" },
    { href: "/contact", label: "CONTACT" },
]

// Tautan untuk keadaan floating full navbar (sama dengan initial)
const floatingNavLinks = [
    { href: "/", label: "HOME", isHighlighted: false },
    { href: "/about", label: "ABOUT ME" },
    { href: "/work", label: "WORK" },
    { href: "#service", label: "SERVICE" },
    { href: "/fun", label: "FUN" },
    { href: "/contact", label: "CONTACT" },
]

export default function Navbar() {
    const [isAtVeryTop, setIsAtVeryTop] = React.useState(true) // true if scrollY is 0
    const [lastScrollY, setLastScrollY] = React.useState(0)
    const [showFloatingFullNavbar, setShowFloatingFullNavbar] = React.useState(false) // true if scrolling up and not at very top
    const [isSheetOpen, setIsSheetOpen] = React.useState(false) // State for custom sheet

    const handleScroll = React.useCallback(() => {
        const currentScrollY = window.scrollY

        if (currentScrollY === 0) {
            setIsAtVeryTop(true)
            setShowFloatingFullNavbar(false) // Saat di paling atas, tampilkan header awal, bukan floating full
        } else {
            setIsAtVeryTop(false)
            if (currentScrollY < lastScrollY) {
                // Scrolling up
                setShowFloatingFullNavbar(true)
            } else {
                // Scrolling down
                setShowFloatingFullNavbar(false)
            }
        }
        setLastScrollY(currentScrollY)
    }, [lastScrollY])

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])

    // Close sheet when scrolling
    React.useEffect(() => {
        if (isSheetOpen) {
            const handleScrollCloseSheet = () => {
                setIsSheetOpen(false)
            }
            window.addEventListener("scroll", handleScrollCloseSheet)
            return () => {
                window.removeEventListener("scroll", handleScrollCloseSheet)
            }
        }
    }, [isSheetOpen])

    return (
        <>
            <nav
                className={cn(
                    "fixed inset-x-0 z-50 flex items-center justify-between transition-all duration-300 ease-in-out ",
                    // Gaya navbar berdasarkan posisi scroll
                    isAtVeryTop
                        ? "top-0 left-0 right-0 py-4 px-8" // Keadaan awal: lebar penuh, solid putih
                        : showFloatingFullNavbar // Jika tidak di paling atas, cek apakah floating full navbar harus ditampilkan
                            ? "top-0 mx-auto max-w-screen-xl mt-4 rounded-xl bg-background-custom/80 backdrop-blur-sm shadow-sm p-4" // Keadaan scroll ke atas: floating, semi-transparan
                            : "top-0 mx-auto max-w-screen-xl mt-4 rounded-xl bg-transparent shadow-none py-3 px-1", // Keadaan scroll ke bawah: floating, transparan
                )}
            >
                {/* Konten Navbar Awal (Hanya Desktop, saat di bagian paling atas) */}
                <div
                    className={cn(
                        "hidden md:flex flex-1 items-center justify-between",
                        !isAtVeryTop && "md:hidden", // Sembunyikan saat discroll ke bawah di desktop
                    )}
                >
                    <div className="flex flex-row items-center justify-between w-full px-2">
                        {initialNavLinks.map((link) => (
                            <NavLink
                                key={link.label}
                                href={link.href}
                                className="font-Swiss721BT text-neutral-cusring-neutral-black-custom-custom uppercase text-lg"
                                activeClassName={cn(
                                    "font-semibold text-accent-orange",
                                    link.isHighlighted && "font-semibold text-accent-orange"
                                )}
                                scrollToSection={link.href.startsWith('/')}
                                enableDecrypt={true}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Konten Navbar Floating Lengkap (Hanya Desktop, saat discroll ke atas tapi tidak di paling atas) */}
                <div
                    className={cn(
                        "hidden md:flex flex-1 items-center justify-between",
                        (isAtVeryTop || !showFloatingFullNavbar) && "md:hidden", // Sembunyikan jika di paling atas atau jika scrolling down
                    )}
                >
                    <div className="flex flex-row items-center justify-between w-full px-2">
                        {floatingNavLinks.map((link) => (
                            <NavLink
                                key={link.label}
                                href={link.href}
                                className="font-Swiss721BT text-neutral-cusring-neutral-black-custom-custom uppercase text-lg"
                                activeClassName={cn(
                                    "font-semibold text-accent-orange",
                                    link.isHighlighted && "font-semibold text-accent-orange"
                                )}
                                scrollToSection={link.href.startsWith('#')}
                                enableDecrypt={true}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Konten Navbar Floating Ringkas (Selalu di Mobile & Desktop saat discroll ke bawah) */}
                <div
                    className={cn(
                        "flex flex-1 items-center justify-end",
                        isAtVeryTop && "md:hidden", // Sembunyikan di desktop jika di paling atas
                        !isAtVeryTop && showFloatingFullNavbar && "md:hidden", // Sembunyikan di desktop jika floating full navbar aktif
                    )}
                >
                    {/* Logo untuk mobile - hanya terlihat di mobile saat floating compact */}
                    <Link href="/" className="text-2xl font-bold md:hidden">
                        <Image src={"/icons/icon-accent.svg"} alt="Logo" width={40} height={40} />
                    </Link>

                    <div className="flex items-center space-x-2 ml-auto">
                        {/* Custom Button for Try for free */}
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#010101] text-background-custom font-Swiss721BT hover:bg-medium-gray-custom px-6 py-2 text-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-black-custom disabled:pointer-events-none disabled:opacity-50 uppercase"
                            onClick={e => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Contact
                        </a>
                        {/* Custom Sheet Trigger (Hamburger Menu Button) */}
                        <button
                            onClick={() => setIsSheetOpen(true)}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#010101] text-background-custom hover:bg-medium-gray-custom w-10 h-10 text-xl font-medium font-Swiss721BT transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-black-custom disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isSheetOpen}
                            aria-haspopup="menu"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Custom Sheet Overlay */}
            {isSheetOpen && (
                <div
                    className="fixed inset-0 bg-background-custom/50 z-40 transition-opacity duration-300"
                    onClick={() => setIsSheetOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Custom Sheet Content */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-[800px] sm:w-full bg-background-custom/90 backdrop-blur-sm shadow-lg z-50 transition-transform duration-300 ease-in-out",
                    isSheetOpen ? "translate-x-0" : "translate-x-full",
                )}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsSheetOpen(false)}
                        className="text-medium-gray-custom hover:text-accent-orange transition-colors duration-200"
                        aria-label="Close menu"
                    >
                        <X className="size-6 md:size-8 lg:size-16" />
                    </button>
                </div>
                <nav className="flex flex-col gap-4 px-4 pb-4">
                    {/* Tautan untuk menu mobile (sama dengan initial dan floating) */}
                    {initialNavLinks.map((link) => (
                        <NavLink
                            key={link.label}
                            href={link.href}
                            className="text-lg md:text-4xl lg:text-8xl font-medium uppercase"
                            activeClassName="text-accent-orange font-semibold"
                            onClick={() => setIsSheetOpen(false)} // Close sheet on link click
                            scrollToSection={link.href.startsWith('#')}
                            enableDecrypt={true}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </>
    )
}