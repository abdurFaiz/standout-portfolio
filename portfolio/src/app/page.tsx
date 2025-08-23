'use client';

import LightRays from "../../components/BgComponent";

export default function Home() {
  return (
    <main className="w-full h-screen bg-[#020202] relative overflow-hidden">
      <div className="relative top-0 left-0 w-full h-full">
        <LightRays
          raysOrigin="top-center"
          raysColor="#fafafa"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays z-0 inset-0"
        />
        {/* content section */}
        <div className="absolute inset-0 flex flex-col justify-center items-center h-full px-6 text-center z-50">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background-custom leading-tight -tracking-wide font-TiemposHeadlineLight max-w-4xl mb-8">
            We’ve officially moved to a new site
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              target="_blank"
              href="https://abdurrahman-space.framer.website/"
              rel="noopener noreferrer"
              className="bg-background-custom text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Go to New Site
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}