import About from "../components/About";
import Departments from "../components/Departments";
import Hero from "../components/Hero";
import Instructor from "../components/Instructor";
import Navbar from "../components/Navbar";
import Cta from "../components/Cta";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Departments />
            <Instructor />
            <Cta />
            <Footer />
        </div>

    );
}

export default Home;
