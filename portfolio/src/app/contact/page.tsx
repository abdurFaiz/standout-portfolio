'use client';

import Footer from "../layout/Footer";
import Navbar from "../layout/NavBar-1";
import ContactComp from "../../../components/ContactComponent";

export default function contact() {
    return (
        <section className="w-full">
            <div className="max-w-[1520px] mx-auto w-full">
                {/* Navbar */}
                <Navbar />
                <div className="mt-16 md:mt-12">
                    < ContactComp />
                    {/* Footer */}
                    <section id="footer" className="relative z-10 overflow-hidden">
                        <Footer />
                    </section>
                </div>
            </div>
        </section>
    )
}