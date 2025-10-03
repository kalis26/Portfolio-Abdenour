import {CalSans} from "@/fonts";
import Orb from "./ui/orb";
import AnimatedLink from "./ui/animatedlink";

export default function Landing() {
    return (
        <div className="pt-24 border-[#1C1C1C] border-b">
            <div className={`pt-32 relative z-10 ${CalSans.className}`}>
                <div className="text-white text-shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-shadow-black text-[150px] leading-none flex flex-col items-center pointer-events-none">
                    <h1>ABDENOUR</h1>
                    <h1>RACHID</h1>
                </div>
                <div className="absolute inset-0 flex justify-center items-center -z-10 h-[600px]">
                    <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={0}
                        forceHoverState={false}
                    />
                </div>
                <div className="pt-40 text-white text-xl flex flex-row pr-20 pl-20 mb-10">
                    <h3 className="flex-1 flex items-center justify-baseline">BASED IN ALGERIA</h3>
                    <AnimatedLink href="#about">CREATIVE DIRECTOR / GRAPHIC DESIGNER</AnimatedLink>
                </div>
            </div>
        </div>
    )
}