import { useState, useEffect } from "react";

import Header from "../sections/Header";
import AnnouncementBanner from "../sections/AnnouncementBanner";
import Hero from "../sections/Hero";
import LearningPath from "../sections/LearningPath";
import FreeCourse from "../sections/FreeCourse";
import FeaturedCourses from "../sections/FeaturedCourses";
import InstructorSection from "../sections/InstructorSection";
import AboutSection from "../sections/AboutSection";
import Footer from "../sections/Footer";

import TechParticles from "../components/TechParticles";
import WhatsAppWidget from "../components/WhatsAppWidget";

const HomePage = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen tech-grid">

      {/* Banner superior */}
      <AnnouncementBanner />

      {/* Header */}
      <Header cartCount={cartCount} />

      <main>

        {/* HERO */}
        <Hero />

        {/* Partículas tecnológicas */}
        <TechParticles />

        {/* Ruta de aprendizaje */}
        <LearningPath />

        {/* Curso gratis */}
        <FreeCourse />

        {/* Cursos destacados */}
        <FeaturedCourses onAddToCart={addToCart} />

        {/* Instructor */}
        <InstructorSection />

        {/* Sobre la academia */}
        <AboutSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Botón WhatsApp */}
      <WhatsAppWidget />

    </div>
  );
};

export default HomePage;