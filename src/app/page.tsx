'use client'
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HomePage(){
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Reservation />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}