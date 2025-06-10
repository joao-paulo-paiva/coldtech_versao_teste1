import { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';
import ContactModal from '../components/ContactModal';


const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />
      <HeroSection />
      
      <main id="main-content">
        <ServicesSection />
        <CTASection openModal={openModal} />
      </main>

      {isModalOpen && <ContactModal closeModal={closeModal} />}
      
    </>
  );
};

export default LandingPage;
