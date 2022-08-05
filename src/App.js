import "./styles.css";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Others from "./components/Others";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Others />
      <Contact />
      <Footer />
    </div>
  );
}
