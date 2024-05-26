import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerationEffect";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { Download } from "lucide-react";

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight
                    className="left-80 top-28 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div>
            <div className="h-[50rem] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className="max-w-5xl mx-auto mt-10 md:mt-20 px-8 relative">
                <h1 className="font-bold text-3xl md:text-5xl leading-tight text-zinc-50 max-w-3xl">
                    <TextGenerateEffect
                        className="text-3xl md:text-5xl"
                        words="I'm a software engineer that rarely writes code."
                    />
                </h1>
                <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide mb-5">
                    Meet Manu Arora, the self-proclaimed code wizard who can
                    turn caffeine into beautiful websites. His passion for
                    building clean and functional designs is only rivaled by his
                    passion for finding the perfect GIF to express his
                    excitement.
                </p>
                <Link href="/resume.pdf" className="mt-10">
                    <MagicButton
                        title="Download Resume"
                        icon={
                            <Download width={20} height={20} className="mr-2" />
                        }
                        iconPosition="left"
                    />
                </Link>
            </div>
            <div className="max-w-5xl mx-auto px-8 relative">
                <h1 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto mt-20 md:mt-40">
                    Work Experience
                </h1>
                <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-4 leading-loose tracking-wide">
                    I switch a lot of companies. It&apos;s mostly about the
                    culture.
                </p>
                <WorkExperience />
            </div>
        </div>
    );
};

import Image from "next/image";
import { TracingBeam } from "./ui/TracingBeam";

function WorkExperience() {
    return (
        <TracingBeam>
            <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-2 mt-20 max-w-xl mx-auto">
                <div className="flex md:flex-row flex-col relative overflow-x-auto md:overflow-x-visible">
                    <div className="relative my-2">
                        <button className="px-4 py-2 text-zinc-400 relative z-20 min-w-28 w-full text-left rounded-md flex flex-row space-x-2 items-center group bg-zinc-800">
                            <div className="bg-red-500 p-1 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800">
                                <Image
                                    alt="Apple"
                                    loading="lazy"
                                    width={32}
                                    height={32}
                                    src="/images/logos/apple.png"
                                />
                            </div>
                            <span>Apple</span>
                        </button>
                    </div>
                    {/* Similarly, add buttons for other companies */}
                </div>
                <div className="md:pl-10 flex-1">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-2">
                            <h1 className="text-2xl font-bold text-zinc-100">
                                Senior Software Engineer{" "}
                                <span className="text-cyan-500">@ Apple</span>
                            </h1>
                            <div className="text-zinc-400 text-sm tracking-widest">
                                Jan 2021 - Jun 2021
                            </div>
                            <p className="text-zinc-400 text-sm">
                                Cupertino, CA
                            </p>
                            <div>
                                <div className="flex flex-row space-x-2 items-start my-2">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                    </svg>
                                    <span className="text-zinc-400 text-sm">
                                        Worked on the Apple Music team
                                    </span>
                                </div>
                                {/* Add other work details similarly */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TracingBeam>
    );
}

export default Hero;
