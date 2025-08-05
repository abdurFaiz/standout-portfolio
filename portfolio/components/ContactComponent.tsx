'use client';

import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Alert, AlertDescription, AlertTitle } from "./Alert";

export default function ContactComp() {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            // Replace these with your actual EmailJS credentials
            const result = await emailjs.sendForm(
                'service_7vp42sk0423',     // Your service ID
                'template_c94hs4j',        // Your template ID
                form.current as HTMLFormElement,
                '5DAG-pyCI9LMEAWYT'        // Your public key
            );

            console.log('Email sent successfully:', result.text);
            setSubmitStatus('success');

            // Type-safe form reset
            if (form.current) {
                (form.current as HTMLFormElement).reset();
            }

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(''), 5000);

        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');

            // Clear error message after 5 seconds
            setTimeout(() => setSubmitStatus(''), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="">
            <div id="contact" className="min-h-screen">
                <div className="relative flex flex-col gap-8 md:gap-16">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-Swiss721BT font-medium text-neutral-black-custom leading-tight px-6">Let’s start shaping <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-medium-gray-custom">your ideas together_</span></h2>
                    {submitStatus === 'success' && (
                        <div className=" max-w-sm md:max-w-md absolute top-0 left-1/2 transform -translate-x-1/2 mt-8 md:mt-10">
                            <Alert className="bg-[#9edead] text-[#006314]">
                                <CheckCircle2Icon />
                                <AlertTitle>Success! Your changes have been saved</AlertTitle>
                                <AlertDescription className="text-[#006314]">
                                    Your service request has been processed successfully. All changes are now live and active.
                                </AlertDescription>
                            </Alert>
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <Alert variant="destructive" className="max-w-sm md:max-w-md absolute top-0 left-1/2 transform -translate-x-1/2 mt-8 md:mt-10 bg-[#ffebe9] text-[#b91c1c]">
                            <AlertCircleIcon />
                            <AlertTitle>Unable to process your service.</AlertTitle>
                            <AlertDescription className="text-[#b91c1c]">
                                <p>Please verify your form information and try again.</p>
                            </AlertDescription>
                        </Alert>
                    )}

                    <form ref={form} onSubmit={handleSubmit} action="post" className="flex flex-col gap-6">
                        <div className="flex flex-col flex-wrap lg:flex-row lg:items-center gap-2 lg:gap-4 px-6">
                            <label className="text-4xl lg:text-5xl font-Swiss721BT text-neutral-black-custom" htmlFor="name">
                                My Name is
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="first and last name"
                                className="text-3xl lg:text-4xl px-4 py-2 border-b text-accent-orange w-full lg:w-fit border-neutral-black-300 transition duration-200 outline-none"
                                required
                                disabled={isSubmitting}

                            />
                            <label className="text-4xl lg:text-5xl font-Swiss721BT text-neutral-black-custom mt-2 lg:mt-0" htmlFor="service">
                                and I'm interested in
                            </label>
                            <input
                                type="text"
                                id="service"
                                name="service"
                                placeholder="service name"
                                className="text-3xl lg:text-4xl px-4 py-2 border-b text-accent-orange w-full lg:w-fit border-neutral-black-300 transition duration-200 outline-none"
                                required
                                disabled={isSubmitting}

                            />
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 px-6">
                            <label className="text-4xl lg:text-5xl font-Swiss721BT text-neutral-black-custom" htmlFor="email">
                                Please, contact me at
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="from_email"
                                placeholder="name@example.com"
                                className="text-3xl lg:text-4xl px-4 py-2 border-b text-accent-orange w-full lg:w-fit border-neutral-black-300 transition duration-200 outline-none"
                                required
                                disabled={isSubmitting}

                            />
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4 px-6">
                            <label className="text-4xl lg:text-5xl font-Swiss721BT text-neutral-black-custom lg:pt-2" htmlFor="message">
                                Optionally, I'm sharing more:
                            </label>
                            <textarea
                                disabled={isSubmitting}
                                id="message"
                                name="message"
                                rows={1}
                                placeholder="your project details"
                                className="text-3xl lg:text-4xl px-4 py-2 border-b text-accent-orange w-full lg:w-fit border-neutral-black-300 transition duration-200 outline-none resize-none min-h-[2.5rem]"
                            ></textarea>
                        </div>

                        <div className="flex  px-6 py-10 lg:py-12">
                            <button
                                type="submit"
                                className={`flex justify-between w-full md:w-fit md:justify-start items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-neutral-black-custom text-background-custom font-Swiss721BT font-medium text-2xl rounded-full transition duration-200 ${isSubmitting
                                    ? 'opacity-70 cursor-not-allowed'
                                    : 'hover:bg-opacity-90'
                                    }`}              >
                                {isSubmitting ? 'Sending...' : 'Send request'}
                                <div className=" rounded-full bg-background-custom flex items-center justify-center">
                                    <Image src={"/icons/icon-arrow.svg"} alt="arrow" width={24} height={24} className="size-12" />
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}