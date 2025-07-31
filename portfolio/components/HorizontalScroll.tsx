"use client"

import type React from "react"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

// Define different types of items
export interface TextItem {
    type: "text"
    content: string
    title?: string
}

export interface ImageItem {
    type: "image"
    src: string
    alt: string
    title?: string
    description?: string
}

export interface ProjectItem {
    type: "project"
    title: string
    description: string
    technologies: string[]
    image?: string
    link?: string
}

export interface VideoItem {
    type: "video"
    src: string
    title?: string
    description?: string
    poster?: string
}

export interface CustomItem {
    type: "custom"
    component: React.ReactNode
}

export type ScrollItem = TextItem | ImageItem | ProjectItem | VideoItem | CustomItem

// Component for rendering text items
function TextItemComponent({ item }: { item: TextItem }) {
    return (
        <div className="h-full flex flex-col justify-center">
            {item.title && <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>}
            <p className="text-sm leading-7 text-gray-600">{item.content}</p>
        </div>
    )
}

// Component for rendering image items
function ImageItemComponent({ item }: { item: ImageItem }) {
    return (
        <div className="h-full flex flex-col justify-center">
            <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                />
            </div>
            {item.title && <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>}
            {item.description && <p className="text-sm leading-6 text-gray-600">{item.description}</p>}
        </div>
    )
}

// Component for rendering project items
function ProjectItemComponent({ item }: { item: ProjectItem }) {
    return (
        <div className="h-full flex flex-col justify-center">
            {item.image && (
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                        crossOrigin="anonymous"
                    />
                </div>
            )}
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
            <p className="text-sm leading-6 text-gray-600 mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {item.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
            {item.link && (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                    View Project →
                </a>
            )}
        </div>
    )
}

// Component for rendering video items
function VideoItemComponent({ item }: { item: VideoItem }) {
    return (
        <div className="h-full flex flex-col justify-center">
            <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <video src={item.src} poster={item.poster} controls className="w-full h-full object-cover">
                    Your browser does not support the video tag.
                </video>
            </div>
            {item.title && <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>}
            {item.description && <p className="text-sm leading-6 text-gray-600">{item.description}</p>}
        </div>
    )
}

// Main component for rendering any type of item
function ScrollItemComponent({ item, index }: { item: ScrollItem; index: number }) {
    const renderItem = () => {
        switch (item.type) {
            case "text":
                return <TextItemComponent item={item} />
            case "image":
                return <ImageItemComponent item={item} />
            case "project":
                return <ProjectItemComponent item={item} />
            case "video":
                return <VideoItemComponent item={item} />
            case "custom":
                return item.component
            default:
                return <div>Unknown item type</div>
        }
    }

    return (
        <div
            className={`
        item relative px-20 py-36 flex-none w-[500px] h-[calc(100vh-300px)]
        flex leading-7 select-none border-r border-black/[0.06]
        bg-transparent
        ${index % 2 === 1 ? "items-start" : "items-center"}
        ${(index + 1) % 4 === 0 ? "items-end" : ""}
      `}
        >
            {renderItem()}
        </div>
    )
}

interface HorizontalSectionProps {
    direction: "to-right" | "to-left"
    items: ScrollItem[]
    startCounter?: number
    showCounter?: boolean
}

function HorizontalSection({ direction, items, startCounter = 1, showCounter = true }: HorizontalSectionProps) {
    return (
        <section className="horizontal w-full h-full relative overflow-x-hidden">
            <div className="pin-wrap flex relative z-10 h-screen">
                <div className={`animation-wrap flex relative z-10 h-screen ${direction}`}>
                    {items.map((item, index) => {
                        const counterValue = direction === "to-right" ? startCounter + index : startCounter - index

                        return (
                            <div key={index} className="relative">
                                {showCounter && (
                                    <div
                                        className="absolute text-[100px] opacity-[0.13] font-bold -z-10 transform -translate-x-[30px] -translate-y-[50px] leading-none pointer-events-none"
                                        style={{
                                            content: `"${counterValue}"`,
                                        }}
                                    >
                                        {counterValue}
                                    </div>
                                )}
                                <ScrollItemComponent item={item} index={index} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function BlankSection({ title, description }: { title: string; description: string }) {
    return (
        <section className="w-full h-full relative bg-gray-100 odd:bg-gray-100 even:bg-white">
            <h1 className="m-0 pt-12 pl-12 pb-0 text-3xl font-light">{title}</h1>
            <p className="m-0 py-12 pl-12 text-base">{description}</p>
        </section>
    )
}

// Sample data with different types of items
const sampleTextItems: ScrollItem[] = [
    {
        type: "text",
        title: "Welcome to Our Platform",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, temporibus esse magni illum eos natus ipsum minus? Quis excepturi voluptates atque dolorum minus eligendi!",
    },
    {
        type: "text",
        content:
            "Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa ratione ex, dicta aliquam voluptates! Odio vitae eum nobis dignissimos sunt ipsum repellendus totam optio distinctio.",
    },
]

const sampleImageItems: ScrollItem[] = [
    {
        type: "image",
        src: "/placeholder.svg?height=400&width=600",
        alt: "Modern Office Workspace",
        title: "Our Workspace",
        description: "A modern, collaborative environment designed for creativity and productivity.",
    },
    {
        type: "image",
        src: "/placeholder.svg?height=400&width=600",
        alt: "Team Collaboration",
        title: "Team Collaboration",
        description: "Working together to create amazing solutions for our clients.",
    },
    {
        type: "image",
        src: "/placeholder.svg?height=400&width=600",
        alt: "Technology Setup",
        title: "Cutting-edge Technology",
        description: "Using the latest tools and technologies to deliver exceptional results.",
    },
]

const sampleProjectItems: ScrollItem[] = [
    {
        type: "project",
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "/placeholder.svg?height=300&width=400",
        link: "https://example.com",
    },
    {
        type: "project",
        title: "Mobile Banking App",
        description: "Secure mobile banking application with biometric authentication and real-time transactions.",
        technologies: ["React Native", "Firebase", "TypeScript"],
        image: "/placeholder.svg?height=300&width=400",
    },
    {
        type: "project",
        title: "AI Dashboard",
        description: "Analytics dashboard powered by machine learning for business intelligence and data visualization.",
        technologies: ["Python", "TensorFlow", "React", "D3.js"],
        image: "/placeholder.svg?height=300&width=400",
    },
]

const sampleMixedItems: ScrollItem[] = [
    {
        type: "text",
        title: "About Us",
        content: "We are a team of passionate developers and designers creating innovative digital solutions.",
    },
    {
        type: "project",
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing creative work with smooth animations.",
        technologies: ["Next.js", "GSAP", "Tailwind CSS"],
        image: "/placeholder.svg?height=300&width=400",
    },
    {
        type: "image",
        src: "/placeholder.svg?height=400&width=600",
        alt: "Design Process",
        title: "Our Process",
        description: "From concept to completion, we follow a structured approach to deliver quality results.",
    },
    {
        type: "custom",
        component: (
            <div className="h-full flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Custom Component</h3>
                <p className="text-gray-600 mb-6">
                    This is a completely custom component that you can design however you want!
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                </button>
            </div>
        ),
    },
]

export default function HorizontalScrollDemo() {
    useEffect(() => {
        // Ensure we're on the client side
        if (typeof window === "undefined") return

        const horizontalSections = gsap.utils.toArray(".horizontal")

        horizontalSections.forEach((sec: any) => {
            const thisPinWrap = sec.querySelector(".pin-wrap")
            const thisAnimWrap = thisPinWrap.querySelector(".animation-wrap")
            const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth)

            gsap.fromTo(
                thisAnimWrap,
                {
                    x: () => (thisAnimWrap.classList.contains("to-right") ? 0 : getToValue()),
                },
                {
                    x: () => (thisAnimWrap.classList.contains("to-right") ? getToValue() : 0),
                    ease: "none",
                    scrollTrigger: {
                        trigger: sec,
                        start: "top top",
                        end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
                        pin: thisPinWrap,
                        invalidateOnRefresh: true,
                        scrub: true,
                    },
                },
            )
        })

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <div className="font-['Signika_Negative'] font-light m-0 p-0 overflow-x-hidden">
            <BlankSection
                title="ScrollTrigger Bi-Directional Customizable Scroll"
                description="Scroll down to see different types of content in horizontal scrolling sections. Each section can contain text, images, projects, videos, or custom components."
            />

            <HorizontalSection direction="to-right" items={sampleTextItems} startCounter={1} />

            <BlankSection
                title="Image Gallery Section"
                description="The next section showcases our workspace and team through beautiful imagery."
            />

            <HorizontalSection direction="to-left" items={sampleImageItems} startCounter={5} />

            <BlankSection title="Our Projects" description="Take a look at some of the amazing projects we've worked on." />

            <HorizontalSection direction="to-right" items={sampleProjectItems} startCounter={1} showCounter={false} />

            <BlankSection
                title="Mixed Content Section"
                description="This section demonstrates how you can mix different types of content in a single horizontal scroll."
            />

            <HorizontalSection direction="to-left" items={sampleMixedItems} startCounter={10} />

            <BlankSection
                title="Endless Possibilities"
                description="You can create any type of content and add it to the horizontal scrolling sections. The sky's the limit!"
            />
        </div>
    )
}
