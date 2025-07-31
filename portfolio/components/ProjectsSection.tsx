import Link from "next/link";
import BlurText from "./BlurText";
import Image from "next/image";

import { useState } from "react";
import ShinyText from "./ShinyText";
import CardSwap, { Card } from "./CardSwap";

export default function ProjectsSection() {
    // Define project data
    const [activeProject, setActiveProject] = useState(0);
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

    const handleActiveCardChange = (cardIndex: number) => {
        setActiveProject(cardIndex);
    }

    const currentProject = projectData[activeProject];

    return (
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
    )
}

