'use client';

import Footer from "../layout/Footer";
import Navbar from "../layout/NavBar-1";
import ContactComp from "../../../components/ContactComponent";

export default function contact() {
    return (
        <div className="">
            {/* Navbar */}
            <Navbar />
            <div className="mt-16 md:mt-12">
                < ContactComp />
                {/* Footer */}
                <section id="footer" className="relative z-10">
                    <Footer />
                </section>
            </div>
        </div>
    )
}