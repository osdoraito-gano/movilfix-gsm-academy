import AboutSection from "@/sections/AboutSection";
import { useState, useEffect } from 'react';
import Header from '../sections/Header';
import AnnouncementBanner from '../sections/AnnouncementBanner';
import HeroSlider from '../sections/HeroSlider';
import LearningPath from "../sections/LearningPath";
import InstructorSection from "../sections/InstructorSection";
import FeaturedCourses from '../sections/FeaturedCourses';
import Testimonials from '../sections/Testimonials';
import Footer from '../sections/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import Instructor from "../sections/Instructor";
import FreeCourse from "../sections/FreeCourse";
import TechnicianMindset from "../sections/TechnicianMindset";
import TechParticles from "../components/TechParticles";
import ScrollIndicator from "../components/ScrollIndicator";


const HomePage = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(cart.length);
  }, []);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen tech-grid">
      <TechParticles />
      <AnnouncementBanner />
      <Header cartCount={cartCount} />
     

      <main>
        <HeroSlider />
        <ScrollIndicator />
        <TechnicianMindset />
        <LearningPath />
        <FreeCourse />
        <InstructorSection />
        <FeaturedCourses onAddToCart={addToCart} />
        <Testimonials />
        <AboutSection />
        <Instructor />
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default HomePage;