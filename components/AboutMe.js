import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
    return (
        <section className="bg-white dark:bg-gray-800 pb-40">
            <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                <h1 className="text-5xl md:text-9xl text-gray-300 font-bold py-20 text-center md:text-left">
                    Sobre mí.
                </h1>
            </div>
            <div className="bg-white -mt-10 dark:bg-gray-900">
                <div className="text-container max-w-6xl mx-auto pt-20">
                    <p
                    className="leading-loose text-2xl md:text-4xl font-semibold mx-4"
                    style={{ lineHeight: "3rem"}}>
                        Soy Cristopher. Me dedico al desarrollo de software, principalmente a
                        construir productos y aplicaciones web.
                    </p>
                </div>
            </div>
        </section>
    );
};