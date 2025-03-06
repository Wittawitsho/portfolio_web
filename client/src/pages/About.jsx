import React from "react";

const About = () => {
    return (
        <div className="bg-white w-full min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl w-full rounded-lg gap-10">
                <div className="flex justify-center">
                    <img 
                        src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739990980/PortWeb/kaabi2rkvyivrh0txztb.png" 
                        className="w-4/6 md:w-full max-w-sm"
                        alt="Profile2"
                    />
                </div>

                <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left space-y-6">
                    <h1 className="text-3xl font-bold text-black">About</h1>
                    <p className="text-sm md:text-lg text-black max-w-lg">
                        I’m a third-year Computer Science student with a passion for web development. 
                        I have hands-on experience in developing websites using HTML, CSS, and JavaScript, 
                        as well as working with databases like SQL and frameworks such as React, Node.js, Express, and TailwindCSS.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
