import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Check, Loader2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomType: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, roomType }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'form' | 'processing' | 'confirmation'>('form');

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      // Optional: Set default dates here if desired
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    // Simulate API call latency
    setTimeout(() => {
      setStep('confirmation');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 sm:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-fade-in-up">
        
        {/* Header */}
        <div className="bg-slate-900 p-5 flex justify-between items-center">
          <h3 className="text-white font-serif text-xl tracking-wide">
            {step === 'confirmation' ? 'Reserva Confirmada' : 'Complete Su Reserva'}
          </h3>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-slate-800"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          {step === 'processing' ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <Loader2 size={48} className="text-blue-600 animate-spin" />
              <p className="text-slate-600 font-medium">Procesando su reserva...</p>
            </div>
          ) : step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Selected Room Summary */}
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-xs text-blue-600 uppercase font-bold tracking-wider mb-1">Habitación Seleccionada</p>
                  <p className="text-lg font-serif font-bold text-slate-800">{roomType || 'Habitación Estándar'}</p>
                </div>
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Check size={20} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-slate-700">Entrada</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input 
                      type="date" 
                      required
                      className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
                      value={checkIn}
                      onChange={e => setCheckIn(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-slate-700">Salida</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input 
                      type="date" 
                      required
                      className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
                      value={checkOut}
                      onChange={e => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-slate-700">Huéspedes</label>
                <div className="relative">
                  <Users className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <select 
                    className="block w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none transition-all"
                    value={guests}
                    onChange={e => setGuests(e.target.value)}
                  >
                    <option value="1">1 Adulto</option>
                    <option value="2">2 Adultos</option>
                    <option value="3">2 Adultos, 1 Niño</option>
                    <option value="4">2 Adultos, 2 Niños</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                 <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Detalles del Huésped</h4>
                 <div className="grid grid-cols-1 gap-4">
                   <input 
                     type="text" 
                     placeholder="Nombre Completo"
                     required
                     className="block w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all placeholder:text-slate-400"
                     value={name}
                     onChange={e => setName(e.target.value)}
                   />
                   <input 
                     type="email" 
                     placeholder="Correo Electrónico"
                     required
                     className="block w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all placeholder:text-slate-400"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                   />
                 </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 mt-2 flex items-center justify-center"
              >
                Confirmar Reserva
              </button>
            </form>
          ) : (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Check size={40} />
              </div>
              <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3">¡Reserva Exitosa!</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Su reserva para la <strong>{roomType}</strong> ha sido confirmada. 
                <br />Se ha enviado un correo de confirmación a <span className="font-medium text-slate-800">{email}</span>.
              </p>
              <button 
                onClick={onClose}
                className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-all shadow-md"
              >
                Volver al Hotel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;