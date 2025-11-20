import React from 'react';
import { Wifi, BedDouble, Building, Users, Monitor, Sun, Armchair, Bath, Wine, ArrowRight } from 'lucide-react';

interface RoomsPageProps {
  onBook: (roomType: string) => void;
}

const RoomsPage: React.FC<RoomsPageProps> = ({ onBook }) => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading */}
        <div className="text-center mb-12">
          <p className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nuestras Habitaciones y Suites</p>
          <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">
            Experimente un confort inigualable y encuentre su estancia perfecta con nosotros. Cada espacio está diseñado para ser su santuario sereno.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-10">
          
          {/* Standard Room Card */}
          <div className="bg-white rounded-sm shadow-lg overflow-hidden transition-shadow hover:shadow-2xl group">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/5 relative overflow-hidden">
                <div 
                  className="w-full h-64 lg:h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTVgYsZ__QYMqr7XOvuPjVhD8T1YoIH-lzduSBv5KxrNX6EK7NTv7O_COLLIDibj5N2qpWeyFsSggvkXZ7pg9vGaU2olNY0C4LctLkux8gVyWHTNuYBJ9p4RYmzd1d36cT5qeEhydHCgzgT-Kme93G8KQKKpuj0TFqkwJ1fZ7c3a3qTSvUEG279IhReiRn2f6RGt5Y_yMFgcrEUhS2iDCRIm8oBuc2Phgdn2N-gkymPgbL3CTurYB9DEw-zQKknsArNbhTtwwFGHs")' }}
                ></div>
              </div>
              <div className="flex-1 p-6 md:p-8 flex flex-col">
                <div className="mb-4">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">Habitación Estándar</h3>
                  <p className="text-slate-600">Una combinación perfecta de confort y valor, con comodidades modernas esenciales para una estancia relajante y productiva.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-500 border-t border-b border-slate-100 py-4 mb-6">
                  <div className="flex items-center gap-2"><Wifi size={18} className="text-blue-600" /><span>Wifi</span></div>
                  <div className="flex items-center gap-2"><BedDouble size={18} className="text-blue-600" /><span>Cama Queen</span></div>
                  <div className="flex items-center gap-2"><Building size={18} className="text-blue-600" /><span>Vista a la Ciudad</span></div>
                  <div className="flex items-center gap-2"><Users size={18} className="text-blue-600" /><span>2 Huéspedes</span></div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-lg font-bold text-slate-900">Desde <span className="text-blue-600">$199/noche</span></p>
                  <button 
                    onClick={() => onBook('Standard Room')}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 font-medium text-sm transition-colors flex items-center justify-center shadow-lg shadow-blue-600/20"
                  >
                    Ver Detalles y Reservar <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Room Card */}
          <div className="bg-white rounded-sm shadow-lg overflow-hidden transition-shadow hover:shadow-2xl group">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/5 relative overflow-hidden">
                <div 
                  className="w-full h-64 lg:h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVHrCmxmC3h246hzp8QGHg6e5ov4tLNplyKZOHBeJ86-yQDrnoENMRiU4W0ZbZRjGhC9Y3_QwyYicH_HEPbkslsCbMjyU1RoxifjRCqPqLo5z_UTUhM5inmXXIhtQhbfr0sA7gClVMak9lPp6gmvt9gknZl2wTuLNwleuNp0U6t_PzvW4m75vLvqvsAwedfTHh2UfJJMcrEFcpuPR6gA3bZMRWyluxwtl4gjpkh820n1tUrge2IwFantzYY0Ro1oTQ5vB8cNYQSRo")' }}
                ></div>
              </div>
              <div className="flex-1 p-6 md:p-8 flex flex-col">
                <div className="mb-4">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">Habitación Ejecutiva</h3>
                  <p className="text-slate-600">Disfrute de espacio extra y comodidades mejoradas, diseñadas para viajeros que buscan un nivel superior de confort y conveniencia.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-500 border-t border-b border-slate-100 py-4 mb-6">
                  <div className="flex items-center gap-2"><Wifi size={18} className="text-blue-600" /><span>Wifi Premium</span></div>
                  <div className="flex items-center gap-2"><BedDouble size={18} className="text-blue-600" /><span>Cama King</span></div>
                  <div className="flex items-center gap-2"><Monitor size={18} className="text-blue-600" /><span>Escritorio</span></div>
                  <div className="flex items-center gap-2"><Sun size={18} className="text-blue-600" /><span>Balcón</span></div>
                  <div className="flex items-center gap-2"><Users size={18} className="text-blue-600" /><span>3 Huéspedes</span></div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-lg font-bold text-slate-900">Desde <span className="text-blue-600">$299/noche</span></p>
                  <button 
                    onClick={() => onBook('Executive Room')}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 font-medium text-sm transition-colors flex items-center justify-center shadow-lg shadow-blue-600/20"
                  >
                    Ver Detalles y Reservar <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* VIP Suite Card */}
          <div className="bg-white rounded-sm shadow-lg overflow-hidden transition-shadow hover:shadow-2xl group">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/5 relative overflow-hidden">
                <div 
                  className="w-full h-64 lg:h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUIuX92EVGZjtVSLV428Q1QcqR8_qAeAcrkK85eUEXkTQb2i7l4JQDVWHCnXgOhw6GK3MIiQDM8Uflx85q7H0B4eYlBbLxbMyOwBURwKaqEWad7Qu9lvLVgkWF-PoEoM3S7oGNGOgnWZvKViYesI_7-cUU3HABv3gFCcyCyuEy6AX8KETUG-iPCqkPOH9NVADtjzS2oArKH0G9YrWhIPUwOCAZF43omDLU3VBt-845DgMvroOX4bTRFZu3ZEv41mJMrWJzNHIxQb4")' }}
                ></div>
              </div>
              <div className="flex-1 p-6 md:p-8 flex flex-col">
                <div className="mb-4">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">Suite VIP</h3>
                  <p className="text-slate-600">Disfrute del máximo lujo con vistas panorámicas al océano, una sala de estar separada y servicios exclusivos de primer nivel.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-500 border-t border-b border-slate-100 py-4 mb-6">
                  <div className="flex items-center gap-2"><Armchair size={18} className="text-blue-600" /><span>Sala de Estar</span></div>
                  <div className="flex items-center gap-2"><Bath size={18} className="text-blue-600" /><span>Bañera</span></div>
                  <div className="flex items-center gap-2"><Sun size={18} className="text-blue-600" /><span>Vista al Océano</span></div>
                  <div className="flex items-center gap-2"><Wine size={18} className="text-blue-600" /><span>Minibar</span></div>
                  <div className="flex items-center gap-2"><Users size={18} className="text-blue-600" /><span>4 Huéspedes</span></div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-lg font-bold text-slate-900">Desde <span className="text-blue-600">$499/noche</span></p>
                  <button 
                    onClick={() => onBook('VIP Suite')}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 font-medium text-sm transition-colors flex items-center justify-center shadow-lg shadow-blue-600/20"
                  >
                    Ver Detalles y Reservar <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoomsPage;