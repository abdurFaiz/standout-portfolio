"use client"

import { useEffect, useRef } from "react"
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

    useEffect(() => {
        if (typeof window === "undefined") return

        // Set up horizontal scrolling animations
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

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    const setContainerRef = (index: number) => (el: HTMLDivElement | null) => {
        containerRefs.current[index] = el
    }

    return (
        <div className="overflow-hidden">
            {/* First horizontal container with description */}
            <div ref={setContainerRef(0)} className="container flex flex-nowrap min-w-screen w-[600%] h-screen overflow-hidden">
                {/* Description Panel */}
                <div className="panel bg-[#010101] min-w-screen h-full flex justify-center text-accent-foreground-custom overflow-x-hidden relative z-10">
                    <div className="flex flex-col justify-between p-6 w-full">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-9xl font-medium font-Swiss721BTBlack tracking-wide leading-tight relative z-20">
                                Crafting Outstanding Digital Experiences
                            </h2>
                            <div className="relative py-10 rounded-3xl bg-gradient-to-r overflow-hidden from-background-custom to-light-gray-custom z-10">
                                <div className="h-16 overflow-hidden"> {/* Fixed height container */}
                                    <TextMarque
                                        delay={300}
                                        baseVelocity={-3}
                                        classname='font-medium font-Swiss721BTBlack text-neutral-black-custom tracking-wider text-6xl'
                                    >
                                        Frontend Development ✦ UI/UX Design ✦ Web Applications ✦ Mobile Apps ✦ Landing Pages
                                    </TextMarque>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-end relative z-20">
                            <div className="flex flex-row gap-3 items-center">
                                <Image src="/icons/icon-arrow.svg" width={60} height={60} alt="arrow down" className="rounded-full bg-background-custom w-fit" />
                                <span className="text-5xl font-Swiss721BT text-background-custom font-medium">Keep Scroll</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Horizontal Panels */}
                <section className="panel  bg-[#010101] p-6  min-w-screen h-full flex  relative z-10">
                    <div className="relative z-50">
                        <div className="relative">
                            <Image
                                src="/images/mock-p1.png"
                                alt="Scroll 1"
                                width={800}
                                height={800}
                                className="h-full w-[360px] object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-14 ml-6">
                            <h2 className="text-8xl font-medium font-Swiss721BT text-background-custom relative ">Real-Time Error Tracking Web App with Sentry Integration</h2>
                            <div className="flex flex-row items-start gap-10">
                                <p className="text-xl font-Swiss721BT text-medium-gray-custom max-w-2xl">Sentry Error Monitoring Integration connects two websites with Sentry to enable real-time error tracking and efficient issue resolution, enhancing system reliability</p>
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
                                    <h4 className="font-Swiss721BT text-medium-gray-custom text-xl uppercase">Category</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize">Study Case <br /> Internship</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-medium-gray-custom text-xl uppercase">field</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize">Software <br /> Development</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-medium-gray-custom text-xl uppercase">role</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize ">UI/UX Designer <br /> Frontend Developer</h4>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <Image src="/icons/icon-arrow.svg" width={60} height={60} alt="arrow down" className="rounded-full bg-background-custom w-fit" />
                            <span className="text-5xl font-Swiss721BT text-background-custom font-medium">Next Project</span>
                        </div>
                    </div>
                    <div className="absolute bottom-6 right-6">
                        <Image
                            src="/images/mock-p2.png"
                            alt="Scroll 1"
                            width={800}
                            height={800}
                            className="h-full w-[800px] object-cover"
                        />
                    </div>

                </section>
                <section className="panel  bg-[#010101] p-6  min-w-screen h-full flex  relative z-10">
                    <div className="relative z-50">
                        <div className="relative">
                            <Image
                                src="/images/mock-p3.png"
                                alt="Scroll 1"
                                width={800}
                                height={800}
                                className="h-full w-[360px] object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-14 ml-6">
                            <h2 className="text-8xl font-medium font-Swiss721BT text-background-custom relative ">Appointly: Android App for Easy Appointment Management</h2>
                            <div className="flex flex-row items-start gap-10">
                                <p className="text-xl font-Swiss721BT text-medium-gray-custom max-w-2xl">Manual appointment bookings often cause schedule conflicts and missed reminders. Appointly solves this with a mobile app offering real-time scheduling, automated notifications, integrated maps and an intuitive interface for seamless online and offline bookings.</p>
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
                                    <h4 className="font-Swiss721BT text-medium-gray-custom text-xl uppercase">Category</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize">Study Case <br /> Internship</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-medium-gray-custom text-xl uppercase">field</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize">Software App <br /> Development</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-medium-gray-custom text-xl uppercase">role</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize ">UI/UX Designer <br /> Mobile Developer</h4>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <Image src="/icons/icon-arrow.svg" width={60} height={60} alt="arrow down" className="rounded-full bg-background-custom w-fit" />
                            <span className="text-5xl font-Swiss721BT text-background-custom font-medium">Next Project</span>
                        </div>
                    </div>
                    <div className="absolute bottom-6 right-6">
                        <Image
                            src="/images/mock-p4.png"
                            alt="Scroll 1"
                            width={800}
                            height={800}
                            className="h-full w-[740px] object-cover"
                        />
                    </div>
                </section>
                <section className="panel  bg-[#010101] p-6  min-w-screen h-full flex  relative z-10">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-14 ml-6">
                            <h2 className="text-8xl font-medium font-Swiss721BT text-background-custom relative ">Redesign website Solo International Performing Arts (SIPA) 2024</h2>
                            <div className="flex flex-row items-start gap-48">
                                <p className="text-xl font-Swiss721BT text-medium-gray-custom max-w-2xl">Revamped SIPA Festival's website boosted user experience, attracting 2,000+ new users and a 15,233% traffic surge in 30 days, amplifying its cultural impact globally</p>
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
                                    <h4 className="font-Swiss721BT text-medium-gray-custom text-xl uppercase">Category</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize">Study Case <br /> Volunteer</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-medium-gray-custom text-xl uppercase">field</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize">Revamp <br /> Website</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-medium-gray-custom text-xl uppercase">role</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize ">Web Designer <br /> Wordpress Developer</h4>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <Image src="/icons/icon-arrow.svg" width={60} height={60} alt="arrow down" className="rounded-full bg-background-custom w-fit" />
                            <span className="text-5xl font-Swiss721BT text-background-custom font-medium">Next Project</span>
                        </div>
                    </div>
                    <div className="absolute bottom-6 right-6">
                        <Image
                            src="/images/mock-p6.png"
                            alt="Scroll 1"
                            width={800}
                            height={800}
                            className="h-full w-[840px] object-cover"
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
                                className="h-full w-[260px] object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-14 ml-6">
                            <h2 className="text-8xl font-medium font-Swiss721BT text-background-custom relative ">Design App What’s Next?</h2>
                            <div className="flex flex-row items-start gap-10">
                                <p className="text-xl font-Swiss721BT text-medium-gray-custom max-w-2xl">Application designed to help users, particularly students and young adults, navigate the challenges of choosing the right educational path and career</p>
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
                                    <h4 className="font-Swiss721BT text-medium-gray-custom text-xl uppercase">Category</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize">Study Case <br /> Competition UI/UX Design</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-medium-gray-custom text-xl uppercase">field</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize">Education <br /> Tech</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-Swiss721BT text-medium-gray-custom text-xl uppercase">role</h4>
                                    <h4 className="font-Swiss721BT text-background-custom text-2xl capitalize ">UI Designer<br /> UX Researcher</h4>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <Image src="/icons/icon-arrow.svg" width={60} height={60} alt="arrow down" className="rounded-full bg-background-custom w-fit" />
                            <span className="text-5xl font-Swiss721BT text-background-custom font-medium">Next Project</span>
                        </div>
                    </div>
                    <div className="absolute bottom-6 right-6">
                        <Image
                            src="/images/mock-p8.png"
                            alt="Scroll 1"
                            width={800}
                            height={800}
                            className="h-full w-[720px] object-cover"
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