import React from "react";
import Link from "next/link";

export default function HighlightedProject() {
    return (
        <div className=" -mt-40 bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <header className="flex flex-col md:flex-row justify-end items-center pt-40 mx-10 md:my-20 lg:my-0">
                    <h1 className="text-6xl lg:text-9xl max-w-lg font-bold my-20 lg:my-0  text-gray-300 text-center">
                        Proyectos
                    </h1>
                </header>

                <div className="grid md:grid-cols-3 gap-8 lg:-mt-8 pt-2 mx-6 md:pt-20">
                    <div 
                        className="w-full block col-span-3 shadow-2x1">
                        <div className="relative overflow-hidden">
                            <img
                                src="/gatitolabs.png"
                                alt="gatitolabs"
                                className="transform hover:scale-125 transition duration-2000 ease-out"
                            />
                            <a
                                href="https://gatitolabs.cl"
                                target="_blank" rel="noreferrer"
                                >
                            <h1 className="absolute top-5 left-5 text-gray-200 font-bold text-xl bg-blue-900 rounded-md px-2">
                                Gatitolabs
                            </h1>
                            </a>
                        </div>
                    </div>
                    <a
                        href="https://sim.fgmm.cl"
                        target="_blank" rel="noreferrer"
                        className="w-full block col-span-3 sm:col-span-2 shadow-2xl"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src="/simulador-mustakis.png"
                                alt="simulador dmx"
                                className="transform hover:scale-125 transition duration-2000 ease-out"
                            />
                            <h1 className="absolute top-5 left-5 text-gray-50 font-bold text-xl bg-blue-900 rounded-md px-2">
                                Simulador de luces
                            </h1>
                        </div>
                    </a>
                    <a
                        href="https://mosaico2.gatitolabs.cl"
                        target="_blank" rel="noreferrer"
                        className="w-full block col-span-3 sm:col-span-1 object-cover"
                    >
                        <div className="relative overflow-hidden shadow-2xl">
                            <img
                                src="/mosaico-mustakis.png"
                                alt="mosaico fractal"
                                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
                            />
                            <h1 className="absolute top-5 left-5 text-gray-50 font-bold text-xl bg-blue-900 rounded-md px-2">
                                Mosaico Fractal
                            </h1>
                        </div>

                    </a>
                </div>
            </div>
        </div>
    );
};