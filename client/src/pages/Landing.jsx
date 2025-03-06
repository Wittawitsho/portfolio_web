import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-white">
      {/* กล่องหลัก */}
      <div className="w-full h-5/6 m-10 border-4 rounded-lg p-6 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-center h-full">
          {/* ข้อความ */}
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-3xl font-bold text-black md:text-5xl">
              Hello I’m <span className="block md:inline text-myblue">Wittawit Mokthong</span>
            </h1>
            <h1 className="text-xl font-bold text-black md:text-4xl">
              Computer Science Student
            </h1>
            <button className="w-full md:w-5/6 mt-4 px-6 py-2 bg-black text-white rounded-xl hover:bg-white hover:border-2 hover:text-black border-black transition-all">
              <Link to="/home" className="flex text-xl  justify-center md:justify-start">{'>'}</Link>
            </button>
          </div>
          <img 
            src="https://res.cloudinary.com/dtszdlqut/image/upload/v1738680159/PortWeb/ipt3mwyaetf6esptw1ov.png" 
            className="max-w-md hidden md:block" 
            alt="Profile"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Landing;
