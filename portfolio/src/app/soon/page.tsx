'use client';

import Beams from "../../../components/BgSoon";
import Footer from "../layout/Footer";

export default function Soon() {
    return (
        <div className="relative w-full min-h-screen">
            {/* Fullscreen Background */}
            <div className="fixed inset-0 -z-10">
                <Beams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={12}
                    lightColor="#ffffff"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={0}
                />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-5xl font-bold text-white mb-20">Coming Soon</h1>
            </div>

            {/* Footer */}
            <section id="footer" className="relative z-10">
                <Footer />
            </section>
        </div>
    );
}
