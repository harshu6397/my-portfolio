
"use client";
import React, { useState } from 'react'
import Image from "next/image";
import { TracingBeam } from "./TracingBeam";
import { workExperience } from '@/data';

const WorkExperience = ({ companies, details }: { companies: any, details: any }) => {
    const [activeCompany, setActiveCompany] = useState(workExperience.companies[0].name)
    console.log(activeCompany)
    return (
        <TracingBeam className="md:ml-16">
            <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-2 mt-20 mx-auto">
                <div className="flex flex-row ml-10 md:ml-0 md:flex-col relative overflow-x-auto md:overflow-x-visible">
                    {
                        companies && companies.map((company: any) => {
                            return <div className="relative my-2 mr-2"
                                key={company.id}
                            >
                                <button className={`px-4 py-2 text-zinc-400 relative z-20 min-w-28 w-full text-left rounded-md flex flex-row space-x-2 items-center group ${company.name === activeCompany && "bg-zinc-800"} `}
                                    onClick={() => setActiveCompany(company.name)}
                                >
                                    <div className="bg-red-500 p-1 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800">
                                        <Image
                                            alt={company.name}
                                            loading="lazy"
                                            width={32}
                                            height={32}
                                            src={company.img}
                                        />
                                    </div>
                                    <span>{company.name}</span>
                                </button>
                            </div>
                        })
                    }
                </div>
                <div className="md:pl-10 flex-1 ml-10 md:ml-0">
                    {
                        details && details.map((experience: any) => {
                            console.log("experience.company",experience.company)
                            return experience.company === activeCompany && <div className="flex flex-col space-y-4"
                                key={experience.id}
                            >
                                <div className="flex flex-col space-y-2">
                                    <h1 className="text-2xl font-bold text-zinc-100">
                                        {experience.role}{" "}
                                        <span className="text-cyan-500">@ {experience.company}</span>
                                    </h1>
                                    <div className="text-zinc-400 text-sm tracking-widest">
                                        {experience.start} - {experience.end}
                                    </div>
                                    <p className="text-zinc-400 text-sm">
                                        {experience.location}
                                    </p>
                                    <div>


                                        {
                                            experience.points.map((point: any) => {
                                                return <div className="flex flex-row space-x-2 items-start my-2">
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
                                                        {point}
                                                    </span>
                                                </div>
                                            })
                                        }


                                        {/* Add other work details similarly */}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </TracingBeam>
    );
}

export default WorkExperience

