'use client';

import Link from "next/link";
import Navbar from "./layout/NavBar-1";
import Beams from "../../components/BgSoon";
import ShinyText from "../../components/ShinyText";
import Footer from "./layout/Footer";

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
            <div className="relative z-10 flex flex-col lead items-center justify-center min-h-screen">
                <ShinyText
                    text="404"
                    disabled={true}
                    speed={3}
                    className="font-TiemposHeadlineLight text-9xl lg:text-[480px] leading-none text-background-custom drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
                />
                <div className="-mt-12  lg:-mt-44 flex flex-col gap-3 md:gap-6 justify-center items-center bg-gradient-to-b from-[#010101]/60 to-[#010101]/30 backdrop-blur-md border border-accent-foreground-custom/5 rounded-3xl shadow-lg p-4 md:p-6 lg:p-10">
                    <div className="w-full flex flex-col gap-1 max-w-4xl">
                        <h1 className="text-2xl md:text-5xl text-center font-Swiss721BT text-accent-foreground-custom capitalize leading-snug font-medium">Oops! We can’t seem to find this page</h1>
                        <p className="text-center font-Swiss721BT text-accent-foreground-custom  text-base md:text-xl">Looks like something got lost along the way. <br className="block md:hidden" /> But hey—you landed in the right place for a quick restart.</p>
                    </div>
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
            </div>
            {/* Footer */}
            <section id="footer" className="relative z-10">
                <Footer />
            </section>
        </div>
    );
}
