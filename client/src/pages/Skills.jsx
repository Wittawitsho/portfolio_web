import React from "react";

const Skills = () => {
    return (
        <>
        <div className="bg-white w-full min-h-screen flex flex-col items-center gap-24 p-6 sm:p-10 lg:p-20">
            <h1 className="font-bold text-3xl">My Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-20 font-bold">
                <div className="border-3 border-black p-6 sm:p-8 lg:p-12 flex items-center justify-center hover:text-white hover:bg-black">Java</div>
                <div className="border-3 border-black p-6 sm:p-8 lg:p-12 flex items-center justify-center hover:text-white hover:bg-black">Javascript</div>
                <div className="border-3 border-black p-6 sm:p-8 lg:p-12 flex items-center justify-center hover:text-white hover:bg-black">Python</div>
                <div className="border-3 border-black p-6 sm:p-8 lg:p-12 flex items-center justify-center hover:text-white hover:bg-black">C++</div>
                <div className="border-3 border-black p-6 sm:p-8 lg:p-12 flex items-center justify-center hover:text-white hover:bg-black">SQL</div>
                <div className="border-3 border-black p-6 sm:p-8 lg:p-12 flex items-center justify-center hover:text-white hover:bg-black">React</div>
                <div className="border-3 border-black p-6 sm:p-8 lg:p-12 flex items-center justify-center hover:text-white hover:bg-black">Node.js</div>
                <div className="border-3 border-black p-6 sm:p-8 lg:p-12 flex items-center justify-center hover:text-white hover:bg-black">TailwindCSS</div>
                <div className="border-3 border-black p-6 sm:p-8 lg:p-12 flex items-center justify-center hover:text-white hover:bg-black">Express</div>
                <div className="border-3 border-black p-6 sm:p-8 lg:p-12 flex items-center justify-center hover:text-white hover:bg-black">HTML/CSS</div>
            </div>
        </div>
        </>
    );
};

export default Skills;
