'use client';

import Link from "next/link";
import Beams from "../../../components/BgSoon";
import ShinyText from "../../../components/ShinyText";
import Footer from "../layout/Footer";
import Navbar from "../layout/NavBar-1";

export default function Soon() {
    return (
        <div className="relative w-full min-h-screen">
            {/* Navbar */}
            <Navbar />
            {/* Fullscreen Background */}
            <div className="fixed inset-0 -z-10">
                <Beams
                    beamWidth={3}
                    beamHeight={30}
                    beamNumber={12}
                    lightColor="#ffffff"
                    speed={3}
                    noiseIntensity={2}
                    scale={0.2}
                    rotation={30}
                />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col gap-6 items-center justify-center min-h-screen">
                <ShinyText
                    text="Coming Soon!"
                    disabled={false}
                    speed={3}
                    className="font-TiemposHeadlineLight text-center leading-none text-7xl lg:text-9xl xl:text-[200px] text-background-custom drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
                />
                <Link
                    href="/"
                    className="px-6 py-3 rounded-3xl bg-[#010101] w-fit  hover:shadow-xl active:translate-y-[2px] transition-all duration-200 border border-background-custom/15 inset-shadow-sm inset-shadow-foreground"
                >
                    <ShinyText
                        text="Let's Back to Home"
                        disabled={false}
                        speed={3}
                        className="font-Swiss721BT uppercase text-xl md:text-2xl text-accent-orange drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
                    />
                </Link>
            </div>
            {/* Footer */}
            <section id="footer" className="relative z-10">
                <Footer />
            </section>
        </div>
    );
}
