import CurvedLoop from "../../../components/CurvedText";
import DotGrid from "../../../components/DotGrid";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="min-h-screen relative flex items-center justify-center bg-[#010101]">
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
                    <div className="flex flex-col md:flex-row w-full gap-4 px-4 md:px-6 pt-6">
                        <div className="flex flex-col gap-8 w-full md:w-1/2">
                            <div className="relative">
                                <h6 className="font-TiemposHeadlineLight text-[32px] lg:text-6xl xl:text-7xl font-normal leading-tight text-shadow-neutral-black-custom">Tailored creativity, beyond expectations.
                                </h6>
                            </div>
                            <div className="flex flex-col  gap-4 md:gap-6">
                                <div className="flex flex-col gap-2">
                                    <p className="text-3xl text-neutral-black-custom uppercase font-Swiss721BT  pb-2">Connect with me for updates and collaborations</p>
                                    <div className="flex flex-row gap-2 items-center ">
                                        <Image src={"/icons/linkedin-icon.svg"} alt="icon" width={20} height={20} className="object-cover" />
                                        <Link href="https://www.linkedin.com/in/abdurrahman-faiz-af" target="_blank" className="text-neutral-black-700 font-medium hover:text-accent-orange transition-colors duration-200 text-2xl">LinkedIn</Link>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center ">
                                        <Image src={"/icons/dribbble-icon.svg"} alt="icon" width={20} height={20} className="object-cover" />
                                        <Link href="https://www.dribbble.com/abdurrahman-faiz" target="_blank" className="text-neutral-black-700 font-medium hover:text-accent-orange transition-colors duration-200 text-2xl">Dribble</Link>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center ">
                                        <Image src={"/icons/instagram-icon.svg"} alt="icon" width={20} height={20} className="object-cover" />
                                        <Link href="https://www.instagram.com/abdurrahman_faiz" target="_blank" className="text-neutral-black-700 font-medium hover:text-accent-orange transition-colors duration-200 text-2xl">Instagram</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" relative overflow-hidden flex flex-col-reverse md:flex-col gap-4 rounded-2xl w-full md:w-1/2  md:min-h-[400px] p-4 md:p-6">
                            <CurvedLoop
                                marqueeText="Frontend Development ✦ Sleek ✦ Interactive ✦ UI/UX Design ✦ Aesthetic ✦ Dynamic ✦"
                                speed={6}
                                curveAmount={350}
                                direction="left"
                                interactive={true}
                                className="custom-text-style text-8xl"
                            />
                            <CurvedLoop
                                marqueeText="Available for Any Project ✦ Open ✦ Flexible ✦ Let's Collaborate ✦ Creative ✦ Ready ✦"
                                speed={6}
                                curveAmount={420}
                                direction="right"
                                interactive={true}
                                className="custom-text-style"
                            />
                            <Image src={'/images/DealGif.gif'} alt="footer" width={600} height={600} className="md:mt-12 lg:mt-28 object-cover rounded-2xl" loading="lazy" />

                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p
                            className="text-Swiss721BTBlack text-center uppercase text-4xl md:text-[92px] lg:text-[124px] xl:text-[182px] font-black bg-clip-text text-transparent tracking-tighter leading-none"
                            style={{
                                backgroundImage: 'linear-gradient(to top, rgba(248, 246, 241, 0.01) 0%, rgba(248, 246, 241, 0.1) 5%, rgba(248, 246, 241, 0.15) 15%, rgba(248, 246, 241, 0.2) 20%, rgba(248, 246, 241, 0.3) 25%, #010101 100%)'
                            }}
                        >
                            ABDURRAHMAN
                        </p>
                        <div className="flex flex-col md:flex-row justify-between items-center px-6 -mt-5 pb-6">
                            <p className="text-base text-[#010101] font-light font-Swiss721BT capitalize">&copy; 2025 All pixels reserved</p>
                            <p className="text-base text-[#010101] font-light font-Swiss721BT capitalize">Working Globally</p>
                            <p className="text-base text-[#010101] font-light font-Swiss721BT capitalize">Creafted by Abdurrahman Faiz</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}