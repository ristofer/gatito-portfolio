import React from "react";

export default function AboutMeFull() {
    return (
        <section className="bg-white dark:bg-gray-800 pb-40">
            <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    Sobre mí.
                </h1>
            </div>
            <div className="bg-white -mt-10 dark:bg-gray-900">
                <div className="text-container max-w-6xl mx-auto pt-20">
                    <p
                        className="leading-loose text-xl md:text-3xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "3rem" }}>
                        Soy Cristopher. Me dedico al desarrollo de software, principalmente a
                        construir productos y aplicaciones web.
                    </p>
                    <p
                        className="leading-loose text-xl md:text-2xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "3rem" }}>
                        Cuando estaba en la universidad participaba en competencias internacionales de robótica.
                    </p>
                    <p
                        className="leading-loose text-xl md:text-2xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "3rem" }}>
                        Aunque estudié Ingeniería Civil Mecánica, el mundo del desarrollo web me conquistó y desde el 2020
                        me dedico a trabajar como freelance.
                    </p>
                    <p
                        className="leading-loose text-xl md:text-2xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "3rem" }}>
                        Entre los años 2016 y 2019 dictaba cursos de robótica educativa en Santiago en los programas de la Fundación Mustakis.
                        Me encanta el área de la educación, en especial la educación en ciencias y tecnologías.
                    </p>
                    <p
                        className="leading-loose text-xl md:text-2xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "3rem" }}>
                        El año 2021 junto con dos amigos decidimos desarrollar un simulador de robótica web, de fácil acceso y orientado al aprendizaje. Postulamos la idea a CORFO y nos asignaron un fondo
                        semilla para desarrollarla.
                    </p>
                    <p
                        className="leading-loose text-xl md:text-2xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "3rem" }}>
                        Logramos tener 400 usuarios provenientes de distintas regiones de Chile con un muy buen recibimiento.
                        Sin embargo, me di cuenta que prefería dedicarme al desarrollo que a los negocios por lo que desistí de seguir avanzando con el proyecto.
                    </p>
                    <p
                        className="leading-loose text-xl md:text-2xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "3rem" }}>
                        En mis tiempos libres me dedico a desarrollar una nueva versión de Gatitolabs, para potenciar la enseñanza de la programación en los escolares.
                    </p>
                    <p
                        className="leading-loose text-xl md:text-2xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "3rem" }}>
                        El 2021 Fintual buscaba gente que supiera programar pero aún no se sentían desarrolladores. Ofrecían un intensivo de desarrollo web en la Patagonia.
                        Postulé, quedé entre los 10 seleccionados de 1010 postulantes y me fui 3 meses a la maravillosa ciudad de Puerto Natales a 
                        perfeccionarme en el mundo del desarrollo.
                    </p>
                </div>
            </div>
        </section>
    );
};
