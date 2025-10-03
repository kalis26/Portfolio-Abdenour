import {CalSans, Hibana} from "@/fonts";
import AnimatedLink from "@/components/ui/animatedlink";

export default function Contact() {
    return (
        <div>
            <div className="flex flex-col gap-10 items-center justify-center pt-24 pb-6">
                <div className={`text-white text-9xl leading-[0.75] flex flex-col items-center justify-center ${CalSans.className}`}>
                    <h1>LET'S GET</h1>
                    <h1>IN TOUCH</h1>
                </div>
                <div className={`flex-1 flex items-center justify-end ${CalSans.className}`}>
                    <a className="hover:bg-[#0A0A0A] cursor-pointer hover:text-white text-lg pt-2 pl-4 pr-4 pb-2 border-[3px] hover:border-white rounded-full bg-white text-black transition-all duration-200">CONTACT NOW</a>
                </div>
                <div className="flex flex-row items-center justify-center text-white text-lg flex-1 w-full">
                    <p className="flex-1 pl-20">&copy;2025 RACHID ABDENOUR</p>
                    <div className="pr-20 flex-1 flex items-center justify-end">
                        <AnimatedLink href="#home">GO BACK TO TOP</AnimatedLink>
                    </div>
                </div>
            </div>
        </div>
    )
}