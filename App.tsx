
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingWidget from './components/BookingWidget';
import WelcomeSection from './components/WelcomeSection';
import Experiences from './components/Experiences';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatConcierge from './components/ChatConcierge';
import Gallery from './components/Gallery';
import RoomsPage from './components/RoomsPage';
import BookingModal from './components/BookingModal';
import ContactPage from './components/ContactPage';
import BookingPage from './components/BookingPage';
import DiningPage from './components/DiningPage';
import BookTablePage from './components/BookTablePage';
import PackagesPage from './components/PackagesPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoomType, setSelectedRoomType] = useState('Standard Room');

  const handleBookRoom = (roomType: string) => {
    setSelectedRoomType(roomType);
    setIsBookingModalOpen(true);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'rooms':
        return <RoomsPage onBook={handleBookRoom} />;
      case 'packages':
        return <PackagesPage onBook={handleBookRoom} />;
      case 'contact':
        return <ContactPage />;
      case 'dining':
        return <DiningPage onNavigate={setCurrentPage} />;
      case 'book-table':
        return <BookTablePage onBack={() => setCurrentPage('dining')} />;
      case 'booking':
        return <BookingPage onBack={() => setCurrentPage('home')} />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <BookingWidget />
            <WelcomeSection />
            <Experiences />
            <Gallery />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-900">
      <Navbar onNavigate={setCurrentPage} />
      
      <main>
        {renderContent()}
      </main>
      
      <Footer />
      <ChatConcierge />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        roomType={selectedRoomType} 
      />
    </div>
  );
};

export default App;
