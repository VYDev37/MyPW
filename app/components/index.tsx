import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Home from "@/app/components/Home";
import NavBar from "@/app/components/NavBar";
import Skills from "@/app/components/Skills";
import Works from "@/app/components/Works";

export function PackedComp() {
    return (
        <>
            <Home />
            <About />
            <Skills />
            <Works />
            <Contact />
        </>
    )
}

export { NavBar };