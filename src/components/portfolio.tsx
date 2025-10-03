'use client'

import {CalSans, Hibana} from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
    title: string,
    image: string
}

const ProjectDetail = ({title, image}: Project) => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#0F0F0F] rounded-xl border-[#1C1C1C] border cursor-pointer group">
            <div className="relative w-full aspect-[16/9] z-0 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-300 group-hover:blur-lg"
                />
                <h1 className={`absolute inset-0 group-hover:text-shadow-black group-hover:text-shadow-xs items-center justify-center text-white text-4xl flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${CalSans.className}`}>
                    CLICK TO SEE MORE
                </h1>
            </div>
        </div>
    )
}

function ListProjects({ projects }: { projects: Project[]}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-24">
            {projects.map((project, index) => (
                <ProjectDetail key={index} {...project} />
            ))}
        </div>
    )
}

const projects: Project[] = [
    {
        title: "Branding",
        image: "/branding.png"
    },
    {
        title: "Social Media",
        image: "/socialmedia.png"
    },
    {
        title: "Logos",
        image: "/plogo.png"
    },
    {
        title: "Other",
        image: "/other.png"
    }
]

export default function Portfolio() {
    return (
        <div className="pt-24 pb-24 border-[#1C1C1C] border-b pl-10 pr-10">
            <div className="flex flex-col items-center justify-center p-10">
                <div className={`text-9xl text-white leading-[0.75] pb-10 ${CalSans.className}`}>
                    <motion.h1 initial={{ opacity: 0, y: 50 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               transition={{ duration: 0.8, ease: "easeOut" }}
                               viewport={{ once: true, amount: 0.5 }}>
                        SOME OF MY WORK
                    </motion.h1>
                </div>
            </div>
            <ListProjects projects={projects} />
        </div>
    )
}