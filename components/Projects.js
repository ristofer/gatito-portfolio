import React from "react";
import userData from "@constants/data";

export default function Projects() {
    return (
        <section className="bg-purple-500 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto h-48 bg-purple-500 dark:bg-gray-800">
                <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    Proyectos
                </h1>
            </div>
            <div className="bg-gray-500 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 pl-4 pr-4 py-20 pb-40">
                    {userData.projects.map((proj, idx) => (
                        <ProjectCard
                            title={proj.title}
                            link={proj.link}
                            imgUrl={proj.imgUrl}
                            number={`${idx + 1}`}
                        />

                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ title, link, imgUrl, number }) => {
    return (
        <a href={link} className="w-full block shadow-2xl">
            <div className="relative overflow-hidden rounded-3xl">
                <div className="h-80 object-cover">
                    <img
                        src={imgUrl}
                        alt="portfolio"
                        className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
                    />
                </div>
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
                    {title}
                </h1>
                <h1 className="bg-black absolute p-2 bottom-10 left-10 text-gray-50 font-bold text-xl rounded-full">
                    {number.length === 1 ? "0" + number : number}
                </h1>
            </div>
        </a>
    );
};