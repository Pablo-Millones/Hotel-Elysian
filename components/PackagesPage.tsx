import React from 'react';
import { Check, ArrowRight, Heart, Sun, Sparkles, Star } from 'lucide-react';

interface PackagesPageProps {
  onBook: (packageType: string) => void;
}

const packages = [
  {
    id: 'romance',
    title: 'Escapada Romántica',
    subtitle: 'Reconectar en el Paraíso',
    description: 'Celebre su amor con una experiencia curada diseñada para parejas. Disfrute de privacidad, lujo y momentos inolvidables juntos.',
    price: '$899',
    duration: 'por noche',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop',
    icon: <Heart className="w-6 h-6 text-rose-500" />,
    inclusions: [
      'Estancia en una Suite con Vista al Océano',
      'Botella de Champán y Fresas de Bienvenida',
      'Masaje en Pareja de 60 Minutos en el Spa Sereno',
      'Cena Privada a la Luz de las Velas en la Playa',
      'Desayuno Diario en la Cama',
      'Salida Tardía (4:00 PM)'
    ]
  },
  {
    id: 'wellness',
    title: 'Retiro de Bienestar Holístico',
    subtitle: 'Rejuvenecer Cuerpo y Mente',
    description: 'Embárquese en un viaje de restauración. Este paquete combina alojamiento de lujo con tratamientos a medida para restaurar su equilibrio.',
    price: '$750',
    duration: 'por noche',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop',
    icon: <Sparkles className="w-6 h-6 text-teal-500" />,
    inclusions: [
      'Estancia en una Villa con Jardín',
      'Consulta Personal de Bienestar',
      'Sesiones Diarias de Yoga y Meditación',
      'Crédito Diario de Spa de $200',
      'Opciones de Menú Detox Saludable',
      'Acceso al Circuito de Hidroterapia Termal'
    ]
  },
  {
    id: 'family',
    title: 'Aventura Familiar',
    subtitle: 'Diversión para Todas las Edades',
    description: 'Cree recuerdos duraderos con toda la familia. Nos ocupamos de los detalles para que pueda concentrarse en divertirse juntos.',
    price: '$650',
    duration: 'por noche',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop',
    icon: <Sun className="w-6 h-6 text-amber-500" />,
    inclusions: [
      'Estancia en una Habitación Doble Familiar o Suite',
      'Niños se Alojan y Comen Gratis (menores de 12 años)',
      'Acceso Gratuito al Club Infantil',
      'Una Cena Familiar en The Morning Terrace',
      'Entradas al Acuario o Parque Acuático Local',
      'Paquete de Juguetes de Bienvenida para Niños'
    ]
  }
];

const PackagesPage: React.FC<PackagesPageProps> = ({ onBook }) => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">Ofertas Especiales</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">Paquetes Exclusivos</h1>
          <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">
            Mejore su estancia con nuestros paquetes cuidadosamente seleccionados, diseñados para ofrecerle lo mejor del Hotel Elysian.
          </p>
        </div>

        {/* Featured Offer (Optional layout variation) */}
        <div className="mb-20 relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 text-white">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1571896349842-68c477a820df?q=80&w=2070&auto=format&fit=crop" 
              alt="Piscina de Lujo" 
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-amber-400 mb-4">
                <Star size={20} fill="currentColor" />
                <span className="font-bold tracking-wide">OFERTA POR TIEMPO LIMITADO</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Quédese 4 Noches, Pague 3
              </h2>
              <p className="text-lg text-slate-200 mb-8 max-w-xl">
                Extienda su escape al paraíso. Reserve una estancia consecutiva de 4 noches en cualquier categoría de Suite y reciba la cuarta noche de cortesía.
              </p>
              <button 
                onClick={() => onBook('Oferta Pague 3 Quédese 4')}
                className="bg-white text-slate-900 px-8 py-3.5 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center gap-2"
              >
                Consultar Disponibilidad <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 flex flex-col">
              {/* Image Header */}
              <div className="h-64 relative overflow-hidden group">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
                  {pkg.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">{pkg.subtitle}</p>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">{pkg.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-slate-100 my-4"></div>

                {/* Inclusions */}
                <div className="mb-8 flex-1">
                  <p className="font-semibold text-slate-900 text-sm mb-3">El Paquete Incluye:</p>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer / Price / Action */}
                <div className="mt-auto">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                       <p className="text-xs text-slate-400">Desde</p>
                       <p className="flex items-baseline gap-1">
                         <span className="text-2xl font-bold text-slate-900">{pkg.price}</span>
                         <span className="text-sm text-slate-500">{pkg.duration}</span>
                       </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => onBook(pkg.title)}
                    className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2 group"
                  >
                    Reservar Paquete <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terms */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 italic max-w-2xl mx-auto">
            *Las ofertas están sujetas a disponibilidad y no pueden combinarse con otras promociones. Pueden aplicarse fechas restringidas. Las tarifas varían según la selección de habitación y la estacionalidad.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PackagesPage;