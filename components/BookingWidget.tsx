import React, { useState } from 'react';
import { Calendar, Users, ChevronDown, AlertCircle } from 'lucide-react';

const BookingWidget: React.FC = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Adultos');
  const [errors, setErrors] = useState<{ checkIn?: string; checkOut?: string }>({});

  const parseDate = (dateStr: string) => {
    if (!dateStr) return null;
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d);
  };

  const validate = () => {
    const newErrors: { checkIn?: string; checkOut?: string } = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const checkInDate = parseDate(checkIn);
    const checkOutDate = parseDate(checkOut);

    // Check-in Validation
    if (!checkIn) {
      newErrors.checkIn = 'Requerido';
    } else if (checkInDate && checkInDate < today) {
      newErrors.checkIn = 'La fecha no puede ser pasada';
    }

    // Check-out Validation
    if (!checkOut) {
      newErrors.checkOut = 'Requerido';
    } else if (checkInDate && checkOutDate && checkOutDate <= checkInDate) {
      newErrors.checkOut = 'Debe ser después de la entrada';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckAvailability = () => {
    if (validate()) {
      alert(`Verificando disponibilidad para ${guests} desde ${checkIn} hasta ${checkOut}`);
    }
  };

  const clearError = (field: 'checkIn' | 'checkOut') => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
      <div className="bg-white rounded-sm shadow-2xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          
          {/* Check-in */}
          <div className="space-y-2 relative">
            <label className="block text-sm font-medium text-slate-600">Entrada</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className={`h-5 w-5 ${errors.checkIn ? 'text-red-500' : 'text-slate-400'}`} />
              </div>
              <input
                type="text"
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                  clearError('checkIn');
                }}
                placeholder="Seleccionar Fecha"
                className={`block w-full pl-10 pr-3 py-3 bg-slate-50 border ${
                  errors.checkIn 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-slate-200 focus:ring-blue-500 focus:border-blue-500'
                } text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 sm:text-sm transition-colors`}
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => e.target.type = 'text'}
              />
            </div>
            {errors.checkIn && (
              <div className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center animate-pulse">
                <AlertCircle size={12} className="mr-1" /> {errors.checkIn}
              </div>
            )}
          </div>

          {/* Check-out */}
          <div className="space-y-2 relative">
            <label className="block text-sm font-medium text-slate-600">Salida</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className={`h-5 w-5 ${errors.checkOut ? 'text-red-500' : 'text-slate-400'}`} />
              </div>
              <input
                type="text"
                value={checkOut}
                onChange={(e) => {
                  setCheckOut(e.target.value);
                  clearError('checkOut');
                }}
                placeholder="Seleccionar Fecha"
                className={`block w-full pl-10 pr-3 py-3 bg-slate-50 border ${
                  errors.checkOut 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-slate-200 focus:ring-blue-500 focus:border-blue-500'
                } text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 sm:text-sm transition-colors`}
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => e.target.type = 'text'}
              />
            </div>
            {errors.checkOut && (
              <div className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center animate-pulse">
                <AlertCircle size={12} className="mr-1" /> {errors.checkOut}
              </div>
            )}
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-600">Huéspedes</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users className="h-5 w-5 text-slate-400" />
              </div>
              <select 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="block w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none"
              >
                <option>2 Adultos</option>
                <option>1 Adulto</option>
                <option>2 Adultos, 1 Niño</option>
                <option>2 Adultos, 2 Niños</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button 
              onClick={handleCheckAvailability}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 shadow-md transition-colors"
            >
              Consultar Disponibilidad
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingWidget;