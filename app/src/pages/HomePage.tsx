import AboutSection from "@/sections/AboutSection";
import { useState, useEffect } from 'react';
import Header from '../sections/Header';
import AnnouncementBanner from '../sections/AnnouncementBanner';
import HeroSlider from '../sections/HeroSlider';
import FeaturedCourses from '../sections/FeaturedCourses';
import Testimonials from '../sections/Testimonials';
import Footer from '../sections/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import LearningPath from "../sections/LearningPath";
import Instructor from "../sections/Instructor";

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
    <div className="min-h-screen bg-slate-900">
      <AnnouncementBanner />
      <Header cartCount={cartCount} />

      <main>
        <HeroSlider />
        <LearningPath />
        <FeaturedCourses onAddToCart={addToCart} />
        <Instructor />
        <Testimonials />
        <AboutSection />
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default HomePage;