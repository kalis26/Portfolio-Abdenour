"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface SmoothScrollLayoutProps {
    children: ReactNode;
}

export default function SmoothScrollLayout({ children }: SmoothScrollLayoutProps) {
    const { scrollY } = useScroll();

    const smoothY = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        mass: 0.5,
    });

    const y = useTransform(smoothY, (val) => -val);

    return (
        <div className="relative">
            {/* Smoothed scrolling wrapper */}
            <motion.div style={{ y }} className="absolute top-0 left-0 w-full">
                {children}
            </motion.div>
        </div>
    );
}
