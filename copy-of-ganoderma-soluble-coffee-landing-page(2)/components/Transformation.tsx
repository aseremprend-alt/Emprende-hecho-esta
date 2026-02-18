
import React from 'react';

const Transformation: React.FC = () => {
  const before = [
    "Despertabas cansado y dependiente",
    "Trabajabas largas horas con poca energía",
    "Perdías momentos preciosos con tu familia",
    "Vivías con estrés constante sobre el dinero",
    "Salud deteriorándose sin tiempo para atenderla",
    "Elegir entre ganar dinero o pasar tiempo con seres queridos"
  ];
  const after = [
    "Despiertas con energía natural y sostenida",
    "Claridad mental para ser más productivo",
    "Trabajas desde casa con horarios flexibles",
    "Ingresos recurrentes ayudando a otros",
    "Sistema inmunológico fuerte y vitalidad real",
    "Ingresos crecientes Y tiempo de calidad total"
  ];

  return (
    <section className="py-24 px-6 bg-coffee-dark text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase">La Transformación es Completa</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-0 bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="p-10 md:p-14 bg-red-950/20">
            <h3 className="text-2xl font-black text-red-400 mb-10 flex items-center gap-3">
              <span>😰</span> ANTES
            </h3>
            <ul className="space-y-6">
              {before.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-gray-300">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-10 md:p-14 bg-green-950/20 border-t lg:border-t-0 lg:border-l border-white/10">
            <h3 className="text-2xl font-black text-green-400 mb-10 flex items-center gap-3">
              <span>✨</span> DESPUÉS
            </h3>
            <ul className="space-y-6">
              {after.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-gray-100 font-medium">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed italic">
            "Tu energía cambia. Tu confianza crece. Tu salud mejora. Tu cuenta bancaria aumenta."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
