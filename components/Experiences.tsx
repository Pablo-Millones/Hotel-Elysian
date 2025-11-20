import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Suites Lujosas',
    description: 'Escápese a su santuario privado, con mobiliario elegante, ropa de cama de felpa y vistas impresionantes de la ciudad.',
    imageUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
    link: '#rooms'
  },
  {
    id: '2',
    title: 'Alta Cocina',
    description: 'Embárquese en un viaje culinario en nuestro restaurante galardonado, donde platos innovadores se encuentran con vinos de clase mundial.',
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop',
    link: '#dining'
  },
  {
    id: '3',
    title: 'Spa Sereno',
    description: 'Rejuvenezca su cuerpo y alma con nuestra exclusiva gama de tratamientos diseñados para relajar y restaurar.',
    imageUrl: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop',
    link: '#spa'
  }
];

const Experiences: React.FC = () => {
  return (
    <div className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Descubra Nuestras Experiencias Exclusivas
          </h2>
          <p className="text-slate-600">Disfrute de las mejores comodidades diseñadas para su confort y placer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-sm shadow-sm overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={exp.imageUrl} 
                  alt={exp.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">{exp.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>
                <a href={exp.link} className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 group/link">
                  Ver Más 
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;