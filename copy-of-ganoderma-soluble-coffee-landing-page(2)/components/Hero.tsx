
import React from 'react';
import CTAButton from './CTAButton';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-coffee-dark text-white pt-24 pb-32 px-6 flex flex-col items-center text-center">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
          ¿Y Si Pudieras Transformar Tu Café de Cada Mañana en Tu Boleto Hacia la <span className="text-orange-500">Libertad Financiera</span> Y Una <span className="text-green-500">Salud Extraordinaria?</span>
        </h1>
        
        <p className="text-lg md:text-2xl font-semibold text-gray-300 max-w-3xl mx-auto">
          Descubre Cómo Miles de Emprendedores Están Construyendo Ingresos Recurrentes Mientras Mejoran Su Bienestar... Todo Gracias a Una Taza de Café
        </p>
        
        <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl max-w-4xl mx-auto mt-12">
          <p className="text-base md:text-xl font-medium text-gray-200">
            No es solo café. Es el vehículo perfecto que te permite generar ingresos desde casa, recuperar el tiempo perdido con tu familia y sentirte con más energía que nunca... sin sacrificar tus mañanas ni tu salud.
          </p>
          <p className="mt-4 text-gray-400 italic">
            Imagina despertar sabiendo que cada taza que compartes puede convertirse en ingresos pasivos mientras transformas vidas.
          </p>
        </div>

        <div className="pt-8">
          <CTAButton text="SÍ, QUIERO TRANSFORMAR MI VIDA AHORA" />
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent opacity-5"></div>
    </section>
  );
};

export default Hero;
