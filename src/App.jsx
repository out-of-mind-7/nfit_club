import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTA from "./components/Cta";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Transformations from "./components/Transformations";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import WhyChoose from "./components/Whychoose";

export default function App() {
  return (
    <div className="bg-bg text-white">
      <Navbar />
      <Hero />
      <Cta />
      <Services />
      <Whychoose/>
      <Pricing />
      <Transformation />
      <Testimonials />
      <Contact />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918111831107?text=Hi%20Nfit%20Club%2C%20I%20saw%20your%20website%20and%20I%27m%20interested%20in%20joining.%20Can%20you%20share%20pricing%20and%20timing%20details%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        💬
      </a>
    </div>
  );
}