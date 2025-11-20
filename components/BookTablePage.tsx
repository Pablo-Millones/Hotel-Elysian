import React, { useState } from 'react';
import { Calendar, Clock, Users, ChevronDown, Check, Utensils, ArrowLeft, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface BookTablePageProps {
  onBack?: () => void;
}

const restaurants = [
  { id: 'azure', name: 'The Azure', type: 'Alta Cocina' },
  { id: 'breeze', name: 'Ocean Breeze Bar', type: 'Bar de Cócteles y Salón' },
  { id: 'terrace', name: 'The Morning Terrace', type: 'Desayuno y Brunch' }
];

const BookTablePage: React.FC<BookTablePageProps> = ({ onBack }) => {
  const [step, setStep] = useState<'form' | 'confirmation'>('form');
  const [formData, setFormData] = useState({
    restaurant: 'The Azure',
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep('confirmation');
      window.scrollTo(0, 0);
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        {onBack && (
          <button 
            onClick={onBack}
            className="mb-8 flex items-center text-slate-500 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" /> 
            Volver a Restaurantes
          </button>
        )}

        {step === 'form' ? (
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100">
            {/* Header */}
            <div className="bg-slate-900 p-8 text-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
               <div className="relative z-10">
                 <Utensils className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                 <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">Reserve Su Mesa</h1>
                 <p className="text-slate-300 max-w-md mx-auto">Asegure su lugar en uno de los exclusivos lugares de comedor del Hotel Elysian.</p>
               </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                {/* Restaurant Selection */}
                <div className="col-span-1 md:col-span-2 space-y-2">
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Seleccione Lugar</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {restaurants.map((rest) => (
                      <div 
                        key={rest.id}
                        onClick={() => handleChange('restaurant', rest.name)}
                        className={`cursor-pointer rounded-lg border p-4 transition-all ${
                          formData.restaurant === rest.name 
                            ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' 
                            : 'border-slate-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="font-serif font-bold text-slate-900">{rest.name}</div>
                        <div className="text-xs text-slate-500 mt-1">{rest.type}</div>
                        {formData.restaurant === rest.name && (
                          <div className="mt-2 flex justify-end">
                            <Check size={16} className="text-blue-600" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Fecha</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <input 
                      type="date"
                      required
                      className="block w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      value={formData.date}
                      onChange={(e) => handleChange('date', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Hora</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <select 
                      required
                      className="block w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition-all"
                      value={formData.time}
                      onChange={(e) => handleChange('time', e.target.value)}
                    >
                      <option value="">Seleccionar Hora</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Número de Huéspedes</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <select 
                      required
                      className="block w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition-all"
                      value={formData.guests}
                      onChange={(e) => handleChange('guests', e.target.value)}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Persona' : 'Personas'}</option>
                      ))}
                      <option value="9+">9+ (Contactar para Grupo)</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 my-8"></div>

              <div className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-slate-900">Detalles de Contacto</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-600">Nombre Completo</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                      <input 
                        type="text"
                        required
                        placeholder="Juan Pérez"
                        className="block w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-600">Correo Electrónico</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                      <input 
                        type="email"
                        required
                        placeholder="juan@ejemplo.com"
                        className="block w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-600">Número de Teléfono</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                      <input 
                        type="tel"
                        required
                        placeholder="(555) 123-4567"
                        className="block w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-600">Solicitudes Especiales</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <textarea 
                      rows={3}
                      placeholder="Alergias, ocasión especial (cumpleaños, aniversario), preferencia de asientos..."
                      className="block w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                      value={formData.requests}
                      onChange={(e) => handleChange('requests', e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center text-lg"
                >
                  Confirmar Reserva
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  Al hacer clic en "Confirmar Reserva", usted acepta nuestra política de comedor. Las cancelaciones deben hacerse con al menos 24 horas de antelación.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100 p-10 text-center animate-fade-in">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
              <Check size={48} />
            </div>
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">¡Reserva Confirmada!</h2>
            <p className="text-slate-600 text-lg mb-8">
              Esperamos darle la bienvenida a <strong>{formData.restaurant}</strong> el <strong>{formData.date}</strong> a las <strong>{formData.time}</strong>.
            </p>
            <div className="bg-slate-50 rounded-lg p-6 max-w-md mx-auto mb-8 text-left border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Detalles de la Reserva</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Nombre del Huésped:</span> <span className="font-medium">{formData.name}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Tamaño del Grupo:</span> <span className="font-medium">{formData.guests} Huéspedes</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Confirmación #:</span> <span className="font-mono font-medium">RES-{Math.floor(Math.random() * 10000)}</span></div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button 
                  onClick={() => {
                    setStep('form');
                    setFormData(prev => ({ ...prev, date: '', time: '' }));
                  }}
                  className="px-8 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Hacer Otra Reserva
                </button>
                <button 
                  onClick={onBack}
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  Volver a Restaurantes
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookTablePage;