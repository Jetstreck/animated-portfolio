// import Test from "./Test"
import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portofolio from "./components/portofolio/Portofolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section>
      <Services />
    </section>
    <section id="Portofolio">
      <Parallax type="portofolio"/>
    </section>
    <Portofolio />
    <section id="Contact">
      <Contact />
    </section>
    {/* <Test/>
    <Test/> */}
  </div>;
};

export default App;
