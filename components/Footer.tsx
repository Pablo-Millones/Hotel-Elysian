import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 mr-2 text-blue-500">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                 <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
               </svg>
            </div>
            <span className="font-serif text-xl font-bold">Hotel Elysian</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Experimente el pináculo del lujo y la hospitalidad en el corazón de la ciudad. Su estancia inolvidable le espera.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-6">Enlaces Rápidos</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Prensa</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>

         {/* Empty Column for spacing/layout match */}
         <div className="hidden md:block"></div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold mb-6">Contáctenos</h4>
          <div className="text-sm text-slate-400 space-y-3">
            <p>123 Luxury Lane, Metropolis</p>
            <p>(123) 456-7890</p>
            <p>contact@hotelelysian.com</p>
          </div>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-slate-400 hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white"><Instagram size={20} /></a>
          </div>
        </div>

      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        &copy; 2024 Hotel Elysian. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;