import React from "react";

export default function AboutMeFull() {
    return (
        <section className="bg-gray-800 pb-40">
            <div className="max-w-6xl mx-auto h-48 bg-gray-800">
                <h1 className="text-gray-300 text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    Sobre mí.
                </h1>
            </div>
            <div className="-mt-10 bg-gray-900">
                <div className="text-container max-w-6xl mx-auto pt-20">
                    <p
                        className="text-gray-300 leading-loose text-lg md:text-3xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "3rem" }}>
                        Soy Cristopher. Me dedico al desarrollo de software, principalmente a
                        construir productos y aplicaciones web.
                    </p>
                    <p
                        className="text-gray-300 leading-loose text-md md:text-xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "2rem" }}>
                        Cuando estaba en la universidad, participaba en competencias internacionales de robótica.
                    </p>
                    <p
                        className="text-gray-300 leading-loose text-md md:text-xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "2rem" }}>
                        Aunque estudié Ingeniería Civil Mecánica, el mundo del desarrollo web me conquistó y desde el 2020
                        trabajo como freelance.
                    </p>
                    <p
                        className="text-gray-300 leading-loose text-md md:text-xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "2rem" }}>
                        Entre los años 2016 y 2019, dicté cursos de robótica educativa en Santiago en los programas de la Fundación Mustakis.
                        Me encanta el área de la educación, especialmente la educación en ciencias y tecnologías.
                    </p>
                    <p
                        className="text-gray-300 leading-loose text-md md:text-xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "2rem" }}>
                        En 2021, junto con dos amigos, decidimos desarrollar un simulador de robótica web accesible y orientado al aprendizaje. Nuestra idea fue seleccionada por CORFO y nos otorgaron un fondo semilla para su desarrollo.
                    </p>
                    <p
                        className="text-gray-300 leading-loose text-md md:text-xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "2rem" }}>
                        Logramos tener 400 usuarios provenientes de diferentes regiones de Chile, quienes usaban entusiasmadamente el simulador.
                        Pero decidí dedicarme al desarrollo de software que a los negocios, así que abandoné el proyecto.                    </p>
                    <p
                        className="text-gray-300 leading-loose text-md md:text-xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "2rem" }}>
                        En mis tiempos libres me dedico a desarrollar una nueva versión del simulador, para potenciar la enseñanza de la programación en los escolares.
                    </p>
                    <p
                        className="text-gray-300 leading-loose text-md md:text-xl font-semibold mx-4 pb-2 pt-2"
                        style={{ lineHeight: "2rem" }}>
                        En 2021, Fintual buscaba gente que supiera programar pero aún no se sintieran desarrolladores. Ofrecían un intensivo de desarrollo web en la Patagonia.
                        Postulé, quedé entre los 10 seleccionados de 1010 postulantes y me fui 3 meses a la maravillosa ciudad de Puerto Natales, a
                        perfeccionarme en el mundo del desarrollo.
                    </p>
                </div>
            </div>
        </section>
    );
};
