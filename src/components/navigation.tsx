import {CalSans} from "@/fonts";
import { motion } from "framer-motion";

export default function Navigation() {
    return (
        <motion.nav initial={{ transform: "translateY(-96px)" }}
                    animate={{ transform: "translateY(0px)" }}
                    transition={{ type: "spring" }}
                    className={`${CalSans.className} antialiased z-[1000] border-[#1C1C1C] border-b fixed top-0 h-24 w-full bg-[rgba(5,5,5,0.6)] backdrop-blur-md flex flex-row`}>
            <div className="flex-1 flex items-center justify-baseline text-white text-lg">
                <div id="blinking-dot" className="ml-10 w-[10px] h-[10px] rounded-[50%] bg-green-400"></div>
                <span className="pl-2">AVAILABLE FOR WORK</span>
            </div>
            <div className="flex-1 flex items-center justify-center">

            </div>
            <div className="flex-1 flex items-center justify-end">
                <div className="pr-10">
                    <a className="bg-[#0A0A0A] cursor-pointer text-white text-lg pt-2 pl-4 pr-4 pb-2 border-[3px] border-white rounded-full hover:bg-white hover:text-black transition-all duration-200">CONTACT NOW</a>
                </div>
            </div>
        </motion.nav>
    )
}