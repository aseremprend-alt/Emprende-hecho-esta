
import React from 'react';

const Steps: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-20 uppercase">Tu Camino en 3 Pasos Simples</h2>
        
        <div className="flex flex-col gap-12">
          {[
            {
              step: "PASO 1",
              title: "EXPERIMENTA LA DIFERENCIA",
              content: "Comienza tu día con una taza. Simplemente vierte el contenido de un sobre en agua. En cuestión de días notarás: más energía, mejor concentración y mejor ánimo."
            },
            {
              step: "PASO 2",
              title: "COMPARTE TU EXPERIENCIA",
              content: "Cuando otros noten el cambio, simplemente comparte tu experiencia genuina. Invítalos a probar una taza. Muéstrales los beneficios de primera mano."
            },
            {
              step: "PASO 3",
              title: "CONSTRUYE TU NEGOCIO Y LIBERTAD",
              content: "A medida que más personas se unan, generas ingresos recurrentes. Tendrás acceso a entrenamiento continuo y las técnicas de manifestación que he perfeccionado."
            }
          ].map((item, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-7xl font-black text-gray-100 mb-2">{item.step}</span>
                <h3 className="text-2xl md:text-3xl font-black mb-6 text-orange-600">{item.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{item.content}</p>
              </div>
              <div className="w-full md:w-1/2">
                <img src={`https://picsum.photos/seed/step${idx}/800/600`} alt={item.title} className="rounded-2xl shadow-xl w-full h-80 object-cover" />
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-3xl font-black mt-20 text-gray-800 italic">
          Es así de simple. Experimenta. Comparte. Crece.
        </p>
      </div>
    </section>
  );
};

export default Steps;
