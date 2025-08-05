"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Navbar from "../layout/NavBar-1"
import Footer from "../layout/Footer"

export default function about() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-background-custom">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen bg-background-custom">
                <div className="h-full min-h-[700px] flex items-center justify-center relative max-w-[750px] mx-auto lg:max-h-[unset] lg:min-h-[1000px] lg:max-w-[unset] bg-background-custom">
                    <div className="w-full h-full grid grid-cols-6 gap-x-[20px] left-0 top-0 z-[1] pb-[96px] pt-[68px] lg:grid-cols-12 lg:gap-x-[24px] lg:max-w-[1920px] lg:pt-[0px]">
                        {/* Image 1 - Top right on mobile, repositioned on desktop */}
                        <div
                            className="aspect-[10/12.5] h-fit col-start-5 col-span-2 mt-[0px] lg:col-start-10 lg:col-span-2 lg:mt-[140px]"
                            style={{
                                transform: `translate3d(0px, ${-scrollY * 0.1}px, 0px)`,
                            }}
                        >
                            <div className="rounded-[8px] overflow-hidden">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/images/pic_1.jpg"
                                        alt="ONBOX creative team doing brand discovery session"
                                        width={1000}
                                        height={1250}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Image 2 - Left side on mobile, repositioned on desktop */}
                        <div
                            className="aspect-[10/12.5] h-fit col-span-3 col-start-1 row-start-1 mt-[57px] lg:col-start-3 lg:col-span-3 lg:mt-[80px]"
                            style={{
                                transform: `translate3d(0px, ${scrollY * 0.2}px, 0px)`,
                            }}
                        >
                            <div className="rounded-[8px] overflow-hidden">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/images/pic_3.jpg"
                                        alt="ONBOX design team working on identity production"
                                        width={1000}
                                        height={1250}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Image 3 - Right side on mobile, center on desktop */}
                        <div
                            className="aspect-[10/12.5] h-fit col-span-3 col-start-3 mt-[123px] md:mt-[50px] lg:col-start-7 lg:col-span-3 lg:scale-90"
                            style={{
                                transform: `translate3d(0px, ${scrollY * 0.1}px, 0px) scale(0.9)`,
                            }}
                        >
                            <div className="rounded-[8px] overflow-hidden">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/images/pic_2.jpg"
                                        alt="ONBOX studio dog and packaging design"
                                        width={1000}
                                        height={1250}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Image 4 - Hidden on mobile, left side on desktop */}
                        <div
                            className="aspect-[10/12.5] h-fit hidden lg:block lg:col-start-1 lg:col-span-2 lg:row-start-2 lg:mt-[0px]"
                            style={{
                                transform: `translate3d(0px, ${scrollY * 0.1}px, 0px)`,
                            }}
                        >
                            <div className="rounded-[8px] overflow-hidden">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/images/pic_4.jpg"
                                        alt="ONBOX team at the Vancouver Sun Run"
                                        width={1000}
                                        height={1250}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Image 5 - Hidden on mobile, right side on desktop */}
                        <div
                            className="aspect-[10/12.5] h-fit hidden lg:block lg:col-start-11 lg:col-span-2 lg:row-start-2 lg:scale-80"
                            style={{
                                transform: `translate3d(0px, ${-scrollY * 0.5}px, 0px) scale(0.8)`,
                            }}
                        >
                            <div className="rounded-[8px] overflow-hidden">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/images/pic_5.jpg"
                                        alt="Discovery session at Whistler Retreat"
                                        width={1000}
                                        height={1250}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-neutral-black-custom font-TiemposHeadlineLight text-8xl leading-none text-center z-50 max-w-[341px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:flex lg:flex-col lg:leading-[140px] lg:text-[140px] lg:max-w-[683px] lg:text-center lg:mx-auto">
                        Pixel to Profit
                    </h1>
                </div>
            </section>
            {/* About Section */}
            <section className="relative z-10 bg-background-custom min-h-screen py-40 ">
                <div className="flex flex-col-reverse md:flex-row items-start justify-between px-4 md:px-8 w-full">
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 max-w-2xl flex flex-col gap-5">
                        <h2 className="font-Swiss721BT text-4xl md:text-6xl text-neutral-black-custom font-medium leading-tight">
                            A bit about me
                        </h2>
                        <div className="flex flex-col gap-4 text-base md:text-lg font-Swiss721BT text-medium-gray-custom leading-relaxed">
                            <p>
                                I'm Faiz, a frontend developer who loves turning ideas into clean, intuitive digital experiences.
                            </p>
                            <p>
                                From redesigning public sector websites to building apps with real impact, I mix solid development skills with a design-first mindset. I care about details, user needs, and helping teams ship faster with better code and better flow.
                            </p>
                            <p>
                                For me, building products isn’t just about features—it’s about making tech that works and feels right.
                            </p>
                        </div>
                        <h2 className="font-Swiss721BT text-4xl md:text-6xl text-neutral-black-custom font-medium leading-tight">
                            What I do
                        </h2>
                        <div className="flex flex-wrap gap-3 text-base md:text-lg font-Swiss721BT">
                            <span className="px-3 py-1 rounded-full bg-bg-medium-gray text-medium-gray-custom">
                                Frontend Development
                            </span>
                            <span className="px-3 py-1 rounded-full bg-bg-medium-gray text-medium-gray-custom">
                                UI/UX Design
                            </span>
                            <span className="px-3 py-1 rounded-full bg-bg-medium-gray text-medium-gray-custom">
                                Web Performance Optimization
                            </span>
                        </div>

                    </div>
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex gap-3 h-[600px]">
                        {/* Gambar tinggi setengah */}
                        <div className="w-1/2 flex flex-col gap-3">
                            <Image
                                src="/images/pic_2.jpg"
                                alt="Portrait 2"
                                width={500}
                                height={500}
                                className="h-9/12 w-full object-cover rounded-xl"
                            />
                            <div className="flex-1" /> {/* Spacer untuk menempatkan gambar di atas */}
                        </div>
                        {/* Gambar tinggi penuh */}
                        <Image
                            src="/images/pic_1.jpg"
                            alt="ONBOX creative team doing brand discovery session"
                            width={1000}
                            height={1250}
                            className="h-full w-1/2 object-cover rounded-xl"
                        />
                    </div>
                </div>

            </section>
            {/* Content Section */}
            <section className="min-h-screen bg-[#010101] relative z-10">
                <div className="flex flex-row justify-between gap-4 px-4 items-center">
                    <Image
                        src="/images/about_1.jpg"
                        alt="Discovery session at Whistler Retreat"
                        width={500}
                        height={500}
                        className="size-60 object-cover rounded-xl"
                    />
                    <div className="max-w-4xl mx-auto px-6 py-20 lg:py-32 ">
                        <div className="text-background-custom text-lg lg:text-xl leading-relaxed lg:leading-loose space-y-8 relative">
                            <div className="relative">
                                <p className="text-2xl lg:text-3xl font-TiemposHeadlineLight text-center leading-relaxed">
                                    I work with brands going through change—helping them ask the right questions, find clarity, and bring ideas to life through thoughtful design and practical strategy.</p>
                                <Image
                                    src="/images/arrow-1.svg"
                                    alt="Discovery session at Whistler Retreat"
                                    width={500}
                                    height={500}
                                    className="size-32 absolute top-16  -right-6 transform rotate-45 text-background-custom"
                                />
                            </div>
                            <div className="relative">
                                <p className="text-2xl lg:text-3xl font-TiemposHeadlineLight text-center leading-relaxed">
                                    I like to keep things open and collaborative. I’ll adapt to your workflow, share ideas early, and stay close to your vision as it grows. It’s less about having all the answers upfront, and more about figuring it out together.</p>
                                <Image
                                    src="/images/arrow-2.svg"
                                    alt="Discovery session at Whistler Retreat"
                                    width={500}
                                    height={500}
                                    className="size-32 absolute -top-32 -left-16 transform rotate-[15deg] text-background-custom"
                                />
                            </div>
                            <div className="relative">
                                <p className="text-2xl lg:text-3xl font-TiemposHeadlineLight text-center leading-relaxed">
                                    Whether it’s a small team or a growing business, I’m here to help turn ideas into something real—one clear step at a time.                        </p>
                                <Image
                                    src="/images/rocket.svg"
                                    alt="Discovery session at Whistler Retreat"
                                    width={500}
                                    height={500}
                                    className="size-24 absolute -top-16 right-32 transform  text-background-custom"
                                />
                            </div>
                        </div>
                    </div>
                    <Image
                        src="/images/about_2.jpg"
                        alt="Discovery session at Whistler Retreat"
                        width={500}
                        height={500}
                        className="size-60 object-cover rounded-xl"
                    />
                </div>
            </section>
            <Footer />
        </div>
    )
}