import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

type GalleryItem = {
  id: string;
  category: 'Suites' | 'Cena' | 'Amenidades' | 'Vistas';
  src: string;
  alt: string;
  title: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    category: 'Suites',
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop',
    alt: 'Sala de estar de la Suite Presidencial frente al mar',
    title: 'Suite Presidencial',
  },
  {
    id: '2',
    category: 'Cena',
    src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop',
    alt: 'Bar de Cócteles de Alta Cocina',
    title: 'El Bar Azure',
  },
  {
    id: '3',
    category: 'Amenidades',
    src: 'https://images.unsplash.com/photo-1572331165267-854da2b00cc3?q=80&w=2070&auto=format&fit=crop',
    alt: 'Piscina Infinita al Atardecer',
    title: 'Piscina de Borde Infinito',
  },
  {
    id: '4',
    category: 'Suites',
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop',
    alt: 'Baño de lujo con bañera independiente',
    title: 'Baño Real',
  },
  {
    id: '5',
    category: 'Cena',
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop',
    alt: 'Cena Gourmet Emplatada',
    title: 'Menú Degustación del Chef',
  },
  {
    id: '6',
    category: 'Vistas',
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
    alt: 'Arquitectura del Vestíbulo del Hotel',
    title: 'Gran Vestíbulo',
  },
  {
    id: '7',
    category: 'Amenidades',
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop',
    alt: 'Sala de Masajes del Spa',
    title: 'Spa Serenidad',
  },
  {
    id: '8',
    category: 'Vistas',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
    alt: 'Cabañas de Playa Privada',
    title: 'Playa Privada',
  },
];

const categories = ['Todo', 'Suites', 'Cena', 'Amenidades', 'Vistas'];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Todo');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Filter images based on selection
  const filteredImages = filter === 'Todo' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  // Disable body scroll when lightbox is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === filteredImages.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? filteredImages.length - 1 : (prev as number) - 1
      );
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    if (e.key === 'Escape') setSelectedImageIndex(null);
    if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => 
            prev === filteredImages.length - 1 ? 0 : (prev as number) + 1
        );
    }
    if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => 
            prev === 0 ? filteredImages.length - 1 : (prev as number) - 1
        );
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredImages]);

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Un Viaje Visual
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Sumérjase en la belleza cautivadora y los detalles exquisitos que definen la experiencia del Hotel Elysian.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setSelectedImageIndex(null);
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-slate-900 text-white shadow-lg scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-sm shadow-sm aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                <p className="text-white font-serif text-lg">{item.title}</p>
                <p className="text-white/80 text-xs uppercase tracking-wider">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedImageIndex(null)}
        >
          
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-all z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-all z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md"
          >
            <ChevronRight size={32} />
          </button>

          {/* Main Image */}
          <div 
            className="relative max-w-7xl max-h-[90vh] px-4 md:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImageIndex].src}
              alt={filteredImages[selectedImageIndex].alt}
              className="max-h-[85vh] w-auto max-w-full object-contain shadow-2xl rounded-sm"
            />
            <div className="absolute bottom-[-3rem] left-0 right-0 text-center text-white">
              <h3 className="text-xl font-serif">{filteredImages[selectedImageIndex].title}</h3>
              <p className="text-sm text-white/60 mt-1">
                {selectedImageIndex + 1} de {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;