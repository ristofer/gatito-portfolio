import React from "react";
import Link from "next/link";

export default function HighlightedProject() {
    return (
        <div className="bg-white -mt-40 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <header className="flex flex-col md:flex-row justify-end items-center pt-40 mx-10 md:my-20 lg:my-0">
                    <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-300 my-20 md:my-0 md:text-white dark:text-gray-300 text-center">
                        Proyectos
                    </h1>
                </header>

                <div className="grid md:grid-cols-3 gap-8 lg:-mt-8 p-12">
                    <a href="https://gatitolabs.cl" className="w-full block col-span-3 shadow-2x1">
                        <div className="relative overflow-hidden">
                            <img
                                src="/gatitolabs.png"
                                alt="gatitolabs"
                                className="transform hover:scale-125 transition duration-2000 ease-out"
                            />
                            <h1 className="absolute top-10 left-10 text-gray-200 font-bold text-xl bg-red-500 rounded-md px-2">
                                Gatitolabs
                            </h1>
                            <h1 className="absolute bottom-10 left-10 text-gray-200 font-bold text-xl bg-black">
                                01
                            </h1>
                        </div>
                    </a>
                    <a
                        href="https://sim.fgmm.cl"
                        className="w-full block col-span-3 sm:col-span-2 shadow-2xl"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src="/simulador-mustakis.png"
                                alt="simulador dmx"
                                className="transform hover:scale-125 transition duration-2000 ease-out"
                            />
                            <h1 className="absolute top-5 left-5 text-gray-50 font-bold text-lg bg-red-500 rounded-md px-2">
                                Simulador de luces
                            </h1>
                            <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl bg-black">
                                02
                            </h1>
                        </div>
                    </a>
                    <a
                        href="https://mosaico2.gatitolabs.cl"
                        className="w-full block col-span-3 sm:col-span-1 object-cover"
                    >
                        <div className="relative overflow-hidden shadow-2xl">
                            <img
                                src="/mosaico-mustakis.png"
                                alt="mosaico fractal"
                                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
                            />
                            <h1 className="absolute top-2 left-2 text-gray-50 font-bold text-md bg-red-500 rounded-md px-2">
                                Mosaico Fractal
                            </h1>
                            <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl bg-black">
                                03
                            </h1>
                        </div>

                    </a>
                </div>
            </div>
        </div>
    );
};