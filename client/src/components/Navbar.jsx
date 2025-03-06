import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // state เปิด/ปิดเมนู

    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-black font-bold">
                <h1 className="text-2xl">MyPortfolio</h1>
                <div className="hidden md:flex space-x-6">
                    <Link to="/home" className="hover:text-gray-400">About</Link>
                    <Link to="/home" className="hover:text-gray-400">Skills</Link>
                    <Link to="/home" className="hover:text-gray-400">Projects</Link>
                    <Link to="/home" className="hover:text-gray-400">Contact</Link>
                    <Link to="/home" className="hover:text-gray-400">Mode</Link>
                </div>

                <button 
                    className="block md:hidden text-2xl" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? '✖' : '☰'} 
                </button>
            </div>

            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center py-4 space-y-4 md:hidden">
                    <Link to="/home" className="hover:text-gray-400">About</Link>
                    <Link to="/home" className="hover:text-gray-400">Skills</Link>
                    <Link to="/home" className="hover:text-gray-400">Projects</Link>
                    <Link to="/home" className="hover:text-gray-400">Contact</Link>
                    <Link to="/home" className="hover:text-gray-400">Mode</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
