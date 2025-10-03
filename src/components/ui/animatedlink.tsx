"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type AnimatedLinkProps = {
    href: string;
    children: React.ReactNode;
};

const underlineVariants = {
    rest: { width: 0 },
    hover: { width: "100%" },
};

export default function AnimatedLink({ href, children }: AnimatedLinkProps) {
    return (
        <Link href={href} className="relative inline-block">
            {/* motion parent receives hover */}
            <motion.div initial="rest" whileHover="hover" className="inline-block relative">
                <span className="relative z-10">{children}</span>

                <motion.span
                    className="absolute left-0 bottom-0 h-[2px] bg-white"
                    variants={underlineVariants}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                />
            </motion.div>
        </Link>
    );
}
