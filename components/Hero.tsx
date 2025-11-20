import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
            // High quality resort image
            backgroundImage: `url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop')`
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-10">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
          Experimente un Lujo Inigualable
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light">
          Su retiro exclusivo en el corazón de la ciudad. Descubra un santuario donde la elegancia atemporal se encuentra con el confort moderno.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-semibold transition-all transform hover:-translate-y-0.5 shadow-xl shadow-blue-900/20">
          Reserve su Estancia
        </button>
      </div>
    </div>
  );
};

export default Hero;