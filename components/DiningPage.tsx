import React, { useState, useEffect } from 'react';
import { Clock, Utensils, Coffee, Wine, ChefHat, ArrowRight, X } from 'lucide-react';

type MenuItem = {
  name: string;
  price: string;
  description: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

type MenuData = {
  [key: string]: {
    title: string;
    subtitle: string;
    sections: MenuSection[];
  };
};

const menus: MenuData = {
  azure: {
    title: "The Azure",
    subtitle: "Menú Degustación de Temporada",
    sections: [
      {
        title: "Entrantes",
        items: [
          { name: "Vieiras a la Plancha", price: "$24", description: "Puré de coliflor, aceite de trufa, micro cilantro" },
          { name: "Carpaccio de Ternera Wagyu", price: "$28", description: "Virutas de parmesano, alcaparras, mostaza de trufa, rúcula" },
          { name: "Bisque de Langosta", price: "$22", description: "Crema de coñac, cebollino, picatostes de masa madre recién horneados" }
        ]
      },
      {
        title: "Platos Principales",
        items: [
          { name: "Bacalao Negro Glaseado con Miso", price: "$48", description: "Bok choy, caldo dashi de jengibre, chips de raíz de loto" },
          { name: "Costillar de Cordero en Costra de Hierbas", price: "$52", description: "Patatas fondant, ratatouille, jugo de romero" },
          { name: "Risotto de Setas y Trufa", price: "$36", description: "Arroz Arborio, setas silvestres, trufa negra, crujiente de parmesano" }
        ]
      },
      {
        title: "Postres",
        items: [
          { name: "Soufflé de Chocolate Valrhona", price: "$18", description: "Gelato de vainilla, coulis de frambuesa" },
          { name: "Tarta de Limón y Albahaca", price: "$16", description: "Besos de merengue, ralladura confitada" }
        ]
      }
    ]
  },
  breeze: {
    title: "Ocean Breeze Bar",
    subtitle: "Cócteles y Tapas",
    sections: [
      {
        title: "Cócteles de Autor",
        items: [
          { name: "Atardecer Elysian", price: "$18", description: "Ron añejo, piña fresca, granadina, lima, amargos aromáticos" },
          { name: "Smash de Albahaca y Pepino", price: "$16", description: "Ginebra, pepino machacado, albahaca fresca, jugo de limón, jarabe simple" },
          { name: "Margarita de Mango Picante", price: "$17", description: "Tequila reposado, puré de mango, jalapeño, borde de tajín" }
        ]
      },
      {
        title: "Platos Pequeños",
        items: [
          { name: "Calamares Crujientes", price: "$19", description: "Alioli de limón, salsa marinara" },
          { name: "Tacos de Tartar de Atún", price: "$22", description: "Mousse de aguacate, semillas de sésamo, concha de wonton" },
          { name: "Papas Trufadas", price: "$14", description: "Parmesano, aceite de trufa blanca, alioli de ajo" },
          { name: "Tabla de Quesos Artesanales", price: "$26", description: "Selección de quesos locales e importados, panal de miel, nueces, galletas" }
        ]
      }
    ]
  },
  terrace: {
    title: "The Morning Terrace",
    subtitle: "Desayuno y Brunch",
    sections: [
      {
        title: "De la Plancha",
        items: [
          { name: "Panqueques de Suero de Leche", price: "$18", description: "Compota de bayas, jarabe de arce, mantequilla batida" },
          { name: "Tostada Francesa Brioche", price: "$19", description: "Plátanos caramelizados, nueces, azúcar con canela" }
        ]
      },
      {
        title: "Huevos y Salados",
        items: [
          { name: "Huevos Benedictinos Clásicos", price: "$22", description: "Huevos escalfados, tocino canadiense, holandesa, muffin inglés" },
          { name: "Tostada de Aguacate", price: "$20", description: "Masa madre, aguacate triturado, rábano, huevo escalfado, hojuelas de chile" },
          { name: "Bagel de Salmón Ahumado", price: "$24", description: "Queso crema, alcaparras, cebolla roja, eneldo" }
        ]
      },
      {
        title: "Ligero y Saludable",
        items: [
          { name: "Bol de Acai", price: "$16", description: "Granola, plátano, bayas, hojuelas de coco, miel" },
          { name: "Plato de Frutas Tropicales", price: "$15", description: "Selección de frutas frescas de temporada, salsa de yogur de lima" }
        ]
      }
    ]
  }
};

const diningVenues = [
  {
    id: 'azure',
    name: 'The Azure',
    type: 'Alta Cocina',
    description: 'Experimente la excelencia culinaria en nuestro restaurante con estrella Michelin. El chef Laurent crea un menú de degustación de temporada que celebra los ingredientes locales con un toque francés moderno.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop',
    hours: 'Cena: 6:00 PM - 10:30 PM',
    icon: <Utensils className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'breeze',
    name: 'Ocean Breeze Bar',
    type: 'Bar de Cócteles y Salón',
    description: 'Beba cócteles artesanales mientras contempla la puesta de sol. Nuestro salón al aire libre ofrece un ambiente relajado con vistas panorámicas al océano y tapas ligeras.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop',
    hours: 'Diario: 11:00 AM - 1:00 AM',
    icon: <Wine className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'terrace',
    name: 'The Morning Terrace',
    type: 'Desayuno y Brunch',
    description: 'Comience su día con nuestro exclusivo buffet de desayuno con frutas tropicales frescas, pasteles y especialidades hechas a pedido con vistas a los jardines.',
    image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop',
    hours: 'Desayuno: 7:00 AM - 11:00 AM',
    icon: <Coffee className="w-6 h-6 text-blue-600" />
  }
];

interface DiningPageProps {
  onNavigate: (page: string) => void;
}

const DiningPage: React.FC<DiningPageProps> = ({ onNavigate }) => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  useEffect(() => {
    if (activeMenuId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeMenuId]);

  const activeMenu = activeMenuId ? menus[activeMenuId] : null;

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">Cena Exquisita</h1>
          <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">
            Embarque en un viaje gastronómico. Desde bocados informales junto a la playa hasta cenas galardonadas de alta cocina, cada comida es una celebración del sabor.
          </p>
        </div>

        {/* Hero Feature */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl mb-16">
             <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
                alt="Configuración de mesa de comedor" 
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white p-6 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 max-w-lg">
                    <h2 className="font-serif text-3xl font-bold mb-2">Pruebe lo Extraordinario</h2>
                    <p className="text-sm font-medium tracking-wider uppercase mb-6">Reserve Su Mesa Hoy</p>
                    <button 
                      onClick={() => onNavigate('book-table')}
                      className="bg-white text-slate-900 px-6 py-2.5 text-sm font-bold rounded hover:bg-blue-50 transition-colors"
                    >
                      Reservar Mesa
                    </button>
                </div>
             </div>
        </div>

        {/* Venues List */}
        <div className="space-y-12">
          {diningVenues.map((venue, index) => (
            <div key={venue.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300`}>
              <div className="md:w-1/2 h-64 md:h-auto relative group">
                 <img 
                   src={venue.image} 
                   alt={venue.name} 
                   className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" 
                 />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                 <div className="flex items-center gap-3 mb-3">
                    {venue.icon}
                    <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">{venue.type}</span>
                 </div>
                 <h3 className="font-serif text-3xl font-bold text-slate-900 mb-4">{venue.name}</h3>
                 <p className="text-slate-600 mb-6 leading-relaxed">
                    {venue.description}
                 </p>
                 <div className="flex items-center gap-6 text-sm text-slate-500 border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full">
                        <Clock size={16} className="text-slate-400" />
                        <span className="font-medium">{venue.hours}</span>
                    </div>
                 </div>
                 <div className="mt-8 flex gap-4">
                    <button 
                      onClick={() => setActiveMenuId(venue.id)}
                      className="px-6 py-2.5 bg-slate-900 text-white font-medium rounded text-sm hover:bg-slate-800 transition-colors flex items-center"
                    >
                        Ver Menú <ArrowRight size={16} className="ml-2" />
                    </button>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chef's Special Section */}
        <div className="mt-20 bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-12">
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3 text-center md:text-left">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 text-blue-600">
                    <ChefHat size={40} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">Cenas Privadas y Eventos</h3>
                  <p className="text-slate-600 mb-6">
                      ¿Planeando una ocasión especial? Permítanos organizar una experiencia gastronómica a medida para usted y sus invitados, ya sea una cena romántica en la playa o una gran celebración.
                  </p>
                  <button className="text-blue-600 font-bold text-sm hover:text-blue-800 hover:underline">
                      Contactar al Equipo de Eventos
                  </button>
              </div>
              <div className="md:w-2/3 grid grid-cols-2 gap-4">
                   <img src="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1920&auto=format&fit=crop" alt="Cena privada" className="rounded-lg object-cover h-48 w-full" />
                   <img src="https://images.unsplash.com/photo-1467003909585-2f8a7270028d?q=80&w=1884&auto=format&fit=crop" alt="Comida emplatada" className="rounded-lg object-cover h-48 w-full" />
              </div>
           </div>
        </div>
      </div>

      {/* Menu Modal */}
      {activeMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveMenuId(null)}
          />
          <div className="relative bg-white w-full max-w-2xl max-h-[85vh] rounded-xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="bg-slate-900 p-6 text-center relative shrink-0">
              <button 
                onClick={() => setActiveMenuId(null)}
                className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <X size={24} />
              </button>
              <h2 className="font-serif text-2xl font-bold text-white mb-1">{activeMenu.title}</h2>
              <p className="text-blue-400 text-sm uppercase tracking-wider font-medium">{activeMenu.subtitle}</p>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="overflow-y-auto p-6 md:p-8 bg-slate-50">
              <div className="space-y-8">
                {activeMenu.sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 inline-block pr-8">
                      {section.title}
                    </h3>
                    <div className="space-y-6">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex justify-between items-start group">
                          <div className="flex-1 pr-8">
                            <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{item.name}</h4>
                            <p className="text-sm text-slate-500 mt-1 italic">{item.description}</p>
                          </div>
                          <div className="text-slate-900 font-bold font-serif">{item.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-6 border-t border-slate-200 text-center text-xs text-slate-400 italic">
                Los precios están sujetos a cargos por servicio e impuestos aplicables. Por favor, informe a su camarero sobre cualquier alergia alimentaria.
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-slate-100 text-center shrink-0">
               <button 
                 className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded font-medium transition-colors shadow-lg shadow-blue-600/20"
                 onClick={() => {
                   setActiveMenuId(null);
                   onNavigate('book-table');
                 }}
               >
                 Reservar una Mesa
               </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default DiningPage;