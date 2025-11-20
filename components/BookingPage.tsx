import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, User, Baby, BedDouble, Building, Waves, Trees, Check, ArrowLeft } from 'lucide-react';

const BookingPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  // Initial mock dates: Aug 5 - Sep 7, 2024
  const [checkIn, setCheckIn] = useState<Date | null>(new Date(2024, 7, 5)); 
  const [checkOut, setCheckOut] = useState<Date | null>(new Date(2024, 8, 7));
  const [selectedRoom, setSelectedRoom] = useState<string>('Habitación King Deluxe');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const rooms = [
    {
      id: 'deluxe',
      name: 'Habitación King Deluxe',
      price: 299,
      desc: 'Una habitación espaciosa con una cama king-size y vistas impresionantes de la ciudad.',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
      features: [
        { icon: <BedDouble size={16} />, text: 'Cama King' },
        { icon: <Building size={16} />, text: 'Vista a la Ciudad' }
      ]
    },
    {
      id: 'ocean',
      name: 'Suite con Vista al Océano',
      price: 499,
      desc: 'Disfrute de nuestra suite premium con vistas panorámicas al océano.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
      features: [
        { icon: <BedDouble size={16} />, text: 'Cama King' },
        { icon: <Waves size={16} />, text: 'Vista al Océano' }
      ]
    },
    {
      id: 'family',
      name: 'Habitación Doble Familiar',
      price: 249,
      desc: 'Perfecta para familias, con dos cómodas camas individuales.',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop',
      features: [
        { icon: <BedDouble size={16} />, text: 'Camas Dobles' },
        { icon: <Trees size={16} />, text: 'Vista al Jardín' }
      ]
    }
  ];

  const currentRoom = rooms.find(r => r.name === selectedRoom) || rooms[0];
  
  // Calculate nights
  const nights = checkIn && checkOut 
    ? Math.max(1, Math.round((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)))
    : 0;

  const subtotal = currentRoom.price * nights;
  const taxes = subtotal * 0.12;
  const total = subtotal + taxes;

  const handleDateClick = (date: Date) => {
    // Reset time to midnight to ensure correct comparisons
    const clickedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (!checkIn || (checkIn && checkOut)) {
      // Start new selection
      setCheckIn(clickedDate);
      setCheckOut(null);
    } else if (checkIn && !checkOut) {
      // Complete selection
      if (clickedDate.getTime() < checkIn.getTime()) {
        setCheckIn(clickedDate);
      } else if (clickedDate.getTime() > checkIn.getTime()) {
        setCheckOut(clickedDate);
      }
    }
  };

  const isSelected = (date: Date) => {
    if (!checkIn) return false;
    return date.getTime() === checkIn.getTime() || (checkOut && date.getTime() === checkOut.getTime());
  };

  const isInRange = (date: Date) => {
    if (!checkIn || !checkOut) return false;
    return date.getTime() > checkIn.getTime() && date.getTime() < checkOut.getTime();
  };

  const isStart = (date: Date) => checkIn && date.getTime() === checkIn.getTime();
  const isEnd = (date: Date) => checkOut && date.getTime() === checkOut.getTime();

  const renderCalendarDay = (day: number, month: number, year: number) => {
    const date = new Date(year, month, day);
    const isPast = date < new Date(2024, 7, 1); // Assume today is Aug 1st for demo
    
    const selected = isSelected(date);
    const inRange = isInRange(date);
    const start = isStart(date);
    const end = isEnd(date);
    const hasRange = checkIn && checkOut;

    let wrapperClasses = "w-full h-10 flex items-center justify-center ";
    let buttonClasses = "h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ";

    // Styling logic for "connected" range look
    if (inRange) {
      wrapperClasses += "bg-blue-50";
      buttonClasses += "text-slate-900"; // Range text
    } else if (start && hasRange) {
      wrapperClasses += "bg-gradient-to-r from-transparent to-blue-50";
      buttonClasses += "bg-blue-600 text-white shadow-md relative z-10";
    } else if (end && hasRange) {
      wrapperClasses += "bg-gradient-to-l from-transparent to-blue-50";
      buttonClasses += "bg-blue-600 text-white shadow-md relative z-10";
    } else if (selected) {
      buttonClasses += "bg-blue-600 text-white shadow-md";
    } else if (isPast) {
      buttonClasses += "text-slate-300 cursor-not-allowed";
    } else {
      buttonClasses += "text-slate-700 hover:bg-slate-100";
    }

    // Adjust wrapper for range edges visually if needed, or keep simple
    if (start && hasRange) wrapperClasses = wrapperClasses.replace("to-blue-50", "to-blue-50 w-full");
    if (end && hasRange) wrapperClasses = wrapperClasses.replace("to-blue-50", "to-blue-50 w-full");
    
    // Override wrapper for simple selected state without range
    if (selected && !hasRange) wrapperClasses = "w-full h-10 flex items-center justify-center";

    return (
      <div className={wrapperClasses}>
        <button 
          onClick={() => !isPast && handleDateClick(date)} 
          disabled={isPast}
          className={buttonClasses}
        >
          {day}
        </button>
      </div>
    );
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('es-ES', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Back Button */}
        {onBack && (
          <button 
            onClick={onBack}
            className="mb-6 flex items-center text-slate-500 hover:text-slate-900 transition-colors md:hidden"
          >
            <ArrowLeft size={20} className="mr-2" /> Volver al Inicio
          </button>
        )}

        <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12">
          
          {/* Left Side: Booking Form */}
          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="mb-8">
              <h1 className="font-serif text-4xl font-bold text-slate-900 mb-2">Reserve Su Estancia</h1>
              <p className="text-slate-600">Experimente un lujo y confort inigualables. Reserve su habitación hoy.</p>
            </div>

            <div className="space-y-8">
              
              {/* Step 1: Dates & Guests */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold mb-6 text-slate-900">1. Seleccione Fechas y Huéspedes</h3>
                
                {/* Calendar Picker */}
                <div className="flex flex-wrap justify-center gap-8 mb-8 select-none">
                  {/* Month 1: August 2024 */}
                  <div className="w-full max-w-[320px]">
                    <div className="flex items-center justify-between mb-4">
                      <button className="p-1 hover:bg-slate-100 rounded-full text-slate-600"><ChevronLeft size={20} /></button>
                      <span className="font-bold text-slate-900">Agosto 2024</span>
                      <div className="w-8"></div>
                    </div>
                    <div className="grid grid-cols-7 text-center gap-y-1">
                      {['D','L','M','M','J','V','S'].map((d, i) => (
                        <span key={i} className="text-xs font-bold text-slate-400 py-2">{d}</span>
                      ))}
                      {/* August 1st 2024 is Thursday (index 4) */}
                      {[...Array(4)].map((_, i) => <div key={`empty-aug-${i}`} />)}
                      {[...Array(31)].map((_, i) => (
                        <React.Fragment key={i}>
                          {renderCalendarDay(i + 1, 7, 2024)}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Month 2: September 2024 */}
                   <div className="w-full max-w-[320px] hidden sm:block">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8"></div>
                      <span className="font-bold text-slate-900">Septiembre 2024</span>
                      <button className="p-1 hover:bg-slate-100 rounded-full text-slate-600"><ChevronRight size={20} /></button>
                    </div>
                    <div className="grid grid-cols-7 text-center gap-y-1">
                      {['D','L','M','M','J','V','S'].map((d, i) => (
                        <span key={i} className="text-xs font-bold text-slate-400 py-2">{d}</span>
                      ))}
                       {/* Sept 1st 2024 is Sunday (index 0), no offset needed */}
                       {[...Array(30)].map((_, i) => (
                        <React.Fragment key={i}>
                          {renderCalendarDay(i + 1, 8, 2024)}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Guest Selection */}
                <div className="border-t border-slate-100 pt-6 max-w-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                        <User size={20} />
                      </div>
                      <span className="font-medium text-slate-900">Adultos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600">-</button>
                      <span className="w-4 text-center font-medium">{adults}</span>
                      <button onClick={() => setAdults(adults + 1)} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600">+</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                        <Baby size={20} />
                      </div>
                      <span className="font-medium text-slate-900">Niños</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600">-</button>
                      <span className="w-4 text-center font-medium">{children}</span>
                      <button onClick={() => setChildren(children + 1)} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600">+</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Select Room */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold mb-6 text-slate-900">2. Seleccione Su Habitación</h3>
                <div className="grid grid-cols-1 gap-4">
                  {rooms.map((room) => (
                    <div 
                      key={room.id}
                      onClick={() => setSelectedRoom(room.name)}
                      className={`border rounded-xl p-4 flex flex-col sm:flex-row gap-4 cursor-pointer transition-all ${
                        selectedRoom === room.name 
                          ? 'border-blue-600 ring-1 ring-blue-600 bg-blue-50/30' 
                          : 'border-slate-200 hover:border-blue-400'
                      }`}
                    >
                      <img src={room.image} alt={room.name} className="w-full sm:w-32 h-32 object-cover rounded-lg" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-lg text-slate-900">{room.name}</h4>
                          {selectedRoom === room.name && <Check size={20} className="text-blue-600" />}
                        </div>
                        <p className="text-sm text-slate-500 mt-1 mb-3">{room.desc}</p>
                        <div className="flex gap-4">
                          {room.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-slate-700 bg-slate-100 px-2 py-1 rounded-md">
                              {feature.icon}
                              <span className="ml-1.5">{feature.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-right mt-2 sm:mt-0 sm:self-end">
                        <span className="block text-lg font-bold text-blue-600">${room.price}</span>
                        <span className="text-xs text-slate-400">por noche</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Booking Summary */}
          <div className="w-full lg:w-1/3 xl:w-1/4 mt-8 lg:mt-0">
            <div className="sticky top-24 bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold mb-4 border-b border-slate-100 pb-4 text-slate-900">Resumen de Reserva</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Fechas</p>
                  <p className="font-medium text-slate-900">
                    {checkIn ? formatDate(checkIn) : 'Seleccionar'} - {checkOut ? formatDate(checkOut) : 'Seleccionar'}
                  </p>
                  <p className="text-xs text-slate-500">{nights} noches</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Huéspedes</p>
                  <p className="font-medium text-slate-900">{adults} Adultos{children > 0 ? `, ${children} Niños` : ''}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Habitación</p>
                  <p className="font-medium text-slate-900">{selectedRoom}</p>
                </div>
              </div>

              {checkIn && checkOut ? (
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>${currentRoom.price} x {nights} noches</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Impuestos y Tasas (12%)</span>
                    <span>${taxes.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-slate-900 pt-3 mt-1 border-t border-dashed border-slate-200">
                    <span>Total</span>
                    <span className="text-blue-600">${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                  </div>
                </div>
              ) : (
                <div className="pt-4 border-t border-slate-100 text-center text-sm text-slate-500 italic">
                  Seleccione fechas para ver el precio total
                </div>
              )}

              <button 
                disabled={!checkIn || !checkOut}
                className={`w-full mt-6 font-bold py-3.5 rounded-lg shadow-lg transition-all transform flex items-center justify-center ${
                  checkIn && checkOut 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white hover:-translate-y-0.5 hover:shadow-blue-600/20'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Reservar Ahora
              </button>
              <p className="text-xs text-center text-slate-400 mt-3">No se requiere tarjeta de crédito para reservar</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingPage;