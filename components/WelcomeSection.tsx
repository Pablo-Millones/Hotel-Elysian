import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="bg-slate-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Un Mensaje de Bienvenida del Hotel Elysian
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed font-light">
          Bienvenido al Hotel Elysian, donde la elegancia atemporal se encuentra con el confort moderno. Desde el momento en que llega, nuestro equipo dedicado se compromete a brindar una experiencia inigualable, asegurando que su estancia sea nada menos que extraordinaria. Le invitamos a relajarse, disfrutar y crear recuerdos duraderos con nosotros.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;