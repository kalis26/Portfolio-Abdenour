import {CalSans, Hibana} from "@/fonts";

export default function Portfolio() {
    return (
        <div className="pt-24 pb-24 border-[#1C1C1C] border-b">
            <div className="flex flex-row w-full mx-auto p-10">
                <div className={`flex-1 flex flex-col text-9xl text-white leading-[0.75] justify-baseline pr-96 ${CalSans.className}`}>
                    <h1>LATEST</h1>
                    <h1>PORTFOLIO</h1>
                </div>
                <div className={`flex flex-col text-white text-xl leading-none justify-end ${Hibana.className}`}>
                    <p>Below are some examples of my latest projects, showcasing my approach to visual identity and design.</p>
                </div>
            </div>
        </div>
    )
}