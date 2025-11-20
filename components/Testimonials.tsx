import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    rating: 5,
    quote: "Una experiencia absolutamente inolvidable. El servicio fue impecable, las habitaciones impresionantes y la atención al detalle insuperable. Nos sentimos como la realeza desde el momento en que llegamos.",
    author: "Emily & Johnathan R."
  },
  {
    id: '2',
    rating: 5,
    quote: "La escapada perfecta a la ciudad. El Hotel Elysian combina el lujo con un ambiente cálido y acogedor. La comida era exquisita y el spa un verdadero santuario. Muy recomendable para una ocasión especial.",
    author: "Samantha L."
  },
  {
    id: '3',
    rating: 5,
    quote: "Viajo frecuentemente por negocios, y el Hotel Elysian se ha convertido en mi favorito. El personal es increíblemente profesional y servicial, asegurando una estancia perfecta y cómoda cada vez.",
    author: "David Chen"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-slate-100/50 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Lo Que Dicen Nuestros Huéspedes
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Descubra las experiencias de quienes han disfrutado de la elegancia y el confort del Hotel Elysian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-sm shadow-sm border border-slate-100">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="mr-1" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 text-sm leading-relaxed">
                "{t.quote}"
              </p>
              <p className="font-semibold text-slate-900 text-sm">
                - {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;