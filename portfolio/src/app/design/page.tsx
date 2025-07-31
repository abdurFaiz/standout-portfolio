import ScrollStack from "../../../components/ScrollStack";

export default function DesignPage() {
    return (
        <section id="design" className="min-h-screen flex flex-col lg:mx-6 md:mx-5 sm:mx-4 mx-2 mt-32 gap-20">
            <ScrollStack
                title="Couture Glow"
                about="About"
                description={
                    <>
                        Why choose between a gentle product and one that actually works? We believe you deserve both.
                        Couture Glow was born to challenge a market full of empty promises. We bridge the gap between pure, skin-loving care and high-performance results.
                        <br />
                        <br />
                        Our formulas are intentionally soft on the skin yet powerfully effective, using nature's finest ingredients to set a new standard for your glow.
                    </>
                }
                client="Couture Glow"
                field="E-commerce"
                role="Web Designer"
                images={[
                    {
                        src: '/images/hero-glow.png',
                        alt: 'Couture Glow Hero',
                        caption: 'hero section'
                    },
                    {
                        src: '/images/feature-glow.png',
                        alt: 'Couture Glow Feature',
                        caption: 'feature section'
                    },
                    {
                        src: '/images/product-glow.png',
                        alt: 'Couture Glow Product',
                        caption: 'product showcase'
                    },
                    {
                        src: '/images/proof-glow.png',
                        alt: 'Couture Glow Product 2',
                        caption: 'pure product details'
                    },
                    {
                        src: '/images/testi-glow.png',
                        alt: 'Couture Glow Product 2',
                        caption: 'product testimonials'
                    },
                    {
                        src: '/images/our-product-glow.png',
                        alt: 'Couture Glow Product 2',
                        caption: 'product social'
                    },
                    {
                        src: '/images/footer.png',
                        alt: 'Couture Glow Product 2',
                        caption: 'footer section'
                    }
                ]}
            />
            <ScrollStack
                title="Less & Co"
                about="About"
                description={
                    <>
                        At Timeless Fashion, we create more than just garments; we design loyal companions for every one of your stories. Each stitch and piece of fabric is chosen to accompany you through life's chapters with enduring grace.
                        <br />
                        <br />
                        Because the best style is one that grows and evolves with you, telling the world who you are without saying a word.            </>
                }
                client="Less & Co"
                field="E-commerce"
                role="Web Designer"
                images={[
                    {
                        src: '/images/timeless-hero.png',
                        alt: 'Less & Co Hero',
                        caption: 'hero section'
                    },
                    {
                        src: '/images/timeless-product.png',
                        alt: 'Less & Co Feature',
                        caption: 'feature section'
                    },
                    {
                        src: '/images/timeless-offer-1.png',
                        alt: 'Less & Co Product 2',
                        caption: 'product showcase'
                    },
                    {
                        src: '/images/timeless-offer-2.png',
                        alt: 'Less & Co Product',
                        caption: 'product showcase'
                    },
                    {
                        src: '/images/timeless-offer-3.png',
                        alt: 'Couture Glow Product 2',
                        caption: 'product showcase'
                    },

                    {
                        src: '/images/timeless-faq.png',
                        alt: 'Couture Glow Product 2',
                        caption: 'faq section'
                    },
                    {
                        src: '/images/timeless-gallery.png',
                        alt: 'Couture Glow Product 2',
                        caption: 'gallery section'
                    },
                    {
                        src: '/images/timeless-footer.png',
                        alt: 'Couture Glow Product 2',
                        caption: 'footer section'
                    }
                ]}
            />
        </section>
    );
}
