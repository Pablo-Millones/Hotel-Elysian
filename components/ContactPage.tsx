import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert("Gracias por su mensaje. Nos pondremos en contacto con usted en breve.");
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between gap-3 mb-8">
          <p className="font-serif text-4xl md:text-5xl font-bold text-slate-900">Contacto y Ubicación</p>
        </div>

        {/* Map Section */}
        <div className="w-full mb-8">
          <div 
            className="w-full aspect-video bg-slate-200 rounded-xl shadow-md bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2831&auto=format&fit=crop")' }}
            role="img"
            aria-label="Mapa mostrando la ubicación del hotel"
          >
             <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold flex items-center gap-2">
                  <MapPin size={16} className="text-blue-600" />
                  Hotel Elysian, Metropolis
                </span>
             </div>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-start gap-4">
            <div className="mt-1 bg-blue-50 p-2 rounded-full">
              <MapPin className="text-blue-600 w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium mb-1">Dirección</p>
              <p className="text-slate-900 font-medium">123 Luxury Lane,<br/>Metropolis, 12345</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-start gap-4">
            <div className="mt-1 bg-blue-50 p-2 rounded-full">
              <Phone className="text-blue-600 w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium mb-1">Número de Teléfono</p>
              <a href="tel:+1234567890" className="text-slate-900 font-medium hover:text-blue-600 transition-colors">
                +1 (123) 456-7890
              </a>
              <p className="text-xs text-slate-400 mt-1">Disponible 24/7</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-start gap-4">
            <div className="mt-1 bg-blue-50 p-2 rounded-full">
              <Mail className="text-blue-600 w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium mb-1">Correo Electrónico</p>
              <a href="mailto:contact@hotelelysian.com" className="text-slate-900 font-medium hover:text-blue-600 transition-colors">
                contact@hotelelysian.com
              </a>
              <p className="text-xs text-slate-400 mt-1">Respondemos en 24 horas</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 my-10"></div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-2">Envíenos una Consulta</h2>
            <p className="text-slate-600">¿Tiene alguna pregunta o solicitud especial? Nos encantaría saber de usted.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="full-name" className="block text-sm font-semibold text-slate-700">Nombre Completo</label>
                <input 
                  type="text" 
                  id="full-name" 
                  required
                  className="block w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all"
                  placeholder="Juan Pérez"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="block w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all"
                  placeholder="juan@ejemplo.com"
                />
              </div>
            </div>

            <div className="mb-6 space-y-2">
              <label htmlFor="subject" className="block text-sm font-semibold text-slate-700">Asunto</label>
              <input 
                type="text" 
                id="subject" 
                required
                className="block w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all"
                placeholder="Consulta General"
              />
            </div>

            <div className="mb-8 space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700">Mensaje</label>
              <textarea 
                id="message" 
                rows={5}
                required
                className="block w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                placeholder="¿Cómo podemos ayudarle?"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button 
                type="submit"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-blue-600/20 w-full md:w-auto"
              >
                <span>Enviar Mensaje</span>
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;