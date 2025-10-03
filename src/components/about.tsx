import {CalSans, Hibana} from "@/fonts";
import CountUp from "./ui/countup";

export default function About() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center pt-24 pb-24 border-[#1C1C1C] border-b">
                <p className={`md:w-2/3 text-white text-[28px] leading-none text-center mt-10 mb-10 ${Hibana.className}`}>
                    I'm Rachid Abdenour, a Graphic Designer and Creative Director from Algeria, born in 2001. With over
                    9 years of experience, my goal is to deliver unique, impactful visuals that resonate with audiences
                    and leave a lasting impression.
                </p>
            </div>
            <div className={`text-white text-8xl flex flex-row items-center justify-center pt-24 pb-24 border-[#1C1C1C] border-b ${CalSans.className}`}>
                <div className={`flex flex-1 flex-col items-center justify-center`}>
                    <div>
                        <CountUp
                            from={0}
                            to={60}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />+
                        <p className={`mt-2 text-sm text-[#808080] ${Hibana.className}`}>PROJECTS DONE</p>
                    </div>
                </div>
                <div className={`flex flex-1 flex-col items-center justify-center`}>
                    <div>
                        <CountUp
                            from={0}
                            to={9}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />+
                        <p className={`mt-2 text-sm text-[#808080] ${Hibana.className}`}>YEARS OF EXPERIENCE</p>
                    </div>
                </div>
                <div className={`flex flex-1 flex-col items-center justify-center`}>
                    <div>
                        <CountUp
                            from={0}
                            to={50}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />+
                        <p className={`mt-2 text-sm text-[#808080] ${Hibana.className}`}>CLIENTS</p>
                    </div>
                </div>
                <div className={`flex flex-1 flex-col items-center justify-center`}>
                    <div>
                        <CountUp
                            from={0}
                            to={99}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />%
                        <p className={`mt-2 text-sm text-[#808080] ${Hibana.className}`}>HAPPY CLIENTS</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center pt-24 pb-24 pl-20 pr-20 border-[#1C1C1C] border-b">
                <p className={`md:w-2/3 flex-1 text-white text-[28px] leading-none text-center mt-10 mb-10 ${Hibana.className}`}>
                    Skilled in Photoshop, Illustrator, InDesign, and Canva Pro, with a strong eye for branding, layout, and color.
                    Adept at working in fast-paced environments and collaborating with cross-functional teams to meet tight deadlines.
                    Fluent in Arabic, French, and English.
                </p>
                <div className="flex flex-1 flex-col gap-10 items-center justify-center">
                    <div className="flex flex-row gap-10 items-center justify-center group">
                        <svg fill="#F0F0F0"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  width="60px"
                             height="60px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" className="group-hover:fill-white group-hover:scale-110 transition-all duration-300">
                            <g id="2069a460dcf28295e231f3111e037552">
                                <path display="inline" d="M426.333,0.5H85.667C38.825,0.5,0.5,38.825,0.5,85.667v340.667c0,46.842,38.325,85.167,85.167,85.167
                        h340.667c46.842,0,85.167-38.325,85.167-85.167V85.667C511.5,38.825,473.175,0.5,426.333,0.5z M245.329,260.524
                        c-17.736,17.736-45.611,26.065-77.103,26.065c-8.326,0-15.927-0.365-21.72-1.451v91.945h-44.159V136.363
                        c15.927-2.895,38.009-5.069,68.05-5.069c32.582,0,56.473,6.878,72.039,19.911c14.48,11.947,23.89,31.131,23.89,53.936
                        C266.325,228.309,259.086,247.492,245.329,260.524z M337.981,380.706c-21.358,0-40.542-5.069-53.574-12.31l8.687-32.216
                        c10.135,6.154,29.322,12.671,45.249,12.671c19.545,0,28.236-7.964,28.236-19.549c0-11.943-7.239-18.099-28.96-25.7
                        c-34.391-11.947-48.866-30.769-48.505-51.403c0-31.131,25.7-55.383,66.604-55.383c19.549,0,36.562,5.069,46.695,10.496
                        l-8.687,31.493c-7.602-4.342-21.721-10.135-37.285-10.135c-15.928,0-24.615,7.602-24.615,18.46c0,11.224,8.326,16.655,30.77,24.618
                        c31.854,11.582,46.696,27.871,47.058,53.937C409.653,357.539,384.678,380.706,337.981,380.706z M221.8,206.95
                        c0,28.598-20.273,44.887-53.574,44.887c-9.049,0-16.289-0.362-21.72-1.809v-82.534c4.708-1.085,13.395-2.171,25.704-2.171
                        C202.979,165.323,221.8,179.803,221.8,206.95z">
                                </path>
                            </g>
                        </svg>

                        <div className="w-64 h-8 bg-white/10 rounded-full shadow-inner shadow-white/10 group-hover:scale-110 transition-all duration-300">
                            <div className="w-60 h-full bg-white/90 rounded-full shadow-inner shadow-white/10"></div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 items-center justify-center group">
                        <svg fill="#FFFFFF"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  width="60px" className="group-hover:fill-white group-hover:scale-110 transition-all duration-300"
                             height="60px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
                            <g id="2069a460dcf28295e231f3111e03585e">
                                <path display="inline" d="M227.593,217.991l19.188,60.091h-62.627l18.825-60.091c4.346-14.48,7.964-31.493,11.582-45.611h0.724
                            C218.906,186.499,222.886,203.149,227.593,217.991z M511.5,85.667v340.667c0,46.842-38.325,85.167-85.167,85.167H85.667
                            C38.825,511.5,0.5,473.175,0.5,426.333V85.667C0.5,38.825,38.825,0.5,85.667,0.5h340.667C473.175,0.5,511.5,38.825,511.5,85.667z
                             M324.246,380.885l-79.279-243.977h-56.83l-78.189,243.977h45.973l20.997-69.14h77.465l22.082,69.14H324.246z M399.52,204.597
                            h-44.888v176.288h44.888V204.597z M402.052,155.368c-0.362-13.756-9.772-24.252-24.977-24.252
                            c-14.842,0-24.976,10.496-24.976,24.252c0,13.395,9.772,23.891,24.614,23.891C392.279,179.258,402.052,168.762,402.052,155.368z">
                                </path>
                            </g>
                        </svg>

                        <div className="w-64 h-8 bg-white/10 rounded-full shadow-inner shadow-white/10 group-hover:scale-110 transition-all duration-300">
                            <div className="w-[230px] h-full bg-white/90 rounded-full shadow-inner shadow-white/10"></div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 items-center justify-center group">
                        <svg fill="#FFFFFF"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  width="60px" className="group-hover:fill-white group-hover:scale-110 transition-all duration-300"
                             height="60px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
                        <g id="2069a460dcf28295e231f3111e035a9d">
                        <path display="inline" d="M337.803,268.126c0.728,3.618,1.085,7.964,1.085,11.586v26.423c0,4.708-0.357,9.05-1.447,13.033
                                c-4.341,19.188-20.269,31.492-38.37,31.492c-28.232,0-44.162-23.528-44.162-55.745c0-32.943,15.93-58.281,44.523-58.281
                                C319.704,236.634,333.822,250.752,337.803,268.126z M511.5,85.667v340.667c0,46.842-38.325,85.167-85.167,85.167H85.667
                                C38.825,511.5,0.5,473.175,0.5,426.333V85.667C0.5,38.825,38.825,0.5,85.667,0.5h340.667C473.175,0.5,511.5,38.825,511.5,85.667z
                                 M171.661,138.536h-44.523v243.979h44.523V138.536z M384.864,382.515c-0.728-11.947-1.451-31.492-1.451-49.59V125.503h-44.525
                                v99.909h-0.724c-7.959-13.031-25.338-23.167-49.59-23.167c-42.353,0-79.276,35.113-78.915,94.118
                                c0,54.298,33.303,90.132,75.292,90.132c25.699,0,47.058-12.305,57.558-31.854h0.724l1.809,27.874H384.864z">
                        </path>
                        </g>
                        </svg>

                        <div className="w-64 h-8 bg-white/10 rounded-full shadow-inner shadow-white/10 group-hover:scale-110 transition-all duration-300">
                            <div className="w-[220px] h-full bg-white/90 rounded-full shadow-inner shadow-white/10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}