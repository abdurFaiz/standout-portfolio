import type React from "react"

// Types for different scroll items
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

// Pre-made item collections that you can use
export const textItems: ScrollItem[] = [
    {
        type: "text",
        title: "Innovation at Its Core",
        content: "We believe in pushing boundaries and creating solutions that make a real difference in people's lives.",
    },
    {
        type: "text",
        title: "Quality First",
        content: "Every project we undertake is crafted with attention to detail and a commitment to excellence.",
    },
    {
        type: "text",
        content: "Our team combines creativity with technical expertise to deliver outstanding digital experiences.",
    },
]

export const imageItems: ScrollItem[] = [
    {
        type: "image",
        src: "/placeholder.svg?height=400&width=600",
        alt: "Modern Office Workspace",
        title: "Our Creative Space",
        description: "A modern, inspiring environment where ideas come to life.",
    },
    {
        type: "image",
        src: "/placeholder.svg?height=400&width=600",
        alt: "Team Brainstorming",
        title: "Collaborative Thinking",
        description: "Working together to solve complex challenges and create innovative solutions.",
    },
    {
        type: "image",
        src: "/placeholder.svg?height=400&width=600",
        alt: "Development Process",
        title: "Clean Code",
        description: "Writing maintainable, scalable code that stands the test of time.",
    },
]

export const projectItems: ScrollItem[] = [
    {
        type: "project",
        title: "SaaS Dashboard",
        description: "A comprehensive analytics dashboard for SaaS businesses with real-time metrics and user insights.",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        image: "/placeholder.svg?height=300&width=400",
        link: "https://example.com/saas-dashboard",
    },
    {
        type: "project",
        title: "E-Learning Platform",
        description: "Interactive online learning platform with video streaming, quizzes, and progress tracking.",
        technologies: ["Next.js", "Prisma", "Tailwind CSS", "Stripe"],
        image: "/placeholder.svg?height=300&width=400",
    },
    {
        type: "project",
        title: "Mobile Fitness App",
        description: "Cross-platform fitness tracking app with workout plans, nutrition tracking, and social features.",
        technologies: ["React Native", "Firebase", "Redux", "Expo"],
        image: "/placeholder.svg?height=300&width=400",
    },
]

export const customItems: ScrollItem[] = [
    {
        type: "custom",
        component: (
            <div className="h-full flex flex-col justify-center items-center text-center p-8">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-white text-4xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Got an Idea?</h3>
                <p className="text-gray-600 mb-6 max-w-sm">
                    Let's turn your vision into reality. We're here to help you build something amazing.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Start Your Project
                </button>
            </div>
        ),
    },
    {
        type: "custom",
        component: (
            <div className="h-full flex flex-col justify-center p-8">
                <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-white text-xl">📊</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Analytics</h3>
                            <p className="text-gray-500 text-sm">Real-time insights</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Active Users</span>
                            <span className="font-bold text-green-600">+24%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Revenue</span>
                            <span className="font-bold text-blue-600">$12,450</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Conversion Rate</span>
                            <span className="font-bold text-purple-600">3.2%</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
]

// Helper function to create mixed content
export function createMixedItems(items: ScrollItem[][]): ScrollItem[] {
    const mixed: ScrollItem[] = []
    const maxLength = Math.max(...items.map((arr) => arr.length))

    for (let i = 0; i < maxLength; i++) {
        items.forEach((itemArray) => {
            if (itemArray[i]) {
                mixed.push(itemArray[i])
            }
        })
    }

    return mixed
}
