'use client';

import BlurText from "../../components/BlurText";
import NavBar from "./layout/Navbar";
import Link from "next/link";
import Image from "next/image";
import RotatingText from "../../components/RotatingText";
import ShinyText from "../../components/ShinyText";
import InfiniteScrollCards from "../../components/InfiniteScrollCards";
import DotGrid from "../../components/DotGrid"
import { useState, useEffect, useRef } from "react";
import { Timeline } from "../../components/Timeline";
import SpotlightCard from "../../components/SpotlightCard";
import ScrollVelocity from "../../components/ScrollVelocity";
import FAQ from "../../components/FAQ";
import CurvedLoop from "../../components/CurvedText";
import MixedScrollSections from "../../components/Scroll2Direction";
import { gsap } from "gsap";

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

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [velocity, setVelocity] = useState(0);

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

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      gsap.to(scrollContainerRef.current, {
        scrollLeft: scrollContainerRef.current.scrollLeft - 460,
        duration: 0.8,
        ease: "power2.out",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      gsap.to(scrollContainerRef.current, {
        scrollLeft: scrollContainerRef.current.scrollLeft + 460,
        duration: 0.8,
        ease: "power2.out",
      })
    }
  }


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
      <section id="moving-cards" className="pt-32 pb-56 bg-gradient-to-b from-background-custom via-background-custom to-[#010101]">
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
      <div className="demo-section min-h-screen bg-[#010101]">
        <MixedScrollSections />
      </div>
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
      <div className="my-20">
        <Link href='/fun' >
          <ScrollVelocity
            texts={['MOVE TO', 'DESIGN EXPLORATION']}
            velocity={velocity}
            className="font-TiemposHeadlineLight font-bold text-8xl tracking-wide"
          />
        </Link>
      </div>
      <section id="faq" className=" flex flex-col my-44 lg:mx-6 md:mx-5 sm:mx-4 mx-2 gap-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <h2 className="font-TiemposHeadlineLight font-medium text-center leading-relaxed text-6xl ">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-8">
            <FAQ items={faqData} />
          </div>
        </div>
      </section>
      <section id="testimonials" className="relative mb-20">
        <div className="flex flex-col gap-6 w-full py-20">
          <div className="relative">
            <h3 className="font-TiemposHeadlineLight font-medium leading-snug text-6xl text-center text-neutral-black-custom">
              Built for people like you, <br /> loved by people like you
            </h3>
          </div>
        </div>

        {/* Carousel Container with Hover Controls */}
        <div className="relative">
          {/* Left Hover Zone */}
          <div
            className="absolute left-0 top-0 w-20 h-full z-10 flex items-center justify-start pl-4"
            onMouseEnter={() => setShowLeftArrow(true)}
            onMouseLeave={() => setShowLeftArrow(false)}
          >
            <div
              className={`transition-all duration-300 cursor-pointer bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 ${showLeftArrow ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
              onClick={scrollLeft}
            >
              <Image src={"/icons/icon-arrow.svg"} width={60} height={60} alt="arrow down" className="rounded-full bg-background-custom w-fit rotate-180" />

            </div>
          </div>

          {/* Right Hover Zone */}
          <div
            className="absolute right-0 top-0 w-20 h-full z-10 flex items-center justify-end pr-4"
            onMouseEnter={() => setShowRightArrow(true)}
            onMouseLeave={() => setShowRightArrow(false)}
          >
            <div
              className={`transition-all duration-300 cursor-pointer bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 ${showRightArrow ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
              onClick={scrollRight}
            >
              <Image src={"/icons/icon-arrow.svg"} width={60} height={60} alt="arrow down" className="rounded-full bg-background-custom w-fit" />
            </div>
          </div>

          {/* Carousel Content */}
          <div
            ref={scrollContainerRef}
            className="px-6 flex flex-row h-screen gap-6 w-full overflow-x-scroll snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {/* Testimonial Card 1 */}
            <div className="snap-start flex-none flex flex-col justify-between p-7 bg-[#F6F7F8] w-[460px] rounded-[40px] h-[720px]">
              <div className="flex flex-row justify-between items-center">
                <Image
                  src={"/images/Erik.png"}
                  alt="testi-1"
                  width={72}
                  height={72}
                  className="rounded-full"
                />
                <div className="p-5 border border-medium-gray-custom rounded-full">
                  <Image src={"/images/logo-1.svg"} alt="logo-1" width={100} height={100} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-7xl font-Swiss721BTBlack font-bold text-accent-orange">"</p>
                <p className="text-3xl font-medium font-Swiss721BT">
                  Incredible quality and fast turnaround. Abdurrahman is a true professional who understood our needs
                  perfectly. We highly recommend their services.
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col items-center h-20 text-medium-gray-custom">
                  <hr className="border border-medium-gray-custom w-px h-full" />
                </div>
                <div className="flex flex-col gap-1 justify-center pb-6">
                  <p className="text-xl font-Swiss721BT text-neutral-black-custom">John Felix</p>
                  <p className="text-sm font-Swiss721BT text-medium-gray-custom">
                    CEO, tyco Electronics <br />
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="snap-start flex-none flex flex-col justify-between p-7 bg-[#F6F7F8] w-[460px] rounded-[40px] h-[720px]">
              <div className="flex flex-row justify-between items-center">
                <Image
                  src={"/images/Jim.png"}
                  alt="testi-2"
                  width={72}
                  height={72}
                  className="rounded-full"
                />
                <div className="p-5 border border-medium-gray-custom rounded-full">
                  <Image src={"/images/logo-2.svg"} alt="logo-2" width={100} height={100} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-7xl font-Swiss721BTBlack font-bold text-accent-orange">"</p>
                <p className="text-3xl font-medium font-Swiss721BT">
                  Abdurrahman's expertise in UI/UX design and web development is outstanding. They brought a creative and
                  effective approach to our project, leading to a brilliant result.
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col items-center h-20 text-medium-gray-custom">
                  <hr className="border border-medium-gray-custom w-px h-full" />
                </div>
                <div className="flex flex-col gap-1 justify-center pb-6">
                  <p className="text-xl font-Swiss721BT text-neutral-black-custom">Alexander Gergous</p>
                  <p className="text-sm font-Swiss721BT text-medium-gray-custom">
                    Product Designer, tyco Electronics <br />
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="snap-start flex-none flex flex-col justify-between p-7 bg-[#F6F7F8] w-[460px] rounded-[40px] h-[720px]">
              <div className="flex flex-row justify-between items-center">
                <Image
                  src={"/images/Jon.png"}
                  alt="testi-3"
                  width={72}
                  height={72}
                  className="rounded-full"
                />
                <div className="p-5 border border-medium-gray-custom rounded-full">
                  <Image src={"/images/logo-3.svg"} alt="logo-3" width={100} height={100} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-7xl font-Swiss721BTBlack font-bold text-accent-orange">"</p>
                <p className="text-3xl font-medium font-Swiss721BT">
                  The entire process was seamless. Abdurrahman is a great communicator and collaborator, turning our
                  vision into a reality effortlessly. We're thrilled with the final outcome.
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col items-center h-20 text-medium-gray-custom">
                  <hr className="border border-medium-gray-custom w-px h-full" />
                </div>
                <div className="flex flex-col gap-1 justify-center pb-6">
                  <p className="text-xl font-Swiss721BT text-neutral-black-custom">Erik Kurniawan</p>
                  <p className="text-sm font-Swiss721BT text-medium-gray-custom">
                    Product Designer, tyco Electronics <br />
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 4 */}
            <div className="snap-start flex-none flex flex-col justify-between p-7 bg-[#F6F7F8] w-[460px] rounded-[40px] h-[720px]">
              <div className="flex flex-row justify-between items-center">
                <Image
                  src={"/images/steave.png"}
                  alt="testi-4"
                  width={72}
                  height={72}
                  className="rounded-full"
                />
                <div className="p-5 border border-medium-gray-custom rounded-full">
                  <Image src={"/images/logo-4.svg"} alt="logo-4" width={100} height={100} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-7xl font-Swiss721BTBlack font-bold text-accent-orange">"</p>
                <p className="text-3xl font-medium font-Swiss721BT">
                  Working with Abdurrahman was a fantastic experience. They delivered exceptional results that went above
                  and beyond our expectations. Highly professional and truly talented.
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col items-center h-20 text-medium-gray-custom">
                  <hr className="border border-medium-gray-custom w-px h-full" />
                </div>
                <div className="flex flex-col gap-1 justify-center pb-6">
                  <p className="text-xl font-Swiss721BT text-neutral-black-custom">Steve Wijaya</p>
                  <p className="text-sm font-Swiss721BT text-medium-gray-custom">
                    Product Owner, tyco Electronics <br />
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="contact" className="min-h-screen">
        <div className="flex flex-col gap-16">
          <h2 className="text-8xl font-Swiss721BT font-medium text-neutral-black-custom leading-tight px-6">Let’s start shaping <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-medium-gray-custom">your ideas together_</span></h2>
          <form action="post" className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 px-6">
              <label className="text-5xl font-Swiss721BT text-neutral-black-custom" htmlFor="name">My Name is</label>
              <input type="text" id="name" name="name" placeholder="first and last name" className="text-4xl px-4 py-2 border-b text-accent-orange w-full md:w-fit border-neutral-black-300  transition duration-200 outline-none" required />
              <label className="text-5xl font-Swiss721BT text-neutral-black-custom" htmlFor="service">and I’m interested in </label>
              <input type="service" id="service" name="text" placeholder="service name" className="text-4xl px-4 py-2 border-b text-accent-orange w-full md:w-fit border-neutral-black-300  transition duration-200 outline-none" required />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 px-6">
              <label className="text-5xl font-Swiss721BT text-neutral-black-custom" htmlFor="email">Please, contact me at </label>
              <input type="email" id="email" name="text" placeholder="name@example.com" className="text-4xl px-4 py-2 border-b text-accent-orange w-full md:w-fit border-neutral-black-300  transition duration-200 outline-none" required />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 px-6">
              <label className="text-5xl font-Swiss721BT text-neutral-black-custom" htmlFor="message">Optionally, I’m sharing more:</label>
              <textarea id="message" name="message" rows={1} placeholder="your project details" className="text-4xl px-4 py-2 border-b text-accent-orange w-full md:w-fit border-neutral-black-300  transition duration-200 outline-none"></textarea>
            </div>
            <div className="flex px-6 pt-12">
              <button type="submit" className="flex items-center gap-4 px-6 py-3 bg-neutral-black-custom text-background-custom font-Swiss721BT font-medium text-2xl rounded-full cursor-auto">
                Send request
                <Image src={"/icons/icon-arrow.svg"} width={60} height={60} alt="arrow down" className="rounded-full bg-background-custom w-fit translate-x-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <section id='footer' className="min-h-screen relative flex items-center justify-center bg-[#010101]">
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
        <div className="relative z-20 rounded-3xl bg-background-custom size-full m-4 overflow-hidden">
          <div className="flex flex-col gap-y-40 size-full">
            <div className="flex flex-row w-full gap-4 px-6 pt-6">
              <div className="flex flex-col gap-14 w-1/2">
                <div className="relative">
                  <h6 className="font-TiemposHeadlineLight text-5xl font-normal leading-tight text-shadow-neutral-black-custom">Tailored creativity, beyond expectations.<span className="px-4 py-2 leading-relaxed rounded-full bg-neutral-black-custom text-background-custom">Get in touch today ↗</span>
                  </h6>
                </div>
                <div className="flex flex-row gap-6">
                  <Image src={'/images/DealGif.gif'} alt="footer" width={400} height={400} className="object-cover rounded-2xl" loading="lazy" />
                  <div className="flex flex-col gap-1">
                    <p className="text-xl text-neutral-black-custom uppercase font-Swiss721BT font-semibold pb-2">CONNECT</p>
                    <div className="flex flex-row gap-2 items-center ">
                      <Image src={"/icons/linkedin-icon.svg"} alt="icon" width={20} height={20} className="object-cover" />
                      <Link href="https://www.linkedin.com/in/abdurrahman-faiz-af" target="_blank" className="text-neutral-black-700 font-medium hover:text-accent-orange transition-colors duration-200">LinkedIn</Link>
                    </div>
                    <div className="flex flex-row gap-2 items-center ">
                      <Image src={"/icons/dribbble-icon.svg"} alt="icon" width={20} height={20} className="object-cover" />
                      <Link href="https://www.dribbble.com/abdurrahman-faiz" target="_blank" className="text-neutral-black-700 font-medium hover:text-accent-orange transition-colors duration-200">Dribble</Link>
                    </div>
                    <div className="flex flex-row gap-2 items-center ">
                      <Image src={"/icons/instagram-icon.svg"} alt="icon" width={20} height={20} className="object-cover" />
                      <Link href="https://www.instagram.com/abdurrahman_faiz" target="_blank" className="text-neutral-black-700 font-medium hover:text-accent-orange transition-colors duration-200">Instagram</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" relative overflow-hidden justify-center items-end rounded-2xl w-1/2 min-h-[400px] p-6">
                <CurvedLoop
                  marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
                  speed={6}
                  curveAmount={350}
                  direction="left"
                  interactive={true}
                  className="custom-text-style"
                />
                <CurvedLoop
                  marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
                  speed={6}
                  curveAmount={420}
                  direction="right"
                  interactive={true}
                  className="custom-text-style"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p
                className="text-Swiss721BTBlack text-center uppercase text-[200px] font-black bg-clip-text text-transparent tracking-tighter leading-none"
                style={{
                  backgroundImage: 'linear-gradient(to top, rgba(248, 246, 241, 0.01) 0%, rgba(248, 246, 241, 0.1) 5%, rgba(248, 246, 241, 0.15) 15%, rgba(248, 246, 241, 0.2) 20%, rgba(248, 246, 241, 0.3) 25%, #010101 100%)'
                }}
              >
                ABDURRAHMAN
              </p>
              <div className="flex flex-row justify-between items-center px-6 -mt-5 pb-6">
                <p className="text-base text-[#010101] font-light font-Swiss721BT capitalize">&copy; 2025 All pixels reserved</p>
                <p className="text-base text-[#010101] font-light font-Swiss721BT capitalize">Working Globally</p>
                <p className="text-base text-[#010101] font-light font-Swiss721BT capitalize">Creafted by Abdurrahman Faiz</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
