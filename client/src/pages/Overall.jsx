import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Overall = () => {
    return (
        <>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        </>
    );
};

export default Overall;