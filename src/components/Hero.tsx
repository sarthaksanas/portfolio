"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-background to-background" />

            <motion.div
                style={{ y, opacity }}
                className="z-10 flex flex-col items-center"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-7xl md:text-9xl font-black tracking-tighter mb-6 leading-none"
                >
                    HELLO, I'M <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                        SARTHAK
                    </span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-3xl text-gray-400 max-w-3xl mb-12 font-light tracking-wide"
                >
                    Building digital experiences with <span className="text-white font-medium">bold minimalism</span> and <span className="text-white font-medium">precision</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Link
                        href="#projects"
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-accent px-8 font-medium text-black transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        <span className="mr-2">View Projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white to-white opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gray-500 to-transparent opacity-50" />
            </motion.div>
        </section>
    );
}
