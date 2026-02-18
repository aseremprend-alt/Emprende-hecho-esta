
import React from 'react';

const AboutCreator: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/3">
           <img 
            src="https://picsum.photos/seed/marian-bio/600/800" 
            alt="MariaN Bio" 
            className="rounded-3xl shadow-2xl w-full grayscale-0"
           />
        </div>
        <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm">Conoce a tu guía</h2>
          <h3 className="text-4xl font-black text-gray-900">MariaN: Tu Aliada en el Camino Hacia la Libertad</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Hola, soy MariaN, y mi misión es simple: ayudar a emprendedores como tú a construir negocios exitosos que les den libertad financiera sin sacrificar su salud ni su tiempo familiar.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Con más de 15 años en marketing, he visto qué funciona y qué no. Pero más importante: <strong>he experimentado la frustración que tú sientes ahora.</strong>
          </p>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic font-medium text-gray-800">
            "Cuando te unes a esta comunidad, obtienes mi experiencia en marketing, técnicas de manifestación y un apoyo personalizado para construir tu negocio a tu ritmo."
          </div>
          
          <p className="font-black text-gray-900 text-xl pt-4">¿Estás listo para escribir tu propia historia?</p>
        </div>
      </div>
    </section>
  );
};

export default AboutCreator;
