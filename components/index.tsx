import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import NavBar from "@/components/NavBar";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export function PackedComp() {
    return (
        <div className="overflow-hidden w-full">
            <Home />
            <About />
            <Skills />
            <Works />
            <Contact />
        </div>
    )
}

export { NavBar };