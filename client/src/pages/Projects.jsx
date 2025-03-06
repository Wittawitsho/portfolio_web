import React from "react";

const Projects = () => {
    return (
        <>
        <div className="bg-white w-full min-h-screen flex flex-col items-center p-20">
            <h1 className="font-bold text-3xl mb-20">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl w-full rounded-lg gap-10">
            <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left space-y-6">
                    <h1 className="text-3xl font-bold text-black">01</h1>
                    <h1 className="text-3xl font-bold text-black">Concert Website</h1>
                    <p className="text-sm text-black max-w-lg">
                        I developed a full-stack concert ticket booking website using React, Node.js, Express.js, Prisma, MySQL,
                        Stripe API, and TailwindCSS. The platform enables users to browse events, select tickets, and complete
                        secure payments via Stripe API. I built RESTful APIs for managing ticket sales and user data, optimized
                        database performance with Prisma and MySQL, and designed a responsive UI with React and TailwindCSS 
                        to enhance user experience.
                    </p>
                </div>
                <div className="flex justify-center w-full h-full">
                    <img 
                        src="https://res.cloudinary.com/dtszdlqut/image/upload/v1738641413/git/ymihyp5dbb22ot6h6gab.png" 
                        className="h-[350px] rounded-lg border-3 border-black"
                        alt="concert"
                    />
                </div>

                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl w-full rounded-lg gap-10 mt-48">
            <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left space-y-6">
                    <h1 className="text-3xl font-bold text-black">02</h1>
                    <h1 className="text-3xl font-bold text-black">Concert Website</h1>
                    <p className="text-sm text-black max-w-lg">
                        I developed a full-stack concert ticket booking website using React, Node.js, Express.js, Prisma, MySQL,
                        Stripe API, and TailwindCSS. The platform enables users to browse events, select tickets, and complete
                        secure payments via Stripe API. I built RESTful APIs for managing ticket sales and user data, optimized
                        database performance with Prisma and MySQL, and designed a responsive UI with React and TailwindCSS 
                        to enhance user experience.
                    </p>
                </div>

                <div className="flex justify-center w-full h-full">
                    <img 
                        src="https://res.cloudinary.com/dtszdlqut/image/upload/v1738641413/git/ymihyp5dbb22ot6h6gab.png" 
                        className="h-[350px] rounded-lg border-3 border-black"
                        alt="concert"
                    />
                </div>

                
            </div>
        </div>
        </>
    );
};

export default Projects;
