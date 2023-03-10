import React from "react";
import userData from "@constants/data";

export default function Hero() {
    return (
        <div className="flex flex-row justify-center lg:justify-between bg-purple-800">
            <div className="hidden lg:flex w-1/3">

            </div>
            <div className="w-full lg:flex lg:flex-col lg:w-1/3 lg:text-left text-center mx-auto lg:p-20">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-400 my-2">
                    Full Stack Dev
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-red-200 my-2">
                    Cristopher
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-blue-200 my-2">
                    Gómez
                </h1>
            </div>
            <div className="hidden p-20 lg:flex w-1/3 justify-start center-align">
                <div className="w-full">
                    <img src={userData.avatarUrl} alt="cris" 
                    className="transform hover:scale-150 transition duration-500 ease-out shadow rounded-full mx-20 xl:mx-2" />
                </div>
            </div>
        </div>
    );
};