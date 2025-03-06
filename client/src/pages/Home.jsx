import React from "react";

const Home = () => {
    return (
        <>
            <div className="bg-white w-full h-screen min-h-screen">
                <div className="flex flex-col md:flex-row items-center justify-center h-full px-4 md:px-0">
                    {/* Left section */}
                    <div className="text-center md:text-left md:mr-10 w-full md:w-auto">
                        <div className="flex flex-col">
                            <div className="flex flex-col text-center md:text-left mb-8 md:mb-24">
                                <h1 className="text-3xl font-bold text-black md:text-5xl">
                                    Hello I’m <span className="block md:inline text-myblue">Wittawit Mokthong</span>
                                </h1>
                                <h1 className="text-xl font-bold text-black md:text-4xl mb-5">
                                    Computer Science Student
                                </h1>
                                <p className="text-sm md:text-base">
                                    &nbsp;&nbsp;I’m a third-year Computer Science student with a passion for web development. <br /> 
                                    I have hands-on experience in developing websites using HTML, CSS, <br /> and JavaScript, 
                                    as well as working with databases like SQL and frameworks <br />such as React, Node.js, Express, and TailwindCSS.
                                </p>
                            </div>
                            <div className="flex space-x-4 justify-center md:justify-start">
                                <div className="group border-2 rounded-md border-black p-4 text-center hover:bg-black relative">
                                    <img 
                                        src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989420/PortWeb/yht5dbxyrd7ua3zjeowv.png" 
                                        className="group-hover:hidden" 
                                        alt="github"
                                    />
                                    <img 
                                        src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989548/PortWeb/tditrs0tsyvzeylmlzht.png" 
                                        className="hidden group-hover:block" 
                                        alt="github-hover"
                                    />
                                </div>
                                <div className="group border-2 rounded-md border-black p-4 text-center hover:bg-black relative">
                                    <img 
                                        src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989420/PortWeb/jyon8rx57hgeiepctpro.png" 
                                        className="group-hover:hidden" 
                                        alt="facebook"
                                    />
                                    <img 
                                        src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989548/PortWeb/qxlefperlixfzlbflmcr.png" 
                                        className="hidden group-hover:block" 
                                        alt="facebook-hover"
                                    />
                                </div>
                                <div className="group border-2 rounded-md border-black p-4 text-center hover:bg-black relative">
                                    <img 
                                        src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989420/PortWeb/tmi3fqsk831lia8qnax9.png" 
                                        className="group-hover:hidden" 
                                        alt="line"
                                    />
                                    <img 
                                        src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989547/PortWeb/umfywaiieaqhyl6uefe9.png" 
                                        className="hidden group-hover:block" 
                                        alt="line-hover"
                                    />
                                </div>
                                <div className="group border-2 rounded-md border-black p-4 text-center hover:bg-black relative">
                                    <img 
                                        src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989420/PortWeb/cjwuukcgcmzv9kpqmld8.png" 
                                        className="group-hover:hidden" 
                                        alt="ig"
                                    />
                                    <img 
                                        src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989547/PortWeb/ahjdp0x1jshieqapen79.png" 
                                        className="hidden group-hover:block" 
                                        alt="ig-hover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

        
                    <div className="mt-8 md:mt-0 w-full md:w-auto">
                        <img 
                            src="https://res.cloudinary.com/dtszdlqut/image/upload/v1738680159/PortWeb/ipt3mwyaetf6esptw1ov.png" 
                            className="max-w-xs hidden md:block md:max-w-md mx-auto" 
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
