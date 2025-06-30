"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FAQItemProps {
    question: string;
    answer: {
        text: string;
        tags?: string[];
        images?: Array<{
            src: string;
            alt: string;
            width?: number;
            height?: number;
        }>;
    };
    isOpen: boolean;
    onToggle: () => void;
}

interface FAQProps {
    items: Array<{
        id: string;
        question: string;
        answer: {
            text: string;
            tags?: string[];
            images?: Array<{
                src: string;
                alt: string;
                width?: number;
                height?: number;
            }>;
        };
    }>;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onToggle();
        }
    };

    return (
        <div className="flex flex-col gap-4 border-b border-neutral-200 pb-8">
            <button
                className="flex flex-row justify-between cursor-pointer group focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-opacity-50 rounded-lg p-2"
                onClick={onToggle}
                onKeyDown={handleKeyDown}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${question.replace(/\s+/g, '-').toLowerCase()}`}
            >        <h3 className="font-Swiss721BT capitalize text-7xl group-hover:text-accent-orange transition-colors duration-300 text-left">
                    {question}
                </h3>
                <div className="flex items-center justify-center size-fit text-neutral-black-700 group-hover:text-accent-orange transition-all duration-300">
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <svg
                            width="80"
                            height="80"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="group-hover:scale-110 transition-transform duration-300"
                        >
                            <path
                                d="M11.2502 6C11.2502 5.58579 11.586 5.25 12.0002 5.25C12.4145 5.25 12.7502 5.58579 12.7502 6V11.2502H18.0007C18.4149 11.2502 18.7507 11.586 18.7507 12.0002C18.7507 12.4145 18.4149 12.7502 18.0007 12.7502H12.7502V18.0007C12.7502 18.4149 12.4145 18.7507 12.0002 18.7507C11.586 18.7507 11.2502 18.4149 11.2502 18.0007V12.7502H6C5.58579 12.7502 5.25 12.4145 5.25 12.0002C5.25 11.586 5.58579 11.2502 6 11.2502H11.2502V6Z"
                                fill="currentColor"
                            />            </svg>
                    </motion.div>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (<motion.div
                    id={`faq-content-${question.replace(/\s+/g, '-').toLowerCase()}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        opacity: { duration: 0.3 }
                    }}
                    className="overflow-hidden"
                >
                    <div className="flex flex-row justify-between pt-4">
                        {/* Tags Section */}
                        {answer.tags && answer.tags.length > 0 && (
                            <div className="flex flex-col gap-1 max-w-xl flex-wrap">
                                <div className="flex flex-row gap-1 flex-wrap">
                                    {answer.tags.slice(0, 4).map((tag, index) => (
                                        <motion.p
                                            key={tag}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="font-Swiss721BT text-base uppercase px-3 py-1 rounded-lg text-neutral-black-700 bg-accent-orange/70 size-fit"
                                        >
                                            {tag}
                                        </motion.p>
                                    ))}
                                </div>
                                {answer.tags.length > 4 && (
                                    <div className="flex flex-row gap-1 flex-wrap mt-1">
                                        {answer.tags.slice(4).map((tag, index) => (
                                            <motion.p
                                                key={tag}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: (index + 4) * 0.1 }}
                                                className="font-Swiss721BT text-base uppercase px-3 py-1 rounded-lg text-neutral-black-700 bg-accent-orange/70 size-fit"
                                            >
                                                {tag}
                                            </motion.p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Content Section */}
                        <div className="flex flex-col gap-4">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="font-Swiss721BT text-xl uppercase max-w-5xl"
                            >
                                {answer.text}
                            </motion.p>

                            {/* Images Section */}
                            {answer.images && answer.images.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-row gap-6"
                                >
                                    {answer.images.map((image, index) => (
                                        <motion.div
                                            key={image.src}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={image.width || 400}
                                                height={image.height || 400}
                                                className="hover:scale-105 transition-transform duration-300"
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ: React.FC<FAQProps> = ({ items }) => {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());

    const toggleItem = (id: string) => {
        setOpenItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <div className="flex flex-col gap-8">
            {items.map((item) => (
                <FAQItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openItems.has(item.id)}
                    onToggle={() => toggleItem(item.id)}
                />
            ))}
        </div>
    );
};

export default FAQ;
