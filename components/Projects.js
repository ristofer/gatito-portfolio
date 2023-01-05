import React from "react";
import userData from "@constants/data";

export default function Projects() {
    return (
        <section className="bg-gray-800">
            <div className="max-w-6xl mx-auto h-48 bg-gray-800">
                <h1 className="text-gray-300 text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    Proyectos
                </h1>
            </div>
            <div className="bg-gray-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 pl-4 pr-4 py-20 pb-40">
                    {userData.projects.map((proj, idx) => (
                        <ProjectCard
                            title={proj.title}
                            link={proj.link}
                            imgUrl={proj.imgUrl}
                            number={`${idx + 1}`}
                            key={idx}
                        />

                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ title, link, imgUrl, number }) => {
    return (
            <div className="relative overflow-hidden rounded-3xl">
                <div className="h-46 md:h-80 object-cover">
                    <img
                        src={imgUrl}
                        alt="portfolio"
                        className="object-cover h-full w-full"
                    />
                </div>
                <a 
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    >
                <h1 className="transform hover:scale-125 transition duration-2000 ease-out absolute top-10 left-2 md:left-10 text-gray-50 font-bold text-md md:text-xl bg-blue-500 rounded-md px-2">
                    {title}
                </h1>
                </a>
            </div>
    );
};