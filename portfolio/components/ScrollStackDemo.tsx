import Link from "next/link";
import { ScrollStackItem } from "./ScroolStack";

export default function ScrollStackDemo() {
    return (
        <div className="relative min-h-[300vh]">
            <ScrollStackItem itemClassName="sticky top-20 mx-auto max-w-7xl ">
                <div className="flex flex-row gap-4 h-full justify-center">
                    <div
                        className="flex flex-col justify-between rounded-4xl bg-cover bg-center bg-no-repeat"
                        style={{
                            width: '1280px',
                            height: '420px',
                            backgroundImage: "url('/images/testi-1.png')"
                        }}
                    >
                        {/* Content can be added here if needed */}
                    </div>
                    <div className="flex flex-col gap-6 ">
                        <p className="text-7xl font-Swiss721BTBlack font-bold text-accent-orange">“</p>
                        <p className="text-3xl font-medium font-Swiss721BT">Real-Time Error Tracking with Sentry Integration - A comprehensive solution for monitoring and debugging across multiple environments.</p>
                    </div>
                </div>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="bg-gradient-to-br from-neutral-black-custom to-neutral-black-700 text-white sticky top-24 mx-auto max-w-6xl">
                <div className="flex flex-col gap-4 h-full justify-center">
                    <h2 className="text-4xl font-Swiss721BTBlack font-bold">Featured Project #2</h2>
                    <p className="text-xl font-Swiss721BT">Scalable E-commerce Platform - Modern architecture handling millions of transactions with optimized performance.</p>
                    <Link href="/projects/ecommerce-platform" className="mt-4 px-6 py-3 bg-accent-orange text-white rounded-lg font-Swiss721BT font-medium w-fit hover:shadow-lg transition-all">
                        View Project
                    </Link>
                </div>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="bg-gradient-to-br from-blue-600 to-purple-600 text-white sticky top-28 mx-auto max-w-6xl">
                <div className="flex flex-col gap-4 h-full justify-center">
                    <h2 className="text-4xl font-Swiss721BTBlack font-bold">Featured Project #3</h2>
                    <p className="text-xl font-Swiss721BT">AI-Powered Analytics Dashboard - Machine learning meets real-time data visualization for powerful insights.</p>
                    <Link href="/projects/ai-dashboard" className="mt-4 px-6 py-3 bg-white text-blue-600 rounded-lg font-Swiss721BT font-medium w-fit hover:shadow-lg transition-all">
                        View Project
                    </Link>
                </div>
            </ScrollStackItem>
        </div>
    );
}