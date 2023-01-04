import React from "react";

export default function CardsTest({ title, body, imgUrl }) {
    return (
        <div className="transform hover:scale-110 max-w-6xl mx-auto w-full lg:flex flex-row">
            <div className="h-48 lg:h-auto lg:w-1/3 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url("/gatitolabs.png")` }} title="Woman holding a mug">
            </div>
            <div className="w-2/3 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{body}</p>
                </div>
            </div>
        </div>
    );
};