
import React from 'react';
import CTAButton from './CTAButton';

const Solution: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-coffee-dark text-white text-center">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-orange-500 font-bold tracking-tighter text-xl uppercase">Presentando</h2>
          <h3 className="text-4xl md:text-6xl font-black">Ganoderma Soluble Coffee <span className="text-gray-400 font-light italic text-2xl block mt-2">by HGW</span></h3>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          La fusión perfecta entre el placer de tu café matutino y los beneficios ancestrales del "Hongo de la Inmortalidad": el Ganoderma Lucidum.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          {[
            { icon: "✨", text: "Generar ingresos compartiendo lo que la gente ya ama" },
            { icon: "✨", text: "Construir un negocio desde casa presente con tu familia" },
            { icon: "✨", text: "Transformar tu salud y energía mientras tu economía crece" },
            { icon: "✨", text: "Crear un legado basado en mejorar vidas reales" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition">
              <span className="text-4xl block mb-4">{item.icon}</span>
              <p className="font-bold text-gray-100">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-coffee-accent/10 border border-coffee-accent/20 p-8 rounded-3xl max-w-3xl mx-auto mt-16 text-left">
          <h4 className="font-bold text-xl mb-6 border-b border-coffee-accent/20 pb-4">Cada taza te ofrece:</h4>
          <ul className="space-y-3 text-lg text-gray-200">
            <li>• Energía sostenida sin picos</li>
            <li>• Claridad mental total</li>
            <li>• Sistema inmunológico fortalecido</li>
            <li>• Antioxidantes poderosos</li>
            <li>• Menos estrés y ansiedad</li>
          </ul>
        </div>

        <div className="pt-10">
          <CTAButton text="PEDIR MI GANODERMA COFFEE AHORA" />
        </div>
      </div>
    </section>
  );
};

export default Solution;
