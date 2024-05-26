import React, { useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerationEffect";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { Download } from "lucide-react";
import { workExperience } from "../data"
import WorkExperience from "./ui/WorkExperience";

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
                <WorkExperience
                    companies={workExperience.companies}
                    details={workExperience.details}
                />
            </div>
        </div>
    );
};

export default Hero;
