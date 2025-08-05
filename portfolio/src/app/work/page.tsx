'use client'

import Image from "next/image"
import Navbar from "../layout/NavBar-1"
import Footer from "../layout/Footer"
import MixedScrollSections from "../../../components/Scroll2Direction"

export default function WorkPage() {
    return (
        <section className="w-full">
            <div className="max-w-[1520px] mx-auto w-full">
                <Navbar />
                <div className="relative min-h-screen bg-slate-900 overflow-hidden mt-6 md:mt-10 ">
                    {/* Floating Images */}
                    <div className="absolute inset-0">
                        {/* Top left bathroom image */}
                        <div className="absolute top-16 left-8 w-32 h-24 md:w-72 md:h-40 transform -rotate-12">
                            <Image
                                src="/images/testi-glow.png"
                                alt="Luxury bathroom"
                                fill
                                className="object-cover rounded-lg shadow-2xl"
                            />
                        </div>

                        {/* Top center resort view */}
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-36 h-24 md:w-80 md:h-44 rotate-6">
                            <Image
                                src="/images/our-product-glow.png"
                                alt="Resort view"
                                fill
                                className="object-cover rounded-lg shadow-2xl"
                            />
                        </div>

                        {/* Top right bedroom */}
                        <div className="absolute top-12 right-8 w-32 h-24 md:w-72 md:h-40 transform rotate-12">
                            <Image
                                src="/images/tumb_des_2.png"
                                alt="Luxury bedroom"
                                fill
                                className="object-cover rounded-lg shadow-2xl"
                            />
                        </div>

                        {/* Left side pool area */}
                        <div className="absolute top-1/3 left-4 w-28 h-36 md:w-72 md:h-44 transform -rotate-6">
                            <Image
                                src="/images/tumb_des_4.png"
                                alt="Pool area"
                                fill
                                className="object-cover rounded-lg shadow-2xl"
                            />
                        </div>

                        {/* Right side elegant suite */}
                        <div className="absolute top-1/2 right-4 w-32 h-24 md:w-72 md:h-44 transform rotate-6">
                            <Image
                                src="/images/tumb_des_1.png"
                                alt="Elegant suite"
                                fill
                                className="object-cover rounded-lg shadow-2xl"
                            />
                        </div>

                        {/* Bottom right hotel lobby */}
                        {/* <div className="absolute bottom-32 right-12 w-28 h-32 md:w-36 md:h-40 transform -rotate-12">
                        <Image
                            src="/placeholder.svg?height=160&width=144"
                            alt="Hotel lobby"
                            fill
                            className="object-cover rounded-lg shadow-2xl"
                        />
                    </div> */}
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 flex flex-col justify-end min-h-screen px-4 text-center">
                        <div className="max-w-screen mx-auto flex flex-col min-h-screen gap-6 justify-end">
                            {/* Main Tagline */}
                            <div className="mb-1">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-neutral-black-700 font-Swiss721BT mb-2 tracking-wide">
                                    These aren’t just projects
                                </h2>
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-neutral-black-700 font-Swiss721BT tracking-wide">
                                    they’re pieces of how I think, build, and design
                                </h2>
                            </div>

                            {/* Subtitle */}
                            <p className="text-sm md:text-lg text-medium-gray-custom mb-16 md:mb-20 max-w-2xl mx-auto leading-relaxed">
                                Take a look at the work behind the pixels.
                                <br />
                                Every screen is a story, and every pixel has its part.
                            </p>

                            {/* Main Title */}
                            <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[220px] font-TiemposHeadlineLight text-neutral-black-custom leading-none tracking-tight">
                                The Pixel Stories
                            </h1>
                        </div>
                    </div>

                    {/* Gradient Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900/60 pointer-events-none" />
                </div>
                <div className="min-h-screen bg-[#010101]">
                    <MixedScrollSections />
                </div>
                <section className="overflow-hidden">
                    <Footer />
                </section>
            </div>
        </section>
    )
}
