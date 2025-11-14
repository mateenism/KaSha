import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Weddings from './pages/Weddings';
import Corporate from './pages/Corporate';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import CostCalculator from './pages/CostCalculator';
import Team from './pages/Team';
import Career from './pages/Career';
import Events from './pages/Events';
import { ThemeProvider } from './contexts/ThemeContext';
import FloatingActionButton from './components/FloatingActionButton';
import AiChatModal from './components/AiChatModal';
import DiscountModal from './components/DiscountModal';
import EnquiryFormModal from './components/EnquiryFormModal';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isChatModalOpen, setIsChatModalOpen] = React.useState(false);
  const [isDiscountModalOpen, setIsDiscountModalOpen] = React.useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = React.useState(false);

  React.useEffect(() => {
    const hasShownModal = sessionStorage.getItem('discountModalShown');
    if (!hasShownModal) {
        const timer = setTimeout(() => {
            setIsDiscountModalOpen(true);
            sessionStorage.setItem('discountModalShown', 'true');
        }, 2500); 
        return () => clearTimeout(timer);
    }
  }, []);

  const handleDiscountModalClose = () => {
      setIsDiscountModalOpen(false);
      setIsEnquiryModalOpen(true);
  };

  const handleDiscountModalAccept = () => {
      setIsDiscountModalOpen(false);
      window.location.hash = '/contact';
  };

  const handleEnquiryModalClose = () => {
      setIsEnquiryModalOpen(false);
  };

  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/weddings" element={<Weddings />} />
              <Route path="/corporate-events" element={<Corporate />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cost-calculator" element={<CostCalculator />} />
              <Route path="/team" element={<Team />} />
              <Route path="/career" element={<Career />} />
              <Route path="/events/:city" element={<Events />} />
            </Routes>
          </main>
          <Footer />
          <FloatingActionButton onChatClick={() => setIsChatModalOpen(true)} />
          <AiChatModal isOpen={isChatModalOpen} onClose={() => setIsChatModalOpen(false)} />
          <DiscountModal 
              isOpen={isDiscountModalOpen} 
              onClose={handleDiscountModalClose} 
              onAccept={handleDiscountModalAccept} 
          />
          <EnquiryFormModal 
              isOpen={isEnquiryModalOpen} 
              onClose={handleEnquiryModalClose} 
          />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;