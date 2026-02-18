
import React from 'react';
import CTAButton from './CTAButton';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase">Tu Inversión en Salud, Energía y Libertad</h2>
          <p className="text-xl text-gray-600">Si sumaras el valor real de todos estos beneficios, estaríamos hablando de una inversión inalcanzable.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            { item: "Energía natural y sostenida", val: "$50,000" },
            { item: "Sistema inmune fortalecido", val: "$100,000" },
            { item: "Claridad mental láser", val: "$80,000" },
            { item: "Oportunidad de negocio", val: "$500,000" },
            { item: "Libertad de tiempo familiar", val: "Invaluable" }
          ].map((v, i) => (
            <div key={i} className="flex justify-between items-center p-4 border-b border-gray-100">
              <span className="text-gray-600 font-medium">{v.item}</span>
              <span className="text-gray-400 font-bold">{v.val}</span>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border-2 border-orange-600/30 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 bg-orange-600 text-white px-10 py-2 font-bold uppercase text-sm -rotate-45 translate-x-12 translate-y-6">SOLO POR HOY</div>
          
          <h3 className="text-2xl font-bold text-gray-500 mb-4">Inversión Única</h3>
          <p className="text-gray-400 line-through text-3xl mb-2 font-bold">$180,000</p>
          <div className="mb-10">
            <span className="text-7xl md:text-9xl font-black text-gray-900 tracking-tighter">$96,000</span>
            <span className="text-2xl font-bold text-gray-500"> / COP</span>
          </div>
          
          <div className="max-w-md mx-auto space-y-4 mb-12 text-left bg-white p-8 rounded-2xl shadow-inner">
             <p className="font-bold text-gray-800 text-lg">Tu inversión hoy incluye:</p>
             <ul className="space-y-3">
               <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> <span>Ganoderma Soluble Coffee Premium</span></li>
               <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> <span>Acceso al Modelo de Negocio HGW</span></li>
               <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> <span>Capacitación y Herramientas de Marketing</span></li>
               <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> <span>Comunidad de Emprendedores Exitosos</span></li>
             </ul>
          </div>
          
          <CTAButton text="SÍ, QUIERO TRANSFORMAR MI VIDA AHORA" className="w-full text-xl py-6 md:text-2xl" />
          
          <p className="mt-10 text-gray-500 font-semibold text-lg italic">
            "La pregunta no es si puedes permitírtelo. La pregunta es: ¿puedes permitirte NO hacerlo?"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
