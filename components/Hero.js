import React from "react";
import userData from "@constants/data";

export default function Hero() {
    return (
        <div className="flex flex-row justify-center lg:justify-between bg-purple-500 dark:bg-purple-800">
            <div className="hidden lg:flex w-1/3">

            </div>
            <div className="w-full lg:flex lg:flex-col md:w-1/3 text-center md:text-left mx-auto lg:p-20">
                <h1 className="text-4xl md:text-8xl font-bold text-gray-300 dark:text-gray-200 my-2">
                    Fullstack Dev
                </h1>
                <h1 className="text-4xl md:text-8xl font-bold text-gray-300 dark:text-gray-200 my-2">
                    Cristopher
                </h1>
                <h1 className="text-4xl md:text-8xl font-bold text-gray-300 dark:text-gray-200 my-2">
                    Gómez
                </h1>
            </div>
            <div className="hidden lg:p-20 lg:flex w-1/2 md:w-1/3 justify-start center-align">
                <div className="w-1/2">
                    <img src={userData.avatarUrl} alt="cris" 
                    className="transform hover:scale-150 transition duration-500 ease-out shadow rounded-full" />
                </div>
            </div>
        </div>
    );
};