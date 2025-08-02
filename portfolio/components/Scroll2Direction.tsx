"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import TextMarque from "./TextMarque"
import ShinyText from "./ShinyText"
import Link from "next/link"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export default function MixedScrollSections() {
    const containerRefs = useRef<(HTMLDivElement | null)[]>([])
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (typeof window === "undefined") return

        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        // Set up horizontal scrolling animations only for desktop
        if (!isMobile) {
            const horizontalSections = containerRefs.current.filter(Boolean)

            horizontalSections.forEach((container) => {
                if (!container) return

                const sections = container.querySelectorAll(".panel")

                gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        pin: true,
                        scrub: 1,
                        end: "+=3500",
                    },
                })
            })
        }

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
            window.removeEventListener('resize', checkMobile)
        }
    }, [isMobile])

    const setContainerRef = (index: number) => (el: HTMLDivElement | null) => {
        containerRefs.current[index] = el
    }

    // Mobile vertical layout
    if (isMobile) {
        return (
            <div className="overflow-hidden">
                {/* Description Panel - Always first */}
                <div className="bg-[#010101] min-h-screen flex justify-center text-accent-foreground-custom relative z-10">
                    <div className="flex flex-col justify-between p-4 md:p-6 w-full">
                        <div className="flex flex-col gap-4 md:gap-6">
                            <h2 className="text-[56px] xl:text-9xl font-medium font-Swiss721BTBlack tracking-wide  relative z-20">
                                Crafting Outstanding Digital Experiences
                            </h2>
                            <div className="relative items-center py-1 md:py-10 rounded-2xl md:rounded-3xl bg-gradient-to-r overflow-hidden from-background-custom to-light-gray-custom z-10">
                                <div className="h-16 overflow-hidden">
                                    <TextMarque
                                        delay={300}
                                        baseVelocity={-3}
                                        classname='font-medium font-Swiss721BTBlack text-neutral-black-custom tracking-wider text-4xl md:text-6xl'
                                    >
                                        Frontend Development ✦ UI/UX Design ✦ Web Applications ✦ Mobile Apps ✦ Landing Pages
                                    </TextMarque>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-end relative z-20">
                            <div className="flex flex-row gap-3 items-center">

                                <Image src="/icons/icon-arrow.svg" width={60} height={60} alt="arrow down" className="rounded-full bg-background-custom w-fit" />
                                <span className="text-4xl md:text-5xl font-Swiss721BT text-background-custom font-medium">Keep Scroll</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 1 - Sentry Integration */}
                <section className="bg-[#010101] p-4 min-h-screen flex flex-col relative z-10 gap-6">
                    {/* Top Image */}
                    <div className="w-full h-fit md:h-64 flex-shrink-0">
                        <Image
                            src="/images/mock-p1.png"
                            alt="Sentry Integration Project"
                            width={800}
                            height={800}
                            className="hidden md:block w-24 md:size-full rounded-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between flex-1 gap-6">
                        <div className="flex flex-col gap-6">
                            {/* Title */}
                            <h2 className="text-4xl font-medium font-Swiss721BT text-background-custom ">
                                Real-Time Error Tracking Web App with Sentry Integration
                            </h2>
                            {/* Description and Button */}
                            <div className="flex flex-col gap-6">
                                <p className="text-lg font-Swiss721BT text-text-medium-gray">
                                    Sentry Error Monitoring Integration connects two websites with Sentry to enable real-time error tracking and efficient issue resolution, enhancing system reliability
                                </p>
                                <div className="flex md:hidden flex-col gap-6">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Category</h4>
                                        <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Study Case Internship</h4>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Field</h4>
                                        <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Software Development</h4>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Role</h4>
                                        <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">UI/UX Designer Frontend Developer</h4>
                                    </div>
                                </div>
                                <Link
                                    href="/contact"
                                    className="px-6 py-3 rounded-2xl bg-neutral-black-custom w-full text-center hover:shadow-xl active:translate-y-[2px] transition-all duration-200 inset-shadow-sm inset-shadow-foreground"
                                >
                                    <ShinyText
                                        text="Read More"
                                        disabled={false}
                                        speed={3}
                                        className="font-Swiss721BT capitalize text-lg text-accent-orange drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
                                    />
                                </Link>
                            </div>

                            {/* Info Grid */}
                            <div className="hidden md:flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Category</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Study Case Internship</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Field</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Software Development</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Role</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">UI/UX Designer Frontend Developer</h4>
                                </div>
                            </div>
                        </div>

                        {/* Next Project Button */}
                        <div className="hidden md:flex flex-row gap-3 items-center">
                            <Image
                                src="/icons/icon-arrow.svg"
                                width={40}
                                height={40}
                                alt="arrow down"
                                className="rounded-full bg-background-custom w-fit"
                            />
                            <span className="text-2xl font-Swiss721BT text-background-custom font-medium">Next Project</span>
                        </div>
                    </div>

                    {/* Bottom Image */}
                    <div className="hidden md:block w-full h-48">
                        <Image
                            src="/images/mock-p2.png"
                            alt="Project mockup"
                            width={800}
                            height={800}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </section>

                {/* Project 2 - Appointly */}
                <section className="bg-[#010101] p-4 min-h-screen flex flex-col relative z-10 gap-6">
                    <div className="hidden md:block w-full h-64">
                        <Image
                            src="/images/mock-p3.png"
                            alt="Appointly App"
                            width={800}
                            height={800}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl font-medium font-Swiss721BT text-background-custom leading-tight">
                            Appointly: Android App for Easy Appointment Management
                        </h2>

                        <div className="flex flex-col gap-6">
                            <p className="text-lg font-Swiss721BT text-text-medium-gray">
                                Manual appointment bookings often cause schedule conflicts and missed reminders. Appointly solves this with a mobile app offering real-time scheduling, automated notifications, integrated maps and an intuitive interface for seamless online and offline bookings.
                            </p>
                            <div className="flex md:hidden flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Category</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Study Case Internship</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Field</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Software App Development</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Role</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">UI/UX Designer Mobile Developer</h4>
                                </div>
                            </div>
                            <Link
                                href="/contact"
                                className="px-6 py-3 rounded-2xl bg-neutral-black-custom w-full text-center hover:shadow-xl active:translate-y-[2px] transition-all duration-200 inset-shadow-sm inset-shadow-foreground"
                            >
                                <ShinyText
                                    text="Read More"
                                    disabled={false}
                                    speed={3}
                                    className="font-Swiss721BT capitalize text-lg text-accent-orange drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
                                />
                            </Link>
                        </div>

                        <div className="hidden md:flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Category</h4>
                                <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Study Case Internship</h4>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Field</h4>
                                <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Software App Development</h4>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Role</h4>
                                <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">UI/UX Designer Mobile Developer</h4>
                            </div>
                        </div>

                        <div className="hidden md:flex flex-row gap-3 items-center">
                            <Image src="/icons/icon-arrow.svg" width={40} height={40} alt="arrow down" className="rounded-full bg-background-custom w-fit" />
                            <span className="text-2xl font-Swiss721BT text-background-custom font-medium">Next Project</span>
                        </div>
                    </div>

                    <div className="hidden md:block w-full h-48">
                        <Image
                            src="/images/mock-p4.png"
                            alt="Project mockup"
                            width={800}
                            height={800}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </section>

                {/* Project 3 - SIPA Website */}
                <section className="bg-[#010101] p-4 min-h-screen flex flex-col relative z-10 gap-6">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl font-medium font-Swiss721BT text-background-custom leading-tight">
                            Redesign website Solo International Performing Arts (SIPA) 2024
                        </h2>

                        <div className="flex flex-col gap-6">
                            <p className="text-lg font-Swiss721BT text-text-medium-gray">
                                Revamped SIPA Festival's website boosted user experience, attracting 2,000+ new users and a 15,233% traffic surge in 30 days, amplifying its cultural impact globally
                            </p>
                            <div className="flex md:hidden flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Category</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Study Case Volunteer</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Field</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Revamp Website</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Role</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Web Designer Wordpress Developer</h4>
                                </div>
                            </div>
                            <Link
                                href="/contact"
                                className="px-6 py-3 rounded-2xl bg-neutral-black-custom w-full text-center hover:shadow-xl active:translate-y-[2px] transition-all duration-200 inset-shadow-sm inset-shadow-foreground"
                            >
                                <ShinyText
                                    text="Read More"
                                    disabled={false}
                                    speed={3}
                                    className="font-Swiss721BT capitalize text-lg text-accent-orange drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
                                />
                            </Link>
                        </div>

                        <div className="hidden md:flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Category</h4>
                                <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Study Case Volunteer</h4>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Field</h4>
                                <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Revamp Website</h4>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Role</h4>
                                <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Web Designer Wordpress Developer</h4>
                            </div>
                        </div>

                        <div className="hidden md:flex flex-row gap-3 items-center">
                            <Image src="/icons/icon-arrow.svg" width={40} height={40} alt="arrow down" className="rounded-full bg-background-custom w-fit" />
                            <span className="text-2xl font-Swiss721BT text-background-custom font-medium">Next Project</span>
                        </div>
                    </div>

                    <div className="hidden md:block w-full h-64">
                        <Image
                            src="/images/mock-p6.png"
                            alt="SIPA Website"
                            width={800}
                            height={800}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </section>

                {/* Project 4 - What's Next App */}
                <section className="bg-[#010101] p-4 min-h-screen flex flex-col relative z-10 gap-6">
                    <div className="hidden md:block w-full h-64">
                        <Image
                            src="/images/mock-p7.png"
                            alt="What's Next App"
                            width={800}
                            height={800}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl font-medium font-Swiss721BT text-background-custom leading-tight">
                            Design App What's Next?
                        </h2>

                        <div className="flex flex-col gap-6">
                            <p className="text-lg font-Swiss721BT text-text-medium-gray">
                                Application designed to help users, particularly students and young adults, navigate the challenges of choosing the right educational path and career
                            </p>
                            <div className="flex md:hidden flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Category</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Study Case Competition UI/UX Design</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Field</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Education Tech</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Role</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">UI Designer UX Researcher</h4>
                                </div>
                            </div>
                            <Link
                                href="/contact"
                                className="px-6 py-3 rounded-2xl bg-neutral-black-custom w-full text-center hover:shadow-xl active:translate-y-[2px] transition-all duration-200 inset-shadow-sm inset-shadow-foreground"
                            >
                                <ShinyText
                                    text="Read More"
                                    disabled={false}
                                    speed={3}
                                    className="font-Swiss721BT capitalize text-lg text-accent-orange drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
                                />
                            </Link>
                        </div>

                        <div className="hidden md:flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Category</h4>
                                <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Study Case Competition UI/UX Design</h4>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Field</h4>
                                <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">Education Tech</h4>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-Swiss721BT text-text-medium-gray text-lg uppercase">Role</h4>
                                <h4 className="font-Swiss721BT text-background-custom text-xl capitalize">UI Designer UX Researcher</h4>
                            </div>
                        </div>

                        <div className="hidden md:flex flex-row gap-3 items-center">
                            <Image src="/icons/icon-arrow.svg" width={40} height={40} alt="arrow down" className="rounded-full bg-background-custom w-fit" />
                            <span className="text-2xl font-Swiss721BT text-background-custom font-medium">Next Project</span>
                        </div>
                    </div>

                    <div className="hidden md:block w-full h-48">
                        <Image
                            src="/images/mock-p8.png"
                            alt="Project mockup"
                            width={800}
                            height={800}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </section>

                {/* Vertical Panels */}
                <section className="hidden h-80 md:flex items-center justify-center relative z-10">
                    {/* Additional content can go here */}
                </section>
            </div>
        )
    }

    // Desktop horizontal layout (original)
    return (
        <div className="overflow-hidden">
            {/* First horizontal container with description */}
            <div ref={setContainerRef(0)} className="container flex flex-nowrap min-w-screen w-[600%] h-screen overflow-hidden">
                {/* Description Panel */}
                <div className="panel bg-[#010101] min-w-screen h-full flex justify-between text-accent-foreground-custom relative z-10">
                    <div className="flex flex-col justify-between p-4 md:p-6 w-full">
                        <div className="flex flex-col gap-4 md:gap-6">
                            <h2 className="text-[56px] md:text-9xl font-medium font-Swiss721BTBlack tracking-wide leading-tight relative z-20">
                                Crafting Outstanding Digital Experiences
                            </h2>
                            <div className="relative items-center py-1 md:py-10 rounded-2xl md:rounded-3xl bg-gradient-to-r overflow-hidden from-background-custom to-light-gray-custom z-10">
                                <div className="h-16 overflow-hidden">
                                    <TextMarque
                                        delay={300}
                                        baseVelocity={-3}
                                        classname='font-medium font-Swiss721BTBlack text-neutral-black-custom tracking-wider text-4xl md:text-6xl'
                                    >
                                        Frontend Development ✦ UI/UX Design ✦ Web Applications ✦ Mobile Apps ✦ Landing Pages
                                    </TextMarque>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-end relative z-20">
                            <div className="flex flex-row gap-3 items-center">
                                <Image src="/icons/icon-arrow.svg" width={60} height={60} alt="arrow down" className=" rounded-full bg-background-custom w-fit" />
                                <span className="text-4xl md:text-5xl font-Swiss721BT text-background-custom font-medium">Keep Scroll</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Horizontal Panels Projects */}
                <section className="panel bg-[#010101] p-6 min-w-screen h-full flex relative z-10 
                 md:flex-row flex-col md:gap-0 gap-8 ">
                    {/* Left Image - Mobile: Top, Desktop: Left */}
                    <div className="relative z-50 ">
                        <Image
                            src="/images/mock-p1.png"
                            alt="Scroll 1"
                            width={800}
                            height={800}
                            className="h-fit lg:w-[260px] xl:w-[360px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col justify-between md:ml-6 ml-0">
                        <div className="flex flex-col gap-8 xl:gap-10">
                            {/* Title */}
                            <h2 className=" xl:text-8xl text-4xl sm:text-6xl font-medium font-Swiss721BT text-background-custom relative ">
                                Real-Time Error Tracking Web App with Sentry Integration
                            </h2>

                            {/* Description and Button */}
                            <div className="flex md:flex-row flex-col md:gap-10 gap-6">
                                <p className="md:text-xl text-lg font-Swiss721BT text-text-medium-gray max-w-2xl ">
                                    Sentry Error Monitoring Integration connects two websites with Sentry to enable real-time error tracking and efficient issue resolution, enhancing system reliability
                                </p>
                                <Link
                                    href="/contact"
                                    className="px-6 py-3 rounded-2xl bg-neutral-black-custom size-fit  text-center
                             hover:shadow-xl active:translate-y-[2px] transition-all duration-200 
                             inset-shadow-sm inset-shadow-foreground "
                                >
                                    <ShinyText
                                        text="Read More"
                                        disabled={false}
                                        speed={3}
                                        className="font-Swiss721BT capitalize md:text-xl text-lg text-accent-orange 
                                 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
                                    />
                                </Link>
                            </div>

                            {/* Info Grid */}
                            <div className="flex md:flex-row flex-col md:gap-10 gap-6 
                           md:overflow-visible overflow-x-auto
                           md:snap-none snap-x snap-mandatory">
                                <div className="flex flex-col gap-2 md:min-w-0 min-w-[150px] snap-start">
                                    <h4 className="font-Swiss721BT text-text-medium-gray md:text-xl text-lg uppercase">
                                        Category
                                    </h4>
                                    <h4 className="font-Swiss721BT text-background-custom lg:text-2xl text-xl capitalize leading-tight">
                                        Study Case <br /> Internship
                                    </h4>
                                </div>
                                <div className="flex flex-col gap-2 md:min-w-0 min-w-[150px] snap-start">
                                    <h4 className="font-Swiss721BT text-text-medium-gray md:text-xl text-lg uppercase">
                                        Field
                                    </h4>
                                    <h4 className="font-Swiss721BT text-background-custom lg:text-2xl text-xl capitalize leading-tight">
                                        Software <br /> Development
                                    </h4>
                                </div>
                                <div className="flex flex-col gap-2 md:min-w-0 min-w-[150px] snap-start">
                                    <h4 className="font-Swiss721BT text-text-medium-gray md:text-xl text-lg uppercase">
                                        Role
                                    </h4>
                                    <h4 className="font-Swiss721BT text-background-custom lg:text-2xl text-xl capitalize leading-tight">
                                        UI/UX Designer <br /> Frontend Developer
                                    </h4>
                                </div>
                            </div>
                        </div>

                        {/* Next Project Button */}
                        <div className="flex flex-row gap-3 items-center mt-8 md:mt-0">
                            <Image
                                src="/icons/icon-arrow.svg"
                                width={60}
                                height={60}
                                alt="arrow down"
                                className="rounded-full bg-background-custom md:size-[60px] w-[40px] h-[40px]"
                            />
                            <span className="md:text-5xl text-2xl sm:text-3xl font-Swiss721BT text-background-custom font-medium">
                                Next Project
                            </span>
                        </div>
                    </div>

                    {/* Right Image - Hidden on mobile, visible on larger screens */}
                    <div className="absolute bottom-6 right-6 hidden md:hidden lg:block">
                        <Image
                            src="/images/mock-p2.png"
                            alt="Scroll 2"
                            width={800}
                            height={800}
                            className="md:w-96 h-full xl:w-[560px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Mobile Alternative - Bottom Image
                    <div className="md:hidden w-full h-48 flex-shrink-0 snap-start">
                        <Image
                            src="/images/mock-p2.png"
                            alt="Scroll 2"
                            width={800}
                            height={800}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div> */}
                </section>
                <section className="panel  bg-[#010101] p-6  min-w-screen h-full flex  relative z-10">
                    <div className="relative z-50">
                        <div className="relative">
                            <Image
                                src="/images/mock-p3.png"
                                alt="Scroll 1"
                                width={800}
                                height={800}
                                className="h-full lg:w-[260px] xl:w-[360px] object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-6 ml-6">
                            <h2 className=" xl:text-8xl text-4xl sm:text-6xl font-medium  font-Swiss721BT text-background-custom relative ">Appointly: Android App for Easy Appointment Management</h2>
                            <div className="flex flex-row items-start lg:gap-8 xl:gap-10">
                                <p className="text-xl font-Swiss721BT text-text-medium-gray max-w-2xl line-clamp-3">Manual appointment bookings often cause schedule conflicts and missed reminders. Appointly solves this with a mobile app offering real-time scheduling, automated notifications, integrated maps and an intuitive interface for seamless online and offline bookings.</p>
                                <Link
                                    href="/contact"
                                    className="px-6 py-3 rounded-2xl bg-neutral-black-custom w-fit  hover:shadow-xl active:translate-y-[2px] transition-all duration-200 inset-shadow-sm inset-shadow-foreground"
                                >
                                    <ShinyText
                                        text="Read More"
                                        disabled={false}
                                        speed={3}
                                        className="font-Swiss721BT capitalize text-xl text-accent-orange drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
                                    />
                                </Link>
                            </div>
                            <div className="flex flex-row lg:gap-8 xl:gap-10">
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-xl uppercase">Category</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize">Study Case <br /> Internship</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-xl uppercase">field</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize">Software App <br /> Development</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-xl uppercase">role</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize ">UI/UX Designer <br /> Mobile Developer</h4>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <Image src="/icons/icon-arrow.svg" width={60} height={60} alt="arrow down" className="rounded-full bg-background-custom w-fit" />
                            <span className="text-5xl font-Swiss721BT text-background-custom font-medium">Next Project</span>
                        </div>
                    </div>
                    <div className="absolute bottom-6 right-6 md:hidden lg:block">
                        <Image
                            src="/images/mock-p4.png"
                            alt="Scroll 1"
                            width={800}
                            height={800}
                            className="h-full lg:w-[320px] xl:w-[520px] object-cover"
                        />
                    </div>
                </section>
                <section className="panel  bg-[#010101] p-6  min-w-screen h-full flex  relative z-10">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-8 ml-6 ">
                            <h2 className="xl:text-8xl text-4xl sm:text-6xl  font-medium font-Swiss721BT text-background-custom relative ">Redesign website Solo International Performing Arts (SIPA) 2024</h2>
                            <div className="flex flex-row items-start gap-24">
                                <p className="text-xl font-Swiss721BT text-text-medium-gray max-w-2xl">Revamped SIPA Festival's website boosted user experience, attracting 2,000+ new users and a 15,233% traffic surge in 30 days, amplifying its cultural impact globally</p>
                                <Link
                                    href="/contact"
                                    className="px-6 py-3 rounded-2xl bg-neutral-black-custom w-fit  hover:shadow-xl active:translate-y-[2px] transition-all duration-200 inset-shadow-sm inset-shadow-foreground"
                                >
                                    <ShinyText
                                        text="Read More"
                                        disabled={false}
                                        speed={3}
                                        className="font-Swiss721BT capitalize text-xl text-accent-orange drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
                                    />
                                </Link>
                            </div>
                            <div className="flex flex-row gap-10">
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-xl uppercase">Category</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize">Study Case <br /> Volunteer</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-xl uppercase">field</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize">Revamp <br /> Website</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-xl uppercase">role</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize ">Web Designer <br /> Wordpress Developer</h4>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <Image src="/icons/icon-arrow.svg" width={60} height={60} alt="arrow down" className="rounded-full bg-background-custom w-fit" />
                            <span className="text-5xl font-Swiss721BT text-background-custom font-medium">Next Project</span>
                        </div>
                    </div>
                    <div className="absolute md:hidden lg:block bottom-6 right-6">
                        <Image
                            src="/images/mock-p6.png"
                            alt="Scroll 1"
                            width={800}
                            height={800}
                            className="h-full lg:w-[440px] xl:w-[560px] object-cover"
                        />
                    </div>

                </section>
                <section className="panel  bg-[#010101] p-6  min-w-screen h-full flex  relative z-10">
                    <div className="relative z-50">
                        <div className="relative">
                            <Image
                                src="/images/mock-p7.png"
                                alt="Scroll 1"
                                width={800}
                                height={800}
                                className="h-full lg:w-[150px] xl:w-[190px] object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-8 ml-6">
                            <h2 className=" xl:text-8xl text-4xl sm:text-6xl  font-medium font-Swiss721BT text-background-custom relative ">Design App What's Next?</h2>
                            <div className="flex flex-row items-start gap-10">
                                <p className="text-xl font-Swiss721BT text-text-medium-gray max-w-2xl">Application designed to help users, particularly students and young adults, navigate the challenges of choosing the right educational path and career</p>
                                <Link
                                    href="/contact"
                                    className="px-6 py-3 rounded-2xl bg-neutral-black-custom w-fit  hover:shadow-xl active:translate-y-[2px] transition-all duration-200 inset-shadow-sm inset-shadow-foreground"
                                >
                                    <ShinyText
                                        text="Read More"
                                        disabled={false}
                                        speed={3}
                                        className="font-Swiss721BT capitalize text-xl text-accent-orange drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
                                    />
                                </Link>
                            </div>
                            <div className="flex flex-row gap-10">
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-xl uppercase">Category</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize">Study Case <br /> Competition UI/UX Design</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-xl uppercase">field</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize">Education <br /> Tech</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-text-medium-gray text-xl uppercase">role</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize ">UI Designer<br /> UX Researcher</h4>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <Image src="/icons/icon-arrow.svg" width={60} height={60} alt="arrow down" className="rounded-full bg-background-custom w-fit" />
                            <span className="text-5xl font-Swiss721BT text-background-custom font-medium">Next Project</span>
                        </div>
                    </div>
                    <div className="absolute md:hidden lg:block bottom-6 right-6">
                        <Image
                            src="/images/mock-p8.png"
                            alt="Scroll 1"
                            width={800}
                            height={800}
                            className="h-full lg:w-[380px] xl:w-[560px] object-cover"
                        />
                    </div>

                </section>
            </div>

            {/* Vertical Panels */}
            <section className="panel h-80 flex items-center justify-center relative z-10">

            </section>
        </div>
    )
}