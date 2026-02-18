
import React from 'react';

const Story: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white text-gray-800 border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-lg">
          <p className="font-bold text-orange-600 uppercase tracking-widest text-sm">Mi Historia</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Hace tres años, yo estaba exactamente donde tú estás ahora.</h2>
          
          <p>
            Mi nombre es <strong>MariaN</strong>, y aunque muchos me conocen hoy como una emprendedora exitosa en marketing y manifestación, hubo un tiempo en que me sentía completamente perdida.
          </p>
          <p>
            Tenía la experiencia en marketing, conocía las estrategias... pero me faltaba algo crucial: <strong>el producto correcto</strong>. Algo que la gente realmente necesitara.
          </p>
          <p>
            Hasta que un día descubrí el <strong>Ganoderma Lucidum</strong>. Al principio era escéptica. Pero cuando vi cómo algo tan simple como una taza de café podía transformar la energía, la concentración y el bienestar general... <strong>Todo cambió.</strong>
          </p>
          <p className="font-semibold text-gray-900">
            Me di cuenta de que tenía entre mis manos la combinación perfecta: Café + Salud + Negocio.
          </p>
        </div>
        <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 relative">
          <div className="absolute inset-0 bg-coffee-accent rounded-full opacity-10 animate-pulse"></div>
          <img 
            src="https://picsum.photos/seed/marian/400/400" 
            alt="MariaN" 
            className="w-full h-full object-cover rounded-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
