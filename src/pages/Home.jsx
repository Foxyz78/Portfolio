import About from "./About";
import Hero from "../components/Hero";
import Project from "./Projects";
import Footer from "../components/Footer";
import Contact from "./Contact";
import Skills from "./Skills";

const Home = () => {
    return (
        <>
            <Hero />
            <Skills />
            <Project />
            {/* <About /> */}
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
