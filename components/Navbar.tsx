import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string, href: string) => {
    // If it's a page navigation (not an anchor on the same page), call onNavigate
    if (page !== 'home' || href.startsWith('#')) {
       // For internal anchors on home page, we might want to navigate to home first then scroll
       if (href.startsWith('#')) {
         onNavigate('home');
         
         // Allow time for render then scroll - simple implementation
         setTimeout(() => {
           if (href === '#') {
             window.scrollTo({ top: 0, behavior: 'smooth' });
           } else {
             const element = document.querySelector(href);
             element?.scrollIntoView({ behavior: 'smooth' });
           }
         }, 100);
       } else {
         onNavigate(page);
         window.scrollTo(0, 0);
       }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Inicio', page: 'home', href: '#' },
    { name: 'Habitaciones', page: 'rooms', href: '/rooms' },
    { name: 'Paquetes', page: 'packages', href: '/packages' },
    { name: 'Restaurantes', page: 'dining', href: '/dining' },
    { name: 'Spa', page: 'home', href: '#spa' },
    { name: 'Contacto', page: 'contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick('home', '#')}
          >
            {/* Logo Icon Placeholder - stylized hourglass or shield */}
            <div className={`w-8 h-8 mr-2 ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                 <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
               </svg>
            </div>
            <span className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Hotel Elysian
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page, link.href)}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('booking', '/booking')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 text-sm font-medium transition-colors shadow-lg shadow-blue-600/20"
            >
              Reservar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page, link.href)}
                className="block w-full text-left px-3 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4">
              <button 
                onClick={() => handleNavClick('booking', '/booking')}
                className="w-full bg-blue-600 text-white px-4 py-3 font-medium"
              >
                Reservar
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;