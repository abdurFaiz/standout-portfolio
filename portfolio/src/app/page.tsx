'use client';

import BlurText from "../../components/BlurText";
import NavBar from "./layout/Navbar";
import Link from "next/link";
import Image from "next/image";
import RotatingText from "../../components/RotatingText";
import ShinyText from "../../components/ShinyText";
import InfiniteScrollCards from "../../components/InfiniteScrollCards";
import CardSwap, { Card } from "../../components/CardSwap";
import DotGrid from "../../components/DotGrid";
import { useState, useEffect } from "react";
import { Timeline } from "../../components/Timeline";
import SpotlightCard from "../../components/SpotlightCard";
import ScrollStack from "../../components/ScrollStack";
import ScrollVelocity from "../../components/ScrollVelocity";
import FAQ from "../../components/FAQ";
import { ThreeDMarquee } from "../../components/ThreeDMovingCard";


// Define project data
const projectData = [
  {
    id: 0,
    title: "Real-Time Error Tracking with Sentry Integration",
    description: "Can integrating Sentry actually streamline debugging across multi-site environments?",
    buttonText: "Go Behind the Build",
    link: "/projects/sentry-integration",
    image: "/images/tumb_des_2.png",
    label: "Case Study"
  },
  {
    id: 1,
    title: "Scalable E-commerce Platform",
    description: "How can modern architecture handle millions of transactions without compromising performance?",
    buttonText: "Explore the Solution",
    link: "/projects/ecommerce-platform",
    image: "/images/tumb_des_3.png",
    label: "Full Stack"
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description: "What happens when machine learning meets real-time data visualization?",
    buttonText: "See the Magic",
    link: "/projects/ai-dashboard",
    image: "/images/tumb_des_5.png",
    label: "Data Science"
  }
];

// Define timeline data
const timelineData = [
  {
    id: 1,
    title: (
      <div className="flex flex-col gap-1">
        <div className="text-sm font-Swiss721BT text-accent-orange uppercase tracking-wider">Step 1</div>
        <div className="text-[36px] font-Swiss721BT text-accent-foreground-custom capitalize leading-relaxed font-medium">Let's Get In Touch</div>
      </div>
    ),
    content: (
      <SpotlightCard className="custom-spotlight-card relative" spotlightColor="rgba(255, 68, 9, 0.2)">
        <div className="relative flex flex-col gap-6  min-h-[432px] overflow-hidden">
          <div className="flex flex-col gap-4 z-10 relative">
            <p className="px-8 pt-8 text-base text-accent-foreground-custom leading-relaxed font-Swiss721BT uppercase">
              Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas in even greater detail.
            </p>
          </div>
          <div className="absolute right-0 -bottom-32">
            <Image
              src={'/images/calendar.png'}
              alt="Calendar"
              width={436}
              height={436}
              className="object-cover"
            />
          </div>

          {/* Blur overlay - smooth and soft */}
          <div className="absolute inset-x-0 right-2 -bottom-32 h-1/2 bg-gradient-to-t from-neutral-black-custom/90 via-neutral-black-custom/20 to-transparent backdrop-blur-[4px] pointer-events-none"></div>
        </div>
      </SpotlightCard>
    ),
    date: "Week 1",
    description: "Project goals and requirements gathering",
    icon: "🔍"
  },
  {
    id: 2,
    title: (
      <div className="flex flex-col gap-1">
        <div className="text-sm font-Swiss721BT text-accent-orange uppercase tracking-wider">Step 2</div>
        <div className="text-[36px] font-Swiss721BT text-accent-foreground-custom capitalize leading-relaxed font-medium">Grab Your Designs</div>
      </div>
    ),
    content: (
      <SpotlightCard className="custom-spotlight-card relative" spotlightColor="rgba(255, 68, 9, 0.2)">
        <div className="relative flex flex-col gap-6  min-h-[432px] overflow-hidden">
          <div className="flex flex-col gap-4 z-10 relative">
            <p className="px-8 pt-8 text-base text-accent-foreground-custom leading-relaxed font-Swiss721BT uppercase">
              Tell me your unique vision, and I’ll create stunning, functional designs that perfectly align with your goals and bring your ideas to life seamlessly.
            </p>
          </div>

          <div className="absolute right-0 -bottom-3">
            <Image
              src={'/images/grab-design.png'}
              alt="Grab Design"
              width={480}
              height={480}
              className="object-cover"
            />
          </div>
        </div>
      </SpotlightCard>

    ),
    date: "Week 2-3",
    description: "UX/UI design and prototyping",
    icon: "🎨"
  },
  {
    id: 3,
    title: (
      <div className="flex flex-col gap-1">
        <div className="text-sm font-Swiss721BT text-accent-orange uppercase tracking-wider">Step 3</div>
        <div className="text-[36px] font-Swiss721BT text-accent-foreground-custom capitalize leading-relaxed font-medium">Kickstart Development</div>
      </div>
    ),
    content: (
      <SpotlightCard className="custom-spotlight-card relative" spotlightColor="rgba(255, 68, 9, 0.2)">
        <div className="relative flex flex-col gap-6  min-h-[432px] overflow-hidden">
          <div className="flex flex-col gap-4 z-10 relative">
            <p className="px-8 pt-8 text-base text-accent-foreground-custom leading-relaxed font-Swiss721BT uppercase">
              I expertly transform your designs into a powerful, scalable solution, fully ready to launch and optimized for performance, usability, and growth.            </p>
          </div>

          <div className="absolute right-0 -bottom-10">
            <Image
              src={'/images/tech-stack.png'}
              alt="Calendar"
              width={468}
              height={468}
              className="object-cover"
            />
          </div>

          {/* Blur overlay - smooth and soft */}
          <div className="absolute inset-x-0 right-2 -bottom-32 h-1/4 bg-gradient-to-t from-neutral-black-custom/90 via-neutral-black-custom/20 to-transparent backdrop-blur-[4px] pointer-events-none"></div>
        </div>
      </SpotlightCard>

    ),
    date: "Week 4-7",
    description: "Frontend and backend implementation",
    icon: "💻"
  },
  {
    id: 4,
    title: (
      <div className="flex flex-col gap-1">
        <div className="text-sm font-Swiss721BT text-accent-orange uppercase tracking-wider">Step 4</div>
        <div className="text-[36px] font-Swiss721BT text-accent-foreground-custom capitalize leading-relaxed font-medium">Hand Over</div>
      </div>
    ),
    content: (
      <SpotlightCard className="custom-spotlight-card relative" spotlightColor="rgba(255, 68, 9, 0.2)">
        <div className="relative flex flex-col gap-6  min-h-[432px] overflow-hidden">
          <div className="flex flex-col gap-4 z-10 relative">
            <p className="px-8 pt-8 text-base text-accent-foreground-custom leading-relaxed font-Swiss721BT uppercase">
              Receive a fully tested, polished, high-quality product tailored to your needs with support for seamless performance and long-term success.            </p>
          </div>

          <div className="absolute left-8 -bottom-8">
            <Image
              src={'/images/hand-over.png'}
              alt="Calendar"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>

          {/* Blur overlay - smooth and soft */}
          <div className="absolute inset-x-0 right-2 -bottom-32 h-1/4 bg-gradient-to-t from-neutral-black-custom/90 via-neutral-black-custom/20 to-transparent backdrop-blur-[4px] pointer-events-none"></div>
        </div>
      </SpotlightCard>

    ),
    date: "Week 8",
    description: "QA and performance optimization",
    icon: "🧪"
  },
];

// Define FAQ data
const faqData = [
  {
    id: "services",
    question: "What service do you offer?",
    answer: {
      text: "I specialize in web design, branding, UI/UX, and Framer development, creating modern, user-friendly experiences tailored to your needs",
      tags: [
        "Web Design",
        "Frontend Development",
        "UI/UX Design",
        "Landing Page Design",
        "Next.js",
        "Typescript",
        "Vue.js",
        "Webflow",
        "Framer",
        "Wordpress"
      ],
      images: [
        {
          src: "/images/timeless-hero.png",
          alt: "Timeless Design Example",
          width: 400,
          height: 400
        },
        {
          src: "/images/hero-glow.png",
          alt: "Hero Glow Design Example",
          width: 400,
          height: 400
        }
      ]
    }
  },
  {
    id: "timeline",
    question: "How long does a project take?",
    answer: {
      text: "Project timelines vary based on complexity, but most projects are completed within 4-8 weeks from start to finish.",
      tags: [
        "Planning & Strategy",
        "Design Phase",
        "Development",
        "Testing & Launch"
      ]
    }
  },
  {
    id: "pricing",
    question: "What are your pricing models?",
    answer: {
      text: "I offer flexible pricing based on project scope, including fixed-price packages and hourly rates for ongoing work.",
      tags: [
        "Fixed Price",
        "Hourly Rate",
        "Retainer",
        "Custom Quote"
      ]
    }
  }
];

const imagesData = [
  {
    src: "/images/tumb_des_1.png",
    alt: "Design Project 1"
  },
  {
    src: "/images/tumb_des_2.png",
    alt: "Design Project 2"
  },
  {
    src: "/images/tumb_des_3.png",
    alt: "Design Project 3"
  },
  {
    src: "/images/tumb_des_4.png",
    alt: "Design Project 4"
  },
  {
    src: "/images/tumb_des_5.png",
    alt: "Design Project 5"
  }
];

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [isScrollVelocityHovered, setIsScrollVelocityHovered] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateVelocity = () => {
      const currentScrollY = window.scrollY;
      const scrollVelocity = Math.abs(currentScrollY - lastScrollY);
      setVelocity(scrollVelocity);
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateVelocity);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleActiveCardChange = (cardIndex: number) => {
    setActiveProject(cardIndex);
  };

  const currentProject = projectData[activeProject];

  return (
    <main className="min-h-screen bg-background-custom ">
      <section id="home" className=" flex flex-col lg:mx-6 md:mx-5 sm:mx-4 mx-2">
        <NavBar />
        <div className="text-center">
          <BlurText
            text="ABDURRAHMAN"
            delay={120}
            animateBy="letters"
            direction="top"
            className="text-[178px] font-Swiss721BTBlack font-black text-neutral-black-custom leading-40 -z-10"
          />
        </div>
        <div className="flex flex-col gap-1 max-w-2xl pt-32">
          <div className="flex flex-row items-center gap-2">
            <Image src={"/icons/icon-accent.svg"} alt="icon" width={20} height={20} className="animate-spin-slow" />
            <h2 className="uppercase font-Swiss721BT text-base text-neutral-black-700">AVAILABLE FOR NEW PROJECTS</h2>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="font-Swiss721BT text-2xl text-neutral-black-700 leading-relaxed flex flex-row flex-wrap items-center gap-2">
                <span>Get expert</span>
                <span className="inline-block text-accent-orange">
                  <RotatingText
                    texts={[
                      'development',
                      'design',
                      'product thinking'
                    ]}
                    mainClassName=""
                    staggerFrom={"first"}
                    initial={{ y: "100%", opacity: 0 } as any}
                    animate={{ y: 0, opacity: 1 } as any}
                    exit={{ y: "-100%", opacity: 0 } as any}
                    staggerDuration={0.02}
                    splitBy="words"
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    rotationInterval={2000}
                  />
                </span>
                <span>for a fraction of the price.</span>
              </h1>
              <p className="font-Swiss721BT text-2xl text-neutral-black-700">
                I build beautiful, scalable website experiences with a focus on delivering real results, faster.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-neutral-black-custom w-fit  hover:shadow-xl active:translate-y-[2px] transition-all duration-200 border border-neutral-700 inset-shadow-sm inset-shadow-foreground"
            >
              <ShinyText
                text="Let’s Make Magic!"
                disabled={false}
                speed={3}
                className="font-Swiss721BT uppercase text-2xl text-accent-orange drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
              />
            </Link>

          </div>
        </div>
      </section>
      <section id="moving-cards" className="mt-32">
        <div className="flex flex-col w-full">
          <InfiniteScrollCards
            items={[
              {
                name: "Design Project 1",
                image: "/images/tumb_des_1.png"
              },
              {
                name: "Design Project 2",
                image: "/images/tumb_des_2.png"
              },
              {
                name: "Design Project 3",
                image: "/images/tumb_des_3.png"
              },
              {
                name: "Design Project 4",
                image: "/images/tumb_des_1.png"
              },
              {
                name: "Design Project 5",
                image: "/images/tumb_des_2.png"
              }
            ]}
            direction="left"
            speed="normal"
            pauseOnHover={true}
            className="my-0"
          />
          <InfiniteScrollCards
            items={[
              {
                name: "Design Project 5",
                image: "/images/tumb_des_2.png"
              },
              {
                name: "Design Project 1",
                image: "/images/tumb_des_1.png"
              },
              {
                name: "Design Project 2",
                image: "/images/tumb_des_2.png"
              },
              {
                name: "Design Project 3",
                image: "/images/tumb_des_3.png"
              },
              {
                name: "Design Project 4",
                image: "/images/tumb_des_1.png"
              },
            ]}
            direction="right"
            speed="normal"
            pauseOnHover={true}
            className="my-0"
          />
        </div>
      </section>
      <section id="projects" className="flex flex-col my-52 overflow-hidden ">
        <div className="flex flex-col md:flex-row items-center gap-8 mt-10">
          <div className="w-full md:w-1/2 flex flex-col gap-8 px-6">
            <div className="flex flex-col gap-1">
              <BlurText
                key={`title-${activeProject}`}
                text={currentProject.title}
                delay={0}
                animateBy="words"
                direction="top"
                className="text-5xl font-Swiss721BTBlack leading-tight"
                stepDuration={0.15}
              />
              <BlurText
                key={`desc-${activeProject}`}
                text={currentProject.description}
                delay={0}
                animateBy="words"
                direction="top"
                className="text-xl font-Swiss721BT text-neutral-black-700 w-3/4"
                stepDuration={0.15}
              />
            </div>
            <div
              key={`btn-${activeProject}`}
              className="content-enter"
            >
              <Link
                href={currentProject.link}
                className="p-4 rounded-xl bg-neutral-black-custom w-fit  hover:shadow-xl active:translate-y-[2px] transition-all duration-200 border border-neutral-700 inset-shadow-sm inset-shadow-foreground"
              >
                <ShinyText
                  text={currentProject.buttonText}
                  disabled={false}
                  speed={3}
                  className="font-Swiss721BT uppercase text-basel text-accent-orange drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
                />
              </Link>
            </div>
          </div>
          <div style={{ height: '800px', position: 'relative' }} className="w-full md:w-1/2">
            <CardSwap
              width={800}
              height={700}
              cardDistance={60}
              verticalDistance={100}
              delay={5000}
              pauseOnHover={true}
              skewAmount={6}
              easing="elastic"
              onActiveCardChange={handleActiveCardChange}
            >
              {projectData.map((project) => (
                <Card key={project.id} customClass="dark-card">
                  <div className="flex flex-col h-full p-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-accent-foreground-custom bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center">
                        <code className="text-accent-orange text-base">&lt;/&gt;</code>
                      </div>
                      <span className="text-accent-foreground-custom text-2xl font-medium ">{project.label}</span>
                    </div>
                    <div className="flex-grow flex items-center justify-center">
                      <div className="size-full bg-gradient-to-br from-accent-orange via-accent-foreground-custom to-neutral-black-700 rounded-2xl  overflow-hidden relative">
                        <Image
                          alt={project.title}
                          width={800}
                          height={800}
                          src={project.image}
                          className="object-cover w-full h-full absolute inset-0"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </section>
      <section id="process" className="min-h-screen relative bg-[#010101] flex items-center justify-center">
        {/* DotGrid as background */}
        <div className="absolute inset-0 w-full h-full">
          <DotGrid
            dotSize={4}
            gap={28}
            baseColor="#010101"
            activeColor="#FF4409"
            proximity={250}
            shockRadius={250}
            shockStrength={5}
            resistance={1050}
            returnDuration={2.5}
          />
        </div>

        {/* Timeline content - centered container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex items-center justify-center">
          <Timeline data={timelineData} />
        </div>
      </section>
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
      <div className="my-20">
        <Link href='/fun' >
          <ScrollVelocity
            texts={['MOVE TO', 'DESIGN EXPLORATION']}
            velocity={velocity}
            className="font-TiemposHeadlineLight font-bold text-8xl tracking-wide"
          />
        </Link>
      </div>
      <section id="faq" className="min-h-screen flex flex-col lg:mx-6 md:mx-5 sm:mx-4 mx-2 mb-32 gap-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <p className="font-Swiss721BTBlack uppercase text-xl">faq's</p>
            <h2 className="font-TiemposHeadlineLight font-medium leading-relaxed text-5xl tracking-wider">Your concerns, addressed with clarity</h2>
          </div>
          <div className="flex flex-col gap-8">
            <FAQ items={faqData} />
          </div>
        </div>
      </section>
      <section id="gallery" className="min-h-screen ">
        <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-neutral-black-700/5 p-2 ring-1 ring-neutral-black-700/10 ">
          <ThreeDMarquee images={imagesData.map(img => img.src)} />
        </div>
      </section>
    </main>
  );
}
