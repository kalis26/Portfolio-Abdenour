"use client";

import Navigation from "@/components/navigation";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface SmoothScrollLayoutProps {
    children: ReactNode;
}

export default function SmoothScrollLayout({ children }: SmoothScrollLayoutProps) {

    const rawY = useMotionValue(0);

    const smoothY = useSpring(rawY, {
        stiffness: 120,
        damping: 40,
        mass: 0.8,
    });

    const y = useTransform(smoothY, (val) => -val);

    const [pageHeight, setPageHeight] = useState(0);

    useEffect(() => {
        const content = document.getElementById("smooth-content");
        if (content) setPageHeight(content.scrollHeight);

        const onResize = () => {
            const content = document.getElementById("smooth-content");
            if (content) setPageHeight(content.scrollHeight);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const SCROLL_SPEED = 1;

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            e.preventDefault();

            const scrollable = pageHeight - window.innerHeight;
            const current = rawY.get();
            const newY = current + e.deltaY * SCROLL_SPEED;
            const clamped = Math.max(0, Math.min(scrollable, newY));

            rawY.set(clamped);
        };

        window.addEventListener("wheel", onWheel, { passive: false });
        return () => window.removeEventListener("wheel", onWheel);
    }, [pageHeight, rawY]);

    return (
        <div className="relative h-screen overflow-hidden">
            <Navigation />
            <div style={{ height: pageHeight }} />
            <motion.div
                id="smooth-content"
                style={{ y }}
                className="absolute top-0 left-0 w-full will-change-transform"
            >
                {children}
            </motion.div>
        </div>
    );
}
